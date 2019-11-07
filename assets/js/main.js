$(function () {

    // Stickey NavBar On Scroll and Go up Button On Scroll

    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 400) {
            $('.navbar').addClass('nav-on-scroll');
            $('.go-up').fadeIn(400);
        } else {
            $('.navbar').removeClass('nav-on-scroll');
            $('.go-up').fadeOut(400);
        }
    })

    $('.go-up a').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
    })

    let sliderHeight = () => {
        $('.slider-wrapper').css({
            'height': $(window).innerHeight() - ($('nav').innerHeight() + $('.header-top').innerHeight())

        })
    }
    sliderHeight();

    $(window).on('resize', function () {
        sliderHeight();
    })





    // Filter Items Section

    $('.filter-list-item').click(function (e) {
        e.preventDefault();
        let value = $(this).attr('data-filter');
        if (value === 'all') {
            $('.product').show(300);
        } else {
            $('.product').not(`.${value}`).hide(300);
            $('.product').filter(`.${value}`).show(300);
        }
    });


})




// offerBOx at the Top-Header

let qqq = document.querySelectorAll('.offer-box li');
let currenttt = 1;

function play() {

    setTimeout(() => {
        removeitem();
    }, 2000);

    qqq[currenttt - 1].classList.add('active');
    if (currenttt == qqq.length) {
        currenttt = 1

    } else {
        currenttt++;
    }
}

function removeitem() {
    qqq.forEach(item => {
        item.classList.remove('active');
    })
}


setInterval(() => {
    play()
}, 3500);

