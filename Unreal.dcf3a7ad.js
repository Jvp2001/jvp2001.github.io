const e={gitHubPageURL:"https://github.com/jvp2001/",rawContentUrl:"https://raw.githubusercontent.com/Jvp2001/jvp2001.github.io/main/src/",imageUrl:"images",videoUrl:"videos"},n={Unreal:{pages:[{name:" Multiplayer Menu UI",link:{type:"GitHub",value:"MultiplayerUI"},element:{name:"Multiplayer Menu UI",showControls:!1,maximiseOnClick:!0,style:{size:{width:200,height:200},fit:"contain"}}}],variables:e},Unity:{pages:[{name:"Maze Game",link:{type:"GitHub",value:"MazeGame"},element:{name:"Unity/Maze.gif",style:{size:{width:200,height:200},fit:"contain"}}},{name:"3D level",link:{type:"GitHub",value:"3DLevel"},element:{name:"Unity/3DGameLevel.gif",style:{size:{width:200,height:200},fit:"contain"}}}],variables:e}};var t={fullscreenEnabled:0,fullscreenElement:1,requestFullscreen:2,exitFullscreen:3,fullscreenchange:4,fullscreenerror:5,fullscreen:6},l=["webkitFullscreenEnabled","webkitFullscreenElement","webkitRequestFullscreen","webkitExitFullscreen","webkitfullscreenchange","webkitfullscreenerror","-webkit-full-screen"],r=["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror","-moz-full-screen"],s=["msFullscreenEnabled","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError","-ms-fullscreen"],o="undefined"!=typeof window&&void 0!==window.document?window.document:{},c="fullscreenEnabled"in o&&Object.keys(t)||l[0]in o&&l||r[0]in o&&r||s[0]in o&&s||[],i={requestFullscreen:function(e){return e[c[t.requestFullscreen]]()},requestFullscreenFunction:function(e){return e[c[t.requestFullscreen]]},get exitFullscreen(){return o[c[t.exitFullscreen]].bind(o)},get fullscreenPseudoClass(){return":"+c[t.fullscreen]},addEventListener:function(e,n,l){return o.addEventListener(c[t[e]],n,l)},removeEventListener:function(e,n,l){return o.removeEventListener(c[t[e]],n,l)},get fullscreenEnabled(){return Boolean(o[c[t.fullscreenEnabled]])},set fullscreenEnabled(e){},get fullscreenElement(){return o[c[t.fullscreenElement]]},set fullscreenElement(e){},get onfullscreenchange(){return o[("on"+c[t.fullscreenchange]).toLowerCase()]},set onfullscreenchange(e){return o[("on"+c[t.fullscreenchange]).toLowerCase()]=e},get onfullscreenerror(){return o[("on"+c[t.fullscreenerror]).toLowerCase()]},set onfullscreenerror(e){return o[("on"+c[t.fullscreenerror]).toLowerCase()]=e}};let u;function a(e,n){return n in e}function m(e,n){const t=document.createElement("div");t.classList.add("col-4","col-12-mobile");const l=document.createElement("article");l.classList.add("item"),l.title="Hover to enlarge";const r=document.createElement("a");r.href=`${e.rawContentUrl}/${e.videoUrl}/${n.link.value}`;const s=function(e,n){if(a(n,"showControls")){const t=document.createElement("video");t.src=`${e.rawContentUrl}/${e.videoUrl}/${n.name}`;const l=n.style.size;return t.style.width=`${l.width}px`,t.style.height=`${l.height}px`,t.style.objectFit=n.style.fit,t.controls=n.showControls,n.maximiseOnClick&&t.addEventListener("click",(e=>i.requestFullscreen(t))),t.onended=e=>i.exitFullscreen(),t}if(a(n,"style")){const t=document.createElement("img");t.src=`${e.rawContentUrl}/${e.imageUrl}/${n.name}`;const l=n.style.size;return t.style.width=`${l.width}px`,t.style.height=`${l.height}px`,t.style.objectFit=n.style.fit,t}throw new Error("Unrecognised ProjectElement type")}(e,n.element),o=document.createElement("header"),c=document.createElement("h3");return c.textContent=n.name,o.append(r),r.append(c),l.append(s,o),t.append(l),t}window.onload=function(){const e=document.title.split(" ")[0];console.log(e),u=document.querySelector("section#portfolio div.container"),function(e){console.log(e);const n=e.variables,t=e.pages,l=n??{gitHubPageURL:"",imageUrl:"",rawContentUrl:"",videoUrl:""},r=document.createElement("div");r.classList.add("row"),console.log(t);for(const e of t)r.append(m(l,e));console.log("Is container valid? ",null!=u),u.append(r)}(n[e])};
//# sourceMappingURL=Unreal.dcf3a7ad.js.map
