(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,394941,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0}),Object.defineProperty(i,"default",{enumerable:!0,get:function(){return r}});let n=e.r(191788),a="u"<typeof window,o=a?()=>{}:n.useLayoutEffect,l=a?()=>{}:n.useEffect;function r(e){let{headManager:t,reduceComponentsToState:i}=e;function r(){if(t&&t.mountedInstances){let e=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(i(e))}}return a&&(t?.mountedInstances?.add(e.children),r()),o(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),o(()=>(t&&(t._pendingUpdate=r),()=>{t&&(t._pendingUpdate=r)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},280963,(e,t,i)=>{"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n={default:function(){return f},defaultHead:function(){return p}};for(var a in n)Object.defineProperty(i,a,{enumerable:!0,get:n[a]});let o=e.r(741705),l=e.r(952456),r=e.r(391398),s=l._(e.r(191788)),d=o._(e.r(394941)),c=e.r(713584);function p(){return[(0,r.jsx)("meta",{charSet:"utf-8"},"charset"),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function u(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===s.default.Fragment?e.concat(s.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}e.r(894470);let y=["name","httpEquiv","charSet","itemProp"];function m(e){let t,i,n,a;return e.reduce(u,[]).reverse().concat(p().reverse()).filter((t=new Set,i=new Set,n=new Set,a={},e=>{let o=!0,l=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){l=!0;let i=e.key.slice(e.key.indexOf("$")+1);t.has(i)?o=!1:t.add(i)}switch(e.type){case"title":case"base":i.has(e.type)?o=!1:i.add(e.type);break;case"meta":for(let t=0,i=y.length;t<i;t++){let i=y[t];if(e.props.hasOwnProperty(i))if("charSet"===i)n.has(i)?o=!1:n.add(i);else{let t=e.props[i],n=a[i]||new Set;("name"!==i||!l)&&n.has(t)?o=!1:(n.add(t),a[i]=n)}}}return o})).reverse().map((e,t)=>{let i=e.key||t;return s.default.cloneElement(e,{key:i})})}let f=function({children:e}){let t=(0,s.useContext)(c.HeadManagerContext);return(0,r.jsx)(d.default,{reduceComponentsToState:m,headManager:t,children:e})};("function"==typeof i.default||"object"==typeof i.default&&null!==i.default)&&void 0===i.default.__esModule&&(Object.defineProperty(i.default,"__esModule",{value:!0}),Object.assign(i.default,i),t.exports=i.default)},188005,e=>{"use strict";var t=e.i(834020);let i=function(e){return(null==e?0:e.length)?(0,t.default)(e,1):[]};var n=e.i(671097),a=e.i(477478);e.s(["default",0,function(e){return(0,a.default)((0,n.default)(e,void 0,i),e+"")}],188005)},958678,(e,t,i)=>{t.exports=e.r(280963)},105271,313646,752108,161772,e=>{"use strict";let t=function(e){let t=Math.floor(e/3600),i=Math.floor(e%3600/60),n=e%60;return["PT",t>0?`${t}H`:"",i>0?`${i}M`:"",n>0||!t&&!i?`${n}S`:""].filter(Boolean).join("")};e.s(["secondsToISO8601",0,t],313646);let i="1280x720";e.s(["getBaseVideoObjectProps",0,function(e,n){let{title:a,synopses:o,imageUrl:l="",versions:r=[],releaseDate:s}=e,{durationISO8601:d,duration:c,availableFrom:p}=r[0]||{},u=s||p||n;return{name:a,description:o?.short||o?.medium||o?.long||"",...l?{thumbnailUrl:l.replace("{recipe}",i).replace("1920xn",i)}:{},...u?{uploadDate:new Date(u).toISOString().slice(0,10)}:{},...d||c?{duration:d??t(c)}:{}}}],105271);var n=e.i(391398),a=e.i(958678),o=e.i(191788);class l extends o.Component{state={hasError:!1};static getDerivedStateFromError(){return{hasError:!0}}render(){return this.state.hasError?null:this.props.children}}e.s(["default",0,l],752108),e.s(["default",0,e=>{let t={"@context":"https://schema.org","@type":"VideoObject",...e};return(0,n.jsx)(l,{children:(0,n.jsx)(a.default,{children:(0,n.jsx)("script",{type:"application/ld+json","data-schema":"video-object",dangerouslySetInnerHTML:{__html:JSON.stringify(t)}})})})}],161772)},325735,664386,53581,e=>{"use strict";var t=e.i(428311),i=e.i(552291),n=e.i(17688),a=e.i(77643),o=e.i(156624);let l=function(){};e.s(["default",0,l],664386);var r=e.i(101e3),s=o.default&&1/(0,r.default)(new o.default([,-0]))[1]==1/0?function(e){return new o.default(e)}:l;e.s(["default",0,function(e,o,l){var d=-1,c=i.default,p=e.length,u=!0,y=[],m=y;if(l)u=!1,c=n.default;else if(p>=200){var f=o?null:s(e);if(f)return(0,r.default)(f);u=!1,c=a.default,m=new t.default}else m=o?[]:y;e:for(;++d<p;){var g=e[d],_=o?o(g):g;if(g=l||0!==g?g:0,u&&_==_){for(var h=m.length;h--;)if(m[h]===_)continue e;o&&m.push(_),y.push(g)}else c(m,_,l)||(m!==y&&m.push(_),y.push(g))}return y}],325735);var d=e.i(946497);function c(e){let t=RegExp("^/","i");return e.replace(t,"")}e.s(["cleanPathString",0,c,"transformMediaBlock",0,e=>{let{model:t}=e,{blocks:i=[]}=t,[n]=i.filter(({type:e})=>"media"===e),[a]=i.filter(({type:e})=>"aresMedia"===e);(function(e){if(e){let{model:{blocks:t}}=e,[i]=t.filter(({type:e})=>"mediaMetadata"===e),[n]=t.filter(({type:e})=>"image"===e);if(i&&n){let[e]=n.model.blocks.filter(({type:e})=>"rawImage"===e),{model:{locator:t}}=e;Object.assign(i.model,{imageUrl:`${d.iChefFeaturesTemplate}ic/1920xn/${c(t)}`})}}})(n),function(e){if(e){let{model:{blocks:t}}=e;Object.assign(e,{type:"media"});let[i]=t.filter(({type:e})=>"aresMediaMetadata"===e);if(i){let{model:{imageUrl:e}}=i;Object.assign(i,{type:"mediaMetadata"}),Object.assign(i.model,{imageUrl:e?`https://${e}`:e})}}}(a)}],53581)},701420,e=>{"use strict";e.s(["default",0,function(e){for(var t=-1,i=null==e?0:e.length,n=0,a=[];++t<i;){var o=e[t];o&&(a[n++]=o)}return a}])},481978,e=>{"use strict";var t=e.i(417183),i=e.i(564045),n=e.i(508259),a=e.i(21540);let o={forms_button:{action_type:"viewability",action_name:"select",group_type:"form",item_type:"button"},forms_input:{action_type:"viewability",action_name:"select",group_type:"form"},indexCard_select:{action_type:"viewability",action_name:"select"},indexCard_view:{action_type:"viewability",action_name:"view"},navigation:{action_type:"click",action_name:"navigation"},click_action:{action_type:"click",action_name:"action"},click_exit:{action_type:"click",action_name:"exit"},article_share:{action_type:"article",action_name:"share",item_type:"icon_share",group_name:"share_menu"},av_share:{action_type:"av",action_name:"share",item_type:"icon_share",group_name:"share_menu"},internal_search_result_click:{action_type:"internal_search_result",action_name:"click"},internal_search_result_display:{action_type:"internal_search_result",action_name:"display"},ads_click:{action_type:"ads",action_name:"click"},ads_impression:{action_type:"ads",action_name:"impression"},page_scroll:{action_type:"page",action_name:"scroll"},bookmark_add:{action_type:"bookmark",action_name:"add",item_name:"bookmark"},bookmark_remove:{action_type:"bookmark",action_name:"remove",item_name:"unbookmark"},ads_blocked:{action_type:"ads",action_name:"blocked"},optimizely:{mv_engine_name:"Optimizely",action_type:"mv_test",action_name:"display"},section_title_select:{action_type:"viewability",action_name:"select"},account_option:{action_type:"viewability",action_name:"select",group_name:"account_option"},sign_in:{action_type:"signin",action_name:"select",item_name:"sign_in"},register:{action_type:"registration",action_name:"select",item_name:"register"},subscribe:{action_type:"subscription",action_name:"select",item_name:"subscribe"},av_follow:{action_type:"av",action_name:"follow",item_name:"follow"},av_unfollow:{action_type:"av",action_name:"unfollow",item_name:"unfollow"},av_lfv_cta:{action_type:"click",action_name:"action",group_name:"lfv_option"}};e.s(["default",0,({eventGrouping:e,eventProperties:l,groupProperties:r})=>{try{let{action_name:s,action_type:d,...c}=o[e],{echoClient:p,data:u}=window.analytics,y={...u,...c,...r,...l};p?((0,i.getRunningEnvironment)()!==a.RunningEnvironment.LIVE&&("indexCard_view"===e||"indexCard_select"===e)&&((0,t.default)(r)||!r)&&n.logger.debug("### sendAnalyticsEventByMap/sendEvent ===> group properties might be missing!",{...l,groupProperties:r}),"ads_blocked"===e||"internal_search_result_display"===e?setTimeout(()=>{p?.userActionEvent?.(d,s,y)},100):p?.userActionEvent?.(d,s,y)):window.analytics.buffer.push({eventGrouping:e,eventProperties:l,groupProperties:r})}catch(t){let e=`Failed to send analytics event: ${t}`;throw n.logger.error(e),Error(e)}}])},463226,660021,292580,172035,e=>{"use strict";var t=e.i(391398),i=e.i(191788),n=e.i(893409),a=e.i(84541),o=e.i(120928),l=e.i(772701),r=e.i(901414);let s=function(e,t=[]){(0,i.useEffect)(()=>(window.addEventListener("keydown",e),()=>{window.removeEventListener("keydown",e)}),t)};e.s(["useGlobalKeydown",0,s],660021);var d=e.i(324951),c=e.i(46230),p=e.i(490602),u=e.i(760814),y=e.i(339228),m=e.i(570549),f=e.i(222009);let g=u.default.div.withConfig({displayName:"AlbertaVideoModal.styles__AlbertaModalStyled",componentId:"sc-3996c3f6-0"})(({theme:e})=>u.css`
    position: relative;
    aspect-ratio: 9 / 16;
    background-color: ${e.container.onDefaultBG3.value};
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    height: min(90vh, 900px);

    ${(0,f.applyZIndex)("level2")};

    ${(0,y.applyStylesForBreakpoints)(u.css`
        aspect-ratio: unset;
        height: unset;
      `,"group2")}
  `),_=u.default.div.withConfig({displayName:"AlbertaVideoModal.styles__AlbertaCloseButtonContainerStyled",componentId:"sc-3996c3f6-1"})`
  position: absolute;
  top: 0;
  left: calc(100% + 24px);

  ${(0,y.applyStylesForBreakpoints)(u.css`
      display: none;
    `,"group2")}
`,h=u.default.div.withConfig({displayName:"AlbertaVideoModal.styles__ContentOverlayStyled",componentId:"sc-3996c3f6-2"})(({theme:e,$controlsVisible:t})=>u.css`
    position: absolute;
    bottom: 80px;
    left: 16px;
    right: 16px;
    ${(0,f.applyZIndex)("level3")};
    color: ${e.text.onInverseBG.default.value};
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 16px;

    /* Let pointer events fall through to the SMP player; only interactive
       children opt back in below. */
    pointer-events: none;

    opacity: ${t?"1":"0"};
    transition: opacity 0.2s ease;

    /* Keep the overlay up while hovered/focused. Required, not cosmetic:
       moving onto a child makes SMP hide its bar, and without this the child
       would lose pointer-events mid-click. */
    &:hover,
    &:focus-within {
      opacity: 1;
    }

    & > * {
      pointer-events: ${t?"auto":"none"};
    }

    &:hover > *,
    &:focus-within > * {
      pointer-events: auto;
    }

    ${(0,y.applyStylesForBreakpoints)(u.css`
        position: fixed;
      `,"group2")}
  `),v=u.default.div.withConfig({displayName:"AlbertaVideoModal.styles__ContentTextContainerStyled",componentId:"sc-3996c3f6-3"})`
  flex: 1;
  min-width: 0;
`,b=u.default.div.withConfig({displayName:"AlbertaVideoModal.styles__ShareButtonContainerStyled",componentId:"sc-3996c3f6-4"})`
  flex-shrink: 0;
`,x=u.default.a.withConfig({displayName:"AlbertaVideoModal.styles__VideoTitleLink",componentId:"sc-3996c3f6-5"})(({theme:e})=>u.css`
    ${(0,m.applyTypography)(e.generic.info1.emphasised.bpSmall)};

    margin: 0;
    color: ${e.text.onInverseBG.default.value};
    text-decoration: none;
    font-size: 12px;
    line-height: 24px;
    font-weight: 700;
    &:hover {
      text-decoration: underline;
    }
  `);e.s(["default",0,({onClose:e,blocks:u,playlistLabels:y,startIndex:m,holdingImageUrls:f,contentPageHrefs:w=[],contentPageTitles:k=[],onwardJourneyHrefs:$=[],onwardJourneyLinkTexts:S=[],contentIds:P=[],subtypes:j=[]})=>{let C=(0,i.useRef)(null),I=(0,i.useRef)(m),[F]=(0,r.useBreakpoints)("AlbertaVideoModal"),E="not-set"!==F,O=["group1","group2"].includes(F),[B,L]=(0,i.useState)(!1),[M,A]=(0,i.useState)(m),[T,U]=(0,i.useState)(!1),[V,N]=(0,i.useState)(!1),R=w[M],z=k[M]||"",D=$[M],G=S[M]||"",H=P[M]||"",K=y[M],Z=j[M],q=K?{av_content_id:K.content_id,av_content_type:K.content_type,av_content_duration_range:"sfv-vertical"}:void 0,J=D&&(0,l.isExternalLink)(D),W=D&&(0,o.isBBCExternal)(D),Y={eventGrouping:J&&!W?"click_exit":"click_action",eventProperties:{item_name:G,item_type:"custom_link",item_link:D||"",item_resource_id:H,item_position:M+1},groupProperties:{group_name:G,group_type:Z,group_resource_id:H,group_position:M+1,group_item_count:y.length}};return(0,d.useOutsideClicker)(C,t=>{let i=t.target;i?.closest('[data-testid="popoverStyled"], [data-testid="popoverOverlay"]')||e()}),s(t=>{"Escape"===t.key&&e()}),(0,t.jsxs)(g,{ref:C,tabIndex:-1,role:"dialog","aria-label":"Video player",children:[E&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.default,{playerOrientation:"portrait",blocks:u,playlistLabels:y,activeIndex:m,playerPosition:"alberta-modal",uiOverrides:{swipable:{enabled:!0,direction:"Y"},fullscreen:O?{enabled:!0,useCloseIconForExitFullscreen:!0}:{enabled:!1},chromecast:{enabled:!1},subtitles:{enabled:!0},pictureInPicture:{enabled:!1},controls:{speed:!0,includeNextButton:!0,includePreviousButton:!0}},disableAds:!0,disableCta:!0,onExitFakeFullscreen:e,autoEnterFakeFullscreen:O,holdingImageUrls:f,onPlayerInitialized:e=>{L(!0),e.bind("uiControlBarShown",()=>{U(!0)}),e.bind("uiControlBarHidden",()=>{U(!1)})},onNextOnwardJourneyItemStartsPlaying:e=>{if(void 0===e.index)return;let t=I.current,i=e.index,n=i>t,a=S[t]||"",o=P[t]||"",l=S[i]||"",r=$[i]||"",s=P[i]||"";window.analytics.sendEvent({eventGrouping:"click_action",eventProperties:{item_name:n?"play_next":"play_previous",item_type:"navigation_button",item_text:l,item_link:r,item_resource_id:s,item_position:i+1},groupProperties:{group_name:a,group_type:Z,group_resource_id:o,group_position:t+1,group_item_count:y.length}}),I.current=i,A(i),N(!1)}}),B&&(D||R)&&(0,t.jsxs)(h,{$controlsVisible:T||V,children:[D&&(0,t.jsx)(v,{children:(0,t.jsx)(n.default,{href:D,styledAnchor:x,analytics:Y,children:G})}),R&&(0,t.jsx)(b,{children:(0,t.jsx)(p.default,{trigger:"click",alignment:"top-right",isButtonInverse:!1,type:"general",size:"small",iconOnly:!0,isAvContent:!0,title:z,href:R,avProperties:q,onOpenChange:N},`share-${M}`)})]})]}),(0,t.jsx)(_,{children:(0,t.jsx)(a.default,{isInverse:!0,testId:"close-button",withoutPaddingInline:!0,withoutPaddingBlock:!0,type:"unboxed",icon:"actions:close",onClick:()=>{window.analytics.sendEvent({eventGrouping:"click_action",eventProperties:{item_name:"close_modal",item_type:"close_button",item_resource_id:H,item_position:M+1},groupProperties:{group_name:G,group_type:Z,group_resource_id:H,group_position:M+1,group_item_count:y.length}}),e()}})})]})}],463226);let w=u.default.div.withConfig({displayName:"Backdrop.styles__BackdropStyled",componentId:"sc-9f7d4825-0"})`
  ${({theme:e,$offsetTop:t,$isOpen:i,$zIndex:n,$hasChildren:a,$variant:o})=>u.css`
    background-color: ${e.overlay[o].value};
    display: ${i?"block":"none"};
    visibility: ${i?"unset":"hidden"};
    top: ${t}px;
    position: fixed;
    border: none;
    width: 100%;
    bottom: 0;

    ${a&&u.css`
      display: grid;
      place-items: center;
    `}

    ${(0,f.applyZIndex)(n)};
  `};
`;e.s(["default",0,({isOpen:e,offsetTop:i=0,testId:n="backdrop",children:a,zIndex:o="level3",variant:l="heavy",...r})=>(0,t.jsx)(w,{"data-testid":n,$isOpen:e,$offsetTop:i,$zIndex:o,$hasChildren:!!a,$variant:l,...r,children:a})],292580);let k=u.default.div.withConfig({displayName:"LeavingPagePopup.styles__LeavingPagePopupStyled",componentId:"sc-921b484e-0"})`
  ${({theme:e})=>u.css`
    box-sizing: border-box;
    background-color: ${e.container.onDefaultBG4.value};
    width: min(532px, 70vw);
    max-height: 366px;
    padding: 64px;
    display: grid;
    place-items: center;
    row-gap: 32px;
    grid-auto-rows: min-content;
    position: relative;

    ${(0,y.applyStylesForBreakpoints)(u.css`
        width: max(342px, 90vw);
        max-height: 428px;
        padding: 32px;
      `,"group2")}
  `}
`,$=u.default.div.withConfig({displayName:"LeavingPagePopup.styles__LeavingPagePopupSectionStyled",componentId:"sc-921b484e-1"})`
  ${({$variant:e="description"})=>u.css`
    display: grid;
    row-gap: 12px;
    min-width: 326px;

    ${"description"===e&&u.css`
      justify-items: center;
    `}
  `}

  ${(0,y.applyStylesForBreakpoints)(u.css`
      min-width: 260px;
    `,"group3")}

  ${(0,y.applyStylesForBreakpoints)(u.css`
      min-width: 240px;
    `,"group1")}
`,S=u.default.h2.withConfig({displayName:"LeavingPagePopup.styles__LeavingPagePopupTitleStyled",componentId:"sc-921b484e-2"})`
  ${({theme:e})=>u.css`
    ${(0,m.applyTypography)(e.promoHeadline.extraLarge.default.bpLarge)};

    ${(0,y.applyStylesForBreakpoints)(u.css`
        ${(0,m.applyTypography)(e.promoHeadline.extraLarge.default.bpSmall)};
      `,"group2")}
  `}
`,P=u.default.p.withConfig({displayName:"LeavingPagePopup.styles__LeavingPagePopupDescriptionStyled",componentId:"sc-921b484e-3"})`
  ${({theme:e})=>u.css`
    text-align: center;
    ${(0,m.applyTypography)(e.bodyCopy.default.bpLarge)};

    ${(0,y.applyStylesForBreakpoints)(u.css`
        /* 
          Ensure final word is not "orphaned", appearing by itself on it's own
          line.
        */
        span {
          display: inline-block;
        }
        ${(0,m.applyTypography)(e.bodyCopy.default.bpSmall)};
      `,"group2")}
  `}
`,j=u.default.div.withConfig({displayName:"LeavingPagePopup.styles__LeavingPagePopupTopActionsStyled",componentId:"sc-921b484e-4"})`
  position: absolute;
  right: 16px;
  top: 16px;
`;e.s(["default",0,({onPrimaryAction:e,onSecondaryAction:n,onClose:o})=>{let l=(0,i.useRef)(null);return(0,d.useOutsideClicker)(l,o),(0,t.jsxs)(k,{ref:l,children:[(0,t.jsxs)($,{children:[(0,t.jsx)(S,{children:"Are you sure?"}),(0,t.jsxs)(P,{children:["Playback will stop if you leave ",(0,t.jsx)("span",{children:"this page."}),(0,t.jsx)("br",{}),"Would you like to:"]})]}),(0,t.jsxs)($,{$variant:"actions",children:[(0,t.jsx)(a.default,{testId:"primary-button",type:"general",text:"Leave and stop listening",size:"large",onClick:e}),(0,t.jsx)(a.default,{testId:"secondary-button",type:"ghost",text:"Open page in new tab",size:"large",onClick:n})]}),(0,t.jsx)(j,{children:(0,t.jsx)(a.default,{testId:"close-button",withoutPaddingInline:!0,withoutPaddingBlock:!0,type:"unboxed",icon:"actions:close",onClick:o})})]})}],172035)},242866,275349,396141,e=>{"use strict";var t=e.i(391398),i=e.i(191788),n=e.i(463226),a=e.i(292580),o=e.i(172035),l=e.i(481978),l=l,r=e.i(660021),s=e.i(324951),d=e.i(65739),c=e.i(753924),p=e.i(746857);let u=function(e){(0,i.useEffect)(()=>{let t=new MutationObserver(t=>{t.forEach(t=>{let{type:i,attributeName:n}=t;"attributes"===i&&"style"===n&&e("hidden"===document.body.style.overflow)})});return t.observe(document.body,{attributes:!0,attributeFilter:["style"]}),()=>{t.disconnect()}},[e])},y=function(e){(0,i.useEffect)(()=>{let t=new MutationObserver(t=>{t.forEach(t=>{let{type:i,target:n}=t,a=Array.from(n.classList);"attributes"===i&&a.includes("tp-backdrop")&&e(a.includes("tp-active"))})});return t.observe(document.body,{attributes:!0,subtree:!0,childList:!0,attributeFilter:["class"]}),()=>{t.disconnect()}},[e])},m=function(e,t="global"){("piano"===t?y:u)(e)};e.s(["useBackdropObserver",0,m],275349);var f=e.i(399274),g=e.i(246024),_=e.i(450228),h=e.i(427885),v=e.i(789799),b=e.i(105271),x=e.i(161772),w=e.i(227162),k=e.i(395497),$=e.i(240911),S=e.i(508259),P=e.i(898229),j=e.i(852827),C=e.i(978113);let I=({mediaMetadataModel:e,onPlayClick:n,isTrailer:a=!1,onEnded:o,stopPlayer:l,startTime:r})=>{let{query:s}=(0,p.useAppRouter)(),{slug:d}=s,u=(0,$.getStringFromSlug)(d,!0),y=`${w.appConfig.getValue(k.ConfigSettings.SiteUrl)}${u}`,I=(0,i.useRef)(null),[F,E]=(0,i.useState)(!1),[O,B]=(0,i.useState)(!1),[L,M]=(0,i.useState)(!1),[A,T]=(0,i.useState)(void 0),[U,V]=(0,i.useState)(!1),[N,R]=(0,i.useState)(""),[z,D]=(0,i.useState)("level2"),G=(0,g.useIsEmbeddedMediaReady)(),H=(0,f.useEchoCustomEvent)(),K=(0,v.useSubscriptionContext)(),Z=(0,i.useMemo)(()=>K.claims.longFormVideo,[K]);(0,i.useEffect)(()=>{("ALLOWED"===Z||a)&&E(!0)},[Z,a]);let q=async(e,t)=>{try{let i=`media-token?versionPid=${e}&playbackAuthorisation=${t}`,{data:n}=await (0,P.fetchClient)(i,{});return n.token}catch{return S.logger.error(`getJwtToken failed for: ${e}`),""}},J=async e=>{let[t]=e.versions;if(!t)return{holdingImageURL:(0,h.getImageUrl)(e.imageUrl),items:[],summary:"",title:""};let i=await q(t.versionId,t.playbackAuthorisation||""),n={kind:"programme",duration:t.duration,versionID:t.versionId,jwtToken:i};return{title:e.title,summary:e.synopses?.medium||"",items:[n],holdingImageURL:(0,h.getImageUrl)(e.imageUrl),warning:t.warning,autoplay:!1}},W=async()=>{let t=(0,h.getAvAnalytics)(H,{content_type:a?"doc-trailer":"doc-episode"});return t.clipPID=e.id,t.playerPosition=a?"lf-video-series-page":"lf-video-episode-page",t.playlistLabels={...t.playlistLabels,av_content_duration_range:"lfv",av_episode:H?.av_episode,av_show:H?.av_show},{html5Debug:!1,product:"bbcx",playlistObject:await J(e),autoplay:!1,waitOnPluginLoad:!0,enableToucan:!0,supportFakeFullscreen:!0,appName:"bbc_web",appType:"responsive",significantTime:30,...r&&r>0?{startTime:r}:{},ui:{colour:"#FFFFFF",foreColour:"#000000",cta:{enabled:!1,visiblyHidden:!0},playbackSettingsPanel:{enabled:!1},controls:{speed:!1}},counterName:t.counterName||"",statsObject:t}};(0,i.useEffect)(()=>{I.current&&G&&H&&null!==r&&(async()=>{let t=await W(),i=I.current;if(i)if(0===t.playlistObject.items.length)R(t.playlistObject.holdingImageURL);else{let a=window.embeddedMedia.api.player(i,t);a.bind("initialised",()=>M(!0)),a.bind("enterFakeFullscreen",()=>V(!0)),a.bind("exitFakeFullscreen",()=>V(!1)),a.bind("fullscreenExit",()=>{!a.paused()&&(B(!0),n&&n())}),a.bind("playing",()=>B(!0)),a.bind("ended",()=>{B(!1),o&&o()}),a.bind("significanttimeupdate",(0,j.setLFVMediaProgress)(e)),a.load(),T(a)}})()},[G,H,r]),m(e=>D(e?"level1":"level2")),l&&A&&A.stop();let[Y]=e.versions;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(x.default,{contentUrl:y,...(0,b.getBaseVideoObjectProps)(e)}),(0,t.jsxs)(C.LongFormPlayerStyled,{"data-testid":"long-form-player",$isInFakeFullscreen:U,$isPlaybackStarted:O,$isPlaybackAllowed:F,children:[(0,t.jsx)(C.VideoPlayerStyled,{ref:I,$isAudio:!1,children:N&&(0,t.jsx)(_.default,{imageUrlTemplate:N})}),(0,t.jsx)(c.default,{isVisible:F&&L&&!O,onClick:()=>{A&&A.play(!0),setTimeout(()=>B(!0),0),n?.()},warning:Y?.warning,duration:"",zIndex:z,type:"longForm"})]})]})};e.s(["default",0,I],396141);var F=e.i(760814),E=e.i(339228),O=e.i(222009);F.default.div.withConfig({displayName:"LongFormVideoTrailerModal.styles__Overlay",componentId:"sc-481ecf7e-0"})`
  ${({theme:e})=>F.css`
    position: fixed;
    inset: 0;
    background-color: ${e.overlay.medium.value};
    display: flex;
    justify-content: center;
    align-items: center;

    ${(0,O.applyZIndex)("level0")};
  `};
`;let B=F.default.button.withConfig({displayName:"LongFormVideoTrailerModal.styles__CloseButton",componentId:"sc-481ecf7e-1"})`
  ${({theme:e})=>F.css`
    position: absolute;
    top: -53px;
    right: 0;
    background: transparent;
    color: white;
    border: none;
    cursor: pointer;
    padding: 10px;

    &:hover {
      background-color: ${e.button.unboxed.hovered.normal.background.value};
    }
  `};
`,L="75vh",M=F.default.div.withConfig({displayName:"LongFormVideoTrailerModal.styles__TrailerBox",componentId:"sc-481ecf7e-2"})`
  ${({theme:e})=>F.css`
    max-width: 90%;
    max-height: 90%;
    position: relative;
    background-color: ${e.container.onDefaultBG3.value};
    aspect-ratio: 16 / 9;

    ${(0,O.applyZIndex)("level2")};

    ${(0,E.applyStylesForBreakpoints)(F.css`
        height: min(584px, ${L});
      `,"group6")};
    ${(0,E.applyStylesForBreakpoints)(F.css`
        height: min(549px, ${L});
      `,"group5")};
    ${(0,E.applyStylesForBreakpoints)(F.css`
        height: min(413px, ${L});
      `,"group4")};
    ${(0,E.applyStylesForBreakpoints)(F.css`
        height: min(319px, ${L});
      `,"group3")};
    /* Mobile  view need work as it need to transition to fullscreen directly*/
    ${(0,E.applyStylesForBreakpoints)(F.css`
        height: min(210px, ${L});
      `,"group2")};
  `};
`,A=({onClose:e,trailer:n})=>{let a=(0,i.useRef)(null),[o,c]=(0,i.useState)(!1),p=()=>{c(!0),setTimeout(()=>{(0,l.default)({eventGrouping:"click_action",eventProperties:{item_name:"trailer-close-button",item_text:"Close",item_type:"button",item_link:""}}),e()},50)};return(0,s.useOutsideClicker)(a,p),(0,r.useGlobalKeydown)(e=>{"Escape"===e.key&&p()}),(0,i.useEffect)(()=>{if(!a.current)return;let e=a.current,t=()=>Array.from(e.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter(e=>!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden"));t()[0]?.focus();let i=i=>{"Tab"===i.key&&setTimeout(()=>{e.contains(document.activeElement)||t()[0]?.focus()},0)};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[]),(0,t.jsxs)(M,{ref:a,tabIndex:-1,role:"dialog","aria-label":"Trailer player","aria-modal":"true",children:[(0,t.jsx)(B,{onClick:p,"aria-label":"close trailer modal",children:(0,t.jsx)(d.default,{width:24,height:24,name:"actions:close",fill:"white"})}),(0,t.jsx)(I,{mediaMetadataModel:n,isTrailer:!0,onEnded:e,stopPlayer:o})]})},T=(0,i.createContext)([{},()=>null]),{Provider:U}=T;e.s(["PopupContext",0,T,"default",0,({children:e,value:l})=>{let[r,s]=l,{variant:d,onPrimaryAction:c=()=>null,onSecondaryAction:p=()=>null,popupProps:u}=r,y=!!d,m=(0,i.useMemo)(()=>{switch(d){case"leaving-page":return o.default;case"trailer":return A;case"alberta":return n.default;default:return()=>null}},[d]),f="leaving-page"===d?"lightest":"alberta"===d?"medium":"heavy";return(0,t.jsxs)(U,{value:l,children:[(0,t.jsx)(a.default,{isOpen:y,zIndex:"level5",variant:f,children:(0,t.jsx)(m,{onPrimaryAction:c,onSecondaryAction:p,onClose:()=>s({}),...u})}),e]})}],242866)}]);