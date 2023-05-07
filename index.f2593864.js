const e=document.querySelectorAll("a.goto");console.log(e.length),e.forEach((e=>{e.addEventListener("click",(o=>{o.preventDefault();const n=new URLSearchParams(e.href).get("engine");n&&(console.log(n),window.location.assign(`./${n}.html`))}))}));
//# sourceMappingURL=index.f2593864.js.map
