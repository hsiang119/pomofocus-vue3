(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Da(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ve={},Dn=[],et=()=>{},$d=()=>!1,Bd=/^on[^a-z]/,Xi=e=>Bd.test(e),Fa=e=>e.startsWith("onUpdate:"),Ce=Object.assign,Ua=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},jd=Object.prototype.hasOwnProperty,se=(e,t)=>jd.call(e,t),V=Array.isArray,Fn=e=>Ji(e)==="[object Map]",Wl=e=>Ji(e)==="[object Set]",ee=e=>typeof e=="function",xe=e=>typeof e=="string",$a=e=>typeof e=="symbol",me=e=>e!==null&&typeof e=="object",Vl=e=>me(e)&&ee(e.then)&&ee(e.catch),Kl=Object.prototype.toString,Ji=e=>Kl.call(e),Hd=e=>Ji(e).slice(8,-1),ql=e=>Ji(e)==="[object Object]",Ba=e=>xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,bi=Da(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},zd=/-(\w)/g,dt=Qi(e=>e.replace(zd,(t,n)=>n?n.toUpperCase():"")),Wd=/\B([A-Z])/g,Xn=Qi(e=>e.replace(Wd,"-$1").toLowerCase()),Zi=Qi(e=>e.charAt(0).toUpperCase()+e.slice(1)),xs=Qi(e=>e?`on${Zi(e)}`:""),_r=(e,t)=>!Object.is(e,t),yi=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Pi=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Xs=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Vd=e=>{const t=xe(e)?Number(e):NaN;return isNaN(t)?e:t};let Uo;const Js=()=>Uo||(Uo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ja(e){if(V(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=xe(r)?Gd(r):ja(r);if(i)for(const s in i)t[s]=i[s]}return t}else{if(xe(e))return e;if(me(e))return e}}const Kd=/;(?![^(]*\))/g,qd=/:([^]+)/,Yd=/\/\*[^]*?\*\//g;function Gd(e){const t={};return e.replace(Yd,"").split(Kd).forEach(n=>{if(n){const r=n.split(qd);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function te(e){let t="";if(xe(e))t=e;else if(V(e))for(let n=0;n<e.length;n++){const r=te(e[n]);r&&(t+=r+" ")}else if(me(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Xd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jd=Da(Xd);function Yl(e){return!!e||e===""}const zn=e=>xe(e)?e:e==null?"":V(e)||me(e)&&(e.toString===Kl||!ee(e.toString))?JSON.stringify(e,Gl,2):String(e),Gl=(e,t)=>t&&t.__v_isRef?Gl(e,t.value):Fn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Wl(t)?{[`Set(${t.size})`]:[...t.values()]}:me(t)&&!V(t)&&!ql(t)?String(t):t;let He;class Xl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=He,!t&&He&&(this.index=(He.scopes||(He.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=He;try{return He=this,t()}finally{He=n}}}on(){He=this}off(){He=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Jl(e){return new Xl(e)}function Qd(e,t=He){t&&t.active&&t.effects.push(e)}function Ql(){return He}function Zd(e){He&&He.cleanups.push(e)}const Ha=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Zl=e=>(e.w&qt)>0,eu=e=>(e.n&qt)>0,eh=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qt},th=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Zl(i)&&!eu(i)?i.delete(e):t[n++]=i,i.w&=~qt,i.n&=~qt}t.length=n}},Oi=new WeakMap;let ar=0,qt=1;const Qs=30;let Je;const mn=Symbol(""),Zs=Symbol("");class za{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Qd(this,r)}run(){if(!this.active)return this.fn();let t=Je,n=zt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Je,Je=this,zt=!0,qt=1<<++ar,ar<=Qs?eh(this):$o(this),this.fn()}finally{ar<=Qs&&th(this),qt=1<<--ar,Je=this.parent,zt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Je===this?this.deferStop=!0:this.active&&($o(this),this.onStop&&this.onStop(),this.active=!1)}}function $o(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let zt=!0;const tu=[];function Jn(){tu.push(zt),zt=!1}function Qn(){const e=tu.pop();zt=e===void 0?!0:e}function Be(e,t,n){if(zt&&Je){let r=Oi.get(e);r||Oi.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Ha()),nu(i)}}function nu(e,t){let n=!1;ar<=Qs?eu(e)||(e.n|=qt,n=!Zl(e)):n=!e.has(Je),n&&(e.add(Je),Je.deps.push(e))}function wt(e,t,n,r,i,s){const a=Oi.get(e);if(!a)return;let c=[];if(t==="clear")c=[...a.values()];else if(n==="length"&&V(e)){const o=Number(r);a.forEach((l,u)=>{(u==="length"||u>=o)&&c.push(l)})}else switch(n!==void 0&&c.push(a.get(n)),t){case"add":V(e)?Ba(n)&&c.push(a.get("length")):(c.push(a.get(mn)),Fn(e)&&c.push(a.get(Zs)));break;case"delete":V(e)||(c.push(a.get(mn)),Fn(e)&&c.push(a.get(Zs)));break;case"set":Fn(e)&&c.push(a.get(mn));break}if(c.length===1)c[0]&&ea(c[0]);else{const o=[];for(const l of c)l&&o.push(...l);ea(Ha(o))}}function ea(e,t){const n=V(e)?e:[...e];for(const r of n)r.computed&&Bo(r);for(const r of n)r.computed||Bo(r)}function Bo(e,t){(e!==Je||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function nh(e,t){var n;return(n=Oi.get(e))==null?void 0:n.get(t)}const rh=Da("__proto__,__v_isRef,__isVue"),ru=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($a)),ih=Wa(),sh=Wa(!1,!0),ah=Wa(!0),jo=oh();function oh(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=re(this);for(let s=0,a=this.length;s<a;s++)Be(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(re)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Jn();const r=re(this)[t].apply(this,n);return Qn(),r}}),e}function ch(e){const t=re(this);return Be(t,"has",e),t.hasOwnProperty(e)}function Wa(e=!1,t=!1){return function(r,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&s===(e?t?xh:cu:t?ou:au).get(r))return r;const a=V(r);if(!e){if(a&&se(jo,i))return Reflect.get(jo,i,s);if(i==="hasOwnProperty")return ch}const c=Reflect.get(r,i,s);return($a(i)?ru.has(i):rh(i))||(e||Be(r,"get",i),t)?c:we(c)?a&&Ba(i)?c:c.value:me(c)?e?uu(c):Ur(c):c}}const lh=iu(),uh=iu(!0);function iu(e=!1){return function(n,r,i,s){let a=n[r];if(Wn(a)&&we(a)&&!we(i))return!1;if(!e&&(!Ri(i)&&!Wn(i)&&(a=re(a),i=re(i)),!V(n)&&we(a)&&!we(i)))return a.value=i,!0;const c=V(n)&&Ba(r)?Number(r)<n.length:se(n,r),o=Reflect.set(n,r,i,s);return n===re(s)&&(c?_r(i,a)&&wt(n,"set",r,i):wt(n,"add",r,i)),o}}function fh(e,t){const n=se(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&wt(e,"delete",t,void 0),r}function dh(e,t){const n=Reflect.has(e,t);return(!$a(t)||!ru.has(t))&&Be(e,"has",t),n}function hh(e){return Be(e,"iterate",V(e)?"length":mn),Reflect.ownKeys(e)}const su={get:ih,set:lh,deleteProperty:fh,has:dh,ownKeys:hh},ph={get:ah,set(e,t){return!0},deleteProperty(e,t){return!0}},mh=Ce({},su,{get:sh,set:uh}),Va=e=>e,es=e=>Reflect.getPrototypeOf(e);function Jr(e,t,n=!1,r=!1){e=e.__v_raw;const i=re(e),s=re(t);n||(t!==s&&Be(i,"get",t),Be(i,"get",s));const{has:a}=es(i),c=r?Va:n?Ya:wr;if(a.call(i,t))return c(e.get(t));if(a.call(i,s))return c(e.get(s));e!==i&&e.get(t)}function Qr(e,t=!1){const n=this.__v_raw,r=re(n),i=re(e);return t||(e!==i&&Be(r,"has",e),Be(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Zr(e,t=!1){return e=e.__v_raw,!t&&Be(re(e),"iterate",mn),Reflect.get(e,"size",e)}function Ho(e){e=re(e);const t=re(this);return es(t).has.call(t,e)||(t.add(e),wt(t,"add",e,e)),this}function zo(e,t){t=re(t);const n=re(this),{has:r,get:i}=es(n);let s=r.call(n,e);s||(e=re(e),s=r.call(n,e));const a=i.call(n,e);return n.set(e,t),s?_r(t,a)&&wt(n,"set",e,t):wt(n,"add",e,t),this}function Wo(e){const t=re(this),{has:n,get:r}=es(t);let i=n.call(t,e);i||(e=re(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&wt(t,"delete",e,void 0),s}function Vo(){const e=re(this),t=e.size!==0,n=e.clear();return t&&wt(e,"clear",void 0,void 0),n}function ei(e,t){return function(r,i){const s=this,a=s.__v_raw,c=re(a),o=t?Va:e?Ya:wr;return!e&&Be(c,"iterate",mn),a.forEach((l,u)=>r.call(i,o(l),o(u),s))}}function ti(e,t,n){return function(...r){const i=this.__v_raw,s=re(i),a=Fn(s),c=e==="entries"||e===Symbol.iterator&&a,o=e==="keys"&&a,l=i[e](...r),u=n?Va:t?Ya:wr;return!t&&Be(s,"iterate",o?Zs:mn),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:c?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Pt(e){return function(...t){return e==="delete"?!1:this}}function gh(){const e={get(s){return Jr(this,s)},get size(){return Zr(this)},has:Qr,add:Ho,set:zo,delete:Wo,clear:Vo,forEach:ei(!1,!1)},t={get(s){return Jr(this,s,!1,!0)},get size(){return Zr(this)},has:Qr,add:Ho,set:zo,delete:Wo,clear:Vo,forEach:ei(!1,!0)},n={get(s){return Jr(this,s,!0)},get size(){return Zr(this,!0)},has(s){return Qr.call(this,s,!0)},add:Pt("add"),set:Pt("set"),delete:Pt("delete"),clear:Pt("clear"),forEach:ei(!0,!1)},r={get(s){return Jr(this,s,!0,!0)},get size(){return Zr(this,!0)},has(s){return Qr.call(this,s,!0)},add:Pt("add"),set:Pt("set"),delete:Pt("delete"),clear:Pt("clear"),forEach:ei(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=ti(s,!1,!1),n[s]=ti(s,!0,!1),t[s]=ti(s,!1,!0),r[s]=ti(s,!0,!0)}),[e,n,t,r]}const[vh,bh,yh,_h]=gh();function Ka(e,t){const n=t?e?_h:yh:e?bh:vh;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(se(n,i)&&i in r?n:r,i,s)}const wh={get:Ka(!1,!1)},Eh={get:Ka(!1,!0)},Ih={get:Ka(!0,!1)},au=new WeakMap,ou=new WeakMap,cu=new WeakMap,xh=new WeakMap;function kh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ah(e){return e.__v_skip||!Object.isExtensible(e)?0:kh(Hd(e))}function Ur(e){return Wn(e)?e:qa(e,!1,su,wh,au)}function lu(e){return qa(e,!1,mh,Eh,ou)}function uu(e){return qa(e,!0,ph,Ih,cu)}function qa(e,t,n,r,i){if(!me(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const a=Ah(e);if(a===0)return e;const c=new Proxy(e,a===2?r:n);return i.set(e,c),c}function _t(e){return Wn(e)?_t(e.__v_raw):!!(e&&e.__v_isReactive)}function Wn(e){return!!(e&&e.__v_isReadonly)}function Ri(e){return!!(e&&e.__v_isShallow)}function fu(e){return _t(e)||Wn(e)}function re(e){const t=e&&e.__v_raw;return t?re(t):e}function $r(e){return Pi(e,"__v_skip",!0),e}const wr=e=>me(e)?Ur(e):e,Ya=e=>me(e)?uu(e):e;function du(e){zt&&Je&&(e=re(e),nu(e.dep||(e.dep=Ha())))}function hu(e,t){e=re(e);const n=e.dep;n&&ea(n)}function we(e){return!!(e&&e.__v_isRef===!0)}function oe(e){return pu(e,!1)}function Ch(e){return pu(e,!0)}function pu(e,t){return we(e)?e:new Th(e,t)}class Th{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:re(t),this._value=n?t:wr(t)}get value(){return du(this),this._value}set value(t){const n=this.__v_isShallow||Ri(t)||Wn(t);t=n?t:re(t),_r(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:wr(t),hu(this))}}function _e(e){return we(e)?e.value:e}function Sh(e){return ee(e)?e():_e(e)}const Ph={get:(e,t,n)=>_e(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return we(i)&&!we(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function mu(e){return _t(e)?e:new Proxy(e,Ph)}function Oh(e){const t=V(e)?new Array(e.length):{};for(const n in e)t[n]=gu(e,n);return t}class Rh{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return nh(re(this._object),this._key)}}class Nh{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Lh(e,t,n){return we(e)?e:ee(e)?new Nh(e):me(e)&&arguments.length>1?gu(e,t,n):oe(e)}function gu(e,t,n){const r=e[t];return we(r)?r:new Rh(e,t,n)}class Mh{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new za(t,()=>{this._dirty||(this._dirty=!0,hu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=re(this);return du(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Dh(e,t,n=!1){let r,i;const s=ee(e);return s?(r=e,i=et):(r=e.get,i=e.set),new Mh(r,i,s||!i,n)}function Wt(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){ts(s,t,n)}return i}function qe(e,t,n,r){if(ee(e)){const s=Wt(e,t,n,r);return s&&Vl(s)&&s.catch(a=>{ts(a,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(qe(e[s],t,n,r));return i}function ts(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,c=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,a,c)===!1)return}s=s.parent}const o=t.appContext.config.errorHandler;if(o){Wt(o,null,10,[e,a,c]);return}}Fh(e,n,i,r)}function Fh(e,t,n,r=!0){console.error(e)}let Er=!1,ta=!1;const Oe=[];let ct=0;const Un=[];let mt=null,cn=0;const vu=Promise.resolve();let Ga=null;function Xa(e){const t=Ga||vu;return e?t.then(this?e.bind(this):e):t}function Uh(e){let t=ct+1,n=Oe.length;for(;t<n;){const r=t+n>>>1;Ir(Oe[r])<e?t=r+1:n=r}return t}function Ja(e){(!Oe.length||!Oe.includes(e,Er&&e.allowRecurse?ct+1:ct))&&(e.id==null?Oe.push(e):Oe.splice(Uh(e.id),0,e),bu())}function bu(){!Er&&!ta&&(ta=!0,Ga=vu.then(_u))}function $h(e){const t=Oe.indexOf(e);t>ct&&Oe.splice(t,1)}function Bh(e){V(e)?Un.push(...e):(!mt||!mt.includes(e,e.allowRecurse?cn+1:cn))&&Un.push(e),bu()}function Ko(e,t=Er?ct+1:0){for(;t<Oe.length;t++){const n=Oe[t];n&&n.pre&&(Oe.splice(t,1),t--,n())}}function yu(e){if(Un.length){const t=[...new Set(Un)];if(Un.length=0,mt){mt.push(...t);return}for(mt=t,mt.sort((n,r)=>Ir(n)-Ir(r)),cn=0;cn<mt.length;cn++)mt[cn]();mt=null,cn=0}}const Ir=e=>e.id==null?1/0:e.id,jh=(e,t)=>{const n=Ir(e)-Ir(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function _u(e){ta=!1,Er=!0,Oe.sort(jh);const t=et;try{for(ct=0;ct<Oe.length;ct++){const n=Oe[ct];n&&n.active!==!1&&Wt(n,null,14)}}finally{ct=0,Oe.length=0,yu(),Er=!1,Ga=null,(Oe.length||Un.length)&&_u()}}function Hh(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ve;let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in r){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:d}=r[u]||ve;d&&(i=n.map(m=>xe(m)?m.trim():m)),f&&(i=n.map(Xs))}let c,o=r[c=xs(t)]||r[c=xs(dt(t))];!o&&s&&(o=r[c=xs(Xn(t))]),o&&qe(o,e,6,i);const l=r[c+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,qe(l,e,6,i)}}function wu(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let a={},c=!1;if(!ee(e)){const o=l=>{const u=wu(l,t,!0);u&&(c=!0,Ce(a,u))};!n&&t.mixins.length&&t.mixins.forEach(o),e.extends&&o(e.extends),e.mixins&&e.mixins.forEach(o)}return!s&&!c?(me(e)&&r.set(e,null),null):(V(s)?s.forEach(o=>a[o]=null):Ce(a,s),me(e)&&r.set(e,a),a)}function ns(e,t){return!e||!Xi(t)?!1:(t=t.slice(2).replace(/Once$/,""),se(e,t[0].toLowerCase()+t.slice(1))||se(e,Xn(t))||se(e,t))}let $e=null,rs=null;function Ni(e){const t=$e;return $e=e,rs=e&&e.type.__scopeId||null,t}function Eu(e){rs=e}function Iu(){rs=null}function gn(e,t=$e,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&sc(-1);const s=Ni(t);let a;try{a=e(...i)}finally{Ni(s),r._d&&sc(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function ks(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[a],slots:c,attrs:o,emit:l,render:u,renderCache:f,data:d,setupState:m,ctx:_,inheritAttrs:I}=e;let R,v;const y=Ni(e);try{if(n.shapeFlag&4){const A=i||r;R=ot(u.call(A,A,f,s,m,d,_)),v=o}else{const A=t;R=ot(A.length>1?A(s,{attrs:o,slots:c,emit:l}):A(s,null)),v=t.props?o:zh(o)}}catch(A){hr.length=0,ts(A,e,1),R=Ee(tt)}let S=R;if(v&&I!==!1){const A=Object.keys(v),{shapeFlag:M}=S;A.length&&M&7&&(a&&A.some(Fa)&&(v=Wh(v,a)),S=Yt(S,v))}return n.dirs&&(S=Yt(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),R=S,Ni(y),R}const zh=e=>{let t;for(const n in e)(n==="class"||n==="style"||Xi(n))&&((t||(t={}))[n]=e[n]);return t},Wh=(e,t)=>{const n={};for(const r in e)(!Fa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Vh(e,t,n){const{props:r,children:i,component:s}=e,{props:a,children:c,patchFlag:o}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&o>=0){if(o&1024)return!0;if(o&16)return r?qo(r,a,l):!!a;if(o&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==r[d]&&!ns(l,d))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?qo(r,a,l):!0:!!a;return!1}function qo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!ns(n,s))return!0}return!1}function Kh({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const qh=e=>e.__isSuspense;function Yh(e,t){t&&t.pendingBranch?V(e)?t.effects.push(...e):t.effects.push(e):Bh(e)}function Gh(e,t){return Qa(e,null,t)}const ni={};function vn(e,t,n){return Qa(e,t,n)}function Qa(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:a}=ve){var c;const o=Ql()===((c=Te)==null?void 0:c.scope)?Te:null;let l,u=!1,f=!1;if(we(e)?(l=()=>e.value,u=Ri(e)):_t(e)?(l=()=>e,r=!0):V(e)?(f=!0,u=e.some(A=>_t(A)||Ri(A)),l=()=>e.map(A=>{if(we(A))return A.value;if(_t(A))return fn(A);if(ee(A))return Wt(A,o,2)})):ee(e)?t?l=()=>Wt(e,o,2):l=()=>{if(!(o&&o.isUnmounted))return d&&d(),qe(e,o,3,[m])}:l=et,t&&r){const A=l;l=()=>fn(A())}let d,m=A=>{d=y.onStop=()=>{Wt(A,o,4)}},_;if(Ar)if(m=et,t?n&&qe(t,o,3,[l(),f?[]:void 0,m]):l(),i==="sync"){const A=Vp();_=A.__watcherHandles||(A.__watcherHandles=[])}else return et;let I=f?new Array(e.length).fill(ni):ni;const R=()=>{if(y.active)if(t){const A=y.run();(r||u||(f?A.some((M,Y)=>_r(M,I[Y])):_r(A,I)))&&(d&&d(),qe(t,o,3,[A,I===ni?void 0:f&&I[0]===ni?[]:I,m]),I=A)}else y.run()};R.allowRecurse=!!t;let v;i==="sync"?v=R:i==="post"?v=()=>Fe(R,o&&o.suspense):(R.pre=!0,o&&(R.id=o.uid),v=()=>Ja(R));const y=new za(l,v);t?n?R():I=y.run():i==="post"?Fe(y.run.bind(y),o&&o.suspense):y.run();const S=()=>{y.stop(),o&&o.scope&&Ua(o.scope.effects,y)};return _&&_.push(S),S}function Xh(e,t,n){const r=this.proxy,i=xe(e)?e.includes(".")?xu(r,e):()=>r[e]:e.bind(r,r);let s;ee(t)?s=t:(s=t.handler,n=t);const a=Te;Vn(this);const c=Qa(i,s.bind(r),n);return a?Vn(a):bn(),c}function xu(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function fn(e,t){if(!me(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),we(e))fn(e.value,t);else if(V(e))for(let n=0;n<e.length;n++)fn(e[n],t);else if(Wl(e)||Fn(e))e.forEach(n=>{fn(n,t)});else if(ql(e))for(const n in e)fn(e[n],t);return e}function ri(e,t){const n=$e;if(n===null)return e;const r=us(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[a,c,o,l=ve]=t[s];a&&(ee(a)&&(a={mounted:a,updated:a}),a.deep&&fn(c),i.push({dir:a,instance:r,value:c,oldValue:void 0,arg:o,modifiers:l}))}return e}function tn(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const c=i[a];s&&(c.oldValue=s[a].value);let o=c.dir[r];o&&(Jn(),qe(o,n,8,[e.el,c,e,t]),Qn())}}function Jh(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return as(()=>{e.isMounted=!0}),Ou(()=>{e.isUnmounting=!0}),e}const Ve=[Function,Array],ku={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ve,onEnter:Ve,onAfterEnter:Ve,onEnterCancelled:Ve,onBeforeLeave:Ve,onLeave:Ve,onAfterLeave:Ve,onLeaveCancelled:Ve,onBeforeAppear:Ve,onAppear:Ve,onAfterAppear:Ve,onAppearCancelled:Ve},Qh={name:"BaseTransition",props:ku,setup(e,{slots:t}){const n=Fp(),r=Jh();let i;return()=>{const s=t.default&&Cu(t.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const I of s)if(I.type!==tt){a=I;break}}const c=re(e),{mode:o}=c;if(r.isLeaving)return As(a);const l=Yo(a);if(!l)return As(a);const u=na(l,c,r,n);ra(l,u);const f=n.subTree,d=f&&Yo(f);let m=!1;const{getTransitionKey:_}=l.type;if(_){const I=_();i===void 0?i=I:I!==i&&(i=I,m=!0)}if(d&&d.type!==tt&&(!ln(l,d)||m)){const I=na(d,c,r,n);if(ra(d,I),o==="out-in")return r.isLeaving=!0,I.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},As(a);o==="in-out"&&l.type!==tt&&(I.delayLeave=(R,v,y)=>{const S=Au(r,d);S[String(d.key)]=d,R._leaveCb=()=>{v(),R._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=y})}return a}}},Zh=Qh;function Au(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function na(e,t,n,r){const{appear:i,mode:s,persisted:a=!1,onBeforeEnter:c,onEnter:o,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:I,onAppear:R,onAfterAppear:v,onAppearCancelled:y}=t,S=String(e.key),A=Au(n,e),M=(T,N)=>{T&&qe(T,r,9,N)},Y=(T,N)=>{const K=N[1];M(T,N),V(T)?T.every(ie=>ie.length<=1)&&K():T.length<=1&&K()},q={mode:s,persisted:a,beforeEnter(T){let N=c;if(!n.isMounted)if(i)N=I||c;else return;T._leaveCb&&T._leaveCb(!0);const K=A[S];K&&ln(e,K)&&K.el._leaveCb&&K.el._leaveCb(),M(N,[T])},enter(T){let N=o,K=l,ie=u;if(!n.isMounted)if(i)N=R||o,K=v||l,ie=y||u;else return;let F=!1;const Q=T._enterCb=G=>{F||(F=!0,G?M(ie,[T]):M(K,[T]),q.delayedLeave&&q.delayedLeave(),T._enterCb=void 0)};N?Y(N,[T,Q]):Q()},leave(T,N){const K=String(e.key);if(T._enterCb&&T._enterCb(!0),n.isUnmounting)return N();M(f,[T]);let ie=!1;const F=T._leaveCb=Q=>{ie||(ie=!0,N(),Q?M(_,[T]):M(m,[T]),T._leaveCb=void 0,A[K]===e&&delete A[K])};A[K]=e,d?Y(d,[T,F]):F()},clone(T){return na(T,t,n,r)}};return q}function As(e){if(is(e))return e=Yt(e),e.children=null,e}function Yo(e){return is(e)?e.children?e.children[0]:void 0:e}function ra(e,t){e.shapeFlag&6&&e.component?ra(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Cu(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let a=e[s];const c=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===ze?(a.patchFlag&128&&i++,r=r.concat(Cu(a.children,t,c))):(t||a.type!==tt)&&r.push(c!=null?Yt(a,{key:c}):a)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function rt(e,t){return ee(e)?(()=>Ce({name:e.name},t,{setup:e}))():e}const _i=e=>!!e.type.__asyncLoader,is=e=>e.type.__isKeepAlive;function Tu(e,t){Pu(e,"a",t)}function Su(e,t){Pu(e,"da",t)}function Pu(e,t,n=Te){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ss(t,r,n),n){let i=n.parent;for(;i&&i.parent;)is(i.parent.vnode)&&ep(r,t,n,i),i=i.parent}}function ep(e,t,n,r){const i=ss(t,e,r,!0);os(()=>{Ua(r[t],i)},n)}function ss(e,t,n=Te,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;Jn(),Vn(n);const c=qe(t,n,e,a);return bn(),Qn(),c});return r?i.unshift(s):i.push(s),s}}const At=e=>(t,n=Te)=>(!Ar||e==="sp")&&ss(e,(...r)=>t(...r),n),tp=At("bm"),as=At("m"),np=At("bu"),rp=At("u"),Ou=At("bum"),os=At("um"),ip=At("sp"),sp=At("rtg"),ap=At("rtc");function op(e,t=Te){ss("ec",e,t)}const Za="components";function Li(e,t){return Nu(Za,e,!0,t)||e}const Ru=Symbol.for("v-ndc");function cp(e){return xe(e)?Nu(Za,e,!1)||e:e||Ru}function Nu(e,t,n=!0,r=!1){const i=$e||Te;if(i){const s=i.type;if(e===Za){const c=Hp(s,!1);if(c&&(c===t||c===dt(t)||c===Zi(dt(t))))return s}const a=Go(i[e]||s[e],t)||Go(i.appContext[e],t);return!a&&r?s:a}}function Go(e,t){return e&&(e[t]||e[dt(t)]||e[Zi(dt(t))])}function Lu(e,t,n,r){let i;const s=n&&n[r];if(V(e)||xe(e)){i=new Array(e.length);for(let a=0,c=e.length;a<c;a++)i[a]=t(e[a],a,void 0,s&&s[a])}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,s&&s[a])}else if(me(e))if(e[Symbol.iterator])i=Array.from(e,(a,c)=>t(a,c,void 0,s&&s[c]));else{const a=Object.keys(e);i=new Array(a.length);for(let c=0,o=a.length;c<o;c++){const l=a[c];i[c]=t(e[l],l,c,s&&s[c])}}else i=[];return n&&(n[r]=i),i}const ia=e=>e?Vu(e)?us(e)||e.proxy:ia(e.parent):null,fr=Ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ia(e.parent),$root:e=>ia(e.root),$emit:e=>e.emit,$options:e=>eo(e),$forceUpdate:e=>e.f||(e.f=()=>Ja(e.update)),$nextTick:e=>e.n||(e.n=Xa.bind(e.proxy)),$watch:e=>Xh.bind(e)}),Cs=(e,t)=>e!==ve&&!e.__isScriptSetup&&se(e,t),lp={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:c,appContext:o}=e;let l;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(Cs(r,t))return a[t]=1,r[t];if(i!==ve&&se(i,t))return a[t]=2,i[t];if((l=e.propsOptions[0])&&se(l,t))return a[t]=3,s[t];if(n!==ve&&se(n,t))return a[t]=4,n[t];sa&&(a[t]=0)}}const u=fr[t];let f,d;if(u)return t==="$attrs"&&Be(e,"get",t),u(e);if((f=c.__cssModules)&&(f=f[t]))return f;if(n!==ve&&se(n,t))return a[t]=4,n[t];if(d=o.config.globalProperties,se(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return Cs(i,t)?(i[t]=n,!0):r!==ve&&se(r,t)?(r[t]=n,!0):se(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let c;return!!n[a]||e!==ve&&se(e,a)||Cs(t,a)||(c=s[0])&&se(c,a)||se(r,a)||se(fr,a)||se(i.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:se(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Xo(e){return V(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let sa=!0;function up(e){const t=eo(e),n=e.proxy,r=e.ctx;sa=!1,t.beforeCreate&&Jo(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:c,provide:o,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:_,activated:I,deactivated:R,beforeDestroy:v,beforeUnmount:y,destroyed:S,unmounted:A,render:M,renderTracked:Y,renderTriggered:q,errorCaptured:T,serverPrefetch:N,expose:K,inheritAttrs:ie,components:F,directives:Q,filters:G}=t;if(l&&fp(l,r,null),a)for(const le in a){const ae=a[le];ee(ae)&&(r[le]=ae.bind(n))}if(i){const le=i.call(n,n);me(le)&&(e.data=Ur(le))}if(sa=!0,s)for(const le in s){const ae=s[le],ht=ee(ae)?ae.bind(n,n):ee(ae.get)?ae.get.bind(n,n):et,St=!ee(ae)&&ee(ae.set)?ae.set.bind(n):et,it=ke({get:ht,set:St});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>it.value,set:Me=>it.value=Me})}if(c)for(const le in c)Mu(c[le],r,n,le);if(o){const le=ee(o)?o.call(n):o;Reflect.ownKeys(le).forEach(ae=>{wi(ae,le[ae])})}u&&Jo(u,e,"c");function X(le,ae){V(ae)?ae.forEach(ht=>le(ht.bind(n))):ae&&le(ae.bind(n))}if(X(tp,f),X(as,d),X(np,m),X(rp,_),X(Tu,I),X(Su,R),X(op,T),X(ap,Y),X(sp,q),X(Ou,y),X(os,A),X(ip,N),V(K))if(K.length){const le=e.exposed||(e.exposed={});K.forEach(ae=>{Object.defineProperty(le,ae,{get:()=>n[ae],set:ht=>n[ae]=ht})})}else e.exposed||(e.exposed={});M&&e.render===et&&(e.render=M),ie!=null&&(e.inheritAttrs=ie),F&&(e.components=F),Q&&(e.directives=Q)}function fp(e,t,n=et){V(e)&&(e=aa(e));for(const r in e){const i=e[r];let s;me(i)?"default"in i?s=Ye(i.from||r,i.default,!0):s=Ye(i.from||r):s=Ye(i),we(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[r]=s}}function Jo(e,t,n){qe(V(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Mu(e,t,n,r){const i=r.includes(".")?xu(n,r):()=>n[r];if(xe(e)){const s=t[e];ee(s)&&vn(i,s)}else if(ee(e))vn(i,e.bind(n));else if(me(e))if(V(e))e.forEach(s=>Mu(s,t,n,r));else{const s=ee(e.handler)?e.handler.bind(n):t[e.handler];ee(s)&&vn(i,s,e)}}function eo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,c=s.get(t);let o;return c?o=c:!i.length&&!n&&!r?o=t:(o={},i.length&&i.forEach(l=>Mi(o,l,a,!0)),Mi(o,t,a)),me(t)&&s.set(t,o),o}function Mi(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Mi(e,s,n,!0),i&&i.forEach(a=>Mi(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const c=dp[a]||n&&n[a];e[a]=c?c(e[a],t[a]):t[a]}return e}const dp={data:Qo,props:Zo,emits:Zo,methods:or,computed:or,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:or,directives:or,watch:pp,provide:Qo,inject:hp};function Qo(e,t){return t?e?function(){return Ce(ee(e)?e.call(this,this):e,ee(t)?t.call(this,this):t)}:t:e}function hp(e,t){return or(aa(e),aa(t))}function aa(e){if(V(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ne(e,t){return e?[...new Set([].concat(e,t))]:t}function or(e,t){return e?Ce(Object.create(null),e,t):t}function Zo(e,t){return e?V(e)&&V(t)?[...new Set([...e,...t])]:Ce(Object.create(null),Xo(e),Xo(t??{})):t}function pp(e,t){if(!e)return t;if(!t)return e;const n=Ce(Object.create(null),e);for(const r in t)n[r]=Ne(e[r],t[r]);return n}function Du(){return{app:null,config:{isNativeTag:$d,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mp=0;function gp(e,t){return function(r,i=null){ee(r)||(r=Ce({},r)),i!=null&&!me(i)&&(i=null);const s=Du(),a=new Set;let c=!1;const o=s.app={_uid:mp++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Kp,get config(){return s.config},set config(l){},use(l,...u){return a.has(l)||(l&&ee(l.install)?(a.add(l),l.install(o,...u)):ee(l)&&(a.add(l),l(o,...u))),o},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),o},component(l,u){return u?(s.components[l]=u,o):s.components[l]},directive(l,u){return u?(s.directives[l]=u,o):s.directives[l]},mount(l,u,f){if(!c){const d=Ee(r,i);return d.appContext=s,u&&t?t(d,l):e(d,l,f),c=!0,o._container=l,l.__vue_app__=o,us(d.component)||d.component.proxy}},unmount(){c&&(e(null,o._container),delete o._container.__vue_app__)},provide(l,u){return s.provides[l]=u,o},runWithContext(l){xr=o;try{return l()}finally{xr=null}}};return o}}let xr=null;function wi(e,t){if(Te){let n=Te.provides;const r=Te.parent&&Te.parent.provides;r===n&&(n=Te.provides=Object.create(r)),n[e]=t}}function Ye(e,t,n=!1){const r=Te||$e;if(r||xr){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:xr._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&ee(t)?t.call(r&&r.proxy):t}}function vp(){return!!(Te||$e||xr)}function bp(e,t,n,r=!1){const i={},s={};Pi(s,ls,1),e.propsDefaults=Object.create(null),Fu(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=r?i:lu(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function yp(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,c=re(i),[o]=e.propsOptions;let l=!1;if((r||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ns(e.emitsOptions,d))continue;const m=t[d];if(o)if(se(s,d))m!==s[d]&&(s[d]=m,l=!0);else{const _=dt(d);i[_]=oa(o,c,_,m,e,!1)}else m!==s[d]&&(s[d]=m,l=!0)}}}else{Fu(e,t,i,s)&&(l=!0);let u;for(const f in c)(!t||!se(t,f)&&((u=Xn(f))===f||!se(t,u)))&&(o?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=oa(o,c,f,void 0,e,!0)):delete i[f]);if(s!==c)for(const f in s)(!t||!se(t,f))&&(delete s[f],l=!0)}l&&wt(e,"set","$attrs")}function Fu(e,t,n,r){const[i,s]=e.propsOptions;let a=!1,c;if(t)for(let o in t){if(bi(o))continue;const l=t[o];let u;i&&se(i,u=dt(o))?!s||!s.includes(u)?n[u]=l:(c||(c={}))[u]=l:ns(e.emitsOptions,o)||(!(o in r)||l!==r[o])&&(r[o]=l,a=!0)}if(s){const o=re(n),l=c||ve;for(let u=0;u<s.length;u++){const f=s[u];n[f]=oa(i,o,f,l[f],e,!se(l,f))}}return a}function oa(e,t,n,r,i,s){const a=e[n];if(a!=null){const c=se(a,"default");if(c&&r===void 0){const o=a.default;if(a.type!==Function&&!a.skipFactory&&ee(o)){const{propsDefaults:l}=i;n in l?r=l[n]:(Vn(i),r=l[n]=o.call(null,t),bn())}else r=o}a[0]&&(s&&!c?r=!1:a[1]&&(r===""||r===Xn(n))&&(r=!0))}return r}function Uu(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},c=[];let o=!1;if(!ee(e)){const u=f=>{o=!0;const[d,m]=Uu(f,t,!0);Ce(a,d),m&&c.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!o)return me(e)&&r.set(e,Dn),Dn;if(V(s))for(let u=0;u<s.length;u++){const f=dt(s[u]);ec(f)&&(a[f]=ve)}else if(s)for(const u in s){const f=dt(u);if(ec(f)){const d=s[u],m=a[f]=V(d)||ee(d)?{type:d}:Ce({},d);if(m){const _=rc(Boolean,m.type),I=rc(String,m.type);m[0]=_>-1,m[1]=I<0||_<I,(_>-1||se(m,"default"))&&c.push(f)}}}const l=[a,c];return me(e)&&r.set(e,l),l}function ec(e){return e[0]!=="$"}function tc(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function nc(e,t){return tc(e)===tc(t)}function rc(e,t){return V(t)?t.findIndex(n=>nc(n,e)):ee(t)&&nc(t,e)?0:-1}const $u=e=>e[0]==="_"||e==="$stable",to=e=>V(e)?e.map(ot):[ot(e)],_p=(e,t,n)=>{if(t._n)return t;const r=gn((...i)=>to(t(...i)),n);return r._c=!1,r},Bu=(e,t,n)=>{const r=e._ctx;for(const i in e){if($u(i))continue;const s=e[i];if(ee(s))t[i]=_p(i,s,r);else if(s!=null){const a=to(s);t[i]=()=>a}}},ju=(e,t)=>{const n=to(t);e.slots.default=()=>n},wp=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=re(t),Pi(t,"_",n)):Bu(t,e.slots={})}else e.slots={},t&&ju(e,t);Pi(e.slots,ls,1)},Ep=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=ve;if(r.shapeFlag&32){const c=t._;c?n&&c===1?s=!1:(Ce(i,t),!n&&c===1&&delete i._):(s=!t.$stable,Bu(t,i)),a=t}else t&&(ju(e,t),a={default:1});if(s)for(const c in i)!$u(c)&&!(c in a)&&delete i[c]};function ca(e,t,n,r,i=!1){if(V(e)){e.forEach((d,m)=>ca(d,t&&(V(t)?t[m]:t),n,r,i));return}if(_i(r)&&!i)return;const s=r.shapeFlag&4?us(r.component)||r.component.proxy:r.el,a=i?null:s,{i:c,r:o}=e,l=t&&t.r,u=c.refs===ve?c.refs={}:c.refs,f=c.setupState;if(l!=null&&l!==o&&(xe(l)?(u[l]=null,se(f,l)&&(f[l]=null)):we(l)&&(l.value=null)),ee(o))Wt(o,c,12,[a,u]);else{const d=xe(o),m=we(o);if(d||m){const _=()=>{if(e.f){const I=d?se(f,o)?f[o]:u[o]:o.value;i?V(I)&&Ua(I,s):V(I)?I.includes(s)||I.push(s):d?(u[o]=[s],se(f,o)&&(f[o]=u[o])):(o.value=[s],e.k&&(u[e.k]=o.value))}else d?(u[o]=a,se(f,o)&&(f[o]=a)):m&&(o.value=a,e.k&&(u[e.k]=a))};a?(_.id=-1,Fe(_,n)):_()}}}const Fe=Yh;function Ip(e){return xp(e)}function xp(e,t){const n=Js();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:c,createComment:o,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=et,insertStaticContent:_}=e,I=(h,p,g,b=null,E=null,x=null,L=!1,C=null,P=!!p.dynamicChildren)=>{if(h===p)return;h&&!ln(h,p)&&(b=w(h),Me(h,E,x,!0),h=null),p.patchFlag===-2&&(P=!1,p.dynamicChildren=null);const{type:k,ref:z,shapeFlag:$}=p;switch(k){case cs:R(h,p,g,b);break;case tt:v(h,p,g,b);break;case Ts:h==null&&y(p,g,b,L);break;case ze:F(h,p,g,b,E,x,L,C,P);break;default:$&1?M(h,p,g,b,E,x,L,C,P):$&6?Q(h,p,g,b,E,x,L,C,P):($&64||$&128)&&k.process(h,p,g,b,E,x,L,C,P,O)}z!=null&&E&&ca(z,h&&h.ref,x,p||h,!p)},R=(h,p,g,b)=>{if(h==null)r(p.el=c(p.children),g,b);else{const E=p.el=h.el;p.children!==h.children&&l(E,p.children)}},v=(h,p,g,b)=>{h==null?r(p.el=o(p.children||""),g,b):p.el=h.el},y=(h,p,g,b)=>{[h.el,h.anchor]=_(h.children,p,g,b,h.el,h.anchor)},S=({el:h,anchor:p},g,b)=>{let E;for(;h&&h!==p;)E=d(h),r(h,g,b),h=E;r(p,g,b)},A=({el:h,anchor:p})=>{let g;for(;h&&h!==p;)g=d(h),i(h),h=g;i(p)},M=(h,p,g,b,E,x,L,C,P)=>{L=L||p.type==="svg",h==null?Y(p,g,b,E,x,L,C,P):N(h,p,E,x,L,C,P)},Y=(h,p,g,b,E,x,L,C)=>{let P,k;const{type:z,props:$,shapeFlag:W,transition:Z,dirs:ne}=h;if(P=h.el=a(h.type,x,$&&$.is,$),W&8?u(P,h.children):W&16&&T(h.children,P,null,b,E,x&&z!=="foreignObject",L,C),ne&&tn(h,null,b,"created"),q(P,h,h.scopeId,L,b),$){for(const de in $)de!=="value"&&!bi(de)&&s(P,de,null,$[de],x,h.children,b,E,Pe);"value"in $&&s(P,"value",null,$.value),(k=$.onVnodeBeforeMount)&&at(k,b,h)}ne&&tn(h,null,b,"beforeMount");const pe=(!E||E&&!E.pendingBranch)&&Z&&!Z.persisted;pe&&Z.beforeEnter(P),r(P,p,g),((k=$&&$.onVnodeMounted)||pe||ne)&&Fe(()=>{k&&at(k,b,h),pe&&Z.enter(P),ne&&tn(h,null,b,"mounted")},E)},q=(h,p,g,b,E)=>{if(g&&m(h,g),b)for(let x=0;x<b.length;x++)m(h,b[x]);if(E){let x=E.subTree;if(p===x){const L=E.vnode;q(h,L,L.scopeId,L.slotScopeIds,E.parent)}}},T=(h,p,g,b,E,x,L,C,P=0)=>{for(let k=P;k<h.length;k++){const z=h[k]=C?Ft(h[k]):ot(h[k]);I(null,z,p,g,b,E,x,L,C)}},N=(h,p,g,b,E,x,L)=>{const C=p.el=h.el;let{patchFlag:P,dynamicChildren:k,dirs:z}=p;P|=h.patchFlag&16;const $=h.props||ve,W=p.props||ve;let Z;g&&nn(g,!1),(Z=W.onVnodeBeforeUpdate)&&at(Z,g,p,h),z&&tn(p,h,g,"beforeUpdate"),g&&nn(g,!0);const ne=E&&p.type!=="foreignObject";if(k?K(h.dynamicChildren,k,C,g,b,ne,x):L||ae(h,p,C,null,g,b,ne,x,!1),P>0){if(P&16)ie(C,p,$,W,g,b,E);else if(P&2&&$.class!==W.class&&s(C,"class",null,W.class,E),P&4&&s(C,"style",$.style,W.style,E),P&8){const pe=p.dynamicProps;for(let de=0;de<pe.length;de++){const Ae=pe[de],Xe=$[Ae],Sn=W[Ae];(Sn!==Xe||Ae==="value")&&s(C,Ae,Xe,Sn,E,h.children,g,b,Pe)}}P&1&&h.children!==p.children&&u(C,p.children)}else!L&&k==null&&ie(C,p,$,W,g,b,E);((Z=W.onVnodeUpdated)||z)&&Fe(()=>{Z&&at(Z,g,p,h),z&&tn(p,h,g,"updated")},b)},K=(h,p,g,b,E,x,L)=>{for(let C=0;C<p.length;C++){const P=h[C],k=p[C],z=P.el&&(P.type===ze||!ln(P,k)||P.shapeFlag&70)?f(P.el):g;I(P,k,z,null,b,E,x,L,!0)}},ie=(h,p,g,b,E,x,L)=>{if(g!==b){if(g!==ve)for(const C in g)!bi(C)&&!(C in b)&&s(h,C,g[C],null,L,p.children,E,x,Pe);for(const C in b){if(bi(C))continue;const P=b[C],k=g[C];P!==k&&C!=="value"&&s(h,C,k,P,L,p.children,E,x,Pe)}"value"in b&&s(h,"value",g.value,b.value)}},F=(h,p,g,b,E,x,L,C,P)=>{const k=p.el=h?h.el:c(""),z=p.anchor=h?h.anchor:c("");let{patchFlag:$,dynamicChildren:W,slotScopeIds:Z}=p;Z&&(C=C?C.concat(Z):Z),h==null?(r(k,g,b),r(z,g,b),T(p.children,g,z,E,x,L,C,P)):$>0&&$&64&&W&&h.dynamicChildren?(K(h.dynamicChildren,W,g,E,x,L,C),(p.key!=null||E&&p===E.subTree)&&no(h,p,!0)):ae(h,p,g,z,E,x,L,C,P)},Q=(h,p,g,b,E,x,L,C,P)=>{p.slotScopeIds=C,h==null?p.shapeFlag&512?E.ctx.activate(p,g,b,L,P):G(p,g,b,E,x,L,P):ge(h,p,P)},G=(h,p,g,b,E,x,L)=>{const C=h.component=Dp(h,b,E);if(is(h)&&(C.ctx.renderer=O),Up(C),C.asyncDep){if(E&&E.registerDep(C,X),!h.el){const P=C.subTree=Ee(tt);v(null,P,p,g)}return}X(C,h,p,g,E,x,L)},ge=(h,p,g)=>{const b=p.component=h.component;if(Vh(h,p,g))if(b.asyncDep&&!b.asyncResolved){le(b,p,g);return}else b.next=p,$h(b.update),b.update();else p.el=h.el,b.vnode=p},X=(h,p,g,b,E,x,L)=>{const C=()=>{if(h.isMounted){let{next:z,bu:$,u:W,parent:Z,vnode:ne}=h,pe=z,de;nn(h,!1),z?(z.el=ne.el,le(h,z,L)):z=ne,$&&yi($),(de=z.props&&z.props.onVnodeBeforeUpdate)&&at(de,Z,z,ne),nn(h,!0);const Ae=ks(h),Xe=h.subTree;h.subTree=Ae,I(Xe,Ae,f(Xe.el),w(Xe),h,E,x),z.el=Ae.el,pe===null&&Kh(h,Ae.el),W&&Fe(W,E),(de=z.props&&z.props.onVnodeUpdated)&&Fe(()=>at(de,Z,z,ne),E)}else{let z;const{el:$,props:W}=p,{bm:Z,m:ne,parent:pe}=h,de=_i(p);if(nn(h,!1),Z&&yi(Z),!de&&(z=W&&W.onVnodeBeforeMount)&&at(z,pe,p),nn(h,!0),$&&ce){const Ae=()=>{h.subTree=ks(h),ce($,h.subTree,h,E,null)};de?p.type.__asyncLoader().then(()=>!h.isUnmounted&&Ae()):Ae()}else{const Ae=h.subTree=ks(h);I(null,Ae,g,b,h,E,x),p.el=Ae.el}if(ne&&Fe(ne,E),!de&&(z=W&&W.onVnodeMounted)){const Ae=p;Fe(()=>at(z,pe,Ae),E)}(p.shapeFlag&256||pe&&_i(pe.vnode)&&pe.vnode.shapeFlag&256)&&h.a&&Fe(h.a,E),h.isMounted=!0,p=g=b=null}},P=h.effect=new za(C,()=>Ja(k),h.scope),k=h.update=()=>P.run();k.id=h.uid,nn(h,!0),k()},le=(h,p,g)=>{p.component=h;const b=h.vnode.props;h.vnode=p,h.next=null,yp(h,p.props,b,g),Ep(h,p.children,g),Jn(),Ko(),Qn()},ae=(h,p,g,b,E,x,L,C,P=!1)=>{const k=h&&h.children,z=h?h.shapeFlag:0,$=p.children,{patchFlag:W,shapeFlag:Z}=p;if(W>0){if(W&128){St(k,$,g,b,E,x,L,C,P);return}else if(W&256){ht(k,$,g,b,E,x,L,C,P);return}}Z&8?(z&16&&Pe(k,E,x),$!==k&&u(g,$)):z&16?Z&16?St(k,$,g,b,E,x,L,C,P):Pe(k,E,x,!0):(z&8&&u(g,""),Z&16&&T($,g,b,E,x,L,C,P))},ht=(h,p,g,b,E,x,L,C,P)=>{h=h||Dn,p=p||Dn;const k=h.length,z=p.length,$=Math.min(k,z);let W;for(W=0;W<$;W++){const Z=p[W]=P?Ft(p[W]):ot(p[W]);I(h[W],Z,g,null,E,x,L,C,P)}k>z?Pe(h,E,x,!0,!1,$):T(p,g,b,E,x,L,C,P,$)},St=(h,p,g,b,E,x,L,C,P)=>{let k=0;const z=p.length;let $=h.length-1,W=z-1;for(;k<=$&&k<=W;){const Z=h[k],ne=p[k]=P?Ft(p[k]):ot(p[k]);if(ln(Z,ne))I(Z,ne,g,null,E,x,L,C,P);else break;k++}for(;k<=$&&k<=W;){const Z=h[$],ne=p[W]=P?Ft(p[W]):ot(p[W]);if(ln(Z,ne))I(Z,ne,g,null,E,x,L,C,P);else break;$--,W--}if(k>$){if(k<=W){const Z=W+1,ne=Z<z?p[Z].el:b;for(;k<=W;)I(null,p[k]=P?Ft(p[k]):ot(p[k]),g,ne,E,x,L,C,P),k++}}else if(k>W)for(;k<=$;)Me(h[k],E,x,!0),k++;else{const Z=k,ne=k,pe=new Map;for(k=ne;k<=W;k++){const je=p[k]=P?Ft(p[k]):ot(p[k]);je.key!=null&&pe.set(je.key,k)}let de,Ae=0;const Xe=W-ne+1;let Sn=!1,Mo=0;const tr=new Array(Xe);for(k=0;k<Xe;k++)tr[k]=0;for(k=Z;k<=$;k++){const je=h[k];if(Ae>=Xe){Me(je,E,x,!0);continue}let st;if(je.key!=null)st=pe.get(je.key);else for(de=ne;de<=W;de++)if(tr[de-ne]===0&&ln(je,p[de])){st=de;break}st===void 0?Me(je,E,x,!0):(tr[st-ne]=k+1,st>=Mo?Mo=st:Sn=!0,I(je,p[st],g,null,E,x,L,C,P),Ae++)}const Do=Sn?kp(tr):Dn;for(de=Do.length-1,k=Xe-1;k>=0;k--){const je=ne+k,st=p[je],Fo=je+1<z?p[je+1].el:b;tr[k]===0?I(null,st,g,Fo,E,x,L,C,P):Sn&&(de<0||k!==Do[de]?it(st,g,Fo,2):de--)}}},it=(h,p,g,b,E=null)=>{const{el:x,type:L,transition:C,children:P,shapeFlag:k}=h;if(k&6){it(h.component.subTree,p,g,b);return}if(k&128){h.suspense.move(p,g,b);return}if(k&64){L.move(h,p,g,O);return}if(L===ze){r(x,p,g);for(let $=0;$<P.length;$++)it(P[$],p,g,b);r(h.anchor,p,g);return}if(L===Ts){S(h,p,g);return}if(b!==2&&k&1&&C)if(b===0)C.beforeEnter(x),r(x,p,g),Fe(()=>C.enter(x),E);else{const{leave:$,delayLeave:W,afterLeave:Z}=C,ne=()=>r(x,p,g),pe=()=>{$(x,()=>{ne(),Z&&Z()})};W?W(x,ne,pe):pe()}else r(x,p,g)},Me=(h,p,g,b=!1,E=!1)=>{const{type:x,props:L,ref:C,children:P,dynamicChildren:k,shapeFlag:z,patchFlag:$,dirs:W}=h;if(C!=null&&ca(C,null,g,h,!0),z&256){p.ctx.deactivate(h);return}const Z=z&1&&W,ne=!_i(h);let pe;if(ne&&(pe=L&&L.onVnodeBeforeUnmount)&&at(pe,p,h),z&6)Xr(h.component,g,b);else{if(z&128){h.suspense.unmount(g,b);return}Z&&tn(h,null,p,"beforeUnmount"),z&64?h.type.remove(h,p,g,E,O,b):k&&(x!==ze||$>0&&$&64)?Pe(k,p,g,!1,!0):(x===ze&&$&384||!E&&z&16)&&Pe(P,p,g),b&&Cn(h)}(ne&&(pe=L&&L.onVnodeUnmounted)||Z)&&Fe(()=>{pe&&at(pe,p,h),Z&&tn(h,null,p,"unmounted")},g)},Cn=h=>{const{type:p,el:g,anchor:b,transition:E}=h;if(p===ze){Tn(g,b);return}if(p===Ts){A(h);return}const x=()=>{i(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(h.shapeFlag&1&&E&&!E.persisted){const{leave:L,delayLeave:C}=E,P=()=>L(g,x);C?C(h.el,x,P):P()}else x()},Tn=(h,p)=>{let g;for(;h!==p;)g=d(h),i(h),h=g;i(p)},Xr=(h,p,g)=>{const{bum:b,scope:E,update:x,subTree:L,um:C}=h;b&&yi(b),E.stop(),x&&(x.active=!1,Me(L,h,p,g)),C&&Fe(C,p),Fe(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Pe=(h,p,g,b=!1,E=!1,x=0)=>{for(let L=x;L<h.length;L++)Me(h[L],p,g,b,E)},w=h=>h.shapeFlag&6?w(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),U=(h,p,g)=>{h==null?p._vnode&&Me(p._vnode,null,null,!0):I(p._vnode||null,h,p,null,null,null,g),Ko(),yu(),p._vnode=h},O={p:I,um:Me,m:it,r:Cn,mt:G,mc:T,pc:ae,pbc:K,n:w,o:e};let H,ce;return t&&([H,ce]=t(O)),{render:U,hydrate:H,createApp:gp(U,H)}}function nn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function no(e,t,n=!1){const r=e.children,i=t.children;if(V(r)&&V(i))for(let s=0;s<r.length;s++){const a=r[s];let c=i[s];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[s]=Ft(i[s]),c.el=a.el),n||no(a,c)),c.type===cs&&(c.el=a.el)}}function kp(e){const t=e.slice(),n=[0];let r,i,s,a,c;const o=e.length;for(r=0;r<o;r++){const l=e[r];if(l!==0){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)c=s+a>>1,e[n[c]]<l?s=c+1:a=c;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}const Ap=e=>e.__isTeleport,dr=e=>e&&(e.disabled||e.disabled===""),ic=e=>typeof SVGElement<"u"&&e instanceof SVGElement,la=(e,t)=>{const n=e&&e.to;return xe(n)?t?t(n):null:n},Cp={__isTeleport:!0,process(e,t,n,r,i,s,a,c,o,l){const{mc:u,pc:f,pbc:d,o:{insert:m,querySelector:_,createText:I,createComment:R}}=l,v=dr(t.props);let{shapeFlag:y,children:S,dynamicChildren:A}=t;if(e==null){const M=t.el=I(""),Y=t.anchor=I("");m(M,n,r),m(Y,n,r);const q=t.target=la(t.props,_),T=t.targetAnchor=I("");q&&(m(T,q),a=a||ic(q));const N=(K,ie)=>{y&16&&u(S,K,ie,i,s,a,c,o)};v?N(n,Y):q&&N(q,T)}else{t.el=e.el;const M=t.anchor=e.anchor,Y=t.target=e.target,q=t.targetAnchor=e.targetAnchor,T=dr(e.props),N=T?n:Y,K=T?M:q;if(a=a||ic(Y),A?(d(e.dynamicChildren,A,N,i,s,a,c),no(e,t,!0)):o||f(e,t,N,K,i,s,a,c,!1),v)T||ii(t,n,M,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const ie=t.target=la(t.props,_);ie&&ii(t,ie,null,l,0)}else T&&ii(t,Y,q,l,1)}Hu(t)},remove(e,t,n,r,{um:i,o:{remove:s}},a){const{shapeFlag:c,children:o,anchor:l,targetAnchor:u,target:f,props:d}=e;if(f&&s(u),(a||!dr(d))&&(s(l),c&16))for(let m=0;m<o.length;m++){const _=o[m];i(_,t,n,!0,!!_.dynamicChildren)}},move:ii,hydrate:Tp};function ii(e,t,n,{o:{insert:r},m:i},s=2){s===0&&r(e.targetAnchor,t,n);const{el:a,anchor:c,shapeFlag:o,children:l,props:u}=e,f=s===2;if(f&&r(a,t,n),(!f||dr(u))&&o&16)for(let d=0;d<l.length;d++)i(l[d],t,n,2);f&&r(c,t,n)}function Tp(e,t,n,r,i,s,{o:{nextSibling:a,parentNode:c,querySelector:o}},l){const u=t.target=la(t.props,o);if(u){const f=u._lpa||u.firstChild;if(t.shapeFlag&16)if(dr(t.props))t.anchor=l(a(e),t,c(e),n,r,i,s),t.targetAnchor=f;else{t.anchor=a(e);let d=f;for(;d;)if(d=a(d),d&&d.nodeType===8&&d.data==="teleport anchor"){t.targetAnchor=d,u._lpa=t.targetAnchor&&a(t.targetAnchor);break}l(f,t,u,n,r,i,s)}Hu(t)}return t.anchor&&a(t.anchor)}const Sp=Cp;function Hu(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const ze=Symbol.for("v-fgt"),cs=Symbol.for("v-txt"),tt=Symbol.for("v-cmt"),Ts=Symbol.for("v-stc"),hr=[];let Qe=null;function fe(e=!1){hr.push(Qe=e?null:[])}function Pp(){hr.pop(),Qe=hr[hr.length-1]||null}let kr=1;function sc(e){kr+=e}function zu(e){return e.dynamicChildren=kr>0?Qe||Dn:null,Pp(),kr>0&&Qe&&Qe.push(e),e}function Le(e,t,n,r,i,s){return zu(j(e,t,n,r,i,s,!0))}function Ue(e,t,n,r,i){return zu(Ee(e,t,n,r,i,!0))}function ua(e){return e?e.__v_isVNode===!0:!1}function ln(e,t){return e.type===t.type&&e.key===t.key}const ls="__vInternal",Wu=({key:e})=>e??null,Ei=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?xe(e)||we(e)||ee(e)?{i:$e,r:e,k:t,f:!!n}:e:null);function j(e,t=null,n=null,r=0,i=null,s=e===ze?0:1,a=!1,c=!1){const o={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Wu(t),ref:t&&Ei(t),scopeId:rs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:$e};return c?(ro(o,n),s&128&&e.normalize(o)):n&&(o.shapeFlag|=xe(n)?8:16),kr>0&&!a&&Qe&&(o.patchFlag>0||s&6)&&o.patchFlag!==32&&Qe.push(o),o}const Ee=Op;function Op(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===Ru)&&(e=tt),ua(e)){const c=Yt(e,t,!0);return n&&ro(c,n),kr>0&&!s&&Qe&&(c.shapeFlag&6?Qe[Qe.indexOf(e)]=c:Qe.push(c)),c.patchFlag|=-2,c}if(zp(e)&&(e=e.__vccOpts),t){t=Rp(t);let{class:c,style:o}=t;c&&!xe(c)&&(t.class=te(c)),me(o)&&(fu(o)&&!V(o)&&(o=Ce({},o)),t.style=ja(o))}const a=xe(e)?1:qh(e)?128:Ap(e)?64:me(e)?4:ee(e)?2:0;return j(e,t,n,r,i,a,s,!0)}function Rp(e){return e?fu(e)||ls in e?Ce({},e):e:null}function Yt(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:a}=e,c=t?Np(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Wu(c),ref:t&&t.ref?n&&i?V(i)?i.concat(Ei(t)):[i,Ei(t)]:Ei(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ze?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Yt(e.ssContent),ssFallback:e.ssFallback&&Yt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ht(e=" ",t=0){return Ee(cs,null,e,t)}function Ii(e="",t=!1){return t?(fe(),Ue(tt,null,e)):Ee(tt,null,e)}function ot(e){return e==null||typeof e=="boolean"?Ee(tt):V(e)?Ee(ze,null,e.slice()):typeof e=="object"?Ft(e):Ee(cs,null,String(e))}function Ft(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Yt(e)}function ro(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(V(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),ro(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(ls in t)?t._ctx=$e:i===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ee(t)?(t={default:t,_ctx:$e},n=32):(t=String(t),r&64?(n=16,t=[Ht(t)]):n=8);e.children=t,e.shapeFlag|=n}function Np(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=te([t.class,r.class]));else if(i==="style")t.style=ja([t.style,r.style]);else if(Xi(i)){const s=t[i],a=r[i];a&&s!==a&&!(V(s)&&s.includes(a))&&(t[i]=s?[].concat(s,a):a)}else i!==""&&(t[i]=r[i])}return t}function at(e,t,n,r=null){qe(e,t,7,[n,r])}const Lp=Du();let Mp=0;function Dp(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Lp,s={uid:Mp++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Xl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uu(r,i),emitsOptions:wu(r,i),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:r.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Hh.bind(null,s),e.ce&&e.ce(s),s}let Te=null;const Fp=()=>Te||$e;let io,Pn,ac="__VUE_INSTANCE_SETTERS__";(Pn=Js()[ac])||(Pn=Js()[ac]=[]),Pn.push(e=>Te=e),io=e=>{Pn.length>1?Pn.forEach(t=>t(e)):Pn[0](e)};const Vn=e=>{io(e),e.scope.on()},bn=()=>{Te&&Te.scope.off(),io(null)};function Vu(e){return e.vnode.shapeFlag&4}let Ar=!1;function Up(e,t=!1){Ar=t;const{props:n,children:r}=e.vnode,i=Vu(e);bp(e,n,i,t),wp(e,r);const s=i?$p(e,t):void 0;return Ar=!1,s}function $p(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=$r(new Proxy(e.ctx,lp));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?jp(e):null;Vn(e),Jn();const s=Wt(r,e,0,[e.props,i]);if(Qn(),bn(),Vl(s)){if(s.then(bn,bn),t)return s.then(a=>{oc(e,a,t)}).catch(a=>{ts(a,e,0)});e.asyncDep=s}else oc(e,s,t)}else Ku(e,t)}function oc(e,t,n){ee(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:me(t)&&(e.setupState=mu(t)),Ku(e,n)}let cc;function Ku(e,t,n){const r=e.type;if(!e.render){if(!t&&cc&&!r.render){const i=r.template||eo(e).template;if(i){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:c,compilerOptions:o}=r,l=Ce(Ce({isCustomElement:s,delimiters:c},a),o);r.render=cc(i,l)}}e.render=r.render||et}Vn(e),Jn(),up(e),Qn(),bn()}function Bp(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Be(e,"get","$attrs"),t[n]}}))}function jp(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Bp(e)},slots:e.slots,emit:e.emit,expose:t}}function us(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(mu($r(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in fr)return fr[n](e)},has(t,n){return n in t||n in fr}}))}function Hp(e,t=!0){return ee(e)?e.displayName||e.name:e.name||t&&e.__name}function zp(e){return ee(e)&&"__vccOpts"in e}const ke=(e,t)=>Dh(e,t,Ar);function fs(e,t,n){const r=arguments.length;return r===2?me(t)&&!V(t)?ua(t)?Ee(e,null,[t]):Ee(e,t):Ee(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ua(n)&&(n=[n]),Ee(e,t,n))}const Wp=Symbol.for("v-scx"),Vp=()=>Ye(Wp),Kp="3.3.4",qp="http://www.w3.org/2000/svg",un=typeof document<"u"?document:null,lc=un&&un.createElement("template"),Yp={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?un.createElementNS(qp,e):un.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>un.createTextNode(e),createComment:e=>un.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>un.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const a=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{lc.innerHTML=r?`<svg>${e}</svg>`:e;const c=lc.content;if(r){const o=c.firstChild;for(;o.firstChild;)c.appendChild(o.firstChild);c.removeChild(o)}t.insertBefore(c,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Gp(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Xp(e,t,n){const r=e.style,i=xe(n);if(n&&!i){if(t&&!xe(t))for(const s in t)n[s]==null&&fa(r,s,"");for(const s in n)fa(r,s,n[s])}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const uc=/\s*!important$/;function fa(e,t,n){if(V(n))n.forEach(r=>fa(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Jp(e,t);uc.test(n)?e.setProperty(Xn(r),n.replace(uc,""),"important"):e[r]=n}}const fc=["Webkit","Moz","ms"],Ss={};function Jp(e,t){const n=Ss[t];if(n)return n;let r=dt(t);if(r!=="filter"&&r in e)return Ss[t]=r;r=Zi(r);for(let i=0;i<fc.length;i++){const s=fc[i]+r;if(s in e)return Ss[t]=s}return t}const dc="http://www.w3.org/1999/xlink";function Qp(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(dc,t.slice(6,t.length)):e.setAttributeNS(dc,t,n);else{const s=Jd(t);n==null||s&&!Yl(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Zp(e,t,n,r,i,s,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,i,s),e[t]=n??"";return}const c=e.tagName;if(t==="value"&&c!=="PROGRESS"&&!c.includes("-")){e._value=n;const l=c==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Yl(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(t)}function Rn(e,t,n,r){e.addEventListener(t,n,r)}function em(e,t,n,r){e.removeEventListener(t,n,r)}function tm(e,t,n,r,i=null){const s=e._vei||(e._vei={}),a=s[t];if(r&&a)a.value=r;else{const[c,o]=nm(t);if(r){const l=s[t]=sm(r,i);Rn(e,c,l,o)}else a&&(em(e,c,a,o),s[t]=void 0)}}const hc=/(?:Once|Passive|Capture)$/;function nm(e){let t;if(hc.test(e)){t={};let r;for(;r=e.match(hc);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Xn(e.slice(2)),t]}let Ps=0;const rm=Promise.resolve(),im=()=>Ps||(rm.then(()=>Ps=0),Ps=Date.now());function sm(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;qe(am(r,n.value),t,5,[r])};return n.value=e,n.attached=im(),n}function am(e,t){if(V(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const pc=/^on[a-z]/,om=(e,t,n,r,i=!1,s,a,c,o)=>{t==="class"?Gp(e,r,i):t==="style"?Xp(e,n,r):Xi(t)?Fa(t)||tm(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):cm(e,t,r,i))?Zp(e,t,r,s,a,c,o):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Qp(e,t,r,i))};function cm(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&pc.test(t)&&ee(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||pc.test(t)&&xe(n)?!1:t in e}const Ot="transition",nr="animation",ds=(e,{slots:t})=>fs(Zh,lm(e),t);ds.displayName="Transition";const qu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ds.props=Ce({},ku,qu);const rn=(e,t=[])=>{V(e)?e.forEach(n=>n(...t)):e&&e(...t)},mc=e=>e?V(e)?e.some(t=>t.length>1):e.length>1:!1;function lm(e){const t={};for(const F in e)F in qu||(t[F]=e[F]);if(e.css===!1)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:o=s,appearActiveClass:l=a,appearToClass:u=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,_=um(i),I=_&&_[0],R=_&&_[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:S,onLeave:A,onLeaveCancelled:M,onBeforeAppear:Y=v,onAppear:q=y,onAppearCancelled:T=S}=t,N=(F,Q,G)=>{sn(F,Q?u:c),sn(F,Q?l:a),G&&G()},K=(F,Q)=>{F._isLeaving=!1,sn(F,f),sn(F,m),sn(F,d),Q&&Q()},ie=F=>(Q,G)=>{const ge=F?q:y,X=()=>N(Q,F,G);rn(ge,[Q,X]),gc(()=>{sn(Q,F?o:s),Rt(Q,F?u:c),mc(ge)||vc(Q,r,I,X)})};return Ce(t,{onBeforeEnter(F){rn(v,[F]),Rt(F,s),Rt(F,a)},onBeforeAppear(F){rn(Y,[F]),Rt(F,o),Rt(F,l)},onEnter:ie(!1),onAppear:ie(!0),onLeave(F,Q){F._isLeaving=!0;const G=()=>K(F,Q);Rt(F,f),hm(),Rt(F,d),gc(()=>{F._isLeaving&&(sn(F,f),Rt(F,m),mc(A)||vc(F,r,R,G))}),rn(A,[F,G])},onEnterCancelled(F){N(F,!1),rn(S,[F])},onAppearCancelled(F){N(F,!0),rn(T,[F])},onLeaveCancelled(F){K(F),rn(M,[F])}})}function um(e){if(e==null)return null;if(me(e))return[Os(e.enter),Os(e.leave)];{const t=Os(e);return[t,t]}}function Os(e){return Vd(e)}function Rt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function sn(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function gc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let fm=0;function vc(e,t,n,r){const i=e._endId=++fm,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:a,timeout:c,propCount:o}=dm(e,t);if(!a)return r();const l=a+"end";let u=0;const f=()=>{e.removeEventListener(l,d),s()},d=m=>{m.target===e&&++u>=o&&f()};setTimeout(()=>{u<o&&f()},c+1),e.addEventListener(l,d)}function dm(e,t){const n=window.getComputedStyle(e),r=_=>(n[_]||"").split(", "),i=r(`${Ot}Delay`),s=r(`${Ot}Duration`),a=bc(i,s),c=r(`${nr}Delay`),o=r(`${nr}Duration`),l=bc(c,o);let u=null,f=0,d=0;t===Ot?a>0&&(u=Ot,f=a,d=s.length):t===nr?l>0&&(u=nr,f=l,d=o.length):(f=Math.max(a,l),u=f>0?a>l?Ot:nr:null,d=u?u===Ot?s.length:o.length:0);const m=u===Ot&&/\b(transform|all)(,|$)/.test(r(`${Ot}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:m}}function bc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>yc(n)+yc(e[r])))}function yc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function hm(){return document.body.offsetHeight}const _c=e=>{const t=e.props["onUpdate:modelValue"]||!1;return V(t)?n=>yi(t,n):t};function pm(e){e.target.composing=!0}function wc(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const si={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=_c(i);const s=r||i.props&&i.props.type==="number";Rn(e,t?"change":"input",a=>{if(a.target.composing)return;let c=e.value;n&&(c=c.trim()),s&&(c=Xs(c)),e._assign(c)}),n&&Rn(e,"change",()=>{e.value=e.value.trim()}),t||(Rn(e,"compositionstart",pm),Rn(e,"compositionend",wc),Rn(e,"change",wc))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e._assign=_c(s),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(i||e.type==="number")&&Xs(e.value)===t))return;const a=t??"";e.value!==a&&(e.value=a)}},mm=["ctrl","shift","alt","meta"],gm={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>mm.some(n=>e[`${n}Key`]&&!t.includes(n))},Ec=(e,t)=>(n,...r)=>{for(let i=0;i<t.length;i++){const s=gm[t[i]];if(s&&s(n,t))return}return e(n,...r)},vm=Ce({patchProp:om},Yp);let Ic;function bm(){return Ic||(Ic=Ip(vm))}const ym=(...e)=>{const t=bm().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=_m(r);if(!i)return;const s=t._component;!ee(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function _m(e){return xe(e)?document.querySelector(e):e}var wm=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Yu;const hs=e=>Yu=e,Gu=Symbol();function da(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var pr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(pr||(pr={}));function Em(){const e=Jl(!0),t=e.run(()=>oe({}));let n=[],r=[];const i=$r({install(s){hs(i),i._a=s,s.provide(Gu,i),s.config.globalProperties.$pinia=i,r.forEach(a=>n.push(a)),r=[]},use(s){return!this._a&&!wm?r.push(s):n.push(s),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}const Xu=()=>{};function xc(e,t,n,r=Xu){e.push(t);const i=()=>{const s=e.indexOf(t);s>-1&&(e.splice(s,1),r())};return!n&&Ql()&&Zd(i),i}function On(e,...t){e.slice().forEach(n=>{n(...t)})}const Im=e=>e();function ha(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],i=e[n];da(i)&&da(r)&&e.hasOwnProperty(n)&&!we(r)&&!_t(r)?e[n]=ha(i,r):e[n]=r}return e}const xm=Symbol();function km(e){return!da(e)||!e.hasOwnProperty(xm)}const{assign:Dt}=Object;function Am(e){return!!(we(e)&&e.effect)}function Cm(e,t,n,r){const{state:i,actions:s,getters:a}=t,c=n.state.value[e];let o;function l(){c||(n.state.value[e]=i?i():{});const u=Oh(n.state.value[e]);return Dt(u,s,Object.keys(a||{}).reduce((f,d)=>(f[d]=$r(ke(()=>{hs(n);const m=n._s.get(e);return a[d].call(m,m)})),f),{}))}return o=Ju(e,l,t,n,r,!0),o}function Ju(e,t,n={},r,i,s){let a;const c=Dt({actions:{}},n),o={deep:!0};let l,u,f=[],d=[],m;const _=r.state.value[e];!s&&!_&&(r.state.value[e]={}),oe({});let I;function R(T){let N;l=u=!1,typeof T=="function"?(T(r.state.value[e]),N={type:pr.patchFunction,storeId:e,events:m}):(ha(r.state.value[e],T),N={type:pr.patchObject,payload:T,storeId:e,events:m});const K=I=Symbol();Xa().then(()=>{I===K&&(l=!0)}),u=!0,On(f,N,r.state.value[e])}const v=s?function(){const{state:N}=n,K=N?N():{};this.$patch(ie=>{Dt(ie,K)})}:Xu;function y(){a.stop(),f=[],d=[],r._s.delete(e)}function S(T,N){return function(){hs(r);const K=Array.from(arguments),ie=[],F=[];function Q(X){ie.push(X)}function G(X){F.push(X)}On(d,{args:K,name:T,store:M,after:Q,onError:G});let ge;try{ge=N.apply(this&&this.$id===e?this:M,K)}catch(X){throw On(F,X),X}return ge instanceof Promise?ge.then(X=>(On(ie,X),X)).catch(X=>(On(F,X),Promise.reject(X))):(On(ie,ge),ge)}}const A={_p:r,$id:e,$onAction:xc.bind(null,d),$patch:R,$reset:v,$subscribe(T,N={}){const K=xc(f,T,N.detached,()=>ie()),ie=a.run(()=>vn(()=>r.state.value[e],F=>{(N.flush==="sync"?u:l)&&T({storeId:e,type:pr.direct,events:m},F)},Dt({},o,N)));return K},$dispose:y},M=Ur(A);r._s.set(e,M);const Y=r._a&&r._a.runWithContext||Im,q=r._e.run(()=>(a=Jl(),Y(()=>a.run(t))));for(const T in q){const N=q[T];if(we(N)&&!Am(N)||_t(N))s||(_&&km(N)&&(we(N)?N.value=_[T]:ha(N,_[T])),r.state.value[e][T]=N);else if(typeof N=="function"){const K=S(T,N);q[T]=K,c.actions[T]=N}}return Dt(M,q),Dt(re(M),q),Object.defineProperty(M,"$state",{get:()=>r.state.value[e],set:T=>{R(N=>{Dt(N,T)})}}),r._p.forEach(T=>{Dt(M,a.run(()=>T({store:M,app:r._a,pinia:r,options:c})))}),_&&s&&n.hydrate&&n.hydrate(M.$state,_),l=!0,u=!0,M}function Qu(e,t,n){let r,i;const s=typeof t=="function";typeof e=="string"?(r=e,i=s?n:t):(i=e,r=e.id);function a(c,o){const l=vp();return c=c||(l?Ye(Gu,null):null),c&&hs(c),c=Yu,c._s.has(r)||(s?Ju(r,t,i,c):Cm(r,i,c)),c._s.get(r)}return a.$id=r,a}function so(e){{e=re(e);const t={};for(const n in e){const r=e[n];(we(r)||_t(r))&&(t[n]=Lh(e,n))}return t}}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Nn=typeof window<"u";function Tm(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ue=Object.assign;function Rs(e,t){const n={};for(const r in t){const i=t[r];n[r]=nt(i)?i.map(e):e(i)}return n}const mr=()=>{},nt=Array.isArray,Sm=/\/$/,Pm=e=>e.replace(Sm,"");function Ns(e,t,n="/"){let r,i={},s="",a="";const c=t.indexOf("#");let o=t.indexOf("?");return c<o&&c>=0&&(o=-1),o>-1&&(r=t.slice(0,o),s=t.slice(o+1,c>-1?c:t.length),i=e(s)),c>-1&&(r=r||t.slice(0,c),a=t.slice(c,t.length)),r=Lm(r??t,n),{fullPath:r+(s&&"?")+s+a,path:r,query:i,hash:a}}function Om(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function kc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Rm(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Kn(t.matched[r],n.matched[i])&&Zu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Kn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Zu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Nm(e[n],t[n]))return!1;return!0}function Nm(e,t){return nt(e)?Ac(e,t):nt(t)?Ac(t,e):e===t}function Ac(e,t){return nt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Lm(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,a,c;for(a=0;a<r.length;a++)if(c=r[a],c!==".")if(c==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}var Cr;(function(e){e.pop="pop",e.push="push"})(Cr||(Cr={}));var gr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(gr||(gr={}));function Mm(e){if(!e)if(Nn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Pm(e)}const Dm=/^[^#]+#/;function Fm(e,t){return e.replace(Dm,"#")+t}function Um(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ps=()=>({left:window.pageXOffset,top:window.pageYOffset});function $m(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Um(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Cc(e,t){return(history.state?history.state.position-t:-1)+e}const pa=new Map;function Bm(e,t){pa.set(e,t)}function jm(e){const t=pa.get(e);return pa.delete(e),t}let Hm=()=>location.protocol+"//"+location.host;function ef(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let c=i.includes(e.slice(s))?e.slice(s).length:1,o=i.slice(c);return o[0]!=="/"&&(o="/"+o),kc(o,"")}return kc(n,e)+r+i}function zm(e,t,n,r){let i=[],s=[],a=null;const c=({state:d})=>{const m=ef(e,location),_=n.value,I=t.value;let R=0;if(d){if(n.value=m,t.value=d,a&&a===_){a=null;return}R=I?d.position-I.position:0}else r(m);i.forEach(v=>{v(n.value,_,{delta:R,type:Cr.pop,direction:R?R>0?gr.forward:gr.back:gr.unknown})})};function o(){a=n.value}function l(d){i.push(d);const m=()=>{const _=i.indexOf(d);_>-1&&i.splice(_,1)};return s.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(ue({},d.state,{scroll:ps()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:o,listen:l,destroy:f}}function Tc(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?ps():null}}function Wm(e){const{history:t,location:n}=window,r={value:ef(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(o,l,u){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+o:Hm()+e+o;try{t[u?"replaceState":"pushState"](l,"",d),i.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function a(o,l){const u=ue({},t.state,Tc(i.value.back,o,i.value.forward,!0),l,{position:i.value.position});s(o,u,!0),r.value=o}function c(o,l){const u=ue({},i.value,t.state,{forward:o,scroll:ps()});s(u.current,u,!0);const f=ue({},Tc(r.value,o,null),{position:u.position+1},l);s(o,f,!1),r.value=o}return{location:r,state:i,push:c,replace:a}}function Vm(e){e=Mm(e);const t=Wm(e),n=zm(e,t.state,t.location,t.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=ue({location:"",base:e,go:r,createHref:Fm.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Km(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Vm(e)}function qm(e){return typeof e=="string"||e&&typeof e=="object"}function tf(e){return typeof e=="string"||typeof e=="symbol"}const Nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},nf=Symbol("");var Sc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Sc||(Sc={}));function qn(e,t){return ue(new Error,{type:e,[nf]:!0},t)}function pt(e,t){return e instanceof Error&&nf in e&&(t==null||!!(e.type&t))}const Pc="[^/]+?",Ym={sensitive:!1,strict:!1,start:!0,end:!0},Gm=/[.+*?^${}()[\]/\\]/g;function Xm(e,t){const n=ue({},Ym,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let f=0;f<l.length;f++){const d=l[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(i+="/"),i+=d.value.replace(Gm,"\\$&"),m+=40;else if(d.type===1){const{value:_,repeatable:I,optional:R,regexp:v}=d;s.push({name:_,repeatable:I,optional:R});const y=v||Pc;if(y!==Pc){m+=10;try{new RegExp(`(${y})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${_}" (${y}): `+A.message)}}let S=I?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(S=R&&l.length<2?`(?:/${S})`:"/"+S),R&&(S+="?"),i+=S,m+=20,R&&(m+=-8),I&&(m+=-20),y===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function c(l){const u=l.match(a),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",_=s[d-1];f[_.name]=m&&_.repeatable?m.split("/"):m}return f}function o(l){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:_,repeatable:I,optional:R}=m,v=_ in l?l[_]:"";if(nt(v)&&!I)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const y=nt(v)?v.join("/"):v;if(!y)if(R)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=y}}return u||"/"}return{re:a,score:r,keys:s,parse:c,stringify:o}}function Jm(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Qm(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=Jm(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Oc(r))return 1;if(Oc(i))return-1}return i.length-r.length}function Oc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Zm={type:0,value:""},eg=/[a-zA-Z0-9_]/;function tg(e){if(!e)return[[]];if(e==="/")return[[Zm]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let c=0,o,l="",u="";function f(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(o==="*"||o==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=o}for(;c<e.length;){if(o=e[c++],o==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:o==="/"?(l&&f(),a()):o===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:o==="("?n=2:eg.test(o)?d():(f(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&c--);break;case 2:o===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+o:n=3:u+=o;break;case 3:f(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&c--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),a(),i}function ng(e,t,n){const r=Xm(tg(e.path),n),i=ue(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function rg(e,t){const n=[],r=new Map;t=Lc({strict:!1,end:!0,sensitive:!1},t);function i(u){return r.get(u)}function s(u,f,d){const m=!d,_=ig(u);_.aliasOf=d&&d.record;const I=Lc(t,u),R=[_];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const A of S)R.push(ue({},_,{components:d?d.record.components:_.components,path:A,aliasOf:d?d.record:_}))}let v,y;for(const S of R){const{path:A}=S;if(f&&A[0]!=="/"){const M=f.record.path,Y=M[M.length-1]==="/"?"":"/";S.path=f.record.path+(A&&Y+A)}if(v=ng(S,f,I),d?d.alias.push(v):(y=y||v,y!==v&&y.alias.push(v),m&&u.name&&!Nc(v)&&a(u.name)),_.children){const M=_.children;for(let Y=0;Y<M.length;Y++)s(M[Y],v,d&&d.children[Y])}d=d||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&o(v)}return y?()=>{a(y)}:mr}function a(u){if(tf(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function c(){return n}function o(u){let f=0;for(;f<n.length&&Qm(u,n[f])>=0&&(u.record.path!==n[f].record.path||!rf(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Nc(u)&&r.set(u.record.name,u)}function l(u,f){let d,m={},_,I;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw qn(1,{location:u});I=d.record.name,m=ue(Rc(f.params,d.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&Rc(u.params,d.keys.map(y=>y.name))),_=d.stringify(m)}else if("path"in u)_=u.path,d=n.find(y=>y.re.test(_)),d&&(m=d.parse(_),I=d.record.name);else{if(d=f.name?r.get(f.name):n.find(y=>y.re.test(f.path)),!d)throw qn(1,{location:u,currentLocation:f});I=d.record.name,m=ue({},f.params,u.params),_=d.stringify(m)}const R=[];let v=d;for(;v;)R.unshift(v.record),v=v.parent;return{name:I,path:_,params:m,matched:R,meta:ag(R)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:a,getRoutes:c,getRecordMatcher:i}}function Rc(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ig(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:sg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function sg(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Nc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ag(e){return e.reduce((t,n)=>ue(t,n.meta),{})}function Lc(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function rf(e,t){return t.children.some(n=>n===e||rf(e,n))}const sf=/#/g,og=/&/g,cg=/\//g,lg=/=/g,ug=/\?/g,af=/\+/g,fg=/%5B/g,dg=/%5D/g,of=/%5E/g,hg=/%60/g,cf=/%7B/g,pg=/%7C/g,lf=/%7D/g,mg=/%20/g;function ao(e){return encodeURI(""+e).replace(pg,"|").replace(fg,"[").replace(dg,"]")}function gg(e){return ao(e).replace(cf,"{").replace(lf,"}").replace(of,"^")}function ma(e){return ao(e).replace(af,"%2B").replace(mg,"+").replace(sf,"%23").replace(og,"%26").replace(hg,"`").replace(cf,"{").replace(lf,"}").replace(of,"^")}function vg(e){return ma(e).replace(lg,"%3D")}function bg(e){return ao(e).replace(sf,"%23").replace(ug,"%3F")}function yg(e){return e==null?"":bg(e).replace(cg,"%2F")}function Di(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function _g(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(af," "),a=s.indexOf("="),c=Di(a<0?s:s.slice(0,a)),o=a<0?null:Di(s.slice(a+1));if(c in t){let l=t[c];nt(l)||(l=t[c]=[l]),l.push(o)}else t[c]=o}return t}function Mc(e){let t="";for(let n in e){const r=e[n];if(n=vg(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(nt(r)?r.map(s=>s&&ma(s)):[r&&ma(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function wg(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=nt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const uf=Symbol(""),Dc=Symbol(""),ms=Symbol(""),ff=Symbol(""),ga=Symbol("");function rr(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Eg(e,t,n){const r=()=>{e[t].delete(n)};os(r),Su(r),Tu(()=>{e[t].add(n)}),e[t].add(n)}function Ig(e){const t=Ye(uf,{}).value;t&&Eg(t,"leaveGuards",e)}function Ut(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,c)=>{const o=f=>{f===!1?c(qn(4,{from:n,to:t})):f instanceof Error?c(f):qm(f)?c(qn(2,{from:t,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),a())},l=e.call(r&&r.instances[i],t,n,o);let u=Promise.resolve(l);e.length<3&&(u=u.then(o)),u.catch(f=>c(f))})}function Ls(e,t,n,r){const i=[];for(const s of e)for(const a in s.components){let c=s.components[a];if(!(t!=="beforeRouteEnter"&&!s.instances[a]))if(xg(c)){const l=(c.__vccOpts||c)[t];l&&i.push(Ut(l,n,r,s,a))}else{let o=c();i.push(()=>o.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=Tm(l)?l.default:l;s.components[a]=u;const d=(u.__vccOpts||u)[t];return d&&Ut(d,n,r,s,a)()}))}}return i}function xg(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Fc(e){const t=Ye(ms),n=Ye(ff),r=ke(()=>t.resolve(_e(e.to))),i=ke(()=>{const{matched:o}=r.value,{length:l}=o,u=o[l-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Kn.bind(null,u));if(d>-1)return d;const m=Uc(o[l-2]);return l>1&&Uc(u)===m&&f[f.length-1].path!==m?f.findIndex(Kn.bind(null,o[l-2])):d}),s=ke(()=>i.value>-1&&Tg(n.params,r.value.params)),a=ke(()=>i.value>-1&&i.value===n.matched.length-1&&Zu(n.params,r.value.params));function c(o={}){return Cg(o)?t[_e(e.replace)?"replace":"push"](_e(e.to)).catch(mr):Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:s,isExactActive:a,navigate:c}}const kg=rt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fc,setup(e,{slots:t}){const n=Ur(Fc(e)),{options:r}=Ye(ms),i=ke(()=>({[$c(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[$c(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:fs("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),Ag=kg;function Cg(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Tg(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!nt(i)||i.length!==r.length||r.some((s,a)=>s!==i[a]))return!1}return!0}function Uc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const $c=(e,t,n)=>e??t??n,Sg=rt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ye(ga),i=ke(()=>e.route||r.value),s=Ye(Dc,0),a=ke(()=>{let l=_e(s);const{matched:u}=i.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),c=ke(()=>i.value.matched[a.value]);wi(Dc,ke(()=>a.value+1)),wi(uf,c),wi(ga,i);const o=oe();return vn(()=>[o.value,c.value,e.name],([l,u,f],[d,m,_])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Kn(u,m)||!d)&&(u.enterCallbacks[f]||[]).forEach(I=>I(l))},{flush:"post"}),()=>{const l=i.value,u=e.name,f=c.value,d=f&&f.components[u];if(!d)return Bc(n.default,{Component:d,route:l});const m=f.props[u],_=m?m===!0?l.params:typeof m=="function"?m(l):m:null,R=fs(d,ue({},_,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:o}));return Bc(n.default,{Component:R,route:l})||R}}});function Bc(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const df=Sg;function Pg(e){const t=rg(e.routes,e),n=e.parseQuery||_g,r=e.stringifyQuery||Mc,i=e.history,s=rr(),a=rr(),c=rr(),o=Ch(Nt);let l=Nt;Nn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Rs.bind(null,w=>""+w),f=Rs.bind(null,yg),d=Rs.bind(null,Di);function m(w,U){let O,H;return tf(w)?(O=t.getRecordMatcher(w),H=U):H=w,t.addRoute(H,O)}function _(w){const U=t.getRecordMatcher(w);U&&t.removeRoute(U)}function I(){return t.getRoutes().map(w=>w.record)}function R(w){return!!t.getRecordMatcher(w)}function v(w,U){if(U=ue({},U||o.value),typeof w=="string"){const g=Ns(n,w,U.path),b=t.resolve({path:g.path},U),E=i.createHref(g.fullPath);return ue(g,b,{params:d(b.params),hash:Di(g.hash),redirectedFrom:void 0,href:E})}let O;if("path"in w)O=ue({},w,{path:Ns(n,w.path,U.path).path});else{const g=ue({},w.params);for(const b in g)g[b]==null&&delete g[b];O=ue({},w,{params:f(g)}),U.params=f(U.params)}const H=t.resolve(O,U),ce=w.hash||"";H.params=u(d(H.params));const h=Om(r,ue({},w,{hash:gg(ce),path:H.path})),p=i.createHref(h);return ue({fullPath:h,hash:ce,query:r===Mc?wg(w.query):w.query||{}},H,{redirectedFrom:void 0,href:p})}function y(w){return typeof w=="string"?Ns(n,w,o.value.path):ue({},w)}function S(w,U){if(l!==w)return qn(8,{from:U,to:w})}function A(w){return q(w)}function M(w){return A(ue(y(w),{replace:!0}))}function Y(w){const U=w.matched[w.matched.length-1];if(U&&U.redirect){const{redirect:O}=U;let H=typeof O=="function"?O(w):O;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=y(H):{path:H},H.params={}),ue({query:w.query,hash:w.hash,params:"path"in H?{}:w.params},H)}}function q(w,U){const O=l=v(w),H=o.value,ce=w.state,h=w.force,p=w.replace===!0,g=Y(O);if(g)return q(ue(y(g),{state:typeof g=="object"?ue({},ce,g.state):ce,force:h,replace:p}),U||O);const b=O;b.redirectedFrom=U;let E;return!h&&Rm(r,H,O)&&(E=qn(16,{to:b,from:H}),it(H,H,!0,!1)),(E?Promise.resolve(E):K(b,H)).catch(x=>pt(x)?pt(x,2)?x:St(x):ae(x,b,H)).then(x=>{if(x){if(pt(x,2))return q(ue({replace:p},y(x.to),{state:typeof x.to=="object"?ue({},ce,x.to.state):ce,force:h}),U||b)}else x=F(b,H,!0,p,ce);return ie(b,H,x),x})}function T(w,U){const O=S(w,U);return O?Promise.reject(O):Promise.resolve()}function N(w){const U=Tn.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(w):w()}function K(w,U){let O;const[H,ce,h]=Og(w,U);O=Ls(H.reverse(),"beforeRouteLeave",w,U);for(const g of H)g.leaveGuards.forEach(b=>{O.push(Ut(b,w,U))});const p=T.bind(null,w,U);return O.push(p),Pe(O).then(()=>{O=[];for(const g of s.list())O.push(Ut(g,w,U));return O.push(p),Pe(O)}).then(()=>{O=Ls(ce,"beforeRouteUpdate",w,U);for(const g of ce)g.updateGuards.forEach(b=>{O.push(Ut(b,w,U))});return O.push(p),Pe(O)}).then(()=>{O=[];for(const g of h)if(g.beforeEnter)if(nt(g.beforeEnter))for(const b of g.beforeEnter)O.push(Ut(b,w,U));else O.push(Ut(g.beforeEnter,w,U));return O.push(p),Pe(O)}).then(()=>(w.matched.forEach(g=>g.enterCallbacks={}),O=Ls(h,"beforeRouteEnter",w,U),O.push(p),Pe(O))).then(()=>{O=[];for(const g of a.list())O.push(Ut(g,w,U));return O.push(p),Pe(O)}).catch(g=>pt(g,8)?g:Promise.reject(g))}function ie(w,U,O){c.list().forEach(H=>N(()=>H(w,U,O)))}function F(w,U,O,H,ce){const h=S(w,U);if(h)return h;const p=U===Nt,g=Nn?history.state:{};O&&(H||p?i.replace(w.fullPath,ue({scroll:p&&g&&g.scroll},ce)):i.push(w.fullPath,ce)),o.value=w,it(w,U,O,p),St()}let Q;function G(){Q||(Q=i.listen((w,U,O)=>{if(!Xr.listening)return;const H=v(w),ce=Y(H);if(ce){q(ue(ce,{replace:!0}),H).catch(mr);return}l=H;const h=o.value;Nn&&Bm(Cc(h.fullPath,O.delta),ps()),K(H,h).catch(p=>pt(p,12)?p:pt(p,2)?(q(p.to,H).then(g=>{pt(g,20)&&!O.delta&&O.type===Cr.pop&&i.go(-1,!1)}).catch(mr),Promise.reject()):(O.delta&&i.go(-O.delta,!1),ae(p,H,h))).then(p=>{p=p||F(H,h,!1),p&&(O.delta&&!pt(p,8)?i.go(-O.delta,!1):O.type===Cr.pop&&pt(p,20)&&i.go(-1,!1)),ie(H,h,p)}).catch(mr)}))}let ge=rr(),X=rr(),le;function ae(w,U,O){St(w);const H=X.list();return H.length?H.forEach(ce=>ce(w,U,O)):console.error(w),Promise.reject(w)}function ht(){return le&&o.value!==Nt?Promise.resolve():new Promise((w,U)=>{ge.add([w,U])})}function St(w){return le||(le=!w,G(),ge.list().forEach(([U,O])=>w?O(w):U()),ge.reset()),w}function it(w,U,O,H){const{scrollBehavior:ce}=e;if(!Nn||!ce)return Promise.resolve();const h=!O&&jm(Cc(w.fullPath,0))||(H||!O)&&history.state&&history.state.scroll||null;return Xa().then(()=>ce(w,U,h)).then(p=>p&&$m(p)).catch(p=>ae(p,w,U))}const Me=w=>i.go(w);let Cn;const Tn=new Set,Xr={currentRoute:o,listening:!0,addRoute:m,removeRoute:_,hasRoute:R,getRoutes:I,resolve:v,options:e,push:A,replace:M,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:s.add,beforeResolve:a.add,afterEach:c.add,onError:X.add,isReady:ht,install(w){const U=this;w.component("RouterLink",Ag),w.component("RouterView",df),w.config.globalProperties.$router=U,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>_e(o)}),Nn&&!Cn&&o.value===Nt&&(Cn=!0,A(i.location).catch(ce=>{}));const O={};for(const ce in Nt)Object.defineProperty(O,ce,{get:()=>o.value[ce],enumerable:!0});w.provide(ms,U),w.provide(ff,lu(O)),w.provide(ga,o);const H=w.unmount;Tn.add(w),w.unmount=function(){Tn.delete(w),Tn.size<1&&(l=Nt,Q&&Q(),Q=null,o.value=Nt,Cn=!1,le=!1),H()}}};function Pe(w){return w.reduce((U,O)=>U.then(()=>N(O)),Promise.resolve())}return Xr}function Og(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const c=t.matched[a];c&&(e.matched.find(l=>Kn(l,c))?r.push(c):n.push(c));const o=e.matched[a];o&&(t.matched.find(l=>Kn(l,o))||i.push(o))}return[n,r,i]}function hf(){return Ye(ms)}/**
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
 */const pf=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Rg=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],c=e[n++],o=((i&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(o&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},mf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,c=a?e[i+1]:0,o=i+2<e.length,l=o?e[i+2]:0,u=s>>2,f=(s&3)<<4|c>>4;let d=(c&15)<<2|l>>6,m=l&63;o||(m=64,a||(d=64)),r.push(n[u],n[f],n[d],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(pf(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Rg(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],c=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||c==null||l==null||f==null)throw new Ng;const d=s<<2|c>>4;if(r.push(d),l!==64){const m=c<<4&240|l>>2;if(r.push(m),f!==64){const _=l<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ng extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lg=function(e){const t=pf(e);return mf.encodeByteArray(t,!0)},gf=function(e){return Lg(e).replace(/\./g,"")},vf=function(e){try{return mf.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Mg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Dg=()=>Mg().__FIREBASE_DEFAULTS__,Fg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ug=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&vf(e[1]);return t&&JSON.parse(t)},oo=()=>{try{return Dg()||Fg()||Ug()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},$g=e=>{var t,n;return(n=(t=oo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},bf=()=>{var e;return(e=oo())===null||e===void 0?void 0:e.config},yf=e=>{var t;return(t=oo())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Bg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Hg(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function zg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wg(){const e=Re();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Vg(){try{return typeof indexedDB=="object"}catch{return!1}}function Kg(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const qg="FirebaseError";class Qt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=qg,Object.setPrototypeOf(this,Qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?Yg(s,r):"Error",c=`${this.serviceName}: ${a} (${i}).`;return new Qt(i,c,r)}}function Yg(e,t){return e.replace(Gg,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Gg=/\{\$([^}]+)}/g;function Xg(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Fi(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(jc(s)&&jc(a)){if(!Fi(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function jc(e){return e!==null&&typeof e=="object"}/**
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
 */function jr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function cr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function lr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Jg(e,t){const n=new Qg(e,t);return n.subscribe.bind(n)}class Qg{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Zg(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ms),i.error===void 0&&(i.error=Ms),i.complete===void 0&&(i.complete=Ms);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zg(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ms(){}/**
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
 */function Ct(e){return e&&e._delegate?e._delegate:e}class Yn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const on="[DEFAULT]";/**
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
 */class ev{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Bg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(nv(t))try{this.getOrInitializeService({instanceIdentifier:on})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=on){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=on){return this.instances.has(t)}getOptions(t=on){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tv(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=on){return this.component?this.component.multipleInstances?t:on:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tv(e){return e===on?void 0:e}function nv(e){return e.instantiationMode==="EAGER"}/**
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
 */class rv{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ev(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(he||(he={}));const iv={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},sv=he.INFO,av={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},ov=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=av[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class _f{constructor(t){this.name=t,this._logLevel=sv,this._logHandler=ov,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in he))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?iv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...t),this._logHandler(this,he.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...t),this._logHandler(this,he.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,he.INFO,...t),this._logHandler(this,he.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,he.WARN,...t),this._logHandler(this,he.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...t),this._logHandler(this,he.ERROR,...t)}}const cv=(e,t)=>t.some(n=>e instanceof n);let Hc,zc;function lv(){return Hc||(Hc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uv(){return zc||(zc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wf=new WeakMap,va=new WeakMap,Ef=new WeakMap,Ds=new WeakMap,co=new WeakMap;function fv(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Vt(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&wf.set(n,e)}).catch(()=>{}),co.set(t,e),t}function dv(e){if(va.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});va.set(e,t)}let ba={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return va.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ef.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function hv(e){ba=e(ba)}function pv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Fs(this),t,...n);return Ef.set(r,t.sort?t.sort():[t]),Vt(r)}:uv().includes(e)?function(...t){return e.apply(Fs(this),t),Vt(wf.get(this))}:function(...t){return Vt(e.apply(Fs(this),t))}}function mv(e){return typeof e=="function"?pv(e):(e instanceof IDBTransaction&&dv(e),cv(e,lv())?new Proxy(e,ba):e)}function Vt(e){if(e instanceof IDBRequest)return fv(e);if(Ds.has(e))return Ds.get(e);const t=mv(e);return t!==e&&(Ds.set(e,t),co.set(t,e)),t}const Fs=e=>co.get(e);function gv(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),c=Vt(a);return r&&a.addEventListener("upgradeneeded",o=>{r(Vt(a.result),o.oldVersion,o.newVersion,Vt(a.transaction),o)}),n&&a.addEventListener("blocked",o=>n(o.oldVersion,o.newVersion,o)),c.then(o=>{s&&o.addEventListener("close",()=>s()),i&&o.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const vv=["get","getKey","getAll","getAllKeys","count"],bv=["put","add","delete","clear"],Us=new Map;function Wc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Us.get(t))return Us.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=bv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vv.includes(n)))return;const s=async function(a,...c){const o=this.transaction(a,i?"readwrite":"readonly");let l=o.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),i&&o.done]))[0]};return Us.set(t,s),s}hv(e=>({...e,get:(t,n,r)=>Wc(t,n)||e.get(t,n,r),has:(t,n)=>!!Wc(t,n)||e.has(t,n)}));/**
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
 */class yv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_v(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _v(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ya="@firebase/app",Vc="0.9.20";/**
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
 */const _n=new _f("@firebase/app"),wv="@firebase/app-compat",Ev="@firebase/analytics-compat",Iv="@firebase/analytics",xv="@firebase/app-check-compat",kv="@firebase/app-check",Av="@firebase/auth",Cv="@firebase/auth-compat",Tv="@firebase/database",Sv="@firebase/database-compat",Pv="@firebase/functions",Ov="@firebase/functions-compat",Rv="@firebase/installations",Nv="@firebase/installations-compat",Lv="@firebase/messaging",Mv="@firebase/messaging-compat",Dv="@firebase/performance",Fv="@firebase/performance-compat",Uv="@firebase/remote-config",$v="@firebase/remote-config-compat",Bv="@firebase/storage",jv="@firebase/storage-compat",Hv="@firebase/firestore",zv="@firebase/firestore-compat",Wv="firebase",Vv="10.5.0";/**
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
 */const _a="[DEFAULT]",Kv={[ya]:"fire-core",[wv]:"fire-core-compat",[Iv]:"fire-analytics",[Ev]:"fire-analytics-compat",[kv]:"fire-app-check",[xv]:"fire-app-check-compat",[Av]:"fire-auth",[Cv]:"fire-auth-compat",[Tv]:"fire-rtdb",[Sv]:"fire-rtdb-compat",[Pv]:"fire-fn",[Ov]:"fire-fn-compat",[Rv]:"fire-iid",[Nv]:"fire-iid-compat",[Lv]:"fire-fcm",[Mv]:"fire-fcm-compat",[Dv]:"fire-perf",[Fv]:"fire-perf-compat",[Uv]:"fire-rc",[$v]:"fire-rc-compat",[Bv]:"fire-gcs",[jv]:"fire-gcs-compat",[Hv]:"fire-fst",[zv]:"fire-fst-compat","fire-js":"fire-js",[Wv]:"fire-js-all"};/**
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
 */const Ui=new Map,wa=new Map;function qv(e,t){try{e.container.addComponent(t)}catch(n){_n.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Tr(e){const t=e.name;if(wa.has(t))return _n.debug(`There were multiple attempts to register component ${t}.`),!1;wa.set(t,e);for(const n of Ui.values())qv(n,e);return!0}function If(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Yv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Kt=new Br("app","Firebase",Yv);/**
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
 */class Gv{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
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
 */const Hr=Vv;function xf(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:_a,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Kt.create("bad-app-name",{appName:String(i)});if(n||(n=bf()),!n)throw Kt.create("no-options");const s=Ui.get(i);if(s){if(Fi(n,s.options)&&Fi(r,s.config))return s;throw Kt.create("duplicate-app",{appName:i})}const a=new rv(i);for(const o of wa.values())a.addComponent(o);const c=new Gv(n,r,a);return Ui.set(i,c),c}function Xv(e=_a){const t=Ui.get(e);if(!t&&e===_a&&bf())return xf();if(!t)throw Kt.create("no-app",{appName:e});return t}function $n(e,t,n){var r;let i=(r=Kv[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const c=[`Unable to register library "${i}" with version "${t}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),_n.warn(c.join(" "));return}Tr(new Yn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Jv="firebase-heartbeat-database",Qv=1,Sr="firebase-heartbeat-store";let $s=null;function kf(){return $s||($s=gv(Jv,Qv,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Sr)}}}).catch(e=>{throw Kt.create("idb-open",{originalErrorMessage:e.message})})),$s}async function Zv(e){try{return await(await kf()).transaction(Sr).objectStore(Sr).get(Af(e))}catch(t){if(t instanceof Qt)_n.warn(t.message);else{const n=Kt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});_n.warn(n.message)}}}async function Kc(e,t){try{const r=(await kf()).transaction(Sr,"readwrite");await r.objectStore(Sr).put(t,Af(e)),await r.done}catch(n){if(n instanceof Qt)_n.warn(n.message);else{const r=Kt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(r.message)}}}function Af(e){return`${e.name}!${e.options.appId}`}/**
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
 */const e0=1024,t0=30*24*60*60*1e3;class n0{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new i0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=qc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=t0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=qc(),{heartbeatsToSend:n,unsentEntries:r}=r0(this._heartbeatsCache.heartbeats),i=gf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function qc(){return new Date().toISOString().substring(0,10)}function r0(e,t=e0){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Yc(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class i0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vg()?Kg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Zv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Yc(e){return gf(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function s0(e){Tr(new Yn("platform-logger",t=>new yv(t),"PRIVATE")),Tr(new Yn("heartbeat",t=>new n0(t),"PRIVATE")),$n(ya,Vc,e),$n(ya,Vc,"esm2017"),$n("fire-js","")}s0("");var a0="firebase",o0="10.5.0";/**
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
 */$n(a0,o0,"app");const c0={apiKey:"AIzaSyD66i1ri0md2o2Ow4RVApaWIjSQdM79RRY",authDomain:"pomofocus-vue3.firebaseapp.com",projectId:"pomofocus-vue3",storageBucket:"pomofocus-vue3.appspot.com",messagingSenderId:"1089476388969",appId:"1:1089476388969:web:c4939d029dadf83304daf8",measurementId:"G-9CL6V1FX1Y"};xf(c0);function lo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Gc(e){return e!==void 0&&e.enterprise!==void 0}class l0{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Cf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u0=Cf,Tf=new Br("auth","Firebase",Cf());/**
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
 */const $i=new _f("@firebase/auth");function f0(e,...t){$i.logLevel<=he.WARN&&$i.warn(`Auth (${Hr}): ${e}`,...t)}function xi(e,...t){$i.logLevel<=he.ERROR&&$i.error(`Auth (${Hr}): ${e}`,...t)}/**
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
 */function Ge(e,...t){throw uo(e,...t)}function ut(e,...t){return uo(e,...t)}function Sf(e,t,n){const r=Object.assign(Object.assign({},u0()),{[t]:n});return new Br("auth","Firebase",r).create(t,{appName:e.name})}function d0(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Ge(e,"argument-error"),Sf(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function uo(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Tf.create(e,...t)}function J(e,t,...n){if(!e)throw uo(t,...n)}function bt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw xi(t),new Error(t)}function Et(e,t){e||bt(t)}/**
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
 */function Ea(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function h0(){return Xc()==="http:"||Xc()==="https:"}function Xc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function p0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(h0()||Hg()||"connection"in navigator)?navigator.onLine:!0}function m0(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class zr{constructor(t,n){this.shortDelay=t,this.longDelay=n,Et(n>t,"Short delay should be less than long delay!"),this.isMobile=jg()||zg()}get(){return p0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function fo(e,t){Et(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Pf{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const g0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const v0=new zr(3e4,6e4);function kn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function An(e,t,n,r,i={}){return Of(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const c=jr(Object.assign({key:e.config.apiKey},a)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode),Pf.fetch()(Rf(e,e.config.apiHost,n,c),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},s))})}async function Of(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},g0),t);try{const i=new b0(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw ai(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const c=s.ok?a.errorMessage:a.error.message,[o,l]=c.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw ai(e,"credential-already-in-use",a);if(o==="EMAIL_EXISTS")throw ai(e,"email-already-in-use",a);if(o==="USER_DISABLED")throw ai(e,"user-disabled",a);const u=r[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Sf(e,u,l);Ge(e,u)}}catch(i){if(i instanceof Qt)throw i;Ge(e,"network-request-failed",{message:String(i)})}}async function Wr(e,t,n,r,i={}){const s=await An(e,t,n,r,i);return"mfaPendingCredential"in s&&Ge(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Rf(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?fo(e.config,i):`${e.config.apiScheme}://${i}`}class b0{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ut(this.auth,"network-request-failed")),v0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ai(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ut(e,t,r);return i.customData._tokenResponse=n,i}async function y0(e,t){return An(e,"GET","/v2/recaptchaConfig",kn(e,t))}/**
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
 */async function _0(e,t){return An(e,"POST","/v1/accounts:delete",t)}async function w0(e,t){return An(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function vr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function E0(e,t=!1){const n=Ct(e),r=await n.getIdToken(t),i=ho(r);J(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:vr(Bs(i.auth_time)),issuedAtTime:vr(Bs(i.iat)),expirationTime:vr(Bs(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bs(e){return Number(e)*1e3}function ho(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return xi("JWT malformed, contained fewer than 3 sections"),null;try{const i=vf(n);return i?JSON.parse(i):(xi("Failed to decode base64 JWT payload"),null)}catch(i){return xi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function I0(e){const t=ho(e);return J(t,"internal-error"),J(typeof t.exp<"u","internal-error"),J(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Pr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Qt&&x0(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function x0({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class k0{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nf{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vr(this.lastLoginAt),this.creationTime=vr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bi(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Pr(e,w0(n,{idToken:r}));J(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?T0(s.providerUserInfo):[],c=C0(e.providerData,a),o=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(c!=null&&c.length),u=o?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Nf(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function A0(e){const t=Ct(e);await Bi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function C0(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function T0(e){return e.map(t=>{var{providerId:n}=t,r=lo(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function S0(e,t){const n=await Of(e,{},async()=>{const r=jr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=Rf(e,i,"/v1/token",`key=${s}`),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Pf.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Or{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){J(t.idToken,"internal-error"),J(typeof t.idToken<"u","internal-error"),J(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):I0(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return J(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await S0(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Or;return r&&(J(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(J(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(J(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Or,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
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
 */function Lt(e,t){J(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class yn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=lo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new k0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Nf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Pr(this,this.stsTokenManager.getToken(this.auth,t));return J(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return E0(this,t)}reload(){return A0(this)}_assign(t){this!==t&&(J(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new yn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Bi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Pr(this,_0(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,a,c,o,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(a=n.photoURL)!==null&&a!==void 0?a:void 0,I=(c=n.tenantId)!==null&&c!==void 0?c:void 0,R=(o=n._redirectEventId)!==null&&o!==void 0?o:void 0,v=(l=n.createdAt)!==null&&l!==void 0?l:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:A,isAnonymous:M,providerData:Y,stsTokenManager:q}=n;J(S&&q,t,"internal-error");const T=Or.fromJSON(this.name,q);J(typeof S=="string",t,"internal-error"),Lt(f,t.name),Lt(d,t.name),J(typeof A=="boolean",t,"internal-error"),J(typeof M=="boolean",t,"internal-error"),Lt(m,t.name),Lt(_,t.name),Lt(I,t.name),Lt(R,t.name),Lt(v,t.name),Lt(y,t.name);const N=new yn({uid:S,auth:t,email:d,emailVerified:A,displayName:f,isAnonymous:M,photoURL:_,phoneNumber:m,tenantId:I,stsTokenManager:T,createdAt:v,lastLoginAt:y});return Y&&Array.isArray(Y)&&(N.providerData=Y.map(K=>Object.assign({},K))),R&&(N._redirectEventId=R),N}static async _fromIdTokenResponse(t,n,r=!1){const i=new Or;i.updateFromServerResponse(n);const s=new yn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Bi(s),s}}/**
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
 */const Jc=new Map;function yt(e){Et(e instanceof Function,"Expected a class definition");let t=Jc.get(e);return t?(Et(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Jc.set(e,t),t)}/**
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
 */class Lf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Lf.type="NONE";const Qc=Lf;/**
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
 */function ki(e,t,n){return`firebase:${e}:${t}:${n}`}class Bn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ki(this.userKey,i.apiKey,s),this.fullPersistenceKey=ki("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?yn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Bn(yt(Qc),t,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||yt(Qc);const a=ki(r,t.config.apiKey,t.name);let c=null;for(const l of n)try{const u=await l._get(a);if(u){const f=yn._fromJSON(t,u);l!==s&&(c=f),s=l;break}}catch{}const o=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!o.length?new Bn(s,t,r):(s=o[0],c&&await s._set(a,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(a)}catch{}})),new Bn(s,t,r))}}/**
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
 */function Zc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ff(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Mf(t))return"Firefox";if(t.includes("silk/"))return"Silk";if($f(t))return"Blackberry";if(Bf(t))return"Webos";if(po(t))return"Safari";if((t.includes("chrome/")||Df(t))&&!t.includes("edge/"))return"Chrome";if(Uf(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mf(e=Re()){return/firefox\//i.test(e)}function po(e=Re()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Df(e=Re()){return/crios\//i.test(e)}function Ff(e=Re()){return/iemobile/i.test(e)}function Uf(e=Re()){return/android/i.test(e)}function $f(e=Re()){return/blackberry/i.test(e)}function Bf(e=Re()){return/webos/i.test(e)}function gs(e=Re()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function P0(e=Re()){var t;return gs(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function O0(){return Wg()&&document.documentMode===10}function jf(e=Re()){return gs(e)||Uf(e)||Bf(e)||$f(e)||/windows phone/i.test(e)||Ff(e)}function R0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Hf(e,t=[]){let n;switch(e){case"Browser":n=Zc(Re());break;case"Worker":n=`${Zc(Re())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hr}/${r}`}/**
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
 */class N0{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,c)=>{try{const o=t(s);a(o)}catch(o){c(o)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function L0(e,t={}){return An(e,"GET","/v2/passwordPolicy",kn(e,t))}/**
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
 */const M0=6;class D0{constructor(t){var n,r,i,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:M0,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,a,c;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,o),this.validatePasswordCharacterOptions(t,o),o.isValid&&(o.isValid=(n=o.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),o.isValid&&(o.isValid=(r=o.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),o.isValid&&(o.isValid=(i=o.containsLowercaseLetter)!==null&&i!==void 0?i:!0),o.isValid&&(o.isValid=(s=o.containsUppercaseLetter)!==null&&s!==void 0?s:!0),o.isValid&&(o.isValid=(a=o.containsNumericCharacter)!==null&&a!==void 0?a:!0),o.isValid&&(o.isValid=(c=o.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),o}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class F0{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new el(this),this.idTokenSubscription=new el(this),this.beforeStateQueue=new N0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=yt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);(!a||a===c)&&(o!=null&&o.user)&&(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Bi(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=m0()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ct(t):null;return n&&J(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&J(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await L0(this),n=new D0(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Br("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&yt(t)||this._popupRedirectResolver;J(n,this,"argument-error"),this.redirectPersistenceManager=await Bn.create(this,[yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(c,this,"internal-error"),c.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const o=t.addObserver(n,r,i);return()=>{a=!0,o()}}else{const o=t.addObserver(n);return()=>{a=!0,o()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Hf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&f0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zt(e){return Ct(e)}class el{constructor(t){this.auth=t,this.observer=null,this.addObserver=Jg(n=>this.observer=n)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function U0(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function zf(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=ut("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",U0().appendChild(r)})}function $0(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const B0="https://www.google.com/recaptcha/enterprise.js?render=",j0="recaptcha-enterprise",H0="NO_RECAPTCHA";class z0{constructor(t){this.type=j0,this.auth=Zt(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,c)=>{y0(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(o=>{if(o.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new l0(o);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,a(l.siteKey)}}).catch(o=>{c(o)})})}function i(s,a,c){const o=window.grecaptcha;Gc(o)?o.enterprise.ready(()=>{o.enterprise.execute(s,{action:t}).then(l=>{a(l)}).catch(()=>{a(H0)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(c=>{if(!n&&Gc(window.grecaptcha))i(c,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}zf(B0+c).then(()=>{i(c,s,a)}).catch(o=>{a(o)})}}).catch(c=>{a(c)})})}}async function ji(e,t,n,r=!1){const i=new z0(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}/**
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
 */function W0(e,t){const n=If(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Fi(s,t??{}))return i;Ge(i,"already-initialized")}return n.initialize({options:t})}function V0(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function K0(e,t,n){const r=Zt(e);J(r._canInitEmulator,r,"emulator-config-failed"),J(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Wf(t),{host:a,port:c}=q0(t),o=c===null?"":`:${c}`;r.config.emulator={url:`${s}//${a}${o}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Y0()}function Wf(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function q0(e){const t=Wf(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:tl(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:tl(a)}}}function tl(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Y0(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class mo{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return bt("not implemented")}_getIdTokenResponse(t){return bt("not implemented")}_linkToIdToken(t,n){return bt("not implemented")}_getReauthenticationResolver(t){return bt("not implemented")}}async function G0(e,t){return An(e,"POST","/v1/accounts:update",t)}/**
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
 */async function js(e,t){return Wr(e,"POST","/v1/accounts:signInWithPassword",kn(e,t))}/**
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
 */async function X0(e,t){return Wr(e,"POST","/v1/accounts:signInWithEmailLink",kn(e,t))}async function J0(e,t){return Wr(e,"POST","/v1/accounts:signInWithEmailLink",kn(e,t))}/**
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
 */class Rr extends mo{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Rr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Rr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await ji(t,r,"signInWithPassword");return js(t,i)}else return js(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await ji(t,r,"signInWithPassword");return js(t,s)}else return Promise.reject(i)});case"emailLink":return X0(t,{email:this._email,oobCode:this._password});default:Ge(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return G0(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return J0(t,{idToken:n,email:this._email,oobCode:this._password});default:Ge(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function jn(e,t){return Wr(e,"POST","/v1/accounts:signInWithIdp",kn(e,t))}/**
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
 */const Q0="http://localhost";class wn extends mo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new wn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ge("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=lo(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new wn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return jn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,jn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,jn(t,n)}buildRequest(){const t={requestUri:Q0,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=jr(n)}return t}}/**
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
 */function Z0(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eb(e){const t=cr(lr(e)).link,n=t?cr(lr(t)).deep_link_id:null,r=cr(lr(e)).deep_link_id;return(r?cr(lr(r)).link:null)||r||n||t||e}class go{constructor(t){var n,r,i,s,a,c;const o=cr(lr(t)),l=(n=o.apiKey)!==null&&n!==void 0?n:null,u=(r=o.oobCode)!==null&&r!==void 0?r:null,f=Z0((i=o.mode)!==null&&i!==void 0?i:null);J(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(s=o.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=o.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=o.tenantId)!==null&&c!==void 0?c:null}static parseLink(t){const n=eb(t);try{return new go(n)}catch{return null}}}/**
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
 */class Zn{constructor(){this.providerId=Zn.PROVIDER_ID}static credential(t,n){return Rr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=go.parseLink(n);return J(r,"argument-error"),Rr._fromEmailAndCode(t,r.code,r.tenantId)}}Zn.PROVIDER_ID="password";Zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class vo{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vr extends vo{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class $t extends Vr{constructor(){super("facebook.com")}static credential(t){return wn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $t.credentialFromTaggedObject(t)}static credentialFromError(t){return $t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return $t.credential(t.oauthAccessToken)}catch{return null}}}$t.FACEBOOK_SIGN_IN_METHOD="facebook.com";$t.PROVIDER_ID="facebook.com";/**
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
 */class gt extends Vr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return wn._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return gt.credentialFromTaggedObject(t)}static credentialFromError(t){return gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return gt.credential(n,r)}catch{return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com";gt.PROVIDER_ID="google.com";/**
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
 */class Bt extends Vr{constructor(){super("github.com")}static credential(t){return wn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Bt.credential(t.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
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
 */class jt extends Vr{constructor(){super("twitter.com")}static credential(t,n){return wn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return jt.credential(n,r)}catch{return null}}}jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";/**
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
 */async function Hs(e,t){return Wr(e,"POST","/v1/accounts:signUp",kn(e,t))}/**
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
 */class En{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await yn._fromIdTokenResponse(t,r,i),a=nl(r);return new En({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=nl(r);return new En({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function nl(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Hi extends Qt{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Hi.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Hi(t,n,r,i)}}function Vf(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Hi._fromErrorAndOperation(e,s,t,r):s})}async function tb(e,t,n=!1){const r=await Pr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return En._forOperation(e,"link",r)}/**
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
 */async function nb(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Pr(e,Vf(r,i,t,e),n);J(s.idToken,r,"internal-error");const a=ho(s.idToken);J(a,r,"internal-error");const{sub:c}=a;return J(e.uid===c,r,"user-mismatch"),En._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ge(r,"user-mismatch"),s}}/**
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
 */async function Kf(e,t,n=!1){const r="signIn",i=await Vf(e,r,t),s=await En._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function rb(e,t){return Kf(Zt(e),t)}/**
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
 */async function qf(e){const t=Zt(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function ib(e,t,n){var r;const i=Zt(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let a;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await ji(i,s,"signUpPassword");a=Hs(i,l)}else a=Hs(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await ji(i,s,"signUpPassword");return Hs(i,u)}throw l});const c=await a.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&qf(e),l}),o=await En._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(o.user),o}function sb(e,t,n){return rb(Ct(e),Zn.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qf(e),r})}function ab(e,t,n,r){return Ct(e).onIdTokenChanged(t,n,r)}function ob(e,t,n){return Ct(e).beforeAuthStateChanged(t,n)}function Yf(e,t,n,r){return Ct(e).onAuthStateChanged(t,n,r)}function cb(e){return Ct(e).signOut()}const zi="__sak";/**
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
 */class Gf{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zi,"1"),this.storage.removeItem(zi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function lb(){const e=Re();return po(e)||gs(e)}const ub=1e3,fb=10;class Xf extends Gf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lb()&&R0(),this.fallbackToPolling=jf(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,c,o)=>{this.notifyListeners(a,o)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);O0()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,fb):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},ub)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Xf.type="LOCAL";const db=Xf;/**
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
 */class Jf extends Gf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Jf.type="SESSION";const Qf=Jf;/**
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
 */function hb(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new vs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(a).map(async l=>l(n.origin,s)),o=await hb(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:o})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vs.receivers=[];/**
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
 */function bo(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class pb{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((c,o)=>{const l=bo("",20);i.port1.start();const u=setTimeout(()=>{o(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(d.data.response);break;default:clearTimeout(u),clearTimeout(s),o(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function ft(){return window}function mb(e){ft().location.href=e}/**
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
 */function Zf(){return typeof ft().WorkerGlobalScope<"u"&&typeof ft().importScripts=="function"}async function gb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vb(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function bb(){return Zf()?self:null}/**
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
 */const ed="firebaseLocalStorageDb",yb=1,Wi="firebaseLocalStorage",td="fbase_key";class Kr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bs(e,t){return e.transaction([Wi],t?"readwrite":"readonly").objectStore(Wi)}function _b(){const e=indexedDB.deleteDatabase(ed);return new Kr(e).toPromise()}function Ia(){const e=indexedDB.open(ed,yb);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Wi,{keyPath:td})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Wi)?t(r):(r.close(),await _b(),t(await Ia()))})})}async function rl(e,t,n){const r=bs(e,!0).put({[td]:t,value:n});return new Kr(r).toPromise()}async function wb(e,t){const n=bs(e,!1).get(t),r=await new Kr(n).toPromise();return r===void 0?null:r.value}function il(e,t){const n=bs(e,!0).delete(t);return new Kr(n).toPromise()}const Eb=800,Ib=3;class nd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ia(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Ib)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vs._getInstance(bb()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await gb(),!this.activeServiceWorker)return;this.sender=new pb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||vb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ia();return await rl(t,zi,"1"),await il(t,zi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rl(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>wb(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>il(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=bs(i,!1).getAll();return new Kr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Eb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nd.type="LOCAL";const xb=nd;new zr(3e4,6e4);/**
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
 */function rd(e,t){return t?yt(t):(J(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class yo extends mo{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return jn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return jn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return jn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function kb(e){return Kf(e.auth,new yo(e),e.bypassAuthState)}function Ab(e){const{auth:t,user:n}=e;return J(n,t,"internal-error"),nb(n,new yo(e),e.bypassAuthState)}async function Cb(e){const{auth:t,user:n}=e;return J(n,t,"internal-error"),tb(n,new yo(e),e.bypassAuthState)}/**
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
 */class id{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:c}=t;if(a){this.reject(a);return}const o={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(o))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return kb;case"linkViaPopup":case"linkViaRedirect":return Cb;case"reauthViaPopup":case"reauthViaRedirect":return Ab;default:Ge(this.auth,"internal-error")}}resolve(t){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Tb=new zr(2e3,1e4);async function Sb(e,t,n){const r=Zt(e);d0(e,t,vo);const i=rd(r,n);return new dn(r,"signInViaPopup",t,i).executeNotNull()}class dn extends id{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,dn.currentPopupAction&&dn.currentPopupAction.cancel(),dn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return J(t,this.auth,"internal-error"),t}async onExecution(){Et(this.filter.length===1,"Popup operations only handle one event");const t=bo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Tb.get())};t()}}dn.currentPopupAction=null;/**
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
 */const Pb="pendingRedirect",Ai=new Map;class Ob extends id{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ai.get(this.auth._key());if(!t){try{const r=await Rb(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ai.set(this.auth._key(),t)}return this.bypassAuthState||Ai.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rb(e,t){const n=Mb(t),r=Lb(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Nb(e,t){Ai.set(e._key(),t)}function Lb(e){return yt(e._redirectPersistence)}function Mb(e){return ki(Pb,e.config.apiKey,e.name)}async function Db(e,t,n=!1){const r=Zt(e),i=rd(r,t),a=await new Ob(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const Fb=10*60*1e3;class Ub{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!$b(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!sd(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ut(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Fb&&this.cachedEventUids.clear(),this.cachedEventUids.has(sl(t))}saveEventToCache(t){this.cachedEventUids.add(sl(t)),this.lastProcessedEventTime=Date.now()}}function sl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function sd({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function $b(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sd(e);default:return!1}}/**
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
 */async function Bb(e,t={}){return An(e,"GET","/v1/projects",t)}/**
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
 */const jb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hb=/^https?/;async function zb(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Bb(e);for(const n of t)try{if(Wb(n))return}catch{}Ge(e,"unauthorized-domain")}function Wb(e){const t=Ea(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Hb.test(n))return!1;if(jb.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Vb=new zr(3e4,6e4);function al(){const e=ft().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Kb(e){return new Promise((t,n)=>{var r,i,s;function a(){al(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{al(),n(ut(e,"network-request-failed"))},timeout:Vb.get()})}if(!((i=(r=ft().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=ft().gapi)===null||s===void 0)&&s.load)a();else{const c=$0("iframefcb");return ft()[c]=()=>{gapi.load?a():n(ut(e,"network-request-failed"))},zf(`https://apis.google.com/js/api.js?onload=${c}`).catch(o=>n(o))}}).catch(t=>{throw Ci=null,t})}let Ci=null;function qb(e){return Ci=Ci||Kb(e),Ci}/**
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
 */const Yb=new zr(5e3,15e3),Gb="__/auth/iframe",Xb="emulator/auth/iframe",Jb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zb(e){const t=e.config;J(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?fo(t,Xb):`https://${e.config.authDomain}/${Gb}`,r={apiKey:t.apiKey,appName:e.name,v:Hr},i=Qb.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${jr(r).slice(1)}`}async function ey(e){const t=await qb(e),n=ft().gapi;return J(n,e,"internal-error"),t.open({where:document.body,url:Zb(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=ut(e,"network-request-failed"),c=ft().setTimeout(()=>{s(a)},Yb.get());function o(){ft().clearTimeout(c),i(r)}r.ping(o).then(o,()=>{s(a)})}))}/**
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
 */const ty={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ny=500,ry=600,iy="_blank",sy="http://localhost";class ol{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ay(e,t,n,r=ny,i=ry){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const o=Object.assign(Object.assign({},ty),{width:r.toString(),height:i.toString(),top:s,left:a}),l=Re().toLowerCase();n&&(c=Df(l)?iy:n),Mf(l)&&(t=t||sy,o.scrollbars="yes");const u=Object.entries(o).reduce((d,[m,_])=>`${d}${m}=${_},`,"");if(P0(l)&&c!=="_self")return oy(t||"",c),new ol(null);const f=window.open(t||"",c,u);J(f,e,"popup-blocked");try{f.focus()}catch{}return new ol(f)}function oy(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const cy="__/auth/handler",ly="emulator/auth/handler",uy=encodeURIComponent("fac");async function cl(e,t,n,r,i,s){J(e.config.authDomain,e,"auth-domain-config-required"),J(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Hr,eventId:i};if(t instanceof vo){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",Xg(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries(s||{}))a[u]=f}if(t instanceof Vr){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(a.scopes=u.join(","))}e.tenantId&&(a.tid=e.tenantId);const c=a;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const o=await e._getAppCheckToken(),l=o?`#${uy}=${encodeURIComponent(o)}`:"";return`${fy(e)}?${jr(c).slice(1)}${l}`}function fy({config:e}){return e.emulator?fo(e,ly):`https://${e.authDomain}/${cy}`}/**
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
 */const zs="webStorageSupport";class dy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qf,this._completeRedirectFn=Db,this._overrideRedirectResult=Nb}async _openPopup(t,n,r,i){var s;Et((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await cl(t,n,r,Ea(),i);return ay(t,a,bo())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await cl(t,n,r,Ea(),i);return mb(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Et(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await ey(t),r=new Ub(t);return n.register("authEvent",i=>(J(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(zs,{type:zs},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[zs];a!==void 0&&n(!!a),Ge(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zb(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return jf()||po()||gs()}}const hy=dy;var ll="@firebase/auth",ul="1.3.0";/**
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
 */class py{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function my(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gy(e){Tr(new Yn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;J(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const o={apiKey:a,authDomain:c,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hf(e)},l=new F0(r,i,s,o);return V0(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Tr(new Yn("auth-internal",t=>{const n=Zt(t.getProvider("auth").getImmediate());return(r=>new py(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(ll,ul,my(e)),$n(ll,ul,"esm2017")}/**
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
 */const vy=5*60,by=yf("authIdTokenMaxAge")||vy;let fl=null;const yy=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>by)return;const i=n==null?void 0:n.token;fl!==i&&(fl=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function _o(e=Xv()){const t=If(e,"auth");if(t.isInitialized())return t.getImmediate();const n=W0(e,{popupRedirectResolver:hy,persistence:[xb,db,Qf]}),r=yf("authTokenSyncURL");if(r){const s=yy(r);ob(n,s,()=>s(n.currentUser)),ab(n,a=>s(a))}const i=$g("auth");return i&&K0(n,`http://${i}`),n}gy("Browser");const _y=oe(),Ws=oe(!1),dl=oe(""),hl=oe(""),pl=oe(3e3);function ys(){function e(r,i,s){hl.value=r,dl.value=i,pl.value=s,t()}function t(){Ws.value=!0}function n(){Ws.value=!1}return{component:_y,show:Ws,type:dl,message:hl,time:pl,showToast:t,closeToast:n,msgHandler:e}}const en=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},wy={class:"box relative overflow-hidden h-[350px] bg-custom-gray rounded-[8px] mt-10 flex justify-center items-center flex-wrap"},Ey={class:"form absolute top-[4px] right-[4px] bottom-[4px] left-[4px] z-[2] bg-gray-800 flex-col flex overflow-hidden"},Iy={class:"text-9xl w-full text-center mt-[40px]"},xy={class:"relative block w-full h-full"},ky=rt({__name:"NormalTimer",props:{isActive:{type:Boolean},mode:{},remainingTime:{}},emits:["handleTimeCountDown"],setup(e,{emit:t}){const n=()=>{t("handleTimeCountDown",e.isActive,e.mode)};return(r,i)=>(fe(),Le("div",wy,[j("div",Ey,[j("p",Iy,zn(r.remainingTime),1),j("button",{onClick:n,class:"btn w-[100px] relative inline-block text-light text-base font-medium border-none py-[10xp] px-[25px] m-auto leading-10 shadow-activeButton transition-all duration-300 ease-in hover:bg-transparent"},[j("span",xy,zn(r.isActive?"Pause":"Start"),1)])])]))}});const Ay=en(ky,[["__scopeId","data-v-03a2c89d"]]);var ad=(e=>(e.pomodoro="pomodoro",e.longbreak="longbreak",e.shortbreak="shortbreak",e))(ad||{});const od=Qu("timer",()=>{const e=oe(ad.pomodoro),t=oe(!1);function n(){t.value=!t.value}function r(){t.value=!1}function i(){t.value=!0}return{mode:e,isActive:t,changeActiveStatus:n,onStop:r,onStart:i}});function oi(e){if(e<0)return"00:00";const t=Math.floor(e/(1e3*60*60)),n=Math.floor(e%(1e3*60*60)/(1e3*60));if(t>0||n>=60)return"59:59";const r=Math.floor(e%(1e3*60)/1e3);return`${n<10?"0"+n:n}:${r<10?"0"+r:r}`}function ml(e){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)}function Cy(e){return e.length>=6}function Ty(){if(!("Notification"in window)){console.log("This browser does not support notification");return}Notification.permission!=="granted"&&Notification.permission!=="denied"&&Notification.requestPermission().then(e=>{console.log(e)})}function Sy(e,t){Notification.permission==="granted"&&new Notification(e,t)}const Ke=oe(25*60*1e3),ir=oe("25:00");let ci=null;function Py(){const e=od(),{isActive:t,...n}=so(e),r=ke(()=>Ke.value);function i(){ci&&(clearInterval(ci),ci=null)}function s(a){switch(Sh(a)){case"Pomodoro":Ke.value=25*60*1e3,ir.value=oi(Ke.value);break;case"Long Break":Ke.value=15*60*1e3,ir.value=oi(Ke.value);break;case"Short Break":Ke.value=5*60*1e3,ir.value=oi(Ke.value);break;default:console.log("未定義的狀態！");break}}return vn(t,()=>{i(),t.value?ci=setInterval(()=>{Ke.value=r.value-1e3,ir.value=Ke.value<=0?"Time up":oi(Ke.value),Ke.value<=0&&(Sy("Pomofocus",{body:"Time up!"}),i(),e.changeActiveStatus())},1e3):(Ke.value=r.value,i())}),os(()=>{i()}),{remainingTime:ir,switchMode:s}}const Oy={class:"flex w-full h-full"},Ry={class:"w-[600px] h-[350px] bg-black m-auto rounded-[8px]"},Ny={class:"w-auto flex space-x-3 text-center text-xl cursor-pointer rounded-default justify-center items-center gap-6 menu"},Ly=["onClick"],My=rt({__name:"CountdownTimer",setup(e){const t=od(),{isActive:n,mode:r,...i}=so(t),{switchMode:s,remainingTime:a}=Py(),c=oe("Pomodoro"),o=oe([{id:1,title:"Pomodoro",time:"25:00"},{id:2,title:"Short Break",time:"05:00"},{id:3,title:"Long Break",time:"15:00"}]),l=f=>{c.value=f,t.onStop(),s(f)},u=()=>{t.changeActiveStatus()};return(f,d)=>(fe(),Le("section",Oy,[j("article",Ry,[j("ul",Ny,[(fe(!0),Le(ze,null,Lu(o.value,m=>(fe(),Le("li",{onClick:_=>l(m.title),class:te([{"tab-active":c.value===m.title},"block item h-auto hover:text-cyan-500 border-transparent border-b-2 hover:border-b-cyan-500 hover:transition duration-500"]),key:m.id},zn(m.title),11,Ly))),128))]),Ee(Ay,{isActive:_e(n),mode:_e(r),remainingTime:_e(a),onHandleTimeCountDown:u,class:"overflow-hidden"},null,8,["isActive","mode","remainingTime"])])]))}});const Dy=en(My,[["__scopeId","data-v-9e8afdef"]]),Fy={class:"w-full"},Uy=rt({__name:"HomeView",setup(e){return(t,n)=>(fe(),Le("main",Fy,[Ee(Dy)]))}}),$y={class:"flex justify-center items-center"},By={class:"form-box login absolute top-0 w-[50%] h-[100%] flex flex-col justify-center left-0 pt-0 pr-[60px] pb-0 pl-[40px] duration-700"},jy=["onSubmit"],Hy={class:te(["info-text","login","absolute","top-0","w-[50%]","h-full","right-0","flex","flex-col","justify-center","text-right","pt-0","pr-[40px]","pb-[60px]","pl-[150px]"])},zy=["onSubmit"],Wy=rt({__name:"LoginPage",setup(e){const t=hf(),n=cd();n.$onAction(({after:Q})=>{Q(G=>{if(G)switch(G==null?void 0:G.operationType){case"signIn":t.push("/"),r.msgHandler("Login success!","success",3e3);break}})});const r=ys(),i=oe(!1),s=oe(!1),a=oe(!1),c=oe(!1),o=oe(!1),l=oe(""),u=oe(""),f=oe(""),d=oe(""),m=ke(()=>d.value.length>=6),_=ke(()=>ml(f.value)),I=oe(!1),R=()=>{i.value=!0},v=Q=>{const G=Q.target;i.value=!!G.value},y=()=>{s.value=!0},S=Q=>{const G=Q.target;s.value=!!G.value},A=()=>{a.value=!0,I.value=!0},M=Q=>{const G=Q.target;a.value=!!G.value,I.value=!1},Y=()=>{c.value=!1,o.value=!0},q=()=>{o.value=!1},T=()=>{n.signInWithGoogle()},N=()=>{if(!m.value||!_.value){r.msgHandler("Invaild email or password.","failure",1500);return}n.registerWithEmailAndPassword(f.value,d.value)},K=()=>new Promise(Q=>{const G=f.value||d.value;Q(!!G)}),ie=()=>new Promise(Q=>{const G=l.value||u.value;Q(!!G)}),F=()=>{if(!l.value||!u.value){r.msgHandler("Invalid email or password!","failure",1e3);return}n.logInWithEmailAndPassword(l.value,u.value)};return Ig(async(Q,G,ge)=>{if(_o().currentUser){ge();return}const X=await K(),le=await ie();if((X||le)&&!window.confirm("Do you really want to leave? You have unsaved changes!")){ge(!1);return}ge()}),(Q,G)=>{const ge=Li("font-awesome-icon");return fe(),Le("main",$y,[j("div",{class:te([c.value?"active translate-x-0 opacity-100 filter blur-0":"","wrapper relative w-[750px] h-[450px] bg-transparent border-2 border-primary rounded shadow-custom-cyan overflow-hidden"])},[j("span",{class:te([o.value?"!rotate-[0deg] !skew-y-[0deg] delay-500":"!delay-1600","duration-1000 ease-linear bg-animate absolute top-[-4px] right-0 w-[850px] h-[600px] bg-gradient-to-r from-[#081b29] to-[#0ef] rotate-[10deg] skew-y-[40deg] origin-bottom-right border-b-[3px] border-primary"])},null,2),j("span",{class:te([o.value?"!-rotate-[11deg] !-skew-y-[41deg] delay-1000":"!delay-500","duration-1000 ease-linear bg-animate2 absolute top-full left-[250px] w-[850px] h-[700px] bg-black rotate-[11deg] skew-y-[41deg] origin-bottom-left border-t-[3px] border-primary"])},null,2),j("div",By,[j("h2",{class:te(["text-3xl text-white text-center ease-linear duration-700",o.value?"animation ease-linear duration-700 -translate-x-[120%] opacity-0 filter blur-[10px] delay-0":"!delay-2100"])},"Login",2),j("form",{onSubmit:Ec(F,["prevent"])},[j("div",{class:te([o.value?"animation ease-linear duration-700 -translate-x-[120%] delay-100 opacity-0 filter blur-[10px]":"!delay-2200","ease-linear duration-700 input-box relative w-full h-[50px] my-[25px] mx-0"])},[ri(j("input",{type:"email",required:"",class:te(["w-full","h-full","bg-transparent","outline-none","border-b-2","border-b-white","duration-500","focus:border-b-primary","text-white","p-[10px]"]),onFocus:R,onBlur:v,"onUpdate:modelValue":G[0]||(G[0]=X=>l.value=X)},null,544),[[si,l.value]]),j("label",{class:te(["absolute top-[50%] left-0 text-base text-white transform -translate-y-1/2 pointer-events-none duration-500",i.value?"!-top-[5px] !text-primary":""])}," Email ",2)],2),j("div",{class:te([o.value?"animation ease-linear duration-700 -translate-x-[120%] delay-200 opacity-0 filter blur-[10px]":"!delay-2300","ease-linear duration-700 input-box relative w-full h-[50px] my-[25px] mx-0"])},[ri(j("input",{type:"password",required:"",class:te(["w-full","h-full","bg-transparent","outline-none","border-b-2","border-b-white","duration-500","focus:border-b-primary","text-white","p-[10px]"]),onFocus:y,onBlur:S,"onUpdate:modelValue":G[1]||(G[1]=X=>u.value=X)},null,544),[[si,u.value]]),j("label",{class:te(["absolute top-[50%] left-0 text-base text-white transform -translate-y-1/2 pointer-events-none duration-500",s.value?"!-top-[5px] !text-primary":""])}," Password ",2)],2),j("button",{type:"submit",class:te([o.value?"animation ease-linear duration-700 -translate-x-[120%] delay-300 opacity-0 filter blur-[10px]":"!delay-2400","ease-linear duration-700 btn w-full h-[45px] border border-accent rounded-[40px] cursor-pointer text-base text-white font-semibold shadow-accent"])}," Login ",2),j("hr",{class:te([o.value?"animation ease-linear duration-700 -translate-x-[120%] delay-300 opacity-0 filter blur-[10px]":"!delay-2400","ease-linear duration-700 border-dashed mt-5 filter-[10px] text-gray-500"])},null,2),j("button",{onClick:T,class:te([o.value?"animation ease-linear duration-700 -translate-x-[120%] delay-300 opacity-0 filter blur-[10px]":"!delay-2400","ease-linear duration-700 mt-5 border-2 border-white outline-none rounded-[40px] w-full h-[40px] hover:shadow-neon"])},[Ee(ge,{icon:["fab","google"],class:"mr-4"}),Ht(" Login With Google ")],2),j("div",{class:te([o.value?"animation ease-linear duration-700 -translate-x-[120%] delay-550 opacity-0 filter blur-[10px]":"!delay-2500","ease-linear duration-700 logreg-link text-[14.5px] text-white text-center mt-5"])},[j("p",null,[Ht(" Don't have an account? "),j("button",{type:"button",onClick:Y,class:te(["ml-3","register-link","text-primary","decoration-[none]","font-semibold","hover:underline","cursor-pointer"])}," Sign Up ")])],2)],40,jy)]),j("div",Hy,[j("h2",{class:te([o.value?"animation ease-linear duration-700 translate-x-[120%] delay-550 opacity-0 filter blur-[10px]":"!delay-2000","duration-700","ease-linear","text-[36px]","text-white","leading-snug","uppercase"])}," Welcome Back! ",2),j("p",{class:te([o.value?"animation ease-linear duration-700 translate-x-[120%] delay-550 opacity-0 filter blur-[10px]":"!delay-2100","duration-700","ease-linear","text-[16px]","text-white"])}," You can login using your email or a third-party service. ",2)]),j("div",{class:te([o.value?"!translate-x-0":"",o.value?"!opacity-100":"",o.value?"!filter":"",o.value?"!blur-0":"",o.value?"!pointer-events-auto":"","form-box","register","absolute","top-0","w-[50%]","h-[100%]","flex","flex-col","justify-center","right-0","pt-0","pr-[40px]","pb-0","pl-[60px]","translate-x-[120%]","opacity-0","filter","blur-[10px]","duration-700","pointer-events-none"])},[j("h2",{class:te([o.value?"!translate-x-0":"",o.value?"!opacity-100":"",o.value?"!filter":"",o.value?"!blur-0":"",o.value?"delay-1700":"!delay-0","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","text-3xl","text-white","text-center"])}," Sign Up ",2),j("form",{onSubmit:Ec(N,["prevent"])},[j("div",{class:te([o.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-1900":"!delay-200","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","relative","w-full","h-[50px]","my-[20px]","mx-0"])},[ri(j("input",{type:"email",required:"",class:te(["w-full","h-full","bg-transparent","outline-none","border-b-2","border-b-white","duration-500","focus:border-b-primary","text-white","p-[10px]"]),onFocus:A,onBlur:M,"onUpdate:modelValue":G[2]||(G[2]=X=>f.value=X),onInput:G[3]||(G[3]=X=>_e(ml)(f.value))},null,544),[[si,f.value]]),j("label",{class:te(["absolute","top-[50%]","left-0","text-base","text-white","transform","-translate-y-1/2","pointer-events-none","duration-500",a.value?"!-top-[5px] !text-primary":""])}," Email ",2)],2),j("span",{class:te([_.value?"text-white":"text-gray-400",o.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-1900":"","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","block","mb-4"])},[_.value?(fe(),Ue(ge,{key:0,icon:["far","circle-check"],class:"text-green-500 mr-1"})):(fe(),Ue(ge,{key:1,icon:["far","circle-xmark"],class:"text-gray-400 mr-1"})),j("span",{class:te([_.value?"text-white":"text-gray-400","text-xs"])},"Valid email format.",2)],2),j("div",{class:te([o.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-2000":"!delay-300","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","input-box","relative","w-full","h-[50px]","my-[20px]","mx-0","mb-4"])},[ri(j("input",{type:"password",required:"",class:te(["w-full","h-full","bg-transparent","outline-none","border-b-2","border-b-white","duration-500","focus:border-b-primary","text-white","p-[10px]"]),onFocus:y,onBlur:S,"onUpdate:modelValue":G[4]||(G[4]=X=>d.value=X),onInput:G[5]||(G[5]=X=>_e(Cy)(d.value))},null,544),[[si,d.value]]),j("label",{class:te(["absolute","top-[50%]","left-0","text-base","text-white","transform","-translate-y-1/2","pointer-events-none","duration-500",s.value?"!-top-[5px] !text-primary":""])}," Password ",2)],2),j("span",{class:te([m.value?"text-white":"text-gray-400",o.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-2000":"!delay-300","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","mt-4","block"])},[m.value?(fe(),Ue(ge,{key:0,icon:["far","circle-check"],class:"text-green-400 mr-1"})):(fe(),Ue(ge,{key:1,icon:["far","circle-xmark"],class:"text-gray-400 mr-1"})),j("span",{class:te([m.value?"text-white":"text-gray-400","text-xs"])},"Password should be at least 6 characters.",2)],2),j("button",{type:"submit",class:te([o.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-2100":"!delay-400","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","btn","relative","w-full","h-[45px]","border-2","border-accent","outline-none","rounded-[40px]","cursor-pointer","text-base","text-white","font-semibold","shadow-accent","after:content","after:top-0","after:left-0","after:right-0","after:bottom-0","after:bg-primary","after:shadow-neon","after:opacity-0","hover:after:!opacity-100","mt-10"])}," Sign Up ",2),j("div",{class:te([o.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-2200":"!delay-500","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","logreg-link","text-[14.5px]","text-white","text-center","mt-5"])},[j("p",null,[Ht(" Already have an account? "),j("button",{type:"button",onClick:q,class:"ml-3 register-link text-primary decoration-[none font-semibold] hover:underline cursor-pointer"},"Login")])],2)],40,zy)],2),j("div",{class:te([o.value?"!translate-x-0 !opacity-100 !filter !blur-0 !pointer-events-auto":"","info-text","register","-translate-x-[120%]","absolute","top-0","w-[50%]","h-full","left-0","flex","flex-col","justify-center","text-left","pt-0","pr-[150px]","pb-[60px]","pl-[40px]","pointer-events-none","duration-700","ease-linear","opacity-0","filter","blur-[10px]"])},[j("h2",{class:te([o.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-1700":"!delay-0","opacity-0","filter","blur-[10px]","duration-700","ease-linear","-translate-x-[120%]","text-[36px]","text-white","leading-snug","uppercase"])}," Welcome on board! ",2),j("p",{class:te([o.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-1800":"!delay-100","opacity-0","filter","blur-[10px]","duration-700","ease-linear","-translate-x-[120%]","text-[16px]","text-white"])}," You can register using your email or a third-party service. ",2)],2)],2)])}}}),Vy={},Ky={class:"flex justify-center items-center"};function qy(e,t){return fe(),Le("main",Ky," 努力趕工中，尚無數據可以呈現。 ")}const Yy=en(Vy,[["render",qy]]),Gy={},Xy={class:"flex justify-center items-center"};function Jy(e,t){return fe(),Le("main",Xy," 努力趕工中，尚無可以設定的參數。 ")}const Qy=en(Gy,[["render",Jy]]),Zy=e=>(Eu("data-v-f75da371"),e=e(),Iu(),e),e_={class:"flex justify-center items-center flex-col w-[600px] h-[300px] my-0 mx-auto"},t_=Zy(()=>j("h2",{class:"text-5xl text-center mt-10"}," Oops! 404 Page not found. ",-1)),n_=rt({__name:"NotFound",setup(e){const t=hf();return(n,r)=>(fe(),Le("main",e_,[t_,j("button",{onClick:r[0]||(r[0]=()=>_e(t).push("/")),class:"btn bg-transparent rounded-lg border w-[150px] hover:text-light border-[#ffffff80] text-base font-medium py-[10xp] px-[20px] m-auto leading-10 hover:shadow-activeButton transition duration-300 ease-linear hover:text-shadow-light-back-to-home focus:text-shadow-light-back-to-home"}," Back to home ")]))}});const r_=en(n_,[["__scopeId","data-v-f75da371"]]),Vi=Pg({history:Km("/pomofocus-vue3/"),routes:[{path:"/",name:"home",component:Uy},{path:"/login",name:"login",component:Wy},{path:"/analysis",name:"analysis",component:Yy,meta:{requiresAuth:!0}},{path:"/setting",name:"setting",component:Qy,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",name:"NotFound",component:r_}]}),i_=()=>new Promise((e,t)=>{const n=Yf(_o(),r=>{n(),e(r)},t)}),s_=ys();Vi.beforeEach(async(e,t,n)=>{e.matched.some(r=>r.meta.requiresAuth)?await i_()?n():(s_.msgHandler("You do not have permission to view this page. Please log in.","failure",3e3),n("/login")):n()});const sr=_o(),a_=new gt,an=ys(),cd=Qu("user",()=>{const e=oe(!1),t=oe(""),n=oe(""),r=oe("");function i(){Yf(sr,l=>{if(l){e.value=!0;return}e.value=!1})}function s(){return cb(sr).then(()=>{e.value=!1,t.value="",n.value="",r.value="",an.msgHandler("You have successfully signed out.","success",3e3)}).catch(l=>{throw console.log(l),e.value=!0,an.msgHandler(l.code,"failure",3e3),l})}function a(){return Sb(sr,a_).then(l=>{const{user:u}=l;return t.value=u.displayName,n.value=u.email,r.value=u.photoURL,e.value=!0,l}).catch(l=>{throw console.log(l),e.value=!1,an.msgHandler(l.code,"failure",3e3),l})}function c(l,u){sb(sr,l,u).then(f=>{console.log(f),e.value=!0,Vi.push("/"),an.msgHandler("Login success!","success",3e3)}).catch(f=>{console.log(f),e.value=!1,an.msgHandler(f.code,"failure",3e3)})}function o(l,u){ib(sr,l,u).then(()=>{e.value=!0,Vi.push("/"),an.msgHandler("Registration successful, and you are now logged in.","success",3500)}).catch(f=>{e.value=!1,an.msgHandler(f.code,"failure",3500)})}return{checkIsLogin:i,signOutWithGoogle:s,signInWithGoogle:a,logInWithEmailAndPassword:c,registerWithEmailAndPassword:o,userName:t,userEmail:n,isLogin:e,userPhotoUrl:r}}),o_=e=>(Eu("data-v-626374bd"),e=e(),Iu(),e),c_={class:"flex justify-between h-20 w-[97%] mb-[30px]"},l_={class:"leading-loose contrast-20 w-[100px] text-center"},u_={class:"animate-fadeIn flex items-center gap-2 max-md:hidden"},f_={class:"flex"},d_=o_(()=>j("div",{class:"menu-btn__burger w-[45px] h-[6px] bg-primary rounded-[2px] shadow-burger transition duration-500 ease-in-out"},null,-1)),h_=[d_],p_=rt({__name:"NavHeader",setup(e){const t=cd(),{isLogin:n}=so(t),r=oe(!1),i=oe([{id:"item01",name:"analysis",icon:"chart-line"},{id:"item02",name:"setting",icon:"gear"},{id:"item03",name:"login"}]),s=()=>{r.value=!r.value};return as(()=>{t.checkIsLogin()}),(a,c)=>{const o=Li("RouterLink"),l=Li("font-awesome-icon");return fe(),Le("header",c_,[j("h1",l_,[Ee(o,{to:"/",class:""},{default:gn(()=>[Ht("Pomofocus")]),_:1})]),j("nav",u_,[j("ul",f_,[(fe(!0),Le(ze,null,Lu(i.value,u=>(fe(),Le("li",{key:u.id,class:"leading-loose ml-5 min-h-full transition-transform transition-shadow duration-300 hover:translate-y-[2px] active:translate-y-[5px]"},[u.name.toLowerCase()==="login"?(fe(),Ue(o,{key:0,to:"/login",class:"group text-base max-w-prose nav-item"},{default:gn(()=>[_e(n)?(fe(),Ue(l,{key:0,icon:["fas","user-check"],class:"mr-1 transition ease duration-300 group-hover:rotateY-360"})):(fe(),Ue(l,{key:1,icon:["fas","user"],class:"mr-1 transition ease duration-500 group-hover:rotateY-360"})),Ht(" "+zn(u.name),1)]),_:2},1024)):_e(n)&&u.name.toLowerCase()!=="login"?(fe(),Ue(o,{key:1,to:`/${u.name.toLowerCase()}`,class:"group text-base max-w-prose nav-item"},{default:gn(()=>[u!=null&&u.icon?(fe(),Ue(l,{key:0,icon:["fas",u.icon],class:"mr-1 transition ease duration-500 group-hover:rotateY-360"},null,8,["icon"])):Ii("",!0),Ht(" "+zn(u.name),1)]),_:2},1032,["to"])):Ii("",!0)]))),128))]),_e(n)?(fe(),Le("button",{key:0,onClick:c[0]||(c[0]=(...u)=>_e(t).signOutWithGoogle&&_e(t).signOutWithGoogle(...u)),class:"group leading-[1.3] ml-5 text-base max-w-prose nav-item"},[Ee(l,{icon:["fas","arrow-right-from-bracket"],class:"mr-1 transition duration-300 ease group-hover:translate-x-1"}),Ht(" logout ")])):Ii("",!0)]),j("div",{class:te([{active:r.value},"md:hidden menu-btn relative flex justify-center items-center w-[80px] h-[80px] cursor-pointer transition duration-500 ease-in-out"]),onClick:s},h_,2)])}}});const m_=en(p_,[["__scopeId","data-v-626374bd"]]),g_={key:0,class:"toast max-w-[320px] h-auto bg-white rounded fixed top-0 left-[50%] z-[9999] opacity-0"},v_={class:"flex items-center w-auto my-auto mx-0 p-3"},b_=rt({__name:"GlobalToast",props:{show:{type:Boolean},message:{},type:{},displayTime:{}},emits:["close"],setup(e,{emit:t}){return Gh(()=>{e.show&&setTimeout(()=>{t("close")},e.displayTime)}),(n,r)=>{const i=Li("font-awesome-icon");return fe(),Ue(Sp,{to:"body"},[Ee(ds,{name:"slide"},{default:gn(()=>[n.show?(fe(),Le("div",g_,[j("div",v_,[n.type==="success"?(fe(),Ue(i,{key:0,icon:["far","circle-check"],class:"text-xl text-green-500 mr-5"})):(fe(),Ue(i,{key:1,icon:["far","circle-xmark"],class:"text-xl text-red-500 mr-5"})),j("span",{class:te(["block",n.type==="success"?"text-gray-700":"text-gray-400","text-xl"])},zn(n.message),3)])])):Ii("",!0)]),_:1})])}}});const gl=en(b_,[["__scopeId","data-v-d607088d"]]),y_={class:"xl:max-w-1200 lg:max-w-1000 md:max-w-600 w-[90vw] mx-auto my-0 h-screen"},__=rt({__name:"App",setup(e){const t=ys();return as(()=>{t.component.value=$r(gl),Ty()}),(n,r)=>(fe(),Le(ze,null,[Ee(gl,{onClose:r[0]||(r[0]=()=>_e(t).closeToast()),show:_e(t).show.value,message:_e(t).message.value,type:_e(t).type.value,"display-time":_e(t).time.value},null,8,["show","message","type","display-time"]),j("main",y_,[Ee(m_),Ee(_e(df),null,{default:gn(({Component:i})=>[Ee(ds,{name:"fade",mode:"out-in"},{default:gn(()=>[(fe(),Ue(cp(i)))]),_:2},1024)]),_:1})])],64))}});const w_=en(__,[["__scopeId","data-v-18b81c71"]]);function vl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?vl(Object(n),!0).forEach(function(r){Se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vl(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ki(e){"@babel/helpers - typeof";return Ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ki(e)}function E_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bl(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I_(e,t,n){return t&&bl(e.prototype,t),n&&bl(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wo(e,t){return k_(e)||C_(e,t)||ld(e,t)||S_()}function qr(e){return x_(e)||A_(e)||ld(e)||T_()}function x_(e){if(Array.isArray(e))return xa(e)}function k_(e){if(Array.isArray(e))return e}function A_(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function C_(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,a,c;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(o){s=!0,c=o}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw c}}return r}}function ld(e,t){if(e){if(typeof e=="string")return xa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xa(e,t)}}function xa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function T_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function S_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yl=function(){},Eo={},ud={},fd=null,dd={mark:yl,measure:yl};try{typeof window<"u"&&(Eo=window),typeof document<"u"&&(ud=document),typeof MutationObserver<"u"&&(fd=MutationObserver),typeof performance<"u"&&(dd=performance)}catch{}var P_=Eo.navigator||{},_l=P_.userAgent,wl=_l===void 0?"":_l,Gt=Eo,ye=ud,El=fd,li=dd;Gt.document;var Tt=!!ye.documentElement&&!!ye.head&&typeof ye.addEventListener=="function"&&typeof ye.createElement=="function",hd=~wl.indexOf("MSIE")||~wl.indexOf("Trident/"),ui,fi,di,hi,pi,It="___FONT_AWESOME___",ka=16,pd="fa",md="svg-inline--fa",In="data-fa-i2svg",Aa="data-fa-pseudo-element",O_="data-fa-pseudo-element-pending",Io="data-prefix",xo="data-icon",Il="fontawesome-i2svg",R_="async",N_=["HTML","HEAD","STYLE","SCRIPT"],gd=function(){try{return!0}catch{return!1}}(),be="classic",Ie="sharp",ko=[be,Ie];function Yr(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[be]}})}var Nr=Yr((ui={},Se(ui,be,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Se(ui,Ie,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ui)),Lr=Yr((fi={},Se(fi,be,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Se(fi,Ie,{solid:"fass",regular:"fasr",light:"fasl"}),fi)),Mr=Yr((di={},Se(di,be,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Se(di,Ie,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),di)),L_=Yr((hi={},Se(hi,be,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Se(hi,Ie,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),hi)),M_=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,vd="fa-layers-text",D_=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,F_=Yr((pi={},Se(pi,be,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Se(pi,Ie,{900:"fass",400:"fasr",300:"fasl"}),pi)),bd=[1,2,3,4,5,6,7,8,9,10],U_=bd.concat([11,12,13,14,15,16,17,18,19,20]),$_=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],hn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Dr=new Set;Object.keys(Lr[be]).map(Dr.add.bind(Dr));Object.keys(Lr[Ie]).map(Dr.add.bind(Dr));var B_=[].concat(ko,qr(Dr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",hn.GROUP,hn.SWAP_OPACITY,hn.PRIMARY,hn.SECONDARY]).concat(bd.map(function(e){return"".concat(e,"x")})).concat(U_.map(function(e){return"w-".concat(e)})),br=Gt.FontAwesomeConfig||{};function j_(e){var t=ye.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function H_(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ye&&typeof ye.querySelector=="function"){var z_=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];z_.forEach(function(e){var t=wo(e,2),n=t[0],r=t[1],i=H_(j_(n));i!=null&&(br[r]=i)})}var yd={styleDefault:"solid",familyDefault:"classic",cssPrefix:pd,replacementClass:md,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};br.familyPrefix&&(br.cssPrefix=br.familyPrefix);var Gn=D(D({},yd),br);Gn.autoReplaceSvg||(Gn.observeMutations=!1);var B={};Object.keys(yd).forEach(function(e){Object.defineProperty(B,e,{enumerable:!0,set:function(n){Gn[e]=n,yr.forEach(function(r){return r(B)})},get:function(){return Gn[e]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(t){Gn.cssPrefix=t,yr.forEach(function(n){return n(B)})},get:function(){return Gn.cssPrefix}});Gt.FontAwesomeConfig=B;var yr=[];function W_(e){return yr.push(e),function(){yr.splice(yr.indexOf(e),1)}}var Mt=ka,lt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function V_(e){if(!(!e||!Tt)){var t=ye.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ye.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=s)}return ye.head.insertBefore(t,r),e}}var K_="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Fr(){for(var e=12,t="";e-- >0;)t+=K_[Math.random()*62|0];return t}function er(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ao(e){return e.classList?er(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function _d(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function q_(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(_d(e[n]),'" ')},"").trim()}function _s(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Co(e){return e.size!==lt.size||e.x!==lt.x||e.y!==lt.y||e.rotate!==lt.rotate||e.flipX||e.flipY}function Y_(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),c="rotate(".concat(t.rotate," 0 0)"),o={transform:"".concat(s," ").concat(a," ").concat(c)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:o,path:l}}function G_(e){var t=e.transform,n=e.width,r=n===void 0?ka:n,i=e.height,s=i===void 0?ka:i,a=e.startCentered,c=a===void 0?!1:a,o="";return c&&hd?o+="translate(".concat(t.x/Mt-r/2,"em, ").concat(t.y/Mt-s/2,"em) "):c?o+="translate(calc(-50% + ".concat(t.x/Mt,"em), calc(-50% + ").concat(t.y/Mt,"em)) "):o+="translate(".concat(t.x/Mt,"em, ").concat(t.y/Mt,"em) "),o+="scale(".concat(t.size/Mt*(t.flipX?-1:1),", ").concat(t.size/Mt*(t.flipY?-1:1),") "),o+="rotate(".concat(t.rotate,"deg) "),o}var X_=`:root, :host {
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
}`;function wd(){var e=pd,t=md,n=B.cssPrefix,r=B.replacementClass,i=X_;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),c=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(c,".".concat(r))}return i}var xl=!1;function Vs(){B.autoAddCss&&!xl&&(V_(wd()),xl=!0)}var J_={mixout:function(){return{dom:{css:wd,insertCss:Vs}}},hooks:function(){return{beforeDOMElementCreation:function(){Vs()},beforeI2svg:function(){Vs()}}}},xt=Gt||{};xt[It]||(xt[It]={});xt[It].styles||(xt[It].styles={});xt[It].hooks||(xt[It].hooks={});xt[It].shims||(xt[It].shims=[]);var Ze=xt[It],Ed=[],Q_=function e(){ye.removeEventListener("DOMContentLoaded",e),qi=1,Ed.map(function(t){return t()})},qi=!1;Tt&&(qi=(ye.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ye.readyState),qi||ye.addEventListener("DOMContentLoaded",Q_));function Z_(e){Tt&&(qi?setTimeout(e,0):Ed.push(e))}function Gr(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?_d(e):"<".concat(t," ").concat(q_(r),">").concat(s.map(Gr).join(""),"</").concat(t,">")}function kl(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var e1=function(t,n){return function(r,i,s,a){return t.call(n,r,i,s,a)}},Ks=function(t,n,r,i){var s=Object.keys(t),a=s.length,c=i!==void 0?e1(n,i):n,o,l,u;for(r===void 0?(o=1,u=t[s[0]]):(o=0,u=r);o<a;o++)l=s[o],u=c(u,t[l],l,t);return u};function t1(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Ca(e){var t=t1(e);return t.length===1?t[0].toString(16):null}function n1(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Al(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ta(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Al(t);typeof Ze.hooks.addPack=="function"&&!i?Ze.hooks.addPack(e,Al(t)):Ze.styles[e]=D(D({},Ze.styles[e]||{}),s),e==="fas"&&Ta("fa",t)}var mi,gi,vi,Ln=Ze.styles,r1=Ze.shims,i1=(mi={},Se(mi,be,Object.values(Mr[be])),Se(mi,Ie,Object.values(Mr[Ie])),mi),To=null,Id={},xd={},kd={},Ad={},Cd={},s1=(gi={},Se(gi,be,Object.keys(Nr[be])),Se(gi,Ie,Object.keys(Nr[Ie])),gi);function a1(e){return~B_.indexOf(e)}function o1(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!a1(i)?i:null}var Td=function(){var t=function(s){return Ks(Ln,function(a,c,o){return a[o]=Ks(c,s,{}),a},{})};Id=t(function(i,s,a){if(s[3]&&(i[s[3]]=a),s[2]){var c=s[2].filter(function(o){return typeof o=="number"});c.forEach(function(o){i[o.toString(16)]=a})}return i}),xd=t(function(i,s,a){if(i[a]=a,s[2]){var c=s[2].filter(function(o){return typeof o=="string"});c.forEach(function(o){i[o]=a})}return i}),Cd=t(function(i,s,a){var c=s[2];return i[a]=a,c.forEach(function(o){i[o]=a}),i});var n="far"in Ln||B.autoFetchSvg,r=Ks(r1,function(i,s){var a=s[0],c=s[1],o=s[2];return c==="far"&&!n&&(c="fas"),typeof a=="string"&&(i.names[a]={prefix:c,iconName:o}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:c,iconName:o}),i},{names:{},unicodes:{}});kd=r.names,Ad=r.unicodes,To=ws(B.styleDefault,{family:B.familyDefault})};W_(function(e){To=ws(e.styleDefault,{family:B.familyDefault})});Td();function So(e,t){return(Id[e]||{})[t]}function c1(e,t){return(xd[e]||{})[t]}function pn(e,t){return(Cd[e]||{})[t]}function Sd(e){return kd[e]||{prefix:null,iconName:null}}function l1(e){var t=Ad[e],n=So("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Xt(){return To}var Po=function(){return{prefix:null,iconName:null,rest:[]}};function ws(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?be:n,i=Nr[r][e],s=Lr[r][e]||Lr[r][i],a=e in Ze.styles?e:null;return s||a||null}var Cl=(vi={},Se(vi,be,Object.keys(Mr[be])),Se(vi,Ie,Object.keys(Mr[Ie])),vi);function Es(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},Se(t,be,"".concat(B.cssPrefix,"-").concat(be)),Se(t,Ie,"".concat(B.cssPrefix,"-").concat(Ie)),t),a=null,c=be;(e.includes(s[be])||e.some(function(l){return Cl[be].includes(l)}))&&(c=be),(e.includes(s[Ie])||e.some(function(l){return Cl[Ie].includes(l)}))&&(c=Ie);var o=e.reduce(function(l,u){var f=o1(B.cssPrefix,u);if(Ln[u]?(u=i1[c].includes(u)?L_[c][u]:u,a=u,l.prefix=u):s1[c].indexOf(u)>-1?(a=u,l.prefix=ws(u,{family:c})):f?l.iconName=f:u!==B.replacementClass&&u!==s[be]&&u!==s[Ie]&&l.rest.push(u),!i&&l.prefix&&l.iconName){var d=a==="fa"?Sd(l.iconName):{},m=pn(l.prefix,l.iconName);d.prefix&&(a=null),l.iconName=d.iconName||m||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!Ln.far&&Ln.fas&&!B.autoFetchSvg&&(l.prefix="fas")}return l},Po());return(e.includes("fa-brands")||e.includes("fab"))&&(o.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(o.prefix="fad"),!o.prefix&&c===Ie&&(Ln.fass||B.autoFetchSvg)&&(o.prefix="fass",o.iconName=pn(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||a==="fa")&&(o.prefix=Xt()||"fas"),o}var u1=function(){function e(){E_(this,e),this.definitions={}}return I_(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(c){n.definitions[c]=D(D({},n.definitions[c]||{}),a[c]),Ta(c,a[c]);var o=Mr[be][c];o&&Ta(o,a[c]),Td()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var a=i[s],c=a.prefix,o=a.iconName,l=a.icon,u=l[2];n[c]||(n[c]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[c][f]=l)}),n[c][o]=l}),n}}]),e}(),Tl=[],Mn={},Hn={},f1=Object.keys(Hn);function d1(e,t){var n=t.mixoutsTo;return Tl=e,Mn={},Object.keys(Hn).forEach(function(r){f1.indexOf(r)===-1&&delete Hn[r]}),Tl.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),Ki(i[a])==="object"&&Object.keys(i[a]).forEach(function(c){n[a]||(n[a]={}),n[a][c]=i[a][c]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(a){Mn[a]||(Mn[a]=[]),Mn[a].push(s[a])})}r.provides&&r.provides(Hn)}),n}function Sa(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Mn[e]||[];return s.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function xn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Mn[e]||[];i.forEach(function(s){s.apply(null,n)})}function kt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Hn[e]?Hn[e].apply(null,t):void 0}function Pa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Xt();if(t)return t=pn(n,t)||t,kl(Pd.definitions,n,t)||kl(Ze.styles,n,t)}var Pd=new u1,h1=function(){B.autoReplaceSvg=!1,B.observeMutations=!1,xn("noAuto")},p1={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Tt?(xn("beforeI2svg",t),kt("pseudoElements2svg",t),kt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,Z_(function(){g1({autoReplaceSvgRoot:n}),xn("watch",t)})}},m1={icon:function(t){if(t===null)return null;if(Ki(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:pn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ws(t[0]);return{prefix:r,iconName:pn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(B.cssPrefix,"-"))>-1||t.match(M_))){var i=Es(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Xt(),iconName:pn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=Xt();return{prefix:s,iconName:pn(s,t)||t}}}},We={noAuto:h1,config:B,dom:p1,parse:m1,library:Pd,findIconDefinition:Pa,toHtml:Gr},g1=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ye:n;(Object.keys(Ze.styles).length>0||B.autoFetchSvg)&&Tt&&B.autoReplaceSvg&&We.dom.i2svg({node:r})};function Is(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Gr(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Tt){var r=ye.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function v1(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,a=e.transform;if(Co(a)&&n.found&&!r.found){var c=n.width,o=n.height,l={x:c/o/2,y:.5};i.style=_s(D(D({},s),{},{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function b1(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,a=s===!0?"".concat(t,"-").concat(B.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:D(D({},i),{},{id:a}),children:r}]}]}function Oo(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,a=e.transform,c=e.symbol,o=e.title,l=e.maskId,u=e.titleId,f=e.extra,d=e.watchable,m=d===void 0?!1:d,_=r.found?r:n,I=_.width,R=_.height,v=i==="fak",y=[B.replacementClass,s?"".concat(B.cssPrefix,"-").concat(s):""].filter(function(N){return f.classes.indexOf(N)===-1}).filter(function(N){return N!==""||!!N}).concat(f.classes).join(" "),S={children:[],attributes:D(D({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:y,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(R)})},A=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(I/R*16*.0625,"em")}:{};m&&(S.attributes[In]=""),o&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(u||Fr())},children:[o]}),delete S.attributes.title);var M=D(D({},S),{},{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:a,symbol:c,styles:D(D({},A),f.styles)}),Y=r.found&&n.found?kt("generateAbstractMask",M)||{children:[],attributes:{}}:kt("generateAbstractIcon",M)||{children:[],attributes:{}},q=Y.children,T=Y.attributes;return M.children=q,M.attributes=T,c?b1(M):v1(M)}function Sl(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,a=e.extra,c=e.watchable,o=c===void 0?!1:c,l=D(D(D({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});o&&(l[In]="");var u=D({},a.styles);Co(i)&&(u.transform=G_({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=_s(u);f.length>0&&(l.style=f);var d=[];return d.push({tag:"span",attributes:l,children:[t]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function y1(e){var t=e.content,n=e.title,r=e.extra,i=D(D(D({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=_s(r.styles);s.length>0&&(i.style=s);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var qs=Ze.styles;function Oa(e){var t=e[0],n=e[1],r=e.slice(4),i=wo(r,1),s=i[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(hn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(hn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(hn.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:a}}var _1={found:!1,width:512,height:512};function w1(e,t){!gd&&!B.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ra(e,t){var n=t;return t==="fa"&&B.styleDefault!==null&&(t=Xt()),new Promise(function(r,i){if(kt("missingIconAbstract"),n==="fa"){var s=Sd(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&qs[t]&&qs[t][e]){var a=qs[t][e];return r(Oa(a))}w1(e,t),r(D(D({},_1),{},{icon:B.showMissingIcons&&e?kt("missingIconAbstract")||{}:{}}))})}var Pl=function(){},Na=B.measurePerformance&&li&&li.mark&&li.measure?li:{mark:Pl,measure:Pl},ur='FA "6.4.2"',E1=function(t){return Na.mark("".concat(ur," ").concat(t," begins")),function(){return Od(t)}},Od=function(t){Na.mark("".concat(ur," ").concat(t," ends")),Na.measure("".concat(ur," ").concat(t),"".concat(ur," ").concat(t," begins"),"".concat(ur," ").concat(t," ends"))},Ro={begin:E1,end:Od},Ti=function(){};function Ol(e){var t=e.getAttribute?e.getAttribute(In):null;return typeof t=="string"}function I1(e){var t=e.getAttribute?e.getAttribute(Io):null,n=e.getAttribute?e.getAttribute(xo):null;return t&&n}function x1(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(B.replacementClass)}function k1(){if(B.autoReplaceSvg===!0)return Si.replace;var e=Si[B.autoReplaceSvg];return e||Si.replace}function A1(e){return ye.createElementNS("http://www.w3.org/2000/svg",e)}function C1(e){return ye.createElement(e)}function Rd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?A1:C1:n;if(typeof e=="string")return ye.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var s=e.children||[];return s.forEach(function(a){i.appendChild(Rd(a,{ceFn:r}))}),i}function T1(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Si={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Rd(i),n)}),n.getAttribute(In)===null&&B.keepOriginalSource){var r=ye.createComment(T1(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ao(n).indexOf(B.replacementClass))return Si.replace(t);var i=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(c,o){return o===B.replacementClass||o.match(i)?c.toSvg.push(o):c.toNode.push(o),c},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var a=r.map(function(c){return Gr(c)}).join(`
`);n.setAttribute(In,""),n.innerHTML=a}};function Rl(e){e()}function Nd(e,t){var n=typeof t=="function"?t:Ti;if(e.length===0)n();else{var r=Rl;B.mutateApproach===R_&&(r=Gt.requestAnimationFrame||Rl),r(function(){var i=k1(),s=Ro.begin("mutate");e.map(i),s(),n()})}}var No=!1;function Ld(){No=!0}function La(){No=!1}var Yi=null;function Nl(e){if(El&&B.observeMutations){var t=e.treeCallback,n=t===void 0?Ti:t,r=e.nodeCallback,i=r===void 0?Ti:r,s=e.pseudoElementsCallback,a=s===void 0?Ti:s,c=e.observeMutationsRoot,o=c===void 0?ye:c;Yi=new El(function(l){if(!No){var u=Xt();er(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Ol(f.addedNodes[0])&&(B.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&B.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&Ol(f.target)&&~$_.indexOf(f.attributeName))if(f.attributeName==="class"&&I1(f.target)){var d=Es(Ao(f.target)),m=d.prefix,_=d.iconName;f.target.setAttribute(Io,m||u),_&&f.target.setAttribute(xo,_)}else x1(f.target)&&i(f.target)})}}),Tt&&Yi.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function S1(){Yi&&Yi.disconnect()}function P1(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),a=s[0],c=s.slice(1);return a&&c.length>0&&(r[a]=c.join(":").trim()),r},{})),n}function O1(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Es(Ao(e));return i.prefix||(i.prefix=Xt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=c1(i.prefix,e.innerText)||So(i.prefix,Ca(e.innerText))),!i.iconName&&B.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function R1(e){var t=er(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return B.autoA11y&&(n?t["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(r||Fr()):(t["aria-hidden"]="true",t.focusable="false")),t}function N1(){return{iconName:null,title:null,titleId:null,prefix:null,transform:lt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ll(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=O1(e),r=n.iconName,i=n.prefix,s=n.rest,a=R1(e),c=Sa("parseNodeAttributes",{},e),o=t.styleParser?P1(e):[];return D({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:lt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:o,attributes:a}},c)}var L1=Ze.styles;function Md(e){var t=B.autoReplaceSvg==="nest"?Ll(e,{styleParser:!1}):Ll(e);return~t.extra.classes.indexOf(vd)?kt("generateLayersText",e,t):kt("generateSvgReplacementMutation",e,t)}var Jt=new Set;ko.map(function(e){Jt.add("fa-".concat(e))});Object.keys(Nr[be]).map(Jt.add.bind(Jt));Object.keys(Nr[Ie]).map(Jt.add.bind(Jt));Jt=qr(Jt);function Ml(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Tt)return Promise.resolve();var n=ye.documentElement.classList,r=function(f){return n.add("".concat(Il,"-").concat(f))},i=function(f){return n.remove("".concat(Il,"-").concat(f))},s=B.autoFetchSvg?Jt:ko.map(function(u){return"fa-".concat(u)}).concat(Object.keys(L1));s.includes("fa")||s.push("fa");var a=[".".concat(vd,":not([").concat(In,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(In,"])")})).join(", ");if(a.length===0)return Promise.resolve();var c=[];try{c=er(e.querySelectorAll(a))}catch{}if(c.length>0)r("pending"),i("complete");else return Promise.resolve();var o=Ro.begin("onTree"),l=c.reduce(function(u,f){try{var d=Md(f);d&&u.push(d)}catch(m){gd||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(d){Nd(d,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),o(),u()})}).catch(function(d){o(),f(d)})})}function M1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Md(e).then(function(n){n&&Nd([n],t)})}function D1(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Pa(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Pa(i||{})),e(r,D(D({},n),{},{mask:i}))}}var F1=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?lt:r,s=n.symbol,a=s===void 0?!1:s,c=n.mask,o=c===void 0?null:c,l=n.maskId,u=l===void 0?null:l,f=n.title,d=f===void 0?null:f,m=n.titleId,_=m===void 0?null:m,I=n.classes,R=I===void 0?[]:I,v=n.attributes,y=v===void 0?{}:v,S=n.styles,A=S===void 0?{}:S;if(t){var M=t.prefix,Y=t.iconName,q=t.icon;return Is(D({type:"icon"},t),function(){return xn("beforeDOMElementCreation",{iconDefinition:t,params:n}),B.autoA11y&&(d?y["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(_||Fr()):(y["aria-hidden"]="true",y.focusable="false")),Oo({icons:{main:Oa(q),mask:o?Oa(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:Y,transform:D(D({},lt),i),symbol:a,title:d,maskId:u,titleId:_,extra:{attributes:y,styles:A,classes:R}})})}},U1={mixout:function(){return{icon:D1(F1)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ml,n.nodeCallback=M1,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ye:r,s=n.callback,a=s===void 0?function(){}:s;return Ml(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,a=r.titleId,c=r.prefix,o=r.transform,l=r.symbol,u=r.mask,f=r.maskId,d=r.extra;return new Promise(function(m,_){Promise.all([Ra(i,c),u.iconName?Ra(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var R=wo(I,2),v=R[0],y=R[1];m([n,Oo({icons:{main:v,mask:y},prefix:c,iconName:i,transform:o,symbol:l,maskId:f,title:s,titleId:a,extra:d,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.transform,c=n.styles,o=_s(c);o.length>0&&(i.style=o);var l;return Co(a)&&(l=kt("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),r.push(l||s.icon),{children:r,attributes:i}}}},$1={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Is({type:"layer"},function(){xn("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(c){Array.isArray(c)?c.map(function(o){a=a.concat(o.abstract)}):a=a.concat(c.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers")].concat(qr(s)).join(" ")},children:a}]})}}}},B1={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,a=r.classes,c=a===void 0?[]:a,o=r.attributes,l=o===void 0?{}:o,u=r.styles,f=u===void 0?{}:u;return Is({type:"counter",content:n},function(){return xn("beforeDOMElementCreation",{content:n,params:r}),y1({content:n.toString(),title:s,extra:{attributes:l,styles:f,classes:["".concat(B.cssPrefix,"-layers-counter")].concat(qr(c))}})})}}}},j1={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?lt:i,a=r.title,c=a===void 0?null:a,o=r.classes,l=o===void 0?[]:o,u=r.attributes,f=u===void 0?{}:u,d=r.styles,m=d===void 0?{}:d;return Is({type:"text",content:n},function(){return xn("beforeDOMElementCreation",{content:n,params:r}),Sl({content:n,transform:D(D({},lt),s),title:c,extra:{attributes:f,styles:m,classes:["".concat(B.cssPrefix,"-layers-text")].concat(qr(l))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,a=r.extra,c=null,o=null;if(hd){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();c=u.width/l,o=u.height/l}return B.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,Sl({content:n.innerHTML,width:c,height:o,transform:s,title:i,extra:a,watchable:!0})])}}},H1=new RegExp('"',"ug"),Dl=[1105920,1112319];function z1(e){var t=e.replace(H1,""),n=n1(t,0),r=n>=Dl[0]&&n<=Dl[1],i=t.length===2?t[0]===t[1]:!1;return{value:Ca(i?t[0]:t),isSecondary:r||i}}function Fl(e,t){var n="".concat(O_).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=er(e.children),a=s.filter(function(q){return q.getAttribute(Aa)===t})[0],c=Gt.getComputedStyle(e,t),o=c.getPropertyValue("font-family").match(D_),l=c.getPropertyValue("font-weight"),u=c.getPropertyValue("content");if(a&&!o)return e.removeChild(a),r();if(o&&u!=="none"&&u!==""){var f=c.getPropertyValue("content"),d=~["Sharp"].indexOf(o[2])?Ie:be,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?Lr[d][o[2].toLowerCase()]:F_[d][l],_=z1(f),I=_.value,R=_.isSecondary,v=o[0].startsWith("FontAwesome"),y=So(m,I),S=y;if(v){var A=l1(I);A.iconName&&A.prefix&&(y=A.iconName,m=A.prefix)}if(y&&!R&&(!a||a.getAttribute(Io)!==m||a.getAttribute(xo)!==S)){e.setAttribute(n,S),a&&e.removeChild(a);var M=N1(),Y=M.extra;Y.attributes[Aa]=t,Ra(y,m).then(function(q){var T=Oo(D(D({},M),{},{icons:{main:q,mask:Po()},prefix:m,iconName:S,extra:Y,watchable:!0})),N=ye.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(N,e.firstChild):e.appendChild(N),N.outerHTML=T.map(function(K){return Gr(K)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function W1(e){return Promise.all([Fl(e,"::before"),Fl(e,"::after")])}function V1(e){return e.parentNode!==document.head&&!~N_.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Aa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ul(e){if(Tt)return new Promise(function(t,n){var r=er(e.querySelectorAll("*")).filter(V1).map(W1),i=Ro.begin("searchPseudoElements");Ld(),Promise.all(r).then(function(){i(),La(),t()}).catch(function(){i(),La(),n()})})}var K1={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ul,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ye:r;B.searchPseudoElements&&Ul(i)}}},$l=!1,q1={mixout:function(){return{dom:{unwatch:function(){Ld(),$l=!0}}}},hooks:function(){return{bootstrap:function(){Nl(Sa("mutationObserverCallbacks",{}))},noAuto:function(){S1()},watch:function(n){var r=n.observeMutationsRoot;$l?La():Nl(Sa("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Bl=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),a=s[0],c=s.slice(1).join("-");if(a&&c==="h")return r.flipX=!0,r;if(a&&c==="v")return r.flipY=!0,r;if(c=parseFloat(c),isNaN(c))return r;switch(a){case"grow":r.size=r.size+c;break;case"shrink":r.size=r.size-c;break;case"left":r.x=r.x-c;break;case"right":r.x=r.x+c;break;case"up":r.y=r.y-c;break;case"down":r.y=r.y+c;break;case"rotate":r.rotate=r.rotate+c;break}return r},n)},Y1={mixout:function(){return{parse:{transform:function(n){return Bl(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Bl(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,a=n.iconWidth,c={transform:"translate(".concat(s/2," 256)")},o="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(o," ").concat(l," ").concat(u)},d={transform:"translate(".concat(a/2*-1," -256)")},m={outer:c,inner:f,path:d};return{tag:"g",attributes:D({},m.outer),children:[{tag:"g",attributes:D({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:D(D({},r.icon.attributes),m.path)}]}]}}}},Ys={x:0,y:0,width:"100%",height:"100%"};function jl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function G1(e){return e.tag==="g"?e.children:[e]}var X1={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Es(i.split(" ").map(function(a){return a.trim()})):Po();return s.prefix||(s.prefix=Xt()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.mask,c=n.maskId,o=n.transform,l=s.width,u=s.icon,f=a.width,d=a.icon,m=Y_({transform:o,containerWidth:f,iconWidth:l}),_={tag:"rect",attributes:D(D({},Ys),{},{fill:"white"})},I=u.children?{children:u.children.map(jl)}:{},R={tag:"g",attributes:D({},m.inner),children:[jl(D({tag:u.tag,attributes:D(D({},u.attributes),m.path)},I))]},v={tag:"g",attributes:D({},m.outer),children:[R]},y="mask-".concat(c||Fr()),S="clip-".concat(c||Fr()),A={tag:"mask",attributes:D(D({},Ys),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,v]},M={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:G1(d)},A]};return r.push(M,{tag:"rect",attributes:D({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(y,")")},Ys)}),{children:r,attributes:i}}}},J1={provides:function(t){var n=!1;Gt.matchMedia&&(n=Gt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:D(D({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=D(D({},s),{},{attributeName:"opacity"}),c={tag:"circle",attributes:D(D({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||c.children.push({tag:"animate",attributes:D(D({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:D(D({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(c),r.push({tag:"path",attributes:D(D({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:D(D({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:D(D({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:D(D({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Q1={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},Z1=[J_,U1,$1,B1,j1,K1,q1,Y1,X1,J1,Q1];d1(Z1,{mixoutsTo:We});We.noAuto;We.config;var ew=We.library;We.dom;var Ma=We.parse;We.findIconDefinition;We.toHtml;var tw=We.icon;We.layer;We.text;We.counter;function Hl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function vt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hl(Object(n),!0).forEach(function(r){De(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hl(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Gi(e){"@babel/helpers - typeof";return Gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gi(e)}function De(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function rw(e,t){if(e==null)return{};var n=nw(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var iw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Dd={exports:{}};(function(e){(function(t){var n=function(v,y,S){if(!l(y)||f(y)||d(y)||m(y)||o(y))return y;var A,M=0,Y=0;if(u(y))for(A=[],Y=y.length;M<Y;M++)A.push(n(v,y[M],S));else{A={};for(var q in y)Object.prototype.hasOwnProperty.call(y,q)&&(A[v(q,S)]=n(v,y[q],S))}return A},r=function(v,y){y=y||{};var S=y.separator||"_",A=y.split||/(?=[A-Z])/;return v.split(A).join(S)},i=function(v){return _(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(y,S){return S?S.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var y=i(v);return y.substr(0,1).toUpperCase()+y.substr(1)},a=function(v,y){return r(v,y).toLowerCase()},c=Object.prototype.toString,o=function(v){return typeof v=="function"},l=function(v){return v===Object(v)},u=function(v){return c.call(v)=="[object Array]"},f=function(v){return c.call(v)=="[object Date]"},d=function(v){return c.call(v)=="[object RegExp]"},m=function(v){return c.call(v)=="[object Boolean]"},_=function(v){return v=v-0,v===v},I=function(v,y){var S=y&&"process"in y?y.process:y;return typeof S!="function"?v:function(A,M){return S(A,v,M)}},R={camelize:i,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(v,y){return n(I(i,y),v)},decamelizeKeys:function(v,y){return n(I(a,y),v,y)},pascalizeKeys:function(v,y){return n(I(s,y),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=R:t.humps=R})(iw)})(Dd);var sw=Dd.exports,aw=["class","style"];function ow(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=sw.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function cw(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Fd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(o){return Fd(o)}),i=Object.keys(e.attributes||{}).reduce(function(o,l){var u=e.attributes[l];switch(l){case"class":o.class=cw(u);break;case"style":o.style=ow(u);break;default:o.attrs[l]=u}return o},{attrs:{},class:{},style:{}});n.class;var s=n.style,a=s===void 0?{}:s,c=rw(n,aw);return fs(e.tag,vt(vt(vt({},t),{},{class:i.class,style:vt(vt({},i.style),a)},i.attrs),c),r)}var Ud=!1;try{Ud=!0}catch{}function lw(){if(!Ud&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Gs(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?De({},e,t):{}}function uw(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},De(t,"fa-".concat(e.size),e.size!==null),De(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),De(t,"fa-pull-".concat(e.pull),e.pull!==null),De(t,"fa-swap-opacity",e.swapOpacity),De(t,"fa-bounce",e.bounce),De(t,"fa-shake",e.shake),De(t,"fa-beat",e.beat),De(t,"fa-fade",e.fade),De(t,"fa-beat-fade",e.beatFade),De(t,"fa-flash",e.flash),De(t,"fa-spin-pulse",e.spinPulse),De(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function zl(e){if(e&&Gi(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ma.icon)return Ma.icon(e);if(e===null)return null;if(Gi(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var fw=rt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=ke(function(){return zl(t.icon)}),s=ke(function(){return Gs("classes",uw(t))}),a=ke(function(){return Gs("transform",typeof t.transform=="string"?Ma.transform(t.transform):t.transform)}),c=ke(function(){return Gs("mask",zl(t.mask))}),o=ke(function(){return tw(i.value,vt(vt(vt(vt({},s.value),a.value),c.value),{},{symbol:t.symbol,title:t.title}))});vn(o,function(u){if(!u)return lw("Could not find one or more icon(s)",i.value,c.value)},{immediate:!0});var l=ke(function(){return o.value?Fd(o.value.abstract[0],{},r):null});return function(){return l.value}}}),dw={prefix:"fas",iconName:"user-check",icon:[640,512,[],"f4fc","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},hw={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[512,512,["sign-out"],"f08b","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},pw={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},mw={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]},gw={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},vw={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},bw={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]},yw={prefix:"far",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"]},_w=yw,ww={prefix:"far",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"]},Ew=ww;function Iw(){ew.add(gw,bw,_w,Ew,pw,dw,hw,vw,mw)}Iw();const Lo=ym(w_);Lo.use(Em());Lo.use(Vi);Lo.component("font-awesome-icon",fw).mount("#app");
