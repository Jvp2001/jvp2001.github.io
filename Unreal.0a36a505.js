const e={gitHubPageURL:"https://github.com/jvp2001",gitHubWebPagesUrl:"https://jvp2001.github.io/dist",rawContentUrl:"https://jvp2001.github.io/raw/main/src",imageUrl:"images",videoUrl:"videos",defaultVideoExtension:".mp4"},t={Unreal:{intro:"",portfolio:{projects:[{name:" Multiplayer Menu UI",link:{type:"GitHub",value:"https://github.com/Jvp2001/jvp2001.github.io/raw/main/src/videos/Unreal/MultiplayerMenuUI.mp4"},element:{name:"https://github.com/Jvp2001/jvp2001.github.io/raw/main/src/videos/Unreal/MultiplayerMenuUI.mp4",showControls:!1,maximiseOnClick:!0,style:{size:{width:200,height:200},fit:"contain"}}}]},variables:e},Unity:{intro:"",portfolio:{projects:[{name:"Maze Game",link:{type:"GitHub",value:"MazeGame"},element:{name:"https://raw.githubusercontent.com/Jvp2001/jvp2001.github.io/main/src/images/Unity/Maze.gif",style:{size:{width:200,height:200},fit:"contain"}}},{name:"3D level",link:{type:"GitHub",value:"3DLevel"},element:{name:"https://raw.githubusercontent.com/Jvp2001/jvp2001.github.io/main/src/images/Unity/3DGameLevel.png",style:{size:{width:200,height:200},fit:"contain"}}},{name:"UI",link:{type:"SubPage",value:"UnityUI.html"},element:{name:"https://raw.githubusercontent.com/Jvp2001/jvp2001.github.io/main/src/images/Unity/Button.png",style:{size:{width:200,height:200},fit:"contain"}}}]},variables:e},UnityUI:{intro:"",portfolio:{projects:[{name:"Button Animation",link:{type:"GitHub",value:"https://github.com/Jvp2001/jvp2001.github.io/raw/main/src/videos/Unity/ButtonAnimation.mov"},element:{name:"ButtonAnimation.mov",showControls:!1,maximiseOnClick:!0,autoplay:!0,style:{size:{width:200,height:200},fit:"contain"}}},{name:"Slider Animation",link:{type:"GitHub",value:"Slider"},element:{name:"SliderAnimation.mov",showControls:!1,maximiseOnClick:!0,autoplay:!0,style:{size:{width:200,height:200},fit:"contain"}}}]},variables:e}};var n={fullscreenEnabled:0,fullscreenElement:1,requestFullscreen:2,exitFullscreen:3,fullscreenchange:4,fullscreenerror:5,fullscreen:6},l=["webkitFullscreenEnabled","webkitFullscreenElement","webkitRequestFullscreen","webkitExitFullscreen","webkitfullscreenchange","webkitfullscreenerror","-webkit-full-screen"],i=["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror","-moz-full-screen"],r=["msFullscreenEnabled","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError","-ms-fullscreen"],o="undefined"!=typeof window&&void 0!==window.document?window.document:{},s="fullscreenEnabled"in o&&Object.keys(n)||l[0]in o&&l||i[0]in o&&i||r[0]in o&&r||[],c={requestFullscreen:function(e){return e[s[n.requestFullscreen]]()},requestFullscreenFunction:function(e){return e[s[n.requestFullscreen]]},get exitFullscreen(){return o[s[n.exitFullscreen]].bind(o)},get fullscreenPseudoClass(){return":"+s[n.fullscreen]},addEventListener:function(e,t,l){return o.addEventListener(s[n[e]],t,l)},removeEventListener:function(e,t,l){return o.removeEventListener(s[n[e]],t,l)},get fullscreenEnabled(){return Boolean(o[s[n.fullscreenEnabled]])},set fullscreenEnabled(e){},get fullscreenElement(){return o[s[n.fullscreenElement]]},set fullscreenElement(e){},get onfullscreenchange(){return o[("on"+s[n.fullscreenchange]).toLowerCase()]},set onfullscreenchange(e){return o[("on"+s[n.fullscreenchange]).toLowerCase()]=e},get onfullscreenerror(){return o[("on"+s[n.fullscreenerror]).toLowerCase()]},set onfullscreenerror(e){return o[("on"+s[n.fullscreenerror]).toLowerCase()]=e}};function a(e,t){return t in e}function u(e,t){const n=document.createElement("div");n.classList.add("col-4","col-12-mobile");const l=document.createElement("article");l.classList.add("item"),l.title="Hover to enlarge";const i=document.createElement("a");switch(alert(`Link: ${t.link.value}`),t.link.type){case"GitHub":case"SubPage":i.href=`${t.link.value}`.replace("//","/")}console.log(i.href);const r=function(e,t){if(a(t,"showControls")){const n=document.createElement("video");n.title="Click to maximise and play.",n.src=`${t.name}`,console.log(n.src),n.src.endsWith(e.defaultVideoExtension)||(n.src+=e.defaultVideoExtension);const l=t.style.size;return n.style.width=`${l.width}px`,n.style.height=`${l.height}px`,n.style.objectFit=t.style.fit,n.controls=t.showControls,t.maximiseOnClick&&n.addEventListener("click",(async e=>{c.requestFullscreen(n),await n.play()})),n.onkeyup=e=>{"Escape"===e.key&&n.pause()},n.onended=e=>c.exitFullscreen(),n}if(a(t,"style")){const e=document.createElement("img");e.src=`${t.name}`,console.log(e.src);const n=t.style.size;return e.style.width=`${n.width}px`,e.style.height=`${n.height}px`,e.style.objectFit=t.style.fit,e}throw new Error("Unrecognised ProjectElement type")}(e,t.element),o=document.createElement("header"),s=document.createElement("h3");return s.textContent=t.name,console.log(t.name),o.append(i),i.append(s),l.append(r,o),n.append(l),n}function m(e){let t=document.querySelector("#portfolio div.container");console.log(e);const n=e.variables,l=e.portfolio?.projects,i=n??{gitHubPageURL:"",imageUrl:"",rawContentUrl:"",gitHubWebPagesUrl:"",videoUrl:"",defaultVideoExtension:""},r=document.createElement("div");r.classList.add("row"),console.log(l);for(const e of l)r.append(u(i,e));console.log("Is container valid? ",null!=t),t.append(r)}window.onload=function(){let e,n=document.title;e=n.includes("Portfolio")?n.split(" ")[0]:n,console.log(e),m(t[e])};
//# sourceMappingURL=Unreal.0a36a505.js.map
