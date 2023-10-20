(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Xs(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const de={},yn=[],qe=()=>{},Pf=()=>!1,Of=/^on[^a-z]/,_i=e=>Of.test(e),Js=e=>e.startsWith("onUpdate:"),Ee=Object.assign,Qs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Rf=Object.prototype.hasOwnProperty,Q=(e,t)=>Rf.call(e,t),z=Array.isArray,_n=e=>wi(e)==="[object Map]",Hl=e=>wi(e)==="[object Set]",K=e=>typeof e=="function",ye=e=>typeof e=="string",Zs=e=>typeof e=="symbol",fe=e=>e!==null&&typeof e=="object",zl=e=>fe(e)&&K(e.then)&&K(e.catch),Wl=Object.prototype.toString,wi=e=>Wl.call(e),Nf=e=>wi(e).slice(8,-1),Vl=e=>wi(e)==="[object Object]",ea=e=>ye(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Kr=Xs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ei=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Mf=/-(\w)/g,at=Ei(e=>e.replace(Mf,(t,n)=>n?n.toUpperCase():"")),Df=/\B([A-Z])/g,Dn=Ei(e=>e.replace(Df,"-$1").toLowerCase()),Ii=Ei(e=>e.charAt(0).toUpperCase()+e.slice(1)),Vi=Ei(e=>e?`on${Ii(e)}`:""),er=(e,t)=>!Object.is(e,t),Ki=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ri=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Lf=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ga;const ps=()=>Ga||(Ga=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ta(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=ye(r)?jf(r):ta(r);if(i)for(const s in i)t[s]=i[s]}return t}else{if(ye(e))return e;if(fe(e))return e}}const Uf=/;(?![^(]*\))/g,Ff=/:([^]+)/,$f=/\/\*[^]*?\*\//g;function jf(e){const t={};return e.replace($f,"").split(Uf).forEach(n=>{if(n){const r=n.split(Ff);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Y(e){let t="";if(ye(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const r=Y(e[n]);r&&(t+=r+" ")}else if(fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Bf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hf=Xs(Bf);function Kl(e){return!!e||e===""}const wn=e=>ye(e)?e:e==null?"":z(e)||fe(e)&&(e.toString===Wl||!K(e.toString))?JSON.stringify(e,ql,2):String(e),ql=(e,t)=>t&&t.__v_isRef?ql(e,t.value):_n(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Hl(t)?{[`Set(${t.size})`]:[...t.values()]}:fe(t)&&!z(t)&&!Vl(t)?String(t):t;let Le;class Gl{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Le,!t&&Le&&(this.index=(Le.scopes||(Le.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Le;try{return Le=this,t()}finally{Le=n}}}on(){Le=this}off(){Le=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Yl(e){return new Gl(e)}function zf(e,t=Le){t&&t.active&&t.effects.push(e)}function Xl(){return Le}function Wf(e){Le&&Le.cleanups.push(e)}const na=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Jl=e=>(e.w&$t)>0,Ql=e=>(e.n&$t)>0,Vf=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=$t},Kf=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Jl(i)&&!Ql(i)?i.delete(e):t[n++]=i,i.w&=~$t,i.n&=~$t}t.length=n}},ii=new WeakMap;let Hn=0,$t=1;const ms=30;let We;const en=Symbol(""),gs=Symbol("");class ra{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,zf(this,r)}run(){if(!this.active)return this.fn();let t=We,n=Dt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=We,We=this,Dt=!0,$t=1<<++Hn,Hn<=ms?Vf(this):Ya(this),this.fn()}finally{Hn<=ms&&Kf(this),$t=1<<--Hn,We=this.parent,Dt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){We===this?this.deferStop=!0:this.active&&(Ya(this),this.onStop&&this.onStop(),this.active=!1)}}function Ya(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Dt=!0;const Zl=[];function Ln(){Zl.push(Dt),Dt=!1}function Un(){const e=Zl.pop();Dt=e===void 0?!0:e}function Ne(e,t,n){if(Dt&&We){let r=ii.get(e);r||ii.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=na()),ec(i)}}function ec(e,t){let n=!1;Hn<=ms?Ql(e)||(e.n|=$t,n=!Jl(e)):n=!e.has(We),n&&(e.add(We),We.deps.push(e))}function mt(e,t,n,r,i,s){const a=ii.get(e);if(!a)return;let o=[];if(t==="clear")o=[...a.values()];else if(n==="length"&&z(e)){const l=Number(r);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(n!==void 0&&o.push(a.get(n)),t){case"add":z(e)?ea(n)&&o.push(a.get("length")):(o.push(a.get(en)),_n(e)&&o.push(a.get(gs)));break;case"delete":z(e)||(o.push(a.get(en)),_n(e)&&o.push(a.get(gs)));break;case"set":_n(e)&&o.push(a.get(en));break}if(o.length===1)o[0]&&vs(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);vs(na(l))}}function vs(e,t){const n=z(e)?e:[...e];for(const r of n)r.computed&&Xa(r);for(const r of n)r.computed||Xa(r)}function Xa(e,t){(e!==We||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function qf(e,t){var n;return(n=ii.get(e))==null?void 0:n.get(t)}const Gf=Xs("__proto__,__v_isRef,__isVue"),tc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Zs)),Yf=ia(),Xf=ia(!1,!0),Jf=ia(!0),Ja=Qf();function Qf(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=J(this);for(let s=0,a=this.length;s<a;s++)Ne(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(J)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ln();const r=J(this)[t].apply(this,n);return Un(),r}}),e}function Zf(e){const t=J(this);return Ne(t,"has",e),t.hasOwnProperty(e)}function ia(e=!1,t=!1){return function(r,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&s===(e?t?md:ac:t?sc:ic).get(r))return r;const a=z(r);if(!e){if(a&&Q(Ja,i))return Reflect.get(Ja,i,s);if(i==="hasOwnProperty")return Zf}const o=Reflect.get(r,i,s);return(Zs(i)?tc.has(i):Gf(i))||(e||Ne(r,"get",i),t)?o:he(o)?a&&ea(i)?o:o.value:fe(o)?e?lc(o):vr(o):o}}const ed=nc(),td=nc(!0);function nc(e=!1){return function(n,r,i,s){let a=n[r];if(An(a)&&he(a)&&!he(i))return!1;if(!e&&(!si(i)&&!An(i)&&(a=J(a),i=J(i)),!z(n)&&he(a)&&!he(i)))return a.value=i,!0;const o=z(n)&&ea(r)?Number(r)<n.length:Q(n,r),l=Reflect.set(n,r,i,s);return n===J(s)&&(o?er(i,a)&&mt(n,"set",r,i):mt(n,"add",r,i)),l}}function nd(e,t){const n=Q(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&mt(e,"delete",t,void 0),r}function rd(e,t){const n=Reflect.has(e,t);return(!Zs(t)||!tc.has(t))&&Ne(e,"has",t),n}function id(e){return Ne(e,"iterate",z(e)?"length":en),Reflect.ownKeys(e)}const rc={get:Yf,set:ed,deleteProperty:nd,has:rd,ownKeys:id},sd={get:Jf,set(e,t){return!0},deleteProperty(e,t){return!0}},ad=Ee({},rc,{get:Xf,set:td}),sa=e=>e,xi=e=>Reflect.getPrototypeOf(e);function Cr(e,t,n=!1,r=!1){e=e.__v_raw;const i=J(e),s=J(t);n||(t!==s&&Ne(i,"get",t),Ne(i,"get",s));const{has:a}=xi(i),o=r?sa:n?la:tr;if(a.call(i,t))return o(e.get(t));if(a.call(i,s))return o(e.get(s));e!==i&&e.get(t)}function Pr(e,t=!1){const n=this.__v_raw,r=J(n),i=J(e);return t||(e!==i&&Ne(r,"has",e),Ne(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Or(e,t=!1){return e=e.__v_raw,!t&&Ne(J(e),"iterate",en),Reflect.get(e,"size",e)}function Qa(e){e=J(e);const t=J(this);return xi(t).has.call(t,e)||(t.add(e),mt(t,"add",e,e)),this}function Za(e,t){t=J(t);const n=J(this),{has:r,get:i}=xi(n);let s=r.call(n,e);s||(e=J(e),s=r.call(n,e));const a=i.call(n,e);return n.set(e,t),s?er(t,a)&&mt(n,"set",e,t):mt(n,"add",e,t),this}function eo(e){const t=J(this),{has:n,get:r}=xi(t);let i=n.call(t,e);i||(e=J(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&mt(t,"delete",e,void 0),s}function to(){const e=J(this),t=e.size!==0,n=e.clear();return t&&mt(e,"clear",void 0,void 0),n}function Rr(e,t){return function(r,i){const s=this,a=s.__v_raw,o=J(a),l=t?sa:e?la:tr;return!e&&Ne(o,"iterate",en),a.forEach((c,u)=>r.call(i,l(c),l(u),s))}}function Nr(e,t,n){return function(...r){const i=this.__v_raw,s=J(i),a=_n(s),o=e==="entries"||e===Symbol.iterator&&a,l=e==="keys"&&a,c=i[e](...r),u=n?sa:t?la:tr;return!t&&Ne(s,"iterate",l?gs:en),{next(){const{value:f,done:p}=c.next();return p?{value:f,done:p}:{value:o?[u(f[0]),u(f[1])]:u(f),done:p}},[Symbol.iterator](){return this}}}}function xt(e){return function(...t){return e==="delete"?!1:this}}function od(){const e={get(s){return Cr(this,s)},get size(){return Or(this)},has:Pr,add:Qa,set:Za,delete:eo,clear:to,forEach:Rr(!1,!1)},t={get(s){return Cr(this,s,!1,!0)},get size(){return Or(this)},has:Pr,add:Qa,set:Za,delete:eo,clear:to,forEach:Rr(!1,!0)},n={get(s){return Cr(this,s,!0)},get size(){return Or(this,!0)},has(s){return Pr.call(this,s,!0)},add:xt("add"),set:xt("set"),delete:xt("delete"),clear:xt("clear"),forEach:Rr(!0,!1)},r={get(s){return Cr(this,s,!0,!0)},get size(){return Or(this,!0)},has(s){return Pr.call(this,s,!0)},add:xt("add"),set:xt("set"),delete:xt("delete"),clear:xt("clear"),forEach:Rr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Nr(s,!1,!1),n[s]=Nr(s,!0,!1),t[s]=Nr(s,!1,!0),r[s]=Nr(s,!0,!0)}),[e,n,t,r]}const[ld,cd,ud,fd]=od();function aa(e,t){const n=t?e?fd:ud:e?cd:ld;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(Q(n,i)&&i in r?n:r,i,s)}const dd={get:aa(!1,!1)},hd={get:aa(!1,!0)},pd={get:aa(!0,!1)},ic=new WeakMap,sc=new WeakMap,ac=new WeakMap,md=new WeakMap;function gd(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vd(e){return e.__v_skip||!Object.isExtensible(e)?0:gd(Nf(e))}function vr(e){return An(e)?e:oa(e,!1,rc,dd,ic)}function oc(e){return oa(e,!1,ad,hd,sc)}function lc(e){return oa(e,!0,sd,pd,ac)}function oa(e,t,n,r,i){if(!fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const a=vd(e);if(a===0)return e;const o=new Proxy(e,a===2?r:n);return i.set(e,o),o}function pt(e){return An(e)?pt(e.__v_raw):!!(e&&e.__v_isReactive)}function An(e){return!!(e&&e.__v_isReadonly)}function si(e){return!!(e&&e.__v_isShallow)}function cc(e){return pt(e)||An(e)}function J(e){const t=e&&e.__v_raw;return t?J(t):e}function ki(e){return ri(e,"__v_skip",!0),e}const tr=e=>fe(e)?vr(e):e,la=e=>fe(e)?lc(e):e;function uc(e){Dt&&We&&(e=J(e),ec(e.dep||(e.dep=na())))}function fc(e,t){e=J(e);const n=e.dep;n&&vs(n)}function he(e){return!!(e&&e.__v_isRef===!0)}function me(e){return dc(e,!1)}function bd(e){return dc(e,!0)}function dc(e,t){return he(e)?e:new yd(e,t)}class yd{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:J(t),this._value=n?t:tr(t)}get value(){return uc(this),this._value}set value(t){const n=this.__v_isShallow||si(t)||An(t);t=n?t:J(t),er(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:tr(t),fc(this))}}function Ce(e){return he(e)?e.value:e}function _d(e){return K(e)?e():Ce(e)}const wd={get:(e,t,n)=>Ce(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return he(i)&&!he(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function hc(e){return pt(e)?e:new Proxy(e,wd)}function Ed(e){const t=z(e)?new Array(e.length):{};for(const n in e)t[n]=pc(e,n);return t}class Id{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return qf(J(this._object),this._key)}}class xd{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function kd(e,t,n){return he(e)?e:K(e)?new xd(e):fe(e)&&arguments.length>1?pc(e,t,n):me(e)}function pc(e,t,n){const r=e[t];return he(r)?r:new Id(e,t,n)}class Sd{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ra(t,()=>{this._dirty||(this._dirty=!0,fc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=J(this);return uc(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ad(e,t,n=!1){let r,i;const s=K(e);return s?(r=e,i=qe):(r=e.get,i=e.set),new Sd(r,i,s||!i,n)}function Lt(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Si(s,t,n)}return i}function Ge(e,t,n,r){if(K(e)){const s=Lt(e,t,n,r);return s&&zl(s)&&s.catch(a=>{Si(a,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(Ge(e[s],t,n,r));return i}function Si(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,o=n;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,a,o)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){Lt(l,null,10,[e,a,o]);return}}Td(e,n,i,r)}function Td(e,t,n,r=!0){console.error(e)}let nr=!1,bs=!1;const Se=[];let tt=0;const En=[];let ut=null,Yt=0;const mc=Promise.resolve();let ca=null;function ua(e){const t=ca||mc;return e?t.then(this?e.bind(this):e):t}function Cd(e){let t=tt+1,n=Se.length;for(;t<n;){const r=t+n>>>1;rr(Se[r])<e?t=r+1:n=r}return t}function fa(e){(!Se.length||!Se.includes(e,nr&&e.allowRecurse?tt+1:tt))&&(e.id==null?Se.push(e):Se.splice(Cd(e.id),0,e),gc())}function gc(){!nr&&!bs&&(bs=!0,ca=mc.then(bc))}function Pd(e){const t=Se.indexOf(e);t>tt&&Se.splice(t,1)}function Od(e){z(e)?En.push(...e):(!ut||!ut.includes(e,e.allowRecurse?Yt+1:Yt))&&En.push(e),gc()}function no(e,t=nr?tt+1:0){for(;t<Se.length;t++){const n=Se[t];n&&n.pre&&(Se.splice(t,1),t--,n())}}function vc(e){if(En.length){const t=[...new Set(En)];if(En.length=0,ut){ut.push(...t);return}for(ut=t,ut.sort((n,r)=>rr(n)-rr(r)),Yt=0;Yt<ut.length;Yt++)ut[Yt]();ut=null,Yt=0}}const rr=e=>e.id==null?1/0:e.id,Rd=(e,t)=>{const n=rr(e)-rr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function bc(e){bs=!1,nr=!0,Se.sort(Rd);const t=qe;try{for(tt=0;tt<Se.length;tt++){const n=Se[tt];n&&n.active!==!1&&Lt(n,null,14)}}finally{tt=0,Se.length=0,vc(),nr=!1,ca=null,(Se.length||En.length)&&bc()}}function Nd(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||de;let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in r){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:p}=r[u]||de;p&&(i=n.map(g=>ye(g)?g.trim():g)),f&&(i=n.map(Lf))}let o,l=r[o=Vi(t)]||r[o=Vi(at(t))];!l&&s&&(l=r[o=Vi(Dn(t))]),l&&Ge(l,e,6,i);const c=r[o+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ge(c,e,6,i)}}function yc(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!K(e)){const l=c=>{const u=yc(c,t,!0);u&&(o=!0,Ee(a,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!o?(fe(e)&&r.set(e,null),null):(z(s)?s.forEach(l=>a[l]=null):Ee(a,s),fe(e)&&r.set(e,a),a)}function Ai(e,t){return!e||!_i(t)?!1:(t=t.slice(2).replace(/Once$/,""),Q(e,t[0].toLowerCase()+t.slice(1))||Q(e,Dn(t))||Q(e,t))}let je=null,Ti=null;function ai(e){const t=je;return je=e,Ti=e&&e.type.__scopeId||null,t}function Md(e){Ti=e}function Dd(){Ti=null}function zn(e,t=je,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&po(-1);const s=ai(t);let a;try{a=e(...i)}finally{ai(s),r._d&&po(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function qi(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:p,setupState:g,ctx:x,inheritAttrs:A}=e;let N,b;const _=ai(e);try{if(n.shapeFlag&4){const k=i||r;N=et(u.call(k,k,f,s,g,p,x)),b=l}else{const k=t;N=et(k.length>1?k(s,{attrs:l,slots:o,emit:c}):k(s,null)),b=t.props?l:Ld(l)}}catch(k){qn.length=0,Si(k,e,1),N=be(sn)}let O=N;if(b&&A!==!1){const k=Object.keys(b),{shapeFlag:D}=O;k.length&&D&7&&(a&&k.some(Js)&&(b=Ud(b,a)),O=Tn(O,b))}return n.dirs&&(O=Tn(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),N=O,ai(_),N}const Ld=e=>{let t;for(const n in e)(n==="class"||n==="style"||_i(n))&&((t||(t={}))[n]=e[n]);return t},Ud=(e,t)=>{const n={};for(const r in e)(!Js(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Fd(e,t,n){const{props:r,children:i,component:s}=e,{props:a,children:o,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ro(r,a,c):!!a;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const p=u[f];if(a[p]!==r[p]&&!Ai(c,p))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===a?!1:r?a?ro(r,a,c):!0:!!a;return!1}function ro(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Ai(n,s))return!0}return!1}function $d({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const jd=e=>e.__isSuspense;function Bd(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):Od(e)}const Mr={};function tn(e,t,n){return _c(e,t,n)}function _c(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:a}=de){var o;const l=Xl()===((o=we)==null?void 0:o.scope)?we:null;let c,u=!1,f=!1;if(he(e)?(c=()=>e.value,u=si(e)):pt(e)?(c=()=>e,r=!0):z(e)?(f=!0,u=e.some(k=>pt(k)||si(k)),c=()=>e.map(k=>{if(he(k))return k.value;if(pt(k))return gn(k);if(K(k))return Lt(k,l,2)})):K(e)?t?c=()=>Lt(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return p&&p(),Ge(e,l,3,[g])}:c=qe,t&&r){const k=c;c=()=>gn(k())}let p,g=k=>{p=_.onStop=()=>{Lt(k,l,4)}},x;if(ar)if(g=qe,t?n&&Ge(t,l,3,[c(),f?[]:void 0,g]):c(),i==="sync"){const k=Mh();x=k.__watcherHandles||(k.__watcherHandles=[])}else return qe;let A=f?new Array(e.length).fill(Mr):Mr;const N=()=>{if(_.active)if(t){const k=_.run();(r||u||(f?k.some((D,X)=>er(D,A[X])):er(k,A)))&&(p&&p(),Ge(t,l,3,[k,A===Mr?void 0:f&&A[0]===Mr?[]:A,g]),A=k)}else _.run()};N.allowRecurse=!!t;let b;i==="sync"?b=N:i==="post"?b=()=>Re(N,l&&l.suspense):(N.pre=!0,l&&(N.id=l.uid),b=()=>fa(N));const _=new ra(c,b);t?n?N():A=_.run():i==="post"?Re(_.run.bind(_),l&&l.suspense):_.run();const O=()=>{_.stop(),l&&l.scope&&Qs(l.scope.effects,_)};return x&&x.push(O),O}function Hd(e,t,n){const r=this.proxy,i=ye(e)?e.includes(".")?wc(r,e):()=>r[e]:e.bind(r,r);let s;K(t)?s=t:(s=t.handler,n=t);const a=we;Cn(this);const o=_c(i,s.bind(r),n);return a?Cn(a):nn(),o}function wc(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function gn(e,t){if(!fe(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),he(e))gn(e.value,t);else if(z(e))for(let n=0;n<e.length;n++)gn(e[n],t);else if(Hl(e)||_n(e))e.forEach(n=>{gn(n,t)});else if(Vl(e))for(const n in e)gn(e[n],t);return e}function Kt(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let l=o.dir[r];l&&(Ln(),Ge(l,n,8,[e.el,o,e,t]),Un())}}function _t(e,t){return K(e)?(()=>Ee({name:e.name},t,{setup:e}))():e}const qr=e=>!!e.type.__asyncLoader,Ec=e=>e.type.__isKeepAlive;function zd(e,t){Ic(e,"a",t)}function Wd(e,t){Ic(e,"da",t)}function Ic(e,t,n=we){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Ci(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Ec(i.parent.vnode)&&Vd(r,t,n,i),i=i.parent}}function Vd(e,t,n,r){const i=Ci(t,e,r,!0);da(()=>{Qs(r[t],i)},n)}function Ci(e,t,n=we,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;Ln(),Cn(n);const o=Ge(t,n,e,a);return nn(),Un(),o});return r?i.unshift(s):i.push(s),s}}const wt=e=>(t,n=we)=>(!ar||e==="sp")&&Ci(e,(...r)=>t(...r),n),Kd=wt("bm"),xc=wt("m"),qd=wt("bu"),Gd=wt("u"),Yd=wt("bum"),da=wt("um"),Xd=wt("sp"),Jd=wt("rtg"),Qd=wt("rtc");function Zd(e,t=we){Ci("ec",e,t)}const kc="components";function Sc(e,t){return th(kc,e,!0,t)||e}const eh=Symbol.for("v-ndc");function th(e,t,n=!0,r=!1){const i=je||we;if(i){const s=i.type;if(e===kc){const o=Oh(s,!1);if(o&&(o===t||o===at(t)||o===Ii(at(t))))return s}const a=io(i[e]||s[e],t)||io(i.appContext[e],t);return!a&&r?s:a}}function io(e,t){return e&&(e[t]||e[at(t)]||e[Ii(at(t))])}function Ac(e,t,n,r){let i;const s=n&&n[r];if(z(e)||ye(e)){i=new Array(e.length);for(let a=0,o=e.length;a<o;a++)i[a]=t(e[a],a,void 0,s&&s[a])}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,s&&s[a])}else if(fe(e))if(e[Symbol.iterator])i=Array.from(e,(a,o)=>t(a,o,void 0,s&&s[o]));else{const a=Object.keys(e);i=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];i[o]=t(e[c],c,o,s&&s[o])}}else i=[];return n&&(n[r]=i),i}const ys=e=>e?Fc(e)?va(e)||e.proxy:ys(e.parent):null,Kn=Ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ys(e.parent),$root:e=>ys(e.root),$emit:e=>e.emit,$options:e=>ha(e),$forceUpdate:e=>e.f||(e.f=()=>fa(e.update)),$nextTick:e=>e.n||(e.n=ua.bind(e.proxy)),$watch:e=>Hd.bind(e)}),Gi=(e,t)=>e!==de&&!e.__isScriptSetup&&Q(e,t),nh={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:o,appContext:l}=e;let c;if(t[0]!=="$"){const g=a[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(Gi(r,t))return a[t]=1,r[t];if(i!==de&&Q(i,t))return a[t]=2,i[t];if((c=e.propsOptions[0])&&Q(c,t))return a[t]=3,s[t];if(n!==de&&Q(n,t))return a[t]=4,n[t];_s&&(a[t]=0)}}const u=Kn[t];let f,p;if(u)return t==="$attrs"&&Ne(e,"get",t),u(e);if((f=o.__cssModules)&&(f=f[t]))return f;if(n!==de&&Q(n,t))return a[t]=4,n[t];if(p=l.config.globalProperties,Q(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return Gi(i,t)?(i[t]=n,!0):r!==de&&Q(r,t)?(r[t]=n,!0):Q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let o;return!!n[a]||e!==de&&Q(e,a)||Gi(t,a)||(o=s[0])&&Q(o,a)||Q(r,a)||Q(Kn,a)||Q(i.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function so(e){return z(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let _s=!0;function rh(e){const t=ha(e),n=e.proxy,r=e.ctx;_s=!1,t.beforeCreate&&ao(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:p,beforeUpdate:g,updated:x,activated:A,deactivated:N,beforeDestroy:b,beforeUnmount:_,destroyed:O,unmounted:k,render:D,renderTracked:X,renderTriggered:Z,errorCaptured:q,serverPrefetch:H,expose:le,inheritAttrs:Ie,components:Me,directives:Fe,filters:Vt}=t;if(c&&ih(c,r,null),a)for(const se in a){const te=a[se];K(te)&&(r[se]=te.bind(n))}if(i){const se=i.call(n,n);fe(se)&&(e.data=vr(se))}if(_s=!0,s)for(const se in s){const te=s[se],lt=K(te)?te.bind(n,n):K(te.get)?te.get.bind(n,n):qe,It=!K(te)&&K(te.set)?te.set.bind(n):qe,Je=ve({get:lt,set:It});Object.defineProperty(r,se,{enumerable:!0,configurable:!0,get:()=>Je.value,set:Pe=>Je.value=Pe})}if(o)for(const se in o)Tc(o[se],r,n,se);if(l){const se=K(l)?l.call(n):l;Reflect.ownKeys(se).forEach(te=>{Gr(te,se[te])})}u&&ao(u,e,"c");function ee(se,te){z(te)?te.forEach(lt=>se(lt.bind(n))):te&&se(te.bind(n))}if(ee(Kd,f),ee(xc,p),ee(qd,g),ee(Gd,x),ee(zd,A),ee(Wd,N),ee(Zd,q),ee(Qd,X),ee(Jd,Z),ee(Yd,_),ee(da,k),ee(Xd,H),z(le))if(le.length){const se=e.exposed||(e.exposed={});le.forEach(te=>{Object.defineProperty(se,te,{get:()=>n[te],set:lt=>n[te]=lt})})}else e.exposed||(e.exposed={});D&&e.render===qe&&(e.render=D),Ie!=null&&(e.inheritAttrs=Ie),Me&&(e.components=Me),Fe&&(e.directives=Fe)}function ih(e,t,n=qe){z(e)&&(e=ws(e));for(const r in e){const i=e[r];let s;fe(i)?"default"in i?s=Ye(i.from||r,i.default,!0):s=Ye(i.from||r):s=Ye(i),he(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[r]=s}}function ao(e,t,n){Ge(z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Tc(e,t,n,r){const i=r.includes(".")?wc(n,r):()=>n[r];if(ye(e)){const s=t[e];K(s)&&tn(i,s)}else if(K(e))tn(i,e.bind(n));else if(fe(e))if(z(e))e.forEach(s=>Tc(s,t,n,r));else{const s=K(e.handler)?e.handler.bind(n):t[e.handler];K(s)&&tn(i,s,e)}}function ha(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let l;return o?l=o:!i.length&&!n&&!r?l=t:(l={},i.length&&i.forEach(c=>oi(l,c,a,!0)),oi(l,t,a)),fe(t)&&s.set(t,l),l}function oi(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&oi(e,s,n,!0),i&&i.forEach(a=>oi(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const o=sh[a]||n&&n[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const sh={data:oo,props:lo,emits:lo,methods:Wn,computed:Wn,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:Wn,directives:Wn,watch:oh,provide:oo,inject:ah};function oo(e,t){return t?e?function(){return Ee(K(e)?e.call(this,this):e,K(t)?t.call(this,this):t)}:t:e}function ah(e,t){return Wn(ws(e),ws(t))}function ws(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Te(e,t){return e?[...new Set([].concat(e,t))]:t}function Wn(e,t){return e?Ee(Object.create(null),e,t):t}function lo(e,t){return e?z(e)&&z(t)?[...new Set([...e,...t])]:Ee(Object.create(null),so(e),so(t??{})):t}function oh(e,t){if(!e)return t;if(!t)return e;const n=Ee(Object.create(null),e);for(const r in t)n[r]=Te(e[r],t[r]);return n}function Cc(){return{app:null,config:{isNativeTag:Pf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lh=0;function ch(e,t){return function(r,i=null){K(r)||(r=Ee({},r)),i!=null&&!fe(i)&&(i=null);const s=Cc(),a=new Set;let o=!1;const l=s.app={_uid:lh++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Dh,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&K(c.install)?(a.add(c),c.install(l,...u)):K(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const p=be(r,i);return p.appContext=s,u&&t?t(p,c):e(p,c,f),o=!0,l._container=c,c.__vue_app__=l,va(p.component)||p.component.proxy}},unmount(){o&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){ir=l;try{return c()}finally{ir=null}}};return l}}let ir=null;function Gr(e,t){if(we){let n=we.provides;const r=we.parent&&we.parent.provides;r===n&&(n=we.provides=Object.create(r)),n[e]=t}}function Ye(e,t,n=!1){const r=we||je;if(r||ir){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ir._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&K(t)?t.call(r&&r.proxy):t}}function uh(){return!!(we||je||ir)}function fh(e,t,n,r=!1){const i={},s={};ri(s,Oi,1),e.propsDefaults=Object.create(null),Pc(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=r?i:oc(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function dh(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=J(i),[l]=e.propsOptions;let c=!1;if((r||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let p=u[f];if(Ai(e.emitsOptions,p))continue;const g=t[p];if(l)if(Q(s,p))g!==s[p]&&(s[p]=g,c=!0);else{const x=at(p);i[x]=Es(l,o,x,g,e,!1)}else g!==s[p]&&(s[p]=g,c=!0)}}}else{Pc(e,t,i,s)&&(c=!0);let u;for(const f in o)(!t||!Q(t,f)&&((u=Dn(f))===f||!Q(t,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Es(l,o,f,void 0,e,!0)):delete i[f]);if(s!==o)for(const f in s)(!t||!Q(t,f))&&(delete s[f],c=!0)}c&&mt(e,"set","$attrs")}function Pc(e,t,n,r){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let l in t){if(Kr(l))continue;const c=t[l];let u;i&&Q(i,u=at(l))?!s||!s.includes(u)?n[u]=c:(o||(o={}))[u]=c:Ai(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,a=!0)}if(s){const l=J(n),c=o||de;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Es(i,l,f,c[f],e,!Q(c,f))}}return a}function Es(e,t,n,r,i,s){const a=e[n];if(a!=null){const o=Q(a,"default");if(o&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&K(l)){const{propsDefaults:c}=i;n in c?r=c[n]:(Cn(i),r=c[n]=l.call(null,t),nn())}else r=l}a[0]&&(s&&!o?r=!1:a[1]&&(r===""||r===Dn(n))&&(r=!0))}return r}function Oc(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},o=[];let l=!1;if(!K(e)){const u=f=>{l=!0;const[p,g]=Oc(f,t,!0);Ee(a,p),g&&o.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!l)return fe(e)&&r.set(e,yn),yn;if(z(s))for(let u=0;u<s.length;u++){const f=at(s[u]);co(f)&&(a[f]=de)}else if(s)for(const u in s){const f=at(u);if(co(f)){const p=s[u],g=a[f]=z(p)||K(p)?{type:p}:Ee({},p);if(g){const x=ho(Boolean,g.type),A=ho(String,g.type);g[0]=x>-1,g[1]=A<0||x<A,(x>-1||Q(g,"default"))&&o.push(f)}}}const c=[a,o];return fe(e)&&r.set(e,c),c}function co(e){return e[0]!=="$"}function uo(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function fo(e,t){return uo(e)===uo(t)}function ho(e,t){return z(t)?t.findIndex(n=>fo(n,e)):K(t)&&fo(t,e)?0:-1}const Rc=e=>e[0]==="_"||e==="$stable",pa=e=>z(e)?e.map(et):[et(e)],hh=(e,t,n)=>{if(t._n)return t;const r=zn((...i)=>pa(t(...i)),n);return r._c=!1,r},Nc=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Rc(i))continue;const s=e[i];if(K(s))t[i]=hh(i,s,r);else if(s!=null){const a=pa(s);t[i]=()=>a}}},Mc=(e,t)=>{const n=pa(t);e.slots.default=()=>n},ph=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=J(t),ri(t,"_",n)):Nc(t,e.slots={})}else e.slots={},t&&Mc(e,t);ri(e.slots,Oi,1)},mh=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=de;if(r.shapeFlag&32){const o=t._;o?n&&o===1?s=!1:(Ee(i,t),!n&&o===1&&delete i._):(s=!t.$stable,Nc(t,i)),a=t}else t&&(Mc(e,t),a={default:1});if(s)for(const o in i)!Rc(o)&&!(o in a)&&delete i[o]};function Is(e,t,n,r,i=!1){if(z(e)){e.forEach((p,g)=>Is(p,t&&(z(t)?t[g]:t),n,r,i));return}if(qr(r)&&!i)return;const s=r.shapeFlag&4?va(r.component)||r.component.proxy:r.el,a=i?null:s,{i:o,r:l}=e,c=t&&t.r,u=o.refs===de?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(ye(c)?(u[c]=null,Q(f,c)&&(f[c]=null)):he(c)&&(c.value=null)),K(l))Lt(l,o,12,[a,u]);else{const p=ye(l),g=he(l);if(p||g){const x=()=>{if(e.f){const A=p?Q(f,l)?f[l]:u[l]:l.value;i?z(A)&&Qs(A,s):z(A)?A.includes(s)||A.push(s):p?(u[l]=[s],Q(f,l)&&(f[l]=u[l])):(l.value=[s],e.k&&(u[e.k]=l.value))}else p?(u[l]=a,Q(f,l)&&(f[l]=a)):g&&(l.value=a,e.k&&(u[e.k]=a))};a?(x.id=-1,Re(x,n)):x()}}}const Re=Bd;function gh(e){return vh(e)}function vh(e,t){const n=ps();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:p,setScopeId:g=qe,insertStaticContent:x}=e,A=(d,h,m,v=null,w=null,E=null,P=!1,S=null,T=!!h.dynamicChildren)=>{if(d===h)return;d&&!jn(d,h)&&(v=y(d),Pe(d,w,E,!0),d=null),h.patchFlag===-2&&(T=!1,h.dynamicChildren=null);const{type:I,ref:$,shapeFlag:L}=h;switch(I){case Pi:N(d,h,m,v);break;case sn:b(d,h,m,v);break;case Yi:d==null&&_(h,m,v,P);break;case ze:Me(d,h,m,v,w,E,P,S,T);break;default:L&1?D(d,h,m,v,w,E,P,S,T):L&6?Fe(d,h,m,v,w,E,P,S,T):(L&64||L&128)&&I.process(d,h,m,v,w,E,P,S,T,C)}$!=null&&w&&Is($,d&&d.ref,E,h||d,!h)},N=(d,h,m,v)=>{if(d==null)r(h.el=o(h.children),m,v);else{const w=h.el=d.el;h.children!==d.children&&c(w,h.children)}},b=(d,h,m,v)=>{d==null?r(h.el=l(h.children||""),m,v):h.el=d.el},_=(d,h,m,v)=>{[d.el,d.anchor]=x(d.children,h,m,v,d.el,d.anchor)},O=({el:d,anchor:h},m,v)=>{let w;for(;d&&d!==h;)w=p(d),r(d,m,v),d=w;r(h,m,v)},k=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),i(d),d=m;i(h)},D=(d,h,m,v,w,E,P,S,T)=>{P=P||h.type==="svg",d==null?X(h,m,v,w,E,P,S,T):H(d,h,w,E,P,S,T)},X=(d,h,m,v,w,E,P,S)=>{let T,I;const{type:$,props:L,shapeFlag:j,transition:W,dirs:G}=d;if(T=d.el=a(d.type,E,L&&L.is,L),j&8?u(T,d.children):j&16&&q(d.children,T,null,v,w,E&&$!=="foreignObject",P,S),G&&Kt(d,null,v,"created"),Z(T,d,d.scopeId,P,v),L){for(const ie in L)ie!=="value"&&!Kr(ie)&&s(T,ie,null,L[ie],E,d.children,v,w,xe);"value"in L&&s(T,"value",null,L.value),(I=L.onVnodeBeforeMount)&&Ze(I,v,d)}G&&Kt(d,null,v,"beforeMount");const oe=(!w||w&&!w.pendingBranch)&&W&&!W.persisted;oe&&W.beforeEnter(T),r(T,h,m),((I=L&&L.onVnodeMounted)||oe||G)&&Re(()=>{I&&Ze(I,v,d),oe&&W.enter(T),G&&Kt(d,null,v,"mounted")},w)},Z=(d,h,m,v,w)=>{if(m&&g(d,m),v)for(let E=0;E<v.length;E++)g(d,v[E]);if(w){let E=w.subTree;if(h===E){const P=w.vnode;Z(d,P,P.scopeId,P.slotScopeIds,w.parent)}}},q=(d,h,m,v,w,E,P,S,T=0)=>{for(let I=T;I<d.length;I++){const $=d[I]=S?Ct(d[I]):et(d[I]);A(null,$,h,m,v,w,E,P,S)}},H=(d,h,m,v,w,E,P)=>{const S=h.el=d.el;let{patchFlag:T,dynamicChildren:I,dirs:$}=h;T|=d.patchFlag&16;const L=d.props||de,j=h.props||de;let W;m&&qt(m,!1),(W=j.onVnodeBeforeUpdate)&&Ze(W,m,h,d),$&&Kt(h,d,m,"beforeUpdate"),m&&qt(m,!0);const G=w&&h.type!=="foreignObject";if(I?le(d.dynamicChildren,I,S,m,v,G,E):P||te(d,h,S,null,m,v,G,E,!1),T>0){if(T&16)Ie(S,h,L,j,m,v,w);else if(T&2&&L.class!==j.class&&s(S,"class",null,j.class,w),T&4&&s(S,"style",L.style,j.style,w),T&8){const oe=h.dynamicProps;for(let ie=0;ie<oe.length;ie++){const ge=oe[ie],He=L[ge],dn=j[ge];(dn!==He||ge==="value")&&s(S,ge,He,dn,w,d.children,m,v,xe)}}T&1&&d.children!==h.children&&u(S,h.children)}else!P&&I==null&&Ie(S,h,L,j,m,v,w);((W=j.onVnodeUpdated)||$)&&Re(()=>{W&&Ze(W,m,h,d),$&&Kt(h,d,m,"updated")},v)},le=(d,h,m,v,w,E,P)=>{for(let S=0;S<h.length;S++){const T=d[S],I=h[S],$=T.el&&(T.type===ze||!jn(T,I)||T.shapeFlag&70)?f(T.el):m;A(T,I,$,null,v,w,E,P,!0)}},Ie=(d,h,m,v,w,E,P)=>{if(m!==v){if(m!==de)for(const S in m)!Kr(S)&&!(S in v)&&s(d,S,m[S],null,P,h.children,w,E,xe);for(const S in v){if(Kr(S))continue;const T=v[S],I=m[S];T!==I&&S!=="value"&&s(d,S,I,T,P,h.children,w,E,xe)}"value"in v&&s(d,"value",m.value,v.value)}},Me=(d,h,m,v,w,E,P,S,T)=>{const I=h.el=d?d.el:o(""),$=h.anchor=d?d.anchor:o("");let{patchFlag:L,dynamicChildren:j,slotScopeIds:W}=h;W&&(S=S?S.concat(W):W),d==null?(r(I,m,v),r($,m,v),q(h.children,m,$,w,E,P,S,T)):L>0&&L&64&&j&&d.dynamicChildren?(le(d.dynamicChildren,j,m,w,E,P,S),(h.key!=null||w&&h===w.subTree)&&Dc(d,h,!0)):te(d,h,m,$,w,E,P,S,T)},Fe=(d,h,m,v,w,E,P,S,T)=>{h.slotScopeIds=S,d==null?h.shapeFlag&512?w.ctx.activate(h,m,v,P,T):Vt(h,m,v,w,E,P,T):$e(d,h,T)},Vt=(d,h,m,v,w,E,P)=>{const S=d.component=Sh(d,v,w);if(Ec(d)&&(S.ctx.renderer=C),Ah(S),S.asyncDep){if(w&&w.registerDep(S,ee),!d.el){const T=S.subTree=be(sn);b(null,T,h,m)}return}ee(S,d,h,m,w,E,P)},$e=(d,h,m)=>{const v=h.component=d.component;if(Fd(d,h,m))if(v.asyncDep&&!v.asyncResolved){se(v,h,m);return}else v.next=h,Pd(v.update),v.update();else h.el=d.el,v.vnode=h},ee=(d,h,m,v,w,E,P)=>{const S=()=>{if(d.isMounted){let{next:$,bu:L,u:j,parent:W,vnode:G}=d,oe=$,ie;qt(d,!1),$?($.el=G.el,se(d,$,P)):$=G,L&&Ki(L),(ie=$.props&&$.props.onVnodeBeforeUpdate)&&Ze(ie,W,$,G),qt(d,!0);const ge=qi(d),He=d.subTree;d.subTree=ge,A(He,ge,f(He.el),y(He),d,w,E),$.el=ge.el,oe===null&&$d(d,ge.el),j&&Re(j,w),(ie=$.props&&$.props.onVnodeUpdated)&&Re(()=>Ze(ie,W,$,G),w)}else{let $;const{el:L,props:j}=h,{bm:W,m:G,parent:oe}=d,ie=qr(h);if(qt(d,!1),W&&Ki(W),!ie&&($=j&&j.onVnodeBeforeMount)&&Ze($,oe,h),qt(d,!0),L&&ne){const ge=()=>{d.subTree=qi(d),ne(L,d.subTree,d,w,null)};ie?h.type.__asyncLoader().then(()=>!d.isUnmounted&&ge()):ge()}else{const ge=d.subTree=qi(d);A(null,ge,m,v,d,w,E),h.el=ge.el}if(G&&Re(G,w),!ie&&($=j&&j.onVnodeMounted)){const ge=h;Re(()=>Ze($,oe,ge),w)}(h.shapeFlag&256||oe&&qr(oe.vnode)&&oe.vnode.shapeFlag&256)&&d.a&&Re(d.a,w),d.isMounted=!0,h=m=v=null}},T=d.effect=new ra(S,()=>fa(I),d.scope),I=d.update=()=>T.run();I.id=d.uid,qt(d,!0),I()},se=(d,h,m)=>{h.component=d;const v=d.vnode.props;d.vnode=h,d.next=null,dh(d,h.props,v,m),mh(d,h.children,m),Ln(),no(),Un()},te=(d,h,m,v,w,E,P,S,T=!1)=>{const I=d&&d.children,$=d?d.shapeFlag:0,L=h.children,{patchFlag:j,shapeFlag:W}=h;if(j>0){if(j&128){It(I,L,m,v,w,E,P,S,T);return}else if(j&256){lt(I,L,m,v,w,E,P,S,T);return}}W&8?($&16&&xe(I,w,E),L!==I&&u(m,L)):$&16?W&16?It(I,L,m,v,w,E,P,S,T):xe(I,w,E,!0):($&8&&u(m,""),W&16&&q(L,m,v,w,E,P,S,T))},lt=(d,h,m,v,w,E,P,S,T)=>{d=d||yn,h=h||yn;const I=d.length,$=h.length,L=Math.min(I,$);let j;for(j=0;j<L;j++){const W=h[j]=T?Ct(h[j]):et(h[j]);A(d[j],W,m,null,w,E,P,S,T)}I>$?xe(d,w,E,!0,!1,L):q(h,m,v,w,E,P,S,T,L)},It=(d,h,m,v,w,E,P,S,T)=>{let I=0;const $=h.length;let L=d.length-1,j=$-1;for(;I<=L&&I<=j;){const W=d[I],G=h[I]=T?Ct(h[I]):et(h[I]);if(jn(W,G))A(W,G,m,null,w,E,P,S,T);else break;I++}for(;I<=L&&I<=j;){const W=d[L],G=h[j]=T?Ct(h[j]):et(h[j]);if(jn(W,G))A(W,G,m,null,w,E,P,S,T);else break;L--,j--}if(I>L){if(I<=j){const W=j+1,G=W<$?h[W].el:v;for(;I<=j;)A(null,h[I]=T?Ct(h[I]):et(h[I]),m,G,w,E,P,S,T),I++}}else if(I>j)for(;I<=L;)Pe(d[I],w,E,!0),I++;else{const W=I,G=I,oe=new Map;for(I=G;I<=j;I++){const De=h[I]=T?Ct(h[I]):et(h[I]);De.key!=null&&oe.set(De.key,I)}let ie,ge=0;const He=j-G+1;let dn=!1,Va=0;const $n=new Array(He);for(I=0;I<He;I++)$n[I]=0;for(I=W;I<=L;I++){const De=d[I];if(ge>=He){Pe(De,w,E,!0);continue}let Qe;if(De.key!=null)Qe=oe.get(De.key);else for(ie=G;ie<=j;ie++)if($n[ie-G]===0&&jn(De,h[ie])){Qe=ie;break}Qe===void 0?Pe(De,w,E,!0):($n[Qe-G]=I+1,Qe>=Va?Va=Qe:dn=!0,A(De,h[Qe],m,null,w,E,P,S,T),ge++)}const Ka=dn?bh($n):yn;for(ie=Ka.length-1,I=He-1;I>=0;I--){const De=G+I,Qe=h[De],qa=De+1<$?h[De+1].el:v;$n[I]===0?A(null,Qe,m,qa,w,E,P,S,T):dn&&(ie<0||I!==Ka[ie]?Je(Qe,m,qa,2):ie--)}}},Je=(d,h,m,v,w=null)=>{const{el:E,type:P,transition:S,children:T,shapeFlag:I}=d;if(I&6){Je(d.component.subTree,h,m,v);return}if(I&128){d.suspense.move(h,m,v);return}if(I&64){P.move(d,h,m,C);return}if(P===ze){r(E,h,m);for(let L=0;L<T.length;L++)Je(T[L],h,m,v);r(d.anchor,h,m);return}if(P===Yi){O(d,h,m);return}if(v!==2&&I&1&&S)if(v===0)S.beforeEnter(E),r(E,h,m),Re(()=>S.enter(E),w);else{const{leave:L,delayLeave:j,afterLeave:W}=S,G=()=>r(E,h,m),oe=()=>{L(E,()=>{G(),W&&W()})};j?j(E,G,oe):oe()}else r(E,h,m)},Pe=(d,h,m,v=!1,w=!1)=>{const{type:E,props:P,ref:S,children:T,dynamicChildren:I,shapeFlag:$,patchFlag:L,dirs:j}=d;if(S!=null&&Is(S,null,m,d,!0),$&256){h.ctx.deactivate(d);return}const W=$&1&&j,G=!qr(d);let oe;if(G&&(oe=P&&P.onVnodeBeforeUnmount)&&Ze(oe,h,d),$&6)Tr(d.component,m,v);else{if($&128){d.suspense.unmount(m,v);return}W&&Kt(d,null,h,"beforeUnmount"),$&64?d.type.remove(d,h,m,w,C,v):I&&(E!==ze||L>0&&L&64)?xe(I,h,m,!1,!0):(E===ze&&L&384||!w&&$&16)&&xe(T,h,m),v&&un(d)}(G&&(oe=P&&P.onVnodeUnmounted)||W)&&Re(()=>{oe&&Ze(oe,h,d),W&&Kt(d,null,h,"unmounted")},m)},un=d=>{const{type:h,el:m,anchor:v,transition:w}=d;if(h===ze){fn(m,v);return}if(h===Yi){k(d);return}const E=()=>{i(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:P,delayLeave:S}=w,T=()=>P(m,E);S?S(d.el,E,T):T()}else E()},fn=(d,h)=>{let m;for(;d!==h;)m=p(d),i(d),d=m;i(h)},Tr=(d,h,m)=>{const{bum:v,scope:w,update:E,subTree:P,um:S}=d;v&&Ki(v),w.stop(),E&&(E.active=!1,Pe(P,d,h,m)),S&&Re(S,h),Re(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},xe=(d,h,m,v=!1,w=!1,E=0)=>{for(let P=E;P<d.length;P++)Pe(d[P],h,m,v,w)},y=d=>d.shapeFlag&6?y(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),M=(d,h,m)=>{d==null?h._vnode&&Pe(h._vnode,null,null,!0):A(h._vnode||null,d,h,null,null,null,m),no(),vc(),h._vnode=d},C={p:A,um:Pe,m:Je,r:un,mt:Vt,mc:q,pc:te,pbc:le,n:y,o:e};let F,ne;return t&&([F,ne]=t(C)),{render:M,hydrate:F,createApp:ch(M,F)}}function qt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Dc(e,t,n=!1){const r=e.children,i=t.children;if(z(r)&&z(i))for(let s=0;s<r.length;s++){const a=r[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=Ct(i[s]),o.el=a.el),n||Dc(a,o)),o.type===Pi&&(o.el=a.el)}}function bh(e){const t=e.slice(),n=[0];let r,i,s,a,o;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,e[n[o]]<c?s=o+1:a=o;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}const yh=e=>e.__isTeleport,ze=Symbol.for("v-fgt"),Pi=Symbol.for("v-txt"),sn=Symbol.for("v-cmt"),Yi=Symbol.for("v-stc"),qn=[];let Ve=null;function ke(e=!1){qn.push(Ve=e?null:[])}function _h(){qn.pop(),Ve=qn[qn.length-1]||null}let sr=1;function po(e){sr+=e}function Lc(e){return e.dynamicChildren=sr>0?Ve||yn:null,_h(),sr>0&&Ve&&Ve.push(e),e}function Be(e,t,n,r,i,s){return Lc(B(e,t,n,r,i,s,!0))}function Yr(e,t,n,r,i){return Lc(be(e,t,n,r,i,!0))}function xs(e){return e?e.__v_isVNode===!0:!1}function jn(e,t){return e.type===t.type&&e.key===t.key}const Oi="__vInternal",Uc=({key:e})=>e??null,Xr=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ye(e)||he(e)||K(e)?{i:je,r:e,k:t,f:!!n}:e:null);function B(e,t=null,n=null,r=0,i=null,s=e===ze?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Uc(t),ref:t&&Xr(t),scopeId:Ti,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:je};return o?(ma(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=ye(n)?8:16),sr>0&&!a&&Ve&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Ve.push(l),l}const be=wh;function wh(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===eh)&&(e=sn),xs(e)){const o=Tn(e,t,!0);return n&&ma(o,n),sr>0&&!s&&Ve&&(o.shapeFlag&6?Ve[Ve.indexOf(e)]=o:Ve.push(o)),o.patchFlag|=-2,o}if(Rh(e)&&(e=e.__vccOpts),t){t=Eh(t);let{class:o,style:l}=t;o&&!ye(o)&&(t.class=Y(o)),fe(l)&&(cc(l)&&!z(l)&&(l=Ee({},l)),t.style=ta(l))}const a=ye(e)?1:jd(e)?128:yh(e)?64:fe(e)?4:K(e)?2:0;return B(e,t,n,r,i,a,s,!0)}function Eh(e){return e?cc(e)||Oi in e?Ee({},e):e:null}function Tn(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:a}=e,o=t?Ih(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Uc(o),ref:t&&t.ref?n&&i?z(i)?i.concat(Xr(t)):[i,Xr(t)]:Xr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ze?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Tn(e.ssContent),ssFallback:e.ssFallback&&Tn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Mt(e=" ",t=0){return be(Pi,null,e,t)}function mo(e="",t=!1){return t?(ke(),Yr(sn,null,e)):be(sn,null,e)}function et(e){return e==null||typeof e=="boolean"?be(sn):z(e)?be(ze,null,e.slice()):typeof e=="object"?Ct(e):be(Pi,null,String(e))}function Ct(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Tn(e)}function ma(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),ma(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Oi in t)?t._ctx=je:i===3&&je&&(je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else K(t)?(t={default:t,_ctx:je},n=32):(t=String(t),r&64?(n=16,t=[Mt(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ih(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Y([t.class,r.class]));else if(i==="style")t.style=ta([t.style,r.style]);else if(_i(i)){const s=t[i],a=r[i];a&&s!==a&&!(z(s)&&s.includes(a))&&(t[i]=s?[].concat(s,a):a)}else i!==""&&(t[i]=r[i])}return t}function Ze(e,t,n,r=null){Ge(e,t,7,[n,r])}const xh=Cc();let kh=0;function Sh(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||xh,s={uid:kh++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Gl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Oc(r,i),emitsOptions:yc(r,i),emit:null,emitted:null,propsDefaults:de,inheritAttrs:r.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Nd.bind(null,s),e.ce&&e.ce(s),s}let we=null,ga,hn,go="__VUE_INSTANCE_SETTERS__";(hn=ps()[go])||(hn=ps()[go]=[]),hn.push(e=>we=e),ga=e=>{hn.length>1?hn.forEach(t=>t(e)):hn[0](e)};const Cn=e=>{ga(e),e.scope.on()},nn=()=>{we&&we.scope.off(),ga(null)};function Fc(e){return e.vnode.shapeFlag&4}let ar=!1;function Ah(e,t=!1){ar=t;const{props:n,children:r}=e.vnode,i=Fc(e);fh(e,n,i,t),ph(e,r);const s=i?Th(e,t):void 0;return ar=!1,s}function Th(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ki(new Proxy(e.ctx,nh));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Ph(e):null;Cn(e),Ln();const s=Lt(r,e,0,[e.props,i]);if(Un(),nn(),zl(s)){if(s.then(nn,nn),t)return s.then(a=>{vo(e,a,t)}).catch(a=>{Si(a,e,0)});e.asyncDep=s}else vo(e,s,t)}else $c(e,t)}function vo(e,t,n){K(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=hc(t)),$c(e,n)}let bo;function $c(e,t,n){const r=e.type;if(!e.render){if(!t&&bo&&!r.render){const i=r.template||ha(e).template;if(i){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:o,compilerOptions:l}=r,c=Ee(Ee({isCustomElement:s,delimiters:o},a),l);r.render=bo(i,c)}}e.render=r.render||qe}Cn(e),Ln(),rh(e),Un(),nn()}function Ch(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ne(e,"get","$attrs"),t[n]}}))}function Ph(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Ch(e)},slots:e.slots,emit:e.emit,expose:t}}function va(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(hc(ki(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Kn)return Kn[n](e)},has(t,n){return n in t||n in Kn}}))}function Oh(e,t=!0){return K(e)?e.displayName||e.name:e.name||t&&e.__name}function Rh(e){return K(e)&&"__vccOpts"in e}const ve=(e,t)=>Ad(e,t,ar);function ba(e,t,n){const r=arguments.length;return r===2?fe(t)&&!z(t)?xs(t)?be(e,null,[t]):be(e,t):be(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xs(n)&&(n=[n]),be(e,t,n))}const Nh=Symbol.for("v-scx"),Mh=()=>Ye(Nh),Dh="3.3.4",Lh="http://www.w3.org/2000/svg",Xt=typeof document<"u"?document:null,yo=Xt&&Xt.createElement("template"),Uh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Xt.createElementNS(Lh,e):Xt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>Xt.createTextNode(e),createComment:e=>Xt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const a=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{yo.innerHTML=r?`<svg>${e}</svg>`:e;const o=yo.content;if(r){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Fh(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function $h(e,t,n){const r=e.style,i=ye(n);if(n&&!i){if(t&&!ye(t))for(const s in t)n[s]==null&&ks(r,s,"");for(const s in n)ks(r,s,n[s])}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const _o=/\s*!important$/;function ks(e,t,n){if(z(n))n.forEach(r=>ks(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=jh(e,t);_o.test(n)?e.setProperty(Dn(r),n.replace(_o,""),"important"):e[r]=n}}const wo=["Webkit","Moz","ms"],Xi={};function jh(e,t){const n=Xi[t];if(n)return n;let r=at(t);if(r!=="filter"&&r in e)return Xi[t]=r;r=Ii(r);for(let i=0;i<wo.length;i++){const s=wo[i]+r;if(s in e)return Xi[t]=s}return t}const Eo="http://www.w3.org/1999/xlink";function Bh(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Eo,t.slice(6,t.length)):e.setAttributeNS(Eo,t,n);else{const s=Hf(t);n==null||s&&!Kl(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Hh(e,t,n,r,i,s,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,i,s),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){e._value=n;const c=o==="OPTION"?e.getAttribute("value"):e.value,u=n??"";c!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Kl(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function zh(e,t,n,r){e.addEventListener(t,n,r)}function Wh(e,t,n,r){e.removeEventListener(t,n,r)}function Vh(e,t,n,r,i=null){const s=e._vei||(e._vei={}),a=s[t];if(r&&a)a.value=r;else{const[o,l]=Kh(t);if(r){const c=s[t]=Yh(r,i);zh(e,o,c,l)}else a&&(Wh(e,o,a,l),s[t]=void 0)}}const Io=/(?:Once|Passive|Capture)$/;function Kh(e){let t;if(Io.test(e)){t={};let r;for(;r=e.match(Io);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Dn(e.slice(2)),t]}let Ji=0;const qh=Promise.resolve(),Gh=()=>Ji||(qh.then(()=>Ji=0),Ji=Date.now());function Yh(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ge(Xh(r,n.value),t,5,[r])};return n.value=e,n.attached=Gh(),n}function Xh(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const xo=/^on[a-z]/,Jh=(e,t,n,r,i=!1,s,a,o,l)=>{t==="class"?Fh(e,r,i):t==="style"?$h(e,n,r):_i(t)?Js(t)||Vh(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Qh(e,t,r,i))?Hh(e,t,r,s,a,o,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Bh(e,t,r,i))};function Qh(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&xo.test(t)&&K(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||xo.test(t)&&ye(n)?!1:t in e}const Zh=["ctrl","shift","alt","meta"],ep={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Zh.some(n=>e[`${n}Key`]&&!t.includes(n))},ko=(e,t)=>(n,...r)=>{for(let i=0;i<t.length;i++){const s=ep[t[i]];if(s&&s(n,t))return}return e(n,...r)},tp=Ee({patchProp:Jh},Uh);let So;function np(){return So||(So=gh(tp))}const rp=(...e)=>{const t=np().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=ip(r);if(!i)return;const s=t._component;!K(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function ip(e){return ye(e)?document.querySelector(e):e}var sp=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let jc;const Ri=e=>jc=e,Bc=Symbol();function Ss(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Gn;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Gn||(Gn={}));function ap(){const e=Yl(!0),t=e.run(()=>me({}));let n=[],r=[];const i=ki({install(s){Ri(i),i._a=s,s.provide(Bc,i),s.config.globalProperties.$pinia=i,r.forEach(a=>n.push(a)),r=[]},use(s){return!this._a&&!sp?r.push(s):n.push(s),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return i}const Hc=()=>{};function Ao(e,t,n,r=Hc){e.push(t);const i=()=>{const s=e.indexOf(t);s>-1&&(e.splice(s,1),r())};return!n&&Xl()&&Wf(i),i}function pn(e,...t){e.slice().forEach(n=>{n(...t)})}const op=e=>e();function As(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],i=e[n];Ss(i)&&Ss(r)&&e.hasOwnProperty(n)&&!he(r)&&!pt(r)?e[n]=As(i,r):e[n]=r}return e}const lp=Symbol();function cp(e){return!Ss(e)||!e.hasOwnProperty(lp)}const{assign:Tt}=Object;function up(e){return!!(he(e)&&e.effect)}function fp(e,t,n,r){const{state:i,actions:s,getters:a}=t,o=n.state.value[e];let l;function c(){o||(n.state.value[e]=i?i():{});const u=Ed(n.state.value[e]);return Tt(u,s,Object.keys(a||{}).reduce((f,p)=>(f[p]=ki(ve(()=>{Ri(n);const g=n._s.get(e);return a[p].call(g,g)})),f),{}))}return l=zc(e,c,t,n,r,!0),l}function zc(e,t,n={},r,i,s){let a;const o=Tt({actions:{}},n),l={deep:!0};let c,u,f=[],p=[],g;const x=r.state.value[e];!s&&!x&&(r.state.value[e]={}),me({});let A;function N(q){let H;c=u=!1,typeof q=="function"?(q(r.state.value[e]),H={type:Gn.patchFunction,storeId:e,events:g}):(As(r.state.value[e],q),H={type:Gn.patchObject,payload:q,storeId:e,events:g});const le=A=Symbol();ua().then(()=>{A===le&&(c=!0)}),u=!0,pn(f,H,r.state.value[e])}const b=s?function(){const{state:H}=n,le=H?H():{};this.$patch(Ie=>{Tt(Ie,le)})}:Hc;function _(){a.stop(),f=[],p=[],r._s.delete(e)}function O(q,H){return function(){Ri(r);const le=Array.from(arguments),Ie=[],Me=[];function Fe(ee){Ie.push(ee)}function Vt(ee){Me.push(ee)}pn(p,{args:le,name:q,store:D,after:Fe,onError:Vt});let $e;try{$e=H.apply(this&&this.$id===e?this:D,le)}catch(ee){throw pn(Me,ee),ee}return $e instanceof Promise?$e.then(ee=>(pn(Ie,ee),ee)).catch(ee=>(pn(Me,ee),Promise.reject(ee))):(pn(Ie,$e),$e)}}const k={_p:r,$id:e,$onAction:Ao.bind(null,p),$patch:N,$reset:b,$subscribe(q,H={}){const le=Ao(f,q,H.detached,()=>Ie()),Ie=a.run(()=>tn(()=>r.state.value[e],Me=>{(H.flush==="sync"?u:c)&&q({storeId:e,type:Gn.direct,events:g},Me)},Tt({},l,H)));return le},$dispose:_},D=vr(k);r._s.set(e,D);const X=r._a&&r._a.runWithContext||op,Z=r._e.run(()=>(a=Yl(),X(()=>a.run(t))));for(const q in Z){const H=Z[q];if(he(H)&&!up(H)||pt(H))s||(x&&cp(H)&&(he(H)?H.value=x[q]:As(H,x[q])),r.state.value[e][q]=H);else if(typeof H=="function"){const le=O(q,H);Z[q]=le,o.actions[q]=H}}return Tt(D,Z),Tt(J(D),Z),Object.defineProperty(D,"$state",{get:()=>r.state.value[e],set:q=>{N(H=>{Tt(H,q)})}}),r._p.forEach(q=>{Tt(D,a.run(()=>q({store:D,app:r._a,pinia:r,options:o})))}),x&&s&&n.hydrate&&n.hydrate(D.$state,x),c=!0,u=!0,D}function Wc(e,t,n){let r,i;const s=typeof t=="function";typeof e=="string"?(r=e,i=s?n:t):(i=e,r=e.id);function a(o,l){const c=uh();return o=o||(c?Ye(Bc,null):null),o&&Ri(o),o=jc,o._s.has(r)||(s?zc(r,t,i,o):fp(r,i,o)),o._s.get(r)}return a.$id=r,a}function Ni(e){{e=J(e);const t={};for(const n in e){const r=e[n];(he(r)||pt(r))&&(t[n]=kd(e,n))}return t}}/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const mn=typeof window<"u";function dp(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const re=Object.assign;function Qi(e,t){const n={};for(const r in t){const i=t[r];n[r]=Xe(i)?i.map(e):e(i)}return n}const Yn=()=>{},Xe=Array.isArray,hp=/\/$/,pp=e=>e.replace(hp,"");function Zi(e,t,n="/"){let r,i={},s="",a="";const o=t.indexOf("#");let l=t.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(r=t.slice(0,l),s=t.slice(l+1,o>-1?o:t.length),i=e(s)),o>-1&&(r=r||t.slice(0,o),a=t.slice(o,t.length)),r=bp(r??t,n),{fullPath:r+(s&&"?")+s+a,path:r,query:i,hash:a}}function mp(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function To(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function gp(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Pn(t.matched[r],n.matched[i])&&Vc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Pn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Vc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!vp(e[n],t[n]))return!1;return!0}function vp(e,t){return Xe(e)?Co(e,t):Xe(t)?Co(t,e):e===t}function Co(e,t){return Xe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function bp(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,a,o;for(a=0;a<r.length;a++)if(o=r[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}var or;(function(e){e.pop="pop",e.push="push"})(or||(or={}));var Xn;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Xn||(Xn={}));function yp(e){if(!e)if(mn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),pp(e)}const _p=/^[^#]+#/;function wp(e,t){return e.replace(_p,"#")+t}function Ep(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Mi=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ip(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Ep(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Po(e,t){return(history.state?history.state.position-t:-1)+e}const Ts=new Map;function xp(e,t){Ts.set(e,t)}function kp(e){const t=Ts.get(e);return Ts.delete(e),t}let Sp=()=>location.protocol+"//"+location.host;function Kc(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let o=i.includes(e.slice(s))?e.slice(s).length:1,l=i.slice(o);return l[0]!=="/"&&(l="/"+l),To(l,"")}return To(n,e)+r+i}function Ap(e,t,n,r){let i=[],s=[],a=null;const o=({state:p})=>{const g=Kc(e,location),x=n.value,A=t.value;let N=0;if(p){if(n.value=g,t.value=p,a&&a===x){a=null;return}N=A?p.position-A.position:0}else r(g);i.forEach(b=>{b(n.value,x,{delta:N,type:or.pop,direction:N?N>0?Xn.forward:Xn.back:Xn.unknown})})};function l(){a=n.value}function c(p){i.push(p);const g=()=>{const x=i.indexOf(p);x>-1&&i.splice(x,1)};return s.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(re({},p.state,{scroll:Mi()}),"")}function f(){for(const p of s)p();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Oo(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Mi():null}}function Tp(e){const{history:t,location:n}=window,r={value:Kc(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=e.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:Sp()+e+l;try{t[u?"replaceState":"pushState"](c,"",p),i.value=c}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function a(l,c){const u=re({},t.state,Oo(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});s(l,u,!0),r.value=l}function o(l,c){const u=re({},i.value,t.state,{forward:l,scroll:Mi()});s(u.current,u,!0);const f=re({},Oo(r.value,l,null),{position:u.position+1},c);s(l,f,!1),r.value=l}return{location:r,state:i,push:o,replace:a}}function Cp(e){e=yp(e);const t=Tp(e),n=Ap(e,t.state,t.location,t.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=re({location:"",base:e,go:r,createHref:wp.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Pp(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Cp(e)}function Op(e){return typeof e=="string"||e&&typeof e=="object"}function qc(e){return typeof e=="string"||typeof e=="symbol"}const kt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Gc=Symbol("");var Ro;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ro||(Ro={}));function On(e,t){return re(new Error,{type:e,[Gc]:!0},t)}function ct(e,t){return e instanceof Error&&Gc in e&&(t==null||!!(e.type&t))}const No="[^/]+?",Rp={sensitive:!1,strict:!1,start:!0,end:!0},Np=/[.+*?^${}()[\]/\\]/g;function Mp(e,t){const n=re({},Rp,t),r=[];let i=n.start?"^":"";const s=[];for(const c of e){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let f=0;f<c.length;f++){const p=c[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(i+="/"),i+=p.value.replace(Np,"\\$&"),g+=40;else if(p.type===1){const{value:x,repeatable:A,optional:N,regexp:b}=p;s.push({name:x,repeatable:A,optional:N});const _=b||No;if(_!==No){g+=10;try{new RegExp(`(${_})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${x}" (${_}): `+k.message)}}let O=A?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;f||(O=N&&c.length<2?`(?:/${O})`:"/"+O),N&&(O+="?"),i+=O,g+=20,N&&(g+=-8),A&&(g+=-20),_===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",x=s[p-1];f[x.name]=g&&x.repeatable?g.split("/"):g}return f}function l(c){let u="",f=!1;for(const p of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:x,repeatable:A,optional:N}=g,b=x in c?c[x]:"";if(Xe(b)&&!A)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const _=Xe(b)?b.join("/"):b;if(!_)if(N)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${x}"`);u+=_}}return u||"/"}return{re:a,score:r,keys:s,parse:o,stringify:l}}function Dp(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Lp(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=Dp(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Mo(r))return 1;if(Mo(i))return-1}return i.length-r.length}function Mo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Up={type:0,value:""},Fp=/[a-zA-Z0-9_]/;function $p(e){if(!e)return[[]];if(e==="/")return[[Up]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;o<e.length;){if(l=e[o++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:l==="("?n=2:Fp.test(l)?p():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${c}"`),f(),a(),i}function jp(e,t,n){const r=Mp($p(e.path),n),i=re(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Bp(e,t){const n=[],r=new Map;t=Uo({strict:!1,end:!0,sensitive:!1},t);function i(u){return r.get(u)}function s(u,f,p){const g=!p,x=Hp(u);x.aliasOf=p&&p.record;const A=Uo(t,u),N=[x];if("alias"in u){const O=typeof u.alias=="string"?[u.alias]:u.alias;for(const k of O)N.push(re({},x,{components:p?p.record.components:x.components,path:k,aliasOf:p?p.record:x}))}let b,_;for(const O of N){const{path:k}=O;if(f&&k[0]!=="/"){const D=f.record.path,X=D[D.length-1]==="/"?"":"/";O.path=f.record.path+(k&&X+k)}if(b=jp(O,f,A),p?p.alias.push(b):(_=_||b,_!==b&&_.alias.push(b),g&&u.name&&!Lo(b)&&a(u.name)),x.children){const D=x.children;for(let X=0;X<D.length;X++)s(D[X],b,p&&p.children[X])}p=p||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&l(b)}return _?()=>{a(_)}:Yn}function a(u){if(qc(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return n}function l(u){let f=0;for(;f<n.length&&Lp(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Yc(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Lo(u)&&r.set(u.record.name,u)}function c(u,f){let p,g={},x,A;if("name"in u&&u.name){if(p=r.get(u.name),!p)throw On(1,{location:u});A=p.record.name,g=re(Do(f.params,p.keys.filter(_=>!_.optional).map(_=>_.name)),u.params&&Do(u.params,p.keys.map(_=>_.name))),x=p.stringify(g)}else if("path"in u)x=u.path,p=n.find(_=>_.re.test(x)),p&&(g=p.parse(x),A=p.record.name);else{if(p=f.name?r.get(f.name):n.find(_=>_.re.test(f.path)),!p)throw On(1,{location:u,currentLocation:f});A=p.record.name,g=re({},f.params,u.params),x=p.stringify(g)}const N=[];let b=p;for(;b;)N.unshift(b.record),b=b.parent;return{name:A,path:x,params:g,matched:N,meta:Wp(N)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:i}}function Do(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Hp(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:zp(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function zp(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Lo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Wp(e){return e.reduce((t,n)=>re(t,n.meta),{})}function Uo(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Yc(e,t){return t.children.some(n=>n===e||Yc(e,n))}const Xc=/#/g,Vp=/&/g,Kp=/\//g,qp=/=/g,Gp=/\?/g,Jc=/\+/g,Yp=/%5B/g,Xp=/%5D/g,Qc=/%5E/g,Jp=/%60/g,Zc=/%7B/g,Qp=/%7C/g,eu=/%7D/g,Zp=/%20/g;function ya(e){return encodeURI(""+e).replace(Qp,"|").replace(Yp,"[").replace(Xp,"]")}function em(e){return ya(e).replace(Zc,"{").replace(eu,"}").replace(Qc,"^")}function Cs(e){return ya(e).replace(Jc,"%2B").replace(Zp,"+").replace(Xc,"%23").replace(Vp,"%26").replace(Jp,"`").replace(Zc,"{").replace(eu,"}").replace(Qc,"^")}function tm(e){return Cs(e).replace(qp,"%3D")}function nm(e){return ya(e).replace(Xc,"%23").replace(Gp,"%3F")}function rm(e){return e==null?"":nm(e).replace(Kp,"%2F")}function li(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function im(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Jc," "),a=s.indexOf("="),o=li(a<0?s:s.slice(0,a)),l=a<0?null:li(s.slice(a+1));if(o in t){let c=t[o];Xe(c)||(c=t[o]=[c]),c.push(l)}else t[o]=l}return t}function Fo(e){let t="";for(let n in e){const r=e[n];if(n=tm(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Xe(r)?r.map(s=>s&&Cs(s)):[r&&Cs(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function sm(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Xe(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const am=Symbol(""),$o=Symbol(""),Di=Symbol(""),tu=Symbol(""),Ps=Symbol("");function Bn(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Pt(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,o)=>{const l=f=>{f===!1?o(On(4,{from:n,to:t})):f instanceof Error?o(f):Op(f)?o(On(2,{from:t,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),a())},c=e.call(r&&r.instances[i],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch(f=>o(f))})}function es(e,t,n,r){const i=[];for(const s of e)for(const a in s.components){let o=s.components[a];if(!(t!=="beforeRouteEnter"&&!s.instances[a]))if(om(o)){const c=(o.__vccOpts||o)[t];c&&i.push(Pt(c,n,r,s,a))}else{let l=o();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=dp(c)?c.default:c;s.components[a]=u;const p=(u.__vccOpts||u)[t];return p&&Pt(p,n,r,s,a)()}))}}return i}function om(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function jo(e){const t=Ye(Di),n=Ye(tu),r=ve(()=>t.resolve(Ce(e.to))),i=ve(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const p=f.findIndex(Pn.bind(null,u));if(p>-1)return p;const g=Bo(l[c-2]);return c>1&&Bo(u)===g&&f[f.length-1].path!==g?f.findIndex(Pn.bind(null,l[c-2])):p}),s=ve(()=>i.value>-1&&fm(n.params,r.value.params)),a=ve(()=>i.value>-1&&i.value===n.matched.length-1&&Vc(n.params,r.value.params));function o(l={}){return um(l)?t[Ce(e.replace)?"replace":"push"](Ce(e.to)).catch(Yn):Promise.resolve()}return{route:r,href:ve(()=>r.value.href),isActive:s,isExactActive:a,navigate:o}}const lm=_t({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:jo,setup(e,{slots:t}){const n=vr(jo(e)),{options:r}=Ye(Di),i=ve(()=>({[Ho(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ho(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:ba("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),cm=lm;function um(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function fm(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Xe(i)||i.length!==r.length||r.some((s,a)=>s!==i[a]))return!1}return!0}function Bo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ho=(e,t,n)=>e??t??n,dm=_t({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Ye(Ps),i=ve(()=>e.route||r.value),s=Ye($o,0),a=ve(()=>{let c=Ce(s);const{matched:u}=i.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=ve(()=>i.value.matched[a.value]);Gr($o,ve(()=>a.value+1)),Gr(am,o),Gr(Ps,i);const l=me();return tn(()=>[l.value,o.value,e.name],([c,u,f],[p,g,x])=>{u&&(u.instances[f]=c,g&&g!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!Pn(u,g)||!p)&&(u.enterCallbacks[f]||[]).forEach(A=>A(c))},{flush:"post"}),()=>{const c=i.value,u=e.name,f=o.value,p=f&&f.components[u];if(!p)return zo(n.default,{Component:p,route:c});const g=f.props[u],x=g?g===!0?c.params:typeof g=="function"?g(c):g:null,N=ba(p,re({},x,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return zo(n.default,{Component:N,route:c})||N}}});function zo(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const nu=dm;function hm(e){const t=Bp(e.routes,e),n=e.parseQuery||im,r=e.stringifyQuery||Fo,i=e.history,s=Bn(),a=Bn(),o=Bn(),l=bd(kt);let c=kt;mn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Qi.bind(null,y=>""+y),f=Qi.bind(null,rm),p=Qi.bind(null,li);function g(y,M){let C,F;return qc(y)?(C=t.getRecordMatcher(y),F=M):F=y,t.addRoute(F,C)}function x(y){const M=t.getRecordMatcher(y);M&&t.removeRoute(M)}function A(){return t.getRoutes().map(y=>y.record)}function N(y){return!!t.getRecordMatcher(y)}function b(y,M){if(M=re({},M||l.value),typeof y=="string"){const m=Zi(n,y,M.path),v=t.resolve({path:m.path},M),w=i.createHref(m.fullPath);return re(m,v,{params:p(v.params),hash:li(m.hash),redirectedFrom:void 0,href:w})}let C;if("path"in y)C=re({},y,{path:Zi(n,y.path,M.path).path});else{const m=re({},y.params);for(const v in m)m[v]==null&&delete m[v];C=re({},y,{params:f(m)}),M.params=f(M.params)}const F=t.resolve(C,M),ne=y.hash||"";F.params=u(p(F.params));const d=mp(r,re({},y,{hash:em(ne),path:F.path})),h=i.createHref(d);return re({fullPath:d,hash:ne,query:r===Fo?sm(y.query):y.query||{}},F,{redirectedFrom:void 0,href:h})}function _(y){return typeof y=="string"?Zi(n,y,l.value.path):re({},y)}function O(y,M){if(c!==y)return On(8,{from:M,to:y})}function k(y){return Z(y)}function D(y){return k(re(_(y),{replace:!0}))}function X(y){const M=y.matched[y.matched.length-1];if(M&&M.redirect){const{redirect:C}=M;let F=typeof C=="function"?C(y):C;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=_(F):{path:F},F.params={}),re({query:y.query,hash:y.hash,params:"path"in F?{}:y.params},F)}}function Z(y,M){const C=c=b(y),F=l.value,ne=y.state,d=y.force,h=y.replace===!0,m=X(C);if(m)return Z(re(_(m),{state:typeof m=="object"?re({},ne,m.state):ne,force:d,replace:h}),M||C);const v=C;v.redirectedFrom=M;let w;return!d&&gp(r,F,C)&&(w=On(16,{to:v,from:F}),Je(F,F,!0,!1)),(w?Promise.resolve(w):le(v,F)).catch(E=>ct(E)?ct(E,2)?E:It(E):te(E,v,F)).then(E=>{if(E){if(ct(E,2))return Z(re({replace:h},_(E.to),{state:typeof E.to=="object"?re({},ne,E.to.state):ne,force:d}),M||v)}else E=Me(v,F,!0,h,ne);return Ie(v,F,E),E})}function q(y,M){const C=O(y,M);return C?Promise.reject(C):Promise.resolve()}function H(y){const M=fn.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(y):y()}function le(y,M){let C;const[F,ne,d]=pm(y,M);C=es(F.reverse(),"beforeRouteLeave",y,M);for(const m of F)m.leaveGuards.forEach(v=>{C.push(Pt(v,y,M))});const h=q.bind(null,y,M);return C.push(h),xe(C).then(()=>{C=[];for(const m of s.list())C.push(Pt(m,y,M));return C.push(h),xe(C)}).then(()=>{C=es(ne,"beforeRouteUpdate",y,M);for(const m of ne)m.updateGuards.forEach(v=>{C.push(Pt(v,y,M))});return C.push(h),xe(C)}).then(()=>{C=[];for(const m of d)if(m.beforeEnter)if(Xe(m.beforeEnter))for(const v of m.beforeEnter)C.push(Pt(v,y,M));else C.push(Pt(m.beforeEnter,y,M));return C.push(h),xe(C)}).then(()=>(y.matched.forEach(m=>m.enterCallbacks={}),C=es(d,"beforeRouteEnter",y,M),C.push(h),xe(C))).then(()=>{C=[];for(const m of a.list())C.push(Pt(m,y,M));return C.push(h),xe(C)}).catch(m=>ct(m,8)?m:Promise.reject(m))}function Ie(y,M,C){o.list().forEach(F=>H(()=>F(y,M,C)))}function Me(y,M,C,F,ne){const d=O(y,M);if(d)return d;const h=M===kt,m=mn?history.state:{};C&&(F||h?i.replace(y.fullPath,re({scroll:h&&m&&m.scroll},ne)):i.push(y.fullPath,ne)),l.value=y,Je(y,M,C,h),It()}let Fe;function Vt(){Fe||(Fe=i.listen((y,M,C)=>{if(!Tr.listening)return;const F=b(y),ne=X(F);if(ne){Z(re(ne,{replace:!0}),F).catch(Yn);return}c=F;const d=l.value;mn&&xp(Po(d.fullPath,C.delta),Mi()),le(F,d).catch(h=>ct(h,12)?h:ct(h,2)?(Z(h.to,F).then(m=>{ct(m,20)&&!C.delta&&C.type===or.pop&&i.go(-1,!1)}).catch(Yn),Promise.reject()):(C.delta&&i.go(-C.delta,!1),te(h,F,d))).then(h=>{h=h||Me(F,d,!1),h&&(C.delta&&!ct(h,8)?i.go(-C.delta,!1):C.type===or.pop&&ct(h,20)&&i.go(-1,!1)),Ie(F,d,h)}).catch(Yn)}))}let $e=Bn(),ee=Bn(),se;function te(y,M,C){It(y);const F=ee.list();return F.length?F.forEach(ne=>ne(y,M,C)):console.error(y),Promise.reject(y)}function lt(){return se&&l.value!==kt?Promise.resolve():new Promise((y,M)=>{$e.add([y,M])})}function It(y){return se||(se=!y,Vt(),$e.list().forEach(([M,C])=>y?C(y):M()),$e.reset()),y}function Je(y,M,C,F){const{scrollBehavior:ne}=e;if(!mn||!ne)return Promise.resolve();const d=!C&&kp(Po(y.fullPath,0))||(F||!C)&&history.state&&history.state.scroll||null;return ua().then(()=>ne(y,M,d)).then(h=>h&&Ip(h)).catch(h=>te(h,y,M))}const Pe=y=>i.go(y);let un;const fn=new Set,Tr={currentRoute:l,listening:!0,addRoute:g,removeRoute:x,hasRoute:N,getRoutes:A,resolve:b,options:e,push:k,replace:D,go:Pe,back:()=>Pe(-1),forward:()=>Pe(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:ee.add,isReady:lt,install(y){const M=this;y.component("RouterLink",cm),y.component("RouterView",nu),y.config.globalProperties.$router=M,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Ce(l)}),mn&&!un&&l.value===kt&&(un=!0,k(i.location).catch(ne=>{}));const C={};for(const ne in kt)Object.defineProperty(C,ne,{get:()=>l.value[ne],enumerable:!0});y.provide(Di,M),y.provide(tu,oc(C)),y.provide(Ps,l);const F=y.unmount;fn.add(y),y.unmount=function(){fn.delete(y),fn.size<1&&(c=kt,Fe&&Fe(),Fe=null,l.value=kt,un=!1,se=!1),F()}}};function xe(y){return y.reduce((M,C)=>M.then(()=>H(C)),Promise.resolve())}return Tr}function pm(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const o=t.matched[a];o&&(e.matched.find(c=>Pn(c,o))?r.push(o):n.push(o));const l=e.matched[a];l&&(t.matched.find(c=>Pn(c,l))||i.push(l))}return[n,r,i]}function mm(){return Ye(Di)}/**
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
 */const ru=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},gm=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],o=e[n++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},iu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,o=a?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=s>>2,f=(s&3)<<4|o>>4;let p=(o&15)<<2|c>>6,g=c&63;l||(g=64,a||(p=64)),r.push(n[u],n[f],n[p],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ru(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):gm(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||o==null||c==null||f==null)throw new vm;const p=s<<2|o>>4;if(r.push(p),c!==64){const g=o<<4&240|c>>2;if(r.push(g),f!==64){const x=c<<6&192|f;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class vm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bm=function(e){const t=ru(e);return iu.encodeByteArray(t,!0)},su=function(e){return bm(e).replace(/\./g,"")},au=function(e){try{return iu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ym(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _m=()=>ym().__FIREBASE_DEFAULTS__,wm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Em=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&au(e[1]);return t&&JSON.parse(t)},_a=()=>{try{return _m()||wm()||Em()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Im=e=>{var t,n;return(n=(t=_a())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},ou=()=>{var e;return(e=_a())===null||e===void 0?void 0:e.config},lu=e=>{var t;return(t=_a())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class xm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function km(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function Sm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Am(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Tm(){const e=Ae();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Cm(){try{return typeof indexedDB=="object"}catch{return!1}}function Pm(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const Om="FirebaseError";class zt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Om,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,br.prototype.create)}}class br{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?Rm(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new zt(i,o,r)}}function Rm(e,t){return e.replace(Nm,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Nm=/\{\$([^}]+)}/g;function Mm(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ci(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(Wo(s)&&Wo(a)){if(!ci(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Wo(e){return e!==null&&typeof e=="object"}/**
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
 */function yr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Dm(e,t){const n=new Lm(e,t);return n.subscribe.bind(n)}class Lm{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Um(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=ts),i.error===void 0&&(i.error=ts),i.complete===void 0&&(i.complete=ts);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Um(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ts(){}/**
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
 */function Wt(e){return e&&e._delegate?e._delegate:e}class Rn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Gt="[DEFAULT]";/**
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
 */class Fm{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new xm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jm(t))try{this.getOrInitializeService({instanceIdentifier:Gt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Gt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Gt){return this.instances.has(t)}getOptions(t=Gt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$m(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Gt){return this.component?this.component.multipleInstances?t:Gt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $m(e){return e===Gt?void 0:e}function jm(e){return e.instantiationMode==="EAGER"}/**
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
 */class Bm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Fm(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ae||(ae={}));const Hm={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},zm=ae.INFO,Wm={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Vm=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Wm[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class cu{constructor(t){this.name=t,this._logLevel=zm,this._logHandler=Vm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ae))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Hm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...t),this._logHandler(this,ae.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...t),this._logHandler(this,ae.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...t),this._logHandler(this,ae.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...t),this._logHandler(this,ae.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...t),this._logHandler(this,ae.ERROR,...t)}}const Km=(e,t)=>t.some(n=>e instanceof n);let Vo,Ko;function qm(){return Vo||(Vo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gm(){return Ko||(Ko=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const uu=new WeakMap,Os=new WeakMap,fu=new WeakMap,ns=new WeakMap,wa=new WeakMap;function Ym(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(Ut(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&uu.set(n,e)}).catch(()=>{}),wa.set(t,e),t}function Xm(e){if(Os.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});Os.set(e,t)}let Rs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Os.get(e);if(t==="objectStoreNames")return e.objectStoreNames||fu.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ut(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Jm(e){Rs=e(Rs)}function Qm(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(rs(this),t,...n);return fu.set(r,t.sort?t.sort():[t]),Ut(r)}:Gm().includes(e)?function(...t){return e.apply(rs(this),t),Ut(uu.get(this))}:function(...t){return Ut(e.apply(rs(this),t))}}function Zm(e){return typeof e=="function"?Qm(e):(e instanceof IDBTransaction&&Xm(e),Km(e,qm())?new Proxy(e,Rs):e)}function Ut(e){if(e instanceof IDBRequest)return Ym(e);if(ns.has(e))return ns.get(e);const t=Zm(e);return t!==e&&(ns.set(e,t),wa.set(t,e)),t}const rs=e=>wa.get(e);function eg(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=Ut(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Ut(a.result),l.oldVersion,l.newVersion,Ut(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),o.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),o}const tg=["get","getKey","getAll","getAllKeys","count"],ng=["put","add","delete","clear"],is=new Map;function qo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(is.get(t))return is.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=ng.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tg.includes(n)))return;const s=async function(a,...o){const l=this.transaction(a,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(o.shift())),(await Promise.all([c[n](...o),i&&l.done]))[0]};return is.set(t,s),s}Jm(e=>({...e,get:(t,n,r)=>qo(t,n)||e.get(t,n,r),has:(t,n)=>!!qo(t,n)||e.has(t,n)}));/**
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
 */class rg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ig(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ig(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ns="@firebase/app",Go="0.9.20";/**
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
 */const an=new cu("@firebase/app"),sg="@firebase/app-compat",ag="@firebase/analytics-compat",og="@firebase/analytics",lg="@firebase/app-check-compat",cg="@firebase/app-check",ug="@firebase/auth",fg="@firebase/auth-compat",dg="@firebase/database",hg="@firebase/database-compat",pg="@firebase/functions",mg="@firebase/functions-compat",gg="@firebase/installations",vg="@firebase/installations-compat",bg="@firebase/messaging",yg="@firebase/messaging-compat",_g="@firebase/performance",wg="@firebase/performance-compat",Eg="@firebase/remote-config",Ig="@firebase/remote-config-compat",xg="@firebase/storage",kg="@firebase/storage-compat",Sg="@firebase/firestore",Ag="@firebase/firestore-compat",Tg="firebase",Cg="10.5.0";/**
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
 */const Ms="[DEFAULT]",Pg={[Ns]:"fire-core",[sg]:"fire-core-compat",[og]:"fire-analytics",[ag]:"fire-analytics-compat",[cg]:"fire-app-check",[lg]:"fire-app-check-compat",[ug]:"fire-auth",[fg]:"fire-auth-compat",[dg]:"fire-rtdb",[hg]:"fire-rtdb-compat",[pg]:"fire-fn",[mg]:"fire-fn-compat",[gg]:"fire-iid",[vg]:"fire-iid-compat",[bg]:"fire-fcm",[yg]:"fire-fcm-compat",[_g]:"fire-perf",[wg]:"fire-perf-compat",[Eg]:"fire-rc",[Ig]:"fire-rc-compat",[xg]:"fire-gcs",[kg]:"fire-gcs-compat",[Sg]:"fire-fst",[Ag]:"fire-fst-compat","fire-js":"fire-js",[Tg]:"fire-js-all"};/**
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
 */const ui=new Map,Ds=new Map;function Og(e,t){try{e.container.addComponent(t)}catch(n){an.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function lr(e){const t=e.name;if(Ds.has(t))return an.debug(`There were multiple attempts to register component ${t}.`),!1;Ds.set(t,e);for(const n of ui.values())Og(n,e);return!0}function du(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Rg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ft=new br("app","Firebase",Rg);/**
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
 */class Ng{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const _r=Cg;function hu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ms,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ft.create("bad-app-name",{appName:String(i)});if(n||(n=ou()),!n)throw Ft.create("no-options");const s=ui.get(i);if(s){if(ci(n,s.options)&&ci(r,s.config))return s;throw Ft.create("duplicate-app",{appName:i})}const a=new Bm(i);for(const l of Ds.values())a.addComponent(l);const o=new Ng(n,r,a);return ui.set(i,o),o}function Mg(e=Ms){const t=ui.get(e);if(!t&&e===Ms&&ou())return hu();if(!t)throw Ft.create("no-app",{appName:e});return t}function In(e,t,n){var r;let i=(r=Pg[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${t}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),an.warn(o.join(" "));return}lr(new Rn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Dg="firebase-heartbeat-database",Lg=1,cr="firebase-heartbeat-store";let ss=null;function pu(){return ss||(ss=eg(Dg,Lg,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(cr)}}}).catch(e=>{throw Ft.create("idb-open",{originalErrorMessage:e.message})})),ss}async function Ug(e){try{return await(await pu()).transaction(cr).objectStore(cr).get(mu(e))}catch(t){if(t instanceof zt)an.warn(t.message);else{const n=Ft.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});an.warn(n.message)}}}async function Yo(e,t){try{const r=(await pu()).transaction(cr,"readwrite");await r.objectStore(cr).put(t,mu(e)),await r.done}catch(n){if(n instanceof zt)an.warn(n.message);else{const r=Ft.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});an.warn(r.message)}}}function mu(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Fg=1024,$g=30*24*60*60*1e3;class jg{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Hg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=$g}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xo(),{heartbeatsToSend:n,unsentEntries:r}=Bg(this._heartbeatsCache.heartbeats),i=su(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Xo(){return new Date().toISOString().substring(0,10)}function Bg(e,t=Fg){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Jo(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jo(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Hg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cm()?Pm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ug(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Jo(e){return su(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function zg(e){lr(new Rn("platform-logger",t=>new rg(t),"PRIVATE")),lr(new Rn("heartbeat",t=>new jg(t),"PRIVATE")),In(Ns,Go,e),In(Ns,Go,"esm2017"),In("fire-js","")}zg("");var Wg="firebase",Vg="10.5.0";/**
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
 */In(Wg,Vg,"app");const Kg={apiKey:"AIzaSyD66i1ri0md2o2Ow4RVApaWIjSQdM79RRY",authDomain:"pomofocus-vue3.firebaseapp.com",projectId:"pomofocus-vue3",storageBucket:"pomofocus-vue3.appspot.com",messagingSenderId:"1089476388969",appId:"1:1089476388969:web:c4939d029dadf83304daf8",measurementId:"G-9CL6V1FX1Y"};hu(Kg);function Ea(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function gu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qg=gu,vu=new br("auth","Firebase",gu());/**
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
 */const fi=new cu("@firebase/auth");function Gg(e,...t){fi.logLevel<=ae.WARN&&fi.warn(`Auth (${_r}): ${e}`,...t)}function Jr(e,...t){fi.logLevel<=ae.ERROR&&fi.error(`Auth (${_r}): ${e}`,...t)}/**
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
 */function ot(e,...t){throw Ia(e,...t)}function it(e,...t){return Ia(e,...t)}function bu(e,t,n){const r=Object.assign(Object.assign({},qg()),{[t]:n});return new br("auth","Firebase",r).create(t,{appName:e.name})}function Yg(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&ot(e,"argument-error"),bu(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ia(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return vu.create(e,...t)}function V(e,t,...n){if(!e)throw Ia(t,...n)}function dt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Jr(t),new Error(t)}function gt(e,t){e||dt(t)}/**
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
 */function Ls(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Xg(){return Qo()==="http:"||Qo()==="https:"}function Qo(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function Jg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xg()||Sm()||"connection"in navigator)?navigator.onLine:!0}function Qg(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class wr{constructor(t,n){this.shortDelay=t,this.longDelay=n,gt(n>t,"Short delay should be less than long delay!"),this.isMobile=km()||Am()}get(){return Jg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xa(e,t){gt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class yu{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Zg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ev=new wr(3e4,6e4);function _u(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Er(e,t,n,r,i={}){return wu(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const o=yr(Object.assign({key:e.config.apiKey},a)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),yu.fetch()(Eu(e,e.config.apiHost,n,o),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function wu(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Zg),t);try{const i=new nv(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Dr(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[l,c]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dr(e,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Dr(e,"email-already-in-use",a);if(l==="USER_DISABLED")throw Dr(e,"user-disabled",a);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw bu(e,u,c);ot(e,u)}}catch(i){if(i instanceof zt)throw i;ot(e,"network-request-failed",{message:String(i)})}}async function tv(e,t,n,r,i={}){const s=await Er(e,t,n,r,i);return"mfaPendingCredential"in s&&ot(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Eu(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?xa(e.config,i):`${e.config.apiScheme}://${i}`}class nv{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(it(this.auth,"network-request-failed")),ev.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Dr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=it(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function rv(e,t){return Er(e,"POST","/v1/accounts:delete",t)}async function iv(e,t){return Er(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Jn(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function sv(e,t=!1){const n=Wt(e),r=await n.getIdToken(t),i=ka(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Jn(as(i.auth_time)),issuedAtTime:Jn(as(i.iat)),expirationTime:Jn(as(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function as(e){return Number(e)*1e3}function ka(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return Jr("JWT malformed, contained fewer than 3 sections"),null;try{const i=au(n);return i?JSON.parse(i):(Jr("Failed to decode base64 JWT payload"),null)}catch(i){return Jr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function av(e){const t=ka(e);return V(t,"internal-error"),V(typeof t.exp<"u","internal-error"),V(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function ur(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof zt&&ov(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function ov({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class lv{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Iu{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jn(this.lastLoginAt),this.creationTime=Jn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function di(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ur(e,iv(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?fv(s.providerUserInfo):[],o=uv(e.providerData,a),l=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Iu(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function cv(e){const t=Wt(e);await di(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function uv(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function fv(e){return e.map(t=>{var{providerId:n}=t,r=Ea(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function dv(e,t){const n=await wu(e,{},async()=>{const r=yr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=Eu(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",yu.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){V(t.idToken,"internal-error"),V(typeof t.idToken<"u","internal-error"),V(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):av(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return V(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await dv(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new fr;return r&&(V(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(V(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new fr,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
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
 */function St(e,t){V(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class rn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Ea(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Iu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await ur(this,this.stsTokenManager.getToken(this.auth,t));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return sv(this,t)}reload(){return cv(this)}_assign(t){this!==t&&(V(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new rn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await di(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await ur(this,rv(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,a,o,l,c,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(a=n.photoURL)!==null&&a!==void 0?a:void 0,A=(o=n.tenantId)!==null&&o!==void 0?o:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=n.createdAt)!==null&&c!==void 0?c:void 0,_=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:k,isAnonymous:D,providerData:X,stsTokenManager:Z}=n;V(O&&Z,t,"internal-error");const q=fr.fromJSON(this.name,Z);V(typeof O=="string",t,"internal-error"),St(f,t.name),St(p,t.name),V(typeof k=="boolean",t,"internal-error"),V(typeof D=="boolean",t,"internal-error"),St(g,t.name),St(x,t.name),St(A,t.name),St(N,t.name),St(b,t.name),St(_,t.name);const H=new rn({uid:O,auth:t,email:p,emailVerified:k,displayName:f,isAnonymous:D,photoURL:x,phoneNumber:g,tenantId:A,stsTokenManager:q,createdAt:b,lastLoginAt:_});return X&&Array.isArray(X)&&(H.providerData=X.map(le=>Object.assign({},le))),N&&(H._redirectEventId=N),H}static async _fromIdTokenResponse(t,n,r=!1){const i=new fr;i.updateFromServerResponse(n);const s=new rn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await di(s),s}}/**
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
 */const Zo=new Map;function ht(e){gt(e instanceof Function,"Expected a class definition");let t=Zo.get(e);return t?(gt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Zo.set(e,t),t)}/**
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
 */class xu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}xu.type="NONE";const el=xu;/**
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
 */function Qr(e,t,n){return`firebase:${e}:${t}:${n}`}class xn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Qr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?rn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new xn(ht(el),t,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||ht(el);const a=Qr(r,t.config.apiKey,t.name);let o=null;for(const c of n)try{const u=await c._get(a);if(u){const f=rn._fromJSON(t,u);c!==s&&(o=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new xn(s,t,r):(s=l[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(a)}catch{}})),new xn(s,t,r))}}/**
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
 */function tl(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Au(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ku(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Cu(t))return"Blackberry";if(Pu(t))return"Webos";if(Sa(t))return"Safari";if((t.includes("chrome/")||Su(t))&&!t.includes("edge/"))return"Chrome";if(Tu(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ku(e=Ae()){return/firefox\//i.test(e)}function Sa(e=Ae()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Su(e=Ae()){return/crios\//i.test(e)}function Au(e=Ae()){return/iemobile/i.test(e)}function Tu(e=Ae()){return/android/i.test(e)}function Cu(e=Ae()){return/blackberry/i.test(e)}function Pu(e=Ae()){return/webos/i.test(e)}function Li(e=Ae()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function hv(e=Ae()){var t;return Li(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function pv(){return Tm()&&document.documentMode===10}function Ou(e=Ae()){return Li(e)||Tu(e)||Pu(e)||Cu(e)||/windows phone/i.test(e)||Au(e)}function mv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ru(e,t=[]){let n;switch(e){case"Browser":n=tl(Ae());break;case"Worker":n=`${tl(Ae())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${_r}/${r}`}/**
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
 */class gv{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,o)=>{try{const l=t(s);a(l)}catch(l){o(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function vv(e,t={}){return Er(e,"GET","/v2/passwordPolicy",_u(e,t))}/**
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
 */const bv=6;class yv{constructor(t){var n,r,i,s;const a=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:bv,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,a,o;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(o=l.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class _v{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nl(this),this.idTokenSubscription=new nl(this),this.beforeStateQueue=new gv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ht(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!a||a===o)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await di(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Qg()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Wt(t):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&V(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await vv(this),n=new yv(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new br("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ht(t)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await xn.create(this,[ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(V(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{a=!0,l()}}else{const l=t.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ru(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Gg(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ui(e){return Wt(e)}class nl{constructor(t){this.auth=t,this.observer=null,this.addObserver=Dm(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function wv(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Ev(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=it("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",wv().appendChild(r)})}function Iv(e){return`__${e}${Math.floor(Math.random()*1e6)}`}/**
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
 */function xv(e,t){const n=du(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ci(s,t??{}))return i;ot(i,"already-initialized")}return n.initialize({options:t})}function kv(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ht);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Sv(e,t,n){const r=Ui(e);V(r._canInitEmulator,r,"emulator-config-failed"),V(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Nu(t),{host:a,port:o}=Av(t),l=o===null?"":`:${o}`;r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Tv()}function Nu(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Av(e){const t=Nu(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:rl(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:rl(a)}}}function rl(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Tv(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
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
 */class Mu{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return dt("not implemented")}_getIdTokenResponse(t){return dt("not implemented")}_linkToIdToken(t,n){return dt("not implemented")}_getReauthenticationResolver(t){return dt("not implemented")}}/**
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
 */async function kn(e,t){return tv(e,"POST","/v1/accounts:signInWithIdp",_u(e,t))}/**
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
 */const Cv="http://localhost";class on extends Mu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new on(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Ea(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new on(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return kn(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,kn(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,kn(t,n)}buildRequest(){const t={requestUri:Cv,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=yr(n)}return t}}/**
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
 */class Ot extends Ir{constructor(){super("facebook.com")}static credential(t){return on._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ot.credentialFromTaggedObject(t)}static credentialFromError(t){return Ot.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ot.credential(t.oauthAccessToken)}catch{return null}}}Ot.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ot.PROVIDER_ID="facebook.com";/**
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
 */class nt extends Ir{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return on._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return nt.credentialFromTaggedObject(t)}static credentialFromError(t){return nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return nt.credential(n,r)}catch{return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com";nt.PROVIDER_ID="google.com";/**
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
 */class Rt extends Ir{constructor(){super("github.com")}static credential(t){return on._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Rt.credential(t.oauthAccessToken)}catch{return null}}}Rt.GITHUB_SIGN_IN_METHOD="github.com";Rt.PROVIDER_ID="github.com";/**
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
 */class Nt extends Ir{constructor(){super("twitter.com")}static credential(t,n){return on._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Nt.credentialFromTaggedObject(t)}static credentialFromError(t){return Nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Nt.credential(n,r)}catch{return null}}}Nt.TWITTER_SIGN_IN_METHOD="twitter.com";Nt.PROVIDER_ID="twitter.com";/**
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
 */class Nn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await rn._fromIdTokenResponse(t,r,i),a=il(r);return new Nn({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=il(r);return new Nn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function il(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class hi extends zt{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hi.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new hi(t,n,r,i)}}function Du(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hi._fromErrorAndOperation(e,s,t,r):s})}async function Pv(e,t,n=!1){const r=await ur(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Nn._forOperation(e,"link",r)}/**
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
 */async function Ov(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await ur(e,Du(r,i,t,e),n);V(s.idToken,r,"internal-error");const a=ka(s.idToken);V(a,r,"internal-error");const{sub:o}=a;return V(e.uid===o,r,"user-mismatch"),Nn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ot(r,"user-mismatch"),s}}/**
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
 */async function Rv(e,t,n=!1){const r="signIn",i=await Du(e,r,t),s=await Nn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function Nv(e,t,n,r){return Wt(e).onIdTokenChanged(t,n,r)}function Mv(e,t,n){return Wt(e).beforeAuthStateChanged(t,n)}function Lu(e,t,n,r){return Wt(e).onAuthStateChanged(t,n,r)}function Dv(e){return Wt(e).signOut()}const pi="__sak";/**
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
 */class Uu{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pi,"1"),this.storage.removeItem(pi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Lv(){const e=Ae();return Sa(e)||Li(e)}const Uv=1e3,Fv=10;class Fu extends Uu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Lv()&&mv(),this.fallbackToPolling=Ou(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);pv()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Fv):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Uv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Fu.type="LOCAL";const $v=Fu;/**
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
 */class $u extends Uu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}$u.type="SESSION";const ju=$u;/**
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
 */function jv(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Fi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Fi(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async c=>c(n.origin,s)),l=await jv(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fi.receivers=[];/**
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
 */class Bv{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,l)=>{const c=Ta("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(p.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:c,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function st(){return window}function Hv(e){st().location.href=e}/**
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
 */function Bu(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function zv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wv(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Vv(){return Bu()?self:null}/**
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
 */const Hu="firebaseLocalStorageDb",Kv=1,mi="firebaseLocalStorage",zu="fbase_key";class xr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $i(e,t){return e.transaction([mi],t?"readwrite":"readonly").objectStore(mi)}function qv(){const e=indexedDB.deleteDatabase(Hu);return new xr(e).toPromise()}function Us(){const e=indexedDB.open(Hu,Kv);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(mi,{keyPath:zu})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(mi)?t(r):(r.close(),await qv(),t(await Us()))})})}async function sl(e,t,n){const r=$i(e,!0).put({[zu]:t,value:n});return new xr(r).toPromise()}async function Gv(e,t){const n=$i(e,!1).get(t),r=await new xr(n).toPromise();return r===void 0?null:r.value}function al(e,t){const n=$i(e,!0).delete(t);return new xr(n).toPromise()}const Yv=800,Xv=3;class Wu{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Us(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Xv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fi._getInstance(Vv()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await zv(),!this.activeServiceWorker)return;this.sender=new Bv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Wv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Us();return await sl(t,pi,"1"),await al(t,pi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>sl(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Gv(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>al(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=$i(i,!1).getAll();return new xr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wu.type="LOCAL";const Jv=Wu;new wr(3e4,6e4);/**
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
 */function Vu(e,t){return t?ht(t):(V(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Ca extends Mu{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return kn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return kn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return kn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Qv(e){return Rv(e.auth,new Ca(e),e.bypassAuthState)}function Zv(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),Ov(n,new Ca(e),e.bypassAuthState)}async function eb(e){const{auth:t,user:n}=e;return V(n,t,"internal-error"),Pv(n,new Ca(e),e.bypassAuthState)}/**
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
 */class Ku{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=t;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Qv;case"linkViaPopup":case"linkViaRedirect":return eb;case"reauthViaPopup":case"reauthViaRedirect":return Zv;default:ot(this.auth,"internal-error")}}resolve(t){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tb=new wr(2e3,1e4);async function qu(e,t,n){const r=Ui(e);Yg(e,t,Aa);const i=Vu(r,n);return new Jt(r,"signInViaPopup",t,i).executeNotNull()}class Jt extends Ku{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Jt.currentPopupAction&&Jt.currentPopupAction.cancel(),Jt.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return V(t,this.auth,"internal-error"),t}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const t=Ta();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jt.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,tb.get())};t()}}Jt.currentPopupAction=null;/**
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
 */const nb="pendingRedirect",Zr=new Map;class rb extends Ku{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Zr.get(this.auth._key());if(!t){try{const r=await ib(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Zr.set(this.auth._key(),t)}return this.bypassAuthState||Zr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ib(e,t){const n=ob(t),r=ab(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function sb(e,t){Zr.set(e._key(),t)}function ab(e){return ht(e._redirectPersistence)}function ob(e){return Qr(nb,e.config.apiKey,e.name)}async function lb(e,t,n=!1){const r=Ui(e),i=Vu(r,t),a=await new rb(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
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
 */const cb=10*60*1e3;class ub{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!fb(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Gu(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(it(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=cb&&this.cachedEventUids.clear(),this.cachedEventUids.has(ol(t))}saveEventToCache(t){this.cachedEventUids.add(ol(t)),this.lastProcessedEventTime=Date.now()}}function ol(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Gu({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function fb(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Gu(e);default:return!1}}/**
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
 */async function db(e,t={}){return Er(e,"GET","/v1/projects",t)}/**
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
 */const hb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pb=/^https?/;async function mb(e){if(e.config.emulator)return;const{authorizedDomains:t}=await db(e);for(const n of t)try{if(gb(n))return}catch{}ot(e,"unauthorized-domain")}function gb(e){const t=Ls(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!pb.test(n))return!1;if(hb.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const vb=new wr(3e4,6e4);function ll(){const e=st().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function bb(e){return new Promise((t,n)=>{var r,i,s;function a(){ll(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ll(),n(it(e,"network-request-failed"))},timeout:vb.get()})}if(!((i=(r=st().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=st().gapi)===null||s===void 0)&&s.load)a();else{const o=Iv("iframefcb");return st()[o]=()=>{gapi.load?a():n(it(e,"network-request-failed"))},Ev(`https://apis.google.com/js/api.js?onload=${o}`).catch(l=>n(l))}}).catch(t=>{throw ei=null,t})}let ei=null;function yb(e){return ei=ei||bb(e),ei}/**
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
 */const _b=new wr(5e3,15e3),wb="__/auth/iframe",Eb="emulator/auth/iframe",Ib={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kb(e){const t=e.config;V(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?xa(t,Eb):`https://${e.config.authDomain}/${wb}`,r={apiKey:t.apiKey,appName:e.name,v:_r},i=xb.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${yr(r).slice(1)}`}async function Sb(e){const t=await yb(e),n=st().gapi;return V(n,e,"internal-error"),t.open({where:document.body,url:kb(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ib,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=it(e,"network-request-failed"),o=st().setTimeout(()=>{s(a)},_b.get());function l(){st().clearTimeout(o),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
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
 */const Ab={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tb=500,Cb=600,Pb="_blank",Ob="http://localhost";class cl{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Rb(e,t,n,r=Tb,i=Cb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l=Object.assign(Object.assign({},Ab),{width:r.toString(),height:i.toString(),top:s,left:a}),c=Ae().toLowerCase();n&&(o=Su(c)?Pb:n),ku(c)&&(t=t||Ob,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[g,x])=>`${p}${g}=${x},`,"");if(hv(c)&&o!=="_self")return Nb(t||"",o),new cl(null);const f=window.open(t||"",o,u);V(f,e,"popup-blocked");try{f.focus()}catch{}return new cl(f)}function Nb(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Mb="__/auth/handler",Db="emulator/auth/handler",Lb=encodeURIComponent("fac");async function ul(e,t,n,r,i,s){V(e.config.authDomain,e,"auth-domain-config-required"),V(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:_r,eventId:i};if(t instanceof Aa){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",Mm(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries(s||{}))a[u]=f}if(t instanceof Ir){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(a.scopes=u.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const u of Object.keys(o))o[u]===void 0&&delete o[u];const l=await e._getAppCheckToken(),c=l?`#${Lb}=${encodeURIComponent(l)}`:"";return`${Ub(e)}?${yr(o).slice(1)}${c}`}function Ub({config:e}){return e.emulator?xa(e,Db):`https://${e.authDomain}/${Mb}`}/**
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
 */const os="webStorageSupport";class Fb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ju,this._completeRedirectFn=lb,this._overrideRedirectResult=sb}async _openPopup(t,n,r,i){var s;gt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await ul(t,n,r,Ls(),i);return Rb(t,a,Ta())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await ul(t,n,r,Ls(),i);return Hv(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(gt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Sb(t),r=new ub(t);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(os,{type:os},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[os];a!==void 0&&n(!!a),ot(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mb(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ou()||Sa()||Li()}}const $b=Fb;var fl="@firebase/auth",dl="1.3.0";/**
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
 */class jb{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Bb(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Hb(e){lr(new Rn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;V(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ru(e)},c=new _v(r,i,s,l);return kv(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),lr(new Rn("auth-internal",t=>{const n=Ui(t.getProvider("auth").getImmediate());return(r=>new jb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(fl,dl,Bb(e)),In(fl,dl,"esm2017")}/**
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
 */const zb=5*60,Wb=lu("authIdTokenMaxAge")||zb;let hl=null;const Vb=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Wb)return;const i=n==null?void 0:n.token;hl!==i&&(hl=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Pa(e=Mg()){const t=du(e,"auth");if(t.isInitialized())return t.getImmediate();const n=xv(e,{popupRedirectResolver:$b,persistence:[Jv,$v,ju]}),r=lu("authTokenSyncURL");if(r){const s=Vb(r);Mv(n,s,()=>s(n.currentUser)),Nv(n,a=>s(a))}const i=Im("auth");return i&&Sv(n,`http://${i}`),n}Hb("Browser");const ls=Pa(),Kb=new nt,Yu=Wc("user",()=>{const e=me(!1),t=me(""),n=me(""),r=me("");function i(){Lu(ls,o=>{if(o){e.value=!0;return}e.value=!1})}function s(){Dv(ls).then(o=>{console.log(o),e.value=!1}).catch(o=>{console.log(o)})}function a(){console.log("登入"),qu(ls,Kb).then(o=>{console.log("幹"),console.log(o),e.value=!0}).catch(o=>{console.log(o)})}return{checkIsLogin:i,signOutWithGoogle:s,signInWithGoogle:a,userName:t,userEmail:n,isLogin:e,userPhotoUrl:r}}),qb=e=>(Md("data-v-f81e4041"),e=e(),Dd(),e),Gb={class:"flex justify-between h-20 w-[97%] mb-[30px]"},Yb={class:"leading-loose contrast-20 w-[100px] text-center"},Xb={class:"animate-fadeIn flex items-center gap-2 max-md:hidden"},Jb={class:"flex"},Qb=qb(()=>B("div",{class:"menu-btn__burger w-[45px] h-[6px] bg-primary rounded-[2px] shadow-burger transition duration-500 ease-in-out"},null,-1)),Zb=[Qb],e0=_t({__name:"NavHeader",setup(e){const t=Yu(),{isLogin:n}=Ni(t),r=me(!1),i=me([{id:"item01",name:"analysis"},{id:"item02",name:"setting"},{id:"item03",name:"login"}]),s=()=>{r.value=!r.value};return xc(()=>{t.checkIsLogin()}),(a,o)=>{const l=Sc("RouterLink");return ke(),Be("header",Gb,[B("h1",Yb,[be(l,{to:"/",class:"animate-letterMove whitespace-nowrap"},{default:zn(()=>[Mt("Pomofocus")]),_:1})]),B("nav",Xb,[B("ul",Jb,[(ke(!0),Be(ze,null,Ac(i.value,c=>(ke(),Be("li",{key:c.id,class:"leading-loose ml-5 min-h-full transition-transform transition-shadow duration-300 hover:translate-y-[2px] active:translate-y-[5px]"},[c.name.toLowerCase()==="login"?(ke(),Yr(l,{key:0,to:"/login",class:"text-base max-w-prose nav-item"},{default:zn(()=>[Mt(wn(c.name),1)]),_:2},1024)):c.name.toLowerCase()!=="analysis"?(ke(),Yr(l,{key:1,to:`/${c.name.toLowerCase()}`,class:"text-base max-w-prose nav-item"},{default:zn(()=>[Mt(wn(c.name),1)]),_:2},1032,["to"])):Ce(n)&&c.name.toLowerCase()==="analysis"?(ke(),Yr(l,{key:2,to:"/",class:"text-base max-w-prose nav-item"},{default:zn(()=>[Mt(wn(c.name),1)]),_:2},1024)):mo("",!0)]))),128))]),Ce(n)?(ke(),Be("button",{key:0,onClick:o[0]||(o[0]=(...c)=>Ce(t).signOutWithGoogle&&Ce(t).signOutWithGoogle(...c)),class:"leading-[1.3] ml-5 text-base max-w-prose nav-item"},"Sign Out")):mo("",!0)]),B("div",{class:Y([{active:r.value},"md:hidden menu-btn relative flex justify-center items-center w-[80px] h-[80px] cursor-pointer transition duration-500 ease-in-out"]),onClick:s},Zb,2)])}}});const ji=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},t0=ji(e0,[["__scopeId","data-v-f81e4041"]]),n0={class:"xl:max-w-1200 lg:max-w-1000 md:max-w-600 w-[90vw] mx-auto my-0 h-screen"},r0=_t({__name:"App",setup(e){return(t,n)=>(ke(),Be("main",n0,[be(t0),be(Ce(nu))]))}}),i0={class:"box relative overflow-hidden h-[350px] bg-custom-gray rounded-[8px] mt-10 flex justify-center items-center flex-wrap"},s0={class:"form absolute top-[4px] right-[4px] bottom-[4px] left-[4px] z-[2] bg-gray-800 flex-col flex overflow-hidden"},a0={class:"text-9xl w-full text-center mt-[40px]"},o0={class:"relative block w-full h-full"},l0=_t({__name:"NormalTimer",props:{isActive:{type:Boolean},mode:{},remainingTime:{}},emits:["handleTimeCountDown"],setup(e,{emit:t}){const n=()=>{t("handleTimeCountDown",e.isActive,e.mode)};return(r,i)=>(ke(),Be("div",i0,[B("div",s0,[B("p",a0,wn(r.remainingTime),1),B("button",{onClick:n,class:"btn w-[100px] relative inline-block text-light text-base font-medium border-none py-[10xp] px-[25px] m-auto leading-10 shadow-activeButton transition-all duration-300 ease-in hover:bg-transparent"},[B("span",o0,wn(r.isActive?"Pause":"Start"),1)])])]))}});const c0=ji(l0,[["__scopeId","data-v-ab9271d4"]]);var Xu=(e=>(e.pomodoro="pomodoro",e.longbreak="longbreak",e.shortbreak="shortbreak",e))(Xu||{});const Ju=Wc("timer",()=>{const e=me(Xu.pomodoro),t=me(!1);function n(){t.value=!t.value}function r(){t.value=!1}function i(){t.value=!0}return{mode:e,isActive:t,changeActiveStatus:n,onStop:r,onStart:i}});function Lr(e){if(e<0)return"00:00";const t=Math.floor(e/(1e3*60*60)),n=Math.floor(e%(1e3*60*60)/(1e3*60));if(t>0||n>=60)return"59:59";const r=Math.floor(e%(1e3*60)/1e3);return`${n<10?"0"+n:n}:${r<10?"0"+r:r}`}function pl(){const e=Ju(),{isActive:t,...n}=Ni(e),r=me(25*60*1e3),i=me("25:00");let s=null;const a=ve(()=>r.value);function o(){s&&(clearInterval(s),s=null)}function l(c){switch(_d(c)){case"Pomodoro":r.value=25*60*1e3,i.value=Lr(r.value);break;case"Long Break":r.value=15*60*1e3,i.value=Lr(r.value);break;case"Short Break":r.value=5*60*1e3,i.value=Lr(r.value);break;default:console.log("未定義的狀態！");break}}return tn(t,()=>{t.value?s=setInterval(()=>{r.value=a.value-1e3,i.value=r.value<=0?"timeup":Lr(r.value)},1e3):(r.value=a.value,o())}),da(()=>{o()}),{remainingTime:i,switchMode:l}}const u0={class:"flex w-full h-full"},f0={class:"w-[600px] h-[350px] bg-black m-auto rounded-[8px]"},d0={class:"w-auto flex space-x-3 text-center text-xl cursor-pointer rounded-default justify-center items-center gap-6 menu"},h0=["onClick"],p0=_t({__name:"CountdownTimer",setup(e){const t=Ju(),{isActive:n,mode:r,...i}=Ni(t),{switchMode:s,remainingTime:a}=pl(),o=me("Pomodoro"),l=me([{id:1,title:"Pomodoro",time:"25:00"},{id:2,title:"Short Break",time:"05:00"},{id:3,title:"Long Break",time:"15:00"}]),c=f=>{o.value=f,t.onStop(),s(f)},u=()=>{pl(),t.changeActiveStatus()};return(f,p)=>(ke(),Be("section",u0,[B("article",f0,[B("ul",d0,[(ke(!0),Be(ze,null,Ac(l.value,g=>(ke(),Be("li",{onClick:x=>c(g.title),class:Y([{"tab-active":o.value===g.title},"block item h-auto hover:text-cyan-500 border-transparent border-b-2 hover:border-b-cyan-500 hover:transition duration-500"]),key:g.id},wn(g.title),11,h0))),128))]),be(c0,{isActive:Ce(n),mode:Ce(r),remainingTime:Ce(a),onHandleTimeCountDown:u,class:"overflow-hidden"},null,8,["isActive","mode","remainingTime"])])]))}});const m0=ji(p0,[["__scopeId","data-v-28579b72"]]),g0={class:"w-full"},v0=_t({__name:"HomeView",setup(e){return(t,n)=>(ke(),Be("main",g0,[be(m0)]))}}),b0={class:"flex justify-center items-center"},y0={class:"form-box login absolute top-0 w-[50%] h-[100%] flex flex-col justify-center left-0 pt-0 pr-[60px] pb-0 pl-[40px] duration-700"},_0={class:Y(["info-text","login","absolute","top-0","w-[50%]","h-full","right-0","flex","flex-col","justify-center","text-right","pt-0","pr-[40px]","pb-[60px]","pl-[150px]"])},w0=_t({__name:"LoginPage",setup(e){const t=mm(),n=Pa(),r=new nt,i=Yu(),{isLogin:s}=Ni(i),a=me(!1),o=me(!1),l=me(!1),c=me(!1),u=me(!1),f=()=>{a.value=!0},p=k=>{const D=k.target;a.value=!!D.value},g=()=>{o.value=!0},x=k=>{const D=k.target;o.value=!!D.value},A=()=>{l.value=!0},N=k=>{const D=k.target;l.value=!!D.value},b=()=>{c.value=!1,u.value=!0},_=()=>{u.value=!1},O=()=>{qu(n,r).then(k=>{console.log("幹"),console.log(k),s.value=!0,t.push("/")}).catch(k=>{console.log(k)})};return(k,D)=>{const X=Sc("font-awesome-icon");return ke(),Be("main",b0,[B("div",{class:Y([c.value?"active translate-x-0 opacity-100 filter blur-0":"","wrapper relative w-[750px] h-[450px] bg-transparent border-2 border-primary rounded shadow-custom-cyan overflow-hidden"])},[B("span",{class:Y([u.value?"!rotate-[0deg] !skew-y-[0deg] delay-500":"!delay-1600","duration-1000 ease-linear bg-animate absolute top-[-4px] right-0 w-[850px] h-[600px] bg-gradient-to-r from-[#081b29] to-[#0ef] rotate-[10deg] skew-y-[40deg] origin-bottom-right border-b-[3px] border-primary"])},null,2),B("span",{class:Y([u.value?"!-rotate-[11deg] !-skew-y-[41deg] delay-1000":"!delay-500","duration-1000 ease-linear bg-animate2 absolute top-full left-[250px] w-[850px] h-[700px] bg-black rotate-[11deg] skew-y-[41deg] origin-bottom-left border-t-[3px] border-primary"])},null,2),B("div",y0,[B("h2",{class:Y(["text-3xl text-white text-center ease-linear duration-700",u.value?"animation ease-linear duration-700 -translate-x-[120%] opacity-0 filter blur-[10px] delay-0":"!delay-2100"])},"Login",2),B("form",{onSubmit:D[0]||(D[0]=ko(()=>{},["prevent"]))},[B("div",{class:Y([u.value?"animation ease-linear duration-700 -translate-x-[120%] delay-100 opacity-0 filter blur-[10px]":"!delay-2200","ease-linear duration-700 input-box relative w-full h-[50px] my-[25px] mx-0"])},[B("input",{type:"text",required:"",class:Y(["w-full","h-full","bg-transparent","outline-none","border-b-2","border-b-white","duration-500","focus:border-b-primary","text-white","p-[10px]"]),onFocus:f,onBlur:p},null,32),B("label",{class:Y(["absolute top-[50%] left-0 text-base text-white transform -translate-y-1/2 pointer-events-none duration-500",a.value?"!-top-[5px] !text-primary":""])}," Username ",2)],2),B("div",{class:Y([u.value?"animation ease-linear duration-700 -translate-x-[120%] delay-200 opacity-0 filter blur-[10px]":"!delay-2300","ease-linear duration-700 input-box relative w-full h-[50px] my-[25px] mx-0"])},[B("input",{type:"password",required:"",class:Y(["w-full","h-full","bg-transparent","outline-none","border-b-2","border-b-white","duration-500","focus:border-b-primary","text-white","p-[10px]"]),onFocus:g,onBlur:x},null,32),B("label",{class:Y(["absolute top-[50%] left-0 text-base text-white transform -translate-y-1/2 pointer-events-none duration-500",o.value?"!-top-[5px] !text-primary":""])}," Password ",2)],2),B("button",{type:"submit",class:Y([u.value?"animation ease-linear duration-700 -translate-x-[120%] delay-300 opacity-0 filter blur-[10px]":"!delay-2400","ease-linear duration-700 btn relative w-full h-[45px] border-2 border-white outline-none rounded-[40px] cursor-pointer text-base text-white font-semibold shadow-neon after:content after:top-0 after:left-0 after:right-0 after:bottom-0 after:bg-primary after:shadow-neon after:opacity-0 hover:after:!opacity-100"])}," Login ",2),B("hr",{class:Y([u.value?"animation ease-linear duration-700 -translate-x-[120%] delay-300 opacity-0 filter blur-[10px]":"!delay-2400","ease-linear duration-700 border-dashed mt-5 filter-[10px]"])},null,2),B("button",{onClick:O,class:Y([u.value?"animation ease-linear duration-700 -translate-x-[120%] delay-300 opacity-0 filter blur-[10px]":"!delay-2400","ease-linear duration-700 mt-5 border-2 border-white outline-none rounded-[40px] w-full h-[40px] hover:shadow-neon"])},[be(X,{icon:["fab","google"],class:"mr-4"}),Mt(" Login With Google ")],2),B("div",{class:Y([u.value?"animation ease-linear duration-700 -translate-x-[120%] delay-550 opacity-0 filter blur-[10px]":"!delay-2500","ease-linear duration-700 logreg-link text-[14.5px] text-white text-center mt-5"])},[B("p",null,[Mt(" Don't have an account? "),B("a",{onClick:b,class:Y(["ml-3","register-link","text-primary","decoration-[none]","font-semibold","hover:underline","cursor-pointer"])}," Sign Up ")])],2)],32)]),B("div",_0,[B("h2",{class:Y([u.value?"animation ease-linear duration-700 translate-x-[120%] delay-550 opacity-0 filter blur-[10px]":"!delay-2000","duration-700","ease-linear","text-[36px]","text-white","leading-snug","uppercase"])}," Welcome Back! ",2),B("p",{class:Y([u.value?"animation ease-linear duration-700 translate-x-[120%] delay-550 opacity-0 filter blur-[10px]":"!delay-2100","duration-700","ease-linear","text-[16px]","text-white"])}," You can login using your email or a third-party service. ",2)]),B("div",{class:Y([u.value?"!translate-x-0":"",u.value?"!opacity-100":"",u.value?"!filter":"",u.value?"!blur-0":"",u.value?"!pointer-events-auto":"","form-box","register","absolute","top-0","w-[50%]","h-[100%]","flex","flex-col","justify-center","right-0","pt-0","pr-[40px]","pb-0","pl-[60px]","translate-x-[120%]","opacity-0","filter","blur-[10px]","duration-700","pointer-events-none"])},[B("h2",{class:Y([u.value?"!translate-x-0":"",u.value?"!opacity-100":"",u.value?"!filter":"",u.value?"!blur-0":"",u.value?"delay-1700":"!delay-0","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","text-3xl","text-white","text-center"])}," Sign Up ",2),B("form",{onSubmit:D[1]||(D[1]=ko(()=>{},["prevent"]))},[B("div",{class:Y([u.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-1900":"!delay-200","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","input-box","relative","w-full","h-[50px]","my-[25px]","mx-0"])},[B("input",{type:"email",required:"",class:Y(["w-full","h-full","bg-transparent","outline-none","border-b-2","border-b-white","duration-500","focus:border-b-primary","text-white","p-[10px]"]),onFocus:A,onBlur:N},null,32),B("label",{class:Y(["absolute","top-[50%]","left-0","text-base","text-white","transform","-translate-y-1/2","pointer-events-none","duration-500",l.value?"!-top-[5px] !text-primary":""])}," Email ",2)],2),B("div",{class:Y([u.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-2000":"!delay-300","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","input-box","relative","w-full","h-[50px]","my-[25px]","mx-0"])},[B("input",{type:"password",required:"",class:Y(["w-full","h-full","bg-transparent","outline-none","border-b-2","border-b-white","duration-500","focus:border-b-primary","text-white","p-[10px]"]),onFocus:g,onBlur:x},null,32),B("label",{class:Y(["absolute","top-[50%]","left-0","text-base","text-white","transform","-translate-y-1/2","pointer-events-none","duration-500",o.value?"!-top-[5px] !text-primary":""])}," Password ",2)],2),B("button",{type:"submit",class:Y([u.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-2100":"!delay-400","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","btn","relative","w-full","h-[45px]","border-2","border-white","outline-none","rounded-[40px]","cursor-pointer","text-base","text-white","font-semibold","shadow-neon","after:content","after:top-0","after:left-0","after:right-0","after:bottom-0","after:bg-primary","after:shadow-neon","after:opacity-0","hover:after:!opacity-100"])}," Sign Up ",2),B("div",{class:Y([u.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-2200":"!delay-500","opacity-0","filter","blur-[10px]","duration-700","translate-x-[120%]","logreg-link","text-[14.5px]","text-white","text-center","mt-5"])},[B("p",null,[Mt(" Already have an account? "),B("a",{onClick:_,class:"ml-3 register-link text-primary decoration-[none font-semibold] hover:underline cursor-pointer"},"Login")])],2)],32)],2),B("div",{class:Y([u.value?"!translate-x-0 !opacity-100 !filter !blur-0 !pointer-events-auto":"","info-text","register","-translate-x-[120%]","absolute","top-0","w-[50%]","h-full","left-0","flex","flex-col","justify-center","text-left","pt-0","pr-[150px]","pb-[60px]","pl-[40px]","pointer-events-none","duration-700","ease-linear","opacity-0","filter","blur-[10px]"])},[B("h2",{class:Y([u.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-1700":"!delay-0","opacity-0","filter","blur-[10px]","duration-700","ease-linear","-translate-x-[120%]","text-[36px]","text-white","leading-snug","uppercase"])}," Welcome on board! ",2),B("p",{class:Y([u.value?"!translate-x-0 !opacity-100 !filter !blur-0 delay-1800":"!delay-100","opacity-0","filter","blur-[10px]","duration-700","ease-linear","-translate-x-[120%]","text-[16px]","text-white"])}," You can register using your email or a third-party service. ",2)],2)],2)])}}}),E0={},I0={class:"flex justify-center items-center"};function x0(e,t){return ke(),Be("main",I0," 努力趕工中，尚無數據可以呈現。 ")}const k0=ji(E0,[["render",x0]]),Qu=hm({history:Pp("/pomofocus-vue3/"),routes:[{path:"/",name:"home",component:v0},{path:"/login",name:"login",component:w0},{path:"/analysis",name:"analysis",component:k0,meta:{requiresAuth:!0}}]}),S0=()=>new Promise((e,t)=>{const n=Lu(Pa(),r=>{n(),e(r)},t)});Qu.beforeEach(async(e,t,n)=>{e.matched.some(r=>r.meta.requiresAuth)?await S0()?n():n("/login"):n()});function ml(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ml(Object(n),!0).forEach(function(r){_e(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ml(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function gi(e){"@babel/helpers - typeof";return gi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gi(e)}function A0(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function gl(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T0(e,t,n){return t&&gl(e.prototype,t),n&&gl(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Oa(e,t){return P0(e)||R0(e,t)||Zu(e,t)||M0()}function kr(e){return C0(e)||O0(e)||Zu(e)||N0()}function C0(e){if(Array.isArray(e))return Fs(e)}function P0(e){if(Array.isArray(e))return e}function O0(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function R0(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,a,o;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(l){s=!0,o=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw o}}return r}}function Zu(e,t){if(e){if(typeof e=="string")return Fs(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fs(e,t)}}function Fs(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function N0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function M0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var vl=function(){},Ra={},ef={},tf=null,nf={mark:vl,measure:vl};try{typeof window<"u"&&(Ra=window),typeof document<"u"&&(ef=document),typeof MutationObserver<"u"&&(tf=MutationObserver),typeof performance<"u"&&(nf=performance)}catch{}var D0=Ra.navigator||{},bl=D0.userAgent,yl=bl===void 0?"":bl,jt=Ra,ue=ef,_l=tf,Ur=nf;jt.document;var Et=!!ue.documentElement&&!!ue.head&&typeof ue.addEventListener=="function"&&typeof ue.createElement=="function",rf=~yl.indexOf("MSIE")||~yl.indexOf("Trident/"),Fr,$r,jr,Br,Hr,vt="___FONT_AWESOME___",$s=16,sf="fa",af="svg-inline--fa",ln="data-fa-i2svg",js="data-fa-pseudo-element",L0="data-fa-pseudo-element-pending",Na="data-prefix",Ma="data-icon",wl="fontawesome-i2svg",U0="async",F0=["HTML","HEAD","STYLE","SCRIPT"],of=function(){try{return!0}catch{return!1}}(),ce="classic",pe="sharp",Da=[ce,pe];function Sr(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ce]}})}var dr=Sr((Fr={},_e(Fr,ce,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),_e(Fr,pe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Fr)),hr=Sr(($r={},_e($r,ce,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),_e($r,pe,{solid:"fass",regular:"fasr",light:"fasl"}),$r)),pr=Sr((jr={},_e(jr,ce,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),_e(jr,pe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),jr)),$0=Sr((Br={},_e(Br,ce,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),_e(Br,pe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Br)),j0=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,lf="fa-layers-text",B0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,H0=Sr((Hr={},_e(Hr,ce,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),_e(Hr,pe,{900:"fass",400:"fasr",300:"fasl"}),Hr)),cf=[1,2,3,4,5,6,7,8,9,10],z0=cf.concat([11,12,13,14,15,16,17,18,19,20]),W0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Qt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mr=new Set;Object.keys(hr[ce]).map(mr.add.bind(mr));Object.keys(hr[pe]).map(mr.add.bind(mr));var V0=[].concat(Da,kr(mr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Qt.GROUP,Qt.SWAP_OPACITY,Qt.PRIMARY,Qt.SECONDARY]).concat(cf.map(function(e){return"".concat(e,"x")})).concat(z0.map(function(e){return"w-".concat(e)})),Qn=jt.FontAwesomeConfig||{};function K0(e){var t=ue.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function q0(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(ue&&typeof ue.querySelector=="function"){var G0=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];G0.forEach(function(e){var t=Oa(e,2),n=t[0],r=t[1],i=q0(K0(n));i!=null&&(Qn[r]=i)})}var uf={styleDefault:"solid",familyDefault:"classic",cssPrefix:sf,replacementClass:af,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Qn.familyPrefix&&(Qn.cssPrefix=Qn.familyPrefix);var Mn=R(R({},uf),Qn);Mn.autoReplaceSvg||(Mn.observeMutations=!1);var U={};Object.keys(uf).forEach(function(e){Object.defineProperty(U,e,{enumerable:!0,set:function(n){Mn[e]=n,Zn.forEach(function(r){return r(U)})},get:function(){return Mn[e]}})});Object.defineProperty(U,"familyPrefix",{enumerable:!0,set:function(t){Mn.cssPrefix=t,Zn.forEach(function(n){return n(U)})},get:function(){return Mn.cssPrefix}});jt.FontAwesomeConfig=U;var Zn=[];function Y0(e){return Zn.push(e),function(){Zn.splice(Zn.indexOf(e),1)}}var At=$s,rt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function X0(e){if(!(!e||!Et)){var t=ue.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=ue.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=s)}return ue.head.insertBefore(t,r),e}}var J0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function gr(){for(var e=12,t="";e-- >0;)t+=J0[Math.random()*62|0];return t}function Fn(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function La(e){return e.classList?Fn(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ff(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Q0(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ff(e[n]),'" ')},"").trim()}function Bi(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ua(e){return e.size!==rt.size||e.x!==rt.x||e.y!==rt.y||e.rotate!==rt.rotate||e.flipX||e.flipY}function Z0(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(s," ").concat(a," ").concat(o)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:c}}function ey(e){var t=e.transform,n=e.width,r=n===void 0?$s:n,i=e.height,s=i===void 0?$s:i,a=e.startCentered,o=a===void 0?!1:a,l="";return o&&rf?l+="translate(".concat(t.x/At-r/2,"em, ").concat(t.y/At-s/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/At,"em), calc(-50% + ").concat(t.y/At,"em)) "):l+="translate(".concat(t.x/At,"em, ").concat(t.y/At,"em) "),l+="scale(".concat(t.size/At*(t.flipX?-1:1),", ").concat(t.size/At*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var ty=`:root, :host {
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
}`;function df(){var e=sf,t=af,n=U.cssPrefix,r=U.replacementClass,i=ty;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(o,".".concat(r))}return i}var El=!1;function cs(){U.autoAddCss&&!El&&(X0(df()),El=!0)}var ny={mixout:function(){return{dom:{css:df,insertCss:cs}}},hooks:function(){return{beforeDOMElementCreation:function(){cs()},beforeI2svg:function(){cs()}}}},bt=jt||{};bt[vt]||(bt[vt]={});bt[vt].styles||(bt[vt].styles={});bt[vt].hooks||(bt[vt].hooks={});bt[vt].shims||(bt[vt].shims=[]);var Ke=bt[vt],hf=[],ry=function e(){ue.removeEventListener("DOMContentLoaded",e),vi=1,hf.map(function(t){return t()})},vi=!1;Et&&(vi=(ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ue.readyState),vi||ue.addEventListener("DOMContentLoaded",ry));function iy(e){Et&&(vi?setTimeout(e,0):hf.push(e))}function Ar(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?ff(e):"<".concat(t," ").concat(Q0(r),">").concat(s.map(Ar).join(""),"</").concat(t,">")}function Il(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var sy=function(t,n){return function(r,i,s,a){return t.call(n,r,i,s,a)}},us=function(t,n,r,i){var s=Object.keys(t),a=s.length,o=i!==void 0?sy(n,i):n,l,c,u;for(r===void 0?(l=1,u=t[s[0]]):(l=0,u=r);l<a;l++)c=s[l],u=o(u,t[c],c,t);return u};function ay(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Bs(e){var t=ay(e);return t.length===1?t[0].toString(16):null}function oy(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function xl(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Hs(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=xl(t);typeof Ke.hooks.addPack=="function"&&!i?Ke.hooks.addPack(e,xl(t)):Ke.styles[e]=R(R({},Ke.styles[e]||{}),s),e==="fas"&&Hs("fa",t)}var zr,Wr,Vr,vn=Ke.styles,ly=Ke.shims,cy=(zr={},_e(zr,ce,Object.values(pr[ce])),_e(zr,pe,Object.values(pr[pe])),zr),Fa=null,pf={},mf={},gf={},vf={},bf={},uy=(Wr={},_e(Wr,ce,Object.keys(dr[ce])),_e(Wr,pe,Object.keys(dr[pe])),Wr);function fy(e){return~V0.indexOf(e)}function dy(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!fy(i)?i:null}var yf=function(){var t=function(s){return us(vn,function(a,o,l){return a[l]=us(o,s,{}),a},{})};pf=t(function(i,s,a){if(s[3]&&(i[s[3]]=a),s[2]){var o=s[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){i[l.toString(16)]=a})}return i}),mf=t(function(i,s,a){if(i[a]=a,s[2]){var o=s[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){i[l]=a})}return i}),bf=t(function(i,s,a){var o=s[2];return i[a]=a,o.forEach(function(l){i[l]=a}),i});var n="far"in vn||U.autoFetchSvg,r=us(ly,function(i,s){var a=s[0],o=s[1],l=s[2];return o==="far"&&!n&&(o="fas"),typeof a=="string"&&(i.names[a]={prefix:o,iconName:l}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:o,iconName:l}),i},{names:{},unicodes:{}});gf=r.names,vf=r.unicodes,Fa=Hi(U.styleDefault,{family:U.familyDefault})};Y0(function(e){Fa=Hi(e.styleDefault,{family:U.familyDefault})});yf();function $a(e,t){return(pf[e]||{})[t]}function hy(e,t){return(mf[e]||{})[t]}function Zt(e,t){return(bf[e]||{})[t]}function _f(e){return gf[e]||{prefix:null,iconName:null}}function py(e){var t=vf[e],n=$a("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Bt(){return Fa}var ja=function(){return{prefix:null,iconName:null,rest:[]}};function Hi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ce:n,i=dr[r][e],s=hr[r][e]||hr[r][i],a=e in Ke.styles?e:null;return s||a||null}var kl=(Vr={},_e(Vr,ce,Object.keys(pr[ce])),_e(Vr,pe,Object.keys(pr[pe])),Vr);function zi(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},_e(t,ce,"".concat(U.cssPrefix,"-").concat(ce)),_e(t,pe,"".concat(U.cssPrefix,"-").concat(pe)),t),a=null,o=ce;(e.includes(s[ce])||e.some(function(c){return kl[ce].includes(c)}))&&(o=ce),(e.includes(s[pe])||e.some(function(c){return kl[pe].includes(c)}))&&(o=pe);var l=e.reduce(function(c,u){var f=dy(U.cssPrefix,u);if(vn[u]?(u=cy[o].includes(u)?$0[o][u]:u,a=u,c.prefix=u):uy[o].indexOf(u)>-1?(a=u,c.prefix=Hi(u,{family:o})):f?c.iconName=f:u!==U.replacementClass&&u!==s[ce]&&u!==s[pe]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var p=a==="fa"?_f(c.iconName):{},g=Zt(c.prefix,c.iconName);p.prefix&&(a=null),c.iconName=p.iconName||g||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!vn.far&&vn.fas&&!U.autoFetchSvg&&(c.prefix="fas")}return c},ja());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===pe&&(vn.fass||U.autoFetchSvg)&&(l.prefix="fass",l.iconName=Zt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||a==="fa")&&(l.prefix=Bt()||"fas"),l}var my=function(){function e(){A0(this,e),this.definitions={}}return T0(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){n.definitions[o]=R(R({},n.definitions[o]||{}),a[o]),Hs(o,a[o]);var l=pr[ce][o];l&&Hs(l,a[o]),yf()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var a=i[s],o=a.prefix,l=a.iconName,c=a.icon,u=c[2];n[o]||(n[o]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[o][f]=c)}),n[o][l]=c}),n}}]),e}(),Sl=[],bn={},Sn={},gy=Object.keys(Sn);function vy(e,t){var n=t.mixoutsTo;return Sl=e,bn={},Object.keys(Sn).forEach(function(r){gy.indexOf(r)===-1&&delete Sn[r]}),Sl.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),gi(i[a])==="object"&&Object.keys(i[a]).forEach(function(o){n[a]||(n[a]={}),n[a][o]=i[a][o]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(a){bn[a]||(bn[a]=[]),bn[a].push(s[a])})}r.provides&&r.provides(Sn)}),n}function zs(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=bn[e]||[];return s.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function cn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=bn[e]||[];i.forEach(function(s){s.apply(null,n)})}function yt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Sn[e]?Sn[e].apply(null,t):void 0}function Ws(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Bt();if(t)return t=Zt(n,t)||t,Il(wf.definitions,n,t)||Il(Ke.styles,n,t)}var wf=new my,by=function(){U.autoReplaceSvg=!1,U.observeMutations=!1,cn("noAuto")},yy={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Et?(cn("beforeI2svg",t),yt("pseudoElements2svg",t),yt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;U.autoReplaceSvg===!1&&(U.autoReplaceSvg=!0),U.observeMutations=!0,iy(function(){wy({autoReplaceSvgRoot:n}),cn("watch",t)})}},_y={icon:function(t){if(t===null)return null;if(gi(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Zt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Hi(t[0]);return{prefix:r,iconName:Zt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(U.cssPrefix,"-"))>-1||t.match(j0))){var i=zi(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Bt(),iconName:Zt(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=Bt();return{prefix:s,iconName:Zt(s,t)||t}}}},Ue={noAuto:by,config:U,dom:yy,parse:_y,library:wf,findIconDefinition:Ws,toHtml:Ar},wy=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?ue:n;(Object.keys(Ke.styles).length>0||U.autoFetchSvg)&&Et&&U.autoReplaceSvg&&Ue.dom.i2svg({node:r})};function Wi(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ar(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Et){var r=ue.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Ey(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,a=e.transform;if(Ua(a)&&n.found&&!r.found){var o=n.width,l=n.height,c={x:o/l/2,y:.5};i.style=Bi(R(R({},s),{},{"transform-origin":"".concat(c.x+a.x/16,"em ").concat(c.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Iy(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,a=s===!0?"".concat(t,"-").concat(U.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:R(R({},i),{},{id:a}),children:r}]}]}function Ba(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,a=e.transform,o=e.symbol,l=e.title,c=e.maskId,u=e.titleId,f=e.extra,p=e.watchable,g=p===void 0?!1:p,x=r.found?r:n,A=x.width,N=x.height,b=i==="fak",_=[U.replacementClass,s?"".concat(U.cssPrefix,"-").concat(s):""].filter(function(H){return f.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(f.classes).join(" "),O={children:[],attributes:R(R({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:_,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(N)})},k=b&&!~f.classes.indexOf("fa-fw")?{width:"".concat(A/N*16*.0625,"em")}:{};g&&(O.attributes[ln]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(u||gr())},children:[l]}),delete O.attributes.title);var D=R(R({},O),{},{prefix:i,iconName:s,main:n,mask:r,maskId:c,transform:a,symbol:o,styles:R(R({},k),f.styles)}),X=r.found&&n.found?yt("generateAbstractMask",D)||{children:[],attributes:{}}:yt("generateAbstractIcon",D)||{children:[],attributes:{}},Z=X.children,q=X.attributes;return D.children=Z,D.attributes=q,o?Iy(D):Ey(D)}function Al(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,a=e.extra,o=e.watchable,l=o===void 0?!1:o,c=R(R(R({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});l&&(c[ln]="");var u=R({},a.styles);Ua(i)&&(u.transform=ey({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=Bi(u);f.length>0&&(c.style=f);var p=[];return p.push({tag:"span",attributes:c,children:[t]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function xy(e){var t=e.content,n=e.title,r=e.extra,i=R(R(R({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Bi(r.styles);s.length>0&&(i.style=s);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var fs=Ke.styles;function Vs(e){var t=e[0],n=e[1],r=e.slice(4),i=Oa(r,1),s=i[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(U.cssPrefix,"-").concat(Qt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(Qt.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(Qt.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:a}}var ky={found:!1,width:512,height:512};function Sy(e,t){!of&&!U.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ks(e,t){var n=t;return t==="fa"&&U.styleDefault!==null&&(t=Bt()),new Promise(function(r,i){if(yt("missingIconAbstract"),n==="fa"){var s=_f(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&fs[t]&&fs[t][e]){var a=fs[t][e];return r(Vs(a))}Sy(e,t),r(R(R({},ky),{},{icon:U.showMissingIcons&&e?yt("missingIconAbstract")||{}:{}}))})}var Tl=function(){},qs=U.measurePerformance&&Ur&&Ur.mark&&Ur.measure?Ur:{mark:Tl,measure:Tl},Vn='FA "6.4.2"',Ay=function(t){return qs.mark("".concat(Vn," ").concat(t," begins")),function(){return Ef(t)}},Ef=function(t){qs.mark("".concat(Vn," ").concat(t," ends")),qs.measure("".concat(Vn," ").concat(t),"".concat(Vn," ").concat(t," begins"),"".concat(Vn," ").concat(t," ends"))},Ha={begin:Ay,end:Ef},ti=function(){};function Cl(e){var t=e.getAttribute?e.getAttribute(ln):null;return typeof t=="string"}function Ty(e){var t=e.getAttribute?e.getAttribute(Na):null,n=e.getAttribute?e.getAttribute(Ma):null;return t&&n}function Cy(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(U.replacementClass)}function Py(){if(U.autoReplaceSvg===!0)return ni.replace;var e=ni[U.autoReplaceSvg];return e||ni.replace}function Oy(e){return ue.createElementNS("http://www.w3.org/2000/svg",e)}function Ry(e){return ue.createElement(e)}function If(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Oy:Ry:n;if(typeof e=="string")return ue.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var s=e.children||[];return s.forEach(function(a){i.appendChild(If(a,{ceFn:r}))}),i}function Ny(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ni={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(If(i),n)}),n.getAttribute(ln)===null&&U.keepOriginalSource){var r=ue.createComment(Ny(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~La(n).indexOf(U.replacementClass))return ni.replace(t);var i=new RegExp("".concat(U.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(o,l){return l===U.replacementClass||l.match(i)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var a=r.map(function(o){return Ar(o)}).join(`
`);n.setAttribute(ln,""),n.innerHTML=a}};function Pl(e){e()}function xf(e,t){var n=typeof t=="function"?t:ti;if(e.length===0)n();else{var r=Pl;U.mutateApproach===U0&&(r=jt.requestAnimationFrame||Pl),r(function(){var i=Py(),s=Ha.begin("mutate");e.map(i),s(),n()})}}var za=!1;function kf(){za=!0}function Gs(){za=!1}var bi=null;function Ol(e){if(_l&&U.observeMutations){var t=e.treeCallback,n=t===void 0?ti:t,r=e.nodeCallback,i=r===void 0?ti:r,s=e.pseudoElementsCallback,a=s===void 0?ti:s,o=e.observeMutationsRoot,l=o===void 0?ue:o;bi=new _l(function(c){if(!za){var u=Bt();Fn(c).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Cl(f.addedNodes[0])&&(U.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&U.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&Cl(f.target)&&~W0.indexOf(f.attributeName))if(f.attributeName==="class"&&Ty(f.target)){var p=zi(La(f.target)),g=p.prefix,x=p.iconName;f.target.setAttribute(Na,g||u),x&&f.target.setAttribute(Ma,x)}else Cy(f.target)&&i(f.target)})}}),Et&&bi.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function My(){bi&&bi.disconnect()}function Dy(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(r[a]=o.join(":").trim()),r},{})),n}function Ly(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=zi(La(e));return i.prefix||(i.prefix=Bt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=hy(i.prefix,e.innerText)||$a(i.prefix,Bs(e.innerText))),!i.iconName&&U.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Uy(e){var t=Fn(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return U.autoA11y&&(n?t["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(r||gr()):(t["aria-hidden"]="true",t.focusable="false")),t}function Fy(){return{iconName:null,title:null,titleId:null,prefix:null,transform:rt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Rl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ly(e),r=n.iconName,i=n.prefix,s=n.rest,a=Uy(e),o=zs("parseNodeAttributes",{},e),l=t.styleParser?Dy(e):[];return R({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:rt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:a}},o)}var $y=Ke.styles;function Sf(e){var t=U.autoReplaceSvg==="nest"?Rl(e,{styleParser:!1}):Rl(e);return~t.extra.classes.indexOf(lf)?yt("generateLayersText",e,t):yt("generateSvgReplacementMutation",e,t)}var Ht=new Set;Da.map(function(e){Ht.add("fa-".concat(e))});Object.keys(dr[ce]).map(Ht.add.bind(Ht));Object.keys(dr[pe]).map(Ht.add.bind(Ht));Ht=kr(Ht);function Nl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Et)return Promise.resolve();var n=ue.documentElement.classList,r=function(f){return n.add("".concat(wl,"-").concat(f))},i=function(f){return n.remove("".concat(wl,"-").concat(f))},s=U.autoFetchSvg?Ht:Da.map(function(u){return"fa-".concat(u)}).concat(Object.keys($y));s.includes("fa")||s.push("fa");var a=[".".concat(lf,":not([").concat(ln,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(ln,"])")})).join(", ");if(a.length===0)return Promise.resolve();var o=[];try{o=Fn(e.querySelectorAll(a))}catch{}if(o.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ha.begin("onTree"),c=o.reduce(function(u,f){try{var p=Sf(f);p&&u.push(p)}catch(g){of||g.name==="MissingIcon"&&console.error(g)}return u},[]);return new Promise(function(u,f){Promise.all(c).then(function(p){xf(p,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(p){l(),f(p)})})}function jy(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Sf(e).then(function(n){n&&xf([n],t)})}function By(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ws(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Ws(i||{})),e(r,R(R({},n),{},{mask:i}))}}var Hy=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?rt:r,s=n.symbol,a=s===void 0?!1:s,o=n.mask,l=o===void 0?null:o,c=n.maskId,u=c===void 0?null:c,f=n.title,p=f===void 0?null:f,g=n.titleId,x=g===void 0?null:g,A=n.classes,N=A===void 0?[]:A,b=n.attributes,_=b===void 0?{}:b,O=n.styles,k=O===void 0?{}:O;if(t){var D=t.prefix,X=t.iconName,Z=t.icon;return Wi(R({type:"icon"},t),function(){return cn("beforeDOMElementCreation",{iconDefinition:t,params:n}),U.autoA11y&&(p?_["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(x||gr()):(_["aria-hidden"]="true",_.focusable="false")),Ba({icons:{main:Vs(Z),mask:l?Vs(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:D,iconName:X,transform:R(R({},rt),i),symbol:a,title:p,maskId:u,titleId:x,extra:{attributes:_,styles:k,classes:N}})})}},zy={mixout:function(){return{icon:By(Hy)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Nl,n.nodeCallback=jy,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?ue:r,s=n.callback,a=s===void 0?function(){}:s;return Nl(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,a=r.titleId,o=r.prefix,l=r.transform,c=r.symbol,u=r.mask,f=r.maskId,p=r.extra;return new Promise(function(g,x){Promise.all([Ks(i,o),u.iconName?Ks(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var N=Oa(A,2),b=N[0],_=N[1];g([n,Ba({icons:{main:b,mask:_},prefix:o,iconName:i,transform:l,symbol:c,maskId:f,title:s,titleId:a,extra:p,watchable:!0})])}).catch(x)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.transform,o=n.styles,l=Bi(o);l.length>0&&(i.style=l);var c;return Ua(a)&&(c=yt("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),r.push(c||s.icon),{children:r,attributes:i}}}},Wy={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Wi({type:"layer"},function(){cn("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(o){Array.isArray(o)?o.map(function(l){a=a.concat(l.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(U.cssPrefix,"-layers")].concat(kr(s)).join(" ")},children:a}]})}}}},Vy={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,a=r.classes,o=a===void 0?[]:a,l=r.attributes,c=l===void 0?{}:l,u=r.styles,f=u===void 0?{}:u;return Wi({type:"counter",content:n},function(){return cn("beforeDOMElementCreation",{content:n,params:r}),xy({content:n.toString(),title:s,extra:{attributes:c,styles:f,classes:["".concat(U.cssPrefix,"-layers-counter")].concat(kr(o))}})})}}}},Ky={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?rt:i,a=r.title,o=a===void 0?null:a,l=r.classes,c=l===void 0?[]:l,u=r.attributes,f=u===void 0?{}:u,p=r.styles,g=p===void 0?{}:p;return Wi({type:"text",content:n},function(){return cn("beforeDOMElementCreation",{content:n,params:r}),Al({content:n,transform:R(R({},rt),s),title:o,extra:{attributes:f,styles:g,classes:["".concat(U.cssPrefix,"-layers-text")].concat(kr(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,a=r.extra,o=null,l=null;if(rf){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/c,l=u.height/c}return U.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,Al({content:n.innerHTML,width:o,height:l,transform:s,title:i,extra:a,watchable:!0})])}}},qy=new RegExp('"',"ug"),Ml=[1105920,1112319];function Gy(e){var t=e.replace(qy,""),n=oy(t,0),r=n>=Ml[0]&&n<=Ml[1],i=t.length===2?t[0]===t[1]:!1;return{value:Bs(i?t[0]:t),isSecondary:r||i}}function Dl(e,t){var n="".concat(L0).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=Fn(e.children),a=s.filter(function(Z){return Z.getAttribute(js)===t})[0],o=jt.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(B0),c=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(a&&!l)return e.removeChild(a),r();if(l&&u!=="none"&&u!==""){var f=o.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?pe:ce,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?hr[p][l[2].toLowerCase()]:H0[p][c],x=Gy(f),A=x.value,N=x.isSecondary,b=l[0].startsWith("FontAwesome"),_=$a(g,A),O=_;if(b){var k=py(A);k.iconName&&k.prefix&&(_=k.iconName,g=k.prefix)}if(_&&!N&&(!a||a.getAttribute(Na)!==g||a.getAttribute(Ma)!==O)){e.setAttribute(n,O),a&&e.removeChild(a);var D=Fy(),X=D.extra;X.attributes[js]=t,Ks(_,g).then(function(Z){var q=Ba(R(R({},D),{},{icons:{main:Z,mask:ja()},prefix:g,iconName:O,extra:X,watchable:!0})),H=ue.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(H,e.firstChild):e.appendChild(H),H.outerHTML=q.map(function(le){return Ar(le)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Yy(e){return Promise.all([Dl(e,"::before"),Dl(e,"::after")])}function Xy(e){return e.parentNode!==document.head&&!~F0.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(js)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ll(e){if(Et)return new Promise(function(t,n){var r=Fn(e.querySelectorAll("*")).filter(Xy).map(Yy),i=Ha.begin("searchPseudoElements");kf(),Promise.all(r).then(function(){i(),Gs(),t()}).catch(function(){i(),Gs(),n()})})}var Jy={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ll,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ue:r;U.searchPseudoElements&&Ll(i)}}},Ul=!1,Qy={mixout:function(){return{dom:{unwatch:function(){kf(),Ul=!0}}}},hooks:function(){return{bootstrap:function(){Ol(zs("mutationObserverCallbacks",{}))},noAuto:function(){My()},watch:function(n){var r=n.observeMutationsRoot;Ul?Gs():Ol(zs("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Fl=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),a=s[0],o=s.slice(1).join("-");if(a&&o==="h")return r.flipX=!0,r;if(a&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(a){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},Zy={mixout:function(){return{parse:{transform:function(n){return Fl(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Fl(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,a=n.iconWidth,o={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(c," ").concat(u)},p={transform:"translate(".concat(a/2*-1," -256)")},g={outer:o,inner:f,path:p};return{tag:"g",attributes:R({},g.outer),children:[{tag:"g",attributes:R({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:R(R({},r.icon.attributes),g.path)}]}]}}}},ds={x:0,y:0,width:"100%",height:"100%"};function $l(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function e_(e){return e.tag==="g"?e.children:[e]}var t_={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?zi(i.split(" ").map(function(a){return a.trim()})):ja();return s.prefix||(s.prefix=Bt()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.mask,o=n.maskId,l=n.transform,c=s.width,u=s.icon,f=a.width,p=a.icon,g=Z0({transform:l,containerWidth:f,iconWidth:c}),x={tag:"rect",attributes:R(R({},ds),{},{fill:"white"})},A=u.children?{children:u.children.map($l)}:{},N={tag:"g",attributes:R({},g.inner),children:[$l(R({tag:u.tag,attributes:R(R({},u.attributes),g.path)},A))]},b={tag:"g",attributes:R({},g.outer),children:[N]},_="mask-".concat(o||gr()),O="clip-".concat(o||gr()),k={tag:"mask",attributes:R(R({},ds),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,b]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:e_(p)},k]};return r.push(D,{tag:"rect",attributes:R({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(_,")")},ds)}),{children:r,attributes:i}}}},n_={provides:function(t){var n=!1;jt.matchMedia&&(n=jt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:R(R({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=R(R({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:R(R({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:R(R({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:R(R({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:R(R({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:R(R({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:R(R({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:R(R({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},r_={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},i_=[ny,zy,Wy,Vy,Ky,Jy,Qy,Zy,t_,n_,r_];vy(i_,{mixoutsTo:Ue});Ue.noAuto;Ue.config;var s_=Ue.library;Ue.dom;var Ys=Ue.parse;Ue.findIconDefinition;Ue.toHtml;var a_=Ue.icon;Ue.layer;Ue.text;Ue.counter;function jl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ft(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?jl(Object(n),!0).forEach(function(r){Oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jl(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yi(e){"@babel/helpers - typeof";return yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yi(e)}function Oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o_(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function l_(e,t){if(e==null)return{};var n=o_(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Af={exports:{}};(function(e){(function(t){var n=function(b,_,O){if(!c(_)||f(_)||p(_)||g(_)||l(_))return _;var k,D=0,X=0;if(u(_))for(k=[],X=_.length;D<X;D++)k.push(n(b,_[D],O));else{k={};for(var Z in _)Object.prototype.hasOwnProperty.call(_,Z)&&(k[b(Z,O)]=n(b,_[Z],O))}return k},r=function(b,_){_=_||{};var O=_.separator||"_",k=_.split||/(?=[A-Z])/;return b.split(k).join(O)},i=function(b){return x(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(_,O){return O?O.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},s=function(b){var _=i(b);return _.substr(0,1).toUpperCase()+_.substr(1)},a=function(b,_){return r(b,_).toLowerCase()},o=Object.prototype.toString,l=function(b){return typeof b=="function"},c=function(b){return b===Object(b)},u=function(b){return o.call(b)=="[object Array]"},f=function(b){return o.call(b)=="[object Date]"},p=function(b){return o.call(b)=="[object RegExp]"},g=function(b){return o.call(b)=="[object Boolean]"},x=function(b){return b=b-0,b===b},A=function(b,_){var O=_&&"process"in _?_.process:_;return typeof O!="function"?b:function(k,D){return O(k,b,D)}},N={camelize:i,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(b,_){return n(A(i,_),b)},decamelizeKeys:function(b,_){return n(A(a,_),b,_)},pascalizeKeys:function(b,_){return n(A(s,_),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=N:t.humps=N})(c_)})(Af);var u_=Af.exports,f_=["class","style"];function d_(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=u_.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function h_(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Tf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Tf(l)}),i=Object.keys(e.attributes||{}).reduce(function(l,c){var u=e.attributes[c];switch(c){case"class":l.class=h_(u);break;case"style":l.style=d_(u);break;default:l.attrs[c]=u}return l},{attrs:{},class:{},style:{}});n.class;var s=n.style,a=s===void 0?{}:s,o=l_(n,f_);return ba(e.tag,ft(ft(ft({},t),{},{class:i.class,style:ft(ft({},i.style),a)},i.attrs),o),r)}var Cf=!1;try{Cf=!0}catch{}function p_(){if(!Cf&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function hs(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Oe({},e,t):{}}function m_(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Oe(t,"fa-".concat(e.size),e.size!==null),Oe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Oe(t,"fa-pull-".concat(e.pull),e.pull!==null),Oe(t,"fa-swap-opacity",e.swapOpacity),Oe(t,"fa-bounce",e.bounce),Oe(t,"fa-shake",e.shake),Oe(t,"fa-beat",e.beat),Oe(t,"fa-fade",e.fade),Oe(t,"fa-beat-fade",e.beatFade),Oe(t,"fa-flash",e.flash),Oe(t,"fa-spin-pulse",e.spinPulse),Oe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Bl(e){if(e&&yi(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ys.icon)return Ys.icon(e);if(e===null)return null;if(yi(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var g_=_t({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=ve(function(){return Bl(t.icon)}),s=ve(function(){return hs("classes",m_(t))}),a=ve(function(){return hs("transform",typeof t.transform=="string"?Ys.transform(t.transform):t.transform)}),o=ve(function(){return hs("mask",Bl(t.mask))}),l=ve(function(){return a_(i.value,ft(ft(ft(ft({},s.value),a.value),o.value),{},{symbol:t.symbol,title:t.title}))});tn(l,function(u){if(!u)return p_("Could not find one or more icon(s)",i.value,o.value)},{immediate:!0});var c=ve(function(){return l.value?Tf(l.value.abstract[0],{},r):null});return function(){return c.value}}}),v_={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},b_={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]};s_.add(v_,b_);const Wa=rp(r0);Wa.use(ap());Wa.use(Qu);Wa.component("font-awesome-icon",g_).mount("#app");
