(function () {
    // ================================ burger
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 480) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
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


        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tabs-conten--show')

        activeControl.classList.remove('tab-controls__link--active')
        activeContent.classList.remove('tabs-conten--show')

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tabs-conten--show')

    }

    new Swiper('.swiper', {
        slidesPerView: 2.1,
        spaceBetween: 20,

        breakpoints: {
            400: {
                slidesPerView: 2.5,
                spaceBetween: 20
            },
        }

    });


})()

