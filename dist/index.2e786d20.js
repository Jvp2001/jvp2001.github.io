function n(){window.history.length>1?window.history.back():window.location.href="index.html"}document.addEventListener("DOMContentLoaded",(function(){!function(){const n=document.querySelector("section#top");n.querySelector("header").innerHTML="  <strong><h2>Joshua V Petersen</h2></strong>\n                    <p> Programmer</p><br>\n                    <h3> SECOND YEAR UNDERGRADUATE<br>\n                        BSC (Hons) Computer Games Programming<br>\n                        University of Gloucestershire</h3>",n.querySelector("footer").innerHTML=' <footer>\n                <a href="#contact" class="button scrolly">Contact Me</a>\n            </footer>\n'}(),function(){const o=document.querySelector("nav#nav");o.innerHTML=' <ul>\n                <li class="two-nav-buttons"><a href="#top" id="top-link"><span class="icon solid fa-home">Intro</span></a></li>\n                <li><a href="#portfolio" id="portfolio-link"><span class="icon solid fa-th">Portfolio</span></a></li>\n                <li><a href="#about" id="about-link"><span class="icon solid fa-user">About Me</span></a></li>\n                <li><a href="#contact" id="contact-link"><span class="icon solid fa-envelope">Contact</span></a></li>\n                <li class="hidden"\n                ><a id="back"><span class="icon solid fa-arrow-left">Back</span></a></li>\n            </ul>';const t=o.querySelector("a#back"),e=["index.html",""].includes(document.URL.split("/")[0]);alert(`window.location.pathname: ${window.location.pathname}`),alert(`backButtonCondition: ${e}`),document.URL.includes("index.html")||document.URL.includes("")||(t.classList.remove("hidden"),t.addEventListener("click",n))}()}));
//# sourceMappingURL=index.2e786d20.js.map
