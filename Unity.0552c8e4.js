document.querySelectorAll("a.image.fit").forEach((e=>{e.addEventListener("click",(n=>{n.preventDefault();const t=new URLSearchParams(e.href).get("engine");t&&(console.log(t),window.location.assign(`${t}.html`))}))}));
//# sourceMappingURL=Unity.0552c8e4.js.map
