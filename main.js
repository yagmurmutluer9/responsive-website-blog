let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");


toggle.addEventListener("click", (event) => {

    collapse.forEach(col => {
        col.classList.toggle("collapse-toggle");
    });
});


// with masonry
setTimeout(function() {

    new Masonry('#posts .grid', {
        itemSelector: '.grid-item',
        gutter: 20
    });
}, 1000);