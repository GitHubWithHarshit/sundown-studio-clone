const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// let elem = document.querySelector(".item");
// let show = elem.getAttribute("data-item-image");

let elemC = document.querySelector("#elem-container");
let fixedImg = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter", function () {
    fixedImg.style.display = "block";
});

elemC.addEventListener("mouseleave", function () {
    fixedImg.style.display = "none";
})

let items = document.querySelectorAll(".item");
items.forEach(function (e) {
    e.addEventListener("mouseenter", function() {
        let image = e.getAttribute("data-item-image");
        fixedImg.style.backgroundImage = `url(${image})`;
    })
});


// fixedImg.addEventListener("mouseenter" , () =>{
    
// })