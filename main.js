let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");


toggle.addEventListener("click", (event) => {

    collapse.forEach(col => {
        col.classList.toggle("collapse-toggle");
    });
});


// with masonry

new Masonry('#posts .grid', {
    itemSelector: '.grid-item',
    gutter: 20
});