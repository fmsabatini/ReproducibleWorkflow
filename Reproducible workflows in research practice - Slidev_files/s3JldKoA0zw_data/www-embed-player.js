(function(){'use strict';var r;function ba(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ca=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function u(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ca(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(ba(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
var ja=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ka=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=ja(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),la;
if(typeof Object.setPrototypeOf=="function")la=Object.setPrototypeOf;else{var ma;a:{var na={a:!0},oa={};try{oa.__proto__=na;ma=oa.a;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=la;
function w(a,b){a.prototype=ja(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function y(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:ba(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function z(a){if(!(a instanceof Array)){a=y(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function qa(a){return ra(a,a)}
function ra(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function sa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ta=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)sa(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||ta});
function ua(){this.D=!1;this.u=null;this.i=void 0;this.h=1;this.o=this.M=0;this.P=this.j=null}
function va(a){if(a.D)throw new TypeError("Generator is already running");a.D=!0}
ua.prototype.G=function(a){this.i=a};
function wa(a,b){a.j={exception:b,xd:!0};a.h=a.M||a.o}
ua.prototype.return=function(a){this.j={return:a};this.h=this.o};
ua.prototype.yield=function(a,b){this.h=b;return{value:a}};
ua.prototype.A=function(a){this.h=a};
function xa(a,b,c){a.M=b;c!=void 0&&(a.o=c)}
function ya(a,b){a.h=b;a.M=0}
function za(a){a.M=0;var b=a.j.exception;a.j=null;return b}
function Aa(a){var b=a.P.splice(0)[0];(b=a.j=a.j||b)?b.xd?a.h=a.M||a.o:b.A!=void 0&&a.o<b.A?(a.h=b.A,a.j=null):a.h=a.o:a.h=0}
function Ba(a){this.h=new ua;this.i=a}
function Ca(a,b){va(a.h);var c=a.h.u;if(c)return Da(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ea(a)}
function Da(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.D=!1,e;var f=e.value}catch(g){return a.h.u=null,wa(a.h,g),Ea(a)}a.h.u=null;d.call(a.h,f);return Ea(a)}
function Ea(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.D=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,wa(a.h,c)}a.h.D=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.xd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Fa(a){this.next=function(b){va(a.h);a.h.u?b=Da(a,a.h.u.next,b,a.h.G):(a.h.G(b),b=Ea(a));return b};
this.throw=function(b){va(a.h);a.h.u?b=Da(a,a.h.u["throw"],b,a.h.G):(wa(a.h,b),b=Ea(a));return b};
this.return=function(b){return Ca(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ga(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ga(new Fa(new Ba(a)))}
function C(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("globalThis",function(a){return a||fa});
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return ka});
u("Reflect.setPrototypeOf",function(a){return a?a:pa?function(b,c){try{return pa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.X=0;this.ab=void 0;this.h=[];this.u=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.U),reject:g(this.j)}};
b.prototype.U=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Z(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.P(g):this.o(g)}};
b.prototype.P=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}typeof h=="function"?this.ha(h,g):this.o(g)};
b.prototype.j=function(g){this.M(2,g)};
b.prototype.o=function(g){this.M(1,g)};
b.prototype.M=function(g,h){if(this.X!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.X);this.X=g;this.ab=h;this.X===2&&this.Y();this.D()};
b.prototype.Y=function(){var g=this;e(function(){if(g.G()){var h=fa.console;typeof h!=="undefined"&&h.error(g.ab)}},1)};
b.prototype.G=function(){if(this.u)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.ab;return k(g)};
b.prototype.D=function(){if(this.h!=null){for(var g=0;g<this.h.length;++g)f.i(this.h[g]);this.h=null}};
var f=new c;b.prototype.Z=function(g){var h=this.i();g.ic(h.resolve,h.reject)};
b.prototype.ha=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(p,t){return typeof p=="function"?function(v){try{l(p(v))}catch(x){m(x)}}:t}
var l,m,n=new b(function(p,t){l=p;m=t});
this.ic(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ic=function(g,h){function k(){switch(l.X){case 1:g(l.ab);break;case 2:h(l.ab);break;default:throw Error("Unexpected state: "+l.X);}}
var l=this;this.h==null?f.i(k):this.h.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=y(g),m=l.next();!m.done;m=l.next())d(m.value).ic(h,k)})};
b.all=function(g){var h=y(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(x){p[v]=x;t--;t==0&&l(p)}}
var p=[],t=0;do p.push(void 0),t++,d(k.value).ic(n(p.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||pa});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=y(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!sa(k,g)){var l=new c;ca(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!sa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&sa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&sa(k,g)&&sa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&sa(k,g)&&sa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ha(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&sa(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=y(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(y([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=y(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(y([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ha(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ha(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ha(this,function(b){return b})}});
function Ia(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ia(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)sa(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ia(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)sa(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Ha(this,function(b,c){return c})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ja=Ja||{},D=this||self;function E(a,b,c){a=a.split(".");c=c||D;for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Ma(a){var b=F("CLOSURE_FLAGS");a=b&&b[a];return a!=null?a:!1}
function F(a,b){a=a.split(".");b=b||D;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Na(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Pa(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(Math.random()*1E9>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Xa=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Va:Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function ab(){return Date.now()}
function bb(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function cb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,cb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
bb(cb,Error);cb.prototype.name="CustomError";var db=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var eb=globalThis.trustedTypes,fb;function gb(){var a=null;if(!eb)return a;try{var b=function(c){return c};
a=eb.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function hb(){fb===void 0&&(fb=gb());return fb}
;function ib(a){this.h=a}
ib.prototype.toString=function(){return this.h+""};
function jb(a){var b=hb();return new ib(b?b.createScriptURL(a):a)}
function kb(a){if(a instanceof ib)return a.h;throw Error("");}
;var lb=qa([""]),mb=ra(["\x00"],["\\0"]),nb=ra(["\n"],["\\n"]),ob=ra(["\x00"],["\\u0000"]);function pb(a){return a.toString().indexOf("`")===-1}
pb(function(a){return a(lb)})||pb(function(a){return a(mb)})||pb(function(a){return a(nb)})||pb(function(a){return a(ob)});function qb(a){this.h=a}
qb.prototype.toString=function(){return this.h};
var rb=new qb("about:invalid#zClosurez");function sb(a){this.Ee=a}
function tb(a){return new sb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var ub=[tb("data"),tb("http"),tb("https"),tb("mailto"),tb("ftp"),new sb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],vb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function wb(a){if(a instanceof qb)if(a instanceof qb)a=a.h;else throw Error("");else a=vb.test(a)?a:void 0;return a}
;function xb(a,b){b=wb(b);b!==void 0&&(a.href=b)}
;function yb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;function zb(a){this.h=a}
zb.prototype.toString=function(){return this.h+""};function Ab(a){a=a===void 0?document:a;var b,c;a=(c=(b=a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Bb(a){this.h=a}
Bb.prototype.toString=function(){return this.h+""};
function Db(a){var b=hb();return new Bb(b?b.createScript(a):a)}
function Eb(a){if(a instanceof Bb)return a.h;throw Error("");}
;function Fb(a){var b=Ab(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function Gb(a,b){a.src=kb(b);Fb(a)}
;function Hb(){this.h=Ib[0].toLowerCase()}
Hb.prototype.toString=function(){return this.h};function Jb(a){var b="true".toString(),c=[new Hb];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Hb)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;var Kb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Lb(a,b){if(b instanceof ib)a.href=kb(b).toString(),a.rel="stylesheet";else{if(Kb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=wb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;var Mb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Nb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Ob=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Pb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Qb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Nb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Rb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Tb(a,b){b=Mb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Ub(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Vb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Wb(a){var b=F("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||D.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Xb(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Yb[c])c=Yb[c];else{c=String(c);if(!Yb[c]){var f=/function\s+([^\(]+)/m.exec(c);Yb[c]=f?f[1]:"[Anonymous]"}c=Yb[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Xb(a,b){b||(b={});b[Zb(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[Zb(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=Xb(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[Zb(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=Xb(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function Zb(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var Yb={};function $b(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var ac=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bc(a){return a?decodeURI(a):a}
function cc(a,b){return b.match(ac)[a]||null}
function dc(a){return bc(cc(3,a))}
function ec(a){var b=a.match(ac);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function fc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function hc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)hc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function ic(a){var b=[],c;for(c in a)hc(c,a[c],b);return b.join("&")}
function jc(a,b){b=ic(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function kc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var lc=/#|$/,mc=/[?&]($|#)/;function nc(a,b){for(var c=a.search(lc),d=0,e,f=[];(e=kc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(mc,"$1")}
;var oc=(new Date("2024-01-01T00:00:00Z")).getTime();function pc(a){var b=C.apply(1,arguments).filter(function(d){return d}).join("&");
if(!b)return a;var c=a.match(/[?&]adurl=/);return c?a.slice(0,c.index+1)+b+"&"+a.slice(c.index+1):a+(a.indexOf("?")===-1?"?":"&")+b}
function qc(a){var b=a.url;a=a.Zh;this.j=b;this.D=a;a=/[?&]dsh=1(&|$)/.test(b);this.u=!a&&/[?&]ae=1(&|$)/.test(b);this.M=!a&&/[?&]ae=2(&|$)/.test(b);if((this.h=/[?&]adurl=([^&]*)/.exec(b))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}this.o=(new Date).getTime()-oc}
function rc(a){a=a.D;if(!a)return"";var b="";a.platform&&(b+="&uap="+encodeURIComponent(a.platform));a.platformVersion&&(b+="&uapv="+encodeURIComponent(a.platformVersion));a.uaFullVersion&&(b+="&uafv="+encodeURIComponent(a.uaFullVersion));a.architecture&&(b+="&uaa="+encodeURIComponent(a.architecture));a.model&&(b+="&uam="+encodeURIComponent(a.model));a.bitness&&(b+="&uab="+encodeURIComponent(a.bitness));a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(function(c){return encodeURIComponent(c.brand)+
";"+encodeURIComponent(c.version)}).join("|")));
typeof a.wow64!=="undefined"&&(b+="&uaw="+Number(a.wow64));return b.substring(1)}
;function sc(){try{var a,b;return!!((a=window)==null?0:(b=a.top)==null?0:b.location.href)&&!1}catch(c){return!0}}
;function tc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function uc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Oa(d)?uc.apply(null,d):tc(d)}}
;function G(){this.ea=this.ea;this.M=this.M}
G.prototype.ea=!1;G.prototype.dispose=function(){this.ea||(this.ea=!0,this.ba())};
G.prototype[Symbol.dispose]=function(){this.dispose()};
function vc(a,b){a.addOnDisposeCallback(Ya(tc,b))}
G.prototype.addOnDisposeCallback=function(a,b){this.ea?b!==void 0?a.call(b):a():(this.M||(this.M=[]),b&&(a=a.bind(b)),this.M.push(a))};
G.prototype.ba=function(){if(this.M)for(;this.M.length;)this.M.shift()()};function wc(){var a=xc();a=a===void 0?"bevasrsg":a;return new Promise(function(b){var c=window===window.top?window:sc()?window:window.top,d=c[a],e;((e=d)==null?0:e.bevasrs)?b(new yc(d.bevasrs)):(d||(d={},d=(d.nqfbel=[],d),c[a]=d),d.nqfbel.push(function(f){b(new yc(f))}))})}
function yc(a){G.call(this);var b=this;this.vm=a;this.i="keydown keypress keyup input focusin focusout select copy cut paste change click dblclick auxclick pointerover pointerdown pointerup pointermove pointerout dragenter dragleave drag dragend mouseover mousedown mouseup mousemove mouseout touchstart touchend touchmove wheel".split(" ");this.h=void 0;this.Zc=this.vm.p;this.j=this.o.bind(this);this.addOnDisposeCallback(function(){return void zc(b)})}
w(yc,G);yc.prototype.snapshot=function(a){return this.vm.s(Object.assign({},a.wb&&{c:a.wb},a.cd&&{s:a.cd},a.dd!==void 0&&{p:a.dd}))};
yc.prototype.o=function(a){this.vm.e(a)};
function zc(a){a.h!==void 0&&(a.i.forEach(function(b){var c;(c=a.h)==null||c.removeEventListener(b,a.j)}),a.h=void 0)}
;function Ac(a){var b=b===void 0?49:b;var c=[];Bc(a,Cc,6).forEach(function(d){Dc(d,2)<=b&&c.push(Dc(d,1))});
return c}
function Ec(a){var b=b===void 0?49:b;var c=[];Bc(a,Cc,6).forEach(function(d){Dc(d,2)>b&&c.push(Dc(d,1))});
return c}
;var Fc;function Gc(){G.apply(this,arguments);this.j=1;this[Fc]=this.dispose}
w(Gc,G);Gc.prototype.share=function(){if(this.ea)throw Error("E:AD");this.j++;return this};
Gc.prototype.dispose=function(){--this.j||G.prototype.dispose.call(this)};
Fc=Symbol.dispose;function Hc(a){return{fieldType:2,fieldName:a}}
function Ic(a){return{fieldType:3,fieldName:a}}
;function Jc(a){this.h=a;a.Hc("/client_streamz/bg/frs",Ic("mk"))}
Jc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function Kc(a){this.h=a;a.Hc("/client_streamz/bg/wrl",Ic("mn"),Hc("ac"),Hc("sc"),Ic("rk"),Ic("mk"))}
Kc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Lc(a){this.h=a;a.Mb("/client_streamz/bg/ec",Ic("en"),Ic("mk"))}
Lc.prototype.kb=function(a,b){this.h.Jb("/client_streamz/bg/ec",a,b)};
function Mc(a){this.h=a;a.Hc("/client_streamz/bg/el",Ic("en"),Ic("mk"))}
Mc.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/el",a,b,c)};
function Nc(a){this.h=a;a.Mb("/client_streamz/bg/cec",Hc("ec"),Ic("mk"))}
Nc.prototype.kb=function(a,b){this.h.Jb("/client_streamz/bg/cec",a,b)};
function Oc(a){this.h=a;a.Mb("/client_streamz/bg/po/csc",Hc("cs"),Ic("mk"))}
Oc.prototype.kb=function(a,b){this.h.Jb("/client_streamz/bg/po/csc",a,b)};
function Pc(a){this.h=a;a.Mb("/client_streamz/bg/po/ctav",Ic("av"),Ic("mk"))}
Pc.prototype.kb=function(a,b){this.h.Jb("/client_streamz/bg/po/ctav",a,b)};
function Qc(a){this.h=a;a.Mb("/client_streamz/bg/po/cwsc",Ic("su"),Ic("mk"))}
Qc.prototype.kb=function(a,b){this.h.Jb("/client_streamz/bg/po/cwsc",a,b)};function Rc(a){D.setTimeout(function(){throw a;},0)}
;var Sc=Ma(610401301),Tc=Ma(1981196515);function Uc(){var a=D.navigator;return a&&(a=a.userAgent)?a:""}
var Vc,Wc=D.navigator;Vc=Wc?Wc.userAgentData||null:null;function Xc(a){if(!Sc||!Vc)return!1;for(var b=0;b<Vc.brands.length;b++){var c=Vc.brands[b].brand;if(c&&c.indexOf(a)!=-1)return!0}return!1}
function I(a){return Uc().indexOf(a)!=-1}
;function Yc(){return Sc?!!Vc&&Vc.brands.length>0:!1}
function Zc(){return Yc()?!1:I("Opera")}
function $c(){return I("Firefox")||I("FxiOS")}
function ad(){return Yc()?Xc("Chromium"):(I("Chrome")||I("CriOS"))&&!(Yc()?0:I("Edge"))||I("Silk")}
;function bd(){return Sc?!!Vc&&!!Vc.platform:!1}
function cd(){return I("iPhone")&&!I("iPod")&&!I("iPad")}
;function dd(a){dd[" "](a);return a}
dd[" "]=function(){};var ed=Zc(),fd=Yc()?!1:I("Trident")||I("MSIE"),gd=I("Edge"),hd=I("Gecko")&&!(Uc().toLowerCase().indexOf("webkit")!=-1&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),id=Uc().toLowerCase().indexOf("webkit")!=-1&&!I("Edge");id&&I("Mobile");bd()||I("Macintosh");bd()||I("Windows");(bd()?Vc.platform==="Linux":I("Linux"))||bd()||I("CrOS");var jd=bd()?Vc.platform==="Android":I("Android");cd();I("iPad");I("iPod");cd()||I("iPad")||I("iPod");Uc().toLowerCase().indexOf("kaios");$c();var kd=cd()||I("iPod"),ld=I("iPad");!I("Android")||ad()||$c()||Zc()||I("Silk");ad();var md=I("Safari")&&!(ad()||(Yc()?0:I("Coast"))||Zc()||(Yc()?0:I("Edge"))||(Yc()?Xc("Microsoft Edge"):I("Edg/"))||(Yc()?Xc("Opera"):I("OPR"))||$c()||I("Silk")||I("Android"))&&!(cd()||I("iPad")||I("iPod"));var nd={},od=null;function pd(a,b){Oa(a);b===void 0&&(b=0);qd();b=nd[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function rd(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;sd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function sd(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=od[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
qd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function qd(){if(!od){od={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));nd[c]=d;for(var e=0;e<d.length;e++){var f=d[e];od[f]===void 0&&(od[f]=e)}}}}
;var td=typeof Uint8Array!=="undefined",ud=!fd&&typeof btoa==="function",vd=/[-_.]/g,wd={"-":"+",_:"/",".":"="};function xd(a){return wd[a]||""}
var yd={};function zd(a,b){Ad(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
zd.prototype.sizeBytes=function(){Ad(yd);var a=this.h;if(!(a==null||td&&a!=null&&a instanceof Uint8Array))if(typeof a==="string")if(ud){vd.test(a)&&(a=a.replace(vd,xd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=rd(a);else Na(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};
var Bd;function Ad(a){if(a!==yd)throw Error("illegal external caller");}
;var Cd=void 0;function Dd(a){a=Error(a);Vb(a,"warning");return a}
function Ed(a,b){if(a!=null){var c;var d=(c=Cd)!=null?c:Cd={};c=d[a]||0;c>=b||(d[a]=c+1,a=Error(),Vb(a,"incident"),Rc(a))}}
;var Fd=typeof Symbol==="function"&&typeof Symbol()==="symbol";function Gd(a,b,c){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?(c===void 0?0:c)&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b}
var Hd=Gd("jas",void 0,!0),Id=Gd(void 0,"1oa"),Jd=Gd(void 0,"0actk"),Kd=Gd("m_m","Lh",!0),Ld=Gd(void 0,"mrtk"),Md=Gd(void 0,"vps");Math.max.apply(Math,z(Object.values({lh:1,kh:2,jh:4,ph:8,oh:16,nh:32,Mf:64,rh:128,hh:256,gh:512,Sf:1024,qh:2048,Tf:4096,Nf:8192,ih:16384,mh:32768})));var Nd={De:{value:0,configurable:!0,writable:!0,enumerable:!1}},Od=Object.defineProperties,J=Fd?Hd:"De",Pd,Qd=[];Rd(Qd,55);Pd=Object.freeze(Qd);function Sd(a,b){Fd||J in a||Od(a,Nd);a[J]|=b}
function Rd(a,b){Fd||J in a||Od(a,Nd);a[J]=b}
;var Td=typeof Kd==="symbol",Ud={};function L(a){a=a[Kd];var b=a===Ud;Td&&a&&!b&&Ed(Ld,3);return b}
function Vd(a,b){if(b===void 0){if(b=!Wd(a))L(a),b=!!(2&(a.F[J]|0));return b}L(a);return!!(2&b)&&!Wd(a)}
var Xd={};function Wd(a){a.h&&L(a);return a.h===Xd}
function Yd(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
var Zd=Object.freeze({}),$d={};function ae(){return typeof BigInt==="function"}
;function be(a){a.Gh=!0;return a}
;var ce=be(function(a){return typeof a==="number"}),de=be(function(a){return typeof a==="string"}),ee=be(function(a){return typeof a==="boolean"});
function fe(){var a=ge;return be(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var he=be(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"});var ie=typeof D.BigInt==="function"&&typeof D.BigInt(0)==="bigint";function je(a){var b=a;if(de(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(ce(b)&&!Number.isSafeInteger(b))throw Error(String(b));return ie?BigInt(a):a=ee(a)?a?"1":"0":de(a)?a.trim()||"0":String(a)}
var pe=be(function(a){return ie?a>=ke&&a<=le:a[0]==="-"?me(a,ne):me(a,oe)}),ne=Number.MIN_SAFE_INTEGER.toString(),ke=ie?BigInt(Number.MIN_SAFE_INTEGER):void 0,oe=Number.MAX_SAFE_INTEGER.toString(),le=ie?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function me(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var qe=0,re=0;function se(a){var b=a>>>0;qe=b;re=(a-b)/4294967296>>>0}
function te(a){if(a<0){se(0-a);var b=y(ue(qe,re));a=b.next().value;b=b.next().value;qe=a>>>0;re=b>>>0}else se(a)}
function ve(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else ae()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+we(c)+we(a));return c}
function we(a){a=String(a);return"0000000".slice(a.length)+a}
function xe(){var a=qe,b=re;b&2147483648?ae()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=y(ue(a,b)),a=b.next().value,b=b.next().value,a="-"+ve(a,b)):a=ve(a,b);return a}
function ue(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function ye(a){return Array.prototype.slice.call(a)}
;var ze=typeof BigInt==="function"?BigInt.asIntN:void 0,Ae=Number.isSafeInteger,Be=Number.isFinite,Ce=Math.trunc;function De(a){return a.displayName||a.name||"unknown type name"}
function Ee(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Na(a)+": "+a);return a}
var Fe=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Ge(a){switch(typeof a){case "bigint":return!0;case "number":return Be(a);case "string":return Fe.test(a);default:return!1}}
function He(a){if(typeof a!=="number")throw Dd("int32");if(!Be(a))throw Dd("int32");return a|0}
function Ie(a){return a==null?a:He(a)}
function Je(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return Be(a)?a|0:void 0}
function Ke(a){var b=0;b=b===void 0?0:b;if(!Ge(a))throw Dd("int64");var c=typeof a;switch(b){case 2048:switch(c){case "string":return Le(a);case "bigint":return String(ze(64,a));default:return Me(a)}case 4096:switch(c){case "string":return Ne(a);case "bigint":return je(ze(64,a));default:return Oe(a)}case 0:switch(c){case "string":return Le(a);case "bigint":return je(ze(64,a));default:return Pe(a)}default:return yb(b,"Unknown format requested type for int64")}}
function Qe(a){return a==null?a:Ke(a)}
function Re(a){var b=a.length;return a[0]==="-"?b<20?!0:b===20&&Number(a.substring(0,7))>-922337:b<19?!0:b===19&&Number(a.substring(0,6))<922337}
function Se(a){a.indexOf(".");if(Re(a))return a;if(a.length<16)te(Number(a));else if(ae())a=BigInt(a),qe=Number(a&BigInt(4294967295))>>>0,re=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");re=qe=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),re*=1E6,qe=qe*1E6+d,qe>=4294967296&&(re+=Math.trunc(qe/4294967296),re>>>=0,qe>>>=0);b&&(b=y(ue(qe,re)),a=b.next().value,b=b.next().value,qe=a,re=b)}return xe()}
function Pe(a){Ge(a);a=Ce(a);if(!Ae(a)){te(a);var b=qe,c=re;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);var d=c*4294967296+(b>>>0);b=Number.isSafeInteger(d)?d:ve(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function Me(a){Ge(a);a=Ce(a);if(Ae(a))a=String(a);else{var b=String(a);Re(b)?a=b:(te(a),a=xe())}return a}
function Le(a){Ge(a);var b=Ce(Number(a));if(Ae(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Se(a)}
function Ne(a){var b=Ce(Number(a));if(Ae(b))return je(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return ae()?je(ze(64,BigInt(a))):je(Se(a))}
function Oe(a){return Ae(a)?je(Pe(a)):je(Me(a))}
function Te(a){if(typeof a!=="string")throw Error();return a}
function Ue(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Ve(a){return a==null||typeof a==="string"?a:void 0}
function We(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+De(b)+" but got "+(a&&De(a.constructor)));}
function Xe(a,b,c){if(a!=null&&typeof a==="object"&&L(a))return a;if(Array.isArray(a)){var d=a[J]|0,e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&Rd(a,e);return new b(a)}}
;var Ye={};function Ze(a){return a}
;function $e(a,b,c,d,e){d=d?!!(b&32):void 0;var f=[],g=a.length,h=!1;if(b&64){if(b&256){g--;var k=a[g];var l=g;Yd(k)}else l=4294967295,k=void 0,g&&Yd(a[g-1]);if(!(e||b&512)){h=!0;var m;var n=((m=af)!=null?m:Ze)(k?l- -1:b>>16&1023||536870912,-1,a,k);l=n+-1}}else l=4294967295,b&1||(k=g&&a[g-1],Yd(k)?(g--,l=g,n=0):k=void 0);m=void 0;for(var p=0;p<g;p++){var t=a[p];if(t!=null&&(t=c(t,d))!=null)if(p>=l){var v=void 0;((v=m)!=null?v:m={})[p- -1]=t}else f[p]=t}if(k)for(var x in k)a=k[x],a!=null&&(a=c(a,d))!=
null&&(g=+x,g<n?f[g+-1]=a:(g=void 0,((g=m)!=null?g:m={})[x]=a));m&&(h?f.push(m):f[l]=m);e&&Rd(f,b&67043905|(m!=null?290:34));return f}
function bf(a){switch(typeof a){case "number":return Number.isFinite(a)?a:""+a;case "bigint":return pe(a)?Number(a):""+a;case "boolean":return a?1:0;case "object":if(Array.isArray(a)){var b=a[J]|0;return a.length===0&&b&1?void 0:$e(a,b,bf,!1,!1)}if(L(a))return cf(a);if(a instanceof zd){b=a.h;if(b==null)a="";else if(typeof b==="string")a=b;else{if(ud){for(var c="",d=0,e=b.length-10240;d<e;)c+=String.fromCharCode.apply(null,b.subarray(d,d+=10240));c+=String.fromCharCode.apply(null,d?b.subarray(d):b);
b=btoa(c)}else b=pd(b);a=a.h=b}return a}return}return a}
var af;function df(a,b){if(b){af=b==null||b===Ze||b[Md]!==Ye?Ze:b;try{return cf(a)}finally{af=void 0}}return cf(a)}
function cf(a){L(a);a=a.F;return $e(a,a[J]|0,bf,void 0,!1)}
;function M(a,b,c){if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-67043329|(b&1023)<<16)}else{if(!Array.isArray(a))throw Error("narr");d=a[J]|0;8192&d||!(64&d)||2&d||ef();if(d&1024)throw Error("farr");if(d&64)return d&16384||Rd(a,d|16384),a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(Yd(g)){d|=256;b=d&512?0:-1;f-=b;if(f>=1024)throw Error("pvtlmt");for(var h in g)e=+h,e<f&&(c[e+b]=g[h],delete g[h]);d=d&-67043329|(f&1023)<<16;break a}}if(b){h=
Math.max(b,e-(d&512?0:-1));if(h>1024)throw Error("spvt");d=d&-67043329|(h&1023)<<16}}}Rd(a,d|16384);return a}
function ef(){Ed(Jd,5)}
;function ff(a,b){if(typeof a!=="object")return a;if(Array.isArray(a)){var c=a[J]|0;if(a.length===0&&c&1)return;if(c&2)return a;var d;if(d=b)d=c===0||!!(c&32)&&!(c&64||!(c&16));return d?(Sd(a,34),c&4&&Object.freeze(a),a):$e(a,c,ff,b!==void 0,!0)}if(L(a))return L(a),L(a),b=a.F,c=b[J]|0,Vd(a,c)?a:$e(b,c,ff,!0,!0);if(a instanceof zd)return a}
function gf(a){var b=a;L(b);b=b.F;var c=b[J]|0;if(!Vd(a,c))return a;b=a=new a.constructor($e(b,c,ff,!0,!0));L(b);b=b.F;b[J]&=-3;return a}
function hf(a){if(!Wd(a))return!1;L(a);var b=a.F;b=$e(b,b[J]|0,ff,!0,!0);b[J]&=-3;L(a);a.F=b;L(a);a.h=void 0;return!0}
function jf(a){if(!hf(a)&&(L(a),Vd(a,a.F[J]|0)))throw Error();}
function kf(a,b){b===void 0&&(b=a[J]|0);b&32&&!(b&32768)&&Rd(a,b|32768)}
;var lf=je(0);function mf(a,b,c){Object.isExtensible(a);L(a);return nf(a.F,void 0,b,c)}
function nf(a,b,c,d){if(c===-1)return null;d=c+(d?0:-1);var e=a.length-1;if(d>=e&&(b!=null?b:a[J]|0)&256)a=a[e][c];else if(d<=e)a=a[d];else return;return a}
function of(a,b,c,d){jf(a);L(a);var e=a.F;pf(e,e[J]|0,b,c,d);return a}
function pf(a,b,c,d,e){var f=c+(e?0:-1),g=a.length-1,h;if(f>=g&&((h=b)!=null?h:b=a[J]|0)&256)return a[g][c]=d,b;if(f<=g)return a[f]=d,b;d!==void 0&&(g=b>>16&1023||536870912,c>=g?d!=null&&(f={},a[g+(e?0:-1)]=(f[c]=d,f),b|=256,Rd(a,b)):a[f]=d);return b}
function qf(a){return!!(2&a)&&!!(4&a)||!!(1024&a)}
function rf(a,b,c){jf(a);L(a);var d=a.F;var e=d[J]|0;if(b==null)return pf(d,e,3),a;if(!Array.isArray(b))throw Dd();var f=b[J]|0,g=f,h=qf(f),k=h||Object.isFrozen(b);h||(f=0);k||(b=ye(b),g=0,f=sf(f,e),f=tf(f,e,!0),k=!1);f|=21;h=4&f?2048&f?2048:4096&f?4096:0:void 0;h=h!=null?h:0;for(var l=0;l<b.length;l++){var m=b[l],n=c(m,h);Object.is(m,n)||(k&&(b=ye(b),g=0,f=sf(f,e),f=tf(f,e,!0),k=!1),b[l]=n)}f!==g&&(k&&(b=ye(b),f=sf(f,e),f=tf(f,e,!0)),Rd(b,f));pf(d,e,3,b);return a}
function uf(a,b,c,d){jf(a);L(a);a=a.F;var e=a[J]|0;if(d==null){var f=vf(a);if(wf(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=vf(a);var g=wf(f,a,e,c);g!==b&&(g&&(e=pf(a,e,g)),f.set(c,b))}pf(a,e,b,d)}
function vf(a){if(Fd){var b;return(b=a[Id])!=null?b:a[Id]=new Map}if(Id in a)return a[Id];b=new Map;Object.defineProperty(a,Id,{value:b});return b}
function wf(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];nf(b,c,g)!=null&&(e!==0&&(c=pf(b,c,e)),e=g)}a.set(d,e);return e}
function xf(a,b,c,d,e){var f=nf(a,b,d,e);c=Xe(f,c,b);c!==f&&c!=null&&(b=pf(a,b,d,c,e),Vd(c)||kf(a,b));return c}
function yf(a,b,c,d){L(a);var e=a.F;var f=e[J]|0;b=xf(e,f,b,c,d);if(b==null)return b;f=e[J]|0;if(!Vd(a,f)){var g=gf(b);g!==b&&(hf(a)&&(L(a),e=a.F,f=e[J]|0),b=g,f=pf(e,f,c,b,d),kf(e,f))}return b}
function Bc(a,b,c){var d=void 0===Zd?2:4;var e;L(a);var f=e=a.F;e=e[J]|0;var g=!1,h=Vd(a,e);d=h?1:d;g=!!g||d===3;var k=!h;(d===2||k)&&hf(a)&&(L(a),f=a.F,e=f[J]|0);a=nf(f,e,c);a=Array.isArray(a)?a:Pd;var l=a[J]|0;h=!!(4&l);if(!h){var m=l;m===0&&(m=sf(m,e),m|=16);l=a;m|=1;var n=e,p=!!(2&m);p&&(n|=2);for(var t=!p,v=!0,x=0,A=0;x<l.length;x++){var H=Xe(l[x],b,n);if(H instanceof b){if(!p){var K=Vd(H);t&&(t=!K);v&&(v=K)}l[A++]=H}}A<x&&(l.length=A);m|=4;m=v?m|16:m&-17;m=t?m|8:m&-9;Rd(l,m);p&&Object.freeze(l);
l=m}if(k&&!(8&l||!a.length&&(d===1||d===4&&32&l))){qf(l)&&(a=ye(a),l=sf(l,e),e=pf(f,e,c,a));b=a;k=l;for(l=0;l<b.length;l++)m=b[l],n=gf(m),m!==n&&(b[l]=n);k|=8;k=b.length?k&-17:k|16;Rd(b,k);l=k}d===1||d===4&&32&l?qf(l)||(c=l,d=!!(32&l),l|=!a.length||16&l&&(!h||d)?2:1024,l!==c&&Rd(a,l),Object.freeze(a)):(d===2&&qf(l)&&(a=ye(a),l=sf(l,e),l=tf(l,e,g),Rd(a,l),e=pf(f,e,c,a)),qf(l)||(c=l,l=tf(l,e,g),l!==c&&Rd(a,l)));2&l||g&&16&l||kf(f,e);return a}
function zf(a,b,c,d,e){d!=null?We(d,b):d=void 0;of(a,c,d,e);d&&!Vd(d)&&(L(a),kf(a.F));return a}
function Af(a,b,c,d){jf(a);L(a);var e=a.F;var f=e[J]|0;if(d==null)return pf(e,f,c),a;if(!Array.isArray(d))throw Dd();for(var g=d[J]|0,h=g,k=qf(g),l=k||Object.isFrozen(d),m=!0,n=!0,p=0;p<d.length;p++){var t=d[p];We(t,b);k||(t=Vd(t),m&&(m=!t),n&&(n=t))}k?n=!!(2&g):(g=m?13:5,g=n?g|16:g&-17);l&&g===h||(d=ye(d),h=0,g=sf(g,f),g=tf(g,f,!0));g!==h&&Rd(d,g);f=pf(e,f,c,d);n||kf(e,f);return a}
function sf(a,b){2&a&&(a|=16);a=(2&b?a|2:a&-3)|32;return a&=-1025}
function tf(a,b,c){32&b&&c||(a&=-33);return a}
function Dc(a,b,c){c=c===void 0?0:c;var d;return(d=Je(mf(a,b)))!=null?d:c}
function Bf(a,b,c){c=c===void 0?lf:c;a=mf(a,b);b=typeof a;a=a==null?a:b==="bigint"?je(ze(64,a)):Ge(a)?b==="string"?Ne(a):Oe(a):void 0;return a!=null?a:c}
function Cf(a,b,c,d){c=c===void 0?"":c;var e;return(e=Ve(mf(a,b,d)))!=null?e:c}
function Df(a){var b=b===void 0?0:b;a=mf(a,1);a=a==null?a:Be(a)?a|0:void 0;return a!=null?a:b}
function Ef(a,b,c){return of(a,b,Ue(c))}
function Ff(a,b,c){c=Ue(c);jf(a);L(a);a=a.F;pf(a,a[J]|0,b,c===""?void 0:c,$d)}
function Gf(a,b,c){if(c!=null){if(!Be(c))throw Dd("enum");c|=0}return of(a,b,c)}
;function N(a,b,c){a=M(a,b,c);L(this);this.F=a}
N.prototype.toJSON=function(){return df(this)};
N.prototype.serialize=function(a){return JSON.stringify(df(this,a))};
function Hf(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");Sd(b,32);return new a(b)}
N.prototype.clone=function(){var a=this;L(a);var b=a;L(b);b=b.F;b=a=new a.constructor($e(b,b[J]|0,ff,!0,!0));L(b);b=b.F;b[J]&=-3;return a};
N.prototype[Kd]=Ud;N.prototype.toString=function(){L(this);return this.F.toString()};function If(){var a=Jf;this.ctor=Kf;this.isRepeated=0;this.h=yf;this.defaultValue=void 0;this.i=a.Ke!=null?$d:void 0}
If.prototype.register=function(){dd(this)};function Lf(a){return function(b){return Hf(a,b)}}
;function Mf(a){a=M(a);L(this);this.F=a}
w(Mf,N);function Nf(a,b){return rf(a,b,He)}
;function Of(a){a=M(a);L(this);this.F=a}
w(Of,N);var Pf=[1,2,3];function Qf(a){a=M(a);L(this);this.F=a}
w(Qf,N);var Rf=[1,2,3];function Sf(a){a=M(a);L(this);this.F=a}
w(Sf,N);function Tf(a){a=M(a);L(this);this.F=a}
w(Tf,N);function Uf(a){a=M(a);L(this);this.F=a}
w(Uf,N);function Vf(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function Wf(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var p=g,t=0;t<64;t+=4)p[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=p[t-3]^p[t-8]^p[t-14]^p[t-16],p[t]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],x=e[2],A=e[3],H=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var K=A^v&(x^A);var aa=1518500249}else K=v^x^A,aa=1859775393;else t<60?(K=v&x|A&(v|x),aa=2400959708):(K=v^x^A,aa=3395469782);K=((n<<5|n>>>27)&4294967295)+K+H+aa+p[t]&4294967295;H=A;A=x;x=(v<<30|v>>>2)&4294967295;v=n;n=K}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;
e[2]=e[2]+x&4294967295;e[3]=e[3]+A&4294967295;e[4]=e[4]+H&4294967295}
function c(n,p){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],v=0,x=n.length;v<x;++v)t.push(n.charCodeAt(v));n=t}p||(p=n.length);t=0;if(l==0)for(;t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<p;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],p=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=p&255,p>>>=8;b(f);for(t=p=0;t<5;t++)for(var v=24;v>=0;v-=8)n[p++]=e[t]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ge:function(){for(var n=d(),p="",t=0;t<n.length;t++)p+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return p}}}
;function Xf(a,b,c){var d=String(D.location.href);return d&&a&&b?[b,Yf(Vf(d),a,c||null)].join(" "):null}
function Yf(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Nb(d,function(h){e.push(h)}),Zf(e.join(" "));
var f=[],g=[];Nb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Nb(d,function(h){e.push(h)});
a=Zf(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function Zf(a){var b=Wf();b.update(a);return b.ge().toLowerCase()}
;function $f(a){this.h=a||{cookie:""}}
r=$f.prototype;r.isEnabled=function(){if(!D.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Vb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.af;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Vb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=db(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Vb:0,path:b,domain:c});return d};
r.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=db(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var ag=new $f(typeof document=="undefined"?null:document);function bg(){var a=D.__SAPISID||D.__APISID||D.__3PSAPISID||D.__1PSAPISID||D.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new $f(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function cg(a,b,c,d){(a=D[a])||typeof document==="undefined"||(a=(new $f(document)).get(b));return a?Xf(a,c,d):null}
function dg(a){var b=Vf(String(D.location.href)),c=[];if(bg()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d=b?D.__SAPISID:D.__APISID;d||typeof document==="undefined"||(d=new $f(document),d=d.get(b?"SAPISID":"APISID")||d.get("__Secure-3PAPISID"));(d=d?Xf(d,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=cg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=cg("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;function eg(){}
eg.prototype.compress=function(a){var b,c,d,e;return B(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
eg.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function fg(a){a=M(a);L(this);this.F=a}
w(fg,N);function gg(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return ab()};
this.i=this.h()}
gg.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
gg.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
gg.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
gg.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function hg(a){a=M(a);L(this);this.F=a}
w(hg,N);function ig(a){a=M(a);L(this);this.F=a}
w(ig,N);function jg(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
r=jg.prototype;r.clone=function(){return new jg(this.x,this.y)};
r.equals=function(a){return a instanceof jg&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
r.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
r.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
r.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
r.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function kg(a,b){this.width=a;this.height=b}
r=kg.prototype;r.clone=function(){return new kg(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
r.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function lg(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mg(a){var b=ng,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function og(a){for(var b in a)return!1;return!0}
function pg(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function qg(a){return a!==null&&"privembed"in a?a.privembed:!1}
function rg(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function sg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function tg(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=tg(a[c]);return b}
var ug="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vg(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ug.length;f++)c=ug[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function wg(a,b){this.h=a===xg&&b||""}
wg.prototype.toString=function(){return this.h};
var xg={};new wg(xg,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function yg(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function zg(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Ag(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Bg(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Cg(a){a=M(a);L(this);this.F=a}
w(Cg,N);Cg.prototype.oc=function(){return Df(this)};function Dg(a){a=M(a);L(this);this.F=a}
w(Dg,N);function Eg(a){a=M(a);L(this);this.F=a}
w(Eg,N);function Fg(a,b){Af(a,Dg,1,b)}
;function Gg(a){a=M(a);L(this);this.F=a}
w(Gg,N);var Hg=["platform","platformVersion","architecture","model","uaFullVersion"],Ig=new Eg,Jg=null;function Kg(a,b){b=b===void 0?Hg:b;if(!Jg){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new Dg;f=Ef(f,1,e.brand);return Ef(f,2,e.version)});
Fg(of(Ig,2,Ee(a.mobile)),c);Jg=a.getHighEntropyValues(b)}var d=new Set(b);return Jg.then(function(e){var f=Ig.clone();d.has("platform")&&Ef(f,3,e.platform);d.has("platformVersion")&&Ef(f,4,e.platformVersion);d.has("architecture")&&Ef(f,5,e.architecture);d.has("model")&&Ef(f,6,e.model);d.has("uaFullVersion")&&Ef(f,7,e.uaFullVersion);return f}).catch(function(){return Ig.clone()})}
;function Lg(a){a=M(a);L(this);this.F=a}
w(Lg,N);function Mg(a){a=M(a,4);L(this);this.F=a}
w(Mg,N);function Ng(a){a=M(a,36);L(this);this.F=a}
w(Ng,N);function Og(a){a=M(a,19);L(this);this.F=a}
w(Og,N);Og.prototype.Yb=function(a){return Gf(this,2,a)};function Pg(a,b){this.Wa=b=b===void 0?!1:b;this.j=this.locale=null;this.i=0;this.isFinal=!1;this.h=new Og;Number.isInteger(a)&&this.h.Yb(a);b||(this.locale=document.documentElement.getAttribute("lang"));Qg(this,new Lg)}
Pg.prototype.Yb=function(a){this.h.Yb(a);return this};
function Qg(a,b){zf(a.h,Lg,1,b);Df(b)||Gf(b,1,1);a.Wa||(b=Rg(a),Cf(b,5)||Ef(b,5,a.locale));a.j&&(b=Rg(a),yf(b,Eg,9)||zf(b,Eg,9,a.j))}
function Sg(a,b){a.i=b}
function Tg(a){var b=b===void 0?Hg:b;var c=a.Wa?void 0:window;c?Kg(c,b).then(function(d){a.j=d;d=Rg(a);zf(d,Eg,9,a.j);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function Rg(a){a=yf(a.h,Lg,1);var b=yf(a,Gg,11);b||(b=new Gg,zf(a,Gg,11,b));return b}
function Ug(a,b,c,d,e,f,g){c=c===void 0?0:c;d=d===void 0?0:d;e=e===void 0?null:e;f=f===void 0?0:f;g=g===void 0?0:g;var h=yf(a.h,Lg,1);L(h);h=h.F;if(xf(h,h[J]|0,Gg,11)!==void 0){h=Rg(a);var k=new Cg;k=Gf(k,1,a.i);k=of(k,2,Ee(a.isFinal));d=of(k,3,Ie(d>0?d:void 0));d=of(d,4,Ie(f>0?f:void 0));d=of(d,5,Ie(g>0?g:void 0));L(d);f=d.F;g=f[J]|0;d=Vd(d,g)?d:new d.constructor($e(f,g,ff,!0,!0));zf(h,Cg,10,d)}a=a.h.clone();h=Date.now().toString();a=of(a,4,Qe(h));b=b.slice();b=Af(a,Ng,3,b);e&&(a=new hg,e=of(a,13,
Ie(e)),a=new ig,e=zf(a,hg,2,e),a=new Mg,e=zf(a,ig,1,e),e=Gf(e,2,9),zf(b,Mg,18,e));c&&of(b,14,Qe(c));return b}
;var Vg=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
D.addEventListener("test",c,b);D.removeEventListener("test",c,b)}catch(d){}return a}();function Wg(a){this.h=this.i=this.j=a}
Wg.prototype.reset=function(){this.h=this.i=this.j};
Wg.prototype.getValue=function(){return this.i};function Jf(a){a=M(a,8);L(this);this.F=a}
w(Jf,N);var Xg=Lf(Jf);function Kf(a){a=M(a);L(this);this.F=a}
w(Kf,N);var Yg=new If;function Zg(a){G.call(this);var b=this;this.componentId="";this.h=[];this.Qa="";this.pageId=null;this.eb=this.ma=-1;this.G=this.experimentIds=null;this.D=this.o=0;this.U=null;this.Z=this.ha=0;this.Kb=1;this.timeoutMillis=0;this.xa=!1;this.logSource=a.logSource;this.ib=a.ib||function(){};
this.j=new Pg(a.logSource,a.Wa);this.network=a.network||null;this.ob=a.ob||null;this.bufferSize=1E3;this.P=a.yf||null;this.sessionIndex=a.sessionIndex||null;this.Qb=a.Qb||!1;this.logger=null;this.withCredentials=!a.qd;this.Wa=a.Wa||!1;this.Y=!this.Wa&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.Pa=typeof URLSearchParams!=="undefined"&&!!(new URL($g())).searchParams&&!!(new URL($g())).searchParams.set;var c=Gf(new Lg,1,1);Qg(this.j,c);this.u=new Wg(1E4);a=ah(this,a.md);
this.i=new gg(this.u.getValue(),a);this.Fa=new gg(6E5,a);this.Qb||this.Fa.start();this.Wa||(document.addEventListener("visibilitychange",function(){if(document.visibilityState==="hidden"){bh(b);var d;(d=b.U)==null||d.flush()}}),document.addEventListener("pagehide",function(){bh(b);
var d;(d=b.U)==null||d.flush()}))}
w(Zg,G);function ah(a,b){return a.Pa?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
Zg.prototype.ba=function(){bh(this);this.i.stop();this.Fa.stop();G.prototype.ba.call(this)};
function ch(a){a.P||(a.P=$g());try{return(new URL(a.P)).toString()}catch(b){return(new URL(a.P,window.location.origin)).toString()}}
function dh(a,b,c){a.U&&a.U.kb(b,c)}
Zg.prototype.log=function(a){dh(this,2,1);if(this.Pa){a=a.clone();var b=this.Kb++;a=of(a,21,Qe(b));this.componentId&&Ef(a,26,this.componentId);b=a;var c=mf(b,1);var d=d===void 0?!1:d;var e=typeof c;d=c==null?c:e==="bigint"?String(ze(64,c)):Ge(c)?e==="string"?Le(c):d?Me(c):Pe(c):void 0;d==null&&(d=Date.now(),d=Number.isFinite(d)?d.toString():"0",of(b,1,Qe(d)));d=mf(b,15);d!=null&&(typeof d==="bigint"?pe(d)?d=Number(d):(d=ze(64,d),d=pe(d)?Number(d):String(d)):d=Ge(d)?typeof d==="number"?Pe(d):Le(d):
void 0);d==null&&of(b,15,Qe((new Date).getTimezoneOffset()*60));this.experimentIds&&(d=this.experimentIds.clone(),zf(b,fg,16,d));dh(this,1,1);b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b,dh(this,3,b));this.h.push(a);this.Qb||this.i.enabled||this.i.start()}};
Zg.prototype.flush=function(a,b){var c=this;if(this.h.length===0)a&&a();else if(this.xa&&this.Y)this.j.i=3,eh(this);else{var d=Date.now();if(this.eb>d&&this.ma<d)b&&b("throttled");else{this.network&&(typeof this.network.oc==="function"?Sg(this.j,this.network.oc()):this.j.i=0);var e=this.h.length,f=Ug(this.j,this.h,this.o,this.D,this.ob,this.ha,this.Z),g=this.ib();if(g&&this.Qa===g)b&&b("stale-auth-token");else{this.h=[];this.i.enabled&&this.i.stop();this.o=0;d=f.serialize();var h;this.G&&this.G.isSupported(d.length)&&
(h=this.G.compress(d));var k=fh(this,d,g),l=function(p){c.u.reset();c.i.setInterval(c.u.getValue());if(p){var t=null;try{var v=JSON.stringify(JSON.parse(p.replace(")]}'\n","")));t=Xg(v)}catch(x){}t&&(p=Number(Bf(t,1,je("-1"))),p>0&&(c.ma=Date.now(),c.eb=c.ma+p),L(t),t=Yg.ctor?Yg.h(t,Yg.ctor,175237375,Yg.i):Yg.h(t,175237375,null,Yg.i),t=t===null?void 0:t)&&(t=Dc(t,1,-1),t!==-1&&(c.u=new Wg(t<1?1:t),c.i.setInterval(c.u.getValue())))}a&&a();c.D=0},m=function(p,t){var v=Bc(f,Ng,3);
var x=Number(Bf(f,14)),A=c.u;A.h=Math.min(3E5,A.h*2);A.i=Math.min(3E5,A.h+Math.round(.1*(Math.random()-.5)*2*A.h));c.i.setInterval(c.u.getValue());p===401&&g&&(c.Qa=g);x&&(c.o+=x);t===void 0&&(t=c.isRetryable(p));t&&(c.h=v.concat(c.h),c.Qb||c.i.enabled||c.i.start());dh(c,7,1);b&&b("net-send-failed",p);++c.D},n=function(){c.network&&c.network.send(k,l,m)};
h?h.then(function(p){dh(c,5,e);k.Cc["Content-Encoding"]="gzip";k.Cc["Content-Type"]="application/binary";k.body=p;k.ae=2;n()},function(){dh(c,6,e);
n()}):n()}}}};
function fh(a,b,c){c=c===void 0?a.ib():c;var d=d===void 0?a.withCredentials:d;var e={},f=new URL(ch(a));c&&(e.Authorization=c);a.sessionIndex&&(e["X-Goog-AuthUser"]=a.sessionIndex,f.searchParams.set("authuser",a.sessionIndex));a.pageId&&(Object.defineProperty(e,"X-Goog-PageId",{value:a.pageId}),f.searchParams.set("pageId",a.pageId));return{url:f.toString(),body:b,ae:1,Cc:e,requestType:"POST",withCredentials:d,timeoutMillis:a.timeoutMillis}}
function bh(a){a.j.isFinal=!0;a.flush();a.j.isFinal=!1}
function eh(a){gh(a,function(b,c){b=new URL(b);b.searchParams.set("format","json");var d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch(e){}d||(a.Y=!1);return d})}
function gh(a,b){if(a.h.length!==0){var c=new URL(ch(a));c.searchParams.delete("format");var d=a.ib();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){var e=a.h.slice(0,32),f=Ug(a.j,e,a.o,a.D,a.ob,a.ha,a.Z);if(!b(c.toString(),f)){++a.D;break}a.o=0;a.D=0;a.ha=0;a.Z=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
Zg.prototype.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function $g(){return"https://play.google.com/log?format=json&hasfast=true"}
;function hh(){this.Ud=typeof AbortController!=="undefined"}
hh.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,p,t;return B(function(v){switch(v.h){case 1:return f=(e=d.Ud?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,xa(v,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.Cc)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),v.yield(fetch(a.url,g),5);case 5:h=v.i;if(h.status!==200){(k=c)==null||k(h.status);v.A(3);break}if((l=b)==null){v.A(7);break}return v.yield(h.text(),8);case 8:l(v.i);case 7:case 3:v.P=[v.j];v.M=0;v.o=0;clearTimeout(f);Aa(v);break;case 2:m=za(v);switch((n=m)==null?void 0:n.name){case "AbortError":(p=c)==null||p(408);break;default:(t=c)==null||t(400)}v.A(3)}})};
hh.prototype.oc=function(){return 4};function ih(a,b){G.call(this);this.logSource=a;this.sessionIndex=b;this.Ua="https://play.google.com/log?format=json&hasfast=true";this.i=null;this.o=!1;this.network=null;this.componentId="";this.h=this.ob=null;this.j=!1;this.pageId=null;this.bufferSize=void 0}
w(ih,G);function jh(a,b){a.i=b;return a}
function lh(a,b){a.network=b;return a}
function mh(a,b){a.h=b}
function nh(a){a.j=!0;return a}
ih.prototype.qd=function(){this.u=!0;return this};
function oh(a){a.network||(a.network=new hh);var b=new Zg({logSource:a.logSource,ib:a.ib?a.ib:dg,sessionIndex:a.sessionIndex,yf:a.Ua,Wa:a.o,Qb:!1,qd:a.u,md:a.md,network:a.network});vc(a,b);if(a.i){var c=a.i,d=Rg(b.j);Ef(d,7,c)}b.G=new eg;a.componentId&&(b.componentId=a.componentId);a.ob&&(b.ob=a.ob);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new fg),c=b.experimentIds,d=d.serialize(),Ef(c,4,d)):b.experimentIds&&of(b.experimentIds,4));a.j&&(b.xa=b.Y);Tg(b.j);a.bufferSize&&
(b.bufferSize=a.bufferSize);a.network.Yb&&a.network.Yb(a.logSource);a.network.mf&&a.network.mf(b);return b}
;function ph(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;G.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new ih(a,"0"),a.componentId=b,vc(this,a),c!==""&&(a.Ua=c),d&&(a.o=!0),e&&jh(a,e),g&&lh(a,g),b=oh(a));this.h=b}
w(ph,G);
ph.prototype.flush=function(a){var b=a||[];if(b.length){a=new Uf;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new Tf;f=Ef(f,1,e.i);var g=qh(e);f=rf(f,g,Te);g=[];var h=[];for(var k=y(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.o;for(var n=e.Lc(l)||[],p=[],t=0;t<n.length;t++){var v=n[t],x=v&&v.h;v=new Qf;switch(m){case 3:x=Number(x);Number.isFinite(x)&&uf(v,1,Rf,Qe(x));break;case 2:x=Number(x);if(x!=null&&typeof x!=="number")throw Error("Value of float/double field must be a number, found "+typeof x+
": "+x);uf(v,2,Rf,x)}p.push(v)}m=p;for(n=0;n<m.length;n++){p=m[n];t=new Sf;p=zf(t,Qf,2,p);t=l;v=[];x=rh(e);for(var A=0;A<x.length;A++){var H=x[A],K=t[A],aa=new Of;switch(H){case 3:uf(aa,1,Pf,Ue(String(K)));break;case 2:H=Number(K);Number.isFinite(H)&&uf(aa,2,Pf,Ie(H));break;case 1:uf(aa,3,Pf,Ee(K==="true"))}v.push(aa)}Af(p,Of,1,v);g.push(p)}}Af(f,Sf,4,g);c.push(f);e.clear()}Af(a,Tf,1,c);b=this.h;if(a instanceof Ng)b.log(a);else try{var da=new Ng,Qa=a.serialize();var Sb=Ef(da,8,Qa);b.log(Sb)}catch(Za){dh(b,
4,1)}this.h.flush()}};function sh(a){this.h=a}
;function th(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function rh(a){return a.fields.map(function(b){return b.fieldType})}
function qh(a){return a.fields.map(function(b){return b.fieldName})}
r=th.prototype;r.Vd=function(a){var b=C.apply(1,arguments),c=this.Lc(b);c?c.push(new sh(a)):this.Id(a,b)};
r.Id=function(a){var b=this.ld(C.apply(1,arguments));this.h.set(b,[new sh(a)])};
r.Lc=function(){var a=this.ld(C.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
r.te=function(){var a=this.Lc(C.apply(0,arguments));return a&&a.length?a[0]:void 0};
r.clear=function(){this.h.clear()};
r.ld=function(){var a=C.apply(0,arguments);return a?a.join(","):"key"};function uh(a,b){th.call(this,a,3,b)}
w(uh,th);uh.prototype.j=function(a){var b=C.apply(1,arguments),c=0,d=this.te(b);d&&(c=d.h);this.Id(c+a,b)};function vh(a,b){th.call(this,a,2,b)}
w(vh,th);vh.prototype.record=function(a){this.Vd(a,C.apply(1,arguments))};function wh(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
wh.prototype.stopPropagation=function(){this.j=!0};
wh.prototype.preventDefault=function(){this.defaultPrevented=!0};function xh(a,b){wh.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
bb(xh,wh);
xh.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&xh.Aa.preventDefault.call(this)};
xh.prototype.stopPropagation=function(){xh.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
xh.prototype.preventDefault=function(){xh.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var yh="closure_listenable_"+(Math.random()*1E6|0);var zh=0;function Ah(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.qc=e;this.key=++zh;this.Xb=this.hc=!1}
function Bh(a){a.Xb=!0;a.listener=null;a.proxy=null;a.src=null;a.qc=null}
;function Ch(a){this.src=a;this.listeners={};this.h=0}
Ch.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Dh(a,b,d,e);g>-1?(b=a[g],c||(b.hc=!1)):(b=new Ah(b,this.src,f,!!d,e),b.hc=c,a.push(b));return b};
Ch.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Dh(e,b,c,d);return b>-1?(Bh(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Eh(a,b){var c=b.type;c in a.listeners&&Tb(a.listeners[c],b)&&(Bh(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function Dh(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Xb&&f.listener==b&&f.capture==!!c&&f.qc==d)return e}return-1}
;var Fh="closure_lm_"+(Math.random()*1E6|0),Gh={},Hh=0;function Ih(a,b,c,d,e){if(d&&d.once)Jh(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Ih(a,b[f],c,d,e);else c=Kh(c),a&&a[yh]?a.listen(b,c,Pa(d)?!!d.capture:!!d,e):Lh(a,b,c,!1,d,e)}
function Lh(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=Mh(a);h||(a[Fh]=h=new Ch(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Nh();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Vg||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Oh(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Hh++}}
function Nh(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ph;return a}
function Jh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Jh(a,b[f],c,d,e);else c=Kh(c),a&&a[yh]?Qh(a,b,c,Pa(d)?!!d.capture:!!d,e):Lh(a,b,c,!0,d,e)}
function Rh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Rh(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=Kh(c),a&&a[yh])?a.i.remove(String(b),c,d,e):a&&(a=Mh(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Dh(b,c,d,e)),(c=a>-1?b[a]:null)&&Sh(c))}
function Sh(a){if(typeof a!=="number"&&a&&!a.Xb){var b=a.src;if(b&&b[yh])Eh(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Oh(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Hh--;(c=Mh(b))?(Eh(c,a),c.h==0&&(c.src=null,b[Fh]=null)):Bh(a)}}}
function Oh(a){return a in Gh?Gh[a]:Gh[a]="on"+a}
function Ph(a,b){if(a.Xb)a=!0;else{b=new xh(b,this);var c=a.listener,d=a.qc||a.src;a.hc&&Sh(a);a=c.call(d,b)}return a}
function Mh(a){a=a[Fh];return a instanceof Ch?a:null}
var Th="__closure_events_fn_"+(Math.random()*1E9>>>0);function Kh(a){if(typeof a==="function")return a;a[Th]||(a[Th]=function(b){return a.handleEvent(b)});
return a[Th]}
;function Uh(){G.call(this);this.i=new Ch(this);this.xa=this;this.Z=null}
bb(Uh,G);Uh.prototype[yh]=!0;r=Uh.prototype;r.addEventListener=function(a,b,c,d){Ih(this,a,b,c,d)};
r.removeEventListener=function(a,b,c,d){Rh(this,a,b,c,d)};
function Vh(a,b){var c=a.Z;if(c){var d=[];for(var e=1;c;c=c.Z)d.push(c),++e}a=a.xa;c=b.type||b;typeof b==="string"?b=new wh(b,a):b instanceof wh?b.target=b.target||a:(e=b,b=new wh(c,a),vg(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=Wh(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Wh(g,c,!0,b)&&e,b.j||(e=Wh(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Wh(g,c,!1,b)&&e}
r.ba=function(){Uh.Aa.ba.call(this);this.removeAllListeners();this.Z=null};
r.listen=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Qh(a,b,c,d,e){a.i.add(String(b),c,!0,d,e)}
r.removeAllListeners=function(a){if(this.i){var b=this.i;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Bh(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Wh(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Xb&&g.capture==c){var h=g.listener,k=g.qc||g.src;g.hc&&Eh(a.i,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var Xh=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function Yh(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
Yh.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Zh(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function $h(){this.i=this.h=null}
$h.prototype.add=function(a,b){var c=ai.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
$h.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var ai=new Yh(function(){return new bi},function(a){return a.reset()});
function bi(){this.next=this.scope=this.h=null}
bi.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
bi.prototype.reset=function(){this.next=this.scope=this.h=null};var ci,di=!1,ei=new $h;function fi(a,b){ci||gi();di||(ci(),di=!0);ei.add(a,b)}
function gi(){var a=Promise.resolve(void 0);ci=function(){a.then(hi)}}
function hi(){for(var a;a=ei.remove();){try{a.h.call(a.scope)}catch(b){Rc(b)}Zh(ai,a)}di=!1}
;function ii(){}
function ji(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function ki(a){this.X=0;this.ab=void 0;this.vb=this.Sa=this.parent_=null;this.pc=this.Kc=!1;if(a!=ii)try{var b=this;a.call(void 0,function(c){li(b,2,c)},function(c){li(b,3,c)})}catch(c){li(this,3,c)}}
function mi(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
mi.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var ni=new Yh(function(){return new mi},function(a){a.reset()});
function oi(a,b,c){var d=ni.get();d.i=a;d.h=b;d.context=c;return d}
function pi(a){return new ki(function(b,c){c(a)})}
ki.prototype.then=function(a,b,c){return qi(this,Xh(typeof a==="function"?a:null),Xh(typeof b==="function"?b:null),c)};
ki.prototype.$goog_Thenable=!0;function ri(a,b,c,d){si(a,oi(b||ii,c||null,d))}
r=ki.prototype;r.finally=function(a){var b=this;a=Xh(a);return new Promise(function(c,d){ri(b,function(e){a();c(e)},function(e){a();
d(e)})})};
r.Ec=function(a,b){return qi(this,null,Xh(a),b)};
r.catch=ki.prototype.Ec;r.cancel=function(a){if(this.X==0){var b=new ti(a);fi(function(){ui(this,b)},this)}};
function ui(a,b){if(a.X==0)if(a.parent_){var c=a.parent_;if(c.Sa){for(var d=0,e=null,f=null,g=c.Sa;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.X==0&&d==1?ui(c,b):(f?(d=f,d.next==c.vb&&(c.vb=d),d.next=d.next.next):vi(c),wi(c,e,3,b)))}a.parent_=null}else li(a,3,b)}
function si(a,b){a.Sa||a.X!=2&&a.X!=3||xi(a);a.vb?a.vb.next=b:a.Sa=b;a.vb=b}
function qi(a,b,c,d){var e=oi(null,null,null);e.child=new ki(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof ti?g(h):f(k)}catch(l){g(l)}}:g});
e.child.parent_=a;si(a,e);return e.child}
r.wf=function(a){this.X=0;li(this,2,a)};
r.xf=function(a){this.X=0;li(this,3,a)};
function li(a,b,c){if(a.X==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.X=1;a:{var d=c,e=a.wf,f=a.xf;if(d instanceof ki){ri(d,e,f,a);var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if(typeof k==="function"){yi(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.ab=c,a.X=b,a.parent_=null,xi(a),b!=3||c instanceof ti||zi(a,c))}}
function yi(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function xi(a){a.Kc||(a.Kc=!0,fi(a.oe,a))}
function vi(a){var b=null;a.Sa&&(b=a.Sa,a.Sa=b.next,b.next=null);a.Sa||(a.vb=null);return b}
r.oe=function(){for(var a;a=vi(this);)wi(this,a,this.X,this.ab);this.Kc=!1};
function wi(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.pc;a=a.parent_)a.pc=!1;if(b.child)b.child.parent_=null,Ai(b,c,d);else try{b.j?b.i.call(b.context):Ai(b,c,d)}catch(e){Bi.call(null,e)}Zh(ni,b)}
function Ai(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function zi(a,b){a.pc=!0;fi(function(){a.pc&&Bi.call(null,b)})}
var Bi=Rc;function ti(a){cb.call(this,a)}
bb(ti,cb);ti.prototype.name="cancel";function Ci(a,b){Uh.call(this);this.j=a||1;this.h=b||D;this.o=Xa(this.sf,this);this.u=ab()}
bb(Ci,Uh);r=Ci.prototype;r.enabled=!1;r.Ea=null;r.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
r.sf=function(){if(this.enabled){var a=ab()-this.u;a>0&&a<this.j*.8?this.Ea=this.h.setTimeout(this.o,this.j-a):(this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null),Vh(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
r.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.h.setTimeout(this.o,this.j),this.u=ab())};
r.stop=function(){this.enabled=!1;this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null)};
r.ba=function(){Ci.Aa.ba.call(this);this.stop();delete this.h};function Di(a){G.call(this);this.G=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.D=new Set;this.flushInterval=3E4;this.h=new Ci(this.flushInterval);this.h.listen("tick",this.ac,!1,this);vc(this,this.h)}
w(Di,G);r=Di.prototype;r.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function Ei(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.ac()}
r.ac=function(){var a=this.i.values();a=[].concat(z(a)).filter(function(b){return b.h.size});
a.length&&this.G.flush(a,this.u);Fi(a);this.j=0;this.h.enabled&&this.h.stop()};
r.Mb=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new uh(a,b))};
r.Hc=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new vh(a,b))};
function Gi(a,b){return a.D.has(b)?void 0:a.i.get(b)}
r.Jb=function(a){this.Td(a,1,C.apply(1,arguments))};
r.Td=function(a,b){var c=C.apply(2,arguments),d=Gi(this,a);d&&d instanceof uh&&(d.j(b,c),Ei(this))};
r.record=function(a,b){var c=C.apply(2,arguments),d=Gi(this,a);d&&d instanceof vh&&(d.record(b,c),Ei(this))};
function Fi(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Hi(){}
Hi.prototype.serialize=function(a){var b=[];Ii(this,a,b);return b.join("")};
function Ii(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ii(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Ji(d,c),c.push(":"),Ii(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ji(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ki={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Li=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ji(a,b){b.push('"',a.replace(Li,function(c){var d=Ki[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Ki[c]=d);return d}),'"')}
;function Mi(){Uh.call(this);this.headers=new Map;this.h=!1;this.J=null;this.o=this.Y="";this.j=this.U=this.D=this.P=!1;this.G=0;this.u=null;this.ma="";this.ha=!1}
bb(Mi,Uh);var Ni=/^https?$/i,Oi=["POST","PUT"],Pi=[];function Qi(a,b,c,d,e,f,g){var h=new Mi;Pi.push(h);b&&h.listen("complete",b);Qh(h,"ready",h.ce);f&&(h.G=Math.max(0,f));g&&(h.ha=g);h.send(a,c,d,e)}
r=Mi.prototype;r.ce=function(){this.dispose();Tb(Pi,this)};
r.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Y+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Y=a;this.o="";this.P=!1;this.h=!0;this.J=new XMLHttpRequest;this.J.onreadystatechange=Xh(Xa(this.Bd,this));try{this.getStatus(),this.U=!0,this.J.open(b,String(a),!0),this.U=!1}catch(g){this.getStatus();Ri(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=y(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=D.FormData&&a instanceof D.FormData;!(Mb(Oi,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=y(c);for(d=b.next();!d.done;d=b.next())c=y(d.value),d=c.next().value,c=c.next().value,this.J.setRequestHeader(d,c);this.ma&&(this.J.responseType=this.ma);"withCredentials"in this.J&&this.J.withCredentials!==this.ha&&(this.J.withCredentials=this.ha);try{this.u&&(clearTimeout(this.u),this.u=null),this.G>0&&(this.getStatus(),this.u=setTimeout(this.uf.bind(this),this.G)),
this.getStatus(),this.D=!0,this.J.send(a),this.D=!1}catch(g){this.getStatus(),Ri(this,g)}};
r.uf=function(){typeof Ja!="undefined"&&this.J&&(this.o="Timed out after "+this.G+"ms, aborting",this.getStatus(),Vh(this,"timeout"),this.abort(8))};
function Ri(a,b){a.h=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.o=b;Si(a);Ti(a)}
function Si(a){a.P||(a.P=!0,Vh(a,"complete"),Vh(a,"error"))}
r.abort=function(){this.J&&this.h&&(this.getStatus(),this.h=!1,this.j=!0,this.J.abort(),this.j=!1,Vh(this,"complete"),Vh(this,"abort"),Ti(this))};
r.ba=function(){this.J&&(this.h&&(this.h=!1,this.j=!0,this.J.abort(),this.j=!1),Ti(this,!0));Mi.Aa.ba.call(this)};
r.Bd=function(){this.ea||(this.U||this.D||this.j?Ui(this):this.Me())};
r.Me=function(){Ui(this)};
function Ui(a){if(a.h&&typeof Ja!="undefined")if(a.D&&(a.J?a.J.readyState:0)==4)setTimeout(a.Bd.bind(a),0);else if(Vh(a,"readystatechange"),a.isComplete()){a.getStatus();a.h=!1;try{if(Vi(a))Vh(a,"complete"),Vh(a,"success");else{try{var b=(a.J?a.J.readyState:0)>2?a.J.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Si(a)}}finally{Ti(a)}}}
function Ti(a,b){if(a.J){a.u&&(clearTimeout(a.u),a.u=null);var c=a.J;a.J=null;b||Vh(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
r.isActive=function(){return!!this.J};
r.isComplete=function(){return(this.J?this.J.readyState:0)==4};
function Vi(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=cc(1,String(a.Y)),!a&&D.self&&D.self.location&&(a=D.self.location.protocol.slice(0,-1)),b=!Ni.test(a?a.toLowerCase():"");c=b}return c}
r.getStatus=function(){try{return(this.J?this.J.readyState:0)>2?this.J.status:-1}catch(a){return-1}};
r.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function Wi(){}
Wi.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
Qi(a.url,function(d){d=d.target;if(Vi(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Cc,a.timeoutMillis,a.withCredentials)};
Wi.prototype.oc=function(){return 1};function Xi(a,b){this.logger=a;this.event=b;this.startTime=Yi()}
Xi.prototype.done=function(){this.logger.Ub(this.event,Yi()-this.startTime)};
function Zi(){Gc.apply(this,arguments)}
w(Zi,Gc);function $i(a,b){var c=Yi();b=b();a.Ub("n",Yi()-c);return b}
function aj(){Zi.apply(this,arguments)}
w(aj,Zi);r=aj.prototype;r.Pc=function(){};
r.Cb=function(){};
r.Ub=function(){};
r.Ha=function(){};
r.Bc=function(){};
r.Nd=function(){};
function bj(a){return{qf:new Jc(a),errorCount:new Nc(a),eventCount:new Lc(a),ne:new Mc(a),ci:new Kc(a),fi:new Oc(a),vh:new Pc(a),di:new Qc(a)}}
function cj(a,b,c,d){a=nh(lh(jh(new ih(1828,"0"),a),new Wi));b.length&&mh(a,Nf(new Mf,b));d!==void 0&&(a.Ua=d);var e=new ph(1828,"","",!1,"",oh(a));vc(e,a);var f=new Di({flush:function(g){try{e.flush(g)}catch(h){c(h)}}});
f.addOnDisposeCallback(function(){setTimeout(function(){try{f.ac()}finally{e.dispose()}})});
f.o=1E5;f.flushInterval=3E4;f.h.setInterval(3E4);return f}
function dj(a,b){G.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
w(dj,G);function ej(a){if(a.timer===void 0){var b=Math.max(0,a.h+a.i-Yi());a.timer=setTimeout(function(){try{a.callback()}finally{a.h=Yi(),a.timer=void 0}},b)}}
function fj(a,b){Zi.call(this);this.metrics=a;this.Da=b}
w(fj,Zi);fj.prototype.Pc=function(a){this.metrics.qf.record(a,this.Da)};
fj.prototype.Cb=function(a){this.metrics.eventCount.kb(a,this.Da)};
fj.prototype.Ub=function(a,b){this.metrics.ne.record(b,a,this.Da)};
fj.prototype.Ha=function(a){this.metrics.errorCount.kb(a,this.Da)};
function gj(a,b){b=b===void 0?[]:b;var c={Da:a.Da||"_",nc:a.nc||[],vc:a.vc|0,Ua:a.Ua,wc:a.wc||function(){},
Ib:a.Ib||function(e,f){return cj(e,f,c.wc,c.Ua)}};
b=c.Ib("49",c.nc.concat(b));fj.call(this,bj(b),c.Da);var d=this;this.options=c;this.service=b;this.i=!a.Ib;this.h=new dj(function(){return void d.service.ac()},c.vc);
this.addOnDisposeCallback(function(){d.h.dispose();d.i&&d.service.dispose()})}
w(gj,fj);gj.prototype.Nd=function(a){var b=this;this.h.dispose();this.i&&this.service.dispose();this.service=this.options.Ib("49",this.options.nc.concat(a));this.h=new dj(function(){return void b.service.ac()},this.options.vc);
this.metrics=bj(this.service)};
gj.prototype.Bc=function(){ej(this.h)};
function Yi(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function hj(a){a=M(a);L(this);this.F=a}
w(hj,N);function ij(a){a=M(a);L(this);this.F=a}
w(ij,N);function jj(a){a=M(a,0,"bfkj");L(this);this.F=a}
w(jj,N);var kj=function(a){return be(function(b){return b instanceof a&&!Vd(b)})}(jj);
jj.Ke="bfkj";function Cc(a){a=M(a);L(this);this.F=a}
w(Cc,N);function lj(a){a=M(a);L(this);this.F=a}
w(lj,N);var mj=Lf(lj);function nj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function oj(a,b,c){if(a.disable)return new aj;b=b?Ac(b):[];if(c)return c.Nd(b),c.share();a={Da:a.Da,nc:a.Ch,vc:a.Nh,Ua:a.Ua,wc:a.wc,Ib:a.Ib};c=b;c=c===void 0?[]:c;return new gj(a,c)}
function pj(a){function b(v,x,A,H){Promise.resolve().then(function(){k.done();h.Bc();h.dispose();g.resolve({Xd:v,pf:x,Qe:A,xh:H})})}
function c(v,x,A,H){if(!d.logger.ea){var K="k";x?K="h":A&&(K="u");K!=="k"?H!==0&&(d.logger.Cb(K),d.logger.Ub(K,v)):d.i<=0?(d.logger.Cb(K),d.logger.Ub(K,v),d.i=Math.floor(Math.random()*200)):d.i--}}
G.call(this);var d=this;this.i=Math.floor(Math.random()*200);this.h=new lj;if("challenge"in a&&kj(a.challenge)){var e=Cf(a.challenge,4,void 0,$d);var f=Cf(a.challenge,5,void 0,$d);Cf(a.challenge,7,void 0,$d)&&(this.h=mj(Cf(a.challenge,7,void 0,$d)))}else e=a.program,f=a.globalName;this.addOnDisposeCallback(function(){var v,x,A;return B(function(H){if(H.h==1)return H.yield(d.j,2);v=H.i;x=v.pf;(A=x)==null||A();H.h=0})});
this.logger=oj(a.zd||{},this.h,a.yh);vc(this,this.logger);var g=new nj;this.j=g.promise;this.logger.Cb("t");var h=this.logger.share(),k=new Xi(h,"t");if(!D[f])throw this.logger.Ha(25),Error("EGOU");if(!D[f].a)throw this.logger.Ha(26),Error("ELIU");try{var l=D[f].a;f=[];for(var m=[],n=Ac(this.h),p=0;p<n.length;p++)f.push(n[p]),m.push(1);var t=Ec(this.h);for(n=0;n<t.length;n++)f.push(t[n]),m.push(2);this.u=y(l(e,b,!0,a.bi,c,[f,m],Cf(this.h,5))).next().value;this.Zc=g.promise.then(function(){})}catch(v){throw this.logger.Ha(28),
v;
}}
w(pj,G);pj.prototype.snapshot=function(a){if(this.ea)throw Error("Already disposed");this.logger.Cb("n");var b=this.logger.share();return this.j.then(function(c){var d=c.Xd;return new Promise(function(e){var f=new Xi(b,"n");d(function(g){f.done();b.Pc(g.length);b.Bc();b.dispose();e(g)},[a.wb,
a.cd,a.Af,a.dd])})})};
pj.prototype.ed=function(a){var b=this;if(this.ea)throw Error("Already disposed");this.logger.Cb("n");var c=$i(this.logger,function(){return b.u([a.wb,a.cd,a.Af,a.dd])});
this.logger.Pc(c.length);this.logger.Bc();return c};
pj.prototype.o=function(a){this.j.then(function(b){var c;(c=b.Qe)==null||c(a)})};function qj(a){if(!a)return null;a=Ve(mf(a,4));return a===null||a===void 0?null:jb(a)}
;function rj(){this.promises={};this.h=null}
function sj(){rj.instance||(rj.instance=new rj);return rj.instance}
function tj(a,b){return uj(a,yf(b,hj,1,$d),yf(b,ij,2,$d),Cf(b,3,void 0,$d))}
function uj(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return vj(b,c);var e;(e=a.promises)[d]||(e[d]=new Promise(function(f,g){vj(b,c).then(function(){a.h=d;f()},function(h){delete a.promises[d];
g(h)})}));
return a.promises[d]}
function vj(a,b){return b?wj(b):a?xj(a):Promise.resolve()}
function wj(a){return new Promise(function(b,c){var d=zg("SCRIPT"),e=qj(a);Gb(d,e);d.onload=function(){Ag(d);b()};
d.onerror=function(){Ag(d);c(Error("EWLS"))};
(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(d)})}
function xj(a){return new Promise(function(b){var c=zg("SCRIPT");if(a){var d=Ve(mf(a,6));d=d===null||d===void 0?null:Db(d)}else d=null;c.textContent=Eb(d);Fb(c);(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(c);Ag(c);b()})}
;var yj=window;function zj(a){var b=Aj;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Bj(){var a=[];zj(function(b){a.push(b)});
return a}
var Aj={Bf:"allow-forms",Cf:"allow-modals",Df:"allow-orientation-lock",Ef:"allow-pointer-lock",Ff:"allow-popups",Gf:"allow-popups-to-escape-sandbox",Hf:"allow-presentation",If:"allow-same-origin",Jf:"allow-scripts",Kf:"allow-top-navigation",Lf:"allow-top-navigation-by-user-activation"},Cj=ji(function(){return Bj()});
function Dj(){var a=Ej(),b={};Nb(Cj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Ej(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Fj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var Gj=(new Date).getTime();function Hj(a){Uh.call(this);var b=this;this.D=this.j=0;this.Ca=a!=null?a:{pa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.h=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return B(function(e){return e.yield(Ij(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.D||Jj(this)}
w(Hj,Uh);function Kj(){var a=Lj;Hj.instance||(Hj.instance=new Hj(a));return Hj.instance}
Hj.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ca.qa(this.D);delete Hj.instance};
Hj.prototype.ta=function(){return this.h};
function Jj(a){a.D=a.Ca.pa(function(){var b;return B(function(c){if(c.h==1)return a.h?((b=window.navigator)==null?0:b.onLine)?c.A(3):c.yield(Ij(a),3):c.yield(Ij(a),3);Jj(a);c.h=0})},3E4)}
function Ij(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,xa(h,2,3),d&&(a.j=a.Ca.pa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.P=[h.j];h.M=0;h.o=0;a.u=void 0;a.j&&(a.Ca.qa(a.j),a.j=0);g!==a.h&&(a.h=g,a.h?Vh(a,"networkstatus-online"):Vh(a,"networkstatus-offline"));c(g);Aa(h);break;case 2:za(h),g=!1,h.A(3)}})})}
;function Mj(){this.data=[];this.h=-1}
Mj.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Mj.prototype.get=function(a){return!!this.data[a]};
function Nj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Oj(){this.blockSize=-1}
;function Pj(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.M=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
bb(Pj,Oj);Pj.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function Qj(a,b,c){c||(c=0);var d=a.M;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
Pj.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)Qj(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Qj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Qj(this,e);f=0;break}}this.i=f;this.o+=b}};
Pj.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;Qj(this,this.u);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Rj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Sj(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Tj(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Rj(a).match(/\S+/g)||[],b=Mb(a,b)>=0);return b}
function Uj(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Tj(a,"inverted-hdpi")&&Sj(a,Array.prototype.filter.call(a.classList?a.classList:Rj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function Vj(){}
Vj.prototype.next=function(){return Wj};
var Wj={done:!0,value:void 0};Vj.prototype.tb=function(){return this};function Xj(a){if(a instanceof Yj||a instanceof Zj||a instanceof ak)return a;if(typeof a.next=="function")return new Yj(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Yj(function(){return a[Symbol.iterator]()});
if(typeof a.tb=="function")return new Yj(function(){return a.tb()});
throw Error("Not an iterator or iterable.");}
function Yj(a){this.h=a}
Yj.prototype.tb=function(){return new Zj(this.h())};
Yj.prototype[Symbol.iterator]=function(){return new ak(this.h())};
Yj.prototype.i=function(){return new ak(this.h())};
function Zj(a){this.h=a}
w(Zj,Vj);Zj.prototype.next=function(){return this.h.next()};
Zj.prototype[Symbol.iterator]=function(){return new ak(this.h)};
Zj.prototype.i=function(){return new ak(this.h)};
function ak(a){Yj.call(this,function(){return a});
this.j=a}
w(ak,Yj);ak.prototype.next=function(){return this.j.next()};function O(a){G.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.D=!!a}
bb(O,G);r=O.prototype;r.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
r.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.dc(a)}return!1};
r.dc=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Tb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.sb=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.D)for(f=0;f<c.length;f++)e=c[f],bk(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.ea;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.dc(c)}}return f!=0}return!1};
function bk(a,b,c){fi(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.dc,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.ba=function(){O.Aa.ba.call(this);this.clear();this.j.length=0};function ck(a){this.h=a}
ck.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Hi).serialize(b))};
ck.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ck.prototype.remove=function(a){this.h.remove(a)};function dk(a){this.h=a}
bb(dk,ck);function ek(a){this.data=a}
function fk(a){return a===void 0||a instanceof ek?a:new ek(a)}
dk.prototype.set=function(a,b){dk.Aa.set.call(this,a,fk(b))};
dk.prototype.i=function(a){a=dk.Aa.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
dk.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function gk(a){this.h=a}
bb(gk,dk);gk.prototype.set=function(a,b,c){if(b=fk(b)){if(c){if(c<ab()){gk.prototype.remove.call(this,a);return}b.expiration=c}b.creation=ab()}gk.Aa.set.call(this,a,b)};
gk.prototype.i=function(a){var b=gk.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<ab()||c&&c>ab())gk.prototype.remove.call(this,a);else return b}};function hk(){}
;function ik(){}
bb(ik,hk);ik.prototype[Symbol.iterator]=function(){return Xj(this.tb(!0)).i()};
ik.prototype.clear=function(){var a=Array.from(this);a=y(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function jk(a){this.h=a;this.i=null}
bb(jk,ik);r=jk.prototype;r.isAvailable=function(){if(!Tc||this.i===null){var a=this.h;if(a)try{performance.now();a.setItem("__sak","1");a.removeItem("__sak");performance.now();var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;this.i=b}return this.i};
r.set=function(a,b){kk(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){kk(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){kk(this);this.h.removeItem(a)};
r.tb=function(a){kk(this);var b=0,c=this.h,d=new Vj;d.next=function(){if(b>=c.length)return Wj;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
r.clear=function(){kk(this);this.h.clear()};
r.key=function(a){kk(this);return this.h.key(a)};
function kk(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;(Tc?a.isAvailable():(b=a.i)!=null?b:a.isAvailable())||Rc(Error("Storage mechanism: Storage unavailable"))}
;function lk(){var a=null;try{a=D.localStorage||null}catch(b){}jk.call(this,a)}
bb(lk,jk);function mk(a,b){this.i=a;this.h=b+"::"}
bb(mk,ik);mk.prototype.set=function(a,b){this.i.set(this.h+a,b)};
mk.prototype.get=function(a){return this.i.get(this.h+a)};
mk.prototype.remove=function(a){this.i.remove(this.h+a)};
mk.prototype.tb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Vj;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var P={},nk=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";P.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
P.bd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var ok={ub:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
sd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},pk={ub:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
sd:function(a){return[].concat.apply([],a)}};
P.nf=function(){nk?(P.rb=Uint8Array,P.Ja=Uint16Array,P.Sd=Int32Array,P.assign(P,ok)):(P.rb=Array,P.Ja=Array,P.Sd=Array,P.assign(P,pk))};
P.nf();var qk=!0;try{new Uint8Array(1)}catch(a){qk=!1}
function rk(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new P.rb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var sk={};sk=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var tk={},uk,vk=[],wk=0;wk<256;wk++){uk=wk;for(var xk=0;xk<8;xk++)uk=uk&1?3988292384^uk>>>1:uk>>>1;vk[wk]=uk}tk=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^vk[(a^b[d])&255];return a^-1};var yk={};yk={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function zk(a){for(var b=a.length;--b>=0;)a[b]=0}
var Ak=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Bk=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Ck=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Dk=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Ek=Array(576);zk(Ek);var Fk=Array(60);zk(Fk);var Gk=Array(512);zk(Gk);var Hk=Array(256);zk(Hk);var Ik=Array(29);zk(Ik);var Jk=Array(30);zk(Jk);function Kk(a,b,c,d,e){this.Kd=a;this.re=b;this.qe=c;this.je=d;this.Je=e;this.vd=a&&a.length}
var Lk,Mk,Nk;function Ok(a,b){this.rd=a;this.Eb=0;this.bb=b}
function Pk(a,b){a.aa[a.pending++]=b&255;a.aa[a.pending++]=b>>>8&255}
function Qk(a,b,c){a.ia>16-c?(a.oa|=b<<a.ia&65535,Pk(a,a.oa),a.oa=b>>16-a.ia,a.ia+=c-16):(a.oa|=b<<a.ia&65535,a.ia+=c)}
function Rk(a,b,c){Qk(a,c[b*2],c[b*2+1])}
function Sk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Tk(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Sk(d[e]++,e))}
function Uk(a){var b;for(b=0;b<286;b++)a.ra[b*2]=0;for(b=0;b<30;b++)a.gb[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.ra[512]=1;a.Oa=a.Hb=0;a.ya=a.matches=0}
function Vk(a){a.ia>8?Pk(a,a.oa):a.ia>0&&(a.aa[a.pending++]=a.oa);a.oa=0;a.ia=0}
function Wk(a,b,c){Vk(a);Pk(a,c);Pk(a,~c);P.ub(a.aa,a.window,b,c,a.pending);a.pending+=c}
function Xk(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Yk(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Na;){e<a.Na&&Xk(b,a.da[e+1],a.da[e],a.depth)&&e++;if(Xk(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function Zk(a,b,c){var d=0;if(a.ya!==0){do{var e=a.aa[a.Pb+d*2]<<8|a.aa[a.Pb+d*2+1];var f=a.aa[a.Oc+d];d++;if(e===0)Rk(a,f,b);else{var g=Hk[f];Rk(a,g+256+1,b);var h=Ak[g];h!==0&&(f-=Ik[g],Qk(a,f,h));e--;g=e<256?Gk[e]:Gk[256+(e>>>7)];Rk(a,g,c);h=Bk[g];h!==0&&(e-=Jk[g],Qk(a,e,h))}}while(d<a.ya)}Rk(a,256,b)}
function $k(a,b){var c=b.rd,d=b.bb.Kd,e=b.bb.vd,f=b.bb.je,g,h=-1;a.Na=0;a.zb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Na]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Na<2;){var k=a.da[++a.Na]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Oa--;e&&(a.Hb-=d[k*2+1])}b.Eb=h;for(g=a.Na>>1;g>=1;g--)Yk(a,c,g);k=f;do g=a.da[1],a.da[1]=a.da[a.Na--],Yk(a,c,1),d=a.da[1],a.da[--a.zb]=g,a.da[--a.zb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.da[1]=k++,Yk(a,c,1);while(a.Na>=
2);a.da[--a.zb]=a.da[1];g=b.rd;k=b.Eb;d=b.bb.Kd;e=b.bb.vd;f=b.bb.re;var l=b.bb.qe,m=b.bb.Je,n,p=0;for(n=0;n<=15;n++)a.Ka[n]=0;g[a.da[a.zb]*2+1]=0;for(b=a.zb+1;b<573;b++){var t=a.da[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,p++);g[t*2+1]=n;if(!(t>k)){a.Ka[n]++;var v=0;t>=l&&(v=f[t-l]);var x=g[t*2];a.Oa+=x*(n+v);e&&(a.Hb+=x*(d[t*2+1]+v))}}if(p!==0){do{for(n=m-1;a.Ka[n]===0;)n--;a.Ka[n]--;a.Ka[n+1]+=2;a.Ka[m]--;p-=2}while(p>0);for(n=m;n!==0;n--)for(t=a.Ka[n];t!==0;)d=a.da[--b],d>k||(g[d*2+1]!==n&&(a.Oa+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}Tk(c,h,a.Ka)}
function al(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function bl(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Rk(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(Rk(a,l,a.ja),g--),Rk(a,16,a.ja),Qk(a,g-3,2)):g<=10?(Rk(a,17,a.ja),Qk(a,g-3,3)):(Rk(a,18,a.ja),Qk(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function cl(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ra[c*2]!==0)return 0;if(a.ra[18]!==0||a.ra[20]!==0||a.ra[26]!==0)return 1;for(c=32;c<256;c++)if(a.ra[c*2]!==0)return 1;return 0}
var dl=!1;function el(a,b,c){a.aa[a.Pb+a.ya*2]=b>>>8&255;a.aa[a.Pb+a.ya*2+1]=b&255;a.aa[a.Oc+a.ya]=c&255;a.ya++;b===0?a.ra[c*2]++:(a.matches++,b--,a.ra[(Hk[c]+256+1)*2]++,a.gb[(b<256?Gk[b]:Gk[256+(b>>>7)])*2]++);return a.ya===a.Tb-1}
;function fl(a,b){a.msg=yk[b];return b}
function gl(a){for(var b=a.length;--b>=0;)a[b]=0}
function hl(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(P.ub(a.output,b.aa,b.Wb,c,a.Fb),a.Fb+=c,b.Wb+=c,a.gd+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.Wb=0))}
function il(a,b){var c=a.va>=0?a.va:-1,d=a.v-a.va,e=0;if(a.level>0){a.K.Jc===2&&(a.K.Jc=cl(a));$k(a,a.uc);$k(a,a.kc);al(a,a.ra,a.uc.Eb);al(a,a.gb,a.kc.Eb);$k(a,a.od);for(e=18;e>=3&&a.ja[Dk[e]*2+1]===0;e--);a.Oa+=3*(e+1)+5+5+4;var f=a.Oa+3+7>>>3;var g=a.Hb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Qk(a,b?1:0,3),Wk(a,c,d);else if(a.strategy===4||g===f)Qk(a,2+(b?1:0),3),Zk(a,Ek,Fk);else{Qk(a,4+(b?1:0),3);c=a.uc.Eb+1;d=a.kc.Eb+1;e+=1;Qk(a,c-257,5);Qk(a,d-1,5);Qk(a,e-4,4);for(f=0;f<e;f++)Qk(a,
a.ja[Dk[f]*2+1],3);bl(a,a.ra,c-1);bl(a,a.gb,d-1);Zk(a,a.ra,a.gb)}Uk(a);b&&Vk(a);a.va=a.v;hl(a.K)}
function R(a,b){a.aa[a.pending++]=b}
function jl(a,b){a.aa[a.pending++]=b>>>8&255;a.aa[a.pending++]=b&255}
function kl(a,b){var c=a.yd,d=a.v,e=a.wa,f=a.Ad,g=a.v>a.la-262?a.v-(a.la-262):0,h=a.window,k=a.cb,l=a.Ia,m=a.v+258,n=h[d+e-1],p=h[d+e];a.wa>=a.ud&&(c>>=2);f>a.B&&(f=a.B);do{var t=b;if(h[t+e]===p&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.Db=b;e=t;if(t>=f)break;n=h[d+e-1];p=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.B?e:a.B}
function ll(a){var b=a.la,c;do{var d=a.Qd-a.B-a.v;if(a.v>=b+(b-262)){P.ub(a.window,a.window,b,b,0);a.Db-=b;a.v-=b;a.va-=b;var e=c=a.sc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(a.K.na===0)break;e=a.K;c=a.window;f=a.v+a.B;var g=e.na;g>d&&(g=d);g===0?c=0:(e.na-=g,P.ub(c,e.input,e.nb,g,f),e.state.wrap===1?e.I=sk(e.I,c,g,f):e.state.wrap===2&&(e.I=tk(e.I,c,g,f)),e.nb+=g,e.qb+=g,c=g);a.B+=c;if(a.B+a.sa>=3)for(d=a.v-a.sa,a.R=a.window[d],
a.R=(a.R<<a.Ma^a.window[d+1])&a.La;a.sa&&!(a.R=(a.R<<a.Ma^a.window[d+3-1])&a.La,a.Ia[d&a.cb]=a.head[a.R],a.head[a.R]=d,d++,a.sa--,a.B+a.sa<3););}while(a.B<262&&a.K.na!==0)}
function ml(a,b){for(var c;;){if(a.B<262){ll(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);c!==0&&a.v-c<=a.la-262&&(a.T=kl(a,c));if(a.T>=3)if(c=el(a,a.v-a.Db,a.T-3),a.B-=a.T,a.T<=a.Qc&&a.B>=3){a.T--;do a.v++,a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v;while(--a.T!==0);a.v++}else a.v+=a.T,a.T=0,a.R=a.window[a.v],a.R=(a.R<<a.Ma^a.window[a.v+1])&a.La;else c=el(a,0,
a.window[a.v]),a.B--,a.v++;if(c&&(il(a,!1),a.K.S===0))return 1}a.sa=a.v<2?a.v:2;return b===4?(il(a,!0),a.K.S===0?3:4):a.ya&&(il(a,!1),a.K.S===0)?1:2}
function nl(a,b){for(var c,d;;){if(a.B<262){ll(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);a.wa=a.T;a.Dd=a.Db;a.T=2;c!==0&&a.wa<a.Qc&&a.v-c<=a.la-262&&(a.T=kl(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.v-a.Db>4096)&&(a.T=2));if(a.wa>=3&&a.T<=a.wa){d=a.v+a.B-3;c=el(a,a.v-1-a.Dd,a.wa-3);a.B-=a.wa-1;a.wa-=2;do++a.v<=d&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);
while(--a.wa!==0);a.lb=0;a.T=2;a.v++;if(c&&(il(a,!1),a.K.S===0))return 1}else if(a.lb){if((c=el(a,0,a.window[a.v-1]))&&il(a,!1),a.v++,a.B--,a.K.S===0)return 1}else a.lb=1,a.v++,a.B--}a.lb&&(el(a,0,a.window[a.v-1]),a.lb=0);a.sa=a.v<2?a.v:2;return b===4?(il(a,!0),a.K.S===0?3:4):a.ya&&(il(a,!1),a.K.S===0)?1:2}
function ol(a,b){for(var c,d,e,f=a.window;;){if(a.B<=258){ll(a);if(a.B<=258&&b===0)return 1;if(a.B===0)break}a.T=0;if(a.B>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.B&&(a.T=a.B)}a.T>=3?(c=el(a,1,a.T-3),a.B-=a.T,a.v+=a.T,a.T=0):(c=el(a,0,a.window[a.v]),a.B--,a.v++);if(c&&(il(a,!1),a.K.S===0))return 1}a.sa=0;return b===4?(il(a,!0),a.K.S===0?3:4):
a.ya&&(il(a,!1),a.K.S===0)?1:2}
function pl(a,b){for(var c;;){if(a.B===0&&(ll(a),a.B===0)){if(b===0)return 1;break}a.T=0;c=el(a,0,a.window[a.v]);a.B--;a.v++;if(c&&(il(a,!1),a.K.S===0))return 1}a.sa=0;return b===4?(il(a,!0),a.K.S===0?3:4):a.ya&&(il(a,!1),a.K.S===0)?1:2}
function ql(a,b,c,d,e){this.we=a;this.Ie=b;this.Le=c;this.He=d;this.se=e}
var rl;rl=[new ql(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(a.B<=1){ll(a);if(a.B===0&&b===0)return 1;if(a.B===0)break}a.v+=a.B;a.B=0;var d=a.va+c;if(a.v===0||a.v>=d)if(a.B=a.v-d,a.v=d,il(a,!1),a.K.S===0)return 1;if(a.v-a.va>=a.la-262&&(il(a,!1),a.K.S===0))return 1}a.sa=0;if(b===4)return il(a,!0),a.K.S===0?3:4;a.v>a.va&&il(a,!1);return 1}),
new ql(4,4,8,4,ml),new ql(4,5,16,8,ml),new ql(4,6,32,32,ml),new ql(4,4,16,16,nl),new ql(8,16,32,32,nl),new ql(8,16,128,128,nl),new ql(8,32,128,256,nl),new ql(32,128,258,1024,nl),new ql(32,258,258,4096,nl)];
function sl(){this.K=null;this.status=0;this.aa=null;this.wrap=this.pending=this.Wb=this.za=0;this.H=null;this.Ba=0;this.method=8;this.Bb=-1;this.cb=this.kd=this.la=0;this.window=null;this.Qd=0;this.head=this.Ia=null;this.Ad=this.ud=this.strategy=this.level=this.Qc=this.yd=this.wa=this.B=this.Db=this.v=this.lb=this.Dd=this.T=this.va=this.Ma=this.La=this.Mc=this.sc=this.R=0;this.ra=new P.Ja(1146);this.gb=new P.Ja(122);this.ja=new P.Ja(78);gl(this.ra);gl(this.gb);gl(this.ja);this.od=this.kc=this.uc=
null;this.Ka=new P.Ja(16);this.da=new P.Ja(573);gl(this.da);this.zb=this.Na=0;this.depth=new P.Ja(573);gl(this.depth);this.ia=this.oa=this.sa=this.matches=this.Hb=this.Oa=this.Pb=this.ya=this.Tb=this.Oc=0}
function tl(a,b){if(!a||!a.state||b>5||b<0)return a?fl(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.na!==0||c.status===666&&b!==4)return fl(a,a.S===0?-5:-2);c.K=a;var d=c.Bb;c.Bb=b;if(c.status===42)if(c.wrap===2)a.I=0,R(c,31),R(c,139),R(c,8),c.H?(R(c,(c.H.text?1:0)+(c.H.Va?2:0)+(c.H.extra?4:0)+(c.H.name?8:0)+(c.H.comment?16:0)),R(c,c.H.time&255),R(c,c.H.time>>8&255),R(c,c.H.time>>16&255),R(c,c.H.time>>24&255),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,c.H.os&255),c.H.extra&&c.H.extra.length&&
(R(c,c.H.extra.length&255),R(c,c.H.extra.length>>8&255)),c.H.Va&&(a.I=tk(a.I,c.aa,c.pending,0)),c.Ba=0,c.status=69):(R(c,0),R(c,0),R(c,0),R(c,0),R(c,0),R(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),R(c,3),c.status=113);else{var e=8+(c.kd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;jl(c,e+(31-e%31));c.v!==0&&(jl(c,a.I>>>16),jl(c,a.I&65535));a.I=1}if(c.status===69)if(c.H.extra){for(e=c.pending;c.Ba<(c.H.extra.length&65535)&&(c.pending!==c.za||
(c.H.Va&&c.pending>e&&(a.I=tk(a.I,c.aa,c.pending-e,e)),hl(a),e=c.pending,c.pending!==c.za));)R(c,c.H.extra[c.Ba]&255),c.Ba++;c.H.Va&&c.pending>e&&(a.I=tk(a.I,c.aa,c.pending-e,e));c.Ba===c.H.extra.length&&(c.Ba=0,c.status=73)}else c.status=73;if(c.status===73)if(c.H.name){e=c.pending;do{if(c.pending===c.za&&(c.H.Va&&c.pending>e&&(a.I=tk(a.I,c.aa,c.pending-e,e)),hl(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ba<c.H.name.length?c.H.name.charCodeAt(c.Ba++)&255:0;R(c,f)}while(f!==0);c.H.Va&&c.pending>
e&&(a.I=tk(a.I,c.aa,c.pending-e,e));f===0&&(c.Ba=0,c.status=91)}else c.status=91;if(c.status===91)if(c.H.comment){e=c.pending;do{if(c.pending===c.za&&(c.H.Va&&c.pending>e&&(a.I=tk(a.I,c.aa,c.pending-e,e)),hl(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ba<c.H.comment.length?c.H.comment.charCodeAt(c.Ba++)&255:0;R(c,f)}while(f!==0);c.H.Va&&c.pending>e&&(a.I=tk(a.I,c.aa,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.H.Va?(c.pending+2>c.za&&hl(a),c.pending+2<=c.za&&(R(c,
a.I&255),R(c,a.I>>8&255),a.I=0,c.status=113)):c.status=113);if(c.pending!==0){if(hl(a),a.S===0)return c.Bb=-1,0}else if(a.na===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return fl(a,-5);if(c.status===666&&a.na!==0)return fl(a,-5);if(a.na!==0||c.B!==0||b!==0&&c.status!==666){d=c.strategy===2?pl(c,b):c.strategy===3?ol(c,b):rl[c.level].se(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.Bb=-1),0;if(d===2&&(b===1?(Qk(c,2,3),Rk(c,256,Ek),c.ia===16?(Pk(c,c.oa),c.oa=0,c.ia=0):c.ia>=
8&&(c.aa[c.pending++]=c.oa&255,c.oa>>=8,c.ia-=8)):b!==5&&(Qk(c,0,3),Wk(c,0,0),b===3&&(gl(c.head),c.B===0&&(c.v=0,c.va=0,c.sa=0))),hl(a),a.S===0))return c.Bb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(R(c,a.I&255),R(c,a.I>>8&255),R(c,a.I>>16&255),R(c,a.I>>24&255),R(c,a.qb&255),R(c,a.qb>>8&255),R(c,a.qb>>16&255),R(c,a.qb>>24&255)):(jl(c,a.I>>>16),jl(c,a.I&65535));hl(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var ul={};ul=function(){this.input=null;this.qb=this.na=this.nb=0;this.output=null;this.gd=this.S=this.Fb=0;this.msg="";this.state=null;this.Jc=2;this.I=0};var vl=Object.prototype.toString;
function wl(a){if(!(this instanceof wl))return new wl(a);a=this.options=P.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.K=new ul;this.K.S=0;var b=this.K;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=fl(b,-2);else{e===8&&(e=9);var k=new sl;b.state=k;k.K=b;k.wrap=h;k.H=null;k.kd=e;k.la=1<<k.kd;k.cb=k.la-1;k.Mc=f+7;k.sc=1<<k.Mc;k.La=k.sc-1;k.Ma=~~((k.Mc+3-1)/3);k.window=new P.rb(k.la*2);k.head=new P.Ja(k.sc);k.Ia=new P.Ja(k.la);k.Tb=1<<f+6;k.za=k.Tb*4;k.aa=new P.rb(k.za);k.Pb=1*k.Tb;k.Oc=3*k.Tb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.qb=b.gd=0;b.Jc=2;c=b.state;c.pending=0;c.Wb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.I=c.wrap===2?
0:1;c.Bb=0;if(!dl){d=Array(16);for(f=g=0;f<28;f++)for(Ik[f]=g,e=0;e<1<<Ak[f];e++)Hk[g++]=f;Hk[g-1]=f;for(f=g=0;f<16;f++)for(Jk[f]=g,e=0;e<1<<Bk[f];e++)Gk[g++]=f;for(g>>=7;f<30;f++)for(Jk[f]=g<<7,e=0;e<1<<Bk[f]-7;e++)Gk[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Ek[e*2+1]=8,e++,d[8]++;for(;e<=255;)Ek[e*2+1]=9,e++,d[9]++;for(;e<=279;)Ek[e*2+1]=7,e++,d[7]++;for(;e<=287;)Ek[e*2+1]=8,e++,d[8]++;Tk(Ek,287,d);for(e=0;e<30;e++)Fk[e*2+1]=5,Fk[e*2]=Sk(e,5);Lk=new Kk(Ek,Ak,257,286,15);Mk=new Kk(Fk,
Bk,0,30,15);Nk=new Kk([],Ck,0,19,7);dl=!0}c.uc=new Ok(c.ra,Lk);c.kc=new Ok(c.gb,Mk);c.od=new Ok(c.ja,Nk);c.oa=0;c.ia=0;Uk(c);c=0}else c=fl(b,-2);c===0&&(b=b.state,b.Qd=2*b.la,gl(b.head),b.Qc=rl[b.level].Ie,b.ud=rl[b.level].we,b.Ad=rl[b.level].Le,b.yd=rl[b.level].He,b.v=0,b.va=0,b.B=0,b.sa=0,b.T=b.wa=2,b.lb=0,b.R=0);b=c}}else b=-2;if(b!==0)throw Error(yk[b]);a.header&&(b=this.K)&&b.state&&b.state.wrap===2&&(b.state.H=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=rk(a.dictionary):
vl.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.K;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.B)b=-2;else{b===1&&(a.I=sk(a.I,f,g,0));l.wrap=0;g>=l.la&&(b===0&&(gl(l.head),l.v=0,l.va=0,l.sa=0),c=new P.rb(l.la),P.ub(c,f,g-l.la,l.la,0),f=c,g=l.la);c=a.na;d=a.nb;e=a.input;a.na=g;a.nb=0;a.input=f;for(ll(l);l.B>=3;){f=l.v;g=l.B-2;do l.R=(l.R<<l.Ma^l.window[f+3-1])&l.La,l.Ia[f&l.cb]=l.head[l.R],l.head[l.R]=f,f++;while(--g);
l.v=f;l.B=2;ll(l)}l.v+=l.B;l.va=l.v;l.sa=l.B;l.B=0;l.T=l.wa=2;l.lb=0;a.nb=d;a.input=e;a.na=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(yk[b]);this.sh=!0}}
wl.prototype.push=function(a,b){var c=this.K,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=rk(a):vl.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.nb=0;c.na=c.input.length;do{c.S===0&&(c.output=new P.rb(d),c.Fb=0,c.S=d);a=tl(c,e);if(a!==1&&a!==0)return xl(this,a),this.ended=!0,!1;if(c.S===0||c.na===0&&(e===4||e===2))if(this.options.to==="string"){var f=P.bd(c.output,c.Fb);b=f;f=f.length;if(f<65537&&(b.subarray&&qk||!b.subarray))b=
String.fromCharCode.apply(null,P.bd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=P.bd(c.output,c.Fb),this.chunks.push(b)}while((c.na>0||c.S===0)&&a!==1);if(e===4)return(c=this.K)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=fl(c,-2):(c.state=null,a=d===113?fl(c,-3):0)):a=-2,xl(this,a),this.ended=!0,a===0;e===2&&(xl(this,0),c.S=0);return!0};
function xl(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):P.sd(a.chunks));a.chunks=[];a.err=b;a.msg=a.K.msg}
function yl(a,b){b=b||{};b.gzip=!0;b=new wl(b);b.push(a,!0);if(b.err)throw b.msg||yk[b.err];return b.result}
;function zl(a){return a?(a=a.privateDoNotAccessOrElseSafeScriptWrappedValue)?Db(a):null:null}
function Al(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?jb(a):null:null}
;function Bl(a){return jb(a===null?"null":a===void 0?"undefined":a)}
;function Cl(a){this.name=a}
;var Dl=new Cl("rawColdConfigGroup");var El=new Cl("rawHotConfigGroup");function Fl(a){a=M(a);L(this);this.F=a}
w(Fl,N);function Gl(a){a=M(a);L(this);this.F=a}
w(Gl,N);Gl.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new zd(a,yd):Bd||(Bd=new zd(null,yd));else if(a.constructor!==zd)if(td&&a!=null&&a instanceof Uint8Array)a instanceof Uint8Array||Array.isArray(a),a=a.length?new zd(new Uint8Array(a),yd):Bd||(Bd=new zd(null,yd));else throw Error();return of(this,1,a)};var Hl=new Cl("continuationCommand");var Il=new Cl("webCommandMetadata");var Jl=new Cl("signalServiceEndpoint");var Kl={Rf:"EMBEDDED_PLAYER_MODE_UNKNOWN",Of:"EMBEDDED_PLAYER_MODE_DEFAULT",Qf:"EMBEDDED_PLAYER_MODE_PFP",Pf:"EMBEDDED_PLAYER_MODE_PFL"};var Ll=new Cl("feedbackEndpoint");var ge={Ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",Wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
Yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",Xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
Zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",Uf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
Vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DOCUMENT_PICTURE_IN_PICTURE_SUPPORTED"};var Ml=new Cl("shareEndpoint"),Nl=new Cl("shareEntityEndpoint"),Ol=new Cl("shareEntityServiceEndpoint"),Pl=new Cl("webPlayerShareEntityServiceEndpoint");var Ql=new Cl("playlistEditEndpoint");var Rl=new Cl("modifyChannelNotificationPreferenceEndpoint");var Sl=new Cl("undoFeedbackEndpoint");var Tl=new Cl("unsubscribeEndpoint");var Ul=new Cl("subscribeEndpoint");function Vl(){var a=Wl;F("yt.ads.biscotti.getId_")||E("yt.ads.biscotti.getId_",a)}
function Xl(a){E("yt.ads.biscotti.lastId_",a)}
;function Yl(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var Zl=D.window,$l,am,bm=(Zl==null?void 0:($l=Zl.yt)==null?void 0:$l.config_)||(Zl==null?void 0:(am=Zl.ytcfg)==null?void 0:am.data_)||{};E("yt.config_",bm);function cm(){Yl(bm,arguments)}
function S(a,b){return a in bm?bm[a]:b}
function dm(a){var b=bm.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var em=[];function fm(a){em.forEach(function(b){return b(a)})}
function gm(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){hm(b)}}:a}
function hm(a){var b=F("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=S("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),cm("ERRORS",b));fm(a)}
function im(a,b,c,d,e){var f=F("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=S("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),cm("ERRORS",f))}
;var jm=/^[\w.]*$/,km={q:!0,search_query:!0};function lm(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=mm(f[0]||""),h=mm(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Ub(k,h):c[g]=[k,h]}else c[g]=h}catch(p){var l=p,m=f[0],n=String(lm);l.args=[{key:m,value:f[1],query:a,method:nm===n?"unchanged":n}];km.hasOwnProperty(m)||im(l)}}return c}
var nm=String(lm);function om(a){var b=[];lg(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Nb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function pm(a){a.charAt(0)==="?"&&(a=a.substring(1));return lm(a,"&")}
function qm(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),pm(a.length>1?a[1]:a[0])):{}}
function rm(a,b){return sm(a,b||{},!0)}
function sm(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=pm(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return jc(a,e)+d}
function tm(a){if(!b)var b=window.location.href;var c=cc(1,a),d=dc(a);c&&d?(a=a.match(ac),b=b.match(ac),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?dc(b)===d&&(Number(cc(4,b))||null)===(Number(cc(4,a))||null):!0;return a}
function mm(a){return a&&a.match(jm)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function um(a){var b=wm;a=a===void 0?F("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Gj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ka){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?yj:g;try{var h=g.history.length}catch(Ka){h=0}e.u_his=h;var k;e.u_h=(k=yj.screen)==null?void 0:k.height;var l;e.u_w=(l=yj.screen)==null?void 0:l.width;var m;e.u_ah=(m=yj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=yj.screen)==null?void 0:n.availWidth;var p;e.u_cd=(p=yj.screen)==null?void 0:p.colorDepth}catch(Ka){}var t;h=b.h;try{var v=h.screenX;var x=h.screenY}catch(Ka){}try{var A=h.outerWidth;var H=h.outerHeight}catch(Ka){}try{var K=h.innerWidth;var aa=h.innerHeight}catch(Ka){}try{var da=h.screenLeft;var Qa=h.screenTop}catch(Ka){}try{K=h.innerWidth,aa=h.innerHeight}catch(Ka){}try{var Sb=h.screen.availWidth;var Za=h.screen.availTop}catch(Ka){}v=[da,Qa,v,x,Sb,Za,A,H,K,aa];try{var Cb=(b.h.top||window).document,
$a=Cb.compatMode=="CSS1Compat"?Cb.documentElement:Cb.body;var Ra=(new kg($a.clientWidth,$a.clientHeight)).round()}catch(Ka){Ra=new kg(-12245933,-12245933)}Cb=Ra;Ra={};var La=La===void 0?D:La;$a=new Mj;"SVGElement"in La&&"createElementNS"in La.document&&$a.set(0);x=Dj();x["allow-top-navigation-by-user-activation"]&&$a.set(1);x["allow-popups-to-escape-sandbox"]&&$a.set(2);La.crypto&&La.crypto.subtle&&$a.set(3);"TextDecoder"in La&&"TextEncoder"in La&&$a.set(4);La=Nj($a);Ra.bc=La;Ra.bih=Cb.height;Ra.biw=
Cb.width;Ra.brdim=v.join();b=b.i;b=b.prerendering?3:(t={visible:1,hidden:2,prerender:3,preview:4,unloaded:5,"":0}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""])!=null?t:0;t=(Ra.vis=b,Ra.wgl=!!yj.WebGLRenderingContext,Ra);c=d.call(c,e,t);c.ca_type="image";a&&(c.bid=a);return c}
var wm=new function(){var a=window.document;this.h=window;this.i=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return om(um(a))});ab();navigator.userAgent.indexOf(" (CrKey ");var xm="XMLHttpRequest"in D?function(){return new XMLHttpRequest}:null;
function ym(){if(!xm)return null;var a=xm();return"open"in a?a:null}
function zm(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Am(a,b){typeof a==="function"&&(a=gm(a));return window.setTimeout(a,b)}
;var Bm="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(z(Bm),["client_dev_set_cookie"]);function T(a){a=Cm(a);return typeof a==="string"&&a==="false"?!1:!!a}
function Dm(a,b){a=Cm(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Cm(a){return S("EXPERIMENT_FLAGS",{})[a]}
function Em(){for(var a=[],b=S("EXPERIMENTS_FORCED_FLAGS",{}),c=y(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=S("EXPERIMENT_FLAGS",{});d=y(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var Fm={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Gm="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(z(Bm)),Hm=!1;function Im(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&gm(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=ym();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;T("debug_forward_web_query_parameters")&&(a=Jm(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Km(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){im(n)}}l.send(d);return l}
function Km(a,b){b=b===void 0?{}:b;var c=tm(a),d=S("INNERTUBE_CLIENT_NAME"),e=T("web_ajax_ignore_global_headers_if_set"),f;for(f in Fm){var g=S(Fm[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=S("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(dc(a)?!1:!0))){k=a;var l;if(l=T("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=dc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=bc(cc(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!dc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!dc(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&dc(a)||(b["X-YouTube-Ad-Signals"]=om(um()));return b}
function Lm(a,b){b.method="POST";b.postParams||(b.postParams={});return Mm(a,b)}
function Mm(a,b){var c=b.format||"JSON";a=Nm(a,b);var d=Om(a,b),e=!1,f=Pm(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=zm(k),m=null,n=400<=k.status&&k.status<500,p=500<=k.status&&k.status<600;if(l||n||p)m=Qm(a,c,k,b.convertToSafeHtml);l&&(l=Rm(c,k,m));m=m||{};n=b.context||D;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=Am(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||D,f))},d)}return f}
function Nm(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=S("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=rm(a,b);return a}
function Om(a,b){var c=S("XSRF_FIELD_NAME"),d=S("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=S("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||dc(a)&&!b.withCredentials&&dc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=pm(e),vg(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):ic(e));f=e||f&&!og(f);!Hm&&f&&b.method!=="POST"&&(Hm=!0,hm(Error("AJAX request with postData should use POST")));return e}
function Qm(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,im(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Sm(a):null)e={},Nb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Tm(g)})}d&&Um(e);
return e}
function Um(a){if(Pa(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];var e=hb();d=new zb(e?e.createHTML(d):d);a[c]=d}else Um(a[b])}}
function Rm(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Sm(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Tm(a){var b="";Nb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Jm(a){var b=window.location.search,c=dc(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&tm(a)&&(c=document.location.hostname);var d=bc(cc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=pm(b),f={};Nb(Gm,function(g){e[g]&&(f[g]=e[g])});
return sm(a,f||{},!1)}
var Pm=Im;var Vm=[{Rc:function(a){return"Cannot read property '"+a.key+"'"},
xc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Rc:function(a){return"Cannot call '"+a.key+"'"},
xc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Rc:function(a){return a.key+" is not defined"},
xc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Xm={Ya:[],Ta:[{callback:Wm,weight:500}]};function Wm(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Ym(){this.Ta=[];this.Ya=[]}
var Zm;function $m(){if(!Zm){var a=Zm=new Ym;a.Ya.length=0;a.Ta.length=0;Xm.Ya&&a.Ya.push.apply(a.Ya,Xm.Ya);Xm.Ta&&a.Ta.push.apply(a.Ta,Xm.Ta)}return Zm}
;var an=new O;function bn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=cn(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=cn(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=cn(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function cn(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function dn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=en(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=bn(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?en(f+".ve",g,h,k):0;d+=f;d+=en(e,a[e],b,c);if(d>500)break}}else c[b]=fn(a),d+=c[b].length;else c[b]=fn(a),d+=c[b].length;return d}
function en(a,b,c,d){c+="."+a;a=fn(b);d[c]=a;return c.length+a.length}
function fn(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function gn(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function hn(){if(!D.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return D.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":D.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":D.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":D.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function jn(){this.Ld=!0}
function kn(){jn.instance||(jn.instance=new jn);return jn.instance}
function ln(a,b){a={};var c=[];"USER_SESSION_ID"in bm&&c.push({key:"u",value:S("USER_SESSION_ID")});if(c=dg(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(S("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in bm||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in bm&&(a["X-Goog-PageId"]=S("DELEGATED_SESSION_ID"));return a}
;var mn={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function nn(a,b,c,d,e){ag.set(""+a,b,{Vb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function on(a){return ag.get(""+a,void 0)}
function pn(a,b,c){ag.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function qn(){if(T("embeds_web_enable_cookie_detection_fix")){if(!D.navigator.cookieEnabled)return!1}else if(!ag.isEnabled())return!1;if(ag.h.cookie)return!0;T("embeds_web_enable_cookie_detection_fix")?ag.set("TESTCOOKIESENABLED","1",{Vb:60,af:"none",secure:!0}):ag.set("TESTCOOKIESENABLED","1",{Vb:60});if(ag.get("TESTCOOKIESENABLED")!=="1")return!1;ag.remove("TESTCOOKIESENABLED");return!0}
;var rn=F("ytglobal.prefsUserPrefsPrefs_")||{};E("ytglobal.prefsUserPrefsPrefs_",rn);function sn(){this.h=S("ALT_PREF_COOKIE_NAME","PREF");this.i=S("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=on(this.h);a&&this.parse(a)}
var tn;function un(){tn||(tn=new sn);return tn}
r=sn.prototype;r.get=function(a,b){vn(a);wn(a);a=rn[a]!==void 0?rn[a].toString():null;return a!=null?a:b?b:""};
r.set=function(a,b){vn(a);wn(a);if(b==null)throw Error("ExpectedNotNull");rn[a]=b.toString()};
function xn(a){return!!((yn("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
r.remove=function(a){vn(a);wn(a);delete rn[a]};
r.clear=function(){for(var a in rn)delete rn[a]};
function wn(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function vn(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function yn(a){a=rn[a]!==void 0?rn[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
r.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(rn[d]=c.toString())}};var zn={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},An={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Bn(){var a=D.navigator;return a?a.connection:void 0}
function Cn(){var a=Bn();if(a){var b=zn[a.type||"unknown"]||"CONN_UNKNOWN";a=zn[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function Dn(){var a=Bn();if(a!=null&&a.effectiveType)return An.hasOwnProperty(a.effectiveType)?An[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function U(a){var b=C.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(z(b));Object.setPrototypeOf(this,this.constructor.prototype)}
w(U,Error);function En(){try{return Fn(),!0}catch(a){return!1}}
function Fn(a){if(S("DATASYNC_ID")!==void 0)return S("DATASYNC_ID");throw new U("Datasync ID not set",a===void 0?"unknown":a);}
;function Gn(){}
function Hn(a,b){return Lj.Ra(a,0,b)}
Gn.prototype.pa=function(a,b){return this.Ra(a,1,b)};
Gn.prototype.Lb=function(a){var b=F("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var In=Dm("web_emulated_idle_callback_delay",300),Jn=1E3/60-3,Kn=[8,5,4,3,2,1,0];
function Ln(a){a=a===void 0?{}:a;G.call(this);this.i=[];this.j={};this.Z=this.h=0;this.Y=this.u=!1;this.P=[];this.U=this.ha=!1;for(var b=y(Kn),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.Gc=a.timeout||1;this.G=Jn;this.D=0;this.xa=this.Ne.bind(this);this.Kb=this.tf.bind(this);this.Pa=this.Wd.bind(this);this.Qa=this.xe.bind(this);this.eb=this.Ue.bind(this);this.Fa=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!T("disable_scheduler_requestIdleCallback");(this.ma=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.xa)}
w(Ln,G);r=Ln.prototype;r.Lb=function(a){var b=ab();Mn(this,a);a=ab()-b;this.u||(this.G-=a)};
r.Ra=function(a,b,c){++this.Z;if(b===10)return this.Lb(a),this.Z;var d=this.Z;this.j[d]=a;this.u&&!c?this.P.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.u||(this.h!==0&&Nn(this)!==this.D&&this.stop(),this.start()));return d};
r.qa=function(a){delete this.j[a]};
function On(a){a.P.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
r.isHidden=function(){return!!document.hidden||!1};
function Pn(a){return!a.isHidden()&&a.ma}
function Nn(a){if(a.i[8].length){if(a.U)return 4;if(Pn(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?Pn(a)?3:2:1;return 0}
r.Ha=function(a){var b=F("yt.logging.errors.log");b&&b(a)};
function Mn(a,b){try{b()}catch(c){a.Ha(c)}}
function Qn(a){for(var b=y(Kn),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
r.xe=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ha=!0;Rn(this,b);this.ha=!1};
r.tf=function(){Rn(this)};
r.Wd=function(){Sn(this)};
r.Ue=function(a){this.U=!0;var b=Nn(this);b===4&&b!==this.D&&(this.stop(),this.start());Rn(this,void 0,a);this.U=!1};
r.Ne=function(){this.isHidden()||Sn(this);this.h&&(this.stop(),this.start())};
function Sn(a){a.stop();a.u=!0;for(var b=ab(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Mn(a,e)}Tn(a);a.u=!1;Qn(a)&&a.start();b=ab()-b;a.G-=b}
function Tn(a){for(var b=0,c=a.P.length;b<c;b++){var d=a.P[b];a.i[d.priority].push(d.id)}a.P.length=0}
function Rn(a,b,c){a.U&&a.D===4&&a.h||a.stop();a.u=!0;b=ab()+(b||a.G);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ha(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Mn(a,f);d=a.ha?0:1;d=a.o>d?a.o:d;if(!(ab()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Mn(a,c)}while(c&&ab()<b)}a.u=!1;Tn(a);a.G=Jn;Qn(a)&&a.start()}
r.start=function(){this.Y=!1;if(this.h===0)switch(this.D=Nn(this),this.D){case 1:var a=this.Qa;this.h=this.Fa?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,In);break;case 2:this.h=window.setTimeout(this.Kb,this.Gc);break;case 3:this.h=window.requestAnimationFrame(this.eb);break;case 4:this.h=window.setTimeout(this.Pa,0)}};
r.pause=function(){this.stop();this.Y=!0};
r.stop=function(){if(this.h){switch(this.D){case 1:var a=this.h;this.Fa?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
r.ba=function(){On(this);this.stop();this.ma&&document.removeEventListener("visibilitychange",this.xa);G.prototype.ba.call(this)};var Un=F("yt.scheduler.instance.timerIdMap_")||{},Vn=Dm("kevlar_tuner_scheduler_soft_state_timer_ms",800),Wn=0,Xn=0;function Yn(){var a=F("ytglobal.schedulerInstanceInstance_");if(!a||a.ea)a=new Ln(S("scheduler")||{}),E("ytglobal.schedulerInstanceInstance_",a);return a}
function Zn(){$n();var a=F("ytglobal.schedulerInstanceInstance_");a&&(tc(a),E("ytglobal.schedulerInstanceInstance_",null))}
function $n(){On(Yn());for(var a in Un)Un.hasOwnProperty(a)&&delete Un[Number(a)]}
function ao(a,b,c){if(!c)return c=c===void 0,-Yn().Ra(a,b,c);var d=window.setTimeout(function(){var e=Yn().Ra(a,b);Un[d]=e},c);
return d}
function bo(a){Yn().Lb(a)}
function co(a){var b=Yn();if(a<0)b.qa(-a);else{var c=Un[a];c?(b.qa(c),delete Un[a]):window.clearTimeout(a)}}
function eo(){fo()}
function fo(){window.clearTimeout(Wn);Yn().start()}
function go(){Yn().pause();window.clearTimeout(Wn);Wn=window.setTimeout(eo,Vn)}
function ho(){window.clearTimeout(Xn);Xn=window.setTimeout(function(){io(0)},Vn)}
function io(a){ho();var b=Yn();b.o=a;b.start()}
function jo(a){ho();var b=Yn();b.o>a&&(b.o=a,b.start())}
function ko(){window.clearTimeout(Xn);var a=Yn();a.o=0;a.start()}
;function lo(){Gn.apply(this,arguments)}
w(lo,Gn);function mo(){lo.instance||(lo.instance=new lo);return lo.instance}
lo.prototype.Ra=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=F("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):Am(a,c||0)};
lo.prototype.qa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=F("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
lo.prototype.start=function(){var a=F("yt.scheduler.instance.start");a&&a()};
lo.prototype.pause=function(){var a=F("yt.scheduler.instance.pause");a&&a()};
var Lj=mo();
T("web_scheduler_auto_init")&&!F("yt.scheduler.initialized")&&(E("yt.scheduler.instance.dispose",Zn),E("yt.scheduler.instance.addJob",ao),E("yt.scheduler.instance.addImmediateJob",bo),E("yt.scheduler.instance.cancelJob",co),E("yt.scheduler.instance.cancelAllJobs",$n),E("yt.scheduler.instance.start",fo),E("yt.scheduler.instance.pause",go),E("yt.scheduler.instance.setPriorityThreshold",io),E("yt.scheduler.instance.enablePriorityThreshold",jo),E("yt.scheduler.instance.clearPriorityThreshold",ko),E("yt.scheduler.initialized",
!0));function no(a){var b=new lk;this.h=(a=b.isAvailable()?a?new mk(b,a):b:null)?new gk(a):null;this.i=document.domain||window.location.hostname}
no.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Hi).serialize(b))}catch(f){return}else e=escape(b);nn(a,e,c,this.i)};
no.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=on(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
no.prototype.remove=function(a){this.h&&this.h.remove(a);pn(a,"/",this.i)};var oo=function(){var a;return function(){a||(a=new no("ytidb"));return a}}();
function po(){var a;return(a=oo())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var qo=[],ro,so=!1;function to(){var a={};for(ro=new uo(a.handleError===void 0?vo:a.handleError,a.logEvent===void 0?wo:a.logEvent);qo.length>0;)switch(a=qo.shift(),a.type){case "ERROR":ro.Ha(a.payload);break;case "EVENT":ro.logEvent(a.eventType,a.payload)}}
function xo(a){so||(ro?ro.Ha(a):(qo.push({type:"ERROR",payload:a}),qo.length>10&&qo.shift()))}
function yo(a,b){so||(ro?ro.logEvent(a,b):(qo.push({type:"EVENT",eventType:a,payload:b}),qo.length>10&&qo.shift()))}
;function zo(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Ao(a){return a.substr(0,a.indexOf(":"))||a}
;var Bo=kd||ld;function Co(a){var b=Uc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var Do={},Eo=(Do.AUTH_INVALID="No user identifier specified.",Do.EXPLICIT_ABORT="Transaction was explicitly aborted.",Do.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Do.MISSING_INDEX="Index not created.",Do.MISSING_OBJECT_STORES="Object stores not created.",Do.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Do.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Do.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Do.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Do.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Do.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Do.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Do),Fo={},Go=(Fo.AUTH_INVALID="ERROR",Fo.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Fo.EXPLICIT_ABORT="IGNORED",Fo.IDB_NOT_SUPPORTED="ERROR",Fo.MISSING_INDEX=
"WARNING",Fo.MISSING_OBJECT_STORES="ERROR",Fo.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Fo.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Fo.QUOTA_EXCEEDED="WARNING",Fo.QUOTA_MAYBE_EXCEEDED="WARNING",Fo.UNKNOWN_ABORT="WARNING",Fo.INCOMPATIBLE_DB_VERSION="WARNING",Fo),Ho={},Io=(Ho.AUTH_INVALID=!1,Ho.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Ho.EXPLICIT_ABORT=!1,Ho.IDB_NOT_SUPPORTED=!1,Ho.MISSING_INDEX=!1,Ho.MISSING_OBJECT_STORES=!1,Ho.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Ho.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Ho.QUOTA_EXCEEDED=!1,Ho.QUOTA_MAYBE_EXCEEDED=!0,Ho.UNKNOWN_ABORT=!0,Ho.INCOMPATIBLE_DB_VERSION=!1,Ho);function Jo(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Eo[a]:c;d=d===void 0?Go[a]:d;e=e===void 0?Io[a]:e;U.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Jo.prototype)}
w(Jo,U);function Ko(a,b){Jo.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Eo.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Ko.prototype)}
w(Ko,Jo);function Lo(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Lo.prototype)}
w(Lo,Error);var Mo=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function No(a,b,c,d){b=Ao(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Jo)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new Jo("QUOTA_EXCEEDED",a);if(md&&e.name==="UnknownError")return new Jo("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Lo)return new Jo("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Mo.some(function(f){return e.message.includes(f)}))return new Jo("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new Jo("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Cd:e.name})];e.level="WARNING";return e}
function Oo(a,b,c){var d=po();return new Jo("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Po(a){if(!a)throw Error();throw a;}
function Qo(a){return a}
function Ro(a){this.h=a}
function So(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=y(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=y(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
So.all=function(a){return new So(new Ro(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={Ab:0};f.Ab<a.length;f={Ab:f.Ab},++f.Ab)So.resolve(a[f.Ab]).then(function(g){return function(h){d[g.Ab]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
So.resolve=function(a){return new So(new Ro(function(b,c){a instanceof So?a.then(b,c):b(a)}))};
So.reject=function(a){return new So(new Ro(function(b,c){c(a)}))};
So.prototype.then=function(a,b){var c=this,d=a!=null?a:Qo,e=b!=null?b:Po;return new So(new Ro(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){To(c,c,d,f,g)}),c.i.push(function(){Uo(c,c,e,f,g)})):c.state.status==="FULFILLED"?To(c,c,d,f,g):c.state.status==="REJECTED"&&Uo(c,c,e,f,g)}))};
So.prototype.catch=function(a){return this.then(void 0,a)};
function To(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof So?Vo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Uo(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof So?Vo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Vo(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof So?Vo(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Wo(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Xo(a){return new Promise(function(b,c){Wo(a,b,c)})}
function Yo(a){return new So(new Ro(function(b,c){Wo(a,b,c)}))}
;function Zo(a,b){return new So(new Ro(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var $o=window,V=$o.ytcsi&&$o.ytcsi.now?$o.ytcsi.now:$o.performance&&$o.performance.timing&&$o.performance.now&&$o.performance.timing.navigationStart?function(){return $o.performance.timing.navigationStart+$o.performance.now()}:function(){return(new Date).getTime()};function ap(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(V());this.i=!1}
r=ap.prototype;r.add=function(a,b,c){return bp(this,[a],{mode:"readwrite",ka:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return bp(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return bp(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).count(b)})};
function cp(a,b,c){a=a.h.createObjectStore(b,c);return new dp(a)}
r.delete=function(a,b){return bp(this,[a],{mode:"readwrite",ka:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return bp(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).get(b)})};
function ep(a,b,c){return bp(a,[b],{mode:"readwrite",ka:!0},function(d){d=d.objectStore(b);return Yo(d.h.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function bp(a,b,c,d){var e,f,g,h,k,l,m,n,p,t,v,x;return B(function(A){switch(A.h){case 1:var H={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){A.A(4);break}g++;k=Math.round(V());xa(A,5);l=a.h.transaction(b,e.mode);H=A.yield;var K=new fp(l);K=gp(K,d);return H.call(A,K,7);case 7:return m=A.i,n=Math.round(V()),hp(a,k,n,g,void 0,b.join(),e),A.return(m);case 5:p=za(A);t=Math.round(V());v=No(p,
a.h.name,b.join(),a.h.version);if((x=v instanceof Jo&&!v.h)||g>=f)hp(a,k,t,g,v,b.join(),e),h=v;A.A(2);break;case 4:return A.return(Promise.reject(h))}})}
function hp(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Jo&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&yo("QUOTA_EXCEEDED",{dbName:Ao(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Jo&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),yo("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),ip(a,!1,d,f,b,g.tag),xo(e)):ip(a,!0,d,f,b,g.tag)}
function ip(a,b,c,d,e,f){yo("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.h.name};
function dp(a){this.h=a}
r=dp.prototype;r.add=function(a,b){return Yo(this.h.add(a,b))};
r.autoIncrement=function(){return this.h.autoIncrement};
r.clear=function(){return Yo(this.h.clear()).then(function(){})};
function jp(a,b,c){a.h.createIndex(b,c,{unique:!1})}
r.count=function(a){return Yo(this.h.count(a))};
function kp(a,b){return lp(a,{query:b},function(c){return c.delete().then(function(){return mp(c)})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?kp(this,a):Yo(this.h.delete(a))};
r.get=function(a){return Yo(this.h.get(a))};
r.index=function(a){try{return new np(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Lo(a,this.h.name);throw b;}};
r.getName=function(){return this.h.name};
r.keyPath=function(){return this.h.keyPath};
function lp(a,b,c){a=a.h.openCursor(b.query,b.direction);return op(a).then(function(d){return Zo(d,c)})}
function fp(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Jo;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function gp(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return y(d).next().value})}
fp.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Jo("EXPLICIT_ABORT");};
fp.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new dp(a),this.i.set(a,b));return b};
function np(a){this.h=a}
r=np.prototype;r.count=function(a){return Yo(this.h.count(a))};
r.delete=function(a){return pp(this,{query:a},function(b){return b.delete().then(function(){return mp(b)})})};
r.get=function(a){return Yo(this.h.get(a))};
r.keyPath=function(){return this.h.keyPath};
r.unique=function(){return this.h.unique};
function pp(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return op(a).then(function(d){return Zo(d,c)})}
function qp(a,b){this.request=a;this.cursor=b}
function op(a){return Yo(a).then(function(b){return b?new qp(a,b):null})}
function mp(a){a.cursor.continue(void 0);return op(a.request)}
qp.prototype.delete=function(){return Yo(this.cursor.delete()).then(function(){})};
qp.prototype.getValue=function(){return this.cursor.value};
qp.prototype.update=function(a){return Yo(this.cursor.update(a))};function rp(a,b,c){return new Promise(function(d,e){function f(){p||(p=new ap(g.result,{closed:n}));return p}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Zd,k=c.blocking,l=c.rf,m=c.upgrade,n=c.closed,p;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&yo("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:Ao(a)});var v=f(),x=new fp(g.transaction);
m&&m(v,function(A){return t.oldVersion<A&&t.newVersion>=A},x);
x.done.catch(function(A){e(A)})}catch(A){e(A)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){yo("IDB_UNEXPECTEDLY_CLOSED",{dbName:Ao(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function sp(a,b,c){c=c===void 0?{}:c;return rp(a,b,c)}
function tp(a,b){b=b===void 0?{}:b;var c,d,e,f;return B(function(g){if(g.h==1)return xa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Zd)&&c.addEventListener("blocked",function(){e()}),g.yield(Xo(c),4);
if(g.h!=2)return ya(g,0);f=za(g);throw No(f,a,"",-1);})}
;function up(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}
up.prototype.i=function(a,b,c){c=c===void 0?{}:c;return sp(a,b,c)};
up.prototype.delete=function(a){a=a===void 0?{}:a;return tp(this.name,a)};
function vp(a,b){return new Jo("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function wp(a,b){if(!b)throw Oo("openWithToken",Ao(a.name));return a.open()}
up.prototype.open=function(){function a(){var f,g,h,k,l,m,n,p,t,v;return B(function(x){switch(x.h){case 1:return g=(f=Error().stack)!=null?f:"",xa(x,2),x.yield(c.i(c.name,c.options.version,e),4);case 4:for(var A=h=x.i,H=c.options,K=[],aa=y(Object.keys(H.Gb)),da=aa.next();!da.done;da=aa.next()){da=da.value;var Qa=H.Gb[da],Sb=Qa.Ve===void 0?Number.MAX_VALUE:Qa.Ve;!(A.h.version>=Qa.Nb)||A.h.version>=Sb||A.h.objectStoreNames.contains(da)||K.push(da)}k=K;if(k.length===0){x.A(5);break}l=Object.keys(c.options.Gb);
m=h.objectStoreNames();if(c.u<Dm("ytidb_reopen_db_retries",0))return c.u++,h.close(),xo(new Jo("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());if(!(c.o<Dm("ytidb_remake_db_retries",1))){x.A(6);break}c.o++;return x.yield(c.delete(),7);case 7:return xo(new Jo("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());case 6:throw new Ko(m,l);case 5:return x.return(h);case 2:n=za(x);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){x.A(8);break}return x.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:p=x.i;t=p.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw p.close(),c.j=!1,vp(c,t);return x.return(p);case 8:throw b(),n instanceof
Error&&!T("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),No(n,c.name,"",(v=c.options.version)!=null?v:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw vp(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,rf:b,upgrade:this.options.upgrade};return this.h=d=a()};var xp=new up("YtIdbMeta",{Gb:{databases:{Nb:1}},upgrade:function(a,b){b(1)&&cp(a,"databases",{keyPath:"actualName"})}});
function yp(a,b){var c;return B(function(d){if(d.h==1)return d.yield(wp(xp,b),2);c=d.i;return d.return(bp(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Yo(f.h.put(a,void 0)).then(function(){})})}))})}
function zp(a,b){var c;return B(function(d){if(d.h==1)return a?d.yield(wp(xp,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Ap(a,b){var c,d;return B(function(e){return e.h==1?(c=[],e.yield(wp(xp,b),2)):e.h!=3?(d=e.i,e.yield(bp(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return lp(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return mp(g)})}),3)):e.return(c)})}
function Bp(a){return Ap(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function Cp(a,b,c){return Ap(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function Dp(a){var b,c;return B(function(d){if(d.h==1)return b=Fn("YtIdbMeta hasAnyMeta other"),d.yield(Ap(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var Ep,Fp=new function(){}(new function(){});
function Gp(){var a,b,c,d;return B(function(e){switch(e.h){case 1:a=po();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Bo)f=/WebKit\/([0-9]+)/.exec(Uc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Uc()),f=!(f&&parseInt(f[1],10)>=602));if(f||gd)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
xa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(yp(d,Fp),4);case 4:return e.yield(zp("yt-idb-test-do-not-use",Fp),5);case 5:return e.return(!0);case 2:return za(e),e.return(!1)}})}
function Hp(){if(Ep!==void 0)return Ep;so=!0;return Ep=Gp().then(function(a){so=!1;var b;if((b=oo())!=null&&b.h){var c;b={hasSucceededOnce:((c=po())==null?void 0:c.hasSucceededOnce)||a};var d;(d=oo())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Ip(){return F("ytglobal.idbToken_")||void 0}
function Jp(){var a=Ip();return a?Promise.resolve(a):Hp().then(function(b){(b=b?Fp:void 0)&&E("ytglobal.idbToken_",b);return b})}
;var Kp=0;function Lp(a,b){Kp||(Kp=Lj.pa(function(){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:return h.yield(Jp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;xa(h,3);return h.yield(Cp(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return h.yield(tp(f.actualName),7);case 7:return h.yield(zp(f.actualName,c),6);case 6:ya(h,4);break;case 3:g=za(h),xo(g),d=!1;case 4:Lj.qa(Kp),Kp=0,d&&Lp(a,b),h.h=0}})}))}
function Mp(){var a;return B(function(b){return b.h==1?b.yield(Jp(),2):(a=b.i)?b.return(Dp(a)):b.return(!1)})}
new nj;function Np(a){if(!En())throw a=new Jo("AUTH_INVALID",{dbName:a}),xo(a),a;var b=Fn();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Op(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Jp(),2);case 2:g=m.i;if(!g)throw h=Oo("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),xo(h),h;zo(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Np(a);xa(m,3);return m.yield(yp(k,g),5);case 5:return m.yield(sp(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=za(m),xa(m,7),m.yield(zp(k.actualName,
g),9);case 9:ya(m,8);break;case 7:za(m);case 8:throw l;}})}
function Pp(a,b,c){c=c===void 0?{}:c;return Op(a,b,!1,c)}
function Qp(a,b,c){c=c===void 0?{}:c;return Op(a,b,!0,c)}
function Rp(a,b){b=b===void 0?{}:b;var c,d;return B(function(e){if(e.h==1)return e.yield(Jp(),2);if(e.h!=3){c=e.i;if(!c)return e.return();zo(a);d=Np(a);return e.yield(tp(d.actualName,b),3)}return e.yield(zp(d.actualName,c),0)})}
function Sp(a,b,c){a=a.map(function(d){return B(function(e){return e.h==1?e.yield(tp(d.actualName,b),2):e.yield(zp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Tp(){var a=a===void 0?{}:a;var b,c;return B(function(d){if(d.h==1)return d.yield(Jp(),2);if(d.h!=3){b=d.i;if(!b)return d.return();zo("LogsDatabaseV2");return d.yield(Bp(b),3)}c=d.i;return d.yield(Sp(c,a,b),0)})}
function Up(a,b){b=b===void 0?{}:b;var c;return B(function(d){if(d.h==1)return d.yield(Jp(),2);if(d.h!=3){c=d.i;if(!c)return d.return();zo(a);return d.yield(tp(a,b),3)}return d.yield(zp(a,c),0)})}
;function Vp(a,b){up.call(this,a,b);this.options=b;zo(a)}
w(Vp,up);function Wp(a,b){var c;return function(){c||(c=new Vp(a,b));return c}}
Vp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Qp:Pp)(a,b,Object.assign({},c))};
Vp.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Up:Rp)(this.name,a)};
function Xp(a,b){return Wp(a,b)}
;var Yp={},Zp=Xp("ytGcfConfig",{Gb:(Yp.coldConfigStore={Nb:1},Yp.hotConfigStore={Nb:1},Yp),shared:!1,upgrade:function(a,b){b(1)&&(jp(cp(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),jp(cp(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function $p(a){return wp(Zp(),a)}
function aq(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:V()},g.yield($p(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(ep(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function bq(a,b,c,d){var e,f,g;return B(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:V()},h.yield($p(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(ep(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function cq(a){var b,c;return B(function(d){return d.h==1?d.yield($p(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(bp(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return pp(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function dq(a){var b,c;return B(function(d){return d.h==1?d.yield($p(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(bp(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return pp(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function eq(){G.call(this);this.i=[];this.h=[];var a=F("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(z(a)),this.h=a):(this.h=[],E("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(eq,G);eq.prototype.ba=function(){for(var a=y(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;G.prototype.ba.call(this)};function fq(){this.h=0;this.i=new eq}
function gq(){var a;return(a=F("yt.gcf.config.hotConfigGroup"))!=null?a:S("RAW_HOT_CONFIG_GROUP")}
function hq(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:if(!T("start_client_gcf")){g.A(0);break}c&&(a.j=c,E("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=Ip();if(!d){g.A(3);break}if(c){g.A(4);break}return g.yield(dq(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(aq(c,b,d),3);case 3:if(c)for(var h=c,k=y(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function iq(a,b,c){var d,e,f,g;return B(function(h){if(h.h==1){if(!T("start_client_gcf"))return h.A(0);a.coldHashData=b;E("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Ip())?c?h.A(4):h.yield(cq(d),5):h.A(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.A(0);g=c.configData;return h.yield(bq(c,b,g,d),0)})}
function jq(){if(!fq.instance){var a=new fq;fq.instance=a}a=fq.instance;var b=V()-a.h;if(!(a.h!==0&&b<Dm("send_config_hash_timer"))){b=F("yt.gcf.config.coldConfigData");var c=F("yt.gcf.config.hotHashData"),d=F("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=V());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
fq.prototype.o=function(a){this.hotHashData=a;E("yt.gcf.config.hotHashData",this.hotHashData||null)};function kq(){return"INNERTUBE_API_KEY"in bm&&"INNERTUBE_API_VERSION"in bm}
function lq(){return{innertubeApiKey:S("INNERTUBE_API_KEY"),innertubeApiVersion:S("INNERTUBE_API_VERSION"),ye:S("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),wd:S("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Eh:S("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:S("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ae:S("INNERTUBE_CONTEXT_HL"),ze:S("INNERTUBE_CONTEXT_GL"),Be:S("INNERTUBE_HOST_OVERRIDE")||"",Ce:!!S("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Fh:!!S("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:S("SERIALIZED_CLIENT_CONFIG_DATA")}}
function mq(a){var b={client:{hl:a.Ae,gl:a.ze,clientName:a.wd,clientVersion:a.innertubeContextClientVersion,configInfo:a.ye}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=D.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=S("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Em();c.length>0&&(b.request={internalExperimentFlags:c});c=a.wd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=hn()}(d=F("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(T("web_log_memory_total_kbytes")&&((e=D.navigator)==null?0:e.deviceMemory)){var f;e=(f=D.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Cn())&&b&&(b.client.connectionType=a);T("web_log_effective_connection_type")&&
(a=Dn())&&b&&(b.client.effectiveConnectionType=a);T("start_client_gcf")&&(e=jq())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));S("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:S("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=S("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=S("INNERTUBE_CONTEXT");var g;if(T("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=y(Object.entries(pm(S("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=y(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function nq(a,b,c){c=c===void 0?{}:c;var d={};S("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":S("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||S("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||S("AUTHORIZATION");b||(a?b="Bearer "+F("gapi.auth.getToken")().th:(a=ln(kn()),T("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var oq=typeof TextEncoder!=="undefined"?new TextEncoder:null,pq=oq?function(a){return oq.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var qq={next:"wn_s",browse:"br_s",search:"sr_s",reel:"r_wrs",player:"ps_s"},rq={next:"wn_r",browse:"br_r",search:"sr_r",reel:"r_wrr",player:"ps_r"};function sq(a,b){this.version=a;this.args=b}
sq.prototype.serialize=function(){return{version:this.version,args:this.args}};function tq(a,b){this.topic=a;this.h=b}
tq.prototype.toString=function(){return this.topic};var uq=F("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.dc;O.prototype.publish=O.prototype.sb;O.prototype.clear=O.prototype.clear;E("ytPubsub2Pubsub2Instance",uq);var vq=F("ytPubsub2Pubsub2SubscribedKeys")||{};E("ytPubsub2Pubsub2SubscribedKeys",vq);var wq=F("ytPubsub2Pubsub2TopicToKeys")||{};E("ytPubsub2Pubsub2TopicToKeys",wq);var xq=F("ytPubsub2Pubsub2IsAsync")||{};E("ytPubsub2Pubsub2IsAsync",xq);
E("ytPubsub2Pubsub2SkipSubKey",null);function yq(a,b){var c=zq();c&&c.publish.call(c,a.toString(),a,b)}
function Aq(a){var b=Bq,c=zq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=F("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(vq[d])try{if(f&&b instanceof tq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Od){var l=new h;h.Od=l.version}var m=h.Od}catch(A){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var p=k.args,t=p.length;if(t>0){var v=Array(t);for(k=0;k<t;k++)v[k]=p[k];var x=v}else x=[];f=n.call(m,h,x)}catch(A){throw A.message="yt.pubsub2.Data.deserialize(): "+A.message,A;}}catch(A){throw A.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+A.message,A;}a.call(window,f)}catch(A){hm(A)}},xq[b.toString()]?F("yt.scheduler.instance")?Lj.pa(g):Am(g,0):g())});
vq[d]=!0;wq[b.toString()]||(wq[b.toString()]=[]);wq[b.toString()].push(d);return d}
function Cq(){var a=Dq,b=Aq(function(c){a.apply(void 0,arguments);Eq(b)});
return b}
function Eq(a){var b=zq();b&&(typeof a==="number"&&(a=[a]),Nb(a,function(c){b.unsubscribeByKey(c);delete vq[c]}))}
function zq(){return F("ytPubsub2Pubsub2Instance")}
;function Fq(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&yq("meta_logging_csi_event",{timerName:a,Yh:b})}
;var Gq=void 0,Hq=void 0;function Iq(){Hq||(Hq=Al(S("WORKER_SERIALIZATION_URL")));return Hq||void 0}
function Jq(){var a=Iq();Gq||a===void 0||(Gq=new Worker(kb(a),void 0));return Gq}
;var Kq=Dm("max_body_size_to_compress",5E5),Lq=Dm("min_body_size_to_compress",500),Mq=!0,Nq=0,Oq=0,Pq=Dm("compression_performance_threshold_lr",250),Qq=Dm("slow_compressions_before_abandon_count",4),Rq=!1,Sq=new Map,Tq=1,Uq=!0;function Vq(){if(typeof Worker==="function"&&Iq()&&!Rq){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Sq.get(c.key);d&&(Wq(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Sq.delete(c.key))}},b=Jq();
b&&(b.addEventListener("message",a),b.onerror=function(){Sq.clear()},Rq=!0)}}
function Xq(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:V(),ticks:{},infos:{}};if(Mq)try{var g=Yq(b);if(g!=null&&(g>Kq||g<Lq))d(a,c);else{if(T("gzip_gel_with_worker")&&(T("initial_gzip_use_main_thread")&&!Uq||!T("initial_gzip_use_main_thread"))){Rq||Vq();var h=Jq();if(h&&!e){Sq.set(Tq,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Tq});Tq++;return}}var k=yl(pq(b));Wq(k,f,a,c,d)}}catch(l){im(l),d(a,c)}else d(a,c)}
function Wq(a,b,c,d,e){Uq=!1;var f=V();b.ticks.gelc=f;Oq++;T("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Pq&&(Nq++,T("abandon_compression_after_N_slow_zips")?Oq===Dm("compression_disable_point")&&Nq>Qq&&(Mq=!1):Mq=!1);Zq(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function $q(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=V(),e={startTime:d,ticks:{},infos:{}},f=b?F("yt.logging.gzipForFetch",!1):!0;if(Mq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=Yq(g);if(h!=null&&(h>Kq||h<Lq))return a;c=b?{level:1}:void 0;f=yl(pq(g),c);var k=V();e.ticks.gelc=k;if(b){Oq++;if((T("disable_compression_due_to_performance_degredation")||T("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Pq)if(Nq++,T("abandon_compression_after_N_slow_zips")||T("abandon_compression_after_N_slow_zips_lr")){b=Nq/Oq;var l=Qq/Dm("compression_disable_point");Oq>0&&Oq%Dm("compression_disable_point")===0&&b>=l&&(Mq=!1)}else Mq=!1;Zq(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return im(m),a}}else return a}
function Yq(a){try{return(new Blob(a.split(""))).size}catch(b){return im(b),null}}
function Zq(a){T("gel_compression_csi_killswitch")||!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||Fq("gel_compression",a,{sampleRate:.1})}
;function ar(a){a=Object.assign({},a);delete a.Authorization;var b=dg();if(b){var c=new Pj;c.update(S("INNERTUBE_API_KEY"));c.update(b);a.hash=pd(c.digest(),3)}return a}
;var br;function cr(){br||(br=new no("yt.innertube"));return br}
function dr(a,b,c,d){if(d)return null;d=cr().get("nextId",!0)||1;var e=cr().get("requests",!0)||{};e[d]={method:a,request:b,authState:ar(c),requestTime:Math.round(V())};cr().set("nextId",d+1,86400,!0);cr().set("requests",e,86400,!0);return d}
function er(a){var b=cr().get("requests",!0)||{};delete b[a];cr().set("requests",b,86400,!0)}
function fr(a){var b=cr().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(V())-d.requestTime<6E4)){var e=d.authState,f=ar(nq(!1));rg(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(V())),gr(a,d.method,e,{}));delete b[c]}}cr().set("requests",b,86400,!0)}}
;function hr(a){this.fc=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.yb=function(){};
this.now=Date.now;this.Rb=!1;var b;this.Md=(b=a.Md)!=null?b:100;var c;this.Hd=(c=a.Hd)!=null?c:1;var d;this.Fd=(d=a.Fd)!=null?d:2592E6;var e;this.Ed=(e=a.Ed)!=null?e:12E4;var f;this.Gd=(f=a.Gd)!=null?f:5E3;var g;this.V=(g=a.V)!=null?g:void 0;this.lc=!!a.lc;var h;this.jc=(h=a.jc)!=null?h:.1;var k;this.zc=(k=a.zc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.yb&&(this.yb=a.yb);a.Rb&&(this.Rb=a.Rb);a.fc&&(this.fc=a.fc);this.W=a.W;this.Ca=a.Ca;this.ga=a.ga;this.fa=a.fa;this.sendFn=a.sendFn;
this.Wc=a.Wc;this.Tc=a.Tc;ir(this)&&(!this.W||this.W("networkless_logging"))&&jr(this)}
function jr(a){ir(a)&&!a.Rb&&(a.h=!0,a.lc&&Math.random()<=a.jc&&a.ga.be(a.V),kr(a),a.fa.ta()&&a.cc(),a.fa.listen(a.Wc,a.cc.bind(a)),a.fa.listen(a.Tc,a.pd.bind(a)))}
r=hr.prototype;r.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(ir(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ga.set(d,this.V).then(function(e){d.id=e;c.fa.ta()&&lr(c,d)}).catch(function(e){lr(c,d);
mr(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(ir(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.ta()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(k.h==1)return k.yield(d.ga.set(e,d.V).catch(function(l){mr(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ga.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
mr(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(ir(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ga.xb(d.id,c.V):e=!0;c.fa.mb&&c.W&&c.W("vss_network_hint")&&c.fa.mb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ga.set(d,this.V).then(function(g){d.id=g;e&&c.ga.xb(d.id,c.V)}).catch(function(g){mr(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.cc=function(){var a=this;if(!ir(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ca.pa(function(){var b;return B(function(c){if(c.h==1)return c.yield(a.ga.td("NEW",a.V),2);if(c.h!=3)return b=c.i,b?c.yield(lr(a,b),3):(a.pd(),c.return());a.i&&(a.i=0,a.cc());c.h=0})},this.Md))};
r.pd=function(){this.Ca.qa(this.i);this.i=0};
function lr(a,b){var c;return B(function(d){switch(d.h){case 1:if(!ir(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.A(2);break}return d.yield(a.ga.Ge(b.id,a.V),3);case 3:(c=d.i)||a.yb(Error("The request cannot be found in the database."));case 2:if(nr(a,b,a.Fd)){d.A(4);break}a.yb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.A(5);break}return d.yield(a.ga.xb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=or(a,
b));if(!b){d.A(0);break}if(!b.skipRetry||b.id===void 0){d.A(8);break}return d.yield(a.ga.xb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function or(a,b){if(!ir(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.h){case 1:g=pr(f);(h=qr(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.zc)){m.A(2);break}if(!a.fa.Dc){m.A(3);break}return m.yield(a.fa.Dc(),3);case 3:if(a.fa.ta()){m.A(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.A(6);
break}return m.yield(a.ga.Xc(b.id,a.V,!1),6);case 6:return m.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.zc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.A(8);break}return b.sendCount<a.Hd?m.yield(a.ga.Xc(b.id,a.V,!0,h?!1:void 0),12):m.yield(a.ga.xb(b.id,a.V),8);case 12:a.Ca.pa(function(){a.fa.ta()&&a.cc()},a.Gd);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.A(2):h.yield(a.ga.xb(b.id,a.V),2);a.fa.mb&&a.W&&a.W("vss_network_hint")&&a.fa.mb(!0);d(e,f);h.h=0})};
return b}
function nr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function kr(a){if(!ir(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ga.td("QUEUED",a.V).then(function(b){b&&!nr(a,b,a.Ed)?a.Ca.pa(function(){return B(function(c){if(c.h==1)return b.id===void 0?c.A(2):c.yield(a.ga.Xc(b.id,a.V),2);kr(a);c.h=0})}):a.fa.ta()&&a.cc()})}
function mr(a,b){a.Rd&&!a.fa.ta()?a.Rd(b):a.handleError(b)}
function ir(a){return!!a.V||a.fc}
function pr(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function qr(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var rr;
function sr(){if(rr)return rr();var a={};rr=Xp("LogsDatabaseV2",{Gb:(a.LogsRequestsStore={Nb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&cp(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),jp(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return rr()}
;function tr(a){return wp(sr(),a)}
function ur(a,b){var c,d,e,f;return B(function(g){if(g.h==1)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(tr(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:S("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(ep(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=V();vr(c);return g.return(f)})}
function wr(a,b){var c,d,e,f,g,h,k,l;return B(function(m){if(m.h==1)return c={startTime:V(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(tr(b),2);if(m.h!=3)return d=m.i,e=S("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,V()],h=IDBKeyRange.bound(f,g),k="prev",T("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield(bp(d,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(n){return pp(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(p){p.getValue()&&(l=p.getValue(),a==="NEW"&&(l.status="QUEUED",p.update(l)))})}),3);
c.ticks.tc=V();vr(c);return m.return(l)})}
function xr(a,b){var c;return B(function(d){if(d.h==1)return d.yield(tr(b),2);c=d.i;return d.return(bp(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Yo(f.h.put(g,void 0)).then(function(){return g})})}))})}
function yr(a,b,c,d){c=c===void 0?!0:c;var e;return B(function(f){if(f.h==1)return f.yield(tr(b),2);e=f.i;return f.return(bp(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),Yo(h.h.put(k,void 0)).then(function(){return k})):So.resolve(void 0)})}))})}
function zr(a,b){var c;return B(function(d){if(d.h==1)return d.yield(tr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Ar(a){var b,c;return B(function(d){if(d.h==1)return d.yield(tr(a),2);b=d.i;c=V()-2592E6;return d.yield(bp(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return lp(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return mp(f)})})}),0)})}
function Br(){B(function(a){return a.yield(Tp(),0)})}
function vr(a){T("nwl_csi_killswitch")||Fq("networkless_performance",a,{sampleRate:1})}
;var Cr={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,producerProjectDiskInsufficientExportFailure:516,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,
miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,
shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514,producerProjectElementModified:515};var Dr={},Er=Xp("ServiceWorkerLogsDatabase",{Gb:(Dr.SWHealthLog={Nb:1},Dr),shared:!0,upgrade:function(a,b){b(1)&&jp(cp(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Fr(a){return wp(Er(),a)}
function Gr(a){var b,c;B(function(d){if(d.h==1)return d.yield(Fr(a),2);b=d.i;c=V()-2592E6;return d.yield(bp(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return lp(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return mp(f)})})}),0)})}
function Hr(a){var b;return B(function(c){if(c.h==1)return c.yield(Fr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Ir={},Jr=0;function Kr(a){var b=b===void 0?{}:b;var c=new Image,d=""+Jr++;Ir[d]=c;c.onload=c.onerror=function(){delete Ir[d]};
b.Uh&&(c.referrerPolicy="no-referrer");c.src=a}
;var Lr;function Mr(){Lr||(Lr=new no("yt.offline"));return Lr}
function Nr(a){if(T("offline_error_handling")){var b=Mr().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Mr().set("errors",b,2592E3,!0)}}
;function Or(){this.h=new Map;this.i=!1}
function Pr(){if(!Or.instance){var a=F("yt.networkRequestMonitor.instance")||new Or;E("yt.networkRequestMonitor.instance",a);Or.instance=a}return Or.instance}
Or.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Or.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
Or.prototype.removeParams=function(a){return a.split("?")[0]};
Or.prototype.removeParams=Or.prototype.removeParams;Or.prototype.isEndpointCFR=Or.prototype.isEndpointCFR;Or.prototype.requestComplete=Or.prototype.requestComplete;Or.getInstance=Pr;function Qr(){Uh.call(this);var a=this;this.j=!1;this.h=Kj();this.h.listen("networkstatus-online",function(){if(a.j&&T("offline_error_handling")){var b=Mr().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new U(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;hm(d)}Mr().set("errors",{},2592E3,!0)}}})}
w(Qr,Uh);function Rr(){if(!Qr.instance){var a=F("yt.networkStatusManager.instance")||new Qr;E("yt.networkStatusManager.instance",a);Qr.instance=a}return Qr.instance}
r=Qr.prototype;r.ta=function(){return this.h.ta()};
r.mb=function(a){this.h.h=a};
r.ue=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
r.ke=function(){this.j=!0};
r.listen=function(a,b){return this.h.listen(a,b)};
r.Dc=function(a){a=Ij(this.h,a);a.then(function(b){T("use_cfr_monitor")&&Pr().requestComplete("generate_204",b)});
return a};
Qr.prototype.sendNetworkCheckRequest=Qr.prototype.Dc;Qr.prototype.listen=Qr.prototype.listen;Qr.prototype.enableErrorFlushing=Qr.prototype.ke;Qr.prototype.getWindowStatus=Qr.prototype.ue;Qr.prototype.networkStatusHint=Qr.prototype.mb;Qr.prototype.isNetworkAvailable=Qr.prototype.ta;Qr.getInstance=Rr;function Sr(a){a=a===void 0?{}:a;Uh.call(this);var b=this;this.h=this.u=0;this.j=Rr();var c=F("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Tr(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Tr(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Vh(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Vh(b,"publicytnetworkstatus-offline")})))}
w(Sr,Uh);Sr.prototype.ta=function(){var a=F("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Sr.prototype.mb=function(a){var b=F("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Sr.prototype.Dc=function(a){var b=this,c;return B(function(d){c=F("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return T("skip_network_check_if_cfr")&&Pr().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.mb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.ta())})):c?d.return(c(a)):d.return(!0)})};
function Tr(a,b){a.rateLimit?a.h?(Lj.qa(a.u),a.u=Lj.pa(function(){a.o!==b&&(Vh(a,b),a.o=b,a.h=V())},a.rateLimit-(V()-a.h))):(Vh(a,b),a.o=b,a.h=V()):Vh(a,b)}
;var Ur;function Vr(){var a=hr.call;Ur||(Ur=new Sr({Kh:!0,Bh:!0}));a.call(hr,this,{ga:{be:Ar,xb:zr,td:wr,Ge:xr,Xc:yr,set:ur},fa:Ur,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;im(new U(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else hm(b)},
yb:im,sendFn:Wr,now:V,Rd:Nr,Ca:mo(),Wc:"publicytnetworkstatus-online",Tc:"publicytnetworkstatus-offline",lc:!0,jc:.1,zc:Dm("potential_esf_error_limit",10),W:T,Rb:!(En()&&Xr())});this.j=new nj;T("networkless_immediately_drop_all_requests")&&Br();Up("LogsDatabaseV2")}
w(Vr,hr);function Yr(){var a=F("yt.networklessRequestController.instance");a||(a=new Vr,E("yt.networklessRequestController.instance",a),T("networkless_logging")&&Jp().then(function(b){a.V=b;jr(a);a.j.resolve();a.lc&&Math.random()<=a.jc&&a.V&&Gr(a.V);T("networkless_immediately_drop_sw_health_store")&&Zr(a)}));
return a}
Vr.prototype.writeThenSend=function(a,b){b||(b={});b=$r(a,b);En()||(this.h=!1);hr.prototype.writeThenSend.call(this,a,b)};
Vr.prototype.sendThenWrite=function(a,b,c){b||(b={});b=$r(a,b);En()||(this.h=!1);hr.prototype.sendThenWrite.call(this,a,b,c)};
Vr.prototype.sendAndWrite=function(a,b){b||(b={});b=$r(a,b);En()||(this.h=!1);hr.prototype.sendAndWrite.call(this,a,b)};
Vr.prototype.awaitInitialization=function(){return this.j.promise};
function Zr(a){var b;B(function(c){if(!a.V)throw b=Oo("clearSWHealthLogsDb"),b;return c.return(Hr(a.V).catch(function(d){a.handleError(d)}))})}
function Wr(a,b,c,d){d=d===void 0?!1:d;b=T("web_fp_via_jspb")?Object.assign({},b):b;T("use_cfr_monitor")&&as(a,b);if(T("use_request_time_ms_header"))b.headers&&tm(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(V())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Im(a,void 0,"POST",f,void 0);else if(S("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Im(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new qc({url:a});if(k.u?typeof k.i!=="string"||k.i.length===0?0:{version:3,he:k.i,Yd:pc(k.j,"act=1","ri=1",rc(k))}:k.M&&{version:4,he:pc(k.j,"dct=1","suid="+k.o,""),Yd:pc(k.j,"act=1","ri=1","suid="+k.o)}){var l=bc(cc(5,a)),m;if(!(m=!l||!l.endsWith("/aclk"))){var n=a.search(lc),p=kc(a,0,"ri",n);if(p<0)var t=null;else{var v=a.indexOf("&",p);if(v<0||v>n)v=n;t=decodeURIComponent(a.slice(p+3,v!==-1?v:0).replace(/\+/g," "))}m=t!=="1"}var x=
!m;break b}}catch(H){}x=!1}if(x){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var A=!0;break b}}catch(H){}A=!1}c=A?!0:!1}else c=!1;c||Kr(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Xq(a,b.postBody,b,Mm,d)):Xq(a,JSON.stringify(b.postParams),b,Lm,d):Mm(a,b)}
function $r(a,b){T("use_event_time_ms_header")&&tm(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(V())));return b}
function as(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Pr().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Pr().requestComplete(a,!0);d(e,f)}}
function Xr(){return dc(document.location.toString())!=="www.youtube-nocookie.com"}
;var bs=!1,cs=D.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:bs};E("ytNetworklessLoggingInitializationOptions",cs);function ds(){var a;B(function(b){if(b.h==1)return b.yield(Jp(),2);a=b.i;if(!a||!En()&&!T("nwl_init_require_datasync_id_killswitch")||!Xr())return b.A(0);bs=!0;cs.isNwlInitialized=bs;return b.yield(Yr().awaitInitialization(),0)})}
;function es(a){var b=this;this.config_=null;a?this.config_=a:kq()&&(this.config_=lq());Hn(function(){fr(b)},5E3)}
es.prototype.isReady=function(){!this.config_&&kq()&&(this.config_=lq());return!!this.config_};
function gr(a,b,c,d){function e(n){n=n===void 0?!1:n;var p;if(d.retry&&h!="www.youtube-nocookie.com"&&(n||T("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(p=dr(b,c,l,k)),p)){var t=g.onSuccess,v=g.onFetchSuccess;g.onSuccess=function(H,K){er(p);t(H,K)};
c.onFetchSuccess=function(H,K){er(p);v(H,K)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Yr().writeThenSend(m,g):Yr().sendAndWrite(m,g);
else if(d.compress){var x=!d.networklessOptions.writeThenSend;if(g.postBody){var A=g.postBody;typeof A!=="string"&&(A=JSON.stringify(g.postBody));Xq(m,A,g,Mm,x)}else Xq(m,JSON.stringify(g.postParams),g,Lm,x)}else T("web_all_payloads_via_jspb")?Mm(m,g):Lm(m,g)}catch(H){if(H.name==="InvalidAccessError")p&&(er(p),p=0),im(Error("An extension is blocking network request."));else throw H;}p&&Hn(function(){fr(a)},5E3)}
!S("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&im(new U("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new U("innertube xhrclient not ready",b,c,d);hm(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,p){if(d.onSuccess)d.onSuccess(p)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,p){if(d.onError)d.onError(p)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Be)&&(h=f);var k=a.config_.Ce||!1,l=nq(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=rm(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(F("ytNetworklessLoggingInitializationOptions")?cs.isNwlInitialized:bs)?Hp().then(function(n){e(n)}):e(!1)}
;var gs=0,hs=id?"webkit":hd?"moz":fd?"ms":ed?"o":"";E("ytDomDomGetNextId",F("ytDomDomGetNextId")||function(){return++gs});var is={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function js(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in is||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function ks(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
js.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
js.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
js.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ng=D.ytEventsEventsListeners||{};E("ytEventsEventsListeners",ng);var ls=D.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",ls);
function ms(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mg(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&rg(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function ns(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=ms(a,b,c,d);if(e)return e;e=++ls.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new js(h);if(!Bg(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new js(h);
h.currentTarget=a;return c.call(a,h)};
g=gm(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ps()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ng[e]=[a,b,c,g,d];return e}
function qs(a){a&&(typeof a=="string"&&(a=[a]),Nb(a,function(b){if(b in ng){var c=ng[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ps()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ng[b]}}))}
var ps=ji(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function rs(a){this.G=a;this.h=null;this.o=0;this.D=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.U=ns(window,"mousemove",Xa(this.Y,this));a=Xa(this.P,this);typeof a==="function"&&(a=gm(a));this.Z=window.setInterval(a,25)}
bb(rs,G);rs.prototype.Y=function(a){a.h===void 0&&ks(a);var b=a.h;a.i===void 0&&ks(a);this.h=new jg(b,a.i)};
rs.prototype.P=function(){if(this.h){var a=V();if(this.o!=0){var b=this.D,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.G();this.u=d}this.o=a;this.D=this.h;this.j=(this.j+1)%4}};
rs.prototype.ba=function(){window.clearInterval(this.Z);qs(this.U)};var ss={};
function xs(a){var b=a===void 0?{}:a;a=b.Se===void 0?!1:b.Se;b=b.le===void 0?!0:b.le;if(F("_lact",window)==null){var c=parseInt(S("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;E("_lact",c,window);E("_fact",c,window);c==-1&&ys();ns(document,"keydown",ys);ns(document,"keyup",ys);ns(document,"mousedown",ys);ns(document,"mouseup",ys);a?ns(window,"touchmove",function(){zs("touchmove",200)},{passive:!0}):(ns(window,"resize",function(){zs("resize",200)}),b&&ns(window,"scroll",function(){zs("scroll",200)}));
new rs(function(){zs("mouse",100)});
ns(document,"touchstart",ys,{passive:!0});ns(document,"touchend",ys,{passive:!0})}}
function zs(a,b){ss[a]||(ss[a]=!0,Lj.pa(function(){ys();ss[a]=!1},b))}
function ys(){F("_lact",window)==null&&xs();var a=Date.now();E("_lact",a,window);F("_fact",window)==-1&&E("_fact",a,window);(a=F("ytglobal.ytUtilActivityCallback_"))&&a()}
function As(){var a=F("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var Bs=D.ytPubsubPubsubInstance||new O,Cs=D.ytPubsubPubsubSubscribedKeys||{},Ds=D.ytPubsubPubsubTopicToKeys||{},Es=D.ytPubsubPubsubIsSynchronous||{};function Fs(a,b){var c=Gs();if(c&&b){var d=c.subscribe(a,function(){function e(){Cs[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{Es[a]?e():Am(e,0)}catch(g){hm(g)}},void 0);
Cs[d]=!0;Ds[a]||(Ds[a]=[]);Ds[a].push(d);return d}return 0}
function Hs(a){var b=Gs();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Nb(a,function(c){b.unsubscribeByKey(c);delete Cs[c]}))}
function Is(a,b){var c=Gs();c&&c.publish.apply(c,arguments)}
function Js(a){var b=Gs();if(b)if(b.clear(a),a)Ks(a);else for(var c in Ds)Ks(c)}
function Gs(){return D.ytPubsubPubsubInstance}
function Ks(a){Ds[a]&&(a=Ds[a],Nb(a,function(b){Cs[b]&&delete Cs[b]}),a.length=0)}
O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.dc;O.prototype.publish=O.prototype.sb;O.prototype.clear=O.prototype.clear;E("ytPubsubPubsubInstance",Bs);E("ytPubsubPubsubTopicToKeys",Ds);E("ytPubsubPubsubIsSynchronous",Es);E("ytPubsubPubsubSubscribedKeys",Cs);var Ls=Symbol("injectionDeps");function Ms(a){this.name=a}
Ms.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Ns(a){this.key=a}
function Os(a){return new Ns(a)}
function Ps(){this.i=new Map;this.j=new Map;this.h=new Map}
function Qs(a,b){a.i.set(b.pb,b);var c=a.j.get(b.pb);if(c)try{c.Th(a.resolve(b.pb))}catch(d){c.Rh(d)}}
Ps.prototype.resolve=function(a){return a instanceof Ns?Rs(this,a.key,[],!0):Rs(this,a,[])};
function Rs(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.hd!==void 0)var e=d.hd;else if(d.zf)e=d[Ls]?Ss(a,d[Ls],c):[],e=d.zf.apply(d,z(e));else if(d.Fc){e=d.Fc;var f=e[Ls]?Ss(a,e[Ls],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(z(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Xh||a.h.set(b,e);return e}
function Ss(a,b,c){return b?b.map(function(d){return d instanceof Ns?Rs(a,d.key,c,!0):Rs(a,d,c)}):[]}
;var Ts;function Us(){Ts||(Ts=new Ps);return Ts}
;var Vs=window;function Ws(){var a,b;return"h5vcc"in Vs&&((a=Vs.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Vs.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Vs&&Vs.performance.mark&&Vs.performance.measure?2:0}
function Xs(a){var b=Ws();switch(b){case 1:Vs.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Vs.performance.mark(a+"-start");break;case 0:break;default:yb(b,"unknown trace type")}}
function Ys(a){var b=Ws();switch(b){case 1:Vs.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";Vs.performance.mark(c);Vs.performance.measure(a,b,c);break;case 0:break;default:yb(b,"unknown trace type")}}
;var Zs=T("web_enable_lifecycle_monitoring")&&Ws()!==0,$s=T("web_enable_lifecycle_monitoring");function at(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function bt(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?mo():d;this.j=c;this.scheduler=d;this.i=new nj;this.h=a;for(a={jb:0};a.jb<this.h.length;a={yc:void 0,jb:a.jb},a.jb++)a.yc=this.h[a.jb],c=function(e){return function(){e.yc.Nc();b.h[e.jb].Ac=!0;b.h.every(function(f){return f.Ac===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.yc),d=this.scheduler.Ra(c,d),this.h[a.jb]=Object.assign({},a.yc,{Nc:c,
jobId:d})}
function ct(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=y(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.Ac||(a.scheduler.qa(c.jobId),a.scheduler.Ra(c.Nc,10))}
bt.prototype.cancel=function(){for(var a=y(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.Ac||this.scheduler.qa(b.jobId),b.Ac=!0;this.i.resolve()};
bt.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function dt(a){this.state=a;this.plugins=[];this.o=void 0;this.D={};Zs&&Xs(this.state)}
r=dt.prototype;r.install=function(a){this.plugins.push(a);return this};
r.uninstall=function(){var a=this;C.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
r.transition=function(a,b){var c=this;Zs&&Ys(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(ct(this.j),this.j=void 0);et(this,a,b);this.state=a;Zs&&Xs(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(ft(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function ft(a,b){var c=b.filter(function(e){return gt(a,e)===10}),d=b.filter(function(e){return gt(a,e)!==10});
return a.D.Wh?function(){var e=C.apply(0,arguments);return B(function(f){if(f.h==1)return f.yield(a.Ye.apply(a,[c].concat(z(e))),2);a.Jd.apply(a,[d].concat(z(e)));f.h=0})}:function(){var e=C.apply(0,arguments);
a.Ze.apply(a,[c].concat(z(e)));a.Jd.apply(a,[d].concat(z(e)))}}
r.Ze=function(a){for(var b=C.apply(1,arguments),c=mo(),d=y(a),e=d.next(),f={};!e.done;f={Sb:void 0},e=d.next())f.Sb=e.value,c.Lb(function(g){return function(){ht(g.Sb.name);jt(function(){return g.Sb.callback.apply(g.Sb,z(b))});
kt(g.Sb.name)}}(f))};
r.Ye=function(a){var b=C.apply(1,arguments),c,d,e,f,g;return B(function(h){h.h==1&&(c=mo(),d=y(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.A(0);f.Xa=e.value;f.ec=void 0;g=function(k){return function(){ht(k.Xa.name);var l=jt(function(){return k.Xa.callback.apply(k.Xa,z(b))});
he(l)?k.ec=T("web_lifecycle_error_handling_killswitch")?l.then(function(){kt(k.Xa.name)}):l.then(function(){kt(k.Xa.name)},function(m){at(m);
kt(k.Xa.name)}):kt(k.Xa.name)}}(f);
c.Lb(g);return f.ec?h.yield(f.ec,3):h.A(3)}f={Xa:void 0,ec:void 0};e=d.next();return h.A(2)})};
r.Jd=function(a){var b=C.apply(1,arguments),c=this,d=a.map(function(e){return{Nc:function(){ht(e.name);jt(function(){return e.callback.apply(e,z(b))});
kt(e.name)},
priority:gt(c,e)}});
d.length&&(this.j=new bt(d))};
function gt(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function ht(a){Zs&&a&&Xs(a)}
function kt(a){Zs&&a&&Ys(a)}
function et(a,b,c){$s&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
fa.Object.defineProperties(dt.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function jt(a){if(T("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){at(b)}}
;function lt(a){dt.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var mt;w(lt,dt);lt.prototype.i=function(a,b){var c=this;this.h=Hn(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
lt.prototype.u=function(a,b){this.h&&(Lj.qa(this.h),this.h=null);a(b==null?void 0:b.event)};
function nt(){mt||(mt=new lt);return mt}
;var ot=[];E("yt.logging.transport.getScrapedGelPayloads",function(){return ot});function pt(){this.store={};this.h={}}
pt.prototype.storePayload=function(a,b){a=qt(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);T("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
pt.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=rt(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,z(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,z(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,z(this.smartExtractMatchingEntries(a))));return c};
pt.prototype.extractMatchingEntries=function(a){a=rt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,z(this.store[a[c]])),delete this.store[a[c]]);return b};
pt.prototype.getSequenceCount=function(a){a=rt(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function rt(a,b){var c=qt(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&qt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(st(b.auth,g[0])){var h=b.isJspb;st(h===void 0?"undefined":h?"true":"false",g[1])&&st(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),st(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function st(a,b){return a===void 0||a==="undefined"?!0:a===b}
pt.prototype.getSequenceCount=pt.prototype.getSequenceCount;pt.prototype.extractMatchingEntries=pt.prototype.extractMatchingEntries;pt.prototype.smartExtractMatchingEntries=pt.prototype.smartExtractMatchingEntries;pt.prototype.storePayload=pt.prototype.storePayload;function qt(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function tt(a,b){if(a)return a[b.name]}
;var ut=Dm("initial_gel_batch_timeout",2E3),vt=Dm("gel_queue_timeout_max_ms",6E4),wt=Dm("gel_min_batch_size",5),xt=void 0;function zt(){this.o=this.h=this.i=0;this.j=!1}
var At=new zt,Bt=new zt,Ct=new zt,Dt=new zt,Et,Ft=!0,Gt=D.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",Gt);var Ht={};function It(){var a=F("yt.logging.ims");a||(a=new pt,E("yt.logging.ims",a));return a}
function Jt(a,b){if(a.endpoint==="log_event"){Kt();var c=Lt(a),d=Mt(a.payload)||"";a:{if(T("enable_web_tiered_gel")){var e=Cr[d||""];var f,g,h,k=Us().resolve(Os(fq))==null?void 0:(f=gq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!T("web_payload_policy_disabled_killswitch"))return;k=Nt(e.tier);if(k===400){Ot(a,b);return}}Ht[c]=
!0;c={cttAuthInfo:c,isJspb:!1,tier:k};It().storePayload(c,a.payload);Pt(b,c,d==="gelDebuggingEvent")}}
function Pt(a,b,c){function d(){Qt({writeThenSend:!0},void 0,e,b.tier)}
var e=!1;e=e===void 0?!1:e;c=c===void 0?!1:c;a&&(xt=new a);a=Dm("tvhtml5_logging_max_batch_ads_fork")||Dm("tvhtml5_logging_max_batch")||Dm("web_logging_max_batch")||100;var f=V(),g=Rt(e,b.tier),h=g.o;c&&(g.j=!0);c=0;b&&(c=It().getSequenceCount(b));c>=1E3?d():c>=a?Et||(Et=St(function(){d();Et=void 0},0)):f-h>=10&&(Tt(e,b.tier),g.o=f)}
function Ot(a,b){if(a.endpoint==="log_event"){T("more_accurate_gel_parser")&&It().storePayload({isJspb:!1},a.payload);Kt();var c=Lt(a),d=new Map;d.set(c,[a.payload]);var e=Mt(a.payload)||"";b&&(xt=new b);return new ki(function(f,g){xt&&xt.isReady()?Ut(d,xt,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Lt(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Gt[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Qt(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new ki(function(e,f){var g=Rt(c,d),h=g.j;g.j=!1;Vt(g.i);Vt(g.h);g.h=0;xt&&xt.isReady()?d===void 0&&T("enable_web_tiered_gel")?Wt(e,f,a,b,c,300,h):Wt(e,f,a,b,c,d,h):(Tt(c,d),e())})}
function Wt(a,b,c,d,e,f,g){var h=xt;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=T("enable_web_tiered_gel")?It().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):It().extractMatchingEntries(e),k.set(d,f);else for(d=y(Object.keys(Ht)),l=d.next();!l.done;l=d.next())l=l.value,e=T("enable_web_tiered_gel")?It().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):It().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete Ht[l];Ut(k,h,a,b,c,!1,g)}
function Tt(a,b){function c(){Qt({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Rt(a,b),e=d===Dt||d===Ct?5E3:vt;T("web_gel_timeout_cap")&&!d.h&&(e=St(function(){c()},e),d.h=e);
Vt(d.i);e=S("LOGGING_BATCH_TIMEOUT",Dm("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&Ft&&(e=ut);e=St(function(){Dm("gel_min_batch_size")>0?It().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=wt&&c():c()},e);
d.i=e}
function Ut(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(V()),k=a.size,l=(g===void 0?0:g)&&T("vss_through_gel_video_stats")?"video_stats":"log_event";a=y(a);var m=a.next();for(g={};!m.done;g={Sc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Vc:void 0,Uc:void 0},m=a.next()){var n=y(m.value);m=n.next().value;n=n.next().value;g.batchRequest=tg({context:mq(b.config_||lq())});if(!Oa(n)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=Gt[m])&&
Xt(g.batchRequest,m,n);delete Gt[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";Yt(g.batchRequest,h,g.dangerousLogToVisitorSession);T("always_send_and_write")&&(e.writeThenSend=!1);g.Vc=function(p){T("start_client_gcf")&&Lj.pa(function(){return B(function(t){return t.yield(Zt(p),0)})});
k--;k||c()};
g.Sc=0;g.Uc=function(p){return function(){p.Sc++;if(e.bypassNetworkless&&p.Sc===1)try{gr(b,l,p.batchRequest,$t({writeThenSend:!0},p.dangerousLogToVisitorSession,p.Vc,p.Uc,f)),Ft=!1}catch(t){hm(t),d()}k--;k||c()}}(g);
try{gr(b,l,g.batchRequest,$t(e,g.dangerousLogToVisitorSession,g.Vc,g.Uc,f)),Ft=!1}catch(p){hm(p),d()}}}
function $t(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,uh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};au()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(V())));return a}
function Yt(a,b,c){au()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=S("EVENT_ID"))&&((c=S("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),cm("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Xt(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Kt(){var a;(a=F("yt.logging.transport.enableScrapingForTest"))||(a=Cm("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(ot=[],E("yt.logging.transport.enableScrapingForTest",!0),E("yt.logging.transport.scrapedPayloadsForTesting",ot),E("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
E("yt.logging.transport.scrapeClientEvent",!0))}
function au(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function St(a,b){return T("transport_use_scheduler")===!1?Am(a,b):T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?Hn(function(){if(nt().currentState==="none")a();else{var c={};nt().install((c.none={callback:a},c))}},b):Hn(a,b)}
function Vt(a){T("transport_use_scheduler")?Lj.qa(a):window.clearTimeout(a)}
function Zt(a){var b,c,d,e,f,g,h,k,l,m;return B(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=tt(d,El),g=(f=d)==null?void 0:f.hotHashData,h=tt(d,Dl),l=(k=d)==null?void 0:k.coldHashData,(m=Us().resolve(Os(fq)))?g?e?n.yield(hq(m,g,e),2):n.yield(hq(m,g),2):n.A(2):n.return()):l?h?n.yield(iq(m,l,h),0):n.yield(iq(m,l),0):n.A(0)})}
function Rt(a,b){b=b===void 0?200:b;return a?b===300?Dt:Bt:b===300?Ct:At}
function Mt(a){a=Object.keys(a);a=y(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Cr[b])return b}
function Nt(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var bu=D.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",bu);
function cu(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||V());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=As();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,bu[b]=b in bu?bu[b]+1:0,a.sequence={index:bu[b],groupKey:b},d.endOfSequence&&delete bu[d.sequenceGroup]);(d.sendIsolatedPayload?Ot:Jt)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function wo(a,b,c){c=c===void 0?{}:c;var d=es;S("ytLoggingEventsDefaultDisabled",!1)&&es===es&&(d=null);cu(a,b,d,c)}
;function du(a){return a.slice(0,void 0).map(function(b){return b.name}).join(" > ")}
;var eu=new Set,fu=0,gu=0,hu=0,iu=[],ju=[],ku=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function vo(a){lu(a)}
function W(a){lu(a,"WARNING")}
function mu(a){a instanceof Error?lu(a):(a=Pa(a)?JSON.stringify(a):String(a),a=new U(a),a.name="RejectedPromiseError",W(a))}
function lu(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||S("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||S("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),T("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(fu>=5))){d=[];e=y(ju);for(f=e.next();!f.done;f=e.next()){f=f.value;try{f()&&d.push(f())}catch(A){}}d=[].concat(z(iu),z(d));var k=Wb(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&
a.args&&a.args.length)for(var p=0;p<a.args.length&&!(n=dn(a.args[p],"params."+p,c,n),n>=500);p++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(p in t){if(t[p]){var v="params."+p,x=fn(t[p]);c[v]=x;n+=v.length+x.length;if(n>500)break}}else c.params=fn(t)}if(d.length)for(p=0;p<d.length&&!(n=dn(d[p],"params.context."+p,c,n),n>=500);p++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);p={message:e,name:f,lineNumber:m,
fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(p.lineNumber=p.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=$m();c=y(a.Ya);for(d=c.next();!d.done;d=c.next())if(d=d.value,p.message&&p.message.match(d.Mh)){a=d.weight;break a}a=y(a.Ta);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(p)){a=c.weight;break a}a=1}p.sampleWeight=a;a=y(Vm);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.xc[p.name])for(e=y(c.xc[p.name]),d=e.next();!d.done;d=e.next())if(f=
d.value,d=p.message.match(f.regexp)){p.params["params.error.original"]=d[0];e=f.groups;f={};for(m=0;m<e.length;m++)f[e[m]]=d[m+1],p.params["params.error."+e[m]]=d[m+1];p.message=c.Rc(f);break}p.params||(p.params={});a=$m();p.params["params.errorServiceSignature"]="msg="+a.Ya.length+"&cb="+a.Ta.length;p.params["params.serviceWorker"]="false";D.document&&D.document.querySelectorAll&&(p.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new wg(xg,"sample")).constructor!==
wg&&(p.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(p);if(p.sampleWeight!==0&&!eu.has(p.message)){if(g&&T("web_enable_error_204"))nu(b===void 0?"ERROR":b,p);else{b=b===void 0?"ERROR":b;b==="ERROR"?(an.sb("handleError",p),T("record_app_crashed_web")&&hu===0&&p.sampleWeight===1&&(hu++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},T("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:p.message}}}}),wo("appCrashed",
g)),gu++):b==="WARNING"&&an.sb("handleWarning",p);if(T("kevlar_gel_error_routing")){g=b;h=h===void 0?{}:h;b:{a=y(ku);for(c=a.next();!c.done;c=a.next())if(Co(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:p.stack};p.fileName&&(c.filename=p.fileName);a=p.lineNumber&&p.lineNumber.split?p.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=
Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:p.message,errorClassName:p.name,sampleWeight:p.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];S("FEXP_EXPERIMENTS")&&(h.experimentIds=S("FEXP_EXPERIMENTS"));d=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!dm("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=p.params)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=S("SERVER_NAME");e=S("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(wo("clientError",h),(g==="ERROR"||T("errors_flush_gel_always_killswitch"))&&Qt(void 0,void 0,!1))}T("suppress_error_204_logging")||
nu(b,p)}try{eu.add(p.message)}catch(A){}fu++}}}
function nu(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:S("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=y(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=S("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=y(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];(c=S("LAVA_VERSION"))&&(a.postParams["lava.version"]=c);c=S("SERVER_NAME");b=S("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Mm(S("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function ou(a){var b=C.apply(1,arguments);a.args||(a.args=[]);Array.isArray(a.args)&&a.args.push.apply(a.args,z(b))}
;function pu(){this.register=new Map}
function qu(a){a=y(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Qh("ABORTED")}
pu.prototype.clear=function(){qu(this);this.register.clear()};
var ru=new pu;var su=Date.now().toString();
function tu(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(su)for(a=1,b=0;b<su.length;b++)d[a%16]^=d[(a-1)%16]/4^su.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var uu,vu=D.ytLoggingDocDocumentNonce_;vu||(vu=tu(),E("ytLoggingDocDocumentNonce_",vu));uu=vu;function wu(a){this.h=a}
r=wu.prototype;r.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
r.getAsJspb=function(){var a=new Gl;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&of(a,2,Ie(this.h.veType)),this.h.veCounter!==void 0&&of(a,6,Ie(this.h.veCounter)),this.h.elementIndex!==void 0&&of(a,3,Ie(this.h.elementIndex)),this.h.isCounterfactual&&of(a,5,Ee(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();zf(a,Gl,7,b)}this.h.youtubeData!==void 0&&zf(a,Fl,8,this.h.jspbYoutubeData);return a};
r.toString=function(){return JSON.stringify(this.getAsJson())};
r.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
r.getLoggingDirectives=function(){return this.h.loggingDirectives};function xu(a){return S("client-screen-nonce-store",{})[a===void 0?0:a]}
function yu(a,b){b=b===void 0?0:b;var c=S("client-screen-nonce-store");c||(c={},cm("client-screen-nonce-store",c));c[b]=a}
function zu(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Au(a){return S(zu(a===void 0?0:a))}
E("yt_logging_screen.getRootVeType",Au);function Bu(){var a=S("csn-to-ctt-auth-info");a||(a={},cm("csn-to-ctt-auth-info",a));return a}
function Cu(){return Object.values(S("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function Du(a){a=xu(a===void 0?0:a);if(!a&&!S("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
E("yt_logging_screen.getCurrentCsn",Du);function Eu(a,b,c){var d=Bu();(c=Du(c))&&delete d[c];b&&(d[a]=b)}
function Fu(a){return Bu()[a]}
E("yt_logging_screen.getCttAuthInfo",Fu);E("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==xu(c)||b!==S(zu(c)))if(Eu(a,d,c),yu(a,c),cm(zu(c),b),b=function(){setTimeout(function(){a&&wo("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:uu,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function Gu(){var a=sg(Hu),b;return(new ki(function(c,d){a.onSuccess=function(e){zm(e)?c(new Iu(e)):d(new Ju("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Ju("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Ju("Request timed out","net.timeout",e))};
b=Mm("//googleads.g.doubleclick.net/pagead/id",a)})).Ec(function(c){if(c instanceof ti){var d;
(d=b)==null||d.abort()}return pi(c)})}
function Ju(a,b,c){cb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(Ju,cb);function Iu(a){this.xhr=a}
;function Ku(){this.X=0;this.h=null}
Ku.prototype.then=function(a,b,c){return this.X===1&&a?(a=a.call(c,this.h))&&typeof a.then==="function"?a:Lu(a):this.X===2&&b?(a=b.call(c,this.h))&&typeof a.then==="function"?a:Mu(a):this};
Ku.prototype.getValue=function(){return this.h};
Ku.prototype.isRejected=function(){return this.X==2};
Ku.prototype.$goog_Thenable=!0;function Mu(a){var b=new Ku;a=a===void 0?null:a;b.X=2;b.h=a===void 0?null:a;return b}
function Lu(a){var b=new Ku;a=a===void 0?null:a;b.X=1;b.h=a===void 0?null:a;return b}
;function Nu(a){var b=S("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(ec(a)));return a}
function Ou(a){var b={};T("json_condensed_response")&&(b.prettyPrint="false");return a=sm(a,b||{},!1)}
function Pu(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:tm(a)?"same-origin":"cors",credentials:tm(a)?"same-origin":"include"};b={};for(var d=y(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Qu(){return bg()||(kd||ld)&&Co("applewebkit")&&!Co("version")&&(!Co("safari")||Co("gsa/"))||jd&&Co("version/")?!0:S("EOM_VISITOR_DATA")?!1:!0}
;function Ru(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null}
;function Su(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Kl)if(Kl[d]==c.embeddedPlayerMode){b=Kl[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function Tu(a){cb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Uu;this.isTimeout=a instanceof Ju&&a.errorCode=="net.timeout";this.isCanceled=a instanceof ti}
w(Tu,cb);Tu.prototype.name="BiscottiError";function Uu(){cb.call(this,"Biscotti ID is missing from server")}
w(Uu,cb);Uu.prototype.name="BiscottiMissingError";var Hu={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Vu=null;function Wu(){if(T("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Qu())return Error("User has not consented - not fetching biscotti id.");var a=S("PLAYER_VARS",{});if(qg(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Su(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Wl(){var a=Wu();if(a!==void 0)return pi(a);Vu||(Vu=Gu().then(Xu).Ec(function(b){return Yu(2,b)}));
return Vu}
function Xu(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Uu;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Uu;a=a.id;Xl(a);Vu=Lu(a);Zu(18E5,2);return a}
function Yu(a,b){b=new Tu(b);Xl("");Vu=Mu(b);a>0&&Zu(12E4,a-1);throw b;}
function Zu(a,b){Am(function(){Gu().then(Xu,function(c){return Yu(b,c)}).Ec(ii)},a)}
function $u(){try{var a=F("yt.ads.biscotti.getId_");return a?a():Wl()}catch(b){return pi(b)}}
;var Ib=qa(["data-"]);function av(a){a&&(a.dataset?a.dataset[bv()]="true":Jb(a))}
function cv(a){return a?a.dataset?a.dataset[bv()]:a.getAttribute("data-loaded"):null}
var dv={};function bv(){return dv.loaded||(dv.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function ev(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||sg(b);this.assets=a.assets||{};this.attrs=a.attrs||sg(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
ev.prototype.clone=function(){var a=new ev,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Na(c)=="object"?a[b]=sg(c):a[b]=c}return a};var fv=["att/get"],gv=["share/get_share_panel"],hv=["share/get_web_player_share_panel"],iv=["feedback"],jv=["notification/modify_channel_preference"],kv=["browse/edit_playlist"],lv=["subscription/subscribe"],mv=["subscription/unsubscribe"];var nv=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};E("yt.msgs_",nv);function ov(a){Yl(nv,arguments)}
;function pv(a,b,c){qv(a,b,c===void 0?null:c)}
function rv(a){a=sv(a);var b=document.getElementById(a);b&&(Js(a),b.parentNode.removeChild(b))}
function tv(a,b){a&&b&&(a=""+Sa(b),(a=uv[a])&&Hs(a))}
function qv(a,b,c){c=c===void 0?null:c;var d=sv(a),e=document.getElementById(d),f=e&&cv(e),g=e&&!f;f?b&&b():(b&&(f=Fs(d,b),b=""+Sa(b),uv[b]=f),g||(e=vv(a,d,function(){cv(e)||(av(e),Is(d),Am(function(){Js(d)},0))},c)))}
function vv(a,b,c,d){d=d===void 0?null:d;var e=zg("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Gb(e,Bl(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function sv(a){var b=document.createElement("a");xb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+$b(a)}
var uv={};function wv(a){var b=xv(a),c=document.getElementById(b),d=c&&cv(c);d||c&&!d||(c=yv(a,b,function(){if(!cv(c)){av(c);Is(b);var e=Ya(Js,b);Am(e,0)}}))}
function yv(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Bl(a);Lb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function xv(a){var b=zg("A");xb(b,new qb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+$b(a)}
;function zv(a){var b=C.apply(1,arguments);if(!Av(a)||b.some(function(d){return!Av(d)}))throw Error("Only objects may be merged.");
b=y(b);for(var c=b.next();!c.done;c=b.next())Bv(a,c.value)}
function Bv(a,b){for(var c in b)if(Av(b[c])){if(c in a&&!Av(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Bv(a[c],b[c])}else if(Cv(b[c])){if(c in a&&!Cv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Dv(a[c],b[c])}else a[c]=b[c];return a}
function Dv(a,b){b=y(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Av(c)?a.push(Bv({},c)):Cv(c)?a.push(Dv([],c)):a.push(c);return a}
function Av(a){return typeof a==="object"&&!Array.isArray(a)}
function Cv(a){return typeof a==="object"&&Array.isArray(a)}
;var Ev="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Fv(a,b){var c=c===void 0?!0:c;var d=S("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=dc(window.location.href);e&&d.push(e);e=dc(a);if(Mb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),xb(d,a),a=d.href)if(a=ec(a),a=fc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Du()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Gv(a,b,f)}else Gv(a,b)}
function Gv(a,b,c){a=Hv(a);b=b?ic(b):"";c=c||5;Qu()&&nn(a,b,c)}
function Hv(a){for(var b=y(Ev),c=b.next();!c.done;c=b.next())a=nc(a,c.value);return"ST-"+$b(a).toString(36)}
;function Iv(a){sq.call(this,1,arguments);this.csn=a}
w(Iv,sq);var Bq=new tq("screen-created",Iv),Jv=[],Kv=0,Lv=new Map,Mv=new Map,Nv=new Map;
function Ov(a,b,c,d,e){e=e===void 0?!1:e;for(var f=Pv({cttAuthInfo:Fu(b)||void 0},b),g=y(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(og(k)||!k.trackingParams&&!k.veType)&&W(Error("Child VE logged with no data"));if(T("no_client_ve_attach_unless_shown")){var l=Qv(h,b);if(k.veType&&!Mv.has(l)&&!Nv.has(l)&&!e){if(!T("il_attach_cache_limit")||Lv.size<1E3){Lv.set(l,[a,b,c,h]);return}T("il_attach_cache_limit")&&Lv.size>1E3&&W(new U("IL Attach cache exceeded limit"))}h=Qv(c,b);Lv.has(h)?
Rv(c,b):Nv.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Pb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?Sv("visualElementAttached",f,c):a?cu("visualElementAttached",c,a,f):wo("visualElementAttached",c,f)}
function Sv(a,b,c){Jv.push({Re:a,payload:c,Hh:void 0,options:b});Kv||(Kv=Cq())}
function Dq(a){if(Jv){for(var b=y(Jv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,wo(c.Re,c.payload,c.options));Jv.length=0}Kv=0}
function Qv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Rv(a,b){a=Qv(a,b);Lv.has(a)&&(b=Lv.get(a)||[],Ov(b[0],b[1],b[2],[b[3]],!0),Lv.delete(a))}
function Pv(a,b){T("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Tv(){try{return!!self.localStorage}catch(a){return!1}}
;function Uv(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Vv(a){if(Tv()){var b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Uv(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function Wv(){if(!Tv())return!1;var a=Fn(),b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=Uv(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Xv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(S("INNERTUBE_CLIENT_NAME")==="WEB"||S("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function Yv(a){if(S("LOGGED_IN",!0)&&Xv()){var b=S("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=dc(window.location.href);c&&b.push(c);c=dc(a);Mb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=ec(a),(b=fc(b))?(b=Hv(b),b=(b=on(b)||null)?pm(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;Xv()?(d||(d=S("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Fv(a,b)}}
;function Zv(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=S("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Fv(a,b);if(c)return!1;Yv(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;b=jc(a,e);Yv(b);a=void 0;a=a===void 0?ub:a;a:if(f=b+f,a=a===void 0?ub:a,!(f instanceof qb)){for(b=0;b<a.length;++b)if(c=a[b],c instanceof sb&&c.Ee(f)){f=new qb(f);break a}f=void 0}g=g.location;f=wb(f||rb);f!==void 0&&(g.href=f);return!0}
;function $v(a){if(qg(S("PLAYER_VARS",{}))!="1"){a&&Vl();try{$u().then(function(){},function(){}),Am($v,18E5)}catch(b){hm(b)}}}
;var aw=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function bw(){var a=a===void 0?window.location.href:a;if(T("kevlar_disable_theme_param"))return null;var b=bc(cc(5,a));if(T("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=qm(a).theme;return aw.get(c)||null}catch(d){}return null}
;function cw(){this.h={};if(this.i=qn()){var a=on("CONSISTENCY");a&&dw(this,{encryptedTokenJarContents:a})}}
cw.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Ga.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=y(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];dw(this,a)}};
function dw(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&nn("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var ew=window.location.hostname.split(".").slice(-2).join(".");function fw(){this.j=-1;var a=S("LOCATION_PLAYABILITY_TOKEN");S("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=gw(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var hw;function iw(){hw=F("yt.clientLocationService.instance");hw||(hw=new fw,E("yt.clientLocationService.instance",hw));return hw}
r=fw.prototype;
r.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
r.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,S("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=gw(this))&&this.h.set("yt-location-playability-token",a,15552E3):nn("YT_CL",JSON.stringify({loctok:a}),15552E3,ew,!0))};
function gw(a){return a.h===void 0?new no("yt-client-location"):a.h}
r.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=gw(this))&&this.h.remove("yt-location-playability-token"):pn("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
r.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;S("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
r.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
r.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function jw(a,b,c){b=b===void 0?!1:b;c=c===void 0?!1:c;var d=S("INNERTUBE_CONTEXT");if(!d)return lu(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=tg(d);T("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;e.clientName==="MWEB"&&e.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(e.clientFormFactor=S("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;
e.screenPixelDensity=Math.round(window.devicePixelRatio||1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var f=f===void 0?!1:f;un();var g="USER_INTERFACE_THEME_LIGHT";xn(165)?g="USER_INTERFACE_THEME_DARK":xn(174)?g="USER_INTERFACE_THEME_LIGHT":!T("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(g="USER_INTERFACE_THEME_DARK");
f=f?g:bw()||g;e.userInterfaceTheme=f;if(!b){if(f=Cn())e.connectionType=f;T("web_log_effective_connection_type")&&(f=Dn())&&(d.client.effectiveConnectionType=f)}var h;if(T("web_log_memory_total_kbytes")&&((h=D.navigator)==null?0:h.deviceMemory)){var k;h=(k=D.navigator)==null?void 0:k.deviceMemory;d.client.memoryTotalKbytes=""+h*1E6}T("web_gcf_hashes_innertube")&&(f=jq())&&(k=f.coldConfigData,h=f.coldHashData,f=f.hotHashData,d.client.configInfo=d.client.configInfo||{},k&&(d.client.configInfo.coldConfigData=
k),h&&(d.client.configInfo.coldHashData=h),f&&(d.client.configInfo.hotHashData=f));k=qm(D.location.href);!T("web_populate_internal_geo_killswitch")&&k.internalcountrycode&&(e.internalGeo=k.internalcountrycode);e.clientName==="MWEB"||e.clientName==="WEB"?(e.mainAppWebInfo={graftUrl:D.location.href},T("kevlar_woffle")&&gn.instance&&(k=gn.instance,e.mainAppWebInfo.pwaInstallabilityStatus=!k.h&&k.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),e.mainAppWebInfo.webDisplayMode=
hn(),e.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):e.clientName==="TVHTML5"&&(!T("web_lr_app_quality_killswitch")&&(k=S("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:k})),k=S("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:k}));if(!T("web_populate_time_zone_itc_killswitch")){a:{if(typeof Intl!=="undefined")try{var l=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break a}catch(Qa){}l=
void 0}l&&(e.timeZone=l)}(l=S("EXPERIMENTS_TOKEN",""))?e.experimentsToken=l:delete e.experimentsToken;l=Em();cw.instance||(cw.instance=new cw);e=cw.instance.h;k=[];h=0;for(var m in e)k[h++]=e[m];d.request=Object.assign({},d.request,{internalExperimentFlags:l,consistencyTokenJars:k});!T("web_prequest_context_killswitch")&&(m=S("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=m);l=un();m=xn(58);l=l.get("gsml","");d.user=Object.assign({},d.user);m&&(d.user.enableSafetyMode=
m);l&&(d.user.lockedSafetyMode=!0);T("warm_op_csn_cleanup")?c&&(b=Du())&&(d.clientScreenNonce=b):!b&&(b=Du())&&(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=F("yt.mdx.remote.remoteClient_"))d.remoteClient=a;iw().setLocationOnInnerTubeContext(d);try{var n=um(),p=n.bid;delete n.bid;d.adSignalsInfo={params:[],bid:p};for(var t=y(Object.entries(n)),v=t.next();!v.done;v=t.next()){var x=y(v.value),A=x.next().value,H=x.next().value;n=A;p=H;a=void 0;(a=d.adSignalsInfo.params)==
null||a.push({key:n,value:""+p})}var K,aa;if(((K=d.client)==null?void 0:K.clientName)==="TVHTML5"||((aa=d.client)==null?void 0:aa.clientName)==="TVHTML5_UNPLUGGED"){var da=S("INNERTUBE_CONTEXT");da.adSignalsInfo&&(d.adSignalsInfo.advertisingId=da.adSignalsInfo.advertisingId,d.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",d.adSignalsInfo.limitAdTracking=da.adSignalsInfo.limitAdTracking)}}catch(Qa){lu(Qa)}return d}
;function kw(a){var b={"Content-Type":"application/json"};S("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=S("EOM_VISITOR_DATA"):S("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=S("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=S("LOGGED_IN",!1);S("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=S("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=S("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=S("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=S("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=S("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a),S("ENABLE_LAVA_HEADER_ON_IT_EXPANSION")&&(a=S("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a));return b}
;function lw(){this.h={}}
lw.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
lw.prototype.get=function(a){if(this.contains(a))return this.h[a]};
lw.prototype.set=function(a,b){this.h[a]=b};
lw.prototype.remove=function(a){delete this.h[a]};function mw(){this.mappings=new lw}
mw.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
mw.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=yb(b)}}return a};
new mw;function nw(a){return function(){return new a}}
;var ow={},pw=(ow.WEB_UNPLUGGED="^unplugged/",ow.WEB_UNPLUGGED_ONBOARDING="^unplugged/",ow.WEB_UNPLUGGED_OPS="^unplugged/",ow.WEB_UNPLUGGED_PUBLIC="^unplugged/",ow.WEB_CREATOR="^creator/",ow.WEB_KIDS="^kids/",ow.WEB_EXPERIMENTS="^experiments/",ow.WEB_MUSIC="^music/",ow.WEB_REMIX="^music/",ow.WEB_MUSIC_EMBEDDED_PLAYER="^music/",ow.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",ow);
function qw(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=pw[b];if(c){c=new RegExp(c);for(var d=y(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(pw).forEach(function(g){var h=y(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=y(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function rw(){}
rw.prototype.u=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?mn:c;var d={context:jw(a.clickTrackingParams,!1,this.o)};var e=this.i(a);if(e){this.h(d,e,b);var f;b="/youtubei/v1/"+qw(this.j());(e=(f=tt(a.commandMetadata,Il))==null?void 0:f.apiUrl)&&(b=e);f=Ou(Nu(b));a=Object.assign({},{command:a},void 0);d={input:f,Za:Pu(f),Ga:d,config:a};d.config.Ob?d.config.Ob.identity=c:d.config.Ob={identity:c};return d}lu(new U("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(rw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function sw(){}
w(sw,rw);function tw(){}
w(tw,sw);tw.prototype.u=function(){return{input:"/getDatasyncIdsEndpoint",Za:Pu("/getDatasyncIdsEndpoint","GET"),Ga:{}}};
tw.prototype.j=function(){return[]};
tw.prototype.i=function(){};
tw.prototype.h=function(){};var uw={},vw=(uw.GET_DATASYNC_IDS=nw(tw),uw);function ww(a){var b;(b=F("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},E("ytcsi."+(a||"")+"data_",b));return b}
function xw(){var a=ww();a.info||(a.info={});return a.info}
function yw(a){a=ww(a);a.metadata||(a.metadata={});return a.metadata}
function zw(a){a=ww(a);a.tick||(a.tick={});return a.tick}
function Aw(a){a=ww(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Bw(a){a=Aw(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Cw(a){var b=ww(a).nonce;b||(b=tu(),ww(a).nonce=b);return b}
;function Dw(){var a=F("ytcsi.debug");a||(a=[],E("ytcsi.debug",a),E("ytcsi.reference",{}));return a}
function Ew(a){a=a||"";var b=F("ytcsi.reference");b||(Dw(),b=F("ytcsi.reference"));if(b[a])return b[a];var c=Dw(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var X={},Fw=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X.app_startup="LATENCY_ACTION_APP_STARTUP",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",X.channels="LATENCY_ACTION_CHANNELS",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.editor=
"LATENCY_ACTION_EDITOR",X.embed="LATENCY_ACTION_EMBED",X.embed_no_video="LATENCY_ACTION_EMBED_NO_VIDEO",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.landing="LATENCY_ACTION_LANDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",
X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.management="LATENCY_ACTION_MANAGEMENT",X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X.prebuffer=
"LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.projects="LATENCY_ACTION_PROJECTS",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",X.review="LATENCY_ACTION_REVIEW",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",
X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",X.tenx="LATENCY_ACTION_TENX",X.video_preview="LATENCY_ACTION_VIDEO_PREVIEW",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",
X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",
X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X.attestation_challenge_fetch="LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH",X);function Gw(a,b){sq.call(this,1,arguments);this.timer=b}
w(Gw,sq);var Hw=new tq("aft-recorded",Gw);E("ytLoggingGelSequenceIdObj_",D.ytLoggingGelSequenceIdObj_||{});var Iw=D.ytLoggingLatencyUsageStats_||{};E("ytLoggingLatencyUsageStats_",Iw);function Jw(){this.h=0}
function Kw(){Jw.instance||(Jw.instance=new Jw);return Jw.instance}
Jw.prototype.tick=function(a,b,c,d){Lw(this,"tick_"+a+"_"+b)||wo("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Jw.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Lw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,wo("latencyActionInfo",a,{cttAuthInfo:c}))};
Jw.prototype.jspbInfo=function(){};
Jw.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Lw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,wo("latencyActionSpan",a,{cttAuthInfo:c}))};
function Lw(a,b){Iw[b]=Iw[b]||{count:0};var c=Iw[b];c.count++;c.time=V();a.h||(a.h=Hn(function(){var d=V(),e;for(e in Iw)Iw[e]&&d-Iw[e].time>6E4&&delete Iw[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new U("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||W(c)),!0):!1}
;var Mw=window;function Nw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Ow(){var a;if(T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=Y==null?void 0:(a=Y.getEntriesByType)==null?void 0:(b=a.call(Y,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=Pw(e.requestStart),e.responseEnd=Pw(e.responseEnd),e.redirectStart=Pw(e.redirectStart),e.redirectEnd=Pw(e.redirectEnd),e.domainLookupEnd=Pw(e.domainLookupEnd),e.connectStart=Pw(e.connectStart),e.connectEnd=
Pw(e.connectEnd),e.responseStart=Pw(e.responseStart),e.secureConnectionStart=Pw(e.secureConnectionStart),e.domainLookupStart=Pw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=T("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function Pw(a){return Math.round(Qw()+a)}
function Qw(){return(T("csi_use_time_origin")||T("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=Mw.performance||Mw.mozPerformance||Mw.msPerformance||Mw.webkitPerformance||new Nw;var Rw=!1,Sw=!1,Tw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj",'script[name="embed_client"]':"ecj",'link[rel="stylesheet"][name="embed-ui"]':"ecc"};Xa(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||ii,Y);function Uw(a,b){if(!T("web_csi_action_sampling_enabled")||!ww(b).actionDisabled){var c=Ew(b||"");zv(c.info,a);a.loadType&&(c=a.loadType,yw(b).loadType=c);zv(Bw(b),a);c=Cw(b);b=ww(b).cttAuthInfo;Kw().info(a,c,b)}}
function Vw(){var a,b,c,d;return((d=Us().resolve(Os(fq))==null?void 0:(a=gq())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!T("web_csi_action_sampling_enabled")||!ww(c).actionDisabled){var d=Cw(c),e;if(e=T("web_csi_debug_sample_enabled")&&d){(Us().resolve(Os(fq))==null?0:gq())&&!Sw&&(Sw=!0,Z("gcfl",V(),c));var f,g,h;e=(Us().resolve(Os(fq))==null?void 0:(f=gq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=Vw();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+d.charCodeAt(g),
g<d.length-1&&(f%=0x800000000000);e=f%1E5%e!==0;ww(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Uw(f,c));ww(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Y.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||T("web_csi_disable_alt_time_performance_mark"))Y.mark(e);else{f=T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")?f-Y.timeOrigin:f-(Y.timeOrigin||Y.timing.navigationStart);try{Y.mark(e,
{startTime:f})}catch(k){}}e=Ew(c||"");e.tick[a]=b||V();if(e.callback&&e.callback[a])for(e=y(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=Aw(c);e.gelTicks&&(e.gelTicks[a]=!0);f=zw(c);e=b||V();T("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=ww(c).cttAuthInfo;a==="_start"?(a=Kw(),Lw(a,"baseline_"+d)||wo("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Kw().tick(a,d,b,f);Ww(c);return e}}}
function Xw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=hs+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Yw(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=y(Object.entries(S("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=y(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Zw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Ab(document)&&a.setAttribute("nonce",Ab(document));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=Qw(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function $w(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Ob(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Qb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Z("wffs",Pw(b.startTime)),Z("wffe",Pw(b.responseEnd)))}
function ax(a){var b=bx("aft",a);if(b)return b;b=S((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=bx(b[d],a);if(e)return e}return NaN}
function bx(a,b){if(a=zw(b)[a])return typeof a==="number"?a:a[a.length-1]}
function Ww(a){var b=bx("_start",a),c=ax(a),d=!Rw;b&&c&&d&&(yq(Hw,new Gw(Math.round(c-b),a)),Rw=!0)}
function cx(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Rb(a,function(c){return c.name==="first-paint"}))return Pw(a.startTime)}var b;
T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")?b=Y.getEntriesByType("first-paint")[0].startTime:b=Y.timing.Oh;return b?Math.max(0,b):0}
;function dx(a,b){gm(function(){Ew("").info.actionType=a;b&&cm("TIMING_AFT_KEYS",b);cm("TIMING_ACTION",a);var c=Yw();Object.keys(c).length>0&&Uw(c);c={isNavigation:!0,actionType:Fw[S("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=S("PREVIOUS_ACTION");d&&(c.previousAction=Fw[d]||"LATENCY_ACTION_UNKNOWN");if(d=S("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=S("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Du())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=Xw();if(d===1||d===-1)c.isVisible=!0;yw();xw();
c.loadType="cold";d=xw();var e=Ow(),f=Qw(),g=S("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!T("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),d.prerender!==1&&Z("_start",f,void 0));d=cx();d>0&&Z("fpt",d);d=Ow();d.isPerformanceNavigationTiming&&Uw({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Qw()&&d.connectEnd-d.secureConnectionStart>0&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&$w();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in Tw)Tw.hasOwnProperty(h)&&(e=Tw[h],
Zw(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=y(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Uw(c);c=Aw();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=Bw();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(yw().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=zw();e=Aw();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Z(k,bx(k));else if(T("log_repeated_ytcsi_ticks"))for(f=
y(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=y(h);for(e=h.next();!e.done;e=h.next())d=e.value,zv(c,d),zv(k,d),d=!0;d&&Uw(k)}E("ytglobal.timingready_",!0);k=S("TIMING_ACTION");F("ytglobal.timingready_")&&k&&ex()&&ax()&&Ww()})()}
function ex(a){return gm(function(){return fx("_start",a)})()}
function gx(a,b,c){gm(Uw)(a,b,c===void 0?!1:c)}
function hx(a,b,c){return gm(Z)(a,b,c)}
function fx(a,b){return gm(function(){var c=zw(b);return a in c})()}
function ix(a){if(!T("universal_csi_network_ticks"))return"";a=bc(cc(5,a))||"";for(var b=Object.keys(qq),c=0;c<b.length;c++){var d=b[c];if(a.includes(d))return d}return""}
function jx(a){if(!T("universal_csi_network_ticks"))return function(){};
var b=qq[a];return b?(kx(b),function(){var c=T("universal_csi_network_ticks")?(c=rq[a])?kx(c):!1:!1;return c}):function(){}}
function kx(a){return gm(function(){if(fx(a))return!1;hx(a,void 0,void 0);return!0})()}
function lx(a){gm(function(){if(!ex("attestation_challenge_fetch")||fx(a,"attestation_challenge_fetch"))return!1;hx(a,void 0,"attestation_challenge_fetch");return!0})()}
function mx(){gm(function(){var a=Cw();requestAnimationFrame(function(){setTimeout(function(){a===Cw()&&hx("ol",void 0,void 0)},0)})})()}
var nx=window;nx.ytcsi&&(nx.ytcsi.infoGel=gx,nx.ytcsi.tick=hx);var ox="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),px=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function qx(a,b,c,d){this.u=a;this.fa=b;this.j=c;this.o=d;this.i=void 0;this.h=new Map;a.Zb||(a.Zb={});a.Zb=Object.assign({},vw,a.Zb)}
function rx(a,b,c,d){if(qx.instance!==void 0){if(d=qx.instance,a=[a!==d.u,b!==d.fa,c!==d.j,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new U("InnerTubeTransportService is already initialized",a);
}else qx.instance=new qx(a,b,c,d)}
function sx(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?mn:c;var d=tx(a,b);return d?new ki(function(e,f){var g,h,k,l,m;return B(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.u(b,void 0,c);if(!h){f(new U("Error: Failed to build request for command.",b));n.A(0);break}Yv(h.input);l=((k=h.Za)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.j.Ld){m=ux(h.config,l);n.A(4);break}return n.yield(vx(h.config,l),5);case 5:m=n.i;case 4:e(wx(a,h,m)),n.h=
0}})}):pi(new U("Error: No request builder found for command.",b))}
function xx(a,b){function c(){}
var d="/youtubei/v1/"+qw(fv);var e=e===void 0?{Ob:{identity:mn}}:e;var f=f===void 0?!0:f;c=jx(ix(d));b.context||(b.context=jw(void 0,f));return new ki(function(g){var h,k,l,m,n;return B(function(p){if(p.h==1)return h=Nu(d),k=tm(h)?"same-origin":"cors",a.j.Ld?(l=ux(e,k),p.A(2)):p.yield(vx(e,k),3);p.h!=2&&(l=p.i);m=Ou(Nu(d));n={input:m,Za:Pu(m),Ga:b,config:e};g(wx(a,n,l,c));p.h=0})})}
function yx(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.o){d=y(ox);for(var e=d.next();!e.done;e=d.next())e=e.value,a.o[e]&&a.o[e].handleResponse(b,c)}}
function wx(a,b,c,d){d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,p,t,v,x,A,H,K,aa,da,Qa,Sb,Za,Cb,$a,Ra,La,Ka,kh,ts,us,vs,ws;return B(function(ia){switch(ia.h){case 1:ia.A(2);break;case 3:if((e=ia.i)&&!e.isExpired())return ia.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Ga)==null?0:g.context)){ia.A(4);break}h=b.Ga.context;ia.A(5);break;case 5:k=y([]),l=k.next();case 8:if(l.done){ia.A(4);break}m=l.value;return ia.yield(m.Ph(h),9);case 9:l=k.next();ia.A(8);break;case 4:if((n=a.i)==null||!n.Vh(b.input,b.Ga)){ia.A(12);break}return ia.yield(a.i.Jh(b.input,
b.Ga),13);case 13:return p=ia.i,yx(a,p,b),ia.return(p);case 12:return(x=(v=b.config)==null?void 0:v.Sh)&&a.h.has(x)?t=a.h.get(x):(A=JSON.stringify(b.Ga),aa=(K=(H=b.Za)==null?void 0:H.headers)!=null?K:{},b.Za=Object.assign({},b.Za,{headers:Object.assign({},aa,c)}),da=Object.assign({},b.Za),b.Za.method==="POST"&&(da=Object.assign({},da,{body:A})),((Qa=b.config)==null?0:Qa.We)&&hx(b.config.We),Sb=function(){return a.fa.fetch(b.input,da,b.config)},t=Sb(),x&&a.h.set(x,t)),ia.yield(t,14);
case 14:if((Za=ia.i)&&"error"in Za&&((Cb=Za)==null?0:($a=Cb.error)==null?0:$a.details))for(Ra=Za.error.details,La=y(Ra),Ka=La.next();!Ka.done;Ka=La.next())kh=Ka.value,(ts=kh["@type"])&&px.indexOf(ts)>-1&&(delete kh["@type"],Za=kh);x&&a.h.has(x)&&a.h.delete(x);((us=b.config)==null?0:us.Xe)&&hx(b.config.Xe);if(Za||(vs=a.i)==null||!vs.wh(b.input,b.Ga)){ia.A(15);break}return ia.yield(a.i.Ih(b.input,b.Ga),16);case 16:Za=ia.i;case 15:return yx(a,Za,b),((ws=b.config)==null?0:ws.Te)&&hx(b.config.Te),d(),
ia.return(Za||void 0)}})}
function tx(a,b){a:{a=a.u;var c,d=(c=tt(b,Jl))==null?void 0:c.signal;if(d&&a.Zb&&(c=a.Zb[d])){var e=c();break a}var f;if((c=(f=tt(b,Hl))==null?void 0:f.request)&&a.ee&&(f=a.ee[c])){e=f();break a}for(e in b)if(a.Ic[e]&&(b=a.Ic[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function vx(a,b){var c,d,e,f;return B(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Ob)==null?void 0:d.sessionIndex;var h=g.yield;var k=ln(0,{sessionIndex:e});if(!(k instanceof ki)){var l=new ki(ii);li(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},kw(b),f)))})}
function ux(a,b){var c;a=a==null?void 0:(c=a.Ob)==null?void 0:c.sessionIndex;c=ln(0,{sessionIndex:a});return Object.assign({},kw(b),c)}
;var zx=new Ms("INNERTUBE_TRANSPORT_TOKEN");function Ax(){}
w(Ax,sw);Ax.prototype.j=function(){return lv};
Ax.prototype.i=function(a){return tt(a,Ul)||void 0};
Ax.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(Ax.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Bx(){}
w(Bx,sw);Bx.prototype.j=function(){return mv};
Bx.prototype.i=function(a){return tt(a,Tl)||void 0};
Bx.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(Bx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var Cx=new Ms("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function Dx(a){this.M=a}
w(Dx,sw);Dx.prototype.j=function(){return gv};
Dx.prototype.i=function(a){return tt(a,Nl)||tt(a,Ol)||tt(a,Ml)};
Dx.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.M)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.M.i(b.clientParamIdentifier)}};
Dx[Ls]=[Cx];function Ex(){}
w(Ex,sw);Ex.prototype.j=function(){return iv};
Ex.prototype.i=function(a){return tt(a,Ll)||void 0};
Ex.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(Ex.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Fx(){}
w(Fx,sw);Fx.prototype.j=function(){return jv};
Fx.prototype.i=function(a){return tt(a,Rl)||void 0};
Fx.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Gx(){}
w(Gx,sw);Gx.prototype.j=function(){return kv};
Gx.prototype.i=function(a){return tt(a,Ql)||void 0};
Gx.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Hx(){}
w(Hx,sw);Hx.prototype.j=function(){return hv};
Hx.prototype.i=function(a){return tt(a,Pl)};
Hx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Ix=new Ms("FETCH_FN_TOKEN"),Jx=new Ms("PARSE_FN_TOKEN"),Kx=new Ms("WINDOW_REQUEST_TOKEN");function Lx(a,b){var c=C.apply(2,arguments);a=a===void 0?0:a;U.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
w(Lx,U);var Mx=new Ms("NETWORK_SLI_TOKEN");function Nx(a,b,c,d){this.h=a;this.i=b;this.j=c;this.o=d}
Nx.prototype.fetch=function(a,b,c){var d=this,e,f,g;return B(function(h){e=Ox(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){W(k);
if((c==null?0:c.pe)&&k instanceof Lx&&k.errorType===1)return Promise.reject(k)}))})};
function Ox(a,b,c){if(a.h){var d=bc(cc(5,nc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}d=c;T("wug_networking_gzip_request")&&(d=$q(c));var e;return new ((e=a.o)!=null?e:window.Request)(b,d)}
Nx.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.Fe)&&a.ok)return Hf(b.Fe,e);e=e.replace(")]}'","");if((b==null?0:b.pe)&&e)try{var f=d(e)}catch(h){throw new Lx(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Dh(),c=c.then(function(e){W(new U("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
Nx[Ls]=[Os(Mx),Os(Ix),Os(Jx),Os(Kx)];var Px=new Ms("NETWORK_MANAGER_TOKEN");var Qx;function Rx(a){var b=new jj;if(a.interpreterJavascript){var c=zl(a.interpreterJavascript);c=Eb(c).toString();var d=new hj;Ef(d,6,c);zf(b,hj,1,d,$d)}else a.interpreterUrl&&(c=Al(a.interpreterUrl),c=kb(c).toString(),d=new ij,Ef(d,4,c),zf(b,ij,2,d,$d));a.interpreterHash&&Ff(b,3,a.interpreterHash);a.program&&Ff(b,4,a.program);a.globalName&&Ff(b,5,a.globalName);a.clientExperimentsStateBlob&&Ff(b,7,a.clientExperimentsStateBlob);return b}
function Sx(a){var b={};a=y(a.split("&"));for(var c=a.next();!c.done;c=a.next())c=c.value.split("="),c.length===2&&(b[c[0]]=c[1]);return b}
;function xc(){if(T("bg_st_hr"))return"havuokmhhs-0";var a,b=((a=performance)==null?void 0:a.timeOrigin)||0;return"havuokmhhs-"+Math.floor(b)}
function Tx(a){this.h=a}
Tx.prototype.bindInnertubeChallengeFetcher=function(a){this.h.bicf(a)};
Tx.prototype.registerChallengeFetchedCallback=function(a){this.h.bcr(a)};
Tx.prototype.getLatestChallengeResponse=function(){return this.h.blc()};
function Ux(){return new Promise(function(a){var b=window.top;b.ntpevasrs!==void 0?a(new Tx(b.ntpevasrs)):(b.ntpqfbel===void 0&&(b.ntpqfbel=[]),b.ntpqfbel.push(function(c){a(new Tx(c))}))})}
;var Vx=[],Wx=!1;function Xx(){if(!T("disable_biscotti_fetch_for_ad_blocker_detection")&&!T("disable_biscotti_fetch_entirely_for_all_web_clients")&&Qu()){var a=S("PLAYER_VARS",{});if(qg(a)!="1"&&!Su(a)){var b=function(){Wx=!0;"google_ad_status"in window?cm("DCLKSTAT",1):cm("DCLKSTAT",2)};
try{pv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Vx.push(Lj.pa(function(){if(!(Wx||"google_ad_status"in window)){try{tv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Wx=!0;cm("DCLKSTAT",3)}},5E3))}}}
function Yx(){var a=Number(S("DCLKSTAT",0));return isNaN(a)?0:a}
;function Zx(a){this.h=a}
[new Zx("b.f_"),new Zx("j.s_"),new Zx("r.s_"),new Zx("e.h_"),new Zx("i.s_"),new Zx("s.t_"),new Zx("p.h_"),new Zx("s.i_"),new Zx("f.i_"),new Zx("a.b_"),new Zx("a.o_"),new Zx("g.o_"),new Zx("p.i_"),new Zx("p.m_"),new Zx("n.k_"),new Zx("i.f_"),new Zx("a.s_"),new Zx("m.c_"),new Zx("n.h_"),new Zx("o.p_")].reduce(function(a,b){a[b.h]=b;return a},{});function $x(a,b,c){var d=this;this.network=a;this.options=b;this.o=c;this.h=null;if(b.ai){var e=new nj;this.h=e.promise;D.ytAtRC&&Lj.Ra(function(){var f,g;return B(function(h){if(h.h==1){if(!D.ytAtRC)return h.return();f=ay(null);return h.yield(d.hb(f),2)}g=h.i;D.ytAtRC&&D.ytAtRC(JSON.stringify(g));h.h=0})},2);
Ux().then(function(f){var g,h,k,l;return B(function(m){if(m.h==1)return f.bindInnertubeChallengeFetcher(function(n){return d.hb(ay(n))}),m.yield(wc(),2);
g=m.i;h=f.getLatestChallengeResponse();k=h.challenge;if(!k)throw Error("BGE_MACIL");l={challenge:k,fb:Sx(k),vm:g,bgChallenge:new jj};e.resolve(l);f.registerChallengeFetchedCallback(function(n){n=n.challenge;if(!n)throw Error("BGE_MACR");n={challenge:n,fb:Sx(n),vm:g,bgChallenge:new jj};d.h=Promise.resolve(n)});
m.h=0})})}else b.preload&&by(this,new Promise(function(f){Hn(function(){f(cy(d))},0)}))}
$x.prototype.j=function(){var a=this;return B(function(b){return b.h==1?b.yield(Promise.race([a.h,null]),2):b.return(!!b.i)})};
$x.prototype.i=function(a,b,c){var d=this,e,f,g;return B(function(h){d.h===null&&by(d,cy(d));e=!1;f={};g=function(){var k,l,m;return B(function(n){switch(n.h){case 1:return n.yield(d.h,2);case 2:k=n.i;f.challenge=k.challenge;if(!k.vm){"c1a"in k.fb&&(f.error="ATTESTATION_ERROR_VM_NOT_INITIALIZED");n.A(3);break}l=Object.assign({},{c:k.challenge,e:a},b);xa(n,4);e=!0;if(T("attbs")&&!T("attmusi")){m=k.vm.ed({wb:l});n.A(6);break}return n.yield(k.vm.snapshot({wb:l}),7);case 7:m=n.i;case 6:m?f.webResponse=
m:f.error="ATTESTATION_ERROR_VM_NO_RESPONSE";ya(n,3);break;case 4:za(n),f.error="ATTESTATION_ERROR_VM_INTERNAL_ERROR";case 3:if(a==="ENGAGEMENT_TYPE_PLAYBACK"){var p=k.fb,t={};p.c6a&&(t.reportingStatus=String(Number(p.c)^Yx()));p.c6b&&(t.broadSpectrumDetectionResult=String(Number(p.c)^Number(S("CATSTAT",0))));f.adblockReporting=t}return n.return(f)}})};
return h.return(Promise.race([g(),dy(c,function(){var k=Object.assign({},f);e&&(k.error="ATTESTATION_ERROR_VM_TIMEOUT");return k})]))})};
function ay(a){var b={engagementType:"ENGAGEMENT_TYPE_UNBOUND"};a&&(b.interpreterHash=a);return b}
function cy(a,b){b=b===void 0?0:b;var c,d,e,f,g,h,k,l,m,n,p,t;return B(function(v){switch(v.h){case 1:c=ay(sj().h);if(T("att_fet_ks"))return xa(v,7),v.yield(a.hb(c),9);xa(v,4);return v.yield(ey(a,c),6);case 6:g=v.i;e=g.Oe;f=g.Pe;d=g;ya(v,3);break;case 4:return za(v),W(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),fy(a,864E5),v.return({challenge:"",fb:{},vm:void 0,bgChallenge:void 0});case 9:d=v.i;if(!d)throw Error("Fetching Attestation challenge returned falsy");
if(!d.challenge)throw Error("Missing Attestation challenge");e=d.challenge;f=Sx(e);if("c1a"in f&&(!d.bgChallenge||!d.bgChallenge.program))throw Error("Expected bg challenge but missing.");ya(v,3);break;case 7:h=za(v);W(h);b++;if(b>=5)return W(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),fy(a,864E5),v.return({challenge:"",fb:{},vm:void 0,bgChallenge:void 0});k=1E3*Math.pow(2,b-1)+Math.random()*1E3;return v.return(new Promise(function(x){Hn(function(){x(cy(a,
b))},k)}));
case 3:l=Number(f.t)||7200;fy(a,l*1E3);m=void 0;if(!("c1a"in f&&d.bgChallenge)){v.A(10);break}n=Rx(d.bgChallenge);xa(v,11);return v.yield(tj(sj(),n),13);case 13:ya(v,12);break;case 11:return p=za(v),W(p),v.return({challenge:e,fb:f,vm:m,bgChallenge:n});case 12:return xa(v,14),m=new pj({challenge:n,zd:{Da:"aGIf"}}),v.yield(m.Zc,16);case 16:ya(v,10);break;case 14:t=za(v),W(t),m=void 0;case 10:return v.return({challenge:e,fb:f,vm:m,bgChallenge:n})}})}
$x.prototype.hb=function(a){var b=this,c;return B(function(d){c=b.o;if(!c||c.ta())return d.return(b.network.hb(a));lx("att_pna");return d.return(new Promise(function(e){Qh(c,"publicytnetworkstatus-online",function(){b.network.hb(a).then(e)})}))})};
function gy(a){if(!a)throw Error("Fetching Attestation challenge returned falsy");if(!a.challenge)throw Error("Missing Attestation challenge");var b=a.challenge,c=Sx(b);if("c1a"in c&&(!a.bgChallenge||!a.bgChallenge.program))throw Error("Expected bg challenge but missing.");return Object.assign({},a,{Oe:b,Pe:c})}
function ey(a,b){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:c=void 0,d=0,e={};case 2:if(!(d<5)){h.A(4);break}if(!(d>0)){h.A(5);break}e.nd=1E3*Math.pow(2,d-1)+Math.random()*1E3;return h.yield(new Promise(function(k){return function(l){Hn(function(){l(void 0)},k.nd)}}(e)),5);
case 5:return xa(h,7),h.yield(a.hb(b),9);case 9:return f=h.i,h.return(gy(f));case 7:c=g=za(h),g instanceof Error&&W(g);case 8:d++;e={nd:void 0};h.A(2);break;case 4:throw c;}})}
function by(a,b){a.h=b}
function hy(a){var b,c,d;return B(function(e){if(e.h==1)return e.yield(Promise.race([a.h,null]),2);b=e.i;var f=cy(a);a.h=f;(c=b)==null||(d=c.vm)==null||d.dispose();e.h=0})}
function fy(a,b){function c(){var e;return B(function(f){e=d-Date.now();return e<1E3?f.yield(hy(a),0):(Hn(c,Math.min(e,6E4)),f.A(0))})}
var d=Date.now()+b;c()}
function dy(a,b){return new Promise(function(c){Hn(function(){c(b())},a)})}
;function iy(a){this.h=a}
iy.prototype.hb=function(a){lx("att_fsr");return xx(this.h,a).then(function(b){lx("att_frr");return b})};function jy(){var a,b,c;return B(function(d){if(d.h==1)return a=Us().resolve(zx),a?d.yield(sx(a),2):(W(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return W(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.zh;return d.return(c)}W(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function ky(){}
w(ky,sw);ky.prototype.j=function(){return iv};
ky.prototype.i=function(a){return tt(a,Sl)};
ky.prototype.h=function(a,b){b.undoToken&&(a.feedbackTokens=[b.undoToken]);b.isUndoTokenUnencrypted&&(a.isFeedbackTokenUnencrypted=b.isUndoTokenUnencrypted)};
fa.Object.defineProperties(ky.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ly(){var a;return(a=S("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var my=D.caches,ny;function oy(a){var b=a.indexOf(":");return b===-1?{Cd:a}:{Cd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function py(){return B(function(a){if(ny!==void 0)return a.return(ny);ny=new Promise(function(b){var c;return B(function(d){switch(d.h){case 1:return xa(d,2),d.yield(my.open("test-only"),4);case 4:return d.yield(my.delete("test-only"),5);case 5:ya(d,3);break;case 2:if(c=za(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(ny)})}
function qy(a){var b,c,d,e,f,g,h;B(function(k){if(k.h==1)return k.yield(py(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(my.keys(),3)}c=k.i;d=y(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=oy(f),h=g.datasyncId,!h||a.includes(h)||b.push(my.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function ry(){var a,b,c,d,e,f,g;return B(function(h){if(h.h==1)return h.yield(py(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=Fn("cache contains other");return h.yield(my.keys(),3)}b=h.i;c=y(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=oy(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function sy(){try{return!!self.sessionStorage}catch(a){return!1}}
;function ty(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function uy(a){if(sy()){var b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=ty(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function vy(){if(!sy())return!1;var a=Fn(),b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=ty(c.value),c!==void 0&&c!==a)return!0;return!1}
;function wy(){jy().then(function(a){a&&(Lp(a),qy(a),Vv(a),uy(a))})}
function xy(){var a=new Sr;Lj.pa(function(){var b,c,d,e,f;return B(function(g){switch(g.h){case 1:if(T("ytidb_clear_optimizations_killswitch")){g.A(2);break}b=Fn("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Lp(h);qy(h);Vv(h);uy(h);return g.return()}c=Wv();d=vy();return g.yield(ry(),3);case 3:return e=g.i,g.yield(Mp(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.ta()?wy():Qh(a,"publicytnetworkstatus-online",wy),g.h=0}})})}
;var yy=["www.youtube-nocookie.com","www.youtubeeducation.com","youtube.googleapis.com"];function zy(){this.state=1;this.vm=null;this.h=void 0}
r=zy.prototype;r.initialize=function(a,b,c,d){this.h=d;if(a.program){var e;d=(e=a.interpreterUrl)!=null?e:null;if(a.interpreterSafeScript)e=zl(a.interpreterSafeScript);else{var f;e=(f=a.interpreterScript)!=null?f:null}a.interpreterSafeUrl&&(d=Al(a.interpreterSafeUrl).toString());Ay(this,e,d,a.program,b,c)}else W(Error("BL:CIP"))};
function Ay(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,pv(c,function(){window[g]?By(a,d,g,e):(a.state=3,rv(c),W(new U("BL:ULB",""+c)))},f)):b?(f=zg("SCRIPT"),b instanceof Bb?(f.textContent=Eb(b),Fb(f)):f.textContent=b,f.nonce=Ab(document),document.head.appendChild(f),document.head.removeChild(f),window[g]?By(a,d,g,e):(a.state=4,W(new U("BL:ULBJ")))):W(new U("BL:ULV"))}
r.isLoading=function(){return this.state===2};
function By(a,b,c,d){a.state=5;var e=!!a.h&&yy.includes(dc(a.h)||"");try{var f=new pj({program:b,globalName:c,zd:{disable:!T("att_web_record_metrics")||!T("att_skip_metrics_for_cookieless_domains_ks")&&e,Da:"aGIf"}});f.Zc.then(function(){a.state=6;d&&d(b)});
a.Yc(f)}catch(g){a.state=7,g instanceof Error&&W(g)}}
r.invoke=function(a){a=a===void 0?{}:a;return this.jd()?this.Pd({wb:a}):null};
r.dispose=function(){this.Yc(null);this.state=8};
r.jd=function(){return!!this.vm};
r.Pd=function(a){return this.vm.ed(a)};
r.Yc=function(a){tc(this.vm);this.vm=a};function Cy(){var a=F("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Dy(){zy.apply(this,arguments)}
w(Dy,zy);Dy.prototype.Yc=function(a){var b;(b=Cy())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.ed.bind(a)},E("yt.abuse.playerAttLoader",b),E("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(E("yt.abuse.playerAttLoader",null),E("yt.abuse.playerAttLoaderRun",null))};
Dy.prototype.jd=function(){return!!Cy()};
Dy.prototype.Pd=function(a){return Cy().bgvmc(a)};var Ey=new Ms("AUTH_SERVICE_TOKEN");function Fy(a){dt.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.G},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.M},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.M},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(Fy,dt);Fy.prototype.G=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Fy.prototype.u=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Fy.prototype.M=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
Fy.prototype.i=function(){this.h=new Map};function Gy(a){dt.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.M},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.M},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.M},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
T("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(Gy,dt);Gy.prototype.i=function(a,b){a(b==null?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Gy.prototype.h=function(a,b){a(b==null?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Gy.prototype.u=function(a,b){a(b==null?void 0:b.event)};
Gy.prototype.M=function(a,b){a(b==null?void 0:b.event)};function Hy(){this.o=new Fy;this.u=new Gy}
Hy.prototype.install=function(){var a=C.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.u.install(c)})};function Iy(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
Iy.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=Du(c===void 0?0:c)){a=this.client;d=new wu({trackingParams:d});var e=void 0;if(T("no_client_ve_attach_unless_shown")){var f=Qv(d,c);Mv.set(f,!0);Rv(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Pv({cttAuthInfo:Fu(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?Sv("visualElementGestured",f,d):a?cu("visualElementGestured",d,a,f):wo("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Iy.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new wu({trackingParams:a}),b,c===void 0?0:c)};
Iy.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=Du(d);a||(a=(a=Au(d===void 0?0:d))?new wu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Pv({cttAuthInfo:Fu(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?Sv("visualElementStateChanged",d,b):a?cu("visualElementStateChanged",b,a,d):wo("visualElementStateChanged",b,d))}};
function Jy(a,b){if(b===void 0)for(var c=Cu(),d=0;d<c.length;d++)c[d]!==void 0&&Jy(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Ov(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Ky(){Hy.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));T("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));T("web_log_cfg_cee_ks")||Hn(Ly)}
w(Ky,Hy);Ky.prototype.j=function(){wo("finalPayload",{csn:Du()})};
Ky.prototype.h=function(){qu(ru)};
Ky.prototype.i=function(){var a=Jy;Iy.instance||(Iy.instance=new Iy);a(Iy.instance)};
function Ly(){var a=S("CLIENT_EXPERIMENT_EVENTS");if(a){var b=fe();a=y(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&wo("genericClientExperimentEvent",{eventType:c});delete bm.CLIENT_EXPERIMENT_EVENTS}}
;function My(){}
function Ny(){var a=F("ytglobal.storage_");a||(a=new My,E("ytglobal.storage_",a));return a}
My.prototype.estimate=function(){var a,b,c;return B(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(Oy()):d.return()})};
function Oy(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
E("ytglobal.storageClass_",My);function uo(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
uo.prototype.Ha=function(a){this.handleError(a)};
uo.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":T("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":T("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Py(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Py(a,b){Ny().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:Qy(c==null?void 0:c.usage),deviceStorageQuotaMbytes:Qy(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Qy(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var Ry={Ic:{feedbackEndpoint:nw(Ex),modifyChannelNotificationPreferenceEndpoint:nw(Fx),playlistEditEndpoint:nw(Gx),shareEntityEndpoint:nw(Dx),subscribeEndpoint:nw(Ax),undoFeedbackEndpoint:nw(ky),unsubscribeEndpoint:nw(Bx),webPlayerShareEntityServiceEndpoint:nw(Hx)}};function Sy(){var a=Us();Qs(a,{pb:Px,Fc:Nx});Qs(a,{pb:Ey,Fc:jn});var b=iw(),c=a.resolve(Ey),d=a.resolve(Px),e={};b&&(e.client_location=b);rx(Ry,d,c,e);Qs(a,{pb:zx,hd:qx.instance})}
;var Ty={},Uy=(Ty["api.invalidparam"]=2,Ty.auth=150,Ty["drm.auth"]=150,Ty["heartbeat.net"]=150,Ty["heartbeat.servererror"]=150,Ty["heartbeat.stop"]=150,Ty["html5.unsupportedads"]=5,Ty["fmt.noneavailable"]=5,Ty["fmt.decode"]=5,Ty["fmt.unplayable"]=5,Ty["html5.missingapi"]=5,Ty["html5.unsupportedlive"]=5,Ty["drm.unavailable"]=5,Ty["mrm.blocked"]=151,Ty["embedder.identity.denied"]=152,Ty);var Vy=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn playmuted muted_autoplay_duration_mode".split(" "));function Wy(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function Xy(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=y(Vy);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Yy(a,b,c,d){if(Pa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function Zy(a){G.call(this);var b=this;this.api=a;this.Y=this.u=!1;this.D=[];this.P={};this.j=[];this.i=[];this.Z=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.U=T("web_player_split_event_bus_iframe");this.o=S("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.G=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.Y=!0;b.u=!1;b.sendMessage("initialDelivery",$y(b));b.sendMessage("onReady");e=y(b.D);for(d=e.next();!d.done;d=e.next())az(b,d.value);b.D=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.Z&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.P[e]||e==="onReady"||
(c=bz(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.U?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.P[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&Wy(e)){var f=d;if(Pa(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=Xy(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=Xy(g);break;case "loadPlaylist":case "cuePlaylist":g=Yy(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);Wy(e)&&cz(b,$y(b))}}}};
dz.addEventListener("message",this.G);if(a=S("WIDGET_ID"))this.sessionId=a;ez(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.Z=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?Uy[c]||d:d;b.sendMessage("onError",Number(b.errorCode))}});
ez(this,"onVideoProgress",this.jf.bind(this));ez(this,"onVolumeChange",this.kf.bind(this));ez(this,"onApiChange",this.bf.bind(this));ez(this,"onPlaybackQualityChange",this.ff.bind(this));ez(this,"onPlaybackRateChange",this.gf.bind(this));ez(this,"onStateChange",this.hf.bind(this));ez(this,"onWebglSettingsChanged",this.lf.bind(this));ez(this,"onCaptionsTrackListChanged",this.cf.bind(this));ez(this,"captionssettingschanged",this.df.bind(this))}
w(Zy,G);function cz(a,b){a.sendMessage("infoDelivery",b)}
r=Zy.prototype;r.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.Y?az(this,a):this.D.push(a)};
function bz(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function ez(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function $y(a){if(!a.api)return null;var b=a.api.getApiInterface();Tb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
r.hf=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&!T("embeds_enable_vfsyb")&&(a.storyboardFormat=this.api.getStoryboardFormat());cz(this,a)};
r.ff=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());cz(this,a)};
r.gf=function(a){cz(this,{playbackRate:a})};
r.bf=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
r.kf=function(){cz(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
r.jf=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());cz(this,a)};
r.lf=function(){cz(this,{sphericalProperties:this.api.getSphericalProperties()})};
r.cf=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};cz(this,a)}};
r.df=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};cz(this,a)}};
function az(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){W(d)}}}
r.ba=function(){G.prototype.ba.call(this);dz.removeEventListener("message",this.G);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.U?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var dz=window;function fz(a,b,c){G.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=T("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.ea){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=gz(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=hz(g,f))&&iz(d,g,f))}}}}}};
jz.addEventListener("message",this.i);iz(this,"RECEIVING")}
w(fz,G);r=fz.prototype;r.addListener=function(a,b){if(!(a in this.h)){var c=this.ef.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
r.ef=function(a,b){this.ea||iz(this,a,kz(a,b))};
r.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
r.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
r.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function gz(a,b){switch(a){case "loadVideoById":return[Xy(b)];case "cueVideoById":return[Xy(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[Yy(b)];case "cuePlaylist":return[Yy(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function hz(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function kz(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function iz(a,b,c){a.ea||(b={id:a.id,command:b},c&&(b.data=c),lz.postMessage(JSON.stringify(b),a.origin))}
r.ba=function(){jz.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);G.prototype.ba.call(this)};
var jz=window,lz=window.parent;var mz=new Dy;function nz(){return mz.jd()}
function oz(a){a=a===void 0?{}:a;return mz.invoke(a)}
;function pz(a,b,c,d,e){G.call(this);var f=this;this.D=b;this.webPlayerContextConfig=d;this.Kb=e;this.Pa=!1;this.api={};this.ma=this.u=null;this.U=new O;this.h={};this.Z=this.xa=this.elementId=this.Qa=this.config=null;this.Y=!1;this.j=this.G=null;this.Fa={};this.Gc=["onReady"];this.lastError=null;this.eb=NaN;this.P={};this.ha=0;this.i=this.o=a;vc(this,this.U);qz(this);c?this.ha=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(rz(this),sz(this))}
w(pz,G);r=pz.prototype;r.getId=function(){return this.D};
r.loadNewVideoConfig=function(a){if(!this.ea){this.ha&&(clearTimeout(this.ha),this.ha=0);var b=a||{};b instanceof ev||(b=new ev(b));this.config=b;this.setConfig(a);sz(this);this.isReady()&&tz(this)}};
function rz(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.D,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.D:a.config.attrs.id=a.D);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
r.setConfig=function(a){this.Qa=a;this.config=uz(a);rz(this);if(!this.xa){var b;this.xa=vz(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Fj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Fj(Number(a)||a))};
function tz(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function wz(a){var b=!0,c=xz(a);c&&a.config&&(b=c.dataset.version===yz(a));return b&&!!F("yt.player.Application.create")}
function sz(a){if(!a.ea&&!a.Y){var b=wz(a);if(b&&(xz(a)?"html5":null)==="html5")a.Z="html5",a.isReady()||zz(a);else if(Az(a),a.Z="html5",b&&a.j&&a.o)a.o.appendChild(a.j),zz(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=Bz(a,"player_bootstrap_method")?F("yt.player.Application.createAlternate")||F("yt.player.Application.create"):F("yt.player.Application.create");var e=a.config?uz(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.Kb);zz(a)};
a.Y=!0;b?a.G():(pv(yz(a),a.G),(b=Cz(a))&&wv(b||""),Dz(a)&&!c&&E("yt.player.Application.create",null))}}}
function xz(a){var b=yg(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function zz(a){if(!a.ea){var b=xz(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!Bz(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}Ez(a)}else a.eb=setTimeout(function(){zz(a)},50)}}
function Ez(a){qz(a);a.Pa=!0;var b=xz(a);if(b){a.u=Fz(a,b,"addEventListener");a.ma=Fz(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Fz(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);tz(a);a.xa&&a.xa(a.api);a.U.sb("onReady",a.api)}
function Fz(a,b,c){var d=b[c];return function(){var e=C.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new U("PlayerProxy error in method call",{error:f,method:c,playerId:a.D}),e.level="WARNING",e;}}}
function qz(a){a.Pa=!1;if(a.ma)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ma(b,a.h[b]);for(var c in a.P)a.P.hasOwnProperty(c)&&clearTimeout(Number(c));a.P={};a.u=null;a.ma=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Qa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
r.isReady=function(){return this.Pa};
r.addEventListener=function(a,b){var c=this,d=vz(this,b);d&&(Mb(this.Gc,a)>=0||this.h[a]||(b=Gz(this,a),this.u&&this.u(a,b)),this.U.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
r.removeEventListener=function(a,b){this.ea||(b=vz(this,b))&&this.U.unsubscribe(a,b)};
function vz(a,b){var c=b;if(typeof b==="string"){if(a.Fa[b])return a.Fa[b];c=function(){var d=C.apply(0,arguments),e=F(b);if(e)try{e.apply(D,d)}catch(f){throw d=new U("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Fa[b]=c}return c?c:null}
function Gz(a,b){function c(d){function e(){if(!a.ea)try{a.U.sb(b,d!=null?d:void 0)}catch(h){var g=new U("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.D,data:d,originalStack:h.stack,componentStack:h.de});g.level="WARNING";throw g;}}
if(Bz(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.P,h=String(f);h in g&&delete g[h]},0);
pg(a.P,String(f))}}
return a.h[b]=c}
r.getPlayerType=function(){return this.Z||(xz(this)?"html5":null)};
r.getLastError=function(){return this.lastError};
function Az(a){a.cancel();qz(a);a.Z=null;a.config&&(a.config.loaded=!1);var b=xz(a);b&&(wz(a)||!Dz(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
r.cancel=function(){this.G&&tv(yz(this),this.G);clearTimeout(this.eb);this.Y=!1};
r.ba=function(){Az(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new U("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Fa=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Qa=this.config=this.api=null;delete this.o;delete this.i;G.prototype.ba.call(this)};
function Dz(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function yz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Cz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Bz(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function uz(a){for(var b={},c=y(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?sg(e):e}return b}
;var Hz={},Iz="player_uid_"+(Math.random()*1E9>>>0);function Jz(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?yg(c):c;var e=Iz+"_"+Sa(c),f=Hz[e];if(f&&d)return Kz(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new pz(c,e,a,b,void 0);Hz[e]=f;f.addOnDisposeCallback(function(){delete Hz[f.getId()]});
return f.api}
function Kz(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Lz=null,Mz=null;
function Nz(){mx();var a=un(),b=xn(119),c=window.devicePixelRatio>1;if(document.body&&Tj(document.body,"exp-invert-logo"))if(c&&!Tj(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Tj(d,"inverted-hdpi")){var e=Rj(d);Sj(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Tj(document.body,"inverted-hdpi")&&Uj();if(b!=c){b="f"+(Math.floor(119/31)+1);d=yn(b)||0;d=c?d|67108864:d&-67108865;d===0?delete rn[b]:(c=d.toString(16),rn[b]=c.toString());
c=!0;T("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in rn)rn.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(rn[f])));var f=d.join("&");nn(b,f,63072E3,a.i,c)}}
function Oz(){Pz()}
function Qz(){hx("ep_init_pr");Pz()}
function Pz(){var a=Lz.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Rz(){Lz&&Lz.sendAbandonmentPing&&Lz.sendAbandonmentPing();S("PL_ATT")&&mz.dispose();for(var a=Lj,b=0,c=Vx.length;b<c;b++)a.qa(Vx[b]);Vx.length=0;rv("//static.doubleclick.net/instream/ad_status.js");Wx=!1;cm("DCLKSTAT",0);uc(Mz);Lz&&(Lz.removeEventListener("onVideoDataChange",Oz),Lz.destroy())}
;hx("ep_init_eps");E("yt.setConfig",cm);E("yt.config.set",cm);E("yt.setMsg",ov);E("yt.msgs.set",ov);E("yt.logging.errors.log",lu);
E("writeEmbed",function(){hx("ep_init_wes");var a=S("PLAYER_CONFIG");if(!a){var b=S("PLAYER_VARS");b&&(a={args:b})}$v(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=S("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);c=ly();if(!c.serializedForcedExperimentIds){var d=qm(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)?dx("watch",["pbs","pbu","pbp"]):a.args&&Ru(a.args)?dx("video_preview",["ol"]):dx("embed_no_video",["ep_init_pr"]);Lz=Jz(a,c);Lz.addEventListener("onVideoDataChange",Oz);Lz.addEventListener("onReady",Qz);a=S("POST_MESSAGE_ID","player");S("ENABLE_JS_API")?Mz=new Zy(Lz):S("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(Mz=new fz(Lz,a,b));Xx();T("ytidb_create_logger_embed_killswitch")||to();a={};Ky.h||(Ky.h=new Ky);Ky.h.install((a.flush_logs=
{callback:function(){Qt()}},a));
ds();if(T("embeds_enable_separate_ITS")){Sy();var f=function(){return qx.instance}}else f=function(){var g,h;
if(!Qx){var k=Us();Qs(k,{pb:Px,Fc:Nx});var l={Ic:{feedbackEndpoint:nw(Ex),modifyChannelNotificationPreferenceEndpoint:nw(Fx),playlistEditEndpoint:nw(Gx),shareEntityEndpoint:nw(Dx),subscribeEndpoint:nw(Ax),unsubscribeEndpoint:nw(Bx),webPlayerShareEntityServiceEndpoint:nw(Hx)}},m=iw(),n={};m&&(n.client_location=m);g===void 0&&(g=kn());h===void 0&&(h=k.resolve(Px));rx(l,h,g,n);Qs(k,{pb:zx,hd:qx.instance});Qx=k.resolve(zx)}return Qx};
T("ytidb_clear_embedded_player")&&Lj.pa(function(){f();xy()});
T("enable_rta_manager")&&Hn(function(){var g=new iy(f());var h={preload:!T("enable_rta_npi")},k=!1;if(typeof h==="boolean")var l={preload:h};else typeof h==="undefined"?l={preload:!0}:(l=h,k=!!h.Ah);h=k?void 0:new Sr;$x.instance=new $x(g,l,h);g=$x.instance;l=g.i.bind(g);E("yt.aba.att",l);g=g.j.bind(g);E("yt.aba.att2",g)});
hx("ep_init_wee")});
E("yt.abuse.player.botguardInitialized",F("yt.abuse.player.botguardInitialized")||nz);E("yt.abuse.player.invokeBotguard",F("yt.abuse.player.invokeBotguard")||oz);E("yt.abuse.dclkstatus.checkDclkStatus",F("yt.abuse.dclkstatus.checkDclkStatus")||Yx);E("yt.player.exports.navigate",F("yt.player.exports.navigate")||Zv);E("yt.util.activity.init",F("yt.util.activity.init")||xs);E("yt.util.activity.getTimeSinceActive",F("yt.util.activity.getTimeSinceActive")||As);
E("yt.util.activity.setTimestamp",F("yt.util.activity.setTimestamp")||ys);window.addEventListener("load",gm(function(){Nz()}));
window.addEventListener("pageshow",gm(function(a){a.persisted||Nz()}));
window.addEventListener("pagehide",gm(function(a){T("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Rz():a.persisted||Rz()}));
window.onerror=function(a,b,c,d,e){var f;b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=dm("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new U(h),e.name="UnhandledWindowError",e.message=
h,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!T("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.de)f||(f={}),f.componentStack=du(m)}f&&ou(e,f);g?lu(e):W(e)}};
Bi=mu;window.addEventListener("unhandledrejection",function(a){mu(a.reason)});
Nb(S("ERRORS")||[],function(a){lu.apply(null,a)});
cm("ERRORS",[]);hx("ep_init_epe");}).call(this);
