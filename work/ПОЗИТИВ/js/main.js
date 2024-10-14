(function () {

    // ================================ burger
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')
        const burgerNavBtnLink = e.target.closest('.nav__btn-link')

        if (!burgerIcon && !burgerNavLink && !burgerNavBtnLink) return
        if (document.documentElement.clientWidth > 1100) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    // ================================= accordion

    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            e.preventDefault()
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });

    // swiper testimonials

    new Swiper('.testimonials__swiper', {
        speed: 600,
        spaceBetween: 50,
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,

        pagination: {
            el: ".testimonials__nav-pagination",
        },

        navigation: {
            nextEl: '.testimonials__nav-next',
            prevEl: '.testimonials__nav-prev',
        },

        breakpoints: {
            600: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },

            836: {
                slidesPerView: 1.8,
                spaceBetween: 20
            }
        }

    });

    // swiper case

    new Swiper('.case__swiper', {
        speed: 600,
        spaceBetween: 20,
        slidesPerView: 1.5,
        centeredSlides: true,


        navigation: {
            nextEl: '.case__swiper-button-prev',
            prevEl: '.case__swiper-button-next',
        },

        
    });
})()