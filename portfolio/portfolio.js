<button id="btn">View Projects</button>

let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {

    alert("Welcome to my projects section!");

});

let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {

    document.querySelector("#projects")
        .scrollIntoView({
            behavior: "smooth"
        });

});
