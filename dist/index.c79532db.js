function n(){window.history.length>1?(window.history.back(),this.title="Go Back"):(window.location.href="index.html",this.title="Go Home")}document.addEventListener("DOMContentLoaded",(function(){!function(){const n=document.querySelector("section#top");n.querySelector("header").innerHTML="  <strong><h2>Joshua V Petersen</h2></strong>\n                    <p> Programmer</p><br>\n                    <h3> SECOND YEAR UNDERGRADUATE<br>\n                        BSC (Hons) Computer Games Programming<br>\n                        University of Gloucestershire</h3>",n.querySelector("footer").innerHTML=' <footer>\n                <a href="#contact" class="button scrolly">Contact Me</a>\n            </footer>\n'}(),function(){const e=document.querySelector("nav#nav");e.innerHTML=' <ul>\n                <li class="two-nav-buttons"><a href="#top" id="top-link"><span class="icon solid fa-home">Intro</span></a></li>\n                <li><a href="#portfolio" id="portfolio-link"><span class="icon solid fa-th">Portfolio</span></a></li>\n                <li><a href="#about" id="about-link"><span class="icon solid fa-user">About Me</span></a></li>\n                <li><a href="#contact" id="contact-link"><span class="icon solid fa-envelope">Contact</span></a></li>\n                <li class="hidden"><a id="back"><span class="icon solid fa-arrow-left">Back</span></a></li>\n            </ul>';const o=e.querySelector("a#back");if(!document.URL.includes(".html"))return;const i=o.parentElement;i.style.cursor="pointer",i.classList.remove("hidden"),o.addEventListener("click",n)}(),function(){const n=document.querySelector("#about"),e=document.createElement("div");e.innerHTML=' <div class="about-me-contents">\n                <div class="languages">\n                    <h3>Languages</h3>\n                    <ul>\n                        <li><span>C++</span></li>\n                        <li><span>C#</span></li>\n                        <li><span>PYTHON</span></li>\n                        <li><span>JAVA</span></li>\n                    </ul>\n                    \n                </div>\n                <div class="engines">\n                    <h3>Engines</h3>\n                    <ul>\n                        <li><span>Unreal</span></li>\n                        <li><span>Unity</span></li>\n                        <li><span></span></li>\n                        <li><span></span></li>\n                    </ul>\n                </div>\n            </div>',n.append(e)}()}));
//# sourceMappingURL=index.c79532db.js.map