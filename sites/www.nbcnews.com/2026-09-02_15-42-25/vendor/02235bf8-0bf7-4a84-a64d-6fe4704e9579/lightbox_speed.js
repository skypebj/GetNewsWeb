var DIGIOH_LOADER = DIGIOH_LOADER || {};
(function (digioh_loader) {
    if (digioh_loader.loaded) { return; }
    digioh_loader.loaded = true;
    digioh_loader.loads = digioh_loader.loads || {};
    function getPromise (doc) {
        let ld = digioh_loader.loads;
        if (ld[doc]) {
            return ld[doc];
        }
        let p = {};
        p.promise = new Promise((res, rej) => {
            p.resolveCallback = res;
            p.rejectCallback = rej;
        });
        ld[doc] = p;
        return p;
    }
    digioh_loader.getPromise = getPromise;
    const srcPath = "//www.lightboxcdn.com/vendor/02235bf8-0bf7-4a84-a64d-6fe4704e9579/";

    function createScriptElement(src, id) {
        var e = document.createElement('script');
        e.type = 'text/javascript';
        e.async = true;
        e.fetchPriority = "high";
        e.src = src;
        if (id) { e.id = id; }
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
    }

    function loadScript(doc, filename, cb) {
        if (!digioh_loader.loads[doc]) {
            getPromise(doc);
            let src = `${srcPath}${filename}?cb=${cb}`;
            createScriptElement(src);
        }
    };

    function sendPV() {
        try {
            window.SENT_LIGHTBOX_PV = true;

            var hn = 'empty';
            if (window && window.location && window.location.hostname) {
                hn = window.location.hostname;
            }

            var i = document.createElement("img");
            i.width = 1;
            i.height = 1;
            // t = ms from navigation start to when this loader executed; lv = which loader variant served.
            // Together these show whether a merchant page-speed app deferred our tag (large t) and which
            // lightbox_speed.js variant the account is publishing. Both are read from the Cloudflare logs.
            var t = (window.performance && typeof performance.now === 'function') ? Math.round(performance.now()) : -1;

            i.src = ('https://www.lightboxcdn.com/z9g/digibox.gif?c=' + (new Date().getTime()) + '&h=' + encodeURIComponent(hn) + '&e=p&u=45154' + '&t=' + t + '&lv=o');
        }
        catch (e) {
        }
    };

    function jsonp(src, callback) {
        const id = "__dgo" + Math.random().toString(36).replace(/^0\./, "");
        const prefix = src.includes("?") ? "&" : "?";
        src += `${prefix}callback=${id}`;
        window[id] = (data) => {
            document.querySelector(`#${id}`)?.remove();
            delete window[id];
            callback(data);
        };
        createScriptElement(src, id);
    }

    function initApi() {
        let c = localStorage.getItem("dgdr") || sessionStorage.getItem("dgdr");
        if (c) {
            if (c.match(/^{.*"env_ver":\s?"digioh-.*}$/i)) {
                const json = JSON.parse(c);
                if (!json.expires || json.expires > Date.now()) {
                    return;
                }
            }
            else {
                return;
            }
        }
        let p = getPromise("dgdr");
        let hostname = window?.location?.hostname || 'empty';
        let uri = `https://api.lightboxcdn.com/z9gd/02235bf8-0bf7-4a84-a64d-6fe4704e9579/${hostname}/jsonp/z?cb=${Date.now()}`;
        if (/^true$/.test("false")) {
            uri += "&skip_geo=true";
        }
        jsonp(uri, p.resolveCallback);
    }

    sendPV();
    initApi();

    const qaMode = (window.sessionStorage.getItem('xdibx_boxqamode') == 1 || window.location.href.indexOf('boxqamode') > 0);
    if (qaMode) {
        loadScript("user", "user_qa.js", "639239539849416961");
    loadScript("custom", "custom_qa.js", "0B8740479C09BD36FD5BCDAD19BB233D");
    loadScript("main", "main_qa.js", "F488C32E0C2963DB7A0630F3F3D6B5C9");
    }
    else {
        loadScript("user", "user.js", "639239539849416961");
    loadScript("custom", "custom.js", "52C26F7A521E55C3A3BAD61DED3A1F4F");
    loadScript("main", "main.js", "4476239FA02A212EEEDED493CD838A7F");
    }

})(DIGIOH_LOADER);