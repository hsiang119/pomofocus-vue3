(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ra(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ue={},_n=[],Ge=()=>{},$f=()=>!1,jf=/^on[^a-z]/,ki=e=>jf.test(e),ia=e=>e.startsWith("onUpdate:"),xe=Object.assign,sa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Bf=Object.prototype.hasOwnProperty,ee=(e,t)=>Bf.call(e,t),W=Array.isArray,wn=e=>Si(e)==="[object Map]",Gl=e=>Si(e)==="[object Set]",q=e=>typeof e=="function",we=e=>typeof e=="string",aa=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",Yl=e=>he(e)&&q(e.then)&&q(e.catch),Xl=Object.prototype.toString,Si=e=>Xl.call(e),Hf=e=>Si(e).slice(8,-1),Jl=e=>Si(e)==="[object Object]",oa=e=>we(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Yr=ra(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ai=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},zf=/-(\w)/g,at=Ai(e=>e.replace(zf,(t,n)=>n?n.toUpperCase():"")),Wf=/\B([A-Z])/g,Dn=Ai(e=>e.replace(Wf,"-$1").toLowerCase()),Ti=Ai(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ji=Ai(e=>e?`on${Ti(e)}`:""),Zn=(e,t)=>!Object.is(e,t),Xr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},oi=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ys=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Qa;const _s=()=>Qa||(Qa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function la(e){if(W(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=we(r)?Gf(r):la(r);if(i)for(const s in i)t[s]=i[s]}return t}else{if(we(e))return e;if(he(e))return e}}const Vf=/;(?![^(]*\))/g,Kf=/:([^]+)/,qf=/\/\*[^]*?\*\//g;function Gf(e){const t={};return e.replace(qf,"").split(Vf).forEach(n=>{if(n){const r=n.split(Kf);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function X(e){let t="";if(we(e))t=e;else if(W(e))for(let n=0;n<e.length;n++){const r=X(e[n]);r&&(t+=r+" ")}else if(he(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Yf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xf=ra(Yf);function Ql(e){return!!e||e===""}const er=e=>we(e)?e:e==null?"":W(e)||he(e)&&(e.toString===Xl||!q(e.toString))?JSON.stringify(e,Zl,2):String(e),Zl=(e,t)=>t&&t.__v_isRef?Zl(e,t.value):wn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Gl(t)?{[`Set(${t.size})`]:[...t.values()]}:he(t)&&!W(t)&&!Jl(t)?String(t):t;let Ue;class ec{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ue,!t&&Ue&&(this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ue;try{return Ue=this,t()}finally{Ue=n}}}on(){Ue=this}off(){Ue=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function tc(e){return new ec(e)}function Jf(e,t=Ue){t&&t.active&&t.effects.push(e)}function nc(){return Ue}function Qf(e){Ue&&Ue.cleanups.push(e)}const ca=e=>{const t=new Set(e);return t.w=0,t.n=0,t},rc=e=>(e.w&Ft)>0,ic=e=>(e.n&Ft)>0,Zf=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ft},ed=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];rc(i)&&!ic(i)?i.delete(e):t[n++]=i,i.w&=~Ft,i.n&=~Ft}t.length=n}},li=new WeakMap;let Hn=0,Ft=1;const ws=30;let Ve;const en=Symbol(""),Es=Symbol("");class ua{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Jf(this,r)}run(){if(!this.active)return this.fn();let t=Ve,n=Mt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ve,Ve=this,Mt=!0,Ft=1<<++Hn,Hn<=ws?Zf(this):Za(this),this.fn()}finally{Hn<=ws&&ed(this),Ft=1<<--Hn,Ve=this.parent,Mt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ve===this?this.deferStop=!0:this.active&&(Za(this),this.onStop&&this.onStop(),this.active=!1)}}function Za(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Mt=!0;const sc=[];function Ln(){sc.push(Mt),Mt=!1}function Un(){const e=sc.pop();Mt=e===void 0?!0:e}function Me(e,t,n){if(Mt&&Ve){let r=li.get(e);r||li.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=ca()),ac(i)}}function ac(e,t){let n=!1;Hn<=ws?ic(e)||(e.n|=Ft,n=!rc(e)):n=!e.has(Ve),n&&(e.add(Ve),Ve.deps.push(e))}function mt(e,t,n,r,i,s){const a=li.get(e);if(!a)return;let o=[];if(t==="clear")o=[...a.values()];else if(n==="length"&&W(e)){const l=Number(r);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(n!==void 0&&o.push(a.get(n)),t){case"add":W(e)?oa(n)&&o.push(a.get("length")):(o.push(a.get(en)),wn(e)&&o.push(a.get(Es)));break;case"delete":W(e)||(o.push(a.get(en)),wn(e)&&o.push(a.get(Es)));break;case"set":wn(e)&&o.push(a.get(en));break}if(o.length===1)o[0]&&Is(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Is(ca(l))}}function Is(e,t){const n=W(e)?e:[...e];for(const r of n)r.computed&&eo(r);for(const r of n)r.computed||eo(r)}function eo(e,t){(e!==Ve||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function td(e,t){var n;return(n=li.get(e))==null?void 0:n.get(t)}const nd=ra("__proto__,__v_isRef,__isVue"),oc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(aa)),rd=fa(),id=fa(!1,!0),sd=fa(!0),to=ad();function ad(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=Q(this);for(let s=0,a=this.length;s<a;s++)Me(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(Q)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ln();const r=Q(this)[t].apply(this,n);return Un(),r}}),e}function od(e){const t=Q(this);return Me(t,"has",e),t.hasOwnProperty(e)}function fa(e=!1,t=!1){return function(r,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&s===(e?t?Id:dc:t?fc:uc).get(r))return r;const a=W(r);if(!e){if(a&&ee(to,i))return Reflect.get(to,i,s);if(i==="hasOwnProperty")return od}const o=Reflect.get(r,i,s);return(aa(i)?oc.has(i):nd(i))||(e||Me(r,"get",i),t)?o:pe(o)?a&&oa(i)?o:o.value:he(o)?e?pc(o):vr(o):o}}const ld=lc(),cd=lc(!0);function lc(e=!1){return function(n,r,i,s){let a=n[r];if(An(a)&&pe(a)&&!pe(i))return!1;if(!e&&(!ci(i)&&!An(i)&&(a=Q(a),i=Q(i)),!W(n)&&pe(a)&&!pe(i)))return a.value=i,!0;const o=W(n)&&oa(r)?Number(r)<n.length:ee(n,r),l=Reflect.set(n,r,i,s);return n===Q(s)&&(o?Zn(i,a)&&mt(n,"set",r,i):mt(n,"add",r,i)),l}}function ud(e,t){const n=ee(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&mt(e,"delete",t,void 0),r}function fd(e,t){const n=Reflect.has(e,t);return(!aa(t)||!oc.has(t))&&Me(e,"has",t),n}function dd(e){return Me(e,"iterate",W(e)?"length":en),Reflect.ownKeys(e)}const cc={get:rd,set:ld,deleteProperty:ud,has:fd,ownKeys:dd},hd={get:sd,set(e,t){return!0},deleteProperty(e,t){return!0}},pd=xe({},cc,{get:id,set:cd}),da=e=>e,Ci=e=>Reflect.getPrototypeOf(e);function Pr(e,t,n=!1,r=!1){e=e.__v_raw;const i=Q(e),s=Q(t);n||(t!==s&&Me(i,"get",t),Me(i,"get",s));const{has:a}=Ci(i),o=r?da:n?ma:tr;if(a.call(i,t))return o(e.get(t));if(a.call(i,s))return o(e.get(s));e!==i&&e.get(t)}function Or(e,t=!1){const n=this.__v_raw,r=Q(n),i=Q(e);return t||(e!==i&&Me(r,"has",e),Me(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Rr(e,t=!1){return e=e.__v_raw,!t&&Me(Q(e),"iterate",en),Reflect.get(e,"size",e)}function no(e){e=Q(e);const t=Q(this);return Ci(t).has.call(t,e)||(t.add(e),mt(t,"add",e,e)),this}function ro(e,t){t=Q(t);const n=Q(this),{has:r,get:i}=Ci(n);let s=r.call(n,e);s||(e=Q(e),s=r.call(n,e));const a=i.call(n,e);return n.set(e,t),s?Zn(t,a)&&mt(n,"set",e,t):mt(n,"add",e,t),this}function io(e){const t=Q(this),{has:n,get:r}=Ci(t);let i=n.call(t,e);i||(e=Q(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&mt(t,"delete",e,void 0),s}function so(){const e=Q(this),t=e.size!==0,n=e.clear();return t&&mt(e,"clear",void 0,void 0),n}function Nr(e,t){return function(r,i){const s=this,a=s.__v_raw,o=Q(a),l=t?da:e?ma:tr;return!e&&Me(o,"iterate",en),a.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function Mr(e,t,n){return function(...r){const i=this.__v_raw,s=Q(i),a=wn(s),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,c=i[e](...r),u=n?da:t?ma:tr;return!t&&Me(s,"iterate",l?Es:en),{next(){const{value:f,done:p}=c.next();return p?{value:f,done:p}:{value:o?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function xt(e){return function(...t){return e==="delete"?!1:this}}function md(){const e={get(s){return Pr(this,s)},get size(){return Rr(this)},has:Or,add:no,set:ro,delete:io,clear:so,forEach:Nr(!1,!1)},t={get(s){return Pr(this,s,!1,!0)},get size(){return Rr(this)},has:Or,add:no,set:ro,delete:io,clear:so,forEach:Nr(!1,!0)},n={get(s){return Pr(this,s,!0)},get size(){return Rr(this,!0)},has(s){return Or.call(this,s,!0)},add:xt("add"),set:xt("set"),delete:xt("delete"),clear:xt("clear"),forEach:Nr(!0,!1)},r={get(s){return Pr(this,s,!0,!0)},get size(){return Rr(this,!0)},has(s){return Or.call(this,s,!0)},add:xt("add"),set:xt("set"),delete:xt("delete"),clear:xt("clear"),forEach:Nr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Mr(s,!1,!1),n[s]=Mr(s,!0,!1),t[s]=Mr(s,!1,!0),r[s]=Mr(s,!0,!0)}),[e,n,t,r]}const[gd,vd,bd,yd]=md();function ha(e,t){const n=t?e?yd:bd:e?vd:gd;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(ee(n,i)&&i in r?n:r,i,s)}const _d={get:ha(!1,!1)},wd={get:ha(!1,!0)},Ed={get:ha(!0,!1)},uc=new WeakMap,fc=new WeakMap,dc=new WeakMap,Id=new WeakMap;function xd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function kd(e){return e.__v_skip||!Object.isExtensible(e)?0:xd(Hf(e))}function vr(e){return An(e)?e:pa(e,!1,cc,_d,uc)}function hc(e){return pa(e,!1,pd,wd,fc)}function pc(e){return pa(e,!0,hd,Ed,dc)}function pa(e,t,n,r,i){if(!he(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const a=kd(e);if(a===0)return e;const o=new Proxy(e,a===2?r:n);return i.set(e,o),o}function pt(e){return An(e)?pt(e.__v_raw):!!(e&&e.__v_isReactive)}function An(e){return!!(e&&e.__v_isReadonly)}function ci(e){return!!(e&&e.__v_isShallow)}function mc(e){return pt(e)||An(e)}function Q(e){const t=e&&e.__v_raw;return t?Q(t):e}function Pi(e){return oi(e,"__v_skip",!0),e}const tr=e=>he(e)?vr(e):e,ma=e=>he(e)?pc(e):e;function gc(e){Mt&&Ve&&(e=Q(e),ac(e.dep||(e.dep=ca())))}function vc(e,t){e=Q(e);const n=e.dep;n&&Is(n)}function pe(e){return!!(e&&e.__v_isRef===!0)}function ce(e){return bc(e,!1)}function Sd(e){return bc(e,!0)}function bc(e,t){return pe(e)?e:new Ad(e,t)}class Ad{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:Q(t),this._value=n?t:tr(t)}get value(){return gc(this),this._value}set value(t){const n=this.__v_isShallow||ci(t)||An(t);t=n?t:Q(t),Zn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:tr(t),vc(this))}}function Pe(e){return pe(e)?e.value:e}function Td(e){return q(e)?e():Pe(e)}const Cd={get:(e,t,n)=>Pe(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return pe(i)&&!pe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function yc(e){return pt(e)?e:new Proxy(e,Cd)}function Pd(e){const t=W(e)?new Array(e.length):{};for(const n in e)t[n]=_c(e,n);return t}class Od{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return td(Q(this._object),this._key)}}class Rd{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Nd(e,t,n){return pe(e)?e:q(e)?new Rd(e):he(e)&&arguments.length>1?_c(e,t,n):ce(e)}function _c(e,t,n){const r=e[t];return pe(r)?r:new Od(e,t,n)}class Md{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ua(t,()=>{this._dirty||(this._dirty=!0,vc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=Q(this);return gc(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Dd(e,t,n=!1){let r,i;const s=q(e);return s?(r=e,i=Ge):(r=e.get,i=e.set),new Md(r,i,s||!i,n)}function Dt(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Oi(s,t,n)}return i}function Ye(e,t,n,r){if(q(e)){const s=Dt(e,t,n,r);return s&&Yl(s)&&s.catch(a=>{Oi(a,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(Ye(e[s],t,n,r));return i}function Oi(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,o=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,a,o)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){Dt(l,null,10,[e,a,o]);return}}Ld(e,n,i,r)}function Ld(e,t,n,r=!0){console.error(e)}let nr=!1,xs=!1;const Ae=[];let tt=0;const En=[];let ut=null,Gt=0;const wc=Promise.resolve();let ga=null;function va(e){const t=ga||wc;return e?t.then(this?e.bind(this):e):t}function Ud(e){let t=tt+1,n=Ae.length;for(;t<n;){const r=t+n>>>1;rr(Ae[r])<e?t=r+1:n=r}return t}function ba(e){(!Ae.length||!Ae.includes(e,nr&&e.allowRecurse?tt+1:tt))&&(e.id==null?Ae.push(e):Ae.splice(Ud(e.id),0,e),Ec())}function Ec(){!nr&&!xs&&(xs=!0,ga=wc.then(xc))}function Fd(e){const t=Ae.indexOf(e);t>tt&&Ae.splice(t,1)}function $d(e){W(e)?En.push(...e):(!ut||!ut.includes(e,e.allowRecurse?Gt+1:Gt))&&En.push(e),Ec()}function ao(e,t=nr?tt+1:0){for(;t<Ae.length;t++){const n=Ae[t];n&&n.pre&&(Ae.splice(t,1),t--,n())}}function Ic(e){if(En.length){const t=[...new Set(En)];if(En.length=0,ut){ut.push(...t);return}for(ut=t,ut.sort((n,r)=>rr(n)-rr(r)),Gt=0;Gt<ut.length;Gt++)ut[Gt]();ut=null,Gt=0}}const rr=e=>e.id==null?1/0:e.id,jd=(e,t)=>{const n=rr(e)-rr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function xc(e){xs=!1,nr=!0,Ae.sort(jd);const t=Ge;try{for(tt=0;tt<Ae.length;tt++){const n=Ae[tt];n&&n.active!==!1&&Dt(n,null,14)}}finally{tt=0,Ae.length=0,Ic(),nr=!1,ga=null,(Ae.length||En.length)&&xc()}}function Bd(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ue;let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in r){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:p}=r[u]||ue;p&&(i=n.map(g=>we(g)?g.trim():g)),f&&(i=n.map(ys))}let o,l=r[o=Ji(t)]||r[o=Ji(at(t))];!l&&s&&(l=r[o=Ji(Dn(t))]),l&&Ye(l,e,6,i);const c=r[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ye(c,e,6,i)}}function kc(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!q(e)){const l=c=>{const u=kc(c,t,!0);u&&(o=!0,xe(a,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!o?(he(e)&&r.set(e,null),null):(W(s)?s.forEach(l=>a[l]=null):xe(a,s),he(e)&&r.set(e,a),a)}function Ri(e,t){return!e||!ki(t)?!1:(t=t.slice(2).replace(/Once$/,""),ee(e,t[0].toLowerCase()+t.slice(1))||ee(e,Dn(t))||ee(e,t))}let Fe=null,Ni=null;function ui(e){const t=Fe;return Fe=e,Ni=e&&e.type.__scopeId||null,t}function Hd(e){Ni=e}function zd(){Ni=null}function Jr(e,t=Fe,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&bo(-1);const s=ui(t);let a;try{a=e(...i)}finally{ui(s),r._d&&bo(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Qi(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:p,setupState:g,ctx:I,inheritAttrs:S}=e;let N,b;const _=ui(e);try{if(n.shapeFlag&4){const A=i||r;N=et(u.call(A,A,f,s,g,p,I)),b=l}else{const A=t;N=et(A.length>1?A(s,{attrs:l,slots:o,emit:c}):A(s,null)),b=t.props?l:Wd(l)}}catch(A){Kn.length=0,Oi(A,e,1),N=_e(an)}let O=N;if(b&&S!==!1){const A=Object.keys(b),{shapeFlag:B}=O;A.length&&B&7&&(a&&A.some(ia)&&(b=Vd(b,a)),O=Tn(O,b))}return n.dirs&&(O=Tn(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),N=O,ui(_),N}const Wd=e=>{let t;for(const n in e)(n==="class"||n==="style"||ki(n))&&((t||(t={}))[n]=e[n]);return t},Vd=(e,t)=>{const n={};for(const r in e)(!ia(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Kd(e,t,n){const{props:r,children:i,component:s}=e,{props:a,children:o,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?oo(r,a,c):!!a;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(a[p]!==r[p]&&!Ri(c,p))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===a?!1:r?a?oo(r,a,c):!0:!!a;return!1}function oo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Ri(n,s))return!0}return!1}function qd({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Gd=e=>e.__isSuspense;function Yd(e,t){t&&t.pendingBranch?W(e)?t.effects.push(...e):t.effects.push(e):$d(e)}const Dr={};function tn(e,t,n){return Sc(e,t,n)}function Sc(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:a}=ue){var o;const l=nc()===((o=Ie)==null?void 0:o.scope)?Ie:null;let c,u=!1,f=!1;if(pe(e)?(c=()=>e.value,u=ci(e)):pt(e)?(c=()=>e,r=!0):W(e)?(f=!0,u=e.some(A=>pt(A)||ci(A)),c=()=>e.map(A=>{if(pe(A))return A.value;if(pt(A))return Xt(A);if(q(A))return Dt(A,l,2)})):q(e)?t?c=()=>Dt(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return p&&p(),Ye(e,l,3,[g])}:c=Ge,t&&r){const A=c;c=()=>Xt(A())}let p,g=A=>{p=_.onStop=()=>{Dt(A,l,4)}},I;if(ar)if(g=Ge,t?n&&Ye(t,l,3,[c(),f?[]:void 0,g]):c(),i==="sync"){const A=jh();I=A.__watcherHandles||(A.__watcherHandles=[])}else return Ge;let S=f?new Array(e.length).fill(Dr):Dr;const N=()=>{if(_.active)if(t){const A=_.run();(r||u||(f?A.some((B,J)=>Zn(B,S[J])):Zn(A,S)))&&(p&&p(),Ye(t,l,3,[A,S===Dr?void 0:f&&S[0]===Dr?[]:S,g]),S=A)}else _.run()};N.allowRecurse=!!t;let b;i==="sync"?b=N:i==="post"?b=()=>Ne(N,l&&l.suspense):(N.pre=!0,l&&(N.id=l.uid),b=()=>ba(N));const _=new ua(c,b);t?n?N():S=_.run():i==="post"?Ne(_.run.bind(_),l&&l.suspense):_.run();const O=()=>{_.stop(),l&&l.scope&&sa(l.scope.effects,_)};return I&&I.push(O),O}function Xd(e,t,n){const r=this.proxy,i=we(e)?e.includes(".")?Ac(r,e):()=>r[e]:e.bind(r,r);let s;q(t)?s=t:(s=t.handler,n=t);const a=Ie;Cn(this);const o=Sc(i,s.bind(r),n);return a?Cn(a):rn(),o}function Ac(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Xt(e,t){if(!he(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),pe(e))Xt(e.value,t);else if(W(e))for(let n=0;n<e.length;n++)Xt(e[n],t);else if(Gl(e)||wn(e))e.forEach(n=>{Xt(n,t)});else if(Jl(e))for(const n in e)Xt(e[n],t);return e}function Lr(e,t){const n=Fe;if(n===null)return e;const r=Fi(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[a,o,l,c=ue]=t[s];a&&(q(a)&&(a={mounted:a,updated:a}),a.deep&&Xt(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:l,modifiers:c}))}return e}function Vt(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let l=o.dir[r];l&&(Ln(),Ye(l,n,8,[e.el,o,e,t]),Un())}}function _t(e,t){return q(e)?(()=>xe({name:e.name},t,{setup:e}))():e}const Qr=e=>!!e.type.__asyncLoader,Tc=e=>e.type.__isKeepAlive;function Cc(e,t){Oc(e,"a",t)}function Pc(e,t){Oc(e,"da",t)}function Oc(e,t,n=Ie){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Mi(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Tc(i.parent.vnode)&&Jd(r,t,n,i),i=i.parent}}function Jd(e,t,n,r){const i=Mi(t,e,r,!0);Di(()=>{sa(r[t],i)},n)}function Mi(e,t,n=Ie,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;Ln(),Cn(n);const o=Ye(t,n,e,a);return rn(),Un(),o});return r?i.unshift(s):i.push(s),s}}const wt=e=>(t,n=Ie)=>(!ar||e==="sp")&&Mi(e,(...r)=>t(...r),n),Qd=wt("bm"),Rc=wt("m"),Zd=wt("bu"),eh=wt("u"),th=wt("bum"),Di=wt("um"),nh=wt("sp"),rh=wt("rtg"),ih=wt("rtc");function sh(e,t=Ie){Mi("ec",e,t)}const Nc="components";function Mc(e,t){return oh(Nc,e,!0,t)||e}const ah=Symbol.for("v-ndc");function oh(e,t,n=!0,r=!1){const i=Fe||Ie;if(i){const s=i.type;if(e===Nc){const o=Uh(s,!1);if(o&&(o===t||o===at(t)||o===Ti(at(t))))return s}const a=lo(i[e]||s[e],t)||lo(i.appContext[e],t);return!a&&r?s:a}}function lo(e,t){return e&&(e[t]||e[at(t)]||e[Ti(at(t))])}function Dc(e,t,n,r){let i;const s=n&&n[r];if(W(e)||we(e)){i=new Array(e.length);for(let a=0,o=e.length;a<o;a++)i[a]=t(e[a],a,void 0,s&&s[a])}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,s&&s[a])}else if(he(e))if(e[Symbol.iterator])i=Array.from(e,(a,o)=>t(a,o,void 0,s&&s[o]));else{const a=Object.keys(e);i=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];i[o]=t(e[c],c,o,s&&s[o])}}else i=[];return n&&(n[r]=i),i}const ks=e=>e?Kc(e)?Fi(e)||e.proxy:ks(e.parent):null,Vn=xe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ks(e.parent),$root:e=>ks(e.root),$emit:e=>e.emit,$options:e=>ya(e),$forceUpdate:e=>e.f||(e.f=()=>ba(e.update)),$nextTick:e=>e.n||(e.n=va.bind(e.proxy)),$watch:e=>Xd.bind(e)}),Zi=(e,t)=>e!==ue&&!e.__isScriptSetup&&ee(e,t),lh={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:o,appContext:l}=e;let c;if(t[0]!=="$"){const g=a[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(Zi(r,t))return a[t]=1,r[t];if(i!==ue&&ee(i,t))return a[t]=2,i[t];if((c=e.propsOptions[0])&&ee(c,t))return a[t]=3,s[t];if(n!==ue&&ee(n,t))return a[t]=4,n[t];Ss&&(a[t]=0)}}const u=Vn[t];let f,p;if(u)return t==="$attrs"&&Me(e,"get",t),u(e);if((f=o.__cssModules)&&(f=f[t]))return f;if(n!==ue&&ee(n,t))return a[t]=4,n[t];if(p=l.config.globalProperties,ee(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return Zi(i,t)?(i[t]=n,!0):r!==ue&&ee(r,t)?(r[t]=n,!0):ee(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let o;return!!n[a]||e!==ue&&ee(e,a)||Zi(t,a)||(o=s[0])&&ee(o,a)||ee(r,a)||ee(Vn,a)||ee(i.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ee(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function co(e){return W(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ss=!0;function ch(e){const t=ya(e),n=e.proxy,r=e.ctx;Ss=!1,t.beforeCreate&&uo(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:I,activated:S,deactivated:N,beforeDestroy:b,beforeUnmount:_,destroyed:O,unmounted:A,render:B,renderTracked:J,renderTriggered:Z,errorCaptured:G,serverPrefetch:U,expose:z,inheritAttrs:me,components:ge,directives:De,filters:Wt}=t;if(c&&uh(c,r,null),a)for(const ae in a){const ne=a[ae];q(ne)&&(r[ae]=ne.bind(n))}if(i){const ae=i.call(n,n);he(ae)&&(e.data=vr(ae))}if(Ss=!0,s)for(const ae in s){const ne=s[ae],lt=q(ne)?ne.bind(n,n):q(ne.get)?ne.get.bind(n,n):Ge,It=!q(ne)&&q(ne.set)?ne.set.bind(n):Ge,Je=ye({get:lt,set:It});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>Je.value,set:Oe=>Je.value=Oe})}if(o)for(const ae in o)Lc(o[ae],r,n,ae);if(l){const ae=q(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(ne=>{Zr(ne,ae[ne])})}u&&uo(u,e,"c");function te(ae,ne){W(ne)?ne.forEach(lt=>ae(lt.bind(n))):ne&&ae(ne.bind(n))}if(te(Qd,f),te(Rc,p),te(Zd,g),te(eh,I),te(Cc,S),te(Pc,N),te(sh,G),te(ih,J),te(rh,Z),te(th,_),te(Di,A),te(nh,U),W(z))if(z.length){const ae=e.exposed||(e.exposed={});z.forEach(ne=>{Object.defineProperty(ae,ne,{get:()=>n[ne],set:lt=>n[ne]=lt})})}else e.exposed||(e.exposed={});B&&e.render===Ge&&(e.render=B),me!=null&&(e.inheritAttrs=me),ge&&(e.components=ge),De&&(e.directives=De)}function uh(e,t,n=Ge){W(e)&&(e=As(e));for(const r in e){const i=e[r];let s;he(i)?"default"in i?s=He(i.from||r,i.default,!0):s=He(i.from||r):s=He(i),pe(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[r]=s}}function uo(e,t,n){Ye(W(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Lc(e,t,n,r){const i=r.includes(".")?Ac(n,r):()=>n[r];if(we(e)){const s=t[e];q(s)&&tn(i,s)}else if(q(e))tn(i,e.bind(n));else if(he(e))if(W(e))e.forEach(s=>Lc(s,t,n,r));else{const s=q(e.handler)?e.handler.bind(n):t[e.handler];q(s)&&tn(i,s,e)}}function ya(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let l;return o?l=o:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(c=>fi(l,c,a,!0)),fi(l,t,a)),he(t)&&s.set(t,l),l}function fi(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&fi(e,s,n,!0),i&&i.forEach(a=>fi(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const o=fh[a]||n&&n[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const fh={data:fo,props:ho,emits:ho,methods:zn,computed:zn,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:zn,directives:zn,watch:hh,provide:fo,inject:dh};function fo(e,t){return t?e?function(){return xe(q(e)?e.call(this,this):e,q(t)?t.call(this,this):t)}:t:e}function dh(e,t){return zn(As(e),As(t))}function As(e){if(W(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ce(e,t){return e?[...new Set([].concat(e,t))]:t}function zn(e,t){return e?xe(Object.create(null),e,t):t}function ho(e,t){return e?W(e)&&W(t)?[...new Set([...e,...t])]:xe(Object.create(null),co(e),co(t??{})):t}function hh(e,t){if(!e)return t;if(!t)return e;const n=xe(Object.create(null),e);for(const r in t)n[r]=Ce(e[r],t[r]);return n}function Uc(){return{app:null,config:{isNativeTag:$f,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ph=0;function mh(e,t){return function(r,i=null){q(r)||(r=xe({},r)),i!=null&&!he(i)&&(i=null);const s=Uc(),a=new Set;let o=!1;const l=s.app={_uid:ph++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Bh,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&q(c.install)?(a.add(c),c.install(l,...u)):q(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const p=_e(r,i);return p.appContext=s,u&&t?t(p,c):e(p,c,f),o=!0,l._container=c,c.__vue_app__=l,Fi(p.component)||p.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){ir=l;try{return c()}finally{ir=null}}};return l}}let ir=null;function Zr(e,t){if(Ie){let n=Ie.provides;const r=Ie.parent&&Ie.parent.provides;r===n&&(n=Ie.provides=Object.create(r)),n[e]=t}}function He(e,t,n=!1){const r=Ie||Fe;if(r||ir){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ir._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&q(t)?t.call(r&&r.proxy):t}}function gh(){return!!(Ie||Fe||ir)}function vh(e,t,n,r=!1){const i={},s={};oi(s,Ui,1),e.propsDefaults=Object.create(null),Fc(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=r?i:hc(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function bh(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=Q(i),[l]=e.propsOptions;let c=!1;if((r||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Ri(e.emitsOptions,p))continue;const g=t[p];if(l)if(ee(s,p))g!==s[p]&&(s[p]=g,c=!0);else{const I=at(p);i[I]=Ts(l,o,I,g,e,!1)}else g!==s[p]&&(s[p]=g,c=!0)}}}else{Fc(e,t,i,s)&&(c=!0);let u;for(const f in o)(!t||!ee(t,f)&&((u=Dn(f))===f||!ee(t,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Ts(l,o,f,void 0,e,!0)):delete i[f]);if(s!==o)for(const f in s)(!t||!ee(t,f))&&(delete s[f],c=!0)}c&&mt(e,"set","$attrs")}function Fc(e,t,n,r){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let l in t){if(Yr(l))continue;const c=t[l];let u;i&&ee(i,u=at(l))?!s||!s.includes(u)?n[u]=c:(o||(o={}))[u]=c:Ri(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,a=!0)}if(s){const l=Q(n),c=o||ue;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Ts(i,l,f,c[f],e,!ee(c,f))}}return a}function Ts(e,t,n,r,i,s){const a=e[n];if(a!=null){const o=ee(a,"default");if(o&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&q(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(Cn(i),r=c[n]=l.call(null,t),rn())}else r=l}a[0]&&(s&&!o?r=!1:a[1]&&(r===""||r===Dn(n))&&(r=!0))}return r}function $c(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},o=[];let l=!1;if(!q(e)){const u=f=>{l=!0;const[p,g]=$c(f,t,!0);xe(a,p),g&&o.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!l)return he(e)&&r.set(e,_n),_n;if(W(s))for(let u=0;u<s.length;u++){const f=at(s[u]);po(f)&&(a[f]=ue)}else if(s)for(const u in s){const f=at(u);if(po(f)){const p=s[u],g=a[f]=W(p)||q(p)?{type:p}:xe({},p);if(g){const I=vo(Boolean,g.type),S=vo(String,g.type);g[0]=I>-1,g[1]=S<0||I<S,(I>-1||ee(g,"default"))&&o.push(f)}}}const c=[a,o];return he(e)&&r.set(e,c),c}function po(e){return e[0]!=="$"}function mo(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function go(e,t){return mo(e)===mo(t)}function vo(e,t){return W(t)?t.findIndex(n=>go(n,e)):q(t)&&go(t,e)?0:-1}const jc=e=>e[0]==="_"||e==="$stable",_a=e=>W(e)?e.map(et):[et(e)],yh=(e,t,n)=>{if(t._n)return t;const r=Jr((...i)=>_a(t(...i)),n);return r._c=!1,r},Bc=(e,t,n)=>{const r=e._ctx;for(const i in e){if(jc(i))continue;const s=e[i];if(q(s))t[i]=yh(i,s,r);else if(s!=null){const a=_a(s);t[i]=()=>a}}},Hc=(e,t)=>{const n=_a(t);e.slots.default=()=>n},_h=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=Q(t),oi(t,"_",n)):Bc(t,e.slots={})}else e.slots={},t&&Hc(e,t);oi(e.slots,Ui,1)},wh=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=ue;if(r.shapeFlag&32){const o=t._;o?n&&o===1?s=!1:(xe(i,t),!n&&o===1&&delete i._):(s=!t.$stable,Bc(t,i)),a=t}else t&&(Hc(e,t),a={default:1});if(s)for(const o in i)!jc(o)&&!(o in a)&&delete i[o]};function Cs(e,t,n,r,i=!1){if(W(e)){e.forEach((p,g)=>Cs(p,t&&(W(t)?t[g]:t),n,r,i));return}if(Qr(r)&&!i)return;const s=r.shapeFlag&4?Fi(r.component)||r.component.proxy:r.el,a=i?null:s,{i:o,r:l}=e,c=t&&t.r,u=o.refs===ue?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(we(c)?(u[c]=null,ee(f,c)&&(f[c]=null)):pe(c)&&(c.value=null)),q(l))Dt(l,o,12,[a,u]);else{const p=we(l),g=pe(l);if(p||g){const I=()=>{if(e.f){const S=p?ee(f,l)?f[l]:u[l]:l.value;i?W(S)&&sa(S,s):W(S)?S.includes(s)||S.push(s):p?(u[l]=[s],ee(f,l)&&(f[l]=u[l])):(l.value=[s],e.k&&(u[e.k]=l.value))}else p?(u[l]=a,ee(f,l)&&(f[l]=a)):g&&(l.value=a,e.k&&(u[e.k]=a))};a?(I.id=-1,Ne(I,n)):I()}}}const Ne=Yd;function Eh(e){return Ih(e)}function Ih(e,t){const n=_s();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=Ge,insertStaticContent:I}=e,S=(d,h,m,v=null,w=null,E=null,P=!1,k=null,T=!!h.dynamicChildren)=>{if(d===h)return;d&&!jn(d,h)&&(v=y(d),Oe(d,w,E,!0),d=null),h.patchFlag===-2&&(T=!1,h.dynamicChildren=null);const{type:x,ref:$,shapeFlag:D}=h;switch(x){case Li:N(d,h,m,v);break;case an:b(d,h,m,v);break;case es:d==null&&_(h,m,v,P);break;case We:ge(d,h,m,v,w,E,P,k,T);break;default:D&1?B(d,h,m,v,w,E,P,k,T):D&6?De(d,h,m,v,w,E,P,k,T):(D&64||D&128)&&x.process(d,h,m,v,w,E,P,k,T,C)}$!=null&&w&&Cs($,d&&d.ref,E,h||d,!h)},N=(d,h,m,v)=>{if(d==null)r(h.el=o(h.children),m,v);else{const w=h.el=d.el;h.children!==d.children&&c(w,h.children)}},b=(d,h,m,v)=>{d==null?r(h.el=l(h.children||""),m,v):h.el=d.el},_=(d,h,m,v)=>{[d.el,d.anchor]=I(d.children,h,m,v,d.el,d.anchor)},O=({el:d,anchor:h},m,v)=>{let w;for(;d&&d!==h;)w=p(d),r(d,m,v),d=w;r(h,m,v)},A=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),i(d),d=m;i(h)},B=(d,h,m,v,w,E,P,k,T)=>{P=P||h.type==="svg",d==null?J(h,m,v,w,E,P,k,T):U(d,h,w,E,P,k,T)},J=(d,h,m,v,w,E,P,k)=>{let T,x;const{type:$,props:D,shapeFlag:j,transition:V,dirs:Y}=d;if(T=d.el=a(d.type,E,D&&D.is,D),j&8?u(T,d.children):j&16&&G(d.children,T,null,v,w,E&&$!=="foreignObject",P,k),Y&&Vt(d,null,v,"created"),Z(T,d,d.scopeId,P,v),D){for(const se in D)se!=="value"&&!Yr(se)&&s(T,se,null,D[se],E,d.children,v,w,ke);"value"in D&&s(T,"value",null,D.value),(x=D.onVnodeBeforeMount)&&Ze(x,v,d)}Y&&Vt(d,null,v,"beforeMount");const le=(!w||w&&!w.pendingBranch)&&V&&!V.persisted;le&&V.beforeEnter(T),r(T,h,m),((x=D&&D.onVnodeMounted)||le||Y)&&Ne(()=>{x&&Ze(x,v,d),le&&V.enter(T),Y&&Vt(d,null,v,"mounted")},w)},Z=(d,h,m,v,w)=>{if(m&&g(d,m),v)for(let E=0;E<v.length;E++)g(d,v[E]);if(w){let E=w.subTree;if(h===E){const P=w.vnode;Z(d,P,P.scopeId,P.slotScopeIds,w.parent)}}},G=(d,h,m,v,w,E,P,k,T=0)=>{for(let x=T;x<d.length;x++){const $=d[x]=k?Ct(d[x]):et(d[x]);S(null,$,h,m,v,w,E,P,k)}},U=(d,h,m,v,w,E,P)=>{const k=h.el=d.el;let{patchFlag:T,dynamicChildren:x,dirs:$}=h;T|=d.patchFlag&16;const D=d.props||ue,j=h.props||ue;let V;m&&Kt(m,!1),(V=j.onVnodeBeforeUpdate)&&Ze(V,m,h,d),$&&Vt(h,d,m,"beforeUpdate"),m&&Kt(m,!0);const Y=w&&h.type!=="foreignObject";if(x?z(d.dynamicChildren,x,k,m,v,Y,E):P||ne(d,h,k,null,m,v,Y,E,!1),T>0){if(T&16)me(k,h,D,j,m,v,w);else if(T&2&&D.class!==j.class&&s(k,"class",null,j.class,w),T&4&&s(k,"style",D.style,j.style,w),T&8){const le=h.dynamicProps;for(let se=0;se<le.length;se++){const be=le[se],ze=D[be],hn=j[be];(hn!==ze||be==="value")&&s(k,be,ze,hn,w,d.children,m,v,ke)}}T&1&&d.children!==h.children&&u(k,h.children)}else!P&&x==null&&me(k,h,D,j,m,v,w);((V=j.onVnodeUpdated)||$)&&Ne(()=>{V&&Ze(V,m,h,d),$&&Vt(h,d,m,"updated")},v)},z=(d,h,m,v,w,E,P)=>{for(let k=0;k<h.length;k++){const T=d[k],x=h[k],$=T.el&&(T.type===We||!jn(T,x)||T.shapeFlag&70)?f(T.el):m;S(T,x,$,null,v,w,E,P,!0)}},me=(d,h,m,v,w,E,P)=>{if(m!==v){if(m!==ue)for(const k in m)!Yr(k)&&!(k in v)&&s(d,k,m[k],null,P,h.children,w,E,ke);for(const k in v){if(Yr(k))continue;const T=v[k],x=m[k];T!==x&&k!=="value"&&s(d,k,x,T,P,h.children,w,E,ke)}"value"in v&&s(d,"value",m.value,v.value)}},ge=(d,h,m,v,w,E,P,k,T)=>{const x=h.el=d?d.el:o(""),$=h.anchor=d?d.anchor:o("");let{patchFlag:D,dynamicChildren:j,slotScopeIds:V}=h;V&&(k=k?k.concat(V):V),d==null?(r(x,m,v),r($,m,v),G(h.children,m,$,w,E,P,k,T)):D>0&&D&64&&j&&d.dynamicChildren?(z(d.dynamicChildren,j,m,w,E,P,k),(h.key!=null||w&&h===w.subTree)&&zc(d,h,!0)):ne(d,h,m,$,w,E,P,k,T)},De=(d,h,m,v,w,E,P,k,T)=>{h.slotScopeIds=k,d==null?h.shapeFlag&512?w.ctx.activate(h,m,v,P,T):Wt(h,m,v,w,E,P,T):Be(d,h,T)},Wt=(d,h,m,v,w,E,P)=>{const k=d.component=Rh(d,v,w);if(Tc(d)&&(k.ctx.renderer=C),Nh(k),k.asyncDep){if(w&&w.registerDep(k,te),!d.el){const T=k.subTree=_e(an);b(null,T,h,m)}return}te(k,d,h,m,w,E,P)},Be=(d,h,m)=>{const v=h.component=d.component;if(Kd(d,h,m))if(v.asyncDep&&!v.asyncResolved){ae(v,h,m);return}else v.next=h,Fd(v.update),v.update();else h.el=d.el,v.vnode=h},te=(d,h,m,v,w,E,P)=>{const k=()=>{if(d.isMounted){let{next:$,bu:D,u:j,parent:V,vnode:Y}=d,le=$,se;Kt(d,!1),$?($.el=Y.el,ae(d,$,P)):$=Y,D&&Xr(D),(se=$.props&&$.props.onVnodeBeforeUpdate)&&Ze(se,V,$,Y),Kt(d,!0);const be=Qi(d),ze=d.subTree;d.subTree=be,S(ze,be,f(ze.el),y(ze),d,w,E),$.el=be.el,le===null&&qd(d,be.el),j&&Ne(j,w),(se=$.props&&$.props.onVnodeUpdated)&&Ne(()=>Ze(se,V,$,Y),w)}else{let $;const{el:D,props:j}=h,{bm:V,m:Y,parent:le}=d,se=Qr(h);if(Kt(d,!1),V&&Xr(V),!se&&($=j&&j.onVnodeBeforeMount)&&Ze($,le,h),Kt(d,!0),D&&re){const be=()=>{d.subTree=Qi(d),re(D,d.subTree,d,w,null)};se?h.type.__asyncLoader().then(()=>!d.isUnmounted&&be()):be()}else{const be=d.subTree=Qi(d);S(null,be,m,v,d,w,E),h.el=be.el}if(Y&&Ne(Y,w),!se&&($=j&&j.onVnodeMounted)){const be=h;Ne(()=>Ze($,le,be),w)}(h.shapeFlag&256||le&&Qr(le.vnode)&&le.vnode.shapeFlag&256)&&d.a&&Ne(d.a,w),d.isMounted=!0,h=m=v=null}},T=d.effect=new ua(k,()=>ba(x),d.scope),x=d.update=()=>T.run();x.id=d.uid,Kt(d,!0),x()},ae=(d,h,m)=>{h.component=d;const v=d.vnode.props;d.vnode=h,d.next=null,bh(d,h.props,v,m),wh(d,h.children,m),Ln(),ao(),Un()},ne=(d,h,m,v,w,E,P,k,T=!1)=>{const x=d&&d.children,$=d?d.shapeFlag:0,D=h.children,{patchFlag:j,shapeFlag:V}=h;if(j>0){if(j&128){It(x,D,m,v,w,E,P,k,T);return}else if(j&256){lt(x,D,m,v,w,E,P,k,T);return}}V&8?($&16&&ke(x,w,E),D!==x&&u(m,D)):$&16?V&16?It(x,D,m,v,w,E,P,k,T):ke(x,w,E,!0):($&8&&u(m,""),V&16&&G(D,m,v,w,E,P,k,T))},lt=(d,h,m,v,w,E,P,k,T)=>{d=d||_n,h=h||_n;const x=d.length,$=h.length,D=Math.min(x,$);let j;for(j=0;j<D;j++){const V=h[j]=T?Ct(h[j]):et(h[j]);S(d[j],V,m,null,w,E,P,k,T)}x>$?ke(d,w,E,!0,!1,D):G(h,m,v,w,E,P,k,T,D)},It=(d,h,m,v,w,E,P,k,T)=>{let x=0;const $=h.length;let D=d.length-1,j=$-1;for(;x<=D&&x<=j;){const V=d[x],Y=h[x]=T?Ct(h[x]):et(h[x]);if(jn(V,Y))S(V,Y,m,null,w,E,P,k,T);else break;x++}for(;x<=D&&x<=j;){const V=d[D],Y=h[j]=T?Ct(h[j]):et(h[j]);if(jn(V,Y))S(V,Y,m,null,w,E,P,k,T);else break;D--,j--}if(x>D){if(x<=j){const V=j+1,Y=V<$?h[V].el:v;for(;x<=j;)S(null,h[x]=T?Ct(h[x]):et(h[x]),m,Y,w,E,P,k,T),x++}}else if(x>j)for(;x<=D;)Oe(d[x],w,E,!0),x++;else{const V=x,Y=x,le=new Map;for(x=Y;x<=j;x++){const Le=h[x]=T?Ct(h[x]):et(h[x]);Le.key!=null&&le.set(Le.key,x)}let se,be=0;const ze=j-Y+1;let hn=!1,Ya=0;const $n=new Array(ze);for(x=0;x<ze;x++)$n[x]=0;for(x=V;x<=D;x++){const Le=d[x];if(be>=ze){Oe(Le,w,E,!0);continue}let Qe;if(Le.key!=null)Qe=le.get(Le.key);else for(se=Y;se<=j;se++)if($n[se-Y]===0&&jn(Le,h[se])){Qe=se;break}Qe===void 0?Oe(Le,w,E,!0):($n[Qe-Y]=x+1,Qe>=Ya?Ya=Qe:hn=!0,S(Le,h[Qe],m,null,w,E,P,k,T),be++)}const Xa=hn?xh($n):_n;for(se=Xa.length-1,x=ze-1;x>=0;x--){const Le=Y+x,Qe=h[Le],Ja=Le+1<$?h[Le+1].el:v;$n[x]===0?S(null,Qe,m,Ja,w,E,P,k,T):hn&&(se<0||x!==Xa[se]?Je(Qe,m,Ja,2):se--)}}},Je=(d,h,m,v,w=null)=>{const{el:E,type:P,transition:k,children:T,shapeFlag:x}=d;if(x&6){Je(d.component.subTree,h,m,v);return}if(x&128){d.suspense.move(h,m,v);return}if(x&64){P.move(d,h,m,C);return}if(P===We){r(E,h,m);for(let D=0;D<T.length;D++)Je(T[D],h,m,v);r(d.anchor,h,m);return}if(P===es){O(d,h,m);return}if(v!==2&&x&1&&k)if(v===0)k.beforeEnter(E),r(E,h,m),Ne(()=>k.enter(E),w);else{const{leave:D,delayLeave:j,afterLeave:V}=k,Y=()=>r(E,h,m),le=()=>{D(E,()=>{Y(),V&&V()})};j?j(E,Y,le):le()}else r(E,h,m)},Oe=(d,h,m,v=!1,w=!1)=>{const{type:E,props:P,ref:k,children:T,dynamicChildren:x,shapeFlag:$,patchFlag:D,dirs:j}=d;if(k!=null&&Cs(k,null,m,d,!0),$&256){h.ctx.deactivate(d);return}const V=$&1&&j,Y=!Qr(d);let le;if(Y&&(le=P&&P.onVnodeBeforeUnmount)&&Ze(le,h,d),$&6)Cr(d.component,m,v);else{if($&128){d.suspense.unmount(m,v);return}V&&Vt(d,null,h,"beforeUnmount"),$&64?d.type.remove(d,h,m,w,C,v):x&&(E!==We||D>0&&D&64)?ke(x,h,m,!1,!0):(E===We&&D&384||!w&&$&16)&&ke(T,h,m),v&&fn(d)}(Y&&(le=P&&P.onVnodeUnmounted)||V)&&Ne(()=>{le&&Ze(le,h,d),V&&Vt(d,null,h,"unmounted")},m)},fn=d=>{const{type:h,el:m,anchor:v,transition:w}=d;if(h===We){dn(m,v);return}if(h===es){A(d);return}const E=()=>{i(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:P,delayLeave:k}=w,T=()=>P(m,E);k?k(d.el,E,T):T()}else E()},dn=(d,h)=>{let m;for(;d!==h;)m=p(d),i(d),d=m;i(h)},Cr=(d,h,m)=>{const{bum:v,scope:w,update:E,subTree:P,um:k}=d;v&&Xr(v),w.stop(),E&&(E.active=!1,Oe(P,d,h,m)),k&&Ne(k,h),Ne(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},ke=(d,h,m,v=!1,w=!1,E=0)=>{for(let P=E;P<d.length;P++)Oe(d[P],h,m,v,w)},y=d=>d.shapeFlag&6?y(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),M=(d,h,m)=>{d==null?h._vnode&&Oe(h._vnode,null,null,!0):S(h._vnode||null,d,h,null,null,null,m),ao(),Ic(),h._vnode=d},C={p:S,um:Oe,m:Je,r:fn,mt:Wt,mc:G,pc:ne,pbc:z,n:y,o:e};let F,re;return t&&([F,re]=t(C)),{render:M,hydrate:F,createApp:mh(M,F)}}function Kt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function zc(e,t,n=!1){const r=e.children,i=t.children;if(W(r)&&W(i))for(let s=0;s<r.length;s++){const a=r[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=Ct(i[s]),o.el=a.el),n||zc(a,o)),o.type===Li&&(o.el=a.el)}}function xh(e){const t=e.slice(),n=[0];let r,i,s,a,o;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,e[n[o]]<c?s=o+1:a=o;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}const kh=e=>e.__isTeleport,We=Symbol.for("v-fgt"),Li=Symbol.for("v-txt"),an=Symbol.for("v-cmt"),es=Symbol.for("v-stc"),Kn=[];let Ke=null;function Se(e=!1){Kn.push(Ke=e?null:[])}function Sh(){Kn.pop(),Ke=Kn[Kn.length-1]||null}let sr=1;function bo(e){sr+=e}function Wc(e){return e.dynamicChildren=sr>0?Ke||_n:null,Sh(),sr>0&&Ke&&Ke.push(e),e}function $e(e,t,n,r,i,s){return Wc(H(e,t,n,r,i,s,!0))}function Ps(e,t,n,r,i){return Wc(_e(e,t,n,r,i,!0))}function Os(e){return e?e.__v_isVNode===!0:!1}function jn(e,t){return e.type===t.type&&e.key===t.key}const Ui="__vInternal",Vc=({key:e})=>e??null,ei=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?we(e)||pe(e)||q(e)?{i:Fe,r:e,k:t,f:!!n}:e:null);function H(e,t=null,n=null,r=0,i=null,s=e===We?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Vc(t),ref:t&&ei(t),scopeId:Ni,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Fe};return o?(wa(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=we(n)?8:16),sr>0&&!a&&Ke&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ke.push(l),l}const _e=Ah;function Ah(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===ah)&&(e=an),Os(e)){const o=Tn(e,t,!0);return n&&wa(o,n),sr>0&&!s&&Ke&&(o.shapeFlag&6?Ke[Ke.indexOf(e)]=o:Ke.push(o)),o.patchFlag|=-2,o}if(Fh(e)&&(e=e.__vccOpts),t){t=Th(t);let{class:o,style:l}=t;o&&!we(o)&&(t.class=X(o)),he(l)&&(mc(l)&&!W(l)&&(l=xe({},l)),t.style=la(l))}const a=we(e)?1:Gd(e)?128:kh(e)?64:he(e)?4:q(e)?2:0;return H(e,t,n,r,i,a,s,!0)}function Th(e){return e?mc(e)||Ui in e?xe({},e):e:null}function Tn(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:a}=e,o=t?Ch(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Vc(o),ref:t&&t.ref?n&&i?W(i)?i.concat(ei(t)):[i,ei(t)]:ei(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==We?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Tn(e.ssContent),ssFallback:e.ssFallback&&Tn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function nn(e=" ",t=0){return _e(Li,null,e,t)}function yo(e="",t=!1){return t?(Se(),Ps(an,null,e)):_e(an,null,e)}function et(e){return e==null||typeof e=="boolean"?_e(an):W(e)?_e(We,null,e.slice()):typeof e=="object"?Ct(e):_e(Li,null,String(e))}function Ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Tn(e)}function wa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(W(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),wa(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Ui in t)?t._ctx=Fe:i===3&&Fe&&(Fe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else q(t)?(t={default:t,_ctx:Fe},n=32):(t=String(t),r&64?(n=16,t=[nn(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ch(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=X([t.class,r.class]));else if(i==="style")t.style=la([t.style,r.style]);else if(ki(i)){const s=t[i],a=r[i];a&&s!==a&&!(W(s)&&s.includes(a))&&(t[i]=s?[].concat(s,a):a)}else i!==""&&(t[i]=r[i])}return t}function Ze(e,t,n,r=null){Ye(e,t,7,[n,r])}const Ph=Uc();let Oh=0;function Rh(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Ph,s={uid:Oh++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new ec(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$c(r,i),emitsOptions:kc(r,i),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:r.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Bd.bind(null,s),e.ce&&e.ce(s),s}let Ie=null,Ea,pn,_o="__VUE_INSTANCE_SETTERS__";(pn=_s()[_o])||(pn=_s()[_o]=[]),pn.push(e=>Ie=e),Ea=e=>{pn.length>1?pn.forEach(t=>t(e)):pn[0](e)};const Cn=e=>{Ea(e),e.scope.on()},rn=()=>{Ie&&Ie.scope.off(),Ea(null)};function Kc(e){return e.vnode.shapeFlag&4}let ar=!1;function Nh(e,t=!1){ar=t;const{props:n,children:r}=e.vnode,i=Kc(e);vh(e,n,i,t),_h(e,r);const s=i?Mh(e,t):void 0;return ar=!1,s}function Mh(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Pi(new Proxy(e.ctx,lh));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Lh(e):null;Cn(e),Ln();const s=Dt(r,e,0,[e.props,i]);if(Un(),rn(),Yl(s)){if(s.then(rn,rn),t)return s.then(a=>{wo(e,a,t)}).catch(a=>{Oi(a,e,0)});e.asyncDep=s}else wo(e,s,t)}else qc(e,t)}function wo(e,t,n){q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:he(t)&&(e.setupState=yc(t)),qc(e,n)}let Eo;function qc(e,t,n){const r=e.type;if(!e.render){if(!t&&Eo&&!r.render){const i=r.template||ya(e).template;if(i){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,c=xe(xe({isCustomElement:s,delimiters:o},a),l);r.render=Eo(i,c)}}e.render=r.render||Ge}Cn(e),Ln(),ch(e),Un(),rn()}function Dh(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Me(e,"get","$attrs"),t[n]}}))}function Lh(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Dh(e)},slots:e.slots,emit:e.emit,expose:t}}function Fi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(yc(Pi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Vn)return Vn[n](e)},has(t,n){return n in t||n in Vn}}))}function Uh(e,t=!0){return q(e)?e.displayName||e.name:e.name||t&&e.__name}function Fh(e){return q(e)&&"__vccOpts"in e}const ye=(e,t)=>Dd(e,t,ar);function Ia(e,t,n){const r=arguments.length;return r===2?he(t)&&!W(t)?Os(t)?_e(e,null,[t]):_e(e,t):_e(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Os(n)&&(n=[n]),_e(e,t,n))}const $h=Symbol.for("v-scx"),jh=()=>He($h),Bh="3.3.4",Hh="http://www.w3.org/2000/svg",Yt=typeof document<"u"?document:null,Io=Yt&&Yt.createElement("template"),zh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Yt.createElementNS(Hh,e):Yt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>Yt.createTextNode(e),createComment:e=>Yt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Yt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const a=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{Io.innerHTML=r?`<svg>${e}</svg>`:e;const o=Io.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Wh(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Vh(e,t,n){const r=e.style,i=we(n);if(n&&!i){if(t&&!we(t))for(const s in t)n[s]==null&&Rs(r,s,"");for(const s in n)Rs(r,s,n[s])}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const xo=/\s*!important$/;function Rs(e,t,n){if(W(n))n.forEach(r=>Rs(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Kh(e,t);xo.test(n)?e.setProperty(Dn(r),n.replace(xo,""),"important"):e[r]=n}}const ko=["Webkit","Moz","ms"],ts={};function Kh(e,t){const n=ts[t];if(n)return n;let r=at(t);if(r!=="filter"&&r in e)return ts[t]=r;r=Ti(r);for(let i=0;i<ko.length;i++){const s=ko[i]+r;if(s in e)return ts[t]=s}return t}const So="http://www.w3.org/1999/xlink";function qh(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(So,t.slice(6,t.length)):e.setAttributeNS(So,t,n);else{const s=Xf(t);n==null||s&&!Ql(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Gh(e,t,n,r,i,s,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,i,s),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){e._value=n;const c=o==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ql(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function gn(e,t,n,r){e.addEventListener(t,n,r)}function Yh(e,t,n,r){e.removeEventListener(t,n,r)}function Xh(e,t,n,r,i=null){const s=e._vei||(e._vei={}),a=s[t];if(r&&a)a.value=r;else{const[o,l]=Jh(t);if(r){const c=s[t]=ep(r,i);gn(e,o,c,l)}else a&&(Yh(e,o,a,l),s[t]=void 0)}}const Ao=/(?:Once|Passive|Capture)$/;function Jh(e){let t;if(Ao.test(e)){t={};let r;for(;r=e.match(Ao);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Dn(e.slice(2)),t]}let ns=0;const Qh=Promise.resolve(),Zh=()=>ns||(Qh.then(()=>ns=0),ns=Date.now());function ep(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ye(tp(r,n.value),t,5,[r])};return n.value=e,n.attached=Zh(),n}function tp(e,t){if(W(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const To=/^on[a-z]/,np=(e,t,n,r,i=!1,s,a,o,l)=>{t==="class"?Wh(e,r,i):t==="style"?Vh(e,n,r):ki(t)?ia(t)||Xh(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):rp(e,t,r,i))?Gh(e,t,r,s,a,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),qh(e,t,r,i))};function rp(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&To.test(t)&&q(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||To.test(t)&&we(n)?!1:t in e}const Co=e=>{const t=e.props["onUpdate:modelValue"]||!1;return W(t)?n=>Xr(t,n):t};function ip(e){e.target.composing=!0}function Po(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ur={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=Co(i);const s=r||i.props&&i.props.type==="number";gn(e,t?"change":"input",a=>{if(a.target.composing)return;let o=e.value;n&&(o=o.trim()),s&&(o=ys(o)),e._assign(o)}),n&&gn(e,"change",()=>{e.value=e.value.trim()}),t||(gn(e,"compositionstart",ip),gn(e,"compositionend",Po),gn(e,"change",Po))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e._assign=Co(s),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(i||e.type==="number")&&ys(e.value)===t))return;const a=t??"";e.value!==a&&(e.value=a)}},sp=["ctrl","shift","alt","meta"],ap={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>sp.some(n=>e[`${n}Key`]&&!t.includes(n))},Oo=(e,t)=>(n,...r)=>{for(let i=0;i<t.length;i++){const s=ap[t[i]];if(s&&s(n,t))return}return e(n,...r)},op=xe({patchProp:np},zh);let Ro;function lp(){return Ro||(Ro=Eh(op))}const cp=(...e)=>{const t=lp().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=up(r);if(!i)return;const s=t._component;!q(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function up(e){return we(e)?document.querySelector(e):e}var fp=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Gc;const $i=e=>Gc=e,Yc=Symbol();function Ns(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var qn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(qn||(qn={}));function dp(){const e=tc(!0),t=e.run(()=>ce({}));let n=[],r=[];const i=Pi({install(s){$i(i),i._a=s,s.provide(Yc,i),s.config.globalProperties.$pinia=i,r.forEach(a=>n.push(a)),r=[]},use(s){return!this._a&&!fp?r.push(s):n.push(s),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}const Xc=()=>{};function No(e,t,n,r=Xc){e.push(t);const i=()=>{const s=e.indexOf(t);s>-1&&(e.splice(s,1),r())};return!n&&nc()&&Qf(i),i}function mn(e,...t){e.slice().forEach(n=>{n(...t)})}const hp=e=>e();function Ms(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],i=e[n];Ns(i)&&Ns(r)&&e.hasOwnProperty(n)&&!pe(r)&&!pt(r)?e[n]=Ms(i,r):e[n]=r}return e}const pp=Symbol();function mp(e){return!Ns(e)||!e.hasOwnProperty(pp)}const{assign:Tt}=Object;function gp(e){return!!(pe(e)&&e.effect)}function vp(e,t,n,r){const{state:i,actions:s,getters:a}=t,o=n.state.value[e];let l;function c(){o||(n.state.value[e]=i?i():{});const u=Pd(n.state.value[e]);return Tt(u,s,Object.keys(a||{}).reduce((f,p)=>(f[p]=Pi(ye(()=>{$i(n);const g=n._s.get(e);return a[p].call(g,g)})),f),{}))}return l=Jc(e,c,t,n,r,!0),l}function Jc(e,t,n={},r,i,s){let a;const o=Tt({actions:{}},n),l={deep:!0};let c,u,f=[],p=[],g;const I=r.state.value[e];!s&&!I&&(r.state.value[e]={}),ce({});let S;function N(G){let U;c=u=!1,typeof G=="function"?(G(r.state.value[e]),U={type:qn.patchFunction,storeId:e,events:g}):(Ms(r.state.value[e],G),U={type:qn.patchObject,payload:G,storeId:e,events:g});const z=S=Symbol();va().then(()=>{S===z&&(c=!0)}),u=!0,mn(f,U,r.state.value[e])}const b=s?function(){const{state:U}=n,z=U?U():{};this.$patch(me=>{Tt(me,z)})}:Xc;function _(){a.stop(),f=[],p=[],r._s.delete(e)}function O(G,U){return function(){$i(r);const z=Array.from(arguments),me=[],ge=[];function De(te){me.push(te)}function Wt(te){ge.push(te)}mn(p,{args:z,name:G,store:B,after:De,onError:Wt});let Be;try{Be=U.apply(this&&this.$id===e?this:B,z)}catch(te){throw mn(ge,te),te}return Be instanceof Promise?Be.then(te=>(mn(me,te),te)).catch(te=>(mn(ge,te),Promise.reject(te))):(mn(me,Be),Be)}}const A={_p:r,$id:e,$onAction:No.bind(null,p),$patch:N,$reset:b,$subscribe(G,U={}){const z=No(f,G,U.detached,()=>me()),me=a.run(()=>tn(()=>r.state.value[e],ge=>{(U.flush==="sync"?u:c)&&G({storeId:e,type:qn.direct,events:g},ge)},Tt({},l,U)));return z},$dispose:_},B=vr(A);r._s.set(e,B);const J=r._a&&r._a.runWithContext||hp,Z=r._e.run(()=>(a=tc(),J(()=>a.run(t))));for(const G in Z){const U=Z[G];if(pe(U)&&!gp(U)||pt(U))s||(I&&mp(U)&&(pe(U)?U.value=I[G]:Ms(U,I[G])),r.state.value[e][G]=U);else if(typeof U=="function"){const z=O(G,U);Z[G]=z,o.actions[G]=U}}return Tt(B,Z),Tt(Q(B),Z),Object.defineProperty(B,"$state",{get:()=>r.state.value[e],set:G=>{N(U=>{Tt(U,G)})}}),r._p.forEach(G=>{Tt(B,a.run(()=>G({store:B,app:r._a,pinia:r,options:o})))}),I&&s&&n.hydrate&&n.hydrate(B.$state,I),c=!0,u=!0,B}function Qc(e,t,n){let r,i;const s=typeof t=="function";typeof e=="string"?(r=e,i=s?n:t):(i=e,r=e.id);function a(o,l){const c=gh();return o=o||(c?He(Yc,null):null),o&&$i(o),o=Gc,o._s.has(r)||(s?Jc(r,t,i,o):vp(r,i,o)),o._s.get(r)}return a.$id=r,a}function ji(e){{e=Q(e);const t={};for(const n in e){const r=e[n];(pe(r)||pt(r))&&(t[n]=Nd(e,n))}return t}}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const vn=typeof window<"u";function bp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ie=Object.assign;function rs(e,t){const n={};for(const r in t){const i=t[r];n[r]=Xe(i)?i.map(e):e(i)}return n}const Gn=()=>{},Xe=Array.isArray,yp=/\/$/,_p=e=>e.replace(yp,"");function is(e,t,n="/"){let r,i={},s="",a="";const o=t.indexOf("#");let l=t.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(r=t.slice(0,l),s=t.slice(l+1,o>-1?o:t.length),i=e(s)),o>-1&&(r=r||t.slice(0,o),a=t.slice(o,t.length)),r=xp(r??t,n),{fullPath:r+(s&&"?")+s+a,path:r,query:i,hash:a}}function wp(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Mo(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ep(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Pn(t.matched[r],n.matched[i])&&Zc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Pn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Zc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ip(e[n],t[n]))return!1;return!0}function Ip(e,t){return Xe(e)?Do(e,t):Xe(t)?Do(t,e):e===t}function Do(e,t){return Xe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function xp(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,a,o;for(a=0;a<r.length;a++)if(o=r[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}var or;(function(e){e.pop="pop",e.push="push"})(or||(or={}));var Yn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Yn||(Yn={}));function kp(e){if(!e)if(vn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),_p(e)}const Sp=/^[^#]+#/;function Ap(e,t){return e.replace(Sp,"#")+t}function Tp(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Bi=()=>({left:window.pageXOffset,top:window.pageYOffset});function Cp(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Tp(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Lo(e,t){return(history.state?history.state.position-t:-1)+e}const Ds=new Map;function Pp(e,t){Ds.set(e,t)}function Op(e){const t=Ds.get(e);return Ds.delete(e),t}let Rp=()=>location.protocol+"//"+location.host;function eu(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let o=i.includes(e.slice(s))?e.slice(s).length:1,l=i.slice(o);return l[0]!=="/"&&(l="/"+l),Mo(l,"")}return Mo(n,e)+r+i}function Np(e,t,n,r){let i=[],s=[],a=null;const o=({state:p})=>{const g=eu(e,location),I=n.value,S=t.value;let N=0;if(p){if(n.value=g,t.value=p,a&&a===I){a=null;return}N=S?p.position-S.position:0}else r(g);i.forEach(b=>{b(n.value,I,{delta:N,type:or.pop,direction:N?N>0?Yn.forward:Yn.back:Yn.unknown})})};function l(){a=n.value}function c(p){i.push(p);const g=()=>{const I=i.indexOf(p);I>-1&&i.splice(I,1)};return s.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(ie({},p.state,{scroll:Bi()}),"")}function f(){for(const p of s)p();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Uo(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Bi():null}}function Mp(e){const{history:t,location:n}=window,r={value:eu(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:Rp()+e+l;try{t[u?"replaceState":"pushState"](c,"",p),i.value=c}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function a(l,c){const u=ie({},t.state,Uo(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function o(l,c){const u=ie({},i.value,t.state,{forward:l,scroll:Bi()});s(u.current,u,!0);const f=ie({},Uo(r.value,l,null),{position:u.position+1},c);s(l,f,!1),r.value=l}return{location:r,state:i,push:o,replace:a}}function Dp(e){e=kp(e);const t=Mp(e),n=Np(e,t.state,t.location,t.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=ie({location:"",base:e,go:r,createHref:Ap.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Lp(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Dp(e)}function Up(e){return typeof e=="string"||e&&typeof e=="object"}function tu(e){return typeof e=="string"||typeof e=="symbol"}const kt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},nu=Symbol("");var Fo;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Fo||(Fo={}));function On(e,t){return ie(new Error,{type:e,[nu]:!0},t)}function ct(e,t){return e instanceof Error&&nu in e&&(t==null||!!(e.type&t))}const $o="[^/]+?",Fp={sensitive:!1,strict:!1,start:!0,end:!0},$p=/[.+*?^${}()[\]/\\]/g;function jp(e,t){const n=ie({},Fp,t),r=[];let i=n.start?"^":"";const s=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let f=0;f<c.length;f++){const p=c[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(i+="/"),i+=p.value.replace($p,"\\$&"),g+=40;else if(p.type===1){const{value:I,repeatable:S,optional:N,regexp:b}=p;s.push({name:I,repeatable:S,optional:N});const _=b||$o;if(_!==$o){g+=10;try{new RegExp(`(${_})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${I}" (${_}): `+A.message)}}let O=S?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;f||(O=N&&c.length<2?`(?:/${O})`:"/"+O),N&&(O+="?"),i+=O,g+=20,N&&(g+=-8),S&&(g+=-20),_===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",I=s[p-1];f[I.name]=g&&I.repeatable?g.split("/"):g}return f}function l(c){let u="",f=!1;for(const p of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:I,repeatable:S,optional:N}=g,b=I in c?c[I]:"";if(Xe(b)&&!S)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const _=Xe(b)?b.join("/"):b;if(!_)if(N)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${I}"`);u+=_}}return u||"/"}return{re:a,score:r,keys:s,parse:o,stringify:l}}function Bp(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Hp(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=Bp(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(jo(r))return 1;if(jo(i))return-1}return i.length-r.length}function jo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const zp={type:0,value:""},Wp=/[a-zA-Z0-9_]/;function Vp(e){if(!e)return[[]];if(e==="/")return[[zp]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;o<e.length;){if(l=e[o++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:Wp.test(l)?p():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),f(),a(),i}function Kp(e,t,n){const r=jp(Vp(e.path),n),i=ie(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function qp(e,t){const n=[],r=new Map;t=zo({strict:!1,end:!0,sensitive:!1},t);function i(u){return r.get(u)}function s(u,f,p){const g=!p,I=Gp(u);I.aliasOf=p&&p.record;const S=zo(t,u),N=[I];if("alias"in u){const O=typeof u.alias=="string"?[u.alias]:u.alias;for(const A of O)N.push(ie({},I,{components:p?p.record.components:I.components,path:A,aliasOf:p?p.record:I}))}let b,_;for(const O of N){const{path:A}=O;if(f&&A[0]!=="/"){const B=f.record.path,J=B[B.length-1]==="/"?"":"/";O.path=f.record.path+(A&&J+A)}if(b=Kp(O,f,S),p?p.alias.push(b):(_=_||b,_!==b&&_.alias.push(b),g&&u.name&&!Ho(b)&&a(u.name)),I.children){const B=I.children;for(let J=0;J<B.length;J++)s(B[J],b,p&&p.children[J])}p=p||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return _?()=>{a(_)}:Gn}function a(u){if(tu(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return n}function l(u){let f=0;for(;f<n.length&&Hp(u,n[f])>=0&&(u.record.path!==n[f].record.path||!ru(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Ho(u)&&r.set(u.record.name,u)}function c(u,f){let p,g={},I,S;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw On(1,{location:u});S=p.record.name,g=ie(Bo(f.params,p.keys.filter(_=>!_.optional).map(_=>_.name)),u.params&&Bo(u.params,p.keys.map(_=>_.name))),I=p.stringify(g)}else if("path"in u)I=u.path,p=n.find(_=>_.re.test(I)),p&&(g=p.parse(I),S=p.record.name);else{if(p=f.name?r.get(f.name):n.find(_=>_.re.test(f.path)),!p)throw On(1,{location:u,currentLocation:f});S=p.record.name,g=ie({},f.params,u.params),I=p.stringify(g)}const N=[];let b=p;for(;b;)N.unshift(b.record),b=b.parent;return{name:S,path:I,params:g,matched:N,meta:Xp(N)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:i}}function Bo(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Gp(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Yp(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Yp(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ho(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Xp(e){return e.reduce((t,n)=>ie(t,n.meta),{})}function zo(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ru(e,t){return t.children.some(n=>n===e||ru(e,n))}const iu=/#/g,Jp=/&/g,Qp=/\//g,Zp=/=/g,em=/\?/g,su=/\+/g,tm=/%5B/g,nm=/%5D/g,au=/%5E/g,rm=/%60/g,ou=/%7B/g,im=/%7C/g,lu=/%7D/g,sm=/%20/g;function xa(e){return encodeURI(""+e).replace(im,"|").replace(tm,"[").replace(nm,"]")}function am(e){return xa(e).replace(ou,"{").replace(lu,"}").replace(au,"^")}function Ls(e){return xa(e).replace(su,"%2B").replace(sm,"+").replace(iu,"%23").replace(Jp,"%26").replace(rm,"`").replace(ou,"{").replace(lu,"}").replace(au,"^")}function om(e){return Ls(e).replace(Zp,"%3D")}function lm(e){return xa(e).replace(iu,"%23").replace(em,"%3F")}function cm(e){return e==null?"":lm(e).replace(Qp,"%2F")}function di(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function um(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(su," "),a=s.indexOf("="),o=di(a<0?s:s.slice(0,a)),l=a<0?null:di(s.slice(a+1));if(o in t){let c=t[o];Xe(c)||(c=t[o]=[c]),c.push(l)}else t[o]=l}return t}function Wo(e){let t="";for(let n in e){const r=e[n];if(n=om(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Xe(r)?r.map(s=>s&&Ls(s)):[r&&Ls(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function fm(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Xe(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const cu=Symbol(""),Vo=Symbol(""),Hi=Symbol(""),uu=Symbol(""),Us=Symbol("");function Bn(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function dm(e,t,n){const r=()=>{e[t].delete(n)};Di(r),Pc(r),Cc(()=>{e[t].add(n)}),e[t].add(n)}function hm(e){const t=He(cu,{}).value;t&&dm(t,"leaveGuards",e)}function Pt(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,o)=>{const l=f=>{f===!1?o(On(4,{from:n,to:t})):f instanceof Error?o(f):Up(f)?o(On(2,{from:t,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),a())},c=e.call(r&&r.instances[i],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(f=>o(f))})}function ss(e,t,n,r){const i=[];for(const s of e)for(const a in s.components){let o=s.components[a];if(!(t!=="beforeRouteEnter"&&!s.instances[a]))if(pm(o)){const c=(o.__vccOpts||o)[t];c&&i.push(Pt(c,n,r,s,a))}else{let l=o();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=bp(c)?c.default:c;s.components[a]=u;const p=(u.__vccOpts||u)[t];return p&&Pt(p,n,r,s,a)()}))}}return i}function pm(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ko(e){const t=He(Hi),n=He(uu),r=ye(()=>t.resolve(Pe(e.to))),i=ye(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(Pn.bind(null,u));if(p>-1)return p;const g=qo(l[c-2]);return c>1&&qo(u)===g&&f[f.length-1].path!==g?f.findIndex(Pn.bind(null,l[c-2])):p}),s=ye(()=>i.value>-1&&bm(n.params,r.value.params)),a=ye(()=>i.value>-1&&i.value===n.matched.length-1&&Zc(n.params,r.value.params));function o(l={}){return vm(l)?t[Pe(e.replace)?"replace":"push"](Pe(e.to)).catch(Gn):Promise.resolve()}return{route:r,href:ye(()=>r.value.href),isActive:s,isExactActive:a,navigate:o}}const mm=_t({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ko,setup(e,{slots:t}){const n=vr(Ko(e)),{options:r}=He(Hi),i=ye(()=>({[Go(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Go(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:Ia("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),gm=mm;function vm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function bm(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Xe(i)||i.length!==r.length||r.some((s,a)=>s!==i[a]))return!1}return!0}function qo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Go=(e,t,n)=>e??t??n,ym=_t({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=He(Us),i=ye(()=>e.route||r.value),s=He(Vo,0),a=ye(()=>{let c=Pe(s);const{matched:u}=i.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=ye(()=>i.value.matched[a.value]);Zr(Vo,ye(()=>a.value+1)),Zr(cu,o),Zr(Us,i);const l=ce();return tn(()=>[l.value,o.value,e.name],([c,u,f],[p,g,I])=>{u&&(u.instances[f]=c,g&&g!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Pn(u,g)||!p)&&(u.enterCallbacks[f]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=i.value,u=e.name,f=o.value,p=f&&f.components[u];if(!p)return Yo(n.default,{Component:p,route:c});const g=f.props[u],I=g?g===!0?c.params:typeof g=="function"?g(c):g:null,N=Ia(p,ie({},I,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Yo(n.default,{Component:N,route:c})||N}}});function Yo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const fu=ym;function _m(e){const t=qp(e.routes,e),n=e.parseQuery||um,r=e.stringifyQuery||Wo,i=e.history,s=Bn(),a=Bn(),o=Bn(),l=Sd(kt);let c=kt;vn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=rs.bind(null,y=>""+y),f=rs.bind(null,cm),p=rs.bind(null,di);function g(y,M){let C,F;return tu(y)?(C=t.getRecordMatcher(y),F=M):F=y,t.addRoute(F,C)}function I(y){const M=t.getRecordMatcher(y);M&&t.removeRoute(M)}function S(){return t.getRoutes().map(y=>y.record)}function N(y){return!!t.getRecordMatcher(y)}function b(y,M){if(M=ie({},M||l.value),typeof y=="string"){const m=is(n,y,M.path),v=t.resolve({path:m.path},M),w=i.createHref(m.fullPath);return ie(m,v,{params:p(v.params),hash:di(m.hash),redirectedFrom:void 0,href:w})}let C;if("path"in y)C=ie({},y,{path:is(n,y.path,M.path).path});else{const m=ie({},y.params);for(const v in m)m[v]==null&&delete m[v];C=ie({},y,{params:f(m)}),M.params=f(M.params)}const F=t.resolve(C,M),re=y.hash||"";F.params=u(p(F.params));const d=wp(r,ie({},y,{hash:am(re),path:F.path})),h=i.createHref(d);return ie({fullPath:d,hash:re,query:r===Wo?fm(y.query):y.query||{}},F,{redirectedFrom:void 0,href:h})}function _(y){return typeof y=="string"?is(n,y,l.value.path):ie({},y)}function O(y,M){if(c!==y)return On(8,{from:M,to:y})}function A(y){return Z(y)}function B(y){return A(ie(_(y),{replace:!0}))}function J(y){const M=y.matched[y.matched.length-1];if(M&&M.redirect){const{redirect:C}=M;let F=typeof C=="function"?C(y):C;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=_(F):{path:F},F.params={}),ie({query:y.query,hash:y.hash,params:"path"in F?{}:y.params},F)}}function Z(y,M){const C=c=b(y),F=l.value,re=y.state,d=y.force,h=y.replace===!0,m=J(C);if(m)return Z(ie(_(m),{state:typeof m=="object"?ie({},re,m.state):re,force:d,replace:h}),M||C);const v=C;v.redirectedFrom=M;let w;return!d&&Ep(r,F,C)&&(w=On(16,{to:v,from:F}),Je(F,F,!0,!1)),(w?Promise.resolve(w):z(v,F)).catch(E=>ct(E)?ct(E,2)?E:It(E):ne(E,v,F)).then(E=>{if(E){if(ct(E,2))return Z(ie({replace:h},_(E.to),{state:typeof E.to=="object"?ie({},re,E.to.state):re,force:d}),M||v)}else E=ge(v,F,!0,h,re);return me(v,F,E),E})}function G(y,M){const C=O(y,M);return C?Promise.reject(C):Promise.resolve()}function U(y){const M=dn.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(y):y()}function z(y,M){let C;const[F,re,d]=wm(y,M);C=ss(F.reverse(),"beforeRouteLeave",y,M);for(const m of F)m.leaveGuards.forEach(v=>{C.push(Pt(v,y,M))});const h=G.bind(null,y,M);return C.push(h),ke(C).then(()=>{C=[];for(const m of s.list())C.push(Pt(m,y,M));return C.push(h),ke(C)}).then(()=>{C=ss(re,"beforeRouteUpdate",y,M);for(const m of re)m.updateGuards.forEach(v=>{C.push(Pt(v,y,M))});return C.push(h),ke(C)}).then(()=>{C=[];for(const m of d)if(m.beforeEnter)if(Xe(m.beforeEnter))for(const v of m.beforeEnter)C.push(Pt(v,y,M));else C.push(Pt(m.beforeEnter,y,M));return C.push(h),ke(C)}).then(()=>(y.matched.forEach(m=>m.enterCallbacks={}),C=ss(d,"beforeRouteEnter",y,M),C.push(h),ke(C))).then(()=>{C=[];for(const m of a.list())C.push(Pt(m,y,M));return C.push(h),ke(C)}).catch(m=>ct(m,8)?m:Promise.reject(m))}function me(y,M,C){o.list().forEach(F=>U(()=>F(y,M,C)))}function ge(y,M,C,F,re){const d=O(y,M);if(d)return d;const h=M===kt,m=vn?history.state:{};C&&(F||h?i.replace(y.fullPath,ie({scroll:h&&m&&m.scroll},re)):i.push(y.fullPath,re)),l.value=y,Je(y,M,C,h),It()}let De;function Wt(){De||(De=i.listen((y,M,C)=>{if(!Cr.listening)return;const F=b(y),re=J(F);if(re){Z(ie(re,{replace:!0}),F).catch(Gn);return}c=F;const d=l.value;vn&&Pp(Lo(d.fullPath,C.delta),Bi()),z(F,d).catch(h=>ct(h,12)?h:ct(h,2)?(Z(h.to,F).then(m=>{ct(m,20)&&!C.delta&&C.type===or.pop&&i.go(-1,!1)}).catch(Gn),Promise.reject()):(C.delta&&i.go(-C.delta,!1),ne(h,F,d))).then(h=>{h=h||ge(F,d,!1),h&&(C.delta&&!ct(h,8)?i.go(-C.delta,!1):C.type===or.pop&&ct(h,20)&&i.go(-1,!1)),me(F,d,h)}).catch(Gn)}))}let Be=Bn(),te=Bn(),ae;function ne(y,M,C){It(y);const F=te.list();return F.length?F.forEach(re=>re(y,M,C)):console.error(y),Promise.reject(y)}function lt(){return ae&&l.value!==kt?Promise.resolve():new Promise((y,M)=>{Be.add([y,M])})}function It(y){return ae||(ae=!y,Wt(),Be.list().forEach(([M,C])=>y?C(y):M()),Be.reset()),y}function Je(y,M,C,F){const{scrollBehavior:re}=e;if(!vn||!re)return Promise.resolve();const d=!C&&Op(Lo(y.fullPath,0))||(F||!C)&&history.state&&history.state.scroll||null;return va().then(()=>re(y,M,d)).then(h=>h&&Cp(h)).catch(h=>ne(h,y,M))}const Oe=y=>i.go(y);let fn;const dn=new Set,Cr={currentRoute:l,listening:!0,addRoute:g,removeRoute:I,hasRoute:N,getRoutes:S,resolve:b,options:e,push:A,replace:B,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:te.add,isReady:lt,install(y){const M=this;y.component("RouterLink",gm),y.component("RouterView",fu),y.config.globalProperties.$router=M,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Pe(l)}),vn&&!fn&&l.value===kt&&(fn=!0,A(i.location).catch(re=>{}));const C={};for(const re in kt)Object.defineProperty(C,re,{get:()=>l.value[re],enumerable:!0});y.provide(Hi,M),y.provide(uu,hc(C)),y.provide(Us,l);const F=y.unmount;dn.add(y),y.unmount=function(){dn.delete(y),dn.size<1&&(c=kt,De&&De(),De=null,l.value=kt,fn=!1,ae=!1),F()}}};function ke(y){return y.reduce((M,C)=>M.then(()=>U(C)),Promise.resolve())}return Cr}function wm(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const o=t.matched[a];o&&(e.matched.find(c=>Pn(c,o))?r.push(o):n.push(o));const l=e.matched[a];l&&(t.matched.find(c=>Pn(c,l))||i.push(l))}return[n,r,i]}function Em(){return He(Hi)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Im=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],o=e[n++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},hu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,o=a?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=s>>2,f=(s&3)<<4|o>>4;let p=(o&15)<<2|c>>6,g=c&63;l||(g=64,a||(p=64)),r.push(n[u],n[f],n[p],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(du(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Im(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||o==null||c==null||f==null)throw new xm;const p=s<<2|o>>4;if(r.push(p),c!==64){const g=o<<4&240|c>>2;if(r.push(g),f!==64){const I=c<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class xm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const km=function(e){const t=du(e);return hu.encodeByteArray(t,!0)},pu=function(e){return km(e).replace(/\./g,"")},mu=function(e){try{return hu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am=()=>Sm().__FIREBASE_DEFAULTS__,Tm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Cm=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&mu(e[1]);return t&&JSON.parse(t)},ka=()=>{try{return Am()||Tm()||Cm()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Pm=e=>{var t,n;return(n=(t=ka())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},gu=()=>{var e;return(e=ka())===null||e===void 0?void 0:e.config},vu=e=>{var t;return(t=ka())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function Nm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Mm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Dm(){const e=Te();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Lm(){try{return typeof indexedDB=="object"}catch{return!1}}function Um(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm="FirebaseError";class Ht extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Fm,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,br.prototype.create)}}class br{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?$m(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new Ht(i,o,r)}}function $m(e,t){return e.replace(jm,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const jm=/\{\$([^}]+)}/g;function Bm(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function hi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(Xo(s)&&Xo(a)){if(!hi(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xo(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Hm(e,t){const n=new zm(e,t);return n.subscribe.bind(n)}class zm{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Wm(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=as),i.error===void 0&&(i.error=as),i.complete===void 0&&(i.complete=as);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wm(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function as(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e){return e&&e._delegate?e._delegate:e}class Rn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Om;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(qm(t))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=qt){return this.instances.has(t)}getOptions(t=qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Km(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=qt){return this.component?this.component.multipleInstances?t:qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Km(e){return e===qt?void 0:e}function qm(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Vm(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(oe||(oe={}));const Ym={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},Xm=oe.INFO,Jm={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},Qm=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Jm[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class bu{constructor(t){this.name=t,this._logLevel=Xm,this._logHandler=Qm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in oe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ym[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...t),this._logHandler(this,oe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...t),this._logHandler(this,oe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...t),this._logHandler(this,oe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...t),this._logHandler(this,oe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...t),this._logHandler(this,oe.ERROR,...t)}}const Zm=(e,t)=>t.some(n=>e instanceof n);let Jo,Qo;function eg(){return Jo||(Jo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tg(){return Qo||(Qo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yu=new WeakMap,Fs=new WeakMap,_u=new WeakMap,os=new WeakMap,Sa=new WeakMap;function ng(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Lt(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&yu.set(n,e)}).catch(()=>{}),Sa.set(t,e),t}function rg(e){if(Fs.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});Fs.set(e,t)}let $s={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Fs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||_u.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Lt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ig(e){$s=e($s)}function sg(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ls(this),t,...n);return _u.set(r,t.sort?t.sort():[t]),Lt(r)}:tg().includes(e)?function(...t){return e.apply(ls(this),t),Lt(yu.get(this))}:function(...t){return Lt(e.apply(ls(this),t))}}function ag(e){return typeof e=="function"?sg(e):(e instanceof IDBTransaction&&rg(e),Zm(e,eg())?new Proxy(e,$s):e)}function Lt(e){if(e instanceof IDBRequest)return ng(e);if(os.has(e))return os.get(e);const t=ag(e);return t!==e&&(os.set(e,t),Sa.set(t,e)),t}const ls=e=>Sa.get(e);function og(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=Lt(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Lt(a.result),l.oldVersion,l.newVersion,Lt(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),o.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),o}const lg=["get","getKey","getAll","getAllKeys","count"],cg=["put","add","delete","clear"],cs=new Map;function Zo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(cs.get(t))return cs.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=cg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lg.includes(n)))return;const s=async function(a,...o){const l=this.transaction(a,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(o.shift())),(await Promise.all([c[n](...o),i&&l.done]))[0]};return cs.set(t,s),s}ig(e=>({...e,get:(t,n,r)=>Zo(t,n)||e.get(t,n,r),has:(t,n)=>!!Zo(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fg(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const js="@firebase/app",el="0.9.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new bu("@firebase/app"),dg="@firebase/app-compat",hg="@firebase/analytics-compat",pg="@firebase/analytics",mg="@firebase/app-check-compat",gg="@firebase/app-check",vg="@firebase/auth",bg="@firebase/auth-compat",yg="@firebase/database",_g="@firebase/database-compat",wg="@firebase/functions",Eg="@firebase/functions-compat",Ig="@firebase/installations",xg="@firebase/installations-compat",kg="@firebase/messaging",Sg="@firebase/messaging-compat",Ag="@firebase/performance",Tg="@firebase/performance-compat",Cg="@firebase/remote-config",Pg="@firebase/remote-config-compat",Og="@firebase/storage",Rg="@firebase/storage-compat",Ng="@firebase/firestore",Mg="@firebase/firestore-compat",Dg="firebase",Lg="10.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="[DEFAULT]",Ug={[js]:"fire-core",[dg]:"fire-core-compat",[pg]:"fire-analytics",[hg]:"fire-analytics-compat",[gg]:"fire-app-check",[mg]:"fire-app-check-compat",[vg]:"fire-auth",[bg]:"fire-auth-compat",[yg]:"fire-rtdb",[_g]:"fire-rtdb-compat",[wg]:"fire-fn",[Eg]:"fire-fn-compat",[Ig]:"fire-iid",[xg]:"fire-iid-compat",[kg]:"fire-fcm",[Sg]:"fire-fcm-compat",[Ag]:"fire-perf",[Tg]:"fire-perf-compat",[Cg]:"fire-rc",[Pg]:"fire-rc-compat",[Og]:"fire-gcs",[Rg]:"fire-gcs-compat",[Ng]:"fire-fst",[Mg]:"fire-fst-compat","fire-js":"fire-js",[Dg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new Map,Hs=new Map;function Fg(e,t){try{e.container.addComponent(t)}catch(n){on.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function lr(e){const t=e.name;if(Hs.has(t))return on.debug(`There were multiple attempts to register component ${t}.`),!1;Hs.set(t,e);for(const n of pi.values())Fg(n,e);return!0}function wu(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ut=new br("app","Firebase",$g);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=Lg;function Eu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Bs,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ut.create("bad-app-name",{appName:String(i)});if(n||(n=gu()),!n)throw Ut.create("no-options");const s=pi.get(i);if(s){if(hi(n,s.options)&&hi(r,s.config))return s;throw Ut.create("duplicate-app",{appName:i})}const a=new Gm(i);for(const l of Hs.values())a.addComponent(l);const o=new jg(n,r,a);return pi.set(i,o),o}function Bg(e=Bs){const t=pi.get(e);if(!t&&e===Bs&&gu())return Eu();if(!t)throw Ut.create("no-app",{appName:e});return t}function In(e,t,n){var r;let i=(r=Ug[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${t}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),on.warn(o.join(" "));return}lr(new Rn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="firebase-heartbeat-database",zg=1,cr="firebase-heartbeat-store";let us=null;function Iu(){return us||(us=og(Hg,zg,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(cr)}}}).catch(e=>{throw Ut.create("idb-open",{originalErrorMessage:e.message})})),us}async function Wg(e){try{return await(await Iu()).transaction(cr).objectStore(cr).get(xu(e))}catch(t){if(t instanceof Ht)on.warn(t.message);else{const n=Ut.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});on.warn(n.message)}}}async function tl(e,t){try{const r=(await Iu()).transaction(cr,"readwrite");await r.objectStore(cr).put(t,xu(e)),await r.done}catch(n){if(n instanceof Ht)on.warn(n.message);else{const r=Ut.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});on.warn(r.message)}}}function xu(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=1024,Kg=30*24*60*60*1e3;class qg{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Yg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=nl();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Kg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=nl(),{heartbeatsToSend:n,unsentEntries:r}=Gg(this._heartbeatsCache.heartbeats),i=pu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function nl(){return new Date().toISOString().substring(0,10)}function Gg(e,t=Vg){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),rl(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rl(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Yg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lm()?Um().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Wg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tl(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tl(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function rl(e){return pu(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(e){lr(new Rn("platform-logger",t=>new ug(t),"PRIVATE")),lr(new Rn("heartbeat",t=>new qg(t),"PRIVATE")),In(js,el,e),In(js,el,"esm2017"),In("fire-js","")}Xg("");var Jg="firebase",Qg="10.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(Jg,Qg,"app");const Zg={apiKey:"AIzaSyD66i1ri0md2o2Ow4RVApaWIjSQdM79RRY",authDomain:"pomofocus-vue3.firebaseapp.com",projectId:"pomofocus-vue3",storageBucket:"pomofocus-vue3.appspot.com",messagingSenderId:"1089476388969",appId:"1:1089476388969:web:c4939d029dadf83304daf8",measurementId:"G-9CL6V1FX1Y"};Eu(Zg);function Aa(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function ku(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ev=ku,Su=new br("auth","Firebase",ku());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new bu("@firebase/auth");function tv(e,...t){mi.logLevel<=oe.WARN&&mi.warn(`Auth (${_r}): ${e}`,...t)}function ti(e,...t){mi.logLevel<=oe.ERROR&&mi.error(`Auth (${_r}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e,...t){throw Ta(e,...t)}function it(e,...t){return Ta(e,...t)}function Au(e,t,n){const r=Object.assign(Object.assign({},ev()),{[t]:n});return new br("auth","Firebase",r).create(t,{appName:e.name})}function nv(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&ot(e,"argument-error"),Au(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ta(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Su.create(e,...t)}function K(e,t,...n){if(!e)throw Ta(t,...n)}function dt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ti(t),new Error(t)}function gt(e,t){e||dt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function rv(){return il()==="http:"||il()==="https:"}function il(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rv()||Nm()||"connection"in navigator)?navigator.onLine:!0}function sv(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t,n){this.shortDelay=t,this.longDelay=n,gt(n>t,"Short delay should be less than long delay!"),this.isMobile=Rm()||Mm()}get(){return iv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(e,t){gt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=new wr(3e4,6e4);function Cu(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Er(e,t,n,r,i={}){return Pu(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const o=yr(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Tu.fetch()(Ou(e,e.config.apiHost,n,o),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function Pu(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},av),t);try{const i=new cv(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Fr(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[l,c]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fr(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Fr(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw Fr(e,"user-disabled",a);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Au(e,u,c);ot(e,u)}}catch(i){if(i instanceof Ht)throw i;ot(e,"network-request-failed",{message:String(i)})}}async function lv(e,t,n,r,i={}){const s=await Er(e,t,n,r,i);return"mfaPendingCredential"in s&&ot(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Ou(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Ca(e.config,i):`${e.config.apiScheme}://${i}`}class cv{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(it(this.auth,"network-request-failed")),ov.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=it(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uv(e,t){return Er(e,"POST","/v1/accounts:delete",t)}async function fv(e,t){return Er(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function dv(e,t=!1){const n=zt(e),r=await n.getIdToken(t),i=Pa(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Xn(fs(i.auth_time)),issuedAtTime:Xn(fs(i.iat)),expirationTime:Xn(fs(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fs(e){return Number(e)*1e3}function Pa(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return ti("JWT malformed, contained fewer than 3 sections"),null;try{const i=mu(n);return i?JSON.parse(i):(ti("Failed to decode base64 JWT payload"),null)}catch(i){return ti("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hv(e){const t=Pa(e);return K(t,"internal-error"),K(typeof t.exp<"u","internal-error"),K(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ht&&pv(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function pv({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xn(this.lastLoginAt),this.creationTime=Xn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ur(e,fv(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?bv(s.providerUserInfo):[],o=vv(e.providerData,a),l=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ru(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function gv(e){const t=zt(e);await gi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function vv(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function bv(e){return e.map(t=>{var{providerId:n}=t,r=Aa(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yv(e,t){const n=await Pu(e,{},async()=>{const r=yr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=Ou(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Tu.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){K(t.idToken,"internal-error"),K(typeof t.idToken<"u","internal-error"),K(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):hv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return K(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await yv(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new fr;return r&&(K(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new fr,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(e,t){K(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class sn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Aa(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ru(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await ur(this,this.stsTokenManager.getToken(this.auth,t));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return dv(this,t)}reload(){return gv(this)}_assign(t){this!==t&&(K(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new sn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await gi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await ur(this,uv(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,a,o,l,c,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(a=n.photoURL)!==null&&a!==void 0?a:void 0,S=(o=n.tenantId)!==null&&o!==void 0?o:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:A,isAnonymous:B,providerData:J,stsTokenManager:Z}=n;K(O&&Z,t,"internal-error");const G=fr.fromJSON(this.name,Z);K(typeof O=="string",t,"internal-error"),St(f,t.name),St(p,t.name),K(typeof A=="boolean",t,"internal-error"),K(typeof B=="boolean",t,"internal-error"),St(g,t.name),St(I,t.name),St(S,t.name),St(N,t.name),St(b,t.name),St(_,t.name);const U=new sn({uid:O,auth:t,email:p,emailVerified:A,displayName:f,isAnonymous:B,photoURL:I,phoneNumber:g,tenantId:S,stsTokenManager:G,createdAt:b,lastLoginAt:_});return J&&Array.isArray(J)&&(U.providerData=J.map(z=>Object.assign({},z))),N&&(U._redirectEventId=N),U}static async _fromIdTokenResponse(t,n,r=!1){const i=new fr;i.updateFromServerResponse(n);const s=new sn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await gi(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl=new Map;function ht(e){gt(e instanceof Function,"Expected a class definition");let t=sl.get(e);return t?(gt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,sl.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Nu.type="NONE";const al=Nu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(e,t,n){return`firebase:${e}:${t}:${n}`}class xn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ni(this.userKey,i.apiKey,s),this.fullPersistenceKey=ni("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?sn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new xn(ht(al),t,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||ht(al);const a=ni(r,t.config.apiKey,t.name);let o=null;for(const c of n)try{const u=await c._get(a);if(u){const f=sn._fromJSON(t,u);c!==s&&(o=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new xn(s,t,r):(s=l[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(a)}catch{}})),new xn(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Lu(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Mu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Fu(t))return"Blackberry";if($u(t))return"Webos";if(Oa(t))return"Safari";if((t.includes("chrome/")||Du(t))&&!t.includes("edge/"))return"Chrome";if(Uu(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mu(e=Te()){return/firefox\//i.test(e)}function Oa(e=Te()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Du(e=Te()){return/crios\//i.test(e)}function Lu(e=Te()){return/iemobile/i.test(e)}function Uu(e=Te()){return/android/i.test(e)}function Fu(e=Te()){return/blackberry/i.test(e)}function $u(e=Te()){return/webos/i.test(e)}function zi(e=Te()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function _v(e=Te()){var t;return zi(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function wv(){return Dm()&&document.documentMode===10}function ju(e=Te()){return zi(e)||Uu(e)||$u(e)||Fu(e)||/windows phone/i.test(e)||Lu(e)}function Ev(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(e,t=[]){let n;switch(e){case"Browser":n=ol(Te());break;case"Worker":n=`${ol(Te())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${_r}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,o)=>{try{const l=t(s);a(l)}catch(l){o(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xv(e,t={}){return Er(e,"GET","/v2/passwordPolicy",Cu(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=6;class Sv{constructor(t){var n,r,i,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:kv,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,a,o;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(o=l.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ll(this),this.idTokenSubscription=new ll(this),this.beforeStateQueue=new Iv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Su,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ht(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===o)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await gi(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=sv()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?zt(t):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&K(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await xv(this),n=new Sv(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new br("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ht(t)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await xn.create(this,[ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{a=!0,l()}}else{const l=t.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Bu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&tv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Wi(e){return zt(e)}class ll{constructor(t){this.auth=t,this.observer=null,this.addObserver=Hm(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Cv(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=it("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Tv().appendChild(r)})}function Pv(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(e,t){const n=wu(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(hi(s,t??{}))return i;ot(i,"already-initialized")}return n.initialize({options:t})}function Rv(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ht);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Nv(e,t,n){const r=Wi(e);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Hu(t),{host:a,port:o}=Mv(t),l=o===null?"":`:${o}`;r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Dv()}function Hu(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Mv(e){const t=Hu(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:cl(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:cl(a)}}}function cl(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Dv(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return dt("not implemented")}_getIdTokenResponse(t){return dt("not implemented")}_linkToIdToken(t,n){return dt("not implemented")}_getReauthenticationResolver(t){return dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(e,t){return lv(e,"POST","/v1/accounts:signInWithIdp",Cu(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv="http://localhost";class ln extends zu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new ln(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Aa(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new ln(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return kn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,kn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,kn(t,n)}buildRequest(){const t={requestUri:Lv,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=yr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Ra{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Ir{constructor(){super("facebook.com")}static credential(t){return ln._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ot.credentialFromTaggedObject(t)}static credentialFromError(t){return Ot.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ot.credential(t.oauthAccessToken)}catch{return null}}}Ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ot.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends Ir{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return ln._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return nt.credentialFromTaggedObject(t)}static credentialFromError(t){return nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return nt.credential(n,r)}catch{return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com";nt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Ir{constructor(){super("github.com")}static credential(t){return ln._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rt.credential(t.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Ir{constructor(){super("twitter.com")}static credential(t,n){return ln._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Nt.credentialFromTaggedObject(t)}static credentialFromError(t){return Nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await sn._fromIdTokenResponse(t,r,i),a=ul(r);return new Nn({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=ul(r);return new Nn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function ul(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Ht{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vi.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new vi(t,n,r,i)}}function Wu(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vi._fromErrorAndOperation(e,s,t,r):s})}async function Uv(e,t,n=!1){const r=await ur(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Nn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fv(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ur(e,Wu(r,i,t,e),n);K(s.idToken,r,"internal-error");const a=Pa(s.idToken);K(a,r,"internal-error");const{sub:o}=a;return K(e.uid===o,r,"user-mismatch"),Nn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ot(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $v(e,t,n=!1){const r="signIn",i=await Wu(e,r,t),s=await Nn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function jv(e,t,n,r){return zt(e).onIdTokenChanged(t,n,r)}function Bv(e,t,n){return zt(e).beforeAuthStateChanged(t,n)}function Vu(e,t,n,r){return zt(e).onAuthStateChanged(t,n,r)}function Hv(e){return zt(e).signOut()}const bi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bi,"1"),this.storage.removeItem(bi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(){const e=Te();return Oa(e)||zi(e)}const Wv=1e3,Vv=10;class qu extends Ku{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=zv()&&Ev(),this.fallbackToPolling=ju(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);wv()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Vv):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Wv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}qu.type="LOCAL";const Kv=qu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu extends Ku{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Gu.type="SESSION";const Yu=Gu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Vi(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async c=>c(n.origin,s)),l=await qv(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,l)=>{const c=Na("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(p.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return window}function Yv(e){st().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function Xv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jv(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Qv(){return Xu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="firebaseLocalStorageDb",Zv=1,yi="firebaseLocalStorage",Qu="fbase_key";class xr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ki(e,t){return e.transaction([yi],t?"readwrite":"readonly").objectStore(yi)}function eb(){const e=indexedDB.deleteDatabase(Ju);return new xr(e).toPromise()}function Ws(){const e=indexedDB.open(Ju,Zv);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(yi,{keyPath:Qu})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(yi)?t(r):(r.close(),await eb(),t(await Ws()))})})}async function fl(e,t,n){const r=Ki(e,!0).put({[Qu]:t,value:n});return new xr(r).toPromise()}async function tb(e,t){const n=Ki(e,!1).get(t),r=await new xr(n).toPromise();return r===void 0?null:r.value}function dl(e,t){const n=Ki(e,!0).delete(t);return new xr(n).toPromise()}const nb=800,rb=3;class Zu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ws(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>rb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vi._getInstance(Qv()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Xv(),!this.activeServiceWorker)return;this.sender=new Gv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Jv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ws();return await fl(t,bi,"1"),await dl(t,bi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fl(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>tb(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>dl(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Ki(i,!1).getAll();return new xr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zu.type="LOCAL";const ib=Zu;new wr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(e,t){return t?ht(t):(K(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma extends zu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return kn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return kn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return kn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function sb(e){return $v(e.auth,new Ma(e),e.bypassAuthState)}function ab(e){const{auth:t,user:n}=e;return K(n,t,"internal-error"),Fv(n,new Ma(e),e.bypassAuthState)}async function ob(e){const{auth:t,user:n}=e;return K(n,t,"internal-error"),Uv(n,new Ma(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return sb;case"linkViaPopup":case"linkViaRedirect":return ob;case"reauthViaPopup":case"reauthViaRedirect":return ab;default:ot(this.auth,"internal-error")}}resolve(t){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=new wr(2e3,1e4);async function nf(e,t,n){const r=Wi(e);nv(e,t,Ra);const i=ef(r,n);return new Jt(r,"signInViaPopup",t,i).executeNotNull()}class Jt extends tf{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Jt.currentPopupAction&&Jt.currentPopupAction.cancel(),Jt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return K(t,this.auth,"internal-error"),t}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const t=Na();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,lb.get())};t()}}Jt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb="pendingRedirect",ri=new Map;class ub extends tf{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=ri.get(this.auth._key());if(!t){try{const r=await fb(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}ri.set(this.auth._key(),t)}return this.bypassAuthState||ri.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fb(e,t){const n=pb(t),r=hb(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function db(e,t){ri.set(e._key(),t)}function hb(e){return ht(e._redirectPersistence)}function pb(e){return ni(cb,e.config.apiKey,e.name)}async function mb(e,t,n=!1){const r=Wi(e),i=ef(r,t),a=await new ub(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=10*60*1e3;class vb{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!bb(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!rf(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(it(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=gb&&this.cachedEventUids.clear(),this.cachedEventUids.has(hl(t))}saveEventToCache(t){this.cachedEventUids.add(hl(t)),this.lastProcessedEventTime=Date.now()}}function hl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function rf({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function bb(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rf(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yb(e,t={}){return Er(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wb=/^https?/;async function Eb(e){if(e.config.emulator)return;const{authorizedDomains:t}=await yb(e);for(const n of t)try{if(Ib(n))return}catch{}ot(e,"unauthorized-domain")}function Ib(e){const t=zs(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!wb.test(n))return!1;if(_b.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=new wr(3e4,6e4);function pl(){const e=st().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function kb(e){return new Promise((t,n)=>{var r,i,s;function a(){pl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{pl(),n(it(e,"network-request-failed"))},timeout:xb.get()})}if(!((i=(r=st().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=st().gapi)===null||s===void 0)&&s.load)a();else{const o=Pv("iframefcb");return st()[o]=()=>{gapi.load?a():n(it(e,"network-request-failed"))},Cv(`https://apis.google.com/js/api.js?onload=${o}`).catch(l=>n(l))}}).catch(t=>{throw ii=null,t})}let ii=null;function Sb(e){return ii=ii||kb(e),ii}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab=new wr(5e3,15e3),Tb="__/auth/iframe",Cb="emulator/auth/iframe",Pb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ob=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rb(e){const t=e.config;K(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ca(t,Cb):`https://${e.config.authDomain}/${Tb}`,r={apiKey:t.apiKey,appName:e.name,v:_r},i=Ob.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${yr(r).slice(1)}`}async function Nb(e){const t=await Sb(e),n=st().gapi;return K(n,e,"internal-error"),t.open({where:document.body,url:Rb(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Pb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=it(e,"network-request-failed"),o=st().setTimeout(()=>{s(a)},Ab.get());function l(){st().clearTimeout(o),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Db=500,Lb=600,Ub="_blank",Fb="http://localhost";class ml{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function $b(e,t,n,r=Db,i=Lb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l=Object.assign(Object.assign({},Mb),{width:r.toString(),height:i.toString(),top:s,left:a}),c=Te().toLowerCase();n&&(o=Du(c)?Ub:n),Mu(c)&&(t=t||Fb,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[g,I])=>`${p}${g}=${I},`,"");if(_v(c)&&o!=="_self")return jb(t||"",o),new ml(null);const f=window.open(t||"",o,u);K(f,e,"popup-blocked");try{f.focus()}catch{}return new ml(f)}function jb(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb="__/auth/handler",Hb="emulator/auth/handler",zb=encodeURIComponent("fac");async function gl(e,t,n,r,i,s){K(e.config.authDomain,e,"auth-domain-config-required"),K(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:_r,eventId:i};if(t instanceof Ra){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",Bm(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries(s||{}))a[u]=f}if(t instanceof Ir){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(a.scopes=u.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const u of Object.keys(o))o[u]===void 0&&delete o[u];const l=await e._getAppCheckToken(),c=l?`#${zb}=${encodeURIComponent(l)}`:"";return`${Wb(e)}?${yr(o).slice(1)}${c}`}function Wb({config:e}){return e.emulator?Ca(e,Hb):`https://${e.authDomain}/${Bb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="webStorageSupport";class Vb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yu,this._completeRedirectFn=mb,this._overrideRedirectResult=db}async _openPopup(t,n,r,i){var s;gt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await gl(t,n,r,zs(),i);return $b(t,a,Na())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await gl(t,n,r,zs(),i);return Yv(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(gt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Nb(t),r=new vb(t);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ds,{type:ds},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ds];a!==void 0&&n(!!a),ot(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Eb(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return ju()||Oa()||zi()}}const Kb=Vb;var vl="@firebase/auth",bl="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Yb(e){lr(new Rn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;K(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bu(e)},c=new Av(r,i,s,l);return Rv(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),lr(new Rn("auth-internal",t=>{const n=Wi(t.getProvider("auth").getImmediate());return(r=>new qb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(vl,bl,Gb(e)),In(vl,bl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=5*60,Jb=vu("authIdTokenMaxAge")||Xb;let yl=null;const Qb=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Jb)return;const i=n==null?void 0:n.token;yl!==i&&(yl=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _i(e=Bg()){const t=wu(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Ov(e,{popupRedirectResolver:Kb,persistence:[ib,Kv,Yu]}),r=vu("authTokenSyncURL");if(r){const s=Qb(r);Bv(n,s,()=>s(n.currentUser)),jv(n,a=>s(a))}const i=Pm("auth");return i&&Nv(n,`http://${i}`),n}Yb("Browser");const hs=_i(),Zb=new nt,sf=Qc("user",()=>{const e=ce(!1),t=ce(""),n=ce(""),r=ce("");function i(){Vu(hs,o=>{if(o){e.value=!0;return}e.value=!1})}function s(){Hv(hs).then(o=>{e.value=!1}).catch(o=>{console.log(o)})}function a(){nf(hs,Zb).then(o=>{e.value=!0}).catch(o=>{console.log(o)})}return{checkIsLogin:i,signOutWithGoogle:s,signInWithGoogle:a,userName:t,userEmail:n,isLogin:e,userPhotoUrl:r}}),e0=e=>(Hd("data-v-dca4cfff"),e=e(),zd(),e),t0={class:"flex justify-between h-20 w-[97%] mb-[30px]"},n0={class:"leading-loose contrast-20 w-[100px] text-center"},r0={class:"animate-fadeIn flex items-center gap-2 max-md:hidden"},i0={class:"flex"},s0=e0(()=>H("div",{class:"menu-btn__burger w-[45px] h-[6px] bg-primary rounded-[2px] shadow-burger transition duration-500 ease-in-out"},null,-1)),a0=[s0],o0=_t({__name:"NavHeader",setup(e){const t=sf(),{isLogin:n}=ji(t),r=ce(!1),i=ce([{id:"item01",name:"analysis"},{id:"item02",name:"setting"},{id:"item03",name:"login"}]),s=()=>{r.value=!r.value};return Rc(()=>{t.checkIsLogin()}),(a,o)=>{const l=Mc("RouterLink");return Se(),$e("header",t0,[H("h1",n0,[_e(l,{to:"/",class:"animate-letterMove whitespace-nowrap"},{default:Jr(()=>[nn("Pomofocus")]),_:1})]),H("nav",r0,[H("ul",i0,[(Se(!0),$e(We,null,Dc(i.value,c=>(Se(),$e("li",{key:c.id,class:"leading-loose ml-5 min-h-full transition-transform transition-shadow duration-300 hover:translate-y-[2px] active:translate-y-[5px]"},[c.name.toLowerCase()==="login"?(Se(),Ps(l,{key:0,to:"/login",class:"text-base max-w-prose nav-item"},{default:Jr(()=>[nn(er(c.name),1)]),_:2},1024)):Pe(n)&&c.name.toLowerCase()!=="login"?(Se(),Ps(l,{key:1,to:`/${c.name.toLowerCase()}`,class:"text-base max-w-prose nav-item"},{default:Jr(()=>[nn(er(c.name),1)]),_:2},1032,["to"])):yo("",!0)]))),128))]),Pe(n)?(Se(),$e("button",{key:0,onClick:o[0]||(o[0]=(...c)=>Pe(t).signOutWithGoogle&&Pe(t).signOutWithGoogle(...c)),class:"leading-[1.3] ml-5 text-base max-w-prose nav-item"},"Sign Out")):yo("",!0)]),H("div",{class:X([{active:r.value},"md:hidden menu-btn relative flex justify-center items-center w-[80px] h-[80px] cursor-pointer transition duration-500 ease-in-out"]),onClick:s},a0,2)])}}});const kr=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},l0=kr(o0,[["__scopeId","data-v-dca4cfff"]]),c0={class:"xl:max-w-1200 lg:max-w-1000 md:max-w-600 w-[90vw] mx-auto my-0 h-screen"},u0=_t({__name:"App",setup(e){return(t,n)=>(Se(),$e("main",c0,[_e(l0),_e(Pe(fu))]))}}),f0={class:"box relative overflow-hidden h-[350px] bg-custom-gray rounded-[8px] mt-10 flex justify-center items-center flex-wrap"},d0={class:"form absolute top-[4px] right-[4px] bottom-[4px] left-[4px] z-[2] bg-gray-800 flex-col flex overflow-hidden"},h0={class:"text-9xl w-full text-center mt-[40px]"},p0={class:"relative block w-full h-full"},m0=_t({__name:"NormalTimer",props:{isActive:{type:Boolean},mode:{},remainingTime:{}},emits:["handleTimeCountDown"],setup(e,{emit:t}){const n=()=>{t("handleTimeCountDown",e.isActive,e.mode)};return(r,i)=>(Se(),$e("div",f0,[H("div",d0,[H("p",h0,er(r.remainingTime),1),H("button",{onClick:n,class:"btn w-[100px] relative inline-block text-light text-base font-medium border-none py-[10xp] px-[25px] m-auto leading-10 shadow-activeButton transition-all duration-300 ease-in hover:bg-transparent"},[H("span",p0,er(r.isActive?"Pause":"Start"),1)])])]))}});const g0=kr(m0,[["__scopeId","data-v-ab9271d4"]]);var af=(e=>(e.pomodoro="pomodoro",e.longbreak="longbreak",e.shortbreak="shortbreak",e))(af||{});const of=Qc("timer",()=>{const e=ce(af.pomodoro),t=ce(!1);function n(){t.value=!t.value}function r(){t.value=!1}function i(){t.value=!0}return{mode:e,isActive:t,changeActiveStatus:n,onStop:r,onStart:i}});function $r(e){if(e<0)return"00:00";const t=Math.floor(e/(1e3*60*60)),n=Math.floor(e%(1e3*60*60)/(1e3*60));if(t>0||n>=60)return"59:59";const r=Math.floor(e%(1e3*60)/1e3);return`${n<10?"0"+n:n}:${r<10?"0"+r:r}`}function _l(){const e=of(),{isActive:t,...n}=ji(e),r=ce(25*60*1e3),i=ce("25:00");let s=null;const a=ye(()=>r.value);function o(){s&&(clearInterval(s),s=null)}function l(c){switch(Td(c)){case"Pomodoro":r.value=25*60*1e3,i.value=$r(r.value);break;case"Long Break":r.value=15*60*1e3,i.value=$r(r.value);break;case"Short Break":r.value=5*60*1e3,i.value=$r(r.value);break;default:console.log("未定義的狀態！");break}}return tn(t,()=>{t.value?s=setInterval(()=>{r.value=a.value-1e3,i.value=r.value<=0?"timeup":$r(r.value)},1e3):(r.value=a.value,o())}),Di(()=>{o()}),{remainingTime:i,switchMode:l}}const v0={class:"flex w-full h-full"},b0={class:"w-[600px] h-[350px] bg-black m-auto rounded-[8px]"},y0={class:"w-auto flex space-x-3 text-center text-xl cursor-pointer rounded-default justify-center items-center gap-6 menu"},_0=["onClick"],w0=_t({__name:"CountdownTimer",setup(e){const t=of(),{isActive:n,mode:r,...i}=ji(t),{switchMode:s,remainingTime:a}=_l(),o=ce("Pomodoro"),l=ce([{id:1,title:"Pomodoro",time:"25:00"},{id:2,title:"Short Break",time:"05:00"},{id:3,title:"Long Break",time:"15:00"}]),c=f=>{o.value=f,t.onStop(),s(f)},u=()=>{_l(),t.changeActiveStatus()};return(f,p)=>(Se(),$e("section",v0,[H("article",b0,[H("ul",y0,[(Se(!0),$e(We,null,Dc(l.value,g=>(Se(),$e("li",{onClick:I=>c(g.title),class:X([{"tab-active":o.value===g.title},"block item h-auto hover:text-cyan-500 border-transparent border-b-2 hover:border-b-cyan-500 hover:transition duration-500"]),key:g.id},er(g.title),11,_0))),128))]),_e(g0,{isActive:Pe(n),mode:Pe(r),remainingTime:Pe(a),onHandleTimeCountDown:u,class:"overflow-hidden"},null,8,["isActive","mode","remainingTime"])])]))}});const E0=kr(w0,[["__scopeId","data-v-28579b72"]]),I0={class:"w-full"},x0=_t({__name:"HomeView",setup(e){return(t,n)=>(Se(),$e("main",I0,[_e(E0)]))}}),k0={class:"flex justify-center items-center"},S0={class:"form-box login absolute top-0 w-[50%] h-[100%] flex flex-col justify-center left-0 pt-0 pr-[60px] pb-0 pl-[40px] duration-700"},A0={class:X(["info-text","login","absolute","top-0","w-[50%]","h-full","right-0","flex","flex-col","justify-center","text-right","pt-0","pr-[40px]","pb-[60px]","pl-[150px]"])},T0=_t({__name:"LoginPage",setup(e){const t=Em(),n=_i(),r=new nt,i=sf(),{isLogin:s}=ji(i),a=ce(!1),o=ce(!1),l=ce(!1),c=ce(!1),u=ce(!1),f=ce(""),p=ce(""),g=ce(""),I=ce(""),S=()=>{a.value=!0},N=U=>{const z=U.target;a.value=!!z.value},b=()=>{o.value=!0},_=U=>{const z=U.target;o.value=!!z.value},O=()=>{l.value=!0},A=U=>{const z=U.target;l.value=!!z.value},B=()=>{c.value=!1,u.value=!0},J=()=>{u.value=!1},Z=()=>{nf(n,r).then(U=>{s.value=!0,t.push("/")}).catch(U=>{console.log(U)})},G=()=>new Promise(U=>{const z=f.value||p.value||g.value||I.value;U(z)});return hm(async(U,z,me)=>{if(_i().currentUser){me();return}if(await G()&&!window.confirm("Do you really want to leave? You have unsaved changes!")){me(!1);return}me()}),(U,z)=>{const me=Mc("font-awesome-icon");return Se(),$e("main",k0,[H("div",{class:X([c.value?"active translate-x-0 opacity-100 filter blur-0":"","wrapper relative w-[750px] h-[450px] bg-transparent border-2 border-primary rounded shadow-custom-cyan overflow-hidden"])},[H("span",{class:X([u.value?"!rotate-[0deg] !skew-y-[0deg] delay-500":"!delay-1600","duration-1000 ease-linear bg-animate absolute top-[-4px] right-0 w-[850px] h-[600px] bg-gradient-to-r from-[#081b29] to-[#0ef] rotate-[10deg] skew-y-[40deg] origin-bottom-right border-b-[3px] border-primary"])},null,2),H("span",{class:X([u.value?"!-rotate-[11deg] !-skew-y-[41deg] delay-1000":"!delay-500","duration-1000 ease-linear bg-animate2 absolute top-full left-[250px] w-[850px] h-[700px] bg-black rotate-[11deg] skew-y-[41deg] origin-bottom-left border-t-[3px] border-primary"])},null,2),H("div",S0,[H("h2",{class:X(["text-3xl text-white text-center ease-linear duration-700",u.value?"animation ease-linear duration-700 -translate-x-[120%] opacity-0 filter blur-[10px] delay-0":"!delay-2100"])},"Login",2),H("form",{onSubmit:z[2]||(z[2]=Oo(()=>{},["prevent"]))},[H("div",{class:X([u.value?"animation ease-linear duration-700 -translate-x-[120%] delay-100 opacity-0 filter blur-[10px]":"!delay-2200","ease-linear duration-700 input-box relative w-full h-[50px] my-[25px] mx-0"])},[Lr(H("input",{type:"email",required:"",class:X(["w-full","h-full","bg-transparent","outline-none","border-b-2","border-b-white","duration-500","focus:border-b-primary","text-white","p-[10px]"]),onFocus:S,onBlur:N,"onUpdate:modelValue":z[0]||(z[0]=ge=>f.value=ge)},null,544),[[Ur,f.value]]),H("label",{class:X(["absolute top-[50%] left-0 text-base text-white transform -translate-y-1/2 pointer-events-none duration-500",a.value?"!-top-[5px] !text-primary":""])}," Email ",2)],2),H("div",{class:X([u.value?"animation ease-linear duration-700 -translate-x-[120%] delay-200 opacity-0 filter blur-[10px]":"!delay-2300","ease-linear duration-700 input-box relative w-full h-[50px] my-[25px] mx-0"])},[Lr(H("input",{type:"password",required:"",class:X(["w-full","h-full","bg-transparent","outline-none","border-b-2","border-b-white","duration-500","focus:border-b-primary","text-white","p-[10px]"]),onFocus:b,onBlur:_,"onUpdate:modelValue":z[1]||(z[1]=ge=>p.value=ge)},null,544),[[Ur,p.value]]),H("label",{class:X(["absolute top-[50%] left-0 text-base text-white transform -translate-y-1/2 pointer-events-none duration-500",o.value?"!-top-[5px] !text-primary":""])}," Password ",2)],2),H("button",{type:"submit",class:X([u.value?"animation ease-linear duration-700 -translate-x-[120%] delay-300 opacity-0 filter blur-[10px]":"!delay-2400","ease-linear duration-700 btn relative w-full h-[45px] border-2 border-white outline-none rounded-[40px] cursor-pointer text-base text-white font-semibold shadow-neon after:content after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-primary after:shadow-neon after:opacity-0 hover:after:!opacity-100"])}," Login ",2),H("hr",{class:X([u.value?"animation ease-linear duration-700 -translate-x-[120%] delay-300 opacity-0 filter blur-[10px]":"!delay-2400","ease-linear duration-700 border-dashed mt-5 filter-[10px]"])},null,2),H("button",{onClick:Z,class:X([u.value?"animation ease-linear duration-700 -translate-x-[120%] delay-300 opacity-0 filter blur-[10px]":"!delay-2400","ease-linear duration-700 mt-5 border-2 border-white outline-none rounded-[40px] w-full h-[40px] hover:shadow-neon"])},[_e(me,{icon:["fab","google"],class:"mr-4"}),nn(" Login With Google ")],2),H("div",{class:X([u.value?"animation ease-linear duration-700 -translate-x-[120%] delay-550 opacity-0 filter blur-[10px]":"!delay-2500","ease-linear duration-700 logreg-link text-[14.5px] text-white text-center mt-5"])},[H("p",null,[nn(" Don't have an account? "),H("button",{type:"button",onClick:B,class:X(["ml-3","register-link","text-primary","decoration-[none]","font-semibold","hover:underline","cursor-pointer"])}," Sign Up ")])],2)],32)]),H("div",A0,[H("h2",{class:X([u.value?"animation ease-linear duration-700 translate-x-[120%] delay-550 opacity-0 filter blur-[10px]":"!delay-2000","duration-700","ease-linear","text-[36px]","text-white","leading-snug","uppercase"])}," Welcome Back! ",2),H("p",{class:X([u.value?"animation ease-linear duration-700 translate-x-[120%] delay-550 opacity-0 filter blur-[10px]":"!delay-2100","duration-700","ease-linear","text-[16px]","text-white"])}," You can login using your email or a third-party service. ",2)]),H("div",{class:X([u.value?"!translate-x-0":"",u.value?"!opacity-100":"",u.value?"!filter":"",u.value?"!blur-0":"",u.value?"!pointer-events-auto":"","form-box","register","absolute","top-0","w-[50%]","h-[100%]","flex","flex-col","justify-center","right-0","pt-0","pr-[40px]","pb-0","pl-[60px]","translate-x-[120%]","opacity-0","filter","blur-[10px]","duration-700","pointer-events-none"])},[H("h2",{class:X([u.value?"!translate-x-0":"",u.value?"!opacity-100":"",u.value?"!filter":"",u.value?"!blur-0":"",u.value?"delay-1700":"!delay-0","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","text-3xl","text-white","text-center"])}," Sign Up ",2),H("form",{onSubmit:z[5]||(z[5]=Oo(()=>{},["prevent"]))},[H("div",{class:X([u.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-1900":"!delay-200","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","input-box","relative","w-full","h-[50px]","my-[25px]","mx-0"])},[Lr(H("input",{type:"email",required:"",class:X(["w-full","h-full","bg-transparent","outline-none","border-b-2","border-b-white","duration-500","focus:border-b-primary","text-white","p-[10px]"]),onFocus:O,onBlur:A,"onUpdate:modelValue":z[3]||(z[3]=ge=>g.value=ge)},null,544),[[Ur,g.value]]),H("label",{class:X(["absolute","top-[50%]","left-0","text-base","text-white","transform","-translate-y-1/2","pointer-events-none","duration-500",l.value?"!-top-[5px] !text-primary":""])}," Email ",2)],2),H("div",{class:X([u.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-2000":"!delay-300","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","input-box","relative","w-full","h-[50px]","my-[25px]","mx-0"])},[Lr(H("input",{type:"password",required:"",class:X(["w-full","h-full","bg-transparent","outline-none","border-b-2","border-b-white","duration-500","focus:border-b-primary","text-white","p-[10px]"]),onFocus:b,onBlur:_,"onUpdate:modelValue":z[4]||(z[4]=ge=>I.value=ge)},null,544),[[Ur,I.value]]),H("label",{class:X(["absolute","top-[50%]","left-0","text-base","text-white","transform","-translate-y-1/2","pointer-events-none","duration-500",o.value?"!-top-[5px] !text-primary":""])}," Password ",2)],2),H("button",{type:"submit",class:X([u.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-2100":"!delay-400","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","btn","relative","w-full","h-[45px]","border-2","border-white","outline-none","rounded-[40px]","cursor-pointer","text-base","text-white","font-semibold","shadow-neon","after:content","after:top-0","after:left-0","after:right-0","after:bottom-0","after:bg-primary","after:shadow-neon","after:opacity-0","hover:after:!opacity-100"])}," Sign Up ",2),H("div",{class:X([u.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-2200":"!delay-500","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","logreg-link","text-[14.5px]","text-white","text-center","mt-5"])},[H("p",null,[nn(" Already have an account? "),H("button",{type:"button",onClick:J,class:"ml-3 register-link text-primary decoration-[none font-semibold] hover:underline cursor-pointer"},"Login")])],2)],32)],2),H("div",{class:X([u.value?"!translate-x-0 !opacity-100 !filter !blur-0 !pointer-events-auto":"","info-text","register","-translate-x-[120%]","absolute","top-0","w-[50%]","h-full","left-0","flex","flex-col","justify-center","text-left","pt-0","pr-[150px]","pb-[60px]","pl-[40px]","pointer-events-none","duration-700","ease-linear","opacity-0","filter","blur-[10px]"])},[H("h2",{class:X([u.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-1700":"!delay-0","opacity-0","filter","blur-[10px]","duration-700","ease-linear","-translate-x-[120%]","text-[36px]","text-white","leading-snug","uppercase"])}," Welcome on board! ",2),H("p",{class:X([u.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-1800":"!delay-100","opacity-0","filter","blur-[10px]","duration-700","ease-linear","-translate-x-[120%]","text-[16px]","text-white"])}," You can register using your email or a third-party service. ",2)],2)],2)])}}}),C0={},P0={class:"flex justify-center items-center"};function O0(e,t){return Se(),$e("main",P0," 努力趕工中，尚無數據可以呈現。 ")}const R0=kr(C0,[["render",O0]]),N0={},M0={class:"flex justify-center items-center"};function D0(e,t){return Se(),$e("main",M0," 努力趕工中，尚無可以設定的參數。 ")}const L0=kr(N0,[["render",D0]]),lf=_m({history:Lp("/pomofocus-vue3/"),routes:[{path:"/",name:"home",component:x0},{path:"/login",name:"login",component:T0},{path:"/analysis",name:"analysis",component:R0,meta:{requiresAuth:!0}},{path:"/setting",name:"setting",component:L0,meta:{requiresAuth:!0}}]}),U0=()=>new Promise((e,t)=>{const n=Vu(_i(),r=>{n(),e(r)},t)});lf.beforeEach(async(e,t,n)=>{e.matched.some(r=>r.meta.requiresAuth)?await U0()?n():n("/login"):n()});function wl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wl(Object(n),!0).forEach(function(r){Ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wl(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function wi(e){"@babel/helpers - typeof";return wi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wi(e)}function F0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function El(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $0(e,t,n){return t&&El(e.prototype,t),n&&El(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Da(e,t){return B0(e)||z0(e,t)||cf(e,t)||V0()}function Sr(e){return j0(e)||H0(e)||cf(e)||W0()}function j0(e){if(Array.isArray(e))return Vs(e)}function B0(e){if(Array.isArray(e))return e}function H0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function z0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,a,o;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(l){s=!0,o=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw o}}return r}}function cf(e,t){if(e){if(typeof e=="string")return Vs(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vs(e,t)}}function Vs(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function W0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function V0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Il=function(){},La={},uf={},ff=null,df={mark:Il,measure:Il};try{typeof window<"u"&&(La=window),typeof document<"u"&&(uf=document),typeof MutationObserver<"u"&&(ff=MutationObserver),typeof performance<"u"&&(df=performance)}catch{}var K0=La.navigator||{},xl=K0.userAgent,kl=xl===void 0?"":xl,$t=La,de=uf,Sl=ff,jr=df;$t.document;var Et=!!de.documentElement&&!!de.head&&typeof de.addEventListener=="function"&&typeof de.createElement=="function",hf=~kl.indexOf("MSIE")||~kl.indexOf("Trident/"),Br,Hr,zr,Wr,Vr,vt="___FONT_AWESOME___",Ks=16,pf="fa",mf="svg-inline--fa",cn="data-fa-i2svg",qs="data-fa-pseudo-element",q0="data-fa-pseudo-element-pending",Ua="data-prefix",Fa="data-icon",Al="fontawesome-i2svg",G0="async",Y0=["HTML","HEAD","STYLE","SCRIPT"],gf=function(){try{return!0}catch{return!1}}(),fe="classic",ve="sharp",$a=[fe,ve];function Ar(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[fe]}})}var dr=Ar((Br={},Ee(Br,fe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ee(Br,ve,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Br)),hr=Ar((Hr={},Ee(Hr,fe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ee(Hr,ve,{solid:"fass",regular:"fasr",light:"fasl"}),Hr)),pr=Ar((zr={},Ee(zr,fe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ee(zr,ve,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),zr)),X0=Ar((Wr={},Ee(Wr,fe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ee(Wr,ve,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Wr)),J0=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,vf="fa-layers-text",Q0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Z0=Ar((Vr={},Ee(Vr,fe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ee(Vr,ve,{900:"fass",400:"fasr",300:"fasl"}),Vr)),bf=[1,2,3,4,5,6,7,8,9,10],ey=bf.concat([11,12,13,14,15,16,17,18,19,20]),ty=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Qt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mr=new Set;Object.keys(hr[fe]).map(mr.add.bind(mr));Object.keys(hr[ve]).map(mr.add.bind(mr));var ny=[].concat($a,Sr(mr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Qt.GROUP,Qt.SWAP_OPACITY,Qt.PRIMARY,Qt.SECONDARY]).concat(bf.map(function(e){return"".concat(e,"x")})).concat(ey.map(function(e){return"w-".concat(e)})),Jn=$t.FontAwesomeConfig||{};function ry(e){var t=de.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function iy(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(de&&typeof de.querySelector=="function"){var sy=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];sy.forEach(function(e){var t=Da(e,2),n=t[0],r=t[1],i=iy(ry(n));i!=null&&(Jn[r]=i)})}var yf={styleDefault:"solid",familyDefault:"classic",cssPrefix:pf,replacementClass:mf,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Jn.familyPrefix&&(Jn.cssPrefix=Jn.familyPrefix);var Mn=R(R({},yf),Jn);Mn.autoReplaceSvg||(Mn.observeMutations=!1);var L={};Object.keys(yf).forEach(function(e){Object.defineProperty(L,e,{enumerable:!0,set:function(n){Mn[e]=n,Qn.forEach(function(r){return r(L)})},get:function(){return Mn[e]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(t){Mn.cssPrefix=t,Qn.forEach(function(n){return n(L)})},get:function(){return Mn.cssPrefix}});$t.FontAwesomeConfig=L;var Qn=[];function ay(e){return Qn.push(e),function(){Qn.splice(Qn.indexOf(e),1)}}var At=Ks,rt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function oy(e){if(!(!e||!Et)){var t=de.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=de.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=s)}return de.head.insertBefore(t,r),e}}var ly="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gr(){for(var e=12,t="";e-- >0;)t+=ly[Math.random()*62|0];return t}function Fn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ja(e){return e.classList?Fn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function _f(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function cy(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(_f(e[n]),'" ')},"").trim()}function qi(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ba(e){return e.size!==rt.size||e.x!==rt.x||e.y!==rt.y||e.rotate!==rt.rotate||e.flipX||e.flipY}function uy(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(s," ").concat(a," ").concat(o)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function fy(e){var t=e.transform,n=e.width,r=n===void 0?Ks:n,i=e.height,s=i===void 0?Ks:i,a=e.startCentered,o=a===void 0?!1:a,l="";return o&&hf?l+="translate(".concat(t.x/At-r/2,"em, ").concat(t.y/At-s/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/At,"em), calc(-50% + ").concat(t.y/At,"em)) "):l+="translate(".concat(t.x/At,"em, ").concat(t.y/At,"em) "),l+="scale(".concat(t.size/At*(t.flipX?-1:1),", ").concat(t.size/At*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var dy=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
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
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
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
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
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
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
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
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
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

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function wf(){var e=pf,t=mf,n=L.cssPrefix,r=L.replacementClass,i=dy;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(o,".".concat(r))}return i}var Tl=!1;function ps(){L.autoAddCss&&!Tl&&(oy(wf()),Tl=!0)}var hy={mixout:function(){return{dom:{css:wf,insertCss:ps}}},hooks:function(){return{beforeDOMElementCreation:function(){ps()},beforeI2svg:function(){ps()}}}},bt=$t||{};bt[vt]||(bt[vt]={});bt[vt].styles||(bt[vt].styles={});bt[vt].hooks||(bt[vt].hooks={});bt[vt].shims||(bt[vt].shims=[]);var qe=bt[vt],Ef=[],py=function e(){de.removeEventListener("DOMContentLoaded",e),Ei=1,Ef.map(function(t){return t()})},Ei=!1;Et&&(Ei=(de.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(de.readyState),Ei||de.addEventListener("DOMContentLoaded",py));function my(e){Et&&(Ei?setTimeout(e,0):Ef.push(e))}function Tr(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?_f(e):"<".concat(t," ").concat(cy(r),">").concat(s.map(Tr).join(""),"</").concat(t,">")}function Cl(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var gy=function(t,n){return function(r,i,s,a){return t.call(n,r,i,s,a)}},ms=function(t,n,r,i){var s=Object.keys(t),a=s.length,o=i!==void 0?gy(n,i):n,l,c,u;for(r===void 0?(l=1,u=t[s[0]]):(l=0,u=r);l<a;l++)c=s[l],u=o(u,t[c],c,t);return u};function vy(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Gs(e){var t=vy(e);return t.length===1?t[0].toString(16):null}function by(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Pl(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ys(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Pl(t);typeof qe.hooks.addPack=="function"&&!i?qe.hooks.addPack(e,Pl(t)):qe.styles[e]=R(R({},qe.styles[e]||{}),s),e==="fas"&&Ys("fa",t)}var Kr,qr,Gr,bn=qe.styles,yy=qe.shims,_y=(Kr={},Ee(Kr,fe,Object.values(pr[fe])),Ee(Kr,ve,Object.values(pr[ve])),Kr),Ha=null,If={},xf={},kf={},Sf={},Af={},wy=(qr={},Ee(qr,fe,Object.keys(dr[fe])),Ee(qr,ve,Object.keys(dr[ve])),qr);function Ey(e){return~ny.indexOf(e)}function Iy(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!Ey(i)?i:null}var Tf=function(){var t=function(s){return ms(bn,function(a,o,l){return a[l]=ms(o,s,{}),a},{})};If=t(function(i,s,a){if(s[3]&&(i[s[3]]=a),s[2]){var o=s[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){i[l.toString(16)]=a})}return i}),xf=t(function(i,s,a){if(i[a]=a,s[2]){var o=s[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){i[l]=a})}return i}),Af=t(function(i,s,a){var o=s[2];return i[a]=a,o.forEach(function(l){i[l]=a}),i});var n="far"in bn||L.autoFetchSvg,r=ms(yy,function(i,s){var a=s[0],o=s[1],l=s[2];return o==="far"&&!n&&(o="fas"),typeof a=="string"&&(i.names[a]={prefix:o,iconName:l}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:o,iconName:l}),i},{names:{},unicodes:{}});kf=r.names,Sf=r.unicodes,Ha=Gi(L.styleDefault,{family:L.familyDefault})};ay(function(e){Ha=Gi(e.styleDefault,{family:L.familyDefault})});Tf();function za(e,t){return(If[e]||{})[t]}function xy(e,t){return(xf[e]||{})[t]}function Zt(e,t){return(Af[e]||{})[t]}function Cf(e){return kf[e]||{prefix:null,iconName:null}}function ky(e){var t=Sf[e],n=za("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function jt(){return Ha}var Wa=function(){return{prefix:null,iconName:null,rest:[]}};function Gi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?fe:n,i=dr[r][e],s=hr[r][e]||hr[r][i],a=e in qe.styles?e:null;return s||a||null}var Ol=(Gr={},Ee(Gr,fe,Object.keys(pr[fe])),Ee(Gr,ve,Object.keys(pr[ve])),Gr);function Yi(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},Ee(t,fe,"".concat(L.cssPrefix,"-").concat(fe)),Ee(t,ve,"".concat(L.cssPrefix,"-").concat(ve)),t),a=null,o=fe;(e.includes(s[fe])||e.some(function(c){return Ol[fe].includes(c)}))&&(o=fe),(e.includes(s[ve])||e.some(function(c){return Ol[ve].includes(c)}))&&(o=ve);var l=e.reduce(function(c,u){var f=Iy(L.cssPrefix,u);if(bn[u]?(u=_y[o].includes(u)?X0[o][u]:u,a=u,c.prefix=u):wy[o].indexOf(u)>-1?(a=u,c.prefix=Gi(u,{family:o})):f?c.iconName=f:u!==L.replacementClass&&u!==s[fe]&&u!==s[ve]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var p=a==="fa"?Cf(c.iconName):{},g=Zt(c.prefix,c.iconName);p.prefix&&(a=null),c.iconName=p.iconName||g||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!bn.far&&bn.fas&&!L.autoFetchSvg&&(c.prefix="fas")}return c},Wa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===ve&&(bn.fass||L.autoFetchSvg)&&(l.prefix="fass",l.iconName=Zt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||a==="fa")&&(l.prefix=jt()||"fas"),l}var Sy=function(){function e(){F0(this,e),this.definitions={}}return $0(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){n.definitions[o]=R(R({},n.definitions[o]||{}),a[o]),Ys(o,a[o]);var l=pr[fe][o];l&&Ys(l,a[o]),Tf()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var a=i[s],o=a.prefix,l=a.iconName,c=a.icon,u=c[2];n[o]||(n[o]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[o][f]=c)}),n[o][l]=c}),n}}]),e}(),Rl=[],yn={},Sn={},Ay=Object.keys(Sn);function Ty(e,t){var n=t.mixoutsTo;return Rl=e,yn={},Object.keys(Sn).forEach(function(r){Ay.indexOf(r)===-1&&delete Sn[r]}),Rl.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),wi(i[a])==="object"&&Object.keys(i[a]).forEach(function(o){n[a]||(n[a]={}),n[a][o]=i[a][o]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(a){yn[a]||(yn[a]=[]),yn[a].push(s[a])})}r.provides&&r.provides(Sn)}),n}function Xs(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=yn[e]||[];return s.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function un(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=yn[e]||[];i.forEach(function(s){s.apply(null,n)})}function yt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Sn[e]?Sn[e].apply(null,t):void 0}function Js(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||jt();if(t)return t=Zt(n,t)||t,Cl(Pf.definitions,n,t)||Cl(qe.styles,n,t)}var Pf=new Sy,Cy=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,un("noAuto")},Py={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Et?(un("beforeI2svg",t),yt("pseudoElements2svg",t),yt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,my(function(){Ry({autoReplaceSvgRoot:n}),un("watch",t)})}},Oy={icon:function(t){if(t===null)return null;if(wi(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Zt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Gi(t[0]);return{prefix:r,iconName:Zt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(L.cssPrefix,"-"))>-1||t.match(J0))){var i=Yi(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||jt(),iconName:Zt(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=jt();return{prefix:s,iconName:Zt(s,t)||t}}}},je={noAuto:Cy,config:L,dom:Py,parse:Oy,library:Pf,findIconDefinition:Js,toHtml:Tr},Ry=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?de:n;(Object.keys(qe.styles).length>0||L.autoFetchSvg)&&Et&&L.autoReplaceSvg&&je.dom.i2svg({node:r})};function Xi(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Tr(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Et){var r=de.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ny(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,a=e.transform;if(Ba(a)&&n.found&&!r.found){var o=n.width,l=n.height,c={x:o/l/2,y:.5};i.style=qi(R(R({},s),{},{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function My(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,a=s===!0?"".concat(t,"-").concat(L.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},i),{},{id:a}),children:r}]}]}function Va(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,a=e.transform,o=e.symbol,l=e.title,c=e.maskId,u=e.titleId,f=e.extra,p=e.watchable,g=p===void 0?!1:p,I=r.found?r:n,S=I.width,N=I.height,b=i==="fak",_=[L.replacementClass,s?"".concat(L.cssPrefix,"-").concat(s):""].filter(function(U){return f.classes.indexOf(U)===-1}).filter(function(U){return U!==""||!!U}).concat(f.classes).join(" "),O={children:[],attributes:R(R({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:_,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(S," ").concat(N)})},A=b&&!~f.classes.indexOf("fa-fw")?{width:"".concat(S/N*16*.0625,"em")}:{};g&&(O.attributes[cn]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(u||gr())},children:[l]}),delete O.attributes.title);var B=R(R({},O),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:a,symbol:o,styles:R(R({},A),f.styles)}),J=r.found&&n.found?yt("generateAbstractMask",B)||{children:[],attributes:{}}:yt("generateAbstractIcon",B)||{children:[],attributes:{}},Z=J.children,G=J.attributes;return B.children=Z,B.attributes=G,o?My(B):Ny(B)}function Nl(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,a=e.extra,o=e.watchable,l=o===void 0?!1:o,c=R(R(R({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});l&&(c[cn]="");var u=R({},a.styles);Ba(i)&&(u.transform=fy({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=qi(u);f.length>0&&(c.style=f);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function Dy(e){var t=e.content,n=e.title,r=e.extra,i=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=qi(r.styles);s.length>0&&(i.style=s);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var gs=qe.styles;function Qs(e){var t=e[0],n=e[1],r=e.slice(4),i=Da(r,1),s=i[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(Qt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Qt.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Qt.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:a}}var Ly={found:!1,width:512,height:512};function Uy(e,t){!gf&&!L.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Zs(e,t){var n=t;return t==="fa"&&L.styleDefault!==null&&(t=jt()),new Promise(function(r,i){if(yt("missingIconAbstract"),n==="fa"){var s=Cf(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&gs[t]&&gs[t][e]){var a=gs[t][e];return r(Qs(a))}Uy(e,t),r(R(R({},Ly),{},{icon:L.showMissingIcons&&e?yt("missingIconAbstract")||{}:{}}))})}var Ml=function(){},ea=L.measurePerformance&&jr&&jr.mark&&jr.measure?jr:{mark:Ml,measure:Ml},Wn='FA "6.4.2"',Fy=function(t){return ea.mark("".concat(Wn," ").concat(t," begins")),function(){return Of(t)}},Of=function(t){ea.mark("".concat(Wn," ").concat(t," ends")),ea.measure("".concat(Wn," ").concat(t),"".concat(Wn," ").concat(t," begins"),"".concat(Wn," ").concat(t," ends"))},Ka={begin:Fy,end:Of},si=function(){};function Dl(e){var t=e.getAttribute?e.getAttribute(cn):null;return typeof t=="string"}function $y(e){var t=e.getAttribute?e.getAttribute(Ua):null,n=e.getAttribute?e.getAttribute(Fa):null;return t&&n}function jy(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function By(){if(L.autoReplaceSvg===!0)return ai.replace;var e=ai[L.autoReplaceSvg];return e||ai.replace}function Hy(e){return de.createElementNS("http://www.w3.org/2000/svg",e)}function zy(e){return de.createElement(e)}function Rf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Hy:zy:n;if(typeof e=="string")return de.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var s=e.children||[];return s.forEach(function(a){i.appendChild(Rf(a,{ceFn:r}))}),i}function Wy(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ai={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Rf(i),n)}),n.getAttribute(cn)===null&&L.keepOriginalSource){var r=de.createComment(Wy(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ja(n).indexOf(L.replacementClass))return ai.replace(t);var i=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(o,l){return l===L.replacementClass||l.match(i)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var a=r.map(function(o){return Tr(o)}).join(`
`);n.setAttribute(cn,""),n.innerHTML=a}};function Ll(e){e()}function Nf(e,t){var n=typeof t=="function"?t:si;if(e.length===0)n();else{var r=Ll;L.mutateApproach===G0&&(r=$t.requestAnimationFrame||Ll),r(function(){var i=By(),s=Ka.begin("mutate");e.map(i),s(),n()})}}var qa=!1;function Mf(){qa=!0}function ta(){qa=!1}var Ii=null;function Ul(e){if(Sl&&L.observeMutations){var t=e.treeCallback,n=t===void 0?si:t,r=e.nodeCallback,i=r===void 0?si:r,s=e.pseudoElementsCallback,a=s===void 0?si:s,o=e.observeMutationsRoot,l=o===void 0?de:o;Ii=new Sl(function(c){if(!qa){var u=jt();Fn(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Dl(f.addedNodes[0])&&(L.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&L.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&Dl(f.target)&&~ty.indexOf(f.attributeName))if(f.attributeName==="class"&&$y(f.target)){var p=Yi(ja(f.target)),g=p.prefix,I=p.iconName;f.target.setAttribute(Ua,g||u),I&&f.target.setAttribute(Fa,I)}else jy(f.target)&&i(f.target)})}}),Et&&Ii.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Vy(){Ii&&Ii.disconnect()}function Ky(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(r[a]=o.join(":").trim()),r},{})),n}function qy(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Yi(ja(e));return i.prefix||(i.prefix=jt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=xy(i.prefix,e.innerText)||za(i.prefix,Gs(e.innerText))),!i.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Gy(e){var t=Fn(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return L.autoA11y&&(n?t["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(r||gr()):(t["aria-hidden"]="true",t.focusable="false")),t}function Yy(){return{iconName:null,title:null,titleId:null,prefix:null,transform:rt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Fl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=qy(e),r=n.iconName,i=n.prefix,s=n.rest,a=Gy(e),o=Xs("parseNodeAttributes",{},e),l=t.styleParser?Ky(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:rt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:a}},o)}var Xy=qe.styles;function Df(e){var t=L.autoReplaceSvg==="nest"?Fl(e,{styleParser:!1}):Fl(e);return~t.extra.classes.indexOf(vf)?yt("generateLayersText",e,t):yt("generateSvgReplacementMutation",e,t)}var Bt=new Set;$a.map(function(e){Bt.add("fa-".concat(e))});Object.keys(dr[fe]).map(Bt.add.bind(Bt));Object.keys(dr[ve]).map(Bt.add.bind(Bt));Bt=Sr(Bt);function $l(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Et)return Promise.resolve();var n=de.documentElement.classList,r=function(f){return n.add("".concat(Al,"-").concat(f))},i=function(f){return n.remove("".concat(Al,"-").concat(f))},s=L.autoFetchSvg?Bt:$a.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Xy));s.includes("fa")||s.push("fa");var a=[".".concat(vf,":not([").concat(cn,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(cn,"])")})).join(", ");if(a.length===0)return Promise.resolve();var o=[];try{o=Fn(e.querySelectorAll(a))}catch{}if(o.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ka.begin("onTree"),c=o.reduce(function(u,f){try{var p=Df(f);p&&u.push(p)}catch(g){gf||g.name==="MissingIcon"&&console.error(g)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(p){Nf(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(p){l(),f(p)})})}function Jy(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Df(e).then(function(n){n&&Nf([n],t)})}function Qy(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Js(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Js(i||{})),e(r,R(R({},n),{},{mask:i}))}}var Zy=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?rt:r,s=n.symbol,a=s===void 0?!1:s,o=n.mask,l=o===void 0?null:o,c=n.maskId,u=c===void 0?null:c,f=n.title,p=f===void 0?null:f,g=n.titleId,I=g===void 0?null:g,S=n.classes,N=S===void 0?[]:S,b=n.attributes,_=b===void 0?{}:b,O=n.styles,A=O===void 0?{}:O;if(t){var B=t.prefix,J=t.iconName,Z=t.icon;return Xi(R({type:"icon"},t),function(){return un("beforeDOMElementCreation",{iconDefinition:t,params:n}),L.autoA11y&&(p?_["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(I||gr()):(_["aria-hidden"]="true",_.focusable="false")),Va({icons:{main:Qs(Z),mask:l?Qs(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:J,transform:R(R({},rt),i),symbol:a,title:p,maskId:u,titleId:I,extra:{attributes:_,styles:A,classes:N}})})}},e_={mixout:function(){return{icon:Qy(Zy)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=$l,n.nodeCallback=Jy,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?de:r,s=n.callback,a=s===void 0?function(){}:s;return $l(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,a=r.titleId,o=r.prefix,l=r.transform,c=r.symbol,u=r.mask,f=r.maskId,p=r.extra;return new Promise(function(g,I){Promise.all([Zs(i,o),u.iconName?Zs(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(S){var N=Da(S,2),b=N[0],_=N[1];g([n,Va({icons:{main:b,mask:_},prefix:o,iconName:i,transform:l,symbol:c,maskId:f,title:s,titleId:a,extra:p,watchable:!0})])}).catch(I)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.transform,o=n.styles,l=qi(o);l.length>0&&(i.style=l);var c;return Ba(a)&&(c=yt("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},t_={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Xi({type:"layer"},function(){un("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(o){Array.isArray(o)?o.map(function(l){a=a.concat(l.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat(Sr(s)).join(" ")},children:a}]})}}}},n_={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,a=r.classes,o=a===void 0?[]:a,l=r.attributes,c=l===void 0?{}:l,u=r.styles,f=u===void 0?{}:u;return Xi({type:"counter",content:n},function(){return un("beforeDOMElementCreation",{content:n,params:r}),Dy({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(L.cssPrefix,"-layers-counter")].concat(Sr(o))}})})}}}},r_={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?rt:i,a=r.title,o=a===void 0?null:a,l=r.classes,c=l===void 0?[]:l,u=r.attributes,f=u===void 0?{}:u,p=r.styles,g=p===void 0?{}:p;return Xi({type:"text",content:n},function(){return un("beforeDOMElementCreation",{content:n,params:r}),Nl({content:n,transform:R(R({},rt),s),title:o,extra:{attributes:f,styles:g,classes:["".concat(L.cssPrefix,"-layers-text")].concat(Sr(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,a=r.extra,o=null,l=null;if(hf){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/c,l=u.height/c}return L.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,Nl({content:n.innerHTML,width:o,height:l,transform:s,title:i,extra:a,watchable:!0})])}}},i_=new RegExp('"',"ug"),jl=[1105920,1112319];function s_(e){var t=e.replace(i_,""),n=by(t,0),r=n>=jl[0]&&n<=jl[1],i=t.length===2?t[0]===t[1]:!1;return{value:Gs(i?t[0]:t),isSecondary:r||i}}function Bl(e,t){var n="".concat(q0).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=Fn(e.children),a=s.filter(function(Z){return Z.getAttribute(qs)===t})[0],o=$t.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(Q0),c=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(a&&!l)return e.removeChild(a),r();if(l&&u!=="none"&&u!==""){var f=o.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ve:fe,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?hr[p][l[2].toLowerCase()]:Z0[p][c],I=s_(f),S=I.value,N=I.isSecondary,b=l[0].startsWith("FontAwesome"),_=za(g,S),O=_;if(b){var A=ky(S);A.iconName&&A.prefix&&(_=A.iconName,g=A.prefix)}if(_&&!N&&(!a||a.getAttribute(Ua)!==g||a.getAttribute(Fa)!==O)){e.setAttribute(n,O),a&&e.removeChild(a);var B=Yy(),J=B.extra;J.attributes[qs]=t,Zs(_,g).then(function(Z){var G=Va(R(R({},B),{},{icons:{main:Z,mask:Wa()},prefix:g,iconName:O,extra:J,watchable:!0})),U=de.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(U,e.firstChild):e.appendChild(U),U.outerHTML=G.map(function(z){return Tr(z)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function a_(e){return Promise.all([Bl(e,"::before"),Bl(e,"::after")])}function o_(e){return e.parentNode!==document.head&&!~Y0.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(qs)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Hl(e){if(Et)return new Promise(function(t,n){var r=Fn(e.querySelectorAll("*")).filter(o_).map(a_),i=Ka.begin("searchPseudoElements");Mf(),Promise.all(r).then(function(){i(),ta(),t()}).catch(function(){i(),ta(),n()})})}var l_={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Hl,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?de:r;L.searchPseudoElements&&Hl(i)}}},zl=!1,c_={mixout:function(){return{dom:{unwatch:function(){Mf(),zl=!0}}}},hooks:function(){return{bootstrap:function(){Ul(Xs("mutationObserverCallbacks",{}))},noAuto:function(){Vy()},watch:function(n){var r=n.observeMutationsRoot;zl?ta():Ul(Xs("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Wl=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),a=s[0],o=s.slice(1).join("-");if(a&&o==="h")return r.flipX=!0,r;if(a&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(a){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},u_={mixout:function(){return{parse:{transform:function(n){return Wl(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Wl(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,a=n.iconWidth,o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},p={transform:"translate(".concat(a/2*-1," -256)")},g={outer:o,inner:f,path:p};return{tag:"g",attributes:R({},g.outer),children:[{tag:"g",attributes:R({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),g.path)}]}]}}}},vs={x:0,y:0,width:"100%",height:"100%"};function Vl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function f_(e){return e.tag==="g"?e.children:[e]}var d_={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Yi(i.split(" ").map(function(a){return a.trim()})):Wa();return s.prefix||(s.prefix=jt()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.mask,o=n.maskId,l=n.transform,c=s.width,u=s.icon,f=a.width,p=a.icon,g=uy({transform:l,containerWidth:f,iconWidth:c}),I={tag:"rect",attributes:R(R({},vs),{},{fill:"white"})},S=u.children?{children:u.children.map(Vl)}:{},N={tag:"g",attributes:R({},g.inner),children:[Vl(R({tag:u.tag,attributes:R(R({},u.attributes),g.path)},S))]},b={tag:"g",attributes:R({},g.outer),children:[N]},_="mask-".concat(o||gr()),O="clip-".concat(o||gr()),A={tag:"mask",attributes:R(R({},vs),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,b]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:f_(p)},A]};return r.push(B,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(_,")")},vs)}),{children:r,attributes:i}}}},h_={provides:function(t){var n=!1;$t.matchMedia&&(n=$t.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=R(R({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:R(R({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:R(R({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:R(R({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},p_={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},m_=[hy,e_,t_,n_,r_,l_,c_,u_,d_,h_,p_];Ty(m_,{mixoutsTo:je});je.noAuto;je.config;var g_=je.library;je.dom;var na=je.parse;je.findIconDefinition;je.toHtml;var v_=je.icon;je.layer;je.text;je.counter;function Kl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ft(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Kl(Object(n),!0).forEach(function(r){Re(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kl(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function xi(e){"@babel/helpers - typeof";return xi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xi(e)}function Re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b_(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function y_(e,t){if(e==null)return{};var n=b_(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var __=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Lf={exports:{}};(function(e){(function(t){var n=function(b,_,O){if(!c(_)||f(_)||p(_)||g(_)||l(_))return _;var A,B=0,J=0;if(u(_))for(A=[],J=_.length;B<J;B++)A.push(n(b,_[B],O));else{A={};for(var Z in _)Object.prototype.hasOwnProperty.call(_,Z)&&(A[b(Z,O)]=n(b,_[Z],O))}return A},r=function(b,_){_=_||{};var O=_.separator||"_",A=_.split||/(?=[A-Z])/;return b.split(A).join(O)},i=function(b){return I(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(_,O){return O?O.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},s=function(b){var _=i(b);return _.substr(0,1).toUpperCase()+_.substr(1)},a=function(b,_){return r(b,_).toLowerCase()},o=Object.prototype.toString,l=function(b){return typeof b=="function"},c=function(b){return b===Object(b)},u=function(b){return o.call(b)=="[object Array]"},f=function(b){return o.call(b)=="[object Date]"},p=function(b){return o.call(b)=="[object RegExp]"},g=function(b){return o.call(b)=="[object Boolean]"},I=function(b){return b=b-0,b===b},S=function(b,_){var O=_&&"process"in _?_.process:_;return typeof O!="function"?b:function(A,B){return O(A,b,B)}},N={camelize:i,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(b,_){return n(S(i,_),b)},decamelizeKeys:function(b,_){return n(S(a,_),b,_)},pascalizeKeys:function(b,_){return n(S(s,_),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=N:t.humps=N})(__)})(Lf);var w_=Lf.exports,E_=["class","style"];function I_(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=w_.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function x_(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Uf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Uf(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=x_(u);break;case"style":l.style=I_(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,a=s===void 0?{}:s,o=y_(n,E_);return Ia(e.tag,ft(ft(ft({},t),{},{class:i.class,style:ft(ft({},i.style),a)},i.attrs),o),r)}var Ff=!1;try{Ff=!0}catch{}function k_(){if(!Ff&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function bs(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Re({},e,t):{}}function S_(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Re(t,"fa-".concat(e.size),e.size!==null),Re(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Re(t,"fa-pull-".concat(e.pull),e.pull!==null),Re(t,"fa-swap-opacity",e.swapOpacity),Re(t,"fa-bounce",e.bounce),Re(t,"fa-shake",e.shake),Re(t,"fa-beat",e.beat),Re(t,"fa-fade",e.fade),Re(t,"fa-beat-fade",e.beatFade),Re(t,"fa-flash",e.flash),Re(t,"fa-spin-pulse",e.spinPulse),Re(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ql(e){if(e&&xi(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(na.icon)return na.icon(e);if(e===null)return null;if(xi(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var A_=_t({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=ye(function(){return ql(t.icon)}),s=ye(function(){return bs("classes",S_(t))}),a=ye(function(){return bs("transform",typeof t.transform=="string"?na.transform(t.transform):t.transform)}),o=ye(function(){return bs("mask",ql(t.mask))}),l=ye(function(){return v_(i.value,ft(ft(ft(ft({},s.value),a.value),o.value),{},{symbol:t.symbol,title:t.title}))});tn(l,function(u){if(!u)return k_("Could not find one or more icon(s)",i.value,o.value)},{immediate:!0});var c=ye(function(){return l.value?Uf(l.value.abstract[0],{},r):null});return function(){return c.value}}}),T_={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},C_={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]};g_.add(T_,C_);const Ga=cp(u0);Ga.use(dp());Ga.use(lf);Ga.component("font-awesome-icon",A_).mount("#app");
