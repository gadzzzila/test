(function () {
    // ================================ burger
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }
    // ================================= modal
    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }

    }
    // ================================= tabs

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return

        console.log(tabControls);

        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tabs-conten--show')

        activeControl.classList.remove('tab-controls__link--active')
        activeContent.classList.remove('tabs-conten--show')

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tabs-conten--show')

    }




    // ================================= accordion

    // ВСЕ ЗАКРЫТО

    // const accordionLists = document.querySelectorAll('.accordion-list');

    // accordionLists.forEach(el => {

    //     el.addEventListener('click' , (e) => {

    //         const accordionControl = e.target.closest('.accordion-list__control');
    //         if (!accordionControl) return
    //         const accordionItem = accordionControl.parentElement;
    //         const accordionContent = accordionControl.nextElementSibling;

    //         accordionItem.classList.toggle('accordion-list__item--opened')

    //         if (accordionItem.classList.contains('accordion-list__item--opened')) {
    //             accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    //         } else {
    //             accordionContent.style.maxHeight = null;
    //         }

    //     });

    // });




    // ВСЕ ОТКРЫТО нежун .accordion-list__item--opened

    // const accordionLists = document.querySelectorAll('.accordion-list');

    // accordionLists.forEach(el => {

    //     document.querySelector('.accordion-list__item--opened .accordion-list__content').style.maxHeight = document.querySelector('.accordion-list__item--opened .accordion-list__content').scrollHeight + 'px';

    //     el.addEventListener('click' , (e) => {


    //         const accordionControl = e.target.closest('.accordion-list__control');
    //         if (!accordionControl) return
    //         const accordionItem = accordionControl.parentElement;
    //         const accordionContent = accordionControl.nextElementSibling;

    //         accordionItem.classList.toggle('accordion-list__item--opened')

    //         if (accordionItem.classList.contains('accordion-list__item--opened')) {
    //             accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    //         } else {
    //             accordionContent.style.maxHeight = null;
    //         }

    //     });

    // });


    // ОТКРЫВАЕТ ОДНО, ЗАКРЫВАТ

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

    // Cлайдер-галурея

    new Swiper('.gallery__swiper', {

        spaceBetween: 32,
        slidesPerView: 4,


        pagination: {
            el: '.gallery__pagination',
            type: 'fraction'
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {

            221: {
                slidesPerView: 1,
                spaceBetween: 20
            },

            281: {
                slidesPerView: 2,
                spaceBetween: 20
            },

            451: {
                slidesPerView: 3,
                spaceBetween: 20
            },

            681: {
                slidesPerView: 4,
            },

            1101: {
                slidesPerView: 4,
            }
        }

    });

    // Cлайдер-отзывы

    new Swiper('.testimonials__swiper', {

        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,
        loop: true,


        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },
        scrollbar: {
            el: '.testimonials__scrollbar',
        },

        breakpoints: {

            901: {
                slidesPerView: 1.5,
            },

            1201: {
                slidesPerView: 2.1,
            },
        }

    });

    // Маска для телефона 

    const telInput = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInput)

})()