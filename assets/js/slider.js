// Pure JS slider 

let sliderImages = document.querySelectorAll('.slider img');
let slidesCount = sliderImages.length;
let currentSlide = 1;
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

trigger();

setInterval(() => {
    nextSlide();
}, 3500);

function nextSlide() {
    if (!nextButton.classList.contains('disabled')) {
        currentSlide++;
        trigger();
    } else {
        currentSlide = 1;
        trigger();
    }
}

function prevSlide() {
    if (!prevButton.classList.contains('disabled')) {
        currentSlide--;
        trigger();
    } else {
        currentSlide = slidesCount;
        trigger();
    }
}


function trigger() {
    removeAllActive();

    sliderImages[currentSlide - 1].classList.add('active');
    if (currentSlide == 1) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }

    if (currentSlide == slidesCount) {
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }
}


function removeAllActive() {
    sliderImages.forEach(img => {
        img.classList.remove('active');
    });
}