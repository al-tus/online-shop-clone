function loadMobileVersion() {
    if (window.innerWidth <= 768) { // Пример по ширине
        // Перенаправить на мобильную версию, если она отдельная
        if (!window.location.pathname.includes('/mobile-version/')) {
            window.location.href = '/mobile-version' + window.location.pathname;
        }
    } else {
         // Перенаправить на десктопную версию
         if (window.location.pathname.includes('/mobile-version/')) {
            window.location.href = window.location.pathname.replace('/mobile-version', '');
        }
    }
}

// Вызов при загрузке страницы и изменении размера окна
window.onload = loadMobileVersion;
window.onresize = loadMobileVersion;

// Или использовать matchMedia для более чистого подхода
const mediaQuery = window.matchMedia('(max-width: 768px)');

function handleTabletChange(e) {
    if (e.matches) {
        // Экран меньше 768px
        console.log('Mobile version styles/content needed');
        // Загрузить мобильную версию JS или HTML
    } else {
        // Экран больше 768px
        console.log('Desktop version styles/content needed');
        // Загрузить десктопную версию JS или HTML
    }
}

mediaQuery.addListener(handleTabletChange); // Добавить слушатель
handleTabletChange(mediaQuery); // Вызвать один раз при загрузке

$('.js__catalogLine__mainLink').click(function(e){
    e.preventDefault();
    if($('.js__catalogLine__mainLink').hasClass('active')){
        $('.js__catalogLine__mainLink').removeClass('active')
        $('.js__catalogLine__panel').fadeOut(300)
        $('.js__catalogLine__shadow').fadeOut(300)
    }
    else{
        $('.js__catalogLine__mainLink').addClass('active')
        $('.js__catalogLine__panel').fadeIn(300)
        $('.js__catalogLine__shadow').fadeIn(300)
    }
})



$('.js__catalogLine__shadow').click(function(){
    $('.js__catalogLine__mainLink').removeClass('active')
    $('.js__catalogLine__panel').fadeOut(300)
    $('.js__catalogLine__shadow').fadeOut(300)
})
$(document).click(function(){
    $(".js__catalogLine__shadow").height($(document).height() - 112)
    let prodCount = $('.js__itemIDCount').val()
    $('.modal-count-prod').text(prodCount)
})


$(".js__mCM__item__panel").width($(".js__catalogLine__cover").width() - 300)
$(".js__catalogLine__panelEars").width($(window).width()).css("left", -1 * $(".js__catalogLine__cover").offset().left)

window.onresize = function() {
    var e = $(window).width();
    $(".js__mCM__item__panel").width($(".js__catalogLine__cover").width() - 300),
    $(".js__catalogLine__panelEars").width(e).css("left", -1 * $(".js__catalogLine__cover").offset().left),
    1600 < e ? (d = 6,
    c = 8,
    p = 2,
    m = 3,
    h = 30) : e <= 1600 && 1240 < e ? (d = 5,
    c = 7,
    p = 2,
    m = 3,
    h = 30) : e <= 1240 && 980 < e ? (d = 4,
    c = 6,
    p = 1,
    m = 2,
    h = 20) : e <= 980 && 920 < e ? (d = 3,
    c = 5,
    m = p = 1,
    h = 20) : e <= 920 && (d = 3,
    c = 4,
    m = p = 1,
    h = 20),
    $(".js__displayedItem__thumbsSlider").length && z != J && (z = 1240 < e ? 4 : 3,
    E.params.slidesPerView = z,
    J = z),
    $(".popup.active").length && popup_checkSizeAndPosition($(".popup.active").height(), $(".popup.active").attr("id"))
}



$("body").on("click", ".js__usualSpoilerLink", function(e) {
    var t = $(this);
    return t.hasClass("js__toggleElemStation") || t.toggleClass("active"),
    t.closest(".js__usualSpoilerBlock").find(".js__usualSpoilerItem:eq(0)").slideToggle(300, function() {
        $(this).closest(".popup").hasClass("active") && popup_checkSizeAndPosition($(".popup.active").height(), $(".popup.active").attr("id"))
    }),
    !1
})

var z = 4

var t, a, s, o, n, _, r, l, e = $(window).width(), d = 6, c = 8, p = 2, m = 3, h = 30;
1600 < e ? (d = 6,
c = 8,
p = 2,
m = 3,
h = 30) : e <= 1600 && 1240 < e ? (d = 5,
c = 7,
p = 2,
m = 3,
h = 30) : e <= 1240 && 980 < e ? (d = 4,
c = 6,
p = 1,
m = 2,
h = 20) : e <= 980 && 920 < e ? (d = 3,
c = 5,
m = p = 1,
h = 20) : e <= 920 && (d = 3,
c = 4,
m = p = 1,
h = 20)

$(".js__indexHat__main"),
    new Swiper(".js__indexHat__main .swiper-container",{
        initialSlide: 0,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 600,
        autoplay: {
            delay: 4e3
        },
        pagination: {
            el: ".js__indexHat__main .swiper-pagination",
            clickable: !0
        },
        on: {
            init: function() {
                $(".js__indexHat__main").addClass("swiperActive")
            },
        }
    })
    t = new Swiper(".js__indexStories .swiper-container",{
        initialSlide: 0,
        slidesPerView: c,
        spaceBetween: h,
        speed: 600,
        autoplay: {
            delay: 4e3
        },
        navigation: {
            nextEl: ".js__indexStories .swiper-button-next",
            prevEl: ".js__indexStories .swiper-button-prev"
        },
        on: {
            init: function() {
                $(".js__indexStories").addClass("swiperActive")
            },
            slideChange: function() {
                bannersCounter_eventer(this)
            }
        }
    }),
    a = new Swiper(".js__indexActions__main .swiper-container",{
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
    }),
    (new Swiper(".js__indexActions__offerOfTheDay .swiper-container",{
        initialSlide: 0,
        speed: 600,
        autoplay: {
            delay: 3e5
        },
        pagination: {
            el: ".js__indexActions__offerOfTheDay .swiper-pagination",
            clickable: !0
        },
        on: {
            init: function() {
                $(".js__indexActions__offerOfTheDay").addClass("swiperActive")
            }
        }
    }),
    new Swiper(".js__drawCats .swiper-container",{
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 600,
        autoplay: {
            delay: 4e3
        },
        navigation: {
            nextEl: ".js__drawCats .swiper-button-next",
            prevEl: ".js__drawCats .swiper-button-prev"
        },
        on: {
            init: function() {
                $(".js__drawCats").addClass("swiperActive")
            }
        }
    }),
    new Swiper(".js__tileReviews .swiper-container",{
        slidesPerView: m,
        spaceBetween: h,
        speed: 600,
        navigation: {
            nextEl: ".js__tileReviews .swiper-button-next",
            prevEl: ".js__tileReviews .swiper-button-prev"
        },
        on: {
            init: function() {
                $(".js__tileReviews").addClass("swiperActive")
            }
        }
    })),
    new Swiper(".js__tileBrands .swiper-container",{
        slidesPerView: c,
        spaceBetween: h,
        speed: 600,
        autoplay: {
            delay: 4e3
        },
        navigation: {
            nextEl: ".js__tileBrands .swiper-button-next",
            prevEl: ".js__tileBrands .swiper-button-prev"
        },
        on: {
            init: function() {
                $(".js__tileBrands").addClass("swiperActive")
            }
        }
    }),
    new Swiper(".js__tabs_hits .swiper-container",{
        initialSlide: 0,
        slidesPerView: d,
        spaceBetween: h,
        speed: 600,
        pagination: {
            el: ".js__tabs_hits .swiper-pagination",
            clickable: !0
        },
        navigation: {
            nextEl: ".js__tabs_hits .swiper-button-next",
            prevEl: ".js__tabs_hits .swiper-button-prev"
        },
        on: {
            init: function() {
                $(".js__tabs_hits").addClass("swiperActive")
            }
        }
    })

    var u = !0;

    $(".js_breadcrumbs__itemLink").click(function() {
        var e = $(this);
        return $(".js_breadcrumbs__itemLink.active").length ? $(".js_breadcrumbs__itemLink.active").parent().index() != e.parent().index() ? ($(".js_breadcrumbs__itemLink.active").removeClass("active").parent().find(".breadcrumbs__sublist").stop(!0, !0).hide(30),
        e.parent().find(".js_breadcrumbs__itemLink").addClass("active"),
        e.parent().find(".breadcrumbs__sublist").stop(!0, !0).show(30),
        u && $("body").on("click", "div", function() {
            u = !1,
            $(".js_breadcrumbs__itemLink.active").length && ($(".js_breadcrumbs__itemLink.active").parent().find(".breadcrumbs__sublist").stop(!0, !0).hide(30),
            $(".js_breadcrumbs__itemLink.active").removeClass("active"))
        }),
        !1) : void 0 : (e.parent().find(".js_breadcrumbs__itemLink").addClass("active"),
        e.parent().find(".breadcrumbs__sublist").stop(!0, !0).show(30),
        u && $("body").on("click", "div", function() {
            u = !1,
            $(".js_breadcrumbs__itemLink.active").length && ($(".js_breadcrumbs__itemLink.active").parent().find(".breadcrumbs__sublist").stop(!0, !0).hide(30),
            $(".js_breadcrumbs__itemLink.active").removeClass("active"))
        }),
        !1)
    })

    $(".breadcrumbs__close").click(function() {
        return $(".js_breadcrumbs__itemLink.active").removeClass("active").parent().find(".breadcrumbs__sublist").stop(!0, !0).hide(30),
        !1
    });

    var filterResult__sticker_Hided = !1, filterResult__sticker_Offset;
    function filterResult__sticker_HideData() {
        filterResult__sticker_Hided = !0,
        $(".filterResult__sticker__message").fadeOut(150),
        $(".filterResult__stickerClose").fadeOut(150),
        $("#filterResult__sticker_ID .proceed").fadeIn(150)
    }
    function filterResult__sticker_ShowData() {
        $(".filterResult__sticker__message").fadeIn(150),
        $(".filterResult__stickerClose").fadeIn(150),
        $("#filterResult__sticker_ID .proceed").fadeOut(150, function() {
            filterResult__sticker_Hided = !1
        })
    }
    
    $("#filterResult__sticker_ID").css({
        opacity: 0,
        display: "none"
    }).append('<span class="proceed"></span>'),
    $("#search_form_id").on("change", ".js__filterTrackEvent", function() {
        var e = $(this);
        filterResult__sticker_Hided || filterResult__sticker_HideData(),
        $("#filterResult__sticker_ID").css("display", "block"),
        filterResult__sticker_Offset = e.offset().top - $("#filterResult__sticker_ID").parent().offset().top - 15,
        $("#filterResult__sticker_ID").attr("data-stickedat", $(this).closest(".columnBlock__spoiledContent").find(".js__columnBlock__spoiledContent__name").attr("data-spoiledcontent")),
        $("#filterResult__sticker_ID").hasClass("afterReset") ? $("#filterResult__sticker_ID").removeClass("afterReset") : $("#filterResult__sticker_ID").hasClass("active") ? e.closest(".columnBlock__spoiledContent").attr("data-nameclick") ? (e.closest(".columnBlock__spoiledContent").hasClass("active") ? $("#filterResult__sticker_ID").animate({
            top: filterResult__sticker_Offset - 37
        }, 300) : $("#filterResult__sticker_ID").animate({
            top: filterResult__sticker_Offset - 32
        }, 300),
        e.closest(".columnBlock__spoiledContent").removeAttr("data-nameclick")) : $("#filterResult__sticker_ID").animate({
            top: filterResult__sticker_Offset
        }, 300) : $("#filterResult__sticker_ID").css("top", filterResult__sticker_Offset - 30).animate({
            opacity: 1,
            top: filterResult__sticker_Offset
        }, 300, function() {
            $(this).addClass("active")
        });
        e.attr("id");
        $.ajax({
            type: "POST",
            url: "/search_form_ajax_new.php",
            scriptCharset: "windows-1251",
            data: decodeURIComponent($("#search_form_id").serialize()),
            cache: !1,
            success: function(e, t, a) {
                for (var s = e.split("||"), i = 0, o = s[1].split(";"), i = 0; i < o.length; i++) {
                    element_data = o[i].split(",");
                    var n = $("#f" + element_data[0])
                      , _ = $("#l" + element_data[0]);
                    if (null != n && null != _) {
                        switch (element_data[1]) {
                        case "0":
                            n.attr("disabled", "disabled").button("refresh");
                            break;
                        case "1":
                        case "2":
                            n.attr("disabled", !1).button("refresh")
                        }
                        $("#n" + element_data[0]).html(element_data[2])
                    }
                }
                e = decodeURIComponent($("#search_form_id").serialize());
                $("#js__filterResultSticker_numsID").html(s[0]),
                $(".js__filterResult_link").attr("href", s[2] + "?" + e).attr("onClick", "document.forms['search_form'].submit();"),
                filterResult__sticker_Hided && filterResult__sticker_ShowData()
            },
            error: function(e, t, a) {
                $("span.counter").html("&nbsp;")
            },
            dataType: "text"
        })
    }),


    $(".js__columnBlock__spoiledContent__name").on("click", function(e) {
        var t = $(this);
        t.closest(".columnBlock__spoiledContent").find(".columnBlock__spoiledContent__paddedContent").toggleClass("active").slideToggle(300, function() {
            $(this).closest(".columnBlock__spoiledContent").toggleClass("active")
        });
        var a = t.closest("#search_form_id").find("input[name=" + $(this).attr("data-spoiledcontent") + "]")
          , s = a.val();
        a.val("1" === s ? "0" : "1");
        var i = !1;
        return t.closest(".columnBlock__spoiledContent").find(".js__filterTrackEvent").each(function() {
            if ($(this).prop("checked"))
                return !(i = !0)
        }),
        (i || $("#filterResult__sticker_ID").hasClass("active")) && t.closest(".columnBlock__spoiledContent").attr("data-nameclick", "true").find(".js__filterTrackEvent:eq(0)").change(),
        t.closest(".columnBlock__spoiledContent").find(".ot_customSelector").selectmenu("refresh"),
        !t.closest(".columnBlock__spoiledContent").hasClass("js__filterUpdated") && t.closest(".columnBlock__spoiledContent").hasClass("js__ajaxFilter") && filtersAJAX_Upload(t),
        !1
    })


    
    $(document).ready(function(){
            $(".mCustomScrollbar").mCustomScrollbar({
                axis: "y",
                mouseWheel: {
                    enable: !0,
                    preventDefault: !0,
                    normalizeDelta: true,
                    scrollAmount: 40
                },
                    
            });

        var basketC = $('#multicart__item tr').length

        $('.itemCount').text($('#multicart__item tr').length)

        if($('#multicart__item tr').length == 0){
            $('.itemCount').text('Корзина пуста')
        }
        
    })


    
           
            
    


    $('.js__spoiledLst__showLink').click(function(e){
        e.preventDefault();

        if($('.filterBlockcover').hasClass('viss')){
            $('.filterBlockcover').animate({
                scrollTop: 0
            }, 250); 
            $('.filterBlockcover').removeClass('viss')
            $('.spoiledLst__search').slideUp(250)
            $(this).text('Показать все')
        }
        else{
            $('.filterBlockcover').slideDown(250)
            $('.filterBlockcover').addClass('viss')
            $('.spoiledLst__search').slideDown()
            $(this).text('Скрыть')
        }
    })


function closeBtnShow(){
    var inputFilter = document.getElementById('filterInput')

    $(inputFilter).keydown(function(){
        if(inputFilter.value.length <= 1){
            $('.js__superFilter__clearSearch').css('display', 'none')
        }
        else{
            $('.js__superFilter__clearSearch').css('display', 'block')
        }   
    })
    
    $('.js__superFilter__clearSearch').click(function(){
        inputFilter.value = null
        $('.js__superFilter__clearSearch').css('display', 'none')
    })
}
closeBtnShow();

$('.js__filterTrackEvent').change(function(){
    1
})


// window.onload = function () {
//     var box=document.getElementsByClassName('indexGoods__item');
//     var more = $('#more-goods');
//     for (let i=10;i<box.length;i++) {
//         $(box[i]).addClass('hidden')
//     }
//
//    $(more).click(function(){
//         for (let i=3;i<box.length;i++){
//
//         }
//    })
//
//
//
// }



$(window).scroll(function (event) {
    var top = $(window).scrollTop();
     if(top >= 300){
        $('.shopping-basket').addClass('show')
        $('.totop-btn').addClass('midd')
        $('.totop-btn').removeClass('show')

     }
     else {
        $('.shopping-basket').removeClass('show')
        $('.totop-btn').removeClass('midd')
        $('.totop-btn').css('transform', 'translate(0, 200%)')
     }

     if(top > 2000){
        $('.totop-btn.midd').css('transform', 'translate(0, -111%)');
        $('.totop-btn.midd').css('opacity', '1');
     }

     else{
        $('.totop-btn.midd').css('opacity', '0');
        $('.totop-btn.midd').css('transform', 'translate(0, 0)')
    }
     
});

$('.totop-btn').on('click', function(e) {
    e.preventDefault(0)
    $('html').animate({scrollTop:0}, '500');
});  



$('.cp-icon-open-eye').click(function(){
    if($('.cp-icon-open-eye').hasClass('pass-show')){
        document.getElementById('ajax_login_popup_pass').type = 'password';
        $('.cp-icon-open-eye').removeClass('pass-show'),
        $('.cp-icon-open-eye').addClass('grey')
    }
    else(
        document.getElementById('ajax_login_popup_pass').type = 'text',
        $('.cp-icon-open-eye').removeClass('grey'),
        $('.cp-icon-open-eye').addClass('pass-show')
    )
})

function closeModal() {
    $('.modal').fadeOut(300)
    $('body').css('overflow', 'auto')
}


function modalOpen(e) {
    e.preventDefault();
    $('body').css('overflow', 'hidden')
    $('.modal').fadeIn(300)
    $('.modal').css("display", "flex")
    $('.modal-header .basket-trush-massage h3').text('Подтверждение очистки корзины')
    $('.modal-window').css('width','100%')
    $('#basket-trush-massage').css('display', 'block')
    $('#login-massage').css('display', 'none')
    $('.goods-to-basket').css('display', 'block')
    $('.goods-to-basket').parent().parent().find('.modal-header h3').text('Добавить товар в корзину')
}

function modalOpeLogin(e){
    modalOpen(e)
    $('.modal-header h3').text('Войти на сайт') 
    $('.modal-window').css('width','480px')
    $('#basket-trush-massage').css('display', 'none')
    $('#login-massage').css('display', 'block')
    $('.goods-to-basket').css('display', 'none')
}




function sliderOpenClose(){
    // e.preventDefault()
    if($('.slider').hasClass('open')){
        $('.slider').removeClass('open')
        $('.slider').slideUp()
    }
    else{
        $('.slider').addClass('open')
        $('.slider').slideDown()
    }
}


$(document).ready(function(){

    $(".js__productPage__displayedItem__images__thumbs").length && ($(".js__productPage__displayedItem__images__thumbs .js__displayedItem__images__thumbLink:eq(0)").addClass("active"))

    $('.basketPositionNumber').text('')
    

    document.querySelectorAll('#multicart__item .basketPositionNumber' ).forEach((e, i) => {
        // e.innerHTML = `${ i++ > 8 ? i : "0" + i }. ${e.innerHTML}`
        $(e).text(i + 1)
    })

    $('.productPage__displayedItem__images__thumbs .swiper-slide:first-child a').click()

  

    $('.ui-tabs-anchor').click(function(e){
        e.preventDefault()
        $('.ui-tabs-anchor').removeClass('active')
        $('.tabs__item').removeClass('active')
        
        
        $(this).addClass('active')

        $($(this).attr('href')).addClass('active')
        
    })

    $('.ui-tabs-anchor:first').click();

    $('.modal-name-prod').text($('.prod'))

    $('.prodPrice').text($('.productPage__card').attr('data-price') + ' TJS')
    $('.prod-name').text($('.productPage__card').attr('data-name'))

    $(".addedToCart_itemInfo__image img").attr('src', $('.productPage__card').attr('data-img'))


    productCount = $('.js__itemIDCount').val()
    

    $('.numsToBuy__minus').click(function () {
        // e.preventDefault()
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        if($($input).val() >= 2){
            // var $input = $(this).parent().find('input');
            $($input).removeClass('minCount')
        }else if($($input).val() <= 2){
            var $input = $(this).parent().find('input');
            $($input).addClass('minCount')
        }
        $input.val(count);
        $input.change();
        
            
        return false;
    });
    $('.numsToBuy__plus').click(function () {
        var $input = $(this).parent().find('input');
        if($($input).val() <= 998){
            $($input).removeClass('minCount')
            $input.val(parseInt($input.val()) + 1);
            $input.change()
        }
        return false;
    });
});

$("body").on("click", ".js__linkAsLabel", function() {
    return $("#" + $(this).attr("data-for")).click(),
    !1
})

B = 5,
    E = new Swiper(".js__displayedItem__thumbsSlider .swiper-container",{
        direction: "vertical",
        slidesPerView: "auto",
        spaceBetween: B,
        navigation: {
            nextEl: ".js__displayedItem__thumbsSlider .swiper-button-next",
            prevEl: ".js__displayedItem__thumbsSlider .swiper-button-prev"
        },
        on: {
            init: function() {
                $(".js__displayedItem__thumbsSlider").addClass("swiperActive")
            }
        }
    }),
    new Swiper(".js__tabs_best_prices .swiper-container",{
        initialSlide: 0,
        slidesPerView: d,
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
            init: function() {
                $(".js__tabs_best_prices").addClass("swiperActive")
            }
        }
    })


    

    $("body").on("click", ".js__displayedItem__images__thumbLink", function() {
        var e = $(this);
        return $("#js__popupCatalogItem_bigImage__ID").attr("src", $(this).attr("href")).attr("title", $(this).attr("title")),
        $("#js__displayedItem__images__bigLink__ID").attr("href", $(this).attr("data-fullimageurl")).attr("data-initnum", $(this).parent().index()),
        $(".js__displayedItem__images__thumbLink.active").removeClass("active"),
        e.addClass("active"),
        !1
    })

    



    const buttons = document.querySelectorAll('.catalog__displayedItem__button button');
    
   


    function count() {
        let counter = 0;
        return function() {
          return counter+=1;
        };
    }

    for (let button of buttons) {
        const counter = count(); // создаем отдельный инстанс функции счетчика для каждой кнопки
        button.addEventListener('click', function() {
        //   this.textContent = counter(); 

          counter1 =  counter()


          if(counter1 >= 2){
            window.location.replace("basket.html/basket.html");
            $('.modal').css('display', 'none')
          }
        
        });
    }


    

    $('.catalog__displayedItem__button button').click(function(){

        $(this).addClass('onBasket')
        $(this).text('Оформить')
          
    })

    $(document).click(function (){
        let bagHeightFix = $('.height-takeer').height()

        $('.catalogLine__panel, .mCM__item__panel').height(bagHeightFix + 20)

    })



