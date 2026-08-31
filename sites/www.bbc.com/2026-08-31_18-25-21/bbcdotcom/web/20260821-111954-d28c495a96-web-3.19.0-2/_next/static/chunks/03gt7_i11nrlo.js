(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,812345,e=>{"use strict";var t=e.i(168489);let a=(0,t.default)(()=>e.A(650607),{loadableGenerated:{modules:[986513]}}),l=(0,t.default)(()=>e.A(48593),{loadableGenerated:{modules:[418214]}}),n=(0,t.default)(()=>e.A(370277),{loadableGenerated:{modules:[858488]}}),i=(0,t.default)(()=>e.A(90278),{loadableGenerated:{modules:[941820]}}),o=(0,t.default)(()=>e.A(10662),{loadableGenerated:{modules:[126133]}}),s=(0,t.default)(()=>e.A(242924),{loadableGenerated:{modules:[789046]}}),r=(0,t.default)(()=>e.A(413120),{loadableGenerated:{modules:[629472]}}),d=(0,t.default)(()=>e.A(252838),{loadableGenerated:{modules:[826615]}}),c=(0,t.default)(()=>e.A(788686),{loadableGenerated:{modules:[759759]}}),u=(0,t.default)(()=>e.A(87758),{loadableGenerated:{modules:[624948]}}),p=(0,t.default)(()=>e.A(786799),{loadableGenerated:{modules:[978156]}}),g=(0,t.default)(()=>e.A(784525),{loadableGenerated:{modules:[848913]}}),f=(0,t.default)(()=>e.A(277576),{loadableGenerated:{modules:[793012]}}),m=(0,t.default)(()=>e.A(768052),{loadableGenerated:{modules:[313037]}}),h=(0,t.default)(()=>e.A(300810),{loadableGenerated:{modules:[448768]}}),y=(0,t.default)(()=>e.A(250904),{loadableGenerated:{modules:[781027]}}),S=(0,t.default)(()=>e.A(886105),{loadableGenerated:{modules:[630410]}}),v=(0,t.default)(()=>e.A(995184),{loadableGenerated:{modules:[913839]}}),b=(0,t.default)(()=>e.A(373788),{loadableGenerated:{modules:[948275]}}),x=(0,t.default)(()=>e.A(837652),{loadableGenerated:{modules:[320925]}}),$=(0,t.default)(()=>e.A(747401),{loadableGenerated:{modules:[843760]}}),_=(0,t.default)(()=>e.A(918987),{loadableGenerated:{modules:[419297]}}),w=(0,t.default)(()=>e.A(338140),{loadableGenerated:{modules:[70045]}}),I=(0,t.default)(()=>e.A(834577),{loadableGenerated:{modules:[79980]}}),T=(0,t.default)(()=>e.A(649857),{loadableGenerated:{modules:[402966]}}),C=(0,t.default)(()=>e.A(758068),{loadableGenerated:{modules:[963698]}}),A=(0,t.default)(()=>e.A(273528),{loadableGenerated:{modules:[302001]}}),k=(0,t.default)(()=>e.A(554740),{loadableGenerated:{modules:[859411]}}),G=(0,t.default)(()=>e.A(884690),{loadableGenerated:{modules:[689304]}}),B=(0,t.default)(()=>e.A(64898),{loadableGenerated:{modules:[948269]}}),E=(0,t.default)(()=>e.A(63325),{loadableGenerated:{modules:[299169]}}),N=(0,t.default)(()=>e.A(813116),{loadableGenerated:{modules:[419303]}}),j=(0,t.default)(()=>e.A(756465),{loadableGenerated:{modules:[990734]}}),O=(0,t.default)(()=>e.A(778933),{loadableGenerated:{modules:[830740]}}),R=(0,t.default)(()=>e.A(33632),{loadableGenerated:{modules:[462292]}}),L=(0,t.default)(()=>e.A(332619),{loadableGenerated:{modules:[142080]}}),H=(0,t.default)(()=>e.A(155649),{loadableGenerated:{modules:[925278]}}),F=(0,t.default)(()=>e.A(220252),{loadableGenerated:{modules:[81272]}});e.s(["COLLECTION_DICTIONARY",0,{alaska:a,alberta:l,california:n,connecticut:i,delaware:o,florida:s,georgia:r,guam:d,hawaii:c,idaho:u,illinois:p,indiana:g,iowa:f,kansas:m,kentucky:h,maine:y,massachusetts:S,montana:v,nebraska:b,nevada:x,newjersey:$,newyork:_,northcarolina:w,northdakota:I,ohio:T,oregon:C,pennsylvania:A,puertorico:k,southcarolina:G,southdakota:B,tennessee:E,texas:N,vermont:j,videosOfTheDay:()=>null,virginia:O,washington:R,westvirginia:L,wisconsin:H,wyoming:F},"SECTIONS_WITH_CUSTOM_TITLE_RULE",0,["kentucky"],"SECTIONS_WITH_LAYOUT",0,["alaska","alberta","california","connecticut","maine","montana","oregon","puertorico","virginia","vermont","washington"],"SECTIONS_WITH_LENGTH",0,["connecticut","florida","georgia","illinois","nevada","newyork","ohio","virginia"]])},828620,e=>{"use strict";e.s(["SECTIONS_WITH_CHEVRONS",0,["alberta","delaware","iowa","kentucky","louisiana","maryland","michigan","minnesota","newmexico","texas"]])},705832,494726,e=>{"use strict";var t=e.i(760814),a=e.i(339228),l=e.i(570549),n=e.i(828620),i=e.i(812345);let o=e=>e?e.replace(/ /g,"-").replace(/["';^=()!<>+[\]#,*&~]/g,"").toLowerCase():"";function s(e,t){return t.includes(e)}function r(e){let{type:t}=e;return n.SECTIONS_WITH_CHEVRONS.includes(t)}e.s(["getHasControlButtons",0,r,"getIsPromoSection",0,function(e){let{type:t}=e;return s(t,["oregon","montana","california"])},"getIsSectionInverse",0,function(e){let{style:t,isInverse:a,type:l}=e,n=s(l,["alberta","texas","hawaii","kentucky"]);return"dark"===t||a||n},"getShowSectionTitle",0,function(e){let{type:t,title:a}=e,l="string"==typeof a&&a.length>0,n=r(e);return!i.SECTIONS_WITH_CUSTOM_TITLE_RULE.includes(t)&&l||n},"getSponsorAdTargetingValues",0,({inverse:e,type:t,sectionTitle:a,content:l})=>{if("texas"!==t&&"montana"!==t&&"california"!==t)return null;let n=o(l[0]?.title),i=o(a);return{col:"montana"===t||"california"===t?n:"texas"===t?i||n:"",coll_scheme:e?"dark":"light",coll_type:e?`${t}-dark`:t,coll_name:i||n}},"isSectionTypeIncluded",0,s,"isValidSectionType",0,function(e){return e in i.COLLECTION_DICTIONARY}],494726),t.default.h2.withConfig({displayName:"Section.styles__SectionTitle",componentId:"sc-934b69c3-0"})`
  ${({theme:e})=>t.css`
    margin-top: 8px;
    margin-left: 16px;
    margin-bottom: 24px;
    ${(0,l.applyTypography)(e.sectionTitle.bpLarge)};
    color: ${e.text.default.value};
    ${(0,a.applyStylesForBreakpoints)(t.css`
        margin-bottom: 16px;
      `,"group1","group2")}
    ${(0,a.applyStylesForBreakpoints)(t.css`
        ${(0,l.applyTypography)(e.sectionTitle.bpSmall)};
      `,"group1")}
  `}
`;let d=t.default.section.withConfig({displayName:"Section.styles__SectionOuterStyled",componentId:"sc-934b69c3-1"})`
  ${({theme:e,$isInverse:l,$withPadding:n,$withMargin:i,$sectionType:o,$isNonPlayable:r,$includeHorizontalSeparator:d})=>t.css`
    display: grid;
    width: 100%;
    background-color: ${l?e.container.onInverseBG2.value:e.container.onDefaultBG4.value};

    ${n&&t.css`
      padding-block: 24px;

      ${(0,a.applyStylesForBreakpoints)(t.css`
          padding-block: 16px;
        `,"group2")};
    `}

    ${i&&t.css`
      margin-block: 48px;

      &:first-of-type {
        margin-top: 0;
      }

      ${(0,a.applyStylesForBreakpoints)(t.css`
          margin-block: 32px;

          &:first-of-type {
            margin-top: 0;
          }
        `,"group2")};
    `}

    ${!s(o,["kentucky","alabama"])&&t.css`
      &:last-of-type {
        margin-bottom: 120px;
      }
    `};

    ${!d&&!r&&t.css`
      &:first-of-type hr {
        display: none;
      }
    `};
  `}
`,c=t.default.div.withConfig({displayName:"Section.styles__SectionStyled",componentId:"sc-934b69c3-2"})`
  ${({$withPaddingBottom:e})=>t.css`
    max-width: 1280px;
    width: 100%;
    position: relative;

    ${e&&t.css`
      padding-bottom: 48px;
    `}

    ${(0,a.applyStylesForBreakpoints)(t.css`
        margin: 0 auto;
      `,"group6")}
  `};
`,u=t.default.div.withConfig({displayName:"Section.styles__SectionChevronContainerStyled",componentId:"sc-934b69c3-3"})`
  ${({theme:e,$isInverse:l,$isSponsored:n})=>t.css`
    padding: 14px 0;
    margin-left: auto;

    ${(0,a.applyStylesForBreakpoints)(t.css`
        padding: 0;
      `,"group2")}

    ${n&&t.css`
      position: absolute;
      top: -11px;
      right: 0;
      padding: 0;
      background-color: ${l?e.container.onInverseBG2.value:e.container.onDefaultBG4.value};

      ${(0,a.applyStylesForBreakpoints)(t.css`
          top: -15px;
          padding: 0;
        `,"group2")}
    `}
  `}
`;e.s(["SectionChevronContainerStyled",0,u,"SectionOuterStyled",0,d,"SectionStyled",0,c],705832)},303764,e=>{"use strict";var t=e.i(391398),a=e.i(117191),l=e.i(65739),n=e.i(893409);let i=({children:e,href:a,analytics:l})=>a?(0,t.jsx)(n.default,{href:a,analytics:l,children:e}):(0,t.jsx)("div",{children:e});var o=e.i(760814),s=e.i(339228),r=e.i(570549);let d=o.default.hr.withConfig({displayName:"SectionTitle.styles__HorizontalLineStyled",componentId:"sc-2dfed50c-0"})`
  ${({theme:e,$isInverse:t,$withMargin:a,$isFullWidth:l})=>o.css`
    margin: ${l?"0":"0 16px"};
    border-width: 0;
    height: 2px;
    width: 100%;
    background-color: ${e.divider[t?"lowEmphasis":"highEmphasis"].value};

    ${l&&o.css`
      display: block !important;
    `}

    ${a&&o.css`
      margin-bottom: 24px;
    `}
  `}
`,c=o.default.div.withConfig({displayName:"SectionTitle.styles__HorizontalWithChevronsStyled",componentId:"sc-2dfed50c-1"})`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,u=o.default.div.withConfig({displayName:"SectionTitle.styles__SectionTitleContainerStyled",componentId:"sc-2dfed50c-2"})`
  ${({$isSponsored:e,$withMarginBottom:t=!0})=>o.css`
    ${t&&o.css`
      margin-bottom: 24px;
    `};

    ${e&&o.css`
      padding-right: 16px;
      margin-bottom: 12px;
    `}

    ${t&&(0,s.applyStylesForBreakpoints)(o.css`
        margin-bottom: 16px;
      `,"group2")}
  `}
`,p=o.default.div.withConfig({displayName:"SectionTitle.styles__SectionTitleWrapperStyled",componentId:"sc-2dfed50c-3"})`
  ${({theme:e,$isFullWidth:t,$isInverse:a,$isSponsored:l,$justifyContent:n="space-between"})=>o.css`
    padding: ${t?"0":"0 16px"};
    color: ${a?e.text.onInverseBG.default.value:e.text.default.value};
    display: flex;
    align-items: start;
    justify-content: ${n};
    margin-top: 8px;

    ${l&&o.css`
      padding-right: 112px;
    `}

    ${(0,s.applyStylesForBreakpoints)(o.css`
        ${l&&o.css`
          transform: none;
        `}
      `,"group2")}
  `}
`,g=o.default.h3.withConfig({displayName:"SectionTitle.styles__SectionTitleStyled",componentId:"sc-2dfed50c-4"})`
  ${({theme:e,$isInverse:t,$variant:a,$shouldUnderline:l})=>o.css`
    svg {
      display: inline-block;
      vertical-align: ${"promoHeadline"===a?"middle":"text-top"};
      width: 20px;
      fill: ${t?e.interactive4.onInverseBG.default.value:e.interactive4.onDefaultBG.default.value};

      ${(0,s.applyStylesForBreakpoints)(o.css`
          width: 18px;
        `,"group2")}
    }

    color: ${t?e.text.onInverseBG.default.value:e.text.default.value};

    ${l&&o.css`
      &:hover {
        text-decoration: underline;
      }
    `}

    ${"promoHeadline"===a&&o.css`
      ${(0,r.applyTypography)(e.promoHeadline.veryLarge.default.bpLarge)};
    `}

    ${"default"===a&&o.css`
      ${(0,r.applyTypography)(e.sectionTitle.bpLarge)};
    `}

    ${(0,s.applyStylesForBreakpoints)(o.css`
        ${"promoHeadline"===a&&o.css`
          ${(0,r.applyTypography)(e.promoHeadline.veryLarge.default.bpSmall)};
        `}

        ${"default"===a&&o.css`
          ${(0,r.applyTypography)(e.sectionTitle.bpSmall)};
        `}
      `,"group2","group1")}
  `};
`,f=o.default.div.withConfig({displayName:"SectionTitle.styles__SectionSponsorStyled",componentId:"sc-2dfed50c-5"})`
  display: flex;
  justify-content: flex-end;
  margin: auto;

  ${(0,s.applyStylesForBreakpoints)(o.css`
      margin-top: 8px;
    `,"group2")}
`;e.s(["default",0,e=>{let{title:n,hasControlButtons:o=!1,testId:s,isInverse:r,titleAsHeadingTag:m=!0,isFullWidth:h=!1,href:y,variant:S,hrOverride:v,controlButtonsPortalRef:b,analytics:x,isSponsored:$,isTexas:_=!1,sponsorAdTargetingValues:w=null,withMarginBottom:I}=e,T=!!n||o,C=v??T;return(0,t.jsxs)(u,{$isSponsored:$,$withMarginBottom:I,children:[(0,t.jsx)(c,{...$?{ref:b}:{},children:C&&(0,t.jsx)(d,{$isSponsored:$,"data-testid":s&&s+"-line",$isInverse:r,$withMargin:!T,$isFullWidth:h})}),T&&(0,t.jsx)(p,{...!$?{ref:b}:{},...!n?{$justifyContent:"flex-end"}:{},$isSponsored:$,$isFullWidth:h,"data-testid":"section-title-wrapper",$href:y,children:n&&(0,t.jsx)(i,{href:y,analytics:x,children:(0,t.jsxs)(g,{$variant:S,as:m?"h2":"span","data-testid":s&&s+"-title",$isInverse:r,$shouldUnderline:!!y,children:[n,y&&(0,t.jsx)(l.default,{testId:"section-title-chevron",name:"arrows:chevron-right"})]})})}),$&&_&&(0,t.jsx)(f,{children:(0,t.jsx)(a.default,{type:"col",sponsorAdTargetingValues:w,isFullWidth:!1})})]})}],303764)},835381,369736,e=>{"use strict";var t=e.i(542383),a=e.i(57988),l=e.i(519894),n=e.i(788664),i=e.i(865029),o=e.i(508259),s=e.i(898229);let r={aside:"oklahoma","alaska-onward-journey":"alaska","ohio-onward-journey":"ohio",homepage:"nevada"},d=e=>({type:r[e],content:[]}),c=async e=>{try{let t=(0,i.getFedIdValue)("fedIDstudios_mparticle","fedID.studios_mparticle.id");if(!t)return o.logger.info(`No fedID found to generate mParticle recommendations for ${e}`),d(e);{let{data:{data:a}}=await (0,s.fetchClient)("page/recommended",{cache:"no-cache",params:{mParticleId:t,size:"5"},method:"GET"});return{type:r[e],content:a.map(({id:e,title:t,summary:a,path:l,indexImage:n,type:i,subtype:o,firstPublishedAt:s,lastPublishedAt:r})=>({id:e,title:t,description:a,href:l,image:n,tags:[],isLiveNow:!1,metadata:{contentType:i,subtype:o,firstUpdated:s,lastUpdated:r}}))}}}catch(t){return o.logger.warn(`Failed to fetch mParticle recommendations for ${e}`,t),d(e)}},u=function(e,t=!0){let{data:a=d(e),...l}=(0,n.default)(t?e:null,t?c:null);return{data:a,...l}};e.s(["default",0,u],369736);let p="mparticle_recommendations_cache",g=function(e,t=!0){let a=u(e,t);if(!t)return a;let l=(()=>{try{let e=sessionStorage.getItem(p);return e?JSON.parse(e):null}catch{return null}})();return l?{data:l,isLoading:!1,isValidating:!1,error:void 0,mutate:()=>Promise.resolve(l)}:(a.data&&a.data.content.length&&(e=>{try{sessionStorage.setItem(p,JSON.stringify(e))}catch{}})(a.data),a)};var f=e.i(704570),m=e.i(60119),h=e.i(240911);let y="mparticle_homepage_nevada",S="naive_recommendations",v="personalised_recommendations";e.s(["MPARTICLE_HOMEPAGE_NEVADA",0,y,"MPARTICLE_HOMEPAGE_NEVADA_CLICK",0,"mparticle_homepage_nevada_click","getNevadaExperimentCards",0,(e,t,a)=>a===S?e.slice(0,5):a===v?t.slice(0,5):[],"useHomePageNevadaExperimentRunning",0,(e=!1)=>{let a,n=(0,l.useFeatureFlag)("mparticle-homepage-nevada"),{activateExperiment:i,userContext:o}=(0,m.useServersideOptimizelyContext)(),{experiments:s}=(0,f.usePageData)(),r=s?.[y],{account:{hasPersonalizedContentConsent:d}}=(0,t.useConsent)(),c=!!r&&d&&n,{isLoading:u,data:p}=g("homepage",c&&r===v),h=(a=p?.content??[],c&&(r===S||a.length>0)),b={active:h,variant:r,activateExperiment:i,userContext:o,isLoading:u,personalizedContent:p?.content??[]};return e?b:h},"useIsHomePageNevadaExperiment",0,e=>{let[t]=(0,a.useCurrentSlug)();return t===h.BASE_SLUG&&"Recommended"===e}],835381)},900324,445793,885082,69286,828564,866417,44115,160763,e=>{"use strict";var t=e.i(391398),a=e.i(191788);function l({audioPageType:e,sectionNumber:t=0,content:a,innerCollections:n,link:i,paginationData:o,title:s,type:r,analyticsGroupNameOverride:d}){let c=e&&o?o.total:a.length||(n?.length?n?.map(e=>e.data).flat().length:0),u={group_type:`${r}-${c}`,group_position:t+1,group_item_count:c,...s?{group_name:s}:{},...i?{group_link:i}:{}};d&&(u.group_name=d);let p={"data-analytics-group":!0,"data-analytics_group_type":u.group_type,"data-analytics_group_position":u.group_position,"data-analytics_group_item_count":u.group_item_count,...i?{"data-analytics_group_link":i}:{},...s?{"data-analytics_group_name":s}:{}};return d&&(p["data-analytics_group_name"]=d),{dataset:p,sectionTitleAnalytics:{eventGrouping:"section_title_select",eventProperties:{},groupProperties:u}}}e.s(["useAnalyticsGroupProperties",0,l],445793);let n=function(){let[e,t]=(0,a.useState)(null);return[(0,a.useMemo)(()=>({current:e}),[e]),(0,a.useCallback)(e=>t(e),[])]};e.s(["useCallbackRef",0,n],885082);var i=e.i(812345),o=e.i(494726),s=e.i(835381),r=e.i(519894);let d=(0,a.createContext)(i.COLLECTION_DICTIONARY),{Provider:c}=d;function u(e,t=""){let a=(0,r.useFeatureFlag)("vertical-video-rail"),l=(0,s.useIsHomePageNevadaExperiment)(t),n=(0,s.useHomePageNevadaExperimentRunning)();switch(e){case"alberta":return a;case"nevada":if(l)return n;return!0;default:return!0}}let p=()=>(0,a.useContext)(d);e.s(["default",0,p,"useIsSectionEnabled",0,u],69286);var g=e.i(705832),f=e.i(828620);let m=e=>{let{type:a,title:n,summary:i,sectionTitleProps:s,content:r=[],innerCollections:d=[],collectionId:c,paginationData:u,adBlock:g,sectionNumber:m=0,isSponsored:h=!1,isAutoPlayDisabled:y,playlistMode:S,audioPageType:v="",cta:b,analyticsGroupNameOverride:x,scrollContainerRef:$,scrollableContentRef:_,controlButtonsPortalRef:w}=e,I=p()[a],T=(0,o.getIsSectionInverse)(e),C=s?.link??"",A=f.SECTIONS_WITH_CHEVRONS.includes(a),{dataset:k}=l({audioPageType:v,sectionNumber:m,content:r,innerCollections:d,link:C,paginationData:u,sectionTitleProps:s,title:n,type:a,analyticsGroupNameOverride:x}),G=(0,o.getSponsorAdTargetingValues)({inverse:T,type:a,sectionTitle:n||"",content:r});return I?(0,t.jsx)(I,{collectionAnalytics:a,scrollableContentRef:_,scrollContainerRef:$,paginationData:u,collectionId:c,content:r,innerCollections:d,isInverse:T,adBlock:g,title:n,summary:i,type:a,isSponsored:h,isAutoPlayDisabled:y,dataset:"wyoming"===a?k:{},href:C,playlistMode:S,cta:b,...A&&!h&&{controlButtonsPortalRef:w},..."idaho"===a&&{audioPageType:v},...G&&{sponsorAdTargetingValues:G}}):null};e.s(["default",0,m],828564);var h=e.i(730943),y=e.i(895270),S=e.i(996847),v=e.i(879677),b=e.i(249356),x=e.i(468364);function $(e){if(!e)return{isLeftScrollAvailable:!1,isRightScrollAvailable:!1};{let{scrollWidth:t,scrollLeft:a,offsetWidth:l}=e;return{isLeftScrollAvailable:a>0,isRightScrollAvailable:Math.floor(t)-Math.ceil(a+l)>0}}}let _=function(e,t=!0){let[l,n]=(0,a.useState)({isLeftScrollAvailable:!1,isRightScrollAvailable:!1}),i=(0,S.default)(()=>{let{current:t}=e;if(t){let e=$(t);(0,b.default)(l,e)||n(e)}},100,{leading:!1,trailing:!0});return(0,x.useResizeObserver)(e,e=>{let[t]=e,{target:a}=t;if(a){let e=$(a);(0,b.default)(l,e)||n(e)}},100),(0,a.useEffect)(()=>{let{current:t}=e;t&&n($(t))},[e]),(0,a.useEffect)(()=>{let{current:t}=e;return t?.addEventListener("scroll",i),()=>{t?.removeEventListener("scroll",i)}},[e,i]),{scrollStatus:l,onArrowClick:a=>{let{current:l}=e;if(l){let{scrollLeft:e}=l,n="left"===a?-1:1,{width:i}=l.getBoundingClientRect();if(t){let t=(e=>{let t=Array.from(e.children)[0];if(t&&"contents"===window.getComputedStyle(t).display){let e=Array.from(t.children);e.length>0&&(t=e[0])}return t})(l),{width:a}=(0,v.default)(t?.getBoundingClientRect(),{width:0}),o=parseInt(window.getComputedStyle(l).columnGap)||0,{scrollWidth:s,offsetWidth:r}=l,d=Math.min(Math.max(e+n*Math.floor(i/a)*(a+o),0),s-r);l.scrollTo({left:d,behavior:"smooth"})}else{let t=Array.from(l.children),o=e+("right"===a?i:0),s=t.reduce((e,t)=>{let{width:a}=t.getBoundingClientRect(),{offsetLeft:l}=t,n=o-a-l;return n>0?n:e},0),{scrollWidth:r,offsetWidth:d}=l,c=Math.min(Math.max(e+n*(i-s),0),r-d);l.scrollTo({left:c,behavior:"smooth"})}}}}};e.s(["useScrollSnap",0,_],866417);var w=e.i(65739),I=e.i(760814),T=e.i(339228);let C=I.default.div.withConfig({displayName:"SectionTitleChevrons.styles__SectionTitleButtonsStyled",componentId:"sc-460c7da3-0"})`
  ${({theme:e,$isSponsored:t,$variant:a,$isInverse:l})=>I.css`
    color: ${l?e.interactive4.onInverseBG.default.value:e.interactiveInnner.onDefaultBG.value};
    display: flex;
    height: auto;
    column-gap: 12px;
    margin-left: auto;

    ${(()=>{switch(a){case"texas":return I.css`
            padding: 0 12px 0 0;

            ${t&&I.css`
              padding-left: 12px;
            `}

            ${(0,T.applyStylesForBreakpoints)(I.css`
                padding: 0 0 0 10px;

                ${t&&I.css`
                  padding-left: 12px;
                `}
              `,"group2")}
          `;case"louisiana":return I.css`
            justify-content: flex-end;
            column-gap: 4px;
          `;case"delaware":case"iowa":case"kentucky":case"minnesota":return I.css`
            margin-right: 0;
            width: 72px;

            ${(0,T.applyStylesForBreakpoints)(I.css`
                display: none;
              `,"group2")}
          `;case"maryland":case"michigan":case"newmexico":return I.css`
            width: 60px;

            ${(0,T.applyStylesForBreakpoints)(I.css`
                width: 76px;
              `,"group2")}
          `}})()};
  `}
`,A=I.default.button.withConfig({displayName:"SectionTitleChevrons.styles__SectionTitleButtonStyled",componentId:"sc-460c7da3-1"})`
  ${({theme:e,$variant:t,disabled:a})=>I.css`
    display: flex;
    height: 24px;
    width: 24px;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    ${(0,T.applyStylesForBreakpoints)(I.css`
        height: 32px;
        width: 32px;
      `,"group2")}

    ${"louisiana"===t?I.css`
            svg {
              width: 12px;
              height: auto;
            }
          `:I.css`
            svg {
              height: 20px;
              width: auto;
            }
          `};

    &:hover {
      background-color: ${e.interactive4.onInverseBG.hovered.value};

      ${!a&&I.css`
        svg {
          fill: #ffffff;
        }
      `}
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background-color: transparent;

      ${"louisiana"===t&&I.css`
        opacity: 1;

        svg {
          fill: ${e.button.unboxed.disabled.normal.content.value};
        }
      `}
    }
  `}
`,k=({handleArrowClick:e,isLeftArrowDisabled:a=!1,isRightArrowDisabled:l=!1,isInverse:n,variant:i="texas",isSponsored:o,ariaLiveMessage:s})=>{let r=e=>{let t="left"===e?"Previous Page":"Next Page";return s?"beginning"===s?"right"===e?`${t}, beginning of schedule`:t:`${t}, ${"left"===e?"previous":"next"} in schedule`:t};return(0,t.jsxs)(C,{$isInverse:n,$variant:i,$isSponsored:o,children:[(0,t.jsx)(A,{$variant:i,"data-testid":"left-arrow",disabled:a,onClick:()=>e("left"),"aria-label":r("left"),children:(0,t.jsx)(w.default,{name:"arrows:chevron-left"})}),(0,t.jsx)(A,{$variant:i,"data-testid":"right-arrow",disabled:l,onClick:()=>e("right"),"aria-label":r("right"),children:(0,t.jsx)(w.default,{name:"arrows:chevron-right"})})]})};e.s(["default",0,k],44115);var G=e.i(303764);let B=e=>{let{type:n,title:i,sectionTitleProps:s,testId:r=n,content:d=[],innerCollections:c=[],paginationData:u,sectionNumber:p=0,titleAsHeadingTag:f=!0,isSponsored:m=!1,audioPageType:S="",analyticsGroupNameOverride:v,controlButtonsPortalRef:b,scrollContainerRef:x,isFullWidth:$=!1,withMarginBottom:w}=e,I=!(0,y.useDarkMode)()&&(0,o.getIsPromoSection)(e),T=(0,o.getIsSectionInverse)(e)&&!I,C=(0,o.getHasControlButtons)(e),A=(0,o.getShowSectionTitle)(e),B="wyoming"===n?"promoHeadline":"default",E=s?.link??"",N=(0,o.getSponsorAdTargetingValues)({inverse:T,type:n,sectionTitle:i||"",content:d}),{scrollStatus:j,onArrowClick:O}=_(x),{isLeftScrollAvailable:R,isRightScrollAvailable:L}=j,[H,F]=(0,a.useState)(!1),{sectionTitleAnalytics:P}=l({audioPageType:S,sectionNumber:p,content:d,innerCollections:c,link:E,paginationData:u,sectionTitleProps:s,title:i,type:n,analyticsGroupNameOverride:v});return(0,a.useEffect)(()=>{F(!!b?.current)},[b]),(0,t.jsxs)(t.Fragment,{children:[A&&(0,t.jsx)(G.default,{isTexas:"texas"===n,variant:B,isInverse:T,titleAsHeadingTag:f,testId:r,title:i,href:E,hasControlButtons:C,isFullWidth:$,...C&&{controlButtonsPortalRef:b},analytics:P,isSponsored:m,...N&&{sponsorAdTargetingValues:N},withMarginBottom:w}),C&&H&&b?.current&&(0,t.jsx)(t.Fragment,{children:(0,h.createPortal)((0,t.jsx)(g.SectionChevronContainerStyled,{$isInverse:T,$isSponsored:m,children:(0,t.jsx)(k,{isSponsored:m,isLeftArrowDisabled:!R,isRightArrowDisabled:!L,isInverse:T,handleArrowClick:O,variant:n})}),b.current)})]})};e.s(["default",0,B],160763),e.s(["default",0,e=>{let{type:s,title:r,sectionTitleProps:d,testId:c=s,content:p=[],innerCollections:f=[],paginationData:h,isInverse:y=!1,sectionNumber:S=0,style:v,as:b="section",audioPageType:x="",emptyContentComponent:$=null,analyticsGroupNameOverride:_}=e,w=(0,a.useRef)(null),[I,T]=n(),C=(0,a.useRef)(null),A=u(s,e.title),k=(0,o.getIsSectionInverse)(e),G="dark"===v||y||(0,o.isSectionTypeIncluded)(s,["texas","hawaii"]),E="alabama"!==s&&!k,N=(0,o.isSectionTypeIncluded)(s,["alaska","ohio","texas","vermont","wisconsin"]),j=i.SECTIONS_WITH_LENGTH.includes(s)?`-${p.length}`:"",O=`${c}-section-outer${j}`,R=`${c}-section${j}`,{dataset:L}=l({audioPageType:x,sectionNumber:S,content:p,innerCollections:f,link:d?.link??"",paginationData:h,sectionTitleProps:d,title:r,type:s,analyticsGroupNameOverride:_});return(0,o.isValidSectionType)(s)?A?p.length||f.length?(0,t.jsx)(g.SectionOuterStyled,{"data-testid":O,$isInverse:k,$withPadding:G,$withMargin:E,$sectionType:s,$includeHorizontalSeparator:N,as:b,..."wyoming"!==s?{...L}:{},children:(0,t.jsxs)(g.SectionStyled,{"data-testid":R,children:[(0,t.jsx)(B,{...e,scrollContainerRef:I,scrollableContentRef:w,controlButtonsPortalRef:C}),(0,t.jsx)(m,{...e,scrollContainerRef:T,scrollableContentRef:w,controlButtonsPortalRef:C})]})}):$:null:$}],900324)}]);