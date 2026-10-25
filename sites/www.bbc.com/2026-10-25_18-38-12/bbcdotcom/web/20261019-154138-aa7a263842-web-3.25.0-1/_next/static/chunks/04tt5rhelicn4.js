(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,279353,e=>{"use strict";var t=e.i(191788),a=e.i(391398),i=e.i(184919),o=e.i(959560),n=e.i(117191),l=e.i(823575),r=e.i(480495),s=e.i(830945),d=e.i(746857),p=e.i(753423);let c=function(e){let{push:a}=(0,d.useAppRouter)(),i=(0,p.usePopup)(),[o,n]=(0,t.useState)(null),[l,c]=(0,t.useState)(!1),[u,g]=(0,t.useState)(!1),[m,f]=(0,t.useState)(!1),[y,h]=(0,t.useState)(!1),[{href:x}={href:""}]=e;(0,t.useEffect)(()=>{let e=!(0,r.hasCookie)(s.AUTOPLAY)||(0,r.getCookie)(s.AUTOPLAY),t=window.sessionStorage.getItem("bbcx-audio-played");t&&document.referrer.includes(t)?g(e):g(!1),f(e)},[]);let b=()=>{f(!1)},S=(0,t.useMemo)(()=>({countdownValue:o,countdownTotalSecs:10,isPlaying:l,isAutoplayEnabled:u,isNextItemAutoplayEnabled:m,onAutoplayEnabledToggle:e=>g(t=>{let a,i,o,n,l=e??!t;return f(l),a=!0,i=l??!0,o=(0,r.hasCookie)(s.POLICY),n=(0,r.hasCookie)(s.AUTOPLAY),o&&(a="1"===(0,r.getCookie)(s.POLICY).charAt(2)),a?void 0===l&&n?i=(0,r.getCookie)(s.AUTOPLAY):(0,r.setCookie)(s.AUTOPLAY,i,{domain:"bbc.com",maxAge:31536e3}):n&&(0,r.deleteCookie)(s.AUTOPLAY),l}),cancelNextItemAutoplay:b}),[o,l,u,m]);return(0,t.useEffect)(()=>{let t=t=>{if(l){let o=t.target.closest("a");o&&o.href&&(e.find(e=>o.href.includes(e.href))||(t.preventDefault(),i({variant:"leaving-page",onPrimaryAction:()=>a(o.href),onSecondaryAction:()=>window.open(o.href,"_blank")})))}};return document.addEventListener("click",t),()=>{document.removeEventListener("click",t)}},[l,e,a,i]),{handleTimeUpdate:e=>{let{duration:t,currentTime:a}=e,i=Math.ceil(t-a),o=i<10?i:null;o&&!y&&(h(!0),window.sessionStorage.setItem("bbcx-audio-played",window.location.pathname)),n(o)},handlePlaybackUpdate:e=>()=>"ended"===e?f(e=>(x&&e&&a(`${window.location.origin}${x}`).then(),e)):c("playing"===e),providerValue:S}};var u=e.i(519894),g=e.i(530815),m=e.i(656612);let f=function(e){let t=(0,m.useCanPlayEpisode)();return e.filter(({metadata:e})=>t(e.availability))};var y=e.i(915929),y=y,h=e.i(900324),x=e.i(789799),b=e.i(893409),S=e.i(459949),v=e.i(913777),w=e.i(65739),$=e.i(490602),j=e.i(760814),k=e.i(339228),C=e.i(570549);let _=j.default.div.withConfig({displayName:"AudioEpisodeDetails.styles__AudioEpisodeMetadataStyled",componentId:"sc-9e3f8507-0"})`
  display: flex;
  gap: 12px;
  align-items: center;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      flex-direction: column;
      gap: 16px;
      align-items: flex-start;
    `,"group2")};
`,I=j.default.div.withConfig({displayName:"AudioEpisodeDetails.styles__AudioEpisodeInlineMetadataStyled",componentId:"sc-9e3f8507-1"})`
  ${({theme:e})=>j.css`
    display: inline-flex;
    flex-flow: row wrap;

    ${(0,k.applyStylesForBreakpoints)(j.css`
        flex-wrap: wrap;
      `,"group1")};

    p {
      color: #545658;
      display: flex;
      flex-direction: row;
      ${(0,C.applyTypography)(e.metaData.large)};
      white-space: nowrap;

      &:not(:last-of-type)::after {
        content: '';
        background-color: #545658;
        width: 2px;
        height: 2px;
        margin: 8px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      ${(0,k.applyStylesForBreakpoints)(j.css`
          text-align: center;
        `,"group1")};
    }
  `}
`,T=j.default.p.withConfig({displayName:"AudioEpisodeDetails.styles__AudioEpisodeTextStyled",componentId:"sc-9e3f8507-2"})`
  ${({theme:e})=>j.css`
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    overflow-wrap: anywhere;
    ${(0,C.applyTypography)(e.bodyCopy.default.bpLarge)};
  `}
`,B=j.default.a.withConfig({displayName:"AudioEpisodeDetails.styles__AudioEpisodeSeeMoreStyled",componentId:"sc-9e3f8507-3"})`
  ${({theme:e})=>j.css`
    display: flex;
    flex-direction: row;
    gap: 4px;
    height: 44px;
    align-items: center;
    ${(0,C.applyTypography)(e.textLink.large.regular.bpLarge)};
    text-decoration: none;
    cursor: pointer;
    color: unset;
    padding-right: 24px;

    &:hover {
      text-decoration: underline;
    }
  `}
`,N=(0,j.default)(v.GridStyled).withConfig({displayName:"AudioEpisodeDetails.styles__AudioEpisodeActionsContainer",componentId:"sc-9e3f8507-4"})`
  ${({$isStationPage:e})=>e&&(0,k.applyStylesForBreakpoints)(j.css`
        display: none;
      `,"group3")};
`,A=j.default.div.withConfig({displayName:"AudioEpisodeDetails.styles__AudioButtonsStyled",componentId:"sc-9e3f8507-5"})`
  display: flex;
  ${(0,k.applyStylesForBreakpoints)(j.css`
      display: unset;
    `,"group2")}
`;var L=e.i(16234);let F=({releaseDate:e,duration:t,isWithinSubscriptionWindow:i=!1,availabilityInfo:o,isContentUnavailable:n=!1})=>{let{isSubscriptionAllowed:l}=(0,x.useSubscriptionContext)(),r=i&&l,s=i?l&&!!e:!!e;return r||s||t||o||n?(0,a.jsxs)(_,{children:[r&&(0,a.jsx)(L.default,{variant:"subscribers-only"}),(0,a.jsxs)(I,{children:[s&&e&&(0,a.jsx)("p",{suppressHydrationWarning:!0,children:e.toString()}),t&&(0,a.jsx)("p",{children:t}),o&&(0,a.jsx)("p",{suppressHydrationWarning:!0,children:o}),n&&(0,a.jsx)("p",{children:"This content is not currently available"})]})]}):null},P=({releaseDate:e,duration:t,availabilityInfo:i,description:o,moreEpisodesPath:n,programmesUrl:l,isActionVisible:r=!0,isStationPage:s=!1,contentSubtype:d,avProperties:p,isWithinSubscriptionWindow:c=!1,isContentUnavailable:u=!1,isSaveDisabled:g=!1})=>{let{av_episode_id:m,av_brand_id:f,av_series_id:y}=p||{};return(0,a.jsxs)(v.GridStyled,{$columns:[1,1,"minmax(90px, auto) auto","minmax(90px, auto) auto","minmax(90px, auto) auto","minmax(90px, auto) auto"],$maxWidth:["722px","722px","722px","722px","722px","722px"],$gridGap:["32px","32px","16px","16px","16px","16px"],$margin:["auto","auto","auto","auto","auto","auto"],$padding:["0 16px","0 16px","0 16px","0 16px","0 16px","0 16px"],$alignItems:"start","data-testid":"audio-episode-details-wrapper",children:[(0,a.jsx)(N,{$isStationPage:s,"data-testid":"audio-episode-details-buttons",$columns:["repeat(3, 90px)","repeat(3, 90px)",1,1,1,1],$gridGap:["0px","0px","24px","24px","24px","24px"],$margin:["0 -1rem","0 -1rem","0","0","0","0"],children:r&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(S.SaveButton,{alignment:"bottom-left",isOnLeftEdge:!0,action:"save",isInverse:!1,iconPosition:"top",variant:"audio",contentId:m,avProperties:p,disabled:g}),(0,a.jsx)(S.SaveButton,{alignment:"bottom-left",isOnLeftEdge:!0,action:"follow",isInverse:!1,iconPosition:"top",variant:"audio",contentId:f||y,contentSubtype:d,avProperties:{...p,av_content_subtype:d,av_content_id:f||y}}),(0,a.jsx)($.default,{withOverlayBackground:!0,alignment:"bottom-left",isInverse:!0,size:"large",trigger:"click",isOnLeftEdge:!0,iconPosition:"top",type:"round",title:"Share",avProperties:p})]})}),(0,a.jsxs)(v.GridStyled,{"data-testid":"audio-episode-details-info",$columns:[1,1,1,1,1,1],$gridGap:["16px","16px","24px","24px","24px","24px"],children:[(0,a.jsx)(F,{duration:t,releaseDate:e,isWithinSubscriptionWindow:c,availabilityInfo:i,isContentUnavailable:u}),(0,a.jsxs)(v.GridStyled,{$columns:[1,1,1,1,1,1],$gridGap:["16px","16px","16px","16px","16px","16px"],children:[o.map((e,t)=>(0,a.jsx)(T,{children:e},t)),(0,a.jsxs)(A,{children:[n&&(0,a.jsxs)(b.default,{href:n,styledAnchor:B,children:[(0,a.jsx)("p",{children:"See more episodes"}),(0,a.jsx)(w.default,{name:"arrows:chevron-right"})]}),l&&(0,a.jsxs)(b.default,{href:l,styledAnchor:B,target:"_blank",children:[(0,a.jsx)("p",{children:"Programme website"}),(0,a.jsx)(w.default,{name:"arrows:chevron-right"})]})]})]})]})]})};var E=e.i(249356),M=e.i(46230);let R=j.default.div.withConfig({displayName:"AudioEpisodePlayer.styles__SPAPlayerPlaceholderStyled",componentId:"sc-6c3c1aa0-0"})`
  width: 100%;
  height: 160px;
`,D=j.default.div.withConfig({displayName:"AudioEpisodePlayer.styles__PianoDivStyled",componentId:"sc-6c3c1aa0-1"})`
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  overflow: hidden;
  height: 152px;
  ${(0,k.applyStylesForBreakpoints)(j.css`
      height: 140px;
    `,"group3")};
`,O=(0,j.default)(R).withConfig({displayName:"AudioEpisodePlayer.styles__AudioWindowingPlaceholderStyled",componentId:"sc-6c3c1aa0-2"})`
  display: grid;
  place-content: center;
  opacity: 0.7;
`,G=j.default.button.withConfig({displayName:"AudioEpisodePlayer.styles__AudioWindowingPlaceholderButtonStyled",componentId:"sc-6c3c1aa0-3"})(({theme:e})=>j.css`
    color: ${e.text.onInverseBG.default.value};
    border: 4px solid ${e.text.onInverseBG.default.value};
    border-radius: 50%;
    width: 68px;
    aspect-ratio: 1 / 1;
    display: grid;
    place-content: center;
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    cursor: not-allowed;
  `),H="audioEpisodePlayerPlaceholder",z="audioEpisodePagePianoDiv",U="audioEpisodeWindowingPlaceholder",W="audioEpisodeWindowingPlaceholderButton",V="Audio player is unavailable";var Y=e.i(745853),q=e.i(449492);let Q=(0,t.memo)(({episodeId:e,durationInSeconds:t,upNextCollection:i,mediaProps:o,isAutoplayEnabled:n,isNextItemAutoplayEnabled:l,onAutoplayEnabledToggle:r,onTimeUpdate:s,onPlaybackUpdate:p})=>{let{push:c}=(0,d.useAppRouter)(),u=function(e,t=0){let[a]=(0,Y.useMediaProgress)([e]),i=Math.round(t*q.EARLY_PROGRESS/100),o=Math.round(t*q.LATE_PROGRESS/100),{offset:n=null}=a??{};return null!==n&&Number.isInteger(n)?0===n||n>=o?0:Math.max(n,i):null}(e,t);if(null===u)return(0,a.jsx)(R,{"data-testid":H});let g=0!==i.length;return(0,a.jsx)(M.default,{...o,testId:"audioEpisodePlayer",isAutoPlayDisabled:!n,nextItemAutoPlay:l,startTime:u,onTimeUpdate:s,onPlaybackStarted:p("playing"),onPlaybackPaused:p("paused"),onPlaybackEnded:p("ended"),onNextRequested:()=>{let[{href:e}={}]=i;e&&c(e)},onUserAutoplaySettingChange:r,includeNextButton:g})},E.default),X=()=>(0,a.jsx)(O,{id:U,"data-testid":U,children:(0,a.jsx)(G,{disabled:!0,id:W,"data-testid":W,"aria-label":V,title:V,children:(0,a.jsx)(w.default,{name:"playback-avkx:play",width:18,height:18})})}),K=({playerSlotState:e,episodeId:t,durationInSeconds:i,upNextCollection:o,mediaProps:n,isAutoplayEnabled:l,isNextItemAutoplayEnabled:r,onAutoplayEnabledToggle:s,onTimeUpdate:d,onPlaybackUpdate:p})=>"loading"===e?(0,a.jsx)(R,{"data-testid":H}):"subscriptionGate"===e?(0,a.jsx)(D,{id:z,"data-testid":z}):"unavailable"!==e&&t?(0,a.jsx)(Q,{episodeId:t,durationInSeconds:i,upNextCollection:o,mediaProps:n,isAutoplayEnabled:l,isNextItemAutoplayEnabled:r,onAutoplayEnabledToggle:s,onTimeUpdate:d,onPlaybackUpdate:p}):(0,a.jsx)(X,{});var Z=e.i(958678),J=e.i(450228);let ee=j.css`
  width: calc(100% - 24px);
  padding: 0 12px;
`,et=j.default.div.withConfig({displayName:"AudioEpisodeTop.styles__AudioEpisodeTopWrapperStyled",componentId:"sc-5e1e83ec-0"})`
  position: relative;
  padding-top: 48px;

  ${({guidance:e})=>!e&&(0,k.applyStylesForBreakpoints)(j.css`
        padding-top: 24px;
      `,"group3")};
`,ea=j.default.div.withConfig({displayName:"AudioEpisodeTop.styles__AudioEpisodeInnerStyled",componentId:"sc-5e1e83ec-1"})`
  max-width: 1280px;
  margin: auto;
`,ei=j.default.div.withConfig({displayName:"AudioEpisodeTop.styles__AudioEpisodeTopStyled",componentId:"sc-5e1e83ec-2"})`
  max-width: 722px;
  margin: auto;
  display: flex;
  flex-direction: row;
  column-gap: 32px;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      flex-direction: column;
      align-items: center;
      overflow: visible;
      row-gap: 12px;
      height: 284px;
    `,"group3")};
`,eo=j.default.div.withConfig({displayName:"AudioEpisodeTop.styles__AudioEpisodeTextsStyled",componentId:"sc-5e1e83ec-3"})`
  ${({theme:e})=>j.css`
    align-self: baseline;

    ${(0,k.applyStylesForBreakpoints)(j.css`
        width: 100%;
        position: absolute;
        bottom: 0;
        min-height: 94px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        z-index: 3;
        background: ${`linear-gradient(transparent, ${e.container.onInverseBG2.value} 35% )`};
      `,"group3")};
  `};
`,en=j.default.div.withConfig({displayName:"AudioEpisodeTop.styles__AudioEpisodeImageStyled",componentId:"sc-5e1e83ec-4"})`
  position: relative;
  z-index: 1;
  width: auto;
  aspect-ratio: 1 / 1;
  height: 142px;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      position: absolute;
      height: auto;
      display: flex;
      justify-content: center;
    `,"group3")};

  img {
    position: absolute;
    height: 100%;
    aspect-ratio: 1 / 1;
    width: auto;
    object-fit: cover;

    ${(0,k.applyStylesForBreakpoints)(j.css`
        height: 190px;
      `,"group3")};
  }
`,el=j.default.div.withConfig({displayName:"AudioEpisodeTop.styles__AudioEpisodeBackgroundStyled",componentId:"sc-5e1e83ec-5"})`
  ${({$imgUrl:e})=>e?j.css`
          position: absolute;
          height: 388px;
          background:
            linear-gradient(to left, transparent, transparent 75%, black 75%, #333333 75%),
            url(${e}) no-repeat center;
          bottom: 20px;
          z-index: 0;
          aspect-ratio: 1 / 1;
          background-size: cover;
          filter: blur(120px);

          /* calculation: 388 is the width of the blur - the difference between the container and the content for 1 side + image width - blur correction */

          /* confirmed with design team */
          left: calc(-388px + (100% - 722px) / 2 + 142px - 60px);

          ${(0,k.applyStylesForBreakpoints)(j.css`
              display: none;
            `,"group3")};
        `:j.css``};
`,er=(0,j.default)(el).withConfig({displayName:"AudioEpisodeTop.styles__AudioEpisodeMobileBackgroundStyled",componentId:"sc-5e1e83ec-6"})`
  ${({$imgUrl:e})=>j.css`
    display: none;

    ${e&&(0,k.applyStylesForBreakpoints)(j.css`
        background: url(${e}) no-repeat center;
        height: 360px;
        display: block;
        z-index: -2;
        left: -50%;
        bottom: 28px;
      `,"group3")};
  `}
`,es=j.default.h2.withConfig({displayName:"AudioEpisodeTop.styles__AudioEpisodeBrandNameStyled",componentId:"sc-5e1e83ec-7"})`
  ${({theme:e})=>j.css`
    color: ${e.text.onInverseBG.mediumEmphasis.value};
    text-align: left;
    margin-bottom: 16px;

    ${(0,C.applyTypography)(e.podcastPlayer.brandName.default.bpLarge)};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        text-align: left;
        margin-bottom: 8px;

        ${ee};
        ${(0,C.applyTypography)(e.podcastPlayer.brandName.default.bpSmall)};
      `,"group3")};
  `};
`,ed=j.default.h3.withConfig({displayName:"AudioEpisodeTop.styles__AudioEpisodeSeriesNameStyled",componentId:"sc-5e1e83ec-8"})`
  ${({theme:e})=>j.css`
    color: ${e.text.onInverseBG.lowEmpasis.value};
    margin-bottom: 4px;
    text-align: left;

    ${(0,C.applyTypography)(e.podcastPlayer.seriesName.bpLarge)};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        text-align: left;

        ${ee};
        ${(0,C.applyTypography)(e.podcastPlayer.seriesName.bpSmall)};
      `,"group3")};
  `};
`,ep=j.default.h1.withConfig({displayName:"AudioEpisodeTop.styles__AudioEpisodeTitleStyled",componentId:"sc-5e1e83ec-9"})`
  ${({theme:e})=>j.css`
    text-align: left;
    color: ${e.text.onInverseBG.default.value};
    ${(0,C.applyTypography)(e.podcastPlayer.episodeName.bpLarge)};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        text-align: left;

        ${ee};
        ${(0,C.applyTypography)(e.podcastPlayer.episodeName.bpSmall)};
      `,"group3")};
  `};
`;var ec=e.i(84541);let eu=(e,t,a=10)=>i=>{let[{target:o,contentRect:n}]=i,{children:l}=o,{width:r}=n,s=Array.from(l),d=t?s[s.length-1]:null,p=s.reduce((e,t)=>{let{clientWidth:a}=t;return e+a},a),c=p>r;if(d){let{clientWidth:t}=d;r-t>p&&e(c)}else c!==t&&e(c)};var eg=e.i(468364);let em=j.default.div.withConfig({displayName:"GuidanceText.styles__GuidanceOuterStyled",componentId:"sc-53656955-0"})`
  ${({$isOpen:e})=>j.css`
    box-sizing: border-box;
    height: ${e?"auto":"40px"};
    position: absolute;
    top: 0;
    background: black;
    z-index: 2;
    padding: 12px 0;
    width: 100vw; /* Fallback */
    width: 100dvw;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  `}
`,ef=j.default.div.withConfig({displayName:"GuidanceText.styles__GuidanceInnerStyled",componentId:"sc-53656955-1"})`
  ${({theme:e,$isOpen:t})=>j.css`
    max-width: 1280px;
    height: 100%;
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    column-gap: 6px;
    padding: 0 16px;
    overflow: hidden;
    text-overflow: ellipsis;

    button {
      box-sizing: border-box;
      height: 16px;
      color: #ffffff;
      padding: 0;
      ${(0,C.applyTypography)(e.textLink.small.regular.bpLarge)}

      &:hover,
      &:focus,
      &:active {
        color: #ffffff;
        font-weight: 500;

        /* TODO I did a stupid ting with the past imitating font-weight for Button with text-shadow to avoid jumps... */
        text-shadow: unset;
      }
    }
  `}
`,ey=j.default.p.withConfig({displayName:"GuidanceText.styles__GuidanceTextStyled",componentId:"sc-53656955-2"})`
  ${({theme:e,$isOpen:t})=>j.css`
    color: #ffffff;
    height: auto;
    white-space: ${t?"unset":"nowrap"};
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 10px;

    ${(0,C.applyTypography)(e.errorBannerText.bpSmall)}
  `}
`,eh=j.default.div.withConfig({displayName:"GuidanceText.styles__GuidanceIconWrapper",componentId:"sc-53656955-3"})`
  height: 1em;
`,ex=({text:e})=>{let[i,o]=(0,t.useState)(!1),[n,l]=(0,t.useState)(!1),r=(0,t.useRef)(null);return(0,eg.useResizeObserver)(r,eu(l,n)),(0,a.jsx)(em,{"data-testid":"audioEpisodeGuidanceText",$isOpen:i,children:(0,a.jsxs)(ef,{$isOpen:i,ref:r,children:[(0,a.jsx)(eh,{children:(0,a.jsx)(w.default,{name:"social:guidance"})}),(0,a.jsx)(ey,{$isOpen:i,children:e}),n&&(0,a.jsx)(ec.default,{text:`${i?"See less":"See more"}`,type:"unboxed-share",onClick:()=>o(!i)})]})})},eb=({brandName:e,seriesName:t,episodeTitle:i,img:o="",backgroundImg:n="",alt:l,guidance:r})=>(0,a.jsxs)(et,{"data-testid":"audioEpisodeTopWrapperStyled",guidance:!!r,children:[n&&(0,a.jsx)(Z.default,{children:(0,a.jsx)("link",{rel:"preload",as:"image",href:n,fetchpriority:"high"})}),r&&(0,a.jsx)(ex,{text:r}),(0,a.jsxs)(ea,{children:[(0,a.jsxs)(ei,{children:[(0,a.jsxs)(en,{children:[(0,a.jsx)(er,{$imgUrl:n}),(0,a.jsx)(J.default,{imageUrlTemplate:o,alt:l,loading:"eager",fetchPriority:"high",sizes:"(min-width: 780px) 252px, 338px"})]}),(0,a.jsxs)(eo,{children:[e&&(0,a.jsx)(es,{"data-testid":"audioEpisodeBrandNameStyled",children:e}),t&&(0,a.jsx)(ed,{"data-testid":"audioEpisodeSeriesNameStyled",children:t}),i&&(0,a.jsx)(ep,{"data-testid":"audioEpisodeTitleStyled",children:i})]})]}),(0,a.jsx)(el,{$imgUrl:n})]})]}),eS=j.default.div.withConfig({displayName:"AudioEpisodePage.styles__AudioEpisodePageOuterContainerStyled",componentId:"sc-c3233368-0"})`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 120px;
  display: grid;
  gap: 32px;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      gap: 24px;
    `,"group2")};
`,ev=j.default.div.withConfig({displayName:"AudioEpisodePage.styles__AudioEpisodePageInnerContainerStyled",componentId:"sc-c3233368-1"})`
  max-width: 1280px;
  margin: auto;
  box-sizing: border-box;
  display: grid;
  gap: 16px;
`,ew=j.default.div.withConfig({displayName:"AudioEpisodePage.styles__AudioEpisodeDarkContainerStyled",componentId:"sc-c3233368-2"})`
  background-color: ${({theme:e})=>e.container.onInverseBG2.value};
  width: 100%;
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  overflow: hidden auto;
`;var e$=e.i(879677),ej=e.i(508259);let ek={allowedFor:"all"},eC=()=>({playlistLabels:[],blocks:[],playerPosition:"audio-episode-page",isAudio:!0});function e_(e){return e.blocks?.find(e=>e?.type==="mediaMetadata")}function eI(e){return e_(e)?.model}function eT(e){return eI(e)?.versions?.[0]}let eB=({contents:e})=>{let[{model:t}={model:{blocks:[],availability:ek}}]=e.filter(({type:e})=>"audio-episode"===e),[{model:o}={model:{blocks:[]}}]=e.filter(({type:e})=>"audio-next-programme"===e),{isSubscribed:n,isSubscriptionAllowed:r,isSubscriptionCheckComplete:s}=(0,x.useSubscriptionContext)(),d=(0,g.useIsWithinSubscriptionWindow)(t.availability),p=(0,u.useFeatureFlag)("audio-windowing"),m=function(e,{isSubscribed:t,isWithinSubscriptionWindow:a=!1,isAudioWindowingEnabled:i=!1}={}){if(void 0===t||!e.blocks?.length)return e;let o=e_(e);if(!o?.model?.versions?.length)return e;let n=o.model.versions,r=i?(0,l.selectAudioVersion)(n,a||t):n[0];return{...e,blocks:e.blocks.map(e=>"mediaMetadata"===e.type?{...e,model:{...e.model,versions:r?[r]:[]}}:e)}}(t,{isSubscribed:s&&n,isWithinSubscriptionWindow:d,isAudioWindowingEnabled:p}),b=!d&&!s,S=eT(m),v=!!S?.versionId,w=function({isSubscriptionCheckComplete:e,canPlay:t,isSubscriptionAllowed:a,hasPlayableVersion:i}){return e?i?t?"enabled":a?"subscriptionGate":"unavailable":"unavailable":"loading"}({isSubscriptionCheckComplete:s,canPlay:(0,l.canPlayEpisode)(t.availability,{isAudioWindowingEnabled:p,isSubscriptionAllowed:r,isSubscribed:n}),isSubscriptionAllowed:r,hasPlayableVersion:v}),$=function(e){try{let{brand:t,series:a,title:i}=e,o=eI(e),n=eT(e),{title:r}=(0,e$.default)(t,{}),{title:s}=(0,e$.default)(a,{});if(!o?.indexImage?.model?.blocks)throw Error("Missing media metadata required for audio page top props");let{src:d,altText:p}=o.indexImage.model.blocks,c=(0,l.getAudioImageSrc)(d),u=(0,l.getAudioImageSrc)(d,!0);return{brandName:r,seriesName:s,img:c,backgroundImg:u,alt:p,episodeTitle:i,guidance:n?.warnings}}catch(e){return ej.logger.error(`Error getting audio page top props: ${e}`),{brandName:"",seriesName:"",img:"",backgroundImg:"",alt:"",episodeTitle:"",guidance:""}}}(m),j=function(e){try{let{releaseDate:t,series:a,brand:o,title:n,id:l}=e,r=eI(e),s=eT(e),{synopses:d,programmesUrl:p=""}=r||{},{path:c}=(0,e$.default)(o||a,{}),u=o?i.ContentSubtype.Brand:i.ContentSubtype.Series,g=r?.tags?.map(e=>e.name)||[],m=g.length?g.join(","):"",f={av_content_type:i.ContentType.Audio,av_content_subtype:i.ContentSubtype.Episode,av_content_id:s?.versionId,av_show:o?.title??a?.title??"",av_series_id:a?.id??"",av_series_title:a?.title??"",av_episode:n,av_episode_id:l,av_brand_id:o?.id??"",av_brand_title:o?.title??"",av_content_genre:m,av_content_topic:m};return{description:function(e){if(!e)return[];{let{long:t,medium:a,short:i}=e;return(t||a||i||"").split("\n").map(e=>e.trim()).filter(Boolean)}}(d),duration:function(e){if(e){let[t,a,i]=e.split(":"),[o]=i.split("."),n=60*Number(t)+Number(a)+Math.round(Number(o)/60);return new Intl.NumberFormat("en-US",{style:"unit",unit:"minute",unitDisplay:"long",maximumFractionDigits:0}).format(n)}}(s?.duration),releaseDate:function(e){if(e){let t=new Date(e),a=t.getUTCDate(),i=t.toLocaleDateString("en-US",{month:"long",timeZone:"UTC"}),o=t.getUTCFullYear();return`${a} ${i} ${o}`}}(t),availabilityInfo:function(e){if(e){let t=Date.now(),a=Math.max(e,t)-t;if(a>=31536e6)return"Available for over a year";{let e=Math.floor(a/864e5);return e<=1?"Available for 1 day":`Available for ${e} days`}}}(s?.availableTo),moreEpisodesPath:c,programmesUrl:p,contentSubtype:u,avProperties:f}}catch(e){return ej.logger.error(`Error getting audio page details props: ${e}`),{description:[]}}}(m),k={...j,isWithinSubscriptionWindow:d,isContentUnavailable:!v,isSaveDisabled:d&&!r,duration:b?void 0:j.duration},C=function(e){if(!e)return 0;try{let[t,a,i]=e.split(":"),[o]=i.split(".");return 3600*Number(t)+60*Number(a)+Number(o)}catch{return 0}}(S?.duration),_=f(function(e=[]){try{return e.map(({model:e})=>(0,l.getAudioCollectionItem)(e,"bath"))}catch{return[]}}(o.blocks)),I=function(e){try{let t=e_(e);if(!t)return eC();let a=t.model?.tags?.map(e=>e.name)||[],i=a.length?a.join(","):"",o=t.blockId;return{blocks:[{type:"audio",model:{blocks:[{type:"media",model:{blocks:[t]}}]}}],playerPosition:"audio-episode-page",isAudio:!0,playlistLabels:[{...i?{content_topic:i}:{},...o?{content_id:o}:{},content_type:"audio-episode"}]}}catch(e){return ej.logger.error(`Error getting audio page media props: ${e}`),eC()}}(m),{providerValue:T,handlePlaybackUpdate:B,handleTimeUpdate:N}=c(_),{isAutoplayEnabled:A,onAutoplayEnabledToggle:L,isNextItemAutoplayEnabled:F}=T;return(0,a.jsxs)(eS,{"data-testid":"audio-episode-page",children:[(0,a.jsxs)(ew,{children:[(0,a.jsxs)(ev,{children:[(0,a.jsx)(eb,{...$}),(0,a.jsx)(K,{playerSlotState:w,episodeId:m.id,mediaProps:I,durationInSeconds:C,upNextCollection:_,isAutoplayEnabled:A,isNextItemAutoplayEnabled:F,onAutoplayEnabledToggle:L,onTimeUpdate:N,onPlaybackUpdate:B})]}),(0,a.jsx)(y.default,{value:T,children:(0,a.jsx)(h.default,{type:"kentucky",content:_})})]}),(0,a.jsx)(P,{...k})]})},eN=j.default.div.withConfig({displayName:"AudioSeriesTop.styles__AudioSeriesTopStyled",componentId:"sc-408a4db9-0"})`
  display: grid;
  margin-block: 40px;
  row-gap: 16px;
  grid-auto-rows: min-content;
  min-height: 134px;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      margin-block: 24px 32px;
    `,"group4")};

  ${(0,k.applyStylesForBreakpoints)(j.css`
      row-gap: 12px;
      margin-block: 0;
      min-height: 0;
    `,"group2")};
`,eA=j.default.div.withConfig({displayName:"AudioSeriesTop.styles__AudioSeriesTopTitleAreaStyled",componentId:"sc-408a4db9-1"})`
  display: grid;
  grid-auto-rows: min-content;
  row-gap: 8px;
  grid-template-areas: 'series-name' 'title';
`,eL=j.default.h3.withConfig({displayName:"AudioSeriesTop.styles__AudioSeriesTopBrandNameStyled",componentId:"sc-408a4db9-2"})`
  ${({theme:e})=>j.css`
    color: ${e.text.onInverseBG.default.value};

    ${(0,C.applyTypography)(e.audio.seriesName.bpLarge)};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        color: ${e.text.default.value};

        ${(0,C.applyTypography)(e.audio.seriesName.bpSmall)};
      `,"group2")};
  `}
`,eF=j.default.h2.withConfig({displayName:"AudioSeriesTop.styles__AudioSeriesTopTitleStyled",componentId:"sc-408a4db9-3"})`
  ${({theme:e})=>j.css`
    color: ${e.text.onInverseBG.default.value};

    ${(0,C.applyTypography)(e.audio.brandTitle.large.bpLarge)};

    ${(0,k.applyStylesForBreakpoints)((0,C.applyTypography)(e.audio.brandTitle.medium.bpLarge),"group3")};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        color: ${e.text.default.value};

        ${(0,C.applyTypography)(e.audio.brandTitle.large.bpSmall)};
      `,"group2")};
  `}
`,eP=j.default.p.withConfig({displayName:"AudioSeriesTop.styles__AudioSeriesTopDescriptionStyled",componentId:"sc-408a4db9-4"})`
  ${({theme:e})=>j.css`
    color: ${e.text.onInverseBG.mediumEmphasis.value};

    ${(0,C.applyTypography)(e.bodyCopy.default.bpLarge)};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        color: ${e.text.mediumEmphasis.value};
        min-height: 0;

        ${(0,C.applyTypography)(e.bodyCopy.default.bpSmall)};
      `,"group2")};
  `}
`,eE=j.default.div.withConfig({displayName:"AudioSeriesTop.styles__AudioSeriesTopSeeMoreDesktopStyled",componentId:"sc-408a4db9-5"})`
  ${(0,k.applyStylesForBreakpoints)(j.css`
      display: none;
      visibility: hidden;
    `,"group2")}
`,eM=j.default.div.withConfig({displayName:"AudioSeriesTop.styles__AudioSeriesTopSeeMoreMobileStyled",componentId:"sc-408a4db9-6"})`
  display: none;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      display: flex;
    `,"group2")}
`,eR={withoutPaddingInline:!0,iconPosition:"right",icon:"arrows:chevron-right",text:"See more episodes",type:"unboxed"},eD=({seeMoreLink:e})=>e?(0,a.jsxs)(b.default,{href:e,children:[(0,a.jsx)(eE,{children:(0,a.jsx)(ec.default,{isInverse:!0,...eR})}),(0,a.jsx)(eM,{children:(0,a.jsx)(ec.default,{...eR})})]}):null,eO=(0,t.memo)(({title:e,description:t,brandName:i,seeMoreLink:o})=>(0,a.jsxs)(eN,{children:[(0,a.jsxs)(eA,{children:[i&&(0,a.jsx)(eL,{children:i}),(0,a.jsx)(eF,{children:e})]}),(0,a.jsx)(eP,{children:t}),(0,a.jsx)(eD,{seeMoreLink:o})]}));var eG=e.i(996847),eH=e.i(610503),ez=e.i(901414);let eU={group6:172,group5:56,group4:16,group3:16,group2:16,group1:16},eW={group6:68,group5:56,group4:24,group3:16,group2:16,group1:16},eV=["group5","group4","group3"],eY=j.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesPageStyled",componentId:"sc-3a03d02b-0"})`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-areas: 'sticky-area top' 'sticky-area details';
  grid-template-columns: 300px 1fr;
  column-gap: 68px;

  ${eV.map(e=>(0,k.applyStylesForBreakpoints)(j.css`
        margin-inline: ${eU[e]}px;
        column-gap: ${eW[e]}px;
      `,e))};

  ${(0,k.applyStylesForBreakpoints)(j.css`
      grid-template-columns: 1fr;
      grid-template-areas: 'top' 'details';
    `,"group3")};
`,eq=j.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesStickyAreaStyled",componentId:"sc-3a03d02b-1"})`
  grid-area: sticky-area;
  display: grid;
  row-gap: 12px;

  & > div:first-of-type {
    position: relative;
    z-index: 2;
  }

  & > div:nth-of-type(2) {
    position: relative;
    z-index: 1;
  }

  ${(0,k.applyStylesForBreakpoints)(j.css`
      display: none;
    `,"group3")};
`,eQ=j.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesStickyImageContainerStyled",componentId:"sc-3a03d02b-2"})`
  ${({$top:e})=>j.css`
    position: sticky;
    top: ${e}px;
    display: grid;
    row-gap: 12px;
  `}
`,eX=j.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesTopAreaStyled",componentId:"sc-3a03d02b-3"})`
  ${({theme:e})=>j.css`
    grid-area: top;
    position: relative;

    ${(0,k.applyStylesForBreakpoints)(j.css`
        display: grid;
        grid-auto-rows: min-content;
        grid-template-columns: clamp(203px, 35vw, 266px) 1fr;
        grid-template-areas: 'top-image top-details' 'top-image top-actions';
        align-items: start;
        column-gap: 16px;
        border-bottom: 1px solid ${e.divider.onInverseBG.highEmphasis.value};
      `,"group3")};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        grid-template-columns: 1fr;
        grid-template-areas: 'top-image' 'top-details' 'top-actions';
        column-gap: 0;
        border-bottom: none;
      `,"group2")};
  `}
`,eK=j.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesDetailsAreaStyled",componentId:"sc-3a03d02b-4"})`
  grid-area: details;
`,eZ=j.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesTopImageContainerStyled",componentId:"sc-3a03d02b-5"})`
  ${({$top:e})=>j.css`
    display: none;

    ${(0,k.applyStylesForBreakpoints)(j.css`
        padding-top: 16px;
        position: unset;
        justify-self: center;

        > img {
          width: 190px;
        }
      `,"group4")};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        display: block;
        grid-area: top-image;
        padding-top: 24px;
        padding-bottom: 16px;
        position: sticky;
        top: ${e}px;

        > img {
          aspect-ratio: 1 / 1;
          object-fit: cover;
        }
      `,"group3")};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        position: relative;
        top: unset;
      `,"group2")};
  `}
`,eJ=j.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesTopActionsStyled",componentId:"sc-3a03d02b-6"})`
  display: none;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      grid-area: top-actions;
      display: grid;
      grid-template-columns: repeat(2, 126px);
      column-gap: 32px;
      padding-block: 16px;
    `,"group3")};
`,e0=j.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesTopDetailsStyled",componentId:"sc-3a03d02b-7"})`
  ${(0,k.applyStylesForBreakpoints)(j.css`
      grid-area: top-details;
    `,"group3")};
`,e1=j.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesBackgroundStyled",componentId:"sc-3a03d02b-8"})`
  ${({$left:e,$imageLeft:t,$imgUrl:a,$maxHeight:i,theme:o,$width:n})=>j.css`
    position: absolute;
    overflow: hidden;
    left: -${e}px;
    height: 100%;
    top: 0;
    background-color: ${o.container.onInverseBG2.value};
    width: ${n};
    z-index: -1;

    &::after {
      content: '';
      position: absolute;
      height: 388px;
      aspect-ratio: 1 / 1;
      background: url(${a}) no-repeat center;
      background-size: cover;
      filter: blur(120px);
      top: -40px;
      left: ${t-eU.group6}px;

      ${eV.map(e=>(0,k.applyStylesForBreakpoints)(j.css`
            left: ${t-eU[e]}px;
          `,e))}
    }

    ${(0,k.applyStylesForBreakpoints)(j.css`
        max-height: ${i}px;
      `,"group3")}

    ${(0,k.applyStylesForBreakpoints)(j.css`
        max-height: 158px;

        &::after {
          top: -266px;
          height: 360px;
          left: calc(50% - 360px / 2);
        }
      `,"group2")};
  `}
`,e2=j.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesImageContainerStyled",componentId:"sc-3a03d02b-9"})`
  > img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    margin-top: 40px;
  }
`,e4=j.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesActionsStyled",componentId:"sc-3a03d02b-10"})`
  ${({$paddingTop:e})=>j.css`
    display: grid;
    grid-template-columns: repeat(2, 126px);
    column-gap: 32px;
    align-items: start;
    position: sticky;
    align-self: start;
    padding-top: ${e}px;
  `}
`,e6=j.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesAdContainerStyled",componentId:"sc-3a03d02b-11"})`
  ${({$top:e})=>j.css`
    position: sticky;
    padding-block: 40px;
    top: ${e}px;
  `}
`,e3=(0,t.memo)(e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(S.SaveButton,{alignment:"bottom-left",action:"follow",variant:"audio",isInverse:!1,iconPosition:"left",...e}),(0,a.jsx)($.default,{withOverlayBackground:!0,isInverse:!0,size:"large",trigger:"click",isOnLeftEdge:!0,iconPosition:"left",type:"round",title:"Share",...e})]})),e8=({topAreaHeight:e,imageAreaHeight:i,topRef:o,imageContainerRef:n,children:l})=>{let[r,s]=(0,t.useState)(0);return(0,t.useEffect)(()=>{let e=(0,eH.default)(()=>{let{current:e}=o,{current:t}=n;if(e&&t){let{bottom:a}=e.getBoundingClientRect(),{bottom:i}=t.getBoundingClientRect(),o=Math.max(0,a-i);r!==o&&s((r<o?Math.floor:Math.ceil)(o))}},25,{leading:!0,trailing:!0});return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[r,o,n]),(0,t.useEffect)(()=>{s(Math.max(0,e-i))},[e,i]),(0,a.jsx)(e4,{$paddingTop:r,children:l})},e5=({sectionComponent:e,imageComponent:i,actionsComponent:o,imageUrl:l,topComponent:r})=>{let s=(0,t.useRef)(null),d=(0,t.useRef)(null),p=(0,t.useRef)(null),c=(0,t.useRef)(null),[u,g]=(0,t.useState)(0),[m,f]=(0,t.useState)(0),[y,h]=(0,t.useState)(0),[x,b]=(0,t.useState)(0),[S,v]=(0,t.useState)(0),[w,$]=(0,t.useState)(0),[j,k]=(0,t.useState)("unset");(0,eg.useResizeObserver)(s,e=>{let[{target:t}]=e,{offsetTop:a}=t;f(a)},100),(0,eg.useResizeObserver)(d,e=>{let[{target:t}]=e,{left:a,height:i}=t.getBoundingClientRect();g(a),v(i)},100),(0,eg.useResizeObserver)(p,e=>{let[{target:t}]=e,{height:a,left:i}=t.getBoundingClientRect();h(a),b(i)},100),(0,eg.useResizeObserver)(c,e=>{let[{target:t}]=e,{height:a}=t.getBoundingClientRect();$(a)},100);let C=(0,eG.default)(()=>{k(`${document.documentElement.clientWidth}px`)},100,{leading:!0});(0,t.useEffect)(()=>(k(`${document.documentElement.clientWidth}px`),window.addEventListener("resize",C),()=>{window.removeEventListener("resize",C)}),[]);let _=(0,t.useRef)(null),I=(0,t.useRef)(!1),T=(0,t.useRef)(null),B=(0,t.useRef)(!1),N=(0,t.useRef)(null),A=(0,t.useRef)(!1),[L,F]=(0,ez.useBreakpoints)("AudioSeriesComponents"),P=e=>{e.forEach(e=>{let t=document.getElementById(`dotcom-${e}`);t&&(t.style.display="none")})};return(0,t.useEffect)(()=>{if(F)switch(L){case"group1":case"group2":!B.current&&T.current&&(T.current.requestAd(),B.current=!0,P(["mid_2","sid_1"]));break;case"group3":!A.current&&N.current&&(N.current.requestAd(),A.current=!0,P(["mid_1","sid_1"]));break;case"group4":case"group5":case"group6":!I.current&&_.current&&(_.current.requestAd(),I.current=!0,P(["mid_1","mid_2"]))}},[L]),(0,a.jsxs)(eY,{"data-testid":"audio-series-page",ref:s,children:[(0,a.jsxs)(eq,{children:[(0,a.jsx)("div",{children:(0,a.jsxs)(eQ,{$top:m,children:[(0,a.jsx)(e2,{ref:p,children:i}),(0,a.jsx)(e8,{topRef:d,imageContainerRef:p,topAreaHeight:S,imageAreaHeight:y,children:o})]})}),(0,a.jsx)("div",{children:(0,a.jsx)(e6,{$top:m,children:(0,a.jsx)(n.default,{type:"sid_1",deferRequest:!0,forwardedAdRef:_,isFullWidth:!1})})})]}),(0,a.jsxs)(eX,{ref:d,children:[(0,a.jsx)(e1,{$left:u,$maxHeight:w,$imageLeft:x,$imgUrl:l,$width:j}),(0,a.jsx)(e0,{ref:c,children:r}),(0,a.jsx)(eZ,{$top:m,children:i}),(0,a.jsx)(eJ,{children:o})]}),(0,a.jsx)(eK,{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.default,{type:"mid_1",deferRequest:!0,forwardedAdRef:T}),e,(0,a.jsx)(n.default,{type:"mid_2",deferRequest:!0,forwardedAdRef:N})]})})]})};function e7(e,t){let[a]=e.filter(({type:e})=>["audio-brand","audio-series"].includes(e));switch(t){case"top":var o=a?.model;try{let{title:e="",summary:t}=o,{brand:a}=o;return{title:e,description:t?.medium||t?.short||t?.long||"",brandName:a?.title,seeMoreLink:a?.path}}catch(e){return ej.logger.error(`Error getting series page top props: ${e}`),{title:"",description:""}}case"hero-image":return function(e){try{let{indexImage:t}=e,{model:a}=t,{blocks:{src:i,altText:o}}=a;return{src:(0,l.getAudioImageSrc)(i),backgroundSrc:(0,l.getAudioImageSrc)(i,!0),altText:o}}catch(e){return ej.logger.error(`Error getting hero image: ${e}`),{src:"",backgroundSrc:"",altText:""}}}(a?.model);case"collection":var n=e;try{let[{model:e,type:t}]=n.filter(({type:e})=>["audio-brand","audio-series"].includes(e)),a=n.filter(({type:e})=>"audio-episode"===e),{episodeCount:i,id:o}=e;return{content:a.map(({model:e})=>(0,l.getAudioCollectionItem)(e,"york")),collectionId:o,audioPageType:t,paginationData:{page:0,pageSize:10,total:i}}}catch(e){return ej.logger.error(`Error getting series page collection: ${e}`),{content:[],collectionId:"",audioPageType:"",paginationData:{page:0,pageSize:10,total:0}}}case"actions":return function(e){try{let{model:t,type:a}=e,{brand:o,id:n,title:l,availability:r}=t,s=o?.id??n,d="audio-brand"===a||o?.id?i.ContentSubtype.Brand:i.ContentSubtype.Series,p=t.tags?.map(e=>e?.name)||[],c=p.length?p.join(","):"",u={av_content_type:i.ContentType.Audio,av_content_subtype:d,av_content_id:n,av_content_genre:c,av_content_topic:c,..."audio-series"===a?{av_series_id:n,av_series_title:l,av_brand_id:o?.id??"",av_brand_title:o?.title??"",av_show:o?.title??l??""}:{},..."audio-brand"===a?{av_brand_id:n,av_brand_title:l,av_show:l}:{}};return{contentSubtype:d,contentId:s,avProperties:u,availability:r}}catch(e){return ej.logger.error("Error getting actions props",e),{}}}(a)}}let e9=({contents:e})=>{let{src:i,backgroundSrc:o,altText:n}=(0,t.useMemo)(()=>e7(e,"hero-image"),[e]),l=(0,t.useMemo)(()=>e7(e,"top"),[e]),r=(0,t.useMemo)(()=>e7(e,"collection"),[e]),s=(0,t.useMemo)(()=>e7(e,"actions"),[e]);return(0,a.jsxs)(a.Fragment,{children:[o&&(0,a.jsx)(Z.default,{children:(0,a.jsx)("link",{rel:"preload",as:"image",href:o,fetchpriority:"high"})}),(0,a.jsx)(e5,{topComponent:(0,a.jsx)(eO,{...l}),actionsComponent:(0,a.jsx)(e3,{...s}),sectionComponent:(0,a.jsx)(h.default,{...r,type:"idaho"}),imageComponent:(0,a.jsx)(J.default,{imageUrlTemplate:i,alt:n,cardType:"AudioSeriesPage",loading:"eager",fetchPriority:"high",sizes:"535px"}),imageUrl:o})]})};var te=e.i(57988),tt=e.i(704570),ta=e.i(36480),ti=e.i(151155),to=e.i(895270),tn=e.i(232854),tl=e.i(102358),tr=e.i(551068),ts=e.i(108019);let td=(0,j.default)(ts.ContainerStyled).withConfig({displayName:"NestedNavigation.styles__NestedNavigationContainerStyled",componentId:"sc-a1ed20b4-0"})`
  ${({$navLevel:e,$isNestedNavAvailable:t,$isSponsored:a})=>j.css`
    gap: 4px;
    padding: 16px 0;

    /* sub-index */
    ${e>1&&!t&&j.css`
      padding: 12px 0;
    `}

    /* sponsored sub-index */
    ${e>1&&a&&!t&&j.css`
      padding: 12px 0;
      height: 68px;
    `}

    /* 3rd or more level of navigation */
    ${e>1&&t&&j.css`
      padding: 12px 0 8px 0;
    `}

    ${(0,k.applyStylesForBreakpoints)(j.css`
        padding: 10px 16px;
        gap: 0;

        ${e>1&&j.css`
          padding: 12px 0;
        `}

        /* sponsored sub-index */
        ${e>1&&a&&!t&&j.css`
          gap: 10px;
          padding: 12px 0 8px 0;
          height: 106px;
        `}
      `,"group2")};
  `}
`,tp=j.default.div.withConfig({displayName:"NestedNavigation.styles__PageTitleContainerStyled",componentId:"sc-a1ed20b4-1"})`
  ${({$isSponsored:e,$navLevel:t})=>j.css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    min-height: ${t>1?"28px":"40px"};

    ${e&&(0,k.applyStylesForBreakpoints)(j.css`
        justify-content: start;
      `,"group4")}

    ${(0,k.applyStylesForBreakpoints)(j.css`
        gap: 12px;
        justify-content: center;
        min-height: ${t>1?"26px":"30px"};
      `,"group2")}
  `}
`,tc=j.default.nav.withConfig({displayName:"NestedNavigation.styles__NestedNavigationContentStyled",componentId:"sc-a1ed20b4-2"})`
  display: flex;
  position: relative;
  align-items: center;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      align-items: start;
      /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
      overflow-x: hidden;
    `,"group2")};
`,tu=j.default.h1.withConfig({displayName:"NestedNavigation.styles__PageTitleStyled",componentId:"sc-a1ed20b4-3"})`
  ${({theme:e,$isInverse:t,$navLevel:a})=>j.css`
    text-align: center;
    color: ${t?e.text.onInverseBG.default.value:e.text.default.value};

    ${(0,C.applyTypography)(e.topbarLevel1Title.bpLarge)};

    ${a>1&&j.css`
      ${(0,C.applyTypography)(e.nav.title.level3.default)};
    `}

    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${(0,C.applyTypography)(e.topbarLevel1Title.bpSmall)};

        ${a>1&&j.css`
          ${(0,C.applyTypography)(e.nav.title.level3.defaultMobile)};
        `}
      `,"group2")}
  `}
`,tg=j.default.span.withConfig({displayName:"NestedNavigation.styles__NewsLogoContainerStyled",componentId:"sc-a1ed20b4-4"})(({theme:e,$isFirstLevelNav:t})=>j.css`
    position: relative;
    display: grid;
    place-items: center;
    color: ${e.bbcNewsLogo.onDefaultBG.default.value};
    height: ${t?"26px":"18px"};

    svg {
      width: auto;
      height: 100%;
    }

    ${(0,k.applyStylesForBreakpoints)(j.css`
        height: 18px;
      `,"group2")};
  `),tm=j.default.div.withConfig({displayName:"NestedNavigation.styles__NestedNavigationItemsContainerStyled",componentId:"sc-a1ed20b4-5"})`
  ${({$hasHiddenItems:e})=>j.css`
    width: 100%;

    ${e&&(0,k.applyStylesForBreakpoints)(j.css`
        /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
        overflow-x: scroll;

        /* hide scrollbar for firefox */
        /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
        scrollbar-width: none;

        /* hide scrollbar for webkit browsers */
        &::-webkit-scrollbar {
          display: none;
        }
      `,"group2")};
  `}
`,tf=j.default.div.withConfig({displayName:"NestedNavigation.styles__NestedNavigationDropdownContainerStyled",componentId:"sc-a1ed20b4-6"})`
  display: flex;
  ${(0,k.applyStylesForBreakpoints)(j.css`
      display: none;
    `,"group2")};
`,ty=j.default.ul.withConfig({displayName:"NestedNavigation.styles__NestedNavigationItemsStyled",componentId:"sc-a1ed20b4-7"})`
  ${({$isEmpty:e,$hasHiddenItems:t,$isSponsored:a})=>j.css`
    display: flex;
    justify-content: center;
    gap: 8px;
    height: ${e?0:"28px"};

    ${a&&(0,k.applyStylesForBreakpoints)(j.css`
        justify-content: start;
      `,"group4")}

    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${t&&j.css`
          justify-content: start;
        `}

        ${a&&j.css`
          margin-bottom: 8px;
        `}

        height: 40px;
        gap: 0;
      `,"group2")};
  `}
`,th=j.default.li.withConfig({displayName:"NestedNavigation.styles__NavItemStyled",componentId:"sc-a1ed20b4-8"})`
  ${({theme:e,$isInverse:t,$isActive:a,$isInDropdown:i,$hasHiddenItems:o})=>j.css`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    height: 28px;

    ${t&&j.css`
      color: ${e.text.onInverseBG.default.value};
    `}

    ${(0,C.applyTypography)(e.nav.topbar.level3.default)};

    &:first-of-type {
      ${o&&!i&&(0,k.applyStylesForBreakpoints)(j.css`
          margin-left: 16px;
        `,"group2")}
    }

    &:hover {
      background-color: ${e.nav.level3.bgHover.value};
      ${t&&j.css`
        color: inherit;
      `}
    }

    &[data-hidden='true'] {
      display: none;

      /* for group 1 and 2 menu items will be scrollable instead of showing dropdown */
      ${(0,k.applyStylesForBreakpoints)(j.css`
          display: flex;
        `,"group2")}
    }

    ${a&&j.css`
      & a {
        font-weight: 700;
      }
    `}

    ${i&&j.css`
      padding: 0;
    `}

    ${(0,k.applyStylesForBreakpoints)(j.css`
        height: 40px;
      `,"group2")}
  `};
`,tx=j.default.div.withConfig({displayName:"NestedNavigation.styles__NestedNavigationContainerOuterStyled",componentId:"sc-a1ed20b4-9"})`
  ${({theme:e,$isInverse:t})=>j.css`
    display: grid;

    ${t&&j.css`
      background-color: ${e.container.onInverseBG2.value};
    `}
  `}
`,tb=j.default.div.withConfig({displayName:"NestedNavigation.styles__SponsorAdContainerStyled",componentId:"sc-a1ed20b4-10"})`
  position: absolute;
  right: 0;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);

  ${(0,k.applyStylesForBreakpoints)(j.css`
      position: unset;
      transform: unset;

      div {
        float: right;
      }
    `,"group2")};
`,tS=j.default.div.withConfig({displayName:"NestedNavigation.styles__HeaderImageAndLineContainerStyled",componentId:"sc-a1ed20b4-11"})`
  max-width: 1248px;
  margin: 0 auto;
  ${(0,k.applyStylesForBreakpoints)(j.css`
      margin: auto 16px;
    `,"group5")};
`,tv=j.default.div.withConfig({displayName:"NestedNavigation.styles__HeaderImageWrapperStyled",componentId:"sc-a1ed20b4-12"})`
  margin-top: 16px;
  max-width: 390px;

  img {
    object-fit: cover;
  }
  ${(0,k.applyStylesForBreakpoints)(j.css`
      max-width: 330px;
    `,"group4")};
  ${(0,k.applyStylesForBreakpoints)(j.css`
      max-width: 240px;
    `,"group2")};
`,tw=j.default.hr.withConfig({displayName:"NestedNavigation.styles__HeaderLineStyled",componentId:"sc-a1ed20b4-13"})`
  ${({theme:e})=>j.css`
    width: 100%;
    height: 2px;
    background-color: ${e.divider.highEmphasis.value};
    border-width: 0;
    margin: 8px 0 24px 0;
  `}
`,t$=j.default.div.withConfig({displayName:"NestedNavigation.styles__HeaderImageAndSponsorContainerStyled",componentId:"sc-a1ed20b4-14"})`
  display: flex;
  position: relative;
  min-height: 50px;

  ${({$sponsorRendered:e})=>j.css`
    ${e&&(0,k.applyStylesForBreakpoints)(j.css`
        height: 120px;
      `,"group2")}
  `}
`,tj=j.default.div.withConfig({displayName:"NestedNavigation.styles__HeaderSponsorContainerStyled",componentId:"sc-a1ed20b4-15"})`
  position: absolute;
  right: 0;
  bottom: 0;
`,tk=({isFirstLevelNav:e})=>(0,a.jsx)(tg,{"data-testid":"news-logo-container",$isFirstLevelNav:e,...e?{as:"h1"}:{},children:(0,a.jsx)(w.default,{name:"logo:news","aria-label":"News",role:"img"})}),tC=()=>(0,a.jsx)(tb,{children:(0,a.jsx)(n.default,{type:"spo",isFullWidth:!1})}),t_=({sponsored:e=!1})=>{let[i,o]=(0,t.useState)(!1);return(0,a.jsxs)(tS,{children:[(0,a.jsxs)(t$,{$sponsorRendered:i,children:[(0,a.jsx)(tv,{children:(0,a.jsx)(J.default,{imageUrlTemplate:"https://ichef.bbci.co.uk/images/ic/raw/p0j13mxm.jpg"})}),e&&(0,a.jsx)(tj,{children:(0,a.jsx)(n.default,{type:"spo",isFullWidth:!1,onAdvertRendered:()=>o(!0)})})]}),(0,a.jsx)(tw,{})]})},tI=({title:e,mainNavigation:i,isPreCurated:o,isBookmarksPage:n})=>{let l=(0,te.useCurrentSlug)(),r=(0,to.useDarkMode)(),[s,d]=(0,t.useState)(0),[p,c]=(0,t.useState)(-1),[u,g]=(0,t.useState)(!1),m=(0,tn.useIsAdsServiceEnabled)(),{isSponsored:f=!1}=(0,tt.usePageData)(),y=(0,t.useRef)(null),h=(0,t.useRef)(null),{isNestedMainNav:x,isNestedNavAvailable:S,nestedNavigationItems:v,activeNavigationItem:$,nestedNavigationTitle:j}=(0,tl.getActiveNavigationTree)(l,i),{level:k=0,title:C}=$||{},_=x&&p>=0&&p<=v.length,I=S&&j||e,T=!!l&&"glastonbury-live"===l[l.length-1],B=f&&m,N=(0,a.jsx)(a.Fragment,{children:v.slice(p).map(({title:e,...t},i)=>{let o=t.externalUrl||t.path||"",n=(0,tl.getNavigationAnalytics)("main",e,"",o,"nested_navigation_dropdown");return(0,a.jsx)(th,{$isInverse:!1,$isInDropdown:!0,$isActive:C===e,$hasHiddenItems:_,children:(0,a.jsx)(b.default,{analytics:n,href:o,styledAnchorInner:tr.NestedNavItemLinkStyled,children:e})},i)})});(0,eg.useResizeObserver)(h,(0,tl.checkResponsiveFitment)(c,s,B)),(0,t.useEffect)(()=>{d(15*Math.max(...v.map(({title:e})=>e.length)))},[v]);let A=I||o||n||S||B||!1;return T?(0,a.jsx)(t_,{sponsored:m&&f}):A?(0,a.jsx)(tx,{"data-testid":"nested-navigation-container",$isInverse:r,children:(0,a.jsxs)(td,{$type:"wide","data-testid":"new-inner-nested-navigation-container",$navLevel:k,$isNestedNavAvailable:S,$isSponsored:B,children:[(0,a.jsxs)(tp,{$isSponsored:B,$navLevel:k||1,children:[o&&(0,a.jsx)(tk,{isFirstLevelNav:k<2}),I&&(0,a.jsx)(tu,{$isInverse:r,$navLevel:k||1,"data-testid":"nested-navigation-page-title",children:I})]}),S&&(0,a.jsx)(tc,{ref:y,children:(0,a.jsx)(tm,{"data-testid":"nested-navigation-items-container",ref:h,$hasHiddenItems:_,children:(0,a.jsxs)(ty,{$isEmpty:!S,$hasHiddenItems:_,$isSponsored:B,children:[v.map(({title:e,...t},i)=>(0,a.jsx)(th,{$isInverse:r,$isActive:C===e,$hasHiddenItems:_,children:(0,a.jsx)(b.default,{analytics:(0,tl.getNavigationAnalytics)("main",e,"",t.path||t.externalUrl||"","nested_navigation"),href:t.externalUrl||t.path||"",styledAnchor:tr.SubNavigationLink,styledAnchorProps:{$isInverse:r,"aria-current":C===e?"page":void 0,...t.path?{"data-testid":`nested-navigation-item${C===e?"-active":""}`}:{}},children:e})},i)),_&&(0,a.jsx)(tf,{children:(0,a.jsxs)(ti.default,{type:"nestedNav",isInverse:r,overlay:N,isOpen:u,onDropdownToggle:()=>g(e=>!e),onDropdownClose:()=>g(!1),children:["More ",(0,a.jsx)(w.default,{name:u?"actions:close":"actions:more-vertical"})]})})]})})}),B&&(0,a.jsx)(tC,{})]})}):null},tT=(0,t.createContext)({}),{Provider:tB}=tT,tN=({value:e,children:t})=>(0,a.jsx)(tB,{value:e,children:t});var tA=e.i(109072);let tL=j.default.button.withConfig({displayName:"GooglePreferredButton.styles__GooglePreferredButtonStyled",componentId:"sc-8f300e78-0"})(({theme:e})=>j.css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    gap: 8px;
    border: 1px solid ${e.meatballButton.focus.normal.stroke.value};
    border-radius: 4px;
    white-space: nowrap;
    color: ${e.text.lowEmphasis.value};
    ${(0,C.applyTypography)(e.textLink.small.regular.bpLarge)};

    ${(0,tA.addHoverState)(j.css`
      cursor: pointer;

      &:hover {
        color: ${e.button.general.pressed.inverse.background.value};
      }
    `)};
  `),tF="Add as preferred on Google",tP="google_preferred",tE=(0,t.memo)(({testId:e=tP})=>{let{urn:t}=(0,tt.usePageData)();return(0,a.jsx)(b.default,{href:"https://www.google.com/preferences/source?q=bbc.com",analyticsProps:{item_name:tF,item_type:tP,item_resource_id:t},linkType:"external",children:(0,a.jsxs)(tL,{title:tF,"data-testid":e,children:[(0,a.jsx)(w.default,{name:"social:google",width:12,height:12}),(0,a.jsx)("span",{children:tF})]})})});var tM=e.i(868783),tR=e.i(946861),tD=e.i(303854);let tO=j.default.div.withConfig({displayName:"Byline.styles__BylineStyled",componentId:"sc-66f6383-0"})`
  display: grid;
  grid-template-areas: 'date actions' 'contributors contributors';
  row-gap: 4px;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      grid-template-areas: 'date' 'contributors' 'actions';
      row-gap: 16px;
    `,"group2")};
`,tG=j.default.div.withConfig({displayName:"Byline.styles__ContributorsContainerStyled",componentId:"sc-66f6383-1"})`
  grid-area: contributors;
`,tH=j.default.time.withConfig({displayName:"Byline.styles__TimeContainerStyled",componentId:"sc-66f6383-2"})`
  ${({theme:e})=>j.css`
    grid-area: date;
    white-space: nowrap;
    ${(0,C.applyTypography)(e.metaData.regular)};
    color: ${e.text.lowEmphasis.value};
  `}
`,tz=j.default.div.withConfig({displayName:"Byline.styles__ActionsContainerStyled",componentId:"sc-66f6383-3"})(({theme:e})=>j.css`
    grid-area: actions;
    display: flex;
    flex-wrap: wrap;
    justify-self: end;
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    column-gap: 16px;

    ${(0,k.applyStylesForBreakpoints)(j.css`
        position: relative;
        width: 100%;
        justify-content: end;
        align-items: center;
        /* stylelint-disable plugin/no-unsupported-browser-features */
        column-gap: 16px;
        row-gap: 4px;
        /* stylelint-enable plugin/no-unsupported-browser-features */

        /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
        button:not(.popover button, [data-testid='google_preferred']) {
          ${(0,C.applyTypography)(e.textLink.large.regular.bpLarge)};
          min-height: 44px;
        }

        &::before {
          content: '';
          position: absolute;
          top: -4px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: ${e.divider.lowEmphasis.value};
        }
      `,"group2")};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
        column-gap: 8px;
      `,"group1")};
  `),tU=j.default.div.withConfig({displayName:"Byline.styles__GooglePreferredButtonContainerStyled",componentId:"sc-66f6383-4"})`
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  display: contents;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      display: grid;
      place-content: center;
      min-height: 44px;
    `,"group2")};
`,tW=j.default.div.withConfig({displayName:"Byline.styles__ContributorWrapperStyled",componentId:"sc-66f6383-5"})`
  ${({$hasMultiple:e})=>j.css`
    display: ${e?"inline":"block"};
  `}
`,tV=j.default.span.withConfig({displayName:"Byline.styles__ImageWrapperStyled",componentId:"sc-66f6383-6"})`
  display: inline-block;
  vertical-align: middle;

  img {
    width: 40px;
    height: 40px;
    color: ${({theme:e})=>e.container.onDefaultBG.value};
    margin-right: 8px;
    border-radius: 50%;
  }
`,tY=j.default.div.withConfig({displayName:"Byline.styles__TextContentWrapperStyled",componentId:"sc-66f6383-7"})`
  display: inline-block;
  vertical-align: middle;
`,tq=j.default.span.withConfig({displayName:"Byline.styles__AuthorNameStyled",componentId:"sc-66f6383-8"})`
  ${({$hasMultiple:e,theme:t})=>j.css`
    vertical-align: middle;
    display: ${e?"inline":"block"};
    margin-bottom: ${e?"0":"4px"};
    margin-right: ${e?"4px":"0"};
    ${(0,C.applyTypography)(t.byline.emphasised)};
  `}
`,tQ=j.default.span.withConfig({displayName:"Byline.styles__RoleAndLocationStyled",componentId:"sc-66f6383-9"})`
  ${({$hasMultiple:e,theme:t})=>j.css`
    ${e&&"vertical-align: middle;"}
    display: ${e?"inline":"block"};
    margin-right: ${e?"4px":"0"};
    ${(0,C.applyTypography)(t.byline.default)};
    color: ${t.text.lowEmphasis.value};
  `}
`,tX=j.default.span.withConfig({displayName:"Byline.styles__SeparatorStyled",componentId:"sc-66f6383-10"})`
  vertical-align: middle;
  margin-right: 4px;

  ${({theme:e})=>j.css`
    ${(0,C.applyTypography)(e.byline.default)};
    color: ${e.text.lowEmphasis.value};
  `}
`,tK=j.default.span.withConfig({displayName:"Byline.styles__ContributorsWrapperStyled",componentId:"sc-66f6383-11"})`
  display: block;
  width: 458px;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      width: 100%;
    `,"group2")};
`,tZ=j.default.div.withConfig({displayName:"Byline.styles__SponsorAdContainerStyled",componentId:"sc-66f6383-12"})`
  width: 100px;
  height: 50px;
  justify-self: end;
  grid-column: -2 / -1;
`;var tJ=e.i(593521),t0=e.i(808824);let t1=({contributor:e,hasMultipleContributors:t,imageUrlTemplate:i,isLastContributor:o,isSecondToLastContributor:n,testId:l})=>{let{authorName:r,role:s,location:d}=e,p=r?.replace(/^By\s+/,"").trim(),c=[s,d].filter(Boolean).join(", "),u=!!c||!n&&!o;return(0,a.jsxs)(tW,{"data-testid":l,$hasMultiple:t,children:[!t&&!!i&&(0,a.jsx)(tV,{children:(0,a.jsx)(J.default,{imageUrlTemplate:i,alt:`${r} profile image`,cardType:"contributor",isDefaultAspectRatio:!1})}),t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(tq,{$hasMultiple:t,children:[p,u&&","]}),c&&(0,a.jsxs)(tQ,{$hasMultiple:t,"data-testid":`${l}-role-location`,children:[c,!n&&!o&&","]})]}):(0,a.jsxs)(tY,{children:[(0,a.jsx)(tq,{$hasMultiple:t,children:p}),c&&(0,a.jsx)(tQ,{$hasMultiple:t,"data-testid":`${l}-role-location`,children:c})]}),!o&&n&&(0,a.jsx)(tX,{children:"and"})]})},t2=({contributors:e,testId:t})=>{let i=e.filter(e=>e.authorName);if(0===i.length)return null;let o=i.length>1;return(0,a.jsx)(tK,{"data-testid":t,children:i.map((e,n)=>(0,a.jsx)(t1,{contributor:e,imageUrlTemplate:1===i.length&&0===n?(()=>{let e=i[0]?.rawImage;if(!e)return"";let t=e&&/^(?:https?|http):\/\/[^\s/$.?#].[^\s]*$/i.test(e.model.locator),a=e;return t&&(a={model:{...e.model,locator:new URL(e.model.locator).pathname},type:e.type}),"ic"!==e.model.originCode||t?(0,t0.getImageUrlTemplate)(a):(0,t0.getFeaturesImageUrlTemplate)(a)})():"",hasMultipleContributors:o,isLastContributor:n===i.length-1,isSecondToLastContributor:n===i.length-2,testId:`${t}-contributor-${n}`},n))})},t4=(0,tM.withCMSFallback)(({testId:e="byline",model:t,type:i,isSponsored:o=!1})=>{let{model:{timestamp:l=""}={}}=t.blocks.find(({type:e})=>"timestamp"===e)||{},r=(0,tR.bylineDataMapper)({model:t,type:i}),s=(0,tD.formatTimestamp)(l,"long"),d=(0,tD.formatTimestamp)(l,"seo"),p="subByline"===i;return(0,a.jsxs)(tO,{"data-testid":e,children:[!p&&(0,a.jsxs)(a.Fragment,{children:[l&&(0,a.jsx)(tH,{suppressHydrationWarning:!0,dateTime:d,children:s}),(0,a.jsxs)(tz,{children:[(0,a.jsx)(S.ArticlePageButtons,{}),(0,a.jsx)(tU,{children:(0,a.jsx)(tE,{})})]})]}),(0,a.jsx)(tG,{children:!!r.length&&(0,a.jsx)(t2,{contributors:r,testId:`${e}-contributors`})}),o&&(0,a.jsx)(tZ,{children:(0,a.jsx)(n.default,{type:"spo"})})]})},({testId:e="byline",model:t,type:i})=>{let{model:{timestamp:o=""}={}}=t.blocks.find(({type:e})=>"timestamp"===e)||{},n=(0,tR.bylineDataMapper)({model:t,type:i}),l=(0,tD.formatTimestamp)(o,"long"),r=(0,tD.formatTimestamp)(o,"seo"),s="subByline"===i;return(0,a.jsxs)(tO,{"data-testid":e,children:[!s&&(0,a.jsxs)(a.Fragment,{children:[o&&(0,a.jsx)(tH,{suppressHydrationWarning:!0,dateTime:r,children:l}),(0,a.jsx)(tz,{children:(0,a.jsx)(tJ.default,{})})]}),(0,a.jsx)(tG,{children:!!n.length&&(0,a.jsx)(t2,{contributors:n,testId:`${e}-contributors`})})]})}),t6={$type:"contained",$marginBottom:["s","s","s","s","s","s"]},t3={$type:"wide",$marginBottom:["s","s","s","s","s","s"]},t8={$margin:["0 16px 0","0 16px",void 0,void 0,void 0,void 0]};var t5=e.i(786025),t7=e.i(581221);let t9=j.default.section.withConfig({displayName:"CallOutBox.styles__CallOutBoxStyled",componentId:"sc-ee47beec-0"})`
  ${({theme:e,$hasImage:t,$withMarginInline:a})=>j.css`
    background-color: ${e.container.onDefaultBG.value};
    padding: 24px;
    display: grid;

    ${t&&j.css`
      gap: 32px;
      grid-template-columns: 1fr 2fr;

      ${(0,k.applyStylesForBreakpoints)(j.css`
          grid-template-columns: 1fr;
          gap: 16px;
        `,"group2")}
    `};

    ${a&&j.css`
      margin-inline: 16px;

      ${(0,k.applyStylesForBreakpoints)(j.css`
          margin-inline: 0;
        `,"group4")}
    `}
  `};
`,ae=j.default.div.withConfig({displayName:"CallOutBox.styles__ContentWrapperStyled",componentId:"sc-ee47beec-1"})`
  display: grid;
  gap: 8px;
`,at=j.default.div.withConfig({displayName:"CallOutBox.styles__ContentBlockWrapper",componentId:"sc-ee47beec-2"})`
  display: grid;
  gap: 12px;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      gap: 10px;
    `,"group2")}

  & p:empty {
    display: none;
  }
`,aa=j.default.p.withConfig({displayName:"CallOutBox.styles__TitleStyled",componentId:"sc-ee47beec-3"})`
  ${({theme:e})=>(0,C.applyTypography)(e.generic.header.small.bpLarge)}
  color: ${({theme:e})=>e.text.lowEmphasis.value};

  ${(0,k.applyStylesForBreakpoints)(j.css`
      ${({theme:e})=>(0,C.applyTypography)(e.generic.header.small.bpSmall)}
    `,"group2")}
`,ai=j.default.div.withConfig({displayName:"CallOutBox.styles__ContentStyled",componentId:"sc-ee47beec-4"})`
  ${({theme:e})=>j.css`
    ${(0,C.applyTypography)(e.generic.info1.default.bpLarge)}
    color: ${e.text.mediumEmphasis.value};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${(0,C.applyTypography)(e.generic.info1.default.bpSmall)}
      `,"group4")};
  `};
`,ao=({model:{title:e,blocks:t},testId:i})=>{let{model:o}=t.find(({type:e})=>"image"===e)||{},n=(0,u.useFeatureFlag)("legacy-article-rendering-logic");return(0,a.jsxs)(t9,{"data-testid":i,$hasImage:!!o,$withMarginInline:!n,children:[o&&(0,a.jsx)(t7.default,{type:"altText",model:o,isCalloutImage:!0}),(0,a.jsxs)(ae,{children:[e&&(0,a.jsx)(aa,{children:e}),(0,a.jsx)(at,{children:t.map(({model:{blocks:e}},t)=>(0,a.jsx)(ai,{children:(0,a.jsx)(t5.default,{blocks:e})},t))})]})]})},an={$type:"callout",$marginTop:["l","l","l","l","l","l"],$marginBottom:["l","l","l","l","l","l"]};var al=e.i(119081);let ar=j.default.h2.withConfig({displayName:"Group.styled__GroupTitleStyled",componentId:"sc-77edfc80-0"})`
  ${({theme:e})=>j.css`
    ${(0,C.applyTypography)(e.ataglanceTitle.bpLarge)};
    color: ${e.text.onInverseBG.default.value};
    background: ${e.container.onInverseBG3.value};
    padding: 8px 16px;
    margin-bottom: 16px;
  `}
`,as=j.default.section.withConfig({displayName:"Group.styled__GroupStyled",componentId:"sc-77edfc80-1"})`
  ${({theme:e})=>j.css`
    background: ${e.container.onDefaultBG.value};
    padding: 24px;
  `}

  ${({theme:e,$isOverview:t})=>t&&j.css`
      ${(0,C.applyTypography)(e.atAGlanceBodyCopy.default.bpLarge)};
      color: ${e.text.default.value};
      border-bottom: 1px solid ${e.divider.highEmphasis.value};
      padding: 0;
      padding-bottom: 16px;
      margin-bottom: 16px;
      ${(0,k.applyStylesForBreakpoints)(j.css`
          ${(0,C.applyTypography)(e.atAGlanceBodyCopy.default.bpSmall)};
        `,"group2")}
    `}
`;var ad=e.i(533033);let ap=(0,tM.withCMSFallback)(({model:e,testId:t})=>{let{blocks:i,intentType:o}=e,n=["gallery","overview"].includes(o),l=(()=>{switch(o){case"overview":return()=>(0,a.jsx)(t5.default,{blocks:i});case"gallery":return()=>(0,a.jsx)(S.Slideshow,{children:i.map(({type:e,model:t},i)=>"image"===e?(0,a.jsx)(t7.default,{type:e,model:t},i):null)})}})();return n?(0,a.jsx)(al.FlowElementsProvider,{value:!1,children:(0,a.jsxs)(as,{"data-testid":t,$isOverview:"overview"===o,children:["overview"===o&&(0,a.jsx)(ar,{children:"AT A GLANCE"}),(0,a.jsx)(l,{})]})}):null},({model:e,testId:t})=>{let{blocks:i,intentType:o}=e,n=["gallery","overview"].includes(o),l=(()=>{switch(o){case"overview":return()=>(0,a.jsx)(t5.default,{blocks:i});case"gallery":return()=>(0,a.jsx)(ad.default,{children:i.map(({type:e,model:t},i)=>"image"===e?(0,a.jsx)(t7.default,{type:e,model:t},i):null)})}})();return n?(0,a.jsx)(al.FlowElementsProvider,{value:!1,children:(0,a.jsx)(as,{"data-testid":t,children:(0,a.jsx)(l,{})})}):null}),ac={$type:"contained",$marginTop:["m","m","m","m","m","m"],$marginBottom:["s","s","s","s","s","s"]};var au=e.i(793897),ag=e.i(554692),am=e.i(184874);let af=(0,j.default)(v.GridStyled).withConfig({displayName:"Links.styles__LinksContainerStyled",componentId:"sc-b3f84cef-0"})`
  ${({$isLast:e,theme:t})=>j.css`
    border-bottom: ${`2px ${t.text.default.value} solid`};
    border-top: ${`2px ${t.text.default.value} solid`};

    ${e&&j.css`
      border-bottom: none;
    `};
  `}
`,ay=(0,j.default)(v.GridStyled).withConfig({displayName:"Links.styles__LinksGridStyled",componentId:"sc-b3f84cef-1"})`
  margin: 24px 0;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      margin: 16px 0;
    `,"group1","group2")};
`,ah=j.default.span.withConfig({displayName:"Links.styles__LinksTitleStyled",componentId:"sc-b3f84cef-2"})`
  ${({theme:e})=>j.css`
    color: ${e.text.default.value};
    margin-top: 32px;
    //styleName: inarticlepromotitle/emphasised/bplarge;
    font-family: 'BBC Reith Serif';
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.02em;
    text-align: left;

    ${(0,k.applyStylesForBreakpoints)(j.css`
        margin-top: 24px;
        //styleName: inarticlepromotitle/emphasised/bpsmall;
        font-family: 'BBC Reith Serif';
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: -0.02em;
        text-align: left;
      `,"group2")};
  `};
`,ax=({model:e})=>{let t=e.blocks.filter(e=>"title"===e.type)?.[0],i=(0,am.getNestedValue)(t,"paragraph"),o=e.blocks.filter(e=>"link"===e.type).map(e=>{let t=e.model.blocks.find(e=>"text"===e.type);return t?{locator:(0,am.getNestedValue)(t,"urlLink","locator")||"",text:(0,am.getNestedValue)(t,"urlLink","text")||""}:null}).filter(e=>!!e),n=o.length>4?"16px":"0px",l=`repeat(auto-fit, minmax(calc(100% / 3 - ${n}), 1fr))`;return(0,a.jsxs)(af,{$isLast:e.isLast,children:[i&&(0,a.jsx)(ah,{"data-testid":"links-title",children:i}),(0,a.jsx)(ay,{"data-testid":"links-grid",$gridGap:["16px","16px","16px","16px","16px","16px"],$columns:["1fr","1fr",l,l,l,l],children:!!o.length&&o.map((e,t)=>(0,a.jsx)(ag.default,{type:"chester",href:e.locator,title:e.text,metadata:{contentType:"article"}},e.locator+t))})]})},ab={$type:"contained",$marginBottom:["m","m","l","l","l","l"],$marginTop:["m","m","l","l","l","l"]},aS={$type:"withoutMargin",$marginBottom:["m","m","l","l","l","l"],$marginTop:["m","m","l","l","l","l"]};var av=e.i(743718);let aw={$type:"contained",$marginBottom:["s","s","s","s","s","s"]},a$=j.default.div.withConfig({displayName:"Quote.styles__QuoteStyled",componentId:"sc-9001ec68-0"})`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 24px 16px 24px 0;
  gap: 8px;
  border-width: 1px 0;
  border-style: solid;
  border-color: ${({theme:e})=>e.divider.lowEmphasis.value};
`,aj=j.default.div.withConfig({displayName:"Quote.styles__QuoteIconStyled",componentId:"sc-9001ec68-1"})`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`,ak=j.default.span.withConfig({displayName:"Quote.styles__QuoteTextStyled",componentId:"sc-9001ec68-2"})`
  font-style: italic;
  ${({theme:e})=>(0,C.applyTypography)(e.pullQuote)};
  color: ${({theme:e})=>e.text.default.value};
`,aC=({model:{text:e},testId:t})=>e?(0,a.jsxs)(a$,{"data-testid":t,children:[(0,a.jsx)(aj,{children:(0,a.jsx)(w.default,{name:"personalisation:quote"})}),(0,a.jsx)(ak,{children:e})]}):null,a_={$type:"contained",$marginTop:["m","m","l","l","l","l"],$marginBottom:["m","m","l","l","l","l"]},aI={tiktok:"https://www.tiktok.com/legal/cookie-policy",twitter:"https://help.twitter.com/en/rules-and-policies/twitter-cookies",youtube:"https://policies.google.com/technologies/cookies",instagram:"https://privacycenter.instagram.com/policies/cookies/",facebook:"https://www.facebook.com/privacy/policies/cookies"},aT={tiktok:"https://www.tiktok.com/legal/privacy-policy",twitter:"https://twitter.com/en/privacy",youtube:"https://policies.google.com/privacy",instagram:"https://privacycenter.instagram.com/policy",facebook:"https://www.facebook.com/privacy/policy/"};var aB=e.i(396866);let aN=(e,t=!0)=>{switch(e){case"tiktok":return j.css`
        min-height: 600px;
        ${t&&j.css`
          max-width: 350px;
        `}
      `;case"twitter":case"instagram":case"facebook":return j.css`
        min-height: 436px;
        ${t&&j.css`
          max-width: 436px;
        `}
      `;case"youtube":return j.css`
        min-height: 450px;
        ${t&&j.css`
          max-width: 100%;
        `}
      `}},aA=j.default.div.withConfig({displayName:"Social.styles__SocialStyled",componentId:"sc-fe58d2f9-0"})`
  ${({$maxWidth:e,$source:t,$withLegacyRenderingLogic:a=!0})=>j.css`
    ${aN(t,!1)};
    width: 100%;

    ${a?j.css`
          justify-self: center;
        `:j.css`
          margin-inline: auto;
        `}

    ${"youtube"===t?j.css`
          width: 100%;
          height: 100%;
          min-height: auto;

          iframe {
            width: 100%;
            height: 100%;
            aspect-ratio: 16 / 9;
          }

          > div:first-of-type {
            height: 100%;
          }
        `:j.css`
          max-width: ${`${e}px`};

          iframe.instagram-media:not(.instagram-media-rendered) {
            border: none !important;
          }
        `}
  `};
`,aL=j.default.div.withConfig({displayName:"Social.styles__ConsentScreenStyled",componentId:"sc-fe58d2f9-1"})`
  ${({$source:e,$withLegacyRenderingLogic:t=!0})=>j.css`
    display: grid;
    justify-content: center;
    justify-self: center;
    ${aN(e)};
    width: 100%;

    ${!t&&j.css`
      margin-inline: auto;
    `}
  `};
`,aF=j.default.div.withConfig({displayName:"Social.styles__ConsentScreenContentStyled",componentId:"sc-fe58d2f9-2"})(({theme:e})=>j.css`
    display: grid;
    padding: 16px;
    row-gap: 16px;
    align-content: center;
    background-color: ${e.advert.container.value};
  `),aP=j.default.h4.withConfig({displayName:"Social.styles__ConsentTitleStyled",componentId:"sc-fe58d2f9-3"})`
  ${({theme:e})=>j.css`
    ${(0,C.applyTypography)(e.bodyCopy.emphasised.bpLarge)};
    font-size: 20px;
  `}
`,aE=j.default.div.withConfig({displayName:"Social.styles__ConsentContentStyled",componentId:"sc-fe58d2f9-4"})`
  ${({theme:e})=>j.css`
    ${(0,C.applyTypography)(e.bodyCopy.default.bpLarge)};
    font-family: ${e.fontFamilies.bbcReithSans};

    div {
      display: inline-block;
    }

    a {
      ${(0,C.applyTypography)(e.bodyCopy.links.bpLarge)};
      font-family: ${e.fontFamilies.bbcReithSans};
    }

    b {
      ${(0,C.applyTypography)(e.bodyCopy.emphasised.bpLarge)};
      font-family: ${e.fontFamilies.bbcReithSans};
    }

    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${(0,C.applyTypography)(e.bodyCopy.default.bpSmall)};
        font-family: ${e.fontFamilies.bbcReithSans};

        a {
          ${(0,C.applyTypography)(e.bodyCopy.links.bpSmall)};
          font-family: ${e.fontFamilies.bbcReithSans};
        }

        b {
          ${(0,C.applyTypography)(e.bodyCopy.emphasised.bpSmall)};
          font-family: ${e.fontFamilies.bbcReithSans};
        }
      `,"group2")};
  `};
`,aM=j.default.div.withConfig({displayName:"Social.styles__ConsentActionsStyled",componentId:"sc-fe58d2f9-5"})``,aR=({source:e,cookiePolicyUrl:t,policySource:i,privacyPolicyUrl:o})=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(aP,{children:["Allow ",e," content?"]}),(0,a.jsxs)(aE,{children:["This article contains content provided by ",e,". We ask for your permission before anything is loaded, as they may be using cookies and other technologies. You may want to read ",(0,a.jsx)(b.default,{analyticsProps:{item_name:`ConsentMessage - cookie policy - ${i}`},href:t,children:`${(i||e).trim()}’s cookie policy`})," and ",(0,a.jsx)(b.default,{analyticsProps:{item_name:`ConsentMessage - privacy policy - ${i}`},href:o,children:"privacy policy"})," before accepting. To view this content choose ",(0,a.jsx)("b",{children:"‘accept and continue’"}),"."]})]}),aD=({html:e})=>{let i=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let{current:t}=i;t&&e&&t.append(...Array.from(document.createRange().createContextualFragment(e).children))},[e]),(0,a.jsx)("div",{ref:i})};var aO=e.i(472269);let aG=j.default.div.withConfig({displayName:"SocialGuidance.styles__ConsentScreenGuidanceStyled",componentId:"sc-ec59a9c1-0"})(({theme:e})=>j.css`
    margin-top: 8px;
    color: ${e.text.lowEmphasis.value};
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: min-content minmax(0, 1fr);
    column-gap: 4px;

    ${(0,C.applyTypography)(e.caption)};
  `),aH=({source:e})=>{let t=`The BBC is not responsible for the content of external sites. ${e} content may contain adverts.`;return(0,a.jsxs)(aG,{children:[(0,a.jsx)(w.default,{name:"labels:info"}),t]})},az=e=>{let{model:i}=e,{source:o,maxWidth:n,html:l=""}=i,r=(0,u.useFeatureFlag)("legacy-article-rendering-logic"),[s,d]=(0,t.useState)(!1),p={source:(()=>{switch(o){case"tiktok":return"TikTok";case"youtube":return"Google YouTube";case"twitter":return"X";default:return(0,aO.default)(o)}})(),policySource:(()=>{switch(o){case"facebook":case"instagram":return"Meta";case"youtube":return"Google";case"twitter":return"X";default:return}})(),cookiePolicyUrl:aI[o],privacyPolicyUrl:aT[o]},{source:c}=p;return l?s?(0,a.jsxs)(aA,{$maxWidth:n,$source:o,$withLegacyRenderingLogic:r,children:[(0,a.jsx)(aB.default,{..."youtube"===o?{}:{source:o}}),(0,a.jsx)(aD,{...i}),(0,a.jsx)(aH,{source:c})]}):(0,a.jsxs)(aL,{$source:o,$withLegacyRenderingLogic:r,children:[(0,a.jsxs)(aF,{children:[(0,a.jsx)(aR,{...p}),(0,a.jsx)(aM,{children:(0,a.jsx)(ec.default,{type:"ghost",text:"Accept and continue",onClick:()=>d(!0)})})]}),(0,a.jsx)(aH,{source:c})]}):null};var aU=e.i(403052),aW=e.i(764183);let aV={$type:"contained",$marginBottom:["m","m","l","l","l","l"]};var aY=e.i(876278),aq=e.i(753630),aQ=e.i(863429),aX=e.i(251602);n.default,aW.default,t7.default,aQ.default,aX.Video;let aK=({topics:e})=>e.length?(0,a.jsx)(ts.ContainerStyled,{"data-component":"tags",$type:"contained",$marginTop:["m","m","l","l","l","l"],$marginBottom:["m","m","l","l","l","l"],children:(0,a.jsx)(aQ.default,{"data-testid":"tagList",topics:e})}):null,aZ=({model:e,type:t})=>{let i=e.blocks.find(e=>"caption"===e.type),o=e.emphasiseImage?aY.heroImageContainerProps:aY.imageContainerProps;return i&&(o={...o,$marginBottom:["none","none","none","none","none","none"]}),(0,a.jsxs)("figure",{children:[(0,a.jsx)(ts.ContainerStyled,{"data-component":"image-block",...o,children:(0,a.jsx)(t7.default,{model:e,type:t,isInverse:!1})}),i&&(0,a.jsx)(ts.ContainerStyled,{"data-component":"caption-block",...aV,children:(0,a.jsx)(aW.default,{model:i.model,type:i.type})})]})},aJ=({model:e,type:t})=>{let i=e.blocks.find(e=>"caption"===e.type),o=aq.playerContainerProps;return i&&(o={...o,$marginBottom:["none","none","none","none","none","none"]}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ts.ContainerStyled,{"data-component":"video-block","data-testid":"fabl-video-container",...o,children:(0,a.jsx)(aX.Video,{model:e,type:t})}),i&&(0,a.jsx)(al.FlowElementsProvider,{value:!1,children:(0,a.jsx)(ts.ContainerStyled,{"data-component":"caption-block",...aV,children:(0,a.jsx)(aW.default,{model:i.model,type:i.type})})})]})},a0={advertisement:[({incrementedType:e})=>{let t=e?.startsWith("mid");return e?(0,a.jsx)(n.default,{type:e,showPlaceholder:t}):null},"advertisement-block"],audio:[aJ,"audio-block"],byline:[t4,"byline-block",t6],callout:[ao,"callout-block",an],embed:[S.Embed,"embed-block",a_],group:[ap,"group-block",{$type:"contained",$marginBottom:["m","m","l","l","l","l"]}],headline:[au.default,"headline-block",ac],image:[aZ,"image-block"],include:[S.Include,"include-block",a_],links:[ax,"links-block",{$type:"contained",$marginBottom:["m","m","l","l","l","l"],$marginTop:["m","m","l","l","l","l"]}],orderedList:[av.default,"ordered-list-block",ab],quote:[aC,"quote-block",aw],social:[az,"social-block",a_],subByline:[t4,"subByline-block",t6],subheadline:[au.default,"subheadline-block",ac],text:[aU.default,"text-block",{$type:"contained",$marginBottom:["s","s","s","s","s","s"]}],unorderedList:[av.default,"unordered-list-block",ab],video:[aJ,"video-block"]},a1={ohio:"Related",texas:"Watch"};var a2=e.i(542383);let a4=({isNewsArticle:e})=>{let[i,o]=(0,t.useState)(!1),[n,l]=(0,t.useState)(!1),r=(0,tn.useIsAdsServiceEnabled)(),{allowAdvertising:s=!0}=(0,tt.usePageData)(),{dotcom:{hasTaboolaConsent:d}}=(0,a2.useConsent)(),p=e?"taboola-below-article---news":"taboola-below-article",c=e?"Below Article - News":"Below Article";return(0,t.useEffect)(()=>{let e=(0,eH.default)(()=>{window.scrollY>=document.body.scrollHeight/2&&o(!0)},25,{leading:!0,trailing:!0});return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,t.useEffect)(()=>{r&&s&&d&&i&&l(!0)},[r,s,d,i]),(0,t.useEffect)(()=>{n&&(window._taboola=window._taboola||[],window._taboola.push({mode:"alternating-thumbnails-a",container:p,placement:c,target_type:"mix"}),window._taboola.push({flush:!0}))},[n,p,c]),(0,a.jsx)("div",{children:(0,a.jsx)("div",{id:p})})};var a6=e.i(812345),a3=e.i(145707),a8=e.i(445793),a5=e.i(885082),a7=e.i(854300),a9=e.i(217256),ie=e.i(485768),it=e.i(494726),ia=e.i(69286);let ii=j.default.section.withConfig({displayName:"Section.layouts.styles__SectionLayoutWrapper",componentId:"sc-40ef2d4a-0"})(({theme:e,$type:t})=>j.css`
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    display: contents;

    ${"alaska"===t&&j.css`
      display: block;
      background-color: ${e.container.onDefaultBG4.value};
    `}
  `);var io=e.i(828564),il=e.i(160763);let ir=(0,a3.forwardLayout)(e=>{let{type:i,title:o,content:n=[],innerCollections:l=[],paginationData:r,sectionNumber:s=0,sectionTitleProps:d,audioPageType:p="",analyticsGroupNameOverride:c,testId:u=i,as:g}=e,m=(0,t.useRef)(null),[f,y]=(0,a5.useCallbackRef)(),h=(0,t.useRef)(null),x=(0,to.useDarkMode)(),b=(0,ia.useIsSectionEnabled)(i),S=(0,it.getShowSectionTitle)(e),v=(0,it.getIsSectionInverse)(e),w=!x&&(0,it.getIsPromoSection)(e),$=v&&!w,j=d?.link??"",{dataset:k}=(0,a8.useAnalyticsGroupProperties)({audioPageType:p,sectionNumber:s,content:n,innerCollections:l,link:j,paginationData:r,sectionTitleProps:d,title:o,type:i,analyticsGroupNameOverride:c}),C=a6.SECTIONS_WITH_LENGTH.includes(i)?`-${n.length}`:"",_=`${u}-section-outer${C}`;return b?(0,a.jsxs)(ii,{"data-testid":_,...k,as:g,$type:i,children:[S&&(0,a.jsx)(a7.default,{marginTop:48,marginBottom:24,group2:{marginTop:32,marginBottom:16},isInverse:$,...$?{}:{withBackground:!1},children:(0,a.jsx)(a9.default,{isContained:!1,columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:1,colSpan:24,group2:{colStart:1,colSpan:12},children:(0,a.jsx)(il.default,{isFullWidth:!0,withMarginBottom:!1,...e,scrollContainerRef:f,scrollableContentRef:m,controlButtonsPortalRef:h})})})}),(0,a.jsx)(io.default,{...e,scrollContainerRef:y,scrollableContentRef:m,controlButtonsPortalRef:h})]}):null}),is=({sectionProps:e,index:t,analyticsGroupNameOverride:i=""})=>{let o=a6.SECTIONS_WITH_LAYOUT.includes(e.type)?ir:h.default;return(0,a.jsx)(o,{layout:"single-column",sectionNumber:t,...e,titleAsHeadingTag:!1,as:"aside",title:a1[e.type]||"More from the BBC",analyticsGroupNameOverride:i})};var id=e.i(444412),ip=e.i(154738),ic=e.i(898229),iu=e.i(935960);let ig=(e=[])=>{let a=(0,u.useFeatureFlag)("election-banner-us"),i=(0,u.useFeatureFlag)("election-banner-us-client-refresh"),o=a?e.find(e=>"electionbanner"===e.type):void 0,[n,l]=(0,t.useState)(o),r=a&&i&&!(0,ip.default)(n);return(0,t.useEffect)(()=>{async function e(){let e=n?.model.href;try{let{data:t}=await (0,ic.fetchClient)(e,{}),a={type:"electionbanner",model:{type:"include",fullwidth:!0,html:(0,iu.retrieveHtmlContent)(t)}};l(a)}catch(e){ej.logger.error(`Error fetching election banner: ${e}`)}}r&&e().then()},[r]),n};function im(){return(0,t.useContext)(tT)}let iy=function(e){let a=(0,tn.useIsAdsServiceEnabled)(),{allowAdvertising:i=!0}=(0,tt.usePageData)(),o=(0,t.useRef)(!1);(0,t.useEffect)(()=>{if(null!==a&&e.current){let t=a&&i;t&&!o.current&&(e.current.requestAd(),o.current=!0),t||e.current.closePlaceholder()}},[a,i,e])};var ih=e.i(240914);let ix=({data:e})=>{let{model:t,type:i}=e;return t.fullWidth=!0,i&&(t.type=i),(0,a.jsx)(ih.default,{type:"include",model:t})},ib=(0,t.createContext)([]),{Provider:iS}=ib,iv=({children:e,value:t})=>(0,a.jsx)(iS,{value:t,children:e});var iw=e.i(453784),i$=e.i(631546);let ij=["headline","timestamp","byline"],ik=["subheadline"],iC=["text","embed","image","video","layout"];var i_=e.i(939648);let iI=j.default.details.withConfig({displayName:"Accordion.styles__AccordionStyled",componentId:"sc-626abe0e-0"})(({theme:e})=>j.css`
    width: 100%;
    border-bottom: 1px solid ${e.nav.lines.value};
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
  `),iT=j.default.summary.withConfig({displayName:"Accordion.styles__AccordionSummaryStyled",componentId:"sc-626abe0e-1"})`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 8px 12px 8px;
  cursor: pointer;
  text-align: left;
  flex: 1 1 auto;
  scroll-margin-top: ${i_.HEADER_DEFAULT_HEIGHT}px;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      scroll-margin-top: ${i_.HEADER_HEIGHT_MOBILE}px;
    `,"group2")};
`,iB=j.default.span.withConfig({displayName:"Accordion.styles__AccordionHeadlineStyled",componentId:"sc-626abe0e-2"})(({theme:e})=>j.css`
    ${(0,C.applyTypography)(e.mainSectionHeading.bpLarge)};
    flex: 1;
    display: flex;
    align-items: center;
    text-align: left;
    color: ${e.text.default.value};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${(0,C.applyTypography)(e.mainSectionHeading.bpSmall)};
      `,"group2")}
  `),iN=j.default.div.withConfig({displayName:"Accordion.styles__IconWrapperStyled",componentId:"sc-626abe0e-3"})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 0 0 auto;
  height: 100%;
  margin-left: 8px;
`,iA=j.default.div.withConfig({displayName:"Accordion.styles__AccordionContentStyled",componentId:"sc-626abe0e-4"})(({theme:e})=>j.css`
    display: grid;
    row-gap: 16px;
    padding: 16px;
    color: ${e.text.default.value};

    ${(0,C.applyTypography)(e.bodyCopy.default.bpLarge)};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${(0,C.applyTypography)(e.bodyCopy.default.bpSmall)};
      `,"group2")}
  `);function iL(e){return!!(e.current&&e.current.open)}let iF=({model:e})=>{let i=(0,t.useRef)(null),[o,n]=(0,t.useState)(iL(i)),{blocks:l=[]}=e,r=l.findIndex(({type:e})=>"headline"===e),[s,...d]=-1!==r?l.slice(r):l,{model:p}=s??{},{jumpLinkLabel:c}=p??{},u=o?"arrows:chevron-up":"arrows:chevron-down";return(0,t.useEffect)(()=>{let e=e=>{e===c&&i.current&&!i.current.open&&(i.current.open=!0,n(!0))},t=()=>{e(window.location.hash.slice(1))},a=({target:t})=>{let a=t.closest('a[href^="#"]');a&&e(a.getAttribute("href")?.slice(1))};return t(),window.addEventListener("hashchange",t),document.addEventListener("click",a),()=>{window.removeEventListener("hashchange",t),document.removeEventListener("click",a)}},[c]),(0,a.jsx)(iI,{ref:i,onToggle:()=>n(iL(i)),children:!!s&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(iT,{id:c,children:[(0,a.jsx)(iB,{children:(0,a.jsx)(t5.default,{blocks:[s]})}),(0,a.jsx)(iN,{children:(0,a.jsx)(w.default,{width:24,height:12,name:u,testId:u})})]}),(0,a.jsx)(iA,{children:(0,a.jsx)(t5.default,{blocks:d})})]})})},iP=({children:e})=>(0,a.jsx)(a7.default,{marginBottom:16,dataComponent:"accordion-block",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),iE=(0,a3.forwardLayout)(e=>(0,a.jsx)(iP,{children:(0,a.jsx)(iF,{...e})}));var iM=(0,e.i(608080).default)(function(e,t,a){return e+(a?"-":"")+t.toLowerCase()});let iR=({children:e,dataComponent:t})=>(0,a.jsx)(a7.default,{marginBottom:24,group2:{marginBottom:4},dataComponent:t,zIndex:"level1",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),iD=({children:e,dataComponent:t})=>(0,a.jsx)(a7.default,{marginBottom:24,group2:{marginBottom:4},dataComponent:t,zIndex:"level1",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:12,group5:{colStart:4,colSpan:13},group4:{colStart:1,colSpan:14},group3:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),iO=(0,a3.forwardLayout)((e,t)=>{let{type:i}=e,o=`${iM(i)}-block`,n="byline"===i||"single-column"===t?iR:iD;return(0,a.jsx)(n,{dataComponent:o,children:(0,a.jsx)(t4,{...e})})}),iG=({children:e})=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:32,group2:{marginTop:24,marginBottom:24},dataComponent:"callout-block",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:5,colSpan:17,group5:{colStart:3,colSpan:20},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),iH=(0,a3.forwardLayout)(e=>(0,a.jsx)(iG,{children:(0,a.jsx)(ao,{...e})})),iz=({children:e})=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:32,group2:{marginTop:24,marginBottom:24},dataComponent:"embed-block",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),iU=(0,a3.forwardLayout)(e=>(0,a.jsx)(iz,{children:(0,a.jsx)(S.Embed,{...e})})),iW=({children:e})=>(0,a.jsx)(a7.default,{dataComponent:"group-block",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),iV=(0,a3.forwardLayout)(e=>(0,a.jsx)(iW,{children:(0,a.jsx)(ap,{...e})})),iY=({children:e,dataComponent:t,jumpLinkLabel:i})=>(0,a.jsx)(a7.default,{id:i,marginTop:24,marginBottom:16,group2:{marginBottom:24},dataComponent:t,children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),iq=({children:e,dataComponent:t,jumpLinkLabel:i})=>(0,a.jsx)(a7.default,{id:i,marginTop:32,marginBottom:24,group2:{marginTop:24,marginBottom:16},dataComponent:t,children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),iQ=({children:e,dataComponent:t})=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:24,group2:{marginTop:24,marginBottom:16},dataComponent:t,children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:12,group5:{colStart:4,colSpan:13},group4:{colStart:1,colSpan:14},group3:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),iX=(0,a3.forwardLayout)((e,t)=>{let{type:i,model:o}=e,{jumpLinkLabel:n}=o,l="headline"===i?iY:"single-column"===t?iq:iQ,r=`${iM(i)}-block`;return(0,a.jsx)(l,{jumpLinkLabel:n,dataComponent:r,children:(0,a.jsx)(au.default,{...e})})});var iK=e.i(244412);let iZ=({children:e})=>(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e}),iJ=({children:e})=>(0,a.jsx)(ie.default,{colStart:6,colSpan:12,group5:{colStart:4,colSpan:13},group4:{colStart:1,colSpan:14},group3:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e}),i0=({children:e})=>(0,a.jsx)(ie.default,{colStart:4,colSpan:18,group5:{colStart:2,colSpan:22},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e}),i1=(0,a3.forwardLayout)((e,t)=>{let{model:i}=e,{emphasiseImage:o,blocks:n=[]}=i,l=n.find(e=>"caption"===e.type),r="single-column"===t?iZ:iJ,s=o?i0:r;return(0,iK.useArticleEagerImage)(e),(0,a.jsx)(a7.default,{dataComponent:"image-block",marginTop:32*!o,marginBottom:32,group2:{marginTop:o?4:24,marginBottom:24},children:(0,a.jsxs)(a9.default,{as:"figure",columns:24,group2:{columns:12},rowGap:8,children:[(0,a.jsx)(s,{children:(0,a.jsx)(t7.default,{...e})}),l&&(0,a.jsx)(r,{children:(0,a.jsx)(aW.default,{...l})})]})})}),i2=({children:e})=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:32,group2:{marginTop:24,marginBottom:24},dataComponent:"include-block",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),i4=(0,a3.forwardLayout)(e=>(0,a.jsx)(i2,{children:(0,a.jsx)(S.Include,{...e})})),i6=function(){return(0,t.useContext)(ib)},i3=j.default.div.withConfig({displayName:"Oklahoma.styles__OklahomaStyled",componentId:"sc-429dbd7a-0"})(({theme:e})=>j.css`
    display: grid;
    row-gap: 16px;

    > *:not(:last-child) {
      border-bottom: 1px solid ${e.divider.lowEmphasis.value};
    }
  `),i8=({content:e})=>(0,a.jsx)(i3,{children:e.map((e,t)=>(0,a.jsx)(ag.default,{...e,itemPosition:t,type:"dundee-narrow"},t))});var i5=e.i(369736),i5=i5,i7=e.i(303764);let i9=j.default.aside.withConfig({displayName:"Aside.styles__AsideStyled",componentId:"sc-817911fc-0"})`
  width: 100%;
`,oe=()=>{let{isLoading:e,data:t}=(0,i5.default)("aside"),{content:i,title:o="More for you"}=t,n=i.slice(0,5),l=!e&&n.length>1,{dataset:r}=(0,a8.useAnalyticsGroupProperties)({type:"oklahoma",title:"mparticle recommendations",content:n});return l?(0,a.jsxs)(i9,{...r,children:[(0,a.jsx)(i7.default,{title:o,variant:"default",isFullWidth:!0}),(0,a.jsx)(i8,{...t,title:o,content:n})]}):null},ot=j.styled.div.withConfig({displayName:"AsideBlock.styles__AsideBlockStickyStyled",componentId:"sc-1d9f070e-0"})`
  ${()=>j.css`
    position: sticky;
    top: ${i_.HEADER_DEFAULT_HEIGHT+16}px;
  `}
`,oa=({children:e})=>(0,a.jsx)(ie.default,{colStart:19,colSpan:6,group5:{colStart:17,colSpan:8},group4:{colStart:15,colSpan:10},group3:{shouldHide:!0},children:e}),oi=({asideIndex:e})=>{let[t]=i6().filter(({index:t})=>t===e),{type:o,incrementedType:l}=t||{},{allowAdvertising:r=!0,subtype:s}=(0,tt.usePageData)(),{account:{hasPersonalizedContentConsent:d}}=(0,a2.useConsent)(),p=(0,u.useFeatureFlag)("mparticle-news-oklahoma"),c=(0,u.useFeatureFlag)("mparticle-features-oklahoma"),g=s===i.ContentSubtype.News?p:s===i.ContentSubtype.Features&&c;switch(o){case"advertisement":{if(!l||!r)return null;let e="sid_1"===l;return(0,a.jsx)(oa,{children:e?(0,a.jsx)(ot,{children:(0,a.jsx)(n.default,{type:l})}):(0,a.jsx)(n.default,{type:l})})}case"recirculation":return g&&d?(0,a.jsx)(oa,{children:(0,a.jsx)(oe,{})}):null;default:return null}},oo=j.default.div.withConfig({displayName:"LayoutBlock.styles__LayoutBlockStyled",componentId:"sc-f9c112e7-0"})`
  display: grid;
  row-gap: 16px;
`,on=({testId:e,model:t})=>{let{blocks:i=[]}=t;return(0,a.jsx)(oo,{"data-testid":e,children:(0,a.jsx)(t5.default,{blocks:i})})},ol=()=>null,or=({children:e,asideIndex:t,dataComponent:i})=>(0,a.jsx)(a7.default,{marginBottom:16,dataComponent:i,children:(0,a.jsxs)(a9.default,{columns:24,group2:{columns:12},children:[(0,a.jsx)(ie.default,{colStart:6,colSpan:12,group5:{colStart:4,colSpan:13},group4:{colStart:1,colSpan:14},group3:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e}),t&&(0,a.jsx)(oi,{asideIndex:t})]})}),os=(0,a3.forwardLayout)((e,t,i)=>(0,a.jsx)("single-column"===t?ol:or,{dataComponent:"layout-block",asideIndex:i,children:(0,a.jsx)(on,{...e})})),od=({children:e})=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:32,group2:{marginTop:24,marginBottom:24},dataComponent:"links-block",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),op=(0,a3.forwardLayout)(e=>(0,a.jsx)(od,{children:(0,a.jsx)(ax,{...e})})),oc=({children:e,dataComponent:t})=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:32,group2:{marginTop:24,marginBottom:24},dataComponent:t,children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),ou=(0,a3.forwardLayout)(e=>{let{type:t}=e,i=`${iM(t)}-list`;return(0,a.jsx)(oc,{dataComponent:i,children:(0,a.jsx)(av.default,{...e})})});var og=e.i(957977);let om=({children:e,jumpLinkLabel:t})=>(0,a.jsx)(a7.default,{id:t,marginBottom:16,dataComponent:"text-block",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),of=(0,a3.forwardLayout)(e=>{let{model:t}=e,{jumpLinkLabel:i}=t;return(0,a.jsx)(om,{jumpLinkLabel:i,children:(0,a.jsx)(og.default,{...e})})}),oy=({children:e})=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:32,group2:{marginTop:24,marginBottom:24},dataComponent:"quote-block",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),oh=(0,a3.forwardLayout)(e=>(0,a.jsx)(oy,{children:(0,a.jsx)(aC,{...e})})),ox=({children:e})=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:32,group2:{marginTop:24,marginBottom:24},dataComponent:"social-block",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),ob=(0,a3.forwardLayout)(e=>(0,a.jsx)(ox,{children:(0,a.jsx)(az,{...e})})),oS=j.css`
  display: grid !important;
  row-gap: 16px;
`,ov=({children:e})=>(0,a.jsx)(a7.default,{marginBottom:16,dataComponent:"text-block",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},extraStyles:oS,children:e})})}),ow=(0,a3.forwardLayout)(e=>(0,a.jsx)(ov,{children:(0,a.jsx)(aU.default,{...e})})),o$=({children:e})=>(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group3:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e}),oj=(0,a3.forwardLayout)(e=>{let{model:t,type:i}=e,{blocks:o=[]}=t,n=o.find(e=>"caption"===e.type),l=`${i}-block`;return(0,a.jsx)(a7.default,{dataComponent:l,marginTop:32,marginBottom:32,group2:{marginTop:24,marginBottom:24},children:(0,a.jsx)(a9.default,{as:"figure",columns:24,group2:{columns:12},rowGap:8,children:(0,a.jsxs)(o$,{children:[(0,a.jsx)(aX.default,{...e}),n&&(0,a.jsx)(aW.default,{...n})]})})})}),ok={accordion:iE,advertisement:iw.default,audio:oj,byline:iO,callout:iH,embed:iU,group:iV,headline:iX,image:i1,include:i4,layout:os,links:op,orderedList:ou,paragraph:of,quote:oh,social:ob,subByline:iO,subheadline:iX,text:ow,unorderedList:ou,video:oj},oC=t.useLayoutEffect,o_=(0,t.createContext)(ok),{Provider:oI}=o_,oT=(0,t.memo)(({componentIndex:e,type:i,isSponsored:o,...n})=>{let l=(0,t.useContext)(o_),r=i6(),s=l[i],[d]=r.filter(({index:t})=>t===e),{index:p}=d||{};return s?(0,a.jsx)(s,{type:i,asideIndex:p,...n,..."byline"===i||"subByline"===i?{isSponsored:o}:void 0},e):null}),oB=(0,t.memo)(({blocks:e,layout:i="single-column",pageType:o,isSponsored:n,adPacing:l})=>{let r=(0,t.useRef)([]),s=(0,t.useMemo)(()=>e.filter(e=>"timestamp"!==e.type),[e]),d=(0,t.useMemo)(()=>{var e;return(e=(e=s).filter(e=>"advertisement"!==e.type),"double-column"!==i)?e:function(e,t={}){let a,{maxBlocksPerLayout:i}=t,o=(a=e.findIndex(({type:e})=>!ij.includes(e)))>=0&&"video"===e[a].type?a:-1,n=[];for(let[t,a]of e.entries()){if(function(e,t,a){let{type:i,model:o}=e;return!!("image"===i&&o?.emphasiseImage)||t===a||ij.includes(i)}(a,t,o)||"advertisement"===a.type){n.push(a);continue}let e=n[n.length-1];e?.type==="layout"&&function(e,t){if(!t)return!0;let a=e.model.blocks;if(a.length<t)return!0;let i=a[a.length-1].type;return ik.includes(i)}(e,i)?e.model.blocks.push(a):n.push({type:"layout",model:{blocks:[a]}})}return n}(e,{maxBlocksPerLayout:o===i$.PAGE_TYPES_CONSTANTS.FEATURES_ARTICLE?5:8})},[s,i,o]),p=(0,t.useMemo)(()=>{let e=new Set;return d.forEach((t,a)=>{"embed"===t.type&&e.add(a)}),e.size>0?e:void 0},[d]);r.current.length!==d.length&&(r.current=Array(d.length).fill(null));let c=(0,t.useMemo)(()=>d.map(e=>e.type),[d]),u=function(e,a,i,o,n){let[l,r]=(0,t.useState)([]),[s,d]=(0,t.useState)(!1),[p]=(0,ez.useBreakpoints)("LayoutRenderer"),c=["group1","group2","group3"].includes(p)?1.3:.6;return oC(()=>{d(!0)},[]),oC(()=>{r([])},[i]),oC(()=>{if(!s||!e)return;let t=a.current;t&&0!==t.length&&r(function(e,t,a={}){let{spacingFactor:i=.6,blockTypes:o,embedIndices:n}=a,l=t*i,r=[],s=0;for(let[t,a]of e.entries())if((s+=n?.has(t)?a+200:a)>=l){let e=o?.[t];if(e&&!iC.includes(e)||("image"===e||"video"===e)&&t<=3)continue;r.push({afterIndex:t}),s=0}return r}(t.map(e=>e?.getBoundingClientRect().height??0),window.innerHeight,{spacingFactor:c,blockTypes:o,embedIndices:n}))},[s,e,i,a,n,c]),l}(!!l,r,d.length,c,p),g=function(e,t=[]){let a=[],i=t.map((e,t)=>"layout"===e?t:-1).filter(e=>e>=0);if(i.length>0&&a.push({index:i[0],type:"advertisement",incrementedType:"sid_1"}),e.length>=2){let t=i.find(t=>t>e[0].afterIndex);void 0!==t&&a.push({index:t,type:"recirculation"});let o=i.find(t=>t>e[1].afterIndex);void 0!==o&&a.push({index:o,type:"advertisement",incrementedType:"sid_2"})}return a}(u,c);(0,t.useEffect)(()=>{l?.onMidSlotCount(u.length)},[u.length,l]);let m=(0,t.useCallback)(e=>t=>{r.current[e]=t},[]),f=function(e,t){let a=new Map;for(let[e,i]of t.entries())a.set(i.afterIndex,e+1);let i=[];for(let[t,o]of e.entries()){i.push({kind:"block",block:o,originalIndex:t});let e=a.get(t);void 0!==e&&i.push({kind:"ad-slot",adType:`mid_${e}`})}return i}(d,u);return(0,a.jsx)(iv,{value:g,children:f.map((e,t)=>"ad-slot"===e.kind?(0,a.jsx)(iw.default,{type:e.adType,layout:"single-column","data-testid":"ad-slot"},`ad-${e.adType}`):(0,a.jsx)("div",{ref:m(e.originalIndex),children:(0,a.jsx)(oT,{componentIndex:e.originalIndex,layout:i,...e.block,isSponsored:n})},`block-${e.originalIndex}`))})},E.default),oN=({topics:e=[],contents:i,onwardJourney:o=[]})=>{let l=im(),r=ig(i),s=(0,u.useFeatureFlag)("legacy-article-rendering-logic"),d=(0,t.useRef)(null);return iy(d),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.default,{type:"top",deferRequest:!0,showPlaceholder:!0,forwardedAdRef:d}),r&&(0,a.jsx)(ix,{data:r}),(0,a.jsxs)("article",{children:[s?(0,id.renderComponents)(i,l):(0,a.jsx)(oB,{layout:"single-column",blocks:i}),(0,a.jsx)(aK,{topics:e})]}),o.map((e,i)=>(0,a.jsxs)(t.Fragment,{children:[(0,a.jsx)(is,{sectionProps:e,index:i}),0===i&&(0,a.jsx)(a4,{isNewsArticle:!0})]},i))]})};var oA=e.i(160709),oL=e.i(77694);let oF=j.default.div.withConfig({displayName:"TravellingArticlePageButtons.styles__TravellingArticlePageButtonsStyled",componentId:"sc-9936148d-0"})`
  ${({theme:e,$isVisible:t})=>j.css`
    display: none;
    position: fixed;
    right: 0;
    bottom: 48px;
    z-index: ${e.zIndex.level1};
    flex-direction: column;
    align-items: center;
    padding: 8px;
    background-color: #ffffff;
    border: 1px solid #d2d4d6;
    box-shadow: 0 4px 12px rgba(32, 34, 36, 0.18);
    opacity: ${+!!t};
    pointer-events: ${t?"auto":"none"};
    transform: translateY(${t?"0":"12px"});
    transition:
      opacity 180ms ease,
      transform 180ms ease;

    > * + * {
      margin-top: 8px;
    }

    button {
      position: relative;
      min-width: 32px;
      min-height: 32px;
      justify-content: center;

      &::before {
        content: '';
        position: absolute;
        top: -4px;
        right: -6px;
        bottom: -4px;
        left: -18px;
      }
    }

    button[data-testid='socialShareTriggerButton']::before {
      top: -18px;
      bottom: -2px;
    }

    button[data-testid='saveButton']::before {
      top: -2px;
      bottom: -18px;
    }

    ${(0,k.applyStylesForBreakpoints)(j.css`
        display: flex;
      `,"group1","group2")};
  `}
`,oP=({isVisible:e=!0})=>{let[i,o]=(0,t.useState)(!1),{pageTitle:n}=(0,tt.usePageData)();return(0,a.jsxs)(oF,{$isVisible:e,"data-testid":"travelling-article-page-buttons",children:[(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)($.default,{trigger:"click",title:n||"",iconOnly:!0}),(0,a.jsx)(oL.SaveButtonWrapper,{children:(0,a.jsx)(oA.default,{isInverse:!1,size:"small",withoutText:!0})})]}),!1]})};var oE=e.i(530342);let oM=j.css`
  font-size: 16px;
  line-height: 24px;
`,oR=j.default.div.withConfig({displayName:"BylineListicle.styles__BylineListicleStyled",componentId:"sc-63e5151a-0"})`
  display: grid;
  grid-template-areas: 'meta';
  row-gap: 4px;

  ${tK} {
    max-width: 100%;
    width: auto;
  }

  ${tH} {
    grid-area: auto;
    ${oM}
  }

  ${tq}, ${tQ}, ${tX} {
    ${oM}
  }
`,oD=j.default.div.withConfig({displayName:"BylineListicle.styles__BylineListicleMetaStyled",componentId:"sc-63e5151a-1"})`
  grid-area: meta;
  display: flex;
  flex-wrap: nowrap;
  align-items: baseline;
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  column-gap: 4px;
  row-gap: 4px;
`,oO=j.default.div.withConfig({displayName:"BylineListicle.styles__BylineListicleContributorsStyled",componentId:"sc-63e5151a-2"})`
  min-width: 0;
`,oG=({testId:e="byline",model:t,type:i})=>{let{model:{timestamp:o=""}={}}=t.blocks.find(({type:e})=>"timestamp"===e)||{},n=(0,tR.bylineDataMapper)({model:t,type:i}),l=!!o,r=!!n.length;return(0,a.jsx)(oR,{"data-testid":e,children:(0,a.jsxs)(oD,{children:[l&&(0,a.jsx)(tH,{suppressHydrationWarning:!0,dateTime:(0,tD.formatTimestamp)(o,"seo"),children:(0,tD.formatTimestamp)(o,"long")}),l&&r&&(0,a.jsx)(tX,{"aria-hidden":"true",children:"|"}),r&&(0,a.jsx)(oO,{children:(0,a.jsx)(t2,{contributors:n,testId:`${e}-contributors`})})]})})};var oH=e.i(52154),oz=e.i(342485);let oU=j.default.div.withConfig({displayName:"LayoutRendererListicle.styles__ListicleArticleStyled",componentId:"sc-16839882-0"})`
  && .dotcom-ad,
  && .dotcom-ad.active {
    background-color: transparent !important;
  }

  ${(0,k.applyStylesForBreakpoints)(j.css`
      background-color: #000000;
      color: #ffffff;

      & * {
        color: #ffffff !important;
      }

      ${t9} {
        background-color: #ffffff;
        color: #000000;

        & * {
          color: #000000 !important;
        }
      }
    `,"group4")};
`,oW=j.default.div.withConfig({displayName:"LayoutRendererListicle.styles__ListicleArticleOverlayStyled",componentId:"sc-16839882-1"})`
  ${(0,k.applyStylesForBreakpoints)(j.css`
      background-color: rgb(0 0 0 / 50%);
      inset-block-end: 0;
      inset-block-start: 0;
      inset-inline: 0;
      pointer-events: none;
      position: fixed;
      z-index: 4;
    `,"group4")};
`,oV=j.default.span.withConfig({displayName:"LayoutRendererListicle.styles__LayoutRendererListicleAdLabelStyled",componentId:"sc-16839882-2"})`
  ${({theme:e})=>j.css`
    color: #fff;
    font-family: ${e.fontFamilies.bbcReithSans};
    font-size: 0.75rem;
    line-height: 1.2;
  `}
`,oY=j.css`
  margin-inline: 0;
  max-width: none !important;
`,oq=j.css`
  column-gap: 0;
  margin-inline: 0;
  max-width: none !important;
`,oQ=j.css`
  ${oz.ParagraphStyled},
  p {
    font-size: 16px;
    line-height: 24px;
  }

  ${oz.ParagraphStyled} a,
  p a,
  ${oH.AnchorStyled} {
    font-size: 16px;
    line-height: 24px;
  }
`,oX=j.default.div.withConfig({displayName:"LayoutRendererListicle.styles__ListicleIntroStyled",componentId:"sc-16839882-3"})`
  background-color: #000000;
  color: #ffffff;
  padding-block-start: 16px;
  padding-block-end: 32px;

  ${oQ};

  [data-component='listicle-intro-block'] > * {
    ${(0,k.applyStylesForBreakpoints)(j.css`
        max-width: calc(100% - 92px);
      `,"group3")};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        max-width: calc(100% - 48px);
      `,"group2")};
  }

  & * {
    color: #ffffff !important;
  }

  ${(0,k.applyStylesForBreakpoints)(j.css`
      padding-block-start: 8px;
      padding-block-end: 16px;
    `,"group4")};
`,oK=j.default.div.withConfig({displayName:"LayoutRendererListicle.styles__ListicleAdSlotWithLayoutStyled",componentId:"sc-16839882-4"})`
  background-color: #202224;
  box-sizing: border-box;
  display: grid;
  place-items: center;
  min-height: 100svh;
  opacity: 1 !important;
  position: relative;
  z-index: 6;

  & [data-component='advertisement-block'] {
    background-color: #202224 !important;
    border-bottom-color: #202224 !important;
    border-top-color: #202224 !important;
  }
`,oZ=j.css`
  grid-column: 1 / -1 !important;
  grid-row: 1 !important;
`,oJ=j.css`
  grid-column: 1 / -1 !important;
  grid-row: 1 !important;
  align-self: start;
  justify-self: end;
  min-height: calc(100svh - ${64}px);
  position: relative !important;
  width: ${500}px;
  z-index: 2 !important;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      grid-column: 1 !important;
      grid-row: 2 !important;
      position: static !important;
      width: 100%;
    `,"group4")};
`,o0=j.keyframes`
  0%,
  100% {
    opacity: 0;
  }

  20%,
  80% {
    opacity: 1;
  }
`,o1=j.keyframes`
  0% {
    opacity: 0;
  }

  10%,
  80% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,o2=j.default.section.withConfig({displayName:"LayoutRendererListicle.styles__ListicleSectionStyled",componentId:"sc-16839882-5"})`
  background-color: #ffffff;
  min-height: 130svh;
  padding-block-end: 64px;
  position: relative;
  scroll-margin-top: ${64}px;
  view-timeline-name: --listicle-section;
  view-timeline-axis: block;

  &::after {
    background-color: #ffffff;
    content: '';
    inset-block: 0;
    inset-inline-end: 0;
    pointer-events: none;
    position: absolute;
    width: ${500}px;
    z-index: 1;
  }

  ${(0,k.applyStylesForBreakpoints)(j.css`
      background-color: #000000;
      padding-block-end: 32px;

      &::after {
        display: none;
      }
    `,"group4")};
`,o4=j.default.div.withConfig({displayName:"LayoutRendererListicle.styles__ListicleSectionStageStyled",componentId:"sc-16839882-6"})`
  min-height: calc(100svh - ${64}px);
  overflow: visible;
  position: relative;

  & > * {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto;
    margin-inline: 0;
    max-width: none;
    min-height: 0;
    position: relative;
    width: 100%;
  }

  & > * > * {
    height: 100%;
    min-height: 0;
    position: relative;
  }

  & > * > *:first-child {
    z-index: 0;
  }

  & > * > *:last-child {
    z-index: 2;
  }

  ${(0,k.applyStylesForBreakpoints)(j.css`
      min-height: 0;
      overflow: visible;
      position: static;

      & > * {
        grid-template-columns: 1fr;
        grid-template-rows: none;
        margin-inline: 0 !important;
        max-width: none !important;
      }

      & > * > * {
        height: auto;
        position: static;
      }
    `,"group4")};
`,o6=j.default.div.withConfig({displayName:"LayoutRendererListicle.styles__ListicleSectionImageStyled",componentId:"sc-16839882-7"})`
  background-color: #000;
  display: flex;
  flex-direction: column;
  height: calc(100svh - ${64}px);
  inset-block-start: ${({$isFirstSection:e})=>e?"auto":"64px"};
  inset-inline-end: ${({$isFirstSection:e})=>e?"auto":"500px"};
  inset-inline-start: ${({$isFirstSection:e})=>e?"auto":"0"};
  min-width: 0;
  opacity: ${({$isFirstSection:e})=>+!!e};
  pointer-events: none;
  position: ${({$isFirstSection:e})=>e?"relative":"fixed"};
  width: auto;
  z-index: 0;
  animation: none;

  @supports (animation-timeline: view()) {
    ${({$isFirstSection:e,$isFirstFixedImage:t})=>!e&&j.css`
        animation: ${t?o1:o0}
          linear both;
        animation-range: entry 0% exit 100%;
        animation-timeline: --listicle-section;
      `}
  }

  & > * {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    margin: 0;
    margin-inline: 0;
    min-height: 0;
    max-width: none;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  & > figure {
    display: block !important;
    grid-template-columns: none !important;
    row-gap: 0 !important;
    margin: 0;
    margin-inline: 0;
    max-width: none !important;
    width: 100%;
  }

  & > * > *:first-child {
    flex: 0 0 calc(100% - 32px);
    height: calc(100% - 32px) !important;
    min-height: 0;
    overflow: hidden;
    width: 100%;
  }

  img {
    display: block;
    height: 100%;
    object-fit: cover;
    transform: none;
    width: 100%;
  }

  ${(0,k.applyStylesForBreakpoints)(j.css`
      height: auto;
      inset: auto;
      opacity: 1;
      position: static;
      animation: none;
      width: 100%;

      & > * {
        height: auto;
        min-height: 100svh;
      }

      & > * > * {
        margin-inline: 0 !important;
        max-width: none !important;
      }

      & > * > *:first-child {
        flex: 0 0 calc(100svh - 32px);
        height: calc(100svh - 32px) !important;
        position: relative;

        &::after {
          background: linear-gradient(to bottom, transparent 0%, #000000 100%);
          content: '';
          inset-block-end: 0;
          inset-inline: 0;
          pointer-events: none;
          position: absolute;
          z-index: 1;
          height: 128px;
        }
      }

      img {
        animation: none;
        transform: none;
      }
    `,"group4")};
`,o3=j.default.div.withConfig({displayName:"LayoutRendererListicle.styles__ListicleSectionTextStyled",componentId:"sc-16839882-8"})`
  ${({$hasImage:e})=>j.css`
    max-width: ${e?"none":"440px"};
    min-height: ${e?"calc(100svh - 64px)":"0"};
    width: 100%;

    ${e&&j.css`
      align-self: start;
      background-color: #ffffff;
      box-sizing: border-box;
      height: auto;
      overflow: visible;
      padding: 32px;
      position: relative;
      z-index: 2;

      ${oQ};

      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: 28px;
        margin-block-end: 16px;
      }

      ${(0,k.applyStylesForBreakpoints)(j.css`
          min-height: 0;
          max-height: none;
          overflow: visible;
          padding: 0;
          position: static;
          background-color: #000000;
          color: #ffffff;

          & > * > * {
            margin-inline: 0;
            max-width: none;
            width: 100%;
          }

          & * {
            color: #ffffff !important;
          }
        `,"group4")};
    `}
  `}

  ${(0,k.applyStylesForBreakpoints)(j.css`
      box-sizing: border-box;
      max-width: 722px;
      margin-inline: auto;
      padding: 0;
      width: calc(100% - 32px);
    `,"group4")};

  ${(0,k.applyStylesForBreakpoints)(j.css`
      max-width: 570px;
    `,"group3")};

  ${(0,k.applyStylesForBreakpoints)(j.css`
      max-width: 400px;
    `,"group2")};

  p + p {
    margin-block-start: 16px;
  }

  ${t9} {
    margin-block: 16px;
  }
`;j.default.div.withConfig({displayName:"LayoutRendererListicle.styles__ListicleMenuContainerStyled",componentId:"sc-16839882-9"})`
  position: sticky;
  top: 96px;
  width: 300px;
  z-index: 5;
  margin-top: 16px;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      width: 174px;
    `,"group1","group2")};
`,j.default.div.withConfig({displayName:"LayoutRendererListicle.styles__ListicleMenuAdStyled",componentId:"sc-16839882-10"})`
  height: 80px;
  width: 100%;
`,j.default.div.withConfig({displayName:"LayoutRendererListicle.styles__ListicleMenuAdSlotStyled",componentId:"sc-16839882-11"})`
  background-color: #808080;
  height: 50px;
  overflow: hidden;
  width: 100px;
`,j.default.nav.withConfig({displayName:"LayoutRendererListicle.styles__ListicleMenuStyled",componentId:"sc-16839882-12"})`
  align-self: start;
  background-color: #000;
  color: #fff;
  max-height: calc(100svh - 112px);
  padding: 16px;
  position: relative;
  pointer-events: ${({$isCollapsed:e})=>e?"none":"auto"};
  transform: ${({$isCollapsed:e})=>e?"translateX(-100%)":"translateX(0)"};
  transition: transform 300ms ease;
  width: 100%;
  z-index: 1;
`,j.default.div.withConfig({displayName:"LayoutRendererListicle.styles__ListicleMenuScrollContentStyled",componentId:"sc-16839882-13"})`
  max-height: calc(100svh - 144px);
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
`,j.default.div.withConfig({displayName:"LayoutRendererListicle.styles__ListicleMenuTopContentStyled",componentId:"sc-16839882-14"})`
  background-color: #000;
  position: sticky;
  top: 0;
  z-index: 1;
`,j.default.button.withConfig({displayName:"LayoutRendererListicle.styles__ListicleMenuCollapseButtonStyled",componentId:"sc-16839882-15"})`
  align-items: center;
  background: #ffffff;
  border: 0;
  border-radius: 50%;
  color: #000000 !important;
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
  opacity: ${({$isVisible:e})=>+!!e};
  padding: 0;
  pointer-events: ${({$isVisible:e})=>e?"auto":"none"};
  position: absolute;
  right: -16px;
  top: 16px;
  width: 32px;
  transition: opacity 300ms ease;

  svg {
    color: #000000 !important;
    height: 16px;
    width: 16px;
  }
`,j.default.button.withConfig({displayName:"LayoutRendererListicle.styles__ListicleMenuReopenButtonStyled",componentId:"sc-16839882-16"})`
  background: #ffffff;
  border: 0;
  border-radius: 999px;
  color: #000000 !important;
  cursor: pointer;
  font-family: ${({theme:e})=>e.fontFamilies.bbcReithSans};
  font-size: 14px;
  font-weight: 400;
  left: 16px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
  opacity: ${({$isVisible:e})=>+!!e};
  padding: 8px 16px;
  pointer-events: ${({$isVisible:e})=>e?"auto":"none"};
  position: absolute;
  top: 0;
  transform: ${({$isVisible:e})=>e?"translateX(0)":"translateX(-100%)"};
  transition:
    opacity 300ms ease,
    transform 300ms ease;
  white-space: nowrap;
  z-index: 2;
`,j.default.h2.withConfig({displayName:"LayoutRendererListicle.styles__ListicleMenuHeadingStyled",componentId:"sc-16839882-17"})`
  ${({theme:e})=>j.css`
    color: #fff;
    font-family: ${e.fontFamilies.bbcReithSerif};
    font-size: 22px;
    line-height: 25px;
    margin: 0 0 12px;
  `}
`,j.default.ul.withConfig({displayName:"LayoutRendererListicle.styles__ListicleMenuListStyled",componentId:"sc-16839882-18"})`
  list-style: none;
  margin: 0;
  padding: 0;

  li + li {
    margin-block-start: 16px;
  }
`,j.default.a.withConfig({displayName:"LayoutRendererListicle.styles__ListicleMenuLinkStyled",componentId:"sc-16839882-19"})`
  ${({theme:e,$isActive:t})=>j.css`
    color: #afb1b4 !important;
    display: block;
    font-family: ${e.fontFamilies.bbcReithSerif};
    padding: 6px 0;
    text-decoration: ${t?"underline":"none"};
    text-underline-offset: 4px;

    &:hover,
    &:focus-visible {
      text-decoration: underline;
    }
  `}
`;let o8=j.default.div.withConfig({displayName:"ListicleLayoutHero.styles__ListicleLayoutHeroStyled",componentId:"sc-a542f58a-0"})`
  position: relative;
  width: 100%;
  z-index: 1;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      z-index: auto;
    `,"group4")};
`,o5=j.default.div.withConfig({displayName:"ListicleLayoutHero.styles__ListicleLayoutHeroImageStyled",componentId:"sc-a542f58a-1"})`
  background-color: #000000;
  position: relative;
  width: 100%;

  &::after {
    background: linear-gradient(to bottom, transparent 0%, #000000 100%);
    content: '';
    inset-block-end: 0;
    inset-inline: 0;
    height: 30%;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }

  & > * {
    margin: 0;
    width: 100%;
  }

  ${(0,k.applyStylesForBreakpoints)(j.css`
      padding-block-end: 100px;

      &::after {
        inset-block-end: 100px;
      }
    `,"group2")};

  ${(0,k.applyStylesForBreakpoints)(j.css`
      padding-block-end: 200px;

      &::after {
        inset-block-end: 200px;
      }
    `,"group3")};

  img {
    display: block;
    width: 100%;
  }
`,o7=j.default.h1.withConfig({displayName:"ListicleLayoutHero.styles__ListicleLayoutHeroTitleStyled",componentId:"sc-a542f58a-2"})`
  ${({theme:e})=>j.css`
    color: #fff;
    font-family: ${e.fontFamilies.bbcReithSerif};
    font-size: 38px;
    line-height: 44px;
    margin: 0;
    padding-left: 53px;
    padding-top: 40px;
    padding-bottom: 16px;
    position: relative;
    width: 70%;
    max-width: 700px;
    ${(0,k.applyStylesForBreakpoints)(j.css`
        font-size: 32px;
        line-height: 38px;
        width: calc(100% - 16px);
        padding-left: 8px;
        text-align: center;
      `,"group2")};
    ${(0,k.applyStylesForBreakpoints)(j.css`
        font-size: 32px;
        line-height: 38px;
      `,"group3")};
  `}
`,o9=j.default.div.withConfig({displayName:"ListicleLayoutHero.styles__ListicleLayoutHeroBodyIntroStyled",componentId:"sc-a542f58a-3"})`
  color: #fff;
  padding-left: 53px;
  padding-bottom: 16px;
  position: relative;
  width: 70%;
  max-width: 700px;

  & * {
    color: #fff !important;
  }

  && p {
    font-size: 16px;
    line-height: 24px;
  }

  ${(0,k.applyStylesForBreakpoints)(j.css`
      box-sizing: border-box;
      padding-inline: 8px;
      text-align: center;
      width: 100%;
    `,"group2")};
`,ne=j.default.div.withConfig({displayName:"ListicleLayoutHero.styles__ListicleLayoutHeroOverlayStyled",componentId:"sc-a542f58a-4"})`
  bottom: 0;
  inset-inline: 0;
  position: absolute;
  width: 100%;
  z-index: 2;
`,nt=j.default.div.withConfig({displayName:"ListicleLayoutHero.styles__ListicleLayoutHeroAdStyled",componentId:"sc-a542f58a-5"})`
  align-items: center;
  display: flex;
  gap: 8px;
  padding-left: 53px;
  padding-block-end: 16px;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      justify-content: center;
      padding-inline: 24px;
    `,"group2")};
`,na=j.default.div.withConfig({displayName:"ListicleLayoutHero.styles__ListicleLayoutHeroButtonsStyled",componentId:"sc-a542f58a-6"})`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding-left: 53px;
  padding-block-end: 8px;

  button {
    align-items: center;
    background-color: transparent;
    border: 1px solid rgb(255 255 255 / 72%);
    border-radius: 50%;
    box-sizing: border-box;
    display: inline-flex;
    height: 44px;
    justify-content: center;
    padding: 0;
    width: 44px;
  }

  && button:hover {
    background-color: rgb(0 0 0 / 70%);
    border: 1px solid rgb(255 255 255 / 72%);
    outline: none;
  }

  ${(0,k.applyStylesForBreakpoints)(j.css`
      justify-content: center;
      padding-inline: 24px;
      padding-block-end: 16px;
    `,"group2")};

  ${(0,k.applyStylesForBreakpoints)(j.css`
      padding-block-end: 16px;
      && button:hover {
        background-color: rgb(80 80 80 / 70%);
        border: 1px solid rgb(255 255 255 / 72%);
        outline: none;
      }
    `,"group3")};
`,ni=j.default.div.withConfig({displayName:"ListicleLayoutHero.styles__ListicleLayoutHeroAdSlotStyled",componentId:"sc-a542f58a-7"})`
  flex: 0 0 100px;
  height: 50px;
  overflow: hidden;
  width: 100px;
`,no=(e,t,i=e.type)=>{let o=t[e.type];return o?(0,a.jsx)(o,{type:e.type,model:e.model},i):null},nn=({image:e,title:t,bodyIntroBlocks:i=[],contentBlocks:o,isArticleSponsored:l})=>((0,iK.useArticleEagerImage)(e),(0,a.jsx)(o8,{children:(0,a.jsxs)(o5,{children:[no(e,o),(0,a.jsxs)(ne,{children:[t&&(0,a.jsx)(o7,{children:t}),l&&(0,a.jsxs)(nt,{children:[(0,a.jsx)(oV,{children:"In association with"}),(0,a.jsx)(ni,{children:(0,a.jsx)(n.default,{type:"spo_1"})})]}),i.length>0&&(0,a.jsx)(o9,{"data-testid":"hero-body-intro",children:i.map((e,t)=>no(e,o,`body-intro-${t}`))}),(0,a.jsxs)(na,{"data-article-page-buttons":!0,"data-testid":"hero-article-page-buttons",children:[(0,a.jsx)($.default,{withoutPaddingInline:!0,iconPosition:"right",trigger:"click",isInverse:!0,isButtonInverse:!0,title:t||"",isOnLeftEdge:!0,iconOnly:!0}),(0,a.jsx)(oA.default,{isInverse:!0,iconPosition:"right",alignment:"bottom-left",withoutText:!0})]})]})]})}));var nl=e.i(518628);let nr=j.default.div.withConfig({displayName:"PortraitVideoConstraint",componentId:"sc-a369fe74-0"})`
  ${({orientation:e})=>"portrait"===e&&`
      max-width: calc(85vh * 9 / 16);
      margin: 0 auto;
    `}
`,ns=j.default.div.withConfig({displayName:"components.styles__CustomComponentStyled",componentId:"sc-4e7abdf9-0"})`
  display: grid;
  row-gap: 8px;
`,nd=(0,j.default)(ns).withConfig({displayName:"components.styles__ImageWithCaptionStyled",componentId:"sc-4e7abdf9-1"})`
  position: relative;
`,np=j.default.div.withConfig({displayName:"components.styles__ImageCaptionOverlayStyled",componentId:"sc-4e7abdf9-2"})`
  background-color: rgb(0 0 0 / 70%);
  bottom: 0;
  box-sizing: border-box;
  inset-inline-end: 0;
  inset-inline-start: auto;
  line-height: normal;
  max-width: 100%;
  padding: 8px 12px;
  position: absolute;
  text-align: right;
  width: fit-content;
  z-index: 2;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      inset-inline-start: 0;
      width: 100%;
    `,"group4")};

  && figcaption {
    color: #ffffff;
    padding: 0;
  }

  && figcaption * {
    color: #ffffff !important;
  }
`,nc=j.default.div.withConfig({displayName:"components.styles__ButtonsStyled",componentId:"sc-4e7abdf9-3"})`
  display: flex;
  gap: 12px;
  padding: 4px 0;
`,nu=({model:e,type:t,captionPosition:i="below"})=>{let o=e.blocks.find(e=>"caption"===e.type),n="overlay"===i;return(0,a.jsxs)(nd,{as:"figure","data-travelling-actions-obscures":"true",children:[(0,a.jsx)(t7.default,{model:e,type:t,isInverse:!1,showCredit:!n,captionOverlay:o&&n?(0,a.jsx)(np,{"data-testid":"image-caption-overlay",children:(0,a.jsx)(aW.default,{model:o.model,type:o.type})}):void 0}),o&&!n&&(0,a.jsx)(aW.default,{model:o.model,type:o.type})]})};(0,a3.forwardLayout)(()=>{let{pageTitle:e}=(0,tt.usePageData)();return(0,a.jsx)(a7.default,{dataComponent:"ctas-block",marginTop:32,marginBottom:32,group2:{marginTop:24,marginBottom:24},children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:12,group5:{colStart:4,colSpan:13},group4:{colStart:1,colSpan:14},group3:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:(0,a.jsxs)(nc,{children:[(0,a.jsx)($.default,{withoutPaddingInline:!0,iconPosition:"right",trigger:"click",isInverse:!0,isButtonInverse:!0,title:e||"",isOnLeftEdge:!0}),(0,a.jsx)(oA.default,{isInverse:!0,iconPosition:"right",alignment:"bottom-left"})]})})})})});let ng=j.default.div.withConfig({displayName:"SubsectionsSideMenu.styles__SubsectionsSideMenuContainerStyled",componentId:"sc-e53972cb-0"})`
  position: sticky;
  top: 96px;
  width: 300px;
  z-index: 5;
  margin-top: 16px;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      width: 174px;
    `,"group1","group2")};
`,nm=j.default.div.withConfig({displayName:"SubsectionsSideMenu.styles__SubsectionsSideMenuAdStyled",componentId:"sc-e53972cb-1"})`
  height: 80px;
  width: 100%;
`,nf=j.default.div.withConfig({displayName:"SubsectionsSideMenu.styles__SubsectionsSideMenuAdSlotStyled",componentId:"sc-e53972cb-2"})`
  height: 50px;
  overflow: hidden;
  width: 100px;
`,ny=j.default.nav.withConfig({displayName:"SubsectionsSideMenu.styles__SubsectionsSideMenuStyled",componentId:"sc-e53972cb-3"})`
  align-self: start;
  background-color: #000;
  color: #fff;
  max-height: calc(100svh - 112px);
  padding: 16px;
  position: relative;
  pointer-events: ${({$isCollapsed:e})=>e?"none":"auto"};
  transform: ${({$isCollapsed:e})=>e?"translateX(-100%)":"translateX(0)"};
  transition: transform 300ms ease;
  width: 100%;
  z-index: 1;
`,nh=j.default.div.withConfig({displayName:"SubsectionsSideMenu.styles__SubsectionsSideMenuScrollContentStyled",componentId:"sc-e53972cb-4"})`
  max-height: calc(100svh - 144px);
  overflow-x: hidden;
  overflow-y: auto;
  overscroll-behavior: contain;
`,nx=j.default.div.withConfig({displayName:"SubsectionsSideMenu.styles__SubsectionsSideMenuTopContentStyled",componentId:"sc-e53972cb-5"})`
  background-color: #000;
  position: sticky;
  top: 0;
  z-index: 1;
`,nb=j.default.button.withConfig({displayName:"SubsectionsSideMenu.styles__SubsectionsSideMenuCollapseButtonStyled",componentId:"sc-e53972cb-6"})`
  align-items: center;
  background: #ffffff;
  border: 0;
  border-radius: 50%;
  color: #000000 !important;
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
  opacity: ${({$isVisible:e})=>+!!e};
  padding: 0;
  pointer-events: ${({$isVisible:e})=>e?"auto":"none"};
  position: absolute;
  right: -16px;
  top: 16px;
  width: 32px;
  transition: opacity 300ms ease;

  svg {
    color: #000000 !important;
    height: 16px;
    width: 16px;
  }
`,nS=j.default.button.withConfig({displayName:"SubsectionsSideMenu.styles__SubsectionsSideMenuReopenButtonStyled",componentId:"sc-e53972cb-7"})`
  background: #ffffff;
  border: 0;
  border-radius: 999px;
  color: #000000 !important;
  cursor: pointer;
  font-family: ${({theme:e})=>e.fontFamilies.bbcReithSans};
  font-size: 14px;
  font-weight: 400;
  left: 16px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 20%);
  opacity: ${({$isVisible:e})=>+!!e};
  padding: 8px 16px;
  pointer-events: ${({$isVisible:e})=>e?"auto":"none"};
  position: absolute;
  top: 0;
  transform: ${({$isVisible:e})=>e?"translateX(0)":"translateX(-100%)"};
  transition:
    opacity 300ms ease,
    transform 300ms ease;
  white-space: nowrap;
  z-index: 2;
`,nv=j.default.h2.withConfig({displayName:"SubsectionsSideMenu.styles__SubsectionsSideMenuHeadingStyled",componentId:"sc-e53972cb-8"})`
  ${({theme:e})=>j.css`
    color: #fff;
    font-family: ${e.fontFamilies.bbcReithSerif};
    font-size: 22px;
    line-height: 25px;
    margin: 0 0 12px;
  `}
`,nw=j.default.ul.withConfig({displayName:"SubsectionsSideMenu.styles__SubsectionsSideMenuListStyled",componentId:"sc-e53972cb-9"})`
  list-style: none;
  margin: 0;
  padding: 0;

  li + li {
    margin-block-start: 16px;
  }
`,n$=j.default.a.withConfig({displayName:"SubsectionsSideMenu.styles__SubsectionsSideMenuLinkStyled",componentId:"sc-e53972cb-10"})`
  ${({theme:e,$isActive:t})=>j.css`
    color: #afb1b4 !important;
    display: block;
    font-family: ${e.fontFamilies.bbcReithSerif};
    padding: 6px 0;
    text-decoration: ${t?"underline":"none"};
    text-underline-offset: 4px;

    &:hover,
    &:focus-visible {
      text-decoration: underline;
    }
  `}
`,nj=({isMenuOpen:e,isArticleSponsored:i,onMenuOpenChange:o,sections:l,title:r})=>{let[s,d]=(0,t.useState)();return(0,t.useEffect)(()=>{let e=()=>{let e;l.forEach(t=>{let a=document.getElementById(t.id);a&&a.getBoundingClientRect().top<=i_.HEADER_DEFAULT_HEIGHT&&(e=t.id)}),d(t=>t===e?t:e)};return e(),window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",e)}},[l]),(0,a.jsxs)(ng,{children:[(0,a.jsxs)(ny,{$isCollapsed:!e,"aria-hidden":!e,"aria-label":"On this page",children:[(0,a.jsx)(nb,{type:"button","aria-label":"Hide the full list","aria-expanded":e,$isVisible:e,onClick:()=>o(!1),children:(0,a.jsx)(w.default,{name:"arrows:chevron-left","aria-hidden":"true"})}),(0,a.jsxs)(nh,{children:[(0,a.jsxs)(nx,{children:[(0,a.jsx)(nv,{children:r}),i&&(0,a.jsxs)(nm,{children:[(0,a.jsx)(oV,{children:"In association with"}),(0,a.jsx)(nf,{children:(0,a.jsx)(n.default,{type:"spo_2"})})]})]}),(0,a.jsx)(nw,{children:l.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)(n$,{href:`#${e.id}`,$isActive:s===e.id,"aria-current":s===e.id?"location":void 0,onClick:t=>{var a;return a=e.id,void(t.preventDefault(),t.stopPropagation(),document.getElementById(a)?.scrollIntoView({behavior:"smooth",block:"start"}))},children:e.label})},e.id))})]})]}),(0,a.jsx)(nS,{type:"button",$isVisible:!e,"aria-label":"View the full list",onClick:()=>o(!0),children:"View the full list >"})]})},nk={colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12}},nC=e=>(0,a.jsx)(nu,{...e,captionPosition:"overlay"});function n_(e){let t=e.model||{};return t.text?t.text:t.blocks?.map(n_).filter(Boolean).join(" ")||""}function nI(e){return"standalone"===e.type&&"text"===e.block.type&&!0===(e.block.model||{}).bodyIntro}let nT=(e,t,i=e.type)=>{let o=t[e.type];return o?(0,a.jsx)(o,{type:e.type,model:e.model},i):null},nB=({block:e,contentBlocks:t,isIntroBlock:i,isFirstSection:o,isFirstFixedImage:n})=>"standalone"===e.type?(0,a.jsx)(a7.default,{dataComponent:i?"listicle-intro-block":void 0,marginBottom:16,children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{...nk,children:nT(e.block,t)})})}):(0,a.jsx)(o2,{id:e.id,children:(0,a.jsx)(o4,{children:(0,a.jsxs)(a9.default,{columns:24,extraStyles:oq,isContained:!1,group2:{columns:12},children:[e.left.length>0&&(0,a.jsx)(ie.default,{colStart:1,colSpan:24,extraStyles:oZ,rowStart:1,group3:{colStart:1,colSpan:24,rowStart:1},group2:{colStart:1,colSpan:12,rowStart:1},children:(0,a.jsx)(o6,{$isFirstSection:o??!1,$isFirstFixedImage:n??!1,children:e.left.map((e,a)=>nT(e,t,`${e.type}-${a}`))})},"left"),(0,a.jsx)(ie.default,{colStart:e.left.length?17:13,colSpan:e.left.length?8:12,extraStyles:e.left.length?oJ:void 0,rowStart:1,group3:{colStart:1,colSpan:24,rowStart:e.left.length?2:1},group2:{colStart:1,colSpan:12,rowStart:e.left.length?2:1},children:(0,a.jsx)(o3,{$hasImage:e.left.length>0,children:e.right.map((e,a)=>nT(e,t,`${e.type}-${a}`))})},"right")]})})}),nN=({blocks:e,layout:i,isArticleSponsored:o=!1,adPacing:n})=>{let l=(0,oE.default)(),r=(0,t.useMemo)(()=>({...l,byline:oG,image:nC}),[l]),[s,d]=(0,t.useState)(!1),p=e.findIndex(e=>"headline"===e.type),c=e.findIndex(e=>"image"===e.type),u=c>=0?e[c]:void 0,g=p>=0&&n_(e[p])||void 0,m=(0,t.useMemo)(()=>{var t;let a,i,o,n,l,r,s,d=u&&p>=0?new Set([c,p]):u?new Set([c]):new Set;return t=e.filter((e,t)=>!d.has(t)),i=[],o=new Map,n=[],l=[],r=0,s=()=>{var e,t;let l,s;if(!a)return;let d=a[0],p=d.model||{},c=n_(d)||`Section ${r+1}`,u=(e=p.jumpLinkLabel||c,t=r,l=e.toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")||`section-${t+1}`,s=o.get(l)||0,o.set(l,s+1),s?`${l}-${s+1}`:l);i.push({type:"section",id:u,label:c,left:n,right:a.filter(e=>"image"!==e.type)}),r+=1,a=void 0,n=[]},t.forEach(e=>{"subheadline"===e.type?(s(),a=[e],n=l,l=[]):"image"===e.type?(s(),l.push(e)):a?a.push(e):i.push({type:"standalone",block:e})}),a?n.push(...l):l.forEach(e=>i.push({type:"standalone",block:e})),s(),i},[e,p,c,u]),f=m.findIndex(e=>"section"===e.type),y=m.filter(e=>"section"===e.type),h=y.length>0&&f>0?m.slice(0,f):[],x=h.filter(nI).map(({block:e})=>e),b=h.filter(e=>!nI(e)),S=Math.floor(y.length/3),v=g||"On this page";return(0,t.useEffect)(()=>{n?.onMidSlotCount(S)},[n,S]),(0,a.jsxs)(oU,{children:[u&&(0,a.jsx)(nn,{image:u,title:g,bodyIntroBlocks:x,contentBlocks:r,isArticleSponsored:o}),s&&(0,a.jsx)(oW,{"aria-hidden":"true"}),b.length>0&&(0,a.jsx)(oX,{children:(0,a.jsx)(a9.default,{columns:24,extraStyles:oY,isContained:!1,children:(0,a.jsx)(ie.default,{colStart:1,colSpan:24,rowStart:1,children:b.map((e,t)=>(0,a.jsx)(nB,{block:e,contentBlocks:r,isIntroBlock:!0},`intro-${t}`))})})}),(0,a.jsx)(a9.default,{columns:24,extraStyles:oY,isContained:!1,children:y.length?[(0,a.jsx)(ie.default,{colStart:1,colSpan:5,rowStart:1,group3:{colStart:1,colSpan:8,rowStart:1},group2:{colStart:1,colSpan:12,rowStart:1},children:(0,a.jsx)(nj,{isMenuOpen:s,onMenuOpenChange:d,sections:y,title:v,isArticleSponsored:o})},"menu"),(0,a.jsx)(ie.default,{colStart:1,colSpan:24,rowStart:1,children:y.map((e,o)=>(0,a.jsxs)(t.Fragment,{children:[(0,a.jsx)(nB,{block:e,contentBlocks:r,isFirstSection:0===o,isFirstFixedImage:1===o}),(o+1)%3==0&&(0,a.jsx)(oK,{children:(0,a.jsx)(iw.default,{type:`mid_${(o+1)/3}`,layout:i})},`ad-${(o+1)/3}`)]},e.id))},"content")]:(0,a.jsx)(ie.default,{colStart:1,colSpan:24,rowStart:1,children:m.map((e,t)=>(0,a.jsx)(nB,{block:e,contentBlocks:r},`block-${t}`))},"content")})]})},nA=()=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:32,children:(0,a.jsx)(a9.default,{columns:12,children:(0,a.jsx)(ie.default,{colStart:1,colSpan:12,children:(0,a.jsx)(oe,{})})})}),nL=()=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:32,children:(0,a.jsx)(a9.default,{shouldSkip:!0,group2:{columns:12,shouldSkip:!1},children:(0,a.jsx)(ie.default,{shouldHide:!0,group2:{colStart:1,colSpan:12,shouldHide:!1},children:(0,a.jsx)(oe,{})})})}),nF=(0,a3.forwardLayout)((e,t)=>{switch(t){case"single-column":return(0,a.jsx)(nA,{});case"double-column":return(0,a.jsx)(nL,{})}});var i5=i5;let nP=({sectionProps:e,index:t,caller:i})=>{let{data:o,isLoading:n}=(0,i5.default)(i),l=o.content.length?o:e,r=o?.content.length?"mparticle recommendation":"";return n?null:(0,a.jsx)(is,{sectionProps:l,index:t,analyticsGroupNameOverride:r})};var nE=e.i(60119),nM=e.i(222009);let nR=j.default.div.withConfig({displayName:"ReadingProgressBar.styles__ProgressBarContainerStyled",componentId:"sc-af33c9fd-0"})`
  position: fixed;
  top: ${({$top:e})=>e}px;
  left: 0;
  right: 0;
  height: 4px;
  ${(0,nM.applyZIndex)("level5")};
  pointer-events: none;
`,nD=j.default.div.withConfig({displayName:"ReadingProgressBar.styles__ProgressBarFillStyled",componentId:"sc-af33c9fd-1"})`
  ${({theme:e,$progress:t})=>j.css`
    height: 100%;
    width: ${t}%;
    background-color: ${e.playExperience.progressBar.progressIndicator.value};
    transition: width 0.15s ease-out;
    will-change: width;
  `};
`,nO=({articleRef:e,defaultTop:i=0,defaultProgress:o=0})=>{let{progress:n,headerBottom:l}=((e,a=0,i=0)=>{let[o,n]=(0,t.useState)({progress:i,headerBottom:a}),l=(0,t.useRef)(i),r=(0,t.useRef)(a);return(0,t.useEffect)(()=>{let t=document.querySelector("header"),a=()=>{let a=e.current;if(!a)return;let i=a.offsetTop,o=a.offsetHeight,s=Math.min(100,Math.max(0,(window.scrollY+window.innerHeight-i)/o*100)),d=t?t.getBoundingClientRect().bottom:0,p=Math.abs(s-l.current)>.5,c=Math.abs(d-r.current)>.5;(p||c)&&(l.current=s,r.current=d,n({progress:s,headerBottom:d}))},i=(0,eH.default)(a,50,{leading:!0,trailing:!0});return window.addEventListener("scroll",i,{passive:!0}),a(),()=>{window.removeEventListener("scroll",i),i.cancel()}},[e]),o})(e,i,o);return(0,a.jsx)(nR,{$top:l,role:"progressbar","aria-valuenow":Math.round(n),"aria-valuemin":0,"aria-valuemax":100,children:(0,a.jsx)(nD,{$progress:n})})},nG=({children:e,dataComponent:t})=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:32,group2:{marginTop:24,marginBottom:24},dataComponent:t,children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),nH=({children:e,dataComponent:t})=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:32,group2:{marginTop:24,marginBottom:24},dataComponent:t,children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:12,group5:{colStart:4,colSpan:13},group4:{colStart:1,colSpan:14},group3:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),nz=(0,a3.forwardLayout)((e,t)=>{let i=(0,to.useDarkMode)();return(0,a.jsx)("single-column"===t?nG:nH,{dataComponent:"tag-list-block",children:(0,a.jsx)(aQ.default,{...e,isDarkTheme:i})})});var nU=e.i(714047),nW=e.i(53083),nV=e.i(950489),nY=e.i(784421),nq=e.i(508745),nQ=e.i(315529);let nX={"vdj-embed":e.i(767768).default,aresTelescope:nq.default,callout:ao,embed:S.Embed,fragment:nQ.default,group:ap,headline:au.default,idt2:nU.default,image:nu,include:S.Include,links:ax,listItem:nV.default,orderedList:av.default,paragraph:og.default,quote:aC,renditions:nY.default,social:az,subByline:t4,subheadline:au.default,text:aU.default,unorderedList:av.default,urlLink:nW.default,video:({model:e,type:t})=>{let i=e.blocks.find(e=>"caption"===e.type),o=(0,u.useFeatureFlag)("vertical-video-in-articles")?(0,nl.getHoldingImageOrientation)(e.blocks):"landscape";return(0,a.jsx)(ns,{"data-travelling-actions-obscures":"true",children:(0,a.jsxs)(nr,{orientation:o,children:[(0,a.jsx)(aX.default,{model:e,type:t,playerOrientation:o}),i&&(0,a.jsx)(aW.default,{model:i.model,type:i.type})]})})}};var nK=e.i(817668);let nZ=(e,t)=>{let a=e.find(e=>"alaska"===e.type);a&&(t>0?a.adBlock={type:"advertisement",model:{adType:nK.AdType.horizontal},incrementedType:`mid_${t+1}`}:delete a.adBlock)},nJ="travelling_save_share_buttons";function n0({articleRootRef:e,articleEndRef:a}){let{activateExperiment:i}=(0,nE.useServersideOptimizelyContext)(),{experiments:o}=(0,tt.usePageData)(),n=o&&o[nJ],[l]=(0,ez.useBreakpoints)("articles"),r=["group1","group2"].includes(l),s=(0,t.useRef)(!1);(0,t.useEffect)(()=>{s.current||"not-set"!==l&&(s.current=!0,n&&r&&(console.log(`[travelling-buttons] activating "${nJ}" (variant="${n}", breakpoint="${l}")`),i(nJ)))},[n,r,l]);let d="treatment"===n&&r,p=function({enabled:e,rootRef:a,sentinelRef:i}){let[o,n]=(0,t.useState)(!0),[l,r]=(0,t.useState)(!0),s=(0,t.useRef)(new Set);return(0,t.useEffect)(()=>{if(!e||"u"<typeof IntersectionObserver)return;let t=i.current;if(!t)return;let a=new IntersectionObserver(([e])=>{let t=e.rootBounds?.height??window.innerHeight;n(e.boundingClientRect.top>t)},{rootMargin:"0px 0px -96px 0px",threshold:0});return a.observe(t),()=>a.disconnect()},[e,i]),(0,t.useEffect)(()=>{if(!e||"u"<typeof IntersectionObserver)return;let t=a.current;if(!t)return;let i=s.current,o=new IntersectionObserver(e=>{let t=!1;e.forEach(e=>{let a=i.has(e.target);e.isIntersecting&&!a?(i.add(e.target),t=!0):!e.isIntersecting&&a&&(i.delete(e.target),t=!0)}),t&&r(i.size>0)},{threshold:0}),n=()=>{t.querySelectorAll("[data-article-page-buttons]").forEach(e=>o.observe(e))};n();let l="u">typeof MutationObserver?new MutationObserver(n):null;return l?.observe(t,{childList:!0,subtree:!0}),()=>{o.disconnect(),l?.disconnect(),i.clear()}},[e,a]),e&&o&&!l}({enabled:d,rootRef:e,sentinelRef:a});return{show:d,isVisible:p}}function n1(){let[e]=(0,ez.useBreakpoints)("articles");return["group1","group2","group3"].includes(e)||"not-set"===e?"single-column":"double-column"}let n2="reading_progress_bar",n4=["features_page_aa_validation",n2],n6=j.default.div.withConfig({displayName:"SportPage.styles__SportHeadlineStyled",componentId:"sc-3f761263-0"})`
  ${(0,k.applyStylesForBreakpoints)(j.css`
      grid-column: span 3;
    `,"group5","group6")}

  ${(0,k.applyStylesForBreakpoints)(j.css`
      margin-inline: 16px;
    `,"group1","group2")}
`,n3=j.default.div.withConfig({displayName:"SportPage.styles__MainContentStyled",componentId:"sc-3f761263-1"})`
  > * {
    max-width: 100%;
  }
`,n8=({topics:e})=>e.length?(0,a.jsx)(ts.ContainerStyled,{"data-component":"tags",$type:"withoutMargin",$marginTop:["m","m","l","l","l","l"],$marginBottom:["m","m","l","l","l","l"],children:(0,a.jsx)(aQ.default,{"data-testid":"tagList",topics:e})}):null,n5={headline:[e=>(0,a.jsx)(n6,{children:(0,a.jsx)(au.default,{...e})}),"headline-block",{$type:"wide",$marginTop:["m","m","l","l","l","l"],$marginBottom:["s","s","m","m","m","m"]},{$columns:[1,1,1,1,4,4]}],byline:[t4,"byline-block",t3,t8],callout:[ao,"callout-block",an],image:[aZ,"image-block"],include:[S.Include,"include-block",a_],orderedList:[av.default,"ordered-list-block",aS],social:[az,"social-block",a_],subheadline:[au.default,"subheadline-block",{$type:"withoutMargin",$marginTop:["m","m","l","l","l","l"],$marginBottom:["s","s","m","m","m","m"]}],subByline:[t4,"subByline-block",t3,t8],text:[aU.default,"text-block",{$type:"withoutMargin",$marginBottom:["s","s","s","s","s","s"]}],quote:[aC,"quote-block",aw],unorderedList:[av.default,"unordered-list-block",aS],video:[aJ,"video-block"]};var n7=e.i(615557),n9=e.i(867639),le=e.i(241271),lt=e.i(343469),la=e.i(240911);let li={type:"hawaii",content:[]},lo="watchedVideos",ln=function(e){let[a,i]=(0,t.useState)([]),{query:o}=(0,d.useAppRouter)(),{slug:n}=o,{content:l,...r}=e.find(({type:e})=>"hawaii"===e)??li,s=[...l.filter(({href:e})=>!a.includes(e)),...l.filter(({href:e})=>a.includes(e))],p=!!a.length;return(0,t.useEffect)(()=>{let e=(0,la.getStringFromSlug)(n,!0),t=[...JSON.parse(sessionStorage.getItem(lo)??"[]").filter(t=>e!==t),e].slice(-5);i(()=>(sessionStorage.setItem(lo,JSON.stringify(t)),t))},[n]),{isLoading:!p,data:{...r,content:s}}};var ll=e.i(124436),ll=ll,lr=e.i(483481),ls=e.i(968279);let ld=(0,tM.withCMSFallback)(({topics:e,contents:t,collections:i=[]})=>{let o=im(),n=(0,te.useCurrentSlug)(),l=(0,la.getStringFromSlug)(n),{isLoading:r,data:s}=ln(i),{content:d,title:p=""}=s,[{href:c=null}={}]=d,u=i.find(({type:e})=>"texas"===e),g=(0,e$.default)(u?.content,[]),m=(0,e$.default)(u?.title,""),f=g.filter(e=>!e.href.includes(l)),y=t.find(e=>e?.type==="video"),x=y&&(0,am.getNestedValue)(y,"mediaMetadata","versions"),b=x?.[0]?.versionId;return(0,lt.useUpNextVideo)(!r,c),(0,a.jsx)(ls.VideoDetailsPageBGLayer,{children:(0,a.jsxs)(ls.VideoDetailsPageContainer,{"data-testid":"video-page-container",children:[(0,a.jsxs)(ls.VideoSectionGridStyled,{$columns:[1,1,1,1,1,1],$rows:[1,1,1,1,"auto","auto"],$gridGap:["16px","16px","16px","16px","12px","12px"],$height:[1,1,1,1,1,1],$width:[1,1,1,1,1,1],$left:[1,1,1,1,1,1],$top:[1,1,1,1,1,1],children:[(0,a.jsx)(ll.default,{value:c,children:(0,a.jsx)(ls.CardStyled,{"data-testid":"video-page-video-section",children:(0,id.renderComponents)(t,o)})}),(0,a.jsx)(lr.TagsAndShare,{titleToShare:p,topics:e,versionId:b}),!r&&!!d.length&&(0,a.jsx)(le.default,{title:(0,n9.default)(p),content:d,withMainCard:!1})]}),!!f.length&&(0,a.jsx)(h.default,{sectionNumber:1,type:"texas",content:f,title:m,hasHorizontalLine:!0,isInverse:!0})]})})},({topics:e,slug:t=[],contents:i,collections:o=[]})=>{let n=im(),l=(0,la.getStringFromSlug)(t),{content:r,title:s=""}=o.find(({type:e})=>"hawaii"===e)||{type:"hawaii",content:[]},d=o.find(({type:e})=>"texas"===e),p=(0,e$.default)(d?.content,[]),c=(0,e$.default)(d?.title,""),u=p.filter(e=>!e.href.includes(l));return(0,a.jsx)(ls.VideoDetailsPageBGLayer,{children:(0,a.jsxs)(ls.VideoDetailsPageContainer,{"data-testid":"video-page-container",children:[(0,a.jsxs)(ls.VideoSectionGridStyled,{$columns:[1,1,1,1,1,1],$rows:[1,1,1,1,"auto","auto"],$gridGap:["16px","16px","16px","16px","12px","12px"],$height:[1,1,1,1,1,1],$width:[1,1,1,1,1,1],$left:[1,1,1,1,1,1],$top:[1,1,1,1,1,1],children:[(0,a.jsx)(ls.CardStyled,{"data-testid":"video-page-video-section",children:(0,id.renderComponents)(i,n)}),(0,a.jsx)(lr.TagsAndShare,{titleToShare:s,topics:e}),!!r.length&&(0,a.jsx)(le.default,{title:(0,n9.default)(s),content:r,withMainCard:!1})]}),!!u.length&&(0,a.jsx)(h.default,{sectionNumber:1,type:"texas",content:u,title:c,hasHorizontalLine:!0,isInverse:!0})]})})}),lp={[i.ContentSubtype.Episode]:[ld,n7.COMPONENT_DICTIONARY],[i.ContentSubtype.Brand]:[ld,n7.COMPONENT_DICTIONARY],[i.ContentSubtype.Series]:[ld,n7.COMPONENT_DICTIONARY],[i.ContentSubtype.ClipsNews]:[ld,n7.COMPONENT_DICTIONARY],[i.ContentSubtype.ClipsSport]:[ld,n7.COMPONENT_DICTIONARY],[i.ContentSubtype.ClipsNewsNoRights]:[ld,n7.COMPONENT_DICTIONARY],[i.ContentSubtype.ClipsSportNoRights]:[ld,n7.COMPONENT_DICTIONARY],[i.ContentSubtype.Features]:[({topics:e=[],contents:i,onwardJourney:o=[],collection:l=[]})=>{let r=(0,t.useRef)(null),s=(0,t.useRef)(null),d=(0,t.useRef)(null),p=n1(),[c,g]=(0,t.useState)(0),m=(0,t.useCallback)(e=>g(e),[]),f=(0,u.useFeatureFlag)("mparticle-features-alaska"),y=(0,u.useFeatureFlag)("mparticle-features-oklahoma"),{account:{hasPersonalizedContentConsent:h}}=(0,a2.useConsent)(),{activateExperiment:x}=(0,nE.useServersideOptimizelyContext)();iy(r),nZ(o,c);let{experiments:b}=(0,tt.usePageData)();(0,t.useEffect)(()=>{n4.forEach(e=>{b?.[e]&&x(e)})},[x,b]);let S=l.some(({title:e})=>e.toLowerCase().includes("layout-listicle")),v=l.some(({title:e})=>e.toLowerCase().includes("sponsorship")),w=b?.[n2]==="treatment",{show:$,isVisible:j}=n0({articleRootRef:s,articleEndRef:d});return(0,a.jsxs)(oE.ContentBlockProvider,{value:nX,children:[$&&(0,a.jsx)(oP,{isVisible:j}),w&&(0,a.jsx)(nO,{articleRef:s,defaultTop:i_.HEADER_DEFAULT_HEIGHT,defaultProgress:5}),(0,a.jsx)(n.default,{type:"top",deferRequest:!0,showPlaceholder:!0,forwardedAdRef:r}),(0,a.jsxs)("article",{ref:s,children:[S?(0,a.jsx)(nN,{layout:p,blocks:i,isArticleSponsored:v,adPacing:{onMidSlotCount:m}}):(0,a.jsx)(oB,{layout:p,blocks:i,pageType:i$.PAGE_TYPES_CONSTANTS.FEATURES_ARTICLE,isSponsored:v,adPacing:{onMidSlotCount:m}}),!!e.length&&(0,a.jsx)(nz,{topics:e,layout:"double-column"}),(0,a.jsx)("div",{ref:d})]}),y&&h&&(0,a.jsx)(nF,{layout:p}),o.map((e,i)=>{let o="alaska"===e.type&&f&&h;return(0,a.jsxs)(t.Fragment,{children:[o?(0,a.jsx)(nP,{sectionProps:e,index:i,caller:"alaska-onward-journey"}):(0,a.jsx)(is,{sectionProps:e,index:i}),0===i&&(0,a.jsx)(a4,{isNewsArticle:!1})]},i)})]})},{}],[i.ContentSubtype.News]:[({topics:e=[],contents:i,onwardJourney:o=[]})=>{let l=(0,t.useRef)(null),r=n1(),s=(0,u.useFeatureFlag)("mparticle-news-alaska"),d=(0,u.useFeatureFlag)("mparticle-news-ohio"),p=(0,u.useFeatureFlag)("mparticle-news-oklahoma"),{account:{hasPersonalizedContentConsent:c}}=(0,a2.useConsent)(),g=(0,t.useRef)(null),m=(0,t.useRef)(null),[f,y]=(0,t.useState)(0),h=(0,t.useCallback)(e=>y(e),[]);nZ(o,f),iy(l);let{show:x,isVisible:b}=n0({articleRootRef:g,articleEndRef:m});return(0,a.jsxs)(oE.ContentBlockProvider,{value:nX,children:[x&&(0,a.jsx)(oP,{isVisible:b}),(0,a.jsx)(n.default,{type:"top",deferRequest:!0,showPlaceholder:!0,forwardedAdRef:l}),(0,a.jsxs)("article",{ref:g,children:[(0,a.jsx)(oB,{layout:r,blocks:i,pageType:i$.PAGE_TYPES_CONSTANTS.NEWS_ARTICLE,adPacing:{onMidSlotCount:h}}),!!e.length&&(0,a.jsx)(nz,{topics:e,layout:"double-column"}),(0,a.jsx)("div",{ref:m})]}),p&&c&&(0,a.jsx)(nF,{layout:r}),o.map((e,i)=>{let o="ohio"===e.type&&d&&c,n="alaska"===e.type&&s&&c,l="ohio"===e.type?"ohio-onward-journey":"alaska-onward-journey";return(0,a.jsxs)(t.Fragment,{children:[o||n?(0,a.jsx)(nP,{sectionProps:e,index:i,caller:l}):(0,a.jsx)(is,{sectionProps:e,index:i}),0===i&&(0,a.jsx)(a4,{isNewsArticle:!0})]},i)})]})},{}],[i.ContentSubtype.OPPM]:[()=>null,{}],[i.ContentSubtype.Radio]:[oN,a0],[i.ContentSubtype.Reels]:[ld,n7.COMPONENT_DICTIONARY],[i.ContentSubtype.Sport]:[({contents:e,topics:t=[],headerContents:i=[],onwardJourney:o=[]})=>{let l=(0,tn.useIsAdsServiceEnabled)(),r=im();return(0,a.jsxs)(a.Fragment,{children:[l&&(0,a.jsx)(n.default,{type:"leaderboard"}),(0,id.renderComponents)(i,r),(0,a.jsx)(ts.ContainerStyled,{$type:"wide",children:(0,a.jsx)(v.GridStyled,{$columns:[1,1,1,1,"minmax(0, 1fr) 315px","minmax(0, 1fr) 300px"],$gridGap:["40px","40px","64px","64px","98px","122px"],$margin:["16px","16px",void 0,void 0,void 0,void 0],children:(0,a.jsxs)(n3,{children:[(0,id.renderComponents)(e,r),(0,a.jsx)(n8,{topics:t})]})})}),o.map((e,t)=>(0,a.jsx)(h.default,{sectionNumber:t,...e,title:"ohio"===e.type?"Related":"More",titleAsHeadingTag:!1},t))]})},n5],[i.ContentSubtype.Trailer]:[()=>null,{}],[i.ContentSubtype.Podcasts]:[oN,a0],[i.ContentSubtype.VerticalReels]:[ld,n7.COMPONENT_DICTIONARY],[i.ContentSubtype.VerticalClipsNews]:[ld,n7.COMPONENT_DICTIONARY],[i.ContentSubtype.VerticalClipsSport]:[ld,n7.COMPONENT_DICTIONARY],[i.ContentSubtype.VerticalClipsNewsNoRights]:[ld,n7.COMPONENT_DICTIONARY],[i.ContentSubtype.VerticalClipsSportNoRights]:[ld,n7.COMPONENT_DICTIONARY],[i.ContentSubtype.Video]:[ld,n7.COMPONENT_DICTIONARY]},lc=({subtype:e,data:t})=>{let[i,o]=lp[e];return(0,a.jsx)(tN,{value:o,children:(0,a.jsx)(i,{...t})})},lu=()=>{let e=(0,te.useCurrentSlug)(),{subtype:t}=(0,tt.usePageData)(),{data:i}=(0,o.default)(e);return(0,a.jsx)(lc,{data:i,subtype:t})},lg=j.default.span.withConfig({displayName:"AccessRestrictionBanner.styles__BannerTextAnchorInnerStyled",componentId:"sc-e284e4b8-0"})`
  display: inline;
  vertical-align: middle;
`,lm=j.default.div.withConfig({displayName:"AccessRestrictionBanner.styles__BannerWrapper",componentId:"sc-e284e4b8-1"})`
  ${({theme:e})=>j.css`
    position: relative;
    ${(0,nM.applyZIndex)("level2")};
    background-color: ${e.app.error.banner.bg.default.value};
    border-bottom: 1px solid ${e.divider.highEmphasis};
    padding: 8px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center
      ${(0,k.applyStylesForBreakpoints)(j.css`
          text-align: left;
        `,"group2")};
  `}
`,lf=j.default.div.withConfig({displayName:"AccessRestrictionBanner.styles__BannerContent",componentId:"sc-e284e4b8-2"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      flex-wrap: nowrap;
    `,"group2")}
`,ly=j.default.span.withConfig({displayName:"AccessRestrictionBanner.styles__BannerText",componentId:"sc-e284e4b8-3"})`
  ${({theme:e})=>j.css`
    ${(0,C.applyTypography)(e.errorBannerText.bpLarge)};
    color: ${e.text.onInverseBG.default.value};
  `}
`,lh=j.default.a.withConfig({displayName:"AccessRestrictionBanner.styles__BannerTextAnchorStyled",componentId:"sc-e284e4b8-4"})`
  ${({theme:e})=>j.css`
    color: ${e.text.onInverseBG.default.value};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `}
`,lx=j.default.span.withConfig({displayName:"AccessRestrictionBanner.styles__BannerIconWrapper",componentId:"sc-e284e4b8-5"})`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  padding: 6px;
`,lb=({text:e="Unfortunately, this content is not available in your region. To learn more, please visit our FAQ page ",linkText:t="here",linkUrl:i="https://help.bbc.com/hc/en-us",isSubscriptionAllowed:o})=>o?null:(0,a.jsx)(lm,{"data-testid":"access-restriction-banner",children:(0,a.jsxs)(lf,{children:[(0,a.jsx)(lx,{children:(0,a.jsx)(w.default,{height:20,width:20,color:"#ffb32b",name:"labels:warning"})}),(0,a.jsxs)(ly,{children:[e,(0,a.jsx)(b.default,{styledAnchor:lh,styledAnchorInner:lg,href:i,children:t}),"."]})]})});var lS=e.i(276045),lv=e.i(344065);function lw(e){let t=new Date;try{let{model:a,type:i}=e,{blocks:o}=a;return o.map((e,a)=>{var o,n,l;let{title:r,episode:s,startTime:d,endTime:p,brand:c}=e,{title:u,path:g}=c,{indexImage:m,synopses:f,programmesUrl:y,hasOnDemand:h,path:x}=s,b="minnesota"===i?f?.long||f?.medium||f?.short:f?.medium||f?.short||f?.long;return{brandHref:g??"",brandName:u??"",description:b,href:h?x??"":"",image:m,isLiveNow:(o=t,n=d,l=p,new Date(n)<=o&&o<new Date(l)),isOnDemand:!!h,itemPosition:a,metadata:{contentType:"episode",subtype:"episode"},programmeEnd:p,programmeStart:d,programmesUrl:y,startDate:d,title:r}})}catch(e){return ej.logger.error(`Error getting radio station collection: ${e}`),[]}}var l$=e.i(788664);function lj(e){return e.reduce((e,t)=>{var a;let i,o,n=(o=isNaN((i=new Date(a=t.programmeStart||"")).getTime())?parseInt(a.slice(0,2),10):i.getUTCHours())>=0&&o<9?"Early":o>=9&&o<12?"Morning":o>=12&&o<19?"Afternoon":o>=19&&o<24?"Evening":null;return n?{...e,[n]:[...e[n]||[],t]}:e},{})}function lk(){let e=new Date,t=[];for(let a=-7;a<=7;a++){let i=new Date(e);i.setDate(e.getDate()+a);let o=i.toISOString().slice(0,10);switch(a){case -1:case 0:case 1:{let e=new Intl.RelativeTimeFormat("en",{numeric:"auto"}),i=(0,n9.default)(e.format(a,"day"));t.push({text:i,date:o});break}default:{let i=new Date(e);i.setDate(e.getDate()+a),t.push({text:function(e){let t=e.getDate(),a=e.toLocaleDateString(void 0,{weekday:"short"});return`${a} ${t}${function(e){if(e>=11&&e<=13)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(t)}`}(i),date:o})}}}return t}async function lC(e){let[t,a]=e.split("/"),{data:i}=await (0,ic.fetchClient)("schedule",{cache:"no-cache",params:{type:"audio",service_id:a,date:t},method:"GET",credentials:"include",isLegacyApiEnabled:!0});return i}let l_=(0,t.createContext)({}),{Provider:lI}=l_,lT=({value:e,children:t})=>(0,a.jsx)(lI,{value:e,children:t});function lB(e){let{isLoading:t=!1,data:a=[]}=(0,l$.default)(e,lC);return{isLoading:t,data:a}}var lN=e.i(215812);let lA=j.default.div.withConfig({displayName:"Alabama.styles__IndexCardWithTitleStyled",componentId:"sc-7cffa360-0"})`
  margin-bottom: 20px;
`,lL=j.default.div.withConfig({displayName:"Alabama.styles__AlabamaStyled",componentId:"sc-7cffa360-1"})`
  display: grid;
  grid-template-columns: auto;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  margin: auto;
  overflow: auto;
  max-width: 563px;
  min-height: 50vh;
  align-content: baseline;

  div:last-of-type {
    ${lA}:last-of-type {
      ${lN.CardStyled} {
        margin-bottom: 0;
        border: none;
      }
    }
  }

  ${(0,k.applyStylesForBreakpoints)(j.css`
      max-width: 522px;
    `,"group4")}

  ${(0,k.applyStylesForBreakpoints)(j.css`
      max-width: none;
    `,"group2")}
`,lF=j.default.div.withConfig({displayName:"Alabama.styles__ButtonWrapperStyled",componentId:"sc-7cffa360-2"})`
  ${({theme:e})=>j.css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6px 16px;
    margin-bottom: 12px;
    box-sizing: border-box;
    height: 32px;

    button {
      padding: 0;
      ${(0,C.applyTypography)(e.textLink.small.regular.bpLarge)};
      box-sizing: border-box;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      border: none;
      outline: none;
      column-gap: 5px;

      svg {
        width: 12px;
        height: auto;
      }

      &:hover,
      &:active,
      &:focus {
        background-color: transparent;
        color: inherit;
        border: none;
        outline: none;
      }
    }

    ${(0,k.applyStylesForBreakpoints)(j.css`
        height: 44px;

        button {
          ${(0,C.applyTypography)(e.textLink.large.regular.bpLarge)};
          svg {
            width: 15px;
            height: auto;
          }
        }
      `,"group2")}
  `}
`,lP=j.default.h3.withConfig({displayName:"Alabama.styles__ClusterTitleStyled",componentId:"sc-7cffa360-3"})`
  ${({theme:e})=>j.css`
    padding: 0 16px 16px 16px;
    ${(0,C.applyTypography)(e.audio.listTitle.bpLarge)};
  `}
`,lE=j.default.div.withConfig({displayName:"Alabama.styles__AlabamaDatePickerStyled",componentId:"sc-7cffa360-4"})`
  display: grid;
  position: relative;
  background-color: white;
  overflow: hidden;
  grid-area: top-actions;
  padding-top: 48px;
  width: 100%;
  margin-bottom: 12px;
  z-index: 4;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      padding-top: 16px;
    `,"group3")};

  ${(0,k.applyStylesForBreakpoints)(j.css`
      padding-top: 64px;
    `,"group2")};
`,lM=j.css`
  background-color: transparent;
  color: inherit;
  font-weight: 700;
  text-decoration: underline;
`,lR=(0,j.default)(ec.default).withConfig({displayName:"Alabama.styles__ButtonStyled",componentId:"sc-7cffa360-5"})`
  ${({theme:e,$isSelected:t})=>j.css`
    border: none;
    outline: none;
    padding: 8px 6px;

    &:hover {
      background-color: #e6e8ea;
      color: inherit;
      border: none;
      outline: none;
    }

    &:active,
    &:focus {
      ${lM};
    }

    ${(0,C.applyTypography)(e.nav.topbar.level2.default)};

    ${t&&j.css`
      ${(0,C.applyTypography)(e.nav.topbar.level2.selected)};
      ${lM};
    `}

    ${(0,k.applyStylesForBreakpoints)(j.css`
        padding: 0 12px;
        height: 54px;

        ${t?j.css`
              ${(0,C.applyTypography)(e.audio.datePicker.selected.bpSmall)};
              ${lM};
            `:j.css`
              ${(0,C.applyTypography)(e.audio.datePicker.default.bpSmall)};
            `}
      `,"group2")};
  `}
`,lD=j.default.button.withConfig({displayName:"Alabama.styles__ChevronButtonStyled",componentId:"sc-7cffa360-6"})`
  ${({theme:e,disabled:t})=>j.css`
    padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg {
      width: 32px;
      height: 15px;

      /* fill: #000000; */
    }

    &:hover {
      background-color: ${e.interactive4.onInverseBG.hovered.value};

      ${!t&&j.css`
        svg {
          fill: #ffffff;
        }
      `}
    }

    &:disabled {
      opacity: 0.5;
      cursor: default;
      background-color: transparent;
    }
  `}
`,lO=j.default.div.withConfig({displayName:"Alabama.styles__DatePickerStyled",componentId:"sc-7cffa360-7"})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid #e6e8ea;
  overflow: hidden;
`,lG=j.default.div.withConfig({displayName:"Alabama.styles__BlurStyled",componentId:"sc-7cffa360-8"})`
  width: 68px;
  height: 100%;
  position: absolute;
  z-index: 1;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      width: 32px;
    `,"group2")};
`,lH=(0,j.default)(lG).withConfig({displayName:"Alabama.styles__BlurLeftStyled",componentId:"sc-7cffa360-9"})`
  background: linear-gradient(90deg, #ffffff 23.75%, rgba(255, 255, 255, 0) 100%);
  left: 32px;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.4) 100%);
    `,"group2")};
`,lz=(0,j.default)(lG).withConfig({displayName:"Alabama.styles__BlurRightStyled",componentId:"sc-7cffa360-10"})`
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 76.25%);
  right: 32px;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.4) 0%, #ffffff 100%);
    `,"group2")};
`,lU=j.default.div.withConfig({displayName:"Alabama.styles__InnerContentStyled",componentId:"sc-7cffa360-11"})`
  ${()=>j.css`
    overflow: scroll;
    display: flex;
    flex-direction: row;
    position: relative;

    /* hide scrollbar for firefox */
    scrollbar-width: none;

    /* hide scrollbar for webkit browsers */
    &::-webkit-scrollbar {
      display: none;
    }

    ${(0,k.applyStylesForBreakpoints)(j.css`
        width: 100%;
      `,"group2")};
  `}
`,lW=(0,t.createContext)(""),{Provider:lV}=lW,lY=({children:e,value:t})=>(0,a.jsx)(lV,{value:t,children:e});var lq=e.i(866417),lQ=e.i(56923);let lX=(0,t.memo)(({dates:e,selectedDate:i,onDateChange:o})=>{let n=(0,t.useRef)(null),l=(0,t.useRef)(null),{scrollStatus:r,onArrowClick:s}=(0,lq.useScrollSnap)(n),{isLeftScrollAvailable:d,isRightScrollAvailable:p}=r,c=e=>()=>s(e);return(0,t.useEffect)(()=>{let{current:e}=l;e&&e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[l,i]),(0,a.jsxs)(lO,{"data-testid":"date-picker",children:[(0,a.jsx)(lD,{disabled:!d,onClick:c("left"),"aria-label":"Previous Page",children:(0,a.jsx)(w.default,{name:"arrows:chevron-left"})}),d&&(0,a.jsx)(lH,{}),(0,a.jsx)(lU,{ref:n,children:e.map(({date:e,text:t},n)=>(0,a.jsx)(lR,{ref:e===i?l:null,$isSelected:e===i,testId:`dateButton${e===i?"-selected":""}`,type:"unboxed",onClick:()=>{o(e)},text:t},n))}),p&&(0,a.jsx)(lz,{}),(0,a.jsx)(lD,{disabled:!p,onClick:c("right"),"aria-label":"Next Page",children:(0,a.jsx)(w.default,{name:"arrows:chevron-right"})})]})}),lK=(0,t.memo)(({content:e,isFirstTimeGroupVisible:i=!0,withIntersectionObserver:o=!1})=>{let{items:n,observableRef:l}=function(e,a){var i,o;let n=Object.values(e).flat(),[{itemPosition:l=10}={}]=n,[{itemPosition:r=10}={}]=n.reverse(),[s,d]=(0,t.useState)(l+10),p=(0,lQ.useThrottledIntersectionObserver)(([{isIntersecting:e}])=>{e&&d(e=>Math.min(e+10,r))},{wait:250,threshold:.1,trailing:!0}),c=Object.entries(e),u=a?(i=c,o=s,i.reduce((e,[t,a])=>{let i=a.filter(({itemPosition:e=o})=>e<=o);return i.length?[...e,[t,i]]:e},[])):c;return(0,t.useEffect)(()=>{a&&d(l+10)},[l,a]),{items:u,...a?{observableRef:p}:{}}}(e,o),r=(0,t.useContext)(lW);return(0,a.jsxs)(a.Fragment,{children:[n.map(([e,t],o)=>(0,a.jsxs)(lA,{children:[(o>0||i)&&(0,a.jsx)(lP,{"data-testid":`cluster-title-styled-${e}`,children:e}),t.map(({itemPosition:e,isLiveNow:t,isOnDemand:i,href:o,...n},l)=>{var s,d,p,c;return(0,a.jsx)(ag.default,{...n,itemPosition:e,isLiveNow:t,isOnDemand:i,type:"bradford",href:(s=r,d=o,p=t,c=i,p?s:c&&d?d:""),groupName:"audio live"},l)})]},o)),l&&(0,a.jsx)("div",{ref:l})]})}),lZ=(0,t.memo)(({content:e,areEarlierItemsVisible:i,onEarlierItemsClick:o})=>{let n=e.findIndex(({isLiveNow:e})=>e),l=-1!==n,r=l?e.slice(0,n):[],s=l?e.slice(n):e,d=lj(r),p=(0,t.useMemo)(()=>lj(s),[s]),c=Object.keys(d).some(e=>Object.keys(p).includes(e));return(0,a.jsxs)(a.Fragment,{children:[!!r.length&&(i?(0,a.jsx)(lK,{content:d}):(0,a.jsx)(lF,{"data-testid":"button-rapper-styled",children:(0,a.jsx)(ec.default,{testId:"earlier-today-button",iconPosition:"left",onClick:o,text:"Earlier today",type:"unboxed",icon:"arrows:chevron-up"})})),(0,a.jsx)(lK,{withIntersectionObserver:!0,content:p,isFirstTimeGroupVisible:!i||i&&!c})]})}),lJ=(0,tM.withCMSFallback)(({testId:e="alabama",content:i})=>{let o=(0,t.useRef)(null),n=(0,t.useMemo)(()=>lk(),[]),[{date:l}]=n.filter(({date:e})=>new Date().toISOString().slice(0,10)===e),[r,s]=(0,t.useState)(l),[d,p]=(0,t.useState)(!1),[{serviceId:c}={}]=i,{isLoading:u,data:g}=lB(`${r}/${c}`),m=lw({type:"alabama",model:{blocks:g}});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(lE,{children:(0,a.jsx)(lX,{dates:n,selectedDate:r,onDateChange:e=>{s(e),p(!1)}})}),(0,a.jsx)(lL,{"data-testid":`${e}-grid`,ref:o,children:u?(0,a.jsx)(lv.default,{}):(0,a.jsx)(lZ,{content:m,areEarlierItemsVisible:d,onEarlierItemsClick:()=>p(!0)})})]})},({content:e,testId:i="alabama"})=>{let o=(0,t.useRef)(null),n=(0,t.useMemo)(()=>lk(),[]),[{date:l}]=n.filter(({date:e})=>new Date().toISOString().slice(0,10)===e),[r,s]=(0,t.useState)(l),[d,p]=(0,t.useState)(!1),[,...c]=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(lE,{children:(0,a.jsx)(lX,{dates:n,selectedDate:r,onDateChange:e=>{s(e),p(!1)}})}),(0,a.jsx)(lL,{"data-testid":`${i}-grid`,ref:o,children:(0,a.jsx)(lZ,{content:c,areEarlierItemsVisible:d,onEarlierItemsClick:()=>p(!0)})})]})});var l0=e.i(686764),l1=e.i(179286),l2=e.i(44115),l4=e.i(567290);let l6=j.default.div.withConfig({displayName:"Louisiana.styles__LouisianaStyled",componentId:"sc-82f0b08a-0"})`
  display: flex;
  gap: 16px;
  max-width: 932px;
  margin-inline: auto;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      max-width: unset;
      margin-inline: 16px;
    `,"group4")};
`,l3=j.default.div.withConfig({displayName:"Louisiana.styles__ScrollableContainerStyled",componentId:"sc-82f0b08a-1"})`
  position: relative;
  margin-bottom: 8px;
`,l8=j.default.ul.withConfig({displayName:"Louisiana.styles__ScheduleListStyled",componentId:"sc-82f0b08a-2"})`
  display: flex;
  overflow: auto;
  scroll-snap-type: x proximity;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;

  > li {
    scroll-snap-align: start;
  }

  > li[data-testid='schedule-link-item'] {
    display: flex;

    > div[data-testid='anchor-inner-wrapper'] {
      display: flex;

      a {
        display: flex;
      }
    }
  }
`,l5=j.default.h1.withConfig({displayName:"Louisiana.styles__PromoHeadlineStyled",componentId:"sc-82f0b08a-3"})`
  ${({theme:e})=>j.css`
    ${(0,C.applyTypography)(e.promoHeadline.medium.default.bpLarge)};
    margin-bottom: 8px;

    ${(0,k.applyStylesForBreakpoints)(j.css`
        margin-bottom: 0;
      `,"group2")}
  `}
`,l7=j.default.p.withConfig({displayName:"Louisiana.styles__PromoDescriptionStyled",componentId:"sc-82f0b08a-4"})`
  ${({theme:e})=>j.css`
    ${(0,C.applyTypography)(e.promoDescription.regular.bpLarge)};
    color: ${e.text.mediumEmphasis.value};
    margin-bottom: 12px;
  `}
`,l9=j.default.div.withConfig({displayName:"Louisiana.styles__ImageContainerSmallStyled",componentId:"sc-82f0b08a-5"})`
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;

  img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 50%;
    width: 114px;
    height: 114px;
  }

  ${l5} {
    margin-bottom: 0;
  }

  ${(0,k.applyStylesForBreakpoints)(j.css`
      img {
        display: none;
      }
    `,"group6")}

  ${(0,k.applyStylesForBreakpoints)(j.css`
      display: flex;

      img {
        display: block;
      }
    `,"group2")}
`,re=j.default.div.withConfig({displayName:"Louisiana.styles__ImageContainerLargeStyled",componentId:"sc-82f0b08a-6"})`
  img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 50%;
    width: 142px;
    height: 142px;
  }

  ${(0,k.applyStylesForBreakpoints)(j.css`
      display: none;
    `,"group2")}
`,rt=j.default.div.withConfig({displayName:"Louisiana.styles__ContentContainerStyled",componentId:"sc-82f0b08a-7"})`
  ${({theme:e})=>j.css`
    overflow: hidden;

    ${l4.RoundButton} {
      margin-inline-start: 2px;
      margin-bottom: 16px;
      ${l4.ButtonIcon} {
        border-color: ${e.floatingPlayButton.default.normal.stroke.value};

        svg {
          width: 16px;
          height: 16px;
        }
      }
    }
  `}
`,ra=j.default.div.withConfig({displayName:"Louisiana.styles__ScheduleCTAStyled",componentId:"sc-82f0b08a-8"})`
  ${({theme:e})=>j.css`
    display: flex;
    box-sizing: border-box;
    align-items: center;

    p {
      ${(0,C.applyTypography)(e.textLink.large.regular.bpLarge)};
    }

    &:hover {
      p {
        text-decoration: underline;
      }
    }
  `}
`,ri=(0,tM.withCMSFallback)(({testId:e="louisiana",content:i})=>{let o=(0,t.useRef)(null),{scrollStatus:n,onArrowClick:l}=(0,lq.useScrollSnap)(o,!1),{isLeftScrollAvailable:r,isRightScrollAvailable:s}=n,[d,...p]=i,{title:c,description:u,image:g,href:m,stationLink:f=""}=d,y=p.findIndex(({isLiveNow:e})=>e),h=p.slice(y,y+10);return(0,a.jsxs)(l6,{"data-testid":e,children:[(0,a.jsx)(re,{children:g&&(0,a.jsx)(l1.default,{...g,cardType:"louisiana"})}),(0,a.jsxs)(rt,{children:[(0,a.jsxs)(l9,{children:[g&&(0,a.jsx)(l1.default,{...g,cardType:"louisiana"}),(0,a.jsx)(l5,{children:c})]}),(0,a.jsx)(l7,{children:u}),(0,a.jsx)(l0.default,{condition:!!f,wrapper:e=>(0,a.jsx)(b.default,{href:f,children:e}),children:(0,a.jsx)(ec.default,{tabIndex:f?-1:void 0,type:"round",size:"large",icon:"playback-avkx:play",testId:"southend-play-button","data-action":"play",text:"Listen Live","aria-label":"listen live"})}),(0,a.jsx)(l3,{role:"region","aria-label":`${c} programme schedule`,children:(0,a.jsxs)(l8,{ref:o,children:[h.map((e,t)=>(0,a.jsx)("li",{children:(0,a.jsx)(ag.default,{...e,type:"londonderry",href:f})},t)),(0,a.jsx)("li",{"data-testid":"schedule-link-item",children:(0,a.jsx)(b.default,{href:m,children:(0,a.jsxs)(ra,{children:[(0,a.jsx)(w.default,{name:"time-and-date:schedule",width:24,height:24}),(0,a.jsx)("p",{children:"Schedule"})]})})})]})}),(0,a.jsx)(l2.default,{isSponsored:!1,isInverse:!1,handleArrowClick:l,isLeftArrowDisabled:!r,isRightArrowDisabled:!s,variant:"louisiana",ariaLiveMessage:r?"viewing":"beginning"})]})]})},({testId:e="louisiana",content:i=[],...o})=>{let n=(0,t.useRef)(null),{scrollStatus:l,onArrowClick:r}=(0,lq.useScrollSnap)(n,!1),{isLeftScrollAvailable:s,isRightScrollAvailable:d}=l,[p,...c]=i,{title:u,description:g,image:m,href:f}=p,y=c.findIndex(({isLiveNow:e})=>e),h=c.slice(y,y+10);return(0,a.jsxs)(l6,{"data-testid":e,children:[(0,a.jsx)(re,{children:m&&(0,a.jsx)(l1.default,{...m})}),(0,a.jsxs)(rt,{children:[(0,a.jsxs)(l9,{children:[m&&(0,a.jsx)(l1.default,{...m}),(0,a.jsx)(l5,{children:u})]}),(0,a.jsx)(l7,{children:g}),(0,a.jsx)(ec.default,{type:"round",size:"large",icon:"playback-avkx:play",testId:"southend-play-button","data-action":"play",text:"Listen Live"}),(0,a.jsx)(l3,{role:"region","aria-label":`${u} programme schedule`,children:(0,a.jsxs)(l8,{ref:n,children:[h.map((e,t)=>(0,a.jsx)("li",{children:(0,a.jsx)(ag.default,{...e,type:"londonderry",...o})},t)),(0,a.jsx)("li",{"data-testid":"schedule-link-item",children:(0,a.jsx)(b.default,{href:f,children:(0,a.jsxs)(ra,{children:[(0,a.jsx)(w.default,{name:"time-and-date:schedule",width:24,height:24}),(0,a.jsx)("p",{children:"Schedule"})]})})})]})}),(0,a.jsx)(l2.default,{isSponsored:!1,isInverse:!1,handleArrowClick:r,isLeftArrowDisabled:!s,isRightArrowDisabled:!d,variant:"louisiana"})]})]})}),ro="radio-station-top-brand-name",rn=j.default.div.withConfig({displayName:"Minnesota.styles__MinnesotaStyled",componentId:"sc-5c0606f-0"})`
  display: grid;
  gap: 32px;
  margin-bottom: 32px;
`,rl=j.default.div.withConfig({displayName:"Minnesota.styles__MinnesotaTopAreaStyled",componentId:"sc-5c0606f-1"})`
  background-color: ${({theme:e})=>e.container.onInverseBG2.value};
  width: 100%;
  box-sizing: border-box;
  display: grid;
  gap: 32px;
  padding: 48px 16px 16px 16px;
  overflow: hidden;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      padding-top: 24px;
    `,"group3")};

  ${(0,k.applyStylesForBreakpoints)(j.css`
      gap: 24px;
    `,"group2")};
`,rr=j.default.div.withConfig({displayName:"Minnesota.styles__MinnesotaRadioInfoStyled",componentId:"sc-5c0606f-2"})`
  width: 100%;
  display: grid;
  gap: 16px;
`,rs=j.default.div.withConfig({displayName:"Minnesota.styles__MinnesotaUpNextStyled",componentId:"sc-5c0606f-3"})`
  display: grid;
  grid-template-columns: 89px 1fr auto;
  gap: 16px;
  width: 100%;
  background-color: #141618;
  padding: 24px 16px 16px 16px;
  box-sizing: border-box;
  position: relative;
  max-width: 1280px;
  margin: auto;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      grid-template-columns: 1fr;
      padding: 16px 0 0 0;
    `,"group2")};
`,rd=j.default.h2.withConfig({displayName:"Minnesota.styles__MinnesotaUpNextTitleStyled",componentId:"sc-5c0606f-4"})`
  ${({theme:e})=>j.css`
    color: #e6e8ea;
    ${(0,C.applyTypography)(e.sectionTitle.bpLarge)};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        padding: 0 16px;
      `,"group2")};
  `}
`,rp=(0,j.default)(v.GridStyled).withConfig({displayName:"Minnesota.styles__MinnesotaUpNextItemsStyled",componentId:"sc-5c0606f-5"})`
  display: flex;
  overflow: scroll;
  column-gap: 32px;
  scroll-snap-type: x proximity;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${(0,k.applyStylesForBreakpoints)(j.css`
      column-gap: 0;
    `,"group2")};

  > * {
    flex-shrink: 0;
    scroll-snap-align: start;
    position: relative;

    &:not(:last-of-type)::after {
      background-color: #3a3c3e;
      position: absolute;
      content: '';
      width: 1px;
      height: 100%;
      top: 0;
      right: -16px;

      ${(0,k.applyStylesForBreakpoints)(j.css`
          right: 0;
        `,"group2")};
    }
  }
`,rc=j.default.div.withConfig({displayName:"Minnesota.styles__ScheduleCTAStyled",componentId:"sc-5c0606f-6"})`
  ${({theme:e})=>j.css`
    display: flex;
    box-sizing: border-box;
    align-items: center;
    color: #ffffff;
    height: 100%;
    padding: 0 24px 0 16px;

    p {
      ${(0,C.applyTypography)(e.textLink.large.regular.bpLarge)};
    }

    &:hover p {
      text-decoration: underline;
    }
  `}
`,ru=j.default.div.withConfig({displayName:"Minnesota.styles__RadioTopStyled",componentId:"sc-5c0606f-7"})`
  display: flex;
  gap: 32px;
  width: 100%;
  max-width: 722px;
  margin: auto;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      flex-direction: column;
      gap: 24px;
    `,"group3")};
`,rg=j.default.div.withConfig({displayName:"Minnesota.styles__RadioTopImageContainerStyled",componentId:"sc-5c0606f-8"})`
  ${({$imgUrl:e})=>j.css`
    position: relative;
    width: 142px;
    aspect-ratio: 1 / 1;

    ${(0,k.applyStylesForBreakpoints)(j.css`
        width: 190px;
        align-self: center;
      `,"group3")};

    ${e&&j.css`
      &::after {
        content: '';
        position: absolute;
        height: 388px;
        width: 388px;
        bottom: 0;
        right: 0;
        background:
          linear-gradient(to left, transparent 75%, rgba(0, 0, 0, 0.5) 75%),
          url(${(0,l.getAudioImageSrc)(e)}) no-repeat center;
        aspect-ratio: 1 / 1;
        background-size: cover;
        filter: blur(120px);
        transform: translate(-32px, -32px);

        ${(0,nM.applyZIndex)("level0")};

        ${(0,k.applyStylesForBreakpoints)(j.css`
            background:
              linear-gradient(to top, transparent 75%, rgba(0, 0, 0, 0.5) 75%),
              url(${e}) no-repeat center;
            left: 50%;
            transform: translateX(-50%) translateY(-64px);
          `,"group3")};

        ${(0,k.applyStylesForBreakpoints)(j.css`
            height: 360px;
            width: 360px;
          `,"group2")};
      }
    `}
  `}
`,rm=j.default.div.withConfig({displayName:"Minnesota.styles__RadioTopImageStyled",componentId:"sc-5c0606f-9"})`
  ${({$image:e="episode"})=>j.css`
    ${(0,nM.applyZIndex)("level1")};

    img {
      object-fit: cover;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
    }

    ${"station"===e&&j.css`
      width: 40px;
      position: absolute;
      bottom: 0;
      right: 0;

      ${(0,k.applyStylesForBreakpoints)(j.css`
          bottom: 10px;
          right: 10px;
        `,"group3")};
    `}
  `}
`,rf=j.default.div.withConfig({displayName:"Minnesota.styles__RadioTopDetailsStyled",componentId:"sc-5c0606f-10"})`
  flex: 1;
`,ry=j.default.h1.withConfig({displayName:"Minnesota.styles__StationNameStyled",componentId:"sc-5c0606f-11"})`
  ${({theme:e})=>j.css`
    ${(0,C.applyTypography)(e.radioPlayer.stationName.default.bpLarge)};
    color: ${e.text.onInverseBG.default.value};
    margin-bottom: 16px;

    &:hover {
      text-decoration: underline;
    }

    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${(0,C.applyTypography)(e.radioPlayer.stationName.default.bpSmall)};
      `,"group3")};
  `};
`,rh=j.default.h2.withConfig({displayName:"Minnesota.styles__BrandNameStyled",componentId:"sc-5c0606f-12"})`
  ${({theme:e})=>j.css`
    ${(0,C.applyTypography)(e.radioPlayer.brandName.default.bpLarge)};
    color: ${e.text.lowEmphasis.value};
    margin-bottom: 4px;

    &:hover {
      text-decoration: underline;
    }

    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${(0,C.applyTypography)(e.radioPlayer.brandName.default.bpSmall)};
      `,"group3")};
  `};
`,rx=j.default.h3.withConfig({displayName:"Minnesota.styles__EpisodeTitleStyled",componentId:"sc-5c0606f-13"})`
  ${({theme:e})=>j.css`
    ${(0,C.applyTypography)(e.radioPlayer.episodeName.bpLarge)};
    color: ${e.text.onInverseBG.default.value};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${(0,C.applyTypography)(e.radioPlayer.episodeName.bpSmall)};
      `,"group3")};
  `};
`,rb=(0,t.memo)(({model:e,...t})=>e&&(0,a.jsx)(rm,{$image:"station",children:(0,a.jsx)(l1.default,{model:e,...t,testId:"radio-station-station-image"})})),rS=({currentEpisode:e,station:t})=>{let{image:i,title:o,brandName:n,brandHref:l}=e,{image:r,title:s,href:d}=t,p=i?.model?.blocks?.src;return(0,a.jsxs)(ru,{"data-testid":"radio-station-top-wrapper",children:[(0,a.jsxs)(rg,{$imgUrl:p,children:[i&&(0,a.jsx)(rm,{$image:"episode",children:(0,a.jsx)(l1.default,{...i,testId:"radio-station-episode-image"})}),(0,a.jsx)(rb,{...r})]}),(0,a.jsxs)(rf,{children:[(0,a.jsx)(b.default,{href:d,children:(0,a.jsx)(ry,{"data-testid":"radio-station-top-station-name",children:s})}),n&&(l?(0,a.jsx)(b.default,{href:l,children:(0,a.jsx)(rh,{"data-testid":ro,children:n})}):(0,a.jsx)(rh,{"data-testid":ro,children:n})),(0,a.jsx)(rx,{"data-testid":"radio-station-top-episode-title",children:o})]})]})},rv=(0,t.memo)(({currentShowTitle:e,...t})=>{let i={playlistLabels:[],blocks:function(e){let{serviceId:t,image:a,title:i,description:o}=e;return t?[{type:"audio",model:{blocks:[{type:"media",model:{blocks:[{type:"mediaMetadata",model:{id:"",title:i,advertising:!0,caption:"",embedding:!0,format:"audio",imageCopyright:"BBC",imageUrl:"",indexImage:a,smpKind:"radioProgramme",subType:"episode",syndication:{destinations:[]},synopses:{short:o},versions:[{availableTerritories:{uk:!1,nonUk:!0},versionId:t,types:["episode"],duration:"",durationISO8601:"",drm:!1,download:!1,availableFrom:0,availableTo:0,indexInTleo:0}]}}]}}]}}]:[]}(t),playerPosition:"radio-station-page",isAudio:!0,isLiveRadio:!0};return(0,a.jsx)(M.default,{isAudio:!0,testId:"radio-station-player",...i,playlistLabels:[{av_show:e}]})},(e,t)=>{let{currentShowTitle:a,...i}=e,{currentShowTitle:o,...n}=t;return(0,E.default)(i,n)});function rw(e,t){let a=new Date;"tomorrow"===t&&a.setDate(a.getDate()+1);let i=a.toISOString().slice(0,10);return`${i}/${e}`}let r$=(0,tM.withCMSFallback)(({testId:e="minnesota",content:i})=>{let o=(0,p.usePopup)(),{push:n}=(0,d.useAppRouter)(),l=(0,t.useRef)(null),{scrollStatus:r,onArrowClick:s}=(0,lq.useScrollSnap)(l),{isLeftScrollAvailable:c,isRightScrollAvailable:u}=r,[g]=i,{title:m,description:f="",image:y,href:h,serviceId:x}=g,{currentScheduleItem:S,visibleScheduleItems:v}=function(e){let[a,i]=(0,t.useState)(!0),o=(0,t.useMemo)(()=>rw(e,"today"),[e,a]),n=(0,t.useMemo)(()=>rw(e,"tomorrow"),[e,a]),{data:l}=lB(o),{data:r}=lB(n),s=(0,t.useMemo)(()=>lw({type:"minnesota",model:{blocks:l}}),[l,a]),d=(0,t.useMemo)(()=>lw({type:"minnesota",model:{blocks:r}}),[r,a]),p=s.findIndex(({isLiveNow:e})=>e),c=s[p],u=[...s,...d].slice(p+1,p+10);return(0,t.useEffect)(()=>{if(a){i(!1);let[{startDate:e}]=u;setTimeout(()=>i(!0),new Date(e??"").getTime()-Date.now())}},[a,u]),{currentScheduleItem:c,visibleScheduleItems:u}}(x??""),{description:$="",brandName:j,programmesUrl:k}=S,C=$.split("\n").map(e=>e.trim()).filter(Boolean);return(0,t.useEffect)(()=>{let e=e=>{let t=e.target.closest("a");t&&t.href&&(e.preventDefault(),o({variant:"leaving-page",onPrimaryAction:()=>n(t.href),onSecondaryAction:()=>window.open(t.href,"_blank")}))};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]),(0,a.jsxs)(rn,{"data-testid":`${e}-grid`,children:[(0,a.jsxs)(rl,{children:[(0,a.jsxs)(rr,{children:[(0,a.jsx)(rS,{currentEpisode:S,station:g}),(0,a.jsx)(rv,{serviceId:x,title:m,description:f,image:y,currentShowTitle:j})]}),(0,a.jsxs)(rs,{children:[(0,a.jsx)(rd,{children:"Up Next"}),(0,a.jsxs)(rp,{ref:l,children:[v.map((e,t)=>(0,a.jsx)(ag.default,{...e,type:"wells",itemPosition:t},t)),(0,a.jsx)(b.default,{href:h,children:(0,a.jsxs)(rc,{children:[(0,a.jsx)(w.default,{name:"time-and-date:schedule",width:24,height:24}),(0,a.jsx)("p",{children:"Schedule"})]})})]}),(0,a.jsx)(l2.default,{isInverse:!0,isSponsored:!1,isLeftArrowDisabled:!c,isRightArrowDisabled:!u,handleArrowClick:s,variant:"minnesota"})]})]}),(0,a.jsx)(P,{description:C,isActionVisible:!1,isStationPage:!0,programmesUrl:k})]})},({testId:e="minnesota",content:i,...o})=>{let n=(0,t.useRef)(null),{scrollStatus:l,onArrowClick:r}=(0,lq.useScrollSnap)(n),{isLeftScrollAvailable:s,isRightScrollAvailable:d}=l,[p,...c]=i,[u]=c,{title:g,description:m="",image:f,href:y,serviceId:h}=p,{description:x=""}=u,S=x.split("\n").map(e=>e.trim()).filter(Boolean);return(0,a.jsxs)(rn,{"data-testid":`${e}-grid`,children:[(0,a.jsxs)(rl,{children:[(0,a.jsxs)(rr,{children:[(0,a.jsx)(rS,{currentEpisode:u,station:p}),(0,a.jsx)(rv,{serviceId:h,title:g,description:m,image:f})]}),(0,a.jsxs)(rs,{children:[(0,a.jsx)(rd,{children:"Up Next"}),(0,a.jsxs)(rp,{ref:n,children:[i.map((e,t)=>(0,a.jsx)(ag.default,{...e,type:"wells",itemPosition:t,...o},t)),(0,a.jsx)(b.default,{href:y,children:(0,a.jsxs)(rc,{children:[(0,a.jsx)(w.default,{name:"time-and-date:schedule",width:24,height:24}),(0,a.jsx)("p",{children:"Schedule"})]})})]}),(0,a.jsx)(l2.default,{isInverse:!0,isSponsored:!1,isLeftArrowDisabled:!s,isRightArrowDisabled:!d,handleArrowClick:r,variant:"minnesota"})]})]}),(0,a.jsx)(P,{avProperties:{},isStationPage:!0,isActionVisible:!1,description:S})]})});var rj=e.i(833223);let rk="back-to-top-button-wrapper-styled",rC="back-to-top-button",r_={group6:172,group5:56,group4:16,group3:16,group2:0,group1:0},rI={group6:68,group5:56,group4:24,group3:16,group2:16,group1:16},rT=["group6","group5","group4","group3"],rB=j.default.div.withConfig({displayName:"Missouri.styles__MissouriStyled",componentId:"sc-bffcf76-0"})`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-areas:
    'sticky-area top'
    'sticky-area details'
    'sticky-area back-to-top';
  grid-template-columns: 300px 1fr;
  column-gap: 24px;
  padding-bottom: 120px;

  ${rT.map(e=>(0,k.applyStylesForBreakpoints)(j.css`
        padding-inline: ${r_[e]}px;
        column-gap: ${rI[e]}px;
      `,e))};

  ${(0,k.applyStylesForBreakpoints)(j.css`
      grid-template-columns: clamp(203px, 35vw, 266px) 1fr;
      grid-template-areas:
        'sticky-area top'
        'details details'
        'back-to-top back-to-top';
      margin: 0;
      padding: 0;
    `,"group3")};

  ${(0,k.applyStylesForBreakpoints)(j.css`
      margin: 0;
      grid-template-areas: 'top' 'details' 'back-to-top';
      grid-template-columns: unset;
    `,"group2")};
`,rN=j.default.div.withConfig({displayName:"Missouri.styles__MissouriContentStyled",componentId:"sc-bffcf76-1"})`
  ${({theme:e})=>j.css`
    display: grid;
    grid-area: top;
    position: relative;
    grid-template-areas: 'top-image' 'top-details' 'top-actions';
    background-color: transparent;

    ${(0,k.applyStylesForBreakpoints)(j.css`
        padding: 0;
        background-color: ${e.container.onInverseBG2.value};
        grid-template-columns: 1fr;
        grid-template-areas: 'top-image' 'top-details' 'ad' 'top-actions';
      `,"group2")};
  `}
`,rA=j.default.div.withConfig({displayName:"Missouri.styles__MissouriBackgroundStyled",componentId:"sc-bffcf76-2"})`
  ${({$left:e,$imageLeft:t,$imgUrl:a,$maxHeight:i,theme:o,$width:n})=>j.css`
    position: absolute;
    overflow: hidden;
    left: -${e}px;
    height: 100%;
    top: 0;
    background-color: ${o.container.onInverseBG2.value};
    width: ${n}; /* we need to address the overflow that is caused by this on a very high level */
    z-index: 1;

    &::after {
      content: '';
      position: absolute;
      height: 388px;
      aspect-ratio: 1 / 1;
      background: url(${a}) no-repeat center;
      background-size: cover;
      filter: blur(120px);
      top: -40px;
      left: ${t-r_.group6}px;

      ${rT.map(e=>(0,k.applyStylesForBreakpoints)(j.css`
            left: ${t-r_[e]}px;
          `,e))}
    }

    ${(0,k.applyStylesForBreakpoints)(j.css`
        max-height: ${i}px;
      `,"group3")}

    ${(0,k.applyStylesForBreakpoints)(j.css`
        overflow: hidden;

        &::after {
          width: 100%;
          top: -266px;
          height: 360px;
          left: 0;
        }
      `,"group2")};
  `}
`,rL=j.default.div.withConfig({displayName:"Missouri.styles__MissouriStickyAreaStyled",componentId:"sc-bffcf76-3"})`
  grid-area: sticky-area;
  display: grid;
  row-gap: 12px;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      display: none;
    `,"group2")};
`,rF=j.default.div.withConfig({displayName:"Missouri.styles__MissouriScheduleImageContainerStyled",componentId:"sc-bffcf76-4"})`
  z-index: 2;

  img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    margin-top: 24px;
    border-radius: 50%;

    ${(0,k.applyStylesForBreakpoints)(j.css`
        margin-top: 40px;
      `,"group3")};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        width: 190px;
      `,"group2")};
  }
`,rP=j.default.div.withConfig({displayName:"Missouri.styles__MissouriTopDetailsStyled",componentId:"sc-bffcf76-5"})`
  ${({theme:e})=>j.css`
    max-width: 563px;
    height: fit-content;

    ${(0,k.applyStylesForBreakpoints)(j.css`
        max-width: unset;
      `,"group3")};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        background-color: ${e.container.onInverseBG2.value};
        padding: 0 12px;
        display: block;
      `,"group2")};
  `}
`,rE=j.default.div.withConfig({displayName:"Missouri.styles__MissouriTopWrapperStyled",componentId:"sc-bffcf76-6"})`
  position: relative;
  background-color: ${({theme:e})=>e.container.onInverseBG2.value};
  box-sizing: border-box;
  height: auto;
  padding: 24px 0 48px 0;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      height: 100%;
      padding-bottom: 64px;
    `,"group2")};
`,rM=j.default.div.withConfig({displayName:"Missouri.styles__MissouriTopImageContainerStyled",componentId:"sc-bffcf76-7"})`
  display: none;

  > div {
    display: flex;
    justify-content: center;
  }

  img {
    border-radius: 50%;
  }

  ${(0,k.applyStylesForBreakpoints)(j.css`
      padding-top: 16px;
      position: unset;
      justify-self: center;
    `,"group4")};

  ${(0,k.applyStylesForBreakpoints)(j.css`
      display: block;
      position: relative;
      top: 0;
      padding-bottom: 16px;

      ${(0,nM.applyZIndex)("level2")};

      img {
        width: 190px;
      }
    `,"group2")};
`,rR=j.default.div.withConfig({displayName:"Missouri.styles__MissouriDetailsAreaStyled",componentId:"sc-bffcf76-8"})`
  grid-area: details;
  max-width: 563px;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      max-width: unset;
    `,"group3")};
`,rD=j.default.div.withConfig({displayName:"Missouri.styles__MissouriBackToTopStyled",componentId:"sc-bffcf76-9"})`
  padding: 0 16px;
  grid-area: back-to-top;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  max-width: 563px;

  button svg {
    width: 15px;
    height: auto;
  }

  ${(0,k.applyStylesForBreakpoints)(j.css`
      margin-top: 24px;
      max-width: unset;
    `,"group3")};

  ${(0,k.applyStylesForBreakpoints)(j.css`
      margin-top: 16px;
      height: 44px;
    `,"group2")};
`,rO=j.default.div.withConfig({displayName:"Missouri.styles__PlayButtonAnchorWrapperStyled",componentId:"sc-bffcf76-10"})`
  margin: auto;
  display: block;
  position: relative;

  :link,
  :visited,
  :hover,
  :active {
    color: inherit;
  }

  ${(0,k.applyStylesForBreakpoints)(j.css`
      grid-area: top-action;
    `,"group3")};
`,rG=j.default.a.withConfig({displayName:"Missouri.styles__PlayButtonWrapperStyled",componentId:"sc-bffcf76-11"})`
  position: absolute;
  bottom: -34px;
  right: 0;
  z-index: 6;
  color: #141618;

  button {
    min-width: 0;
    border: none;
    outline: none;

    span {
      width: 68px;
      height: 68px;
      border-radius: 50%;
      background-color: white;
      outline: 2px solid #141618;
    }

    svg {
      height: 24px;
    }
  }
`,rH=j.default.div.withConfig({displayName:"Missouri.styles__TopStyled",componentId:"sc-bffcf76-12"})`
  margin: auto;
  background-color: ${({theme:e})=>e.container.onInverseBG2.value};

  ${(0,k.applyStylesForBreakpoints)(j.css``,"group4")};

  ${(0,k.applyStylesForBreakpoints)(j.css`
      padding: 0;
      display: flex;
      flex-direction: row;
      column-gap: 24px;
    `,"group3")};

  ${(0,k.applyStylesForBreakpoints)(j.css`
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: visible;
    `,"group2")};
`,rz=j.default.div.withConfig({displayName:"Missouri.styles__TextsWrapperStyled",componentId:"sc-bffcf76-13"})`
  ${()=>j.css`
    align-self: baseline;
    width: 100%;
    z-index: 2;
    position: relative;

    ${(0,k.applyStylesForBreakpoints)(j.css``,"group4")};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        margin-left: unset;
        width: 100%;
      `,"group3")};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        margin-left: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        z-index: 3;
      `,"group2")};
  `};
`,rU=j.default.div.withConfig({displayName:"Missouri.styles__BackgroundImageWrapperStyled",componentId:"sc-bffcf76-14"})`
  display: none;
  height: 100%;
  position: absolute;
  width: 100vw;
  left: -100%;
  top: 0;
  z-index: -1;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      display: none;
    `,"group3")};
`,rW=j.default.h2.withConfig({displayName:"Missouri.styles__StationNameStyled",componentId:"sc-bffcf76-15"})`
  ${({theme:e})=>j.css`
    color: ${e.text.onInverseBG.mediumEmphasis.value};
    text-align: left;
    margin-bottom: 16px;
    ${(0,C.applyTypography)(e.audio.brandTitle.large.bpLarge)};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        text-align: left;
        margin-bottom: 8px;
        ${(0,C.applyTypography)(e.audio.brandTitle.large.bpSmall)};
      `,"group2")};
  `};
`,rV=j.default.p.withConfig({displayName:"Missouri.styles__DescriptionStyled",componentId:"sc-bffcf76-16"})`
  ${({theme:e})=>j.css`
    text-align: left;
    color: ${e.text.onInverseBG.default.value};

    ${(0,C.applyTypography)(e.bodyCopy.default.bpLarge)};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        text-align: left;
        ${(0,C.applyTypography)(e.bodyCopy.default.bpSmall)};
      `,"group2")};
  `};
`,rY=(0,t.forwardRef)(({title:e,description:t,stationLink:i},o)=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(rE,{"data-testid":"radio-schedule-top-wrapper-styled",children:(0,a.jsxs)(rH,{children:[(0,a.jsx)(rU,{}),(0,a.jsxs)(rz,{children:[(0,a.jsx)(rW,{"data-testid":"station-name-styled",children:e}),(0,a.jsx)(rV,{"data-testid":"description-styled",children:t})]})]})}),(0,a.jsx)(b.default,{href:i,styledAnchorInner:rO,styledAnchor:rG,children:(0,a.jsx)(ec.default,{ref:o,type:"round",icon:"playback-avkx:play",size:"large",iconPosition:"bottom",isInverse:!1})})]}));function rq(){let e=(0,t.useRef)(null),a=(0,t.useRef)(null),i=(0,t.useRef)(null),o=(0,t.useRef)(null),n=(0,t.useRef)(null),[l,r]=(0,t.useState)(0),[s,d]=(0,t.useState)(0),[p,c]=(0,t.useState)(0),[u,g]=(0,t.useState)(0),[m,f]=(0,t.useState)("unset");(0,eg.useResizeObserver)(e,e=>{let[{target:t}]=e,{offsetTop:a}=t;p!==a&&c(a)},100),(0,eg.useResizeObserver)(a,e=>{let[{target:t}]=e,{left:a}=t.getBoundingClientRect();l!==a&&r(a)},100),(0,eg.useResizeObserver)(o,e=>{let[{target:t}]=e,{left:a}=t.getBoundingClientRect();u!==a&&g(a)},100),(0,eg.useResizeObserver)(i,e=>{let[{target:t}]=e,{height:a}=t.getBoundingClientRect();s!==a&&d(a)},100);let y=(0,eG.default)(()=>{f(`${document.documentElement.clientWidth}px`)},100,{leading:!0});return(0,t.useEffect)(()=>(f(`${document.documentElement.clientWidth}px`),window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)}),[]),{contentAreaLeft:l,backgroundMaxHeight:s,imageAreaTop:p,imageAreaLeft:u,mainRef:e,topRef:a,imageContainerRef:o,topDetailsRef:i,playButtonRef:n,backgroundWidth:m}}let rQ=(0,tM.withCMSFallback)(({content:e,testId:t="missouri"})=>{let i=(0,rj.useNestedSections)(),{contentAreaLeft:o,backgroundMaxHeight:n,imageAreaLeft:l,mainRef:r,topRef:s,imageContainerRef:d,topDetailsRef:p,playButtonRef:c,backgroundWidth:u}=rq(),[g]=e,{image:m,stationLink:f=""}=g,y=m?.model?.blocks?.src;return(0,a.jsxs)(rB,{ref:r,"data-testid":`${t}-grid`,children:[(0,a.jsx)(rL,{children:(0,a.jsx)(rF,{ref:d,children:m&&(0,a.jsx)(l1.default,{...m})})}),(0,a.jsxs)(rN,{ref:s,children:[(0,a.jsx)(rA,{$left:o,$maxHeight:n,$imageLeft:l,$imgUrl:y,$width:u}),(0,a.jsxs)(rP,{ref:p,children:[(0,a.jsx)(rM,{children:m&&(0,a.jsx)(l1.default,{...m})}),(0,a.jsx)(rY,{ref:c,...g})]})]}),(0,a.jsx)(rR,{children:(0,a.jsx)(lY,{value:f,children:i("alabama")})}),(0,a.jsx)(rD,{"data-testid":rk,children:(0,a.jsx)(ec.default,{testId:rC,iconPosition:"right",onClick:()=>window.scrollTo(0,0),text:"Back to top",type:"ghost",icon:"arrows:to-top"})})]})},({content:e=[],testId:t="missouri"})=>{let i=(0,rj.useNestedSections)(),{contentAreaLeft:o,backgroundMaxHeight:n,imageAreaLeft:l,mainRef:r,topRef:s,imageContainerRef:d,topDetailsRef:p,playButtonRef:c,backgroundWidth:u}=rq(),[g]=e,{image:m}=g,f=m?.model?.blocks?.src;return(0,a.jsxs)(rB,{ref:r,"data-testid":`${t}-grid`,children:[(0,a.jsx)(rL,{children:(0,a.jsx)(rF,{ref:d,children:m&&(0,a.jsx)(l1.default,{...m})})}),(0,a.jsxs)(rN,{ref:s,children:[(0,a.jsx)(rA,{$left:o,$maxHeight:n,$imageLeft:l,$imgUrl:f,$width:u}),(0,a.jsxs)(rP,{ref:p,children:[(0,a.jsx)(rY,{ref:c,...g}),(0,a.jsx)(rM,{children:m&&(0,a.jsx)(l1.default,{...m})})]})]}),(0,a.jsx)(rR,{children:(0,a.jsx)(lY,{value:g.href,children:i("alabama")})}),(0,a.jsx)(rD,{"data-testid":rk,children:(0,a.jsx)(ec.default,{testId:rC,iconPosition:"right",onClick:()=>window.scrollTo(0,0),text:"Back to top",type:"ghost",icon:"arrows:to-top"})})]})}),rX=j.default.div.withConfig({displayName:"NewHampshire.styles__NewHampshireStyled",componentId:"sc-aec2ac7f-0"})`
  ${({$isNested:e})=>j.css`
    max-width: 1248px;
    margin-inline: auto;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    column-gap: 16px;

    > * {
      display: flex;
    }

    ${(0,k.applyStylesForBreakpoints)(j.css`
        max-width: unset;
        margin-inline: 16px;
      `,"group4")};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        grid-auto-flow: row;
        grid-auto-columns: unset;
        row-gap: 16px;
      `,"group3")};

    ${e&&j.css`
      grid-auto-flow: row;
      grid-auto-columns: unset;
      row-gap: 32px;
      margin-block: 32px;
      padding-block: 24px;
      border-top: 2px solid black;

      ${(0,k.applyStylesForBreakpoints)(j.css`
          margin-block: unset;
          grid-auto-flow: column;
          grid-auto-columns: 1fr;
          border-bottom: 2px solid black;
        `,"group4")};

      ${(0,k.applyStylesForBreakpoints)(j.css`
          row-gap: 32px;
          grid-auto-flow: row;
          grid-auto-columns: unset;
        `,"group3")};
    `};
  `}
`,rK=({children:e,isContained:t,isNested:i,testId:o})=>t?(0,a.jsxs)(v.GridStyled,{$columns:[1,1,"minmax(90px, auto) 1fr","minmax(90px, auto) 1fr","minmax(90px, auto) 1fr","minmax(90px, auto) 1fr"],$maxWidth:["722px","722px","722px","722px","722px","722px"],$gridGap:["32px","32px","16px","16px","16px","16px"],$margin:["auto","auto","auto","auto","auto","auto"],$padding:["0 16px 120px","0 16px 120px","0 16px 120px","0 16px 120px","0 16px 120px","0 16px 120px"],$alignItems:"start","data-testid":"audio-episode-details-wrapper",children:[(0,a.jsx)("div",{}),e]}):(0,a.jsx)(rX,{"data-testid":o,$isNested:i,children:e}),rZ=(0,tM.withCMSFallback)(({testId:e="newhampshire",content:t,isNested:i=!1,isContained:o=!1})=>(0,a.jsx)(rK,{isContained:o,isNested:i,testId:e,children:t.slice(0,o?1:2).map((e,t)=>(0,a.jsx)(ag.default,{...e,type:"norwich"},t))}),({testId:e="newhampshire",content:t=[],isNested:i=!1,...o})=>(0,a.jsx)(rX,{"data-testid":e,$isNested:i,children:(0,a.jsx)(a.Fragment,{children:t.slice(0,2).map((e,t)=>(0,a.jsx)(ag.default,{...e,type:"norwich",...o},t))})})),rJ="divider",r0="station-button",r1=j.default.div.withConfig({displayName:"RhodeIsland.styles__StationSwitcherStyled",componentId:"sc-bca5d6f9-0"})`
  ${({theme:e})=>j.css`
    background-color: #ffffff;
    z-index: 100;
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;

    button:not(${r4}) {
      padding: 6px 18px;
      outline: none;
      height: 48px;
      text-align: center;

      ${(0,C.applyTypography)(e.stationPicker.default.bpLarge)};

      img {
        border-radius: 50%;
        width: 18px;
        height: 18px;
      }
    }

    ${(0,k.applyStylesForBreakpoints)(j.css`
        padding: 0;

        button:not(${r4}) {
          outline: none;
          text-align: center;

          ${(0,C.applyTypography)(e.stationPicker.default.bpSmall)};

          img {
            width: 20px;
            height: 20px;
          }
        }
      `,"group2")};
  `}
`,r2=j.default.div.withConfig({displayName:"RhodeIsland.styles__StationsStyled",componentId:"sc-bca5d6f9-1"})`
  ${({$isOverflow:e})=>j.css`
    justify-content: center;
    overflow: scroll;
    display: flex;
    flex-direction: row;
    position: relative;

    /* hide scrollbar for firefox */
    scrollbar-width: none;

    /* hide scrollbar for webkit browsers */
    &::-webkit-scrollbar {
      display: none;
    }

    ${e&&j.css`
      justify-content: flex-start;
    `}

    ${(0,k.applyStylesForBreakpoints)(j.css`
        width: 100%;

        div {
          min-width: 50%;

          ${l4.ButtonBase} {
            width: 100%;
          }
        }
      `,"group2")};
  `}
`,r4=j.default.button.withConfig({displayName:"RhodeIsland.styles__ChevronButtonStyled",componentId:"sc-bca5d6f9-2"})`
  ${({theme:e,disabled:t})=>j.css`
    padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg {
      width: 32px;
      height: 15px;
      fill: #000000;
    }

    &:hover {
      background-color: ${e.interactive4.onInverseBG.hovered.value};

      ${!t&&j.css`
        svg {
          fill: #ffffff;
        }
      `}
    }

    &:disabled {
      opacity: 0.5;
      cursor: default;
      background-color: transparent;
    }
  `}
`,r6=j.default.span.withConfig({displayName:"RhodeIsland.styles__DividerStyled",componentId:"sc-bca5d6f9-3"})`
  margin: auto 0;
  background-color: #e6e8ea;
  display: block;
  width: 1px;
  height: 20px;
`,r3=j.default.div.withConfig({displayName:"RhodeIsland.styles__ButtonWithDividerStyled",componentId:"sc-bca5d6f9-4"})`
  display: flex;
  flex-direction: row;

  &:hover {
    background-color: #e6e8ea;
  }

  &:last-of-type ${r6} {
    display: none;
  }
`,r8=({activeStation:e,stations:i})=>{let o=(0,t.useRef)(null),n=(0,t.useRef)(null),l=(0,t.useRef)(null),{scrollStatus:r,onArrowClick:s}=(0,lq.useScrollSnap)(o),{isLeftScrollAvailable:d,isRightScrollAvailable:p}=r,[c,u]=(0,t.useState)(!1),{title:g}=e||{};return(0,eg.useResizeObserver)(o,eu(u,c,0)),(0,t.useEffect)(()=>{c&&n.current&&o.current&&l.current&&o.current.scrollBy({top:0,left:n.current.getBoundingClientRect().left-l.current.clientWidth})},[c]),(0,a.jsxs)(r1,{"data-testid":"station-switcher",children:[c&&(0,a.jsx)(r4,{ref:l,"data-testid":"left-chevron",disabled:!d,onClick:()=>s("left"),"aria-label":"Previous Page",children:(0,a.jsx)(w.default,{name:"arrows:chevron-left"})}),(0,a.jsx)(r2,{ref:o,$isOverflow:c,children:i.map(({href:e,...t},i)=>(0,a.jsx)(b.default,{href:e,children:(0,a.jsxs)(r3,{children:[(0,a.jsx)(ec.default,{ref:t.title===g?n:null,testId:r0,isInverse:t.title!==g,text:t.title,img:t?.image?.model?.blocks?.src,iconPosition:"left"}),(0,a.jsx)(r6,{"data-testid":rJ})]})},i))}),c&&(0,a.jsx)(r4,{"data-testid":"right-chevron",disabled:!p,onClick:()=>s("right"),"aria-label":"Next Page",children:(0,a.jsx)(w.default,{name:"arrows:chevron-right"})})]})},r5={alabama:lJ,louisiana:ri,minnesota:r$,missouri:rQ,newhampshire:rZ,rhodeisland:(0,tM.withCMSFallback)(({content:e})=>{let{query:t}=(0,d.useAppRouter)(),{slug:i}=t,o=(0,la.getStringFromSlug)(i),n=e.find(({href:e})=>e.includes(o)||o.includes(e));return(0,a.jsx)(r8,{stations:e,activeStation:n})},e=>{let{content:t=[],editPopover:i}=e;return(0,a.jsx)(r1,{children:(0,a.jsx)(r2,{$isOverflow:!1,children:t.map((e,t)=>(0,a.jsx)(b.default,{href:e.href,children:(0,a.jsxs)(r3,{children:[(0,a.jsx)(ec.default,{isInverse:!0,testId:r0,text:e.title,img:e?.image?.model?.blocks?.src,iconPosition:"left"}),i&&(0,a.jsx)(i,{...e}),(0,a.jsx)(r6,{"data-testid":rJ})]})},t))})})})};var r7=e.i(506098),r7=r7;let r9=j.default.section.withConfig({displayName:"AudioSections.styles__AudioSectionStyled",componentId:"sc-3e85ebfc-0"})`
  ${({theme:e,$withMargin:t})=>j.css`
    ${t&&j.css`
      margin-block: 48px;
    `}

    background-color: ${e.container.onDefaultBG4.value};
  `};
`,se=(0,t.memo)(e=>{let{type:i,sectionNumber:n,isNested:l=!1,isContained:r=!1}=e,s=(0,t.useContext)(l_)[i],d=function(e){let{type:t}=e;switch(t){case"missouri":case"rhodeisland":case"newhampshire":var a=e;try{let{model:e}=a,{blocks:t}=e;return t.map(e=>{let{link:t,title:a,summary:i,indexImage:o,stationLink:n}=e;return{title:a,description:i,image:o,href:t,stationLink:n??"",metadata:{contentType:"radio"}}})}catch(e){return ej.logger.error(`Error getting stations data: ${e}`),[]}case"louisiana":case"minnesota":case"alabama":return function(e){try{let{model:t,type:a}=e,{blocks:i}=t,[{model:o,summary:n,title:l,indexImage:r,link:s,serviceId:d,stationLink:p}]=i,{blocks:c}=o,u=lw({type:a,model:{blocks:c}});return[{title:l,description:n,image:r,href:s,serviceId:d??"",stationLink:p??"",metadata:{contentType:"radio"}},...u]}catch(e){return ej.logger.error(`Error getting Louisiana data: ${e}`),[]}}(e)}}(e),p=`${i}-section-outer`,c=function(e,t){switch(e){case"alabama":case"minnesota":try{let{model:e}=t,{blocks:a}=e,[{model:i,serviceId:o}]=a,{blocks:n}=i;return n.reduce((e,t)=>{let a=new Date(t.startTime??""),i=!isNaN(a.getTime()),n=a.toISOString().slice(0,10),l=`${n}/${o}`;return i?{...e,[l]:[...e[l]??[],t]}:e},{})}catch(e){return ej.logger.error(`Error getting fallback data: ${e}`),{}}default:return{}}}(i,e),u=!!s&&!!d.length,g=["louisiana","newhampshire","louisiana"].includes(i),{dataset:m}=(0,a8.useAnalyticsGroupProperties)({content:d,type:i,sectionNumber:n});return u?(0,a.jsx)(o.SWRConfig,{value:{fallback:c},children:(0,a.jsx)(r9,{$withMargin:g,...m,"data-testid":p,children:(0,a.jsx)(s,{type:i,content:d,isNested:l,isContained:r})})}):null}),st=j.default.div.withConfig({displayName:"CMSCustomComponent.styles__SubscriptionUnavailableWrapperStyled",componentId:"sc-ba76715a-0"})`
  text-align: center;
`,sa=j.default.p.withConfig({displayName:"CMSCustomComponent.styles__SubscriptionUnavailableMessageStyled",componentId:"sc-ba76715a-1"})`
  ${({theme:e})=>j.css`
    color: ${e.text.default.value};
    ${(0,C.applyTypography)(e.bodyCopy.default.bpSmall)};
  `}
`,si=j.default.div.withConfig({displayName:"CMSCustomComponent.styles__CMSCustomComponentContainer",componentId:"sc-ba76715a-2"})`
  overflow: hidden;
`,so=({id:e})=>{let{isSubscriptionAllowed:i}=(0,x.useSubscriptionContext)(),[o]=(0,te.useCurrentSlug)(),[n,l]=(0,t.useState)(!1);return((0,t.useEffect)(()=>{l(!0)},[]),n)?"subscribe"!==o||i?(0,a.jsx)(si,{id:e}):(0,a.jsx)(st,{children:(0,a.jsx)(sa,{children:"Subscription is not available at this time. Please try again later."})}):(0,a.jsx)("div",{id:e})};var sn=e.i(270340),sl=e.i(94930),sr=e.i(497030),ss=e.i(280108),sd=e.i(317166),sp=e.i(852827),sc=e.i(993297);let su={credentials:"include",isLegacyApiEnabled:!0};async function sg(e,t="audio",a){let o="heartbeat"!==e,n={cache:"no-cache",method:"GET",params:{metadata:"true",..."bookmark"===e?{subtype:i.ContentSubtype.Episode,type:t}:{type:t},...a?{country:a}:{}},...su};try{if(o){let{data:t}=await (0,ic.fetchClient)(e,n),{data:a}=t;switch(e){case"bookmark":return a.map(sc.transformContent);case"follow":return a.map(({episode:e,premiumEpisode:t,id:a,path:i,title:o,summary:n,topics:l})=>({...e,brand:{id:a,path:i,title:o},premiumEpisode:t,summary:n,topics:l})).map(e=>(0,sc.transformContent)(e))}}else{let{data:t}=await (0,ic.fetchClient)(e,n);return t.map(sc.transformContent)}}catch(e){return ej.logger.error("Error fetching client-side collection",e),[]}}let sm=function(e,i){let{isSignedIn:n}=(0,sd.useUser)(),r=(0,u.useFeatureFlag)("authentication"),s=(0,u.useFeatureFlag)("follow-brand-function"),{country:d}=(0,tt.usePageData)(),p=d??"xx",c=("iowa"===e||"michigan"===e)&&"heartbeat"===i,g=(0,m.useCanPlayEpisode)(),f=(0,t.useCallback)(async()=>{if("follow"===i&&!s||!n||!i)return[];{let t=await sg(i,"michigan"===e?"lf-video":"audio",p);if(c){let e=(0,sl.getIdsFromContent)(t),a=await (0,sp.getMediaProgress)({isFetchAllowed:!0,ids:e});return t.reduce((e,{id:t,metadata:i,...o})=>{let n=(0,sr.getMediaOffsetFromProgress)(a,t),{duration:l=1}=i;return n/l>=q.LATE_PROGRESS/100?e:[...e,{id:t,metadata:{...i,progress:n},...o}]},[])}return t}},[c,i,s,n,r]),{data:y=[],isLoading:h}=(0,o.default)(n?i:null,f,{use:[ss.tokenRefreshMiddleware]}),x=(0,t.useMemo)(()=>"follow"!==i?y:y.map(e=>(0,l.resolveFollowPremiumEpisode)(e,g)),[y,i,g]);return{emptyContentComponent:(0,t.useMemo)(()=>h?(0,a.jsx)(lv.default,{}):null,[h]),content:x}},sf=j.default.div.withConfig({displayName:"Arkansas.styles__ArkansasContainerStyled",componentId:"sc-cdcba703-0"})`
  display: grid;
  margin-inline: -16px;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      margin-inline: -16px;
    `,"group2")};
`,sy=({content:e=[],testId:t="arkansas",title:i,sectionTitleProps:o,dataset:n})=>{let l=(0,to.useDarkMode)(),[r]=e,s=o?.link;return r?(0,a.jsxs)(a.Fragment,{children:[!!i&&(0,a.jsx)(i7.default,{isFullWidth:!0,isInverse:l,title:i,variant:"default",href:s}),(0,a.jsx)(sf,{"data-testid":`${t}`,...n,children:(0,a.jsx)(ag.default,{type:"ashford",...r})})]}):null},sh=(0,a3.forwardLayout)(e=>(0,a.jsx)(a7.default,{marginTop:48,marginBottom:48,group2:{marginTop:32,marginBottom:32},children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:1,colSpan:24,group2:{colStart:1,colSpan:12},children:(0,a.jsx)(sy,{...e})})})}));var sx=e.i(730943);let sb=j.default.div.withConfig({displayName:"Maryland.styles__MarylandStyled",componentId:"sc-eea63726-0"})`
  display: grid;
  width: 100%;
`,sS=j.default.div.withConfig({displayName:"Maryland.styles__MarylandContentStyled",componentId:"sc-eea63726-1"})`
  display: flex;
  overflow: scroll;
  column-gap: 16px;
  scroll-snap-type: x proximity;

  /* hide scrollbar for firefox */
  scrollbar-width: none;

  /* hide scrollbar for webkit browsers */
  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    flex-shrink: 0;
    scroll-snap-align: start;
  }
`,sv=j.default.div.withConfig({displayName:"Maryland.styles__MarylandChevronsContainerStyled",componentId:"sc-eea63726-2"})`
  padding-block: 8px 0;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      padding-block: 0;
    `,"group2")};
`,sw=({content:e=[],testId:i="maryland",title:o,sectionTitleProps:n,dataset:l})=>{let r=(0,t.useRef)(null),s=(0,t.useRef)(null),d=n?.link,{isLeftScrollAvailable:p,isRightScrollAvailable:c,isControlRefMounted:u,handleArrowClick:g}=sZ(r,s);return(0,a.jsxs)(sb,{"data-testid":`${i}-grid`,children:[(0,a.jsx)(i7.default,{isInverse:!0,isFullWidth:!0,hasControlButtons:!0,title:o,href:d,controlButtonsPortalRef:s,variant:"default"}),u&&s.current&&(0,a.jsx)(a.Fragment,{children:(0,sx.createPortal)((0,a.jsx)(sv,{children:(0,a.jsx)(l2.default,{isInverse:!0,isSponsored:!1,variant:"maryland",handleArrowClick:g,isLeftArrowDisabled:!p,isRightArrowDisabled:!c})}),s.current)}),(0,a.jsx)(sS,{ref:r,...l,children:e.map((e,t)=>(0,a.jsx)(ag.default,{...e,type:"maidstone",isRenderedInCarousel:!0,itemPosition:t},t))})]})},s$=(0,a3.forwardLayout)(e=>(0,a.jsx)(a7.default,{isInverse:!0,marginTop:48,marginBottom:48,group2:{marginTop:32,marginBottom:32},children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:1,colSpan:24,group2:{colStart:1,colSpan:12},children:(0,a.jsx)(sw,{...e})})})})),sj=j.default.div.withConfig({displayName:"Michigan.styles__MichiganStyled",componentId:"sc-8943917d-0"})`
  display: grid;
  width: 100%;
`,sk=j.default.div.withConfig({displayName:"Michigan.styles__MichiganContentStyled",componentId:"sc-8943917d-1"})`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  column-gap: 12px;
  overflow-anchor: none;
  direction: ltr;
  scroll-snap-type: x proximity;

  /* hide scrollbar for firefox */
  scrollbar-width: none;

  /* hide scrollbar for webkit browsers */
  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    flex-shrink: 0;
    scroll-snap-align: start;
  }
`,sC=j.default.div.withConfig({displayName:"Michigan.styles__MichiganChevronsContainerStyled",componentId:"sc-8943917d-2"})`
  padding-block: 8px 0;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      padding-block: 0;
    `,"group2")};
`,s_=t.useLayoutEffect,sI=({content:e=[],testId:i="michigan",title:o,sectionTitleProps:n,dataset:l})=>{let r=(0,t.useRef)(null),s=(0,t.useRef)(null),d=n?.link,p=(0,Y.useMediaProgress)((0,sl.getIdsFromContent)(e));s_(()=>{let e,t=r.current;if(!t)return;let a=()=>{t.scrollTo({left:0,behavior:"auto"})};a();let i=window.requestAnimationFrame(()=>{a()}),o=window.requestAnimationFrame(()=>{e=window.requestAnimationFrame(a)});return()=>{window.cancelAnimationFrame(i),window.cancelAnimationFrame(o),void 0!==e&&window.cancelAnimationFrame(e)}},[e.map((e,t)=>e.id||t).join("|")]);let{isLeftScrollAvailable:c,isRightScrollAvailable:u,isControlRefMounted:g,handleArrowClick:m}=sZ(r,s);return(0,a.jsxs)(sj,{"data-testid":`${i}-grid`,children:[(0,a.jsx)(i7.default,{isInverse:!0,isFullWidth:!0,hasControlButtons:!0,title:o,href:d,controlButtonsPortalRef:s,variant:"default"}),g&&s.current&&(0,a.jsx)(a.Fragment,{children:(0,sx.createPortal)((0,a.jsx)(sC,{children:(0,a.jsx)(l2.default,{isInverse:!0,isSponsored:!1,variant:"michigan",handleArrowClick:m,isLeftArrowDisabled:!c,isRightArrowDisabled:!u})}),s.current)}),(0,a.jsx)(sk,{ref:r,...l,children:e.map((e,t)=>{let{id:i,metadata:o,...n}=e,l=(0,sr.extendMetadata)(o,p,i);return(0,a.jsx)(ag.default,{id:i,type:"milton",metadata:l,...n,itemPosition:t},t)})})]})},sT=(0,a3.forwardLayout)(e=>(0,a.jsx)(a7.default,{isInverse:!0,marginTop:48,marginBottom:48,group2:{marginTop:32,marginBottom:32},children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:1,colSpan:24,group2:{colStart:1,colSpan:12},children:(0,a.jsx)(sI,{...e})})})})),sB=j.default.div.withConfig({displayName:"NewMexico.styles__NewMexicoStyled",componentId:"sc-500dd416-0"})`
  display: grid;
`,sN=j.default.div.withConfig({displayName:"NewMexico.styles__NewMexicoContentStyled",componentId:"sc-500dd416-1"})`
  display: flex;
  overflow: scroll;
  column-gap: 16px;
  scroll-snap-type: x proximity;

  /* hide scrollbar for firefox */
  scrollbar-width: none;

  /* hide scrollbar for webkit browsers */
  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    flex-shrink: 0;
    scroll-snap-align: start;
  }
`,sA=j.default.div.withConfig({displayName:"NewMexico.styles__NewMexicoChevronsContainerStyled",componentId:"sc-500dd416-2"})`
  padding-block: 8px 0;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      padding-block: 0;
    `,"group2")};
`,sL=e=>{let{content:i=[],testId:o="newmexico",title:n,sectionTitleProps:l,dataset:r}=e,s=l?.link,d=(0,t.useRef)(null),p=(0,t.useRef)(null),{isLeftScrollAvailable:c,isRightScrollAvailable:u,isControlRefMounted:g,handleArrowClick:m}=sZ(d,p);return(0,a.jsxs)(sB,{"data-testid":`${o}-grid`,children:[(0,a.jsx)(i7.default,{isInverse:!0,isFullWidth:!0,hasControlButtons:!0,title:n,href:s,controlButtonsPortalRef:p,variant:"default"}),g&&p.current&&(0,a.jsx)(a.Fragment,{children:(0,sx.createPortal)((0,a.jsx)(sA,{children:(0,a.jsx)(l2.default,{isInverse:!0,isSponsored:!1,variant:"newmexico",handleArrowClick:m,isLeftArrowDisabled:!c,isRightArrowDisabled:!u})}),p.current)}),(0,a.jsx)(sN,{ref:d,...r,children:i.map((e,a)=>(0,t.createElement)(ag.default,{...e,isInverse:!0,isRenderedInCarousel:!0,type:"worcester",key:a,itemPosition:a}))})]})},sF=(0,a3.forwardLayout)(e=>(0,a.jsx)(a7.default,{isInverse:!0,marginTop:48,marginBottom:48,group2:{marginTop:32,marginBottom:32},children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:1,colSpan:24,group2:{colStart:1,colSpan:12},children:(0,a.jsx)(sL,{...e})})})}));var sP=e.i(458810),sE=e.i(521670);let sM=j.default.div.withConfig({displayName:"MaidstoneCardSkeleton.styles__MaidstoneSkeletonMediaStyled",componentId:"sc-f0ea8e72-0"})`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
`,sR=j.default.div.withConfig({displayName:"MaidstoneCardSkeleton.styles__MaidstoneSkeletonTextStyled",componentId:"sc-f0ea8e72-1"})`
  ${({$isContentRevealing:e,theme:t})=>j.css`
    visibility: ${e?"hidden":"visible"};
    display: grid;
    row-gap: 6px;
    align-content: start;

    /* Apply the title typography so the bar's 1lh height matches a real title
       line. We don't reserve a fixed clamp height here — the real maidstone
       title isn't clamped, so its height varies per card. */
    ${(0,C.applyTypography)(t.promoHeadline.xSmall.default.bpLarge)};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${(0,C.applyTypography)(t.promoHeadline.xSmall.default.bpSmall)};
      `,"group2")}
  `}
`,sD=({isInverse:e=!1,isContentRevealing:t=!1})=>(0,a.jsxs)(sE.SkeletonCardStyled,{"aria-hidden":"true",children:[(0,a.jsx)(sM,{children:(0,a.jsx)(sE.SkeletonBlockStyled,{$height:"100%",$isInverse:e})}),(0,a.jsx)(sR,{$isContentRevealing:t,children:(0,a.jsx)(sE.SkeletonBlockStyled,{$height:"calc(1lh - 6px)",$width:"70%",$isInverse:e})})]}),sO=j.default.div.withConfig({displayName:"WrexhamCardSkeleton.styles__WrexhamSkeletonStyled",componentId:"sc-b8adac42-0"})`
  ${({$isInverse:e,theme:t})=>j.css`
    display: grid;
    grid-template-columns: 300px minmax(0, 1fr);
    column-gap: 24px; /* stylelint-disable-line plugin/no-unsupported-browser-features */
    row-gap: 12px;
    align-items: start;
    padding-bottom: 24px;
    border-bottom: 1px solid
      ${e?t.divider.onInverseBG.lowEmphasis.value:t.divider.lowEmphasis.value};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        grid-template-columns: 160px minmax(0, 1fr);
        column-gap: 8px; /* stylelint-disable-line plugin/no-unsupported-browser-features */
        row-gap: 16px;
        padding-bottom: 12px;
      `,"group2")};
  `};
`,sG=j.default.div.withConfig({displayName:"WrexhamCardSkeleton.styles__WrexhamSkeletonMediaStyled",componentId:"sc-b8adac42-1"})`
  grid-row: 1 / -1;
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
`,sH=j.default.div.withConfig({displayName:"WrexhamCardSkeleton.styles__WrexhamSkeletonTextStyled",componentId:"sc-b8adac42-2"})`
  ${({$isContentRevealing:e})=>j.css`
    visibility: ${e?"hidden":"visible"};
    display: grid;
    row-gap: 8px;
    align-content: start;
  `}
`,sz=j.default.div.withConfig({displayName:"WrexhamCardSkeleton.styles__WrexhamSkeletonStatusStyled",componentId:"sc-b8adac42-3"})`
  height: 24px;
`,sU=({isInverse:e=!1,isContentRevealing:t=!1})=>(0,a.jsx)(sE.SkeletonCardStyled,{"aria-hidden":"true",children:(0,a.jsxs)(sO,{$isInverse:e,children:[(0,a.jsx)(sG,{children:(0,a.jsx)(sE.SkeletonBlockStyled,{$height:"100%",$isInverse:e})}),(0,a.jsxs)(sH,{$isContentRevealing:t,children:[(0,a.jsx)(sE.SkeletonBlockStyled,{$height:"20px",$width:"80%",$isInverse:e}),(0,a.jsx)(sE.SkeletonBlockStyled,{$height:"20px",$width:"55%",$isInverse:e}),(0,a.jsx)(sz,{children:(0,a.jsx)(sE.SkeletonBlockStyled,{$height:"100%",$width:"40%",$isInverse:e})})]})]})});var sW=e.i(440695);let sV=j.default.ol.withConfig({displayName:"VirginIslands.styles__VirginIslandsGridStyled",componentId:"sc-5b5902fd-0"})`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  max-width: 1248px;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      grid-template-columns: repeat(3, 1fr);
    `,"group4")}

  ${(0,k.applyStylesForBreakpoints)(j.css`
      grid-template-columns: repeat(2, 1fr);
    `,"group3")}

  ${(0,k.applyStylesForBreakpoints)(j.css`
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
    `,"group2")}
`,sY=j.default.div.withConfig({displayName:"VirginIslands.styles__VirginIslandsPaginationWrapperStyled",componentId:"sc-5b5902fd-1"})`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  margin-bottom: 48px;
`,sq=(0,tM.withCMSFallback)(({content:e=[],testId:i="VirginIslands",paginationData:o={},collectionId:n,title:l,isInverse:r=!0,sectionTitleProps:s,dataset:d})=>{let p=s?.link,c=(0,t.useRef)(null),g=(0,u.useFeatureFlag)("infinite-scroll-virgin-islands"),m=(0,u.useFeatureFlag)("legacy-api"),[f]=(0,ez.useBreakpoints)("VirginIslands"),y=["group1","group2"].includes(f),{total:h,pageSize:x}=o,b=Math.min(e.length,x,12),{results:v,isLoading:w,currentPage:$,handlePageChange:j}=(0,sP.useCollectionPagination)(`content-collection/${n}`,{isLegacyApiEnabled:m},{pageSize:b,collectionRef:c});if(!g){let o=(v||e).slice(0,b),n=Math.ceil(h/b)>1;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i7.default,{isInverse:r,isFullWidth:!0,hasControlButtons:!0,title:l,variant:"default",href:p}),w?(0,a.jsx)(lv.default,{isInverse:r}):(0,a.jsx)(sV,{ref:c,"data-testid":`${i}-grid`,...d,children:o.map((e,a)=>(0,t.createElement)(ag.default,{...e,type:y?"wrexham":"maidstone",isInverse:r,key:a,itemPosition:a}))}),n&&(0,a.jsx)(sY,{"data-testid":`${i}-pagination`,children:(0,a.jsx)(S.Pagination,{currentPage:$+1,onPageChange:e=>j(e-1),itemsTotalCount:h||0,itemsPerPage:b,pageRangeDisplayed:6,isInverse:r})})]})}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i7.default,{isInverse:r,isFullWidth:!0,hasControlButtons:!0,title:l,variant:"default",href:p}),(0,a.jsx)(sW.default,{collectionId:n,content:e,paginationData:o,grid:sV,renderItem:(e,t)=>(0,a.jsx)(ag.default,{...e,type:y?"wrexham":"maidstone",isInverse:r,itemPosition:t}),renderSkeleton:({isContentRevealing:e})=>y?(0,a.jsx)(sU,{isInverse:r,isContentRevealing:e}):(0,a.jsx)(sD,{isInverse:r,isContentRevealing:e}),isInverse:r,testId:i,dataset:d})]})}),sQ=(0,a3.forwardLayout)(e=>(0,a.jsx)(a7.default,{isInverse:!0,marginTop:48,marginBottom:48,group2:{marginTop:32,marginBottom:32},children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:1,colSpan:24,group2:{colStart:1,colSpan:12},children:(0,a.jsx)(sq,{...e})})})})),sX=(0,t.createContext)({arkansas:sh,maryland:s$,michigan:sT,newmexico:sF,virginislands:sQ}),{Provider:sK}=sX;function sZ(e,a){let[i,o]=(0,t.useState)(!1),{scrollStatus:n,onArrowClick:l}=(0,lq.useScrollSnap)(e),{isLeftScrollAvailable:r,isRightScrollAvailable:s}=n;return(0,t.useEffect)(()=>{o(!!a.current)},[a]),{isControlRefMounted:i,isLeftScrollAvailable:r,isRightScrollAvailable:s,handleArrowClick:e=>l(e)}}let sJ=e=>{let{type:i,content:o=[],sectionTitleProps:n,fetchKey:l}=e,{emptyContentComponent:r,content:s}=sm(i,l),d=s.length?s:o,p=(0,t.useContext)(sX)[i],c=!!p&&!!d.length,{dataset:u}=(0,a8.useAnalyticsGroupProperties)({...e,link:n?.link});!function(e,t){let{type:a,content:i=[],sectionNumber:o}=e,{setEagerImages:n}=(0,sn.useEagerImages)();if(o&&o<3&&t){let e=("arkansas"===a?i[0]?.images?.map(e=>e.model?.blocks?.src).filter(e=>void 0!==e):i?.map(e=>e?.image?.model?.blocks?.src).filter(e=>void 0!==e))||[];n(["newmexico","arkansas"].includes(a)?e.map(e=>e.replace("{recipe}","480xn")):e.map(e=>e.replace("{recipe}","480x270")))}}(e,c);let g={...e,content:d};return c?(0,a.jsx)(p,{layout:"single-column",...g,dataset:u}):null},s0=(0,t.createContext)({}),{Provider:s1}=s0,s2=({children:e,value:t})=>(0,a.jsx)(s1,{value:t,children:e}),s4=[],s6=({journey:e})=>{let i=(0,t.useContext)(s0),[o,n,l]=(0,e$.default)(i[e],s4);return o?(0,a.jsx)(o,{onSubmit:n,onError:l}):null};var s3=e.i(705832);let s8=({section:e,sectionNumber:t,worldNewsTvPath:i,worldNewsData:o=[],worldNewsServiceId:l="",isLivePage:r=!1,isNested:s=!1,isRadioPlayPage:d=!1})=>{let p=(0,te.useCurrentSlug)(),{type:c,incrementedType:u,model:g={}}=e;switch(c){case"wntv":return(0,a.jsx)(s7,{worldNews:o,serviceId:l});case"video-card":{let t=!!p&&"glastonbury-live"===p[p.length-1];return(0,a.jsx)(S.PlayableStandalone,{videoCard:e,isGlastonbury:t})}case"doncaster-card":return(0,a.jsx)(s3.SectionOuterStyled,{$isInverse:!0,"data-testid":"obituary-section-outer",children:(0,a.jsx)(s3.SectionStyled,{"data-testid":"obituary-section",children:(0,a.jsx)(S.Obituary,{data:e})})});case"electionbanner":return null;case"non-playable-card":if(!i)return null;return(0,a.jsx)(S.NonPlayableSection,{worldNewsTvPath:i,worldNews:o,isLivePage:r,itemPosition:t});case"advertisement":{let e=u?.startsWith("mid");return u?(0,a.jsx)(n.default,{type:u,showPlaceholder:e}):null}case"custom-component":{let{model:t}=e,{customComponentName:i}=t;return i?(0,a.jsx)(s3.SectionStyled,{children:(0,a.jsx)(v.GridStyled,{$margin:["16px","16px","16px","16px","16px","16px"],children:(0,a.jsx)(so,{id:i})})}):null}case"webform":{let{model:{journey:t}}=e;return(0,a.jsx)(s3.SectionStyled,{children:(0,a.jsx)(v.GridStyled,{$margin:["16px","16px","16px","16px","16px","16px"],children:(0,a.jsx)(s6,{journey:t})})})}case"headline":case"image":case"paragraph":case"unorderedList":case"accordion":return(0,a.jsx)(oB,{blocks:[{type:c,model:g}],layout:"single-column"});case"alabama":return s?(0,a.jsx)(se,{sectionNumber:t,type:c,model:g,isNested:s}):null;case"louisiana":case"minnesota":case"missouri":case"rhodeisland":return(0,a.jsx)(se,{sectionNumber:t,type:c,model:g});case"newhampshire":return r?null:(0,a.jsx)(se,{sectionNumber:t,type:c,model:g,isNested:s,isContained:d});case"arkansas":case"maryland":case"newmexico":case"michigan":case"virginislands":return(0,a.jsx)(sJ,{sectionNumber:t,...e});default:return(0,a.jsx)(s5,{sectionNumber:t,...e})}},s5=({sectionNumber:e,type:t,collectionId:i,content:o,innerCollections:n,title:l,summary:r,paginationData:s,adBlock:d,style:p,isSponsored:c,isAutoPlayDisabled:u,sectionTitleProps:g,playlistMode:m,fetchKey:f,cta:y})=>{let{emptyContentComponent:x,content:b}=sm(t,f),S=0===e,v="hawaii"===t,w="alaska"===t,$=b.length?b:o,j=a6.SECTIONS_WITH_LAYOUT.includes(t)?ir:h.default,{setEagerImages:k}=(0,sn.useEagerImages)();return S&&k($?.map(e=>e?.image?.model?.blocks?.src).filter(e=>void 0!==e)),(0,a.jsx)(j,{layout:"single-column",sectionNumber:e,type:t,content:$,innerCollections:n,collectionId:i,paginationData:s,title:!S||v?l:"",summary:r,sectionTitleProps:g,hasHorizontalLine:!S||S&&w,adBlock:d,style:p,isSponsored:c,isAutoPlayDisabled:u,playlistMode:m,fetchKey:f,emptyContentComponent:x,cta:y})},s7=e=>(0,a.jsx)(s3.SectionStyled,{as:"section",$withPaddingBottom:!0,"data-testid":"pwntv-section",children:(0,a.jsx)(S.PlayableWorldNews,{...e})}),s9=j.default.article.withConfig({displayName:"IndexPage.styles__IndexPageArticleStyled",componentId:"sc-1de4b86e-0"})`
  ${({theme:e,$isDarkPage:t,$isHomePage:a})=>j.css`
    ${t&&j.css`
      background-color: ${e.container.onInverseBG2.value};
    `}

    // remove top margin for first section
    & > section:first-of-type {
      margin-top: 0;
    }

    // add margin for first section if no page title (select first section after ad unit)
    & > div:first-child + section {
      margin-top: 24px;

      ${a&&(0,k.applyStylesForBreakpoints)(j.css`
          margin-top: 0;
        `,"group2")};
    }
  `}
`,de=({title:e,sections:i,mainNavigation:o,worldNewsTvPath:l,worldNewsData:r,worldNewsServiceId:s="",hideBannerAdvert:d,isPreCurated:p})=>{let c=(0,te.useCurrentSlug)(),u=(0,tn.useIsAdsServiceEnabled)(),g=(0,to.useDarkMode)(),[m,f]=c,y=m===la.BASE_SLUG,h="live"===m,x="audio"===m&&(i.some(({type:e})=>"minnesota"===e)||"stations"===f||"schedules"===f),b=f&&("categories"===f||"category"===f),{data:S}=r,v=!y&&!h&&"video"!==m&&!x,w=ig(i),$=(0,t.useCallback)((e,t=null)=>{let o=i.find(({type:t})=>t===e),n=i.findIndex(({type:t})=>t===e),r="newhampshire"!==e||h;return o?(0,a.jsx)(s8,{section:o,sectionNumber:n,worldNewsTvPath:l,worldNewsData:S,worldNewsServiceId:s,isLivePage:r,isNested:!0,...t?{...t}:{}},n):null},[i,l,S,s,h]),j=(0,t.useRef)(null),k=(0,t.useRef)(!1),C=(0,t.useRef)(!d&&v),[_,I]=(0,ez.useBreakpoints)("IndexPage");return(0,t.useEffect)(()=>{let e=u&&!d&&v;b&&(e=e&&"group1"!==_&&"group2"!==_),null!==u&&j.current&&(u&&I&&e&&!k.current&&j.current&&(j.current.requestAd(),k.current=!0),u&&(!C.current||e)||j.current.closePlaceholder())},[_,u]),(0,a.jsx)(lT,{value:r5,children:(0,a.jsxs)(s9,{$isDarkPage:g,$isHomePage:y,children:[(0,a.jsx)(n.default,{type:"top",deferRequest:!0,forwardedAdRef:j,showPlaceholder:C.current}),(0,a.jsx)(tI,{isPreCurated:p,title:e,mainNavigation:o}),w&&(0,a.jsx)(ix,{data:w}),(0,a.jsx)(r7.default,{value:$,children:i.map((e,t)=>(0,a.jsx)(s8,{section:e,sectionNumber:t,worldNewsTvPath:l,worldNewsData:S,worldNewsServiceId:s,isLivePage:h,isRadioPlayPage:x},t))})]})})};var dt=e.i(474085),da=e.i(120012);let di=j.css`
  min-width: fit-content;
  grid-template-rows: min-content minmax(0, 1fr);
  ${(0,k.applyStylesForBreakpoints)(j.css`
      grid-template-rows: unset;
    `,"group4")};
`,dn=j.default.section.withConfig({displayName:"HeroSection.styles__HeroSectionTextContainerStyled",componentId:"sc-b72c52b4-0"})`
  ${({$isInverse:e,theme:t})=>j.css`
    color: ${e?t.text.onInverseBG.default.value:t.text.default.value};
    background-color: ${e?t.interactiveInnner.onDefaultBG.value:t.interactiveInnner.onInverseBG.value};
  `}
`,dl=j.default.div.withConfig({displayName:"HeroSection.styles__LeftContainerStyled",componentId:"sc-b72c52b4-1"})`
  display: grid;
  align-items: center;
  height: 100%;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      padding: 16px;
      height: auto;
    `,"group3")}
`,dr=j.default.h1.withConfig({displayName:"HeroSection.styles__HeadlineStyled",componentId:"sc-b72c52b4-2"})`
  ${({theme:e,$isInverse:t})=>j.css`
    ${(0,C.applyTypography)(e.promoHeadline.extraLargelight.default.bpLarge)};
    text-align: center;
    color: ${t?e.text.onInverseBG.default.value:e.text.default.value};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${(0,C.applyTypography)(e.promoHeadline.extraLargelight.default.bpSmall)};
        margin-top: 16px;
      `,"group4")}
  `}
`,ds=j.default.div.withConfig({displayName:"HeroSection.styles__DescriptionStyled",componentId:"sc-b72c52b4-3"})`
  ${({theme:e,$isInverse:t})=>j.css`
    text-align: center;
    margin: 16px 0;
    color: ${t?e.text.onInverseBG.default.value:e.text.default.value};
    ${(0,C.applyTypography)(e.generic.info1.default.bpLarge)};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${(0,C.applyTypography)(e.generic.info1.default.bpSmall)};
      `,"group4")}
  `}
`,dd=j.default.div.withConfig({displayName:"HeroSection.styles__AppStoreWrapper",componentId:"sc-b72c52b4-4"})`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 16px;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,"group1")}
`,dp=j.default.div.withConfig({displayName:"HeroSection.styles__IconWrapperStyled",componentId:"sc-b72c52b4-5"})`
  ${({$width:e})=>j.css`
    height: 47px;
    ${e&&j.css`
      width: ${e}px;
    `}
  `}
`,dc=j.default.div.withConfig({displayName:"HeroSection.styles__RightContainerStyled",componentId:"sc-b72c52b4-6"})`
  position: relative;
  height: 100%;
  width: 100%;

  img {
    object-position: center center;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
  }

  ${(0,k.applyStylesForBreakpoints)(j.css`
      margin: 0;
    `,"group2")}
`,du=j.default.div.withConfig({displayName:"HeroSection.styles__QRWrapperStyled",componentId:"sc-b72c52b4-7"})`
  width: 99px;
  height: 99px;
  margin: 0 auto;
  margin-top: 32px;
`,dg=j.default.img.withConfig({displayName:"HeroSection.styles__QrImageStyled",componentId:"sc-b72c52b4-8"})`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  display: block;
`,dm=j.default.img.withConfig({displayName:"HeroSection.styles__BadgeImageStyled",componentId:"sc-b72c52b4-9"})`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`,df=({headline:e,supportingCopy:t,desktopQrCaption:i,image:o,qrImage:n,storeCtas:l,isInverse:r=!1,testId:s=""})=>{let[d]=(0,ez.useBreakpoints)("HeroSection"),p=["group1","group2","group3","group4"].includes(d),c=!!l?.appStore?.badgeImage.src,u=!!l?.googlePlay?.badgeImage.src,g=!!n?.src;return(0,a.jsx)(dn,{$isInverse:r,children:(0,a.jsxs)(a9.default,{testId:`${s}acquisition-grid`,isNested:!0,columns:24,group3:{columns:12},extraStyles:di,children:[(0,a.jsx)(ie.default,{colStart:1,colSpan:12,group3:{colStart:1,colSpan:12},children:(0,a.jsx)(dl,{children:(0,a.jsx)(a9.default,{columns:12,group2:{columns:12},children:(0,a.jsxs)(ie.default,{colStart:3,colSpan:8,group4:{colStart:2,colSpan:10},group2:{colStart:1,colSpan:12},children:[(0,a.jsx)(dr,{$isInverse:r,children:e}),(0,a.jsx)(ds,{$isInverse:r,children:t}),p?(0,a.jsxs)(dd,{children:[c&&(0,a.jsx)(b.default,{href:l?.appStore?.href,linkType:"external",ariaLabel:l?.appStore?.badgeImage.altText,children:(0,a.jsx)(dp,{$width:147,children:(0,a.jsx)(dm,{src:i$.publicAssetsPrefixer.prefixAsset(l.appStore.badgeImage.src),alt:l?.appStore?.badgeImage.altText})})}),u&&(0,a.jsx)(b.default,{href:l?.googlePlay?.href,linkType:"external",ariaLabel:l?.googlePlay?.badgeImage.altText,children:(0,a.jsx)(dp,{$width:165,children:(0,a.jsx)(dm,{src:i$.publicAssetsPrefixer.prefixAsset(l.googlePlay.badgeImage.src),alt:l?.googlePlay?.badgeImage.altText})})})]}):g&&(0,a.jsx)(du,{children:(0,a.jsx)(dg,{src:i$.publicAssetsPrefixer.prefixAsset(n.src),alt:n?.altText,loading:"lazy"})}),!p&&i&&(0,a.jsx)(ds,{$isInverse:r,children:i})]})})})}),(0,a.jsx)(ie.default,{rowStart:1,colStart:13,colSpan:12,group3:{colStart:1,colSpan:12},children:(0,a.jsx)(dc,{"data-testid":"hero-media-wrapper",children:(0,a.jsx)(da.ImageStyled,{src:i$.publicAssetsPrefixer.prefixAsset(o.src),alt:o.altText,loading:"lazy","data-testid":`${s}acquisition-image`})})})]})})},dy=j.default.div.withConfig({displayName:"AcquisitionPage.styles__AcquisitionPageContainer",componentId:"sc-f5fbc8a4-0"})`
  display: grid;
`,dh=j.default.section.withConfig({displayName:"CtaBanner.styles__CtaBannerContainerStyled",componentId:"sc-42b773e5-0"})`
  ${({$isInverse:e,theme:t})=>j.css`
    background-color: ${e?t.interactiveInnner.onDefaultBG.value:t.interactiveInnner.onInverseBG.value};
    display: grid;
    align-items: center;
    text-align: center;
    padding: 16px;
  `}
`,dx=j.default.h2.withConfig({displayName:"CtaBanner.styles__SubtitleStyled",componentId:"sc-42b773e5-1"})`
  ${({$isInverse:e,theme:t})=>j.css`
    ${(0,C.applyTypography)(t.promoHeadline.extraLargelight.default.bpLarge)};
    color: ${e?t.text.onInverseBG.default.value:t.text.default.value};
    margin-top: 32px;

    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${(0,C.applyTypography)(t.promoHeadline.extraLargelight.default.bpSmall)};
      `,"group2")}
  `}
`,db=j.default.p.withConfig({displayName:"CtaBanner.styles__SupportingTextStyled",componentId:"sc-42b773e5-2"})`
  ${({$isInverse:e,theme:t})=>j.css`
    ${(0,C.applyTypography)(t.generic.info1.default.bpLarge)};
    color: ${e?t.text.onInverseBG.default.value:t.text.default.value};
    margin-top: 16px;

    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${(0,C.applyTypography)(t.generic.info1.default.bpSmall)};
      `,"group2")}
  `}
`,dS=j.default.div.withConfig({displayName:"CtaBanner.styles__BadgesWrapperStyled",componentId:"sc-42b773e5-3"})`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 32px;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      flex-direction: column;
      margin-top: 20px;
    `,"group1")}
`,dv=j.default.div.withConfig({displayName:"CtaBanner.styles__IconWrapperStyled",componentId:"sc-42b773e5-4"})`
  ${({$width:e})=>j.css`
    height: 47px;
    ${e&&j.css`
      width: ${e}px;
    `}
  `}
`,dw=j.default.img.withConfig({displayName:"CtaBanner.styles__BadgeImageStyled",componentId:"sc-42b773e5-5"})`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`,d$=({subtitle:e,supportingText:t,storeCtas:i,isInverse:o=!1})=>(0,a.jsxs)(dh,{$isInverse:o,"data-testid":"cta-banner-container",children:[(0,a.jsx)(dx,{$isInverse:o,"data-testid":"cta-banner-subtitle",children:e}),(0,a.jsx)(db,{$isInverse:o,children:t}),(0,a.jsxs)(dS,{"data-testid":"cta-banner-badges",children:[(0,a.jsx)(b.default,{href:i.appStore.href,linkType:"external",ariaLabel:i.appStore.badgeImage.altText,children:(0,a.jsx)(dv,{$width:147,children:(0,a.jsx)(dw,{src:i$.publicAssetsPrefixer.prefixAsset(i.appStore.badgeImage.src),alt:i.appStore.badgeImage.altText})})}),(0,a.jsx)(b.default,{href:i.googlePlay.href,linkType:"external",ariaLabel:i.googlePlay.badgeImage.altText,children:(0,a.jsx)(dv,{$width:165,children:(0,a.jsx)(dw,{src:i$.publicAssetsPrefixer.prefixAsset(i.googlePlay.badgeImage.src),alt:i.googlePlay.badgeImage.altText})})})]})]}),dj=j.default.section.withConfig({displayName:"VerticalList.styles__VerticalListStyled",componentId:"sc-57208f60-0"})`
  ${({$isInverse:e,theme:t})=>j.css`
    color: ${e?t.text.onInverseBG.default.value:t.text.default.value};
    background-color: ${e?t.interactiveInnner.onDefaultBG.value:t.interactiveInnner.onInverseBG.value};
  `}
`,dk=j.css`
  min-width: fit-content;
  margin: 16px 0;
`,dC=j.default.ul.withConfig({displayName:"VerticalList.styles__ListStyled",componentId:"sc-57208f60-1"})`
  display: grid;
  gap: 0;
  list-style: none;
  margin-block-end: 16px;
  margin-block-start: 16px;
  margin-inline-end: 0;
  margin-inline-start: 0;
  padding: 0;
`,d_=j.default.li.withConfig({displayName:"VerticalList.styles__ItemStyled",componentId:"sc-57208f60-2"})`
  display: grid;
  gap: 0 16px;
  grid-template-columns: repeat(12, 1fr);
  margin: 0;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      gap: 0 8px;
    `,"group2")}
`,dI=j.default.hr.withConfig({displayName:"VerticalList.styles__SeparatorStyled",componentId:"sc-57208f60-3"})`
  ${({$isInverse:e,theme:t})=>j.css`
    border: 0;
    border-block-start: 1px solid
      ${e?t.text.onInverseBG.mediumEmphasis.value:t.text.mediumEmphasis.value};
    grid-column: 1 / -1;
    margin: 0;
    width: 100%;
  `}
`,dT=j.css`
  align-self: center;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      inline-size: calc(100% + 32px);
      margin-inline-start: -16px;
    `,"group2")}
`,dB=j.default.div.withConfig({displayName:"VerticalList.styles__ImageWrapperStyled",componentId:"sc-57208f60-4"})`
  aspect-ratio: 1 / 1;
  justify-self: center;
  overflow: hidden;
  width: 100%;
`,dN=j.default.img.withConfig({displayName:"VerticalList.styles__ImageStyled",componentId:"sc-57208f60-5"})`
  display: block;
  height: 100%;
  object-fit: cover;
  object-position: center;
  width: 100%;
`,dA=j.default.div.withConfig({displayName:"VerticalList.styles__ContentStyled",componentId:"sc-57208f60-6"})`
  align-content: center;
  display: grid;
  gap: 8px;
  grid-column: 1 / 12;
  margin-block-end: 16px;
  margin-block-start: 16px;
  margin-inline-end: 0;
  margin-inline-start: 16px;
`,dL=j.default.h3.withConfig({displayName:"VerticalList.styles__TitleStyled",componentId:"sc-57208f60-7"})`
  ${({$isInverse:e,theme:t})=>j.css`
    color: ${e?t.text.onInverseBG.default.value:t.text.default.value};
    ${(0,C.applyTypography)(t.generic.info1.emphasised.bpLarge)};
    margin: 0;

    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${(0,C.applyTypography)(t.generic.info1.emphasised.bpSmall)};
      `,"group4")}
  `}
`,dF=j.default.p.withConfig({displayName:"VerticalList.styles__DescriptionStyled",componentId:"sc-57208f60-8"})`
  ${({$isInverse:e,theme:t})=>j.css`
    color: ${e?t.text.onInverseBG.default.value:t.text.mediumEmphasis.value};
    ${(0,C.applyTypography)(t.generic.info1.default.bpLarge)};
    margin: 0;

    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${(0,C.applyTypography)(t.generic.info1.default.bpSmall)};
      `,"group4")}
  `}
`,dP=({image:e,items:t,isInverse:i=!1,showDescriptions:o=!0})=>(0,a.jsx)(dj,{$isInverse:i,children:(0,a.jsxs)(a9.default,{columns:24,rowGap:0,group2:{columns:12},extraStyles:dk,children:[(0,a.jsx)(ie.default,{colStart:2,colSpan:9,group2:{colStart:1,colSpan:12},extraStyles:dT,children:(0,a.jsx)(dB,{children:(0,a.jsx)(dN,{src:i$.publicAssetsPrefixer.prefixAsset(e.src),alt:e.alt,loading:"lazy"})})}),(0,a.jsx)(ie.default,{colStart:12,colSpan:12,group2:{colStart:1,colSpan:12},children:(0,a.jsx)(dC,{children:t.map(({title:e,description:n},l)=>(0,a.jsxs)(d_,{children:[(0,a.jsxs)(dA,{children:[(0,a.jsx)(dL,{$isInverse:i,children:e}),o&&n&&(0,a.jsx)(dF,{$isInverse:i,children:n})]}),l<t.length-1&&(0,a.jsx)(dI,{$isInverse:i,"aria-hidden":"true"})]},e))})})]})}),dE=({heroContent:e,desktopQrCaption:t,qrImage:i,storeCtas:o,ctaBanner:n,verticalList:l,isInverse:r,testId:s="acquisition-page"})=>{let d;return e?(0,a.jsxs)(dy,{"data-testid":s,children:[(0,a.jsx)(df,{headline:e.title||"",supportingCopy:e.description||"",desktopQrCaption:t,image:(d=e.image,{src:d?.model?.blocks?.src||"",altText:d?.model?.blocks?.altText||""}),qrImage:i,storeCtas:o,isInverse:r}),l&&(0,a.jsx)(dP,{...l,isInverse:l.isInverse??r}),n&&(0,a.jsx)(d$,{...n,isInverse:n.isInverse??r,testId:`${s}-`})]}):null},dM={type:"page",template:"app-acquisition-page",model:{heroSection:{title:"Stay ahead of the story with the BBC app",summary:"Breaking news, features, live coverage, video and podcasts wherever you are. Delivered by our trusted global network of journalists. ",qrImage:{src:"app-acquisition/qr.png",altText:""},storeCtas:{appStore:{href:"https://apps.apple.com/app/apple-store/id364147881?pt=318278&ct=app%20acquisition%20page&mt=8",badgeImage:{src:"app-acquisition/app-store.svg",altText:"Download on the App Store"}},googlePlay:{href:"https://play.google.com/store/apps/details?id=bbc.mobile.news.ww&at_bbc_team=studios&at_medium=onsite&at_objective=appdownload&at_ptr_name=bbc.com&at_format=link&at_link_origin=appacquisitionpage&at_campaign=googleplay&at_campaign_type=owned",badgeImage:{src:"app-acquisition/google-play.svg",altText:"Get it on Google Play"}}},indexImage:{model:{blocks:{src:"app-acquisition/app-acquisition-hero.jpg",altText:"BBC app acquisitions"}}}},ctaBanner:{subtitle:"Download the BBC app today.",supportingText:"Trusted global news, podcasts, videos and live coverage all in one place.",storeCtas:{appStore:{href:"https://apps.apple.com/app/apple-store/id364147881?pt=318278&ct=app%20acquisition%20page&mt=8",badgeImage:{src:"app-acquisition/app-store.svg",altText:"Download on the App Store"}},googlePlay:{href:"https://play.google.com/store/apps/details?id=bbc.mobile.news.ww&at_bbc_team=studios&at_medium=onsite&at_objective=appdownload&at_ptr_name=bbc.com&at_format=link&at_link_origin=appacquisitionpage&at_campaign=googleplay&at_campaign_type=owned",badgeImage:{src:"app-acquisition/google-play.svg",altText:"Get it on Google Play"}}}},verticalList:{image:{src:"app-acquisition/app-acquisition.webp",alt:"BBC app acquisition illustration"},items:[{title:"Breaking news alerts",description:"Be the first to know when major stories unfold with instant notifications."},{title:"Live coverage",description:"Follow news and sport events as they happen with live updates and analysis from BBC correspondents around the world."},{title:"Listen to award-winning BBC audio",description:"Enjoy thousands of podcasts and listen to BBC radio live."},{title:"Stories that go deeper",description:"Explore features and analysis across Travel, Culture, Health and more."},{title:"Watch anywhere",description:"Immerse yourself in a world of captivating videos."}]},isInverse:!1}},dR=()=>(0,a.jsx)(dE,{...(e=>{let{heroSection:t,ctaBanner:a,verticalList:i}=e.model;return{testId:"acquisition-page",heroContent:{title:t.title,description:t.summary,image:t.indexImage},qrImage:t.qrImage,storeCtas:t.storeCtas,ctaBanner:{...a,isInverse:!0},verticalList:{...i,isInverse:!1},isInverse:!0}})(dM)});var dD=e.i(771340),dO=e.i(357391);let dG=j.default.div.withConfig({displayName:"NoutFoundPage.styles__NotFoundTopStyled",componentId:"sc-38310dc4-0"})`
  padding-top: 32px;
  margin-bottom: 48px;
  ${(0,k.applyStylesForBreakpoints)(j.css`
      padding-top: 24px;
      margin-bottom: 32px;
    `,"group2")}
`,dH=j.default.div.withConfig({displayName:"NoutFoundPage.styles__NotFoundDividerStyled",componentId:"sc-38310dc4-1"})`
  ${({theme:e})=>j.css`
    border-bottom: 1px solid ${e.divider.lowEmphasis.value};
  `}
`,dz=j.default.h2.withConfig({displayName:"NoutFoundPage.styles__NotFoundErrorStyled",componentId:"sc-38310dc4-2"})`
  ${({theme:e})=>j.css`
    display: grid;
    ${(0,C.applyTypography)(e.headline.small.bpSmall)};
    color: ${e.text.lowEmphasis.value};
    padding-bottom: 24px;
  `}
`,dU=j.default.h1.withConfig({displayName:"NoutFoundPage.styles__NotFoundSuggestionStyled",componentId:"sc-38310dc4-3"})`
  ${({theme:e})=>j.css`
    ${(0,C.applyTypography)(e.headline.small.bpLarge)};
    color: ${e.text.default.value};
    padding: 24px 0;
    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${(0,C.applyTypography)(e.headline.large.bpSmall)};
      `,"group5")}
    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${(0,C.applyTypography)(e.headline.small.bpSmall)};
      `,"group2")}
  `}
`,dW=j.default.div.withConfig({displayName:"NoutFoundPage.styles__NotFoundInfoStyled",componentId:"sc-38310dc4-4"})`
  margin-bottom: 16px;

  div:first-child {
    display: inline;
  }
  ${({theme:e})=>j.css`
    ${(0,C.applyTypography)(e.bodyCopy.default.bpLarge)};
    a {
      ${(0,C.applyTypography)(e.bodyCopy.links.bpLarge)};
      font-family: ${e.fontFamilies.bbcReithSans};
    }
  `}
`,dV=j.default.div.withConfig({displayName:"NoutFoundPage.styles__NotFoundSearchInputWrapperStyled",componentId:"sc-38310dc4-5"})`
  margin-bottom: 52px;
  ${(0,k.applyStylesForBreakpoints)(j.css`
      margin-bottom: 40px;
    `,"group2")}
`,dY=({recentStories:e,searchText:t,onSearch:i,onSearchTextChange:o})=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ts.ContainerStyled,{$type:"contained",children:(0,a.jsxs)(dG,{children:[(0,a.jsx)(dz,{children:"Error 404 - Oops, the page you're looking for is no longer here"}),(0,a.jsx)(dH,{}),(0,a.jsx)(dU,{children:"Try searching for it instead"}),(0,a.jsx)(dV,{children:(0,a.jsx)(dO.default,{onSearch:i,onSearchTextChange:o,searchText:t})}),(0,a.jsxs)(dW,{children:["We can't find the page you're looking for. If you've typed the URL into your browser, check that you entered it correctly. If you reached this page via our site or search, please let us know by emailing"," ",(0,a.jsx)(b.default,{href:"mailto:comhelp.bbc@bbc.com",children:"comhelp.bbc@bbc.com"}),"."]}),(0,a.jsx)(dW,{children:"Our team will investigate this feedback but will not reply directly."})]})}),!!e.length&&(0,a.jsx)(h.default,{type:"alaska",title:"More from BBC",content:e,testId:"not-found-page-alaska",titleAsHeadingTag:!1})]}),dq=()=>{let e=(0,te.useCurrentSlug)(),{data:t}=(0,o.default)(e),{searchText:i,setSearchText:n,onSearchClick:l}=(0,dD.useSearch)();return(0,a.jsx)(dY,{recentStories:t,onSearch:l,searchText:i,onSearchTextChange:n})},dQ=async e=>{await (0,ic.fetchClient)("form",{method:"POST",body:JSON.stringify(e),isLegacyApiEnabled:!0})},dX={"contact-form":[S.FeedbackForm,dQ]},dK=()=>{let{isSubscriptionAllowed:e}=(0,x.useSubscriptionContext)(),t=(0,te.useCurrentSlug)(),{data:i}=(0,o.default)(t),{data:n=[]}=(0,o.default)("mainNavigation"),{worldNewsData:l,worldNewsServiceId:r,worldNewsTvPath:s}=(0,lS.useWorldNewsData)(),d=(0,dt.useIsAppLayoutEnabled)(),[p,c]=t,{title:u,sections:g,hideBannerAdvert:m,isPreCurated:f}=i;return d&&i.slug&&"docs"===i.slug?(0,a.jsx)(dq,{}):"app"===p?(0,a.jsx)(dR,{}):(0,a.jsxs)(a.Fragment,{children:["video"===p&&"docs"===c&&(0,a.jsx)(lb,{isSubscriptionAllowed:e}),(0,a.jsx)(s2,{value:dX,children:(0,a.jsx)(de,{isPreCurated:f,slug:t,title:u,sections:g,mainNavigation:n,worldNewsTvPath:s,worldNewsData:l,worldNewsServiceId:r,hideBannerAdvert:m})})]})};var dZ=e.i(396141);let dJ=j.default.div.withConfig({displayName:"EpisodeDetails.styles__EpisodeHeadingAreaStyled",componentId:"sc-68b3a754-0"})`
  display: grid;
  grid-template-areas: 'series-heading' 'episode-heading';
  row-gap: 12px;
  margin-bottom: 24px;
`,d0=j.default.h2.withConfig({displayName:"EpisodeDetails.styles__SeriesHeadingStyled",componentId:"sc-68b3a754-1"})`
  ${({theme:e})=>j.css`
    grid-area: series-heading;
    ${(0,C.applyTypography)(e.longFormVideo.secondaryTitle.default.bpLarge)};
    color: ${e.text.onInverseBG.default.value};

    ${(0,k.applyStylesForBreakpoints)((0,C.applyTypography)(e.longFormVideo.secondaryTitle.default.bpSmall),"group2")};
  `};
`,d1=j.default.h1.withConfig({displayName:"EpisodeDetails.styles__EpisodeHeadingStyled",componentId:"sc-68b3a754-2"})`
  ${({theme:e})=>j.css`
    grid-area: episode-heading;
    ${(0,C.applyTypography)(e.longFormVideo.primaryTitle.default.bpLarge)};
    color: ${e.text.onInverseBG.default.value};

    ${(0,k.applyStylesForBreakpoints)((0,C.applyTypography)(e.longFormVideo.primaryTitle.default.bpSmall),"group2")};
  `};
`,d2=j.default.span.withConfig({displayName:"EpisodeDetails.styles__EpisodePrefixHeadingStyled",componentId:"sc-68b3a754-3"})`
  ${({theme:e})=>j.css`
    ${(0,C.applyTypography)(e.longFormVideo.primarySubtitle.default.bpLarge)};
    color: ${e.text.onInverseBG.lowEmpasis.value};

    ${(0,k.applyStylesForBreakpoints)((0,C.applyTypography)(e.longFormVideo.primarySubtitle.default.bpSmall),"group2")};
  `};
`,d4=j.default.div.withConfig({displayName:"EpisodeDetails.styles__ViewSeriesButtonStyled",componentId:"sc-68b3a754-4"})`
  ${({theme:e})=>j.css`
    button {
      ${(0,C.applyTypography)(e.textLink.large.regular.bpLarge)};
      cursor: pointer;
    }
  `};

  margin-bottom: 32px;
  width: fit-content;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      width: 100%;

      button {
        width: 100%;
      }
    `,"group2")};
`,d6=j.default.div.withConfig({displayName:"EpisodeDetails.styles__NextEpisodeButtonStyled",componentId:"sc-68b3a754-5"})`
  ${({theme:e})=>j.css`
    button {
      ${(0,C.applyTypography)(e.textLink.large.regular.bpLarge)};
      cursor: pointer;

      &:hover {
        ${(0,C.applyTypography)(e.textLink.large.linked.bpLarge)};
      }
    }
  `};

  margin-bottom: 32px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      justify-content: flex-start;
    `,"group3")};

  ${(0,k.applyStylesForBreakpoints)(j.css`
      justify-content: flex-end;
    `,"group2")};
`,d3=j.default.p.withConfig({displayName:"EpisodeDetails.styles__EpisodeMetaStyled",componentId:"sc-68b3a754-6"})`
  ${({theme:e,$hasContentWarning:t})=>j.css`
    ${(0,C.applyTypography)(e.metaData.large)};
    color: ${e.text.onInverseBG.lowEmpasis.value};
    display: flex;
    column-gap: 18px;
    margin-bottom: ${t?"4px":"24px"};
  `};
`,d8=j.default.span.withConfig({displayName:"EpisodeDetails.styles__EpisodeMetaItemStyled",componentId:"sc-68b3a754-7"})`
  position: relative;

  &:not(:last-child)::after {
    content: '•';
    position: absolute;
    right: -11px;
  }
`,d5=j.default.p.withConfig({displayName:"EpisodeDetails.styles__EpisodeDescriptionStyled",componentId:"sc-68b3a754-8"})`
  ${({theme:e})=>j.css`
    ${(0,C.applyTypography)(e.bodyCopy.default.bpSmall)};
    color: ${e.text.onInverseBG.default.value};
  `};

  margin-bottom: 16px;
`;j.default.p.withConfig({displayName:"EpisodeDetails.styles__ContentWarningStyled",componentId:"sc-68b3a754-9"})`
  ${({theme:e})=>j.css`
    ${(0,C.applyTypography)(e.metaData.large)};
    color: ${e.text.onInverseBG.lowEmpasis.value};
    margin-bottom: 24px;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 12px 0;

    ${(0,k.applyStylesForBreakpoints)(j.css`
        padding: 12px 16px;
      `,"group2")};

    svg {
      width: 16px;
      height: 16px;
    }
  `};
`;let d7=({mediaMetadataModel:e,series:t})=>{let{prefix:i=""}=e;return(0,a.jsxs)(dJ,{children:[(0,a.jsxs)(d1,{children:[!!i&&(0,a.jsxs)(d2,{children:[e.prefix," "]}),e.title]}),(0,a.jsx)(d0,{children:t.title})]})},d9=({series:e,mediaMetadataModel:t,nextEpisode:i})=>{let o=t.versions[0]?.durationFormatted,n=t.versions[0]?.warning,l=[t.releaseDate,o,t.rating];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d4,{children:(0,a.jsx)(l0.default,{condition:!!e.path,wrapper:t=>(0,a.jsx)(b.default,{href:e.path,children:t}),children:(0,a.jsx)(ec.default,{tabIndex:-1,text:"View series",icon:"common:stack",alt:"View series",type:"ghost",size:"small",isInverse:!0})})}),(0,a.jsx)(d3,{$hasContentWarning:!!n,children:l.map((e,t)=>(0,a.jsx)(d8,{children:e},t))}),(0,a.jsx)(d5,{children:t.synopses.medium}),i?.path&&(0,a.jsx)(d6,{children:(0,a.jsx)(l0.default,{condition:!!i.path,wrapper:e=>(0,a.jsx)(b.default,{href:i.path,children:e}),children:(0,a.jsx)(ec.default,{tabIndex:-1,text:"Next episode",icon:"playback-avkx:play",alt:"Watch next episode",type:"unboxed-share",size:"small",isInverse:!0})})})]})},pe=(0,a3.forwardLayout)(e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ie.default,{colStart:6,colSpan:11,group5:{colStart:4,colSpan:15},group3:{colStart:1,colSpan:21},group2:{colStart:1,colSpan:12},children:(0,a.jsx)(d7,{...e})}),(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group3:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:(0,a.jsx)(d9,{...e})})]}));var pt=e.i(752108),pa=e.i(227162),pi=e.i(395497);let po=e=>{let t=pa.appConfig.getValue(pi.ConfigSettings.SiteUrl)||"localhost",{query:i}=(0,d.useAppRouter)(),{slug:o}=i,n=`${t}${(0,la.getStringFromSlug)(o,!0)}`,{prefix:l="",uploadDate:r,...s}=e,[,p="1",c="1"]=l.match(/S(\d+)E(\d+)/)??[],u=parseInt(p,10),g=parseInt(c,10),m=new Date(r),f=function(e){let{name:t,seriesName:a,seasonNumber:i=1,episodeNumber:o=1,description:n,thumbnailUrl:l,datePublished:r,url:s,duration:d}=e;return{"@context":"https://schema.org","@type":"TVEpisode",name:t,partOfSeason:{"@type":"TVSeason",name:`Series ${i}`},partOfSeries:{"@type":"TVSeries",name:a},episodeNumber:o,description:n,...l?{thumbnailUrl:l}:{},datePublished:r,url:s,duration:d,isAccessibleForFree:!1}}({seasonNumber:u,episodeNumber:g,datePublished:isNaN(m.getTime())?void 0:m.toISOString().slice(0,10),url:n,...s});return(0,a.jsx)(pt.default,{children:(0,a.jsx)(Z.default,{children:(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(f)},id:"tv-episode-schema"})})})};var pn=e.i(275349);let pl=(0,a3.forwardLayout)(({player:e,details:i,isPlayClicked:o})=>{let[n,l]=(0,t.useState)("level3"),r={default:o?24:-170,group5:o?24:-110,group4:o?24:-12,group3:o?24:-25,group2:16};return(0,pn.useBackdropObserver)(e=>l(e?"level2":"level3")),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(a7.default,{as:"section",testId:"video-episode-player-container",marginBottom:r.default,group5:{marginBottom:r.group5},group4:{marginBottom:r.group4},group3:{marginBottom:r.group3},group2:{marginBottom:r.group2},group1:{marginBottom:r.group2},inlineStyles:{transition:"margin-block-end 0.8s cubic-bezier(0.4, 0, 0.2, 1)"},children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},isContained:!1,children:(0,a.jsx)(ie.default,{colStart:1,colSpan:24,group2:{colStart:1,colSpan:12},children:e})})}),(0,a.jsx)(a7.default,{as:"section",withBackground:!1,zIndex:n,children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},isContained:!0,children:i})})]})}),pr=j.default.article.withConfig({displayName:"VideoEpisodePage.styles__VideoEpisodePageStyled",componentId:"sc-c14e420-0"})`
  ${({theme:e})=>j.css`
    background-color: ${e.container.onInverseBG2.value};
  `};
`,ps=e=>{let i,{durationInSeconds:o,mediaMetadataModel:n}=(i=e.blocks[0]?.model,{durationInSeconds:function(e){if("number"==typeof e)return e;if(e&&"string"==typeof e)try{let t=e.split(":");if(3===t.length){let e=parseInt(t[0],10),a=parseInt(t[1],10),i=parseFloat(t[2]);return 3600*e+60*a+Math.floor(i)}}catch{}return 0}(i?.versions[0]?.duration),mediaMetadataModel:i}),[l,r]=(0,t.useState)(!1),s=n.versions[0]?.durationISO8601,d=function(e,t=0){let[a]=(0,Y.useMediaProgress)([e]),i=Math.round(t*q.EARLY_PROGRESS/100),o=Math.round(t*q.LATE_PROGRESS/100),{offset:n=null}=a??{};return null!==n&&Number.isInteger(n)?0===n||n>=o?0:Math.max(n,i):null}(e.id,o);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(po,{name:n.title,seriesName:e.series.title,description:n.synopses.medium,prefix:n.prefix,thumbnailUrl:(n?.imageUrl||"").replace("{recipe}","1024xn"),uploadDate:n.releaseDate,duration:s}),(0,a.jsx)(pr,{"data-testid":"video-episode-page",children:(0,a.jsx)(pl,{layout:"single-column",...e,isPlayClicked:l,player:(0,a.jsx)(dZ.default,{mediaMetadataModel:n,onPlayClick:()=>{r(!0)},onEnded:()=>{r(!1)},startTime:d}),details:(0,a.jsx)(pe,{layout:"single-column",series:e.series,mediaMetadataModel:n,nextEpisode:e.nextEpisode})})})]})},pd=({contents:e})=>{let{model:t}=e.find(({type:e})=>"docs-episode"===e)||{};return t?(0,a.jsx)(ps,{...t}):null};var pp=e.i(588207);let pc=({sources:e,imageUrlTemplate:t,sizes:i="96vw",isDefaultAspectRatio:o=!0,loading:n,fetchPriority:l,webpSupport:r=!0,testId:s,...d})=>{let{os:p={},browser:c={}}=(0,tt.usePageData)(),{getIsEager:u}=(0,sn.useEagerImages)(),g=r&&(0,t0.supportsWebP)({os:p,browser:c}),m=(0,t0.getSrcAndSrcSet)(t,o,g),f=n??(u(m.mainImageSource)?"eager":"lazy");return(0,a.jsxs)("picture",{children:[e.map(e=>{let t=(0,t0.getSrcAndSrcSet)(e.imageUrlTemplate,o,g);return(0,a.jsx)("source",{media:e.media,sizes:e.sizes??i,srcSet:t.srcSet},`${e.media}-${e.imageUrlTemplate}`)}),(0,a.jsx)(da.ImageStyled,{sizes:i,srcSet:m.srcSet,src:m.mainImageSource,loading:f,fetchpriority:l,"data-testid":s,...d})]})};var pu=e.i(195214);function pg(e,t){let[a]=e.filter(({model:{blocks:{type:e}}})=>e===t),{model:i}=a||{},{blocks:o}=i||{};return o||{}}let pm=j.default.div.withConfig({displayName:"HeroImage.styles__HeroImageContainerStyled",componentId:"sc-a0293acd-0"})`
  ${({theme:e})=>j.css`
    width: 100%;
    position: relative;

    img {
      aspect-ratio: 3 / 1;
      object-fit: cover;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        ${e.container.onInverseBG2.value}00 80%,
        ${e.container.onInverseBG2.value}D9 90%,
        ${e.container.onInverseBG2.value} 100%
      );
    }

    ${(0,k.applyStylesForBreakpoints)(j.css`
        img {
          aspect-ratio: 1 / 1;
          object-fit: cover;
        }
      `,"group2")}
  `}
`,pf=j.default.div.withConfig({displayName:"HeroImage.styles__HeroImageFallbackStyled",componentId:"sc-a0293acd-1"})`
  ${({theme:e})=>j.css`
    width: 100%;
    position: relative;
    background-color: ${e.container.onInverseBG.value};
    aspect-ratio: 3 / 1;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        ${e.container.onInverseBG2.value}00 40%,
        ${e.container.onInverseBG2.value} 100%
      );
    }

    ${(0,k.applyStylesForBreakpoints)(j.css`
        aspect-ratio: 1 / 1;
      `,"group2")}
  `}
`;j.default.div.withConfig({displayName:"HeroImage.styles__TitleImageStyled",componentId:"sc-a0293acd-2"})`
  position: absolute;
  bottom: 26px;
`;let py=(0,a3.forwardLayout)(e=>{let{images:t,title:i,seasonNumber:o}=e,n=pg(t,"3:1-background"),l=pg(t,"1:1-square"),r=!n.src&&!l.src,s=`${i} Season ${o}`,d=`(min-width: ${pu.breakpoints.group2[1]+1}px)`,p=l.src||n.src||"";return(0,a.jsx)(a7.default,{children:r?(0,a.jsx)(pf,{}):(0,a.jsx)(pm,{children:(0,a.jsx)(pc,{sources:n.src?[{media:d,imageUrlTemplate:n.src,sizes:"100vw"}]:[],imageUrlTemplate:p,alt:s,isDefaultAspectRatio:!1,sizes:"100vw",loading:"eager",fetchPriority:"high"})})})});var ph=e.i(94476);let px=j.default.div.withConfig({displayName:"TitleImage.styles__TitleImageStyled",componentId:"sc-a6ccda19-0"})`
  ${({theme:e})=>j.css`
    position: relative;
    color: ${e.text.onInverseBG.default.value};

    ${(0,C.applyTypography)(e.audio.brandTitle.large.bpLarge)};

    ${(0,k.applyStylesForBreakpoints)((0,C.applyTypography)(e.audio.brandTitle.large.bpSmall),"group2")};
  `};
`,pb=j.default.div.withConfig({displayName:"TitleImage.styles__ImageWrapper",componentId:"sc-a6ccda19-1"})`
  display: block;

  ${({theme:e})=>(0,k.applyStylesForBreakpoints)(j.css`
        display: none;
      `,"group2")}
`,pS=(0,t.forwardRef)(({images:e,title:i,seasonNumber:o,onLoad:n,onError:l},r)=>{let{src:s}=pg(e,"3:1-logo"),[d,p]=(0,t.useState)(!s),c=`${i} Season ${o}`;return(0,a.jsx)(px,{ref:r,children:d?i:(0,a.jsx)(pb,{children:(0,a.jsx)(ph.default,{onLoad:n,onError:()=>{p(!0),l?.()},imageUrlTemplate:s??"",alt:c})})})}),pv=(0,a3.forwardLayout)(e=>{let i=(0,t.useRef)(null),[o,n]=(0,t.useState)(0),l=()=>{let{current:e}=i;if(e){let{height:t}=e.getBoundingClientRect();n(t)}};return(0,eg.useResizeObserver)(i,l,150),(0,a.jsx)(a7.default,{marginBottom:16,marginTop:-(26+o),withBackground:!1,children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:1},children:(0,a.jsx)(ie.default,{colStart:3,colSpan:9,group5:{colStart:2,colSpan:10},group4:{colStart:2,colSpan:11},group3:{colStart:1,colSpan:13},group2:{colStart:1,colSpan:12},children:(0,a.jsx)(pS,{ref:i,onLoad:l,onError:l,...e})})})})});var pw=e.i(324951),p$=e.i(316908);let pj=j.default.details.withConfig({displayName:"SeriesDropdown.styles__SeriesDropdownStyled",componentId:"sc-e5f755ae-0"})`
  position: relative;
  width: fit-content;
`,pk=j.default.summary.withConfig({displayName:"SeriesDropdown.styles__SeriesDropdownSummaryStyled",componentId:"sc-e5f755ae-1"})`
  ${({theme:e})=>j.css`
    background-color: ${e.dropDown.default.inverse.background.value};
    border: none;
    color: ${e.dropDown.default.inverse.content.value};
    padding: 8px 16px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    column-gap: 8px;

    ${(0,C.applyTypography)(e.nav.topbar.level3.default)}

    ${(0,tA.addHoverState)(j.css`
      background-color: ${e.dropDown.hover.inverse.background.value};
    `)}
  `};
`,pC=j.default.ul.withConfig({displayName:"SeriesDropdown.styles__SeriesDropdownListStyled",componentId:"sc-e5f755ae-2"})`
  ${({theme:e,$isOpen:t,$isJsEnabled:a})=>j.css`
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: ${e.dropDown.default.inverse.background.value};
    width: auto;
    max-width: 100%;
    right: 0;
    border: 1px solid ${e.dropDown.hover.inverse.background.value};
    max-height: calc(6 * 32px);
    overflow-y: auto;

    ${(function(e){let{thumbColor:t="black",thumbColorHover:a="gray",trackColor:i="transparent",width:o=10,height:n=10,borderRadius:l=4}=e;return j.css`
    @supports (scrollbar-color: auto) {
      scrollbar-width: thin;
      scrollbar-color: ${t} ${i};
    }

    @supports selector(::-webkit-scrollbar) {
      &::-webkit-scrollbar {
        width: ${o}px;
        height: ${n}px;
        background: ${i};
      }

      &::-webkit-scrollbar-track {
        background: ${i};
      }

      &::-webkit-scrollbar-thumb {
        background: ${t};
        border-radius: ${l}px;
        border: 1px solid transparent;
        background-clip: padding-box;

        ${(0,tA.addHoverState)(j.css`
          cursor: pointer;
          background: ${a};
        `)};
      }
    }
  `})({thumbColor:(0,p$.getHexWithTransparency)(e.dropDown.default.inverse.content.value,80),thumbColorHover:e.dropDown.default.inverse.content.value})};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        position: fixed;
        width: 100vw;
        max-width: 100vw;
        max-height: 75vh;
        top: auto;
        bottom: 0;
        padding-block: 20px calc(20px + env(safe-area-inset-bottom));
        display: grid;
        row-gap: 16px;

        ${a&&j.css`
          transition: transform 250ms ease-out;
          transform: ${t?"translateY(0)":"translateY(100vw)"};
        `};
      `,"group2")};
  `};
`,p_={type:"typography",value:{fontFamily:"BBC Reith Sans",fontWeight:"Regular",lineHeight:24,fontSize:20,letterSpacing:"0%",paragraphSpacing:0,paragraphIndent:"0px",textCase:"none",textDecoration:"none"}},pI=j.default.li.withConfig({displayName:"SeriesDropdown.styles__SeriesDropdownListItemStyled",componentId:"sc-e5f755ae-3"})`
  ${({theme:e,$isSelected:t})=>j.css`
    position: relative;
    padding: 8px 16px;
    color: ${e.dropDown.default.inverse.content.value};
    cursor: pointer;
    white-space: nowrap;

    ${(0,C.applyTypography)(e.nav.topbar.level3.default)}

    ${(0,tA.addHoverState)(j.css`
      background-color: ${e.dropDown.hover.inverse.background.value};
    `)}

    &:has(a:focus-visible) {
      outline: 2px solid Highlight;
      outline-offset: -2px;
    }

    a {
      outline: none;
      text-decoration: none;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
      }
    }

    ${(0,k.applyStylesForBreakpoints)(j.css`
        color: ${t?e.product.defaultBG.value:e.text.onInverseBG.lowEmpasis.value};
        ${(0,C.applyTypography)(p_)};
        width: fit-content;
        padding-inline: 8px;
        padding-block: 4px;
        margin-inline: 16px;
      `,"group2")};
  `};
`,pT=j.default.div.withConfig({displayName:"SeriesDropdown.styles__SeriesDropdownCloseButtonContainerStyled",componentId:"sc-e5f755ae-4"})`
  ${({$isJsEnabled:e})=>j.css`
    display: none;

    ${e&&(0,k.applyStylesForBreakpoints)(j.css`
        display: grid;
        position: sticky;
        top: 0;
        height: 1px;
        left: 32px;
        right: 32px;
        max-width: calc(100vw - 32px);
        margin-inline: 16px;
      `,"group2")};
  `};
`,pB=j.default.li.withConfig({displayName:"SeriesDropdown.styles__SeriesDropdownCloseButtonStyled",componentId:"sc-e5f755ae-5"})`
  ${({theme:e})=>j.css`
    display: none;

    ${(0,k.applyStylesForBreakpoints)(j.css`
        display: grid;
        position: absolute;
        right: 0;
        top: 0;
        width: 32px;
        height: 32px;
        place-content: center;
        color: ${e.dropDown.default.inverse.content.value};
        background-color: ${e.dropDown.default.inverse.background.value};

        ${(0,tA.addHoverState)(j.css`
          cursor: pointer;
          background-color: ${e.dropDown.hover.inverse.background.value};
        `)}
      `,"group2")};
  `};
`,pN=function(){let[e,a]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{a(!0)},[]),e},pA=({items:e,selectedIndex:i,onClose:o,isOpen:n})=>{let l=pN(),r=(0,t.useRef)(null),s=({key:e,target:t})=>{let{current:a}=r;if(a){let i=Array.from(a.querySelectorAll("a"));switch(e){case"ArrowDown":{let e=(i.indexOf(t)+1)%i.length,a=i[e];return a&&a?.focus&&a.focus()}case"ArrowUp":{let e=(i.indexOf(t)-1+i.length)%i.length,a=i[e];return a&&a?.focus&&a.focus()}case"Home":{let[e]=i;return e&&e?.focus&&e.focus()}case"End":{let[e]=i.reverse();return e&&e?.focus&&e.focus()}}}};return(0,a.jsxs)(pC,{role:"menu",ref:r,onKeyDown:s,$isOpen:n,$isJsEnabled:l,children:[(0,a.jsx)(pT,{$isJsEnabled:l,children:(0,a.jsx)(pB,{role:"button",onClick:o,children:(0,a.jsx)(w.default,{name:"actions:close",width:20,height:20})})}),e.map(({path:e,seriesNumber:t},o)=>(0,a.jsx)(pI,{id:`series-dropdown-option-${o}`,role:"menuitem",$isSelected:o===i,children:(0,a.jsx)(b.default,{href:e,tabIndex:0,children:`Series ${t}`})},o))]})},pL=({items:e=[]})=>{let i=(0,t.useRef)(null),[o,n]=(0,t.useState)(!!(i.current&&i.current.open)),{query:l}=(0,d.useAppRouter)(),{slug:r}=l,s=(0,la.getStringFromSlug)(r),p=(0,pp.default)(e,["seriesNumber"]),c=p.findIndex(({path:e})=>e.includes(s)),u=c>=0?c:0,g=p[u],m=()=>i.current&&i.current.removeAttribute("open");return(0,pw.useOutsideClicker)(i,m,"mousedown"),(0,a.jsxs)(pj,{ref:i,onToggle:()=>n(!!(i.current&&i.current.open)),onKeyDown:({key:e})=>"Escape"===e&&m(),children:[(0,a.jsxs)(pk,{"data-testid":"series-dropdown-button",children:[`Series ${g.seriesNumber}`,(0,a.jsx)(w.default,{name:o?"arrows:arrow-up":"arrows:arrow-down"})]}),(0,a.jsx)(pA,{items:e,selectedIndex:u,isOpen:o,onClose:m})]})},pF=({items:e=[]})=>e.length>1?(0,a.jsx)(pL,{items:e}):null,pP=(0,a3.forwardLayout)(e=>(0,a.jsx)(a7.default,{marginTop:16,marginBottom:16,group2:{marginTop:0,marginBottom:16},withBackground:!1,zIndex:"level1",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:3,colSpan:12,group5:{colStart:2,colSpan:15},group3:{colStart:1,colSpan:21},group2:{colStart:1,colSpan:12},children:(0,a.jsx)(pF,{...e})})})})),pE=({images:e=[],uploadDate:t,...i})=>{let o=pa.appConfig.getValue(pi.ConfigSettings.SiteUrl)||"localhost",{query:n}=(0,d.useAppRouter)(),{slug:l}=n,r=`${o}${(0,la.getStringFromSlug)(l,!0)}`,[s]=e.filter(({model:{blocks:{type:e}}})=>"1:1-square"===e),p=(s?.model?.blocks?.src??"").replace("{recipe}","1024xn"),c=new Date(t),u=function(e){let{seriesTitle:t,seasonNumber:a,numberOfEpisodes:i,description:o,thumbnailUrl:n,datePublished:l,url:r}=e;return{"@context":"https://schema.org","@type":"TVSeason",name:`Series ${a}`,partOfSeries:{"@type":"TVSeries",name:t},seasonNumber:a,numberOfEpisodes:i,description:o,thumbnailUrl:n,datePublished:l,url:r,isAccessibleForFree:!1}}({thumbnailUrl:p,datePublished:isNaN(c.getTime())?void 0:c.toISOString().slice(0,10),url:r,...i});return(0,a.jsx)(pt.default,{children:(0,a.jsx)(Z.default,{children:(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(u)},id:"tv-season-schema"})})})},pM=(0,a3.forwardLayout)(e=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:120,group2:{marginTop:16},children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:3,colSpan:17,group5:{colStart:2,colSpan:22},group3:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:(0,a.jsx)(S.SeriesTabs,{...e})})})}));var pR=e.i(990983),pR=pR,pD=e.i(524431);let pO=j.default.div.withConfig({displayName:"SeriesDescription.styles__SeriesDescriptionStyled",componentId:"sc-d4ebcc1b-0"})`
  display: grid;
  justify-items: start;
`,pG=j.default.p.withConfig({displayName:"SeriesDescription.styles__SeriesDescriptionContentStyled",componentId:"sc-d4ebcc1b-1"})`
  ${({theme:e,$isExpanded:t})=>j.css`
    color: ${e.text.onInverseBG.default.value};
    ${(0,C.applyTypography)(e.longFormVideo.seriesDescription.bpLarge)};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${!t&&j.css`
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        `};

        ${(0,C.applyTypography)(e.longFormVideo.seriesDescription.bpSmall)};
      `,"group2")};
  `};
`,pH=j.default.button.withConfig({displayName:"SeriesDescription.styles__SeriesDescriptionButtonStyled",componentId:"sc-d4ebcc1b-2"})`
  ${({theme:e,$isVisible:t})=>j.css`
    display: none;

    ${(0,k.applyStylesForBreakpoints)(j.css`
        color: ${e.interactive5.onInverseBG.default.value};
        padding-block: 12px;
        display: ${t?"block":"none"};

        ${(0,tA.addHoverState)(j.css`
          cursor: pointer;
          text-decoration: underline;
        `)};
        ${(0,C.applyTypography)(e.textLink.large.regular.bpLarge)};
      `,"group2")};
  `}
`,pz=({description:e,testId:i})=>{let o=(0,t.useRef)(null),[n,l]=(0,t.useState)(!1),r=n?"View less":"View more",s=function(e,a){let[i,o]=(0,t.useState)(!0);return(0,eg.useResizeObserver)(e,()=>{let{current:t}=e;if(t){let e=t.scrollHeight>t.clientHeight;a||o(e)}},250),i}(o,n);return(0,a.jsxs)(pO,{"data-testid":i,children:[(0,a.jsx)(pG,{ref:o,$isExpanded:n,children:e}),(0,a.jsx)(pH,{onClick:()=>l(e=>!e),$isVisible:s,children:r})]})},pU=j.default.div.withConfig({displayName:"SeriesTopComponent.styles__SeriesTopComponentStyled",componentId:"sc-e9ee723f-0"})`
  display: grid;
  row-gap: 24px;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      row-gap: 16px;
    `,"group2")};
`,pW=j.default.div.withConfig({displayName:"SeriesTopComponent.styles__SeriesTopComponentInnerStyled",componentId:"sc-e9ee723f-1"})`
  display: grid;
  row-gap: 16px;
`,pV=j.default.div.withConfig({displayName:"SeriesTopComponent.styles__SeriesMetadataStyled",componentId:"sc-e9ee723f-2"})`
  ${({theme:e})=>j.css`
    display: flex;
    column-gap: 18px;
    color: ${e.text.onInverseBG.default.value};
    ${(0,C.applyTypography)(e.metaData.large)};
  `};
`,pY=j.default.span.withConfig({displayName:"SeriesTopComponent.styles__SeriesMetadataItemStyled",componentId:"sc-e9ee723f-3"})`
  position: relative;

  &:not(:last-child)::after {
    content: '•';
    position: absolute;
    right: -12px;
  }
`,pq=({title:e,description:t,releaseYear:i,listOfEpisodes:o,rating:n,avProperties:l,contentTopic:r,trailer:s})=>{let d=(0,p.usePopup)(),c=(0,pD.useLogMparticleEvent)(),{id:u,title:g}=s??{},m=o.length,f=(0,pR.default)(l);f.av_content_id=u,f.av_episode=g;let y={eventGrouping:"av_lfv_cta",eventProperties:{item_name:"Watch trailer",item_type:"trailer",...f,content_topic:r}};return(0,a.jsxs)(pU,{children:[(0,a.jsxs)(pW,{children:[(0,a.jsxs)(pV,{children:[i&&(0,a.jsx)(pY,{children:i}),m>0&&(0,a.jsx)(pY,{children:`${m} ${m>1?"Episodes":"Episode"}`}),n&&(0,a.jsx)(pY,{children:n})]}),(0,a.jsx)(S.SeriesCtas,{title:e,episodes:o,onTrailerPlay:()=>{window.analytics.sendEvent(y),c("docs.trailer.select",{title:g,page:window.location.toString(),referrer:document.referrer,userAgent:navigator.userAgent}),d({variant:"trailer",popupProps:{trailer:s}})},isTrailerAvailable:!!s,avProperties:l,contentTopic:r})]}),(0,a.jsx)(pz,{description:t})]})},pQ=(0,a3.forwardLayout)(e=>(0,a.jsx)(a7.default,{marginTop:16,marginBottom:32,group2:{marginTop:16,marginBottom:0},withBackground:!1,children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:3,colSpan:12,group5:{colStart:2,colSpan:15},group3:{colStart:1,colSpan:21},group2:{colStart:1,colSpan:12},children:(0,a.jsx)(pq,{...e})})})})),pX=j.default.article.withConfig({displayName:"VideoSeriesPage.styles__VideoSeriesPageStyled",componentId:"sc-51a0aba6-0"})`
  ${({theme:e})=>j.css`
    background-color: ${e.container.onInverseBG2.value};
    min-height: 90vh;
    overflow: auto;
  `};
`,pK=e=>{let{isSubscriptionAllowed:t}=(0,x.useSubscriptionContext)(),o="single-column",{title:n,brand:l,description:r,rating:s,releaseYear:d,episodes:p,contributors:c,productionCompany:u,distributor:g,id:m,categories:f,trailer:y,seasonNumber:h,totalEpisodes:b,lastPublishedAt:S}=e,{listOfSeries:v,images:w,title:$}=l,{data:j}=p,k=r?.mediumDescription||r?.shortDescription||"",C=(0,pp.default)(v,"seriesNumber"),_={av_content_type:i.ContentType.LongFormVideo,av_content_id:m,av_show:$,av_show_season:n},I=f.length?f.join(","):"";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(pE,{seasonNumber:h,seriesTitle:$,description:k,numberOfEpisodes:b,uploadDate:new Date(S).toISOString(),images:w}),(0,a.jsxs)(pX,{children:[(0,a.jsx)(py,{layout:o,images:w,title:$,seasonNumber:h}),(0,a.jsx)(pv,{layout:o,images:w,title:$,seasonNumber:h}),(0,a.jsx)(pP,{layout:o,items:C}),(0,a.jsx)(pQ,{layout:o,title:n,description:k,rating:s,releaseYear:d,listOfEpisodes:j,avProperties:_,contentTopic:I,trailer:y}),(0,a.jsx)(pM,{layout:o,episodes:j,contributors:c,productionCompany:u,distributionCompany:g,isSubscriptionAllowed:t,seriesName:$,seasonNumber:h})]})]})},pZ=({contents:e})=>{let{model:t}=e.find(({type:e})=>"docs-series"===e)||{};return t?(0,a.jsx)(pK,{...t}):null};var pJ=e.i(362132),p0=e.i(51086),p1=e.i(633430),p1=p1;let p2=j.default.div.withConfig({displayName:"SearchResultPage.styles__SearchPageWrapperStyled",componentId:"sc-4ec22e4c-0"})`
  display: flex;
  justify-content: center;
`,p4=j.default.div.withConfig({displayName:"SearchResultPage.styles__SearchPageContainerStyled",componentId:"sc-4ec22e4c-1"})`
  /* TODO: find out the width */
  width: 80%;
  padding: 40px 0 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      padding-top: 24px;
      width: 90%;
    `,"group2")}
`,p6=j.default.div.withConfig({displayName:"SearchResultPage.styles__SearchPageContentStyled",componentId:"sc-4ec22e4c-2"})`
  padding: 24px 0;
  margin: 40px 0;
  width: 100%;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      padding: 0;
      margin-top: 24px;
    `,"group2")}
`,p3=j.default.div.withConfig({displayName:"SearchResultPage.styles__NoResultsWrapperStyled",componentId:"sc-4ec22e4c-3"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,p8=j.default.p.withConfig({displayName:"SearchResultPage.styles__NoResultsText",componentId:"sc-4ec22e4c-4"})`
  ${({theme:e})=>j.css`
    margin-bottom: 32px;
    text-align: center;
    ${(0,C.applyTypography)(e.bodyCopy.default.bpLarge)};

    strong {
      ${(0,C.applyTypography)(e.bodyCopy.emphasised.bpLarge)};
    }
  `}
`,p5=j.default.h2.withConfig({displayName:"SearchResultPage.styles__NoResultsHeaderStyled",componentId:"sc-4ec22e4c-5"})`
  ${({theme:e})=>(0,C.applyTypography)(e.generic.headline.xSmall.bpLarge)};
  margin-bottom: 16px;
`,p7=j.default.ul.withConfig({displayName:"SearchResultPage.styles__NoResultsSuggestionsStyled",componentId:"sc-4ec22e4c-6"})`
  ${({theme:e})=>j.css`
    list-style-type: disc;
    ${(0,C.applyTypography)(e.bulletList.default.bpLarge)};
    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${(0,C.applyTypography)(e.bulletList.default.bpSmall)};
      `,"group2")}
  `}
`;j.default.div.withConfig({displayName:"SearchResultPage.styles__ResultListContainerStyled",componentId:"sc-4ec22e4c-7"})`
  display: grid;
  gap: 24px;
`;let p9=(0,t.memo)(({searchText:e})=>(0,a.jsxs)(p3,{children:[(0,a.jsxs)(p8,{children:["Sorry there are no results for ",(0,a.jsxs)("strong",{"data-testid":"no-results-keyword",children:["'",e,"'"]})]}),(0,a.jsx)(p5,{children:"Suggestions"}),(0,a.jsxs)(p7,{children:[(0,a.jsx)("li",{children:"Make sure all words are spelled correctly"}),(0,a.jsx)("li",{children:"Try different keywords"}),(0,a.jsx)("li",{children:"Try more general keywords"})]})]})),ce=({searchText:e,submittedSearchText:i,suggestions:o,onSearch:n,onSearchTextChange:l,data:r})=>{let{results:s,...d}=r,p=(0,t.useRef)(null),c=(0,t.useRef)(null);return(0,a.jsx)(p2,{children:(0,a.jsxs)(p4,{children:[(0,a.jsx)(dO.default,{searchText:e,onSearchTextChange:l,suggestions:o,onSearch:n,ref:p}),(0,a.jsxs)(p6,{children:[(0,a.jsx)(p1.default,{value:{submittedSearchText:i,inputRef:p},children:(0,a.jsx)(p0.default,{content:s,controlButtonsPortalRef:c,paginationData:d})}),c.current&&(0,sx.createPortal)((0,a.jsx)(p9,{searchText:i}),c.current)]})]})})};var ct=e.i(581620),ca=e.i(421510),ci=e.i(913122),co=e.i(699213),cn=e.i(799306),cl=e.i(623886);function cr(e){(0,co.default)(1,arguments);var t=(0,cl.default)(e),a=t.getUTCDay();return t.setUTCDate(t.getUTCDate()-(7*(a<1)+a-1)),t.setUTCHours(0,0,0,0),t}function cs(e){(0,co.default)(1,arguments);var t=(0,cl.default)(e),a=t.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var o=cr(i),n=new Date(0);n.setUTCFullYear(a,0,4),n.setUTCHours(0,0,0,0);var l=cr(n);return t.getTime()>=o.getTime()?a+1:t.getTime()>=l.getTime()?a:a-1}var cd=e.i(871944);function cp(e,t){(0,co.default)(1,arguments);var a,i,o,n,l,r,s,d,p=(0,cd.getDefaultOptions)(),c=(0,cn.default)(null!=(a=null!=(i=null!=(o=null!=(n=null==t?void 0:t.weekStartsOn)?n:null==t||null==(l=t.locale)||null==(r=l.options)?void 0:r.weekStartsOn)?o:p.weekStartsOn)?i:null==(s=p.locale)||null==(d=s.options)?void 0:d.weekStartsOn)?a:0);if(!(c>=0&&c<=6))throw RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=(0,cl.default)(e),g=u.getUTCDay();return u.setUTCDate(u.getUTCDate()-(7*(g<c)+g-c)),u.setUTCHours(0,0,0,0),u}function cc(e,t){(0,co.default)(1,arguments);var a,i,o,n,l,r,s,d,p=(0,cl.default)(e),c=p.getUTCFullYear(),u=(0,cd.getDefaultOptions)(),g=(0,cn.default)(null!=(a=null!=(i=null!=(o=null!=(n=null==t?void 0:t.firstWeekContainsDate)?n:null==t||null==(l=t.locale)||null==(r=l.options)?void 0:r.firstWeekContainsDate)?o:u.firstWeekContainsDate)?i:null==(s=u.locale)||null==(d=s.options)?void 0:d.firstWeekContainsDate)?a:1);if(!(g>=1&&g<=7))throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(c+1,0,g),m.setUTCHours(0,0,0,0);var f=cp(m,t),y=new Date(0);y.setUTCFullYear(c,0,g),y.setUTCHours(0,0,0,0);var h=cp(y,t);return p.getTime()>=f.getTime()?c+1:p.getTime()>=h.getTime()?c:c-1}function cu(e,t){for(var a=Math.abs(e).toString();a.length<t;)a="0"+a;return(e<0?"-":"")+a}let cg=function(e,t){var a=e.getUTCFullYear(),i=a>0?a:1-a;return cu("yy"===t?i%100:i,t.length)},cm=function(e,t){var a=e.getUTCMonth();return"M"===t?String(a+1):cu(a+1,2)},cf=function(e,t){var a=t.length;return cu(Math.floor(e.getUTCMilliseconds()*Math.pow(10,a-3)),t.length)};function cy(e,t){var a=e>0?"-":"+",i=Math.abs(e),o=Math.floor(i/60),n=i%60;return 0===n?a+String(o):a+String(o)+(t||"")+cu(n,2)}function ch(e,t){return e%60==0?(e>0?"-":"+")+cu(Math.abs(e)/60,2):cx(e,t)}function cx(e,t){var a=Math.abs(e);return(e>0?"-":"+")+cu(Math.floor(a/60),2)+(t||"")+cu(a%60,2)}let cb={G:function(e,t,a){var i=+(e.getUTCFullYear()>0);switch(t){case"G":case"GG":case"GGG":return a.era(i,{width:"abbreviated"});case"GGGGG":return a.era(i,{width:"narrow"});default:return a.era(i,{width:"wide"})}},y:function(e,t,a){if("yo"===t){var i=e.getUTCFullYear();return a.ordinalNumber(i>0?i:1-i,{unit:"year"})}return cg(e,t)},Y:function(e,t,a,i){var o=cc(e,i),n=o>0?o:1-o;return"YY"===t?cu(n%100,2):"Yo"===t?a.ordinalNumber(n,{unit:"year"}):cu(n,t.length)},R:function(e,t){return cu(cs(e),t.length)},u:function(e,t){return cu(e.getUTCFullYear(),t.length)},Q:function(e,t,a){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(i);case"QQ":return cu(i,2);case"Qo":return a.ordinalNumber(i,{unit:"quarter"});case"QQQ":return a.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(i,{width:"narrow",context:"formatting"});default:return a.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,t,a){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(i);case"qq":return cu(i,2);case"qo":return a.ordinalNumber(i,{unit:"quarter"});case"qqq":return a.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(i,{width:"narrow",context:"standalone"});default:return a.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,t,a){var i=e.getUTCMonth();switch(t){case"M":case"MM":return cm(e,t);case"Mo":return a.ordinalNumber(i+1,{unit:"month"});case"MMM":return a.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(i,{width:"narrow",context:"formatting"});default:return a.month(i,{width:"wide",context:"formatting"})}},L:function(e,t,a){var i=e.getUTCMonth();switch(t){case"L":return String(i+1);case"LL":return cu(i+1,2);case"Lo":return a.ordinalNumber(i+1,{unit:"month"});case"LLL":return a.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(i,{width:"narrow",context:"standalone"});default:return a.month(i,{width:"wide",context:"standalone"})}},w:function(e,t,a,i){var o=function(e,t){(0,co.default)(1,arguments);var a=(0,cl.default)(e);return Math.round((cp(a,t).getTime()-(function(e,t){(0,co.default)(1,arguments);var a,i,o,n,l,r,s,d,p=(0,cd.getDefaultOptions)(),c=(0,cn.default)(null!=(a=null!=(i=null!=(o=null!=(n=null==t?void 0:t.firstWeekContainsDate)?n:null==t||null==(l=t.locale)||null==(r=l.options)?void 0:r.firstWeekContainsDate)?o:p.firstWeekContainsDate)?i:null==(s=p.locale)||null==(d=s.options)?void 0:d.firstWeekContainsDate)?a:1),u=cc(e,t),g=new Date(0);return g.setUTCFullYear(u,0,c),g.setUTCHours(0,0,0,0),cp(g,t)})(a,t).getTime())/6048e5)+1}(e,i);return"wo"===t?a.ordinalNumber(o,{unit:"week"}):cu(o,t.length)},I:function(e,t,a){var i=function(e){(0,co.default)(1,arguments);var t=(0,cl.default)(e);return Math.round((cr(t).getTime()-(function(e){(0,co.default)(1,arguments);var t=cs(e),a=new Date(0);return a.setUTCFullYear(t,0,4),a.setUTCHours(0,0,0,0),cr(a)})(t).getTime())/6048e5)+1}(e);return"Io"===t?a.ordinalNumber(i,{unit:"week"}):cu(i,t.length)},d:function(e,t,a){var i,o;return"do"===t?a.ordinalNumber(e.getUTCDate(),{unit:"date"}):(i=e,o=t,cu(i.getUTCDate(),o.length))},D:function(e,t,a){var i=function(e){(0,co.default)(1,arguments);var t=(0,cl.default)(e),a=t.getTime();return t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0),Math.floor((a-t.getTime())/864e5)+1}(e);return"Do"===t?a.ordinalNumber(i,{unit:"dayOfYear"}):cu(i,t.length)},E:function(e,t,a){var i=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return a.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(i,{width:"short",context:"formatting"});default:return a.day(i,{width:"wide",context:"formatting"})}},e:function(e,t,a,i){var o=e.getUTCDay(),n=(o-i.weekStartsOn+8)%7||7;switch(t){case"e":return String(n);case"ee":return cu(n,2);case"eo":return a.ordinalNumber(n,{unit:"day"});case"eee":return a.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(o,{width:"short",context:"formatting"});default:return a.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,a,i){var o=e.getUTCDay(),n=(o-i.weekStartsOn+8)%7||7;switch(t){case"c":return String(n);case"cc":return cu(n,t.length);case"co":return a.ordinalNumber(n,{unit:"day"});case"ccc":return a.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(o,{width:"narrow",context:"standalone"});case"cccccc":return a.day(o,{width:"short",context:"standalone"});default:return a.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,a){var i=e.getUTCDay(),o=0===i?7:i;switch(t){case"i":return String(o);case"ii":return cu(o,t.length);case"io":return a.ordinalNumber(o,{unit:"day"});case"iii":return a.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(i,{width:"short",context:"formatting"});default:return a.day(i,{width:"wide",context:"formatting"})}},a:function(e,t,a){var i=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(i,{width:"narrow",context:"formatting"});default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,t,a){var i,o=e.getUTCHours();switch(i=12===o?"noon":0===o?"midnight":o/12>=1?"pm":"am",t){case"b":case"bb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(i,{width:"narrow",context:"formatting"});default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,t,a){var i,o=e.getUTCHours();switch(i=o>=17?"evening":o>=12?"afternoon":o>=4?"morning":"night",t){case"B":case"BB":case"BBB":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(i,{width:"narrow",context:"formatting"});default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,t,a){if("ho"===t){var i,o,n=e.getUTCHours()%12;return 0===n&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return i=e,o=t,cu(i.getUTCHours()%12||12,o.length)},H:function(e,t,a){var i,o;return"Ho"===t?a.ordinalNumber(e.getUTCHours(),{unit:"hour"}):(i=e,o=t,cu(i.getUTCHours(),o.length))},K:function(e,t,a){var i=e.getUTCHours()%12;return"Ko"===t?a.ordinalNumber(i,{unit:"hour"}):cu(i,t.length)},k:function(e,t,a){var i=e.getUTCHours();return(0===i&&(i=24),"ko"===t)?a.ordinalNumber(i,{unit:"hour"}):cu(i,t.length)},m:function(e,t,a){var i,o;return"mo"===t?a.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):(i=e,o=t,cu(i.getUTCMinutes(),o.length))},s:function(e,t,a){var i,o;return"so"===t?a.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):(i=e,o=t,cu(i.getUTCSeconds(),o.length))},S:function(e,t){return cf(e,t)},X:function(e,t,a,i){var o=(i._originalDate||e).getTimezoneOffset();if(0===o)return"Z";switch(t){case"X":return ch(o);case"XXXX":case"XX":return cx(o);default:return cx(o,":")}},x:function(e,t,a,i){var o=(i._originalDate||e).getTimezoneOffset();switch(t){case"x":return ch(o);case"xxxx":case"xx":return cx(o);default:return cx(o,":")}},O:function(e,t,a,i){var o=(i._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+cy(o,":");default:return"GMT"+cx(o,":")}},z:function(e,t,a,i){var o=(i._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+cy(o,":");default:return"GMT"+cx(o,":")}},t:function(e,t,a,i){return cu(Math.floor((i._originalDate||e).getTime()/1e3),t.length)},T:function(e,t,a,i){return cu((i._originalDate||e).getTime(),t.length)}};var cS=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},cv=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}};let cw={p:cv,P:function(e,t){var a,i=e.match(/(P+)(p+)?/)||[],o=i[1],n=i[2];if(!n)return cS(e,t);switch(o){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;default:a=t.dateTime({width:"full"})}return a.replace("{{date}}",cS(o,t)).replace("{{time}}",cv(n,t))}};var c$=e.i(736641),cj=["D","DD"],ck=["YY","YYYY"];function cC(e,t,a){if("YYYY"===e)throw RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(a,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(a,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(a,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(a,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var c_=e.i(67708),cI=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,cT=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,cB=/^'([^]*?)'?$/,cN=/''/g,cA=/[a-zA-Z]/;function cL(e,t,a){(0,co.default)(2,arguments);var i,o,n,l,r,s,d,p,c,u,g,m,f,y,h,x,b,S,v=String(t),w=(0,cd.getDefaultOptions)(),$=null!=(i=null!=(o=null==a?void 0:a.locale)?o:w.locale)?i:c_.default,j=(0,cn.default)(null!=(n=null!=(l=null!=(r=null!=(s=null==a?void 0:a.firstWeekContainsDate)?s:null==a||null==(d=a.locale)||null==(p=d.options)?void 0:p.firstWeekContainsDate)?r:w.firstWeekContainsDate)?l:null==(c=w.locale)||null==(u=c.options)?void 0:u.firstWeekContainsDate)?n:1);if(!(j>=1&&j<=7))throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var k=(0,cn.default)(null!=(g=null!=(m=null!=(f=null!=(y=null==a?void 0:a.weekStartsOn)?y:null==a||null==(h=a.locale)||null==(x=h.options)?void 0:x.weekStartsOn)?f:w.weekStartsOn)?m:null==(b=w.locale)||null==(S=b.options)?void 0:S.weekStartsOn)?g:0);if(!(k>=0&&k<=6))throw RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!$.localize)throw RangeError("locale must contain localize property");if(!$.formatLong)throw RangeError("locale must contain formatLong property");var C=(0,cl.default)(e);if(!(0,ca.default)(C))throw RangeError("Invalid time value");var _=(0,c$.default)(C),I=function(e,t){(0,co.default)(2,arguments);var a=(0,cn.default)(t);return(0,ci.default)(e,-a)}(C,_),T={firstWeekContainsDate:j,weekStartsOn:k,locale:$,_originalDate:C};return v.match(cT).map(function(e){var t=e[0];return"p"===t||"P"===t?(0,cw[t])(e,$.formatLong):e}).join("").match(cI).map(function(i){if("''"===i)return"'";var o,n,l=i[0];if("'"===l){return(n=(o=i).match(cB))?n[1].replace(cN,"'"):o}var r=cb[l];if(r)return null!=a&&a.useAdditionalWeekYearTokens||-1===ck.indexOf(i)||cC(i,t,String(e)),null!=a&&a.useAdditionalDayOfYearTokens||-1===cj.indexOf(i)||cC(i,t,String(e)),r(I,i,$.localize,T);if(l.match(cA))throw RangeError("Format string contains an unescaped latin alphabet character `"+l+"`");return i}).join("")}let cF=j.default.nav.withConfig({displayName:"Breadcrumbs.styles__BreadcrumbsContainerStyled",componentId:"sc-7239d51e-0"})`
  ${({theme:e})=>j.css`
    ${(0,C.applyTypography)(e.textLink.large.regular.bpLarge)};
    padding: 0;

    & a:hover {
      text-decoration: underline;
    }
    ${(0,k.applyStylesForBreakpoints)(j.css`
        margin-left: 0;
      `,"group2")};
  `}
`,cP=j.default.ul.withConfig({displayName:"Breadcrumbs.styles__BreadcrumbsListStyled",componentId:"sc-7239d51e-1"})`
  display: inline-flex;
  gap: 8px;
  flex-wrap: wrap;

  svg {
    display: inline-block;
    vertical-align: text-top;
    width: 24px;
  }
`,cE=j.default.li.withConfig({displayName:"Breadcrumbs.styles__BreadcrumbsListItemStyled",componentId:"sc-7239d51e-2"})`
  display: flex;
  gap: 8px;
  padding: 6px 0;
`,cM=({items:e})=>(0,a.jsx)(cF,{children:(0,a.jsx)(cP,{children:e.map(({title:t,slug:i},o)=>(0,a.jsxs)(cE,{children:[(0,a.jsx)(l0.default,{condition:!!i,wrapper:e=>(0,a.jsx)(b.default,{href:i,analyticsProps:{item_name:t,item_type:"breadcrumbs"},children:e}),children:(0,a.jsx)("span",{children:t})}),o+1<e.length&&(0,a.jsx)(w.default,{testId:"section-title-chevron",name:"arrows:chevron-right"})]},`breadcrumb-${o}`))})}),cR=j.default.div.withConfig({displayName:"DaySelector.styles__SelectorGridStyled",componentId:"sc-c70333cb-0"})`
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(4, 248px);
  grid-auto-flow: column;
  width: fit-content;
  row-gap: 8px;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      grid-template-columns: repeat(4, 232px);
    `,"group5")}

  ${(0,k.applyStylesForBreakpoints)(j.css`
      grid-template-rows: repeat(8, 1fr);
      grid-template-columns: repeat(4, 172px);
    `,"group4")}

  ${(0,k.applyStylesForBreakpoints)(j.css`
      grid-template-rows: repeat(11, 1fr);
      grid-template-columns: repeat(3, 178px);
    `,"group3")}

  ${(0,k.applyStylesForBreakpoints)(j.css`
      grid-template-rows: repeat(16, 1fr);
      grid-template-columns: repeat(2, 156px);
      row-gap: 16px;
    `,"group2")};
`,cD=j.default.a.withConfig({displayName:"DaySelector.styles__SelectorDayStyled",componentId:"sc-c70333cb-1"})`
  ${({theme:e})=>j.css`
    display: block;
    ${(0,C.applyTypography)(e.textLink.large.regular.bpLarge)};
    color: ${e.interactive1.onDefaultBG.default.value};
    padding: 6px 0;

    &:hover {
      text-decoration: underline;
    }
  `}
`,cO=({year:e,month:t,day:i,basePath:o,onSelect:n})=>{let l=e=>String(e).padStart(2,"0"),r=`${i} ${cL(new Date(e,t-1),"MMMM")}`,s=`${o}/${l(t)}/${l(i)}`;return(0,a.jsx)(b.default,{styledAnchor:cD,onClick:e=>{n&&(e.preventDefault(),n({month:t,day:i}))},href:s,analyticsProps:{item_name:`${r} ${e}`},children:r},`${t}-${i}`)},cG=({startDate:e,endDate:i=new Date,onSelect:o,basePath:n="/content-index"})=>{let l=(0,t.useMemo)(()=>(function(e,t=new Date){if(e>t)return[];let a=[];for(;e<=t;)a.push({month:e.getMonth()+1,day:e.getDate()}),e.setDate(e.getDate()+1);return a})(e,i),[e,i]),r=e.getFullYear();return(0,a.jsx)(cR,{children:l.map(({month:e,day:t})=>(0,a.jsx)(cO,{year:r,month:e,day:t,basePath:n,onSelect:o},`${e}-${t}`))})};var cH=e.i(848e3);let cz=(0,j.default)(ts.ContainerStyled).withConfig({displayName:"SeoArchiveMonthPage.styles__SeoArchiveMonthPageContainerStyled",componentId:"sc-dae2be30-0"})`
  gap: 0;
  ${(0,k.applyStylesForBreakpoints)(j.css`
      padding: 0 16px;
    `,"group2")}
`,cU=j.default.h1.withConfig({displayName:"SeoArchiveMonthPage.styles__SeoArchiveMonthPageTitleStyled",componentId:"sc-dae2be30-1"})`
  ${({theme:e})=>j.css`
    ${(0,C.applyTypography)(e.nav.title.level3.default)};
    text-align: center;
    padding: 25px 0;

    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${(0,C.applyTypography)(e.nav.title.level3.defaultMobile)};
        padding: 12px 0;
      `,"group2")}
  `}
`,cW=({startDate:e,endDate:t})=>{let i=cL(e,"MMMM"),o=cL(e,"yyyy"),n=[{title:o,slug:`/${cH.SEO_ARCHIVE_INDEX_SLUG}/${o}`},{title:i}];return(0,a.jsxs)(cz,{$type:"wide",children:[(0,a.jsx)(cU,{children:`${cL(e,"MMMM yyyy")}`}),(0,a.jsxs)(a9.default,{columns:24,rowGap:16,group2:{columns:12},children:[(0,a.jsx)(ie.default,{colStart:3,colSpan:20,group5:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:(0,a.jsx)(cM,{items:n})}),(0,a.jsx)(ie.default,{colStart:3,colSpan:20,group5:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:(0,a.jsx)(cG,{startDate:e,endDate:t,basePath:`/${cH.SEO_ARCHIVE_INDEX_SLUG}/${o}`})})]})]})},cV=function(...e){let[,,t]=e,{query:a}=(0,d.useAppRouter)(),{data:i=[],isLoading:n}=(0,o.default)(t),{page:l="1"}=a,r=Number(l);return{results:i.slice((r-1)*9,9*r),pageSize:9,total:i.length,isLoading:n,page:r}},cY=function(...e){let{type:t}=(0,tt.usePageData)();return(i.ContentType.SeoArchiveResultPage,cV)(...e)};var cq=e.i(452537),cq=cq;let cQ=(0,j.default)(ts.ContainerStyled).withConfig({displayName:"SeoArchiveResultPage.styles__SeoArchiveResultPageContainerStyled",componentId:"sc-ad8eb281-0"})`
  gap: 0;
  ${(0,k.applyStylesForBreakpoints)(j.css`
      padding: 0 16px;
    `,"group2")};
`,cX=j.default.div.withConfig({displayName:"SeoArchiveResultPage.styles__SeoArchiveResultsWrapperStyled",componentId:"sc-ad8eb281-1"})`
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`,cK=j.default.div.withConfig({displayName:"SeoArchiveResultPage.styles__SeoArchivePaginationWrapperStyled",componentId:"sc-ad8eb281-2"})`
  display: flex;
  justify-content: center;
`,cZ=j.default.div.withConfig({displayName:"SeoArchiveResultPage.styles__SeoArchiveNoResultStyled",componentId:"sc-ad8eb281-3"})`
  ${({theme:e})=>j.css`
    display: flex;
    justify-content: center;
    ${(0,C.applyTypography)(e.headline.small.bpLarge)};

    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${(0,C.applyTypography)(e.headline.small.bpSmall)};
      `,"group2")};
  `}
`,cJ=j.default.h1.withConfig({displayName:"SeoArchiveResultPage.styles__SeoArchiveResultPageTitleStyled",componentId:"sc-ad8eb281-4"})`
  ${({theme:e})=>j.css`
    ${(0,C.applyTypography)(e.nav.title.level3.default)};
    text-align: center;
    padding: 25px 0;

    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${(0,C.applyTypography)(e.nav.title.level3.defaultMobile)};
        padding: 12px 0;
      `,"group2")}
  `}
`,c0=({date:e,results:t,currentPage:i,pageSize:o,total:n,onPageChange:l})=>{let r=e.getMonth(),s=cL(e,"MMMM"),d=cL(e,"yyyy"),p=n>0,c=[{title:d,slug:`/${cH.SEO_ARCHIVE_INDEX_SLUG}/${d}`},{title:s,slug:`/${cH.SEO_ARCHIVE_INDEX_SLUG}/${d}/${r+1}`},{title:`${cL(e,"d")} ${s}`}];return(0,a.jsxs)(cQ,{$type:"wide",children:[(0,a.jsx)(cJ,{children:`${cL(e,"d MMMM yyyy")}`}),(0,a.jsx)(cM,{items:c}),(0,a.jsxs)(cX,{children:[!p&&(0,a.jsx)(cZ,{children:"No results available for this date"}),t.map((e,i)=>(0,a.jsx)(ag.default,{...e,title:e.title,type:"liverpool",hideBottomBorder:i===t.length-1,formatType:"seo-archive"},`seo-archive-result-${i}`))]}),(0,a.jsx)(cK,{children:(0,a.jsx)(S.Pagination,{currentPage:i,itemsTotalCount:n,itemsPerPage:o,onPageChange:l,pageRangeDisplayed:cH.SEO_ARCHIVE_ITEMS_PER_RESULTS_PAGE})})]})},c1=j.default.div.withConfig({displayName:"YearMonthSelector.styles__SelectorWrapperStyled",componentId:"sc-65239e8c-0"})``,c2=j.default.div.withConfig({displayName:"YearMonthSelector.styles__SelectorYearContainerStyled",componentId:"sc-65239e8c-1"})``,c4=j.default.div.withConfig({displayName:"YearMonthSelector.styles__SelectorYearStyled",componentId:"sc-65239e8c-2"})`
  ${({theme:e})=>j.css`
    ${(0,C.applyTypography)(e.generic.headline.small.bpLarge)};
    margin-bottom: 16px;
  `}
`,c6=j.default.div.withConfig({displayName:"YearMonthSelector.styles__SelectorMonthsContainerStyled",componentId:"sc-65239e8c-3"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  ${(0,k.applyStylesForBreakpoints)(j.css`
      display: inline-flex;
      column-gap: 16px;
      row-gap: 12px;
      flex-direction: row;
      flex-wrap: wrap;
    `,"group2")}
`,c3=j.default.a.withConfig({displayName:"YearMonthSelector.styles__SelectorMonthStyled",componentId:"sc-65239e8c-4"})`
  ${({theme:e})=>j.css`
    display: inline-flex;
    ${(0,C.applyTypography)(e.textLink.large.regular.bpLarge)};
    color: ${e.interactive1.onDefaultBG.default.value};
    padding: 6px 0;

    &:hover {
      text-decoration: underline;
    }
  `}
`,c8=({startDate:e,endDate:i=new Date,onSelect:o,basePath:n="/content-index"})=>{let l=(0,t.useMemo)(()=>(function(e,t=new Date){if(e>t)throw Error("startDate must be before endDate");let a={},i=new Date(e.getFullYear(),e.getMonth(),1),o=new Date(t.getFullYear(),t.getMonth(),t.getDate());for(;i<o;){let e=i.getFullYear();a[e]||(a[e]=[]),a[e].push(i.getMonth()+1),i.setMonth(i.getMonth()+1)}return a})(e,i),[e,i]);return(0,a.jsx)(c1,{"data-testid":"year-month-selector",children:(0,a.jsx)(v.GridStyled,{$columns:[1,1,3,4,4,4],$gridGap:["16px","16px","40px","40px","40px","40px"],children:Object.keys(l).reverse().map(e=>(0,a.jsxs)(c2,{children:[(0,a.jsx)(c4,{children:e}),(0,a.jsx)(c6,{children:l[e].map(t=>(0,a.jsx)(b.default,{styledAnchor:c3,onClick:a=>{var i;return i=Number(e),void(o&&(a.preventDefault(),o?.({year:i,month:t})))},href:`${n}/${e}/${String(t).padStart(2,"0")}`,disableAnalytics:!0,children:cL(new Date(Number(e),t-1),"MMMM")},`month-${t}`))})]},`year-${e}`))})})},c5=(0,j.default)(ts.ContainerStyled).withConfig({displayName:"SeoArchiveIndexPage.styles__SeoArchiveIndexPageContainerStyled",componentId:"sc-de5d92ff-0"})`
  gap: 0;
  ${(0,k.applyStylesForBreakpoints)(j.css`
      padding: 0 16px;
    `,"group2")}
`,c7=j.default.h1.withConfig({displayName:"SeoArchiveIndexPage.styles__SeoArchiveIndexPageTitleStyled",componentId:"sc-de5d92ff-1"})`
  ${({theme:e})=>j.css`
    ${(0,C.applyTypography)(e.nav.title.level3.default)};
    text-align: center;
    padding: 25px 0;

    ${(0,k.applyStylesForBreakpoints)(j.css`
        ${(0,C.applyTypography)(e.nav.title.level3.defaultMobile)};
        padding: 12px 0;
      `,"group2")}
  `}
`,c9={[i.ContentType.Article]:lu,[i.ContentType.Audio]:()=>{let{subtype:e}=(0,tt.usePageData)(),l=(0,te.useCurrentSlug)(),{data:r}=(0,o.default)(l),s=(0,t.useMemo)(()=>{switch(e){case i.ContentSubtype.Episode:return eB;case i.ContentSubtype.Brand:case i.ContentSubtype.Series:return e9}},[e]),d=(0,t.useRef)(null),p=(0,t.useRef)(!1),[c,u]=(0,ez.useBreakpoints)("AudioPage");return(0,t.useEffect)(()=>{u&&("group3"===c||"group4"===c||"group5"===c||"group6"===c)&&!p.current&&d.current&&(d.current.requestAd(),p.current=!0)},[c]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.default,{type:"top",deferRequest:!0,forwardedAdRef:d}),(0,a.jsx)(s,{...r})]})},[i.ContentType.BookmarksPage]:()=>{let e=(0,u.useFeatureFlag)("bookmarking"),t=(0,u.useFeatureFlag)("follow-brand-function");return e||t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(tI,{isPreCurated:!1,isBookmarksPage:!0,title:"Saved",mainNavigation:[]}),(0,a.jsx)(S.SavedItemsPage,{})]}):(0,a.jsx)(ta.default,{})},[i.ContentType.FiveHundredPage]:()=>{let{statusCode:e}=(0,tt.usePageData)();return(0,a.jsx)(ta.default,{statusCode:e})},[i.ContentType.IndexPage]:dK,[i.ContentType.LongFormVideo]:()=>{let e=(0,x.useSubscriptionContext)(),n=(0,t.useMemo)(()=>e.isSubscriptionAllowed,[e.isSubscriptionAllowed]),{subtype:l}=(0,tt.usePageData)(),r=(0,te.useCurrentSlug)(),{data:s}=(0,o.default)(r),d=(0,t.useMemo)(()=>{switch(l){case i.ContentSubtype.Episode:return pd;case i.ContentSubtype.Series:return pZ}},[l]);return(0,dt.useIsAppLayoutEnabled)()?(0,a.jsx)(dq,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(lb,{isSubscriptionAllowed:n}),(0,a.jsx)(d,{...s})]})},[i.ContentType.NotFoundPage]:dq,[i.ContentType.SearchPage]:()=>{let[e,i]=(0,t.useState)(""),[o,n]=(0,t.useState)(""),{query:l,push:r}=(0,d.useAppRouter)(),{page:s="1",q:p}=l,c=Math.min(parseInt(s,10),ct.SEARCH_RESULTS_MAX_PAGES).toString(),u=(0,pJ.getSearchUrl)({terms:(o||p)?.toString(),page:c}),{data:g}=(0,l$.default)(u),m=(0,eG.default)(async e=>await r((0,pJ.getSearchUrl)({q:e})),500);return(0,t.useEffect)(()=>{i(p),n(p)},[p]),(0,a.jsx)(ce,{searchText:e||"",data:g,submittedSearchText:o,onSearch:m,onSearchTextChange:i})},[i.ContentType.SeoArchiveIndexPage]:()=>{let e=new Date(cH.SEO_ARCHIVE_START_DATE);return(0,a.jsxs)(c5,{$type:"wide",children:[(0,a.jsx)(c7,{children:"BBC.com Content Index"}),(0,a.jsx)(c8,{startDate:e,basePath:`/${cH.SEO_ARCHIVE_INDEX_SLUG}`})]})},[i.ContentType.SeoArchiveMonthPage]:()=>{let[e,t]=(0,te.useCurrentSlug)().slice(-2),i=new Date(Number(e),Number(t)-1,1),o=new Date(Number(e),Number(t),0),n=new Date,l=new Date(n);l.setDate(n.getDate()-1);let r=l<o?l:o;return(0,a.jsx)(cW,{startDate:i,endDate:r})},[i.ContentType.SeoArchiveResultPage]:()=>{let e=(0,te.useCurrentSlug)(),[t,i,o]=e.slice(-3),n=new Date(Number(t),Number(i)-1,Number(o)),l=cL(n,"d MMMM yyyy"),{total:r,pageSize:s,page:d,results:p}=cY({},void 0,e);return(0,a.jsx)(cq.default,{value:{page:d,keyword:l},children:(0,a.jsx)(c0,{results:p,pageSize:s,currentPage:d,date:n,total:r})})},[i.ContentType.TopicPage]:dK,[i.ContentType.Video]:lu},ue=(0,t.createContext)(c9),{Provider:ut}=ue;e.s(["usePagesContext",0,()=>(0,t.useContext)(ue)],279353)}]);