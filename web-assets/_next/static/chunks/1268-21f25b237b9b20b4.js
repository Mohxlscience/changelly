"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1268],{77997:function(e,t,n){n.r(t),n.d(t,{default:function(){return o.a}});var r=n(43040),o=n.n(r),l={};for(var u in r)"default"!==u&&(l[u]=(function(e){return r[e]}).bind(0,u));n.d(t,l)},54603:function(e,t,n){n.r(t);var r=n(2988),o={};for(var l in r)"default"!==l&&(o[l]=(function(e){return r[e]}).bind(0,l));n.d(t,o)},82995:function(e,t,n){function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(78707),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},43040:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return C}});let r=n(907),o=n(27573),l=r._(n(7653)),u=n(93832),f=n(96171),a=n(90856),i=n(35551),c=n(68379),s=n(62537),d=n(8251),p=n(95324),v=n(82995),b=n(65380),y=n(50706),h=new Set;function g(e,t,n,r,o,l){if("undefined"!=typeof window&&(l||(0,f.isLocalURL)(t))){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(h.has(o))return;h.add(o)}Promise.resolve(l?e.prefetch(t,o):e.prefetch(t,n,r)).catch(e=>{})}}function _(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let C=l.default.forwardRef(function(e,t){let n,r;let{href:a,as:h,children:C,prefetch:j=null,passHref:m,replace:M,shallow:P,scroll:k,locale:x,onClick:O,onMouseEnter:L,onTouchStart:E,legacyBehavior:w=!1,...I}=e;n=C,w&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let R=l.default.useContext(s.RouterContext),T=l.default.useContext(d.AppRouterContext),S=null!=R?R:T,U=!R,K=!1!==j,A=null===j?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:D,as:N}=l.default.useMemo(()=>{if(!R){let e=_(a);return{href:e,as:h?_(h):e}}let[e,t]=(0,u.resolveHref)(R,a,!0);return{href:e,as:h?(0,u.resolveHref)(R,h):t||e}},[R,a,h]),H=l.default.useRef(D),q=l.default.useRef(N);w&&(r=l.default.Children.only(n));let z=w?r&&"object"==typeof r&&r.ref:t,[B,F,G]=(0,p.useIntersection)({rootMargin:"200px"}),J=l.default.useCallback(e=>{(q.current!==N||H.current!==D)&&(G(),q.current=N,H.current=D),B(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[N,z,D,G,B]);l.default.useEffect(()=>{S&&F&&K&&g(S,D,N,{locale:x},{kind:A},U)},[N,D,F,x,K,null==R?void 0:R.locale,S,U,A]);let Q={ref:J,onClick(e){w||"function"!=typeof O||O(e),w&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,n,r,o,u,a,i,c){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,f.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:i,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};c?l.default.startTransition(d):d()}(e,S,D,N,M,P,k,x,U)},onMouseEnter(e){w||"function"!=typeof L||L(e),w&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),S&&(K||!U)&&g(S,D,N,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:A},U)},onTouchStart(e){w||"function"!=typeof E||E(e),w&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),S&&(K||!U)&&g(S,D,N,{locale:x,priority:!0,bypassPrefetchedCheck:!0},{kind:A},U)}};if((0,i.isAbsoluteUrl)(N))Q.href=N;else if(!w||m||"a"===r.type&&!("href"in r.props)){let e=void 0!==x?x:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&(0,v.getDomainLocale)(N,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);Q.href=t||(0,b.addBasePath)((0,c.addLocale)(N,e,null==R?void 0:R.defaultLocale))}return w?l.default.cloneElement(r,Q):(0,o.jsx)("a",{...I,...Q,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},95324:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let r=n(7653),o=n(89460),l="function"==typeof IntersectionObserver,u=new Map,f=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,i=a||!l,[c,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(l){if(i||c)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=f.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},f.push(n),u.set(n,t),t}(n);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(r);let e=f.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[i,n,t,c,d.current]),[p,c,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},71596:function(e,t,n){var r=n(7653).createContext(void 0);t.IntlContext=r},80060:function(e,t,n){var r=n(7653),o=n(71596);function l(){let e=r.useContext(o.IntlContext);if(!e)throw Error(void 0);return e}t.useIntlContext=l,t.useLocale=function(){return l().locale}},38072:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(80060);n(7653),n(71596),t.useLocale=r.useLocale}}]);