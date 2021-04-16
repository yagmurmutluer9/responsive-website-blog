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

//swiper library initialization

// swiper libray initialization
new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    autoplay: {
        delay: 3000
    },
    // responsive brakpoints
    breakpoints: {
        '@0': {
            slidesPerView: 2
        },
        // 888px
        '@1.00': {
            slidesPerView: 3
        },
        // 1110px
        '@1.25': {
            slidesPerView: 4
        },
        // 1330px
        '@1.50': {
            slidesPerView: 5
        }
    }
})