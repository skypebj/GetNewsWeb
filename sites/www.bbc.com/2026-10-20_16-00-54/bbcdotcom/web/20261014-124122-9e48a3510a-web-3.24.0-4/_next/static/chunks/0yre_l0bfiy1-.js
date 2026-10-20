(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,279353,e=>{"use strict";var t=e.i(191788),a=e.i(391398),i=e.i(184919),o=e.i(959560),n=e.i(117191),r=e.i(823575),l=e.i(480495),s=e.i(830945),d=e.i(746857),p=e.i(753423);let c=function(e){let{push:a}=(0,d.useAppRouter)(),i=(0,p.usePopup)(),[o,n]=(0,t.useState)(null),[r,c]=(0,t.useState)(!1),[u,g]=(0,t.useState)(!1),[m,y]=(0,t.useState)(!1),[f,h]=(0,t.useState)(!1),[{href:x}={href:""}]=e;(0,t.useEffect)(()=>{let e=!(0,l.hasCookie)(s.AUTOPLAY)||(0,l.getCookie)(s.AUTOPLAY),t=window.sessionStorage.getItem("bbcx-audio-played");t&&document.referrer.includes(t)?g(e):g(!1),y(e)},[]);let b=()=>{y(!1)},S=(0,t.useMemo)(()=>({countdownValue:o,countdownTotalSecs:10,isPlaying:r,isAutoplayEnabled:u,isNextItemAutoplayEnabled:m,onAutoplayEnabledToggle:e=>g(t=>{let a,i,o,n,r=e??!t;return y(r),a=!0,i=r??!0,o=(0,l.hasCookie)(s.POLICY),n=(0,l.hasCookie)(s.AUTOPLAY),o&&(a="1"===(0,l.getCookie)(s.POLICY).charAt(2)),a?void 0===r&&n?i=(0,l.getCookie)(s.AUTOPLAY):(0,l.setCookie)(s.AUTOPLAY,i,{domain:"bbc.com",maxAge:31536e3}):n&&(0,l.deleteCookie)(s.AUTOPLAY),r}),cancelNextItemAutoplay:b}),[o,r,u,m]);return(0,t.useEffect)(()=>{let t=t=>{if(r){let o=t.target.closest("a");o&&o.href&&(e.find(e=>o.href.includes(e.href))||(t.preventDefault(),i({variant:"leaving-page",onPrimaryAction:()=>a(o.href),onSecondaryAction:()=>window.open(o.href,"_blank")})))}};return document.addEventListener("click",t),()=>{document.removeEventListener("click",t)}},[r,e,a,i]),{handleTimeUpdate:e=>{let{duration:t,currentTime:a}=e,i=Math.ceil(t-a),o=i<10?i:null;o&&!f&&(h(!0),window.sessionStorage.setItem("bbcx-audio-played",window.location.pathname)),n(o)},handlePlaybackUpdate:e=>()=>"ended"===e?y(e=>(x&&e&&a(`${window.location.origin}${x}`).then(),e)):c("playing"===e),providerValue:S}};var u=e.i(519894),g=e.i(530815),m=e.i(656612);let y=function(e){let t=(0,m.useCanPlayEpisode)();return e.filter(({metadata:e})=>t(e.availability))};var f=e.i(915929),f=f,h=e.i(900324),x=e.i(789799),b=e.i(893409),S=e.i(459949),v=e.i(913777),w=e.i(65739),j=e.i(490602),$=e.i(760814),C=e.i(339228),k=e.i(570549);let I=$.default.div.withConfig({displayName:"AudioEpisodeDetails.styles__AudioEpisodeMetadataStyled",componentId:"sc-9e3f8507-0"})`
  display: flex;
  gap: 12px;
  align-items: center;

  ${(0,C.applyStylesForBreakpoints)($.css`
      flex-direction: column;
      gap: 16px;
      align-items: flex-start;
    `,"group2")};
`,_=$.default.div.withConfig({displayName:"AudioEpisodeDetails.styles__AudioEpisodeInlineMetadataStyled",componentId:"sc-9e3f8507-1"})`
  ${({theme:e})=>$.css`
    display: inline-flex;
    flex-flow: row wrap;

    ${(0,C.applyStylesForBreakpoints)($.css`
        flex-wrap: wrap;
      `,"group1")};

    p {
      color: #545658;
      display: flex;
      flex-direction: row;
      ${(0,k.applyTypography)(e.metaData.large)};
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

      ${(0,C.applyStylesForBreakpoints)($.css`
          text-align: center;
        `,"group1")};
    }
  `}
`,T=$.default.p.withConfig({displayName:"AudioEpisodeDetails.styles__AudioEpisodeTextStyled",componentId:"sc-9e3f8507-2"})`
  ${({theme:e})=>$.css`
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    overflow-wrap: anywhere;
    ${(0,k.applyTypography)(e.bodyCopy.default.bpLarge)};
  `}
`,B=$.default.a.withConfig({displayName:"AudioEpisodeDetails.styles__AudioEpisodeSeeMoreStyled",componentId:"sc-9e3f8507-3"})`
  ${({theme:e})=>$.css`
    display: flex;
    flex-direction: row;
    gap: 4px;
    height: 44px;
    align-items: center;
    ${(0,k.applyTypography)(e.textLink.large.regular.bpLarge)};
    text-decoration: none;
    cursor: pointer;
    color: unset;
    padding-right: 24px;

    &:hover {
      text-decoration: underline;
    }
  `}
`,N=(0,$.default)(v.GridStyled).withConfig({displayName:"AudioEpisodeDetails.styles__AudioEpisodeActionsContainer",componentId:"sc-9e3f8507-4"})`
  ${({$isStationPage:e})=>e&&(0,C.applyStylesForBreakpoints)($.css`
        display: none;
      `,"group3")};
`,A=$.default.div.withConfig({displayName:"AudioEpisodeDetails.styles__AudioButtonsStyled",componentId:"sc-9e3f8507-5"})`
  display: flex;
  ${(0,C.applyStylesForBreakpoints)($.css`
      display: unset;
    `,"group2")}
`;var P=e.i(16234);let F=({releaseDate:e,duration:t,isWithinSubscriptionWindow:i=!1,availabilityInfo:o,isContentUnavailable:n=!1})=>{let{isSubscriptionAllowed:r}=(0,x.useSubscriptionContext)(),l=i&&r,s=i?r&&!!e:!!e;return l||s||t||o||n?(0,a.jsxs)(I,{children:[l&&(0,a.jsx)(P.default,{variant:"subscribers-only"}),(0,a.jsxs)(_,{children:[s&&e&&(0,a.jsx)("p",{suppressHydrationWarning:!0,children:e.toString()}),t&&(0,a.jsx)("p",{children:t}),o&&(0,a.jsx)("p",{suppressHydrationWarning:!0,children:o}),n&&(0,a.jsx)("p",{children:"This content is not currently available"})]})]}):null},E=({releaseDate:e,duration:t,availabilityInfo:i,description:o,moreEpisodesPath:n,programmesUrl:r,isActionVisible:l=!0,isStationPage:s=!1,contentSubtype:d,avProperties:p,isWithinSubscriptionWindow:c=!1,isContentUnavailable:u=!1,isSaveDisabled:g=!1})=>{let{av_episode_id:m,av_brand_id:y,av_series_id:f}=p||{};return(0,a.jsxs)(v.GridStyled,{$columns:[1,1,"minmax(90px, auto) auto","minmax(90px, auto) auto","minmax(90px, auto) auto","minmax(90px, auto) auto"],$maxWidth:["722px","722px","722px","722px","722px","722px"],$gridGap:["32px","32px","16px","16px","16px","16px"],$margin:["auto","auto","auto","auto","auto","auto"],$padding:["0 16px","0 16px","0 16px","0 16px","0 16px","0 16px"],$alignItems:"start","data-testid":"audio-episode-details-wrapper",children:[(0,a.jsx)(N,{$isStationPage:s,"data-testid":"audio-episode-details-buttons",$columns:["repeat(3, 90px)","repeat(3, 90px)",1,1,1,1],$gridGap:["0px","0px","24px","24px","24px","24px"],$margin:["0 -1rem","0 -1rem","0","0","0","0"],children:l&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(S.SaveButton,{alignment:"bottom-left",isOnLeftEdge:!0,action:"save",isInverse:!1,iconPosition:"top",variant:"audio",contentId:m,avProperties:p,disabled:g}),(0,a.jsx)(S.SaveButton,{alignment:"bottom-left",isOnLeftEdge:!0,action:"follow",isInverse:!1,iconPosition:"top",variant:"audio",contentId:y||f,contentSubtype:d,avProperties:{...p,av_content_subtype:d,av_content_id:y||f}}),(0,a.jsx)(j.default,{withOverlayBackground:!0,alignment:"bottom-left",isInverse:!0,size:"large",trigger:"click",isOnLeftEdge:!0,iconPosition:"top",type:"round",title:"Share",avProperties:p})]})}),(0,a.jsxs)(v.GridStyled,{"data-testid":"audio-episode-details-info",$columns:[1,1,1,1,1,1],$gridGap:["16px","16px","24px","24px","24px","24px"],children:[(0,a.jsx)(F,{duration:t,releaseDate:e,isWithinSubscriptionWindow:c,availabilityInfo:i,isContentUnavailable:u}),(0,a.jsxs)(v.GridStyled,{$columns:[1,1,1,1,1,1],$gridGap:["16px","16px","16px","16px","16px","16px"],children:[o.map((e,t)=>(0,a.jsx)(T,{children:e},t)),(0,a.jsxs)(A,{children:[n&&(0,a.jsxs)(b.default,{href:n,styledAnchor:B,children:[(0,a.jsx)("p",{children:"See more episodes"}),(0,a.jsx)(w.default,{name:"arrows:chevron-right"})]}),r&&(0,a.jsxs)(b.default,{href:r,styledAnchor:B,target:"_blank",children:[(0,a.jsx)("p",{children:"Programme website"}),(0,a.jsx)(w.default,{name:"arrows:chevron-right"})]})]})]})]})]})};var L=e.i(249356),D=e.i(46230);let M=$.default.div.withConfig({displayName:"AudioEpisodePlayer.styles__SPAPlayerPlaceholderStyled",componentId:"sc-6c3c1aa0-0"})`
  width: 100%;
  height: 160px;
`,R=$.default.div.withConfig({displayName:"AudioEpisodePlayer.styles__PianoDivStyled",componentId:"sc-6c3c1aa0-1"})`
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  overflow: hidden;
  height: 152px;
  ${(0,C.applyStylesForBreakpoints)($.css`
      height: 140px;
    `,"group3")};
`,O=(0,$.default)(M).withConfig({displayName:"AudioEpisodePlayer.styles__AudioWindowingPlaceholderStyled",componentId:"sc-6c3c1aa0-2"})`
  display: grid;
  place-content: center;
  opacity: 0.7;
`,G=$.default.button.withConfig({displayName:"AudioEpisodePlayer.styles__AudioWindowingPlaceholderButtonStyled",componentId:"sc-6c3c1aa0-3"})(({theme:e})=>$.css`
    color: ${e.text.onInverseBG.default.value};
    border: 4px solid ${e.text.onInverseBG.default.value};
    border-radius: 50%;
    width: 68px;
    aspect-ratio: 1 / 1;
    display: grid;
    place-content: center;
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    cursor: not-allowed;
  `),U="audioEpisodePlayerPlaceholder",H="audioEpisodePagePianoDiv",W="audioEpisodeWindowingPlaceholder",z="audioEpisodeWindowingPlaceholderButton",Y="Audio player is unavailable";var q=e.i(745853),V=e.i(449492);let Q=(0,t.memo)(({episodeId:e,durationInSeconds:t,upNextCollection:i,mediaProps:o,isAutoplayEnabled:n,isNextItemAutoplayEnabled:r,onAutoplayEnabledToggle:l,onTimeUpdate:s,onPlaybackUpdate:p})=>{let{push:c}=(0,d.useAppRouter)(),u=function(e,t=0){let[a]=(0,q.useMediaProgress)([e]),i=Math.round(t*V.EARLY_PROGRESS/100),o=Math.round(t*V.LATE_PROGRESS/100),{offset:n=null}=a??{};return null!==n&&Number.isInteger(n)?0===n||n>=o?0:Math.max(n,i):null}(e,t);if(null===u)return(0,a.jsx)(M,{"data-testid":U});let g=0!==i.length;return(0,a.jsx)(D.default,{...o,testId:"audioEpisodePlayer",isAutoPlayDisabled:!n,nextItemAutoPlay:r,startTime:u,onTimeUpdate:s,onPlaybackStarted:p("playing"),onPlaybackPaused:p("paused"),onPlaybackEnded:p("ended"),onNextRequested:()=>{let[{href:e}={}]=i;e&&c(e)},onUserAutoplaySettingChange:l,includeNextButton:g})},L.default),X=()=>(0,a.jsx)(O,{id:W,"data-testid":W,children:(0,a.jsx)(G,{disabled:!0,id:z,"data-testid":z,"aria-label":Y,title:Y,children:(0,a.jsx)(w.default,{name:"playback-avkx:play",width:18,height:18})})}),K=({playerSlotState:e,episodeId:t,durationInSeconds:i,upNextCollection:o,mediaProps:n,isAutoplayEnabled:r,isNextItemAutoplayEnabled:l,onAutoplayEnabledToggle:s,onTimeUpdate:d,onPlaybackUpdate:p})=>"loading"===e?(0,a.jsx)(M,{"data-testid":U}):"subscriptionGate"===e?(0,a.jsx)(R,{id:H,"data-testid":H}):"unavailable"!==e&&t?(0,a.jsx)(Q,{episodeId:t,durationInSeconds:i,upNextCollection:o,mediaProps:n,isAutoplayEnabled:r,isNextItemAutoplayEnabled:l,onAutoplayEnabledToggle:s,onTimeUpdate:d,onPlaybackUpdate:p}):(0,a.jsx)(X,{});var Z=e.i(958678),J=e.i(450228);let ee=$.css`
  width: calc(100% - 24px);
  padding: 0 12px;
`,et=$.default.div.withConfig({displayName:"AudioEpisodeTop.styles__AudioEpisodeTopWrapperStyled",componentId:"sc-5e1e83ec-0"})`
  position: relative;
  padding-top: 48px;

  ${({guidance:e})=>!e&&(0,C.applyStylesForBreakpoints)($.css`
        padding-top: 24px;
      `,"group3")};
`,ea=$.default.div.withConfig({displayName:"AudioEpisodeTop.styles__AudioEpisodeInnerStyled",componentId:"sc-5e1e83ec-1"})`
  max-width: 1280px;
  margin: auto;
`,ei=$.default.div.withConfig({displayName:"AudioEpisodeTop.styles__AudioEpisodeTopStyled",componentId:"sc-5e1e83ec-2"})`
  max-width: 722px;
  margin: auto;
  display: flex;
  flex-direction: row;
  column-gap: 32px;

  ${(0,C.applyStylesForBreakpoints)($.css`
      flex-direction: column;
      align-items: center;
      overflow: visible;
      row-gap: 12px;
      height: 284px;
    `,"group3")};
`,eo=$.default.div.withConfig({displayName:"AudioEpisodeTop.styles__AudioEpisodeTextsStyled",componentId:"sc-5e1e83ec-3"})`
  ${({theme:e})=>$.css`
    align-self: baseline;

    ${(0,C.applyStylesForBreakpoints)($.css`
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
`,en=$.default.div.withConfig({displayName:"AudioEpisodeTop.styles__AudioEpisodeImageStyled",componentId:"sc-5e1e83ec-4"})`
  position: relative;
  z-index: 1;
  width: auto;
  aspect-ratio: 1 / 1;
  height: 142px;

  ${(0,C.applyStylesForBreakpoints)($.css`
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

    ${(0,C.applyStylesForBreakpoints)($.css`
        height: 190px;
      `,"group3")};
  }
`,er=$.default.div.withConfig({displayName:"AudioEpisodeTop.styles__AudioEpisodeBackgroundStyled",componentId:"sc-5e1e83ec-5"})`
  ${({$imgUrl:e})=>e?$.css`
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

          ${(0,C.applyStylesForBreakpoints)($.css`
              display: none;
            `,"group3")};
        `:$.css``};
`,el=(0,$.default)(er).withConfig({displayName:"AudioEpisodeTop.styles__AudioEpisodeMobileBackgroundStyled",componentId:"sc-5e1e83ec-6"})`
  ${({$imgUrl:e})=>$.css`
    display: none;

    ${e&&(0,C.applyStylesForBreakpoints)($.css`
        background: url(${e}) no-repeat center;
        height: 360px;
        display: block;
        z-index: -2;
        left: -50%;
        bottom: 28px;
      `,"group3")};
  `}
`,es=$.default.h2.withConfig({displayName:"AudioEpisodeTop.styles__AudioEpisodeBrandNameStyled",componentId:"sc-5e1e83ec-7"})`
  ${({theme:e})=>$.css`
    color: ${e.text.onInverseBG.mediumEmphasis.value};
    text-align: left;
    margin-bottom: 16px;

    ${(0,k.applyTypography)(e.podcastPlayer.brandName.default.bpLarge)};

    ${(0,C.applyStylesForBreakpoints)($.css`
        text-align: left;
        margin-bottom: 8px;

        ${ee};
        ${(0,k.applyTypography)(e.podcastPlayer.brandName.default.bpSmall)};
      `,"group3")};
  `};
`,ed=$.default.h3.withConfig({displayName:"AudioEpisodeTop.styles__AudioEpisodeSeriesNameStyled",componentId:"sc-5e1e83ec-8"})`
  ${({theme:e})=>$.css`
    color: ${e.text.onInverseBG.lowEmpasis.value};
    margin-bottom: 4px;
    text-align: left;

    ${(0,k.applyTypography)(e.podcastPlayer.seriesName.bpLarge)};

    ${(0,C.applyStylesForBreakpoints)($.css`
        text-align: left;

        ${ee};
        ${(0,k.applyTypography)(e.podcastPlayer.seriesName.bpSmall)};
      `,"group3")};
  `};
`,ep=$.default.h1.withConfig({displayName:"AudioEpisodeTop.styles__AudioEpisodeTitleStyled",componentId:"sc-5e1e83ec-9"})`
  ${({theme:e})=>$.css`
    text-align: left;
    color: ${e.text.onInverseBG.default.value};
    ${(0,k.applyTypography)(e.podcastPlayer.episodeName.bpLarge)};

    ${(0,C.applyStylesForBreakpoints)($.css`
        text-align: left;

        ${ee};
        ${(0,k.applyTypography)(e.podcastPlayer.episodeName.bpSmall)};
      `,"group3")};
  `};
`;var ec=e.i(84541);let eu=(e,t,a=10)=>i=>{let[{target:o,contentRect:n}]=i,{children:r}=o,{width:l}=n,s=Array.from(r),d=t?s[s.length-1]:null,p=s.reduce((e,t)=>{let{clientWidth:a}=t;return e+a},a),c=p>l;if(d){let{clientWidth:t}=d;l-t>p&&e(c)}else c!==t&&e(c)};var eg=e.i(468364);let em=$.default.div.withConfig({displayName:"GuidanceText.styles__GuidanceOuterStyled",componentId:"sc-53656955-0"})`
  ${({$isOpen:e})=>$.css`
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
`,ey=$.default.div.withConfig({displayName:"GuidanceText.styles__GuidanceInnerStyled",componentId:"sc-53656955-1"})`
  ${({theme:e,$isOpen:t})=>$.css`
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
      ${(0,k.applyTypography)(e.textLink.small.regular.bpLarge)}

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
`,ef=$.default.p.withConfig({displayName:"GuidanceText.styles__GuidanceTextStyled",componentId:"sc-53656955-2"})`
  ${({theme:e,$isOpen:t})=>$.css`
    color: #ffffff;
    height: auto;
    white-space: ${t?"unset":"nowrap"};
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 10px;

    ${(0,k.applyTypography)(e.errorBannerText.bpSmall)}
  `}
`,eh=$.default.div.withConfig({displayName:"GuidanceText.styles__GuidanceIconWrapper",componentId:"sc-53656955-3"})`
  height: 1em;
`,ex=({text:e})=>{let[i,o]=(0,t.useState)(!1),[n,r]=(0,t.useState)(!1),l=(0,t.useRef)(null);return(0,eg.useResizeObserver)(l,eu(r,n)),(0,a.jsx)(em,{"data-testid":"audioEpisodeGuidanceText",$isOpen:i,children:(0,a.jsxs)(ey,{$isOpen:i,ref:l,children:[(0,a.jsx)(eh,{children:(0,a.jsx)(w.default,{name:"social:guidance"})}),(0,a.jsx)(ef,{$isOpen:i,children:e}),n&&(0,a.jsx)(ec.default,{text:`${i?"See less":"See more"}`,type:"unboxed-share",onClick:()=>o(!i)})]})})},eb=({brandName:e,seriesName:t,episodeTitle:i,img:o="",backgroundImg:n="",alt:r,guidance:l})=>(0,a.jsxs)(et,{"data-testid":"audioEpisodeTopWrapperStyled",guidance:!!l,children:[n&&(0,a.jsx)(Z.default,{children:(0,a.jsx)("link",{rel:"preload",as:"image",href:n,fetchpriority:"high"})}),l&&(0,a.jsx)(ex,{text:l}),(0,a.jsxs)(ea,{children:[(0,a.jsxs)(ei,{children:[(0,a.jsxs)(en,{children:[(0,a.jsx)(el,{$imgUrl:n}),(0,a.jsx)(J.default,{imageUrlTemplate:o,alt:r,loading:"eager",fetchPriority:"high",sizes:"(min-width: 780px) 252px, 338px"})]}),(0,a.jsxs)(eo,{children:[e&&(0,a.jsx)(es,{"data-testid":"audioEpisodeBrandNameStyled",children:e}),t&&(0,a.jsx)(ed,{"data-testid":"audioEpisodeSeriesNameStyled",children:t}),i&&(0,a.jsx)(ep,{"data-testid":"audioEpisodeTitleStyled",children:i})]})]}),(0,a.jsx)(er,{$imgUrl:n})]})]}),eS=$.default.div.withConfig({displayName:"AudioEpisodePage.styles__AudioEpisodePageOuterContainerStyled",componentId:"sc-c3233368-0"})`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 120px;
  display: grid;
  gap: 32px;

  ${(0,C.applyStylesForBreakpoints)($.css`
      gap: 24px;
    `,"group2")};
`,ev=$.default.div.withConfig({displayName:"AudioEpisodePage.styles__AudioEpisodePageInnerContainerStyled",componentId:"sc-c3233368-1"})`
  max-width: 1280px;
  margin: auto;
  box-sizing: border-box;
  display: grid;
  gap: 16px;
`,ew=$.default.div.withConfig({displayName:"AudioEpisodePage.styles__AudioEpisodeDarkContainerStyled",componentId:"sc-c3233368-2"})`
  background-color: ${({theme:e})=>e.container.onInverseBG2.value};
  width: 100%;
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  overflow: hidden auto;
`;var ej=e.i(879677),e$=e.i(508259);let eC={allowedFor:"all"},ek=()=>({playlistLabels:[],blocks:[],playerPosition:"audio-episode-page",isAudio:!0});function eI(e){return e.blocks?.find(e=>e?.type==="mediaMetadata")}function e_(e){return eI(e)?.model}function eT(e){return e_(e)?.versions?.[0]}let eB=({contents:e})=>{let[{model:t}={model:{blocks:[],availability:eC}}]=e.filter(({type:e})=>"audio-episode"===e),[{model:o}={model:{blocks:[]}}]=e.filter(({type:e})=>"audio-next-programme"===e),{isSubscribed:n,isSubscriptionAllowed:l,isSubscriptionCheckComplete:s}=(0,x.useSubscriptionContext)(),d=(0,g.useIsWithinSubscriptionWindow)(t.availability),p=(0,u.useFeatureFlag)("audio-windowing"),m=function(e,{isSubscribed:t,isWithinSubscriptionWindow:a=!1,isAudioWindowingEnabled:i=!1}={}){if(void 0===t||!e.blocks?.length)return e;let o=eI(e);if(!o?.model?.versions?.length)return e;let n=o.model.versions,l=i?(0,r.selectAudioVersion)(n,a||t):n[0];return{...e,blocks:e.blocks.map(e=>"mediaMetadata"===e.type?{...e,model:{...e.model,versions:l?[l]:[]}}:e)}}(t,{isSubscribed:s&&n,isWithinSubscriptionWindow:d,isAudioWindowingEnabled:p}),b=!d&&!s,S=eT(m),v=!!S?.versionId,w=function({isSubscriptionCheckComplete:e,canPlay:t,isSubscriptionAllowed:a,hasPlayableVersion:i}){return e?i?t?"enabled":a?"subscriptionGate":"unavailable":"unavailable":"loading"}({isSubscriptionCheckComplete:s,canPlay:(0,r.canPlayEpisode)(t.availability,{isAudioWindowingEnabled:p,isSubscriptionAllowed:l,isSubscribed:n}),isSubscriptionAllowed:l,hasPlayableVersion:v}),j=function(e){try{let{brand:t,series:a,title:i}=e,o=e_(e),n=eT(e),{title:l}=(0,ej.default)(t,{}),{title:s}=(0,ej.default)(a,{});if(!o?.indexImage?.model?.blocks)throw Error("Missing media metadata required for audio page top props");let{src:d,altText:p}=o.indexImage.model.blocks,c=(0,r.getAudioImageSrc)(d),u=(0,r.getAudioImageSrc)(d,!0);return{brandName:l,seriesName:s,img:c,backgroundImg:u,alt:p,episodeTitle:i,guidance:n?.warnings}}catch(e){return e$.logger.error(`Error getting audio page top props: ${e}`),{brandName:"",seriesName:"",img:"",backgroundImg:"",alt:"",episodeTitle:"",guidance:""}}}(m),$=function(e){try{let{releaseDate:t,series:a,brand:o,title:n,id:r}=e,l=e_(e),s=eT(e),{synopses:d,programmesUrl:p=""}=l||{},{path:c}=(0,ej.default)(o||a,{}),u=o?i.ContentSubtype.Brand:i.ContentSubtype.Series,g=l?.tags?.map(e=>e.name)||[],m=g.length?g.join(","):"",y={av_content_type:i.ContentType.Audio,av_content_subtype:i.ContentSubtype.Episode,av_content_id:s?.versionId,av_show:o?.title??a?.title??"",av_series_id:a?.id??"",av_series_title:a?.title??"",av_episode:n,av_episode_id:r,av_brand_id:o?.id??"",av_brand_title:o?.title??"",av_content_genre:m,av_content_topic:m};return{description:function(e){if(!e)return[];{let{long:t,medium:a,short:i}=e;return(t||a||i||"").split("\n").map(e=>e.trim()).filter(Boolean)}}(d),duration:function(e){if(e){let[t,a,i]=e.split(":"),[o]=i.split("."),n=60*Number(t)+Number(a)+Math.round(Number(o)/60);return new Intl.NumberFormat("en-US",{style:"unit",unit:"minute",unitDisplay:"long",maximumFractionDigits:0}).format(n)}}(s?.duration),releaseDate:function(e){if(e){let t=new Date(e),a=t.getUTCDate(),i=t.toLocaleDateString("en-US",{month:"long",timeZone:"UTC"}),o=t.getUTCFullYear();return`${a} ${i} ${o}`}}(t),availabilityInfo:function(e){if(e){let t=Date.now(),a=Math.max(e,t)-t;if(a>=31536e6)return"Available for over a year";{let e=Math.floor(a/864e5);return e<=1?"Available for 1 day":`Available for ${e} days`}}}(s?.availableTo),moreEpisodesPath:c,programmesUrl:p,contentSubtype:u,avProperties:y}}catch(e){return e$.logger.error(`Error getting audio page details props: ${e}`),{description:[]}}}(m),C={...$,isWithinSubscriptionWindow:d,isContentUnavailable:!v,isSaveDisabled:d&&!l,duration:b?void 0:$.duration},k=function(e){if(!e)return 0;try{let[t,a,i]=e.split(":"),[o]=i.split(".");return 3600*Number(t)+60*Number(a)+Number(o)}catch{return 0}}(S?.duration),I=y(function(e=[]){try{return e.map(({model:e})=>(0,r.getAudioCollectionItem)(e,"bath"))}catch{return[]}}(o.blocks)),_=function(e){try{let t=eI(e);if(!t)return ek();let a=t.model?.tags?.map(e=>e.name)||[],i=a.length?a.join(","):"",o=t.blockId;return{blocks:[{type:"audio",model:{blocks:[{type:"media",model:{blocks:[t]}}]}}],playerPosition:"audio-episode-page",isAudio:!0,playlistLabels:[{...i?{content_topic:i}:{},...o?{content_id:o}:{},content_type:"audio-episode"}]}}catch(e){return e$.logger.error(`Error getting audio page media props: ${e}`),ek()}}(m),{providerValue:T,handlePlaybackUpdate:B,handleTimeUpdate:N}=c(I),{isAutoplayEnabled:A,onAutoplayEnabledToggle:P,isNextItemAutoplayEnabled:F}=T;return(0,a.jsxs)(eS,{"data-testid":"audio-episode-page",children:[(0,a.jsxs)(ew,{children:[(0,a.jsxs)(ev,{children:[(0,a.jsx)(eb,{...j}),(0,a.jsx)(K,{playerSlotState:w,episodeId:m.id,mediaProps:_,durationInSeconds:k,upNextCollection:I,isAutoplayEnabled:A,isNextItemAutoplayEnabled:F,onAutoplayEnabledToggle:P,onTimeUpdate:N,onPlaybackUpdate:B})]}),(0,a.jsx)(f.default,{value:T,children:(0,a.jsx)(h.default,{type:"kentucky",content:I})})]}),(0,a.jsx)(E,{...C})]})},eN=$.default.div.withConfig({displayName:"AudioSeriesTop.styles__AudioSeriesTopStyled",componentId:"sc-408a4db9-0"})`
  display: grid;
  margin-block: 40px;
  row-gap: 16px;
  grid-auto-rows: min-content;
  min-height: 134px;

  ${(0,C.applyStylesForBreakpoints)($.css`
      margin-block: 24px 32px;
    `,"group4")};

  ${(0,C.applyStylesForBreakpoints)($.css`
      row-gap: 12px;
      margin-block: 0;
      min-height: 0;
    `,"group2")};
`,eA=$.default.div.withConfig({displayName:"AudioSeriesTop.styles__AudioSeriesTopTitleAreaStyled",componentId:"sc-408a4db9-1"})`
  display: grid;
  grid-auto-rows: min-content;
  row-gap: 8px;
  grid-template-areas: 'series-name' 'title';
`,eP=$.default.h3.withConfig({displayName:"AudioSeriesTop.styles__AudioSeriesTopBrandNameStyled",componentId:"sc-408a4db9-2"})`
  ${({theme:e})=>$.css`
    color: ${e.text.onInverseBG.default.value};

    ${(0,k.applyTypography)(e.audio.seriesName.bpLarge)};

    ${(0,C.applyStylesForBreakpoints)($.css`
        color: ${e.text.default.value};

        ${(0,k.applyTypography)(e.audio.seriesName.bpSmall)};
      `,"group2")};
  `}
`,eF=$.default.h2.withConfig({displayName:"AudioSeriesTop.styles__AudioSeriesTopTitleStyled",componentId:"sc-408a4db9-3"})`
  ${({theme:e})=>$.css`
    color: ${e.text.onInverseBG.default.value};

    ${(0,k.applyTypography)(e.audio.brandTitle.large.bpLarge)};

    ${(0,C.applyStylesForBreakpoints)((0,k.applyTypography)(e.audio.brandTitle.medium.bpLarge),"group3")};

    ${(0,C.applyStylesForBreakpoints)($.css`
        color: ${e.text.default.value};

        ${(0,k.applyTypography)(e.audio.brandTitle.large.bpSmall)};
      `,"group2")};
  `}
`,eE=$.default.p.withConfig({displayName:"AudioSeriesTop.styles__AudioSeriesTopDescriptionStyled",componentId:"sc-408a4db9-4"})`
  ${({theme:e})=>$.css`
    color: ${e.text.onInverseBG.mediumEmphasis.value};

    ${(0,k.applyTypography)(e.bodyCopy.default.bpLarge)};

    ${(0,C.applyStylesForBreakpoints)($.css`
        color: ${e.text.mediumEmphasis.value};
        min-height: 0;

        ${(0,k.applyTypography)(e.bodyCopy.default.bpSmall)};
      `,"group2")};
  `}
`,eL=$.default.div.withConfig({displayName:"AudioSeriesTop.styles__AudioSeriesTopSeeMoreDesktopStyled",componentId:"sc-408a4db9-5"})`
  ${(0,C.applyStylesForBreakpoints)($.css`
      display: none;
      visibility: hidden;
    `,"group2")}
`,eD=$.default.div.withConfig({displayName:"AudioSeriesTop.styles__AudioSeriesTopSeeMoreMobileStyled",componentId:"sc-408a4db9-6"})`
  display: none;

  ${(0,C.applyStylesForBreakpoints)($.css`
      display: flex;
    `,"group2")}
`,eM={withoutPaddingInline:!0,iconPosition:"right",icon:"arrows:chevron-right",text:"See more episodes",type:"unboxed"},eR=({seeMoreLink:e})=>e?(0,a.jsxs)(b.default,{href:e,children:[(0,a.jsx)(eL,{children:(0,a.jsx)(ec.default,{isInverse:!0,...eM})}),(0,a.jsx)(eD,{children:(0,a.jsx)(ec.default,{...eM})})]}):null,eO=(0,t.memo)(({title:e,description:t,brandName:i,seeMoreLink:o})=>(0,a.jsxs)(eN,{children:[(0,a.jsxs)(eA,{children:[i&&(0,a.jsx)(eP,{children:i}),(0,a.jsx)(eF,{children:e})]}),(0,a.jsx)(eE,{children:t}),(0,a.jsx)(eR,{seeMoreLink:o})]}));var eG=e.i(996847),eU=e.i(610503),eH=e.i(901414);let eW={group6:172,group5:56,group4:16,group3:16,group2:16,group1:16},ez={group6:68,group5:56,group4:24,group3:16,group2:16,group1:16},eY=["group5","group4","group3"],eq=$.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesPageStyled",componentId:"sc-3a03d02b-0"})`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-areas: 'sticky-area top' 'sticky-area details';
  grid-template-columns: 300px 1fr;
  column-gap: 68px;

  ${eY.map(e=>(0,C.applyStylesForBreakpoints)($.css`
        margin-inline: ${eW[e]}px;
        column-gap: ${ez[e]}px;
      `,e))};

  ${(0,C.applyStylesForBreakpoints)($.css`
      grid-template-columns: 1fr;
      grid-template-areas: 'top' 'details';
    `,"group3")};
`,eV=$.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesStickyAreaStyled",componentId:"sc-3a03d02b-1"})`
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

  ${(0,C.applyStylesForBreakpoints)($.css`
      display: none;
    `,"group3")};
`,eQ=$.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesStickyImageContainerStyled",componentId:"sc-3a03d02b-2"})`
  ${({$top:e})=>$.css`
    position: sticky;
    top: ${e}px;
    display: grid;
    row-gap: 12px;
  `}
`,eX=$.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesTopAreaStyled",componentId:"sc-3a03d02b-3"})`
  ${({theme:e})=>$.css`
    grid-area: top;
    position: relative;

    ${(0,C.applyStylesForBreakpoints)($.css`
        display: grid;
        grid-auto-rows: min-content;
        grid-template-columns: clamp(203px, 35vw, 266px) 1fr;
        grid-template-areas: 'top-image top-details' 'top-image top-actions';
        align-items: start;
        column-gap: 16px;
        border-bottom: 1px solid ${e.divider.onInverseBG.highEmphasis.value};
      `,"group3")};

    ${(0,C.applyStylesForBreakpoints)($.css`
        grid-template-columns: 1fr;
        grid-template-areas: 'top-image' 'top-details' 'top-actions';
        column-gap: 0;
        border-bottom: none;
      `,"group2")};
  `}
`,eK=$.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesDetailsAreaStyled",componentId:"sc-3a03d02b-4"})`
  grid-area: details;
`,eZ=$.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesTopImageContainerStyled",componentId:"sc-3a03d02b-5"})`
  ${({$top:e})=>$.css`
    display: none;

    ${(0,C.applyStylesForBreakpoints)($.css`
        padding-top: 16px;
        position: unset;
        justify-self: center;

        > img {
          width: 190px;
        }
      `,"group4")};

    ${(0,C.applyStylesForBreakpoints)($.css`
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

    ${(0,C.applyStylesForBreakpoints)($.css`
        position: relative;
        top: unset;
      `,"group2")};
  `}
`,eJ=$.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesTopActionsStyled",componentId:"sc-3a03d02b-6"})`
  display: none;

  ${(0,C.applyStylesForBreakpoints)($.css`
      grid-area: top-actions;
      display: grid;
      grid-template-columns: repeat(2, 126px);
      column-gap: 32px;
      padding-block: 16px;
    `,"group3")};
`,e0=$.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesTopDetailsStyled",componentId:"sc-3a03d02b-7"})`
  ${(0,C.applyStylesForBreakpoints)($.css`
      grid-area: top-details;
    `,"group3")};
`,e1=$.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesBackgroundStyled",componentId:"sc-3a03d02b-8"})`
  ${({$left:e,$imageLeft:t,$imgUrl:a,$maxHeight:i,theme:o,$width:n})=>$.css`
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
      left: ${t-eW.group6}px;

      ${eY.map(e=>(0,C.applyStylesForBreakpoints)($.css`
            left: ${t-eW[e]}px;
          `,e))}
    }

    ${(0,C.applyStylesForBreakpoints)($.css`
        max-height: ${i}px;
      `,"group3")}

    ${(0,C.applyStylesForBreakpoints)($.css`
        max-height: 158px;

        &::after {
          top: -266px;
          height: 360px;
          left: calc(50% - 360px / 2);
        }
      `,"group2")};
  `}
`,e2=$.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesImageContainerStyled",componentId:"sc-3a03d02b-9"})`
  > img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    margin-top: 40px;
  }
`,e4=$.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesActionsStyled",componentId:"sc-3a03d02b-10"})`
  ${({$paddingTop:e})=>$.css`
    display: grid;
    grid-template-columns: repeat(2, 126px);
    column-gap: 32px;
    align-items: start;
    position: sticky;
    align-self: start;
    padding-top: ${e}px;
  `}
`,e6=$.default.div.withConfig({displayName:"AudioSeriesPage.styles__AudioSeriesAdContainerStyled",componentId:"sc-3a03d02b-11"})`
  ${({$top:e})=>$.css`
    position: sticky;
    padding-block: 40px;
    top: ${e}px;
  `}
`,e3=(0,t.memo)(e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(S.SaveButton,{alignment:"bottom-left",action:"follow",variant:"audio",isInverse:!1,iconPosition:"left",...e}),(0,a.jsx)(j.default,{withOverlayBackground:!0,isInverse:!0,size:"large",trigger:"click",isOnLeftEdge:!0,iconPosition:"left",type:"round",title:"Share",...e})]})),e8=({topAreaHeight:e,imageAreaHeight:i,topRef:o,imageContainerRef:n,children:r})=>{let[l,s]=(0,t.useState)(0);return(0,t.useEffect)(()=>{let e=(0,eU.default)(()=>{let{current:e}=o,{current:t}=n;if(e&&t){let{bottom:a}=e.getBoundingClientRect(),{bottom:i}=t.getBoundingClientRect(),o=Math.max(0,a-i);l!==o&&s((l<o?Math.floor:Math.ceil)(o))}},25,{leading:!0,trailing:!0});return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[l,o,n]),(0,t.useEffect)(()=>{s(Math.max(0,e-i))},[e,i]),(0,a.jsx)(e4,{$paddingTop:l,children:r})},e5=({sectionComponent:e,imageComponent:i,actionsComponent:o,imageUrl:r,topComponent:l})=>{let s=(0,t.useRef)(null),d=(0,t.useRef)(null),p=(0,t.useRef)(null),c=(0,t.useRef)(null),[u,g]=(0,t.useState)(0),[m,y]=(0,t.useState)(0),[f,h]=(0,t.useState)(0),[x,b]=(0,t.useState)(0),[S,v]=(0,t.useState)(0),[w,j]=(0,t.useState)(0),[$,C]=(0,t.useState)("unset");(0,eg.useResizeObserver)(s,e=>{let[{target:t}]=e,{offsetTop:a}=t;y(a)},100),(0,eg.useResizeObserver)(d,e=>{let[{target:t}]=e,{left:a,height:i}=t.getBoundingClientRect();g(a),v(i)},100),(0,eg.useResizeObserver)(p,e=>{let[{target:t}]=e,{height:a,left:i}=t.getBoundingClientRect();h(a),b(i)},100),(0,eg.useResizeObserver)(c,e=>{let[{target:t}]=e,{height:a}=t.getBoundingClientRect();j(a)},100);let k=(0,eG.default)(()=>{C(`${document.documentElement.clientWidth}px`)},100,{leading:!0});(0,t.useEffect)(()=>(C(`${document.documentElement.clientWidth}px`),window.addEventListener("resize",k),()=>{window.removeEventListener("resize",k)}),[]);let I=(0,t.useRef)(null),_=(0,t.useRef)(!1),T=(0,t.useRef)(null),B=(0,t.useRef)(!1),N=(0,t.useRef)(null),A=(0,t.useRef)(!1),[P,F]=(0,eH.useBreakpoints)("AudioSeriesComponents"),E=e=>{e.forEach(e=>{let t=document.getElementById(`dotcom-${e}`);t&&(t.style.display="none")})};return(0,t.useEffect)(()=>{if(F)switch(P){case"group1":case"group2":!B.current&&T.current&&(T.current.requestAd(),B.current=!0,E(["mid_2","sid_1"]));break;case"group3":!A.current&&N.current&&(N.current.requestAd(),A.current=!0,E(["mid_1","sid_1"]));break;case"group4":case"group5":case"group6":!_.current&&I.current&&(I.current.requestAd(),_.current=!0,E(["mid_1","mid_2"]))}},[P]),(0,a.jsxs)(eq,{"data-testid":"audio-series-page",ref:s,children:[(0,a.jsxs)(eV,{children:[(0,a.jsx)("div",{children:(0,a.jsxs)(eQ,{$top:m,children:[(0,a.jsx)(e2,{ref:p,children:i}),(0,a.jsx)(e8,{topRef:d,imageContainerRef:p,topAreaHeight:S,imageAreaHeight:f,children:o})]})}),(0,a.jsx)("div",{children:(0,a.jsx)(e6,{$top:m,children:(0,a.jsx)(n.default,{type:"sid_1",deferRequest:!0,forwardedAdRef:I,isFullWidth:!1})})})]}),(0,a.jsxs)(eX,{ref:d,children:[(0,a.jsx)(e1,{$left:u,$maxHeight:w,$imageLeft:x,$imgUrl:r,$width:$}),(0,a.jsx)(e0,{ref:c,children:l}),(0,a.jsx)(eZ,{$top:m,children:i}),(0,a.jsx)(eJ,{children:o})]}),(0,a.jsx)(eK,{children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.default,{type:"mid_1",deferRequest:!0,forwardedAdRef:T}),e,(0,a.jsx)(n.default,{type:"mid_2",deferRequest:!0,forwardedAdRef:N})]})})]})};function e7(e,t){let[a]=e.filter(({type:e})=>["audio-brand","audio-series"].includes(e));switch(t){case"top":var o=a?.model;try{let{title:e="",summary:t}=o,{brand:a}=o;return{title:e,description:t?.medium||t?.short||t?.long||"",brandName:a?.title,seeMoreLink:a?.path}}catch(e){return e$.logger.error(`Error getting series page top props: ${e}`),{title:"",description:""}}case"hero-image":return function(e){try{let{indexImage:t}=e,{model:a}=t,{blocks:{src:i,altText:o}}=a;return{src:(0,r.getAudioImageSrc)(i),backgroundSrc:(0,r.getAudioImageSrc)(i,!0),altText:o}}catch(e){return e$.logger.error(`Error getting hero image: ${e}`),{src:"",backgroundSrc:"",altText:""}}}(a?.model);case"collection":var n=e;try{let[{model:e,type:t}]=n.filter(({type:e})=>["audio-brand","audio-series"].includes(e)),a=n.filter(({type:e})=>"audio-episode"===e),{episodeCount:i,id:o}=e;return{content:a.map(({model:e})=>(0,r.getAudioCollectionItem)(e,"york")),collectionId:o,audioPageType:t,paginationData:{page:0,pageSize:10,total:i}}}catch(e){return e$.logger.error(`Error getting series page collection: ${e}`),{content:[],collectionId:"",audioPageType:"",paginationData:{page:0,pageSize:10,total:0}}}case"actions":return function(e){try{let{model:t,type:a}=e,{brand:o,id:n,title:r,availability:l}=t,s=o?.id??n,d="audio-brand"===a||o?.id?i.ContentSubtype.Brand:i.ContentSubtype.Series,p=t.tags?.map(e=>e?.name)||[],c=p.length?p.join(","):"",u={av_content_type:i.ContentType.Audio,av_content_subtype:d,av_content_id:n,av_content_genre:c,av_content_topic:c,..."audio-series"===a?{av_series_id:n,av_series_title:r,av_brand_id:o?.id??"",av_brand_title:o?.title??"",av_show:o?.title??r??""}:{},..."audio-brand"===a?{av_brand_id:n,av_brand_title:r,av_show:r}:{}};return{contentSubtype:d,contentId:s,avProperties:u,availability:l}}catch(e){return e$.logger.error("Error getting actions props",e),{}}}(a)}}let e9=({contents:e})=>{let{src:i,backgroundSrc:o,altText:n}=(0,t.useMemo)(()=>e7(e,"hero-image"),[e]),r=(0,t.useMemo)(()=>e7(e,"top"),[e]),l=(0,t.useMemo)(()=>e7(e,"collection"),[e]),s=(0,t.useMemo)(()=>e7(e,"actions"),[e]);return(0,a.jsxs)(a.Fragment,{children:[o&&(0,a.jsx)(Z.default,{children:(0,a.jsx)("link",{rel:"preload",as:"image",href:o,fetchpriority:"high"})}),(0,a.jsx)(e5,{topComponent:(0,a.jsx)(eO,{...r}),actionsComponent:(0,a.jsx)(e3,{...s}),sectionComponent:(0,a.jsx)(h.default,{...l,type:"idaho"}),imageComponent:(0,a.jsx)(J.default,{imageUrlTemplate:i,alt:n,cardType:"AudioSeriesPage",loading:"eager",fetchPriority:"high",sizes:"535px"}),imageUrl:o})]})};var te=e.i(57988),tt=e.i(704570),ta=e.i(36480),ti=e.i(151155),to=e.i(895270),tn=e.i(232854),tr=e.i(102358),tl=e.i(551068),ts=e.i(108019);let td=(0,$.default)(ts.ContainerStyled).withConfig({displayName:"NestedNavigation.styles__NestedNavigationContainerStyled",componentId:"sc-a1ed20b4-0"})`
  ${({$navLevel:e,$isNestedNavAvailable:t,$isSponsored:a})=>$.css`
    gap: 4px;
    padding: 16px 0;

    /* sub-index */
    ${e>1&&!t&&$.css`
      padding: 12px 0;
    `}

    /* sponsored sub-index */
    ${e>1&&a&&!t&&$.css`
      padding: 12px 0;
      height: 68px;
    `}

    /* 3rd or more level of navigation */
    ${e>1&&t&&$.css`
      padding: 12px 0 8px 0;
    `}

    ${(0,C.applyStylesForBreakpoints)($.css`
        padding: 10px 16px;
        gap: 0;

        ${e>1&&$.css`
          padding: 12px 0;
        `}

        /* sponsored sub-index */
        ${e>1&&a&&!t&&$.css`
          gap: 10px;
          padding: 12px 0 8px 0;
          height: 106px;
        `}
      `,"group2")};
  `}
`,tp=$.default.div.withConfig({displayName:"NestedNavigation.styles__PageTitleContainerStyled",componentId:"sc-a1ed20b4-1"})`
  ${({$isSponsored:e,$navLevel:t})=>$.css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    min-height: ${t>1?"28px":"40px"};

    ${e&&(0,C.applyStylesForBreakpoints)($.css`
        justify-content: start;
      `,"group4")}

    ${(0,C.applyStylesForBreakpoints)($.css`
        gap: 12px;
        justify-content: center;
        min-height: ${t>1?"26px":"30px"};
      `,"group2")}
  `}
`,tc=$.default.nav.withConfig({displayName:"NestedNavigation.styles__NestedNavigationContentStyled",componentId:"sc-a1ed20b4-2"})`
  display: flex;
  position: relative;
  align-items: center;

  ${(0,C.applyStylesForBreakpoints)($.css`
      align-items: start;
      /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
      overflow-x: hidden;
    `,"group2")};
`,tu=$.default.h1.withConfig({displayName:"NestedNavigation.styles__PageTitleStyled",componentId:"sc-a1ed20b4-3"})`
  ${({theme:e,$isInverse:t,$navLevel:a})=>$.css`
    text-align: center;
    color: ${t?e.text.onInverseBG.default.value:e.text.default.value};

    ${(0,k.applyTypography)(e.topbarLevel1Title.bpLarge)};

    ${a>1&&$.css`
      ${(0,k.applyTypography)(e.nav.title.level3.default)};
    `}

    ${(0,C.applyStylesForBreakpoints)($.css`
        ${(0,k.applyTypography)(e.topbarLevel1Title.bpSmall)};

        ${a>1&&$.css`
          ${(0,k.applyTypography)(e.nav.title.level3.defaultMobile)};
        `}
      `,"group2")}
  `}
`,tg=$.default.span.withConfig({displayName:"NestedNavigation.styles__NewsLogoContainerStyled",componentId:"sc-a1ed20b4-4"})(({theme:e,$isFirstLevelNav:t})=>$.css`
    position: relative;
    display: grid;
    place-items: center;
    color: ${e.bbcNewsLogo.onDefaultBG.default.value};
    height: ${t?"26px":"18px"};

    svg {
      width: auto;
      height: 100%;
    }

    ${(0,C.applyStylesForBreakpoints)($.css`
        height: 18px;
      `,"group2")};
  `),tm=$.default.div.withConfig({displayName:"NestedNavigation.styles__NestedNavigationItemsContainerStyled",componentId:"sc-a1ed20b4-5"})`
  ${({$hasHiddenItems:e})=>$.css`
    width: 100%;

    ${e&&(0,C.applyStylesForBreakpoints)($.css`
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
`,ty=$.default.div.withConfig({displayName:"NestedNavigation.styles__NestedNavigationDropdownContainerStyled",componentId:"sc-a1ed20b4-6"})`
  display: flex;
  ${(0,C.applyStylesForBreakpoints)($.css`
      display: none;
    `,"group2")};
`,tf=$.default.ul.withConfig({displayName:"NestedNavigation.styles__NestedNavigationItemsStyled",componentId:"sc-a1ed20b4-7"})`
  ${({$isEmpty:e,$hasHiddenItems:t,$isSponsored:a})=>$.css`
    display: flex;
    justify-content: center;
    gap: 8px;
    height: ${e?0:"28px"};

    ${a&&(0,C.applyStylesForBreakpoints)($.css`
        justify-content: start;
      `,"group4")}

    ${(0,C.applyStylesForBreakpoints)($.css`
        ${t&&$.css`
          justify-content: start;
        `}

        ${a&&$.css`
          margin-bottom: 8px;
        `}

        height: 40px;
        gap: 0;
      `,"group2")};
  `}
`,th=$.default.li.withConfig({displayName:"NestedNavigation.styles__NavItemStyled",componentId:"sc-a1ed20b4-8"})`
  ${({theme:e,$isInverse:t,$isActive:a,$isInDropdown:i,$hasHiddenItems:o})=>$.css`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    height: 28px;

    ${t&&$.css`
      color: ${e.text.onInverseBG.default.value};
    `}

    ${(0,k.applyTypography)(e.nav.topbar.level3.default)};

    &:first-of-type {
      ${o&&!i&&(0,C.applyStylesForBreakpoints)($.css`
          margin-left: 16px;
        `,"group2")}
    }

    &:hover {
      background-color: ${e.nav.level3.bgHover.value};
      ${t&&$.css`
        color: inherit;
      `}
    }

    &[data-hidden='true'] {
      display: none;

      /* for group 1 and 2 menu items will be scrollable instead of showing dropdown */
      ${(0,C.applyStylesForBreakpoints)($.css`
          display: flex;
        `,"group2")}
    }

    ${a&&$.css`
      & a {
        font-weight: 700;
      }
    `}

    ${i&&$.css`
      padding: 0;
    `}

    ${(0,C.applyStylesForBreakpoints)($.css`
        height: 40px;
      `,"group2")}
  `};
`,tx=$.default.div.withConfig({displayName:"NestedNavigation.styles__NestedNavigationContainerOuterStyled",componentId:"sc-a1ed20b4-9"})`
  ${({theme:e,$isInverse:t})=>$.css`
    display: grid;

    ${t&&$.css`
      background-color: ${e.container.onInverseBG2.value};
    `}
  `}
`,tb=$.default.div.withConfig({displayName:"NestedNavigation.styles__SponsorAdContainerStyled",componentId:"sc-a1ed20b4-10"})`
  position: absolute;
  right: 0;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);

  ${(0,C.applyStylesForBreakpoints)($.css`
      position: unset;
      transform: unset;

      div {
        float: right;
      }
    `,"group2")};
`,tS=$.default.div.withConfig({displayName:"NestedNavigation.styles__HeaderImageAndLineContainerStyled",componentId:"sc-a1ed20b4-11"})`
  max-width: 1248px;
  margin: 0 auto;
  ${(0,C.applyStylesForBreakpoints)($.css`
      margin: auto 16px;
    `,"group5")};
`,tv=$.default.div.withConfig({displayName:"NestedNavigation.styles__HeaderImageWrapperStyled",componentId:"sc-a1ed20b4-12"})`
  margin-top: 16px;
  max-width: 390px;

  img {
    object-fit: cover;
  }
  ${(0,C.applyStylesForBreakpoints)($.css`
      max-width: 330px;
    `,"group4")};
  ${(0,C.applyStylesForBreakpoints)($.css`
      max-width: 240px;
    `,"group2")};
`,tw=$.default.hr.withConfig({displayName:"NestedNavigation.styles__HeaderLineStyled",componentId:"sc-a1ed20b4-13"})`
  ${({theme:e})=>$.css`
    width: 100%;
    height: 2px;
    background-color: ${e.divider.highEmphasis.value};
    border-width: 0;
    margin: 8px 0 24px 0;
  `}
`,tj=$.default.div.withConfig({displayName:"NestedNavigation.styles__HeaderImageAndSponsorContainerStyled",componentId:"sc-a1ed20b4-14"})`
  display: flex;
  position: relative;
  min-height: 50px;

  ${({$sponsorRendered:e})=>$.css`
    ${e&&(0,C.applyStylesForBreakpoints)($.css`
        height: 120px;
      `,"group2")}
  `}
`,t$=$.default.div.withConfig({displayName:"NestedNavigation.styles__HeaderSponsorContainerStyled",componentId:"sc-a1ed20b4-15"})`
  position: absolute;
  right: 0;
  bottom: 0;
`,tC=({isFirstLevelNav:e})=>(0,a.jsx)(tg,{"data-testid":"news-logo-container",$isFirstLevelNav:e,...e?{as:"h1"}:{},children:(0,a.jsx)(w.default,{name:"logo:news","aria-label":"News",role:"img"})}),tk=()=>(0,a.jsx)(tb,{children:(0,a.jsx)(n.default,{type:"spo",isFullWidth:!1})}),tI=({sponsored:e=!1})=>{let[i,o]=(0,t.useState)(!1);return(0,a.jsxs)(tS,{children:[(0,a.jsxs)(tj,{$sponsorRendered:i,children:[(0,a.jsx)(tv,{children:(0,a.jsx)(J.default,{imageUrlTemplate:"https://ichef.bbci.co.uk/images/ic/raw/p0j13mxm.jpg"})}),e&&(0,a.jsx)(t$,{children:(0,a.jsx)(n.default,{type:"spo",isFullWidth:!1,onAdvertRendered:()=>o(!0)})})]}),(0,a.jsx)(tw,{})]})},t_=({title:e,mainNavigation:i,isPreCurated:o,isBookmarksPage:n})=>{let r=(0,te.useCurrentSlug)(),l=(0,to.useDarkMode)(),[s,d]=(0,t.useState)(0),[p,c]=(0,t.useState)(-1),[u,g]=(0,t.useState)(!1),m=(0,tn.useIsAdsServiceEnabled)(),{isSponsored:y=!1}=(0,tt.usePageData)(),f=(0,t.useRef)(null),h=(0,t.useRef)(null),{isNestedMainNav:x,isNestedNavAvailable:S,nestedNavigationItems:v,activeNavigationItem:j,nestedNavigationTitle:$}=(0,tr.getActiveNavigationTree)(r,i),{level:C=0,title:k}=j||{},I=x&&p>=0&&p<=v.length,_=S&&$||e,T=!!r&&"glastonbury-live"===r[r.length-1],B=y&&m,N=(0,a.jsx)(a.Fragment,{children:v.slice(p).map(({title:e,...t},i)=>{let o=t.externalUrl||t.path||"",n=(0,tr.getNavigationAnalytics)("main",e,"",o,"nested_navigation_dropdown");return(0,a.jsx)(th,{$isInverse:!1,$isInDropdown:!0,$isActive:k===e,$hasHiddenItems:I,children:(0,a.jsx)(b.default,{analytics:n,href:o,styledAnchorInner:tl.NestedNavItemLinkStyled,children:e})},i)})});(0,eg.useResizeObserver)(h,(0,tr.checkResponsiveFitment)(c,s,B)),(0,t.useEffect)(()=>{d(15*Math.max(...v.map(({title:e})=>e.length)))},[v]);let A=_||o||n||S||B||!1;return T?(0,a.jsx)(tI,{sponsored:m&&y}):A?(0,a.jsx)(tx,{"data-testid":"nested-navigation-container",$isInverse:l,children:(0,a.jsxs)(td,{$type:"wide","data-testid":"new-inner-nested-navigation-container",$navLevel:C,$isNestedNavAvailable:S,$isSponsored:B,children:[(0,a.jsxs)(tp,{$isSponsored:B,$navLevel:C||1,children:[o&&(0,a.jsx)(tC,{isFirstLevelNav:C<2}),_&&(0,a.jsx)(tu,{$isInverse:l,$navLevel:C||1,"data-testid":"nested-navigation-page-title",children:_})]}),S&&(0,a.jsx)(tc,{ref:f,children:(0,a.jsx)(tm,{"data-testid":"nested-navigation-items-container",ref:h,$hasHiddenItems:I,children:(0,a.jsxs)(tf,{$isEmpty:!S,$hasHiddenItems:I,$isSponsored:B,children:[v.map(({title:e,...t},i)=>(0,a.jsx)(th,{$isInverse:l,$isActive:k===e,$hasHiddenItems:I,children:(0,a.jsx)(b.default,{analytics:(0,tr.getNavigationAnalytics)("main",e,"",t.path||t.externalUrl||"","nested_navigation"),href:t.externalUrl||t.path||"",styledAnchor:tl.SubNavigationLink,styledAnchorProps:{$isInverse:l,"aria-current":k===e?"page":void 0,...t.path?{"data-testid":`nested-navigation-item${k===e?"-active":""}`}:{}},children:e})},i)),I&&(0,a.jsx)(ty,{children:(0,a.jsxs)(ti.default,{type:"nestedNav",isInverse:l,overlay:N,isOpen:u,onDropdownToggle:()=>g(e=>!e),onDropdownClose:()=>g(!1),children:["More ",(0,a.jsx)(w.default,{name:u?"actions:close":"actions:more-vertical"})]})})]})})}),B&&(0,a.jsx)(tk,{})]})}):null},tT=(0,t.createContext)({}),{Provider:tB}=tT,tN=({value:e,children:t})=>(0,a.jsx)(tB,{value:e,children:t});var tA=e.i(109072);let tP=$.default.button.withConfig({displayName:"GooglePreferredButton.styles__GooglePreferredButtonStyled",componentId:"sc-8f300e78-0"})(({theme:e})=>$.css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    gap: 8px;
    border: 1px solid ${e.meatballButton.focus.normal.stroke.value};
    border-radius: 4px;
    white-space: nowrap;
    color: ${e.text.lowEmphasis.value};
    ${(0,k.applyTypography)(e.textLink.small.regular.bpLarge)};

    ${(0,tA.addHoverState)($.css`
      cursor: pointer;

      &:hover {
        color: ${e.button.general.pressed.inverse.background.value};
      }
    `)};
  `),tF="Add as preferred on Google",tE="google_preferred",tL=(0,t.memo)(({testId:e=tE})=>{let{urn:t}=(0,tt.usePageData)();return(0,a.jsx)(b.default,{href:"https://www.google.com/preferences/source?q=bbc.com",analyticsProps:{item_name:tF,item_type:tE,item_resource_id:t},linkType:"external",children:(0,a.jsxs)(tP,{title:tF,"data-testid":e,children:[(0,a.jsx)(w.default,{name:"social:google",width:12,height:12}),(0,a.jsx)("span",{children:tF})]})})});var tD=e.i(868783),tM=e.i(946861),tR=e.i(303854);let tO=$.default.div.withConfig({displayName:"Byline.styles__BylineStyled",componentId:"sc-66f6383-0"})`
  display: grid;
  grid-template-areas: 'date actions' 'contributors contributors';
  row-gap: 4px;

  ${(0,C.applyStylesForBreakpoints)($.css`
      grid-template-areas: 'date' 'contributors' 'actions';
      row-gap: 16px;
    `,"group2")};
`,tG=$.default.div.withConfig({displayName:"Byline.styles__ContributorsContainerStyled",componentId:"sc-66f6383-1"})`
  grid-area: contributors;
`,tU=$.default.time.withConfig({displayName:"Byline.styles__TimeContainerStyled",componentId:"sc-66f6383-2"})`
  ${({theme:e})=>$.css`
    grid-area: date;
    white-space: nowrap;
    ${(0,k.applyTypography)(e.metaData.regular)};
    color: ${e.text.lowEmphasis.value};
  `}
`,tH=$.default.div.withConfig({displayName:"Byline.styles__ActionsContainerStyled",componentId:"sc-66f6383-3"})(({theme:e})=>$.css`
    grid-area: actions;
    display: flex;
    flex-wrap: wrap;
    justify-self: end;
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    column-gap: 16px;

    ${(0,C.applyStylesForBreakpoints)($.css`
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
          ${(0,k.applyTypography)(e.textLink.large.regular.bpLarge)};
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

    ${(0,C.applyStylesForBreakpoints)($.css`
        column-gap: 8px;
      `,"group1")};
  `),tW=$.default.div.withConfig({displayName:"Byline.styles__GooglePreferredButtonContainerStyled",componentId:"sc-66f6383-4"})`
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  display: contents;

  ${(0,C.applyStylesForBreakpoints)($.css`
      display: grid;
      place-content: center;
      min-height: 44px;
    `,"group2")};
`,tz=$.default.div.withConfig({displayName:"Byline.styles__ContributorWrapperStyled",componentId:"sc-66f6383-5"})`
  ${({$hasMultiple:e})=>$.css`
    display: ${e?"inline":"block"};
  `}
`,tY=$.default.span.withConfig({displayName:"Byline.styles__ImageWrapperStyled",componentId:"sc-66f6383-6"})`
  display: inline-block;
  vertical-align: middle;

  img {
    width: 40px;
    height: 40px;
    color: ${({theme:e})=>e.container.onDefaultBG.value};
    margin-right: 8px;
    border-radius: 50%;
  }
`,tq=$.default.div.withConfig({displayName:"Byline.styles__TextContentWrapperStyled",componentId:"sc-66f6383-7"})`
  display: inline-block;
  vertical-align: middle;
`,tV=$.default.span.withConfig({displayName:"Byline.styles__AuthorNameStyled",componentId:"sc-66f6383-8"})`
  ${({$hasMultiple:e,theme:t})=>$.css`
    vertical-align: middle;
    display: ${e?"inline":"block"};
    margin-bottom: ${e?"0":"4px"};
    margin-right: ${e?"4px":"0"};
    ${(0,k.applyTypography)(t.byline.emphasised)};
  `}
`,tQ=$.default.span.withConfig({displayName:"Byline.styles__RoleAndLocationStyled",componentId:"sc-66f6383-9"})`
  ${({$hasMultiple:e,theme:t})=>$.css`
    ${e&&"vertical-align: middle;"}
    display: ${e?"inline":"block"};
    margin-right: ${e?"4px":"0"};
    ${(0,k.applyTypography)(t.byline.default)};
    color: ${t.text.lowEmphasis.value};
  `}
`,tX=$.default.span.withConfig({displayName:"Byline.styles__SeparatorStyled",componentId:"sc-66f6383-10"})`
  vertical-align: middle;
  margin-right: 4px;

  ${({theme:e})=>$.css`
    ${(0,k.applyTypography)(e.byline.default)};
    color: ${e.text.lowEmphasis.value};
  `}
`,tK=$.default.span.withConfig({displayName:"Byline.styles__ContributorsWrapperStyled",componentId:"sc-66f6383-11"})`
  display: block;
  width: 458px;

  ${(0,C.applyStylesForBreakpoints)($.css`
      width: 100%;
    `,"group2")};
`,tZ=$.default.div.withConfig({displayName:"Byline.styles__SponsorAdContainerStyled",componentId:"sc-66f6383-12"})`
  width: 100px;
  height: 50px;
  justify-self: end;
  grid-column: -2 / -1;
`;var tJ=e.i(593521),t0=e.i(808824);let t1=({contributor:e,hasMultipleContributors:t,imageUrlTemplate:i,isLastContributor:o,isSecondToLastContributor:n,testId:r})=>{let{authorName:l,role:s,location:d}=e,p=l?.replace(/^By\s+/,"").trim(),c=[s,d].filter(Boolean).join(", "),u=!!c||!n&&!o;return(0,a.jsxs)(tz,{"data-testid":r,$hasMultiple:t,children:[!t&&!!i&&(0,a.jsx)(tY,{children:(0,a.jsx)(J.default,{imageUrlTemplate:i,alt:`${l} profile image`,cardType:"contributor",isDefaultAspectRatio:!1})}),t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(tV,{$hasMultiple:t,children:[p,u&&","]}),c&&(0,a.jsxs)(tQ,{$hasMultiple:t,"data-testid":`${r}-role-location`,children:[c,!n&&!o&&","]})]}):(0,a.jsxs)(tq,{children:[(0,a.jsx)(tV,{$hasMultiple:t,children:p}),c&&(0,a.jsx)(tQ,{$hasMultiple:t,"data-testid":`${r}-role-location`,children:c})]}),!o&&n&&(0,a.jsx)(tX,{children:"and"})]})},t2=({contributors:e,testId:t})=>{let i=e.filter(e=>e.authorName);if(0===i.length)return null;let o=i.length>1;return(0,a.jsx)(tK,{"data-testid":t,children:i.map((e,n)=>(0,a.jsx)(t1,{contributor:e,imageUrlTemplate:1===i.length&&0===n?(()=>{let e=i[0]?.rawImage;if(!e)return"";let t=e&&/^(?:https?|http):\/\/[^\s/$.?#].[^\s]*$/i.test(e.model.locator),a=e;return t&&(a={model:{...e.model,locator:new URL(e.model.locator).pathname},type:e.type}),"ic"!==e.model.originCode||t?(0,t0.getImageUrlTemplate)(a):(0,t0.getFeaturesImageUrlTemplate)(a)})():"",hasMultipleContributors:o,isLastContributor:n===i.length-1,isSecondToLastContributor:n===i.length-2,testId:`${t}-contributor-${n}`},n))})},t4=(0,tD.withCMSFallback)(({testId:e="byline",model:t,type:i,isSponsored:o=!1})=>{let{model:{timestamp:r=""}={}}=t.blocks.find(({type:e})=>"timestamp"===e)||{},l=(0,tM.bylineDataMapper)({model:t,type:i}),s=(0,tR.formatTimestamp)(r,"long"),d=(0,tR.formatTimestamp)(r,"seo"),p="subByline"===i;return(0,a.jsxs)(tO,{"data-testid":e,children:[!p&&(0,a.jsxs)(a.Fragment,{children:[r&&(0,a.jsx)(tU,{suppressHydrationWarning:!0,dateTime:d,children:s}),(0,a.jsxs)(tH,{children:[(0,a.jsx)(S.ArticlePageButtons,{}),(0,a.jsx)(tW,{children:(0,a.jsx)(tL,{})})]})]}),(0,a.jsx)(tG,{children:!!l.length&&(0,a.jsx)(t2,{contributors:l,testId:`${e}-contributors`})}),o&&(0,a.jsx)(tZ,{children:(0,a.jsx)(n.default,{type:"spo"})})]})},({testId:e="byline",model:t,type:i})=>{let{model:{timestamp:o=""}={}}=t.blocks.find(({type:e})=>"timestamp"===e)||{},n=(0,tM.bylineDataMapper)({model:t,type:i}),r=(0,tR.formatTimestamp)(o,"long"),l=(0,tR.formatTimestamp)(o,"seo"),s="subByline"===i;return(0,a.jsxs)(tO,{"data-testid":e,children:[!s&&(0,a.jsxs)(a.Fragment,{children:[o&&(0,a.jsx)(tU,{suppressHydrationWarning:!0,dateTime:l,children:r}),(0,a.jsx)(tH,{children:(0,a.jsx)(tJ.default,{})})]}),(0,a.jsx)(tG,{children:!!n.length&&(0,a.jsx)(t2,{contributors:n,testId:`${e}-contributors`})})]})}),t6={$type:"contained",$marginBottom:["s","s","s","s","s","s"]},t3={$type:"wide",$marginBottom:["s","s","s","s","s","s"]},t8={$margin:["0 16px 0","0 16px",void 0,void 0,void 0,void 0]};var t5=e.i(786025),t7=e.i(581221);let t9=$.default.section.withConfig({displayName:"CallOutBox.styles__CallOutBoxStyled",componentId:"sc-ee47beec-0"})`
  ${({theme:e,$hasImage:t,$withMarginInline:a})=>$.css`
    background-color: ${e.container.onDefaultBG.value};
    padding: 24px;
    display: grid;

    ${t&&$.css`
      gap: 32px;
      grid-template-columns: 1fr 2fr;

      ${(0,C.applyStylesForBreakpoints)($.css`
          grid-template-columns: 1fr;
          gap: 16px;
        `,"group2")}
    `};

    ${a&&$.css`
      margin-inline: 16px;

      ${(0,C.applyStylesForBreakpoints)($.css`
          margin-inline: 0;
        `,"group4")}
    `}
  `};
`,ae=$.default.div.withConfig({displayName:"CallOutBox.styles__ContentWrapperStyled",componentId:"sc-ee47beec-1"})`
  display: grid;
  gap: 8px;
`,at=$.default.div.withConfig({displayName:"CallOutBox.styles__ContentBlockWrapper",componentId:"sc-ee47beec-2"})`
  display: grid;
  gap: 12px;

  ${(0,C.applyStylesForBreakpoints)($.css`
      gap: 10px;
    `,"group2")}

  & p:empty {
    display: none;
  }
`,aa=$.default.p.withConfig({displayName:"CallOutBox.styles__TitleStyled",componentId:"sc-ee47beec-3"})`
  ${({theme:e})=>(0,k.applyTypography)(e.generic.header.small.bpLarge)}
  color: ${({theme:e})=>e.text.lowEmphasis.value};

  ${(0,C.applyStylesForBreakpoints)($.css`
      ${({theme:e})=>(0,k.applyTypography)(e.generic.header.small.bpSmall)}
    `,"group2")}
`,ai=$.default.div.withConfig({displayName:"CallOutBox.styles__ContentStyled",componentId:"sc-ee47beec-4"})`
  ${({theme:e})=>$.css`
    ${(0,k.applyTypography)(e.generic.info1.default.bpLarge)}
    color: ${e.text.mediumEmphasis.value};

    ${(0,C.applyStylesForBreakpoints)($.css`
        ${(0,k.applyTypography)(e.generic.info1.default.bpSmall)}
      `,"group4")};
  `};
`,ao=({model:{title:e,blocks:t},testId:i})=>{let{model:o}=t.find(({type:e})=>"image"===e)||{},n=(0,u.useFeatureFlag)("legacy-article-rendering-logic");return(0,a.jsxs)(t9,{"data-testid":i,$hasImage:!!o,$withMarginInline:!n,children:[o&&(0,a.jsx)(t7.default,{type:"altText",model:o,isCalloutImage:!0}),(0,a.jsxs)(ae,{children:[e&&(0,a.jsx)(aa,{children:e}),(0,a.jsx)(at,{children:t.map(({model:{blocks:e}},t)=>(0,a.jsx)(ai,{children:(0,a.jsx)(t5.default,{blocks:e})},t))})]})]})},an={$type:"callout",$marginTop:["l","l","l","l","l","l"],$marginBottom:["l","l","l","l","l","l"]};var ar=e.i(119081);let al=$.default.h2.withConfig({displayName:"Group.styled__GroupTitleStyled",componentId:"sc-77edfc80-0"})`
  ${({theme:e})=>$.css`
    ${(0,k.applyTypography)(e.ataglanceTitle.bpLarge)};
    color: ${e.text.onInverseBG.default.value};
    background: ${e.container.onInverseBG3.value};
    padding: 8px 16px;
    margin-bottom: 16px;
  `}
`,as=$.default.section.withConfig({displayName:"Group.styled__GroupStyled",componentId:"sc-77edfc80-1"})`
  ${({theme:e})=>$.css`
    background: ${e.container.onDefaultBG.value};
    padding: 24px;
  `}

  ${({theme:e,$isOverview:t})=>t&&$.css`
      ${(0,k.applyTypography)(e.atAGlanceBodyCopy.default.bpLarge)};
      color: ${e.text.default.value};
      border-bottom: 1px solid ${e.divider.highEmphasis.value};
      padding: 0;
      padding-bottom: 16px;
      margin-bottom: 16px;
      ${(0,C.applyStylesForBreakpoints)($.css`
          ${(0,k.applyTypography)(e.atAGlanceBodyCopy.default.bpSmall)};
        `,"group2")}
    `}
`;var ad=e.i(533033);let ap=(0,tD.withCMSFallback)(({model:e,testId:t})=>{let{blocks:i,intentType:o}=e,n=["gallery","overview"].includes(o),r=(()=>{switch(o){case"overview":return()=>(0,a.jsx)(t5.default,{blocks:i});case"gallery":return()=>(0,a.jsx)(S.Slideshow,{children:i.map(({type:e,model:t},i)=>"image"===e?(0,a.jsx)(t7.default,{type:e,model:t},i):null)})}})();return n?(0,a.jsx)(ar.FlowElementsProvider,{value:!1,children:(0,a.jsxs)(as,{"data-testid":t,$isOverview:"overview"===o,children:["overview"===o&&(0,a.jsx)(al,{children:"AT A GLANCE"}),(0,a.jsx)(r,{})]})}):null},({model:e,testId:t})=>{let{blocks:i,intentType:o}=e,n=["gallery","overview"].includes(o),r=(()=>{switch(o){case"overview":return()=>(0,a.jsx)(t5.default,{blocks:i});case"gallery":return()=>(0,a.jsx)(ad.default,{children:i.map(({type:e,model:t},i)=>"image"===e?(0,a.jsx)(t7.default,{type:e,model:t},i):null)})}})();return n?(0,a.jsx)(ar.FlowElementsProvider,{value:!1,children:(0,a.jsx)(as,{"data-testid":t,children:(0,a.jsx)(r,{})})}):null}),ac={$type:"contained",$marginTop:["m","m","m","m","m","m"],$marginBottom:["s","s","s","s","s","s"]};var au=e.i(793897),ag=e.i(554692),am=e.i(184874);let ay=(0,$.default)(v.GridStyled).withConfig({displayName:"Links.styles__LinksContainerStyled",componentId:"sc-b3f84cef-0"})`
  ${({$isLast:e,theme:t})=>$.css`
    border-bottom: ${`2px ${t.text.default.value} solid`};
    border-top: ${`2px ${t.text.default.value} solid`};

    ${e&&$.css`
      border-bottom: none;
    `};
  `}
`,af=(0,$.default)(v.GridStyled).withConfig({displayName:"Links.styles__LinksGridStyled",componentId:"sc-b3f84cef-1"})`
  margin: 24px 0;

  ${(0,C.applyStylesForBreakpoints)($.css`
      margin: 16px 0;
    `,"group1","group2")};
`,ah=$.default.span.withConfig({displayName:"Links.styles__LinksTitleStyled",componentId:"sc-b3f84cef-2"})`
  ${({theme:e})=>$.css`
    color: ${e.text.default.value};
    margin-top: 32px;
    //styleName: inarticlepromotitle/emphasised/bplarge;
    font-family: 'BBC Reith Serif';
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.02em;
    text-align: left;

    ${(0,C.applyStylesForBreakpoints)($.css`
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
`,ax=({model:e})=>{let t=e.blocks.filter(e=>"title"===e.type)?.[0],i=(0,am.getNestedValue)(t,"paragraph"),o=e.blocks.filter(e=>"link"===e.type).map(e=>{let t=e.model.blocks.find(e=>"text"===e.type);return t?{locator:(0,am.getNestedValue)(t,"urlLink","locator")||"",text:(0,am.getNestedValue)(t,"urlLink","text")||""}:null}).filter(e=>!!e),n=o.length>4?"16px":"0px",r=`repeat(auto-fit, minmax(calc(100% / 3 - ${n}), 1fr))`;return(0,a.jsxs)(ay,{$isLast:e.isLast,children:[i&&(0,a.jsx)(ah,{"data-testid":"links-title",children:i}),(0,a.jsx)(af,{"data-testid":"links-grid",$gridGap:["16px","16px","16px","16px","16px","16px"],$columns:["1fr","1fr",r,r,r,r],children:!!o.length&&o.map((e,t)=>(0,a.jsx)(ag.default,{type:"chester",href:e.locator,title:e.text,metadata:{contentType:"article"}},e.locator+t))})]})},ab={$type:"contained",$marginBottom:["m","m","l","l","l","l"],$marginTop:["m","m","l","l","l","l"]},aS={$type:"withoutMargin",$marginBottom:["m","m","l","l","l","l"],$marginTop:["m","m","l","l","l","l"]};var av=e.i(743718);let aw={$type:"contained",$marginBottom:["s","s","s","s","s","s"]},aj=$.default.div.withConfig({displayName:"Quote.styles__QuoteStyled",componentId:"sc-9001ec68-0"})`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 24px 16px 24px 0;
  gap: 8px;
  border-width: 1px 0;
  border-style: solid;
  border-color: ${({theme:e})=>e.divider.lowEmphasis.value};
`,a$=$.default.div.withConfig({displayName:"Quote.styles__QuoteIconStyled",componentId:"sc-9001ec68-1"})`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`,aC=$.default.span.withConfig({displayName:"Quote.styles__QuoteTextStyled",componentId:"sc-9001ec68-2"})`
  font-style: italic;
  ${({theme:e})=>(0,k.applyTypography)(e.pullQuote)};
  color: ${({theme:e})=>e.text.default.value};
`,ak=({model:{text:e},testId:t})=>e?(0,a.jsxs)(aj,{"data-testid":t,children:[(0,a.jsx)(a$,{children:(0,a.jsx)(w.default,{name:"personalisation:quote"})}),(0,a.jsx)(aC,{children:e})]}):null,aI={$type:"contained",$marginTop:["m","m","l","l","l","l"],$marginBottom:["m","m","l","l","l","l"]},a_={tiktok:"https://www.tiktok.com/legal/cookie-policy",twitter:"https://help.twitter.com/en/rules-and-policies/twitter-cookies",youtube:"https://policies.google.com/technologies/cookies",instagram:"https://privacycenter.instagram.com/policies/cookies/",facebook:"https://www.facebook.com/privacy/policies/cookies"},aT={tiktok:"https://www.tiktok.com/legal/privacy-policy",twitter:"https://twitter.com/en/privacy",youtube:"https://policies.google.com/privacy",instagram:"https://privacycenter.instagram.com/policy",facebook:"https://www.facebook.com/privacy/policy/"};var aB=e.i(396866);let aN=(e,t=!0)=>{switch(e){case"tiktok":return $.css`
        min-height: 600px;
        ${t&&$.css`
          max-width: 350px;
        `}
      `;case"twitter":case"instagram":case"facebook":return $.css`
        min-height: 436px;
        ${t&&$.css`
          max-width: 436px;
        `}
      `;case"youtube":return $.css`
        min-height: 450px;
        ${t&&$.css`
          max-width: 100%;
        `}
      `}},aA=$.default.div.withConfig({displayName:"Social.styles__SocialStyled",componentId:"sc-fe58d2f9-0"})`
  ${({$maxWidth:e,$source:t,$withLegacyRenderingLogic:a=!0})=>$.css`
    ${aN(t,!1)};
    width: 100%;

    ${a?$.css`
          justify-self: center;
        `:$.css`
          margin-inline: auto;
        `}

    ${"youtube"===t?$.css`
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
        `:$.css`
          max-width: ${`${e}px`};

          iframe.instagram-media:not(.instagram-media-rendered) {
            border: none !important;
          }
        `}
  `};
`,aP=$.default.div.withConfig({displayName:"Social.styles__ConsentScreenStyled",componentId:"sc-fe58d2f9-1"})`
  ${({$source:e,$withLegacyRenderingLogic:t=!0})=>$.css`
    display: grid;
    justify-content: center;
    justify-self: center;
    ${aN(e)};
    width: 100%;

    ${!t&&$.css`
      margin-inline: auto;
    `}
  `};
`,aF=$.default.div.withConfig({displayName:"Social.styles__ConsentScreenContentStyled",componentId:"sc-fe58d2f9-2"})(({theme:e})=>$.css`
    display: grid;
    padding: 16px;
    row-gap: 16px;
    align-content: center;
    background-color: ${e.advert.container.value};
  `),aE=$.default.h4.withConfig({displayName:"Social.styles__ConsentTitleStyled",componentId:"sc-fe58d2f9-3"})`
  ${({theme:e})=>$.css`
    ${(0,k.applyTypography)(e.bodyCopy.emphasised.bpLarge)};
    font-size: 20px;
  `}
`,aL=$.default.div.withConfig({displayName:"Social.styles__ConsentContentStyled",componentId:"sc-fe58d2f9-4"})`
  ${({theme:e})=>$.css`
    ${(0,k.applyTypography)(e.bodyCopy.default.bpLarge)};
    font-family: ${e.fontFamilies.bbcReithSans};

    div {
      display: inline-block;
    }

    a {
      ${(0,k.applyTypography)(e.bodyCopy.links.bpLarge)};
      font-family: ${e.fontFamilies.bbcReithSans};
    }

    b {
      ${(0,k.applyTypography)(e.bodyCopy.emphasised.bpLarge)};
      font-family: ${e.fontFamilies.bbcReithSans};
    }

    ${(0,C.applyStylesForBreakpoints)($.css`
        ${(0,k.applyTypography)(e.bodyCopy.default.bpSmall)};
        font-family: ${e.fontFamilies.bbcReithSans};

        a {
          ${(0,k.applyTypography)(e.bodyCopy.links.bpSmall)};
          font-family: ${e.fontFamilies.bbcReithSans};
        }

        b {
          ${(0,k.applyTypography)(e.bodyCopy.emphasised.bpSmall)};
          font-family: ${e.fontFamilies.bbcReithSans};
        }
      `,"group2")};
  `};
`,aD=$.default.div.withConfig({displayName:"Social.styles__ConsentActionsStyled",componentId:"sc-fe58d2f9-5"})``,aM=({source:e,cookiePolicyUrl:t,policySource:i,privacyPolicyUrl:o})=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(aE,{children:["Allow ",e," content?"]}),(0,a.jsxs)(aL,{children:["This article contains content provided by ",e,". We ask for your permission before anything is loaded, as they may be using cookies and other technologies. You may want to read ",(0,a.jsx)(b.default,{analyticsProps:{item_name:`ConsentMessage - cookie policy - ${i}`},href:t,children:`${(i||e).trim()}’s cookie policy`})," and ",(0,a.jsx)(b.default,{analyticsProps:{item_name:`ConsentMessage - privacy policy - ${i}`},href:o,children:"privacy policy"})," before accepting. To view this content choose ",(0,a.jsx)("b",{children:"‘accept and continue’"}),"."]})]}),aR=({html:e})=>{let i=(0,t.useRef)(null);return(0,t.useEffect)(()=>{let{current:t}=i;t&&e&&t.append(...Array.from(document.createRange().createContextualFragment(e).children))},[e]),(0,a.jsx)("div",{ref:i})};var aO=e.i(472269);let aG=$.default.div.withConfig({displayName:"SocialGuidance.styles__ConsentScreenGuidanceStyled",componentId:"sc-ec59a9c1-0"})(({theme:e})=>$.css`
    margin-top: 8px;
    color: ${e.text.lowEmphasis.value};
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: min-content minmax(0, 1fr);
    column-gap: 4px;

    ${(0,k.applyTypography)(e.caption)};
  `),aU=({source:e})=>{let t=`The BBC is not responsible for the content of external sites. ${e} content may contain adverts.`;return(0,a.jsxs)(aG,{children:[(0,a.jsx)(w.default,{name:"labels:info"}),t]})},aH=e=>{let{model:i}=e,{source:o,maxWidth:n,html:r=""}=i,l=(0,u.useFeatureFlag)("legacy-article-rendering-logic"),[s,d]=(0,t.useState)(!1),p={source:(()=>{switch(o){case"tiktok":return"TikTok";case"youtube":return"Google YouTube";case"twitter":return"X";default:return(0,aO.default)(o)}})(),policySource:(()=>{switch(o){case"facebook":case"instagram":return"Meta";case"youtube":return"Google";case"twitter":return"X";default:return}})(),cookiePolicyUrl:a_[o],privacyPolicyUrl:aT[o]},{source:c}=p;return r?s?(0,a.jsxs)(aA,{$maxWidth:n,$source:o,$withLegacyRenderingLogic:l,children:[(0,a.jsx)(aB.default,{..."youtube"===o?{}:{source:o}}),(0,a.jsx)(aR,{...i}),(0,a.jsx)(aU,{source:c})]}):(0,a.jsxs)(aP,{$source:o,$withLegacyRenderingLogic:l,children:[(0,a.jsxs)(aF,{children:[(0,a.jsx)(aM,{...p}),(0,a.jsx)(aD,{children:(0,a.jsx)(ec.default,{type:"ghost",text:"Accept and continue",onClick:()=>d(!0)})})]}),(0,a.jsx)(aU,{source:c})]}):null};var aW=e.i(403052),az=e.i(764183);let aY={$type:"contained",$marginBottom:["m","m","l","l","l","l"]};var aq=e.i(876278),aV=e.i(753630),aQ=e.i(863429),aX=e.i(251602);n.default,az.default,t7.default,aQ.default,aX.Video;let aK=({topics:e})=>e.length?(0,a.jsx)(ts.ContainerStyled,{"data-component":"tags",$type:"contained",$marginTop:["m","m","l","l","l","l"],$marginBottom:["m","m","l","l","l","l"],children:(0,a.jsx)(aQ.default,{"data-testid":"tagList",topics:e})}):null,aZ=({model:e,type:t})=>{let i=e.blocks.find(e=>"caption"===e.type),o=e.emphasiseImage?aq.heroImageContainerProps:aq.imageContainerProps;return i&&(o={...o,$marginBottom:["none","none","none","none","none","none"]}),(0,a.jsxs)("figure",{children:[(0,a.jsx)(ts.ContainerStyled,{"data-component":"image-block",...o,children:(0,a.jsx)(t7.default,{model:e,type:t,isInverse:!1})}),i&&(0,a.jsx)(ts.ContainerStyled,{"data-component":"caption-block",...aY,children:(0,a.jsx)(az.default,{model:i.model,type:i.type})})]})},aJ=({model:e,type:t})=>{let i=e.blocks.find(e=>"caption"===e.type),o=aV.playerContainerProps;return i&&(o={...o,$marginBottom:["none","none","none","none","none","none"]}),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ts.ContainerStyled,{"data-component":"video-block","data-testid":"fabl-video-container",...o,children:(0,a.jsx)(aX.Video,{model:e,type:t})}),i&&(0,a.jsx)(ar.FlowElementsProvider,{value:!1,children:(0,a.jsx)(ts.ContainerStyled,{"data-component":"caption-block",...aY,children:(0,a.jsx)(az.default,{model:i.model,type:i.type})})})]})},a0={advertisement:[({incrementedType:e})=>{let t=e?.startsWith("mid");return e?(0,a.jsx)(n.default,{type:e,showPlaceholder:t}):null},"advertisement-block"],audio:[aJ,"audio-block"],byline:[t4,"byline-block",t6],callout:[ao,"callout-block",an],embed:[S.Embed,"embed-block",aI],group:[ap,"group-block",{$type:"contained",$marginBottom:["m","m","l","l","l","l"]}],headline:[au.default,"headline-block",ac],image:[aZ,"image-block"],include:[S.Include,"include-block",aI],links:[ax,"links-block",{$type:"contained",$marginBottom:["m","m","l","l","l","l"],$marginTop:["m","m","l","l","l","l"]}],orderedList:[av.default,"ordered-list-block",ab],quote:[ak,"quote-block",aw],social:[aH,"social-block",aI],subByline:[t4,"subByline-block",t6],subheadline:[au.default,"subheadline-block",ac],text:[aW.default,"text-block",{$type:"contained",$marginBottom:["s","s","s","s","s","s"]}],unorderedList:[av.default,"unordered-list-block",ab],video:[aJ,"video-block"]},a1={ohio:"Related",texas:"Watch"};var a2=e.i(542383);let a4=({isNewsArticle:e})=>{let[i,o]=(0,t.useState)(!1),[n,r]=(0,t.useState)(!1),l=(0,tn.useIsAdsServiceEnabled)(),{allowAdvertising:s=!0}=(0,tt.usePageData)(),{dotcom:{hasTaboolaConsent:d}}=(0,a2.useConsent)(),p=e?"taboola-below-article---news":"taboola-below-article",c=e?"Below Article - News":"Below Article";return(0,t.useEffect)(()=>{let e=(0,eU.default)(()=>{window.scrollY>=document.body.scrollHeight/2&&o(!0)},25,{leading:!0,trailing:!0});return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,t.useEffect)(()=>{l&&s&&d&&i&&r(!0)},[l,s,d,i]),(0,t.useEffect)(()=>{n&&(window._taboola=window._taboola||[],window._taboola.push({mode:"alternating-thumbnails-a",container:p,placement:c,target_type:"mix"}),window._taboola.push({flush:!0}))},[n,p,c]),(0,a.jsx)("div",{children:(0,a.jsx)("div",{id:p})})};var a6=e.i(812345),a3=e.i(145707),a8=e.i(445793),a5=e.i(885082),a7=e.i(854300),a9=e.i(217256),ie=e.i(485768),it=e.i(494726),ia=e.i(69286);let ii=$.default.section.withConfig({displayName:"Section.layouts.styles__SectionLayoutWrapper",componentId:"sc-40ef2d4a-0"})(({theme:e,$type:t})=>$.css`
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    display: contents;

    ${"alaska"===t&&$.css`
      display: block;
      background-color: ${e.container.onDefaultBG4.value};
    `}
  `);var io=e.i(828564),ir=e.i(160763);let il=(0,a3.forwardLayout)(e=>{let{type:i,title:o,content:n=[],innerCollections:r=[],paginationData:l,sectionNumber:s=0,sectionTitleProps:d,audioPageType:p="",analyticsGroupNameOverride:c,testId:u=i,as:g}=e,m=(0,t.useRef)(null),[y,f]=(0,a5.useCallbackRef)(),h=(0,t.useRef)(null),x=(0,to.useDarkMode)(),b=(0,ia.useIsSectionEnabled)(i),S=(0,it.getShowSectionTitle)(e),v=(0,it.getIsSectionInverse)(e),w=!x&&(0,it.getIsPromoSection)(e),j=v&&!w,$=d?.link??"",{dataset:C}=(0,a8.useAnalyticsGroupProperties)({audioPageType:p,sectionNumber:s,content:n,innerCollections:r,link:$,paginationData:l,sectionTitleProps:d,title:o,type:i,analyticsGroupNameOverride:c}),k=a6.SECTIONS_WITH_LENGTH.includes(i)?`-${n.length}`:"",I=`${u}-section-outer${k}`;return b?(0,a.jsxs)(ii,{"data-testid":I,...C,as:g,$type:i,children:[S&&(0,a.jsx)(a7.default,{marginTop:48,marginBottom:24,group2:{marginTop:32,marginBottom:16},isInverse:j,...j?{}:{withBackground:!1},children:(0,a.jsx)(a9.default,{isContained:!1,columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:1,colSpan:24,group2:{colStart:1,colSpan:12},children:(0,a.jsx)(ir.default,{isFullWidth:!0,withMarginBottom:!1,...e,scrollContainerRef:y,scrollableContentRef:m,controlButtonsPortalRef:h})})})}),(0,a.jsx)(io.default,{...e,scrollContainerRef:f,scrollableContentRef:m,controlButtonsPortalRef:h})]}):null}),is=({sectionProps:e,index:t,analyticsGroupNameOverride:i=""})=>{let o=a6.SECTIONS_WITH_LAYOUT.includes(e.type)?il:h.default;return(0,a.jsx)(o,{layout:"single-column",sectionNumber:t,...e,titleAsHeadingTag:!1,as:"aside",title:a1[e.type]||"More from the BBC",analyticsGroupNameOverride:i})};var id=e.i(444412),ip=e.i(154738),ic=e.i(898229),iu=e.i(935960);let ig=(e=[])=>{let a=(0,u.useFeatureFlag)("election-banner-us"),i=(0,u.useFeatureFlag)("election-banner-us-client-refresh"),o=a?e.find(e=>"electionbanner"===e.type):void 0,[n,r]=(0,t.useState)(o),l=a&&i&&!(0,ip.default)(n);return(0,t.useEffect)(()=>{async function e(){let e=n?.model.href;try{let{data:t}=await (0,ic.fetchClient)(e,{}),a={type:"electionbanner",model:{type:"include",fullwidth:!0,html:(0,iu.retrieveHtmlContent)(t)}};r(a)}catch(e){e$.logger.error(`Error fetching election banner: ${e}`)}}l&&e().then()},[l]),n};function im(){return(0,t.useContext)(tT)}let iy=function(e){let a=(0,tn.useIsAdsServiceEnabled)(),{allowAdvertising:i=!0}=(0,tt.usePageData)(),o=(0,t.useRef)(!1);(0,t.useEffect)(()=>{if(null!==a&&e.current){let t=a&&i;t&&!o.current&&(e.current.requestAd(),o.current=!0),t||e.current.closePlaceholder()}},[a,i,e])};var ih=e.i(240914);let ix=({data:e})=>{let{model:t,type:i}=e;return t.fullWidth=!0,i&&(t.type=i),(0,a.jsx)(ih.default,{type:"include",model:t})},ib=(0,t.createContext)([]),{Provider:iS}=ib,iv=({children:e,value:t})=>(0,a.jsx)(iS,{value:t,children:e});var iw=e.i(453784),ij=e.i(631546);let i$=["headline","timestamp","byline"],iC=["subheadline"],ik=["text","embed","image","video","layout"];var iI=e.i(939648);let i_=$.default.details.withConfig({displayName:"Accordion.styles__AccordionStyled",componentId:"sc-626abe0e-0"})(({theme:e})=>$.css`
    width: 100%;
    border-bottom: 1px solid ${e.nav.lines.value};
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
  `),iT=$.default.summary.withConfig({displayName:"Accordion.styles__AccordionSummaryStyled",componentId:"sc-626abe0e-1"})`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 8px 12px 8px;
  cursor: pointer;
  text-align: left;
  flex: 1 1 auto;
  scroll-margin-top: ${iI.HEADER_DEFAULT_HEIGHT}px;

  ${(0,C.applyStylesForBreakpoints)($.css`
      scroll-margin-top: ${iI.HEADER_HEIGHT_MOBILE}px;
    `,"group2")};
`,iB=$.default.span.withConfig({displayName:"Accordion.styles__AccordionHeadlineStyled",componentId:"sc-626abe0e-2"})(({theme:e})=>$.css`
    ${(0,k.applyTypography)(e.mainSectionHeading.bpLarge)};
    flex: 1;
    display: flex;
    align-items: center;
    text-align: left;
    color: ${e.text.default.value};

    ${(0,C.applyStylesForBreakpoints)($.css`
        ${(0,k.applyTypography)(e.mainSectionHeading.bpSmall)};
      `,"group2")}
  `),iN=$.default.div.withConfig({displayName:"Accordion.styles__IconWrapperStyled",componentId:"sc-626abe0e-3"})`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 0 0 auto;
  height: 100%;
  margin-left: 8px;
`,iA=$.default.div.withConfig({displayName:"Accordion.styles__AccordionContentStyled",componentId:"sc-626abe0e-4"})(({theme:e})=>$.css`
    display: grid;
    row-gap: 16px;
    padding: 16px;
    color: ${e.text.default.value};

    ${(0,k.applyTypography)(e.bodyCopy.default.bpLarge)};

    ${(0,C.applyStylesForBreakpoints)($.css`
        ${(0,k.applyTypography)(e.bodyCopy.default.bpSmall)};
      `,"group2")}
  `);function iP(e){return!!(e.current&&e.current.open)}let iF=({model:e})=>{let i=(0,t.useRef)(null),[o,n]=(0,t.useState)(iP(i)),{blocks:r=[]}=e,l=r.findIndex(({type:e})=>"headline"===e),[s,...d]=-1!==l?r.slice(l):r,{model:p}=s??{},{jumpLinkLabel:c}=p??{},u=o?"arrows:chevron-up":"arrows:chevron-down";return(0,t.useEffect)(()=>{let e=e=>{e===c&&i.current&&!i.current.open&&(i.current.open=!0,n(!0))},t=()=>{e(window.location.hash.slice(1))},a=({target:t})=>{let a=t.closest('a[href^="#"]');a&&e(a.getAttribute("href")?.slice(1))};return t(),window.addEventListener("hashchange",t),document.addEventListener("click",a),()=>{window.removeEventListener("hashchange",t),document.removeEventListener("click",a)}},[c]),(0,a.jsx)(i_,{ref:i,onToggle:()=>n(iP(i)),children:!!s&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(iT,{id:c,children:[(0,a.jsx)(iB,{children:(0,a.jsx)(t5.default,{blocks:[s]})}),(0,a.jsx)(iN,{children:(0,a.jsx)(w.default,{width:24,height:12,name:u,testId:u})})]}),(0,a.jsx)(iA,{children:(0,a.jsx)(t5.default,{blocks:d})})]})})},iE=({children:e})=>(0,a.jsx)(a7.default,{marginBottom:16,dataComponent:"accordion-block",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),iL=(0,a3.forwardLayout)(e=>(0,a.jsx)(iE,{children:(0,a.jsx)(iF,{...e})}));var iD=(0,e.i(608080).default)(function(e,t,a){return e+(a?"-":"")+t.toLowerCase()});let iM=({children:e,dataComponent:t})=>(0,a.jsx)(a7.default,{marginBottom:24,group2:{marginBottom:4},dataComponent:t,zIndex:"level1",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),iR=({children:e,dataComponent:t})=>(0,a.jsx)(a7.default,{marginBottom:24,group2:{marginBottom:4},dataComponent:t,zIndex:"level1",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:12,group5:{colStart:4,colSpan:13},group4:{colStart:1,colSpan:14},group3:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),iO=(0,a3.forwardLayout)((e,t)=>{let{type:i}=e,o=`${iD(i)}-block`,n="byline"===i||"single-column"===t?iM:iR;return(0,a.jsx)(n,{dataComponent:o,children:(0,a.jsx)(t4,{...e})})}),iG=({children:e})=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:32,group2:{marginTop:24,marginBottom:24},dataComponent:"callout-block",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:5,colSpan:17,group5:{colStart:3,colSpan:20},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),iU=(0,a3.forwardLayout)(e=>(0,a.jsx)(iG,{children:(0,a.jsx)(ao,{...e})})),iH=({children:e})=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:32,group2:{marginTop:24,marginBottom:24},dataComponent:"embed-block",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),iW=(0,a3.forwardLayout)(e=>(0,a.jsx)(iH,{children:(0,a.jsx)(S.Embed,{...e})})),iz=({children:e})=>(0,a.jsx)(a7.default,{dataComponent:"group-block",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),iY=(0,a3.forwardLayout)(e=>(0,a.jsx)(iz,{children:(0,a.jsx)(ap,{...e})})),iq=({children:e,dataComponent:t,jumpLinkLabel:i})=>(0,a.jsx)(a7.default,{id:i,marginTop:24,marginBottom:16,group2:{marginBottom:24},dataComponent:t,children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),iV=({children:e,dataComponent:t,jumpLinkLabel:i})=>(0,a.jsx)(a7.default,{id:i,marginTop:32,marginBottom:24,group2:{marginTop:24,marginBottom:16},dataComponent:t,children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),iQ=({children:e,dataComponent:t})=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:24,group2:{marginTop:24,marginBottom:16},dataComponent:t,children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:12,group5:{colStart:4,colSpan:13},group4:{colStart:1,colSpan:14},group3:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),iX=(0,a3.forwardLayout)((e,t)=>{let{type:i,model:o}=e,{jumpLinkLabel:n}=o,r="headline"===i?iq:"single-column"===t?iV:iQ,l=`${iD(i)}-block`;return(0,a.jsx)(r,{jumpLinkLabel:n,dataComponent:l,children:(0,a.jsx)(au.default,{...e})})});var iK=e.i(244412);let iZ=({children:e})=>(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e}),iJ=({children:e})=>(0,a.jsx)(ie.default,{colStart:6,colSpan:12,group5:{colStart:4,colSpan:13},group4:{colStart:1,colSpan:14},group3:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e}),i0=({children:e})=>(0,a.jsx)(ie.default,{colStart:4,colSpan:18,group5:{colStart:2,colSpan:22},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e}),i1=(0,a3.forwardLayout)((e,t)=>{let{model:i}=e,{emphasiseImage:o,blocks:n=[]}=i,r=n.find(e=>"caption"===e.type),l="single-column"===t?iZ:iJ,s=o?i0:l;return(0,iK.useArticleEagerImage)(e),(0,a.jsx)(a7.default,{dataComponent:"image-block",marginTop:32*!o,marginBottom:32,group2:{marginTop:o?4:24,marginBottom:24},children:(0,a.jsxs)(a9.default,{as:"figure",columns:24,group2:{columns:12},rowGap:8,children:[(0,a.jsx)(s,{children:(0,a.jsx)(t7.default,{...e})}),r&&(0,a.jsx)(l,{children:(0,a.jsx)(az.default,{...r})})]})})}),i2=({children:e})=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:32,group2:{marginTop:24,marginBottom:24},dataComponent:"include-block",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),i4=(0,a3.forwardLayout)(e=>(0,a.jsx)(i2,{children:(0,a.jsx)(S.Include,{...e})})),i6=function(){return(0,t.useContext)(ib)},i3=$.default.div.withConfig({displayName:"Oklahoma.styles__OklahomaStyled",componentId:"sc-429dbd7a-0"})(({theme:e})=>$.css`
    display: grid;
    row-gap: 16px;

    > *:not(:last-child) {
      border-bottom: 1px solid ${e.divider.lowEmphasis.value};
    }
  `),i8=({content:e})=>(0,a.jsx)(i3,{children:e.map((e,t)=>(0,a.jsx)(ag.default,{...e,itemPosition:t,type:"dundee-narrow"},t))});var i5=e.i(369736),i5=i5,i7=e.i(303764);let i9=$.default.aside.withConfig({displayName:"Aside.styles__AsideStyled",componentId:"sc-817911fc-0"})`
  width: 100%;
`,oe=()=>{let{isLoading:e,data:t}=(0,i5.default)("aside"),{content:i,title:o="More for you"}=t,n=i.slice(0,5),r=!e&&n.length>1,{dataset:l}=(0,a8.useAnalyticsGroupProperties)({type:"oklahoma",title:"mparticle recommendations",content:n});return r?(0,a.jsxs)(i9,{...l,children:[(0,a.jsx)(i7.default,{title:o,variant:"default",isFullWidth:!0}),(0,a.jsx)(i8,{...t,title:o,content:n})]}):null},ot=$.styled.div.withConfig({displayName:"AsideBlock.styles__AsideBlockStickyStyled",componentId:"sc-1d9f070e-0"})`
  ${()=>$.css`
    position: sticky;
    top: ${iI.HEADER_DEFAULT_HEIGHT+16}px;
  `}
`,oa=({children:e})=>(0,a.jsx)(ie.default,{colStart:19,colSpan:6,group5:{colStart:17,colSpan:8},group4:{colStart:15,colSpan:10},group3:{shouldHide:!0},children:e}),oi=({asideIndex:e})=>{let[t]=i6().filter(({index:t})=>t===e),{type:o,incrementedType:r}=t||{},{allowAdvertising:l=!0,subtype:s}=(0,tt.usePageData)(),{account:{hasPersonalizedContentConsent:d}}=(0,a2.useConsent)(),p=(0,u.useFeatureFlag)("mparticle-news-oklahoma"),c=(0,u.useFeatureFlag)("mparticle-features-oklahoma"),g=s===i.ContentSubtype.News?p:s===i.ContentSubtype.Features&&c;switch(o){case"advertisement":{if(!r||!l)return null;let e="sid_1"===r;return(0,a.jsx)(oa,{children:e?(0,a.jsx)(ot,{children:(0,a.jsx)(n.default,{type:r})}):(0,a.jsx)(n.default,{type:r})})}case"recirculation":return g&&d?(0,a.jsx)(oa,{children:(0,a.jsx)(oe,{})}):null;default:return null}},oo=$.default.div.withConfig({displayName:"LayoutBlock.styles__LayoutBlockStyled",componentId:"sc-f9c112e7-0"})`
  display: grid;
  row-gap: 16px;
`,on=({testId:e,model:t})=>{let{blocks:i=[]}=t;return(0,a.jsx)(oo,{"data-testid":e,children:(0,a.jsx)(t5.default,{blocks:i})})},or=()=>null,ol=({children:e,asideIndex:t,dataComponent:i})=>(0,a.jsx)(a7.default,{marginBottom:16,dataComponent:i,children:(0,a.jsxs)(a9.default,{columns:24,group2:{columns:12},children:[(0,a.jsx)(ie.default,{colStart:6,colSpan:12,group5:{colStart:4,colSpan:13},group4:{colStart:1,colSpan:14},group3:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e}),t&&(0,a.jsx)(oi,{asideIndex:t})]})}),os=(0,a3.forwardLayout)((e,t,i)=>(0,a.jsx)("single-column"===t?or:ol,{dataComponent:"layout-block",asideIndex:i,children:(0,a.jsx)(on,{...e})})),od=({children:e})=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:32,group2:{marginTop:24,marginBottom:24},dataComponent:"links-block",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),op=(0,a3.forwardLayout)(e=>(0,a.jsx)(od,{children:(0,a.jsx)(ax,{...e})})),oc=({children:e,dataComponent:t})=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:32,group2:{marginTop:24,marginBottom:24},dataComponent:t,children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),ou=(0,a3.forwardLayout)(e=>{let{type:t}=e,i=`${iD(t)}-list`;return(0,a.jsx)(oc,{dataComponent:i,children:(0,a.jsx)(av.default,{...e})})});var og=e.i(957977);let om=({children:e,jumpLinkLabel:t})=>(0,a.jsx)(a7.default,{id:t,marginBottom:16,dataComponent:"text-block",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),oy=(0,a3.forwardLayout)(e=>{let{model:t}=e,{jumpLinkLabel:i}=t;return(0,a.jsx)(om,{jumpLinkLabel:i,children:(0,a.jsx)(og.default,{...e})})}),of=({children:e})=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:32,group2:{marginTop:24,marginBottom:24},dataComponent:"quote-block",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),oh=(0,a3.forwardLayout)(e=>(0,a.jsx)(of,{children:(0,a.jsx)(ak,{...e})})),ox=({children:e})=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:32,group2:{marginTop:24,marginBottom:24},dataComponent:"social-block",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),ob=(0,a3.forwardLayout)(e=>(0,a.jsx)(ox,{children:(0,a.jsx)(aH,{...e})})),oS=$.css`
  display: grid !important;
  row-gap: 16px;
`,ov=({children:e})=>(0,a.jsx)(a7.default,{marginBottom:16,dataComponent:"text-block",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},extraStyles:oS,children:e})})}),ow=(0,a3.forwardLayout)(e=>(0,a.jsx)(ov,{children:(0,a.jsx)(aW.default,{...e})})),oj=({children:e})=>(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group3:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e}),o$=(0,a3.forwardLayout)(e=>{let{model:t,type:i}=e,{blocks:o=[]}=t,n=o.find(e=>"caption"===e.type),r=`${i}-block`;return(0,a.jsx)(a7.default,{dataComponent:r,marginTop:32,marginBottom:32,group2:{marginTop:24,marginBottom:24},children:(0,a.jsx)(a9.default,{as:"figure",columns:24,group2:{columns:12},rowGap:8,children:(0,a.jsxs)(oj,{children:[(0,a.jsx)(aX.default,{...e}),n&&(0,a.jsx)(az.default,{...n})]})})})}),oC={accordion:iL,advertisement:iw.default,audio:o$,byline:iO,callout:iU,embed:iW,group:iY,headline:iX,image:i1,include:i4,layout:os,links:op,orderedList:ou,paragraph:oy,quote:oh,social:ob,subByline:iO,subheadline:iX,text:ow,unorderedList:ou,video:o$},ok=t.useLayoutEffect,oI=(0,t.createContext)(oC),{Provider:o_}=oI,oT=(0,t.memo)(({componentIndex:e,type:i,isSponsored:o,...n})=>{let r=(0,t.useContext)(oI),l=i6(),s=r[i],[d]=l.filter(({index:t})=>t===e),{index:p}=d||{};return s?(0,a.jsx)(s,{type:i,asideIndex:p,...n,..."byline"===i||"subByline"===i?{isSponsored:o}:void 0},e):null}),oB=(0,t.memo)(({blocks:e,layout:i="single-column",pageType:o,isSponsored:n,adPacing:r})=>{let l=(0,t.useRef)([]),s=(0,t.useMemo)(()=>e.filter(e=>"timestamp"!==e.type),[e]),d=(0,t.useMemo)(()=>{var e;return(e=(e=s).filter(e=>"advertisement"!==e.type),"double-column"!==i)?e:function(e,t={}){let a,{maxBlocksPerLayout:i}=t,o=(a=e.findIndex(({type:e})=>!i$.includes(e)))>=0&&"video"===e[a].type?a:-1,n=[];for(let[t,a]of e.entries()){if(function(e,t,a){let{type:i,model:o}=e;return!!("image"===i&&o?.emphasiseImage)||t===a||i$.includes(i)}(a,t,o)||"advertisement"===a.type){n.push(a);continue}let e=n[n.length-1];e?.type==="layout"&&function(e,t){if(!t)return!0;let a=e.model.blocks;if(a.length<t)return!0;let i=a[a.length-1].type;return iC.includes(i)}(e,i)?e.model.blocks.push(a):n.push({type:"layout",model:{blocks:[a]}})}return n}(e,{maxBlocksPerLayout:o===ij.PAGE_TYPES_CONSTANTS.FEATURES_ARTICLE?5:8})},[s,i,o]),p=(0,t.useMemo)(()=>{let e=new Set;return d.forEach((t,a)=>{"embed"===t.type&&e.add(a)}),e.size>0?e:void 0},[d]);l.current.length!==d.length&&(l.current=Array(d.length).fill(null));let c=(0,t.useMemo)(()=>d.map(e=>e.type),[d]),u=function(e,a,i,o,n){let[r,l]=(0,t.useState)([]),[s,d]=(0,t.useState)(!1),[p]=(0,eH.useBreakpoints)("LayoutRenderer"),c=["group1","group2","group3"].includes(p)?1.3:.6;return ok(()=>{d(!0)},[]),ok(()=>{l([])},[i]),ok(()=>{if(!s||!e)return;let t=a.current;t&&0!==t.length&&l(function(e,t,a={}){let{spacingFactor:i=.6,blockTypes:o,embedIndices:n}=a,r=t*i,l=[],s=0;for(let[t,a]of e.entries())if((s+=n?.has(t)?a+200:a)>=r){let e=o?.[t];if(e&&!ik.includes(e)||("image"===e||"video"===e)&&t<=3)continue;l.push({afterIndex:t}),s=0}return l}(t.map(e=>e?.getBoundingClientRect().height??0),window.innerHeight,{spacingFactor:c,blockTypes:o,embedIndices:n}))},[s,e,i,a,n,c]),r}(!!r,l,d.length,c,p),g=function(e,t=[]){let a=[],i=t.map((e,t)=>"layout"===e?t:-1).filter(e=>e>=0);if(i.length>0&&a.push({index:i[0],type:"advertisement",incrementedType:"sid_1"}),e.length>=2){let t=i.find(t=>t>e[0].afterIndex);void 0!==t&&a.push({index:t,type:"recirculation"});let o=i.find(t=>t>e[1].afterIndex);void 0!==o&&a.push({index:o,type:"advertisement",incrementedType:"sid_2"})}return a}(u,c);(0,t.useEffect)(()=>{r?.onMidSlotCount(u.length)},[u.length,r]);let m=(0,t.useCallback)(e=>t=>{l.current[e]=t},[]),y=function(e,t){let a=new Map;for(let[e,i]of t.entries())a.set(i.afterIndex,e+1);let i=[];for(let[t,o]of e.entries()){i.push({kind:"block",block:o,originalIndex:t});let e=a.get(t);void 0!==e&&i.push({kind:"ad-slot",adType:`mid_${e}`})}return i}(d,u);return(0,a.jsx)(iv,{value:g,children:y.map((e,t)=>"ad-slot"===e.kind?(0,a.jsx)(iw.default,{type:e.adType,layout:"single-column","data-testid":"ad-slot"},`ad-${e.adType}`):(0,a.jsx)("div",{ref:m(e.originalIndex),children:(0,a.jsx)(oT,{componentIndex:e.originalIndex,layout:i,...e.block,isSponsored:n})},`block-${e.originalIndex}`))})},L.default),oN=({topics:e=[],contents:i,onwardJourney:o=[]})=>{let r=im(),l=ig(i),s=(0,u.useFeatureFlag)("legacy-article-rendering-logic"),d=(0,t.useRef)(null);return iy(d),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.default,{type:"top",deferRequest:!0,showPlaceholder:!0,forwardedAdRef:d}),l&&(0,a.jsx)(ix,{data:l}),(0,a.jsxs)("article",{children:[s?(0,id.renderComponents)(i,r):(0,a.jsx)(oB,{layout:"single-column",blocks:i}),(0,a.jsx)(aK,{topics:e})]}),o.map((e,i)=>(0,a.jsxs)(t.Fragment,{children:[(0,a.jsx)(is,{sectionProps:e,index:i}),0===i&&(0,a.jsx)(a4,{isNewsArticle:!0})]},i))]})};var oA=e.i(160709),oP=e.i(77694);let oF=$.default.div.withConfig({displayName:"TravellingArticlePageButtons.styles__TravellingArticlePageButtonsStyled",componentId:"sc-9936148d-0"})`
  ${({theme:e,$isVisible:t})=>$.css`
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

    ${(0,C.applyStylesForBreakpoints)($.css`
        display: flex;
      `,"group1","group2")};
  `}
`,oE=({isVisible:e=!0})=>{let[i,o]=(0,t.useState)(!1),{pageTitle:n}=(0,tt.usePageData)();return(0,a.jsxs)(oF,{$isVisible:e,"data-testid":"travelling-article-page-buttons",children:[(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(j.default,{trigger:"click",title:n||"",iconOnly:!0}),(0,a.jsx)(oP.SaveButtonWrapper,{children:(0,a.jsx)(oA.default,{isInverse:!1,size:"small",withoutText:!0})})]}),!1]})};var oL=e.i(530342);let oD=()=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:32,children:(0,a.jsx)(a9.default,{columns:12,children:(0,a.jsx)(ie.default,{colStart:1,colSpan:12,children:(0,a.jsx)(oe,{})})})}),oM=()=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:32,children:(0,a.jsx)(a9.default,{shouldSkip:!0,group2:{columns:12,shouldSkip:!1},children:(0,a.jsx)(ie.default,{shouldHide:!0,group2:{colStart:1,colSpan:12,shouldHide:!1},children:(0,a.jsx)(oe,{})})})}),oR=(0,a3.forwardLayout)((e,t)=>{switch(t){case"single-column":return(0,a.jsx)(oD,{});case"double-column":return(0,a.jsx)(oM,{})}});var i5=i5;let oO=({sectionProps:e,index:t,caller:i})=>{let{data:o,isLoading:n}=(0,i5.default)(i),r=o.content.length?o:e,l=o?.content.length?"mparticle recommendation":"";return n?null:(0,a.jsx)(is,{sectionProps:r,index:t,analyticsGroupNameOverride:l})};var oG=e.i(60119),oU=e.i(222009);let oH=$.default.div.withConfig({displayName:"ReadingProgressBar.styles__ProgressBarContainerStyled",componentId:"sc-af33c9fd-0"})`
  position: fixed;
  top: ${({$top:e})=>e}px;
  left: 0;
  right: 0;
  height: 4px;
  ${(0,oU.applyZIndex)("level5")};
  pointer-events: none;
`,oW=$.default.div.withConfig({displayName:"ReadingProgressBar.styles__ProgressBarFillStyled",componentId:"sc-af33c9fd-1"})`
  ${({theme:e,$progress:t})=>$.css`
    height: 100%;
    width: ${t}%;
    background-color: ${e.playExperience.progressBar.progressIndicator.value};
    transition: width 0.15s ease-out;
    will-change: width;
  `};
`,oz=({articleRef:e,defaultTop:i=0,defaultProgress:o=0})=>{let{progress:n,headerBottom:r}=((e,a=0,i=0)=>{let[o,n]=(0,t.useState)({progress:i,headerBottom:a}),r=(0,t.useRef)(i),l=(0,t.useRef)(a);return(0,t.useEffect)(()=>{let t=document.querySelector("header"),a=()=>{let a=e.current;if(!a)return;let i=a.offsetTop,o=a.offsetHeight,s=Math.min(100,Math.max(0,(window.scrollY+window.innerHeight-i)/o*100)),d=t?t.getBoundingClientRect().bottom:0,p=Math.abs(s-r.current)>.5,c=Math.abs(d-l.current)>.5;(p||c)&&(r.current=s,l.current=d,n({progress:s,headerBottom:d}))},i=(0,eU.default)(a,50,{leading:!0,trailing:!0});return window.addEventListener("scroll",i,{passive:!0}),a(),()=>{window.removeEventListener("scroll",i),i.cancel()}},[e]),o})(e,i,o);return(0,a.jsx)(oH,{$top:r,role:"progressbar","aria-valuenow":Math.round(n),"aria-valuemin":0,"aria-valuemax":100,children:(0,a.jsx)(oW,{$progress:n})})},oY=({children:e,dataComponent:t})=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:32,group2:{marginTop:24,marginBottom:24},dataComponent:t,children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group4:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),oq=({children:e,dataComponent:t})=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:32,group2:{marginTop:24,marginBottom:24},dataComponent:t,children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:12,group5:{colStart:4,colSpan:13},group4:{colStart:1,colSpan:14},group3:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),oV=(0,a3.forwardLayout)((e,t)=>{let i=(0,to.useDarkMode)();return(0,a.jsx)("single-column"===t?oY:oq,{dataComponent:"tag-list-block",children:(0,a.jsx)(aQ.default,{...e,isDarkTheme:i})})});var oQ=e.i(714047),oX=e.i(53083),oK=e.i(950489),oZ=e.i(784421),oJ=e.i(508745),o0=e.i(315529),o1=e.i(767768),o2=e.i(518628);let o4=$.default.div.withConfig({displayName:"PortraitVideoConstraint",componentId:"sc-a369fe74-0"})`
  ${({orientation:e})=>"portrait"===e&&`
      max-width: calc(85vh * 9 / 16);
      margin: 0 auto;
    `}
`,o6=$.default.div.withConfig({displayName:"components.styles__CustomComponentStyled",componentId:"sc-4e7abdf9-0"})`
  display: grid;
  row-gap: 8px;
`,o3=$.default.div.withConfig({displayName:"components.styles__ButtonsStyled",componentId:"sc-4e7abdf9-1"})`
  display: flex;
  gap: 12px;
  padding: 4px 0;
`;(0,a3.forwardLayout)(()=>{let{pageTitle:e}=(0,tt.usePageData)();return(0,a.jsx)(a7.default,{dataComponent:"ctas-block",marginTop:32,marginBottom:32,group2:{marginTop:24,marginBottom:24},children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:6,colSpan:12,group5:{colStart:4,colSpan:13},group4:{colStart:1,colSpan:14},group3:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:(0,a.jsxs)(o3,{children:[(0,a.jsx)(j.default,{withoutPaddingInline:!0,iconPosition:"right",trigger:"click",isInverse:!0,isButtonInverse:!0,title:e||"",isOnLeftEdge:!0}),(0,a.jsx)(oA.default,{isInverse:!0,iconPosition:"right",alignment:"bottom-left"})]})})})})});let o8={"vdj-embed":o1.default,aresTelescope:oJ.default,callout:ao,embed:S.Embed,fragment:o0.default,group:ap,headline:au.default,idt2:oQ.default,image:({model:e,type:t})=>{let i=e.blocks.find(e=>"caption"===e.type);return(0,a.jsxs)(o6,{as:"figure","data-travelling-actions-obscures":"true",children:[(0,a.jsx)(t7.default,{model:e,type:t,isInverse:!1}),i&&(0,a.jsx)(az.default,{model:i.model,type:i.type})]})},include:S.Include,links:ax,listItem:oK.default,orderedList:av.default,paragraph:og.default,quote:ak,renditions:oZ.default,social:aH,subByline:t4,subheadline:au.default,text:aW.default,unorderedList:av.default,urlLink:oX.default,video:({model:e,type:t})=>{let i=e.blocks.find(e=>"caption"===e.type),o=(0,u.useFeatureFlag)("vertical-video-in-articles")?(0,o2.getHoldingImageOrientation)(e.blocks):"landscape";return(0,a.jsx)(o6,{"data-travelling-actions-obscures":"true",children:(0,a.jsxs)(o4,{orientation:o,children:[(0,a.jsx)(aX.default,{model:e,type:t,playerOrientation:o}),i&&(0,a.jsx)(az.default,{model:i.model,type:i.type})]})})}};var o5=e.i(817668);let o7=(e,t)=>{let a=e.find(e=>"alaska"===e.type);a&&(t>0?a.adBlock={type:"advertisement",model:{adType:o5.AdType.horizontal},incrementedType:`mid_${t+1}`}:delete a.adBlock)},o9="travelling_save_share_buttons";function ne({articleRootRef:e,articleEndRef:a}){let{activateExperiment:i}=(0,oG.useServersideOptimizelyContext)(),{experiments:o}=(0,tt.usePageData)(),n=o&&o[o9],[r]=(0,eH.useBreakpoints)("articles"),l=["group1","group2"].includes(r),s=(0,t.useRef)(!1);(0,t.useEffect)(()=>{s.current||"not-set"!==r&&(s.current=!0,n&&l&&(console.log(`[travelling-buttons] activating "${o9}" (variant="${n}", breakpoint="${r}")`),i(o9)))},[n,l,r]);let d="treatment"===n&&l,p=function({enabled:e,rootRef:a,sentinelRef:i}){let[o,n]=(0,t.useState)(!0),[r,l]=(0,t.useState)(!0),s=(0,t.useRef)(new Set);return(0,t.useEffect)(()=>{if(!e||"u"<typeof IntersectionObserver)return;let t=i.current;if(!t)return;let a=new IntersectionObserver(([e])=>{let t=e.rootBounds?.height??window.innerHeight;n(e.boundingClientRect.top>t)},{rootMargin:"0px 0px -96px 0px",threshold:0});return a.observe(t),()=>a.disconnect()},[e,i]),(0,t.useEffect)(()=>{if(!e||"u"<typeof IntersectionObserver)return;let t=a.current;if(!t)return;let i=s.current,o=new IntersectionObserver(e=>{let t=!1;e.forEach(e=>{let a=i.has(e.target);e.isIntersecting&&!a?(i.add(e.target),t=!0):!e.isIntersecting&&a&&(i.delete(e.target),t=!0)}),t&&l(i.size>0)},{threshold:0}),n=()=>{t.querySelectorAll("[data-article-page-buttons]").forEach(e=>o.observe(e))};n();let r="u">typeof MutationObserver?new MutationObserver(n):null;return r?.observe(t,{childList:!0,subtree:!0}),()=>{o.disconnect(),r?.disconnect(),i.clear()}},[e,a]),e&&o&&!r}({enabled:d,rootRef:e,sentinelRef:a});return{show:d,isVisible:p}}function nt(){let[e]=(0,eH.useBreakpoints)("articles");return["group1","group2","group3"].includes(e)||"not-set"===e?"single-column":"double-column"}let na="reading_progress_bar",ni=["features_page_aa_validation",na],no=$.default.div.withConfig({displayName:"SportPage.styles__SportHeadlineStyled",componentId:"sc-3f761263-0"})`
  ${(0,C.applyStylesForBreakpoints)($.css`
      grid-column: span 3;
    `,"group5","group6")}

  ${(0,C.applyStylesForBreakpoints)($.css`
      margin-inline: 16px;
    `,"group1","group2")}
`,nn=$.default.div.withConfig({displayName:"SportPage.styles__MainContentStyled",componentId:"sc-3f761263-1"})`
  > * {
    max-width: 100%;
  }
`,nr=({topics:e})=>e.length?(0,a.jsx)(ts.ContainerStyled,{"data-component":"tags",$type:"withoutMargin",$marginTop:["m","m","l","l","l","l"],$marginBottom:["m","m","l","l","l","l"],children:(0,a.jsx)(aQ.default,{"data-testid":"tagList",topics:e})}):null,nl={headline:[e=>(0,a.jsx)(no,{children:(0,a.jsx)(au.default,{...e})}),"headline-block",{$type:"wide",$marginTop:["m","m","l","l","l","l"],$marginBottom:["s","s","m","m","m","m"]},{$columns:[1,1,1,1,4,4]}],byline:[t4,"byline-block",t3,t8],callout:[ao,"callout-block",an],image:[aZ,"image-block"],include:[S.Include,"include-block",aI],orderedList:[av.default,"ordered-list-block",aS],social:[aH,"social-block",aI],subheadline:[au.default,"subheadline-block",{$type:"withoutMargin",$marginTop:["m","m","l","l","l","l"],$marginBottom:["s","s","m","m","m","m"]}],subByline:[t4,"subByline-block",t3,t8],text:[aW.default,"text-block",{$type:"withoutMargin",$marginBottom:["s","s","s","s","s","s"]}],quote:[ak,"quote-block",aw],unorderedList:[av.default,"unordered-list-block",aS],video:[aJ,"video-block"]};var ns=e.i(615557),nd=e.i(867639),np=e.i(241271),nc=e.i(343469),nu=e.i(240911);let ng={type:"hawaii",content:[]},nm="watchedVideos",ny=function(e){let[a,i]=(0,t.useState)([]),{query:o}=(0,d.useAppRouter)(),{slug:n}=o,{content:r,...l}=e.find(({type:e})=>"hawaii"===e)??ng,s=[...r.filter(({href:e})=>!a.includes(e)),...r.filter(({href:e})=>a.includes(e))],p=!!a.length;return(0,t.useEffect)(()=>{let e=(0,nu.getStringFromSlug)(n,!0),t=[...JSON.parse(sessionStorage.getItem(nm)??"[]").filter(t=>e!==t),e].slice(-5);i(()=>(sessionStorage.setItem(nm,JSON.stringify(t)),t))},[n]),{isLoading:!p,data:{...l,content:s}}};var nf=e.i(124436),nf=nf,nh=e.i(483481),nx=e.i(968279);let nb=(0,tD.withCMSFallback)(({topics:e,contents:t,collections:i=[]})=>{let o=im(),n=(0,te.useCurrentSlug)(),r=(0,nu.getStringFromSlug)(n),{isLoading:l,data:s}=ny(i),{content:d,title:p=""}=s,[{href:c=null}={}]=d,u=i.find(({type:e})=>"texas"===e),g=(0,ej.default)(u?.content,[]),m=(0,ej.default)(u?.title,""),y=g.filter(e=>!e.href.includes(r)),f=t.find(e=>e?.type==="video"),x=f&&(0,am.getNestedValue)(f,"mediaMetadata","versions"),b=x?.[0]?.versionId;return(0,nc.useUpNextVideo)(!l,c),(0,a.jsx)(nx.VideoDetailsPageBGLayer,{children:(0,a.jsxs)(nx.VideoDetailsPageContainer,{"data-testid":"video-page-container",children:[(0,a.jsxs)(nx.VideoSectionGridStyled,{$columns:[1,1,1,1,1,1],$rows:[1,1,1,1,"auto","auto"],$gridGap:["16px","16px","16px","16px","12px","12px"],$height:[1,1,1,1,1,1],$width:[1,1,1,1,1,1],$left:[1,1,1,1,1,1],$top:[1,1,1,1,1,1],children:[(0,a.jsx)(nf.default,{value:c,children:(0,a.jsx)(nx.CardStyled,{"data-testid":"video-page-video-section",children:(0,id.renderComponents)(t,o)})}),(0,a.jsx)(nh.TagsAndShare,{titleToShare:p,topics:e,versionId:b}),!l&&!!d.length&&(0,a.jsx)(np.default,{title:(0,nd.default)(p),content:d,withMainCard:!1})]}),!!y.length&&(0,a.jsx)(h.default,{sectionNumber:1,type:"texas",content:y,title:m,hasHorizontalLine:!0,isInverse:!0})]})})},({topics:e,slug:t=[],contents:i,collections:o=[]})=>{let n=im(),r=(0,nu.getStringFromSlug)(t),{content:l,title:s=""}=o.find(({type:e})=>"hawaii"===e)||{type:"hawaii",content:[]},d=o.find(({type:e})=>"texas"===e),p=(0,ej.default)(d?.content,[]),c=(0,ej.default)(d?.title,""),u=p.filter(e=>!e.href.includes(r));return(0,a.jsx)(nx.VideoDetailsPageBGLayer,{children:(0,a.jsxs)(nx.VideoDetailsPageContainer,{"data-testid":"video-page-container",children:[(0,a.jsxs)(nx.VideoSectionGridStyled,{$columns:[1,1,1,1,1,1],$rows:[1,1,1,1,"auto","auto"],$gridGap:["16px","16px","16px","16px","12px","12px"],$height:[1,1,1,1,1,1],$width:[1,1,1,1,1,1],$left:[1,1,1,1,1,1],$top:[1,1,1,1,1,1],children:[(0,a.jsx)(nx.CardStyled,{"data-testid":"video-page-video-section",children:(0,id.renderComponents)(i,n)}),(0,a.jsx)(nh.TagsAndShare,{titleToShare:s,topics:e}),!!l.length&&(0,a.jsx)(np.default,{title:(0,nd.default)(s),content:l,withMainCard:!1})]}),!!u.length&&(0,a.jsx)(h.default,{sectionNumber:1,type:"texas",content:u,title:c,hasHorizontalLine:!0,isInverse:!0})]})})}),nS={[i.ContentSubtype.Episode]:[nb,ns.COMPONENT_DICTIONARY],[i.ContentSubtype.Brand]:[nb,ns.COMPONENT_DICTIONARY],[i.ContentSubtype.Series]:[nb,ns.COMPONENT_DICTIONARY],[i.ContentSubtype.ClipsNews]:[nb,ns.COMPONENT_DICTIONARY],[i.ContentSubtype.ClipsSport]:[nb,ns.COMPONENT_DICTIONARY],[i.ContentSubtype.ClipsNewsNoRights]:[nb,ns.COMPONENT_DICTIONARY],[i.ContentSubtype.ClipsSportNoRights]:[nb,ns.COMPONENT_DICTIONARY],[i.ContentSubtype.Features]:[({topics:e=[],contents:i,onwardJourney:o=[],collection:r=[]})=>{let l=(0,t.useRef)(null),s=(0,t.useRef)(null),d=(0,t.useRef)(null),p=nt(),[c,g]=(0,t.useState)(0),m=(0,t.useCallback)(e=>g(e),[]),y=(0,u.useFeatureFlag)("mparticle-features-alaska"),f=(0,u.useFeatureFlag)("mparticle-features-oklahoma"),{account:{hasPersonalizedContentConsent:h}}=(0,a2.useConsent)(),{activateExperiment:x}=(0,oG.useServersideOptimizelyContext)();iy(l),o7(o,c);let{experiments:b}=(0,tt.usePageData)();(0,t.useEffect)(()=>{ni.forEach(e=>{b?.[e]&&x(e)})},[x,b]),r.some(({title:e})=>e.toLowerCase().includes("layout-listicle"));let S=r.some(({title:e})=>e.toLowerCase().includes("sponsorship")),v=b?.[na]==="treatment",{show:w,isVisible:j}=ne({articleRootRef:s,articleEndRef:d});return(0,a.jsxs)(oL.ContentBlockProvider,{value:o8,children:[w&&(0,a.jsx)(oE,{isVisible:j}),v&&(0,a.jsx)(oz,{articleRef:s,defaultTop:iI.HEADER_DEFAULT_HEIGHT,defaultProgress:5}),(0,a.jsx)(n.default,{type:"top",deferRequest:!0,showPlaceholder:!0,forwardedAdRef:l}),(0,a.jsxs)("article",{ref:s,children:[(0,a.jsx)(oB,{layout:p,blocks:i,pageType:ij.PAGE_TYPES_CONSTANTS.FEATURES_ARTICLE,isSponsored:S,adPacing:{onMidSlotCount:m}}),!!e.length&&(0,a.jsx)(oV,{topics:e,layout:"double-column"}),(0,a.jsx)("div",{ref:d})]}),f&&h&&(0,a.jsx)(oR,{layout:p}),o.map((e,i)=>{let o="alaska"===e.type&&y&&h;return(0,a.jsxs)(t.Fragment,{children:[o?(0,a.jsx)(oO,{sectionProps:e,index:i,caller:"alaska-onward-journey"}):(0,a.jsx)(is,{sectionProps:e,index:i}),0===i&&(0,a.jsx)(a4,{isNewsArticle:!1})]},i)})]})},{}],[i.ContentSubtype.News]:[({topics:e=[],contents:i,onwardJourney:o=[]})=>{let r=(0,t.useRef)(null),l=nt(),s=(0,u.useFeatureFlag)("mparticle-news-alaska"),d=(0,u.useFeatureFlag)("mparticle-news-ohio"),p=(0,u.useFeatureFlag)("mparticle-news-oklahoma"),{account:{hasPersonalizedContentConsent:c}}=(0,a2.useConsent)(),g=(0,t.useRef)(null),m=(0,t.useRef)(null),[y,f]=(0,t.useState)(0),h=(0,t.useCallback)(e=>f(e),[]);o7(o,y),iy(r);let{show:x,isVisible:b}=ne({articleRootRef:g,articleEndRef:m});return(0,a.jsxs)(oL.ContentBlockProvider,{value:o8,children:[x&&(0,a.jsx)(oE,{isVisible:b}),(0,a.jsx)(n.default,{type:"top",deferRequest:!0,showPlaceholder:!0,forwardedAdRef:r}),(0,a.jsxs)("article",{ref:g,children:[(0,a.jsx)(oB,{layout:l,blocks:i,pageType:ij.PAGE_TYPES_CONSTANTS.NEWS_ARTICLE,adPacing:{onMidSlotCount:h}}),!!e.length&&(0,a.jsx)(oV,{topics:e,layout:"double-column"}),(0,a.jsx)("div",{ref:m})]}),p&&c&&(0,a.jsx)(oR,{layout:l}),o.map((e,i)=>{let o="ohio"===e.type&&d&&c,n="alaska"===e.type&&s&&c,r="ohio"===e.type?"ohio-onward-journey":"alaska-onward-journey";return(0,a.jsxs)(t.Fragment,{children:[o||n?(0,a.jsx)(oO,{sectionProps:e,index:i,caller:r}):(0,a.jsx)(is,{sectionProps:e,index:i}),0===i&&(0,a.jsx)(a4,{isNewsArticle:!0})]},i)})]})},{}],[i.ContentSubtype.OPPM]:[()=>null,{}],[i.ContentSubtype.Radio]:[oN,a0],[i.ContentSubtype.Reels]:[nb,ns.COMPONENT_DICTIONARY],[i.ContentSubtype.Sport]:[({contents:e,topics:t=[],headerContents:i=[],onwardJourney:o=[]})=>{let r=(0,tn.useIsAdsServiceEnabled)(),l=im();return(0,a.jsxs)(a.Fragment,{children:[r&&(0,a.jsx)(n.default,{type:"leaderboard"}),(0,id.renderComponents)(i,l),(0,a.jsx)(ts.ContainerStyled,{$type:"wide",children:(0,a.jsx)(v.GridStyled,{$columns:[1,1,1,1,"minmax(0, 1fr) 315px","minmax(0, 1fr) 300px"],$gridGap:["40px","40px","64px","64px","98px","122px"],$margin:["16px","16px",void 0,void 0,void 0,void 0],children:(0,a.jsxs)(nn,{children:[(0,id.renderComponents)(e,l),(0,a.jsx)(nr,{topics:t})]})})}),o.map((e,t)=>(0,a.jsx)(h.default,{sectionNumber:t,...e,title:"ohio"===e.type?"Related":"More",titleAsHeadingTag:!1},t))]})},nl],[i.ContentSubtype.Trailer]:[()=>null,{}],[i.ContentSubtype.Podcasts]:[oN,a0],[i.ContentSubtype.VerticalReels]:[nb,ns.COMPONENT_DICTIONARY],[i.ContentSubtype.VerticalClipsNews]:[nb,ns.COMPONENT_DICTIONARY],[i.ContentSubtype.VerticalClipsSport]:[nb,ns.COMPONENT_DICTIONARY],[i.ContentSubtype.VerticalClipsNewsNoRights]:[nb,ns.COMPONENT_DICTIONARY],[i.ContentSubtype.VerticalClipsSportNoRights]:[nb,ns.COMPONENT_DICTIONARY],[i.ContentSubtype.Video]:[nb,ns.COMPONENT_DICTIONARY]},nv=({subtype:e,data:t})=>{let[i,o]=nS[e];return(0,a.jsx)(tN,{value:o,children:(0,a.jsx)(i,{...t})})},nw=()=>{let e=(0,te.useCurrentSlug)(),{subtype:t}=(0,tt.usePageData)(),{data:i}=(0,o.default)(e);return(0,a.jsx)(nv,{data:i,subtype:t})},nj=$.default.span.withConfig({displayName:"AccessRestrictionBanner.styles__BannerTextAnchorInnerStyled",componentId:"sc-e284e4b8-0"})`
  display: inline;
  vertical-align: middle;
`,n$=$.default.div.withConfig({displayName:"AccessRestrictionBanner.styles__BannerWrapper",componentId:"sc-e284e4b8-1"})`
  ${({theme:e})=>$.css`
    position: relative;
    ${(0,oU.applyZIndex)("level2")};
    background-color: ${e.app.error.banner.bg.default.value};
    border-bottom: 1px solid ${e.divider.highEmphasis};
    padding: 8px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center
      ${(0,C.applyStylesForBreakpoints)($.css`
          text-align: left;
        `,"group2")};
  `}
`,nC=$.default.div.withConfig({displayName:"AccessRestrictionBanner.styles__BannerContent",componentId:"sc-e284e4b8-2"})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${(0,C.applyStylesForBreakpoints)($.css`
      flex-wrap: nowrap;
    `,"group2")}
`,nk=$.default.span.withConfig({displayName:"AccessRestrictionBanner.styles__BannerText",componentId:"sc-e284e4b8-3"})`
  ${({theme:e})=>$.css`
    ${(0,k.applyTypography)(e.errorBannerText.bpLarge)};
    color: ${e.text.onInverseBG.default.value};
  `}
`,nI=$.default.a.withConfig({displayName:"AccessRestrictionBanner.styles__BannerTextAnchorStyled",componentId:"sc-e284e4b8-4"})`
  ${({theme:e})=>$.css`
    color: ${e.text.onInverseBG.default.value};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  `}
`,n_=$.default.span.withConfig({displayName:"AccessRestrictionBanner.styles__BannerIconWrapper",componentId:"sc-e284e4b8-5"})`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  padding: 6px;
`,nT=({text:e="Unfortunately, this content is not available in your region. To learn more, please visit our FAQ page ",linkText:t="here",linkUrl:i="https://help.bbc.com/hc/en-us",isSubscriptionAllowed:o})=>o?null:(0,a.jsx)(n$,{"data-testid":"access-restriction-banner",children:(0,a.jsxs)(nC,{children:[(0,a.jsx)(n_,{children:(0,a.jsx)(w.default,{height:20,width:20,color:"#ffb32b",name:"labels:warning"})}),(0,a.jsxs)(nk,{children:[e,(0,a.jsx)(b.default,{styledAnchor:nI,styledAnchorInner:nj,href:i,children:t}),"."]})]})});var nB=e.i(276045),nN=e.i(344065);function nA(e){let t=new Date;try{let{model:a,type:i}=e,{blocks:o}=a;return o.map((e,a)=>{var o,n,r;let{title:l,episode:s,startTime:d,endTime:p,brand:c}=e,{title:u,path:g}=c,{indexImage:m,synopses:y,programmesUrl:f,hasOnDemand:h,path:x}=s,b="minnesota"===i?y?.long||y?.medium||y?.short:y?.medium||y?.short||y?.long;return{brandHref:g??"",brandName:u??"",description:b,href:h?x??"":"",image:m,isLiveNow:(o=t,n=d,r=p,new Date(n)<=o&&o<new Date(r)),isOnDemand:!!h,itemPosition:a,metadata:{contentType:"episode",subtype:"episode"},programmeEnd:p,programmeStart:d,programmesUrl:f,startDate:d,title:l}})}catch(e){return e$.logger.error(`Error getting radio station collection: ${e}`),[]}}var nP=e.i(788664);function nF(e){return e.reduce((e,t)=>{var a;let i,o,n=(o=isNaN((i=new Date(a=t.programmeStart||"")).getTime())?parseInt(a.slice(0,2),10):i.getUTCHours())>=0&&o<9?"Early":o>=9&&o<12?"Morning":o>=12&&o<19?"Afternoon":o>=19&&o<24?"Evening":null;return n?{...e,[n]:[...e[n]||[],t]}:e},{})}function nE(){let e=new Date,t=[];for(let a=-7;a<=7;a++){let i=new Date(e);i.setDate(e.getDate()+a);let o=i.toISOString().slice(0,10);switch(a){case -1:case 0:case 1:{let e=new Intl.RelativeTimeFormat("en",{numeric:"auto"}),i=(0,nd.default)(e.format(a,"day"));t.push({text:i,date:o});break}default:{let i=new Date(e);i.setDate(e.getDate()+a),t.push({text:function(e){let t=e.getDate(),a=e.toLocaleDateString(void 0,{weekday:"short"});return`${a} ${t}${function(e){if(e>=11&&e<=13)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}(t)}`}(i),date:o})}}}return t}async function nL(e){let[t,a]=e.split("/"),{data:i}=await (0,ic.fetchClient)("schedule",{cache:"no-cache",params:{type:"audio",service_id:a,date:t},method:"GET",credentials:"include",isLegacyApiEnabled:!0});return i}let nD=(0,t.createContext)({}),{Provider:nM}=nD,nR=({value:e,children:t})=>(0,a.jsx)(nM,{value:e,children:t});function nO(e){let{isLoading:t=!1,data:a=[]}=(0,nP.default)(e,nL);return{isLoading:t,data:a}}var nG=e.i(215812);let nU=$.default.div.withConfig({displayName:"Alabama.styles__IndexCardWithTitleStyled",componentId:"sc-7cffa360-0"})`
  margin-bottom: 20px;
`,nH=$.default.div.withConfig({displayName:"Alabama.styles__AlabamaStyled",componentId:"sc-7cffa360-1"})`
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
    ${nU}:last-of-type {
      ${nG.CardStyled} {
        margin-bottom: 0;
        border: none;
      }
    }
  }

  ${(0,C.applyStylesForBreakpoints)($.css`
      max-width: 522px;
    `,"group4")}

  ${(0,C.applyStylesForBreakpoints)($.css`
      max-width: none;
    `,"group2")}
`,nW=$.default.div.withConfig({displayName:"Alabama.styles__ButtonWrapperStyled",componentId:"sc-7cffa360-2"})`
  ${({theme:e})=>$.css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6px 16px;
    margin-bottom: 12px;
    box-sizing: border-box;
    height: 32px;

    button {
      padding: 0;
      ${(0,k.applyTypography)(e.textLink.small.regular.bpLarge)};
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

    ${(0,C.applyStylesForBreakpoints)($.css`
        height: 44px;

        button {
          ${(0,k.applyTypography)(e.textLink.large.regular.bpLarge)};
          svg {
            width: 15px;
            height: auto;
          }
        }
      `,"group2")}
  `}
`,nz=$.default.h3.withConfig({displayName:"Alabama.styles__ClusterTitleStyled",componentId:"sc-7cffa360-3"})`
  ${({theme:e})=>$.css`
    padding: 0 16px 16px 16px;
    ${(0,k.applyTypography)(e.audio.listTitle.bpLarge)};
  `}
`,nY=$.default.div.withConfig({displayName:"Alabama.styles__AlabamaDatePickerStyled",componentId:"sc-7cffa360-4"})`
  display: grid;
  position: relative;
  background-color: white;
  overflow: hidden;
  grid-area: top-actions;
  padding-top: 48px;
  width: 100%;
  margin-bottom: 12px;
  z-index: 4;

  ${(0,C.applyStylesForBreakpoints)($.css`
      padding-top: 16px;
    `,"group3")};

  ${(0,C.applyStylesForBreakpoints)($.css`
      padding-top: 64px;
    `,"group2")};
`,nq=$.css`
  background-color: transparent;
  color: inherit;
  font-weight: 700;
  text-decoration: underline;
`,nV=(0,$.default)(ec.default).withConfig({displayName:"Alabama.styles__ButtonStyled",componentId:"sc-7cffa360-5"})`
  ${({theme:e,$isSelected:t})=>$.css`
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
      ${nq};
    }

    ${(0,k.applyTypography)(e.nav.topbar.level2.default)};

    ${t&&$.css`
      ${(0,k.applyTypography)(e.nav.topbar.level2.selected)};
      ${nq};
    `}

    ${(0,C.applyStylesForBreakpoints)($.css`
        padding: 0 12px;
        height: 54px;

        ${t?$.css`
              ${(0,k.applyTypography)(e.audio.datePicker.selected.bpSmall)};
              ${nq};
            `:$.css`
              ${(0,k.applyTypography)(e.audio.datePicker.default.bpSmall)};
            `}
      `,"group2")};
  `}
`,nQ=$.default.button.withConfig({displayName:"Alabama.styles__ChevronButtonStyled",componentId:"sc-7cffa360-6"})`
  ${({theme:e,disabled:t})=>$.css`
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

      ${!t&&$.css`
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
`,nX=$.default.div.withConfig({displayName:"Alabama.styles__DatePickerStyled",componentId:"sc-7cffa360-7"})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid #e6e8ea;
  overflow: hidden;
`,nK=$.default.div.withConfig({displayName:"Alabama.styles__BlurStyled",componentId:"sc-7cffa360-8"})`
  width: 68px;
  height: 100%;
  position: absolute;
  z-index: 1;

  ${(0,C.applyStylesForBreakpoints)($.css`
      width: 32px;
    `,"group2")};
`,nZ=(0,$.default)(nK).withConfig({displayName:"Alabama.styles__BlurLeftStyled",componentId:"sc-7cffa360-9"})`
  background: linear-gradient(90deg, #ffffff 23.75%, rgba(255, 255, 255, 0) 100%);
  left: 32px;

  ${(0,C.applyStylesForBreakpoints)($.css`
      background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0.4) 100%);
    `,"group2")};
`,nJ=(0,$.default)(nK).withConfig({displayName:"Alabama.styles__BlurRightStyled",componentId:"sc-7cffa360-10"})`
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #ffffff 76.25%);
  right: 32px;

  ${(0,C.applyStylesForBreakpoints)($.css`
      background: linear-gradient(90deg, rgba(255, 255, 255, 0.4) 0%, #ffffff 100%);
    `,"group2")};
`,n0=$.default.div.withConfig({displayName:"Alabama.styles__InnerContentStyled",componentId:"sc-7cffa360-11"})`
  ${()=>$.css`
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

    ${(0,C.applyStylesForBreakpoints)($.css`
        width: 100%;
      `,"group2")};
  `}
`,n1=(0,t.createContext)(""),{Provider:n2}=n1,n4=({children:e,value:t})=>(0,a.jsx)(n2,{value:t,children:e});var n6=e.i(866417),n3=e.i(56923);let n8=(0,t.memo)(({dates:e,selectedDate:i,onDateChange:o})=>{let n=(0,t.useRef)(null),r=(0,t.useRef)(null),{scrollStatus:l,onArrowClick:s}=(0,n6.useScrollSnap)(n),{isLeftScrollAvailable:d,isRightScrollAvailable:p}=l,c=e=>()=>s(e);return(0,t.useEffect)(()=>{let{current:e}=r;e&&e.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[r,i]),(0,a.jsxs)(nX,{"data-testid":"date-picker",children:[(0,a.jsx)(nQ,{disabled:!d,onClick:c("left"),"aria-label":"Previous Page",children:(0,a.jsx)(w.default,{name:"arrows:chevron-left"})}),d&&(0,a.jsx)(nZ,{}),(0,a.jsx)(n0,{ref:n,children:e.map(({date:e,text:t},n)=>(0,a.jsx)(nV,{ref:e===i?r:null,$isSelected:e===i,testId:`dateButton${e===i?"-selected":""}`,type:"unboxed",onClick:()=>{o(e)},text:t},n))}),p&&(0,a.jsx)(nJ,{}),(0,a.jsx)(nQ,{disabled:!p,onClick:c("right"),"aria-label":"Next Page",children:(0,a.jsx)(w.default,{name:"arrows:chevron-right"})})]})}),n5=(0,t.memo)(({content:e,isFirstTimeGroupVisible:i=!0,withIntersectionObserver:o=!1})=>{let{items:n,observableRef:r}=function(e,a){var i,o;let n=Object.values(e).flat(),[{itemPosition:r=10}={}]=n,[{itemPosition:l=10}={}]=n.reverse(),[s,d]=(0,t.useState)(r+10),p=(0,n3.useThrottledIntersectionObserver)(([{isIntersecting:e}])=>{e&&d(e=>Math.min(e+10,l))},{wait:250,threshold:.1,trailing:!0}),c=Object.entries(e),u=a?(i=c,o=s,i.reduce((e,[t,a])=>{let i=a.filter(({itemPosition:e=o})=>e<=o);return i.length?[...e,[t,i]]:e},[])):c;return(0,t.useEffect)(()=>{a&&d(r+10)},[r,a]),{items:u,...a?{observableRef:p}:{}}}(e,o),l=(0,t.useContext)(n1);return(0,a.jsxs)(a.Fragment,{children:[n.map(([e,t],o)=>(0,a.jsxs)(nU,{children:[(o>0||i)&&(0,a.jsx)(nz,{"data-testid":`cluster-title-styled-${e}`,children:e}),t.map(({itemPosition:e,isLiveNow:t,isOnDemand:i,href:o,...n},r)=>{var s,d,p,c;return(0,a.jsx)(ag.default,{...n,itemPosition:e,isLiveNow:t,isOnDemand:i,type:"bradford",href:(s=l,d=o,p=t,c=i,p?s:c&&d?d:""),groupName:"audio live"},r)})]},o)),r&&(0,a.jsx)("div",{ref:r})]})}),n7=(0,t.memo)(({content:e,areEarlierItemsVisible:i,onEarlierItemsClick:o})=>{let n=e.findIndex(({isLiveNow:e})=>e),r=-1!==n,l=r?e.slice(0,n):[],s=r?e.slice(n):e,d=nF(l),p=(0,t.useMemo)(()=>nF(s),[s]),c=Object.keys(d).some(e=>Object.keys(p).includes(e));return(0,a.jsxs)(a.Fragment,{children:[!!l.length&&(i?(0,a.jsx)(n5,{content:d}):(0,a.jsx)(nW,{"data-testid":"button-rapper-styled",children:(0,a.jsx)(ec.default,{testId:"earlier-today-button",iconPosition:"left",onClick:o,text:"Earlier today",type:"unboxed",icon:"arrows:chevron-up"})})),(0,a.jsx)(n5,{withIntersectionObserver:!0,content:p,isFirstTimeGroupVisible:!i||i&&!c})]})}),n9=(0,tD.withCMSFallback)(({testId:e="alabama",content:i})=>{let o=(0,t.useRef)(null),n=(0,t.useMemo)(()=>nE(),[]),[{date:r}]=n.filter(({date:e})=>new Date().toISOString().slice(0,10)===e),[l,s]=(0,t.useState)(r),[d,p]=(0,t.useState)(!1),[{serviceId:c}={}]=i,{isLoading:u,data:g}=nO(`${l}/${c}`),m=nA({type:"alabama",model:{blocks:g}});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(nY,{children:(0,a.jsx)(n8,{dates:n,selectedDate:l,onDateChange:e=>{s(e),p(!1)}})}),(0,a.jsx)(nH,{"data-testid":`${e}-grid`,ref:o,children:u?(0,a.jsx)(nN.default,{}):(0,a.jsx)(n7,{content:m,areEarlierItemsVisible:d,onEarlierItemsClick:()=>p(!0)})})]})},({content:e,testId:i="alabama"})=>{let o=(0,t.useRef)(null),n=(0,t.useMemo)(()=>nE(),[]),[{date:r}]=n.filter(({date:e})=>new Date().toISOString().slice(0,10)===e),[l,s]=(0,t.useState)(r),[d,p]=(0,t.useState)(!1),[,...c]=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(nY,{children:(0,a.jsx)(n8,{dates:n,selectedDate:l,onDateChange:e=>{s(e),p(!1)}})}),(0,a.jsx)(nH,{"data-testid":`${i}-grid`,ref:o,children:(0,a.jsx)(n7,{content:c,areEarlierItemsVisible:d,onEarlierItemsClick:()=>p(!0)})})]})});var re=e.i(686764),rt=e.i(179286),ra=e.i(44115),ri=e.i(567290);let ro=$.default.div.withConfig({displayName:"Louisiana.styles__LouisianaStyled",componentId:"sc-82f0b08a-0"})`
  display: flex;
  gap: 16px;
  max-width: 932px;
  margin-inline: auto;

  ${(0,C.applyStylesForBreakpoints)($.css`
      max-width: unset;
      margin-inline: 16px;
    `,"group4")};
`,rn=$.default.div.withConfig({displayName:"Louisiana.styles__ScrollableContainerStyled",componentId:"sc-82f0b08a-1"})`
  position: relative;
  margin-bottom: 8px;
`,rr=$.default.ul.withConfig({displayName:"Louisiana.styles__ScheduleListStyled",componentId:"sc-82f0b08a-2"})`
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
`,rl=$.default.h1.withConfig({displayName:"Louisiana.styles__PromoHeadlineStyled",componentId:"sc-82f0b08a-3"})`
  ${({theme:e})=>$.css`
    ${(0,k.applyTypography)(e.promoHeadline.medium.default.bpLarge)};
    margin-bottom: 8px;

    ${(0,C.applyStylesForBreakpoints)($.css`
        margin-bottom: 0;
      `,"group2")}
  `}
`,rs=$.default.p.withConfig({displayName:"Louisiana.styles__PromoDescriptionStyled",componentId:"sc-82f0b08a-4"})`
  ${({theme:e})=>$.css`
    ${(0,k.applyTypography)(e.promoDescription.regular.bpLarge)};
    color: ${e.text.mediumEmphasis.value};
    margin-bottom: 12px;
  `}
`,rd=$.default.div.withConfig({displayName:"Louisiana.styles__ImageContainerSmallStyled",componentId:"sc-82f0b08a-5"})`
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

  ${rl} {
    margin-bottom: 0;
  }

  ${(0,C.applyStylesForBreakpoints)($.css`
      img {
        display: none;
      }
    `,"group6")}

  ${(0,C.applyStylesForBreakpoints)($.css`
      display: flex;

      img {
        display: block;
      }
    `,"group2")}
`,rp=$.default.div.withConfig({displayName:"Louisiana.styles__ImageContainerLargeStyled",componentId:"sc-82f0b08a-6"})`
  img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 50%;
    width: 142px;
    height: 142px;
  }

  ${(0,C.applyStylesForBreakpoints)($.css`
      display: none;
    `,"group2")}
`,rc=$.default.div.withConfig({displayName:"Louisiana.styles__ContentContainerStyled",componentId:"sc-82f0b08a-7"})`
  ${({theme:e})=>$.css`
    overflow: hidden;

    ${ri.RoundButton} {
      margin-inline-start: 2px;
      margin-bottom: 16px;
      ${ri.ButtonIcon} {
        border-color: ${e.floatingPlayButton.default.normal.stroke.value};

        svg {
          width: 16px;
          height: 16px;
        }
      }
    }
  `}
`,ru=$.default.div.withConfig({displayName:"Louisiana.styles__ScheduleCTAStyled",componentId:"sc-82f0b08a-8"})`
  ${({theme:e})=>$.css`
    display: flex;
    box-sizing: border-box;
    align-items: center;

    p {
      ${(0,k.applyTypography)(e.textLink.large.regular.bpLarge)};
    }

    &:hover {
      p {
        text-decoration: underline;
      }
    }
  `}
`,rg=(0,tD.withCMSFallback)(({testId:e="louisiana",content:i})=>{let o=(0,t.useRef)(null),{scrollStatus:n,onArrowClick:r}=(0,n6.useScrollSnap)(o,!1),{isLeftScrollAvailable:l,isRightScrollAvailable:s}=n,[d,...p]=i,{title:c,description:u,image:g,href:m,stationLink:y=""}=d,f=p.findIndex(({isLiveNow:e})=>e),h=p.slice(f,f+10);return(0,a.jsxs)(ro,{"data-testid":e,children:[(0,a.jsx)(rp,{children:g&&(0,a.jsx)(rt.default,{...g,cardType:"louisiana"})}),(0,a.jsxs)(rc,{children:[(0,a.jsxs)(rd,{children:[g&&(0,a.jsx)(rt.default,{...g,cardType:"louisiana"}),(0,a.jsx)(rl,{children:c})]}),(0,a.jsx)(rs,{children:u}),(0,a.jsx)(re.default,{condition:!!y,wrapper:e=>(0,a.jsx)(b.default,{href:y,children:e}),children:(0,a.jsx)(ec.default,{tabIndex:y?-1:void 0,type:"round",size:"large",icon:"playback-avkx:play",testId:"southend-play-button","data-action":"play",text:"Listen Live","aria-label":"listen live"})}),(0,a.jsx)(rn,{role:"region","aria-label":`${c} programme schedule`,children:(0,a.jsxs)(rr,{ref:o,children:[h.map((e,t)=>(0,a.jsx)("li",{children:(0,a.jsx)(ag.default,{...e,type:"londonderry",href:y})},t)),(0,a.jsx)("li",{"data-testid":"schedule-link-item",children:(0,a.jsx)(b.default,{href:m,children:(0,a.jsxs)(ru,{children:[(0,a.jsx)(w.default,{name:"time-and-date:schedule",width:24,height:24}),(0,a.jsx)("p",{children:"Schedule"})]})})})]})}),(0,a.jsx)(ra.default,{isSponsored:!1,isInverse:!1,handleArrowClick:r,isLeftArrowDisabled:!l,isRightArrowDisabled:!s,variant:"louisiana",ariaLiveMessage:l?"viewing":"beginning"})]})]})},({testId:e="louisiana",content:i=[],...o})=>{let n=(0,t.useRef)(null),{scrollStatus:r,onArrowClick:l}=(0,n6.useScrollSnap)(n,!1),{isLeftScrollAvailable:s,isRightScrollAvailable:d}=r,[p,...c]=i,{title:u,description:g,image:m,href:y}=p,f=c.findIndex(({isLiveNow:e})=>e),h=c.slice(f,f+10);return(0,a.jsxs)(ro,{"data-testid":e,children:[(0,a.jsx)(rp,{children:m&&(0,a.jsx)(rt.default,{...m})}),(0,a.jsxs)(rc,{children:[(0,a.jsxs)(rd,{children:[m&&(0,a.jsx)(rt.default,{...m}),(0,a.jsx)(rl,{children:u})]}),(0,a.jsx)(rs,{children:g}),(0,a.jsx)(ec.default,{type:"round",size:"large",icon:"playback-avkx:play",testId:"southend-play-button","data-action":"play",text:"Listen Live"}),(0,a.jsx)(rn,{role:"region","aria-label":`${u} programme schedule`,children:(0,a.jsxs)(rr,{ref:n,children:[h.map((e,t)=>(0,a.jsx)("li",{children:(0,a.jsx)(ag.default,{...e,type:"londonderry",...o})},t)),(0,a.jsx)("li",{"data-testid":"schedule-link-item",children:(0,a.jsx)(b.default,{href:y,children:(0,a.jsxs)(ru,{children:[(0,a.jsx)(w.default,{name:"time-and-date:schedule",width:24,height:24}),(0,a.jsx)("p",{children:"Schedule"})]})})})]})}),(0,a.jsx)(ra.default,{isSponsored:!1,isInverse:!1,handleArrowClick:l,isLeftArrowDisabled:!s,isRightArrowDisabled:!d,variant:"louisiana"})]})]})}),rm="radio-station-top-brand-name",ry=$.default.div.withConfig({displayName:"Minnesota.styles__MinnesotaStyled",componentId:"sc-5c0606f-0"})`
  display: grid;
  gap: 32px;
  margin-bottom: 32px;
`,rf=$.default.div.withConfig({displayName:"Minnesota.styles__MinnesotaTopAreaStyled",componentId:"sc-5c0606f-1"})`
  background-color: ${({theme:e})=>e.container.onInverseBG2.value};
  width: 100%;
  box-sizing: border-box;
  display: grid;
  gap: 32px;
  padding: 48px 16px 16px 16px;
  overflow: hidden;

  ${(0,C.applyStylesForBreakpoints)($.css`
      padding-top: 24px;
    `,"group3")};

  ${(0,C.applyStylesForBreakpoints)($.css`
      gap: 24px;
    `,"group2")};
`,rh=$.default.div.withConfig({displayName:"Minnesota.styles__MinnesotaRadioInfoStyled",componentId:"sc-5c0606f-2"})`
  width: 100%;
  display: grid;
  gap: 16px;
`,rx=$.default.div.withConfig({displayName:"Minnesota.styles__MinnesotaUpNextStyled",componentId:"sc-5c0606f-3"})`
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

  ${(0,C.applyStylesForBreakpoints)($.css`
      grid-template-columns: 1fr;
      padding: 16px 0 0 0;
    `,"group2")};
`,rb=$.default.h2.withConfig({displayName:"Minnesota.styles__MinnesotaUpNextTitleStyled",componentId:"sc-5c0606f-4"})`
  ${({theme:e})=>$.css`
    color: #e6e8ea;
    ${(0,k.applyTypography)(e.sectionTitle.bpLarge)};

    ${(0,C.applyStylesForBreakpoints)($.css`
        padding: 0 16px;
      `,"group2")};
  `}
`,rS=(0,$.default)(v.GridStyled).withConfig({displayName:"Minnesota.styles__MinnesotaUpNextItemsStyled",componentId:"sc-5c0606f-5"})`
  display: flex;
  overflow: scroll;
  column-gap: 32px;
  scroll-snap-type: x proximity;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  ${(0,C.applyStylesForBreakpoints)($.css`
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

      ${(0,C.applyStylesForBreakpoints)($.css`
          right: 0;
        `,"group2")};
    }
  }
`,rv=$.default.div.withConfig({displayName:"Minnesota.styles__ScheduleCTAStyled",componentId:"sc-5c0606f-6"})`
  ${({theme:e})=>$.css`
    display: flex;
    box-sizing: border-box;
    align-items: center;
    color: #ffffff;
    height: 100%;
    padding: 0 24px 0 16px;

    p {
      ${(0,k.applyTypography)(e.textLink.large.regular.bpLarge)};
    }

    &:hover p {
      text-decoration: underline;
    }
  `}
`,rw=$.default.div.withConfig({displayName:"Minnesota.styles__RadioTopStyled",componentId:"sc-5c0606f-7"})`
  display: flex;
  gap: 32px;
  width: 100%;
  max-width: 722px;
  margin: auto;

  ${(0,C.applyStylesForBreakpoints)($.css`
      flex-direction: column;
      gap: 24px;
    `,"group3")};
`,rj=$.default.div.withConfig({displayName:"Minnesota.styles__RadioTopImageContainerStyled",componentId:"sc-5c0606f-8"})`
  ${({$imgUrl:e})=>$.css`
    position: relative;
    width: 142px;
    aspect-ratio: 1 / 1;

    ${(0,C.applyStylesForBreakpoints)($.css`
        width: 190px;
        align-self: center;
      `,"group3")};

    ${e&&$.css`
      &::after {
        content: '';
        position: absolute;
        height: 388px;
        width: 388px;
        bottom: 0;
        right: 0;
        background:
          linear-gradient(to left, transparent 75%, rgba(0, 0, 0, 0.5) 75%),
          url(${(0,r.getAudioImageSrc)(e)}) no-repeat center;
        aspect-ratio: 1 / 1;
        background-size: cover;
        filter: blur(120px);
        transform: translate(-32px, -32px);

        ${(0,oU.applyZIndex)("level0")};

        ${(0,C.applyStylesForBreakpoints)($.css`
            background:
              linear-gradient(to top, transparent 75%, rgba(0, 0, 0, 0.5) 75%),
              url(${e}) no-repeat center;
            left: 50%;
            transform: translateX(-50%) translateY(-64px);
          `,"group3")};

        ${(0,C.applyStylesForBreakpoints)($.css`
            height: 360px;
            width: 360px;
          `,"group2")};
      }
    `}
  `}
`,r$=$.default.div.withConfig({displayName:"Minnesota.styles__RadioTopImageStyled",componentId:"sc-5c0606f-9"})`
  ${({$image:e="episode"})=>$.css`
    ${(0,oU.applyZIndex)("level1")};

    img {
      object-fit: cover;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
    }

    ${"station"===e&&$.css`
      width: 40px;
      position: absolute;
      bottom: 0;
      right: 0;

      ${(0,C.applyStylesForBreakpoints)($.css`
          bottom: 10px;
          right: 10px;
        `,"group3")};
    `}
  `}
`,rC=$.default.div.withConfig({displayName:"Minnesota.styles__RadioTopDetailsStyled",componentId:"sc-5c0606f-10"})`
  flex: 1;
`,rk=$.default.h1.withConfig({displayName:"Minnesota.styles__StationNameStyled",componentId:"sc-5c0606f-11"})`
  ${({theme:e})=>$.css`
    ${(0,k.applyTypography)(e.radioPlayer.stationName.default.bpLarge)};
    color: ${e.text.onInverseBG.default.value};
    margin-bottom: 16px;

    &:hover {
      text-decoration: underline;
    }

    ${(0,C.applyStylesForBreakpoints)($.css`
        ${(0,k.applyTypography)(e.radioPlayer.stationName.default.bpSmall)};
      `,"group3")};
  `};
`,rI=$.default.h2.withConfig({displayName:"Minnesota.styles__BrandNameStyled",componentId:"sc-5c0606f-12"})`
  ${({theme:e})=>$.css`
    ${(0,k.applyTypography)(e.radioPlayer.brandName.default.bpLarge)};
    color: ${e.text.lowEmphasis.value};
    margin-bottom: 4px;

    &:hover {
      text-decoration: underline;
    }

    ${(0,C.applyStylesForBreakpoints)($.css`
        ${(0,k.applyTypography)(e.radioPlayer.brandName.default.bpSmall)};
      `,"group3")};
  `};
`,r_=$.default.h3.withConfig({displayName:"Minnesota.styles__EpisodeTitleStyled",componentId:"sc-5c0606f-13"})`
  ${({theme:e})=>$.css`
    ${(0,k.applyTypography)(e.radioPlayer.episodeName.bpLarge)};
    color: ${e.text.onInverseBG.default.value};

    ${(0,C.applyStylesForBreakpoints)($.css`
        ${(0,k.applyTypography)(e.radioPlayer.episodeName.bpSmall)};
      `,"group3")};
  `};
`,rT=(0,t.memo)(({model:e,...t})=>e&&(0,a.jsx)(r$,{$image:"station",children:(0,a.jsx)(rt.default,{model:e,...t,testId:"radio-station-station-image"})})),rB=({currentEpisode:e,station:t})=>{let{image:i,title:o,brandName:n,brandHref:r}=e,{image:l,title:s,href:d}=t,p=i?.model?.blocks?.src;return(0,a.jsxs)(rw,{"data-testid":"radio-station-top-wrapper",children:[(0,a.jsxs)(rj,{$imgUrl:p,children:[i&&(0,a.jsx)(r$,{$image:"episode",children:(0,a.jsx)(rt.default,{...i,testId:"radio-station-episode-image"})}),(0,a.jsx)(rT,{...l})]}),(0,a.jsxs)(rC,{children:[(0,a.jsx)(b.default,{href:d,children:(0,a.jsx)(rk,{"data-testid":"radio-station-top-station-name",children:s})}),n&&(r?(0,a.jsx)(b.default,{href:r,children:(0,a.jsx)(rI,{"data-testid":rm,children:n})}):(0,a.jsx)(rI,{"data-testid":rm,children:n})),(0,a.jsx)(r_,{"data-testid":"radio-station-top-episode-title",children:o})]})]})},rN=(0,t.memo)(({currentShowTitle:e,...t})=>{let i={playlistLabels:[],blocks:function(e){let{serviceId:t,image:a,title:i,description:o}=e;return t?[{type:"audio",model:{blocks:[{type:"media",model:{blocks:[{type:"mediaMetadata",model:{id:"",title:i,advertising:!0,caption:"",embedding:!0,format:"audio",imageCopyright:"BBC",imageUrl:"",indexImage:a,smpKind:"radioProgramme",subType:"episode",syndication:{destinations:[]},synopses:{short:o},versions:[{availableTerritories:{uk:!1,nonUk:!0},versionId:t,types:["episode"],duration:"",durationISO8601:"",drm:!1,download:!1,availableFrom:0,availableTo:0,indexInTleo:0}]}}]}}]}}]:[]}(t),playerPosition:"radio-station-page",isAudio:!0,isLiveRadio:!0};return(0,a.jsx)(D.default,{isAudio:!0,testId:"radio-station-player",...i,playlistLabels:[{av_show:e}]})},(e,t)=>{let{currentShowTitle:a,...i}=e,{currentShowTitle:o,...n}=t;return(0,L.default)(i,n)});function rA(e,t){let a=new Date;"tomorrow"===t&&a.setDate(a.getDate()+1);let i=a.toISOString().slice(0,10);return`${i}/${e}`}let rP=(0,tD.withCMSFallback)(({testId:e="minnesota",content:i})=>{let o=(0,p.usePopup)(),{push:n}=(0,d.useAppRouter)(),r=(0,t.useRef)(null),{scrollStatus:l,onArrowClick:s}=(0,n6.useScrollSnap)(r),{isLeftScrollAvailable:c,isRightScrollAvailable:u}=l,[g]=i,{title:m,description:y="",image:f,href:h,serviceId:x}=g,{currentScheduleItem:S,visibleScheduleItems:v}=function(e){let[a,i]=(0,t.useState)(!0),o=(0,t.useMemo)(()=>rA(e,"today"),[e,a]),n=(0,t.useMemo)(()=>rA(e,"tomorrow"),[e,a]),{data:r}=nO(o),{data:l}=nO(n),s=(0,t.useMemo)(()=>nA({type:"minnesota",model:{blocks:r}}),[r,a]),d=(0,t.useMemo)(()=>nA({type:"minnesota",model:{blocks:l}}),[l,a]),p=s.findIndex(({isLiveNow:e})=>e),c=s[p],u=[...s,...d].slice(p+1,p+10);return(0,t.useEffect)(()=>{if(a){i(!1);let[{startDate:e}]=u;setTimeout(()=>i(!0),new Date(e??"").getTime()-Date.now())}},[a,u]),{currentScheduleItem:c,visibleScheduleItems:u}}(x??""),{description:j="",brandName:$,programmesUrl:C}=S,k=j.split("\n").map(e=>e.trim()).filter(Boolean);return(0,t.useEffect)(()=>{let e=e=>{let t=e.target.closest("a");t&&t.href&&(e.preventDefault(),o({variant:"leaving-page",onPrimaryAction:()=>n(t.href),onSecondaryAction:()=>window.open(t.href,"_blank")}))};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}},[]),(0,a.jsxs)(ry,{"data-testid":`${e}-grid`,children:[(0,a.jsxs)(rf,{children:[(0,a.jsxs)(rh,{children:[(0,a.jsx)(rB,{currentEpisode:S,station:g}),(0,a.jsx)(rN,{serviceId:x,title:m,description:y,image:f,currentShowTitle:$})]}),(0,a.jsxs)(rx,{children:[(0,a.jsx)(rb,{children:"Up Next"}),(0,a.jsxs)(rS,{ref:r,children:[v.map((e,t)=>(0,a.jsx)(ag.default,{...e,type:"wells",itemPosition:t},t)),(0,a.jsx)(b.default,{href:h,children:(0,a.jsxs)(rv,{children:[(0,a.jsx)(w.default,{name:"time-and-date:schedule",width:24,height:24}),(0,a.jsx)("p",{children:"Schedule"})]})})]}),(0,a.jsx)(ra.default,{isInverse:!0,isSponsored:!1,isLeftArrowDisabled:!c,isRightArrowDisabled:!u,handleArrowClick:s,variant:"minnesota"})]})]}),(0,a.jsx)(E,{description:k,isActionVisible:!1,isStationPage:!0,programmesUrl:C})]})},({testId:e="minnesota",content:i,...o})=>{let n=(0,t.useRef)(null),{scrollStatus:r,onArrowClick:l}=(0,n6.useScrollSnap)(n),{isLeftScrollAvailable:s,isRightScrollAvailable:d}=r,[p,...c]=i,[u]=c,{title:g,description:m="",image:y,href:f,serviceId:h}=p,{description:x=""}=u,S=x.split("\n").map(e=>e.trim()).filter(Boolean);return(0,a.jsxs)(ry,{"data-testid":`${e}-grid`,children:[(0,a.jsxs)(rf,{children:[(0,a.jsxs)(rh,{children:[(0,a.jsx)(rB,{currentEpisode:u,station:p}),(0,a.jsx)(rN,{serviceId:h,title:g,description:m,image:y})]}),(0,a.jsxs)(rx,{children:[(0,a.jsx)(rb,{children:"Up Next"}),(0,a.jsxs)(rS,{ref:n,children:[i.map((e,t)=>(0,a.jsx)(ag.default,{...e,type:"wells",itemPosition:t,...o},t)),(0,a.jsx)(b.default,{href:f,children:(0,a.jsxs)(rv,{children:[(0,a.jsx)(w.default,{name:"time-and-date:schedule",width:24,height:24}),(0,a.jsx)("p",{children:"Schedule"})]})})]}),(0,a.jsx)(ra.default,{isInverse:!0,isSponsored:!1,isLeftArrowDisabled:!s,isRightArrowDisabled:!d,handleArrowClick:l,variant:"minnesota"})]})]}),(0,a.jsx)(E,{avProperties:{},isStationPage:!0,isActionVisible:!1,description:S})]})});var rF=e.i(833223);let rE="back-to-top-button-wrapper-styled",rL="back-to-top-button",rD={group6:172,group5:56,group4:16,group3:16,group2:0,group1:0},rM={group6:68,group5:56,group4:24,group3:16,group2:16,group1:16},rR=["group6","group5","group4","group3"],rO=$.default.div.withConfig({displayName:"Missouri.styles__MissouriStyled",componentId:"sc-bffcf76-0"})`
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

  ${rR.map(e=>(0,C.applyStylesForBreakpoints)($.css`
        padding-inline: ${rD[e]}px;
        column-gap: ${rM[e]}px;
      `,e))};

  ${(0,C.applyStylesForBreakpoints)($.css`
      grid-template-columns: clamp(203px, 35vw, 266px) 1fr;
      grid-template-areas:
        'sticky-area top'
        'details details'
        'back-to-top back-to-top';
      margin: 0;
      padding: 0;
    `,"group3")};

  ${(0,C.applyStylesForBreakpoints)($.css`
      margin: 0;
      grid-template-areas: 'top' 'details' 'back-to-top';
      grid-template-columns: unset;
    `,"group2")};
`,rG=$.default.div.withConfig({displayName:"Missouri.styles__MissouriContentStyled",componentId:"sc-bffcf76-1"})`
  ${({theme:e})=>$.css`
    display: grid;
    grid-area: top;
    position: relative;
    grid-template-areas: 'top-image' 'top-details' 'top-actions';
    background-color: transparent;

    ${(0,C.applyStylesForBreakpoints)($.css`
        padding: 0;
        background-color: ${e.container.onInverseBG2.value};
        grid-template-columns: 1fr;
        grid-template-areas: 'top-image' 'top-details' 'ad' 'top-actions';
      `,"group2")};
  `}
`,rU=$.default.div.withConfig({displayName:"Missouri.styles__MissouriBackgroundStyled",componentId:"sc-bffcf76-2"})`
  ${({$left:e,$imageLeft:t,$imgUrl:a,$maxHeight:i,theme:o,$width:n})=>$.css`
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
      left: ${t-rD.group6}px;

      ${rR.map(e=>(0,C.applyStylesForBreakpoints)($.css`
            left: ${t-rD[e]}px;
          `,e))}
    }

    ${(0,C.applyStylesForBreakpoints)($.css`
        max-height: ${i}px;
      `,"group3")}

    ${(0,C.applyStylesForBreakpoints)($.css`
        overflow: hidden;

        &::after {
          width: 100%;
          top: -266px;
          height: 360px;
          left: 0;
        }
      `,"group2")};
  `}
`,rH=$.default.div.withConfig({displayName:"Missouri.styles__MissouriStickyAreaStyled",componentId:"sc-bffcf76-3"})`
  grid-area: sticky-area;
  display: grid;
  row-gap: 12px;

  ${(0,C.applyStylesForBreakpoints)($.css`
      display: none;
    `,"group2")};
`,rW=$.default.div.withConfig({displayName:"Missouri.styles__MissouriScheduleImageContainerStyled",componentId:"sc-bffcf76-4"})`
  z-index: 2;

  img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
    margin-top: 24px;
    border-radius: 50%;

    ${(0,C.applyStylesForBreakpoints)($.css`
        margin-top: 40px;
      `,"group3")};

    ${(0,C.applyStylesForBreakpoints)($.css`
        width: 190px;
      `,"group2")};
  }
`,rz=$.default.div.withConfig({displayName:"Missouri.styles__MissouriTopDetailsStyled",componentId:"sc-bffcf76-5"})`
  ${({theme:e})=>$.css`
    max-width: 563px;
    height: fit-content;

    ${(0,C.applyStylesForBreakpoints)($.css`
        max-width: unset;
      `,"group3")};

    ${(0,C.applyStylesForBreakpoints)($.css`
        background-color: ${e.container.onInverseBG2.value};
        padding: 0 12px;
        display: block;
      `,"group2")};
  `}
`,rY=$.default.div.withConfig({displayName:"Missouri.styles__MissouriTopWrapperStyled",componentId:"sc-bffcf76-6"})`
  position: relative;
  background-color: ${({theme:e})=>e.container.onInverseBG2.value};
  box-sizing: border-box;
  height: auto;
  padding: 24px 0 48px 0;

  ${(0,C.applyStylesForBreakpoints)($.css`
      height: 100%;
      padding-bottom: 64px;
    `,"group2")};
`,rq=$.default.div.withConfig({displayName:"Missouri.styles__MissouriTopImageContainerStyled",componentId:"sc-bffcf76-7"})`
  display: none;

  > div {
    display: flex;
    justify-content: center;
  }

  img {
    border-radius: 50%;
  }

  ${(0,C.applyStylesForBreakpoints)($.css`
      padding-top: 16px;
      position: unset;
      justify-self: center;
    `,"group4")};

  ${(0,C.applyStylesForBreakpoints)($.css`
      display: block;
      position: relative;
      top: 0;
      padding-bottom: 16px;

      ${(0,oU.applyZIndex)("level2")};

      img {
        width: 190px;
      }
    `,"group2")};
`,rV=$.default.div.withConfig({displayName:"Missouri.styles__MissouriDetailsAreaStyled",componentId:"sc-bffcf76-8"})`
  grid-area: details;
  max-width: 563px;

  ${(0,C.applyStylesForBreakpoints)($.css`
      max-width: unset;
    `,"group3")};
`,rQ=$.default.div.withConfig({displayName:"Missouri.styles__MissouriBackToTopStyled",componentId:"sc-bffcf76-9"})`
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

  ${(0,C.applyStylesForBreakpoints)($.css`
      margin-top: 24px;
      max-width: unset;
    `,"group3")};

  ${(0,C.applyStylesForBreakpoints)($.css`
      margin-top: 16px;
      height: 44px;
    `,"group2")};
`,rX=$.default.div.withConfig({displayName:"Missouri.styles__PlayButtonAnchorWrapperStyled",componentId:"sc-bffcf76-10"})`
  margin: auto;
  display: block;
  position: relative;

  :link,
  :visited,
  :hover,
  :active {
    color: inherit;
  }

  ${(0,C.applyStylesForBreakpoints)($.css`
      grid-area: top-action;
    `,"group3")};
`,rK=$.default.a.withConfig({displayName:"Missouri.styles__PlayButtonWrapperStyled",componentId:"sc-bffcf76-11"})`
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
`,rZ=$.default.div.withConfig({displayName:"Missouri.styles__TopStyled",componentId:"sc-bffcf76-12"})`
  margin: auto;
  background-color: ${({theme:e})=>e.container.onInverseBG2.value};

  ${(0,C.applyStylesForBreakpoints)($.css``,"group4")};

  ${(0,C.applyStylesForBreakpoints)($.css`
      padding: 0;
      display: flex;
      flex-direction: row;
      column-gap: 24px;
    `,"group3")};

  ${(0,C.applyStylesForBreakpoints)($.css`
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: visible;
    `,"group2")};
`,rJ=$.default.div.withConfig({displayName:"Missouri.styles__TextsWrapperStyled",componentId:"sc-bffcf76-13"})`
  ${()=>$.css`
    align-self: baseline;
    width: 100%;
    z-index: 2;
    position: relative;

    ${(0,C.applyStylesForBreakpoints)($.css``,"group4")};

    ${(0,C.applyStylesForBreakpoints)($.css`
        margin-left: unset;
        width: 100%;
      `,"group3")};

    ${(0,C.applyStylesForBreakpoints)($.css`
        margin-left: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        z-index: 3;
      `,"group2")};
  `};
`,r0=$.default.div.withConfig({displayName:"Missouri.styles__BackgroundImageWrapperStyled",componentId:"sc-bffcf76-14"})`
  display: none;
  height: 100%;
  position: absolute;
  width: 100vw;
  left: -100%;
  top: 0;
  z-index: -1;

  ${(0,C.applyStylesForBreakpoints)($.css`
      display: none;
    `,"group3")};
`,r1=$.default.h2.withConfig({displayName:"Missouri.styles__StationNameStyled",componentId:"sc-bffcf76-15"})`
  ${({theme:e})=>$.css`
    color: ${e.text.onInverseBG.mediumEmphasis.value};
    text-align: left;
    margin-bottom: 16px;
    ${(0,k.applyTypography)(e.audio.brandTitle.large.bpLarge)};

    ${(0,C.applyStylesForBreakpoints)($.css`
        text-align: left;
        margin-bottom: 8px;
        ${(0,k.applyTypography)(e.audio.brandTitle.large.bpSmall)};
      `,"group2")};
  `};
`,r2=$.default.p.withConfig({displayName:"Missouri.styles__DescriptionStyled",componentId:"sc-bffcf76-16"})`
  ${({theme:e})=>$.css`
    text-align: left;
    color: ${e.text.onInverseBG.default.value};

    ${(0,k.applyTypography)(e.bodyCopy.default.bpLarge)};

    ${(0,C.applyStylesForBreakpoints)($.css`
        text-align: left;
        ${(0,k.applyTypography)(e.bodyCopy.default.bpSmall)};
      `,"group2")};
  `};
`,r4=(0,t.forwardRef)(({title:e,description:t,stationLink:i},o)=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(rY,{"data-testid":"radio-schedule-top-wrapper-styled",children:(0,a.jsxs)(rZ,{children:[(0,a.jsx)(r0,{}),(0,a.jsxs)(rJ,{children:[(0,a.jsx)(r1,{"data-testid":"station-name-styled",children:e}),(0,a.jsx)(r2,{"data-testid":"description-styled",children:t})]})]})}),(0,a.jsx)(b.default,{href:i,styledAnchorInner:rX,styledAnchor:rK,children:(0,a.jsx)(ec.default,{ref:o,type:"round",icon:"playback-avkx:play",size:"large",iconPosition:"bottom",isInverse:!1})})]}));function r6(){let e=(0,t.useRef)(null),a=(0,t.useRef)(null),i=(0,t.useRef)(null),o=(0,t.useRef)(null),n=(0,t.useRef)(null),[r,l]=(0,t.useState)(0),[s,d]=(0,t.useState)(0),[p,c]=(0,t.useState)(0),[u,g]=(0,t.useState)(0),[m,y]=(0,t.useState)("unset");(0,eg.useResizeObserver)(e,e=>{let[{target:t}]=e,{offsetTop:a}=t;p!==a&&c(a)},100),(0,eg.useResizeObserver)(a,e=>{let[{target:t}]=e,{left:a}=t.getBoundingClientRect();r!==a&&l(a)},100),(0,eg.useResizeObserver)(o,e=>{let[{target:t}]=e,{left:a}=t.getBoundingClientRect();u!==a&&g(a)},100),(0,eg.useResizeObserver)(i,e=>{let[{target:t}]=e,{height:a}=t.getBoundingClientRect();s!==a&&d(a)},100);let f=(0,eG.default)(()=>{y(`${document.documentElement.clientWidth}px`)},100,{leading:!0});return(0,t.useEffect)(()=>(y(`${document.documentElement.clientWidth}px`),window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f)}),[]),{contentAreaLeft:r,backgroundMaxHeight:s,imageAreaTop:p,imageAreaLeft:u,mainRef:e,topRef:a,imageContainerRef:o,topDetailsRef:i,playButtonRef:n,backgroundWidth:m}}let r3=(0,tD.withCMSFallback)(({content:e,testId:t="missouri"})=>{let i=(0,rF.useNestedSections)(),{contentAreaLeft:o,backgroundMaxHeight:n,imageAreaLeft:r,mainRef:l,topRef:s,imageContainerRef:d,topDetailsRef:p,playButtonRef:c,backgroundWidth:u}=r6(),[g]=e,{image:m,stationLink:y=""}=g,f=m?.model?.blocks?.src;return(0,a.jsxs)(rO,{ref:l,"data-testid":`${t}-grid`,children:[(0,a.jsx)(rH,{children:(0,a.jsx)(rW,{ref:d,children:m&&(0,a.jsx)(rt.default,{...m})})}),(0,a.jsxs)(rG,{ref:s,children:[(0,a.jsx)(rU,{$left:o,$maxHeight:n,$imageLeft:r,$imgUrl:f,$width:u}),(0,a.jsxs)(rz,{ref:p,children:[(0,a.jsx)(rq,{children:m&&(0,a.jsx)(rt.default,{...m})}),(0,a.jsx)(r4,{ref:c,...g})]})]}),(0,a.jsx)(rV,{children:(0,a.jsx)(n4,{value:y,children:i("alabama")})}),(0,a.jsx)(rQ,{"data-testid":rE,children:(0,a.jsx)(ec.default,{testId:rL,iconPosition:"right",onClick:()=>window.scrollTo(0,0),text:"Back to top",type:"ghost",icon:"arrows:to-top"})})]})},({content:e=[],testId:t="missouri"})=>{let i=(0,rF.useNestedSections)(),{contentAreaLeft:o,backgroundMaxHeight:n,imageAreaLeft:r,mainRef:l,topRef:s,imageContainerRef:d,topDetailsRef:p,playButtonRef:c,backgroundWidth:u}=r6(),[g]=e,{image:m}=g,y=m?.model?.blocks?.src;return(0,a.jsxs)(rO,{ref:l,"data-testid":`${t}-grid`,children:[(0,a.jsx)(rH,{children:(0,a.jsx)(rW,{ref:d,children:m&&(0,a.jsx)(rt.default,{...m})})}),(0,a.jsxs)(rG,{ref:s,children:[(0,a.jsx)(rU,{$left:o,$maxHeight:n,$imageLeft:r,$imgUrl:y,$width:u}),(0,a.jsxs)(rz,{ref:p,children:[(0,a.jsx)(r4,{ref:c,...g}),(0,a.jsx)(rq,{children:m&&(0,a.jsx)(rt.default,{...m})})]})]}),(0,a.jsx)(rV,{children:(0,a.jsx)(n4,{value:g.href,children:i("alabama")})}),(0,a.jsx)(rQ,{"data-testid":rE,children:(0,a.jsx)(ec.default,{testId:rL,iconPosition:"right",onClick:()=>window.scrollTo(0,0),text:"Back to top",type:"ghost",icon:"arrows:to-top"})})]})}),r8=$.default.div.withConfig({displayName:"NewHampshire.styles__NewHampshireStyled",componentId:"sc-aec2ac7f-0"})`
  ${({$isNested:e})=>$.css`
    max-width: 1248px;
    margin-inline: auto;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    column-gap: 16px;

    > * {
      display: flex;
    }

    ${(0,C.applyStylesForBreakpoints)($.css`
        max-width: unset;
        margin-inline: 16px;
      `,"group4")};

    ${(0,C.applyStylesForBreakpoints)($.css`
        grid-auto-flow: row;
        grid-auto-columns: unset;
        row-gap: 16px;
      `,"group3")};

    ${e&&$.css`
      grid-auto-flow: row;
      grid-auto-columns: unset;
      row-gap: 32px;
      margin-block: 32px;
      padding-block: 24px;
      border-top: 2px solid black;

      ${(0,C.applyStylesForBreakpoints)($.css`
          margin-block: unset;
          grid-auto-flow: column;
          grid-auto-columns: 1fr;
          border-bottom: 2px solid black;
        `,"group4")};

      ${(0,C.applyStylesForBreakpoints)($.css`
          row-gap: 32px;
          grid-auto-flow: row;
          grid-auto-columns: unset;
        `,"group3")};
    `};
  `}
`,r5=({children:e,isContained:t,isNested:i,testId:o})=>t?(0,a.jsxs)(v.GridStyled,{$columns:[1,1,"minmax(90px, auto) 1fr","minmax(90px, auto) 1fr","minmax(90px, auto) 1fr","minmax(90px, auto) 1fr"],$maxWidth:["722px","722px","722px","722px","722px","722px"],$gridGap:["32px","32px","16px","16px","16px","16px"],$margin:["auto","auto","auto","auto","auto","auto"],$padding:["0 16px 120px","0 16px 120px","0 16px 120px","0 16px 120px","0 16px 120px","0 16px 120px"],$alignItems:"start","data-testid":"audio-episode-details-wrapper",children:[(0,a.jsx)("div",{}),e]}):(0,a.jsx)(r8,{"data-testid":o,$isNested:i,children:e}),r7=(0,tD.withCMSFallback)(({testId:e="newhampshire",content:t,isNested:i=!1,isContained:o=!1})=>(0,a.jsx)(r5,{isContained:o,isNested:i,testId:e,children:t.slice(0,o?1:2).map((e,t)=>(0,a.jsx)(ag.default,{...e,type:"norwich"},t))}),({testId:e="newhampshire",content:t=[],isNested:i=!1,...o})=>(0,a.jsx)(r8,{"data-testid":e,$isNested:i,children:(0,a.jsx)(a.Fragment,{children:t.slice(0,2).map((e,t)=>(0,a.jsx)(ag.default,{...e,type:"norwich",...o},t))})})),r9="divider",le="station-button",lt=$.default.div.withConfig({displayName:"RhodeIsland.styles__StationSwitcherStyled",componentId:"sc-bca5d6f9-0"})`
  ${({theme:e})=>$.css`
    background-color: #ffffff;
    z-index: 100;
    position: relative;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;

    button:not(${li}) {
      padding: 6px 18px;
      outline: none;
      height: 48px;
      text-align: center;

      ${(0,k.applyTypography)(e.stationPicker.default.bpLarge)};

      img {
        border-radius: 50%;
        width: 18px;
        height: 18px;
      }
    }

    ${(0,C.applyStylesForBreakpoints)($.css`
        padding: 0;

        button:not(${li}) {
          outline: none;
          text-align: center;

          ${(0,k.applyTypography)(e.stationPicker.default.bpSmall)};

          img {
            width: 20px;
            height: 20px;
          }
        }
      `,"group2")};
  `}
`,la=$.default.div.withConfig({displayName:"RhodeIsland.styles__StationsStyled",componentId:"sc-bca5d6f9-1"})`
  ${({$isOverflow:e})=>$.css`
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

    ${e&&$.css`
      justify-content: flex-start;
    `}

    ${(0,C.applyStylesForBreakpoints)($.css`
        width: 100%;

        div {
          min-width: 50%;

          ${ri.ButtonBase} {
            width: 100%;
          }
        }
      `,"group2")};
  `}
`,li=$.default.button.withConfig({displayName:"RhodeIsland.styles__ChevronButtonStyled",componentId:"sc-bca5d6f9-2"})`
  ${({theme:e,disabled:t})=>$.css`
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

      ${!t&&$.css`
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
`,lo=$.default.span.withConfig({displayName:"RhodeIsland.styles__DividerStyled",componentId:"sc-bca5d6f9-3"})`
  margin: auto 0;
  background-color: #e6e8ea;
  display: block;
  width: 1px;
  height: 20px;
`,ln=$.default.div.withConfig({displayName:"RhodeIsland.styles__ButtonWithDividerStyled",componentId:"sc-bca5d6f9-4"})`
  display: flex;
  flex-direction: row;

  &:hover {
    background-color: #e6e8ea;
  }

  &:last-of-type ${lo} {
    display: none;
  }
`,lr=({activeStation:e,stations:i})=>{let o=(0,t.useRef)(null),n=(0,t.useRef)(null),r=(0,t.useRef)(null),{scrollStatus:l,onArrowClick:s}=(0,n6.useScrollSnap)(o),{isLeftScrollAvailable:d,isRightScrollAvailable:p}=l,[c,u]=(0,t.useState)(!1),{title:g}=e||{};return(0,eg.useResizeObserver)(o,eu(u,c,0)),(0,t.useEffect)(()=>{c&&n.current&&o.current&&r.current&&o.current.scrollBy({top:0,left:n.current.getBoundingClientRect().left-r.current.clientWidth})},[c]),(0,a.jsxs)(lt,{"data-testid":"station-switcher",children:[c&&(0,a.jsx)(li,{ref:r,"data-testid":"left-chevron",disabled:!d,onClick:()=>s("left"),"aria-label":"Previous Page",children:(0,a.jsx)(w.default,{name:"arrows:chevron-left"})}),(0,a.jsx)(la,{ref:o,$isOverflow:c,children:i.map(({href:e,...t},i)=>(0,a.jsx)(b.default,{href:e,children:(0,a.jsxs)(ln,{children:[(0,a.jsx)(ec.default,{ref:t.title===g?n:null,testId:le,isInverse:t.title!==g,text:t.title,img:t?.image?.model?.blocks?.src,iconPosition:"left"}),(0,a.jsx)(lo,{"data-testid":r9})]})},i))}),c&&(0,a.jsx)(li,{"data-testid":"right-chevron",disabled:!p,onClick:()=>s("right"),"aria-label":"Next Page",children:(0,a.jsx)(w.default,{name:"arrows:chevron-right"})})]})},ll={alabama:n9,louisiana:rg,minnesota:rP,missouri:r3,newhampshire:r7,rhodeisland:(0,tD.withCMSFallback)(({content:e})=>{let{query:t}=(0,d.useAppRouter)(),{slug:i}=t,o=(0,nu.getStringFromSlug)(i),n=e.find(({href:e})=>e.includes(o)||o.includes(e));return(0,a.jsx)(lr,{stations:e,activeStation:n})},e=>{let{content:t=[],editPopover:i}=e;return(0,a.jsx)(lt,{children:(0,a.jsx)(la,{$isOverflow:!1,children:t.map((e,t)=>(0,a.jsx)(b.default,{href:e.href,children:(0,a.jsxs)(ln,{children:[(0,a.jsx)(ec.default,{isInverse:!0,testId:le,text:e.title,img:e?.image?.model?.blocks?.src,iconPosition:"left"}),i&&(0,a.jsx)(i,{...e}),(0,a.jsx)(lo,{"data-testid":r9})]})},t))})})})};var ls=e.i(506098),ls=ls;let ld=$.default.section.withConfig({displayName:"AudioSections.styles__AudioSectionStyled",componentId:"sc-3e85ebfc-0"})`
  ${({theme:e,$withMargin:t})=>$.css`
    ${t&&$.css`
      margin-block: 48px;
    `}

    background-color: ${e.container.onDefaultBG4.value};
  `};
`,lp=(0,t.memo)(e=>{let{type:i,sectionNumber:n,isNested:r=!1,isContained:l=!1}=e,s=(0,t.useContext)(nD)[i],d=function(e){let{type:t}=e;switch(t){case"missouri":case"rhodeisland":case"newhampshire":var a=e;try{let{model:e}=a,{blocks:t}=e;return t.map(e=>{let{link:t,title:a,summary:i,indexImage:o,stationLink:n}=e;return{title:a,description:i,image:o,href:t,stationLink:n??"",metadata:{contentType:"radio"}}})}catch(e){return e$.logger.error(`Error getting stations data: ${e}`),[]}case"louisiana":case"minnesota":case"alabama":return function(e){try{let{model:t,type:a}=e,{blocks:i}=t,[{model:o,summary:n,title:r,indexImage:l,link:s,serviceId:d,stationLink:p}]=i,{blocks:c}=o,u=nA({type:a,model:{blocks:c}});return[{title:r,description:n,image:l,href:s,serviceId:d??"",stationLink:p??"",metadata:{contentType:"radio"}},...u]}catch(e){return e$.logger.error(`Error getting Louisiana data: ${e}`),[]}}(e)}}(e),p=`${i}-section-outer`,c=function(e,t){switch(e){case"alabama":case"minnesota":try{let{model:e}=t,{blocks:a}=e,[{model:i,serviceId:o}]=a,{blocks:n}=i;return n.reduce((e,t)=>{let a=new Date(t.startTime??""),i=!isNaN(a.getTime()),n=a.toISOString().slice(0,10),r=`${n}/${o}`;return i?{...e,[r]:[...e[r]??[],t]}:e},{})}catch(e){return e$.logger.error(`Error getting fallback data: ${e}`),{}}default:return{}}}(i,e),u=!!s&&!!d.length,g=["louisiana","newhampshire","louisiana"].includes(i),{dataset:m}=(0,a8.useAnalyticsGroupProperties)({content:d,type:i,sectionNumber:n});return u?(0,a.jsx)(o.SWRConfig,{value:{fallback:c},children:(0,a.jsx)(ld,{$withMargin:g,...m,"data-testid":p,children:(0,a.jsx)(s,{type:i,content:d,isNested:r,isContained:l})})}):null}),lc=$.default.div.withConfig({displayName:"CMSCustomComponent.styles__SubscriptionUnavailableWrapperStyled",componentId:"sc-ba76715a-0"})`
  text-align: center;
`,lu=$.default.p.withConfig({displayName:"CMSCustomComponent.styles__SubscriptionUnavailableMessageStyled",componentId:"sc-ba76715a-1"})`
  ${({theme:e})=>$.css`
    color: ${e.text.default.value};
    ${(0,k.applyTypography)(e.bodyCopy.default.bpSmall)};
  `}
`,lg=$.default.div.withConfig({displayName:"CMSCustomComponent.styles__CMSCustomComponentContainer",componentId:"sc-ba76715a-2"})`
  overflow: hidden;
`,lm=({id:e})=>{let{isSubscriptionAllowed:i}=(0,x.useSubscriptionContext)(),[o]=(0,te.useCurrentSlug)(),[n,r]=(0,t.useState)(!1);return((0,t.useEffect)(()=>{r(!0)},[]),n)?"subscribe"!==o||i?(0,a.jsx)(lg,{id:e}):(0,a.jsx)(lc,{children:(0,a.jsx)(lu,{children:"Subscription is not available at this time. Please try again later."})}):(0,a.jsx)("div",{id:e})};var ly=e.i(270340),lf=e.i(94930),lh=e.i(497030),lx=e.i(280108),lb=e.i(317166),lS=e.i(852827),lv=e.i(993297);let lw={credentials:"include",isLegacyApiEnabled:!0};async function lj(e,t="audio",a){let o="heartbeat"!==e,n={cache:"no-cache",method:"GET",params:{metadata:"true",..."bookmark"===e?{subtype:i.ContentSubtype.Episode,type:t}:{type:t},...a?{country:a}:{}},...lw};try{if(o){let{data:t}=await (0,ic.fetchClient)(e,n),{data:a}=t;switch(e){case"bookmark":return a.map(lv.transformContent);case"follow":return a.map(({episode:e,premiumEpisode:t,id:a,path:i,title:o,summary:n,topics:r})=>({...e,brand:{id:a,path:i,title:o},premiumEpisode:t,summary:n,topics:r})).map(e=>(0,lv.transformContent)(e))}}else{let{data:t}=await (0,ic.fetchClient)(e,n);return t.map(lv.transformContent)}}catch(e){return e$.logger.error("Error fetching client-side collection",e),[]}}let l$=function(e,i){let{isSignedIn:n}=(0,lb.useUser)(),l=(0,u.useFeatureFlag)("authentication"),s=(0,u.useFeatureFlag)("follow-brand-function"),{country:d}=(0,tt.usePageData)(),p=d??"xx",c=("iowa"===e||"michigan"===e)&&"heartbeat"===i,g=(0,m.useCanPlayEpisode)(),y=(0,t.useCallback)(async()=>{if("follow"===i&&!s||!n||!i)return[];{let t=await lj(i,"michigan"===e?"lf-video":"audio",p);if(c){let e=(0,lf.getIdsFromContent)(t),a=await (0,lS.getMediaProgress)({isFetchAllowed:!0,ids:e});return t.reduce((e,{id:t,metadata:i,...o})=>{let n=(0,lh.getMediaOffsetFromProgress)(a,t),{duration:r=1}=i;return n/r>=V.LATE_PROGRESS/100?e:[...e,{id:t,metadata:{...i,progress:n},...o}]},[])}return t}},[c,i,s,n,l]),{data:f=[],isLoading:h}=(0,o.default)(n?i:null,y,{use:[lx.tokenRefreshMiddleware]}),x=(0,t.useMemo)(()=>"follow"!==i?f:f.map(e=>(0,r.resolveFollowPremiumEpisode)(e,g)),[f,i,g]);return{emptyContentComponent:(0,t.useMemo)(()=>h?(0,a.jsx)(nN.default,{}):null,[h]),content:x}},lC=$.default.div.withConfig({displayName:"Arkansas.styles__ArkansasContainerStyled",componentId:"sc-cdcba703-0"})`
  display: grid;
  margin-inline: -16px;

  ${(0,C.applyStylesForBreakpoints)($.css`
      margin-inline: -16px;
    `,"group2")};
`,lk=({content:e=[],testId:t="arkansas",title:i,sectionTitleProps:o,dataset:n})=>{let r=(0,to.useDarkMode)(),[l]=e,s=o?.link;return l?(0,a.jsxs)(a.Fragment,{children:[!!i&&(0,a.jsx)(i7.default,{isFullWidth:!0,isInverse:r,title:i,variant:"default",href:s}),(0,a.jsx)(lC,{"data-testid":`${t}`,...n,children:(0,a.jsx)(ag.default,{type:"ashford",...l})})]}):null},lI=(0,a3.forwardLayout)(e=>(0,a.jsx)(a7.default,{marginTop:48,marginBottom:48,group2:{marginTop:32,marginBottom:32},children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:1,colSpan:24,group2:{colStart:1,colSpan:12},children:(0,a.jsx)(lk,{...e})})})}));var l_=e.i(730943);let lT=$.default.div.withConfig({displayName:"Maryland.styles__MarylandStyled",componentId:"sc-eea63726-0"})`
  display: grid;
  width: 100%;
`,lB=$.default.div.withConfig({displayName:"Maryland.styles__MarylandContentStyled",componentId:"sc-eea63726-1"})`
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
`,lN=$.default.div.withConfig({displayName:"Maryland.styles__MarylandChevronsContainerStyled",componentId:"sc-eea63726-2"})`
  padding-block: 8px 0;

  ${(0,C.applyStylesForBreakpoints)($.css`
      padding-block: 0;
    `,"group2")};
`,lA=({content:e=[],testId:i="maryland",title:o,sectionTitleProps:n,dataset:r})=>{let l=(0,t.useRef)(null),s=(0,t.useRef)(null),d=n?.link,{isLeftScrollAvailable:p,isRightScrollAvailable:c,isControlRefMounted:u,handleArrowClick:g}=l7(l,s);return(0,a.jsxs)(lT,{"data-testid":`${i}-grid`,children:[(0,a.jsx)(i7.default,{isInverse:!0,isFullWidth:!0,hasControlButtons:!0,title:o,href:d,controlButtonsPortalRef:s,variant:"default"}),u&&s.current&&(0,a.jsx)(a.Fragment,{children:(0,l_.createPortal)((0,a.jsx)(lN,{children:(0,a.jsx)(ra.default,{isInverse:!0,isSponsored:!1,variant:"maryland",handleArrowClick:g,isLeftArrowDisabled:!p,isRightArrowDisabled:!c})}),s.current)}),(0,a.jsx)(lB,{ref:l,...r,children:e.map((e,t)=>(0,a.jsx)(ag.default,{...e,type:"maidstone",isRenderedInCarousel:!0,itemPosition:t},t))})]})},lP=(0,a3.forwardLayout)(e=>(0,a.jsx)(a7.default,{isInverse:!0,marginTop:48,marginBottom:48,group2:{marginTop:32,marginBottom:32},children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:1,colSpan:24,group2:{colStart:1,colSpan:12},children:(0,a.jsx)(lA,{...e})})})})),lF=$.default.div.withConfig({displayName:"Michigan.styles__MichiganStyled",componentId:"sc-8943917d-0"})`
  display: grid;
  width: 100%;
`,lE=$.default.div.withConfig({displayName:"Michigan.styles__MichiganContentStyled",componentId:"sc-8943917d-1"})`
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
`,lL=$.default.div.withConfig({displayName:"Michigan.styles__MichiganChevronsContainerStyled",componentId:"sc-8943917d-2"})`
  padding-block: 8px 0;

  ${(0,C.applyStylesForBreakpoints)($.css`
      padding-block: 0;
    `,"group2")};
`,lD=t.useLayoutEffect,lM=({content:e=[],testId:i="michigan",title:o,sectionTitleProps:n,dataset:r})=>{let l=(0,t.useRef)(null),s=(0,t.useRef)(null),d=n?.link,p=(0,q.useMediaProgress)((0,lf.getIdsFromContent)(e));lD(()=>{let e,t=l.current;if(!t)return;let a=()=>{t.scrollTo({left:0,behavior:"auto"})};a();let i=window.requestAnimationFrame(()=>{a()}),o=window.requestAnimationFrame(()=>{e=window.requestAnimationFrame(a)});return()=>{window.cancelAnimationFrame(i),window.cancelAnimationFrame(o),void 0!==e&&window.cancelAnimationFrame(e)}},[e.map((e,t)=>e.id||t).join("|")]);let{isLeftScrollAvailable:c,isRightScrollAvailable:u,isControlRefMounted:g,handleArrowClick:m}=l7(l,s);return(0,a.jsxs)(lF,{"data-testid":`${i}-grid`,children:[(0,a.jsx)(i7.default,{isInverse:!0,isFullWidth:!0,hasControlButtons:!0,title:o,href:d,controlButtonsPortalRef:s,variant:"default"}),g&&s.current&&(0,a.jsx)(a.Fragment,{children:(0,l_.createPortal)((0,a.jsx)(lL,{children:(0,a.jsx)(ra.default,{isInverse:!0,isSponsored:!1,variant:"michigan",handleArrowClick:m,isLeftArrowDisabled:!c,isRightArrowDisabled:!u})}),s.current)}),(0,a.jsx)(lE,{ref:l,...r,children:e.map((e,t)=>{let{id:i,metadata:o,...n}=e,r=(0,lh.extendMetadata)(o,p,i);return(0,a.jsx)(ag.default,{id:i,type:"milton",metadata:r,...n,itemPosition:t},t)})})]})},lR=(0,a3.forwardLayout)(e=>(0,a.jsx)(a7.default,{isInverse:!0,marginTop:48,marginBottom:48,group2:{marginTop:32,marginBottom:32},children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:1,colSpan:24,group2:{colStart:1,colSpan:12},children:(0,a.jsx)(lM,{...e})})})})),lO=$.default.div.withConfig({displayName:"NewMexico.styles__NewMexicoStyled",componentId:"sc-500dd416-0"})`
  display: grid;
`,lG=$.default.div.withConfig({displayName:"NewMexico.styles__NewMexicoContentStyled",componentId:"sc-500dd416-1"})`
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
`,lU=$.default.div.withConfig({displayName:"NewMexico.styles__NewMexicoChevronsContainerStyled",componentId:"sc-500dd416-2"})`
  padding-block: 8px 0;

  ${(0,C.applyStylesForBreakpoints)($.css`
      padding-block: 0;
    `,"group2")};
`,lH=e=>{let{content:i=[],testId:o="newmexico",title:n,sectionTitleProps:r,dataset:l}=e,s=r?.link,d=(0,t.useRef)(null),p=(0,t.useRef)(null),{isLeftScrollAvailable:c,isRightScrollAvailable:u,isControlRefMounted:g,handleArrowClick:m}=l7(d,p);return(0,a.jsxs)(lO,{"data-testid":`${o}-grid`,children:[(0,a.jsx)(i7.default,{isInverse:!0,isFullWidth:!0,hasControlButtons:!0,title:n,href:s,controlButtonsPortalRef:p,variant:"default"}),g&&p.current&&(0,a.jsx)(a.Fragment,{children:(0,l_.createPortal)((0,a.jsx)(lU,{children:(0,a.jsx)(ra.default,{isInverse:!0,isSponsored:!1,variant:"newmexico",handleArrowClick:m,isLeftArrowDisabled:!c,isRightArrowDisabled:!u})}),p.current)}),(0,a.jsx)(lG,{ref:d,...l,children:i.map((e,a)=>(0,t.createElement)(ag.default,{...e,isInverse:!0,isRenderedInCarousel:!0,type:"worcester",key:a,itemPosition:a}))})]})},lW=(0,a3.forwardLayout)(e=>(0,a.jsx)(a7.default,{isInverse:!0,marginTop:48,marginBottom:48,group2:{marginTop:32,marginBottom:32},children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:1,colSpan:24,group2:{colStart:1,colSpan:12},children:(0,a.jsx)(lH,{...e})})})}));var lz=e.i(458810),lY=e.i(521670);let lq=$.default.div.withConfig({displayName:"MaidstoneCardSkeleton.styles__MaidstoneSkeletonMediaStyled",componentId:"sc-f0ea8e72-0"})`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
`,lV=$.default.div.withConfig({displayName:"MaidstoneCardSkeleton.styles__MaidstoneSkeletonTextStyled",componentId:"sc-f0ea8e72-1"})`
  ${({$isContentRevealing:e,theme:t})=>$.css`
    visibility: ${e?"hidden":"visible"};
    display: grid;
    row-gap: 6px;
    align-content: start;

    /* Apply the title typography so the bar's 1lh height matches a real title
       line. We don't reserve a fixed clamp height here — the real maidstone
       title isn't clamped, so its height varies per card. */
    ${(0,k.applyTypography)(t.promoHeadline.xSmall.default.bpLarge)};

    ${(0,C.applyStylesForBreakpoints)($.css`
        ${(0,k.applyTypography)(t.promoHeadline.xSmall.default.bpSmall)};
      `,"group2")}
  `}
`,lQ=({isInverse:e=!1,isContentRevealing:t=!1})=>(0,a.jsxs)(lY.SkeletonCardStyled,{"aria-hidden":"true",children:[(0,a.jsx)(lq,{children:(0,a.jsx)(lY.SkeletonBlockStyled,{$height:"100%",$isInverse:e})}),(0,a.jsx)(lV,{$isContentRevealing:t,children:(0,a.jsx)(lY.SkeletonBlockStyled,{$height:"calc(1lh - 6px)",$width:"70%",$isInverse:e})})]}),lX=$.default.div.withConfig({displayName:"WrexhamCardSkeleton.styles__WrexhamSkeletonStyled",componentId:"sc-b8adac42-0"})`
  ${({$isInverse:e,theme:t})=>$.css`
    display: grid;
    grid-template-columns: 300px minmax(0, 1fr);
    column-gap: 24px; /* stylelint-disable-line plugin/no-unsupported-browser-features */
    row-gap: 12px;
    align-items: start;
    padding-bottom: 24px;
    border-bottom: 1px solid
      ${e?t.divider.onInverseBG.lowEmphasis.value:t.divider.lowEmphasis.value};

    ${(0,C.applyStylesForBreakpoints)($.css`
        grid-template-columns: 160px minmax(0, 1fr);
        column-gap: 8px; /* stylelint-disable-line plugin/no-unsupported-browser-features */
        row-gap: 16px;
        padding-bottom: 12px;
      `,"group2")};
  `};
`,lK=$.default.div.withConfig({displayName:"WrexhamCardSkeleton.styles__WrexhamSkeletonMediaStyled",componentId:"sc-b8adac42-1"})`
  grid-row: 1 / -1;
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
`,lZ=$.default.div.withConfig({displayName:"WrexhamCardSkeleton.styles__WrexhamSkeletonTextStyled",componentId:"sc-b8adac42-2"})`
  ${({$isContentRevealing:e})=>$.css`
    visibility: ${e?"hidden":"visible"};
    display: grid;
    row-gap: 8px;
    align-content: start;
  `}
`,lJ=$.default.div.withConfig({displayName:"WrexhamCardSkeleton.styles__WrexhamSkeletonStatusStyled",componentId:"sc-b8adac42-3"})`
  height: 24px;
`,l0=({isInverse:e=!1,isContentRevealing:t=!1})=>(0,a.jsx)(lY.SkeletonCardStyled,{"aria-hidden":"true",children:(0,a.jsxs)(lX,{$isInverse:e,children:[(0,a.jsx)(lK,{children:(0,a.jsx)(lY.SkeletonBlockStyled,{$height:"100%",$isInverse:e})}),(0,a.jsxs)(lZ,{$isContentRevealing:t,children:[(0,a.jsx)(lY.SkeletonBlockStyled,{$height:"20px",$width:"80%",$isInverse:e}),(0,a.jsx)(lY.SkeletonBlockStyled,{$height:"20px",$width:"55%",$isInverse:e}),(0,a.jsx)(lJ,{children:(0,a.jsx)(lY.SkeletonBlockStyled,{$height:"100%",$width:"40%",$isInverse:e})})]})]})});var l1=e.i(440695);let l2=$.default.ol.withConfig({displayName:"VirginIslands.styles__VirginIslandsGridStyled",componentId:"sc-5b5902fd-0"})`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  max-width: 1248px;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  ${(0,C.applyStylesForBreakpoints)($.css`
      grid-template-columns: repeat(3, 1fr);
    `,"group4")}

  ${(0,C.applyStylesForBreakpoints)($.css`
      grid-template-columns: repeat(2, 1fr);
    `,"group3")}

  ${(0,C.applyStylesForBreakpoints)($.css`
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
    `,"group2")}
`,l4=$.default.div.withConfig({displayName:"VirginIslands.styles__VirginIslandsPaginationWrapperStyled",componentId:"sc-5b5902fd-1"})`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  margin-bottom: 48px;
`,l6=(0,tD.withCMSFallback)(({content:e=[],testId:i="VirginIslands",paginationData:o={},collectionId:n,title:r,isInverse:l=!0,sectionTitleProps:s,dataset:d})=>{let p=s?.link,c=(0,t.useRef)(null),g=(0,u.useFeatureFlag)("infinite-scroll-virgin-islands"),m=(0,u.useFeatureFlag)("legacy-api"),[y]=(0,eH.useBreakpoints)("VirginIslands"),f=["group1","group2"].includes(y),{total:h,pageSize:x}=o,b=Math.min(e.length,x,12),{results:v,isLoading:w,currentPage:j,handlePageChange:$}=(0,lz.useCollectionPagination)(`content-collection/${n}`,{isLegacyApiEnabled:m},{pageSize:b,collectionRef:c});if(!g){let o=(v||e).slice(0,b),n=Math.ceil(h/b)>1;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i7.default,{isInverse:l,isFullWidth:!0,hasControlButtons:!0,title:r,variant:"default",href:p}),w?(0,a.jsx)(nN.default,{isInverse:l}):(0,a.jsx)(l2,{ref:c,"data-testid":`${i}-grid`,...d,children:o.map((e,a)=>(0,t.createElement)(ag.default,{...e,type:f?"wrexham":"maidstone",isInverse:l,key:a,itemPosition:a}))}),n&&(0,a.jsx)(l4,{"data-testid":`${i}-pagination`,children:(0,a.jsx)(S.Pagination,{currentPage:j+1,onPageChange:e=>$(e-1),itemsTotalCount:h||0,itemsPerPage:b,pageRangeDisplayed:6,isInverse:l})})]})}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i7.default,{isInverse:l,isFullWidth:!0,hasControlButtons:!0,title:r,variant:"default",href:p}),(0,a.jsx)(l1.default,{collectionId:n,content:e,paginationData:o,grid:l2,renderItem:(e,t)=>(0,a.jsx)(ag.default,{...e,type:f?"wrexham":"maidstone",isInverse:l,itemPosition:t}),renderSkeleton:({isContentRevealing:e})=>f?(0,a.jsx)(l0,{isInverse:l,isContentRevealing:e}):(0,a.jsx)(lQ,{isInverse:l,isContentRevealing:e}),isInverse:l,testId:i,dataset:d})]})}),l3=(0,a3.forwardLayout)(e=>(0,a.jsx)(a7.default,{isInverse:!0,marginTop:48,marginBottom:48,group2:{marginTop:32,marginBottom:32},children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:1,colSpan:24,group2:{colStart:1,colSpan:12},children:(0,a.jsx)(l6,{...e})})})})),l8=(0,t.createContext)({arkansas:lI,maryland:lP,michigan:lR,newmexico:lW,virginislands:l3}),{Provider:l5}=l8;function l7(e,a){let[i,o]=(0,t.useState)(!1),{scrollStatus:n,onArrowClick:r}=(0,n6.useScrollSnap)(e),{isLeftScrollAvailable:l,isRightScrollAvailable:s}=n;return(0,t.useEffect)(()=>{o(!!a.current)},[a]),{isControlRefMounted:i,isLeftScrollAvailable:l,isRightScrollAvailable:s,handleArrowClick:e=>r(e)}}let l9=e=>{let{type:i,content:o=[],sectionTitleProps:n,fetchKey:r}=e,{emptyContentComponent:l,content:s}=l$(i,r),d=s.length?s:o,p=(0,t.useContext)(l8)[i],c=!!p&&!!d.length,{dataset:u}=(0,a8.useAnalyticsGroupProperties)({...e,link:n?.link});!function(e,t){let{type:a,content:i=[],sectionNumber:o}=e,{setEagerImages:n}=(0,ly.useEagerImages)();if(o&&o<3&&t){let e=("arkansas"===a?i[0]?.images?.map(e=>e.model?.blocks?.src).filter(e=>void 0!==e):i?.map(e=>e?.image?.model?.blocks?.src).filter(e=>void 0!==e))||[];n(["newmexico","arkansas"].includes(a)?e.map(e=>e.replace("{recipe}","480xn")):e.map(e=>e.replace("{recipe}","480x270")))}}(e,c);let g={...e,content:d};return c?(0,a.jsx)(p,{layout:"single-column",...g,dataset:u}):null},se=(0,t.createContext)({}),{Provider:st}=se,sa=({children:e,value:t})=>(0,a.jsx)(st,{value:t,children:e}),si=[],so=({journey:e})=>{let i=(0,t.useContext)(se),[o,n,r]=(0,ej.default)(i[e],si);return o?(0,a.jsx)(o,{onSubmit:n,onError:r}):null};var sn=e.i(705832);let sr=({section:e,sectionNumber:t,worldNewsTvPath:i,worldNewsData:o=[],worldNewsServiceId:r="",isLivePage:l=!1,isNested:s=!1,isRadioPlayPage:d=!1})=>{let p=(0,te.useCurrentSlug)(),{type:c,incrementedType:u,model:g={}}=e;switch(c){case"wntv":return(0,a.jsx)(ss,{worldNews:o,serviceId:r});case"video-card":{let t=!!p&&"glastonbury-live"===p[p.length-1];return(0,a.jsx)(S.PlayableStandalone,{videoCard:e,isGlastonbury:t})}case"doncaster-card":return(0,a.jsx)(sn.SectionOuterStyled,{$isInverse:!0,"data-testid":"obituary-section-outer",children:(0,a.jsx)(sn.SectionStyled,{"data-testid":"obituary-section",children:(0,a.jsx)(S.Obituary,{data:e})})});case"electionbanner":return null;case"non-playable-card":if(!i)return null;return(0,a.jsx)(S.NonPlayableSection,{worldNewsTvPath:i,worldNews:o,isLivePage:l,itemPosition:t});case"advertisement":{let e=u?.startsWith("mid");return u?(0,a.jsx)(n.default,{type:u,showPlaceholder:e}):null}case"custom-component":{let{model:t}=e,{customComponentName:i}=t;return i?(0,a.jsx)(sn.SectionStyled,{children:(0,a.jsx)(v.GridStyled,{$margin:["16px","16px","16px","16px","16px","16px"],children:(0,a.jsx)(lm,{id:i})})}):null}case"webform":{let{model:{journey:t}}=e;return(0,a.jsx)(sn.SectionStyled,{children:(0,a.jsx)(v.GridStyled,{$margin:["16px","16px","16px","16px","16px","16px"],children:(0,a.jsx)(so,{journey:t})})})}case"headline":case"image":case"paragraph":case"unorderedList":case"accordion":return(0,a.jsx)(oB,{blocks:[{type:c,model:g}],layout:"single-column"});case"alabama":return s?(0,a.jsx)(lp,{sectionNumber:t,type:c,model:g,isNested:s}):null;case"louisiana":case"minnesota":case"missouri":case"rhodeisland":return(0,a.jsx)(lp,{sectionNumber:t,type:c,model:g});case"newhampshire":return l?null:(0,a.jsx)(lp,{sectionNumber:t,type:c,model:g,isNested:s,isContained:d});case"arkansas":case"maryland":case"newmexico":case"michigan":case"virginislands":return(0,a.jsx)(l9,{sectionNumber:t,...e});default:return(0,a.jsx)(sl,{sectionNumber:t,...e})}},sl=({sectionNumber:e,type:t,collectionId:i,content:o,innerCollections:n,title:r,summary:l,paginationData:s,adBlock:d,style:p,isSponsored:c,isAutoPlayDisabled:u,sectionTitleProps:g,playlistMode:m,fetchKey:y,cta:f})=>{let{emptyContentComponent:x,content:b}=l$(t,y),S=0===e,v="hawaii"===t,w="alaska"===t,j=b.length?b:o,$=a6.SECTIONS_WITH_LAYOUT.includes(t)?il:h.default,{setEagerImages:C}=(0,ly.useEagerImages)();return S&&C(j?.map(e=>e?.image?.model?.blocks?.src).filter(e=>void 0!==e)),(0,a.jsx)($,{layout:"single-column",sectionNumber:e,type:t,content:j,innerCollections:n,collectionId:i,paginationData:s,title:!S||v?r:"",summary:l,sectionTitleProps:g,hasHorizontalLine:!S||S&&w,adBlock:d,style:p,isSponsored:c,isAutoPlayDisabled:u,playlistMode:m,fetchKey:y,emptyContentComponent:x,cta:f})},ss=e=>(0,a.jsx)(sn.SectionStyled,{as:"section",$withPaddingBottom:!0,"data-testid":"pwntv-section",children:(0,a.jsx)(S.PlayableWorldNews,{...e})}),sd=$.default.article.withConfig({displayName:"IndexPage.styles__IndexPageArticleStyled",componentId:"sc-1de4b86e-0"})`
  ${({theme:e,$isDarkPage:t,$isHomePage:a})=>$.css`
    ${t&&$.css`
      background-color: ${e.container.onInverseBG2.value};
    `}

    // remove top margin for first section
    & > section:first-of-type {
      margin-top: 0;
    }

    // add margin for first section if no page title (select first section after ad unit)
    & > div:first-child + section {
      margin-top: 24px;

      ${a&&(0,C.applyStylesForBreakpoints)($.css`
          margin-top: 0;
        `,"group2")};
    }
  `}
`,sp=({title:e,sections:i,mainNavigation:o,worldNewsTvPath:r,worldNewsData:l,worldNewsServiceId:s="",hideBannerAdvert:d,isPreCurated:p})=>{let c=(0,te.useCurrentSlug)(),u=(0,tn.useIsAdsServiceEnabled)(),g=(0,to.useDarkMode)(),[m,y]=c,f=m===nu.BASE_SLUG,h="live"===m,x="audio"===m&&(i.some(({type:e})=>"minnesota"===e)||"stations"===y||"schedules"===y),b=y&&("categories"===y||"category"===y),{data:S}=l,v=!f&&!h&&"video"!==m&&!x,w=ig(i),j=(0,t.useCallback)((e,t=null)=>{let o=i.find(({type:t})=>t===e),n=i.findIndex(({type:t})=>t===e),l="newhampshire"!==e||h;return o?(0,a.jsx)(sr,{section:o,sectionNumber:n,worldNewsTvPath:r,worldNewsData:S,worldNewsServiceId:s,isLivePage:l,isNested:!0,...t?{...t}:{}},n):null},[i,r,S,s,h]),$=(0,t.useRef)(null),C=(0,t.useRef)(!1),k=(0,t.useRef)(!d&&v),[I,_]=(0,eH.useBreakpoints)("IndexPage");return(0,t.useEffect)(()=>{let e=u&&!d&&v;b&&(e=e&&"group1"!==I&&"group2"!==I),null!==u&&$.current&&(u&&_&&e&&!C.current&&$.current&&($.current.requestAd(),C.current=!0),u&&(!k.current||e)||$.current.closePlaceholder())},[I,u]),(0,a.jsx)(nR,{value:ll,children:(0,a.jsxs)(sd,{$isDarkPage:g,$isHomePage:f,children:[(0,a.jsx)(n.default,{type:"top",deferRequest:!0,forwardedAdRef:$,showPlaceholder:k.current}),(0,a.jsx)(t_,{isPreCurated:p,title:e,mainNavigation:o}),w&&(0,a.jsx)(ix,{data:w}),(0,a.jsx)(ls.default,{value:j,children:i.map((e,t)=>(0,a.jsx)(sr,{section:e,sectionNumber:t,worldNewsTvPath:r,worldNewsData:S,worldNewsServiceId:s,isLivePage:h,isRadioPlayPage:x},t))})]})})};var sc=e.i(474085),su=e.i(120012);let sg=$.css`
  min-width: fit-content;
  grid-template-rows: min-content minmax(0, 1fr);
  ${(0,C.applyStylesForBreakpoints)($.css`
      grid-template-rows: unset;
    `,"group4")};
`,sm=$.default.section.withConfig({displayName:"HeroSection.styles__HeroSectionTextContainerStyled",componentId:"sc-b72c52b4-0"})`
  ${({$isInverse:e,theme:t})=>$.css`
    color: ${e?t.text.onInverseBG.default.value:t.text.default.value};
    background-color: ${e?t.interactiveInnner.onDefaultBG.value:t.interactiveInnner.onInverseBG.value};
  `}
`,sy=$.default.div.withConfig({displayName:"HeroSection.styles__LeftContainerStyled",componentId:"sc-b72c52b4-1"})`
  display: grid;
  align-items: center;
  height: 100%;

  ${(0,C.applyStylesForBreakpoints)($.css`
      padding: 16px;
      height: auto;
    `,"group3")}
`,sf=$.default.h1.withConfig({displayName:"HeroSection.styles__HeadlineStyled",componentId:"sc-b72c52b4-2"})`
  ${({theme:e,$isInverse:t})=>$.css`
    ${(0,k.applyTypography)(e.promoHeadline.extraLargelight.default.bpLarge)};
    text-align: center;
    color: ${t?e.text.onInverseBG.default.value:e.text.default.value};

    ${(0,C.applyStylesForBreakpoints)($.css`
        ${(0,k.applyTypography)(e.promoHeadline.extraLargelight.default.bpSmall)};
        margin-top: 16px;
      `,"group4")}
  `}
`,sh=$.default.div.withConfig({displayName:"HeroSection.styles__DescriptionStyled",componentId:"sc-b72c52b4-3"})`
  ${({theme:e,$isInverse:t})=>$.css`
    text-align: center;
    margin: 16px 0;
    color: ${t?e.text.onInverseBG.default.value:e.text.default.value};
    ${(0,k.applyTypography)(e.generic.info1.default.bpLarge)};

    ${(0,C.applyStylesForBreakpoints)($.css`
        ${(0,k.applyTypography)(e.generic.info1.default.bpSmall)};
      `,"group4")}
  `}
`,sx=$.default.div.withConfig({displayName:"HeroSection.styles__AppStoreWrapper",componentId:"sc-b72c52b4-4"})`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 16px;

  ${(0,C.applyStylesForBreakpoints)($.css`
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,"group1")}
`,sb=$.default.div.withConfig({displayName:"HeroSection.styles__IconWrapperStyled",componentId:"sc-b72c52b4-5"})`
  ${({$width:e})=>$.css`
    height: 47px;
    ${e&&$.css`
      width: ${e}px;
    `}
  `}
`,sS=$.default.div.withConfig({displayName:"HeroSection.styles__RightContainerStyled",componentId:"sc-b72c52b4-6"})`
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

  ${(0,C.applyStylesForBreakpoints)($.css`
      margin: 0;
    `,"group2")}
`,sv=$.default.div.withConfig({displayName:"HeroSection.styles__QRWrapperStyled",componentId:"sc-b72c52b4-7"})`
  width: 99px;
  height: 99px;
  margin: 0 auto;
  margin-top: 32px;
`,sw=$.default.img.withConfig({displayName:"HeroSection.styles__QrImageStyled",componentId:"sc-b72c52b4-8"})`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  display: block;
`,sj=$.default.img.withConfig({displayName:"HeroSection.styles__BadgeImageStyled",componentId:"sc-b72c52b4-9"})`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`,s$=({headline:e,supportingCopy:t,desktopQrCaption:i,image:o,qrImage:n,storeCtas:r,isInverse:l=!1,testId:s=""})=>{let[d]=(0,eH.useBreakpoints)("HeroSection"),p=["group1","group2","group3","group4"].includes(d),c=!!r?.appStore?.badgeImage.src,u=!!r?.googlePlay?.badgeImage.src,g=!!n?.src;return(0,a.jsx)(sm,{$isInverse:l,children:(0,a.jsxs)(a9.default,{testId:`${s}acquisition-grid`,isNested:!0,columns:24,group3:{columns:12},extraStyles:sg,children:[(0,a.jsx)(ie.default,{colStart:1,colSpan:12,group3:{colStart:1,colSpan:12},children:(0,a.jsx)(sy,{children:(0,a.jsx)(a9.default,{columns:12,group2:{columns:12},children:(0,a.jsxs)(ie.default,{colStart:3,colSpan:8,group4:{colStart:2,colSpan:10},group2:{colStart:1,colSpan:12},children:[(0,a.jsx)(sf,{$isInverse:l,children:e}),(0,a.jsx)(sh,{$isInverse:l,children:t}),p?(0,a.jsxs)(sx,{children:[c&&(0,a.jsx)(b.default,{href:r?.appStore?.href,linkType:"external",ariaLabel:r?.appStore?.badgeImage.altText,children:(0,a.jsx)(sb,{$width:147,children:(0,a.jsx)(sj,{src:ij.publicAssetsPrefixer.prefixAsset(r.appStore.badgeImage.src),alt:r?.appStore?.badgeImage.altText})})}),u&&(0,a.jsx)(b.default,{href:r?.googlePlay?.href,linkType:"external",ariaLabel:r?.googlePlay?.badgeImage.altText,children:(0,a.jsx)(sb,{$width:165,children:(0,a.jsx)(sj,{src:ij.publicAssetsPrefixer.prefixAsset(r.googlePlay.badgeImage.src),alt:r?.googlePlay?.badgeImage.altText})})})]}):g&&(0,a.jsx)(sv,{children:(0,a.jsx)(sw,{src:ij.publicAssetsPrefixer.prefixAsset(n.src),alt:n?.altText,loading:"lazy"})}),!p&&i&&(0,a.jsx)(sh,{$isInverse:l,children:i})]})})})}),(0,a.jsx)(ie.default,{rowStart:1,colStart:13,colSpan:12,group3:{colStart:1,colSpan:12},children:(0,a.jsx)(sS,{"data-testid":"hero-media-wrapper",children:(0,a.jsx)(su.ImageStyled,{src:ij.publicAssetsPrefixer.prefixAsset(o.src),alt:o.altText,loading:"lazy","data-testid":`${s}acquisition-image`})})})]})})},sC=$.default.div.withConfig({displayName:"AcquisitionPage.styles__AcquisitionPageContainer",componentId:"sc-f5fbc8a4-0"})`
  display: grid;
`,sk=$.default.section.withConfig({displayName:"CtaBanner.styles__CtaBannerContainerStyled",componentId:"sc-42b773e5-0"})`
  ${({$isInverse:e,theme:t})=>$.css`
    background-color: ${e?t.interactiveInnner.onDefaultBG.value:t.interactiveInnner.onInverseBG.value};
    display: grid;
    align-items: center;
    text-align: center;
    padding: 16px;
  `}
`,sI=$.default.h2.withConfig({displayName:"CtaBanner.styles__SubtitleStyled",componentId:"sc-42b773e5-1"})`
  ${({$isInverse:e,theme:t})=>$.css`
    ${(0,k.applyTypography)(t.promoHeadline.extraLargelight.default.bpLarge)};
    color: ${e?t.text.onInverseBG.default.value:t.text.default.value};
    margin-top: 32px;

    ${(0,C.applyStylesForBreakpoints)($.css`
        ${(0,k.applyTypography)(t.promoHeadline.extraLargelight.default.bpSmall)};
      `,"group2")}
  `}
`,s_=$.default.p.withConfig({displayName:"CtaBanner.styles__SupportingTextStyled",componentId:"sc-42b773e5-2"})`
  ${({$isInverse:e,theme:t})=>$.css`
    ${(0,k.applyTypography)(t.generic.info1.default.bpLarge)};
    color: ${e?t.text.onInverseBG.default.value:t.text.default.value};
    margin-top: 16px;

    ${(0,C.applyStylesForBreakpoints)($.css`
        ${(0,k.applyTypography)(t.generic.info1.default.bpSmall)};
      `,"group2")}
  `}
`,sT=$.default.div.withConfig({displayName:"CtaBanner.styles__BadgesWrapperStyled",componentId:"sc-42b773e5-3"})`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 32px;

  ${(0,C.applyStylesForBreakpoints)($.css`
      flex-direction: column;
      margin-top: 20px;
    `,"group1")}
`,sB=$.default.div.withConfig({displayName:"CtaBanner.styles__IconWrapperStyled",componentId:"sc-42b773e5-4"})`
  ${({$width:e})=>$.css`
    height: 47px;
    ${e&&$.css`
      width: ${e}px;
    `}
  `}
`,sN=$.default.img.withConfig({displayName:"CtaBanner.styles__BadgeImageStyled",componentId:"sc-42b773e5-5"})`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`,sA=({subtitle:e,supportingText:t,storeCtas:i,isInverse:o=!1})=>(0,a.jsxs)(sk,{$isInverse:o,"data-testid":"cta-banner-container",children:[(0,a.jsx)(sI,{$isInverse:o,"data-testid":"cta-banner-subtitle",children:e}),(0,a.jsx)(s_,{$isInverse:o,children:t}),(0,a.jsxs)(sT,{"data-testid":"cta-banner-badges",children:[(0,a.jsx)(b.default,{href:i.appStore.href,linkType:"external",ariaLabel:i.appStore.badgeImage.altText,children:(0,a.jsx)(sB,{$width:147,children:(0,a.jsx)(sN,{src:ij.publicAssetsPrefixer.prefixAsset(i.appStore.badgeImage.src),alt:i.appStore.badgeImage.altText})})}),(0,a.jsx)(b.default,{href:i.googlePlay.href,linkType:"external",ariaLabel:i.googlePlay.badgeImage.altText,children:(0,a.jsx)(sB,{$width:165,children:(0,a.jsx)(sN,{src:ij.publicAssetsPrefixer.prefixAsset(i.googlePlay.badgeImage.src),alt:i.googlePlay.badgeImage.altText})})})]})]}),sP=$.default.section.withConfig({displayName:"VerticalList.styles__VerticalListStyled",componentId:"sc-57208f60-0"})`
  ${({$isInverse:e,theme:t})=>$.css`
    color: ${e?t.text.onInverseBG.default.value:t.text.default.value};
    background-color: ${e?t.interactiveInnner.onDefaultBG.value:t.interactiveInnner.onInverseBG.value};
  `}
`,sF=$.css`
  min-width: fit-content;
  margin: 16px 0;
`,sE=$.default.ul.withConfig({displayName:"VerticalList.styles__ListStyled",componentId:"sc-57208f60-1"})`
  display: grid;
  gap: 0;
  list-style: none;
  margin-block-end: 16px;
  margin-block-start: 16px;
  margin-inline-end: 0;
  margin-inline-start: 0;
  padding: 0;
`,sL=$.default.li.withConfig({displayName:"VerticalList.styles__ItemStyled",componentId:"sc-57208f60-2"})`
  display: grid;
  gap: 0 16px;
  grid-template-columns: repeat(12, 1fr);
  margin: 0;

  ${(0,C.applyStylesForBreakpoints)($.css`
      gap: 0 8px;
    `,"group2")}
`,sD=$.default.hr.withConfig({displayName:"VerticalList.styles__SeparatorStyled",componentId:"sc-57208f60-3"})`
  ${({$isInverse:e,theme:t})=>$.css`
    border: 0;
    border-block-start: 1px solid
      ${e?t.text.onInverseBG.mediumEmphasis.value:t.text.mediumEmphasis.value};
    grid-column: 1 / -1;
    margin: 0;
    width: 100%;
  `}
`,sM=$.css`
  align-self: center;

  ${(0,C.applyStylesForBreakpoints)($.css`
      inline-size: calc(100% + 32px);
      margin-inline-start: -16px;
    `,"group2")}
`,sR=$.default.div.withConfig({displayName:"VerticalList.styles__ImageWrapperStyled",componentId:"sc-57208f60-4"})`
  aspect-ratio: 1 / 1;
  justify-self: center;
  overflow: hidden;
  width: 100%;
`,sO=$.default.img.withConfig({displayName:"VerticalList.styles__ImageStyled",componentId:"sc-57208f60-5"})`
  display: block;
  height: 100%;
  object-fit: cover;
  object-position: center;
  width: 100%;
`,sG=$.default.div.withConfig({displayName:"VerticalList.styles__ContentStyled",componentId:"sc-57208f60-6"})`
  align-content: center;
  display: grid;
  gap: 8px;
  grid-column: 1 / 12;
  margin-block-end: 16px;
  margin-block-start: 16px;
  margin-inline-end: 0;
  margin-inline-start: 16px;
`,sU=$.default.h3.withConfig({displayName:"VerticalList.styles__TitleStyled",componentId:"sc-57208f60-7"})`
  ${({$isInverse:e,theme:t})=>$.css`
    color: ${e?t.text.onInverseBG.default.value:t.text.default.value};
    ${(0,k.applyTypography)(t.generic.info1.emphasised.bpLarge)};
    margin: 0;

    ${(0,C.applyStylesForBreakpoints)($.css`
        ${(0,k.applyTypography)(t.generic.info1.emphasised.bpSmall)};
      `,"group4")}
  `}
`,sH=$.default.p.withConfig({displayName:"VerticalList.styles__DescriptionStyled",componentId:"sc-57208f60-8"})`
  ${({$isInverse:e,theme:t})=>$.css`
    color: ${e?t.text.onInverseBG.default.value:t.text.mediumEmphasis.value};
    ${(0,k.applyTypography)(t.generic.info1.default.bpLarge)};
    margin: 0;

    ${(0,C.applyStylesForBreakpoints)($.css`
        ${(0,k.applyTypography)(t.generic.info1.default.bpSmall)};
      `,"group4")}
  `}
`,sW=({image:e,items:t,isInverse:i=!1,showDescriptions:o=!0})=>(0,a.jsx)(sP,{$isInverse:i,children:(0,a.jsxs)(a9.default,{columns:24,rowGap:0,group2:{columns:12},extraStyles:sF,children:[(0,a.jsx)(ie.default,{colStart:2,colSpan:9,group2:{colStart:1,colSpan:12},extraStyles:sM,children:(0,a.jsx)(sR,{children:(0,a.jsx)(sO,{src:ij.publicAssetsPrefixer.prefixAsset(e.src),alt:e.alt,loading:"lazy"})})}),(0,a.jsx)(ie.default,{colStart:12,colSpan:12,group2:{colStart:1,colSpan:12},children:(0,a.jsx)(sE,{children:t.map(({title:e,description:n},r)=>(0,a.jsxs)(sL,{children:[(0,a.jsxs)(sG,{children:[(0,a.jsx)(sU,{$isInverse:i,children:e}),o&&n&&(0,a.jsx)(sH,{$isInverse:i,children:n})]}),r<t.length-1&&(0,a.jsx)(sD,{$isInverse:i,"aria-hidden":"true"})]},e))})})]})}),sz=({heroContent:e,desktopQrCaption:t,qrImage:i,storeCtas:o,ctaBanner:n,verticalList:r,isInverse:l,testId:s="acquisition-page"})=>{let d;return e?(0,a.jsxs)(sC,{"data-testid":s,children:[(0,a.jsx)(s$,{headline:e.title||"",supportingCopy:e.description||"",desktopQrCaption:t,image:(d=e.image,{src:d?.model?.blocks?.src||"",altText:d?.model?.blocks?.altText||""}),qrImage:i,storeCtas:o,isInverse:l}),r&&(0,a.jsx)(sW,{...r,isInverse:r.isInverse??l}),n&&(0,a.jsx)(sA,{...n,isInverse:n.isInverse??l,testId:`${s}-`})]}):null},sY={type:"page",template:"app-acquisition-page",model:{heroSection:{title:"Stay informed any time, anywhere with the BBC app",summary:"The BBC app is your gateway to a world of news stories, videos, and live coverage delivered by our trusted global network of journalists.",qrImage:{src:"app-acquisition/qr.png",altText:"QR code to download the BBC app"},storeCtas:{appStore:{href:"https://apps.apple.com/app/apple-store/id364147881?pt=318278&ct=app%20acquisition%20page&mt=8",badgeImage:{src:"app-acquisition/app-store.svg",altText:"Download on the App Store"}},googlePlay:{href:"https://play.google.com/store/apps/details?id=bbc.mobile.news.ww&at_bbc_team=studios&at_medium=onsite&at_objective=appdownload&at_ptr_name=bbc.com&at_format=link&at_link_origin=appacquisitionpage&at_campaign=googleplay&at_campaign_type=owned",badgeImage:{src:"app-acquisition/google-play.svg",altText:"Get it on Google Play"}}},indexImage:{model:{blocks:{src:"app-acquisition/app-acquisition-hero.png",altText:"BBC app acquisitions"}}}},ctaBanner:{subtitle:"Download the BBC app today.",supportingText:"Trusted global news, podcasts, videos and live coverage all in one place.",storeCtas:{appStore:{href:"https://apps.apple.com/app/apple-store/id364147881?pt=318278&ct=app%20acquisition%20page&mt=8",badgeImage:{src:"app-acquisition/app-store.svg",altText:"Download on the App Store"}},googlePlay:{href:"https://play.google.com/store/apps/details?id=bbc.mobile.news.ww&at_bbc_team=studios&at_medium=onsite&at_objective=appdownload&at_ptr_name=bbc.com&at_format=link&at_link_origin=appacquisitionpage&at_campaign=googleplay&at_campaign_type=owned",badgeImage:{src:"app-acquisition/google-play.svg",altText:"Get it on Google Play"}}}},verticalList:{image:{src:"app-acquisition/app-acquisition.webp",alt:"BBC app acquisition illustration"},items:[{title:"Breaking news alerts",description:"Be the first to know when major stories unfold with instant notifications."},{title:"Live coverage",description:"Follow news and sport events as they happen with live updates and analysis from BBC correspondents around the world."},{title:"Listen to award-winning BBC audio",description:"Enjoy thousands of podcasts and listen to BBC radio live."},{title:"Stories that go deeper",description:"Explore features and analysis across Travel, Culture, Health and more."},{title:"Watch anywhere",description:"Immerse yourself in a world of captivating videos."}]},isInverse:!1}},sq=()=>(0,a.jsx)(sz,{...(e=>{let{heroSection:t,ctaBanner:a,verticalList:i}=e.model;return{testId:"acquisition-page",heroContent:{title:t.title,description:t.summary,image:t.indexImage},qrImage:t.qrImage,storeCtas:t.storeCtas,ctaBanner:{...a,isInverse:!0},verticalList:{...i,isInverse:!1},isInverse:!0}})(sY)});var sV=e.i(771340),sQ=e.i(357391);let sX=$.default.div.withConfig({displayName:"NoutFoundPage.styles__NotFoundTopStyled",componentId:"sc-38310dc4-0"})`
  padding-top: 32px;
  margin-bottom: 48px;
  ${(0,C.applyStylesForBreakpoints)($.css`
      padding-top: 24px;
      margin-bottom: 32px;
    `,"group2")}
`,sK=$.default.div.withConfig({displayName:"NoutFoundPage.styles__NotFoundDividerStyled",componentId:"sc-38310dc4-1"})`
  ${({theme:e})=>$.css`
    border-bottom: 1px solid ${e.divider.lowEmphasis.value};
  `}
`,sZ=$.default.h2.withConfig({displayName:"NoutFoundPage.styles__NotFoundErrorStyled",componentId:"sc-38310dc4-2"})`
  ${({theme:e})=>$.css`
    display: grid;
    ${(0,k.applyTypography)(e.headline.small.bpSmall)};
    color: ${e.text.lowEmphasis.value};
    padding-bottom: 24px;
  `}
`,sJ=$.default.h1.withConfig({displayName:"NoutFoundPage.styles__NotFoundSuggestionStyled",componentId:"sc-38310dc4-3"})`
  ${({theme:e})=>$.css`
    ${(0,k.applyTypography)(e.headline.small.bpLarge)};
    color: ${e.text.default.value};
    padding: 24px 0;
    ${(0,C.applyStylesForBreakpoints)($.css`
        ${(0,k.applyTypography)(e.headline.large.bpSmall)};
      `,"group5")}
    ${(0,C.applyStylesForBreakpoints)($.css`
        ${(0,k.applyTypography)(e.headline.small.bpSmall)};
      `,"group2")}
  `}
`,s0=$.default.div.withConfig({displayName:"NoutFoundPage.styles__NotFoundInfoStyled",componentId:"sc-38310dc4-4"})`
  margin-bottom: 16px;

  div:first-child {
    display: inline;
  }
  ${({theme:e})=>$.css`
    ${(0,k.applyTypography)(e.bodyCopy.default.bpLarge)};
    a {
      ${(0,k.applyTypography)(e.bodyCopy.links.bpLarge)};
      font-family: ${e.fontFamilies.bbcReithSans};
    }
  `}
`,s1=$.default.div.withConfig({displayName:"NoutFoundPage.styles__NotFoundSearchInputWrapperStyled",componentId:"sc-38310dc4-5"})`
  margin-bottom: 52px;
  ${(0,C.applyStylesForBreakpoints)($.css`
      margin-bottom: 40px;
    `,"group2")}
`,s2=({recentStories:e,searchText:t,onSearch:i,onSearchTextChange:o})=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ts.ContainerStyled,{$type:"contained",children:(0,a.jsxs)(sX,{children:[(0,a.jsx)(sZ,{children:"Error 404 - Oops, the page you're looking for is no longer here"}),(0,a.jsx)(sK,{}),(0,a.jsx)(sJ,{children:"Try searching for it instead"}),(0,a.jsx)(s1,{children:(0,a.jsx)(sQ.default,{onSearch:i,onSearchTextChange:o,searchText:t})}),(0,a.jsxs)(s0,{children:["We can't find the page you're looking for. If you've typed the URL into your browser, check that you entered it correctly. If you reached this page via our site or search, please let us know by emailing"," ",(0,a.jsx)(b.default,{href:"mailto:comhelp.bbc@bbc.com",children:"comhelp.bbc@bbc.com"}),"."]}),(0,a.jsx)(s0,{children:"Our team will investigate this feedback but will not reply directly."})]})}),!!e.length&&(0,a.jsx)(h.default,{type:"alaska",title:"More from BBC",content:e,testId:"not-found-page-alaska",titleAsHeadingTag:!1})]}),s4=()=>{let e=(0,te.useCurrentSlug)(),{data:t}=(0,o.default)(e),{searchText:i,setSearchText:n,onSearchClick:r}=(0,sV.useSearch)();return(0,a.jsx)(s2,{recentStories:t,onSearch:r,searchText:i,onSearchTextChange:n})},s6=async e=>{await (0,ic.fetchClient)("form",{method:"POST",body:JSON.stringify(e),isLegacyApiEnabled:!0})},s3={"contact-form":[S.FeedbackForm,s6]},s8=()=>{let{isSubscriptionAllowed:e}=(0,x.useSubscriptionContext)(),t=(0,te.useCurrentSlug)(),{data:i}=(0,o.default)(t),{data:n=[]}=(0,o.default)("mainNavigation"),{worldNewsData:r,worldNewsServiceId:l,worldNewsTvPath:s}=(0,nB.useWorldNewsData)(),d=(0,sc.useIsAppLayoutEnabled)(),[p,c]=t,{title:u,sections:g,hideBannerAdvert:m,isPreCurated:y}=i;return d&&i.slug&&"docs"===i.slug?(0,a.jsx)(s4,{}):"app"===p?(0,a.jsx)(sq,{}):(0,a.jsxs)(a.Fragment,{children:["video"===p&&"docs"===c&&(0,a.jsx)(nT,{isSubscriptionAllowed:e}),(0,a.jsx)(sa,{value:s3,children:(0,a.jsx)(sp,{isPreCurated:y,slug:t,title:u,sections:g,mainNavigation:n,worldNewsTvPath:s,worldNewsData:r,worldNewsServiceId:l,hideBannerAdvert:m})})]})};var s5=e.i(396141);let s7=$.default.div.withConfig({displayName:"EpisodeDetails.styles__EpisodeHeadingAreaStyled",componentId:"sc-68b3a754-0"})`
  display: grid;
  grid-template-areas: 'series-heading' 'episode-heading';
  row-gap: 12px;
  margin-bottom: 24px;
`,s9=$.default.h2.withConfig({displayName:"EpisodeDetails.styles__SeriesHeadingStyled",componentId:"sc-68b3a754-1"})`
  ${({theme:e})=>$.css`
    grid-area: series-heading;
    ${(0,k.applyTypography)(e.longFormVideo.secondaryTitle.default.bpLarge)};
    color: ${e.text.onInverseBG.default.value};

    ${(0,C.applyStylesForBreakpoints)((0,k.applyTypography)(e.longFormVideo.secondaryTitle.default.bpSmall),"group2")};
  `};
`,de=$.default.h1.withConfig({displayName:"EpisodeDetails.styles__EpisodeHeadingStyled",componentId:"sc-68b3a754-2"})`
  ${({theme:e})=>$.css`
    grid-area: episode-heading;
    ${(0,k.applyTypography)(e.longFormVideo.primaryTitle.default.bpLarge)};
    color: ${e.text.onInverseBG.default.value};

    ${(0,C.applyStylesForBreakpoints)((0,k.applyTypography)(e.longFormVideo.primaryTitle.default.bpSmall),"group2")};
  `};
`,dt=$.default.span.withConfig({displayName:"EpisodeDetails.styles__EpisodePrefixHeadingStyled",componentId:"sc-68b3a754-3"})`
  ${({theme:e})=>$.css`
    ${(0,k.applyTypography)(e.longFormVideo.primarySubtitle.default.bpLarge)};
    color: ${e.text.onInverseBG.lowEmpasis.value};

    ${(0,C.applyStylesForBreakpoints)((0,k.applyTypography)(e.longFormVideo.primarySubtitle.default.bpSmall),"group2")};
  `};
`,da=$.default.div.withConfig({displayName:"EpisodeDetails.styles__ViewSeriesButtonStyled",componentId:"sc-68b3a754-4"})`
  ${({theme:e})=>$.css`
    button {
      ${(0,k.applyTypography)(e.textLink.large.regular.bpLarge)};
      cursor: pointer;
    }
  `};

  margin-bottom: 32px;
  width: fit-content;

  ${(0,C.applyStylesForBreakpoints)($.css`
      width: 100%;

      button {
        width: 100%;
      }
    `,"group2")};
`,di=$.default.div.withConfig({displayName:"EpisodeDetails.styles__NextEpisodeButtonStyled",componentId:"sc-68b3a754-5"})`
  ${({theme:e})=>$.css`
    button {
      ${(0,k.applyTypography)(e.textLink.large.regular.bpLarge)};
      cursor: pointer;

      &:hover {
        ${(0,k.applyTypography)(e.textLink.large.linked.bpLarge)};
      }
    }
  `};

  margin-bottom: 32px;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  ${(0,C.applyStylesForBreakpoints)($.css`
      justify-content: flex-start;
    `,"group3")};

  ${(0,C.applyStylesForBreakpoints)($.css`
      justify-content: flex-end;
    `,"group2")};
`,dn=$.default.p.withConfig({displayName:"EpisodeDetails.styles__EpisodeMetaStyled",componentId:"sc-68b3a754-6"})`
  ${({theme:e,$hasContentWarning:t})=>$.css`
    ${(0,k.applyTypography)(e.metaData.large)};
    color: ${e.text.onInverseBG.lowEmpasis.value};
    display: flex;
    column-gap: 18px;
    margin-bottom: ${t?"4px":"24px"};
  `};
`,dr=$.default.span.withConfig({displayName:"EpisodeDetails.styles__EpisodeMetaItemStyled",componentId:"sc-68b3a754-7"})`
  position: relative;

  &:not(:last-child)::after {
    content: '•';
    position: absolute;
    right: -11px;
  }
`,dl=$.default.p.withConfig({displayName:"EpisodeDetails.styles__EpisodeDescriptionStyled",componentId:"sc-68b3a754-8"})`
  ${({theme:e})=>$.css`
    ${(0,k.applyTypography)(e.bodyCopy.default.bpSmall)};
    color: ${e.text.onInverseBG.default.value};
  `};

  margin-bottom: 16px;
`;$.default.p.withConfig({displayName:"EpisodeDetails.styles__ContentWarningStyled",componentId:"sc-68b3a754-9"})`
  ${({theme:e})=>$.css`
    ${(0,k.applyTypography)(e.metaData.large)};
    color: ${e.text.onInverseBG.lowEmpasis.value};
    margin-bottom: 24px;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 12px 0;

    ${(0,C.applyStylesForBreakpoints)($.css`
        padding: 12px 16px;
      `,"group2")};

    svg {
      width: 16px;
      height: 16px;
    }
  `};
`;let ds=({mediaMetadataModel:e,series:t})=>{let{prefix:i=""}=e;return(0,a.jsxs)(s7,{children:[(0,a.jsxs)(de,{children:[!!i&&(0,a.jsxs)(dt,{children:[e.prefix," "]}),e.title]}),(0,a.jsx)(s9,{children:t.title})]})},dd=({series:e,mediaMetadataModel:t,nextEpisode:i})=>{let o=t.versions[0]?.durationFormatted,n=t.versions[0]?.warning,r=[t.releaseDate,o,t.rating];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(da,{children:(0,a.jsx)(re.default,{condition:!!e.path,wrapper:t=>(0,a.jsx)(b.default,{href:e.path,children:t}),children:(0,a.jsx)(ec.default,{tabIndex:-1,text:"View series",icon:"common:stack",alt:"View series",type:"ghost",size:"small",isInverse:!0})})}),(0,a.jsx)(dn,{$hasContentWarning:!!n,children:r.map((e,t)=>(0,a.jsx)(dr,{children:e},t))}),(0,a.jsx)(dl,{children:t.synopses.medium}),i?.path&&(0,a.jsx)(di,{children:(0,a.jsx)(re.default,{condition:!!i.path,wrapper:e=>(0,a.jsx)(b.default,{href:i.path,children:e}),children:(0,a.jsx)(ec.default,{tabIndex:-1,text:"Next episode",icon:"playback-avkx:play",alt:"Watch next episode",type:"unboxed-share",size:"small",isInverse:!0})})})]})},dp=(0,a3.forwardLayout)(e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ie.default,{colStart:6,colSpan:11,group5:{colStart:4,colSpan:15},group3:{colStart:1,colSpan:21},group2:{colStart:1,colSpan:12},children:(0,a.jsx)(ds,{...e})}),(0,a.jsx)(ie.default,{colStart:6,colSpan:14,group5:{colStart:4,colSpan:18},group3:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:(0,a.jsx)(dd,{...e})})]}));var dc=e.i(752108),du=e.i(227162),dg=e.i(395497);let dm=e=>{let t=du.appConfig.getValue(dg.ConfigSettings.SiteUrl)||"localhost",{query:i}=(0,d.useAppRouter)(),{slug:o}=i,n=`${t}${(0,nu.getStringFromSlug)(o,!0)}`,{prefix:r="",uploadDate:l,...s}=e,[,p="1",c="1"]=r.match(/S(\d+)E(\d+)/)??[],u=parseInt(p,10),g=parseInt(c,10),m=new Date(l),y=function(e){let{name:t,seriesName:a,seasonNumber:i=1,episodeNumber:o=1,description:n,thumbnailUrl:r,datePublished:l,url:s,duration:d}=e;return{"@context":"https://schema.org","@type":"TVEpisode",name:t,partOfSeason:{"@type":"TVSeason",name:`Series ${i}`},partOfSeries:{"@type":"TVSeries",name:a},episodeNumber:o,description:n,...r?{thumbnailUrl:r}:{},datePublished:l,url:s,duration:d,isAccessibleForFree:!1}}({seasonNumber:u,episodeNumber:g,datePublished:isNaN(m.getTime())?void 0:m.toISOString().slice(0,10),url:n,...s});return(0,a.jsx)(dc.default,{children:(0,a.jsx)(Z.default,{children:(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(y)},id:"tv-episode-schema"})})})};var dy=e.i(275349);let df=(0,a3.forwardLayout)(({player:e,details:i,isPlayClicked:o})=>{let[n,r]=(0,t.useState)("level3"),l={default:o?24:-170,group5:o?24:-110,group4:o?24:-12,group3:o?24:-25,group2:16};return(0,dy.useBackdropObserver)(e=>r(e?"level2":"level3")),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(a7.default,{as:"section",testId:"video-episode-player-container",marginBottom:l.default,group5:{marginBottom:l.group5},group4:{marginBottom:l.group4},group3:{marginBottom:l.group3},group2:{marginBottom:l.group2},group1:{marginBottom:l.group2},inlineStyles:{transition:"margin-block-end 0.8s cubic-bezier(0.4, 0, 0.2, 1)"},children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},isContained:!1,children:(0,a.jsx)(ie.default,{colStart:1,colSpan:24,group2:{colStart:1,colSpan:12},children:e})})}),(0,a.jsx)(a7.default,{as:"section",withBackground:!1,zIndex:n,children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},isContained:!0,children:i})})]})}),dh=$.default.article.withConfig({displayName:"VideoEpisodePage.styles__VideoEpisodePageStyled",componentId:"sc-c14e420-0"})`
  ${({theme:e})=>$.css`
    background-color: ${e.container.onInverseBG2.value};
  `};
`,dx=e=>{let i,{durationInSeconds:o,mediaMetadataModel:n}=(i=e.blocks[0]?.model,{durationInSeconds:function(e){if("number"==typeof e)return e;if(e&&"string"==typeof e)try{let t=e.split(":");if(3===t.length){let e=parseInt(t[0],10),a=parseInt(t[1],10),i=parseFloat(t[2]);return 3600*e+60*a+Math.floor(i)}}catch{}return 0}(i?.versions[0]?.duration),mediaMetadataModel:i}),[r,l]=(0,t.useState)(!1),s=n.versions[0]?.durationISO8601,d=function(e,t=0){let[a]=(0,q.useMediaProgress)([e]),i=Math.round(t*V.EARLY_PROGRESS/100),o=Math.round(t*V.LATE_PROGRESS/100),{offset:n=null}=a??{};return null!==n&&Number.isInteger(n)?0===n||n>=o?0:Math.max(n,i):null}(e.id,o);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(dm,{name:n.title,seriesName:e.series.title,description:n.synopses.medium,prefix:n.prefix,thumbnailUrl:(n?.imageUrl||"").replace("{recipe}","1024xn"),uploadDate:n.releaseDate,duration:s}),(0,a.jsx)(dh,{"data-testid":"video-episode-page",children:(0,a.jsx)(df,{layout:"single-column",...e,isPlayClicked:r,player:(0,a.jsx)(s5.default,{mediaMetadataModel:n,onPlayClick:()=>{l(!0)},onEnded:()=>{l(!1)},startTime:d}),details:(0,a.jsx)(dp,{layout:"single-column",series:e.series,mediaMetadataModel:n,nextEpisode:e.nextEpisode})})})]})},db=({contents:e})=>{let{model:t}=e.find(({type:e})=>"docs-episode"===e)||{};return t?(0,a.jsx)(dx,{...t}):null};var dS=e.i(588207);let dv=({sources:e,imageUrlTemplate:t,sizes:i="96vw",isDefaultAspectRatio:o=!0,loading:n,fetchPriority:r,webpSupport:l=!0,testId:s,...d})=>{let{os:p={},browser:c={}}=(0,tt.usePageData)(),{getIsEager:u}=(0,ly.useEagerImages)(),g=l&&(0,t0.supportsWebP)({os:p,browser:c}),m=(0,t0.getSrcAndSrcSet)(t,o,g),y=n??(u(m.mainImageSource)?"eager":"lazy");return(0,a.jsxs)("picture",{children:[e.map(e=>{let t=(0,t0.getSrcAndSrcSet)(e.imageUrlTemplate,o,g);return(0,a.jsx)("source",{media:e.media,sizes:e.sizes??i,srcSet:t.srcSet},`${e.media}-${e.imageUrlTemplate}`)}),(0,a.jsx)(su.ImageStyled,{sizes:i,srcSet:m.srcSet,src:m.mainImageSource,loading:y,fetchpriority:r,"data-testid":s,...d})]})};var dw=e.i(195214);function dj(e,t){let[a]=e.filter(({model:{blocks:{type:e}}})=>e===t),{model:i}=a||{},{blocks:o}=i||{};return o||{}}let d$=$.default.div.withConfig({displayName:"HeroImage.styles__HeroImageContainerStyled",componentId:"sc-a0293acd-0"})`
  ${({theme:e})=>$.css`
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

    ${(0,C.applyStylesForBreakpoints)($.css`
        img {
          aspect-ratio: 1 / 1;
          object-fit: cover;
        }
      `,"group2")}
  `}
`,dC=$.default.div.withConfig({displayName:"HeroImage.styles__HeroImageFallbackStyled",componentId:"sc-a0293acd-1"})`
  ${({theme:e})=>$.css`
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

    ${(0,C.applyStylesForBreakpoints)($.css`
        aspect-ratio: 1 / 1;
      `,"group2")}
  `}
`;$.default.div.withConfig({displayName:"HeroImage.styles__TitleImageStyled",componentId:"sc-a0293acd-2"})`
  position: absolute;
  bottom: 26px;
`;let dk=(0,a3.forwardLayout)(e=>{let{images:t,title:i,seasonNumber:o}=e,n=dj(t,"3:1-background"),r=dj(t,"1:1-square"),l=!n.src&&!r.src,s=`${i} Season ${o}`,d=`(min-width: ${dw.breakpoints.group2[1]+1}px)`,p=r.src||n.src||"";return(0,a.jsx)(a7.default,{children:l?(0,a.jsx)(dC,{}):(0,a.jsx)(d$,{children:(0,a.jsx)(dv,{sources:n.src?[{media:d,imageUrlTemplate:n.src,sizes:"100vw"}]:[],imageUrlTemplate:p,alt:s,isDefaultAspectRatio:!1,sizes:"100vw",loading:"eager",fetchPriority:"high"})})})});var dI=e.i(94476);let d_=$.default.div.withConfig({displayName:"TitleImage.styles__TitleImageStyled",componentId:"sc-a6ccda19-0"})`
  ${({theme:e})=>$.css`
    position: relative;
    color: ${e.text.onInverseBG.default.value};

    ${(0,k.applyTypography)(e.audio.brandTitle.large.bpLarge)};

    ${(0,C.applyStylesForBreakpoints)((0,k.applyTypography)(e.audio.brandTitle.large.bpSmall),"group2")};
  `};
`,dT=$.default.div.withConfig({displayName:"TitleImage.styles__ImageWrapper",componentId:"sc-a6ccda19-1"})`
  display: block;

  ${({theme:e})=>(0,C.applyStylesForBreakpoints)($.css`
        display: none;
      `,"group2")}
`,dB=(0,t.forwardRef)(({images:e,title:i,seasonNumber:o,onLoad:n,onError:r},l)=>{let{src:s}=dj(e,"3:1-logo"),[d,p]=(0,t.useState)(!s),c=`${i} Season ${o}`;return(0,a.jsx)(d_,{ref:l,children:d?i:(0,a.jsx)(dT,{children:(0,a.jsx)(dI.default,{onLoad:n,onError:()=>{p(!0),r?.()},imageUrlTemplate:s??"",alt:c})})})}),dN=(0,a3.forwardLayout)(e=>{let i=(0,t.useRef)(null),[o,n]=(0,t.useState)(0),r=()=>{let{current:e}=i;if(e){let{height:t}=e.getBoundingClientRect();n(t)}};return(0,eg.useResizeObserver)(i,r,150),(0,a.jsx)(a7.default,{marginBottom:16,marginTop:-(26+o),withBackground:!1,children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:1},children:(0,a.jsx)(ie.default,{colStart:3,colSpan:9,group5:{colStart:2,colSpan:10},group4:{colStart:2,colSpan:11},group3:{colStart:1,colSpan:13},group2:{colStart:1,colSpan:12},children:(0,a.jsx)(dB,{ref:i,onLoad:r,onError:r,...e})})})})});var dA=e.i(324951),dP=e.i(316908);let dF=$.default.details.withConfig({displayName:"SeriesDropdown.styles__SeriesDropdownStyled",componentId:"sc-e5f755ae-0"})`
  position: relative;
  width: fit-content;
`,dE=$.default.summary.withConfig({displayName:"SeriesDropdown.styles__SeriesDropdownSummaryStyled",componentId:"sc-e5f755ae-1"})`
  ${({theme:e})=>$.css`
    background-color: ${e.dropDown.default.inverse.background.value};
    border: none;
    color: ${e.dropDown.default.inverse.content.value};
    padding: 8px 16px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    column-gap: 8px;

    ${(0,k.applyTypography)(e.nav.topbar.level3.default)}

    ${(0,tA.addHoverState)($.css`
      background-color: ${e.dropDown.hover.inverse.background.value};
    `)}
  `};
`,dL=$.default.ul.withConfig({displayName:"SeriesDropdown.styles__SeriesDropdownListStyled",componentId:"sc-e5f755ae-2"})`
  ${({theme:e,$isOpen:t,$isJsEnabled:a})=>$.css`
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

    ${(function(e){let{thumbColor:t="black",thumbColorHover:a="gray",trackColor:i="transparent",width:o=10,height:n=10,borderRadius:r=4}=e;return $.css`
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
        border-radius: ${r}px;
        border: 1px solid transparent;
        background-clip: padding-box;

        ${(0,tA.addHoverState)($.css`
          cursor: pointer;
          background: ${a};
        `)};
      }
    }
  `})({thumbColor:(0,dP.getHexWithTransparency)(e.dropDown.default.inverse.content.value,80),thumbColorHover:e.dropDown.default.inverse.content.value})};

    ${(0,C.applyStylesForBreakpoints)($.css`
        position: fixed;
        width: 100vw;
        max-width: 100vw;
        max-height: 75vh;
        top: auto;
        bottom: 0;
        padding-block: 20px calc(20px + env(safe-area-inset-bottom));
        display: grid;
        row-gap: 16px;

        ${a&&$.css`
          transition: transform 250ms ease-out;
          transform: ${t?"translateY(0)":"translateY(100vw)"};
        `};
      `,"group2")};
  `};
`,dD={type:"typography",value:{fontFamily:"BBC Reith Sans",fontWeight:"Regular",lineHeight:24,fontSize:20,letterSpacing:"0%",paragraphSpacing:0,paragraphIndent:"0px",textCase:"none",textDecoration:"none"}},dM=$.default.li.withConfig({displayName:"SeriesDropdown.styles__SeriesDropdownListItemStyled",componentId:"sc-e5f755ae-3"})`
  ${({theme:e,$isSelected:t})=>$.css`
    position: relative;
    padding: 8px 16px;
    color: ${e.dropDown.default.inverse.content.value};
    cursor: pointer;
    white-space: nowrap;

    ${(0,k.applyTypography)(e.nav.topbar.level3.default)}

    ${(0,tA.addHoverState)($.css`
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

    ${(0,C.applyStylesForBreakpoints)($.css`
        color: ${t?e.product.defaultBG.value:e.text.onInverseBG.lowEmpasis.value};
        ${(0,k.applyTypography)(dD)};
        width: fit-content;
        padding-inline: 8px;
        padding-block: 4px;
        margin-inline: 16px;
      `,"group2")};
  `};
`,dR=$.default.div.withConfig({displayName:"SeriesDropdown.styles__SeriesDropdownCloseButtonContainerStyled",componentId:"sc-e5f755ae-4"})`
  ${({$isJsEnabled:e})=>$.css`
    display: none;

    ${e&&(0,C.applyStylesForBreakpoints)($.css`
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
`,dO=$.default.li.withConfig({displayName:"SeriesDropdown.styles__SeriesDropdownCloseButtonStyled",componentId:"sc-e5f755ae-5"})`
  ${({theme:e})=>$.css`
    display: none;

    ${(0,C.applyStylesForBreakpoints)($.css`
        display: grid;
        position: absolute;
        right: 0;
        top: 0;
        width: 32px;
        height: 32px;
        place-content: center;
        color: ${e.dropDown.default.inverse.content.value};
        background-color: ${e.dropDown.default.inverse.background.value};

        ${(0,tA.addHoverState)($.css`
          cursor: pointer;
          background-color: ${e.dropDown.hover.inverse.background.value};
        `)}
      `,"group2")};
  `};
`,dG=function(){let[e,a]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{a(!0)},[]),e},dU=({items:e,selectedIndex:i,onClose:o,isOpen:n})=>{let r=dG(),l=(0,t.useRef)(null),s=({key:e,target:t})=>{let{current:a}=l;if(a){let i=Array.from(a.querySelectorAll("a"));switch(e){case"ArrowDown":{let e=(i.indexOf(t)+1)%i.length,a=i[e];return a&&a?.focus&&a.focus()}case"ArrowUp":{let e=(i.indexOf(t)-1+i.length)%i.length,a=i[e];return a&&a?.focus&&a.focus()}case"Home":{let[e]=i;return e&&e?.focus&&e.focus()}case"End":{let[e]=i.reverse();return e&&e?.focus&&e.focus()}}}};return(0,a.jsxs)(dL,{role:"menu",ref:l,onKeyDown:s,$isOpen:n,$isJsEnabled:r,children:[(0,a.jsx)(dR,{$isJsEnabled:r,children:(0,a.jsx)(dO,{role:"button",onClick:o,children:(0,a.jsx)(w.default,{name:"actions:close",width:20,height:20})})}),e.map(({path:e,seriesNumber:t},o)=>(0,a.jsx)(dM,{id:`series-dropdown-option-${o}`,role:"menuitem",$isSelected:o===i,children:(0,a.jsx)(b.default,{href:e,tabIndex:0,children:`Series ${t}`})},o))]})},dH=({items:e=[]})=>{let i=(0,t.useRef)(null),[o,n]=(0,t.useState)(!!(i.current&&i.current.open)),{query:r}=(0,d.useAppRouter)(),{slug:l}=r,s=(0,nu.getStringFromSlug)(l),p=(0,dS.default)(e,["seriesNumber"]),c=p.findIndex(({path:e})=>e.includes(s)),u=c>=0?c:0,g=p[u],m=()=>i.current&&i.current.removeAttribute("open");return(0,dA.useOutsideClicker)(i,m,"mousedown"),(0,a.jsxs)(dF,{ref:i,onToggle:()=>n(!!(i.current&&i.current.open)),onKeyDown:({key:e})=>"Escape"===e&&m(),children:[(0,a.jsxs)(dE,{"data-testid":"series-dropdown-button",children:[`Series ${g.seriesNumber}`,(0,a.jsx)(w.default,{name:o?"arrows:arrow-up":"arrows:arrow-down"})]}),(0,a.jsx)(dU,{items:e,selectedIndex:u,isOpen:o,onClose:m})]})},dW=({items:e=[]})=>e.length>1?(0,a.jsx)(dH,{items:e}):null,dz=(0,a3.forwardLayout)(e=>(0,a.jsx)(a7.default,{marginTop:16,marginBottom:16,group2:{marginTop:0,marginBottom:16},withBackground:!1,zIndex:"level1",children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:3,colSpan:12,group5:{colStart:2,colSpan:15},group3:{colStart:1,colSpan:21},group2:{colStart:1,colSpan:12},children:(0,a.jsx)(dW,{...e})})})})),dY=({images:e=[],uploadDate:t,...i})=>{let o=du.appConfig.getValue(dg.ConfigSettings.SiteUrl)||"localhost",{query:n}=(0,d.useAppRouter)(),{slug:r}=n,l=`${o}${(0,nu.getStringFromSlug)(r,!0)}`,[s]=e.filter(({model:{blocks:{type:e}}})=>"1:1-square"===e),p=(s?.model?.blocks?.src??"").replace("{recipe}","1024xn"),c=new Date(t),u=function(e){let{seriesTitle:t,seasonNumber:a,numberOfEpisodes:i,description:o,thumbnailUrl:n,datePublished:r,url:l}=e;return{"@context":"https://schema.org","@type":"TVSeason",name:`Series ${a}`,partOfSeries:{"@type":"TVSeries",name:t},seasonNumber:a,numberOfEpisodes:i,description:o,thumbnailUrl:n,datePublished:r,url:l,isAccessibleForFree:!1}}({thumbnailUrl:p,datePublished:isNaN(c.getTime())?void 0:c.toISOString().slice(0,10),url:l,...i});return(0,a.jsx)(dc.default,{children:(0,a.jsx)(Z.default,{children:(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(u)},id:"tv-season-schema"})})})},dq=(0,a3.forwardLayout)(e=>(0,a.jsx)(a7.default,{marginTop:32,marginBottom:120,group2:{marginTop:16},children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:3,colSpan:17,group5:{colStart:2,colSpan:22},group3:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:(0,a.jsx)(S.SeriesTabs,{...e})})})}));var dV=e.i(990983),dV=dV,dQ=e.i(524431);let dX=$.default.div.withConfig({displayName:"SeriesDescription.styles__SeriesDescriptionStyled",componentId:"sc-d4ebcc1b-0"})`
  display: grid;
  justify-items: start;
`,dK=$.default.p.withConfig({displayName:"SeriesDescription.styles__SeriesDescriptionContentStyled",componentId:"sc-d4ebcc1b-1"})`
  ${({theme:e,$isExpanded:t})=>$.css`
    color: ${e.text.onInverseBG.default.value};
    ${(0,k.applyTypography)(e.longFormVideo.seriesDescription.bpLarge)};

    ${(0,C.applyStylesForBreakpoints)($.css`
        ${!t&&$.css`
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        `};

        ${(0,k.applyTypography)(e.longFormVideo.seriesDescription.bpSmall)};
      `,"group2")};
  `};
`,dZ=$.default.button.withConfig({displayName:"SeriesDescription.styles__SeriesDescriptionButtonStyled",componentId:"sc-d4ebcc1b-2"})`
  ${({theme:e,$isVisible:t})=>$.css`
    display: none;

    ${(0,C.applyStylesForBreakpoints)($.css`
        color: ${e.interactive5.onInverseBG.default.value};
        padding-block: 12px;
        display: ${t?"block":"none"};

        ${(0,tA.addHoverState)($.css`
          cursor: pointer;
          text-decoration: underline;
        `)};
        ${(0,k.applyTypography)(e.textLink.large.regular.bpLarge)};
      `,"group2")};
  `}
`,dJ=({description:e,testId:i})=>{let o=(0,t.useRef)(null),[n,r]=(0,t.useState)(!1),l=n?"View less":"View more",s=function(e,a){let[i,o]=(0,t.useState)(!0);return(0,eg.useResizeObserver)(e,()=>{let{current:t}=e;if(t){let e=t.scrollHeight>t.clientHeight;a||o(e)}},250),i}(o,n);return(0,a.jsxs)(dX,{"data-testid":i,children:[(0,a.jsx)(dK,{ref:o,$isExpanded:n,children:e}),(0,a.jsx)(dZ,{onClick:()=>r(e=>!e),$isVisible:s,children:l})]})},d0=$.default.div.withConfig({displayName:"SeriesTopComponent.styles__SeriesTopComponentStyled",componentId:"sc-e9ee723f-0"})`
  display: grid;
  row-gap: 24px;

  ${(0,C.applyStylesForBreakpoints)($.css`
      row-gap: 16px;
    `,"group2")};
`,d1=$.default.div.withConfig({displayName:"SeriesTopComponent.styles__SeriesTopComponentInnerStyled",componentId:"sc-e9ee723f-1"})`
  display: grid;
  row-gap: 16px;
`,d2=$.default.div.withConfig({displayName:"SeriesTopComponent.styles__SeriesMetadataStyled",componentId:"sc-e9ee723f-2"})`
  ${({theme:e})=>$.css`
    display: flex;
    column-gap: 18px;
    color: ${e.text.onInverseBG.default.value};
    ${(0,k.applyTypography)(e.metaData.large)};
  `};
`,d4=$.default.span.withConfig({displayName:"SeriesTopComponent.styles__SeriesMetadataItemStyled",componentId:"sc-e9ee723f-3"})`
  position: relative;

  &:not(:last-child)::after {
    content: '•';
    position: absolute;
    right: -12px;
  }
`,d6=({title:e,description:t,releaseYear:i,listOfEpisodes:o,rating:n,avProperties:r,contentTopic:l,trailer:s})=>{let d=(0,p.usePopup)(),c=(0,dQ.useLogMparticleEvent)(),{id:u,title:g}=s??{},m=o.length,y=(0,dV.default)(r);y.av_content_id=u,y.av_episode=g;let f={eventGrouping:"av_lfv_cta",eventProperties:{item_name:"Watch trailer",item_type:"trailer",...y,content_topic:l}};return(0,a.jsxs)(d0,{children:[(0,a.jsxs)(d1,{children:[(0,a.jsxs)(d2,{children:[i&&(0,a.jsx)(d4,{children:i}),m>0&&(0,a.jsx)(d4,{children:`${m} ${m>1?"Episodes":"Episode"}`}),n&&(0,a.jsx)(d4,{children:n})]}),(0,a.jsx)(S.SeriesCtas,{title:e,episodes:o,onTrailerPlay:()=>{window.analytics.sendEvent(f),c("docs.trailer.select",{title:g,page:window.location.toString(),referrer:document.referrer,userAgent:navigator.userAgent}),d({variant:"trailer",popupProps:{trailer:s}})},isTrailerAvailable:!!s,avProperties:r,contentTopic:l})]}),(0,a.jsx)(dJ,{description:t})]})},d3=(0,a3.forwardLayout)(e=>(0,a.jsx)(a7.default,{marginTop:16,marginBottom:32,group2:{marginTop:16,marginBottom:0},withBackground:!1,children:(0,a.jsx)(a9.default,{columns:24,group2:{columns:12},children:(0,a.jsx)(ie.default,{colStart:3,colSpan:12,group5:{colStart:2,colSpan:15},group3:{colStart:1,colSpan:21},group2:{colStart:1,colSpan:12},children:(0,a.jsx)(d6,{...e})})})})),d8=$.default.article.withConfig({displayName:"VideoSeriesPage.styles__VideoSeriesPageStyled",componentId:"sc-51a0aba6-0"})`
  ${({theme:e})=>$.css`
    background-color: ${e.container.onInverseBG2.value};
    min-height: 90vh;
    overflow: auto;
  `};
`,d5=e=>{let{isSubscriptionAllowed:t}=(0,x.useSubscriptionContext)(),o="single-column",{title:n,brand:r,description:l,rating:s,releaseYear:d,episodes:p,contributors:c,productionCompany:u,distributor:g,id:m,categories:y,trailer:f,seasonNumber:h,totalEpisodes:b,lastPublishedAt:S}=e,{listOfSeries:v,images:w,title:j}=r,{data:$}=p,C=l?.mediumDescription||l?.shortDescription||"",k=(0,dS.default)(v,"seriesNumber"),I={av_content_type:i.ContentType.LongFormVideo,av_content_id:m,av_show:j,av_show_season:n},_=y.length?y.join(","):"";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(dY,{seasonNumber:h,seriesTitle:j,description:C,numberOfEpisodes:b,uploadDate:new Date(S).toISOString(),images:w}),(0,a.jsxs)(d8,{children:[(0,a.jsx)(dk,{layout:o,images:w,title:j,seasonNumber:h}),(0,a.jsx)(dN,{layout:o,images:w,title:j,seasonNumber:h}),(0,a.jsx)(dz,{layout:o,items:k}),(0,a.jsx)(d3,{layout:o,title:n,description:C,rating:s,releaseYear:d,listOfEpisodes:$,avProperties:I,contentTopic:_,trailer:f}),(0,a.jsx)(dq,{layout:o,episodes:$,contributors:c,productionCompany:u,distributionCompany:g,isSubscriptionAllowed:t,seriesName:j,seasonNumber:h})]})]})},d7=({contents:e})=>{let{model:t}=e.find(({type:e})=>"docs-series"===e)||{};return t?(0,a.jsx)(d5,{...t}):null};var d9=e.i(362132),pe=e.i(51086),pt=e.i(633430),pt=pt;let pa=$.default.div.withConfig({displayName:"SearchResultPage.styles__SearchPageWrapperStyled",componentId:"sc-4ec22e4c-0"})`
  display: flex;
  justify-content: center;
`,pi=$.default.div.withConfig({displayName:"SearchResultPage.styles__SearchPageContainerStyled",componentId:"sc-4ec22e4c-1"})`
  /* TODO: find out the width */
  width: 80%;
  padding: 40px 0 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(0,C.applyStylesForBreakpoints)($.css`
      padding-top: 24px;
      width: 90%;
    `,"group2")}
`,po=$.default.div.withConfig({displayName:"SearchResultPage.styles__SearchPageContentStyled",componentId:"sc-4ec22e4c-2"})`
  padding: 24px 0;
  margin: 40px 0;
  width: 100%;

  ${(0,C.applyStylesForBreakpoints)($.css`
      padding: 0;
      margin-top: 24px;
    `,"group2")}
`,pn=$.default.div.withConfig({displayName:"SearchResultPage.styles__NoResultsWrapperStyled",componentId:"sc-4ec22e4c-3"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,pr=$.default.p.withConfig({displayName:"SearchResultPage.styles__NoResultsText",componentId:"sc-4ec22e4c-4"})`
  ${({theme:e})=>$.css`
    margin-bottom: 32px;
    text-align: center;
    ${(0,k.applyTypography)(e.bodyCopy.default.bpLarge)};

    strong {
      ${(0,k.applyTypography)(e.bodyCopy.emphasised.bpLarge)};
    }
  `}
`,pl=$.default.h2.withConfig({displayName:"SearchResultPage.styles__NoResultsHeaderStyled",componentId:"sc-4ec22e4c-5"})`
  ${({theme:e})=>(0,k.applyTypography)(e.generic.headline.xSmall.bpLarge)};
  margin-bottom: 16px;
`,ps=$.default.ul.withConfig({displayName:"SearchResultPage.styles__NoResultsSuggestionsStyled",componentId:"sc-4ec22e4c-6"})`
  ${({theme:e})=>$.css`
    list-style-type: disc;
    ${(0,k.applyTypography)(e.bulletList.default.bpLarge)};
    ${(0,C.applyStylesForBreakpoints)($.css`
        ${(0,k.applyTypography)(e.bulletList.default.bpSmall)};
      `,"group2")}
  `}
`;$.default.div.withConfig({displayName:"SearchResultPage.styles__ResultListContainerStyled",componentId:"sc-4ec22e4c-7"})`
  display: grid;
  gap: 24px;
`;let pd=(0,t.memo)(({searchText:e})=>(0,a.jsxs)(pn,{children:[(0,a.jsxs)(pr,{children:["Sorry there are no results for ",(0,a.jsxs)("strong",{"data-testid":"no-results-keyword",children:["'",e,"'"]})]}),(0,a.jsx)(pl,{children:"Suggestions"}),(0,a.jsxs)(ps,{children:[(0,a.jsx)("li",{children:"Make sure all words are spelled correctly"}),(0,a.jsx)("li",{children:"Try different keywords"}),(0,a.jsx)("li",{children:"Try more general keywords"})]})]})),pp=({searchText:e,submittedSearchText:i,suggestions:o,onSearch:n,onSearchTextChange:r,data:l})=>{let{results:s,...d}=l,p=(0,t.useRef)(null),c=(0,t.useRef)(null);return(0,a.jsx)(pa,{children:(0,a.jsxs)(pi,{children:[(0,a.jsx)(sQ.default,{searchText:e,onSearchTextChange:r,suggestions:o,onSearch:n,ref:p}),(0,a.jsxs)(po,{children:[(0,a.jsx)(pt.default,{value:{submittedSearchText:i,inputRef:p},children:(0,a.jsx)(pe.default,{content:s,controlButtonsPortalRef:c,paginationData:d})}),c.current&&(0,l_.createPortal)((0,a.jsx)(pd,{searchText:i}),c.current)]})]})})};var pc=e.i(581620),pu=e.i(421510),pg=e.i(913122),pm=e.i(699213),py=e.i(799306),pf=e.i(623886);function ph(e){(0,pm.default)(1,arguments);var t=(0,pf.default)(e),a=t.getUTCDay();return t.setUTCDate(t.getUTCDate()-(7*(a<1)+a-1)),t.setUTCHours(0,0,0,0),t}function px(e){(0,pm.default)(1,arguments);var t=(0,pf.default)(e),a=t.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(a+1,0,4),i.setUTCHours(0,0,0,0);var o=ph(i),n=new Date(0);n.setUTCFullYear(a,0,4),n.setUTCHours(0,0,0,0);var r=ph(n);return t.getTime()>=o.getTime()?a+1:t.getTime()>=r.getTime()?a:a-1}var pb=e.i(871944);function pS(e,t){(0,pm.default)(1,arguments);var a,i,o,n,r,l,s,d,p=(0,pb.getDefaultOptions)(),c=(0,py.default)(null!=(a=null!=(i=null!=(o=null!=(n=null==t?void 0:t.weekStartsOn)?n:null==t||null==(r=t.locale)||null==(l=r.options)?void 0:l.weekStartsOn)?o:p.weekStartsOn)?i:null==(s=p.locale)||null==(d=s.options)?void 0:d.weekStartsOn)?a:0);if(!(c>=0&&c<=6))throw RangeError("weekStartsOn must be between 0 and 6 inclusively");var u=(0,pf.default)(e),g=u.getUTCDay();return u.setUTCDate(u.getUTCDate()-(7*(g<c)+g-c)),u.setUTCHours(0,0,0,0),u}function pv(e,t){(0,pm.default)(1,arguments);var a,i,o,n,r,l,s,d,p=(0,pf.default)(e),c=p.getUTCFullYear(),u=(0,pb.getDefaultOptions)(),g=(0,py.default)(null!=(a=null!=(i=null!=(o=null!=(n=null==t?void 0:t.firstWeekContainsDate)?n:null==t||null==(r=t.locale)||null==(l=r.options)?void 0:l.firstWeekContainsDate)?o:u.firstWeekContainsDate)?i:null==(s=u.locale)||null==(d=s.options)?void 0:d.firstWeekContainsDate)?a:1);if(!(g>=1&&g<=7))throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(c+1,0,g),m.setUTCHours(0,0,0,0);var y=pS(m,t),f=new Date(0);f.setUTCFullYear(c,0,g),f.setUTCHours(0,0,0,0);var h=pS(f,t);return p.getTime()>=y.getTime()?c+1:p.getTime()>=h.getTime()?c:c-1}function pw(e,t){for(var a=Math.abs(e).toString();a.length<t;)a="0"+a;return(e<0?"-":"")+a}let pj=function(e,t){var a=e.getUTCFullYear(),i=a>0?a:1-a;return pw("yy"===t?i%100:i,t.length)},p$=function(e,t){var a=e.getUTCMonth();return"M"===t?String(a+1):pw(a+1,2)},pC=function(e,t){var a=t.length;return pw(Math.floor(e.getUTCMilliseconds()*Math.pow(10,a-3)),t.length)};function pk(e,t){var a=e>0?"-":"+",i=Math.abs(e),o=Math.floor(i/60),n=i%60;return 0===n?a+String(o):a+String(o)+(t||"")+pw(n,2)}function pI(e,t){return e%60==0?(e>0?"-":"+")+pw(Math.abs(e)/60,2):p_(e,t)}function p_(e,t){var a=Math.abs(e);return(e>0?"-":"+")+pw(Math.floor(a/60),2)+(t||"")+pw(a%60,2)}let pT={G:function(e,t,a){var i=+(e.getUTCFullYear()>0);switch(t){case"G":case"GG":case"GGG":return a.era(i,{width:"abbreviated"});case"GGGGG":return a.era(i,{width:"narrow"});default:return a.era(i,{width:"wide"})}},y:function(e,t,a){if("yo"===t){var i=e.getUTCFullYear();return a.ordinalNumber(i>0?i:1-i,{unit:"year"})}return pj(e,t)},Y:function(e,t,a,i){var o=pv(e,i),n=o>0?o:1-o;return"YY"===t?pw(n%100,2):"Yo"===t?a.ordinalNumber(n,{unit:"year"}):pw(n,t.length)},R:function(e,t){return pw(px(e),t.length)},u:function(e,t){return pw(e.getUTCFullYear(),t.length)},Q:function(e,t,a){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(i);case"QQ":return pw(i,2);case"Qo":return a.ordinalNumber(i,{unit:"quarter"});case"QQQ":return a.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return a.quarter(i,{width:"narrow",context:"formatting"});default:return a.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,t,a){var i=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(i);case"qq":return pw(i,2);case"qo":return a.ordinalNumber(i,{unit:"quarter"});case"qqq":return a.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return a.quarter(i,{width:"narrow",context:"standalone"});default:return a.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,t,a){var i=e.getUTCMonth();switch(t){case"M":case"MM":return p$(e,t);case"Mo":return a.ordinalNumber(i+1,{unit:"month"});case"MMM":return a.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return a.month(i,{width:"narrow",context:"formatting"});default:return a.month(i,{width:"wide",context:"formatting"})}},L:function(e,t,a){var i=e.getUTCMonth();switch(t){case"L":return String(i+1);case"LL":return pw(i+1,2);case"Lo":return a.ordinalNumber(i+1,{unit:"month"});case"LLL":return a.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return a.month(i,{width:"narrow",context:"standalone"});default:return a.month(i,{width:"wide",context:"standalone"})}},w:function(e,t,a,i){var o=function(e,t){(0,pm.default)(1,arguments);var a=(0,pf.default)(e);return Math.round((pS(a,t).getTime()-(function(e,t){(0,pm.default)(1,arguments);var a,i,o,n,r,l,s,d,p=(0,pb.getDefaultOptions)(),c=(0,py.default)(null!=(a=null!=(i=null!=(o=null!=(n=null==t?void 0:t.firstWeekContainsDate)?n:null==t||null==(r=t.locale)||null==(l=r.options)?void 0:l.firstWeekContainsDate)?o:p.firstWeekContainsDate)?i:null==(s=p.locale)||null==(d=s.options)?void 0:d.firstWeekContainsDate)?a:1),u=pv(e,t),g=new Date(0);return g.setUTCFullYear(u,0,c),g.setUTCHours(0,0,0,0),pS(g,t)})(a,t).getTime())/6048e5)+1}(e,i);return"wo"===t?a.ordinalNumber(o,{unit:"week"}):pw(o,t.length)},I:function(e,t,a){var i=function(e){(0,pm.default)(1,arguments);var t=(0,pf.default)(e);return Math.round((ph(t).getTime()-(function(e){(0,pm.default)(1,arguments);var t=px(e),a=new Date(0);return a.setUTCFullYear(t,0,4),a.setUTCHours(0,0,0,0),ph(a)})(t).getTime())/6048e5)+1}(e);return"Io"===t?a.ordinalNumber(i,{unit:"week"}):pw(i,t.length)},d:function(e,t,a){var i,o;return"do"===t?a.ordinalNumber(e.getUTCDate(),{unit:"date"}):(i=e,o=t,pw(i.getUTCDate(),o.length))},D:function(e,t,a){var i=function(e){(0,pm.default)(1,arguments);var t=(0,pf.default)(e),a=t.getTime();return t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0),Math.floor((a-t.getTime())/864e5)+1}(e);return"Do"===t?a.ordinalNumber(i,{unit:"dayOfYear"}):pw(i,t.length)},E:function(e,t,a){var i=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return a.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return a.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return a.day(i,{width:"short",context:"formatting"});default:return a.day(i,{width:"wide",context:"formatting"})}},e:function(e,t,a,i){var o=e.getUTCDay(),n=(o-i.weekStartsOn+8)%7||7;switch(t){case"e":return String(n);case"ee":return pw(n,2);case"eo":return a.ordinalNumber(n,{unit:"day"});case"eee":return a.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return a.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return a.day(o,{width:"short",context:"formatting"});default:return a.day(o,{width:"wide",context:"formatting"})}},c:function(e,t,a,i){var o=e.getUTCDay(),n=(o-i.weekStartsOn+8)%7||7;switch(t){case"c":return String(n);case"cc":return pw(n,t.length);case"co":return a.ordinalNumber(n,{unit:"day"});case"ccc":return a.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return a.day(o,{width:"narrow",context:"standalone"});case"cccccc":return a.day(o,{width:"short",context:"standalone"});default:return a.day(o,{width:"wide",context:"standalone"})}},i:function(e,t,a){var i=e.getUTCDay(),o=0===i?7:i;switch(t){case"i":return String(o);case"ii":return pw(o,t.length);case"io":return a.ordinalNumber(o,{unit:"day"});case"iii":return a.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return a.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return a.day(i,{width:"short",context:"formatting"});default:return a.day(i,{width:"wide",context:"formatting"})}},a:function(e,t,a){var i=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return a.dayPeriod(i,{width:"narrow",context:"formatting"});default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,t,a){var i,o=e.getUTCHours();switch(i=12===o?"noon":0===o?"midnight":o/12>=1?"pm":"am",t){case"b":case"bb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return a.dayPeriod(i,{width:"narrow",context:"formatting"});default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,t,a){var i,o=e.getUTCHours();switch(i=o>=17?"evening":o>=12?"afternoon":o>=4?"morning":"night",t){case"B":case"BB":case"BBB":return a.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return a.dayPeriod(i,{width:"narrow",context:"formatting"});default:return a.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,t,a){if("ho"===t){var i,o,n=e.getUTCHours()%12;return 0===n&&(n=12),a.ordinalNumber(n,{unit:"hour"})}return i=e,o=t,pw(i.getUTCHours()%12||12,o.length)},H:function(e,t,a){var i,o;return"Ho"===t?a.ordinalNumber(e.getUTCHours(),{unit:"hour"}):(i=e,o=t,pw(i.getUTCHours(),o.length))},K:function(e,t,a){var i=e.getUTCHours()%12;return"Ko"===t?a.ordinalNumber(i,{unit:"hour"}):pw(i,t.length)},k:function(e,t,a){var i=e.getUTCHours();return(0===i&&(i=24),"ko"===t)?a.ordinalNumber(i,{unit:"hour"}):pw(i,t.length)},m:function(e,t,a){var i,o;return"mo"===t?a.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):(i=e,o=t,pw(i.getUTCMinutes(),o.length))},s:function(e,t,a){var i,o;return"so"===t?a.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):(i=e,o=t,pw(i.getUTCSeconds(),o.length))},S:function(e,t){return pC(e,t)},X:function(e,t,a,i){var o=(i._originalDate||e).getTimezoneOffset();if(0===o)return"Z";switch(t){case"X":return pI(o);case"XXXX":case"XX":return p_(o);default:return p_(o,":")}},x:function(e,t,a,i){var o=(i._originalDate||e).getTimezoneOffset();switch(t){case"x":return pI(o);case"xxxx":case"xx":return p_(o);default:return p_(o,":")}},O:function(e,t,a,i){var o=(i._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+pk(o,":");default:return"GMT"+p_(o,":")}},z:function(e,t,a,i){var o=(i._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+pk(o,":");default:return"GMT"+p_(o,":")}},t:function(e,t,a,i){return pw(Math.floor((i._originalDate||e).getTime()/1e3),t.length)},T:function(e,t,a,i){return pw((i._originalDate||e).getTime(),t.length)}};var pB=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},pN=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}};let pA={p:pN,P:function(e,t){var a,i=e.match(/(P+)(p+)?/)||[],o=i[1],n=i[2];if(!n)return pB(e,t);switch(o){case"P":a=t.dateTime({width:"short"});break;case"PP":a=t.dateTime({width:"medium"});break;case"PPP":a=t.dateTime({width:"long"});break;default:a=t.dateTime({width:"full"})}return a.replace("{{date}}",pB(o,t)).replace("{{time}}",pN(n,t))}};var pP=e.i(736641),pF=["D","DD"],pE=["YY","YYYY"];function pL(e,t,a){if("YYYY"===e)throw RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(a,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(a,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(a,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(a,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var pD=e.i(67708),pM=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,pR=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,pO=/^'([^]*?)'?$/,pG=/''/g,pU=/[a-zA-Z]/;function pH(e,t,a){(0,pm.default)(2,arguments);var i,o,n,r,l,s,d,p,c,u,g,m,y,f,h,x,b,S,v=String(t),w=(0,pb.getDefaultOptions)(),j=null!=(i=null!=(o=null==a?void 0:a.locale)?o:w.locale)?i:pD.default,$=(0,py.default)(null!=(n=null!=(r=null!=(l=null!=(s=null==a?void 0:a.firstWeekContainsDate)?s:null==a||null==(d=a.locale)||null==(p=d.options)?void 0:p.firstWeekContainsDate)?l:w.firstWeekContainsDate)?r:null==(c=w.locale)||null==(u=c.options)?void 0:u.firstWeekContainsDate)?n:1);if(!($>=1&&$<=7))throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var C=(0,py.default)(null!=(g=null!=(m=null!=(y=null!=(f=null==a?void 0:a.weekStartsOn)?f:null==a||null==(h=a.locale)||null==(x=h.options)?void 0:x.weekStartsOn)?y:w.weekStartsOn)?m:null==(b=w.locale)||null==(S=b.options)?void 0:S.weekStartsOn)?g:0);if(!(C>=0&&C<=6))throw RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!j.localize)throw RangeError("locale must contain localize property");if(!j.formatLong)throw RangeError("locale must contain formatLong property");var k=(0,pf.default)(e);if(!(0,pu.default)(k))throw RangeError("Invalid time value");var I=(0,pP.default)(k),_=function(e,t){(0,pm.default)(2,arguments);var a=(0,py.default)(t);return(0,pg.default)(e,-a)}(k,I),T={firstWeekContainsDate:$,weekStartsOn:C,locale:j,_originalDate:k};return v.match(pR).map(function(e){var t=e[0];return"p"===t||"P"===t?(0,pA[t])(e,j.formatLong):e}).join("").match(pM).map(function(i){if("''"===i)return"'";var o,n,r=i[0];if("'"===r){return(n=(o=i).match(pO))?n[1].replace(pG,"'"):o}var l=pT[r];if(l)return null!=a&&a.useAdditionalWeekYearTokens||-1===pE.indexOf(i)||pL(i,t,String(e)),null!=a&&a.useAdditionalDayOfYearTokens||-1===pF.indexOf(i)||pL(i,t,String(e)),l(_,i,j.localize,T);if(r.match(pU))throw RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return i}).join("")}let pW=$.default.nav.withConfig({displayName:"Breadcrumbs.styles__BreadcrumbsContainerStyled",componentId:"sc-7239d51e-0"})`
  ${({theme:e})=>$.css`
    ${(0,k.applyTypography)(e.textLink.large.regular.bpLarge)};
    padding: 0;

    & a:hover {
      text-decoration: underline;
    }
    ${(0,C.applyStylesForBreakpoints)($.css`
        margin-left: 0;
      `,"group2")};
  `}
`,pz=$.default.ul.withConfig({displayName:"Breadcrumbs.styles__BreadcrumbsListStyled",componentId:"sc-7239d51e-1"})`
  display: inline-flex;
  gap: 8px;
  flex-wrap: wrap;

  svg {
    display: inline-block;
    vertical-align: text-top;
    width: 24px;
  }
`,pY=$.default.li.withConfig({displayName:"Breadcrumbs.styles__BreadcrumbsListItemStyled",componentId:"sc-7239d51e-2"})`
  display: flex;
  gap: 8px;
  padding: 6px 0;
`,pq=({items:e})=>(0,a.jsx)(pW,{children:(0,a.jsx)(pz,{children:e.map(({title:t,slug:i},o)=>(0,a.jsxs)(pY,{children:[(0,a.jsx)(re.default,{condition:!!i,wrapper:e=>(0,a.jsx)(b.default,{href:i,analyticsProps:{item_name:t,item_type:"breadcrumbs"},children:e}),children:(0,a.jsx)("span",{children:t})}),o+1<e.length&&(0,a.jsx)(w.default,{testId:"section-title-chevron",name:"arrows:chevron-right"})]},`breadcrumb-${o}`))})}),pV=$.default.div.withConfig({displayName:"DaySelector.styles__SelectorGridStyled",componentId:"sc-c70333cb-0"})`
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(4, 248px);
  grid-auto-flow: column;
  width: fit-content;
  row-gap: 8px;

  ${(0,C.applyStylesForBreakpoints)($.css`
      grid-template-columns: repeat(4, 232px);
    `,"group5")}

  ${(0,C.applyStylesForBreakpoints)($.css`
      grid-template-rows: repeat(8, 1fr);
      grid-template-columns: repeat(4, 172px);
    `,"group4")}

  ${(0,C.applyStylesForBreakpoints)($.css`
      grid-template-rows: repeat(11, 1fr);
      grid-template-columns: repeat(3, 178px);
    `,"group3")}

  ${(0,C.applyStylesForBreakpoints)($.css`
      grid-template-rows: repeat(16, 1fr);
      grid-template-columns: repeat(2, 156px);
      row-gap: 16px;
    `,"group2")};
`,pQ=$.default.a.withConfig({displayName:"DaySelector.styles__SelectorDayStyled",componentId:"sc-c70333cb-1"})`
  ${({theme:e})=>$.css`
    display: block;
    ${(0,k.applyTypography)(e.textLink.large.regular.bpLarge)};
    color: ${e.interactive1.onDefaultBG.default.value};
    padding: 6px 0;

    &:hover {
      text-decoration: underline;
    }
  `}
`,pX=({year:e,month:t,day:i,basePath:o,onSelect:n})=>{let r=e=>String(e).padStart(2,"0"),l=`${i} ${pH(new Date(e,t-1),"MMMM")}`,s=`${o}/${r(t)}/${r(i)}`;return(0,a.jsx)(b.default,{styledAnchor:pQ,onClick:e=>{n&&(e.preventDefault(),n({month:t,day:i}))},href:s,analyticsProps:{item_name:`${l} ${e}`},children:l},`${t}-${i}`)},pK=({startDate:e,endDate:i=new Date,onSelect:o,basePath:n="/content-index"})=>{let r=(0,t.useMemo)(()=>(function(e,t=new Date){if(e>t)return[];let a=[];for(;e<=t;)a.push({month:e.getMonth()+1,day:e.getDate()}),e.setDate(e.getDate()+1);return a})(e,i),[e,i]),l=e.getFullYear();return(0,a.jsx)(pV,{children:r.map(({month:e,day:t})=>(0,a.jsx)(pX,{year:l,month:e,day:t,basePath:n,onSelect:o},`${e}-${t}`))})};var pZ=e.i(848e3);let pJ=(0,$.default)(ts.ContainerStyled).withConfig({displayName:"SeoArchiveMonthPage.styles__SeoArchiveMonthPageContainerStyled",componentId:"sc-dae2be30-0"})`
  gap: 0;
  ${(0,C.applyStylesForBreakpoints)($.css`
      padding: 0 16px;
    `,"group2")}
`,p0=$.default.h1.withConfig({displayName:"SeoArchiveMonthPage.styles__SeoArchiveMonthPageTitleStyled",componentId:"sc-dae2be30-1"})`
  ${({theme:e})=>$.css`
    ${(0,k.applyTypography)(e.nav.title.level3.default)};
    text-align: center;
    padding: 25px 0;

    ${(0,C.applyStylesForBreakpoints)($.css`
        ${(0,k.applyTypography)(e.nav.title.level3.defaultMobile)};
        padding: 12px 0;
      `,"group2")}
  `}
`,p1=({startDate:e,endDate:t})=>{let i=pH(e,"MMMM"),o=pH(e,"yyyy"),n=[{title:o,slug:`/${pZ.SEO_ARCHIVE_INDEX_SLUG}/${o}`},{title:i}];return(0,a.jsxs)(pJ,{$type:"wide",children:[(0,a.jsx)(p0,{children:`${pH(e,"MMMM yyyy")}`}),(0,a.jsxs)(a9.default,{columns:24,rowGap:16,group2:{columns:12},children:[(0,a.jsx)(ie.default,{colStart:3,colSpan:20,group5:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:(0,a.jsx)(pq,{items:n})}),(0,a.jsx)(ie.default,{colStart:3,colSpan:20,group5:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:(0,a.jsx)(pK,{startDate:e,endDate:t,basePath:`/${pZ.SEO_ARCHIVE_INDEX_SLUG}/${o}`})})]})]})},p2=function(...e){let[,,t]=e,{query:a}=(0,d.useAppRouter)(),{data:i=[],isLoading:n}=(0,o.default)(t),{page:r="1"}=a,l=Number(r);return{results:i.slice((l-1)*9,9*l),pageSize:9,total:i.length,isLoading:n,page:l}},p4=function(...e){let{type:t}=(0,tt.usePageData)();return(i.ContentType.SeoArchiveResultPage,p2)(...e)};var p6=e.i(452537),p6=p6;let p3=(0,$.default)(ts.ContainerStyled).withConfig({displayName:"SeoArchiveResultPage.styles__SeoArchiveResultPageContainerStyled",componentId:"sc-ad8eb281-0"})`
  gap: 0;
  ${(0,C.applyStylesForBreakpoints)($.css`
      padding: 0 16px;
    `,"group2")};
`,p8=$.default.div.withConfig({displayName:"SeoArchiveResultPage.styles__SeoArchiveResultsWrapperStyled",componentId:"sc-ad8eb281-1"})`
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`,p5=$.default.div.withConfig({displayName:"SeoArchiveResultPage.styles__SeoArchivePaginationWrapperStyled",componentId:"sc-ad8eb281-2"})`
  display: flex;
  justify-content: center;
`,p7=$.default.div.withConfig({displayName:"SeoArchiveResultPage.styles__SeoArchiveNoResultStyled",componentId:"sc-ad8eb281-3"})`
  ${({theme:e})=>$.css`
    display: flex;
    justify-content: center;
    ${(0,k.applyTypography)(e.headline.small.bpLarge)};

    ${(0,C.applyStylesForBreakpoints)($.css`
        ${(0,k.applyTypography)(e.headline.small.bpSmall)};
      `,"group2")};
  `}
`,p9=$.default.h1.withConfig({displayName:"SeoArchiveResultPage.styles__SeoArchiveResultPageTitleStyled",componentId:"sc-ad8eb281-4"})`
  ${({theme:e})=>$.css`
    ${(0,k.applyTypography)(e.nav.title.level3.default)};
    text-align: center;
    padding: 25px 0;

    ${(0,C.applyStylesForBreakpoints)($.css`
        ${(0,k.applyTypography)(e.nav.title.level3.defaultMobile)};
        padding: 12px 0;
      `,"group2")}
  `}
`,ce=({date:e,results:t,currentPage:i,pageSize:o,total:n,onPageChange:r})=>{let l=e.getMonth(),s=pH(e,"MMMM"),d=pH(e,"yyyy"),p=n>0,c=[{title:d,slug:`/${pZ.SEO_ARCHIVE_INDEX_SLUG}/${d}`},{title:s,slug:`/${pZ.SEO_ARCHIVE_INDEX_SLUG}/${d}/${l+1}`},{title:`${pH(e,"d")} ${s}`}];return(0,a.jsxs)(p3,{$type:"wide",children:[(0,a.jsx)(p9,{children:`${pH(e,"d MMMM yyyy")}`}),(0,a.jsx)(pq,{items:c}),(0,a.jsxs)(p8,{children:[!p&&(0,a.jsx)(p7,{children:"No results available for this date"}),t.map((e,i)=>(0,a.jsx)(ag.default,{...e,title:e.title,type:"liverpool",hideBottomBorder:i===t.length-1,formatType:"seo-archive"},`seo-archive-result-${i}`))]}),(0,a.jsx)(p5,{children:(0,a.jsx)(S.Pagination,{currentPage:i,itemsTotalCount:n,itemsPerPage:o,onPageChange:r,pageRangeDisplayed:pZ.SEO_ARCHIVE_ITEMS_PER_RESULTS_PAGE})})]})},ct=$.default.div.withConfig({displayName:"YearMonthSelector.styles__SelectorWrapperStyled",componentId:"sc-65239e8c-0"})``,ca=$.default.div.withConfig({displayName:"YearMonthSelector.styles__SelectorYearContainerStyled",componentId:"sc-65239e8c-1"})``,ci=$.default.div.withConfig({displayName:"YearMonthSelector.styles__SelectorYearStyled",componentId:"sc-65239e8c-2"})`
  ${({theme:e})=>$.css`
    ${(0,k.applyTypography)(e.generic.headline.small.bpLarge)};
    margin-bottom: 16px;
  `}
`,co=$.default.div.withConfig({displayName:"YearMonthSelector.styles__SelectorMonthsContainerStyled",componentId:"sc-65239e8c-3"})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  ${(0,C.applyStylesForBreakpoints)($.css`
      display: inline-flex;
      column-gap: 16px;
      row-gap: 12px;
      flex-direction: row;
      flex-wrap: wrap;
    `,"group2")}
`,cn=$.default.a.withConfig({displayName:"YearMonthSelector.styles__SelectorMonthStyled",componentId:"sc-65239e8c-4"})`
  ${({theme:e})=>$.css`
    display: inline-flex;
    ${(0,k.applyTypography)(e.textLink.large.regular.bpLarge)};
    color: ${e.interactive1.onDefaultBG.default.value};
    padding: 6px 0;

    &:hover {
      text-decoration: underline;
    }
  `}
`,cr=({startDate:e,endDate:i=new Date,onSelect:o,basePath:n="/content-index"})=>{let r=(0,t.useMemo)(()=>(function(e,t=new Date){if(e>t)throw Error("startDate must be before endDate");let a={},i=new Date(e.getFullYear(),e.getMonth(),1),o=new Date(t.getFullYear(),t.getMonth(),t.getDate());for(;i<o;){let e=i.getFullYear();a[e]||(a[e]=[]),a[e].push(i.getMonth()+1),i.setMonth(i.getMonth()+1)}return a})(e,i),[e,i]);return(0,a.jsx)(ct,{"data-testid":"year-month-selector",children:(0,a.jsx)(v.GridStyled,{$columns:[1,1,3,4,4,4],$gridGap:["16px","16px","40px","40px","40px","40px"],children:Object.keys(r).reverse().map(e=>(0,a.jsxs)(ca,{children:[(0,a.jsx)(ci,{children:e}),(0,a.jsx)(co,{children:r[e].map(t=>(0,a.jsx)(b.default,{styledAnchor:cn,onClick:a=>{var i;return i=Number(e),void(o&&(a.preventDefault(),o?.({year:i,month:t})))},href:`${n}/${e}/${String(t).padStart(2,"0")}`,disableAnalytics:!0,children:pH(new Date(Number(e),t-1),"MMMM")},`month-${t}`))})]},`year-${e}`))})})},cl=(0,$.default)(ts.ContainerStyled).withConfig({displayName:"SeoArchiveIndexPage.styles__SeoArchiveIndexPageContainerStyled",componentId:"sc-de5d92ff-0"})`
  gap: 0;
  ${(0,C.applyStylesForBreakpoints)($.css`
      padding: 0 16px;
    `,"group2")}
`,cs=$.default.h1.withConfig({displayName:"SeoArchiveIndexPage.styles__SeoArchiveIndexPageTitleStyled",componentId:"sc-de5d92ff-1"})`
  ${({theme:e})=>$.css`
    ${(0,k.applyTypography)(e.nav.title.level3.default)};
    text-align: center;
    padding: 25px 0;

    ${(0,C.applyStylesForBreakpoints)($.css`
        ${(0,k.applyTypography)(e.nav.title.level3.defaultMobile)};
        padding: 12px 0;
      `,"group2")}
  `}
`,cd={[i.ContentType.Article]:nw,[i.ContentType.Audio]:()=>{let{subtype:e}=(0,tt.usePageData)(),r=(0,te.useCurrentSlug)(),{data:l}=(0,o.default)(r),s=(0,t.useMemo)(()=>{switch(e){case i.ContentSubtype.Episode:return eB;case i.ContentSubtype.Brand:case i.ContentSubtype.Series:return e9}},[e]),d=(0,t.useRef)(null),p=(0,t.useRef)(!1),[c,u]=(0,eH.useBreakpoints)("AudioPage");return(0,t.useEffect)(()=>{u&&("group3"===c||"group4"===c||"group5"===c||"group6"===c)&&!p.current&&d.current&&(d.current.requestAd(),p.current=!0)},[c]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.default,{type:"top",deferRequest:!0,forwardedAdRef:d}),(0,a.jsx)(s,{...l})]})},[i.ContentType.BookmarksPage]:()=>{let e=(0,u.useFeatureFlag)("bookmarking"),t=(0,u.useFeatureFlag)("follow-brand-function");return e||t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t_,{isPreCurated:!1,isBookmarksPage:!0,title:"Saved",mainNavigation:[]}),(0,a.jsx)(S.SavedItemsPage,{})]}):(0,a.jsx)(ta.default,{})},[i.ContentType.FiveHundredPage]:()=>{let{statusCode:e}=(0,tt.usePageData)();return(0,a.jsx)(ta.default,{statusCode:e})},[i.ContentType.IndexPage]:s8,[i.ContentType.LongFormVideo]:()=>{let e=(0,x.useSubscriptionContext)(),n=(0,t.useMemo)(()=>e.isSubscriptionAllowed,[e.isSubscriptionAllowed]),{subtype:r}=(0,tt.usePageData)(),l=(0,te.useCurrentSlug)(),{data:s}=(0,o.default)(l),d=(0,t.useMemo)(()=>{switch(r){case i.ContentSubtype.Episode:return db;case i.ContentSubtype.Series:return d7}},[r]);return(0,sc.useIsAppLayoutEnabled)()?(0,a.jsx)(s4,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(nT,{isSubscriptionAllowed:n}),(0,a.jsx)(d,{...s})]})},[i.ContentType.NotFoundPage]:s4,[i.ContentType.SearchPage]:()=>{let[e,i]=(0,t.useState)(""),[o,n]=(0,t.useState)(""),{query:r,push:l}=(0,d.useAppRouter)(),{page:s="1",q:p}=r,c=Math.min(parseInt(s,10),pc.SEARCH_RESULTS_MAX_PAGES).toString(),u=(0,d9.getSearchUrl)({terms:(o||p)?.toString(),page:c}),{data:g}=(0,nP.default)(u),m=(0,eG.default)(async e=>await l((0,d9.getSearchUrl)({q:e})),500);return(0,t.useEffect)(()=>{i(p),n(p)},[p]),(0,a.jsx)(pp,{searchText:e||"",data:g,submittedSearchText:o,onSearch:m,onSearchTextChange:i})},[i.ContentType.SeoArchiveIndexPage]:()=>{let e=new Date(pZ.SEO_ARCHIVE_START_DATE);return(0,a.jsxs)(cl,{$type:"wide",children:[(0,a.jsx)(cs,{children:"BBC.com Content Index"}),(0,a.jsx)(cr,{startDate:e,basePath:`/${pZ.SEO_ARCHIVE_INDEX_SLUG}`})]})},[i.ContentType.SeoArchiveMonthPage]:()=>{let[e,t]=(0,te.useCurrentSlug)().slice(-2),i=new Date(Number(e),Number(t)-1,1),o=new Date(Number(e),Number(t),0),n=new Date,r=new Date(n);r.setDate(n.getDate()-1);let l=r<o?r:o;return(0,a.jsx)(p1,{startDate:i,endDate:l})},[i.ContentType.SeoArchiveResultPage]:()=>{let e=(0,te.useCurrentSlug)(),[t,i,o]=e.slice(-3),n=new Date(Number(t),Number(i)-1,Number(o)),r=pH(n,"d MMMM yyyy"),{total:l,pageSize:s,page:d,results:p}=p4({},void 0,e);return(0,a.jsx)(p6.default,{value:{page:d,keyword:r},children:(0,a.jsx)(ce,{results:p,pageSize:s,currentPage:d,date:n,total:l})})},[i.ContentType.TopicPage]:s8,[i.ContentType.Video]:nw},cp=(0,t.createContext)(cd),{Provider:cc}=cp;e.s(["usePagesContext",0,()=>(0,t.useContext)(cp)],279353)}]);