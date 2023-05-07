const e={gitHubPageURL:"https://github.com/jvp2001/",rawContentUrl:"https://github.com/Jvp2001/jvp2001.github.io/raw/main/src",imageUrl:"images",videoUrl:"videos",defaultVideoExtension:".mp4"},n={Unreal:{intro:"",portfolio:{projects:[{name:" Multiplayer Menu UI",link:{type:"GitHub",value:"Unreal/MultiplayerMenuUI.mp4"},element:{name:"MultiplayerMenuUI",showControls:!1,maximiseOnClick:!0,style:{size:{width:200,height:200},fit:"contain"}}}]},variables:e},Unity:{intro:"",portfolio:{projects:[{name:"Maze Game",link:{type:"GitHub",value:"MazeGame"},element:{name:"Unity/Maze.gif",style:{size:{width:200,height:200},fit:"contain"}}},{name:"3D level",link:{type:"GitHub",value:"3DLevel"},element:{name:"Unity/3DGameLevel.gif",style:{size:{width:200,height:200},fit:"contain"}}},{name:"UI",link:{type:"SubPage",value:"UnityUI.html"},element:{name:"Unity/Button.png",style:{size:{width:200,height:200},fit:"contain"}}}]},variables:e},UnityUI:{intro:"",portfolio:{projects:[{name:"Button Animation",link:{type:"GitHub",value:"Unity/Button.png"},element:{name:"ButtonAnimation.mov",showControls:!1,maximiseOnClick:!0,autoplay:!0,style:{size:{width:200,height:200},fit:"contain"}}},{name:"Slider Animation",link:{type:"GitHub",value:"Slider"},element:{name:"SliderAnimation.mov",showControls:!1,maximiseOnClick:!0,autoplay:!0,style:{size:{width:200,height:200},fit:"contain"}}}]},variables:e}};var t={fullscreenEnabled:0,fullscreenElement:1,requestFullscreen:2,exitFullscreen:3,fullscreenchange:4,fullscreenerror:5,fullscreen:6},l=["webkitFullscreenEnabled","webkitFullscreenElement","webkitRequestFullscreen","webkitExitFullscreen","webkitfullscreenchange","webkitfullscreenerror","-webkit-full-screen"],r=["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror","-moz-full-screen"],i=["msFullscreenEnabled","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError","-ms-fullscreen"],o="undefined"!=typeof window&&void 0!==window.document?window.document:{},s="fullscreenEnabled"in o&&Object.keys(t)||l[0]in o&&l||r[0]in o&&r||i[0]in o&&i||[],c={requestFullscreen:function(e){return e[s[t.requestFullscreen]]()},requestFullscreenFunction:function(e){return e[s[t.requestFullscreen]]},get exitFullscreen(){return o[s[t.exitFullscreen]].bind(o)},get fullscreenPseudoClass(){return":"+s[t.fullscreen]},addEventListener:function(e,n,l){return o.addEventListener(s[t[e]],n,l)},removeEventListener:function(e,n,l){return o.removeEventListener(s[t[e]],n,l)},get fullscreenEnabled(){return Boolean(o[s[t.fullscreenEnabled]])},set fullscreenEnabled(e){},get fullscreenElement(){return o[s[t.fullscreenElement]]},set fullscreenElement(e){},get onfullscreenchange(){return o[("on"+s[t.fullscreenchange]).toLowerCase()]},set onfullscreenchange(e){return o[("on"+s[t.fullscreenchange]).toLowerCase()]=e},get onfullscreenerror(){return o[("on"+s[t.fullscreenerror]).toLowerCase()]},set onfullscreenerror(e){return o[("on"+s[t.fullscreenerror]).toLowerCase()]=e}};function a(e,n){return n in e}function u(e,n){const t=document.createElement("div");t.classList.add("col-4","col-12-mobile");const l=document.createElement("article");l.classList.add("item"),l.title="Hover to enlarge";const r=document.createElement("a");switch(n.link.type){case"GitHub":r.href=`${e.gitHubPageURL}/${n.link.value}`.replace("//","/");break;case"SubPage":r.href=`./${n.link.value}`.replace("//","/")}const i=function(e,n){if(a(n,"showControls")){const t=document.createElement("video");t.title="Click to maximise and play.",t.src=`${e.rawContentUrl}/${e.videoUrl}/${n.name}`.replace("//","/"),t.src.endsWith(e.defaultVideoExtension)||(t.src+=e.defaultVideoExtension);const l=n.style.size;return t.style.width=`${l.width}px`,t.style.height=`${l.height}px`,t.style.objectFit=n.style.fit,t.controls=n.showControls,n.maximiseOnClick&&t.addEventListener("click",(async e=>{c.requestFullscreen(t),await t.play()})),t.onended=e=>c.exitFullscreen(),t}if(a(n,"style")){const t=document.createElement("img");t.src=`${e.rawContentUrl}/${e.imageUrl}/${n.name}`.replace("//","/");const l=n.style.size;return t.style.width=`${l.width}px`,t.style.height=`${l.height}px`,t.style.objectFit=n.style.fit,t}throw new Error("Unrecognised ProjectElement type")}(e,n.element),o=document.createElement("header"),s=document.createElement("h3");return s.textContent=n.name,console.log(n.name),o.append(r),r.append(s),l.append(i,o),t.append(l),t}function m(e){let n=document.querySelector("#portfolio div.container");console.log(e);const t=e.variables,l=e.portfolio?.projects,r=t??{gitHubPageURL:"",imageUrl:"",rawContentUrl:"",videoUrl:"",defaultVideoExtension:""},i=document.createElement("div");i.classList.add("row"),console.log(l);for(const e of l)i.append(u(r,e));console.log("Is container valid? ",null!=n),n.append(i)}window.onload=function(){let e,t=document.title;e=t.includes("Portfolio")?t.split(" ")[0]:t,console.log(e),m(n[e])};
//# sourceMappingURL=Unreal.284ed61f.js.map
