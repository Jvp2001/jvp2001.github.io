const e={Unity:{pages:[{name:"Maze Game",link:{type:"GitHub",repoName:""},image:"Unity/Maze.gif"}],variables:{gitHubPageURL:"https://github.com/jvp2001/",imageUrl:"https://github.com/Jvp2001/jvp2001.github.io/tree/main/src/images/"}}};let t;function n(e,...t){const n=document.createElement(e);return n.classList.add(...t),n}function o(e,t){const o=n("div","col-4","col-12-mobile"),a=n("article","","item"),i=n("a","image fit");i.href=`${e.gitHubPageURL}/${t.link.value}`;const c=n("img");c.src=`${e.imageUrl}/${t.image}`;const l=n("header"),s=n("h3");return s.textContent=t.name,l.append(s),i.append(c,l),a.append(i),o.append(a),o}document.addEventListener("DOMContentLoaded",(function(){t=document.querySelector("section#portfolio div.container"),console.log("Is container valid? ",null!=t),function(e){console.log(e);const{variables:n,pages:a}=e,i=n??{gitHubPageURL:"",imageUrl:""},c=document.createElement("div");c.classList.add("row"),console.log(a);for(const e of a)c.append(o(i,e));console.log("Is container valid? ",null!=t),t.append(c)}(e.Unity)}));
//# sourceMappingURL=Unity.17659295.js.map
