$(".js_mCM_toggler").on("click", function (e) {
    var t = $(this);
    return t.closest(".mCM__item").hasClass("active") ? t.parent().find(".subCategoryMenu").slideUp(300, function () {
        $(this).closest(".mCM__item").removeClass("active")
    }) : ($(".mainMenu .mCM__item.active").length && $(".mainMenu .mCM__item.active .mCM__item__link").parent().find(".subCategoryMenu").slideUp(300, function () {
        $(this).closest(".mCM__item").removeClass("active")
    }),
        t.closest(".mCM__item").addClass("active"),
        t.parent().find(".subCategoryMenu").slideDown(300)),
        !1
}),
    $(".js__mCM_link").on("click", function (e) {
        if (!$(this).hasClass("js__mayGo")) {
            var t = $(this);


            return t.addClass("js__mayGo").parent().find(".subCategoryMenu").slideDown(300, function () {
                $(this).closest(".mCM__item").addClass("active")
            }),
                $(this).closest(".mCM__item").hasClass("menuUpdated"),
                !1
        }
    })

$(".js__mCM_linkClose").on("click", function (e) {
    var t = $(this);
    return t.parent().hasClass("js__mayGo") ? t.attr("title", "Развернуть").parent().removeClass("js__mayGo").parent().find(".subCategoryMenu").slideUp(300, function () {
        $(this).closest(".mCM__item").removeClass("active")
    }) : (t.attr("title", "Свернуть").parent().addClass("js__mayGo").parent().find(".subCategoryMenu").slideDown(300, function () {
        $(this).closest(".mCM__item").addClass("active")
    }),
    t.closest(".mCM__item").hasClass("menuUpdated") || catmenuAJAX_Upload($(this).parent())),
        !1
})

$(document).keydown(function (e) {
    return e.ctrlKey && 75 === e.keyCode ? ($(".devBlocks").fadeIn(400),
    $(".js__debugInfo").hasClass("parsed") || debugInfoInit(),
        $(".js__debugInfo").hasClass("active") ? $.cookie("active_debuginfo", 0, {
            expires: 7,
            path: "/",
            domain: ".onlinetrade.ru"
        }) : $.cookie("active_debuginfo", 1, {
            expires: 7,
            path: "/",
            domain: ".onlinetrade.ru"
        }),
        $(".js__debugInfo").toggleClass("active").fadeToggle(400),
        !1) : 27 === e.keyCode ? ($(".js__debugInfo").hasClass("active") && ($.cookie("active_debuginfo", 0, {
        expires: 7,
        path: "/",
        domain: ".onlinetrade.ru"
    }),
        $(".js__debugInfo").removeClass("active").fadeOut(400)),
    $(".js__catalogLine__mainLink").hasClass("active") && catalogLine__close(),
    $(".js__header__menuCover").hasClass("active") && menu_close(),
        !1) : void 0
}),

    $(".js__catalogLine__mainLink").click(function () {
        return $(this).toggleClass("active"),
        $(".js__catalogLine__actionLink").hasClass("active") && ($(".js__catalogLine__actionLink").removeClass("active"),
            $(".js__catalogLine__actionPanel").slideUp(300)),
            $(".js__catalogLine__panel").slideToggle(300, function () {
            }),
            !1
    })

new Swiper(".js__indexHat__main .swiper-container", {
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 400,
    autoplay: {
        delay: 4e5
    },
    pagination: {
        el: ".js__indexHat__main .swiper-pagination",
        clickable: !0
    },
    on: {
        init: function () {
            $(".js__indexHat__main").addClass("swiperActive")
        },
    }
})
p = 1

h = 30

a = new Swiper(".js__indexActions__main .swiper-container", {
    initialSlide: 0,
    slidesPerView: p,
    spaceBetween: h,
    speed: 600,
    autoplay: {
        delay: 4e3
    },
    pagination: {
        el: ".js__indexActions__main .swiper-pagination",
        clickable: !0
    },
})

new Swiper(".js__indexActions__offerOfTheDay .swiper-container", {
    initialSlide: 0,
    slidesPerView: 2,
    spaceBetween: 15,
    speed: 600,
    autoplay: {
        delay: 3e7
    },
    pagination: {
        el: ".js__indexActions__offerOfTheDay .swiper-pagination",
        clickable: !0
    },
    on: {
        init: function () {
            $(".js__indexActions__offerOfTheDay").addClass("swiperActive")
        }
    }
})

new Swiper(".js__tabs_best_prices .swiper-container", {
    initialSlide: 0,
    slidesPerView: 2,
    spaceBetween: h,
    speed: 600,
    pagination: {
        el: ".js__tabs_best_prices .swiper-pagination",
        clickable: !0
    },
    navigation: {
        nextEl: ".js__tabs_best_prices .swiper-button-next",
        prevEl: ".js__tabs_best_prices .swiper-button-prev"
    },
    on: {
        init: function () {
            $(".js__tabs_best_prices").addClass("swiperActive")
        }
    }
})
new Swiper(".js__tabs_hits .swiper-container", {
    initialSlide: 0,
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 400,
    pagination: {
        el: ".js__tabs_hits .swiper-pagination",
        clickable: !0
    },
    on: {
        init: function () {
            $(".js__tabs_hits").addClass("swiperActive")
        }
    }
})
new Swiper(".js__drawCats .swiper-container", {
    slidesPerView: 1,
    spaceBetween: 1,
    loop: !0,
    speed: 400,
    autoplay: {
        delay: 2e5
    },
    pagination: {
        el: ".js__drawCats .swiper-pagination",
        clickable: !0
    },
    on: {
        init: function () {
            $(".js__drawCats").addClass("swiperActive")
        }
    }
})

new Swiper(".js__tileBrands .swiper-container", {
    initialSlide: 0,
    slidesPerView: 2.5,
    spaceBetween: 15,
    speed: 400,
    pagination: {
        el: ".js__tileBrands .swiper-pagination",
        clickable: !0
    },
    on: {
        init: function () {
            $(".js__tileBrands").addClass("swiperActive")
        }
    }
})
$(".js__sliderNews").length && new Swiper(".js__sliderNews .swiper-container", {
    slidesPerView: 1.5,
    spaceBetween: 15,
    loop: !0,
    speed: 400,
    pagination: {
        el: ".js__sliderNews .swiper-pagination",
        clickable: !0
    },
    on: {
        init: function () {
            $(".js__sliderNews").addClass("swiperActive")
        }
    }
})

new Swiper(".js__drawPopularCats .swiper-container", {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: !0,
    speed: 400,
    autoplay: {
        delay: 2e5
    },
    pagination: {
        el: ".js__drawPopularCats .swiper-pagination",
        clickable: !0
    },
    on: {
        init: function () {
            $(".js__drawPopularCats").addClass("swiperActive")
        }
    }
});

new Swiper(".productPage-displayedItem-imagesSlider .swiper-container", {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: !0,
    speed: 400,
    zoom: !0,
    pagination: {
        el: ".productPage-displayedItem-imagesSlider .swiper-pagination",
        clickable: !0
    },
    on: {
        init: function () {
            3 < $(".js__displayedItem__imagesSlider .productPage__displayedItem__imagesSlider__item").length && $(".js__displayedItem__imagesSlider").addClass("swiperActive")
        }
    }
});


$(window).scroll(function (event) {
    var top = $(window).scrollTop();
    if (top >= 2000) {
        $('.totop-btn').addClass('show')

    } else {
        $('.totop-btn').removeClass('show')
    }

});
$('.totop-btn').on('click', function (e) {
    e.preventDefault(0)
    $('html').animate({scrollTop: 0}, '500');
});
$(document).ready(() => {

    //tabs open scripts

    let bnTabsBtn = $('.js-tabsManage')

    // click event

    bnTabsBtn.click(function (e) {
        e.preventDefault()

        //close, remove class
        if ($(this).parent().parent().hasClass('isOpened')) {
            $(this).parent().parent().find(".catalogList-spoiledItem-content,").slideUp(function () {
                $(this).parent().removeClass('isOpened')
            });
        }
        //open, add class
        else {
            $(this).parent().parent().addClass('isOpened')
            $(this).parent().parent().find(".catalogList-spoiledItem-content").slideDown();
        }
    });


    let menuLinks = $('.js__headline__menuLink')
    let menuItems = $('.js__headline__bar')

    //...

    // bar click logic

    menuLinks.each(function (i) {

        $(this).on('click', function (e) {
            e.preventDefault()
            $(menuLinks).removeClass('active')

            if (menuItems.eq(i).is(':visible')) {
                menuItems.eq(i).slideUp(function () {
                    $('body, html, #scrollcontent_cover__ID').removeAttr('style');
                });
            } else {
                $(menuItems).slideUp(300);
                $('body, html').css('overflow', 'hidden',)
                $('#scrollcontent_cover__ID').css('filter', 'brightness(0.5)')
                menuItems.eq(i).slideDown();
                $(this).addClass('active')
            }
        })
    })

    $('#scrollcontent_cover__ID').on('click', function () {
        $(menuItems).slideUp(function () {
            $('body, #scrollcontent_cover__ID').removeAttr('style');
            $('html').css('overflow', 'auto')
        });
        menuLinks.removeClass('active')
    })


    // goodsCount

    //default count
    let countInput = $('.js-itemIDCount')
    $(countInput).val(1);

    let errorWindow = $('.error-window')

    //button click logic
    $('.countBtn').on('click', function (e) {
        e.preventDefault();


        //find input
        let countInput = $(this).siblings('.js-itemIDCount');
        let currentVal = parseInt(countInput.val());

        //click minus count
        if ($(this).hasClass('js-numsToBuy-minus') && currentVal > 1) {
            countInput.val(currentVal - 1);
            countInput.removeAttr('style');

        }
        //click plus count
        else if ($(this).hasClass('js-numsToBuy-plus') && currentVal < 999) {
            countInput.val(currentVal + 1);
            countInput.removeAttr('style');
        }
        //exceeded cont
        else {
            //error window(beta)
            if (!$(errorWindow).hasClass('active')) {
                $(errorWindow).fadeIn()
                $(errorWindow).addClass('active')

                setTimeout(function () {
                    $(errorWindow).fadeOut()
                    $(errorWindow).removeClass('active')
                }, 1500);
            }

            if (currentVal === 999) {

                $(errorWindow).find('span').text('Максимальное кол-во товара')
            } else {
                $(errorWindow).find('span').text('Минимальное кол-во товара')
            }

            countInput.css({
                'color': 'red',
                'font-weight': '700'
            });
        }
    });




    $(countInput).on('change', function () {
        let val = $(this).val();
        if (!/^[1-9][0-9]*$/.test(val)) {
            //if the value is not a number or is 0, set it to 1
            $(this).val(1);
            $(this).removeAttr('style');
        }
    });
    $(countInput).on('input', function () {
        //reset text color
        $(this).removeAttr('style');

        let val = $(this).val();

        if (!/^[1-9][0-9]*$/.test(val)) {
            countInput.css({
                'color': 'red',
                'font-weight': '700'
            });
        }

    });

    let toMoreBlock = $('.js__usualMinHeightItem');
    let toMoreBtn = $('.js__usualMinHeightLink');
    let pFilterBtn = $('.modi-presetFilter')

    let pFilterBtnHeight = pFilterBtn.outerHeight(true)


    toMoreBlock.each(function(index) {
        let toMoreBlockHeight = $(this).height();

        if(toMoreBlockHeight > pFilterBtnHeight * 2){
            $(this).css('height', '65px');
            toMoreBtn.eq(index).show();
        }
        else{
            toMoreBtn.eq(index).hide();
        }
    });

    toMoreBtn.on('click', function (e){
        let toMoreBlock = $(this).siblings();
        e.preventDefault();

        let isOpen = toMoreBlock.data('isOpen');
        let showText = $(this).data('showtext');

        if (!isOpen) {
            let autoHeight = toMoreBlock.css('height', 'auto').height();
            toMoreBlock.height('65px');

            toMoreBlock.animate({height: autoHeight}, 200);
            toMoreBlock.data('isOpen', true);

            $(this).text('Свенуть');
        } else {
            toMoreBlock.animate({height: '65px'}, 200);
            toMoreBlock.data('isOpen', false);

            $(this).text(showText);
        }
    });

    pFilterBtn.on('click', function (e){
        e.preventDefault()

        let presetFilters = $(this).closest('.presetFilters');
        presetFilters.find('.modi-presetFilter').addClass('loading');
        pFilterBtn.css('pointer-events', 'none');

        if($(this).hasClass('selected')){
            $(this).removeClass('selected x-icon')
        }
        else{
            pFilterBtn.removeClass('selected x-icon')

            $(this).prependTo($(this).parent());
            $(this).addClass('selected x-icon')
        }

        setTimeout(function() {
            presetFilters.find('.modi-presetFilter').removeClass('loading');
            pFilterBtn.css('pointer-events', 'auto');

        }, 1000);
    })


    $('.line-filter-halfCell a').on('click', function (e){
        e.preventDefault()
        $('.filterResult-sticker').fadeOut();
        $(this).parent().parent().find('.catalogList-spoiledItem').slideToggle(function (){
            $(this).parent().toggleClass('isOpened')
        });
    })


    $('.columnBlock-spoiledContent-paddedContent').slideUp()

    $('.columnBlock-spoiledContent-name').on('click', function (){
        $('.filterResult-sticker').hide(); // hidden result windows
        $(this).parent().find('.columnBlock-spoiledContent-paddedContent').slideToggle(function (){})
    })



    $('.columnBlock-spoiledContent').each(function() {
        if ($(this).hasClass('noSpoiler')) {
            $(this).find('.columnBlock-spoiledContent-paddedContent').slideDown();
        }
    });


    // filter checkboxes

    let checkboxInput = $('.ot-customCheckbox input') // filter checkbox

    let stickerResult = $('.filterResult-sticker') // result windows

    let countSticker =  $('#js-filterResultSticker-numsID')

    let firstCheck = true;

    // interaction logic
    checkboxInput.on('change', function() {

            $(this).prop('disabled', true); // clickable

            //actions on a checkbox classes
            $(this).parent().find('.checkbox').addClass('animate');
            $(this).parent().find('.checkbox').removeClass('checked');



            // when the animation plays
            setTimeout(() => {
                $(this).prop('disabled', false); // no clickable
                $(this).parent().find('.checkbox').removeClass('animate');
                if ($(this).is(':checked')){
                    $(this).parent().find('.checkbox').addClass('checked');
                }

            }, 700);


            // result-sticker walk function
            if($(this).is(":checked")) {


                let quantity = $(this).parent().find('.firstLetterCap').attr('data-quantity-on-site');

                if (!firstCheck) { // if it's not the first check
                    $('#js-filterResultSticker-numsID').addClass('blur'); // add blur class
                    setTimeout(() => {
                        countSticker.text(quantity); // update quantity
                        countSticker.removeClass('blur'); // remove blur class
                    }, 300); // delay to match the transition duration
                } else { // if it's the first check
                    $('#js-filterResultSticker-numsID').text(quantity); // update quantity without animation
                    firstCheck = false; // update the flag
                }
                let position = $(this).parent().find('.checkbox').position() // take pos
                $('.filterResult-sticker').css('top', position.top - 10) // give pos

                $(stickerResult).fadeIn(); // show
            } else {
                $('.filterResult-sticker').fadeOut(); // hidden
                firstCheck = true;
            }
        });


    let uniqueId = localStorage.getItem('uniqueId') || 1;
    let nameId = localStorage.getItem('nameId') || 1;

    // give identifier number
    $('.ot-customCheckbox').each(function() {
        $(this).find('li').each(function(index) {
            $(this).find('input').attr('id', uniqueId); // input id
            $(this).find('label').attr('for', uniqueId); // label for

            uniqueId++; // add a number
        });
    });

    $('.randomPoints').each(function() {
        $(this).find('.multicart-orderoption-itemLine').each(function() {
            $(this).find('input').attr('id', uniqueId); // input id
            $(this).find('input').attr('name', nameId); // input name
            $(this).find('label').attr('for', uniqueId); // label for

            uniqueId++; // add a number
        });

        nameId++; // Increment name identifier after each .js-productpage-deliveryPoint
    });

    


    // itemCount given
    $('.ot-customCheckbox li, .js-HasCount').each(function() {
        let quantity = $(this).find('.firstLetterCap, .giveCount').attr('data-quantity-on-site');
        $(this).find('.itemCount').text(quantity);
    });

    //show more btn

    let multicartItem = $('.multicart-item');
    let numMulticartItem = multicartItem.length; // Getting number of elements on a page
    let showMoreBtn = $('#showMoreBtn'); // Show more button
    let currentIndex = 15; // Maximum number of elements

    showMoreBtn.hide(); //hide button


    if (numMulticartItem > 15){//limiting the display of an element
        multicartItem.hide();// hide unnecessary elements
        multicartItem.slice(0, 15).show();
        $(showMoreBtn).fadeIn();
    }

    showMoreBtn.click(function(e) {
        e.preventDefault();
        currentIndex += 10;
        multicartItem.slice(currentIndex - 10, currentIndex).fadeIn();

        if (currentIndex >= numMulticartItem) {
            $(showMoreBtn).fadeOut();
        }
    });

    // all SpoilersBlock scripts

    $('.js-usualSpoilerLink').on('click', function (e){
        e.preventDefault();

        $(this).parent().find('.js-usualSpoilerItem').slideToggle(300);
    })

    $('.js-openLoginPanel').on('click', function (e){
        e.preventDefault()
        e.stopPropagation()

        $('a[data-barid="headline__barLogin__ID"]').click()
    })



    //sliders

    new Swiper(".indexGoods__items .swiper-container", {
        initialSlide: 0,
        slidesPerView: 2,
        spaceBetween: 0,
        speed: 400,
        pagination: {
            el: ".indexGoods__items .swiper-pagination",
            clickable: !0
        }
    })
});
