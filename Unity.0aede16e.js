const e={Unreal:{pages:[{name:" Multiplayer Menu UI",link:{type:"GitHub",value:"MultiplayerUI"},element:{name:"Multiplayer Menu UI",showControls:!1,maximiseOnClick:!0,style:{size:{width:200,height:200},fit:"contain"}}}]},Unity:{pages:[{name:"Maze Game",link:{type:"GitHub",value:"MazeGame"},element:{name:"Unity/Maze.gif",style:{size:{width:200,height:200},fit:"contain"}}},{name:"3D level",link:{type:"GitHub",value:"3DLevel"},element:{name:"Unity/3DGameLevel.gif",style:{size:{width:200,height:200},fit:"contain"}}}],variables:{gitHubPageURL:"https://github.com/jvp2001/",imageUrl:"https://raw.githubusercontent.com/Jvp2001/jvp2001.github.io/main/src/images/"}}};let t;function n(e,t){return t in e}function i(e,t){const i=document.createElement("div");i.classList.add("col-4","col-12-mobile");const l=document.createElement("article");l.classList.add("item"),l.title="Hover to enlarge";const o=document.createElement("a");o.href=`${e.gitHubPageURL}/${t.link.value}`;const a=function(e,t){if(n(t,"showControls")){const n=document.createElement("video");n.src=`${e.imageUrl}/${t.name}`;const i=t.style.size;return n.style.width=`${i.width}px`,n.style.height=`${i.height}px`,n.style.objectFit=t.style.fit,n.controls=t.showControls,t.maximiseOnClick&&n.addEventListener("click",(e=>n.requestFullscreen())),n}if(n(t,"style")){const n=document.createElement("img");n.src=`${e.imageUrl}/${t.name}`;const i=t.style.size;return n.style.width=`${i.width}px`,n.style.height=`${i.height}px`,n.style.objectFit=t.style.fit,n}throw new Error("Unrecognised ProjectElement type")}(e,t.element),s=document.createElement("header"),c=document.createElement("h3");return c.textContent=t.name,s.append(o),o.append(c),l.append(a,s),i.append(l),i}document.addEventListener("DOMContentLoaded",(function(){const n=document.getElementById("title").textContent.split(" ")[0];t=document.querySelector("section#portfolio div.container"),function(e){console.log(e);const{variables:n,pages:l}=e,o=n??{gitHubPageURL:"",imageUrl:""},a=document.createElement("div");a.classList.add("row"),console.log(l);for(const e of l)a.append(i(o,e));console.log("Is container valid? ",null!=t),t.append(a)}(e[n])}));
//# sourceMappingURL=Unity.0aede16e.js.map
