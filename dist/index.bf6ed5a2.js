document.querySelector("form").addEventListener("submit",(async function(e){e.preventDefault();const o=e.target,t=new FormData(o);console.log(t.get("subject")),fetch(o.action,{method:o.method,body:t,headers:{Accept:"application/json"}}).then((e=>{e.ok?(alert(`Thank you for your message, ${t.get("name")}.\n I will get back to you as soon as possible.`),o.reset()):e.json().then((e=>{if("errors"in e){const o=e.errors,t=Object.values(o).join("\n");alert(t)}else alert("An unknown error occurred.")}))})).catch((e=>alert("An unknown error occurred.")))}));
//# sourceMappingURL=index.bf6ed5a2.js.map
