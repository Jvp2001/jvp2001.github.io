function n(){window.history.length>1?(window.history.back(),this.title="Go Back"):(window.location.href="index.html",this.title="Go Home")}function e(n){const e=document.createElement("div");e.classList.add("dark-blue-gradient"),n.parentElement?.replaceChild(e,n),e.appendChild(n)}document.getElementById("email-form").addEventListener("submit",(async function(n){n.preventDefault();const e=n.target,t=new FormData(e);console.log(t.get("subject")),fetch(e.action,{method:e.method,body:t,headers:{Accept:"application/json"}}).then((n=>{n.ok?(alert(`Thank you for your message, ${t.get("name")}.\n I will get back to you as soon as possible.`),e.reset()):n.json().then((n=>{if("errors"in n){const e=n.errors,t=Object.values(e).join("\n");alert(t)}else alert("An unknown error occurred.")}))})).catch((n=>alert("An unknown error occurred.")))})),document.addEventListener("DOMContentLoaded",(function(){!function(){const n=document.querySelector("section#top");n&&document.body.removeChild(n);const e=document.getElementById("main");e.innerHTML='  \n  <div class="dark-blue-gradient" \n  <section id="top" class="centre one dark cover">\n        <div class="container">\n\n            <header>\n                <strong><h2>Joshua V Petersen</h2></strong>\n                <p> Programmer</p><br>\n                <h3> SECOND YEAR UNDERGRADUATE<br>\n                    BSC (Hons) Computer Games Programming<br>\n                    University of Gloucestershire</h3>\n            </header>\n\n            <footer>\n                <a href="#contact" class="button scrolly">Contact Me</a>\n            </footer>\n\n        </div>\n    </section>\n    </div>\n'+e.innerHTML}(),function(){const e=document.querySelector("nav#nav");e.innerHTML=' <ul>\n                <li class="two-nav-buttons"><a href="#top" id="top-link"><span class="icon solid fa-home">Intro</span></a></li>\n                <li><a href="#portfolio" id="portfolio-link"><span class="icon solid fa-th">Portfolio</span></a></li>\n                <li><a href="#about" id="about-link"><span class="icon solid fa-user">About Me</span></a></li>\n                <li><a href="#contact" id="contact-link"><span class="icon solid fa-envelope">Contact</span></a></li>\n                <li class="hidden"><a id="back"><span class="icon solid fa-arrow-left">Back</span></a></li>\n            </ul>';const t=e.querySelector("a#back");if(!document.URL.includes(".html"))return;const o=t.parentElement;o.style.cursor="pointer",o.classList.remove("hidden"),t.addEventListener("click",n)}(),document.querySelector("#about").innerHTML='<div class="dark-blue-gradient">\n     <div class=" container">\n    \n                <header>\n                    <h2>About Me</h2>\n                </header>\n    \n                \x3c!--            <a href="#" class="image featured"><img src="images/pic08.jpg" alt=""/></a>--\x3e\n    \n                <div class="about-me-contents">\n                    <div class="languages">\n                        <h3>Languages</h3>\n                        <ul>\n                            <li><span>C++</span></li>\n                            <li><span>C#</span></li>\n                            <li><span>PYTHON</span></li>\n                            <li><span>JAVA</span></li>\n                        </ul>\n    \n                    </div>\n                    <div class="engines">\n                        <h3>Engines</h3>\n                        <ul>\n                            <li><span>Unreal</span></li>\n                            <li><span>Unity</span></li>\n                        </ul>\n                    </div>\n                </div>\n                <footer>\n                    <a href="#contact" class="button scrolly">Curriculum Vitae</a>\n                </footer>\n    \n            </div></div>',document.getElementById("main").innerHTML+=' \x3c!-- Contact --\x3e\n <div class="dark-blue-gradient">\n     <section id="contact" class="dark-blue-gradient four">\n         <div class="container">\n \n             <header>\n                 <h2>Contact</h2>\n             </header>\n \n             <p>If you would like to contact me, please fill in the form below and I will reply to you as soon as I can.</p>\n             \x3c!--            TODO: Fix contact form system--\x3e\n             <form id="email-form" method="post" action="https://formspree.io/f/xyyaowlw">\n                 <div class="row">\n                     <div class="col-6 col-12-mobile"><input type="text" name="name" placeholder="Name"/></div>\n                     <div class="col-6 col-12-mobile"><input type="text" name="email" placeholder="Email"/></div>\n                     <div class="col-12">\n                         <textarea name="message" placeholder="Message"></textarea>\n                     </div>\n                     <div class="col-12">\n                         <input type="submit" value="Send Message"/>\n                     </div>\n                 </div>\n             </form>\n \n         </div>\n     </section>\n     </div>',function(){const n=document.querySelector("#footer");n&&document.removeChild(n)}(),e(document.querySelector("#about")),function(n){const e=document.createElement("div");e.classList.add("dark-blue-gradient"),n.innerHTML=e.outerHTML+n.innerHTML}(document.querySelector("#portfolio")),e(document.querySelector("#top"))}));
//# sourceMappingURL=index.c5e4500e.js.map
