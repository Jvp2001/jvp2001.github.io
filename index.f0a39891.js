const imageReels=document.querySelectorAll(".image-reel");let currentImageIndex=0;function goBackImage(e){--currentImageIndex,e[currentImageIndex].classList.add("hidden"),currentImageIndex<0&&(currentImageIndex=e.length-1)}function goForwardImage(e){++currentImageIndex,e[currentImageIndex].classList.add("hidden"),currentImageIndex>=e.length&&(currentImageIndex=0)}imageReels.forEach((e=>{const r=e.querySelector("dialog"),n=r.querySelector(".previous-button"),t=r.querySelector(".next-button");e.addEventListener("click",r.showModal),n.addEventListener("click",(e=>goBackImage)),t.addEventListener("click",(e=>goForwardImage));const a=e.querySelectorAll("img");r.addEventListener("keypress",(e=>{"ArrowLeft"==e.key?(a[currentImageIndex].classList.add("hidden"),goBackImage(a)):"ArrowRight"==e.key&&goForwardImage(a)}));for(let e=1;e<a.length;e++)a[e].classList.add("hidden")}));
//# sourceMappingURL=index.f0a39891.js.map
