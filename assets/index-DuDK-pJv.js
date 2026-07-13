(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),S=e=>x(e).slice(8,-1),C=e=>x(e)===`[object Object]`,w=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,ee=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),te=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ne=/-\w/g,T=te(e=>e.replace(ne,e=>e.slice(1).toUpperCase())),re=/\B([A-Z])/g,E=te(e=>e.replace(re,`-$1`).toLowerCase()),ie=te(e=>e.charAt(0).toUpperCase()+e.slice(1)),ae=te(e=>e?`on${ie(e)}`:``),D=(e,t)=>!Object.is(e,t),oe=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},O=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},se=e=>{let t=parseFloat(e);return isNaN(t)?e:t},ce,le=()=>ce||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function ue(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?me(r):ue(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(g(e)||v(e))return e}var de=/;(?![^(]*\))/g,fe=/:([^]+)/,pe=/\/\*[^]*?\*\//g;function me(e){let t={};return e.replace(pe,``).split(de).forEach(e=>{if(e){let n=e.split(fe);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function k(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=k(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var he=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,ge=e(he);he+``;function _e(e){return!!e||e===``}function ve(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=ye(e[r],t[r]);return n}function ye(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=_(e),r=_(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return n&&r?ve(e,t):!1;if(n=v(e),r=v(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!ye(e[n],t[n]))return!1}}return String(e)===String(t)}var be=e=>!!(e&&e.__v_isRef===!0),xe=e=>g(e)?e:e==null?``:d(e)||v(e)&&(e.toString===b||!h(e.toString))?be(e)?xe(e.value):JSON.stringify(e,Se,2):String(e),Se=(e,t)=>be(t)?Se(e,t.value):f(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Ce(t,r)+` =>`]=n,e),{})}:p(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ce(e))}:_(t)?Ce(t):v(t)&&!d(t)&&!C(t)?String(t):t,Ce=(e,t=``)=>_(e)?`Symbol(${e.description??t})`:e,A,we=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&A&&(A.active?(this.parent=A,this.index=(A.scopes||=[]).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=A;try{return A=this,e()}finally{A=t}}}on(){++this._on===1&&(this.prevScope=A,A=this)}off(){if(this._on>0&&--this._on===0){if(A===this)A=this.prevScope;else{let e=A;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Te(){return A}var j,Ee=new WeakSet,De=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,A&&(A.active?A.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ee.has(this)&&(Ee.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||je(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ue(this),Pe(this);let e=j,t=M;j=this,M=!0;try{return this.fn()}finally{Fe(this),j=e,M=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Re(e);this.deps=this.depsTail=void 0,Ue(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ee.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ie(this)&&this.run()}get dirty(){return Ie(this)}},Oe=0,ke,Ae;function je(e,t=!1){if(e.flags|=8,t){e.next=Ae,Ae=e;return}e.next=ke,ke=e}function Me(){Oe++}function Ne(){if(--Oe>0)return;if(Ae){let e=Ae;for(Ae=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;ke;){let t=ke;for(ke=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function Pe(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Fe(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Re(r),ze(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Ie(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Le(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Le(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===We)||(e.globalVersion=We,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ie(e))))return;e.flags|=2;let t=e.dep,n=j,r=M;j=e,M=!0;try{Pe(e);let n=e.fn(e._value);(t.version===0||D(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{j=n,M=r,Fe(e),e.flags&=-3}}function Re(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Re(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function ze(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var M=!0,Be=[];function Ve(){Be.push(M),M=!1}function He(){let e=Be.pop();M=e===void 0?!0:e}function Ue(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=j;j=void 0;try{t()}finally{j=e}}}var We=0,Ge=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},Ke=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!j||!M||j===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==j)t=this.activeLink=new Ge(j,this),j.deps?(t.prevDep=j.depsTail,j.depsTail.nextDep=t,j.depsTail=t):j.deps=j.depsTail=t,qe(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=j.depsTail,t.nextDep=void 0,j.depsTail.nextDep=t,j.depsTail=t,j.deps===t&&(j.deps=e)}return t}trigger(e){this.version++,We++,this.notify(e)}notify(e){Me();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ne()}}};function qe(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)qe(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Je=new WeakMap,Ye=Symbol(``),Xe=Symbol(``),Ze=Symbol(``);function N(e,t,n){if(M&&j){let t=Je.get(e);t||Je.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new Ke),r.map=t,r.key=n),r.track()}}function Qe(e,t,n,r,i,a){let o=Je.get(e);if(!o){We++;return}let s=e=>{e&&e.trigger()};if(Me(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&w(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===Ze||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(Ze)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(Ye)),f(e)&&s(o.get(Xe)));break;case`delete`:i||(s(o.get(Ye)),f(e)&&s(o.get(Xe)));break;case`set`:f(e)&&s(o.get(Ye));break}}Ne()}function $e(e){let t=F(e);return t===e?t:(N(t,`iterate`,Ze),P(e)?t:t.map(Bt))}function et(e){return N(e=F(e),`iterate`,Ze),e}function tt(e,t){return Lt(e)?Vt(It(e)?Bt(t):t):Bt(t)}var nt={__proto__:null,[Symbol.iterator](){return rt(this,Symbol.iterator,e=>tt(this,e))},concat(...e){return $e(this).concat(...e.map(e=>d(e)?$e(e):e))},entries(){return rt(this,`entries`,e=>(e[1]=tt(this,e[1]),e))},every(e,t){return at(this,`every`,e,t,void 0,arguments)},filter(e,t){return at(this,`filter`,e,t,e=>e.map(e=>tt(this,e)),arguments)},find(e,t){return at(this,`find`,e,t,e=>tt(this,e),arguments)},findIndex(e,t){return at(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return at(this,`findLast`,e,t,e=>tt(this,e),arguments)},findLastIndex(e,t){return at(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return at(this,`forEach`,e,t,void 0,arguments)},includes(...e){return st(this,`includes`,e)},indexOf(...e){return st(this,`indexOf`,e)},join(e){return $e(this).join(e)},lastIndexOf(...e){return st(this,`lastIndexOf`,e)},map(e,t){return at(this,`map`,e,t,void 0,arguments)},pop(){return ct(this,`pop`)},push(...e){return ct(this,`push`,e)},reduce(e,...t){return ot(this,`reduce`,e,t)},reduceRight(e,...t){return ot(this,`reduceRight`,e,t)},shift(){return ct(this,`shift`)},some(e,t){return at(this,`some`,e,t,void 0,arguments)},splice(...e){return ct(this,`splice`,e)},toReversed(){return $e(this).toReversed()},toSorted(e){return $e(this).toSorted(e)},toSpliced(...e){return $e(this).toSpliced(...e)},unshift(...e){return ct(this,`unshift`,e)},values(){return rt(this,`values`,e=>tt(this,e))}};function rt(e,t,n){let r=et(e),i=r[t]();return r!==e&&!P(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var it=Array.prototype;function at(e,t,n,r,i,a){let o=et(e),s=o!==e&&!P(e),c=o[t];if(c!==it[t]){let t=c.apply(e,a);return s?Bt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,tt(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function ot(e,t,n,r){let i=et(e),a=i!==e&&!P(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=tt(e,t)),n.call(this,t,tt(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?tt(e,c):c}function st(e,t,n){let r=F(e);N(r,`iterate`,Ze);let i=r[t](...n);return(i===-1||i===!1)&&Rt(n[0])?(n[0]=F(n[0]),r[t](...n)):i}function ct(e,t,n=[]){Ve(),Me();let r=F(e)[t].apply(e,n);return Ne(),He(),r}var lt=e(`__proto__,__v_isRef,__isVue`),ut=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function dt(e){_(e)||(e=String(e));let t=F(this);return N(t,`has`,e),t.hasOwnProperty(e)}var ft=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?At:kt:i?Ot:Dt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=nt[t]))return e;if(t===`hasOwnProperty`)return dt}let o=Reflect.get(e,t,I(e)?e:n);if((_(t)?ut.has(t):lt(t))||(r||N(e,`get`,t),i))return o;if(I(o)){let e=a&&w(t)?o:o.value;return r&&v(e)?Pt(e):e}return v(o)?r?Pt(o):Mt(o):o}},pt=class extends ft{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&w(t);if(!this._isShallow){let e=Lt(i);if(!P(n)&&!Lt(n)&&(i=F(i),n=F(n)),!a&&I(i)&&!I(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,I(e)?e:r);return e===F(r)&&(o?D(n,i)&&Qe(e,`set`,t,n,i):Qe(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&Qe(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!ut.has(t))&&N(e,`has`,t),n}ownKeys(e){return N(e,`iterate`,d(e)?`length`:Ye),Reflect.ownKeys(e)}},mt=class extends ft{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},ht=new pt,gt=new mt,_t=new pt(!0),vt=e=>e,yt=e=>Reflect.getPrototypeOf(e);function bt(e,t,n){return function(...r){let i=this.__v_raw,a=F(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?vt:t?Vt:Bt;return!t&&N(a,`iterate`,l?Xe:Ye),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function xt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function St(e,t){let n={get(n){let r=this.__v_raw,i=F(r),a=F(n);e||(D(n,a)&&N(i,`get`,n),N(i,`get`,a));let{has:o}=yt(i),s=t?vt:e?Vt:Bt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&N(F(t),`iterate`,Ye),t.size},has(t){let n=this.__v_raw,r=F(n),i=F(t);return e||(D(t,i)&&N(r,`has`,t),N(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=F(a),s=t?vt:e?Vt:Bt;return!e&&N(o,`iterate`,Ye),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:xt(`add`),set:xt(`set`),delete:xt(`delete`),clear:xt(`clear`)}:{add(e){let n=F(this),r=yt(n),i=F(e),a=!t&&!P(e)&&!Lt(e)?i:e;return r.has.call(n,a)||D(e,a)&&r.has.call(n,e)||D(i,a)&&r.has.call(n,i)||(n.add(a),Qe(n,`add`,a,a)),this},set(e,n){!t&&!P(n)&&!Lt(n)&&(n=F(n));let r=F(this),{has:i,get:a}=yt(r),o=i.call(r,e);o||=(e=F(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?D(n,s)&&Qe(r,`set`,e,n,s):Qe(r,`add`,e,n),this},delete(e){let t=F(this),{has:n,get:r}=yt(t),i=n.call(t,e);i||=(e=F(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&Qe(t,`delete`,e,void 0,a),o},clear(){let e=F(this),t=e.size!==0,n=e.clear();return t&&Qe(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=bt(r,e,t)}),n}function Ct(e,t){let n=St(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var wt={get:Ct(!1,!1)},Tt={get:Ct(!1,!0)},Et={get:Ct(!0,!1)},Dt=new WeakMap,Ot=new WeakMap,kt=new WeakMap,At=new WeakMap;function jt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Mt(e){return Lt(e)?e:Ft(e,!1,ht,wt,Dt)}function Nt(e){return Ft(e,!1,_t,Tt,Ot)}function Pt(e){return Ft(e,!0,gt,Et,kt)}function Ft(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=jt(S(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function It(e){return Lt(e)?It(e.__v_raw):!!(e&&e.__v_isReactive)}function Lt(e){return!!(e&&e.__v_isReadonly)}function P(e){return!!(e&&e.__v_isShallow)}function Rt(e){return e?!!e.__v_raw:!1}function F(e){let t=e&&e.__v_raw;return t?F(t):e}function zt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&O(e,`__v_skip`,!0),e}var Bt=e=>v(e)?Mt(e):e,Vt=e=>v(e)?Pt(e):e;function I(e){return e?e.__v_isRef===!0:!1}function Ht(e){return Ut(e,!1)}function Ut(e,t){return I(e)?e:new Wt(e,t)}var Wt=class{constructor(e,t){this.dep=new Ke,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:F(e),this._value=t?e:Bt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||P(e)||Lt(e);e=n?e:F(e),D(e,t)&&(this._rawValue=e,this._value=n?e:Bt(e),this.dep.trigger())}};function Gt(e){return I(e)?e.value:e}var Kt={get:(e,t,n)=>t===`__v_raw`?e:Gt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return I(i)&&!I(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function qt(e){return It(e)?e:new Proxy(e,Kt)}var Jt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Ke(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=We-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&j!==this)return je(this,!0),!0}get value(){let e=this.dep.track();return Le(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Yt(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new Jt(r,i,n)}var Xt={},Zt=new WeakMap,Qt=void 0;function $t(e,t=!1,n=Qt){if(n){let t=Zt.get(n);t||Zt.set(n,t=[]),t.push(e)}}function en(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:P(e)||o===!1||o===0?tn(e,1):tn(e),m,g,_,v,y=!1,b=!1;if(I(e)?(g=()=>e.value,y=P(e)):It(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>It(e)||P(e)),g=()=>e.map(e=>{if(I(e))return e.value;if(It(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){Ve();try{_()}finally{He()}}let t=Qt;Qt=m;try{return f?f(e,3,[v]):e(v)}finally{Qt=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>tn(e(),t)}let x=Te(),S=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{let n=e(...t);return S(),n}}let C=b?Array(e.length).fill(Xt):Xt,w=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(n){let t=m.run();if(e||o||y||(b?t.some((e,t)=>D(e,C[t])):D(t,C))){_&&_();let e=Qt;Qt=m;try{let e=[t,C===Xt?void 0:b&&C[0]===Xt?[]:C,v];C=t,f?f(n,3,e):n(...e)}finally{Qt=e}}}else m.run()};return u&&u(w),m=new De(g),m.scheduler=l?()=>l(w,!1):w,v=e=>$t(e,!1,m),_=m.onStop=()=>{let e=Zt.get(m);if(e){if(f)f(e,4);else for(let t of e)t();Zt.delete(m)}},n?a?w(!0):C=m.run():l?l(w.bind(null,!0),!0):m.run(),S.pause=m.pause.bind(m),S.resume=m.resume.bind(m),S.stop=S,S}function tn(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,I(e))tn(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)tn(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{tn(e,t,n)});else if(C(e)){for(let r in e)tn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&tn(e[r],t,n)}return e}function nn(e,t,n,r){try{return r?e(...r):e()}catch(e){rn(e,t,n)}}function L(e,t,n,r){if(h(e)){let i=nn(e,t,n,r);return i&&y(i)&&i.catch(e=>{rn(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(L(e[a],t,n,r));return i}}function rn(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){Ve(),nn(o,null,10,[e,i,a]),He();return}}an(e,r,a,i,s)}function an(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var R=[],on=-1,sn=[],cn=null,ln=0,un=Promise.resolve(),dn=null;function fn(e){let t=dn||un;return e?t.then(this?e.bind(this):e):t}function pn(e){let t=on+1,n=R.length;for(;t<n;){let r=t+n>>>1,i=R[r],a=yn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function mn(e){if(!(e.flags&1)){let t=yn(e),n=R[R.length-1];!n||!(e.flags&2)&&t>=yn(n)?R.push(e):R.splice(pn(t),0,e),e.flags|=1,hn()}}function hn(){dn||=un.then(bn)}function gn(e){d(e)?sn.push(...e):cn&&e.id===-1?cn.splice(ln+1,0,e):e.flags&1||(sn.push(e),e.flags|=1),hn()}function _n(e,t,n=on+1){for(;n<R.length;n++){let t=R[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;R.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function vn(e){if(sn.length){let e=[...new Set(sn)].sort((e,t)=>yn(e)-yn(t));if(sn.length=0,cn){cn.push(...e);return}for(cn=e,ln=0;ln<cn.length;ln++){let e=cn[ln];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}cn=null,ln=0}}var yn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function bn(e){try{for(on=0;on<R.length;on++){let e=R[on];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),nn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;on<R.length;on++){let e=R[on];e&&(e.flags&=-2)}on=-1,R.length=0,vn(e),dn=null,(R.length||sn.length)&&bn(e)}}var xn=null,Sn=null;function Cn(e){let t=xn;return xn=e,Sn=e&&e.type.__scopeId||null,t}function wn(e,t=xn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Oi(-1);let i=Cn(t),a;try{a=e(...n)}finally{Cn(i),r._d&&Oi(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Tn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Ve(),L(c,n,8,[e.el,s,e,t]),He())}}function En(e,t){if(G){let n=G.provides,r=G.parent&&G.parent.provides;r===n&&(n=G.provides=Object.create(r)),n[e]=t}}function Dn(e,t,n=!1){let r=Ji();if(r||Mr){let i=Mr?Mr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var On=Symbol.for(`v-scx`),kn=()=>Dn(On);function An(e,t,n){return jn(e,t,n)}function jn(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(ea){if(c===`sync`){let e=kn();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=G;u.call=(e,t,n)=>L(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{B(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():mn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=en(e,n,u);return ea&&(f?f.push(h):d&&h()),h}function Mn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?Nn(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=Zi(this),s=jn(i,a.bind(r),n);return o(),s}function Nn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Pn=Symbol(`_vte`),Fn=e=>e.__isTeleport,In=Symbol(`_leaveCb`);function Ln(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ln(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Rn(e,t){return h(e)?s({name:e.name},t,{setup:e}):e}function zn(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}function Bn(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Vn=new WeakMap;function Hn(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>Hn(e,n&&(d(n)?n[t]:n),r,a,o));return}if(Wn(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Hn(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?la(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=F(v),b=v===t?i:e=>Bn(_,e)?!1:u(y,e),x=(e,t)=>!(t&&Bn(_,t));if(m!=null&&m!==p){if(Un(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(I(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))nn(p,f,12,[l,_]);else{let t=g(p),n=I(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),Vn.delete(e)};t.id=-1,Vn.set(e,t),B(t,r)}else Un(e),i()}}}function Un(e){let t=Vn.get(e);t&&(t.flags|=8,Vn.delete(e))}le().requestIdleCallback,le().cancelIdleCallback;var Wn=e=>!!e.type.__asyncLoader,Gn=e=>e.type.__isKeepAlive;function Kn(e,t){Jn(e,`a`,t)}function qn(e,t){Jn(e,`da`,t)}function Jn(e,t,n=G){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(Xn(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Gn(e.parent.vnode)&&Yn(r,t,n,e),e=e.parent}}function Yn(e,t,n,r){let i=Xn(t,e,r,!0);rr(()=>{c(r[t],i)},n)}function Xn(e,t,n=G,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Ve();let i=Zi(n),a=L(t,n,e,r);return i(),He(),a};return r?i.unshift(a):i.push(a),a}}var Zn=e=>(t,n=G)=>{(!ea||e===`sp`)&&Xn(e,(...e)=>t(...e),n)},Qn=Zn(`bm`),$n=Zn(`m`),er=Zn(`bu`),tr=Zn(`u`),nr=Zn(`bum`),rr=Zn(`um`),ir=Zn(`sp`),ar=Zn(`rtg`),or=Zn(`rtc`);function sr(e,t=G){Xn(`ec`,e,t)}var cr=Symbol.for(`v-ndc`);function lr(e,t,n,r){let i,a=n&&n[r],o=d(e);if(o||g(e)){let n=o&&It(e),r=!1,s=!1;n&&(r=!P(e),s=Lt(e),e=et(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?Vt(Bt(e[n])):Bt(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(v(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}var ur=e=>e?$i(e)?la(e):ur(e.parent):null,dr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ur(e.parent),$root:e=>ur(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>br(e),$forceUpdate:e=>e.f||=()=>{mn(e.update)},$nextTick:e=>e.n||=fn.bind(e.proxy),$watch:e=>Mn.bind(e)}),fr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),pr={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(fr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else hr&&(s[n]=0)}let d=dr[n],f,p;if(d)return n===`$attrs`&&N(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return fr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||fr(n,c)||u(o,c)||u(i,c)||u(dr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function mr(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var hr=!0;function gr(e){let t=br(e),n=e.proxy,i=e.ctx;hr=!1,t.beforeCreate&&vr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:S,destroyed:C,unmounted:w,render:ee,renderTracked:te,renderTriggered:ne,errorCaptured:T,serverPrefetch:re,expose:E,inheritAttrs:ie,components:ae,directives:D,filters:oe}=t;if(u&&_r(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=Mt(t))}if(hr=!0,o)for(let e in o){let t=o[e],a=da({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)yr(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{En(t,e[t])})}f&&vr(f,e,`c`);function O(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(O(Qn,p),O($n,m),O(er,g),O(tr,_),O(Kn,y),O(qn,b),O(sr,T),O(or,te),O(ar,ne),O(nr,S),O(rr,w),O(ir,re),d(E))if(E.length){let t=e.exposed||={};E.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};ee&&e.render===r&&(e.render=ee),ie!=null&&(e.inheritAttrs=ie),ae&&(e.components=ae),D&&(e.directives=D),re&&zn(e)}function _r(e,t,n=r){d(e)&&(e=Tr(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?Dn(r.from||n,r.default,!0):Dn(r.from||n):Dn(r),I(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function vr(e,t,n){L(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function yr(e,t,n,r){let i=r.includes(`.`)?Nn(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&An(i,n)}else if(h(e))An(i,e.bind(n));else if(v(e))if(d(e))e.forEach(e=>yr(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&An(i,r,e)}}function br(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>xr(c,e,o,!0)),xr(c,t,o)),v(t)&&a.set(t,c),c}function xr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&xr(e,a,n,!0),i&&i.forEach(t=>xr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Sr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Sr={data:Cr,props:Dr,emits:Dr,methods:Er,computed:Er,beforeCreate:z,created:z,beforeMount:z,mounted:z,beforeUpdate:z,updated:z,beforeDestroy:z,beforeUnmount:z,destroyed:z,unmounted:z,activated:z,deactivated:z,errorCaptured:z,serverPrefetch:z,components:Er,directives:Er,watch:Or,provide:Cr,inject:wr};function Cr(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function wr(e,t){return Er(Tr(e),Tr(t))}function Tr(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function z(e,t){return e?[...new Set([].concat(e,t))]:t}function Er(e,t){return e?s(Object.create(null),e,t):t}function Dr(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),mr(e),mr(t??{})):t}function Or(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=z(e[r],t[r]);return n}function kr(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Ar=0;function jr(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=kr(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:Ar++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:pa,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||W(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,la(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(L(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=Mr;Mr=l;try{return e()}finally{Mr=t}}};return l}}var Mr=null,Nr=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${T(t)}Modifiers`]||e[`${E(t)}Modifiers`];function Pr(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&Nr(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=r.map(se)));let c,l=i[c=ae(n)]||i[c=ae(T(n))];!l&&o&&(l=i[c=ae(E(n))]),l&&L(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,L(u,e,6,a)}}var Fr=new WeakMap;function Ir(e,t,n=!1){let r=n?Fr:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=Ir(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function Lr(e,t){return!e||!a(t)?!1:(t=t.slice(2).replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,E(t))||u(e,t))}function Rr(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=Cn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Bi(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=Bi(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:zr(c)}}catch(t){wi.length=0,rn(t,e,1),v=W(Si)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=Br(y,a)),b=Li(b,y,!1,!0))}return n.dirs&&(b=Li(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Ln(b,n.transition),v=b,Cn(_),v}var zr=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},Br=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Vr(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Hr(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Ur(o,r,n)&&!Lr(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Hr(r,o,l):!0:!!o;return!1}function Hr(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(Ur(t,e,a)&&!Lr(n,a))return!0}return!1}function Ur(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!ye(r,i):r!==i}function Wr({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Gr={},Kr=()=>Object.create(Gr),qr=e=>Object.getPrototypeOf(e)===Gr;function Jr(e,t,n,r=!1){let i={},a=Kr();e.propsDefaults=Object.create(null),Xr(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:Nt(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Yr(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=F(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Lr(e.emitsOptions,o))continue;let d=t[o];if(c)if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=T(o);i[t]=Zr(c,s,t,d,e,!1)}else d!==a[o]&&(a[o]=d,l=!0)}}}else{Xr(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=E(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=Zr(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&Qe(e.attrs,`set`,``)}function Xr(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(ee(t))continue;let l=n[t],d;a&&u(a,d=T(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:Lr(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=F(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=Zr(a,n,s,i[s],e,!u(i,s))}}return s}function Zr(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=Zi(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===E(n))&&(r=!0))}return r}var Qr=new WeakMap;function $r(e,r,i=!1){let a=i?Qr:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=$r(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=T(c[e]);ei(n)&&(l[n]=t)}else if(c)for(let e in c){let t=T(e);if(ei(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function ei(e){return e[0]!==`$`&&!ee(e)}var ti=e=>e===`_`||e===`_ctx`||e===`$stable`,ni=e=>d(e)?e.map(Bi):[Bi(e)],ri=(e,t,n)=>{if(t._n)return t;let r=wn((...e)=>ni(t(...e)),n);return r._c=!1,r},ii=(e,t,n)=>{let r=e._ctx;for(let n in e){if(ti(n))continue;let i=e[n];if(h(i))t[n]=ri(n,i,r);else if(i!=null){let e=ni(i);t[n]=()=>e}}},ai=(e,t)=>{let n=ni(t);e.slots.default=()=>n},oi=(e,t,n)=>{for(let r in t)(n||!ti(r))&&(e[r]=t[r])},si=(e,t,n)=>{let r=e.slots=Kr();if(e.vnode.shapeFlag&32){let e=t._;e?(oi(r,t,n),n&&O(r,`_`,e,!0)):ii(t,r)}else t&&ai(e,t)},ci=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:oi(a,n,r):(o=!n.$stable,ii(n,a)),s=n}else n&&(ai(e,n),s={default:1});if(o)for(let e in a)!ti(e)&&s[e]==null&&delete a[e]},B=bi;function li(e){return ui(e)}function ui(e,i){let a=le();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Mi(e,t)&&(r=ye(e),k(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case xi:y(e,t,n,r);break;case Si:b(e,t,n,r);break;case Ci:e??x(t,n,r,o);break;case V:ae(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?D(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,Se)}u!=null&&i?Hn(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Hn(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)te(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),re(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},te=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&T(e.children,d,null,r,i,di(e,a),s,u),_&&Tn(e,null,r,`created`),ne(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!ee(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&Wi(f,r,e)}_&&Tn(e,null,r,`beforeMount`);let v=pi(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&B(()=>{try{f&&Wi(f,r,e),v&&g.enter(d),_&&Tn(e,null,r,`mounted`)}finally{}},i)},ne=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||yi(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;ne(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},T=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?Vi(e[l]):Bi(e[l]),t,n,r,i,a,o,s)},re=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&fi(r,!1),(g=h.onVnodeBeforeUpdate)&&Wi(g,r,n,e),f&&Tn(n,e,r,`beforeUpdate`),r&&fi(r,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?E(e.dynamicChildren,d,l,r,i,di(n,a),o):s||de(e,n,l,null,r,i,di(n,a),o,!1),u>0){if(u&16)ie(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else !s&&d==null&&ie(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&B(()=>{g&&Wi(g,r,n,e),f&&Tn(n,e,r,`updated`)},i)},E=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===V||!Mi(c,l)||c.shapeFlag&198)?m(c.el):n,null,r,i,a,o,!0)}},ie=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!ee(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(ee(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},ae=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),T(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(E(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&mi(e,t,!0)):de(e,t,n,f,i,a,s,c,l)},D=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):O(t,n,r,i,a,o,c):se(e,t,c)},O=(e,t,n,r,i,a,o)=>{let s=e.component=qi(e,r,i);if(Gn(e)&&(s.ctx.renderer=Se),ta(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,ce,o),!e.el){let r=s.subTree=W(Si);b(null,r,t,n),e.placeholder=r.el}}else ce(s,e,t,n,i,a,o)},se=(e,t,n)=>{let r=t.component=e.component;if(Vr(e,t,n))if(r.asyncDep&&!r.asyncResolved){ue(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},ce=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=gi(e);if(n){t&&(t.el=c.el,ue(e,t,o)),n.asyncDep.then(()=>{B(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;fi(e,!1),t?(t.el=c.el,ue(e,t,o)):t=c,n&&oe(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Wi(d,s,t,c),fi(e,!0);let f=Rr(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),ye(p),e,i,a),t.el=f.el,u===null&&Wr(e,f.el),r&&B(r,i),(d=t.props&&t.props.onVnodeUpdated)&&B(()=>Wi(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Wn(t);if(fi(e,!1),l&&oe(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Wi(o,d,t),fi(e,!0),s&&A){let t=()=>{e.subTree=Rr(e),A(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Rr(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&B(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;B(()=>Wi(o,d,e),i)}(t.shapeFlag&256||d&&Wn(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&B(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new De(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>mn(u),fi(e,!0),l()},ue=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,Yr(e,t.props,r,n),ci(e,t.children,n),Ve(),_n(e),He()},de=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){pe(l,d,n,r,i,a,o,s,c);return}else if(f&256){fe(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&ve(l,i,a),d!==l&&p(n,d)):u&16?m&16?pe(l,d,n,r,i,a,o,s,c):ve(l,i,a,!0):(u&8&&p(n,``),m&16&&T(d,n,r,i,a,o,s,c))},fe=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let n=t[p]=l?Vi(t[p]):Bi(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?ve(e,a,o,!0,!1,f):T(t,r,i,a,o,s,c,l,f)},pe=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?Vi(t[u]):Bi(t[u]);if(Mi(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?Vi(t[p]):Bi(t[p]);if(Mi(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?Vi(t[u]):Bi(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)k(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?Vi(t[u]):Bi(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(u=0;u<b;u++)C[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){k(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&Mi(n,t[_])){i=_;break}i===void 0?k(n,a,o,!0):(C[i-h]=u+1,i>=S?S=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let w=x?hi(C):n;for(_=w.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||vi(f):i;C[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==w[_]?me(n,r,p,2):_--)}}},me=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){me(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,Se);return}if(c===V){o(a,t,n);for(let e=0;e<u.length;e++)me(u[e],t,n,r);o(e.anchor,t,n);return}if(c===Ci){S(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.persisted&&!a[In]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),B(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[In];a._isLeaving&&a[In](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},k=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Ve(),Hn(s,null,n,e,!0),He()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!Wn(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Wi(_,t,e),u&6)_e(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Tn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,Se,r):l&&!l.hasOnce&&(a!==V||d>0&&d&64)?ve(l,t,n,!1,!0):(a===V&&d&384||!i&&u&16)&&ve(c,t,n),r&&he(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&B(()=>{_&&Wi(_,t,e),h&&Tn(e,null,t,`unmounted`),v&&(e.el=null)},n)},he=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===V){ge(n,r);return}if(t===Ci){C(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},ge=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},_e=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;_i(c),_i(l),r&&oe(r),i.stop(),a&&(a.flags|=8,k(o,e,t,n)),s&&B(s,t),B(()=>{e.isUnmounted=!0},t)},ve=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)k(e[o],t,n,r,i)},ye=e=>{if(e.shapeFlag&6)return ye(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Pn];return n?h(n):t},be=!1,xe=(e,t,n)=>{let r;e==null?t._vnode&&(k(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,be||=(be=!0,_n(r),vn(),!1)},Se={p:v,um:k,m:me,r:he,mt:O,mc:T,pc:de,pbc:E,n:ye,o:e},Ce,A;return i&&([Ce,A]=i(Se)),{render:xe,hydrate:Ce,createApp:jr(xe,Ce)}}function di({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function fi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function pi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function mi(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=Vi(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&mi(t,a)),a.type===xi&&(a.patchFlag===-1&&(a=i[e]=Vi(a)),a.el=t.el),a.type===Si&&!a.el&&(a.el=t.el)}}function hi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function gi(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:gi(t)}function _i(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function vi(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?vi(t.subTree):null}var yi=e=>e.__isSuspense;function bi(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):gn(e)}var V=Symbol.for(`v-fgt`),xi=Symbol.for(`v-txt`),Si=Symbol.for(`v-cmt`),Ci=Symbol.for(`v-stc`),wi=[],H=null;function Ti(e=!1){wi.push(H=e?null:[])}function Ei(){wi.pop(),H=wi[wi.length-1]||null}var Di=1;function Oi(e,t=!1){Di+=e,e<0&&H&&t&&(H.hasOnce=!0)}function ki(e){return e.dynamicChildren=Di>0?H||n:null,Ei(),Di>0&&H&&H.push(e),e}function Ai(e,t,n,r,i,a){return ki(U(e,t,n,r,i,a,!0))}function ji(e){return e?e.__v_isVNode===!0:!1}function Mi(e,t){return e.type===t.type&&e.key===t.key}var Ni=({key:e})=>e??null,Pi=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||I(e)||h(e)?{i:xn,r:e,k:t,f:!!n}:e);function U(e,t=null,n=null,r=0,i=null,a=e===V?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ni(t),ref:t&&Pi(t),scopeId:Sn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:xn};return s?(Hi(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),Di>0&&!o&&H&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&H.push(c),c}var W=Fi;function Fi(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===cr)&&(e=Si),ji(e)){let r=Li(e,t,!0);return n&&Hi(r,n),Di>0&&!a&&H&&(r.shapeFlag&6?H[H.indexOf(e)]=r:H.push(r)),r.patchFlag=-2,r}if(ua(e)&&(e=e.__vccOpts),t){t=Ii(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=k(e)),v(n)&&(Rt(n)&&!d(n)&&(n=s({},n)),t.style=ue(n))}let o=g(e)?1:yi(e)?128:Fn(e)?64:v(e)?4:h(e)?2:0;return U(e,t,n,r,i,o,a,!0)}function Ii(e){return e?Rt(e)||qr(e)?s({},e):e:null}function Li(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?Ui(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ni(l),ref:t&&t.ref?n&&a?d(a)?a.concat(Pi(t)):[a,Pi(t)]:Pi(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==V?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Li(e.ssContent),ssFallback:e.ssFallback&&Li(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Ln(u,c.clone(u)),u}function Ri(e=` `,t=0){return W(xi,null,e,t)}function zi(e,t){let n=W(Ci,null,e);return n.staticCount=t,n}function Bi(e){return e==null||typeof e==`boolean`?W(Si):d(e)?W(V,null,e.slice()):ji(e)?Vi(e):W(xi,null,String(e))}function Vi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Li(e)}function Hi(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),Hi(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!qr(t)?t._ctx=xn:r===3&&xn&&(xn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else h(t)?(t={default:t,_ctx:xn},n=32):(t=String(t),r&64?(n=16,t=[Ri(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ui(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=k([t.class,r.class]));else if(e===`style`)t.style=ue([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Wi(e,t,n,r=null){L(e,t,7,[n,r])}var Gi=kr(),Ki=0;function qi(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||Gi,o={uid:Ki++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new we(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$r(i,a),emitsOptions:Ir(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=Pr.bind(null,o),e.ce&&e.ce(o),o}var G=null,Ji=()=>G||xn,Yi,Xi;{let e=le(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};Yi=t(`__VUE_INSTANCE_SETTERS__`,e=>G=e),Xi=t(`__VUE_SSR_SETTERS__`,e=>ea=e)}var Zi=e=>{let t=G;return Yi(e),e.scope.on(),()=>{e.scope.off(),Yi(t)}},Qi=()=>{G&&G.scope.off(),Yi(null)};function $i(e){return e.vnode.shapeFlag&4}var ea=!1;function ta(e,t=!1,n=!1){t&&Xi(t);let{props:r,children:i}=e.vnode,a=$i(e);Jr(e,r,a,t),si(e,i,n||t);let o=a?na(e,t):void 0;return t&&Xi(!1),o}function na(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,pr);let{setup:r}=n;if(r){Ve();let n=e.setupContext=r.length>1?ca(e):null,i=Zi(e),a=nn(r,e,0,[e.props,n]),o=y(a);if(He(),i(),(o||e.sp)&&!Wn(e)&&zn(e),o){if(a.then(Qi,Qi),t)return a.then(n=>{ra(e,n,t)}).catch(t=>{rn(t,e,0)});e.asyncDep=a}else ra(e,a,t)}else oa(e,t)}function ra(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=qt(t)),oa(e,n)}var ia,aa;function oa(e,t,n){let i=e.type;if(!e.render){if(!t&&ia&&!i.render){let t=i.template||br(e).template;if(t){let{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:o}=i;i.render=ia(t,s(s({isCustomElement:n,delimiters:a},r),o))}}e.render=i.render||r,aa&&aa(e)}{let t=Zi(e);Ve();try{gr(e)}finally{He(),t()}}}var sa={get(e,t){return N(e,`get`,``),e[t]}};function ca(e){return{attrs:new Proxy(e.attrs,sa),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function la(e){return e.exposed?e.exposeProxy||=new Proxy(qt(zt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in dr)return dr[n](e)},has(e,t){return t in e||t in dr}}):e.proxy}function ua(e){return h(e)&&`__vccOpts`in e}var da=(e,t)=>Yt(e,t,ea);function fa(e,t,n){try{Oi(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?ji(t)?W(e,null,[t]):W(e,t):W(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ji(n)&&(n=[n]),W(e,t,n))}finally{Oi(1)}}var pa=`3.5.38`,ma=void 0,ha=typeof window<`u`&&window.trustedTypes;if(ha)try{ma=ha.createPolicy(`vue`,{createHTML:e=>e})}catch{}var ga=ma?e=>ma.createHTML(e):e=>e,_a=`http://www.w3.org/2000/svg`,va=`http://www.w3.org/1998/Math/MathML`,ya=typeof document<`u`?document:null,ba=ya&&ya.createElement(`template`),xa={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?ya.createElementNS(_a,e):t===`mathml`?ya.createElementNS(va,e):n?ya.createElement(e,{is:n}):ya.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>ya.createTextNode(e),createComment:e=>ya.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ya.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{ba.innerHTML=ga(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=ba.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Sa=Symbol(`_vtc`);function Ca(e,t,n){let r=e[Sa];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var wa=Symbol(`_vod`),Ta=Symbol(`_vsh`),Ea=Symbol(``),Da=/(?:^|;)\s*display\s*:/;function Oa(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t)if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Aa(r,t,``)}else for(let e in t)n[e]??Aa(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?Aa(r,i,``):Pa(e,i,!g(t)&&t?t[i]:void 0,o)||Aa(r,i,o)}}else if(i){if(t!==n){let e=r[Ea];e&&(n+=`;`+e),r.cssText=n,a=Da.test(n)}}else t&&e.removeAttribute(`style`);wa in e&&(e[wa]=a?r.display:``,e[Ta]&&(r.display=`none`))}var ka=/\s*!important$/;function Aa(e,t,n){if(d(n))n.forEach(n=>Aa(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=Na(e,t);ka.test(n)?e.setProperty(E(r),n.replace(ka,``),`important`):e[r]=n}}var ja=[`Webkit`,`Moz`,`ms`],Ma={};function Na(e,t){let n=Ma[t];if(n)return n;let r=T(t);if(r!==`filter`&&r in e)return Ma[t]=r;r=ie(r);for(let n=0;n<ja.length;n++){let i=ja[n]+r;if(i in e)return Ma[t]=i}return t}function Pa(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&g(r)&&n===r}var Fa=`http://www.w3.org/1999/xlink`;function Ia(e,t,n,r,i,a=ge(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Fa,t.slice(6,t.length)):e.setAttributeNS(Fa,t,n):n==null||a&&!_e(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function La(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?ga(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=_e(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Ra(e,t,n,r){e.addEventListener(t,n,r)}function za(e,t,n,r){e.removeEventListener(t,n,r)}var Ba=Symbol(`_vei`);function Va(e,t,n,r,i=null){let a=e[Ba]||(e[Ba]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Ua(t);r?Ra(e,n,a[t]=qa(r,i),s):o&&(za(e,n,o,s),a[t]=void 0)}}var Ha=/(?:Once|Passive|Capture)$/;function Ua(e){let t;if(Ha.test(e)){t={};let n;for(;n=e.match(Ha);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):E(e.slice(2)),t]}var Wa=0,Ga=Promise.resolve(),Ka=()=>Wa||=(Ga.then(()=>Wa=0),Date.now());function qa(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(d(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&L(e,t,5,a)}}else L(r,t,5,[e])};return n.value=e,n.attached=Ka(),n}var Ja=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ya=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?Ca(e,r,c):t===`style`?Oa(e,n,r):a(t)?o(t)||Va(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):Xa(e,t,r,c))?(La(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Ia(e,t,r,c,s,t!==`value`)):e._isVueCE&&(Za(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?La(e,T(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Ia(e,t,r,c))};function Xa(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&Ja(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return Ja(t)&&g(n)?!1:t in e}function Za(e,t){let n=e._def.props;if(!n)return!1;let r=T(t);return Array.isArray(n)?n.some(e=>T(e)===r):Object.keys(n).some(e=>T(e)===r)}var Qa=s({patchProp:Ya},xa),$a;function eo(){return $a||=li(Qa)}var to=((...e)=>{let t=eo().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=ro(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,no(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function no(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function ro(e){return g(e)?document.querySelector(e):e}var io=()=>{let e=Ht(window.innerWidth),t=Ht(window.innerHeight),n=()=>{e.value=window.innerWidth,t.value=window.innerHeight};return $n(()=>{e.value=window.innerWidth,t.value=window.innerHeight,window.addEventListener(`resize`,n)}),rr(()=>{window.removeEventListener(`resize`,n)}),{width:e,height:t}},ao=`/yourbodyandmind/assets/logoflowerblack-BMWlCwK3.png`,oo=`/yourbodyandmind/assets/logoflower-Bwv6azTc.png`,so={class:`logo`},co={key:0,src:ao,alt:`Logo`},lo={key:1,src:oo,alt:`Logo`},uo=Rn({__name:`NavbarMobile`,setup(e){let t=Ht(!1),n=Ht(!1),r=()=>{t.value=window.scrollY>10},i=()=>{n.value=!n.value,n.value?document.body.style.overflow=`hidden`:document.body.style.overflow=``},a=()=>{n.value=!1,document.body.style.overflow=``};return $n(()=>{window.addEventListener(`scroll`,r)}),rr(()=>{window.removeEventListener(`scroll`,r),document.body.style.overflow=``}),(e,r)=>(Ti(),Ai(V,null,[U(`div`,{class:k([`navbar-mobile`,{scrolled:t.value}])},[U(`div`,so,[t.value?(Ti(),Ai(`img`,co)):(Ti(),Ai(`img`,lo))]),U(`div`,{class:k([`hamburger-menu`,{open:n.value}]),onClick:i},[...r[0]||=[U(`span`,null,null,-1),U(`span`,null,null,-1),U(`span`,null,null,-1)]],2)],2),U(`div`,{class:k([`menu-overlay`,{active:n.value}]),onClick:a},null,2),U(`div`,{class:k([`side-menu`,{open:n.value}])},[U(`button`,{class:`close-btn`,onClick:a,"aria-label":`Close menu`},[...r[1]||=[U(`span`,null,`×`,-1)]]),U(`nav`,{class:`menu-content`},[U(`ul`,null,[U(`li`,null,[U(`a`,{href:`#behandlingar`,onClick:a},`Behandlingar`)]),U(`li`,null,[U(`a`,{href:`#about`,onClick:a},`Samtal`)]),U(`li`,null,[U(`a`,{href:`https://www.bokadirekt.se/places/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195`,target:`_blank`,onClick:a},`Boka`)])])])],2)],64))}}),fo=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},po=fo(uo,[[`__scopeId`,`data-v-72e8a4ea`]]),mo={},ho={class:`treatments-wrapper`};function go(e,t){return Ti(),Ai(`div`,ho,[...t[0]||=[zi(`<div class="treatments-header" data-v-80c7b381><h2 id="behandlingar" data-v-80c7b381>Behandlingar</h2><div class="treatments-container" data-v-80c7b381><div class="treatments-title" data-v-80c7b381><h3 data-v-80c7b381>Vishesh</h3><div class="buttons" data-v-80c7b381><a href="https://www.bokadirekt.se/boka-tjanst/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195/vishesh-massagebehandling-3416007" target="_blank" data-v-80c7b381><button class="treatment-button" data-v-80c7b381>Boka</button></a></div></div><div class="treatments-text" data-v-80c7b381><p data-v-80c7b381> Vishesh är en lite kraftigare helkroppsmassage där trycket ökar jämfört med abhyanga. Vishesh har abhyanga effekter men kan också lösa djupt liggande spänningar. Det ökade trycket i de svepande rörelserna stimulerar musklerna. Behandlingen förbättrar cirkulationen och frigör slaggämnen. Behandlingen inleds med massage av hela kroppen med varm olja och svepande rörelser för att värma upp kroppen inför själva Vishesh behandlingen. Avslappnande och skön för den som känner sig tung i kroppen. Observera att i behandlingstiden på 80 min ingår 10 minuters vila. </p></div></div><div class="treatments-container" data-v-80c7b381><div class="treatments-title" data-v-80c7b381><h3 data-v-80c7b381>Abhyanga</h3><div class="buttons" data-v-80c7b381><a href="https://www.bokadirekt.se/boka-tjanst/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195/abhyanga-massagebehandling-3419098" target="_blank" data-v-80c7b381><button class="treatment-button" data-v-80c7b381>Boka</button></a></div></div><div class="treatments-text" data-v-80c7b381><p data-v-80c7b381> Abhyanga är en mycket behaglig helkroppsmassage med varm sesamolja. Kroppen masseras systematiskt med ett relativt lätt tryck och lugna, svepande rörelser. Behandlingen börjar med att massera huvud, rygg, ansikte och framsida kropp, därefter baksida kropp och nacke. Avslutas med en vila på ca 10 min. Behandlingen stärker nervsystemet och är djupt avslappnande för kropp och sinne. Cirkulationen och vitaliteten ökar och muskler och leder mjukas upp. Värmen, oljan och rörelserna renar också kroppen från slaggprodukter. Abhyanga är speciellt välgörande vid vata- obalanser, stress och utmattning men passar alla doshor. Observera att i behandlingstiden ingår ca 10 min vila. </p></div></div></div>`,1)]])}var _o=fo(mo,[[`render`,go],[`__scopeId`,`data-v-80c7b381`]]),vo=`/yourbodyandmind/assets/hero-Gv7NfW6o.jpg`,yo=`/yourbodyandmind/assets/towel-BnUCj6Sz.png`,bo={},xo={class:`treatments-wrapper`};function So(e,t){return Ti(),Ai(`div`,xo,[...t[0]||=[zi(`<div class="treatments-header" data-v-77ad9f5c><h2 id="samtal" data-v-77ad9f5c>Samtal</h2><div class="treatments-container" data-v-77ad9f5c><div class="treatments-title" data-v-77ad9f5c><h3 data-v-77ad9f5c>Samtal</h3><div class="buttons" data-v-77ad9f5c><a href="https://www.bokadirekt.se/boka-tjanst/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195/vishesh-massagebehandling-3416007" target="_blank" data-v-77ad9f5c><button class="treatment-button" data-v-77ad9f5c>Boka</button></a></div></div><div class="treatments-text" data-v-77ad9f5c><p data-v-77ad9f5c> Mina samtal vänder sig till dig som känner att något behöver förändras – kanske står du inför ett vägskäl, upplever obalans, känner dig vilsen eller längtar efter att förstå dig själv på ett djupare plan. Oavsett om det handlar om arbete, relationer, livsbalans eller din personliga utveckling, utgår vi alltid från samma plats: där du är just nu. Samtalen ger utrymme att stanna upp, reflektera och skapa klarhet i det som är viktigt för dig. Tillsammans utforskar vi dina tankar, känslor och drivkrafter – med målet att du ska känna större trygghet, balans och mening i din vardag. </p></div></div></div>`,1)]])}var Co=fo(bo,[[`render`,So],[`__scopeId`,`data-v-77ad9f5c`]]),wo={id:`home`,class:`hero-section-mobile`},To=fo(Rn({__name:`Start`,setup(e){let t=[vo,yo],n=Ht(0),r=null;return $n(()=>{r=window.setInterval(()=>{n.value=(n.value+1)%t.length},3e3)}),rr(()=>{r!==null&&clearInterval(r)}),(e,r)=>(Ti(),Ai(V,null,[U(`div`,wo,[(Ti(),Ai(V,null,lr(t,(e,t)=>U(`div`,{key:t,class:k([`hero-background`,{active:n.value===t}]),style:ue({backgroundImage:`url(${e})`})},null,6)),64)),r[0]||=zi(`<div class="hero-overlay" data-v-bed332ab></div><div class="hero-content" data-v-bed332ab><div class="hero-img" data-v-bed332ab><img src="/yourbodyandmind/assets/logotext-BoZzUugT.png" alt="Logo" data-v-bed332ab></div><div class="hero-buttons" data-v-bed332ab><a href="https://www.bokadirekt.se/places/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195" target="_blank" data-v-bed332ab><button class="hero-button" data-v-bed332ab>Boka</button></a><button class="hero-button" data-v-bed332ab>Läs mer</button></div></div>`,2)]),r[1]||=U(`div`,{id:`about`,class:`hero-text`},[U(`div`,{class:`hero-text-img`},[U(`img`,{src:`/yourbodyandmind/assets/Profilbild-DGCdpb7l.jpg`,alt:`Logo`}),U(`p`,null,` Jag är utbildad beteendevetare, ayuryogalärare och ayurvedisk massageterapeut med ett helhetsperspektiv på hälsa och välbefinnande. I mitt arbete utgår jag från att kropp och sinne är nära sammankopplade – när den ena delen får omsorg påverkas även den andra. Jag möter varje person med närvaro, respekt och lyhördhet. Min ambition är att skapa en trygg och rofylld stund där du får landa, släppa vardagens tempo och återknyta kontakten med dig själv. `)])],-1),W(_o),W(Co)],64))}}),[[`__scopeId`,`data-v-bed332ab`]]);function Eo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Do(e){if(Array.isArray(e))return e}function Oo(e){if(Array.isArray(e))return Eo(e)}function ko(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Ao(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,Vo(r.key),r)}}function jo(e,t,n){return t&&Ao(e.prototype,t),n&&Ao(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Mo(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=Uo(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function K(e,t,n){return(t=Vo(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function No(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Po(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function Fo(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Io(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Lo(Object(n),!0).forEach(function(t){K(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lo(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ro(e,t){return Do(e)||Po(e,t)||Uo(e,t)||Fo()}function zo(e){return Oo(e)||No(e)||Uo(e)||Io()}function Bo(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Vo(e){var t=Bo(e,`string`);return typeof t==`symbol`?t:t+``}function Ho(e){"@babel/helpers - typeof";return Ho=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Ho(e)}function Uo(e,t){if(e){if(typeof e==`string`)return Eo(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Eo(e,t):void 0}}var Wo=function(){},Go={},Ko={},qo=null,Jo={mark:Wo,measure:Wo};try{typeof window<`u`&&(Go=window),typeof document<`u`&&(Ko=document),typeof MutationObserver<`u`&&(qo=MutationObserver),typeof performance<`u`&&(Jo=performance)}catch{}var Yo=(Go.navigator||{}).userAgent,Xo=Yo===void 0?``:Yo,Zo=Go,J=Ko,Qo=qo,$o=Jo;Zo.document;var es=!!J.documentElement&&!!J.head&&typeof J.addEventListener==`function`&&typeof J.createElement==`function`,ts=~Xo.indexOf(`MSIE`)||~Xo.indexOf(`Trident/`),ns,rs=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,is=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,as={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},os={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ss=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],Y=`classic`,cs=`duotone`,ls=`sharp`,us=`sharp-duotone`,ds=`chisel`,fs=`etch`,ps=`graphite`,ms=`jelly`,hs=`jelly-duo`,gs=`jelly-fill`,_s=`mosaic`,vs=`notdog`,ys=`notdog-duo`,bs=`pixel`,xs=`slab`,Ss=`slab-duo`,Cs=`slab-press`,ws=`slab-press-duo`,Ts=`thumbprint`,Es=`utility`,Ds=`utility-duo`,Os=`utility-fill`,ks=`vellum`,As=`whiteboard`,js=`Classic`,Ms=`Duotone`,Ns=`Sharp`,Ps=`Sharp Duotone`,Fs=`Chisel`,Is=`Etch`,Ls=`Graphite`,Rs=`Jelly`,zs=`Jelly Duo`,Bs=`Jelly Fill`,Vs=`Mosaic`,Hs=`Notdog`,Us=`Notdog Duo`,Ws=`Pixel`,Gs=`Slab`,Ks=`Slab Duo`,qs=`Slab Press`,Js=`Slab Press Duo`,Ys=`Thumbprint`,Xs=`Utility`,Zs=`Utility Duo`,Qs=`Utility Fill`,$s=`Vellum`,ec=`Whiteboard`,tc=[Y,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws,Ts,Es,Ds,Os,ks,As];ns={},K(K(K(K(K(K(K(K(K(K(ns,Y,js),cs,Ms),ls,Ns),us,Ps),ds,Fs),fs,Is),ps,Ls),ms,Rs),hs,zs),gs,Bs),K(K(K(K(K(K(K(K(K(K(ns,_s,Vs),vs,Hs),ys,Us),bs,Ws),xs,Gs),Ss,Ks),Cs,qs),ws,Js),Ts,Ys),Es,Xs),K(K(K(K(ns,Ds,Zs),Os,Qs),ks,$s),As,ec);var nc={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},rc={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},ic=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),ac={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},oc=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],sc={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},cc=[`kit`];K(K({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var lc={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},uc={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},dc={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},fc={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},pc,mc={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},hc=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];pc={},K(K(K(K(K(K(K(K(K(K(pc,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),K(K(K(K(K(K(K(K(K(K(pc,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),K(K(K(K(pc,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),K(K({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var gc={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},_c={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},vc={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},yc=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(hc,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),bc=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],xc=[1,2,3,4,5,6,7,8,9,10],Sc=xc.concat([11,12,13,14,15,16,17,18,19,20]),Cc=[].concat(zo(Object.keys(_c)),bc,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,mc.GROUP,mc.SWAP_OPACITY,mc.PRIMARY,mc.SECONDARY],xc.map(function(e){return`${e}x`}),Sc.map(function(e){return`w-${e}`})),wc={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},Tc=`___FONT_AWESOME___`,Ec=16,Dc=`fa`,Oc=`svg-inline--fa`,kc=`data-fa-i2svg`,Ac=`data-fa-pseudo-element`,jc=`data-fa-pseudo-element-pending`,Mc=`data-prefix`,Nc=`data-icon`,Pc=`fontawesome-i2svg`,Fc=`async`,Ic=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Lc=[`::before`,`::after`,`:before`,`:after`],Rc=function(){try{return!0}catch{return!1}}();function zc(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[Y]}})}var Bc=q({},as);Bc[Y]=q(q(q(q({},{"fa-duotone":`duotone`}),as[Y]),sc.kit),sc[`kit-duotone`]);var Vc=zc(Bc),Hc=q({},ac);Hc[Y]=q(q(q(q({},{duotone:`fad`}),Hc[Y]),fc.kit),fc[`kit-duotone`]);var Uc=zc(Hc),Wc=q({},vc);Wc[Y]=q(q({},Wc[Y]),dc.kit);var Gc=zc(Wc),Kc=q({},gc);Kc[Y]=q(q({},Kc[Y]),lc.kit),zc(Kc);var qc=rs,Jc=`fa-layers-text`,Yc=is;zc(q({},nc));var Xc=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Zc=os,Qc=[].concat(zo(cc),zo(Cc)),$c=Zo.FontAwesomeConfig||{};function el(e){var t=J.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function tl(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}J&&typeof J.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=Ro(e,2),n=t[0],r=t[1],i=tl(el(n));i!=null&&($c[r]=i)});var nl={styleDefault:`solid`,familyDefault:Y,cssPrefix:Dc,replacementClass:Oc,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};$c.familyPrefix&&($c.cssPrefix=$c.familyPrefix);var rl=q(q({},nl),$c);rl.autoReplaceSvg||(rl.observeMutations=!1);var X={};Object.keys(nl).forEach(function(e){Object.defineProperty(X,e,{enumerable:!0,set:function(t){rl[e]=t,il.forEach(function(e){return e(X)})},get:function(){return rl[e]}})}),Object.defineProperty(X,"familyPrefix",{enumerable:!0,set:function(e){rl.cssPrefix=e,il.forEach(function(e){return e(X)})},get:function(){return rl.cssPrefix}}),Zo.FontAwesomeConfig=X;var il=[];function al(e){return il.push(e),function(){il.splice(il.indexOf(e),1)}}var ol=Ec,sl={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function cl(e){if(!(!e||!es)){var t=J.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=J.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return J.head.insertBefore(t,r),e}}var ll=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function ul(){for(var e=12,t=``;e-- >0;)t+=ll[Math.random()*62|0];return t}function dl(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function fl(e){return e.classList?dl(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function pl(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function ml(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${pl(e[n])}" `},``).trim()}function hl(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function gl(e){return e.size!==sl.size||e.x!==sl.x||e.y!==sl.y||e.rotate!==sl.rotate||e.flipX||e.flipY}function _l(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function vl(e){var t=e.transform,n=e.width,r=n===void 0?Ec:n,i=e.height,a=i===void 0?Ec:i,o=e.startCentered,s=o===void 0?!1:o,c=``;return s&&ts?c+=`translate(${t.x/ol-r/2}em, ${t.y/ol-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/ol}em), calc(-50% + ${t.y/ol}em)) `:c+=`translate(${t.x/ol}em, ${t.y/ol}em) `,c+=`scale(${t.size/ol*(t.flipX?-1:1)}, ${t.size/ol*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var yl=`:root, :host {
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
}`;function bl(){var e=Dc,t=Oc,n=X.cssPrefix,r=X.replacementClass,i=yl;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var xl=!1;function Sl(){X.autoAddCss&&!xl&&(cl(bl()),xl=!0)}var Cl={mixout:function(){return{dom:{css:bl,insertCss:Sl}}},hooks:function(){return{beforeDOMElementCreation:function(){Sl()},beforeI2svg:function(){Sl()}}}},wl=Zo||{};wl[Tc]||(wl[Tc]={}),wl[Tc].styles||(wl[Tc].styles={}),wl[Tc].hooks||(wl[Tc].hooks={}),wl[Tc].shims||(wl[Tc].shims=[]);var Tl=wl[Tc],El=[],Dl=function(){J.removeEventListener(`DOMContentLoaded`,Dl),Ol=1,El.map(function(e){return e()})},Ol=!1;es&&(Ol=(J.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(J.readyState),Ol||J.addEventListener(`DOMContentLoaded`,Dl));function kl(e){es&&(Ol?setTimeout(e,0):El.push(e))}function Al(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?pl(e):`<${t} ${ml(r)}>${a.map(Al).join(``)}</${t}>`}function jl(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ml=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Nl=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Ml(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Pl(e){return zo(e).length===1?e.codePointAt(0).toString(16):null}function Fl(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Il(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n===void 0?!1:n,i=Fl(t);typeof Tl.hooks.addPack==`function`&&!r?Tl.hooks.addPack(e,Fl(t)):Tl.styles[e]=q(q({},Tl.styles[e]||{}),i),e===`fas`&&Il(`fa`,t)}var Ll=Tl.styles,Rl=Tl.shims,zl=Object.keys(Gc),Bl=zl.reduce(function(e,t){return e[t]=Object.keys(Gc[t]),e},{}),Vl=null,Hl={},Ul={},Wl={},Gl={},Kl={};function ql(e){return~Qc.indexOf(e)}function Jl(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!ql(i)?i:null}var Yl=function(){var e=function(e){return Nl(Ll,function(t,n,r){return t[r]=Nl(n,e,{}),t},{})};Hl=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Ul=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Kl=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in Ll||X.autoFetchSvg,n=Nl(Rl,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Wl=n.names,Gl=n.unicodes,Vl=iu(X.styleDefault,{family:X.familyDefault})};al(function(e){Vl=iu(e.styleDefault,{family:X.familyDefault})}),Yl();function Xl(e,t){return(Hl[e]||{})[t]}function Zl(e,t){return(Ul[e]||{})[t]}function Ql(e,t){return(Kl[e]||{})[t]}function $l(e){return Wl[e]||{prefix:null,iconName:null}}function eu(e){var t=Gl[e],n=Xl(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function tu(){return Vl}var nu=function(){return{prefix:null,iconName:null,rest:[]}};function ru(e){var t=Y,n=zl.reduce(function(e,t){return e[t]=`${X.cssPrefix}-${t}`,e},{});return tc.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Bl[r].includes(e)}))&&(t=r)}),t}function iu(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?Y:t,r=Vc[n][e];if(n===cs&&!e)return`fad`;var i=Uc[n][e]||Uc[n][r],a=e in Tl.styles?e:null;return i||a||null}function au(e){var t=[],n=null;return e.forEach(function(e){var r=Jl(X.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function ou(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var su=yc.concat(oc);function cu(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t===void 0?!1:t,r=null,i=ou(e.filter(function(e){return su.includes(e)})),a=ou(e.filter(function(e){return!su.includes(e)})),o=Ro(i.filter(function(e){return r=e,!ss.includes(e)}),1)[0],s=o===void 0?null:o,c=ru(i),l=q(q({},au(a)),{},{prefix:iu(s,{family:c})});return q(q(q({},l),fu({values:e,family:c,styles:Ll,config:X,canonical:l,givenPrefix:r})),lu(n,r,l))}function lu(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?$l(i):{},o=Ql(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!Ll.far&&Ll.fas&&!X.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var uu=tc.filter(function(e){return e!==Y||e!==cs}),du=Object.keys(vc).filter(function(e){return e!==Y}).map(function(e){return Object.keys(vc[e])}).flat();function fu(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===cs,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&uu.includes(n)&&(Object.keys(s).find(function(e){return du.includes(e)})||l.autoFetchSvg)&&(r.prefix=ic.get(n).defaultShortPrefixId,r.iconName=Ql(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=tu()||`fas`),r}var pu=function(){function e(){ko(this,e),this.definitions={}}return jo(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=q(q({},e.definitions[n]||{}),t[n]),Il(n,t[n]);var r=Gc[Y][n];r&&Il(r,t[n]),Yl()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),mu=[],hu={},gu={},_u=Object.keys(gu);function vu(e,t){var n=t.mixoutsTo;return mu=e,hu={},Object.keys(gu).forEach(function(e){_u.indexOf(e)===-1&&delete gu[e]}),mu.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),Ho(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){hu[e]||(hu[e]=[]),hu[e].push(r[e])})}e.provides&&e.provides(gu)}),n}function yu(e,t){var n=[...arguments].slice(2);return(hu[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function bu(e){var t=[...arguments].slice(1);(hu[e]||[]).forEach(function(e){e.apply(null,t)})}function xu(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return gu[e]?gu[e].apply(null,t):void 0}function Su(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||tu();if(t)return t=Ql(n,t)||t,jl(Cu.definitions,n,t)||jl(Tl.styles,n,t)}var Cu=new pu,Z={noAuto:function(){X.autoReplaceSvg=!1,X.observeMutations=!1,bu(`noAuto`)},config:X,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return es?(bu(`beforeI2svg`,e),xu(`pseudoElements2svg`,e),xu(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;X.autoReplaceSvg===!1&&(X.autoReplaceSvg=!0),X.observeMutations=!0,kl(function(){wu({autoReplaceSvgRoot:t}),bu(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(Ho(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ql(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=iu(e[0]);return{prefix:n,iconName:Ql(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${X.cssPrefix}-`)>-1||e.match(qc))){var r=cu(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||tu(),iconName:Ql(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=tu();return{prefix:i,iconName:Ql(i,e)||e}}}},library:Cu,findIconDefinition:Su,toHtml:Al},wu=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?J:e;(Object.keys(Tl.styles).length>0||X.autoFetchSvg)&&es&&X.autoReplaceSvg&&Z.dom.i2svg({node:t})};function Tu(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Al(e)})}}),Object.defineProperty(e,"node",{get:function(){if(es){var t=J.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function Eu(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(gl(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=hl(q(q({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Du(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${X.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:q(q({},i),{},{id:o}),children:r}]}]}function Ou(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function ku(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,f=r.found?r:n,p=f.width,m=f.height,h=[X.replacementClass,a?`${X.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:q(q({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!Ou(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[kc]=``);var _=q(q({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:q({},l.styles)}),v=r.found&&n.found?xu(`generateAbstractMask`,_)||{children:[],attributes:{}}:xu(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?Du(_):Eu(_)}function Au(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o===void 0?!1:o,c=q(q({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[kc]=``);var l=q({},a.styles);gl(i)&&(l.transform=vl({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=hl(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function ju(e){var t=e.content,n=e.extra,r=q(q({},n.attributes),{},{class:n.classes.join(` `)}),i=hl(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var Mu=Tl.styles;function Nu(e){var t=e[0],n=e[1],r=Ro(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${X.cssPrefix}-${Zc.GROUP}`},children:[{tag:`path`,attributes:{class:`${X.cssPrefix}-${Zc.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${X.cssPrefix}-${Zc.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var Pu={found:!1,width:512,height:512};function Fu(e,t){!Rc&&!X.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Iu(e,t){var n=t;return t===`fa`&&X.styleDefault!==null&&(t=tu()),new Promise(function(r,i){if(n===`fa`){var a=$l(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Mu[t]&&Mu[t][e]){var o=Mu[t][e];return r(Nu(o))}Fu(e,t),r(q(q({},Pu),{},{icon:X.showMissingIcons&&e&&xu(`missingIconAbstract`)||{}}))})}var Lu=function(){},Ru=X.measurePerformance&&$o&&$o.mark&&$o.measure?$o:{mark:Lu,measure:Lu},zu=`FA "7.3.0"`,Bu=function(e){return Ru.mark(`${zu} ${e} begins`),function(){return Vu(e)}},Vu=function(e){Ru.mark(`${zu} ${e} ends`),Ru.measure(`${zu} ${e}`,`${zu} ${e} begins`,`${zu} ${e} ends`)},Hu={begin:Bu,end:Vu},Uu=function(){};function Wu(e){return typeof(e.getAttribute?e.getAttribute(kc):null)==`string`}function Gu(e){var t=e.getAttribute?e.getAttribute(Mc):null,n=e.getAttribute?e.getAttribute(Nc):null;return t&&n}function Ku(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(X.replacementClass)}function qu(){return X.autoReplaceSvg===!0?Qu.replace:Qu[X.autoReplaceSvg]||Qu.replace}function Ju(e){return J.createElementNS(`http://www.w3.org/2000/svg`,e)}function Yu(e){return J.createElement(e)}function Xu(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Ju:Yu:t;if(typeof e==`string`)return J.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Xu(e,{ceFn:n}))}),r}function Zu(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Qu={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Xu(e),t)}),t.getAttribute(kc)===null&&X.keepOriginalSource){var n=J.createComment(Zu(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~fl(t).indexOf(X.replacementClass))return Qu.replace(e);var r=RegExp(`${X.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===X.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return Al(e)}).join(`
`);t.setAttribute(kc,``),t.innerHTML=a}};function $u(e){e()}function ed(e,t){var n=typeof t==`function`?t:Uu;if(e.length===0)n();else{var r=$u;X.mutateApproach===Fc&&(r=Zo.requestAnimationFrame||$u),r(function(){var t=qu(),r=Hu.begin(`mutate`);e.map(t),r(),n()})}}var td=!1;function nd(){td=!0}function rd(){td=!1}var id=null;function ad(e){if(Qo&&X.observeMutations){var t=e.treeCallback,n=t===void 0?Uu:t,r=e.nodeCallback,i=r===void 0?Uu:r,a=e.pseudoElementsCallback,o=a===void 0?Uu:a,s=e.observeMutationsRoot,c=s===void 0?J:s;id=new Qo(function(e){if(!td){var t=tu();dl(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Wu(e.addedNodes[0])&&(X.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&X.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Wu(e.target)&&~Xc.indexOf(e.attributeName))if(e.attributeName===`class`&&Gu(e.target)){var r=cu(fl(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Mc,a||t),s&&e.target.setAttribute(Nc,s)}else Ku(e.target)&&i(e.target)})}}),es&&id.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function od(){id&&id.disconnect()}function sd(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function cd(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=cu(fl(e));return i.prefix||=tu(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Zl(i.prefix,e.innerText)||Xl(i.prefix,Pl(e.innerText))),!i.iconName&&X.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function ld(e){return dl(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function ud(){return{iconName:null,prefix:null,transform:sl,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function dd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=cd(e),r=n.iconName,i=n.prefix,a=n.rest,o=ld(e),s=yu(`parseNodeAttributes`,{},e);return q({iconName:r,prefix:i,transform:sl,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?sd(e):[],attributes:o}},s)}var fd=Tl.styles;function pd(e){var t=X.autoReplaceSvg===`nest`?dd(e,{styleParser:!1}):dd(e);return~t.extra.classes.indexOf(Jc)?xu(`generateLayersText`,e,t):xu(`generateSvgReplacementMutation`,e,t)}function md(){return[].concat(zo(oc),zo(yc))}function hd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!es)return Promise.resolve();var n=J.documentElement.classList,r=function(e){return n.add(`${Pc}-${e}`)},i=function(e){return n.remove(`${Pc}-${e}`)},a=X.autoFetchSvg?md():ss.concat(Object.keys(fd));a.includes(`fa`)||a.push(`fa`);var o=[`.${Jc}:not([${kc}])`].concat(a.map(function(e){return`.${e}:not([${kc}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=dl(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Hu.begin(`onTree`),l=s.reduce(function(e,t){try{var n=pd(t);n&&e.push(n)}catch(e){Rc||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){ed(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function gd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pd(e).then(function(e){e&&ed([e],t)})}function _d(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Su(t||{}),i=n.mask;return i&&=(i||{}).icon?i:Su(i||{}),e(r,q(q({},n),{},{mask:i}))}}var vd=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?sl:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return Tu(q({type:`icon`},e),function(){return bu(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),ku({icons:{main:Nu(v),mask:s?Nu(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:q(q({},sl),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},yd={mixout:function(){return{icon:_d(vd)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=hd,e.nodeCallback=gd,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?J:t,r=e.callback;return hd(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Iu(n,r),o.iconName?Iu(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=Ro(o,2),u=l[0],d=l[1];t([e,ku({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=hl(a);o.length>0&&(n.style=o);var s;return gl(i)&&(s=xu(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},bd={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return Tu({type:`layer`},function(){bu(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${X.cssPrefix}-layers`].concat(zo(r)).join(` `)},children:n}]})}}}},xd={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Tu({type:`counter`,content:e},function(){return bu(`beforeDOMElementCreation`,{content:e,params:t}),ju({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${X.cssPrefix}-layers-counter`].concat(zo(a))}})})}}}},Sd={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?sl:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return Tu({type:`text`,content:e},function(){return bu(`beforeDOMElementCreation`,{content:e,params:t}),Au({content:e,transform:q(q({},sl),r),extra:{attributes:s,styles:l,classes:[`${X.cssPrefix}-layers-text`].concat(zo(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(ts){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Au({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},Cd=RegExp(`"`,`ug`),wd=[1105920,1112319],Td=q(q(q(q({},{FontAwesome:{normal:`fas`,400:`fas`}}),rc),wc),uc),Ed=Object.keys(Td).reduce(function(e,t){return e[t.toLowerCase()]=Td[t],e},{}),Dd=Object.keys(Ed).reduce(function(e,t){var n=Ed[t];return e[t]=n[900]||zo(Object.entries(n))[0][1],e},{});function Od(e){return Pl(zo(e.replace(Cd,``))[0]||``)}function kd(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(Cd,``),r=n.codePointAt(0),i=r>=wd[0]&&r<=wd[1],a=n.length===2?n[0]===n[1]:!1;return i||a||t}function Ad(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(Ed[n]||{})[i]||Dd[n]}function jd(e,t){var n=`${jc}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=dl(e.children).filter(function(e){return e.getAttribute(Ac)===t})[0],o=Zo.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Yc),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Ad(s,l),p=Od(d),m=c[0].startsWith(`FontAwesome`),h=kd(o),g=Xl(f,p),_=g;if(m){var v=eu(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Mc)!==f||a.getAttribute(Nc)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=ud(),b=y.extra;b.attributes[Ac]=t,Iu(g,f).then(function(i){var a=ku(q(q({},y),{},{icons:{main:i,mask:nu()},prefix:f,iconName:_,extra:b,watchable:!0})),o=J.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return Al(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Md(e){return Promise.all([jd(e,`::before`),jd(e,`::after`)])}function Nd(e){return e.parentNode!==document.head&&!~Ic.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ac)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var Pd=function(e){return!!e&&Lc.some(function(t){return e.includes(t)})},Fd=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=Mo(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(Pd(a)){var o=Lc.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function Id(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(es){var n;if(t)n=e;else if(X.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=Mo(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=Mo(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=Mo(Fd(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){X.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=dl(n).filter(Nd).map(Md),i=Hu.begin(`searchPseudoElements`);nd(),Promise.all(r).then(function(){i(),rd(),e()}).catch(function(){i(),rd(),t()})})}}var Ld={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=Id,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?J:t;X.searchPseudoElements&&Id(n)}}},Rd=!1,zd={mixout:function(){return{dom:{unwatch:function(){nd(),Rd=!0}}}},hooks:function(){return{bootstrap:function(){ad(yu(`mutationObserverCallbacks`,{}))},noAuto:function(){od()},watch:function(e){var t=e.observeMutationsRoot;Rd?rd():ad(yu(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Bd=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Vd={mixout:function(){return{parse:{transform:function(e){return Bd(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Bd(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:q({},a.outer),children:[{tag:`g`,attributes:q({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:q(q({},t.icon.attributes),a.path)}]}]}}}},Hd={x:0,y:0,width:`100%`,height:`100%`};function Ud(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Wd(e){return e.tag===`g`?e.children:[e]}vu([Cl,yd,bd,xd,Sd,Ld,zd,Vd,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?cu(n.split(` `).map(function(e){return e.trim()})):nu();return r.prefix||=tu(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=_l({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:q(q({},Hd),{},{fill:`white`})},p=c.children?{children:c.children.map(Ud)}:{},m={tag:`g`,attributes:q({},d.inner),children:[Ud(q({tag:c.tag,attributes:q(q({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:q({},d.outer),children:[m]},g=`mask-${a||ul()}`,_=`clip-${a||ul()}`,v={tag:`mask`,attributes:q(q({},Hd),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Wd(u)},v]};return t.push(y,{tag:`rect`,attributes:q({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Hd)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;Zo.matchMedia&&(t=Zo.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:q(q({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=q(q({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:q(q({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:q(q({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:q(q({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:q(q({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:q(q({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:q(q({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:q(q({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:Z}),Z.noAuto,Z.config,Z.library,Z.dom;var Gd=Z.parse;Z.findIconDefinition,Z.toHtml;var Kd=Z.icon;Z.layer,Z.text,Z.counter;function qd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Jd(e){if(Array.isArray(e))return qd(e)}function Q(e,t,n){return(t=nf(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yd(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Xd(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Zd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Zd(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zd(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Qd(e,t){if(e==null)return{};var n,r,i=$d(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function $d(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function ef(e){return Jd(e)||Yd(e)||af(e)||Xd()}function tf(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function nf(e){var t=tf(e,`string`);return typeof t==`symbol`?t:t+``}function rf(e){"@babel/helpers - typeof";return rf=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},rf(e)}function af(e,t){if(e){if(typeof e==`string`)return qd(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?qd(e,t):void 0}}function of(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Q({},e,t):{}}function sf(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip===`horizontal`||e.flip===`both`,"fa-flip-vertical":e.flip===`vertical`||e.flip===`both`},Q(Q(Q(Q(Q(Q(Q(Q(Q(Q(t,`fa-${e.size}`,e.size!==null),`fa-rotate-${e.rotation}`,e.rotation!==null),`fa-rotate-by`,e.rotateBy),`fa-pull-${e.pull}`,e.pull!==null),`fa-swap-opacity`,e.swapOpacity),`fa-bounce`,e.bounce),`fa-shake`,e.shake),`fa-beat`,e.beat),`fa-fade`,e.fade),`fa-beat-fade`,e.beatFade),Q(Q(Q(Q(Q(Q(Q(Q(Q(Q(t,`fa-flash`,e.flash),`fa-spin-pulse`,e.spinPulse),`fa-spin-reverse`,e.spinReverse),`fa-width-auto`,e.widthAuto),`fa-flip-360`,e.flip360),`fa-buzz`,e.buzz),`fa-float`,e.float),`fa-jello`,e.jello),`fa-spin-snap`,e.spinSnap),`fa-spin-snap-4`,e.spinSnap4),Q(Q(Q(t,`fa-spin-snap-8`,e.spinSnap8),`fa-swing`,e.swing),`fa-wag`,e.wag));return Object.keys(n).map(function(e){return n[e]?e:null}).filter(function(e){return e})}var cf=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},lf={exports:{}};(function(e){(function(t){var n=function(e,t,r){if(!l(t)||d(t)||f(t)||p(t)||c(t))return t;var i,a=0,o=0;if(u(t))for(i=[],o=t.length;a<o;a++)i.push(n(e,t[a],r));else for(var s in i={},t)Object.prototype.hasOwnProperty.call(t,s)&&(i[e(s,r)]=n(e,t[s],r));return i},r=function(e,t){t||={};var n=t.separator||`_`,r=t.split||/(?=[A-Z])/;return e.split(r).join(n)},i=function(e){return m(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():``}),e.substr(0,1).toLowerCase()+e.substr(1))},a=function(e){var t=i(e);return t.substr(0,1).toUpperCase()+t.substr(1)},o=function(e,t){return r(e,t).toLowerCase()},s=Object.prototype.toString,c=function(e){return typeof e==`function`},l=function(e){return e===Object(e)},u=function(e){return s.call(e)==`[object Array]`},d=function(e){return s.call(e)==`[object Date]`},f=function(e){return s.call(e)==`[object RegExp]`},p=function(e){return s.call(e)==`[object Boolean]`},m=function(e){return e-=0,e===e},h=function(e,t){var n=t&&`process`in t?t.process:t;return typeof n==`function`?function(t,r){return n(t,e,r)}:e},g={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(e,t){return n(h(i,t),e)},decamelizeKeys:function(e,t){return n(h(o,t),e,t)},pascalizeKeys:function(e,t){return n(h(a,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=g:t.humps=g})(cf)})(lf);var uf=lf.exports,df=[`gradientFill`],ff=[`class`,`style`],pf=[`type`,`stops`,`id`];function mf(e){return e.split(`;`).map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(`:`),r=uf.camelize(t.slice(0,n));return e[r]=t.slice(n+1).trim(),e},{})}function hf(e){return e.split(/\s+/).reduce(function(e,t){return e[t]=!0,e},{})}function gf(e,t){return fa(`stop`,$({key:`${t}-${e.offset}`,offset:e.offset,"stop-color":e.color},e.opacity!==void 0&&{"stop-opacity":e.opacity}))}function _f(e){if(typeof e==`string`)return e;var t=(e.children||[]).map(_f);return e.tag===`path`&&e.attributes&&`fill`in e.attributes?$($({},e),{},{attributes:$($({},e.attributes),{},{fill:void 0}),children:t}):$($({},e),{},{children:t})}function vf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e==`string`)return e;var r=t.gradientFill,i=r===void 0?null:r,a=Qd(t,df),o=i||`fill`in n?_f(e):e,s=(o.children||[]).map(function(e){return vf(e,{},{})}),c=Object.keys(o.attributes||{}).reduce(function(e,t){var n=o.attributes[t];switch(t){case`class`:e.class=hf(n);break;case`style`:e.style=mf(n);break;default:e.attrs[t]=n}return e},{attrs:{},class:{},style:{}});n.class;var l=n.style,u=l===void 0?{}:l,d=Qd(n,ff);if(i&&i.id&&(i.type===`linear`||i.type===`radial`)){var f=i.type,p=i.stops,m=p===void 0?[]:p,h=i.id,g=Qd(i,pf),_=fa(f===`linear`?`linearGradient`:`radialGradient`,$($({},g),{},{id:h}),m.map(gf));return fa(o.tag,$($($($({},a),{},{class:c.class,style:$($({},c.style),u)},c.attrs),d),{},{fill:`url(#${h})`}),[_].concat(ef(s)))}return fa(e.tag,$($($({},a),{},{class:c.class,style:$($({},c.style),u)},c.attrs),d),s)}var yf=!1;try{yf=!0}catch{}function bf(){if(!yf&&console&&typeof console.error==`function`){var e;(e=console).error.apply(e,arguments)}}function xf(e){if(e&&rf(e)===`object`&&e.prefix&&e.iconName&&e.icon)return e;if(Gd.icon)return Gd.icon(e);if(e===null)return null;if(rf(e)===`object`&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e==`string`)return{prefix:`fas`,iconName:e}}var Sf=Rn({name:`FontAwesomeIcon`,props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,`horizontal`,`vertical`,`both`].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return[`right`,`left`].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`1x`,`2x`,`3x`,`4x`,`5x`,`6x`,`7x`,`8x`,`9x`,`10x`].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1},gradientFill:{type:Object,default:null,validator:function(e){return typeof e.id!=`string`||!e.id?(console.warn(`FontAwesomeIcon: gradientFill.id must be a non-empty string`),!1):e.type!==`linear`&&e.type!==`radial`?(console.warn(`FontAwesomeIcon: gradientFill.type must be "linear" or "radial"`),!1):!0}},flip360:{type:Boolean,default:!1},buzz:{type:Boolean,default:!1},float:{type:Boolean,default:!1},jello:{type:Boolean,default:!1},spinSnap:{type:Boolean,default:!1},spinSnap4:{type:Boolean,default:!1},spinSnap8:{type:Boolean,default:!1},swing:{type:Boolean,default:!1},wag:{type:Boolean,default:!1}},setup:function(e,t){var n=t.attrs,r=da(function(){return xf(e.icon)}),i=da(function(){return of(`classes`,sf(e))}),a=da(function(){return of(`transform`,typeof e.transform==`string`?Gd.transform(e.transform):e.transform)}),o=da(function(){return of(`mask`,xf(e.mask))}),s=da(function(){var t=$($($($({},i.value),a.value),o.value),{},{symbol:e.symbol,maskId:e.maskId});return t.title=e.title,t.titleId=e.titleId,Kd(r.value,t)});An(s,function(e){if(!e)return bf(`Could not find one or more icon(s)`,r.value,o.value)},{immediate:!0}),e.gradientFill&&e.symbol&&bf(`gradientFill is not supported when symbol is true and will be ignored`);var c=da(function(){return s.value?vf(s.value.abstract[0],{gradientFill:e.symbol?null:e.gradientFill},n):null});return function(){return c.value}}}),Cf={prefix:`fab`,iconName:`facebook`,icon:[512,512,[62e3],`f09a`,`M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z`]},wf={prefix:`fab`,iconName:`instagram`,icon:[448,512,[],`f16d`,`M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`]},Tf={class:`footer-mobile`},Ef={class:`social-icons`},Df={href:`https://www.facebook.com/Ayurvediskabehandlingar`,target:`_blank`},Of={href:`https://www.instagram.com/ayurvediskabehandlingar/`,target:`_blank`},kf=fo(Rn({__name:`FooterMobile`,setup(e){return(e,t)=>(Ti(),Ai(`footer`,Tf,[t[0]||=U(`p`,null,`Järnvägsgatan 6, 645 43 Strängnäs`,-1),t[1]||=U(`p`,null,`Telefon: 0793-356491`,-1),t[2]||=U(`p`,null,[Ri(` E-post: `),U(`a`,{href:`mailto:sandra@yourbodyandmind.se`},`sandra@yourbodyandmind.se`)],-1),U(`div`,Ef,[U(`a`,Df,[W(Gt(Sf),{icon:Gt(Cf)},null,8,[`icon`])]),U(`a`,Of,[W(Gt(Sf),{icon:Gt(wf)},null,8,[`icon`])])])]))}}),[[`__scopeId`,`data-v-48d30e7b`]]),Af={key:0,class:`mobile-view`},jf={class:`mobile-container`},Mf={key:1,class:`desktop-view`},Nf={class:`desktop-container`};to(fo(Rn({__name:`App`,setup(e){let{width:t}=io(),n=da(()=>t.value<768);return(e,r)=>n.value?(Ti(),Ai(`div`,Af,[U(`div`,jf,[W(po),W(To),W(kf)])])):(Ti(),Ai(`div`,Mf,[U(`div`,Nf,[r[0]||=U(`h1`,null,`Desktop Layout`,-1),U(`p`,null,`Screen width: `+xe(Gt(t))+`px`,1),r[1]||=U(`p`,null,`This is the desktop version - coming soon!`,-1)])]))}}),[[`__scopeId`,`data-v-f1412a80`]])).mount(`#app`);