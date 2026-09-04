(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,418933,e=>{"use strict";var t=e.i(391398),o=e.i(191788),n=e.i(893409),s=e.i(84541),i=e.i(324951),a=e.i(317166),r=e.i(65739),l=e.i(520087),c=e.i(480495),u=e.i(959560),d=e.i(746857),p=e.i(542383),g=e.i(57988),b=e.i(519894),h=e.i(704570),f=e.i(227162),y=e.i(395497),m=e.i(830945),x=e.i(232489),v=e.i(24768),S=e.i(394030),C=e.i(760814),w=e.i(339228),$=e.i(570549);let _=C.default.button.withConfig({displayName:"Subscription.styles__SubscribeButtonStyled",componentId:"sc-b799d13d-0"})`
  ${({theme:e,$variant:t="default"})=>C.css`
    background-color: ${e.subscription.button.default.normal.background.value};
    color: ${e.subscription.button.default.normal.content.value};
    padding: 6px 12px;
    cursor: pointer;
    border: 2px solid ${e.subscription.button.default.normal.background.value};

    ${(0,$.applyTypography)(e.button.regular)};

    ${"video-series-page"===t&&C.css`
      width: 248px;
      display: flex;
      line-height: 28px;
      padding: 6px 36px;

      svg {
        width: 14px;
        height: 28px;
        margin-right: 8px;
      }
      ${(0,w.applyStylesForBreakpoints)(C.css`
          width: 203px;
          padding: 6px 16px;
        `,"group3")};
      ${(0,w.applyStylesForBreakpoints)(C.css`
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
`;var k=e.i(789799);let I=({isAuthenticated:e,variant:n,title:s="Subscribe",redirectPath:i})=>{let{data:C}=(0,u.default)("authInfo"),{signInUrl:w}=C||{},$=(0,d.useAppRouter)(),[I,A]=(0,g.useCurrentSlug)(),[j,B]=(0,o.useState)(!1),{isSubscriptionAllowed:T}=(0,k.useSubscriptionContext)(),E=(0,k.useSubscriptionUpdateContext)(),O=(0,k.useRefetchSubscriptionClaims)(),R=(0,b.useFeatureFlag)("subscription-claims-based"),P=(0,b.useFeatureFlag)("mparticle-sdk"),N=f.appConfig.getValue(y.ConfigSettings.MparticleKey),{country:F}=(0,h.usePageData)(),{ensureTokens:U}=(0,a.useUser)(),{dotcom:{hasFullSourcepointConsent:M}}=(0,p.useConsent)(),K=f.appConfig.getValue(y.ConfigSettings.PianoSubsRid);return(0,o.useEffect)(()=>{window.tp.push(["init",()=>B(!0)])},[]),(0,o.useEffect)(()=>{if("subscribe"===I&&!A&&j){let t,o=(0,c.getCookie)(v.CHECKOUT_STATE_COOKIE),{offerId:n,termId:s,_ptid:i}=$.query;if(void 0!==o&&e)try{t=o&&JSON.parse(o)}catch{t=!1}else n&&s&&i&&(t={offerId:n,termId:s,trackingId:i});t&&window.tp.offer.startCheckout(t)}},[e,j,I,$.query]),(0,o.useEffect)(()=>{if("subscribe"===I&&!A&&j){let e,t=(0,c.getCookie)(v.CHECKOUT_STATE_COOKIE),o=new URLSearchParams(window.location.search),n=o.get("redirect_uri")||"",s=o.get("_ptid");try{let{redirectUriCookie:o}=JSON.parse(t);(0,c.deleteCookie)(v.CHECKOUT_STATE_COOKIE,{domain:"bbc.com"}),e=o||n}catch{e=n}window.tp.push(["addHandler","loginRequired",t=>{!(0,c.hasCookie)(m.USER_ID)&&(!e&&document.referrer&&(e=new URL(document.referrer).hostname.endsWith(".bbc.com")?document.referrer:"https://www.bbc.com"),(0,c.setCookie)(v.CHECKOUT_STATE_COOKIE,`${JSON.stringify({...t,...e&&{redirectUriCookie:e},...s&&{trackingId:s}})}`,{domain:"bbc.com",maxAge:3600}),w&&(window.location.href=`${w}?ptrt=${window.location.href}&purpose=subscription`))}]),window.tp.push(["addHandler","checkoutClose",t=>{if("checkoutCompleted"===t.state&&P&&N&&"us"===F&&M&&l.default.logEvent("Subscription Completed",l.default.EventType.Transaction,{eventName:"Subscription Completed",page:window.location.toString(),referrer:document.referrer,userAgent:navigator.userAgent},{"Facebook.ActionSource":"website","Facebook.EventSourceUrl":"https://www.bbc.com"}),"checkoutCompleted"===t.state||"alreadyHasAccess"===t.state){R?O():E({isSubscribed:!0});let t=localStorage.getItem(v.SUBSCRIPTION_REDIRECT_PATH_LOCAL_STORAGE_KEY);if(t){localStorage.removeItem(v.SUBSCRIPTION_REDIRECT_PATH_LOCAL_STORAGE_KEY),$.push(t);return}e&&$.push(e)}}])}},[I,$,j,w,P,N,E,O,R,M,F]),(0,o.useEffect)(()=>{let e=!!(0,c.getCookie)(m.USER_ID);if(j&&e&&T&&"subscribe"===I){let e=new URLSearchParams(window.location.search).get("shared_account_code");if(A&&A.includes("bbc-")||e)return(0,S.manualSubscriptionCheck)({isGlobalClaimsBasedEnabled:R,PianoSubscriptionResourceId:K,refetchSubscriptionClaims:O,updateSubscribedStatus:E})}},[I,A,j,R,T,O,E]),(0,t.jsxs)(_,{$variant:n,onClick:()=>{i&&localStorage.setItem(v.SUBSCRIPTION_REDIRECT_PATH_LOCAL_STORAGE_KEY,i),$.push("/subscribe"),window.analytics.sendEvent({eventGrouping:"subscribe",eventProperties:{group_name:"account_option",item_link:(0,x.getHref)("","subscribe"),item_type:"subscription"}})},children:["video-series-page"===n&&(0,t.jsx)(r.default,{testId:"section-title-chevron",name:"playback-avkx:play"}),s]})},A=C.css`
  ${({theme:e,$actionName:t,$isInverse:o})=>C.css`
    ${"sign_in"===t||o?C.css`
          background-color: white;
          color: ${e.button.unboxed.default.normal.content.value};
        `:C.css`
          background-color: ${e.nav.level3.bgInverseBackground.value};
          color: white;
        `}
  `}
`,j=C.default.span.withConfig({displayName:"AccountButton.styles__AccountItemIconStyled",componentId:"sc-d4d75573-0"})`
  ${({$size:e})=>C.css`
    display: flex;
    align-items: center;
    justify-content: center;

    ${()=>{switch(e){case"small":return C.css`
            width: 20px;
            height: 20px;
          `;case"large":return C.css`
            width: 24px;
            height: 24px;
          `;default:return C.css``}}};

    > svg {
      max-width: 66%;
      max-height: 66%;
    }
  `};
`,B=C.css`
  ${({theme:e})=>C.css`
    background-color: ${e.nav.level3.bgInverseBackground.value};
    ${(0,$.applyTypography)(e.nav.topbar.level3.default)};
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
    ${(0,$.applyTypography)(e.button.small)};
    ${A};

    &:hover {
      background-color: ${e.button.unboxed.hovered.normal.background.value};
      color: ${e.text.onInverseBG.default.value};
    }

    &:disabled {
      background-color: white;
      color: ${e.button.unboxed.disabled.normal.content.value};
      cursor: not-allowed;
    }

    ${(0,w.applyStylesForBreakpoints)(C.css`
        ${A};
        font-weight: 500;
        padding: 10px 12px;
        width: fit-content;
      `,"group2")}
  `}
`,T=C.default.button.withConfig({displayName:"AccountButton.styles__AccountItemButtonStyled",componentId:"sc-d4d75573-1"})`
  ${B};
`;C.default.a.withConfig({displayName:"AccountButton.styles__AccountItemAnchorStyled",componentId:"sc-d4d75573-2"})`
  ${B};
`;let E=({onClick:e,icon:o,text:n,isInverse:s,analytics:i,size:a="small"})=>(0,t.jsxs)(T,{onClick:t=>{window.analytics.sendEvent(i),e?.(t)},$isInverse:s,$actionName:"your_account",children:[o&&(0,t.jsx)(j,{$size:a,children:(0,t.jsx)(r.default,{name:o})}),n]}),O=({isInverse:e,icon:o,href:s="",text:i,analytics:a,size:l="small",styledAnchor:c,tabIndex:u=0})=>(0,t.jsxs)(n.default,{href:s,styledAnchor:c,styledAnchorProps:{$isInverse:e},analytics:a,tabIndex:u,children:[o&&(0,t.jsx)(j,{$size:l,children:(0,t.jsx)(r.default,{name:o})}),i]});var R=e.i(222009);let P=C.default.button.withConfig({displayName:"AccountButtons.styles__AccountMobileToggleButtonStyled",componentId:"sc-32916240-0"})`
  ${({$isPopupOpen:e,theme:t})=>C.css`
    cursor: pointer;

    ${e&&C.css`
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
`,N=C.default.div.withConfig({displayName:"AccountButtons.styles__AccountPopupMobileTitleDivStyled",componentId:"sc-32916240-1"})`
  ${({theme:e})=>C.css`
    display: none;
    vertical-align: middle;
    color: ${e.text.onInverseBG.default.value};
    border-bottom: solid 1px ${e.nav.lines.value};
    margin: 0 16px;
    padding: 12px;

    ${(0,w.applyStylesForBreakpoints)(C.css`
        display: block;
        ${(0,$.applyTypography)(e.nav.drawer.level1.default)};
      `,"group2")};
  `};
`,F=C.default.li.withConfig({displayName:"AccountButtons.styles__AccountPopupListItemStyled",componentId:"sc-32916240-2"})`
  ${({theme:e})=>(0,w.applyStylesForBreakpoints)(C.css`
        margin: 0 16px;

        &:not(:last-child) {
          border-bottom: solid 1px ${e.nav.lines.value};
        }
      `,"group2")}
`,U=C.default.a.withConfig({displayName:"AccountButtons.styles__AccountPopupListItemAnchorStyled",componentId:"sc-32916240-3"})`
  ${({theme:e})=>C.css`
    ${B};

    ${(0,w.applyStylesForBreakpoints)(C.css`
        display: flex;
        column-gap: 4px;
        padding: 12px;
        color: ${e.text.onInverseBG.default.value};
        ${(0,$.applyTypography)(e.nav.drawer.level1.default)};
      `,"group2")};
  `}
`,M=C.default.div.withConfig({displayName:"AccountButtons.styles__AccountPopupMobileButtonDivStyled",componentId:"sc-32916240-4"})`
  ${({theme:e,$hasDividerLine:t})=>C.css`
    display: none;
    align-items: center;
    justify-content: center;
    padding: 12px;

    ${(0,w.applyStylesForBreakpoints)(C.css`
        display: flex;
        margin-inline: 16px;

        ${t&&C.css`
          border-top: solid 1px ${e.nav.lines.value};
        `}
      `,"group2")}
  `};
`,K=C.default.div.withConfig({displayName:"AccountButtons.styles__AccountPopupContainerStyled",componentId:"sc-32916240-5"})`
  height: max-content;
  width: 130px;
  position: absolute;
  top: 40px;
  overflow: hidden;
  ${(0,R.applyZIndex)("level4")};

  ${(0,w.applyStylesForBreakpoints)(C.css`
      width: 100%;
      right: 0;
      left: 0;
      top: 48px;
    `,"group2")}
`,L=C.keyframes`
  from {
    transform: translateX(100vw);
  }
  to {
    transform: translateX(0);
  }
`,H=C.default.div.withConfig({displayName:"AccountButtons.styles__AccountPopupStyled",componentId:"sc-32916240-6"})`
  ${({theme:e})=>C.css`
    border-top: 1px solid ${e.button.unboxed.hovered.normal.background.value};
    background-color: ${e.nav.level3.bgInverseBackground.value};
    height: max-content;
    width: 100%;
    overflow: hidden;

    ${(0,w.applyStylesForBreakpoints)(C.css`
        border-top: none;
        top: 64px;
        animation: ${L} 0.1s linear forwards;
      `,"group2")}
  `}
`,D=C.default.div.withConfig({displayName:"AccountButtons.styles__AccountButtonsWrapperStyled",componentId:"sc-32916240-7"})`
  position: relative;
`,G=C.default.div.withConfig({displayName:"AccountButtons.styles__AccountButtonsDesktopContainerStyled",componentId:"sc-32916240-8"})`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;

  ${(0,w.applyStylesForBreakpoints)(C.css`
      display: none;
    `,"group2")}
`,Y=C.default.div.withConfig({displayName:"AccountButtons.styles__AccountButtonsMobileContainerStyled",componentId:"sc-32916240-9"})`
  display: none;
  align-items: center;
  justify-content: end;

  ${(0,w.applyStylesForBreakpoints)(C.css`
      display: flex;
    `,"group2")}
`,z=({actions:e,isSignedIn:o})=>{let n=e.filter(({actionName:e})=>"register"!==e);return(0,t.jsx)(K,{children:(0,t.jsxs)(H,{"data-testid":"your-account-popup",children:[o&&(0,t.jsx)(N,{children:"Your Account"}),(0,t.jsx)("ul",{children:n.map(({showInHeader:e,...o},n)=>e&&(0,t.jsx)(F,{children:(0,t.jsx)(O,{styledAnchor:U,...o})},n))}),(0,t.jsx)(q,{isSignedIn:o,actions:e})]})})},q=({isSignedIn:e,actions:i})=>{let{isSubscribed:a,isSubscriptionAllowed:r,isSubscriptionCheckComplete:l}=(0,k.useSubscriptionContext)(),[c]=i.filter(({actionName:e})=>"register"===e),u=(0,o.useMemo)(()=>{if(void 0!==c){let{href:e="",analytics:o}=c;return(0,t.jsx)("div",{"data-mobile-button":"true",children:(0,t.jsx)(n.default,{href:e,analytics:o,children:(0,t.jsx)(s.default,{isInverse:!0,size:"small",type:"general",text:"Register"})})})}return e&&a||!r||!l?null:(0,t.jsxs)("div",{"data-mobile-button":"true",children:[(0,t.jsx)(I,{isAuthenticated:e}),";"]})},[e,a,r,l,c]);return(0,t.jsx)(M,{$hasDividerLine:!!u,children:u})},J=({actions:e,isSignedIn:n,onToggleMenuClick:s,isBurgerMenuOpened:a})=>{let l=(0,o.useRef)(null),[c,u]=(0,o.useState)(!1);return(0,i.useOutsideClicker)(l,()=>u(!1)),(0,t.jsxs)(Y,{ref:l,children:[(0,t.jsx)(P,{onClick:()=>u(e=>(a&&s(),!e)),$isPopupOpen:c,"data-testid":"mobile-account-toggle",children:c?(0,t.jsx)(r.default,{name:"actions:close",style:{fontSize:17.5,fill:"white",position:"relative",pointerEvents:"none"}}):n?(0,t.jsx)(r.default,{name:"account:your-account",style:{fill:"none",height:20,pointerEvents:"none"}}):(0,t.jsx)(r.default,{name:"account:account-signed-out",style:{fill:"none",height:20,pointerEvents:"none"}})}),c&&(0,t.jsx)(z,{actions:e,isSignedIn:n})]})},V=({actions:e,onToggleMenuClick:o,isBurgerMenuOpened:i})=>{let{isSubscriptionAllowed:a,isSubscriptionCheckComplete:r}=(0,k.useSubscriptionContext)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(G,{children:(0,t.jsxs)(t.Fragment,{children:[a&&r&&(0,t.jsx)(I,{isAuthenticated:!1}),e.map(({href:e,icon:o,text:i,actionName:a,analytics:r,...l},c)=>(0,t.jsx)(n.default,{href:e,analytics:r,children:(0,t.jsx)(s.default,{icon:o,text:i,...l})},c))]})}),(0,t.jsx)(J,{actions:e,isSignedIn:!1,onToggleMenuClick:o,isBurgerMenuOpened:i})]})},W=({actions:e,onToggleMenuClick:n,isBurgerMenuOpened:s})=>{let a=(0,o.useRef)(null),[r,l]=(0,o.useState)(!1);(0,i.useOutsideClicker)(a,()=>l(!1));let{isSubscribed:c,isSubscriptionAllowed:u,isSubscriptionCheckComplete:d}=(0,k.useSubscriptionContext)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(G,{children:[u&&!c&&d&&(0,t.jsx)(I,{isAuthenticated:!0}),(0,t.jsxs)(D,{ref:a,children:[(0,t.jsx)(E,{actionName:"your_account",analytics:{eventGrouping:"account_option",eventProperties:{group_name:"account_option",item_name:"your_account"}},isInverse:!r,text:"Your Account",icon:"account:your-account",onClick:()=>l(e=>!e)}),r&&(0,t.jsx)(z,{actions:e,isSignedIn:!0})]})]}),(0,t.jsx)(J,{actions:e,isSignedIn:!0,onToggleMenuClick:n,isBurgerMenuOpened:s})]})};e.s(["MobilePopupMenu",0,J,"YourAccountPopup",0,z,"default",0,({actions:e,onToggleMenuClick:o,isBurgerMenuOpened:n})=>{let{isSignedIn:s}=(0,a.useUser)();return s?(0,t.jsx)(W,{actions:e,onToggleMenuClick:o,isBurgerMenuOpened:n}):(0,t.jsx)(V,{actions:e,onToggleMenuClick:o,isBurgerMenuOpened:n})}],418933)},964284,e=>{e.n(e.i(418933))}]);