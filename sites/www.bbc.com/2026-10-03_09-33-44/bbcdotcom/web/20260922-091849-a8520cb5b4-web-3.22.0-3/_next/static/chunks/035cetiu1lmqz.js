(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,108019,e=>{"use strict";var t=e.i(760814),i=e.i(339228),l=e.i(973471);let r=[6,5,4,3,2,1],a="0 16px",s="0 auto",n={none:0,s:"16px",m:"24px",l:"32px",xl:"40px"},o=["fullWidth","mobileFullWidth","wide","hero"],d=t.default.div.withConfig({displayName:"Container.styles__ContainerStyled",componentId:"sc-d16fcddf-0"})`
  ${({$marginBottom:e,$marginTop:d,$columns:p,$type:c="contained"})=>t.css`
    position: relative;
    box-sizing: border-box;
    display: grid;
    gap: 16px;
    margin: ${(function(e){switch(e){case"fullWidth":return a;case"withoutMargin":return 0;default:return s}})(c)};
    width: ${(function(e){switch(e){case"fullWidth":case"withoutMargin":return"auto";case"callout":return"826px";case"wide":return"1248px";case"hero":return"932px";case"mobileFullWidth":case"contained":return"722px"}})(c)};

    ${(0,i.applyStylesForBreakpoints)(t.css`
        margin: ${"fullWidth"===c||"wide"===c?a:s};
        width: ${"fullWidth"===c||"wide"===c?"auto":"728px"};
      `,"group5")};

    ${(0,i.applyStylesForBreakpoints)(t.css`
        margin: ${a};
        width: auto;
      `,"group3")};

    ${(0,i.applyStylesForBreakpoints)(t.css`
        margin: ${o.includes(c)?0:a};
        width: auto;
      `,"group2")};

    ${(({$marginBottom:e,$marginTop:r,$columns:a,groups:s})=>t.css`
  ${s.map(s=>(0,i.applyStylesForBreakpoints)(t.css`
        ${a?.length&&!!a[s-1]&&t.css`
          grid-template-columns: ${(0,l.getFr)(a?.[s-1])};
        `}
        ${r?.length&&!!r[s-1]&&t.css`
          margin-top: ${n[r[s-1]]};
        `}
        ${e?.length&&!!e[s-1]&&t.css`
          margin-bottom: ${n[e[s-1]]};
        `}
      `,`group${s}`))}
`)({groups:r,$marginTop:d,$marginBottom:e,$columns:p})}
  `}
`;e.s(["ContainerStyled",0,d])},194182,(e,t,i)=>{t.exports=e.r(161457)},396866,e=>{"use strict";var t=e.i(391398),i=e.i(191788),l=e.i(194182),r=e.i(868783),a=e.i(797065);let s=(0,i.memo)(({source:e,...t})=>((0,i.useEffect)(()=>{if(e){let{id:i,src:l,onReady:r,onLoad:s,onError:n}=a.SCRIPT_DICTIONARY[e],{onLoad:o}=t;if(document.getElementById(i))r?.();else{let e=document.createElement("script");e.setAttribute("src",l),e.setAttribute("async","true"),e.setAttribute("id",i),e.setAttribute("type","text/javascript"),e.onload=()=>{s?.(),o?.()},n&&(e.onerror=n),document.head.appendChild(e)}}else{let{id:e,src:i,onReady:l,onLoad:r,onError:a}=t;if(e)if(document.getElementById(e))l?.();else{let t=document.createElement("script");t.setAttribute("async","true"),t.setAttribute("id",e),t.setAttribute("type","text/javascript"),i&&t.setAttribute("src",i),r&&(t.onload=r),a&&(t.onerror=a),document.head.appendChild(t)}}},[]),null)),n=(0,i.memo)((0,r.withCMSFallback)(({source:e,innerHTML:i,...r})=>{let s=e?a.SCRIPT_DICTIONARY[e]:{};return(0,t.jsx)(l.default,{async:!0,...s,...r,children:i})},s));e.s(["default",0,n],396866)},494373,e=>{"use strict";e.i(258069),e.i(898229);let t={us:["us","as","gu","mp","pr","vi"],au:["au","cc","cx"]},i=Object.values(t).flat();e.s(["COUNTRY_GB",0,"GB","COUNTRY_UK",0,"uk","getWntvRegion",0,e=>{if(!e)return null;for(let[i,l]of Object.entries(t))if(l.includes(e))return i;return null},"isWntvCountry",0,e=>!!e&&i.includes(e)])},234589,e=>{"use strict";e.s(["default",0,function(e){var t=null==e?0:e.length;return t?e[t-1]:void 0}])},491536,e=>{"use strict";e.s(["Embed",()=>u,"EmbedStory",()=>y,"default",()=>h],491536);var t=e.i(391398),i=e.i(786025),l=e.i(746857),r=e.i(938779),a=e.i(964564);let s=function(e,t){var i=[];return(0,a.default)(e,function(e,l,r){t(e,l,r)&&i.push(e)}),i};var n=e.i(740889),o=e.i(46315),d=e.i(234589),p=e.i(508259);let c=(e,t)=>{if("object"==typeof e&&null!==e){if(t in e)return e[t];for(let i in e)if(Object.prototype.hasOwnProperty.call(e,i)){let l=c(e[i],t);if(l)return l}}return null},u=({model:e,testId:a})=>{let{query:u}=(0,l.useAppRouter)(),h=function(e,t){let{provider:i,blocks:l,locator:a}=e;switch(i){case"telescope-vote":return function(e,t,i){try{let l=(0,d.default)(t.split(":")),{model:r}=e.find(({type:e})=>"aresTelescope"===e),{isSignInRequired:a,wid:s}=r;return[{type:"aresTelescope",model:{id:l,isTest:i,wid:s,isSignInRequired:a}}]}catch(e){return p.logger.error(`Error getting telescope blocks: ${e}`),[]}}(l,a,!!t);case"visual-journalism":return function(e){try{var t;let[{model:{outputs:i}}]=e,[{model:l}]=(t=({type:e})=>"embed"===e,((0,o.default)(i)?r.default:s)(i,(0,n.default)(t,3))),{oembed:a}=l,{html:d}=a;return[{type:"include",model:{html:d,type:"vj"}}]}catch(e){return p.logger.error(`Error getting vj include blocks: ${e}`),[]}}(l);case"flourish-visualisation":case"flourish-story":try{let[{model:e}]=l,t=c(e,"html")||"",[,i]=t.match(/src="(http.*?)"/)||[],r=i?t.replace(i,`${i}?auto=1`):t;return[{type:"include",model:{html:r,type:"customEmbedded",prerequisites:()=>{window.addEventListener("message",e=>{try{let{sender:t="",method:l="",context:r="",height:a=0,src:s=""}=JSON.parse(e.data),n=t.toLowerCase().includes("flourish"),o=l.toLowerCase().includes("resize"),d=r.toLowerCase().includes("iframe"),p=s.includes(i);if(n&&o&&d&&a>0&&p){let e=document.querySelectorAll(`iframe[src*="${i}"]`),[t]=Array.from(e),l=Number(t.getAttribute("height")),r=Math.ceil(a);l!==r&&t.setAttribute("height",r.toString())}}catch(e){p.logger.error(`Message event data is not JSON so could not be parsed: ${e}`)}})}}}]}catch(e){return p.logger.error(`Error getting flourish blocks: ${e}`),[]}case"riddle":try{let[{model:{blocks:e}}]=l,[{model:{oembed:t}}]=e,{html:i}=t;return[{type:"include",model:{html:i,type:"vj"}}]}catch(e){return p.logger.error(`Error getting vj include riddle blocks: ${e}`),[]}default:return l}}(e,u.mode?.toString().toLowerCase()==="testdata");return(0,t.jsx)("div",{"data-testid":a,children:(0,t.jsx)(i.default,{blocks:h})})},h=u,y=e=>(0,t.jsx)(u,{type:"embed",model:e})},786025,119081,793897,714047,581221,53083,950489,743718,957977,784421,315529,403052,767768,530342,e=>{"use strict";e.s(["default",()=>V],786025);var t=e.i(391398);e.s(["ContentBlockProvider",()=>X,"default",()=>Q],530342);var i=e.i(191788),l=e.i(491536);e.s(["default",()=>h],793897);var r=e.i(895270);let a=(0,i.createContext)(!0),{Provider:s}=a,n=({value:e,children:i})=>(0,t.jsx)(s,{value:e,children:i});function o(){return(0,i.useContext)(a)}e.s(["FlowElementsProvider",0,n,"default",0,o],119081);var d=e.i(760814),p=e.i(339228),c=e.i(570549);let u=d.default.h1.withConfig({displayName:"Headline.styles__HeadlineStyled",componentId:"sc-6b3bb442-0"})(({theme:e,$level:t,$isInverse:i})=>d.css`
    color: ${i?e.text.onInverseBG.default.value:e.text.default.value};

    ${()=>{switch(t){case 1:return d.css`
            ${(0,c.applyTypography)(e.headline.large.bpLarge)};
            ${(0,p.applyStylesForBreakpoints)((0,c.applyTypography)(e.headline.large.bpSmall),"group2")};
          `;case 2:return d.css`
            ${(0,c.applyTypography)(e.headline.small.bpLarge)};
            ${(0,p.applyStylesForBreakpoints)((0,c.applyTypography)(e.headline.small.bpSmall),"group2")};
          `;default:return d.css`
            ${(0,c.applyTypography)(e.mainSectionHeading.bpLarge)}
            ${(0,p.applyStylesForBreakpoints)((0,c.applyTypography)(e.mainSectionHeading.bpSmall),"group2")};
          `}}}
  `),h=({model:{blocks:e,level:i=1},testId:l})=>{let a=(0,r.useDarkMode)();return(0,t.jsx)(n,{value:!1,children:(0,t.jsx)(u,{as:`h${i}`,"data-testid":l,$level:i,$isInverse:a,children:(0,t.jsx)(V,{blocks:e})})})};e.s(["default",()=>y],714047);let y=({testId:e,model:{blocks:i}})=>(0,t.jsx)("div",{"data-testid":e,children:(0,t.jsx)(V,{blocks:i})});var m=e.i(184919),g=e.i(519894),f=e.i(704570),x=e.i(808824),b=e.i(450228),$=e.i(120012);let v=({model:{emphasiseImage:e,blocks:i,isFullHeight:l},showCredit:r=!0,isCalloutImage:a=!1,isInverse:s,testId:n=`${e?"hero-":""}image`})=>{let{subtype:o}=(0,f.usePageData)(),d=(0,g.useFeatureFlag)("legacy-article-rendering-logic"),p=(0,g.useFeatureFlag)("features-double-column"),c=o===m.ContentSubtype.Features&&p,u=o===m.ContentSubtype.News,h=i.find(e=>"rawImage"===e.type);if(!h?.model?.locator)return null;let y="ic"===h.model.originCode,v=(0,x.getAltTextString)(i),w=a?(0,x.getCalloutImageUrlTemplate)(h):y?(0,x.getFeaturesImageUrlTemplate)(h):(0,x.getImageUrlTemplate)(h),S=(0,x.getCopyrightHolderString)(h,e),j=(S?`${S} `:"")+v,C=v?.includes("grey line")||h.model.height<10;return(0,t.jsxs)($.ImageCardStyled,{"data-testid":n,$isFullHeight:!!l,$isEmphasized:!!e,$withNegativeMargin:!d||c||u,children:[(0,t.jsx)(b.default,{imageUrlTemplate:w,alt:j,cardType:"article",webpSupport:!a,isInverse:s}),r&&!C&&S&&(0,t.jsx)($.CreditStyled,{children:S})]})};e.s(["default",0,v],581221);var w=e.i(240914);e.s(["default",()=>A],53083);var S=e.i(879677),j=e.i(546795),C=e.i(235680),k=e.i(120928),_=e.i(772701),I=e.i(924257);let T=d.default.a.withConfig({displayName:"LinkUrl.styles__LinkUrlStyled",componentId:"sc-f4e3b82f-0"})`
  ${({theme:e,$isFlowElementsEnabled:t,$isInverse:i})=>d.css`
    text-decoration: underline;
    color: ${i?e.text.onInverseBG.default.value:e.text.default.value};

    ${t&&d.css`
      ${(0,c.applyTypography)(e.linksblockitem.bpLarge)};
      ${(0,p.applyStylesForBreakpoints)(d.css`
          ${(0,c.applyTypography)(e.linksblockitem.bpSmall)};
        `,"group1","group2")};
    `};
  `}
`,A=({testId:e,model:{blocks:l,...a}})=>{let s=(0,i.useRef)(null),n=(0,r.useDarkMode)(),d=(0,S.default)(a.locator,""),p=o(),c=(0,_.isExternalLink)(d),u=(0,I.useExternalTarget)(d),h=l[0]?.model.text,y="string"==typeof d&&d.startsWith("#"),m=d.trim().toLowerCase().replace(/\s+/g,"-"),g=(0,i.useCallback)(()=>{let e=c&&!(0,k.isBBCExternal)(d)?"click_exit":"click_action",t=`LinkURL - ${h}`;window.analytics.sendEvent({eventGrouping:e,eventProperties:{item_name:t||"link",item_type:"link_url_link",item_link:c?d:(0,C.getAnalyticsFullUrl)(d),item_text:h}})},[c,h,d]);return(0,t.jsx)(T,{target:u,onClick:g,"data-testid":e,href:y?m:(0,j.appendQueryParamsToUrl)(d),ref:s,$isFlowElementsEnabled:p,$isInverse:n,children:(0,t.jsx)(V,{blocks:l})})};e.s(["default",()=>B],950489);let F=d.default.li.withConfig({displayName:"ListItem.styles__ListItemStyled",componentId:"sc-cb54891-0"})`
  ${({theme:e})=>d.css`
    color: ${e.text.default.value};
    font-weight: inherit;
  `}
`,B=({testId:e,model:{blocks:i}})=>{let l=i.some(({type:e})=>"urlLink"===e);return(0,t.jsx)(n,{value:l,children:(0,t.jsx)(F,{"data-testid":e,children:(0,t.jsx)(V,{blocks:i})})})};e.s(["default",()=>N],743718);let L=d.default.ul.withConfig({displayName:"List.styles__ListStyled",componentId:"sc-70c6f140-0"})`
  ${({theme:e,$isSummary:t,$isOrdered:i})=>d.css`
    color: ${e.text.default.value};
    flex-direction: column;
    list-style-type: ${i?"decimal":"disc"};
    padding-left: 28px;
    display: flex;
    gap: 12px;

    ${(0,c.applyTypography)(t?e.generic.info1.emphasised.bpLarge:e.bodyCopy.default.bpLarge)};

    ${(0,p.applyStylesForBreakpoints)(d.css`
        ${(0,c.applyTypography)(t?e.generic.info1.emphasised.bpSmall:e.bodyCopy.default.bpSmall)};
      `,"group2")}

    ${t&&d.css`
      background: ${e.container.onDefaultBG.value};
      padding: 24px 24px 24px 16px;

      > * {
        margin-left: 16px;
      }
    `};
  `}
`,N=({testId:e,type:i,model:{blocks:l,isSummary:r=!1,isOrdered:a="orderedList"===i}})=>(0,t.jsx)(n,{value:!1,children:(0,t.jsx)(L,{"data-testid":e,as:a?"ol":"ul",$isSummary:r,$isOrdered:a,children:(0,t.jsx)(V,{blocks:l})})});e.s(["default",()=>P],957977);let E=d.default.p.withConfig({displayName:"Paragraph.styles__ParagraphStyled",componentId:"sc-ffb5f5ba-0"})`
  ${({theme:e,$isInverse:t=!1})=>d.css`
    color: ${t?e.text.onInverseBG.default.value:e.text.default.value};
    ${(0,c.applyTypography)(e.bodyCopy.default.bpLarge)};
    ${(0,p.applyStylesForBreakpoints)(d.css`
        ${(0,c.applyTypography)(e.bodyCopy.default.bpSmall)};
      `,"group1","group2")}
  `}
`,P=({testId:e,model:{blocks:i}})=>{let l=o(),a=(0,r.useDarkMode)();return l?(0,t.jsx)(E,{"data-testid":e,$isInverse:a,children:(0,t.jsx)(V,{blocks:i})}):(0,t.jsx)(V,{blocks:i})};var W=e.i(108019),D=e.i(965951);let O=({testId:e,model:{blocks:i}})=>{let l=i.find(({model:e})=>"plain-html"===e.renditionType),r=l?.model?.embeddableContent;return(0,t.jsx)(t.Fragment,{children:r&&(0,t.jsx)(W.ContainerStyled,{$type:"contained","data-testid":e,children:(0,t.jsx)(D.IncludeWithScript,{html:r})})})};e.s(["default",0,O],784421);var R=e.i(508745);let U={bold:"b",italic:"i"},M=d.default.span.withConfig({displayName:"TextFragment.styles__TextFragmentStyled",componentId:"sc-99e7c69b-0"})`
  ${(0,p.applyStylesForBreakpoints)(d.css`
      /* word-break: break-word is deprecated but required for BBCX-3310 */
      word-break: break-word;
    `,"group2")};
  ${({attribute:e})=>{switch(e){case"bold":return d.css`
          font-weight: 600;
        `;case"italic":return d.css`
          font-style: italic;
        `}}}
`,z=({model:{text:e,attributes:i}})=>{let l=e.replace(/current_year/g,new Date().getFullYear().toString());return i?.length?(0,t.jsx)(t.Fragment,{children:i.reduce((e,i)=>(0,t.jsx)(M,{id:l.trim().toLowerCase().replace(/\s+/g,"-"),as:U[i],attribute:i,children:e}),(0,t.jsx)(t.Fragment,{children:l}))}):(0,t.jsx)(t.Fragment,{children:l})};e.s(["default",0,z],315529),e.s(["default",()=>G],403052);let G=({model:{blocks:e}})=>(0,t.jsx)(V,{blocks:e});var H=e.i(508259);let Y=({model:e})=>{let{outputs:i=[]}=e;try{let[{model:e}]=i.filter(({type:e})=>"embed"===e),{oembed:l}=e,{html:r}=l;return(0,t.jsx)(w.default,{type:"include",model:{html:r,type:"vj"}})}catch(e){return H.logger.error(`Error getting vj include blocks: ${e}`),null}};e.s(["default",0,Y],767768);let K={"vdj-embed":Y,aresTelescope:R.default,embed:l.default,fragment:z,headline:h,idt2:y,image:v,include:w.default,listItem:B,orderedList:N,paragraph:P,renditions:O,subheadline:h,text:G,unorderedList:N,urlLink:A},q=(0,i.createContext)(K),{Provider:J}=q,X=({children:e,value:i})=>(0,t.jsx)(J,{value:i,children:e}),Q=()=>(0,i.useContext)(q),V=({blocks:e=[],isInverse:i})=>{let l=Q();return(0,t.jsx)(t.Fragment,{children:e.map(({type:e,model:r},a)=>{let s=l[e];return s?(0,t.jsx)(s,{type:e,model:r,isInverse:i},a):null})})}},764183,e=>{"use strict";var t=e.i(391398),i=e.i(786025),l=e.i(895270),r=e.i(519894),a=e.i(119081),s=e.i(760814),n=e.i(570549);let o=s.default.figcaption.withConfig({displayName:"Caption.styles__CaptionStyled",componentId:"sc-70433723-0"})`
  ${({theme:e,$withPaddingTop:t=!0,$isInverse:i=!1})=>s.css`
    display: block;
    ${(0,n.applyTypography)(e.caption)};
    color: ${i?e.text.onInverseBG.lowEmpasis.value:e.text.lowEmphasis.value};

    padding-left: 0;
    padding-right: 0;

    ${t&&s.css`
      padding-top: 8px;
    `}
  `};
`;e.s(["default",0,({model:{blocks:e},testId:s})=>{let n=(0,r.useFeatureFlag)("legacy-article-rendering-logic"),d=(0,l.useDarkMode)();return(0,t.jsx)(a.FlowElementsProvider,{value:!1,children:(0,t.jsx)(o,{"data-testid":s,$withPaddingTop:n,$isInverse:d,children:(0,t.jsx)(i.default,{blocks:e})})})}],764183)},533033,e=>{"use strict";e.s(["default",()=>S,"defaultAnimation",()=>w],533033);var t=e.i(391398),i=e.i(191788),l=e.i(84541),r=e.i(764183),a=e.i(868783),s=e.i(760814),n=e.i(339228);let o=s.default.div.withConfig({displayName:"Slideshow.styles__SlideshowWrapperStyled",componentId:"sc-4bc7663b-0"})`
  max-width: 1280px;
  width: 100%;
  position: relative;

  /* TODO use mixin */
  ${(0,n.applyStylesForBreakpoints)(s.css`
      margin-left: -16px;
      margin-right: -16px;
      width: calc(100% + 32px);
    `,"group1","group2")};
`,d=s.default.div.withConfig({displayName:"Slideshow.styles__SlideshowControlsStyled",componentId:"sc-4bc7663b-1"})`
  display: grid;
  justify-content: end;

  ${(0,n.applyStylesForBreakpoints)(s.css`
      height: 32px;
    `,"group1","group2")};
`,p=s.default.div.withConfig({displayName:"Slideshow.styles__SlideshowArrowControls",componentId:"sc-4bc7663b-2"})`
  display: flex;
  align-self: flex-end;
  position: relative;
  padding: 4px 0;
`,c=s.default.div.withConfig({displayName:"Slideshow.styles__DotsContainerStyled",componentId:"sc-4bc7663b-3"})`
  padding: 6px;
  display: flex;
  justify-content: space-between;
  column-gap: 5px;
  align-self: center;
  align-items: center;
  position: absolute;
  width: fit-content;
  height: fit-content;
  margin: auto;
  justify-self: center;
`,u=s.default.div.withConfig({displayName:"Slideshow.styles__SlideshowPositionIndicator",componentId:"sc-4bc7663b-4"})`
  ${({$isActive:e,$dotSize:t})=>s.css`
    background-color: ${e?"#000000":"#D2D4D6"};
    width: ${Math.max(0,t)}px;
    height: ${Math.max(0,t)}px;
    transition: all 0.2s linear;
  `};
`;s.default.div.withConfig({displayName:"Slideshow.styles__CaptionStyled",componentId:"sc-4bc7663b-5"})`
  padding: 0 16px;
  ${(0,n.applyStylesForBreakpoints)(s.css`
      width: calc(100%);
    `,"group1","group2")};
`;let h=(e,t)=>s.css`
  transform: ${`translate${e}(calc(100% * ${t}))`};
`,y=s.default.div.withConfig({displayName:"Slideshow.styles__Animated",componentId:"sc-4bc7663b-6"})`
  position: absolute;
  top: 0;
  left: 0;

  ${({$animate:e,$duration:t,$easing:i})=>s.css`
    transition: ${e?`all ${t}ms ${i}`:"none"};
  `}
`,m=(0,s.default)(y).withConfig({displayName:"Slideshow.styles__SlideShowActive",componentId:"sc-4bc7663b-7"})`
  position: relative;
  margin-top: -56.25%; /* Pull back the relative component by the aspect-ratio's value */
  width: 100%;

  ${({$type:e,$val:t})=>{switch(e){case"horizontal":return s.css`
          ${h("X",t)}
        `;case"vertical":return s.css`
          ${h("Y",t)}
        `;case"fade":return s.css`
          ${s.css`
  opacity: ${t};
`}
        `;default:return""}}}
`,g=(0,s.default)(m).withConfig({displayName:"Slideshow.styles__SlideShowEnter",componentId:"sc-4bc7663b-8"})`
  margin-top: 0;
  position: absolute;
  top: 0;
`,f=s.default.div.withConfig({displayName:"Slideshow.styles__TransitionWrapper",componentId:"sc-4bc7663b-9"})`
  overflow: hidden;
  position: relative;
  display: flex;
  padding-top: 56.25%; /* Keep 16:9 ratio -> can be dynamic e.g. 1:1, 2:1, etc. */
`,x=(0,s.default)(g).withConfig({displayName:"Slideshow.styles__SecondarySlideShowEnter",componentId:"sc-4bc7663b-10"})`
  padding-top: 0; /* Caption transition should not have aspect ratio => it inherits, could be changed */
`,b=(0,s.default)(m).withConfig({displayName:"Slideshow.styles__SecondarySlideShowActive",componentId:"sc-4bc7663b-11"})`
  margin-top: 0; /* Caption transition should not have aspect ratio => it inherits, could be changed */
`,$=(0,s.default)(f).withConfig({displayName:"Slideshow.styles__SecondaryTransitionWrapper",componentId:"sc-4bc7663b-12"})`
  padding-top: 0; /* Caption transition should not have aspect ratio => it inherits, could be changed */

  ${(0,n.applyStylesForBreakpoints)(s.css`
      padding: 0 16px;
    `,"group1","group2")};
`,v=s.default.hr.withConfig({displayName:"Slideshow.styles__DividerStyled",componentId:"sc-4bc7663b-13"})`
  border: none;
  height: 1px;
  background-color: #e4e4e4;
  margin: 0;
`,w={$duration:200,$type:"horizontal",$easing:"linear"},S=(0,a.withCMSFallback)(({children:e,animation:a=w,dotSize:s=6})=>{let[n,h]=(0,i.useState)(0),[y,S]=(0,i.useState)(0),j=i.Children.count(e),C=j-1,k=Array.from(Array(j).keys()),_=i.Children.toArray(e)[y-1],I=i.Children.toArray(e)[y],T=i.Children.toArray(e)[y+1],[A,F]=(0,i.useState)(0),[B,L]=(0,i.useState)(!0),N=I?.props?.model?.blocks?.find(e=>"caption"===e.type),E=_?.props?.model?.blocks?.find(e=>"caption"===e.type),P=T?.props?.model?.blocks?.find(e=>"caption"===e.type),W=e=>{let t=y+e,i=t>C?0:t<0?C:t;F(e),h(i),setTimeout(()=>{L(!1),S(i),F(0)},a.$duration),L(!0)},D={fade:{prev:+(-1===A),current:+(0===A),next:+(1===A)},vertical:{prev:-1*A-1,current:-1*A,next:-1*A+1},horizontal:{prev:-1*A-1,current:-1*A,next:-1*A+1}},O={...a,$easing:"linear",$type:"fade"},R=s/3;return(0,t.jsxs)(o,{"data-testid":"slideshowWrapper",children:[(0,t.jsxs)(f,{children:[(0,t.jsx)(g,{$index:y,$val:D[a.$type].prev,$animate:B,...a,children:_}),(0,t.jsx)(m,{$val:D[a.$type].current,$animate:B,...a,children:I}),(0,t.jsx)(g,{$val:D[a.$type].next,$animate:B,...a,children:T})]}),(0,t.jsxs)(d,{"data-testid":"slideshowControls",children:[(0,t.jsx)(c,{children:k.map((e,i)=>(0,t.jsx)(u,{$dotSize:(e=>{if(e===n)return s;if(n<3)return e<3?s:s-(e-2)*R;if(e<n){let t=n-2;return e>=t?s:s-(t-e)*R}return s-(e-n)*R})(i),$isActive:n===i,"data-testid":"slideshowPositionIndicator"},e))}),(0,t.jsxs)(p,{"data-testid":"slideshowArrows",children:[(0,t.jsx)(l.default,{testId:"slideshowArrowLeft",disabled:0===y,type:"unboxed-share",icon:"arrows:chevron-left",onClick:()=>W(-1)}),(0,t.jsx)(l.default,{testId:"slideshowArrowRight",disabled:y===C,type:"unboxed-share",icon:"arrows:chevron-right",onClick:()=>W(1)})]})]}),(0,t.jsx)(v,{}),N&&(0,t.jsxs)($,{children:[(0,t.jsx)(x,{$index:y,$val:D[O.$type].prev,$animate:B,...O,children:E&&(0,t.jsx)(r.default,{model:E?.model,type:E?.type})}),(0,t.jsx)(b,{$val:D[O.$type].current,$animate:B,...O,children:(0,t.jsx)(r.default,{model:N?.model,type:N?.type})}),(0,t.jsx)(x,{$val:D[O.$type].next,$animate:B,...O,children:P&&(0,t.jsx)(r.default,{model:P?.model,type:P?.type})})]})]})},({children:e,animation:a=w,dotSize:s=6})=>{let[n,h]=(0,i.useState)(0),[y,S]=(0,i.useState)(0),j=i.Children.count(e),C=j-1,k=Array.from(Array(j).keys()),_=i.Children.toArray(e)[y-1],I=i.Children.toArray(e)[y],T=i.Children.toArray(e)[y+1],[A,F]=(0,i.useState)(0),[B,L]=(0,i.useState)(!0),N=I?.props?.model?.blocks?.find(e=>"caption"===e.type),E=_?.props?.model?.blocks?.find(e=>"caption"===e.type),P=T?.props?.model?.blocks?.find(e=>"caption"===e.type),W=e=>{let t=y+e,i=t>C?0:t<0?C:t;F(e),h(i),setTimeout(()=>{L(!1),S(i),F(0)},a.$duration),L(!0)},D={fade:{prev:+(-1===A),current:+(0===A),next:+(1===A)},vertical:{prev:-1*A-1,current:-1*A,next:-1*A+1},horizontal:{prev:-1*A-1,current:-1*A,next:-1*A+1}},O={...a,$easing:"linear",$type:"fade"},R=s/3;return(0,t.jsxs)(o,{"data-testid":"slideshowWrapper",children:[(0,t.jsxs)(f,{children:[(0,t.jsx)(g,{$index:y,$val:D[a.$type].prev,$animate:B,...a,children:_}),(0,t.jsx)(m,{$val:D[a.$type].current,$animate:B,...a,children:I}),(0,t.jsx)(g,{$val:D[a.$type].next,$animate:B,...a,children:T})]}),(0,t.jsxs)(d,{"data-testid":"slideshowControls",children:[(0,t.jsx)(c,{children:k.map((e,i)=>(0,t.jsx)(u,{$dotSize:(e=>{if(e===n)return s;if(n<3)return e<3?s:s-(e-2)*R;if(e<n){let t=n-2;return e>=t?s:s-(t-e)*R}return s-(e-n)*R})(i),$isActive:n===i,"data-testid":"slideshowPositionIndicator"},e))}),(0,t.jsxs)(p,{"data-testid":"slideshowArrows",children:[(0,t.jsx)(l.default,{testId:"slideshowArrowLeft",disabled:0===y,type:"unboxed-share",icon:"arrows:chevron-left",onClick:()=>W(-1)}),(0,t.jsx)(l.default,{testId:"slideshowArrowRight",disabled:y===C,type:"unboxed-share",icon:"arrows:chevron-right",onClick:()=>W(1)})]})]}),(0,t.jsx)(v,{}),N&&(0,t.jsxs)($,{children:[(0,t.jsx)(x,{$index:y,$val:D[O.$type].prev,$animate:B,...O,children:E&&(0,t.jsx)(r.default,{model:E?.model,type:E?.type})}),(0,t.jsx)(b,{$val:D[O.$type].current,$animate:B,...O,children:(0,t.jsx)(r.default,{model:N?.model,type:N?.type})}),(0,t.jsx)(x,{$val:D[O.$type].next,$animate:B,...O,children:P&&(0,t.jsx)(r.default,{model:P?.model,type:P?.type})})]})]})})}]);