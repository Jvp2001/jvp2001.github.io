const e={Unity:{pages:[{name:"Maze Game",link:{type:"GitHub",value:"MazeGame"},image:{name:"Unity/Maze.gif",style:{size:"normal",height:250}}},{name:"3D level",link:{type:"GitHub",value:"3DLevel"},image:{name:"Unity/3DGameLevel.gif",style:{size:"normal",height:250,fit:"contain"}}}],variables:{gitHubPageURL:"https://github.com/jvp2001/",imageUrl:"https://raw.githubusercontent.com/Jvp2001/jvp2001.github.io/main/src/images/"}}};let t;function n(e,t){const n=document.createElement("div");n.classList.add("col-4","col-12-mobile");const a=document.createElement("article");a.classList.add("item");const i=document.createElement("a");i.href=`${e.gitHubPageURL}/${t.link.value}`;const o=document.createElement("img");o.src=`${e.imageUrl}/${t.image.name}`,o.style.width="auto",o.style.height=`${t.image.style.height}px`,o.style.objectFit=t.image.style.fit??"cover";const l=document.createElement("header"),c=document.createElement("h3");return c.textContent=t.name,l.append(c),i.append(o,l),a.append(i),n.append(a),n}document.addEventListener("DOMContentLoaded",(function(){t=document.querySelector("section#portfolio div.container"),console.log("Is container valid? ",null!=t),function(e){console.log(e);const{variables:a,pages:i}=e,o=a??{gitHubPageURL:"",imageUrl:""},l=document.createElement("div");l.classList.add("row"),console.log(i);for(const e of i)l.append(n(o,e));console.log("Is container valid? ",null!=t),t.append(l)}(e.Unity)}));
//# sourceMappingURL=Unity.9c2a11fa.js.map
