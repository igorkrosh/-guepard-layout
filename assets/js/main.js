$(document).ready(function () {
    $('.slide-item-wrapper').slick({
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        verticalSwiping: true,
        appendArrows: $('.slide-nav'),
        prevArrow: '<button id="prev" type="button" class="btn btn-prev"></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-next"></button>',
        asNavFor: '.slide-description-wrapper',
        //centerMode: true,
        //infinite: true,
        //variableWidth: true
    })
    $('.slide-description-wrapper').slick({
        slidesToShow: 1,
        vertical: true,
        verticalSwiping: true,
        slidesToScroll: 1,
        arrows: false,
        
        asNavFor: '.slide-item-wrapper'
    })
})