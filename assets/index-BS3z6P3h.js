(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,ee=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),te=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ne=/-\w/g,T=te(e=>e.replace(ne,e=>e.slice(1).toUpperCase())),re=/\B([A-Z])/g,E=te(e=>e.replace(re,`-$1`).toLowerCase()),ie=te(e=>e.charAt(0).toUpperCase()+e.slice(1)),ae=te(e=>e?`on${ie(e)}`:``),D=(e,t)=>!Object.is(e,t),oe=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},O=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},se=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ce,le=()=>ce||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function ue(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?me(r):ue(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(g(e)||v(e))return e}var de=/;(?![^(]*\))/g,fe=/:([^]+)/,pe=/\/\*[^]*?\*\//g;function me(e){let t={};return e.replace(pe,``).split(de).forEach(e=>{if(e){let n=e.split(fe);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function k(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=k(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var he=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,ge=e(he);he+``;function _e(e){return!!e||e===``}function ve(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ye(e[r],t[r]);return n}function ye(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=_(e),r=_(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return n&&r?ve(e,t):!1;if(n=v(e),r=v(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ye(e[n],t[n]))return!1}}return String(e)===String(t)}var A,be=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&A&&(A.active?(this.parent=A,this.index=(A.scopes||=[]).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=A;try{return A=this,e()}finally{A=t}}}on(){++this._on===1&&(this.prevScope=A,A=this)}off(){if(this._on>0&&--this._on===0){if(A===this)A=this.prevScope;else{let e=A;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function xe(){return A}var j,Se=new WeakSet,Ce=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,A&&(A.active?A.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Se.has(this)&&(Se.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||De(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Be(this),Ae(this);let e=j,t=Ie;j=this,Ie=!0;try{return this.fn()}finally{je(this),j=e,Ie=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Pe(e);this.deps=this.depsTail=void 0,Be(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Se.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Me(this)&&this.run()}get dirty(){return Me(this)}},we=0,Te,Ee;function De(e,t=!1){if(e.flags|=8,t){e.next=Ee,Ee=e;return}e.next=Te,Te=e}function Oe(){we++}function ke(){if(--we>0)return;if(Ee){let e=Ee;for(Ee=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Te;){let t=Te;for(Te=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Ae(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function je(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Pe(r),Fe(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Me(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ne(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ne(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ve)||(e.globalVersion=Ve,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Me(e))))return;e.flags|=2;let t=e.dep,n=j,r=Ie;j=e,Ie=!0;try{Ae(e);let n=e.fn(e._value);(t.version===0||D(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{j=n,Ie=r,je(e),e.flags&=-3}}function Pe(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Pe(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Fe(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Ie=!0,Le=[];function Re(){Le.push(Ie),Ie=!1}function ze(){let e=Le.pop();Ie=e===void 0?!0:e}function Be(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=j;j=void 0;try{t()}finally{j=e}}}var Ve=0,He=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Ue=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!j||!Ie||j===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==j)t=this.activeLink=new He(j,this),j.deps?(t.prevDep=j.depsTail,j.depsTail.nextDep=t,j.depsTail=t):j.deps=j.depsTail=t,We(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=j.depsTail,t.nextDep=void 0,j.depsTail.nextDep=t,j.depsTail=t,j.deps===t&&(j.deps=e)}return t}trigger(e){this.version++,Ve++,this.notify(e)}notify(e){Oe();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{ke()}}};function We(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)We(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Ge=new WeakMap,Ke=Symbol(``),qe=Symbol(``),Je=Symbol(``);function M(e,t,n){if(Ie&&j){let t=Ge.get(e);t||Ge.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Ue),r.map=t,r.key=n),r.track()}}function Ye(e,t,n,r,i,a){let o=Ge.get(e);if(!o){Ve++;return}let s=e=>{e&&e.trigger()};if(Oe(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===Je||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(Je)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Ke)),f(e)&&s(o.get(qe)));break;case`delete`:i||(s(o.get(Ke)),f(e)&&s(o.get(qe)));break;case`set`:f(e)&&s(o.get(Ke));break}}ke()}function Xe(e){let t=N(e);return t===e?t:(M(t,`iterate`,Je),Ft(e)?t:t.map(Rt))}function Ze(e){return M(e=N(e),`iterate`,Je),e}function Qe(e,t){return Pt(e)?zt(Nt(e)?Rt(t):t):Rt(t)}var $e={__proto__:null,[Symbol.iterator](){return et(this,Symbol.iterator,e=>Qe(this,e))},concat(...e){return Xe(this).concat(...e.map(e=>d(e)?Xe(e):e))},entries(){return et(this,`entries`,e=>(e[1]=Qe(this,e[1]),e))},every(e,t){return nt(this,`every`,e,t,void 0,arguments)},filter(e,t){return nt(this,`filter`,e,t,e=>e.map(e=>Qe(this,e)),arguments)},find(e,t){return nt(this,`find`,e,t,e=>Qe(this,e),arguments)},findIndex(e,t){return nt(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return nt(this,`findLast`,e,t,e=>Qe(this,e),arguments)},findLastIndex(e,t){return nt(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return nt(this,`forEach`,e,t,void 0,arguments)},includes(...e){return it(this,`includes`,e)},indexOf(...e){return it(this,`indexOf`,e)},join(e){return Xe(this).join(e)},lastIndexOf(...e){return it(this,`lastIndexOf`,e)},map(e,t){return nt(this,`map`,e,t,void 0,arguments)},pop(){return at(this,`pop`)},push(...e){return at(this,`push`,e)},reduce(e,...t){return rt(this,`reduce`,e,t)},reduceRight(e,...t){return rt(this,`reduceRight`,e,t)},shift(){return at(this,`shift`)},some(e,t){return nt(this,`some`,e,t,void 0,arguments)},splice(...e){return at(this,`splice`,e)},toReversed(){return Xe(this).toReversed()},toSorted(e){return Xe(this).toSorted(e)},toSpliced(...e){return Xe(this).toSpliced(...e)},unshift(...e){return at(this,`unshift`,e)},values(){return et(this,`values`,e=>Qe(this,e))}};function et(e,t,n){let r=Ze(e),i=r[t]();return r!==e&&!Ft(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var tt=Array.prototype;function nt(e,t,n,r,i,a){let o=Ze(e),s=o!==e&&!Ft(e),c=o[t];if(c!==tt[t]){let t=c.apply(e,a);return s?Rt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,Qe(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function rt(e,t,n,r){let i=Ze(e),a=i!==e&&!Ft(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=Qe(e,t)),n.call(this,t,Qe(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?Qe(e,c):c}function it(e,t,n){let r=N(e);M(r,`iterate`,Je);let i=r[t](...n);return(i===-1||i===!1)&&It(n[0])?(n[0]=N(n[0]),r[t](...n)):i}function at(e,t,n=[]){Re(),Oe();let r=N(e)[t].apply(e,n);return ke(),ze(),r}var ot=e(`__proto__,__v_isRef,__isVue`),st=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function ct(e){_(e)||(e=String(e));let t=N(this);return M(t,`has`,e),t.hasOwnProperty(e)}var lt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Dt:Et:i?Tt:wt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=$e[t]))return e;if(t===`hasOwnProperty`)return ct}let o=Reflect.get(e,t,P(e)?e:n);if((_(t)?st.has(t):ot(t))||(r||M(e,`get`,t),i))return o;if(P(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?jt(e):e}return v(o)?r?jt(o):kt(o):o}},ut=class extends lt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=Pt(i);if(!Ft(n)&&!Pt(n)&&(i=N(i),n=N(n)),!a&&P(i)&&!P(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,P(e)?e:r);return e===N(r)&&(o?D(n,i)&&Ye(e,`set`,t,n,i):Ye(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&Ye(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!st.has(t))&&M(e,`has`,t),n}ownKeys(e){return M(e,`iterate`,d(e)?`length`:Ke),Reflect.ownKeys(e)}},dt=class extends lt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},ft=new ut,pt=new dt,mt=new ut(!0),ht=e=>e,gt=e=>Reflect.getPrototypeOf(e);function _t(e,t,n){return function(...r){let i=this.__v_raw,a=N(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?ht:t?zt:Rt;return!t&&M(a,`iterate`,l?qe:Ke),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function vt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function yt(e,t){let n={get(n){let r=this.__v_raw,i=N(r),a=N(n);e||(D(n,a)&&M(i,`get`,n),M(i,`get`,a));let{has:o}=gt(i),s=t?ht:e?zt:Rt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&M(N(t),`iterate`,Ke),t.size},has(t){let n=this.__v_raw,r=N(n),i=N(t);return e||(D(t,i)&&M(r,`has`,t),M(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=N(a),s=t?ht:e?zt:Rt;return!e&&M(o,`iterate`,Ke),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:vt(`add`),set:vt(`set`),delete:vt(`delete`),clear:vt(`clear`)}:{add(e){let n=N(this),r=gt(n),i=N(e),a=!t&&!Ft(e)&&!Pt(e)?i:e;return r.has.call(n,a)||D(e,a)&&r.has.call(n,e)||D(i,a)&&r.has.call(n,i)||(n.add(a),Ye(n,`add`,a,a)),this},set(e,n){!t&&!Ft(n)&&!Pt(n)&&(n=N(n));let r=N(this),{has:i,get:a}=gt(r),o=i.call(r,e);o||=(e=N(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?D(n,s)&&Ye(r,`set`,e,n,s):Ye(r,`add`,e,n),this},delete(e){let t=N(this),{has:n,get:r}=gt(t),i=n.call(t,e);i||=(e=N(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&Ye(t,`delete`,e,void 0,a),o},clear(){let e=N(this),t=e.size!==0,n=e.clear();return t&&Ye(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=_t(r,e,t)}),n}function bt(e,t){let n=yt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var xt={get:bt(!1,!1)},St={get:bt(!1,!0)},Ct={get:bt(!0,!1)},wt=new WeakMap,Tt=new WeakMap,Et=new WeakMap,Dt=new WeakMap;function Ot(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function kt(e){return Pt(e)?e:Mt(e,!1,ft,xt,wt)}function At(e){return Mt(e,!1,mt,St,Tt)}function jt(e){return Mt(e,!0,pt,Ct,Et)}function Mt(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=Ot(S(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Nt(e){return Pt(e)?Nt(e.__v_raw):!!(e&&e.__v_isReactive)}function Pt(e){return!!(e&&e.__v_isReadonly)}function Ft(e){return!!(e&&e.__v_isShallow)}function It(e){return e?!!e.__v_raw:!1}function N(e){let t=e&&e.__v_raw;return t?N(t):e}function Lt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&O(e,`__v_skip`,!0),e}var Rt=e=>v(e)?kt(e):e,zt=e=>v(e)?jt(e):e;function P(e){return e?e.__v_isRef===!0:!1}function Bt(e){return Ht(e,!1)}function Vt(e){return Ht(e,!0)}function Ht(e,t){return P(e)?e:new Ut(e,t)}var Ut=class{constructor(e,t){this.dep=new Ue,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:N(e),this._value=t?e:Rt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Ft(e)||Pt(e);e=n?e:N(e),D(e,t)&&(this._rawValue=e,this._value=n?e:Rt(e),this.dep.trigger())}};function Wt(e){return P(e)?e.value:e}var Gt={get:(e,t,n)=>t===`__v_raw`?e:Wt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return P(i)&&!P(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Kt(e){return Nt(e)?e:new Proxy(e,Gt)}var qt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ue(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ve-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&j!==this)return De(this,!0),!0}get value(){let e=this.dep.track();return Ne(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Jt(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new qt(r,i,n)}var Yt={},Xt=new WeakMap,Zt=void 0;function Qt(e,t=!1,n=Zt){if(n){let t=Xt.get(n);t||Xt.set(n,t=[]),t.push(e)}}function $t(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:Ft(e)||o===!1||o===0?en(e,1):en(e),m,g,_,v,y=!1,b=!1;if(P(e)?(g=()=>e.value,y=Ft(e)):Nt(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>Nt(e)||Ft(e)),g=()=>e.map(e=>{if(P(e))return e.value;if(Nt(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){Re();try{_()}finally{ze()}}let t=Zt;Zt=m;try{return f?f(e,3,[v]):e(v)}finally{Zt=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>en(e(),t)}let x=xe(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{let n=e(...t);return S(),n}}let C=b?Array(e.length).fill(Yt):Yt,w=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(n){let t=m.run();if(e||o||y||(b?t.some((e,t)=>D(e,C[t])):D(t,C))){_&&_();let e=Zt;Zt=m;try{let e=[t,C===Yt?void 0:b&&C[0]===Yt?[]:C,v];C=t,f?f(n,3,e):n(...e)}finally{Zt=e}}}else m.run()};return u&&u(w),m=new Ce(g),m.scheduler=l?()=>l(w,!1):w,v=e=>Qt(e,!1,m),_=m.onStop=()=>{let e=Xt.get(m);if(e){if(f)f(e,4);else for(let t of e)t();Xt.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function en(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,P(e))en(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)en(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{en(e,t,n)});else if(C(e)){for(let r in e)en(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&en(e[r],t,n)}return e}function tn(e,t,n,r){try{return r?e(...r):e()}catch(e){rn(e,t,n)}}function nn(e,t,n,r){if(h(e)){let i=tn(e,t,n,r);return i&&y(i)&&i.catch(e=>{rn(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(nn(e[a],t,n,r));return i}}function rn(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Re(),tn(o,null,10,[e,i,a]),ze();return}}an(e,r,a,i,s)}function an(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var F=[],on=-1,sn=[],cn=null,ln=0,un=Promise.resolve(),dn=null;function fn(e){let t=dn||un;return e?t.then(this?e.bind(this):e):t}function pn(e){let t=on+1,n=F.length;for(;t<n;){let r=t+n>>>1,i=F[r],a=yn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function mn(e){if(!(e.flags&1)){let t=yn(e),n=F[F.length-1];!n||!(e.flags&2)&&t>=yn(n)?F.push(e):F.splice(pn(t),0,e),e.flags|=1,hn()}}function hn(){dn||=un.then(bn)}function gn(e){d(e)?sn.push(...e):cn&&e.id===-1?cn.splice(ln+1,0,e):e.flags&1||(sn.push(e),e.flags|=1),hn()}function _n(e,t,n=on+1){for(;n<F.length;n++){let t=F[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;F.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function vn(e){if(sn.length){let e=[...new Set(sn)].sort((e,t)=>yn(e)-yn(t));if(sn.length=0,cn){cn.push(...e);return}for(cn=e,ln=0;ln<cn.length;ln++){let e=cn[ln];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}cn=null,ln=0}}var yn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function bn(e){try{for(on=0;on<F.length;on++){let e=F[on];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),tn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;on<F.length;on++){let e=F[on];e&&(e.flags&=-2)}on=-1,F.length=0,vn(e),dn=null,(F.length||sn.length)&&bn(e)}}var xn=null,Sn=null;function Cn(e){let t=xn;return xn=e,Sn=e&&e.type.__scopeId||null,t}function wn(e,t=xn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Ni(-1);let i=Cn(t),a;try{a=e(...n)}finally{Cn(i),r._d&&Ni(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Tn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Re(),nn(c,n,8,[e.el,s,e,t]),ze())}}function En(e,t){if(V){let n=V.provides,r=V.parent&&V.parent.provides;r===n&&(n=V.provides=Object.create(r)),n[e]=t}}function Dn(e,t,n=!1){let r=$i();if(r||Ir){let i=Ir?Ir._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var On=Symbol.for(`v-scx`),kn=()=>Dn(On);function An(e,t,n){return jn(e,t,n)}function jn(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(aa){if(c===`sync`){let e=kn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=V;u.call=(e,t,n)=>nn(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{L(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():mn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=$t(e,n,u);return aa&&(f?f.push(h):d&&h()),h}function Mn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?Nn(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=na(this),s=jn(i,a.bind(r),n);return o(),s}function Nn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Pn=Symbol(`_vte`),Fn=e=>e.__isTeleport,In=Symbol(`_leaveCb`);function Ln(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ln(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Rn(e,t){return h(e)?s({name:e.name},t,{setup:e}):e}function zn(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}function Bn(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Vn=new WeakMap;function Hn(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>Hn(e,n&&(d(n)?n[t]:n),r,a,o));return}if(Wn(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Hn(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?ma(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=N(v),b=v===t?i:e=>Bn(_,e)?!1:u(y,e),x=(e,t)=>!(t&&Bn(_,t));if(m!=null&&m!==p){if(Un(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(P(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))tn(p,f,12,[l,_]);else{let t=g(p),n=P(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),Vn.delete(e)};t.id=-1,Vn.set(e,t),L(t,r)}else Un(e),i()}}}function Un(e){let t=Vn.get(e);t&&(t.flags|=8,Vn.delete(e))}le().requestIdleCallback,le().cancelIdleCallback;var Wn=e=>!!e.type.__asyncLoader,Gn=e=>e.type.__isKeepAlive;function Kn(e,t){Jn(e,`a`,t)}function qn(e,t){Jn(e,`da`,t)}function Jn(e,t,n=V){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(Xn(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Gn(e.parent.vnode)&&Yn(r,t,n,e),e=e.parent}}function Yn(e,t,n,r){let i=Xn(t,e,r,!0);rr(()=>{c(r[t],i)},n)}function Xn(e,t,n=V,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Re();let i=na(n),a=nn(t,n,e,r);return i(),ze(),a};return r?i.unshift(a):i.push(a),a}}var Zn=e=>(t,n=V)=>{(!aa||e===`sp`)&&Xn(e,(...e)=>t(...e),n)},Qn=Zn(`bm`),$n=Zn(`m`),er=Zn(`bu`),tr=Zn(`u`),nr=Zn(`bum`),rr=Zn(`um`),ir=Zn(`sp`),ar=Zn(`rtg`),or=Zn(`rtc`);function sr(e,t=V){Xn(`ec`,e,t)}var cr=`components`;function lr(e,t){return dr(cr,e,!0,t)||e}var ur=Symbol.for(`v-ndc`);function dr(e,t,n=!0,r=!1){let i=xn||V;if(i){let n=i.type;if(e===cr){let e=ha(n,!1);if(e&&(e===t||e===T(t)||e===ie(T(t))))return n}let a=fr(i[e]||n[e],t)||fr(i.appContext[e],t);return!a&&r?n:a}}function fr(e,t){return e&&(e[t]||e[T(t)]||e[ie(T(t))])}function pr(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&Nt(e),r=!1,s=!1;n&&(r=!Ft(e),s=Pt(e),e=Ze(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?zt(Rt(e[n])):Rt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(v(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}var mr=e=>e?ia(e)?ma(e):mr(e.parent):null,hr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>mr(e.parent),$root:e=>mr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>wr(e),$forceUpdate:e=>e.f||=()=>{mn(e.update)},$nextTick:e=>e.n||=fn.bind(e.proxy),$watch:e=>Mn.bind(e)}),gr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),_r={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(gr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else yr&&(s[n]=0)}let d=hr[n],f,p;if(d)return n===`$attrs`&&M(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return gr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||gr(n,c)||u(o,c)||u(i,c)||u(hr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function vr(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var yr=!0;function br(e){let t=wr(e),n=e.proxy,i=e.ctx;yr=!1,t.beforeCreate&&Sr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:ee,renderTracked:te,renderTriggered:ne,errorCaptured:T,serverPrefetch:re,expose:E,inheritAttrs:ie,components:ae,directives:D,filters:oe}=t;if(u&&xr(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=kt(t))}if(yr=!0,o)for(let e in o){let t=o[e],a=H({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)Cr(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{En(t,e[t])})}f&&Sr(f,e,`c`);function O(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(O(Qn,p),O($n,m),O(er,g),O(tr,_),O(Kn,y),O(qn,b),O(sr,T),O(or,te),O(ar,ne),O(nr,S),O(rr,w),O(ir,re),d(E))if(E.length){let t=e.exposed||={};E.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};ee&&e.render===r&&(e.render=ee),ie!=null&&(e.inheritAttrs=ie),ae&&(e.components=ae),D&&(e.directives=D),re&&zn(e)}function xr(e,t,n=r){d(e)&&(e=kr(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?Dn(r.from||n,r.default,!0):Dn(r.from||n):Dn(r),P(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Sr(e,t,n){nn(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Cr(e,t,n,r){let i=r.includes(`.`)?Nn(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&An(i,n)}else if(h(e))An(i,e.bind(n));else if(v(e))if(d(e))e.forEach(e=>Cr(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&An(i,r,e)}}function wr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Tr(c,e,o,!0)),Tr(c,t,o)),v(t)&&a.set(t,c),c}function Tr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Tr(e,a,n,!0),i&&i.forEach(t=>Tr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Er[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Er={data:Dr,props:jr,emits:jr,methods:Ar,computed:Ar,beforeCreate:I,created:I,beforeMount:I,mounted:I,beforeUpdate:I,updated:I,beforeDestroy:I,beforeUnmount:I,destroyed:I,unmounted:I,activated:I,deactivated:I,errorCaptured:I,serverPrefetch:I,components:Ar,directives:Ar,watch:Mr,provide:Dr,inject:Or};function Dr(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function Or(e,t){return Ar(kr(e),kr(t))}function kr(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function I(e,t){return e?[...new Set([].concat(e,t))]:t}function Ar(e,t){return e?s(Object.create(null),e,t):t}function jr(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),vr(e),vr(t??{})):t}function Mr(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=I(e[r],t[r]);return n}function Nr(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Pr=0;function Fr(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=Nr(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:Pr++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:va,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||B(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,ma(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(nn(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=Ir;Ir=l;try{return e()}finally{Ir=t}}};return l}}var Ir=null,Lr=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${T(t)}Modifiers`]||e[`${E(t)}Modifiers`];function Rr(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&Lr(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=r.map(se)));let c,l=i[c=ae(n)]||i[c=ae(T(n))];!l&&o&&(l=i[c=ae(E(n))]),l&&nn(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,nn(u,e,6,a)}}var zr=new WeakMap;function Br(e,t,n=!1){let r=n?zr:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=Br(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function Vr(e,t){return!e||!a(t)?!1:(t=t.slice(2).replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,E(t))||u(e,t))}function Hr(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=Cn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Gi(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=Gi(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:Ur(c)}}catch(t){ki.length=0,rn(t,e,1),v=B(Di)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=Wr(y,a)),b=Hi(b,y,!1,!0))}return n.dirs&&(b=Hi(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Ln(b,n.transition),v=b,Cn(_),v}var Ur=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},Wr=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Gr(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Kr(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(qr(o,r,n)&&!Vr(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Kr(r,o,l):!0:!!o;return!1}function Kr(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(qr(t,e,a)&&!Vr(n,a))return!0}return!1}function qr(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!ye(r,i):r!==i}function Jr({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Yr={},Xr=()=>Object.create(Yr),Zr=e=>Object.getPrototypeOf(e)===Yr;function Qr(e,t,n,r=!1){let i={},a=Xr();e.propsDefaults=Object.create(null),ei(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:At(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function $r(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=N(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Vr(e.emitsOptions,o))continue;let d=t[o];if(c)if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=T(o);i[t]=ti(c,s,t,d,e,!1)}else d!==a[o]&&(a[o]=d,l=!0)}}}else{ei(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=E(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=ti(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&Ye(e.attrs,`set`,``)}function ei(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(ee(t))continue;let l=n[t],d;a&&u(a,d=T(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:Vr(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=N(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=ti(a,n,s,i[s],e,!u(i,s))}}return s}function ti(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=na(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===E(n))&&(r=!0))}return r}var ni=new WeakMap;function ri(e,r,i=!1){let a=i?ni:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=ri(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=T(c[e]);ii(n)&&(l[n]=t)}else if(c)for(let e in c){let t=T(e);if(ii(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function ii(e){return e[0]!==`$`&&!ee(e)}var ai=e=>e===`_`||e===`_ctx`||e===`$stable`,oi=e=>d(e)?e.map(Gi):[Gi(e)],si=(e,t,n)=>{if(t._n)return t;let r=wn((...e)=>oi(t(...e)),n);return r._c=!1,r},ci=(e,t,n)=>{let r=e._ctx;for(let n in e){if(ai(n))continue;let i=e[n];if(h(i))t[n]=si(n,i,r);else if(i!=null){let e=oi(i);t[n]=()=>e}}},li=(e,t)=>{let n=oi(t);e.slots.default=()=>n},ui=(e,t,n)=>{for(let r in t)(n||!ai(r))&&(e[r]=t[r])},di=(e,t,n)=>{let r=e.slots=Xr();if(e.vnode.shapeFlag&32){let e=t._;e?(ui(r,t,n),n&&O(r,`_`,e,!0)):ci(t,r)}else t&&li(e,t)},fi=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:ui(a,n,r):(o=!n.$stable,ci(n,a)),s=n}else n&&(li(e,n),s={default:1});if(o)for(let e in a)!ai(e)&&s[e]==null&&delete a[e]},L=wi;function pi(e){return mi(e)}function mi(e,i){let a=le();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Li(e,t)&&(r=ye(e),k(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Ei:y(e,t,n,r);break;case Di:b(e,t,n,r);break;case Oi:e??x(t,n,r,o);break;case Ti:ae(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?D(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,xe)}u!=null&&i?Hn(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Hn(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)te(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),re(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},te=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&T(e.children,d,null,r,i,hi(e,a),s,u),_&&Tn(e,null,r,`created`),ne(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!ee(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&Yi(f,r,e)}_&&Tn(e,null,r,`beforeMount`);let v=_i(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&L(()=>{try{f&&Yi(f,r,e),v&&g.enter(d),_&&Tn(e,null,r,`mounted`)}finally{}},i)},ne=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Ci(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;ne(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},T=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?Ki(e[l]):Gi(e[l]),t,n,r,i,a,o,s)},re=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&gi(r,!1),(g=h.onVnodeBeforeUpdate)&&Yi(g,r,n,e),f&&Tn(n,e,r,`beforeUpdate`),r&&gi(r,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?E(e.dynamicChildren,d,l,r,i,hi(n,a),o):s||de(e,n,l,null,r,i,hi(n,a),o,!1),u>0){if(u&16)ie(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else !s&&d==null&&ie(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&L(()=>{g&&Yi(g,r,n,e),f&&Tn(n,e,r,`updated`)},i)},E=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===Ti||!Li(c,l)||c.shapeFlag&198)?m(c.el):n,null,r,i,a,o,!0)}},ie=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!ee(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(ee(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},ae=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),T(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(E(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&vi(e,t,!0)):de(e,t,n,f,i,a,s,c,l)},D=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):O(t,n,r,i,a,o,c):se(e,t,c)},O=(e,t,n,r,i,a,o)=>{let s=e.component=Qi(e,r,i);if(Gn(e)&&(s.ctx.renderer=xe),oa(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,ce,o),!e.el){let r=s.subTree=B(Di);b(null,r,t,n),e.placeholder=r.el}}else ce(s,e,t,n,i,a,o)},se=(e,t,n)=>{let r=t.component=e.component;if(Gr(e,t,n))if(r.asyncDep&&!r.asyncResolved){ue(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},ce=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=bi(e);if(n){t&&(t.el=c.el,ue(e,t,o)),n.asyncDep.then(()=>{L(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;gi(e,!1),t?(t.el=c.el,ue(e,t,o)):t=c,n&&oe(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Yi(d,s,t,c),gi(e,!0);let f=Hr(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),ye(p),e,i,a),t.el=f.el,u===null&&Jr(e,f.el),r&&L(r,i),(d=t.props&&t.props.onVnodeUpdated)&&L(()=>Yi(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Wn(t);if(gi(e,!1),l&&oe(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Yi(o,d,t),gi(e,!0),s&&Se){let t=()=>{e.subTree=Hr(e),Se(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Hr(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&L(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;L(()=>Yi(o,d,e),i)}(t.shapeFlag&256||d&&Wn(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&L(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Ce(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>mn(u),gi(e,!0),l()},ue=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,$r(e,t.props,r,n),fi(e,t.children,n),Re(),_n(e),ze()},de=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){pe(l,d,n,r,i,a,o,s,c);return}else if(f&256){fe(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&ve(l,i,a),d!==l&&p(n,d)):u&16?m&16?pe(l,d,n,r,i,a,o,s,c):ve(l,i,a,!0):(u&8&&p(n,``),m&16&&T(d,n,r,i,a,o,s,c))},fe=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let n=t[p]=l?Ki(t[p]):Gi(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?ve(e,a,o,!0,!1,f):T(t,r,i,a,o,s,c,l,f)},pe=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?Ki(t[u]):Gi(t[u]);if(Li(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?Ki(t[p]):Gi(t[p]);if(Li(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?Ki(t[u]):Gi(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)k(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?Ki(t[u]):Gi(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){k(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Li(n,t[_])){i=_;break}i===void 0?k(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?yi(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||Si(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?me(n,r,p,2):_--)}}},me=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){me(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,xe);return}if(c===Ti){o(a,t,n);for(let e=0;e<u.length;e++)me(u[e],t,n,r);o(e.anchor,t,n);return}if(c===Oi){S(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.persisted&&!a[In]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),L(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[In];a._isLeaving&&a[In](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},k=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Re(),Hn(s,null,n,e,!0),ze()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!Wn(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Yi(_,t,e),u&6)_e(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Tn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,xe,r):l&&!l.hasOnce&&(a!==Ti||d>0&&d&64)?ve(l,t,n,!1,!0):(a===Ti&&d&384||!i&&u&16)&&ve(c,t,n),r&&he(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&L(()=>{_&&Yi(_,t,e),h&&Tn(e,null,t,`unmounted`),v&&(e.el=null)},n)},he=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===Ti){ge(n,r);return}if(t===Oi){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},ge=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},_e=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;xi(c),xi(l),r&&oe(r),i.stop(),a&&(a.flags|=8,k(o,e,t,n)),s&&L(s,t),L(()=>{e.isUnmounted=!0},t)},ve=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)k(e[o],t,n,r,i)},ye=e=>{if(e.shapeFlag&6)return ye(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Pn];return n?h(n):t},A=!1,be=(e,t,n)=>{let r;e==null?t._vnode&&(k(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,A||=(A=!0,_n(r),vn(),!1)},xe={p:v,um:k,m:me,r:he,mt:O,mc:T,pc:de,pbc:E,n:ye,o:e},j,Se;return i&&([j,Se]=i(xe)),{render:be,hydrate:j,createApp:Fr(be,j)}}function hi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function gi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function _i(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function vi(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Ki(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&vi(t,a)),a.type===Ei&&(a.patchFlag===-1&&(a=i[e]=Ki(a)),a.el=t.el),a.type===Di&&!a.el&&(a.el=t.el)}}function yi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function bi(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:bi(t)}function xi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Si(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Si(t.subTree):null}var Ci=e=>e.__isSuspense;function wi(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):gn(e)}var Ti=Symbol.for(`v-fgt`),Ei=Symbol.for(`v-txt`),Di=Symbol.for(`v-cmt`),Oi=Symbol.for(`v-stc`),ki=[],R=null;function Ai(e=!1){ki.push(R=e?null:[])}function ji(){ki.pop(),R=ki[ki.length-1]||null}var Mi=1;function Ni(e,t=!1){Mi+=e,e<0&&R&&t&&(R.hasOnce=!0)}function Pi(e){return e.dynamicChildren=Mi>0?R||n:null,ji(),Mi>0&&R&&R.push(e),e}function Fi(e,t,n,r,i,a){return Pi(z(e,t,n,r,i,a,!0))}function Ii(e){return e?e.__v_isVNode===!0:!1}function Li(e,t){return e.type===t.type&&e.key===t.key}var Ri=({key:e})=>e??null,zi=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||P(e)||h(e)?{i:xn,r:e,k:t,f:!!n}:e);function z(e,t=null,n=null,r=0,i=null,a=e===Ti?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ri(t),ref:t&&zi(t),scopeId:Sn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:xn};return s?(qi(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),Mi>0&&!o&&R&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&R.push(c),c}var B=Bi;function Bi(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===ur)&&(e=Di),Ii(e)){let r=Hi(e,t,!0);return n&&qi(r,n),Mi>0&&!a&&R&&(r.shapeFlag&6?R[R.indexOf(e)]=r:R.push(r)),r.patchFlag=-2,r}if(ga(e)&&(e=e.__vccOpts),t){t=Vi(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=k(e)),v(n)&&(It(n)&&!d(n)&&(n=s({},n)),t.style=ue(n))}let o=g(e)?1:Ci(e)?128:Fn(e)?64:v(e)?4:h(e)?2:0;return z(e,t,n,r,i,o,a,!0)}function Vi(e){return e?It(e)||Zr(e)?s({},e):e:null}function Hi(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?Ji(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ri(l),ref:t&&t.ref?n&&a?d(a)?a.concat(zi(t)):[a,zi(t)]:zi(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ti?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Hi(e.ssContent),ssFallback:e.ssFallback&&Hi(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Ln(u,c.clone(u)),u}function Ui(e=` `,t=0){return B(Ei,null,e,t)}function Wi(e,t){let n=B(Oi,null,e);return n.staticCount=t,n}function Gi(e){return e==null||typeof e==`boolean`?B(Di):d(e)?B(Ti,null,e.slice()):Ii(e)?Ki(e):B(Ei,null,String(e))}function Ki(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Hi(e)}function qi(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),qi(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!Zr(t)?t._ctx=xn:r===3&&xn&&(xn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else h(t)?(t={default:t,_ctx:xn},n=32):(t=String(t),r&64?(n=16,t=[Ui(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ji(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=k([t.class,r.class]));else if(e===`style`)t.style=ue([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Yi(e,t,n,r=null){nn(e,t,7,[n,r])}var Xi=Nr(),Zi=0;function Qi(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||Xi,o={uid:Zi++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new be(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ri(i,a),emitsOptions:Br(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=Rr.bind(null,o),e.ce&&e.ce(o),o}var V=null,$i=()=>V||xn,ea,ta;{let e=le(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};ea=t(`__VUE_INSTANCE_SETTERS__`,e=>V=e),ta=t(`__VUE_SSR_SETTERS__`,e=>aa=e)}var na=e=>{let t=V;return ea(e),e.scope.on(),()=>{e.scope.off(),ea(t)}},ra=()=>{V&&V.scope.off(),ea(null)};function ia(e){return e.vnode.shapeFlag&4}var aa=!1;function oa(e,t=!1,n=!1){t&&ta(t);let{props:r,children:i}=e.vnode,a=ia(e);Qr(e,r,a,t),di(e,i,n||t);let o=a?sa(e,t):void 0;return t&&ta(!1),o}function sa(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,_r);let{setup:r}=n;if(r){Re();let n=e.setupContext=r.length>1?pa(e):null,i=na(e),a=tn(r,e,0,[e.props,n]),o=y(a);if(ze(),i(),(o||e.sp)&&!Wn(e)&&zn(e),o){if(a.then(ra,ra),t)return a.then(n=>{ca(e,n,t)}).catch(t=>{rn(t,e,0)});e.asyncDep=a}else ca(e,a,t)}else da(e,t)}function ca(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=Kt(t)),da(e,n)}var la,ua;function da(e,t,n){let i=e.type;if(!e.render){if(!t&&la&&!i.render){let t=i.template||wr(e).template;if(t){let{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:o}=i;i.render=la(t,s(s({isCustomElement:n,delimiters:a},r),o))}}e.render=i.render||r,ua&&ua(e)}{let t=na(e);Re();try{br(e)}finally{ze(),t()}}}var fa={get(e,t){return M(e,`get`,``),e[t]}};function pa(e){return{attrs:new Proxy(e.attrs,fa),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function ma(e){return e.exposed?e.exposeProxy||=new Proxy(Kt(Lt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in hr)return hr[n](e)},has(e,t){return t in e||t in hr}}):e.proxy}function ha(e,t=!0){return h(e)?e.displayName||e.name:e.name||t&&e.__name}function ga(e){return h(e)&&`__vccOpts`in e}var H=(e,t)=>Jt(e,t,aa);function _a(e,t,n){try{Ni(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?Ii(t)?B(e,null,[t]):B(e,t):B(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ii(n)&&(n=[n]),B(e,t,n))}finally{Ni(1)}}var va=`3.5.38`,ya=void 0,ba=typeof window<`u`&&window.trustedTypes;if(ba)try{ya=ba.createPolicy(`vue`,{createHTML:e=>e})}catch{}var xa=ya?e=>ya.createHTML(e):e=>e,Sa=`http://www.w3.org/2000/svg`,Ca=`http://www.w3.org/1998/Math/MathML`,wa=typeof document<`u`?document:null,Ta=wa&&wa.createElement(`template`),Ea={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?wa.createElementNS(Sa,e):t===`mathml`?wa.createElementNS(Ca,e):n?wa.createElement(e,{is:n}):wa.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>wa.createTextNode(e),createComment:e=>wa.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>wa.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ta.innerHTML=xa(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Ta.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Da=Symbol(`_vtc`);function Oa(e,t,n){let r=e[Da];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var ka=Symbol(`_vod`),Aa=Symbol(`_vsh`),ja=Symbol(``),Ma=/(?:^|;)\s*display\s*:/;function Na(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t)if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Fa(r,t,``)}else for(let e in t)n[e]??Fa(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?Fa(r,i,``):za(e,i,!g(t)&&t?t[i]:void 0,o)||Fa(r,i,o)}}else if(i){if(t!==n){let e=r[ja];e&&(n+=`;`+e),r.cssText=n,a=Ma.test(n)}}else t&&e.removeAttribute(`style`);ka in e&&(e[ka]=a?r.display:``,e[Aa]&&(r.display=`none`))}var Pa=/\s*!important$/;function Fa(e,t,n){if(d(n))n.forEach(n=>Fa(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=Ra(e,t);Pa.test(n)?e.setProperty(E(r),n.replace(Pa,``),`important`):e[r]=n}}var Ia=[`Webkit`,`Moz`,`ms`],La={};function Ra(e,t){let n=La[t];if(n)return n;let r=T(t);if(r!==`filter`&&r in e)return La[t]=r;r=ie(r);for(let n=0;n<Ia.length;n++){let i=Ia[n]+r;if(i in e)return La[t]=i}return t}function za(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&g(r)&&n===r}var Ba=`http://www.w3.org/1999/xlink`;function Va(e,t,n,r,i,a=ge(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Ba,t.slice(6,t.length)):e.setAttributeNS(Ba,t,n):n==null||a&&!_e(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function Ha(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?xa(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=_e(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Ua(e,t,n,r){e.addEventListener(t,n,r)}function Wa(e,t,n,r){e.removeEventListener(t,n,r)}var Ga=Symbol(`_vei`);function Ka(e,t,n,r,i=null){let a=e[Ga]||(e[Ga]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Ja(t);r?Ua(e,n,a[t]=Qa(r,i),s):o&&(Wa(e,n,o,s),a[t]=void 0)}}var qa=/(?:Once|Passive|Capture)$/;function Ja(e){let t;if(qa.test(e)){t={};let n;for(;n=e.match(qa);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):E(e.slice(2)),t]}var Ya=0,Xa=Promise.resolve(),Za=()=>Ya||=(Xa.then(()=>Ya=0),Date.now());function Qa(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(d(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&nn(e,t,5,a)}}else nn(r,t,5,[e])};return n.value=e,n.attached=Za(),n}var $a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,eo=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?Oa(e,r,c):t===`style`?Na(e,n,r):a(t)?o(t)||Ka(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):to(e,t,r,c))?(Ha(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Va(e,t,r,c,s,t!==`value`)):e._isVueCE&&(no(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?Ha(e,T(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Va(e,t,r,c))};function to(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&$a(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return $a(t)&&g(n)?!1:t in e}function no(e,t){let n=e._def.props;if(!n)return!1;let r=T(t);return Array.isArray(n)?n.some(e=>T(e)===r):Object.keys(n).some(e=>T(e)===r)}var ro=s({patchProp:eo},Ea),io;function ao(){return io||=pi(ro)}var oo=((...e)=>{let t=ao().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=co(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,so(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function so(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function co(e){return g(e)?document.querySelector(e):e}var lo=()=>{let e=Bt(window.innerWidth),t=Bt(window.innerHeight),n=()=>{e.value=window.innerWidth,t.value=window.innerHeight};return window.addEventListener(`resize`,n),rr(()=>{window.removeEventListener(`resize`,n)}),{width:e,height:t}},uo=`/yourbodyandmind/assets/logoflowerblack-BMWlCwK3.png`,fo=`/yourbodyandmind/assets/logoflower-Bwv6azTc.png`,po={class:`logo`},mo={key:0,src:uo,alt:`Logo`},ho={key:1,src:fo,alt:`Logo`},go=Rn({__name:`NavbarMobile`,setup(e){let t=Bt(!1),n=Bt(!1),r=()=>{t.value=window.scrollY>10},i=()=>{n.value=!n.value,n.value?document.body.style.overflow=`hidden`:document.body.style.overflow=``},a=()=>{n.value=!1,document.body.style.overflow=``};return $n(()=>{window.addEventListener(`scroll`,r)}),rr(()=>{window.removeEventListener(`scroll`,r),document.body.style.overflow=``}),(e,r)=>(Ai(),Fi(Ti,null,[z(`div`,{class:k([`navbar-mobile`,{scrolled:t.value}])},[z(`div`,po,[t.value?(Ai(),Fi(`img`,mo)):(Ai(),Fi(`img`,ho))]),z(`div`,{class:k([`hamburger-menu`,{open:n.value}]),onClick:i},[...r[0]||=[z(`span`,null,null,-1),z(`span`,null,null,-1),z(`span`,null,null,-1)]],2)],2),z(`div`,{class:k([`menu-overlay`,{active:n.value}]),onClick:a},null,2),z(`div`,{class:k([`side-menu`,{open:n.value}])},[z(`button`,{class:`close-btn`,onClick:a,"aria-label":`Close menu`},[...r[1]||=[z(`span`,null,`×`,-1)]]),z(`nav`,{class:`menu-content`},[z(`ul`,null,[z(`li`,null,[z(`a`,{href:`#home`,onClick:a},`Behandlingar`)]),z(`li`,null,[z(`a`,{href:`#about`,onClick:a},`Samtal`)]),z(`li`,null,[z(`a`,{href:`https://www.bokadirekt.se/places/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195`,target:`_blank`,onClick:a},`Boka`)])])])],2)],64))}}),_o=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},vo=_o(go,[[`__scopeId`,`data-v-c720d26c`]]);function yo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function bo(e){if(Array.isArray(e))return e}function xo(e){if(Array.isArray(e))return yo(e)}function So(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Co(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,Po(r.key),r)}}function wo(e,t,n){return t&&Co(e.prototype,t),n&&Co(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function To(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=Io(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function U(e,t,n){return(t=Po(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Eo(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Do(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Oo(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ko(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ao(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Ao(Object(n),!0).forEach(function(t){U(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ao(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function jo(e,t){return bo(e)||Do(e,t)||Io(e,t)||Oo()}function Mo(e){return xo(e)||Eo(e)||Io(e)||ko()}function No(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Po(e){var t=No(e,`string`);return typeof t==`symbol`?t:t+``}function Fo(e){"@babel/helpers - typeof";return Fo=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Fo(e)}function Io(e,t){if(e){if(typeof e==`string`)return yo(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?yo(e,t):void 0}}var Lo=function(){},Ro={},zo={},Bo=null,Vo={mark:Lo,measure:Lo};try{typeof window<`u`&&(Ro=window),typeof document<`u`&&(zo=document),typeof MutationObserver<`u`&&(Bo=MutationObserver),typeof performance<`u`&&(Vo=performance)}catch{}var Ho=(Ro.navigator||{}).userAgent,Uo=Ho===void 0?``:Ho,Wo=Ro,G=zo,Go=Bo,Ko=Vo;Wo.document;var qo=!!G.documentElement&&!!G.head&&typeof G.addEventListener==`function`&&typeof G.createElement==`function`,Jo=~Uo.indexOf(`MSIE`)||~Uo.indexOf(`Trident/`),Yo,Xo=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Zo=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,Qo={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},$o={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},es=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],K=`classic`,ts=`duotone`,ns=`sharp`,rs=`sharp-duotone`,is=`chisel`,as=`etch`,os=`graphite`,ss=`jelly`,cs=`jelly-duo`,ls=`jelly-fill`,us=`mosaic`,ds=`notdog`,fs=`notdog-duo`,ps=`pixel`,ms=`slab`,hs=`slab-duo`,gs=`slab-press`,_s=`slab-press-duo`,vs=`thumbprint`,ys=`utility`,bs=`utility-duo`,xs=`utility-fill`,Ss=`vellum`,Cs=`whiteboard`,ws=`Classic`,Ts=`Duotone`,Es=`Sharp`,Ds=`Sharp Duotone`,Os=`Chisel`,ks=`Etch`,As=`Graphite`,js=`Jelly`,Ms=`Jelly Duo`,Ns=`Jelly Fill`,Ps=`Mosaic`,Fs=`Notdog`,Is=`Notdog Duo`,Ls=`Pixel`,Rs=`Slab`,zs=`Slab Duo`,Bs=`Slab Press`,Vs=`Slab Press Duo`,Hs=`Thumbprint`,Us=`Utility`,Ws=`Utility Duo`,Gs=`Utility Fill`,Ks=`Vellum`,qs=`Whiteboard`,Js=[K,ts,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs];Yo={},U(U(U(U(U(U(U(U(U(U(Yo,K,ws),ts,Ts),ns,Es),rs,Ds),is,Os),as,ks),os,As),ss,js),cs,Ms),ls,Ns),U(U(U(U(U(U(U(U(U(U(Yo,us,Ps),ds,Fs),fs,Is),ps,Ls),ms,Rs),hs,zs),gs,Bs),_s,Vs),vs,Hs),ys,Us),U(U(U(U(Yo,bs,Ws),xs,Gs),Ss,Ks),Cs,qs);var Ys={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},Xs={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},Zs=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),Qs={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},$s=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],ec={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},tc=[`kit`];U(U({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var nc={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},rc={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},ic={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},ac={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},oc,sc={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},cc=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];oc={},U(U(U(U(U(U(U(U(U(U(oc,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),U(U(U(U(U(U(U(U(U(U(oc,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),U(U(U(U(oc,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),U(U({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var lc={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},uc={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},dc={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},fc=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(cc,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),pc=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],mc=[1,2,3,4,5,6,7,8,9,10],hc=mc.concat([11,12,13,14,15,16,17,18,19,20]),gc=[].concat(Mo(Object.keys(uc)),pc,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,sc.GROUP,sc.SWAP_OPACITY,sc.PRIMARY,sc.SECONDARY],mc.map(function(e){return`${e}x`}),hc.map(function(e){return`w-${e}`})),_c={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},vc=`___FONT_AWESOME___`,yc=16,bc=`fa`,xc=`svg-inline--fa`,Sc=`data-fa-i2svg`,Cc=`data-fa-pseudo-element`,wc=`data-fa-pseudo-element-pending`,Tc=`data-prefix`,Ec=`data-icon`,Dc=`fontawesome-i2svg`,Oc=`async`,kc=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Ac=[`::before`,`::after`,`:before`,`:after`],jc=function(){try{return!0}catch{return!1}}();function Mc(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[K]}})}var Nc=W({},Qo);Nc[K]=W(W(W(W({},{"fa-duotone":`duotone`}),Qo[K]),ec.kit),ec[`kit-duotone`]);var Pc=Mc(Nc),Fc=W({},Qs);Fc[K]=W(W(W(W({},{duotone:`fad`}),Fc[K]),ac.kit),ac[`kit-duotone`]);var Ic=Mc(Fc),Lc=W({},dc);Lc[K]=W(W({},Lc[K]),ic.kit);var Rc=Mc(Lc),zc=W({},lc);zc[K]=W(W({},zc[K]),nc.kit),Mc(zc);var Bc=Xo,Vc=`fa-layers-text`,Hc=Zo;Mc(W({},Ys));var Uc=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Wc=$o,Gc=[].concat(Mo(tc),Mo(gc)),Kc=Wo.FontAwesomeConfig||{};function qc(e){var t=G.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Jc(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}G&&typeof G.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=jo(e,2),n=t[0],r=t[1],i=Jc(qc(n));i!=null&&(Kc[r]=i)});var Yc={styleDefault:`solid`,familyDefault:K,cssPrefix:bc,replacementClass:xc,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Kc.familyPrefix&&(Kc.cssPrefix=Kc.familyPrefix);var Xc=W(W({},Yc),Kc);Xc.autoReplaceSvg||(Xc.observeMutations=!1);var q={};Object.keys(Yc).forEach(function(e){Object.defineProperty(q,e,{enumerable:!0,set:function(t){Xc[e]=t,Zc.forEach(function(e){return e(q)})},get:function(){return Xc[e]}})}),Object.defineProperty(q,"familyPrefix",{enumerable:!0,set:function(e){Xc.cssPrefix=e,Zc.forEach(function(e){return e(q)})},get:function(){return Xc.cssPrefix}}),Wo.FontAwesomeConfig=q;var Zc=[];function Qc(e){return Zc.push(e),function(){Zc.splice(Zc.indexOf(e),1)}}var $c=yc,el={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function tl(e){if(!(!e||!qo)){var t=G.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=G.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return G.head.insertBefore(t,r),e}}var nl=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function rl(){for(var e=12,t=``;e-- >0;)t+=nl[Math.random()*62|0];return t}function il(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function al(e){return e.classList?il(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function ol(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function sl(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${ol(e[n])}" `},``).trim()}function cl(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function ll(e){return e.size!==el.size||e.x!==el.x||e.y!==el.y||e.rotate!==el.rotate||e.flipX||e.flipY}function ul(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function dl(e){var t=e.transform,n=e.width,r=n===void 0?yc:n,i=e.height,a=i===void 0?yc:i,o=e.startCentered,s=o===void 0?!1:o,c=``;return s&&Jo?c+=`translate(${t.x/$c-r/2}em, ${t.y/$c-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/$c}em), calc(-50% + ${t.y/$c}em)) `:c+=`translate(${t.x/$c}em, ${t.y/$c}em) `,c+=`scale(${t.size/$c*(t.flipX?-1:1)}, ${t.size/$c*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var fl=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function pl(){var e=bc,t=xc,n=q.cssPrefix,r=q.replacementClass,i=fl;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var ml=!1;function hl(){q.autoAddCss&&!ml&&(tl(pl()),ml=!0)}var gl={mixout:function(){return{dom:{css:pl,insertCss:hl}}},hooks:function(){return{beforeDOMElementCreation:function(){hl()},beforeI2svg:function(){hl()}}}},_l=Wo||{};_l[vc]||(_l[vc]={}),_l[vc].styles||(_l[vc].styles={}),_l[vc].hooks||(_l[vc].hooks={}),_l[vc].shims||(_l[vc].shims=[]);var vl=_l[vc],yl=[],bl=function(){G.removeEventListener(`DOMContentLoaded`,bl),xl=1,yl.map(function(e){return e()})},xl=!1;qo&&(xl=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),xl||G.addEventListener(`DOMContentLoaded`,bl));function Sl(e){qo&&(xl?setTimeout(e,0):yl.push(e))}function Cl(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?ol(e):`<${t} ${sl(r)}>${a.map(Cl).join(``)}</${t}>`}function wl(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Tl=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},El=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Tl(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Dl(e){return Mo(e).length===1?e.codePointAt(0).toString(16):null}function Ol(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function kl(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n===void 0?!1:n,i=Ol(t);typeof vl.hooks.addPack==`function`&&!r?vl.hooks.addPack(e,Ol(t)):vl.styles[e]=W(W({},vl.styles[e]||{}),i),e===`fas`&&kl(`fa`,t)}var Al=vl.styles,jl=vl.shims,Ml=Object.keys(Rc),Nl=Ml.reduce(function(e,t){return e[t]=Object.keys(Rc[t]),e},{}),Pl=null,Fl={},Il={},Ll={},Rl={},zl={};function Bl(e){return~Gc.indexOf(e)}function Vl(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Bl(i)?i:null}var Hl=function(){var e=function(e){return El(Al,function(t,n,r){return t[r]=El(n,e,{}),t},{})};Fl=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Il=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),zl=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in Al||q.autoFetchSvg,n=El(jl,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Ll=n.names,Rl=n.unicodes,Pl=Zl(q.styleDefault,{family:q.familyDefault})};Qc(function(e){Pl=Zl(e.styleDefault,{family:q.familyDefault})}),Hl();function Ul(e,t){return(Fl[e]||{})[t]}function Wl(e,t){return(Il[e]||{})[t]}function Gl(e,t){return(zl[e]||{})[t]}function Kl(e){return Ll[e]||{prefix:null,iconName:null}}function ql(e){var t=Rl[e],n=Ul(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function Jl(){return Pl}var Yl=function(){return{prefix:null,iconName:null,rest:[]}};function Xl(e){var t=K,n=Ml.reduce(function(e,t){return e[t]=`${q.cssPrefix}-${t}`,e},{});return Js.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Nl[r].includes(e)}))&&(t=r)}),t}function Zl(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?K:t,r=Pc[n][e];if(n===ts&&!e)return`fad`;var i=Ic[n][e]||Ic[n][r],a=e in vl.styles?e:null;return i||a||null}function Ql(e){var t=[],n=null;return e.forEach(function(e){var r=Vl(q.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function $l(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var eu=fc.concat($s);function tu(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t===void 0?!1:t,r=null,i=$l(e.filter(function(e){return eu.includes(e)})),a=$l(e.filter(function(e){return!eu.includes(e)})),o=jo(i.filter(function(e){return r=e,!es.includes(e)}),1)[0],s=o===void 0?null:o,c=Xl(i),l=W(W({},Ql(a)),{},{prefix:Zl(s,{family:c})});return W(W(W({},l),au({values:e,family:c,styles:Al,config:q,canonical:l,givenPrefix:r})),nu(n,r,l))}function nu(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Kl(i):{},o=Gl(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!Al.far&&Al.fas&&!q.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var ru=Js.filter(function(e){return e!==K||e!==ts}),iu=Object.keys(dc).filter(function(e){return e!==K}).map(function(e){return Object.keys(dc[e])}).flat();function au(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===ts,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&ru.includes(n)&&(Object.keys(s).find(function(e){return iu.includes(e)})||l.autoFetchSvg)&&(r.prefix=Zs.get(n).defaultShortPrefixId,r.iconName=Gl(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=Jl()||`fas`),r}var ou=function(){function e(){So(this,e),this.definitions={}}return wo(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=W(W({},e.definitions[n]||{}),t[n]),kl(n,t[n]);var r=Rc[K][n];r&&kl(r,t[n]),Hl()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),su=[],cu={},lu={},uu=Object.keys(lu);function du(e,t){var n=t.mixoutsTo;return su=e,cu={},Object.keys(lu).forEach(function(e){uu.indexOf(e)===-1&&delete lu[e]}),su.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),Fo(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){cu[e]||(cu[e]=[]),cu[e].push(r[e])})}e.provides&&e.provides(lu)}),n}function fu(e,t){var n=[...arguments].slice(2);return(cu[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function pu(e){var t=[...arguments].slice(1);(cu[e]||[]).forEach(function(e){e.apply(null,t)})}function mu(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return lu[e]?lu[e].apply(null,t):void 0}function hu(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||Jl();if(t)return t=Gl(n,t)||t,wl(gu.definitions,n,t)||wl(vl.styles,n,t)}var gu=new ou,_u={noAuto:function(){q.autoReplaceSvg=!1,q.observeMutations=!1,pu(`noAuto`)},config:q,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return qo?(pu(`beforeI2svg`,e),mu(`pseudoElements2svg`,e),mu(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;q.autoReplaceSvg===!1&&(q.autoReplaceSvg=!0),q.observeMutations=!0,Sl(function(){vu({autoReplaceSvgRoot:t}),pu(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(Fo(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Gl(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Zl(e[0]);return{prefix:n,iconName:Gl(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${q.cssPrefix}-`)>-1||e.match(Bc))){var r=tu(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||Jl(),iconName:Gl(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=Jl();return{prefix:i,iconName:Gl(i,e)||e}}}},library:gu,findIconDefinition:hu,toHtml:Cl},vu=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?G:e;(Object.keys(vl.styles).length>0||q.autoFetchSvg)&&qo&&q.autoReplaceSvg&&_u.dom.i2svg({node:t})};function yu(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Cl(e)})}}),Object.defineProperty(e,"node",{get:function(){if(qo){var t=G.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function bu(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(ll(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=cl(W(W({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function xu(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${q.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:W(W({},i),{},{id:o}),children:r}]}]}function Su(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function Cu(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,f=r.found?r:n,p=f.width,m=f.height,h=[q.replacementClass,a?`${q.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:W(W({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!Su(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[Sc]=``);var _=W(W({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:W({},l.styles)}),v=r.found&&n.found?mu(`generateAbstractMask`,_)||{children:[],attributes:{}}:mu(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?xu(_):bu(_)}function wu(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o===void 0?!1:o,c=W(W({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[Sc]=``);var l=W({},a.styles);ll(i)&&(l.transform=dl({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=cl(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Tu(e){var t=e.content,n=e.extra,r=W(W({},n.attributes),{},{class:n.classes.join(` `)}),i=cl(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var Eu=vl.styles;function Du(e){var t=e[0],n=e[1],r=jo(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${q.cssPrefix}-${Wc.GROUP}`},children:[{tag:`path`,attributes:{class:`${q.cssPrefix}-${Wc.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${q.cssPrefix}-${Wc.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var Ou={found:!1,width:512,height:512};function ku(e,t){!jc&&!q.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Au(e,t){var n=t;return t===`fa`&&q.styleDefault!==null&&(t=Jl()),new Promise(function(r,i){if(n===`fa`){var a=Kl(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Eu[t]&&Eu[t][e]){var o=Eu[t][e];return r(Du(o))}ku(e,t),r(W(W({},Ou),{},{icon:q.showMissingIcons&&e&&mu(`missingIconAbstract`)||{}}))})}var ju=function(){},Mu=q.measurePerformance&&Ko&&Ko.mark&&Ko.measure?Ko:{mark:ju,measure:ju},Nu=`FA "7.3.0"`,Pu=function(e){return Mu.mark(`${Nu} ${e} begins`),function(){return Fu(e)}},Fu=function(e){Mu.mark(`${Nu} ${e} ends`),Mu.measure(`${Nu} ${e}`,`${Nu} ${e} begins`,`${Nu} ${e} ends`)},Iu={begin:Pu,end:Fu},Lu=function(){};function Ru(e){return typeof(e.getAttribute?e.getAttribute(Sc):null)==`string`}function zu(e){var t=e.getAttribute?e.getAttribute(Tc):null,n=e.getAttribute?e.getAttribute(Ec):null;return t&&n}function Bu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(q.replacementClass)}function Vu(){return q.autoReplaceSvg===!0?Ku.replace:Ku[q.autoReplaceSvg]||Ku.replace}function Hu(e){return G.createElementNS(`http://www.w3.org/2000/svg`,e)}function Uu(e){return G.createElement(e)}function Wu(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Hu:Uu:t;if(typeof e==`string`)return G.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Wu(e,{ceFn:n}))}),r}function Gu(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Ku={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Wu(e),t)}),t.getAttribute(Sc)===null&&q.keepOriginalSource){var n=G.createComment(Gu(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~al(t).indexOf(q.replacementClass))return Ku.replace(e);var r=RegExp(`${q.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===q.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return Cl(e)}).join(`
`);t.setAttribute(Sc,``),t.innerHTML=a}};function qu(e){e()}function Ju(e,t){var n=typeof t==`function`?t:Lu;if(e.length===0)n();else{var r=qu;q.mutateApproach===Oc&&(r=Wo.requestAnimationFrame||qu),r(function(){var t=Vu(),r=Iu.begin(`mutate`);e.map(t),r(),n()})}}var Yu=!1;function Xu(){Yu=!0}function Zu(){Yu=!1}var Qu=null;function $u(e){if(Go&&q.observeMutations){var t=e.treeCallback,n=t===void 0?Lu:t,r=e.nodeCallback,i=r===void 0?Lu:r,a=e.pseudoElementsCallback,o=a===void 0?Lu:a,s=e.observeMutationsRoot,c=s===void 0?G:s;Qu=new Go(function(e){if(!Yu){var t=Jl();il(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Ru(e.addedNodes[0])&&(q.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&q.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Ru(e.target)&&~Uc.indexOf(e.attributeName))if(e.attributeName===`class`&&zu(e.target)){var r=tu(al(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Tc,a||t),s&&e.target.setAttribute(Ec,s)}else Bu(e.target)&&i(e.target)})}}),qo&&Qu.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ed(){Qu&&Qu.disconnect()}function td(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function nd(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=tu(al(e));return i.prefix||=Jl(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Wl(i.prefix,e.innerText)||Ul(i.prefix,Dl(e.innerText))),!i.iconName&&q.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function rd(e){return il(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function id(){return{iconName:null,prefix:null,transform:el,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ad(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=nd(e),r=n.iconName,i=n.prefix,a=n.rest,o=rd(e),s=fu(`parseNodeAttributes`,{},e);return W({iconName:r,prefix:i,transform:el,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?td(e):[],attributes:o}},s)}var od=vl.styles;function sd(e){var t=q.autoReplaceSvg===`nest`?ad(e,{styleParser:!1}):ad(e);return~t.extra.classes.indexOf(Vc)?mu(`generateLayersText`,e,t):mu(`generateSvgReplacementMutation`,e,t)}function cd(){return[].concat(Mo($s),Mo(fc))}function ld(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!qo)return Promise.resolve();var n=G.documentElement.classList,r=function(e){return n.add(`${Dc}-${e}`)},i=function(e){return n.remove(`${Dc}-${e}`)},a=q.autoFetchSvg?cd():es.concat(Object.keys(od));a.includes(`fa`)||a.push(`fa`);var o=[`.${Vc}:not([${Sc}])`].concat(a.map(function(e){return`.${e}:not([${Sc}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=il(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Iu.begin(`onTree`),l=s.reduce(function(e,t){try{var n=sd(t);n&&e.push(n)}catch(e){jc||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){Ju(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function ud(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;sd(e).then(function(e){e&&Ju([e],t)})}function dd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:hu(t||{}),i=n.mask;return i&&=(i||{}).icon?i:hu(i||{}),e(r,W(W({},n),{},{mask:i}))}}var fd=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?el:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return yu(W({type:`icon`},e),function(){return pu(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),Cu({icons:{main:Du(v),mask:s?Du(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:W(W({},el),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},pd={mixout:function(){return{icon:dd(fd)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=ld,e.nodeCallback=ud,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?G:t,r=e.callback;return ld(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Au(n,r),o.iconName?Au(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=jo(o,2),u=l[0],d=l[1];t([e,Cu({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=cl(a);o.length>0&&(n.style=o);var s;return ll(i)&&(s=mu(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},md={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return yu({type:`layer`},function(){pu(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${q.cssPrefix}-layers`].concat(Mo(r)).join(` `)},children:n}]})}}}},hd={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return yu({type:`counter`,content:e},function(){return pu(`beforeDOMElementCreation`,{content:e,params:t}),Tu({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${q.cssPrefix}-layers-counter`].concat(Mo(a))}})})}}}},gd={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?el:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return yu({type:`text`,content:e},function(){return pu(`beforeDOMElementCreation`,{content:e,params:t}),wu({content:e,transform:W(W({},el),r),extra:{attributes:s,styles:l,classes:[`${q.cssPrefix}-layers-text`].concat(Mo(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(Jo){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,wu({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},_d=RegExp(`"`,`ug`),vd=[1105920,1112319],yd=W(W(W(W({},{FontAwesome:{normal:`fas`,400:`fas`}}),Xs),_c),rc),bd=Object.keys(yd).reduce(function(e,t){return e[t.toLowerCase()]=yd[t],e},{}),xd=Object.keys(bd).reduce(function(e,t){var n=bd[t];return e[t]=n[900]||Mo(Object.entries(n))[0][1],e},{});function Sd(e){return Dl(Mo(e.replace(_d,``))[0]||``)}function Cd(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(_d,``),r=n.codePointAt(0),i=r>=vd[0]&&r<=vd[1],a=n.length===2?n[0]===n[1]:!1;return i||a||t}function wd(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(bd[n]||{})[i]||xd[n]}function Td(e,t){var n=`${wc}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=il(e.children).filter(function(e){return e.getAttribute(Cc)===t})[0],o=Wo.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Hc),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=wd(s,l),p=Sd(d),m=c[0].startsWith(`FontAwesome`),h=Cd(o),g=Ul(f,p),_=g;if(m){var v=ql(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Tc)!==f||a.getAttribute(Ec)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=id(),b=y.extra;b.attributes[Cc]=t,Au(g,f).then(function(i){var a=Cu(W(W({},y),{},{icons:{main:i,mask:Yl()},prefix:f,iconName:_,extra:b,watchable:!0})),o=G.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return Cl(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Ed(e){return Promise.all([Td(e,`::before`),Td(e,`::after`)])}function Dd(e){return e.parentNode!==document.head&&!~kc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Cc)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var Od=function(e){return!!e&&Ac.some(function(t){return e.includes(t)})},kd=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=To(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(Od(a)){var o=Ac.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function Ad(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(qo){var n;if(t)n=e;else if(q.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=To(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=To(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=To(kd(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){q.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=il(n).filter(Dd).map(Ed),i=Iu.begin(`searchPseudoElements`);Xu(),Promise.all(r).then(function(){i(),Zu(),e()}).catch(function(){i(),Zu(),t()})})}}var jd={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Ad,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?G:t;q.searchPseudoElements&&Ad(n)}}},Md=!1,Nd={mixout:function(){return{dom:{unwatch:function(){Xu(),Md=!0}}}},hooks:function(){return{bootstrap:function(){$u(fu(`mutationObserverCallbacks`,{}))},noAuto:function(){ed()},watch:function(e){var t=e.observeMutationsRoot;Md?Zu():$u(fu(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Pd=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Fd={mixout:function(){return{parse:{transform:function(e){return Pd(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Pd(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:W({},a.outer),children:[{tag:`g`,attributes:W({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:W(W({},t.icon.attributes),a.path)}]}]}}}},Id={x:0,y:0,width:`100%`,height:`100%`};function Ld(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Rd(e){return e.tag===`g`?e.children:[e]}du([gl,pd,md,hd,gd,jd,Nd,Fd,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?tu(n.split(` `).map(function(e){return e.trim()})):Yl();return r.prefix||=Jl(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=ul({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:W(W({},Id),{},{fill:`white`})},p=c.children?{children:c.children.map(Ld)}:{},m={tag:`g`,attributes:W({},d.inner),children:[Ld(W({tag:c.tag,attributes:W(W({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:W({},d.outer),children:[m]},g=`mask-${a||rl()}`,_=`clip-${a||rl()}`,v={tag:`mask`,attributes:W(W({},Id),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Rd(u)},v]};return t.push(y,{tag:`rect`,attributes:W({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Id)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;Wo.matchMedia&&(t=Wo.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:W(W({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=W(W({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:W(W({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:W(W({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:W(W({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:W(W({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:W(W({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:W(W({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:W(W({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:_u}),_u.noAuto,_u.config,_u.library,_u.dom;var zd=_u.parse;_u.findIconDefinition,_u.toHtml;var Bd=_u.icon;_u.layer,_u.text,_u.counter;function Vd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Hd(e){if(Array.isArray(e))return Vd(e)}function J(e,t,n){return(t=Xd(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ud(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Wd(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Gd(Object(n),!0).forEach(function(t){J(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gd(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Kd(e,t){if(e==null)return{};var n,r,i=qd(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function qd(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Jd(e){return Hd(e)||Ud(e)||Qd(e)||Wd()}function Yd(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Xd(e){var t=Yd(e,`string`);return typeof t==`symbol`?t:t+``}function Zd(e){"@babel/helpers - typeof";return Zd=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Zd(e)}function Qd(e,t){if(e){if(typeof e==`string`)return Vd(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Vd(e,t):void 0}}function $d(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?J({},e,t):{}}function ef(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip===`horizontal`||e.flip===`both`,"fa-flip-vertical":e.flip===`vertical`||e.flip===`both`},J(J(J(J(J(J(J(J(J(J(t,`fa-${e.size}`,e.size!==null),`fa-rotate-${e.rotation}`,e.rotation!==null),`fa-rotate-by`,e.rotateBy),`fa-pull-${e.pull}`,e.pull!==null),`fa-swap-opacity`,e.swapOpacity),`fa-bounce`,e.bounce),`fa-shake`,e.shake),`fa-beat`,e.beat),`fa-fade`,e.fade),`fa-beat-fade`,e.beatFade),J(J(J(J(J(J(J(J(J(J(t,`fa-flash`,e.flash),`fa-spin-pulse`,e.spinPulse),`fa-spin-reverse`,e.spinReverse),`fa-width-auto`,e.widthAuto),`fa-flip-360`,e.flip360),`fa-buzz`,e.buzz),`fa-float`,e.float),`fa-jello`,e.jello),`fa-spin-snap`,e.spinSnap),`fa-spin-snap-4`,e.spinSnap4),J(J(J(t,`fa-spin-snap-8`,e.spinSnap8),`fa-swing`,e.swing),`fa-wag`,e.wag));return Object.keys(n).map(function(e){return n[e]?e:null}).filter(function(e){return e})}var tf=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},nf={exports:{}};(function(e){(function(t){var n=function(e,t,r){if(!l(t)||d(t)||f(t)||p(t)||c(t))return t;var i,a=0,o=0;if(u(t))for(i=[],o=t.length;a<o;a++)i.push(n(e,t[a],r));else for(var s in i={},t)Object.prototype.hasOwnProperty.call(t,s)&&(i[e(s,r)]=n(e,t[s],r));return i},r=function(e,t){t||={};var n=t.separator||`_`,r=t.split||/(?=[A-Z])/;return e.split(r).join(n)},i=function(e){return m(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():``}),e.substr(0,1).toLowerCase()+e.substr(1))},a=function(e){var t=i(e);return t.substr(0,1).toUpperCase()+t.substr(1)},o=function(e,t){return r(e,t).toLowerCase()},s=Object.prototype.toString,c=function(e){return typeof e==`function`},l=function(e){return e===Object(e)},u=function(e){return s.call(e)==`[object Array]`},d=function(e){return s.call(e)==`[object Date]`},f=function(e){return s.call(e)==`[object RegExp]`},p=function(e){return s.call(e)==`[object Boolean]`},m=function(e){return e-=0,e===e},h=function(e,t){var n=t&&`process`in t?t.process:t;return typeof n==`function`?function(t,r){return n(t,e,r)}:e},g={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(e,t){return n(h(i,t),e)},decamelizeKeys:function(e,t){return n(h(o,t),e,t)},pascalizeKeys:function(e,t){return n(h(a,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=g:t.humps=g})(tf)})(nf);var rf=nf.exports,af=[`gradientFill`],of=[`class`,`style`],sf=[`type`,`stops`,`id`];function cf(e){return e.split(`;`).map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(`:`),r=rf.camelize(t.slice(0,n));return e[r]=t.slice(n+1).trim(),e},{})}function lf(e){return e.split(/\s+/).reduce(function(e,t){return e[t]=!0,e},{})}function uf(e,t){return _a(`stop`,Y({key:`${t}-${e.offset}`,offset:e.offset,"stop-color":e.color},e.opacity!==void 0&&{"stop-opacity":e.opacity}))}function df(e){if(typeof e==`string`)return e;var t=(e.children||[]).map(df);return e.tag===`path`&&e.attributes&&`fill`in e.attributes?Y(Y({},e),{},{attributes:Y(Y({},e.attributes),{},{fill:void 0}),children:t}):Y(Y({},e),{},{children:t})}function ff(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e==`string`)return e;var r=t.gradientFill,i=r===void 0?null:r,a=Kd(t,af),o=i||`fill`in n?df(e):e,s=(o.children||[]).map(function(e){return ff(e,{},{})}),c=Object.keys(o.attributes||{}).reduce(function(e,t){var n=o.attributes[t];switch(t){case`class`:e.class=lf(n);break;case`style`:e.style=cf(n);break;default:e.attrs[t]=n}return e},{attrs:{},class:{},style:{}});n.class;var l=n.style,u=l===void 0?{}:l,d=Kd(n,of);if(i&&i.id&&(i.type===`linear`||i.type===`radial`)){var f=i.type,p=i.stops,m=p===void 0?[]:p,h=i.id,g=Kd(i,sf),_=_a(f===`linear`?`linearGradient`:`radialGradient`,Y(Y({},g),{},{id:h}),m.map(uf));return _a(o.tag,Y(Y(Y(Y({},a),{},{class:c.class,style:Y(Y({},c.style),u)},c.attrs),d),{},{fill:`url(#${h})`}),[_].concat(Jd(s)))}return _a(e.tag,Y(Y(Y({},a),{},{class:c.class,style:Y(Y({},c.style),u)},c.attrs),d),s)}var pf=!1;try{pf=!0}catch{}function mf(){if(!pf&&console&&typeof console.error==`function`){var e;(e=console).error.apply(e,arguments)}}function hf(e){if(e&&Zd(e)===`object`&&e.prefix&&e.iconName&&e.icon)return e;if(zd.icon)return zd.icon(e);if(e===null)return null;if(Zd(e)===`object`&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e==`string`)return{prefix:`fas`,iconName:e}}var gf=Rn({name:`FontAwesomeIcon`,props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,`horizontal`,`vertical`,`both`].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return[`right`,`left`].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`1x`,`2x`,`3x`,`4x`,`5x`,`6x`,`7x`,`8x`,`9x`,`10x`].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1},gradientFill:{type:Object,default:null,validator:function(e){return typeof e.id!=`string`||!e.id?(console.warn(`FontAwesomeIcon: gradientFill.id must be a non-empty string`),!1):e.type!==`linear`&&e.type!==`radial`?(console.warn(`FontAwesomeIcon: gradientFill.type must be "linear" or "radial"`),!1):!0}},flip360:{type:Boolean,default:!1},buzz:{type:Boolean,default:!1},float:{type:Boolean,default:!1},jello:{type:Boolean,default:!1},spinSnap:{type:Boolean,default:!1},spinSnap4:{type:Boolean,default:!1},spinSnap8:{type:Boolean,default:!1},swing:{type:Boolean,default:!1},wag:{type:Boolean,default:!1}},setup:function(e,t){var n=t.attrs,r=H(function(){return hf(e.icon)}),i=H(function(){return $d(`classes`,ef(e))}),a=H(function(){return $d(`transform`,typeof e.transform==`string`?zd.transform(e.transform):e.transform)}),o=H(function(){return $d(`mask`,hf(e.mask))}),s=H(function(){var t=Y(Y(Y(Y({},i.value),a.value),o.value),{},{symbol:e.symbol,maskId:e.maskId});return t.title=e.title,t.titleId=e.titleId,Bd(r.value,t)});An(s,function(e){if(!e)return mf(`Could not find one or more icon(s)`,r.value,o.value)},{immediate:!0}),e.gradientFill&&e.symbol&&mf(`gradientFill is not supported when symbol is true and will be ignored`);var c=H(function(){return s.value?ff(s.value.abstract[0],{gradientFill:e.symbol?null:e.gradientFill},n):null});return function(){return c.value}}}),_f={prefix:`fab`,iconName:`facebook`,icon:[512,512,[62e3],`f09a`,`M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z`]},vf={prefix:`fab`,iconName:`instagram`,icon:[448,512,[],`f16d`,`M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`]},yf={class:`footer-mobile`},bf={class:`social-icons`},xf={href:`https://www.facebook.com/Ayurvediskabehandlingar`,target:`_blank`},Sf={href:`https://www.instagram.com/ayurvediskabehandlingar/`,target:`_blank`},Cf=_o(Rn({__name:`FooterMobile`,setup(e){return(e,t)=>(Ai(),Fi(`footer`,yf,[t[0]||=z(`p`,null,`Järnvägsgatan 6, 645 43 Strängnäs`,-1),t[1]||=z(`p`,null,`Telefon: 0793-356491`,-1),t[2]||=z(`p`,null,[Ui(` E-post: `),z(`a`,{href:`mailto:sandra@yourbodyandmind.se`},`sandra@yourbodyandmind.se`)],-1),z(`div`,bf,[z(`a`,xf,[B(Wt(gf),{icon:Wt(_f)},null,8,[`icon`])]),z(`a`,Sf,[B(Wt(gf),{icon:Wt(vf)},null,8,[`icon`])])])]))}}),[[`__scopeId`,`data-v-48d30e7b`]]),wf={key:0},Tf={class:`mobile-container`},Ef={key:1},Df={class:`desktop-container`},Of=Rn({__name:`App`,setup(e){let{width:t}=lo(),n=H(()=>t.value<768);return(e,t)=>{let r=lr(`router-view`);return n.value?(Ai(),Fi(`div`,wf,[z(`div`,Tf,[B(vo),B(r),B(Cf)])])):(Ai(),Fi(`div`,Ef,[z(`div`,Df,[B(r)])]))}}}),kf=typeof document<`u`;function Af(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function jf(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&Af(e.default)}var X=Object.assign;function Mf(e,t){let n={};for(let r in t){let i=t[r];n[r]=Pf(i)?i.map(e):e(i)}return n}var Nf=()=>{},Pf=Array.isArray;function Ff(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var If=/#/g,Lf=/&/g,Rf=/\//g,zf=/=/g,Bf=/\?/g,Vf=/\+/g,Hf=/%5B/g,Uf=/%5D/g,Wf=/%5E/g,Gf=/%60/g,Kf=/%7B/g,qf=/%7C/g,Jf=/%7D/g,Yf=/%20/g;function Xf(e){return e==null?``:encodeURI(``+e).replace(qf,`|`).replace(Hf,`[`).replace(Uf,`]`)}function Zf(e){return Xf(e).replace(Kf,`{`).replace(Jf,`}`).replace(Wf,`^`)}function Qf(e){return Xf(e).replace(Vf,`%2B`).replace(Yf,`+`).replace(If,`%23`).replace(Lf,`%26`).replace(Gf,"`").replace(Kf,`{`).replace(Jf,`}`).replace(Wf,`^`)}function $f(e){return Qf(e).replace(zf,`%3D`)}function ep(e){return Xf(e).replace(If,`%23`).replace(Bf,`%3F`)}function tp(e){return ep(e).replace(Rf,`%2F`)}function np(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var rp=/\/$/,ip=e=>e.replace(rp,``);function ap(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=pp(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:np(o)}}function op(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function sp(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function cp(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&lp(t.matched[r],n.matched[i])&&up(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function lp(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function up(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!dp(e[n],t[n]))return!1;return!0}function dp(e,t){return Pf(e)?fp(e,t):Pf(t)?fp(t,e):e?.valueOf()===t?.valueOf()}function fp(e,t){return Pf(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function pp(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`)if(s===`..`)a>1&&a--;else break;return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var mp={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0},hp=function(e){return e.pop=`pop`,e.push=`push`,e}({}),gp=function(e){return e.back=`back`,e.forward=`forward`,e.unknown=``,e}({});function _p(e){if(!e)if(kf){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^\/]+/,``)}else e=`/`;return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),ip(e)}var vp=/^[^#]+#/;function yp(e,t){return e.replace(vp,`#`)+t}function bp(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var xp=()=>({left:window.scrollX,top:window.scrollY});function Sp(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=bp(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Cp(e,t){return(history.state?history.state.position-t:-1)+e}var wp=new Map;function Tp(e,t){wp.set(e,t)}function Ep(e){let t=wp.get(e);return wp.delete(e),t}function Dp(e){return typeof e==`string`||e&&typeof e==`object`}function Op(e){return typeof e==`string`||typeof e==`symbol`}var Z=function(e){return e[e.MATCHER_NOT_FOUND=1]=`MATCHER_NOT_FOUND`,e[e.NAVIGATION_GUARD_REDIRECT=2]=`NAVIGATION_GUARD_REDIRECT`,e[e.NAVIGATION_ABORTED=4]=`NAVIGATION_ABORTED`,e[e.NAVIGATION_CANCELLED=8]=`NAVIGATION_CANCELLED`,e[e.NAVIGATION_DUPLICATED=16]=`NAVIGATION_DUPLICATED`,e}({}),kp=Symbol(``);Z.MATCHER_NOT_FOUND,Z.NAVIGATION_GUARD_REDIRECT,Z.NAVIGATION_ABORTED,Z.NAVIGATION_CANCELLED,Z.NAVIGATION_DUPLICATED;function Ap(e,t){return X(Error(),{type:e,[kp]:!0},t)}function jp(e,t){return e instanceof Error&&kp in e&&(t==null||!!(e.type&t))}function Mp(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(Vf,` `),i=r.indexOf(`=`),a=np(i<0?r:r.slice(0,i)),o=i<0?null:np(r.slice(i+1));if(a in t){let e=t[a];Pf(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function Np(e){let t=``;for(let n in e){let r=e[n];if(n=$f(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(Pf(r)?r.map(e=>e&&Qf(e)):[r&&Qf(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Pp(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Pf(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}var Fp=Symbol(``),Ip=Symbol(``),Lp=Symbol(``),Rp=Symbol(``),zp=Symbol(``);function Bp(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Vp(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(Ap(Z.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):Dp(e)?c(Ap(Z.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function Hp(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(!(t!==`beforeRouteEnter`&&!o.instances[e]))if(Af(s)){let c=(s.__vccOpts||s)[t];c&&a.push(Vp(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=jf(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&Vp(c,n,r,o,e,i)()}))}}return a}function Up(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>lp(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>lp(e,s))||i.push(s))}return[n,r,i]}var Wp=()=>location.protocol+`//`+location.host;function Gp(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),sp(n,``)}return sp(n,e)+r+i}function Kp(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=Gp(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:hp.pop,direction:u?u>0?gp.forward:gp.back:gp.unknown})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(X({},e.state,{scroll:xp()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function qp(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?xp():null}}function Jp(e){let{history:t,location:n}=window,r={value:Gp(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:Wp()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,X({},t.state,qp(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=X({},i.value,t.state,{forward:e,scroll:xp()});a(o.current,o,!0),a(e,X({},qp(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function Yp(e){e=_p(e);let t=Jp(e),n=Kp(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=X({location:``,base:e,go:r,createHref:yp.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}var Xp=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.Group=2]=`Group`,e}({}),Q=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.ParamRegExp=2]=`ParamRegExp`,e[e.ParamRegExpEnd=3]=`ParamRegExpEnd`,e[e.EscapeNext=4]=`EscapeNext`,e}(Q||{}),Zp={type:Xp.Static,value:``},Qp=/[a-zA-Z0-9_]/;function $p(e){if(!e)return[[]];if(e===`/`)return[[Zp]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=Q.Static,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===Q.Static?a.push({type:Xp.Static,value:l}):n===Q.Param||n===Q.ParamRegExp||n===Q.ParamRegExpEnd?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:Xp.Param,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;){if(c=e[s++],c===`\\`&&n!==Q.ParamRegExp){r=n,n=Q.EscapeNext;continue}switch(n){case Q.Static:c===`/`?(l&&d(),o()):c===`:`?(d(),n=Q.Param):f();break;case Q.EscapeNext:f(),n=r;break;case Q.Param:c===`(`?n=Q.ParamRegExp:Qp.test(c)?f():(d(),n=Q.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case Q.ParamRegExp:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=Q.ParamRegExpEnd:u+=c;break;case Q.ParamRegExpEnd:d(),n=Q.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`);break}}return n===Q.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var em=`[^/]+?`,tm={sensitive:!1,strict:!1,start:!0,end:!0},$=function(e){return e[e._multiplier=10]=`_multiplier`,e[e.Root=90]=`Root`,e[e.Segment=40]=`Segment`,e[e.SubSegment=30]=`SubSegment`,e[e.Static=40]=`Static`,e[e.Dynamic=20]=`Dynamic`,e[e.BonusCustomRegExp=10]=`BonusCustomRegExp`,e[e.BonusWildcard=-50]=`BonusWildcard`,e[e.BonusRepeatable=-20]=`BonusRepeatable`,e[e.BonusOptional=-8]=`BonusOptional`,e[e.BonusStrict=.7000000000000001]=`BonusStrict`,e[e.BonusCaseSensitive=.25]=`BonusCaseSensitive`,e}($||{}),nm=/[.+*?^${}()[\]/\\]/g;function rm(e,t){let n=X({},tm,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[$.Root];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=$.Segment+(n.sensitive?$.BonusCaseSensitive:0);if(o.type===Xp.Static)r||(i+=`/`),i+=o.value.replace(nm,`\\$&`),s+=$.Static;else if(o.type===Xp.Param){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||em;if(u!==em){s+=$.BonusCustomRegExp;try{`${u}`}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=$.Dynamic,c&&(s+=$.BonusOptional),n&&(s+=$.BonusRepeatable),u===`.*`&&(s+=$.BonusWildcard)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=$.BonusStrict}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===Xp.Static)n+=e.value;else if(e.type===Xp.Param){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Pf(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Pf(c)?c.join(`/`):c;if(!l)if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`);n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function im(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===$.Static+$.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===$.Static+$.Segment?1:-1:0}function am(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=im(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(om(r))return 1;if(om(i))return-1}return i.length-r.length}function om(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var sm={strict:!1,end:!0,sensitive:!1};function cm(e,t,n){let r=X(rm($p(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function lm(e,t){let n=[],r=new Map;t=Ff(sm,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=dm(e);s.aliasOf=r&&r.record;let l=Ff(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(dm(X({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=cm(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!pm(d)&&o(e.name)),_m(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:Nf}function o(e){if(Op(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=hm(e,n);n.splice(t,0,e),e.record.name&&!pm(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw Ap(Z.MATCHER_NOT_FOUND,{location:e});s=i.record.name,a=X(um(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&um(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw Ap(Z.MATCHER_NOT_FOUND,{location:e,currentLocation:t});s=i.record.name,a=X({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:mm(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function um(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function dm(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:fm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function fm(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function pm(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function mm(e){return e.reduce((e,t)=>X(e,t.meta),{})}function hm(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;am(e,t[i])<0?r=i:n=i+1}let i=gm(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function gm(e){let t=e;for(;t=t.parent;)if(_m(t)&&am(e,t)===0)return t}function _m({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function vm(e){let t=Dn(Lp),n=Dn(Rp),r=H(()=>{let n=Wt(e.to);return t.resolve(n)}),i=H(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(lp.bind(null,i));if(o>-1)return o;let s=Cm(e[t-2]);return t>1&&Cm(i)===s&&a[a.length-1].path!==s?a.findIndex(lp.bind(null,e[t-2])):o}),a=H(()=>i.value>-1&&Sm(n.params,r.value.params)),o=H(()=>i.value>-1&&i.value===n.matched.length-1&&up(n.params,r.value.params));function s(n={}){if(xm(n)){let n=t[Wt(e.replace)?`replace`:`push`](Wt(e.to)).catch(Nf);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:H(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function ym(e){return e.length===1?e[0]:e}var bm=Rn({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:vm,setup(e,{slots:t}){let n=kt(vm(e)),{options:r}=Dn(Lp),i=H(()=>({[wm(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[wm(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&ym(t.default(n));return e.custom?r:_a(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function xm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Sm(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!Pf(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function Cm(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var wm=(e,t,n)=>e??t??n,Tm=Rn({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=Dn(zp),i=H(()=>e.route||r.value),a=Dn(Ip,0),o=H(()=>{let e=Wt(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=H(()=>i.value.matched[o.value]);En(Ip,H(()=>o.value+1)),En(Fp,s),En(zp,i);let c=Bt();return An(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!lp(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return Em(n.default,{Component:l,route:r});let u=o.props[a],d=_a(l,X({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return Em(n.default,{Component:d,route:r})||d}}});function Em(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var Dm=Tm;function Om(e){let t=lm(e.routes,e),n=e.parseQuery||Mp,r=e.stringifyQuery||Np,i=e.history,a=Bp(),o=Bp(),s=Bp(),c=Vt(mp),l=mp;kf&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=Mf.bind(null,e=>``+e),d=Mf.bind(null,tp),f=Mf.bind(null,np);function p(e,n){let r,i;return Op(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=X({},a||c.value),typeof e==`string`){let r=ap(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return X(r,o,{params:f(o.params),hash:np(r.hash),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=X({},e,{path:ap(n,e.path,a.path).path});else{let t=X({},e.params);for(let e in t)t[e]??delete t[e];o=X({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=op(r,X({},e,{hash:Zf(l),path:s.path})),m=i.createHref(p);return X({fullPath:p,hash:l,query:r===Np?Pp(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?ap(n,e,c.value.path):X({},e)}function y(e,t){if(l!==e)return Ap(Z.NAVIGATION_CANCELLED,{from:t,to:e})}function b(e){return C(e)}function x(e){return b(X(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),X({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C(X(v(u),{state:typeof u==`object`?X({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&cp(r,i,n)&&(f=Ap(Z.NAVIGATION_DUPLICATED,{to:d,from:i}),ce(i,i,!0,!1)),(f?Promise.resolve(f):te(d,i)).catch(e=>jp(e)?jp(e,Z.NAVIGATION_GUARD_REDIRECT)?e:se(e):oe(e,d,i)).then(e=>{if(e){if(jp(e,Z.NAVIGATION_GUARD_REDIRECT))return C(X({replace:s},v(e.to),{state:typeof e.to==`object`?X({},a,e.to.state):a,force:o}),t||d)}else e=T(d,i,!0,s,a);return ne(d,i,e),e})}function w(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function ee(e){let t=de.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function te(e,t){let n,[r,i,s]=Up(e,t);n=Hp(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(Vp(r,e,t))});let c=w.bind(null,e,t);return n.push(c),pe(n).then(()=>{n=[];for(let r of a.list())n.push(Vp(r,e,t));return n.push(c),pe(n)}).then(()=>{n=Hp(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(Vp(r,e,t))});return n.push(c),pe(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter)if(Pf(r.beforeEnter))for(let i of r.beforeEnter)n.push(Vp(i,e,t));else n.push(Vp(r.beforeEnter,e,t));return n.push(c),pe(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Hp(s,`beforeRouteEnter`,e,t,ee),n.push(c),pe(n))).then(()=>{n=[];for(let r of o.list())n.push(Vp(r,e,t));return n.push(c),pe(n)}).catch(e=>jp(e,Z.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function ne(e,t,n){s.list().forEach(r=>ee(()=>r(e,t,n)))}function T(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===mp,l=kf?history.state:{};n&&(r||s?i.replace(e.fullPath,X({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,ce(e,t,n,s),se()}let re;function E(){re||=i.listen((e,t,n)=>{if(!fe.listening)return;let r=_(e),a=S(r,fe.currentRoute.value);if(a){C(X(a,{replace:!0,force:!0}),r).catch(Nf);return}l=r;let o=c.value;kf&&Tp(Cp(o.fullPath,n.delta),xp()),te(r,o).catch(e=>jp(e,Z.NAVIGATION_ABORTED|Z.NAVIGATION_CANCELLED)?e:jp(e,Z.NAVIGATION_GUARD_REDIRECT)?(C(X(v(e.to),{force:!0}),r).then(e=>{jp(e,Z.NAVIGATION_ABORTED|Z.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===hp.pop&&i.go(-1,!1)}).catch(Nf),Promise.reject()):(n.delta&&i.go(-n.delta,!1),oe(e,r,o))).then(e=>{e||=T(r,o,!1),e&&(n.delta&&!jp(e,Z.NAVIGATION_CANCELLED)?i.go(-n.delta,!1):n.type===hp.pop&&jp(e,Z.NAVIGATION_ABORTED|Z.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),ne(r,o,e)}).catch(Nf)})}let ie=Bp(),ae=Bp(),D;function oe(e,t,n){se(e);let r=ae.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function O(){return D&&c.value!==mp?Promise.resolve():new Promise((e,t)=>{ie.add([e,t])})}function se(e){return D||(D=!e,E(),ie.list().forEach(([t,n])=>e?n(e):t()),ie.reset()),e}function ce(t,n,r,i){let{scrollBehavior:a}=e;if(!kf||!a)return Promise.resolve();let o=!r&&Ep(Cp(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return fn().then(()=>a(t,n,o)).then(e=>e&&Sp(e)).catch(e=>oe(e,t,n))}let le=e=>i.go(e),ue,de=new Set,fe={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:le,back:()=>le(-1),forward:()=>le(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:ae.add,isReady:O,install(e){e.component(`RouterLink`,bm),e.component(`RouterView`,Dm),e.config.globalProperties.$router=fe,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Wt(c)}),kf&&!ue&&c.value===mp&&(ue=!0,b(i.location).catch(e=>{}));let t={};for(let e in mp)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(Lp,fe),e.provide(Rp,At(t)),e.provide(zp,c);let n=e.unmount;de.add(e),e.unmount=function(){de.delete(e),de.size<1&&(l=mp,re&&re(),re=null,c.value=mp,ue=!1,D=!1),n()}}};function pe(e){return e.reduce((e,t)=>e.then(()=>ee(t)),Promise.resolve())}return fe}var km=`/yourbodyandmind/assets/hero-Gv7NfW6o.jpg`,Am=`/yourbodyandmind/assets/towel-BnUCj6Sz.png`,jm={class:`hero-section-mobile`},Mm=_o(Rn({__name:`Start`,setup(e){let t=[km,Am],n=Bt(0),r=null;return $n(()=>{r=window.setInterval(()=>{n.value=(n.value+1)%t.length},5e3)}),rr(()=>{r!==null&&clearInterval(r)}),(e,r)=>(Ai(),Fi(Ti,null,[z(`div`,jm,[(Ai(),Fi(Ti,null,pr(t,(e,t)=>z(`div`,{key:t,class:k([`hero-background`,{active:n.value===t}]),style:ue({backgroundImage:`url(${e})`})},null,6)),64)),r[0]||=Wi(`<div class="hero-overlay" data-v-7dda6ab3></div><div class="hero-content" data-v-7dda6ab3><div class="hero-img" data-v-7dda6ab3><img src="/yourbodyandmind/assets/logotext-BoZzUugT.png" alt="Logo" data-v-7dda6ab3></div><div class="hero-buttons" data-v-7dda6ab3><a href="https://www.bokadirekt.se/places/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195" target="_blank" data-v-7dda6ab3><button class="hero-button" data-v-7dda6ab3>Boka</button></a><button class="hero-button" data-v-7dda6ab3>Läs mer</button></div></div>`,2)]),r[1]||=z(`div`,{class:`hero-text`},[z(`div`,{class:`hero-text-img`},[z(`img`,{src:`/yourbodyandmind/assets/Profilbild-DGCdpb7l.jpg`,alt:`Logo`}),z(`p`,null,` Jag är utbildad beteendevetare, ayuryogalärare och ayurvedisk massageterapeut med ett helhetsperspektiv på hälsa och välbefinnande. I mitt arbete utgår jag från att kropp och sinne är nära sammankopplade – när den ena delen får omsorg påverkas även den andra. Jag möter varje person med närvaro, respekt och lyhördhet. Min ambition är att skapa en trygg och rofylld stund där du får landa, släppa vardagens tempo och återknyta kontakten med dig själv. `)])],-1)],64))}}),[[`__scopeId`,`data-v-7dda6ab3`]]),Nm=Om({history:Yp(`/yourbodyandmind/`),routes:[{path:`/`,name:`home`,component:Mm}]});oo(Of).use(Nm).mount(`#app`);