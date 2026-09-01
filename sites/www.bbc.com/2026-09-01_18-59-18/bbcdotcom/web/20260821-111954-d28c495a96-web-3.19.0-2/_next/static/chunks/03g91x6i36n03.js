(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,222009,e=>{"use strict";var t=e.i(760814);e.s(["applyZIndex",0,(e,a=!0,i=!1)=>t.css`
  ${({theme:n})=>t.css`
    z-index: ${n.zIndex[e]} ${i?"!important":""};

    ${a&&t.css`
      * {
        z-index: ${n.zIndex[e]} ${i?"!important":""};
      }
    `};
  `}
`])},179286,e=>{"use strict";var t=e.i(391398),a=e.i(191788),i=e.i(876278),n=e.i(450228),r=e.i(120012);e.s(["default",0,({model:e,isFullHeight:s,testId:o,isPlaceholder:l,cardType:d,isInverse:c,isDefaultAspectRatio:u=!0})=>{let{src:p,altText:m=""}=e?.blocks||{},[h,g]=(0,a.useState)(l?i.INDEX_CARD_IMAGE_FALLBACK:p);return(0,a.useEffect)(()=>{l||g(p)},[p,l]),(0,t.jsx)(r.ImageCardStyled,{"data-testid":o,$isFullHeight:!!s,children:(0,t.jsx)(n.default,{imageUrlTemplate:h,alt:m,cardType:d,isFullHeight:s,isInverse:c,isDefaultAspectRatio:u})})}])},303854,699213,623886,736641,871944,67708,799306,421510,913122,e=>{"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function i(e){a(1,arguments);var i=Object.prototype.toString.call(e);return e instanceof Date||"object"===t(e)&&"[object Date]"===i?new Date(e.getTime()):"number"==typeof e||"[object Number]"===i?new Date(e):(("string"==typeof e||"[object String]"===i)&&"u">typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}function n(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function r(e){a(1,arguments);var t=i(e);return t.setHours(0,0,0,0),t}function s(e,t){var a=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return a<0?-1:a>0?1:a}e.s(["default",0,a],699213),e.s(["default",0,i],623886),e.s(["default",0,n],736641);var o,l={};function d(){return l}function c(e,t){a(2,arguments);var n=i(e),r=i(t),s=n.getTime()-r.getTime();return s<0?-1:s>0?1:s}function u(e,t){if(null==e)throw TypeError("assign requires that input parameter not be null or undefined");for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}e.s(["getDefaultOptions",0,d],871944);var p={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function m(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var h={date:m({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:m({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:m({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},g={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function f(e){return function(t,a){var i;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var n=e.defaultFormattingWidth||e.defaultWidth,r=null!=a&&a.width?String(a.width):n;i=e.formattingValues[r]||e.formattingValues[n]}else{var s=e.defaultWidth,o=null!=a&&a.width?String(a.width):e.defaultWidth;i=e.values[o]||e.values[s]}return i[e.argumentCallback?e.argumentCallback(t):t]}}function y(e){return function(t){var a,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],s=t.match(r);if(!s)return null;var o=s[0],l=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(l)?function(e,t){for(var a=0;a<e.length;a++)if(t(e[a]))return a}(l,function(e){return e.test(o)}):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&t(e[a]))return a}(l,function(e){return e.test(o)});return a=e.valueCallback?e.valueCallback(d):d,{value:a=i.valueCallback?i.valueCallback(a):a,rest:t.slice(o.length)}}}let v={code:"en-US",formatDistance:function(e,t,a){var i,n=p[e];if(i="string"==typeof n?n:1===t?n.one:n.other.replace("{{count}}",t.toString()),null!=a&&a.addSuffix)if(a.comparison&&a.comparison>0)return"in "+i;else return i+" ago";return i},formatLong:h,formatRelative:function(e,t,a,i){return g[e]},localize:{ordinalNumber:function(e,t){var a=Number(e),i=a%100;if(i>20||i<10)switch(i%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},era:f({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:f({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:f({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:f({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:f({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(o={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.match(o.matchPattern);if(!a)return null;var i=a[0],n=e.match(o.parsePattern);if(!n)return null;var r=o.valueCallback?o.valueCallback(n[0]):n[0];return{value:r=t.valueCallback?t.valueCallback(r):r,rest:e.slice(i.length)}}),era:y({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:y({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:y({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:y({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:y({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};e.s(["default",0,v],67708);function x(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function w(e,t){a(2,arguments);var n=i(e),r=x(t);return isNaN(r)?new Date(NaN):(r&&n.setDate(n.getDate()+r),n)}function b(e,n){if(a(2,arguments),!n||"object"!==t(n))return new Date(NaN);var r=n.years?x(n.years):0,s=n.months?x(n.months):0,o=n.weeks?x(n.weeks):0,l=n.days?x(n.days):0,d=n.hours?x(n.hours):0,c=n.minutes?x(n.minutes):0,u=n.seconds?x(n.seconds):0,p=i(e),m=s||r?function(e,t){a(2,arguments);var n=i(e),r=x(t);if(isNaN(r))return new Date(NaN);if(!r)return n;var s=n.getDate(),o=new Date(n.getTime());return(o.setMonth(n.getMonth()+r+1,0),s>=o.getDate())?o:(n.setFullYear(o.getFullYear(),o.getMonth(),s),n)}(p,s+12*r):p;return new Date((l||o?w(m,l+7*o):m).getTime()+1e3*(u+60*(c+60*d)))}function S(e,t){return a(2,arguments),i(e).getTime()-i(t).getTime()}e.s(["default",0,x],799306);var k={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function $(e){return e?k[e]:k.trunc}function C(e,t){a(2,arguments);var n=i(e),r=i(t);return n.getTime()>r.getTime()}function _(e){return a(1,arguments),(!!function(e){return a(1,arguments),e instanceof Date||"object"===t(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)||"number"==typeof e)&&!isNaN(Number(i(e)))}function j(e,t){return a(2,arguments),new Date(i(e).getTime()+x(t))}e.s(["default",0,_],421510),e.s(["default",0,j],913122);var P=["years","months","weeks","days","hours","minutes","seconds"];e.s(["formatDate",0,e=>{let t=10===Math.abs(e).toString().length?1e3*e:e;return _(t)?new Date(t).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}):""},"formatDuration",0,e=>(function(e,t){if(arguments.length<1)throw TypeError("1 argument required, but only ".concat(arguments.length," present"));var a,i,n,r,s,o=d(),l=null!=(a=null!=(i=null==t?void 0:t.locale)?i:o.locale)?a:v,c=null!=(n=null==t?void 0:t.format)?n:P,u=null!=(r=null==t?void 0:t.zero)&&r,p=null!=(s=null==t?void 0:t.delimiter)?s:" ";return l.formatDistance?c.reduce(function(t,a){var i="x".concat(a.replace(/(^.)/,function(e){return e.toUpperCase()})),n=e[a];return"number"==typeof n&&(u||e[a])?t.concat(l.formatDistance(i,n)):t},[]).join(p):""})(function(e){a(1,arguments);var t=i(e.start),o=i(e.end);if(isNaN(t.getTime()))throw RangeError("Start Date is invalid");if(isNaN(o.getTime()))throw RangeError("End Date is invalid");var l={};l.years=Math.abs(function(e,t){a(2,arguments);var n=i(e),r=i(t),s=c(n,r),o=Math.abs(function(e,t){a(2,arguments);var n=i(e),r=i(t);return n.getFullYear()-r.getFullYear()}(n,r));n.setFullYear(1584),r.setFullYear(1584);var l=c(n,r)===-s,d=s*(o-Number(l));return 0===d?0:d}(o,t));var d=c(o,t),u=b(t,{years:d*l.years});l.months=Math.abs(function(e,t){a(2,arguments);var n,r=i(e),s=i(t),o=c(r,s),l=Math.abs(function(e,t){a(2,arguments);var n=i(e),r=i(t);return 12*(n.getFullYear()-r.getFullYear())+(n.getMonth()-r.getMonth())}(r,s));if(l<1)n=0;else{1===r.getMonth()&&r.getDate()>27&&r.setDate(30),r.setMonth(r.getMonth()-o*l);var d=c(r,s)===-o;(function(e){a(1,arguments);var t=i(e);return(function(e){a(1,arguments);var t=i(e);return t.setHours(23,59,59,999),t})(t).getTime()===(function(e){a(1,arguments);var t=i(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t})(t).getTime()})(i(e))&&1===l&&1===c(e,s)&&(d=!1),n=o*(l-Number(d))}return 0===n?0:n}(o,u));var p=b(u,{months:d*l.months});l.days=Math.abs(function(e,t){a(2,arguments);var o=i(e),l=i(t),d=s(o,l),c=Math.abs(function(e,t){a(2,arguments);var i=r(e),s=r(t);return Math.round((i.getTime()-n(i)-(s.getTime()-n(s)))/864e5)}(o,l));o.setDate(o.getDate()-d*c);var u=Number(s(o,l)===-d),p=d*(c-u);return 0===p?0:p}(o,p));var m=b(p,{days:d*l.days});l.hours=Math.abs(function(e,t,i){a(2,arguments);var n=S(e,t)/36e5;return $(null==i?void 0:i.roundingMethod)(n)}(o,m));var h=b(m,{hours:d*l.hours});l.minutes=Math.abs(function(e,t,i){a(2,arguments);var n=S(e,t)/6e4;return $(null==i?void 0:i.roundingMethod)(n)}(o,h));var g=b(h,{minutes:d*l.minutes});return l.seconds=Math.abs(function(e,t,i){a(2,arguments);var n=S(e,t)/1e3;return $(null==i?void 0:i.roundingMethod)(n)}(o,g)),l}({start:0,end:6e4*e}),{format:["hours","minutes"]}).replace(/hours?/,e=>"hour"===e?"hr":"hrs").replace(/minutes?/,e=>"minute"===e?"min":"mins"),"formatTimestamp",0,(e,t)=>{let r,s=new Date;if(isNaN((r=new Date("number"==typeof e?e*(e<1e12?1e3:1):e)).getTime()))return"";{let e=function(e,t){return a(1,arguments),function(e,t,r){a(2,arguments);var s,o,l,p,m,h,g,f=d(),y=null!=(s=null!=(o=null==r?void 0:r.locale)?o:f.locale)?s:v;if(!y.formatDistance)throw RangeError("locale must contain localize.formatDistance property");var x=c(e,t);if(isNaN(x))throw RangeError("Invalid time value");var w=u(u({},r),{addSuffix:!!(null==r?void 0:r.addSuffix),comparison:x});x>0?(p=i(t),m=i(e)):(p=i(e),m=i(t));var b=String(null!=(l=null==r?void 0:r.roundingMethod)?l:"round");if("floor"===b)h=Math.floor;else if("ceil"===b)h=Math.ceil;else if("round"===b)h=Math.round;else throw RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");var S=m.getTime()-p.getTime(),k=S/6e4,$=(S-(n(m)-n(p)))/6e4,C=null==r?void 0:r.unit;if("second"===(g=C?String(C):k<1?"second":k<60?"minute":k<1440?"hour":$<43200?"day":$<525600?"month":"year")){var _=h(S/1e3);return y.formatDistance("xSeconds",_,w)}if("minute"===g){var j=h(k);return y.formatDistance("xMinutes",j,w)}if("hour"===g){var P=h(k/60);return y.formatDistance("xHours",P,w)}if("day"===g){var I=h($/1440);return y.formatDistance("xDays",I,w)}if("month"===g){var T=h($/43200);return 12===T&&"month"!==C?y.formatDistance("xYears",1,w):y.formatDistance("xMonths",T,w)}else if("year"===g){var N=h($/525600);return y.formatDistance("xYears",N,w)}throw RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}(e,Date.now(),t)}(r),o=C(r,function(e,t){return a(2,arguments),function(e,t){return a(2,arguments),j(e,6e4*x(t))}(e,-x(t))}(s,5)),l=C(r,function(e,t){return a(2,arguments),w(e,-x(t))}(s,8)),p=(e,t)=>e.toLocaleDateString("en-GB",{day:"numeric",month:t,year:"numeric",timeZone:"UTC"});switch(t){case"live":return`${e} ago`;case"recent":return`Last updated on ${p(r,"short")}`;case"long":if(o)return"Just now";if(l)return`${e} ago`;return p(r,"long");case"seo":return r.toISOString();case"seo-archive":return p(r,"short");default:if(!o&&!l)return p(r,"short");{let t=e.replace("minutes","mins").replace("hour","hr");return o?"Just now":`${t} ago`}}}},"formatTimestampToTime",0,(e,t=!0,a)=>new Date(e).toLocaleTimeString("en-GB",{hour:"numeric",minute:"2-digit",hour12:t,...a&&{timeZone:a,timeZoneName:"short"}}),"getTimeZone",0,()=>Intl.DateTimeFormat().resolvedOptions().timeZone],303854)},973471,e=>{"use strict";e.s(["getFr",0,e=>"number"==typeof e?`repeat(${e}, 1fr)`:e])},913777,e=>{"use strict";var t=e.i(760814),a=e.i(339228),i=e.i(973471);let n=[6,5,4,3,2,1],r=t.default.div.withConfig({displayName:"Grid.styles__GridStyled",componentId:"sc-772acff9-0"})`
  ${({$justifyContent:e,$justifyItems:r,$alignContent:s,$justifySelf:o,$alignItems:l,$alignSelf:d,$columns:c,$padding:u,$gridAutoFlow:p,$gridGap:m,$height:h,$margin:g,$width:f,$rows:y,$left:v,$top:x,$gap:w,$maxWidth:b})=>t.css`
    display: grid;
    box-sizing: border-box;
    ${s&&t.css`
      align-content: ${s};
    `};
    ${d&&t.css`
      align-self: ${d};
    `};
    ${l&&t.css`
      align-items: ${l};
    `};
    ${e&&t.css`
      justify-content: ${e};
    `};
    ${o&&t.css`
      justify-self: ${o};
    `};
    ${r&&t.css`
      justify-items: ${r};
    `};
    ${w&&t.css`
      gap: ${w};
    `};
    ${p&&t.css`
      grid-auto-flow: ${p};
    `};
    ${(({$padding:e,$gridGap:n,$columns:r,$margin:s,$height:o,$width:l,$left:d,$rows:c,$top:u,$maxWidth:p,groups:m})=>t.css`
  ${m.map(m=>(0,a.applyStylesForBreakpoints)(t.css`
        ${!!r?.length&&!!r[m-1]&&t.css`
          grid-template-columns: ${(0,i.getFr)(r?.[m-1])};
        `}
        ${!!c?.length&&!!c[m-1]&&t.css`
          grid-template-rows: ${(0,i.getFr)(c[m-1])};
        `}
        ${!!e?.length&&!!e[m-1]&&t.css`
          /* stylelint-disable-next-line declaration-property-value-disallowed-list -- Dynamic value from props */
          padding: ${e[m-1]};
        `}
        ${!!n?.length&&!!n[m-1]&&t.css`
          gap: ${n[m-1]};
        `}
        ${!!p?.length&&!!p[m-1]&&t.css`
          max-width: ${p[m-1]};
        `}
        ${!!s?.length&&!!s[m-1]&&t.css`
          /* stylelint-disable-next-line declaration-property-value-disallowed-list -- Dynamic value from props */
          margin: ${s[m-1]};
        `}
        ${!!u?.length&&!!o?.length&&!!u[m-1]&&!!o[m-1]&&t.css`
          grid-row: ${u[m-1]} / span ${o[m-1]};
        `}
        ${!!d?.length&&!!l?.length&&!!d[m-1]&&!!l[m-1]&&t.css`
          grid-column: ${d[m-1]} / span ${l[m-1]};
        `}
      `,`group${m}`))}
`)({$padding:u,$gridGap:m,$columns:c,$margin:g,$height:h,$width:f,$rows:y,$left:v,$top:x,$maxWidth:b,groups:n})}
  `}
`;e.s(["GridStyled",0,r])},240911,e=>{"use strict";let t="home",a=e=>Array.isArray(e)?e.map(e=>e.replace(".app","")):e.replace(".app","");e.s(["BASE_SLUG",0,t,"getArrayFromSlug",0,(e=t)=>{let i=a(e);return Array.isArray(i)?i:[i]},"getStringFromSlug",0,(e=t,i=!1,n=!1)=>{let r=a(e),s=Array.isArray(r)?r.join("/"):r;return`${i?"/":""}${s}${n?"/":""}`}])},57988,e=>{"use strict";var t=e.i(746857),a=e.i(240911);function i(e){return e.replace(/<\/?[^>]+(>|$)/g,"")}let n=function(e){let[t]=e.split(/[?#]/),n=t.split("/").filter(Boolean).map(e=>{try{let t=decodeURIComponent(e);return i(t)}catch{return i(e)}});return 0===n.length?[a.BASE_SLUG]:n};e.s(["useCurrentSlug",0,function(){let{asPath:e}=(0,t.useAppRouter)();return n(e)}],57988)},927119,e=>{"use strict";var t=e.i(746857),a=e.i(704570);e.s(["useRolexData",0,function(){let e=(0,t.useAppRouter)(),{rolexPlaylistPath:i,rolexSponsorClipId:n,rolexSponsorClipIdSummary:r}=(0,a.usePageData)(),s=e.asPath.split("?")[0]===i;return{rolexPath:i||"",isRolexPage:s,rolexClipPid:n||"UNDEFINED-ROLEX-CLIP-PID",rolexSponsorSummary:r||""}}],927119)},895270,e=>{"use strict";var t=e.i(184919),a=e.i(57988),i=e.i(704570),n=e.i(927119);let r=[t.ContentSubtype.ClipsNews,t.ContentSubtype.ClipsSport,t.ContentSubtype.Reels,t.ContentSubtype.VerticalClipsNews,t.ContentSubtype.VerticalClipsSport,t.ContentSubtype.VerticalReels];e.s(["useDarkMode",0,function(){let{subtype:e}=(0,i.usePageData)(),{isRolexPage:t}=(0,n.useRolexData)(),[s]=(0,a.useCurrentSlug)(),o=r.includes(e);return"video"===s||o||t}],895270)},939648,e=>{"use strict";e.s(["HEADER_COLLAPSED_HEIGHT",0,64,"HEADER_DEFAULT_HEIGHT",0,80,"HEADER_HEIGHT_MOBILE",0,48])},854300,e=>{"use strict";var t=e.i(391398),a=e.i(868783),i=e.i(895270),n=e.i(548817),r=e.i(409614),s=e.i(760814),o=e.i(939648),l=e.i(339228),d=e.i(222009),c=e.i(879214);let u=s.default.section.withConfig({displayName:"Container.styles__ContainerStyled",componentId:"sc-8b855a6c-0"})`
  ${({theme:e,$isInverse:t,$isDarkMode:a,$marginTop:i,$marginBottom:u,$withScrollMargin:p=!1,$withBackground:m=!0,$zIndex:h,$variant:g})=>s.css`
    display: grid;
    justify-items: center;
    position: relative;

    ${h&&(0,d.applyZIndex)(h)};

    ${(0,c.getSortedEntries)(i).map(([e,t])=>(0,n.default)(t)?"group6"===e?s.css`
            margin-block-start: ${t}px;
          `:(0,l.applyStylesForBreakpoints)(s.css`
              margin-block-start: ${t}px;
            `,e):s.css``)};

    ${(0,c.getSortedEntries)(u).map(([e,t])=>(0,n.default)(t)?"group6"===e?s.css`
            margin-block-end: ${t}px;
          `:(0,l.applyStylesForBreakpoints)(s.css`
              margin-block-end: ${t}px;
            `,e):s.css``)};

    ${(t||a)&&m&&s.css`
      background-color: ${e.container.onInverseBG2.value};

      ${function(e,t,a=!1){let i=a?1:.5,n={};return(0,r.default)(n,e,t,(e=[],t=0)=>e.concat(t)),s.css`
    ${({theme:e})=>Object.entries(n).map(([t,[a,n]])=>{let r=n*i,o=-a*i,d=e.container.onInverseBG2.value;return"group6"===t?s.css`
            box-shadow:
              0 ${r}px 0 0 ${d},
              0 ${o}px 0 0 ${d};
          `:(0,l.applyStylesForBreakpoints)(s.css`
              box-shadow:
                0 ${r}px 0 0 ${d},
                0 ${o}px 0 0 ${d};
            `,t)})};
  `}(i,u,a)};
    `};

    ${p&&s.css`
      scroll-margin-top: ${o.HEADER_DEFAULT_HEIGHT}px;

      ${(0,l.applyStylesForBreakpoints)(s.css`
          scroll-margin-top: ${o.HEADER_HEIGHT_MOBILE}px;
        `,"group2")};
    `};

    ${("advertisement"===g||"advertisement-placeholder"===g)&&s.css`
      padding-top: 15px;
      padding-bottom: 5px;

      ${a?s.css`
            background-color: ${e.advert.onInverse.container.value} !important;
          `:s.css`
            background-color: ${e.advert.container.value} !important;
          `};
    `};

    ${(()=>{switch(g){case"advertisement":return a?s.css`
                border-top: 1px solid ${e.advert.onInverse.border.value} !important;
                border-bottom: 1px solid ${e.advert.onInverse.border.value} !important;
              `:s.css`
                border-top: 1px solid ${e.advert.border.value} !important;
                border-bottom: 1px solid ${e.advert.border.value} !important;
              `;case"advertisement-placeholder":return s.css`
            min-height: 293px;
          `;default:return s.css``}})()};
  `};
`,p=(0,a.withCMSFallback)(({testId:e,id:a,as:n="div",children:r,marginTop:s,marginBottom:o,dataComponent:l,variant:d="content",withBackground:p,zIndex:m,inlineStyles:h,isInverse:g=!1,...f})=>{let y=(0,i.useDarkMode)(),v={group6:s,...(0,c.getCombinedProps)(f,"marginTop")},x={group6:o,...(0,c.getCombinedProps)(f,"marginBottom")};return(0,t.jsx)(u,{id:a,"data-testid":e,"data-component":l,as:n,style:h,$isInverse:g,$isDarkMode:y,$marginTop:v,$marginBottom:x,$withScrollMargin:!!a,$variant:d,$withBackground:p,$zIndex:m,children:r})},({testId:e,id:a,as:i="div",children:n,marginTop:r,marginBottom:s,dataComponent:o,variant:l="content",withBackground:d,zIndex:p,inlineStyles:m,isInverse:h=!1,...g})=>{let f={group6:r,...(0,c.getCombinedProps)(g,"marginTop")},y={group6:s,...(0,c.getCombinedProps)(g,"marginBottom")};return(0,t.jsx)(u,{id:a,"data-testid":e,"data-component":o,as:i,style:m,$isInverse:h,$isDarkMode:h,$marginTop:f,$marginBottom:y,$withScrollMargin:!!a,$variant:l,$withBackground:d,$zIndex:p,children:n})});e.s(["default",0,p],854300)},449492,e=>{"use strict";e.s(["AUDIO_SLUG",0,"audio","EARLY_PROGRESS",0,10,"FULL_PROGRESS",0,100,"LATE_PROGRESS",0,90,"SOUNDS_SLUG",0,"sounds"])},16234,e=>{"use strict";var t=e.i(391398);let a={audio:"Finished",video:"Finished","subscribers-only":"Subscriber only"};var i=e.i(760814),n=e.i(570549);let r=i.css`
  padding: 4px 10px;
  border-radius: 12px;
  display: inline-block;
  white-space: nowrap;
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  max-width: max-content;
`,s=i.default.span.withConfig({displayName:"MediaTag.styles__MediaTagStyled",componentId:"sc-39e7b2ce-0"})(({theme:e,$variant:t,$isInverse:a})=>"subscribers-only"===t?i.css`
          background-color: ${e.subscription.button.default.normal.background.value};
          color: ${e.tabs.selected.inverse.content.value};

          ${r};
          ${(0,n.applyTypography)(e.metaData.emphasised)};
        `:i.css`
          background-color: ${a?e.container.onInverseBG.value:e.playExperience.finishedLabel.value};
          color: ${a?e.text.onInverseBG.default.value:e.text.default.value};

          ${r};
          ${(0,n.applyTypography)(e.metaData.regular)};
        `);e.s(["default",0,({variant:e,isInverse:i=!1,testId:n="media-tag"})=>(0,t.jsx)(s,{$isInverse:i,$variant:e,"data-testid":n,children:a[e]})],16234)},117191,e=>{"use strict";var t=e.i(391398),a=e.i(191788),i=e.i(868783),n=e.i(895270),r=e.i(704570),s=e.i(147097),o=e.i(760814),l=e.i(339228);let d=e=>o.css`
  ${({theme:t})=>o.css`
    .dotcom-ad.active {
      padding-top: 15px;
      padding-bottom: 5px;

      ${e?o.css`
            background-color: ${t.advert.onInverse.container.value} !important;
            border-top: 1px solid ${t.advert.onInverse.border.value} !important;
            border-bottom: 1px solid ${t.advert.onInverse.border.value} !important;
          `:o.css`
            border-top: 1px solid ${t.advert.border.value} !important;
            border-bottom: 1px solid ${t.advert.border.value} !important;
          `};
    }
  `};
`,c=o.default.div.withConfig({displayName:"AdSlot.styles__AdSlotContainerStyled",componentId:"sc-4b576bed-0"})`
  ${({theme:e,$isDark:t,$type:a,$hasPlaceholder:i})=>{let n,r;return o.css`
    ${i&&(n="mid"===a||a?.startsWith("mid_"),r="sid"===a||a?.startsWith("sid_"),o.css`
        background-color: ${e.advert.container.value};

        ${r&&o.css`
          max-height: 655px;
        `}

        ${n&&o.css`
          /* - Ad: 250px
           * - dotcom-ad-text-wrapper (25px with -12px margin-top): +13px
           * - dotcom-ad-inner margin-bottom: +8px
           * - Container padding + borders (15px + 5px + 1px + 1px): +22px
           */
          height: 293px;

          ${(0,l.applyStylesForBreakpoints)(o.css`
              height: 293px;
            `,"group4")}

          ${(0,l.applyStylesForBreakpoints)(o.css`
              height: 293px;
            `,"group2")}
        `}

        ${!n&&!r&&o.css`
          height: 278px;

          ${(0,l.applyStylesForBreakpoints)(o.css`
              height: 118px;
            `,"group4")}

          ${(0,l.applyStylesForBreakpoints)(o.css`
              height: 78px;
            `,"group2")}
        `}
      `)};

    ${(()=>{switch(a){case"spo":case"col":return o.css``;case"mid":return o.css`
            ${d(t)};

            ${t?o.css`
                  padding-block: 24px;

                  ${(0,l.applyStylesForBreakpoints)(o.css`
                      padding-block: 16px;
                    `,"group2")}
                `:o.css`
                  margin-block: 48px;

                  ${(0,l.applyStylesForBreakpoints)(o.css`
                      margin-block: 32px;
                    `,"group2")}
                `};
          `;default:return o.css`
            ${d(t)};
          `}})()};
  `}};
`,u=o.default.div.withConfig({displayName:"AdSlot.styles__AdSlotDummyContainerStyled",componentId:"sc-4b576bed-1"})`
  display: contents;
`;function p(e){let[t]=e.split("_");return t}let m=({type:e,sponsorAdTargetingValues:i=null,isFullWidth:o=!0,onAdvertRendered:l,deferRequest:d=!1,forwardedAdRef:m={current:null},showPlaceholder:h=!1,showContainer:g=!0})=>{let{allowAdvertising:f=!0}=(0,r.usePageData)(),y=(0,s.getIsClient)(),v=(0,a.useRef)(null),x=(0,a.useRef)(null),w=(0,n.useDarkMode)(),[b,S]=(0,a.useState)(e),[k,$]=(0,a.useState)(h||e.includes("sid_")),C=()=>{let e=new IntersectionObserver(([t])=>{!t.isIntersecting&&($(!1),x.current&&e.unobserve(x.current))},{root:null,rootMargin:"0px",threshold:0});x.current&&e.observe(x.current)},_=()=>{if(!f)return;let{coll_name:e}=i||{};y&&"col"===b&&(window._ads=window._ads||{colSlots:{},colSlotCount:0},window._ads.colSlots[e]?S(`col_${window._ads.colSlots[e]}`):(window._ads.colSlotCount++,window._ads.colSlots[e]=window._ads.colSlotCount,S(`col_${window._ads.colSlotCount}`))),window.dotcom.cmd.push(()=>{i?window.dotcom.ads.registerSlot(b,i):window.dotcom.ads.registerSlot(b),(l||h)&&window.googletag.cmd.push(()=>{window.googletag.pubads().addEventListener("slotRenderEnded",e=>{let{slot:t,isEmpty:a,size:i}=e;if(t.getSlotElementId().replace("dotcom-slot-","")===b){let[,e]=i??[0,0];l?.(e),a?C():$(!1)}})})})},j=()=>{k&&C()};return((0,a.useImperativeHandle)(m,()=>({requestAd:_,closePlaceholder:j})),(0,a.useEffect)(()=>{if(!f||d)return;_();let e=v.current;return()=>{e&&window.dotcom.cmd.push(()=>{window.dotcom.ads.destroySlot(b)})}},[b,f,d]),f)?(0,t.jsx)(g?c:u,{ref:x,"data-testid":"ad-unit","data-component":"ad-slot",$type:p(e),$isFullWidth:o,$isDark:w,$hasPlaceholder:k,children:(0,t.jsx)("div",{ref:v,"data-testid":`dotcom-${b}`,id:`dotcom-${b}`,className:"dotcom-ad"})}):null};m.displayName="AdSlot";let h=(0,i.withCMSFallback)(m,({type:e,isFullWidth:a=!0})=>(0,t.jsx)(c,{$type:p(e),$isFullWidth:a,$isDark:!1,$hasPlaceholder:!1,"data-component":"ad-slot","data-testid":"ad-unit",children:(0,t.jsx)("div",{"data-testid":`dotcom-${e}`,id:`dotcom-${e}`,className:"dotcom-ad"})}));e.s(["AdSlot",0,m,"default",0,h],117191)},291246,e=>{"use strict";var t=e.i(391398),a=e.i(191788),i=e.i(746857),n=e.i(396866);let r=(0,a.createContext)([!1]),{Provider:s}=r;e.s(["AdsServiceContext",0,r,"default",0,({children:e,value:a})=>{let[,r]=a,{query:o}=(0,i.useAppRouter)(),l="true"===o["ads-test"]?"adsServiceTest":"adsService",d=async()=>{r(await window.dotcom.ads.enabled())};return(0,t.jsxs)(s,{value:a,children:[(0,t.jsx)(n.default,{strategy:"beforeInteractive",source:l,onReady:d}),e]})}])},232854,e=>{"use strict";var t=e.i(191788),a=e.i(291246);e.s(["useIsAdsServiceEnabled",0,function(){let[e=!1]=(0,t.useContext)(a.AdsServiceContext);return e}],232854)},915929,e=>{"use strict";var t=e.i(391398);let a=(0,e.i(191788).createContext)({isPlaying:!1,isAutoplayEnabled:!1,isNextItemAutoplayEnabled:!0,countdownValue:null,countdownTotalSecs:null,onAutoplayEnabledToggle:()=>null,cancelNextItemAutoplay:()=>null}),{Provider:i}=a;e.s(["CountdownContext",0,a,"default",0,({children:e,value:a})=>(0,t.jsx)(i,{value:a,children:e})])},656612,e=>{"use strict";var t=e.i(823575),a=e.i(519894),i=e.i(789799);e.s(["useCanPlayEpisode",0,function(){let e=(0,a.useFeatureFlag)("audio-windowing"),{isSubscriptionAllowed:n,isSubscribed:r,isSubscriptionCheckComplete:s}=(0,i.useSubscriptionContext)(),o=s&&r;return a=>(0,t.canPlayEpisode)(a,{isAudioWindowingEnabled:e,isSubscriptionAllowed:n,isSubscribed:o})}],656612)},833223,506098,e=>{"use strict";var t=e.i(191788),a=e.i(391398);let i=(0,t.createContext)(()=>null),{Provider:n}=i;e.s(["NestedSectionsContext",0,i,"default",0,({children:e,value:t})=>(0,a.jsx)(n,{value:t,children:e})],506098),e.s(["useNestedSections",0,function(){return(0,t.useContext)(i)}],833223)},94476,316908,e=>{"use strict";var t=e.i(391398),a=e.i(270340),i=e.i(704570),n=e.i(808824),r=e.i(120012);e.s(["default",0,({imageUrlTemplate:e,cardType:s="",sizes:o,loading:l,fetchPriority:d,...c})=>{let{os:u={},browser:p={}}=(0,i.usePageData)(),{getIsEager:m}=(0,a.useEagerImages)(),h=(0,n.supportsWebP)({os:u,browser:p}),g=o??(0,n.getSizesByCardType)(s,"96vw",""),{srcSet:f,mainImageSource:y}=(0,n.getSrcAndSrcSet)(e,!1,h),v=l??(m(y)?"eager":"lazy");return(0,t.jsx)(r.ImageStyled,{sizes:g,srcSet:f,src:y,loading:v,fetchpriority:d,...c})}],94476),e.s(["getHexWithTransparency",0,function(e,t){let a=Math.round(t/100*255).toString(16).padStart(2,"0");return`${e}${a}`}],316908)},160709,e=>{"use strict";var t=e.i(391398),a=e.i(868783),i=e.i(519894),n=e.i(317166),r=e.i(79934),s=e.i(84541),o=e.i(721854);let l={save:r.SaveButtonInner,follow:r.FollowButtonInner},d=(0,a.withCMSFallback)(({action:e="save",...a})=>{let{isSignedIn:s}=(0,n.useUser)(),o=(0,i.useFeatureFlag)("authentication"),d=(0,i.useFeatureFlag)("bookmarking"),c=(0,i.useFeatureFlag)("follow-brand-function"),u="save"===e&&d,p="follow"===e&&c,m=s?l[e]:r.SaveButtonPopover;return o&&(u||p)?(0,t.jsx)(m,{action:e,...a}):null},({action:e="save",variant:a="news",text:i="Save",...n})=>{let r=(0,o.getButtonIcon)(e,!1);return(0,t.jsx)(s.default,{withoutPaddingBlock:!0,withoutPaddingInline:!0,type:"news"===a?"unboxed-share":"round",icon:r,"data-action":e,isSelected:!1,text:i,...n})});e.s(["default",0,d],160709)},593521,77694,e=>{"use strict";var t=e.i(391398),a=e.i(519894),i=e.i(704570),n=e.i(65739),r=e.i(160709),s=e.i(490602),o=e.i(760814),l=e.i(339228);let d=o.default.button.withConfig({displayName:"ArticlePageButtons.styles__ArticlePageButtonsButtonStyled",componentId:"sc-46edd6b5-0"})`
  cursor: pointer;
`,c=o.default.div.withConfig({displayName:"ArticlePageButtons.styles__SaveButtonWrapper",componentId:"sc-46edd6b5-1"})`
  display: inline-flex;

  button[data-action] {
    span[data-testid='button-text'] {
      margin-right: 2px;

      ${(0,l.applyStylesForBreakpoints)(o.css`
          margin-right: 4px;
        `,"group1")};
    }
  }
`;e.s(["ArticlePageButtonsButtonStyled",0,d,"SaveButtonWrapper",0,c],77694),e.s(["default",0,({onCommentClick:e})=>{let o=(0,a.useFeatureFlag)("comments"),{pageTitle:l}=(0,i.usePageData)();return(0,t.jsxs)(t.Fragment,{children:[o&&(0,t.jsx)(d,{"data-testid":"article-page-comment-button",disabled:!e,type:"button",onClick:e,children:(0,t.jsx)(n.default,{name:"participate:comments"})}),(0,t.jsx)(s.default,{trigger:"click",title:l||"",iconPosition:"right"}),(0,t.jsx)(c,{"data-article-page-buttons":!0,children:(0,t.jsx)(r.default,{isInverse:!1,iconPosition:"right",size:"small"})})]})}],593521)},151155,e=>{"use strict";var t=e.i(391398),a=e.i(191788),i=e.i(324951),n=e.i(760814),r=e.i(339228),s=e.i(570549),o=e.i(222009);let l=n.default.div.withConfig({displayName:"Dropdown.styles__DropdownContainerStyled",componentId:"sc-1c05475d-0"})`
  ${({$type:e})=>n.css`
    ${"nestedNav"===e&&n.css`
      display: flex;
      justify-content: flex-end;
      align-content: center;
    `};

    ${"subNav"===e&&n.css`
      position: relative;
      display: inline-block;
    `};
  `};
`,d=n.default.div.withConfig({displayName:"Dropdown.styles__DropdownOverlayStyled",componentId:"sc-1c05475d-1"})`
  ${({theme:e,$type:t})=>n.css`
    position: absolute;
    ${(0,o.applyZIndex)("level3")};

    ${"nestedNav"===t&&n.css`
      display: grid;
      row-gap: 6px;
      top: 28px;
      background-color: ${e.nav.content.value};
      padding: 24px 0;

      li {
        color: #ffffff;

        &:hover {
          background-color: ${e.divider.highEmphasis.value};
        }
      }

      ${(0,r.applyStylesForBreakpoints)(n.css`
          top: 54px;
          left: 0;
          right: 0;
          padding: 24px 16px;
        `,"group2")};
    `};

    ${"subNav"===t&&n.css`
      right: 0;
      padding: 24px 16px;
      background-color: ${e.nav.level2.bgHover.value};

      ${(0,r.applyStylesForBreakpoints)(n.css`
          top: 54px;
          left: 0;
          right: 0;
          padding: 24px 16px;
        `,"group2")};
    `};
  `}
`,c=n.css`
  cursor: pointer;
  display: flex;
  column-gap: 4px;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  position: relative;
`,u=n.default.button.withConfig({displayName:"Dropdown.styles__NestedNavButtonStyled",componentId:"sc-1c05475d-2"})`
  ${({theme:e,$isInverse:t,$isMenuOpen:a})=>n.css`
    ${c};

    svg {
      pointer-events: none;
    }

    &::before {
      position: absolute;
      content: '';
      background-color: ${e.divider.lowEmphasis.value};
      height: 30px;
      width: 1px;
      left: -6px;
    }

    ${a&&n.css`
      background-color: ${e.nav.content.value};
      color: #ffffff;
    `};

    ${t&&n.css`
      color: ${e.text.onInverseBG.default.value};
    `};

    ${(0,s.applyTypography)(e.nav.topbar.level3.default)};
  `};
`,p=n.default.button.withConfig({displayName:"Dropdown.styles__SubNavButtonStyled",componentId:"sc-1c05475d-3"})`
  ${({theme:e,$isMenuOpen:t})=>n.css`
    height: 32px;
    ${c};

    svg {
      pointer-events: none;
    }

    ${t&&n.css`
      background-color: ${e.nav.level2.bgHover.value};
    `};

    ${(0,s.applyTypography)(e.nav.topbar.level2.default)};
  `};
`,m={nestedNav:({children:e,isInverse:a,isMenuOpen:i,...n})=>(0,t.jsx)(u,{$isInverse:a,$isMenuOpen:i,...n,children:e}),subNav:({children:e,isMenuOpen:a,...i})=>(0,t.jsx)(p,{$isInverse:!1,$isMenuOpen:a,...i,children:e})};e.s(["default",0,({children:e,overlay:n,type:r,isOpen:s,onDropdownToggle:o,onDropdownClose:c,isInverse:u})=>{let[p,h]=(0,a.useState)(!1),g=(0,a.useRef)(null),f=void 0===s?p:s,y=m[r];return(0,i.useOutsideClicker)(g,()=>c?c():h(!1)),(0,t.jsxs)(l,{ref:g,$type:r,children:[(0,t.jsx)(y,{isInverse:u,isMenuOpen:f,onClick:()=>o?o():h(e=>!e),children:e}),f&&(0,t.jsx)(d,{$type:r,children:n})]})}],151155)},581620,e=>{"use strict";e.s(["SEARCH_RESULTS_MAX_PAGES",0,29,"SEARCH_SLUG",0,"search"])},51086,633430,e=>{"use strict";var t=e.i(391398),a=e.i(459949),i=e.i(868783),n=e.i(191788),r=e.i(184919),s=e.i(823575),o=e.i(746857),l=e.i(704570);let d=(0,n.createContext)({}),{Provider:c}=d;e.s(["SearchAnalyticsContext",0,d,"default",0,({children:e,value:a})=>(0,t.jsx)(c,{value:a,children:e})],633430);let u=function(e){let{query:t}=(0,o.useAppRouter)(),{type:a}=(0,l.usePageData)(),i=(0,n.useRef)(!1),c=a===r.ContentType.SearchPage,{results:u,page:p}=e,{submittedSearchText:m="",inputRef:h}=(0,n.useContext)(d),g=(0,n.useCallback)(({title:e="",href:t,type:a="newport",metadata:i,id:n,brandName:r,seriesName:o},l)=>{let{contentType:d,subtype:u}=i,h=["episode","series","brand"].find(e=>u===e)?(0,s.getAvProperties)({contentType:d,subtype:u,title:e,brandName:r,seriesName:o,id:n}):null;c&&window.analytics.sendEvent({eventGrouping:"internal_search_result_click",eventProperties:{ise_page:p,ise_keyword:m,ise_click_rank:l,item_name:e,item_link:t,item_type:a,...h||{}}})},[c,p,m]);return(0,n.useEffect)(()=>{let e=()=>{u.length&&(window.analytics.sendEvent({eventGrouping:"internal_search_result_display",eventProperties:{ise_keyword:h?.current?.value||t?.q?.toString()||"",ise_page:p}}),i.current=!0)};return c&&(i.current?e():window.addEventListener("echo_initialize_success",e)),()=>{c&&window.removeEventListener("echo_initialize_success",e)}},[c,t,h,p,u]),{onResultItemClick:g}};var p=e.i(612097),m=e.i(554692),h=e.i(581620),g=e.i(760814);let f=g.default.div.withConfig({displayName:"NewJersey.styles__NewJerseyContainerStyled",componentId:"sc-189bb7d3-0"})`
  display: grid;
  row-gap: 24px;
`,y=g.default.div.withConfig({displayName:"NewJersey.styles__NewJerseyPaginationStyled",componentId:"sc-189bb7d3-1"})`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  margin-bottom: 120px;
`,v=({paginationData:e={},testId:i="new-jersey",collectionAnalytics:n,controlButtonsPortalRef:r,content:s=[]})=>{let{pageSize:o,total:l,page:d}=(0,p.useThrottledPagination)(!0,e.pageSize,e.total,h.SEARCH_RESULTS_MAX_PAGES),{onResultItemClick:c}=u({page:d,pageSize:o,total:l,results:s}),g=s.slice(0,o);return(0,t.jsxs)(f,{"data-testid":`${i}-grid`,children:[g.length?g.map((e,a)=>(0,t.jsx)(m.default,{...e,hideBottomBorder:a===g.length-1,type:"newport",collectionAnalytics:n,itemPosition:a,onClick:()=>c({...e,type:"newport"},a),isOverrideAnalytics:!0,hideMetadata:!0},a)):(0,t.jsx)("div",{ref:r}),(0,t.jsx)(y,{children:(0,t.jsx)(a.Pagination,{currentPage:d,itemsTotalCount:l,itemsPerPage:o,pageRangeDisplayed:6})})]})},x=(0,i.withCMSFallback)(v,({content:e=[],paginationData:a={},testId:i,...n})=>{let{pageSize:r}=a,s=e.slice(0,r);return(0,t.jsx)(f,{children:s.map((e,a)=>(0,t.jsx)(m.default,{...e,type:"newport",...n,hideMetadata:!0},a))})});e.s(["NewJersey",0,v,"default",0,x],51086)},324951,e=>{"use strict";var t=e.i(191788);e.s(["useOutsideClicker",0,function(e,a,i="click"){let n=(0,t.useRef)(!1);(0,t.useEffect)(()=>{function t(t){let{current:i}=n,{current:r}=e,s=r?.contains(t.target);i&&r&&!s&&a(t)}return n.current=!1,setTimeout(()=>{n.current=!0},0),document.addEventListener(i,t),()=>{document.removeEventListener(i,t)}},[e,a,i])}],324951)},287988,e=>{"use strict";e.s(["BOOKMARKS_SLUG",0,"saved"])},542383,825893,e=>{"use strict";var t=e.i(191788),a=e.i(391398),i=e.i(480495),n=e.i(317166),r=e.i(830945);let s=(0,t.createContext)({dotcom:{isConsentReady:!1,hasFullSourcepointConsent:!1,hasTaboolaConsent:!1},account:{hasPersonalizedContentConsent:!1}}),{Provider:o}=s;e.s(["UserConsentContext",0,s,"UserConsentProvider",0,({children:e})=>{let[s,l]=(0,t.useState)(!1),[d,c]=(0,t.useState)(!1),[u,p]=(0,t.useState)(!1),[m,h]=(0,t.useState)(!1),{isSignedIn:g}=(0,n.useUser)();return(0,t.useEffect)(()=>{let e=()=>{window.removeEventListener("ngas:consentReady",e),l(!0),c(window?.dotcom?.consent?.sp===2),h(window.dotcom.consent.gppApplies?2===window.dotcom.consent.sp:!!window.dotcom.consent.gdprApplies&&!!window.dotcom.consent.vendor.taboola)};return window?.dotcom?.consent?.consentReady?e():window.addEventListener("ngas:consentReady",e),()=>window.removeEventListener("ngas:consentReady",e)},[]),(0,t.useEffect)(()=>{try{if(g&&d){let e=String((0,i.getCookie)(r.USER_ID)),{ep:t}=JSON.parse(atob(e));p(!!t)}else p(d)}catch{p(d)}},[d,g]),(0,a.jsx)(o,{value:{dotcom:{isConsentReady:s,hasFullSourcepointConsent:d,hasTaboolaConsent:m},account:{hasPersonalizedContentConsent:u}},children:e})}],825893),e.s(["useConsent",0,function(){return(0,t.useContext)(s)}],542383)},232489,e=>{"use strict";var t=e.i(606919),a=e.i(287988),i=e.i(147097),n=e.i(318438);e.s(["getHref",0,(e,r,s="")=>{if(!(0,i.getIsClient)())return"";let o=window.location.origin,l="https://www.bbc.com"===o?n.siteLabel.production:n.siteLabel.test,d=`${o}${s}`;switch(r){case"saved_items":return`${o}/${a.BOOKMARKS_SLUG}`;case"manage_subscription":return`${o}/managesubscription`;case"subscribe":return`${o}/subscribe`;case"sign_out":return(0,t.getAuthUrl)(e,{userOrigin:l});case"settings":return(0,t.getAuthUrl)(e,{userOrigin:l,ptrt:d,web:"true"});default:return(0,t.getAuthUrl)(e,{userOrigin:l,ptrt:d})}}])},530815,e=>{"use strict";var t=e.i(823575),a=e.i(519894);e.s(["useIsWithinSubscriptionWindow",0,function(e){return(0,a.useFeatureFlag)("audio-windowing")&&(0,t.isWithinSubscriptionWindow)(e)}],530815)},276045,e=>{"use strict";var t=e.i(191788),a=e.i(879677),i=e.i(788664),n=e.i(494373),r=e.i(519894),s=e.i(704570),o=e.i(898229);e.s(["useWorldNewsData",0,function(){let{country:e="",worldNewsTvPath:l,worldNewsTvScheduleId:d,worldNewsFullScheduleUrl:c=""}=(0,s.usePageData)(),u=(0,n.getWntvRegion)(e),p=(0,n.isWntvCountry)(e),m=(0,r.useFeatureFlag)("legacy-api"),h=(0,r.useFeatureFlag)(`wntv-${u}`),g=(0,r.useFeatureFlag)(`wntv-${u}-preroll-ad`),f=p&&h,y=(0,t.useCallback)(async t=>{let{data:a}=await (0,o.fetchClient)(t,{isLegacyApiEnabled:m,...m?{headers:new Headers({country:e})}:{params:new URLSearchParams({country:e})}});return a},[e,m]),v=(0,i.default)(f?"schedule":null,y,{refreshInterval:3e5});return{isWntvEnabled:f,isWntvPrerollAdEnabled:p&&g,worldNewsData:v,worldNewsTvPath:(0,a.default)(l,""),worldNewsServiceId:(0,a.default)(d,""),worldNewsFullScheduleUrl:c}}],276045)},215812,e=>{"use strict";var t=e.i(760814),a=e.i(913777),i=e.i(339228),n=e.i(570549);let r=t.css`
  display: none;
  ${(0,i.applyStylesForBreakpoints)(t.css`
      display: block;
    `,"group2")};
`,s=t.css`
  display: block;

  ${(0,i.applyStylesForBreakpoints)(t.css`
      display: none;
    `,"group2")};
`,o=t.default.p.withConfig({displayName:"Bradford.styles__TitleStyled",componentId:"sc-f26957a7-0"})`
  ${({theme:e})=>t.css`
    color: #202224;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    ${(0,n.applyTypography)(e.promoHeadline.xSmall.default.bpLarge)};
  `}
`,l=t.default.div.withConfig({displayName:"Bradford.styles__AnchorInnerStyled",componentId:"sc-f26957a7-1"})`
  ${({$isLive:e,$isOnDemand:a})=>(e||a)&&t.css`
      cursor: pointer;

      &:hover {
        ${o} {
          text-decoration: underline;
        }
      }
    `}
`,d=(0,t.default)(a.GridStyled).withConfig({displayName:"Bradford.styles__CardStyled",componentId:"sc-f26957a7-2"})`
  ${({$isLive:e,$isFirst:a,theme:n})=>t.css`
    width: 100%;
    border-bottom: 1px solid #e6e8ea;
    padding: 20px 16px 16px 16px;

    ${e&&t.css`
      margin-bottom: 12px;
      padding-top: 16px;
      border-bottom: none;
      background-color: ${n.container.onDefaultBG2.value};

      ${(0,i.applyStylesForBreakpoints)(t.css`
          margin-bottom: 4px;
        `,"group2")};
    `}

    ${!e&&a&&t.css`
      padding-top: 0;
    `}
  `}
`,c=t.default.span.withConfig({displayName:"Bradford.styles__TimeStyled",componentId:"sc-f26957a7-3"})`
  ${({theme:e})=>t.css`
    color: #545658;
    ${(0,n.applyTypography)(e.audio.listCard.timestamp.bpSmall)};
    font-family: 'BBC Reith Sans';
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
  `}
`,u=(0,t.default)(a.GridStyled).withConfig({displayName:"Bradford.styles__TextGridStyled",componentId:"sc-f26957a7-4"})`
  gap: 2px;
  max-height: unset;
  align-content: baseline;

  ${(0,i.applyStylesForBreakpoints)(t.css`
      max-height: 80px;
    `,"group2")};
`,p=t.default.div.withConfig({displayName:"Bradford.styles__ArtworkStyled",componentId:"sc-f26957a7-5"})`
  img {
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  ${({$isLive:e})=>e&&t.css`
      img {
        border-radius: 50%;
      }
    `}

  ${(0,i.applyStylesForBreakpoints)(t.css`
      margin: auto;
    `,"group2")};
`,m=t.default.p.withConfig({displayName:"Bradford.styles__BrandNameStyled",componentId:"sc-f26957a7-6"})`
  ${({theme:e})=>t.css`
    color: #545658;
    ${(0,n.applyTypography)(e.metaData.large)};

    ${(0,i.applyStylesForBreakpoints)(t.css`
        ${(0,n.applyTypography)(e.audio.listCard.brandName.bpSmall)};
      `,"group2")};
  `}
`,h=t.default.p.withConfig({displayName:"Bradford.styles__DescriptionStyled",componentId:"sc-f26957a7-7"})`
  ${({$isLive:e})=>t.css`
    color: #545658;
    margin-top: 8px;
    ${e&&t.css`
      margin-bottom: 12px;
    `}
    /* applyTypography(theme.promoDescription.bpLarge)}; TODO missing token */
    /* styleName: promoDescription.bpLarge; */
    font-family: "BBC Reith Serif";
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
  `}
`,g=(0,t.default)(h).withConfig({displayName:"Bradford.styles__DescriptionMobileStyled",componentId:"sc-f26957a7-8"})`
  ${r};
`,f=(0,t.default)(h).withConfig({displayName:"Bradford.styles__DescriptionDesktopStyled",componentId:"sc-f26957a7-9"})`
  ${s};
`,y=t.default.div.withConfig({displayName:"Bradford.styles__LiveIndicatorStyled",componentId:"sc-f26957a7-10"})`
  ${({theme:e})=>t.css`
    display: flex;
    column-gap: 2px;
    color: #eb0000;
    ${(0,n.applyTypography)(e.kicker.indexcardHeadlinexSmall.bpLarge)};

    svg {
      height: 20px;
      width: 20px;
    }
  `}
`,v=t.default.div.withConfig({displayName:"Bradford.styles__MetadataStyled",componentId:"sc-f26957a7-11"})`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`,x=t.default.div.withConfig({displayName:"Bradford.styles__ProgressBarDesktopStyled",componentId:"sc-f26957a7-12"})`
  ${s};
`,w=t.default.div.withConfig({displayName:"Bradford.styles__ProgressBarMobileStyled",componentId:"sc-f26957a7-13"})`
  ${r};
`,b=t.default.div.withConfig({displayName:"Bradford.styles__DescriptionDesktopWrapperStyled",componentId:"sc-f26957a7-14"})`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  ${(0,i.applyStylesForBreakpoints)(t.css`
      display: none;
    `,"group2")};

  ${({theme:e})=>t.css`
    button[data-action='play'] {
      min-width: unset;
      margin-left: 8px;
      background: ${e.contentIndicator.large.onInverse.background.value};
      color: ${e.contentIndicator.large.onInverse.content.value};
      border-radius: 50%;
    }
  `}
`,S=t.default.div.withConfig({displayName:"Bradford.styles__DescriptionMobileWrapperStyled",componentId:"sc-f26957a7-15"})`
  display: none;

  ${(0,i.applyStylesForBreakpoints)(t.css`
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    `,"group2")};

  ${({theme:e})=>t.css`
    button[data-action='play'] {
      min-width: unset;
      margin-left: 8px;
      background: ${e.contentIndicator.large.onInverse.background.value};
      color: ${e.contentIndicator.large.onInverse.content.value};
      border-radius: 50%;
    }
  `}
`;e.s(["AnchorInnerStyled",0,l,"ArtworkStyled",0,p,"BrandNameStyled",0,m,"CardStyled",0,d,"DescriptionDesktopStyled",0,f,"DescriptionDesktopWrapperStyled",0,b,"DescriptionMobileStyled",0,g,"DescriptionMobileWrapperStyled",0,S,"LiveIndicatorStyled",0,y,"MetadataStyled",0,v,"ProgressBarDesktopStyled",0,x,"ProgressBarMobileStyled",0,w,"TextGridStyled",0,u,"TimeStyled",0,c,"TitleStyled",0,o])},506811,e=>{"use strict";var t=e.i(732299);e.s(["processNetworkError",0,function(e){if(e instanceof t.HTTPError){let t=Error(e.message);return t.name=e.name,t.stack=e.stack,t.statusCode=e.statusCode,t}return e instanceof Error&&"statusCode"in e||e instanceof Error?e:Error(String(e))}])},458810,346455,e=>{"use strict";var t=e.i(191788),a=e.i(959560),i=e.i(746857),n=e.i(704570),r=e.i(240911),s=e.i(258069),o=e.i(898229),l=e.i(506811),d=e.i(993297);async function c(e,t){try{let{data:a}=await (0,o.fetchClient)(e,t);return function(e){let{data:t,page:a,pageSize:i,total:n}=e;return{page:a,pageSize:i,total:n,results:t.map(d.transformContent)}}(a)}catch(e){throw(0,l.processNetworkError)(e)}}let u=function(e,a){let{query:{slug:o}}=(0,i.useAppRouter)(),{country:l}=(0,n.usePageData)(),d=e.includes("content-collection"),u=d?{...a,params:{country:l||"xx"}}:a;return(0,t.useCallback)((t,a)=>c(e,(0,s.buildFetchInit)(u,{page:String(t),size:String(a),...d?{path:(0,r.getStringFromSlug)(o,!0)}:{}})),[e,d,l,o,a])};e.s(["useCollectionRequest",0,u],346455),e.s(["useCollectionPagination",0,function(e,i,n){let{pageSize:r=20,collectionRef:s,scrollOffset:o=160}=n,[l,d]=(0,t.useState)(0),[c,p]=(0,t.useState)(!1),m=u(e,i),{data:{results:h}={},isLoading:g}=(0,a.default)(c?`${e}?page=${l}&size=${r}`:null,()=>m(l,r)),f=(0,t.useCallback)(e=>{if(d(e),s?.current){let{scrollY:e,scrollTo:t}=window,{top:a}=s.current.getBoundingClientRect();t({top:e+a-o,behavior:"smooth"})}},[s,o]);return(0,t.useEffect)(()=>{c||0===l||p(!0)},[l,c]),{results:h,isLoading:g,currentPage:l,handlePageChange:f}}],458810)},612097,e=>{"use strict";var t=e.i(191788),a=e.i(746857),i=e.i(240911);e.s(["useThrottledPagination",0,function(e,n=9,r=0,s){let{query:o,replace:l}=(0,a.useAppRouter)(),{page:d="1",slug:c,...u}=o,p=(0,i.getStringFromSlug)(c,!0),m=parseInt(d,10),h=s??Math.ceil(r/n),g=Math.min(m,h),f=s?Math.min(n*s,r):r;return(0,t.useEffect)(()=>{if(m>h){let t=new URLSearchParams({...u,page:h.toString()});l(`${p}?${t.toString()}`,void 0,{shallow:e}).then()}},[l,m,u,e,p,h]),{page:g,pageSize:n,total:f}}],612097)},453784,145707,e=>{"use strict";var t=e.i(391398),a=e.i(191788);let i=function(e){return({layout:t,asideIndex:a,...i})=>e(i,t,a)};e.s(["forwardLayout",0,i],145707);var n=e.i(704570),r=e.i(854300),s=e.i(217256),o=e.i(485768),l=e.i(117191);let d=({children:e,adHeight:a})=>(0,t.jsx)(r.default,{dataComponent:"advertisement-block",variant:null===a?"advertisement-placeholder":"advertisement",marginTop:48,marginBottom:48,group2:{marginTop:32,marginBottom:32},...0===a?{inlineStyles:{display:"none"}}:{},children:(0,t.jsx)(s.default,{columns:24,group2:{columns:12},children:(0,t.jsx)(o.default,{colStart:1,colSpan:24,group2:{colStart:1,colSpan:12},children:e})})}),c=({children:e,adHeight:a})=>(0,t.jsx)(r.default,{dataComponent:"advertisement-block",variant:null===a?"advertisement-placeholder":"advertisement",marginTop:48,marginBottom:48,group2:{marginTop:32,marginBottom:32},...0===a?{inlineStyles:{display:"none"}}:{},children:(0,t.jsx)(s.default,{columns:24,group2:{columns:12},children:(0,t.jsx)(o.default,{colStart:1,colSpan:22,group5:{colStart:1,colSpan:19},group4:{colStart:1,colSpan:14},group3:{colStart:1,colSpan:24},group2:{colStart:1,colSpan:12},children:e})})}),u=({incrementedType:e,...a})=>e?(0,t.jsx)(l.AdSlot,{...a,type:e}):null,p=i((e,i)=>{let{allowAdvertising:r=!0}=(0,n.usePageData)(),[s,o]=(0,a.useState)(null),p=e.incrementedType?u:l.AdSlot,m=e=>o(e);if(!r)return null;switch(i){case"single-column":return(0,t.jsx)(d,{adHeight:s,children:(0,t.jsx)(p,{showContainer:!1,showPlaceholder:!1,onAdvertRendered:m,...e})});case"double-column":return(0,t.jsx)(c,{adHeight:s,children:(0,t.jsx)(p,{showContainer:!1,showPlaceholder:!1,onAdvertRendered:m,...e})})}});e.s(["default",0,p],453784)},102358,680516,e=>{"use strict";var t=e.i(147097),a=e.i(240911);function i(e){return e?.current?.clientWidth||0}e.s(["DEFAULT_HEADER_HEIGHT",0,65,"DROPDOWN_NAVIGATION_ITEM_EXTERNAL_ID",0,"dropdown-navigation-item-external","DROPDOWN_NAVIGATION_ITEM_TEST_ID",0,"dropdown-navigation-item","MAIN_NAVIGATION_ITEM",0,"mainNavigationItemStyled","MAIN_NAVIGATION_LINK_TEST_ID",0,"mainNavigationLink","NAVIGATION_ID",0,"main-navigation-container","NAVIGATION_TEST_ID",0,"level1-navigation-container","NAVIGATION_THRESHOLD",0,100,"SUB_NAVIGATION",0,"level2-navigation-container","SUB_NAVIGATION_LINK_TEST_ID",0,"subNavigationLink"],680516);let n={header:"header",main:"main",sub:"sub_navigation",dropdown:"sub_navigation",drawer:"drawer",footer:"footer",error:"error"};e.s(["checkResponsiveFitment",0,(e,t,a=!1)=>i=>{let[{target:n,contentRect:r}]=i,{children:s}=n,{width:o}=r,{children:l}=s[0],d=Array.from(l),c=a?o/1.6:o;d.reduce((e,t)=>{let{clientWidth:a}=t;return e>c&&!t.hasAttribute("data-show")?t.setAttribute("data-hidden","true"):t.removeAttribute("data-hidden"),e+a},100+t),e(d.findIndex(e=>e.hasAttribute("data-hidden")))},"getActiveNavigationTree",0,(e,t,i)=>{let n=(0,a.getStringFromSlug)(e,!0,!1),r=(e,t,a=[],i=1)=>{for(let n of t){if(n.path===e)return{activeNavigationItem:{...n,level:i},parents:a};if(n.subMenus&&n.subMenus.length>0){let t=r(e,n.subMenus,[...a,{...n,level:i}],i+1);if(t.activeNavigationItem)return t}}return{activeNavigationItem:null,parents:[]}},{activeNavigationItem:s,parents:o}=i&&r(n,i)||{},{activeNavigationItem:l,parents:d}=r(n,t),c=(o?.length?[...o,s]:[...d,l]).map(e=>{let{title:t,level:a,path:i=""}=e||{};return e&&{title:t,level:a,path:i}}).filter(Boolean),u="/home"===n||"/"===n,p=!!l&&!u,m=[...d,l],h=m?.[0]||null,g=h?.subMenus||[],f=p&&l&&m.indexOf(l)>=1?l.subMenus?.length?l:c.length>2?d.slice(-1)[0]:l:null,y=m.indexOf(l)>=1&&f&&f?.subMenus||[],v=c?.[0]?.title||"",x=!!y.length,w="live"===v.toLowerCase(),b="news"===v.toLowerCase(),S=f?.title||null;return{isHomePage:u,isLivePage:w,isNestedMainNav:p,isNestedNavAvailable:x,isNewsPage:b,levels:!!c.length&&c||null,nestedNavigationItems:y,subNavigationItems:g,activeNavigationItem:l,nestedNavigationTitle:S}},"getNavigationAnalytics",0,(e,a,i,r,s)=>{if((0,t.getIsClient)()){let t=r?.toString()[0]==="/"?"":"/";return{eventGrouping:"navigation",eventProperties:{item_name:a,item_link:i||`${window?.location.origin}${t}${r}`,group_name:s||"navigation",group_type:n[e]}}}},"isParentWiderThanChild",0,function(e,t){return!e.current||!t.current||i(e)>i(t)}],102358)},36480,e=>{"use strict";var t=e.i(391398),a=e.i(893409),i=e.i(108019),n=e.i(102358);let r={429:"Too many requests.",500:"We ran into a technical problem."};var s=e.i(760814),o=e.i(339228),l=e.i(570549);let d=s.default.div.withConfig({displayName:"ErrorPage.styles__ErrorPageStyled",componentId:"sc-967c0ce6-0"})`
  padding-top: 32px;
  margin-bottom: 88px;
  ${(0,o.applyStylesForBreakpoints)(s.css`
      padding-top: 24px;
    `,"group2")};
`,c=s.default.h2.withConfig({displayName:"ErrorPage.styles__ErrorStyled",componentId:"sc-967c0ce6-1"})`
  ${({theme:e})=>s.css`
    display: grid;
    ${(0,l.applyTypography)(e.headline.small.bpLarge)};
    color: ${e.text.lowEmphasis.value};
    padding-bottom: 24px;
  `};
`,u=s.default.p.withConfig({displayName:"ErrorPage.styles__ErrorDetailStyled",componentId:"sc-967c0ce6-2"})`
  ${({theme:e})=>s.css`
    display: grid;
    ${(0,l.applyTypography)(e.bodyCopy.default.bpLarge)};
    color: ${e.text.lowEmphasis.value};
    padding-bottom: 24px;
  `};
`,p=s.default.div.withConfig({displayName:"ErrorPage.styles__ErrorPageVisitTextStyled",componentId:"sc-967c0ce6-3"})`
  float: left;
`,m=s.default.a.withConfig({displayName:"ErrorPage.styles__ErrorPageHomeLinkStyled",componentId:"sc-967c0ce6-4"})`
  ${({theme:e})=>s.css`
    ${(0,l.applyTypography)(e.bodyCopy.links.bpLarge)};
    color: ${e.text.default.value};
    padding-bottom: 24px;
    text-decoration-line: underline;
    cursor: pointer;
  `};
`,h=s.default.div.withConfig({displayName:"ErrorPage.styles__ErrorPageHomeLinkWrapperStyled",componentId:"sc-967c0ce6-5"})`
  display: inline-block;
  margin-left: 6px;
`;e.s(["default",0,({statusCode:e=500})=>{let s=r[e]||r[500],o=(0,n.getNavigationAnalytics)("error","Home",void 0,"/");return(0,t.jsx)(i.ContainerStyled,{$type:"contained",children:(0,t.jsxs)(d,{children:[(0,t.jsx)(c,{children:`Error ${e} - ${s}`}),(0,t.jsx)(u,{children:"The server wasn’t able to load this page. Please press refresh or try again later."}),(0,t.jsxs)("div",{children:[(0,t.jsx)(p,{children:(0,t.jsx)(u,{children:"Visit the"})}),(0,t.jsx)(h,{children:(0,t.jsx)(a.default,{href:"/",analytics:o,styledAnchor:m,children:"Homepage"})})]})]})})}],36480)},344065,e=>{"use strict";var t=e.i(391398),a=e.i(65739),i=e.i(760814),n=e.i(339228),r=e.i(570549);let s=i.default.div.withConfig({displayName:"LoadingSpinner.styles__SpinnerContainerStyled",componentId:"sc-1c23711c-0"})`
  display: flex;
  justify-content: center;
`,o=(0,i.default)(s).withConfig({displayName:"LoadingSpinner.styles__SpinnerWrapperStyled",componentId:"sc-1c23711c-1"})`
  ${({theme:e,$isInverse:t})=>i.css`
    flex-direction: column;
    color: ${t?e.interactive2.onInverseBG.pressed.value:e.interactive2.onDefaultBG.pressed.value};
  `}
`,l=(0,i.default)(s).withConfig({displayName:"LoadingSpinner.styles__SpinnerTextStyled",componentId:"sc-1c23711c-2"})`
  ${({theme:e})=>i.css`
    margin-bottom: 16px;
    ${(0,r.applyTypography)(e.generic.headline.xSmall.bpLarge)};
    ${(0,n.applyStylesForBreakpoints)(i.css`
        ${(0,r.applyTypography)(e.generic.headline.xSmall.bpSmall)};
      `,"group1","group2")}
  `}
`;e.s(["default",0,({text:e="Fetching results",isInverse:i=!1})=>(0,t.jsxs)(o,{"data-testid":"loading-spinner",$isInverse:i,children:[(0,t.jsx)(l,{children:e}),(0,t.jsx)(s,{children:(0,t.jsx)(a.default,{"data-testid":"spinner-icon",name:"playback-avkx:loading",width:30,height:30})})]})],344065)},363402,e=>{"use strict";var t=e.i(191788),a=e.i(959560),i=e.i(116240),n=e.i(890979);let r=Promise.resolve(),s=(0,i.withMiddleware)(a.default,e=>(a,s,o)=>{let l,d=(0,t.useRef)(!1),{cache:c,initialSize:u=1,revalidateAll:p=!1,persistSize:m=!1,revalidateFirstPage:h=!0,revalidateOnMount:g=!1,parallel:f=!1}=o;try{(l=(0,i.serialize)(a?a(0,null):null)[0])&&(l="$inf$"+l)}catch(e){}let[y,v,x]=(0,i.createCacheHelper)(c,l),w=(0,t.useCallback)(()=>(0,i.isUndefined)(y()._l)?u:y()._l,[c,l,u]);(0,n.useSyncExternalStore)((0,t.useCallback)(e=>l?x(l,()=>{e()}):()=>{},[c,l]),w,w);let b=(0,t.useCallback)(()=>{let e=y()._l;return(0,i.isUndefined)(e)?u:e},[l,u]),S=(0,t.useRef)(b());(0,i.useIsomorphicLayoutEffect)(()=>{if(!d.current){d.current=!0;return}l&&v({_l:m?S.current:b()})},[l,c]);let k=g&&!d.current,$=e(l,async e=>{let t=y()._i,n=[],r=b(),[l]=(0,i.createCacheHelper)(c,e),d=l().data,u=[],m=null;for(let e=0;e<r;++e){let[r,l]=(0,i.serialize)(a(e,f?null:m));if(!r)break;let[g,y]=(0,i.createCacheHelper)(c,r),v=g().data,x=p||t||(0,i.isUndefined)(v)||h&&!e&&!(0,i.isUndefined)(d)||k||d&&!(0,i.isUndefined)(d[e])&&!o.compare(d[e],v);if(s&&x){let t=async()=>{y({data:v=await s(l),_k:l}),n[e]=v};f?u.push(t):await t()}else n[e]=v;f||(m=v)}return f&&await Promise.all(u.map(e=>e())),v({_i:i.UNDEFINED}),n},o),C=(0,t.useCallback)(function(e,t){let a="boolean"==typeof t?{revalidate:t}:t||{},n=!1!==a.revalidate;return l?(n&&((0,i.isUndefined)(e)?v({_i:!0}):v({_i:!1})),arguments.length?$.mutate(e,{...a,revalidate:n}):$.mutate()):r},[l,c]),_=(0,t.useCallback)(e=>{let t;if(!l)return r;let[,n]=(0,i.createCacheHelper)(c,l);if((0,i.isFunction)(e)?t=e(b()):"number"==typeof e&&(t=e),"number"!=typeof t)return r;n({_l:t}),S.current=t;let s=[],[o]=(0,i.createCacheHelper)(c,l),d=null;for(let e=0;e<t;++e){let[t]=(0,i.serialize)(a(e,d)),[n]=(0,i.createCacheHelper)(c,t),r=t?n().data:i.UNDEFINED;if((0,i.isUndefined)(r))return C(o().data);s.push(r),d=r}return C(s)},[l,c,C,b]);return{size:b(),setSize:_,mutate:C,get data(){return $.data},get error(){return $.error},get isValidating(){return $.isValidating},get isLoading(){return $.isLoading}}});e.s(["default",0,s])},521670,588299,e=>{"use strict";var t=e.i(760814);let a=t.keyframes`
  0% {
    background-color: rgb(58, 60, 62);
  }

  100% {
    background-color: rgb(82, 84, 86);
  }
`,i=t.keyframes`
  0% {
    background-color: #e6e8ea;
  }

  100% {
    background-color: #d2d4d6;
  }
`,n=t.default.div.withConfig({displayName:"CardSkeleton.styles__SkeletonBlockStyled",componentId:"sc-597e70be-0"})`
  ${({$height:e="1em",$width:n="100%",$isInverse:r=!1})=>t.css`
    width: ${n};
    height: ${e};
    background-color: ${r?"rgb(58, 60, 62)":"#e6e8ea"};
    animation: ${r?a:i} 1.2s ease-in-out infinite alternate;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}
`,r=t.default.div.withConfig({displayName:"CardSkeleton.styles__SkeletonCardStyled",componentId:"sc-597e70be-1"})`
  position: relative;
  display: grid;
  row-gap: 8px;
  min-width: 100%;
`;e.s(["SkeletonBlockStyled",0,n,"SkeletonCardStyled",0,r],521670);var s=e.i(391398),o=e.i(191788);let l=t.default.div.withConfig({displayName:"SkeletonReveal.styles__SkeletonRevealStyled",componentId:"sc-fa1626a7-0"})`
  position: relative;
`,d="300ms",c=t.default.div.withConfig({displayName:"SkeletonReveal.styles__SkeletonRevealContentStyled",componentId:"sc-fa1626a7-1"})`
  visibility: ${({$isRevealed:e})=>e?"visible":"hidden"};
  pointer-events: ${({$isRevealed:e})=>e?"auto":"none"};
  opacity: ${({$isRevealed:e})=>+!!e};
  transition: opacity ${d} ease-out;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,u=t.default.div.withConfig({displayName:"SkeletonReveal.styles__SkeletonRevealFallbackStyled",componentId:"sc-fa1626a7-2"})`
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: ${({$isRevealed:e})=>+!e};
  transition: opacity ${d} ease-out;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,p=e=>Array.from(e?.querySelectorAll("img:not(.hide-when-no-script)")??[]);e.s(["default",0,({children:e,fallback:t,hasImage:a=!0,isRevealed:i,revealKey:n,onReady:r})=>{let d=(0,o.useRef)(null),[m,h]=(0,o.useState)(!a),[g,f]=(0,o.useState)(!i);(0,o.useEffect)(()=>{if(!i)return void f(!0);let e=window.setTimeout(()=>f(!1),300);return()=>window.clearTimeout(e)},[i]);let y=(0,o.useCallback)(()=>{let e=p(d.current);(!e.length||e.every(e=>e.complete))&&h(!0)},[]);(0,o.useEffect)(()=>{h(!a)},[a,n]),(0,o.useEffect)(()=>{m&&r?.(n)},[m,n,r]),(0,o.useEffect)(()=>{a&&!m&&p(d.current).forEach(e=>{"lazy"===e.getAttribute("loading")&&e.setAttribute("loading","eager")})},[a,m,n]),(0,o.useEffect)(()=>{if(!a||m)return;let e=window.requestAnimationFrame(y);return()=>window.cancelAnimationFrame(e)},[a,m,y]);let v=e=>{if(e.target instanceof HTMLImageElement&&!e.target.classList.contains("hide-when-no-script")){if("error"===e.type)return void h(!0);y()}};return(0,s.jsxs)(l,{onLoadCapture:v,onErrorCapture:v,children:[(0,s.jsx)(c,{ref:d,$isRevealed:i,children:e}),g&&(0,s.jsx)(u,{$isRevealed:i,children:t({isContentRevealing:i})})]})}],588299)},440695,e=>{"use strict";var t=e.i(391398),a=e.i(191788),i=e.i(519894);e.i(959560);var n=e.i(116240),r=e.i(363402),s=e.i(346455);let o=function(e,t,i,o){let l=i.length,{mutate:d}=(0,n.useSWRConfig)(),c=(0,s.useCollectionRequest)(e,t),{data:u=[],isValidating:p,size:m,setSize:h}=(0,r.default)((t,a)=>a&&0===a.results.length?null:[e,t+1,l],([,e,t])=>c(e,t),{initialSize:0,fallbackData:[],revalidateFirstPage:!1,revalidateIfStale:!1,revalidateOnFocus:!1,revalidateOnReconnect:!1}),g=[...i,...u.flatMap(e=>e.results)],f=u[u.length-1],y=!f||f.results.length>=l,v=g.length<o&&y,x=(0,a.useCallback)(()=>{if(!v)return;let t=m+1;d([e,t,l],c(t,l),{revalidate:!1}).catch(()=>void 0)},[v,m,e,l,d,c]);return{items:g,isLoading:p,hasMore:v,onLoadMore:(0,a.useCallback)(()=>h(e=>e+1),[h]),pagesLoaded:m+1,prefetchNext:x}},l=function(e,{enabled:t=!0,rootMargin:i="0px 0px 400px 0px"}={}){let n=(0,a.useRef)(null),r=(0,a.useRef)(e);return r.current=e,(0,a.useEffect)(()=>{let e=n.current;if(!e||!t)return;let a=new IntersectionObserver(([e])=>{e.isIntersecting&&r.current()},{rootMargin:i});return a.observe(e),()=>a.disconnect()},[t,i]),n},d=new Set,c=e=>`card-${e}`;function u(e,t){let{status:a}=e;switch(t.type){case"REQUEST_MORE":return"idle"===a||"paused"===a?{...e,status:"fetching"}:e;case"PAGE_RECEIVED":return"fetching"===a?{...e,status:"revealing"}:e;case"BATCH_REVEALED":if("revealing"!==a)return e;if(!t.hasMore)return{status:"exhausted",revealedCount:t.revealedCount};return{status:t.atPause?"paused":"idle",revealedCount:t.revealedCount};case"EXHAUSTED":return"idle"===a||"paused"===a||"fetching"===a?{...e,status:"exhausted"}:e;default:return e}}let p=function(e,t,n,r={}){let{loadsPerPause:s=8,prefetchDistance:p=1e3,footerStopDistance:m=300}=r,{items:h,isLoading:g,hasMore:f,onLoadMore:y,pagesLoaded:v,prefetchNext:x}=o(`content-collection/${e}`,{isLegacyApiEnabled:(0,i.useFeatureFlag)("legacy-api")},t,n.total),w=t.length,[b,S]=(0,a.useReducer)(u,{status:"idle",revealedCount:w}),{status:k,revealedCount:$}=b,C=(0,a.useRef)({status:k,itemCount:h.length,hasMore:f,pagesLoaded:v,onLoadMore:y});C.current={status:k,itemCount:h.length,hasMore:f,pagesLoaded:v,onLoadMore:y};let _="revealing"===k?Math.max(h.length-$,0):0,j=(0,a.useMemo)(()=>Array.from({length:_},(e,t)=>c($+t)),[_,$]),[P,I]=(0,a.useState)({start:-1,keys:new Set}),T=P.start===$?P.keys:d,N=(0,a.useCallback)(e=>{I(t=>{let a=new Set(t.start===$?t.keys:[]);return a.add(e),{start:$,keys:a}})},[$]),M=0===j.length||j.every(e=>T.has(e)),D=(0,a.useCallback)(()=>{let e=C.current.pagesLoaded-1,t=e>0&&e%s==0;S({type:"BATCH_REVEALED",revealedCount:C.current.itemCount,atPause:t,hasMore:C.current.hasMore})},[s]);(0,a.useEffect)(()=>{"fetching"===k&&!g&&(h.length>$?S({type:"PAGE_RECEIVED"}):f||S({type:"EXHAUSTED"}))},[k,$,g,h.length,f]),(0,a.useEffect)(()=>{f||"idle"!==k&&"paused"!==k||S({type:"EXHAUSTED"})},[f,k]),(0,a.useEffect)(()=>{"revealing"===k&&M&&D()},[k,M,D]);let[E,B]=(0,a.useState)(!1),A=(0,a.useRef)(E);A.current=E;let F=(0,a.useCallback)(()=>{("idle"===C.current.status||"paused"===C.current.status)&&(A.current&&B(!1),S({type:"REQUEST_MORE"}),C.current.onLoadMore())},[]);(0,a.useEffect)(()=>{"paused"===k&&x()},[k]),(0,a.useEffect)(()=>{E&&x()},[E]);let L=l(F,{enabled:"idle"===k&&f&&!E,rootMargin:`0px 0px ${p}px 0px`}),R=l(()=>B(!0),{enabled:f&&!E,rootMargin:`0px 0px -${m}px 0px`}),G="fetching"===k||"revealing"===k,H=n.total,W=n.pageSize||w,V=Number.isFinite(H)?Math.max(H-$,0):W,O="fetching"===k?Math.min(W,V):0;return{isLoading:G,totalItems:H,controls:{hasMore:f,isLoading:G,isAutoScrollEnabled:"paused"!==k&&!E,sentinelRef:L,footerStopRef:R,onLoadMore:F},cards:(0,a.useMemo)(()=>[...h.slice(0,$).map((e,t)=>({type:"card",key:c(t),item:e,index:t,isIncoming:!1})),...h.slice($,$+_).map((e,t)=>({type:"card",key:c($+t),item:e,index:$+t,isIncoming:!0})),...Array.from({length:O},(e,t)=>({type:"skeleton",key:`skeleton-${$+t}`}))],[h,$,_,O]),visibleItemCount:$+_,isRevealed:M,markReady:N}};var m=e.i(760814),h=e.i(84541);let g=({hasMore:e,isLoading:a,isAutoScrollEnabled:i,sentinelRef:n,footerStopRef:r,onLoadMore:s,isInverse:o=!1,testId:l="infinite-scroll"})=>(0,t.jsxs)(t.Fragment,{children:[e&&(0,t.jsx)("div",{ref:n,"data-testid":`${l}-sentinel`}),e&&(0,t.jsx)("div",{ref:r,"data-testid":`${l}-footer-stop`}),e&&!a&&!i&&(0,t.jsx)(h.default,{type:"general",text:"Show More",onClick:s,testId:`${l}-load-more-button`,isInverse:o})]}),f=m.default.div.withConfig({displayName:"InfiniteScrollShell__FooterStyled",componentId:"sc-6574a340-0"})`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  margin-bottom: 48px;
`,y=m.default.div.withConfig({displayName:"InfiniteScrollShell__StatusStyled",componentId:"sc-6574a340-1"})`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden; /* stylelint-disable-line plugin/no-unsupported-browser-features */
  clip: rect(0, 0, 0, 0);
  border: 0;
`,v=({children:e,controls:a,itemCount:i,totalItems:n,isLoading:r,isInverse:s=!1,testId:o="infinite-scroll"})=>(0,t.jsxs)("section",{"aria-label":"Results","data-testid":o,children:[(0,t.jsx)(y,{role:"status","aria-live":"polite","aria-atomic":"true",children:r?"Loading more results":`Showing ${i} of ${n} results`}),(0,t.jsx)("div",{"aria-busy":r,children:e}),(0,t.jsx)(f,{"data-testid":`${o}-load-more`,children:(0,t.jsx)(g,{...a,isInverse:s})})]});var x=e.i(588299);e.s(["default",0,({collectionId:e,content:a,paginationData:i,grid:n,renderItem:r,renderSkeleton:s,isInverse:o=!1,testId:l="infinite-scroll",prefetchDistance:d,footerStopDistance:c,loadsPerPause:u,dataset:m})=>{let{cards:h,isLoading:g,totalItems:f,controls:y,isRevealed:w,markReady:b,visibleItemCount:S}=p(e,a,i,{prefetchDistance:d,footerStopDistance:c,loadsPerPause:u});return(0,t.jsx)(v,{controls:y,itemCount:S,totalItems:f,isLoading:g,isInverse:o,testId:l,children:(0,t.jsx)(n,{"data-testid":`${l}-grid`,...m,children:h.map((e,a)=>(0,t.jsx)("li",{"aria-hidden":"skeleton"===e.type?"true":void 0,"data-testid":"skeleton"===e.type?`${l}-loading-card-${a}`:void 0,children:"card"===e.type?(0,t.jsx)(x.default,{revealKey:e.key,hasImage:!!e.item.image,isRevealed:!e.isIncoming||w,onReady:e.isIncoming?b:void 0,fallback:s,children:r(e.item,e.index)}):s({isContentRevealing:!1})},e.key))})})}],440695)},863429,e=>{"use strict";var t=e.i(391398),a=e.i(893409),i=e.i(760814),n=e.i(570549);let r=i.default.a.withConfig({displayName:"Tag.styles__TagLink",componentId:"sc-4548ff26-0"})`
  border: 2px solid transparent;
  outline: 2px solid transparent;
  display: inline-block;
  text-decoration: none;
  ${({theme:e})=>(0,n.applyTypography)(e.tag)};
  padding: 8px 10px;
  background-color: ${({theme:e})=>e.interactive2.onDefaultBG.default.value};
  color: ${({theme:e})=>e.interactiveInnner.onDefaultBG.value};

  &:hover {
    background-color: ${({theme:e})=>e.interactive2.onDefaultBG.hovered.value};
    color: ${({theme:e})=>e.interactiveInnner.onInverseBG.value};
  }

  &:focus {
    ${({disabled:e})=>!e&&i.css`
        background-color: ${({theme:e})=>e.interactive1.onDefaultBG.default.value};
        border-color: ${({theme:e})=>e.interactiveInnner.onInverseBG.value};
        outline-color: ${({theme:e})=>e.interactive1.onDefaultBG.hovered.value};
        color: ${({theme:e})=>e.interactiveInnner.onInverseBG.value};
      `}
  }

  &:active {
    background-color: ${({theme:e})=>e.interactive2.onDefaultBG.default.value};
  }

  ${({disabled:e})=>e&&i.css`
      cursor: not-allowed;
      pointer-events: none;
      background-color: ${({theme:e})=>e.interactive2.onDefaultBG.disabled1.value};
      color: ${({theme:e})=>e.interactive2.onDefaultBG.disabled2.value};
    `}
`,s=(0,i.default)(r).withConfig({displayName:"Tag.styles__DarkTagLink",componentId:"sc-4548ff26-1"})`
  color: ${({theme:e})=>e.interactiveInnner.onInverseBG.value};
  background-color: ${({theme:e})=>e.interactive2.onInverseBG.default.value};

  &:hover {
    background-color: ${({theme:e})=>e.interactive2.onDefaultBG.default.value};
    color: ${({theme:e})=>e.interactiveInnner.onDefaultBG.value};
  }
`,o=({title:e,url:i,disabled:n=!1,isDarkTheme:o=!1})=>(0,t.jsx)(a.default,{analyticsProps:{item_name:`Tag - ${e}`,item_type:"tag"},href:i,styledAnchor:o?s:r,styledAnchorProps:{disabled:n},children:e}),l=i.default.div.withConfig({displayName:"TagList.styles__TagListStyled",componentId:"sc-85057056-0"})`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;e.s(["default",0,({topics:e=[],isDarkTheme:a=!1,testId:i})=>e.length?(0,t.jsx)(l,{"data-testid":i,children:e.map((e,i)=>(0,t.jsx)(o,{isDarkTheme:a,...e},i))}):null],863429)},251602,e=>{"use strict";var t=e.i(391398),a=e.i(184919),i=e.i(868783),n=e.i(746857),r=e.i(704570),s=e.i(427885),o=e.i(46230),l=e.i(105271),d=e.i(161772),c=e.i(227162),u=e.i(395497),p=e.i(240911);let m=({model:{blocks:e,playerPosition:i,playlistLabels:m},testId:h,upNextVideoModel:g,onNextOnwardJourneyItemStartsPlaying:f,playerOrientation:y="landscape"})=>{let{query:v}=(0,n.useAppRouter)(),{type:x,subtype:w,firstPublishedAt:b}=(0,r.usePageData)(),{slug:S}=v,k=(0,p.getStringFromSlug)(S,!0),$=`${c.appConfig.getValue(u.ConfigSettings.SiteUrl)}${k}`,C={type:"video",model:{blocks:e}},_=(0,s.getMediaMetaDataBlockModelFromVideoBlock)(C),j=x===a.ContentType.Video&&w===a.ContentSubtype.Reels,P=[C];return g&&P.push(g),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.default,{contentUrl:$,...(0,l.getBaseVideoObjectProps)(_,j?b:void 0)}),(0,t.jsx)(o.default,{playlistLabels:[m],playerPosition:i,blocks:P,testId:h,onNextOnwardJourneyItemStartsPlaying:f,playerOrientation:y})]})},h=(0,i.withCMSFallback)(m,({model:{blocks:e},testId:a})=>(0,t.jsx)(o.default,{playlistLabels:[],playerPosition:"",blocks:[{type:"video",model:{blocks:e}}],testId:a}));e.s(["Video",0,m,"default",0,h],251602)},444412,244412,e=>{"use strict";var t=e.i(391398),a=e.i(191788),i=e.i(417183),n=e.i(108019),r=e.i(913777),s=e.i(270340),o=e.i(141420),l=e.i(184874);let d=function(e){let{setEagerImages:t}=(0,s.useEagerImages)(),{length:i}=(0,a.useContext)(o.EagerImagesContext),{type:n}=e;if("image"===n){let a=(0,l.getNestedValue)(e,"rawImage","locator");a&&i<1&&t([a])}};e.s(["useArticleEagerImage",0,d],244412),e.s(["renderComponents",0,(e,s)=>e.map((o,l)=>{let{type:c,...u}=o,[p,m,h={},g={}]=s[c]||[],f=(0,i.default)(h),y=(0,i.default)(g),v=f?{}:{"data-component":m,...h},x=f?a.Fragment:n.ContainerStyled,w=y?a.Fragment:r.GridStyled;if("video"===c){let t=e?.filter(({type:e})=>"video"===e)||[],a="video"===c?t.indexOf(o):null;u.model.playerPosition=`embedded-${a}`}return"links"===c&&(u.model.isLast=e.length-1===l),d(o),p?(0,t.jsx)(x,{...v,children:(0,t.jsx)(w,{...y?{}:g,children:(0,t.jsx)(p,{...u,type:c})})},l):null})],444412)},343469,124436,e=>{"use strict";var t=e.i(191788),a=e.i(788664),i=e.i(519894),n=e.i(391398);let r=(0,t.createContext)(null),{Provider:s}=r;e.s(["UpNextVideoContext",0,r,"default",0,({value:e,children:t})=>(0,n.jsx)(s,{value:e,children:t})],124436);var o=e.i(508259),l=e.i(816180);async function d(e){let[,t,a,i]=e;if(!i)return null;{let e=i.split("/").filter(Boolean);if(!t)return null;try{let{contents:t}=await (0,l.getCachedPageContent)(e,{isLegacyApiEnabled:a});return t.find(({type:e})=>"video"===e)??null}catch(e){return o.logger.error("Error fetching up next video",e),null}}}e.s(["useUpNextVideo",0,function(e=!0,n){let s=(0,t.useContext)(r),o=(0,i.useFeatureFlag)("legacy-api"),l=n??s,{isLoading:c,data:u=null}=(0,a.default)(["up-next",e,o,l??""],d);return{isLoading:c,data:u,href:l}}],343469)},896205,56688,e=>{"use strict";var t=e.i(760814);let a=t.css`
  padding: 0 16px;
  width: calc(100% + 32px);
  margin-right: -16px;
  margin-left: -16px;
`,i=t.css`
  padding: 0 16px;
  width: 100%;
  margin-right: -16px;
  margin-left: -16px;
`,n=t.css`
  width: calc(100% + 32px);
  margin-right: -16px;
  margin-left: -16px;
  padding: 0;
`,r={scrollbar:t.css`
  /* Chrome and Safari */
  &::-webkit-scrollbar {
    height: 5px;
    max-width: 60px;
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 5px;
  }

  /* Firefox */
  scrollbar-color: white transparent;
  scrollbar-width: thin;

  /* @media screen and (max-width: 1008px) {
    max-width: 5px;
  } */
`,fullWidthCorrection:a,fullWidthCorrectionWithoutPaddingAdjustment:i,fullWidthCorrectionWithoutPadding:n,hawaiiGroup5Column1Width:t.css`
  width: calc(100% - 315px - 16px);
`,hawaiiGroup6Column1Width:t.css`
  width: calc(100% - 300px - 16px);
`},s=e=>t.css`
  ${r[e]}
`;e.s(["applyMixins",0,s],56688);var o=e.i(339228),l=e.i(570549);let d=t.default.div.withConfig({displayName:"HawaiiMainVideoCard.styles__HawaiiMainCardStyled",componentId:"sc-8a4913c6-0"})`
  ${({theme:e,$isInverse:a})=>t.css`
    background-color: ${a?e.container.onInverseBG2.value:"transparent"};
  `}

  position: relative;
  display: grid;
  gap: 12px;

  &:hover {
    img {
      opacity: 0.8;
    }
  }

  ${(0,o.applyStylesForBreakpoints)(s("hawaiiGroup6Column1Width"),"group6")};
  ${(0,o.applyStylesForBreakpoints)(s("hawaiiGroup5Column1Width"),"group5")};

  ${(0,o.applyStylesForBreakpoints)(t.css`
      ${s("fullWidthCorrectionWithoutPadding")}
    `,"group4")};

  ${(0,o.applyStylesForBreakpoints)(t.css`
      gap: 12px;
    `,"group4")};
`,c=t.default.div.withConfig({displayName:"HawaiiMainVideoCard.styles__HawaiiTextWrapperStyled",componentId:"sc-8a4913c6-1"})`
  display: grid;
  gap: 12px;

  ${(0,o.applyStylesForBreakpoints)(t.css`
      padding: 0 16px;
    `,"group4")};
`,u=t.default.p.withConfig({displayName:"HawaiiMainVideoCard.styles__HawaiiDescriptionStyled",componentId:"sc-8a4913c6-2"})`
  ${({theme:e,$isInverse:a})=>t.css`
    ${(0,l.applyTypography)(e.promoDescription.regular.bpLarge)};
    color: ${a?e.text.onInverseBG.default.value:e.text.default.value};
    text-align: left;
  `};
`,p=t.default.div.withConfig({displayName:"HawaiiMainVideoCard.styles__HawaiiMediaWrapperStyled",componentId:"sc-8a4913c6-3"})`
  position: relative;
  aspect-ratio: 16/9;
`,m=t.default.div.withConfig({displayName:"HawaiiMainVideoCard.styles__HawaiiMediaStyled",componentId:"sc-8a4913c6-4"})`
  height: 100%;
  width: 100%;

  img {
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }
`,h=t.default.span.withConfig({displayName:"HawaiiMainVideoCard.styles__HawaiiTimestampStyled",componentId:"sc-8a4913c6-5"})`
  ${({theme:e})=>t.css`
    color: ${e.text.onInverseBG.lowEmpasis.value};
    ${(0,l.applyTypography)(e.metaData.regular)};
  `};
`,g=t.default.h3.withConfig({displayName:"HawaiiMainVideoCard.styles__HawaiiCardHeadlineStyled",componentId:"sc-8a4913c6-6"})`
  ${({theme:e,$isInverse:a})=>t.css`
    color: ${e.text.default.value};

    ${(0,l.applyTypography)(e.watchContentTitle.bpLarge)};
    ${(0,o.applyStylesForBreakpoints)(t.css`
        ${(0,l.applyTypography)(e.watchContentTitle.bpSmall)};
      `,"group2")};

    ${a&&t.css`
      color: ${e.text.onInverseBG.default.value};
    `}
  `};
`,f=t.default.div.withConfig({displayName:"HawaiiMainVideoCard.styles__TagsAndSocialStyled",componentId:"sc-8a4913c6-7"})`
  justify-content: space-between;
  flex-direction: column;
  display: flex;
  gap: 24px;

  ${(0,o.applyStylesForBreakpoints)(s("hawaiiGroup6Column1Width"),"group6")};
  ${(0,o.applyStylesForBreakpoints)(s("hawaiiGroup5Column1Width"),"group5")};

  ${(0,o.applyStylesForBreakpoints)(t.css`
      flex-direction: row;
      width: auto;
      gap: 0;
    `,"group4")};

  ${(0,o.applyStylesForBreakpoints)(t.css`
      flex-direction: column;
      gap: 16px;
      margin-top: 8px;
      ${s("fullWidthCorrectionWithoutPaddingAdjustment")};
    `,"group2")};
`,y=t.default.div.withConfig({displayName:"HawaiiMainVideoCard.styles__ButtonsStyled",componentId:"sc-8a4913c6-8"})`
  flex-direction: row;
  margin-left: unset;
  display: flex;
  gap: 12px;

  ${(0,o.applyStylesForBreakpoints)(t.css`
      margin-left: auto;
    `,"group4")};
`;e.s(["ButtonsStyled",0,y,"HawaiiCardHeadlineStyled",0,g,"HawaiiDescriptionStyled",0,u,"HawaiiMainCardStyled",0,d,"HawaiiMediaStyled",0,m,"HawaiiMediaWrapperStyled",0,p,"HawaiiTextWrapperStyled",0,c,"HawaiiTimestampStyled",0,h,"TagsAndSocialStyled",0,f],896205)},776923,e=>{"use strict";let t={hawaiiContainerStyled:"hawaiiContainerStyled",hawaiiMainCard:"hawaiiMainCard",tagsAndSocialStyled:"tagsAndSocialStyled",buttonsStyled:"buttonsStyled",popoverWrapper:"popoverWrapper",hawaiiVerticalVideoListStyled:"hawaiiVerticalVideoListStyled",hawaiiVerticalVideoListSectionHeadlineStyled:"hawaiiVerticalVideoListSectionHeadlineStyled",hawaiiMediaWrapperId:"hawaiiMediaWrapperId",hawaiiDescription:"hawaiiDescription",hawaiiTextWrapperId:"hawaiiTextWrapperId",hawaiiMedia:"hawaiiMedia",hawaiiTimestamp:"hawaiiTimestamp",hawaiiMainCardHeadlineStyled:"hawaiiMainCardHeadlineStyled"};Object.keys(t).map(e=>t[e]),e.s(["testIds",0,t])},615557,968279,483481,241271,e=>{"use strict";var t=e.i(391398),a=e.i(786025),i=e.i(459949),n=e.i(746857),r=e.i(343469),s=e.i(490602),o=e.i(251602),l=e.i(119081),d=e.i(303854),c=e.i(896205),u=e.i(776923),p=e.i(863429),m=e.i(760814),h=e.i(56688),g=e.i(339228),f=e.i(570549),y=e.i(913777);let v=m.default.div.withConfig({displayName:"VideoDetailsPage.styles__MediaWrapperStyled",componentId:"sc-85e5b49-0"})`
  position: relative;
  aspect-ratio: 16/9;

  ${(0,g.applyStylesForBreakpoints)(m.css`
      width: 100%;
    `,"group5","group6")};

  ${(0,g.applyStylesForBreakpoints)(m.css`
      margin: 0 -16px;
      width: auto;
    `,"group4")};
`,x=m.default.div.withConfig({displayName:"VideoDetailsPage.styles__MediaStyled",componentId:"sc-85e5b49-1"})`
  height: 100%;
  width: 100%;

  img {
    aspect-ratio: 16 / 9;
    object-fit: cover;
  }
`,w=m.default.h1.withConfig({displayName:"VideoDetailsPage.styles__HeadingStyled",componentId:"sc-85e5b49-2"})`
  ${({theme:e,$isInverse:t})=>m.css`
    color: ${t?e.text.onInverseBG.default.value:e.text.default.value};

    ${(0,f.applyTypography)(e.promoHeadline.large.default.bpLarge)}

    ${(0,g.applyStylesForBreakpoints)(m.css`
        p {
          ${(0,f.applyTypography)(e.promoHeadline.large.default.bpSmall)};
        }
      `,"group2")};
  `};
`,b=m.default.div.withConfig({displayName:"VideoDetailsPage.styles__TextStyled",componentId:"sc-85e5b49-3"})`
  ${({theme:e})=>m.css`
    p,
    a,
    li {
      ${(0,f.applyTypography)(e.promoDescription.regular.bpLarge)};
      color: ${e.text.onInverseBG.default.value};
      text-align: left;
    }

    > * + * {
      margin-top: 16px;
    }
  `};
`,S=m.default.time.withConfig({displayName:"VideoDetailsPage.styles__TimestampStyled",componentId:"sc-85e5b49-4"})`
  ${({theme:e})=>m.css`
    color: ${e.text.onInverseBG.lowEmpasis.value};
    ${(0,f.applyTypography)(e.metaData.regular)};
  `};
`,k=m.default.div.withConfig({displayName:"VideoDetailsPage.styles__VideoDetailsPageBGLayer",componentId:"sc-85e5b49-5"})`
  background-color: ${({theme:e})=>e.container.onInverseBG2.value};
`,$=m.default.div.withConfig({displayName:"VideoDetailsPage.styles__VideoDetailsPageContainer",componentId:"sc-85e5b49-6"})`
  background-color: ${({theme:e})=>e.container.onInverseBG2.value};
  max-width: 1280px;
  margin: auto;
  display: grid;
  gap: 48px;

  ${(0,g.applyStylesForBreakpoints)(m.css`
      gap: 32px;
    `,"group4")};
`,C=(0,m.default)(y.GridStyled).withConfig({displayName:"VideoDetailsPage.styles__VideoSectionGridStyled",componentId:"sc-85e5b49-7"})`
  position: relative;
  background-color: ${({theme:e})=>e.container.onInverseBG2.value};
  width: 100%;
  padding: 16px;

  ${(0,g.applyStylesForBreakpoints)(m.css`
      width: 100%;
      padding: 16px;
    `,"group4")};
`,_=m.default.div.withConfig({displayName:"VideoDetailsPage.styles__TagsAndSocialStyled",componentId:"sc-85e5b49-8"})`
  justify-content: space-between;
  flex-direction: column;
  display: flex;
  gap: 24px;

  ${(0,g.applyStylesForBreakpoints)((0,h.applyMixins)("hawaiiGroup6Column1Width"),"group6")};
  ${(0,g.applyStylesForBreakpoints)((0,h.applyMixins)("hawaiiGroup5Column1Width"),"group5")};

  ${(0,g.applyStylesForBreakpoints)(m.css`
      flex-direction: row;
      width: auto;
      gap: 0;
    `,"group4")};

  ${(0,g.applyStylesForBreakpoints)(m.css`
      flex-direction: column;
      gap: 16px;
      margin-top: 8px;
    `,"group2")};
`,j=m.default.div.withConfig({displayName:"VideoDetailsPage.styles__CardStyled",componentId:"sc-85e5b49-9"})`
  ${({theme:e})=>m.css`
    background-color: ${e.container.onInverseBG2.value};
  `}

  position: relative;
  display: grid;
  gap: 12px;

  &:hover {
    img {
      opacity: 0.8;
    }
  }

  ${(0,g.applyStylesForBreakpoints)((0,h.applyMixins)("hawaiiGroup6Column1Width"),"group6")};
  ${(0,g.applyStylesForBreakpoints)((0,h.applyMixins)("hawaiiGroup5Column1Width"),"group5")};

  ${(0,g.applyStylesForBreakpoints)(m.css``,"group4")};

  ${(0,g.applyStylesForBreakpoints)(m.css`
      gap: 12px;
      width: 100%;
    `,"group4")};
`;e.s(["CardStyled",0,j,"HeadingStyled",0,w,"MediaStyled",0,x,"MediaWrapperStyled",0,v,"TagsAndSocialStyled",0,_,"TextStyled",0,b,"TimestampStyled",0,S,"VideoDetailsPageBGLayer",0,k,"VideoDetailsPageContainer",0,$,"VideoSectionGridStyled",0,C],968279),p.default;let P=({model:{timestamp:e}})=>{let a=(0,d.formatTimestamp)(e,"long"),i=(0,d.formatTimestamp)(e,"seo");return(0,t.jsx)(S,{suppressHydrationWarning:!0,dateTime:i,children:a})},I=({model:e,type:a})=>{let{push:i}=(0,n.useAppRouter)(),{data:s,isLoading:l,href:d}=(0,r.useUpNextVideo)();return(0,t.jsx)(v,{children:(0,t.jsx)(x,{children:!l&&(0,t.jsx)(o.default,{type:a,model:{...e,playerPosition:"video-details-page"},testId:"video-page-player",onNextOnwardJourneyItemStartsPlaying:()=>d&&i(d),...s?{upNextVideoModel:s}:{}})})})},T=({model:{blocks:e}})=>(0,t.jsx)(l.FlowElementsProvider,{value:!1,children:(0,t.jsx)(w,{$isInverse:!0,children:(0,t.jsx)(a.default,{blocks:e})})}),N=({model:{blocks:e}})=>(0,t.jsx)(b,{children:(0,t.jsx)(a.default,{blocks:e,isInverse:!0})});e.s(["Headline",0,T,"ShortFormVideo",0,I,"TagsAndShare",0,({topics:e,titleToShare:a,versionId:n})=>(0,t.jsxs)(_,{"data-testid":u.testIds.tagsAndSocialStyled,children:[!!e?.length&&(0,t.jsx)(p.default,{topics:e,isDarkTheme:!0}),(0,t.jsxs)(c.ButtonsStyled,{"data-testid":u.testIds.buttonsStyled,children:[(0,t.jsx)(s.default,{withoutPaddingInline:!0,iconPosition:"right",trigger:"click",isInverse:!0,isButtonInverse:!0,title:a,isOnLeftEdge:!0,avProperties:{av_content_id:n}}),(0,t.jsx)(i.SaveButton,{isInverse:!0,iconPosition:"right",alignment:"bottom-left",avProperties:{av_content_id:n}})]})]}),"Text",0,N,"TimestampComponent",0,P],483481),e.s(["COMPONENT_DICTIONARY",0,{audio:[I,"audio-block"],headline:[T,"headline-block"],text:[N,"text-block"],timestamp:[P,"timestamp-block"],video:[I,"video-block"]}],615557);var M=e.i(867639),D=e.i(191788),E=e.i(554692);let B=(0,m.default)(y.GridStyled).withConfig({displayName:"VerticalVideoList.styles__SectionStyled",componentId:"sc-bb33b3fd-0"})`
  ${({theme:e})=>m.css`
    background-color: ${e.container.onInverseBG2.value};
  `}
`,A=(0,m.default)(y.GridStyled).withConfig({displayName:"VerticalVideoList.styles__SectionListStyled",componentId:"sc-bb33b3fd-1"})`
  grid-auto-flow: unset;
  overflow-x: unset;
  overflow-y: unset;

  ${(0,g.applyStylesForBreakpoints)(m.css`
      ${(0,h.applyMixins)("scrollbar")};
      overflow-x: scroll;
      grid-auto-flow: column;
      grid-template-columns: repeat(auto-fit, 141px);
      grid-auto-columns: 141px;
      gap: 16px;
    `,"group4")};
`,F=m.default.h3.withConfig({displayName:"VerticalVideoList.styles__SectionHeadlineStyled",componentId:"sc-bb33b3fd-2"})`
  ${({theme:e})=>m.css`
    color: ${e.text.onInverseBG.default.value};
    ${(0,f.applyTypography)(e.sectionTitle.bpLarge)}

    ${(0,g.applyStylesForBreakpoints)(m.css`
        ${(0,f.applyTypography)(e.sectionTitle.bpSmall)};
      `,"group1","group2")};
  `}
`;m.default.div.withConfig({displayName:"VerticalVideoList.styles__VerticalVideoPlaceholder",componentId:"sc-bb33b3fd-3"})`
  border: 2px black solid;

  ${(0,g.applyStylesForBreakpoints)(m.css`
      height: 350px;
    `,"group5","group6")};

  ${(0,g.applyStylesForBreakpoints)(m.css`
      height: auto;
    `,"group4")};
`,m.default.div.withConfig({displayName:"VerticalVideoList.styles__VerticalVideoListContainer",componentId:"sc-bb33b3fd-4"})`
  display: grid;
  border: 2px black solid;

  ${(0,g.applyStylesForBreakpoints)(m.css`
      grid-template-columns: 1fr auto;
      height: 350px;
    `,"group5","group6")};
  ${(0,g.applyStylesForBreakpoints)(m.css`
      grid-template-columns: 1fr;
      grid-template-rows: 1fr auto;
    `,"group4")};
`;let L=({content:e=[],handleClickOnPlaylistItem:a,collectionAnalytics:i,testId:n="vertical-video"})=>(0,t.jsxs)(B,{"data-testid":`${n}-grid`,$columns:[1,1,1,1,1,1],$gridGap:["16px","16px","16px","16px","16px","16px"],children:[(0,t.jsx)(F,{"data-testid":u.testIds.hawaiiVerticalVideoListSectionHeadlineStyled,children:"Explore More"}),(0,t.jsx)(A,{$gridGap:["16px","16px","16px","16px","16px","16px"],"data-testid":`${n}-grid-list`,children:e.map((e,t)=>(0,D.createElement)(E.default,{...e,key:t,type:"aberdeen",onClick:a?e=>a(e,t):void 0,collectionAnalytics:i,itemPosition:t,tabIndex:0}))})]}),R=m.default.div.withConfig({displayName:"HawaiiVideoPlaylist.styles__VerticalVideoListStyled",componentId:"sc-af8fc403-0"})`
  ${({$withMainCard:e})=>m.css`
    ${(0,g.applyStylesForBreakpoints)(m.css`
        ${(0,h.applyMixins)("scrollbar")};
        position: absolute;
        top: 16px;
        right: 16px;
        overflow-y: auto;
      `,"group5","group6")};

    ${(0,g.applyStylesForBreakpoints)(e?m.css`
      height: calc((1280px - 300px - 16px) * 0.5625 - 18px);
    `:m.css`
    height: calc((1280px - 300px - 16px) * 0.5625 - 18px);
  `,"group6")};
    ${(0,g.applyStylesForBreakpoints)(e?m.css`
      height: calc((100vw - 315px - 16px) * 0.5625 - 18px);
    `:m.css`
    height: calc((100vw - 315px - 16px) * 0.5625 - 18px);
  `,"group5")};

    ${(0,g.applyStylesForBreakpoints)(m.css`
        width: 300px;
      `,"group6")};
    ${(0,g.applyStylesForBreakpoints)(m.css`
        width: 315px;
      `,"group5")};

    ${(0,g.applyStylesForBreakpoints)(m.css`
        position: relative;
        height: auto;
        overflow-x: hidden;
        ${(0,h.applyMixins)("fullWidthCorrectionWithoutPaddingAdjustment")};
        background-color: inherit;
        right: unset;
      `,"group4")};
  `}
`;e.s(["default",0,({content:e,withMainCard:a,handleClickOnPlaylistItem:i,title:n,collectionAnalytics:r})=>(0,t.jsx)(R,{$withMainCard:a,"data-testid":u.testIds.hawaiiVerticalVideoListStyled,children:(0,t.jsx)(L,{collectionAnalytics:r,handleClickOnPlaylistItem:i,content:e,title:(0,M.default)(n)})})],241271)},146904,e=>{"use strict";var t=e.i(391398),a=e.i(191788),i=e.i(184919),n=e.i(959560),r=e.i(279353),s=e.i(500131);let o=(0,a.memo)(e=>{let{type:a,subtype:o,page:l,analytics:d,metadata:c,userAgent:u,statusCode:p}=e,{os:m,browser:h}=u,g=(0,r.usePagesContext)()[a],[f]=Object.values(l),{isSponsored:y,id:v}=f,{contentId:x}=d??{},w=c?.promoHeadline||"",b=c?.options?.allowAdvertising??!0,S={type:a||i.ContentType.Article,subtype:o,pageTitle:w,isSponsored:!!y,os:m,browser:h,urn:x||v||null,allowAdvertising:b,id:v,statusCode:p};return g?(0,t.jsx)(n.SWRConfig,{value:{fallback:l},children:(0,t.jsx)(s.PageDataProvider,{value:S,children:(0,t.jsx)(g,{})})}):null});e.s(["__N_SSP",0,!0,"default",0,o])},929959,(e,t,a)=>{let i="/[[...slug]]";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(146904)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/0n..hexfw6r85.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/18bztvpdorkth.js"].map(t=>e.l(t))).then(()=>t(879466)))},650607,e=>{e.v(t=>Promise.all(["static/chunks/0guiobcf~7~h3.js"].map(t=>e.l(t))).then(()=>t(986513)))},48593,e=>{e.v(t=>Promise.all(["static/chunks/0r974yrggez.2.js"].map(t=>e.l(t))).then(()=>t(418214)))},370277,e=>{e.v(t=>Promise.all(["static/chunks/03e2ajh12t-~6.js"].map(t=>e.l(t))).then(()=>t(858488)))},90278,e=>{e.v(t=>Promise.all(["static/chunks/0cdr~a0kac4v9.js"].map(t=>e.l(t))).then(()=>t(941820)))},10662,e=>{e.v(t=>Promise.all(["static/chunks/17c58ez67.yz_.js"].map(t=>e.l(t))).then(()=>t(126133)))},242924,e=>{e.v(t=>Promise.all(["static/chunks/16std1e9uygen.js"].map(t=>e.l(t))).then(()=>t(789046)))},413120,e=>{e.v(t=>Promise.all(["static/chunks/11~jh~aed1od..js"].map(t=>e.l(t))).then(()=>t(629472)))},252838,e=>{e.v(t=>Promise.all(["static/chunks/0f_gffw58o_dm.js"].map(t=>e.l(t))).then(()=>t(826615)))},788686,e=>{e.v(t=>Promise.all(["static/chunks/0l92d6kzfu8jg.js"].map(t=>e.l(t))).then(()=>t(759759)))},87758,e=>{e.v(t=>Promise.all(["static/chunks/0hfk_v5kflss2.js"].map(t=>e.l(t))).then(()=>t(624948)))},786799,e=>{e.v(t=>Promise.all(["static/chunks/0i3fc1sdwdxwy.js"].map(t=>e.l(t))).then(()=>t(978156)))},784525,e=>{e.v(t=>Promise.all(["static/chunks/178~uy1pz6ka4.js"].map(t=>e.l(t))).then(()=>t(848913)))},277576,e=>{e.v(t=>Promise.all(["static/chunks/01ahds4cdfgmx.js"].map(t=>e.l(t))).then(()=>t(793012)))},768052,e=>{e.v(t=>Promise.all(["static/chunks/0d87nviml8v4v.js"].map(t=>e.l(t))).then(()=>t(313037)))},300810,e=>{e.v(t=>Promise.all(["static/chunks/0~830zvx2d6~-.js"].map(t=>e.l(t))).then(()=>t(448768)))},250904,e=>{e.v(t=>Promise.all(["static/chunks/0gmos.wajd.qx.js"].map(t=>e.l(t))).then(()=>t(781027)))},886105,e=>{e.v(t=>Promise.all(["static/chunks/0wb82s55d9~ye.js"].map(t=>e.l(t))).then(()=>t(630410)))},995184,e=>{e.v(t=>Promise.all(["static/chunks/0u17oyz1d609w.js"].map(t=>e.l(t))).then(()=>t(913839)))},373788,e=>{e.v(t=>Promise.all(["static/chunks/0r2n2_xlr0d38.js"].map(t=>e.l(t))).then(()=>t(948275)))},837652,e=>{e.v(t=>Promise.all(["static/chunks/0ydaxhiuqv48m.js"].map(t=>e.l(t))).then(()=>t(320925)))},747401,e=>{e.v(t=>Promise.all(["static/chunks/0cg2.e5~fk5js.js"].map(t=>e.l(t))).then(()=>t(843760)))},918987,e=>{e.v(t=>Promise.all(["static/chunks/01dqogk35w.vs.js"].map(t=>e.l(t))).then(()=>t(419297)))},338140,e=>{e.v(t=>Promise.all(["static/chunks/1841t-k25y5iw.js"].map(t=>e.l(t))).then(()=>t(70045)))},834577,e=>{e.v(t=>Promise.all(["static/chunks/1452dyf5ry7n_.css","static/chunks/0-zghtc59y~6r.js","static/chunks/05x98j802~24f.js"].map(t=>e.l(t))).then(()=>t(79980)))},649857,e=>{e.v(t=>Promise.all(["static/chunks/17y-vwlw.bfs8.js"].map(t=>e.l(t))).then(()=>t(402966)))},758068,e=>{e.v(t=>Promise.all(["static/chunks/0~~24znpk8vc1.js"].map(t=>e.l(t))).then(()=>t(963698)))},273528,e=>{e.v(t=>Promise.all(["static/chunks/0n~94fkip2t8l.js"].map(t=>e.l(t))).then(()=>t(302001)))},554740,e=>{e.v(t=>Promise.all(["static/chunks/14wvgtevp151f.js"].map(t=>e.l(t))).then(()=>t(859411)))},884690,e=>{e.v(t=>Promise.all(["static/chunks/15evlvb3umxnn.js"].map(t=>e.l(t))).then(()=>t(689304)))},64898,e=>{e.v(t=>Promise.all(["static/chunks/1452dyf5ry7n_.css","static/chunks/0lzv.-11q~la_.js","static/chunks/05x98j802~24f.js"].map(t=>e.l(t))).then(()=>t(948269)))},63325,e=>{e.v(t=>Promise.all(["static/chunks/0zj59obk44-qh.js"].map(t=>e.l(t))).then(()=>t(299169)))},813116,e=>{e.v(t=>Promise.all(["static/chunks/0jcf7ay9pl-s0.js"].map(t=>e.l(t))).then(()=>t(419303)))},756465,e=>{e.v(t=>Promise.all(["static/chunks/0b-tgv1_m1uo9.js"].map(t=>e.l(t))).then(()=>t(990734)))},778933,e=>{e.v(t=>Promise.all(["static/chunks/0k530rgixl5kt.js"].map(t=>e.l(t))).then(()=>t(830740)))},33632,e=>{e.v(t=>Promise.all(["static/chunks/0fi49hn5~2abh.js"].map(t=>e.l(t))).then(()=>t(462292)))},332619,e=>{e.v(t=>Promise.all(["static/chunks/0eocendwectqa.js"].map(t=>e.l(t))).then(()=>t(142080)))},155649,e=>{e.v(t=>Promise.all(["static/chunks/0cr_6f10ae_q~.js"].map(t=>e.l(t))).then(()=>t(925278)))},220252,e=>{e.v(t=>Promise.all(["static/chunks/0na6onp8uomzi.js"].map(t=>e.l(t))).then(()=>t(81272)))},812937,e=>{e.v(t=>Promise.all(["static/chunks/0ffxuwm49oix0.js"].map(t=>e.l(t))).then(()=>t(485683)))},515824,e=>{e.v(t=>Promise.all(["static/chunks/05u0ya7obj7ro.js"].map(t=>e.l(t))).then(()=>t(411236)))},525705,e=>{e.v(t=>Promise.all(["static/chunks/03x0mxwjt245v.js"].map(t=>e.l(t))).then(()=>t(113847)))},771284,e=>{e.v(t=>Promise.all(["static/chunks/14vww2ci_89nf.js"].map(t=>e.l(t))).then(()=>t(504127)))},64214,e=>{e.v(t=>Promise.all(["static/chunks/0ytibk9~7yifn.js"].map(t=>e.l(t))).then(()=>t(945578)))},991855,e=>{e.v(t=>Promise.all(["static/chunks/0j7~yotk97jxc.js"].map(t=>e.l(t))).then(()=>t(405067)))},582626,e=>{e.v(t=>Promise.all(["static/chunks/1368-yf-me439.js"].map(t=>e.l(t))).then(()=>t(482608)))},34479,e=>{e.v(t=>Promise.all(["static/chunks/0yuh-~t-ppktm.js"].map(t=>e.l(t))).then(()=>t(742862)))},253584,e=>{e.v(t=>Promise.all(["static/chunks/0oeiln2dry2bs.js"].map(t=>e.l(t))).then(()=>t(83621)))},179938,e=>{e.v(t=>Promise.all(["static/chunks/0pr885e78gdj8.js"].map(t=>e.l(t))).then(()=>t(935664)))},29455,e=>{e.v(t=>Promise.all(["static/chunks/05e-_rwyri0gi.js"].map(t=>e.l(t))).then(()=>t(416090)))},209509,e=>{e.v(t=>Promise.all(["static/chunks/13xfzm66q5x.7.js"].map(t=>e.l(t))).then(()=>t(556831)))},881178,e=>{e.v(t=>Promise.all(["static/chunks/0s_kjwmep8yf2.js"].map(t=>e.l(t))).then(()=>t(541099)))},935046,e=>{e.v(t=>Promise.all(["static/chunks/0lzefd_ptqlce.js"].map(t=>e.l(t))).then(()=>t(376411)))},423182,e=>{e.v(t=>Promise.all(["static/chunks/02w2j6a0szhem.js"].map(t=>e.l(t))).then(()=>t(46385)))},156025,e=>{e.v(t=>Promise.all(["static/chunks/0p0vkh91e4914.js"].map(t=>e.l(t))).then(()=>t(714830)))},963281,e=>{e.v(t=>Promise.all(["static/chunks/0l7g7f4dyv0f-.js"].map(t=>e.l(t))).then(()=>t(233061)))},171427,e=>{e.v(t=>Promise.all(["static/chunks/0ec517i~_6min.js"].map(t=>e.l(t))).then(()=>t(622702)))},855479,e=>{e.v(t=>Promise.all(["static/chunks/004vauwu48azs.js"].map(t=>e.l(t))).then(()=>t(398144)))},517492,e=>{e.v(t=>Promise.all(["static/chunks/0r8yqy9~18zbm.js"].map(t=>e.l(t))).then(()=>t(593624)))},106835,e=>{e.v(t=>Promise.all(["static/chunks/0g~mh0z17hs0e.js"].map(t=>e.l(t))).then(()=>t(617864)))},239272,e=>{e.v(t=>Promise.all(["static/chunks/0dfhw76.7mxqo.js"].map(t=>e.l(t))).then(()=>t(502341)))},48292,e=>{e.v(t=>Promise.all(["static/chunks/04h172kkt~xm-.js"].map(t=>e.l(t))).then(()=>t(282676)))},748588,e=>{e.v(t=>Promise.all(["static/chunks/0zpz-874su9ks.js"].map(t=>e.l(t))).then(()=>t(140108)))},965517,e=>{e.v(t=>Promise.all(["static/chunks/0_682v_tmycqh.js"].map(t=>e.l(t))).then(()=>t(299514)))},952340,e=>{e.v(t=>Promise.all(["static/chunks/17d-3bben9tkw.js"].map(t=>e.l(t))).then(()=>t(417473)))},412203,e=>{e.v(t=>Promise.all(["static/chunks/0-a6nanpwqpag.js"].map(t=>e.l(t))).then(()=>t(461239)))},791844,e=>{e.v(t=>Promise.all(["static/chunks/1566agutxknpz.js"].map(t=>e.l(t))).then(()=>t(926404)))},423501,e=>{e.v(t=>Promise.all(["static/chunks/0ahzv8e.qitwx.js"].map(t=>e.l(t))).then(()=>t(231311)))},544130,e=>{e.v(t=>Promise.all(["static/chunks/0x4zv0liim9tb.js"].map(t=>e.l(t))).then(()=>t(484112)))},631060,e=>{e.v(t=>Promise.all(["static/chunks/0cm_f~9t.nb1u.js"].map(t=>e.l(t))).then(()=>t(685098)))},612575,e=>{e.v(t=>Promise.all(["static/chunks/0olmr9xx2irp_.js"].map(t=>e.l(t))).then(()=>t(257203)))},112905,e=>{e.v(t=>Promise.all(["static/chunks/02gz1-ocnq62g.js"].map(t=>e.l(t))).then(()=>t(325461)))},139296,e=>{e.v(t=>Promise.all(["static/chunks/04s4vnlpbigoe.js"].map(t=>e.l(t))).then(()=>t(710853)))},497333,e=>{e.v(t=>Promise.all(["static/chunks/0mgn9gis09369.js"].map(t=>e.l(t))).then(()=>t(993518)))},19108,e=>{e.v(t=>Promise.all(["static/chunks/0ib_j80741bgy.js"].map(t=>e.l(t))).then(()=>t(757795)))},559958,e=>{e.v(t=>Promise.all(["static/chunks/05j89a5dl50x1.js"].map(t=>e.l(t))).then(()=>t(58795)))},925136,e=>{e.v(t=>Promise.all(["static/chunks/0baun3z.hlze~.js"].map(t=>e.l(t))).then(()=>t(68882)))},989792,e=>{e.v(t=>Promise.all(["static/chunks/07710kwr~_0.e.js"].map(t=>e.l(t))).then(()=>t(916507)))},629479,e=>{e.v(t=>Promise.all(["static/chunks/0v.rn646nuqs7.js"].map(t=>e.l(t))).then(()=>t(307488)))},587329,e=>{e.v(t=>Promise.all(["static/chunks/0d9awe5d081.2.js"].map(t=>e.l(t))).then(()=>t(878642)))},576337,e=>{e.v(t=>Promise.all(["static/chunks/0ogvtm3jmac~r.js"].map(t=>e.l(t))).then(()=>t(580134)))},524769,e=>{e.v(t=>Promise.all(["static/chunks/0ws4zt1qv5-55.js"].map(t=>e.l(t))).then(()=>t(731360)))},233880,e=>{e.v(t=>Promise.all(["static/chunks/12m63s1_cjg0~.js"].map(t=>e.l(t))).then(()=>t(723966)))},580778,e=>{e.v(t=>Promise.all(["static/chunks/0ismf8xg9bc5r.js"].map(t=>e.l(t))).then(()=>t(177170)))},176096,e=>{e.v(t=>Promise.all(["static/chunks/072l.y87lhy8o.js","static/chunks/0n-kjrsnwe2tb.js"].map(t=>e.l(t))).then(()=>t(964284)))},684958,e=>{e.v(t=>Promise.all(["static/chunks/0gcq24lt2b72g.js"].map(t=>e.l(t))).then(()=>t(208405)))},646790,e=>{e.v(t=>Promise.all(["static/chunks/0gv8vfh~i9pse.js"].map(t=>e.l(t))).then(()=>t(621743)))},704815,e=>{e.v(t=>Promise.all(["static/chunks/0zixabptje-40.js"].map(t=>e.l(t))).then(()=>t(340986)))},98934,e=>{e.v(t=>Promise.all(["static/chunks/09rk~ly2q1buz.js"].map(t=>e.l(t))).then(()=>t(700930)))},762970,e=>{e.v(t=>Promise.all(["static/chunks/1115fwe9_44~8.js","static/chunks/10.~qslroat7t.js"].map(t=>e.l(t))).then(()=>t(343854)))},593201,e=>{e.v(t=>Promise.all(["static/chunks/0uhpbvd40ldiy.js"].map(t=>e.l(t))).then(()=>t(846310)))},211169,e=>{e.v(t=>Promise.all(["static/chunks/0rcd3t2i3-4oi.js"].map(t=>e.l(t))).then(()=>t(230230)))},445290,e=>{e.v(t=>Promise.all(["static/chunks/0.8qg9z5thaeh.js"].map(t=>e.l(t))).then(()=>t(924189)))},871926,e=>{e.v(t=>Promise.all(["static/chunks/07tq4no73cok6.js"].map(t=>e.l(t))).then(()=>t(995919)))},439890,e=>{e.v(t=>Promise.all(["static/chunks/12sshwfi~3pg4.js"].map(t=>e.l(t))).then(()=>t(511310)))},922605,e=>{e.v(t=>Promise.all(["static/chunks/0qc7ilezzs-aa.js"].map(t=>e.l(t))).then(()=>t(748558)))},260421,e=>{e.v(t=>Promise.all(["static/chunks/04k.r0ygqabhh.js"].map(t=>e.l(t))).then(()=>t(47375)))},967106,e=>{e.v(t=>Promise.all(["static/chunks/0i4yw6faulc.d.js"].map(t=>e.l(t))).then(()=>t(766583)))},272637,e=>{e.v(t=>Promise.all(["static/chunks/07np970eqbo60.js"].map(t=>e.l(t))).then(()=>t(329301)))},717929,e=>{e.v(t=>Promise.all(["static/chunks/0fm4br.pqse_v.js"].map(t=>e.l(t))).then(()=>t(701066)))},739128,e=>{e.v(t=>Promise.all(["static/chunks/0clu0h0nakxl0.js"].map(t=>e.l(t))).then(()=>t(91973)))},611005,e=>{e.v(t=>Promise.all(["static/chunks/0i3.c-aib3u_6.js"].map(t=>e.l(t))).then(()=>t(549362)))},506839,e=>{e.v(t=>Promise.all(["static/chunks/087~h7u0q296x.js"].map(t=>e.l(t))).then(()=>t(713866)))}]);