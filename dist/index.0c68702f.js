var breakpoints=function(){"use strict";function e(e){t.init(e)}var t={list:null,media:{},events:[],init:function(e){t.list=e,window.addEventListener("resize",t.poll),window.addEventListener("orientationchange",t.poll),window.addEventListener("load",t.poll),window.addEventListener("fullscreenchange",t.poll)},active:function(e){var n,s,a,i,r,d,c;if(!(e in t.media)){if(">="==e.substr(0,2)?(s="gte",n=e.substr(2)):"<="==e.substr(0,2)?(s="lte",n=e.substr(2)):">"==e.substr(0,1)?(s="gt",n=e.substr(1)):"<"==e.substr(0,1)?(s="lt",n=e.substr(1)):"!"==e.substr(0,1)?(s="not",n=e.substr(1)):(s="eq",n=e),n&&n in t.list)if(i=t.list[n],Array.isArray(i)){if(r=parseInt(i[0]),d=parseInt(i[1]),isNaN(r)){if(isNaN(d))return;c=i[1].substr(String(d).length)}else c=i[0].substr(String(r).length);if(isNaN(r))switch(s){case"gte":a="screen";break;case"lte":default:a="screen and (max-width: "+d+c+")";break;case"gt":case"not":a="screen and (min-width: "+(d+1)+c+")";break;case"lt":a="screen and (max-width: -1px)"}else if(isNaN(d))switch(s){case"gte":default:a="screen and (min-width: "+r+c+")";break;case"lte":a="screen";break;case"gt":a="screen and (max-width: -1px)";break;case"lt":case"not":a="screen and (max-width: "+(r-1)+c+")"}else switch(s){case"gte":a="screen and (min-width: "+r+c+")";break;case"lte":a="screen and (max-width: "+d+c+")";break;case"gt":a="screen and (min-width: "+(d+1)+c+")";break;case"lt":a="screen and (max-width: "+(r-1)+c+")";break;case"not":a="screen and (max-width: "+(r-1)+c+"), screen and (min-width: "+(d+1)+c+")";break;default:a="screen and (min-width: "+r+c+") and (max-width: "+d+c+")"}}else a="("==i.charAt(0)?"screen and "+i:i;t.media[e]=!!a&&a}return!1!==t.media[e]&&window.matchMedia(t.media[e]).matches},on:function(e,n){t.events.push({query:e,handler:n,state:!1}),t.active(e)&&n()},poll:function(){var e,n;for(e=0;e<t.events.length;e++)n=t.events[e],t.active(n.query)?n.state||(n.state=!0,n.handler()):n.state&&(n.state=!1)}};return e._=t,e.on=function(e,n){t.on(e,n)},e.active=function(e){return t.active(e)},e}();!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.breakpoints=t()}(this,(function(){return breakpoints}));
//# sourceMappingURL=index.0c68702f.js.map
