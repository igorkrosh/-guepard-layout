$(document).ready(function () {
    SetVerticalSlider()
    SetAreaItemsSlick()
    SetBtnPreviewImage()
    SetScrollBar()
    SetPlusesSlick()

    noUiSlider.create(document.getElementById('slider'), {
        start: [0, 100],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });
})

function SetVerticalSlider()
{
    $('.slide-item-wrapper').slick({
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        verticalSwiping: true,
        appendArrows: $('.slide-nav'),
        prevArrow: '<button id="prev" type="button" class="btn btn-prev"></button>',
        nextArrow: '<button id="next" type="button" class="btn btn-next"></button>',
        asNavFor: '.slide-description-wrapper',
        focusOnSelect: true,
        autoplay: true,
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
        draggable: false,
        asNavFor: '.slide-item-wrapper'
    })
}



function SetAreaItemsSlick()
{
    $('.preview-wrapper').slick({
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        verticalSwiping: true,
        adaptiveHeight: true,
        //infinite: false,
        arrows: false,
        autoplay: true,
        centerMode: true,
        //autoplaySpeed: 5000,
    }).on('afterChange', function() {
        //console.log($(this))
        let currentSlide = $(this).find('.preview-image.slick-center')
        let imageSrc = $(currentSlide).find('img').attr('src')
        
        let imageViewer = currentSlide.closest('.area-item').find('.image-wrapper .image img');
        //console.log(imageViewer)
        imageViewer.animate({
            opacity: 0
        }, 300, function() {
            imageViewer.attr('src', imageSrc)
        }).animate({
            opacity: 1
        }, 300)        
    })
    
    for (let index = 0; index < $('.preview-wrapper').length; index++)
    {
        $($('.preview-wrapper')[index]).slick('slickSetOption', 'autoplaySpeed', getRandomArbitrary(4, 7) * 1000)
    }
}

function SetBtnPreviewImage()
{
    $('.preview-image').on('click', function() {
        //$(this).closest('.area-item').find('.image-wrapper .image img').attr('src', $(this).find('img').attr('src'))
        $(this).closest('.preview-wrapper').slick('slickGoTo', $(this).attr('data-slick-index'))
        //$('.preview-wrapper').slick('slickGoTo', $(this).attr('data-slick-index'))
    })
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function SetScrollBar()
{
    jQuery('.scrollbar-outer').scrollbar({
        "autoScrollSize": false,
        //"scrollx": $('.external-scroll_x'),
        "scrolly": $('.external-scroll_y')
    });

    $('button[data-toggle="list"]').on('shown.bs.tab', function (e) {
        if ($(e.target).attr('href') == '#list-area-items')
        {
            $('.external-scroll_y').addClass('active')
        }
        else
        {
            $('.external-scroll_y').removeClass('active')
        }
    })
}

function SetPlusesSlick()
{
    $('.pluses-slick').slick({
        rows: 2,
        slidesToShow: 3,
        adaptiveHeight: true
    })
}