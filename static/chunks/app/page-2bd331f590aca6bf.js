(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2124:function(e,t,r){Promise.resolve().then(r.bind(r,2575)),Promise.resolve().then(r.t.bind(r,8326,23)),Promise.resolve().then(r.bind(r,9531))},2575:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ScrollUp}});var n=r(2265);function ScrollUp(){return(0,n.useEffect)(()=>{var e;return null===(e=window.document.scrollingElement)||void 0===e?void 0:e.scrollTo(0,0)},[]),null}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,r){var n,i={},u=null,f=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(f=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:f,props:i,_owner:l.current}}t.Fragment=i,t.jsx=q,t.jsxs=q},7437:function(e,t,r){"use strict";e.exports=r(622)},9531:function(e,t,r){"use strict";r.r(t),r.d(t,{ReactCompareSlider:function(){return h},ReactCompareSliderHandle:function(){return B},ReactCompareSliderImage:function(){return Te},styleFitContainer:function(){return $},useReactCompareSliderRef:function(){return Ae}});var n,o=r(2265),i=r(7437),a=(0,o.forwardRef)(({transition:e,...t},r)=>{let n={position:"absolute",top:0,left:0,width:"100%",height:"100%",transition:e?`clip-path ${e}`:void 0,userSelect:"none",willChange:"clip-path, transition",KhtmlUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"};return(0,i.jsx)("div",{...t,style:n,"data-rcs":"clip-item",ref:r})});a.displayName="ContainerClip";var l=(0,o.forwardRef)(({children:e,disabled:t,portrait:r,position:n,transition:o},a)=>{let l={position:"absolute",top:0,width:r?"100%":void 0,height:r?void 0:"100%",background:"none",border:0,padding:0,pointerEvents:"all",appearance:"none",WebkitAppearance:"none",MozAppearance:"none",outline:0,transform:r?"translate3d(0, -50% ,0)":"translate3d(-50%, 0, 0)",transition:o?`${r?"top":"left"} ${o}`:void 0};return(0,i.jsx)("button",{ref:a,"aria-orientation":r?"vertical":"horizontal","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":n,"data-rcs":"handle-container",disabled:t,role:"slider",style:l,children:e})});l.displayName="ThisHandleContainer";var te=({flip:e})=>(0,i.jsx)("div",{className:"__rcs-handle-arrow",style:{width:0,height:0,borderTop:"8px solid transparent",borderRight:"10px solid",borderBottom:"8px solid transparent",transform:e?"rotate(180deg)":void 0}}),B=({className:e="__rcs-handle-root",disabled:t,buttonStyle:r,linesStyle:n,portrait:o,style:a,...l})=>{let c={display:"flex",flexDirection:o?"row":"column",placeItems:"center",height:"100%",cursor:t?"not-allowed":o?"ns-resize":"ew-resize",pointerEvents:"none",color:"#fff",...a},u={flexGrow:1,height:o?2:"100%",width:o?"100%":2,backgroundColor:"currentColor",pointerEvents:"auto",boxShadow:"0 0 4px rgba(0,0,0,.5)",...n},f={display:"grid",gridAutoFlow:"column",gap:8,placeContent:"center",flexShrink:0,width:56,height:56,borderRadius:"50%",borderStyle:"solid",borderWidth:2,pointerEvents:"auto",backdropFilter:"blur(7px)",WebkitBackdropFilter:"blur(7px)",backgroundColor:"rgba(0, 0, 0, 0.125)",boxShadow:"0 0 4px rgba(0,0,0,.35)",transform:o?"rotate(90deg)":void 0,...r};return(0,i.jsxs)("div",{...l,"aria-label":l["aria-label"]||"Drag to move",className:e,style:c,children:[(0,i.jsx)("div",{className:"__rcs-handle-line",style:u}),(0,i.jsxs)("div",{className:"__rcs-handle-button",style:f,children:[(0,i.jsx)(te,{}),(0,i.jsx)(te,{flip:!0})]}),(0,i.jsx)("div",{className:"__rcs-handle-line",style:u})]})},c=((n=c||{}).ARROW_LEFT="ArrowLeft",n.ARROW_RIGHT="ArrowRight",n.ARROW_UP="ArrowUp",n.ARROW_DOWN="ArrowDown",n),$=({boxSizing:e="border-box",objectFit:t="cover",objectPosition:r="center center",...n}={})=>({display:"block",width:"100%",height:"100%",maxWidth:"100%",boxSizing:e,objectFit:t,objectPosition:r,...n}),ne=e=>{let t=(0,o.useRef)(e);return(0,o.useEffect)(()=>{t.current=e}),t.current},O=(e,t,r,n)=>{let i=(0,o.useRef)();(0,o.useEffect)(()=>{i.current=t},[t]),(0,o.useEffect)(()=>{if(!(r&&r.addEventListener))return;let d=e=>i.current&&i.current(e);return r.addEventListener(e,d,n),()=>{r.removeEventListener(e,d,n)}},[e,r,n])},u="u">typeof window&&"u">typeof window.document&&"u">typeof window.document.createElement?o.useLayoutEffect:o.useEffect,oe=(e,t)=>{let r=(0,o.useRef)(),n=(0,o.useCallback)(()=>{e.current&&r.current&&r.current.observe(e.current)},[e]);u(()=>(r.current=new ResizeObserver(([e])=>t(e.contentRect)),n(),()=>{r.current&&r.current.disconnect()}),[t,n])},f={capture:!1,passive:!0},p={capture:!0,passive:!1},h=(0,o.forwardRef)(({disabled:e=!1,handle:t,itemOne:r,itemTwo:n,onlyHandleDraggable:u=!1,onPositionChange:h,portrait:v=!1,position:b=50,boundsPadding:w=0,changePositionOnHover:m=!1,keyboardIncrement:g="5%",style:y,transition:x,...R},E)=>{let _=(0,o.useRef)(null),k=(0,o.useRef)(null),C=(0,o.useRef)(null),S=(0,o.useRef)(b),[j,A]=(0,o.useState)(!1),[L,P]=(0,o.useState)(!0),N=(0,o.useRef)(!1),[U,W]=(0,o.useState)(),z=ne(b),D=(0,o.useCallback)(function({x:e,y:t,isOffset:r}){let n=_.current,o=C.current,i=k.current,{width:a,height:l,left:c,top:u}=n.getBoundingClientRect();if(0===a||0===l)return;let f=Math.min(Math.max((v?r?t-u-window.scrollY:t:r?e-c-window.scrollX:e)/(v?l:a)*100,0),100),p=v?l/(n.offsetHeight||1):a/(n.offsetWidth||1),b=w*p/(v?l:a)*100,m=Math.min(Math.max(f,b*p),100-b*p);S.current=f,o.setAttribute("aria-valuenow",`${Math.round(S.current)}`),o.style.top=v?`${m}%`:"0",o.style.left=v?"0":`${m}%`,i.style.clipPath=v?`inset(${m}% 0 0 0)`:`inset(0 0 0 ${m}%)`,h&&h(S.current)},[w,h,v]);(0,o.useEffect)(()=>{let{width:e,height:t}=_.current.getBoundingClientRect(),r=b===z?S.current:b;D({x:e/100*r,y:t/100*r})},[w,b,v,z,D]);let M=(0,o.useCallback)(t=>{t.preventDefault(),e||0!==t.button||(D({isOffset:!0,x:t.pageX,y:t.pageY}),A(!0),P(!0))},[e,D]),T=(0,o.useCallback)(function(e){D({isOffset:!0,x:e.pageX,y:e.pageY}),P(!1)},[D]),F=(0,o.useCallback)(()=>{A(!1),P(!0)},[]),I=(0,o.useCallback)(({width:e,height:t})=>{let{width:r,height:n}=_.current.getBoundingClientRect();D({x:e/100*S.current*r/e,y:t/100*S.current*n/t})},[D]),H=(0,o.useCallback)(e=>{e.preventDefault(),C.current.focus()},[]),Y=(0,o.useCallback)(e=>{if(!Object.values(c).includes(e.key))return;e.preventDefault(),P(!0);let{top:t,left:r}=C.current.getBoundingClientRect(),{width:n,height:o}=_.current.getBoundingClientRect(),i="string"==typeof g?parseFloat(g):g/n*100,a=Math.min(Math.max((v?"ArrowLeft"===e.key||"ArrowDown"===e.key:"ArrowRight"===e.key||"ArrowUp"===e.key)?S.current+i:S.current-i,0),100);D({x:v?r:n*a/100,y:v?o*a/100:t})},[g,v,D]);(0,o.useEffect)(()=>{W(u?C.current:_.current)},[u]),(0,o.useEffect)(()=>{let e=_.current,s=()=>{j||F()};return m&&(e.addEventListener("pointermove",T,f),e.addEventListener("pointerleave",s,f)),()=>{e.removeEventListener("pointermove",T),e.removeEventListener("pointerleave",s)}},[m,T,F,j]),(0,o.useEffect)(()=>(j&&!N.current&&(window.addEventListener("pointermove",T,f),window.addEventListener("pointerup",F,f),N.current=!0),()=>{N.current&&(window.removeEventListener("pointermove",T),window.removeEventListener("pointerup",F),N.current=!1)}),[T,F,j]),(0,o.useImperativeHandle)(E,()=>({rootContainer:_.current,setPosition(e){let{width:t,height:r}=_.current.getBoundingClientRect();D({x:t/100*e,y:r/100*e})}}),[D]),oe(_,I),O("keydown",Y,C.current,p),O("click",H,C.current,p),O("pointerdown",M,U,p);let X=t||(0,i.jsx)(B,{disabled:e,portrait:v}),G=L?x:void 0,K={position:"relative",display:"flex",overflow:"hidden",cursor:j?v?"ns-resize":"ew-resize":void 0,touchAction:"none",userSelect:"none",KhtmlUserSelect:"none",msUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",...y};return(0,i.jsxs)("div",{...R,ref:_,style:K,"data-rcs":"root",children:[r,(0,i.jsx)(a,{ref:k,transition:G,children:n}),(0,i.jsx)(l,{disabled:e,portrait:v,position:Math.round(S.current),ref:C,transition:G,children:X})]})});h.displayName="ReactCompareSlider";var Te=({style:e,...t})=>{let r=$(e);return(0,i.jsx)("img",{...t,style:r,"data-rcs":"image"})},Ae=()=>(0,o.useRef)({rootContainer:null,setPosition:()=>console.warn("[react-compare-slider] `setPosition` cannot be used until the component has mounted.")})}},function(e){e.O(0,[326,971,472,744],function(){return e(e.s=2124)}),_N_E=e.O()}]);