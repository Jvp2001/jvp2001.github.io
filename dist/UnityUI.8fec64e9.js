const e={gitHubPageURL:"https://github.com/jvp2001",gitHubWebPagesUrl:"https://jvp2001.github.io/dist",rawContentUrl:"https://jvp2001.github.io/raw/main/src",imageUrl:"images",videoUrl:"videos",defaultVideoExtension:".mp4"},t={size:{width:200,height:200},fit:"contain"},n={Unreal:{intro:"",portfolio:{projects:[{name:" Multiplayer Menu UI",link:{type:"GitHub",value:"https://github.com/uniglos/assignment-1-Jvp2001"},element:{name:"https://github.com/Jvp2001/jvp2001.github.io/raw/main/src/videos/Unreal/MultiplayerMenuUI.mp4",showControls:!1,maximiseOnClick:!0,style:t}}]},variables:e},Unity:{intro:"",portfolio:{projects:[{name:"3D Maze Game",link:{type:"GitHub",value:"https://github.com/uniglos/ct4026-20202021-assignment-2-Jvp2001"},element:{name:"https://raw.githubusercontent.com/Jvp2001/jvp2001.github.io/main/src/images/Unity/Maze.gif",style:t}},{name:"3D level",link:{type:"GitHub",value:"https://github.com/uniglos/ct4026-20202021-assignment-1-Jvp2001"},element:{name:"https://raw.githubusercontent.com/Jvp2001/jvp2001.github.io/main/src/images/Unity/3DGameLevel.gif",style:t}},{name:"UI",link:{type:"SubPage",value:"UnityUI.html"},element:{name:"https://raw.githubusercontent.com/Jvp2001/jvp2001.github.io/main/src/images/Unity/UI.gif",style:t}},{name:"Crossy Road",link:{type:"GitHub",value:"#"},element:{name:"https://raw.githubusercontent.com/Jvp2001/jvp2001.github.io/main/src/images/Unity/CrossyRoad.gif",style:t}}]},variables:e},UnityUI:{intro:"",portfolio:{projects:[{name:"Button Animation",link:{type:"GitHub",value:"https://github.com/uniglos/RT-Golem-Project/tree/main/Assets/Scripts/UI"},element:{name:"https://github.com/Jvp2001/jvp2001.github.io/raw/main/src/videos/Unity/ButtonAnimation.mov",showControls:!1,maximiseOnClick:!0,autoplay:!0,style:t}},{name:"Slider Animation",link:{type:"GitHub",value:"https://github.com/uniglos/RT-Golem-Project/tree/main/Assets/Scripts/UI"},element:{name:"https://github.com/Jvp2001/jvp2001.github.io/raw/main/src/videos/Unity/SliderAnimation.mov",showControls:!1,maximiseOnClick:!0,autoplay:!0,style:t}}]},variables:{...e,defaultVideoExtension:".mov"}},OptimisationAlgorithms:{intro:"",portfolio:{projects:[{name:"Simulated Annealing",link:{type:"GitHub",value:""},element:{name:"https://github.com/Jvp2001/jvp2001.github.io/raw/main/src/videos/OptimisationAlgorithms/SimulatedAnnealing.mp4",showControls:!1,maximiseOnClick:!0,autoplay:!0,style:t}}]},variables:e}};var l={fullscreenEnabled:0,fullscreenElement:1,requestFullscreen:2,exitFullscreen:3,fullscreenchange:4,fullscreenerror:5,fullscreen:6},i=["webkitFullscreenEnabled","webkitFullscreenElement","webkitRequestFullscreen","webkitExitFullscreen","webkitfullscreenchange","webkitfullscreenerror","-webkit-full-screen"],s=["mozFullScreenEnabled","mozFullScreenElement","mozRequestFullScreen","mozCancelFullScreen","mozfullscreenchange","mozfullscreenerror","-moz-full-screen"],o=["msFullscreenEnabled","msFullscreenElement","msRequestFullscreen","msExitFullscreen","MSFullscreenChange","MSFullscreenError","-ms-fullscreen"],r="undefined"!=typeof window&&void 0!==window.document?window.document:{},a="fullscreenEnabled"in r&&Object.keys(l)||i[0]in r&&i||s[0]in r&&s||o[0]in r&&o||[],c={requestFullscreen:function(e){return e[a[l.requestFullscreen]]()},requestFullscreenFunction:function(e){return e[a[l.requestFullscreen]]},get exitFullscreen(){return r[a[l.exitFullscreen]].bind(r)},get fullscreenPseudoClass(){return":"+a[l.fullscreen]},addEventListener:function(e,t,n){return r.addEventListener(a[l[e]],t,n)},removeEventListener:function(e,t,n){return r.removeEventListener(a[l[e]],t,n)},get fullscreenEnabled(){return Boolean(r[a[l.fullscreenEnabled]])},set fullscreenEnabled(e){},get fullscreenElement(){return r[a[l.fullscreenElement]]},set fullscreenElement(e){},get onfullscreenchange(){return r[("on"+a[l.fullscreenchange]).toLowerCase()]},set onfullscreenchange(e){return r[("on"+a[l.fullscreenchange]).toLowerCase()]=e},get onfullscreenerror(){return r[("on"+a[l.fullscreenerror]).toLowerCase()]},set onfullscreenerror(e){return r[("on"+a[l.fullscreenerror]).toLowerCase()]=e}};function u(e,t){return t in e}function m(e,t){const n=document.createElement("div");n.classList.add("col-4","col-12-mobile");const l=document.createElement("article");l.classList.add("item"),l.title="Hover to enlarge";const i=document.createElement("a");switch(t.link.type){case"GitHub":case"SubPage":i.href=`${t.link.value}`.replace("//","/")}console.log(i.href);const s=function(e,t){if(u(t,"showControls")){const n=document.createElement("video");n.title="Click to maximise and play.",n.src=`${t.name}`,n.src.endsWith(e.defaultVideoExtension)||(n.src+=e.defaultVideoExtension);const l=t.style.size;return n.style.width=`${l.width}px`,n.style.height=`${l.height}px`,n.style.objectFit=t.style.fit,n.controls=t.showControls,t.maximiseOnClick&&n.addEventListener("click",(async e=>{c.requestFullscreen(n),await n.play()})),c.addEventListener("fullscreenElement",(async e=>{t.autoplay&&await n.play()})),c.onfullscreenchange=e=>n.pause(),n.onkeyup=e=>{"Escape"===e.key&&n.pause()},n.onended=e=>c.exitFullscreen(),n}if(u(t,"style")){const e=document.createElement("img");e.src=`${t.name}`;const n=t.style.size;return e.style.width=`${n.width}px`,e.style.height=`${n.height}px`,e.style.objectFit=t.style.fit,e}throw new Error("Unrecognised ProjectElement type")}(e,t.element),o=document.createElement("header"),r=document.createElement("h3");return r.textContent=t.name,console.log(t.name),o.append(i),i.append(r),l.append(s,o),n.append(l),n}function p(t){let n=document.querySelector("#portfolio div.container");console.log(t);const l=t.variables??e,i=t.portfolio?.projects,s=l??e,o=document.createElement("div");o.classList.add("row"),console.log(i);for(const e of i)o.append(m(s,e));console.log("Is container valid? ",null!=n),n.append(o)}window.onload=function(){let e,t=document.title;e=t.includes("Portfolio")?t.split(" ")[0]:t.replace(" ",""),console.log(e),p(n[e])};
//# sourceMappingURL=UnityUI.8fec64e9.js.map
