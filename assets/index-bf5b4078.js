(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Da(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ve={},Mn=[],et=()=>{},Fd=()=>!1,Ud=/^on[^a-z]/,Xi=e=>Ud.test(e),Fa=e=>e.startsWith("onUpdate:"),Ce=Object.assign,Ua=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},$d=Object.prototype.hasOwnProperty,ie=(e,t)=>$d.call(e,t),K=Array.isArray,Dn=e=>Ji(e)==="[object Map]",zl=e=>Ji(e)==="[object Set]",Q=e=>typeof e=="function",ke=e=>typeof e=="string",$a=e=>typeof e=="symbol",ge=e=>e!==null&&typeof e=="object",Wl=e=>ge(e)&&Q(e.then)&&Q(e.catch),Vl=Object.prototype.toString,Ji=e=>Vl.call(e),Bd=e=>Ji(e).slice(8,-1),Kl=e=>Ji(e)==="[object Object]",Ba=e=>ke(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,yi=Da(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},jd=/-(\w)/g,dt=Qi(e=>e.replace(jd,(t,n)=>n?n.toUpperCase():"")),Hd=/\B([A-Z])/g,Xn=Qi(e=>e.replace(Hd,"-$1").toLowerCase()),Zi=Qi(e=>e.charAt(0).toUpperCase()+e.slice(1)),xs=Qi(e=>e?`on${Zi(e)}`:""),wr=(e,t)=>!Object.is(e,t),_i=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Oi=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Xs=e=>{const t=parseFloat(e);return isNaN(t)?e:t},zd=e=>{const t=ke(e)?Number(e):NaN;return isNaN(t)?e:t};let Fo;const Js=()=>Fo||(Fo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ja(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=ke(r)?qd(r):ja(r);if(i)for(const s in i)t[s]=i[s]}return t}else{if(ke(e))return e;if(ge(e))return e}}const Wd=/;(?![^(]*\))/g,Vd=/:([^]+)/,Kd=/\/\*[^]*?\*\//g;function qd(e){const t={};return e.replace(Kd,"").split(Wd).forEach(n=>{if(n){const r=n.split(Vd);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Z(e){let t="";if(ke(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const r=Z(e[n]);r&&(t+=r+" ")}else if(ge(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Yd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gd=Da(Yd);function ql(e){return!!e||e===""}const zn=e=>ke(e)?e:e==null?"":K(e)||ge(e)&&(e.toString===Vl||!Q(e.toString))?JSON.stringify(e,Yl,2):String(e),Yl=(e,t)=>t&&t.__v_isRef?Yl(e,t.value):Dn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:zl(t)?{[`Set(${t.size})`]:[...t.values()]}:ge(t)&&!K(t)&&!Kl(t)?String(t):t;let je;class Gl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=je,!t&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=je;try{return je=this,t()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Xl(e){return new Gl(e)}function Xd(e,t=je){t&&t.active&&t.effects.push(e)}function Jl(){return je}function Jd(e){je&&je.cleanups.push(e)}const Ha=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ql=e=>(e.w&Yt)>0,Zl=e=>(e.n&Yt)>0,Qd=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Yt},Zd=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Ql(i)&&!Zl(i)?i.delete(e):t[n++]=i,i.w&=~Yt,i.n&=~Yt}t.length=n}},Ri=new WeakMap;let ar=0,Yt=1;const Qs=30;let Je;const mn=Symbol(""),Zs=Symbol("");class za{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Xd(this,r)}run(){if(!this.active)return this.fn();let t=Je,n=Wt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Je,Je=this,Wt=!0,Yt=1<<++ar,ar<=Qs?Qd(this):Uo(this),this.fn()}finally{ar<=Qs&&Zd(this),Yt=1<<--ar,Je=this.parent,Wt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Je===this?this.deferStop=!0:this.active&&(Uo(this),this.onStop&&this.onStop(),this.active=!1)}}function Uo(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Wt=!0;const eu=[];function Jn(){eu.push(Wt),Wt=!1}function Qn(){const e=eu.pop();Wt=e===void 0?!0:e}function $e(e,t,n){if(Wt&&Je){let r=Ri.get(e);r||Ri.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Ha()),tu(i)}}function tu(e,t){let n=!1;ar<=Qs?Zl(e)||(e.n|=Yt,n=!Ql(e)):n=!e.has(Je),n&&(e.add(Je),Je.deps.push(e))}function wt(e,t,n,r,i,s){const a=Ri.get(e);if(!a)return;let o=[];if(t==="clear")o=[...a.values()];else if(n==="length"&&K(e)){const c=Number(r);a.forEach((l,u)=>{(u==="length"||u>=c)&&o.push(l)})}else switch(n!==void 0&&o.push(a.get(n)),t){case"add":K(e)?Ba(n)&&o.push(a.get("length")):(o.push(a.get(mn)),Dn(e)&&o.push(a.get(Zs)));break;case"delete":K(e)||(o.push(a.get(mn)),Dn(e)&&o.push(a.get(Zs)));break;case"set":Dn(e)&&o.push(a.get(mn));break}if(o.length===1)o[0]&&ea(o[0]);else{const c=[];for(const l of o)l&&c.push(...l);ea(Ha(c))}}function ea(e,t){const n=K(e)?e:[...e];for(const r of n)r.computed&&$o(r);for(const r of n)r.computed||$o(r)}function $o(e,t){(e!==Je||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function eh(e,t){var n;return(n=Ri.get(e))==null?void 0:n.get(t)}const th=Da("__proto__,__v_isRef,__isVue"),nu=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($a)),nh=Wa(),rh=Wa(!1,!0),ih=Wa(!0),Bo=sh();function sh(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=ne(this);for(let s=0,a=this.length;s<a;s++)$e(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(ne)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Jn();const r=ne(this)[t].apply(this,n);return Qn(),r}}),e}function ah(e){const t=ne(this);return $e(t,"has",e),t.hasOwnProperty(e)}function Wa(e=!1,t=!1){return function(r,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&s===(e?t?Eh:ou:t?au:su).get(r))return r;const a=K(r);if(!e){if(a&&ie(Bo,i))return Reflect.get(Bo,i,s);if(i==="hasOwnProperty")return ah}const o=Reflect.get(r,i,s);return($a(i)?nu.has(i):th(i))||(e||$e(r,"get",i),t)?o:we(o)?a&&Ba(i)?o:o.value:ge(o)?e?lu(o):$r(o):o}}const oh=ru(),ch=ru(!0);function ru(e=!1){return function(n,r,i,s){let a=n[r];if(Wn(a)&&we(a)&&!we(i))return!1;if(!e&&(!Ni(i)&&!Wn(i)&&(a=ne(a),i=ne(i)),!K(n)&&we(a)&&!we(i)))return a.value=i,!0;const o=K(n)&&Ba(r)?Number(r)<n.length:ie(n,r),c=Reflect.set(n,r,i,s);return n===ne(s)&&(o?wr(i,a)&&wt(n,"set",r,i):wt(n,"add",r,i)),c}}function lh(e,t){const n=ie(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&wt(e,"delete",t,void 0),r}function uh(e,t){const n=Reflect.has(e,t);return(!$a(t)||!nu.has(t))&&$e(e,"has",t),n}function fh(e){return $e(e,"iterate",K(e)?"length":mn),Reflect.ownKeys(e)}const iu={get:nh,set:oh,deleteProperty:lh,has:uh,ownKeys:fh},dh={get:ih,set(e,t){return!0},deleteProperty(e,t){return!0}},hh=Ce({},iu,{get:rh,set:ch}),Va=e=>e,es=e=>Reflect.getPrototypeOf(e);function Qr(e,t,n=!1,r=!1){e=e.__v_raw;const i=ne(e),s=ne(t);n||(t!==s&&$e(i,"get",t),$e(i,"get",s));const{has:a}=es(i),o=r?Va:n?Ya:Er;if(a.call(i,t))return o(e.get(t));if(a.call(i,s))return o(e.get(s));e!==i&&e.get(t)}function Zr(e,t=!1){const n=this.__v_raw,r=ne(n),i=ne(e);return t||(e!==i&&$e(r,"has",e),$e(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function ei(e,t=!1){return e=e.__v_raw,!t&&$e(ne(e),"iterate",mn),Reflect.get(e,"size",e)}function jo(e){e=ne(e);const t=ne(this);return es(t).has.call(t,e)||(t.add(e),wt(t,"add",e,e)),this}function Ho(e,t){t=ne(t);const n=ne(this),{has:r,get:i}=es(n);let s=r.call(n,e);s||(e=ne(e),s=r.call(n,e));const a=i.call(n,e);return n.set(e,t),s?wr(t,a)&&wt(n,"set",e,t):wt(n,"add",e,t),this}function zo(e){const t=ne(this),{has:n,get:r}=es(t);let i=n.call(t,e);i||(e=ne(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&wt(t,"delete",e,void 0),s}function Wo(){const e=ne(this),t=e.size!==0,n=e.clear();return t&&wt(e,"clear",void 0,void 0),n}function ti(e,t){return function(r,i){const s=this,a=s.__v_raw,o=ne(a),c=t?Va:e?Ya:Er;return!e&&$e(o,"iterate",mn),a.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function ni(e,t,n){return function(...r){const i=this.__v_raw,s=ne(i),a=Dn(s),o=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,l=i[e](...r),u=n?Va:t?Ya:Er;return!t&&$e(s,"iterate",c?Zs:mn),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Pt(e){return function(...t){return e==="delete"?!1:this}}function ph(){const e={get(s){return Qr(this,s)},get size(){return ei(this)},has:Zr,add:jo,set:Ho,delete:zo,clear:Wo,forEach:ti(!1,!1)},t={get(s){return Qr(this,s,!1,!0)},get size(){return ei(this)},has:Zr,add:jo,set:Ho,delete:zo,clear:Wo,forEach:ti(!1,!0)},n={get(s){return Qr(this,s,!0)},get size(){return ei(this,!0)},has(s){return Zr.call(this,s,!0)},add:Pt("add"),set:Pt("set"),delete:Pt("delete"),clear:Pt("clear"),forEach:ti(!0,!1)},r={get(s){return Qr(this,s,!0,!0)},get size(){return ei(this,!0)},has(s){return Zr.call(this,s,!0)},add:Pt("add"),set:Pt("set"),delete:Pt("delete"),clear:Pt("clear"),forEach:ti(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=ni(s,!1,!1),n[s]=ni(s,!0,!1),t[s]=ni(s,!1,!0),r[s]=ni(s,!0,!0)}),[e,n,t,r]}const[mh,gh,vh,bh]=ph();function Ka(e,t){const n=t?e?bh:vh:e?gh:mh;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(ie(n,i)&&i in r?n:r,i,s)}const yh={get:Ka(!1,!1)},_h={get:Ka(!1,!0)},wh={get:Ka(!0,!1)},su=new WeakMap,au=new WeakMap,ou=new WeakMap,Eh=new WeakMap;function Ih(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xh(e){return e.__v_skip||!Object.isExtensible(e)?0:Ih(Bd(e))}function $r(e){return Wn(e)?e:qa(e,!1,iu,yh,su)}function cu(e){return qa(e,!1,hh,_h,au)}function lu(e){return qa(e,!0,dh,wh,ou)}function qa(e,t,n,r,i){if(!ge(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const a=xh(e);if(a===0)return e;const o=new Proxy(e,a===2?r:n);return i.set(e,o),o}function _t(e){return Wn(e)?_t(e.__v_raw):!!(e&&e.__v_isReactive)}function Wn(e){return!!(e&&e.__v_isReadonly)}function Ni(e){return!!(e&&e.__v_isShallow)}function uu(e){return _t(e)||Wn(e)}function ne(e){const t=e&&e.__v_raw;return t?ne(t):e}function Br(e){return Oi(e,"__v_skip",!0),e}const Er=e=>ge(e)?$r(e):e,Ya=e=>ge(e)?lu(e):e;function fu(e){Wt&&Je&&(e=ne(e),tu(e.dep||(e.dep=Ha())))}function du(e,t){e=ne(e);const n=e.dep;n&&ea(n)}function we(e){return!!(e&&e.__v_isRef===!0)}function se(e){return hu(e,!1)}function kh(e){return hu(e,!0)}function hu(e,t){return we(e)?e:new Ah(e,t)}class Ah{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ne(t),this._value=n?t:Er(t)}get value(){return fu(this),this._value}set value(t){const n=this.__v_isShallow||Ni(t)||Wn(t);t=n?t:ne(t),wr(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Er(t),du(this))}}function _e(e){return we(e)?e.value:e}function Ch(e){return Q(e)?e():_e(e)}const Th={get:(e,t,n)=>_e(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return we(i)&&!we(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function pu(e){return _t(e)?e:new Proxy(e,Th)}function Sh(e){const t=K(e)?new Array(e.length):{};for(const n in e)t[n]=mu(e,n);return t}class Ph{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return eh(ne(this._object),this._key)}}class Oh{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Rh(e,t,n){return we(e)?e:Q(e)?new Oh(e):ge(e)&&arguments.length>1?mu(e,t,n):se(e)}function mu(e,t,n){const r=e[t];return we(r)?r:new Ph(e,t,n)}class Nh{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new za(t,()=>{this._dirty||(this._dirty=!0,du(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=ne(this);return fu(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Lh(e,t,n=!1){let r,i;const s=Q(e);return s?(r=e,i=et):(r=e.get,i=e.set),new Nh(r,i,s||!i,n)}function Vt(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){ts(s,t,n)}return i}function qe(e,t,n,r){if(Q(e)){const s=Vt(e,t,n,r);return s&&Wl(s)&&s.catch(a=>{ts(a,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(qe(e[s],t,n,r));return i}function ts(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,o=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,a,o)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){Vt(c,null,10,[e,a,o]);return}}Mh(e,n,i,r)}function Mh(e,t,n,r=!0){console.error(e)}let Ir=!1,ta=!1;const Oe=[];let ct=0;const Fn=[];let mt=null,cn=0;const gu=Promise.resolve();let Ga=null;function Xa(e){const t=Ga||gu;return e?t.then(this?e.bind(this):e):t}function Dh(e){let t=ct+1,n=Oe.length;for(;t<n;){const r=t+n>>>1;xr(Oe[r])<e?t=r+1:n=r}return t}function Ja(e){(!Oe.length||!Oe.includes(e,Ir&&e.allowRecurse?ct+1:ct))&&(e.id==null?Oe.push(e):Oe.splice(Dh(e.id),0,e),vu())}function vu(){!Ir&&!ta&&(ta=!0,Ga=gu.then(yu))}function Fh(e){const t=Oe.indexOf(e);t>ct&&Oe.splice(t,1)}function Uh(e){K(e)?Fn.push(...e):(!mt||!mt.includes(e,e.allowRecurse?cn+1:cn))&&Fn.push(e),vu()}function Vo(e,t=Ir?ct+1:0){for(;t<Oe.length;t++){const n=Oe[t];n&&n.pre&&(Oe.splice(t,1),t--,n())}}function bu(e){if(Fn.length){const t=[...new Set(Fn)];if(Fn.length=0,mt){mt.push(...t);return}for(mt=t,mt.sort((n,r)=>xr(n)-xr(r)),cn=0;cn<mt.length;cn++)mt[cn]();mt=null,cn=0}}const xr=e=>e.id==null?1/0:e.id,$h=(e,t)=>{const n=xr(e)-xr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function yu(e){ta=!1,Ir=!0,Oe.sort($h);const t=et;try{for(ct=0;ct<Oe.length;ct++){const n=Oe[ct];n&&n.active!==!1&&Vt(n,null,14)}}finally{ct=0,Oe.length=0,bu(),Ir=!1,Ga=null,(Oe.length||Fn.length)&&yu()}}function Bh(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ve;let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in r){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:d}=r[u]||ve;d&&(i=n.map(m=>ke(m)?m.trim():m)),f&&(i=n.map(Xs))}let o,c=r[o=xs(t)]||r[o=xs(dt(t))];!c&&s&&(c=r[o=xs(Xn(t))]),c&&qe(c,e,6,i);const l=r[o+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,qe(l,e,6,i)}}function _u(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!Q(e)){const c=l=>{const u=_u(l,t,!0);u&&(o=!0,Ce(a,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!o?(ge(e)&&r.set(e,null),null):(K(s)?s.forEach(c=>a[c]=null):Ce(a,s),ge(e)&&r.set(e,a),a)}function ns(e,t){return!e||!Xi(t)?!1:(t=t.slice(2).replace(/Once$/,""),ie(e,t[0].toLowerCase()+t.slice(1))||ie(e,Xn(t))||ie(e,t))}let Ue=null,rs=null;function Li(e){const t=Ue;return Ue=e,rs=e&&e.type.__scopeId||null,t}function wu(e){rs=e}function Eu(){rs=null}function Un(e,t=Ue,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&ic(-1);const s=Li(t);let a;try{a=e(...i)}finally{Li(s),r._d&&ic(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function ks(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[a],slots:o,attrs:c,emit:l,render:u,renderCache:f,data:d,setupState:m,ctx:_,inheritAttrs:I}=e;let N,v;const y=Li(e);try{if(n.shapeFlag&4){const A=i||r;N=ot(u.call(A,A,f,s,m,d,_)),v=c}else{const A=t;N=ot(A.length>1?A(s,{attrs:c,slots:o,emit:l}):A(s,null)),v=t.props?c:jh(c)}}catch(A){hr.length=0,ts(A,e,1),N=Ee(tt)}let P=N;if(v&&I!==!1){const A=Object.keys(v),{shapeFlag:D}=P;A.length&&D&7&&(a&&A.some(Fa)&&(v=Hh(v,a)),P=Gt(P,v))}return n.dirs&&(P=Gt(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),N=P,Li(y),N}const jh=e=>{let t;for(const n in e)(n==="class"||n==="style"||Xi(n))&&((t||(t={}))[n]=e[n]);return t},Hh=(e,t)=>{const n={};for(const r in e)(!Fa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function zh(e,t,n){const{props:r,children:i,component:s}=e,{props:a,children:o,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ko(r,a,l):!!a;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==r[d]&&!ns(l,d))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===a?!1:r?a?Ko(r,a,l):!0:!!a;return!1}function Ko(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!ns(n,s))return!0}return!1}function Wh({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Vh=e=>e.__isSuspense;function Kh(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):Uh(e)}function qh(e,t){return Qa(e,null,t)}const ri={};function gn(e,t,n){return Qa(e,t,n)}function Qa(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:a}=ve){var o;const c=Jl()===((o=Te)==null?void 0:o.scope)?Te:null;let l,u=!1,f=!1;if(we(e)?(l=()=>e.value,u=Ni(e)):_t(e)?(l=()=>e,r=!0):K(e)?(f=!0,u=e.some(A=>_t(A)||Ni(A)),l=()=>e.map(A=>{if(we(A))return A.value;if(_t(A))return fn(A);if(Q(A))return Vt(A,c,2)})):Q(e)?t?l=()=>Vt(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return d&&d(),qe(e,c,3,[m])}:l=et,t&&r){const A=l;l=()=>fn(A())}let d,m=A=>{d=y.onStop=()=>{Vt(A,c,4)}},_;if(Cr)if(m=et,t?n&&qe(t,c,3,[l(),f?[]:void 0,m]):l(),i==="sync"){const A=Wp();_=A.__watcherHandles||(A.__watcherHandles=[])}else return et;let I=f?new Array(e.length).fill(ri):ri;const N=()=>{if(y.active)if(t){const A=y.run();(r||u||(f?A.some((D,G)=>wr(D,I[G])):wr(A,I)))&&(d&&d(),qe(t,c,3,[A,I===ri?void 0:f&&I[0]===ri?[]:I,m]),I=A)}else y.run()};N.allowRecurse=!!t;let v;i==="sync"?v=N:i==="post"?v=()=>Fe(N,c&&c.suspense):(N.pre=!0,c&&(N.id=c.uid),v=()=>Ja(N));const y=new za(l,v);t?n?N():I=y.run():i==="post"?Fe(y.run.bind(y),c&&c.suspense):y.run();const P=()=>{y.stop(),c&&c.scope&&Ua(c.scope.effects,y)};return _&&_.push(P),P}function Yh(e,t,n){const r=this.proxy,i=ke(e)?e.includes(".")?Iu(r,e):()=>r[e]:e.bind(r,r);let s;Q(t)?s=t:(s=t.handler,n=t);const a=Te;Vn(this);const o=Qa(i,s.bind(r),n);return a?Vn(a):vn(),o}function Iu(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function fn(e,t){if(!ge(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),we(e))fn(e.value,t);else if(K(e))for(let n=0;n<e.length;n++)fn(e[n],t);else if(zl(e)||Dn(e))e.forEach(n=>{fn(n,t)});else if(Kl(e))for(const n in e)fn(e[n],t);return e}function ii(e,t){const n=Ue;if(n===null)return e;const r=us(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[a,o,c,l=ve]=t[s];a&&(Q(a)&&(a={mounted:a,updated:a}),a.deep&&fn(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:c,modifiers:l}))}return e}function nn(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let c=o.dir[r];c&&(Jn(),qe(c,n,8,[e.el,o,e,t]),Qn())}}function Gh(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return as(()=>{e.isMounted=!0}),Pu(()=>{e.isUnmounting=!0}),e}const Ve=[Function,Array],xu={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ve,onEnter:Ve,onAfterEnter:Ve,onEnterCancelled:Ve,onBeforeLeave:Ve,onLeave:Ve,onAfterLeave:Ve,onLeaveCancelled:Ve,onBeforeAppear:Ve,onAppear:Ve,onAfterAppear:Ve,onAppearCancelled:Ve},Xh={name:"BaseTransition",props:xu,setup(e,{slots:t}){const n=Dp(),r=Gh();let i;return()=>{const s=t.default&&Au(t.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const I of s)if(I.type!==tt){a=I;break}}const o=ne(e),{mode:c}=o;if(r.isLeaving)return As(a);const l=qo(a);if(!l)return As(a);const u=na(l,o,r,n);ra(l,u);const f=n.subTree,d=f&&qo(f);let m=!1;const{getTransitionKey:_}=l.type;if(_){const I=_();i===void 0?i=I:I!==i&&(i=I,m=!0)}if(d&&d.type!==tt&&(!ln(l,d)||m)){const I=na(d,o,r,n);if(ra(d,I),c==="out-in")return r.isLeaving=!0,I.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},As(a);c==="in-out"&&l.type!==tt&&(I.delayLeave=(N,v,y)=>{const P=ku(r,d);P[String(d.key)]=d,N._leaveCb=()=>{v(),N._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=y})}return a}}},Jh=Xh;function ku(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function na(e,t,n,r){const{appear:i,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:I,onAppear:N,onAfterAppear:v,onAppearCancelled:y}=t,P=String(e.key),A=ku(n,e),D=(T,L)=>{T&&qe(T,r,9,L)},G=(T,L)=>{const q=L[1];D(T,L),K(T)?T.every(re=>re.length<=1)&&q():T.length<=1&&q()},Y={mode:s,persisted:a,beforeEnter(T){let L=o;if(!n.isMounted)if(i)L=I||o;else return;T._leaveCb&&T._leaveCb(!0);const q=A[P];q&&ln(e,q)&&q.el._leaveCb&&q.el._leaveCb(),D(L,[T])},enter(T){let L=c,q=l,re=u;if(!n.isMounted)if(i)L=N||c,q=v||l,re=y||u;else return;let R=!1;const H=T._enterCb=de=>{R||(R=!0,de?D(re,[T]):D(q,[T]),Y.delayedLeave&&Y.delayedLeave(),T._enterCb=void 0)};L?G(L,[T,H]):H()},leave(T,L){const q=String(e.key);if(T._enterCb&&T._enterCb(!0),n.isUnmounting)return L();D(f,[T]);let re=!1;const R=T._leaveCb=H=>{re||(re=!0,L(),H?D(_,[T]):D(m,[T]),T._leaveCb=void 0,A[q]===e&&delete A[q])};A[q]=e,d?G(d,[T,R]):R()},clone(T){return na(T,t,n,r)}};return Y}function As(e){if(is(e))return e=Gt(e),e.children=null,e}function qo(e){return is(e)?e.children?e.children[0]:void 0:e}function ra(e,t){e.shapeFlag&6&&e.component?ra(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Au(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let a=e[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===He?(a.patchFlag&128&&i++,r=r.concat(Au(a.children,t,o))):(t||a.type!==tt)&&r.push(o!=null?Gt(a,{key:o}):a)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function rt(e,t){return Q(e)?(()=>Ce({name:e.name},t,{setup:e}))():e}const wi=e=>!!e.type.__asyncLoader,is=e=>e.type.__isKeepAlive;function Cu(e,t){Su(e,"a",t)}function Tu(e,t){Su(e,"da",t)}function Su(e,t,n=Te){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(ss(t,r,n),n){let i=n.parent;for(;i&&i.parent;)is(i.parent.vnode)&&Qh(r,t,n,i),i=i.parent}}function Qh(e,t,n,r){const i=ss(t,e,r,!0);os(()=>{Ua(r[t],i)},n)}function ss(e,t,n=Te,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;Jn(),Vn(n);const o=qe(t,n,e,a);return vn(),Qn(),o});return r?i.unshift(s):i.push(s),s}}const At=e=>(t,n=Te)=>(!Cr||e==="sp")&&ss(e,(...r)=>t(...r),n),Zh=At("bm"),as=At("m"),ep=At("bu"),tp=At("u"),Pu=At("bum"),os=At("um"),np=At("sp"),rp=At("rtg"),ip=At("rtc");function sp(e,t=Te){ss("ec",e,t)}const Ou="components";function Mi(e,t){return op(Ou,e,!0,t)||e}const ap=Symbol.for("v-ndc");function op(e,t,n=!0,r=!1){const i=Ue||Te;if(i){const s=i.type;if(e===Ou){const o=jp(s,!1);if(o&&(o===t||o===dt(t)||o===Zi(dt(t))))return s}const a=Yo(i[e]||s[e],t)||Yo(i.appContext[e],t);return!a&&r?s:a}}function Yo(e,t){return e&&(e[t]||e[dt(t)]||e[Zi(dt(t))])}function Ru(e,t,n,r){let i;const s=n&&n[r];if(K(e)||ke(e)){i=new Array(e.length);for(let a=0,o=e.length;a<o;a++)i[a]=t(e[a],a,void 0,s&&s[a])}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,s&&s[a])}else if(ge(e))if(e[Symbol.iterator])i=Array.from(e,(a,o)=>t(a,o,void 0,s&&s[o]));else{const a=Object.keys(e);i=new Array(a.length);for(let o=0,c=a.length;o<c;o++){const l=a[o];i[o]=t(e[l],l,o,s&&s[o])}}else i=[];return n&&(n[r]=i),i}const ia=e=>e?zu(e)?us(e)||e.proxy:ia(e.parent):null,fr=Ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ia(e.parent),$root:e=>ia(e.root),$emit:e=>e.emit,$options:e=>Za(e),$forceUpdate:e=>e.f||(e.f=()=>Ja(e.update)),$nextTick:e=>e.n||(e.n=Xa.bind(e.proxy)),$watch:e=>Yh.bind(e)}),Cs=(e,t)=>e!==ve&&!e.__isScriptSetup&&ie(e,t),cp={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:o,appContext:c}=e;let l;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(Cs(r,t))return a[t]=1,r[t];if(i!==ve&&ie(i,t))return a[t]=2,i[t];if((l=e.propsOptions[0])&&ie(l,t))return a[t]=3,s[t];if(n!==ve&&ie(n,t))return a[t]=4,n[t];sa&&(a[t]=0)}}const u=fr[t];let f,d;if(u)return t==="$attrs"&&$e(e,"get",t),u(e);if((f=o.__cssModules)&&(f=f[t]))return f;if(n!==ve&&ie(n,t))return a[t]=4,n[t];if(d=c.config.globalProperties,ie(d,t))return d[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return Cs(i,t)?(i[t]=n,!0):r!==ve&&ie(r,t)?(r[t]=n,!0):ie(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let o;return!!n[a]||e!==ve&&ie(e,a)||Cs(t,a)||(o=s[0])&&ie(o,a)||ie(r,a)||ie(fr,a)||ie(i.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ie(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Go(e){return K(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let sa=!0;function lp(e){const t=Za(e),n=e.proxy,r=e.ctx;sa=!1,t.beforeCreate&&Xo(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:c,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:m,updated:_,activated:I,deactivated:N,beforeDestroy:v,beforeUnmount:y,destroyed:P,unmounted:A,render:D,renderTracked:G,renderTriggered:Y,errorCaptured:T,serverPrefetch:L,expose:q,inheritAttrs:re,components:R,directives:H,filters:de}=t;if(l&&up(l,r,null),a)for(const le in a){const ae=a[le];Q(ae)&&(r[le]=ae.bind(n))}if(i){const le=i.call(n,n);ge(le)&&(e.data=$r(le))}if(sa=!0,s)for(const le in s){const ae=s[le],ht=Q(ae)?ae.bind(n,n):Q(ae.get)?ae.get.bind(n,n):et,St=!Q(ae)&&Q(ae.set)?ae.set.bind(n):et,it=xe({get:ht,set:St});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>it.value,set:Me=>it.value=Me})}if(o)for(const le in o)Nu(o[le],r,n,le);if(c){const le=Q(c)?c.call(n):c;Reflect.ownKeys(le).forEach(ae=>{Ei(ae,le[ae])})}u&&Xo(u,e,"c");function ee(le,ae){K(ae)?ae.forEach(ht=>le(ht.bind(n))):ae&&le(ae.bind(n))}if(ee(Zh,f),ee(as,d),ee(ep,m),ee(tp,_),ee(Cu,I),ee(Tu,N),ee(sp,T),ee(ip,G),ee(rp,Y),ee(Pu,y),ee(os,A),ee(np,L),K(q))if(q.length){const le=e.exposed||(e.exposed={});q.forEach(ae=>{Object.defineProperty(le,ae,{get:()=>n[ae],set:ht=>n[ae]=ht})})}else e.exposed||(e.exposed={});D&&e.render===et&&(e.render=D),re!=null&&(e.inheritAttrs=re),R&&(e.components=R),H&&(e.directives=H)}function up(e,t,n=et){K(e)&&(e=aa(e));for(const r in e){const i=e[r];let s;ge(i)?"default"in i?s=Ye(i.from||r,i.default,!0):s=Ye(i.from||r):s=Ye(i),we(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[r]=s}}function Xo(e,t,n){qe(K(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Nu(e,t,n,r){const i=r.includes(".")?Iu(n,r):()=>n[r];if(ke(e)){const s=t[e];Q(s)&&gn(i,s)}else if(Q(e))gn(i,e.bind(n));else if(ge(e))if(K(e))e.forEach(s=>Nu(s,t,n,r));else{const s=Q(e.handler)?e.handler.bind(n):t[e.handler];Q(s)&&gn(i,s,e)}}function Za(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let c;return o?c=o:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(l=>Di(c,l,a,!0)),Di(c,t,a)),ge(t)&&s.set(t,c),c}function Di(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Di(e,s,n,!0),i&&i.forEach(a=>Di(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const o=fp[a]||n&&n[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const fp={data:Jo,props:Qo,emits:Qo,methods:or,computed:or,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:or,directives:or,watch:hp,provide:Jo,inject:dp};function Jo(e,t){return t?e?function(){return Ce(Q(e)?e.call(this,this):e,Q(t)?t.call(this,this):t)}:t:e}function dp(e,t){return or(aa(e),aa(t))}function aa(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ne(e,t){return e?[...new Set([].concat(e,t))]:t}function or(e,t){return e?Ce(Object.create(null),e,t):t}function Qo(e,t){return e?K(e)&&K(t)?[...new Set([...e,...t])]:Ce(Object.create(null),Go(e),Go(t??{})):t}function hp(e,t){if(!e)return t;if(!t)return e;const n=Ce(Object.create(null),e);for(const r in t)n[r]=Ne(e[r],t[r]);return n}function Lu(){return{app:null,config:{isNativeTag:Fd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pp=0;function mp(e,t){return function(r,i=null){Q(r)||(r=Ce({},r)),i!=null&&!ge(i)&&(i=null);const s=Lu(),a=new Set;let o=!1;const c=s.app={_uid:pp++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Vp,get config(){return s.config},set config(l){},use(l,...u){return a.has(l)||(l&&Q(l.install)?(a.add(l),l.install(c,...u)):Q(l)&&(a.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,f){if(!o){const d=Ee(r,i);return d.appContext=s,u&&t?t(d,l):e(d,l,f),o=!0,c._container=l,l.__vue_app__=c,us(d.component)||d.component.proxy}},unmount(){o&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){kr=c;try{return l()}finally{kr=null}}};return c}}let kr=null;function Ei(e,t){if(Te){let n=Te.provides;const r=Te.parent&&Te.parent.provides;r===n&&(n=Te.provides=Object.create(r)),n[e]=t}}function Ye(e,t,n=!1){const r=Te||Ue;if(r||kr){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:kr._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Q(t)?t.call(r&&r.proxy):t}}function gp(){return!!(Te||Ue||kr)}function vp(e,t,n,r=!1){const i={},s={};Oi(s,ls,1),e.propsDefaults=Object.create(null),Mu(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=r?i:cu(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function bp(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=ne(i),[c]=e.propsOptions;let l=!1;if((r||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ns(e.emitsOptions,d))continue;const m=t[d];if(c)if(ie(s,d))m!==s[d]&&(s[d]=m,l=!0);else{const _=dt(d);i[_]=oa(c,o,_,m,e,!1)}else m!==s[d]&&(s[d]=m,l=!0)}}}else{Mu(e,t,i,s)&&(l=!0);let u;for(const f in o)(!t||!ie(t,f)&&((u=Xn(f))===f||!ie(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=oa(c,o,f,void 0,e,!0)):delete i[f]);if(s!==o)for(const f in s)(!t||!ie(t,f))&&(delete s[f],l=!0)}l&&wt(e,"set","$attrs")}function Mu(e,t,n,r){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let c in t){if(yi(c))continue;const l=t[c];let u;i&&ie(i,u=dt(c))?!s||!s.includes(u)?n[u]=l:(o||(o={}))[u]=l:ns(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,a=!0)}if(s){const c=ne(n),l=o||ve;for(let u=0;u<s.length;u++){const f=s[u];n[f]=oa(i,c,f,l[f],e,!ie(l,f))}}return a}function oa(e,t,n,r,i,s){const a=e[n];if(a!=null){const o=ie(a,"default");if(o&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&Q(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(Vn(i),r=l[n]=c.call(null,t),vn())}else r=c}a[0]&&(s&&!o?r=!1:a[1]&&(r===""||r===Xn(n))&&(r=!0))}return r}function Du(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},o=[];let c=!1;if(!Q(e)){const u=f=>{c=!0;const[d,m]=Du(f,t,!0);Ce(a,d),m&&o.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return ge(e)&&r.set(e,Mn),Mn;if(K(s))for(let u=0;u<s.length;u++){const f=dt(s[u]);Zo(f)&&(a[f]=ve)}else if(s)for(const u in s){const f=dt(u);if(Zo(f)){const d=s[u],m=a[f]=K(d)||Q(d)?{type:d}:Ce({},d);if(m){const _=nc(Boolean,m.type),I=nc(String,m.type);m[0]=_>-1,m[1]=I<0||_<I,(_>-1||ie(m,"default"))&&o.push(f)}}}const l=[a,o];return ge(e)&&r.set(e,l),l}function Zo(e){return e[0]!=="$"}function ec(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function tc(e,t){return ec(e)===ec(t)}function nc(e,t){return K(t)?t.findIndex(n=>tc(n,e)):Q(t)&&tc(t,e)?0:-1}const Fu=e=>e[0]==="_"||e==="$stable",eo=e=>K(e)?e.map(ot):[ot(e)],yp=(e,t,n)=>{if(t._n)return t;const r=Un((...i)=>eo(t(...i)),n);return r._c=!1,r},Uu=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Fu(i))continue;const s=e[i];if(Q(s))t[i]=yp(i,s,r);else if(s!=null){const a=eo(s);t[i]=()=>a}}},$u=(e,t)=>{const n=eo(t);e.slots.default=()=>n},_p=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ne(t),Oi(t,"_",n)):Uu(t,e.slots={})}else e.slots={},t&&$u(e,t);Oi(e.slots,ls,1)},wp=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=ve;if(r.shapeFlag&32){const o=t._;o?n&&o===1?s=!1:(Ce(i,t),!n&&o===1&&delete i._):(s=!t.$stable,Uu(t,i)),a=t}else t&&($u(e,t),a={default:1});if(s)for(const o in i)!Fu(o)&&!(o in a)&&delete i[o]};function ca(e,t,n,r,i=!1){if(K(e)){e.forEach((d,m)=>ca(d,t&&(K(t)?t[m]:t),n,r,i));return}if(wi(r)&&!i)return;const s=r.shapeFlag&4?us(r.component)||r.component.proxy:r.el,a=i?null:s,{i:o,r:c}=e,l=t&&t.r,u=o.refs===ve?o.refs={}:o.refs,f=o.setupState;if(l!=null&&l!==c&&(ke(l)?(u[l]=null,ie(f,l)&&(f[l]=null)):we(l)&&(l.value=null)),Q(c))Vt(c,o,12,[a,u]);else{const d=ke(c),m=we(c);if(d||m){const _=()=>{if(e.f){const I=d?ie(f,c)?f[c]:u[c]:c.value;i?K(I)&&Ua(I,s):K(I)?I.includes(s)||I.push(s):d?(u[c]=[s],ie(f,c)&&(f[c]=u[c])):(c.value=[s],e.k&&(u[e.k]=c.value))}else d?(u[c]=a,ie(f,c)&&(f[c]=a)):m&&(c.value=a,e.k&&(u[e.k]=a))};a?(_.id=-1,Fe(_,n)):_()}}}const Fe=Kh;function Ep(e){return Ip(e)}function Ip(e,t){const n=Js();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:o,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:m=et,insertStaticContent:_}=e,I=(h,p,g,b=null,E=null,x=null,M=!1,C=null,S=!!p.dynamicChildren)=>{if(h===p)return;h&&!ln(h,p)&&(b=w(h),Me(h,E,x,!0),h=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:k,ref:W,shapeFlag:$}=p;switch(k){case cs:N(h,p,g,b);break;case tt:v(h,p,g,b);break;case Ts:h==null&&y(p,g,b,M);break;case He:R(h,p,g,b,E,x,M,C,S);break;default:$&1?D(h,p,g,b,E,x,M,C,S):$&6?H(h,p,g,b,E,x,M,C,S):($&64||$&128)&&k.process(h,p,g,b,E,x,M,C,S,O)}W!=null&&E&&ca(W,h&&h.ref,x,p||h,!p)},N=(h,p,g,b)=>{if(h==null)r(p.el=o(p.children),g,b);else{const E=p.el=h.el;p.children!==h.children&&l(E,p.children)}},v=(h,p,g,b)=>{h==null?r(p.el=c(p.children||""),g,b):p.el=h.el},y=(h,p,g,b)=>{[h.el,h.anchor]=_(h.children,p,g,b,h.el,h.anchor)},P=({el:h,anchor:p},g,b)=>{let E;for(;h&&h!==p;)E=d(h),r(h,g,b),h=E;r(p,g,b)},A=({el:h,anchor:p})=>{let g;for(;h&&h!==p;)g=d(h),i(h),h=g;i(p)},D=(h,p,g,b,E,x,M,C,S)=>{M=M||p.type==="svg",h==null?G(p,g,b,E,x,M,C,S):L(h,p,E,x,M,C,S)},G=(h,p,g,b,E,x,M,C)=>{let S,k;const{type:W,props:$,shapeFlag:V,transition:J,dirs:te}=h;if(S=h.el=a(h.type,x,$&&$.is,$),V&8?u(S,h.children):V&16&&T(h.children,S,null,b,E,x&&W!=="foreignObject",M,C),te&&nn(h,null,b,"created"),Y(S,h,h.scopeId,M,b),$){for(const ue in $)ue!=="value"&&!yi(ue)&&s(S,ue,null,$[ue],x,h.children,b,E,Pe);"value"in $&&s(S,"value",null,$.value),(k=$.onVnodeBeforeMount)&&at(k,b,h)}te&&nn(h,null,b,"beforeMount");const me=(!E||E&&!E.pendingBranch)&&J&&!J.persisted;me&&J.beforeEnter(S),r(S,p,g),((k=$&&$.onVnodeMounted)||me||te)&&Fe(()=>{k&&at(k,b,h),me&&J.enter(S),te&&nn(h,null,b,"mounted")},E)},Y=(h,p,g,b,E)=>{if(g&&m(h,g),b)for(let x=0;x<b.length;x++)m(h,b[x]);if(E){let x=E.subTree;if(p===x){const M=E.vnode;Y(h,M,M.scopeId,M.slotScopeIds,E.parent)}}},T=(h,p,g,b,E,x,M,C,S=0)=>{for(let k=S;k<h.length;k++){const W=h[k]=C?Ut(h[k]):ot(h[k]);I(null,W,p,g,b,E,x,M,C)}},L=(h,p,g,b,E,x,M)=>{const C=p.el=h.el;let{patchFlag:S,dynamicChildren:k,dirs:W}=p;S|=h.patchFlag&16;const $=h.props||ve,V=p.props||ve;let J;g&&rn(g,!1),(J=V.onVnodeBeforeUpdate)&&at(J,g,p,h),W&&nn(p,h,g,"beforeUpdate"),g&&rn(g,!0);const te=E&&p.type!=="foreignObject";if(k?q(h.dynamicChildren,k,C,g,b,te,x):M||ae(h,p,C,null,g,b,te,x,!1),S>0){if(S&16)re(C,p,$,V,g,b,E);else if(S&2&&$.class!==V.class&&s(C,"class",null,V.class,E),S&4&&s(C,"style",$.style,V.style,E),S&8){const me=p.dynamicProps;for(let ue=0;ue<me.length;ue++){const Ae=me[ue],Xe=$[Ae],Tn=V[Ae];(Tn!==Xe||Ae==="value")&&s(C,Ae,Xe,Tn,E,h.children,g,b,Pe)}}S&1&&h.children!==p.children&&u(C,p.children)}else!M&&k==null&&re(C,p,$,V,g,b,E);((J=V.onVnodeUpdated)||W)&&Fe(()=>{J&&at(J,g,p,h),W&&nn(p,h,g,"updated")},b)},q=(h,p,g,b,E,x,M)=>{for(let C=0;C<p.length;C++){const S=h[C],k=p[C],W=S.el&&(S.type===He||!ln(S,k)||S.shapeFlag&70)?f(S.el):g;I(S,k,W,null,b,E,x,M,!0)}},re=(h,p,g,b,E,x,M)=>{if(g!==b){if(g!==ve)for(const C in g)!yi(C)&&!(C in b)&&s(h,C,g[C],null,M,p.children,E,x,Pe);for(const C in b){if(yi(C))continue;const S=b[C],k=g[C];S!==k&&C!=="value"&&s(h,C,k,S,M,p.children,E,x,Pe)}"value"in b&&s(h,"value",g.value,b.value)}},R=(h,p,g,b,E,x,M,C,S)=>{const k=p.el=h?h.el:o(""),W=p.anchor=h?h.anchor:o("");let{patchFlag:$,dynamicChildren:V,slotScopeIds:J}=p;J&&(C=C?C.concat(J):J),h==null?(r(k,g,b),r(W,g,b),T(p.children,g,W,E,x,M,C,S)):$>0&&$&64&&V&&h.dynamicChildren?(q(h.dynamicChildren,V,g,E,x,M,C),(p.key!=null||E&&p===E.subTree)&&to(h,p,!0)):ae(h,p,g,W,E,x,M,C,S)},H=(h,p,g,b,E,x,M,C,S)=>{p.slotScopeIds=C,h==null?p.shapeFlag&512?E.ctx.activate(p,g,b,M,S):de(p,g,b,E,x,M,S):he(h,p,S)},de=(h,p,g,b,E,x,M)=>{const C=h.component=Mp(h,b,E);if(is(h)&&(C.ctx.renderer=O),Fp(C),C.asyncDep){if(E&&E.registerDep(C,ee),!h.el){const S=C.subTree=Ee(tt);v(null,S,p,g)}return}ee(C,h,p,g,E,x,M)},he=(h,p,g)=>{const b=p.component=h.component;if(zh(h,p,g))if(b.asyncDep&&!b.asyncResolved){le(b,p,g);return}else b.next=p,Fh(b.update),b.update();else p.el=h.el,b.vnode=p},ee=(h,p,g,b,E,x,M)=>{const C=()=>{if(h.isMounted){let{next:W,bu:$,u:V,parent:J,vnode:te}=h,me=W,ue;rn(h,!1),W?(W.el=te.el,le(h,W,M)):W=te,$&&_i($),(ue=W.props&&W.props.onVnodeBeforeUpdate)&&at(ue,J,W,te),rn(h,!0);const Ae=ks(h),Xe=h.subTree;h.subTree=Ae,I(Xe,Ae,f(Xe.el),w(Xe),h,E,x),W.el=Ae.el,me===null&&Wh(h,Ae.el),V&&Fe(V,E),(ue=W.props&&W.props.onVnodeUpdated)&&Fe(()=>at(ue,J,W,te),E)}else{let W;const{el:$,props:V}=p,{bm:J,m:te,parent:me}=h,ue=wi(p);if(rn(h,!1),J&&_i(J),!ue&&(W=V&&V.onVnodeBeforeMount)&&at(W,me,p),rn(h,!0),$&&oe){const Ae=()=>{h.subTree=ks(h),oe($,h.subTree,h,E,null)};ue?p.type.__asyncLoader().then(()=>!h.isUnmounted&&Ae()):Ae()}else{const Ae=h.subTree=ks(h);I(null,Ae,g,b,h,E,x),p.el=Ae.el}if(te&&Fe(te,E),!ue&&(W=V&&V.onVnodeMounted)){const Ae=p;Fe(()=>at(W,me,Ae),E)}(p.shapeFlag&256||me&&wi(me.vnode)&&me.vnode.shapeFlag&256)&&h.a&&Fe(h.a,E),h.isMounted=!0,p=g=b=null}},S=h.effect=new za(C,()=>Ja(k),h.scope),k=h.update=()=>S.run();k.id=h.uid,rn(h,!0),k()},le=(h,p,g)=>{p.component=h;const b=h.vnode.props;h.vnode=p,h.next=null,bp(h,p.props,b,g),wp(h,p.children,g),Jn(),Vo(),Qn()},ae=(h,p,g,b,E,x,M,C,S=!1)=>{const k=h&&h.children,W=h?h.shapeFlag:0,$=p.children,{patchFlag:V,shapeFlag:J}=p;if(V>0){if(V&128){St(k,$,g,b,E,x,M,C,S);return}else if(V&256){ht(k,$,g,b,E,x,M,C,S);return}}J&8?(W&16&&Pe(k,E,x),$!==k&&u(g,$)):W&16?J&16?St(k,$,g,b,E,x,M,C,S):Pe(k,E,x,!0):(W&8&&u(g,""),J&16&&T($,g,b,E,x,M,C,S))},ht=(h,p,g,b,E,x,M,C,S)=>{h=h||Mn,p=p||Mn;const k=h.length,W=p.length,$=Math.min(k,W);let V;for(V=0;V<$;V++){const J=p[V]=S?Ut(p[V]):ot(p[V]);I(h[V],J,g,null,E,x,M,C,S)}k>W?Pe(h,E,x,!0,!1,$):T(p,g,b,E,x,M,C,S,$)},St=(h,p,g,b,E,x,M,C,S)=>{let k=0;const W=p.length;let $=h.length-1,V=W-1;for(;k<=$&&k<=V;){const J=h[k],te=p[k]=S?Ut(p[k]):ot(p[k]);if(ln(J,te))I(J,te,g,null,E,x,M,C,S);else break;k++}for(;k<=$&&k<=V;){const J=h[$],te=p[V]=S?Ut(p[V]):ot(p[V]);if(ln(J,te))I(J,te,g,null,E,x,M,C,S);else break;$--,V--}if(k>$){if(k<=V){const J=V+1,te=J<W?p[J].el:b;for(;k<=V;)I(null,p[k]=S?Ut(p[k]):ot(p[k]),g,te,E,x,M,C,S),k++}}else if(k>V)for(;k<=$;)Me(h[k],E,x,!0),k++;else{const J=k,te=k,me=new Map;for(k=te;k<=V;k++){const Be=p[k]=S?Ut(p[k]):ot(p[k]);Be.key!=null&&me.set(Be.key,k)}let ue,Ae=0;const Xe=V-te+1;let Tn=!1,Lo=0;const tr=new Array(Xe);for(k=0;k<Xe;k++)tr[k]=0;for(k=J;k<=$;k++){const Be=h[k];if(Ae>=Xe){Me(Be,E,x,!0);continue}let st;if(Be.key!=null)st=me.get(Be.key);else for(ue=te;ue<=V;ue++)if(tr[ue-te]===0&&ln(Be,p[ue])){st=ue;break}st===void 0?Me(Be,E,x,!0):(tr[st-te]=k+1,st>=Lo?Lo=st:Tn=!0,I(Be,p[st],g,null,E,x,M,C,S),Ae++)}const Mo=Tn?xp(tr):Mn;for(ue=Mo.length-1,k=Xe-1;k>=0;k--){const Be=te+k,st=p[Be],Do=Be+1<W?p[Be+1].el:b;tr[k]===0?I(null,st,g,Do,E,x,M,C,S):Tn&&(ue<0||k!==Mo[ue]?it(st,g,Do,2):ue--)}}},it=(h,p,g,b,E=null)=>{const{el:x,type:M,transition:C,children:S,shapeFlag:k}=h;if(k&6){it(h.component.subTree,p,g,b);return}if(k&128){h.suspense.move(p,g,b);return}if(k&64){M.move(h,p,g,O);return}if(M===He){r(x,p,g);for(let $=0;$<S.length;$++)it(S[$],p,g,b);r(h.anchor,p,g);return}if(M===Ts){P(h,p,g);return}if(b!==2&&k&1&&C)if(b===0)C.beforeEnter(x),r(x,p,g),Fe(()=>C.enter(x),E);else{const{leave:$,delayLeave:V,afterLeave:J}=C,te=()=>r(x,p,g),me=()=>{$(x,()=>{te(),J&&J()})};V?V(x,te,me):me()}else r(x,p,g)},Me=(h,p,g,b=!1,E=!1)=>{const{type:x,props:M,ref:C,children:S,dynamicChildren:k,shapeFlag:W,patchFlag:$,dirs:V}=h;if(C!=null&&ca(C,null,g,h,!0),W&256){p.ctx.deactivate(h);return}const J=W&1&&V,te=!wi(h);let me;if(te&&(me=M&&M.onVnodeBeforeUnmount)&&at(me,p,h),W&6)Jr(h.component,g,b);else{if(W&128){h.suspense.unmount(g,b);return}J&&nn(h,null,p,"beforeUnmount"),W&64?h.type.remove(h,p,g,E,O,b):k&&(x!==He||$>0&&$&64)?Pe(k,p,g,!1,!0):(x===He&&$&384||!E&&W&16)&&Pe(S,p,g),b&&An(h)}(te&&(me=M&&M.onVnodeUnmounted)||J)&&Fe(()=>{me&&at(me,p,h),J&&nn(h,null,p,"unmounted")},g)},An=h=>{const{type:p,el:g,anchor:b,transition:E}=h;if(p===He){Cn(g,b);return}if(p===Ts){A(h);return}const x=()=>{i(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(h.shapeFlag&1&&E&&!E.persisted){const{leave:M,delayLeave:C}=E,S=()=>M(g,x);C?C(h.el,x,S):S()}else x()},Cn=(h,p)=>{let g;for(;h!==p;)g=d(h),i(h),h=g;i(p)},Jr=(h,p,g)=>{const{bum:b,scope:E,update:x,subTree:M,um:C}=h;b&&_i(b),E.stop(),x&&(x.active=!1,Me(M,h,p,g)),C&&Fe(C,p),Fe(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Pe=(h,p,g,b=!1,E=!1,x=0)=>{for(let M=x;M<h.length;M++)Me(h[M],p,g,b,E)},w=h=>h.shapeFlag&6?w(h.component.subTree):h.shapeFlag&128?h.suspense.next():d(h.anchor||h.el),U=(h,p,g)=>{h==null?p._vnode&&Me(p._vnode,null,null,!0):I(p._vnode||null,h,p,null,null,null,g),Vo(),bu(),p._vnode=h},O={p:I,um:Me,m:it,r:An,mt:de,mc:T,pc:ae,pbc:q,n:w,o:e};let z,oe;return t&&([z,oe]=t(O)),{render:U,hydrate:z,createApp:mp(U,z)}}function rn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function to(e,t,n=!1){const r=e.children,i=t.children;if(K(r)&&K(i))for(let s=0;s<r.length;s++){const a=r[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=Ut(i[s]),o.el=a.el),n||to(a,o)),o.type===cs&&(o.el=a.el)}}function xp(e){const t=e.slice(),n=[0];let r,i,s,a,o;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,e[n[o]]<l?s=o+1:a=o;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}const kp=e=>e.__isTeleport,dr=e=>e&&(e.disabled||e.disabled===""),rc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,la=(e,t)=>{const n=e&&e.to;return ke(n)?t?t(n):null:n},Ap={__isTeleport:!0,process(e,t,n,r,i,s,a,o,c,l){const{mc:u,pc:f,pbc:d,o:{insert:m,querySelector:_,createText:I,createComment:N}}=l,v=dr(t.props);let{shapeFlag:y,children:P,dynamicChildren:A}=t;if(e==null){const D=t.el=I(""),G=t.anchor=I("");m(D,n,r),m(G,n,r);const Y=t.target=la(t.props,_),T=t.targetAnchor=I("");Y&&(m(T,Y),a=a||rc(Y));const L=(q,re)=>{y&16&&u(P,q,re,i,s,a,o,c)};v?L(n,G):Y&&L(Y,T)}else{t.el=e.el;const D=t.anchor=e.anchor,G=t.target=e.target,Y=t.targetAnchor=e.targetAnchor,T=dr(e.props),L=T?n:G,q=T?D:Y;if(a=a||rc(G),A?(d(e.dynamicChildren,A,L,i,s,a,o),to(e,t,!0)):c||f(e,t,L,q,i,s,a,o,!1),v)T||si(t,n,D,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const re=t.target=la(t.props,_);re&&si(t,re,null,l,0)}else T&&si(t,G,Y,l,1)}Bu(t)},remove(e,t,n,r,{um:i,o:{remove:s}},a){const{shapeFlag:o,children:c,anchor:l,targetAnchor:u,target:f,props:d}=e;if(f&&s(u),(a||!dr(d))&&(s(l),o&16))for(let m=0;m<c.length;m++){const _=c[m];i(_,t,n,!0,!!_.dynamicChildren)}},move:si,hydrate:Cp};function si(e,t,n,{o:{insert:r},m:i},s=2){s===0&&r(e.targetAnchor,t,n);const{el:a,anchor:o,shapeFlag:c,children:l,props:u}=e,f=s===2;if(f&&r(a,t,n),(!f||dr(u))&&c&16)for(let d=0;d<l.length;d++)i(l[d],t,n,2);f&&r(o,t,n)}function Cp(e,t,n,r,i,s,{o:{nextSibling:a,parentNode:o,querySelector:c}},l){const u=t.target=la(t.props,c);if(u){const f=u._lpa||u.firstChild;if(t.shapeFlag&16)if(dr(t.props))t.anchor=l(a(e),t,o(e),n,r,i,s),t.targetAnchor=f;else{t.anchor=a(e);let d=f;for(;d;)if(d=a(d),d&&d.nodeType===8&&d.data==="teleport anchor"){t.targetAnchor=d,u._lpa=t.targetAnchor&&a(t.targetAnchor);break}l(f,t,u,n,r,i,s)}Bu(t)}return t.anchor&&a(t.anchor)}const Tp=Ap;function Bu(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const He=Symbol.for("v-fgt"),cs=Symbol.for("v-txt"),tt=Symbol.for("v-cmt"),Ts=Symbol.for("v-stc"),hr=[];let Qe=null;function fe(e=!1){hr.push(Qe=e?null:[])}function Sp(){hr.pop(),Qe=hr[hr.length-1]||null}let Ar=1;function ic(e){Ar+=e}function ju(e){return e.dynamicChildren=Ar>0?Qe||Mn:null,Sp(),Ar>0&&Qe&&Qe.push(e),e}function Le(e,t,n,r,i,s){return ju(j(e,t,n,r,i,s,!0))}function ze(e,t,n,r,i){return ju(Ee(e,t,n,r,i,!0))}function ua(e){return e?e.__v_isVNode===!0:!1}function ln(e,t){return e.type===t.type&&e.key===t.key}const ls="__vInternal",Hu=({key:e})=>e??null,Ii=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ke(e)||we(e)||Q(e)?{i:Ue,r:e,k:t,f:!!n}:e:null);function j(e,t=null,n=null,r=0,i=null,s=e===He?0:1,a=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Hu(t),ref:t&&Ii(t),scopeId:rs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ue};return o?(no(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=ke(n)?8:16),Ar>0&&!a&&Qe&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Qe.push(c),c}const Ee=Pp;function Pp(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===ap)&&(e=tt),ua(e)){const o=Gt(e,t,!0);return n&&no(o,n),Ar>0&&!s&&Qe&&(o.shapeFlag&6?Qe[Qe.indexOf(e)]=o:Qe.push(o)),o.patchFlag|=-2,o}if(Hp(e)&&(e=e.__vccOpts),t){t=Op(t);let{class:o,style:c}=t;o&&!ke(o)&&(t.class=Z(o)),ge(c)&&(uu(c)&&!K(c)&&(c=Ce({},c)),t.style=ja(c))}const a=ke(e)?1:Vh(e)?128:kp(e)?64:ge(e)?4:Q(e)?2:0;return j(e,t,n,r,i,a,s,!0)}function Op(e){return e?uu(e)||ls in e?Ce({},e):e:null}function Gt(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:a}=e,o=t?Rp(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Hu(o),ref:t&&t.ref?n&&i?K(i)?i.concat(Ii(t)):[i,Ii(t)]:Ii(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==He?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Gt(e.ssContent),ssFallback:e.ssFallback&&Gt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function zt(e=" ",t=0){return Ee(cs,null,e,t)}function xi(e="",t=!1){return t?(fe(),ze(tt,null,e)):Ee(tt,null,e)}function ot(e){return e==null||typeof e=="boolean"?Ee(tt):K(e)?Ee(He,null,e.slice()):typeof e=="object"?Ut(e):Ee(cs,null,String(e))}function Ut(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Gt(e)}function no(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),no(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(ls in t)?t._ctx=Ue:i===3&&Ue&&(Ue.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Q(t)?(t={default:t,_ctx:Ue},n=32):(t=String(t),r&64?(n=16,t=[zt(t)]):n=8);e.children=t,e.shapeFlag|=n}function Rp(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Z([t.class,r.class]));else if(i==="style")t.style=ja([t.style,r.style]);else if(Xi(i)){const s=t[i],a=r[i];a&&s!==a&&!(K(s)&&s.includes(a))&&(t[i]=s?[].concat(s,a):a)}else i!==""&&(t[i]=r[i])}return t}function at(e,t,n,r=null){qe(e,t,7,[n,r])}const Np=Lu();let Lp=0;function Mp(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Np,s={uid:Lp++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Du(r,i),emitsOptions:_u(r,i),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:r.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Bh.bind(null,s),e.ce&&e.ce(s),s}let Te=null;const Dp=()=>Te||Ue;let ro,Sn,sc="__VUE_INSTANCE_SETTERS__";(Sn=Js()[sc])||(Sn=Js()[sc]=[]),Sn.push(e=>Te=e),ro=e=>{Sn.length>1?Sn.forEach(t=>t(e)):Sn[0](e)};const Vn=e=>{ro(e),e.scope.on()},vn=()=>{Te&&Te.scope.off(),ro(null)};function zu(e){return e.vnode.shapeFlag&4}let Cr=!1;function Fp(e,t=!1){Cr=t;const{props:n,children:r}=e.vnode,i=zu(e);vp(e,n,i,t),_p(e,r);const s=i?Up(e,t):void 0;return Cr=!1,s}function Up(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Br(new Proxy(e.ctx,cp));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Bp(e):null;Vn(e),Jn();const s=Vt(r,e,0,[e.props,i]);if(Qn(),vn(),Wl(s)){if(s.then(vn,vn),t)return s.then(a=>{ac(e,a,t)}).catch(a=>{ts(a,e,0)});e.asyncDep=s}else ac(e,s,t)}else Wu(e,t)}function ac(e,t,n){Q(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ge(t)&&(e.setupState=pu(t)),Wu(e,n)}let oc;function Wu(e,t,n){const r=e.type;if(!e.render){if(!t&&oc&&!r.render){const i=r.template||Za(e).template;if(i){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:o,compilerOptions:c}=r,l=Ce(Ce({isCustomElement:s,delimiters:o},a),c);r.render=oc(i,l)}}e.render=r.render||et}Vn(e),Jn(),lp(e),Qn(),vn()}function $p(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return $e(e,"get","$attrs"),t[n]}}))}function Bp(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return $p(e)},slots:e.slots,emit:e.emit,expose:t}}function us(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(pu(Br(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in fr)return fr[n](e)},has(t,n){return n in t||n in fr}}))}function jp(e,t=!0){return Q(e)?e.displayName||e.name:e.name||t&&e.__name}function Hp(e){return Q(e)&&"__vccOpts"in e}const xe=(e,t)=>Lh(e,t,Cr);function fs(e,t,n){const r=arguments.length;return r===2?ge(t)&&!K(t)?ua(t)?Ee(e,null,[t]):Ee(e,t):Ee(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ua(n)&&(n=[n]),Ee(e,t,n))}const zp=Symbol.for("v-scx"),Wp=()=>Ye(zp),Vp="3.3.4",Kp="http://www.w3.org/2000/svg",un=typeof document<"u"?document:null,cc=un&&un.createElement("template"),qp={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?un.createElementNS(Kp,e):un.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>un.createTextNode(e),createComment:e=>un.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>un.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const a=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{cc.innerHTML=r?`<svg>${e}</svg>`:e;const o=cc.content;if(r){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Yp(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Gp(e,t,n){const r=e.style,i=ke(n);if(n&&!i){if(t&&!ke(t))for(const s in t)n[s]==null&&fa(r,s,"");for(const s in n)fa(r,s,n[s])}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const lc=/\s*!important$/;function fa(e,t,n){if(K(n))n.forEach(r=>fa(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Xp(e,t);lc.test(n)?e.setProperty(Xn(r),n.replace(lc,""),"important"):e[r]=n}}const uc=["Webkit","Moz","ms"],Ss={};function Xp(e,t){const n=Ss[t];if(n)return n;let r=dt(t);if(r!=="filter"&&r in e)return Ss[t]=r;r=Zi(r);for(let i=0;i<uc.length;i++){const s=uc[i]+r;if(s in e)return Ss[t]=s}return t}const fc="http://www.w3.org/1999/xlink";function Jp(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(fc,t.slice(6,t.length)):e.setAttributeNS(fc,t,n);else{const s=Gd(t);n==null||s&&!ql(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Qp(e,t,n,r,i,s,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,i,s),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){e._value=n;const l=o==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ql(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function On(e,t,n,r){e.addEventListener(t,n,r)}function Zp(e,t,n,r){e.removeEventListener(t,n,r)}function em(e,t,n,r,i=null){const s=e._vei||(e._vei={}),a=s[t];if(r&&a)a.value=r;else{const[o,c]=tm(t);if(r){const l=s[t]=im(r,i);On(e,o,l,c)}else a&&(Zp(e,o,a,c),s[t]=void 0)}}const dc=/(?:Once|Passive|Capture)$/;function tm(e){let t;if(dc.test(e)){t={};let r;for(;r=e.match(dc);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Xn(e.slice(2)),t]}let Ps=0;const nm=Promise.resolve(),rm=()=>Ps||(nm.then(()=>Ps=0),Ps=Date.now());function im(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;qe(sm(r,n.value),t,5,[r])};return n.value=e,n.attached=rm(),n}function sm(e,t){if(K(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const hc=/^on[a-z]/,am=(e,t,n,r,i=!1,s,a,o,c)=>{t==="class"?Yp(e,r,i):t==="style"?Gp(e,n,r):Xi(t)?Fa(t)||em(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):om(e,t,r,i))?Qp(e,t,r,s,a,o,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Jp(e,t,r,i))};function om(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&hc.test(t)&&Q(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||hc.test(t)&&ke(n)?!1:t in e}const Ot="transition",nr="animation",ds=(e,{slots:t})=>fs(Jh,cm(e),t);ds.displayName="Transition";const Vu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ds.props=Ce({},xu,Vu);const sn=(e,t=[])=>{K(e)?e.forEach(n=>n(...t)):e&&e(...t)},pc=e=>e?K(e)?e.some(t=>t.length>1):e.length>1:!1;function cm(e){const t={};for(const R in e)R in Vu||(t[R]=e[R]);if(e.css===!1)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:l=a,appearToClass:u=o,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,_=lm(i),I=_&&_[0],N=_&&_[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:P,onLeave:A,onLeaveCancelled:D,onBeforeAppear:G=v,onAppear:Y=y,onAppearCancelled:T=P}=t,L=(R,H,de)=>{an(R,H?u:o),an(R,H?l:a),de&&de()},q=(R,H)=>{R._isLeaving=!1,an(R,f),an(R,m),an(R,d),H&&H()},re=R=>(H,de)=>{const he=R?Y:y,ee=()=>L(H,R,de);sn(he,[H,ee]),mc(()=>{an(H,R?c:s),Rt(H,R?u:o),pc(he)||gc(H,r,I,ee)})};return Ce(t,{onBeforeEnter(R){sn(v,[R]),Rt(R,s),Rt(R,a)},onBeforeAppear(R){sn(G,[R]),Rt(R,c),Rt(R,l)},onEnter:re(!1),onAppear:re(!0),onLeave(R,H){R._isLeaving=!0;const de=()=>q(R,H);Rt(R,f),dm(),Rt(R,d),mc(()=>{R._isLeaving&&(an(R,f),Rt(R,m),pc(A)||gc(R,r,N,de))}),sn(A,[R,de])},onEnterCancelled(R){L(R,!1),sn(P,[R])},onAppearCancelled(R){L(R,!0),sn(T,[R])},onLeaveCancelled(R){q(R),sn(D,[R])}})}function lm(e){if(e==null)return null;if(ge(e))return[Os(e.enter),Os(e.leave)];{const t=Os(e);return[t,t]}}function Os(e){return zd(e)}function Rt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function an(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function mc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let um=0;function gc(e,t,n,r){const i=e._endId=++um,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:a,timeout:o,propCount:c}=fm(e,t);if(!a)return r();const l=a+"end";let u=0;const f=()=>{e.removeEventListener(l,d),s()},d=m=>{m.target===e&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},o+1),e.addEventListener(l,d)}function fm(e,t){const n=window.getComputedStyle(e),r=_=>(n[_]||"").split(", "),i=r(`${Ot}Delay`),s=r(`${Ot}Duration`),a=vc(i,s),o=r(`${nr}Delay`),c=r(`${nr}Duration`),l=vc(o,c);let u=null,f=0,d=0;t===Ot?a>0&&(u=Ot,f=a,d=s.length):t===nr?l>0&&(u=nr,f=l,d=c.length):(f=Math.max(a,l),u=f>0?a>l?Ot:nr:null,d=u?u===Ot?s.length:c.length:0);const m=u===Ot&&/\b(transform|all)(,|$)/.test(r(`${Ot}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:m}}function vc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>bc(n)+bc(e[r])))}function bc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function dm(){return document.body.offsetHeight}const yc=e=>{const t=e.props["onUpdate:modelValue"]||!1;return K(t)?n=>_i(t,n):t};function hm(e){e.target.composing=!0}function _c(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ai={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=yc(i);const s=r||i.props&&i.props.type==="number";On(e,t?"change":"input",a=>{if(a.target.composing)return;let o=e.value;n&&(o=o.trim()),s&&(o=Xs(o)),e._assign(o)}),n&&On(e,"change",()=>{e.value=e.value.trim()}),t||(On(e,"compositionstart",hm),On(e,"compositionend",_c),On(e,"change",_c))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e._assign=yc(s),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(i||e.type==="number")&&Xs(e.value)===t))return;const a=t??"";e.value!==a&&(e.value=a)}},pm=["ctrl","shift","alt","meta"],mm={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>pm.some(n=>e[`${n}Key`]&&!t.includes(n))},wc=(e,t)=>(n,...r)=>{for(let i=0;i<t.length;i++){const s=mm[t[i]];if(s&&s(n,t))return}return e(n,...r)},gm=Ce({patchProp:am},qp);let Ec;function vm(){return Ec||(Ec=Ep(gm))}const bm=(...e)=>{const t=vm().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=ym(r);if(!i)return;const s=t._component;!Q(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function ym(e){return ke(e)?document.querySelector(e):e}var _m=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Ku;const hs=e=>Ku=e,qu=Symbol();function da(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var pr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(pr||(pr={}));function wm(){const e=Xl(!0),t=e.run(()=>se({}));let n=[],r=[];const i=Br({install(s){hs(i),i._a=s,s.provide(qu,i),s.config.globalProperties.$pinia=i,r.forEach(a=>n.push(a)),r=[]},use(s){return!this._a&&!_m?r.push(s):n.push(s),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}const Yu=()=>{};function Ic(e,t,n,r=Yu){e.push(t);const i=()=>{const s=e.indexOf(t);s>-1&&(e.splice(s,1),r())};return!n&&Jl()&&Jd(i),i}function Pn(e,...t){e.slice().forEach(n=>{n(...t)})}const Em=e=>e();function ha(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],i=e[n];da(i)&&da(r)&&e.hasOwnProperty(n)&&!we(r)&&!_t(r)?e[n]=ha(i,r):e[n]=r}return e}const Im=Symbol();function xm(e){return!da(e)||!e.hasOwnProperty(Im)}const{assign:Ft}=Object;function km(e){return!!(we(e)&&e.effect)}function Am(e,t,n,r){const{state:i,actions:s,getters:a}=t,o=n.state.value[e];let c;function l(){o||(n.state.value[e]=i?i():{});const u=Sh(n.state.value[e]);return Ft(u,s,Object.keys(a||{}).reduce((f,d)=>(f[d]=Br(xe(()=>{hs(n);const m=n._s.get(e);return a[d].call(m,m)})),f),{}))}return c=Gu(e,l,t,n,r,!0),c}function Gu(e,t,n={},r,i,s){let a;const o=Ft({actions:{}},n),c={deep:!0};let l,u,f=[],d=[],m;const _=r.state.value[e];!s&&!_&&(r.state.value[e]={}),se({});let I;function N(T){let L;l=u=!1,typeof T=="function"?(T(r.state.value[e]),L={type:pr.patchFunction,storeId:e,events:m}):(ha(r.state.value[e],T),L={type:pr.patchObject,payload:T,storeId:e,events:m});const q=I=Symbol();Xa().then(()=>{I===q&&(l=!0)}),u=!0,Pn(f,L,r.state.value[e])}const v=s?function(){const{state:L}=n,q=L?L():{};this.$patch(re=>{Ft(re,q)})}:Yu;function y(){a.stop(),f=[],d=[],r._s.delete(e)}function P(T,L){return function(){hs(r);const q=Array.from(arguments),re=[],R=[];function H(ee){re.push(ee)}function de(ee){R.push(ee)}Pn(d,{args:q,name:T,store:D,after:H,onError:de});let he;try{he=L.apply(this&&this.$id===e?this:D,q)}catch(ee){throw Pn(R,ee),ee}return he instanceof Promise?he.then(ee=>(Pn(re,ee),ee)).catch(ee=>(Pn(R,ee),Promise.reject(ee))):(Pn(re,he),he)}}const A={_p:r,$id:e,$onAction:Ic.bind(null,d),$patch:N,$reset:v,$subscribe(T,L={}){const q=Ic(f,T,L.detached,()=>re()),re=a.run(()=>gn(()=>r.state.value[e],R=>{(L.flush==="sync"?u:l)&&T({storeId:e,type:pr.direct,events:m},R)},Ft({},c,L)));return q},$dispose:y},D=$r(A);r._s.set(e,D);const G=r._a&&r._a.runWithContext||Em,Y=r._e.run(()=>(a=Xl(),G(()=>a.run(t))));for(const T in Y){const L=Y[T];if(we(L)&&!km(L)||_t(L))s||(_&&xm(L)&&(we(L)?L.value=_[T]:ha(L,_[T])),r.state.value[e][T]=L);else if(typeof L=="function"){const q=P(T,L);Y[T]=q,o.actions[T]=L}}return Ft(D,Y),Ft(ne(D),Y),Object.defineProperty(D,"$state",{get:()=>r.state.value[e],set:T=>{N(L=>{Ft(L,T)})}}),r._p.forEach(T=>{Ft(D,a.run(()=>T({store:D,app:r._a,pinia:r,options:o})))}),_&&s&&n.hydrate&&n.hydrate(D.$state,_),l=!0,u=!0,D}function Xu(e,t,n){let r,i;const s=typeof t=="function";typeof e=="string"?(r=e,i=s?n:t):(i=e,r=e.id);function a(o,c){const l=gp();return o=o||(l?Ye(qu,null):null),o&&hs(o),o=Ku,o._s.has(r)||(s?Gu(r,t,i,o):Am(r,i,o)),o._s.get(r)}return a.$id=r,a}function io(e){{e=ne(e);const t={};for(const n in e){const r=e[n];(we(r)||_t(r))&&(t[n]=Rh(e,n))}return t}}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Rn=typeof window<"u";function Cm(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ce=Object.assign;function Rs(e,t){const n={};for(const r in t){const i=t[r];n[r]=nt(i)?i.map(e):e(i)}return n}const mr=()=>{},nt=Array.isArray,Tm=/\/$/,Sm=e=>e.replace(Tm,"");function Ns(e,t,n="/"){let r,i={},s="",a="";const o=t.indexOf("#");let c=t.indexOf("?");return o<c&&o>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,o>-1?o:t.length),i=e(s)),o>-1&&(r=r||t.slice(0,o),a=t.slice(o,t.length)),r=Nm(r??t,n),{fullPath:r+(s&&"?")+s+a,path:r,query:i,hash:a}}function Pm(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function xc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Om(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Kn(t.matched[r],n.matched[i])&&Ju(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Kn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ju(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Rm(e[n],t[n]))return!1;return!0}function Rm(e,t){return nt(e)?kc(e,t):nt(t)?kc(t,e):e===t}function kc(e,t){return nt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Nm(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,a,o;for(a=0;a<r.length;a++)if(o=r[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}var Tr;(function(e){e.pop="pop",e.push="push"})(Tr||(Tr={}));var gr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(gr||(gr={}));function Lm(e){if(!e)if(Rn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Sm(e)}const Mm=/^[^#]+#/;function Dm(e,t){return e.replace(Mm,"#")+t}function Fm(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ps=()=>({left:window.pageXOffset,top:window.pageYOffset});function Um(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Fm(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ac(e,t){return(history.state?history.state.position-t:-1)+e}const pa=new Map;function $m(e,t){pa.set(e,t)}function Bm(e){const t=pa.get(e);return pa.delete(e),t}let jm=()=>location.protocol+"//"+location.host;function Qu(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let o=i.includes(e.slice(s))?e.slice(s).length:1,c=i.slice(o);return c[0]!=="/"&&(c="/"+c),xc(c,"")}return xc(n,e)+r+i}function Hm(e,t,n,r){let i=[],s=[],a=null;const o=({state:d})=>{const m=Qu(e,location),_=n.value,I=t.value;let N=0;if(d){if(n.value=m,t.value=d,a&&a===_){a=null;return}N=I?d.position-I.position:0}else r(m);i.forEach(v=>{v(n.value,_,{delta:N,type:Tr.pop,direction:N?N>0?gr.forward:gr.back:gr.unknown})})};function c(){a=n.value}function l(d){i.push(d);const m=()=>{const _=i.indexOf(d);_>-1&&i.splice(_,1)};return s.push(m),m}function u(){const{history:d}=window;d.state&&d.replaceState(ce({},d.state,{scroll:ps()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Cc(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?ps():null}}function zm(e){const{history:t,location:n}=window,r={value:Qu(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const f=e.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:jm()+e+c;try{t[u?"replaceState":"pushState"](l,"",d),i.value=l}catch(m){console.error(m),n[u?"replace":"assign"](d)}}function a(c,l){const u=ce({},t.state,Cc(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function o(c,l){const u=ce({},i.value,t.state,{forward:c,scroll:ps()});s(u.current,u,!0);const f=ce({},Cc(r.value,c,null),{position:u.position+1},l);s(c,f,!1),r.value=c}return{location:r,state:i,push:o,replace:a}}function Wm(e){e=Lm(e);const t=zm(e),n=Hm(e,t.state,t.location,t.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=ce({location:"",base:e,go:r,createHref:Dm.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Vm(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Wm(e)}function Km(e){return typeof e=="string"||e&&typeof e=="object"}function Zu(e){return typeof e=="string"||typeof e=="symbol"}const Nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ef=Symbol("");var Tc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Tc||(Tc={}));function qn(e,t){return ce(new Error,{type:e,[ef]:!0},t)}function pt(e,t){return e instanceof Error&&ef in e&&(t==null||!!(e.type&t))}const Sc="[^/]+?",qm={sensitive:!1,strict:!1,start:!0,end:!0},Ym=/[.+*?^${}()[\]/\\]/g;function Gm(e,t){const n=ce({},qm,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let f=0;f<l.length;f++){const d=l[f];let m=40+(n.sensitive?.25:0);if(d.type===0)f||(i+="/"),i+=d.value.replace(Ym,"\\$&"),m+=40;else if(d.type===1){const{value:_,repeatable:I,optional:N,regexp:v}=d;s.push({name:_,repeatable:I,optional:N});const y=v||Sc;if(y!==Sc){m+=10;try{new RegExp(`(${y})`)}catch(A){throw new Error(`Invalid custom RegExp for param "${_}" (${y}): `+A.message)}}let P=I?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(P=N&&l.length<2?`(?:/${P})`:"/"+P),N&&(P+="?"),i+=P,m+=20,N&&(m+=-8),I&&(m+=-20),y===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function o(l){const u=l.match(a),f={};if(!u)return null;for(let d=1;d<u.length;d++){const m=u[d]||"",_=s[d-1];f[_.name]=m&&_.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const d of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of d)if(m.type===0)u+=m.value;else if(m.type===1){const{value:_,repeatable:I,optional:N}=m,v=_ in l?l[_]:"";if(nt(v)&&!I)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const y=nt(v)?v.join("/"):v;if(!y)if(N)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=y}}return u||"/"}return{re:a,score:r,keys:s,parse:o,stringify:c}}function Xm(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Jm(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=Xm(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Pc(r))return 1;if(Pc(i))return-1}return i.length-r.length}function Pc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Qm={type:0,value:""},Zm=/[a-zA-Z0-9_]/;function eg(e){if(!e)return[[]];if(e==="/")return[[Qm]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let o=0,c,l="",u="";function f(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;o<e.length;){if(c=e[o++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),a()):c===":"?(f(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:Zm.test(c)?d():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&o--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&o--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),a(),i}function tg(e,t,n){const r=Gm(eg(e.path),n),i=ce(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function ng(e,t){const n=[],r=new Map;t=Nc({strict:!1,end:!0,sensitive:!1},t);function i(u){return r.get(u)}function s(u,f,d){const m=!d,_=rg(u);_.aliasOf=d&&d.record;const I=Nc(t,u),N=[_];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const A of P)N.push(ce({},_,{components:d?d.record.components:_.components,path:A,aliasOf:d?d.record:_}))}let v,y;for(const P of N){const{path:A}=P;if(f&&A[0]!=="/"){const D=f.record.path,G=D[D.length-1]==="/"?"":"/";P.path=f.record.path+(A&&G+A)}if(v=tg(P,f,I),d?d.alias.push(v):(y=y||v,y!==v&&y.alias.push(v),m&&u.name&&!Rc(v)&&a(u.name)),_.children){const D=_.children;for(let G=0;G<D.length;G++)s(D[G],v,d&&d.children[G])}d=d||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&c(v)}return y?()=>{a(y)}:mr}function a(u){if(Zu(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return n}function c(u){let f=0;for(;f<n.length&&Jm(u,n[f])>=0&&(u.record.path!==n[f].record.path||!tf(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Rc(u)&&r.set(u.record.name,u)}function l(u,f){let d,m={},_,I;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw qn(1,{location:u});I=d.record.name,m=ce(Oc(f.params,d.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&Oc(u.params,d.keys.map(y=>y.name))),_=d.stringify(m)}else if("path"in u)_=u.path,d=n.find(y=>y.re.test(_)),d&&(m=d.parse(_),I=d.record.name);else{if(d=f.name?r.get(f.name):n.find(y=>y.re.test(f.path)),!d)throw qn(1,{location:u,currentLocation:f});I=d.record.name,m=ce({},f.params,u.params),_=d.stringify(m)}const N=[];let v=d;for(;v;)N.unshift(v.record),v=v.parent;return{name:I,path:_,params:m,matched:N,meta:sg(N)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:a,getRoutes:o,getRecordMatcher:i}}function Oc(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function rg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ig(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function ig(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Rc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function sg(e){return e.reduce((t,n)=>ce(t,n.meta),{})}function Nc(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function tf(e,t){return t.children.some(n=>n===e||tf(e,n))}const nf=/#/g,ag=/&/g,og=/\//g,cg=/=/g,lg=/\?/g,rf=/\+/g,ug=/%5B/g,fg=/%5D/g,sf=/%5E/g,dg=/%60/g,af=/%7B/g,hg=/%7C/g,of=/%7D/g,pg=/%20/g;function so(e){return encodeURI(""+e).replace(hg,"|").replace(ug,"[").replace(fg,"]")}function mg(e){return so(e).replace(af,"{").replace(of,"}").replace(sf,"^")}function ma(e){return so(e).replace(rf,"%2B").replace(pg,"+").replace(nf,"%23").replace(ag,"%26").replace(dg,"`").replace(af,"{").replace(of,"}").replace(sf,"^")}function gg(e){return ma(e).replace(cg,"%3D")}function vg(e){return so(e).replace(nf,"%23").replace(lg,"%3F")}function bg(e){return e==null?"":vg(e).replace(og,"%2F")}function Fi(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function yg(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(rf," "),a=s.indexOf("="),o=Fi(a<0?s:s.slice(0,a)),c=a<0?null:Fi(s.slice(a+1));if(o in t){let l=t[o];nt(l)||(l=t[o]=[l]),l.push(c)}else t[o]=c}return t}function Lc(e){let t="";for(let n in e){const r=e[n];if(n=gg(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(nt(r)?r.map(s=>s&&ma(s)):[r&&ma(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function _g(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=nt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const cf=Symbol(""),Mc=Symbol(""),ms=Symbol(""),lf=Symbol(""),ga=Symbol("");function rr(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function wg(e,t,n){const r=()=>{e[t].delete(n)};os(r),Tu(r),Cu(()=>{e[t].add(n)}),e[t].add(n)}function Eg(e){const t=Ye(cf,{}).value;t&&wg(t,"leaveGuards",e)}function $t(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,o)=>{const c=f=>{f===!1?o(qn(4,{from:n,to:t})):f instanceof Error?o(f):Km(f)?o(qn(2,{from:t,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),a())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>o(f))})}function Ls(e,t,n,r){const i=[];for(const s of e)for(const a in s.components){let o=s.components[a];if(!(t!=="beforeRouteEnter"&&!s.instances[a]))if(Ig(o)){const l=(o.__vccOpts||o)[t];l&&i.push($t(l,n,r,s,a))}else{let c=o();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=Cm(l)?l.default:l;s.components[a]=u;const d=(u.__vccOpts||u)[t];return d&&$t(d,n,r,s,a)()}))}}return i}function Ig(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Dc(e){const t=Ye(ms),n=Ye(lf),r=xe(()=>t.resolve(_e(e.to))),i=xe(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Kn.bind(null,u));if(d>-1)return d;const m=Fc(c[l-2]);return l>1&&Fc(u)===m&&f[f.length-1].path!==m?f.findIndex(Kn.bind(null,c[l-2])):d}),s=xe(()=>i.value>-1&&Cg(n.params,r.value.params)),a=xe(()=>i.value>-1&&i.value===n.matched.length-1&&Ju(n.params,r.value.params));function o(c={}){return Ag(c)?t[_e(e.replace)?"replace":"push"](_e(e.to)).catch(mr):Promise.resolve()}return{route:r,href:xe(()=>r.value.href),isActive:s,isExactActive:a,navigate:o}}const xg=rt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Dc,setup(e,{slots:t}){const n=$r(Dc(e)),{options:r}=Ye(ms),i=xe(()=>({[Uc(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Uc(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:fs("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),kg=xg;function Ag(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Cg(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!nt(i)||i.length!==r.length||r.some((s,a)=>s!==i[a]))return!1}return!0}function Fc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Uc=(e,t,n)=>e??t??n,Tg=rt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ye(ga),i=xe(()=>e.route||r.value),s=Ye(Mc,0),a=xe(()=>{let l=_e(s);const{matched:u}=i.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),o=xe(()=>i.value.matched[a.value]);Ei(Mc,xe(()=>a.value+1)),Ei(cf,o),Ei(ga,i);const c=se();return gn(()=>[c.value,o.value,e.name],([l,u,f],[d,m,_])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Kn(u,m)||!d)&&(u.enterCallbacks[f]||[]).forEach(I=>I(l))},{flush:"post"}),()=>{const l=i.value,u=e.name,f=o.value,d=f&&f.components[u];if(!d)return $c(n.default,{Component:d,route:l});const m=f.props[u],_=m?m===!0?l.params:typeof m=="function"?m(l):m:null,N=fs(d,ce({},_,t,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return $c(n.default,{Component:N,route:l})||N}}});function $c(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const uf=Tg;function Sg(e){const t=ng(e.routes,e),n=e.parseQuery||yg,r=e.stringifyQuery||Lc,i=e.history,s=rr(),a=rr(),o=rr(),c=kh(Nt);let l=Nt;Rn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Rs.bind(null,w=>""+w),f=Rs.bind(null,bg),d=Rs.bind(null,Fi);function m(w,U){let O,z;return Zu(w)?(O=t.getRecordMatcher(w),z=U):z=w,t.addRoute(z,O)}function _(w){const U=t.getRecordMatcher(w);U&&t.removeRoute(U)}function I(){return t.getRoutes().map(w=>w.record)}function N(w){return!!t.getRecordMatcher(w)}function v(w,U){if(U=ce({},U||c.value),typeof w=="string"){const g=Ns(n,w,U.path),b=t.resolve({path:g.path},U),E=i.createHref(g.fullPath);return ce(g,b,{params:d(b.params),hash:Fi(g.hash),redirectedFrom:void 0,href:E})}let O;if("path"in w)O=ce({},w,{path:Ns(n,w.path,U.path).path});else{const g=ce({},w.params);for(const b in g)g[b]==null&&delete g[b];O=ce({},w,{params:f(g)}),U.params=f(U.params)}const z=t.resolve(O,U),oe=w.hash||"";z.params=u(d(z.params));const h=Pm(r,ce({},w,{hash:mg(oe),path:z.path})),p=i.createHref(h);return ce({fullPath:h,hash:oe,query:r===Lc?_g(w.query):w.query||{}},z,{redirectedFrom:void 0,href:p})}function y(w){return typeof w=="string"?Ns(n,w,c.value.path):ce({},w)}function P(w,U){if(l!==w)return qn(8,{from:U,to:w})}function A(w){return Y(w)}function D(w){return A(ce(y(w),{replace:!0}))}function G(w){const U=w.matched[w.matched.length-1];if(U&&U.redirect){const{redirect:O}=U;let z=typeof O=="function"?O(w):O;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=y(z):{path:z},z.params={}),ce({query:w.query,hash:w.hash,params:"path"in z?{}:w.params},z)}}function Y(w,U){const O=l=v(w),z=c.value,oe=w.state,h=w.force,p=w.replace===!0,g=G(O);if(g)return Y(ce(y(g),{state:typeof g=="object"?ce({},oe,g.state):oe,force:h,replace:p}),U||O);const b=O;b.redirectedFrom=U;let E;return!h&&Om(r,z,O)&&(E=qn(16,{to:b,from:z}),it(z,z,!0,!1)),(E?Promise.resolve(E):q(b,z)).catch(x=>pt(x)?pt(x,2)?x:St(x):ae(x,b,z)).then(x=>{if(x){if(pt(x,2))return Y(ce({replace:p},y(x.to),{state:typeof x.to=="object"?ce({},oe,x.to.state):oe,force:h}),U||b)}else x=R(b,z,!0,p,oe);return re(b,z,x),x})}function T(w,U){const O=P(w,U);return O?Promise.reject(O):Promise.resolve()}function L(w){const U=Cn.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(w):w()}function q(w,U){let O;const[z,oe,h]=Pg(w,U);O=Ls(z.reverse(),"beforeRouteLeave",w,U);for(const g of z)g.leaveGuards.forEach(b=>{O.push($t(b,w,U))});const p=T.bind(null,w,U);return O.push(p),Pe(O).then(()=>{O=[];for(const g of s.list())O.push($t(g,w,U));return O.push(p),Pe(O)}).then(()=>{O=Ls(oe,"beforeRouteUpdate",w,U);for(const g of oe)g.updateGuards.forEach(b=>{O.push($t(b,w,U))});return O.push(p),Pe(O)}).then(()=>{O=[];for(const g of h)if(g.beforeEnter)if(nt(g.beforeEnter))for(const b of g.beforeEnter)O.push($t(b,w,U));else O.push($t(g.beforeEnter,w,U));return O.push(p),Pe(O)}).then(()=>(w.matched.forEach(g=>g.enterCallbacks={}),O=Ls(h,"beforeRouteEnter",w,U),O.push(p),Pe(O))).then(()=>{O=[];for(const g of a.list())O.push($t(g,w,U));return O.push(p),Pe(O)}).catch(g=>pt(g,8)?g:Promise.reject(g))}function re(w,U,O){o.list().forEach(z=>L(()=>z(w,U,O)))}function R(w,U,O,z,oe){const h=P(w,U);if(h)return h;const p=U===Nt,g=Rn?history.state:{};O&&(z||p?i.replace(w.fullPath,ce({scroll:p&&g&&g.scroll},oe)):i.push(w.fullPath,oe)),c.value=w,it(w,U,O,p),St()}let H;function de(){H||(H=i.listen((w,U,O)=>{if(!Jr.listening)return;const z=v(w),oe=G(z);if(oe){Y(ce(oe,{replace:!0}),z).catch(mr);return}l=z;const h=c.value;Rn&&$m(Ac(h.fullPath,O.delta),ps()),q(z,h).catch(p=>pt(p,12)?p:pt(p,2)?(Y(p.to,z).then(g=>{pt(g,20)&&!O.delta&&O.type===Tr.pop&&i.go(-1,!1)}).catch(mr),Promise.reject()):(O.delta&&i.go(-O.delta,!1),ae(p,z,h))).then(p=>{p=p||R(z,h,!1),p&&(O.delta&&!pt(p,8)?i.go(-O.delta,!1):O.type===Tr.pop&&pt(p,20)&&i.go(-1,!1)),re(z,h,p)}).catch(mr)}))}let he=rr(),ee=rr(),le;function ae(w,U,O){St(w);const z=ee.list();return z.length?z.forEach(oe=>oe(w,U,O)):console.error(w),Promise.reject(w)}function ht(){return le&&c.value!==Nt?Promise.resolve():new Promise((w,U)=>{he.add([w,U])})}function St(w){return le||(le=!w,de(),he.list().forEach(([U,O])=>w?O(w):U()),he.reset()),w}function it(w,U,O,z){const{scrollBehavior:oe}=e;if(!Rn||!oe)return Promise.resolve();const h=!O&&Bm(Ac(w.fullPath,0))||(z||!O)&&history.state&&history.state.scroll||null;return Xa().then(()=>oe(w,U,h)).then(p=>p&&Um(p)).catch(p=>ae(p,w,U))}const Me=w=>i.go(w);let An;const Cn=new Set,Jr={currentRoute:c,listening:!0,addRoute:m,removeRoute:_,hasRoute:N,getRoutes:I,resolve:v,options:e,push:A,replace:D,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:ee.add,isReady:ht,install(w){const U=this;w.component("RouterLink",kg),w.component("RouterView",uf),w.config.globalProperties.$router=U,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>_e(c)}),Rn&&!An&&c.value===Nt&&(An=!0,A(i.location).catch(oe=>{}));const O={};for(const oe in Nt)Object.defineProperty(O,oe,{get:()=>c.value[oe],enumerable:!0});w.provide(ms,U),w.provide(lf,cu(O)),w.provide(ga,c);const z=w.unmount;Cn.add(w),w.unmount=function(){Cn.delete(w),Cn.size<1&&(l=Nt,H&&H(),H=null,c.value=Nt,An=!1,le=!1),z()}}};function Pe(w){return w.reduce((U,O)=>U.then(()=>L(O)),Promise.resolve())}return Jr}function Pg(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const o=t.matched[a];o&&(e.matched.find(l=>Kn(l,o))?r.push(o):n.push(o));const c=e.matched[a];c&&(t.matched.find(l=>Kn(l,c))||i.push(c))}return[n,r,i]}function Og(){return Ye(ms)}/**
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
 */const ff=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Rg=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],o=e[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},df={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,o=a?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=s>>2,f=(s&3)<<4|o>>4;let d=(o&15)<<2|l>>6,m=l&63;c||(m=64,a||(d=64)),r.push(n[u],n[f],n[d],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ff(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Rg(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||o==null||l==null||f==null)throw new Ng;const d=s<<2|o>>4;if(r.push(d),l!==64){const m=o<<4&240|l>>2;if(r.push(m),f!==64){const _=l<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ng extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lg=function(e){const t=ff(e);return df.encodeByteArray(t,!0)},hf=function(e){return Lg(e).replace(/\./g,"")},pf=function(e){try{return df.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const Dg=()=>Mg().__FIREBASE_DEFAULTS__,Fg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Ug=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&pf(e[1]);return t&&JSON.parse(t)},ao=()=>{try{return Dg()||Fg()||Ug()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},$g=e=>{var t,n;return(n=(t=ao())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},mf=()=>{var e;return(e=ao())===null||e===void 0?void 0:e.config},gf=e=>{var t;return(t=ao())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */const qg="FirebaseError";class Zt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=qg,Object.setPrototypeOf(this,Zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jr.prototype.create)}}class jr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?Yg(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new Zt(i,o,r)}}function Yg(e,t){return e.replace(Gg,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Gg=/\{\$([^}]+)}/g;function Xg(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ui(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(Bc(s)&&Bc(a)){if(!Ui(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bc(e){return e!==null&&typeof e=="object"}/**
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
 */function Hr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function cr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function lr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Jg(e,t){const n=new Qg(e,t);return n.subscribe.bind(n)}class Qg{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Zg(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Ms),i.error===void 0&&(i.error=Ms),i.complete===void 0&&(i.complete=Ms);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zg(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Ms(){}/**
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
 */class ev{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Bg;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(nv(t))try{this.getOrInitializeService({instanceIdentifier:on})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=on){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=on){return this.instances.has(t)}getOptions(t=on){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tv(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=on){return this.component?this.component.multipleInstances?t:on:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tv(e){return e===on?void 0:e}function nv(e){return e.instantiationMode==="EAGER"}/**
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
 */var pe;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(pe||(pe={}));const iv={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},sv=pe.INFO,av={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},ov=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=av[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class vf{constructor(t){this.name=t,this._logLevel=sv,this._logHandler=ov,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in pe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?iv[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...t),this._logHandler(this,pe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...t),this._logHandler(this,pe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...t),this._logHandler(this,pe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...t),this._logHandler(this,pe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...t),this._logHandler(this,pe.ERROR,...t)}}const cv=(e,t)=>t.some(n=>e instanceof n);let jc,Hc;function lv(){return jc||(jc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uv(){return Hc||(Hc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bf=new WeakMap,va=new WeakMap,yf=new WeakMap,Ds=new WeakMap,oo=new WeakMap;function fv(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Kt(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&bf.set(n,e)}).catch(()=>{}),oo.set(t,e),t}function dv(e){if(va.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});va.set(e,t)}let ba={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return va.get(e);if(t==="objectStoreNames")return e.objectStoreNames||yf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function hv(e){ba=e(ba)}function pv(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Fs(this),t,...n);return yf.set(r,t.sort?t.sort():[t]),Kt(r)}:uv().includes(e)?function(...t){return e.apply(Fs(this),t),Kt(bf.get(this))}:function(...t){return Kt(e.apply(Fs(this),t))}}function mv(e){return typeof e=="function"?pv(e):(e instanceof IDBTransaction&&dv(e),cv(e,lv())?new Proxy(e,ba):e)}function Kt(e){if(e instanceof IDBRequest)return fv(e);if(Ds.has(e))return Ds.get(e);const t=mv(e);return t!==e&&(Ds.set(e,t),oo.set(t,e)),t}const Fs=e=>oo.get(e);function gv(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=Kt(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Kt(a.result),c.oldVersion,c.newVersion,Kt(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const vv=["get","getKey","getAll","getAllKeys","count"],bv=["put","add","delete","clear"],Us=new Map;function zc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Us.get(t))return Us.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=bv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vv.includes(n)))return;const s=async function(a,...o){const c=this.transaction(a,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),i&&c.done]))[0]};return Us.set(t,s),s}hv(e=>({...e,get:(t,n,r)=>zc(t,n)||e.get(t,n,r),has:(t,n)=>!!zc(t,n)||e.has(t,n)}));/**
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
 */class yv{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_v(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _v(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ya="@firebase/app",Wc="0.9.20";/**
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
 */const yn=new vf("@firebase/app"),wv="@firebase/app-compat",Ev="@firebase/analytics-compat",Iv="@firebase/analytics",xv="@firebase/app-check-compat",kv="@firebase/app-check",Av="@firebase/auth",Cv="@firebase/auth-compat",Tv="@firebase/database",Sv="@firebase/database-compat",Pv="@firebase/functions",Ov="@firebase/functions-compat",Rv="@firebase/installations",Nv="@firebase/installations-compat",Lv="@firebase/messaging",Mv="@firebase/messaging-compat",Dv="@firebase/performance",Fv="@firebase/performance-compat",Uv="@firebase/remote-config",$v="@firebase/remote-config-compat",Bv="@firebase/storage",jv="@firebase/storage-compat",Hv="@firebase/firestore",zv="@firebase/firestore-compat",Wv="firebase",Vv="10.5.0";/**
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
 */const $i=new Map,wa=new Map;function qv(e,t){try{e.container.addComponent(t)}catch(n){yn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Sr(e){const t=e.name;if(wa.has(t))return yn.debug(`There were multiple attempts to register component ${t}.`),!1;wa.set(t,e);for(const n of $i.values())qv(n,e);return!0}function _f(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Yv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},qt=new jr("app","Firebase",Yv);/**
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
 */class Gv{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
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
 */const zr=Vv;function wf(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:_a,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw qt.create("bad-app-name",{appName:String(i)});if(n||(n=mf()),!n)throw qt.create("no-options");const s=$i.get(i);if(s){if(Ui(n,s.options)&&Ui(r,s.config))return s;throw qt.create("duplicate-app",{appName:i})}const a=new rv(i);for(const c of wa.values())a.addComponent(c);const o=new Gv(n,r,a);return $i.set(i,o),o}function Xv(e=_a){const t=$i.get(e);if(!t&&e===_a&&mf())return wf();if(!t)throw qt.create("no-app",{appName:e});return t}function $n(e,t,n){var r;let i=(r=Kv[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${t}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),yn.warn(o.join(" "));return}Sr(new Yn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Jv="firebase-heartbeat-database",Qv=1,Pr="firebase-heartbeat-store";let $s=null;function Ef(){return $s||($s=gv(Jv,Qv,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Pr)}}}).catch(e=>{throw qt.create("idb-open",{originalErrorMessage:e.message})})),$s}async function Zv(e){try{return await(await Ef()).transaction(Pr).objectStore(Pr).get(If(e))}catch(t){if(t instanceof Zt)yn.warn(t.message);else{const n=qt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});yn.warn(n.message)}}}async function Vc(e,t){try{const r=(await Ef()).transaction(Pr,"readwrite");await r.objectStore(Pr).put(t,If(e)),await r.done}catch(n){if(n instanceof Zt)yn.warn(n.message);else{const r=qt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yn.warn(r.message)}}}function If(e){return`${e.name}!${e.options.appId}`}/**
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
 */const e0=1024,t0=30*24*60*60*1e3;class n0{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new i0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Kc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=t0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Kc(),{heartbeatsToSend:n,unsentEntries:r}=r0(this._heartbeatsCache.heartbeats),i=hf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Kc(){return new Date().toISOString().substring(0,10)}function r0(e,t=e0){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),qc(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class i0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vg()?Kg().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Zv(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function qc(e){return hf(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function s0(e){Sr(new Yn("platform-logger",t=>new yv(t),"PRIVATE")),Sr(new Yn("heartbeat",t=>new n0(t),"PRIVATE")),$n(ya,Wc,e),$n(ya,Wc,"esm2017"),$n("fire-js","")}s0("");var a0="firebase",o0="10.5.0";/**
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
 */$n(a0,o0,"app");const c0={apiKey:"AIzaSyD66i1ri0md2o2Ow4RVApaWIjSQdM79RRY",authDomain:"pomofocus-vue3.firebaseapp.com",projectId:"pomofocus-vue3",storageBucket:"pomofocus-vue3.appspot.com",messagingSenderId:"1089476388969",appId:"1:1089476388969:web:c4939d029dadf83304daf8",measurementId:"G-9CL6V1FX1Y"};wf(c0);function co(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Yc(e){return e!==void 0&&e.enterprise!==void 0}class l0{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function xf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u0=xf,kf=new jr("auth","Firebase",xf());/**
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
 */const Bi=new vf("@firebase/auth");function f0(e,...t){Bi.logLevel<=pe.WARN&&Bi.warn(`Auth (${zr}): ${e}`,...t)}function ki(e,...t){Bi.logLevel<=pe.ERROR&&Bi.error(`Auth (${zr}): ${e}`,...t)}/**
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
 */function Ge(e,...t){throw lo(e,...t)}function ut(e,...t){return lo(e,...t)}function Af(e,t,n){const r=Object.assign(Object.assign({},u0()),{[t]:n});return new jr("auth","Firebase",r).create(t,{appName:e.name})}function d0(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Ge(e,"argument-error"),Af(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function lo(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return kf.create(e,...t)}function X(e,t,...n){if(!e)throw lo(t,...n)}function bt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw ki(t),new Error(t)}function Et(e,t){e||bt(t)}/**
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
 */function Ea(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function h0(){return Gc()==="http:"||Gc()==="https:"}function Gc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */class Wr{constructor(t,n){this.shortDelay=t,this.longDelay=n,Et(n>t,"Short delay should be less than long delay!"),this.isMobile=jg()||zg()}get(){return p0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function uo(e,t){Et(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class Cf{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const v0=new Wr(3e4,6e4);function xn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function kn(e,t,n,r,i={}){return Tf(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const o=Hr(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),Cf.fetch()(Sf(e,e.config.apiHost,n,o),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function Tf(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},g0),t);try{const i=new b0(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw oi(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw oi(e,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw oi(e,"email-already-in-use",a);if(c==="USER_DISABLED")throw oi(e,"user-disabled",a);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Af(e,u,l);Ge(e,u)}}catch(i){if(i instanceof Zt)throw i;Ge(e,"network-request-failed",{message:String(i)})}}async function Vr(e,t,n,r,i={}){const s=await kn(e,t,n,r,i);return"mfaPendingCredential"in s&&Ge(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Sf(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?uo(e.config,i):`${e.config.apiScheme}://${i}`}class b0{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ut(this.auth,"network-request-failed")),v0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function oi(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ut(e,t,r);return i.customData._tokenResponse=n,i}async function y0(e,t){return kn(e,"GET","/v2/recaptchaConfig",xn(e,t))}/**
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
 */async function _0(e,t){return kn(e,"POST","/v1/accounts:delete",t)}async function w0(e,t){return kn(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function vr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function E0(e,t=!1){const n=Ct(e),r=await n.getIdToken(t),i=fo(r);X(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:vr(Bs(i.auth_time)),issuedAtTime:vr(Bs(i.iat)),expirationTime:vr(Bs(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bs(e){return Number(e)*1e3}function fo(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return ki("JWT malformed, contained fewer than 3 sections"),null;try{const i=pf(n);return i?JSON.parse(i):(ki("Failed to decode base64 JWT payload"),null)}catch(i){return ki("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function I0(e){const t=fo(e);return X(t,"internal-error"),X(typeof t.exp<"u","internal-error"),X(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function Or(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Zt&&x0(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function x0({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class Pf{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vr(this.lastLoginAt),this.creationTime=vr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ji(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Or(e,w0(n,{idToken:r}));X(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?T0(s.providerUserInfo):[],o=C0(e.providerData,a),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Pf(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function A0(e){const t=Ct(e);await ji(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function C0(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function T0(e){return e.map(t=>{var{providerId:n}=t,r=co(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function S0(e,t){const n=await Tf(e,{},async()=>{const r=Hr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=Sf(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Cf.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Rr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){X(t.idToken,"internal-error"),X(typeof t.idToken<"u","internal-error"),X(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):I0(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return X(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await S0(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Rr;return r&&(X(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(X(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(X(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Rr,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
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
 */function Lt(e,t){X(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class bn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=co(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new k0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Pf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Or(this,this.stsTokenManager.getToken(this.auth,t));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return E0(this,t)}reload(){return A0(this)}_assign(t){this!==t&&(X(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new bn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await ji(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Or(this,_0(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,a,o,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(a=n.photoURL)!==null&&a!==void 0?a:void 0,I=(o=n.tenantId)!==null&&o!==void 0?o:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,v=(l=n.createdAt)!==null&&l!==void 0?l:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:A,isAnonymous:D,providerData:G,stsTokenManager:Y}=n;X(P&&Y,t,"internal-error");const T=Rr.fromJSON(this.name,Y);X(typeof P=="string",t,"internal-error"),Lt(f,t.name),Lt(d,t.name),X(typeof A=="boolean",t,"internal-error"),X(typeof D=="boolean",t,"internal-error"),Lt(m,t.name),Lt(_,t.name),Lt(I,t.name),Lt(N,t.name),Lt(v,t.name),Lt(y,t.name);const L=new bn({uid:P,auth:t,email:d,emailVerified:A,displayName:f,isAnonymous:D,photoURL:_,phoneNumber:m,tenantId:I,stsTokenManager:T,createdAt:v,lastLoginAt:y});return G&&Array.isArray(G)&&(L.providerData=G.map(q=>Object.assign({},q))),N&&(L._redirectEventId=N),L}static async _fromIdTokenResponse(t,n,r=!1){const i=new Rr;i.updateFromServerResponse(n);const s=new bn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await ji(s),s}}/**
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
 */const Xc=new Map;function yt(e){Et(e instanceof Function,"Expected a class definition");let t=Xc.get(e);return t?(Et(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Xc.set(e,t),t)}/**
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
 */class Of{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Of.type="NONE";const Jc=Of;/**
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
 */function Ai(e,t,n){return`firebase:${e}:${t}:${n}`}class Bn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ai(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ai("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?bn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Bn(yt(Jc),t,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||yt(Jc);const a=Ai(r,t.config.apiKey,t.name);let o=null;for(const l of n)try{const u=await l._get(a);if(u){const f=bn._fromJSON(t,u);l!==s&&(o=f),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Bn(s,t,r):(s=c[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(a)}catch{}})),new Bn(s,t,r))}}/**
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
 */function Qc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Lf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Rf(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Df(t))return"Blackberry";if(Ff(t))return"Webos";if(ho(t))return"Safari";if((t.includes("chrome/")||Nf(t))&&!t.includes("edge/"))return"Chrome";if(Mf(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rf(e=Re()){return/firefox\//i.test(e)}function ho(e=Re()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Nf(e=Re()){return/crios\//i.test(e)}function Lf(e=Re()){return/iemobile/i.test(e)}function Mf(e=Re()){return/android/i.test(e)}function Df(e=Re()){return/blackberry/i.test(e)}function Ff(e=Re()){return/webos/i.test(e)}function gs(e=Re()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function P0(e=Re()){var t;return gs(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function O0(){return Wg()&&document.documentMode===10}function Uf(e=Re()){return gs(e)||Mf(e)||Ff(e)||Df(e)||/windows phone/i.test(e)||Lf(e)}function R0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function $f(e,t=[]){let n;switch(e){case"Browser":n=Qc(Re());break;case"Worker":n=`${Qc(Re())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${zr}/${r}`}/**
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
 */class N0{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,o)=>{try{const c=t(s);a(c)}catch(c){o(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function L0(e,t={}){return kn(e,"GET","/v2/passwordPolicy",xn(e,t))}/**
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
 */const M0=6;class D0{constructor(t){var n,r,i,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:M0,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,a,o;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(o=c.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class F0{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zc(this),this.idTokenSubscription=new Zc(this),this.beforeStateQueue=new N0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=yt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!a||a===o)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await ji(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=m0()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ct(t):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&X(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await L0(this),n=new D0(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new jr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&yt(t)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await Bn.create(this,[yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=t.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=$f(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&f0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function en(e){return Ct(e)}class Zc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Jg(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function U0(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Bf(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=ut("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",U0().appendChild(r)})}function $0(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const B0="https://www.google.com/recaptcha/enterprise.js?render=",j0="recaptcha-enterprise",H0="NO_RECAPTCHA";class z0{constructor(t){this.type=j0,this.auth=en(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{y0(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const l=new l0(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,a(l.siteKey)}}).catch(c=>{o(c)})})}function i(s,a,o){const c=window.grecaptcha;Yc(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:t}).then(l=>{a(l)}).catch(()=>{a(H0)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(o=>{if(!n&&Yc(window.grecaptcha))i(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}Bf(B0+o).then(()=>{i(o,s,a)}).catch(c=>{a(c)})}}).catch(o=>{a(o)})})}}async function Hi(e,t,n,r=!1){const i=new z0(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}/**
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
 */function W0(e,t){const n=_f(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ui(s,t??{}))return i;Ge(i,"already-initialized")}return n.initialize({options:t})}function V0(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function K0(e,t,n){const r=en(e);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=jf(t),{host:a,port:o}=q0(t),c=o===null?"":`:${o}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Y0()}function jf(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function q0(e){const t=jf(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:el(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:el(a)}}}function el(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Y0(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class po{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return bt("not implemented")}_getIdTokenResponse(t){return bt("not implemented")}_linkToIdToken(t,n){return bt("not implemented")}_getReauthenticationResolver(t){return bt("not implemented")}}async function G0(e,t){return kn(e,"POST","/v1/accounts:update",t)}/**
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
 */async function js(e,t){return Vr(e,"POST","/v1/accounts:signInWithPassword",xn(e,t))}/**
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
 */async function X0(e,t){return Vr(e,"POST","/v1/accounts:signInWithEmailLink",xn(e,t))}async function J0(e,t){return Vr(e,"POST","/v1/accounts:signInWithEmailLink",xn(e,t))}/**
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
 */class Nr extends po{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Nr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Nr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Hi(t,r,"signInWithPassword");return js(t,i)}else return js(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Hi(t,r,"signInWithPassword");return js(t,s)}else return Promise.reject(i)});case"emailLink":return X0(t,{email:this._email,oobCode:this._password});default:Ge(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return G0(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return J0(t,{idToken:n,email:this._email,oobCode:this._password});default:Ge(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function jn(e,t){return Vr(e,"POST","/v1/accounts:signInWithIdp",xn(e,t))}/**
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
 */const Q0="http://localhost";class _n extends po{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new _n(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ge("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=co(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new _n(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return jn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,jn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,jn(t,n)}buildRequest(){const t={requestUri:Q0,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Hr(n)}return t}}/**
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
 */function Z0(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function eb(e){const t=cr(lr(e)).link,n=t?cr(lr(t)).deep_link_id:null,r=cr(lr(e)).deep_link_id;return(r?cr(lr(r)).link:null)||r||n||t||e}class mo{constructor(t){var n,r,i,s,a,o;const c=cr(lr(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Z0((i=c.mode)!==null&&i!==void 0?i:null);X(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=c.tenantId)!==null&&o!==void 0?o:null}static parseLink(t){const n=eb(t);try{return new mo(n)}catch{return null}}}/**
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
 */class Zn{constructor(){this.providerId=Zn.PROVIDER_ID}static credential(t,n){return Nr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=mo.parseLink(n);return X(r,"argument-error"),Nr._fromEmailAndCode(t,r.code,r.tenantId)}}Zn.PROVIDER_ID="password";Zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class go{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Kr extends go{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Bt extends Kr{constructor(){super("facebook.com")}static credential(t){return _n._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Bt.credential(t.oauthAccessToken)}catch{return null}}}Bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bt.PROVIDER_ID="facebook.com";/**
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
 */class gt extends Kr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return _n._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return gt.credentialFromTaggedObject(t)}static credentialFromError(t){return gt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return gt.credential(n,r)}catch{return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com";gt.PROVIDER_ID="google.com";/**
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
 */class jt extends Kr{constructor(){super("github.com")}static credential(t){return _n._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return jt.credential(t.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
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
 */class Ht extends Kr{constructor(){super("twitter.com")}static credential(t,n){return _n._fromParams({providerId:Ht.PROVIDER_ID,signInMethod:Ht.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ht.credentialFromTaggedObject(t)}static credentialFromError(t){return Ht.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ht.credential(n,r)}catch{return null}}}Ht.TWITTER_SIGN_IN_METHOD="twitter.com";Ht.PROVIDER_ID="twitter.com";/**
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
 */async function Hs(e,t){return Vr(e,"POST","/v1/accounts:signUp",xn(e,t))}/**
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
 */class wn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await bn._fromIdTokenResponse(t,r,i),a=tl(r);return new wn({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=tl(r);return new wn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function tl(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class zi extends Zt{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,zi.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new zi(t,n,r,i)}}function Hf(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zi._fromErrorAndOperation(e,s,t,r):s})}async function tb(e,t,n=!1){const r=await Or(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return wn._forOperation(e,"link",r)}/**
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
 */async function nb(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Or(e,Hf(r,i,t,e),n);X(s.idToken,r,"internal-error");const a=fo(s.idToken);X(a,r,"internal-error");const{sub:o}=a;return X(e.uid===o,r,"user-mismatch"),wn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ge(r,"user-mismatch"),s}}/**
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
 */async function zf(e,t,n=!1){const r="signIn",i=await Hf(e,r,t),s=await wn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function rb(e,t){return zf(en(e),t)}/**
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
 */async function Wf(e){const t=en(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function ib(e,t,n){var r;const i=en(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let a;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Hi(i,s,"signUpPassword");a=Hs(i,l)}else a=Hs(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Hi(i,s,"signUpPassword");return Hs(i,u)}throw l});const o=await a.catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Wf(e),l}),c=await wn._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}function sb(e,t,n){return rb(Ct(e),Zn.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Wf(e),r})}function ab(e,t,n,r){return Ct(e).onIdTokenChanged(t,n,r)}function ob(e,t,n){return Ct(e).beforeAuthStateChanged(t,n)}function Vf(e,t,n,r){return Ct(e).onAuthStateChanged(t,n,r)}function cb(e){return Ct(e).signOut()}const Wi="__sak";/**
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
 */class Kf{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wi,"1"),this.storage.removeItem(Wi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function lb(){const e=Re();return ho(e)||gs(e)}const ub=1e3,fb=10;class qf extends Kf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=lb()&&R0(),this.fallbackToPolling=Uf(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);O0()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,fb):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},ub)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}qf.type="LOCAL";const db=qf;/**
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
 */class Yf extends Kf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Yf.type="SESSION";const Gf=Yf;/**
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
 */class vs{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new vs(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async l=>l(n.origin,s)),c=await hb(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vs.receivers=[];/**
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
 */function vo(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class pb{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,c)=>{const l=vo("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Xf(){return typeof ft().WorkerGlobalScope<"u"&&typeof ft().importScripts=="function"}async function gb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vb(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function bb(){return Xf()?self:null}/**
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
 */const Jf="firebaseLocalStorageDb",yb=1,Vi="firebaseLocalStorage",Qf="fbase_key";class qr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bs(e,t){return e.transaction([Vi],t?"readwrite":"readonly").objectStore(Vi)}function _b(){const e=indexedDB.deleteDatabase(Jf);return new qr(e).toPromise()}function Ia(){const e=indexedDB.open(Jf,yb);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Vi,{keyPath:Qf})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Vi)?t(r):(r.close(),await _b(),t(await Ia()))})})}async function nl(e,t,n){const r=bs(e,!0).put({[Qf]:t,value:n});return new qr(r).toPromise()}async function wb(e,t){const n=bs(e,!1).get(t),r=await new qr(n).toPromise();return r===void 0?null:r.value}function rl(e,t){const n=bs(e,!0).delete(t);return new qr(n).toPromise()}const Eb=800,Ib=3;class Zf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ia(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Ib)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vs._getInstance(bb()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await gb(),!this.activeServiceWorker)return;this.sender=new pb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||vb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ia();return await nl(t,Wi,"1"),await rl(t,Wi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>nl(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>wb(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>rl(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=bs(i,!1).getAll();return new qr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Eb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zf.type="LOCAL";const xb=Zf;new Wr(3e4,6e4);/**
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
 */function ed(e,t){return t?yt(t):(X(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class bo extends po{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return jn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return jn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return jn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function kb(e){return zf(e.auth,new bo(e),e.bypassAuthState)}function Ab(e){const{auth:t,user:n}=e;return X(n,t,"internal-error"),nb(n,new bo(e),e.bypassAuthState)}async function Cb(e){const{auth:t,user:n}=e;return X(n,t,"internal-error"),tb(n,new bo(e),e.bypassAuthState)}/**
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
 */class td{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=t;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return kb;case"linkViaPopup":case"linkViaRedirect":return Cb;case"reauthViaPopup":case"reauthViaRedirect":return Ab;default:Ge(this.auth,"internal-error")}}resolve(t){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Tb=new Wr(2e3,1e4);async function Sb(e,t,n){const r=en(e);d0(e,t,go);const i=ed(r,n);return new dn(r,"signInViaPopup",t,i).executeNotNull()}class dn extends td{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,dn.currentPopupAction&&dn.currentPopupAction.cancel(),dn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return X(t,this.auth,"internal-error"),t}async onExecution(){Et(this.filter.length===1,"Popup operations only handle one event");const t=vo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Tb.get())};t()}}dn.currentPopupAction=null;/**
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
 */const Pb="pendingRedirect",Ci=new Map;class Ob extends td{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Ci.get(this.auth._key());if(!t){try{const r=await Rb(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ci.set(this.auth._key(),t)}return this.bypassAuthState||Ci.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rb(e,t){const n=Mb(t),r=Lb(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Nb(e,t){Ci.set(e._key(),t)}function Lb(e){return yt(e._redirectPersistence)}function Mb(e){return Ai(Pb,e.config.apiKey,e.name)}async function Db(e,t,n=!1){const r=en(e),i=ed(r,t),a=await new Ob(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const Fb=10*60*1e3;class Ub{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!$b(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!nd(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ut(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Fb&&this.cachedEventUids.clear(),this.cachedEventUids.has(il(t))}saveEventToCache(t){this.cachedEventUids.add(il(t)),this.lastProcessedEventTime=Date.now()}}function il(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function nd({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function $b(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nd(e);default:return!1}}/**
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
 */async function Bb(e,t={}){return kn(e,"GET","/v1/projects",t)}/**
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
 */const Vb=new Wr(3e4,6e4);function sl(){const e=ft().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Kb(e){return new Promise((t,n)=>{var r,i,s;function a(){sl(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{sl(),n(ut(e,"network-request-failed"))},timeout:Vb.get()})}if(!((i=(r=ft().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=ft().gapi)===null||s===void 0)&&s.load)a();else{const o=$0("iframefcb");return ft()[o]=()=>{gapi.load?a():n(ut(e,"network-request-failed"))},Bf(`https://apis.google.com/js/api.js?onload=${o}`).catch(c=>n(c))}}).catch(t=>{throw Ti=null,t})}let Ti=null;function qb(e){return Ti=Ti||Kb(e),Ti}/**
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
 */const Yb=new Wr(5e3,15e3),Gb="__/auth/iframe",Xb="emulator/auth/iframe",Jb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zb(e){const t=e.config;X(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?uo(t,Xb):`https://${e.config.authDomain}/${Gb}`,r={apiKey:t.apiKey,appName:e.name,v:zr},i=Qb.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Hr(r).slice(1)}`}async function ey(e){const t=await qb(e),n=ft().gapi;return X(n,e,"internal-error"),t.open({where:document.body,url:Zb(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=ut(e,"network-request-failed"),o=ft().setTimeout(()=>{s(a)},Yb.get());function c(){ft().clearTimeout(o),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
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
 */const ty={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ny=500,ry=600,iy="_blank",sy="http://localhost";class al{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ay(e,t,n,r=ny,i=ry){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c=Object.assign(Object.assign({},ty),{width:r.toString(),height:i.toString(),top:s,left:a}),l=Re().toLowerCase();n&&(o=Nf(l)?iy:n),Rf(l)&&(t=t||sy,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[m,_])=>`${d}${m}=${_},`,"");if(P0(l)&&o!=="_self")return oy(t||"",o),new al(null);const f=window.open(t||"",o,u);X(f,e,"popup-blocked");try{f.focus()}catch{}return new al(f)}function oy(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const cy="__/auth/handler",ly="emulator/auth/handler",uy=encodeURIComponent("fac");async function ol(e,t,n,r,i,s){X(e.config.authDomain,e,"auth-domain-config-required"),X(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:zr,eventId:i};if(t instanceof go){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",Xg(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries(s||{}))a[u]=f}if(t instanceof Kr){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(a.scopes=u.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const u of Object.keys(o))o[u]===void 0&&delete o[u];const c=await e._getAppCheckToken(),l=c?`#${uy}=${encodeURIComponent(c)}`:"";return`${fy(e)}?${Hr(o).slice(1)}${l}`}function fy({config:e}){return e.emulator?uo(e,ly):`https://${e.authDomain}/${cy}`}/**
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
 */const zs="webStorageSupport";class dy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gf,this._completeRedirectFn=Db,this._overrideRedirectResult=Nb}async _openPopup(t,n,r,i){var s;Et((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await ol(t,n,r,Ea(),i);return ay(t,a,vo())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await ol(t,n,r,Ea(),i);return mb(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Et(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await ey(t),r=new Ub(t);return n.register("authEvent",i=>(X(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(zs,{type:zs},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[zs];a!==void 0&&n(!!a),Ge(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zb(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Uf()||ho()||gs()}}const hy=dy;var cl="@firebase/auth",ll="1.3.0";/**
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
 */class py{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function my(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gy(e){Sr(new Yn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;X(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$f(e)},l=new F0(r,i,s,c);return V0(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Sr(new Yn("auth-internal",t=>{const n=en(t.getProvider("auth").getImmediate());return(r=>new py(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(cl,ll,my(e)),$n(cl,ll,"esm2017")}/**
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
 */const vy=5*60,by=gf("authIdTokenMaxAge")||vy;let ul=null;const yy=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>by)return;const i=n==null?void 0:n.token;ul!==i&&(ul=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function yo(e=Xv()){const t=_f(e,"auth");if(t.isInitialized())return t.getImmediate();const n=W0(e,{popupRedirectResolver:hy,persistence:[xb,db,Gf]}),r=gf("authTokenSyncURL");if(r){const s=yy(r);ob(n,s,()=>s(n.currentUser)),ab(n,a=>s(a))}const i=$g("auth");return i&&K0(n,`http://${i}`),n}gy("Browser");const _y=se(),Ws=se(!1),fl=se(""),dl=se(""),hl=se(3e3);function ys(){function e(r,i,s){dl.value=r,fl.value=i,hl.value=s,t()}function t(){Ws.value=!0}function n(){Ws.value=!1}return{component:_y,show:Ws,type:fl,message:dl,time:hl,showToast:t,closeToast:n,msgHandler:e}}const wy={class:"box relative overflow-hidden h-[350px] bg-custom-gray rounded-[8px] mt-10 flex justify-center items-center flex-wrap"},Ey={class:"form absolute top-[4px] right-[4px] bottom-[4px] left-[4px] z-[2] bg-gray-800 flex-col flex overflow-hidden"},Iy={class:"text-9xl w-full text-center mt-[40px]"},xy={class:"relative block w-full h-full"},ky=rt({__name:"NormalTimer",props:{isActive:{type:Boolean},mode:{},remainingTime:{}},emits:["handleTimeCountDown"],setup(e,{emit:t}){const n=()=>{t("handleTimeCountDown",e.isActive,e.mode)};return(r,i)=>(fe(),Le("div",wy,[j("div",Ey,[j("p",Iy,zn(r.remainingTime),1),j("button",{onClick:n,class:"btn w-[100px] relative inline-block text-light text-base font-medium border-none py-[10xp] px-[25px] m-auto leading-10 shadow-activeButton transition-all duration-300 ease-in hover:bg-transparent"},[j("span",xy,zn(r.isActive?"Pause":"Start"),1)])])]))}});const tn=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},Ay=tn(ky,[["__scopeId","data-v-ab9271d4"]]);var rd=(e=>(e.pomodoro="pomodoro",e.longbreak="longbreak",e.shortbreak="shortbreak",e))(rd||{});const id=Xu("timer",()=>{const e=se(rd.pomodoro),t=se(!1);function n(){t.value=!t.value}function r(){t.value=!1}function i(){t.value=!0}return{mode:e,isActive:t,changeActiveStatus:n,onStop:r,onStart:i}});function ci(e){if(e<0)return"00:00";const t=Math.floor(e/(1e3*60*60)),n=Math.floor(e%(1e3*60*60)/(1e3*60));if(t>0||n>=60)return"59:59";const r=Math.floor(e%(1e3*60)/1e3);return`${n<10?"0"+n:n}:${r<10?"0"+r:r}`}function sd(){return{requestPermission:()=>{if(!("Notification"in window)){console.log("This browser does not support notification");return}Notification.permission!=="granted"&&Notification.permission!=="denied"&&Notification.requestPermission().then(n=>{console.log(n)})},sendNotification:(n,r)=>{Notification.permission==="granted"&&new Notification(n,r)}}}const Ke=se(25*60*1e3),ir=se("25:00");let li=null;const Cy=sd();function Ty(){const e=id(),{isActive:t,...n}=io(e),r=xe(()=>Ke.value);function i(){li&&(clearInterval(li),li=null)}function s(a){switch(Ch(a)){case"Pomodoro":Ke.value=25*60*1e3,ir.value=ci(Ke.value);break;case"Long Break":Ke.value=15*60*1e3,ir.value=ci(Ke.value);break;case"Short Break":Ke.value=5*60*1e3,ir.value=ci(Ke.value);break;default:console.log("未定義的狀態！");break}}return gn(t,()=>{i(),t.value?li=setInterval(()=>{Ke.value=r.value-1e3,ir.value=Ke.value<=0?"Time up":ci(Ke.value),Ke.value<=0&&(Cy.sendNotification("Pomofocus",{body:"Time up!"}),i(),e.changeActiveStatus())},1e3):(Ke.value=r.value,i())}),os(()=>{i()}),{remainingTime:ir,switchMode:s}}const Sy={class:"flex w-full h-full"},Py={class:"w-[600px] h-[350px] bg-black m-auto rounded-[8px]"},Oy={class:"w-auto flex space-x-3 text-center text-xl cursor-pointer rounded-default justify-center items-center gap-6 menu"},Ry=["onClick"],Ny=rt({__name:"CountdownTimer",setup(e){const t=id(),{isActive:n,mode:r,...i}=io(t),{switchMode:s,remainingTime:a}=Ty(),o=se("Pomodoro"),c=se([{id:1,title:"Pomodoro",time:"25:00"},{id:2,title:"Short Break",time:"05:00"},{id:3,title:"Long Break",time:"15:00"}]),l=f=>{o.value=f,t.onStop(),s(f)},u=()=>{t.changeActiveStatus()};return(f,d)=>(fe(),Le("section",Sy,[j("article",Py,[j("ul",Oy,[(fe(!0),Le(He,null,Ru(c.value,m=>(fe(),Le("li",{onClick:_=>l(m.title),class:Z([{"tab-active":o.value===m.title},"block item h-auto hover:text-cyan-500 border-transparent border-b-2 hover:border-b-cyan-500 hover:transition duration-500"]),key:m.id},zn(m.title),11,Ry))),128))]),Ee(Ay,{isActive:_e(n),mode:_e(r),remainingTime:_e(a),onHandleTimeCountDown:u,class:"overflow-hidden"},null,8,["isActive","mode","remainingTime"])])]))}});const Ly=tn(Ny,[["__scopeId","data-v-9e8afdef"]]),My={class:"w-full"},Dy=rt({__name:"HomeView",setup(e){return(t,n)=>(fe(),Le("main",My,[Ee(Ly)]))}});function pl(e){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)}function Fy(e){return e.length>=6}const Uy={class:"flex justify-center items-center"},$y={class:"form-box login absolute top-0 w-[50%] h-[100%] flex flex-col justify-center left-0 pt-0 pr-[60px] pb-0 pl-[40px] duration-700"},By=["onSubmit"],jy={class:Z(["info-text","login","absolute","top-0","w-[50%]","h-full","right-0","flex","flex-col","justify-center","text-right","pt-0","pr-[40px]","pb-[60px]","pl-[150px]"])},Hy=["onSubmit"],zy=rt({__name:"LoginPage",setup(e){const t=ad(),n=ys(),r=se(!1),i=se(!1),s=se(!1),a=se(!1),o=se(!1),c=se(""),l=se(""),u=se(""),f=se(""),d=xe(()=>f.value.length>=6),m=xe(()=>pl(u.value)),_=se(!1),I=()=>{r.value=!0},N=R=>{const H=R.target;r.value=!!H.value},v=()=>{i.value=!0},y=R=>{const H=R.target;i.value=!!H.value},P=()=>{s.value=!0,_.value=!0},A=R=>{const H=R.target;s.value=!!H.value,_.value=!1},D=()=>{a.value=!1,o.value=!0},G=()=>{o.value=!1},Y=()=>{t.signInWithGoogle()},T=()=>{if(!d.value||!m.value){n.msgHandler("Invaild email or password.","failure",1500);return}t.registerWithEmailAndPassword(u.value,f.value)},L=()=>new Promise(R=>{const H=u.value||f.value;R(!!H)}),q=()=>new Promise(R=>{const H=c.value||l.value;R(!!H)}),re=()=>{if(!c.value||!l.value){n.msgHandler("Invalid email or password!","failure",1e3);return}t.logInWithEmailAndPassword(c.value,l.value)};return Eg(async(R,H,de)=>{if(yo().currentUser){de();return}const he=await L(),ee=await q();if((he||ee)&&!window.confirm("Do you really want to leave? You have unsaved changes!")){de(!1);return}de()}),(R,H)=>{const de=Mi("font-awesome-icon");return fe(),Le("main",Uy,[j("div",{class:Z([a.value?"active translate-x-0 opacity-100 filter blur-0":"","wrapper relative w-[750px] h-[450px] bg-transparent border-2 border-primary rounded shadow-custom-cyan overflow-hidden"])},[j("span",{class:Z([o.value?"!rotate-[0deg] !skew-y-[0deg] delay-500":"!delay-1600","duration-1000 ease-linear bg-animate absolute top-[-4px] right-0 w-[850px] h-[600px] bg-gradient-to-r from-[#081b29] to-[#0ef] rotate-[10deg] skew-y-[40deg] origin-bottom-right border-b-[3px] border-primary"])},null,2),j("span",{class:Z([o.value?"!-rotate-[11deg] !-skew-y-[41deg] delay-1000":"!delay-500","duration-1000 ease-linear bg-animate2 absolute top-full left-[250px] w-[850px] h-[700px] bg-black rotate-[11deg] skew-y-[41deg] origin-bottom-left border-t-[3px] border-primary"])},null,2),j("div",$y,[j("h2",{class:Z(["text-3xl text-white text-center ease-linear duration-700",o.value?"animation ease-linear duration-700 -translate-x-[120%] opacity-0 filter blur-[10px] delay-0":"!delay-2100"])},"Login",2),j("form",{onSubmit:wc(re,["prevent"])},[j("div",{class:Z([o.value?"animation ease-linear duration-700 -translate-x-[120%] delay-100 opacity-0 filter blur-[10px]":"!delay-2200","ease-linear duration-700 input-box relative w-full h-[50px] my-[25px] mx-0"])},[ii(j("input",{type:"email",required:"",class:Z(["w-full","h-full","bg-transparent","outline-none","border-b-2","border-b-white","duration-500","focus:border-b-primary","text-white","p-[10px]"]),onFocus:I,onBlur:N,"onUpdate:modelValue":H[0]||(H[0]=he=>c.value=he)},null,544),[[ai,c.value]]),j("label",{class:Z(["absolute top-[50%] left-0 text-base text-white transform -translate-y-1/2 pointer-events-none duration-500",r.value?"!-top-[5px] !text-primary":""])}," Email ",2)],2),j("div",{class:Z([o.value?"animation ease-linear duration-700 -translate-x-[120%] delay-200 opacity-0 filter blur-[10px]":"!delay-2300","ease-linear duration-700 input-box relative w-full h-[50px] my-[25px] mx-0"])},[ii(j("input",{type:"password",required:"",class:Z(["w-full","h-full","bg-transparent","outline-none","border-b-2","border-b-white","duration-500","focus:border-b-primary","text-white","p-[10px]"]),onFocus:v,onBlur:y,"onUpdate:modelValue":H[1]||(H[1]=he=>l.value=he)},null,544),[[ai,l.value]]),j("label",{class:Z(["absolute top-[50%] left-0 text-base text-white transform -translate-y-1/2 pointer-events-none duration-500",i.value?"!-top-[5px] !text-primary":""])}," Password ",2)],2),j("button",{type:"submit",class:Z([o.value?"animation ease-linear duration-700 -translate-x-[120%] delay-300 opacity-0 filter blur-[10px]":"!delay-2400","ease-linear duration-700 btn w-full h-[45px] border border-accent rounded-[40px] cursor-pointer text-base text-white font-semibold shadow-accent"])}," Login ",2),j("hr",{class:Z([o.value?"animation ease-linear duration-700 -translate-x-[120%] delay-300 opacity-0 filter blur-[10px]":"!delay-2400","ease-linear duration-700 border-dashed mt-5 filter-[10px] text-gray-500"])},null,2),j("button",{onClick:Y,class:Z([o.value?"animation ease-linear duration-700 -translate-x-[120%] delay-300 opacity-0 filter blur-[10px]":"!delay-2400","ease-linear duration-700 mt-5 border-2 border-white outline-none rounded-[40px] w-full h-[40px] hover:shadow-neon"])},[Ee(de,{icon:["fab","google"],class:"mr-4"}),zt(" Login With Google ")],2),j("div",{class:Z([o.value?"animation ease-linear duration-700 -translate-x-[120%] delay-550 opacity-0 filter blur-[10px]":"!delay-2500","ease-linear duration-700 logreg-link text-[14.5px] text-white text-center mt-5"])},[j("p",null,[zt(" Don't have an account? "),j("button",{type:"button",onClick:D,class:Z(["ml-3","register-link","text-primary","decoration-[none]","font-semibold","hover:underline","cursor-pointer"])}," Sign Up ")])],2)],40,By)]),j("div",jy,[j("h2",{class:Z([o.value?"animation ease-linear duration-700 translate-x-[120%] delay-550 opacity-0 filter blur-[10px]":"!delay-2000","duration-700","ease-linear","text-[36px]","text-white","leading-snug","uppercase"])}," Welcome Back! ",2),j("p",{class:Z([o.value?"animation ease-linear duration-700 translate-x-[120%] delay-550 opacity-0 filter blur-[10px]":"!delay-2100","duration-700","ease-linear","text-[16px]","text-white"])}," You can login using your email or a third-party service. ",2)]),j("div",{class:Z([o.value?"!translate-x-0":"",o.value?"!opacity-100":"",o.value?"!filter":"",o.value?"!blur-0":"",o.value?"!pointer-events-auto":"","form-box","register","absolute","top-0","w-[50%]","h-[100%]","flex","flex-col","justify-center","right-0","pt-0","pr-[40px]","pb-0","pl-[60px]","translate-x-[120%]","opacity-0","filter","blur-[10px]","duration-700","pointer-events-none"])},[j("h2",{class:Z([o.value?"!translate-x-0":"",o.value?"!opacity-100":"",o.value?"!filter":"",o.value?"!blur-0":"",o.value?"delay-1700":"!delay-0","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","text-3xl","text-white","text-center"])}," Sign Up ",2),j("form",{onSubmit:wc(T,["prevent"])},[j("div",{class:Z([o.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-1900":"!delay-200","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","relative","w-full","h-[50px]","my-[20px]","mx-0"])},[ii(j("input",{type:"email",required:"",class:Z(["w-full","h-full","bg-transparent","outline-none","border-b-2","border-b-white","duration-500","focus:border-b-primary","text-white","p-[10px]"]),onFocus:P,onBlur:A,"onUpdate:modelValue":H[2]||(H[2]=he=>u.value=he),onInput:H[3]||(H[3]=he=>_e(pl)(u.value))},null,544),[[ai,u.value]]),j("label",{class:Z(["absolute","top-[50%]","left-0","text-base","text-white","transform","-translate-y-1/2","pointer-events-none","duration-500",s.value?"!-top-[5px] !text-primary":""])}," Email ",2)],2),j("span",{class:Z([m.value?"text-white":"text-gray-400",o.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-1900":"","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","block","mb-4"])},[m.value?(fe(),ze(de,{key:0,icon:["far","circle-check"],class:"text-green-500 mr-1"})):(fe(),ze(de,{key:1,icon:["far","circle-xmark"],class:"text-gray-400 mr-1"})),j("span",{class:Z([m.value?"text-white":"text-gray-400","text-xs"])},"Valid email format.",2)],2),j("div",{class:Z([o.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-2000":"!delay-300","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","input-box","relative","w-full","h-[50px]","my-[20px]","mx-0","mb-4"])},[ii(j("input",{type:"password",required:"",class:Z(["w-full","h-full","bg-transparent","outline-none","border-b-2","border-b-white","duration-500","focus:border-b-primary","text-white","p-[10px]"]),onFocus:v,onBlur:y,"onUpdate:modelValue":H[4]||(H[4]=he=>f.value=he),onInput:H[5]||(H[5]=he=>_e(Fy)(f.value))},null,544),[[ai,f.value]]),j("label",{class:Z(["absolute","top-[50%]","left-0","text-base","text-white","transform","-translate-y-1/2","pointer-events-none","duration-500",i.value?"!-top-[5px] !text-primary":""])}," Password ",2)],2),j("span",{class:Z([d.value?"text-white":"text-gray-400",o.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-2000":"!delay-300","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","mt-4","block"])},[d.value?(fe(),ze(de,{key:0,icon:["far","circle-check"],class:"text-green-400 mr-1"})):(fe(),ze(de,{key:1,icon:["far","circle-xmark"],class:"text-gray-400 mr-1"})),j("span",{class:Z([d.value?"text-white":"text-gray-400","text-xs"])},"Password should be at least 6 characters.",2)],2),j("button",{type:"submit",class:Z([o.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-2100":"!delay-400","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","btn","relative","w-full","h-[45px]","border-2","border-accent","outline-none","rounded-[40px]","cursor-pointer","text-base","text-white","font-semibold","shadow-accent","after:content","after:top-0","after:left-0","after:right-0","after:bottom-0","after:bg-primary","after:shadow-neon","after:opacity-0","hover:after:!opacity-100","mt-10"])}," Sign Up ",2),j("div",{class:Z([o.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-2200":"!delay-500","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","logreg-link","text-[14.5px]","text-white","text-center","mt-5"])},[j("p",null,[zt(" Already have an account? "),j("button",{type:"button",onClick:G,class:"ml-3 register-link text-primary decoration-[none font-semibold] hover:underline cursor-pointer"},"Login")])],2)],40,Hy)],2),j("div",{class:Z([o.value?"!translate-x-0 !opacity-100 !filter !blur-0 !pointer-events-auto":"","info-text","register","-translate-x-[120%]","absolute","top-0","w-[50%]","h-full","left-0","flex","flex-col","justify-center","text-left","pt-0","pr-[150px]","pb-[60px]","pl-[40px]","pointer-events-none","duration-700","ease-linear","opacity-0","filter","blur-[10px]"])},[j("h2",{class:Z([o.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-1700":"!delay-0","opacity-0","filter","blur-[10px]","duration-700","ease-linear","-translate-x-[120%]","text-[36px]","text-white","leading-snug","uppercase"])}," Welcome on board! ",2),j("p",{class:Z([o.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-1800":"!delay-100","opacity-0","filter","blur-[10px]","duration-700","ease-linear","-translate-x-[120%]","text-[16px]","text-white"])}," You can register using your email or a third-party service. ",2)],2)],2)])}}}),Wy={},Vy={class:"flex justify-center items-center"};function Ky(e,t){return fe(),Le("main",Vy," 努力趕工中，尚無數據可以呈現。 ")}const qy=tn(Wy,[["render",Ky]]),Yy={},Gy={class:"flex justify-center items-center"};function Xy(e,t){return fe(),Le("main",Gy," 努力趕工中，尚無可以設定的參數。 ")}const Jy=tn(Yy,[["render",Xy]]),Qy=e=>(wu("data-v-f75da371"),e=e(),Eu(),e),Zy={class:"flex justify-center items-center flex-col w-[600px] h-[300px] my-0 mx-auto"},e_=Qy(()=>j("h2",{class:"text-5xl text-center mt-10"}," Oops! 404 Page not found. ",-1)),t_=rt({__name:"NotFound",setup(e){const t=Og();return(n,r)=>(fe(),Le("main",Zy,[e_,j("button",{onClick:r[0]||(r[0]=()=>_e(t).push("/")),class:"btn bg-transparent rounded-lg border w-[150px] hover:text-light border-[#ffffff80] text-base font-medium py-[10xp] px-[20px] m-auto leading-10 hover:shadow-activeButton transition duration-300 ease-linear hover:text-shadow-light-back-to-home focus:text-shadow-light-back-to-home"}," Back to home ")]))}});const n_=tn(t_,[["__scopeId","data-v-f75da371"]]),br=Sg({history:Vm("/pomofocus-vue3/"),routes:[{path:"/",name:"home",component:Dy},{path:"/login",name:"login",component:zy},{path:"/analysis",name:"analysis",component:qy,meta:{requiresAuth:!0}},{path:"/setting",name:"setting",component:Jy,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",name:"NotFound",component:n_}]}),r_=()=>new Promise((e,t)=>{const n=Vf(yo(),r=>{n(),e(r)},t)}),i_=ys();br.beforeEach(async(e,t,n)=>{e.matched.some(r=>r.meta.requiresAuth)?await r_()?n():(i_.msgHandler("You do not have permission to view this page. Please log in.","failure",3e3),n("/login")):n()});const sr=yo(),s_=new gt,Mt=ys(),ad=Xu("user",()=>{const e=se(!1),t=se(""),n=se(""),r=se("");function i(){Vf(sr,l=>{if(l){e.value=!0;return}e.value=!1})}function s(){cb(sr).then(()=>{e.value=!1,Mt.msgHandler("You have successfully signed out.","success",3e3)}).catch(l=>{console.log(l),e.value=!0,Mt.msgHandler(l.code,"failure",3e3)})}function a(){Sb(sr,s_).then(()=>{e.value=!0,br.push("/"),Mt.msgHandler("Login success!","success",3e3)}).catch(l=>{console.log(l),e.value=!1,Mt.msgHandler(l.code,"failure",3e3)})}function o(l,u){sb(sr,l,u).then(f=>{console.log(f),e.value=!0,br.push("/"),Mt.msgHandler("Login success!","success",3e3)}).catch(f=>{console.log(f),e.value=!1,Mt.msgHandler(f.code,"failure",3e3)})}function c(l,u){ib(sr,l,u).then(()=>{e.value=!0,br.push("/"),Mt.msgHandler("Registration successful, and you are now logged in.","success",3500)}).catch(f=>{e.value=!1,Mt.msgHandler(f.code,"failure",3500)})}return{checkIsLogin:i,signOutWithGoogle:s,signInWithGoogle:a,logInWithEmailAndPassword:o,registerWithEmailAndPassword:c,userName:t,userEmail:n,isLogin:e,userPhotoUrl:r}}),a_=e=>(wu("data-v-626374bd"),e=e(),Eu(),e),o_={class:"flex justify-between h-20 w-[97%] mb-[30px]"},c_={class:"leading-loose contrast-20 w-[100px] text-center"},l_={class:"animate-fadeIn flex items-center gap-2 max-md:hidden"},u_={class:"flex"},f_=a_(()=>j("div",{class:"menu-btn__burger w-[45px] h-[6px] bg-primary rounded-[2px] shadow-burger transition duration-500 ease-in-out"},null,-1)),d_=[f_],h_=rt({__name:"NavHeader",setup(e){const t=ad(),{isLogin:n}=io(t),r=se(!1),i=se([{id:"item01",name:"analysis",icon:"chart-line"},{id:"item02",name:"setting",icon:"gear"},{id:"item03",name:"login"}]),s=()=>{r.value=!r.value};return as(()=>{t.checkIsLogin()}),(a,o)=>{const c=Mi("RouterLink"),l=Mi("font-awesome-icon");return fe(),Le("header",o_,[j("h1",c_,[Ee(c,{to:"/",class:""},{default:Un(()=>[zt("Pomofocus")]),_:1})]),j("nav",l_,[j("ul",u_,[(fe(!0),Le(He,null,Ru(i.value,u=>(fe(),Le("li",{key:u.id,class:"leading-loose ml-5 min-h-full transition-transform transition-shadow duration-300 hover:translate-y-[2px] active:translate-y-[5px]"},[u.name.toLowerCase()==="login"?(fe(),ze(c,{key:0,to:"/login",class:"group text-base max-w-prose nav-item"},{default:Un(()=>[_e(n)?(fe(),ze(l,{key:0,icon:["fas","user-check"],class:"mr-1 transition ease duration-300 group-hover:rotateY-360"})):(fe(),ze(l,{key:1,icon:["fas","user"],class:"mr-1 transition ease duration-500 group-hover:rotateY-360"})),zt(" "+zn(u.name),1)]),_:2},1024)):_e(n)&&u.name.toLowerCase()!=="login"?(fe(),ze(c,{key:1,to:`/${u.name.toLowerCase()}`,class:"group text-base max-w-prose nav-item"},{default:Un(()=>[u!=null&&u.icon?(fe(),ze(l,{key:0,icon:["fas",u.icon],class:"mr-1 transition ease duration-500 group-hover:rotateY-360"},null,8,["icon"])):xi("",!0),zt(" "+zn(u.name),1)]),_:2},1032,["to"])):xi("",!0)]))),128))]),_e(n)?(fe(),Le("button",{key:0,onClick:o[0]||(o[0]=(...u)=>_e(t).signOutWithGoogle&&_e(t).signOutWithGoogle(...u)),class:"group leading-[1.3] ml-5 text-base max-w-prose nav-item"},[Ee(l,{icon:["fas","arrow-right-from-bracket"],class:"mr-1 transition duration-300 ease group-hover:translate-x-1"}),zt(" logout ")])):xi("",!0)]),j("div",{class:Z([{active:r.value},"md:hidden menu-btn relative flex justify-center items-center w-[80px] h-[80px] cursor-pointer transition duration-500 ease-in-out"]),onClick:s},d_,2)])}}});const p_=tn(h_,[["__scopeId","data-v-626374bd"]]),m_={key:0,class:"toast max-w-[320px] h-auto bg-white rounded fixed top-0 left-[50%] z-[9999] opacity-0"},g_={class:"flex items-center w-auto my-auto mx-0 p-3"},v_=rt({__name:"GlobalToast",props:{show:{type:Boolean},message:{},type:{},displayTime:{}},emits:["close"],setup(e,{emit:t}){return qh(()=>{e.show&&setTimeout(()=>{t("close")},e.displayTime)}),(n,r)=>{const i=Mi("font-awesome-icon");return fe(),ze(Tp,{to:"body"},[Ee(ds,{name:"slide"},{default:Un(()=>[n.show?(fe(),Le("div",m_,[j("div",g_,[n.type==="success"?(fe(),ze(i,{key:0,icon:["far","circle-check"],class:"text-xl text-green-500 mr-5"})):(fe(),ze(i,{key:1,icon:["far","circle-xmark"],class:"text-xl text-red-500 mr-5"})),j("span",{class:Z(["block",n.type==="success"?"text-gray-700":"text-gray-400","text-xl"])},zn(n.message),3)])])):xi("",!0)]),_:1})])}}});const ml=tn(v_,[["__scopeId","data-v-d607088d"]]),b_={class:"xl:max-w-1200 lg:max-w-1000 md:max-w-600 w-[90vw] mx-auto my-0 h-screen"},y_=rt({__name:"App",setup(e){const t=ys(),n=sd();return as(()=>{t.component.value=Br(ml),n.requestPermission()}),(r,i)=>(fe(),Le(He,null,[Ee(ml,{onClose:i[0]||(i[0]=()=>_e(t).closeToast()),show:_e(t).show.value,message:_e(t).message.value,type:_e(t).type.value,"display-time":_e(t).time.value},null,8,["show","message","type","display-time"]),j("main",b_,[Ee(p_),Ee(ds,{name:"fade",mode:"out-in"},{default:Un(()=>[Ee(_e(uf))]),_:1})])],64))}});const __=tn(y_,[["__scopeId","data-v-801ca425"]]);function gl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gl(Object(n),!0).forEach(function(r){Se(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gl(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ki(e){"@babel/helpers - typeof";return Ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ki(e)}function w_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vl(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E_(e,t,n){return t&&vl(e.prototype,t),n&&vl(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _o(e,t){return x_(e)||A_(e,t)||od(e,t)||T_()}function Yr(e){return I_(e)||k_(e)||od(e)||C_()}function I_(e){if(Array.isArray(e))return xa(e)}function x_(e){if(Array.isArray(e))return e}function k_(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function A_(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,a,o;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(c){s=!0,o=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw o}}return r}}function od(e,t){if(e){if(typeof e=="string")return xa(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xa(e,t)}}function xa(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function C_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var bl=function(){},wo={},cd={},ld=null,ud={mark:bl,measure:bl};try{typeof window<"u"&&(wo=window),typeof document<"u"&&(cd=document),typeof MutationObserver<"u"&&(ld=MutationObserver),typeof performance<"u"&&(ud=performance)}catch{}var S_=wo.navigator||{},yl=S_.userAgent,_l=yl===void 0?"":yl,Xt=wo,ye=cd,wl=ld,ui=ud;Xt.document;var Tt=!!ye.documentElement&&!!ye.head&&typeof ye.addEventListener=="function"&&typeof ye.createElement=="function",fd=~_l.indexOf("MSIE")||~_l.indexOf("Trident/"),fi,di,hi,pi,mi,It="___FONT_AWESOME___",ka=16,dd="fa",hd="svg-inline--fa",En="data-fa-i2svg",Aa="data-fa-pseudo-element",P_="data-fa-pseudo-element-pending",Eo="data-prefix",Io="data-icon",El="fontawesome-i2svg",O_="async",R_=["HTML","HEAD","STYLE","SCRIPT"],pd=function(){try{return!0}catch{return!1}}(),be="classic",Ie="sharp",xo=[be,Ie];function Gr(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[be]}})}var Lr=Gr((fi={},Se(fi,be,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Se(fi,Ie,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),fi)),Mr=Gr((di={},Se(di,be,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Se(di,Ie,{solid:"fass",regular:"fasr",light:"fasl"}),di)),Dr=Gr((hi={},Se(hi,be,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Se(hi,Ie,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),hi)),N_=Gr((pi={},Se(pi,be,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Se(pi,Ie,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),pi)),L_=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,md="fa-layers-text",M_=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,D_=Gr((mi={},Se(mi,be,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Se(mi,Ie,{900:"fass",400:"fasr",300:"fasl"}),mi)),gd=[1,2,3,4,5,6,7,8,9,10],F_=gd.concat([11,12,13,14,15,16,17,18,19,20]),U_=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],hn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Fr=new Set;Object.keys(Mr[be]).map(Fr.add.bind(Fr));Object.keys(Mr[Ie]).map(Fr.add.bind(Fr));var $_=[].concat(xo,Yr(Fr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",hn.GROUP,hn.SWAP_OPACITY,hn.PRIMARY,hn.SECONDARY]).concat(gd.map(function(e){return"".concat(e,"x")})).concat(F_.map(function(e){return"w-".concat(e)})),yr=Xt.FontAwesomeConfig||{};function B_(e){var t=ye.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function j_(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ye&&typeof ye.querySelector=="function"){var H_=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];H_.forEach(function(e){var t=_o(e,2),n=t[0],r=t[1],i=j_(B_(n));i!=null&&(yr[r]=i)})}var vd={styleDefault:"solid",familyDefault:"classic",cssPrefix:dd,replacementClass:hd,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};yr.familyPrefix&&(yr.cssPrefix=yr.familyPrefix);var Gn=F(F({},vd),yr);Gn.autoReplaceSvg||(Gn.observeMutations=!1);var B={};Object.keys(vd).forEach(function(e){Object.defineProperty(B,e,{enumerable:!0,set:function(n){Gn[e]=n,_r.forEach(function(r){return r(B)})},get:function(){return Gn[e]}})});Object.defineProperty(B,"familyPrefix",{enumerable:!0,set:function(t){Gn.cssPrefix=t,_r.forEach(function(n){return n(B)})},get:function(){return Gn.cssPrefix}});Xt.FontAwesomeConfig=B;var _r=[];function z_(e){return _r.push(e),function(){_r.splice(_r.indexOf(e),1)}}var Dt=ka,lt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function W_(e){if(!(!e||!Tt)){var t=ye.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ye.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=s)}return ye.head.insertBefore(t,r),e}}var V_="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ur(){for(var e=12,t="";e-- >0;)t+=V_[Math.random()*62|0];return t}function er(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ko(e){return e.classList?er(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function bd(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function K_(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(bd(e[n]),'" ')},"").trim()}function _s(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ao(e){return e.size!==lt.size||e.x!==lt.x||e.y!==lt.y||e.rotate!==lt.rotate||e.flipX||e.flipY}function q_(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(s," ").concat(a," ").concat(o)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function Y_(e){var t=e.transform,n=e.width,r=n===void 0?ka:n,i=e.height,s=i===void 0?ka:i,a=e.startCentered,o=a===void 0?!1:a,c="";return o&&fd?c+="translate(".concat(t.x/Dt-r/2,"em, ").concat(t.y/Dt-s/2,"em) "):o?c+="translate(calc(-50% + ".concat(t.x/Dt,"em), calc(-50% + ").concat(t.y/Dt,"em)) "):c+="translate(".concat(t.x/Dt,"em, ").concat(t.y/Dt,"em) "),c+="scale(".concat(t.size/Dt*(t.flipX?-1:1),", ").concat(t.size/Dt*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var G_=`:root, :host {
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
}`;function yd(){var e=dd,t=hd,n=B.cssPrefix,r=B.replacementClass,i=G_;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(o,".".concat(r))}return i}var Il=!1;function Vs(){B.autoAddCss&&!Il&&(W_(yd()),Il=!0)}var X_={mixout:function(){return{dom:{css:yd,insertCss:Vs}}},hooks:function(){return{beforeDOMElementCreation:function(){Vs()},beforeI2svg:function(){Vs()}}}},xt=Xt||{};xt[It]||(xt[It]={});xt[It].styles||(xt[It].styles={});xt[It].hooks||(xt[It].hooks={});xt[It].shims||(xt[It].shims=[]);var Ze=xt[It],_d=[],J_=function e(){ye.removeEventListener("DOMContentLoaded",e),qi=1,_d.map(function(t){return t()})},qi=!1;Tt&&(qi=(ye.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ye.readyState),qi||ye.addEventListener("DOMContentLoaded",J_));function Q_(e){Tt&&(qi?setTimeout(e,0):_d.push(e))}function Xr(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?bd(e):"<".concat(t," ").concat(K_(r),">").concat(s.map(Xr).join(""),"</").concat(t,">")}function xl(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Z_=function(t,n){return function(r,i,s,a){return t.call(n,r,i,s,a)}},Ks=function(t,n,r,i){var s=Object.keys(t),a=s.length,o=i!==void 0?Z_(n,i):n,c,l,u;for(r===void 0?(c=1,u=t[s[0]]):(c=0,u=r);c<a;c++)l=s[c],u=o(u,t[l],l,t);return u};function e1(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Ca(e){var t=e1(e);return t.length===1?t[0].toString(16):null}function t1(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function kl(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ta(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=kl(t);typeof Ze.hooks.addPack=="function"&&!i?Ze.hooks.addPack(e,kl(t)):Ze.styles[e]=F(F({},Ze.styles[e]||{}),s),e==="fas"&&Ta("fa",t)}var gi,vi,bi,Nn=Ze.styles,n1=Ze.shims,r1=(gi={},Se(gi,be,Object.values(Dr[be])),Se(gi,Ie,Object.values(Dr[Ie])),gi),Co=null,wd={},Ed={},Id={},xd={},kd={},i1=(vi={},Se(vi,be,Object.keys(Lr[be])),Se(vi,Ie,Object.keys(Lr[Ie])),vi);function s1(e){return~$_.indexOf(e)}function a1(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!s1(i)?i:null}var Ad=function(){var t=function(s){return Ks(Nn,function(a,o,c){return a[c]=Ks(o,s,{}),a},{})};wd=t(function(i,s,a){if(s[3]&&(i[s[3]]=a),s[2]){var o=s[2].filter(function(c){return typeof c=="number"});o.forEach(function(c){i[c.toString(16)]=a})}return i}),Ed=t(function(i,s,a){if(i[a]=a,s[2]){var o=s[2].filter(function(c){return typeof c=="string"});o.forEach(function(c){i[c]=a})}return i}),kd=t(function(i,s,a){var o=s[2];return i[a]=a,o.forEach(function(c){i[c]=a}),i});var n="far"in Nn||B.autoFetchSvg,r=Ks(n1,function(i,s){var a=s[0],o=s[1],c=s[2];return o==="far"&&!n&&(o="fas"),typeof a=="string"&&(i.names[a]={prefix:o,iconName:c}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:o,iconName:c}),i},{names:{},unicodes:{}});Id=r.names,xd=r.unicodes,Co=ws(B.styleDefault,{family:B.familyDefault})};z_(function(e){Co=ws(e.styleDefault,{family:B.familyDefault})});Ad();function To(e,t){return(wd[e]||{})[t]}function o1(e,t){return(Ed[e]||{})[t]}function pn(e,t){return(kd[e]||{})[t]}function Cd(e){return Id[e]||{prefix:null,iconName:null}}function c1(e){var t=xd[e],n=To("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Jt(){return Co}var So=function(){return{prefix:null,iconName:null,rest:[]}};function ws(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?be:n,i=Lr[r][e],s=Mr[r][e]||Mr[r][i],a=e in Ze.styles?e:null;return s||a||null}var Al=(bi={},Se(bi,be,Object.keys(Dr[be])),Se(bi,Ie,Object.keys(Dr[Ie])),bi);function Es(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},Se(t,be,"".concat(B.cssPrefix,"-").concat(be)),Se(t,Ie,"".concat(B.cssPrefix,"-").concat(Ie)),t),a=null,o=be;(e.includes(s[be])||e.some(function(l){return Al[be].includes(l)}))&&(o=be),(e.includes(s[Ie])||e.some(function(l){return Al[Ie].includes(l)}))&&(o=Ie);var c=e.reduce(function(l,u){var f=a1(B.cssPrefix,u);if(Nn[u]?(u=r1[o].includes(u)?N_[o][u]:u,a=u,l.prefix=u):i1[o].indexOf(u)>-1?(a=u,l.prefix=ws(u,{family:o})):f?l.iconName=f:u!==B.replacementClass&&u!==s[be]&&u!==s[Ie]&&l.rest.push(u),!i&&l.prefix&&l.iconName){var d=a==="fa"?Cd(l.iconName):{},m=pn(l.prefix,l.iconName);d.prefix&&(a=null),l.iconName=d.iconName||m||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!Nn.far&&Nn.fas&&!B.autoFetchSvg&&(l.prefix="fas")}return l},So());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&o===Ie&&(Nn.fass||B.autoFetchSvg)&&(c.prefix="fass",c.iconName=pn(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||a==="fa")&&(c.prefix=Jt()||"fas"),c}var l1=function(){function e(){w_(this,e),this.definitions={}}return E_(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){n.definitions[o]=F(F({},n.definitions[o]||{}),a[o]),Ta(o,a[o]);var c=Dr[be][o];c&&Ta(c,a[o]),Ad()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var a=i[s],o=a.prefix,c=a.iconName,l=a.icon,u=l[2];n[o]||(n[o]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[o][f]=l)}),n[o][c]=l}),n}}]),e}(),Cl=[],Ln={},Hn={},u1=Object.keys(Hn);function f1(e,t){var n=t.mixoutsTo;return Cl=e,Ln={},Object.keys(Hn).forEach(function(r){u1.indexOf(r)===-1&&delete Hn[r]}),Cl.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),Ki(i[a])==="object"&&Object.keys(i[a]).forEach(function(o){n[a]||(n[a]={}),n[a][o]=i[a][o]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(a){Ln[a]||(Ln[a]=[]),Ln[a].push(s[a])})}r.provides&&r.provides(Hn)}),n}function Sa(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Ln[e]||[];return s.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function In(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Ln[e]||[];i.forEach(function(s){s.apply(null,n)})}function kt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Hn[e]?Hn[e].apply(null,t):void 0}function Pa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Jt();if(t)return t=pn(n,t)||t,xl(Td.definitions,n,t)||xl(Ze.styles,n,t)}var Td=new l1,d1=function(){B.autoReplaceSvg=!1,B.observeMutations=!1,In("noAuto")},h1={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Tt?(In("beforeI2svg",t),kt("pseudoElements2svg",t),kt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;B.autoReplaceSvg===!1&&(B.autoReplaceSvg=!0),B.observeMutations=!0,Q_(function(){m1({autoReplaceSvgRoot:n}),In("watch",t)})}},p1={icon:function(t){if(t===null)return null;if(Ki(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:pn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ws(t[0]);return{prefix:r,iconName:pn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(B.cssPrefix,"-"))>-1||t.match(L_))){var i=Es(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Jt(),iconName:pn(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=Jt();return{prefix:s,iconName:pn(s,t)||t}}}},We={noAuto:d1,config:B,dom:h1,parse:p1,library:Td,findIconDefinition:Pa,toHtml:Xr},m1=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ye:n;(Object.keys(Ze.styles).length>0||B.autoFetchSvg)&&Tt&&B.autoReplaceSvg&&We.dom.i2svg({node:r})};function Is(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Xr(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Tt){var r=ye.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function g1(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,a=e.transform;if(Ao(a)&&n.found&&!r.found){var o=n.width,c=n.height,l={x:o/c/2,y:.5};i.style=_s(F(F({},s),{},{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function v1(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,a=s===!0?"".concat(t,"-").concat(B.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:F(F({},i),{},{id:a}),children:r}]}]}function Po(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,a=e.transform,o=e.symbol,c=e.title,l=e.maskId,u=e.titleId,f=e.extra,d=e.watchable,m=d===void 0?!1:d,_=r.found?r:n,I=_.width,N=_.height,v=i==="fak",y=[B.replacementClass,s?"".concat(B.cssPrefix,"-").concat(s):""].filter(function(L){return f.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(f.classes).join(" "),P={children:[],attributes:F(F({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:y,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(N)})},A=v&&!~f.classes.indexOf("fa-fw")?{width:"".concat(I/N*16*.0625,"em")}:{};m&&(P.attributes[En]=""),c&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(u||Ur())},children:[c]}),delete P.attributes.title);var D=F(F({},P),{},{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:a,symbol:o,styles:F(F({},A),f.styles)}),G=r.found&&n.found?kt("generateAbstractMask",D)||{children:[],attributes:{}}:kt("generateAbstractIcon",D)||{children:[],attributes:{}},Y=G.children,T=G.attributes;return D.children=Y,D.attributes=T,o?v1(D):g1(D)}function Tl(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,a=e.extra,o=e.watchable,c=o===void 0?!1:o,l=F(F(F({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});c&&(l[En]="");var u=F({},a.styles);Ao(i)&&(u.transform=Y_({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=_s(u);f.length>0&&(l.style=f);var d=[];return d.push({tag:"span",attributes:l,children:[t]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function b1(e){var t=e.content,n=e.title,r=e.extra,i=F(F(F({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=_s(r.styles);s.length>0&&(i.style=s);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var qs=Ze.styles;function Oa(e){var t=e[0],n=e[1],r=e.slice(4),i=_o(r,1),s=i[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(B.cssPrefix,"-").concat(hn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(hn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(B.cssPrefix,"-").concat(hn.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:a}}var y1={found:!1,width:512,height:512};function _1(e,t){!pd&&!B.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ra(e,t){var n=t;return t==="fa"&&B.styleDefault!==null&&(t=Jt()),new Promise(function(r,i){if(kt("missingIconAbstract"),n==="fa"){var s=Cd(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&qs[t]&&qs[t][e]){var a=qs[t][e];return r(Oa(a))}_1(e,t),r(F(F({},y1),{},{icon:B.showMissingIcons&&e?kt("missingIconAbstract")||{}:{}}))})}var Sl=function(){},Na=B.measurePerformance&&ui&&ui.mark&&ui.measure?ui:{mark:Sl,measure:Sl},ur='FA "6.4.2"',w1=function(t){return Na.mark("".concat(ur," ").concat(t," begins")),function(){return Sd(t)}},Sd=function(t){Na.mark("".concat(ur," ").concat(t," ends")),Na.measure("".concat(ur," ").concat(t),"".concat(ur," ").concat(t," begins"),"".concat(ur," ").concat(t," ends"))},Oo={begin:w1,end:Sd},Si=function(){};function Pl(e){var t=e.getAttribute?e.getAttribute(En):null;return typeof t=="string"}function E1(e){var t=e.getAttribute?e.getAttribute(Eo):null,n=e.getAttribute?e.getAttribute(Io):null;return t&&n}function I1(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(B.replacementClass)}function x1(){if(B.autoReplaceSvg===!0)return Pi.replace;var e=Pi[B.autoReplaceSvg];return e||Pi.replace}function k1(e){return ye.createElementNS("http://www.w3.org/2000/svg",e)}function A1(e){return ye.createElement(e)}function Pd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?k1:A1:n;if(typeof e=="string")return ye.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var s=e.children||[];return s.forEach(function(a){i.appendChild(Pd(a,{ceFn:r}))}),i}function C1(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Pi={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Pd(i),n)}),n.getAttribute(En)===null&&B.keepOriginalSource){var r=ye.createComment(C1(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ko(n).indexOf(B.replacementClass))return Pi.replace(t);var i=new RegExp("".concat(B.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(o,c){return c===B.replacementClass||c.match(i)?o.toSvg.push(c):o.toNode.push(c),o},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var a=r.map(function(o){return Xr(o)}).join(`
`);n.setAttribute(En,""),n.innerHTML=a}};function Ol(e){e()}function Od(e,t){var n=typeof t=="function"?t:Si;if(e.length===0)n();else{var r=Ol;B.mutateApproach===O_&&(r=Xt.requestAnimationFrame||Ol),r(function(){var i=x1(),s=Oo.begin("mutate");e.map(i),s(),n()})}}var Ro=!1;function Rd(){Ro=!0}function La(){Ro=!1}var Yi=null;function Rl(e){if(wl&&B.observeMutations){var t=e.treeCallback,n=t===void 0?Si:t,r=e.nodeCallback,i=r===void 0?Si:r,s=e.pseudoElementsCallback,a=s===void 0?Si:s,o=e.observeMutationsRoot,c=o===void 0?ye:o;Yi=new wl(function(l){if(!Ro){var u=Jt();er(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Pl(f.addedNodes[0])&&(B.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&B.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&Pl(f.target)&&~U_.indexOf(f.attributeName))if(f.attributeName==="class"&&E1(f.target)){var d=Es(ko(f.target)),m=d.prefix,_=d.iconName;f.target.setAttribute(Eo,m||u),_&&f.target.setAttribute(Io,_)}else I1(f.target)&&i(f.target)})}}),Tt&&Yi.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function T1(){Yi&&Yi.disconnect()}function S1(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(r[a]=o.join(":").trim()),r},{})),n}function P1(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Es(ko(e));return i.prefix||(i.prefix=Jt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=o1(i.prefix,e.innerText)||To(i.prefix,Ca(e.innerText))),!i.iconName&&B.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function O1(e){var t=er(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return B.autoA11y&&(n?t["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(r||Ur()):(t["aria-hidden"]="true",t.focusable="false")),t}function R1(){return{iconName:null,title:null,titleId:null,prefix:null,transform:lt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Nl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=P1(e),r=n.iconName,i=n.prefix,s=n.rest,a=O1(e),o=Sa("parseNodeAttributes",{},e),c=t.styleParser?S1(e):[];return F({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:lt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:a}},o)}var N1=Ze.styles;function Nd(e){var t=B.autoReplaceSvg==="nest"?Nl(e,{styleParser:!1}):Nl(e);return~t.extra.classes.indexOf(md)?kt("generateLayersText",e,t):kt("generateSvgReplacementMutation",e,t)}var Qt=new Set;xo.map(function(e){Qt.add("fa-".concat(e))});Object.keys(Lr[be]).map(Qt.add.bind(Qt));Object.keys(Lr[Ie]).map(Qt.add.bind(Qt));Qt=Yr(Qt);function Ll(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Tt)return Promise.resolve();var n=ye.documentElement.classList,r=function(f){return n.add("".concat(El,"-").concat(f))},i=function(f){return n.remove("".concat(El,"-").concat(f))},s=B.autoFetchSvg?Qt:xo.map(function(u){return"fa-".concat(u)}).concat(Object.keys(N1));s.includes("fa")||s.push("fa");var a=[".".concat(md,":not([").concat(En,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(En,"])")})).join(", ");if(a.length===0)return Promise.resolve();var o=[];try{o=er(e.querySelectorAll(a))}catch{}if(o.length>0)r("pending"),i("complete");else return Promise.resolve();var c=Oo.begin("onTree"),l=o.reduce(function(u,f){try{var d=Nd(f);d&&u.push(d)}catch(m){pd||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(d){Od(d,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),c(),u()})}).catch(function(d){c(),f(d)})})}function L1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Nd(e).then(function(n){n&&Od([n],t)})}function M1(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Pa(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Pa(i||{})),e(r,F(F({},n),{},{mask:i}))}}var D1=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?lt:r,s=n.symbol,a=s===void 0?!1:s,o=n.mask,c=o===void 0?null:o,l=n.maskId,u=l===void 0?null:l,f=n.title,d=f===void 0?null:f,m=n.titleId,_=m===void 0?null:m,I=n.classes,N=I===void 0?[]:I,v=n.attributes,y=v===void 0?{}:v,P=n.styles,A=P===void 0?{}:P;if(t){var D=t.prefix,G=t.iconName,Y=t.icon;return Is(F({type:"icon"},t),function(){return In("beforeDOMElementCreation",{iconDefinition:t,params:n}),B.autoA11y&&(d?y["aria-labelledby"]="".concat(B.replacementClass,"-title-").concat(_||Ur()):(y["aria-hidden"]="true",y.focusable="false")),Po({icons:{main:Oa(Y),mask:c?Oa(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:D,iconName:G,transform:F(F({},lt),i),symbol:a,title:d,maskId:u,titleId:_,extra:{attributes:y,styles:A,classes:N}})})}},F1={mixout:function(){return{icon:M1(D1)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ll,n.nodeCallback=L1,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ye:r,s=n.callback,a=s===void 0?function(){}:s;return Ll(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,a=r.titleId,o=r.prefix,c=r.transform,l=r.symbol,u=r.mask,f=r.maskId,d=r.extra;return new Promise(function(m,_){Promise.all([Ra(i,o),u.iconName?Ra(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var N=_o(I,2),v=N[0],y=N[1];m([n,Po({icons:{main:v,mask:y},prefix:o,iconName:i,transform:c,symbol:l,maskId:f,title:s,titleId:a,extra:d,watchable:!0})])}).catch(_)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.transform,o=n.styles,c=_s(o);c.length>0&&(i.style=c);var l;return Ao(a)&&(l=kt("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),r.push(l||s.icon),{children:r,attributes:i}}}},U1={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Is({type:"layer"},function(){In("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(o){Array.isArray(o)?o.map(function(c){a=a.concat(c.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(B.cssPrefix,"-layers")].concat(Yr(s)).join(" ")},children:a}]})}}}},$1={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,a=r.classes,o=a===void 0?[]:a,c=r.attributes,l=c===void 0?{}:c,u=r.styles,f=u===void 0?{}:u;return Is({type:"counter",content:n},function(){return In("beforeDOMElementCreation",{content:n,params:r}),b1({content:n.toString(),title:s,extra:{attributes:l,styles:f,classes:["".concat(B.cssPrefix,"-layers-counter")].concat(Yr(o))}})})}}}},B1={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?lt:i,a=r.title,o=a===void 0?null:a,c=r.classes,l=c===void 0?[]:c,u=r.attributes,f=u===void 0?{}:u,d=r.styles,m=d===void 0?{}:d;return Is({type:"text",content:n},function(){return In("beforeDOMElementCreation",{content:n,params:r}),Tl({content:n,transform:F(F({},lt),s),title:o,extra:{attributes:f,styles:m,classes:["".concat(B.cssPrefix,"-layers-text")].concat(Yr(l))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,a=r.extra,o=null,c=null;if(fd){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/l,c=u.height/l}return B.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,Tl({content:n.innerHTML,width:o,height:c,transform:s,title:i,extra:a,watchable:!0})])}}},j1=new RegExp('"',"ug"),Ml=[1105920,1112319];function H1(e){var t=e.replace(j1,""),n=t1(t,0),r=n>=Ml[0]&&n<=Ml[1],i=t.length===2?t[0]===t[1]:!1;return{value:Ca(i?t[0]:t),isSecondary:r||i}}function Dl(e,t){var n="".concat(P_).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=er(e.children),a=s.filter(function(Y){return Y.getAttribute(Aa)===t})[0],o=Xt.getComputedStyle(e,t),c=o.getPropertyValue("font-family").match(M_),l=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(a&&!c)return e.removeChild(a),r();if(c&&u!=="none"&&u!==""){var f=o.getPropertyValue("content"),d=~["Sharp"].indexOf(c[2])?Ie:be,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Mr[d][c[2].toLowerCase()]:D_[d][l],_=H1(f),I=_.value,N=_.isSecondary,v=c[0].startsWith("FontAwesome"),y=To(m,I),P=y;if(v){var A=c1(I);A.iconName&&A.prefix&&(y=A.iconName,m=A.prefix)}if(y&&!N&&(!a||a.getAttribute(Eo)!==m||a.getAttribute(Io)!==P)){e.setAttribute(n,P),a&&e.removeChild(a);var D=R1(),G=D.extra;G.attributes[Aa]=t,Ra(y,m).then(function(Y){var T=Po(F(F({},D),{},{icons:{main:Y,mask:So()},prefix:m,iconName:P,extra:G,watchable:!0})),L=ye.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(L,e.firstChild):e.appendChild(L),L.outerHTML=T.map(function(q){return Xr(q)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function z1(e){return Promise.all([Dl(e,"::before"),Dl(e,"::after")])}function W1(e){return e.parentNode!==document.head&&!~R_.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Aa)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Fl(e){if(Tt)return new Promise(function(t,n){var r=er(e.querySelectorAll("*")).filter(W1).map(z1),i=Oo.begin("searchPseudoElements");Rd(),Promise.all(r).then(function(){i(),La(),t()}).catch(function(){i(),La(),n()})})}var V1={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Fl,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ye:r;B.searchPseudoElements&&Fl(i)}}},Ul=!1,K1={mixout:function(){return{dom:{unwatch:function(){Rd(),Ul=!0}}}},hooks:function(){return{bootstrap:function(){Rl(Sa("mutationObserverCallbacks",{}))},noAuto:function(){T1()},watch:function(n){var r=n.observeMutationsRoot;Ul?La():Rl(Sa("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},$l=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),a=s[0],o=s.slice(1).join("-");if(a&&o==="h")return r.flipX=!0,r;if(a&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(a){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},q1={mixout:function(){return{parse:{transform:function(n){return $l(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=$l(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,a=n.iconWidth,o={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(u)},d={transform:"translate(".concat(a/2*-1," -256)")},m={outer:o,inner:f,path:d};return{tag:"g",attributes:F({},m.outer),children:[{tag:"g",attributes:F({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:F(F({},r.icon.attributes),m.path)}]}]}}}},Ys={x:0,y:0,width:"100%",height:"100%"};function Bl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Y1(e){return e.tag==="g"?e.children:[e]}var G1={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Es(i.split(" ").map(function(a){return a.trim()})):So();return s.prefix||(s.prefix=Jt()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.mask,o=n.maskId,c=n.transform,l=s.width,u=s.icon,f=a.width,d=a.icon,m=q_({transform:c,containerWidth:f,iconWidth:l}),_={tag:"rect",attributes:F(F({},Ys),{},{fill:"white"})},I=u.children?{children:u.children.map(Bl)}:{},N={tag:"g",attributes:F({},m.inner),children:[Bl(F({tag:u.tag,attributes:F(F({},u.attributes),m.path)},I))]},v={tag:"g",attributes:F({},m.outer),children:[N]},y="mask-".concat(o||Ur()),P="clip-".concat(o||Ur()),A={tag:"mask",attributes:F(F({},Ys),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,v]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Y1(d)},A]};return r.push(D,{tag:"rect",attributes:F({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(y,")")},Ys)}),{children:r,attributes:i}}}},X1={provides:function(t){var n=!1;Xt.matchMedia&&(n=Xt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:F(F({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=F(F({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:F(F({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:F(F({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:F(F({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:F(F({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:F(F({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:F(F({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:F(F({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},J1={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},Q1=[X_,F1,U1,$1,B1,V1,K1,q1,G1,X1,J1];f1(Q1,{mixoutsTo:We});We.noAuto;We.config;var Z1=We.library;We.dom;var Ma=We.parse;We.findIconDefinition;We.toHtml;var ew=We.icon;We.layer;We.text;We.counter;function jl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function vt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jl(Object(n),!0).forEach(function(r){De(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jl(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Gi(e){"@babel/helpers - typeof";return Gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gi(e)}function De(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function nw(e,t){if(e==null)return{};var n=tw(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var rw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ld={exports:{}};(function(e){(function(t){var n=function(v,y,P){if(!l(y)||f(y)||d(y)||m(y)||c(y))return y;var A,D=0,G=0;if(u(y))for(A=[],G=y.length;D<G;D++)A.push(n(v,y[D],P));else{A={};for(var Y in y)Object.prototype.hasOwnProperty.call(y,Y)&&(A[v(Y,P)]=n(v,y[Y],P))}return A},r=function(v,y){y=y||{};var P=y.separator||"_",A=y.split||/(?=[A-Z])/;return v.split(A).join(P)},i=function(v){return _(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(y,P){return P?P.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},s=function(v){var y=i(v);return y.substr(0,1).toUpperCase()+y.substr(1)},a=function(v,y){return r(v,y).toLowerCase()},o=Object.prototype.toString,c=function(v){return typeof v=="function"},l=function(v){return v===Object(v)},u=function(v){return o.call(v)=="[object Array]"},f=function(v){return o.call(v)=="[object Date]"},d=function(v){return o.call(v)=="[object RegExp]"},m=function(v){return o.call(v)=="[object Boolean]"},_=function(v){return v=v-0,v===v},I=function(v,y){var P=y&&"process"in y?y.process:y;return typeof P!="function"?v:function(A,D){return P(A,v,D)}},N={camelize:i,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(v,y){return n(I(i,y),v)},decamelizeKeys:function(v,y){return n(I(a,y),v,y)},pascalizeKeys:function(v,y){return n(I(s,y),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=N:t.humps=N})(rw)})(Ld);var iw=Ld.exports,sw=["class","style"];function aw(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=iw.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function ow(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Md(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return Md(c)}),i=Object.keys(e.attributes||{}).reduce(function(c,l){var u=e.attributes[l];switch(l){case"class":c.class=ow(u);break;case"style":c.style=aw(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,a=s===void 0?{}:s,o=nw(n,sw);return fs(e.tag,vt(vt(vt({},t),{},{class:i.class,style:vt(vt({},i.style),a)},i.attrs),o),r)}var Dd=!1;try{Dd=!0}catch{}function cw(){if(!Dd&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Gs(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?De({},e,t):{}}function lw(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},De(t,"fa-".concat(e.size),e.size!==null),De(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),De(t,"fa-pull-".concat(e.pull),e.pull!==null),De(t,"fa-swap-opacity",e.swapOpacity),De(t,"fa-bounce",e.bounce),De(t,"fa-shake",e.shake),De(t,"fa-beat",e.beat),De(t,"fa-fade",e.fade),De(t,"fa-beat-fade",e.beatFade),De(t,"fa-flash",e.flash),De(t,"fa-spin-pulse",e.spinPulse),De(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Hl(e){if(e&&Gi(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ma.icon)return Ma.icon(e);if(e===null)return null;if(Gi(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var uw=rt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=xe(function(){return Hl(t.icon)}),s=xe(function(){return Gs("classes",lw(t))}),a=xe(function(){return Gs("transform",typeof t.transform=="string"?Ma.transform(t.transform):t.transform)}),o=xe(function(){return Gs("mask",Hl(t.mask))}),c=xe(function(){return ew(i.value,vt(vt(vt(vt({},s.value),a.value),o.value),{},{symbol:t.symbol,title:t.title}))});gn(c,function(u){if(!u)return cw("Could not find one or more icon(s)",i.value,o.value)},{immediate:!0});var l=xe(function(){return c.value?Md(c.value.abstract[0],{},r):null});return function(){return l.value}}}),fw={prefix:"fas",iconName:"user-check",icon:[640,512,[],"f4fc","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM625 177L497 305c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L591 143c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"]},dw={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[512,512,["sign-out"],"f08b","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},hw={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},pw={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]},mw={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},gw={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},vw={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]},bw={prefix:"far",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"]},yw=bw,_w={prefix:"far",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"]},ww=_w;function Ew(){Z1.add(mw,vw,yw,ww,hw,fw,dw,gw,pw)}Ew();const No=bm(__);No.use(wm());No.use(br);No.component("font-awesome-icon",uw).mount("#app");
