!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).webVitals={})}(this,(function(e){"use strict";var t,n,i,a,r=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},o=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},u=!1,c=function(e,t){u||"undefined"!=typeof InstallTrigger||(addEventListener("beforeunload",(function(){})),u=!0);addEventListener("visibilitychange",(function n(i){"hidden"===document.visibilityState&&(e(i),t&&removeEventListener("visibilitychange",n,!0))}),!0)},f=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},s="function"==typeof WeakSet?new WeakSet:new Set,d=function(e,t,n){var i;return function(){t.value>=0&&(n||s.has(t)||"hidden"===document.visibilityState)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},m=-1,p=function(){return"hidden"===document.visibilityState?0:1/0},v=function(){c((function(e){var t=e.timeStamp;m=t}),!0)},l=function(){return m<0&&(m=p(),v(),f((function(){setTimeout((function(){m=p(),v()}),0)}))),{get timeStamp(){return m}}},y={passive:!0,capture:!0},h=new Date,S=function(e,a){t||(t=a,n=e,i=new Date,b(removeEventListener),g())},g=function(){if(n>=0&&n<i-h){var e={entryType:"first-input",name:t.type,target:t.target,cancelable:t.cancelable,startTime:t.timeStamp,processingStart:t.timeStamp+n};a.forEach((function(t){t(e)})),a=[]}},T=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){S(e,t),a()},i=function(){a()},a=function(){removeEventListener("pointerup",n,y),removeEventListener("pointercancel",i,y)};addEventListener("pointerup",n,y),addEventListener("pointercancel",i,y)}(t,e):S(t,e)}},b=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,T,y)}))};e.getCLS=function(e,t){var n,i=r("CLS",0),a=function(e){e.hadRecentInput||(i.value+=e.value,i.entries.push(e),n())},u=o("layout-shift",a);u&&(n=d(e,i,t),c((function(){u.takeRecords().map(a),n()})),f((function(){i=r("CLS",0),n=d(e,i,t)})))},e.getFCP=function(e,t){var n,i=l(),a=r("FCP"),u=o("paint",(function(e){"first-contentful-paint"===e.name&&(u&&u.disconnect(),e.startTime<i.timeStamp&&(a.value=e.startTime,a.entries.push(e),s.add(a),n()))}));u&&(n=d(e,a,t),f((function(i){a=r("FCP"),n=d(e,a,t),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,s.add(a),n()}))}))})))},e.getFID=function(e,i){var u,m=l(),p=r("FID"),v=function(e){e.startTime<m.timeStamp&&(p.value=e.processingStart-e.startTime,p.entries.push(e),s.add(p),u())},y=o("first-input",v);u=d(e,p,i),y&&c((function(){y.takeRecords().map(v),y.disconnect()}),!0),y&&f((function(){var o;p=r("FID"),u=d(e,p,i),a=[],n=-1,t=null,b(addEventListener),o=v,a.push(o),g()}))},e.getLCP=function(e,t){var n,i=l(),a=r("LCP"),u=function(e){var t=e.startTime;t<i.timeStamp&&(a.value=t,a.entries.push(e)),n()},m=o("largest-contentful-paint",u);if(m){n=d(e,a,t);var p=function(){s.has(a)||(m.takeRecords().map(u),m.disconnect(),s.add(a),n())};["keydown","click"].forEach((function(e){addEventListener(e,p,{once:!0,capture:!0})})),c(p,!0),f((function(i){a=r("LCP"),n=d(e,a,t),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,s.add(a),n()}))}))}))}},e.getTTFB=function(e){var t,n=r("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();n.value=n.delta=t.responseStart,n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)},Object.defineProperty(e,"__esModule",{value:!0})}));
(function (){
  var uriSuffix = "";
  var jsErrors = [];
  var string = "";
  var substring = "script error";
  var clsScore = null;
  var fidScore = null;
  var lcpScore = null;
  var isChrome = false;
  var clsElements = []; 
  var rumTimestamp = (performance && performance.timing && performance.timing.responseStart)
  ? performance.timing.responseStart
  : Date.now();

    
    window.addEventListener('load', function () {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(sendRumData);
      } else {
        setTimeout(sendRumData, 100);
      }
    });


    /*window.onerror = function (msg, url, lineNo, columnNo, error) {
    try{
        string = msg.toLowerCase();
        if (string.indexOf(substring) > -1){
            jsErrors.push({name:'JS syntax error', line:0, file:'n/a', initiator:'n/a', type:'n/a'});
        } else {
            jsErrors.push({error: error, name:msg, line:lineNo, file:url, initiator:'n/a', type:'n/a'});
        }
    } catch(e){
      console.log("Exception occurred collecting js error data: "+ e);
    }
    return false;
  };*/
  
  String.prototype.toUnderscore = function(){
    return this.replace(/([A-Z])/g, function($1){return "_"+$1.toLowerCase();});
  };

  function isMobile() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };

  function getObjRef(node){
    let objRef
    if (node !==null && node!==undefined){
      objRef = node.nodeName 
      if (node.className !==undefined && node.className!==""){
        objRef +="."+node.className
      }else{
        objRef =node.parentNode.nodeName+"."+node.parentNode.className +">"+objRef
      }  
      objRef = objRef.replace(/\s\s+/g, ' ')
    }else {
      objRef = "null"
    }
    return objRef
  }

  function getBiggestLayoutShifts(sources){
    let ls = null
    let size = 0
    if (sources!==undefined){
      sources?.forEach(function (localLs, j) {
        let widthDiff = localLs.currentRect.width - localLs.previousRect.width
        widthDiff = widthDiff < 0 ? widthDiff * -1 : widthDiff
        let heightDiff = localLs.currentRect.height - localLs.previousRect.height 
        heightDiff = heightDiff < 0 ? heightDiff * -1 : heightDiff
        const localSize = widthDiff * heightDiff
        if (ls == null){
          ls = localLs
          size = localSize
        }else if (size < localSize){
          ls = localLs
          size = localSize
        }
      })
    }
    return ls == null ? [] : [ls];
  }

  function reportWebvitals(metric){
    let count = 0
    metric.entries.forEach(function (entry, i) {
      if (entry instanceof LargestContentfulPaint){
        var objRef = getObjRef(entry.element)
        lcpScore = Math.round(entry.renderTime * 1000) / 1000
        if(console!==undefined && window.location.href.indexOf("?debug")!==-1){
          console.log("Webvitals LCP:"+objRef+"= "+entry.renderTime)
        }
        jsErrors.push({error: "n/a", name:objRef, line:Math.round(lcpScore * 1000), file:"n/a", initiator:'n/a', type:"LCP"});
      }else if (entry instanceof LayoutShift) {
        clsScore = clsScore === null ? 0 : clsScore
        clsScore = clsScore + entry.value
        let sources = getBiggestLayoutShifts(entry.sources)
        sources.forEach(function (el, j) {
          var objRef = el !== null ? getObjRef(el.node) : "couldnt_extract"
          if (entry.value > 0.1 && count < 3 && objRef !== "null" && clsElements.indexOf(objRef)===-1){
              if(console!==undefined && window.location.href.indexOf("?debug")!==-1){
                console.log("Webvitals CLS:"+objRef+"= "+entry.value)
              }
              jsErrors.push({error: "n/a", name:objRef, line:Math.round(entry.value * 1000), file:"n/a", initiator:'n/a', type:"CLS"});
              clsElements.push(objRef);
              count++;
          }
        })
      }else if (entry instanceof PerformanceEventTiming){
          const delay = entry.processingStart - entry.startTime;
          var objRef = getObjRef(entry.target)
          fidScore = Math.round(delay * 1000) / 1000
          if(console!==undefined && window.location.href.indexOf("?debug")!==-1){
            console.log("Webvitals INP:"+objRef+"= "+delay)
          }
          jsErrors.push({error: "n/a", name:objRef, line:Math.round(fidScore * 1000), file:"n/a", initiator:'n/a', type:"INP"});
      }
      
    })
  }

  try{
    if (window.navigator.userAgent.indexOf("Chrome")!==-1){
      isChrome = true
      webVitals.getINP(reportWebvitals, true)
      webVitals.getLCP(reportWebvitals, true)
      webVitals.getCLS(reportWebvitals, true)
    }
  }catch(e){}
  
  function getPerformanceMarks(){
    var marks = [];
    var allMarks = null;
    if ( window.performance ) {
        if ( window.performance.getEntriesByType ) {
           allMarks = window.performance.getEntriesByType( 'mark' );
        } else {
            if ( window.performance.webkitGetEntriesByType ) {
                allMarks = window.performance.webkitGetEntriesByType( 'mark' );
            }
        }
    }
    allMarks = allMarks === null ? RUM.marks : allMarks;
    for (var i=0;i<allMarks.length;i++){
      var obj = {}
      if (allMarks[i].name.match("prebid_preload")){
          obj.name = "adverts_headerbid_start"
          obj.duration = allMarks[i].duration
          obj.entryType = allMarks[i].entryType
          obj.startTime = allMarks[i].startTime
          allMarks.push(obj)
        }else if (allMarks[i].name.match("prebid_bidWon")){
          obj.name = "adverts_headerbid_end"
          obj.duration = allMarks[i].duration
          obj.entryType = allMarks[i].entryType
          obj.startTime = allMarks[i].startTime
          allMarks.push(obj)
        }else if (allMarks[i].name.match("adverts_metrics_firstadloaded")){
          obj.name = "adverts_indexexchange_loaded"
          obj.duration = allMarks[i].duration
          obj.entryType = allMarks[i].entryType
          obj.startTime = allMarks[i].startTime
          allMarks.push(obj)
        }
      if(allMarks[i].name.match("^css_") || allMarks[i].name.match("^js_") || allMarks[i].name.match("^tmg_") || allMarks[i].name.match("^content_")){
          marks.push(allMarks[i])
        }
    }
    return marks
  }
  // Get Omniture client ID to link user browser data to RUM metrics
  function getClientId() {
      var aID = document.cookie.match( '(^|;)\\s*AMCV_2C7336C753C676BA0A490D4B%40AdobeOrg\\s*=\\s*([^;]+)' );
      return aID ? decodeURIComponent(aID.pop()).split('|')[4] : '';
  }

  function getBuildVersion( selectors, regex ) {
    let buildNum;
    let buildStr;
    let buildMismatch = false;
    selectors.forEach( function( element ) {
      let newBuildStr = regex.exec(element.src!==undefined ? element.src : element.href)[1];
      let newBuild = parseFloat( newBuildStr.replace("-", ".").replace("--", "") );
      buildMismatch = buildNum !==undefined && buildNum !== newBuild ? true : buildMismatch;
      if ( buildNum == undefined || buildNum > newBuild ) {
        buildNum = newBuild;
        buildStr = newBuildStr;
      }
    });
    return {
      buildNum: buildNum,
      buildStr: buildStr,
      buildMismatch: buildMismatch
    }
  }
  function getReleaseVersion() {
    const jsBuild = getBuildVersion( document.querySelectorAll("script[src*='.min.'][src$='.js']:not([src$='.min.js'])"), /min\.(.*)\.js/ );
    const cssBuild = getBuildVersion( document.querySelectorAll("link[href*='.min.'][href$='.css']:not([href$='.min.css'])"), /min\.(.*)\.css/ );
    const lowestBuild = cssBuild.buildNum < jsBuild.buildNum ? cssBuild.buildStr : jsBuild.buildStr;
    const code = jsBuild.buildMismatch ? 1
      : cssBuild.buildMismatch ? 2
      : cssBuild.buildNum !== jsBuild.buildNum ? 3
      : 4;
    return {
      build: lowestBuild,
      code: code
    }
  }
  
  function sendRumData() {
    var rumJson = {}
    try{
      try{
        rumJson.fallback = document.cookie.length;
      }catch(e){
        rumJson.fallback = 0;
      }
    rumJson.timestamp = rumTimestamp
    rumJson.domain = window.location.hostname
    rumJson.uri = dataLayer.rollupContentPath ? dataLayer.rollupContentPath : "/"+ window.location.pathname.substr(1)+uriSuffix
    if (window.location.href.indexOf(".html")!==-1 && rumJson.uri.indexOf(".html") ===-1){
      rumJson.uri = window.location.pathname
    }
    rumJson.referrer = document.referrer
    rumJson.qs = window.location.search
    rumJson.visitor_id = getClientId()
    try {
      rumJson.browser = navigator.userAgent
      rumJson.browser = rumJson.browser.indexOf("Chrome") > -1 ? "Chrome" :  rumJson.browser
      rumJson.browser = rumJson.browser.indexOf("Safari") > -1 ? "Safari" :  rumJson.browser
      rumJson.browser = rumJson.browser.indexOf("Edge") > -1 ? "Edge" :  rumJson.browser
      rumJson.browser = rumJson.browser.indexOf("Firefox") > -1 ? "Firefox" :  rumJson.browser
      rumJson.browser = rumJson.browser.indexOf("OP") > -1 ? "Opera" :  rumJson.browser
      rumJson.browser = rumJson.browser.indexOf("MSIE") > -1 || 
                     rumJson.browser.indexOf("rv:") > -1 ? "IE" :  rumJson.browser
    }catch(e){
      rumJson.browser = "other"
    }
    rumJson.isMobile = isMobile()
    rumJson.isAdlight = tmgAds.tmg.isAdLite === true ? true : false 
    rumJson.hasAds = false
    rumJson.view_port_height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    rumJson.view_port_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    rumJson.performance_timing = window.performance.timing
    if (isChrome){
      //if (clsScore > 0){
        rumJson.cls = Math.round(clsScore * 1000 ) / 1000
      //}
      if (lcpScore > 0){
        rumJson.lcp = Math.round(lcpScore * 1000 ) / 1000
      }
      if (fidScore > 0){
        rumJson.fid = Math.round(fidScore * 1000 ) / 1000
      }
    }
    try{
      rumJson.qmSessionId = QuantumMetricAPI.getSession()
    }catch(e){}
    try{
      rumJson.cache = tmgAds.tmg.isAdLite //window.performance.getEntriesByType("navigation")[0].serverTiming[1].description
    }catch(e){
      rumJson.cache = "n/a"
    }
    var build = getReleaseVersion()
    rumJson.release =  "v0.1" //build.build
    rumJson.releasePropStatus = build.code
    if (document.cookie.indexOf("tmg_session=") >= 0 && document.cookie.indexOf("tmg_subs=") >= 0){
      rumJson.event = 2
    }else if (document.cookie.indexOf("tmg_session=") >= 0){
      rumJson.event = 1
    }else {
      rumJson.event = 0
    }
    var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection !== undefined && connection.type !== undefined){
      rumJson.qs = rumJson.qs +"&connectionType="+connection.type
    }
    if (document.head.querySelector("title").text == "404"){
      rumJson.status_code = "404";
      rumJson.uri = window.location.pathname //override path for 404 pages
    }else if (document.head.querySelector("title").text == "500"){
      rumJson.status_code = "500";
      rumJson.uri = window.location.pathname //override path for 500 pages
    }else {
      rumJson.status_code = "200";
      var htmlHead = document.head
      rumJson.country = htmlHead.querySelector("[name~='tmgads.geo'][content]").content
      rumJson.channel = htmlHead.querySelector("[name~='tmgads.channel'][content]").content 
      rumJson.type = htmlHead.querySelector("[name~='tmgads.pagetype'][content]").content
      try{
        rumJson.firstPublished = new Date(htmlHead.querySelector("[name~='DCSext.articleFirstPublished'][content]").content).getTime()
      }catch(e){}
    }
    if (document.head.querySelector("[name~='DCSext.Content_Type'][content]").content !=="index"){
       rumJson.isPremium = dataLayer.premiumContent === "true"

       if (rumJson.isPremium){
         rumJson.qs = rumJson.qs +"&premium=true"
       }
       
       if(tmg !==undefined && tmg.pubsub!==undefined && tmg.pubsub.publishedTopics!==undefined){

          if (tmg.pubsub.publishedTopics.indexOf("tmg.ads.adlite.premium")!==-1){
            rumJson.hasAds = true
          }
          if (tmg.pubsub.publishedTopics.indexOf("tmg.page.pianoready")!==-1){
             rumJson.qs = rumJson.qs +"&paywall=true"
             rumJson.paywallLoaded = true
          }else {
            rumJson.qs = rumJson.qs +"&paywall=false"
            rumJson.paywallLoaded = false
          }
          if (tmg.pubsub.publishedTopics.indexOf("tmg.page.ready")!==-1){
             rumJson.pageReady = true
          }else {
             rumJson.pageReady = false
          }
          if (tmg.pubsub.publishedTopics.indexOf("tmg.piano.paywall.web_no_paywall")!==-1){
             rumJson.whitelisted = true
          }else {
             rumJson.whitelisted = false
          }
          if (tmg.pubsub.publishedTopics.indexOf("tmg.liftigniter.ready")!==-1){
             rumJson.liftigniter = true
          }else {
             rumJson.liftigniter = false
          }
       }else {
          rumJson.qs = rumJson.qs +"&paywall=false"
          rumJson.paywallLoaded = false
       }

      try{
        var p13n = document.cookie.match( '(^|;)\\s*tmg_p13n\\s*=\\s*([^;]+)')
        if (p13n!==null){
           p13n = p13n[0]
           rumJson.qs = rumJson.qs + "&subType="+p13n.split('subscriptionType:"')[1].split(',')[0]
           rumJson.subType = p13n.split('subscriptionType:"')[1].split(',')[0].replaceAll('"','')
           rumJson.pid =  p13n.split('pId:')[1].split(',')[0].replaceAll('"','')
        }
       }catch(e){}
      if (document.cookie.length > 16000){ 
  	    var cookies = document.cookie.split("; ")
  	    var cookieNames = "";
  	    var liveArticleCookieSize = 0
  	    for (var i=0; i<cookies.length;i++){
  	    	var cookie = cookies[i].split("=");
  	    	if (cookie[0].indexOf("liveStreamAutoRefresh")!==-1){
  	    		liveArticleCookieSize = liveArticleCookieSize + cookie[0].length+cookie[1].length
  	    	}else{
  	    		cookieNames+=cookie[0]+":"+cookie[0].length+cookie[1].length+"; "
  	    	}
  	    }
      	cookieNames+=" liveStreamAutoRefresh:"+liveArticleCookieSize;
  	    rumJson.qs = "cookieKV="+cookieNames
  	  }
    }
    
    if (window.performance && window.performance.getEntriesByType){
      rumJson.requests = window.performance.getEntriesByType("resource").length
    }
    rumJson.size = 0
    var resources = window.performance && window.performance.getEntriesByType ? window.performance.getEntriesByType("resource") : []
    for (n=0;n<resources.length;n++) { 
      var entry=resources[n];
      rumJson.size+= entry.transferSize!==null && entry.transferSize!==undefined  ? entry.transferSize : 0; 
    }
    
    let aaCallCount = 0
    let paywallMarks = window.performance.getEntriesByType("resource").filter(function (el) {
      return el.name.indexOf('piano')!==-1 ||  el.name.indexOf('tiny')!==-1 || el.name.indexOf('smetrics')!==-1;
    }).map(function(x) {
      let name 
      if (x.name.indexOf('piano.min')!==-1){
        name = "tmgPianoJS"
      }else if (x.name.indexOf('tinypass.min.js')!==-1){
        name = "tinyPassJSLib"
      }else if (x.name.indexOf('experience/load')!==-1){
        name = "tinyPassExpLoad"
      }else if (x.name.indexOf('experience/execute')!==-1){
        name = "tinyPassExpExec"
      }else if (x.name.indexOf('smetrics')!==-1){
        name = "aaCall"+(aaCallCount +1)
        aaCallCount++
      }else {
        name = "other"
      }
      return {'name':name, 'start_time' : Math.round(x.startTime), 'entry_type':x.entryType, 'duration': Math.round(x.duration)}
    });

    rumJson.marks = paywallMarks
    var marks = getPerformanceMarks() //window.performance.getEntriesByType('mark')
    for (n=0;n<marks.length;n++) { 
      var mark = marks[n]
      var obj = {'name':mark.name, 'start_time' : Math.round(mark.startTime), 'entry_type':mark.entry_type, 'duration': Math.round(mark.duration)}
      rumJson.marks.push(obj)
    } 
    rumJson.aaCallCount = aaCallCount

    // Extract first published date from meta tag
    try {
      var metaFirstPublished = document.head.querySelector('meta[name="DCSext.articleFirstPublished"]');
      if (metaFirstPublished && metaFirstPublished.content) {
        rumJson.firstPublished = new Date(metaFirstPublished.content).getTime();
      }
    } catch (e) {
      console.error("Error extracting first published date from meta tag", e);
    }

    try {
      var ldJsonScripts = document.querySelectorAll('script[type="application/ld+json"]');
      var schema = null;
      // Look for a LiveBlogPosting script first
      ldJsonScripts.forEach(function(script) {
        try {
          var temp = JSON.parse(script.textContent);
          if (temp["@type"] === "LiveBlogPosting") {
            schema = temp;
          }
        } catch (e) {
          // Ignore parsing errors in individual scripts
        }
      });
      // Fallback to first script if no LiveBlogPosting found
      if (!schema && ldJsonScripts.length) {
        schema = JSON.parse(ldJsonScripts[0].textContent);
      }
      
      if (schema) {
        if (schema["@type"] === "LiveBlogPosting" && Array.isArray(schema.liveBlogUpdate) && schema.liveBlogUpdate.length) {
          // Grab the first update's published date from the live blog updates
          rumJson.lastPublished = new Date(schema.liveBlogUpdate[0].datePublished).getTime();
        } else if (schema.dateModified) {
          // For normal articles, use the dateModified value
          rumJson.lastPublished = new Date(schema.dateModified).getTime();
        }
      }
    } catch (e) {
      console.error("Error parsing ld+json for dateModified", e);
    }



    
    rumJson.performance_timing = {}
    var navigationStart = window.performance ? window.performance.timing.navigationStart : 0
    var perfTiming = window.performance ? window.performance.timing : {}
    for (var key in perfTiming) { 
      rumJson.performance_timing[key.toUnderscore()] = perfTiming[key] - navigationStart > 0 ? Math.round (perfTiming[key] - navigationStart) : 0
    } 
    rumJson.errors = jsErrors
    rumJson.pagetype = dataLayer.pageType
    rumJson.userStatus = dataLayer.userStatus

    }catch(e){
      console.log("Exception occurred collecting data for rum mark: "+ e);
    }
    
    var data = JSON.stringify(rumJson) //new Blob([JSON.stringify(rumJson)] , {type : 'application/json'});
    var responseStatus = false;
    try{
      responseStatus = navigator.sendBeacon("//performance-data.gcpdata.telegraph.co.uk/pageview?key=AIzaSyCria58Zv-n9gCUROeg07CufkS16W8MOZg",data);
    }catch(e){
      console.log("Error sending rum beacon");
      console.log(e);
    }
    if(console!==undefined && (window.location.href.indexOf("?debug")!==-1 || !responseStatus)){
      console.log(data);
      console.log(responseStatus ? "rum beacon sent" : "rum beacon could not be sent");
    }
  }
})()
