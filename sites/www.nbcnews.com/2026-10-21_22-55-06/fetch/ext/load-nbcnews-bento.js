mps = mps || {};
mps._ext = {};
var gpt = gpt || {};
mps._backendhost = 'mps.nbcuni.com'

//-> DEFINE VARIABLE nowrite -> mps._ext.nowrite
mps._ext.nowrite = 2;
//-> DEFINE VARIABLE tm_redirect -> mps._ext.tm_redirect
mps._ext.tm_redirect = 1;
//-> DEFINE VARIABLE dart_mode -> mps._ext.dart_mode
mps._ext.dart_mode = "gpt-asynchronous";
//-> DEFINE VARIABLE ad_stack -> mps._ext.ad_stack
mps._ext.ad_stack = "taboola";
//-> DEFINE VARIABLE environment -> mps._ext.environment
mps._ext.environment = "prod";
//-> DEFINE VARIABLE IRSOURCE -> mps._ext.IRSOURCE
mps._ext.IRSOURCE = false;
//-> DEFINE VARIABLE reporting_base_url -> mps._reportingbaseurl
mps._reportingbaseurl = false;
mps._ext.taboola_site_code = "nbc_news";


/* js/internal/mpstools.js */

var mps=mps||{};
var mpsopts=mpsopts||{};
mps._resolveTaboolaSiteCode = function(fallback) {
  if (typeof mpsopts.taboola_site_code === 'undefined') { return fallback; }
  if (typeof mpsopts.taboola_site_code === 'string' && mpsopts.taboola_site_code.trim() !== '') {
    return mpsopts.taboola_site_code.trim();
  }
  if (!mps._taboolaSiteCodeErrorReported) {
    mps._taboolaSiteCodeErrorReported = true;
    mps._errorCallback({
      name: 'Configuration',
      message: 'mpsopts.taboola_site_code must be a nonempty Taboola site-code string; ignoring it and using the configured site code'
    }, 'Taboola site code');
  }
  return fallback;
};
var debugmode=debugmode||{};
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
debugmode.log&&window.console||(debugmode.log=0);
mps.debugMsg = [];
mps._gptcmd = mps._gptcmd || [];
mps._queue = mps._queue || {};
mps._queue.gptloadset=mps._queue.gptloadset||{};
mps._queue.mpsloaded = mps._queue.mpsloaded || [];
mps._queue.gptloaded = mps._queue.gptloaded || [];
mps._queue.mpsinit = mps._queue.mpsinit || [];
mps._queue.adload = mps._queue.adload || [];
mps._queue.adexecute=mps._queue.adexecute||[];
mps._queue.adview = mps._queue.adview || [];
mps._queue.adrender = mps._queue.adrender || [];
mps._queue.adviewchange = mps._queue.adviewchange || [];
mps._queue.adclone = mps._queue.adclone || [];
mps._queue.destroyads = mps._queue.destroyads || [];
mps._queue.refreshads = mps._queue.refreshads || [];
mps._queue.activerefresh = mps._queue.activerefresh || [];
mps._queue.lazyload = mps._queue.lazyload || [];
mps._queue.setrails = mps._queue.setrails || [];
mps._queue.adshow = mps._queue.adshow || [];
mps._queue.adhide = mps._queue.adhide || [];
mps._queue.abdetect = mps._queue.abdetect || [];
mps._queue.getad = mps._queue.getad || [];
mps._queue.clonead = [];
mps._queue.errorpixels = mps._queue.errorpixels || [];
mps._queue.error = mps._queue.error || [];
mps._queue.mpsready = mps._queue.mpsready || [];
mps._ext = mps._ext || {};
mps._ext.mpsready = mps._ext.mpsready || false;
mps._ext._jq = typeof(jQuery) === 'function' ? 1 : 0;
mps._clonerunning = false;
mps._gptrefresh = mps._gptrefresh || true;
mps._adviews = mps._adviews || {};
mps._targeting = mps._targeting || {};
mps._delays = mps._delays || {};
mps._delays.reportingdelay = mps._delays.reportingdelay || 2000;
mps._delays.bodyheader = mps._delays.bodyheader || 20000;
mps._delays.bodyheaderint = mps._delays.bodyheaderint || 100;
mps._delays._adview = mps._delays._adview || {};
mps._delays._adview[mps._loadset||0] = mps._delays._adview[mps._loadset||0] || {};
mps._delays._reportingdelay = null;
mps._ext = mps._ext || {};
mps._ext.mpsready = false;

// mpsopts
mpsopts.legacyqueues=mpsopts.legacyqueues||1;

//--(IE<9: indexOf)
if(!Array.prototype.indexOf)Array.prototype.indexOf=function(searchElement,fromIndex){var k;if(this==null)throw new TypeError('"this" is null or not defined');var o=Object(this);var len=o.length>>>0;if(len===0)return-1;var n=fromIndex|0;if(n>=len)return-1;k=Math.max(n>=0?n:len-Math.abs(n),0);while(k<len){if(k in o&&o[k]===searchElement)return k;k++}return-1};
mps._os = mps._os || navigator.platform.indexOf('Win') > -1 ? 'windows' : 'macintosh';

// If KILLCOMPONENTS exists in the query params set in mpscall
if(location.search.indexOf('KILLCOMPONENTS') > -1){
  mpscall.KILLCOMPONENTS = 1;
  mpscall.CACHESKIP = 1;
}

mps._bool = function(val,intval) {
  if(typeof(val)=='boolean') val = val ? 1 : 0;
  if(typeof(val)=='string') {
    if(val=='true') {
      val = 1;
    }
    if(val=='false') {
      val = 0;
    }
  }
  val = parseInt(val,10);
  if(!intval) {
    return val === 1;
  } else {
    return typeof(val) === 'number' ? val : parseInt(val, 10);
  }
};

//: Debug Mode Detection
debugmode.log=navigator.userAgent.toLowerCase().indexOf("android")>-1?null:function(a){
  var b=navigator.cookieEnabled?!0:!1;
  "undefined"!=typeof navigator.cookieEnabled||b||(document.cookie="_ckT",b=-1!=document.cookie.indexOf("_ckT")?!0:!1);
  var c=window.location.search&&window.location.search.indexOf("DEBUGMODE")>-1;
  if(c){
    return 2;
  }
  if(!b){
    return!1;
  }
  a+="=";
  for(var b=document.cookie.split(";"),d=0;d<b.length;d++){
    for(var e=b[d];" "==e.charAt(0);) {
      e=e.substring(1,e.length);
    }
    if(0==e.indexOf(a)){
      return e.substring(a.length,e.length);
    }
  }
  return null;
}
(String.fromCharCode(95,95)+"de"+String.fromCharCode(98,117,103,109,111)+"de"+Array(3).join("_"))||debugmode.log;
//--[MPS Doc Ready] mps._ready(function(){ ... });
mps._ready=function(func){
  if(typeof jQuery=="function"){
    jQuery().ready(func);
  }
  else {
    mps._onload(func,window);
  }
};
//--[Native JS Doc Ready] not invoked directly
mps._onload=function(a,b){
  var c=!1,d=!0,e="object"!=typeof b?window.document:b.document,f=e.documentElement,g=e.addEventListener?"addEventListener":"attachEvent",h=e.addEventListener?"removeEventListener":"detachEvent",i=e.addEventListener?"":"on",j=function(d){
    try{
      ("readystatechange"!=d.type||"complete"==e.readyState)&&(("load"==d.type?b:e)[h](i+d.type,j,!1),!c&&(c=!0)&&a.call(b,d.type||d));
    }catch(f){
      return mps._errorCallback(f, 'mps._onload'),!1;
    }
  },k=function(){
    try{
      f.doScroll("left");
    }catch(a){
      return void setTimeout(k,50);
    }
    j("poll");
  };
  if("complete"==e.readyState) {
    try{
      a.call(b,"lazy");
    }catch(l){
      mps._errorCallback(l, 'mps._onload');
    }
  }else{
    if(e.createEventObject&&f.doScroll){
      try{
        d=!b.frameElement;
      }catch(m){}
      d&&k();
    }
    e[g](i+"DOMContentLoaded",j,!1),e[g](i+"readystatechange",j,!1),b[g](i+"load",j,!1);
  }
};

//--[Get Elapsed Time]
mps._elapsed = function(label,asval) {
  Date.now = Date.now || function() {
    return +new Date;
  };
  var displaylabel = typeof(label)!='undefined' ? ' ('+label+')' : '';
  if(typeof(mps._timer)!='number'||!(mps._timer>1)) {
    mps._timer=Date.now();
    retval = 0;
    ret = '#mpsTimer\u2022 /started/ '+mps._timer+displaylabel;
  } else {
    retval = Date.now()-mps._timer;
    ret = '#mpsTimer\u2022'+retval+'ms'+displaylabel;
  }
  if(typeof(asval)!='undefined'){
    return retval;
  }
  return ret;
};

/**
 * mps.debounce: as long as it continues to be invoked, will not be triggered.
 * The function will be called after it stops being called for {wait} milliseconds.
 * If `immediate` is passed, trigger the function at the beginning.
 * @param {func} function
 * @param {wait} number
 * @param {immediate} boolean
 * @return {executedFunction} function
 */
mps.debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate){
        func.apply(context, args);
      }
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow){
      func.apply(context, args);
    }
  };
};

//--[Ad DOM Object] Return DOM selector using slot name
mps.selectAd = function(adunit) {
  if(typeof(adunit)!='undefined' && adunit!='' && typeof(mps)=='object' && typeof(mps.advars)!='undefined' && typeof(mps.adslots[adunit])!='undefined' && typeof(mps._select) == 'function' && (adselect=mps._select('#'+mps.adslots[adunit]))) {
    return adselect;
  } else {
    return false;
  }
};

//--[GPT Ad Object] Return Google ad object reference using the slot name
mps.getSlot = function(slotstr,loadset) {
  var _advars = mps.advars;
  loadset = (loadset !== null && typeof loadset != 'undefined') ? parseInt(loadset,10) : mps._loadset;
  if(parseInt(loadset)>-1) {
    if(!mps._advars[loadset]) {
      return false;
    }
    _advars = mps._advars[loadset];
  }
  if(typeof(slotstr) != 'string') {
    mps._debug('mps.getSlot: param is not a string');
    return false;
  }
  if(typeof(_advars) != 'object' || typeof(_advars[slotstr]) != 'string') {
    mps._debug('mps.getSlot: invalid slot name');
    return false;
  }
  if(typeof(mps._advarprefix) != 'string' || typeof(window[mps._advarprefix]) != 'object') {
    mps._debug('mps.getSlot: invalid page gpt object');
    return false;
  }
  if(typeof(window[mps._advarprefix][_advars[slotstr]]) != 'object') {
    mps._debug('mps.getSlot: failed to load slot object');
    return false;
  }
  return window[mps._advarprefix][_advars[slotstr]];
};

//--[Single DOM Object via Selector String] example strings: #id .class body
mps._select = function(selector) {
  // jQuery available
  if(typeof(jQuery) === 'function') {
    return (jQuery(selector)[0]||false);
  }
  if(typeof(selector) != 'string' || selector.length < 2) {
    return false;
  }
  // Modern Browser
  if(typeof(document.querySelectorAll)=='function' || typeof(document.querySelectorAll)=='object') {
    return (document.querySelectorAll(selector)[0]||false);
  }
  // Old Browser (func by first char)
  if(selector.charAt(0)=='#') {
    return (top.document.getElementById(selector.substr(1))||false);
  } else if(selector.charAt(0)=='.') {
    return (top.document.getElementsByClassName(selector.substr(1))[0]||false);
  } else {
    return (top.document.getElementsByTagName(selector)[0]||false);
  }
};


//--[Insert HTML into Selector] mps._append (obj)domelement,(str)html
mps._append = function(selector, d, name) {
  if(typeof(selector)=='string') {
    selector = mps._select(selector);
  }
  if(typeof(selector)!='object'||typeof(d)!='string') {
    mps._debug('mps._append() invalid parameters');
    return false;
  }
  // jQuery available
  if(typeof(jQuery) === 'function') {
    return (jQuery(selector).append(d)||false);
  }
  var content = d;
  content = Array.prototype.concat( [], content );

  if(content.length) {

    var frag = document.createDocumentFragment();
    var tmp = frag.appendChild( document.createElement('div'));
    tmp.innerHTML = 'X' + content;

    var scripts = tmp.getElementsByTagName('script');
    // Append html.
    if(selector) {
      try {
        selector.insertAdjacentHTML('beforeend', content);
      } catch(err) {
        mps._errorCallback(err, (name || 'mps._append'));
      }
    } else {
      mps._log('Invalid selector provided.');
    }
    for(var i=0; i<scripts.length; i++) {
      var newScript = document.createElement('script');
      if(scripts[i].id) {
        newScript.id = scripts[i].id;
      }
      if(scripts[i].src) {
        newScript.type = 'text/javascript';
        newScript.src = scripts[i].src;
        newScript.onerror = function(){
          mps._loadError(newScript.src);
        };
        document.getElementsByTagName('head')[0].appendChild(newScript);
      } else {
        var nscript = document.createElement('script');
        nscript.type = 'text/javascript';
        nscript.text = 'try{ '+scripts[i].innerHTML+' } catch(err){ mps._errorCallback(err, "mps._append inline"); }';
        document.getElementsByTagName('head')[0].appendChild(nscript).parentNode.removeChild(nscript);
      }
    }
  }
};

mps._arrayToPipeSeparated = function(data) {
  var current_value;
  for (var k in data) {
    current_value = data[k];
    if(current_value instanceof Array) {
      current_value = current_value.join("|");
    }
    data[k] = current_value;
  }
  return data;
};


/**
 * Returns if element is in viewport.
 * Used in lazyload.js and lav.js
 * @param {!(object)} s - A document object
 * @param {boolean} map - returns map for distance (optional)
 * @returns {(boolean|object)} Returns boolean if in viewport, or XY object
 * @alias mps._detect.viewport
 */
mps.inViewport = function(s, map, threshold) {
  s = (typeof s === 'string') ? mps._select(s) : s;
  if(typeof s !== 'object' || s === null){
    return false;
  }
  var map=map||false;
  var vpMinX, vpMaxX, vpMinY, vpMaxY;

  if(!mps._bool(mpsopts.activeload) || (mps._bool(mpsopts.activeload) === true && mps._activerefresh._focus === true)) {
    var win = window, winDocElem = win.document.documentElement, docHeight = mps._getDocHeight(), vp = mps._vp(),
        vpW = vp[0], vpH = vp[1], elO = mps._getBoundingRect(s), elY = elO.top, elX = elO.left,
        elH = s.getBoundingClientRect().height || 0,
        elHOffset = elH * (threshold || 0),
        scY = win.pageYOffset ? win.pageYOffset : winDocElem.scrollTop,
        scX = win.pageXOffset ? win.pageXOffset : winDocElem.scrollLeft,
        slotname = typeof mps._determineSlot === 'function' && mps._determineSlot(s.id).cleanslot,
        defaultPad = mps._detect && Math.abs(mps._detect.padding) >0 ? parseInt(mps._detect.padding) : 0,
        atfPad = mps._detect && mps._bool(mpsopts.detection_above_the_fold) && typeof mps._detect.getATFPadding(slotname) == 'number' ? mps._detect.getATFPadding(slotname) + defaultPad : 0,
        atfEnabled = mps._bool(mpsopts.detection_above_the_fold) && mps._detect,
        vpPad = atfEnabled ? atfPad : defaultPad;
        vpMinX = elX >= ((scX - vpPad) < 0 ? -20 : (scX - vpPad)); //top
        vpMaxX = elX <= (scX + vpW  + vpPad); //left
        vpMinY = (elY + elHOffset) >= ((scY - vpPad) < 0 ? -20 : (scY - vpPad));  //bottom - viewability threshold
        vpMaxY = (elY + elHOffset) <= (scY + vpH + vpPad);  // right - viewability threshold
    if(map) {
      // returns map for distance tracking
      if (mps._detect && mps._detect.tracking && mps._keys(mps._detect.tracking).length === 0 && typeof mps._detect.distanceToViewport === 'function') {
        mps._detect.distanceToViewport(s);
      }
      return {
        elementX: elX,
        elementY: elY,
        screenX: Math.abs(scX),
        screenY: Math.abs(scY),
        inviewX: vpMinX && vpMaxX,
        inviewY: vpMinY && vpMaxY
      };
    }
      // Negative padding, ads at absolute top/bottom, or less than padding.
      //var AtPageBottom = renders ads at page bottom (250 height) or smaller, vpMaxY=true
      var AtPageBottom = scY + vpH > (docHeight-125);
      if(vpPad < 0) {
        if(elY <= 0 || elY < (vpPad * -1)) {
          // Y coords at absolute top, or less than padding.
          vpMinY = true;
        } else if(elY >= docHeight || AtPageBottom) {
          // Y coords at absolute bottom, or greater than (viewport height - padding).
          vpMaxY = true;
        }
        if(elX <= 0 || elX < (vpPad * -1)) {
          // X coords at absolute left or less than padding.
          vpMinX = true;
        } else if(elX <= winDocElem.offsetWidth && elX >= winDocElem.offsetWidth - (vpPad * -1)) {
          // X coords at absolute right, or greater than (viewport width - padding);
          vpMaxX = true;
        }
      }
      return vpMinX && vpMinY && vpMaxX && vpMaxY;
  } else {
    // Activeload - window not focused. (mpsopts.activeload=1) OR Invalid DOM object
    return false;
  }
};

//-- mps.attachData(instance[string, 'test-web'], mpsid[string, 123456789], data[object { "fruits":["kiwi",'dragonfruit"]}])
mps.attachData = function(mpsid, data){
  var mpsid = mpsid || mps.pagevars.mpsid;
  var instance = mps.pagevars.instance;
  var mpsdomain = mps.pagevars.mpsurl ? mps.pagevars.mpsurl : 'mps.nbcuni.com';
  var legacy = !(mps._checkua().oldie === false || mps._checkua().oldie && mps._checkua().oldie > 10);
  var passed_in_data = mps._arrayToPipeSeparated(data);

  // Sort and Serialize object, if omitted, pass empty string
  var attachData = typeof passed_in_data !== 'undefined' && mps._keys(passed_in_data).length ? mps._sortObject(passed_in_data) : '';


  var serializedData = (attachData !== '') ?  mps._serialize(attachData, "cag") : attachData;

  // Compare sorted JSON string with existing
  if(typeof mps.pagevars.cagsattached === 'object' && (JSON.stringify(serializedData) !== JSON.stringify(mps._serialize(mps.pagevars.cagsattached, "cag")))) {
    var xhr;
    var proto = mpsdomain.indexOf('local') > -1 ? mps._protocol() : "https:";
    var url = proto + '//' + mpsdomain + '/request/attachdata/' + instance + '/' + mpsid + '?' + serializedData;
    if(!legacy){

      xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200 && xhr.responseText.length > 0) {
            mps._d('[mps:attachData] SUCCESS 200' + xhr.responseText);
          } else if (xhr.status == 0) {
            mps._d("[mps:attachData] FAILED 410 - Page doesn't exist");
            return false;
          }
        }
      };
      xhr.send(null);
      return true;

    } else {
      xhr = new XDomainRequest();
      xhr.onload=function() {
        return xhr.responseText;
      };
      xhr.onerror=function() {
        return xhr.responseText;
      };
      xhr.open('get', url, true);
      setTimeout(function () {
        xhr.send();
      }, 0);
      return xhr;
    }

  } else {
    mps._d('[mps:attachData] SKIPPED attaching cags - Already Set');
    return false;

  }
};

mps._loadError = function(source){
  mps._errorCallback({name: 'Script', message: source}, 'Load Error');
};

//--[Remove Selector(s) from DOM] mps._remove (obj)
mps._remove = function(elem) {
  if(!elem) { mps._log('Invalid selector provided.'); return false; }
  // jQuery available
  if(typeof(jQuery) === 'function') {
    if((jQuery(elem).length > 0)) {
      jQuery(elem).remove(); return false;
    } else {
      mps._log('Invalid selector provided.'); return false;
    }
  }
  // querySelectorAll, getElementsByClassName, getElementsByTagName
  if(typeof elem.length === 'number' && elem.length > 0) {
    for (var j = elem.length-1; j >= 0; j--) {
      if (elem[j].parentNode) {
        elem[j].parentNode.removeChild(elem[j]);
      }
    }
    // mps._select or getElementById
  } else if(elem.nodeType) {
    if(elem.parentNode) {
      elem.parentNode.removeChild(elem);
    }
  } else {
    mps._log('Invalid selector provided.');
  }
};

//--[Cookies] mps._ck.r(name) | mps._ck.w(name,value,days) | mps._ck.d(name)
mps._ck = {
  params: function() {
    var query = location.search.substr(1);
    var result = {};
    var queryArray = query.split("&");
    for(i = 0; i < queryArray.length; i++) {
      var item = queryArray[i].split("=");
      result[item[0]] = decodeURIComponent(item[1]);
    }
    return result;
  },
  c: function() {
    document.cookie = "cookietest=1";
    var ret = document.cookie.indexOf("cookietest=") != -1;
    // Delete cookie
    document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
    return ret;
  },
  w: function(name, val, days) {
    var p = this.params();
    var dateObj = new Date;
    dateObj.setTime(dateObj.getTime() + 864E5 * days);

    if(mps._ck.c() === true &&
      (typeof p.nocookies === "undefined" || p.nocookies !== "1")) {
      var entireCookie = name + "=" + val + "; expires=" + dateObj.toGMTString() + "; path=/;";
      document.cookie = entireCookie;
    } else {
      if (typeof(localStorage) !== "undefined") {
        localStorage.setItem(name, val);
      }
    }
  },
  r: function(name) {
    var p = this.params();
    if(mps._ck.c() === true &&
      (typeof p.nocookies === "undefined" || p.nocookies !== "1")) {
      var entireCookie  = name + "=";
      for (var pairs = document.cookie.split(";"), x = 0; x < pairs.length; x++) {
        for (var pair = pairs[x];
             " " == pair.charAt(0);) pair = pair.substring(1, pair.length);
        if (0 == pair.indexOf(entireCookie)) {
          return pair.substring(entireCookie.length, pair.length);
        }
      }
    } else {
      if (typeof(localStorage) !== "undefined") {
        return localStorage.getItem(name);
      }
    }
    return null
  },
  d: function(name) {
    mps._ck.w(name, "", -1)
  }
};

//--[_checkQS] used in header-bidding.js et all.
mps._checkQS = function(a) {
  return "string" == typeof a && a ? !1 !== mps._get(a) || !1 !== mps._get(a.toLowerCase()) || !1 !== mps._get(a.toUpperCase()) ? !0 : !1 : !1;
};

//--[MPS Execution Helpers] mps._protocol() mps._checkua()
mps._protocol = function(){
  var c=null,a=window,b=null;try{for(;null!=a&&a!==c;){b=a.location.protocol;if("https:"===b)break;else if("http:"===b||"file:"===b)return"http:";c=a;a=a.parent}}catch(d){}return"https:"
};

mps._checkua = function() {
  if (mps.__ua) return mps.__ua;
  var iecheck = navigator.appVersion.match(/MSIE ([\d]+)/);
  var ret = {};
  ret.os = mps._os;
  ret.mobile = !!(Math.max(document.documentElement.clientWidth, window.innerWidth || 0) < 1025 || window.navigator.userAgent.match('Mobile'));
  if (!!navigator.userAgent.match(/Trident\/7\./)){
    ret.oldie = 11;
  }else if(iecheck){
    ret.oldie = parseInt(iecheck[1]);
  }else{
    ret.oldie = false;
  }
  mps.__ua = ret;
  return ret;
};

// _getBoundingRect(elem) returns offset top and left (used in lazyload.js, ab.js, rails.js)
mps._getBoundingRect = function(elem) {
  if(!elem){
    return {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    };
  }
  var box = elem.getBoundingClientRect();
  var body = document.body;
  var docEl = document.documentElement;
  var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
  var clientTop = docEl.clientTop || body.clientTop || 0;
  var clientLeft = docEl.clientLeft || body.clientLeft || 0;
  var top  = box.top +  scrollTop - clientTop;
  var left = box.left + scrollLeft - clientLeft;
  var bottom  = box.top + box.height;
  var right = box.left + box.width;

  return {
    top: Math.round(top),
    left: Math.round(left),
    bottom: Math.round(bottom),
    right: Math.round(right)
  };

};


// _getDocHeight() returns document height, cross browser
mps._getDocHeight = function(){
  var D = document;
  return Math.max(
      D.body.scrollHeight, D.documentElement.scrollHeight,
      D.body.offsetHeight, D.documentElement.offsetHeight,
      D.body.clientHeight, D.documentElement.clientHeight
  );
};


//--Check for debugmode.
mps._isdebug = function() { return typeof(debugmode)==='object' && parseInt(debugmode.log) === 2; };

//--[Get Query String Parameter] mps._get([parameter],[url],[decode],keyonly))
mps._get=function(n,r,e,t){if("undefined"==typeof e&&(e=!0),"string"!=typeof r&&(r=""),r=r.length?r:window.location.search,0>r.indexOf("?"))return!1;r=r.split("?")[1].split("&");for(var i=function(n){return t===!0&&"undefined"==typeof n?!0:n},o=!0,p=0;p<r.length;p++){if(parr=r[p].split("="),parr[0]==n)return e?decodeURIComponent(i(parr[1])):i(parr[1]);o=!1}return o?void 0:!1};

//--[Serializes object for query string] mps._serialize=function({key:{val}}, 'cag'), encodes and lowercases all key/val
mps._serialize=function(obj,prefix){var str=[],p,v;for(p in obj)if(obj.hasOwnProperty(p)){var k=prefix?prefix+"["+p+"]":p;v=obj[p];if(typeof v==="object")v=JSON.stringify(v); if(typeof v.toString==="function")v=v.toString();if(v!==null&&v instanceof Array){var pipeval="";for(var i=0;i<v.length;i++)pipeval+=i==v.length-1?v[i].toLowerCase():v[i].toLowerCase()+"|";str.push(encodeURIComponent(k)+"="+encodeURIComponent(pipeval))}else if(v!==null&&typeof v==="object"&&!(v instanceof Array))str.push(mps._serialize(v, k));else str.push(encodeURIComponent(k)+"="+encodeURIComponent(v.toLowerCase()))}return str.join("&")};
//--Returns input sorted alphabetically on property names  mps._sortObject(o[object])
mps._sortObject=function(c){var d={},a,b=[];for(a in c)c.hasOwnProperty(a)&&b.push(a);b.sort();for(a=0;a<b.length;a++)d[b[a]]=c[b[a]];return d};

//--[Strings] mps._trim(str,charlist)
mps._trim = function(a,e){var c,d=0,b=0;a+="";c=e?(e+"").replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,"$1"):" \n\r\t\f\x0B\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";d=a.length;for(b=0;b<d;b++)if(-1===c.indexOf(a.charAt(b))){a=a.substring(b);break}d=a.length;for(b=d-1;0<=b;b--)if(-1===c.indexOf(a.charAt(b))){a=a.substring(0,b+1);break}return-1===c.indexOf(a.charAt(0))?a:""};

//--[Sets] mps._merge(obj1,obj2,...) mps._keys(obj,[filter])
mps._merge = function(){var d=Array.prototype.slice.call(arguments),g=d.length,a,e={},c="",k=0,f=0,b=0,h=0,l=Object.prototype.toString;a=!0;for(b=0;b<g;b++)if("[object Array]"!==l.call(d[b])){a=!1;break}if(a){a=[];for(b=0;b<g;b++)a=a.concat(d[b]);return a}for(h=b=0;b<g;b++)if(a=d[b],"[object Array]"===l.call(a))for(f=0,k=a.length;f<k;f++)e[h++]=a[f];else for(c in a)a.hasOwnProperty(c)&&(parseInt(c,10)+""===c?e[h++]=a[c]:e[c]=a[c]);return e};
mps._keys = function(a,c,f){var g="undefined"!==typeof c,e=[],h=!!f,d=!0,b="";if(a&&"object"===typeof a&&a.change_key_case)return a.keys(c,f);for(b in a)a.hasOwnProperty(b)&&(d=!0,g&&(h&&a[b]!==c?d=!1:a[b]!=c&&(d=!1)),d&&(e[e.length]=b));return e};

//--[DOM Object Class] mps._classHas(elem,class) mps._classAdd(elem,class) mps._classRemove(elem,class)
mps._classHas=function(a,b){return RegExp(" "+b+" ").test(" "+a.className+" ")};mps._classAdd=function(a,b){return mps._classHas(a,b)||(a.className+=" "+b)};mps._classRemove=function(a,b){if(!0!==mps._classHas(a,b))return!1;var c=" "+a.className.replace(/[\t\r\n]/g," ")+" ";if(mps._classHas(a,b)){for(;0<=c.indexOf(" "+b+" ");)c=c.replace(" "+b+" "," ");a.className=c.replace(/^\s+|\s+$/g,"")}return!0};

//--[Remove Event Handler] mps._eventRemove(elem,eventType,handler)
mps._eventRemove=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1);a.detachEvent&&a.detachEvent("on"+b,c)};

// [check if Element exists in DOM] mps._isElement(elem)
mps._isElement=function(e){try{return e instanceof HTMLElement}catch(t){return typeof e==="object"&&e.nodeType===1&&typeof e.style==="object"&&typeof e.ownerDocument==="object"}};

//--[Load External JS] url(str): file url, onload(func): callback, noasync(bool)
mps._loadJS = function(url,onload,noasync) {
  if(!url) return false;
  noasync = typeof noasync !== 'undefined';
  var scr = document.createElement('script');
  if(!noasync) scr.async = true;
  scr.type = 'text/javascript';
  if(url.substring(0,4) == 'http' || url.substring(0,2) == '//') url = url.replace('http://','').replace('https://','').replace('//','');
  scr.src = mps._protocol()+'//'+url;
  scr.onload=function(){
    mps._log('#[mps:loadJS] async:'+!noasync+', '+url.split('/').pop());
    if(typeof(onload)=='function') { onload.call(scr); }
  };
  scr.onerror = function(){ mps._loadError(scr.src); }

  document.getElementsByTagName('head')[0].appendChild(scr);
  return true;
};

//--[ResetTargetingObj] insertAd & cloneAd to retrieve save originalTargeting
mps._resetTargetingObj=function(a){if("[object Array]"===Object.prototype.toString.call(a)){for(var c=[],b=0,d=a.length;b<d;b++)c[b]=arguments.callee(a[b]);return c}if("object"===typeof a){c={};for(b in a)c[b]=arguments.callee(a[b]);return c}return a};

//--[Detect if Horizontal Scrollbar exists] returns boolean, 15px for mac, 17px for windows
mps._hscroll=function(docElem){
  return docElem&&window&&docElem.clientHeight<window.innerHeight?Math.round(window.innerHeight-docElem.clientHeight):0;
};

//--[Detect if Vertical Scrollbar exists] returns boolean, 15px for mac, 17px for windows
mps._vscroll=function(docElem){
  return docElem&&window&&docElem.clientWidth<window.innerWidth?Math.round(window.innerWidth-docElem.clientWidth):0;
};

//--[Get Viewport Size] returns array of [width, height]
mps._viewport=function(){
  var d=window,a=document,e=a.documentElement,a=a.getElementsByTagName("body")[0],b=mps._hscroll(e)?mps._hscroll(e):0,c=mps._vscroll(e)?mps._vscroll(e):0;
  return [d.innerWidth-c||e.clientWidth-c||a.clientWidth-c,d.innerHeight-b||e.clientHeight-b||a.clientHeight-b];
};

//--[Console Styling Helpers] 3-pill badge system
// label(color, pos) - Prebid-shaped CSS string for a badge pill
// pos: 'solo' (default, standalone pill) | 'start' | 'middle' | 'end'
// Touching sides between adjacent pills get zero padding/square corners so
// the pills abut seamlessly (no visual gap or extra border-radius) while
// still rendering each segment in its own color.
mps.__consoleLabel = function(color, pos) {
  pos = pos || 'solo';
  var padLeft = (pos === 'solo' || pos === 'start') ? 4 : 0;
  var padRight = (pos === 'solo' || pos === 'end') ? 4 : 0;
  var radius = { solo: '3px', start: '3px 0 0 3px', middle: '0', end: '0 3px 3px 0' }[pos];
  return 'display:inline-block;color:#fff;background:' + color + ';padding:1px ' + padRight + 'px 1px ' + padLeft + 'px;border-radius:' + radius;
};

// getBrandPillColor() - environment-aware brand pill color (resolved at emit time)
mps.__consoleBrandColor = function() {
  if (typeof mps !== 'undefined' && mps._ext && mps._ext.IRSOURCE) { return '#990099'; }
  var env = (typeof mps_env === 'string') ? mps_env : 'prod';
  var MAP = {
    'prod': '#7598aa',
    'local': '#92400e', 'dev': '#92400e', 'devint': '#92400e',
    'stage': '#990099', 'qa': '#990099',
    'uat': '#be123c',
    'brand': '#c2410c', 'load': '#c2410c',
    'decoupled': '#15803d'
  };
  return MAP[env] || '#64748b';
};

// nsColor(token) - namespace color lookup (2nd pill)
mps.__consoleNsColor = (function() {
  var MAP = {
    'hb': '#0f766e', 'preLoader': '#065f46', 'Rails': '#4338ca',
    'GPT': '#1d4ed8', 'Refresh': '#c2410c', 'timedRefresh': '#ea580c',
    'JS': '#047857', 'Responsive': '#6d28d9', 'Detect': '#7c3aed',
    'SmartRefresh': '#d97706', 'LAV': '#0e7490', 'DestroyAds': '#2563eb',
    'QUEUE': '#475569', 'postLoader': '#059669', 'Loader': '#0d9488',
    'AB': '#64748b', 'taboola': '#0056F0'
  };
  return function(token) { return MAP[token] || '#64748b'; };
})();

// subNsColor(token) - sub-namespace color lookup (3rd pill)
mps.__consoleSubNsColor = (function() {
  var MAP = {
    'Core': '#3730a3', 'mg': '#be123c', 'a9': '#b45309',
    'cmp': '#0e7490', 'dv': '#4d7c0f', 'ae': '#a21caf',
    'gate': '#002852', 'init': '#00F0D2', 'api': '#7BCDFF'
  };
  return function(token) { return MAP[token] || '#64748b'; };
})();

// getLogContext(msg) - parse leading [mps:ns:sub] prefix from message body
// Returns {ns: string|null, sub: string|null, body: string}
mps.__consoleParseContext = function(msg) {
  var result = { ns: null, sub: null, body: msg };
  var match = msg.match(/^\[([^\]]+)\]\s*/);
  if (!match) { return result; }
  var segments = match[1].split(':');
  var i = 0;
  // Drop leading 'mps' segment if present
  if (segments[0] === 'mps') { i = 1; }
  // Sanitize: alphanumeric, underscore, hyphen; max 16 chars; skip lone severity chars
  var SEVERITY_CHARS = { '!': 1, '^': 1, '#': 1, '~': 1 };
  var clean = function(s) {
    s = s.replace(/^\s+|\s+$/g, '').replace(/[^A-Za-z0-9_-]/g, '').substring(0, 16);
    return (s.length === 0 || SEVERITY_CHARS[s]) ? null : s;
  };
  if (i < segments.length) { result.ns = clean(segments[i]); i++; }
  if (i < segments.length) { result.sub = clean(segments[i]); }
  result.body = msg.substring(match[0].length);
  return result;
};

// decorateLog(plainBody, severity) - build styled console args
// severity: 'log'|'debug'|'warn'|'error'
// Returns {method: string, args: array, plainBody: string, levelWord: string}
mps.__consoleDecorate = function(plainBody, severity) {
  var ctx = mps.__consoleParseContext(plainBody);
  var LEVEL_WORDS = { 'log': 'MESSAGE:', 'debug': 'DEBUG:', 'warn': 'WARNING:', 'error': 'ERROR:' };
  var levelWord = LEVEL_WORDS[severity] || 'MESSAGE:';
  var brandColor = mps.__consoleBrandColor();
  var label = mps.__consoleLabel;

  // Build format string and CSS args: 3 touching pills (mps / ns / sub), each its own
  // color, with zero padding on touching sides so they abut seamlessly — no double
  // colons, no visual gap between segments.
  var fmt, styles;
  if (ctx.ns) {
    fmt = '%cmps';
    styles = [label(brandColor, 'start')];
    fmt += '%c:' + ctx.ns;
    styles.push(label(mps.__consoleNsColor(ctx.ns), ctx.sub ? 'middle' : 'end'));
    if (ctx.sub) {
      fmt += '%c:' + ctx.sub;
      styles.push(label(mps.__consoleSubNsColor(ctx.sub), 'end'));
    }
  } else {
    fmt = '%cmps:';
    styles = [label(brandColor, 'solo')];
  }

  // Severity stripe: debug gets faint violet bg; others empty (browser-native for warn/error)
  var stripe = (severity === 'debug') ? 'background:rgba(109,40,217,0.08);padding:2px 4px;border-radius:2px' : '';
  fmt += '%c ' + levelWord + ' ' + ctx.body;
  styles.push(stripe);

  return { method: severity === 'debug' ? 'debug' : severity, args: [fmt].concat(styles), plainBody: ctx.body, levelWord: levelWord };
};

//--[Browser Safe Debugging] !error ^warning  #debug ~log
// (internal) call using: mps._log / mps._l
mps.__console = {
  log: function() {
    if(mps.__nolog) {
      return false;
    }
    var args = Array.prototype.slice.call(arguments);
    var i_arg = 0;
    while (args[i_arg]){
      var m = args[i_arg];
      i_arg++;
      if(window.console && console.log && console.warn && console.debug && console.error) {
        if(typeof(m)!='string') {
          if(mps.__console._last && typeof(console[mps.__console._last])){
            console[mps.__console._last](m);
          }
          else {
            console.log(m);
            mps.__console.overlay(m, 'log');
          }
          continue;
        }
        var f = m.charAt(0);
        var severity, plainMsg;
        if(f=='~') {
          severity = 'log'; plainMsg = m.substring(1);
          mps.__console._last = false;
        } else if(f=='!') {
          severity = 'error'; plainMsg = m.substring(1);
          mps.__console._last = 'error';
        } else if(f=='^') {
          severity = 'warn'; plainMsg = m.substring(1);
          mps.__console._last = 'warn';
        } else if(f=='#') {
          severity = 'debug'; plainMsg = m.substring(1);
          mps.__console._last = 'debug';
        } else {
          mps.__console.auto(m);
          continue;
        }
        var decorated = mps.__consoleDecorate(plainMsg, severity);
        console[decorated.method].apply(console, decorated.args);
        mps.__console.overlay(plainMsg, severity);
      } else if(window.console && console.log) {
        console.log(m);
        mps.__console.overlay(m, 'log');
        mps.__console._last=false;
      } else {
        return false;
      }
    }
    return true;
  },
  debug: function() {
    if(!mps._isdebug() || mps.__nolog) {
      return false;
    }
    // Emit directly — do not delegate to log to prevent double-emit.
    // Uses console.log (not console.debug) so messages appear at "Default levels"
    // in Chrome DevTools. The _isdebug() gate above already controls visibility;
    // the DEBUG: level word + violet stripe provide visual distinction.
    var args = Array.prototype.slice.call(arguments);
    // Optional trailing non-string arg (e.g. an object) is appended to the
    // decorated console call so it prints as a live, expandable object on
    // the same line as the styled pills — instead of looping over it as a
    // separate plain console.log(). Backward compatible: existing calls only
    // ever pass string(s), so this branch is a no-op for them.
    var trailingObj;
    if (args.length > 1 && typeof args[args.length - 1] !== 'string') {
      trailingObj = args.pop();
    }
    var i_arg = 0;
    while (args[i_arg]) {
      var m = args[i_arg];
      i_arg++;
      if(window.console && console.log) {
        if(typeof(m)!='string') {
          console.log(m);
          continue;
        }
        // Respect severity markers; default to 'debug' when no marker present
        var f = m.charAt(0);
        var MARKER_MAP = { '!': 'error', '^': 'warn', '#': 'debug', '~': 'log' };
        var severity = MARKER_MAP[f] || 'debug';
        var plainMsg = MARKER_MAP[f] ? m.substring(1) : m;
        var decorated = mps.__consoleDecorate(plainMsg, severity);
        // Use console.log as floor — never console.debug (hidden at "Default levels")
        var method = (decorated.method === 'debug') ? 'log' : decorated.method;
        var callArgs = decorated.args;
        if (trailingObj !== undefined) {
          callArgs = callArgs.concat([trailingObj]);
        }
        console[method].apply(console, callArgs);
        mps.__console.overlay(plainMsg, severity);
      }
    }
    return true;
  },
  //(internal) don't call directly
  overlay: function(m, type){
    type = type || '';
    m = (typeof m != 'undefined') ? m.toString() : '';
    var $debugPanel = mps._isElement(mps._select('#debugPanel')) ? $('#debugPanel') : false;
      var prefix = (m.match(/\[(.*?)\]/)) ? m.match(/\[(.*?)\]/)[0] : '[MPS]';
      var debugMsgInx = mps._keys(mps.debugMsg).length || 0;
      var debugMarkup = '';
      mps.debugMsg.push({
        'm': m,
        'type': type,
        'prefix': prefix
      });
      if($debugPanel) {
        var date = new Date(),
            mil = date.getMilliseconds(),
            sec = date.getSeconds(),
            min = date.getMinutes(),
            hrs = date.getHours(),
            now = hrs + ':' + min + ':' + sec + '.' + mil;
        if (typeof 's'.indexOf == 'function' && m.indexOf('loadmore') === -1) {
          debugMarkup = '<p class="' + type + '" title="' + now + '">' + m + '</p>';
        } else {
          debugMarkup = m;
        }
        if (debugMsgInx > 0) {
          for (var i in mps.debugMsg) {
            if (mps.debugMsg.hasOwnProperty(i)) {
              if (typeof 's'.indexOf == 'function' && mps.debugMsg[i].m.indexOf('loadmore') === -1) {
                debugMarkup += '<p class="' + mps.debugMsg[i].type + '" title="' + now + '">' + mps.debugMsg[i].m + '</p>';
              } else {
                debugMarkup += mps.debugMsg[i].m;
              }
            }
          }
          if (mps._ext._jq) {
            $debugPanel.html(debugMarkup);
          } else {
            $debugPanel.outerHTML = debugMarkup;
          }
        }
        $debugPanel.scrollTop = $debugPanel.scrollHeight;
        return true;
      } else {
        return false;
      }
  },
  // (internal) do not call directly
  auto: function(m) {
    var typemap = {
      // debug
      '#': [,'called','loaded','disabled','enabled','init','callback','calling '],
      // warning
      '^': ['warning','skip','bypass'],
      // error
      '!': ['error','invalid','fail','terminated']
    };
    for(var t in typemap) {
      for(var tv in typemap[t]) {
        if(m.toLowerCase().indexOf(typemap[t][tv]) > -1) {
          return mps.__console.log(t+m);
        }
      }
    }
    return mps.__console.log('~'+m);
  },
  _last: false
};

//--SHORTCUTS, ALIASES
mps._log=mps._l=mps._console=mps.__console.log;
mps._vp=mps._viewport;
mps._debug=mps._d=mps.__console.debug;

//--[Queues]
if(!mps._loadset) {
  mps._queue.exec = function(args, param) {
    if (typeof(args) === 'function') {
      try {
        typeof(param) === 'undefined' ? args.call() : args.call(this, param);
      } catch (err) {
        mps._errorCallback(err);
      }
    }
  };
  // Copy queued functions from mps._gptcmd.
  mps._gptcmdtmp = mps._gptcmd;
  mps._gptcmd = [];
  mps._gptcmd.push = function() {
    var _args = arguments[0];
    var _func = function() {
      try {
        _args.call();
      } catch(err) {
        mps._errorCallback(err, 'mps._gptcmd.push');
        googletag.cmd.push(_args);
      }
    };
    googletag.cmd.push(_func);
    return Array.prototype.push.apply(this, arguments);
  };
  // Push queued functions to mps._gptcmd after being extended.
  while(mps._gptcmdtmp.length) {
    mps._gptcmd.push(mps._gptcmdtmp[0]);
    mps._gptcmdtmp.shift();
  }
  mps._queue['mpsinit'].push = function () {
    if (mps._ext && mps._ext.loaded === 1) {
      mps._queue.exec(arguments[0]);
    }
    return Array.prototype.push.apply(this, arguments);
  };
  mps._queue['abdetect'].push = function () {
    if (mps._ab && mps._ab.run) {
      mps._queue.exec(arguments[0], mps._ab.type);
    }
    return Array.prototype.push.apply(this, arguments);
  };
  mps._queue.gptloadset[0] = mps._queue.gptloadset[0] || [];
  if (typeof(mps._queue.gptloaded.length) !== 'undefined') {
    for (var i = 0; i < mps._queue.gptloaded.length; i++) {
      mps._queue.gptloadset[0].push(mps._queue.gptloaded[i]);
    }
    mps._queue.gptloaded = [];
  }
  mps._queue['gptloaded'].push = function () {
    if (arguments[0]) {
      if (mpsopts.legacyqueues === 1) {
        var gptLoadset = mps._reqset;
      } else {
        var gptLoadset = mps._gptloaded ? mps._reqset + 1 : mps._reqset;
      }
      mps._queue.gptloadset[gptLoadset] = mps._queue.gptloadset[gptLoadset] || [];
      // GPT callback already executed for this loadset.
      if ((mps._reqset === mps._loadset) && mps._gptloaded) {
        mps._gptcmd.push(arguments[0]);
      } else {
        mps._queue.gptloadset[gptLoadset].push(arguments[0]);
      }
    }
    return Array.prototype.push.apply(this);
  };
  mps._queue['mpsready'].push = function () {
    if (arguments[0] && mps._ext.mpsready === true) {
      try {
        arguments[0].call();
      } catch (err) {
        mps._errorCallback(err, 'mps._queue.mpsready');
      }
    } else {
      return Array.prototype.push.apply(this, arguments);
    }
  };
}
mps._queue.render = function(type, param1, param2, param3, param4) {
  debugmsg = '[mps:QUEUE] ' + type;
  warnmsg = '^'+debugmsg;
  queuelen = 0;
  try {
    switch (type) {
      case 'mpsinit':
        for (var i = 0; i < mps._queue.mpsinit.length; i++) {
          mps._queue.mpsinit[i].call();
          queuelen++;
        }
        mps._debug(debugmsg + ' items ran: ' + queuelen + ' '  + mps._elapsed());
        break;
      case 'mpsready':
        while(mps._queue.mpsready.length) {
          mps._queue.mpsready.shift().call();
          queuelen++;
        }
        mps._debug(debugmsg + ' items dequeued: ' + queuelen + ' '  + mps._elapsed());
        break;
      case 'gptloaded':
        for (var j = 0; j < mps._queue[type].length; j++) {
          mps._queue[type][j].call(this, param1, param2, param3, param4);
          queuelen++;
        }
        mps._debug(debugmsg + ' loadset: ' + param1 + ' ' + ' items ran: ' + queuelen + ' ' + mps._elapsed());
        break;
      case 'error':
        for (var j = 0; j < mps._queue[type].length; j++) {
          mps._queue[type][j].call(this, param1, param2, param3, param4);
          mps._debug(warnmsg + ' p1: ' + param1+ ' ' + ' p2: ' + param2 + ' ' + ' p3: ' + param3+ ' ' + ' p4: ' + param4 + ' '  + mps._elapsed());
        }
        break;
      case 'adviewchange':
        for (var k = 0; k < mps._queue[type].length; k++) {
          mps._queue[type][k].call(this, param1, param2, param3, param4);
        }
        break;
      case 'adexecute':
        for (var k = 0; k < mps._queue[type].length; k++) {
          mps._queue[type][k].call(this, param1, param2, param3, param4);
          queuelen++;
        }
        mps._debug(debugmsg + ' ' + param1 + ' ' + ' items ran: ' + queuelen + ' '+ mps._elapsed());
        break;
      case 'adrender':
      case 'adload':
        for (var k = 0; k < mps._queue[type].length; k++) {
          mps._queue[type][k].call(this, param1, param2, param3, param4);
          queuelen++;
        }
        var loadset = typeof(param1._mps)==='object' ? param1._mps.loadset : 'R'+param1[0].loadset;
        var slot = typeof(param1._mps)==='object' ? param1._mps._slot : param1[0]._slot;
        mps._debug(debugmsg + ' ' + loadset + ':' + slot + ' isEmpty: ' + param1.isEmpty + ' ' + ' items ran: ' + queuelen + ' '  + mps._elapsed());
        break;
      case 'adclone':
        for (var d = 0; d < mps._queue[type].length; d++) {
          typeof(param2 === 'number') ? mps._queue[type][d].call(this, param1, param2, param3) : mps._queue[type][d].call(this, param1);
          queuelen++;
        }
        mps._queue.clear(type);
        mps._debug(debugmsg + ' ' + param2 + ':' + param1 +  ' ' + mps._elapsed());
        break;
      default:
        for (var d = 0; d < mps._queue[type].length; d++) {
          typeof(param2 === 'number') ? mps._queue[type][d].call(this, param1, param2, param3) : mps._queue[type][d].call(this, param1);
          queuelen++;
        }
        mps._debug(debugmsg + ' items ran: ' + queuelen + ' '  + mps._elapsed());
        break;
    }
  } catch(err) {
    mps._errorCallback(err, 'mps._queue.render(' + type + ')');
  }
};
mps._queue.clear = function(type) {
  if(type) {
    mps._debug('[mps:QUEUE] (clear ' + type + ') items cleared: ' + mps._queue[type].length);
    mps._queue[type] ? mps._queue[type] = [] : mps._debug('[mps:QUEUE] (clear ' + type + ') is not a valid queue.');
  } else {
    mps._debug('[mps:QUEUE] (clear all…)');
    for(var i in mps._queue) {
      if(typeof(mps._queue[i]) === 'object' && i!='mpsloaded' && mps._queue[i].length > 0 ) {
        mps._debug('[mps:QUEUE] (clear ' + i + ') items cleared: ' + mps._queue[i].length);
        mps._queue[i] = [];
      }
    }
  }
};

/* ----- Error handling ----- */
// Execute error tracking pixel.
mps._errorpixel = function(_errsrc) {
  var _errimg = '<img width="1" height="1" id="mpserrpix" src="'+encodeURI(_errsrc)+'" />';
  mps._append(mps._select('body'), _errimg);
};

// Error callback.
mps._errorCallback = function(err, func) {
  if(err.name) {
    if(err.message) {
      mps._debug('![mps:!] ERROR ' + func + ' - Uncaught ' + err.name + ': ' + err.message + ' (' + mps._elapsed() + ')');
    } else {
      mps._debug('![mps:!] ERROR ' + func + ' - Uncaught ' + err.name + ' (' + mps._elapsed() + ')');
    }
  }
  if(typeof mps.errorCallback === 'function') {
    mps.errorCallback(err.name, err.message, err.lineNumber, func);
  }
  if(mps._queue.error.length) {
    for(var i = 0; i < mps._queue.error.length; i += 1) {
      mps._queue.render('error', err.name, err.message, err.lineNumber, func);
    }
  }
  // Error tracking url for Splunk
  if(typeof mps._reportingbaseurl === 'string' && mps._reportingbaseurl.trim() !== '') {
    var _errsrc = mps._protocol() + '//' + mps._reportingbaseurl,
      _mpsid = (mps.pagevars && mps.pagevars.mpsid) ? mps.pagevars.mpsid: '',
      _authuser = (mps.pagevars && mps.pagevars.authuser) ? mps.pagevars.authuser: '';
    _errsrc += '?mpsid=' + _mpsid;
    _errsrc += '&mpspath=' + encodeURIComponent(mps.pagevars ? mps.pagevars.path : '');
    _errsrc += '&site=' + (mps.pagevars ? mps.pagevars.instance : '');
    _errsrc += '&authusr=' + _authuser;

    if (err.name) {
      _errsrc += '&errtype=' + err.name;
      if (err.message) {
        _errsrc += '&errmsg=' + func + ' - ' + encodeURIComponent(err.message);
      }
      if (err.stack) {
        _errsrc += '&errstack=' + encodeURIComponent(err.stack);
      }
      if (err.lineNumber) {
        _errsrc += '&errline=' + err.lineNumber;
      }
    }
    if (typeof(mps._delays._reportingdelay) === 'number' && (mps._elapsed('', true) > mps._delays._reportingdelay)) {
      mps._errorpixel(_errsrc);
    } else {
      mps._queue.errorpixels.push(function () {
        mps._errorpixel(_errsrc);
      });
    }
  }
};

// Set pixel reporting delay atleast 2s from mps._ready.
mps._ready(function() {
  mps._ext.mpsready = true;
  mps._delays._reportingdelay = (mps._elapsed('', true) + mps._delays.reportingdelay);
  var _execpixels = setTimeout(function() {
    while(mps._queue.errorpixels.length) {
      mps._queue.errorpixels.shift().call();
    }
    clearTimeout(_execpixels);
  }, mps._delays._reportingdelay);
});

// Update and Get correctlor, store correlators by loadset
mps._correlator = {
  sets: this.sets || {},
  update: function(){
    mps._gptcmd.push(function(){
      googletag.pubads().updateCorrelator();
    });
    if(googletag && typeof googletag.pubads().updateCorrelator() == 'object'){
      mps._debug('[mps:Loader] Update Correlator: public');
      return googletag.pubads().getCorrelator();
    }else{
      mps._debug('[mps:Loader] FAILED Update Correlator: public');
      return false;
    }
  },
  get: function(){
    if(typeof googletag.pubads() == 'object' && typeof googletag.pubads().getCorrelator() == 'string'){
      mps._debug('[mps:Loader] Get Correlator');
      return googletag.pubads().getCorrelator();
    }else{
      mps._debug('[mps:Loader] FAILED Get Correlator');
      return false;
    }
  }
};

mps._setPageTargeting = function(key,val) {
  try {
    // normalize all val inputs into array and validate
    if (!key || !val) {
      return false;
    }
    if (typeof(val) == 'boolean') {
      val = val + 0;
    }
    if (typeof(val) == 'number') {
      val = val.toString();
    }
    if (typeof(val) == 'string') {
      val = [val];
    }
    // array check
    if (val.constructor !== Array) {
      return false;
    }
    // normalize and validate key
    if (typeof(key) == 'boolean') {
      key = key + 0;
    }
    if (typeof(key) == 'number') {
      key = key.toString();
    }
    if (typeof(key) != 'string' || !key.length) {
      return key;
    }
    if (val.length === 1) {
      val = val[0].split(',');
    }
    // strip unsupported characters from key & val
    key = key.replace(/[^a-zA-Z0-9\.~_-]/gi, '');
    for (i = 0; i < val.length; i++) {
      val[i] = val[i].replace(/[^a-zA-Z0-9\.~_-]/gi, '');
    }
  } catch(err) {
    mps._errorCallback(err, 'mps._setPageTargeting');
    return false;
  }
  mps._gptcmd.push(function () {
    // call gpt page targeting
    if (mps._keys(mps._targeting).indexOf(key) === -1) {
      googletag.pubads().setTargeting(key, val);
      // save page targeting
      mps._targeting[key] = mps._targeting[key] || [];
      mps._targeting[key] = mps._merge(mps._targeting[key], val);
    }
  });
};

mps._clearPageTargeting = function(key) {
  if(typeof(key)=='boolean') {
    key=key+0;
  }
  if(typeof(key)=='number') {
    key=key.toString();
  }
  // If no arg passed, clear all targeting
  if(key == undefined) {
    if(!mps._targeting || typeof(mps._targeting)!='object') {
      return false;
    }
    for(var k in mps._targeting) {
      if(k.length) {
        mps._clearPageTargeting(key);
      }
    }
  } else {
    key=key.replace(/[^a-zA-Z0-9\.~_-]/gi,'');
    delete mps._targeting[key];
    mps._gptcmd.push(function() {
      googletag.pubads().clearTargeting(mps._targeting[key]);
    });
  }
};

//--mps._clone(a[obj]) returns deep copy
mps._clone=function(a){if(null==a||"object"!=typeof a)return a;var c=a.constructor(),b;for(b in a)a.hasOwnProperty(b)&&(c[b]=a[b]);return c};

// _haskeyval(obj[a],key[b],val[c]) Returns true if obj has a key called "key" and that key has "val" as its value.
mps._haskeyval=function(a,b,c){return a.hasOwnProperty(b)&&a[b]==c};

mps._debug('[mps:JS] LOADED: MPStools');

mps._bool = function(val,intval) {
  if(typeof(val)=='boolean') {
    val = val ? 1 : 0;
  }
  if(typeof(val)=='string') {
    if(val=='true') {
      val = 1;
    }
    if(val=='false') {
      val = 0;
    }
  }
  val = parseInt(val,10);
  if(!intval) {
    return val === 1;
  } else {
    return typeof(val) === 'number' ? val : parseInt(val, 10);
  }
};

// Active refresh.
mps._activerefresh = mps._activerefresh || {};
mps._activerefresh._focus = document.hasFocus();
mps._activerefresh._callback = function(func, name) {
  try {
    func();
  } catch(err) {
    mps._errorCallback(err, name);
  }
};

mps._activerefresh._wfocus = function() {
  mps._activerefresh._focus = true;
  if(typeof mps.detectwinfocusCallback === 'function') {
    mps._activerefresh._callback(mps.detectwinfocusCallback, 'mps.detectwinfocusCallback');
  }
};
mps._activerefresh._wblur = function() {
  mps._activerefresh._focus = false;
  if(typeof mps.detectwinblurCallback === 'function') {
    mps._activerefresh._callback(mps.detectwinblurCallback, 'mps.detectwinblurCallback');
  }
};
mps._activerefresh.blisten = window.addEventListener ? window.addEventListener('blur', mps._activerefresh._wblur) : window.attachEvent('onblur', mps._activerefresh._wblur);
mps._activerefresh.flisten = window.addEventListener ? window.addEventListener('focus', mps._activerefresh._wfocus) : window.attachEvent('onfocus', mps._activerefresh._wfocus);

mps.submit = mps.submit || {};
mps.submit._requested = mps.submit._requested || {};
mps.submit._responses = mps.submit._responses || {};
mps.submit._legacy = !(mps._checkua().oldie === false || mps._checkua().oldie && mps._checkua().oldie > 10);
mps.submit._getparams = function(getobj) {
  var _paramstr = '';
  for(var i in getobj) {
    _paramstr += encodeURIComponent(i);
    _paramstr += getobj[i] ? '=' + encodeURIComponent(getobj[i]) + '&' : '&';
  }
  return _paramstr.slice(0, -1);
};
mps.submit._response = function(_response, _statuscode, _key, _callback) {
  mps._debug('[mps:submit]: response received from url: ' + mps.submit._requested[0].url + ' with status code: ' + _statuscode);
  var _res = {
    response: _response,
    statuscode: _statuscode,
    elapsed: mps._elapsed('', true)
  };
  mps.submit._responses[_key] = _res;
  if(_callback) {
    return _callback.call(this, _statuscode, _response);
  }
  return _statuscode;
};
mps.submit._jq = function(_requested, _key, _callback, _timeout) {
  if(mps.submit._legacy === true) {
    jQuery.support.cors = true;
  }
  return jQuery.ajax({
    type: _requested.type,
    url:  _requested.url,
    data: _requested.type === 'POST' ? _requested.data : false,
    timout: _requested.timeout,
    dataType: mps.submit._legacy === true ? 'jsonp':'json',
    success: function(data, textStatus, xhr) {
      mps.submit._response(data, xhr.status, _key, _callback);
    },
    error: function(data, exception) {
      var _res = exception;
      var _xhrstatus = data && data.statusText ? data.statusText : false;
      mps.submit._response(_res, _xhrstatus, _key, _callback);
    }
  });
};
mps.submit._xhr = function(_requested, _key, _callback, _timeout) {
  var _newxhr;
  var _send = _requested.type === 'POST' ? mps.submit._getparams(_requested.data) : null;
  if(mps.submit._legacy === false) {
    _newxhr = new XMLHttpRequest();
    _newxhr.timeout = _requested.timeout;
    _newxhr.responseType = 'json';
    _newxhr.onreadystatechange = function() {
      if(_newxhr.readyState == 4) {
        var _responseobj = _newxhr.status === 200 ?_newxhr.response : _newxhr.statusText;
        return mps.submit._response(_responseobj, _newxhr.status, _key, _callback);
      }
    };
    _newxhr.open(_requested.type, _requested.url, true);
    _newxhr.send(_send);
    return _newxhr;
  } else {
    _newxhr = new XDomainRequest();
    _newxhr.onload=function() {
      return mps.submit._response(_newxhr.responseText, 200, _key, _callback);
    };
    _newxhr.onerror=function() {
      return mps.submit._response(_newxhr.responseText, 0, _key, _callback);
    };
    _newxhr.open(_requested.type, _requested.url, true);
    _newxhr.send(_send);
    return _newxhr;
  }
};

mps.submit.request = function(endpointurl, kvdata, usepost, timeoutsecs, callback) {
  var _endpointurl = typeof(endpointurl) === 'string' && endpointurl.length ? endpointurl : false;
  var _kvdata = typeof(kvdata) === 'object' && mps._keys(kvdata).length ? kvdata : false;
  var _type = mps._bool(usepost) === true ? 'POST': 'GET';
  var _timeoutsecs = typeof(timeoutsecs) === 'number' && timeoutsecs > 0 ? timeoutsecs * 1000 : 4000;
  var _callback = typeof(callback) === 'function' ? callback : false;
  if(_endpointurl && _kvdata) {
    _endpointurl = _type === 'POST' ? _endpointurl : _endpointurl + '?' + this._getparams(_kvdata);
    var _key = mps._keys(mps.submit._requested).length;
    var _requested = {
      url: _endpointurl,
      data: _kvdata,
      type: _type,
      timeout: _timeoutsecs,
      elapsed: mps._elapsed('', true)
    };
    mps.submit._requested[_key] = _requested;
    if(typeof(jQuery) === 'function') {
      return mps.submit._jq(_requested, _key, _callback);
    } else {
      return mps.submit._xhr(_requested, _key, _callback);
    }
  } else {
    mps._debug('[mps:submit]: invalid url or key value data specified.');
    return false;
  }
};

/* ----- Return breakpoint from responsive map ----- */
mps.getResponsiveSet = function(width,height) {
  var vpsize = mps._viewport(),
      vpwidth = width ? width : vpsize[0],
      vpheight = height ? height : vpsize[1],
      rset = '';
  var responsivesets = mps.response && mps.response.dart && mps.response.dart.params && mps.response.dart.params.responsive_sets;
  if (!responsivesets || responsivesets.length == 0) {
    mps._debug('^[mps:getResponsiveSet] No responsive map set.');
    return false;
  }
  for (var size in responsivesets) {
    if (vpwidth >= responsivesets[size][0] && vpheight >= responsivesets[size][1]){
      rset = size;
    }
  }
  if(typeof(rset)!='undefined') {
    return rset;
  } else {
    return false;
  }
};

/**
 * getValueWithoutKey return properties values without the keys
 * @param {object}  obj
 * @return {values} array
 */
mps.getValueWithoutKey = function(obj) {
  var values = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      values.push(obj[key]);
    }
  }
  return values;
};

/**
 * Shared Taboola-mode no-op ad facade (insertAd/getAd/cloneAd/replaceAd bookkeeping
 * + slot targeting). Lives here — loaded first, before pre-include-autoloader.js and
 * before the async params response — so pre-include-autoloader.js can use it directly
 * for pure-Taboola stacks (mps._ext.ad_stack === 'taboola', known synchronously) instead
 * of defining the real GPT logic and racing against taboola-api's later async wrap.
 * taboola-api also calls into this (for mixed-stack pages, where ad_provider is only
 * known after insert_head) so both call sites share one implementation, not two.
 *
 * Mixed-stack residual: a 'both'/blank component calling insertAd/getAd directly before
 * ad_provider resolves is an admin-tagging responsibility, not a code fix.
 */
mps._taboolaAdFacade = (function () {
  var PREFIX = '[mps:taboola:facade]';

  function ensureTrackingArrays(loadset) {
    mps._ext = mps._ext || {};
    mps._ext._insertedads = mps._ext._insertedads || {};
    mps._ext._insertedads[loadset] = mps._ext._insertedads[loadset] || [];
    mps._reqs = mps._reqs || {};
    mps._reqs[loadset] = mps._reqs[loadset] || {};
  }

  function trackInsert(adslot, loadset) {
    ensureTrackingArrays(loadset);
    if (mps._ext._insertedads[loadset].indexOf(adslot) === -1) {
      mps._ext._insertedads[loadset].push(adslot);
    }
    mps._reqs[loadset]['begin_' + adslot] = mps._elapsed('', true);
  }

  // Targeting string format: "key=val1;key=val2;other=x;"
  function pushSlotTargeting(slotName, targetingStr) {
    if (!targetingStr) return;
    var slotMap = mps.response && mps.response.taboola && mps.response.taboola.slot_map;
    if (slotMap && Object.prototype.hasOwnProperty.call(slotMap, slotName) && slotMap[slotName]) {
      slotName = slotMap[slotName];
    }
    // Null-prototype: sanitized keys like "hasOwnProperty"/"__proto__" would otherwise collide with inherited members.
    var pairs = Object.create(null);
    var parts = targetingStr.split(';');
    for (var i = 0; i < parts.length; i++) {
      var eq = parts[i].indexOf('=');
      if (eq > 0) {
        var pairKey = parts[i].substring(0, eq).replace(/^cag\[([^\]]+)\]$/i, '$1').replace(/[^a-zA-Z0-9\.~_-]/gi, '');
        if (!pairKey) { continue; }
        pairs[pairKey] = pairs[pairKey] || [];
        pairs[pairKey].push(parts[i].substring(eq + 1));
      }
    }
    window.optidigitalQueue = window.optidigitalQueue || {};
    window.optidigitalQueue.cmd = window.optidigitalQueue.cmd || [];
    for (var key in pairs) {
      // pairs has no prototype, so every enumerable key is already its own property.
      (function (s, k, v) {
        window.optidigitalQueue.cmd.push(function () {
          if (typeof optidigitalToolbox !== 'undefined') {
            optidigitalToolbox.setSlotTargeting(s, k, v);
          }
        });
      })(slotName, key, pairs[key]);
    }
    mps._debug(PREFIX + ' setSlotTargeting(' + slotName + ') keys=' + Object.keys(pairs).length, pairs);
  }

  return {
    insertAd: function (selector, adslot, targetingappend, disabledetect, newpath, overridetargeting, clone, loadset, prevloadset) {
      var ls = (typeof loadset !== 'undefined') ? parseInt(loadset, 10) : (mps._loadset || 0);
      trackInsert(adslot, ls);
      pushSlotTargeting(adslot, targetingappend);
      mps._debug(PREFIX + ' insertAd(' + adslot + ') bookkeep only — site owns placement divs');
      return true;
    },
    getAd: function (adunit, _swap, loadset) {
      mps._debug(PREFIX + ' getAd(' + adunit + ') returning empty string — Taboola owns placement');
      return '';
    },
    cloneAd: function (selector, adslot, targetingappend, disabledetect, overridetargeting, loadset) {
      var ls = (typeof loadset !== 'undefined') ? parseInt(loadset, 10) : (mps._loadset || 0);
      mps._clonevars = mps._clonevars || {};
      mps._clonevars[ls] = mps._clonevars[ls] || {};
      var cloneCount = parseInt((mps._clonevars[ls][adslot] || '').split('_C')[1], 10) || 0;
      cloneCount++;
      mps._clonevars[ls][adslot] = adslot + '_C' + cloneCount;
      var cloneName = adslot + '-C' + cloneCount;
      trackInsert(cloneName, ls);
      pushSlotTargeting(adslot, targetingappend);
      mps._debug(PREFIX + ' cloneAd(' + adslot + ') \u2192 ' + cloneName + ' bookkeep only');
      mps._queue.render('adclone', cloneName, ls, cloneCount);
      return true;
    },
    replaceAd: function (selector, adslot, loadset) {
      var ls = (typeof loadset !== 'undefined') ? parseInt(loadset, 10) : (mps._loadset || 0);
      trackInsert(adslot, ls);
      mps._debug(PREFIX + ' replaceAd(' + adslot + ') bookkeep only — Taboola owns slot lifecycle');
      return true;
    }
  };
})();




/* js/core/pre-include-autoloader.js */

/*--------------------------------------
 [mps:EXT] Client-Side MPS Load + Execute
 --------------------------------------*/

//--> SCRIPT INIT
var mps = mps||{}, gpt=gpt||{}, debugmode=debugmode||{}, mpscall=mpscall||{}, mpsopts=mpsopts||{}, mpsinstance=mpsinstance||false;
mps._ext = mps._ext || {};
mps._ext._p = {};
mps._ext.loaded = 0;
mps._ext.loadhead = 0;
mps._ext.loadheader = 0;
mps._ext.loadfooter = 0;
mps._ext._jq = typeof(jQuery) === 'function' ? 1 : 0;
mps._ext._insertedads = mps._ext._insertedads || {};
mpsopts.callback = mpsopts.callback || 'mpsCallback';
mpsopts.catprefix = mpsopts.catprefix || '';
mpsopts.deriveparams = mpsopts.deriveparams || {1:'cat1',2:'cat2',3:'cat3',4:'cat4',5:'cat5',6:'cat6'};
mpsopts.deriveoff = !!mpsopts.deriveoff;
mpsopts.maxcats = mpsopts.maxcats || 6;
mpsopts.updatecorrelator = (typeof mpsopts.updatecorrelator !== 'undefined')? mpsopts.updatecorrelator : 1;
mpsopts.maxpathsegs = mpsopts.maxpathsegs || 4;
mpsopts.subset = mpsopts.subset || mpsopts.subset || false;
mpsopts.skipheader = (typeof(mpsopts.skipheader)==='undefined'||mpsopts.skipheader!=1) ? 0 : 1;
mpsopts.legacyqueues=(typeof(mpsopts.legacyqueues)==='undefined') ? 1 : mpsopts.legacyqueues;
mpsopts.forcenetcalls = mpsopts.forcenetcalls || false;
mpsopts.skipautorequest = (typeof(mpsopts.skipautorequest)==='undefined' || mpsopts.skipautorequest===0 || !mps._bool(mpsopts.skipautorequest)) ? 0 : 1;
mpsopts.skipdisableinitialload = typeof(mpsopts.skipdisableinitialload)==='undefined' || mpsopts.skipdisableinitialload===0 || !mps._bool(mpsopts.skipdisableinitialload) ?  0 : 1;
mpsopts.detection_above_the_fold = mpsopts.detection_above_the_fold || 0;
mpsopts.loadgptfirst=mpsopts.loadgptfirst||1;
mps._ext._set = mps._ext._set || -1;
mps._reqs = mps._reqs || {};
mps._clonevars = mps._clonevars || {};
mps._ext._ = mps._loadset || 0;
mps._reqset = mps._reqset || 0;
mps._gptloaded=false;
mps.adobs=[];
mps._delays = mps._delays || {};
mps.lazyloadclone=mps.lazyloadclone||{};
mps._adsheld2=mps._adsheld2||[]; // tracking queued ads (before gpt ready)
mpscall_original = mpscall;
mps._elapsed(); // Begin execution timer

mps._sanitizeQS = function(str) {
  try {
    str = String(str || '');
    // Replace + with space then decode
    str = str.replace(/\+/g, '%20');
    try { str = decodeURIComponent(str); } catch (e) {}
    // Allow only RFC3986 unreserved and a small safe subset
    return str.replace(/[^A-Za-z0-9._~!$&'()*+,;=:@\/-]/g, '');
  } catch (e) { return ''; }
};

mps._sanitizePathSeg = function(seg) {
  try {
    seg = String(seg || '');
    // Strict: keep alphanum, dash, underscore, dot, tilde
    seg = seg.replace(/[^A-Za-z0-9._~-]/g, '');
    // Prevent reserved dot names
    if (seg === '.' || seg === '..') return '';
    return seg;
  } catch (e) { return ''; }
};

//--> SET REQUEST VARS & OPTS
mps._debug(($dM=(new Array(8).join('*')))+' [mps] Debug Mode: ('+debugmode.log+') '+$dM);

if(mps._ext.IRSOURCE) {
  mpsinstance=mps._backendhost;
} else if (typeof(mpsopts.host) === 'string' && mpsopts.host.length>0) {
  mpsinstance=mpsopts.host;
} else if (typeof(mpsinstance)!='string' || mpsinstance=='') {
  mpsinstance=mps._backendhost;
}

/**
 * Returns the formatted mpscall object
 * @param {object}  mpscall
 * @return {object} mpscall
 */
mps._ext.mpsRequestParams = function(mpscall) {
mps._debug('[mps:preLoader] mpsRequestParams()');
  //(paths) mps._ext._pathsegs
  sitepath = mpscall.path || window.location.pathname;
  if(sitepath!='' && sitepath!='/' && sitepath.indexOf('/') > -1) {
    if(sitepath.substr(-1)=='/') sitepath=sitepath.substr(0, sitepath.length-1);
    if(sitepath.substr(0,1)=='/') sitepath=sitepath.substr(1,sitepath.length-1);
    sitepatharr = sitepath.split('/');
    mps._ext._pathsegs=[];
    var cleanpatharr=[],cutpatharr=[];
    for (var i=0; i<sitepatharr.length; i++) {
      var _seg = mps._sanitizePathSeg(sitepatharr[i]);
      mps._ext._pathsegs[i+1] = _seg;
      if(i < mpsopts.maxpathsegs) {
        cleanpatharr[i+1]= _seg;
      } else {
        cutpatharr[i+1] = _seg;
      }
    }
    cleanpath = cleanpatharr.join('/');
    mpscall.path = cleanpath;
  } else {
    mps._ext._pathsegs = (sitepath!='/' && sitepath!='') ? [undefined,sitepath] : [undefined];
    mpscall.path = sitepath;
  }
  var qs = window.location.search.substring(1).split('&'),qsv;
  mps._ext._qsparams={};
  for(var i=0; i<qs.length; i++){
    qsv = qs[i].split('=');
    if(typeof(qsv[0])!='undefined' && qsv[0] !== '') {
      var _k = mps._sanitizeQS(qsv[0]);
      var _v = (typeof(qsv[1])!='undefined') ? mps._sanitizeQS(qsv[1]) : '';
      if(_k) mps._ext._qsparams[_k] = _v;
    }
  }
  return mpscall;
};

mps._ext.mpsDeriveParams = function() {
  derived={};
  if(mpsopts.deriveoff) return derived;
mps._debug('[mps:preLoader] EXECUTE mpsDeriveParams()');

  // Extract mpscall params using format defined in mpsopts.deriveparams
  if(typeof(mpsopts.deriveparams)=='object') {
    var catkeys=['cat1','cat2','cat3','cat4','cat5','cat6'], catstring='';
    for(var k in mpsopts.deriveparams) {
      if(isNaN(k)) { //qs
        if(typeof(mps._ext._qsparams[k])=='string') derived[mpsopts.deriveparams[k]] = mps._ext._qsparams[k];
      } else { //url
        if(typeof(mps._ext._pathsegs[k])=='string') derived[mpsopts.deriveparams[k]] = mps._ext._pathsegs[k];
      }
    }
    for (var i=0; i<catkeys.length; i++) {
      if(typeof(derived[catkeys[i]])=='string') {
        catstring+=derived[catkeys[i]].replace('|','~');
        delete(derived[catkeys[i]]);
      }
      catstring+='|';
    }
    derived.cat = mps._trim(catstring,'| ').replace('||','|~|');
  mps._debug('[mps:preLoader] (derived params) '+JSON.stringify(derived));
  }
  return derived;
};

/**
 * Returns the formatted query string
 * @param {object}  mpscall
 * @return {string} mpscallenc
 */
mps._ext.mpsQueryString = function(mpscall) {
  if(typeof(mpscall)!='object') return '';
  var mpscallenc='';
  for(var key in mpscall) {
    if(typeof(mpscall[key])=='object') {
      for(var keyk in mpscall[key]) {
        mpscall[key+'['+keyk+']'] = mpscall[key][keyk];
        //remove nulls, undefined, empty
        if(mpscall[key][keyk] == 'undefined' || mpscall[key][keyk] == '' || mpscall[key][keyk] == null){
          delete mpscall[key+'['+keyk+']'];
          mps._debug('^[mps:preLoader] Removed mpscall:'+key+'['+keyk+'], is empty.');
        } else {
        }
      }
      delete mpscall[key];
    }
  }
  for (var k in mpscall) {
    if(typeof(mpscall[k])!='undefined' && mpscall[k] !== '' ) {
      // Truncate really long strings at 250 chars
      if(typeof(mpscall[k]==='string') && mpscall.length > 0) mpscall[k]=mps._trim(mpscall[k].substring(0,250));
      mpscallenc+=encodeURIComponent(k)+'='+encodeURIComponent(mpscall[k]) + '&';
    }
  }
  if(mpscallenc.substr(-1)=='&') mpscallenc = mpscallenc.substr(0, mpscallenc.length - 1);
  return mpscallenc;
};

/**
 * Returns the formatted RequestUrl string
 * @param {string}  LOADMODE
 * @return {string} mps.requesturl
 */
mps._ext.mpsRequestUrl = function(LOADMODE) {
  if(typeof(mpscall)!='object') return '';
  mpscall.LOADMODE = LOADMODE = typeof LOADMODE != 'undefined' ? LOADMODE : '';
  mpscall.NOLOAD='mpstools';
  mpscall.IRSOURCE = typeof mps._ext.IRSOURCE != 'undefined' ? mps._ext.IRSOURCE : '';
  if(mps._ext.nowrite > 0 || mps._bool(mpsopts.skipautorequest) || mpscall.LOADMODE.toLowerCase() === 'more') {
    mpscall.ASYNC=1;
    mps._ext._async=1;
    mps._ext.datatype="json";
  }else{
    mps._ext.datatype="jsonp";
  }
  mps.qs = mps._ext.mpsQueryString(mpscall);
  var subset = (typeof(mpsopts.subset)=='string' && mpsopts.subset.length>0) ? '/'+mpsopts.subset : '';
  mps.requesturl = mpsinstance + '/request/page/'+mps._ext.datatype+'/params/'+subset+'?CALLBACK=' + mpsopts.callback + '&'+ mps.qs;
  mps._debug('[mps:preLoader] mpsRequestUrl('+LOADMODE+'): '+mps.requesturl);
  return mps.requesturl;
};

/**
 * mpsOnReady - returns if mps is ready
 * @param {boolean}  usejq
 */
mps._ext.mpsOnReady = function(usejq) {
  mps._debug("#[mps:preLoader] mpsOnReady fallback check — nowrite:" + mps._ext.nowrite +
    " loaded:" + mps._ext.loaded + " loadfooter:" + mps._ext.loadfooter);
  if(mps._ext && mps._ext.nowrite!=1 && mps._ext.loaded === 1 && mps._ext.loadfooter === 0) {
    if(mps._bool(usejq)) {
    mps._debug('[mps:preLoader] No Footer Detected - Append Footer (jquery) NOWRITE:'+ mps._ext.nowrite);
      jQuery('body').append(mps.response.pagevars.insert_bodyfooter);
    } else {
      mps._append(mps._select('body'), mps.response.pagevars.insert_bodyfooter);
    mps._debug('[mps:preLoader] No Footer Detected - Append Footer (non-jquery) NOWRITE:'+ mps._ext.nowrite);
    }
    mps._ext.loadfooter=1;
  }
};

/**
 * Injects bodyheader html
 * @param {boolean}  jq
 */
mps.executeBodyheader = function(jq) {
  mps._debug('[mps:preLoader] body defined, execute bodyheader inserts.' + mps._elapsed(true));
  if(jq === true) {
    jQuery('body').prepend(mps.response.pagevars.insert_bodyheader);
  } else {
    mps._append(mps._select('body'), mps.response.pagevars.insert_bodyheader);
  }
  mps._ext.loadheader = 1;
  return true;
};

/**
 * Initializes bodyheader html
 * @param {boolean}  jq
 */
mps.intBodyheader = function(jq) {
  mps._debug('[mps:preLoader] body not defined, set listener.' + mps._elapsed(true));
  mps._ext.loadfooter = 1;
  var _jq = mps._bool(jq);
  var _reqanimation = typeof(window.requestAnimationFrame) === 'function';
  var _body = function() {
    return _jq === true ? jQuery('body').length : mps._select('body');
  };
  var _exec = function(body) {
    if(body && _body()) {
      mps.executeBodyheader(_jq);
      mps._ext.loadfooter = 0;
      mps._ext._async = true;
      mps.writeFooter();
      return false;
    } else {
      if(_reqanimation === true) {
        window.requestAnimationFrame(_exec);
      }
    }
  };
  if(_reqanimation === true) {
    _exec();
  } else {
    var _time = 0;
    var _int = setInterval(function() {
      if(_time <= mps._delays.bodyheader) {
        if(_body()) {
          _exec(true);
          clearInterval(_int);
        }
      } else {
        clearInterval(_int);
      }
      _time += mps._delays.bodyheaderint;
    }, mps._delays.bodyheaderint);
  }
};

// mps.executeInserts (insert_head, insert_bodyheader)
// Autoloader: If(async) mps.__intcode=2 else(document.write)
mps.executeInserts = function() {
  if(typeof(mps)!='object' || typeof(mps.response)!='object') {
    mps._debug('^[mps:preLoader] Failed executeInserts(): No MPS Response');
    return false;
  }
  var _jq = typeof(jQuery) === 'function';
  if(mps._ext.nowrite > 0 && !mps.__intcode && !mpsopts.skipautorequest) {
    _jq === true ? jQuery('body').append(mps.response.pagevars.insert_head) : mps._append(mps._select('head'), mps.response.pagevars.insert_head);
    mps._ext.loadhead = 1;
    if(mpsopts.skipheader != 1) {
      if((!mps._select('body') && !mps.__intcode) || mps._ext.mpsready === true || typeof mps._postscribe !== 'function') {
        mps.intBodyheader(_jq);
      } else {
        // Avoid document.write sink; append when body is available (raw insert)
        mps._append(mps._select('body'), mps.response.pagevars.insert_bodyheader);
      }
      mps._ext.loadheader = 1;
    }
    return true;
  } else {
    if(_jq === false) {
      mps._debug('[mps:preLoader] executeInserts (non-jquery)');
      mps._append(mps._select('head'), mps.response.pagevars.insert_head);
      mps._ext.loadhead = 1;
      if(mps._select('body')) {
        mps.executeBodyheader(false);
      } else {
        mps.intBodyheader(false);
      }
    } else {
      mps._debug('[mps:preLoader] executeInserts (jquery)');
      jQuery('head').append(mps.response.pagevars.insert_head);
      mps._ext.loadhead = 1;
      if(jQuery('body').length) {
        mps.executeBodyheader(true);
      } else {
        mps.intBodyheader(true);
      }
    }
    return true;
  }
};

//--> JSONP CALLBACK
var mpsCallback = function(data, update) {
mps._debug('[mps:preLoader] JSONP Callback Execution, Update:'+!!update+' '+mps._elapsed());
  if(typeof(data) === 'object' && typeof(data.pagevars) !== 'undefined' && typeof(data.pagevars.insert_head) !== 'undefined') {
    mps.response = data;
    if (!update && mps._ext.ad_stack === 'taboola' && typeof mps._preconnectTaboola === 'function'
      && data.taboola) {
      mps._preconnectTaboola();
      if (typeof mps._preloadTaboola === 'function') {
        mps._preloadTaboola(typeof mps._resolveTaboolaSiteCode === 'function'
          ? mps._resolveTaboolaSiteCode(data.taboola.site_code) : data.taboola.site_code);
      }
    }
    mps.adslothtml = {};
    if(typeof(mps)=='object' && typeof(mps.response)=='object' && typeof(mps.response.dart)=='object' && typeof(mps.response.dart.params)=='object' && typeof(mps.response.dart.params.adunits)=='object') {
      for(var adunit in mps.response.dart.params.adunits) {
        // .data needed for backward compatibility
        mps.response.dart.adunits = mps.response.dart.adunits || {};
        mps.response.dart.adunits[adunit] = mps.response.dart.adunits[adunit] || {};
        mps.adslothtml[adunit] = mps.response.dart.adunits[adunit].data = mps.response.dart.params.adunits[adunit].html;
      }
    }
    mps._ext.loaded = 1;
    mps.executeInserts();
    //--> DOCUMENT READY EVENT HOOK
    if(typeof(jQuery)!=='function') {
    mps._debug('[mps:preLoader] NO JQUERY (using native js)');
      mps._ready(function(){
        mps._ext.mpsOnReady(false);
      });
    } else {
    mps._debug('[mps:preLoader] JQUERY AVAILABLE');
      jQuery().ready(function() {
        mps._ext.mpsOnReady(true);
      });
    }
    if(!update) {
      if(!mps._loadset) {
        mps._queue.render('mpsready');
      }
      mps._queue.render('mpsinit');
      if(typeof(mps.initCallback) === 'function') {
        try {
          mps.initCallback();
        } catch(err) {
          mps._errorCallback(err, 'mps.initCallback');
        }
      }
    }
  }
};

/**
 * Determines Slot object
 * @param {string}  adslot
 * @param {number}  loadset
 * @return {object}
 */
mps._ext.determineSlot = function(adunit) {
  if(typeof(adunit)=='string' && typeof(mps)=='object' && typeof(mps.adunits)=='object' && typeof(mps.response)=='object' && typeof(mps.response.dart)=='object' && typeof(mps.response.dart.params.adunits)=='object') {
    if(typeof(mps.response.dart.params.adunits[adunit])=='object' && typeof(mps.response.dart.params.adunits[adunit].html)!='undefined' && mps.response.dart.params.adunits[adunit].html!='') {
      return adunit;
    }
    // Determine whether to use slot name or regular name
    if(typeof(mps.adunits[adunit])=='string') {
      if(typeof(mps.response.dart.params.adunits[mps.adunits[adunit]]) =='object' && typeof(mps.response.dart.params.adunits[mps.adunits[adunit]].html)!='undefined' && mps.response.dart.params.adunits[mps.adunits[adunit]].html!='') {
        return mps.adunits[adunit];
      }
      // Get other ad units that have same slot
      for(var i in mps.adunits) {
        if(mps.adunits[i] == mps.adunits[adunit]) {
          if(typeof(mps.response.dart.params.adunits[i]) == 'object' && typeof(mps.response.dart.params.adunits[i].html) != 'undefined' && mps.response.dart.params.adunits[i].html != '') {
            return i;
          }
        }
      }
    }
  }
  return adunit;
};

/**
 * Replicates inserted Ad data, used for mps.cloneAd
 * @param {string}  adslot
 * @param {number}  loadset
 * @return {object}
 */
mps._replicateAd = function (adslot,loadset) {
  if(adslot.length>0 && typeof adslot == 'string'){
    loadset = (!isNaN(loadset) && loadset <= mps._keys(mps._adloads).length) ? parseInt(loadset,10) : mps._loadset;
    if(gpt && mps._advars && mps._advars[loadset] && mps._advars[loadset][adslot]){
      mps._clonevars[loadset]=mps._clonevars[loadset]||{};
      mps._clonevars[loadset][adslot] = mps._clonevars[loadset][adslot] || '';
      var count = (mps._clonevars[loadset][adslot].length > 0 && parseInt(mps._clonevars[loadset][adslot].split('_C')[1], 10) > 0) ? parseInt(mps._clonevars[loadset][adslot].split('_C')[1],10)+1 : 1;
      mps._clonevars[loadset][adslot] = mps._advars[loadset][adslot]+'_C'+count;
      mps._debug('[mps:preLoader] _replicateAd: gpt.'+mps._clonevars[loadset][adslot]);
      mps.advars[adslot+'-C'+ count] = mps._advars[loadset][adslot+'-C'+ count] =  mps._advars[loadset][adslot]+ '_C' +count;      // create var name
      mps._adslots[loadset][adslot +'-C'+ count] =  mps._adslots[loadset][adslot]+ '-C' +count;   // create slot name
      gpt[mps._clonevars[loadset][adslot]] = gpt[mps._advars[loadset][adslot]];                   // clone object
      return gpt[mps._clonevars[loadset][adslot]];
    } else {
      //_replicateAd SKIPPED: Slot Disabled
      return false;
    }
  }else{
  mps._debug('[mps:preLoader] _replicateAd invalid parameters');
    return false;
  }
};

/**
 * Legacy ad injection, replaced by mps.insertAd
 * @param {string}   adunit
 * @param {boolean}  _swap //TODO: deprecate
 * @param {number}  loadset
 * @return {string} adslothtml
 */
mps.getAd = function(adunit, _swap, loadset) {
  // Pure-Taboola stacks are known synchronously (mps._ext.ad_stack is emitted
  // before this file loads) — skip the real GPT logic entirely rather than
  // racing against taboola-api's later async wrap. Mixed stacks can't
  // resolve ad_provider this early, so they fall through unchanged.
  if (mps._ext.ad_stack === 'taboola') {
    return mps._taboolaAdFacade.getAd.apply(this, arguments);
  }
  try {
    var adunit = mps._ext.determineSlot(adunit);
    var _slotid = 'mps-getad-' + adunit.toLowerCase().replace(/\s+/g, '');
    var adslothtml = '<div id="' + _slotid + '" class="mps-wrapper" data-mps-fill-slot="' + _slotid + '"></div>';

    if (_swap) {
      for (var adunitname in mps.adunits) {
        if (adunit == mps.adunits[adunitname]) {
          adunit = adunitname;
          break;
        } else if (mps.adunits.hasOwnProperty(adunit)) {
          adunit = mps.adunits[adunit];
          break;
        }
      }
    }

    if (typeof(adunit) != 'undefined' && typeof(mps) === 'object' && typeof(mps.response) === 'object' && typeof(mps.response.dart) === 'object' && typeof(mps.response.dart.adunits) === 'object' && typeof(mps.response.dart.adunits[adunit]) === 'object' && typeof(mps.response.dart.adunits[adunit].data) !== 'undefined') {
      var ls = typeof(loadset) === 'number' ? parseInt(loadset, 10) : mps._loadset;
      mps._ext._insertedads[ls] = mps._ext._insertedads[ls] || [];
      var adunitlower = adunit.toLowerCase().replace(/\s+/g, '');
      for (var unit in mps.adunits) {
        if (mps.adunits.hasOwnProperty(unit) && mps.adunits[unit] === adunitlower && mps._ext._insertedads[ls].indexOf(adunitlower) == -1) {
          mps._ext._insertedads[ls].push(adunitlower);
        }
      }

      if (mps._keys(mps.response.dart.adunits).indexOf(adunit) === -1 || mps.response.dart.adunits[adunit].data !== '') {
        // .data needed for backward compatibility
        adslothtml = mps.response.dart.adunits[adunit].data = mps.response.dart.params.adunits[adunit].html;

        // outofpage
        if (mps.response.dart.params.use_out_of_page_slot == adunit && mps.response.dart.params.adunits._oop && mps.response.dart.params.adunits._oop.html !== '') {
          adslothtml += mps.response.dart.params.adunits._oop.html;
        }
        if (typeof mps._ext == 'object' && typeof mps._reqs == 'object') {
          mps._reqs[ls] = mps._reqs[ls] || {};
          mps._reqs[ls]['begin_' + adunit] = mps._elapsed('', true);
        }
      } else {
        mps._debug("^[mps:preLoader] mps.getAd(" + adunit + ") SKIPPED: Disabled " + mps._elapsed());
        adslothtml = '<!--(mps.getAd) ' + adunit + ' disabled-->';
      }
    } else {
      if (_swap) {
        if (mps.response && mps.response.dart &&  mps.response.dart.adunits && mps._keys(mps.response.dart.adunits).indexOf(adunit) === -1) {
          mps._debug("^[mps:preLoader] mps.getAd(" + adunit + ") SKIPPED: Disabled " + mps._elapsed());
        }
        if (!mps._ext.loaded) {
          mps._queue.gptloaded.push(function() {
            mps.insertAd("#" + _slotid, adunit);
          });
          mps._adsheld2.push(adunit);
        }
        return adslothtml;
      } else {
        return mps.getAd(adunit, true);
      }
    }
    return adslothtml;
  } catch (err) {
    mps._errorCallback(err, 'mps.getAd');
    return false;
  }
};


/**
 * Takes a component id and returns data as a string (html, js css)
 * @param {string}  sid
 * @return {string} componentdata
 */
mps.getComponent = function(sid) {
  componentdata='';
  if(typeof(sid)!='undefined' && sid !='' && typeof(mps)=='object' && typeof(mps.response)=='object' && typeof(mps.response.components)=='object' && typeof(mps.response.components[sid])=='object' && typeof(mps.response.components[sid].data)!='undefined') {
  mps._debug('[mps:preLoader] mps.getComponent() LOAD: '+sid);
    if(mps.response.components[sid].data != '') {
      componentdata = mps.response.components[sid].data;
    }
  } else {
  mps._debug('[mps:preLoader] mps.getComponent() SKIP: '+sid);
  }
  return componentdata;
};

/**
 * Takes targeting strings and returns a map
 * @param {string}  target
 * @return {array}  targetingArray
 */
mps.targetingArray = function(target) {
  if(typeof(target)=='string'&&target.length) {
    var targetingArray = [],_tmpArr = [],map={},_str = target.split(';');
    for(var i=0;i<_str.length;i++) {
      if(_str[i].indexOf('=') > -1) {
        _kv = _str[i].split('=');
        // unwrap stray bracket-notation keys (e.g. "cag[isapp]" -> "isapp")
        // that should have been resolved to a bare key upstream
        _kv[0] = _kv[0].replace(/^cag\[([^\]]+)\]$/i, '$1');
        // strip any remaining unsupported characters from the key, matching
        // the sanitization already applied in mps._setPageTargeting
        _kv[0] = _kv[0].replace(/[^a-zA-Z0-9\.~_-]/gi, '');
        _tmpArr.push(_kv);
      }
    }
    for(var i=0; i<_tmpArr.length; i++) {
      if(_tmpArr[i][0] in map) {
        map[_tmpArr[i][0]].push(_tmpArr[i][1]);
      } else {
        map[_tmpArr[i][0]] = [_tmpArr[i][1]];
      }
    }
    for(var k in map) {
      if(map[k].length > 1) {
	      targetingArray.push([k,map[k]]);
      } else {
	      targetingArray.push([k,map[k][0]]);
      }
    }
    return targetingArray;
  }
  return false;
};

/**
 * Prepends Defaults targeting, if override=true doesn't append
 * @param {object}  targeting
 * @param {string}  adslot
 * @param {boolean} override
 * @return {string} _currentTargeting
 */
mps.prependDefaultTargeting = function(targeting, adslot, override) {
  try {
    override=override||false;
    var _pagecontextKey = mps._pagecontextKey();
    if(_pagecontextKey === false)  { return false; }
    var _currentTargeting = typeof(mps._pagecontext[_pagecontextKey]['targeting'][adslot]) === 'object' ? mps._clone(mps._pagecontext[_pagecontextKey]['targeting'][adslot]) : {};
    if(!_currentTargeting || mps._keys(_currentTargeting).length === 0) {
      mps._debug('^[mps:preLoader] setTargeting('+adslot+') SKIPPED: Disabled');
      return false;
    }
    var _currTargetingObj = [];
    var _currentTargetingKeys = mps._keys(_currentTargeting);
    // Merge existing objects.
    for(var i in targeting) {
      // Merge param.
      if(typeof targeting[i] !== 'function' && typeof targeting[i] !== 'undefined' && targeting[i] != null) {
        if(_currentTargetingKeys.indexOf(targeting[i][0]) > -1 && !override) {
          var tmpArr = [];
          _currTargetingObj.push(_currentTargeting[targeting[i][0]]);
          if(typeof targeting[i][1] === 'string') {
            tmpArr = [targeting[i][1]];
          } else {
            tmpArr = targeting[i][1];
          }
          for(var j=0; j<_currTargetingObj.length;j++) {
            if(tmpArr.indexOf(_currTargetingObj[j]) === -1) {
              tmpArr.push(_currTargetingObj[j]);
            }
          }
          _currentTargeting[targeting[i][0]] = tmpArr;
          // New param or override param.
        } else {
          if(targeting[i][1] && typeof targeting[i][1] === 'string') {
            _currentTargeting[targeting[i][0]] = [targeting[i][1]];
          } else {
            _currentTargeting[targeting[i][0]] = targeting[i][1];
          }
        }
      }
    }
    return _currentTargeting;
  } catch(err) {
    mps._errorCallback(err, 'mps.prependDefaultTargeting');
    return false;
  }
};

/**
 * Sets Ad Targeting or Exclusions
 * @param {object} targeting
 * @param {string} adslot
 */
mps._setAdunitTargeting = function(targeting, adslot) {
  for(var i in targeting) {
    if(i.indexOf('!c') != -1 ){
      gpt[mps.advars[adslot]].setCategoryExclusion(targeting[i][0]);
    } else {
      gpt[mps.advars[adslot]].setTargeting(i, targeting[i]);
    }
  }
};

/**
 * Sets page Context for new loadsets
 * @private
 */
mps._setpageContext = function() {
  var _mpscallslen = (mps._keys(mps._ext.mpscalls).length - 1);
  while(_mpscallslen > -1) {
    if(_mpscallslen > 0) {
      if(typeof(mps._ext.mpscalls[_mpscallslen].path) === 'string' && (mpscall.path !== mps._ext.mpscalls[_mpscallslen].path) && mps._bool(mps._ext.mpscalls[_mpscallslen].adreq) === false) {
      mps._debug('[mps:preLoader]: Path: reset mps.pagevars and mpscall objects to previous path.');
        mps.pagevars = mps._clone(mps._ext.pagevars[_mpscallslen]);
        mpscall = mps._clone(mps._ext.mpscalls[_mpscallslen]);
        break;
      }
    } else {
      mps._debug('[mps:preLoader]: Path: no different previous path found in additional loadsets, reset to default.');
      if(typeof mps._ext.pagevars[0] == 'object'){ mps.pagevars = mps._clone(mps._ext.pagevars[0]); }
      if(typeof mps._ext.mpscalls[0] == 'object'){ mpscall = mps._clone(mps._ext.mpscalls[0]); }
    }
    _mpscallslen -= 1;
  }
};

/**
 * Appends or Overrides targeting key/value pairs
 * @params {string} selector
 * @param {string}  adslot
 * @param {string}  targetingappend
 * @param {boolean} disabledetect
 * @param {string}  newpath
 * @param {boolean} overridetargeting
 * @param {number}  clone
 * @param {number}  loadset
 */
mps.targetingAppend = function(selector,adslot,targetingappend,disabledetect,newpath,overridetargeting,clone,loadset) {
  clone = clone || 0;
  newpath = newpath || null;
  disabledetect = disabledetect || false;
  overridetargeting = overridetargeting || false;
  loadset = (typeof loadset != 'undefined') ? parseInt(loadset,10) : mps._loadset; //loadset to clone
  var adslotopt = (clone > 0) ? adslot + '-C' + clone : adslot;
  if(newpath && typeof(newpath)==='string' && newpath.length > 0)   {
  mps._debug('[mps:preLoader]: Path: ' + newpath + ' specified, mps.makeRequest()');
    mpscall.path = mps.pagevars.path = newpath;
    mpscall.READONLY = 1;
    mpscall.adreq = 1;
    var _pagecontextKey = mps._pagecontextKeyPath(newpath);
    if(_setTargeting && mps.advars[adslotopt]) {
      if(!mps.pagevars.fields) {
        mps.pagevars.fields = {};
      }
      for(var i in _setTargeting) {
        mpscall['field[' + i + ']'] = _setTargeting[i].toString();
        mps.pagevars.fields[i] = _setTargeting[i].toString();
      }
    }
    var gptQueue = mps._reqset > mps._loadset ? mps._reqset : mps._loadset;
    gptQueue = gptQueue + 1;
    mps._queue.gptloadset[gptQueue]=mps._queue.gptloadset[gptQueue]||[];
    var newrequest = !!(_pagecontextKey === false || mpsopts.forcenetcalls);
    if(newrequest) {
      mps._queue.gptloadset[gptQueue].push(function() {
        mps._gptcmd.push(function(){
          var _setTargeting = mps.prependDefaultTargeting(mps.targetingArray(targetingappend), adslot, overridetargeting);
          if(_setTargeting && adslotopt) {
            mps._setAdunitTargeting(_setTargeting, adslotopt);
          } else {
          mps._debug('[mps:preLoader]: New path, no targeting params specified');
          }
          mps.insertAd(selector, adslot, null, disabledetect, null, null, clone, loadset);
        });
      });
    }
    // Check if new network request is needed.
    if(clone === 0){
      if(newrequest) {
      mps._debug('[mps:preLoader]: Path: ' + newpath + ' specified and not previously loaded, mps.makeRequest().');
        mps._queue.gptloadset[gptQueue].push(function() {
          mps._setpageContext();
        });
        setTimeout(function(){
          mps.makeRequest('more');
        }, 0);
      } else {
        // Path already called, reference mps._pagecontext.
      mps._debug('[mps:preLoader]: Path: ' + newpath + ' specified but previously loaded, reference mps._pagecontext.');

        var _loadsettotal = (mps._pagecontext[_pagecontextKey].loadsets.length - 1);
        var _loadset = mps._pagecontext[_pagecontextKey].loadsets[_loadsettotal];
        var _mpscallslen = (mps._keys(mps._ext.mpscalls).length - 1);
        for (var j in mps._ext.mpscalls) {
          if (mps._ext.mpscalls[j].path === mpscall.path) {
            var _loadsetstotal = (mps._pagecontext[_pagecontextKey].loadsets.length - 1);
            var _loadset = mps._pagecontext[_pagecontextKey].loadsets[_loadsetstotal];
            mps.pagevars.mpsid = mps._pagecontext[_pagecontextKey].mpsid;
            break;
          }
        }
        if (mps._ext._insertedads[_loadset] && mps._ext._insertedads[_loadset].indexOf(adslot) > -1) {
          mps.cloneAd(selector, adslot, targetingappend, disabledetect, overridetargeting, _loadset);
        } else {
          mps.insertAd(selector, adslot, null, disabledetect, null, null, 0, _loadset, true);
        }
        mps._setpageContext();
      }
    }
  } else { // no path set
    var _setTargeting = mps.prependDefaultTargeting(mps.targetingArray(targetingappend), adslot, overridetargeting);
    var _advar = mps._advars[loadset] && mps._advars[loadset][adslotopt] ? mps._advars[loadset][adslotopt] : null;
    if(_setTargeting && _advar) {
      mps._debug('[mps:preLoader]: set targeting and insertAd()');
        for(var i in _setTargeting) {
          if(i.indexOf('!c') != -1 ){
            gpt[_advar].setCategoryExclusion(_setTargeting[i][0]);
            delete _setTargeting[i];
          }else {
            gpt[_advar].setTargeting(i, _setTargeting[i]);
          }
        }
    } else {
    mps._debug('[mps:preLoader]: no path or targeting params specified, insertAd()');
    }
    mps.insertAd(selector, adslot, null, disabledetect, null, null, clone, loadset);
  }
};

/**
 *mps.replaceAd  allows SPA (i.e pca.eonline.com)by updating the Google Page View by destroying and cloning the slot.
 * @param {string} selector
 * @param {string} adslot
 * @param {number} loadset (optional)
 */
mps.replaceAd = function(selector, adslot, loadset) {
  if (mps._ext.ad_stack === 'taboola') {
    return mps._taboolaAdFacade.replaceAd.apply(this, arguments);
  }
  // skip replaceAd --> call cloneAd
  var loadset = (typeof loadset != 'undefined') ? parseInt(loadset, 10) : mps._loadset;
  mps._ext._insertedads[loadset] = mps._ext._insertedads[loadset] || [];
  var slotname = adslot;
  var selected = mps._select(selector);
  var selectorName = (selected.id) ? '#'+selected.id : (document.body === selected) ? 'body' : '.'+selected.className;

  if (mps._ext._insertedads[loadset].indexOf(adslot) > -1) {
    // loop through all loadsets and clones and remove adslot
    for (var i=0; i<mps._keys(mps._slotscalled[loadset]).length; i++) {
      if (mps._keys(mps._slotscalled[loadset])[i].indexOf(adslot) > -1) {
        slotname = mps._keys(mps._slotscalled[loadset])[i];
        mps._debug('[mps:preLoader] destroyAds=>MATCH('+slotname+')');
        mps.destroyAds(slotname);
      } else if (slotname !== '_oop'){
        mps._debug('[mps:preLoader] destroyAds=>NO_MATCH('+slotname+')');
        mps.destroyAds(slotname);
      }
    }
    // Destroy OOP
    if (mps._keys(mps._slotscalled[loadset]).length && mps._keys(mps._slotscalled[loadset])[0].indexOf('_oop') > -1) {
      mps._debug('[mps:preLoader] destroyAds=>(_oop)');
      mps.destroyAds('_oop');
    }

    mps._queue.gptloaded.push(function() {
      mps._debug('[mps:preLoader] replaceAd('+loadset+') => cloneAd(' + selectorName + ':' + adslot + ')');
      mps.cloneAd(selector, adslot);
    });
  } else {
    mps._queue.gptloaded.push(function() {
      mps._debug('[mps:preLoader] replaceAd('+loadset+') => insertAd(' + selectorName + ':' + adslot + ')');
      mps.insertAd(selector, adslot);
    });
  }
};

/**
 * Clones an Ad with optional parameters
 * @params {string} selector
 * @param {string}  adslot
 * @param {string}  targetingappend
 * @param {boolean} disabledetect
 * @param {string}  newpath
 * @param {boolean} overridetargeting
 * @param {number}  loadset
 */

mps.cloneAd = function (selector, adslot, targetingappend, disabledetect, overridetargeting, loadset) {
  if (mps._ext.ad_stack === 'taboola') {
    return mps._taboolaAdFacade.cloneAd.apply(this, arguments);
  }
  targetingappend = targetingappend || '';
  disabledetect = (disabledetect !== undefined) ? mps._bool(disabledetect) : false;
  overridetargeting = overridetargeting || false;
  loadset = (typeof loadset != 'undefined') ? parseInt(loadset,10) : mps._loadset;
  if(mps._clonerunning) {
    mps._queue.clonead.push(function() {
      mps.cloneAd(selector, adslot, targetingappend, disabledetect, overridetargeting, loadset);
    });
    return false;
  }
  mps._clonerunning = true;
  if(!mps._gptloaded){
    mps._queue.gptloaded.push( function(){
      mps.cloneAd(selector, adslot, targetingappend, disabledetect, overridetargeting, loadset);
    });
    mps._clonerunning = false;
    return false;
  }
  if (selector && mps._select(selector) && adslot.length > 0 && typeof adslot === 'string' && typeof mps._replicateAd === 'function' && typeof mps._ext === 'object') {
    mps._ext._insertedads[loadset] = mps._ext._insertedads[loadset] || [];
    if (mps._ext._insertedads[loadset].indexOf(adslot) == -1) {
      // skip cloneAd --> call insertAd
    mps._debug('^[mps:preLoader] SKIPPED cloneAd, call insertAd('+ adslot +':'+ loadset +')');
      mps.insertAd(selector, adslot, targetingappend, disabledetect, null, overridetargeting, 0, loadset);
      mps._clonerunning = false;
      return false;
    } else {
      try {
        var cloneObj = mps._replicateAd(adslot, loadset);
        if( typeof cloneObj == 'object'){
          var cloneSizes = [], cloneTargeting = '';
          // Get clone sizes
          var cloneSize = cloneObj.getSizes();
          for (var key in cloneSize) {
            if(cloneSize.hasOwnProperty(key)){
              if(key == 0 && cloneSize[key] == 'fluid'){ cloneSizes = cloneSize[key]; }
              else{
                var oneSize = mps.getValueWithoutKey(cloneSize[key]);
                cloneSizes.push([oneSize[0], oneSize[1]]);
              }
            }
          }
          // Define slot
          var currentCloneVar = mps._clonevars[loadset][adslot];
          if( currentCloneVar && currentCloneVar.length > 0){
            var clonecount = parseInt(currentCloneVar.split('_C')[1], 10),
              clonevar = mps._advars[loadset][adslot] + '_C' + clonecount, // gpt_slot_id
              cloneslot = mps._adslots[loadset][adslot] + '-C' + clonecount, // gpt-div-id
              cloneadslot = adslot + '-C' + clonecount;   // topbanner-C1
            // disable detect display cloneAd using mps.lazyloadclone
            mps.lazyloadclone[loadset] = mps.lazyloadclone[loadset] || [];
            var cloneIndex = mps.lazyloadclone[loadset] ? mps.lazyloadclone[loadset].indexOf(cloneadslot) : -1;
            if(!disabledetect && cloneIndex == -1 && mps._detect && mps._detect.removed && mps._detect.removed[loadset] && mps._detect.removed[loadset].indexOf(adslot) > -1){
              mps.lazyloadclone[loadset].push(cloneadslot);
            }
            if(disabledetect && cloneIndex > -1){
              mps.lazyloadclone[mps._loadset].splice(cloneIndex, 1);
            }

            // Define Slot
            gpt[clonevar]=googletag.defineSlot(cloneObj.getAdUnitPath(),cloneSizes,cloneslot);
            if(mps._resetrsizemap && mps._resetrsizemap[adslot]) {
              gpt[clonevar].defineSizeMapping(mps._resetrsizemap[adslot]);
            } else {
              gpt[clonevar].defineSizeMapping([[[0,0],cloneSizes]]);
            }
            for(var i in cloneObj.getCategoryExclusions()) {
              gpt[clonevar].setCategoryExclusion(cloneObj.getCategoryExclusions()[i]);
            }


            // Add Service
            gpt[clonevar].addService(googletag.pubads());
            mps._gptcmd.push(function(){
              //call insertAd(clone) --> skip getAd
              mps.insertAd(selector, adslot, targetingappend, disabledetect, null, overridetargeting, clonecount, loadset);
              mps._queue.render('adclone',cloneadslot,loadset,clonecount); // render adclone queue
              if(mps.responsiveslots && mps.responsiveslots[loadset] && mps.responsiveslots[loadset][adslot]){
                mps.responsiveslots[loadset][cloneadslot] = mps.responsiveslots[loadset][adslot];
              }
            });

            for(var i in cloneObj.getCategoryExclusions()) {
              gpt[clonevar].setCategoryExclusion(cloneObj.getCategoryExclusions()[i]);
            }

            // Set custom targeting.
            if(!overridetargeting && mpscall.path && typeof mps._resettargeting[mpscall.path] !== 'undefined' && mps._keys(mps._resettargeting[mpscall.path]).length) {
              for (var i in mps.advars) {
                mps._resettargeting[mpscall.path][i] = mps._resetTargetingObj(gpt[mps.advars[i]].getTargetingMap());
              }
              for(var l in mps._resettargeting[mpscall.path][adslot]) {
                for(var m=0; m<mps._resettargeting[mpscall.path][adslot][l].length; m++) {
                  gpt[clonevar].setTargeting(l,mps._resettargeting[mpscall.path][adslot][l][m]);
                }
              }
            } else {
              // Set default targeting.
              var _setTargeting =  mps.prependDefaultTargeting(mps.targetingArray(targetingappend), adslot, overridetargeting);
              for(var t in _setTargeting) {
                gpt[clonevar].setTargeting(t, _setTargeting[t]);
              }
              if(clonecount>0) {
                // clone number to targeting
                gpt[clonevar].setTargeting('clone', clonecount);

                // parent slot to targeting
                gpt[clonevar].setTargeting('slot', adslot);
              }
            }
            // Set Collapse Empty Divs
            if(mps._collapsemap[adslot] === 0){
              // 0 Collapse If Empty
              gpt[clonevar].setCollapseEmptyDiv(false);
            } else if(mps._collapsemap[adslot] === 1){
              // 1 No Collapse
              gpt[clonevar].setCollapseEmptyDiv(true);
            }else if(mps._collapsemap[adslot] === 2){
              // 2 Start Collapsed
              gpt[clonevar].setCollapseEmptyDiv(true, true);
            }

            // Update Clone adobs
            mps.adobs.push(gpt[clonevar]);
            mps._clonerunning = false;
            return true;
          }

        }else{
          if(typeof mps.response.dart.params.adunits == 'object' && mps.response.dart.params.adunits[adslot] && mps.response.dart.params.adunits[adslot].html !== ''){
            mps._debug("^[mps:preLoader] cloneAd("+adslot+") SKIPPED: Disabled "+mps._elapsed());
          }else{
          mps._debug('[mps:preLoader] _replicateAd invalid slot or loadset.');
          }
          mps._clonerunning = false;
          return false;
        }
      } catch(err) {
        mps._errorCallback(err, 'mps.cloneAd');
      }
    }
  }else{
  mps._debug('[mps:preLoader] cloneAd FAILED: Invalid parameters. ');
    mps._clonerunning = false;
    return false;
  }
};

/**
 * Inserts and Ad with optional parameters
 * @params {string} selector
 * @param {string}  adslot
 * @param {string}  targetingappend
 * @param {boolean} disabledetect
 * @param {string}  newpath
 * @param {boolean} overridetargeting
 * @param {number}  clone
 * @param {number}  loadset
 * @param {number}  prevloadset
 */
mps.insertAd = function(selector, adslot, targetingappend, disabledetect, newpath, overridetargeting, clone, loadset, prevloadset){
  if (mps._ext.ad_stack === 'taboola') {
    return mps._taboolaAdFacade.insertAd.apply(this, arguments);
  }
  if(!selector) return false;
  clone = clone || 0;
  prevloadset = (typeof prevloadset != 'undefined') ? mps._bool(prevloadset) : false;
  targetingappend = targetingappend !== null ? targetingappend : '';
  var loadset = (clone > 0 || prevloadset) && (typeof loadset != 'undefined') ? parseInt(loadset,10) : mps._loadset;
  // disable detect display insertAd
  if(disabledetect && mps.lazyload && mps.lazyload[loadset]) {
    var detectIndex = mps.lazyload[loadset].indexOf(adslot);
    if(detectIndex > -1) {
    mps._debug('[mps:preLoader] insertAd disable detected display called on adslot: '+adslot);
      mps.lazyload[loadset].splice(detectIndex, 1);
      mps._detect.removed[loadset] = mps._detect.removed[loadset] || [];
      mps._detect.removed[loadset].push(adslot);
    }
  }
  if(mps._gptloaded == false) {
    var gptQueue = 0;
    if(typeof mps._loadset === 'number' && !isNaN(mps._loadset)) {
      gptQueue = mps._reqset > mps._loadset ? mps._reqset : mps._loadset;
    }
    mps._queue.gptloadset[gptQueue]=mps._queue.gptloadset[gptQueue]||[];
    mps._queue.gptloadset[gptQueue].push(function(){
      mps.insertAd(selector,adslot,targetingappend,disabledetect,newpath,overridetargeting,clone,loadset)
    });
    return true;
  }
  if(targetingappend && targetingappend.length || newpath) {
    mps.targetingAppend(selector,adslot,targetingappend,disabledetect,newpath,overridetargeting,clone,loadset);
    return false;
  }
  if(selector) {
    var selected = mps._select(selector);
	  var selectorName = (selected.id) ? '#'+selected.id : (document.body == selected) ? 'body' : '.'+selected.className;
    if(clone > 0){
      mps._clonevars[loadset]=mps._clonevars[loadset]||{};
      mps._clonevars[loadset][adslot] = mps._clonevars[loadset][adslot] || [];
      var count = (mps._clonevars[loadset][adslot].length > 0 && parseInt(mps._clonevars[loadset][adslot].split('_C')[1],10) > 0) ? parseInt(mps._clonevars[loadset][adslot].split('_C')[1],10) : 1;
      var cloneadslot = adslot+'-C'+ count;
      mps._debug('[mps:preLoader] cloneAd('+selectorName+','+adslot+', C'+count+') '+mps._elapsed());
      var adcode = '<div id="'+mps._adslots[loadset][cloneadslot]+'" class="mps-slot" data-mps-slot="' +cloneadslot+ '" data-mps-loadset="' + loadset + '" data-mps-clone="' + count+ '"><script>mps._execAd("'+ adslot +'",'+ loadset +',' + count +',false);</script></div>';
      mps._ext._insertedads[loadset] = mps._ext._insertedads[loadset] || [];
      mps._ext._insertedads[loadset].push(cloneadslot);
      var _rset = (typeof mps.getResponsiveSet === 'function') ? mps.getResponsiveSet() : 0;
      if(mps.responsiveslots && mps.responsiveslots[loadset] && mps.responsiveslots[loadset][adslot] && mps.responsiveslots[loadset][adslot][_rset] && mps.responsiveslots[loadset][adslot][_rset][0] === "NONE"){
        if(mps.slotsdisabled[loadset] && mps.slotsdisabled[loadset].indexOf(cloneadslot) === -1) {
          mps.slotsdisabled[loadset].push(cloneadslot);
        }
      }
      if(typeof mps._ext == 'object' && typeof mps._reqs == 'object'){
        mps._reqs[loadset] = mps._reqs[loadset] || {};
        mps._reqs[loadset]['begin_'+cloneadslot] = mps._reqs[loadset]['begin_'+cloneadslot] || mps._elapsed('',true);
      }
      if(adcode && (typeof(selector) === 'object' || mps._select(selector))) {
        mps._append(selector,adcode,'mps.insertAd');
        return true;
      } else {
        mps._clonerunning = false;
      }
    }else{
    mps._debug('[mps:preLoader] insertAd('+selectorName+','+adslot+') '+mps._elapsed());
      if(!prevloadset) {
        var adcode = mps.getAd(adslot);
      } else {
        var adcode = mps.getAd(adslot, false, loadset);
        if(mps._validateAdCode(adcode)) {
          adcode = mps._updateAdCode(adcode, adslot, loadset, true, null);
        }
      }
      if(adcode){
        mps._append(selector,adcode,'mps.insertAd');
        return true;
      }
    }
  }
  return false;
};

/**
 * Inserts a single component (sid) the element (selector)
 * @param {object} selector
 * @param {string} sid
 * @return {string} componentdata
 */
mps.insertComponent = function(selector,sid){
  var componentdata='';
  if(typeof(sid)!='undefined' && sid !='' && typeof(mps)=='object' && typeof(mps.response)=='object' && typeof(mps.response.components)=='object' && typeof(mps.response.components[sid])=='object' && typeof(mps.response.components[sid].data)!='undefined') {
  mps._debug('[mps:preLoader] mps.getComponent() LOAD: '+sid);
    if(mps.response.components[sid].data != '' && !(selector)) {
      componentdata = mps.response.components[sid].data;
    } else if (mps.response.components[sid].data != '' && selector){
      componentdata = mps._append(selector,mps.response.components[sid].data, 'mps.getComponent: ' + sid);
    }
  } else {
  mps._debug('[mps:preLoader] mps.getComponent() SKIP: '+sid);
  }
  return componentdata;
};

/**
 * Appends or document.writes the footer html (includes components)
 * @return {boolean}
 */
mps.writeFooter = function() {
  var _loadfooter = mps._bool(mps._ext.loadfooter);
  var _footerdata = mps.response && mps.response.pagevars && typeof(mps.response.pagevars.insert_bodyfooter) === 'string' ? mps.response.pagevars.insert_bodyfooter : '';
  if(!_footerdata.length) {
  mps._debug('[mps:preLoader] mps.writeFooter SKIP: undefined response (async) or empty response.');
    return false;
  }
  if(mps._ext.nowrite !== 1 && _loadfooter === false) {
    mps._ext.loadfooter = 1;
    if(typeof(mps._ext._async) === 'undefined' || mps._bool(mps._ext._async) === false) {
    mps._debug('[mps:preLoader] mps.writeFooter: DOCUMENT.WRITE');
      // Avoid document.write sink; append safely to body
      mps._append('body', _footerdata, 'mps.writeFooter');
    } else {
    mps._debug('[mps:preLoader] mps.writeFooter: ASYNC.');
      mps._append('body', _footerdata, 'mps.writeFooter');
    }
  } else {
    mps._ext.loadfooter = 1;
    var _msg = _loadfooter === true ? 'FOOTER DELAYED OR ALREADY EXECUTED VIA mpsOnReady().' : 'Append NOWRITE=1';
    mps._debug('[mps:preLoader] mps.writeFooter ' + _msg);
    if(!_loadfooter){
      mps._append('body', _footerdata, 'mps.writeFooter');
      return true;
    } else {
      return false;
    }
  }
};

/**
 * Clones mpscall and pagevars object for pagecontext
 * @return loadset {number}
 */
mps._cloneObjects = function() {
  var loadset = (typeof mps._loadset === 'number' && !isNaN(mps._loadset)) ? mps._loadset : 0;
  mps._ext.pagevars = mps._ext.pagevars||{};
  mps._ext.pagevars[loadset]=mps._ext.pagevars[loadset]||{};
  mps._ext.mpscalls = mps._ext.mpscalls||{};
  if(loadset == 0) {
    if(typeof mpscall == 'object') mps._ext.mpscalls[0] = mps._clone(mpscall);
    if(typeof mps.pagevars == 'object') mps._ext.pagevars[0] = mps._clone(mps.pagevars);
  } else if(loadset > 0){
    mps._ext.pagevars[loadset] = mps._clone(mps.pagevars);
    mps._ext.mpscalls[loadset] = mps._clone(mpscall);
  }
  if(mps._ext.mpscalls[loadset].type) {
    mps._ext.pagevars[loadset].type = mps._ext.mpscalls[loadset].type;
  }
  if(mps._ext.mpscalls[loadset].content_id) {
    mps._ext.pagevars[loadset].cid = mps._ext.mpscalls[loadset].content_id;
  }
  return loadset;
};

/**
 * Validates Ad Code
 * @param {string} adcode
 * @return {boolean}
 */
mps._validateAdCode = function(adcode) {
  return typeof(adcode) === 'string' && adcode.indexOf('<!--') === -1;
};

/**
 * Updates Ad HTML code
 * @param {string}  adcode
 * @param {string}  adunit
 * @param {number}  loadset
 * @param {number}  appendloadset
 * @param {number}  mpsid
 * @return {string} _adhtml
 */
mps._updateAdCode = function(adcode, adunit, loadset, appendloadset, mpsid) {
  try {
    var _adunit = adunit.toLowerCase().replace(/\s+/g, ''),
      _classname = (_adunit === '_oop') ? 'mps-slot-oop' : 'mps-slot',
      // Insert fixed size styles into ad containers for single sizes
      _style = (_adunit === '_oop') ? ' style="width:0;height:0;margin:0;padding:0;line-height:0;"' : '';
      _divid = (_adunit === '_oop') ? 'outofpage' : _adunit,
      _loadsetid = loadset > 0 ? '-' + loadset : '',
      _mpsid = typeof(mpsid) === 'number' ? mpsid : mps.pagevars.mpsid,
      _prefix = mps.response.dart.params.ad_div_prefix || 'div-gpt-',
      _adhtml = '<div id="' + _prefix + _divid + '-' + _mpsid + _loadsetid + '" ';
      _adhtml += 'class="' + _classname + '" ';
      _adhtml += 'data-mps-slot="' + _adunit + '" ';
      _adhtml += 'data-mps-loadset="' + loadset + '"' + _style + '>';
      _adhtml += '<script>mps._execAd("' + _adunit + '",'+ loadset + ');</script>';
      _adhtml += '</div>';
    return _adhtml;
  } catch (err) {
    mps._errorCallback(err, 'mps._updateAdCode');
    return false;
  }
};

mps._responseAdunits = function() {
  return typeof(mps.response) === 'object' && typeof(mps.response.dart) === 'object' && typeof(mps.response.dart.params) === 'object' && typeof(mps.response.dart.params.adunits) === 'object';
};

// updateRequest called when new inserts but not new path.
// No new xhr call, unless mpsopts.forcenetcalls=true
mps.updateRequest = function() {
mps._debug('[mps:preLoader] updateRequest');
  var _pagecontextKey = mps._pagecontextKey();
  if(_pagecontextKey === false) {
    return false;
  }
  mps._gptloaded = false;
  mps._gptrefresh = false;
  // Re-execute inserts if original path.
  if(_pagecontextKey === 0) {
    mps.response.pagevars = mps._pagecontext[_pagecontextKey].pagevars;
    mpsCallback(mps.response, true);
  } else {
    mps._loadset++;
  }

  try {
    var _loadset = mps._loadset;
    mps.adobs=[];
    mps.adslots={};
    mps.advars={};
    mps._slotscalled[_loadset]={};
    mps._slotsdisabled[_loadset]={};
    mps.slotsdisabled[_loadset]=[];
    mps.slotsdisabled[_loadset] = mps.slotsdisabled[0];
    var _originalloadset = mps._pagecontext[_pagecontextKey].loadsets[0];
    var _mpsid = mps._pagecontext[_pagecontextKey].mpsid;

    // Update dart response.
    var _adunits = mps._pagecontext[_pagecontextKey].adunits;
    for(var i in _adunits) {
      if(typeof(_adunits[i]) === 'object' && typeof(_adunits[i].adunit_slot_div) === 'string' && typeof(_adunits[i].html) === 'string' && _adunits[i].html.length > 0){
        _adunits[i].html = mps._updateAdCode(_adunits[i].data, i, _loadset, false, _mpsid);
      }
    }
    // Update response.dart.adunits to updated context adunits.
    mps.response.dart.params.adunits = mps._pagecontext[_pagecontextKey].adunits;

    // Copy adslothtml.
    if(mps._responseAdunits()) {
      for(var adunit in mps.response.dart.params.adunits) {
        // .data needed for backward compatibility
        mps.adslothtml[adunit] = mps.response.dart.adunits[adunit].data = mps.response.dart.params.adunits[adunit].html;
      }
    }
    // update lazyload (insert,clone) adslots from loadset 0 map
    if(typeof mps.lazyload !== 'undefined' && mps.lazyload[_originalloadset]) {
      mps.lazyload[mps._loadset] = mps._lazyloadmap;
      mps.lazyloadclone[mps._loadset] = mps._lazyloadmap;
    }

    var buildSlotName = function(slotname) {
      var _slotname = slotname.split('_');
      var _name = '';
      for(var i = 0; i < _slotname.length; i += 1) {
        if(_slotname[i] != _mpsid) {
          _name += _name.length > 1 ? '_' + _slotname[i] : _slotname[i];
        } else {
          break;
        }
      }
      return _name;
    };

    // Define googletag slots, set targeting and enable pubads.
    for(var i in mps._pagecontext[_pagecontextKey].gpt) {
      var _gptTargeting = mps._pagecontext[_pagecontextKey].gpt[i];
      if(_gptTargeting.gptid && _gptTargeting.gptdiv) {
        // Set targeting and define in GPT.
        var gptKey = i;
        var _gptKey = gptKey.split('.');
        var _slotName = buildSlotName(_gptKey[1]);
        _gptKey = _slotName + '_' + _mpsid + '_' + _loadset;
        var _gptDiv = 'div-' + mps._advarprefix + '-' + _slotName + '-' + _mpsid + '-' + _loadset;
        var _slottargeting = mps._pagecontext[_pagecontextKey]['targeting'] && mps._pagecontext[_pagecontextKey]['targeting'][(_slotName === 'outofpage') ? '_oop' : _slotName] ? mps._pagecontext[_pagecontextKey]['targeting'][(_slotName === 'outofpage') ? '_oop' : _slotName] : null;
        mps._defineAdSlot(_mpsid, {
          'name': _slotName,
          'gptid': _gptTargeting.gptid,
          'advars': _gptKey,
          'sizes': _gptTargeting.sizes,
          'responsivemap': _gptTargeting.responsivemap,
          'id': _gptDiv,
          'targeting': _slottargeting,
          'catexclusion': mps._resetcatexclusion[gptKey],
          'collapse': mps._collapsemap[(_slotName === 'outofpage') ? '_oop' : _slotName]
        });

      }
    }
    mps._adslots[mps._loadset] = mps._clone(mps.adslots);
    mps._advars[mps._loadset] = mps._clone(mps.advars);
  } catch(err) {
    mpsopts.forcenetcalls = true;
    mps.makeRequest('more');
    mps._errorCallback(err, 'mps.updateRequest');
    return false;
  }

  mps._gptcmd.push(function() {
    // Callbacks.
    mps._queue.render('mpsinit');
    if(typeof(mps.initCallback) === 'function') {
      try {
        mps.initCallback();
      } catch(err) {
        mps._errorCallback(err, 'mps.initCallback');
      }
    }
    mps._pagecontext[_pagecontextKey].loadsets.push(mps._loadset);
    mps._gptloadCallback();
  });
};

// COMPARE: (A) mps._ext.mpscalls[mps._keys(mps._ext.mpscalls).length-1] (B) mpscall
// PARAMS: site, path, cat, type, content_id, cag[*], field[*]
mps._pagecontextKey = function() {
  // Return true if any differences, else return false.
  var params = ['site', 'path', 'cat', 'type', 'content_id'],
    wildparams = /(field|cag)+\[([a-z0-9-_\.]*?)\]/i,
    contextKey = false;

  for(var i in mps._pagecontext) {
    contextKey = parseInt(i, 10);
    for(var j in mpscall){
      if(params.indexOf(j) > -1 || wildparams.test(j)){
        // Field and cag - check key and value.
        if(wildparams.test(j)) {
          if((mps._keys(mpscall).indexOf(j) == -1 || (mpscall[j] !== mps._pagecontext[i].mpscall[j]) && mps._haskeyval && !mps._haskeyval(mpscall,j,mps._pagecontext[i].mpscall[j]))) {
            contextKey = false;
          }
          // Check values and key exists.
        } else if((mps._haskeyval && !mps._haskeyval(mpscall,j,mps._pagecontext[i].mpscall[j])) || typeof(mps._pagecontext[i].mpscall[j]) === 'undefined'){
          contextKey = false;
        }
      }
    }
    if(typeof contextKey === 'number') {
      return contextKey;
    }
  }
  return false;
};

/**
 * Validates page context path
 * @param {string} path
 * @param {boolean}
 */
mps._pagecontextKeyPath = function(path) {
  for(var i in mps._pagecontext) {
    if(mps._pagecontext[i].mpscall.path === path) {
      return i;
    }
  }
  return false;
};

mps._matchprevRequest = function() {
  if(mpsopts.forcenetcalls || typeof(mps._loadset)=='undefined') return false;
  return mps._pagecontextKey();
};

/**
 * mps._xhr invokes mpsCallback with JSON or false
 * @param requesturl {string)
 * @return mps.response {string|JSON)
 * @private
 */
mps._xhr = function() {
  var mpsxhr = new XMLHttpRequest();
  mpsxhr.open('GET', mps._protocol()+ '//' +mps.requesturl, true);
  mpsxhr.onload = function(data) {
    if (mpsxhr.status === 200 && data.currentTarget) {
      mps.response = JSON.parse(data.currentTarget.response);
      // MPS Callback.
      mpsCallback(mps.response);
      mps.compareRequestReturn(mpscall_original);

      // Only Lazy loaded ads
      var params = mps.response.dart.params;
      if (typeof mps._detect === 'object' && params.lazy_load_slots && params.lazy_load_slots.length) {
        mps.lazyload = mps.lazyload || {};
        mps.lazyload[mps._loadset || 0] = mps.lazyload[mps._loadset || 0] || params.lazy_load_slots;
      }

      // Define adslots with gpt, once gpt.js is loaded.
      var _mpssyncdelay = mps._ext.dart_mode === 'gpt-asynchronous' ? 0 : 500;

      mps._gptcmd.push(function () {
        setTimeout(function () {
          mps._execgptinit();
        }, _mpssyncdelay);
      });
      mps._gptcmd.push(function () {
        setTimeout(function () {
          mps._execgpt();
        }, _mpssyncdelay);
      });
    } else {
      mps.response = false;
      mpsCallback(mps.response);
    }
  };

  mpsxhr.send();
  return mps.response;

};

mps.compareRequestReturn = function(original) {
  mps.compare = {};
  mps.compare.mpscall = {};
  mps.compare.mpscall.dif = {};
  mps.compare.mpscall.original = original;
  mps.compare.mpscall.final = mpscall;
  for( var v in mpscall ){
    if ( typeof(original[v]) !== 'string')
    {
      mps.compare.mpscall.dif[v] =  '[' + mpscall[v] + '] : was not in original mpscall ';
    }
  };
  for( var v in original ){
    if ( typeof(mpscall[v]) !== 'string')
    {
      mps.compare.mpscall.dif[v] = 'was [' + original[v] + '] then removed.';
    } else if ( original[v] !== mpscall[v] ) {
      mps.compare.mpscall.dif[v] = '[' + original[v] + '] --> [' + mpscall[v] + ']';
    }
  };
};

/**
 * Makes a new xhr request and increase loadset
 * @param {string} loadmode
 * @param {boolean} retry
 */
mps.makeRequest = function(loadmode, retry) {
  try {
    if (!retry && loadmode === 'more') {
      if (mps._reqset > mps._loadset || !mps._gptloaded) {
        mps._reqset++;
        mps._queue.mpsloaded.push(function () {
          mps.makeRequest('more', true)
        });

        return false;
      }
      mps._adslots[mps._reqset] = mps.adslots;
      mps._reqset++;
    }
    mps._ext._insertedads = mps._ext._insertedads || {};
    mps._ext.loaded = 0;
    mps._ext.loadhead = 0;
    mps._ext.loadheader = 0;
    mps._ext.loadfooter = 0;
    mps._gptloaded = false;
    loadmode = (typeof(loadmode) === 'string' && loadmode.length > 0) ? loadmode : '';
    mpscall['LOADMODE'] = loadmode;
    if (typeof(mps.requesturl) !== 'string' || mps.requesturl === '') {
      return false;
    }
    if (typeof(loadmode) === 'string' && loadmode.length > 0) {
      if (loadmode === 'more') {
        mpscall['ASYNC'] = 1;
        mpscall['_'] = mps._loadset + 1;
        mps._ext._async = true;
      }
      // If page exists in mps._pagecontext, refresh objects without a new request.
      if (typeof(mps._matchprevRequest()) === 'number') {
        mps.updateRequest();
        return false;
      }
    }
    delete(mps.response);
    mps.requesturl = mps._ext.mpsRequestUrl(loadmode);
    var gptQueue = typeof mps._loadset === 'number' && !isNaN(mps._loadset) ? mps._loadset + 1 : 0;
    mps._ext._set++;
    mps._reqs[gptQueue] = {};
    // Load response
    if (!mps._ext.loaded) {
      mps._xhr();
    }
    // Load GPT
    if (!googletag.apiReady) {
      mps.loadGPT();
    }
  } catch(err) {
    mps._errorCallback(err, 'mps.makeRequest');
    return false;
  }
};

// BUILD MPS REQUEST VARS
mps._ext._p.defined = mps._ext.mpsRequestParams(mpscall);
mps._ext._p.defined.path = typeof(mps._ext._p.defined.path)!='undefined' ? mps._ext._p.defined.path : '~';
mps._ext._p.derived = mps._ext.mpsDeriveParams();
mpscall = mps._merge(mps._ext._p.derived,mps._ext._p.defined);
mps._ext.mpscalls = mps._ext.mpscalls||{};
mps._ext.mpscalls[0] = mps._clone(mpscall);
mps._debug('[mps:preLoader] (merge params)'+JSON.stringify(mps._ext._p));

// VARIABLES FOR INCLUDE
if(typeof(mpscall.cat)=='string') {
  mpscall.cat = mps._trim(mpscall.cat,'| ');
  var cats = mpscall.cat.split('|'), lastcat = cats[cats.length-1];
} else {
  var cats = [], lastcat = undefined;
}




//--> INCLUDE CODE [nbcnews-bento]
mps.bento=mps.bento||{};

//====[preprocess core]=====================================
mps._pp=mps._pp||{};
mps._pp.host = window.location.host;
mps._pp.hostsegs = mps._pp.host.split('.');
mps._pp.subdoms = mps._clone(mps._pp.hostsegs);
mps._pp.topdom = mps._pp.subdoms.pop();
mps._pp.topdom = mps._pp.subdoms.pop()+'.'+mps._pp.topdom;
mpscall.path = '/'+mps._trim(mpscall.path,' /');
mps._pp.pathsegs = mps._trim(window.location.pathname,'/').split('/');
if(mps._pp.pathsegs[0]=='index.php') mps._pp.pathsegs.shift();
mps._pp.pathsegsold = mps._trim(mpscall.path,'/').split('/');
if(!mpscall.cat && !mps._pp.pathsegs[0]) mpscall.cat = 'home';
mps._pp.catsegs = mpscall.cat ? mpscall.cat.split('|') : [];

//--[2017-11-10] Set cag[adunit1] to cag[adunit6]
mps._pp.aua = mpscall.adunit.split('/');
for(var $auc=1; $auc<6; ++$auc) {
  mpscall['cag[adunit'+$auc+']'] = ($auc >= mps._pp.aua.length ? '' : mps._pp.aua[$auc]);
}

/*[AUTO-SET IF EMPTY]*/
if(typeof(mpscall.type)=='undefined') mpscall.type = 'page';
if(typeof(mpscall.title)=='undefined' && typeof(document.title)=='string' && document.title.length > 0) mpscall.title = mps._trim(document.title.replace(/[^-a-z0-9\s\[\]._():]/ig,'')).substring(0,250);

//====[/preprocess core]====================================

mpscall.ismobile = window.screen.width < 758 ? 'true': 'false';
console.warn('[mps:hb:config] window.screen.width = ' + window.screen.width);

// set isapp
mps.app = mps.app || { isApp: false, name: null, os: null };
try {
  mps.app.isApp = mps._bool(mps._get('chromeless'));
  mpscall['cag[isapp]'] = mps.app.isApp ? 'true' : 'false';
  if (mps.app.isApp) {
    var adunit = mpscall.adunit || '';
    var ua = navigator.userAgent || '';
    if (/\/today(?:\/|$)/i.test(adunit)) mps.app.name = 'today';
    else if (/\/nbcnews(?:\/|$)/i.test(adunit)) mps.app.name = 'nbcnews';
    if (/android/i.test(ua)) mps.app.os = 'android';
    else if (/iphone|ipad|ipod/i.test(ua)) mps.app.os = 'ios';
  }
} catch (e) {}


/* js/taboola/taboola-preconnect.js */
/**
 * Warm the connection and speculatively download modules without executing them.
 */
(function () {
  'use strict';

  if (mps._ext.ad_stack !== 'taboola' || mps._preconnectTaboola) { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var connected = false;
  var preloads = Object.create(null);

  mps._taboolaModuleUrl = function (siteCode) {
    return 'https://scripts.opti-digital.com/modules/?site=' + encodeURIComponent(siteCode);
  };

  mps._preconnectTaboola = function () {
    if (connected) { return; }
    var connection = document.createElement('link');
    connection.rel = 'preconnect';
    connection.href = 'https://scripts.opti-digital.com';
    connection.crossOrigin = 'anonymous';
    head.appendChild(connection);
    connected = true;
    mps._debug('[mps:taboola:preconnect] connection hint inserted');
  };

  mps._preloadTaboola = function (siteCode) {
    if (mpsopts.taboola_preload === false || mpsopts.taboola_preload === 0
      || typeof siteCode !== 'string' || !siteCode) { return; }
    var link = document.createElement('link');
    if (!link.relList || typeof link.relList.supports !== 'function'
      || !link.relList.supports('modulepreload')) { return; }
    var url = mps._taboolaModuleUrl(siteCode);
    if (preloads[url]) { return; }
    preloads[url] = { status: 'loading' };
    link.rel = 'modulepreload';
    link.href = url;
    link.crossOrigin = 'anonymous';
    link.onload = function () { preloads[url].status = 'loaded'; };
    link.onerror = function () {
      preloads[url].status = 'failed';
      mps._debug('^[mps:taboola:preload] failed; browser may retain this module failure', url);
      mps._loadError(url);
    };
    head.appendChild(link);
    mps._debug('[mps:taboola:preload] module download started', url);
  };
  mps.taboola = mps.taboola || {};
  mps.taboola.preloads = preloads;

  if (!mps._bool(mpsopts.skipautorequest) && mps._ext.nowrite !== 1) {
    mps._preconnectTaboola();
    mps._preloadTaboola(typeof mps._resolveTaboolaSiteCode === 'function'
      ? mps._resolveTaboolaSiteCode(mps._ext.taboola_site_code) : mps._ext.taboola_site_code);
  }
})();



/* js/core/post-include-autoloader.js */

mps._debug('[mps:postLoader] (mpsopts) '+JSON.stringify(mpsopts));

//(cat) resplit cat string
mps._ext._cats = (typeof(mpscall.cat)=='string') ? mpscall.cat.split('|') : [];
lastcat = mps._ext._cats[mps._ext._cats.length-1];
//(cat) set depth limit on cat level
mpsopts.maxcats = (typeof(mpsopts.maxcats)=='string') ? parseInt(mpsopts.maxcats) : mpsopts.maxcats||0;
if(mpsopts.maxcats > 0  && mps._ext._cats.length > mpsopts.maxcats) {
  mps._ext._catscut = mps._ext._cats.splice(mpsopts.maxcats+1);
}
//(cat) remove last level if filename or numeric
if(typeof lastcat === 'string' && (!isNaN(lastcat) || lastcat.lastIndexOf('.')>0 || lastcat.indexOf('index')===0)) {
  mps._ext._cats.splice(mps._ext._cats.length-1,mps._ext._cats.length);
}
//(cat) attach prefix
mpsopts.catprefix = mps._trim(mpsopts.catprefix,'| ');
if(mpsopts.catprefix != '') {
  mps._ext._cats = mps._merge(mpsopts.catprefix.split('|'),mps._ext._cats);
}
//(cat) join and override existing value
mpscall.cat = mps._ext._cats.join('|');

mps._debug('[mps:postLoader] (mpscall) '+JSON.stringify(mpscall));
if(parseInt(debugmode.log) == 2) mpscall.CACHESKIP=1;

//--> CREATE URL AND REQUEST,
mps.requesturl = mps._ext.mpsRequestUrl();

//--> BACKWARDS COMPATIBILITY
mpsGetAd=mps.getAd; mpsrequesturl=mps.requesturl; mps.writeHeader=function(){};

/* ----- GPT Main ----- */
/* GPT Main - async mode only */
var _mpshead = document.getElementsByTagName('head')[0];
mps._adLoadCallbackObj = [];

// Append MPS styles.
var _mpsstyles = document.createElement('style');
_mpsstyles.style.type = 'text/css';
_mpsstyles.cssText = '.mps-gpt-hidden { display: none; }';
_mpshead.appendChild(_mpsstyles);

// http request to get json.
mps._gptloaded = false;
mps._adloads=mps._adloads||{};       // global adloads object
mps._correlator=mps._correlator||{}; // global correlator array
mps._adobs=mps._adobs||{};
mps._adslots=mps._adslots||{};
mps._advars=mps._advars||{};
mps._slotscalled=mps._slotscalled||{};
mps._slotscalled[mps._loadset || 0]={};
mps._slotsdisabled=mps._slotsdisabled||{};
mps._slotsdisabled[mps._loadset || 0]={};
mps._rsizemap={};
mps._resetrsizemap = mps._resetrsizemap || {};
mps.slotsdisabled = mps.slotsdisabled||{};
mps.slotsdisabled[mps._loadset || 0]=[];
mps._gptTargeting = mps._gptTargeting || {};
mps._resetcatexclusion = mps._resetcatexclusion || {};
mps._resettargeting = mps._resettargeting || {};
if(typeof mpscall != 'undefined' && typeof(mpscall.path)!='undefined'){
  mps._resettargeting[mpscall.path] = {};
}
mps.adslots={}; mps.advars={}; mps._advarprefix = 'gpt'||{}; mps.responsiveslots=mps.responsiveslots||{}; mps.responsiveslots[mps._loadset || 0]={};


//--> CREATE URL AND REQUEST
(function() {
  if (mpsinstance != '') {
    if (!mps._bool(mpsopts.skipautorequest) && mps._ext.nowrite != 1) {
      if (mps._ext.nowrite === 2) {
        // Standard: async MPS Request
        mps._xhr();
        mps._debug('[mps:postLoader] REQUEST ASYNC:' + mps._protocol() + '//' + mps.requesturl + ' ' + mps._elapsed());
      }
      else {
        // Legacy: document.write MPS Request
        document.write('<scr' + 'ipt id="mps-request-' + mps._loadset + '" src="' + mps._protocol() + '//' + mps.requesturl + '"></scr' + 'ipt>');

        // Legacy: document.write _execgpt, and _execgptinit
        document.write('<scr' + 'ipt id="mps-exec-gpt-init">mps._gptcmd.push(function(){mps._execgptinit();});</scr' + 'ipt>');
        document.write('<scr' + 'ipt id="mps-exec-gpt">mps._gptcmd.push(function(){mps._execgpt();});</scr' + 'ipt>');

        mps._debug('[mps:postLoader] REQUEST DOCUMENT.WRITE: ' + mps._protocol() + '//' + mps.requesturl);
      }
      mps._ext._set += 1;
      mps._reqs[mps._ext._set] = {'mpsready': mps._elapsed('', true)};
    } else if (mps._bool(mpsopts.skipautorequest) || parseInt(mps._ext.nowrite) === 1) {
      var _skipautoreq = mpsopts.skipautorequest ? 'mpsopts.skipautorequest=' + mpsopts.skipautorequest : 'nowrite=' + mps._ext.nowrite;
      mps._debug('^[mps:postLoader] Skipped MPS Request: ' + _skipautoreq);
    } else {
      mps.makeRequest();
    }
  }
  delete(mps.qs);
})();



/* js/core/targeting-diagnostic.js */

/**
 * targeting-diagnostic.js — Targeting origin breakdown
 *
 * Outputs a categorised object to the console showing where each
 * targeting key-value originated.  Works in all ad modes (gpt, mixed,
 * taboola).  Gated behind debug level ≥ 1.
 *
 * Debug prefix: [mps:targeting]
 */
(function () {
  'use strict';

  var PREFIX = '[mps:targeting]';

  mps._queue.mpsready = mps._queue.mpsready || [];
  mps._queue.mpsready.push(function () {

    // Only run in debug mode
    if (!debugmode || !debugmode.log || parseInt(debugmode.log, 10) < 1) {
      return;
    }

    var params = mps.response && mps.response.dart && mps.response.dart.params;
    if (!params) {
      mps._debug(PREFIX + ' SKIPPED — no dart params in response');
      return;
    }

    var diagnostic = {};

    // ── 1. mpscall (what the site sent in the request) ──────────────
    diagnostic.mpscall = Object.create(null);
    var defined = mps._ext && mps._ext._p && mps._ext._p.defined;
    if (defined) {
      Object.keys(defined).forEach(function (key) { diagnostic.mpscall[key] = defined[key]; });
    }

    // ── 2. derived (client-computed from URL path: cat1-cat6) ───────
    diagnostic.derived = Object.create(null);
    var derivedSrc = mps._ext && mps._ext._p && mps._ext._p.derived;
    if (derivedSrc) {
      Object.keys(derivedSrc).forEach(function (key) { diagnostic.derived[key] = derivedSrc[key]; });
    }

    // ── 3. cags (content affinity groups from the request) ──────────
    diagnostic.cags = {};
    var src = diagnostic.mpscall;
    // src is null-prototype (built via Object.keys above), so every
    // enumerable key is already its own property — no hasOwnProperty call needed.
    for (var key in src) {
      if (/^cag\[/.test(key)) {
        var cagName = key.replace(/^cag\[([^\]]+)\]$/i, '$1');
        diagnostic.cags[cagName] = src[key];
      }
    }

    // ── 4. page_targeting (server-computed common targeting) ────────
    diagnostic.page_targeting = {};
    if (params.page_targeting_array) {
      var pta = params.page_targeting_array;
      for (var i = 0; i < pta.length; i++) {
        var eq = pta[i].indexOf('=');
        if (eq > 0) {
          var k = pta[i].substring(0, eq);
          var v = pta[i].substring(eq + 1);
          if (!diagnostic.page_targeting[k]) { diagnostic.page_targeting[k] = []; }
          diagnostic.page_targeting[k].push(v);
        }
      }
    }

    // ── 5. unit_targeting (per-unit residual targeting) ─────────────
    diagnostic.unit_targeting = {};
    if (params.adunits) {
      for (var slot in params.adunits) {
        if (params.adunits.hasOwnProperty(slot) && params.adunits[slot].unit_targeting) {
          diagnostic.unit_targeting[slot] = params.adunits[slot].unit_targeting;
        }
      }
    }

    // ── 6. pixelman (injected by __nbcudigitaladops_inject) ────────
    if (typeof __nbcudigitaladops_inject === 'object' && __nbcudigitaladops_inject.getGPT) {
      diagnostic.pixelman = __nbcudigitaladops_inject.getGPT();
    } else {
      diagnostic.pixelman = null;
    }

    // ── 7. ad mode context ─────────────────────────────────────────
    // ad_stack comes from the loader (fetch.php → mps._ext);
    // ad_provider comes from the page request (Requestbuilder → mps.pagevars).
    // Do not fall back to 'gpt' — a missing value is more useful than a fake one.
    diagnostic.mode = {
      ad_stack: {
        value: (mps._ext && mps._ext.ad_stack) || null,
        source: 'mps._ext (loader / fetch.php)'
      },
      ad_provider: {
        value: (mps.pagevars && mps.pagevars.ad_provider) || null,
        source: 'mps.pagevars (page request / Requestbuilder)'
      }
    };

    // ── Output ─────────────────────────────────────────────────────
    mps._debug(PREFIX + ' Targeting origin breakdown:');
    console.groupCollapsed(PREFIX + ' targeting origins');
    console.log('mode:', diagnostic.mode);
    console.log('mpscall:', diagnostic.mpscall);
    console.log('derived:', diagnostic.derived);
    console.log('cags:', diagnostic.cags);
    console.log('page_targeting:', diagnostic.page_targeting);
    console.log('unit_targeting:', diagnostic.unit_targeting);
    console.log('pixelman:', diagnostic.pixelman);
    console.groupEnd();

    // Expose on mps for programmatic access
    mps._targetingDiagnostic = diagnostic;
  });
})();




/* js/core/debug-badge-loader.js */

/**
 * Pure-Taboola debug commands load the full UI on demand and return a Promise.
 */
(function () {
  'use strict';

  if (mps._debugBadgeLoader) { return; }
  var state = mps._debugBadgeLoader = { status: 'idle', promise: null };

  function load() {
    if (state.promise) { return state.promise; }
    state.status = 'loading';
    state.promise = new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.async = true;
      script.src = mps._protocol() + '//' + mps._backendhost + '/js/core/debug-badge.js';
      function fail(error) {
        state.status = 'failed';
        state.promise = null;
        if (typeof mps.debug_badge !== 'function') { mps.debug_badge = command; }
        script.remove();
        mps._errorCallback(error, 'mps.debug_badge.load');
        reject(error);
      }
      script.onerror = function () { fail(new Error('Failed to load ' + script.src)); };
      script.onload = function () {
        if (typeof mps.debug_badge !== 'function' || mps.debug_badge === command) {
          fail(new Error('Debug badge script did not install its command'));
          return;
        }
        state.status = 'loaded';
        resolve(mps.debug_badge);
      };
      (document.head || document.documentElement).appendChild(script);
    });
    return state.promise;
  }

  function command(action) {
    return load().then(function (run) { return run(action); });
  }
  mps.debug_badge = command;

  if (mps._isdebug()) {
    mps._queue.mpsready.push(function () {
      setTimeout(function () {
        // load() reports failure; consume the automatic load's rejection.
        load().catch(function () {});
      }, 0);
    });
  }
})();




/* js/taboola/taboola-gate.js */

mps.execute_taboola_gate_js = function() {
  /**
   * taboola-gate.js — Defense-in-depth: prevent GPT execution on Taboola pages.
   *
   * Primary isolation is server-side (Requestbuilder.php + fetch.php).
   * This gate provides an additional client-side safety net by wrapping GPT
   * entry points so they no-op when ad_provider === 'taboola'.
   *
   * Load order (deferred in fetch.php):
   *   mpstools → [mixed-only loadGPT intercept] → [gpt-shared if mixed]
   *     → pre-include → **taboola-gate** → post-include
   *
   * In `taboola` stack:  gpt-shared is absent — originals are null, gate installs no-ops.
   * In `mixed` stack:    gpt-shared is present — gate wraps real functions; they pass
   *                      through on GPT pages and short-circuit on Taboola pages.
   *                      gpt-shared's auto-call of loadGPT() is suppressed in the
   *                      loader (fetch.php); Requestbuilder calls loadGPT() explicitly
   *                      after this gate installs its wrap.
   */
  (function () {
    'use strict';
  
    // ── Install-once guard ──────────────────────────────────────────────────
    // Requestbuilder.php has no LOADMODE != 'more' guard on this script (unlike
    // every sibling GPT deferred script), so it can be re-included on "load
    // more" replays. Without this guard, each replay would re-wrap the
    // *previous* wrapper around loadGPT/_execgptinit/_execgpt/_execAd, growing
    // the closure chain by one layer per replay for the life of the page.
    mps.taboola = mps.taboola || {};
    if (mps.taboola._gateInstalled) {
      mps._debug('[mps:taboola:gate] SKIPPED — already installed');
      return;
    }
    mps.taboola._gateInstalled = true;
  
    /**
     * Lazy check — reads mps.pagevars.ad_provider (injected by insert_head).
     * Do not read mps.response.pagevars — that bag is inserts/package only
     * and never contains ad_provider.
     *
     * Timing: _execgpt / _execgptinit / _execAd run after insert_head, so this
     * check is valid for those wraps. loadGPT() is a pre-existing race:
     * gpt-shared.js invokes it at parse time, before XHR / insert_head, when
     * mps.pagevars does not exist yet. On mixed stacks fetch.php defers
     * gpt-shared until after insert_head so this wrap can see ad_provider.
     */
    function isTaboolaPage() {
      return mps.pagevars &&
             mps.pagevars.ad_provider === 'taboola';
    }
  
    // ── Wrap loadGPT ────────────────────────────────────────────────────────────
    // On mixed stacks, gpt-shared.js's IIFE auto-call of loadGPT() is suppressed
    // in the loader (fetch.php) so this wrap installs first.  Requestbuilder then
    // calls mps.loadGPT() explicitly after this gate, letting isTaboolaPage()
    // block it on taboola pages and pass through on GPT pages.
    // On taboola stacks, gpt-shared.js is omitted entirely.
    var _origLoadGPT = typeof mps.loadGPT === 'function' ? mps.loadGPT : null;
    mps.loadGPT = function () {
      if (isTaboolaPage()) {
        mps._debug('[mps:taboola:gate] loadGPT BLOCKED (taboola page)');
        return false;
      }
      return _origLoadGPT ? _origLoadGPT.apply(this, arguments) : false;
    };
  
    // ── Wrap _execgptinit ───────────────────────────────────────────────────────
    var _origExecGptInit = typeof mps._execgptinit === 'function' ? mps._execgptinit : null;
    mps._execgptinit = function () {
      if (isTaboolaPage()) {
        mps._debug('[mps:taboola:gate] _execgptinit BLOCKED (taboola page)');
        return;
      }
      return _origExecGptInit ? _origExecGptInit.apply(this, arguments) : undefined;
    };
  
    // ── Wrap _execgpt ───────────────────────────────────────────────────────────
    // _execgpt is the critical function: it defines GPT slots and fires
    // _gptloadCallback, which flushes gptloaded / mpsready queues.
    // When blocking, we must replicate the queue-flushing side effects so
    // downstream site code (mps._queue.mpsready, gptloaded items) still runs.
    // NOTE: this flush branch is unreachable on real Taboola traffic, by design.
    // Requestbuilder.php never emits mps._execgpt() when is_taboola (GPT
    // template rendering is skipped entirely), and pure-Taboola sites never
    // configure header bidding or call mps.loadGPT() — GPT, if loaded at all,
    // is loaded by Taboola's own script, outside MPS control. Kept only as a
    // defensive replica in case _execgpt is ever reachable in the future.
    var _origExecGpt = typeof mps._execgpt === 'function' ? mps._execgpt : null;
    mps._execgpt = function () {
      if (isTaboolaPage()) {
        mps._debug('[mps:taboola:gate] _execgpt BLOCKED (taboola page) — flushing queues');
  
        var _loadset = mps._loadset || 0;
  
        // Replicate the queue-flushing parts of _gptloadCallback without
        // touching googletag or defining any GPT slots.
        mps._gptloaded = true;
        mps._gptrefresh = true;
        mps._adslots = mps._adslots || {};
        mps._adslots[_loadset] = mps.adslots || {};
        mps._advars = mps._advars || {};
        mps._advars[_loadset] = mps.advars || {};
  
        // Drain gptloadset queue for this loadset.
        if (mps._queue.gptloadset && mps._queue.gptloadset[_loadset]) {
          while (mps._queue.gptloadset[_loadset].length) {
            try {
              mps._queue.gptloadset[_loadset].shift().call();
            } catch (err) {
              mps._errorCallback(err, 'taboola-gate:gptloadset');
            }
          }
        }
  
        // Fire user-defined gptloadCallback if present.
        if (typeof mps.gptloadCallback === 'function') {
          try {
            mps.gptloadCallback();
          } catch (err) {
            mps._errorCallback(err, 'taboola-gate:gptloadCallback');
          }
        }
  
        // Drain mpsloaded queue.
        if (mps._queue.mpsloaded && mps._queue.mpsloaded.length) {
          try {
            mps._queue.mpsloaded.shift().call();
          } catch (err) {
            mps._errorCallback(err, 'taboola-gate:mpsloaded');
          }
        }
  
        // Flush mpsready and gptloaded queues.
        mps._queue.render('mpsready');
        mps._queue.render('gptloaded', _loadset);
        return;
      }
      return _origExecGpt ? _origExecGpt.apply(this, arguments) : undefined;
    };
  
    // ── Wrap _execAd ────────────────────────────────────────────────────────────
    var _origExecAd = typeof mps._execAd === 'function' ? mps._execAd : null;
    mps._execAd = function () {
      if (isTaboolaPage()) {
        mps._debug('[mps:taboola:gate] _execAd BLOCKED (taboola page)');
        return;
      }
      return _origExecAd ? _origExecAd.apply(this, arguments) : undefined;
    };
  
    mps._debug('[mps:taboola:gate] GPT entry points wrapped');
  })();
  
}



/* js/taboola/taboola-dv.js */

mps.execute_taboola_dv_js = function() {
  /**
   * taboola-dv.js — Standalone DV Publisher Tag loader
   *
   * Load-only DoubleVerify script for Taboola pages.
   * Runs on mps._queue.mpsready.
   *
   * Debug prefix: [mps:taboola:dv]
   */
  (function () {
    'use strict';
  
    function isTaboolaPage() {
      return mps.pagevars && mps.pagevars.ad_provider === 'taboola';
    }
  
    var PREFIX = '[mps:taboola:dv]';
  
    mps._queue.mpsready = mps._queue.mpsready || [];
    mps._queue.mpsready.push(function () {
      if (!isTaboolaPage()) {
        mps._debug(PREFIX + ' SKIPPED — not a Taboola page');
        return;
      }
  
      var taboolaResp = mps.response && mps.response.taboola;
      var dvConfig = taboolaResp && taboolaResp.dv;
      var dvEnabled = !!(dvConfig && dvConfig.enabled);
  
      // Always define window.onDvtagReady so Taboola/Optidigital's wrapped ad
      // calls are safe to fire unconditionally, regardless of MPS's DV toggle.
      // Disabled branch stays async (setTimeout) to match the enabled branch's
      // inherently async contract.
      var adTimeoutMs = (dvConfig && parseInt(dvConfig.ad_timeout_ms, 10)) || 750;
      window.onDvtagReady = function (callback, timeout) {
        if (!dvEnabled) {
          setTimeout(callback, 0);
          return;
        }
        timeout = timeout || adTimeoutMs;
        window.dvtag = window.dvtag || {};
        dvtag.cmd = dvtag.cmd || [];
        var opt = { callback: callback, timeout: timeout, timestamp: new Date().getTime() };
        dvtag.cmd.push(function () { dvtag.queueAdRequest(opt); });
        setTimeout(function () {
          var cb = opt.callback;
          opt.callback = null;
          if (cb) cb();
        }, timeout);
      };
  
      if (!dvEnabled) {
        mps._debug(PREFIX + ' SKIPPED — DV not enabled in Taboola Config');
        return;
      }
  
      if (!dvConfig.id && !dvConfig.url) {
        mps._debug('^' + PREFIX + ' ERROR — DV enabled but no ID or URL provided');
        return;
      }
  
      // Guard against repeated installs: this file's <script> tag is injected via
      // response_head_append on the 'params' subset (Requestbuilder.php), and
      // mps._queue.mpsready.push() runs its argument immediately once
      // mps._ext.mpsready is already true (see mpstools.js). Any replay of
      // insert_head (mps.updateRequest() / mps.makeRequest('more')) that
      // re-includes this script would otherwise reload the DV tag and reset
      // _dvready on every replay.
      mps.taboola = mps.taboola || {};
      if (mps.taboola._dvInstalled) {
        mps._debug(PREFIX + ' SKIPPED — already installed');
        return;
      }
      mps.taboola._dvInstalled = true;
  
      var timeoutMs = parseInt(dvConfig.timeout_ms, 10) || 750;
      var dvUrl = dvConfig.url || 'https://pub.doubleverify.com/dvtag/' + dvConfig.id + '/pub.js';
  
      mps._reqs = mps._reqs || {};
      mps._reqs.taboola = mps._reqs.taboola || {};
      mps._reqs.taboola.dv_begin = mps._elapsed('', true);
      mps.taboola._dvready = false;
  
      mps._debug(PREFIX + ' loading ' + dvUrl + ' (timeout ' + timeoutMs + 'ms)');
  
      // Built inline (rather than via mps._loadJS) so onerror can run our own
      // failure handling — _loadJS's 3rd param is `noasync`, not an error
      // callback, and its onerror is hardcoded to mps._loadError only.
      var dvScript = document.createElement('script');
      dvScript.async = true;
      dvScript.type = 'text/javascript';
      dvScript.src = mps._protocol() + '//' + dvUrl.replace(/^https?:\/\//, '');
      dvScript.onload = function () {
        clearTimeout(mps.taboola.dvtimer);
        mps._reqs.taboola.dv_end = mps._elapsed('', true);
        mps._debug(PREFIX + ' js tag load SUCCESS [' + (mps._reqs.taboola.dv_end - mps._reqs.taboola.dv_begin) + 'ms]');
        mps.taboola._dvready = true;
      };
      dvScript.onerror = function () {
        clearTimeout(mps.taboola.dvtimer);
        mps._loadError(dvScript.src);
        mps._reqs.taboola.dv_end = mps._elapsed('', true);
        mps._debug('^' + PREFIX + ' js tag load FAILED [' + (mps._reqs.taboola.dv_end - mps._reqs.taboola.dv_begin) + 'ms]');
        mps.taboola._dvready = true;
      };
      document.getElementsByTagName('head')[0].appendChild(dvScript);
  
      mps.taboola.dvtimer = setTimeout(function () {
        if (!mps.taboola._dvready) {
          mps._reqs.taboola.dv_end = mps._elapsed('', true);
          mps._debug('!' + PREFIX + ' load TIMEOUT [' + (mps._reqs.taboola.dv_end - mps._reqs.taboola.dv_begin) + 'ms]');
          mps.taboola._dvready = true;
        }
      }, timeoutMs);
  
    });
  })();
  
}



/* js/taboola/taboola-admantx.js */

mps.execute_taboola_admantx_js = function() {
  /**
   * taboola-admantx.js — Admantx contextual request for Taboola pages
   *
   * Requests the page's categories ("admants") from Admantx and records the
   * result on mps.taboola._admantx. Fail-open: a timeout, error or unusable
   * response settles with no values; nothing here ever blocks ads by itself.
   * Runs on mps._queue.mpsready. Settings come from mps.response.taboola.admantx.
   *
   * State (mps.taboola._admantx): { status, values }
   *   status: 'pending' | 'done' | 'othererror' | 'empty' | 'failed' | 'timeout'
   *   values: array of admants ('othererror' status uses ['othererror'])
   *   rawStatus: the status string Admantx returned (e.g. 'OK', 'KO'), when a response arrived
   * mps.taboola._admantxWhenSettled(fn) runs fn once settled (immediately if
   * already settled).
   *
   * Debug prefix: [mps:taboola:admantx]
   */
  (function () {
    'use strict';
  
    function isTaboolaPage() {
      return mps.pagevars && mps.pagevars.ad_provider === 'taboola';
    }
  
    var PREFIX = '[mps:taboola:admantx]';
  
    mps._queue.mpsready = mps._queue.mpsready || [];
    mps._queue.mpsready.push(function () {
      if (!isTaboolaPage()) {
        mps._debug(PREFIX + ' SKIPPED — not a Taboola page');
        return;
      }
  
      var taboolaResp = mps.response && mps.response.taboola;
      var cfg = taboolaResp && taboolaResp.admantx;
      if (!cfg || !cfg.enabled) {
        mps._debug(PREFIX + ' SKIPPED — Admantx not enabled in Taboola Config');
        return;
      }
  
      // Replays of insert_head can re-include this script; only request once.
      mps.taboola = mps.taboola || {};
      if (mps.taboola._admantxInstalled) {
        mps._debug(PREFIX + ' SKIPPED — already installed');
        return;
      }
      mps.taboola._admantxInstalled = true;
  
      var timeoutMs = Number(cfg.timeout_ms) || 1000;
      var baseUri = String(cfg.base_uri || '').replace(/^https?:\/\//, '');
      var waiters = [];
      var settled = false;
  
      mps.taboola._admantx = { status: 'pending', values: [] };
      mps.taboola._admantxWhenSettled = function (fn) {
        if (settled) {
          fn(mps.taboola._admantx);
        } else {
          waiters.push(fn);
        }
      };
  
      mps._reqs = mps._reqs || {};
      mps._reqs.taboola = mps._reqs.taboola || {};
      mps._reqs.taboola.admantx_begin = mps._elapsed('', true);
  
      var timer;
      function settle(status, values, rawStatus) {
        if (settled) { return; }
        settled = true;
        clearTimeout(timer);
        mps.taboola._admantx = { status: status, values: values || [] };
        if (rawStatus !== undefined) { mps.taboola._admantx.rawStatus = rawStatus; }
        mps._reqs.taboola.admantx_end = mps._elapsed('', true);
        var ms = mps._reqs.taboola.admantx_end - mps._reqs.taboola.admantx_begin;
        var msg = PREFIX + ' ' + status + ' [' + ms + 'ms] values: ' + mps.taboola._admantx.values.length;
        mps._debug((status === 'done' ? '' : '!') + msg);
        var fns = waiters.splice(0);
        for (var i = 0; i < fns.length; i++) {
          try { fns[i](mps.taboola._admantx); } catch (e) { mps._errorCallback && mps._errorCallback(e, 'taboola-admantx waiter'); }
        }
      }
  
      // Fixed name: the Admantx service calls this global.
      window.admantx_callback = function (data) {
        if (data && data.status === 'OK') {
          if (Array.isArray(data.admants) && data.admants.length) {
            settle('done', data.admants, data.status);
          } else {
            settle('empty', [], data.status);
          }
        } else {
          settle('othererror', ['othererror'], data && data.status !== undefined ? String(data.status) : 'no-data');
        }
      };
  
      var payload = {
        decorator: cfg.decorator,
        key: cfg.key,
        method: cfg.method,
        filter: cfg.filter,
        mode: cfg.mode,
        type: cfg.type,
        body: document.location.href
      };
      var src = mps._protocol() + '//' + baseUri + '?request=' + encodeURIComponent(JSON.stringify(payload));
  
      mps._debug(PREFIX + ' requesting ' + mps._protocol() + '//' + baseUri + ' (timeout ' + timeoutMs + 'ms)');
  
      // Built inline so onerror can settle (mps._loadJS only reports the error).
      var script = document.createElement('script');
      script.async = true;
      script.type = 'text/javascript';
      script.src = src;
      script.onerror = function () {
        mps._loadError(script.src);
        settle('failed', []);
      };
      document.getElementsByTagName('head')[0].appendChild(script);
  
      timer = setTimeout(function () {
        settle('timeout', []);
      }, timeoutMs);
    });
  })();
  
}



/* js/taboola/taboola-init.js */

mps.execute_taboola_init_js = function() {
  /**
   * taboola-init.js — Optidigital module loader + targeting
   *
   * Mirrors the Taboola-provided NBC-Adtags.html sample:
   *   1. Preload gpt.js (<link rel="preload">)
   *   2. Init optidigitalQueue
   *   3. Build data-config from mps.response
   *   4. Push page-level targeting via setPageTargeting()
   *   5. Push per-unit targeting via setSlotTargeting()
   *   6. Append the Optidigital module <script> (LAST — starts the consumer).
   *      If Admantx is enabled, this waits until Admantx settles and queues
   *      the "adg" page targeting first (see taboola-admantx.js).
   *
   * Steps 4-5 are queued BEFORE the module script is appended so that
   * Optidigital consumes the targeting data during slot creation.
   *
   * Slot names are mapped from MPS names to Optidigital names using
   * mps.response.taboola.slot_map (admin-configurable JSON).
   * Unmapped slots pass through as-is.
   *
   * Runs inside mps._queue.mpsready so mps.response is available.
   * On GPT pages this file is a no-op (isTaboolaPage() returns false).
   *
   * Debug prefix: [mps:taboola:init]
   * Namespace color: taboola → #0056F0, sub init → #00F0D2
   */
  (function () {
    'use strict';
  
    // ── Guard ─────────────────────────────────────────────────────────────────
    function isTaboolaPage() {
      return mps.pagevars &&
             mps.pagevars.ad_provider === 'taboola';
    }
  
    var PREFIX = '[mps:taboola:init]';
  
    // ── Queue on mpsready — mps.response must exist ─────────────────────────
    mps._queue.mpsready = mps._queue.mpsready || [];
    mps._queue.mpsready.push(function () {
      if (!isTaboolaPage()) {
        mps._debug(PREFIX + ' SKIPPED — not a Taboola page');
        return;
      }
  
      // Diagnostics for the MPS debug badge (debug-badge.js). Read-only snapshot
      // of what this loader sent to Optidigital; never read by production code.
      mps.taboola = mps.taboola || {};
      var debugInfo = mps.taboola._debug = mps.taboola._debug || {};
  
    // Explicit page configuration takes precedence over response brand swapping.
      var taboolaResp = mps.response && mps.response.taboola;
    var responseCode = taboolaResp && taboolaResp.site_code;
    var siteCode = typeof mps._resolveTaboolaSiteCode === 'function'
      ? mps._resolveTaboolaSiteCode(responseCode) : responseCode;
      debugInfo.latestSiteCode = siteCode || null;
      if (!mps.taboola._initInstalled) {
        debugInfo.siteCode = siteCode || null;
      }
      if (!siteCode) {
        if (!mps.taboola._initInstalled) {
          debugInfo.moduleStatus = 'no-site-code';
        }
        mps._debug('^' + PREFIX + ' ERROR: mps.response.taboola.site_code is empty — Optidigital module will NOT load');
        return;
      }
  
      var head = document.head || document.getElementsByTagName('head')[0];
  
      // Install-once check, read here (before step 1) but only *acted on* by
      // steps 1 and 6. Steps 2-5 stay unguarded on every replay — see the note
      // above step 6 — so a legitimate "load more" update still refreshes
      // targeting even though the preload link and module script are one-time.
      var isFirstRun = !mps.taboola._initInstalled;
  
      // ── 1. Preload GPT tag ────────────────────────────────────────────────
      //    Guarded: without this, every "load more" replay of this callback
      //    (no LOADMODE guard server-side either) would append another
      //    identical <link rel="preload"> into <head>.
      if (isFirstRun) {
        var preloadLink = document.createElement('link');
        preloadLink.rel = 'preload';
        preloadLink.href = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
        preloadLink.as = 'script';
        preloadLink.type = 'text/javascript';
        head.insertBefore(preloadLink, head.firstChild);
        mps._debug(PREFIX + ' gpt.js preload link inserted');
      }
  
      // ── 2. Init optidigitalQueue ──────────────────────────────────────────
      window.optidigitalQueue = window.optidigitalQueue || {};
      window.optidigitalQueue.cmd = window.optidigitalQueue.cmd || [];
  
      // ── 3. Build data-config from mps.response ───────────────────────────
      var params = mps.response && mps.response.dart && mps.response.dart.params;
      var adUnit = (params && params.gpt_adid) || '';
      // Null-prototype: unsanitized server keys like "hasOwnProperty"/"__proto__" would otherwise collide with inherited members.
      var pageTargeting = Object.create(null);
  
      // Parse page_targeting_array ("key=value" strings) into {key: [values]}
      // for Optidigital. The server sends a flat array like:
      //   ["pageid=flashbackvideo", "cont=bentofront", "tag=false", "tag=ramen"]
      // We need: { pageid: ["flashbackvideo"], cont: ["bentofront"], tag: ["false","ramen"] }
      if (params && params.page_targeting_array) {
        var pta = params.page_targeting_array;
        for (var i = 0; i < pta.length; i++) {
          var eq = pta[i].indexOf('=');
          if (eq > 0) {
            var k = pta[i].substring(0, eq);
            var v = pta[i].substring(eq + 1);
            if (!pageTargeting[k]) { pageTargeting[k] = []; }
            pageTargeting[k].push(v);
          }
        }
      }
  
      var dataConfig = {
        adUnit: adUnit,
        pageTargeting: pageTargeting
      };
  
      debugInfo.dataConfig = JSON.parse(JSON.stringify(dataConfig));
      // Expected Optidigital Toolbox page targeting: the data-config keys plus the
      // Admantx "adg" queued separately (kept across replays, which don't re-queue it).
      debugInfo.toolboxPageTargeting = JSON.parse(JSON.stringify(pageTargeting));
      if (debugInfo.adgQueued) {
        debugInfo.toolboxPageTargeting.adg = debugInfo.adgQueued.slice();
      }
      debugInfo.slotTargeting = [];
      debugInfo.slotSummary = { mapped: {}, passthrough: {}, skipped: [] };
  
      mps._debug(PREFIX + ' adUnit=' + adUnit + ' targeting keys=' + Object.keys(pageTargeting).length);
  
      // ── 4. Push page targeting via optidigitalToolbox ─────────────────────
      //    data-config already carries pageTargeting, but the Taboola sample
      //    also pushes via setPageTargeting() for each key.
      //    Queued BEFORE the module script so the data is ready when OD drains.
      for (var tKey in pageTargeting) {
        // pageTargeting has no prototype, so every enumerable key is already its own property.
        (function (k, v) {
          window.optidigitalQueue.cmd.push(function () {
            if (typeof optidigitalToolbox !== 'undefined') {
              optidigitalToolbox.setPageTargeting(k, v);
            }
          });
        })(tKey, pageTargeting[tKey]);
      }
  
      // ── 5. Push per-unit targeting via setSlotTargeting ────────────────────
      //    Reads unit_targeting from mps.response.dart.params.adunits[slot].
      //    Slot names are mapped via mps.response.taboola.slot_map (admin JSON).
      //    Unmapped slots pass through with the MPS name.
      //    Queued BEFORE the module script so OD consumes them during slot creation.
      //    Logs a single summary object instead of per-key lines.
      var slotMap = (taboolaResp && taboolaResp.slot_map) || {};
      var adunits = params && params.adunits;
      if (adunits) {
        var summary = { mapped: {}, passthrough: {}, skipped: [] };
        for (var slot in adunits) {
          if (!Object.prototype.hasOwnProperty.call(adunits, slot)) { continue; }
          if (!adunits[slot].unit_targeting) {
            summary.skipped.push(slot);
            continue;
          }
          var hasSlotMapping = Object.prototype.hasOwnProperty.call(slotMap, slot) && !!slotMap[slot];
          var isMapped = hasSlotMapping;
          var odSlot = hasSlotMapping ? slotMap[slot] : slot;
          var ut = adunits[slot].unit_targeting;
          // Build a targeting snapshot for the summary
          var utSnapshot = Object.create(null);
          for (var utKey in ut) {
            if (!Object.prototype.hasOwnProperty.call(ut, utKey)) { continue; }
            var vals = Array.isArray(ut[utKey]) ? ut[utKey] : [String(ut[utKey])];
            utSnapshot[utKey] = vals.slice();
            // Push the actual setSlotTargeting call
            (function (s, k, v) {
              window.optidigitalQueue.cmd.push(function () {
                if (typeof optidigitalToolbox !== 'undefined') {
                  optidigitalToolbox.setSlotTargeting(s, k, v);
                } else {
                  mps._debug(PREFIX + ' setSlotTargeting SKIPPED — optidigitalToolbox not defined (' + s + ', ' + k + ')');
                }
              });
            })(odSlot, utKey, vals);
          }
          debugInfo.slotTargeting.push({ mpsSlot: slot, odSlot: odSlot, targeting: utSnapshot });
          // Categorize for summary
          if (isMapped) {
            summary.mapped[slot + ' \u2192 ' + odSlot] = utSnapshot;
          } else {
            summary.passthrough[slot] = utSnapshot;
          }
        }
        // Single styled, collapsible console line: pills + live object tree.
        mps._debug(PREFIX + ' slot targeting (' +
          Object.keys(summary.mapped).length + ' mapped, ' +
          Object.keys(summary.passthrough).length + ' passthrough, ' +
          summary.skipped.length + ' skipped)', summary);
        debugInfo.slotSummary = summary;
      }
  
      // ── 6. Append Optidigital module script (LAST) ─────────────────────────
      //    All queue items are pushed above so they are already in the queue
      //    when OD loads, drains the queue, builds GPT slots, and fires ads.
      //
      //    Guarded: this file's <script> is injected via response_head_append
      //    on the 'params' subset (Requestbuilder.php), and mps._queue.mpsready
      //    .push() (mpstools.js) runs its argument immediately once
      //    mps._ext.mpsready is already true. Any replay of insert_head
      //    (mps.updateRequest() / mps.makeRequest('more')) that re-includes
      //    this script would otherwise re-run this whole callback and append a
      //    second module script, reloading Optidigital and re-initializing
      //    slots/consumers. The page/slot targeting pushes above (steps 4-5)
      //    stay unguarded so a legitimate update still refreshes targeting.
      if (!isFirstRun) {
        mps._debug(PREFIX + ' SKIPPED — Optidigital module already installed');
        return;
      }
      mps.taboola._initInstalled = true;
  
      // Admantx (optional): when enabled, hold the module append until Admantx
      // settles so "adg" is queued before Optidigital drains the queue. Admantx
      // always settles (success, error, or its own timeout), so this fails open.
      // When Admantx is disabled the hook is absent and the append is synchronous.
      function appendModule(admantx) {
        if (admantx) {
          debugInfo.admantx = { status: admantx.status, values: admantx.values.slice() };
          if (admantx.values.length) {
            window.optidigitalQueue.cmd.unshift(function () {
              if (typeof optidigitalToolbox !== 'undefined') {
                optidigitalToolbox.setPageTargeting('adg', admantx.values);
              }
            });
            debugInfo.adgQueued = admantx.values.slice();
            debugInfo.toolboxPageTargeting = debugInfo.toolboxPageTargeting || {};
            debugInfo.toolboxPageTargeting.adg = admantx.values.slice();
            mps._debug(PREFIX + ' adg queued (' + admantx.values.length + ' values)');
          }
        }
        var optiScript = document.createElement('script');
        optiScript.type = 'module';
        optiScript.id = 'optidigital-ad-init';
        optiScript.async = true;
        optiScript.src = typeof mps._taboolaModuleUrl === 'function'
          ? mps._taboolaModuleUrl(siteCode)
          : 'https://scripts.opti-digital.com/modules/?site=' + encodeURIComponent(siteCode);
        optiScript.onerror = function () {
          var preload = mps.taboola.preloads && mps.taboola.preloads[optiScript.src];
          if (preload) { preload.status = 'failed'; }
          mps._loadError(optiScript.src);
        };
        optiScript.setAttribute('data-config', JSON.stringify(dataConfig));
        debugInfo.moduleUrl = optiScript.src;
        debugInfo.moduleRequest = {
          siteCode: siteCode,
          moduleUrl: optiScript.src,
          dataConfig: JSON.parse(JSON.stringify(dataConfig))
        };
        debugInfo.moduleStatus = 'loading';
        optiScript.addEventListener('load', function () { debugInfo.moduleStatus = 'loaded'; });
        optiScript.addEventListener('error', function () { debugInfo.moduleStatus = 'failed'; });
        head.appendChild(optiScript);
        mps._debug(PREFIX + ' Optidigital module appended (site=' + siteCode + ')');
      }
  
      if (typeof mps.taboola._admantxWhenSettled === 'function') {
        debugInfo.moduleStatus = 'waiting-admantx';
        mps._debug(PREFIX + ' waiting for Admantx before appending the module');
        mps.taboola._admantxWhenSettled(appendModule);
      } else {
        appendModule(null);
      }
  
      mps._debug(PREFIX + ' initialization complete');
    });
  })();
  
}



/* js/taboola/taboola-api.js */

mps.execute_taboola_api_js = function() {
  /**
   * taboola-api.js — Taboola-aware public API facade
   *
   * Wraps mps.insertAd, mps.getAd, mps.cloneAd, mps.replaceAd so that on
   * Taboola pages they push slot-level targeting via optidigitalToolbox instead
   * of creating GPT divs / calling googletag.
   *
   * On GPT pages every call passes through to the original function unchanged.
   *
   * The actual Taboola-mode no-op/bookkeeping logic lives in
   * mps._taboolaAdFacade (mpstools.js) — shared with pre-include-autoloader.js,
   * which uses the same facade directly (via mps._ext.ad_stack, known
   * synchronously) for pure-Taboola stacks before this file has even loaded.
   * Mixed stacks only know ad_provider after insert_head, so they rely on this
   * wrap instead.
   *
   * Load order (in fetch.php deferred list):
   *   taboola-gate → taboola-init → **taboola-api**
   *
   * Debug prefix: [mps:taboola:api]
   * Namespace color: taboola → #0056F0, sub api → #7BCDFF
   */
  (function () {
    'use strict';
  
    var PREFIX = '[mps:taboola:api]';
  
    // ── Install-once guard ──────────────────────────────────────────────────
    // Requestbuilder.php has no LOADMODE != 'more' guard on this script (unlike
    // every sibling GPT deferred script), so it can be re-included on "load
    // more" replays. Without this guard, each replay would re-wrap the
    // *previous* wrapper around insertAd/getAd/cloneAd/replaceAd, growing the
    // closure chain by one layer per replay for the life of the page.
    mps.taboola = mps.taboola || {};
    if (mps.taboola._apiInstalled) {
      mps._debug(PREFIX + ' SKIPPED — already installed');
      return;
    }
    mps.taboola._apiInstalled = true;
  
    function isTaboolaPage() {
      return mps.pagevars &&
             mps.pagevars.ad_provider === 'taboola';
    }
  
    // ── Wrap insertAd ──────────────────────────────────────────────────────
    var _origInsertAd = typeof mps.insertAd === 'function' ? mps.insertAd : null;
    mps.insertAd = function (selector, adslot, targetingappend, disabledetect, newpath, overridetargeting, clone, loadset, prevloadset) {
      if (!isTaboolaPage()) {
        return _origInsertAd ? _origInsertAd.apply(this, arguments) : false;
      }
      return mps._taboolaAdFacade.insertAd.apply(this, arguments);
    };
  
    // ── Wrap getAd ─────────────────────────────────────────────────────────
    var _origGetAd = typeof mps.getAd === 'function' ? mps.getAd : null;
    mps.getAd = function (adunit, _swap, loadset) {
      if (!isTaboolaPage()) {
        return _origGetAd ? _origGetAd.apply(this, arguments) : false;
      }
      return mps._taboolaAdFacade.getAd.apply(this, arguments);
    };
  
    // ── Wrap cloneAd ──────────────────────────────────────────────────────
    var _origCloneAd = typeof mps.cloneAd === 'function' ? mps.cloneAd : null;
    mps.cloneAd = function (selector, adslot, targetingappend, disabledetect, overridetargeting, loadset) {
      if (!isTaboolaPage()) {
        return _origCloneAd ? _origCloneAd.apply(this, arguments) : false;
      }
      return mps._taboolaAdFacade.cloneAd.apply(this, arguments);
    };
  
    // ── Wrap replaceAd ────────────────────────────────────────────────────
    var _origReplaceAd = typeof mps.replaceAd === 'function' ? mps.replaceAd : null;
    mps.replaceAd = function (selector, adslot, loadset) {
      if (!isTaboolaPage()) {
        return _origReplaceAd ? _origReplaceAd.apply(this, arguments) : false;
      }
      return mps._taboolaAdFacade.replaceAd.apply(this, arguments);
    };
  
    mps._debug(PREFIX + ' API facade installed');
  })();
  
}

