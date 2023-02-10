$(function(){

var mixer = mixitup('.directions__list');

$('.directions-filter-btn').on('click', function () {
    $('.directions-filter-btn').removeClass('directions-filter-btn--active')
    $(this).addClass('directions-filter-btn--active')
})

$('.team__slider').slick({

    arrows : false,
   slidesToShow:4,
   infinite:true,
   draggable:false,
   waitForAnimate:false,
   
})
$('.team__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickPrev')
})
$('.team__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.team__slider').slick('slickNext')
})
})

