"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4476],{93836:function(e,t,r){r.d(t,{g:function(){return n}});function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}},64113:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(93836),a=r(7653),o=r(21147);function l(e){let{locale:t,...r}=e;if(!t)throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl-docs.vercel.app/docs/configuration#locale");return a.createElement(o.IntlProvider,(0,n.g)({locale:t},r))}},17858:function(e,t,r){var n=r(62274),a=r(77823);t.iV=n.default,a.default},53288:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(68902),a=r(7653),o=r(24919),l=r(57519),u=a&&a.__esModule?a:{default:a};let i=a.forwardRef(function(e,t){let{locale:r,...a}=e,i=o.default();return u.default.createElement(l.default,n.extends({ref:t,locale:r||i},a))});i.displayName="ClientLink",t.default=i},47943:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(24919),a=r(86048);t.default=function(e){let t;try{t=n.default()}catch(e){throw Error(void 0)}for(var r=arguments.length,o=Array(r>1?r-1:0),l=1;l<r;l++)o[l-1]=arguments[l];return a.default({...e,locale:t},...o)}},28503:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(24919),a=r(82541);t.default=function(e){let t;try{t=n.default()}catch(e){throw Error(void 0)}for(var r=arguments.length,o=Array(r>1?r-1:0),l=1;l<r;l++)o[l-1]=arguments[l];return a.default({...e,locale:t},...o)}},77823:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(68902),a=r(7653),o=r(24919),l=r(14666),u=r(53288),i=r(47943),f=r(28503),c=r(23125),s=r(85568),d=a&&a.__esModule?a:{default:a};t.default=function(e){function t(){let t=o.default();if(!e.locales.includes(t))throw Error(void 0);return t}let r=a.forwardRef(function(r,a){let{href:o,locale:i,...f}=r,c=t(),s=i||c;return d.default.createElement(u.default,n.extends({ref:a,href:l.compileLocalizedPathname({locale:s,pathname:o,params:"object"==typeof o?o.params:void 0,pathnames:e.pathnames}),locale:i,localePrefix:e.localePrefix},f))});function p(t){let{href:r,locale:n}=t;return l.compileLocalizedPathname({...l.normalizeNameOrNameWithParams(r),locale:n,pathnames:e.pathnames})}return r.displayName="Link",{Link:r,redirect:function(r){let n=p({href:r,locale:t()});for(var a=arguments.length,o=Array(a>1?a-1:0),l=1;l<a;l++)o[l-1]=arguments[l];return f.default({...e,pathname:n},...o)},permanentRedirect:function(r){let n=p({href:r,locale:t()});for(var a=arguments.length,o=Array(a>1?a-1:0),l=1;l<a;l++)o[l-1]=arguments[l];return i.default({...e,pathname:n},...o)},usePathname:function(){let r=c.default(),n=t();return r?l.getRoute({pathname:r,locale:n,pathnames:e.pathnames}):r},useRouter:function(){let e=s.default(),r=t();return{...e,push(t){for(var n,a=arguments.length,o=Array(a>1?a-1:0),l=1;l<a;l++)o[l-1]=arguments[l];let u=p({href:t,locale:(null===(n=o[0])||void 0===n?void 0:n.locale)||r});return e.push(u,...o)},replace(t){for(var n,a=arguments.length,o=Array(a>1?a-1:0),l=1;l<a;l++)o[l-1]=arguments[l];let u=p({href:t,locale:(null===(n=o[0])||void 0===n?void 0:n.locale)||r});return e.replace(u,...o)},prefetch(t){for(var n,a=arguments.length,o=Array(a>1?a-1:0),l=1;l<a;l++)o[l-1]=arguments[l];let u=p({href:t,locale:(null===(n=o[0])||void 0===n?void 0:n.locale)||r});return e.prefetch(u,...o)}}},getPathname:p}}},62274:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(68902),a=r(7653),o=r(53288),l=r(47943),u=r(28503),i=r(23125),f=r(85568),c=a&&a.__esModule?a:{default:a};t.default=function(e){let t=a.forwardRef(function(t,r){return c.default.createElement(o.default,n.extends({ref:r,localePrefix:null==e?void 0:e.localePrefix},t))});return t.displayName="Link",{Link:t,redirect:function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return u.default({...e,pathname:t},...n)},permanentRedirect:function(t){for(var r=arguments.length,n=Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return l.default({...e,pathname:t},...n)},usePathname:function(){return i.default()},useRouter:f.default}}},23125:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(54603),a=r(7653),o=r(24919),l=r(51124);t.default=function(){let e=n.usePathname(),t=o.default();return a.useMemo(()=>e&&l.hasPathnamePrefixed(t,e)?l.unlocalizePathname(e,t):e,[t,e])}},85568:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(54603),a=r(7653),o=r(24919),l=r(51124),u=r(300),i=r(14666);t.default=function(){let e=n.useRouter(),t=o.default(),r=n.usePathname();return a.useMemo(()=>{function n(e){return function(n,a){let{locale:o,...f}=a||{};u.default(r,t,o);let c=[function(e,n){let a=window.location.pathname,o=i.getBasePath(r);return o&&(a=a.replace(o,"")),l.localizeHref(e,n||t,t,a)}(n,o)];return Object.keys(f).length>0&&c.push(f),e(...c)}}return{...e,push:n(e.push),replace:n(e.replace),prefetch:n(e.prefetch)}},[t,r,e])}},57519:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(68902),a=r(77997),o=r(54603),l=r(7653),u=r(24919),i=r(51124),f=r(300);function c(e){return e&&e.__esModule?e:{default:e}}var s=c(a),d=c(l);let p=l.forwardRef(function(e,t){let{href:r,locale:a,localePrefix:c,onClick:p,prefetch:h,...m}=e,y=o.usePathname(),v=u.default(),g=a!==v,[P,b]=l.useState(()=>i.isLocalHref(r)&&("never"!==c||g)?i.prefixHref(r,a):r);return l.useEffect(()=>{y&&"never"!==c&&b(i.localizeHref(r,a,v,null!=y?y:void 0))},[v,r,a,c,y]),g&&(h=!1),d.default.createElement(s.default,n.extends({ref:t,href:P,hrefLang:g?a:void 0,onClick:function(e){f.default(y,v,a),p&&p(e)},prefetch:h},m))});p.displayName="ClientLink",t.default=p},86048:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(54603),a=r(51124);t.default=function(e){let t="never"===e.localePrefix?e.pathname:a.prefixPathname(e.locale,e.pathname);for(var r=arguments.length,o=Array(r>1?r-1:0),l=1;l<r;l++)o[l-1]=arguments[l];return n.permanentRedirect(t,...o)}},82541:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(54603),a=r(51124);t.default=function(e){let t="never"===e.localePrefix?e.pathname:a.prefixPathname(e.locale,e.pathname);for(var r=arguments.length,o=Array(r>1?r-1:0),l=1;l<r;l++)o[l-1]=arguments[l];return n.redirect(t,...o)}},300:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(38852),a=r(14666);t.default=function(e,t,r){if(!(r!==t&&null!=r)||!e)return;let o=a.getBasePath(e);document.cookie="".concat(n.COOKIE_LOCALE_NAME,"=").concat(r,"; path=").concat(""!==o?o:"/","; max-age=").concat(n.COOKIE_MAX_AGE,"; sameSite=").concat(n.COOKIE_SAME_SITE)}},14666:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(51124);function a(e){let t=new URLSearchParams;for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.append(r,String(e))}):t.set(r,String(n));return"?"+t.toString()}t.compileLocalizedPathname=function(e){let{pathname:t,locale:r,params:n,pathnames:o,query:l}=e;function u(e){let t=o[e];return t||(t=e),t}function i(e){let t="string"==typeof e?e:e[r];return n&&Object.entries(n).forEach(e=>{let[r,n]=e;t=Array.isArray(n)?t.replace(RegExp("(\\[)?\\[...".concat(r,"\\](\\])?"),"g"),n.map(e=>String(e)).join("/")):t.replace("[".concat(r,"]"),String(n))}),l&&(t+=a(l)),t}if("string"==typeof t)return i(u(t));{let{pathname:e,...r}=t;return{...r,pathname:i(u(e))}}},t.getBasePath=function(e){return window.location.pathname.replace(e,"")},t.getRoute=function(e){var t;let{locale:r,pathname:a,pathnames:o}=e,l=n.unlocalizePathname(a,r),u=null===(t=Object.entries(o).find(e=>{let[,t]=e,a="string"!=typeof t?t[r]:t;return n.matchesPathname(a,l)}))||void 0===t?void 0:t[0];return u||(u=a),u},t.normalizeNameOrNameWithParams=function(e){return"string"==typeof e?{pathname:e}:e},t.serializeSearchParams=a},51124:function(e,t){function r(e){let t="object"==typeof e?e.pathname:e;return null!=t&&!t.startsWith("/")}function n(e){return"object"==typeof e?null==e.host&&null==e.hostname:!/^[a-z]+:/i.test(e)}function a(e,t){let r;return"string"==typeof e?r=o(t,e):(r={...e},e.pathname&&(r.pathname=o(t,e.pathname))),r}function o(e,t){let r="/"+e;return/^\/(\?.*)?$/.test(t)&&(t=t.slice(1)),r+=t}function l(e,t){let r="/".concat(e);return t===r||t.startsWith("".concat(r,"/"))}function u(e){let t=e.replace(/\[([^\]]+)\]/g,e=>e.startsWith("[...")||e.startsWith("[[...")?"(.*)":"([^/]+)").replaceAll("(.*)]","(.*)");return new RegExp("^".concat(t,"$"))}Object.defineProperty(t,"__esModule",{value:!0}),t.hasPathnamePrefixed=l,t.isLocalHref=n,t.isRelativeHref=r,t.localizeHref=function(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,u=arguments.length>3?arguments[3]:void 0;if(!n(e)||r(e))return e;let i=t!==o,f=null==t||l(t,u);return(i||f)&&null!=t?a(e,t):e},t.matchesPathname=function(e,t){return u(e).test(t)},t.prefixHref=a,t.prefixPathname=o,t.templateToRegex=u,t.unlocalizePathname=function(e,t){return e.replace(new RegExp("^/".concat(t)),"")||"/"}},99915:function(e,t,r){r.d(t,{default:function(){return a.a}});var n=r(34330),a=r.n(n)},34330:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let n=r(907);r(27573),r(7653);let a=n._(r(1526));function o(e,t){let r={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};return"function"==typeof e&&(r.loader=e),(0,a.default)({...r,...t})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},88367:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return a}});let n=r(59006);function a(e){let{reason:t,children:r}=e;if("undefined"==typeof window)throw new n.BailoutToCSRError(t);return r}},1526:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}});let n=r(27573),a=r(7653),o=r(88367);function l(e){var t;return{default:null!=(t=null==e?void 0:e.default)?t:e}}let u={loader:()=>Promise.resolve(l(()=>null)),loading:null,ssr:!0},i=function(e){let t={...u,...e},r=(0,a.lazy)(()=>t.loader().then(l)),i=t.loading;function f(e){let l=i?(0,n.jsx)(i,{isLoading:!0,pastDelay:!0,error:null}):null,u=t.ssr?(0,n.jsx)(r,{...e}):(0,n.jsx)(o.BailoutToCSR,{reason:"next/dynamic",children:(0,n.jsx)(r,{...e})});return(0,n.jsx)(a.Suspense,{fallback:l,children:u})}return f.displayName="LoadableComponent",f}},2816:function(e,t){/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),n=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),a=Object.assign,o={};function l(e,t,r){this.props=e,this.context=t,this.refs=o,this.updater=r||n}function u(){}function i(e,t,r){this.props=e,this.context=t,this.refs=o,this.updater=r||n}l.prototype.isReactComponent={},l.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},l.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},u.prototype=l.prototype;var f=i.prototype=new u;f.constructor=i,a(f,l.prototype),f.isPureReactComponent=!0;var c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,n){var a,o={},l=null,u=null;if(null!=t)for(a in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(l=""+t.key),t)c.call(t,a)&&!s.hasOwnProperty(a)&&(o[a]=t[a]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var f=Array(i),d=0;d<i;d++)f[d]=arguments[d+2];o.children=f}if(e&&e.defaultProps)for(a in i=e.defaultProps)void 0===o[a]&&(o[a]=i[a]);return{$$typeof:r,type:e,key:l,ref:u,props:o,_owner:null}}},4325:function(e,t,r){e.exports=r(2816)},21147:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var n=r(7653),a=r(89857),o=r(71596),l=n&&n.__esModule?n:{default:n};t.IntlProvider=function(e){let{children:t,defaultTranslationValues:r,formats:u,getMessageFallback:i,locale:f,messages:c,now:s,onError:d,timeZone:p}=e,[h]=n.useState(()=>new Map),m=n.useMemo(()=>({...a.initializeConfig({locale:f,defaultTranslationValues:r,formats:u,getMessageFallback:i,messages:c,now:s,onError:d,timeZone:p}),messageFormatCache:h}),[r,u,i,f,h,c,s,d,p]);return l.default.createElement(o.IntlContext.Provider,{value:m},t)}},89857:function(e,t){function r(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(".")}function n(e){return r(e.namespace,e.key)}function a(e){console.error(e)}t.defaultGetMessageFallback=n,t.defaultOnError=a,t.initializeConfig=function(e){let{getMessageFallback:t,messages:r,onError:o,...l}=e;return{...l,messages:r,onError:o||a,getMessageFallback:t||n}},t.joinPath=r},47138:function(e,t){var r;!/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/function(){var n={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=o(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=o(t,r));return t}(r)))}return e}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0!==(r=(function(){return a}).apply(t,[]))&&(e.exports=r)}()}}]);