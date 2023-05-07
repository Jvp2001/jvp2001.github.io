const e={gitHubPageURL:"https://github.com/jvp2001",gitHubWebPagesUrl:"https://jvp2001.github.io/dist",rawContentUrl:"https://jvp2001.github.io/raw/main/src",imageUrl:"images",videoUrl:"videos",defaultVideoExtension:".mp4"},t={size:{width:200,height:200},fit:"contain"},n={Unreal:{intro:"",portfolio:{projects:[{name:" Multiplayer Menu UI",link:{type:"GitHub",value:"https://github.com/uniglos/assignment-1-Jvp2001"},element:{name:"https://github.com/Jvp2001/jvp2001.github.io/raw/main/src/videos/Unreal/MultiplayerMenuUI.mp4",showControls:!1,maximiseOnClick:!0,style:t}}]},variables:e},Unity:{intro:"",portfolio:{projects:[{name:"Maze Game",link:{type:"GitHub",value:"https://github.com/uniglos/ct4026-20202021-assignment-2-Jvp2001"},element:{name:"https://raw.githubusercontent.com/Jvp2001/jvp2001.github.io/main/src/images/Unity/Maze.gif",style:t}},{name:"3D level",link:{type:"GitHub",value:"https://github.com/uniglos/ct4026-20202021-assignment-1-Jvp2001"},element:{name:"https://raw.githubusercontent.com/Jvp2001/jvp2001.github.io/main/src/images/Unity/3DGameLevel.gif",style:t}},{name:"UI",link:{type:"SubPage",value:"https://jvp2001.github.io/src/UnityUI.html"},element:{name:"https://raw.githubusercontent.com/Jvp2001/jvp2001.github.io/main/src/images/Unity/Button.png",style:t}}]},variables:e},UnityUI:{intro:"",portfolio:{projects:[{name:"Button Animation",link:{type:"GitHub",value:"https://github.com/Jvp2001/jvp2001.github.io/raw/main/src/videos/Unity/ButtonAnimation.mov"},element:{name:"ButtonAnimation.mov",showControls:!1,maximiseOnClick:!0,autoplay:!0,style:t}},{name:"Slider Animation",link:{type:"GitHub",value:"Slider"},element:{name:"SliderAnimation.mov",showControls:!1,maximiseOnClick:!0,autoplay:!0,style:t}}]},variables:e}};var l={fullscreenEnabled:0,fullscreenElement:1,requestFullscreen:2,exitFullscreen:3,fullscreenchange:4,fullscreenerror:5,fullscreen:6},r=["webkitFullscreenEnabled","webkitFullscreenElement","webkitRequestFullscreen","webkitExitFullscreen","webkitfullscreenchange","webkitfullscreenerror","-webkit-full-screen"],s=["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror","-moz-full-screen"],i=["msFullscreenEnabled","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError","-ms-fullscreen"],o="undefined"!=typeof window&&void 0!==window.document?window.document:{},c="fullscreenEnabled"in o&&Object.keys(l)||r[0]in o&&r||s[0]in o&&s||i[0]in o&&i||[],u={requestFullscreen:function(e){return e[c[l.requestFullscreen]]()},requestFullscreenFunction:function(e){return e[c[l.requestFullscreen]]},get exitFullscreen(){return o[c[l.exitFullscreen]].bind(o)},get fullscreenPseudoClass(){return":"+c[l.fullscreen]},addEventListener:function(e,t,n){return o.addEventListener(c[l[e]],t,n)},removeEventListener:function(e,t,n){return o.removeEventListener(c[l[e]],t,n)},get fullscreenEnabled(){return Boolean(o[c[l.fullscreenEnabled]])},set fullscreenEnabled(e){},get fullscreenElement(){return o[c[l.fullscreenElement]]},set fullscreenElement(e){},get onfullscreenchange(){return o[("on"+c[l.fullscreenchange]).toLowerCase()]},set onfullscreenchange(e){return o[("on"+c[l.fullscreenchange]).toLowerCase()]=e},get onfullscreenerror(){return o[("on"+c[l.fullscreenerror]).toLowerCase()]},set onfullscreenerror(e){return o[("on"+c[l.fullscreenerror]).toLowerCase()]=e}};function a(e,t){return t in e}function m(e,t){const n=document.createElement("div");n.classList.add("col-4","col-12-mobile");const l=document.createElement("article");l.classList.add("item"),l.title="Hover to enlarge";const r=document.createElement("a");switch(t.link.type){case"GitHub":case"SubPage":r.href=`${t.link.value}`.replace("//","/")}console.log(r.href);const s=function(e,t){if(a(t,"showControls")){const n=document.createElement("video");n.title="Click to maximise and play.",n.src=`${t.name}`,n.src.endsWith(e.defaultVideoExtension)||(n.src+=e.defaultVideoExtension);const l=t.style.size;return n.style.width=`${l.width}px`,n.style.height=`${l.height}px`,n.style.objectFit=t.style.fit,n.controls=t.showControls,t.maximiseOnClick&&n.addEventListener("click",(async e=>{u.requestFullscreen(n),await n.play()})),u.addEventListener("fullscreenElement",(async e=>{t.autoplay&&await n.play()})),u.onfullscreenchange=e=>n.pause(),n.onkeyup=e=>{"Escape"===e.key&&n.pause()},n.onended=e=>u.exitFullscreen(),n}if(a(t,"style")){const e=document.createElement("img");e.src=`${t.name}`;const n=t.style.size;return e.style.width=`${n.width}px`,e.style.height=`${n.height}px`,e.style.objectFit=t.style.fit,e}throw new Error("Unrecognised ProjectElement type")}(e,t.element),i=document.createElement("header"),o=document.createElement("h3");return o.textContent=t.name,console.log(t.name),i.append(r),r.append(o),l.append(s,i),n.append(l),n}function d(e){let t=document.querySelector("#portfolio div.container");console.log(e);const n=e.variables,l=e.portfolio?.projects,r=n??{gitHubPageURL:"",imageUrl:"",rawContentUrl:"",gitHubWebPagesUrl:"",videoUrl:"",defaultVideoExtension:""},s=document.createElement("div");s.classList.add("row"),console.log(l);for(const e of l)s.append(m(r,e));console.log("Is container valid? ",null!=t),t.append(s)}window.onload=function(){let e,t=document.title;e=t.includes("Portfolio")?t.split(" ")[0]:t,console.log(e),d(n[e])};
//# sourceMappingURL=UnityUI.9fad5c27.js.map
