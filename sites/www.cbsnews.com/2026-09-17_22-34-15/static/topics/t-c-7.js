(function (w) {
    'use strict';

    // v7: infolinks-as-caller. Instead of calling document.browsingTopics() in the
    // publisher's origin (fragmented, never accumulates), inject an infolinks-origin
    // iframe with allow="browsing-topics" and let IT call the API. The caller is then
    // a single infolinks origin across all publishers, so observation history builds up.
    //
    // This loader runs in the publisher page (as the publisher origin). It only places
    // the iframe; the actual Topics call + pixel happens inside collector.html.

    var BASE_URL = 'https://pixel-580839345669.us-central1.run.app';
    var SOURCE = 'topics_test_7';
    var IFRAME_BASE = 'https://resources.infolinks.com/static/topics/collector.html';
    var FLAG = '__ilTopicsIframe';

    // Only used for the cross-origin "couldn't place the caller iframe" marker.
    function firePixel(params) {
        params = params || {};
        var pageUrl = '';
        try { pageUrl = (w && w.location && w.location.href) ? ('' + w.location.href) : ''; } catch (e) { pageUrl = ''; }
        var q = { source: SOURCE, name: 'topics', p3: pageUrl }, k;
        for (k in params) { if (params.hasOwnProperty(k)) { q[k] = params[k]; } }
        var parts = [];
        for (k in q) { if (q.hasOwnProperty(k)) { parts.push(encodeURIComponent(k) + '=' + encodeURIComponent(q[k])); } }
        var g = document.createElement('img');
        g.src = BASE_URL + '?' + parts.join('&');
        g.width = 1; g.height = 1; g.style.display = 'none';
        (document.body || document.documentElement).appendChild(g);
    }

    // Can we reach the top window's document? (Any cross-origin ancestor throws.)
    function topReachable() {
        try {
            var probe = w.top.document && w.top.location.href; // eslint-disable-line no-unused-vars
            return !!w.top.document;
        } catch (e) {
            return false;
        }
    }

    // Place the caller iframe into `win` (once per that window).
    function injectInto(win, pageUrl) {
        try { if (win[FLAG]) { return; } win[FLAG] = 1; } catch (e) { /* cross-window set may fail; accept rare dup */ }
        try {
            var d = win.document;
            var f = d.createElement('iframe');
            f.src = IFRAME_BASE + '?pu=' + encodeURIComponent(pageUrl);
            f.setAttribute('allow', 'browsing-topics');           // delegate the permission
            f.setAttribute('aria-hidden', 'true');
            f.setAttribute('tabindex', '-1');
            f.style.cssText = 'position:absolute;top:-9999px;left:-9999px;width:1px;height:1px;border:0;';
            (d.body || d.documentElement).appendChild(f);
        } catch (e) {
            firePixel({ p2: '0', p7: 'iframe_injectfail:' + (e && e.name ? e.name : 'error') });
        }
    }

    function main() {
        // Place the caller iframe in the TOP (publisher) frame, where browsing-topics is
        // allowed by default and can be delegated to our infolinks subframe.
        if (topReachable()) {
            var pageUrl = '';
            try { pageUrl = '' + w.top.location.href; } catch (e) { try { pageUrl = '' + w.location.href; } catch (e2) { pageUrl = ''; } }
            injectInto(w.top, pageUrl);
            return;
        }
        // Cross-origin barrier (safeframe): can't reach a permitted top -> record & skip.
        firePixel({ p2: '0', p7: 'iframe_xorigin' });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', main);
    } else {
        main();
    }
})(window);
