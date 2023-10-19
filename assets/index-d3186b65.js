(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Rs(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const re={},Wt=[],Le=()=>{},$c=()=>!1,Hc=/^on[^a-z]/,br=t=>Hc.test(t),Ps=t=>t.startsWith("onUpdate:"),de=Object.assign,As=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},jc=Object.prototype.hasOwnProperty,K=(t,e)=>jc.call(t,e),U=Array.isArray,zt=t=>wr(t)==="[object Map]",No=t=>wr(t)==="[object Set]",$=t=>typeof t=="function",le=t=>typeof t=="string",Os=t=>typeof t=="symbol",ne=t=>t!==null&&typeof t=="object",Do=t=>ne(t)&&$(t.then)&&$(t.catch),Mo=Object.prototype.toString,wr=t=>Mo.call(t),Vc=t=>wr(t).slice(8,-1),Lo=t=>wr(t)==="[object Object]",ks=t=>le(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qn=Rs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Er=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wc=/-(\w)/g,Ge=Er(t=>t.replace(Wc,(e,n)=>n?n.toUpperCase():"")),zc=/\B([A-Z])/g,on=Er(t=>t.replace(zc,"-$1").toLowerCase()),Ir=Er(t=>t.charAt(0).toUpperCase()+t.slice(1)),Br=Er(t=>t?`on${Ir(t)}`:""),En=(t,e)=>!Object.is(t,e),$r=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ar=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Kc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let di;const rs=()=>di||(di=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xs(t){if(U(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=le(r)?Yc(r):xs(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(le(t))return t;if(ne(t))return t}}const qc=/;(?![^(]*\))/g,Gc=/:([^]+)/,Jc=/\/\*[^]*?\*\//g;function Yc(t){const e={};return t.replace(Jc,"").split(qc).forEach(n=>{if(n){const r=n.split(Gc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Dn(t){let e="";if(le(t))e=t;else if(U(t))for(let n=0;n<t.length;n++){const r=Dn(t[n]);r&&(e+=r+" ")}else if(ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Xc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qc=Rs(Xc);function Uo(t){return!!t||t===""}const Kt=t=>le(t)?t:t==null?"":U(t)||ne(t)&&(t.toString===Mo||!$(t.toString))?JSON.stringify(t,Fo,2):String(t),Fo=(t,e)=>e&&e.__v_isRef?Fo(t,e.value):zt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:No(e)?{[`Set(${e.size})`]:[...e.values()]}:ne(e)&&!U(e)&&!Lo(e)?String(e):e;let Ce;class Bo{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ce,!e&&Ce&&(this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Ce;try{return Ce=this,e()}finally{Ce=n}}}on(){Ce=this}off(){Ce=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function $o(t){return new Bo(t)}function Zc(t,e=Ce){e&&e.active&&e.effects.push(t)}function Ho(){return Ce}function el(t){Ce&&Ce.cleanups.push(t)}const Ns=t=>{const e=new Set(t);return e.w=0,e.n=0,e},jo=t=>(t.w&bt)>0,Vo=t=>(t.n&bt)>0,tl=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=bt},nl=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];jo(s)&&!Vo(s)?s.delete(t):e[n++]=s,s.w&=~bt,s.n&=~bt}e.length=n}},cr=new WeakMap;let dn=0,bt=1;const ss=30;let De;const Ot=Symbol(""),is=Symbol("");class Ds{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Zc(this,r)}run(){if(!this.active)return this.fn();let e=De,n=mt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=De,De=this,mt=!0,bt=1<<++dn,dn<=ss?tl(this):hi(this),this.fn()}finally{dn<=ss&&nl(this),bt=1<<--dn,De=this.parent,mt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){De===this?this.deferStop=!0:this.active&&(hi(this),this.onStop&&this.onStop(),this.active=!1)}}function hi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let mt=!0;const Wo=[];function an(){Wo.push(mt),mt=!1}function cn(){const t=Wo.pop();mt=t===void 0?!0:t}function Ie(t,e,n){if(mt&&De){let r=cr.get(t);r||cr.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ns()),zo(s)}}function zo(t,e){let n=!1;dn<=ss?Vo(t)||(t.n|=bt,n=!jo(t)):n=!t.has(De),n&&(t.add(De),De.deps.push(t))}function rt(t,e,n,r,s,i){const o=cr.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&U(t)){const a=Number(r);o.forEach((l,u)=>{(u==="length"||u>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":U(t)?ks(n)&&c.push(o.get("length")):(c.push(o.get(Ot)),zt(t)&&c.push(o.get(is)));break;case"delete":U(t)||(c.push(o.get(Ot)),zt(t)&&c.push(o.get(is)));break;case"set":zt(t)&&c.push(o.get(Ot));break}if(c.length===1)c[0]&&os(c[0]);else{const a=[];for(const l of c)l&&a.push(...l);os(Ns(a))}}function os(t,e){const n=U(t)?t:[...t];for(const r of n)r.computed&&pi(r);for(const r of n)r.computed||pi(r)}function pi(t,e){(t!==De||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function rl(t,e){var n;return(n=cr.get(t))==null?void 0:n.get(e)}const sl=Rs("__proto__,__v_isRef,__isVue"),Ko=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Os)),il=Ms(),ol=Ms(!1,!0),al=Ms(!0),gi=cl();function cl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=z(this);for(let i=0,o=this.length;i<o;i++)Ie(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(z)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){an();const r=z(this)[e].apply(this,n);return cn(),r}}),t}function ll(t){const e=z(this);return Ie(e,"has",t),e.hasOwnProperty(t)}function Ms(t=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(t?e?Sl:Xo:e?Yo:Jo).get(r))return r;const o=U(r);if(!t){if(o&&K(gi,s))return Reflect.get(gi,s,i);if(s==="hasOwnProperty")return ll}const c=Reflect.get(r,s,i);return(Os(s)?Ko.has(s):sl(s))||(t||Ie(r,"get",s),e)?c:ie(c)?o&&ks(s)?c:c.value:ne(c)?t?Zo(c):Mn(c):c}}const ul=qo(),fl=qo(!0);function qo(t=!1){return function(n,r,s,i){let o=n[r];if(Qt(o)&&ie(o)&&!ie(s))return!1;if(!t&&(!lr(s)&&!Qt(s)&&(o=z(o),s=z(s)),!U(n)&&ie(o)&&!ie(s)))return o.value=s,!0;const c=U(n)&&ks(r)?Number(r)<n.length:K(n,r),a=Reflect.set(n,r,s,i);return n===z(i)&&(c?En(s,o)&&rt(n,"set",r,s):rt(n,"add",r,s)),a}}function dl(t,e){const n=K(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&rt(t,"delete",e,void 0),r}function hl(t,e){const n=Reflect.has(t,e);return(!Os(e)||!Ko.has(e))&&Ie(t,"has",e),n}function pl(t){return Ie(t,"iterate",U(t)?"length":Ot),Reflect.ownKeys(t)}const Go={get:il,set:ul,deleteProperty:dl,has:hl,ownKeys:pl},gl={get:al,set(t,e){return!0},deleteProperty(t,e){return!0}},ml=de({},Go,{get:ol,set:fl}),Ls=t=>t,Tr=t=>Reflect.getPrototypeOf(t);function Wn(t,e,n=!1,r=!1){t=t.__v_raw;const s=z(t),i=z(e);n||(e!==i&&Ie(s,"get",e),Ie(s,"get",i));const{has:o}=Tr(s),c=r?Ls:n?Bs:In;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function zn(t,e=!1){const n=this.__v_raw,r=z(n),s=z(t);return e||(t!==s&&Ie(r,"has",t),Ie(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Kn(t,e=!1){return t=t.__v_raw,!e&&Ie(z(t),"iterate",Ot),Reflect.get(t,"size",t)}function mi(t){t=z(t);const e=z(this);return Tr(e).has.call(e,t)||(e.add(t),rt(e,"add",t,t)),this}function _i(t,e){e=z(e);const n=z(this),{has:r,get:s}=Tr(n);let i=r.call(n,t);i||(t=z(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?En(e,o)&&rt(n,"set",t,e):rt(n,"add",t,e),this}function vi(t){const e=z(this),{has:n,get:r}=Tr(e);let s=n.call(e,t);s||(t=z(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&rt(e,"delete",t,void 0),i}function yi(){const t=z(this),e=t.size!==0,n=t.clear();return e&&rt(t,"clear",void 0,void 0),n}function qn(t,e){return function(r,s){const i=this,o=i.__v_raw,c=z(o),a=e?Ls:t?Bs:In;return!t&&Ie(c,"iterate",Ot),o.forEach((l,u)=>r.call(s,a(l),a(u),i))}}function Gn(t,e,n){return function(...r){const s=this.__v_raw,i=z(s),o=zt(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),u=n?Ls:e?Bs:In;return!e&&Ie(i,"iterate",a?is:Ot),{next(){const{value:h,done:g}=l.next();return g?{value:h,done:g}:{value:c?[u(h[0]),u(h[1])]:u(h),done:g}},[Symbol.iterator](){return this}}}}function at(t){return function(...e){return t==="delete"?!1:this}}function _l(){const t={get(i){return Wn(this,i)},get size(){return Kn(this)},has:zn,add:mi,set:_i,delete:vi,clear:yi,forEach:qn(!1,!1)},e={get(i){return Wn(this,i,!1,!0)},get size(){return Kn(this)},has:zn,add:mi,set:_i,delete:vi,clear:yi,forEach:qn(!1,!0)},n={get(i){return Wn(this,i,!0)},get size(){return Kn(this,!0)},has(i){return zn.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:qn(!0,!1)},r={get(i){return Wn(this,i,!0,!0)},get size(){return Kn(this,!0)},has(i){return zn.call(this,i,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:qn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Gn(i,!1,!1),n[i]=Gn(i,!0,!1),e[i]=Gn(i,!1,!0),r[i]=Gn(i,!0,!0)}),[t,n,e,r]}const[vl,yl,bl,wl]=_l();function Us(t,e){const n=e?t?wl:bl:t?yl:vl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const El={get:Us(!1,!1)},Il={get:Us(!1,!0)},Tl={get:Us(!0,!1)},Jo=new WeakMap,Yo=new WeakMap,Xo=new WeakMap,Sl=new WeakMap;function Cl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rl(t){return t.__v_skip||!Object.isExtensible(t)?0:Cl(Vc(t))}function Mn(t){return Qt(t)?t:Fs(t,!1,Go,El,Jo)}function Qo(t){return Fs(t,!1,ml,Il,Yo)}function Zo(t){return Fs(t,!0,gl,Tl,Xo)}function Fs(t,e,n,r,s){if(!ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Rl(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function nt(t){return Qt(t)?nt(t.__v_raw):!!(t&&t.__v_isReactive)}function Qt(t){return!!(t&&t.__v_isReadonly)}function lr(t){return!!(t&&t.__v_isShallow)}function ea(t){return nt(t)||Qt(t)}function z(t){const e=t&&t.__v_raw;return e?z(e):t}function Sr(t){return ar(t,"__v_skip",!0),t}const In=t=>ne(t)?Mn(t):t,Bs=t=>ne(t)?Zo(t):t;function ta(t){mt&&De&&(t=z(t),zo(t.dep||(t.dep=Ns())))}function na(t,e){t=z(t);const n=t.dep;n&&os(n)}function ie(t){return!!(t&&t.__v_isRef===!0)}function me(t){return ra(t,!1)}function Pl(t){return ra(t,!0)}function ra(t,e){return ie(t)?t:new Al(t,e)}class Al{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:z(e),this._value=n?e:In(e)}get value(){return ta(this),this._value}set value(e){const n=this.__v_isShallow||lr(e)||Qt(e);e=n?e:z(e),En(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:In(e),na(this))}}function ye(t){return ie(t)?t.value:t}function Ol(t){return $(t)?t():ye(t)}const kl={get:(t,e,n)=>ye(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ie(s)&&!ie(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function sa(t){return nt(t)?t:new Proxy(t,kl)}function xl(t){const e=U(t)?new Array(t.length):{};for(const n in t)e[n]=ia(t,n);return e}class Nl{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return rl(z(this._object),this._key)}}class Dl{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Ml(t,e,n){return ie(t)?t:$(t)?new Dl(t):ne(t)&&arguments.length>1?ia(t,e,n):me(t)}function ia(t,e,n){const r=t[e];return ie(r)?r:new Nl(t,e,n)}class Ll{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Ds(e,()=>{this._dirty||(this._dirty=!0,na(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=z(this);return ta(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ul(t,e,n=!1){let r,s;const i=$(t);return i?(r=t,s=Le):(r=t.get,s=t.set),new Ll(r,s,i||!s,n)}function _t(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Cr(i,e,n)}return s}function Ue(t,e,n,r){if($(t)){const i=_t(t,e,n,r);return i&&Do(i)&&i.catch(o=>{Cr(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ue(t[i],e,n,r));return s}function Cr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=n;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){_t(a,null,10,[t,o,c]);return}}Fl(t,n,s,r)}function Fl(t,e,n,r=!0){console.error(t)}let Tn=!1,as=!1;const ge=[];let We=0;const qt=[];let Qe=null,Rt=0;const oa=Promise.resolve();let $s=null;function Hs(t){const e=$s||oa;return t?e.then(this?t.bind(this):t):e}function Bl(t){let e=We+1,n=ge.length;for(;e<n;){const r=e+n>>>1;Sn(ge[r])<t?e=r+1:n=r}return e}function js(t){(!ge.length||!ge.includes(t,Tn&&t.allowRecurse?We+1:We))&&(t.id==null?ge.push(t):ge.splice(Bl(t.id),0,t),aa())}function aa(){!Tn&&!as&&(as=!0,$s=oa.then(la))}function $l(t){const e=ge.indexOf(t);e>We&&ge.splice(e,1)}function Hl(t){U(t)?qt.push(...t):(!Qe||!Qe.includes(t,t.allowRecurse?Rt+1:Rt))&&qt.push(t),aa()}function bi(t,e=Tn?We+1:0){for(;e<ge.length;e++){const n=ge[e];n&&n.pre&&(ge.splice(e,1),e--,n())}}function ca(t){if(qt.length){const e=[...new Set(qt)];if(qt.length=0,Qe){Qe.push(...e);return}for(Qe=e,Qe.sort((n,r)=>Sn(n)-Sn(r)),Rt=0;Rt<Qe.length;Rt++)Qe[Rt]();Qe=null,Rt=0}}const Sn=t=>t.id==null?1/0:t.id,jl=(t,e)=>{const n=Sn(t)-Sn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function la(t){as=!1,Tn=!0,ge.sort(jl);const e=Le;try{for(We=0;We<ge.length;We++){const n=ge[We];n&&n.active!==!1&&_t(n,null,14)}}finally{We=0,ge.length=0,ca(),Tn=!1,$s=null,(ge.length||qt.length)&&la()}}function Vl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||re;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:g}=r[u]||re;g&&(s=n.map(_=>le(_)?_.trim():_)),h&&(s=n.map(Kc))}let c,a=r[c=Br(e)]||r[c=Br(Ge(e))];!a&&i&&(a=r[c=Br(on(e))]),a&&Ue(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ue(l,t,6,s)}}function ua(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!$(t)){const a=l=>{const u=ua(l,e,!0);u&&(c=!0,de(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(ne(t)&&r.set(t,null),null):(U(i)?i.forEach(a=>o[a]=null):de(o,i),ne(t)&&r.set(t,o),o)}function Rr(t,e){return!t||!br(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,on(e))||K(t,e))}let ke=null,Pr=null;function ur(t){const e=ke;return ke=t,Pr=t&&t.type.__scopeId||null,e}function Wl(t){Pr=t}function zl(){Pr=null}function hn(t,e=ke,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ki(-1);const i=ur(e);let o;try{o=t(...s)}finally{ur(i),r._d&&ki(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Hr(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:c,attrs:a,emit:l,render:u,renderCache:h,data:g,setupState:_,ctx:S,inheritAttrs:P}=t;let L,O;const x=ur(t);try{if(n.shapeFlag&4){const N=s||r;L=Ve(u.call(N,N,h,i,_,g,S)),O=a}else{const N=e;L=Ve(N.length>1?N(i,{attrs:a,slots:c,emit:l}):N(i,null)),O=e.props?a:Kl(a)}}catch(N){_n.length=0,Cr(N,t,1),L=fe(Nt)}let H=L;if(O&&P!==!1){const N=Object.keys(O),{shapeFlag:G}=H;N.length&&G&7&&(o&&N.some(Ps)&&(O=ql(O,o)),H=Zt(H,O))}return n.dirs&&(H=Zt(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),L=H,ur(x),L}const Kl=t=>{let e;for(const n in t)(n==="class"||n==="style"||br(n))&&((e||(e={}))[n]=t[n]);return e},ql=(t,e)=>{const n={};for(const r in t)(!Ps(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Gl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?wi(r,o,l):!!o;if(a&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const g=u[h];if(o[g]!==r[g]&&!Rr(l,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?wi(r,o,l):!0:!!o;return!1}function wi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Rr(n,i))return!0}return!1}function Jl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Yl=t=>t.__isSuspense;function Xl(t,e){e&&e.pendingBranch?U(t)?e.effects.push(...t):e.effects.push(t):Hl(t)}const Jn={};function Gt(t,e,n){return fa(t,e,n)}function fa(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=re){var c;const a=Ho()===((c=ue)==null?void 0:c.scope)?ue:null;let l,u=!1,h=!1;if(ie(t)?(l=()=>t.value,u=lr(t)):nt(t)?(l=()=>t,r=!0):U(t)?(h=!0,u=t.some(N=>nt(N)||lr(N)),l=()=>t.map(N=>{if(ie(N))return N.value;if(nt(N))return Vt(N);if($(N))return _t(N,a,2)})):$(t)?e?l=()=>_t(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return g&&g(),Ue(t,a,3,[_])}:l=Le,e&&r){const N=l;l=()=>Vt(N())}let g,_=N=>{g=x.onStop=()=>{_t(N,a,4)}},S;if(Pn)if(_=Le,e?n&&Ue(e,a,3,[l(),h?[]:void 0,_]):l(),s==="sync"){const N=zu();S=N.__watcherHandles||(N.__watcherHandles=[])}else return Le;let P=h?new Array(t.length).fill(Jn):Jn;const L=()=>{if(x.active)if(e){const N=x.run();(r||u||(h?N.some((G,oe)=>En(G,P[oe])):En(N,P)))&&(g&&g(),Ue(e,a,3,[N,P===Jn?void 0:h&&P[0]===Jn?[]:P,_]),P=N)}else x.run()};L.allowRecurse=!!e;let O;s==="sync"?O=L:s==="post"?O=()=>we(L,a&&a.suspense):(L.pre=!0,a&&(L.id=a.uid),O=()=>js(L));const x=new Ds(l,O);e?n?L():P=x.run():s==="post"?we(x.run.bind(x),a&&a.suspense):x.run();const H=()=>{x.stop(),a&&a.scope&&As(a.scope.effects,x)};return S&&S.push(H),H}function Ql(t,e,n){const r=this.proxy,s=le(t)?t.includes(".")?da(r,t):()=>r[t]:t.bind(r,r);let i;$(e)?i=e:(i=e.handler,n=e);const o=ue;en(this);const c=fa(s,i.bind(r),n);return o?en(o):kt(),c}function da(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Vt(t,e){if(!ne(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ie(t))Vt(t.value,e);else if(U(t))for(let n=0;n<t.length;n++)Vt(t[n],e);else if(No(t)||zt(t))t.forEach(n=>{Vt(n,e)});else if(Lo(t))for(const n in t)Vt(t[n],e);return t}function Tt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(an(),Ue(a,n,8,[t.el,c,t,e]),cn())}}function Lt(t,e){return $(t)?(()=>de({name:t.name},e,{setup:t}))():t}const Zn=t=>!!t.type.__asyncLoader,ha=t=>t.type.__isKeepAlive;function Zl(t,e){pa(t,"a",e)}function eu(t,e){pa(t,"da",e)}function pa(t,e,n=ue){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ar(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ha(s.parent.vnode)&&tu(r,e,n,s),s=s.parent}}function tu(t,e,n,r){const s=Ar(e,t,r,!0);Vs(()=>{As(r[e],s)},n)}function Ar(t,e,n=ue,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;an(),en(n);const c=Ue(e,n,t,o);return kt(),cn(),c});return r?s.unshift(i):s.push(i),i}}const it=t=>(e,n=ue)=>(!Pn||t==="sp")&&Ar(t,(...r)=>e(...r),n),nu=it("bm"),ga=it("m"),ru=it("bu"),su=it("u"),iu=it("bum"),Vs=it("um"),ou=it("sp"),au=it("rtg"),cu=it("rtc");function lu(t,e=ue){Ar("ec",t,e)}const ma="components";function uu(t,e){return du(ma,t,!0,e)||t}const fu=Symbol.for("v-ndc");function du(t,e,n=!0,r=!1){const s=ke||ue;if(s){const i=s.type;if(t===ma){const c=ju(i,!1);if(c&&(c===e||c===Ge(e)||c===Ir(Ge(e))))return i}const o=Ei(s[t]||i[t],e)||Ei(s.appContext[t],e);return!o&&r?i:o}}function Ei(t,e){return t&&(t[e]||t[Ge(e)]||t[Ir(Ge(e))])}function _a(t,e,n,r){let s;const i=n&&n[r];if(U(t)||le(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ne(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i&&i[c]));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,a=o.length;c<a;c++){const l=o[c];s[c]=e(t[l],l,c,i&&i[c])}}else s=[];return n&&(n[r]=s),s}const cs=t=>t?Pa(t)?Gs(t)||t.proxy:cs(t.parent):null,mn=de(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>cs(t.parent),$root:t=>cs(t.root),$emit:t=>t.emit,$options:t=>Ws(t),$forceUpdate:t=>t.f||(t.f=()=>js(t.update)),$nextTick:t=>t.n||(t.n=Hs.bind(t.proxy)),$watch:t=>Ql.bind(t)}),jr=(t,e)=>t!==re&&!t.__isScriptSetup&&K(t,e),hu={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(jr(r,e))return o[e]=1,r[e];if(s!==re&&K(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&K(l,e))return o[e]=3,i[e];if(n!==re&&K(n,e))return o[e]=4,n[e];ls&&(o[e]=0)}}const u=mn[e];let h,g;if(u)return e==="$attrs"&&Ie(t,"get",e),u(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==re&&K(n,e))return o[e]=4,n[e];if(g=a.config.globalProperties,K(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return jr(s,e)?(s[e]=n,!0):r!==re&&K(r,e)?(r[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==re&&K(t,o)||jr(e,o)||(c=i[0])&&K(c,o)||K(r,o)||K(mn,o)||K(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ii(t){return U(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ls=!0;function pu(t){const e=Ws(t),n=t.proxy,r=t.ctx;ls=!1,e.beforeCreate&&Ti(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:u,beforeMount:h,mounted:g,beforeUpdate:_,updated:S,activated:P,deactivated:L,beforeDestroy:O,beforeUnmount:x,destroyed:H,unmounted:N,render:G,renderTracked:oe,renderTriggered:ce,errorCaptured:W,serverPrefetch:j,expose:se,inheritAttrs:he,components:Te,directives:Ae,filters:It}=e;if(l&&gu(l,r,null),o)for(const Z in o){const J=o[Z];$(J)&&(r[Z]=J.bind(n))}if(s){const Z=s.call(n,n);ne(Z)&&(t.data=Mn(Z))}if(ls=!0,i)for(const Z in i){const J=i[Z],Ye=$(J)?J.bind(n,n):$(J.get)?J.get.bind(n,n):Le,ot=!$(J)&&$(J.set)?J.set.bind(n):Le,$e=Re({get:Ye,set:ot});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>$e.value,set:be=>$e.value=be})}if(c)for(const Z in c)va(c[Z],r,n,Z);if(a){const Z=$(a)?a.call(n):a;Reflect.ownKeys(Z).forEach(J=>{er(J,Z[J])})}u&&Ti(u,t,"c");function q(Z,J){U(J)?J.forEach(Ye=>Z(Ye.bind(n))):J&&Z(J.bind(n))}if(q(nu,h),q(ga,g),q(ru,_),q(su,S),q(Zl,P),q(eu,L),q(lu,W),q(cu,oe),q(au,ce),q(iu,x),q(Vs,N),q(ou,j),U(se))if(se.length){const Z=t.exposed||(t.exposed={});se.forEach(J=>{Object.defineProperty(Z,J,{get:()=>n[J],set:Ye=>n[J]=Ye})})}else t.exposed||(t.exposed={});G&&t.render===Le&&(t.render=G),he!=null&&(t.inheritAttrs=he),Te&&(t.components=Te),Ae&&(t.directives=Ae)}function gu(t,e,n=Le){U(t)&&(t=us(t));for(const r in t){const s=t[r];let i;ne(s)?"default"in s?i=Fe(s.from||r,s.default,!0):i=Fe(s.from||r):i=Fe(s),ie(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ti(t,e,n){Ue(U(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function va(t,e,n,r){const s=r.includes(".")?da(n,r):()=>n[r];if(le(t)){const i=e[t];$(i)&&Gt(s,i)}else if($(t))Gt(s,t.bind(n));else if(ne(t))if(U(t))t.forEach(i=>va(i,e,n,r));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&Gt(s,i,t)}}function Ws(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>fr(a,l,o,!0)),fr(a,e,o)),ne(e)&&i.set(e,a),a}function fr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&fr(t,i,n,!0),s&&s.forEach(o=>fr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=mu[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const mu={data:Si,props:Ci,emits:Ci,methods:pn,computed:pn,beforeCreate:ve,created:ve,beforeMount:ve,mounted:ve,beforeUpdate:ve,updated:ve,beforeDestroy:ve,beforeUnmount:ve,destroyed:ve,unmounted:ve,activated:ve,deactivated:ve,errorCaptured:ve,serverPrefetch:ve,components:pn,directives:pn,watch:vu,provide:Si,inject:_u};function Si(t,e){return e?t?function(){return de($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function _u(t,e){return pn(us(t),us(e))}function us(t){if(U(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ve(t,e){return t?[...new Set([].concat(t,e))]:e}function pn(t,e){return t?de(Object.create(null),t,e):e}function Ci(t,e){return t?U(t)&&U(e)?[...new Set([...t,...e])]:de(Object.create(null),Ii(t),Ii(e??{})):e}function vu(t,e){if(!t)return e;if(!e)return t;const n=de(Object.create(null),t);for(const r in e)n[r]=ve(t[r],e[r]);return n}function ya(){return{app:null,config:{isNativeTag:$c,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yu=0;function bu(t,e){return function(r,s=null){$(r)||(r=de({},r)),s!=null&&!ne(s)&&(s=null);const i=ya(),o=new Set;let c=!1;const a=i.app={_uid:yu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ku,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&$(l.install)?(o.add(l),l.install(a,...u)):$(l)&&(o.add(l),l(a,...u))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,u){return u?(i.components[l]=u,a):i.components[l]},directive(l,u){return u?(i.directives[l]=u,a):i.directives[l]},mount(l,u,h){if(!c){const g=fe(r,s);return g.appContext=i,u&&e?e(g,l):t(g,l,h),c=!0,a._container=l,l.__vue_app__=a,Gs(g.component)||g.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,u){return i.provides[l]=u,a},runWithContext(l){Cn=a;try{return l()}finally{Cn=null}}};return a}}let Cn=null;function er(t,e){if(ue){let n=ue.provides;const r=ue.parent&&ue.parent.provides;r===n&&(n=ue.provides=Object.create(r)),n[t]=e}}function Fe(t,e,n=!1){const r=ue||ke;if(r||Cn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Cn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&$(e)?e.call(r&&r.proxy):e}}function wu(){return!!(ue||ke||Cn)}function Eu(t,e,n,r=!1){const s={},i={};ar(i,kr,1),t.propsDefaults=Object.create(null),ba(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Qo(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Iu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=z(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let g=u[h];if(Rr(t.emitsOptions,g))continue;const _=e[g];if(a)if(K(i,g))_!==i[g]&&(i[g]=_,l=!0);else{const S=Ge(g);s[S]=fs(a,c,S,_,t,!1)}else _!==i[g]&&(i[g]=_,l=!0)}}}else{ba(t,e,s,i)&&(l=!0);let u;for(const h in c)(!e||!K(e,h)&&((u=on(h))===h||!K(e,u)))&&(a?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=fs(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!K(e,h))&&(delete i[h],l=!0)}l&&rt(t,"set","$attrs")}function ba(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(Qn(a))continue;const l=e[a];let u;s&&K(s,u=Ge(a))?!i||!i.includes(u)?n[u]=l:(c||(c={}))[u]=l:Rr(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=z(n),l=c||re;for(let u=0;u<i.length;u++){const h=i[u];n[h]=fs(s,a,h,l[h],t,!K(l,h))}}return o}function fs(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=K(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&$(a)){const{propsDefaults:l}=s;n in l?r=l[n]:(en(s),r=l[n]=a.call(null,e),kt())}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===on(n))&&(r=!0))}return r}function wa(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!$(t)){const u=h=>{a=!0;const[g,_]=wa(h,e,!0);de(o,g),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!a)return ne(t)&&r.set(t,Wt),Wt;if(U(i))for(let u=0;u<i.length;u++){const h=Ge(i[u]);Ri(h)&&(o[h]=re)}else if(i)for(const u in i){const h=Ge(u);if(Ri(h)){const g=i[u],_=o[h]=U(g)||$(g)?{type:g}:de({},g);if(_){const S=Oi(Boolean,_.type),P=Oi(String,_.type);_[0]=S>-1,_[1]=P<0||S<P,(S>-1||K(_,"default"))&&c.push(h)}}}const l=[o,c];return ne(t)&&r.set(t,l),l}function Ri(t){return t[0]!=="$"}function Pi(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Ai(t,e){return Pi(t)===Pi(e)}function Oi(t,e){return U(e)?e.findIndex(n=>Ai(n,t)):$(e)&&Ai(e,t)?0:-1}const Ea=t=>t[0]==="_"||t==="$stable",zs=t=>U(t)?t.map(Ve):[Ve(t)],Tu=(t,e,n)=>{if(e._n)return e;const r=hn((...s)=>zs(e(...s)),n);return r._c=!1,r},Ia=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ea(s))continue;const i=t[s];if($(i))e[s]=Tu(s,i,r);else if(i!=null){const o=zs(i);e[s]=()=>o}}},Ta=(t,e)=>{const n=zs(e);t.slots.default=()=>n},Su=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=z(e),ar(e,"_",n)):Ia(e,t.slots={})}else t.slots={},e&&Ta(t,e);ar(t.slots,kr,1)},Cu=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=re;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(de(s,e),!n&&c===1&&delete s._):(i=!e.$stable,Ia(e,s)),o=e}else e&&(Ta(t,e),o={default:1});if(i)for(const c in s)!Ea(c)&&!(c in o)&&delete s[c]};function ds(t,e,n,r,s=!1){if(U(t)){t.forEach((g,_)=>ds(g,e&&(U(e)?e[_]:e),n,r,s));return}if(Zn(r)&&!s)return;const i=r.shapeFlag&4?Gs(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,u=c.refs===re?c.refs={}:c.refs,h=c.setupState;if(l!=null&&l!==a&&(le(l)?(u[l]=null,K(h,l)&&(h[l]=null)):ie(l)&&(l.value=null)),$(a))_t(a,c,12,[o,u]);else{const g=le(a),_=ie(a);if(g||_){const S=()=>{if(t.f){const P=g?K(h,a)?h[a]:u[a]:a.value;s?U(P)&&As(P,i):U(P)?P.includes(i)||P.push(i):g?(u[a]=[i],K(h,a)&&(h[a]=u[a])):(a.value=[i],t.k&&(u[t.k]=a.value))}else g?(u[a]=o,K(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(u[t.k]=o))};o?(S.id=-1,we(S,n)):S()}}}const we=Xl;function Ru(t){return Pu(t)}function Pu(t,e){const n=rs();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:u,parentNode:h,nextSibling:g,setScopeId:_=Le,insertStaticContent:S}=t,P=(f,d,p,m=null,y=null,b=null,C=!1,E=null,I=!!d.dynamicChildren)=>{if(f===d)return;f&&!un(f,d)&&(m=v(f),be(f,y,b,!0),f=null),d.patchFlag===-2&&(I=!1,d.dynamicChildren=null);const{type:w,ref:D,shapeFlag:A}=d;switch(w){case Or:L(f,d,p,m);break;case Nt:O(f,d,p,m);break;case Vr:f==null&&x(d,p,m,C);break;case Ne:Te(f,d,p,m,y,b,C,E,I);break;default:A&1?G(f,d,p,m,y,b,C,E,I):A&6?Ae(f,d,p,m,y,b,C,E,I):(A&64||A&128)&&w.process(f,d,p,m,y,b,C,E,I,T)}D!=null&&y&&ds(D,f&&f.ref,b,d||f,!d)},L=(f,d,p,m)=>{if(f==null)r(d.el=c(d.children),p,m);else{const y=d.el=f.el;d.children!==f.children&&l(y,d.children)}},O=(f,d,p,m)=>{f==null?r(d.el=a(d.children||""),p,m):d.el=f.el},x=(f,d,p,m)=>{[f.el,f.anchor]=S(f.children,d,p,m,f.el,f.anchor)},H=({el:f,anchor:d},p,m)=>{let y;for(;f&&f!==d;)y=g(f),r(f,p,m),f=y;r(d,p,m)},N=({el:f,anchor:d})=>{let p;for(;f&&f!==d;)p=g(f),s(f),f=p;s(d)},G=(f,d,p,m,y,b,C,E,I)=>{C=C||d.type==="svg",f==null?oe(d,p,m,y,b,C,E,I):j(f,d,y,b,C,E,I)},oe=(f,d,p,m,y,b,C,E)=>{let I,w;const{type:D,props:A,shapeFlag:M,transition:F,dirs:V}=f;if(I=f.el=o(f.type,b,A&&A.is,A),M&8?u(I,f.children):M&16&&W(f.children,I,null,m,y,b&&D!=="foreignObject",C,E),V&&Tt(f,null,m,"created"),ce(I,f,f.scopeId,C,m),A){for(const Q in A)Q!=="value"&&!Qn(Q)&&i(I,Q,null,A[Q],b,f.children,m,y,pe);"value"in A&&i(I,"value",null,A.value),(w=A.onVnodeBeforeMount)&&je(w,m,f)}V&&Tt(f,null,m,"beforeMount");const te=(!y||y&&!y.pendingBranch)&&F&&!F.persisted;te&&F.beforeEnter(I),r(I,d,p),((w=A&&A.onVnodeMounted)||te||V)&&we(()=>{w&&je(w,m,f),te&&F.enter(I),V&&Tt(f,null,m,"mounted")},y)},ce=(f,d,p,m,y)=>{if(p&&_(f,p),m)for(let b=0;b<m.length;b++)_(f,m[b]);if(y){let b=y.subTree;if(d===b){const C=y.vnode;ce(f,C,C.scopeId,C.slotScopeIds,y.parent)}}},W=(f,d,p,m,y,b,C,E,I=0)=>{for(let w=I;w<f.length;w++){const D=f[w]=E?ft(f[w]):Ve(f[w]);P(null,D,d,p,m,y,b,C,E)}},j=(f,d,p,m,y,b,C)=>{const E=d.el=f.el;let{patchFlag:I,dynamicChildren:w,dirs:D}=d;I|=f.patchFlag&16;const A=f.props||re,M=d.props||re;let F;p&&St(p,!1),(F=M.onVnodeBeforeUpdate)&&je(F,p,d,f),D&&Tt(d,f,p,"beforeUpdate"),p&&St(p,!0);const V=y&&d.type!=="foreignObject";if(w?se(f.dynamicChildren,w,E,p,m,V,b):C||J(f,d,E,null,p,m,V,b,!1),I>0){if(I&16)he(E,d,A,M,p,m,y);else if(I&2&&A.class!==M.class&&i(E,"class",null,M.class,y),I&4&&i(E,"style",A.style,M.style,y),I&8){const te=d.dynamicProps;for(let Q=0;Q<te.length;Q++){const ae=te[Q],xe=A[ae],Bt=M[ae];(Bt!==xe||ae==="value")&&i(E,ae,xe,Bt,y,f.children,p,m,pe)}}I&1&&f.children!==d.children&&u(E,d.children)}else!C&&w==null&&he(E,d,A,M,p,m,y);((F=M.onVnodeUpdated)||D)&&we(()=>{F&&je(F,p,d,f),D&&Tt(d,f,p,"updated")},m)},se=(f,d,p,m,y,b,C)=>{for(let E=0;E<d.length;E++){const I=f[E],w=d[E],D=I.el&&(I.type===Ne||!un(I,w)||I.shapeFlag&70)?h(I.el):p;P(I,w,D,null,m,y,b,C,!0)}},he=(f,d,p,m,y,b,C)=>{if(p!==m){if(p!==re)for(const E in p)!Qn(E)&&!(E in m)&&i(f,E,p[E],null,C,d.children,y,b,pe);for(const E in m){if(Qn(E))continue;const I=m[E],w=p[E];I!==w&&E!=="value"&&i(f,E,w,I,C,d.children,y,b,pe)}"value"in m&&i(f,"value",p.value,m.value)}},Te=(f,d,p,m,y,b,C,E,I)=>{const w=d.el=f?f.el:c(""),D=d.anchor=f?f.anchor:c("");let{patchFlag:A,dynamicChildren:M,slotScopeIds:F}=d;F&&(E=E?E.concat(F):F),f==null?(r(w,p,m),r(D,p,m),W(d.children,p,D,y,b,C,E,I)):A>0&&A&64&&M&&f.dynamicChildren?(se(f.dynamicChildren,M,p,y,b,C,E),(d.key!=null||y&&d===y.subTree)&&Sa(f,d,!0)):J(f,d,p,D,y,b,C,E,I)},Ae=(f,d,p,m,y,b,C,E,I)=>{d.slotScopeIds=E,f==null?d.shapeFlag&512?y.ctx.activate(d,p,m,C,I):It(d,p,m,y,b,C,I):Oe(f,d,I)},It=(f,d,p,m,y,b,C)=>{const E=f.component=Uu(f,m,y);if(ha(f)&&(E.ctx.renderer=T),Fu(E),E.asyncDep){if(y&&y.registerDep(E,q),!f.el){const I=E.subTree=fe(Nt);O(null,I,d,p)}return}q(E,f,d,p,y,b,C)},Oe=(f,d,p)=>{const m=d.component=f.component;if(Gl(f,d,p))if(m.asyncDep&&!m.asyncResolved){Z(m,d,p);return}else m.next=d,$l(m.update),m.update();else d.el=f.el,m.vnode=d},q=(f,d,p,m,y,b,C)=>{const E=()=>{if(f.isMounted){let{next:D,bu:A,u:M,parent:F,vnode:V}=f,te=D,Q;St(f,!1),D?(D.el=V.el,Z(f,D,C)):D=V,A&&$r(A),(Q=D.props&&D.props.onVnodeBeforeUpdate)&&je(Q,F,D,V),St(f,!0);const ae=Hr(f),xe=f.subTree;f.subTree=ae,P(xe,ae,h(xe.el),v(xe),f,y,b),D.el=ae.el,te===null&&Jl(f,ae.el),M&&we(M,y),(Q=D.props&&D.props.onVnodeUpdated)&&we(()=>je(Q,F,D,V),y)}else{let D;const{el:A,props:M}=d,{bm:F,m:V,parent:te}=f,Q=Zn(d);if(St(f,!1),F&&$r(F),!Q&&(D=M&&M.onVnodeBeforeMount)&&je(D,te,d),St(f,!0),A&&Y){const ae=()=>{f.subTree=Hr(f),Y(A,f.subTree,f,y,null)};Q?d.type.__asyncLoader().then(()=>!f.isUnmounted&&ae()):ae()}else{const ae=f.subTree=Hr(f);P(null,ae,p,m,f,y,b),d.el=ae.el}if(V&&we(V,y),!Q&&(D=M&&M.onVnodeMounted)){const ae=d;we(()=>je(D,te,ae),y)}(d.shapeFlag&256||te&&Zn(te.vnode)&&te.vnode.shapeFlag&256)&&f.a&&we(f.a,y),f.isMounted=!0,d=p=m=null}},I=f.effect=new Ds(E,()=>js(w),f.scope),w=f.update=()=>I.run();w.id=f.uid,St(f,!0),w()},Z=(f,d,p)=>{d.component=f;const m=f.vnode.props;f.vnode=d,f.next=null,Iu(f,d.props,m,p),Cu(f,d.children,p),an(),bi(),cn()},J=(f,d,p,m,y,b,C,E,I=!1)=>{const w=f&&f.children,D=f?f.shapeFlag:0,A=d.children,{patchFlag:M,shapeFlag:F}=d;if(M>0){if(M&128){ot(w,A,p,m,y,b,C,E,I);return}else if(M&256){Ye(w,A,p,m,y,b,C,E,I);return}}F&8?(D&16&&pe(w,y,b),A!==w&&u(p,A)):D&16?F&16?ot(w,A,p,m,y,b,C,E,I):pe(w,y,b,!0):(D&8&&u(p,""),F&16&&W(A,p,m,y,b,C,E,I))},Ye=(f,d,p,m,y,b,C,E,I)=>{f=f||Wt,d=d||Wt;const w=f.length,D=d.length,A=Math.min(w,D);let M;for(M=0;M<A;M++){const F=d[M]=I?ft(d[M]):Ve(d[M]);P(f[M],F,p,null,y,b,C,E,I)}w>D?pe(f,y,b,!0,!1,A):W(d,p,m,y,b,C,E,I,A)},ot=(f,d,p,m,y,b,C,E,I)=>{let w=0;const D=d.length;let A=f.length-1,M=D-1;for(;w<=A&&w<=M;){const F=f[w],V=d[w]=I?ft(d[w]):Ve(d[w]);if(un(F,V))P(F,V,p,null,y,b,C,E,I);else break;w++}for(;w<=A&&w<=M;){const F=f[A],V=d[M]=I?ft(d[M]):Ve(d[M]);if(un(F,V))P(F,V,p,null,y,b,C,E,I);else break;A--,M--}if(w>A){if(w<=M){const F=M+1,V=F<D?d[F].el:m;for(;w<=M;)P(null,d[w]=I?ft(d[w]):Ve(d[w]),p,V,y,b,C,E,I),w++}}else if(w>M)for(;w<=A;)be(f[w],y,b,!0),w++;else{const F=w,V=w,te=new Map;for(w=V;w<=M;w++){const Se=d[w]=I?ft(d[w]):Ve(d[w]);Se.key!=null&&te.set(Se.key,w)}let Q,ae=0;const xe=M-V+1;let Bt=!1,li=0;const ln=new Array(xe);for(w=0;w<xe;w++)ln[w]=0;for(w=F;w<=A;w++){const Se=f[w];if(ae>=xe){be(Se,y,b,!0);continue}let He;if(Se.key!=null)He=te.get(Se.key);else for(Q=V;Q<=M;Q++)if(ln[Q-V]===0&&un(Se,d[Q])){He=Q;break}He===void 0?be(Se,y,b,!0):(ln[He-V]=w+1,He>=li?li=He:Bt=!0,P(Se,d[He],p,null,y,b,C,E,I),ae++)}const ui=Bt?Au(ln):Wt;for(Q=ui.length-1,w=xe-1;w>=0;w--){const Se=V+w,He=d[Se],fi=Se+1<D?d[Se+1].el:m;ln[w]===0?P(null,He,p,fi,y,b,C,E,I):Bt&&(Q<0||w!==ui[Q]?$e(He,p,fi,2):Q--)}}},$e=(f,d,p,m,y=null)=>{const{el:b,type:C,transition:E,children:I,shapeFlag:w}=f;if(w&6){$e(f.component.subTree,d,p,m);return}if(w&128){f.suspense.move(d,p,m);return}if(w&64){C.move(f,d,p,T);return}if(C===Ne){r(b,d,p);for(let A=0;A<I.length;A++)$e(I[A],d,p,m);r(f.anchor,d,p);return}if(C===Vr){H(f,d,p);return}if(m!==2&&w&1&&E)if(m===0)E.beforeEnter(b),r(b,d,p),we(()=>E.enter(b),y);else{const{leave:A,delayLeave:M,afterLeave:F}=E,V=()=>r(b,d,p),te=()=>{A(b,()=>{V(),F&&F()})};M?M(b,V,te):te()}else r(b,d,p)},be=(f,d,p,m=!1,y=!1)=>{const{type:b,props:C,ref:E,children:I,dynamicChildren:w,shapeFlag:D,patchFlag:A,dirs:M}=f;if(E!=null&&ds(E,null,p,f,!0),D&256){d.ctx.deactivate(f);return}const F=D&1&&M,V=!Zn(f);let te;if(V&&(te=C&&C.onVnodeBeforeUnmount)&&je(te,d,f),D&6)Vn(f.component,p,m);else{if(D&128){f.suspense.unmount(p,m);return}F&&Tt(f,null,d,"beforeUnmount"),D&64?f.type.remove(f,d,p,y,T,m):w&&(b!==Ne||A>0&&A&64)?pe(w,d,p,!1,!0):(b===Ne&&A&384||!y&&D&16)&&pe(I,d,p),m&&Ut(f)}(V&&(te=C&&C.onVnodeUnmounted)||F)&&we(()=>{te&&je(te,d,f),F&&Tt(f,null,d,"unmounted")},p)},Ut=f=>{const{type:d,el:p,anchor:m,transition:y}=f;if(d===Ne){Ft(p,m);return}if(d===Vr){N(f);return}const b=()=>{s(p),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(f.shapeFlag&1&&y&&!y.persisted){const{leave:C,delayLeave:E}=y,I=()=>C(p,b);E?E(f.el,b,I):I()}else b()},Ft=(f,d)=>{let p;for(;f!==d;)p=g(f),s(f),f=p;s(d)},Vn=(f,d,p)=>{const{bum:m,scope:y,update:b,subTree:C,um:E}=f;m&&$r(m),y.stop(),b&&(b.active=!1,be(C,f,d,p)),E&&we(E,d),we(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},pe=(f,d,p,m=!1,y=!1,b=0)=>{for(let C=b;C<f.length;C++)be(f[C],d,p,m,y)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),R=(f,d,p)=>{f==null?d._vnode&&be(d._vnode,null,null,!0):P(d._vnode||null,f,d,null,null,null,p),bi(),ca(),d._vnode=f},T={p:P,um:be,m:$e,r:Ut,mt:It,mc:W,pc:J,pbc:se,n:v,o:t};let k,Y;return e&&([k,Y]=e(T)),{render:R,hydrate:k,createApp:bu(R,k)}}function St({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Sa(t,e,n=!1){const r=t.children,s=e.children;if(U(r)&&U(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=ft(s[i]),c.el=o.el),n||Sa(o,c)),c.type===Or&&(c.el=o.el)}}function Au(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Ou=t=>t.__isTeleport,Ne=Symbol.for("v-fgt"),Or=Symbol.for("v-txt"),Nt=Symbol.for("v-cmt"),Vr=Symbol.for("v-stc"),_n=[];let Me=null;function Ee(t=!1){_n.push(Me=t?null:[])}function ku(){_n.pop(),Me=_n[_n.length-1]||null}let Rn=1;function ki(t){Rn+=t}function Ca(t){return t.dynamicChildren=Rn>0?Me||Wt:null,ku(),Rn>0&&Me&&Me.push(t),t}function ze(t,e,n,r,s,i){return Ca(Pe(t,e,n,r,s,i,!0))}function tr(t,e,n,r,s){return Ca(fe(t,e,n,r,s,!0))}function hs(t){return t?t.__v_isVNode===!0:!1}function un(t,e){return t.type===e.type&&t.key===e.key}const kr="__vInternal",Ra=({key:t})=>t??null,nr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?le(t)||ie(t)||$(t)?{i:ke,r:t,k:e,f:!!n}:t:null);function Pe(t,e=null,n=null,r=0,s=null,i=t===Ne?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ra(e),ref:e&&nr(e),scopeId:Pr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ke};return c?(Ks(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=le(n)?8:16),Rn>0&&!o&&Me&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Me.push(a),a}const fe=xu;function xu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===fu)&&(t=Nt),hs(t)){const c=Zt(t,e,!0);return n&&Ks(c,n),Rn>0&&!i&&Me&&(c.shapeFlag&6?Me[Me.indexOf(t)]=c:Me.push(c)),c.patchFlag|=-2,c}if(Vu(t)&&(t=t.__vccOpts),e){e=Nu(e);let{class:c,style:a}=e;c&&!le(c)&&(e.class=Dn(c)),ne(a)&&(ea(a)&&!U(a)&&(a=de({},a)),e.style=xs(a))}const o=le(t)?1:Yl(t)?128:Ou(t)?64:ne(t)?4:$(t)?2:0;return Pe(t,e,n,r,s,o,i,!0)}function Nu(t){return t?ea(t)||kr in t?de({},t):t:null}function Zt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,c=e?Du(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ra(c),ref:e&&e.ref?n&&s?U(s)?s.concat(nr(e)):[s,nr(e)]:nr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ne?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zt(t.ssContent),ssFallback:t.ssFallback&&Zt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function gn(t=" ",e=0){return fe(Or,null,t,e)}function xi(t="",e=!1){return e?(Ee(),tr(Nt,null,t)):fe(Nt,null,t)}function Ve(t){return t==null||typeof t=="boolean"?fe(Nt):U(t)?fe(Ne,null,t.slice()):typeof t=="object"?ft(t):fe(Or,null,String(t))}function ft(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zt(t)}function Ks(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(U(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ks(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(kr in e)?e._ctx=ke:s===3&&ke&&(ke.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:ke},n=32):(e=String(e),r&64?(n=16,e=[gn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Du(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Dn([e.class,r.class]));else if(s==="style")e.style=xs([e.style,r.style]);else if(br(s)){const i=e[s],o=r[s];o&&i!==o&&!(U(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function je(t,e,n,r=null){Ue(t,e,7,[n,r])}const Mu=ya();let Lu=0;function Uu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Mu,i={uid:Lu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wa(r,s),emitsOptions:ua(r,s),emit:null,emitted:null,propsDefaults:re,inheritAttrs:r.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Vl.bind(null,i),t.ce&&t.ce(i),i}let ue=null,qs,$t,Ni="__VUE_INSTANCE_SETTERS__";($t=rs()[Ni])||($t=rs()[Ni]=[]),$t.push(t=>ue=t),qs=t=>{$t.length>1?$t.forEach(e=>e(t)):$t[0](t)};const en=t=>{qs(t),t.scope.on()},kt=()=>{ue&&ue.scope.off(),qs(null)};function Pa(t){return t.vnode.shapeFlag&4}let Pn=!1;function Fu(t,e=!1){Pn=e;const{props:n,children:r}=t.vnode,s=Pa(t);Eu(t,n,s,e),Su(t,r);const i=s?Bu(t,e):void 0;return Pn=!1,i}function Bu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Sr(new Proxy(t.ctx,hu));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Hu(t):null;en(t),an();const i=_t(r,t,0,[t.props,s]);if(cn(),kt(),Do(i)){if(i.then(kt,kt),e)return i.then(o=>{Di(t,o,e)}).catch(o=>{Cr(o,t,0)});t.asyncDep=i}else Di(t,i,e)}else Aa(t,e)}function Di(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ne(e)&&(t.setupState=sa(e)),Aa(t,n)}let Mi;function Aa(t,e,n){const r=t.type;if(!t.render){if(!e&&Mi&&!r.render){const s=r.template||Ws(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=de(de({isCustomElement:i,delimiters:c},o),a);r.render=Mi(s,l)}}t.render=r.render||Le}en(t),an(),pu(t),cn(),kt()}function $u(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ie(t,"get","$attrs"),e[n]}}))}function Hu(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return $u(t)},slots:t.slots,emit:t.emit,expose:e}}function Gs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(sa(Sr(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in mn)return mn[n](t)},has(e,n){return n in e||n in mn}}))}function ju(t,e=!0){return $(t)?t.displayName||t.name:t.name||e&&t.__name}function Vu(t){return $(t)&&"__vccOpts"in t}const Re=(t,e)=>Ul(t,e,Pn);function Oa(t,e,n){const r=arguments.length;return r===2?ne(e)&&!U(e)?hs(e)?fe(t,null,[e]):fe(t,e):fe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&hs(n)&&(n=[n]),fe(t,e,n))}const Wu=Symbol.for("v-scx"),zu=()=>Fe(Wu),Ku="3.3.4",qu="http://www.w3.org/2000/svg",Pt=typeof document<"u"?document:null,Li=Pt&&Pt.createElement("template"),Gu={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Pt.createElementNS(qu,t):Pt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Pt.createTextNode(t),createComment:t=>Pt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Li.innerHTML=r?`<svg>${t}</svg>`:t;const c=Li.content;if(r){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Ju(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Yu(t,e,n){const r=t.style,s=le(n);if(n&&!s){if(e&&!le(e))for(const i in e)n[i]==null&&ps(r,i,"");for(const i in n)ps(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ui=/\s*!important$/;function ps(t,e,n){if(U(n))n.forEach(r=>ps(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Xu(t,e);Ui.test(n)?t.setProperty(on(r),n.replace(Ui,""),"important"):t[r]=n}}const Fi=["Webkit","Moz","ms"],Wr={};function Xu(t,e){const n=Wr[e];if(n)return n;let r=Ge(e);if(r!=="filter"&&r in t)return Wr[e]=r;r=Ir(r);for(let s=0;s<Fi.length;s++){const i=Fi[s]+r;if(i in t)return Wr[e]=i}return e}const Bi="http://www.w3.org/1999/xlink";function Qu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Bi,e.slice(6,e.length)):t.setAttributeNS(Bi,e,n);else{const i=Qc(e);n==null||i&&!Uo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Zu(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){t._value=n;const l=c==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Uo(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ef(t,e,n,r){t.addEventListener(e,n,r)}function tf(t,e,n,r){t.removeEventListener(e,n,r)}function nf(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=rf(e);if(r){const l=i[e]=af(r,s);ef(t,c,l,a)}else o&&(tf(t,c,o,a),i[e]=void 0)}}const $i=/(?:Once|Passive|Capture)$/;function rf(t){let e;if($i.test(t)){e={};let r;for(;r=t.match($i);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):on(t.slice(2)),e]}let zr=0;const sf=Promise.resolve(),of=()=>zr||(sf.then(()=>zr=0),zr=Date.now());function af(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ue(cf(r,n.value),e,5,[r])};return n.value=t,n.attached=of(),n}function cf(t,e){if(U(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Hi=/^on[a-z]/,lf=(t,e,n,r,s=!1,i,o,c,a)=>{e==="class"?Ju(t,r,s):e==="style"?Yu(t,n,r):br(e)?Ps(e)||nf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):uf(t,e,r,s))?Zu(t,e,r,i,o,c,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Qu(t,e,r,s))};function uf(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Hi.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Hi.test(e)&&le(n)?!1:e in t}const ff=["ctrl","shift","alt","meta"],df={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ff.some(n=>t[`${n}Key`]&&!e.includes(n))},Lm=(t,e)=>(n,...r)=>{for(let s=0;s<e.length;s++){const i=df[e[s]];if(i&&i(n,e))return}return t(n,...r)},hf=de({patchProp:lf},Gu);let ji;function pf(){return ji||(ji=Ru(hf))}const gf=(...t)=>{const e=pf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=mf(r);if(!s)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function mf(t){return le(t)?document.querySelector(t):t}var _f=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let ka;const xr=t=>ka=t,xa=Symbol();function gs(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var vn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(vn||(vn={}));function vf(){const t=$o(!0),e=t.run(()=>me({}));let n=[],r=[];const s=Sr({install(i){xr(s),s._a=i,i.provide(xa,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!_f?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Na=()=>{};function Vi(t,e,n,r=Na){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Ho()&&el(s),s}function Ht(t,...e){t.slice().forEach(n=>{n(...e)})}const yf=t=>t();function ms(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];gs(s)&&gs(r)&&t.hasOwnProperty(n)&&!ie(r)&&!nt(r)?t[n]=ms(s,r):t[n]=r}return t}const bf=Symbol();function wf(t){return!gs(t)||!t.hasOwnProperty(bf)}const{assign:ut}=Object;function Ef(t){return!!(ie(t)&&t.effect)}function If(t,e,n,r){const{state:s,actions:i,getters:o}=e,c=n.state.value[t];let a;function l(){c||(n.state.value[t]=s?s():{});const u=xl(n.state.value[t]);return ut(u,i,Object.keys(o||{}).reduce((h,g)=>(h[g]=Sr(Re(()=>{xr(n);const _=n._s.get(t);return o[g].call(_,_)})),h),{}))}return a=Da(t,l,e,n,r,!0),a}function Da(t,e,n={},r,s,i){let o;const c=ut({actions:{}},n),a={deep:!0};let l,u,h=[],g=[],_;const S=r.state.value[t];!i&&!S&&(r.state.value[t]={}),me({});let P;function L(W){let j;l=u=!1,typeof W=="function"?(W(r.state.value[t]),j={type:vn.patchFunction,storeId:t,events:_}):(ms(r.state.value[t],W),j={type:vn.patchObject,payload:W,storeId:t,events:_});const se=P=Symbol();Hs().then(()=>{P===se&&(l=!0)}),u=!0,Ht(h,j,r.state.value[t])}const O=i?function(){const{state:j}=n,se=j?j():{};this.$patch(he=>{ut(he,se)})}:Na;function x(){o.stop(),h=[],g=[],r._s.delete(t)}function H(W,j){return function(){xr(r);const se=Array.from(arguments),he=[],Te=[];function Ae(q){he.push(q)}function It(q){Te.push(q)}Ht(g,{args:se,name:W,store:G,after:Ae,onError:It});let Oe;try{Oe=j.apply(this&&this.$id===t?this:G,se)}catch(q){throw Ht(Te,q),q}return Oe instanceof Promise?Oe.then(q=>(Ht(he,q),q)).catch(q=>(Ht(Te,q),Promise.reject(q))):(Ht(he,Oe),Oe)}}const N={_p:r,$id:t,$onAction:Vi.bind(null,g),$patch:L,$reset:O,$subscribe(W,j={}){const se=Vi(h,W,j.detached,()=>he()),he=o.run(()=>Gt(()=>r.state.value[t],Te=>{(j.flush==="sync"?u:l)&&W({storeId:t,type:vn.direct,events:_},Te)},ut({},a,j)));return se},$dispose:x},G=Mn(N);r._s.set(t,G);const oe=r._a&&r._a.runWithContext||yf,ce=r._e.run(()=>(o=$o(),oe(()=>o.run(e))));for(const W in ce){const j=ce[W];if(ie(j)&&!Ef(j)||nt(j))i||(S&&wf(j)&&(ie(j)?j.value=S[W]:ms(j,S[W])),r.state.value[t][W]=j);else if(typeof j=="function"){const se=H(W,j);ce[W]=se,c.actions[W]=j}}return ut(G,ce),ut(z(G),ce),Object.defineProperty(G,"$state",{get:()=>r.state.value[t],set:W=>{L(j=>{ut(j,W)})}}),r._p.forEach(W=>{ut(G,o.run(()=>W({store:G,app:r._a,pinia:r,options:c})))}),S&&i&&n.hydrate&&n.hydrate(G.$state,S),l=!0,u=!0,G}function Ma(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(c,a){const l=wu();return c=c||(l?Fe(xa,null):null),c&&xr(c),c=ka,c._s.has(r)||(i?Da(r,e,s,c):If(r,s,c)),c._s.get(r)}return o.$id=r,o}function Js(t){{t=z(t);const e={};for(const n in t){const r=t[n];(ie(r)||nt(r))&&(e[n]=Ml(t,n))}return e}}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const jt=typeof window<"u";function Tf(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const X=Object.assign;function Kr(t,e){const n={};for(const r in e){const s=e[r];n[r]=Be(s)?s.map(t):t(s)}return n}const yn=()=>{},Be=Array.isArray,Sf=/\/$/,Cf=t=>t.replace(Sf,"");function qr(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Of(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Rf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Wi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Pf(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&tn(e.matched[r],n.matched[s])&&La(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function tn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function La(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Af(t[n],e[n]))return!1;return!0}function Af(t,e){return Be(t)?zi(t,e):Be(e)?zi(e,t):t===e}function zi(t,e){return Be(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Of(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var An;(function(t){t.pop="pop",t.push="push"})(An||(An={}));var bn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(bn||(bn={}));function kf(t){if(!t)if(jt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Cf(t)}const xf=/^[^#]+#/;function Nf(t,e){return t.replace(xf,"#")+e}function Df(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Nr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Mf(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Df(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ki(t,e){return(history.state?history.state.position-e:-1)+t}const _s=new Map;function Lf(t,e){_s.set(t,e)}function Uf(t){const e=_s.get(t);return _s.delete(t),e}let Ff=()=>location.protocol+"//"+location.host;function Ua(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),Wi(a,"")}return Wi(n,t)+r+s}function Bf(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const _=Ua(t,location),S=n.value,P=e.value;let L=0;if(g){if(n.value=_,e.value=g,o&&o===S){o=null;return}L=P?g.position-P.position:0}else r(_);s.forEach(O=>{O(n.value,S,{delta:L,type:An.pop,direction:L?L>0?bn.forward:bn.back:bn.unknown})})};function a(){o=n.value}function l(g){s.push(g);const _=()=>{const S=s.indexOf(g);S>-1&&s.splice(S,1)};return i.push(_),_}function u(){const{history:g}=window;g.state&&g.replaceState(X({},g.state,{scroll:Nr()}),"")}function h(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:l,destroy:h}}function qi(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Nr():null}}function $f(t){const{history:e,location:n}=window,r={value:Ua(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,u){const h=t.indexOf("#"),g=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:Ff()+t+a;try{e[u?"replaceState":"pushState"](l,"",g),s.value=l}catch(_){console.error(_),n[u?"replace":"assign"](g)}}function o(a,l){const u=X({},e.state,qi(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,u,!0),r.value=a}function c(a,l){const u=X({},s.value,e.state,{forward:a,scroll:Nr()});i(u.current,u,!0);const h=X({},qi(r.value,a,null),{position:u.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function Hf(t){t=kf(t);const e=$f(t),n=Bf(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=X({location:"",base:t,go:r,createHref:Nf.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function jf(t){return typeof t=="string"||t&&typeof t=="object"}function Fa(t){return typeof t=="string"||typeof t=="symbol"}const ct={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ba=Symbol("");var Gi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Gi||(Gi={}));function nn(t,e){return X(new Error,{type:t,[Ba]:!0},e)}function Xe(t,e){return t instanceof Error&&Ba in t&&(e==null||!!(t.type&e))}const Ji="[^/]+?",Vf={sensitive:!1,strict:!1,start:!0,end:!0},Wf=/[.+*?^${}()[\]/\\]/g;function zf(t,e){const n=X({},Vf,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const g=l[h];let _=40+(n.sensitive?.25:0);if(g.type===0)h||(s+="/"),s+=g.value.replace(Wf,"\\$&"),_+=40;else if(g.type===1){const{value:S,repeatable:P,optional:L,regexp:O}=g;i.push({name:S,repeatable:P,optional:L});const x=O||Ji;if(x!==Ji){_+=10;try{new RegExp(`(${x})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${S}" (${x}): `+N.message)}}let H=P?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;h||(H=L&&l.length<2?`(?:/${H})`:"/"+H),L&&(H+="?"),s+=H,_+=20,L&&(_+=-8),P&&(_+=-20),x===".*"&&(_+=-50)}u.push(_)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const u=l.match(o),h={};if(!u)return null;for(let g=1;g<u.length;g++){const _=u[g]||"",S=i[g-1];h[S.name]=_&&S.repeatable?_.split("/"):_}return h}function a(l){let u="",h=!1;for(const g of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const _ of g)if(_.type===0)u+=_.value;else if(_.type===1){const{value:S,repeatable:P,optional:L}=_,O=S in l?l[S]:"";if(Be(O)&&!P)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const x=Be(O)?O.join("/"):O;if(!x)if(L)g.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${S}"`);u+=x}}return u||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function Kf(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function qf(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Kf(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Yi(r))return 1;if(Yi(s))return-1}return s.length-r.length}function Yi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Gf={type:0,value:""},Jf=/[a-zA-Z0-9_]/;function Yf(t){if(!t)return[[]];if(t==="/")return[[Gf]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function g(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):g();break;case 4:g(),n=r;break;case 1:a==="("?n=2:Jf.test(a)?g():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Xf(t,e,n){const r=zf(Yf(t.path),n),s=X(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Qf(t,e){const n=[],r=new Map;e=Zi({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,g){const _=!g,S=Zf(u);S.aliasOf=g&&g.record;const P=Zi(e,u),L=[S];if("alias"in u){const H=typeof u.alias=="string"?[u.alias]:u.alias;for(const N of H)L.push(X({},S,{components:g?g.record.components:S.components,path:N,aliasOf:g?g.record:S}))}let O,x;for(const H of L){const{path:N}=H;if(h&&N[0]!=="/"){const G=h.record.path,oe=G[G.length-1]==="/"?"":"/";H.path=h.record.path+(N&&oe+N)}if(O=Xf(H,h,P),g?g.alias.push(O):(x=x||O,x!==O&&x.alias.push(O),_&&u.name&&!Qi(O)&&o(u.name)),S.children){const G=S.children;for(let oe=0;oe<G.length;oe++)i(G[oe],O,g&&g.children[oe])}g=g||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&a(O)}return x?()=>{o(x)}:yn}function o(u){if(Fa(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function c(){return n}function a(u){let h=0;for(;h<n.length&&qf(u,n[h])>=0&&(u.record.path!==n[h].record.path||!$a(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Qi(u)&&r.set(u.record.name,u)}function l(u,h){let g,_={},S,P;if("name"in u&&u.name){if(g=r.get(u.name),!g)throw nn(1,{location:u});P=g.record.name,_=X(Xi(h.params,g.keys.filter(x=>!x.optional).map(x=>x.name)),u.params&&Xi(u.params,g.keys.map(x=>x.name))),S=g.stringify(_)}else if("path"in u)S=u.path,g=n.find(x=>x.re.test(S)),g&&(_=g.parse(S),P=g.record.name);else{if(g=h.name?r.get(h.name):n.find(x=>x.re.test(h.path)),!g)throw nn(1,{location:u,currentLocation:h});P=g.record.name,_=X({},h.params,u.params),S=g.stringify(_)}const L=[];let O=g;for(;O;)L.unshift(O.record),O=O.parent;return{name:P,path:S,params:_,matched:L,meta:td(L)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function Xi(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Zf(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ed(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ed(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Qi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function td(t){return t.reduce((e,n)=>X(e,n.meta),{})}function Zi(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function $a(t,e){return e.children.some(n=>n===t||$a(t,n))}const Ha=/#/g,nd=/&/g,rd=/\//g,sd=/=/g,id=/\?/g,ja=/\+/g,od=/%5B/g,ad=/%5D/g,Va=/%5E/g,cd=/%60/g,Wa=/%7B/g,ld=/%7C/g,za=/%7D/g,ud=/%20/g;function Ys(t){return encodeURI(""+t).replace(ld,"|").replace(od,"[").replace(ad,"]")}function fd(t){return Ys(t).replace(Wa,"{").replace(za,"}").replace(Va,"^")}function vs(t){return Ys(t).replace(ja,"%2B").replace(ud,"+").replace(Ha,"%23").replace(nd,"%26").replace(cd,"`").replace(Wa,"{").replace(za,"}").replace(Va,"^")}function dd(t){return vs(t).replace(sd,"%3D")}function hd(t){return Ys(t).replace(Ha,"%23").replace(id,"%3F")}function pd(t){return t==null?"":hd(t).replace(rd,"%2F")}function dr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function gd(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ja," "),o=i.indexOf("="),c=dr(o<0?i:i.slice(0,o)),a=o<0?null:dr(i.slice(o+1));if(c in e){let l=e[c];Be(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function eo(t){let e="";for(let n in t){const r=t[n];if(n=dd(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Be(r)?r.map(i=>i&&vs(i)):[r&&vs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function md(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Be(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const _d=Symbol(""),to=Symbol(""),Dr=Symbol(""),Ka=Symbol(""),ys=Symbol("");function fn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function dt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const a=h=>{h===!1?c(nn(4,{from:n,to:e})):h instanceof Error?c(h):jf(h)?c(nn(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,a);let u=Promise.resolve(l);t.length<3&&(u=u.then(a)),u.catch(h=>c(h))})}function Gr(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let c=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(vd(c)){const l=(c.__vccOpts||c)[e];l&&s.push(dt(l,n,r,i,o))}else{let a=c();s.push(()=>a.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Tf(l)?l.default:l;i.components[o]=u;const g=(u.__vccOpts||u)[e];return g&&dt(g,n,r,i,o)()}))}}return s}function vd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function no(t){const e=Fe(Dr),n=Fe(Ka),r=Re(()=>e.resolve(ye(t.to))),s=Re(()=>{const{matched:a}=r.value,{length:l}=a,u=a[l-1],h=n.matched;if(!u||!h.length)return-1;const g=h.findIndex(tn.bind(null,u));if(g>-1)return g;const _=ro(a[l-2]);return l>1&&ro(u)===_&&h[h.length-1].path!==_?h.findIndex(tn.bind(null,a[l-2])):g}),i=Re(()=>s.value>-1&&Ed(n.params,r.value.params)),o=Re(()=>s.value>-1&&s.value===n.matched.length-1&&La(n.params,r.value.params));function c(a={}){return wd(a)?e[ye(t.replace)?"replace":"push"](ye(t.to)).catch(yn):Promise.resolve()}return{route:r,href:Re(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const yd=Lt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:no,setup(t,{slots:e}){const n=Mn(no(t)),{options:r}=Fe(Dr),s=Re(()=>({[so(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[so(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Oa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),bd=yd;function wd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ed(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Be(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function ro(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const so=(t,e,n)=>t??e??n,Id=Lt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Fe(ys),s=Re(()=>t.route||r.value),i=Fe(to,0),o=Re(()=>{let l=ye(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),c=Re(()=>s.value.matched[o.value]);er(to,Re(()=>o.value+1)),er(_d,c),er(ys,s);const a=me();return Gt(()=>[a.value,c.value,t.name],([l,u,h],[g,_,S])=>{u&&(u.instances[h]=l,_&&_!==u&&l&&l===g&&(u.leaveGuards.size||(u.leaveGuards=_.leaveGuards),u.updateGuards.size||(u.updateGuards=_.updateGuards))),l&&u&&(!_||!tn(u,_)||!g)&&(u.enterCallbacks[h]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=c.value,g=h&&h.components[u];if(!g)return io(n.default,{Component:g,route:l});const _=h.props[u],S=_?_===!0?l.params:typeof _=="function"?_(l):_:null,L=Oa(g,X({},S,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[u]=null)},ref:a}));return io(n.default,{Component:L,route:l})||L}}});function io(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const qa=Id;function Td(t){const e=Qf(t.routes,t),n=t.parseQuery||gd,r=t.stringifyQuery||eo,s=t.history,i=fn(),o=fn(),c=fn(),a=Pl(ct);let l=ct;jt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Kr.bind(null,v=>""+v),h=Kr.bind(null,pd),g=Kr.bind(null,dr);function _(v,R){let T,k;return Fa(v)?(T=e.getRecordMatcher(v),k=R):k=v,e.addRoute(k,T)}function S(v){const R=e.getRecordMatcher(v);R&&e.removeRoute(R)}function P(){return e.getRoutes().map(v=>v.record)}function L(v){return!!e.getRecordMatcher(v)}function O(v,R){if(R=X({},R||a.value),typeof v=="string"){const p=qr(n,v,R.path),m=e.resolve({path:p.path},R),y=s.createHref(p.fullPath);return X(p,m,{params:g(m.params),hash:dr(p.hash),redirectedFrom:void 0,href:y})}let T;if("path"in v)T=X({},v,{path:qr(n,v.path,R.path).path});else{const p=X({},v.params);for(const m in p)p[m]==null&&delete p[m];T=X({},v,{params:h(p)}),R.params=h(R.params)}const k=e.resolve(T,R),Y=v.hash||"";k.params=u(g(k.params));const f=Rf(r,X({},v,{hash:fd(Y),path:k.path})),d=s.createHref(f);return X({fullPath:f,hash:Y,query:r===eo?md(v.query):v.query||{}},k,{redirectedFrom:void 0,href:d})}function x(v){return typeof v=="string"?qr(n,v,a.value.path):X({},v)}function H(v,R){if(l!==v)return nn(8,{from:R,to:v})}function N(v){return ce(v)}function G(v){return N(X(x(v),{replace:!0}))}function oe(v){const R=v.matched[v.matched.length-1];if(R&&R.redirect){const{redirect:T}=R;let k=typeof T=="function"?T(v):T;return typeof k=="string"&&(k=k.includes("?")||k.includes("#")?k=x(k):{path:k},k.params={}),X({query:v.query,hash:v.hash,params:"path"in k?{}:v.params},k)}}function ce(v,R){const T=l=O(v),k=a.value,Y=v.state,f=v.force,d=v.replace===!0,p=oe(T);if(p)return ce(X(x(p),{state:typeof p=="object"?X({},Y,p.state):Y,force:f,replace:d}),R||T);const m=T;m.redirectedFrom=R;let y;return!f&&Pf(r,k,T)&&(y=nn(16,{to:m,from:k}),$e(k,k,!0,!1)),(y?Promise.resolve(y):se(m,k)).catch(b=>Xe(b)?Xe(b,2)?b:ot(b):J(b,m,k)).then(b=>{if(b){if(Xe(b,2))return ce(X({replace:d},x(b.to),{state:typeof b.to=="object"?X({},Y,b.to.state):Y,force:f}),R||m)}else b=Te(m,k,!0,d,Y);return he(m,k,b),b})}function W(v,R){const T=H(v,R);return T?Promise.reject(T):Promise.resolve()}function j(v){const R=Ft.values().next().value;return R&&typeof R.runWithContext=="function"?R.runWithContext(v):v()}function se(v,R){let T;const[k,Y,f]=Sd(v,R);T=Gr(k.reverse(),"beforeRouteLeave",v,R);for(const p of k)p.leaveGuards.forEach(m=>{T.push(dt(m,v,R))});const d=W.bind(null,v,R);return T.push(d),pe(T).then(()=>{T=[];for(const p of i.list())T.push(dt(p,v,R));return T.push(d),pe(T)}).then(()=>{T=Gr(Y,"beforeRouteUpdate",v,R);for(const p of Y)p.updateGuards.forEach(m=>{T.push(dt(m,v,R))});return T.push(d),pe(T)}).then(()=>{T=[];for(const p of f)if(p.beforeEnter)if(Be(p.beforeEnter))for(const m of p.beforeEnter)T.push(dt(m,v,R));else T.push(dt(p.beforeEnter,v,R));return T.push(d),pe(T)}).then(()=>(v.matched.forEach(p=>p.enterCallbacks={}),T=Gr(f,"beforeRouteEnter",v,R),T.push(d),pe(T))).then(()=>{T=[];for(const p of o.list())T.push(dt(p,v,R));return T.push(d),pe(T)}).catch(p=>Xe(p,8)?p:Promise.reject(p))}function he(v,R,T){c.list().forEach(k=>j(()=>k(v,R,T)))}function Te(v,R,T,k,Y){const f=H(v,R);if(f)return f;const d=R===ct,p=jt?history.state:{};T&&(k||d?s.replace(v.fullPath,X({scroll:d&&p&&p.scroll},Y)):s.push(v.fullPath,Y)),a.value=v,$e(v,R,T,d),ot()}let Ae;function It(){Ae||(Ae=s.listen((v,R,T)=>{if(!Vn.listening)return;const k=O(v),Y=oe(k);if(Y){ce(X(Y,{replace:!0}),k).catch(yn);return}l=k;const f=a.value;jt&&Lf(Ki(f.fullPath,T.delta),Nr()),se(k,f).catch(d=>Xe(d,12)?d:Xe(d,2)?(ce(d.to,k).then(p=>{Xe(p,20)&&!T.delta&&T.type===An.pop&&s.go(-1,!1)}).catch(yn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),J(d,k,f))).then(d=>{d=d||Te(k,f,!1),d&&(T.delta&&!Xe(d,8)?s.go(-T.delta,!1):T.type===An.pop&&Xe(d,20)&&s.go(-1,!1)),he(k,f,d)}).catch(yn)}))}let Oe=fn(),q=fn(),Z;function J(v,R,T){ot(v);const k=q.list();return k.length?k.forEach(Y=>Y(v,R,T)):console.error(v),Promise.reject(v)}function Ye(){return Z&&a.value!==ct?Promise.resolve():new Promise((v,R)=>{Oe.add([v,R])})}function ot(v){return Z||(Z=!v,It(),Oe.list().forEach(([R,T])=>v?T(v):R()),Oe.reset()),v}function $e(v,R,T,k){const{scrollBehavior:Y}=t;if(!jt||!Y)return Promise.resolve();const f=!T&&Uf(Ki(v.fullPath,0))||(k||!T)&&history.state&&history.state.scroll||null;return Hs().then(()=>Y(v,R,f)).then(d=>d&&Mf(d)).catch(d=>J(d,v,R))}const be=v=>s.go(v);let Ut;const Ft=new Set,Vn={currentRoute:a,listening:!0,addRoute:_,removeRoute:S,hasRoute:L,getRoutes:P,resolve:O,options:t,push:N,replace:G,go:be,back:()=>be(-1),forward:()=>be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:q.add,isReady:Ye,install(v){const R=this;v.component("RouterLink",bd),v.component("RouterView",qa),v.config.globalProperties.$router=R,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>ye(a)}),jt&&!Ut&&a.value===ct&&(Ut=!0,N(s.location).catch(Y=>{}));const T={};for(const Y in ct)Object.defineProperty(T,Y,{get:()=>a.value[Y],enumerable:!0});v.provide(Dr,R),v.provide(Ka,Qo(T)),v.provide(ys,a);const k=v.unmount;Ft.add(v),v.unmount=function(){Ft.delete(v),Ft.size<1&&(l=ct,Ae&&Ae(),Ae=null,a.value=ct,Ut=!1,Z=!1),k()}}};function pe(v){return v.reduce((R,T)=>R.then(()=>j(T)),Promise.resolve())}return Vn}function Sd(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>tn(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>tn(l,a))||s.push(a))}return[n,r,s]}function Um(){return Fe(Dr)}/**
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
 */const Ga=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Cd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ja={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,u=i>>2,h=(i&3)<<4|c>>4;let g=(c&15)<<2|l>>6,_=l&63;a||(_=64,o||(g=64)),r.push(n[u],n[h],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ga(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Cd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw new Rd;const g=i<<2|c>>4;if(r.push(g),l!==64){const _=c<<4&240|l>>2;if(r.push(_),h!==64){const S=l<<6&192|h;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Rd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pd=function(t){const e=Ga(t);return Ja.encodeByteArray(e,!0)},Ya=function(t){return Pd(t).replace(/\./g,"")},Xa=function(t){try{return Ja.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ad(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Od=()=>Ad().__FIREBASE_DEFAULTS__,kd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xa(t[1]);return e&&JSON.parse(e)},Xs=()=>{try{return Od()||kd()||xd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Nd=t=>{var e,n;return(n=(e=Xs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Qa=()=>{var t;return(t=Xs())===null||t===void 0?void 0:t.config},Za=t=>{var e;return(e=Xs())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Dd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _e(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Md(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_e())}function Ld(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ud(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fd(){const t=_e();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Bd(){try{return typeof indexedDB=="object"}catch{return!1}}function $d(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Hd="FirebaseError";class wt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Hd,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ln.prototype.create)}}class Ln{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?jd(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new wt(s,c,r)}}function jd(t,e){return t.replace(Vd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Vd=/\{\$([^}]+)}/g;function Wd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(oo(i)&&oo(o)){if(!hr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function oo(t){return t!==null&&typeof t=="object"}/**
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
 */function Un(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zd(t,e){const n=new Kd(t,e);return n.subscribe.bind(n)}class Kd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Jr),s.error===void 0&&(s.error=Jr),s.complete===void 0&&(s.complete=Jr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jr(){}/**
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
 */function Et(t){return t&&t._delegate?t._delegate:t}class rn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ct="[DEFAULT]";/**
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
 */class Gd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Dd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yd(e))try{this.getOrInitializeService({instanceIdentifier:Ct})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ct){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ct){return this.instances.has(e)}getOptions(e=Ct){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Jd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ct){return this.component?this.component.multipleInstances?e:Ct:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jd(t){return t===Ct?void 0:t}function Yd(t){return t.instantiationMode==="EAGER"}/**
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
 */class Xd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Gd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const Qd={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Zd=ee.INFO,eh={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},th=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=eh[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ec{constructor(e){this.name=e,this._logLevel=Zd,this._logHandler=th,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const nh=(t,e)=>e.some(n=>t instanceof n);let ao,co;function rh(){return ao||(ao=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sh(){return co||(co=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tc=new WeakMap,bs=new WeakMap,nc=new WeakMap,Yr=new WeakMap,Qs=new WeakMap;function ih(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(vt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tc.set(n,t)}).catch(()=>{}),Qs.set(e,t),e}function oh(t){if(bs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});bs.set(t,e)}let ws={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ah(t){ws=t(ws)}function ch(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xr(this),e,...n);return nc.set(r,e.sort?e.sort():[e]),vt(r)}:sh().includes(t)?function(...e){return t.apply(Xr(this),e),vt(tc.get(this))}:function(...e){return vt(t.apply(Xr(this),e))}}function lh(t){return typeof t=="function"?ch(t):(t instanceof IDBTransaction&&oh(t),nh(t,rh())?new Proxy(t,ws):t)}function vt(t){if(t instanceof IDBRequest)return ih(t);if(Yr.has(t))return Yr.get(t);const e=lh(t);return e!==t&&(Yr.set(t,e),Qs.set(e,t)),e}const Xr=t=>Qs.get(t);function uh(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=vt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(vt(o.result),a.oldVersion,a.newVersion,vt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const fh=["get","getKey","getAll","getAllKeys","count"],dh=["put","add","delete","clear"],Qr=new Map;function lo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qr.get(e))return Qr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=dh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fh.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return Qr.set(e,i),i}ah(t=>({...t,get:(e,n,r)=>lo(e,n)||t.get(e,n,r),has:(e,n)=>!!lo(e,n)||t.has(e,n)}));/**
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
 */class hh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ph(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ph(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Es="@firebase/app",uo="0.9.20";/**
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
 */const Dt=new ec("@firebase/app"),gh="@firebase/app-compat",mh="@firebase/analytics-compat",_h="@firebase/analytics",vh="@firebase/app-check-compat",yh="@firebase/app-check",bh="@firebase/auth",wh="@firebase/auth-compat",Eh="@firebase/database",Ih="@firebase/database-compat",Th="@firebase/functions",Sh="@firebase/functions-compat",Ch="@firebase/installations",Rh="@firebase/installations-compat",Ph="@firebase/messaging",Ah="@firebase/messaging-compat",Oh="@firebase/performance",kh="@firebase/performance-compat",xh="@firebase/remote-config",Nh="@firebase/remote-config-compat",Dh="@firebase/storage",Mh="@firebase/storage-compat",Lh="@firebase/firestore",Uh="@firebase/firestore-compat",Fh="firebase",Bh="10.5.0";/**
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
 */const Is="[DEFAULT]",$h={[Es]:"fire-core",[gh]:"fire-core-compat",[_h]:"fire-analytics",[mh]:"fire-analytics-compat",[yh]:"fire-app-check",[vh]:"fire-app-check-compat",[bh]:"fire-auth",[wh]:"fire-auth-compat",[Eh]:"fire-rtdb",[Ih]:"fire-rtdb-compat",[Th]:"fire-fn",[Sh]:"fire-fn-compat",[Ch]:"fire-iid",[Rh]:"fire-iid-compat",[Ph]:"fire-fcm",[Ah]:"fire-fcm-compat",[Oh]:"fire-perf",[kh]:"fire-perf-compat",[xh]:"fire-rc",[Nh]:"fire-rc-compat",[Dh]:"fire-gcs",[Mh]:"fire-gcs-compat",[Lh]:"fire-fst",[Uh]:"fire-fst-compat","fire-js":"fire-js",[Fh]:"fire-js-all"};/**
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
 */const pr=new Map,Ts=new Map;function Hh(t,e){try{t.container.addComponent(e)}catch(n){Dt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function On(t){const e=t.name;if(Ts.has(e))return Dt.debug(`There were multiple attempts to register component ${e}.`),!1;Ts.set(e,t);for(const n of pr.values())Hh(n,t);return!0}function rc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const jh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},yt=new Ln("app","Firebase",jh);/**
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
 */class Vh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
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
 */const Fn=Bh;function sc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Is,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw yt.create("bad-app-name",{appName:String(s)});if(n||(n=Qa()),!n)throw yt.create("no-options");const i=pr.get(s);if(i){if(hr(n,i.options)&&hr(r,i.config))return i;throw yt.create("duplicate-app",{appName:s})}const o=new Xd(s);for(const a of Ts.values())o.addComponent(a);const c=new Vh(n,r,o);return pr.set(s,c),c}function Wh(t=Is){const e=pr.get(t);if(!e&&t===Is&&Qa())return sc();if(!e)throw yt.create("no-app",{appName:t});return e}function Jt(t,e,n){var r;let s=(r=$h[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dt.warn(c.join(" "));return}On(new rn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const zh="firebase-heartbeat-database",Kh=1,kn="firebase-heartbeat-store";let Zr=null;function ic(){return Zr||(Zr=uh(zh,Kh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(kn)}}}).catch(t=>{throw yt.create("idb-open",{originalErrorMessage:t.message})})),Zr}async function qh(t){try{return await(await ic()).transaction(kn).objectStore(kn).get(oc(t))}catch(e){if(e instanceof wt)Dt.warn(e.message);else{const n=yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dt.warn(n.message)}}}async function fo(t,e){try{const r=(await ic()).transaction(kn,"readwrite");await r.objectStore(kn).put(e,oc(t)),await r.done}catch(n){if(n instanceof wt)Dt.warn(n.message);else{const r=yt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dt.warn(r.message)}}}function oc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Gh=1024,Jh=30*24*60*60*1e3;class Yh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ho();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=Jh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ho(),{heartbeatsToSend:n,unsentEntries:r}=Xh(this._heartbeatsCache.heartbeats),s=Ya(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ho(){return new Date().toISOString().substring(0,10)}function Xh(t,e=Gh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),po(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),po(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bd()?$d().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return fo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function po(t){return Ya(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Zh(t){On(new rn("platform-logger",e=>new hh(e),"PRIVATE")),On(new rn("heartbeat",e=>new Yh(e),"PRIVATE")),Jt(Es,uo,t),Jt(Es,uo,"esm2017"),Jt("fire-js","")}Zh("");var ep="firebase",tp="10.5.0";/**
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
 */Jt(ep,tp,"app");const np={apiKey:"AIzaSyD66i1ri0md2o2Ow4RVApaWIjSQdM79RRY",authDomain:"pomofocus-vue3.firebaseapp.com",projectId:"pomofocus-vue3",storageBucket:"pomofocus-vue3.appspot.com",messagingSenderId:"1089476388969",appId:"1:1089476388969:web:c4939d029dadf83304daf8",measurementId:"G-9CL6V1FX1Y"};sc(np);function Zs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ac(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rp=ac,cc=new Ln("auth","Firebase",ac());/**
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
 */const gr=new ec("@firebase/auth");function sp(t,...e){gr.logLevel<=ee.WARN&&gr.warn(`Auth (${Fn}): ${t}`,...e)}function rr(t,...e){gr.logLevel<=ee.ERROR&&gr.error(`Auth (${Fn}): ${t}`,...e)}/**
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
 */function Je(t,...e){throw ei(t,...e)}function Ke(t,...e){return ei(t,...e)}function lc(t,e,n){const r=Object.assign(Object.assign({},rp()),{[e]:n});return new Ln("auth","Firebase",r).create(e,{appName:t.name})}function ip(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Je(t,"argument-error"),lc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ei(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return cc.create(t,...e)}function B(t,e,...n){if(!t)throw ei(e,...n)}function et(t){const e="INTERNAL ASSERTION FAILED: "+t;throw rr(e),new Error(e)}function st(t,e){t||et(e)}/**
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
 */function Ss(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function op(){return go()==="http:"||go()==="https:"}function go(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ap(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(op()||Ld()||"connection"in navigator)?navigator.onLine:!0}function cp(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Bn{constructor(e,n){this.shortDelay=e,this.longDelay=n,st(n>e,"Short delay should be less than long delay!"),this.isMobile=Md()||Ud()}get(){return ap()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ti(t,e){st(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class uc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const up=new Bn(3e4,6e4);function fc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $n(t,e,n,r,s={}){return dc(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Un(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),uc.fetch()(hc(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function dc(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lp),e);try{const s=new dp(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Yn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Yn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Yn(t,"user-disabled",o);const u=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw lc(t,u,l);Je(t,u)}}catch(s){if(s instanceof wt)throw s;Je(t,"network-request-failed",{message:String(s)})}}async function fp(t,e,n,r,s={}){const i=await $n(t,e,n,r,s);return"mfaPendingCredential"in i&&Je(t,"multi-factor-auth-required",{_serverResponse:i}),i}function hc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ti(t.config,s):`${t.config.apiScheme}://${s}`}class dp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ke(this.auth,"network-request-failed")),up.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ke(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function hp(t,e){return $n(t,"POST","/v1/accounts:delete",e)}async function pp(t,e){return $n(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gp(t,e=!1){const n=Et(t),r=await n.getIdToken(e),s=ni(r);B(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:wn(es(s.auth_time)),issuedAtTime:wn(es(s.iat)),expirationTime:wn(es(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function es(t){return Number(t)*1e3}function ni(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return rr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Xa(n);return s?JSON.parse(s):(rr("Failed to decode base64 JWT payload"),null)}catch(s){return rr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function mp(t){const e=ni(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wt&&_p(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _p({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class vp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wn(this.lastLoginAt),this.creationTime=wn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function mr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await xn(t,pp(n,{idToken:r}));B(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?wp(i.providerUserInfo):[],c=bp(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),u=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new pc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function yp(t){const e=Et(t);await mr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bp(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function wp(t){return t.map(e=>{var{providerId:n}=e,r=Zs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Ep(t,e){const n=await dc(t,{},async()=>{const r=Un({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=hc(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",uc.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Nn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ep(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Nn;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nn,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
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
 */function lt(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class xt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Zs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new pc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await xn(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gp(this,e)}reload(){return yp(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await mr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xn(this,hp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,L=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:N,isAnonymous:G,providerData:oe,stsTokenManager:ce}=n;B(H&&ce,e,"internal-error");const W=Nn.fromJSON(this.name,ce);B(typeof H=="string",e,"internal-error"),lt(h,e.name),lt(g,e.name),B(typeof N=="boolean",e,"internal-error"),B(typeof G=="boolean",e,"internal-error"),lt(_,e.name),lt(S,e.name),lt(P,e.name),lt(L,e.name),lt(O,e.name),lt(x,e.name);const j=new xt({uid:H,auth:e,email:g,emailVerified:N,displayName:h,isAnonymous:G,photoURL:S,phoneNumber:_,tenantId:P,stsTokenManager:W,createdAt:O,lastLoginAt:x});return oe&&Array.isArray(oe)&&(j.providerData=oe.map(se=>Object.assign({},se))),L&&(j._redirectEventId=L),j}static async _fromIdTokenResponse(e,n,r=!1){const s=new Nn;s.updateFromServerResponse(n);const i=new xt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await mr(i),i}}/**
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
 */const mo=new Map;function tt(t){st(t instanceof Function,"Expected a class definition");let e=mo.get(t);return e?(st(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mo.set(t,e),e)}/**
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
 */class gc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}gc.type="NONE";const _o=gc;/**
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
 */function sr(t,e,n){return`firebase:${t}:${e}:${n}`}class Yt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=sr(this.userKey,s.apiKey,i),this.fullPersistenceKey=sr("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?xt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yt(tt(_o),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||tt(_o);const o=sr(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const u=await l._get(o);if(u){const h=xt._fromJSON(e,u);l!==i&&(c=h),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Yt(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Yt(i,e,r))}}/**
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
 */function vo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bc(e))return"Blackberry";if(wc(e))return"Webos";if(ri(e))return"Safari";if((e.includes("chrome/")||_c(e))&&!e.includes("edge/"))return"Chrome";if(yc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function mc(t=_e()){return/firefox\//i.test(t)}function ri(t=_e()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _c(t=_e()){return/crios\//i.test(t)}function vc(t=_e()){return/iemobile/i.test(t)}function yc(t=_e()){return/android/i.test(t)}function bc(t=_e()){return/blackberry/i.test(t)}function wc(t=_e()){return/webos/i.test(t)}function Mr(t=_e()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ip(t=_e()){var e;return Mr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Tp(){return Fd()&&document.documentMode===10}function Ec(t=_e()){return Mr(t)||yc(t)||wc(t)||bc(t)||/windows phone/i.test(t)||vc(t)}function Sp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ic(t,e=[]){let n;switch(t){case"Browser":n=vo(_e());break;case"Worker":n=`${vo(_e())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fn}/${r}`}/**
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
 */class Cp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Rp(t,e={}){return $n(t,"GET","/v2/passwordPolicy",fc(t,e))}/**
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
 */const Pp=6;class Ap{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Pp,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Op{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yo(this),this.idTokenSubscription=new yo(this),this.beforeStateQueue=new Cp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=tt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Yt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Et(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Rp(this),n=new Ap(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ln("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&tt(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Yt.create(this,[tt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ic(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sp(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Lr(t){return Et(t)}class yo{constructor(e){this.auth=e,this.observer=null,this.addObserver=zd(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function kp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function xp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ke("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",kp().appendChild(r)})}function Np(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Dp(t,e){const n=rc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(hr(i,e??{}))return s;Je(s,"already-initialized")}return n.initialize({options:e})}function Mp(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(tt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Lp(t,e,n){const r=Lr(t);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Tc(e),{host:o,port:c}=Up(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Fp()}function Tc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Up(t){const e=Tc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:bo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:bo(o)}}}function bo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Fp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Sc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,n){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}/**
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
 */async function Xt(t,e){return fp(t,"POST","/v1/accounts:signInWithIdp",fc(t,e))}/**
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
 */const Bp="http://localhost";class Mt extends Sc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Je("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Zs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Mt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xt(e,n)}buildRequest(){const e={requestUri:Bp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Un(n)}return e}}/**
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
 */class si{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hn extends si{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ht extends Hn{constructor(){super("facebook.com")}static credential(e){return Mt._fromParams({providerId:ht.PROVIDER_ID,signInMethod:ht.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ht.credentialFromTaggedObject(e)}static credentialFromError(e){return ht.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ht.credential(e.oauthAccessToken)}catch{return null}}}ht.FACEBOOK_SIGN_IN_METHOD="facebook.com";ht.PROVIDER_ID="facebook.com";/**
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
 */class Ze extends Hn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mt._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ze.credential(n,r)}catch{return null}}}Ze.GOOGLE_SIGN_IN_METHOD="google.com";Ze.PROVIDER_ID="google.com";/**
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
 */class pt extends Hn{constructor(){super("github.com")}static credential(e){return Mt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pt.credential(e.oauthAccessToken)}catch{return null}}}pt.GITHUB_SIGN_IN_METHOD="github.com";pt.PROVIDER_ID="github.com";/**
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
 */class gt extends Hn{constructor(){super("twitter.com")}static credential(e,n){return Mt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gt.credential(n,r)}catch{return null}}}gt.TWITTER_SIGN_IN_METHOD="twitter.com";gt.PROVIDER_ID="twitter.com";/**
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
 */class sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await xt._fromIdTokenResponse(e,r,s),o=wo(r);return new sn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=wo(r);return new sn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function wo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class _r extends wt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_r.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _r(e,n,r,s)}}function Cc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_r._fromErrorAndOperation(t,i,e,r):i})}async function $p(t,e,n=!1){const r=await xn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return sn._forOperation(t,"link",r)}/**
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
 */async function Hp(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await xn(t,Cc(r,s,e,t),n);B(i.idToken,r,"internal-error");const o=ni(i.idToken);B(o,r,"internal-error");const{sub:c}=o;return B(t.uid===c,r,"user-mismatch"),sn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Je(r,"user-mismatch"),i}}/**
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
 */async function jp(t,e,n=!1){const r="signIn",s=await Cc(t,r,e),i=await sn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Vp(t,e,n,r){return Et(t).onIdTokenChanged(e,n,r)}function Wp(t,e,n){return Et(t).beforeAuthStateChanged(e,n)}function zp(t,e,n,r){return Et(t).onAuthStateChanged(e,n,r)}function Kp(t){return Et(t).signOut()}const vr="__sak";/**
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
 */class Rc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vr,"1"),this.storage.removeItem(vr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function qp(){const t=_e();return ri(t)||Mr(t)}const Gp=1e3,Jp=10;class Pc extends Rc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qp()&&Sp(),this.fallbackToPolling=Ec(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Tp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Jp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Gp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pc.type="LOCAL";const Yp=Pc;/**
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
 */class Ac extends Rc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ac.type="SESSION";const Oc=Ac;/**
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
 */function Xp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ur{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ur(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await Xp(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ur.receivers=[];/**
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
 */function ii(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Qp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=ii("",20);s.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const g=h;if(g.data.eventId===l)switch(g.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qe(){return window}function Zp(t){qe().location.href=t}/**
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
 */function kc(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function eg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tg(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ng(){return kc()?self:null}/**
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
 */const xc="firebaseLocalStorageDb",rg=1,yr="firebaseLocalStorage",Nc="fbase_key";class jn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fr(t,e){return t.transaction([yr],e?"readwrite":"readonly").objectStore(yr)}function sg(){const t=indexedDB.deleteDatabase(xc);return new jn(t).toPromise()}function Cs(){const t=indexedDB.open(xc,rg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yr,{keyPath:Nc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yr)?e(r):(r.close(),await sg(),e(await Cs()))})})}async function Eo(t,e,n){const r=Fr(t,!0).put({[Nc]:e,value:n});return new jn(r).toPromise()}async function ig(t,e){const n=Fr(t,!1).get(e),r=await new jn(n).toPromise();return r===void 0?null:r.value}function Io(t,e){const n=Fr(t,!0).delete(e);return new jn(n).toPromise()}const og=800,ag=3;class Dc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ag)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ur._getInstance(ng()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await eg(),!this.activeServiceWorker)return;this.sender=new Qp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cs();return await Eo(e,vr,"1"),await Io(e,vr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Eo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ig(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Io(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Fr(s,!1).getAll();return new jn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),og)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dc.type="LOCAL";const cg=Dc;new Bn(3e4,6e4);/**
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
 */function Mc(t,e){return e?tt(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class oi extends Sc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lg(t){return jp(t.auth,new oi(t),t.bypassAuthState)}function ug(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Hp(n,new oi(t),t.bypassAuthState)}async function fg(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),$p(n,new oi(t),t.bypassAuthState)}/**
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
 */class Lc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lg;case"linkViaPopup":case"linkViaRedirect":return fg;case"reauthViaPopup":case"reauthViaRedirect":return ug;default:Je(this.auth,"internal-error")}}resolve(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){st(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dg=new Bn(2e3,1e4);async function hg(t,e,n){const r=Lr(t);ip(t,e,si);const s=Mc(r,n);return new At(r,"signInViaPopup",e,s).executeNotNull()}class At extends Lc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,At.currentPopupAction&&At.currentPopupAction.cancel(),At.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){st(this.filter.length===1,"Popup operations only handle one event");const e=ii();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,At.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dg.get())};e()}}At.currentPopupAction=null;/**
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
 */const pg="pendingRedirect",ir=new Map;class gg extends Lc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ir.get(this.auth._key());if(!e){try{const r=await mg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ir.set(this.auth._key(),e)}return this.bypassAuthState||ir.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mg(t,e){const n=yg(e),r=vg(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function _g(t,e){ir.set(t._key(),e)}function vg(t){return tt(t._redirectPersistence)}function yg(t){return sr(pg,t.config.apiKey,t.name)}async function bg(t,e,n=!1){const r=Lr(t),s=Mc(r,e),o=await new gg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const wg=10*60*1e3;class Eg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ig(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Uc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ke(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wg&&this.cachedEventUids.clear(),this.cachedEventUids.has(To(e))}saveEventToCache(e){this.cachedEventUids.add(To(e)),this.lastProcessedEventTime=Date.now()}}function To(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Uc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ig(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uc(t);default:return!1}}/**
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
 */async function Tg(t,e={}){return $n(t,"GET","/v1/projects",e)}/**
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
 */const Sg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Cg=/^https?/;async function Rg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Tg(t);for(const n of e)try{if(Pg(n))return}catch{}Je(t,"unauthorized-domain")}function Pg(t){const e=Ss(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Cg.test(n))return!1;if(Sg.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Ag=new Bn(3e4,6e4);function So(){const t=qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Og(t){return new Promise((e,n)=>{var r,s,i;function o(){So(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{So(),n(Ke(t,"network-request-failed"))},timeout:Ag.get()})}if(!((s=(r=qe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=qe().gapi)===null||i===void 0)&&i.load)o();else{const c=Np("iframefcb");return qe()[c]=()=>{gapi.load?o():n(Ke(t,"network-request-failed"))},xp(`https://apis.google.com/js/api.js?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw or=null,e})}let or=null;function kg(t){return or=or||Og(t),or}/**
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
 */const xg=new Bn(5e3,15e3),Ng="__/auth/iframe",Dg="emulator/auth/iframe",Mg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ug(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ti(e,Dg):`https://${t.config.authDomain}/${Ng}`,r={apiKey:e.apiKey,appName:t.name,v:Fn},s=Lg.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Un(r).slice(1)}`}async function Fg(t){const e=await kg(t),n=qe().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:Ug(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ke(t,"network-request-failed"),c=qe().setTimeout(()=>{i(o)},xg.get());function a(){qe().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const Bg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$g=500,Hg=600,jg="_blank",Vg="http://localhost";class Co{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wg(t,e,n,r=$g,s=Hg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},Bg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=_e().toLowerCase();n&&(c=_c(l)?jg:n),mc(l)&&(e=e||Vg,a.scrollbars="yes");const u=Object.entries(a).reduce((g,[_,S])=>`${g}${_}=${S},`,"");if(Ip(l)&&c!=="_self")return zg(e||"",c),new Co(null);const h=window.open(e||"",c,u);B(h,t,"popup-blocked");try{h.focus()}catch{}return new Co(h)}function zg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Kg="__/auth/handler",qg="emulator/auth/handler",Gg=encodeURIComponent("fac");async function Ro(t,e,n,r,s,i){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fn,eventId:s};if(e instanceof si){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Wd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Hn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const u of Object.keys(c))c[u]===void 0&&delete c[u];const a=await t._getAppCheckToken(),l=a?`#${Gg}=${encodeURIComponent(a)}`:"";return`${Jg(t)}?${Un(c).slice(1)}${l}`}function Jg({config:t}){return t.emulator?ti(t,qg):`https://${t.authDomain}/${Kg}`}/**
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
 */const ts="webStorageSupport";class Yg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Oc,this._completeRedirectFn=bg,this._overrideRedirectResult=_g}async _openPopup(e,n,r,s){var i;st((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ro(e,n,r,Ss(),s);return Wg(e,o,ii())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ro(e,n,r,Ss(),s);return Zp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(st(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Fg(e),r=new Eg(e);return n.register("authEvent",s=>(B(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ts,{type:ts},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ts];o!==void 0&&n(!!o),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Rg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ec()||ri()||Mr()}}const Xg=Yg;var Po="@firebase/auth",Ao="1.3.0";/**
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
 */class Qg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Zg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function em(t){On(new rn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ic(t)},l=new Op(r,s,i,a);return Mp(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),On(new rn("auth-internal",e=>{const n=Lr(e.getProvider("auth").getImmediate());return(r=>new Qg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(Po,Ao,Zg(t)),Jt(Po,Ao,"esm2017")}/**
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
 */const tm=5*60,nm=Za("authIdTokenMaxAge")||tm;let Oo=null;const rm=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nm)return;const s=n==null?void 0:n.token;Oo!==s&&(Oo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function sm(t=Wh()){const e=rc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Dp(t,{popupRedirectResolver:Xg,persistence:[cg,Yp,Oc]}),r=Za("authTokenSyncURL");if(r){const i=rm(r);Wp(n,i,()=>i(n.currentUser)),Vp(n,o=>i(o))}const s=Nd("auth");return s&&Lp(n,`http://${s}`),n}em("Browser");const ns=sm(),im=new Ze,om=Ma("user",()=>{const t=me(!1),e=me(""),n=me(""),r=me("");function s(){zp(ns,c=>{if(c){t.value=!0;return}t.value=!1})}function i(){Kp(ns).then(c=>{console.log(c),t.value=!1}).catch(c=>{console.log(c)})}function o(){console.log("登入"),hg(ns,im).then(c=>{console.log("幹"),console.log(c),t.value=!0}).catch(c=>{console.log(c)})}return{checkIsLogin:s,signOutWithGoogle:i,signInWithGoogle:o,userName:e,userEmail:n,isLogin:t,userPhotoUrl:r}}),am=t=>(Wl("data-v-f81e4041"),t=t(),zl(),t),cm={class:"flex justify-between h-20 w-[97%] mb-[30px]"},lm={class:"leading-loose contrast-20 w-[100px] text-center"},um={class:"animate-fadeIn flex items-center gap-2 max-md:hidden"},fm={class:"flex"},dm=am(()=>Pe("div",{class:"menu-btn__burger w-[45px] h-[6px] bg-primary rounded-[2px] shadow-burger transition duration-500 ease-in-out"},null,-1)),hm=[dm],pm=Lt({__name:"NavHeader",setup(t){const e=om(),{isLogin:n}=Js(e),r=me(!1),s=me([{id:"item01",name:"analysis"},{id:"item02",name:"setting"},{id:"item03",name:"login"}]),i=()=>{r.value=!r.value};return ga(()=>{e.checkIsLogin()}),(o,c)=>{const a=uu("RouterLink");return Ee(),ze("header",cm,[Pe("h1",lm,[fe(a,{to:"/",class:"animate-letterMove whitespace-nowrap"},{default:hn(()=>[gn("Pomofocus")]),_:1})]),Pe("nav",um,[Pe("ul",fm,[(Ee(!0),ze(Ne,null,_a(s.value,l=>(Ee(),ze("li",{key:l.id,class:"leading-loose ml-5 min-h-full transition-transform transition-shadow duration-300 hover:translate-y-[2px] active:translate-y-[5px]"},[l.name.toLowerCase()==="login"?(Ee(),tr(a,{key:0,to:"/login",class:"text-base max-w-prose nav-item"},{default:hn(()=>[gn(Kt(l.name),1)]),_:2},1024)):l.name.toLowerCase()!=="analysis"?(Ee(),tr(a,{key:1,to:`/${l.name.toLowerCase()}`,class:"text-base max-w-prose nav-item"},{default:hn(()=>[gn(Kt(l.name),1)]),_:2},1032,["to"])):ye(n)&&l.name.toLowerCase()==="analysis"?(Ee(),tr(a,{key:2,to:"/",class:"text-base max-w-prose nav-item"},{default:hn(()=>[gn(Kt(l.name),1)]),_:2},1024)):xi("",!0)]))),128))]),ye(n)?(Ee(),ze("button",{key:0,onClick:c[0]||(c[0]=(...l)=>ye(e).signOutWithGoogle&&ye(e).signOutWithGoogle(...l)),class:"leading-[1.3] ml-5 text-base max-w-prose nav-item"},"Sign Out")):xi("",!0)]),Pe("div",{class:Dn([{active:r.value},"md:hidden menu-btn relative flex justify-center items-center w-[80px] h-[80px] cursor-pointer transition duration-500 ease-in-out"]),onClick:i},hm,2)])}}});const ai=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},gm=ai(pm,[["__scopeId","data-v-f81e4041"]]),mm={class:"xl:max-w-1200 lg:max-w-1000 md:max-w-600 w-[90vw] mx-auto my-0 h-screen"},_m=Lt({__name:"App",setup(t){return(e,n)=>(Ee(),ze("main",mm,[fe(gm),fe(ye(qa))]))}}),vm="modulepreload",ym=function(t){return"/pomofocus-vue3/"+t},ko={},bm=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=ym(i),i in ko)return;ko[i]=!0;const o=i.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!r)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":vm,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},wm={class:"box relative overflow-hidden h-[350px] bg-custom-gray rounded-[8px] mt-10 flex justify-center items-center flex-wrap"},Em={class:"form absolute top-[4px] right-[4px] bottom-[4px] left-[4px] z-[2] bg-gray-800 flex-col flex overflow-hidden"},Im={class:"text-9xl w-full text-center mt-[40px]"},Tm={class:"relative block w-full h-full"},Sm=Lt({__name:"NormalTimer",props:{isActive:{type:Boolean},mode:{},remainingTime:{}},emits:["handleTimeCountDown"],setup(t,{emit:e}){const n=()=>{e("handleTimeCountDown",t.isActive,t.mode)};return(r,s)=>(Ee(),ze("div",wm,[Pe("div",Em,[Pe("p",Im,Kt(r.remainingTime),1),Pe("button",{onClick:n,class:"btn w-[100px] relative inline-block text-light text-base font-medium border-none py-[10xp] px-[25px] m-auto leading-10 shadow-activeButton transition-all duration-300 ease-in hover:bg-transparent"},[Pe("span",Tm,Kt(r.isActive?"Pause":"Start"),1)])])]))}});const Cm=ai(Sm,[["__scopeId","data-v-ab9271d4"]]);var Fc=(t=>(t.pomodoro="pomodoro",t.longbreak="longbreak",t.shortbreak="shortbreak",t))(Fc||{});const Bc=Ma("timer",()=>{const t=me(Fc.pomodoro),e=me(!1);function n(){e.value=!e.value}function r(){e.value=!1}function s(){e.value=!0}return{mode:t,isActive:e,changeActiveStatus:n,onStop:r,onStart:s}});function Xn(t){if(t<0)return"00:00";const e=Math.floor(t/(1e3*60*60)),n=Math.floor(t%(1e3*60*60)/(1e3*60));if(e>0||n>=60)return"59:59";const r=Math.floor(t%(1e3*60)/1e3);return`${n<10?"0"+n:n}:${r<10?"0"+r:r}`}function xo(){const t=Bc(),{isActive:e,...n}=Js(t),r=me(25*60*1e3),s=me("25:00");let i=null;const o=Re(()=>r.value);function c(){i&&(clearInterval(i),i=null)}function a(l){switch(Ol(l)){case"Pomodoro":r.value=25*60*1e3,s.value=Xn(r.value);break;case"Long Break":r.value=15*60*1e3,s.value=Xn(r.value);break;case"Short Break":r.value=5*60*1e3,s.value=Xn(r.value);break;default:console.log("未定義的狀態！");break}}return Gt(e,()=>{e.value?i=setInterval(()=>{r.value=o.value-1e3,s.value=r.value<=0?"timeup":Xn(r.value)},1e3):(r.value=o.value,c())}),Vs(()=>{c()}),{remainingTime:s,switchMode:a}}const Rm={class:"flex w-full h-full"},Pm={class:"w-[600px] h-[350px] bg-black m-auto rounded-[8px]"},Am={class:"w-auto flex space-x-3 text-center text-xl cursor-pointer rounded-default justify-center items-center gap-6 menu"},Om=["onClick"],km=Lt({__name:"CountdownTimer",setup(t){const e=Bc(),{isActive:n,mode:r,...s}=Js(e),{switchMode:i,remainingTime:o}=xo(),c=me("Pomodoro"),a=me([{id:1,title:"Pomodoro",time:"25:00"},{id:2,title:"Short Break",time:"05:00"},{id:3,title:"Long Break",time:"15:00"}]),l=h=>{c.value=h,e.onStop(),i(h)},u=()=>{xo(),e.changeActiveStatus()};return(h,g)=>(Ee(),ze("section",Rm,[Pe("article",Pm,[Pe("ul",Am,[(Ee(!0),ze(Ne,null,_a(a.value,_=>(Ee(),ze("li",{onClick:S=>l(_.title),class:Dn([{"tab-active":c.value===_.title},"block item h-auto hover:text-cyan-500 border-transparent border-b-2 hover:border-b-cyan-500 hover:transition duration-500"]),key:_.id},Kt(_.title),11,Om))),128))]),fe(Cm,{isActive:ye(n),mode:ye(r),remainingTime:ye(o),onHandleTimeCountDown:u,class:"overflow-hidden"},null,8,["isActive","mode","remainingTime"])])]))}});const xm=ai(km,[["__scopeId","data-v-28579b72"]]),Nm={class:"w-full"},Dm=Lt({__name:"HomeView",setup(t){return(e,n)=>(Ee(),ze("main",Nm,[fe(xm)]))}}),Mm=Td({history:Hf("/pomofocus-vue3"),routes:[{path:"/",name:"home",component:Dm},{path:"/login",name:"login",component:()=>bm(()=>import("./LoginPage-66bfbe91.js"),[])}]});const ci=gf(_m);ci.use(vf());ci.use(Mm);ci.mount("#app");export{Ze as G,om as a,Pe as b,ze as c,Lt as d,gn as e,hg as f,sm as g,Dn as n,Ee as o,me as r,Js as s,Um as u,Lm as w};
