const e={Unity:{pages:[{name:"Maze Game",link:{type:"GitHub",repoName:""},image:"../images/Unity/Maze.gif"}],variables:{gitHubPageURL:"https://github.com/jvp2001/"}}},t=document.querySelector("section#portfolio.container"),n=document.querySelector("template#project-item");function o(e,t){const o=n.content.cloneNode(!0),a=o.querySelector("h3");o.querySelector("img").src=t.image;const i=o.querySelector("a");switch(a.textContent=t.name,t.link.type){case"GitHub":i.href=`${e.gitHubPageURL}/${t.link.repoName}`,i.textContent="GitHub";break;case"SubPage":let n=t.link.pageName;i.href=`${n.endsWith(".html")?n.replace(".html",""):n}.html`,i.textContent="Page"}return o}window.onload=n=>function(e){console.log(e);const{variables:n,pages:a}=e,i=n??{gitHubPageURL:""},c=document.createElement("div");c.classList.add("row");for(const e of a)c.append(o(i,e));t.append(c)}(e.Unity);
//# sourceMappingURL=Unity.acfd6bac.js.map
