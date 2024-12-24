"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5300],{94256:function(e,t,n){let r;n.d(t,{Z:function(){return ee}});var i,o,u,c=[],s="ResizeObserver loop completed with undelivered notifications.",a=function(){var e;"function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:s}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=s),window.dispatchEvent(e)};(i=o||(o={})).BORDER_BOX="border-box",i.CONTENT_BOX="content-box",i.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box";var f=function(e){return Object.freeze(e)},h=function(e,t){this.inlineSize=e,this.blockSize=t,f(this)},l=function(){function e(e,t,n,r){return this.x=e,this.y=t,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,f(this)}return e.prototype.toJSON=function(){return{x:this.x,y:this.y,top:this.top,right:this.right,bottom:this.bottom,left:this.left,width:this.width,height:this.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),d=function(e){return e instanceof SVGElement&&"getBBox"in e},v=function(e){if(d(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var i=e.offsetWidth,o=e.offsetHeight;return!(i||o||e.getClientRects().length)},p=function(e){if(e instanceof Element)return!0;var t,n=null===(t=null==e?void 0:e.ownerDocument)||void 0===t?void 0:t.defaultView;return!!(n&&e instanceof n.Element)},g=function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},b="undefined"!=typeof window?window:{},w=new WeakMap,m=/auto|scroll/,E=/^tb|vertical/,x=/msie|trident/i.test(b.navigator&&b.navigator.userAgent),y=function(e){return parseFloat(e||"0")},T=function(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=!1),new h((n?t:e)||0,(n?e:t)||0)},z=f({devicePixelContentBoxSize:T(),borderBoxSize:T(),contentBoxSize:T(),contentRect:new l(0,0,0,0)}),R=function(e,t){if(void 0===t&&(t=!1),w.has(e)&&!t)return w.get(e);if(v(e))return w.set(e,z),z;var n=getComputedStyle(e),r=d(e)&&e.ownerSVGElement&&e.getBBox(),i=!x&&"border-box"===n.boxSizing,o=E.test(n.writingMode||""),u=!r&&m.test(n.overflowY||""),c=!r&&m.test(n.overflowX||""),s=r?0:y(n.paddingTop),a=r?0:y(n.paddingRight),h=r?0:y(n.paddingBottom),p=r?0:y(n.paddingLeft),g=r?0:y(n.borderTopWidth),b=r?0:y(n.borderRightWidth),R=r?0:y(n.borderBottomWidth),S=r?0:y(n.borderLeftWidth),B=p+a,O=s+h,k=S+b,C=g+R,N=c?e.offsetHeight-C-e.clientHeight:0,D=u?e.offsetWidth-k-e.clientWidth:0,M=r?r.width:y(n.width)-(i?B+k:0)-D,F=r?r.height:y(n.height)-(i?O+C:0)-N,_=M+B+D+k,A=F+O+N+C,P=f({devicePixelContentBoxSize:T(Math.round(M*devicePixelRatio),Math.round(F*devicePixelRatio),o),borderBoxSize:T(_,A,o),contentBoxSize:T(M,F,o),contentRect:new l(p,s,M,F)});return w.set(e,P),P},S=function(e,t,n){var r=R(e,n),i=r.borderBoxSize,u=r.contentBoxSize,c=r.devicePixelContentBoxSize;switch(t){case o.DEVICE_PIXEL_CONTENT_BOX:return c;case o.BORDER_BOX:return i;default:return u}},B=function(e){var t=R(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=f([t.borderBoxSize]),this.contentBoxSize=f([t.contentBoxSize]),this.devicePixelContentBoxSize=f([t.devicePixelContentBoxSize])},O=function(e){if(v(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},k=function(){var e=1/0,t=[];c.forEach(function(n){if(0!==n.activeTargets.length){var r=[];n.activeTargets.forEach(function(t){var n=new B(t.target),i=O(t.target);r.push(n),t.lastReportedSize=S(t.target,t.observedBox),i<e&&(e=i)}),t.push(function(){n.callback.call(n.observer,r,n.observer)}),n.activeTargets.splice(0,n.activeTargets.length)}});for(var n=0;n<t.length;n++)(0,t[n])();return e},C=function(e){c.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(n){n.isActive()&&(O(n.target)>e?t.activeTargets.push(n):t.skippedTargets.push(n))})})},N=function(){var e=0;for(C(0);c.some(function(e){return e.activeTargets.length>0});)C(e=k());return c.some(function(e){return e.skippedTargets.length>0})&&a(),e>0},D=[],M=function(e){if(!u){var t=0,n=document.createTextNode("");new MutationObserver(function(){return D.splice(0).forEach(function(e){return e()})}).observe(n,{characterData:!0}),u=function(){n.textContent="".concat(t?t--:t++)}}D.push(e),u()},F=function(e){M(function(){requestAnimationFrame(e)})},_=0,A={attributes:!0,characterData:!0,childList:!0,subtree:!0},P=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],W=function(e){return void 0===e&&(e=0),Date.now()+e},L=!1,I=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!L){L=!0;var n=W(e);F(function(){var r=!1;try{r=N()}finally{if(L=!1,e=n-W(),!_)return;r?t.run(1e3):e>0?t.run(e):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,A)};document.body?t():b.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),P.forEach(function(t){return b.addEventListener(t,e.listener,!0)}))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),P.forEach(function(t){return b.removeEventListener(t,e.listener,!0)}),this.stopped=!0)},e}()),X=function(e){!_&&e>0&&I.start(),(_+=e)||I.stop()},q=function(){function e(e,t){this.target=e,this.observedBox=t||o.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=S(this.target,this.observedBox,!0);return d(e=this.target)||g(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),V=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},G=new WeakMap,H=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return -1},J=function(){function e(){}return e.connect=function(e,t){var n=new V(e,t);G.set(e,n)},e.observe=function(e,t,n){var r=G.get(e),i=0===r.observationTargets.length;0>H(r.observationTargets,t)&&(i&&c.push(r),r.observationTargets.push(new q(t,n&&n.box)),X(1),I.schedule())},e.unobserve=function(e,t){var n=G.get(e),r=H(n.observationTargets,t),i=1===n.observationTargets.length;r>=0&&(i&&c.splice(c.indexOf(n),1),n.observationTargets.splice(r,1),X(-1))},e.disconnect=function(e){var t=this,n=G.get(e);n.observationTargets.slice().forEach(function(n){return t.unobserve(e,n.target)}),n.activeTargets.splice(0,n.activeTargets.length)},e}(),U=function(){function e(e){if(0==arguments.length)throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");J.connect(this,e)}return e.prototype.observe=function(e,t){if(0==arguments.length)throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!p(e))throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");J.observe(this,e,t)},e.prototype.unobserve=function(e){if(0==arguments.length)throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!p(e))throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");J.unobserve(this,e)},e.prototype.disconnect=function(){J.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}(),j=n(7653);let Y=j["undefined"!=typeof document&&void 0!==document.createElement?"useLayoutEffect":"useEffect"];var Z=e=>{let t=j.useRef(e);return j.useEffect(()=>{t.current=e}),t};let K="undefined"!=typeof window&&"ResizeObserver"in window?window.ResizeObserver:U;function Q(){}let $=()=>r||(r=function(){let e=!1,t=[],n=new Map,r=new K((r,i)=>{t=t.concat(r),e||window.requestAnimationFrame(function(){let r=new Set;for(let e=0;e<t.length;e++){if(r.has(t[e].target))continue;r.add(t[e].target);let o=n.get(t[e].target);null==o||o.forEach(n=>n(t[e],i))}t=[],e=!1}),e=!0});return{observer:r,subscribe(e,t){var i;r.observe(e);let o=null!==(i=n.get(e))&&void 0!==i?i:[];o.push(t),n.set(e,o)},unsubscribe(e,t){var i;let o=null!==(i=n.get(e))&&void 0!==i?i:[];if(1===o.length){r.unobserve(e),n.delete(e);return}let u=o.indexOf(t);-1!==u&&o.splice(u,1),n.set(e,o)}}}());var ee=function(e,t){let n=$(),r=Z(t);return Y(()=>{let t=!1,i=e&&"current"in e?e.current:e;if(!i)return Q;function o(e,n){t||r.current(e,n)}return n.subscribe(i,o),()=>{t=!0,n.unsubscribe(i,o)}},[e,n,r]),n.observer}},88270:function(e,t,n){n.d(t,{Nr:function(){return c},y1:function(){return i}});var r=n(7653);function i(e,t,n){var i=this,o=(0,r.useRef)(null),u=(0,r.useRef)(0),c=(0,r.useRef)(null),s=(0,r.useRef)([]),a=(0,r.useRef)(),f=(0,r.useRef)(),h=(0,r.useRef)(e),l=(0,r.useRef)(!0);h.current=e;var d="undefined"!=typeof window,v=!t&&0!==t&&d;if("function"!=typeof e)throw TypeError("Expected a function");t=+t||0;var p=!!(n=n||{}).leading,g=!("trailing"in n)||!!n.trailing,b="maxWait"in n,w="debounceOnServer"in n&&!!n.debounceOnServer,m=b?Math.max(+n.maxWait||0,t):null;return(0,r.useEffect)(function(){return l.current=!0,function(){l.current=!1}},[]),(0,r.useMemo)(function(){var e=function(e){var t=s.current,n=a.current;return s.current=a.current=null,u.current=e,f.current=h.current.apply(n,t)},n=function(e,t){v&&cancelAnimationFrame(c.current),c.current=v?requestAnimationFrame(e):setTimeout(e,t)},r=function(e){if(!l.current)return!1;var n=e-o.current;return!o.current||n>=t||n<0||b&&e-u.current>=m},E=function(t){return c.current=null,g&&s.current?e(t):(s.current=a.current=null,f.current)},x=function e(){var i=Date.now();if(r(i))return E(i);if(l.current){var c=t-(i-o.current);n(e,b?Math.min(c,m-(i-u.current)):c)}},y=function(){if(d||w){var h=Date.now(),v=r(h);if(s.current=[].slice.call(arguments),a.current=i,o.current=h,v){if(!c.current&&l.current)return u.current=o.current,n(x,t),p?e(o.current):f.current;if(b)return n(x,t),e(o.current)}return c.current||n(x,t),f.current}};return y.cancel=function(){c.current&&(v?cancelAnimationFrame(c.current):clearTimeout(c.current)),u.current=0,s.current=o.current=a.current=c.current=null},y.isPending=function(){return!!c.current},y.flush=function(){return c.current?E(Date.now()):f.current},y},[p,b,t,m,g,v,d,w])}function o(e,t){return e===t}function u(e,t){return t}function c(e,t,n){var c=n&&n.equalityFn||o,s=(0,r.useReducer)(u,e),a=s[0],f=s[1],h=i((0,r.useCallback)(function(e){return f(e)},[f]),t,n),l=(0,r.useRef)(e);return c(l.current,e)||(h(e),l.current=e),[a,h]}}}]);