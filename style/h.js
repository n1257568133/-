(function(){var h={},mt={},c={id:"affdf09dddabcdf2d681acefa474b973",dm:["mcbbs.net"],js:"tongji.baidu.com/hm-web/js/",etrk:[],cetrk:[],cptrk:[],icon:'/hmt/icon/21|gif|20|20',ctrk:false,align:-1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,kbtrk:0,pt:0,spa:0,aet:'',hca:'3D8C243A0A815C69',conv:0,med:0,cvcc:'',cvcf:[],apps:''};var r=void 0,u=!0,v=null,w=!1;mt.cookie={};mt.cookie.set=function(a,b,d){var e;d.Q&&(e=new Date,e.setTime(e.getTime()+d.Q));document.cookie=a+"="+b+(d.domain?"; domain="+d.domain:"")+(d.path?"; path="+d.path:"")+(e?"; expires="+e.toGMTString():"")+(d.Ec?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:v};
mt.cookie.fc=function(a,b){try{var d="Hm_ck_"+ +new Date;mt.cookie.set(d,"is-cookie-enabled",{domain:a,path:b,Q:r});var e="is-cookie-enabled"===mt.cookie.get(d)?"1":"0";mt.cookie.set(d,"",{domain:a,path:b,Q:-1});return e}catch(k){return"0"}};mt.lang={};mt.lang.d=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.Wa=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.H=function(a){return mt.lang.d(a,"String")};mt.lang.isArray=function(a){return mt.lang.d(a,"Array")};
mt.lang.h=function(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a};mt.lang.trim=function(a){return a.replace(/^\s+|\s+$/g,"")};mt.lang.G=function(a,b){var d=w;if(a==v||!mt.lang.d(a,"Array")||b===r)return d;if(Array.prototype.indexOf)d=-1!==a.indexOf(b);else for(var e=0;e<a.length;e++)if(a[e]===b){d=u;break}return d};mt.url={};mt.url.m=function(a,b){var d=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return d?d[3]:v};
mt.url.Bc=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:v};mt.url.Ib=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):v};mt.url.L=function(a){return(a=mt.url.Ib(a))?a.replace(/:\d+$/,""):a};mt.url.ua=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):v};
(function(){var a=mt.lang,b=mt.url;mt.f={};mt.f.Ra=function(d){return document.getElementById(d)};mt.f.sa=function(d){if(!d)return v;try{d=String(d);if(0===d.indexOf("!HMCQ!"))return d;if(0===d.indexOf("!HMCC!"))return document.querySelector(d.substring(6,d.length));for(var e=d.split(">"),a=document.body,b=e.length-1;0<=b;b--)if(-1<e[b].indexOf("#")){var f=e[b].split("#")[1];(a=document.getElementById(f))||(a=document.getElementById(decodeURIComponent(f)));e=e.splice(b+1,e.length-(b+1));break}for(d=
0;a&&d<e.length;){var m=String(e[d]).toLowerCase();if(!("html"===m||"body"===m)){var b=0,q=e[d].match(/\[(\d+)\]/i),f=[];if(q)b=q[1]-1,m=m.split("[")[0];else if(1!==a.childNodes.length){for(var s=0,t=0,p=a.childNodes.length;t<p;t++){var y=a.childNodes[t];1===y.nodeType&&y.nodeName.toLowerCase()===m&&s++;if(1<s)return v}if(1!==s)return v}for(s=0;s<a.childNodes.length;s++)1===a.childNodes[s].nodeType&&a.childNodes[s].nodeName.toLowerCase()===m&&f.push(a.childNodes[s]);if(!f[b])return v;a=f[b]}d++}return a}catch(g){return v}};
mt.f.ua=function(a,e){var b=[],l=[];if(!a)return l;for(;a.parentNode!=v;){for(var f=0,m=0,q=a.parentNode.childNodes.length,s=0;s<q;s++){var t=a.parentNode.childNodes[s];if(t.nodeName===a.nodeName&&(f++,t===a&&(m=f),0<m&&1<f))break}if((q=""!==a.id)&&e){b.unshift("#"+encodeURIComponent(a.id));break}else q&&(q="#"+encodeURIComponent(a.id),q=0<b.length?q+">"+b.join(">"):q,l.push(q)),b.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+(1<f?"["+m+"]":""));a=a.parentNode}l.push(b.join(">"));return l};
mt.f.va=function(a){return(a=mt.f.ua(a,u))&&a.length?String(a[0]):""};mt.f.Mb=function(a){return mt.f.ua(a,w)};mt.f.Cb=function(a){var e;for(e="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==e)return a;return v};mt.f.Eb=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.f.Kb=function(a){var e={top:0,left:0};if(!a)return e;var b=mt.f.Eb(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(e=a.getBoundingClientRect());return{top:e.top+(window.pageYOffset||b.scrollTop)-
(b.clientTop||0),left:e.left+(window.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}};mt.f.getAttribute=function(a,e){var b=a.getAttribute&&a.getAttribute(e)||v;if(!b&&a.attributes&&a.attributes.length)for(var l=a.attributes,f=l.length,m=0;m<f;m++)l[m].nodeName===e&&(b=l[m].nodeValue);return b};mt.f.T=function(a){var e="document";a.tagName!==r&&(e=a.tagName);return e.toLowerCase()};mt.f.Pb=function(b){var e="";b.textContent?e=a.trim(b.textContent):b.innerText&&(e=a.trim(b.innerText));e&&(e=e.replace(/\s+/g,
" ").substring(0,255));return e};mt.f.S=function(d,e){var k;a.H(d)&&0===String(d).indexOf("!HMCQ!")?(k=String(d),k=b.m(document.location.href,k.substring(6,k.length))):a.H(d)||(k=mt.f.T(d),"input"===k&&e&&("button"===d.type||"submit"===d.type)?k=a.trim(d.value)||"":"input"===k&&!e&&"password"!==d.type?k=a.trim(d.value)||"":"img"===k?(k=mt.f.getAttribute,k=k(d,"alt")||k(d,"title")||k(d,"src")):k="body"===k||"html"===k?["(hm-default-content-for-",k,")"].join(""):mt.f.Pb(d));return String(k||"").substring(0,
255)};(function(){(mt.f.cb=function(){function a(){if(!a.ea){a.ea=u;for(var e=0,b=l.length;e<b;e++)l[e]()}}function e(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(e,1);return}a()}var b=w,l=[],f;document.addEventListener?f=function(){document.removeEventListener("DOMContentLoaded",f,w);a()}:document.attachEvent&&(f=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",f),a())});(function(){if(!b)if(b=u,"complete"===document.readyState)a.ea=u;
else if(document.addEventListener)document.addEventListener("DOMContentLoaded",f,w),window.addEventListener("load",a,w);else if(document.attachEvent){document.attachEvent("onreadystatechange",f);window.attachEvent("onload",a);var l=w;try{l=window.frameElement==v}catch(q){}document.documentElement.doScroll&&l&&e()}})();return function(e){a.ea?e():l.push(e)}}()).ea=w})();return mt.f})();mt.event={};
mt.event.e=function(a,b,d){a.attachEvent?a.attachEvent("on"+b,function(e){d.call(a,e)}):a.addEventListener&&a.addEventListener(b,d,w)};mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=w};
(function(){var a=mt.event;mt.g={};mt.g.Aa=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.g.Jb=function(){if(document.documentMode)return document.documentMode;var a=/msie (\d+\.\d+)/i.exec(navigator.userAgent);return a?+a[1]||0:0};mt.g.dc=function(){try{return!!navigator.userAgent.match(/safari/i)&&!navigator.userAgent.match(/chrome/i)&&"undefined"!==typeof document.body.style.webkitFilter&&!window.chrome}catch(a){return w}};mt.g.cookieEnabled=navigator.cookieEnabled;mt.g.javaEnabled=navigator.javaEnabled();
mt.g.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.g.ic=(window.screen.width||0)+"x"+(window.screen.height||0);mt.g.colorDepth=window.screen.colorDepth||0;mt.g.U=function(){var a;a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.g.M=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.g.lb=
0;mt.g.Rb=function(){var a=document;return parseInt(window.innerWidth||a.documentElement.clientWidth||a.body.offsetWidth||0,10)};mt.g.orientation=0;(function(){function b(){var a=0;window.orientation!==r&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==r)&&(a=screen.orientation.angle);mt.g.orientation=a;mt.g.lb=mt.g.Rb()}b();a.e(window,"orientationchange",b)})();return mt.g})();mt.o={};mt.o.parse=function(a){return(new Function("return ("+a+")"))()};
mt.o.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var e=d[a];if(e)return e;e=a.charCodeAt();return"\\u00"+Math.floor(e/16).toString(16)+(e%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var d={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(e){switch(typeof e){case "undefined":return"undefined";case "number":return isFinite(e)?String(e):"null";case "string":return a(e);case "boolean":return String(e);
default:if(e===v)return"null";if(e instanceof Array){var k=["["],d=e.length,f,m,q;for(m=0;m<d;m++)switch(q=e[m],typeof q){case "undefined":case "function":case "unknown":break;default:f&&k.push(","),k.push(mt.o.stringify(q)),f=1}k.push("]");return k.join("")}if(e instanceof Date)return'"'+e.getFullYear()+"-"+b(e.getMonth()+1)+"-"+b(e.getDate())+"T"+b(e.getHours())+":"+b(e.getMinutes())+":"+b(e.getSeconds())+'"';f=["{"];m=mt.o.stringify;for(d in e)if(Object.prototype.hasOwnProperty.call(e,d))switch(q=
e[d],typeof q){case "undefined":case "unknown":case "function":break;default:k&&f.push(","),k=1,f.push(m(d)+":"+m(q))}f.push("}");return f.join("")}}}();mt.localStorage={};mt.localStorage.la=function(){if(!mt.localStorage.l)try{mt.localStorage.l=document.createElement("input"),mt.localStorage.l.type="hidden",mt.localStorage.l.style.display="none",mt.localStorage.l.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l)}catch(a){return w}return u};
mt.localStorage.set=function(a,b,d){var e=new Date;e.setTime(e.getTime()+d||31536E6);try{window.localStorage?(b=e.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.la()&&(mt.localStorage.l.expires=e.toUTCString(),mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.setAttribute(a,b),mt.localStorage.l.save(document.location.hostname))}catch(k){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),d=a.substring(0,b)-0;if(d&&d>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.la())try{return mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.getAttribute(a)}catch(e){}return v};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.la())try{mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.removeAttribute(a),mt.localStorage.l.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){try{window.sessionStorage&&window.sessionStorage.setItem(a,b)}catch(d){}};
mt.sessionStorage.get=function(a){try{return window.sessionStorage?window.sessionStorage.getItem(a):v}catch(b){return v}};mt.sessionStorage.remove=function(a){try{window.sessionStorage&&window.sessionStorage.removeItem(a)}catch(b){}};mt.hb={};mt.hb.log=function(a,b){var d=new Image,e="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[e]=d;d.onload=function(){d.onload=v;d=window[e]=v;b&&b(a)};d.src=a};mt.Ha={};
mt.Ha.Qb=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(d){}return a};
mt.Ha.Ac=function(a,b,d,e,k){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+d+'" height="'+e+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(k||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+d+'" height="'+e+'" src="'+b+'" flashvars="'+(k||"")+'" allowscriptaccess="always" /></object>'};
h.A={Yb:"http://tongji.baidu.com/hm-web/welcome/ico",bb:"hm.baidu.com/hm.gif",rb:/^(tongji|hmcdn).baidu.com$/,jb:"tongji.baidu.com",Vb:"hmmd",Wb:"hmpl",uc:"utm_medium",Ub:"hmkw",wc:"utm_term",Sb:"hmci",tc:"utm_content",Xb:"hmsr",vc:"utm_source",Tb:"hmcu",sc:"utm_campaign",N:0,J:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",Ba:"https:",Cc:0,yc:6E5,Dc:6E5,jc:5E3,zc:5,oa:1024,xc:1,Da:2147483647,ib:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn r ww p ct u tt".split(" "),
V:u,Oa:["a","input","button"],La:{id:"data-hm-id",aa:"data-hm-class",$:"data-hm-xpath",content:"data-hm-content",ha:"data-hm-tag",link:"data-hm-link"},Na:"data-hm-enabled",Ma:"data-hm-disabled",gc:"https://hmcdn.baidu.com/static/tongji/plugins/",ab:["UrlChangeTracker"]};(function(){var a={F:{},e:function(a,d){this.F[a]=this.F[a]||[];this.F[a].push(d)},K:function(a,d){this.F[a]=this.F[a]||[];for(var e=this.F[a].length,k=0;k<e;k++)this.F[a][k](d)}};return h.z=a})();
(function(){function a(a,e){var k=document.createElement("script");k.charset="utf-8";b.d(e,"Function")&&(k.readyState?k.onreadystatechange=function(){if("loaded"===k.readyState||"complete"===k.readyState)k.onreadystatechange=v,e()}:k.onload=function(){e()});k.src=a;var l=document.getElementsByTagName("script")[0];l.parentNode.insertBefore(k,l)}var b=mt.lang;return h.load=a})();
(function(){var a=h.A,b={init:function(){if(""!==c.icon){var b=c.icon.split("|"),e=a.Yb+"?s="+c.id,k="https://hmcdn.baidu.com/static"+b[0]+".gif";document.write("swf"===b[1]||"gif"===b[1]?'<a href="'+e+'" target="_blank"><img border="0" src="'+k+'" width="'+b[2]+'" height="'+b[3]+'"></a>':'<a href="'+e+'" target="_blank">'+b[0]+"</a>")}}};h.z.e("pv-b",b.init);return b})();
(function(){var a=mt.cookie,b=mt.localStorage,d=mt.sessionStorage,e={getData:function(e){try{return a.get(e)||d.get(e)||b.get(e)}catch(l){}},setData:function(k,l,f){try{a.set(k,l,{domain:e.R(),path:e.ca(),Q:f}),f?b.set(k,l,f):d.set(k,l)}catch(m){}},removeData:function(k){try{a.set(k,"",{domain:e.R(),path:e.ca(),Q:-1}),d.remove(k),b.remove(k)}catch(l){}},W:function(a,e){a="."+a.replace(/:\d+/,"");e="."+e.replace(/:\d+/,"");var b=a.indexOf(e);return-1<b&&b+e.length===a.length},fa:function(a,e){a=a.replace(/^https?:\/\//,
"");return 0===a.indexOf(e)},R:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(e.W(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},ca:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&e.fa(document.location.href,d))return d.replace(/^[^/]+(\/.*)/,"$1")+"/"}return"/"}};return h.pa=e})();
(function(){var a=mt.lang,b=mt.o,d=h.pa,e={pageview:{},session:{},autoEventTracking:{},customEvent:{},user:{}},k={user:1,session:2,pageview:3,autoEventTracking:3,customEvent:3,others:3},l=["session","user"],f="Hm_up_"+c.id,m={init:function(){m.ac()},ac:function(){try{var k=b.parse(decodeURIComponent(d.getData(f)));a.d(k,"Object")&&(e.user=k)}catch(s){}},B:function(a){var b={};e[a]!==r&&(b=e[a]);a=this.wa();for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);return a},wa:function(){for(var a={},b,d=l.length-
1;0<=d;d--){b=e[l[d]];for(var p in b)b.hasOwnProperty(p)&&(a[p]=b[p])}return a},setProperty:function(d,f,k){var p=e[d];if(a.d(p,"Object")&&a.d(f,"Object")){for(var y in f)if(f.hasOwnProperty(y)){var g=a.h(String(y));if(k||!/^_/.test(g)&&!/_$/.test(g)||/^(_iden|ei_|ec_|ex_|en_|et_|el_)$/.test(g)){var n=f[y];if(n==v)delete p[g];else{if(a.d(n,"Object")||a.d(n,"Array"))n=b.stringify(n);n=a.h(String(n));m.ec(d,g,n)&&(p[g]={value:n,scope:m.Ta(d)})}}}"user"===d&&m.Fa()}},s:function(b){b!==r&&("userId"===
b&&a.d(e.user,"Object")?(delete e.user.uid_,m.Fa()):"user"===b&&a.d(e.user,"Object")?(b=e.user.uid_,e.user=b===r?{}:{uid_:b},m.Fa()):e[b]!==r&&(e[b]={}))},Fa:function(){try{d.setData(f,encodeURIComponent(b.stringify(e.user)),c.age)}catch(a){}},ec:function(a,b,d){var p=u,f=e[a];if(256<encodeURIComponent(String(b)).length||256<encodeURIComponent(String(d)).length)p=w;else{var g=f[b];f[b]={value:d,scope:m.Ta(a)};a=m.O(m.B(a));2048<encodeURIComponent(a).length&&(g!==r?f[b]=g:delete f[b],p=w)}return p},
O:function(a){var b=[],e,d;for(d in a)a.hasOwnProperty(d)&&(e=[d,a[d].value],(1===a[d].scope||2===a[d].scope)&&e.push(a[d].scope),b.push(e.join("*")));return b.join("!")},Ta:function(a){a=k[a];return a!==r?a:k.others}};return h.P=m})();
(function(){var a=mt.f,b=mt.lang,d=mt.o,e=h.z,k=h.P,l=k.O;if(b.isArray(c.cptrk)&&0<c.cptrk.length){var f={$a:{},ia:{},init:function(){for(var a,e=0;e<c.cptrk.length;e++)try{if(a=d.parse(decodeURIComponent(String(c.cptrk[e]))),a.a!==r&&b.d(a.a,"Object")){var k=a.a,l;for(l in k)k.hasOwnProperty(l)&&(f.ia[l]=String(k[l]))}}catch(p){}},Za:function(){var e,b,d;for(d in f.ia)if(f.ia.hasOwnProperty(d)&&f.$a[d]===r&&(e=f.ia[d],e=a.sa(e)))b=b===r?{}:b,b[d]=a.S(e,w),f.$a[d]=u;return b},ya:function(){var a=
f.Za();a&&f.lc(a)},$b:function(){"MutationObserver"in window?(new MutationObserver(f.ya)).observe(document.body,{childList:u,subtree:u}):window.setInterval(f.ya,15E3)},lc:function(a){if(b.d(a,"Object")){k.setProperty("pageview",a);a=h.c.b.p;var e=h.c.b.ep;h.c.b.et=9;h.c.b.ep="";h.c.b.p=l(k.B("pageview"));h.c.i();h.c.b.p=a;h.c.b.ep=e;k.s("pageview")}}};f.init();e.e("pv-b",function(){var a=f.Za();a&&k.setProperty("pageview",a)});f.$b();a.cb(f.ya)}})();
(function(){var a=mt.lang,b=mt.f,d={ba:function(a,k){return function(l){var f=l.target||l.srcElement;if(f){var m=f.getAttribute(a.ka);l=l.clientX+":"+l.clientY;if(m&&m===l)f.removeAttribute(a.ka);else if(k&&0<k.length&&(f=b.Mb(f))&&f.length)if(m=f.length,l=f[f.length-1],1E4>m*l.split(">").length)for(l=0;l<m;l++)d.gb(a,f[l]);else d.gb(a,l)}}},gb:function(b,d){for(var l={},f=String(d).split(">").length,m=0;m<f;m++)l[d]="",d=d.substring(0,d.lastIndexOf(">"));b&&(a.d(b,"Object")&&b.Pa)&&b.Pa(l)},hc:function(a,
b){return function(d){(d.target||d.srcElement).setAttribute(a.ka,d.clientX+":"+d.clientY);a&&a.w&&(b?a.w(b):a.w("#"+encodeURIComponent(this.id),d.type))}}};return h.ra=d})();
(function(){var a=mt.f,b=mt.o,d=mt.event,e=mt.lang,k=h.A,l=h.ra,f=h.P,m=f.O,q={ka:"HM_ce",mb:function(){if(c.cetrk&&c.cetrk.length){d.e(document,"click",l.ba(q,c.cetrk));for(var e=0,f=c.cetrk.length;e<f;e++){var p;try{p=b.parse(decodeURIComponent(String(c.cetrk[e])))}catch(k){p={}}var g=p.p||"";-1===g.indexOf(">")&&(0===g.indexOf("#")&&(g=g.substring(1)),(g=a.Ra(g))&&d.e(g,"click",l.hc(q,p)))}}},Pa:function(a){if(c.cetrk&&c.cetrk.length)for(var e=0,d=c.cetrk.length;e<d;e++){var f;try{f=b.parse(decodeURIComponent(String(c.cetrk[e])))}catch(g){f=
{}}var n=q.Gb(f.p,a);n&&q.w(f,n)}},Gb:function(a,b){a=String(a);if(0<a.indexOf("*")){var e=RegExp("^"+a.replace(/\[/g,"\\[").replace(/\]/g,"\\]").replace(/\*/,"\\d+")+"$"),d;for(d in b)if(b.hasOwnProperty(d)&&e.test(d))return d;return v}return b.hasOwnProperty(a)?a:v},w:function(b,d){h.c.b.et=7;var p=b&&b.k||"",p=e.h(p),k={};if(b&&b.a&&e.d(b.a,"Object")){var g=b.a,n;for(n in g)if(g.hasOwnProperty(n)){var x=q.Nb(g[n]||"",d),x=x?a.S(x,w):"";k[n]=x}}k=q.Db(k,d||b&&b.p);k._iden=p;f.setProperty("customEvent",
k);h.c.b.ep="";h.c.b.p=m(f.B("customEvent"));h.c.i();h.c.b.p="";f.s("customEvent")},Db:function(b,e){var d=a.sa(e),f=k.La;d&&(c.aet&&c.aet.length?(b.ei_=a.getAttribute(d,f.id)||a.getAttribute(d,"id")||"",b.ec_=a.getAttribute(d,f.aa)||a.getAttribute(d,"class")||"",b.ex_=a.getAttribute(d,f.$)||a.va(d),b.en_=a.getAttribute(d,f.content)||a.S(d,u),b.et_=a.getAttribute(d,f.ha)||a.T(d),b.el_=a.getAttribute(d,f.link)||a.getAttribute(d,"href")||""):(b.ex_=a.getAttribute(d,f.$)||a.va(d),b.en_=a.getAttribute(d,
f.content)||a.S(d,u)));return b},Nb:function(b,e){b=String(b);e=String(e);if(0<b.indexOf("*")){var d=/.*\[(\d+)\]$/.exec(e);b=b.replace("*",d?d[1]:"1")}return a.sa(b)}};h.z.e("pv-b",q.mb);return q})();
(function(){var a=mt.lang,b=mt.f,d=mt.event,e=mt.g,k=h.A,l=h.z,f=h.P,m=f.O,q=+new Date,s=[],t={ba:function(){return function(e){if(h.c&&h.c.V&&c.aet&&c.aet.length){var d=e.target||e.srcElement;if(d){var f=h.c.Oa,n=b.getAttribute(d,k.Na)!=v?u:w;if(b.getAttribute(d,k.Ma)==v)if(n)t.ma(t.ta(d,e));else{var x=b.T(d);if(a.G(f,"*")||a.G(f,x))t.ma(t.ta(d,e));else for(;d.parentNode!=v;){var n=d.parentNode,x=b.T(n),z="a"===x&&a.G(f,"a")?u:w,x="button"===x&&a.G(f,"button")?u:w,A=b.getAttribute(n,k.Na)!=v?u:w;
if(b.getAttribute(n,k.Ma)==v&&(z||x||A)){t.ma(t.ta(n,e));break}d=d.parentNode}}}}}},ta:function(d,f){var g={},n=k.La;g.id=b.getAttribute(d,n.id)||b.getAttribute(d,"id")||"";g.aa=b.getAttribute(d,n.aa)||b.getAttribute(d,"class")||"";g.$=b.getAttribute(d,n.$)||b.va(d);g.content=b.getAttribute(d,n.content)||b.S(d,u);g.ha=b.getAttribute(d,n.ha)||b.T(d);g.link=b.getAttribute(d,n.link)||b.getAttribute(d,"href")||"";g.type=f.type||"click";n=a.Wa(d.offsetTop)?d.offsetTop:0;"click"===f.type?n=e.Aa?f.clientY+
Math.max(document.documentElement.scrollTop,document.body.scrollTop):f.pageY:"touchend"===f.type&&(f.Ya&&f.Ya.changedTouches)&&(n=f.Ya.changedTouches[0].pageY);g.rc=n;n=this.Fb(f);g.Ca=n.Ca||0;g.Ea=n.Ea||0;g.Ka=n.Ka||0;g.xa=n.xa||0;g.Ia=n.Ia||"b";return g},Fb:function(d){var f=d.target||d.srcElement,g;if(e.Aa){var n=Math.max(document.documentElement.scrollTop,document.body.scrollTop);g=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);g=d.clientX+g;d=d.clientY+n}else g=d.pageX,
d=d.pageY;var x=n=0,z=0,A=0;if(f&&(n=f.offsetWidth||f.clientWidth,x=f.offsetHeight||f.clientHeight,A=b.Kb(f),z=A.left,A=A.top,a.d(f.getBBox,"Function")&&(x=f.getBBox(),n=x.width,x=x.height),"html"===(f.tagName||"").toLowerCase()))n=Math.max(n,f.clientWidth),x=Math.max(x,f.clientHeight);return{Ca:Math.round(100*((g-z)/n)),Ea:Math.round(100*((d-A)/x)),Ka:n,xa:x,Ia:("a"===(f.tagName||"").toLowerCase()?f:b.Cb(f))?"a":"b"}},ma:function(b){var d=a.h;b=[+new Date-(h.c.X!==r?h.c.X:q),d(b.id),d(b.aa),d(b.ha),
d(b.$),d(b.link),d(b.content),b.type,b.rc,b.Ca,b.Ea,b.Ka,b.xa,b.Ia].join("*");t.na(b);a.d(this.Z(),"Function")&&this.Z()()},na:function(a){a.length>k.oa||(encodeURIComponent(s.join("!")+a).length>k.oa&&(t.w(s.join("!")),s=[]),s.push(a))},w:function(a){h.c.b.et=5;h.c.b.ep=a;h.c.b.p=m(f.B("autoEventTracking"));h.c.i();h.c.b.p=""},Z:function(){return function(){s&&s.length&&(t.w(s.join("!")),s=[])}}};a.H(c.aet)&&""!==c.aet&&l.e("pv-b",function(){d.e(document,"click",t.ba());"ontouchend"in document&&
d.e(window,"touchend",t.ba());d.e(window,"unload",t.Z())});return t})();
(function(){var a=mt.lang,b=mt.event,d=mt.g,e=h.A,k=h.z,l=+new Date,f=[],m=v,q={pb:function(){a.H(c.aet)&&""!==c.aet&&setInterval(q.fb,e.jc)},fb:function(){var a=d.U()+d.M();0<a-h.c.b.vl&&(h.c.b.vl=a)}},s={yb:function(){return function(){h.c&&(h.c.V&&c.aet&&c.aet.length)&&(window.clearTimeout(m),m=window.setTimeout(function(){s.ob(d.U()+d.M())},150))}},ob:function(a){s.na([+new Date-(h.c.X!==r?h.c.X:l),a].join("*"))},na:function(a){if(encodeURIComponent(f.join("!")+a).length>e.oa||3<f.length)s.w(f.join("!")),
f=[];f.push(a)},w:function(a){q.fb();h.c.b.et=6;h.c.b.vh=d.M();h.c.b.ep=a;h.c.i()},Z:function(){return function(){f&&f.length&&(s.w(f.join("!")),f=[])}}};a.H(c.aet)&&""!==c.aet&&k.e("pv-b",function(){b.e(window,"scroll",s.yb());b.e(window,"unload",s.Z());q.pb()});return s})();
(function(){function a(){return function(){h.c.b.nv=0;h.c.b.st=4;h.c.b.et=3;h.c.b.ep=h.qa.Lb()+","+h.qa.Hb();h.c.b.hca=c.hca;h.c.i()}}function b(){clearTimeout(z);var a;n&&(a="visible"==document[n]);x&&(a=!document[x]);m="undefined"==typeof a?u:a;if((!f||!q)&&m&&s)g=u,p=+new Date;else if(f&&q&&(!m||!s))g=w,y+=+new Date-p;f=m;q=s;z=setTimeout(b,100)}function d(a){var n=document,b="";if(a in n)b=a;else for(var d=["webkit","ms","moz","o"],e=0;e<d.length;e++){var z=d[e]+a.charAt(0).toUpperCase()+a.slice(1);
if(z in n){b=z;break}}return b}function e(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))s="focus"==a.type||"focusin"==a.type?u:w,b()}var k=mt.event,l=h.z,f=u,m=u,q=u,s=u,t=+new Date,p=t,y=0,g=u,n=d("visibilityState"),x=d("hidden"),z;b();(function(){var a=n.replace(/[vV]isibilityState/,"visibilitychange");k.e(document,a,b);k.e(window,"pageshow",b);k.e(window,"pagehide",b);"object"==typeof document.onfocusin?(k.e(document,"focusin",e),k.e(document,"focusout",e)):(k.e(window,
"focus",e),k.e(window,"blur",e))})();h.qa={Lb:function(){return+new Date-t},Hb:function(){return g?+new Date-p+y:y}};l.e("pv-b",function(){k.e(window,"unload",a())});l.e("duration-send",a());l.e("duration-done",function(){p=t=+new Date;y=0});return h.qa})();
(function(){var a=mt.lang,b=h.A,d=h.load,e={Zb:function(e){if((window._dxt===r||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.c){var l=h.c.R();d([b.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(l)].join(""),e)}},qc:function(b){if(a.d(b,"String")||a.d(b,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",b])}};return h.wb=e})();
(function(){function a(a,b,d,e){if(!(a===r||b===r||e===r)){if(""===a)return[b,d,e].join("*");a=String(a).split("!");for(var f,g=w,k=0;k<a.length;k++)if(f=a[k].split("*"),String(b)===f[0]){f[1]=d;f[2]=e;a[k]=f.join("*");g=u;break}g||a.push([b,d,e].join("*"));return a.join("!")}}function b(a){for(var d in a)if({}.hasOwnProperty.call(a,d)){var f=a[d];e.d(f,"Object")||e.d(f,"Array")?b(f):a[d]=String(f)}}var d=mt.url,e=mt.lang,k=mt.o,l=mt.g,f=h.A,m=h.z,q=h.wb,s=h.load,t=h.pa,p=h.P,y=p.O,g={Y:[],ga:0,Xa:w,
D:{Ja:"",page:""},init:function(){g.j=0;p.init();m.e("pv-b",function(){g.xb();g.zb()});m.e("pv-d",function(){g.Ab();g.D.page=""});m.e("stag-b",function(){h.c.b.api=g.j||g.ga?g.j+"_"+g.ga:"";h.c.b.ct=[decodeURIComponent(t.getData("Hm_ct_"+c.id)||""),g.D.Ja,g.D.page].join("!")});m.e("stag-d",function(){h.c.b.api=0;g.j=0;g.ga=0})},xb:function(){var a=window._hmt||[];if(!a||e.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var n=arguments[b];
e.d(n,"Array")&&(a.cmd[a.id].push(n),"_setAccount"===n[0]&&(1<n.length&&/^[0-9a-f]{32}$/.test(n[1]))&&(n=n[1],a.id=n,a.cmd[n]=a.cmd[n]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},zb:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],d=/^_track(Event|MobConv|Order)$/,e=0,f=b.length;e<f;e++){var k=b[e];d.test(k[0])?g.Y.push(k):g.Ga(k)}a.cmd[c.id]={push:g.Ga}},Ab:function(){if(0<g.Y.length)for(var a=0,b=g.Y.length;a<b;a++)g.Ga(g.Y[a]);g.Y=v},Ga:function(a){var b=
a[0];if(g.hasOwnProperty(b)&&e.d(g[b],"Function"))g[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(g.j|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],w===a||u===a))g.j|=2,h.c.Ua=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){g.j|=4;h.c.b.sn=h.c.Sa();h.c.b.et=0;h.c.b.ep="";h.c.b.vl=l.U()+l.M();h.c.b.kb=0;h.c.za?(h.c.b.nv=0,h.c.b.st=4):h.c.za=u;var b=h.c.b.u,d=h.c.b.su;h.c.b.u=f.protocol+"//"+document.location.host+a[1];g.Xa||(h.c.b.su=
document.location.href);h.c.b.p=y(p.B("pageview"));h.c.i();h.c.b.u=b;h.c.b.su=d;h.c.b.p="";h.c.X=+new Date;p.s("pageview")}},_trackEvent:function(a){2<a.length&&(g.j|=8,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=4,h.c.b.ep=e.h(a[1])+"*"+e.h(a[2])+(a[3]?"*"+e.h(a[3]):"")+(a[4]?"*"+e.h(a[4]):""),h.c.b.p=y(p.wa()),h.c.i(),h.c.b.p="")},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],d=a[4]||3;if(0<b&&6>b&&0<d&&4>d){g.ga++;for(var f=(h.c.b.cv||"*").split("!"),k=f.length;k<b-1;k++)f.push("*");f[b-1]=d+"*"+e.h(a[2])+
"*"+e.h(a[3]);h.c.b.cv=f.join("!");a=h.c.b.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?t.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):t.removeData("Hm_cv_"+c.id)}}},_setUserTag:function(b){if(!(3>b.length)){var d=e.h(b[1]);b=e.h(b[2]);if(d!==r&&b!==r){var f=decodeURIComponent(t.getData("Hm_ct_"+c.id)||""),f=a(f,d,1,b);t.setData("Hm_ct_"+c.id,encodeURIComponent(f),c.age)}}},_setVisitTag:function(b){if(!(3>b.length)){var d=e.h(b[1]);b=e.h(b[2]);if(d!==r&&b!==r){var f=
g.D.Ja,f=a(f,d,2,b);g.D.Ja=f}}},_setPageTag:function(b){if(!(3>b.length)){var d=e.h(b[1]);b=e.h(b[2]);if(d!==r&&b!==r){var f=g.D.page,f=a(f,d,3,b);g.D.page=f}}},_setReferrerOverride:function(a){1<a.length&&(h.c.b.su=a[1].charAt&&"/"===a[1].charAt(0)?f.protocol+"//"+window.location.host+a[1]:a[1],g.Xa=u)},_trackOrder:function(a){a=a[1];e.d(a,"Object")&&(b(a),g.j|=16,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=94,h.c.b.ep=k.stringify(a),h.c.b.p=y(p.wa()),h.c.i(),h.c.b.p="")},_trackMobConv:function(a){if(a={webim:1,
tel:2,map:3,sms:4,callback:5,share:6}[a[1]])g.j|=32,h.c.b.et=93,h.c.b.ep=a,h.c.i()},_setDataxId:function(a){a=a[1];q.Zb();q.qc(a)},_setUserId:function(a){a=a[1];if(a!==r&&(e.H(a)||e.Wa(a))){var b=p.B("user").uid_;if(!(b&&b.value===e.h(String(a)))){var b=h.c.b.p,d=h.c.b.ep;h.c.b.et=8;h.c.b.ep="";h.c.b.p="uid_*"+e.h(String(a));h.c.i();var f={};f.uid_=a;p.setProperty("user",f,u);h.c.b.p=b;h.c.b.ep=d}}},_clearUserId:function(a){1<a.length&&u===a[1]&&p.s("userId")},_setUserProperty:function(a){a=a[1];
e.d(a,"Object")&&p.setProperty("user",a)},_clearUserProperty:function(a){1<a.length&&u===a[1]&&p.s("user")},_setSessionProperty:function(a){a=a[1];e.d(a,"Object")&&p.setProperty("session",a)},_clearSessionProperty:function(a){1<a.length&&u===a[1]&&p.s("session")},_setPageviewProperty:function(a){a=a[1];e.d(a,"Object")&&p.setProperty("pageview",a)},_clearPageviewProperty:function(a){1<a.length&&u===a[1]&&p.s("pageview")},_setAutoEventTrackingProperty:function(a){a=a[1];e.d(a,"Object")&&p.setProperty("autoEventTracking",
a)},_clearAutoEventTrackingProperty:function(a){1<a.length&&u===a[1]&&p.s("autoEventTracking")},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],w===a||u===a))h.c.Va=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],w===a||u===a))h.c.V=a},_trackPageDuration:function(a){1<a.length?(a=a[1],2===String(a).split(",").length&&(h.c.b.et=3,h.c.b.ep=a,h.c.i())):m.K("duration-send");m.K("duration-done")},_require:function(a){1<a.length&&(a=a[1],f.rb.test(d.L(a))&&s(a))},_providePlugin:function(a){if(1<
a.length){var b=window._hmt,d=a[1];a=a[2];if(e.G(f.ab,d)&&e.d(a,"Function")&&(b.plugins=b.plugins||{},b.I=b.I||{},b.plugins[d]=a,b.C=b.C||[],a=b.C.slice(),d&&a.length&&a[0][1]===d))for(var g=0,k=a.length;g<k;g++){var l=a[g][2]||{};if(b.plugins[d]&&!b.I[d])b.I[d]=new b.plugins[d](l),b.C.shift();else break}}},_requirePlugin:function(a){if(1<a.length){var b=window._hmt,d=a[1],k=a[2]||{};if(e.G(f.ab,d))if(b.plugins=b.plugins||{},b.I=b.I||{},b.plugins[d]&&!b.I[d])b.I[d]=new b.plugins[d](k);else{b.C=b.C||
[];for(var k=0,l=b.C.length;k<l;k++)if(b.C[k][1]===d)return;b.C.push(a);g._require([v,f.gc+d+".js"])}}},_trackCustomEvent:function(a){if(1<a.length){var b=a[1];a=a[2];e.d(a,"Object")||(a={});a._iden=b;p.setProperty("customEvent",a);h.c.b.et=7;h.c.b.ep="";h.c.b.p=y(p.B("customEvent"));h.c.i();h.c.b.p="";p.s("customEvent")}}};g.init();h.tb=g;return h.tb})();
(function(){var a=h.z;c.spa!==r&&"1"===String(c.spa)&&(window._hmt=window._hmt||[],window._hmt.push(["_requirePlugin","UrlChangeTracker"]),a.e("pv-b",function(){""!==window.location.hash&&(h.c.b.u=window.location.href)}))})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=u,this.b={},this.Va=this.Ua=u,this.V=g.V,this.Oa=k.H(c.aet)&&0<c.aet.length?c.aet.split(","):"",this.za=w,this.init())}var b=mt.url,d=mt.hb,e=mt.Ha,k=mt.lang,l=mt.cookie,f=mt.g,m=mt.sessionStorage,q=mt.o,s=mt.event,t=h.pa,p=h.P,y=p.O,g=h.A,n=h.load,x=h.z;a.prototype={W:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},fa:function(a,
b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},da:function(a){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.fa(a,c.dm[d]))return u}else{var e=b.L(a);if(e&&this.W(e,c.dm[d]))return u}return w},R:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.W(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},ca:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.fa(document.location.href,d))return d.replace(/^[^/]+(\/.*)/,
"$1")+"/"}return"/"},Ob:function(){if(!document.referrer)return g.J-g.N>c.vdur?1:4;var a=w;this.da(document.referrer)&&this.da(document.location.href)?a=u:(a=b.L(document.referrer),a=this.W(a||"",document.location.hostname));return a?g.J-g.N>c.vdur?1:4:3},oc:function(){var a,b,d,e,f,k;g.N=t.getData("Hm_lpvt_"+c.id)||0;13===g.N.length&&(g.N=Math.round(g.N/1E3));b=this.Ob();a=4!==b?1:0;if(k=t.getData("Hm_lvt_"+c.id)){e=k.split(",");for(f=e.length-1;0<=f;f--)13===e[f].length&&(e[f]=""+Math.round(e[f]/
1E3));for(;2592E3<g.J-e[0];)e.shift();f=4>e.length?2:3;for(1===a&&e.push(g.J);4<e.length;)e.shift();k=e.join(",");e=e[e.length-1]}else k=g.J,e="",f=1;this.bc()?(t.setData("Hm_lvt_"+c.id,k,c.age),t.setData("Hm_lpvt_"+c.id,g.J),d=l.fc(this.R(),this.ca())):this.Bb();if(0===c.nv&&this.da(document.location.href)&&(""===document.referrer||this.da(document.referrer)))a=0,b=4;this.b.nv=a;this.b.st=b;this.b.cc=d;this.b.lt=e;this.b.lv=f},bc:function(){var a=b.L(document.location.href);return!k.G("sjh.baidu.com isite.baidu.com ls.wejianzhan.com bs.wejianzhan.com product.weijianzhan.com qianhu.weijianzhan.com aisite.wejianzhan.com".split(" "),
a)},Bb:function(){for(var a=document.cookie.split(";"),b=0;b<a.length;b++){var d=a[b].split("=");d.length&&/Hm_(up|ct|cv|lp?vt)_[0-9a-f]{31}/.test(String(d[0]))&&t.removeData(d[0]);d.length&&/Hm_ck_[0-9]{13}/.test(String(d[0]))&&t.removeData(d[0])}},nc:function(){for(var a=[],b=this.b.et,d=0,e=g.ib.length;d<e;d++){var f=g.ib[d],k=this.b[f];"undefined"!==typeof k&&""!==k&&("tt"!==f||"tt"===f&&0===b)&&("ct"!==f||"ct"===f&&0===b)&&a.push(f+"="+encodeURIComponent(k))}return a.join("&")},pc:function(){this.oc();
this.b.si=c.id;this.b.sn=this.Sa();this.b.su=document.referrer;this.b.ds=f.ic;this.b.cl=f.colorDepth+"-bit";this.b.ln=String(f.language).toLowerCase();this.b.ja=f.javaEnabled?1:0;this.b.ck=f.cookieEnabled?1:0;this.b.lo="number"===typeof _bdhm_top?1:0;this.b.fl=e.Qb();this.b.v="1.2.73";this.b.cv=decodeURIComponent(t.getData("Hm_cv_"+c.id)||"");this.b.tt=document.title||"";this.b.vl=f.U()+f.M();var a=document.location.href;this.b.cm=b.m(a,g.Vb)||"";this.b.cp=b.m(a,g.Wb)||b.m(a,g.uc)||"";this.b.cw=b.m(a,
g.Ub)||b.m(a,g.wc)||"";this.b.ci=b.m(a,g.Sb)||b.m(a,g.tc)||"";this.b.cf=b.m(a,g.Xb)||b.m(a,g.vc)||"";this.b.cu=b.m(a,g.Tb)||b.m(a,g.sc)||"";f.dc()&&(this.b.u=window.location.href)},init:function(){try{this.pc(),0===this.b.nv?this.mc():this.Qa(),h.c=this,this.vb(),this.ub(),x.K("pv-b"),this.kc()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));d.log(g.Ba+"//"+g.bb+"?"+b.join("&"))}},
kc:function(){function a(){x.K("pv-d")}this.Ua?(this.za=u,this.b.et=0,this.b.ep="",this.b.p=y(p.B("pageview")),this.b.vl=f.U()+f.M(),this.i(a),this.b.p=""):a();this.X=+new Date;p.s("pageview")},i:function(a){if(this.Va){var b=this;b.b.rnd=Math.round(Math.random()*g.Da);b.b.r=f.orientation;b.b.ww=f.lb;x.K("stag-b");var e=g.Ba+"//"+g.bb+"?"+b.nc();x.K("stag-d");b.qb(e);d.log(e,function(d){b.eb(d);k.d(a,"Function")&&a.call(b)})}},vb:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),
e=b.L(document.referrer)===g.jb?1:0,f=b.m(a,"jn"),k=/^heatlink$|^select$|^pageclick$/.test(f);a&&(d.test(a)&&e&&k)&&(this.b.rnd=Math.round(Math.random()*g.Da),a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",g.protocol+"//"+c.js+f+".js?"+this.b.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,f))},ub:function(){if(window.postMessage&&window.self!==window.parent){var a=this;s.e(window,"message",
function(d){if(b.L(d.origin)===g.jb){d=d.data||{};var e=d.jn||"",f=/^customevent$|^heatmap$/.test(e);if(RegExp(c.id).test(d.sd||"")&&f)a.b.rnd=Math.round(Math.random()*g.Da),n(g.protocol+"//"+c.js+e+".js?"+a.b.rnd)}});window.parent.postMessage({id:c.id,url:document.location.href,status:"__Messenger__hmLoaded"},"*")}},qb:function(a){var b;try{b=q.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}var e=this.b.u?"":"&u="+encodeURIComponent(document.location.href);b.push(a.replace(/^https?:\/\//,"")+
e);m.set("Hm_unsent_"+c.id,q.stringify(b))},eb:function(a){var b;try{b=q.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length){a=a.replace(/^https?:\/\//,"");for(var e=0;e<b.length;e++)if(a.replace(/&u=[^&]*/,"")===b[e].replace(/&u=[^&]*/,"")){b.splice(e,1);break}b.length?m.set("Hm_unsent_"+c.id,q.stringify(b)):this.Qa()}},Qa:function(){m.remove("Hm_unsent_"+c.id)},mc:function(){var a=this,b;try{b=q.parse(m.get("Hm_unsent_"+c.id)||"[]")}catch(e){b=[]}if(b.length)for(var f=function(b){d.log(g.Ba+
"//"+b,function(b){a.eb(b)})},k=0;k<b.length;k++)f(b[k])},Sa:function(){return Math.round(+new Date/1E3)%65535}};return new a})();var B=h.A,C=h.load;c.pt&&C([B.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));
(function(){var a=mt.g,b=mt.lang,d=mt.event,e=mt.o;if("undefined"!==typeof h.c&&(c.med||(!a.Aa||7<a.Jb())&&c.cvcc)){var k,l,f,m,q=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},s=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===w)return w},t=function(a,d){var g={};g.n=k;g.t="clk";g.v=a;if(d){var l=d.getAttribute("href"),m=d.getAttribute("onclick")?""+d.getAttribute("onclick"):v,p=d.getAttribute("id")||"";f.test(l)?(g.sn=
"mediate",g.snv=l):b.d(m,"String")&&f.test(m)&&(g.sn="wrap",g.snv=m);g.id=p}h.c.b.et=86;h.c.b.ep=e.stringify(g);h.c.i();for(g=+new Date;400>=+new Date-g;);};if(c.med)l="/zoosnet",k="swt",f=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,m={click:function(){for(var a=[],b=q(document.getElementsByTagName("a")),b=[].concat.apply(b,q(document.getElementsByTagName("area"))),b=[].concat.apply(b,q(document.getElementsByTagName("img"))),d,e,g=0,k=b.length;g<k;g++)d=b[g],e=
d.getAttribute("onclick"),d=d.getAttribute("href"),(f.test(e)||f.test(d))&&a.push(b[g]);return a}};else if(c.cvcc){l="/other-comm";k="other";f=c.cvcc.q||r;var p=c.cvcc.id||r;m={click:function(){for(var a=[],b=q(document.getElementsByTagName("a")),b=[].concat.apply(b,q(document.getElementsByTagName("area"))),b=[].concat.apply(b,q(document.getElementsByTagName("img"))),d,e,g,k=0,l=b.length;k<l;k++)d=b[k],f!==r?(e=d.getAttribute("onclick"),g=d.getAttribute("href"),p?(d=d.getAttribute("id"),(f.test(e)||
f.test(g)||p.test(d))&&a.push(b[k])):(f.test(e)||f.test(g))&&a.push(b[k])):p!==r&&(d=d.getAttribute("id"),p.test(d)&&a.push(b[k]));return a}}}if("undefined"!==typeof m&&"undefined"!==typeof f){var y;l+=/\/$/.test(l)?"":"/";var g=function(a,d){if(y===d)return t(l+a,d),w;if(b.d(d,"Array")||b.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(y===d[e])return t(l+a+"/"+(e+1),d[e]),w};d.e(document,"mousedown",function(a){a=a||window.event;y=a.target||a.srcElement;var d={};for(s(m,function(a,e){d[a]=b.d(e,
"Function")?e():document.getElementById(e)});y&&y!==document&&s(d,g)!==w;)y=y.parentNode})}}})();(function(){var a=mt.f,b=mt.lang,d=mt.event,e=mt.o;if("undefined"!==typeof h.c&&b.d(c.cvcf,"Array")&&0<c.cvcf.length){var k={nb:function(){for(var b=c.cvcf.length,e,m=0;m<b;m++)(e=a.Ra(decodeURIComponent(c.cvcf[m])))&&d.e(e,"click",k.ra())},ra:function(){return function(){h.c.b.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.c.b.ep=e.stringify(a);h.c.i()}}};a.cb(function(){k.nb()})}})();
(function(){var a=mt.event,b=mt.o;if(c.med&&"undefined"!==typeof h.c){var d={n:"anti",sb:0,kb:0,clk:0},e=function(){h.c.b.et=86;h.c.b.ep=b.stringify(d);h.c.i()};a.e(document,"click",function(){d.clk++});a.e(document,"keyup",function(){d.kb=1});a.e(window,"scroll",function(){d.sb++});a.e(window,"load",function(){setTimeout(e,5E3)})}})();})();
