(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var t={},n=[],r=()=>{},i=()=>!1,a=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),o=e=>e.startsWith(`onUpdate:`),s=Object.assign,c=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},l=Object.prototype.hasOwnProperty,u=(e,t)=>l.call(e,t),d=Array.isArray,f=e=>x(e)===`[object Map]`,p=e=>x(e)===`[object Set]`,m=e=>x(e)===`[object Date]`,h=e=>typeof e==`function`,g=e=>typeof e==`string`,_=e=>typeof e==`symbol`,v=e=>typeof e==`object`&&!!e,y=e=>(v(e)||h(e))&&h(e.then)&&h(e.catch),b=Object.prototype.toString,x=e=>b.call(e),ee=e=>x(e).slice(8,-1),S=e=>x(e)===`[object Object]`,C=e=>g(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,te=e(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),ne=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},re=/-\w/g,w=ne(e=>e.replace(re,e=>e.slice(1).toUpperCase())),ie=/\B([A-Z])/g,T=ne(e=>e.replace(ie,`-$1`).toLowerCase()),ae=ne(e=>e.charAt(0).toUpperCase()+e.slice(1)),oe=ne(e=>e?`on${ae(e)}`:``),E=(e,t)=>!Object.is(e,t),se=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},D=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ce=e=>{let t=parseFloat(e);return isNaN(t)?e:t},le,ue=()=>le||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function de(e){if(d(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=g(r)?he(r):de(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(g(e)||v(e))return e}var fe=/;(?![^(]*\))/g,pe=/:([^]+)/,me=/\/\*[^]*?\*\//g;function he(e){let t={};return e.replace(me,``).split(fe).forEach(e=>{if(e){let n=e.split(pe);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function O(e){let t=``;if(g(e))t=e;else if(d(e))for(let n=0;n<e.length;n++){let r=O(e[n]);r&&(t+=r+` `)}else if(v(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var ge=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,_e=e(ge);ge+``;function ve(e){return!!e||e===``}function ye(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=be(e[r],t[r]);return n}function be(e,t){if(e===t)return!0;let n=m(e),r=m(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=_(e),r=_(t),n||r)return e===t;if(n=d(e),r=d(t),n||r)return n&&r?ye(e,t):!1;if(n=v(e),r=v(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!be(e[n],t[n]))return!1}}return String(e)===String(t)}var k,xe=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&k&&(k.active?(this.parent=k,this.index=(k.scopes||=[]).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){let t=k;try{return k=this,e()}finally{k=t}}}on(){++this._on===1&&(this.prevScope=k,k=this)}off(){if(this._on>0&&--this._on===0){if(k===this)k=this.prevScope;else{let e=k;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Se(){return k}var A,Ce=new WeakSet,we=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,k&&(k.active?k.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ce.has(this)&&(Ce.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Oe(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ve(this),je(this);let e=A,t=Le;A=this,Le=!0;try{return this.fn()}finally{Me(this),A=e,Le=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Fe(e);this.deps=this.depsTail=void 0,Ve(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ce.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ne(this)&&this.run()}get dirty(){return Ne(this)}},Te=0,Ee,De;function Oe(e,t=!1){if(e.flags|=8,t){e.next=De,De=e;return}e.next=Ee,Ee=e}function ke(){Te++}function Ae(){if(--Te>0)return;if(De){let e=De;for(De=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;Ee;){let t=Ee;for(Ee=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function je(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Me(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Fe(r),Ie(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Ne(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Pe(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Pe(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===He)||(e.globalVersion=He,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ne(e))))return;e.flags|=2;let t=e.dep,n=A,r=Le;A=e,Le=!0;try{je(e);let n=e.fn(e._value);(t.version===0||E(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{A=n,Le=r,Me(e),e.flags&=-3}}function Fe(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Fe(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ie(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Le=!0,Re=[];function ze(){Re.push(Le),Le=!1}function Be(){let e=Re.pop();Le=e===void 0?!0:e}function Ve(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=A;A=void 0;try{t()}finally{A=e}}}var He=0,Ue=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},We=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!A||!Le||A===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==A)t=this.activeLink=new Ue(A,this),A.deps?(t.prevDep=A.depsTail,A.depsTail.nextDep=t,A.depsTail=t):A.deps=A.depsTail=t,Ge(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=A.depsTail,t.nextDep=void 0,A.depsTail.nextDep=t,A.depsTail=t,A.deps===t&&(A.deps=e)}return t}trigger(e){this.version++,He++,this.notify(e)}notify(e){ke();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ae()}}};function Ge(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)Ge(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var Ke=new WeakMap,qe=Symbol(``),Je=Symbol(``),Ye=Symbol(``);function j(e,t,n){if(Le&&A){let t=Ke.get(e);t||Ke.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new We),r.map=t,r.key=n),r.track()}}function Xe(e,t,n,r,i,a){let o=Ke.get(e);if(!o){He++;return}let s=e=>{e&&e.trigger()};if(ke(),t===`clear`)o.forEach(s);else{let i=d(e),a=i&&C(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===Ye||!_(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(Ye)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(qe)),f(e)&&s(o.get(Je)));break;case`delete`:i||(s(o.get(qe)),f(e)&&s(o.get(Je)));break;case`set`:f(e)&&s(o.get(qe));break}}Ae()}function Ze(e){let t=M(e);return t===e?t:(j(t,`iterate`,Ye),It(e)?t:t.map(zt))}function Qe(e){return j(e=M(e),`iterate`,Ye),e}function $e(e,t){return Ft(e)?Bt(Pt(e)?zt(t):t):zt(t)}var et={__proto__:null,[Symbol.iterator](){return tt(this,Symbol.iterator,e=>$e(this,e))},concat(...e){return Ze(this).concat(...e.map(e=>d(e)?Ze(e):e))},entries(){return tt(this,`entries`,e=>(e[1]=$e(this,e[1]),e))},every(e,t){return rt(this,`every`,e,t,void 0,arguments)},filter(e,t){return rt(this,`filter`,e,t,e=>e.map(e=>$e(this,e)),arguments)},find(e,t){return rt(this,`find`,e,t,e=>$e(this,e),arguments)},findIndex(e,t){return rt(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return rt(this,`findLast`,e,t,e=>$e(this,e),arguments)},findLastIndex(e,t){return rt(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return rt(this,`forEach`,e,t,void 0,arguments)},includes(...e){return at(this,`includes`,e)},indexOf(...e){return at(this,`indexOf`,e)},join(e){return Ze(this).join(e)},lastIndexOf(...e){return at(this,`lastIndexOf`,e)},map(e,t){return rt(this,`map`,e,t,void 0,arguments)},pop(){return ot(this,`pop`)},push(...e){return ot(this,`push`,e)},reduce(e,...t){return it(this,`reduce`,e,t)},reduceRight(e,...t){return it(this,`reduceRight`,e,t)},shift(){return ot(this,`shift`)},some(e,t){return rt(this,`some`,e,t,void 0,arguments)},splice(...e){return ot(this,`splice`,e)},toReversed(){return Ze(this).toReversed()},toSorted(e){return Ze(this).toSorted(e)},toSpliced(...e){return Ze(this).toSpliced(...e)},unshift(...e){return ot(this,`unshift`,e)},values(){return tt(this,`values`,e=>$e(this,e))}};function tt(e,t,n){let r=Qe(e),i=r[t]();return r!==e&&!It(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var nt=Array.prototype;function rt(e,t,n,r,i,a){let o=Qe(e),s=o!==e&&!It(e),c=o[t];if(c!==nt[t]){let t=c.apply(e,a);return s?zt(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,$e(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function it(e,t,n,r){let i=Qe(e),a=i!==e&&!It(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=$e(e,t)),n.call(this,t,$e(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?$e(e,c):c}function at(e,t,n){let r=M(e);j(r,`iterate`,Ye);let i=r[t](...n);return(i===-1||i===!1)&&Lt(n[0])?(n[0]=M(n[0]),r[t](...n)):i}function ot(e,t,n=[]){ze(),ke();let r=M(e)[t].apply(e,n);return Ae(),Be(),r}var st=e(`__proto__,__v_isRef,__isVue`),ct=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(_));function lt(e){_(e)||(e=String(e));let t=M(this);return j(t,`has`,e),t.hasOwnProperty(e)}var ut=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Ot:Dt:i?Et:Tt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=d(e);if(!r){let e;if(a&&(e=et[t]))return e;if(t===`hasOwnProperty`)return lt}let o=Reflect.get(e,t,N(e)?e:n);if((_(t)?ct.has(t):st(t))||(r||j(e,`get`,t),i))return o;if(N(o)){let e=a&&C(t)?o:o.value;return r&&v(e)?Mt(e):e}return v(o)?r?Mt(o):At(o):o}},dt=class extends ut{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=d(e)&&C(t);if(!this._isShallow){let e=Ft(i);if(!It(n)&&!Ft(n)&&(i=M(i),n=M(n)),!a&&N(i)&&!N(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:u(e,t),s=Reflect.set(e,t,n,N(e)?e:r);return e===M(r)&&(o?E(n,i)&&Xe(e,`set`,t,n,i):Xe(e,`add`,t,n)),s}deleteProperty(e,t){let n=u(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&Xe(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!_(t)||!ct.has(t))&&j(e,`has`,t),n}ownKeys(e){return j(e,`iterate`,d(e)?`length`:qe),Reflect.ownKeys(e)}},ft=class extends ut{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},pt=new dt,mt=new ft,ht=new dt(!0),gt=e=>e,_t=e=>Reflect.getPrototypeOf(e);function vt(e,t,n){return function(...r){let i=this.__v_raw,a=M(i),o=f(a),c=e===`entries`||e===Symbol.iterator&&o,l=e===`keys`&&o,u=i[e](...r),d=n?gt:t?Bt:zt;return!t&&j(a,`iterate`,l?Je:qe),s(Object.create(u),{next(){let{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}}})}}function yt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function bt(e,t){let n={get(n){let r=this.__v_raw,i=M(r),a=M(n);e||(E(n,a)&&j(i,`get`,n),j(i,`get`,a));let{has:o}=_t(i),s=t?gt:e?Bt:zt;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&j(M(t),`iterate`,qe),t.size},has(t){let n=this.__v_raw,r=M(n),i=M(t);return e||(E(t,i)&&j(r,`has`,t),j(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=M(a),s=t?gt:e?Bt:zt;return!e&&j(o,`iterate`,qe),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return s(n,e?{add:yt(`add`),set:yt(`set`),delete:yt(`delete`),clear:yt(`clear`)}:{add(e){let n=M(this),r=_t(n),i=M(e),a=!t&&!It(e)&&!Ft(e)?i:e;return r.has.call(n,a)||E(e,a)&&r.has.call(n,e)||E(i,a)&&r.has.call(n,i)||(n.add(a),Xe(n,`add`,a,a)),this},set(e,n){!t&&!It(n)&&!Ft(n)&&(n=M(n));let r=M(this),{has:i,get:a}=_t(r),o=i.call(r,e);o||=(e=M(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?E(n,s)&&Xe(r,`set`,e,n,s):Xe(r,`add`,e,n),this},delete(e){let t=M(this),{has:n,get:r}=_t(t),i=n.call(t,e);i||=(e=M(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&Xe(t,`delete`,e,void 0,a),o},clear(){let e=M(this),t=e.size!==0,n=e.clear();return t&&Xe(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=vt(r,e,t)}),n}function xt(e,t){let n=bt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(u(n,r)&&r in t?n:t,r,i)}var St={get:xt(!1,!1)},Ct={get:xt(!1,!0)},wt={get:xt(!0,!1)},Tt=new WeakMap,Et=new WeakMap,Dt=new WeakMap,Ot=new WeakMap;function kt(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function At(e){return Ft(e)?e:Nt(e,!1,pt,St,Tt)}function jt(e){return Nt(e,!1,ht,Ct,Et)}function Mt(e){return Nt(e,!0,mt,wt,Dt)}function Nt(e,t,n,r,i){if(!v(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=kt(ee(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Pt(e){return Ft(e)?Pt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ft(e){return!!(e&&e.__v_isReadonly)}function It(e){return!!(e&&e.__v_isShallow)}function Lt(e){return e?!!e.__v_raw:!1}function M(e){let t=e&&e.__v_raw;return t?M(t):e}function Rt(e){return!u(e,`__v_skip`)&&Object.isExtensible(e)&&D(e,`__v_skip`,!0),e}var zt=e=>v(e)?At(e):e,Bt=e=>v(e)?Mt(e):e;function N(e){return e?e.__v_isRef===!0:!1}function Vt(e){return Ut(e,!1)}function Ht(e){return Ut(e,!0)}function Ut(e,t){return N(e)?e:new Wt(e,t)}var Wt=class{constructor(e,t){this.dep=new We,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:M(e),this._value=t?e:zt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||It(e)||Ft(e);e=n?e:M(e),E(e,t)&&(this._rawValue=e,this._value=n?e:zt(e),this.dep.trigger())}};function Gt(e){return N(e)?e.value:e}var Kt={get:(e,t,n)=>t===`__v_raw`?e:Gt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return N(i)&&!N(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function qt(e){return Pt(e)?e:new Proxy(e,Kt)}var Jt=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new We(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=He-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&A!==this)return Oe(this,!0),!0}get value(){let e=this.dep.track();return Pe(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function Yt(e,t,n=!1){let r,i;return h(e)?r=e:(r=e.get,i=e.set),new Jt(r,i,n)}var Xt={},Zt=new WeakMap,Qt=void 0;function $t(e,t=!1,n=Qt){if(n){let t=Zt.get(n);t||Zt.set(n,t=[]),t.push(e)}}function en(e,n,i=t){let{immediate:a,deep:o,once:s,scheduler:l,augmentJob:u,call:f}=i,p=e=>o?e:It(e)||o===!1||o===0?tn(e,1):tn(e),m,g,_,v,y=!1,b=!1;if(N(e)?(g=()=>e.value,y=It(e)):Pt(e)?(g=()=>p(e),y=!0):d(e)?(b=!0,y=e.some(e=>Pt(e)||It(e)),g=()=>e.map(e=>{if(N(e))return e.value;if(Pt(e))return p(e);if(h(e))return f?f(e,2):e()})):g=h(e)?n?f?()=>f(e,2):e:()=>{if(_){ze();try{_()}finally{Be()}}let t=Qt;Qt=m;try{return f?f(e,3,[v]):e(v)}finally{Qt=t}}:r,n&&o){let e=g,t=o===!0?1/0:o;g=()=>tn(e(),t)}let x=Se(),ee=()=>{m.stop(),x&&x.active&&c(x.effects,m)};if(s&&n){let e=n;n=(...t)=>{let n=e(...t);return ee(),n}}let S=b?Array(e.length).fill(Xt):Xt,C=e=>{if(!(!(m.flags&1)||!m.dirty&&!e))if(n){let t=m.run();if(e||o||y||(b?t.some((e,t)=>E(e,S[t])):E(t,S))){_&&_();let e=Qt;Qt=m;try{let e=[t,S===Xt?void 0:b&&S[0]===Xt?[]:S,v];S=t,f?f(n,3,e):n(...e)}finally{Qt=e}}}else m.run()};return u&&u(C),m=new we(g),m.scheduler=l?()=>l(C,!1):C,v=e=>$t(e,!1,m),_=m.onStop=()=>{let e=Zt.get(m);if(e){if(f)f(e,4);else for(let t of e)t();Zt.delete(m)}},n?a?C(!0):S=m.run():l?l(C.bind(null,!0),!0):m.run(),ee.pause=m.pause.bind(m),ee.resume=m.resume.bind(m),ee.stop=ee,ee}function tn(e,t=1/0,n){if(t<=0||!v(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,N(e))tn(e.value,t,n);else if(d(e))for(let r=0;r<e.length;r++)tn(e[r],t,n);else if(p(e)||f(e))e.forEach(e=>{tn(e,t,n)});else if(S(e)){for(let r in e)tn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&tn(e[r],t,n)}return e}function nn(e,t,n,r){try{return r?e(...r):e()}catch(e){an(e,t,n)}}function rn(e,t,n,r){if(h(e)){let i=nn(e,t,n,r);return i&&y(i)&&i.catch(e=>{an(e,t,n)}),i}if(d(e)){let i=[];for(let a=0;a<e.length;a++)i.push(rn(e[a],t,n,r));return i}}function an(e,n,r,i=!0){let a=n?n.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=n&&n.appContext.config||t;if(n){let t=n.parent,i=n.proxy,a=`https://vuejs.org/error-reference/#runtime-${r}`;for(;t;){let n=t.ec;if(n){for(let t=0;t<n.length;t++)if(n[t](e,i,a)===!1)return}t=t.parent}if(o){ze(),nn(o,null,10,[e,i,a]),Be();return}}on(e,r,a,i,s)}function on(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var P=[],sn=-1,cn=[],ln=null,un=0,dn=Promise.resolve(),fn=null;function pn(e){let t=fn||dn;return e?t.then(this?e.bind(this):e):t}function mn(e){let t=sn+1,n=P.length;for(;t<n;){let r=t+n>>>1,i=P[r],a=bn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function hn(e){if(!(e.flags&1)){let t=bn(e),n=P[P.length-1];!n||!(e.flags&2)&&t>=bn(n)?P.push(e):P.splice(mn(t),0,e),e.flags|=1,gn()}}function gn(){fn||=dn.then(xn)}function _n(e){d(e)?cn.push(...e):ln&&e.id===-1?ln.splice(un+1,0,e):e.flags&1||(cn.push(e),e.flags|=1),gn()}function vn(e,t,n=sn+1){for(;n<P.length;n++){let t=P[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;P.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function yn(e){if(cn.length){let e=[...new Set(cn)].sort((e,t)=>bn(e)-bn(t));if(cn.length=0,ln){ln.push(...e);return}for(ln=e,un=0;un<ln.length;un++){let e=ln[un];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}ln=null,un=0}}var bn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function xn(e){try{for(sn=0;sn<P.length;sn++){let e=P[sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),nn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;sn<P.length;sn++){let e=P[sn];e&&(e.flags&=-2)}sn=-1,P.length=0,yn(e),fn=null,(P.length||cn.length)&&xn(e)}}var Sn=null,Cn=null;function wn(e){let t=Sn;return Sn=e,Cn=e&&e.type.__scopeId||null,t}function Tn(e,t=Sn,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&Mi(-1);let i=wn(t),a;try{a=e(...n)}finally{wn(i),r._d&&Mi(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function En(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(ze(),rn(c,n,8,[e.el,s,e,t]),Be())}}function Dn(e,t){if(V){let n=V.provides,r=V.parent&&V.parent.provides;r===n&&(n=V.provides=Object.create(r)),n[e]=t}}function On(e,t,n=!1){let r=ea();if(r||Fr){let i=Fr?Fr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&h(t)?t.call(r&&r.proxy):t}}var kn=Symbol.for(`v-scx`),An=()=>On(kn);function jn(e,t,n){return Mn(e,t,n)}function Mn(e,n,i=t){let{immediate:a,deep:o,flush:c,once:l}=i,u=s({},i),d=n&&a||!n&&c!==`post`,f;if(oa){if(c===`sync`){let e=An();f=e.__watcherHandles||=[]}else if(!d){let e=()=>{};return e.stop=r,e.resume=r,e.pause=r,e}}let p=V;u.call=(e,t,n)=>rn(e,p,t,n);let m=!1;c===`post`?u.scheduler=e=>{L(e,p&&p.suspense)}:c!==`sync`&&(m=!0,u.scheduler=(e,t)=>{t?e():hn(e)}),u.augmentJob=e=>{n&&(e.flags|=4),m&&(e.flags|=2,p&&(e.id=p.uid,e.i=p))};let h=en(e,n,u);return oa&&(f?f.push(h):d&&h()),h}function Nn(e,t,n){let r=this.proxy,i=g(e)?e.includes(`.`)?Pn(r,e):()=>r[e]:e.bind(r,r),a;h(t)?a=t:(a=t.handler,n=t);let o=ra(this),s=Mn(i,a.bind(r),n);return o(),s}function Pn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Fn=Symbol(`_vte`),In=e=>e.__isTeleport,Ln=Symbol(`_leaveCb`);function Rn(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Rn(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function F(e,t){return h(e)?s({name:e.name},t,{setup:e}):e}function zn(e){e.ids=[e.ids[0]+ e.ids[2]+++`-`,0,0]}function Bn(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var Vn=new WeakMap;function Hn(e,n,r,a,o=!1){if(d(e)){e.forEach((e,t)=>Hn(e,n&&(d(n)?n[t]:n),r,a,o));return}if(Wn(a)&&!o){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Hn(e,n,r,a.component.subTree);return}let s=a.shapeFlag&4?ha(a.component):a.el,l=o?null:s,{i:f,r:p}=e,m=n&&n.r,_=f.refs===t?f.refs={}:f.refs,v=f.setupState,y=M(v),b=v===t?i:e=>Bn(_,e)?!1:u(y,e),x=(e,t)=>!(t&&Bn(_,t));if(m!=null&&m!==p){if(Un(n),g(m))_[m]=null,b(m)&&(v[m]=null);else if(N(m)){let e=n;x(m,e.k)&&(m.value=null),e.k&&(_[e.k]=null)}}if(h(p))nn(p,f,12,[l,_]);else{let t=g(p),n=N(p);if(t||n){let i=()=>{if(e.f){let n=t?b(p)?v[p]:_[p]:x(p)||!e.k?p.value:_[e.k];if(o)d(n)&&c(n,s);else if(d(n))n.includes(s)||n.push(s);else if(t)_[p]=[s],b(p)&&(v[p]=_[p]);else{let t=[s];x(p,e.k)&&(p.value=t),e.k&&(_[e.k]=t)}}else t?(_[p]=l,b(p)&&(v[p]=l)):n&&(x(p,e.k)&&(p.value=l),e.k&&(_[e.k]=l))};if(l){let t=()=>{i(),Vn.delete(e)};t.id=-1,Vn.set(e,t),L(t,r)}else Un(e),i()}}}function Un(e){let t=Vn.get(e);t&&(t.flags|=8,Vn.delete(e))}ue().requestIdleCallback,ue().cancelIdleCallback;var Wn=e=>!!e.type.__asyncLoader,Gn=e=>e.type.__isKeepAlive;function Kn(e,t){Jn(e,`a`,t)}function qn(e,t){Jn(e,`da`,t)}function Jn(e,t,n=V){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(Xn(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Gn(e.parent.vnode)&&Yn(r,t,n,e),e=e.parent}}function Yn(e,t,n,r){let i=Xn(t,e,r,!0);rr(()=>{c(r[t],i)},n)}function Xn(e,t,n=V,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{ze();let i=ra(n),a=rn(t,n,e,r);return i(),Be(),a};return r?i.unshift(a):i.push(a),a}}var Zn=e=>(t,n=V)=>{(!oa||e===`sp`)&&Xn(e,(...e)=>t(...e),n)},Qn=Zn(`bm`),$n=Zn(`m`),er=Zn(`bu`),tr=Zn(`u`),nr=Zn(`bum`),rr=Zn(`um`),ir=Zn(`sp`),ar=Zn(`rtg`),or=Zn(`rtc`);function sr(e,t=V){Xn(`ec`,e,t)}var cr=`components`;function lr(e,t){return dr(cr,e,!0,t)||e}var ur=Symbol.for(`v-ndc`);function dr(e,t,n=!0,r=!1){let i=Sn||V;if(i){let n=i.type;if(e===cr){let e=ga(n,!1);if(e&&(e===t||e===w(t)||e===ae(w(t))))return n}let a=fr(i[e]||n[e],t)||fr(i.appContext[e],t);return!a&&r?n:a}}function fr(e,t){return e&&(e[t]||e[w(t)]||e[ae(w(t))])}var pr=e=>e?aa(e)?ha(e):pr(e.parent):null,mr=s(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>pr(e.parent),$root:e=>pr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Cr(e),$forceUpdate:e=>e.f||=()=>{hn(e.update)},$nextTick:e=>e.n||=pn.bind(e.proxy),$watch:e=>Nn.bind(e)}),hr=(e,n)=>e!==t&&!e.__isScriptSetup&&u(e,n),gr={get({_:e},n){if(n===`__v_skip`)return!0;let{ctx:r,setupState:i,data:a,props:o,accessCache:s,type:c,appContext:l}=e;if(n[0]!==`$`){let e=s[n];if(e!==void 0)switch(e){case 1:return i[n];case 2:return a[n];case 4:return r[n];case 3:return o[n]}else if(hr(i,n))return s[n]=1,i[n];else if(a!==t&&u(a,n))return s[n]=2,a[n];else if(u(o,n))return s[n]=3,o[n];else if(r!==t&&u(r,n))return s[n]=4,r[n];else vr&&(s[n]=0)}let d=mr[n],f,p;if(d)return n===`$attrs`&&j(e.attrs,`get`,``),d(e);if((f=c.__cssModules)&&(f=f[n]))return f;if(r!==t&&u(r,n))return s[n]=4,r[n];if(p=l.config.globalProperties,u(p,n))return p[n]},set({_:e},n,r){let{data:i,setupState:a,ctx:o}=e;return hr(a,n)?(a[n]=r,!0):i!==t&&u(i,n)?(i[n]=r,!0):u(e.props,n)||n[0]===`$`&&n.slice(1)in e?!1:(o[n]=r,!0)},has({_:{data:e,setupState:n,accessCache:r,ctx:i,appContext:a,props:o,type:s}},c){let l;return!!(r[c]||e!==t&&c[0]!==`$`&&u(e,c)||hr(n,c)||u(o,c)||u(i,c)||u(mr,c)||u(a.config.globalProperties,c)||(l=s.__cssModules)&&l[c])},defineProperty(e,t,n){return n.get==null?u(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function _r(e){return d(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var vr=!0;function yr(e){let t=Cr(e),n=e.proxy,i=e.ctx;vr=!1,t.beforeCreate&&xr(t.beforeCreate,e,`bc`);let{data:a,computed:o,methods:s,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:g,updated:_,activated:y,deactivated:b,beforeDestroy:x,beforeUnmount:ee,destroyed:S,unmounted:C,render:te,renderTracked:ne,renderTriggered:re,errorCaptured:w,serverPrefetch:ie,expose:T,inheritAttrs:ae,components:oe,directives:E,filters:se}=t;if(u&&br(u,i,null),s)for(let e in s){let t=s[e];h(t)&&(i[e]=t.bind(n))}if(a){let t=a.call(n,n);v(t)&&(e.data=At(t))}if(vr=!0,o)for(let e in o){let t=o[e],a=H({get:h(t)?t.bind(n,n):h(t.get)?t.get.bind(n,n):r,set:!h(t)&&h(t.set)?t.set.bind(n):r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(let e in c)Sr(c[e],i,n,e);if(l){let e=h(l)?l.call(n):l;Reflect.ownKeys(e).forEach(t=>{Dn(t,e[t])})}f&&xr(f,e,`c`);function D(e,t){d(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(D(Qn,p),D($n,m),D(er,g),D(tr,_),D(Kn,y),D(qn,b),D(sr,w),D(or,ne),D(ar,re),D(nr,ee),D(rr,C),D(ir,ie),d(T))if(T.length){let t=e.exposed||={};T.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};te&&e.render===r&&(e.render=te),ae!=null&&(e.inheritAttrs=ae),oe&&(e.components=oe),E&&(e.directives=E),ie&&zn(e)}function br(e,t,n=r){d(e)&&(e=Or(e));for(let n in e){let r=e[n],i;i=v(r)?`default`in r?On(r.from||n,r.default,!0):On(r.from||n):On(r),N(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function xr(e,t,n){rn(d(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Sr(e,t,n,r){let i=r.includes(`.`)?Pn(n,r):()=>n[r];if(g(e)){let n=t[e];h(n)&&jn(i,n)}else if(h(e))jn(i,e.bind(n));else if(v(e))if(d(e))e.forEach(e=>Sr(e,t,n,r));else{let r=h(e.handler)?e.handler.bind(n):t[e.handler];h(r)&&jn(i,r,e)}}function Cr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>wr(c,e,o,!0)),wr(c,t,o)),v(t)&&a.set(t,c),c}function wr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&wr(e,a,n,!0),i&&i.forEach(t=>wr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=Tr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var Tr={data:Er,props:Ar,emits:Ar,methods:kr,computed:kr,beforeCreate:I,created:I,beforeMount:I,mounted:I,beforeUpdate:I,updated:I,beforeDestroy:I,beforeUnmount:I,destroyed:I,unmounted:I,activated:I,deactivated:I,errorCaptured:I,serverPrefetch:I,components:kr,directives:kr,watch:jr,provide:Er,inject:Dr};function Er(e,t){return t?e?function(){return s(h(e)?e.call(this,this):e,h(t)?t.call(this,this):t)}:t:e}function Dr(e,t){return kr(Or(e),Or(t))}function Or(e){if(d(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function I(e,t){return e?[...new Set([].concat(e,t))]:t}function kr(e,t){return e?s(Object.create(null),e,t):t}function Ar(e,t){return e?d(e)&&d(t)?[...new Set([...e,...t])]:s(Object.create(null),_r(e),_r(t??{})):t}function jr(e,t){if(!e)return t;if(!t)return e;let n=s(Object.create(null),e);for(let r in t)n[r]=I(e[r],t[r]);return n}function Mr(){return{app:null,config:{isNativeTag:i,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var Nr=0;function Pr(e,t){return function(n,r=null){h(n)||(n=s({},n)),r!=null&&!v(r)&&(r=null);let i=Mr(),a=new WeakSet,o=[],c=!1,l=i.app={_uid:Nr++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:ya,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&h(e.install)?(a.add(e),e.install(l,...t)):h(e)&&(a.add(e),e(l,...t))),l},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),l},component(e,t){return t?(i.components[e]=t,l):i.components[e]},directive(e,t){return t?(i.directives[e]=t,l):i.directives[e]},mount(a,o,s){if(!c){let u=l._ceVNode||B(n,r);return u.appContext=i,s===!0?s=`svg`:s===!1&&(s=void 0),o&&t?t(u,a):e(u,a,s),c=!0,l._container=a,a.__vue_app__=l,ha(u.component)}},onUnmount(e){o.push(e)},unmount(){c&&(rn(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return i.provides[e]=t,l},runWithContext(e){let t=Fr;Fr=l;try{return e()}finally{Fr=t}}};return l}}var Fr=null,Ir=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${w(t)}Modifiers`]||e[`${T(t)}Modifiers`];function Lr(e,n,...r){if(e.isUnmounted)return;let i=e.vnode.props||t,a=r,o=n.startsWith(`update:`),s=o&&Ir(i,n.slice(7));s&&(s.trim&&(a=r.map(e=>g(e)?e.trim():e)),s.number&&(a=r.map(ce)));let c,l=i[c=oe(n)]||i[c=oe(w(n))];!l&&o&&(l=i[c=oe(T(n))]),l&&rn(l,e,6,a);let u=i[c+`Once`];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,rn(u,e,6,a)}}var Rr=new WeakMap;function zr(e,t,n=!1){let r=n?Rr:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},c=!1;if(!h(e)){let r=e=>{let n=zr(e,t,!0);n&&(c=!0,s(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!c?(v(e)&&r.set(e,null),null):(d(a)?a.forEach(e=>o[e]=null):s(o,a),v(e)&&r.set(e,o),o)}function Br(e,t){return!e||!a(t)?!1:(t=t.slice(2).replace(/Once$/,``),u(e,t[0].toLowerCase()+t.slice(1))||u(e,T(t))||u(e,t))}function Vr(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:s,attrs:c,emit:l,render:u,renderCache:d,props:f,data:p,setupState:m,ctx:h,inheritAttrs:g}=e,_=wn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=Ki(u.call(t,e,d,f,m,p,h)),y=c}else{let e=t;v=Ki(e.length>1?e(f,{attrs:c,slots:s,emit:l}):e(f,null)),y=t.props?c:Hr(c)}}catch(t){Oi.length=0,an(t,e,1),v=B(Ei)}let b=v;if(y&&g!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(o)&&(y=Ur(y,a)),b=Hi(b,y,!1,!0))}return n.dirs&&(b=Hi(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Rn(b,n.transition),v=b,wn(_),v}var Hr=e=>{let t;for(let n in e)(n===`class`||n===`style`||a(n))&&((t||={})[n]=e[n]);return t},Ur=(e,t)=>{let n={};for(let r in e)(!o(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Wr(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Gr(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(Kr(o,r,n)&&!Br(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Gr(r,o,l):!0:!!o;return!1}function Gr(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(Kr(t,e,a)&&!Br(n,a))return!0}return!1}function Kr(e,t,n){let r=e[n],i=t[n];return n===`style`&&v(r)&&v(i)?!be(r,i):r!==i}function qr({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var Jr={},Yr=()=>Object.create(Jr),Xr=e=>Object.getPrototypeOf(e)===Jr;function Zr(e,t,n,r=!1){let i={},a=Yr();e.propsDefaults=Object.create(null),$r(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:jt(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function Qr(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=M(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(Br(e.emitsOptions,o))continue;let d=t[o];if(c)if(u(a,o))d!==a[o]&&(a[o]=d,l=!0);else{let t=w(o);i[t]=ei(c,s,t,d,e,!1)}else d!==a[o]&&(a[o]=d,l=!0)}}}else{$r(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!u(t,a)&&((r=T(a))===a||!u(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=ei(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!u(t,e))&&(delete a[e],l=!0)}l&&Xe(e.attrs,`set`,``)}function $r(e,n,r,i){let[a,o]=e.propsOptions,s=!1,c;if(n)for(let t in n){if(te(t))continue;let l=n[t],d;a&&u(a,d=w(t))?!o||!o.includes(d)?r[d]=l:(c||={})[d]=l:Br(e.emitsOptions,t)||(!(t in i)||l!==i[t])&&(i[t]=l,s=!0)}if(o){let n=M(r),i=c||t;for(let t=0;t<o.length;t++){let s=o[t];r[s]=ei(a,n,s,i[s],e,!u(i,s))}}return s}function ei(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=u(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&h(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=ra(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===T(n))&&(r=!0))}return r}var ti=new WeakMap;function ni(e,r,i=!1){let a=i?ti:r.propsCache,o=a.get(e);if(o)return o;let c=e.props,l={},f=[],p=!1;if(!h(e)){let t=e=>{p=!0;let[t,n]=ni(e,r,!0);s(l,t),n&&f.push(...n)};!i&&r.mixins.length&&r.mixins.forEach(t),e.extends&&t(e.extends),e.mixins&&e.mixins.forEach(t)}if(!c&&!p)return v(e)&&a.set(e,n),n;if(d(c))for(let e=0;e<c.length;e++){let n=w(c[e]);ri(n)&&(l[n]=t)}else if(c)for(let e in c){let t=w(e);if(ri(t)){let n=c[e],r=l[t]=d(n)||h(n)?{type:n}:s({},n),i=r.type,a=!1,o=!0;if(d(i))for(let e=0;e<i.length;++e){let t=i[e],n=h(t)&&t.name;if(n===`Boolean`){a=!0;break}else n===`String`&&(o=!1)}else a=h(i)&&i.name===`Boolean`;r[0]=a,r[1]=o,(a||u(r,`default`))&&f.push(t)}}let m=[l,f];return v(e)&&a.set(e,m),m}function ri(e){return e[0]!==`$`&&!te(e)}var ii=e=>e===`_`||e===`_ctx`||e===`$stable`,ai=e=>d(e)?e.map(Ki):[Ki(e)],oi=(e,t,n)=>{if(t._n)return t;let r=Tn((...e)=>ai(t(...e)),n);return r._c=!1,r},si=(e,t,n)=>{let r=e._ctx;for(let n in e){if(ii(n))continue;let i=e[n];if(h(i))t[n]=oi(n,i,r);else if(i!=null){let e=ai(i);t[n]=()=>e}}},ci=(e,t)=>{let n=ai(t);e.slots.default=()=>n},li=(e,t,n)=>{for(let r in t)(n||!ii(r))&&(e[r]=t[r])},ui=(e,t,n)=>{let r=e.slots=Yr();if(e.vnode.shapeFlag&32){let e=t._;e?(li(r,t,n),n&&D(r,`_`,e,!0)):si(t,r)}else t&&ci(e,t)},di=(e,n,r)=>{let{vnode:i,slots:a}=e,o=!0,s=t;if(i.shapeFlag&32){let e=n._;e?r&&e===1?o=!1:li(a,n,r):(o=!n.$stable,si(n,a)),s=n}else n&&(ci(e,n),s={default:1});if(o)for(let e in a)!ii(e)&&s[e]==null&&delete a[e]},L=Ci;function fi(e){return pi(e)}function pi(e,i){let a=ue();a.__VUE__=!0;let{insert:o,remove:s,patchProp:c,createElement:l,createText:u,createComment:d,setText:f,setElementText:p,parentNode:m,nextSibling:h,setScopeId:g=r,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Li(e,t)&&(r=be(e),O(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Ti:y(e,t,n,r);break;case Ei:b(e,t,n,r);break;case Di:e??x(t,n,r,o);break;case wi:oe(e,t,n,r,i,a,o,s,c);break;default:d&1?C(e,t,n,r,i,a,o,s,c):d&6?E(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,Se)}u!=null&&i?Hn(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&Hn(e.ref,null,a,e,!0)},y=(e,t,n,r)=>{if(e==null)o(t.el=u(t.children),n,r);else{let n=t.el=e.el;t.children!==e.children&&f(n,t.children)}},b=(e,t,n,r)=>{e==null?o(t.el=d(t.children||``),n,r):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},ee=({el:e,anchor:t},n,r)=>{let i;for(;e&&e!==t;)i=h(e),o(e,n,r),e=i;o(t,n,r)},S=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),s(e),e=n;s(t)},C=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)ne(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),ie(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},ne=(e,t,n,r,i,a,s,u)=>{let d,f,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(d=e.el=l(e.type,a,m&&m.is,m),h&8?p(d,e.children):h&16&&w(e.children,d,null,r,i,mi(e,a),s,u),_&&En(e,null,r,`created`),re(d,e,e.scopeId,s,r),m){for(let e in m)e!==`value`&&!te(e)&&c(d,e,null,m[e],a,r);`value`in m&&c(d,`value`,null,m.value,a),(f=m.onVnodeBeforeMount)&&Xi(f,r,e)}_&&En(e,null,r,`beforeMount`);let v=gi(i,g);v&&g.beforeEnter(d),o(d,t,n),((f=m&&m.onVnodeMounted)||v||_)&&L(()=>{try{f&&Xi(f,r,e),v&&g.enter(d),_&&En(e,null,r,`mounted`)}finally{}},i)},re=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Si(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;re(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},w=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++)v(null,e[l]=s?qi(e[l]):Ki(e[l]),t,n,r,i,a,o,s)},ie=(e,n,r,i,a,o,s)=>{let l=n.el=e.el,{patchFlag:u,dynamicChildren:d,dirs:f}=n;u|=e.patchFlag&16;let m=e.props||t,h=n.props||t,g;if(r&&hi(r,!1),(g=h.onVnodeBeforeUpdate)&&Xi(g,r,n,e),f&&En(n,e,r,`beforeUpdate`),r&&hi(r,!0),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&p(l,``),d?T(e.dynamicChildren,d,l,r,i,mi(n,a),o):s||fe(e,n,l,null,r,i,mi(n,a),o,!1),u>0){if(u&16)ae(l,m,h,r,a);else if(u&2&&m.class!==h.class&&c(l,`class`,null,h.class,a),u&4&&c(l,`style`,m.style,h.style,a),u&8){let e=n.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t],i=m[n],o=h[n];(o!==i||n===`value`)&&c(l,n,i,o,a,r)}}u&1&&e.children!==n.children&&p(l,n.children)}else !s&&d==null&&ae(l,m,h,r,a);((g=h.onVnodeUpdated)||f)&&L(()=>{g&&Xi(g,r,n,e),f&&En(n,e,r,`updated`)},i)},T=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s];v(c,l,c.el&&(c.type===wi||!Li(c,l)||c.shapeFlag&198)?m(c.el):n,null,r,i,a,o,!0)}},ae=(e,n,r,i,a)=>{if(n!==r){if(n!==t)for(let t in n)!te(t)&&!(t in r)&&c(e,t,n[t],null,a,i);for(let t in r){if(te(t))continue;let o=r[t],s=n[t];o!==s&&t!==`value`&&c(e,t,s,o,a,i)}`value`in r&&c(e,`value`,n.value,r.value,a)}},oe=(e,t,n,r,i,a,s,c,l)=>{let d=t.el=e?e.el:u(``),f=t.anchor=e?e.anchor:u(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(c=c?c.concat(h):h),e==null?(o(d,n,r),o(f,n,r),w(t.children||[],n,f,i,a,s,c,l)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(T(e.dynamicChildren,m,n,i,a,s,c),(t.key!=null||i&&t===i.subTree)&&_i(e,t,!0)):fe(e,t,n,f,i,a,s,c,l)},E=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):D(t,n,r,i,a,o,c):ce(e,t,c)},D=(e,t,n,r,i,a,o)=>{let s=e.component=$i(e,r,i);if(Gn(e)&&(s.ctx.renderer=Se),sa(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,le,o),!e.el){let r=s.subTree=B(Ei);b(null,r,t,n),e.placeholder=r.el}}else le(s,e,t,n,i,a,o)},ce=(e,t,n)=>{let r=t.component=e.component;if(Wr(e,t,n))if(r.asyncDep&&!r.asyncResolved){de(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},le=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=yi(e);if(n){t&&(t.el=c.el,de(e,t,o)),n.asyncDep.then(()=>{L(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;hi(e,!1),t?(t.el=c.el,de(e,t,o)):t=c,n&&se(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&Xi(d,s,t,c),hi(e,!0);let f=Vr(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),be(p),e,i,a),t.el=f.el,u===null&&qr(e,f.el),r&&L(r,i),(d=t.props&&t.props.onVnodeUpdated)&&L(()=>Xi(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=Wn(t);if(hi(e,!1),l&&se(l),!m&&(o=c&&c.onVnodeBeforeMount)&&Xi(o,d,t),hi(e,!0),s&&Ce){let t=()=>{e.subTree=Vr(e),Ce(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=Vr(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&L(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;L(()=>Xi(o,d,e),i)}(t.shapeFlag&256||d&&Wn(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&L(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new we(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>hn(u),hi(e,!0),l()},de=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,Qr(e,t.props,r,n),di(e,t.children,n),ze(),vn(e),Be()},fe=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,u=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:m}=t;if(f>0){if(f&128){me(l,d,n,r,i,a,o,s,c);return}else if(f&256){pe(l,d,n,r,i,a,o,s,c);return}}m&8?(u&16&&ye(l,i,a),d!==l&&p(n,d)):u&16?m&16?me(l,d,n,r,i,a,o,s,c):ye(l,i,a,!0):(u&8&&p(n,``),m&16&&w(d,n,r,i,a,o,s,c))},pe=(e,t,r,i,a,o,s,c,l)=>{e||=n,t||=n;let u=e.length,d=t.length,f=Math.min(u,d),p;for(p=0;p<f;p++){let n=t[p]=l?qi(t[p]):Ki(t[p]);v(e[p],n,r,null,a,o,s,c,l)}u>d?ye(e,a,o,!0,!1,f):w(t,r,i,a,o,s,c,l,f)},me=(e,t,r,i,a,o,s,c,l)=>{let u=0,d=t.length,f=e.length-1,p=d-1;for(;u<=f&&u<=p;){let n=e[u],i=t[u]=l?qi(t[u]):Ki(t[u]);if(Li(n,i))v(n,i,r,null,a,o,s,c,l);else break;u++}for(;u<=f&&u<=p;){let n=e[f],i=t[p]=l?qi(t[p]):Ki(t[p]);if(Li(n,i))v(n,i,r,null,a,o,s,c,l);else break;f--,p--}if(u>f){if(u<=p){let e=p+1,n=e<d?t[e].el:i;for(;u<=p;)v(null,t[u]=l?qi(t[u]):Ki(t[u]),r,n,a,o,s,c,l),u++}}else if(u>p)for(;u<=f;)O(e[u],a,o,!0),u++;else{let m=u,h=u,g=new Map;for(u=h;u<=p;u++){let e=t[u]=l?qi(t[u]):Ki(t[u]);e.key!=null&&g.set(e.key,u)}let _,y=0,b=p-h+1,x=!1,ee=0,S=Array(b);for(u=0;u<b;u++)S[u]=0;for(u=m;u<=f;u++){let n=e[u];if(y>=b){O(n,a,o,!0);continue}let i;if(n.key!=null)i=g.get(n.key);else for(_=h;_<=p;_++)if(S[_-h]===0&&Li(n,t[_])){i=_;break}i===void 0?O(n,a,o,!0):(S[i-h]=u+1,i>=ee?ee=i:x=!0,v(n,t[i],r,null,a,o,s,c,l),y++)}let C=x?vi(S):n;for(_=C.length-1,u=b-1;u>=0;u--){let e=h+u,n=t[e],f=t[e+1],p=e+1<d?f.el||xi(f):i;S[u]===0?v(null,n,r,p,a,o,s,c,l):x&&(_<0||u!==C[_]?he(n,r,p,2):_--)}}},he=(e,t,n,r,i=null)=>{let{el:a,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){he(e.component.subTree,t,n,r);return}if(d&128){e.suspense.move(t,n,r);return}if(d&64){c.move(e,t,n,Se);return}if(c===wi){o(a,t,n);for(let e=0;e<u.length;e++)he(u[e],t,n,r);o(e.anchor,t,n);return}if(c===Di){ee(e,t,n);return}if(r!==2&&d&1&&l)if(r===0)l.persisted&&!a[Ln]?o(a,t,n):(l.beforeEnter(a),o(a,t,n),L(()=>l.enter(a),i));else{let{leave:r,delayLeave:i,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?s(a):o(a,t,n)},d=()=>{let e=a._isLeaving||!!a[Ln];a._isLeaving&&a[Ln](!0),l.persisted&&!e?u():r(a,()=>{u(),c&&c()})};i?i(a,u,d):d()}else o(a,t,n)},O=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(ze(),Hn(s,null,n,e,!0),Be()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!Wn(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&Xi(_,t,e),u&6)ve(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&En(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,Se,r):l&&!l.hasOnce&&(a!==wi||d>0&&d&64)?ye(l,t,n,!1,!0):(a===wi&&d&384||!i&&u&16)&&ye(c,t,n),r&&ge(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&L(()=>{_&&Xi(_,t,e),h&&En(e,null,t,`unmounted`),v&&(e.el=null)},n)},ge=e=>{let{type:t,el:n,anchor:r,transition:i}=e;if(t===wi){_e(n,r);return}if(t===Di){S(e);return}let a=()=>{s(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(e.shapeFlag&1&&i&&!i.persisted){let{leave:t,delayLeave:r}=i,o=()=>t(n,a);r?r(e.el,a,o):o()}else a()},_e=(e,t)=>{let n;for(;e!==t;)n=h(e),s(e),e=n;s(t)},ve=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;bi(c),bi(l),r&&se(r),i.stop(),a&&(a.flags|=8,O(o,e,t,n)),s&&L(s,t),L(()=>{e.isUnmounted=!0},t)},ye=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)O(e[o],t,n,r,i)},be=e=>{if(e.shapeFlag&6)return be(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Fn];return n?h(n):t},k=!1,xe=(e,t,n)=>{let r;e==null?t._vnode&&(O(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,k||=(k=!0,vn(r),yn(),!1)},Se={p:v,um:O,m:he,r:ge,mt:D,mc:w,pc:fe,pbc:T,n:be,o:e},A,Ce;return i&&([A,Ce]=i(Se)),{render:xe,hydrate:A,createApp:Pr(xe,A)}}function mi({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function hi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function gi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function _i(e,t,n=!1){let r=e.children,i=t.children;if(d(r)&&d(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=qi(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&_i(t,a)),a.type===Ti&&(a.patchFlag===-1&&(a=i[e]=qi(a)),a.el=t.el),a.type===Ei&&!a.el&&(a.el=t.el)}}function vi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-- >0;)n[a]=o,o=t[o];return n}function yi(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:yi(t)}function bi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function xi(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?xi(t.subTree):null}var Si=e=>e.__isSuspense;function Ci(e,t){t&&t.pendingBranch?d(e)?t.effects.push(...e):t.effects.push(e):_n(e)}var wi=Symbol.for(`v-fgt`),Ti=Symbol.for(`v-txt`),Ei=Symbol.for(`v-cmt`),Di=Symbol.for(`v-stc`),Oi=[],ki=null;function R(e=!1){Oi.push(ki=e?null:[])}function Ai(){Oi.pop(),ki=Oi[Oi.length-1]||null}var ji=1;function Mi(e,t=!1){ji+=e,e<0&&ki&&t&&(ki.hasOnce=!0)}function Ni(e){return e.dynamicChildren=ji>0?ki||n:null,Ai(),ji>0&&ki&&ki.push(e),e}function Pi(e,t,n,r,i,a){return Ni(z(e,t,n,r,i,a,!0))}function Fi(e,t,n,r,i){return Ni(B(e,t,n,r,i,!0))}function Ii(e){return e?e.__v_isVNode===!0:!1}function Li(e,t){return e.type===t.type&&e.key===t.key}var Ri=({key:e})=>e??null,zi=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:g(e)||N(e)||h(e)?{i:Sn,r:e,k:t,f:!!n}:e);function z(e,t=null,n=null,r=0,i=null,a=e===wi?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ri(t),ref:t&&zi(t),scopeId:Cn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Sn};return s?(Ji(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=g(n)?8:16),ji>0&&!o&&ki&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&ki.push(c),c}var B=Bi;function Bi(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===ur)&&(e=Ei),Ii(e)){let r=Hi(e,t,!0);return n&&Ji(r,n),ji>0&&!a&&ki&&(r.shapeFlag&6?ki[ki.indexOf(e)]=r:ki.push(r)),r.patchFlag=-2,r}if(_a(e)&&(e=e.__vccOpts),t){t=Vi(t);let{class:e,style:n}=t;e&&!g(e)&&(t.class=O(e)),v(n)&&(Lt(n)&&!d(n)&&(n=s({},n)),t.style=de(n))}let o=g(e)?1:Si(e)?128:In(e)?64:v(e)?4:h(e)?2:0;return z(e,t,n,r,i,o,a,!0)}function Vi(e){return e?Lt(e)||Xr(e)?s({},e):e:null}function Hi(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?Yi(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Ri(l),ref:t&&t.ref?n&&a?d(a)?a.concat(zi(t)):[a,zi(t)]:zi(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==wi?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Hi(e.ssContent),ssFallback:e.ssFallback&&Hi(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&Rn(u,c.clone(u)),u}function Ui(e=` `,t=0){return B(Ti,null,e,t)}function Wi(e,t){let n=B(Di,null,e);return n.staticCount=t,n}function Gi(e=``,t=!1){return t?(R(),Fi(Ei,null,e)):B(Ei,null,e)}function Ki(e){return e==null||typeof e==`boolean`?B(Ei):d(e)?B(wi,null,e.slice()):Ii(e)?qi(e):B(Ti,null,String(e))}function qi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Hi(e)}function Ji(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(d(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),Ji(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!Xr(t)?t._ctx=Sn:r===3&&Sn&&(Sn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else h(t)?(t={default:t,_ctx:Sn},n=32):(t=String(t),r&64?(n=16,t=[Ui(t)]):n=8);e.children=t,e.shapeFlag|=n}function Yi(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=O([t.class,r.class]));else if(e===`style`)t.style=de([t.style,r.style]);else if(a(e)){let n=t[e],i=r[e];i&&n!==i&&!(d(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!o(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function Xi(e,t,n,r=null){rn(e,t,7,[n,r])}var Zi=Mr(),Qi=0;function $i(e,n,r){let i=e.type,a=(n?n.appContext:e.appContext)||Zi,o={uid:Qi++,vnode:e,type:i,parent:n,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xe(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(a.provides),ids:n?n.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ni(i,a),emitsOptions:zr(i,a),emit:null,emitted:null,propsDefaults:t,inheritAttrs:i.inheritAttrs,ctx:t,data:t,props:t,attrs:t,slots:t,refs:t,setupState:t,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=Lr.bind(null,o),e.ce&&e.ce(o),o}var V=null,ea=()=>V||Sn,ta,na;{let e=ue(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};ta=t(`__VUE_INSTANCE_SETTERS__`,e=>V=e),na=t(`__VUE_SSR_SETTERS__`,e=>oa=e)}var ra=e=>{let t=V;return ta(e),e.scope.on(),()=>{e.scope.off(),ta(t)}},ia=()=>{V&&V.scope.off(),ta(null)};function aa(e){return e.vnode.shapeFlag&4}var oa=!1;function sa(e,t=!1,n=!1){t&&na(t);let{props:r,children:i}=e.vnode,a=aa(e);Zr(e,r,a,t),ui(e,i,n||t);let o=a?ca(e,t):void 0;return t&&na(!1),o}function ca(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,gr);let{setup:r}=n;if(r){ze();let n=e.setupContext=r.length>1?ma(e):null,i=ra(e),a=nn(r,e,0,[e.props,n]),o=y(a);if(Be(),i(),(o||e.sp)&&!Wn(e)&&zn(e),o){if(a.then(ia,ia),t)return a.then(n=>{la(e,n,t)}).catch(t=>{an(t,e,0)});e.asyncDep=a}else la(e,a,t)}else fa(e,t)}function la(e,t,n){h(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:v(t)&&(e.setupState=qt(t)),fa(e,n)}var ua,da;function fa(e,t,n){let i=e.type;if(!e.render){if(!t&&ua&&!i.render){let t=i.template||Cr(e).template;if(t){let{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:a,compilerOptions:o}=i;i.render=ua(t,s(s({isCustomElement:n,delimiters:a},r),o))}}e.render=i.render||r,da&&da(e)}{let t=ra(e);ze();try{yr(e)}finally{Be(),t()}}}var pa={get(e,t){return j(e,`get`,``),e[t]}};function ma(e){return{attrs:new Proxy(e.attrs,pa),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function ha(e){return e.exposed?e.exposeProxy||=new Proxy(qt(Rt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in mr)return mr[n](e)},has(e,t){return t in e||t in mr}}):e.proxy}function ga(e,t=!0){return h(e)?e.displayName||e.name:e.name||t&&e.__name}function _a(e){return h(e)&&`__vccOpts`in e}var H=(e,t)=>Yt(e,t,oa);function va(e,t,n){try{Mi(-1);let r=arguments.length;return r===2?v(t)&&!d(t)?Ii(t)?B(e,null,[t]):B(e,t):B(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ii(n)&&(n=[n]),B(e,t,n))}finally{Mi(1)}}var ya=`3.5.38`,ba=void 0,xa=typeof window<`u`&&window.trustedTypes;if(xa)try{ba=xa.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Sa=ba?e=>ba.createHTML(e):e=>e,Ca=`http://www.w3.org/2000/svg`,wa=`http://www.w3.org/1998/Math/MathML`,Ta=typeof document<`u`?document:null,Ea=Ta&&Ta.createElement(`template`),Da={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Ta.createElementNS(Ca,e):t===`mathml`?Ta.createElementNS(wa,e):n?Ta.createElement(e,{is:n}):Ta.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Ta.createTextNode(e),createComment:e=>Ta.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ta.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ea.innerHTML=Sa(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Ea.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Oa=Symbol(`_vtc`);function ka(e,t,n){let r=e[Oa];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Aa=Symbol(`_vod`),ja=Symbol(`_vsh`),Ma=Symbol(``),Na=/(?:^|;)\s*display\s*:/;function Pa(e,t,n){let r=e.style,i=g(n),a=!1;if(n&&!i){if(t)if(g(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Ia(r,t,``)}else for(let e in t)n[e]??Ia(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?Ia(r,i,``):Ba(e,i,!g(t)&&t?t[i]:void 0,o)||Ia(r,i,o)}}else if(i){if(t!==n){let e=r[Ma];e&&(n+=`;`+e),r.cssText=n,a=Na.test(n)}}else t&&e.removeAttribute(`style`);Aa in e&&(e[Aa]=a?r.display:``,e[ja]&&(r.display=`none`))}var Fa=/\s*!important$/;function Ia(e,t,n){if(d(n))n.forEach(n=>Ia(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=za(e,t);Fa.test(n)?e.setProperty(T(r),n.replace(Fa,``),`important`):e[r]=n}}var La=[`Webkit`,`Moz`,`ms`],Ra={};function za(e,t){let n=Ra[t];if(n)return n;let r=w(t);if(r!==`filter`&&r in e)return Ra[t]=r;r=ae(r);for(let n=0;n<La.length;n++){let i=La[n]+r;if(i in e)return Ra[t]=i}return t}function Ba(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&g(r)&&n===r}var Va=`http://www.w3.org/1999/xlink`;function Ha(e,t,n,r,i,a=_e(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Va,t.slice(6,t.length)):e.setAttributeNS(Va,t,n):n==null||a&&!ve(n)?e.removeAttribute(t):e.setAttribute(t,a?``:_(n)?String(n):n)}function Ua(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Sa(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=ve(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function Wa(e,t,n,r){e.addEventListener(t,n,r)}function Ga(e,t,n,r){e.removeEventListener(t,n,r)}var Ka=Symbol(`_vei`);function qa(e,t,n,r,i=null){let a=e[Ka]||(e[Ka]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Ya(t);r?Wa(e,n,a[t]=$a(r,i),s):o&&(Ga(e,n,o,s),a[t]=void 0)}}var Ja=/(?:Once|Passive|Capture)$/;function Ya(e){let t;if(Ja.test(e)){t={};let n;for(;n=e.match(Ja);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):T(e.slice(2)),t]}var Xa=0,Za=Promise.resolve(),Qa=()=>Xa||=(Za.then(()=>Xa=0),Date.now());function $a(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(d(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&rn(e,t,5,a)}}else rn(r,t,5,[e])};return n.value=e,n.attached=Qa(),n}var eo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,to=(e,t,n,r,i,s)=>{let c=i===`svg`;t===`class`?ka(e,r,c):t===`style`?Pa(e,n,r):a(t)?o(t)||qa(e,t,n,r,s):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):no(e,t,r,c))?(Ua(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Ha(e,t,r,c,s,t!==`value`)):e._isVueCE&&(ro(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!g(r)))?Ua(e,w(t),r,s,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),Ha(e,t,r,c))};function no(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&eo(t)&&h(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return eo(t)&&g(n)?!1:t in e}function ro(e,t){let n=e._def.props;if(!n)return!1;let r=w(t);return Array.isArray(n)?n.some(e=>w(e)===r):Object.keys(n).some(e=>w(e)===r)}var io=s({patchProp:to},Da),ao;function oo(){return ao||=fi(io)}var so=((...e)=>{let t=oo().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=lo(e);if(!r)return;let i=t._component;!h(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,co(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function co(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function lo(e){return g(e)?document.querySelector(e):e}var uo={class:`logo-section`},fo={key:0,class:`nav-spacer`},po={class:`nav-links`},mo=F({__name:`NavbarDesktop`,setup(e){let t=Vt(null),n=Vt(!1),r=null;return $n(()=>{r=new IntersectionObserver(([e])=>{n.value=!e.isIntersecting},{threshold:0}),t.value&&r.observe(t.value)}),rr(()=>{r&&r.disconnect()}),(e,r)=>{let i=lr(`RouterLink`);return R(),Pi(wi,null,[z(`div`,uo,[B(i,{to:`/`},{default:Tn(()=>[...r[0]||=[z(`div`,{class:`logo`},[z(`img`,{src:`/yourbodyandmind/assets/logotransp3-DjxrAR5p.png`,alt:`Your Body and Mind Logo`,class:`logo-image`})],-1)]]),_:1})]),z(`div`,{ref_key:`sentinel`,ref:t,class:`sentinel`},null,512),n.value?(R(),Pi(`div`,fo)):Gi(``,!0),z(`nav`,{class:O([`nav-links-container`,{scrolled:n.value}])},[r[4]||=z(`div`,{class:`logo-text`},`Your Body and Mind`,-1),z(`div`,po,[B(i,{to:`/behandlingar`},{default:Tn(()=>[...r[1]||=[Ui(`Behandlingar`,-1)]]),_:1}),B(i,{to:`/samtal`},{default:Tn(()=>[...r[2]||=[Ui(`Samtal`,-1)]]),_:1}),B(i,{to:`/sandra`},{default:Tn(()=>[...r[3]||=[Ui(`Om Sandra`,-1)]]),_:1})])],2)],64)}}}),ho=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},go=ho(mo,[[`__scopeId`,`data-v-0b7e6fa9`]]),_o={};function vo(e,t){return null}var yo=ho(_o,[[`render`,vo]]);function bo(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function xo(e){if(Array.isArray(e))return e}function So(e){if(Array.isArray(e))return bo(e)}function Co(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function wo(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,Fo(r.key),r)}}function To(e,t,n){return t&&wo(e.prototype,t),n&&wo(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Eo(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=Lo(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function U(e,t,n){return(t=Fo(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Do(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Oo(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function ko(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ao(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jo(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?jo(Object(n),!0).forEach(function(t){U(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jo(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Mo(e,t){return xo(e)||Oo(e,t)||Lo(e,t)||ko()}function No(e){return So(e)||Do(e)||Lo(e)||Ao()}function Po(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Fo(e){var t=Po(e,`string`);return typeof t==`symbol`?t:t+``}function Io(e){"@babel/helpers - typeof";return Io=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Io(e)}function Lo(e,t){if(e){if(typeof e==`string`)return bo(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?bo(e,t):void 0}}var Ro=function(){},zo={},Bo={},Vo=null,Ho={mark:Ro,measure:Ro};try{typeof window<`u`&&(zo=window),typeof document<`u`&&(Bo=document),typeof MutationObserver<`u`&&(Vo=MutationObserver),typeof performance<`u`&&(Ho=performance)}catch{}var Uo=(zo.navigator||{}).userAgent,Wo=Uo===void 0?``:Uo,Go=zo,G=Bo,Ko=Vo,qo=Ho;Go.document;var Jo=!!G.documentElement&&!!G.head&&typeof G.addEventListener==`function`&&typeof G.createElement==`function`,Yo=~Wo.indexOf(`MSIE`)||~Wo.indexOf(`Trident/`),Xo,Zo=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Qo=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,$o={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},es={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ts=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],K=`classic`,ns=`duotone`,rs=`sharp`,is=`sharp-duotone`,as=`chisel`,os=`etch`,ss=`graphite`,cs=`jelly`,ls=`jelly-duo`,us=`jelly-fill`,ds=`mosaic`,fs=`notdog`,ps=`notdog-duo`,ms=`pixel`,hs=`slab`,gs=`slab-duo`,_s=`slab-press`,vs=`slab-press-duo`,ys=`thumbprint`,bs=`utility`,xs=`utility-duo`,Ss=`utility-fill`,Cs=`vellum`,ws=`whiteboard`,Ts=`Classic`,Es=`Duotone`,Ds=`Sharp`,Os=`Sharp Duotone`,ks=`Chisel`,As=`Etch`,js=`Graphite`,Ms=`Jelly`,Ns=`Jelly Duo`,Ps=`Jelly Fill`,Fs=`Mosaic`,Is=`Notdog`,Ls=`Notdog Duo`,Rs=`Pixel`,zs=`Slab`,Bs=`Slab Duo`,Vs=`Slab Press`,Hs=`Slab Press Duo`,Us=`Thumbprint`,Ws=`Utility`,Gs=`Utility Duo`,Ks=`Utility Fill`,qs=`Vellum`,Js=`Whiteboard`,Ys=[K,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws];Xo={},U(U(U(U(U(U(U(U(U(U(Xo,K,Ts),ns,Es),rs,Ds),is,Os),as,ks),os,As),ss,js),cs,Ms),ls,Ns),us,Ps),U(U(U(U(U(U(U(U(U(U(Xo,ds,Fs),fs,Is),ps,Ls),ms,Rs),hs,zs),gs,Bs),_s,Vs),vs,Hs),ys,Us),bs,Ws),U(U(U(U(Xo,xs,Gs),Ss,Ks),Cs,qs),ws,Js);var Xs={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},Zs={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},Qs=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),$s={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},ec=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],tc={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},nc=[`kit`];U(U({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var rc={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},ic={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},ac={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},oc={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},sc,cc={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},lc=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];sc={},U(U(U(U(U(U(U(U(U(U(sc,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),U(U(U(U(U(U(U(U(U(U(sc,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),U(U(U(U(sc,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),U(U({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var uc={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},dc={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},fc={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},pc=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(lc,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),mc=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],hc=[1,2,3,4,5,6,7,8,9,10],gc=hc.concat([11,12,13,14,15,16,17,18,19,20]),_c=[].concat(No(Object.keys(dc)),mc,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,cc.GROUP,cc.SWAP_OPACITY,cc.PRIMARY,cc.SECONDARY],hc.map(function(e){return`${e}x`}),gc.map(function(e){return`w-${e}`})),vc={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},yc=`___FONT_AWESOME___`,bc=16,xc=`fa`,Sc=`svg-inline--fa`,Cc=`data-fa-i2svg`,wc=`data-fa-pseudo-element`,Tc=`data-fa-pseudo-element-pending`,Ec=`data-prefix`,Dc=`data-icon`,Oc=`fontawesome-i2svg`,kc=`async`,Ac=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],jc=[`::before`,`::after`,`:before`,`:after`],Mc=function(){try{return!0}catch{return!1}}();function Nc(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[K]}})}var Pc=W({},$o);Pc[K]=W(W(W(W({},{"fa-duotone":`duotone`}),$o[K]),tc.kit),tc[`kit-duotone`]);var Fc=Nc(Pc),Ic=W({},$s);Ic[K]=W(W(W(W({},{duotone:`fad`}),Ic[K]),oc.kit),oc[`kit-duotone`]);var Lc=Nc(Ic),Rc=W({},fc);Rc[K]=W(W({},Rc[K]),ac.kit);var zc=Nc(Rc),Bc=W({},uc);Bc[K]=W(W({},Bc[K]),rc.kit),Nc(Bc);var Vc=Zo,Hc=`fa-layers-text`,Uc=Qo;Nc(W({},Xs));var Wc=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Gc=es,Kc=[].concat(No(nc),No(_c)),qc=Go.FontAwesomeConfig||{};function Jc(e){var t=G.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function Yc(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}G&&typeof G.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=Mo(e,2),n=t[0],r=t[1],i=Yc(Jc(n));i!=null&&(qc[r]=i)});var Xc={styleDefault:`solid`,familyDefault:K,cssPrefix:xc,replacementClass:Sc,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};qc.familyPrefix&&(qc.cssPrefix=qc.familyPrefix);var Zc=W(W({},Xc),qc);Zc.autoReplaceSvg||(Zc.observeMutations=!1);var q={};Object.keys(Xc).forEach(function(e){Object.defineProperty(q,e,{enumerable:!0,set:function(t){Zc[e]=t,Qc.forEach(function(e){return e(q)})},get:function(){return Zc[e]}})}),Object.defineProperty(q,"familyPrefix",{enumerable:!0,set:function(e){Zc.cssPrefix=e,Qc.forEach(function(e){return e(q)})},get:function(){return Zc.cssPrefix}}),Go.FontAwesomeConfig=q;var Qc=[];function $c(e){return Qc.push(e),function(){Qc.splice(Qc.indexOf(e),1)}}var el=bc,tl={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nl(e){if(!(!e||!Jo)){var t=G.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=G.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return G.head.insertBefore(t,r),e}}var rl=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function il(){for(var e=12,t=``;e-- >0;)t+=rl[Math.random()*62|0];return t}function al(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ol(e){return e.classList?al(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function sl(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function cl(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${sl(e[n])}" `},``).trim()}function ll(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function ul(e){return e.size!==tl.size||e.x!==tl.x||e.y!==tl.y||e.rotate!==tl.rotate||e.flipX||e.flipY}function dl(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function fl(e){var t=e.transform,n=e.width,r=n===void 0?bc:n,i=e.height,a=i===void 0?bc:i,o=e.startCentered,s=o===void 0?!1:o,c=``;return s&&Yo?c+=`translate(${t.x/el-r/2}em, ${t.y/el-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/el}em), calc(-50% + ${t.y/el}em)) `:c+=`translate(${t.x/el}em, ${t.y/el}em) `,c+=`scale(${t.size/el*(t.flipX?-1:1)}, ${t.size/el*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var pl=`:root, :host {
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
}`;function ml(){var e=xc,t=Sc,n=q.cssPrefix,r=q.replacementClass,i=pl;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var hl=!1;function gl(){q.autoAddCss&&!hl&&(nl(ml()),hl=!0)}var _l={mixout:function(){return{dom:{css:ml,insertCss:gl}}},hooks:function(){return{beforeDOMElementCreation:function(){gl()},beforeI2svg:function(){gl()}}}},vl=Go||{};vl[yc]||(vl[yc]={}),vl[yc].styles||(vl[yc].styles={}),vl[yc].hooks||(vl[yc].hooks={}),vl[yc].shims||(vl[yc].shims=[]);var yl=vl[yc],bl=[],xl=function(){G.removeEventListener(`DOMContentLoaded`,xl),Sl=1,bl.map(function(e){return e()})},Sl=!1;Jo&&(Sl=(G.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(G.readyState),Sl||G.addEventListener(`DOMContentLoaded`,xl));function Cl(e){Jo&&(Sl?setTimeout(e,0):bl.push(e))}function wl(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?sl(e):`<${t} ${cl(r)}>${a.map(wl).join(``)}</${t}>`}function Tl(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var El=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Dl=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:El(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Ol(e){return No(e).length===1?e.codePointAt(0).toString(16):null}function kl(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Al(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n===void 0?!1:n,i=kl(t);typeof yl.hooks.addPack==`function`&&!r?yl.hooks.addPack(e,kl(t)):yl.styles[e]=W(W({},yl.styles[e]||{}),i),e===`fas`&&Al(`fa`,t)}var jl=yl.styles,Ml=yl.shims,Nl=Object.keys(zc),Pl=Nl.reduce(function(e,t){return e[t]=Object.keys(zc[t]),e},{}),Fl=null,Il={},Ll={},Rl={},zl={},Bl={};function Vl(e){return~Kc.indexOf(e)}function Hl(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Vl(i)?i:null}var Ul=function(){var e=function(e){return Dl(jl,function(t,n,r){return t[r]=Dl(n,e,{}),t},{})};Il=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Ll=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Bl=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in jl||q.autoFetchSvg,n=Dl(Ml,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Rl=n.names,zl=n.unicodes,Fl=Ql(q.styleDefault,{family:q.familyDefault})};$c(function(e){Fl=Ql(e.styleDefault,{family:q.familyDefault})}),Ul();function Wl(e,t){return(Il[e]||{})[t]}function Gl(e,t){return(Ll[e]||{})[t]}function Kl(e,t){return(Bl[e]||{})[t]}function ql(e){return Rl[e]||{prefix:null,iconName:null}}function Jl(e){var t=zl[e],n=Wl(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function Yl(){return Fl}var Xl=function(){return{prefix:null,iconName:null,rest:[]}};function Zl(e){var t=K,n=Nl.reduce(function(e,t){return e[t]=`${q.cssPrefix}-${t}`,e},{});return Ys.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Pl[r].includes(e)}))&&(t=r)}),t}function Ql(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?K:t,r=Fc[n][e];if(n===ns&&!e)return`fad`;var i=Lc[n][e]||Lc[n][r],a=e in yl.styles?e:null;return i||a||null}function $l(e){var t=[],n=null;return e.forEach(function(e){var r=Hl(q.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function eu(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var tu=pc.concat(ec);function nu(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t===void 0?!1:t,r=null,i=eu(e.filter(function(e){return tu.includes(e)})),a=eu(e.filter(function(e){return!tu.includes(e)})),o=Mo(i.filter(function(e){return r=e,!ts.includes(e)}),1)[0],s=o===void 0?null:o,c=Zl(i),l=W(W({},$l(a)),{},{prefix:Ql(s,{family:c})});return W(W(W({},l),ou({values:e,family:c,styles:jl,config:q,canonical:l,givenPrefix:r})),ru(n,r,l))}function ru(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?ql(i):{},o=Kl(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!jl.far&&jl.fas&&!q.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var iu=Ys.filter(function(e){return e!==K||e!==ns}),au=Object.keys(fc).filter(function(e){return e!==K}).map(function(e){return Object.keys(fc[e])}).flat();function ou(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===ns,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&iu.includes(n)&&(Object.keys(s).find(function(e){return au.includes(e)})||l.autoFetchSvg)&&(r.prefix=Qs.get(n).defaultShortPrefixId,r.iconName=Kl(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=Yl()||`fas`),r}var su=function(){function e(){Co(this,e),this.definitions={}}return To(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=W(W({},e.definitions[n]||{}),t[n]),Al(n,t[n]);var r=zc[K][n];r&&Al(r,t[n]),Ul()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),cu=[],lu={},uu={},du=Object.keys(uu);function fu(e,t){var n=t.mixoutsTo;return cu=e,lu={},Object.keys(uu).forEach(function(e){du.indexOf(e)===-1&&delete uu[e]}),cu.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),Io(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){lu[e]||(lu[e]=[]),lu[e].push(r[e])})}e.provides&&e.provides(uu)}),n}function pu(e,t){var n=[...arguments].slice(2);return(lu[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function mu(e){var t=[...arguments].slice(1);(lu[e]||[]).forEach(function(e){e.apply(null,t)})}function hu(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return uu[e]?uu[e].apply(null,t):void 0}function gu(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||Yl();if(t)return t=Kl(n,t)||t,Tl(_u.definitions,n,t)||Tl(yl.styles,n,t)}var _u=new su,vu={noAuto:function(){q.autoReplaceSvg=!1,q.observeMutations=!1,mu(`noAuto`)},config:q,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Jo?(mu(`beforeI2svg`,e),hu(`pseudoElements2svg`,e),hu(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;q.autoReplaceSvg===!1&&(q.autoReplaceSvg=!0),q.observeMutations=!0,Cl(function(){yu({autoReplaceSvgRoot:t}),mu(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(Io(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Kl(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Ql(e[0]);return{prefix:n,iconName:Kl(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${q.cssPrefix}-`)>-1||e.match(Vc))){var r=nu(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||Yl(),iconName:Kl(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=Yl();return{prefix:i,iconName:Kl(i,e)||e}}}},library:_u,findIconDefinition:gu,toHtml:wl},yu=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?G:e;(Object.keys(yl.styles).length>0||q.autoFetchSvg)&&Jo&&q.autoReplaceSvg&&vu.dom.i2svg({node:t})};function bu(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return wl(e)})}}),Object.defineProperty(e,"node",{get:function(){if(Jo){var t=G.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function xu(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(ul(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=ll(W(W({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function Su(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${q.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:W(W({},i),{},{id:o}),children:r}]}]}function Cu(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function wu(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u===void 0?!1:u,f=r.found?r:n,p=f.width,m=f.height,h=[q.replacementClass,a?`${q.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:W(W({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!Cu(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[Cc]=``);var _=W(W({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:W({},l.styles)}),v=r.found&&n.found?hu(`generateAbstractMask`,_)||{children:[],attributes:{}}:hu(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?Su(_):xu(_)}function Tu(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o===void 0?!1:o,c=W(W({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[Cc]=``);var l=W({},a.styles);ul(i)&&(l.transform=fl({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=ll(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Eu(e){var t=e.content,n=e.extra,r=W(W({},n.attributes),{},{class:n.classes.join(` `)}),i=ll(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var Du=yl.styles;function Ou(e){var t=e[0],n=e[1],r=Mo(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${q.cssPrefix}-${Gc.GROUP}`},children:[{tag:`path`,attributes:{class:`${q.cssPrefix}-${Gc.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${q.cssPrefix}-${Gc.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var ku={found:!1,width:512,height:512};function Au(e,t){!Mc&&!q.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function ju(e,t){var n=t;return t===`fa`&&q.styleDefault!==null&&(t=Yl()),new Promise(function(r,i){if(n===`fa`){var a=ql(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Du[t]&&Du[t][e]){var o=Du[t][e];return r(Ou(o))}Au(e,t),r(W(W({},ku),{},{icon:q.showMissingIcons&&e&&hu(`missingIconAbstract`)||{}}))})}var Mu=function(){},Nu=q.measurePerformance&&qo&&qo.mark&&qo.measure?qo:{mark:Mu,measure:Mu},Pu=`FA "7.3.0"`,Fu=function(e){return Nu.mark(`${Pu} ${e} begins`),function(){return Iu(e)}},Iu=function(e){Nu.mark(`${Pu} ${e} ends`),Nu.measure(`${Pu} ${e}`,`${Pu} ${e} begins`,`${Pu} ${e} ends`)},Lu={begin:Fu,end:Iu},Ru=function(){};function zu(e){return typeof(e.getAttribute?e.getAttribute(Cc):null)==`string`}function Bu(e){var t=e.getAttribute?e.getAttribute(Ec):null,n=e.getAttribute?e.getAttribute(Dc):null;return t&&n}function Vu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(q.replacementClass)}function Hu(){return q.autoReplaceSvg===!0?qu.replace:qu[q.autoReplaceSvg]||qu.replace}function Uu(e){return G.createElementNS(`http://www.w3.org/2000/svg`,e)}function Wu(e){return G.createElement(e)}function Gu(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Uu:Wu:t;if(typeof e==`string`)return G.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Gu(e,{ceFn:n}))}),r}function Ku(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var qu={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Gu(e),t)}),t.getAttribute(Cc)===null&&q.keepOriginalSource){var n=G.createComment(Ku(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~ol(t).indexOf(q.replacementClass))return qu.replace(e);var r=RegExp(`${q.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===q.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return wl(e)}).join(`
`);t.setAttribute(Cc,``),t.innerHTML=a}};function Ju(e){e()}function Yu(e,t){var n=typeof t==`function`?t:Ru;if(e.length===0)n();else{var r=Ju;q.mutateApproach===kc&&(r=Go.requestAnimationFrame||Ju),r(function(){var t=Hu(),r=Lu.begin(`mutate`);e.map(t),r(),n()})}}var Xu=!1;function Zu(){Xu=!0}function Qu(){Xu=!1}var $u=null;function ed(e){if(Ko&&q.observeMutations){var t=e.treeCallback,n=t===void 0?Ru:t,r=e.nodeCallback,i=r===void 0?Ru:r,a=e.pseudoElementsCallback,o=a===void 0?Ru:a,s=e.observeMutationsRoot,c=s===void 0?G:s;$u=new Ko(function(e){if(!Xu){var t=Yl();al(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!zu(e.addedNodes[0])&&(q.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&q.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&zu(e.target)&&~Wc.indexOf(e.attributeName))if(e.attributeName===`class`&&Bu(e.target)){var r=nu(ol(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Ec,a||t),s&&e.target.setAttribute(Dc,s)}else Vu(e.target)&&i(e.target)})}}),Jo&&$u.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function td(){$u&&$u.disconnect()}function nd(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function rd(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=nu(ol(e));return i.prefix||=Yl(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Gl(i.prefix,e.innerText)||Wl(i.prefix,Ol(e.innerText))),!i.iconName&&q.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function id(e){return al(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function ad(){return{iconName:null,prefix:null,transform:tl,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function od(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=rd(e),r=n.iconName,i=n.prefix,a=n.rest,o=id(e),s=pu(`parseNodeAttributes`,{},e);return W({iconName:r,prefix:i,transform:tl,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?nd(e):[],attributes:o}},s)}var sd=yl.styles;function cd(e){var t=q.autoReplaceSvg===`nest`?od(e,{styleParser:!1}):od(e);return~t.extra.classes.indexOf(Hc)?hu(`generateLayersText`,e,t):hu(`generateSvgReplacementMutation`,e,t)}function ld(){return[].concat(No(ec),No(pc))}function ud(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Jo)return Promise.resolve();var n=G.documentElement.classList,r=function(e){return n.add(`${Oc}-${e}`)},i=function(e){return n.remove(`${Oc}-${e}`)},a=q.autoFetchSvg?ld():ts.concat(Object.keys(sd));a.includes(`fa`)||a.push(`fa`);var o=[`.${Hc}:not([${Cc}])`].concat(a.map(function(e){return`.${e}:not([${Cc}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=al(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Lu.begin(`onTree`),l=s.reduce(function(e,t){try{var n=cd(t);n&&e.push(n)}catch(e){Mc||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){Yu(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function dd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;cd(e).then(function(e){e&&Yu([e],t)})}function fd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:gu(t||{}),i=n.mask;return i&&=(i||{}).icon?i:gu(i||{}),e(r,W(W({},n),{},{mask:i}))}}var pd=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?tl:n,i=t.symbol,a=i===void 0?!1:i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return bu(W({type:`icon`},e),function(){return mu(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),wu({icons:{main:Ou(v),mask:s?Ou(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:W(W({},tl),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},md={mixout:function(){return{icon:fd(pd)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=ud,e.nodeCallback=dd,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?G:t,r=e.callback;return ud(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([ju(n,r),o.iconName?ju(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=Mo(o,2),u=l[0],d=l[1];t([e,wu({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=ll(a);o.length>0&&(n.style=o);var s;return ul(i)&&(s=hu(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},hd={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return bu({type:`layer`},function(){mu(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${q.cssPrefix}-layers`].concat(No(r)).join(` `)},children:n}]})}}}},gd={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return bu({type:`counter`,content:e},function(){return mu(`beforeDOMElementCreation`,{content:e,params:t}),Eu({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${q.cssPrefix}-layers-counter`].concat(No(a))}})})}}}},_d={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?tl:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return bu({type:`text`,content:e},function(){return mu(`beforeDOMElementCreation`,{content:e,params:t}),Tu({content:e,transform:W(W({},tl),r),extra:{attributes:s,styles:l,classes:[`${q.cssPrefix}-layers-text`].concat(No(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(Yo){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Tu({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},vd=RegExp(`"`,`ug`),yd=[1105920,1112319],bd=W(W(W(W({},{FontAwesome:{normal:`fas`,400:`fas`}}),Zs),vc),ic),xd=Object.keys(bd).reduce(function(e,t){return e[t.toLowerCase()]=bd[t],e},{}),Sd=Object.keys(xd).reduce(function(e,t){var n=xd[t];return e[t]=n[900]||No(Object.entries(n))[0][1],e},{});function Cd(e){return Ol(No(e.replace(vd,``))[0]||``)}function wd(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(vd,``),r=n.codePointAt(0),i=r>=yd[0]&&r<=yd[1],a=n.length===2?n[0]===n[1]:!1;return i||a||t}function Td(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(xd[n]||{})[i]||Sd[n]}function Ed(e,t){var n=`${Tc}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=al(e.children).filter(function(e){return e.getAttribute(wc)===t})[0],o=Go.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Uc),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Td(s,l),p=Cd(d),m=c[0].startsWith(`FontAwesome`),h=wd(o),g=Wl(f,p),_=g;if(m){var v=Jl(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Ec)!==f||a.getAttribute(Dc)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=ad(),b=y.extra;b.attributes[wc]=t,ju(g,f).then(function(i){var a=wu(W(W({},y),{},{icons:{main:i,mask:Xl()},prefix:f,iconName:_,extra:b,watchable:!0})),o=G.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return wl(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Dd(e){return Promise.all([Ed(e,`::before`),Ed(e,`::after`)])}function Od(e){return e.parentNode!==document.head&&!~Ac.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(wc)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var kd=function(e){return!!e&&jc.some(function(t){return e.includes(t)})},Ad=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=Eo(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(kd(a)){var o=jc.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function jd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Jo){var n;if(t)n=e;else if(q.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=Eo(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=Eo(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=Eo(Ad(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){q.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=al(n).filter(Od).map(Dd),i=Lu.begin(`searchPseudoElements`);Zu(),Promise.all(r).then(function(){i(),Qu(),e()}).catch(function(){i(),Qu(),t()})})}}var Md={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=jd,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?G:t;q.searchPseudoElements&&jd(n)}}},Nd=!1,Pd={mixout:function(){return{dom:{unwatch:function(){Zu(),Nd=!0}}}},hooks:function(){return{bootstrap:function(){ed(pu(`mutationObserverCallbacks`,{}))},noAuto:function(){td()},watch:function(e){var t=e.observeMutationsRoot;Nd?Qu():ed(pu(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Fd=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Id={mixout:function(){return{parse:{transform:function(e){return Fd(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Fd(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:W({},a.outer),children:[{tag:`g`,attributes:W({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:W(W({},t.icon.attributes),a.path)}]}]}}}},Ld={x:0,y:0,width:`100%`,height:`100%`};function Rd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function zd(e){return e.tag===`g`?e.children:[e]}fu([_l,md,hd,gd,_d,Md,Pd,Id,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?nu(n.split(` `).map(function(e){return e.trim()})):Xl();return r.prefix||=Yl(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=dl({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:W(W({},Ld),{},{fill:`white`})},p=c.children?{children:c.children.map(Rd)}:{},m={tag:`g`,attributes:W({},d.inner),children:[Rd(W({tag:c.tag,attributes:W(W({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:W({},d.outer),children:[m]},g=`mask-${a||il()}`,_=`clip-${a||il()}`,v={tag:`mask`,attributes:W(W({},Ld),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:zd(u)},v]};return t.push(y,{tag:`rect`,attributes:W({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Ld)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;Go.matchMedia&&(t=Go.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:W(W({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=W(W({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:W(W({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:W(W({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:W(W({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:W(W({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:W(W({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:W(W({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:W(W({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:vu}),vu.noAuto,vu.config,vu.library,vu.dom;var Bd=vu.parse;vu.findIconDefinition,vu.toHtml;var Vd=vu.icon;vu.layer,vu.text,vu.counter;function Hd(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Ud(e){if(Array.isArray(e))return Hd(e)}function J(e,t,n){return(t=Zd(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wd(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Gd(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Kd(Object(n),!0).forEach(function(t){J(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kd(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function qd(e,t){if(e==null)return{};var n,r,i=Jd(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Jd(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Yd(e){return Ud(e)||Wd(e)||$d(e)||Gd()}function Xd(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Zd(e){var t=Xd(e,`string`);return typeof t==`symbol`?t:t+``}function Qd(e){"@babel/helpers - typeof";return Qd=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Qd(e)}function $d(e,t){if(e){if(typeof e==`string`)return Hd(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Hd(e,t):void 0}}function ef(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?J({},e,t):{}}function tf(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip===`horizontal`||e.flip===`both`,"fa-flip-vertical":e.flip===`vertical`||e.flip===`both`},J(J(J(J(J(J(J(J(J(J(t,`fa-${e.size}`,e.size!==null),`fa-rotate-${e.rotation}`,e.rotation!==null),`fa-rotate-by`,e.rotateBy),`fa-pull-${e.pull}`,e.pull!==null),`fa-swap-opacity`,e.swapOpacity),`fa-bounce`,e.bounce),`fa-shake`,e.shake),`fa-beat`,e.beat),`fa-fade`,e.fade),`fa-beat-fade`,e.beatFade),J(J(J(J(J(J(J(J(J(J(t,`fa-flash`,e.flash),`fa-spin-pulse`,e.spinPulse),`fa-spin-reverse`,e.spinReverse),`fa-width-auto`,e.widthAuto),`fa-flip-360`,e.flip360),`fa-buzz`,e.buzz),`fa-float`,e.float),`fa-jello`,e.jello),`fa-spin-snap`,e.spinSnap),`fa-spin-snap-4`,e.spinSnap4),J(J(J(t,`fa-spin-snap-8`,e.spinSnap8),`fa-swing`,e.swing),`fa-wag`,e.wag));return Object.keys(n).map(function(e){return n[e]?e:null}).filter(function(e){return e})}var nf=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},rf={exports:{}};(function(e){(function(t){var n=function(e,t,r){if(!l(t)||d(t)||f(t)||p(t)||c(t))return t;var i,a=0,o=0;if(u(t))for(i=[],o=t.length;a<o;a++)i.push(n(e,t[a],r));else for(var s in i={},t)Object.prototype.hasOwnProperty.call(t,s)&&(i[e(s,r)]=n(e,t[s],r));return i},r=function(e,t){t||={};var n=t.separator||`_`,r=t.split||/(?=[A-Z])/;return e.split(r).join(n)},i=function(e){return m(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():``}),e.substr(0,1).toLowerCase()+e.substr(1))},a=function(e){var t=i(e);return t.substr(0,1).toUpperCase()+t.substr(1)},o=function(e,t){return r(e,t).toLowerCase()},s=Object.prototype.toString,c=function(e){return typeof e==`function`},l=function(e){return e===Object(e)},u=function(e){return s.call(e)==`[object Array]`},d=function(e){return s.call(e)==`[object Date]`},f=function(e){return s.call(e)==`[object RegExp]`},p=function(e){return s.call(e)==`[object Boolean]`},m=function(e){return e-=0,e===e},h=function(e,t){var n=t&&`process`in t?t.process:t;return typeof n==`function`?function(t,r){return n(t,e,r)}:e},g={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(e,t){return n(h(i,t),e)},decamelizeKeys:function(e,t){return n(h(o,t),e,t)},pascalizeKeys:function(e,t){return n(h(a,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=g:t.humps=g})(nf)})(rf);var af=rf.exports,of=[`gradientFill`],sf=[`class`,`style`],cf=[`type`,`stops`,`id`];function lf(e){return e.split(`;`).map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(`:`),r=af.camelize(t.slice(0,n));return e[r]=t.slice(n+1).trim(),e},{})}function uf(e){return e.split(/\s+/).reduce(function(e,t){return e[t]=!0,e},{})}function df(e,t){return va(`stop`,Y({key:`${t}-${e.offset}`,offset:e.offset,"stop-color":e.color},e.opacity!==void 0&&{"stop-opacity":e.opacity}))}function ff(e){if(typeof e==`string`)return e;var t=(e.children||[]).map(ff);return e.tag===`path`&&e.attributes&&`fill`in e.attributes?Y(Y({},e),{},{attributes:Y(Y({},e.attributes),{},{fill:void 0}),children:t}):Y(Y({},e),{},{children:t})}function pf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e==`string`)return e;var r=t.gradientFill,i=r===void 0?null:r,a=qd(t,of),o=i||`fill`in n?ff(e):e,s=(o.children||[]).map(function(e){return pf(e,{},{})}),c=Object.keys(o.attributes||{}).reduce(function(e,t){var n=o.attributes[t];switch(t){case`class`:e.class=uf(n);break;case`style`:e.style=lf(n);break;default:e.attrs[t]=n}return e},{attrs:{},class:{},style:{}});n.class;var l=n.style,u=l===void 0?{}:l,d=qd(n,sf);if(i&&i.id&&(i.type===`linear`||i.type===`radial`)){var f=i.type,p=i.stops,m=p===void 0?[]:p,h=i.id,g=qd(i,cf),_=va(f===`linear`?`linearGradient`:`radialGradient`,Y(Y({},g),{},{id:h}),m.map(df));return va(o.tag,Y(Y(Y(Y({},a),{},{class:c.class,style:Y(Y({},c.style),u)},c.attrs),d),{},{fill:`url(#${h})`}),[_].concat(Yd(s)))}return va(e.tag,Y(Y(Y({},a),{},{class:c.class,style:Y(Y({},c.style),u)},c.attrs),d),s)}var mf=!1;try{mf=!0}catch{}function hf(){if(!mf&&console&&typeof console.error==`function`){var e;(e=console).error.apply(e,arguments)}}function gf(e){if(e&&Qd(e)===`object`&&e.prefix&&e.iconName&&e.icon)return e;if(Bd.icon)return Bd.icon(e);if(e===null)return null;if(Qd(e)===`object`&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e==`string`)return{prefix:`fas`,iconName:e}}var _f=F({name:`FontAwesomeIcon`,props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,`horizontal`,`vertical`,`both`].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return[`right`,`left`].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`1x`,`2x`,`3x`,`4x`,`5x`,`6x`,`7x`,`8x`,`9x`,`10x`].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1},gradientFill:{type:Object,default:null,validator:function(e){return typeof e.id!=`string`||!e.id?(console.warn(`FontAwesomeIcon: gradientFill.id must be a non-empty string`),!1):e.type!==`linear`&&e.type!==`radial`?(console.warn(`FontAwesomeIcon: gradientFill.type must be "linear" or "radial"`),!1):!0}},flip360:{type:Boolean,default:!1},buzz:{type:Boolean,default:!1},float:{type:Boolean,default:!1},jello:{type:Boolean,default:!1},spinSnap:{type:Boolean,default:!1},spinSnap4:{type:Boolean,default:!1},spinSnap8:{type:Boolean,default:!1},swing:{type:Boolean,default:!1},wag:{type:Boolean,default:!1}},setup:function(e,t){var n=t.attrs,r=H(function(){return gf(e.icon)}),i=H(function(){return ef(`classes`,tf(e))}),a=H(function(){return ef(`transform`,typeof e.transform==`string`?Bd.transform(e.transform):e.transform)}),o=H(function(){return ef(`mask`,gf(e.mask))}),s=H(function(){var t=Y(Y(Y(Y({},i.value),a.value),o.value),{},{symbol:e.symbol,maskId:e.maskId});return t.title=e.title,t.titleId=e.titleId,Vd(r.value,t)});jn(s,function(e){if(!e)return hf(`Could not find one or more icon(s)`,r.value,o.value)},{immediate:!0}),e.gradientFill&&e.symbol&&hf(`gradientFill is not supported when symbol is true and will be ignored`);var c=H(function(){return s.value?pf(s.value.abstract[0],{gradientFill:e.symbol?null:e.gradientFill},n):null});return function(){return c.value}}}),vf={prefix:`fab`,iconName:`facebook`,icon:[512,512,[62e3],`f09a`,`M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z`]},yf={prefix:`fab`,iconName:`instagram`,icon:[448,512,[],`f16d`,`M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z`]},bf={class:`footer-mobile`},xf={class:`social-icons`},Sf={href:`https://www.facebook.com/Ayurvediskabehandlingar`,target:`_blank`},Cf={href:`https://www.instagram.com/ayurvediskabehandlingar/`,target:`_blank`},wf=ho(F({__name:`FooterMobile`,setup(e){return(e,t)=>(R(),Pi(`footer`,bf,[t[0]||=z(`p`,null,`Järnvägsgatan 6, 645 43 Strängnäs`,-1),t[1]||=z(`p`,null,`Telefon: 0793-356491`,-1),t[2]||=z(`p`,null,[Ui(` E-post: `),z(`a`,{href:`mailto:sandra@yourbodyandmind.se`},`sandra@yourbodyandmind.se`)],-1),z(`div`,xf,[z(`a`,Sf,[B(Gt(_f),{icon:Gt(vf)},null,8,[`icon`])]),z(`a`,Cf,[B(Gt(_f),{icon:Gt(yf)},null,8,[`icon`])])])]))}}),[[`__scopeId`,`data-v-48d30e7b`]]),Tf={class:`nav-links`},Ef=ho(F({__name:`NavbarMobile`,setup(e){let t=Vt(!1),n=Vt(!1),r=()=>{t.value=!t.value},i=()=>{t.value=!1};jn(t,e=>{if(e){let e=window.scrollY;document.body.style.position=`fixed`,document.body.style.top=`-${e}px`,document.body.style.width=`100%`}else{let e=document.body.style.top;document.body.style.position=``,document.body.style.top=``,document.body.style.width=``,e&&window.scrollTo(0,parseInt(e||`0`)*-1)}});let a=()=>{n.value=window.scrollY>50};return $n(()=>{window.addEventListener(`scroll`,a)}),rr(()=>{window.removeEventListener(`scroll`,a)}),(e,a)=>{let o=lr(`RouterLink`),s=lr(`router-link`);return R(),Pi(`nav`,{class:O([`navbar-mobile`,{scrolled:n.value}])},[B(o,{to:`/`},{default:Tn(()=>[...a[0]||=[z(`div`,{class:`logo-container`},[z(`div`,{class:`logo`},[z(`img`,{src:`/yourbodyandmind/assets/logotransp3-DjxrAR5p.png`,alt:`Your Body and Mind Logo`,class:`logo-image`})]),z(`div`,{class:`logo-text`},[z(`span`,null,`Your Body and Mind`)])],-1)]]),_:1}),z(`button`,{class:O([`hamburger`,{active:t.value}]),onClick:r,"aria-label":`Toggle menu`},[...a[1]||=[z(`span`,null,null,-1),z(`span`,null,null,-1),z(`span`,null,null,-1)]],2),z(`div`,{class:O([`overlay`,{active:t.value}]),onClick:i},null,2),z(`div`,{class:O([`menu-panel`,{open:t.value}])},[z(`ul`,Tf,[z(`li`,null,[B(s,{to:`/behandlingar`,onClick:i},{default:Tn(()=>[...a[2]||=[Ui(`Behandlingar`,-1)]]),_:1})]),z(`li`,null,[B(s,{to:`/samtal`,onClick:i},{default:Tn(()=>[...a[3]||=[Ui(`Samtal`,-1)]]),_:1})]),z(`li`,null,[B(s,{to:`/sandra`,onClick:i},{default:Tn(()=>[...a[4]||=[Ui(`Sandra`,-1)]]),_:1})]),z(`li`,null,[z(`a`,{href:`https://www.bokadirekt.se/places/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195`,target:`_blank`,onClick:i},`Boka`)])])],2)],2)}}}),[[`__scopeId`,`data-v-40807c77`]]),Df=()=>{let e=Vt(window.innerWidth),t=Vt(window.innerHeight),n=()=>{e.value=window.innerWidth,t.value=window.innerHeight};return window.addEventListener(`resize`,n),rr(()=>{window.removeEventListener(`resize`,n)}),{width:e,height:t}},Of={key:0,class:`app-mobile`},kf={class:`main-wrapper`},Af={key:1,class:`app-desktop`},jf={class:`main-wrapper-desktop`},Mf=ho(F({__name:`App`,setup(e){let{width:t}=Df(),n=H(()=>t.value<768);return(e,t)=>{let r=lr(`router-view`);return n.value?(R(),Pi(`div`,Of,[B(Ef),z(`main`,kf,[B(r)]),B(wf)])):(R(),Pi(`div`,Af,[B(go),z(`main`,jf,[B(r)]),B(yo)]))}}}),[[`__scopeId`,`data-v-300ba819`]]),Nf=typeof document<`u`;function Pf(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function Ff(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&Pf(e.default)}var X=Object.assign;function If(e,t){let n={};for(let r in t){let i=t[r];n[r]=Rf(i)?i.map(e):e(i)}return n}var Lf=()=>{},Rf=Array.isArray;function zf(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var Bf=/#/g,Vf=/&/g,Hf=/\//g,Uf=/=/g,Wf=/\?/g,Gf=/\+/g,Kf=/%5B/g,qf=/%5D/g,Jf=/%5E/g,Yf=/%60/g,Xf=/%7B/g,Zf=/%7C/g,Qf=/%7D/g,$f=/%20/g;function ep(e){return e==null?``:encodeURI(``+e).replace(Zf,`|`).replace(Kf,`[`).replace(qf,`]`)}function tp(e){return ep(e).replace(Xf,`{`).replace(Qf,`}`).replace(Jf,`^`)}function np(e){return ep(e).replace(Gf,`%2B`).replace($f,`+`).replace(Bf,`%23`).replace(Vf,`%26`).replace(Yf,"`").replace(Xf,`{`).replace(Qf,`}`).replace(Jf,`^`)}function rp(e){return np(e).replace(Uf,`%3D`)}function ip(e){return ep(e).replace(Bf,`%23`).replace(Wf,`%3F`)}function ap(e){return ip(e).replace(Hf,`%2F`)}function op(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var sp=/\/$/,cp=e=>e.replace(sp,``);function lp(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=_p(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:op(o)}}function up(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function dp(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function fp(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&pp(t.matched[r],n.matched[i])&&mp(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function pp(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function mp(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!hp(e[n],t[n]))return!1;return!0}function hp(e,t){return Rf(e)?gp(e,t):Rf(t)?gp(t,e):e?.valueOf()===t?.valueOf()}function gp(e,t){return Rf(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function _p(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`)if(s===`..`)a>1&&a--;else break;return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var vp={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0},yp=function(e){return e.pop=`pop`,e.push=`push`,e}({}),bp=function(e){return e.back=`back`,e.forward=`forward`,e.unknown=``,e}({});function xp(e){if(!e)if(Nf){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^\/]+/,``)}else e=`/`;return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),cp(e)}var Sp=/^[^#]+#/;function Cp(e,t){return e.replace(Sp,`#`)+t}function wp(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var Tp=()=>({left:window.scrollX,top:window.scrollY});function Ep(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=wp(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Dp(e,t){return(history.state?history.state.position-t:-1)+e}var Op=new Map;function kp(e,t){Op.set(e,t)}function Ap(e){let t=Op.get(e);return Op.delete(e),t}function jp(e){return typeof e==`string`||e&&typeof e==`object`}function Mp(e){return typeof e==`string`||typeof e==`symbol`}var Z=function(e){return e[e.MATCHER_NOT_FOUND=1]=`MATCHER_NOT_FOUND`,e[e.NAVIGATION_GUARD_REDIRECT=2]=`NAVIGATION_GUARD_REDIRECT`,e[e.NAVIGATION_ABORTED=4]=`NAVIGATION_ABORTED`,e[e.NAVIGATION_CANCELLED=8]=`NAVIGATION_CANCELLED`,e[e.NAVIGATION_DUPLICATED=16]=`NAVIGATION_DUPLICATED`,e}({}),Np=Symbol(``);Z.MATCHER_NOT_FOUND,Z.NAVIGATION_GUARD_REDIRECT,Z.NAVIGATION_ABORTED,Z.NAVIGATION_CANCELLED,Z.NAVIGATION_DUPLICATED;function Pp(e,t){return X(Error(),{type:e,[Np]:!0},t)}function Fp(e,t){return e instanceof Error&&Np in e&&(t==null||!!(e.type&t))}function Ip(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(Gf,` `),i=r.indexOf(`=`),a=op(i<0?r:r.slice(0,i)),o=i<0?null:op(r.slice(i+1));if(a in t){let e=t[a];Rf(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function Lp(e){let t=``;for(let n in e){let r=e[n];if(n=rp(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(Rf(r)?r.map(e=>e&&np(e)):[r&&np(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function Rp(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Rf(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}var zp=Symbol(``),Bp=Symbol(``),Vp=Symbol(``),Hp=Symbol(``),Up=Symbol(``);function Wp(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Gp(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c(Pp(Z.NAVIGATION_ABORTED,{from:n,to:t})):e instanceof Error?c(e):jp(e)?c(Pp(Z.NAVIGATION_GUARD_REDIRECT,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function Kp(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(!(t!==`beforeRouteEnter`&&!o.instances[e]))if(Pf(s)){let c=(s.__vccOpts||s)[t];c&&a.push(Gp(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=Ff(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&Gp(c,n,r,o,e,i)()}))}}return a}function qp(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>pp(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>pp(e,s))||i.push(s))}return[n,r,i]}var Jp=()=>location.protocol+`//`+location.host;function Yp(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),dp(n,``)}return dp(n,e)+r+i}function Xp(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=Yp(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:yp.pop,direction:u?u>0?bp.forward:bp.back:bp.unknown})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(X({},e.state,{scroll:Tp()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function Zp(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Tp():null}}function Qp(e){let{history:t,location:n}=window,r={value:Yp(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:Jp()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,X({},t.state,Zp(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=X({},i.value,t.state,{forward:e,scroll:Tp()});a(o.current,o,!0),a(e,X({},Zp(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function $p(e){e=xp(e);let t=Qp(e),n=Xp(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=X({location:``,base:e,go:r,createHref:Cp.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}var em=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.Group=2]=`Group`,e}({}),Q=function(e){return e[e.Static=0]=`Static`,e[e.Param=1]=`Param`,e[e.ParamRegExp=2]=`ParamRegExp`,e[e.ParamRegExpEnd=3]=`ParamRegExpEnd`,e[e.EscapeNext=4]=`EscapeNext`,e}(Q||{}),tm={type:em.Static,value:``},nm=/[a-zA-Z0-9_]/;function rm(e){if(!e)return[[]];if(e===`/`)return[[tm]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=Q.Static,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===Q.Static?a.push({type:em.Static,value:l}):n===Q.Param||n===Q.ParamRegExp||n===Q.ParamRegExpEnd?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:em.Param,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;){if(c=e[s++],c===`\\`&&n!==Q.ParamRegExp){r=n,n=Q.EscapeNext;continue}switch(n){case Q.Static:c===`/`?(l&&d(),o()):c===`:`?(d(),n=Q.Param):f();break;case Q.EscapeNext:f(),n=r;break;case Q.Param:c===`(`?n=Q.ParamRegExp:nm.test(c)?f():(d(),n=Q.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case Q.ParamRegExp:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=Q.ParamRegExpEnd:u+=c;break;case Q.ParamRegExpEnd:d(),n=Q.Static,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`);break}}return n===Q.ParamRegExp&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var im=`[^/]+?`,am={sensitive:!1,strict:!1,start:!0,end:!0},$=function(e){return e[e._multiplier=10]=`_multiplier`,e[e.Root=90]=`Root`,e[e.Segment=40]=`Segment`,e[e.SubSegment=30]=`SubSegment`,e[e.Static=40]=`Static`,e[e.Dynamic=20]=`Dynamic`,e[e.BonusCustomRegExp=10]=`BonusCustomRegExp`,e[e.BonusWildcard=-50]=`BonusWildcard`,e[e.BonusRepeatable=-20]=`BonusRepeatable`,e[e.BonusOptional=-8]=`BonusOptional`,e[e.BonusStrict=.7000000000000001]=`BonusStrict`,e[e.BonusCaseSensitive=.25]=`BonusCaseSensitive`,e}($||{}),om=/[.+*?^${}()[\]/\\]/g;function sm(e,t){let n=X({},am,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[$.Root];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=$.Segment+(n.sensitive?$.BonusCaseSensitive:0);if(o.type===em.Static)r||(i+=`/`),i+=o.value.replace(om,`\\$&`),s+=$.Static;else if(o.type===em.Param){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||im;if(u!==im){s+=$.BonusCustomRegExp;try{`${u}`}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=$.Dynamic,c&&(s+=$.BonusOptional),n&&(s+=$.BonusRepeatable),u===`.*`&&(s+=$.BonusWildcard)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=$.BonusStrict}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===em.Static)n+=e.value;else if(e.type===em.Param){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Rf(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Rf(c)?c.join(`/`):c;if(!l)if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`);n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function cm(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===$.Static+$.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===$.Static+$.Segment?1:-1:0}function lm(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=cm(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(um(r))return 1;if(um(i))return-1}return i.length-r.length}function um(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var dm={strict:!1,end:!0,sensitive:!1};function fm(e,t,n){let r=X(sm(rm(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function pm(e,t){let n=[],r=new Map;t=zf(dm,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=hm(e);s.aliasOf=r&&r.record;let l=zf(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(hm(X({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=fm(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!_m(d)&&o(e.name)),xm(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:Lf}function o(e){if(Mp(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=ym(e,n);n.splice(t,0,e),e.record.name&&!_m(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw Pp(Z.MATCHER_NOT_FOUND,{location:e});s=i.record.name,a=X(mm(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&mm(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw Pp(Z.MATCHER_NOT_FOUND,{location:e,currentLocation:t});s=i.record.name,a=X({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:vm(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function mm(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function hm(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:gm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function gm(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function _m(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function vm(e){return e.reduce((e,t)=>X(e,t.meta),{})}function ym(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;lm(e,t[i])<0?r=i:n=i+1}let i=bm(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function bm(e){let t=e;for(;t=t.parent;)if(xm(t)&&lm(e,t)===0)return t}function xm({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Sm(e){let t=On(Vp),n=On(Hp),r=H(()=>{let n=Gt(e.to);return t.resolve(n)}),i=H(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(pp.bind(null,i));if(o>-1)return o;let s=Dm(e[t-2]);return t>1&&Dm(i)===s&&a[a.length-1].path!==s?a.findIndex(pp.bind(null,e[t-2])):o}),a=H(()=>i.value>-1&&Em(n.params,r.value.params)),o=H(()=>i.value>-1&&i.value===n.matched.length-1&&mp(n.params,r.value.params));function s(n={}){if(Tm(n)){let n=t[Gt(e.replace)?`replace`:`push`](Gt(e.to)).catch(Lf);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:H(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function Cm(e){return e.length===1?e[0]:e}var wm=F({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:Sm,setup(e,{slots:t}){let n=At(Sm(e)),{options:r}=On(Vp),i=H(()=>({[Om(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[Om(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&Cm(t.default(n));return e.custom?r:va(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Tm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Em(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!Rf(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function Dm(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var Om=(e,t,n)=>e??t??n,km=F({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=On(Up),i=H(()=>e.route||r.value),a=On(Bp,0),o=H(()=>{let e=Gt(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=H(()=>i.value.matched[o.value]);Dn(Bp,H(()=>o.value+1)),Dn(zp,s),Dn(Up,i);let c=Vt();return jn(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!pp(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return Am(n.default,{Component:l,route:r});let u=o.props[a],d=va(l,X({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return Am(n.default,{Component:d,route:r})||d}}});function Am(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var jm=km;function Mm(e){let t=pm(e.routes,e),n=e.parseQuery||Ip,r=e.stringifyQuery||Lp,i=e.history,a=Wp(),o=Wp(),s=Wp(),c=Ht(vp),l=vp;Nf&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=If.bind(null,e=>``+e),d=If.bind(null,ap),f=If.bind(null,op);function p(e,n){let r,i;return Mp(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=X({},a||c.value),typeof e==`string`){let r=lp(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return X(r,o,{params:f(o.params),hash:op(r.hash),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=X({},e,{path:lp(n,e.path,a.path).path});else{let t=X({},e.params);for(let e in t)t[e]??delete t[e];o=X({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=up(r,X({},e,{hash:tp(l),path:s.path})),m=i.createHref(p);return X({fullPath:p,hash:l,query:r===Lp?Rp(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?lp(n,e,c.value.path):X({},e)}function y(e,t){if(l!==e)return Pp(Z.NAVIGATION_CANCELLED,{from:t,to:e})}function b(e){return S(e)}function x(e){return b(X(v(e),{replace:!0}))}function ee(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),X({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function S(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=ee(n,i);if(u)return S(X(v(u),{state:typeof u==`object`?X({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&fp(r,i,n)&&(f=Pp(Z.NAVIGATION_DUPLICATED,{to:d,from:i}),le(i,i,!0,!1)),(f?Promise.resolve(f):ne(d,i)).catch(e=>Fp(e)?Fp(e,Z.NAVIGATION_GUARD_REDIRECT)?e:ce(e):se(e,d,i)).then(e=>{if(e){if(Fp(e,Z.NAVIGATION_GUARD_REDIRECT))return S(X({replace:s},v(e.to),{state:typeof e.to==`object`?X({},a,e.to.state):a,force:o}),t||d)}else e=w(d,i,!0,s,a);return re(d,i,e),e})}function C(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function te(e){let t=fe.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function ne(e,t){let n,[r,i,s]=qp(e,t);n=Kp(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(Gp(r,e,t))});let c=C.bind(null,e,t);return n.push(c),me(n).then(()=>{n=[];for(let r of a.list())n.push(Gp(r,e,t));return n.push(c),me(n)}).then(()=>{n=Kp(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(Gp(r,e,t))});return n.push(c),me(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter)if(Rf(r.beforeEnter))for(let i of r.beforeEnter)n.push(Gp(i,e,t));else n.push(Gp(r.beforeEnter,e,t));return n.push(c),me(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Kp(s,`beforeRouteEnter`,e,t,te),n.push(c),me(n))).then(()=>{n=[];for(let r of o.list())n.push(Gp(r,e,t));return n.push(c),me(n)}).catch(e=>Fp(e,Z.NAVIGATION_CANCELLED)?e:Promise.reject(e))}function re(e,t,n){s.list().forEach(r=>te(()=>r(e,t,n)))}function w(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===vp,l=Nf?history.state:{};n&&(r||s?i.replace(e.fullPath,X({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,le(e,t,n,s),ce()}let ie;function T(){ie||=i.listen((e,t,n)=>{if(!pe.listening)return;let r=_(e),a=ee(r,pe.currentRoute.value);if(a){S(X(a,{replace:!0,force:!0}),r).catch(Lf);return}l=r;let o=c.value;Nf&&kp(Dp(o.fullPath,n.delta),Tp()),ne(r,o).catch(e=>Fp(e,Z.NAVIGATION_ABORTED|Z.NAVIGATION_CANCELLED)?e:Fp(e,Z.NAVIGATION_GUARD_REDIRECT)?(S(X(v(e.to),{force:!0}),r).then(e=>{Fp(e,Z.NAVIGATION_ABORTED|Z.NAVIGATION_DUPLICATED)&&!n.delta&&n.type===yp.pop&&i.go(-1,!1)}).catch(Lf),Promise.reject()):(n.delta&&i.go(-n.delta,!1),se(e,r,o))).then(e=>{e||=w(r,o,!1),e&&(n.delta&&!Fp(e,Z.NAVIGATION_CANCELLED)?i.go(-n.delta,!1):n.type===yp.pop&&Fp(e,Z.NAVIGATION_ABORTED|Z.NAVIGATION_DUPLICATED)&&i.go(-1,!1)),re(r,o,e)}).catch(Lf)})}let ae=Wp(),oe=Wp(),E;function se(e,t,n){ce(e);let r=oe.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function D(){return E&&c.value!==vp?Promise.resolve():new Promise((e,t)=>{ae.add([e,t])})}function ce(e){return E||(E=!e,T(),ae.list().forEach(([t,n])=>e?n(e):t()),ae.reset()),e}function le(t,n,r,i){let{scrollBehavior:a}=e;if(!Nf||!a)return Promise.resolve();let o=!r&&Ap(Dp(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return pn().then(()=>a(t,n,o)).then(e=>e&&Ep(e)).catch(e=>se(e,t,n))}let ue=e=>i.go(e),de,fe=new Set,pe={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:ue,back:()=>ue(-1),forward:()=>ue(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:oe.add,isReady:D,install(e){e.component(`RouterLink`,wm),e.component(`RouterView`,jm),e.config.globalProperties.$router=pe,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Gt(c)}),Nf&&!de&&c.value===vp&&(de=!0,b(i.location).catch(e=>{}));let t={};for(let e in vp)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(Vp,pe),e.provide(Hp,jt(t)),e.provide(Up,c);let n=e.unmount;fe.add(e),e.unmount=function(){fe.delete(e),fe.size<1&&(l=vp,ie&&ie(),ie=null,c.value=vp,de=!1,E=!1),n()}}};function me(e){return e.reduce((e,t)=>e.then(()=>te(t)),Promise.resolve())}return pe}var Nm={},Pm={class:`hero-section`},Fm={class:`hero-content`},Im={class:`button-container`};function Lm(e,t){let n=lr(`router-link`);return R(),Pi(wi,null,[z(`div`,Pm,[t[4]||=z(`div`,{class:`hero-overlay`},null,-1),z(`div`,Fm,[t[2]||=z(`h1`,{class:`hero-title`},`Your Body and Mind`,-1),t[3]||=z(`p`,{class:`hero-subtitle`},`Ayurvediska behandlingar och samtal`,-1),z(`div`,Im,[B(n,{to:`/behandlingar`},{default:Tn(()=>[...t[0]||=[z(`button`,{class:`button`},`Behandlingar`,-1)]]),_:1}),t[1]||=z(`a`,{href:`https://www.bokadirekt.se/places/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195`,target:`_blank`},[z(`button`,{class:`button`},`Boka tid`)],-1)])])]),t[5]||=z(`div`,{class:`content-section`},[z(`div`,{class:`content-img`},[z(`img`,{src:`/yourbodyandmind/assets/Profilbild-DGCdpb7l.jpg`,alt:`Profilbild`})]),z(`p`,{class:`content-text`},` Jag är utbildad beteendevetare, ayuryogalärare och ayurvedisk massageterapeut med ett helhetsperspektiv på hälsa och välbefinnande. I mitt arbete utgår jag från att kropp och sinne är nära sammankopplade – när den ena delen får omsorg påverkas även den andra. Jag möter varje person med närvaro, respekt och lyhördhet. Min ambition är att skapa en trygg och rofylld stund där du får landa, släppa vardagens tempo och återknyta kontakten med dig själv. `)],-1)],64)}var Rm=ho(Nm,[[`render`,Lm],[`__scopeId`,`data-v-a4c29d6a`]]),zm={class:`main-desktop`},Bm=ho(F({__name:`MainDesktop`,setup(e){return(e,t)=>(R(),Pi(`div`,zm,[...t[0]||=[Wi(`<div class="hero-section" data-v-bb3bbc40><div class="hero-overlay" data-v-bb3bbc40></div><div class="hero-content" data-v-bb3bbc40><h1 class="hero-title" data-v-bb3bbc40>Your Body and Mind</h1><p class="hero-subtitle" data-v-bb3bbc40>Ayurvediska behandlingar och samtal</p><div class="hero-buttons" data-v-bb3bbc40><a href="https://www.bokadirekt.se/places/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195" target="_blank" data-v-bb3bbc40><button class="hero-button" data-v-bb3bbc40>Boka tid</button></a></div></div></div><div class="content-section-container" data-v-bb3bbc40><div class="content-section" data-v-bb3bbc40><div class="content-img" data-v-bb3bbc40><img src="/yourbodyandmind/assets/Profilbild-DGCdpb7l.jpg" alt="Profilbild" data-v-bb3bbc40></div><div class="content-text" data-v-bb3bbc40><p data-v-bb3bbc40> Jag är utbildad beteendevetare, ayuryogalärare och ayurvedisk massageterapeut med ett helhetsperspektiv på hälsa och välbefinnande.<br data-v-bb3bbc40> I mitt arbete utgår jag från att kropp och sinne är nära sammankopplade – när den ena delen får omsorg påverkas även den andra. Jag möter varje person med närvaro, respekt och lyhördhet. Min ambition är att skapa en trygg och rofylld stund där du får landa, släppa vardagens tempo och återknyta kontakten med dig själv. </p></div></div></div>`,2)]]))}}),[[`__scopeId`,`data-v-bb3bbc40`]]),Vm=F({__name:`Main`,setup(e){let{width:t}=Df(),n=H(()=>t.value<768);return(e,t)=>n.value?(R(),Fi(Rm,{key:0})):(R(),Fi(Bm,{key:1}))}}),Hm={};function Um(e,t){return t[0]||=Wi(`<div class="hero-section" data-v-3e469081><div class="hero-overlay" data-v-3e469081></div><div class="hero-content" data-v-3e469081><h1 class="hero-title" data-v-3e469081>Behandlingar</h1></div></div><div class="content-card" data-v-3e469081><div class="content-title-container" data-v-3e469081><h2 class="content-title" data-v-3e469081>Vishesh Massage</h2><button class="book-button" data-v-3e469081><a href="https://www.bokadirekt.se/boka-tjanst/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195/vishesh-massagebehandling-3416007" target="_blank" data-v-3e469081>Boka</a></button></div><p class="content-description" data-v-3e469081> Vishesh är en lite kraftigare helkroppsmassage där trycket ökar jämfört med abhyanga. Vishesh har abhyanga effekter men kan också lösa djupt liggande spänningar. Det ökade trycket i de svepande rörelserna stimulerar musklerna. Behandlingen förbättrar cirkulationen och frigör slaggämnen. Behandlingen inleds med massage av hela kroppen med varm olja och svepande rörelser för att värma upp kroppen inför själva Vishesh behandlingen. Avslappnande och skön för den som känner sig tung i kroppen. Observera att i behandlingstiden på 80 min ingår 10 minuters vila. </p></div><div class="content-card" data-v-3e469081><div class="content-title-container" data-v-3e469081><h2 class="content-title" data-v-3e469081>Abhyanga Massage</h2><button class="book-button" data-v-3e469081><a href="https://www.bokadirekt.se/boka-tjanst/your-body-and-mind-ayurvediska-behandlingar-och-samtal-135195/abhyanga-massagebehandling-3419098" target="_blank" data-v-3e469081>Boka</a></button></div><p class="content-description" data-v-3e469081> Abhyanga är en mycket behaglig helkroppsmassage med varm sesamolja. Kroppen masseras systematiskt med ett relativt lätt tryck och lugna, svepande rörelser. Behandlingen börjar med att massera huvud, rygg, ansikte och framsida kropp, därefter baksida kropp och nacke. Avslutas med en vila på ca 10 min. Behandlingen stärker nervsystemet och är djupt avslappnande för kropp och sinne. Cirkulationen och vitaliteten ökar och muskler och leder mjukas upp. Värmen, oljan och rörelserna renar också kroppen från slaggprodukter. Abhyanga är speciellt välgörande vid vata- obalanser, stress och utmattning men passar alla doshor. Observera att i behandlingstiden ingår ca 10 min vila. </p></div>`,3)}var Wm=ho(Hm,[[`render`,Um],[`__scopeId`,`data-v-3e469081`]]),Gm={class:`treatments-desktop`},Km=ho(F({__name:`TreatmentsDesktop`,setup(e){return(e,t)=>(R(),Pi(`div`,Gm,[...t[0]||=[z(`h1`,null,`Behandlingar`,-1),z(`p`,null,`Desktop version - under development`,-1)]]))}}),[[`__scopeId`,`data-v-e760f07b`]]),qm=F({__name:`Treatments`,setup(e){let{width:t}=Df(),n=H(()=>t.value<768);return(e,t)=>n.value?(R(),Fi(Wm,{key:0})):(R(),Fi(Km,{key:1}))}}),Jm={};function Ym(e,t){return t[0]||=Wi(`<div class="hero-section" data-v-eee28b6a><div class="hero-overlay" data-v-eee28b6a></div><div class="hero-content" data-v-eee28b6a></div></div><div class="content-card" data-v-eee28b6a><div class="content-title-container" data-v-eee28b6a><h2 class="content-title" data-v-eee28b6a>Om Sandra</h2></div><p class="content-description" data-v-eee28b6a> Jag är utbildad beteendevetare, ayuryogalärare och ayurvedisk massageterapeut med ett helhetsperspektiv på hälsa och välbefinnande. I mitt arbete utgår jag från att kropp och sinne är nära sammankopplade – när den ena delen får omsorg påverkas även den andra. Jag möter varje person med närvaro, respekt och lyhördhet. Min ambition är att skapa en trygg och rofylld stund där du får landa, släppa vardagens tempo och återknyta kontakten med dig själv. </p></div>`,2)}var Xm=ho(Jm,[[`render`,Ym],[`__scopeId`,`data-v-eee28b6a`]]),Zm={class:`sandra-desktop`},Qm=ho(F({__name:`SandraDesktop`,setup(e){return(e,t)=>(R(),Pi(`div`,Zm,[...t[0]||=[z(`h1`,null,`Om Sandra`,-1),z(`p`,null,`Desktop version - under development`,-1)]]))}}),[[`__scopeId`,`data-v-5530697f`]]),$m=F({__name:`Sandra`,setup(e){let{width:t}=Df(),n=H(()=>t.value<768);return(e,t)=>n.value?(R(),Fi(Xm,{key:0})):(R(),Fi(Qm,{key:1}))}}),eh={};function th(e,t){return t[0]||=Wi(`<div class="hero-section" data-v-cfce62e9><div class="hero-overlay" data-v-cfce62e9></div><div class="hero-content" data-v-cfce62e9><h1 class="hero-title" data-v-cfce62e9>Samtal</h1></div></div><div class="content-card" data-v-cfce62e9><div class="content-title-container" data-v-cfce62e9><h2 class="content-title" data-v-cfce62e9>Samtal</h2></div><p class="content-description" data-v-cfce62e9> Mina samtal vänder sig till dig som känner att något behöver förändras – kanske står du inför ett vägskäl, upplever obalans, känner dig vilsen eller längtar efter att förstå dig själv på ett djupare plan. Oavsett om det handlar om arbete, relationer, livsbalans eller din personliga utveckling, utgår vi alltid från samma plats: där du är just nu. Samtalen ger utrymme att stanna upp, reflektera och skapa klarhet i det som är viktigt för dig. Tillsammans utforskar vi dina tankar, känslor och drivkrafter – med målet att du ska känna större trygghet, balans och mening i din vardag. </p></div>`,2)}var nh=ho(eh,[[`render`,th],[`__scopeId`,`data-v-cfce62e9`]]),rh={class:`samtal-desktop`},ih=ho(F({__name:`SamtalDesktop`,setup(e){return(e,t)=>(R(),Pi(`div`,rh,[...t[0]||=[z(`h1`,null,`Samtal`,-1),z(`p`,null,`Desktop version - under development`,-1)]]))}}),[[`__scopeId`,`data-v-fcadf2f6`]]),ah=F({__name:`Samtal`,setup(e){let{width:t}=Df(),n=H(()=>t.value<768);return(e,t)=>n.value?(R(),Fi(nh,{key:0})):(R(),Fi(ih,{key:1}))}}),oh=Mm({history:$p(`/yourbodyandmind/`),routes:[{path:`/`,name:`home`,component:Vm},{path:`/behandlingar`,name:`treatments`,component:qm},{path:`/sandra`,name:`sandra`,component:$m},{path:`/samtal`,name:`samtal`,component:ah}],scrollBehavior(){return{top:0}}});so(Mf).use(oh).mount(`#app`);