if(!window.jq||typeof jq!=="function"){var jq=function(g){function y(a,c,b){var d=h.createDocumentFragment();if(b){for(b=a.length-1;b>=0;b--)d.insertBefore(a[b],d.firstChild);c.insertBefore(d,c.firstChild)}else{for(b=0;b<a.length;b++)d.appendChild(a[b]);c.appendChild(d)}}function v(a){return a in w?w[a]:w[a]=RegExp("(^|\\s)"+a+"(\\s|$)")}function q(a){for(var c=0;c<a.length;c++)a.indexOf(a[c])!=c&&(a.splice(c,1),c--);return a}function z(a,c){var b=[];if(a==f)return b;for(;a;a=a.nextSibling)a.nodeType==
1&&a!==c&&b.push(a);return b}function A(a,c){try{return c.querySelectorAll(a)}catch(b){return[]}}function r(a,c){if(a){if(a.nodeType)return c[c.length++]=a;for(var b=0,d=a.length;b<d;b++)c[c.length++]=a[b]}}function p(){}function B(a,c){a.os={};a.os.webkit=c.match(/WebKit\/([\d.]+)/)?!0:!1;a.os.android=c.match(/(Android)\s+([\d.]+)/)||c.match(/Silk-Accelerated/)?!0:!1;a.os.androidICS=a.os.android&&c.match(/(Android)\s4/)?!0:!1;a.os.ipad=c.match(/(iPad).*OS\s([\d_]+)/)?!0:!1;a.os.iphone=!a.os.ipad&&
c.match(/(iPhone\sOS)\s([\d_]+)/)?!0:!1;a.os.webos=c.match(/(webOS|hpwOS)[\s\/]([\d.]+)/)?!0:!1;a.os.touchpad=a.os.webos&&c.match(/TouchPad/)?!0:!1;a.os.ios=a.os.ipad||a.os.iphone;a.os.playbook=c.match(/PlayBook/)?!0:!1;a.os.blackberry=a.os.playbook||c.match(/BlackBerry/)?!0:!1;a.os.blackberry10=a.os.blackberry&&c.match(/Safari\/536/)?!0:!1;a.os.chrome=c.match(/Chrome/)?!0:!1;a.os.opera=c.match(/Opera/)?!0:!1;a.os.fennec=c.match(/fennec/i)?!0:c.match(/Firefox/)?!0:!1;a.os.ie=c.match(/MSIE 10.0/i)?
!0:!1;a.os.ieTouch=a.os.ie&&c.toLowerCase().match(/touch/i)?!0:!1;a.os.supportsTouch=g.DocumentTouch&&h instanceof g.DocumentTouch||"ontouchstart"in g;a.feat={};var b=h.documentElement.getElementsByTagName("head")[0];a.feat.nativeTouchScroll=typeof b.style["-webkit-overflow-scrolling"]!=="undefined"&&a.os.ios;a.feat.cssPrefix=a.os.webkit?"Webkit":a.os.fennec?"Moz":a.os.ie?"ms":a.os.opera?"O":"";a.feat.cssTransformStart=!a.os.opera?"3d(":"(";a.feat.cssTransformEnd=!a.os.opera?",0)":")";if(a.os.android&&
!a.os.webkit)a.os.android=!1}function s(a){return a._jqmid||(a._jqmid=L++)}function M(a,c,b,d){c=C(c);if(c.ns)var e=RegExp("(?:^| )"+c.ns.replace(" "," .* ?")+"(?: |$)");return(i[s(a)]||[]).filter(function(a){return a&&(!c.e||a.e==c.e)&&(!c.ns||e.test(a.ns))&&(!b||a.fn==b||typeof a.fn==="function"&&typeof b==="function"&&""+a.fn===""+b)&&(!d||a.sel==d)})}function C(a){a=(""+a).split(".");return{e:a[0],ns:a.slice(1).sort().join(" ")}}function D(a,c,b){e.isObject(a)?e.each(a,b):a.split(/\s/).forEach(function(a){b(a,
c)})}function t(a,c,b,d,j){var f=s(a),g=i[f]||(i[f]=[]);D(c,b,function(b,c){var f=j&&j(c,b),l=f||c,h=function(b){var c=l.apply(a,[b].concat(b.data));c===!1&&b.preventDefault();return c},f=e.extend(C(b),{fn:c,proxy:h,sel:d,del:f,i:g.length});g.push(f);a.addEventListener(f.e,h,!1)})}function u(a,c,b,d){var e=s(a);D(c||"",b,function(b,c){M(a,b,c,d).forEach(function(b){delete i[e][b.i];a.removeEventListener(b.e,b.proxy,!1)})})}function N(a){var c=e.extend({originalEvent:a},a);e.each(O,function(b,d){c[b]=
function(){this[d]=P;return a[b].apply(a,arguments)};c[d]=Q});return c}function E(a,c){if(c&&a.dispatchEvent){var b=e.Event("destroy",{bubbles:!1});a.dispatchEvent(b)}if((b=s(a))&&i[b]){for(var d in i[b])a.removeEventListener(i[b][d].e,i[b][d].proxy,!1);delete i[b]}}function F(a,c){if(a){var b=a.childNodes;if(b&&b.length>0)for(var d in b)F(b[d],c);E(a,c)}}var f,h=g.document,n=[],G=n.slice,w=[],R=1,S=/^\s*<(\w+)[^>]*>/,k={},o={},m=function(a,c){this.length=0;if(a)if(a instanceof m&&c==f)return a;else if(e.isFunction(a))return e(h).ready(a);
else if(e.isArray(a)&&a.length!=f){for(var b=0;b<a.length;b++)this[this.length++]=a[b];return this}else if(e.isObject(a)&&e.isObject(c)){if(a.length==f)a.parentNode==c&&(this[this.length++]=a);else for(b=0;b<a.length;b++)a[b].parentNode==c&&(this[this.length++]=a[b]);return this}else if(e.isObject(a)&&c==f)return this[this.length++]=a,this;else if(c!==f){if(c instanceof m)return c.find(a)}else c=h;else return this;return this.selector(a,c)},e=function(a,c){return new m(a,c)};e.is$=function(a){return a instanceof
m};e.map=function(a,c){var b,d=[],j;if(e.isArray(a))for(j=0;j<a.length;j++)b=c(a[j],j),b!==f&&d.push(b);else if(e.isObject(a))for(j in a)a.hasOwnProperty(j)&&(b=c(a[j],j),b!==f&&d.push(b));return e([d])};e.each=function(a,c){var b;if(e.isArray(a))for(b=0;b<a.length;b++){if(c(b,a[b])===!1)break}else if(e.isObject(a))for(b in a)if(a.hasOwnProperty(b)&&c(b,a[b])===!1)break;return a};e.extend=function(a){a==f&&(a=this);if(arguments.length===1){for(var c in a)this[c]=a[c];return this}else G.call(arguments,
1).forEach(function(b){for(var c in b)a[c]=b[c]});return a};e.isArray=function(a){return a instanceof Array&&a.push!=f};e.isFunction=function(a){return typeof a==="function"};e.isObject=function(a){return typeof a==="object"};e.fn=m.prototype={constructor:m,forEach:n.forEach,reduce:n.reduce,push:n.push,indexOf:n.indexOf,concat:n.concat,selector:function(a,c){a=a.trim();if(a[0]==="#"&&a.indexOf(".")==-1&&a.indexOf(" ")===-1&&a.indexOf(">")===-1)c==h?r(c.getElementById(a.replace("#","")),this):r(A(a,
c),this);else if(a[0]==="<"&&a[a.length-1]===">"){var b=h.createElement("div");b.innerHTML=a.trim();r(b.childNodes,this)}else r(A(a,c),this);return this},oldElement:f,slice:n.slice,setupOld:function(a){if(a==f)return e();a.oldElement=this;return a},map:function(a){var c,b=[],d;for(d=0;d<this.length;d++)c=a(d,this[d]),c!==f&&b.push(c);return e([b])},each:function(a){this.forEach(function(c,b){a.call(c,b,c)});return this},ready:function(a){h.readyState==="complete"||h.readyState==="loaded"||!e.os.ie&&
h.readyState==="interactive"?a():h.addEventListener("DOMContentLoaded",a,!1);return this},find:function(a){if(this.length===0)return this;for(var c=[],b,d=0;d<this.length;d++){b=e(a,this[d]);for(var f=0;f<b.length;f++)c.push(b[f])}return e(q(c))},html:function(a,c){if(this.length===0)return this;if(a===f)return this[0].innerHTML;for(var b=0;b<this.length;b++)c!==!1&&e.cleanUpContent(this[b],!1,!0),this[b].innerHTML=a;return this},text:function(a){if(this.length===0)return this;if(a===f)return this[0].textContent;
for(var c=0;c<this.length;c++)this[c].textContent=a;return this},css:function(a,c,b){b=b!=f?b:this[0];if(this.length===0)return this;if(c==f&&typeof a==="string")return g.getComputedStyle(b),b.style[a]?b.style[a]:g.getComputedStyle(b)[a];for(b=0;b<this.length;b++)if(e.isObject(a))for(var d in a)this[b].style[d]=a[d];else this[b].style[a]=c;return this},vendorCss:function(a,c,b){return this.css(e.feat.cssPrefix+a,c,b)},empty:function(){for(var a=0;a<this.length;a++)e.cleanUpContent(this[a],!1,!0),
this[a].innerHTML="";return this},hide:function(){if(this.length===0)return this;for(var a=0;a<this.length;a++)if(this.css("display",null,this[a])!="none")this[a].setAttribute("jqmOldStyle",this.css("display",null,this[a])),this[a].style.display="none";return this},show:function(){if(this.length===0)return this;for(var a=0;a<this.length;a++)if(this.css("display",null,this[a])=="none")this[a].style.display=this[a].getAttribute("jqmOldStyle")?this[a].getAttribute("jqmOldStyle"):"block",this[a].removeAttribute("jqmOldStyle");
return this},toggle:function(a){for(var c=a===!0?!0:!1,b=0;b<this.length;b++)g.getComputedStyle(this[b]).display!=="none"||a!==f&&c===!1?(this[b].setAttribute("jqmOldStyle",this[b].style.display),this[b].style.display="none"):(this[b].style.display=this[b].getAttribute("jqmOldStyle")!=f?this[b].getAttribute("jqmOldStyle"):"block",this[b].removeAttribute("jqmOldStyle"));return this},val:function(a){if(this.length===0)return a===f?f:this;if(a==f)return this[0].value;for(var c=0;c<this.length;c++)this[c].value=
a;return this},attr:function(a,c){if(this.length===0)return c===f?f:this;if(c===f&&!e.isObject(a))return this[0].jqmCacheId&&k[this[0].jqmCacheId][a]?this[0].jqmCacheId&&k[this[0].jqmCacheId][a]:this[0].getAttribute(a);for(var b=0;b<this.length;b++)if(e.isObject(a))for(var d in a)e(this[b]).attr(d,a[d]);else if(e.isArray(c)||e.isObject(c)||e.isFunction(c)){if(!this[b].jqmCacheId)this[b].jqmCacheId=e.uuid();k[this[b].jqmCacheId]||(k[this[b].jqmCacheId]={});k[this[b].jqmCacheId][a]=c}else c==null&&
c!==f?(this[b].removeAttribute(a),this[b].jqmCacheId&&k[this[b].jqmCacheId][a]&&delete k[this[b].jqmCacheId][a]):this[b].setAttribute(a,c);return this},removeAttr:function(a){for(var c=this,b=0;b<this.length;b++)a.split(/\s+/g).forEach(function(d){c[b].removeAttribute(d);c[b].jqmCacheId&&k[c[b].jqmCacheId][a]&&delete k[c[b].jqmCacheId][a]});return this},prop:function(a,c){if(this.length===0)return c===f?f:this;if(c===f&&!e.isObject(a)){var b;return this[0].jqmCacheId&&o[this[0].jqmCacheId][a]?this[0].jqmCacheId&&
o[this[0].jqmCacheId][a]:!(b=this[0][a])&&a in this[0]?this[0][a]:b}for(b=0;b<this.length;b++)if(e.isObject(a))for(var d in a)e(this[b]).prop(d,a[d]);else if(e.isArray(c)||e.isObject(c)||e.isFunction(c)){if(!this[b].jqmCacheId)this[b].jqmCacheId=e.uuid();o[this[b].jqmCacheId]||(o[this[b].jqmCacheId]={});o[this[b].jqmCacheId][a]=c}else c==null&&c!==f?e(this[b]).removeProp(a):this[b][a]=c;return this},removeProp:function(a){for(var c=this,b=0;b<this.length;b++)a.split(/\s+/g).forEach(function(d){c[b][d]&&
delete c[b][d];c[b].jqmCacheId&&o[c[b].jqmCacheId][a]&&delete o[c[b].jqmCacheId][a]});return this},remove:function(a){a=e(this).filter(a);if(a==f)return this;for(var c=0;c<a.length;c++)e.cleanUpContent(a[c],!0,!0),a[c].parentNode.removeChild(a[c]);return this},addClass:function(a){for(var c=0;c<this.length;c++){var b=this[c].className,d=[],e=this;a.split(/\s+/g).forEach(function(a){e.hasClass(a,e[c])||d.push(a)});this[c].className+=(b?" ":"")+d.join(" ");this[c].className=this[c].className.trim()}return this},
removeClass:function(a){for(var c=0;c<this.length;c++){if(a==f){this[c].className="";break}var b=this[c].className;a.split(/\s+/g).forEach(function(a){b=b.replace(v(a)," ")});this[c].className=b.length>0?b.trim():""}return this},replaceClass:function(a,c){for(var b=0;b<this.length;b++)if(a==f)this[b].className=c;else{var d=this[b].className;a.split(/\s+/g).concat(c.split(/\s+/g)).forEach(function(a){d=d.replace(v(a)," ")});d=d.trim();this[b].className=d.length>0?(d+" "+c).trim():c}return this},hasClass:function(a,
c){if(this.length===0)return!1;c||(c=this[0]);return v(a).test(c.className)},append:function(a,c){if(a&&a.length!=f&&a.length===0)return this;if(e.isArray(a)||e.isObject(a))a=e(a);var b;for(b=0;b<this.length;b++)if(a.length&&typeof a!="string")a=e(a),y(a,this[b],c);else{var d=S.test(a)?e(a):f;if(d==f||d.length==0)d=h.createTextNode(a);d.nodeName!=f&&d.nodeName.toLowerCase()=="script"&&(!d.type||d.type.toLowerCase()==="text/javascript")?g.eval(d.innerHTML):d instanceof m?y(d,this[b],c):c!=f?this[b].insertBefore(d,
this[b].firstChild):this[b].appendChild(d)}return this},appendTo:function(a){e(a).append(this);return this},prependTo:function(a){e(a).append(this,!0);return this},prepend:function(a){return this.append(a,1)},insertBefore:function(a,c){if(this.length==0)return this;a=e(a).get(0);if(!a)return this;for(var b=0;b<this.length;b++)c?a.parentNode.insertBefore(this[b],a.nextSibling):a.parentNode.insertBefore(this[b],a);return this},insertAfter:function(a){this.insertBefore(a,!0)},get:function(a){a=a==f?
0:a;a<0&&(a+=this.length);return this[a]?this[a]:f},offset:function(){if(this.length===0)return this;if(this[0]==g)return{left:0,top:0,right:0,bottom:0,width:g.innerWidth,height:g.innerHeight};else var a=this[0].getBoundingClientRect();return{left:a.left+g.pageXOffset,top:a.top+g.pageYOffset,right:a.right+g.pageXOffset,bottom:a.bottom+g.pageYOffset,width:a.right-a.left,height:a.bottom-a.top}},height:function(a){if(this.length===0)return this;if(a!=f)return this.css("height",a);if(this[0]==this[0].window)return g.innerHeight;
return this[0].nodeType==this[0].DOCUMENT_NODE?this[0].documentElement.offsetheight:(a=this.css("height").replace("px",""))?a:this.offset().height},width:function(a){if(this.length===0)return this;if(a!=f)return this.css("width",a);if(this[0]==this[0].window)return g.innerWidth;return this[0].nodeType==this[0].DOCUMENT_NODE?this[0].documentElement.offsetwidth:(a=this.css("width").replace("px",""))?a:this.offset().width},parent:function(a,c){if(this.length==0)return this;for(var b=[],d=0;d<this.length;d++)for(var f=
this[d];f.parentNode&&f.parentNode!=h;){b.push(f.parentNode);if(f.parentNode)f=f.parentNode;if(!c)break}return this.setupOld(e(q(b)).filter(a))},parents:function(a){return this.parent(a,!0)},children:function(a){if(this.length==0)return this;for(var c=[],b=0;b<this.length;b++)c=c.concat(z(this[b].firstChild));return this.setupOld(e(c).filter(a))},siblings:function(a){if(this.length==0)return this;for(var c=[],b=0;b<this.length;b++)this[b].parentNode&&(c=c.concat(z(this[b].parentNode.firstChild,this[b])));
return this.setupOld(e(c).filter(a))},closest:function(a,c){if(this.length==0)return this;var b=this[0],d=e(a,c);if(d.length==0)return e();for(;b&&d.indexOf(b)==-1;)b=b!==c&&b!==h&&b.parentNode;return e(b)},filter:function(a){if(this.length==0)return this;if(a==f)return this;for(var c=[],b=0;b<this.length;b++){var d=this[b];d.parentNode&&e(a,d.parentNode).indexOf(d)>=0&&c.push(d)}return this.setupOld(e(q(c)))},not:function(a){if(this.length==0)return this;for(var c=[],b=0;b<this.length;b++){var d=
this[b];d.parentNode&&e(a,d.parentNode).indexOf(d)==-1&&c.push(d)}return this.setupOld(e(q(c)))},data:function(a,c){return this.attr("data-"+a,c)},end:function(){return this.oldElement!=f?this.oldElement:e()},clone:function(a){a=a===!1?!1:!0;if(this.length==0)return this;for(var c=[],b=0;b<this.length;b++)c.push(this[b].cloneNode(a));return e(c)},size:function(){return this.length},serialize:function(){if(this.length==0)return"";for(var a=[],c=0;c<this.length;c++)this.slice.call(this[c].elements).forEach(function(b){var c=
b.getAttribute("type");if(b.nodeName.toLowerCase()!="fieldset"&&!b.disabled&&c!="submit"&&c!="reset"&&c!="button"&&(c!="radio"&&c!="checkbox"||b.checked)&&b.getAttribute("name"))if(b.type=="select-multiple")for(c=0;c<b.options.length;c++)b.options[c].selected&&a.push(b.getAttribute("name")+"="+encodeURIComponent(b.options[c].value));else a.push(b.getAttribute("name")+"="+encodeURIComponent(b.value))});return a.join("&")},eq:function(a){return e(this.get(a))},index:function(a){return a?this.indexOf(e(a)[0]):
this.parent().children().indexOf(this[0])},is:function(a){return!!a&&this.filter(a).length>0}};var H={type:"GET",beforeSend:p,success:p,error:p,complete:p,context:f,timeout:0,crossDomain:null};e.jsonP=function(a){var c="jsonp_callback"+ ++R,b="",d=h.createElement("script");g[c]=function(f){clearTimeout(b);e(d).remove();delete g[c];a.success.call(void 0,f)};d.src=a.url.replace(/=\?/,"="+c);if(a.error)d.onerror=function(){clearTimeout(b);a.error.call(void 0,"","error")};e("head").append(d);a.timeout>
0&&(b=setTimeout(function(){a.error.call(void 0,"","timeout")},a.timeout));return{}};e.ajax=function(a){var c;try{var b=a||{},d;for(d in H)typeof b[d]=="undefined"&&(b[d]=H[d]);if(!b.url)b.url=g.location;if(!b.contentType)b.contentType="application/x-www-form-urlencoded";if(!b.headers)b.headers={};if(!("async"in b)||b.async!==!1)b.async=!0;if(b.dataType)switch(b.dataType){case "script":b.dataType="text/javascript, application/javascript";break;case "json":b.dataType="application/json";break;case "xml":b.dataType=
"application/xml, text/xml";break;case "html":b.dataType="text/html";break;case "text":b.dataType="text/plain";break;default:b.dataType="text/html";break;case "jsonp":return e.jsonP(a)}else b.dataType="text/html";if(e.isObject(b.data))b.data=e.param(b.data);b.type.toLowerCase()==="get"&&b.data&&(b.url+=b.url.indexOf("?")===-1?"?"+b.data:"&"+b.data);if(/=\?/.test(b.url))return e.jsonP(b);if(b.crossDomain===null)b.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(b.url)&&RegExp.$2!=g.location.host;if(!b.crossDomain)b.headers=
e.extend({"X-Requested-With":"XMLHttpRequest"},b.headers);var f,l=b.context,h=/^([\w-]+:)\/\//.test(b.url)?RegExp.$1:g.location.protocol;c=new g.XMLHttpRequest;c.onreadystatechange=function(){var a=b.dataType;if(c.readyState===4){clearTimeout(f);var d,g=!1;if(c.status>=200&&c.status<300||c.status===0&&h=="file:"){if(a==="application/json"&&!/^\s*$/.test(c.responseText))try{d=JSON.parse(c.responseText)}catch(i){g=i}else a==="application/xml, text/xml"?d=c.responseXML:a=="text/html"?(d=c.responseText,
e.parseJS(d)):d=c.responseText;c.status===0&&d.length===0&&(g=!0);g?b.error.call(l,c,"parsererror",g):b.success.call(l,d,"success",c)}else g=!0,b.error.call(l,c,"error");b.complete.call(l,c,g?"error":"success")}};c.open(b.type,b.url,b.async);if(b.withCredentials)c.withCredentials=!0;if(b.contentType)b.headers["Content-Type"]=b.contentType;for(var i in b.headers)c.setRequestHeader(i,b.headers[i]);if(b.beforeSend.call(l,c,b)===!1)return c.abort(),!1;b.timeout>0&&(f=setTimeout(function(){c.onreadystatechange=
p;c.abort();b.error.call(l,c,"timeout")},b.timeout));c.send(b.data)}catch(k){console.log(k),b.error.call(l,c,"error",k)}return c};e.get=function(a,c){return this.ajax({url:a,success:c})};e.post=function(a,c,b,d){typeof c==="function"&&(b=c,c={});d===f&&(d="html");return this.ajax({url:a,type:"POST",data:c,dataType:d,success:b})};e.getJSON=function(a,c,b){typeof c==="function"&&(b=c,c={});return this.ajax({url:a,data:c,success:b,dataType:"json"})};e.param=function(a,c){var b=[];if(a instanceof m)a.each(function(){b.push((c?
c+"[]":this.id)+"="+encodeURIComponent(this.value))});else for(var d in a){var f=c?c+"["+d+"]":d,g=a[d];b.push(e.isObject(g)?e.param(g,f):f+"="+encodeURIComponent(g))}return b.join("&")};e.parseJSON=function(a){return JSON.parse(a)};e.parseXML=function(a){return(new DOMParser).parseFromString(a,"text/xml")};B(e,navigator.userAgent);e.__detectUA=B;if(typeof String.prototype.trim!=="function")String.prototype.trim=function(){this.replace(/(\r\n|\n|\r)/gm,"").replace(/^\s+|\s+$/,"");return this};e.uuid=
function(){var a=function(){return((1+Math.random())*65536|0).toString(16).substring(1)};return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()};e.getCssMatrix=function(a){if(a==f)return g.WebKitCSSMatrix||g.MSCSSMatrix||{a:0,b:0,c:0,d:0,e:0,f:0};try{if(g.WebKitCSSMatrix)return new WebKitCSSMatrix(g.getComputedStyle(a).webkitTransform);else if(g.MSCSSMatrix)return new MSCSSMatrix(g.getComputedStyle(a).transform);else{var c=g.getComputedStyle(a)[e.feat.cssPrefix+"Transform"].replace(/[^0-9\-.,]/g,
"").split(",");return{a:+c[0],b:+c[1],c:+c[2],d:+c[3],e:+c[4],f:+c[5]}}}catch(b){return{a:0,b:0,c:0,d:0,e:0,f:0}}};var i={},L=1;e.event={add:t,remove:u};e.fn.bind=function(a,c){for(var b=0;b<this.length;b++)t(this[b],a,c);return this};e.fn.unbind=function(a,c){for(var b=0;b<this.length;b++)u(this[b],a,c);return this};e.fn.one=function(a,c){return this.each(function(b,d){t(this,a,c,null,function(a,b){return function(){var c=a.apply(d,arguments);u(d,b,a);return c}})})};var P=function(){return!0},Q=
function(){return!1},O={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(a,c,b){for(var d=0;d<this.length;d++){var f=this[d];t(f,c,b,a,function(b){return function(c){var d,g=e(c.target).closest(a,f).get(0);if(g)return d=e.extend(N(c),{currentTarget:g,liveFired:f}),b.apply(g,[d].concat([].slice.call(arguments,1)))}})}return this};e.fn.undelegate=function(a,c,b){for(var d=0;d<this.length;d++)u(this[d],
c,b,a);return this};e.fn.on=function(a,c,b){return c===f||e.isFunction(c)?this.bind(a,c):this.delegate(c,a,b)};e.fn.off=function(a,c,b){return c===f||e.isFunction(c)?this.unbind(a,c):this.undelegate(c,a,b)};e.fn.trigger=function(a,c,b){typeof a=="string"&&(a=e.Event(a,b));a.data=c;for(c=0;c<this.length;c++)this[c].dispatchEvent(a);return this};e.Event=function(a,c){var b=h.createEvent("Events"),d=!0;if(c)for(var e in c)e=="bubbles"?d=!!c[e]:b[e]=c[e];b.initEvent(a,d,!0,null,null,null,null,null,null,
null,null,null,null,null,null);return b};e.bind=function(a,c,b){if(!a.__events)a.__events={};e.isArray(c)||(c=[c]);for(var d=0;d<c.length;d++)a.__events[c[d]]||(a.__events[c[d]]=[]),a.__events[c[d]].push(b)};e.trigger=function(a,c,b){var d=!0;if(!a.__events)return d;e.isArray(c)||(c=[c]);e.isArray(b)||(b=[]);for(var f=0;f<c.length;f++)if(a.__events[c[f]])for(var g=a.__events[c[f]],h=0;h<g.length;h++)e.isFunction(g[h])&&g[h].apply(a,b)===!1&&(d=!1);return d};e.unbind=function(a,c,b){if(a.__events){e.isArray(c)||
(c=[c]);for(var d=0;d<c.length;d++)if(a.__events[c[d]])for(var g=a.__events[c[d]],h=0;h<g.length;h++)if(b==f&&delete g[h],g[h]==b){g.splice(h,1);break}}};e.proxy=function(a,c,b){return function(){if(b)return a.apply(c,b);return a.apply(c,arguments)}};var T=function(a,c){for(var b=0;b<a.length;b++)F(a[b],c)};e.cleanUpContent=function(a,c,b){if(a){var d=a.childNodes;d&&d.length>0&&e.asap(T,{},[G.apply(d,[0]),b]);c&&E(a,b)}};var x=[],I=[],J=[];e.asap=function(a,c,b){if(!e.isFunction(a))throw"$.asap - argument is not a valid function";
x.push(a);I.push(c?c:{});J.push(b?b:[]);g.postMessage("jqm-asap","*")};g.addEventListener("message",function(a){a.source==g&&a.data=="jqm-asap"&&(a.stopPropagation(),x.length>0&&x.shift().apply(I.shift(),J.shift()))},!0);var K={};e.parseJS=function(a){if(a){if(typeof a=="string"){var c=h.createElement("div");c.innerHTML=a;a=c}a=a.getElementsByTagName("script");for(c=0;c<a.length;c++)if(a[c].src.length>0&&!K[a[c].src]){var b=h.createElement("script");b.type=a[c].type;b.src=a[c].src;h.getElementsByTagName("head")[0].appendChild(b);
K[a[c].src]=1}else g.eval(a[c].innerHTML)}};["click","keydown","keyup","keypress","submit","load","resize","change","select","error"].forEach(function(a){e.fn[a]=function(c){return c?this.bind(a,c):this.trigger(a)}});return e}(window);"$"in window||(window.$=jq);if(!window.numOnly)window.numOnly=function(g){if(g===void 0||g==="")return 0;if(isNaN(parseFloat(g)))if(g.replace)g=g.replace(/[^0-9.-]/,"");else return 0;return parseFloat(g)}};

// modified version for qsc mobile

var RealtiveUnitsTemp = [];
var RealtiveUnitsElms = document.querySelectorAll('link[rel=stylesheet],style,[style]');

window.RelativeUnits =  (function(){
    var API, cssRules, styledElements,
        relativeUnitsStylesheetID = 'relative-units-stylesheet';

    function trim(s) {
        return s.replace(/^\s+|\s+$/, '');
    };

    function clean(s) {
        return s.replace(/\/\*.*?\*\//g, ' ').replace(/\s+/g, ' ').replace(/\}\s*/g, '}\n');
    };

    function parseRule(rule) {
        var r = trim(clean(rule)),
            selector = r.replace(/\{.*$/, ''),
            attrs = r.replace(/.*?\{(.*?)\}/, '$1').split(';'),
            ret = { selector: selector, attr: attrs };
        return ret;
    };

    function refreshRules() {
        var s;
        var refreshCounter = 0;
        cssRules = [];
        styledElements = [];
        for(var i = 0; i < RealtiveUnitsElms.length; i++) {
            if(RealtiveUnitsElms[i].id == relativeUnitsStylesheetID) continue;
            switch(RealtiveUnitsElms[i].nodeName.toLowerCase()) {
                case 'link':
                refreshCounter++;
                var href = RealtiveUnitsElms[i].href;
                $.get(href, function(s){
                    s = trim(clean(s)).split('\n');
                    for(var j = 0; j < s.length; j++) {
                        if(s.length > 0) {
                            RealtiveUnitsTemp.push(s[j]);
                        }
                    }
                    refreshCounter--;
                });
                break;
                case 'style':
                s = RealtiveUnitsElms[i].innerHTML;
                s = trim(clean(s)).split('\n');
                for(var j = 0; j < s.length; j++) {
                    if(s.length > 0) {
                        RealtiveUnitsTemp.push(s[j]);
                    }
                }
                break;
                default:
                // we're dealing with a style attribute
                styledElements.push(RealtiveUnitsElms[i]);
                break;
            }
        }
        var requestDoneCheck = setInterval(function(){

            if(refreshCounter !== 0)
	      return;

            for(i = 0; i < RealtiveUnitsTemp.length; i++) {
                if(RealtiveUnitsTemp[i].length > 0) {
                    cssRules.push(parseRule(RealtiveUnitsTemp[i]));
                }
            }

            updateCSS();
            clearInterval(requestDoneCheck);
        }, 10);
    };

    function updateCSS() {
        var stylesheet = '',
            oldStyle = document.querySelectorAll('style#' + relativeUnitsStylesheetID),
            newStylesheet = null,
            i, j, a, v, n, d, styleProp, newProps, key, value;

        for(i = 0; i < cssRules.length; i++) {
            for(j = 0; j < cssRules[i].attr.length; j++) {
                a = cssRules[i].attr[j];
                v = a.match(/^(.*):(.*)$/);

                if(v != null) {
                    key = v[1];
                    value = v[2];

                    if(!value.match(/.*(vw|vh|vm).*/))
                      continue;

                    // replace-regexp
                    var result = value.replace(/-*[0-9.]*[ ]*(vm|vh|vw)/g, function(arg) {

                        var x = arg.match(/(-)*([0-9.]*)[ ]*(vm|vh|vw)/);
                        n = parseFloat(x[2]);
                        switch(x[3]) {
                            case 'vw':
                            d = document.documentElement.clientWidth;
                            break;
                            case 'vh':
                            d = document.documentElement.clientHeight;
                            break;
                            case 'vm':
                            d = Math.min(document.documentElement.clientWidth , document.documentElement.clientHeight);
                            break;
                        }
                        var x1 = x[1] ? x[1] : '';

                        // 前后的空格是为了防止出乱子
                        return ' '+ x1 + (n * d) / 100 + 'px ';
                    });

                    result = key+':'+result+';';

                    // 替换多余空格（英语捉急）
                    result = result.replace(/ ;/g, ';');
                    result = result.replace(/  /g, ' ');

                    stylesheet += cssRules[i].selector + ' {'+ result +'}\n';

                }
            }
        }
        if(oldStyle != null) {
            for(i = 0; i < oldStyle.length; i++) {
                oldStyle[i].parentNode.removeChild(oldStyle[i]);
            }
        }

        newStylesheet = document.createElement('style');
        newStylesheet.id = relativeUnitsStylesheetID;
        newStylesheet.innerHTML = stylesheet;
        document.querySelector('head').appendChild(newStylesheet);
    };

    refreshRules();
    window.addEventListener('resize', function() { refreshRules(); });

    return {
        update: refreshRules,
        recalculate: updateCSS
    };
}());

// Qsc-Mobile -- the HTML5 version
// Copyright (C) 2013 QSC Tech.

var branch = "stable"; // dev or stable
var version = "QSC Mobile HTML5 Nightly Build Version 9 / 130323";
var stuid, pwd, isLogin = false, isTempLogin = false;

var config = localStorage.getItem('config') ? JSON.parse(localStorage.getItem('config')) : {};
var config_list = ['switch_to_dev_branch'];
for(var i = 0; i < 1; i++) {
    var item = config_list[i];
    if(typeof(config[item]) == "undefined")
      config[item] = false; // 默认关闭特性
}
if(config['switch_to_dev_branch']) {
    branch = "dev";
}
if(branch != 'dev') {
    $('.dev').remove();
}

stuid = localStorage.getItem('stuid');
pwd = localStorage.getItem('pwd');
if(stuid && pwd) {
    isLogin = true;
}

if(isLogin) {
    $('#menu-user').html('注销');
    $('#menu-user').attr('id', 'menu-logout');
} else {
    $('#menu-user').html('登录');
    $('#menu-user').attr('id', 'menu-login');
}
LazyLoad=function(k){function p(b,a){var g=k.createElement(b),c;for(c in a)a.hasOwnProperty(c)&&g.setAttribute(c,a[c]);return g}function l(b){var a=m[b],c,f;if(a)c=a.callback,f=a.urls,f.shift(),h=0,f.length||(c&&c.call(a.context,a.obj),m[b]=null,n[b].length&&j(b))}function w(){var b=navigator.userAgent;c={async:k.createElement("script").async===!0};(c.webkit=/AppleWebKit\//.test(b))||(c.ie=/MSIE/.test(b))||(c.opera=/Opera/.test(b))||(c.gecko=/Gecko\//.test(b))||(c.unknown=!0)}function j(b,a,g,f,h){var j=
function(){l(b)},o=b==="css",q=[],d,i,e,r;c||w();if(a)if(a=typeof a==="string"?[a]:a.concat(),o||c.async||c.gecko||c.opera)n[b].push({urls:a,callback:g,obj:f,context:h});else{d=0;for(i=a.length;d<i;++d)n[b].push({urls:[a[d]],callback:d===i-1?g:null,obj:f,context:h})}if(!m[b]&&(r=m[b]=n[b].shift())){s||(s=k.head||k.getElementsByTagName("head")[0]);a=r.urls;d=0;for(i=a.length;d<i;++d)g=a[d],o?e=c.gecko?p("style"):p("link",{href:g,rel:"stylesheet"}):(e=p("script",{src:g}),e.async=!1),e.className="lazyload",
e.setAttribute("charset","utf-8"),c.ie&&!o?e.onreadystatechange=function(){if(/loaded|complete/.test(e.readyState))e.onreadystatechange=null,j()}:o&&(c.gecko||c.webkit)?c.webkit?(r.urls[d]=e.href,t()):(e.innerHTML='@import "'+g+'";',u(e)):e.onload=e.onerror=j,q.push(e);d=0;for(i=q.length;d<i;++d)s.appendChild(q[d])}}function u(b){var a;try{a=!!b.sheet.cssRules}catch(c){h+=1;h<200?setTimeout(function(){u(b)},50):a&&l("css");return}l("css")}function t(){var b=m.css,a;if(b){for(a=v.length;--a>=0;)if(v[a].href===
b.urls[0]){l("css");break}h+=1;b&&(h<200?setTimeout(t,50):l("css"))}}var c,s,m={},h=0,n={css:[],js:[]},v=k.styleSheets;return{css:function(b,a,c,f){j("css",b,a,c,f)},js:function(b,a,c,f){j("js",b,a,c,f)}}}(this.document);
/**
 * @author Zeno Zeng
 * @desc fetch the Data
 * @example updateData('jw/kebiao');
 */
function fetchData(item, success, error) {
    error = typeof(error) == 'function' ? error : function(msg) {return;};
    success = typeof(success) == 'function' ? success : function(msg) {return;};
    if(!navigator.onLine) {
        if(typeof(error) == 'function') {
            error('好的嘛，这是已经离线的节奏……');
        }
        return;
    }
    var baseUrl = branch == "dev" ? 'http://m.myqsc.com/dev/' :'http://m.myqsc.com/stable/';
    var params = [];
    if(item.indexOf('jw/') != -1) {
        params = [
          'stuid='+stuid,
          'pwd='+pwd
        ];
    }
    var jsonUrl = baseUrl + item +'?' + params.join('&') + '&callback=?';
    $.jsonP({url:jsonUrl,
             success:function(data){
                 if(typeof(data['code']) != "undefined") {
                     if(data['code'] == 0) {
                         // 远端返回错误
                         error(data['msg']);
                         return;
                     }
                     if(data['code'] == 1) {
                         // 远端返回消息
                         error(data['msg']);
                         // 再次访问远端来获取内容（递归）
                         updateData(item, success, error);
                     } else {
                         // 未知情况
                         return;
                     }
                 } else {
                     success(data);
                 }
             },
             error:function() {
                 error('好的嘛，好像有什么错误？');
             }
            });
}
/**
 * @author Zeno Zeng
 * @desc get the data and automatically update, by default, it will show all the errors
 * @example getData('jw/kebiao');
 */
function getData(item, success, error) {
    error = typeof(error) == 'function' ? error : function(e) {showMsg(e);};
    success = typeof(success) == 'function' ? success : function(msg) {return;};
    if(isTempLogin) {
        fetchData(item, success, error);
    } else {
        var data = localStorage.getItem(item);
        if(!data) {
            fetchData(item, function(data){
                success(data);
                localStorage.setItem(item, JSON.stringify(data));
            }, error)
        } else {
            success(JSON.parse(data));
        }
    }
}
/**
 * @author Zeno Zeng
 * @desc 模块更新，注意stuid & pwd 可能会因为tempLogin而改变(在回调执行时)，这里先在载入前直接写入stuid和pwd。12小时内不重复check。
 * @example updateModule('jw');
 */
var updateModule = (function(stuid, pwd) {
    return function(module) {
        var lastUpdate = localStorage.getItem('lastUpdate'+module);
        if(!lastUpdate) lastUpdate = 0;
        if((new Date()).getTime() - lastUpdate < 12*3600*1000) {
            return;
        }
        fetchData(module+'/hash', function(data) {
            var item, i = 0;
            for(item in data) {
                if(typeof(hash[item]) == "undefined" || hash[item] != data[item]) {
                    i++;
                    var callback = (function(item) {
                        return function(newdata) {
                            hash[item] = data[item];
                            localStorage.setItem('hash', JSON.stringify(hash));
                            newdata = JSON.stringify(newdata);
                            if(newdata.length > 2) {
                                localStorage.setItem(module+'/'+item, newdata);
                            }
                        }
                    })(item);
                    fetchData(module+'/'+item, callback);
                }
            }
            if(i == 0) {
                localStorage.setItem('lastUpdate'+module, (new Date()).getTime());
            }
        });
    }
})(stuid, pwd);
/**
 * @author Zeno Zeng
 * @desc check all the update, if the hash changed and the data is valid, update
 */
function updateData() {
    window.hash = localStorage.getItem('hash');
    window.hash = window.hash ? JSON.parse(window.hash) : {};

    updateModule('share');
    if(isLogin && !isTempLogin) {
        updateModule('jw');
    }
}
/**
 * @author Zeno Zeng
 * @desc show a layyer above all
 */
function showMsg(msg, callback) {
    $('#msg').show();
    $('#msg').html(msg);
}
/**
 * @author Zeno Zeng
 */
function showLogin(callback) {
    $(currentLayout).hide();
    $('#login').show();

    $('#login_form').bind("submit", function() {
        stuid = $("#stuid").val();
	pwd = $("#pwd").val();

        if(!isTempLogin) {
            localStorage.setItem('stuid', stuid);
            localStorage.setItem('pwd', pwd);
        }

	fetchData('jw/validate',
		function(data){
		    if(data['stuid'] != '') {
			$('#login').hide();
                        if(!isTempLogin) {
                            isLogin = true;
			    $('#menu-login').html('注销');
			    $('#menu-login').attr('id','menu-logout');
                        }
			if(typeof(callback) == 'function') {
			    callback();
			}
		    } else {
			showMsg('登录失败');
                        stuid = localStorage.getItem('stuid');
                        pwd = localStorage.getItem('pwd');
		    }
		},
		function(msg) {
		    showMsg(msg);
                    stuid = localStorage.getItem('stuid');
                    pwd = localStorage.getItem('pwd');
		});
	return false;
    });
}
/**
 * @author Zeno Zeng
 */
function pleaseLoginIfNotLogin(callback) {
    if(isLogin || isTempLogin) {
        if(typeof(callback) == 'function') {
            callback();
        }
    } else {
        showLogin(callback);
    }
}
/**
 * @author Chris Nielsen
 * @desc format the number to LENGTH 2
 */
function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}
/**
 * @author Zeno Zeng
 * @desc format the Time Delta to H:m or m:s
 */
function formatTimeDelta(seconds) {
    var hours = parseInt(seconds / 3600),
        minutes = parseInt(seconds % 3600 / 60);
    seconds = parseInt(seconds % 60);
    return hours > 0 ? pad(hours)+':'+pad(minutes)+':'+pad(seconds) : pad(minutes)+':'+pad(seconds);
}
/**
 * 返回输入日期所在周是单还是双
 * 返回odd/even/null
 * the week is the ISO 8601 week number.
 * 感谢产品的同学提供数据
 */
Date.prototype.getZjuWeek = function () {
    var oddWeekArray = [43,47,49,51,1,3,10,12,14,16,18,19,21,23,25,27],
        evenWeekArray = [44,45,46,48,50,52,2,4,9,11,13,15,17,20,22,24,26],
        week = this.getIsoWeek();
    if(oddWeekArray.indexOf(week) != -1) return 'odd';
    if(evenWeekArray.indexOf(week) != -1) return 'even';
    return null;
};

/**
 * 返回输入日期所在学期或者假期
 * the week is the ISO 8601 week number.
 * 感谢产品的同学提供数据
 */
Date.prototype.getZjuSemester = function () {
    var week = this.getIsoWeek();
    var jwbData = {"chun":[9,10,11,12,13,14,15,16,17,18],"xia":[19,20,21,22,23,24,25,26,27],"qiu":[43,44,45,46],"dong":[1,2,3,4,47,48,49,50,51,52],"hanjia":[5,6,7,8],"shujia":[28,29,30,31,32,33]};

    switch (true) {
        case jwbData.chun.indexOf(week) != -1:
	return '春';
        case jwbData.xia.indexOf(week) != -1:
	return '夏';
        case jwbData.qiu.indexOf(week) != -1:
	return '秋';
        case jwbData.dong.indexOf(week) != -1:
	return '冬';
        case jwbData.shujia.indexOf(week) != -1:
	return '暑假';
        case jwbData.hanjia.indexOf(week) != -1:
	return '寒假';
        default:
	return false;
    }
};

// 获取第n节课的上课时间
function getSksj(nth) {
    //首项为空来取代[0]
    var sksj = ["","08:00","08:50","09:50","10:40","11:30","13:15","14:05","14:55","15:55","16:45","18:30","19:20","20:10"];
    return sksj[nth];
}

// 获取第n节课的下课时间
function getXksj(nth){
    //首项为空来取代[0]
    var xksj = ["","08:45","09:35","10:35","11:25","12:15","14:00","14:50","15:40","16:40","17:30","19:15","20:05","20:55"];
    return xksj[nth];
}

// 返回是第几节
// 若这时候本来就没课，返回false
Date.prototype.getClassNth = function () {
    var i;

    for(i = 1; i < 14; i++){
	if(this.laterThan(getSksj(i)) && !this.laterThan(getXksj(i)))
	{
	    return i;
	}
    }

    return false;
};

// 返回下节课是第几节
// 若没有下节课了就返回false
Date.prototype.getClassNthNext = function () {
    var i, max = 0;

    for(i = 1; i < 14; i++){
	if(this.laterThan(getSksj(i))) {
	    max = i;
	}
    }

    max++;
    return max > 13 ? false : max;
};


/**
 * 课表类封装：读取指定日期的课表
 */

function KeBiao(data, date){
    if(typeof(data) == "undefined") {
        console.warn("no data for KeBiao");
        data = [];
    }
    var week = date.getZjuWeek();
    var semester = date.getZjuSemester();
    var weekday = ["7","1","2","3","4","5","6"];
    var weekdate = weekday[date.getDay()];
    var j, classes, n;
    var keBiao = [];
    var courseNameList = [];

    // Based on Liu Dong Yuan's function
    // https://github.com/xhacker/zju-jwb-to-icalendar/blob/master/grabber.py
    function trimLocation(l) {
        l = l.replace("(多媒体，音乐教室)", "");
        l = l.replace("(科创专用教室)", "");
        l = l.replace("(网络五边语音)", "");
        l = l.replace("(网络五边菱)", "");
        l = l.replace("(长方无黑板)", "");
        l = l.replace("(五边菱形)", "");
        l = l.replace("(六边圆形)", "");
        l = l.replace("(网络六边)", "");
        l = l.replace("(网络五边)", "");
        l = l.replace("(传统语音)", "");
        l = l.replace("(长方形)", "");
        l = l.replace("(语音)", "");
        l = l.replace("(成多)", "");
        l = l.replace("(普)", "");
        l = l.replace("(多)", "");
        l = l.replace("*", "");
        return l;
    }

    for (var i=0, len = data.length; i<len; i++)
    {
        var theClass = data[i]['class'];
        for (j=0; j<theClass.length; j++) {
            var item = theClass[j];
            if(data[i]['semester'].indexOf(semester) != -1) {
                if(item['week'] == week || item['week'] == 'both') {
                    if(item['weekday'] == weekdate) {
                        courseNameList.push(data[i]['name']);
                        for(var k=0; k<item['class'].length; k++) {
	                    n = {
		                'id':data[i]['id'],
		                'name':data[i]['name'],
		                'teacher':data[i]['teacher'],
		                'classroom':trimLocation(item['place'])
	                    };
                            keBiao[item['class'][k]] = n;
                        }
                    }
                }
            }
        }
    }


    // return an array of course name
    this.getCourseNameList = function() {
        return courseNameList;
    };

    // 返回第n节课的课程代号
    this.getCourseId = function(nth) {
	return typeof(keBiao[nth]) != "undefined" ? keBiao[nth]['id'] : false;
    };

    // 返回第n节课的课程名
    this.getCourseName = function(nth) {
	return typeof(keBiao[nth]) != "undefined" ? keBiao[nth]['name'] : false;
    };

    // 返回第n节课的上课地点
    this.getClassroom = function(nth) {
	return typeof(keBiao[nth]) != "undefined" ? keBiao[nth]['classroom'] : false;
    };

    // 返回第n节课的任课老师
    this.getTeacherName = function(nth) {
	return typeof(keBiao[nth]) != "undefined" ? keBiao[nth]['teacher'] : false;
    };

    // 返回课程唯一码
    this.getCourseHash = function(nth) {
        var hash = this.getCourseId(nth)+this.getClassroom(nth)+this.getTeacherName(nth);
        return hash;
    };

    this.getCourseTime = function(nth) {
        var nthArr = this.getClassNthAll(nth);
        var sksj = getSksj(nthArr[0]);
        var xksj = getXksj(nthArr[nthArr.length -1]);
        return [sksj, xksj];
    };

    // 判断该天是否有课
    this.haveClass = function() {
	return keBiao.length > 0 ? true : false;
    };

    this.getClassNthAll = function(nth) {
        var hash = this.getCourseHash(nth);
        var arr = [];

        for(i=1; i <= 13; i++) {
            if(this.getCourseHash(i) == hash){
                arr.push(i);
            }
        }

        return arr;
    };

    // 返回下一节有效的nth
    this.getClassNext = function(nth) {
        nth = nth > 0 ? nth : 0;
        for(i = nth + 1; i <= 13; i++) {
            if(this.getCourseName(i))
              return i;
        }
        return false;
    };

    // 若正在上课，返回当前nth，否则返回下节课nth，若下面没课，返回false
    this.getClassMaybe = function() {
        var now = new Date();
        var i;

        // 现在有课
        var nth_now = now.getClassNth();

        if(this.getCourseName(nth_now) && nth_now != false)
          return nth_now;

        var nth_next = now.getClassNthNext();

        // 现在已经是第十三节
        if(!nth_next)
          return false;

        // 下面还有课
        for(i=nth_next; i <14; i++) {
            if(this.getCourseName(i) != false) {
                return i;
            }
        }

        // 真没课了
        return false;
    };


    // 返回下一门有效的nth
    this.getCourseNext = function(theClass) {
        theClass = theClass > 0 ? theClass : 0;
        for(i = theClass; i <= 13; i++) {
            i++;
            if(this.getCourseName(i)) {
                while(this.getCourseHash(i+1) == this.getCourseHash(i)) {
                    i++;
                }
                return i;
            }
        };
        return false;
    };

}



/*!
 * 依赖的函式库
 *
 */


// 为了处理课表封装的……
// 假设现在是08:00，date = new Date()
// date.laterThan('07:00') => 3600，返回差距秒数
// date.laterThan('08:00') => false

Date.prototype.laterThan = function (timeString) {
    var n = timeString.split(':');
    var newDate = new Date(this);
    newDate.setHours(n[0], n[1], 0);
    var delta = this.getTime() - newDate.getTime();
    return delta > 0 ? Math.floor(delta/1000) : false;
};
Date.prototype.earierThan = function (timeString) {
    var n = timeString.split(':');
    var newDate = new Date(this);
    newDate.setHours(n[0], n[1], 0);
    var delta = newDate.getTime() - this.getTime();
    return delta > 0 ? Math.floor(delta/1000) : false;
};


/**
 * Returns the week number for this date. dowOffset is the day of week the week
 * "starts" on for your locale - it can be from 0 to 6. If dowOffset is 1 (Monday),
 * the week returned is the ISO 8601 week number.
 * @param int dowOffset
 * @return int
 */
Date.prototype.getIsoWeek = function () {
    // todo : fix get IsoWeek

    /*getWeek() was developed by Nick Baicoianu at MeanFreePath: http://www.epoch-calendar.com */
    // You may copy and paste this code without charge. All we ask is you leave the credit line in the function body intact.


    var nYear, nday;

    var dowOffset = 0;
    var newYear = new Date(this.getFullYear(),0,1);
    var day = newYear.getDay() - dowOffset; //the day of week the year begins on
    day = (day >= 0 ? day : day + 7);
    var daynum = Math.floor((this.getTime() - newYear.getTime() -
	                     (this.getTimezoneOffset()-newYear.getTimezoneOffset())*60000)/86400000) + 1;
    var weeknum;

    // 若是周日，返回昨天的weeknum
    if(this.getDay() == 0)
      daynum--;

    //if the year starts before the middle of a week
    if(day < 4) {
	weeknum = Math.floor((daynum+day-1)/7) + 1;
	if(weeknum > 52) {
	    nYear = new Date(this.getFullYear() + 1,0,1);
	    nday = nYear.getDay() - dowOffset;
	    nday = nday >= 0 ? nday : nday + 7;
	    /*if the next year starts before the middle of the week, it is week #1 of that year*/
	    weeknum = nday < 4 ? 1 : 53;
	}
    } else {
	weeknum = Math.floor((daynum+day-1)/7);
    }


    return weeknum;
};
var currentLayout = '#menu';// 存储当前处于哪个界面，方便返回时选取
window.location.hash = '';// 清除hash，进入默认界面

// 除登陆外所有跳转均需通过修改 window.location.hash 来实现
$(window).on("hashchange", function(){
    var hash = window.location.hash.toLowerCase();
    if (hash == '') {
        // 返回主界面
        $(currentLayout).hide();

        // 设置延迟，防止鼠标事件被意外传递（opera mobile）
        setTimeout(function() {
            $('#menu').show()
        }, 10);
        currentLayout = '#menu';
    } else {
        $(currentLayout).hide();
        $(hash).show();
        currentLayout = hash;
    }
});

$('.backward').bind("click", function(){
    history.back();
});

$('#menu').on('click', '#menu > div', function() {
    var id = $(this).attr('id');
    id = id.replace(/menu-/g, '');
    id = id.charAt(0).toUpperCase() + id.slice(1);
    switch(id)
    {
    case 'Login':
        isTempLogin = false;
        pleaseLoginIfNotLogin(function() {
            $('#menu').show();
            kebiaoInit();
        });
        break;
    case 'Logout':
        isLogin = false;
        localStorage.clear();
        $(this).html('登录');
        $(this).attr('id', 'menu-login');
        kebiaoInit();
        break;
    case 'Temp-login':
        isTempLogin = true;
        showLogin(function() {
            $('#menu').show();
            $('#menu-temp-login').html(stuid);
            $('#menu-temp-login').attr('id', 'menu-temp-logout');
            kebiaoInit();
        });
        break;
    case 'Temp-logout':
        isTempLogin = false;
        stuid = localStorage.getItem('stuid');
        pwd = localStorage.getItem('pwd');
        $(this).html('临时登录');
        $(this).attr('id', 'menu-temp-login');
        kebiaoInit();
        break;
    case 'Xiaoli':
    case 'Xiaoche':
    case 'Config':
        eval('load'+id+'()');
	window.location.hash = id;
        break;
    default:
        pleaseLoginIfNotLogin(function() {
            eval('load'+id+'()');
	    window.location.hash = id;
        });
        break;
    }
});

$('#msg').bind("click", function(){
    $(this).hide();
});


$('#wrap').on('click', '.slide > div > header', function(){
    if($(this).parent().hasClass('show')) {
        $(this).parent().removeClass('show');
        $(this).parent().addClass('hide');
    } else {
        $(this).parent().removeClass('hide');
        $(this).parent().addClass('show');
    }
});

function loadZuoye() {
    LazyLoad.js('js/zuoye-min.js', function () {
        loadZuoyeAll();
    });
}

var kebiaoData;
function kebiaoInit() {
    if(!isLogin && !isTempLogin) {
        $('#menu-kebiao').html('课表');
        return;
    }
    (function() {
        getData('jw/kebiao', function(data) {
            kebiaoData = data;
            displayKebiaoSummary();
            clearInterval(window.kbSummaryInt);
            window.kbSummaryInt = setInterval(function() {
                displayKebiaoSummary();
            }, 1000);
        });
    })();
}
kebiaoInit();
function displayKebiaoSummary() {
    if(currentLayout != '#menu'&& currentLayout != '') return; // no need to show it
    if(!isLogin && !isTempLogin) {
        $('#menu-kebiao').html('课表');
        return;
    }
    var now = new Date();
    var keBiao = new KeBiao(kebiaoData, now);
    var classNthNow = now.getClassNth();
    var classNthMaybe = keBiao.getClassMaybe();
    var html = '';

    // get count down
    var countdown;
    if(classNthMaybe && classNthNow == classNthMaybe) {
        // 正在上课
        countdown = now.earierThan(getXksj(classNthMaybe));
    } else if (classNthMaybe) {
        // 现在没课，待会有课
        countdown = now.earierThan(getSksj(classNthMaybe));
    } else {
        countdown = 0;
    }
    if(classNthMaybe) {
        html += '<div id="countdown">'+formatTimeDelta(countdown)+'</div>';
        html += '<div id="kb-sum-place">'+keBiao.getClassroom(classNthMaybe)+'</div>';
        html += '<div id="kb-sum-course">'+keBiao.getCourseName(classNthMaybe)+'</div>';
    } else {
        html += displayTomorrowSummary();
    }
    $('#menu-kebiao').html(html);
}
function displayTomorrowSummary() {
    var html = '';
    html += '明天的课:<div id="tomorrow-summary">';
    var tomorrow = new Date();
    tomorrow.setTime(tomorrow.getTime() + 1000*3600*24);
    var keBiao = new KeBiao(kebiaoData, tomorrow);
    html += keBiao.getCourseNameList().join(',<br>');
    html += '</div>';
    return html;
}
function writeClassToDom(dom, date){
    var htmlString = '';
    var theClass = 0;

    var keBiao;
    keBiao = new KeBiao(kebiaoData, date);

    if(!keBiao.haveClass()) {
        $(dom).html('<div class="no_class">好的嘛，没有课了……</div>');
        return;
    }

    while(theClass !== false) {
        theClass = keBiao.getCourseNext(theClass);

        if(keBiao.getCourseName(theClass)) {
            htmlString += '<div class="class_name">'+keBiao.getCourseName(theClass)+'</div>';
            htmlString += '<div class="class_nth_all">'+keBiao.getClassNthAll(theClass).join(',')+'</div>';
            htmlString += '<div class="class_time">'+keBiao.getCourseTime(theClass).join('-')+'</div>';
            htmlString += '<div class="class_classroom">'+keBiao.getClassroom(theClass)+'</div>';

        }
    }

    $(dom).html(htmlString);
}
function loadKebiao() {
    var zjuWeekInfo;
    var today = new Date();
    var tomorrow = new Date();
    tomorrow.setTime(tomorrow.getTime() + 1000*3600*24);

    writeClassToDom('#today .detail', today);
    writeClassToDom('#tomorrow .detail', tomorrow);

    var i;
    var offset = today.getDay() == 0 ? today.getDay() + 6 : today.getDay() - 1;
    var weekArr = ['mon','tue','wed','thu','fri','sat','sun'];

    for(i=0; i<7; i++) {
        var xdate = new Date(today.getTime() + (i - offset) * 24 * 3600 * 1000);
        writeClassToDom('#'+weekArr[i]+' .detail', xdate);
    }
}

function loadXiaoli() {
    if(typeof(xiaoliData) == "undefined") {
        (function() {

            // $('#xiaoli_notice').on('click', 'ul > li', function() {
            //     var id = $(this).attr('id').replace("notice_id_", "");
            //     $(this).find('.content').toggle();
            //     loadNoticeDetail(id);
            // });

            getData('share/shijian', function(data){
                window.xiaoliData = data;
                loadShijian();
            });
        })()
    }
}

function loadShijian() {
    var htmlNow = '', htmlFuture = '', htmlPast = '';
    var now = (new Date()).getTime();
    // 汇总
    for(var i=0; i<xiaoliData.length; i++) {
        var item = xiaoliData[i];
        var content = item['事件内容'];
        var type = item['事件类型'];
        var begin = item['起始时间'];
        var end = item['终止时间'];

        var delta = (new Date(end)).getTime() - now;

        if(delta < -24*3600*1000) {
            // 已过去
            htmlPast += '<li><div class="content">'+content+'</div><div>'+begin+' - '+end+'</div></li>';
        } else if (delta > 2*30*24*3600*1000){
            // 60天以后
            htmlFuture += '<li><div class="content">'+content+'</div><div>'+begin+' - '+end+'</div></li>';
        } else {
            // 一个月内
            htmlNow += '<li><div class="content">'+content+'</div><div>'+begin+' - '+end+'</div></li>';
        }
    }


    $('#xiaoli_now ul').html(htmlNow);
    $('#xiaoli_future ul').html(htmlFuture);
    $('#xiaoli_past ul').html(htmlPast);
}

// function loadNotice() {
//     var htmlNotice = '';
//     for(var j=0, len=noticeData.length; j<len; j++) {
//         var item = noticeData[j];


//         var timeEnd = new Date(item.time_end);
//         var now = new Date();
//         timeEnd.setHours(23, 59, 59);

//         if(now.getTime() > timeEnd.getTime())
//           continue;

//         htmlNotice += '<li id="notice_id_'+item.id+'"><div class="title">'+item.title+ '</div><div class="location">'+item.location+'</div><div class="time_start">开始：'+item.time_start+'</div><div class="time_end">结束：'+item.time_end+'</div><div class="content" style="display:none"></div></li>';
//     }
//     htmlNotice = htmlNotice ? htmlNotice : "<li>好的嘛，目前木有活动了……</li>";
//     $('#xiaoli_notice ul').html(htmlNotice);
// }

// function loadNoticeDetail(id) {
//     if(sessionStorage["notice_id_"+id]){
//         var data = sessionStorage["notice_id_"+id];
//         data = JSON.parse(data);
//         $("#notice_id_"+id+" .content").html("<hr><br>"+data.content);
//     } else {
//         fetchData('share/notice?id='+id, true, function(data) {
//             if(!data) return;

//             // 去掉图片
//             data.content = data.content.replace(/<img.*>/g, '');

//             $("#notice_id_"+id+" .content").html("<hr><br>"+data.content);
//             sessionStorage["notice_id_"+id] = JSON.stringify(data);
//         });
//     }
// }

function loadKaoshi() {
    getData('jw/kaoshi', function(kaoshiData) {
        var html = '';
        for(var i = 0; i<kaoshiData.length; i++) {
            var item = kaoshiData[i];
            if(item['课程名称'] == '军训')
              continue;
            if(item['考试时间'] == ' ') //考试时间为空
              continue;

            // 不显示过期的考试
            var time = item['考试时间'];
            time = time.replace(/\(.*$/, '');
            time = time.replace(/(年|月)/g, '-');
            time = time.replace(/日/g, '');
            time = new Date(time+' 23:59');

            var today = new Date();

            if(today.getTime() > time.getTime())
              continue;

            html += '<div class="kaoshi">';
            html += '<div class="name">';
            html += item['课程名称'];
            html += '</div>';
            html += '<div class="time">';
            html += item['考试时间'];
            html += '</div>';
            html += '<div class="credit">';
            html += '学分：'+item['学分'];
            html += '</div>';
            html += '<div class="place">';
            html += '考试地点：'+item['考试地点'];
            html += '</div>';
            html += '<div class="place_id">';
            html += '考试座位号：'+item['考试座位号'];
            html += '</div>';
            html += '<div class="re">';
            html += '重修标记：'+item['重修标记'];
            html += '</div>';
            html += '</div>';
        }
        $('#kaoshi_detail').html(html);
    });
}

function loadChengji(){
    getData('jw/chengji', function(chengJiData) {
        var chengJiArray = chengJiData['chengji_array'];
        var gpa = chengJiData['junji_array'];

        var html = '';
        for(var i = chengJiArray.length - 1; i > -1; i--) {
            html += '<div class="chengji>';
            html += '<div class="name">' + chengJiArray[i]['课程名称'] + '</div>';
            html += '<div class="score">成绩：'+chengJiArray[i]['成绩'] + '</div>';
            html += '<div class="credit">学分：'+chengJiArray[i]['学分'] + '</div>';
            html += '<div class="gradepoint">绩点：'+chengJiArray[i]['绩点'] + '</div>';
            html += '</div>';
            html += '<br>';
        }
        $('#chengji #danke .detail').html(html);

        // gpa
        html = '';
        gpa.push(gpa.shift());
        for(i = gpa.length - 1; i > -1; i--) {
            html += '<div class="gpa">';
            html += '<div class="date">';
            html += gpa[i]['时间'];
            html += '</div>';
            html += '<div class="junji">均绩：';
            html += gpa[i]['均绩'];
            html += '</div>';
            html += '<div class="zongxuefen">总学分：';
            html += gpa[i]['总学分'];
            html += '</div>';
            html += '</div>';
        }
        $('#gpa .detail').html(html);
    });
}

function loadXiaoche(){
    getData('share/xiaoche', function(xiaoCheData) {
        window.xiaoCheData = xiaoCheData;
        if(!xiaoCheData)
          return;
        loadXiaocheInfo(xiaoCheData);
        (function() {
            $('#xiaoche select').unbind("change");
            $('#xiaoche select').bind("change", function() {
                loadXiaocheInfo(xiaoCheData);
            });
        })()
    });
}
function loadXiaocheInfo(xiaoCheData) {
    var from = $('select#from').val();
    var to = $('select#to').val();

    var i;
    var theBus = [];
    for(i=0; i < xiaoCheData.length; i++) {
        if(xiaoCheData[i]['起点'] != from)
          continue;
        if(xiaoCheData[i]['终点'] != to)
          continue;
        theBus.push(xiaoCheData[i]);
    }
    $('#bus_info').html('');// 清空旧数据
    if(theBus.length == 0) {
        $('#bus_info').html('<br>好像木有车的样子。');// 清空旧数据
    } else {
        var s = "";
        for(i=0; i<theBus.length; i++) {
            s += '<div class="bus_info"><header><span class="begin">'+theBus[i]['发车时间']+'</span><span class="id">#'+theBus[i]['车号']+'</span></header><div class="detail"><span class="end">到站时间：'+theBus[i]['到站时间']+'</span><br><br><span class="date">'+theBus[i]['运行时间']+'</span><br><br><span class="place">'+theBus[i]['停靠地点']+'</span></div></div>';
        }
        $('#bus_info').html(s);
    }
}
function loadConfig() {
    (function() {
        for(var i = 0; i < config_list.length; i++) {
            var item = config_list[i];
            $('#'+item).attr("class", config[item]);
        }
        $('#config_items li').unbind("click");
        $('#config_items li').bind("click", function(){
            var item = $(this).attr('id');
            config[item] = !config[item];
            localStorage.setItem('config', JSON.stringify(config));
            $(this).attr("class", config[item]);
        });
    })()
}
updateData();
console.log('test');