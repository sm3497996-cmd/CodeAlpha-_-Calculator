let images = document.querySelectorAll(".box img");
let lightbox = document.querySelector(".lightbox");
let lightboxImg = document.querySelector(".lightbox-img");
let closeBtn = document.querySelector(".close");

images.forEach(function (image) {

    image.addEventListener("click", function () {

        lightbox.style.display = "flex";
        lightboxImg.src = image.src;

    });

});

closeBtn.addEventListener("click", function () {

    lightbox.style.display = "none";

});