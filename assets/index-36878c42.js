(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Gs(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ue={},vn=[],Ve=()=>{},kf=()=>!1,Sf=/^on[^a-z]/,_i=e=>Sf.test(e),Ys=e=>e.startsWith("onUpdate:"),ye=Object.assign,Xs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Af=Object.prototype.hasOwnProperty,Y=(e,t)=>Af.call(e,t),H=Array.isArray,bn=e=>wi(e)==="[object Map]",Bc=e=>wi(e)==="[object Set]",V=e=>typeof e=="function",pe=e=>typeof e=="string",Js=e=>typeof e=="symbol",le=e=>e!==null&&typeof e=="object",Hc=e=>le(e)&&V(e.then)&&V(e.catch),zc=Object.prototype.toString,wi=e=>zc.call(e),Tf=e=>wi(e).slice(8,-1),Wc=e=>wi(e)==="[object Object]",Qs=e=>pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Kr=Gs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ei=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},xf=/-(\w)/g,it=Ei(e=>e.replace(xf,(t,n)=>n?n.toUpperCase():"")),Cf=/\B([A-Z])/g,Nn=Ei(e=>e.replace(Cf,"-$1").toLowerCase()),Ii=Ei(e=>e.charAt(0).toUpperCase()+e.slice(1)),zi=Ei(e=>e?`on${Ii(e)}`:""),Zn=(e,t)=>!Object.is(e,t),Wi=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ri=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Pf=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let qa;const ds=()=>qa||(qa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zs(e){if(H(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=pe(r)?Mf(r):Zs(r);if(i)for(const s in i)t[s]=i[s]}return t}else{if(pe(e))return e;if(le(e))return e}}const Of=/;(?![^(]*\))/g,Rf=/:([^]+)/,Nf=/\/\*[^]*?\*\//g;function Mf(e){const t={};return e.replace(Nf,"").split(Of).forEach(n=>{if(n){const r=n.split(Rf);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function gr(e){let t="";if(pe(e))t=e;else if(H(e))for(let n=0;n<e.length;n++){const r=gr(e[n]);r&&(t+=r+" ")}else if(le(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Df="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lf=Gs(Df);function Vc(e){return!!e||e===""}const yn=e=>pe(e)?e:e==null?"":H(e)||le(e)&&(e.toString===zc||!V(e.toString))?JSON.stringify(e,Kc,2):String(e),Kc=(e,t)=>t&&t.__v_isRef?Kc(e,t.value):bn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Bc(t)?{[`Set(${t.size})`]:[...t.values()]}:le(t)&&!H(t)&&!Wc(t)?String(t):t;let Me;class qc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!t&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Me;try{return Me=this,t()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Gc(e){return new qc(e)}function Uf(e,t=Me){t&&t.active&&t.effects.push(e)}function Yc(){return Me}function Ff(e){Me&&Me.cleanups.push(e)}const ea=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Xc=e=>(e.w&Lt)>0,Jc=e=>(e.n&Lt)>0,$f=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Lt},jf=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Xc(i)&&!Jc(i)?i.delete(e):t[n++]=i,i.w&=~Lt,i.n&=~Lt}t.length=n}},ii=new WeakMap;let jn=0,Lt=1;const hs=30;let He;const Qt=Symbol(""),ms=Symbol("");class ta{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Uf(this,r)}run(){if(!this.active)return this.fn();let t=He,n=Rt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=He,He=this,Rt=!0,Lt=1<<++jn,jn<=hs?$f(this):Ga(this),this.fn()}finally{jn<=hs&&jf(this),Lt=1<<--jn,He=this.parent,Rt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){He===this?this.deferStop=!0:this.active&&(Ga(this),this.onStop&&this.onStop(),this.active=!1)}}function Ga(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Rt=!0;const Qc=[];function Mn(){Qc.push(Rt),Rt=!1}function Dn(){const e=Qc.pop();Rt=e===void 0?!0:e}function Oe(e,t,n){if(Rt&&He){let r=ii.get(e);r||ii.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=ea()),Zc(i)}}function Zc(e,t){let n=!1;jn<=hs?Jc(e)||(e.n|=Lt,n=!Xc(e)):n=!e.has(He),n&&(e.add(He),He.deps.push(e))}function mt(e,t,n,r,i,s){const a=ii.get(e);if(!a)return;let o=[];if(t==="clear")o=[...a.values()];else if(n==="length"&&H(e)){const c=Number(r);a.forEach((l,u)=>{(u==="length"||u>=c)&&o.push(l)})}else switch(n!==void 0&&o.push(a.get(n)),t){case"add":H(e)?Qs(n)&&o.push(a.get("length")):(o.push(a.get(Qt)),bn(e)&&o.push(a.get(ms)));break;case"delete":H(e)||(o.push(a.get(Qt)),bn(e)&&o.push(a.get(ms)));break;case"set":bn(e)&&o.push(a.get(Qt));break}if(o.length===1)o[0]&&ps(o[0]);else{const c=[];for(const l of o)l&&c.push(...l);ps(ea(c))}}function ps(e,t){const n=H(e)?e:[...e];for(const r of n)r.computed&&Ya(r);for(const r of n)r.computed||Ya(r)}function Ya(e,t){(e!==He||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Bf(e,t){var n;return(n=ii.get(e))==null?void 0:n.get(t)}const Hf=Gs("__proto__,__v_isRef,__isVue"),el=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Js)),zf=na(),Wf=na(!1,!0),Vf=na(!0),Xa=Kf();function Kf(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=G(this);for(let s=0,a=this.length;s<a;s++)Oe(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(G)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Mn();const r=G(this)[t].apply(this,n);return Dn(),r}}),e}function qf(e){const t=G(this);return Oe(t,"has",e),t.hasOwnProperty(e)}function na(e=!1,t=!1){return function(r,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&s===(e?t?ld:sl:t?il:rl).get(r))return r;const a=H(r);if(!e){if(a&&Y(Xa,i))return Reflect.get(Xa,i,s);if(i==="hasOwnProperty")return qf}const o=Reflect.get(r,i,s);return(Js(i)?el.has(i):Hf(i))||(e||Oe(r,"get",i),t)?o:fe(o)?a&&Qs(i)?o:o.value:le(o)?e?ol(o):vr(o):o}}const Gf=tl(),Yf=tl(!0);function tl(e=!1){return function(n,r,i,s){let a=n[r];if(Sn(a)&&fe(a)&&!fe(i))return!1;if(!e&&(!si(i)&&!Sn(i)&&(a=G(a),i=G(i)),!H(n)&&fe(a)&&!fe(i)))return a.value=i,!0;const o=H(n)&&Qs(r)?Number(r)<n.length:Y(n,r),c=Reflect.set(n,r,i,s);return n===G(s)&&(o?Zn(i,a)&&mt(n,"set",r,i):mt(n,"add",r,i)),c}}function Xf(e,t){const n=Y(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&mt(e,"delete",t,void 0),r}function Jf(e,t){const n=Reflect.has(e,t);return(!Js(t)||!el.has(t))&&Oe(e,"has",t),n}function Qf(e){return Oe(e,"iterate",H(e)?"length":Qt),Reflect.ownKeys(e)}const nl={get:zf,set:Gf,deleteProperty:Xf,has:Jf,ownKeys:Qf},Zf={get:Vf,set(e,t){return!0},deleteProperty(e,t){return!0}},ed=ye({},nl,{get:Wf,set:Yf}),ra=e=>e,ki=e=>Reflect.getPrototypeOf(e);function Cr(e,t,n=!1,r=!1){e=e.__v_raw;const i=G(e),s=G(t);n||(t!==s&&Oe(i,"get",t),Oe(i,"get",s));const{has:a}=ki(i),o=r?ra:n?aa:er;if(a.call(i,t))return o(e.get(t));if(a.call(i,s))return o(e.get(s));e!==i&&e.get(t)}function Pr(e,t=!1){const n=this.__v_raw,r=G(n),i=G(e);return t||(e!==i&&Oe(r,"has",e),Oe(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Or(e,t=!1){return e=e.__v_raw,!t&&Oe(G(e),"iterate",Qt),Reflect.get(e,"size",e)}function Ja(e){e=G(e);const t=G(this);return ki(t).has.call(t,e)||(t.add(e),mt(t,"add",e,e)),this}function Qa(e,t){t=G(t);const n=G(this),{has:r,get:i}=ki(n);let s=r.call(n,e);s||(e=G(e),s=r.call(n,e));const a=i.call(n,e);return n.set(e,t),s?Zn(t,a)&&mt(n,"set",e,t):mt(n,"add",e,t),this}function Za(e){const t=G(this),{has:n,get:r}=ki(t);let i=n.call(t,e);i||(e=G(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&mt(t,"delete",e,void 0),s}function eo(){const e=G(this),t=e.size!==0,n=e.clear();return t&&mt(e,"clear",void 0,void 0),n}function Rr(e,t){return function(r,i){const s=this,a=s.__v_raw,o=G(a),c=t?ra:e?aa:er;return!e&&Oe(o,"iterate",Qt),a.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function Nr(e,t,n){return function(...r){const i=this.__v_raw,s=G(i),a=bn(s),o=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,l=i[e](...r),u=n?ra:t?aa:er;return!t&&Oe(s,"iterate",c?ms:Qt),{next(){const{value:f,done:m}=l.next();return m?{value:f,done:m}:{value:o?[u(f[0]),u(f[1])]:u(f),done:m}},[Symbol.iterator](){return this}}}}function Et(e){return function(...t){return e==="delete"?!1:this}}function td(){const e={get(s){return Cr(this,s)},get size(){return Or(this)},has:Pr,add:Ja,set:Qa,delete:Za,clear:eo,forEach:Rr(!1,!1)},t={get(s){return Cr(this,s,!1,!0)},get size(){return Or(this)},has:Pr,add:Ja,set:Qa,delete:Za,clear:eo,forEach:Rr(!1,!0)},n={get(s){return Cr(this,s,!0)},get size(){return Or(this,!0)},has(s){return Pr.call(this,s,!0)},add:Et("add"),set:Et("set"),delete:Et("delete"),clear:Et("clear"),forEach:Rr(!0,!1)},r={get(s){return Cr(this,s,!0,!0)},get size(){return Or(this,!0)},has(s){return Pr.call(this,s,!0)},add:Et("add"),set:Et("set"),delete:Et("delete"),clear:Et("clear"),forEach:Rr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Nr(s,!1,!1),n[s]=Nr(s,!0,!1),t[s]=Nr(s,!1,!0),r[s]=Nr(s,!0,!0)}),[e,n,t,r]}const[nd,rd,id,sd]=td();function ia(e,t){const n=t?e?sd:id:e?rd:nd;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(Y(n,i)&&i in r?n:r,i,s)}const ad={get:ia(!1,!1)},od={get:ia(!1,!0)},cd={get:ia(!0,!1)},rl=new WeakMap,il=new WeakMap,sl=new WeakMap,ld=new WeakMap;function ud(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fd(e){return e.__v_skip||!Object.isExtensible(e)?0:ud(Tf(e))}function vr(e){return Sn(e)?e:sa(e,!1,nl,ad,rl)}function al(e){return sa(e,!1,ed,od,il)}function ol(e){return sa(e,!0,Zf,cd,sl)}function sa(e,t,n,r,i){if(!le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const a=fd(e);if(a===0)return e;const o=new Proxy(e,a===2?r:n);return i.set(e,o),o}function ht(e){return Sn(e)?ht(e.__v_raw):!!(e&&e.__v_isReactive)}function Sn(e){return!!(e&&e.__v_isReadonly)}function si(e){return!!(e&&e.__v_isShallow)}function cl(e){return ht(e)||Sn(e)}function G(e){const t=e&&e.__v_raw;return t?G(t):e}function Si(e){return ri(e,"__v_skip",!0),e}const er=e=>le(e)?vr(e):e,aa=e=>le(e)?ol(e):e;function ll(e){Rt&&He&&(e=G(e),Zc(e.dep||(e.dep=ea())))}function ul(e,t){e=G(e);const n=e.dep;n&&ps(n)}function fe(e){return!!(e&&e.__v_isRef===!0)}function Ie(e){return fl(e,!1)}function dd(e){return fl(e,!0)}function fl(e,t){return fe(e)?e:new hd(e,t)}class hd{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:G(t),this._value=n?t:er(t)}get value(){return ll(this),this._value}set value(t){const n=this.__v_isShallow||si(t)||Sn(t);t=n?t:G(t),Zn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:er(t),ul(this))}}function Ae(e){return fe(e)?e.value:e}function md(e){return V(e)?e():Ae(e)}const pd={get:(e,t,n)=>Ae(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return fe(i)&&!fe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function dl(e){return ht(e)?e:new Proxy(e,pd)}function gd(e){const t=H(e)?new Array(e.length):{};for(const n in e)t[n]=hl(e,n);return t}class vd{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Bf(G(this._object),this._key)}}class bd{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function yd(e,t,n){return fe(e)?e:V(e)?new bd(e):le(e)&&arguments.length>1?hl(e,t,n):Ie(e)}function hl(e,t,n){const r=e[t];return fe(r)?r:new vd(e,t,n)}class _d{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ta(t,()=>{this._dirty||(this._dirty=!0,ul(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=G(this);return ll(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function wd(e,t,n=!1){let r,i;const s=V(e);return s?(r=e,i=Ve):(r=e.get,i=e.set),new _d(r,i,s||!i,n)}function Nt(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Ai(s,t,n)}return i}function Ke(e,t,n,r){if(V(e)){const s=Nt(e,t,n,r);return s&&Hc(s)&&s.catch(a=>{Ai(a,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(Ke(e[s],t,n,r));return i}function Ai(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,o=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,a,o)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){Nt(c,null,10,[e,a,o]);return}}Ed(e,n,i,r)}function Ed(e,t,n,r=!0){console.error(e)}let tr=!1,gs=!1;const Ee=[];let Ze=0;const _n=[];let ct=null,qt=0;const ml=Promise.resolve();let oa=null;function ca(e){const t=oa||ml;return e?t.then(this?e.bind(this):e):t}function Id(e){let t=Ze+1,n=Ee.length;for(;t<n;){const r=t+n>>>1;nr(Ee[r])<e?t=r+1:n=r}return t}function la(e){(!Ee.length||!Ee.includes(e,tr&&e.allowRecurse?Ze+1:Ze))&&(e.id==null?Ee.push(e):Ee.splice(Id(e.id),0,e),pl())}function pl(){!tr&&!gs&&(gs=!0,oa=ml.then(vl))}function kd(e){const t=Ee.indexOf(e);t>Ze&&Ee.splice(t,1)}function Sd(e){H(e)?_n.push(...e):(!ct||!ct.includes(e,e.allowRecurse?qt+1:qt))&&_n.push(e),pl()}function to(e,t=tr?Ze+1:0){for(;t<Ee.length;t++){const n=Ee[t];n&&n.pre&&(Ee.splice(t,1),t--,n())}}function gl(e){if(_n.length){const t=[...new Set(_n)];if(_n.length=0,ct){ct.push(...t);return}for(ct=t,ct.sort((n,r)=>nr(n)-nr(r)),qt=0;qt<ct.length;qt++)ct[qt]();ct=null,qt=0}}const nr=e=>e.id==null?1/0:e.id,Ad=(e,t)=>{const n=nr(e)-nr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function vl(e){gs=!1,tr=!0,Ee.sort(Ad);const t=Ve;try{for(Ze=0;Ze<Ee.length;Ze++){const n=Ee[Ze];n&&n.active!==!1&&Nt(n,null,14)}}finally{Ze=0,Ee.length=0,gl(),tr=!1,oa=null,(Ee.length||_n.length)&&vl()}}function Td(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ue;let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in r){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:m}=r[u]||ue;m&&(i=n.map(g=>pe(g)?g.trim():g)),f&&(i=n.map(Pf))}let o,c=r[o=zi(t)]||r[o=zi(it(t))];!c&&s&&(c=r[o=zi(Nn(t))]),c&&Ke(c,e,6,i);const l=r[o+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ke(l,e,6,i)}}function bl(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!V(e)){const c=l=>{const u=bl(l,t,!0);u&&(o=!0,ye(a,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!o?(le(e)&&r.set(e,null),null):(H(s)?s.forEach(c=>a[c]=null):ye(a,s),le(e)&&r.set(e,a),a)}function Ti(e,t){return!e||!_i(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,Nn(t))||Y(e,t))}let $e=null,xi=null;function ai(e){const t=$e;return $e=e,xi=e&&e.type.__scopeId||null,t}function xd(e){xi=e}function Cd(){xi=null}function Bn(e,t=$e,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&ho(-1);const s=ai(t);let a;try{a=e(...i)}finally{ai(s),r._d&&ho(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Vi(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[a],slots:o,attrs:c,emit:l,render:u,renderCache:f,data:m,setupState:g,ctx:k,inheritAttrs:A}=e;let M,b;const _=ai(e);try{if(n.shapeFlag&4){const C=i||r;M=Qe(u.call(C,C,f,s,g,m,k)),b=c}else{const C=t;M=Qe(C.length>1?C(s,{attrs:c,slots:o,emit:l}):C(s,null)),b=t.props?c:Pd(c)}}catch(C){Kn.length=0,Ai(C,e,1),M=be(nn)}let R=M;if(b&&A!==!1){const C=Object.keys(b),{shapeFlag:j}=R;C.length&&j&7&&(a&&C.some(Ys)&&(b=Od(b,a)),R=An(R,b))}return n.dirs&&(R=An(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),M=R,ai(_),M}const Pd=e=>{let t;for(const n in e)(n==="class"||n==="style"||_i(n))&&((t||(t={}))[n]=e[n]);return t},Od=(e,t)=>{const n={};for(const r in e)(!Ys(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Rd(e,t,n){const{props:r,children:i,component:s}=e,{props:a,children:o,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?no(r,a,l):!!a;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const m=u[f];if(a[m]!==r[m]&&!Ti(l,m))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===a?!1:r?a?no(r,a,l):!0:!!a;return!1}function no(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Ti(n,s))return!0}return!1}function Nd({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Md=e=>e.__isSuspense;function Dd(e,t){t&&t.pendingBranch?H(e)?t.effects.push(...e):t.effects.push(e):Sd(e)}const Mr={};function Zt(e,t,n){return yl(e,t,n)}function yl(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:a}=ue){var o;const c=Yc()===((o=ve)==null?void 0:o.scope)?ve:null;let l,u=!1,f=!1;if(fe(e)?(l=()=>e.value,u=si(e)):ht(e)?(l=()=>e,r=!0):H(e)?(f=!0,u=e.some(C=>ht(C)||si(C)),l=()=>e.map(C=>{if(fe(C))return C.value;if(ht(C))return mn(C);if(V(C))return Nt(C,c,2)})):V(e)?t?l=()=>Nt(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return m&&m(),Ke(e,c,3,[g])}:l=Ve,t&&r){const C=l;l=()=>mn(C())}let m,g=C=>{m=_.onStop=()=>{Nt(C,c,4)}},k;if(sr)if(g=Ve,t?n&&Ke(t,c,3,[l(),f?[]:void 0,g]):l(),i==="sync"){const C=Ch();k=C.__watcherHandles||(C.__watcherHandles=[])}else return Ve;let A=f?new Array(e.length).fill(Mr):Mr;const M=()=>{if(_.active)if(t){const C=_.run();(r||u||(f?C.some((j,X)=>Zn(j,A[X])):Zn(C,A)))&&(m&&m(),Ke(t,c,3,[C,A===Mr?void 0:f&&A[0]===Mr?[]:A,g]),A=C)}else _.run()};M.allowRecurse=!!t;let b;i==="sync"?b=M:i==="post"?b=()=>Ce(M,c&&c.suspense):(M.pre=!0,c&&(M.id=c.uid),b=()=>la(M));const _=new ta(l,b);t?n?M():A=_.run():i==="post"?Ce(_.run.bind(_),c&&c.suspense):_.run();const R=()=>{_.stop(),c&&c.scope&&Xs(c.scope.effects,_)};return k&&k.push(R),R}function Ld(e,t,n){const r=this.proxy,i=pe(e)?e.includes(".")?_l(r,e):()=>r[e]:e.bind(r,r);let s;V(t)?s=t:(s=t.handler,n=t);const a=ve;Tn(this);const o=yl(i,s.bind(r),n);return a?Tn(a):en(),o}function _l(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function mn(e,t){if(!le(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))mn(e.value,t);else if(H(e))for(let n=0;n<e.length;n++)mn(e[n],t);else if(Bc(e)||bn(e))e.forEach(n=>{mn(n,t)});else if(Wc(e))for(const n in e)mn(e[n],t);return e}function Wt(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let c=o.dir[r];c&&(Mn(),Ke(c,n,8,[e.el,o,e,t]),Dn())}}function jt(e,t){return V(e)?(()=>ye({name:e.name},t,{setup:e}))():e}const qr=e=>!!e.type.__asyncLoader,wl=e=>e.type.__isKeepAlive;function Ud(e,t){El(e,"a",t)}function Fd(e,t){El(e,"da",t)}function El(e,t,n=ve){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Ci(t,r,n),n){let i=n.parent;for(;i&&i.parent;)wl(i.parent.vnode)&&$d(r,t,n,i),i=i.parent}}function $d(e,t,n,r){const i=Ci(t,e,r,!0);ua(()=>{Xs(r[t],i)},n)}function Ci(e,t,n=ve,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;Mn(),Tn(n);const o=Ke(t,n,e,a);return en(),Dn(),o});return r?i.unshift(s):i.push(s),s}}const yt=e=>(t,n=ve)=>(!sr||e==="sp")&&Ci(e,(...r)=>t(...r),n),jd=yt("bm"),Il=yt("m"),Bd=yt("bu"),Hd=yt("u"),zd=yt("bum"),ua=yt("um"),Wd=yt("sp"),Vd=yt("rtg"),Kd=yt("rtc");function qd(e,t=ve){Ci("ec",e,t)}const kl="components";function Gd(e,t){return Xd(kl,e,!0,t)||e}const Yd=Symbol.for("v-ndc");function Xd(e,t,n=!0,r=!1){const i=$e||ve;if(i){const s=i.type;if(e===kl){const o=Ah(s,!1);if(o&&(o===t||o===it(t)||o===Ii(it(t))))return s}const a=ro(i[e]||s[e],t)||ro(i.appContext[e],t);return!a&&r?s:a}}function ro(e,t){return e&&(e[t]||e[it(t)]||e[Ii(it(t))])}function Sl(e,t,n,r){let i;const s=n&&n[r];if(H(e)||pe(e)){i=new Array(e.length);for(let a=0,o=e.length;a<o;a++)i[a]=t(e[a],a,void 0,s&&s[a])}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,s&&s[a])}else if(le(e))if(e[Symbol.iterator])i=Array.from(e,(a,o)=>t(a,o,void 0,s&&s[o]));else{const a=Object.keys(e);i=new Array(a.length);for(let o=0,c=a.length;o<c;o++){const l=a[o];i[o]=t(e[l],l,o,s&&s[o])}}else i=[];return n&&(n[r]=i),i}const vs=e=>e?Ll(e)?pa(e)||e.proxy:vs(e.parent):null,Vn=ye(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>vs(e.parent),$root:e=>vs(e.root),$emit:e=>e.emit,$options:e=>fa(e),$forceUpdate:e=>e.f||(e.f=()=>la(e.update)),$nextTick:e=>e.n||(e.n=ca.bind(e.proxy)),$watch:e=>Ld.bind(e)}),Ki=(e,t)=>e!==ue&&!e.__isScriptSetup&&Y(e,t),Jd={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:o,appContext:c}=e;let l;if(t[0]!=="$"){const g=a[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(Ki(r,t))return a[t]=1,r[t];if(i!==ue&&Y(i,t))return a[t]=2,i[t];if((l=e.propsOptions[0])&&Y(l,t))return a[t]=3,s[t];if(n!==ue&&Y(n,t))return a[t]=4,n[t];bs&&(a[t]=0)}}const u=Vn[t];let f,m;if(u)return t==="$attrs"&&Oe(e,"get",t),u(e);if((f=o.__cssModules)&&(f=f[t]))return f;if(n!==ue&&Y(n,t))return a[t]=4,n[t];if(m=c.config.globalProperties,Y(m,t))return m[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return Ki(i,t)?(i[t]=n,!0):r!==ue&&Y(r,t)?(r[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let o;return!!n[a]||e!==ue&&Y(e,a)||Ki(t,a)||(o=s[0])&&Y(o,a)||Y(r,a)||Y(Vn,a)||Y(i.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function io(e){return H(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let bs=!0;function Qd(e){const t=fa(e),n=e.proxy,r=e.ctx;bs=!1,t.beforeCreate&&so(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:c,inject:l,created:u,beforeMount:f,mounted:m,beforeUpdate:g,updated:k,activated:A,deactivated:M,beforeDestroy:b,beforeUnmount:_,destroyed:R,unmounted:C,render:j,renderTracked:X,renderTriggered:J,errorCaptured:K,serverPrefetch:B,expose:ae,inheritAttrs:_e,components:Re,directives:Ue,filters:zt}=t;if(l&&Zd(l,r,null),a)for(const re in a){const Z=a[re];V(Z)&&(r[re]=Z.bind(n))}if(i){const re=i.call(n,n);le(re)&&(e.data=vr(re))}if(bs=!0,s)for(const re in s){const Z=s[re],at=V(Z)?Z.bind(n,n):V(Z.get)?Z.get.bind(n,n):Ve,wt=!V(Z)&&V(Z.set)?Z.set.bind(n):Ve,Ye=me({get:at,set:wt});Object.defineProperty(r,re,{enumerable:!0,configurable:!0,get:()=>Ye.value,set:Te=>Ye.value=Te})}if(o)for(const re in o)Al(o[re],r,n,re);if(c){const re=V(c)?c.call(n):c;Reflect.ownKeys(re).forEach(Z=>{Gr(Z,re[Z])})}u&&so(u,e,"c");function Q(re,Z){H(Z)?Z.forEach(at=>re(at.bind(n))):Z&&re(Z.bind(n))}if(Q(jd,f),Q(Il,m),Q(Bd,g),Q(Hd,k),Q(Ud,A),Q(Fd,M),Q(qd,K),Q(Kd,X),Q(Vd,J),Q(zd,_),Q(ua,C),Q(Wd,B),H(ae))if(ae.length){const re=e.exposed||(e.exposed={});ae.forEach(Z=>{Object.defineProperty(re,Z,{get:()=>n[Z],set:at=>n[Z]=at})})}else e.exposed||(e.exposed={});j&&e.render===Ve&&(e.render=j),_e!=null&&(e.inheritAttrs=_e),Re&&(e.components=Re),Ue&&(e.directives=Ue)}function Zd(e,t,n=Ve){H(e)&&(e=ys(e));for(const r in e){const i=e[r];let s;le(i)?"default"in i?s=qe(i.from||r,i.default,!0):s=qe(i.from||r):s=qe(i),fe(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[r]=s}}function so(e,t,n){Ke(H(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Al(e,t,n,r){const i=r.includes(".")?_l(n,r):()=>n[r];if(pe(e)){const s=t[e];V(s)&&Zt(i,s)}else if(V(e))Zt(i,e.bind(n));else if(le(e))if(H(e))e.forEach(s=>Al(s,t,n,r));else{const s=V(e.handler)?e.handler.bind(n):t[e.handler];V(s)&&Zt(i,s,e)}}function fa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let c;return o?c=o:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(l=>oi(c,l,a,!0)),oi(c,t,a)),le(t)&&s.set(t,c),c}function oi(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&oi(e,s,n,!0),i&&i.forEach(a=>oi(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const o=eh[a]||n&&n[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const eh={data:ao,props:oo,emits:oo,methods:Hn,computed:Hn,beforeCreate:Se,created:Se,beforeMount:Se,mounted:Se,beforeUpdate:Se,updated:Se,beforeDestroy:Se,beforeUnmount:Se,destroyed:Se,unmounted:Se,activated:Se,deactivated:Se,errorCaptured:Se,serverPrefetch:Se,components:Hn,directives:Hn,watch:nh,provide:ao,inject:th};function ao(e,t){return t?e?function(){return ye(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function th(e,t){return Hn(ys(e),ys(t))}function ys(e){if(H(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Se(e,t){return e?[...new Set([].concat(e,t))]:t}function Hn(e,t){return e?ye(Object.create(null),e,t):t}function oo(e,t){return e?H(e)&&H(t)?[...new Set([...e,...t])]:ye(Object.create(null),io(e),io(t??{})):t}function nh(e,t){if(!e)return t;if(!t)return e;const n=ye(Object.create(null),e);for(const r in t)n[r]=Se(e[r],t[r]);return n}function Tl(){return{app:null,config:{isNativeTag:kf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rh=0;function ih(e,t){return function(r,i=null){V(r)||(r=ye({},r)),i!=null&&!le(i)&&(i=null);const s=Tl(),a=new Set;let o=!1;const c=s.app={_uid:rh++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Ph,get config(){return s.config},set config(l){},use(l,...u){return a.has(l)||(l&&V(l.install)?(a.add(l),l.install(c,...u)):V(l)&&(a.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,f){if(!o){const m=be(r,i);return m.appContext=s,u&&t?t(m,l):e(m,l,f),o=!0,c._container=l,l.__vue_app__=c,pa(m.component)||m.component.proxy}},unmount(){o&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){rr=c;try{return l()}finally{rr=null}}};return c}}let rr=null;function Gr(e,t){if(ve){let n=ve.provides;const r=ve.parent&&ve.parent.provides;r===n&&(n=ve.provides=Object.create(r)),n[e]=t}}function qe(e,t,n=!1){const r=ve||$e;if(r||rr){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:rr._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&V(t)?t.call(r&&r.proxy):t}}function sh(){return!!(ve||$e||rr)}function ah(e,t,n,r=!1){const i={},s={};ri(s,Oi,1),e.propsDefaults=Object.create(null),xl(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=r?i:al(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function oh(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=G(i),[c]=e.propsOptions;let l=!1;if((r||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let m=u[f];if(Ti(e.emitsOptions,m))continue;const g=t[m];if(c)if(Y(s,m))g!==s[m]&&(s[m]=g,l=!0);else{const k=it(m);i[k]=_s(c,o,k,g,e,!1)}else g!==s[m]&&(s[m]=g,l=!0)}}}else{xl(e,t,i,s)&&(l=!0);let u;for(const f in o)(!t||!Y(t,f)&&((u=Nn(f))===f||!Y(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=_s(c,o,f,void 0,e,!0)):delete i[f]);if(s!==o)for(const f in s)(!t||!Y(t,f))&&(delete s[f],l=!0)}l&&mt(e,"set","$attrs")}function xl(e,t,n,r){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let c in t){if(Kr(c))continue;const l=t[c];let u;i&&Y(i,u=it(c))?!s||!s.includes(u)?n[u]=l:(o||(o={}))[u]=l:Ti(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,a=!0)}if(s){const c=G(n),l=o||ue;for(let u=0;u<s.length;u++){const f=s[u];n[f]=_s(i,c,f,l[f],e,!Y(l,f))}}return a}function _s(e,t,n,r,i,s){const a=e[n];if(a!=null){const o=Y(a,"default");if(o&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&V(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(Tn(i),r=l[n]=c.call(null,t),en())}else r=c}a[0]&&(s&&!o?r=!1:a[1]&&(r===""||r===Nn(n))&&(r=!0))}return r}function Cl(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},o=[];let c=!1;if(!V(e)){const u=f=>{c=!0;const[m,g]=Cl(f,t,!0);ye(a,m),g&&o.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return le(e)&&r.set(e,vn),vn;if(H(s))for(let u=0;u<s.length;u++){const f=it(s[u]);co(f)&&(a[f]=ue)}else if(s)for(const u in s){const f=it(u);if(co(f)){const m=s[u],g=a[f]=H(m)||V(m)?{type:m}:ye({},m);if(g){const k=fo(Boolean,g.type),A=fo(String,g.type);g[0]=k>-1,g[1]=A<0||k<A,(k>-1||Y(g,"default"))&&o.push(f)}}}const l=[a,o];return le(e)&&r.set(e,l),l}function co(e){return e[0]!=="$"}function lo(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function uo(e,t){return lo(e)===lo(t)}function fo(e,t){return H(t)?t.findIndex(n=>uo(n,e)):V(t)&&uo(t,e)?0:-1}const Pl=e=>e[0]==="_"||e==="$stable",da=e=>H(e)?e.map(Qe):[Qe(e)],ch=(e,t,n)=>{if(t._n)return t;const r=Bn((...i)=>da(t(...i)),n);return r._c=!1,r},Ol=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Pl(i))continue;const s=e[i];if(V(s))t[i]=ch(i,s,r);else if(s!=null){const a=da(s);t[i]=()=>a}}},Rl=(e,t)=>{const n=da(t);e.slots.default=()=>n},lh=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=G(t),ri(t,"_",n)):Ol(t,e.slots={})}else e.slots={},t&&Rl(e,t);ri(e.slots,Oi,1)},uh=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=ue;if(r.shapeFlag&32){const o=t._;o?n&&o===1?s=!1:(ye(i,t),!n&&o===1&&delete i._):(s=!t.$stable,Ol(t,i)),a=t}else t&&(Rl(e,t),a={default:1});if(s)for(const o in i)!Pl(o)&&!(o in a)&&delete i[o]};function ws(e,t,n,r,i=!1){if(H(e)){e.forEach((m,g)=>ws(m,t&&(H(t)?t[g]:t),n,r,i));return}if(qr(r)&&!i)return;const s=r.shapeFlag&4?pa(r.component)||r.component.proxy:r.el,a=i?null:s,{i:o,r:c}=e,l=t&&t.r,u=o.refs===ue?o.refs={}:o.refs,f=o.setupState;if(l!=null&&l!==c&&(pe(l)?(u[l]=null,Y(f,l)&&(f[l]=null)):fe(l)&&(l.value=null)),V(c))Nt(c,o,12,[a,u]);else{const m=pe(c),g=fe(c);if(m||g){const k=()=>{if(e.f){const A=m?Y(f,c)?f[c]:u[c]:c.value;i?H(A)&&Xs(A,s):H(A)?A.includes(s)||A.push(s):m?(u[c]=[s],Y(f,c)&&(f[c]=u[c])):(c.value=[s],e.k&&(u[e.k]=c.value))}else m?(u[c]=a,Y(f,c)&&(f[c]=a)):g&&(c.value=a,e.k&&(u[e.k]=a))};a?(k.id=-1,Ce(k,n)):k()}}}const Ce=Dd;function fh(e){return dh(e)}function dh(e,t){const n=ds();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:o,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:m,setScopeId:g=Ve,insertStaticContent:k}=e,A=(d,h,p,v=null,w=null,E=null,P=!1,S=null,T=!!h.dynamicChildren)=>{if(d===h)return;d&&!Fn(d,h)&&(v=y(d),Te(d,w,E,!0),d=null),h.patchFlag===-2&&(T=!1,h.dynamicChildren=null);const{type:I,ref:F,shapeFlag:D}=h;switch(I){case Pi:M(d,h,p,v);break;case nn:b(d,h,p,v);break;case qi:d==null&&_(h,p,v,P);break;case Be:Re(d,h,p,v,w,E,P,S,T);break;default:D&1?j(d,h,p,v,w,E,P,S,T):D&6?Ue(d,h,p,v,w,E,P,S,T):(D&64||D&128)&&I.process(d,h,p,v,w,E,P,S,T,x)}F!=null&&w&&ws(F,d&&d.ref,E,h||d,!h)},M=(d,h,p,v)=>{if(d==null)r(h.el=o(h.children),p,v);else{const w=h.el=d.el;h.children!==d.children&&l(w,h.children)}},b=(d,h,p,v)=>{d==null?r(h.el=c(h.children||""),p,v):h.el=d.el},_=(d,h,p,v)=>{[d.el,d.anchor]=k(d.children,h,p,v,d.el,d.anchor)},R=({el:d,anchor:h},p,v)=>{let w;for(;d&&d!==h;)w=m(d),r(d,p,v),d=w;r(h,p,v)},C=({el:d,anchor:h})=>{let p;for(;d&&d!==h;)p=m(d),i(d),d=p;i(h)},j=(d,h,p,v,w,E,P,S,T)=>{P=P||h.type==="svg",d==null?X(h,p,v,w,E,P,S,T):B(d,h,w,E,P,S,T)},X=(d,h,p,v,w,E,P,S)=>{let T,I;const{type:F,props:D,shapeFlag:$,transition:z,dirs:q}=d;if(T=d.el=a(d.type,E,D&&D.is,D),$&8?u(T,d.children):$&16&&K(d.children,T,null,v,w,E&&F!=="foreignObject",P,S),q&&Wt(d,null,v,"created"),J(T,d,d.scopeId,P,v),D){for(const ne in D)ne!=="value"&&!Kr(ne)&&s(T,ne,null,D[ne],E,d.children,v,w,we);"value"in D&&s(T,"value",null,D.value),(I=D.onVnodeBeforeMount)&&Je(I,v,d)}q&&Wt(d,null,v,"beforeMount");const se=(!w||w&&!w.pendingBranch)&&z&&!z.persisted;se&&z.beforeEnter(T),r(T,h,p),((I=D&&D.onVnodeMounted)||se||q)&&Ce(()=>{I&&Je(I,v,d),se&&z.enter(T),q&&Wt(d,null,v,"mounted")},w)},J=(d,h,p,v,w)=>{if(p&&g(d,p),v)for(let E=0;E<v.length;E++)g(d,v[E]);if(w){let E=w.subTree;if(h===E){const P=w.vnode;J(d,P,P.scopeId,P.slotScopeIds,w.parent)}}},K=(d,h,p,v,w,E,P,S,T=0)=>{for(let I=T;I<d.length;I++){const F=d[I]=S?Tt(d[I]):Qe(d[I]);A(null,F,h,p,v,w,E,P,S)}},B=(d,h,p,v,w,E,P)=>{const S=h.el=d.el;let{patchFlag:T,dynamicChildren:I,dirs:F}=h;T|=d.patchFlag&16;const D=d.props||ue,$=h.props||ue;let z;p&&Vt(p,!1),(z=$.onVnodeBeforeUpdate)&&Je(z,p,h,d),F&&Wt(h,d,p,"beforeUpdate"),p&&Vt(p,!0);const q=w&&h.type!=="foreignObject";if(I?ae(d.dynamicChildren,I,S,p,v,q,E):P||Z(d,h,S,null,p,v,q,E,!1),T>0){if(T&16)_e(S,h,D,$,p,v,w);else if(T&2&&D.class!==$.class&&s(S,"class",null,$.class,w),T&4&&s(S,"style",D.style,$.style,w),T&8){const se=h.dynamicProps;for(let ne=0;ne<se.length;ne++){const he=se[ne],je=D[he],un=$[he];(un!==je||he==="value")&&s(S,he,je,un,w,d.children,p,v,we)}}T&1&&d.children!==h.children&&u(S,h.children)}else!P&&I==null&&_e(S,h,D,$,p,v,w);((z=$.onVnodeUpdated)||F)&&Ce(()=>{z&&Je(z,p,h,d),F&&Wt(h,d,p,"updated")},v)},ae=(d,h,p,v,w,E,P)=>{for(let S=0;S<h.length;S++){const T=d[S],I=h[S],F=T.el&&(T.type===Be||!Fn(T,I)||T.shapeFlag&70)?f(T.el):p;A(T,I,F,null,v,w,E,P,!0)}},_e=(d,h,p,v,w,E,P)=>{if(p!==v){if(p!==ue)for(const S in p)!Kr(S)&&!(S in v)&&s(d,S,p[S],null,P,h.children,w,E,we);for(const S in v){if(Kr(S))continue;const T=v[S],I=p[S];T!==I&&S!=="value"&&s(d,S,I,T,P,h.children,w,E,we)}"value"in v&&s(d,"value",p.value,v.value)}},Re=(d,h,p,v,w,E,P,S,T)=>{const I=h.el=d?d.el:o(""),F=h.anchor=d?d.anchor:o("");let{patchFlag:D,dynamicChildren:$,slotScopeIds:z}=h;z&&(S=S?S.concat(z):z),d==null?(r(I,p,v),r(F,p,v),K(h.children,p,F,w,E,P,S,T)):D>0&&D&64&&$&&d.dynamicChildren?(ae(d.dynamicChildren,$,p,w,E,P,S),(h.key!=null||w&&h===w.subTree)&&Nl(d,h,!0)):Z(d,h,p,F,w,E,P,S,T)},Ue=(d,h,p,v,w,E,P,S,T)=>{h.slotScopeIds=S,d==null?h.shapeFlag&512?w.ctx.activate(h,p,v,P,T):zt(h,p,v,w,E,P,T):Fe(d,h,T)},zt=(d,h,p,v,w,E,P)=>{const S=d.component=wh(d,v,w);if(wl(d)&&(S.ctx.renderer=x),Eh(S),S.asyncDep){if(w&&w.registerDep(S,Q),!d.el){const T=S.subTree=be(nn);b(null,T,h,p)}return}Q(S,d,h,p,w,E,P)},Fe=(d,h,p)=>{const v=h.component=d.component;if(Rd(d,h,p))if(v.asyncDep&&!v.asyncResolved){re(v,h,p);return}else v.next=h,kd(v.update),v.update();else h.el=d.el,v.vnode=h},Q=(d,h,p,v,w,E,P)=>{const S=()=>{if(d.isMounted){let{next:F,bu:D,u:$,parent:z,vnode:q}=d,se=F,ne;Vt(d,!1),F?(F.el=q.el,re(d,F,P)):F=q,D&&Wi(D),(ne=F.props&&F.props.onVnodeBeforeUpdate)&&Je(ne,z,F,q),Vt(d,!0);const he=Vi(d),je=d.subTree;d.subTree=he,A(je,he,f(je.el),y(je),d,w,E),F.el=he.el,se===null&&Nd(d,he.el),$&&Ce($,w),(ne=F.props&&F.props.onVnodeUpdated)&&Ce(()=>Je(ne,z,F,q),w)}else{let F;const{el:D,props:$}=h,{bm:z,m:q,parent:se}=d,ne=qr(h);if(Vt(d,!1),z&&Wi(z),!ne&&(F=$&&$.onVnodeBeforeMount)&&Je(F,se,h),Vt(d,!0),D&&ee){const he=()=>{d.subTree=Vi(d),ee(D,d.subTree,d,w,null)};ne?h.type.__asyncLoader().then(()=>!d.isUnmounted&&he()):he()}else{const he=d.subTree=Vi(d);A(null,he,p,v,d,w,E),h.el=he.el}if(q&&Ce(q,w),!ne&&(F=$&&$.onVnodeMounted)){const he=h;Ce(()=>Je(F,se,he),w)}(h.shapeFlag&256||se&&qr(se.vnode)&&se.vnode.shapeFlag&256)&&d.a&&Ce(d.a,w),d.isMounted=!0,h=p=v=null}},T=d.effect=new ta(S,()=>la(I),d.scope),I=d.update=()=>T.run();I.id=d.uid,Vt(d,!0),I()},re=(d,h,p)=>{h.component=d;const v=d.vnode.props;d.vnode=h,d.next=null,oh(d,h.props,v,p),uh(d,h.children,p),Mn(),to(),Dn()},Z=(d,h,p,v,w,E,P,S,T=!1)=>{const I=d&&d.children,F=d?d.shapeFlag:0,D=h.children,{patchFlag:$,shapeFlag:z}=h;if($>0){if($&128){wt(I,D,p,v,w,E,P,S,T);return}else if($&256){at(I,D,p,v,w,E,P,S,T);return}}z&8?(F&16&&we(I,w,E),D!==I&&u(p,D)):F&16?z&16?wt(I,D,p,v,w,E,P,S,T):we(I,w,E,!0):(F&8&&u(p,""),z&16&&K(D,p,v,w,E,P,S,T))},at=(d,h,p,v,w,E,P,S,T)=>{d=d||vn,h=h||vn;const I=d.length,F=h.length,D=Math.min(I,F);let $;for($=0;$<D;$++){const z=h[$]=T?Tt(h[$]):Qe(h[$]);A(d[$],z,p,null,w,E,P,S,T)}I>F?we(d,w,E,!0,!1,D):K(h,p,v,w,E,P,S,T,D)},wt=(d,h,p,v,w,E,P,S,T)=>{let I=0;const F=h.length;let D=d.length-1,$=F-1;for(;I<=D&&I<=$;){const z=d[I],q=h[I]=T?Tt(h[I]):Qe(h[I]);if(Fn(z,q))A(z,q,p,null,w,E,P,S,T);else break;I++}for(;I<=D&&I<=$;){const z=d[D],q=h[$]=T?Tt(h[$]):Qe(h[$]);if(Fn(z,q))A(z,q,p,null,w,E,P,S,T);else break;D--,$--}if(I>D){if(I<=$){const z=$+1,q=z<F?h[z].el:v;for(;I<=$;)A(null,h[I]=T?Tt(h[I]):Qe(h[I]),p,q,w,E,P,S,T),I++}}else if(I>$)for(;I<=D;)Te(d[I],w,E,!0),I++;else{const z=I,q=I,se=new Map;for(I=q;I<=$;I++){const Ne=h[I]=T?Tt(h[I]):Qe(h[I]);Ne.key!=null&&se.set(Ne.key,I)}let ne,he=0;const je=$-q+1;let un=!1,Wa=0;const Un=new Array(je);for(I=0;I<je;I++)Un[I]=0;for(I=z;I<=D;I++){const Ne=d[I];if(he>=je){Te(Ne,w,E,!0);continue}let Xe;if(Ne.key!=null)Xe=se.get(Ne.key);else for(ne=q;ne<=$;ne++)if(Un[ne-q]===0&&Fn(Ne,h[ne])){Xe=ne;break}Xe===void 0?Te(Ne,w,E,!0):(Un[Xe-q]=I+1,Xe>=Wa?Wa=Xe:un=!0,A(Ne,h[Xe],p,null,w,E,P,S,T),he++)}const Va=un?hh(Un):vn;for(ne=Va.length-1,I=je-1;I>=0;I--){const Ne=q+I,Xe=h[Ne],Ka=Ne+1<F?h[Ne+1].el:v;Un[I]===0?A(null,Xe,p,Ka,w,E,P,S,T):un&&(ne<0||I!==Va[ne]?Ye(Xe,p,Ka,2):ne--)}}},Ye=(d,h,p,v,w=null)=>{const{el:E,type:P,transition:S,children:T,shapeFlag:I}=d;if(I&6){Ye(d.component.subTree,h,p,v);return}if(I&128){d.suspense.move(h,p,v);return}if(I&64){P.move(d,h,p,x);return}if(P===Be){r(E,h,p);for(let D=0;D<T.length;D++)Ye(T[D],h,p,v);r(d.anchor,h,p);return}if(P===qi){R(d,h,p);return}if(v!==2&&I&1&&S)if(v===0)S.beforeEnter(E),r(E,h,p),Ce(()=>S.enter(E),w);else{const{leave:D,delayLeave:$,afterLeave:z}=S,q=()=>r(E,h,p),se=()=>{D(E,()=>{q(),z&&z()})};$?$(E,q,se):se()}else r(E,h,p)},Te=(d,h,p,v=!1,w=!1)=>{const{type:E,props:P,ref:S,children:T,dynamicChildren:I,shapeFlag:F,patchFlag:D,dirs:$}=d;if(S!=null&&ws(S,null,p,d,!0),F&256){h.ctx.deactivate(d);return}const z=F&1&&$,q=!qr(d);let se;if(q&&(se=P&&P.onVnodeBeforeUnmount)&&Je(se,h,d),F&6)xr(d.component,p,v);else{if(F&128){d.suspense.unmount(p,v);return}z&&Wt(d,null,h,"beforeUnmount"),F&64?d.type.remove(d,h,p,w,x,v):I&&(E!==Be||D>0&&D&64)?we(I,h,p,!1,!0):(E===Be&&D&384||!w&&F&16)&&we(T,h,p),v&&cn(d)}(q&&(se=P&&P.onVnodeUnmounted)||z)&&Ce(()=>{se&&Je(se,h,d),z&&Wt(d,null,h,"unmounted")},p)},cn=d=>{const{type:h,el:p,anchor:v,transition:w}=d;if(h===Be){ln(p,v);return}if(h===qi){C(d);return}const E=()=>{i(p),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:P,delayLeave:S}=w,T=()=>P(p,E);S?S(d.el,E,T):T()}else E()},ln=(d,h)=>{let p;for(;d!==h;)p=m(d),i(d),d=p;i(h)},xr=(d,h,p)=>{const{bum:v,scope:w,update:E,subTree:P,um:S}=d;v&&Wi(v),w.stop(),E&&(E.active=!1,Te(P,d,h,p)),S&&Ce(S,h),Ce(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},we=(d,h,p,v=!1,w=!1,E=0)=>{for(let P=E;P<d.length;P++)Te(d[P],h,p,v,w)},y=d=>d.shapeFlag&6?y(d.component.subTree):d.shapeFlag&128?d.suspense.next():m(d.anchor||d.el),N=(d,h,p)=>{d==null?h._vnode&&Te(h._vnode,null,null,!0):A(h._vnode||null,d,h,null,null,null,p),to(),gl(),h._vnode=d},x={p:A,um:Te,m:Ye,r:cn,mt:zt,mc:K,pc:Z,pbc:ae,n:y,o:e};let U,ee;return t&&([U,ee]=t(x)),{render:N,hydrate:U,createApp:ih(N,U)}}function Vt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Nl(e,t,n=!1){const r=e.children,i=t.children;if(H(r)&&H(i))for(let s=0;s<r.length;s++){const a=r[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=Tt(i[s]),o.el=a.el),n||Nl(a,o)),o.type===Pi&&(o.el=a.el)}}function hh(e){const t=e.slice(),n=[0];let r,i,s,a,o;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,e[n[o]]<l?s=o+1:a=o;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}const mh=e=>e.__isTeleport,Be=Symbol.for("v-fgt"),Pi=Symbol.for("v-txt"),nn=Symbol.for("v-cmt"),qi=Symbol.for("v-stc"),Kn=[];let ze=null;function Pe(e=!1){Kn.push(ze=e?null:[])}function ph(){Kn.pop(),ze=Kn[Kn.length-1]||null}let ir=1;function ho(e){ir+=e}function Ml(e){return e.dynamicChildren=ir>0?ze||vn:null,ph(),ir>0&&ze&&ze.push(e),e}function et(e,t,n,r,i,s){return Ml(De(e,t,n,r,i,s,!0))}function Yr(e,t,n,r,i){return Ml(be(e,t,n,r,i,!0))}function Es(e){return e?e.__v_isVNode===!0:!1}function Fn(e,t){return e.type===t.type&&e.key===t.key}const Oi="__vInternal",Dl=({key:e})=>e??null,Xr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?pe(e)||fe(e)||V(e)?{i:$e,r:e,k:t,f:!!n}:e:null);function De(e,t=null,n=null,r=0,i=null,s=e===Be?0:1,a=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Dl(t),ref:t&&Xr(t),scopeId:xi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:$e};return o?(ha(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=pe(n)?8:16),ir>0&&!a&&ze&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&ze.push(c),c}const be=gh;function gh(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===Yd)&&(e=nn),Es(e)){const o=An(e,t,!0);return n&&ha(o,n),ir>0&&!s&&ze&&(o.shapeFlag&6?ze[ze.indexOf(e)]=o:ze.push(o)),o.patchFlag|=-2,o}if(Th(e)&&(e=e.__vccOpts),t){t=vh(t);let{class:o,style:c}=t;o&&!pe(o)&&(t.class=gr(o)),le(c)&&(cl(c)&&!H(c)&&(c=ye({},c)),t.style=Zs(c))}const a=pe(e)?1:Md(e)?128:mh(e)?64:le(e)?4:V(e)?2:0;return De(e,t,n,r,i,a,s,!0)}function vh(e){return e?cl(e)||Oi in e?ye({},e):e:null}function An(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:a}=e,o=t?bh(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Dl(o),ref:t&&t.ref?n&&i?H(i)?i.concat(Xr(t)):[i,Xr(t)]:Xr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Be?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&An(e.ssContent),ssFallback:e.ssFallback&&An(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function zn(e=" ",t=0){return be(Pi,null,e,t)}function mo(e="",t=!1){return t?(Pe(),Yr(nn,null,e)):be(nn,null,e)}function Qe(e){return e==null||typeof e=="boolean"?be(nn):H(e)?be(Be,null,e.slice()):typeof e=="object"?Tt(e):be(Pi,null,String(e))}function Tt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:An(e)}function ha(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(H(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),ha(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Oi in t)?t._ctx=$e:i===3&&$e&&($e.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:$e},n=32):(t=String(t),r&64?(n=16,t=[zn(t)]):n=8);e.children=t,e.shapeFlag|=n}function bh(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=gr([t.class,r.class]));else if(i==="style")t.style=Zs([t.style,r.style]);else if(_i(i)){const s=t[i],a=r[i];a&&s!==a&&!(H(s)&&s.includes(a))&&(t[i]=s?[].concat(s,a):a)}else i!==""&&(t[i]=r[i])}return t}function Je(e,t,n,r=null){Ke(e,t,7,[n,r])}const yh=Tl();let _h=0;function wh(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||yh,s={uid:_h++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new qc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cl(r,i),emitsOptions:bl(r,i),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:r.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Td.bind(null,s),e.ce&&e.ce(s),s}let ve=null,ma,fn,po="__VUE_INSTANCE_SETTERS__";(fn=ds()[po])||(fn=ds()[po]=[]),fn.push(e=>ve=e),ma=e=>{fn.length>1?fn.forEach(t=>t(e)):fn[0](e)};const Tn=e=>{ma(e),e.scope.on()},en=()=>{ve&&ve.scope.off(),ma(null)};function Ll(e){return e.vnode.shapeFlag&4}let sr=!1;function Eh(e,t=!1){sr=t;const{props:n,children:r}=e.vnode,i=Ll(e);ah(e,n,i,t),lh(e,r);const s=i?Ih(e,t):void 0;return sr=!1,s}function Ih(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Si(new Proxy(e.ctx,Jd));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Sh(e):null;Tn(e),Mn();const s=Nt(r,e,0,[e.props,i]);if(Dn(),en(),Hc(s)){if(s.then(en,en),t)return s.then(a=>{go(e,a,t)}).catch(a=>{Ai(a,e,0)});e.asyncDep=s}else go(e,s,t)}else Ul(e,t)}function go(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:le(t)&&(e.setupState=dl(t)),Ul(e,n)}let vo;function Ul(e,t,n){const r=e.type;if(!e.render){if(!t&&vo&&!r.render){const i=r.template||fa(e).template;if(i){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:o,compilerOptions:c}=r,l=ye(ye({isCustomElement:s,delimiters:o},a),c);r.render=vo(i,l)}}e.render=r.render||Ve}Tn(e),Mn(),Qd(e),Dn(),en()}function kh(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Oe(e,"get","$attrs"),t[n]}}))}function Sh(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return kh(e)},slots:e.slots,emit:e.emit,expose:t}}function pa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(dl(Si(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Vn)return Vn[n](e)},has(t,n){return n in t||n in Vn}}))}function Ah(e,t=!0){return V(e)?e.displayName||e.name:e.name||t&&e.__name}function Th(e){return V(e)&&"__vccOpts"in e}const me=(e,t)=>wd(e,t,sr);function ga(e,t,n){const r=arguments.length;return r===2?le(t)&&!H(t)?Es(t)?be(e,null,[t]):be(e,t):be(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Es(n)&&(n=[n]),be(e,t,n))}const xh=Symbol.for("v-scx"),Ch=()=>qe(xh),Ph="3.3.4",Oh="http://www.w3.org/2000/svg",Gt=typeof document<"u"?document:null,bo=Gt&&Gt.createElement("template"),Rh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Gt.createElementNS(Oh,e):Gt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>Gt.createTextNode(e),createComment:e=>Gt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Gt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const a=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{bo.innerHTML=r?`<svg>${e}</svg>`:e;const o=bo.content;if(r){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Nh(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Mh(e,t,n){const r=e.style,i=pe(n);if(n&&!i){if(t&&!pe(t))for(const s in t)n[s]==null&&Is(r,s,"");for(const s in n)Is(r,s,n[s])}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const yo=/\s*!important$/;function Is(e,t,n){if(H(n))n.forEach(r=>Is(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Dh(e,t);yo.test(n)?e.setProperty(Nn(r),n.replace(yo,""),"important"):e[r]=n}}const _o=["Webkit","Moz","ms"],Gi={};function Dh(e,t){const n=Gi[t];if(n)return n;let r=it(t);if(r!=="filter"&&r in e)return Gi[t]=r;r=Ii(r);for(let i=0;i<_o.length;i++){const s=_o[i]+r;if(s in e)return Gi[t]=s}return t}const wo="http://www.w3.org/1999/xlink";function Lh(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(wo,t.slice(6,t.length)):e.setAttributeNS(wo,t,n);else{const s=Lf(t);n==null||s&&!Vc(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Uh(e,t,n,r,i,s,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,i,s),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){e._value=n;const l=o==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Vc(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Fh(e,t,n,r){e.addEventListener(t,n,r)}function $h(e,t,n,r){e.removeEventListener(t,n,r)}function jh(e,t,n,r,i=null){const s=e._vei||(e._vei={}),a=s[t];if(r&&a)a.value=r;else{const[o,c]=Bh(t);if(r){const l=s[t]=Wh(r,i);Fh(e,o,l,c)}else a&&($h(e,o,a,c),s[t]=void 0)}}const Eo=/(?:Once|Passive|Capture)$/;function Bh(e){let t;if(Eo.test(e)){t={};let r;for(;r=e.match(Eo);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Nn(e.slice(2)),t]}let Yi=0;const Hh=Promise.resolve(),zh=()=>Yi||(Hh.then(()=>Yi=0),Yi=Date.now());function Wh(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ke(Vh(r,n.value),t,5,[r])};return n.value=e,n.attached=zh(),n}function Vh(e,t){if(H(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const Io=/^on[a-z]/,Kh=(e,t,n,r,i=!1,s,a,o,c)=>{t==="class"?Nh(e,r,i):t==="style"?Mh(e,n,r):_i(t)?Ys(t)||jh(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):qh(e,t,r,i))?Uh(e,t,r,s,a,o,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Lh(e,t,r,i))};function qh(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Io.test(t)&&V(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Io.test(t)&&pe(n)?!1:t in e}const Gh=["ctrl","shift","alt","meta"],Yh={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Gh.some(n=>e[`${n}Key`]&&!t.includes(n))},f0=(e,t)=>(n,...r)=>{for(let i=0;i<t.length;i++){const s=Yh[t[i]];if(s&&s(n,t))return}return e(n,...r)},Xh=ye({patchProp:Kh},Rh);let ko;function Jh(){return ko||(ko=fh(Xh))}const Qh=(...e)=>{const t=Jh().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Zh(r);if(!i)return;const s=t._component;!V(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function Zh(e){return pe(e)?document.querySelector(e):e}var em=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Fl;const Ri=e=>Fl=e,$l=Symbol();function ks(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var qn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(qn||(qn={}));function tm(){const e=Gc(!0),t=e.run(()=>Ie({}));let n=[],r=[];const i=Si({install(s){Ri(i),i._a=s,s.provide($l,i),s.config.globalProperties.$pinia=i,r.forEach(a=>n.push(a)),r=[]},use(s){return!this._a&&!em?r.push(s):n.push(s),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}const jl=()=>{};function So(e,t,n,r=jl){e.push(t);const i=()=>{const s=e.indexOf(t);s>-1&&(e.splice(s,1),r())};return!n&&Yc()&&Ff(i),i}function dn(e,...t){e.slice().forEach(n=>{n(...t)})}const nm=e=>e();function Ss(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],i=e[n];ks(i)&&ks(r)&&e.hasOwnProperty(n)&&!fe(r)&&!ht(r)?e[n]=Ss(i,r):e[n]=r}return e}const rm=Symbol();function im(e){return!ks(e)||!e.hasOwnProperty(rm)}const{assign:At}=Object;function sm(e){return!!(fe(e)&&e.effect)}function am(e,t,n,r){const{state:i,actions:s,getters:a}=t,o=n.state.value[e];let c;function l(){o||(n.state.value[e]=i?i():{});const u=gd(n.state.value[e]);return At(u,s,Object.keys(a||{}).reduce((f,m)=>(f[m]=Si(me(()=>{Ri(n);const g=n._s.get(e);return a[m].call(g,g)})),f),{}))}return c=Bl(e,l,t,n,r,!0),c}function Bl(e,t,n={},r,i,s){let a;const o=At({actions:{}},n),c={deep:!0};let l,u,f=[],m=[],g;const k=r.state.value[e];!s&&!k&&(r.state.value[e]={}),Ie({});let A;function M(K){let B;l=u=!1,typeof K=="function"?(K(r.state.value[e]),B={type:qn.patchFunction,storeId:e,events:g}):(Ss(r.state.value[e],K),B={type:qn.patchObject,payload:K,storeId:e,events:g});const ae=A=Symbol();ca().then(()=>{A===ae&&(l=!0)}),u=!0,dn(f,B,r.state.value[e])}const b=s?function(){const{state:B}=n,ae=B?B():{};this.$patch(_e=>{At(_e,ae)})}:jl;function _(){a.stop(),f=[],m=[],r._s.delete(e)}function R(K,B){return function(){Ri(r);const ae=Array.from(arguments),_e=[],Re=[];function Ue(Q){_e.push(Q)}function zt(Q){Re.push(Q)}dn(m,{args:ae,name:K,store:j,after:Ue,onError:zt});let Fe;try{Fe=B.apply(this&&this.$id===e?this:j,ae)}catch(Q){throw dn(Re,Q),Q}return Fe instanceof Promise?Fe.then(Q=>(dn(_e,Q),Q)).catch(Q=>(dn(Re,Q),Promise.reject(Q))):(dn(_e,Fe),Fe)}}const C={_p:r,$id:e,$onAction:So.bind(null,m),$patch:M,$reset:b,$subscribe(K,B={}){const ae=So(f,K,B.detached,()=>_e()),_e=a.run(()=>Zt(()=>r.state.value[e],Re=>{(B.flush==="sync"?u:l)&&K({storeId:e,type:qn.direct,events:g},Re)},At({},c,B)));return ae},$dispose:_},j=vr(C);r._s.set(e,j);const X=r._a&&r._a.runWithContext||nm,J=r._e.run(()=>(a=Gc(),X(()=>a.run(t))));for(const K in J){const B=J[K];if(fe(B)&&!sm(B)||ht(B))s||(k&&im(B)&&(fe(B)?B.value=k[K]:Ss(B,k[K])),r.state.value[e][K]=B);else if(typeof B=="function"){const ae=R(K,B);J[K]=ae,o.actions[K]=B}}return At(j,J),At(G(j),J),Object.defineProperty(j,"$state",{get:()=>r.state.value[e],set:K=>{M(B=>{At(B,K)})}}),r._p.forEach(K=>{At(j,a.run(()=>K({store:j,app:r._a,pinia:r,options:o})))}),k&&s&&n.hydrate&&n.hydrate(j.$state,k),l=!0,u=!0,j}function Hl(e,t,n){let r,i;const s=typeof t=="function";typeof e=="string"?(r=e,i=s?n:t):(i=e,r=e.id);function a(o,c){const l=sh();return o=o||(l?qe($l,null):null),o&&Ri(o),o=Fl,o._s.has(r)||(s?Bl(r,t,i,o):am(r,i,o)),o._s.get(r)}return a.$id=r,a}function va(e){{e=G(e);const t={};for(const n in e){const r=e[n];(fe(r)||ht(r))&&(t[n]=yd(e,n))}return t}}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const hn=typeof window<"u";function om(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const te=Object.assign;function Xi(e,t){const n={};for(const r in t){const i=t[r];n[r]=Ge(i)?i.map(e):e(i)}return n}const Gn=()=>{},Ge=Array.isArray,cm=/\/$/,lm=e=>e.replace(cm,"");function Ji(e,t,n="/"){let r,i={},s="",a="";const o=t.indexOf("#");let c=t.indexOf("?");return o<c&&o>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,o>-1?o:t.length),i=e(s)),o>-1&&(r=r||t.slice(0,o),a=t.slice(o,t.length)),r=hm(r??t,n),{fullPath:r+(s&&"?")+s+a,path:r,query:i,hash:a}}function um(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Ao(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function fm(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&xn(t.matched[r],n.matched[i])&&zl(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function xn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function zl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!dm(e[n],t[n]))return!1;return!0}function dm(e,t){return Ge(e)?To(e,t):Ge(t)?To(t,e):e===t}function To(e,t){return Ge(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function hm(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,a,o;for(a=0;a<r.length;a++)if(o=r[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}var ar;(function(e){e.pop="pop",e.push="push"})(ar||(ar={}));var Yn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Yn||(Yn={}));function mm(e){if(!e)if(hn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),lm(e)}const pm=/^[^#]+#/;function gm(e,t){return e.replace(pm,"#")+t}function vm(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Ni=()=>({left:window.pageXOffset,top:window.pageYOffset});function bm(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=vm(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function xo(e,t){return(history.state?history.state.position-t:-1)+e}const As=new Map;function ym(e,t){As.set(e,t)}function _m(e){const t=As.get(e);return As.delete(e),t}let wm=()=>location.protocol+"//"+location.host;function Wl(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let o=i.includes(e.slice(s))?e.slice(s).length:1,c=i.slice(o);return c[0]!=="/"&&(c="/"+c),Ao(c,"")}return Ao(n,e)+r+i}function Em(e,t,n,r){let i=[],s=[],a=null;const o=({state:m})=>{const g=Wl(e,location),k=n.value,A=t.value;let M=0;if(m){if(n.value=g,t.value=m,a&&a===k){a=null;return}M=A?m.position-A.position:0}else r(g);i.forEach(b=>{b(n.value,k,{delta:M,type:ar.pop,direction:M?M>0?Yn.forward:Yn.back:Yn.unknown})})};function c(){a=n.value}function l(m){i.push(m);const g=()=>{const k=i.indexOf(m);k>-1&&i.splice(k,1)};return s.push(g),g}function u(){const{history:m}=window;m.state&&m.replaceState(te({},m.state,{scroll:Ni()}),"")}function f(){for(const m of s)m();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Co(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Ni():null}}function Im(e){const{history:t,location:n}=window,r={value:Wl(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const f=e.indexOf("#"),m=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:wm()+e+c;try{t[u?"replaceState":"pushState"](l,"",m),i.value=l}catch(g){console.error(g),n[u?"replace":"assign"](m)}}function a(c,l){const u=te({},t.state,Co(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function o(c,l){const u=te({},i.value,t.state,{forward:c,scroll:Ni()});s(u.current,u,!0);const f=te({},Co(r.value,c,null),{position:u.position+1},l);s(c,f,!1),r.value=c}return{location:r,state:i,push:o,replace:a}}function km(e){e=mm(e);const t=Im(e),n=Em(e,t.state,t.location,t.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=te({location:"",base:e,go:r,createHref:gm.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Sm(e){return typeof e=="string"||e&&typeof e=="object"}function Vl(e){return typeof e=="string"||typeof e=="symbol"}const It={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Kl=Symbol("");var Po;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Po||(Po={}));function Cn(e,t){return te(new Error,{type:e,[Kl]:!0},t)}function ot(e,t){return e instanceof Error&&Kl in e&&(t==null||!!(e.type&t))}const Oo="[^/]+?",Am={sensitive:!1,strict:!1,start:!0,end:!0},Tm=/[.+*?^${}()[\]/\\]/g;function xm(e,t){const n=te({},Am,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let f=0;f<l.length;f++){const m=l[f];let g=40+(n.sensitive?.25:0);if(m.type===0)f||(i+="/"),i+=m.value.replace(Tm,"\\$&"),g+=40;else if(m.type===1){const{value:k,repeatable:A,optional:M,regexp:b}=m;s.push({name:k,repeatable:A,optional:M});const _=b||Oo;if(_!==Oo){g+=10;try{new RegExp(`(${_})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${k}" (${_}): `+C.message)}}let R=A?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;f||(R=M&&l.length<2?`(?:/${R})`:"/"+R),M&&(R+="?"),i+=R,g+=20,M&&(g+=-8),A&&(g+=-20),_===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function o(l){const u=l.match(a),f={};if(!u)return null;for(let m=1;m<u.length;m++){const g=u[m]||"",k=s[m-1];f[k.name]=g&&k.repeatable?g.split("/"):g}return f}function c(l){let u="",f=!1;for(const m of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of m)if(g.type===0)u+=g.value;else if(g.type===1){const{value:k,repeatable:A,optional:M}=g,b=k in l?l[k]:"";if(Ge(b)&&!A)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const _=Ge(b)?b.join("/"):b;if(!_)if(M)m.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${k}"`);u+=_}}return u||"/"}return{re:a,score:r,keys:s,parse:o,stringify:c}}function Cm(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Pm(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=Cm(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Ro(r))return 1;if(Ro(i))return-1}return i.length-r.length}function Ro(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Om={type:0,value:""},Rm=/[a-zA-Z0-9_]/;function Nm(e){if(!e)return[[]];if(e==="/")return[[Om]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let o=0,c,l="",u="";function f(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function m(){l+=c}for(;o<e.length;){if(c=e[o++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),a()):c===":"?(f(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:Rm.test(c)?m():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&o--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&o--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),a(),i}function Mm(e,t,n){const r=xm(Nm(e.path),n),i=te(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Dm(e,t){const n=[],r=new Map;t=Do({strict:!1,end:!0,sensitive:!1},t);function i(u){return r.get(u)}function s(u,f,m){const g=!m,k=Lm(u);k.aliasOf=m&&m.record;const A=Do(t,u),M=[k];if("alias"in u){const R=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of R)M.push(te({},k,{components:m?m.record.components:k.components,path:C,aliasOf:m?m.record:k}))}let b,_;for(const R of M){const{path:C}=R;if(f&&C[0]!=="/"){const j=f.record.path,X=j[j.length-1]==="/"?"":"/";R.path=f.record.path+(C&&X+C)}if(b=Mm(R,f,A),m?m.alias.push(b):(_=_||b,_!==b&&_.alias.push(b),g&&u.name&&!Mo(b)&&a(u.name)),k.children){const j=k.children;for(let X=0;X<j.length;X++)s(j[X],b,m&&m.children[X])}m=m||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return _?()=>{a(_)}:Gn}function a(u){if(Vl(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return n}function c(u){let f=0;for(;f<n.length&&Pm(u,n[f])>=0&&(u.record.path!==n[f].record.path||!ql(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Mo(u)&&r.set(u.record.name,u)}function l(u,f){let m,g={},k,A;if("name"in u&&u.name){if(m=r.get(u.name),!m)throw Cn(1,{location:u});A=m.record.name,g=te(No(f.params,m.keys.filter(_=>!_.optional).map(_=>_.name)),u.params&&No(u.params,m.keys.map(_=>_.name))),k=m.stringify(g)}else if("path"in u)k=u.path,m=n.find(_=>_.re.test(k)),m&&(g=m.parse(k),A=m.record.name);else{if(m=f.name?r.get(f.name):n.find(_=>_.re.test(f.path)),!m)throw Cn(1,{location:u,currentLocation:f});A=m.record.name,g=te({},f.params,u.params),k=m.stringify(g)}const M=[];let b=m;for(;b;)M.unshift(b.record),b=b.parent;return{name:A,path:k,params:g,matched:M,meta:Fm(M)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:a,getRoutes:o,getRecordMatcher:i}}function No(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Lm(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Um(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Um(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Mo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Fm(e){return e.reduce((t,n)=>te(t,n.meta),{})}function Do(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function ql(e,t){return t.children.some(n=>n===e||ql(e,n))}const Gl=/#/g,$m=/&/g,jm=/\//g,Bm=/=/g,Hm=/\?/g,Yl=/\+/g,zm=/%5B/g,Wm=/%5D/g,Xl=/%5E/g,Vm=/%60/g,Jl=/%7B/g,Km=/%7C/g,Ql=/%7D/g,qm=/%20/g;function ba(e){return encodeURI(""+e).replace(Km,"|").replace(zm,"[").replace(Wm,"]")}function Gm(e){return ba(e).replace(Jl,"{").replace(Ql,"}").replace(Xl,"^")}function Ts(e){return ba(e).replace(Yl,"%2B").replace(qm,"+").replace(Gl,"%23").replace($m,"%26").replace(Vm,"`").replace(Jl,"{").replace(Ql,"}").replace(Xl,"^")}function Ym(e){return Ts(e).replace(Bm,"%3D")}function Xm(e){return ba(e).replace(Gl,"%23").replace(Hm,"%3F")}function Jm(e){return e==null?"":Xm(e).replace(jm,"%2F")}function ci(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Qm(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Yl," "),a=s.indexOf("="),o=ci(a<0?s:s.slice(0,a)),c=a<0?null:ci(s.slice(a+1));if(o in t){let l=t[o];Ge(l)||(l=t[o]=[l]),l.push(c)}else t[o]=c}return t}function Lo(e){let t="";for(let n in e){const r=e[n];if(n=Ym(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ge(r)?r.map(s=>s&&Ts(s)):[r&&Ts(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function Zm(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ge(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const ep=Symbol(""),Uo=Symbol(""),Mi=Symbol(""),Zl=Symbol(""),xs=Symbol("");function $n(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function xt(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,o)=>{const c=f=>{f===!1?o(Cn(4,{from:n,to:t})):f instanceof Error?o(f):Sm(f)?o(Cn(2,{from:t,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),a())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>o(f))})}function Qi(e,t,n,r){const i=[];for(const s of e)for(const a in s.components){let o=s.components[a];if(!(t!=="beforeRouteEnter"&&!s.instances[a]))if(tp(o)){const l=(o.__vccOpts||o)[t];l&&i.push(xt(l,n,r,s,a))}else{let c=o();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=om(l)?l.default:l;s.components[a]=u;const m=(u.__vccOpts||u)[t];return m&&xt(m,n,r,s,a)()}))}}return i}function tp(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Fo(e){const t=qe(Mi),n=qe(Zl),r=me(()=>t.resolve(Ae(e.to))),i=me(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const m=f.findIndex(xn.bind(null,u));if(m>-1)return m;const g=$o(c[l-2]);return l>1&&$o(u)===g&&f[f.length-1].path!==g?f.findIndex(xn.bind(null,c[l-2])):m}),s=me(()=>i.value>-1&&sp(n.params,r.value.params)),a=me(()=>i.value>-1&&i.value===n.matched.length-1&&zl(n.params,r.value.params));function o(c={}){return ip(c)?t[Ae(e.replace)?"replace":"push"](Ae(e.to)).catch(Gn):Promise.resolve()}return{route:r,href:me(()=>r.value.href),isActive:s,isExactActive:a,navigate:o}}const np=jt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Fo,setup(e,{slots:t}){const n=vr(Fo(e)),{options:r}=qe(Mi),i=me(()=>({[jo(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[jo(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:ga("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),rp=np;function ip(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function sp(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Ge(i)||i.length!==r.length||r.some((s,a)=>s!==i[a]))return!1}return!0}function $o(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const jo=(e,t,n)=>e??t??n,ap=jt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=qe(xs),i=me(()=>e.route||r.value),s=qe(Uo,0),a=me(()=>{let l=Ae(s);const{matched:u}=i.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),o=me(()=>i.value.matched[a.value]);Gr(Uo,me(()=>a.value+1)),Gr(ep,o),Gr(xs,i);const c=Ie();return Zt(()=>[c.value,o.value,e.name],([l,u,f],[m,g,k])=>{u&&(u.instances[f]=l,g&&g!==u&&l&&l===m&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!xn(u,g)||!m)&&(u.enterCallbacks[f]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=i.value,u=e.name,f=o.value,m=f&&f.components[u];if(!m)return Bo(n.default,{Component:m,route:l});const g=f.props[u],k=g?g===!0?l.params:typeof g=="function"?g(l):g:null,M=ga(m,te({},k,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Bo(n.default,{Component:M,route:l})||M}}});function Bo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const eu=ap;function op(e){const t=Dm(e.routes,e),n=e.parseQuery||Qm,r=e.stringifyQuery||Lo,i=e.history,s=$n(),a=$n(),o=$n(),c=dd(It);let l=It;hn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Xi.bind(null,y=>""+y),f=Xi.bind(null,Jm),m=Xi.bind(null,ci);function g(y,N){let x,U;return Vl(y)?(x=t.getRecordMatcher(y),U=N):U=y,t.addRoute(U,x)}function k(y){const N=t.getRecordMatcher(y);N&&t.removeRoute(N)}function A(){return t.getRoutes().map(y=>y.record)}function M(y){return!!t.getRecordMatcher(y)}function b(y,N){if(N=te({},N||c.value),typeof y=="string"){const p=Ji(n,y,N.path),v=t.resolve({path:p.path},N),w=i.createHref(p.fullPath);return te(p,v,{params:m(v.params),hash:ci(p.hash),redirectedFrom:void 0,href:w})}let x;if("path"in y)x=te({},y,{path:Ji(n,y.path,N.path).path});else{const p=te({},y.params);for(const v in p)p[v]==null&&delete p[v];x=te({},y,{params:f(p)}),N.params=f(N.params)}const U=t.resolve(x,N),ee=y.hash||"";U.params=u(m(U.params));const d=um(r,te({},y,{hash:Gm(ee),path:U.path})),h=i.createHref(d);return te({fullPath:d,hash:ee,query:r===Lo?Zm(y.query):y.query||{}},U,{redirectedFrom:void 0,href:h})}function _(y){return typeof y=="string"?Ji(n,y,c.value.path):te({},y)}function R(y,N){if(l!==y)return Cn(8,{from:N,to:y})}function C(y){return J(y)}function j(y){return C(te(_(y),{replace:!0}))}function X(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:x}=N;let U=typeof x=="function"?x(y):x;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=_(U):{path:U},U.params={}),te({query:y.query,hash:y.hash,params:"path"in U?{}:y.params},U)}}function J(y,N){const x=l=b(y),U=c.value,ee=y.state,d=y.force,h=y.replace===!0,p=X(x);if(p)return J(te(_(p),{state:typeof p=="object"?te({},ee,p.state):ee,force:d,replace:h}),N||x);const v=x;v.redirectedFrom=N;let w;return!d&&fm(r,U,x)&&(w=Cn(16,{to:v,from:U}),Ye(U,U,!0,!1)),(w?Promise.resolve(w):ae(v,U)).catch(E=>ot(E)?ot(E,2)?E:wt(E):Z(E,v,U)).then(E=>{if(E){if(ot(E,2))return J(te({replace:h},_(E.to),{state:typeof E.to=="object"?te({},ee,E.to.state):ee,force:d}),N||v)}else E=Re(v,U,!0,h,ee);return _e(v,U,E),E})}function K(y,N){const x=R(y,N);return x?Promise.reject(x):Promise.resolve()}function B(y){const N=ln.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function ae(y,N){let x;const[U,ee,d]=cp(y,N);x=Qi(U.reverse(),"beforeRouteLeave",y,N);for(const p of U)p.leaveGuards.forEach(v=>{x.push(xt(v,y,N))});const h=K.bind(null,y,N);return x.push(h),we(x).then(()=>{x=[];for(const p of s.list())x.push(xt(p,y,N));return x.push(h),we(x)}).then(()=>{x=Qi(ee,"beforeRouteUpdate",y,N);for(const p of ee)p.updateGuards.forEach(v=>{x.push(xt(v,y,N))});return x.push(h),we(x)}).then(()=>{x=[];for(const p of d)if(p.beforeEnter)if(Ge(p.beforeEnter))for(const v of p.beforeEnter)x.push(xt(v,y,N));else x.push(xt(p.beforeEnter,y,N));return x.push(h),we(x)}).then(()=>(y.matched.forEach(p=>p.enterCallbacks={}),x=Qi(d,"beforeRouteEnter",y,N),x.push(h),we(x))).then(()=>{x=[];for(const p of a.list())x.push(xt(p,y,N));return x.push(h),we(x)}).catch(p=>ot(p,8)?p:Promise.reject(p))}function _e(y,N,x){o.list().forEach(U=>B(()=>U(y,N,x)))}function Re(y,N,x,U,ee){const d=R(y,N);if(d)return d;const h=N===It,p=hn?history.state:{};x&&(U||h?i.replace(y.fullPath,te({scroll:h&&p&&p.scroll},ee)):i.push(y.fullPath,ee)),c.value=y,Ye(y,N,x,h),wt()}let Ue;function zt(){Ue||(Ue=i.listen((y,N,x)=>{if(!xr.listening)return;const U=b(y),ee=X(U);if(ee){J(te(ee,{replace:!0}),U).catch(Gn);return}l=U;const d=c.value;hn&&ym(xo(d.fullPath,x.delta),Ni()),ae(U,d).catch(h=>ot(h,12)?h:ot(h,2)?(J(h.to,U).then(p=>{ot(p,20)&&!x.delta&&x.type===ar.pop&&i.go(-1,!1)}).catch(Gn),Promise.reject()):(x.delta&&i.go(-x.delta,!1),Z(h,U,d))).then(h=>{h=h||Re(U,d,!1),h&&(x.delta&&!ot(h,8)?i.go(-x.delta,!1):x.type===ar.pop&&ot(h,20)&&i.go(-1,!1)),_e(U,d,h)}).catch(Gn)}))}let Fe=$n(),Q=$n(),re;function Z(y,N,x){wt(y);const U=Q.list();return U.length?U.forEach(ee=>ee(y,N,x)):console.error(y),Promise.reject(y)}function at(){return re&&c.value!==It?Promise.resolve():new Promise((y,N)=>{Fe.add([y,N])})}function wt(y){return re||(re=!y,zt(),Fe.list().forEach(([N,x])=>y?x(y):N()),Fe.reset()),y}function Ye(y,N,x,U){const{scrollBehavior:ee}=e;if(!hn||!ee)return Promise.resolve();const d=!x&&_m(xo(y.fullPath,0))||(U||!x)&&history.state&&history.state.scroll||null;return ca().then(()=>ee(y,N,d)).then(h=>h&&bm(h)).catch(h=>Z(h,y,N))}const Te=y=>i.go(y);let cn;const ln=new Set,xr={currentRoute:c,listening:!0,addRoute:g,removeRoute:k,hasRoute:M,getRoutes:A,resolve:b,options:e,push:C,replace:j,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:Q.add,isReady:at,install(y){const N=this;y.component("RouterLink",rp),y.component("RouterView",eu),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Ae(c)}),hn&&!cn&&c.value===It&&(cn=!0,C(i.location).catch(ee=>{}));const x={};for(const ee in It)Object.defineProperty(x,ee,{get:()=>c.value[ee],enumerable:!0});y.provide(Mi,N),y.provide(Zl,al(x)),y.provide(xs,c);const U=y.unmount;ln.add(y),y.unmount=function(){ln.delete(y),ln.size<1&&(l=It,Ue&&Ue(),Ue=null,c.value=It,cn=!1,re=!1),U()}}};function we(y){return y.reduce((N,x)=>N.then(()=>B(x)),Promise.resolve())}return xr}function cp(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const o=t.matched[a];o&&(e.matched.find(l=>xn(l,o))?r.push(o):n.push(o));const c=e.matched[a];c&&(t.matched.find(l=>xn(l,c))||i.push(c))}return[n,r,i]}function d0(){return qe(Mi)}/**
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
 */const tu=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},lp=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],o=e[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},nu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,o=a?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=s>>2,f=(s&3)<<4|o>>4;let m=(o&15)<<2|l>>6,g=l&63;c||(g=64,a||(m=64)),r.push(n[u],n[f],n[m],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(tu(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):lp(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||o==null||l==null||f==null)throw new up;const m=s<<2|o>>4;if(r.push(m),l!==64){const g=o<<4&240|l>>2;if(r.push(g),f!==64){const k=l<<6&192|f;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class up extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fp=function(e){const t=tu(e);return nu.encodeByteArray(t,!0)},ru=function(e){return fp(e).replace(/\./g,"")},iu=function(e){try{return nu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function dp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hp=()=>dp().__FIREBASE_DEFAULTS__,mp=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},pp=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&iu(e[1]);return t&&JSON.parse(t)},ya=()=>{try{return hp()||mp()||pp()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},gp=e=>{var t,n;return(n=(t=ya())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},su=()=>{var e;return(e=ya())===null||e===void 0?void 0:e.config},au=e=>{var t;return(t=ya())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class vp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function yp(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function _p(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wp(){const e=ke();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ep(){try{return typeof indexedDB=="object"}catch{return!1}}function Ip(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const kp="FirebaseError";class Bt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=kp,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,br.prototype.create)}}class br{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?Sp(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new Bt(i,o,r)}}function Sp(e,t){return e.replace(Ap,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Ap=/\{\$([^}]+)}/g;function Tp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function li(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(Ho(s)&&Ho(a)){if(!li(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ho(e){return e!==null&&typeof e=="object"}/**
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
 */function yr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function xp(e,t){const n=new Cp(e,t);return n.subscribe.bind(n)}class Cp{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Pp(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Zi),i.error===void 0&&(i.error=Zi),i.complete===void 0&&(i.complete=Zi);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pp(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Zi(){}/**
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
 */function Ht(e){return e&&e._delegate?e._delegate:e}class Pn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Kt="[DEFAULT]";/**
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
 */class Op{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new vp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Np(t))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Kt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Kt){return this.instances.has(t)}getOptions(t=Kt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rp(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Kt){return this.component?this.component.multipleInstances?t:Kt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rp(e){return e===Kt?void 0:e}function Np(e){return e.instantiationMode==="EAGER"}/**
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
 */class Mp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Op(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ie||(ie={}));const Dp={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},Lp=ie.INFO,Up={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},Fp=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Up[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ou{constructor(t){this.name=t,this._logLevel=Lp,this._logHandler=Fp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ie))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Dp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...t),this._logHandler(this,ie.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...t),this._logHandler(this,ie.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...t),this._logHandler(this,ie.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...t),this._logHandler(this,ie.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...t),this._logHandler(this,ie.ERROR,...t)}}const $p=(e,t)=>t.some(n=>e instanceof n);let zo,Wo;function jp(){return zo||(zo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bp(){return Wo||(Wo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cu=new WeakMap,Cs=new WeakMap,lu=new WeakMap,es=new WeakMap,_a=new WeakMap;function Hp(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Mt(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&cu.set(n,e)}).catch(()=>{}),_a.set(t,e),t}function zp(e){if(Cs.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});Cs.set(e,t)}let Ps={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Cs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||lu.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Wp(e){Ps=e(Ps)}function Vp(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ts(this),t,...n);return lu.set(r,t.sort?t.sort():[t]),Mt(r)}:Bp().includes(e)?function(...t){return e.apply(ts(this),t),Mt(cu.get(this))}:function(...t){return Mt(e.apply(ts(this),t))}}function Kp(e){return typeof e=="function"?Vp(e):(e instanceof IDBTransaction&&zp(e),$p(e,jp())?new Proxy(e,Ps):e)}function Mt(e){if(e instanceof IDBRequest)return Hp(e);if(es.has(e))return es.get(e);const t=Kp(e);return t!==e&&(es.set(e,t),_a.set(t,e)),t}const ts=e=>_a.get(e);function qp(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=Mt(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Mt(a.result),c.oldVersion,c.newVersion,Mt(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const Gp=["get","getKey","getAll","getAllKeys","count"],Yp=["put","add","delete","clear"],ns=new Map;function Vo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ns.get(t))return ns.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Yp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Gp.includes(n)))return;const s=async function(a,...o){const c=this.transaction(a,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),i&&c.done]))[0]};return ns.set(t,s),s}Wp(e=>({...e,get:(t,n,r)=>Vo(t,n)||e.get(t,n,r),has:(t,n)=>!!Vo(t,n)||e.has(t,n)}));/**
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
 */class Xp{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Jp(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Os="@firebase/app",Ko="0.9.20";/**
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
 */const rn=new ou("@firebase/app"),Qp="@firebase/app-compat",Zp="@firebase/analytics-compat",eg="@firebase/analytics",tg="@firebase/app-check-compat",ng="@firebase/app-check",rg="@firebase/auth",ig="@firebase/auth-compat",sg="@firebase/database",ag="@firebase/database-compat",og="@firebase/functions",cg="@firebase/functions-compat",lg="@firebase/installations",ug="@firebase/installations-compat",fg="@firebase/messaging",dg="@firebase/messaging-compat",hg="@firebase/performance",mg="@firebase/performance-compat",pg="@firebase/remote-config",gg="@firebase/remote-config-compat",vg="@firebase/storage",bg="@firebase/storage-compat",yg="@firebase/firestore",_g="@firebase/firestore-compat",wg="firebase",Eg="10.5.0";/**
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
 */const Rs="[DEFAULT]",Ig={[Os]:"fire-core",[Qp]:"fire-core-compat",[eg]:"fire-analytics",[Zp]:"fire-analytics-compat",[ng]:"fire-app-check",[tg]:"fire-app-check-compat",[rg]:"fire-auth",[ig]:"fire-auth-compat",[sg]:"fire-rtdb",[ag]:"fire-rtdb-compat",[og]:"fire-fn",[cg]:"fire-fn-compat",[lg]:"fire-iid",[ug]:"fire-iid-compat",[fg]:"fire-fcm",[dg]:"fire-fcm-compat",[hg]:"fire-perf",[mg]:"fire-perf-compat",[pg]:"fire-rc",[gg]:"fire-rc-compat",[vg]:"fire-gcs",[bg]:"fire-gcs-compat",[yg]:"fire-fst",[_g]:"fire-fst-compat","fire-js":"fire-js",[wg]:"fire-js-all"};/**
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
 */const ui=new Map,Ns=new Map;function kg(e,t){try{e.container.addComponent(t)}catch(n){rn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function or(e){const t=e.name;if(Ns.has(t))return rn.debug(`There were multiple attempts to register component ${t}.`),!1;Ns.set(t,e);for(const n of ui.values())kg(n,e);return!0}function uu(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Sg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dt=new br("app","Firebase",Sg);/**
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
 */class Ag{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}}/**
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
 */const _r=Eg;function fu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Rs,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Dt.create("bad-app-name",{appName:String(i)});if(n||(n=su()),!n)throw Dt.create("no-options");const s=ui.get(i);if(s){if(li(n,s.options)&&li(r,s.config))return s;throw Dt.create("duplicate-app",{appName:i})}const a=new Mp(i);for(const c of Ns.values())a.addComponent(c);const o=new Ag(n,r,a);return ui.set(i,o),o}function Tg(e=Rs){const t=ui.get(e);if(!t&&e===Rs&&su())return fu();if(!t)throw Dt.create("no-app",{appName:e});return t}function wn(e,t,n){var r;let i=(r=Ig[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${t}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),rn.warn(o.join(" "));return}or(new Pn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const xg="firebase-heartbeat-database",Cg=1,cr="firebase-heartbeat-store";let rs=null;function du(){return rs||(rs=qp(xg,Cg,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(cr)}}}).catch(e=>{throw Dt.create("idb-open",{originalErrorMessage:e.message})})),rs}async function Pg(e){try{return await(await du()).transaction(cr).objectStore(cr).get(hu(e))}catch(t){if(t instanceof Bt)rn.warn(t.message);else{const n=Dt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});rn.warn(n.message)}}}async function qo(e,t){try{const r=(await du()).transaction(cr,"readwrite");await r.objectStore(cr).put(t,hu(e)),await r.done}catch(n){if(n instanceof Bt)rn.warn(n.message);else{const r=Dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rn.warn(r.message)}}}function hu(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Og=1024,Rg=30*24*60*60*1e3;class Ng{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Go();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Rg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Go(),{heartbeatsToSend:n,unsentEntries:r}=Mg(this._heartbeatsCache.heartbeats),i=ru(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Go(){return new Date().toISOString().substring(0,10)}function Mg(e,t=Og){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Yo(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Yo(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Dg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ep()?Ip().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Pg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Yo(e){return ru(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Lg(e){or(new Pn("platform-logger",t=>new Xp(t),"PRIVATE")),or(new Pn("heartbeat",t=>new Ng(t),"PRIVATE")),wn(Os,Ko,e),wn(Os,Ko,"esm2017"),wn("fire-js","")}Lg("");var Ug="firebase",Fg="10.5.0";/**
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
 */wn(Ug,Fg,"app");const $g={apiKey:"AIzaSyD66i1ri0md2o2Ow4RVApaWIjSQdM79RRY",authDomain:"pomofocus-vue3.firebaseapp.com",projectId:"pomofocus-vue3",storageBucket:"pomofocus-vue3.appspot.com",messagingSenderId:"1089476388969",appId:"1:1089476388969:web:c4939d029dadf83304daf8",measurementId:"G-9CL6V1FX1Y"};fu($g);function wa(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function mu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jg=mu,pu=new br("auth","Firebase",mu());/**
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
 */const fi=new ou("@firebase/auth");function Bg(e,...t){fi.logLevel<=ie.WARN&&fi.warn(`Auth (${_r}): ${e}`,...t)}function Jr(e,...t){fi.logLevel<=ie.ERROR&&fi.error(`Auth (${_r}): ${e}`,...t)}/**
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
 */function st(e,...t){throw Ea(e,...t)}function nt(e,...t){return Ea(e,...t)}function gu(e,t,n){const r=Object.assign(Object.assign({},jg()),{[t]:n});return new br("auth","Firebase",r).create(t,{appName:e.name})}function Hg(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&st(e,"argument-error"),gu(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ea(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return pu.create(e,...t)}function W(e,t,...n){if(!e)throw Ea(t,...n)}function ft(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Jr(t),new Error(t)}function pt(e,t){e||ft(t)}/**
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
 */function Ms(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function zg(){return Xo()==="http:"||Xo()==="https:"}function Xo(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function Wg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zg()||yp()||"connection"in navigator)?navigator.onLine:!0}function Vg(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class wr{constructor(t,n){this.shortDelay=t,this.longDelay=n,pt(n>t,"Short delay should be less than long delay!"),this.isMobile=bp()||_p()}get(){return Wg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ia(e,t){pt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class vu{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Kg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qg=new wr(3e4,6e4);function bu(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Er(e,t,n,r,i={}){return yu(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const o=yr(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),vu.fetch()(_u(e,e.config.apiHost,n,o),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function yu(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Kg),t);try{const i=new Yg(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Dr(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dr(e,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Dr(e,"email-already-in-use",a);if(c==="USER_DISABLED")throw Dr(e,"user-disabled",a);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw gu(e,u,l);st(e,u)}}catch(i){if(i instanceof Bt)throw i;st(e,"network-request-failed",{message:String(i)})}}async function Gg(e,t,n,r,i={}){const s=await Er(e,t,n,r,i);return"mfaPendingCredential"in s&&st(e,"multi-factor-auth-required",{_serverResponse:s}),s}function _u(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Ia(e.config,i):`${e.config.apiScheme}://${i}`}class Yg{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nt(this.auth,"network-request-failed")),qg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Dr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nt(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function Xg(e,t){return Er(e,"POST","/v1/accounts:delete",t)}async function Jg(e,t){return Er(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Xn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Qg(e,t=!1){const n=Ht(e),r=await n.getIdToken(t),i=ka(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Xn(is(i.auth_time)),issuedAtTime:Xn(is(i.iat)),expirationTime:Xn(is(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function is(e){return Number(e)*1e3}function ka(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Jr("JWT malformed, contained fewer than 3 sections"),null;try{const i=iu(n);return i?JSON.parse(i):(Jr("Failed to decode base64 JWT payload"),null)}catch(i){return Jr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Zg(e){const t=ka(e);return W(t,"internal-error"),W(typeof t.exp<"u","internal-error"),W(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function lr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Bt&&ev(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function ev({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class tv{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xn(this.lastLoginAt),this.creationTime=Xn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function di(e){var t;const n=e.auth,r=await e.getIdToken(),i=await lr(e,Jg(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?iv(s.providerUserInfo):[],o=rv(e.providerData,a),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new wu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function nv(e){const t=Ht(e);await di(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function rv(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function iv(e){return e.map(t=>{var{providerId:n}=t,r=wa(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function sv(e,t){const n=await yu(e,{},async()=>{const r=yr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=_u(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",vu.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){W(t.idToken,"internal-error"),W(typeof t.idToken<"u","internal-error"),W(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Zg(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return W(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await sv(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new ur;return r&&(W(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ur,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
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
 */function kt(e,t){W(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class tn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=wa(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new wu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await lr(this,this.stsTokenManager.getToken(this.auth,t));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Qg(this,t)}reload(){return nv(this)}_assign(t){this!==t&&(W(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new tn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await di(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await lr(this,Xg(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,a,o,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,k=(a=n.photoURL)!==null&&a!==void 0?a:void 0,A=(o=n.tenantId)!==null&&o!==void 0?o:void 0,M=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,_=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:C,isAnonymous:j,providerData:X,stsTokenManager:J}=n;W(R&&J,t,"internal-error");const K=ur.fromJSON(this.name,J);W(typeof R=="string",t,"internal-error"),kt(f,t.name),kt(m,t.name),W(typeof C=="boolean",t,"internal-error"),W(typeof j=="boolean",t,"internal-error"),kt(g,t.name),kt(k,t.name),kt(A,t.name),kt(M,t.name),kt(b,t.name),kt(_,t.name);const B=new tn({uid:R,auth:t,email:m,emailVerified:C,displayName:f,isAnonymous:j,photoURL:k,phoneNumber:g,tenantId:A,stsTokenManager:K,createdAt:b,lastLoginAt:_});return X&&Array.isArray(X)&&(B.providerData=X.map(ae=>Object.assign({},ae))),M&&(B._redirectEventId=M),B}static async _fromIdTokenResponse(t,n,r=!1){const i=new ur;i.updateFromServerResponse(n);const s=new tn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await di(s),s}}/**
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
 */const Jo=new Map;function dt(e){pt(e instanceof Function,"Expected a class definition");let t=Jo.get(e);return t?(pt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Jo.set(e,t),t)}/**
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
 */class Eu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}Eu.type="NONE";const Qo=Eu;/**
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
 */function Qr(e,t,n){return`firebase:${e}:${t}:${n}`}class En{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?tn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new En(dt(Qo),t,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||dt(Qo);const a=Qr(r,t.config.apiKey,t.name);let o=null;for(const l of n)try{const u=await l._get(a);if(u){const f=tn._fromJSON(t,u);l!==s&&(o=f),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new En(s,t,r):(s=c[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(a)}catch{}})),new En(s,t,r))}}/**
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
 */function Zo(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Su(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Iu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Tu(t))return"Blackberry";if(xu(t))return"Webos";if(Sa(t))return"Safari";if((t.includes("chrome/")||ku(t))&&!t.includes("edge/"))return"Chrome";if(Au(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Iu(e=ke()){return/firefox\//i.test(e)}function Sa(e=ke()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ku(e=ke()){return/crios\//i.test(e)}function Su(e=ke()){return/iemobile/i.test(e)}function Au(e=ke()){return/android/i.test(e)}function Tu(e=ke()){return/blackberry/i.test(e)}function xu(e=ke()){return/webos/i.test(e)}function Di(e=ke()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function av(e=ke()){var t;return Di(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function ov(){return wp()&&document.documentMode===10}function Cu(e=ke()){return Di(e)||Au(e)||xu(e)||Tu(e)||/windows phone/i.test(e)||Su(e)}function cv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Pu(e,t=[]){let n;switch(e){case"Browser":n=Zo(ke());break;case"Worker":n=`${Zo(ke())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${_r}/${r}`}/**
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
 */class lv{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,o)=>{try{const c=t(s);a(c)}catch(c){o(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function uv(e,t={}){return Er(e,"GET","/v2/passwordPolicy",bu(e,t))}/**
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
 */const fv=6;class dv{constructor(t){var n,r,i,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:fv,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,a,o;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(o=c.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),c}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class hv{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ec(this),this.idTokenSubscription=new ec(this),this.beforeStateQueue=new lv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=dt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await En.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!a||a===o)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await di(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Vg()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Ht(t):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&W(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await uv(this),n=new dv(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new br("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&dt(t)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await En.create(this,[dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,r,i);return()=>{a=!0,c()}}else{const c=t.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Pu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Bg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Li(e){return Ht(e)}class ec{constructor(t){this.auth=t,this.observer=null,this.addObserver=xp(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function mv(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function pv(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=nt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",mv().appendChild(r)})}function gv(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function vv(e,t){const n=uu(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(li(s,t??{}))return i;st(i,"already-initialized")}return n.initialize({options:t})}function bv(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(dt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function yv(e,t,n){const r=Li(e);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Ou(t),{host:a,port:o}=_v(t),c=o===null?"":`:${o}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||wv()}function Ou(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function _v(e){const t=Ou(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:tc(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:tc(a)}}}function tc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function wv(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Ru{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ft("not implemented")}_getIdTokenResponse(t){return ft("not implemented")}_linkToIdToken(t,n){return ft("not implemented")}_getReauthenticationResolver(t){return ft("not implemented")}}/**
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
 */async function In(e,t){return Gg(e,"POST","/v1/accounts:signInWithIdp",bu(e,t))}/**
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
 */const Ev="http://localhost";class sn extends Ru{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new sn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):st("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=wa(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new sn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return In(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,In(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,In(t,n)}buildRequest(){const t={requestUri:Ev,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=yr(n)}return t}}/**
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
 */class Aa{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ir extends Aa{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ct extends Ir{constructor(){super("facebook.com")}static credential(t){return sn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ct.credentialFromTaggedObject(t)}static credentialFromError(t){return Ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ct.credential(t.oauthAccessToken)}catch{return null}}}Ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ct.PROVIDER_ID="facebook.com";/**
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
 */class lt extends Ir{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return sn._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return lt.credentialFromTaggedObject(t)}static credentialFromError(t){return lt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return lt.credential(n,r)}catch{return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com";lt.PROVIDER_ID="google.com";/**
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
 */class Pt extends Ir{constructor(){super("github.com")}static credential(t){return sn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Pt.credentialFromTaggedObject(t)}static credentialFromError(t){return Pt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Pt.credential(t.oauthAccessToken)}catch{return null}}}Pt.GITHUB_SIGN_IN_METHOD="github.com";Pt.PROVIDER_ID="github.com";/**
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
 */class Ot extends Ir{constructor(){super("twitter.com")}static credential(t,n){return sn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Ot.credentialFromTaggedObject(t)}static credentialFromError(t){return Ot.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Ot.credential(n,r)}catch{return null}}}Ot.TWITTER_SIGN_IN_METHOD="twitter.com";Ot.PROVIDER_ID="twitter.com";/**
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
 */class On{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await tn._fromIdTokenResponse(t,r,i),a=nc(r);return new On({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=nc(r);return new On({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function nc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class hi extends Bt{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hi.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new hi(t,n,r,i)}}function Nu(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hi._fromErrorAndOperation(e,s,t,r):s})}async function Iv(e,t,n=!1){const r=await lr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return On._forOperation(e,"link",r)}/**
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
 */async function kv(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await lr(e,Nu(r,i,t,e),n);W(s.idToken,r,"internal-error");const a=ka(s.idToken);W(a,r,"internal-error");const{sub:o}=a;return W(e.uid===o,r,"user-mismatch"),On._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&st(r,"user-mismatch"),s}}/**
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
 */async function Sv(e,t,n=!1){const r="signIn",i=await Nu(e,r,t),s=await On._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function Av(e,t,n,r){return Ht(e).onIdTokenChanged(t,n,r)}function Tv(e,t,n){return Ht(e).beforeAuthStateChanged(t,n)}function xv(e,t,n,r){return Ht(e).onAuthStateChanged(t,n,r)}function Cv(e){return Ht(e).signOut()}const mi="__sak";/**
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
 */class Mu{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(mi,"1"),this.storage.removeItem(mi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Pv(){const e=ke();return Sa(e)||Di(e)}const Ov=1e3,Rv=10;class Du extends Mu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Pv()&&cv(),this.fallbackToPolling=Cu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);ov()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Rv):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Ov)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Du.type="LOCAL";const Nv=Du;/**
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
 */class Lu extends Mu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Lu.type="SESSION";const Uu=Lu;/**
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
 */function Mv(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ui{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Ui(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async l=>l(n.origin,s)),c=await Mv(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ui.receivers=[];/**
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
 */function Ta(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class Dv{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,c)=>{const l=Ta("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===l)switch(m.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(m.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function rt(){return window}function Lv(e){rt().location.href=e}/**
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
 */function Fu(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function Uv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fv(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function $v(){return Fu()?self:null}/**
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
 */const $u="firebaseLocalStorageDb",jv=1,pi="firebaseLocalStorage",ju="fbase_key";class kr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fi(e,t){return e.transaction([pi],t?"readwrite":"readonly").objectStore(pi)}function Bv(){const e=indexedDB.deleteDatabase($u);return new kr(e).toPromise()}function Ds(){const e=indexedDB.open($u,jv);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(pi,{keyPath:ju})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(pi)?t(r):(r.close(),await Bv(),t(await Ds()))})})}async function rc(e,t,n){const r=Fi(e,!0).put({[ju]:t,value:n});return new kr(r).toPromise()}async function Hv(e,t){const n=Fi(e,!1).get(t),r=await new kr(n).toPromise();return r===void 0?null:r.value}function ic(e,t){const n=Fi(e,!0).delete(t);return new kr(n).toPromise()}const zv=800,Wv=3;class Bu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ds(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Wv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ui._getInstance($v()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Uv(),!this.activeServiceWorker)return;this.sender=new Dv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Fv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ds();return await rc(t,mi,"1"),await ic(t,mi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Hv(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ic(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Fi(i,!1).getAll();return new kr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bu.type="LOCAL";const Vv=Bu;new wr(3e4,6e4);/**
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
 */function Hu(e,t){return t?dt(t):(W(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class xa extends Ru{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return In(t,this._buildIdpRequest())}_linkToIdToken(t,n){return In(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return In(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Kv(e){return Sv(e.auth,new xa(e),e.bypassAuthState)}function qv(e){const{auth:t,user:n}=e;return W(n,t,"internal-error"),kv(n,new xa(e),e.bypassAuthState)}async function Gv(e){const{auth:t,user:n}=e;return W(n,t,"internal-error"),Iv(n,new xa(e),e.bypassAuthState)}/**
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
 */class zu{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=t;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Kv;case"linkViaPopup":case"linkViaRedirect":return Gv;case"reauthViaPopup":case"reauthViaRedirect":return qv;default:st(this.auth,"internal-error")}}resolve(t){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Yv=new wr(2e3,1e4);async function Xv(e,t,n){const r=Li(e);Hg(e,t,Aa);const i=Hu(r,n);return new Yt(r,"signInViaPopup",t,i).executeNotNull()}class Yt extends zu{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Yt.currentPopupAction&&Yt.currentPopupAction.cancel(),Yt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return W(t,this.auth,"internal-error"),t}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const t=Ta();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Yv.get())};t()}}Yt.currentPopupAction=null;/**
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
 */const Jv="pendingRedirect",Zr=new Map;class Qv extends zu{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Zr.get(this.auth._key());if(!t){try{const r=await Zv(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Zr.set(this.auth._key(),t)}return this.bypassAuthState||Zr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zv(e,t){const n=nb(t),r=tb(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function eb(e,t){Zr.set(e._key(),t)}function tb(e){return dt(e._redirectPersistence)}function nb(e){return Qr(Jv,e.config.apiKey,e.name)}async function rb(e,t,n=!1){const r=Li(e),i=Hu(r,t),a=await new Qv(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const ib=10*60*1e3;class sb{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!ab(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Wu(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=ib&&this.cachedEventUids.clear(),this.cachedEventUids.has(sc(t))}saveEventToCache(t){this.cachedEventUids.add(sc(t)),this.lastProcessedEventTime=Date.now()}}function sc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Wu({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function ab(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Wu(e);default:return!1}}/**
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
 */async function ob(e,t={}){return Er(e,"GET","/v1/projects",t)}/**
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
 */const cb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lb=/^https?/;async function ub(e){if(e.config.emulator)return;const{authorizedDomains:t}=await ob(e);for(const n of t)try{if(fb(n))return}catch{}st(e,"unauthorized-domain")}function fb(e){const t=Ms(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!lb.test(n))return!1;if(cb.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const db=new wr(3e4,6e4);function ac(){const e=rt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function hb(e){return new Promise((t,n)=>{var r,i,s;function a(){ac(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ac(),n(nt(e,"network-request-failed"))},timeout:db.get()})}if(!((i=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=rt().gapi)===null||s===void 0)&&s.load)a();else{const o=gv("iframefcb");return rt()[o]=()=>{gapi.load?a():n(nt(e,"network-request-failed"))},pv(`https://apis.google.com/js/api.js?onload=${o}`).catch(c=>n(c))}}).catch(t=>{throw ei=null,t})}let ei=null;function mb(e){return ei=ei||hb(e),ei}/**
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
 */const pb=new wr(5e3,15e3),gb="__/auth/iframe",vb="emulator/auth/iframe",bb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _b(e){const t=e.config;W(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ia(t,vb):`https://${e.config.authDomain}/${gb}`,r={apiKey:t.apiKey,appName:e.name,v:_r},i=yb.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${yr(r).slice(1)}`}async function wb(e){const t=await mb(e),n=rt().gapi;return W(n,e,"internal-error"),t.open({where:document.body,url:_b(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=nt(e,"network-request-failed"),o=rt().setTimeout(()=>{s(a)},pb.get());function c(){rt().clearTimeout(o),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
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
 */const Eb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ib=500,kb=600,Sb="_blank",Ab="http://localhost";class oc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Tb(e,t,n,r=Ib,i=kb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c=Object.assign(Object.assign({},Eb),{width:r.toString(),height:i.toString(),top:s,left:a}),l=ke().toLowerCase();n&&(o=ku(l)?Sb:n),Iu(l)&&(t=t||Ab,c.scrollbars="yes");const u=Object.entries(c).reduce((m,[g,k])=>`${m}${g}=${k},`,"");if(av(l)&&o!=="_self")return xb(t||"",o),new oc(null);const f=window.open(t||"",o,u);W(f,e,"popup-blocked");try{f.focus()}catch{}return new oc(f)}function xb(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Cb="__/auth/handler",Pb="emulator/auth/handler",Ob=encodeURIComponent("fac");async function cc(e,t,n,r,i,s){W(e.config.authDomain,e,"auth-domain-config-required"),W(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:_r,eventId:i};if(t instanceof Aa){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",Tp(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries(s||{}))a[u]=f}if(t instanceof Ir){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(a.scopes=u.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const u of Object.keys(o))o[u]===void 0&&delete o[u];const c=await e._getAppCheckToken(),l=c?`#${Ob}=${encodeURIComponent(c)}`:"";return`${Rb(e)}?${yr(o).slice(1)}${l}`}function Rb({config:e}){return e.emulator?Ia(e,Pb):`https://${e.authDomain}/${Cb}`}/**
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
 */const ss="webStorageSupport";class Nb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uu,this._completeRedirectFn=rb,this._overrideRedirectResult=eb}async _openPopup(t,n,r,i){var s;pt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await cc(t,n,r,Ms(),i);return Tb(t,a,Ta())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await cc(t,n,r,Ms(),i);return Lv(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(pt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await wb(t),r=new sb(t);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ss,{type:ss},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ss];a!==void 0&&n(!!a),st(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ub(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cu()||Sa()||Di()}}const Mb=Nb;var lc="@firebase/auth",uc="1.3.0";/**
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
 */class Db{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Lb(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ub(e){or(new Pn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pu(e)},l=new hv(r,i,s,c);return bv(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),or(new Pn("auth-internal",t=>{const n=Li(t.getProvider("auth").getImmediate());return(r=>new Db(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(lc,uc,Lb(e)),wn(lc,uc,"esm2017")}/**
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
 */const Fb=5*60,$b=au("authIdTokenMaxAge")||Fb;let fc=null;const jb=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$b)return;const i=n==null?void 0:n.token;fc!==i&&(fc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Bb(e=Tg()){const t=uu(e,"auth");if(t.isInitialized())return t.getImmediate();const n=vv(e,{popupRedirectResolver:Mb,persistence:[Vv,Nv,Uu]}),r=au("authTokenSyncURL");if(r){const s=jb(r);Tv(n,s,()=>s(n.currentUser)),Av(n,a=>s(a))}const i=gp("auth");return i&&yv(n,`http://${i}`),n}Ub("Browser");const as=Bb(),Hb=new lt,zb=Hl("user",()=>{const e=Ie(!1),t=Ie(""),n=Ie(""),r=Ie("");function i(){xv(as,o=>{if(o){e.value=!0;return}e.value=!1})}function s(){Cv(as).then(o=>{console.log(o),e.value=!1}).catch(o=>{console.log(o)})}function a(){console.log("登入"),Xv(as,Hb).then(o=>{console.log("幹"),console.log(o),e.value=!0}).catch(o=>{console.log(o)})}return{checkIsLogin:i,signOutWithGoogle:s,signInWithGoogle:a,userName:t,userEmail:n,isLogin:e,userPhotoUrl:r}}),Wb=e=>(xd("data-v-f81e4041"),e=e(),Cd(),e),Vb={class:"flex justify-between h-20 w-[97%] mb-[30px]"},Kb={class:"leading-loose contrast-20 w-[100px] text-center"},qb={class:"animate-fadeIn flex items-center gap-2 max-md:hidden"},Gb={class:"flex"},Yb=Wb(()=>De("div",{class:"menu-btn__burger w-[45px] h-[6px] bg-primary rounded-[2px] shadow-burger transition duration-500 ease-in-out"},null,-1)),Xb=[Yb],Jb=jt({__name:"NavHeader",setup(e){const t=zb(),{isLogin:n}=va(t),r=Ie(!1),i=Ie([{id:"item01",name:"analysis"},{id:"item02",name:"setting"},{id:"item03",name:"login"}]),s=()=>{r.value=!r.value};return Il(()=>{t.checkIsLogin()}),(a,o)=>{const c=Gd("RouterLink");return Pe(),et("header",Vb,[De("h1",Kb,[be(c,{to:"/",class:"animate-letterMove whitespace-nowrap"},{default:Bn(()=>[zn("Pomofocus")]),_:1})]),De("nav",qb,[De("ul",Gb,[(Pe(!0),et(Be,null,Sl(i.value,l=>(Pe(),et("li",{key:l.id,class:"leading-loose ml-5 min-h-full transition-transform transition-shadow duration-300 hover:translate-y-[2px] active:translate-y-[5px]"},[l.name.toLowerCase()==="login"?(Pe(),Yr(c,{key:0,to:"/login",class:"text-base max-w-prose nav-item"},{default:Bn(()=>[zn(yn(l.name),1)]),_:2},1024)):l.name.toLowerCase()!=="analysis"?(Pe(),Yr(c,{key:1,to:`/${l.name.toLowerCase()}`,class:"text-base max-w-prose nav-item"},{default:Bn(()=>[zn(yn(l.name),1)]),_:2},1032,["to"])):Ae(n)&&l.name.toLowerCase()==="analysis"?(Pe(),Yr(c,{key:2,to:"/",class:"text-base max-w-prose nav-item"},{default:Bn(()=>[zn(yn(l.name),1)]),_:2},1024)):mo("",!0)]))),128))]),Ae(n)?(Pe(),et("button",{key:0,onClick:o[0]||(o[0]=(...l)=>Ae(t).signOutWithGoogle&&Ae(t).signOutWithGoogle(...l)),class:"leading-[1.3] ml-5 text-base max-w-prose nav-item"},"Sign Out")):mo("",!0)]),De("div",{class:gr([{active:r.value},"md:hidden menu-btn relative flex justify-center items-center w-[80px] h-[80px] cursor-pointer transition duration-500 ease-in-out"]),onClick:s},Xb,2)])}}});const Ca=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},Qb=Ca(Jb,[["__scopeId","data-v-f81e4041"]]),Zb={class:"xl:max-w-1200 lg:max-w-1000 md:max-w-600 w-[90vw] mx-auto my-0 h-screen"},ey=jt({__name:"App",setup(e){return(t,n)=>(Pe(),et("main",Zb,[be(Qb),be(Ae(eu))]))}}),ty="modulepreload",ny=function(e){return"/pomofocus-vue3/"+e},dc={},ry=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=ny(s),s in dc)return;dc[s]=!0;const a=s.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const f=i[u];if(f.href===s&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${o}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":ty,a||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),a)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})},iy={class:"box relative overflow-hidden h-[350px] bg-custom-gray rounded-[8px] mt-10 flex justify-center items-center flex-wrap"},sy={class:"form absolute top-[4px] right-[4px] bottom-[4px] left-[4px] z-[2] bg-gray-800 flex-col flex overflow-hidden"},ay={class:"text-9xl w-full text-center mt-[40px]"},oy={class:"relative block w-full h-full"},cy=jt({__name:"NormalTimer",props:{isActive:{type:Boolean},mode:{},remainingTime:{}},emits:["handleTimeCountDown"],setup(e,{emit:t}){const n=()=>{t("handleTimeCountDown",e.isActive,e.mode)};return(r,i)=>(Pe(),et("div",iy,[De("div",sy,[De("p",ay,yn(r.remainingTime),1),De("button",{onClick:n,class:"btn w-[100px] relative inline-block text-light text-base font-medium border-none py-[10xp] px-[25px] m-auto leading-10 shadow-activeButton transition-all duration-300 ease-in hover:bg-transparent"},[De("span",oy,yn(r.isActive?"Pause":"Start"),1)])])]))}});const ly=Ca(cy,[["__scopeId","data-v-ab9271d4"]]);var Vu=(e=>(e.pomodoro="pomodoro",e.longbreak="longbreak",e.shortbreak="shortbreak",e))(Vu||{});const Ku=Hl("timer",()=>{const e=Ie(Vu.pomodoro),t=Ie(!1);function n(){t.value=!t.value}function r(){t.value=!1}function i(){t.value=!0}return{mode:e,isActive:t,changeActiveStatus:n,onStop:r,onStart:i}});function Lr(e){if(e<0)return"00:00";const t=Math.floor(e/(1e3*60*60)),n=Math.floor(e%(1e3*60*60)/(1e3*60));if(t>0||n>=60)return"59:59";const r=Math.floor(e%(1e3*60)/1e3);return`${n<10?"0"+n:n}:${r<10?"0"+r:r}`}function hc(){const e=Ku(),{isActive:t,...n}=va(e),r=Ie(25*60*1e3),i=Ie("25:00");let s=null;const a=me(()=>r.value);function o(){s&&(clearInterval(s),s=null)}function c(l){switch(md(l)){case"Pomodoro":r.value=25*60*1e3,i.value=Lr(r.value);break;case"Long Break":r.value=15*60*1e3,i.value=Lr(r.value);break;case"Short Break":r.value=5*60*1e3,i.value=Lr(r.value);break;default:console.log("未定義的狀態！");break}}return Zt(t,()=>{t.value?s=setInterval(()=>{r.value=a.value-1e3,i.value=r.value<=0?"timeup":Lr(r.value)},1e3):(r.value=a.value,o())}),ua(()=>{o()}),{remainingTime:i,switchMode:c}}const uy={class:"flex w-full h-full"},fy={class:"w-[600px] h-[350px] bg-black m-auto rounded-[8px]"},dy={class:"w-auto flex space-x-3 text-center text-xl cursor-pointer rounded-default justify-center items-center gap-6 menu"},hy=["onClick"],my=jt({__name:"CountdownTimer",setup(e){const t=Ku(),{isActive:n,mode:r,...i}=va(t),{switchMode:s,remainingTime:a}=hc(),o=Ie("Pomodoro"),c=Ie([{id:1,title:"Pomodoro",time:"25:00"},{id:2,title:"Short Break",time:"05:00"},{id:3,title:"Long Break",time:"15:00"}]),l=f=>{o.value=f,t.onStop(),s(f)},u=()=>{hc(),t.changeActiveStatus()};return(f,m)=>(Pe(),et("section",uy,[De("article",fy,[De("ul",dy,[(Pe(!0),et(Be,null,Sl(c.value,g=>(Pe(),et("li",{onClick:k=>l(g.title),class:gr([{"tab-active":o.value===g.title},"block item h-auto hover:text-cyan-500 border-transparent border-b-2 hover:border-b-cyan-500 hover:transition duration-500"]),key:g.id},yn(g.title),11,hy))),128))]),be(ly,{isActive:Ae(n),mode:Ae(r),remainingTime:Ae(a),onHandleTimeCountDown:u,class:"overflow-hidden"},null,8,["isActive","mode","remainingTime"])])]))}});const py=Ca(my,[["__scopeId","data-v-28579b72"]]),gy={class:"w-full"},vy=jt({__name:"HomeView",setup(e){return(t,n)=>(Pe(),et("main",gy,[be(py)]))}}),by=op({history:km("/pomofocus-vue3"),routes:[{path:"/",name:"home",component:vy},{path:"/login",name:"login",component:()=>ry(()=>import("./LoginPage-dde0ab18.js"),[])}]});function mc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?mc(Object(n),!0).forEach(function(r){ge(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gi(e){"@babel/helpers - typeof";return gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gi(e)}function yy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function pc(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _y(e,t,n){return t&&pc(e.prototype,t),n&&pc(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pa(e,t){return Ey(e)||ky(e,t)||qu(e,t)||Ay()}function Sr(e){return wy(e)||Iy(e)||qu(e)||Sy()}function wy(e){if(Array.isArray(e))return Ls(e)}function Ey(e){if(Array.isArray(e))return e}function Iy(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ky(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,a,o;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(c){s=!0,o=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw o}}return r}}function qu(e,t){if(e){if(typeof e=="string")return Ls(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ls(e,t)}}function Ls(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Sy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ay(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gc=function(){},Oa={},Gu={},Yu=null,Xu={mark:gc,measure:gc};try{typeof window<"u"&&(Oa=window),typeof document<"u"&&(Gu=document),typeof MutationObserver<"u"&&(Yu=MutationObserver),typeof performance<"u"&&(Xu=performance)}catch{}var Ty=Oa.navigator||{},vc=Ty.userAgent,bc=vc===void 0?"":vc,Ut=Oa,ce=Gu,yc=Yu,Ur=Xu;Ut.document;var _t=!!ce.documentElement&&!!ce.head&&typeof ce.addEventListener=="function"&&typeof ce.createElement=="function",Ju=~bc.indexOf("MSIE")||~bc.indexOf("Trident/"),Fr,$r,jr,Br,Hr,gt="___FONT_AWESOME___",Us=16,Qu="fa",Zu="svg-inline--fa",an="data-fa-i2svg",Fs="data-fa-pseudo-element",xy="data-fa-pseudo-element-pending",Ra="data-prefix",Na="data-icon",_c="fontawesome-i2svg",Cy="async",Py=["HTML","HEAD","STYLE","SCRIPT"],ef=function(){try{return!0}catch{return!1}}(),oe="classic",de="sharp",Ma=[oe,de];function Ar(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[oe]}})}var fr=Ar((Fr={},ge(Fr,oe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ge(Fr,de,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Fr)),dr=Ar(($r={},ge($r,oe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ge($r,de,{solid:"fass",regular:"fasr",light:"fasl"}),$r)),hr=Ar((jr={},ge(jr,oe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ge(jr,de,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),jr)),Oy=Ar((Br={},ge(Br,oe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ge(Br,de,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Br)),Ry=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,tf="fa-layers-text",Ny=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,My=Ar((Hr={},ge(Hr,oe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ge(Hr,de,{900:"fass",400:"fasr",300:"fasl"}),Hr)),nf=[1,2,3,4,5,6,7,8,9,10],Dy=nf.concat([11,12,13,14,15,16,17,18,19,20]),Ly=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Xt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mr=new Set;Object.keys(dr[oe]).map(mr.add.bind(mr));Object.keys(dr[de]).map(mr.add.bind(mr));var Uy=[].concat(Ma,Sr(mr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Xt.GROUP,Xt.SWAP_OPACITY,Xt.PRIMARY,Xt.SECONDARY]).concat(nf.map(function(e){return"".concat(e,"x")})).concat(Dy.map(function(e){return"w-".concat(e)})),Jn=Ut.FontAwesomeConfig||{};function Fy(e){var t=ce.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function $y(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ce&&typeof ce.querySelector=="function"){var jy=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];jy.forEach(function(e){var t=Pa(e,2),n=t[0],r=t[1],i=$y(Fy(n));i!=null&&(Jn[r]=i)})}var rf={styleDefault:"solid",familyDefault:"classic",cssPrefix:Qu,replacementClass:Zu,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Jn.familyPrefix&&(Jn.cssPrefix=Jn.familyPrefix);var Rn=O(O({},rf),Jn);Rn.autoReplaceSvg||(Rn.observeMutations=!1);var L={};Object.keys(rf).forEach(function(e){Object.defineProperty(L,e,{enumerable:!0,set:function(n){Rn[e]=n,Qn.forEach(function(r){return r(L)})},get:function(){return Rn[e]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(t){Rn.cssPrefix=t,Qn.forEach(function(n){return n(L)})},get:function(){return Rn.cssPrefix}});Ut.FontAwesomeConfig=L;var Qn=[];function By(e){return Qn.push(e),function(){Qn.splice(Qn.indexOf(e),1)}}var St=Us,tt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Hy(e){if(!(!e||!_t)){var t=ce.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ce.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=s)}return ce.head.insertBefore(t,r),e}}var zy="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pr(){for(var e=12,t="";e-- >0;)t+=zy[Math.random()*62|0];return t}function Ln(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Da(e){return e.classList?Ln(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function sf(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wy(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(sf(e[n]),'" ')},"").trim()}function $i(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function La(e){return e.size!==tt.size||e.x!==tt.x||e.y!==tt.y||e.rotate!==tt.rotate||e.flipX||e.flipY}function Vy(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(s," ").concat(a," ").concat(o)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function Ky(e){var t=e.transform,n=e.width,r=n===void 0?Us:n,i=e.height,s=i===void 0?Us:i,a=e.startCentered,o=a===void 0?!1:a,c="";return o&&Ju?c+="translate(".concat(t.x/St-r/2,"em, ").concat(t.y/St-s/2,"em) "):o?c+="translate(calc(-50% + ".concat(t.x/St,"em), calc(-50% + ").concat(t.y/St,"em)) "):c+="translate(".concat(t.x/St,"em, ").concat(t.y/St,"em) "),c+="scale(".concat(t.size/St*(t.flipX?-1:1),", ").concat(t.size/St*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var qy=`:root, :host {
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
}`;function af(){var e=Qu,t=Zu,n=L.cssPrefix,r=L.replacementClass,i=qy;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(o,".".concat(r))}return i}var wc=!1;function os(){L.autoAddCss&&!wc&&(Hy(af()),wc=!0)}var Gy={mixout:function(){return{dom:{css:af,insertCss:os}}},hooks:function(){return{beforeDOMElementCreation:function(){os()},beforeI2svg:function(){os()}}}},vt=Ut||{};vt[gt]||(vt[gt]={});vt[gt].styles||(vt[gt].styles={});vt[gt].hooks||(vt[gt].hooks={});vt[gt].shims||(vt[gt].shims=[]);var We=vt[gt],of=[],Yy=function e(){ce.removeEventListener("DOMContentLoaded",e),vi=1,of.map(function(t){return t()})},vi=!1;_t&&(vi=(ce.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ce.readyState),vi||ce.addEventListener("DOMContentLoaded",Yy));function Xy(e){_t&&(vi?setTimeout(e,0):of.push(e))}function Tr(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?sf(e):"<".concat(t," ").concat(Wy(r),">").concat(s.map(Tr).join(""),"</").concat(t,">")}function Ec(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Jy=function(t,n){return function(r,i,s,a){return t.call(n,r,i,s,a)}},cs=function(t,n,r,i){var s=Object.keys(t),a=s.length,o=i!==void 0?Jy(n,i):n,c,l,u;for(r===void 0?(c=1,u=t[s[0]]):(c=0,u=r);c<a;c++)l=s[c],u=o(u,t[l],l,t);return u};function Qy(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function $s(e){var t=Qy(e);return t.length===1?t[0].toString(16):null}function Zy(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ic(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function js(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Ic(t);typeof We.hooks.addPack=="function"&&!i?We.hooks.addPack(e,Ic(t)):We.styles[e]=O(O({},We.styles[e]||{}),s),e==="fas"&&js("fa",t)}var zr,Wr,Vr,pn=We.styles,e_=We.shims,t_=(zr={},ge(zr,oe,Object.values(hr[oe])),ge(zr,de,Object.values(hr[de])),zr),Ua=null,cf={},lf={},uf={},ff={},df={},n_=(Wr={},ge(Wr,oe,Object.keys(fr[oe])),ge(Wr,de,Object.keys(fr[de])),Wr);function r_(e){return~Uy.indexOf(e)}function i_(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!r_(i)?i:null}var hf=function(){var t=function(s){return cs(pn,function(a,o,c){return a[c]=cs(o,s,{}),a},{})};cf=t(function(i,s,a){if(s[3]&&(i[s[3]]=a),s[2]){var o=s[2].filter(function(c){return typeof c=="number"});o.forEach(function(c){i[c.toString(16)]=a})}return i}),lf=t(function(i,s,a){if(i[a]=a,s[2]){var o=s[2].filter(function(c){return typeof c=="string"});o.forEach(function(c){i[c]=a})}return i}),df=t(function(i,s,a){var o=s[2];return i[a]=a,o.forEach(function(c){i[c]=a}),i});var n="far"in pn||L.autoFetchSvg,r=cs(e_,function(i,s){var a=s[0],o=s[1],c=s[2];return o==="far"&&!n&&(o="fas"),typeof a=="string"&&(i.names[a]={prefix:o,iconName:c}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:o,iconName:c}),i},{names:{},unicodes:{}});uf=r.names,ff=r.unicodes,Ua=ji(L.styleDefault,{family:L.familyDefault})};By(function(e){Ua=ji(e.styleDefault,{family:L.familyDefault})});hf();function Fa(e,t){return(cf[e]||{})[t]}function s_(e,t){return(lf[e]||{})[t]}function Jt(e,t){return(df[e]||{})[t]}function mf(e){return uf[e]||{prefix:null,iconName:null}}function a_(e){var t=ff[e],n=Fa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ft(){return Ua}var $a=function(){return{prefix:null,iconName:null,rest:[]}};function ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?oe:n,i=fr[r][e],s=dr[r][e]||dr[r][i],a=e in We.styles?e:null;return s||a||null}var kc=(Vr={},ge(Vr,oe,Object.keys(hr[oe])),ge(Vr,de,Object.keys(hr[de])),Vr);function Bi(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},ge(t,oe,"".concat(L.cssPrefix,"-").concat(oe)),ge(t,de,"".concat(L.cssPrefix,"-").concat(de)),t),a=null,o=oe;(e.includes(s[oe])||e.some(function(l){return kc[oe].includes(l)}))&&(o=oe),(e.includes(s[de])||e.some(function(l){return kc[de].includes(l)}))&&(o=de);var c=e.reduce(function(l,u){var f=i_(L.cssPrefix,u);if(pn[u]?(u=t_[o].includes(u)?Oy[o][u]:u,a=u,l.prefix=u):n_[o].indexOf(u)>-1?(a=u,l.prefix=ji(u,{family:o})):f?l.iconName=f:u!==L.replacementClass&&u!==s[oe]&&u!==s[de]&&l.rest.push(u),!i&&l.prefix&&l.iconName){var m=a==="fa"?mf(l.iconName):{},g=Jt(l.prefix,l.iconName);m.prefix&&(a=null),l.iconName=m.iconName||g||l.iconName,l.prefix=m.prefix||l.prefix,l.prefix==="far"&&!pn.far&&pn.fas&&!L.autoFetchSvg&&(l.prefix="fas")}return l},$a());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&o===de&&(pn.fass||L.autoFetchSvg)&&(c.prefix="fass",c.iconName=Jt(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||a==="fa")&&(c.prefix=Ft()||"fas"),c}var o_=function(){function e(){yy(this,e),this.definitions={}}return _y(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){n.definitions[o]=O(O({},n.definitions[o]||{}),a[o]),js(o,a[o]);var c=hr[oe][o];c&&js(c,a[o]),hf()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var a=i[s],o=a.prefix,c=a.iconName,l=a.icon,u=l[2];n[o]||(n[o]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[o][f]=l)}),n[o][c]=l}),n}}]),e}(),Sc=[],gn={},kn={},c_=Object.keys(kn);function l_(e,t){var n=t.mixoutsTo;return Sc=e,gn={},Object.keys(kn).forEach(function(r){c_.indexOf(r)===-1&&delete kn[r]}),Sc.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),gi(i[a])==="object"&&Object.keys(i[a]).forEach(function(o){n[a]||(n[a]={}),n[a][o]=i[a][o]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(a){gn[a]||(gn[a]=[]),gn[a].push(s[a])})}r.provides&&r.provides(kn)}),n}function Bs(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=gn[e]||[];return s.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function on(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=gn[e]||[];i.forEach(function(s){s.apply(null,n)})}function bt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return kn[e]?kn[e].apply(null,t):void 0}function Hs(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ft();if(t)return t=Jt(n,t)||t,Ec(pf.definitions,n,t)||Ec(We.styles,n,t)}var pf=new o_,u_=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,on("noAuto")},f_={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return _t?(on("beforeI2svg",t),bt("pseudoElements2svg",t),bt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,Xy(function(){h_({autoReplaceSvgRoot:n}),on("watch",t)})}},d_={icon:function(t){if(t===null)return null;if(gi(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Jt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=ji(t[0]);return{prefix:r,iconName:Jt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(L.cssPrefix,"-"))>-1||t.match(Ry))){var i=Bi(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Ft(),iconName:Jt(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=Ft();return{prefix:s,iconName:Jt(s,t)||t}}}},Le={noAuto:u_,config:L,dom:f_,parse:d_,library:pf,findIconDefinition:Hs,toHtml:Tr},h_=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ce:n;(Object.keys(We.styles).length>0||L.autoFetchSvg)&&_t&&L.autoReplaceSvg&&Le.dom.i2svg({node:r})};function Hi(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Tr(r)})}}),Object.defineProperty(e,"node",{get:function(){if(_t){var r=ce.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function m_(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,a=e.transform;if(La(a)&&n.found&&!r.found){var o=n.width,c=n.height,l={x:o/c/2,y:.5};i.style=$i(O(O({},s),{},{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function p_(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,a=s===!0?"".concat(t,"-").concat(L.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},i),{},{id:a}),children:r}]}]}function ja(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,a=e.transform,o=e.symbol,c=e.title,l=e.maskId,u=e.titleId,f=e.extra,m=e.watchable,g=m===void 0?!1:m,k=r.found?r:n,A=k.width,M=k.height,b=i==="fak",_=[L.replacementClass,s?"".concat(L.cssPrefix,"-").concat(s):""].filter(function(B){return f.classes.indexOf(B)===-1}).filter(function(B){return B!==""||!!B}).concat(f.classes).join(" "),R={children:[],attributes:O(O({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:_,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(M)})},C=b&&!~f.classes.indexOf("fa-fw")?{width:"".concat(A/M*16*.0625,"em")}:{};g&&(R.attributes[an]=""),c&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(u||pr())},children:[c]}),delete R.attributes.title);var j=O(O({},R),{},{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:a,symbol:o,styles:O(O({},C),f.styles)}),X=r.found&&n.found?bt("generateAbstractMask",j)||{children:[],attributes:{}}:bt("generateAbstractIcon",j)||{children:[],attributes:{}},J=X.children,K=X.attributes;return j.children=J,j.attributes=K,o?p_(j):m_(j)}function Ac(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,a=e.extra,o=e.watchable,c=o===void 0?!1:o,l=O(O(O({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});c&&(l[an]="");var u=O({},a.styles);La(i)&&(u.transform=Ky({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=$i(u);f.length>0&&(l.style=f);var m=[];return m.push({tag:"span",attributes:l,children:[t]}),s&&m.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),m}function g_(e){var t=e.content,n=e.title,r=e.extra,i=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=$i(r.styles);s.length>0&&(i.style=s);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var ls=We.styles;function zs(e){var t=e[0],n=e[1],r=e.slice(4),i=Pa(r,1),s=i[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(Xt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Xt.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Xt.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:a}}var v_={found:!1,width:512,height:512};function b_(e,t){!ef&&!L.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ws(e,t){var n=t;return t==="fa"&&L.styleDefault!==null&&(t=Ft()),new Promise(function(r,i){if(bt("missingIconAbstract"),n==="fa"){var s=mf(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&ls[t]&&ls[t][e]){var a=ls[t][e];return r(zs(a))}b_(e,t),r(O(O({},v_),{},{icon:L.showMissingIcons&&e?bt("missingIconAbstract")||{}:{}}))})}var Tc=function(){},Vs=L.measurePerformance&&Ur&&Ur.mark&&Ur.measure?Ur:{mark:Tc,measure:Tc},Wn='FA "6.4.2"',y_=function(t){return Vs.mark("".concat(Wn," ").concat(t," begins")),function(){return gf(t)}},gf=function(t){Vs.mark("".concat(Wn," ").concat(t," ends")),Vs.measure("".concat(Wn," ").concat(t),"".concat(Wn," ").concat(t," begins"),"".concat(Wn," ").concat(t," ends"))},Ba={begin:y_,end:gf},ti=function(){};function xc(e){var t=e.getAttribute?e.getAttribute(an):null;return typeof t=="string"}function __(e){var t=e.getAttribute?e.getAttribute(Ra):null,n=e.getAttribute?e.getAttribute(Na):null;return t&&n}function w_(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(L.replacementClass)}function E_(){if(L.autoReplaceSvg===!0)return ni.replace;var e=ni[L.autoReplaceSvg];return e||ni.replace}function I_(e){return ce.createElementNS("http://www.w3.org/2000/svg",e)}function k_(e){return ce.createElement(e)}function vf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?I_:k_:n;if(typeof e=="string")return ce.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var s=e.children||[];return s.forEach(function(a){i.appendChild(vf(a,{ceFn:r}))}),i}function S_(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ni={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(vf(i),n)}),n.getAttribute(an)===null&&L.keepOriginalSource){var r=ce.createComment(S_(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Da(n).indexOf(L.replacementClass))return ni.replace(t);var i=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(o,c){return c===L.replacementClass||c.match(i)?o.toSvg.push(c):o.toNode.push(c),o},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var a=r.map(function(o){return Tr(o)}).join(`
`);n.setAttribute(an,""),n.innerHTML=a}};function Cc(e){e()}function bf(e,t){var n=typeof t=="function"?t:ti;if(e.length===0)n();else{var r=Cc;L.mutateApproach===Cy&&(r=Ut.requestAnimationFrame||Cc),r(function(){var i=E_(),s=Ba.begin("mutate");e.map(i),s(),n()})}}var Ha=!1;function yf(){Ha=!0}function Ks(){Ha=!1}var bi=null;function Pc(e){if(yc&&L.observeMutations){var t=e.treeCallback,n=t===void 0?ti:t,r=e.nodeCallback,i=r===void 0?ti:r,s=e.pseudoElementsCallback,a=s===void 0?ti:s,o=e.observeMutationsRoot,c=o===void 0?ce:o;bi=new yc(function(l){if(!Ha){var u=Ft();Ln(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!xc(f.addedNodes[0])&&(L.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&L.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&xc(f.target)&&~Ly.indexOf(f.attributeName))if(f.attributeName==="class"&&__(f.target)){var m=Bi(Da(f.target)),g=m.prefix,k=m.iconName;f.target.setAttribute(Ra,g||u),k&&f.target.setAttribute(Na,k)}else w_(f.target)&&i(f.target)})}}),_t&&bi.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function A_(){bi&&bi.disconnect()}function T_(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(r[a]=o.join(":").trim()),r},{})),n}function x_(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Bi(Da(e));return i.prefix||(i.prefix=Ft()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=s_(i.prefix,e.innerText)||Fa(i.prefix,$s(e.innerText))),!i.iconName&&L.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function C_(e){var t=Ln(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return L.autoA11y&&(n?t["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(r||pr()):(t["aria-hidden"]="true",t.focusable="false")),t}function P_(){return{iconName:null,title:null,titleId:null,prefix:null,transform:tt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=x_(e),r=n.iconName,i=n.prefix,s=n.rest,a=C_(e),o=Bs("parseNodeAttributes",{},e),c=t.styleParser?T_(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:tt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:a}},o)}var O_=We.styles;function _f(e){var t=L.autoReplaceSvg==="nest"?Oc(e,{styleParser:!1}):Oc(e);return~t.extra.classes.indexOf(tf)?bt("generateLayersText",e,t):bt("generateSvgReplacementMutation",e,t)}var $t=new Set;Ma.map(function(e){$t.add("fa-".concat(e))});Object.keys(fr[oe]).map($t.add.bind($t));Object.keys(fr[de]).map($t.add.bind($t));$t=Sr($t);function Rc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!_t)return Promise.resolve();var n=ce.documentElement.classList,r=function(f){return n.add("".concat(_c,"-").concat(f))},i=function(f){return n.remove("".concat(_c,"-").concat(f))},s=L.autoFetchSvg?$t:Ma.map(function(u){return"fa-".concat(u)}).concat(Object.keys(O_));s.includes("fa")||s.push("fa");var a=[".".concat(tf,":not([").concat(an,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(an,"])")})).join(", ");if(a.length===0)return Promise.resolve();var o=[];try{o=Ln(e.querySelectorAll(a))}catch{}if(o.length>0)r("pending"),i("complete");else return Promise.resolve();var c=Ba.begin("onTree"),l=o.reduce(function(u,f){try{var m=_f(f);m&&u.push(m)}catch(g){ef||g.name==="MissingIcon"&&console.error(g)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(m){bf(m,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),c(),u()})}).catch(function(m){c(),f(m)})})}function R_(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;_f(e).then(function(n){n&&bf([n],t)})}function N_(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Hs(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Hs(i||{})),e(r,O(O({},n),{},{mask:i}))}}var M_=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?tt:r,s=n.symbol,a=s===void 0?!1:s,o=n.mask,c=o===void 0?null:o,l=n.maskId,u=l===void 0?null:l,f=n.title,m=f===void 0?null:f,g=n.titleId,k=g===void 0?null:g,A=n.classes,M=A===void 0?[]:A,b=n.attributes,_=b===void 0?{}:b,R=n.styles,C=R===void 0?{}:R;if(t){var j=t.prefix,X=t.iconName,J=t.icon;return Hi(O({type:"icon"},t),function(){return on("beforeDOMElementCreation",{iconDefinition:t,params:n}),L.autoA11y&&(m?_["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(k||pr()):(_["aria-hidden"]="true",_.focusable="false")),ja({icons:{main:zs(J),mask:c?zs(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:j,iconName:X,transform:O(O({},tt),i),symbol:a,title:m,maskId:u,titleId:k,extra:{attributes:_,styles:C,classes:M}})})}},D_={mixout:function(){return{icon:N_(M_)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Rc,n.nodeCallback=R_,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ce:r,s=n.callback,a=s===void 0?function(){}:s;return Rc(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,a=r.titleId,o=r.prefix,c=r.transform,l=r.symbol,u=r.mask,f=r.maskId,m=r.extra;return new Promise(function(g,k){Promise.all([Ws(i,o),u.iconName?Ws(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var M=Pa(A,2),b=M[0],_=M[1];g([n,ja({icons:{main:b,mask:_},prefix:o,iconName:i,transform:c,symbol:l,maskId:f,title:s,titleId:a,extra:m,watchable:!0})])}).catch(k)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.transform,o=n.styles,c=$i(o);c.length>0&&(i.style=c);var l;return La(a)&&(l=bt("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),r.push(l||s.icon),{children:r,attributes:i}}}},L_={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Hi({type:"layer"},function(){on("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(o){Array.isArray(o)?o.map(function(c){a=a.concat(c.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat(Sr(s)).join(" ")},children:a}]})}}}},U_={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,a=r.classes,o=a===void 0?[]:a,c=r.attributes,l=c===void 0?{}:c,u=r.styles,f=u===void 0?{}:u;return Hi({type:"counter",content:n},function(){return on("beforeDOMElementCreation",{content:n,params:r}),g_({content:n.toString(),title:s,extra:{attributes:l,styles:f,classes:["".concat(L.cssPrefix,"-layers-counter")].concat(Sr(o))}})})}}}},F_={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?tt:i,a=r.title,o=a===void 0?null:a,c=r.classes,l=c===void 0?[]:c,u=r.attributes,f=u===void 0?{}:u,m=r.styles,g=m===void 0?{}:m;return Hi({type:"text",content:n},function(){return on("beforeDOMElementCreation",{content:n,params:r}),Ac({content:n,transform:O(O({},tt),s),title:o,extra:{attributes:f,styles:g,classes:["".concat(L.cssPrefix,"-layers-text")].concat(Sr(l))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,a=r.extra,o=null,c=null;if(Ju){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/l,c=u.height/l}return L.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,Ac({content:n.innerHTML,width:o,height:c,transform:s,title:i,extra:a,watchable:!0})])}}},$_=new RegExp('"',"ug"),Nc=[1105920,1112319];function j_(e){var t=e.replace($_,""),n=Zy(t,0),r=n>=Nc[0]&&n<=Nc[1],i=t.length===2?t[0]===t[1]:!1;return{value:$s(i?t[0]:t),isSecondary:r||i}}function Mc(e,t){var n="".concat(xy).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=Ln(e.children),a=s.filter(function(J){return J.getAttribute(Fs)===t})[0],o=Ut.getComputedStyle(e,t),c=o.getPropertyValue("font-family").match(Ny),l=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(a&&!c)return e.removeChild(a),r();if(c&&u!=="none"&&u!==""){var f=o.getPropertyValue("content"),m=~["Sharp"].indexOf(c[2])?de:oe,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?dr[m][c[2].toLowerCase()]:My[m][l],k=j_(f),A=k.value,M=k.isSecondary,b=c[0].startsWith("FontAwesome"),_=Fa(g,A),R=_;if(b){var C=a_(A);C.iconName&&C.prefix&&(_=C.iconName,g=C.prefix)}if(_&&!M&&(!a||a.getAttribute(Ra)!==g||a.getAttribute(Na)!==R)){e.setAttribute(n,R),a&&e.removeChild(a);var j=P_(),X=j.extra;X.attributes[Fs]=t,Ws(_,g).then(function(J){var K=ja(O(O({},j),{},{icons:{main:J,mask:$a()},prefix:g,iconName:R,extra:X,watchable:!0})),B=ce.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(B,e.firstChild):e.appendChild(B),B.outerHTML=K.map(function(ae){return Tr(ae)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function B_(e){return Promise.all([Mc(e,"::before"),Mc(e,"::after")])}function H_(e){return e.parentNode!==document.head&&!~Py.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Fs)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Dc(e){if(_t)return new Promise(function(t,n){var r=Ln(e.querySelectorAll("*")).filter(H_).map(B_),i=Ba.begin("searchPseudoElements");yf(),Promise.all(r).then(function(){i(),Ks(),t()}).catch(function(){i(),Ks(),n()})})}var z_={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Dc,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ce:r;L.searchPseudoElements&&Dc(i)}}},Lc=!1,W_={mixout:function(){return{dom:{unwatch:function(){yf(),Lc=!0}}}},hooks:function(){return{bootstrap:function(){Pc(Bs("mutationObserverCallbacks",{}))},noAuto:function(){A_()},watch:function(n){var r=n.observeMutationsRoot;Lc?Ks():Pc(Bs("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Uc=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),a=s[0],o=s.slice(1).join("-");if(a&&o==="h")return r.flipX=!0,r;if(a&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(a){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},V_={mixout:function(){return{parse:{transform:function(n){return Uc(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Uc(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,a=n.iconWidth,o={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(u)},m={transform:"translate(".concat(a/2*-1," -256)")},g={outer:o,inner:f,path:m};return{tag:"g",attributes:O({},g.outer),children:[{tag:"g",attributes:O({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),g.path)}]}]}}}},us={x:0,y:0,width:"100%",height:"100%"};function Fc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function K_(e){return e.tag==="g"?e.children:[e]}var q_={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Bi(i.split(" ").map(function(a){return a.trim()})):$a();return s.prefix||(s.prefix=Ft()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.mask,o=n.maskId,c=n.transform,l=s.width,u=s.icon,f=a.width,m=a.icon,g=Vy({transform:c,containerWidth:f,iconWidth:l}),k={tag:"rect",attributes:O(O({},us),{},{fill:"white"})},A=u.children?{children:u.children.map(Fc)}:{},M={tag:"g",attributes:O({},g.inner),children:[Fc(O({tag:u.tag,attributes:O(O({},u.attributes),g.path)},A))]},b={tag:"g",attributes:O({},g.outer),children:[M]},_="mask-".concat(o||pr()),R="clip-".concat(o||pr()),C={tag:"mask",attributes:O(O({},us),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[k,b]},j={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:K_(m)},C]};return r.push(j,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(_,")")},us)}),{children:r,attributes:i}}}},G_={provides:function(t){var n=!1;Ut.matchMedia&&(n=Ut.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=O(O({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:O(O({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:O(O({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:O(O({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Y_={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},X_=[Gy,D_,L_,U_,F_,z_,W_,V_,q_,G_,Y_];l_(X_,{mixoutsTo:Le});Le.noAuto;Le.config;var J_=Le.library;Le.dom;var qs=Le.parse;Le.findIconDefinition;Le.toHtml;var Q_=Le.icon;Le.layer;Le.text;Le.counter;function $c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ut(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$c(Object(n),!0).forEach(function(r){xe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$c(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yi(e){"@babel/helpers - typeof";return yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yi(e)}function xe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z_(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function e0(e,t){if(e==null)return{};var n=Z_(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var t0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},wf={exports:{}};(function(e){(function(t){var n=function(b,_,R){if(!l(_)||f(_)||m(_)||g(_)||c(_))return _;var C,j=0,X=0;if(u(_))for(C=[],X=_.length;j<X;j++)C.push(n(b,_[j],R));else{C={};for(var J in _)Object.prototype.hasOwnProperty.call(_,J)&&(C[b(J,R)]=n(b,_[J],R))}return C},r=function(b,_){_=_||{};var R=_.separator||"_",C=_.split||/(?=[A-Z])/;return b.split(C).join(R)},i=function(b){return k(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(_,R){return R?R.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},s=function(b){var _=i(b);return _.substr(0,1).toUpperCase()+_.substr(1)},a=function(b,_){return r(b,_).toLowerCase()},o=Object.prototype.toString,c=function(b){return typeof b=="function"},l=function(b){return b===Object(b)},u=function(b){return o.call(b)=="[object Array]"},f=function(b){return o.call(b)=="[object Date]"},m=function(b){return o.call(b)=="[object RegExp]"},g=function(b){return o.call(b)=="[object Boolean]"},k=function(b){return b=b-0,b===b},A=function(b,_){var R=_&&"process"in _?_.process:_;return typeof R!="function"?b:function(C,j){return R(C,b,j)}},M={camelize:i,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(b,_){return n(A(i,_),b)},decamelizeKeys:function(b,_){return n(A(a,_),b,_)},pascalizeKeys:function(b,_){return n(A(s,_),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=M:t.humps=M})(t0)})(wf);var n0=wf.exports,r0=["class","style"];function i0(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=n0.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function s0(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ef(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return Ef(c)}),i=Object.keys(e.attributes||{}).reduce(function(c,l){var u=e.attributes[l];switch(l){case"class":c.class=s0(u);break;case"style":c.style=i0(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,a=s===void 0?{}:s,o=e0(n,r0);return ga(e.tag,ut(ut(ut({},t),{},{class:i.class,style:ut(ut({},i.style),a)},i.attrs),o),r)}var If=!1;try{If=!0}catch{}function a0(){if(!If&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function fs(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?xe({},e,t):{}}function o0(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},xe(t,"fa-".concat(e.size),e.size!==null),xe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),xe(t,"fa-pull-".concat(e.pull),e.pull!==null),xe(t,"fa-swap-opacity",e.swapOpacity),xe(t,"fa-bounce",e.bounce),xe(t,"fa-shake",e.shake),xe(t,"fa-beat",e.beat),xe(t,"fa-fade",e.fade),xe(t,"fa-beat-fade",e.beatFade),xe(t,"fa-flash",e.flash),xe(t,"fa-spin-pulse",e.spinPulse),xe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function jc(e){if(e&&yi(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(qs.icon)return qs.icon(e);if(e===null)return null;if(yi(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var c0=jt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=me(function(){return jc(t.icon)}),s=me(function(){return fs("classes",o0(t))}),a=me(function(){return fs("transform",typeof t.transform=="string"?qs.transform(t.transform):t.transform)}),o=me(function(){return fs("mask",jc(t.mask))}),c=me(function(){return Q_(i.value,ut(ut(ut(ut({},s.value),a.value),o.value),{},{symbol:t.symbol,title:t.title}))});Zt(c,function(u){if(!u)return a0("Could not find one or more icon(s)",i.value,o.value)},{immediate:!0});var l=me(function(){return c.value?Ef(c.value.abstract[0],{},r):null});return function(){return l.value}}}),l0={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},u0={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]};J_.add(l0,u0);const za=Qh(ey);za.use(tm());za.use(by);za.component("font-awesome-icon",c0).mount("#app");export{lt as G,zb as a,Gd as b,et as c,jt as d,De as e,be as f,Bb as g,zn as h,Xv as i,gr as n,Pe as o,Ie as r,va as s,d0 as u,f0 as w};
