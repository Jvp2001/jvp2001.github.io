function n(){window.history.length>1?(window.history.back(),this.title="Go Back"):(window.location.href="index.html",this.title="Go Home")}document.addEventListener("DOMContentLoaded",(function(){!function(){const n=document.querySelector("section#top");n.querySelector("header").innerHTML="  <strong><h2>Joshua V Petersen</h2></strong>\n                    <p> Programmer</p><br>\n                    <h3> SECOND YEAR UNDERGRADUATE<br>\n                        BSC (Hons) Computer Games Programming<br>\n                        University of Gloucestershire</h3>",n.querySelector("footer").innerHTML=' <footer>\n                <a href="#contact" class="button scrolly">Contact Me</a>\n            </footer>\n'}(),function(){const e=document.querySelector("nav#nav");e.innerHTML=' <ul>\n                <li class="two-nav-buttons"><a href="#top" id="top-link"><span class="icon solid fa-home">Intro</span></a></li>\n                <li><a href="#portfolio" id="portfolio-link"><span class="icon solid fa-th">Portfolio</span></a></li>\n                <li><a href="#about" id="about-link"><span class="icon solid fa-user">About Me</span></a></li>\n                <li><a href="#contact" id="contact-link"><span class="icon solid fa-envelope">Contact</span></a></li>\n                <li class="hidden"><a id="back"><span class="icon solid fa-arrow-left">Back</span></a></li>\n            </ul>';const a=e.querySelector("a#back");if(!document.URL.includes(".html"))return;const o=a.parentElement;o.style.cursor="pointer",o.classList.remove("hidden"),a.addEventListener("click",n)}(),document.querySelector("#about").innerHTML=' <div class="container">\n\n            <header>\n                <h2>About Me</h2>\n            </header>\n\n            \x3c!--            <a href="#" class="image featured"><img src="images/pic08.jpg" alt=""/></a>--\x3e\n\n            <div class="about-me-contents">\n                <div class="languages">\n                    <h3>Languages</h3>\n                    <ul>\n                        <li><span>C++</span></li>\n                        <li><span>C#</span></li>\n                        <li><span>PYTHON</span></li>\n                        <li><span>JAVA</span></li>\n                    </ul>\n\n                </div>\n                <div class="engines">\n                    <h3>Engines</h3>\n                    <ul>\n                        <li><span>Unreal</span></li>\n                        <li><span>Unity</span></li>\n                    </ul>\n                </div>\n            </div>\n            <footer>\n                <a href="#contact" class="button scrolly">Curriculum Vitae</a>\n            </footer>\n\n        </div>',document.querySelector("#main").innerHTML+=' \x3c!-- Contact --\x3e\n    <section id="contact" class="four">\n        <div class="container">\n\n            <header>\n                <h2>Contact</h2>\n            </header>\n\n            <p>If you would like to contact me, please fill in the form below and I will reply to you as soon as I can.</p>\n            \x3c!--            TODO: Fix contact form system--\x3e\n            <form id="email-form" method="post" action="#">\n                <div class="row">\n                    <div class="col-6 col-12-mobile"><input type="text" name="name" placeholder="Name"/></div>\n                    <div class="col-6 col-12-mobile"><input type="text" name="email" placeholder="Email"/></div>\n                    <div class="col-12">\n                        <textarea name="message" placeholder="Message"></textarea>\n                    </div>\n                    <div class="col-12">\n                        <input type="submit" value="Send Message"/>\n                    </div>\n                </div>\n            </form>\n\n        </div>\n    </section>'}));
//# sourceMappingURL=UnityUI.11ec3285.js.map
