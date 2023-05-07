document.querySelectorAll("div.row a").forEach((e=>{e.addEventListener("click",(n=>{n.preventDefault();const o=new URLSearchParams(e.href).get("engine");o&&(console.log(o),window.location.assign(`${o}.html`))}))}));
//# sourceMappingURL=Unity.990305de.js.map
