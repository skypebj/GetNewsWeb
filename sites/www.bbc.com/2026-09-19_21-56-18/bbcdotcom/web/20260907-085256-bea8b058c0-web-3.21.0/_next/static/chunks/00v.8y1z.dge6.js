(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,152504,e=>{"use strict";e.s(["IS_APP_LAYOUT_ENABLED_SESSION_KEY",0,"isAppLayoutEnabled"])},848e3,e=>{"use strict";var t=e.i(395497);let n=e.i(227162).appConfig.getValue(t.ConfigSettings.SeoArchiveStartDate)||"2017-06-01";e.s(["SEO_ARCHIVE_INDEX_SLUG",0,"pages/content-index","SEO_ARCHIVE_ITEMS_PER_RESULTS_PAGE",0,9,"SEO_ARCHIVE_START_DATE",0,n],848e3)},257539,149250,333109,394527,871071,219717,967223,e=>{"use strict";var t=e.i(746857),n=e.i(519894),a=e.i(789799),i=e.i(232489);e.s(["useAuthAndBookmarkActions",0,e=>{let{asPath:o}=(0,t.useAppRouter)(),s=(0,n.useFeatureFlag)("authentication"),r=(0,n.useFeatureFlag)("bookmarking"),{isSignedIn:l,signInUrl:c,statusUrl:d,settingsUrl:p,registerUrl:u,signOutUrl:g}=e,{isSubscribed:f,isSubscriptionAllowed:h}=(0,a.useSubscriptionContext)(),m=[],y={saved_items:(0,i.getHref)("","saved_items"),your_account:(0,i.getHref)(d,"your_account",o),settings:(0,i.getHref)(p,"settings",o),sign_out:(0,i.getHref)(g,"sign_out",o),register:(0,i.getHref)(u,"register",o),sign_in:(0,i.getHref)(c,"sign_in",o),manage_subscription:(0,i.getHref)("","manage_subscription")},v={sign_in:{eventGrouping:"sign_in",eventProperties:{group_name:"account_option",item_link:y.sign_in}},register:{eventGrouping:"register",eventProperties:{group_name:"account_option",item_link:y.register}}},b={your_account:{eventGrouping:"account_option",eventProperties:{item_name:"your_account",item_link:y.your_account}},settings:{eventGrouping:"account_option",eventProperties:{item_name:"settings",item_link:y.settings}},saved_items:{eventGrouping:"account_option",eventProperties:{item_name:"saved_items",item_link:y.saved_items}},sign_out:{eventGrouping:"account_option",eventProperties:{item_name:"sign_out",item_link:y.sign_out}},manage_subscription:{eventGrouping:"account_option",eventProperties:{item_name:"manage_subscription",item_link:y.manage_subscription}}};return s&&r&&l&&m.push({actionName:"saved_items",analytics:b.saved_items,href:y.saved_items,icon:"account:saved-items-outlined",showInHeader:!0,text:"Saved",type:"unboxed"}),s&&(l?(m.push({actionName:"your_account",analytics:b.your_account,href:y.your_account,icon:"account:sign-in",showInHeader:!1,text:"Your Account",type:"unboxed"},{actionName:"settings",analytics:b.settings,href:y.settings,icon:"account:settings",showInHeader:!0,text:"Settings"}),f&&m.push({actionName:"manage_subscription",analytics:b.manage_subscription,href:y.manage_subscription,icon:"account:subscription",showInHeader:!0,text:"Subscription"}),m.push({actionName:"sign_out",analytics:b.sign_out,href:y.sign_out,icon:"account:sign-out",showInHeader:!0,text:"Sign Out"})):(h||m.push({actionName:"register",analytics:v.register,href:y.register,showInHeader:!0,text:"Register"}),m.push({actionName:"sign_in",analytics:v.sign_in,href:y.sign_in,showInHeader:!0,text:"Sign In",type:"unboxed"}))),m}],257539);var o=e.i(191788),s=e.i(610503);e.s(["useHeaderScroll",0,({headerRef:e})=>{let t=(0,o.useRef)(0),[n,a]=(0,o.useState)(!0),[i,r]=(0,o.useState)(!0),l=(0,o.useRef)(0),c=(0,o.useCallback)(e=>{n!==e&&a(e)},[n]),d=(0,o.useCallback)(e=>{i!==e&&r(e)},[i]);return(0,o.useEffect)(()=>{e.current&&(t.current=e.current.getBoundingClientRect().top)},[e]),(0,o.useEffect)(()=>{let e=t.current+80,n=(0,s.default)(()=>{let t=window.scrollY,n=l.current,a=t>=n,i=Math.abs(t-n);t<e?(c(!0),d(!0)):a&&n<e&&i>16?(c(!1),d(!1)):a?i>=150&&(c(!1),d(!1)):i>=150&&(c(!1),d(!0)),l.current=t},100,{leading:!0,trailing:!0});return window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n),n.cancel()}},[n,i,c,d]),{isHeaderDefaultSize:n,showNav:i}}],149250);var r,l,c,d,p,u=e.i(480495),g=-1,f=function(e){addEventListener("pageshow",function(t){t.persisted&&(g=t.timeStamp,e(t))},!0)},h=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},m=function(){var e=h();return e&&e.activationStart||0},y=function(e,t){var n=h(),a="navigate";return g>=0?a="back-forward-cache":n&&(document.prerendering||m()>0?a="prerender":document.wasDiscarded?a="restore":n.type&&(a=n.type.replace(/_/g,"-"))),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(0x82f79cd8fff*Math.random())+1e12),navigationType:a}},v=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var a=new PerformanceObserver(function(e){Promise.resolve().then(function(){t(e.getEntries())})});return a.observe(Object.assign({type:e,buffered:!0},n||{})),a}}catch(e){}},b=function(e,t,n,a){var i,o;return function(s){var r;t.value>=0&&(s||a)&&((o=t.value-(i||0))||void 0===i)&&(i=t.value,t.delta=o,r=t.value,t.rating=r>n[1]?"poor":r>n[0]?"needs-improvement":"good",e(t))}},x=function(e){requestAnimationFrame(function(){return requestAnimationFrame(function(){return e()})})},w=function(e){var t=function(t){"pagehide"!==t.type&&"hidden"!==document.visibilityState||e(t)};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},S=function(e){var t=!1;return function(n){t||(e(n),t=!0)}},_=-1,$=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},k=function(e){"hidden"===document.visibilityState&&_>-1&&(_="visibilitychange"===e.type?e.timeStamp:0,I())},N=function(){addEventListener("visibilitychange",k,!0),addEventListener("prerenderingchange",k,!0)},I=function(){removeEventListener("visibilitychange",k,!0),removeEventListener("prerenderingchange",k,!0)},C=function(){return _<0&&(_=$(),N(),f(function(){setTimeout(function(){_=$(),N()},0)})),{get firstHiddenTime(){return _}}},T=function(e){document.prerendering?addEventListener("prerenderingchange",function(){return e()},!0):e()},j=[1800,3e3],E=function(e,t){t=t||{},T(function(){var n,a=C(),i=y("FCP"),o=v("paint",function(e){e.forEach(function(e){"first-contentful-paint"===e.name&&(o.disconnect(),e.startTime<a.firstHiddenTime&&(i.value=Math.max(e.startTime-m(),0),i.entries.push(e),n(!0)))})});o&&(n=b(e,i,j,t.reportAllChanges),f(function(a){n=b(e,i=y("FCP"),j,t.reportAllChanges),x(function(){i.value=performance.now()-a.timeStamp,n(!0)})}))})},A=[.1,.25],L=function(e,t){t=t||{},E(S(function(){var n,a=y("CLS",0),i=0,o=[],s=function(e){e.forEach(function(e){if(!e.hadRecentInput){var t=o[0],n=o[o.length-1];i&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(i+=e.value,o.push(e)):(i=e.value,o=[e])}}),i>a.value&&(a.value=i,a.entries=o,n())},r=v("layout-shift",s);r&&(n=b(e,a,A,t.reportAllChanges),w(function(){s(r.takeRecords()),n(!0)}),f(function(){i=0,n=b(e,a=y("CLS",0),A,t.reportAllChanges),x(function(){return n()})}),setTimeout(n,0))}))},B={passive:!0,capture:!0},D=new Date,F=function(e,t){r||(r=t,l=e,c=new Date,P(removeEventListener),H())},H=function(){if(l>=0&&l<c-D){var e={entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+l};d.forEach(function(t){t(e)}),d=[]}},O=function(e){if(e.cancelable){var t,n,a,i=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?(t=function(){F(i,e),a()},n=function(){a()},a=function(){removeEventListener("pointerup",t,B),removeEventListener("pointercancel",n,B)},addEventListener("pointerup",t,B),addEventListener("pointercancel",n,B)):F(i,e)}},P=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach(function(t){return e(t,O,B)})},M=[100,300],R=function(e,t){t=t||{},T(function(){var n,a=C(),i=y("FID"),o=function(e){e.startTime<a.firstHiddenTime&&(i.value=e.processingStart-e.startTime,i.entries.push(e),n(!0))},s=function(e){e.forEach(o)},c=v("first-input",s);n=b(e,i,M,t.reportAllChanges),c&&w(S(function(){s(c.takeRecords()),c.disconnect()})),c&&f(function(){n=b(e,i=y("FID"),M,t.reportAllChanges),d=[],l=-1,r=null,P(addEventListener),d.push(o),H()})})},G=0,U=1/0,V=0,W=function(e){e.forEach(function(e){e.interactionId&&(U=Math.min(U,e.interactionId),G=(V=Math.max(V,e.interactionId))?(V-U)/7+1:0)})},z=function(){return p?G:performance.interactionCount||0},K=function(){"interactionCount"in performance||p||(p=v("event",W,{type:"event",buffered:!0,durationThreshold:0}))},Y=[200,500],J=0,q=function(){return z()-J},Q=[],X={},Z=function(e){var t=Q[Q.length-1],n=X[e.interactionId];if(n||Q.length<10||e.duration>t.latency){if(n)n.entries.push(e),n.latency=Math.max(n.latency,e.duration);else{var a={id:e.interactionId,latency:e.duration,entries:[e]};X[a.id]=a,Q.push(a)}Q.sort(function(e,t){return t.latency-e.latency}),Q.splice(10).forEach(function(e){delete X[e.id]})}},ee=function(e,t){t=t||{},T(function(){K();var n,a=y("INP"),i=function(e){e.forEach(function(e){e.interactionId&&Z(e),"first-input"!==e.entryType||Q.some(function(t){return t.entries.some(function(t){return e.duration===t.duration&&e.startTime===t.startTime})})||Z(e)});var t,i=(t=Math.min(Q.length-1,Math.floor(q()/50)),Q[t]);i&&i.latency!==a.value&&(a.value=i.latency,a.entries=i.entries,n())},o=v("event",i,{durationThreshold:t.durationThreshold||40});n=b(e,a,Y,t.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),w(function(){i(o.takeRecords()),a.value<0&&q()>0&&(a.value=0,a.entries=[]),n(!0)}),f(function(){Q=[],J=z(),n=b(e,a=y("INP"),Y,t.reportAllChanges)}))})},et=[2500,4e3],en={},ea=function(e,t){t=t||{},T(function(){var n,a=C(),i=y("LCP"),o=function(e){var t=e[e.length-1];t&&t.startTime<a.firstHiddenTime&&(i.value=Math.max(t.startTime-m(),0),i.entries=[t],n())},s=v("largest-contentful-paint",o);if(s){n=b(e,i,et,t.reportAllChanges);var r=S(function(){en[i.id]||(o(s.takeRecords()),s.disconnect(),en[i.id]=!0,n(!0))});["keydown","click"].forEach(function(e){addEventListener(e,r,!0)}),w(r),f(function(a){n=b(e,i=y("LCP"),et,t.reportAllChanges),x(function(){i.value=performance.now()-a.timeStamp,en[i.id]=!0,n(!0)})})}})},ei=[800,1800],eo=function e(t){document.prerendering?T(function(){return e(t)}):"complete"!==document.readyState?addEventListener("load",function(){return e(t)},!0):setTimeout(t,0)},es=function(e,t){t=t||{};var n=y("TTFB"),a=b(e,n,ei,t.reportAllChanges);eo(function(){var i=h();if(i){var o=i.responseStart;if(o<=0||o>performance.now())return;n.value=Math.max(o-m(),0),n.entries=[i],a(!0),f(function(){(a=b(e,n=y("TTFB",0),ei,t.reportAllChanges))(!0)})}})},er=e.i(227162),el=e.i(395497);e.s(["default",0,({pageType:e})=>{let t=(0,n.useFeatureFlag)("webvitals"),a=Math.floor(100*Math.random()),i=er.appConfig.getValue(el.ConfigSettings.WebVitalsSampleRate),s=!!i&&a<=parseInt(i);return(0,o.useEffect)(()=>{var n;let a,i,o,r,l,c=(0,u.getCookie)("ckns_policy");if(void 0===c){let e=new Date(Date.now()+31536e6);document.cookie=`ckns_policy=111; expires=${e.toUTCString()}; domain=.bbc.com; path=/`,c=(0,u.getCookie)("ckns_policy")}let d=null!=c&&"1"===c.toString()[2],p=Date.now();t&&s&&d&&"sendBeacon"in navigator&&(n=`dotcom-${e.toLowerCase()}`,a=!1,i={cls:null,fid:null,lcp:null,fcp:null,ttfb:null,inp:null},o={device_mem:null,device_cpu:null,device_effective_connection:null},r=()=>{if(a){a=!1,"hardwareConcurrency"in navigator&&(o.device_cpu=navigator.hardwareConcurrency),"connection"in navigator&&"effectiveType"in navigator.connection&&(o.device_effective_connection=navigator.connection.effectiveType),"deviceMemory"in navigator&&(o.device_mem=navigator.deviceMemory);let e=new Blob([JSON.stringify([{type:"web-vitals",url:window.location.href,body:{...i,...o},age:Date.now()-p}])],{type:"application/reports+json"}),t=er.appConfig.getValue(el.ConfigSettings.WebVitalsEndpoint);t=`${t}?pageType=${n}`,navigator.sendBeacon(t,e)}},L(l=e=>{a=!0,i[e.name.toLowerCase()]=e.value},{reportAllChanges:!0}),E(l),R(l),ea(l,{reportAllChanges:!0}),es(l),ee(l),window.addEventListener("visibilitychange",()=>{"hidden"===document.visibilityState&&r()}),window.addEventListener("pagehide",r))},[]),null}],333109);var ec=e.i(391398),ed=e.i(893409),ep=e.i(786025),eu=e.i(102358),eg=e.i(760814),ef=e.i(339228),eh=e.i(570549);let em=eg.default.section.withConfig({displayName:"ContentLinks.styles__ContentLinksSectionStyled",componentId:"sc-9a221ef-0"})`
  margin-top: 29px;

  ${(0,ef.applyStylesForBreakpoints)(eg.css`
      margin-top: 24px;
    `,"group1","group2")}
`,ey=eg.default.ul.withConfig({displayName:"ContentLinks.styles__ContentLinksULStyled",componentId:"sc-9a221ef-1"})`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  row-gap: 18px;
  align-items: center;
  flex-wrap: wrap;

  ${(0,ef.applyStylesForBreakpoints)(eg.css`
      align-items: flex-start;
      flex-direction: column;
      row-gap: 24px;
      column-gap: 0;
    `,"group1","group2")}
`,ev=eg.default.a.withConfig({displayName:"ContentLinks.styles__ContentLinkStyled",componentId:"sc-9a221ef-2"})`
  ${({theme:e,$isSpecial:t})=>eg.css`
    text-decoration: none;
    position: relative;
    color: ${e.nav.content.value};
    ${(0,eh.applyTypography)(e.footer.linksitem.primary.default)}

    &:hover {
      text-decoration: underline;
    }

    ${t&&eg.css`
      margin-left: 16px;

      &::before {
        content: '';
        position: absolute;
        left: -16px;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        width: 1px;
        height: 28px;
        background-color: ${e.nav.lines.value};
      }

      ${(0,ef.applyStylesForBreakpoints)(eg.css`
          margin-left: 0;

          &::before {
            display: none;
          }
        `,"group1","group2")}
    `}
  `}
`,eb=({externalUrl:e,externalTarget:t,slug:n,path:a,title:i,isSpecial:o})=>{let s=a||n||e||"/",r=(0,eu.getNavigationAnalytics)("footer",`ContentLink - ${i}`,e,s,"content_links");return(0,ec.jsx)("li",{"data-testid":"contentlink-li",children:(0,ec.jsx)(ed.default,{analytics:r,href:s,target:t,styledAnchor:ev,styledAnchorProps:{$isSpecial:o},children:i})})},ex=({contentLinks:e=[]})=>{let{length:t}=e;return t?(0,ec.jsx)(em,{children:(0,ec.jsx)("nav",{role:"navigation","aria-label":"Footer navigation",children:(0,ec.jsx)(ey,{children:e.map((e,t)=>(0,ec.jsx)(eb,{...e},t))})})}):null};var ew=e.i(65739);let eS=eg.default.section.withConfig({displayName:"LanguageDropdown.styles__LanguageDropDownSectionStyled",componentId:"sc-bc6bb5-0"})`
  margin-top: 21px;
  ${(0,ef.applyStylesForBreakpoints)(eg.css`
      margin-top: 24px;
    `,"group4")}
  ${(0,ef.applyStylesForBreakpoints)(eg.css`
      margin-top: 40px;
    `,"group1","group2")}
`,e_=eg.default.div.withConfig({displayName:"LanguageDropdown.styles__LanguageDropdownWrapperStyled",componentId:"sc-bc6bb5-1"})`
  position: relative;
  margin-right: 16px;
`,e$=eg.default.button.withConfig({displayName:"LanguageDropdown.styles__DropdownButtonStyled",componentId:"sc-bc6bb5-2"})`
  cursor: pointer;
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 6px 12px;
  background-color: ${({theme:e})=>e.container.onDefaultBG.value};
  color: ${({theme:e})=>e.text.default.value};
  ${({theme:e})=>eg.css`
    ${(0,eh.applyTypography)(e.footer.linksitem.primary.default)}
  `}

  // Hovered state
  &:hover {
    background-color: ${({theme:e})=>e.interactive1.onInverseBG.hovered.value};
  }

  // Disabled state
  &[disabled] {
    cursor: auto;
    color: ${({theme:e})=>e.interactive1.onDefaultBG.disabled2.value};
    background-color: ${({theme:e})=>e.interactive1.onDefaultBG.disabled1.value};
  }

  //Pressed state
  &:active {
    background-color: ${({theme:e,disabled:t})=>t?"none":e.container.onDefaultBG.value};
  }
`,ek=eg.default.div.withConfig({displayName:"LanguageDropdown.styles__DropdownButtonIconWrapperStyled",componentId:"sc-bc6bb5-3"})`
  width: 24px;
  height: 24px;
  margin-left: 4.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e,$disabled:t})=>t?e.interactive1.onDefaultBG.disabled2.value:"#000000"};
`,eN=eg.default.div.withConfig({displayName:"LanguageDropdown.styles__DropdownContentWrapperStyled",componentId:"sc-bc6bb5-4"})`
  background-color: ${({theme:e})=>e.container.onDefaultBG.value};
  padding-bottom: 24px;
  padding-top: 48px;
  ${({$isHidden:e})=>e&&eg.css`
      visibility: hidden;
      position: absolute;
      width: 1px;
      height: 1px;
      overflow: hidden;
      pointer-events: none;
    `}
  ${(0,ef.applyStylesForBreakpoints)(eg.css`
      padding-bottom: 8px;
    `,"group2")};
`,eI=eg.default.h3.withConfig({displayName:"LanguageDropdown.styles__DropdownContentHeadlineStyled",componentId:"sc-bc6bb5-5"})`
  text-align: center;
  color: ${({theme:e})=>e.text.default.value};
  ${({theme:e})=>eg.css`
    ${(0,eh.applyTypography)(e.generic.headline.tiny.bpLarge)}
    ${(0,ef.applyStylesForBreakpoints)(eg.css`
        ${(0,eh.applyTypography)(e.generic.headline.tiny.bpSmall)}
        text-align: left;
        padding-left: 32px;
      `,"group2")};
  `}
`,eC=eg.default.h4.withConfig({displayName:"LanguageDropdown.styles__DropdownContentSubHeadlineStyled",componentId:"sc-bc6bb5-6"})`
  text-align: center;
  color: ${({theme:e})=>e.text.mediumEmphasis.value};
  margin-top: 24px;
  ${({theme:e})=>eg.css`
    ${(0,eh.applyTypography)(e.generic.description.Regular.bpLarge)}
  `}
  ${(0,ef.applyStylesForBreakpoints)(eg.css`
      margin-top: 12px;
      text-align: left;
      padding-left: 32px;
    `,"group2")};
`,eT=eg.default.div.withConfig({displayName:"LanguageDropdown.styles__DropdownContentTableStyled",componentId:"sc-bc6bb5-7"})`
  ${({$itemsLength:e})=>eg.css`
    max-width: 616px;
    margin: 24px auto;
    display: grid;
    grid-template-rows: repeat(${Math.ceil(e/4)}, auto);
    grid-auto-flow: column;
    grid-auto-columns: minmax(188px, 188px);
    column-gap: 16px;
    row-gap: 8px;
    justify-content: center;
    ${(0,ef.applyStylesForBreakpoints)(eg.css`
        grid-template-rows: repeat(${Math.ceil(e/2)}, auto);
        column-gap: 80px;
      `,"group4")};
    ${(0,ef.applyStylesForBreakpoints)(eg.css`
        grid-template-rows: unset;
        grid-auto-flow: row;
        row-gap: 24px;
        margin: 32px auto;
        justify-content: left;
        padding-left: 32px;
      `,"group2")};
  `}
`,ej=eg.default.a.withConfig({displayName:"LanguageDropdown.styles__DropDownContentTableItemStyled",componentId:"sc-bc6bb5-8"})`
  ${({theme:e})=>eg.css`
    color: ${e.text.default.value};
    ${(0,eh.applyTypography)(e.footer.linksitem.secondary.default.bpLarge)}

    &:hover {
      text-decoration: underline;
    }
    ${(0,ef.applyStylesForBreakpoints)(eg.css`
        font-size: 14px;
      `,"group2")};
  `}
`,eE=({text:e,disabled:t,onClick:n,isOpen:a})=>(0,ec.jsxs)(e$,{type:"button",disabled:t,onClick:n,children:[e,(0,ec.jsx)(ek,{$disabled:t,children:(0,ec.jsx)(ew.default,{name:t?"arrows:arrow-down":a?"arrows:arrow-up":"arrows:arrow-down"})})]}),eA=({title:e,externalUrl:t,externalTarget:n})=>{let a=(0,eu.getNavigationAnalytics)("footer",`LanguageDropdownItem - ${e}`,t,t||"","language_dropdown");return t?(0,ec.jsx)(ed.default,{analytics:a,href:t,target:n,styledAnchor:ej,children:e}):null},eL=({headline:e,subHeadline:t,languages:n=[],isHidden:a})=>{let{length:i}=n;return(0,ec.jsxs)(eN,{$isHidden:a,"aria-hidden":a,children:[e&&(0,ec.jsx)(eI,{children:e}),t&&(0,ec.jsx)(eC,{children:t}),!!i&&(0,ec.jsx)(eT,{$itemsLength:n.length,children:n.map((e,t)=>(0,ec.jsx)(eA,{...e},t))})]})},eB=({buttonText:e,isDisabled:t=!1,headline:n,subHeadline:a,languages:i=[]})=>{let{length:s}=i,[r,l]=(0,o.useState)(!1);return s?(0,ec.jsx)(eS,{children:(0,ec.jsxs)(e_,{children:[(0,ec.jsx)(eE,{text:e,disabled:t,onClick:()=>l(e=>!e),isOpen:r}),(0,ec.jsx)(eL,{headline:n,subHeadline:a,languages:i,isHidden:!r||t})]})}):null};var eD=e.i(147097);let eF=eg.default.section.withConfig({displayName:"LegalLinks.styles__LegalLinksSectionStyled",componentId:"sc-f9fd086a-0"})`
  margin-top: 16px;
`,eH=eg.default.ul.withConfig({displayName:"LegalLinks.styles__LegalLinksULStyled",componentId:"sc-f9fd086a-1"})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 16px;
  row-gap: 12px;
`,eO=eg.default.li.withConfig({displayName:"LegalLinks.styles__LegalLinksLIStyled",componentId:"sc-f9fd086a-2"})`
  flex: 0 0 auto;
`,eP=eg.default.a.withConfig({displayName:"LegalLinks.styles__LegalLinkItemStyled",componentId:"sc-f9fd086a-3"})`
  ${({theme:e})=>eg.css`
    cursor: pointer;
    text-decoration: none;
    color: ${e.nav.content.value};
    ${(0,eh.applyTypography)(e.footer.linksitem.secondary.default.bpLarge)}

    &:hover {
      text-decoration: underline;
    }
  `}
`,eM=({title:e,path:t,slug:n,externalUrl:a="",externalTarget:i,inOverlay:o})=>{let s=t||n,r=(0,eu.getNavigationAnalytics)("footer",`LegalLink - ${e}`,a,s,"legal_links");return(0,ec.jsx)(eO,{children:s?(0,ec.jsx)(ed.default,{analytics:r,href:s,styledAnchor:eP,children:e}):(0,ec.jsx)(ed.default,{analytics:r,styledAnchor:eP,target:i,href:a,onClick:e=>{(0,eD.getIsClient)()&&o&&window.dotcom?.showSourcePointMessage&&(e.preventDefault(),window.dotcom.showSourcePointMessage())},children:e})})},eR=({links:e=[]})=>e.length?(0,ec.jsx)(eF,{children:(0,ec.jsx)("nav",{children:(0,ec.jsx)(eH,{children:e.map((e,t)=>(0,ec.jsx)(eM,{...e},t))})})}):null;var eG=e.i(761074),eU=e.i(417183);let eV={x:{icon:"social:x",urls:{news:"https://www.x.com/bbcworld",breaking:"https://www.x.com/bbcbreaking",sport:"https://www.x.com/bbcsport",earth:"https://www.x.com/bbcearth",travel:"https://www.x.com/bbc_travel",culture:"https://www.x.com/bbc_culture",audio:"https://x.com/bbcpodcasts?lang=en",select:"https://www.x.com/bbcselect"}},facebook:{icon:"social:facebook",urls:{news:"https://www.facebook.com/bbcnews",breaking:"https://www.facebook.com/bbcnews",sport:"https://www.facebook.com/bbcsport",earth:"https://www.facebook.com/bbcearth",travel:"https://www.facebook.com/bbctravel",culture:"https://www.facebook.com/bbcculture",audio:"https://www.facebook.com/BBCPodcasts",select:"https://www.facebook.com/bbcselect",global:"https://www.facebook.com/BBCGlobalFB"},keyOverrides:{global:"BBC Global"}},instagram:{icon:"social:instagram",urls:{news:"https://www.instagram.com/bbcnews",breaking:"https://www.instagram.com/bbcnews",sport:"https://www.instagram.com/bbcsport",earth:"https://www.instagram.com/bbcearth",travel:"https://www.instagram.com/bbc_travel",culture:"https://www.instagram.com/bbc_culture",audio:"https://www.instagram.com/bbcpodcasts",select:"https://www.instagram.com/bbcselect",global:"https://www.instagram.com/bbcglobal"},keyOverrides:{global:"BBC Global"}},tiktok:{icon:"social:tiktok",urls:{news:"https://www.tiktok.com/@bbcnews",breaking:"https://www.tiktok.com/@bbcnews",sport:"https://www.tiktok.com/@bbcsport",earth:"https://www.tiktok.com/@bbcearth"}},linkedin:{icon:"social:linkedin",urls:{news:"https://www.linkedin.com/company/bbc-news/",breaking:"https://www.linkedin.com/company/bbc-news/"}},youtube:{icon:"social:youtube",urls:{news:"https://www.youtube.com/bbcnews",breaking:"https://www.youtube.com/bbcnews",sport:"https://www.youtube.com/bbcsport",earth:"https://www.youtube.com/bbcearth",select:"https://www.youtube.com/bbcselect",global:"https://www.youtube.com/@bbc_global"},keyOverrides:{global:"BBC Global"}}},eW=e=>eg.css`
  transition: 0.2s linear opacity;
  ${e&&eg.css`
    opacity: ${+("out"!==e)};
  `};
`,ez=eg.default.div.withConfig({displayName:"SocialFollowUs.styles__SocialFollowUsContainerStyled",componentId:"sc-2bdeae3a-0"})`
  ${({theme:e,$hasTopDivider:t=!1,$hasBottomDivider:n=!1})=>eg.css`
    display: flex;
    flex-wrap: wrap;
    margin: 16px 0;

    ${t&&eg.css`
      border-top: ${`1px solid ${e.container.onDefaultBG.value}`};
      padding-top: 16px;
    `};

    ${n&&eg.css`
      border-bottom: ${`1px solid ${e.container.onDefaultBG.value}`};
      padding-bottom: 16px;
    `};

    ${(0,ef.applyStylesForBreakpoints)(eg.css`
        flex-direction: column;
      `,"group2")};
  `}
`,eK=eg.default.div.withConfig({displayName:"SocialFollowUs.styles__SocialFollowUsHeaderStyled",componentId:"sc-2bdeae3a-1"})`
  /* token does not exist theme.generic.header.xSmall.bpLarge, => styles are the same anyway for all groups? */
  font-family: 'BBC Reith Sans';
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-right: 40px;

  ${(0,ef.applyStylesForBreakpoints)(eg.css`
      margin-bottom: 16px;
      margin-right: 0;

      /* token does not exist theme.generic.header.xSmall.bpSmall => styles are the same anyway for all groups? */
    `,"group2")};
`,eY=eg.default.div.withConfig({displayName:"SocialFollowUs.styles__SocialFollowUsFlexContainerStyled",componentId:"sc-2bdeae3a-2"})`
  display: flex;
  gap: 16px;
  align-items: center;

  button {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${(0,ef.applyStylesForBreakpoints)(eg.css`
      button {
        width: 28px;
        height: 28px;
      }
    `,"group2")};
`,eJ=eg.default.div.withConfig({displayName:"SocialFollowUs.styles__SocialContainerStyled",componentId:"sc-2bdeae3a-3"})`
  ${({$isActive:e,$transitionState:t})=>eg.css`
    position: relative;
    width: 100%;
    ${e&&eg.css`
      display: block;
    `}

    ${eW(t)};
  `}
`,eq=eg.default.div.withConfig({displayName:"SocialFollowUs.styles__SocialLinkContainerStyled",componentId:"sc-2bdeae3a-4"})`
  ${({theme:e})=>eg.css`
    background-color: ${e.container.onDefaultBG.value};
    flex-basis: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 16px;

    a {
      ${(0,eh.applyTypography)(e.textLink.small.regular.bpLarge)};
      text-transform: capitalize;
    }

    ${(0,ef.applyStylesForBreakpoints)(eg.css`
        margin-top: 14px;
      `,"group2")};
  `}
`,eQ=eg.default.button.withConfig({displayName:"SocialFollowUs.styles__TriangleContainerStyled",componentId:"sc-2bdeae3a-5"})`
  ${({theme:e,$isActive:t,$transitionState:n})=>eg.css`
    position: relative;

    &:hover {
      outline: ${`1px solid ${e.interactive1.onDefaultBG.hovered.value}`};
    }

    &::after {
      content: '';
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 9px solid ${e.container.onDefaultBG.value};
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      ${eW(n)};

      ${!t&&eg.css`
        visibility: hidden;
      `}

      ${(0,ef.applyStylesForBreakpoints)(eg.css`
          bottom: -14px;
        `,"group2")};
    }
  `}
`,eX=eg.default.div.withConfig({displayName:"SocialFollowUs.styles__SocialLinkInnerItemStyled",componentId:"sc-2bdeae3a-6"})`
  padding: 15px 12px;
`,eZ=eg.default.a.withConfig({displayName:"SocialFollowUs.styles__SocialLinkItemStyled",componentId:"sc-2bdeae3a-7"})`
  ${({theme:e})=>eg.css`
    color: inherit;
    padding: 7px 5px;

    &:hover {
      text-decoration: underline;
    }

    &:active,
    &:focus {
      font-weight: 700;
      text-decoration: none;
      outline: ${`1px solid ${e.interactive1.onDefaultBG.hovered.value}`};
    }
  `}
`,e0=({hasTopDivider:e,hasBottomDivider:t})=>{let n=(0,o.useRef)(null),[a,i]=(0,o.useState)(null),[s,r]=(0,o.useState)(null),{urls:l,keyOverrides:c}=(0,eG.default)(eV,a,{urls:{},keyOverrides:{}}),d=!!a&&!(0,eU.default)(l),p=Object.entries(eV);(0,o.useEffect)(()=>{if(d){let{current:e}=n;if(e){let[t]=Array.from(e.getElementsByTagName("a"));t?.focus()}}},[d,a]);let u=e=>{e.currentTarget.blur()};return(0,ec.jsxs)(ez,{"data-testid":"social-follow-us-container",$hasTopDivider:e,$hasBottomDivider:t,children:[(0,ec.jsx)(eK,{children:"Follow BBC on:"}),(0,ec.jsx)(eY,{"data-testid":"social-follow-us-icon-buttons",children:p.map(([e,{icon:t}],n)=>(0,ec.jsx)(eQ,{$isActive:e===a,$transitionState:s,"aria-label":`Follow BBC on ${e}`,onClick:()=>{if(a===e){i(null),r(null);return}a?(r("out"),setTimeout(()=>{i(e),r("in")},200)):i(t=>t===e?null:e)},children:(0,ec.jsx)(ew.default,{name:t,testId:`social-button-${e}`})},`${e}-button-${n}`))}),d&&(0,ec.jsx)(eJ,{$isActive:!!a,$transitionState:s,children:(0,ec.jsx)(eq,{ref:n,"data-testid":`social-follow-us-links-${a}`,children:Object.entries(l).map(([e,t])=>(0,ec.jsx)(ed.default,{href:t,"data-testid":`${e}-anchor`,styledAnchor:eZ,styledAnchorInner:eX,onClick:u,children:(0,eG.default)(c,e,e)},e))})})]})},e1="subliminal-banner",e2=()=>(0,ec.jsx)("div",{id:e1,"data-testid":e1}),e5=eg.default.footer.withConfig({displayName:"Footer.styles__FooterStyled",componentId:"sc-7046f1ed-0"})`
  max-width: 1280px;
  width: 100%;
  margin: 16px auto 48px auto;
  padding: 0 16px;
  box-sizing: border-box;
`,e4=eg.default.div.withConfig({displayName:"Footer.styles__LegalTextParagraphStyled",componentId:"sc-7046f1ed-1"})`
  ${({theme:e})=>eg.css`
    margin-top: 16px;
    overflow-wrap: break-word; /* stylelint-disable-line plugin/no-unsupported-browser-features */

    p {
      ${(0,eh.applyTypography)(e.footer.text.default)}
      color: ${e.nav.content.value};
    }

    b,
    a {
      ${(0,eh.applyTypography)(e.footer.text.emphasised)}
    }

    a {
      text-decoration: none;
      color: ${e.nav.content.value};
    }

    ${(0,ef.applyStylesForBreakpoints)(eg.css`
        margin-top: 24px;
      `,"group2")}
  `}
`,e3=eg.default.hr.withConfig({displayName:"Footer.styles__SeparatorStyled",componentId:"sc-7046f1ed-2"})`
  background-color: ${({theme:e,emphasis:t="lowEmphasis"})=>e.divider[t].value};
  margin-top: 120px;
  height: 1px;
  border: none;
`,e6=eg.default.div.withConfig({displayName:"Footer.styles__LogoSectionStyled",componentId:"sc-7046f1ed-3"})`
  display: flex;
`;e.s(["default",0,({mainPageUrl:e="/",languages:t,languageSubHeadline:n,languageHeadline:a,languageButtonText:i,legalLinks:o=[],contentLinks:s,testId:r,legalTextContent:l,id:c})=>{let d=(0,eu.getNavigationAnalytics)("footer","Footer BBC icon","",e,"footer");return(0,ec.jsxs)(ec.Fragment,{children:[(0,ec.jsx)(e3,{"data-testid":"main-footer-divider",emphasis:"highEmphasis"}),(0,ec.jsxs)(e5,{id:c,"data-testid":r,children:[(0,ec.jsx)(e6,{children:(0,ec.jsx)(ed.default,{analytics:d,href:e,children:(0,ec.jsx)(ew.default,{name:"logo:bbc",style:{height:30}})})}),(0,ec.jsx)(ex,{contentLinks:s}),(0,ec.jsx)(eB,{buttonText:i,languages:t,subHeadline:n,headline:a}),(0,ec.jsx)(e0,{hasTopDivider:!0}),(0,ec.jsx)(eR,{links:o}),(0,ec.jsx)(e4,{children:(0,ec.jsx)(ep.default,{blocks:l})})]}),(0,ec.jsx)(e2,{})]})}],394527);var e7=e.i(459949),e9=e.i(275349);function e8(e){this.message=e}e8.prototype=Error(),e8.prototype.name="InvalidCharacterError";var te="u">typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=String(e).replace(/=+$/,"");if(t.length%4==1)throw new e8("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,a,i=0,o=0,s="";a=t.charAt(o++);~a&&(n=i%4?64*n+a:a,i++%4)&&(s+=String.fromCharCode(255&n>>(-2*i&6))))a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a);return s};function tt(e){this.message=e}tt.prototype=Error(),tt.prototype.name="InvalidTokenError";let tn=function(e,t){if("string"!=typeof e)throw new tt("Invalid token specified");var n=+(!0!==(t=t||{}).header);try{return JSON.parse(function(e){var t,n=e.replace(/-/g,"+").replace(/_/g,"/");switch(n.length%4){case 0:break;case 2:n+="==";break;case 3:n+="=";break;default:throw"Illegal base64url string!"}try{return t=n,decodeURIComponent(te(t).replace(/(.)/g,function(e,t){var n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n}))}catch(e){return te(n)}}(e.split(".")[n]))}catch(e){throw new tt("Invalid token specified: "+e.message)}};var ta=e.i(959560),ti=e.i(57988),to=e.i(508259),ts=e.i(24768),tr=e.i(939648),tl=e.i(222009);let tc=eg.createGlobalStyle`
  #subliminal-banner {
    display: ${e=>e.$isSubscriptionAllowed?"block":"none"};
    position: sticky;
    bottom: 0;
    z-index: 9999;
  }
`,td=(0,eg.createGlobalStyle)(({$isHeaderDefaultSize:e,$isBurgerMenuOpened:t})=>{let n=e?tr.HEADER_DEFAULT_HEIGHT+42:tr.HEADER_COLLAPSED_HEIGHT,a=e?tr.HEADER_DEFAULT_HEIGHT:tr.HEADER_COLLAPSED_HEIGHT,i=tr.HEADER_HEIGHT_MOBILE;return eg.css`
      .tp-backdrop {
        background-color: rgb(255 255 255 / 70%) !important;
        backdrop-filter: blur(4px);
        top: ${n}px !important;
        ${(0,tl.applyZIndex)("level2",!1,!0)};

        ${(0,ef.applyStylesForBreakpoints)(eg.css`
            top: ${a}px !important;
          `,"group4")};

        ${(0,ef.applyStylesForBreakpoints)(eg.css`
            top: ${i}px !important;
          `,"group2")};
      }

      .tp-modal {
        top: ${n}px !important;
        display: grid;
        place-content: center;
        ${(0,tl.applyZIndex)(t?"level2":"level3",!0,!0)};

        .tp-iframe-wrapper {
          margin-block: 0 !important;
        }

        ${(0,ef.applyStylesForBreakpoints)(eg.css`
            top: ${a}px !important;
          `,"group4")};

        ${(0,ef.applyStylesForBreakpoints)(eg.css`
            top: ${i}px !important;
            place-content: start;
          `,"group2")};
      }
    `}),tp=eg.createGlobalStyle`
  .tp-modal .tp-close.tp-active {
    display: none !important;
  }

  .tp-modal {
    background-color: #f7f2ea !important;
  }

  .tp-iframe-wrapper {
    margin: 0 auto !important;
    box-shadow: none !important;
  }
`,tu=()=>{let[e]=(0,ti.useCurrentSlug)();return"subscribe"===e},tg=({isHeaderDefaultSize:e,isBurgerMenuOpened:t})=>{let n,i=tu(),{isSubscriptionAllowed:s}=(0,a.useSubscriptionContext)(),[r,l]=(0,o.useState)(!1),[c,d]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{window.tp.push(["init",()=>l(!0)]),window.tp.push(["addHandler","showOffer",()=>d(!0)])},[]),(e=>{let{data:t}=(0,ta.default)("authInfo"),{statusUrl:n}=t||{},[a]=(0,ti.useCurrentSlug)();(0,o.useEffect)(()=>{if("managesubscription"===a&&e){let e=(0,u.getCookie)(ts.SUBSCRIPTION_SETTINGS_COOKIE),{authLevel2Expiry:t}=e?tn(String(e)):{},a=Math.round(new Date().getTime()/1e3);!t||t<a?window.location.href=`${n}${ts.SUBSCRIPTION_SETTINGS_MANAGEMENT}?web=true&ptrt=${window.location.href}`:window.tp.myaccount.show({displayMode:"inline",containerSelector:"#bbc-main",activateTemplateInteraction:!0})}},[n,a,e])})(r),(e=>{let[t]=(0,ti.useCurrentSlug)();(0,o.useEffect)(()=>{let t=new URLSearchParams(window.location.search).get("accountMarketingPreferences");if(t&&e){var n;n=[{field_name:ts.CUSTOM_FORM_FIELD_NAME,value:"on"===t?"true":"false"}],window.tp.api.callApi("/anon/user/get",{},async e=>{let t=er.appConfig.getValue(el.ConfigSettings.PianoApi),a=window.tp?.aid,i=window.tp?.pianoId?.getToken(),o=`${t}/identity/userinfo?lang=en_US&aid=${a}&access_token=${i}`,s=e?.user?.uid;a&&i&&s?await fetch(o,{method:"PUT",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify({uid:s,form_name:ts.CUSTOM_FORM,custom_field_values:n})}).then(e=>{e.ok?to.logger.info("Custom fields updated successfully"):to.logger.error("Failed to update custom fields")}).catch(e=>{to.logger.error("Error updating custom fields:",e)}):to.logger.error(`Piano API credentials are missing: [pianoAid: ${a}, pianoToken: ${i}, pianoUid: ${s}]`)})}},[e,t])})(r),(()=>{let[e]=(0,ti.useCurrentSlug)();(0,o.useEffect)(()=>{"subscribe"===e&&window.tp.push(["addHandler","checkoutCustomEvent",e=>{"checkout-attempt"===e.eventName&&document?.querySelector(".tp-iframe-wrapper.tp-active")?.scrollIntoView({behavior:"smooth"})}])},[e])})(),n=tu(),(0,o.useEffect)(()=>{let e=new MutationObserver(e=>{e.forEach(e=>{let{type:t}=e,n=e.target;"attributes"===t&&n.matches("div.tp-backdrop")&&(n.classList.contains("tp-active")&&document.body.setAttribute("style","overflow: hidden"),n.classList.contains("tp-active")||document.body.removeAttribute("style"))})});return n||e.observe(document.body,{attributes:!0,subtree:!0,attributeFilter:["class"]}),()=>{e.disconnect(),document.body.removeAttribute("style")}},[n]),(e=>{let[t,n]=(0,o.useState)({}),[a,i]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let e,t,a;e=window?.embeddedMedia?.api,t=0,a=setInterval(()=>{if(!e||!e.players)return;t+=1;let i=0===Object.keys(e?.players()??{}).length;if(i&&40===t){to.logger.warn("embeddedMedia.api.players() returned no players after 40 attempts"),clearInterval(a);return}i||(n(e.players()),clearInterval(a))},100)},[]),(0,o.useEffect)(()=>{if(Object.keys(t).length>0)for(let[,e]of Object.entries(t))e.bind("playbackInterrupted",()=>i(!0));if(!a&&e)for(let[,e]of Object.entries(t))e.stop();if(a&&e)for(let[,e]of Object.entries(t))setTimeout(()=>{e.loadPlaylist({}),e.stop()},1500)},[t,e,a])})(c),(0,ec.jsxs)(ec.Fragment,{children:[(0,ec.jsx)(tc,{$isSubscriptionAllowed:s}),(0,ec.jsx)(i?tp:td,{$isHeaderDefaultSize:e,$isBurgerMenuOpened:t})]})};var tf=e.i(276045);let th=Object.keys(e.i(195214).breakpoints).reverse(),tm=eg.default.div.withConfig({displayName:"WatchLive.styles__WatchLiveStyled",componentId:"sc-6555d0cd-0"})`
  ${({theme:e,$visibleForBreakpoints:t})=>eg.css`
    position: relative;
    padding: 8px;
    height: 32px;

    a::before {
      position: absolute;
      content: '';
      inset: 0;
    }

    &:hover {
      background-color: ${e.nav.level1.bgHover.value};
    }

    ${th.map(e=>{let n=t.includes(e),a=eg.css`
        display: ${n?"inline-flex":"none"};
        align-items: center;
      `;return"group6"===e?a:(0,ef.applyStylesForBreakpoints)(a,e)})};

    ${(0,eh.applyTypography)(e.button.medium)};

    ${(0,ef.applyStylesForBreakpoints)(eg.css`
        padding-block: 6px;
      `,"group2")};
  `};
`,ty=eg.default.span.withConfig({displayName:"WatchLive.styles__WatchLiveContentStyled",componentId:"sc-6555d0cd-1"})`
  display: inline-flex;
  align-items: center;
  column-gap: 4px;
`,tv=eg.default.span.withConfig({displayName:"WatchLive.styles__WatchLiveIconStyled",componentId:"sc-6555d0cd-2"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  aspect-ratio: 1;

  svg {
    height: 16px;
    width: 16px;
  }
`,tb=({withAnimation:e=!1,visibleForBreakpoints:t=[]})=>{let{worldNewsTvPath:n}=(0,tf.useWorldNewsData)();return n?(0,ec.jsx)(tm,{$visibleForBreakpoints:t,children:(0,ec.jsx)(ed.default,{analyticsProps:{item_name:"WatchLive - Watch Live",item_type:"watch_live_button"},href:n,children:(0,ec.jsxs)(ty,{children:[(0,ec.jsx)(tv,{children:(0,ec.jsx)(ew.default,{name:"content-types:live",withAnimation:e})}),(0,ec.jsx)("span",{children:"Watch Live"})]})})}):null};e.s(["default",0,tb],871071);let tx=eg.default.header.withConfig({displayName:"Header.styles__HeaderStyled",componentId:"sc-36071384-0"})`
  ${({theme:e,$isHeaderDefaultSize:t,$isPianoModalVisible:n=!1})=>eg.css`
    position: ${n?"fixed":"sticky"};
    top: 0;
    left: 0;
    right: 0;
    height: ${t?tr.HEADER_DEFAULT_HEIGHT:tr.HEADER_COLLAPSED_HEIGHT}px;
    background-color: ${e.nav.level1.bgDefault.value};
    border-bottom: 1px solid ${e.nav.lines.value};
    ${(0,tl.applyZIndex)("level4")};
    transition: height 0.5s ease;

    ${(0,ef.applyStylesForBreakpoints)(eg.css`
        height: ${tr.HEADER_HEIGHT_MOBILE}px;
      `,"group2")};
  `};
`,tw=eg.default.div.withConfig({displayName:"Header.styles__HeaderContentStyled",componentId:"sc-36071384-1"})`
  ${({$isHeaderDefaultSize:e})=>eg.css`
    position: relative;
    display: flex;
    align-items: center;
    height: ${e?"56px":"40px"};
    padding: 12px 16px;
    transition: height 0.5s ease;

    ${(0,ef.applyStylesForBreakpoints)(eg.css`
        height: 48px;
        padding: 0 12px;
      `,"group2")};
  `}
`,tS=eg.default.div.withConfig({displayName:"Header.styles__HeaderLogoStyled",componentId:"sc-36071384-2"})`
  ${({$isHeaderDefaultSize:e})=>eg.css`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: 40px;
      width: auto;
      transition: height 0.5s ease;

      ${!e&&eg.css`
        height: 30px;
      `}

      ${(0,ef.applyStylesForBreakpoints)(eg.css`
          height: 30px;

          ${!e&&eg.css`
            height: 24px;
          `}
        `,"group2")};
    }
  `}
`,t_=eg.default.button.withConfig({displayName:"Header.styles__HeaderMenuButtonStyled",componentId:"sc-36071384-3"})`
  ${({theme:e,$isBurgerMenuOpened:t})=>eg.css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${e.interactive3.onDefaultBG.default.value};

    &:hover {
      background-color: ${e.interactive3.onDefaultBG.hovered.value};
    }

    ${t&&eg.css`
      height: 36px;
      width: 36px;
    `}
  `};
`,t$=eg.default.div.attrs({className:"hide-when-no-script"}).withConfig({displayName:"Header.styles__HeaderMenuContainerStyled",componentId:"sc-36071384-4"})`
  ${({$isBurgerMenuOpened:e})=>eg.css`
    flex: 1;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: ${e?26:12}px;
  `};
`,tk=eg.default.div.withConfig({displayName:"Header.styles__HeaderLogoContainerStyled",componentId:"sc-36071384-5"})`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 32px;
`,tN=eg.default.div.withConfig({displayName:"Header.styles__HeaderButtonsContainerStyled",componentId:"sc-36071384-6"})`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
  height: 40px;
`,tI=({isBurgerMenuOpened:e,onClick:t,buttonRef:n})=>(0,ec.jsx)(t_,{ref:n,onClick:t,role:"button","aria-expanded":e,"aria-label":e?"Close menu":"Open menu",$isBurgerMenuOpened:e,children:(0,ec.jsx)(ew.default,{name:e?"actions:close":"actions:toggle",width:20,height:20,"aria-hidden":!0})}),tC=(0,o.forwardRef)(({isBurgerMenuOpened:e,onToggleMenuClick:t,onHeaderLogoClick:n,mainPageUrl:a,actions:i,toggleMenuButtonRef:s,isHeaderDefaultSize:r,id:l},c)=>{let[d,p]=(0,o.useState)(!1),u=(0,eu.getNavigationAnalytics)("header","Header BBC icon","",a.toString(),"header");return(0,e9.useBackdropObserver)(p,"piano"),(0,ec.jsx)(tx,{id:l,ref:c,$isHeaderDefaultSize:r,$isPianoModalVisible:d,children:(0,ec.jsxs)(tw,{$isHeaderDefaultSize:r,children:[(0,ec.jsxs)(t$,{$isBurgerMenuOpened:e,children:[(0,ec.jsx)(tI,{buttonRef:s,onClick:t,isBurgerMenuOpened:e}),(0,ec.jsx)(tb,{withAnimation:!0,visibleForBreakpoints:["group6","group5","group4","group3"]})]}),(0,ec.jsx)(tk,{children:(0,ec.jsx)(tS,{onClick:n,$isHeaderDefaultSize:r,children:(0,ec.jsx)(ed.default,{href:a,analytics:u,children:(0,ec.jsx)(ew.default,{name:"logo:bbc"})})})}),(0,ec.jsxs)(tN,{children:[(0,ec.jsx)(tg,{isHeaderDefaultSize:r,isBurgerMenuOpened:e}),(0,ec.jsx)(e7.AccountButtons,{actions:i,onToggleMenuClick:t,isBurgerMenuOpened:e})]})]})})});e.s(["default",0,tC],219717);var tT=e.i(84541);let tj=eg.default.div.withConfig({displayName:"DismissableError.styles__DismissibleErrorContainerStyled",componentId:"sc-c275520f-0"})`
  ${({theme:e})=>eg.css`
    position: absolute;
    left: 0;
    right: 0;
    width: auto;
    background-color: ${e.errorBanner.bg.value};
    display: flex;
    height: 52px;
    padding: 8px 16px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    z-index: 500;
  `};
`,tE=eg.default.div.withConfig({displayName:"DismissableError.styles__DismissibleErrorInnerContainerStyled",componentId:"sc-c275520f-1"})`
  max-width: 932px;
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`,tA=eg.default.p.withConfig({displayName:"DismissableError.styles__DismissibleErrorTextStyled",componentId:"sc-c275520f-2"})`
  ${({theme:e})=>(0,eh.applyTypography)(e.errorBannerText.bpLarge)};
  color: #ffffff;
`;e.s(["default",0,({errorString:e,onClick:t})=>(0,ec.jsx)(tj,{"data-testid":"dismissable-error",children:(0,ec.jsxs)(tE,{children:[(0,ec.jsx)(tA,{children:e}),(0,ec.jsx)(tT.default,{icon:"actions:close",onClick:t})]})})],967223)},551068,e=>{"use strict";var t=e.i(760814),n=e.i(339228),a=e.i(570549),i=e.i(222009),o=e.i(680516);let s=t.default.section.withConfig({displayName:"Navigation.styles__NavigationSectionStyled",componentId:"sc-f1c1fa10-0"})`
  ${({theme:e,isFit:a})=>t.css`
    border-bottom: 1px solid ${e.nav.lines.value};
    position: relative;
    text-align: center;
    overflow: hidden;
    line-height: 0;
    max-width: 100vw;

    ${!a&&t.css`
      height: 0;
      border-bottom-color: transparent;
    `};

    ${(0,i.applyZIndex)("level3")};

    ${(0,n.applyStylesForBreakpoints)(t.css`
        border-bottom: none;
        display: none;
      `,"group4")};
  `};
`,r=t.default.nav.withConfig({displayName:"Navigation.styles__NavigationWrapper",componentId:"sc-f1c1fa10-1"})`
  display: inline-block;
  overflow-x: hidden;
  white-space: nowrap;
  margin-bottom: -1px;
`,l=t.default.ul.withConfig({displayName:"Navigation.styles__MainNavigationWrapper",componentId:"sc-f1c1fa10-2"})`
  list-style-type: none;
  display: flex;
  padding: 0;
  margin: 0;
  align-self: center;

  ${(0,n.applyStylesForBreakpoints)(t.css`
      display: none;
    `,"group4")};
`,c=t.default.li.withConfig({displayName:"Navigation.styles__MainNavigationItemStyled",componentId:"sc-f1c1fa10-3"})`
  ${({isActive:e,isSpecial:n,isNews:a,theme:i})=>t.css`
    position: relative;

    ${e&&t.css`
      &::after {
        content: '';
        width: 100%;
        height: 4px;
        background-color: ${a?i.bbcNewsLogo.onDefaultBG.default.value:"#000000"};
        position: absolute;
        left: 0;
        bottom: 0;
      }
    `}

    ${n&&t.css`
      &::before {
        content: '';
        position: absolute;
        width: 1px;
        height: 30px;
        background: ${i.nav.lines.value};
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    `}
  `};
`,d=t.default.a.withConfig({displayName:"Navigation.styles__MainNavigationLink",componentId:"sc-f1c1fa10-4"})`
  ${({theme:e,$isActive:n})=>t.css`
    position: relative;
    display: block;
    color: ${e.nav.content.value};
    cursor: pointer;
    padding: 12px 8px;

    &:hover {
      background-color: ${({theme:e})=>e.nav.level1.bgHover.value};
    }

    ${(0,a.applyTypography)(e.nav.topbar.level1[n?"selected":"default"])};
  `}
`,p=t.default.li.withConfig({displayName:"Navigation.styles__SubNavigationItemStyled",componentId:"sc-f1c1fa10-5"})`
  ${({isSpecial:e,theme:n})=>t.css`
    position: relative;
    display: inline-block;
    border-left: 1px solid ${e?n.nav.lines.value:"transparent"};

    &[data-hidden='true'] {
      display: none;
    }
  `}
`,u=(0,t.default)(d).withConfig({displayName:"Navigation.styles__SubNavigationLink",componentId:"sc-f1c1fa10-6"})`
  ${({theme:e,$isInverse:n,$isActive:i})=>t.css`
    ${n&&t.css`
      color: ${e.text.onInverseBG.default.value};
    `}

    padding: 8px;
    ${(0,a.applyTypography)(e.nav.topbar.level2[i?"selected":"default"])};

    &:hover {
      ${n&&t.css`
        color: ${e.text.default.value};
      `}
      background-color: ${({theme:e})=>e.nav.level2.bgHover.value};
    }
  `};
`,g=t.default.li.withConfig({displayName:"Navigation.styles__DropDownNavigationItemStyled",componentId:"sc-f1c1fa10-7"})`
  text-align: left;

  & + & {
    margin-top: 16px;
  }
`,f=t.default.a.withConfig({displayName:"Navigation.styles__DropDownNavigationLinkStyled",componentId:"sc-f1c1fa10-8"})`
  ${({theme:e,$isActive:n})=>t.css`
    display: block;
    text-decoration: none;
    color: ${e.nav.content.value};
    ${(0,a.applyTypography)(e.nav.topbar.level2.default)};

    ${n&&t.css`
      font-weight: bold;
    `}
  `};
`,h=t.default.nav.withConfig({displayName:"Navigation.styles__NavigationContainerStyled",componentId:"sc-f1c1fa10-9"})`
  ${({theme:e,$priority:a,$top:s,$showNavOnScroll:r})=>t.css`
    ${(0,i.applyZIndex)(a?"level3":"level2")};
    position: sticky;
    background-color: ${e.nav.background.value};
    top: ${Math.max(s,o.DEFAULT_HEADER_HEIGHT)}px;
    left: 0;
    right: 0;
    transform: ${r?"translateY(0)":"translateY(-150%)"};
    transition: transform 0.5s ease;

    ${(0,n.applyStylesForBreakpoints)(t.css`
        height: 0;
      `,"group4")};
  `};
`,m=t.default.div.withConfig({displayName:"Navigation.styles__NestedNavItemLinkStyled",componentId:"sc-f1c1fa10-10"})`
  ${({$isClicked:e})=>t.css`
    ${e&&t.css`
      pointer-events: none;
    `};
  `}

  width: 100%;
  height: 100%;

  a {
    padding: 0 8px;
    width: 100%;
    height: 100%;
    text-align: left;
    align-items: center;
    vertical-align: bottom;
    display: flex;
  }
`;e.s(["DropDownNavigationItemStyled",0,g,"DropDownNavigationLinkStyled",0,f,"MainNavigationItemStyled",0,c,"MainNavigationLink",0,d,"MainNavigationWrapper",0,l,"NavigationContainerStyled",0,h,"NavigationSectionStyled",0,s,"NavigationWrapper",0,r,"NestedNavItemLinkStyled",0,m,"SubNavigationItemStyled",0,p,"SubNavigationLink",0,u])},907182,362132,771340,357391,e=>{"use strict";var t=e.i(391398),n=e.i(191788),a=e.i(184919),i=e.i(249356),o=e.i(154738),s=e.i(959560),r=e.i(117191),l=e.i(257539),c=e.i(57988),d=e.i(660021),p=e.i(149250),u=e.i(317166),g=e.i(333109),f=e.i(240911),h=e.i(394527),m=e.i(219717),y=e.i(967223),v=e.i(849766),b=e.i(680516),x=e.i(102358),w=e.i(468364),S=e.i(893409),_=e.i(546795),$=e.i(924257),k=e.i(551068);let N=(0,n.memo)(e=>{let{isSpecial:n,externalTarget:a,externalUrl:i,title:o,isActive:s,isNewsPage:r=!1}=e,l=e.path||"";"/home"===l&&(l="/");let c={$isActive:s,"data-testid":`${b.MAIN_NAVIGATION_LINK_TEST_ID}${s?"-active":""}`},d=(0,$.useExternalTarget)(l,a),p=(0,x.getNavigationAnalytics)("main",o,i,l,"main_navigation");return(0,t.jsx)(k.MainNavigationItemStyled,{isActive:s,isSpecial:n,isNews:r,"data-testid":b.MAIN_NAVIGATION_ITEM,children:i?(0,t.jsx)(k.MainNavigationLink,{"data-testid":b.MAIN_NAVIGATION_LINK_TEST_ID,$isActive:s,href:(0,_.appendQueryParamsToUrl)(i),target:d,onClick:()=>p&&window.analytics.sendEvent(p),children:o}):(0,t.jsx)(S.default,{analytics:p,href:l,styledAnchor:k.MainNavigationLink,styledAnchorProps:c,children:o})})}),I=(0,n.memo)(({isSpecial:e,externalTarget:n,externalUrl:a,title:i,path:o="",isActive:s})=>{let r={$isActive:s,"data-testid":`${b.SUB_NAVIGATION_LINK_TEST_ID}${s?"-active":""}`},l=(0,$.useExternalTarget)(o,n),c=(0,x.getNavigationAnalytics)("sub",i,a,o,"main_navigation");return(0,t.jsx)(k.SubNavigationItemStyled,{isSpecial:e,children:a?(0,t.jsx)(k.SubNavigationLink,{"data-testid":b.SUB_NAVIGATION_LINK_TEST_ID,onClick:()=>c&&window.analytics.sendEvent(c),$isActive:s,href:(0,_.appendQueryParamsToUrl)(a),target:l,children:i}):(0,t.jsx)(S.default,{analytics:c,href:o,styledAnchor:k.SubNavigationLink,styledAnchorProps:r,children:i})})}),C=(0,n.memo)(({title:e,externalTarget:n,externalUrl:a,path:i="",isActive:o})=>{let s=(0,$.useExternalTarget)(i,n),r={$isActive:o,"data-testid":`${b.DROPDOWN_NAVIGATION_ITEM_TEST_ID}${o?"-active":""}`},l=(0,x.getNavigationAnalytics)("dropdown",e,a,i,"main_navigation");return(0,t.jsx)(k.DropDownNavigationItemStyled,{children:a?(0,t.jsx)(k.DropDownNavigationLinkStyled,{"data-testid":b.DROPDOWN_NAVIGATION_ITEM_EXTERNAL_ID,onClick:()=>l&&window.analytics.sendEvent(l),target:s,href:(0,_.appendQueryParamsToUrl)(a),$isActive:o,children:e}):(0,t.jsx)(S.default,{analytics:l,href:i,styledAnchor:k.DropDownNavigationLinkStyled,styledAnchorProps:r,children:e})})}),T=(0,n.memo)(({activeMainNavigationItemTitle:e,navigationData:a=[],isNavVisible:i,testId:o,onNavVisibleChange:s,isNewsPage:r,isHomePage:l})=>{let c=(0,n.useRef)(null),d=(0,n.useRef)(null),p=(0,n.useCallback)(()=>{c?.current&&d?.current&&s((0,x.isParentWiderThanChild)(c,d))},[c,d,s]);return(0,w.useResizeObserver)(c,p),(0,t.jsx)(k.NavigationSectionStyled,{"data-testid":o,ref:c,isFit:i,children:(0,t.jsx)(k.NavigationWrapper,{ref:d,children:(0,t.jsx)(k.MainNavigationWrapper,{children:a.map((n,a)=>(0,t.jsx)(N,{isNewsPage:r,isActive:l?"/home"===n.path||"/"===n.path:e===n.title,...n},a))})})})});var j=e.i(459949),E=e.i(65739),A=e.i(760814),L=e.i(339228);let B=A.default.ul.withConfig({displayName:"SubNavigation.styles__SubNavigationListStyled",componentId:"sc-6091112f-0"})`
  display: inline-block;
`,D=A.default.nav.withConfig({displayName:"SubNavigation.styles__SubNavigationInnerStyled",componentId:"sc-6091112f-1"})`
  white-space: nowrap;
  margin-bottom: -1px;
  display: block;

  & + & {
    border-top: 1px solid ${({theme:e})=>e.nav.lines.value};
  }
`,F=A.default.nav.withConfig({displayName:"SubNavigation.styles__SubNavigationContainerStyled",componentId:"sc-6091112f-2"})`
  ${({theme:e,$isLive:t})=>A.css`
    border-bottom: 1px solid ${e.nav.lines.value};
    position: relative;
    text-align: center;

    ${!t&&A.css`
      display: block;
      ${(0,L.applyStylesForBreakpoints)(A.css`
          display: none;
        `,"group4")};
    `};

    ${t&&A.css`
      display: block;
      ${(0,L.applyStylesForBreakpoints)(A.css`
          display: none;
        `,"group2")};
    `};
  `};
`,H=(0,n.memo)(({items:e,activeSubNavigationItemTitle:a,isLivePage:i})=>{let o=(0,n.useRef)(null),[s,r]=(0,n.useState)(e.length),[l,c]=(0,n.useState)(0),[d,p]=(0,n.useState)(!1),u=s>0&&s<e.length,g=(0,n.useMemo)(()=>{let n=e.slice(s);return(0,t.jsx)(t.Fragment,{children:n.map((e,n)=>(0,t.jsx)(C,{...e,isActive:a===e.title},n))})},[e,s]),f=(0,n.useCallback)(()=>p(e=>!e),[]),h=(0,n.useCallback)(()=>p(!1),[]);return(0,w.useResizeObserver)(o,(0,x.checkResponsiveFitment)(r,l)),(0,n.useEffect)(()=>{c(6*Math.max(...e.map(({title:e})=>e.length)))},[e]),(0,t.jsx)(F,{"data-testid":b.SUB_NAVIGATION,$isLive:i,children:(0,t.jsx)(D,{ref:o,children:(0,t.jsxs)(B,{children:[e.map((e,n)=>(0,t.jsx)(I,{...e,isActive:a===e.title},n)),u&&(0,t.jsxs)(j.Dropdown,{type:"subNav",overlay:g,isOpen:d,onDropdownToggle:f,onDropdownClose:h,children:["More ",(0,t.jsx)(E.default,{name:d?"arrows:arrow-up":"arrows:arrow-down"})]})]})})})}),O=(0,n.forwardRef)(({navigationData:e=[],headerHeight:n,isNavVisible:a,onNavVisibleChange:i,testId:o,showNavOnScroll:s},r)=>{let l=(0,c.useCurrentSlug)(),{error:d,clearError:p}=(0,v.useDismissibleError)(),{subNavigationItems:u,levels:g,isNewsPage:f,isHomePage:h,isLivePage:m}=(0,x.getActiveNavigationTree)(l,e),w=!!u?.length,S=g?.[0]?.title||"",_=g?.[1]?.title||"";return(0,t.jsxs)(k.NavigationContainerStyled,{"data-testid":b.NAVIGATION_TEST_ID,id:b.NAVIGATION_ID,ref:r,$top:n,$priority:!0,$showNavOnScroll:s,children:[(0,t.jsx)(T,{isHomePage:h,isNewsPage:f,activeMainNavigationItemTitle:S,navigationData:e,isNavVisible:a,onNavVisibleChange:i,testId:o}),d&&(0,t.jsx)(y.default,{errorString:d,onClick:p}),a&&w&&(0,t.jsx)(H,{isLivePage:m,items:u,activeSubNavigationItemTitle:_})]})}),P=(0,n.memo)(O);var M=e.i(292580),R=e.i(222009);let G=A.default.div.withConfig({displayName:"Drawer.styles__DrawerBackgroundStyled",componentId:"sc-211ba7ec-0"})`
  ${({theme:e,direction:t,animated:n,isOpen:a,offsetTop:i})=>A.css`
    position: fixed;
    display: block;
    bottom: 0;
    width: 100%;
    background-color: ${e.nav.background.value};
    visibility: ${a?"unset":"hidden"};

    ${(0,R.applyZIndex)("level3")};
    ${n&&A.css`
      transition: transform 0.1s ease-in-out;
    `};

    ${(()=>{switch(t){case"left":return A.css`
            top: ${i}px;
            left: 0;
            width: 320px;

            ${(0,L.applyStylesForBreakpoints)(A.css`
                width: 100%;
              `,"group2")};

            ${!a&&A.css`
              transform: translateX(-100%);
            `};
          `;case"right":return A.css`
            top: ${i}px;
            right: 0;
            width: 320px;

            ${(0,L.applyStylesForBreakpoints)(A.css`
                width: 100%;
              `,"group2")};

            ${!a&&A.css`
              transform: translateX(100%);
            `};
          `;default:return A.css`
            height: 65vh;
            ${!a&&A.css`
              transform: translateY(100%);
            `};
          `}})()};
  `};
`,U=({direction:e="left",isOpen:a=!1,children:i,testId:o,animated:s,onToggleOpen:r,offsetTop:l=0})=>{let c=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(!a||!c.current)return;let e=c.current,t=Array.from(e.querySelectorAll("a[href],button,input")).filter(e=>!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden"));t.length>0&&t[0].focus();let n=e=>{if("Tab"!==e.key)return;let n=t[0],a=t[t.length-1];document.activeElement===a&&(e.preventDefault(),n.focus())};return e.addEventListener("keydown",n),()=>{e.removeEventListener("keydown",n)}},[a]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(M.default,{isOpen:a,testId:o,offsetTop:l,onClick:r,variant:"lightest"}),(0,t.jsx)(G,{"data-testid":"drawer-background",animated:s,isOpen:a,direction:e,offsetTop:l,ref:c,children:i})]})};var V=e.i(704570),W=e.i(581620);let z=function(e){let t=new URLSearchParams(e),n=t.toString().length>0?`?${t.toString()}`:"";return`/${W.SEARCH_SLUG}${n}`};e.s(["getSearchUrl",0,z],362132);var K=e.i(746857);function Y(e){let[t,a]=(0,n.useState)(""),i=(0,K.useAppRouter)(),o=(0,n.useCallback)(t=>{if(!t)return;let n=z({q:t});i.push(n).then(()=>{a(""),e?.()})},[i,e]);return{searchText:t,setSearchText:a,onSearchClick:o}}e.s(["useSearch",0,Y],771340);var J=e.i(84541),q=e.i(901414),Q=e.i(324951);let X=A.default.span.withConfig({displayName:"VisuallyHidden.styles__VisuallyHiddenStyled",componentId:"sc-69248fc2-0"})`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`,Z=({as:e,testId:n,children:a})=>(0,t.jsx)(X,{"data-testid":n,as:e,children:a});var ee=e.i(567290),et=e.i(570549);let en=A.default.div.withConfig({displayName:"SearchInput.styles__SearchInputWrapperStyled",componentId:"sc-50f6a0bc-0"})`
  ${({$isPopulated:e,$isNavigationSearch:t,theme:n})=>A.css`
    position: relative;
    display: flex;
    border: 1px solid ${n.search.field.borderDefault.value};
    width: 100%;
    height: ${t?"44px":"52px"};
    background-color: ${n.search.field.background.value};

    &:focus-within,
    &:hover {
      border: 2px solid ${n.search.field.borderFocused.value};
      margin: -1px;
    }

    & svg[icon='search'] {
      width: 20px;
      height: 20px;
    }

    & svg[icon='close'] {
      width: ${t?"12px":"20px"};
      height: ${t?"12px":"20px"};
    }

    ${ee.GeneralButton} {
      width: ${t?"44px":"52px"};
      height: ${t?"44px":"52px"};
      outline: 1px solid ${n.search.button.default.value};

      & span {
        width: 18px;
      }
    }

    ${ee.UnboxedButton} {
      width: ${t?"44px":"52px"};
      height: ${t?"44px":"52px"};
      outline: 0;
      border: 0;

      &:hover {
        background-color: ${n.search.field.background.value};
        color: ${n.search.button.default.value};
        outline: 0;
        border: 0;
      }
    }

    ${!e&&A.css`
      &:hover {
        border: 2px solid ${n.search.field.borderHover.value};
        margin: -1px;
        & ${ee.GeneralButton} {
          background-color: ${n.interactive1.onDefaultBG.hovered.value};
          border: 2px solid ${n.interactive1.onDefaultBG.hovered.value};
          outline: 0;
        }
      }
    `};
  `}
`,ea=A.default.input.withConfig({displayName:"SearchInput.styles__SearchInputStyled",componentId:"sc-50f6a0bc-1"})`
  ${({theme:e,$isNavigationSearch:t})=>A.css`
    flex: 1;
    border: none;
    outline: none;
    color: ${e.search.text.default.value};
    padding: ${t?"13px 0 13px 13px":"15px 0 15px 12px"};
    ${t?(0,et.applyTypography)(e.searchMenuText.bpLarge):(0,et.applyTypography)(e.searchText.bpLarge)};
    font-size: 16px;
    width: 40px;

    ${(0,L.applyStylesForBreakpoints)(A.css`
        ${t?(0,et.applyTypography)(e.searchMenuText.bpSmall):(0,et.applyTypography)(e.searchText.bpSmall)};
        font-size: 16px;
      `,"group2")}
  `}
`,ei=A.default.div.withConfig({displayName:"SearchInput.styles__SuggestionsWrapperStyled",componentId:"sc-50f6a0bc-2"})`
  ${({theme:e})=>A.css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 13px;
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    width: 100%;
    box-sizing: border-box;
    background-color: ${e.search.menu.background.value};
    border: 1px solid ${e.search.menu.backgroundBorder.value};
    z-index: 8;
  `}
`,eo=A.default.div.withConfig({displayName:"SearchInput.styles__SuggestionsItemStyled",componentId:"sc-50f6a0bc-3"})`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  font-family: ${({theme:e})=>e.fontFamilies.bbcReithSerif};
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.01em;

  &:not(:last-of-type) {
    margin-bottom: 12px;
  }

  b {
    font-weight: 500;
    display: inline;
  }
`,es=({suggestions:e,searchText:n,onSuggestionClick:a,testId:i})=>(0,t.jsx)(ei,{"data-testid":i,children:e.map((e,i)=>(0,t.jsx)(eo,{"data-testid":"suggestions-item",onClick:()=>a(e),children:(0,t.jsx)(er,{text:e,keyword:n})},i))}),er=({text:e,keyword:n})=>(0,t.jsx)(t.Fragment,{children:((e,n)=>{if(""===n)return e;let a=RegExp(`^${n}`,"i"),i=e.split(a),[o,s]=i;return 1===i.length?o:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("b",{children:e.match(a)}),s]})})(e,n)}),el=(0,n.forwardRef)(({isNavigationSearch:e=!1,placeholderText:a="Search news, topics and more",searchText:i,suggestions:o=[],onSearchTextChange:s,onSearch:r,isHomePage:l=!1,isOpenNavPanel:c=!1,isOnNavPanel:d=!1},p)=>{let[u,g]=(0,n.useState)(!1),f=(0,n.useRef)(null),h=(0,n.useRef)(!1),[m,y]=(0,q.useBreakpoints)("SearchInput"),[v,b]=(0,n.useState)(!0),[x,w]=(0,n.useState)(!1),S=(0,n.useRef)(null),_=(0,n.useId)();(0,n.useImperativeHandle)(p,()=>S.current);let $=()=>{i&&(r(i),g(!1))},k=(0,n.useCallback)(e=>{s(e),g(!1)},[s]),N=(0,n.useCallback)(()=>{k("")},[k]);return(0,Q.useOutsideClicker)(f,()=>{g(!1)}),(0,n.useEffect)(()=>{h.current=l&&y},[m]),(0,n.useEffect)(()=>{x||c||!h.current||setTimeout(()=>{let e=document.getElementsByTagName("header");e[0]&&(e[0].style.position="sticky");let t=document.getElementById("bbc-main");t&&(t.style.marginTop="unset")},100)},[x,c]),d?c?setTimeout(()=>{v&&(b(!1),setTimeout(()=>{S.current?.focus()},100))},100):v||b(!0):v&&b(!1),(0,t.jsxs)(en,{ref:f,$isPopulated:!!i,$isNavigationSearch:e,"data-testid":"search-input-wrapper",children:[(0,t.jsx)("label",{htmlFor:_,children:(0,t.jsx)(Z,{children:"Site search"})}),(0,t.jsx)(ea,{ref:S,id:_,type:"text",placeholder:a,value:i,"data-testid":"search-input-field",$isNavigationSearch:e,onChange:e=>{let{target:{value:t}}=e;s(t),g(!!t.length)},onKeyDown:e=>{"Enter"===e.key&&$()},onFocus:()=>{if(w(!0),h.current){let e=document.getElementsByTagName("header");e[0]&&(e[0].style.position="fixed");let t=document.getElementById("bbc-main");t&&(t.style.marginTop="90px")}},onBlur:()=>{w(!1)},disabled:v}),!!i&&(0,t.jsx)(J.default,{icon:"actions:close",testId:"search-input-clear-button",onClick:N,type:"unboxed",ariaLabel:"Clear"}),(0,t.jsx)(J.default,{icon:"actions:search",testId:"search-input-search-button",onClick:$,"aria-label":"Search"}),u&&!!o.length&&(0,t.jsx)(es,{testId:"suggestions-box",suggestions:o,searchText:i,onSuggestionClick:k})]})});e.s(["default",0,el],357391);var ec=e.i(871071);let ed=A.default.div.withConfig({displayName:"NavigationPanel.styles__DrawerContentStyled",componentId:"sc-f752c3ab-0"})`
  box-sizing: border-box;
  overflow-y: scroll;
  padding: 0 8px;
  height: 100%;
`,ep=A.default.div.withConfig({displayName:"NavigationPanel.styles__IconWrapperStyled",componentId:"sc-f752c3ab-1"})`
  transform: ${({isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  transition: transform 0.1s ease-in-out;
  justify-content: center;
  display: flex;
  height: 10px;
  width: 13px;
`,eu=A.default.button.withConfig({displayName:"NavigationPanel.styles__NavButtonStyled",componentId:"sc-f752c3ab-2"})`
  ${({special:e,selected:t,isNewsTitle:n,level:a,theme:i})=>A.css`
    grid-template-columns: 1fr auto;
    background-color: ${0!==a?"transparent":e?i.nav.level1.bgSpecial.value:i.nav.level1.bgDefault.value};
    padding: ${0===a?"13px 14px":"12px 32px"};
    position: relative;
    text-align: left;
    cursor: pointer;
    display: grid;
    border: none;
    width: 100%;
    gap: 22px;

    ${(0,et.applyTypography)(i.nav.drawer[0===a?"level1":"level2"][t?"selected":"default"])};

    &:hover {
      background-color: ${i.nav[0===a?"level1":"level2"].bgHover.value};
    }

    &::before {
      background-color: ${0===a&&t?n?i.bbcNewsLogo.onDefaultBG.default.value:i.nav.content.value:"transparent"};
      transform: translateX(-100%);
      position: absolute;
      height: 100%;
      content: '';
      width: 8px;
      left: 0;
      top: 0;
    }
  `}
`,eg=A.default.span.withConfig({displayName:"NavigationPanel.styles__NavButtonTextStyled",componentId:"sc-f752c3ab-3"})`
  overflow-wrap: break-word;
`,ef=A.default.div.withConfig({displayName:"NavigationPanel.styles__NavContentStyled",componentId:"sc-f752c3ab-4"})`
  ${({theme:e,level:t,special:n})=>A.css`
    background-color: ${n?e.nav.level1.bgSpecial.value:0===t?e.nav.level1.bgDefault.value:"transparent"};
    padding-left: ${0!==t?"10px":0};
    position: relative;
    overflow: hidden;
    align-content: start;
    display: grid;
    height: 100%;
  `}
`,eh=A.default.div.withConfig({displayName:"NavigationPanel.styles__NavItemStyled",componentId:"sc-f752c3ab-5"})`
  ${({theme:e,level:t})=>A.css`
    border-bottom: ${0===t?`1px solid ${e.nav.level1.bgHover.value}`:"none"};
    background-color: ${0===t?e.nav.background.value:"transparent"};
    box-sizing: border-box;
    display: grid;
  `}
`,em=A.default.div.withConfig({displayName:"NavigationPanel.styles__SearchInputBoxedStyled",componentId:"sc-f752c3ab-6"})`
  ${({theme:e})=>A.css`
    background-color: ${e.search.menu.background.value};
    border-bottom: 1px solid ${e.search.menu.backgroundBorder.value};
    padding: 8px;
    margin: 0 -8px;
  `}
`;A.default.div.withConfig({displayName:"NavigationPanel.styles__ExtraActionsStyled",componentId:"sc-f752c3ab-7"})`
  justify-content: center;
  justify-items: center;
  align-items: center;
  place-items: center;
  padding: 12px 0;
  display: flex;
  gap: 16px;
`;let ey=(0,n.forwardRef)(({onSearch:e,isHomePage:n,isOpen:a},i)=>{let{searchText:o,setSearchText:s,onSearchClick:r}=Y(e);return(0,t.jsx)(em,{children:(0,t.jsx)(el,{ref:i,searchText:o,isNavigationSearch:!0,onSearchTextChange:s,onSearch:r,isHomePage:n,isOpenNavPanel:a,isOnNavPanel:!0})})}),ev=(0,n.memo)(()=>{let{worldNewsTvPath:e}=(0,V.usePageData)(),n=`navigationPanel-navItem-level0-${e}`;return e?(0,t.jsx)(eh,{level:0,"data-testid":n,children:(0,t.jsx)(ec.default,{visibleForBreakpoints:["group6","group2","group1"]})}):null});var eb=e.i(701420),ex=e.i(52154);let ew=({levels:e,onTogglePanelOpen:a,onSetOpenNavItem:i,openNavItems:o,level:s=0,data:r,slug:l,isHomePage:c})=>{let d=(0,n.useRef)(null),{title:p,isSpecial:u,subMenus:g=[],externalUrl:h,externalTarget:m,path:y}=r,v=y||"",b=(0,$.useExternalTarget)(v,m),w=!!r.subMenus?.length&&o[s]===v,k=!!v&&!h,N="news"===(0,eb.default)(v?.split("/"))[0],I=(0,x.getNavigationAnalytics)("drawer",p,h,v,"navigation_panel"),C=`/${(0,eb.default)(o[s-1]?.split("/"))}`,T=(0,n.useCallback)(e=>{if(Array.isArray(e))return i(e);let t=[...o.slice(0,s)];e===o[s]?i(t):(i([...t,v]),setTimeout(()=>{d?.current?.scrollIntoView({behavior:"smooth"})},0))},[v,s,i,o]),j=e=>()=>{e&&I&&window.analytics.sendEvent(I),T(v),a()},A=(({isHomePage:e,href:t,levels:n,level:a})=>{if(e)return"/home"===t||"/"===t;if(!n||!n.length)return!1;let i=n[a];if(i)return i.path===t;let o=n.at(-1);return o?.path===t})({isHomePage:c,href:v,levels:e,level:s});return(0,t.jsx)(eh,{level:s,"data-testid":`navigationPanel-navItem-level${s}-${C}`,children:g.length?(0,t.jsxs)("div",{children:[(0,t.jsxs)(eu,{"data-testid":`level${s}NavButton-${v}`,isNewsTitle:N,selected:A,onClick:()=>{T(v)},special:u,level:s,children:[(0,t.jsx)(eg,{"data-testid":`level${s}NavText-${v}`,children:p}),(0,t.jsx)(ep,{isOpen:w,"data-testid":`menuItem-ChevronIconWrapper-${v}`,children:(0,t.jsx)(E.default,{testId:`menuItem-ChevronIcon-${v}`,name:"arrows:chevron-down"})})]}),w&&(0,t.jsx)(ef,{"data-testid":`level${s}NavContent-${v}`,special:u,level:s,children:g.map((n,i)=>(0,t.jsx)(ew,{isHomePage:c,levels:e,slug:l,onTogglePanelOpen:a,onSetOpenNavItem:T,openNavItems:o,data:n,level:s+1},i))})]}):(0,t.jsx)(t.Fragment,{children:k?(0,t.jsx)(S.default,{analytics:I,prefetch:!1,passHref:!0,legacyBehavior:!0,href:v.includes(f.BASE_SLUG)?"/":v,tabIndex:-1,children:(0,t.jsx)(eu,{isNewsTitle:N,"data-testid":`level${s}NavButton-${v}`,selected:A,onClick:j(!1),special:u,level:s,ref:d,children:(0,t.jsx)(eg,{"data-testid":`level${s}NavText-${v}`,children:p})})}):(0,t.jsx)(ex.AnchorStyled,{target:b,...h?{href:(0,_.appendQueryParamsToUrl)(h)}:{},children:(0,t.jsx)(eu,{isNewsTitle:N,"data-testid":`level${s}NavButton-${h}`,selected:A,onClick:j(!0),special:u,level:s,ref:d,children:(0,t.jsx)("span",{"data-testid":`level${s}NavText-${h}`,children:p})})})})})},eS=A.default.details.withConfig({displayName:"NoJsNavigation.styles__NoJsMenuStyled",componentId:"sc-a2077f0f-0"})`
  z-index: 4001;
  position: fixed;
  top: 0;
  background: white;
  padding: 0 8px;
  display: block;
`,e_=A.default.ul.withConfig({displayName:"NoJsNavigation.styles__NoJsListStyled",componentId:"sc-a2077f0f-1"})`
  ${({$indent:e=0})=>A.css`
    padding: 0 0 8px ${16*e}px;

    ${0===e&&A.css`
      width: 320px;
      max-height: 80vh;
      overflow-y: auto;
      margin-top: 65px;
    `}
  `}
`,e$=A.default.summary.withConfig({displayName:"NoJsNavigation.styles__NoJsSummaryStyled",componentId:"sc-a2077f0f-2"})`
  position: absolute;
  left: 22px;
  top: 22px;
  cursor: pointer;
  display: block;
  ${({theme:e})=>(0,et.applyTypography)(e.nav.topbar.level1.default)};
`,ek=A.default.li.withConfig({displayName:"NoJsNavigation.styles__NoJsListItemStyled",componentId:"sc-a2077f0f-3"})`
  ${({theme:e})=>A.css`
    border-bottom: 1px solid ${e.nav.lines.value};
    padding: 0 14px;
  `}
`,eN=({path:e,slug:n,title:a})=>{let i="home"===n?"/":`/${n}`;return(0,t.jsx)(ek,{children:(0,t.jsx)(k.MainNavigationLink,{href:e?(0,_.appendQueryParamsToUrl)(e):(0,_.appendQueryParamsToUrl)(i),$isActive:!1,children:a})})},eI=({navigationItem:e,indent:a})=>{let{subMenus:i=[],...o}=e;return(0,t.jsxs)(n.Fragment,{children:[(0,t.jsx)(eN,{...o}),(0,t.jsx)(e_,{$indent:a,children:i.map((e,n)=>(0,t.jsx)(eI,{indent:a+1,navigationItem:e},n))})]})},eC=({navigationData:e})=>(0,t.jsx)("noscript",{children:(0,t.jsxs)(eS,{children:[(0,t.jsx)(e$,{children:(0,t.jsx)(E.default,{name:"actions:list-view-text",width:20,height:20})}),(0,t.jsx)(e_,{children:e.map((e,n)=>(0,t.jsx)(eI,{indent:1,navigationItem:e},n))})]})}),eT=(0,n.memo)(m.default),ej=(0,n.memo)(h.default),eE=({navigationData:e=[],headerHeight:a,showNavOnScroll:i})=>{let o=(0,n.useRef)(null),[s,r]=(0,n.useState)(!0);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(P,{ref:o,navigationData:e,isNavVisible:s,onNavVisibleChange:r,headerHeight:a,showNavOnScroll:i}),(0,t.jsx)(eC,{navigationData:e})]})},eA=(0,n.memo)(({navigationData:e=[],onToggleOpen:a,isOpen:i,testId:o,offsetTop:s,forwardedInputRef:r,mainNavigationData:l})=>{let d=(0,c.useCurrentSlug)(),[p,u]=(0,n.useState)([""]),{levels:g,isHomePage:f}=(0,x.getActiveNavigationTree)(d,l,e);return(0,n.useEffect)(()=>()=>{u([""])},[]),(0,t.jsx)(U,{animated:!0,direction:"left",onToggleOpen:a,isOpen:i,offsetTop:s,children:(0,t.jsxs)(ed,{"data-testid":o,children:[(0,t.jsx)(ey,{ref:r,onSearch:a,isHomePage:f,isOpen:i}),e.map((e,n)=>(0,t.jsx)(ew,{isHomePage:f,levels:g,slug:d,onTogglePanelOpen:a,onSetOpenNavItem:u,data:e,openNavItems:p},n)),(0,t.jsx)(ev,{})]})})});e.s(["default",0,function(e){let h=h=>{let{type:m,isIndexPage:y=m===a.ContentType.IndexPage}=h,v=(0,c.useCurrentSlug)(),{data:b}=(0,s.default)("mainNavigation"),{data:x}=(0,s.default)("hamburgerNavigation"),{data:w}=(0,s.default)("footer"),S=(0,u.useUser)(),_=(0,n.useRef)(null),$=(0,n.useRef)(null),k=(0,n.useRef)(null),N=(0,l.useAuthAndBookmarkActions)(S),{isHeaderDefaultSize:I,showNav:C}=(0,p.useHeaderScroll)({headerRef:$}),[T,j]=(0,n.useState)(!1),[E,A]=(0,n.useState)(0),[L,B]=(0,n.useState)(0),[D,F]=(0,f.getArrayFromSlug)(v),H="audio"===D&&["schedules","stations","play"].includes(F),O=h.worldNewsTvPath===`/${D}/`,P="video"===D||"news"===D&&"videos"===F||"reel"===D&&"video"===F,M=["subscribe","managesubscription"].includes(D)||["privacy-policy","terms-of-use","subscription-terms"].includes(F),R=D===f.BASE_SLUG,G=x.length?x:b,U=(0,n.useCallback)((e=!0)=>{let t=$.current,{top:n}=t.getBoundingClientRect();0!==n&&e&&window.scrollTo(0,n+window.scrollY);let{bottom:a}=t.getBoundingClientRect();B(a)},[E]),V=(0,n.useCallback)(()=>j(!1),[]),W=()=>{U(),j(!T),!T&&_&&_.current&&setTimeout(()=>{_.current.focus({preventScroll:!0})},150)},z=(0,n.useCallback)(e=>{A(e)},[]);return(0,n.useEffect)(()=>{T?(document.body.setAttribute("style","overflow: hidden"),E&&U(!1)):document.querySelector(".tp-iframe-wrapper.tp-active")||document.body.removeAttribute("style")},[T,E,U]),(0,n.useEffect)(()=>{let{current:e}=$;if(!(0,o.default)(e)){let{bottom:t}=e.getBoundingClientRect();B(t)}},[]),(0,d.useGlobalKeydown)(e=>{let t=(0,i.default)(e.target,k.current);("Enter"===e.key||" "===e.key)&&t&&!T&&(e.preventDefault(),W()),"Tab"===e.key&&t&&T&&(e.preventDefault(),_.current.focus())},[T]),(0,d.useGlobalKeydown)(e=>{let t=(0,i.default)(e.target,_.current),n=e.shiftKey;"Tab"===e.key&&n&&t&&(e.preventDefault(),k.current.focus())}),(0,d.useGlobalKeydown)(e=>{"Escape"===e.key&&T&&(W(),k.current.focus())},[T]),(0,t.jsxs)(t.Fragment,{children:[!(H||P||M||O)&&(0,t.jsx)(r.default,{type:"interstitial"}),R&&(0,t.jsx)(r.default,{type:"top",onAdvertRendered:z,showPlaceholder:!0}),(0,t.jsx)(eT,{id:"bbc-header",ref:$,mainPageUrl:"/",isBurgerMenuOpened:T,onToggleMenuClick:W,onHeaderLogoClick:V,actions:N,toggleMenuButtonRef:k,isHeaderDefaultSize:I}),(0,t.jsx)(eE,{isIndexPage:y,navigationData:b,headerHeight:I?80:64,showNavOnScroll:C}),(0,t.jsx)(eA,{forwardedInputRef:_,navigationData:G,mainNavigationData:b,isOpen:T,onToggleOpen:W,offsetTop:L}),(0,t.jsx)("main",{id:"bbc-main",children:(0,t.jsx)(e,{...h})}),(0,t.jsx)(ej,{id:"bbc-footer",testId:"main-footer",...w}),(0,t.jsx)(g.default,{pageType:h?.type||"article"})]})};return h.displayName=e.displayName,h},"getIsAppLayoutEnabled",0,e=>{let{pageProps:t}=e,{state:n}=t,{isMobileWebview:a}=n;return a}],907182)},474085,e=>{"use strict";var t=e.i(191788),n=e.i(907182),a=e.i(152504);e.s(["useIsAppLayoutEnabled",0,function(e){let[i,o]=(0,t.useState)(!!e&&(0,n.getIsAppLayoutEnabled)(e));return(0,t.useEffect)(()=>{("true"===sessionStorage.getItem(a.IS_APP_LAYOUT_ENABLED_SESSION_KEY)||window.navigator.userAgent.includes("bbcx-mobile-webview"))&&(o(!0),sessionStorage.setItem(a.IS_APP_LAYOUT_ENABLED_SESSION_KEY,"true"))},[]),i}])},500131,e=>{"use strict";var t=e.i(923976);e.s(["PageDataProvider",()=>t.default])}]);