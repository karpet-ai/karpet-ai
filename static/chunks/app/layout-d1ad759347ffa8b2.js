(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6435:function(t,r,s){"use strict";s.d(r,{F:function(){return y},f:function(){return $}});var a=s(2265);let l=["light","dark"],i="(prefers-color-scheme: dark)",n="undefined"==typeof window,o=(0,a.createContext)(void 0),d={setTheme:t=>{},themes:[]},y=()=>{var t;return null!==(t=(0,a.useContext)(o))&&void 0!==t?t:d},$=t=>(0,a.useContext)(o)?a.createElement(a.Fragment,null,t.children):a.createElement(f,t),c=["light","dark"],f=({forcedTheme:t,disableTransitionOnChange:r=!1,enableSystem:s=!0,enableColorScheme:n=!0,storageKey:d="theme",themes:m=c,defaultTheme:u=s?"system":"light",attribute:C="data-theme",value:x,children:g,nonce:w})=>{let[v,j]=(0,a.useState)(()=>S(d,u)),[k,_]=(0,a.useState)(()=>S(d)),N=x?Object.values(x):m,L=(0,a.useCallback)(t=>{let a=t;if(!a)return;"system"===t&&s&&(a=p());let i=x?x[a]:a,o=r?b():null,d=document.documentElement;if("class"===C?(d.classList.remove(...N),i&&d.classList.add(i)):i?d.setAttribute(C,i):d.removeAttribute(C),n){let t=l.includes(u)?u:null,r=l.includes(a)?a:t;d.style.colorScheme=r}null==o||o()},[]),O=(0,a.useCallback)(t=>{j(t);try{localStorage.setItem(d,t)}catch(t){}},[t]),T=(0,a.useCallback)(r=>{let a=p(r);_(a),"system"===v&&s&&!t&&L("system")},[v,t]);(0,a.useEffect)(()=>{let t=window.matchMedia(i);return t.addListener(T),T(t),()=>t.removeListener(T)},[T]),(0,a.useEffect)(()=>{let e=t=>{t.key===d&&O(t.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[O]),(0,a.useEffect)(()=>{L(null!=t?t:v)},[t,v]);let M=(0,a.useMemo)(()=>({theme:v,setTheme:O,forcedTheme:t,resolvedTheme:"system"===v?k:v,themes:s?[...m,"system"]:m,systemTheme:s?k:void 0}),[v,O,t,k,s,m]);return a.createElement(o.Provider,{value:M},a.createElement(h,{forcedTheme:t,disableTransitionOnChange:r,enableSystem:s,enableColorScheme:n,storageKey:d,themes:m,defaultTheme:u,attribute:C,value:x,children:g,attrs:N,nonce:w}),g)},h=(0,a.memo)(({forcedTheme:t,storageKey:r,attribute:s,enableSystem:n,enableColorScheme:o,defaultTheme:d,value:c,attrs:h,nonce:m})=>{let u="system"===d,C="class"===s?`var d=document.documentElement,c=d.classList;c.remove(${h.map(t=>`'${t}'`).join(",")});`:`var d=document.documentElement,n='${s}',s='setAttribute';`,x=o?l.includes(d)&&d?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${d}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",$=(t,r=!1,a=!0)=>{let i=c?c[t]:t,n=r?t+"|| ''":`'${i}'`,d="";return o&&a&&!r&&l.includes(t)&&(d+=`d.style.colorScheme = '${t}';`),"class"===s?d+=r||i?`c.add(${n})`:"null":i&&(d+=`d[s](n,${n})`),d},g=t?`!function(){${C}${$(t)}}()`:n?`!function(){try{${C}var e=localStorage.getItem('${r}');if('system'===e||(!e&&${u})){var t='${i}',m=window.matchMedia(t);if(m.media!==t||m.matches){${$("dark")}}else{${$("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${$(c?"x[e]":"e",!0)}}${u?"":"else{"+$(d,!1,!1)+"}"}${x}}catch(e){}}()`:`!function(){try{${C}var e=localStorage.getItem('${r}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${$(c?"x[e]":"e",!0)}}else{${$(d,!1,!1)};}${x}}catch(t){}}();`;return a.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:g}})},()=>!0),S=(t,r)=>{let s;if(!n){try{s=localStorage.getItem(t)||void 0}catch(t){}return s||r}},b=()=>{let t=document.createElement("style");return t.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(t),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(t)},1)}},p=t=>(t||(t=window.matchMedia(i)),t.matches?"dark":"light")},472:function(t,r,s){Promise.resolve().then(s.bind(s,29))},29:function(t,r,s){"use strict";s.r(r),s.d(r,{default:function(){return RootLayout}});var a=s(7437),l=s(3925),i=s.n(l),n=s(6691),o=s.n(n),d=s(1396),c=s.n(d),components_Footer=()=>(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("footer",{className:"wow fadeInUp dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24","data-wow-delay":".1s",children:[(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"-mx-4 flex flex-wrap",children:(0,a.jsx)("div",{className:"w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12",children:(0,a.jsxs)("div",{className:"mb-12 max-w-[240px] lg:mb-16",children:[(0,a.jsxs)(c(),{href:"/",className:"mb-8 inline-block",children:[(0,a.jsx)(o(),{src:"/images/logo/logo.svg",alt:"logo",className:"w-full dark:hidden",width:140,height:30}),(0,a.jsx)(o(),{src:"/images/logo/logo-2.svg",alt:"logo",className:"hidden w-full dark:block",width:140,height:30})]}),(0,a.jsx)("p",{className:"dark:text-body-color-dark mb-9 text-base leading-relaxed text-body-color",children:"info@karpet.ai"})]})})}),(0,a.jsx)("div",{className:"h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"}),(0,a.jsx)("div",{className:"py-8",children:(0,a.jsx)("p",{className:"text-center text-base text-body-color dark:text-white",children:"\xa9 Karpet AI"})})]}),(0,a.jsx)("div",{className:"absolute right-0 top-14 z-[-1]",children:(0,a.jsxs)("svg",{width:"55",height:"99",viewBox:"0 0 55 99",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("circle",{opacity:"0.8",cx:"49.5",cy:"49.5",r:"49.5",fill:"#959CB1"}),(0,a.jsx)("mask",{id:"mask0_94:899",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"99",height:"99",children:(0,a.jsx)("circle",{opacity:"0.8",cx:"49.5",cy:"49.5",r:"49.5",fill:"#4A6CF7"})}),(0,a.jsxs)("g",{mask:"url(#mask0_94:899)",children:[(0,a.jsx)("circle",{opacity:"0.8",cx:"49.5",cy:"49.5",r:"49.5",fill:"url(#paint0_radial_94:899)"}),(0,a.jsx)("g",{opacity:"0.8",filter:"url(#filter0_f_94:899)",children:(0,a.jsx)("circle",{cx:"53.8676",cy:"26.2061",r:"20.3824",fill:"white"})})]}),(0,a.jsxs)("defs",{children:[(0,a.jsxs)("filter",{id:"filter0_f_94:899",x:"12.4852",y:"-15.1763",width:"82.7646",height:"82.7646",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,a.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,a.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),(0,a.jsx)("feGaussianBlur",{stdDeviation:"10.5",result:"effect1_foregroundBlur_94:899"})]}),(0,a.jsxs)("radialGradient",{id:"paint0_radial_94:899",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(49.5 49.5) rotate(90) scale(53.1397)",children:[(0,a.jsx)("stop",{stopOpacity:"0.47"}),(0,a.jsx)("stop",{offset:"1",stopOpacity:"0"})]})]})]})}),(0,a.jsx)("div",{className:"absolute bottom-24 left-0 z-[-1]",children:(0,a.jsxs)("svg",{width:"79",height:"94",viewBox:"0 0 79 94",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsx)("rect",{opacity:"0.3",x:"-41",y:"26.9426",width:"66.6675",height:"66.6675",transform:"rotate(-22.9007 -41 26.9426)",fill:"url(#paint0_linear_94:889)"}),(0,a.jsx)("rect",{x:"-41",y:"26.9426",width:"66.6675",height:"66.6675",transform:"rotate(-22.9007 -41 26.9426)",stroke:"url(#paint1_linear_94:889)",strokeWidth:"0.7"}),(0,a.jsx)("path",{opacity:"0.3",d:"M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z",fill:"url(#paint2_linear_94:889)"}),(0,a.jsx)("path",{d:"M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z",stroke:"url(#paint3_linear_94:889)",strokeWidth:"0.7"}),(0,a.jsx)("path",{opacity:"0.3",d:"M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z",fill:"url(#paint4_linear_94:889)"}),(0,a.jsx)("path",{d:"M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z",stroke:"url(#paint5_linear_94:889)",strokeWidth:"0.7"}),(0,a.jsxs)("defs",{children:[(0,a.jsxs)("linearGradient",{id:"paint0_linear_94:889",x1:"-41",y1:"21.8445",x2:"36.9671",y2:"59.8878",gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{stopColor:"#4A6CF7",stopOpacity:"0.62"}),(0,a.jsx)("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0"})]}),(0,a.jsxs)("linearGradient",{id:"paint1_linear_94:889",x1:"25.6675",y1:"95.9631",x2:"-42.9608",y2:"20.668",gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{stopColor:"#4A6CF7",stopOpacity:"0"}),(0,a.jsx)("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0.51"})]}),(0,a.jsxs)("linearGradient",{id:"paint2_linear_94:889",x1:"20.325",y1:"-3.98039",x2:"90.6248",y2:"25.1062",gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{stopColor:"#4A6CF7",stopOpacity:"0.62"}),(0,a.jsx)("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0"})]}),(0,a.jsxs)("linearGradient",{id:"paint3_linear_94:889",x1:"18.3642",y1:"-1.59742",x2:"113.9",y2:"80.6826",gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{stopColor:"#4A6CF7",stopOpacity:"0"}),(0,a.jsx)("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0.51"})]}),(0,a.jsxs)("linearGradient",{id:"paint4_linear_94:889",x1:"61.1098",y1:"62.3249",x2:"-8.82468",y2:"58.2156",gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{stopColor:"#4A6CF7",stopOpacity:"0.62"}),(0,a.jsx)("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0"})]}),(0,a.jsxs)("linearGradient",{id:"paint5_linear_94:889",x1:"65.4236",y1:"65.0701",x2:"24.0178",y2:"41.6598",gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{stopColor:"#4A6CF7",stopOpacity:"0"}),(0,a.jsx)("stop",{offset:"1",stopColor:"#4A6CF7",stopOpacity:"0.51"})]})]})]})})]})}),h=s(4033),m=s(2265),u=s(6435),Header_ThemeToggler=()=>{let{theme:t,setTheme:r}=(0,u.F)();return(0,a.jsxs)("button",{"aria-label":"theme toggler",onClick:()=>r("dark"===t?"light":"dark"),className:"flex items-center justify-center text-black rounded-full cursor-pointer bg-gray-2 dark:bg-dark-bg h-9 w-9 dark:text-white md:h-14 md:w-14",children:[(0,a.jsx)("svg",{viewBox:"0 0 23 23",className:"w-5 h-5 stroke-current dark:hidden md:h-6 md:w-6",fill:"none",children:(0,a.jsx)("path",{d:"M9.55078 1.5C5.80078 1.5 1.30078 5.25 1.30078 11.25C1.30078 17.25 5.80078 21.75 11.8008 21.75C17.8008 21.75 21.5508 17.25 21.5508 13.5C13.3008 18.75 4.30078 9.75 9.55078 1.5Z",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,a.jsxs)("svg",{viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"hidden w-5 h-5 dark:block md:h-6 md:w-6",children:[(0,a.jsx)("mask",{id:"path-1-inside-1_977:1934",fill:"white",children:(0,a.jsx)("path",{d:"M12.0508 16.5C10.8573 16.5 9.71271 16.0259 8.8688 15.182C8.02489 14.3381 7.55078 13.1935 7.55078 12C7.55078 10.8065 8.02489 9.66193 8.8688 8.81802C9.71271 7.97411 10.8573 7.5 12.0508 7.5C13.2443 7.5 14.3888 7.97411 15.2328 8.81802C16.0767 9.66193 16.5508 10.8065 16.5508 12C16.5508 13.1935 16.0767 14.3381 15.2328 15.182C14.3888 16.0259 13.2443 16.5 12.0508 16.5ZM12.0508 18C13.6421 18 15.1682 17.3679 16.2934 16.2426C17.4186 15.1174 18.0508 13.5913 18.0508 12C18.0508 10.4087 17.4186 8.88258 16.2934 7.75736C15.1682 6.63214 13.6421 6 12.0508 6C10.4595 6 8.93336 6.63214 7.80814 7.75736C6.68292 8.88258 6.05078 10.4087 6.05078 12C6.05078 13.5913 6.68292 15.1174 7.80814 16.2426C8.93336 17.3679 10.4595 18 12.0508 18ZM12.0508 0C12.2497 0 12.4405 0.0790176 12.5811 0.21967C12.7218 0.360322 12.8008 0.551088 12.8008 0.75V3.75C12.8008 3.94891 12.7218 4.13968 12.5811 4.28033C12.4405 4.42098 12.2497 4.5 12.0508 4.5C11.8519 4.5 11.6611 4.42098 11.5205 4.28033C11.3798 4.13968 11.3008 3.94891 11.3008 3.75V0.75C11.3008 0.551088 11.3798 0.360322 11.5205 0.21967C11.6611 0.0790176 11.8519 0 12.0508 0V0ZM12.0508 19.5C12.2497 19.5 12.4405 19.579 12.5811 19.7197C12.7218 19.8603 12.8008 20.0511 12.8008 20.25V23.25C12.8008 23.4489 12.7218 23.6397 12.5811 23.7803C12.4405 23.921 12.2497 24 12.0508 24C11.8519 24 11.6611 23.921 11.5205 23.7803C11.3798 23.6397 11.3008 23.4489 11.3008 23.25V20.25C11.3008 20.0511 11.3798 19.8603 11.5205 19.7197C11.6611 19.579 11.8519 19.5 12.0508 19.5ZM24.0508 12C24.0508 12.1989 23.9718 12.3897 23.8311 12.5303C23.6905 12.671 23.4997 12.75 23.3008 12.75H20.3008C20.1019 12.75 19.9111 12.671 19.7705 12.5303C19.6298 12.3897 19.5508 12.1989 19.5508 12C19.5508 11.8011 19.6298 11.6103 19.7705 11.4697C19.9111 11.329 20.1019 11.25 20.3008 11.25H23.3008C23.4997 11.25 23.6905 11.329 23.8311 11.4697C23.9718 11.6103 24.0508 11.8011 24.0508 12ZM4.55078 12C4.55078 12.1989 4.47176 12.3897 4.33111 12.5303C4.19046 12.671 3.99969 12.75 3.80078 12.75H0.800781C0.601869 12.75 0.411103 12.671 0.270451 12.5303C0.129799 12.3897 0.0507813 12.1989 0.0507812 12C0.0507813 11.8011 0.129799 11.6103 0.270451 11.4697C0.411103 11.329 0.601869 11.25 0.800781 11.25H3.80078C3.99969 11.25 4.19046 11.329 4.33111 11.4697C4.47176 11.6103 4.55078 11.8011 4.55078 12ZM20.5363 3.5145C20.6769 3.65515 20.7559 3.84588 20.7559 4.04475C20.7559 4.24362 20.6769 4.43435 20.5363 4.575L18.4153 6.6975C18.3455 6.76713 18.2628 6.82235 18.1717 6.86C18.0806 6.89765 17.983 6.91699 17.8845 6.91692C17.6855 6.91678 17.4947 6.83758 17.354 6.69675C17.2844 6.62702 17.2292 6.54425 17.1915 6.45318C17.1539 6.36211 17.1345 6.26452 17.1346 6.16597C17.1348 5.96695 17.214 5.77613 17.3548 5.6355L19.4758 3.5145C19.6164 3.3739 19.8072 3.29491 20.006 3.29491C20.2049 3.29491 20.3956 3.3739 20.5363 3.5145ZM6.74678 17.304C6.88738 17.4446 6.96637 17.6354 6.96637 17.8342C6.96637 18.0331 6.88738 18.2239 6.74678 18.3645L4.62578 20.4855C4.48433 20.6221 4.29488 20.6977 4.09823 20.696C3.90158 20.6943 3.71347 20.6154 3.57442 20.4764C3.43536 20.3373 3.35648 20.1492 3.35478 19.9526C3.35307 19.7559 3.42866 19.5665 3.56528 19.425L5.68628 17.304C5.82693 17.1634 6.01766 17.0844 6.21653 17.0844C6.4154 17.0844 6.60614 17.1634 6.74678 17.304ZM20.5363 20.4855C20.3956 20.6261 20.2049 20.7051 20.006 20.7051C19.8072 20.7051 19.6164 20.6261 19.4758 20.4855L17.3548 18.3645C17.2182 18.223 17.1426 18.0336 17.1443 17.8369C17.146 17.6403 17.2249 17.4522 17.3639 17.3131C17.503 17.1741 17.6911 17.0952 17.8877 17.0935C18.0844 17.0918 18.2738 17.1674 18.4153 17.304L20.5363 19.425C20.6769 19.5656 20.7559 19.7564 20.7559 19.9552C20.7559 20.1541 20.6769 20.3449 20.5363 20.4855ZM6.74678 6.6975C6.60614 6.8381 6.4154 6.91709 6.21653 6.91709C6.01766 6.91709 5.82693 6.8381 5.68628 6.6975L3.56528 4.575C3.49365 4.50582 3.43651 4.42306 3.39721 4.33155C3.3579 4.24005 3.33721 4.14164 3.33634 4.04205C3.33548 3.94247 3.35445 3.84371 3.39216 3.75153C3.42988 3.65936 3.48557 3.57562 3.55598 3.5052C3.6264 3.43478 3.71014 3.37909 3.80232 3.34138C3.89449 3.30367 3.99325 3.2847 4.09283 3.28556C4.19242 3.28643 4.29083 3.30712 4.38233 3.34642C4.47384 3.38573 4.5566 3.44287 4.62578 3.5145L6.74678 5.6355C6.81663 5.70517 6.87204 5.78793 6.90985 5.87905C6.94766 5.97017 6.96712 6.06785 6.96712 6.1665C6.96712 6.26515 6.94766 6.36283 6.90985 6.45395C6.87204 6.54507 6.81663 6.62783 6.74678 6.6975Z"})}),(0,a.jsx)("path",{d:"M12.0508 16.5C10.8573 16.5 9.71271 16.0259 8.8688 15.182C8.02489 14.3381 7.55078 13.1935 7.55078 12C7.55078 10.8065 8.02489 9.66193 8.8688 8.81802C9.71271 7.97411 10.8573 7.5 12.0508 7.5C13.2443 7.5 14.3888 7.97411 15.2328 8.81802C16.0767 9.66193 16.5508 10.8065 16.5508 12C16.5508 13.1935 16.0767 14.3381 15.2328 15.182C14.3888 16.0259 13.2443 16.5 12.0508 16.5ZM12.0508 18C13.6421 18 15.1682 17.3679 16.2934 16.2426C17.4186 15.1174 18.0508 13.5913 18.0508 12C18.0508 10.4087 17.4186 8.88258 16.2934 7.75736C15.1682 6.63214 13.6421 6 12.0508 6C10.4595 6 8.93336 6.63214 7.80814 7.75736C6.68292 8.88258 6.05078 10.4087 6.05078 12C6.05078 13.5913 6.68292 15.1174 7.80814 16.2426C8.93336 17.3679 10.4595 18 12.0508 18ZM12.0508 0C12.2497 0 12.4405 0.0790176 12.5811 0.21967C12.7218 0.360322 12.8008 0.551088 12.8008 0.75V3.75C12.8008 3.94891 12.7218 4.13968 12.5811 4.28033C12.4405 4.42098 12.2497 4.5 12.0508 4.5C11.8519 4.5 11.6611 4.42098 11.5205 4.28033C11.3798 4.13968 11.3008 3.94891 11.3008 3.75V0.75C11.3008 0.551088 11.3798 0.360322 11.5205 0.21967C11.6611 0.0790176 11.8519 0 12.0508 0V0ZM12.0508 19.5C12.2497 19.5 12.4405 19.579 12.5811 19.7197C12.7218 19.8603 12.8008 20.0511 12.8008 20.25V23.25C12.8008 23.4489 12.7218 23.6397 12.5811 23.7803C12.4405 23.921 12.2497 24 12.0508 24C11.8519 24 11.6611 23.921 11.5205 23.7803C11.3798 23.6397 11.3008 23.4489 11.3008 23.25V20.25C11.3008 20.0511 11.3798 19.8603 11.5205 19.7197C11.6611 19.579 11.8519 19.5 12.0508 19.5ZM24.0508 12C24.0508 12.1989 23.9718 12.3897 23.8311 12.5303C23.6905 12.671 23.4997 12.75 23.3008 12.75H20.3008C20.1019 12.75 19.9111 12.671 19.7705 12.5303C19.6298 12.3897 19.5508 12.1989 19.5508 12C19.5508 11.8011 19.6298 11.6103 19.7705 11.4697C19.9111 11.329 20.1019 11.25 20.3008 11.25H23.3008C23.4997 11.25 23.6905 11.329 23.8311 11.4697C23.9718 11.6103 24.0508 11.8011 24.0508 12ZM4.55078 12C4.55078 12.1989 4.47176 12.3897 4.33111 12.5303C4.19046 12.671 3.99969 12.75 3.80078 12.75H0.800781C0.601869 12.75 0.411103 12.671 0.270451 12.5303C0.129799 12.3897 0.0507813 12.1989 0.0507812 12C0.0507813 11.8011 0.129799 11.6103 0.270451 11.4697C0.411103 11.329 0.601869 11.25 0.800781 11.25H3.80078C3.99969 11.25 4.19046 11.329 4.33111 11.4697C4.47176 11.6103 4.55078 11.8011 4.55078 12ZM20.5363 3.5145C20.6769 3.65515 20.7559 3.84588 20.7559 4.04475C20.7559 4.24362 20.6769 4.43435 20.5363 4.575L18.4153 6.6975C18.3455 6.76713 18.2628 6.82235 18.1717 6.86C18.0806 6.89765 17.983 6.91699 17.8845 6.91692C17.6855 6.91678 17.4947 6.83758 17.354 6.69675C17.2844 6.62702 17.2292 6.54425 17.1915 6.45318C17.1539 6.36211 17.1345 6.26452 17.1346 6.16597C17.1348 5.96695 17.214 5.77613 17.3548 5.6355L19.4758 3.5145C19.6164 3.3739 19.8072 3.29491 20.006 3.29491C20.2049 3.29491 20.3956 3.3739 20.5363 3.5145ZM6.74678 17.304C6.88738 17.4446 6.96637 17.6354 6.96637 17.8342C6.96637 18.0331 6.88738 18.2239 6.74678 18.3645L4.62578 20.4855C4.48433 20.6221 4.29488 20.6977 4.09823 20.696C3.90158 20.6943 3.71347 20.6154 3.57442 20.4764C3.43536 20.3373 3.35648 20.1492 3.35478 19.9526C3.35307 19.7559 3.42866 19.5665 3.56528 19.425L5.68628 17.304C5.82693 17.1634 6.01766 17.0844 6.21653 17.0844C6.4154 17.0844 6.60614 17.1634 6.74678 17.304ZM20.5363 20.4855C20.3956 20.6261 20.2049 20.7051 20.006 20.7051C19.8072 20.7051 19.6164 20.6261 19.4758 20.4855L17.3548 18.3645C17.2182 18.223 17.1426 18.0336 17.1443 17.8369C17.146 17.6403 17.2249 17.4522 17.3639 17.3131C17.503 17.1741 17.6911 17.0952 17.8877 17.0935C18.0844 17.0918 18.2738 17.1674 18.4153 17.304L20.5363 19.425C20.6769 19.5656 20.7559 19.7564 20.7559 19.9552C20.7559 20.1541 20.6769 20.3449 20.5363 20.4855ZM6.74678 6.6975C6.60614 6.8381 6.4154 6.91709 6.21653 6.91709C6.01766 6.91709 5.82693 6.8381 5.68628 6.6975L3.56528 4.575C3.49365 4.50582 3.43651 4.42306 3.39721 4.33155C3.3579 4.24005 3.33721 4.14164 3.33634 4.04205C3.33548 3.94247 3.35445 3.84371 3.39216 3.75153C3.42988 3.65936 3.48557 3.57562 3.55598 3.5052C3.6264 3.43478 3.71014 3.37909 3.80232 3.34138C3.89449 3.30367 3.99325 3.2847 4.09283 3.28556C4.19242 3.28643 4.29083 3.30712 4.38233 3.34642C4.47384 3.38573 4.5566 3.44287 4.62578 3.5145L6.74678 5.6355C6.81663 5.70517 6.87204 5.78793 6.90985 5.87905C6.94766 5.97017 6.96712 6.06785 6.96712 6.1665C6.96712 6.26515 6.94766 6.36283 6.90985 6.45395C6.87204 6.54507 6.81663 6.62783 6.74678 6.6975Z",fill:"black",stroke:"white",strokeWidth:"2",mask:"url(#path-1-inside-1_977:1934)"})]})]})},C=[{id:1,title:"Home",path:"/",newTab:!1},{id:2,title:"About",path:"/#about",newTab:!1},{id:33,title:"Features",path:"/#features",newTab:!1}],components_Header=()=>{let[t,r]=(0,m.useState)(!1),[s,l]=(0,m.useState)(!1),handleStickyNavbar=()=>{window.scrollY>=80?l(!0):l(!1)};(0,m.useEffect)(()=>{window.addEventListener("scroll",handleStickyNavbar)});let[i,n]=(0,m.useState)(-1),handleSubmenu=t=>{i===t?n(-1):n(t)},d=(0,h.usePathname)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("header",{className:"header left-0 top-0 z-40 flex w-full items-center ".concat(s?"dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition":"absolute bg-transparent"),children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"relative -mx-4 flex items-center justify-between",children:[(0,a.jsx)("div",{className:"w-80 max-w-full px-4 xl:mr-12",children:(0,a.jsxs)(c(),{href:"/",className:"header-logo block w-full ".concat(s?"py-5 lg:py-2":"py-8"," "),children:[(0,a.jsx)(o(),{src:"/images/logo/logo.svg",alt:"logo",width:140,height:30,className:"w-full dark:hidden"}),(0,a.jsx)(o(),{src:"/images/logo/logo-2.svg",alt:"logo",width:140,height:30,className:"hidden w-full dark:block"})]})}),(0,a.jsxs)("div",{className:"flex w-full items-center justify-between px-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("button",{onClick:()=>{r(!t)},id:"navbarToggler","aria-label":"Mobile Menu",className:"absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden",children:[(0,a.jsx)("span",{className:"relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ".concat(t?" top-[7px] rotate-45":" ")}),(0,a.jsx)("span",{className:"relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ".concat(t?"opacity-0 ":" ")}),(0,a.jsx)("span",{className:"relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ".concat(t?" top-[-8px] -rotate-45":" ")})]}),(0,a.jsx)("nav",{id:"navbarCollapse",className:"navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ".concat(t?"visibility top-full opacity-100":"invisible top-[120%] opacity-0"),children:(0,a.jsx)("ul",{className:"block lg:flex lg:space-x-12",children:C.map((t,r)=>(0,a.jsx)("li",{className:"group relative",children:t.path?(0,a.jsx)(c(),{href:t.path,className:"flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ".concat(d===t.path?"text-primary dark:text-white":"text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"),children:t.title}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{onClick:()=>handleSubmenu(r),className:"flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6",children:[t.title,(0,a.jsx)("span",{className:"pl-3",children:(0,a.jsx)("svg",{width:"25",height:"24",viewBox:"0 0 25 24",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z",fill:"currentColor"})})})]}),(0,a.jsx)("div",{className:"submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ".concat(i===r?"block":"hidden"),children:t.submenu.map((t,r)=>(0,a.jsx)(c(),{href:t.path,className:"block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3",children:t.title},r))})]})},r))})})]}),(0,a.jsxs)("div",{className:"flex items-center justify-end pr-16 lg:pr-0",children:[(0,a.jsx)(c(),{href:"/signup",className:"ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9",children:"Sign Up"}),(0,a.jsx)("div",{children:(0,a.jsx)(Header_ThemeToggler,{})})]})]})]})})})})};function ScrollToTop(){let[t,r]=(0,m.useState)(!1);return(0,m.useEffect)(()=>{let toggleVisibility=()=>{window.pageYOffset>300?r(!0):r(!1)};return window.addEventListener("scroll",toggleVisibility),()=>window.removeEventListener("scroll",toggleVisibility)},[]),(0,a.jsx)("div",{className:"fixed bottom-8 right-8 z-[99]",children:t&&(0,a.jsx)("div",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},"aria-label":"scroll to top",className:"flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp",children:(0,a.jsx)("span",{className:"mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"})})})}function Providers(t){let{children:r}=t;return(0,a.jsx)(u.f,{attribute:"class",enableSystem:!1,defaultTheme:"dark",children:r})}function RootLayout(t){let{children:r}=t;return(0,a.jsxs)("html",{suppressHydrationWarning:!0,lang:"en",children:[(0,a.jsx)("head",{}),(0,a.jsx)("body",{className:"bg-[#FCFCFC] dark:bg-black ".concat(i().className),children:(0,a.jsxs)(Providers,{children:[(0,a.jsx)(components_Header,{}),r,(0,a.jsx)(components_Footer,{}),(0,a.jsx)(ScrollToTop,{})]})})]})}s(8448),s(2390)},679:function(t,r,s){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(t,r){for(var s in r)Object.defineProperty(t,s,{enumerable:!0,get:r[s]})}(r,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return d}});let a=s(1024),l=s(7929),i=s(2637),n=s(413),o=a._(s(9950)),unstable_getImgProps=t=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:r}=(0,l.getImgProps)(t,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[t,s]of Object.entries(r))void 0===s&&delete r[t];return{props:r}},d=n.Image},8448:function(){},2390:function(){},3925:function(t){t.exports={style:{fontFamily:"'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",fontStyle:"normal"},className:"__className_e66fe9"}},622:function(t,r,s){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=s(2265),l=Symbol.for("react.element"),i=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,o=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function q(t,r,s){var a,i={},c=null,h=null;for(a in void 0!==s&&(c=""+s),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(h=r.ref),r)n.call(r,a)&&!d.hasOwnProperty(a)&&(i[a]=r[a]);if(t&&t.defaultProps)for(a in r=t.defaultProps)void 0===i[a]&&(i[a]=r[a]);return{$$typeof:l,type:t,key:c,ref:h,props:i,_owner:o.current}}r.Fragment=i,r.jsx=q,r.jsxs=q},7437:function(t,r,s){"use strict";t.exports=s(622)},6691:function(t,r,s){t.exports=s(679)},1396:function(t,r,s){t.exports=s(8326)},4033:function(t,r,s){t.exports=s(94)}},function(t){t.O(0,[326,413,971,472,744],function(){return t(t.s=472)}),_N_E=t.O()}]);