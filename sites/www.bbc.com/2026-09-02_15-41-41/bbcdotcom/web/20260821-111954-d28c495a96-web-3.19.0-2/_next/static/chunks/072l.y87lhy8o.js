(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,418933,e=>{"use strict";var t=e.i(391398),n=e.i(191788),o=e.i(893409),s=e.i(84541),i=e.i(324951),a=e.i(317166),r=e.i(65739),l=e.i(520087),c=e.i(480495),u=e.i(959560),d=e.i(746857),p=e.i(542383),g=e.i(57988),b=e.i(519894),f=e.i(704570),h=e.i(227162),y=e.i(395497),m=e.i(830945),x=e.i(232489),v=e.i(24768),S=e.i(760814),C=e.i(339228),w=e.i(570549);let $=S.default.button.withConfig({displayName:"Subscription.styles__SubscribeButtonStyled",componentId:"sc-b799d13d-0"})`
  ${({theme:e,$variant:t="default"})=>S.css`
    background-color: ${e.subscription.button.default.normal.background.value};
    color: ${e.subscription.button.default.normal.content.value};
    padding: 6px 12px;
    cursor: pointer;
    border: 2px solid ${e.subscription.button.default.normal.background.value};

    ${(0,w.applyTypography)(e.button.regular)};

    ${"video-series-page"===t&&S.css`
      width: 248px;
      display: flex;
      line-height: 28px;
      padding: 6px 36px;

      svg {
        width: 14px;
        height: 28px;
        margin-right: 8px;
      }
      ${(0,C.applyStylesForBreakpoints)(S.css`
          width: 203px;
          padding: 6px 16px;
        `,"group3")};
      ${(0,C.applyStylesForBreakpoints)(S.css`
          width: unset;
          padding: 6px 24px;
          justify-content: center;
        `,"group2")};
    `};

    &:hover,
    &:focus {
      background-color: ${e.subscription.button.hover.normal.background.value};
      border: 2px solid ${e.subscription.button.hover.normal.background.value};
      outline: 2px solid ${e.subscription.button.hover.normal.background.value};
    }

    &:focus {
      outline: none;
      position: relative;
      border: 2px solid ${e.subscription.button.default.normal.content.value};

      &::before {
        content: '';
        inset: -3.5px;
        border: 2px solid ${e.subscription.button.focused.normal.stroke.value};
        position: absolute;
      }
    }
  `};
`;var _=e.i(789799);let k=({isAuthenticated:e,variant:o,title:s="Subscribe",redirectPath:i})=>{let{data:S}=(0,u.default)("authInfo"),{signInUrl:C}=S||{},w=(0,d.useAppRouter)(),[k,I]=(0,g.useCurrentSlug)(),[A,j]=(0,n.useState)(!1),{isSubscriptionAllowed:B}=(0,_.useSubscriptionContext)(),T=(0,_.useSubscriptionUpdateContext)(),E=(0,_.useRefetchSubscriptionClaims)(),O=(0,b.useFeatureFlag)("subscription-claims-based"),R=(0,b.useFeatureFlag)("mparticle-sdk"),N=h.appConfig.getValue(y.ConfigSettings.MparticleKey),{country:P}=(0,f.usePageData)(),{ensureTokens:F}=(0,a.useUser)(),{dotcom:{hasFullSourcepointConsent:U}}=(0,p.useConsent)(),M=h.appConfig.getValue(y.ConfigSettings.PianoSubsRid);return(0,n.useEffect)(()=>{window.tp.push(["init",()=>j(!0)])},[]),(0,n.useEffect)(()=>{if("subscribe"===k&&!I&&A){let t,n=(0,c.getCookie)(v.CHECKOUT_STATE_COOKIE),{offerId:o,termId:s,_ptid:i}=w.query;if(void 0!==n&&e)try{t=n&&JSON.parse(n)}catch{t=!1}else o&&s&&i&&(t={offerId:o,termId:s,trackingId:i});t&&window.tp.offer.startCheckout(t)}},[e,A,k,w.query]),(0,n.useEffect)(()=>{if("subscribe"===k&&!I&&A){let e,t=(0,c.getCookie)(v.CHECKOUT_STATE_COOKIE),n=new URLSearchParams(window.location.search),o=n.get("redirect_uri")||"",s=n.get("_ptid");try{let{redirectUriCookie:n}=JSON.parse(t);(0,c.deleteCookie)(v.CHECKOUT_STATE_COOKIE,{domain:"bbc.com"}),e=n||o}catch{e=o}window.tp.push(["addHandler","loginRequired",t=>{!(0,c.hasCookie)(m.USER_ID)&&(!e&&document.referrer&&(e=new URL(document.referrer).hostname.endsWith(".bbc.com")?document.referrer:"https://www.bbc.com"),(0,c.setCookie)(v.CHECKOUT_STATE_COOKIE,`${JSON.stringify({...t,...e&&{redirectUriCookie:e},...s&&{trackingId:s}})}`,{domain:"bbc.com",maxAge:3600}),C&&(window.location.href=`${C}?ptrt=${window.location.href}&purpose=subscription`))}]),window.tp.push(["addHandler","checkoutClose",t=>{if("checkoutCompleted"===t.state&&R&&N&&"us"===P&&U&&l.default.logEvent("Subscription Completed",l.default.EventType.Transaction,{eventName:"Subscription Completed",page:window.location.toString(),referrer:document.referrer,userAgent:navigator.userAgent},{"Facebook.ActionSource":"website","Facebook.EventSourceUrl":"https://www.bbc.com"}),"checkoutCompleted"===t.state||"alreadyHasAccess"===t.state){O?E():T({isSubscribed:!0});let t=localStorage.getItem(v.SUBSCRIPTION_REDIRECT_PATH_LOCAL_STORAGE_KEY);if(t){localStorage.removeItem(v.SUBSCRIPTION_REDIRECT_PATH_LOCAL_STORAGE_KEY),w.push(t);return}e&&w.push(e)}}])}},[k,w,A,C,R,N,T,E,O,U,P]),(0,n.useEffect)(()=>{let e=!!(0,c.getCookie)(m.USER_ID);if(A&&e&&B&&"subscribe"===k&&I&&I.includes("bbc-")){let e=0,t=null,n=()=>{e+=1,O?E():window.tp.api.callApi("/access/check",{rid:M},function(e){e&&e.access&&e.access.granted&&(T({isSubscribed:!0}),t&&clearInterval(t))}),3===e&&t&&clearInterval(t)};return n(),t=setInterval(n,3e3),()=>{t&&clearInterval(t)}}},[k,I,A,O,B,E,T]),(0,t.jsxs)($,{$variant:o,onClick:()=>{i&&localStorage.setItem(v.SUBSCRIPTION_REDIRECT_PATH_LOCAL_STORAGE_KEY,i),w.push("/subscribe"),window.analytics.sendEvent({eventGrouping:"subscribe",eventProperties:{group_name:"account_option",item_link:(0,x.getHref)("","subscribe"),item_type:"subscription"}})},children:["video-series-page"===o&&(0,t.jsx)(r.default,{testId:"section-title-chevron",name:"playback-avkx:play"}),s]})},I=S.css`
  ${({theme:e,$actionName:t,$isInverse:n})=>S.css`
    ${"sign_in"===t||n?S.css`
          background-color: white;
          color: ${e.button.unboxed.default.normal.content.value};
        `:S.css`
          background-color: ${e.nav.level3.bgInverseBackground.value};
          color: white;
        `}
  `}
`,A=S.default.span.withConfig({displayName:"AccountButton.styles__AccountItemIconStyled",componentId:"sc-d4d75573-0"})`
  ${({$size:e})=>S.css`
    display: flex;
    align-items: center;
    justify-content: center;

    ${()=>{switch(e){case"small":return S.css`
            width: 20px;
            height: 20px;
          `;case"large":return S.css`
            width: 24px;
            height: 24px;
          `;default:return S.css``}}};

    > svg {
      max-width: 66%;
      max-height: 66%;
    }
  `};
`,j=S.css`
  ${({theme:e})=>S.css`
    background-color: ${e.nav.level3.bgInverseBackground.value};
    ${(0,w.applyTypography)(e.nav.topbar.level3.default)};
    color: ${e.text.onInverseBG.default.value};
    grid-template-columns: auto 1fr;
    justify-items: start;
    align-items: center;
    padding: 10px 13px;
    text-align: left;
    gap: 4px;
    display: grid;
    width: 130px;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
    ${(0,w.applyTypography)(e.button.small)};
    ${I};

    &:hover {
      background-color: ${e.button.unboxed.hovered.normal.background.value};
      color: ${e.text.onInverseBG.default.value};
    }

    &:disabled {
      background-color: white;
      color: ${e.button.unboxed.disabled.normal.content.value};
      cursor: not-allowed;
    }

    ${(0,C.applyStylesForBreakpoints)(S.css`
        ${I};
        font-weight: 500;
        padding: 10px 12px;
        width: fit-content;
      `,"group2")}
  `}
`,B=S.default.button.withConfig({displayName:"AccountButton.styles__AccountItemButtonStyled",componentId:"sc-d4d75573-1"})`
  ${j};
`;S.default.a.withConfig({displayName:"AccountButton.styles__AccountItemAnchorStyled",componentId:"sc-d4d75573-2"})`
  ${j};
`;let T=({onClick:e,icon:n,text:o,isInverse:s,analytics:i,size:a="small"})=>(0,t.jsxs)(B,{onClick:t=>{window.analytics.sendEvent(i),e?.(t)},$isInverse:s,$actionName:"your_account",children:[n&&(0,t.jsx)(A,{$size:a,children:(0,t.jsx)(r.default,{name:n})}),o]}),E=({isInverse:e,icon:n,href:s="",text:i,analytics:a,size:l="small",styledAnchor:c,tabIndex:u=0})=>(0,t.jsxs)(o.default,{href:s,styledAnchor:c,styledAnchorProps:{$isInverse:e},analytics:a,tabIndex:u,children:[n&&(0,t.jsx)(A,{$size:l,children:(0,t.jsx)(r.default,{name:n})}),i]});var O=e.i(222009);let R=S.default.button.withConfig({displayName:"AccountButtons.styles__AccountMobileToggleButtonStyled",componentId:"sc-32916240-0"})`
  ${({$isPopupOpen:e,theme:t})=>S.css`
    cursor: pointer;

    ${e&&S.css`
      position: relative;
      background-color: ${t.nav.level3.bgInverseBackground.value};
      padding: calc((30px - 17.5px) / 2);

      &::before {
        content: '';
        position: absolute;
        inset: -12px;
        background: ${t.nav.level3.bgInverseBackground.value};
      }
    `};
  `};
`,N=S.default.div.withConfig({displayName:"AccountButtons.styles__AccountPopupMobileTitleDivStyled",componentId:"sc-32916240-1"})`
  ${({theme:e})=>S.css`
    display: none;
    vertical-align: middle;
    color: ${e.text.onInverseBG.default.value};
    border-bottom: solid 1px ${e.nav.lines.value};
    margin: 0 16px;
    padding: 12px;

    ${(0,C.applyStylesForBreakpoints)(S.css`
        display: block;
        ${(0,w.applyTypography)(e.nav.drawer.level1.default)};
      `,"group2")};
  `};
`,P=S.default.li.withConfig({displayName:"AccountButtons.styles__AccountPopupListItemStyled",componentId:"sc-32916240-2"})`
  ${({theme:e})=>(0,C.applyStylesForBreakpoints)(S.css`
        margin: 0 16px;

        &:not(:last-child) {
          border-bottom: solid 1px ${e.nav.lines.value};
        }
      `,"group2")}
`,F=S.default.a.withConfig({displayName:"AccountButtons.styles__AccountPopupListItemAnchorStyled",componentId:"sc-32916240-3"})`
  ${({theme:e})=>S.css`
    ${j};

    ${(0,C.applyStylesForBreakpoints)(S.css`
        display: flex;
        column-gap: 4px;
        padding: 12px;
        color: ${e.text.onInverseBG.default.value};
        ${(0,w.applyTypography)(e.nav.drawer.level1.default)};
      `,"group2")};
  `}
`,U=S.default.div.withConfig({displayName:"AccountButtons.styles__AccountPopupMobileButtonDivStyled",componentId:"sc-32916240-4"})`
  ${({theme:e,$hasDividerLine:t})=>S.css`
    display: none;
    align-items: center;
    justify-content: center;
    padding: 12px;

    ${(0,C.applyStylesForBreakpoints)(S.css`
        display: flex;
        margin-inline: 16px;

        ${t&&S.css`
          border-top: solid 1px ${e.nav.lines.value};
        `}
      `,"group2")}
  `};
`,M=S.default.div.withConfig({displayName:"AccountButtons.styles__AccountPopupContainerStyled",componentId:"sc-32916240-5"})`
  height: max-content;
  width: 130px;
  position: absolute;
  top: 40px;
  overflow: hidden;
  ${(0,O.applyZIndex)("level4")};

  ${(0,C.applyStylesForBreakpoints)(S.css`
      width: 100%;
      right: 0;
      left: 0;
      top: 48px;
    `,"group2")}
`,K=S.keyframes`
  from {
    transform: translateX(100vw);
  }
  to {
    transform: translateX(0);
  }
`,H=S.default.div.withConfig({displayName:"AccountButtons.styles__AccountPopupStyled",componentId:"sc-32916240-6"})`
  ${({theme:e})=>S.css`
    border-top: 1px solid ${e.button.unboxed.hovered.normal.background.value};
    background-color: ${e.nav.level3.bgInverseBackground.value};
    height: max-content;
    width: 100%;
    overflow: hidden;

    ${(0,C.applyStylesForBreakpoints)(S.css`
        border-top: none;
        top: 64px;
        animation: ${K} 0.1s linear forwards;
      `,"group2")}
  `}
`,L=S.default.div.withConfig({displayName:"AccountButtons.styles__AccountButtonsWrapperStyled",componentId:"sc-32916240-7"})`
  position: relative;
`,D=S.default.div.withConfig({displayName:"AccountButtons.styles__AccountButtonsDesktopContainerStyled",componentId:"sc-32916240-8"})`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;

  ${(0,C.applyStylesForBreakpoints)(S.css`
      display: none;
    `,"group2")}
`,G=S.default.div.withConfig({displayName:"AccountButtons.styles__AccountButtonsMobileContainerStyled",componentId:"sc-32916240-9"})`
  display: none;
  align-items: center;
  justify-content: end;

  ${(0,C.applyStylesForBreakpoints)(S.css`
      display: flex;
    `,"group2")}
`,Y=({actions:e,isSignedIn:n})=>{let o=e.filter(({actionName:e})=>"register"!==e);return(0,t.jsx)(M,{children:(0,t.jsxs)(H,{"data-testid":"your-account-popup",children:[n&&(0,t.jsx)(N,{children:"Your Account"}),(0,t.jsx)("ul",{children:o.map(({showInHeader:e,...n},o)=>e&&(0,t.jsx)(P,{children:(0,t.jsx)(E,{styledAnchor:F,...n})},o))}),(0,t.jsx)(z,{isSignedIn:n,actions:e})]})})},z=({isSignedIn:e,actions:i})=>{let{isSubscribed:a,isSubscriptionAllowed:r,isSubscriptionCheckComplete:l}=(0,_.useSubscriptionContext)(),[c]=i.filter(({actionName:e})=>"register"===e),u=(0,n.useMemo)(()=>{if(void 0!==c){let{href:e="",analytics:n}=c;return(0,t.jsx)("div",{"data-mobile-button":"true",children:(0,t.jsx)(o.default,{href:e,analytics:n,children:(0,t.jsx)(s.default,{isInverse:!0,size:"small",type:"general",text:"Register"})})})}return e&&a||!r||!l?null:(0,t.jsxs)("div",{"data-mobile-button":"true",children:[(0,t.jsx)(k,{isAuthenticated:e}),";"]})},[e,a,r,l,c]);return(0,t.jsx)(U,{$hasDividerLine:!!u,children:u})},q=({actions:e,isSignedIn:o,onToggleMenuClick:s,isBurgerMenuOpened:a})=>{let l=(0,n.useRef)(null),[c,u]=(0,n.useState)(!1);return(0,i.useOutsideClicker)(l,()=>u(!1)),(0,t.jsxs)(G,{ref:l,children:[(0,t.jsx)(R,{onClick:()=>u(e=>(a&&s(),!e)),$isPopupOpen:c,"data-testid":"mobile-account-toggle",children:c?(0,t.jsx)(r.default,{name:"actions:close",style:{fontSize:17.5,fill:"white",position:"relative",pointerEvents:"none"}}):o?(0,t.jsx)(r.default,{name:"account:your-account",style:{fill:"none",height:20,pointerEvents:"none"}}):(0,t.jsx)(r.default,{name:"account:account-signed-out",style:{fill:"none",height:20,pointerEvents:"none"}})}),c&&(0,t.jsx)(Y,{actions:e,isSignedIn:o})]})},J=({actions:e,onToggleMenuClick:n,isBurgerMenuOpened:i})=>{let{isSubscriptionAllowed:a,isSubscriptionCheckComplete:r}=(0,_.useSubscriptionContext)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(D,{children:(0,t.jsxs)(t.Fragment,{children:[a&&r&&(0,t.jsx)(k,{isAuthenticated:!1}),e.map(({href:e,icon:n,text:i,actionName:a,analytics:r,...l},c)=>(0,t.jsx)(o.default,{href:e,analytics:r,children:(0,t.jsx)(s.default,{icon:n,text:i,...l})},c))]})}),(0,t.jsx)(q,{actions:e,isSignedIn:!1,onToggleMenuClick:n,isBurgerMenuOpened:i})]})},V=({actions:e,onToggleMenuClick:o,isBurgerMenuOpened:s})=>{let a=(0,n.useRef)(null),[r,l]=(0,n.useState)(!1);(0,i.useOutsideClicker)(a,()=>l(!1));let{isSubscribed:c,isSubscriptionAllowed:u,isSubscriptionCheckComplete:d}=(0,_.useSubscriptionContext)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(D,{children:[u&&!c&&d&&(0,t.jsx)(k,{isAuthenticated:!0}),(0,t.jsxs)(L,{ref:a,children:[(0,t.jsx)(T,{actionName:"your_account",analytics:{eventGrouping:"account_option",eventProperties:{group_name:"account_option",item_name:"your_account"}},isInverse:!r,text:"Your Account",icon:"account:your-account",onClick:()=>l(e=>!e)}),r&&(0,t.jsx)(Y,{actions:e,isSignedIn:!0})]})]}),(0,t.jsx)(q,{actions:e,isSignedIn:!0,onToggleMenuClick:o,isBurgerMenuOpened:s})]})};e.s(["MobilePopupMenu",0,q,"YourAccountPopup",0,Y,"default",0,({actions:e,onToggleMenuClick:n,isBurgerMenuOpened:o})=>{let{isSignedIn:s}=(0,a.useUser)();return s?(0,t.jsx)(V,{actions:e,onToggleMenuClick:n,isBurgerMenuOpened:o}):(0,t.jsx)(J,{actions:e,onToggleMenuClick:n,isBurgerMenuOpened:o})}],418933)},964284,e=>{e.n(e.i(418933))}]);