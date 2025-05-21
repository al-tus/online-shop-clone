/**
 * @copyright 2023compass (https://onlinetrade.ru/). All Rights Reserved.
 * @author C00Lib1N aka Romanov Artem (think.mayhap@gmail.com)
 * @version 5.1.39
 */
var isMobile = !1, body, sitedevmode, userid, workerid, itemcode, userpages;
(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (isMobile = !0),
isMobile && (body = document.getElementsByTagName("body")[0],
body.classList.remove("hoverEnabled")),
void 0 === sitedevmode && (sitedevmode = !1),
void 0 === userid && (userid = !1),
void 0 === workerid && (workerid = !1),
void 0 === itemcode && (itemcode = !1),
void 0 === userpages && (userpages = !1);
var popup_errormessage__caption = $(".js__popup_message__caption").html()
  , popup_errormessage__message = $(".js__popup_message__message").html();
function popupShadow_open() {
    $(".popup__shadow").fadeIn(300).addClass("active")
}
function popupShadow_close() {
    $("body").delay(200).removeClass("js__overlayShadow"),
    $(".popup__shadow").delay(200).fadeOut(400).removeClass("active")
}
function popup_close() {
    $(".popup.active").each(function() {
        $(this).stop(!0, !0).animate({
            opacity: 0
        }, 400, function() {
            $(this).removeClass("popup__error"),
            $(this).removeClass("popup__success"),
            $(this).removeClass("popup__warning"),
            $(this).removeClass("active"),
            popup_setMessage("", "", "")
        })
    })
}
function popup_checkSizeAndPosition(e, t) {
    var a, s = $(window).width(), i = $("body").width(), o = $(window).height();
    $("body").height();
    s < i && (o = o * i / s),
    s = i,
    $("#" + t).hasClass("popup__width_js") && (a = $("#" + t).find(".popup__caption").height(),
    isMobile ? ($("#" + t).width(.94 * s),
    $("#" + t).css("margin-left", -.47 * s + "px")) : ($("#" + t).width(.8 * s),
    $("#" + t).css("margin-left", -.4 * s + "px")),
    $("#" + t).find(".slider_itemPhotos").length && (i = 270,
    $("#" + t).find(".slider_itemPhotos").hasClass("slider_itemPhotos__onePhoto") && (i = 210),
    $("#" + t).find(".slider_itemPhotos__image").css("max-height", o - i - a),
    $("#" + t + " .slider_itemPhotos .swiperManage__link").css("top", $(".popup.active .swiper-container").height() / -2))),
    $("#" + t).hasClass("popup__width_content") && ($("#" + t).width(.8 * s),
    $("#" + t).css("margin-left", -.4 * s + "px")),
    (e = t ? $("#" + t).height() : e) + 20 < o ? ($("body").addClass("js__overlayShadow"),
    $(".popup__shadow").css({
        position: "fixed",
        height: $(document).height()
    }),
    $("#" + t).css("position", "fixed"),
    $("#" + t).css("top", o / 2 - e / 2 - 10)) : ($("body").removeClass("js__overlayShadow"),
    $(".popup__shadow").css({
        position: "absolute",
        height: $(document).height()
    }),
    $("#" + t).css("position", "absolute"),
    e + 20 + $(window).scrollTop() < $(document).height() ? $("#" + t).animate({
        top: 20 + $(window).scrollTop()
    }, 300) : $("#" + t).animate({
        top: $(document).height() - e
    }, 300))
}
function popup_setMessage(e, t, a) {
    switch (a) {
    case "error":
        sitedevmode || void 0 !== workerid ? ("" == e && (e = popup_errormessage__caption),
        "" == t && (t = popup_errormessage__message)) : (e = popup_errormessage__caption,
        t = popup_errormessage__message),
        $("#popup_message").addClass("popup__error");
        break;
    case "success":
        $("#popup_message").addClass("popup__success");
        break;
    case "warning":
        $("#popup_message").addClass("popup__warning");
        break;
    default:
        $("#popup_message").removeClass("popup__error popup__success popup__warning")
    }
    $("#popup_message .js__popup_message__caption").html(e),
    $("#popup_message .js__popup_message__message").html(t)
}
function popup_setVideo(e) {
    $("#popup_video").length || $("body").append('<div id="popup_video" class="popup"><a href="#" title="Закрыть окно" class="popup__close js__popup__close"><span>&nbsp;</span></a><div class="popup_videoContent"></div></div>'),
    $("#popup_video .popup_videoContent").html(e)
}
function popup_setSingleImage(e) {
    $("#popup_singleimage").length || $("body").append('<div id="popup_singleimage" class="popup"><a href="#" title="Закрыть окно" class="popup__close js__popup__close"><span>&nbsp;</span></a><div class="popup_singleimageContent"></div></div>'),
    $("#popup_singleimage .popup_singleimageContent").html('<img src="' + e + '" width="100%" >')
}
function popup_fullscreenImage(e, t) {
    $("body").addClass("js__overlayShadow").append('<div id="fullScreenImage__ID" title="' + langRu.close + '" style="opacity:0"><img class="fullScreenImage_image" title="' + t + '" src="' + e + '"><div class="tempAfterImg"></div></div>').find("#fullScreenImage__ID").animate({
        opacity: 1
    }, 300, function() {
        $(this).addClass("active")
    })
}
function popup_initialSwiperGalery(e, t) {
    var a = new Swiper("#" + t + " .swiper-container",{
        loop: !1,
        speed: 700,
        initialSlide: e,
        keyboard: {
            enabled: !0
        },
        updateOnImagesReady: !0,
        grabCursor: !0,
        calculateHeight: !0,
        navigation: {
            nextEl: "#" + t + " .swiperManage__link_Next",
            prevEl: "#" + t + " .swiperManage__link_Prew"
        }
    });
    a.on("slideChange", function() {
        var e = a.activeIndex;
        $("#" + t + " .popup_photoGalery__previews a.active").removeClass("active"),
        $("#" + t + " .popup_photoGalery__previews a:eq(" + e + ")").addClass("active")
    }),
    a.on("tap", function() {
        if ($("#" + t + " .swiper-slide:eq(" + a.activeIndex + ") .js__fullScrImage").length)
            return popup_fullscreenImage($("#" + t + " .swiper-slide:eq(" + a.activeIndex + ") .js__fullScrImage").attr("href"), $("#" + t + " .swiper-slide:eq(" + a.activeIndex + ") .js__fullScrImage").attr("title")),
            !1
    }),
    a.on("imagesReady", function() {
        popup_checkSizeAndPosition($("#" + t).innerHeight(), t)
    }),
    $("#" + t + " .popup_photoGalery__previews a.active").removeClass("active"),
    $("#" + t + " .popup_photoGalery__previews a:eq(" + e + ")").addClass("active"),
    $(".popup_photoGalery__previews a").on("click", function(e) {
        return a.slideTo($(this).index()),
        !1
    }),
    $(".slider_itemPhotos .swiperManage__link").css("top", $(".popup.active .swiper-container").height() / -2)
}
function popup_initialSwiperThumbsGalery(e) {
    new Swiper("#" + e + " .swiper-container",{
        direction: "vertical",
        slidesPerView: "auto",
        spaceBetween: 5,
        navigation: {
            nextEl: ".js__displayedItem__thumbsSlider .swiper-button-next",
            prevEl: ".js__displayedItem__thumbsSlider .swiper-button-prev"
        }
    })
}
function popup_open(e, t, a) {
    isMobile && $(".js__hoverEmulate").removeClass("js__hoverEmulate"),
    $(".popup.active").length && a && $(".popup.active").stop(!0, !0).animate({
        opacity: 0
    }, 400, function() {
        $(this).removeClass("active")
    }),
    $("#" + e).length || (popup_setMessage("", '<p style="text-align:center">Шаблон ' + e + ' не найден.</p><div style="text-align:center"><a href="#" class="button button__blue js__popup__close" title="Закрыть">Закрыть</a></div>', "error"),
    e = "popup_message"),
    popupShadow_open(),
    $("#" + e).addClass("active").animate({
        opacity: .001
    }, 50, function() {
        popup_checkSizeAndPosition($("#" + e).innerHeight(), e, function() {
            $(this).find("input:eq(0)").length && !$(this).find(".js__popup_mapBox").length && "popup_preview" != e && $(this).find("input:eq(0)").focus()
        }),
        otUIInit(),
        $("#" + e).find(".slider_itemPhotos").length && ($("#" + e).hasClass("popupIsStatic") ? t && slider_popupGalery_ID.slideTo(t) : popup_initialSwiperGalery(t, e)),
        $("#" + e).find(".js__displayedItem__thumbsSlider").length && popup_initialSwiperThumbsGalery(e),
        $(this).animate({
            opacity: 1
        }, 400, function() {})
    })
}
$("body").on("click", "#fullScreenImage__ID", function() {
    return $("#fullScreenImage__ID").hasClass("active") && $("body").removeClass("js__overlayShadow").find("#fullScreenImage__ID").animate({
        opacity: 0
    }, 300, function() {
        $(this).remove()
    }),
    !1
}),
$(document).ready(function() {
    $("body").on("click", ".js__popup__close", function(e) {
        return popup_close(),
        popupShadow_close(),
        "popup_itemarchive" == $(this).closest(".popup").attr("id") && window.yaCounter234640 && window.yaCounter234640.reachGoal("PRODUCTCARDARCHIVECLOSE"),
        !1
    }),
    $(".popup__shadow").on("click", function() {
        return popup_close(),
        popupShadow_close(),
        !1
    }),
    $(document).keydown(function(e) {
        if (27 === e.keyCode)
            return $("#fullScreenImage__ID").length ? $("#fullScreenImage__ID").click() : ($(".popup.active").length && popup_close(),
            $(".popup__shadow.active").length && popupShadow_close()),
            !1
    })
});
var ajaxIsProcessing = !1
  , langRu = {};
langRu.close = $("#popup_message .js__popup__close").attr("title"),
$(document).ready(function() {
    $("body").on("click", ".js__ajaxExchange", function() {
        if (!ajaxIsProcessing) {
            var e = $(this)
              , t = e.attr("data-handler");
            if (!e.hasClass("disabled") && t && ajaxExchange(e),
            "radio" != e.attr("type") && "checkbox" != e.attr("type"))
                return !1
        }
    }),
    $("body").on("click", ".js__ajaxSingleExchange", function() {
        var e = $(this)
          , t = e.attr("data-handler")
          , a = e.attr("data-handlermode");
        if (e.attr("ajaxsingleexchangedone") || ajaxIsProcessing)
            switch (t) {
            case "itemmoredelivery":
                toggleElemStation(e),
                $(e.attr("href") + "_after").slideToggle(400);
                break;
            case "itemmorepickup":
                "pickup" == a && (toggleElemStation(e),
                $(e.attr("href")).slideToggle(400)),
                "grouppickup" == a && js__animateSlideGoTo(e);
                break;
            case "basketmoredelivery":
                toggleElemStation(e),
                $(e.attr("href") + "_after").slideToggle(400);
                break;
            case "basketmorepickup":
                "list" == a && (toggleElemStation(e),
                $(e.attr("href")).slideToggle(400)),
                "map" == a && (toggleElemStation(e),
                $(e.attr("href")).find(".js__usualMinHeightLink").click());
                break;
            case "brand":
                toggleElemStation(e),
                $("#" + e.attr("data-itemid") + "_content__ID").slideToggle(400);
                break;
            case "modification":
                toggleElemStation(e),
                e.closest(".js__modificationsList__cover").find(".js__modificationsList .noDisplay").slideToggle(400);
                break;
            case "lastreceipts":
                toggleElemStation(e),
                $("#" + e.attr("data-itemid") + "_content__ID").slideToggle(400)
            }
        else
            !e.hasClass("disabled") && t && ajaxExchange(e);
        return !1
    }),
    $("body").on("change", ".js__ajaxExchange_forSelector", function(e, t) {
        var a = $(this)
          , s = ""
          , i = "";
        a.attr("data-handler") && (s = 'data-handler="' + a.attr("data-handler") + '"',
        i = a.attr("data-handler"));
        var o = ""
          , n = "";
        a.attr("data-handlermode") && (o = 'data-handlermode="' + a.attr("data-handlermode") + '"',
        n = a.attr("data-handlermode"));
        var _ = ""
          , r = "";
        a.attr("data-archive") && (_ = 'data-archive="' + a.attr("data-archive") + '"',
        r = a.attr("data-archive"));
        var l = 'data-itemid="' + a.val() + '"'
          , d = a.val()
          , c = ""
          , p = "";
        a.attr("data-catid") && (c = 'data-catid="' + a.attr("data-catid") + '"',
        p = a.attr("data-catid")),
        "variety" == i && "category" == n ? (a.closest(".indexGoods__item").wrapInner('<div class="indexGoods__item__temporaryRemove"></div>').find(".indexGoods__item__temporaryRemove").animate({
            opacity: .5
        }, 600),
        $("#" + a.attr("id") + "_emulateLink").length ? a.closest(".modelModeSelector_cover").find("a.noVisible.js__ajaxExchange").attr("data-handler", i).attr("data-handlermode", n).attr("data-itemid", d).attr("data-catid", p) : a.after('<a href="" class="noVisible js__ajaxExchange" id="' + $(this).attr("id") + '_emulateLink" ' + s + o + l + c + " ></a>"),
        a.closest(".modelModeSelector_cover").find("a.noVisible.js__ajaxExchange").click()) : "variety" == i && "itempopup" == n ? ($("#popup_preview.active .js__animateCover").animate({
            opacity: 0
        }, 1e3),
        $("#" + a.attr("id") + "_emulateLink").length ? a.closest(".modelModeSelector_cover").find("a.noVisible.js__ajaxExchange").attr("data-handler", "popup").attr("data-handlermode", "preview").attr("data-itemid", d) : (s = 'data-handler="popup"',
        o = 'data-handlermode="preview"',
        a.after('<a href="" class="noVisible js__ajaxExchange" id="' + $(this).attr("id") + '_emulateLink" ' + s + o + l + " ></a>")),
        a.closest(".modelModeSelector_cover").find("a.noVisible.js__ajaxExchange").click()) : "actionsselect" == i && 0 != d ? ($("#" + a.attr("id") + "_emulateLink").length ? a.closest(".pageActions__line__filter__typeSort").find("a.noVisible.js__ajaxExchange").attr("data-handler", "actionsselect").attr("data-itemid", d).attr("data-archive", r).attr("data-handlermode", n) : a.after('<a href="" class="noVisible js__ajaxExchange" id="' + $(this).attr("id") + '_emulateLink" ' + s + l + o + _ + " ></a>"),
        a.closest(".pageActions__line__filter__typeSort").find("a.noVisible.js__ajaxExchange").click()) : "actionsselect" == i && 0 == d && ($("#js__actionsSelect_categories_cover").fadeOut(300),
        $("#js__actionsSelect_brands_cover").fadeOut(300))
    })
});
var aniLoad_iterations = 0;
function aniLoad(e, t) {
    switch (t) {
    case "run":
        ajaxIsProcessing && e.animate({
            opacity: .2
        }, 800, "linear", function() {
            e.animate({
                opacity: 1
            }, 800, "linear", function() {
                ajaxIsProcessing && aniLoad(e, ++aniLoad_iterations < 10 ? "run" : "error")
            })
        });
        break;
    case "error":
        aniLoad(e, "stop"),
        popup_setMessage("", "Long time server response", "error"),
        popup_open("popup_message", 0, !0),
        ajaxIsProcessing = !1,
        aniLoad_iterations = 0;
        break;
    case "stop":
        e.animate({
            opacity: 1
        }, 800),
        aniLoad_iterations = 0
    }
}
function ajaxExchange(v) {
    var j, k, e = {}, w = v.attr("href"), y = (v = v).attr("data-handler"), C = v.attr("data-initnum"), x = v.attr("data-ajaxstatic"), I = v.attr("data-ajaxstaticsalt"), D = v.attr("data-closeactivepopup"), t = v.attr("data-popupcaption"), a = v.attr("data-popuptext"), e = {
        handler: y
    };
    v.is("[data-handlermode]") && (j = v.attr("data-handlermode"),
    e.handlermode = v.attr("data-handlermode")),
    v.is("[data-itemid]") && (i = v.attr("data-itemid"),
    e.itemid = v.attr("data-itemid")),
    v.is("[data-contentid]") && (k = v.attr("data-contentid"),
    e.contentid = v.attr("data-contentid")),
    v.is("[data-setid]") && (e.setid = v.attr("data-setid")),
    v.is("[data-catid]") && (e.catid = v.attr("data-catid")),
    v.is("[data-cat_id]") && (e.cat_id = v.attr("data-cat_id")),
    v.is("[data-basketid]") && (e.basketid = v.attr("data-basketid")),
    v.is("[data-frombasketid]") && (e.frombasketid = v.attr("data-frombasketid")),
    v.is("[data-itemcount]") && (e.itemcount = v.attr("data-itemcount")),
    v.is("[data-shipmenttype]") && (e.shipmenttype = v.attr("data-shipmenttype")),
    v.is("[data-groupkey]") && (e.groupkey = v.attr("data-groupkey")),
    v.is("[data-cityid]") && (e.cityid = v.attr("data-cityid")),
    v.is("[data-url]") && (e.url = v.attr("data-url")),
    v.is("[data-exclude]") && (e.exclude = v.attr("data-exclude")),
    v.is("[data-presets]") && (e.presets = v.attr("data-presets")),
    v.is("[data-preset_id]") && (e.preset_id = v.attr("data-preset_id")),
    v.is("[data-pagetype]") && (e.pagetype = v.attr("data-pagetype")),
    v.is("[data-pagecount]") && (e.pagecount = v.attr("data-pagecount")),
    v.is("[data-pagenext]") && (e.pagenext = v.attr("data-pagenext")),
    v.is("[data-page]") && (e.page = v.attr("data-page")),
    v.is("[data-pagesort]") && (e.pagesort = v.attr("data-pagesort")),
    v.is("[data-sort]") && (e.sort = v.attr("data-sort")),
    v.is("[data-action]") && (e.action = v.attr("data-action")),
    v.is("[data-query]") && (e.query = v.attr("data-query")),
    v.is("[data-archive]") && (e.archive = v.attr("data-archive")),
    v.is("[data-brand]") && (e.brand = v.attr("data-brand")),
    v.is("[data-forceitems]") && (e.forceitems = v.attr("data-forceitems")),
    "form" != y && "formextended" != y || (e = v.closest("form").serialize()),
    "popup" == y && "basketshift" == j && (e = v.is("[data-itemhash]") ? "handler=popup&handlermode=basketshift&itemid=" + i + "&hashes[]=" + v.attr("data-itemhash") : "handler=popup&handlermode=basketshift&itemid=" + i + "&" + v.closest("form").serialize()),
    "buy" == y && "basketfavorites" == j && (e = "handler=buy&handlermode=basketfavorites&" + v.closest("form").serialize()),
    "ordercomment" == y && "edit" == j && (e = "handler=ordercomment&handlermode=edit&itemid=" + i + "&" + v.closest("form").serialize()),
    "moregoods" == y && "listing" == j && (e = (0 == v.attr("data-preset_id") && (v.attr("data-presets", 0),
    e.presets = 0),
    decodeURIComponent($.param(e)) + "&" + $("#search_form_id").serialize()));
    var s = "/ajax.php";
    "buy" == y ? s = "/ajax_basket.php" : "variety" == y || "listing" == j ? s = "/goods.php" : "preview" == j ? s = "/item.php" : "moregoods" == y && "brand" == j ? s = "/brands.php" : "moregoods" == y && "line" == j ? s = "/brands_lines.php" : "moregoods" == y && "action" == j ? s = "/actions.php" : "moregoods" == y && "news" == j ? s = "/news.php" : "moregoods" == y && "search" == j ? s = "/search2.php" : "moregoods" == y && "promo" == j ? s = "/promo.php" : "moregoods" == y && "discount" == j ? s = "/discount.php" : "moregoods" == y && "bought_items" == j ? s = "/new_client.php" : "ratereviews" != y && "ratecomments" != y && "ratevideoreviews" != y && "rategalleries" != y || (s = "/ajax_rate.php");
    var i = "form" != y && "formextended" != y && "variety" != y && "basketshift" != j && "ordercomment" != y ? "GET" : "POST";
    return "popup" == y && "print" == j ? (window.print(),
    popupShadow_close(),
    !1) : "popup" == y && "message" == j ? (t || a ? (popup_setMessage(t, a),
    popup_open("popup_message")) : (popup_setMessage("", "", "error"),
    popup_open("popup_message", 0, !0)),
    !1) : "popup" == y && "image" == j ? (setSingleImagePopup(v.attr("href")),
    popup_open("popup_singleimage"),
    !1) : "popup" == y && "video" == j ? (setVideoPopup(v.attr("data-popuptext")),
    popup_open("popup_video"),
    !1) : void ("compare" == y && "add" == j && v.hasClass("active") ? window.location.href = w : (ajaxIsProcessing = !0,
    setTimeout(function() {
        aniLoad(v, "run")
    }, 1e3),
    $.ajax({
        type: i,
        url: s,
        data: e
    }).done(function(e) {
        if (e) {
            switch (aniLoad(v, "stop"),
            y) {
            case "popup":
                var t = ""
                  , a = y + "_" + j;
                k && (a = a + "_" + k),
                x ? I ? (t = I,
                $("#" + a + t).addClass("popupIsStatic")) : (t = getRandomInt(200, 1e5),
                e = e.replace('id="' + a + '"', 'id="' + a + t + '"').replace(/\YMapsID/g, "YMapsID_" + a + t),
                $("body").append(e),
                $(".js__ajaxExchange[data-ajaxstatic=" + x + "][data-handlermode=" + j + "][data-contentid=" + k + "]").each(function() {
                    $(this).attr("data-ajaxstaticsalt", t)
                })) : (t = "",
                $("#" + a).length ? !x && $("#" + a).length && ($("#" + a + " *[id]").each(function() {
                    $(this).attr("id", $(this).attr("id") + "_tempPOstfix")
                }),
                $("#" + a).attr("id", a + "_tempPOstfix").find(".js__animateCover").fadeOut(10, function() {
                    $(this).closest(".popup").remove()
                }),
                $("body").append(e)) : $("body").append(e)),
                popup_open(a + t, C, D),
                ajaxIsProcessing = !1;
                break;
            case "buy":
                var s = e.split("&#SPLIT&#")
                  , i = !0;
                if ($("#popup_buy").length)
                    switch (j) {
                    case "popup":
                        $("#js__addedToCart_itemsID").animate({
                            opacity: 0
                        }, 400, function() {
                            $(this).html(s[0]).animate({
                                opacity: 1
                            }, 500),
                            $("#js__popup_addedToCart__cartLinkID").attr("href", $(this).find(".addedToCart_itemInfo").attr("data-basketurl"))
                        }),
                        $(".js__popup_addedToCart__shiftPanel").html(s[3]),
                        i = !1;
                        break;
                    case "basket":
                        break;
                    default:
                        $("#popup_buy").remove(),
                        $("body").append(s[0])
                    }
                else
                    $("body").append(s[0]);
                popup_open("popup_buy", 0, i);
                var o = $(".js__header__basketCover").attr("title")
                  , n = $(".js__header__basketLink").attr("title")
                  , _ = $(".js__header__basketLink").attr("href");
                if (v.removeClass("button__orange js__ajaxExchange").addClass("button__clearGray active").html(o).attr("title", n).attr("href", _),
                $("#goods_content").length)
                    for (var r = 0, l = v.attr("href"), d = v.attr("data-itemid"); r <= $(".button__orange.js__ajaxExchange").length; )
                        $(".button__orange.js__ajaxExchange").eq(r).attr("href") == l || $(".button__orange.js__ajaxExchange").eq(r).attr("data-itemid") == d ? $(".button__orange.js__ajaxExchange").eq(r).removeClass("button__orange js__ajaxExchange").addClass("button__clearGray active").html(o).attr("title", n).attr("href", _) : r++;
                return !window.yaCounter234640 || void 0 !== (a = v.attr("data-shipmenttype")) && "" != a && window.yaCounter234640.reachGoal("item__addToCart__changedPickup"),
                ajaxIsProcessing = !1;
            case "bookmarks":
                switch (j) {
                case "add":
                    $(".js__bookmarksCount").html(e),
                    v.attr("title", v.attr("data-titletrue")).text(v.attr("data-captiontrue")).addClass("active"),
                    v.attr("data-handlermode", "remove"),
                    v.parent().hasClass("removedBookmark__restore") && v.parent().fadeOut(300, function() {
                        $("#item_container_" + v.attr("data-itemid") + "__ID").fadeIn(300).removeClass("js__removedBookmark"),
                        v.parent().remove()
                    });
                    break;
                case "remove":
                    var c, p, m;
                    $(".js__bookmarksCount").html(e),
                    v.attr("data-dynamicremove") ? (v.closest(".tableGoods__item").addClass("js__removedBookmark"),
                    c = v.closest(".tableGoods__itemGroup").find(".tableGoods__item").length - 1,
                    p = v.attr("data-itemcode") + ", ",
                    $("#js__bookmarksShare__ID").length && (m = (m = $("#js__bookmarksShare__ID").attr("data-popuptext")).replace(p, ""),
                    $("#js__bookmarksShare__ID").attr("data-popuptext", m)),
                    $("#bookmarksToFriends").length && (m = (m = $("#bookmarksToFriends").val()).replace(p, ""),
                    $("#bookmarksToFriends").val(m)),
                    c == v.closest(".tableGoods__itemGroup").find(".js__removedBookmark").length ? v.closest(".js__removedBookmark").fadeOut(300, function() {
                        v.closest(".js__removedBookmark").after('<div class=removedBookmark__restore><a href="#" class="js__ajaxExchange" data-handler="bookmarks" data-handlermode="add" data-itemid="' + v.attr("data-itemid") + '">Отменить удаление «' + v.closest(".js__removedBookmark").find(".tableGoods__item__name").text() + "» из Закладок</a></div>")
                    }) : v.closest(".js__removedBookmark").fadeOut(300, function() {
                        v.closest(".js__removedBookmark").after('<div class=removedBookmark__restore><a href="#" class="js__ajaxExchange" data-handler="bookmarks" data-handlermode="add" data-itemid="' + v.attr("data-itemid") + '">Отменить удаление «' + v.closest(".js__removedBookmark").find(".tableGoods__item__name").text() + "»</div>")
                    }),
                    0 == e && ($("#bookmarkTable__ID").hide(0),
                    $("#js__bookmarksShare__ID").hide(0),
                    $("#bookmarkPage__dummyMessage__ID").show(1))) : (v.attr("title", v.attr("data-titlefalse")).text(v.attr("data-captionfalse")).removeClass("active"),
                    v.attr("data-handlermode", "add"))
                }
                ajaxIsProcessing = !1;
                break;
            case "favoriteorder":
                switch (j) {
                case "add":
                    v.attr("title", v.attr("data-titletrue")).text(v.attr("data-captiontrue")).addClass("active"),
                    v.attr("data-handlermode", "remove");
                    break;
                case "remove":
                    v.attr("data-dynamicremove") ? v.closest("tr").fadeOut(300) : (v.attr("title", v.attr("data-titlefalse")).text(v.attr("data-captionfalse")).removeClass("active"),
                    v.attr("data-handlermode", "add"))
                }
                ajaxIsProcessing = !1;
                break;
            case "notifyitemlist":
                "remove" === j && (v.closest("tr").addClass("js__removedBookmark"),
                (v.closest("tbody").find(".last").length == v.closest("tbody").find(".js__removedBookmark").length ? v.closest("tbody") : v.closest("tr")).fadeOut(300),
                0 == e && ($("#notifyitemlistTable_ID").hide(0),
                $(".js__notifyitemlistText").hide(0),
                $("#notifyitemlistPage_dummyMessage").show(1))),
                ajaxIsProcessing = !1;
                break;
            case "compare":
                switch (j) {
                case "add":
                    v.attr("title", v.attr("data-titletrue")).text(v.attr("data-captiontrue")).addClass("active"),
                    v.parent().find("a[data-handler=compare][data-handlermode=remove]").removeClass("noDisplay"),
                    "SUCCESS" != e && $("#preview_compareList__ID").html(e);
                    break;
                case "remove":
                    var h = v.closest("body").find("a[data-handler=compare][data-handlermode=add][data-itemid=" + v.attr("data-itemid") + "]");
                    h.attr("title", h.attr("data-titlefalse")).text(h.attr("data-captionfalse")).removeClass("active"),
                    h.parent().find("a[data-handler=compare][data-handlermode=remove]").addClass("noDisplay"),
                    "SUCCESS" != e && $("#preview_compareList__ID").html(e)
                }
                ajaxIsProcessing = !1;
                break;
            case "clubprice":
                switch (j) {
                case "category":
                    v.closest(".indexGoods__item__price").animate({
                        opacity: 0
                    }, 300, function() {
                        $(this).html(e),
                        $(this).animate({
                            opacity: 1
                        }, 300)
                    });
                    break;
                case "item":
                    v.closest(".productPage__priceCover").animate({
                        opacity: 0
                    }, 300, function() {
                        $(this).html(e),
                        $(this).animate({
                            opacity: 1
                        }, 300)
                    })
                }
                ajaxIsProcessing = !1;
                break;
            case "basketshipmenttype":
                for (key in (e = $.parseJSON(e)).itemsstatus)
                    $("#" + key).html(e.itemsstatus[key]);
                var u;
                $("#basket_paymenttypes__ID .js__animateCover").animate({
                    opacity: 0
                }, 200, function() {
                    $(this).html(e.paymenttypes).animate({
                        opacity: 1
                    }, 200),
                    otUIInit(),
                    ajaxIsProcessing = !1
                }),
                (f = v.closest("tr").find(".js__rowDate").text()) ? v.closest("form").find(".js__formBoxMainButton").val("Оформить заказ на " + f) : v.closest("form").find(".js__formBoxMainButton").val("Оформить заказ"),
                window.myBasketPickPointsMap && (u = "shipmentradio" + v.attr("data-itemid"),
                window.myBasketPickPointsMap.geoObjects.each(function(e) {
                    1 == e.properties.get("otPickupPointActivity") ? e.options.set("iconImageHref", "/templates/images/icons/ic__yaicon.png") : e.options.set("iconImageHref", "/templates/images/icons/ic__yaicon_gray.png"),
                    e.properties.get("otPickupPointID") == u && (e.options.set("iconImageHref", "/templates/images/icons/ic__yaicon_green.png"),
                    e.balloon.open())
                }));
                break;
            case "basketservicesmanage":
                for (key in (e = $.parseJSON(e)).itemsstatus)
                    $("#" + key).html(e.itemsstatus[key]);
                var f;
                $("#basket_paymenttypes__ID .js__animateCover").animate({
                    opacity: 0
                }, 200, function() {
                    $(this).html(e.paymenttypes).animate({
                        opacity: 1
                    }, 200),
                    otUIInit(),
                    ajaxIsProcessing = !1
                }),
                (f = v.closest("tr").find(".js__rowDate").text()) ? v.closest("form").find(".js__formBoxMainButton").val("Оформить заказ на " + f) : v.closest("form").find(".js__formBoxMainButton").val("Оформить заказ");
                break;
            case "basketpaymenttype":
                ajaxIsProcessing = !1;
                break;
            case "variety":
                "category" === j && (v.addClass("focus"),
                v.closest(".indexGoods__item__temporaryRemove").length || v.closest(".indexGoods__item").wrapInner('<div class="indexGoods__item__temporaryRemove"></div>').find(".indexGoods__item__temporaryRemove").animate({
                    opacity: .5
                }, 600),
                v.closest(".indexGoods__item__temporaryRemove").animate({
                    opacity: 0
                }, 400, function() {
                    $(this).html(e),
                    $(this).find(".indexGoods__item__image img").load(function() {
                        otUIInit(),
                        $(".indexGoods__item__temporaryRemove").animate({
                            opacity: 1
                        }, 400, function() {
                            $(this).closest(".indexGoods__item").hasClass("indexGoods__itemShorty") || $(this).find(".indexGoods__item__image").unwrap()
                        })
                    })
                }),
                window.yaCounter234640 && window.yaCounter234640.reachGoal("listing_varietychange")),
                ajaxIsProcessing = !1;
                break;
            case "form":
                if ("SUCCESS" == e)
                    $("#popup_message .js__popup_message__caption").html(v.closest("form").find("#form_headSuccess").val()).closest("#popup_message").addClass("popup__success").find(".js__popup_message__message").html("<p>" + v.closest("form").find("#form_textSuccess").val() + "</p>"),
                    popup_open("popup_message", 0, !0),
                    "tabs_feedbacks__form__ID" == v.closest(".js__formBox").attr("id") && ($("#tabs_feedbacks__form__ID").fadeOut(400),
                    $("html, body").animate({
                        scrollTop: $("#tabs_feedbacks__write").offset().top + "px"
                    }, 600));
                else {
                    var r = 0
                      , g = [];
                    for (g = e.split(", "),
                    v.closest(".js__formBox").find(".formLine.error").removeClass("error"); r < g.length; )
                        v.closest(".js__formBox").find("#" + g[r]).closest(".formLine").addClass("error"),
                        r++;
                    $(".popup.active").length && popup_checkSizeAndPosition(v.closest(".popup").height(), v.closest(".popup").attr("id")),
                    $(".js__formBox__isManCheck__reload").length && $(".js__formBox__isManCheck__reload").click()
                }
                ajaxIsProcessing = !1;
                break;
            case "formextended":
                if ("SUCCESS" == (e = $.parseJSON(e)).status)
                    "POPUP" == e.value ? ($("#popup_message .js__popup_message__caption").html(v.closest(".js__formBox").find("#form_headSuccess").val()).closest("#popup_message").addClass("popup__success").find(".js__popup_message__message").html("<p>" + v.closest(".js__formBox").find("#form_textSuccess").val() + "</p>"),
                    popup_open("popup_message", 0, !0)) : "tabs_feedbacks__form__ID" == v.closest(".js__formBox").attr("id") ? ($(".js__reviewlist").append(e.value).show(300),
                    $("#tabs_feedbacks__form__ID").fadeOut(400),
                    $("#tabs_feedbacks__write").fadeOut(400),
                    $("html, body").animate({
                        scrollTop: $("#tabs_feedbacks__newAdded").offset().top + "px"
                    }, 600)) : "shopfeedbacks__formID" == v.closest(".js__formBox").attr("id") && ($("#shopfeedbacks__formID").slideUp(400),
                    $("#shopfeedbacks__success__ID").slideDown(400));
                else if ("ERROR" == e.status) {
                    r = 0,
                    g = [];
                    for (g = e.value.split(","),
                    v.closest(".js__formBox").find(".formLine.error").removeClass("error"); r < g.length; )
                        v.closest(".js__formBox").find("#" + g[r].trim()).closest(".formLine").addClass("error"),
                        r++;
                    $(".popup.active").length && popup_checkSizeAndPosition(v.closest(".popup").height(), v.closest(".popup").attr("id")),
                    $(".js__formBox__isManCheck__reload").length && $(".js__formBox__isManCheck__reload").click()
                }
                ajaxIsProcessing = !1;
                break;
            case "bubble":
                v.attr("data-bubbleposition") ? showBubble(v, e, "bottom") : showBubble(v, e),
                ajaxIsProcessing = !1;
                break;
            case "rategalleries":
            case "ratevideoreviews":
            case "ratecomments":
            case "ratereviews":
                switch (e.result_code) {
                case 1:
                    d = v.attr("data-itemid"),
                    $("#item_rating_" + d + "__ID .item_rating__plus").html(e.helpful),
                    $("#item_rating_" + d + "__ID .item_rating__minus").html(e.unhelpful),
                    v.addClass("active");
                    break;
                case 2:
                    showBubble(v, e.result_text, "bottom");
                    break;
                case 3:
                    v.html(+v.html() + 1)
                }
                ajaxIsProcessing = !1;
                break;
            case "claimcomments":
                showBubble(v, e.result_text, "bottom"),
                ajaxIsProcessing = !1;
                break;
            case "brand":
                $("#" + v.attr("data-itemid") + "_content__ID .js__pageBrands__item__listCover").append(e).slideDown(300),
                toggleElemStation(v),
                v.attr("ajaxsingleexchangedone", !0),
                v.addClass("noDisplay"),
                ajaxIsProcessing = !1;
                break;
            case "modification":
                v.closest(".js__modificationsList__cover").find(".js__modificationsList").html(e),
                v.closest(".js__modificationsList__cover").find(".js__modificationsList .noDisplay").slideDown(400),
                toggleElemStation(v),
                v.attr("ajaxsingleexchangedone", !0),
                ajaxIsProcessing = !1;
                break;
            case "lastreceipts":
                $("#" + v.attr("data-itemid") + "_content__ID").html(e).slideDown(400),
                toggleElemStation(v),
                v.attr("ajaxsingleexchangedone", !0),
                ajaxIsProcessing = !1;
                break;
            case "itemmoredelivery":
                $(v.attr("href") + "_after").slideUp(0).html(e).slideDown(400),
                toggleElemStation(v),
                v.attr("ajaxsingleexchangedone", !0),
                ajaxIsProcessing = !1;
                break;
            case "itemmorepickup":
                switch (j) {
                case "grouppickup":
                    $("#js__productpage_pickupPoint_CoverID").append(e),
                    js__animateSlideGoTo(v);
                    break;
                case "pickup":
                    $(v.attr("href")).slideUp(0).html(e).slideDown(400),
                    toggleElemStation(v)
                }
                v.attr("ajaxsingleexchangedone", !0),
                ajaxIsProcessing = !1;
                break;
            case "basketmoredelivery":
                $(".ot_customRadioGroup").checkboxradio("destroy"),
                $(v.attr("href") + "_after").slideUp(0).html(e).slideDown(400),
                v.attr("ajaxsingleexchangedone", !0),
                otUIInit(),
                ajaxIsProcessing = !1,
                toggleElemStation(v);
                break;
            case "basketmorepickup":
                switch ($(".ot_customRadioGroup").checkboxradio("destroy"),
                $(".js__ajaxSingleExchange[data-handler=basketmorepickup]").attr("ajaxsingleexchangedone", !0),
                j) {
                case "list":
                    $(v.attr("href")).slideUp(0).append(e).slideDown(400),
                    toggleElemStation(v),
                    window.yaCounter234640 && (userid ? window.yaCounter234640.reachGoal("basketOpenPickupList__client") : window.yaCounter234640.reachGoal("basketOpenPickupList"));
                    break;
                case "map":
                    $(v.attr("data-hrefblock")).append(e),
                    toggleElemStation(v),
                    $("#basketpickupPointsMapCover__ID .js__usualMinHeightLink").click(),
                    window.yaCounter234640 && (userid ? window.yaCounter234640.reachGoal("basketOpenPickupMaps__client") : window.yaCounter234640.reachGoal("basketOpenPickupMaps"))
                }
                basketMapSetPickpoints(),
                otUIInit(),
                ajaxIsProcessing = !1;
                break;
            case "basketshift":
                if ("SUCCESS" == e)
                    switch (j) {
                    case "exist":
                        popup_setMessage("Успешно!", '<p style="text-align:center">Товар успешно перемещён в вашу корзину &laquo;<b>' + v.find("span").text() + '</b>&raquo;.</p><div style="text-align:center; padding-top: 10px"><a href="/basket.html" class="button button__clearGray active" title="Оформить заказ">Оформить заказ</a><a href="#" class="dashed js__popup__close" title="Продолжить покупки">Продолжить покупки</a></div>', "success"),
                        popup_open("popup_message", 0, !0);
                        break;
                    case "new":
                        popup_setMessage("Успешно!", '<p style="text-align:center">Товар успешно перемещён в вашу новую корзину &laquo;<b>' + v.attr("data-basketid") + '</b>&raquo;.</p><div style="text-align:center; padding-top: 10px"><a href="/basket.html" class="button button__clearGray active" title="Оформить заказ">Оформить заказ</a><a href="#" class="dashed js__popup__close" title="Продолжить покупки"Продолжить покупки</a></div>', "success"),
                        popup_open("popup_message", 0, !0)
                    }
                ajaxIsProcessing = !1;
                break;
            case "ordercomment":
                if ("SUCCESS" == e)
                    switch (popup_setMessage("Успешно!", '<p style="text-align:center">Данные по заказу изменены.</p><div style="text-align:center"><a href="#" class="button button__blue js__popup__close" title="Закрыть">Закрыть</a></div>', "success"),
                    popup_open("popup_message", 0, !0),
                    j) {
                    case "edit":
                        $(".js__ordercomment__text").html(v.closest(".popup").find(".input__textarea").val()).parent().slideDown(300);
                        break;
                    case "remove":
                        $(".js__ordercomment__text").html("").parent().slideUp(300)
                    }
                ajaxIsProcessing = !1;
                break;
            case "actionsselect":
                2 == (d = v.attr("data-itemid")) ? $("#js__actionsSelect_categories_cover").fadeOut(300, function() {
                    $("#js__actionsSelect_brands_cover select").html(e),
                    $("#js__actionsSelect_brands_cover").fadeIn(300)
                }) : 1 == d ? $("#js__actionsSelect_brands_cover").fadeOut(300, function() {
                    $("#js__actionsSelect_categories_cover select").html(e),
                    $("#js__actionsSelect_categories_cover").fadeIn(300)
                }) : 0 == d && ($("#js__actionsSelect_categories_cover").fadeOut(300),
                $("#js__actionsSelect_brands_cover").fadeOut(300)),
                ajaxIsProcessing = !1;
                break;
            case "moregoods":
                switch (j) {
                case "bought_items":
                case "discount":
                case "promo":
                case "search":
                case "listing":
                case "action":
                case "news":
                case "brand":
                case "line":
                    var b;
                    (e = checkingParseJSON(e)) && (v.hasClass("js__ajaxListingSelectPageLink") ? ($(".js__goods__items").html(e.items),
                    $(".js__itemsLoadingCover .js__goods__items").animate({
                        opacity: 1
                    }, 300)) : $(".js__goods__items").append(e.items),
                    $(".paginator").replaceWith(e.pagination),
                    initDynamicPaginator(),
                    e.more ? ($(".js__ajaxListingMore").show(1),
                    $(".js__ajaxListingMore").attr("data-pagenext", $(".js__paginator__linkActive").text()),
                    $(".js__ajaxListingMore").attr("data-page", $(".js__paginator__linkActive").text())) : $(".js__ajaxListingMore").hide(1),
                    b = $(".js__paginator__linkActive").attr("data-activeurl"),
                    $(".js__ajaxListingMore").attr("href", b),
                    history.pushState(null, null, b))
                }
                ajaxIsProcessing = !1;
                break;
            default:
                w && "#" != w ? window.location.href = w : (popup_setMessage("", "", "error"),
                popup_open("popup_message", 0, !0)),
                ajaxIsProcessing = !1
            }
            return !1
        }
        aniLoad(v, "stop"),
        w && "#" != w ? window.location.href = w : (popup_setMessage("", "", "error"),
        popup_open("popup_message", 0, !0)),
        ajaxIsProcessing = !1
    }).fail(function() {
        aniLoad(v, "stop"),
        w && "#" != w ? window.location.href = w : (popup_setMessage("", "", "error"),
        popup_open("popup_message", 0, !0)),
        ajaxIsProcessing = !1
    })))
}
function initDynamicPaginator() {
    var t, a, s, i, o, n, _, r, l, d, c, p, m, h, u, f;
    $(".js__goods__itemsDynamicNavigations").length && (thisObj = $(".js__goods__itemsDynamicNavigations"),
    t = thisObj.attr("data-handler"),
    a = thisObj.attr("data-handlermode"),
    s = thisObj.attr("data-pagetype"),
    i = thisObj.attr("data-pagecount"),
    o = thisObj.attr("data-pagesort"),
    n = thisObj.attr("data-sort"),
    _ = thisObj.attr("data-itemid"),
    r = thisObj.attr("data-catid"),
    l = thisObj.attr("data-cat_id"),
    d = thisObj.attr("data-presets"),
    c = thisObj.attr("data-preset_id"),
    p = thisObj.attr("data-query"),
    m = thisObj.attr("data-archive"),
    h = thisObj.attr("data-brand"),
    u = thisObj.attr("data-forceitems"),
    f = thisObj.attr("data-action"),
    $(".js__goods__itemsDynamicNavigations .js__paginator__link").each(function() {
        var e = $(this);
        e.attr("data-pagenext", +e.text() - 1),
        e.attr("data-page", +e.text() - 1),
        e.attr("data-handler", t),
        e.attr("data-handlermode", a),
        e.attr("data-pagetype", s),
        e.attr("data-pagecount", i),
        e.attr("data-pagesort", o),
        e.attr("data-sort", n),
        e.attr("data-itemid", _),
        e.attr("data-catid", r),
        e.attr("data-cat_id", l),
        e.attr("data-presets", d),
        e.attr("data-preset_id", c),
        e.attr("data-query", p),
        e.attr("data-archive", m),
        e.attr("data-brand", h),
        e.attr("data-forceitems", u),
        e.attr("data-action", f),
        e.addClass("js__ajaxListingSelectPageLink").addClass("js__ajaxExchange")
    }),
    $(".js__goods__itemsDynamicNavigations .js__paginator__linkPrev").length && (thisObj = $(".js__goods__itemsDynamicNavigations .js__paginator__linkPrev"),
    thisObj.attr("data-pagenext", +$(".js__paginator__linkActive").text() - 2),
    thisObj.attr("data-page", +$(".js__paginator__linkActive").text() - 2),
    thisObj.attr("data-handler", t),
    thisObj.attr("data-handlermode", a),
    thisObj.attr("data-pagetype", s),
    thisObj.attr("data-pagecount", i),
    thisObj.attr("data-pagesort", o),
    thisObj.attr("data-sort", n),
    thisObj.attr("data-itemid", _),
    thisObj.attr("data-catid", r),
    thisObj.attr("data-cat_id", l),
    thisObj.attr("data-presets", d),
    thisObj.attr("data-preset_id", c),
    thisObj.attr("data-query", p),
    thisObj.attr("data-archive", m),
    thisObj.attr("data-brand", h),
    thisObj.attr("data-forceitems", u),
    thisObj.attr("data-action", f),
    thisObj.addClass("js__ajaxListingSelectPageLink").addClass("js__ajaxExchange")),
    $(".js__goods__itemsDynamicNavigations .js__paginator__linkNext").length && (thisObj = $(".js__goods__itemsDynamicNavigations .js__paginator__linkNext"),
    thisObj.attr("data-pagenext", +$(".js__paginator__linkActive").text()),
    thisObj.attr("data-page", +$(".js__paginator__linkActive").text()),
    thisObj.attr("data-handler", t),
    thisObj.attr("data-handlermode", a),
    thisObj.attr("data-pagetype", s),
    thisObj.attr("data-pagecount", i),
    thisObj.attr("data-pagesort", o),
    thisObj.attr("data-sort", n),
    thisObj.attr("data-itemid", _),
    thisObj.attr("data-catid", r),
    thisObj.attr("data-cat_id", l),
    thisObj.attr("data-presets", d),
    thisObj.attr("data-preset_id", c),
    thisObj.attr("data-query", p),
    thisObj.attr("data-archive", m),
    thisObj.attr("data-brand", h),
    thisObj.attr("data-forceitems", u),
    thisObj.attr("data-action", f),
    thisObj.addClass("js__ajaxListingSelectPageLink").addClass("js__ajaxExchange")))
}
function parseGETParameters() {
    var e = {}
      , t = window.location.search.replace(/&amp;/g, "&").substring(1);
    if (1 <= (t = t.replace(/%5B/g, "[").replace(/%5D/g, "]").split("&")).length && "" != t[0])
        for (var a = 0; a < t.length; a++) {
            var s = t[a].split("=")
              , i = new Array;
            e[s[0]] ? ("string" == typeof e[s[0]] && (i[0] = e[s[0]],
            e[s[0]] = i),
            -1 == e[s[0]].indexOf(s[1]) && e[s[0]].push(s[1])) : e[s[0]] = void 0 === s[1] ? "" : s[1]
        }
    return e
}
function parseSetParameters(e, t) {
    var a = parseGETParameters();
    switch (e) {
    case "cat_id":
        a.cat_id = t;
        break;
    case "sort":
        a.sort = t;
        break;
    case "brand":
        a.brand = t;
        break;
    case "browse_mode":
        a.browse_mode = t;
        break;
    case "wheretobuy":
        a.wheretobuy = t
    }
    e = $.param(a, !0);
    location.replace("?" + decodeURIComponent(e) + "&page=0")
}
function filtersAJAX_Upload(t) {
    (t = t).attr("data-catid");
    var e = t.attr("data-filterid")
      , a = t.attr("data-filtername")
      , s = decodeURIComponent($("#search_form_id").serialize())
      , s = (s = (s += "&handler=filtersajax") + "&filterid=" + e) + "&filtername=" + a;
    $.ajax({
        type: "GET",
        url: "/search_form_ajax_new.php",
        data: s
    }).done(function(e) {
        t.parent().find(".columnBlock__spoiledContent__paddedContent").html(e),
        t.parent().addClass("js__filterUpdated"),
        otUIInit()
    }).fail(function() {})
}
$(document).ready(function() {
    $(".js__alphabetsLine__flagEN").click(function() {
        var e = $(this);
        return $(".js__alphabetsLine__flagRU").removeClass("active"),
        e.addClass("active"),
        $(".js__alphabetsLine__listRU").fadeOut(300, function() {
            $(".js__alphabetsLine__listEN").fadeIn(300)
        }),
        !1
    }),
    $(".js__alphabetsLine__flagRU").click(function() {
        var e = $(this);
        return $(".js__alphabetsLine__flagEN").removeClass("active"),
        e.addClass("active"),
        $(".js__alphabetsLine__listEN").fadeOut(300, function() {
            $(".js__alphabetsLine__listRU").fadeIn(300)
        }),
        !1
    })
}),
$(document).ready(function() {
    $("#js__listingSort_ID").on("change", function(e, t) {
        parseSetParameters("sort", this.options[this.selectedIndex].value)
    }),
    $("#js__listingMode_ID").on("change", function(e, t) {
        parseSetParameters("browse_mode", this.options[this.selectedIndex].value)
    }),
    $("#js__listingStore_ID").on("change", function(e, t) {
        parseSetParameters("wheretobuy", this.options[this.selectedIndex].value)
    }),
    $(".catalog__displayedItem").on("click", ".js__displayedItem__loadOtherModel", function() {
        var s = $(this);
        s.closest(".catalog__displayedItem").height(s.closest(".catalog__displayedItem").height()),
        s.closest(".catalog__displayedItem").wrapInner('<div id="catalog__displayedItem__temporaryRemoveID"></div>').find("#catalog__displayedItem__temporaryRemoveID").animate({
            opacity: .5
        }, 600);
        var e = s.attr("data-cat_id")
          , t = s.attr("data-item_id")
          , a = s.attr("data-required_tpl");
        return jQuery_ajax_set_encoding("windows-1251"),
        a = a || 0,
        $.post("/goods.php", {
            ajax_request: 1,
            ajax_item_container: "ajax_item_container",
            cat_id: e,
            id: t,
            required_tpl: a
        }, function(e, t, a) {
            s.closest(".catalog__displayedItem #catalog__displayedItem__temporaryRemoveID").animate({
                opacity: 0
            }, 300, function() {
                $(this).html(e).closest(".catalog__displayedItem").animate({
                    height: $("#catalog__displayedItem__temporaryRemoveID").height()
                }, 400)
            })
        }, "html").always(function() {
            $("#catalog__displayedItem__temporaryRemoveID").animate({
                opacity: 1
            }, 400, function() {
                $(this).find(".catalog__displayedItem__name").unwrap().closest(".catalog__displayedItem").css("height", "auto")
            })
        }),
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
    $("#js__filterResult__stickerCloseID").on("click", function() {
        return $("#filterResult__sticker_ID").animate({
            opacity: 0,
            top: "+=20"
        }, 300, function() {
            $(this).css("display", "none").removeClass("active")
        }),
        !1
    }),
    $(".spoiledLst").each(function() {
        $(this).find(".spoiledLst__hiddenItem:eq(0)").addClass("hasUpperDash")
    }),
    $(".content__mainColumn").on("mouseenter", ".js__showcaseTiles_cover", function() {
        var e = $(this)
          , t = e.find(".catalog__displayedItem__columnFotomainLnk").height();
        switch (e.parent().find(".modelModeSelector_cover").width(e.width()),
        e.find(".showcaseTiles__item").length) {
        case 0:
            break;
        case 1:
            e.find(".showcaseTiles").height(t),
            e.find(".catalog__displayedItem__columnFotomainLnk").height(t),
            e.closest(".catalog__displayedItemFotomode").addClass("showcaseTiles_open overflowHidden showcaseTiles_length1"),
            e.find(".catalog__displayedItem__columnFotomainLnk").width(.66 * e.closest(".catalog__displayedItem").width() - 16),
            e.find(".catalog__displayedItem__columnFotomainLnk").stop(!0, !0).animate({
                width: e.closest(".catalog__displayedItem").width() / 2
            }, 300),
            e.find(".showcaseTiles").width(e.closest(".catalog__displayedItem ").width() / 2);
            break;
        case 2:
            e.find(".showcaseTiles").height(t),
            e.find(".catalog__displayedItem__columnFotomainLnk").height(t),
            e.closest(".catalog__displayedItemFotomode").addClass("showcaseTiles_open overflowHidden showcaseTiles_length2"),
            e.find(".catalog__displayedItem__columnFotomainLnk").width(.66 * e.closest(".catalog__displayedItem").width() - 16),
            e.find(".catalog__displayedItem__columnFotomainLnk").stop(!0, !0).animate({
                width: .33 * e.closest(".catalog__displayedItem").width()
            }, 300),
            e.find(".showcaseTiles").width(.66 * e.closest(".catalog__displayedItem ").width());
            break;
        case 3:
            e.find(".showcaseTiles").height(t),
            e.find(".catalog__displayedItem__columnFotomainLnk").height(t),
            e.closest(".catalog__displayedItemFotomode").addClass("showcaseTiles_open overflowHidden showcaseTiles_length3"),
            e.find(".catalog__displayedItem__columnFotomainLnk").width(.66 * e.closest(".catalog__displayedItem").width() - 16),
            e.find(".catalog__displayedItem__columnFotomainLnk").stop(!0, !0).animate({
                width: e.closest(".catalog__displayedItem").width() / 2
            }, 300),
            e.find(".showcaseTiles").width(e.closest(".catalog__displayedItem ").width() / 2);
            break;
        default:
            e.find(".showcaseTiles").height(t),
            e.find(".catalog__displayedItem__columnFotomainLnk").height(t),
            e.closest(".catalog__displayedItemFotomode").addClass("showcaseTiles_open overflowHidden"),
            e.find(".catalog__displayedItem__columnFotomainLnk").width(.66 * e.closest(".catalog__displayedItem").width() - 16),
            e.find(".catalog__displayedItem__columnFotomainLnk").stop(!0, !0).animate({
                width: e.closest(".catalog__displayedItem").width() / 2
            }, 300),
            e.find(".showcaseTiles").width(e.closest(".catalog__displayedItem ").width() / 2)
        }
    }),
    $(".content__mainColumn").on("mouseleave", ".js__showcaseTiles_cover", function() {
        var e = $(this);
        e.find(".showcaseTiles__item").length && (e.find(".catalog__displayedItem__columnFotomainLnk").stop(!0, !0).animate({
            width: .66 * e.closest(".catalog__displayedItem").width() - 16
        }, 300, function() {
            e.closest(".catalog__displayedItemFotomode").removeClass("overflowHidden")
        }),
        e.closest(".catalog__displayedItemFotomode").removeClass("showcaseTiles_open"))
    }),
    $(window).resize(function() {
        $(".catalog__displayedItem__columnFotomainLnk").css("width", "auto"),
        $(".showcaseTiles").width($(".catalog__displayedItem ").width() / 2)
    }),
    $(".content__mainColumn").on("mouseenter", ".js__indexGoods__item__imageSlicer", function() {
        var e = $(this);
        e.closest(".js__indexGoods__item__image").find("img").attr("src", e.attr("data-src")),
        e.closest(".js__indexGoods__item__image").find(".js__indexGoods__item__imageDot.active").removeClass("active"),
        e.closest(".js__indexGoods__item__image").find(".js__indexGoods__item__imageDot:eq(" + e.index() + ")").addClass("active")
    });
    var filter_searchRequest = "", filter_searchText;
    $("#search_form_id").on("keydown keyup change", ".js__superFilter__refill", function() {
        var thisObj = $(this)
          , i = 0
          , filterID = thisObj.attr("data-filterid")
          , filterParamArrayName = eval("filtersArray" + filterID)
          , filterParamArrayMarks = new Object
          , filterQuery = thisObj.val().toLowerCase()
          , filterQueryArray = filterQuery.split(" ")
          , filterQueryArray__maxlength = 1
          , filterQueryOverlap = !1;
        if (filter_searchText = thisObj.val().trim(),
        filter_searchText && "" != filter_searchText) {
            if (filter_searchRequest != filter_searchText) {
                for (filter_searchRequest = filter_searchText,
                thisObj.closest(".spoiledLst__search").find(".js__superFilter__clearSearch").show(); i < filterQueryArray.length; ) {
                    for (var key in filterParamArrayName)
                        filterParamArrayName[key].toLowerCase().indexOf(filterQueryArray[i]) + 1 && (filterParamArrayMarks[key] ? (filterQueryArray__maxlength = filterParamArrayMarks[key] + 1,
                        filterParamArrayMarks[key] = filterQueryArray__maxlength) : filterParamArrayMarks[key] = 1);
                    i++
                }
                for (var key in filterParamArrayName)
                    filterParamArrayMarks[key] == filterQueryArray__maxlength ? ($("#columnBlock__" + filterID + "filter__ID .filterQuery__emptySearchResult").hide(),
                    filterQueryOverlap = !0,
                    $("#columnBlock__" + filterID + "filter__ID input#" + key).parent().show()) : $("#columnBlock__" + filterID + "filter__ID input#" + key).parent().hide();
                filterQueryOverlap || ($("#columnBlock__" + filterID + "filter__ID .filterQuery__emptySearchResult").show(),
                $("#columnBlock__" + filterID + "filter__ID .spoiledLst li").hide())
            }
        } else
            "" == filter_searchRequest && thisObj.closest(".spoiledLst__search").find(".js__superFilter__clearSearch").hide(),
            filter_searchRequest = "",
            $("#columnBlock__" + filterID + "filter__ID .spoiledLst li").show(),
            $("#columnBlock__" + filterID + "filter__ID .filterQuery__emptySearchResult").hide()
    }),
    $("#search_form_id").on("click", ".js__superFilter__clearSearch", function() {
        var e = $(this);
        e.closest(".spoiledLst__search").find(".js__superFilter__refill").val("").change(),
        e.hide()
    }),
    $(".js__spoiledLst__showLink").each(function(e) {
        var t = $(this);
        t.closest(".spoiledLst_cover").hasClass("active") ? (t.attr("title", t.attr("data-captionfalse")).text(t.attr("data-captionfalse")),
        t.closest(".spoiledLst_cover").find(".spoiledLst__search").slideDown(300)) : t.attr("title", t.attr("data-captiontrue")).text(t.attr("data-captiontrue"))
    }),
    $(".content").on("click", ".js__spoiledLst__showLink", function(e) {
        var t = $(this);
        return t.closest(".spoiledLst_cover").hasClass("active") ? (t.closest(".spoiledLst_cover").find(".spoiledLst__hiddenItem").slideUp(300),
        t.attr("title", t.attr("data-captiontrue")).text(t.attr("data-captiontrue")),
        t.closest(".spoiledLst_cover").find(".spoiledLst__search").length && (t.closest(".spoiledLst_cover").find(".js__superFilter__refill").val(""),
        t.closest(".spoiledLst_cover").find("li:not(.spoiledLst__hiddenItem)").slideDown(300),
        t.closest(".spoiledLst_cover").find(".filterQuery__emptySearchResult").slideUp(300),
        t.closest(".spoiledLst_cover").find(".spoiledLst__search").slideUp(300))) : (t.closest(".spoiledLst_cover").find(".spoiledLst__hiddenItem").slideDown(300),
        t.attr("title", t.attr("data-captionfalse")).text(t.attr("data-captionfalse")),
        t.closest(".spoiledLst_cover").find(".spoiledLst__search").length && t.closest(".spoiledLst_cover").find(".spoiledLst__search").slideDown(300, function() {
            t.closest(".spoiledLst_cover").find(".mCustomScrollbar:not(.mCS_no_scrollbar)").length && t.closest(".spoiledLst_cover").find(".js__superFilter__refill").focus()
        })),
        t.closest(".spoiledLst_cover").toggleClass("active"),
        !1
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
    }),
    initDynamicPaginator(),
    $(".js__itemsLoadingCover").on("click", ".js__ajaxListingSelectPageLink", function(e, t) {
        $(this);
        $(".js__itemsLoadingCover .js__goods__items").animate({
            opacity: .3
        }, 300, function() {
            $("html, body").animate({
                scrollTop: $(".js__itemsLoadingCover").offset().top - 65 + "px"
            }, 300)
        })
    })
}),
$(document).ready(function() {
    function e() {
        $("#compareTable__zeroCell").width($("#compareTable__rowHead_clone").width()).height($("#compareTable__columnHead_clone").height()).css({
            "margin-left": -$("#compareTableBox_ID").width() / 2
        })
    }
    function t() {
        $(window).scrollTop() + $(window).height() < $(".compareTableBox_scrollbar").offset().top + $(".compareTableBox_scrollbar").height() ? ($(".compareTableBox_scrollbar .mCSB_scrollTools_horizontal").addClass("attached"),
        $(".compareTableBox_scrollbar .mCSB_scrollTools_horizontal").width($(".compareTableBox").width() - $("#compareTable__rowHead_clone").width()).css({
            "margin-left": $("#compareTable__rowHead_clone").width() / 2 + $(".compareTableBox_scrollbar .mCSB_scrollTools_horizontal").width() / -2
        })) : ($(".compareTableBox_scrollbar .mCSB_scrollTools_horizontal").removeClass("attached"),
        $(".compareTableBox_scrollbar .mCSB_scrollTools_horizontal").width($(".compareTableBox").width() - $("#compareTable__rowHead_clone").width()).css({
            "margin-left": $("#compareTable__rowHead_clone").width()
        }))
    }
    function a() {
        $(window).scrollTop() < $("#compareTableCover_wrapper_ID").offset().top + 115 ? ($("#compareTable__zeroCell").removeClass("attached"),
        $("#compareTable__columnHead_clone").css("top", 0).fadeOut(0)) : ($("#compareTable__zeroCell").addClass("attached"),
        $("#compareTable__columnHead_clone").css("top", $(window).scrollTop() - $("#compareTableCover_wrapper_ID").offset().top).fadeIn(0))
    }
    var s, i, o;
    $("#compareTable_ID").length && ($("#compareTable_ID").width() < $("#compareTableBox_ID").width() ? $("#compareTable_ID").width($("#compareTableBox_ID").width()) : $("#compareTable_ID").css("width", "auto"),
    $("#compareTableCover_wrapper_ID").width($("#compareTable_ID").width()),
    s = "",
    $("#compareTable_ID tbody:eq(0) tr").each(function() {
        s = s + "<tr><th height=" + $(this).height() + ">" + $(this).find("th:eq(0)").html() + "</th></tr>"
    }),
    s = "<tbody>" + s + "</tbody>",
    $("#compareTable_ID tbody:eq(1) tr").each(function() {
        i = "",
        $(this).find("td:eq(0)").hasClass("js__isEqual") && (i = "js__isEqual"),
        s = s + '<tr><td class="compareTable__rowHead ' + i + '" height=' + (+$(this).height() - 18) + ">" + $(this).find("td:eq(0)").html() + "</td></tr>"
    }),
    s = "<table class='compareTable ' id='compareTable__rowHead_clone'>" + s + "</table>",
    $("#compareTableBox_ID").append(s),
    $("#compareTable__rowHead_clone").width($("#compareTable_ID th:eq(0)").width() + 20),
    o = "",
    $("#compareTable_ID tbody tr:eq(0) th").each(function() {
        o = o + '<div class="columnHead_clone__item" style="width:' + $(this).width() + 'px"><div class="compareTable__itemName">' + $(this).find(".compareTable__itemName").html() + "</div><span class=compareTable__itemPrice>" + $(this).find(".js__compareTable__itemPrice").html() + "</span></div>"
    }),
    o = "<div id='compareTable__columnHead_clone'>" + o + "</div>",
    $("#compareTableCover_wrapper_ID").append(o),
    $("#compareTable__columnHead_clone .columnHead_clone__item:eq(0)").html("&nbsp;"),
    $("#compareTableBox_ID").append('<div id="compareTable__zeroCell">&nbsp;</div>'),
    e(),
    $(".compareTable tr").hover(function() {
        var e = $(this);
        e.closest("#compareTableBox_ID").find("#compareTable_ID tr:eq(" + ($(this).index() + 1) + ")").addClass("state_hover"),
        e.closest("#compareTableBox_ID").find("#compareTable__rowHead_clone tr:eq(" + ($(this).index() + 1) + ")").addClass("state_hover")
    }, function() {
        var e = $(this);
        e.closest("#compareTableBox_ID").find("#compareTable_ID tr:eq(" + ($(this).index() + 1) + ")").removeClass("state_hover"),
        e.closest("#compareTableBox_ID").find("#compareTable__rowHead_clone tr:eq(" + ($(this).index() + 1) + ")").removeClass("state_hover")
    }),
    $(".compareTable tr").click(function() {
        var e = $(this);
        e.closest("#compareTableBox_ID").find("#compareTable_ID tr:eq(" + ($(this).index() + 1) + ")").toggleClass("state_click"),
        e.closest("#compareTableBox_ID").find("#compareTable__rowHead_clone tr:eq(" + ($(this).index() + 1) + ")").toggleClass("state_click")
    }),
    $(".compareTableBox_scrollbar").mCustomScrollbar({
        axis: "x",
        mouseWheel: {
            enable: !1
        }
    }),
    t(),
    a(),
    $("#compareTable_ID td").length == $("#compareTable_ID td.js__isEqual").length ? ($(".js__compareDifference").hide(),
    $(".js__compareFull").hide()) : ($(".js__compareDifference").click(function() {
        var e = $(this);
        return e.hasClass("active") || ($(".js__compareFull").removeClass("active"),
        e.addClass("active"),
        $("td.js__isEqual").slideUp(300)),
        !1
    }),
    $(".js__compareFull").click(function() {
        var e = $(this);
        return e.hasClass("active") || ($(".js__compareDifference").removeClass("active"),
        e.addClass("active"),
        $("td.js__isEqual").slideDown(300)),
        !1
    })),
    window.onscroll = function() {
        t(),
        a()
    }
    ,
    window.onresize = function() {
        $("#compareTable_ID").width() < +$("#compareTableBox_ID").width() + 50 ? $("#compareTable_ID").width($("#compareTableBox_ID").width()) : $("#compareTable_ID").css({
            width: "auto",
            "min-width": $("#compareTableBox_ID").width()
        }),
        $("#compareTableCover_wrapper_ID").width(1.2 * $("#compareTable_ID").width()).delay(10).width($("#compareTable_ID").width()),
        $("#compareTable__rowHead_clone tbody:eq(0) th").delay(10).height($("#compareTable_ID th:eq(1)").height()),
        $("#compareTable__rowHead_clone td").width($("#compareTable_ID th:eq(0)").width()),
        $("#compareTable__rowHead_clone").width($("#compareTable_ID tbody:eq(1) td.compareTable__rowHead").width() + 10),
        $("#compareTable_ID tbody:eq(1) tr").each(function() {
            $("#compareTable__rowHead_clone tbody:eq(1) tr:eq(" + $(this).index() + ") .compareTable__rowHead").height($(this).find(".compareTable__rowHead").height() - 1)
        }),
        $("#compareTable_ID tbody tr:eq(0) th").each(function() {
            $("#compareTable__columnHead_clone .columnHead_clone__item:eq(" + $(this).index() + ")").width($(this).width())
        }),
        $("#compareTable_ID tbody:eq(1) tr").each(function() {
            s = s + '<tr><td class="compareTable__rowHead" height=' + (+$(this).height() - 18) + ">" + $(this).find("td:eq(0)").html() + "</td></tr>"
        }),
        e(),
        t(),
        a()
    }
    ,
    $("#compareTable_ID tbody:eq(1) tr").each(function() {
        $("#compareTable__rowHead_clone tbody:eq(1) tr:eq(" + $(this).index() + ") .compareTable__rowHead").height($(this).find(".compareTable__rowHead").height() - 1)
    }))
});
var ua = window.navigator.userAgent, msie = ua.indexOf("MSIE "), user_url, donotcall_init;
function consumables_change(e, t, a, s) {
    e = e || 1;
    e = parseInt(e);
    t = t || 0,
    s = parseInt(s) || 0,
    a = a || "page";
    jQuery_ajax_set_encoding("windows-1251");
    var i, o = "";
    switch (e) {
    case 1:
        i = "brand",
        o = "device_type",
        $("#consumables_item_code").html('<option value="">' + $("#consumables_item_code option:eq(0)").text() + "</option>").delay(500).attr("disabled", "disabled");
        break;
    case 2:
        i = "device_type",
        o = "item_code",
        $("#consumables_item_code").removeClass("js__isCompleted");
        break;
    case 3:
        i = "item_code",
        o = "",
        0;
        break;
    default:
        i = "brand",
        o = "device_type",
        $("#consumables_item_code").html('<option value="">' + $("#consumables_item_code option:eq(0)").text() + "</option>").delay(500).attr("disabled", "disabled")
    }
    var n, e = document.getElementById("consumables_" + i);
    "" != o && ((n = document.getElementById("consumables_" + o)).disabled = "");
    var _, r, l = {
        ajax: 1,
        mode: o,
        cat_id: s
    }, d = document.forms.consumables_select.elements;
    for (_ in d)
        "select-one" == d[_].type && (l[d[_].name] = d[_].value);
    return "" != o && $.post("/consumables.php", l, function(e, t, a) {
        0 < msie ? $("#consumables_" + o).html(e) : n.innerHTML = e
    }, "html"),
    "form" == a ? (r = document.getElementById("selectConsumables_gotoID"),
    "" == o && 1 == t ? (a = document.getElementById("consumables_item_code"),
    r.href = "/consumables/" + a.value) : r.href = "/consumables/",
    r.href += "?cat_id=" + s) : ((r = document.getElementById("consumables_select")).action = "" == o && 1 == t ? "/consumables/" + e.value : "/consumables/",
    r.action += "?cat_id=" + s),
    !1
}
function consumables_cars_change(e, t, a, s) {
    e = e || 1;
    e = parseInt(e);
    t = t || 0,
    a = a || "page",
    s = parseInt(s) || 0;
    jQuery_ajax_set_encoding("windows-1251");
    var i, o = "";
    switch (e) {
    case 1:
    default:
        i = "brand",
        o = "model_short",
        $("#consumables_year").html('<option value="">' + $("#consumables_year option:eq(0)").text() + "</option>").delay(500).attr("disabled", "disabled"),
        $("#consumables_car_id").html('<option value="">' + $("#consumables_car_id option:eq(0)").text() + "</option>").delay(500).attr("disabled", "disabled");
        break;
    case 2:
        i = "model_short",
        o = "year",
        $("#consumables_year").html('<option value="">' + $("#consumables_year option:eq(0)").text() + "</option>"),
        $("#consumables_car_id").html('<option value="">' + $("#consumables_car_id option:eq(0)").text() + "</option>").attr("disabled", "disabled");
        break;
    case 3:
        i = "year",
        o = "car_id",
        0;
        break;
    case 4:
        i = "car_id",
        o = "",
        0
    }
    var n, e = document.getElementById("consumables_" + i);
    "" != o && ((n = document.getElementById("consumables_" + o)).disabled = "");
    var _, r, l = {
        ajax: 1,
        mode: o,
        cat_id: s
    }, d = document.forms.consumables_select.elements;
    for (_ in d)
        "select-one" == d[_].type && (l[d[_].name] = d[_].value);
    return "" != o && $.post("/consumables_cars.php", l, function(e, t, a) {
        0 < msie ? $("#consumables_" + o).html(e) : n.innerHTML = e
    }, "html"),
    "form" == a ? (r = document.getElementById("selectConsumablesAuto_gotoID"),
    "" == o && 1 == t ? (a = document.getElementById("consumables_car_id"),
    r.href = "/consumables_cars/" + a.value) : r.href = "/consumables_cars/",
    r.href += "?cat_id=" + s) : ((r = document.getElementById("consumables_select")).action = "" == o && 1 == t ? "/consumables_cars/" + e.value : "/consumables_cars/",
    r.action += "?cat_id=" + s),
    !1
}
function toggle_photo_action(e, s, t) {
    var a = {
        0: "reload",
        6: "confirm_delete",
        7: "delete",
        11: "rotate_ccw",
        12: "rotate_cw"
    }
      , e = parseInt(e) || 0
      , s = parseInt(s) || 0
      , t = parseInt(t) || 0;
    return jQuery_ajax_set_encoding(),
    0 === e ? $.get("/images_ajax.php", {
        action: a[e],
        gallery_id: s,
        image_id: t
    }, function(e, t, a) {
        $("#images_container").html(e),
        popup_close(),
        popupShadow_close()
    }, "html") : $.get("/images_ajax.php", {
        action: a[e],
        gallery_id: s,
        image_id: t
    }, function(e, t, a) {
        "0" == e.error ? toggle_photo_action(0, s) : ($("#photos_actions_errors").html(e.error_text),
        $("#photos_actions_errors").addClass("error"),
        $("#photos_actions_errors").removeClass("noDisplay"),
        setTimeout(void $("#photos_actions_errors").addClass("noDisplay"), 1e4))
    }, "json"),
    !1
}
function toggle_fileTickets_action(s, e, i, o, n, _) {
    var r = (s = s).closest(".js__fileUpload")
      , e = e
      , i = i
      , o = o || 0
      , n = n || 0
      , _ = _ || 0;
    switch (jQuery_ajax_set_encoding(),
    e) {
    case "reload_tmp":
        $.get("/feedback_upload.php", {
            action: e,
            ticket_id: i,
            message_id: _
        }, function(e, t, a) {
            r.find(".js__fileUpload__listContainer").html(e)
        }, "html");
        break;
    case "delete_tmp":
        $.get("/feedback_upload.php", {
            action: e,
            ticket_id: i,
            message_id: _,
            doc_id: o,
            doc_key: n
        }, function(e, t, a) {
            "0" == e.error ? (toggle_fileTickets_action(s, "reload_tmp", i, o, n, _),
            setTimeout(void r.find(".js__fileUpload__message").removeClass("noDisplay").html("Документ был успешно удалён"), 4e3)) : (r.find(".js__fileUpload__message").html(e.error_text),
            r.find(".js__fileUpload__message").addClass("error"),
            r.find(".js__fileUpload__message").removeClass("noDisplay"),
            setTimeout(void r.find(".js__fileUpload__message").addClass("noDisplay"), 1e4))
        }, "json")
    }
    return !1
}
function basketTimeout() {
    popup_setMessage("Внимание!", '<p>Данные на странице могли устареть. Обновите, пожалуйста, страницу.</p><a href="/basket.html" class="button button__orange" title="Обновить страницу">Обновить</a>', "warning"),
    popup_open("popup_message", 0, !0)
}
function basketTimeoutStart() {
    setTimeout(basketTimeout, 27e5)
}
function basketMapSetPickpoints() {
    var e, t, o = [];
    if ($(".js__productpage_pickupPoint_dynamic tr").each(function() {
        var e = 0
          , t = $(this).find(".js__pickupPoint").attr("id")
          , a = "<div style='padding: 5px 5px 0'>" + $(this).find(".js__multicart__orderoption__itemLineData_1").html()
          , e = $(this).find(".js__pickupPoint").attr("disabled") ? (a += "</div>",
        0) : (a = a + " <br> <b>Дата доставки: </b>" + $(this).find(".js__multicart__orderoption__itemLineData_2").html() + "<br> <b>Стоимость самовывоза: </b>" + $(this).find(".js__multicart__orderoption__itemLineData_3").html() + "<br><a href='" + t + "' class='button button__orange js__linkAtMap js__linkAsLabel ' title='Заберу заказ здесь' data-for='" + t + "' style='margin: 10px 0 0'>Выбрать этот пункт выдачи</a> </div>",
        1)
          , s = $(this).find(".js__pickupPoint").attr("data-geo-lat")
          , i = $(this).find(".js__pickupPoint").attr("data-geo-lon");
        o.push({
            activity: e,
            balloonContent: a,
            coords: [s, i],
            otPickupPointID: t
        })
    }),
    window.myBasketPickPointsMap) {
        for (var a = 0, s = o.length; a < s; a++)
            window.myBasketPickPointsMap.geoObjects.add(new ymaps.Placemark(o[a].coords,{
                balloonContent: o[t = a].balloonContent,
                otPickupPointID: o[t].otPickupPointID,
                otPickupPointActivity: o[t].activity
            },(e = void 0,
            {
                draggable: !(e = "/templates/images/icons/ic__yaicon_gray.png"),
                hideIconOnBalloonOpen: !1,
                iconLayout: "default#image",
                iconImageHref: e = 1 == o[a].activity ? "/templates/images/icons/ic__yaicon.png" : e,
                iconImageSize: [33, 32],
                iconImageOffset: [-15, -32]
            })));
        window.myBasketPickPointsMap.setBounds(window.myBasketPickPointsMap.geoObjects.getBounds(), {
            checkZoomRange: !0
        })
    }
}
function infoTable__groupManage_Block(e) {
    e.find(".js__infoTable__groupManage input[type=submit]").prop("disabled", "disabled").addClass("disabled"),
    e.find(".js__infoTable__groupManage a.js__ajaxExchange").addClass("disabled")
}
function infoTable__groupManage_Unblock(e) {
    e.find(".js__infoTable__groupManage input[type=submit]").prop("disabled", !1).removeClass("disabled"),
    e.find(".js__infoTable__groupManage a.js__ajaxExchange").removeClass("disabled")
}
function infoTable__itemManage_check(e) {
    e.find(".js__checkHashItem").length;
    (0 < e.find(".js__checkHashItem:checked").length ? infoTable__groupManage_Unblock : infoTable__groupManage_Block)(e)
}
"" != $(".js__selectConsumables:eq(0)").val() && $(".js__selectConsumables:eq(0)").val(),
$(".js__selectConsumables").on("change", function(e, t) {
    var a = $(this);
    consumables_change(a.attr("data-type"), a.attr("data-last-select"), a.attr("data-form-source"), a.attr("data-cat-id"))
}),
$(".js__selectConsumablesAuto").on("change", function(e, t) {
    var a = $(this);
    consumables_cars_change(a.attr("data-type"), a.attr("data-last-select"), a.attr("data-form-source"), a.attr("data-cat-id"))
}),
userpages && (user_url = window.location.pathname,
$(".js__userpagesMenu .iCM__itemL2__link").each(function() {
    $(this).attr("href") == user_url && $(this).addClass("active")
})),
$("body").on("click", ".js__galery_uploadItem__open", function() {
    return $("#js__fileUpload_element").click(),
    !1
}),
$("body").on("click", ".js__galery_uploadItem_rotate", function() {
    var e = $(this);
    return toggle_photo_action(12, e.attr("data-galleryid"), e.attr("data-imageid")),
    !1
}),
$("body").on("click", ".js__galery_uploadItem_contrRotate", function() {
    var e = $(this);
    return toggle_photo_action(11, e.attr("data-galleryid"), e.attr("data-imageid")),
    !1
}),
$("body").on("click", ".js__galery_uploadItem_removeTrue", function() {
    var e = $(this);
    return toggle_photo_action(7, e.attr("data-galleryid"), e.attr("data-imageid")),
    !1
}),
$("body").on("change", ".js__newGeneratedPassEvent", function() {
    var e = $(this);
    if (e.prop("checked")) {
        for (var t = 0, a = ""; t <= getRandomInt(8, 12); )
            a += "123456789ABCDEHKLMNPRSTWXZabcdehklmnprstwxz"[getRandomInt(1, 42)],
            t++;
        $(".js__newGeneratedPass").val(a),
        a = "",
        e.closest(".js__formBox").find(".js__showHidepass").hasClass("active") || e.closest(".js__formBox").find(".js__showHidepass").click()
    } else
        e.closest(".js__formBox").find(".js__showHidepass").click(),
        $(".js__newGeneratedPass").val("").removeClass("js__isCompleted").change()
}),
$("body").on("click", ".js__showHidepass", function() {
    var e = $(this);
    return e.hasClass("active") ? (e.toggleClass("active").attr("title", $(this).attr("data-captiontrue")),
    e.parent().find(".input__text").attr("type", "password").focus(),
    e.parent().find(".js__passwordView").attr("type", "password").focus()) : (e.toggleClass("active").attr("title", $(this).attr("data-captionfalse")),
    e.parent().find(".input__text").attr("type", "text").focus(),
    e.parent().find(".js__passwordView").attr("type", "text").focus()),
    !1
}),
$(".js__icCalendar").on("click", function(e) {
    return $(this).closest(".js__formBox").find(".js__input__calendar").focus(),
    !1
}),
$("body").on("click", ".js__captcha_img", function() {
    $(this).closest(".js__formBox ").find("#captcha").focus()
}),
$(document).ready(function() {
    $("#datepicker_birthday__ID").datepicker({
        yearRange: "-100:+0",
        changeMonth: !0,
        changeYear: !0,
        dateFormat: "dd.mm.yy",
        onChangeMonthYear: function(e, t, a) {
            var s = $("#datepicker_birthday__ID").val();
            "" != $.trim(s) && (e = t + "." + a.currentDay + "." + e,
            $("#datepicker_birthday__ID").val($.datepicker.formatDate("dd.mm.yy", new Date(e))))
        }
    }),
    $("#datepicker_birthday__ID").datepicker($.datepicker.regional.ru),
    $(".js__onBonusPage_toggleRows").on("click", function(e) {
        $(this).closest("tbody").find(".hiddenTD td").fadeToggle(300)
    }),
    $(".js__copyItempartner_2ClipBuffer").click(function() {
        var e, t = "?";
        $("#itemsAdressToFriends").val() ? (~$("#itemsAdressToFriends").val().indexOf("?") ? (t = "&",
        ~$("#itemsAdressToFriends").val().indexOf("#") ? (e = $("#itemsAdressToFriends").val().split("#"),
        $("#itemsAdressToFriends").val(e[0] + t + "friend_id=" + $("#itemsAdressToFriends").attr("data-clientid") + "#" + e[1])) : $("#itemsAdressToFriends").val($("#itemsAdressToFriends").val() + t + "friend_id=" + $("#itemsAdressToFriends").attr("data-clientid"))) : ~$("#itemsAdressToFriends").val().indexOf("#") ? (e = $("#itemsAdressToFriends").val().split("#"),
        $("#itemsAdressToFriends").val(e[0] + t + "friend_id=" + $("#itemsAdressToFriends").attr("data-clientid"))) : $("#itemsAdressToFriends").val($("#itemsAdressToFriends").val() + t + "friend_id=" + $("#itemsAdressToFriends").attr("data-clientid")),
        $("#js__itemsAdressToFriends_link").click()) : (popup_setMessage("Ошибка", "<p>Вы не ввели ссылку на понравившийся товар</p><a href='#' class='js__popup__close button button__orange' title='Закрыть'>Закрыть</a>"),
        popup_open("popup_message", 0, !0))
    }),
    $(".js__clientDataSave").click(function() {
        var e = $("#ot_datepicker_birthdayID").val().split(".");
        if (2012 <= (e = +e[2]) && !$("#ot_datepicker_birthdayID").attr("disabled"))
            return popup_setMessage("Ошибка", "<p>Выбран <b>" + e + "</b> год. <br>Проверьте, правильно ли это.</p><a href='#' class='js_popup__windowClose otButton_orange' title='Закрыть'>Закрыть</a>"),
            popup_open("popup_message", 0, !0),
            !1
    }),
    $(".js__statsPageTableHidder__link ").click(function() {
        $(this).closest(".js__statsPageTableHidder").find(".noDisplay").slideToggle(300)
    }),
    $(".js__close_renewMobileNumber").click(function() {
        return $.cookie("renew_mobile_number_message", "1", {
            expires: 50,
            path: "/",
            domain: ".onlinetrade.ru"
        }),
        $(".js__renewMobileNumber").slideUp(300),
        !1
    }),
    $("#boughtItemsSelectType_ID").on("change", function(e, t) {
        2 == $(this).val() ? $(".js__boughtItemsSelect__category").fadeOut(300, function() {
            $(".js__boughtItemsSelect__query").fadeIn(300)
        }) : $(".js__boughtItemsSelect__query").fadeOut(300, function() {
            $(".js__boughtItemsSelect__category").fadeIn(300)
        })
    }),
    $(".js__radioWithExtendedFileds input:radio").on("change", function() {
        $(".formLine.active").removeClass("active").find(".formLine").addClass("disabled").find(".input__text").attr("disabled", "disabled"),
        $(this).closest(".formLine").addClass("active").find(".formLine").removeClass("disabled").find(".input__text").attr("disabled", !1).focus()
    })
}),
$("body").on("click", ".js__feedback_files__open", function() {
    var e = $(this);
    return e.closest(".js__fileUpload").find(".js__fileUpload_element").data("liteUploader"),
    e.closest(".js__fileUpload").find(".js__fileUpload_element").click(),
    !1
}),
$("body").on("click", ".js__docsItem_remove", function() {
    var e = $(this)
      , t = e.attr("data-actiontypedelete");
    return toggle_fileTickets_action(e, t, e.attr("data-ticketid"), e.attr("data-docid"), e.attr("data-dockey"), e.attr("data-messageid")),
    !1
}),
$(document).ready(function() {
    $(".js__fileUpload_element").each(function() {
        var a = $(this)
          , s = a.closest(".js__fileUpload");
        a.liteUploader({
            script: "/feedback_upload.php",
            params: {
                action: "new_tmp",
                ticket_id: s.find(".js__ticket_id").val()
            }
        }).on("lu:progress", function(e, t) {
            s.find(".js__fileUpload__message").addClass("noDisplay"),
            s.find(".js__fileUpload__progress").html("Загрузка файла:" + t + "%"),
            s.find(".js__fileUpload__progress").removeClass("noDisplay")
        }).on("lu:success", function(e, t) {
            "string" == typeof t && (t = $.parseJSON(t)),
            s.find(".js__fileUpload__progress").html(""),
            s.find(".js__fileUpload__progress").addClass("noDisplay"),
            s.find(".js__fileUpload__message").html(""),
            s.find(".js__fileUpload__message").addClass("noDisplay"),
            "0" == t.error ? (s.find(".js__fileUpload__message").html("Документ загружен"),
            s.find(".js__fileUpload__message").addClass("success"),
            s.find(".js__fileUpload__message").removeClass("error")) : (s.find(".js__fileUpload__message").html(t.error_text),
            s.find(".js__fileUpload__message").addClass("error"),
            s.find(".js__fileUpload__message").removeClass("success")),
            s.find(".js__fileUpload__message").removeClass("noDisplay"),
            toggle_fileTickets_action(a, "reload_tmp", s.find(".js__ticket_id").val(), "", "", "")
        }).on("lu:errors", function(e, t) {
            globalErrors = t,
            $.each(t, function(e, a) {
                0 < a.errors.length && (isErrors = !0,
                $.each(a.errors, function(e, t) {
                    s.find(".js__fileUpload__listContainer").append("<br />ERROR! File: " + a.name + " - Info: " + JSON.stringify(t))
                }))
            })
        }).on("lu:fail", function(e, t) {
            globalErrors = e
        })
    }),
    $(".js__feedback__topic").on("change", function(e, t) {
        var a = $(this)
          , s = a.val();
        0 != a.val() ? $.ajax({
            type: "POST",
            url: "/ajax.php",
            data: {
                handler: "topicselect",
                itemid: s
            }
        }).done(function(e) {
            var t;
            "" != (e = $.parseJSON(e)).topics ? ($("#feedback_subtopic_ID").html(e.topics),
            $("#feedback_subtopic_ID").closest(".formLine").slideDown(300)) : "feedback_subtopic_ID" != a.attr("id") && $("#feedback_subtopic_ID").html("").closest(".formLine").slideUp(300),
            "" != e.fields ? $(".js__feedback_additionalfields").html(e.fields).slideDown(300) : $(".js__feedback_additionalfields").slideUp(300, function() {
                $(this).html("")
            }),
            "" != e.hint || "" != e.schedule ? ((t = "") != e.schedule && (t = "<b>" + e.schedule + "</b><br>"),
            t += e.hint,
            $(".js__clientTips").html(t).slideDown(300)) : $(".js__clientTips").slideUp(300, function() {
                $(this).html("")
            })
        }).fail(function() {
            $("#feedback_subtopic_ID").html("").closest(".formLine").slideUp(300)
        }) : ($(".js__clientTips").slideUp(300, function() {
            $(this).html("")
        }),
        $(".js__feedback_additionalfields").slideUp(300, function() {
            $(this).html("")
        }),
        "feedback_topic_ID" == a.attr("id") && $("#feedback_subtopic_ID").html("").closest(".formLine").slideUp(300))
    }),
    $(".js__feedbackWithCaptha__send").click(function() {
        var e = $(this);
        if (e.hasClass("send"))
            return !1;
        grecaptcha.ready(function() {
            grecaptcha.execute("6LcMiW0UAAAAAGcVB7FsJsdYqVE4cjKXZZzYwhSw", {
                action: "verify"
            }).then(function(e) {
                var t = $("#feedback__send__ID");
                $("#otv3_token_field").val(e),
                t.submit()
            })
        }),
        e.addClass("send").val("Обращение отправляется...").css("opacity", "0.5")
    }),
    $(".js__feedback__send").click(function() {
        $(this);
        if ($(this).hasClass("send"))
            return !1;
        $(this).addClass("send").val("Отправляется").css("opacity", "0.5")
    })
}),
$(".js__basketServicesManage").on("change", function() {
    $(this);
    var e = "";
    $(".js__basketServicesManage").each(function() {
        $(this).prop("checked") && (e = e + $(this).prop("value") + ",")
    }),
    e = e.replace(/(^\s*,)|(,\s*$)/g, ""),
    $(".js__ajaxExchange[data-handler=basketservicesmanage]").attr("data-itemid", e).click()
}),
$("#delivery_date").on("change", function(e, t) {
    var a;
    $("#delivery_period").length ? ($.ajaxSetup({
        beforeSend: function(e) {
            e.overrideMimeType("text/plain; charset=windows-1251")
        }
    }),
    a = $("#delivery_date").val(),
    $.post("/ajax.php", {
        handler: "basketdeliveryperiod",
        delivery_date: a
    }, function(e) {
        e ? ($("#delivery_period").html(e).attr("disabled", !1),
        $("#delivery_period").closest(".formLine").removeClass("disabled")) : ($("#delivery_period").html("<option></option>").attr("disabled", "disabled"),
        $("#delivery_period").closest(".formLine ").addClass("disabled"))
    }, "html")) : $("#delivery_date option:selected").hasClass("js__basket_fast_pick") ? $("#fast_pick__ID").closest(".formLine").slideDown(300, function() {
        $(this).removeClass("noDisplay")
    }) : $("#fast_pick__ID").closest(".formLine").slideUp(300, function() {
        $(this).addClass("noDisplay")
    }),
    $(this).closest("form").find(".js__formBoxMainButton").val("Заказать на " + $(this).find("option:selected").text())
}),
$(".js__checkHashItem_Manage").each(function() {
    infoTable__itemManage_check($(this).closest("form"))
}),
$(".js__checkHashItem_Manage").on("change", function() {
    var e = $(this);
    e.prop("checked") ? (infoTable__groupManage_Unblock(e.closest("form")),
    e.closest("form").find(".js__checkHashItem:enabled").prop("checked", !0).button("refresh"),
    e.closest("form").find(".js__checkHashItem_Manage").prop("checked", !0).button("refresh")) : (infoTable__groupManage_Block(e.closest("form")),
    e.closest("form").find(".js__checkHashItem").prop("checked", !1).button("refresh"),
    e.closest("form").find(".js__checkHashItem_Manage").prop("checked", !1).button("refresh"))
}),
$(".js__checkHashItem").on("change", function() {
    infoTable__itemManage_check($(this).closest("form"))
}),
$("#delivery_time__ID").on("change", function() {
    var e = $(this);
    e.prop("checked") ? (e.closest(".formLine__section").find(".js__formLine_deliveryTime.noDisplay").slideDown(300),
    $("#delivery_time_text__ID").focus()) : e.closest(".formLine__section").find(".js__formLine_deliveryTime.noDisplay").slideUp(300)
}),
$("#recipient_link__ID").on("change", function() {
    var e = $(this);
    e.prop("checked") ? (e.closest(".js__formBox").find(".js__formLine_recipient.noDisplay").slideDown(300),
    $("#recipient_contact__ID").focus()) : e.closest(".js__formBox").find(".js__formLine_recipient.noDisplay").slideUp(300)
}),
$(".js__noKPP_check").on("change", function() {
    $(this).prop("checked") ? ($("#js__kppMandatoryMark__ID").hide(),
    $("#kpp").prop("disabled", !0)) : ($("#js__kppMandatoryMark__ID").show(),
    $("#kpp").prop("disabled", !1))
}),
$(".js__call_time_enable").on("change", function() {
    var e = $(this);
    e.prop("checked") ? (e.closest(".js__formBox").find(".js__formLine_callTimeEnable.noDisplay").slideDown(300),
    $("#call_time").focus()) : e.closest(".js__formBox").find(".js__formLine_callTimeEnable.noDisplay").slideUp(300)
}),
$("#notify_sms__ID").length && ($("#notify_sms__ID").on("change", function() {
    var e = $(this);
    e.prop("checked") ? e.closest(".formLine__section").find("#sms_time__ID").prop({
        disabled: !1
    }) : e.closest(".formLine__section").find("#sms_time__ID").prop({
        disabled: !0
    })
}),
donotcall_init = $("#notify_sms__ID").attr("data-cabinetnotify"),
"false" == donotcall_init && (donotcall_init = !1)),
$(".js__donotcallRadio").on("change", function() {
    switch ($(this).val()) {
    case "0":
        $("#notify_sms__ID").removeProp("disabled").prop({
            checked: donotcall_init
        }),
        $("#notify_sms__ID").checkboxradio("refresh"),
        $("#notify_sms__ID").show(0).parent().find("label").show(0),
        $("#cellphoneComment__ID").hide(0),
        $(".js__phoneLines.noDisplay").slideDown(300, function() {
            $(this).removeClass("noDisplay")
        }),
        $(".js__formLine_recipient").length || $(".js__additionalInfoHeader.noDisplay").slideDown(300, function() {
            $(this).removeClass("noDisplay")
        }),
        $("#additional_info__ID").attr("disabled", !1).closest(".formLine.noDisplay").slideDown(300, function() {
            $(this).removeClass("noDisplay")
        });
        break;
    case "1":
        "true" == $("#notify_sms__ID").attr("data-isworker") || ($("#notify_sms__ID").prop({
            disabled: !0,
            checked: !0
        }).change(),
        $("#notify_sms__ID").hide(0).parent().find("label").hide(0),
        $("#cellphoneComment__ID").show(0)),
        $(".js__phoneLines").slideUp(300, function() {
            $(this).addClass("noDisplay")
        }),
        $(".js__formLine_recipient").length || $(".js__additionalInfoHeader").slideUp(300, function() {
            $(this).addClass("noDisplay")
        }),
        $("#additional_info__ID").attr("disabled", "disabled").val("").closest(".formLine").slideUp(300, function() {
            $(this).addClass("noDisplay")
        })
    }
}),
$(".js__bankDetails").on("change", function() {
    "0" === $(this).val() ? $("#details_0Cover").slideDown(300) : $("#details_0Cover").slideUp(300)
}),
$(".js__userAddresses").on("change", function() {
    "0" === $(this).val() ? $("#address_0Cover__ID").slideDown(300) : $("#address_0Cover__ID").slideUp(300)
});
var cartSetFullMode = document.getElementsByClassName("js__cartSetFullMode");
$(".js__cartCertificate__link").click(function(e) {
    return $(".js__cartCertificate").slideToggle(400),
    $(this).toggleClass("active"),
    !1
}),
$(".js__pickupPoints").on("change", ".js__pickupPointChange", function(e, t) {
    var a = $(this);
    $(".js__pickupPoints").animate({
        opacity: 0
    }, 300, function() {
        $("html, body").animate({
            scrollTop: $("#basket_pickup__ID").offset().top - 65 + "px"
        }, 300, function() {
            $(".js__remotePickPoints__sliderManage").hasClass("active") && toggleElemStation($(".js__remotePickPoints__sliderManage")),
            $(".js__productpage_pickupPoint_dynamic").slideUp(1)
        });
        var e = a.closest("tr").detach()
          , t = $(".js__productpage_pickupPoint_static tr").detach();
        $(".js__productpage_pickupPoint_dynamic").prepend(t),
        $(".js__productpage_pickupPoint_static").prepend(e),
        $(".js__pickupPoints").animate({
            opacity: 1
        }, 300)
    }),
    1 < $(".js__pickupPoint").length && $(".js__ajaxSingleExchange[data-handler=basketmorepickup]").removeClass("noDisplay")
}),
$(document).ready(function() {
    $.tablesorter.addParser({
        id: "price",
        is: function(e, t, a, s) {
            return !1
        },
        format: function(e, t, a, s) {
            return $(a).attr("data-price") || e
        },
        parsed: !1,
        type: "numeric"
    }),
    $("#js__cartItemsTable_ID").tablesorter({
        headers: {
            3: {
                sorter: "price"
            },
            5: {
                sorter: "price"
            }
        }
    }),
    $(".js__basketRecalc").click(function() {
        return !$(this).hasClass("send") && void grecaptcha.ready(function() {
            grecaptcha.execute("6LcMiW0UAAAAAGcVB7FsJsdYqVE4cjKXZZzYwhSw", {
                action: "verify"
            }).then(function(e) {
                var t = $("#basketItems__ID");
                $("#basketItems__ID").attr("action", $("#basketItems__ID").attr("action") + "&recalculate=1"),
                $("#otv3_token_field").val(e),
                t.submit()
            })
        })
    }),
    $("#basketpickupPointsMap__ID").on("click", ".js__linkAtMap", function() {
        $(".js__preloadAllPickpoinst.active").click()
    }),
    $(".js__linkSubUrban").on("click", function() {
        var e = {}
          , t = {}
          , a = $(".header__citySelectLink").text()
          , s = $(this).text();
        window.yaCounter234640 && (userid ? window.yaCounter234640.reachGoal("basketChangeSubUrban_client") : window.yaCounter234640.reachGoal("basketChangeSubUrban"),
        t[s] = {
            userid: userid
        },
        e[a] = t,
        window.yaCounter234640.userParams({
            basketCityChange: e
        }))
    }),
    $("#popup_message").on("click", ".js__linkDeleteBasketItem", function() {
        window.yaCounter234640 && window.yaCounter234640.reachGoal("BASKETREMOVE")
    }),
    $("body").on("click", ".js__linkChangeBasket", function() {
        window.yaCounter234640 && window.yaCounter234640.reachGoal("basket__changeBasket")
    }),
    $("body").on("click", ".js__popup_addedToCart__openShiftPanel", function() {
        window.yaCounter234640 && window.yaCounter234640.reachGoal("basketShiftPanelOpen")
    })
});
var requestid = ""
  , i = 0;
!function(o) {
    o.widget("custom.combobox", {
        _create: function() {
            this.wrapper = o("<span>").addClass("custom-combobox").insertAfter(this.element),
            this.element.hide(),
            this._createAutocomplete(),
            this._createShowAllButton()
        },
        _createAutocomplete: function() {
            var e = this.element.children(":selected")
              , e = e.val() ? e.text() : "";
            this.input = o("<input>").appendTo(this.wrapper).val(e).attr("title", "").addClass("custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left").autocomplete({
                delay: 0,
                minLength: 0,
                source: o.proxy(this, "_source")
            }).tooltip({
                tooltipClass: "ui-state-highlight"
            }).on("mouseup", function() {
                o(this).select()
            }),
            o(this).blur(),
            this._on(this.input, {
                autocompleteselect: function(e, t) {
                    t.item.option.selected = !0,
                    this._trigger("select", e, {
                        item: t.item.option
                    })
                },
                autocompletechange: "_removeIfInvalid"
            })
        },
        _createShowAllButton: function() {
            var e = this.input
              , t = !1;
            o("<a>").attr("tabIndex", -1).attr("title", "Показать все варианты, после открытия списка начните печатать название категории.").tooltip().appendTo(this.wrapper).button({
                icons: {
                    primary: "ui-icon-triangle-1-s"
                },
                text: !1
            }).removeClass("ui-corner-all").addClass("custom-combobox-toggle ui-corner-right").mousedown(function() {
                t = e.autocomplete("widget").is(":visible")
            }).on("click", function() {
                e.trigger("focus"),
                e.focus(),
                e.select(),
                t || e.autocomplete("search", "")
            })
        },
        _source: function(t, e) {
            var a = new RegExp(o.ui.autocomplete.escapeRegex(t.term),"i");
            e(this.element.children("option").map(function() {
                var e = o(this).text();
                if (this.value && (!t.term || a.test(e)))
                    return {
                        label: e,
                        value: e,
                        option: this
                    }
            }))
        },
        _removeIfInvalid: function(e, t) {
            var a, s, i;
            t.item ? this.element : (a = "",
            t = this.input.val(),
            s = t.toLowerCase(),
            i = !1,
            this.element.children("option").each(function() {
                if ("default" == o(this).val() && (a = o(this).text()),
                o(this).text().toLowerCase() === s)
                    return !(this.selected = i = !0)
            }),
            i || (this.input.val(a).attr("Элемент", t + " не найден.").tooltip("open"),
            this._delay(function() {
                this.input.tooltip("close").attr("title", "")
            }, 2500),
            this.input.data("ui-autocomplete").term = ""))
        },
        _destroy: function() {
            this.wrapper.remove(),
            this.element.show()
        },
        refresh: function() {
            selected = this.element.children(":selected"),
            this.input.val(selected.text())
        },
        select: function(e, t) {
            t.item.option.selected = !0,
            self._trigger("selected", e, {
                item: t.item.option
            }),
            select.trigger("change")
        },
        change: function(e, t) {
            if (!t.item) {
                var a = new RegExp("^" + o.ui.autocomplete.escapeRegex(o(this).val()) + "$","i")
                  , s = !1;
                if (select.children("option").each(function() {
                    if (o(this).text().match(a))
                        return !(this.selected = s = !0)
                }),
                !s)
                    return o(this).val(""),
                    select.val(""),
                    input.data("autocomplete").term = "",
                    !1
            }
        }
    })
}(jQuery);
var filter_url_obj = {};
function parse_filter_url() {
    var e = window.location.search.substr(1).split("&");
    filter_url_obj = {};
    for (var t = 0; t < e.length; t++) {
        var a = e[t].split("=");
        filter_url_obj[a[0]] = a[1]
    }
}
function reload_action_page_with_params(e, t) {
    var e = e || "cat_id"
      , t = t || 0
      , a = document.getElementById("actionsSelect_" + e + "_ID")
      , s = [];
    if (parse_filter_url(),
    void 0 !== a) {
        if (0 == t) {
            a = a.value;
            filter_url_obj[e] = a,
            s.push(e + "=" + filter_url_obj[e]),
            filter_url_obj.archive && s.push("archive=" + filter_url_obj.archive),
            filter_url_obj.availability && s.push("availability=" + filter_url_obj.availability)
        } else if (1 == t)
            for (var i in $("#js__actionsChkbx_archive_ID").length && (filter_url_obj[e] = js__actionsChkbx_archive_ID.checked ? 1 : 0),
            $("#js__searchPage_availability_ID").length && (filter_url_obj[e] = js__searchPage_availability_ID.checked ? 1 : 0),
            filter_url_obj)
                s.push(i + "=" + filter_url_obj[i]);
        e = "?" + s.join("&");
        window.location.href = e
    }
}
function jQuery_ajax_set_encoding(t) {
    $.ajaxSetup({
        beforeSend: function(e) {
            e.overrideMimeType("text/plain; charset=" + (t || "windows-1251"))
        }
    })
}
function getRandomInt(e, t) {
    return Math.floor(Math.random() * (t - e + 1)) + e
}
function checkingParseJSON(e) {
    var t;
    try {
        t = JSON.parse(e)
    } catch (e) {
        popup_setMessage("", "JSON parse error", "error"),
        popup_open("popup_message", 0, !0)
    }
    return t
}
var searchQuery = function(e, t) {
    $.ajax({
        type: "POST",
        url: "/search_autocomplete.php",
        data: {
            query: e,
            id: t
        }
    }).done(function(e, t, a) {
        e && 2 <= $(".js__header__search__inputText").val().length && $(".js__header__search__inputText").is(":focus") ? (a.getResponseHeader("X-Id") == requestid ? $(".js__fastSearchResultsCover").fadeIn(100, function() {
            $(this).html(e)
        }) : $(".js__fastSearchResultsCover").fadeIn(100),
        $(".js__header__searchCover").addClass("active")) : $(".js__fastSearchResultsCover").fadeOut(100, function() {
            $(".js__header__searchCover").removeClass("active"),
            $(this).html("")
        })
    }).fail(function() {
        return $(".js__fastSearchResultsCover").fadeOut(100, function() {
            $(".js__header__searchCover").removeClass("active"),
            $(this).html("")
        }),
        !1
    })
};
function menu_open() {
    $("body").addClass("js__overlayShadow"),
    $(".js__header__menuCover").fadeIn(300).addClass("active")
}
function menu_close() {
    $("body").delay("300").removeClass("js__overlayShadow"),
    $(".js__header__menuCover.active").fadeOut(300).removeClass("active")
}
function catalogLine__close() {
    $(".js__catalogLine__mainLink").removeClass("active"),
    $(".js__catalogLine__panel").fadeOut(300),
    $(".js__catalogLine__shadow").fadeOut(300)
}
function catmenuAJAX_Upload(e) {
    $.ajax({
        type: "GET",
        url: "/ajax.php",
        data: {
            handler: "menu"
        }
    }).done(function(e) {
        for (key in e = $.parseJSON(e))
            $("#mCM__item__panel_" + key + "__ID").html(e[key]);
        $(".js__catalogLine__mainLink").addClass("js__menuUpdated")
    }).fail(function() {
        $(".js__catalogLine__mainLink").removeClass("js__catalogLine__mainLink").unbind("click")
    })
}
function js__animateGoTo(e) {
    if ($(e.attr("href")).length)
        return "true" != e.attr("data-openspoiler") || $(e.attr("href")).find(".js__toggleElemStation").hasClass("active") || $(e.attr("href")).find(".js__toggleElemStation").click(),
        "true" == e.attr("data-backlighting") && ($(e.attr("href")).removeClass("js__backlightReverse"),
        $(e.attr("href")).addClass("backlight")),
        $("html, body").animate({
            scrollTop: +$(e.attr("href")).offset().top + "px"
        }, 600, function() {
            $(e.attr("href")).addClass("js__backlightReverse")
        }),
        !1
}
function toggleElemStation(e) {
    var t = e.attr("data-togglestationgroup");
    e.hasClass("active") ? t ? $("a[data-togglestationgroup=" + t + "]").each(function() {
        $(this).removeClass("active").attr("title", $(this).attr("data-titlefalse")).text($(this).attr("data-captionfalse")),
        $(this).hasClass("js__ajaxSingleExchange") && $(this).attr("ajaxsingleexchangedone", !0)
    }) : e.removeClass("active").attr("title", e.attr("data-titlefalse")).text(e.attr("data-captionfalse")) : t ? $("a[data-togglestationgroup=" + t + "]").each(function() {
        $(this).addClass("active").attr("title", $(this).attr("data-titletrue")).text($(this).attr("data-captiontrue")),
        $(this).hasClass("js__ajaxSingleExchange") && $(this).attr("ajaxsingleexchangedone", !0)
    }) : e.addClass("active").attr("title", e.attr("data-titletrue")).text(e.attr("data-captiontrue"))
}
function indexActionsCoundown() {
    var e = new Date;
    tme_h = 23 - e.getHours(),
    tme_m = 59 - e.getMinutes(),
    tme_m < 10 && (tme_m = "0" + tme_m),
    tme_s = 59 - e.getSeconds(),
    tme_s < 10 && (tme_s = "0" + tme_s),
    tme = tme_h + ":" + tme_m + ":" + tme_s,
    $(".js__indexActions__side__date").html(tme)
}
function throttle(e, t) {
    var a, s, i = !1;
    function o() {
        if (i)
            return a = arguments,
            void (s = this);
        e.apply(this, arguments),
        i = !0,
        setTimeout(function() {
            i = !1,
            a && (o.apply(s, a),
            a = s = null)
        }, t)
    }
    return o
}
var incdecQuery = function(s, e) {
    $.ajax({
        type: "POST",
        url: "/ajax.php",
        data: {
            handler: "amountprice",
            itemid: s.attr("data-itemid"),
            itemcount: s.val(),
            id: e
        }
    }).done(function(e, t, a) {
        e && a.getResponseHeader("X-Id") == requestid && s.closest(".js__priceCountCover").find(".js__actualPrice").html(e)
    }).fail(function() {
        return !1
    })
};
function showBubble(e, t, a) {
    if ((e = e.closest(".js__bubbleCoverArea")).attr("data-bubbled") || e.attr("data-bubbled", "bubble" + getRandomInt(1, 1e4)),
    !$("#" + e.attr("data-bubbled") + "__ID").length)
        switch (hideAllBubbles(),
        $('<div class="bubble" id="' + e.attr("data-bubbled") + '__ID"title="' + langRu.close + '">' + t + '<span class="filterResult__stickerClose js__bubbleCloseLink" title="' + langRu.close + '"></span></div>').appendTo(e),
        a) {
        case "bottom":
            e.find(".bubble").addClass("bubbleBottom").css({
                top: "100%",
                left: 0
            }).fadeIn(300);
            break;
        case "topright":
            e.find(".bubble").css({
                top: -e.find(".bubble").height(),
                left: -e.find(".bubble").width()
            }).fadeIn(300);
            break;
        default:
            e.find(".bubble").css("top", e.find(".bubble").height() / 2 * -1 - 14).fadeIn(300)
        }
}
function hideAllBubbles() {
    $(".bubble").length && $(".bubble").fadeOut(300, function() {
        $(this).remove()
    })
}
function stickableButton() {
    var e, t;
    ($(".button_pageUp").length || $("#js__previewCompareButton__ID").length) && ($(".content__mainColumn").height() < $(".content__leftColumn").height() && $(".button_pageUp").css("display", "none"),
    $(".button_pageUp").length && (e = +$(".content__leftColumn").offset().top + $(".content__leftColumn").height() - $(window).height(),
    t = $(".js__button_pageUp__cover").offset().top - $(window).height() + 72),
    window.onscroll = function() {
        $(".button_pageUp").length && ($(".content__mainColumn").height() < $(".content__leftColumn").height() ? $(".button_pageUp").css("display", "none") : e = +$(".content__leftColumn").offset().top + $(".content__leftColumn").height() - $(window).height(),
        t = $(".js__button_pageUp__cover").offset().top - $(window).height() + 72,
        !($(window).scrollTop() < e) && $(window).scrollTop() < t ? $(".button_pageUp").addClass("fix") : $(".button_pageUp").removeClass("fix"))
    }
    )
}
function bannersCounter(e) {
    $.ajax({
        type: "GET",
        url: "/ajax.php",
        data: {
            handler: "bannersstat",
            itemid: e
        }
    }).done(function(e) {}).fail(function() {})
}
function bannersCounter_eventer(e) {
    e.slides[e.activeIndex].attributes["data-bnrid"].value && 0 != e.slides[e.activeIndex].attributes["data-bnrid"].value && (bannersCounter(e.slides[e.activeIndex].attributes["data-bnrid"].value),
    e.slides[e.activeIndex].attributes["data-bnrid"].value = 0)
}
function otUIInit() {
    var e;
    $(".ot_customCheckboxGroup").length && $(".ot_customCheckboxGroup").buttonset(),
    $(".ot_customRadioGroup").length && $(".ot_customRadioGroup").checkboxradio(),
    $(".ot_customCheckbox").length && $(".ot_customCheckbox").checkboxradio(),
    $(".ot_customCombobox").length && ($(".ot_customCombobox").combobox(),
    $(".js__comboboxReloadPageByValue").combobox({
        select: function(e, t) {
            parseSetParameters($(this).attr("data-selecttype"), this.value)
        }
    })),
    $(".js__tabs").length && $(".js__tabs").tabs({
        activate: function(e, t) {
            history.scrollRestoration = "manual",
            history.replaceState({}, "", t.newTab.find("a.ui-tabs-anchor").attr("href")),
            "undefined" != typeof map && map.container.fitToViewport()
        }
    }).find(".ui-tabs-nav li").off("keydown"),
    $("textarea.height40AutoPlus").css("overflow", "hidden").keyup(function() {
        var e = $(this);
        e.height(20),
        e.height(this.scrollHeight - 19)
    }),
    $("textarea.height150AutoPlus").css("overflow", "hidden").keyup(function() {
        var e = $(this);
        e.height(122),
        e.height(this.scrollHeight)
    }),
    $("textarea.height100AutoPlus").css("overflow", "hidden").keyup(function() {
        var e = $(this);
        e.height(72),
        e.height(this.scrollHeight)
    }),
    $(".mCustomScrollbar_byX").length && $(".mCustomScrollbar_byX").mCustomScrollbar({
        axis: "x"
    }),
    $(".mCustomScrollbar_byY").length && $(".mCustomScrollbar_byY").mCustomScrollbar({
        axis: "y"
    }),
    $(".js__ot_sliderRange").each(function() {
        var a, s, e = $(this), t = 1, i = parseInt(e.attr("data-pricerangemin")), o = parseInt(e.attr("data-pricerangemax"));
        e.attr("data-usefloatingvalue") && (t = .01,
        i = +e.attr("data-pricerangemin"),
        o = +e.attr("data-pricerangemax")),
        e.slider({
            range: !0,
            min: i,
            max: o,
            step: t,
            values: [e.closest(".js__ot_sliderRange__Cover").find(".js__ot_sliderRangeMin").val(), e.closest(".js__ot_sliderRange__Cover").find(".js__ot_sliderRangeMax").val()],
            start: function(e, t) {
                a = t.values[0],
                s = t.values[1],
                $("#price_active").val(1)
            },
            slide: function(e, t) {
                $(this).closest(".js__ot_sliderRange__Cover").find(".js__ot_sliderRangeMin").val(t.values[0]),
                $(this).closest(".js__ot_sliderRange__Cover").find(".js__ot_sliderRangeMax").val(t.values[1])
            },
            stop: function(e, t) {
                a != t.values[0] && $(this).closest(".js__ot_sliderRange__Cover").find(".js__ot_sliderRangeMin").change(),
                s != t.values[1] && $(this).closest(".js__ot_sliderRange__Cover").find(".js__ot_sliderRangeMax").change()
            }
        })
    }),
    $(".js__ot_sliderRangeMin").each(function() {
        $(this).val($(this).closest(".js__ot_sliderRange__Cover").find(".js__ot_sliderRange").slider("values", 0))
    }),
    $(".js__ot_sliderRangeMax").each(function() {
        $(this).val($(this).closest(".js__ot_sliderRange__Cover").find(".js__ot_sliderRange").slider("values", 1))
    }),
    $(".js__ot_sliderRange__Cover .input__text").on("mouseout keydown keyup", function() {
        var e = $(this);
        +e.closest(".js__ot_sliderRange__Cover").find(".js__ot_sliderRangeMin").val() < +e.closest(".js__ot_sliderRange__Cover").find(".js__ot_sliderRangeMax").val() && e.closest(".js__ot_sliderRange__Cover").find(".js__ot_sliderRange").slider("values", [e.closest(".js__ot_sliderRange__Cover").find(".js__ot_sliderRangeMin").val(), e.closest(".js__ot_sliderRange__Cover").find(".js__ot_sliderRangeMax").val()]).change()
    }),
    $(".js__copy2ClipBuffer").length && new Clipboard(".js__copy2ClipBuffer"),
    $("body").hasClass("js__promoPage") || (e = window.basket_itemid ? {
        handler: "basketstatus",
        itemid: basket_itemid
    } : {
        handler: "basketstatus"
    },
    $.ajax({
        type: "POST",
        url: "/ajax.php",
        data: e
    }).done(function(e) {
        e = $.parseJSON(e);
        window.basket_itemid,
        e && ($(".js__header__basketCover").html(e.sticker),
        $(".js__multicart__headerLeft").length && $(".js__multicart__headerLeft").html(e.tabs),
        $("#js__logoline__cartID .logoline__cart__numbers").text())
    }).fail(function() {}))
}
$(document).keydown(function(e) {
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
$(document).ready(function() {
    $(window.location.hash).length && 3 < window.location.hash.length && ($("a.ui-tabs-anchor[href=" + window.location.hash + "]").click(function() {}),
    $("html, body").animate({
        scrollTop: $(window.location.hash).parent().offset().top + "px"
    }, 1),
    $(window.location.hash).find(".js_spoiledItemName").length && $(window.location.hash).find(".js_spoiledItemName a").click(),
    $(window.location.hash).hasClass("js__ajaxSingleExchange") && (ajaxExchange(B = $(window.location.hash)),
    $("#" + B.attr("data-itemid") + "_content__ID").slideToggle(400)));
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
    h = 20),
    $(".js__indexHat__main").length && (bannersCounter($(".js__indexHat__main .swiper-wrapper .swiper-slide:eq(0)").attr("data-bnrid")),
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
            slideChange: function() {
                bannersCounter_eventer(this)
            }
        }
    })),
    $(".js__indexStories").length && (bannersCounter($(".js__indexStories .swiper-wrapper .swiper-slide:eq(0)").attr("data-bnrid")),
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
    })),
    $(".js__indexActions__main").length && (bannersCounter($(".js__indexActions__main .swiper-slide:eq(0)").attr("data-bnrid")),
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
    })),
    $(".js__indexActions__offerOfTheDay").length && (new Swiper(".js__indexActions__offerOfTheDay .swiper-container",{
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
    $(".js__indexActions__offerOfTheDay .swiper-slide").length < 2 && $(".js__indexActions__offerOfTheDay .swiper-pagination").hide()),
    $(".js__drawCats").length && new Swiper(".js__drawCats .swiper-container",{
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
    $(".js__tileReviews").length && 2 < $(".js__tileReviews .tileReviews__item").length && (s = new Swiper(".js__tileReviews .swiper-container",{
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
    $(".js__tileBrands").length && (o = new Swiper(".js__tileBrands .swiper-container",{
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
    })),
    $(".js__tabs_hits").length && (n = new Swiper(".js__tabs_hits .swiper-container",{
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
    })),
    $(".js__tabs_best_prices").length && (_ = new Swiper(".js__tabs_best_prices .swiper-container",{
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
    })),
    $(".js__tabs_new").length && (r = new Swiper(".js__tabs_new .swiper-container",{
        initialSlide: 0,
        slidesPerView: d,
        spaceBetween: h,
        speed: 600,
        pagination: {
            el: ".js__tabs_new .swiper-pagination",
            clickable: !0
        },
        navigation: {
            nextEl: ".js__tabs_new .swiper-button-next",
            prevEl: ".js__tabs_new .swiper-button-prev"
        },
        on: {
            init: function() {
                $(".js__tabs_new").addClass("swiperActive")
            }
        }
    })),
    $(".js__tabs_recommend").length && (l = new Swiper(".js__tabs_recommend .swiper-container",{
        initialSlide: 0,
        slidesPerView: d,
        spaceBetween: h,
        speed: 600,
        autoplay: {
            delay: 3e5
        },
        pagination: {
            el: ".js__tabs_recommend .swiper-pagination",
            clickable: !0
        },
        navigation: {
            nextEl: ".js__tabs_recommend .swiper-button-next",
            prevEl: ".js__tabs_recommend .swiper-button-prev"
        },
        on: {
            init: function() {
                $(".js__tabs_recommend").addClass("swiperActive")
            }
        }
    })),
    $(".js__productPage__topReview__gallery").length && new Swiper(".js__productPage__topReview__gallery .swiper-container",{
        initialSlide: 0,
        slidesPerView: "auto",
        spaceBetween: 0,
        speed: 400,
        navigation: {
            nextEl: ".js__productPage__topReview__gallery .swiper-button-next",
            prevEl: ".js__productPage__topReview__gallery .swiper-button-prev"
        },
        on: {
            init: function() {
                $(".js__productPage__topReview__gallery").addClass("swiperActive")
            }
        }
    }),
    $("#js__tileReviews").tabs({
        active: 0
    }),
    $(".js__header__menuLink").click(function() {
        return menu_open(),
        !1
    }),
    $(".js__header__menu__close").click(function() {
        return menu_close(),
        !1
    }),
    $(".js__header__menuShadow").click(function() {
        return menu_close(),
        !1
    }),
    $(".js__mCM__item__panel").width($(".js__catalogLine__cover").width() - 300),
    $(".js__catalogLine__panelEars").width($(window).width()).css("left", -1 * $(".js__catalogLine__cover").offset().left),
    $(".js__catalogLine__mainLink").click(function() {
        var e = $(this);
        return isMobile && $(".js__hoverEmulate").removeClass("js__hoverEmulate"),
        e.toggleClass("active"),
        $(".js__catalogLine__panel").fadeToggle(300, function() {
            $(this).hasClass("js__menuUpdated") || catmenuAJAX_Upload()
        }),
        $(".js__catalogLine__shadow").height($(".content").height()),
        $(".js__catalogLine__shadow").fadeToggle(300),
        $(".js__catalogLine__shadow").height($(document).height() - $(".js__catalogLine__shadow").offset().top),
        !1
    }),
    $(".js__catalogLine__panel__close").click(function() {
        catalogLine__close()
    }),
    $(".js__catalogLine__shadow").click(function() {
        catalogLine__close()
    }),
    $(".js__indexActions__side__date").length && (window.setInterval("indexActionsCoundown()", 1e3),
    $(".js__indexActions__side__date").delay(900).fadeIn(300));
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
    }),
    $(".breadcrumbs__close").click(function() {
        return $(".js_breadcrumbs__itemLink.active").removeClass("active").parent().find(".breadcrumbs__sublist").stop(!0, !0).hide(30),
        !1
    });
    var f, g, b, v, j, k, w, y, C, x, I, D, S = throttle(searchQuery, 800), T = "#", L = -1;
    function P(e, t) {
        $.cookie("top_orders_close_time", t, {
            expires: 7,
            path: "/",
            domain: e
        })
    }
    $(".js__header__search__inputText").on("keydown keyup change", function(e) {
        var t;
        "ArrowUp" == event.code || "ArrowDown" == event.code ? (v = $(".js__fastResult__item").length,
        $(".js__header__searchCover").hasClass("active") && 0 != v && "keydown" == e.type && ("ArrowUp" == event.code ? (L <= 0 && (L = v),
        L--) : (v - 1 <= L && (L = -1),
        L++),
        $(".js__fastResult__item.highlight").removeClass("highlight"),
        $(".js__fastResult__item:eq(" + L + ")").addClass("highlight"),
        $(".js__header__search__inputText").val($(".js__fastResult__item:eq(" + L + ") a").attr("data-cattitle")),
        $(".js__header__searchCover form").attr("action", $(".js__fastResult__item:eq(" + L + ") a").attr("href")),
        event.preventDefault())) : "Escape" == event.code && "keydown" == e.type ? ((t = $(this)).val(f).blur(),
        L = -1,
        $(".js__header__searchCover form").attr("action", T),
        event.preventDefault()) : "Enter" == event.code || (t = $(this),
        f = t.val(),
        -1 == L && $(".js__header__searchCover form").attr("action", T),
        f && "" != f && 2 <= f.length ? g != f && (g = f,
        requestid = (new Date).getTime(),
        S(g, requestid),
        L = -1) : $(".js__fastSearchResultsCover").fadeOut(200, function() {
            t.html(""),
            $(".js__header__searchCover").removeClass("active")
        }))
    }),
    $(".js__header__search__inputText").on("focus", function() {
        var e = $(this);
        isMobile && $(".js__hoverEmulate").removeClass("js__hoverEmulate"),
        e.width() < 450 && (b = $(".header__citySelect").width() + $(".header__menu").width(),
        $(".header__search").width($(".header__search").width()),
        $(".js__header__searchCover").addClass("js__width").animate({
            left: -1 * b,
            width: b + $(".header__search").width()
        }, 200, function() {})),
        "" != $(".js__fastSearchResultsCover").html() && ($(".js__header__searchCover").addClass("active"),
        $(".js__fastSearchResultsCover").fadeIn(100)),
        $(".js__catalogLine__mainLink").hasClass("active"),
        catalogLine__close()
    }),
    $(".js__header__search__inputText").on("focusout", function() {
        var e = $(this);
        $(".js__fastSearchResultsCover").fadeOut(200, function() {
            e.html(""),
            $(".js__header__searchCover").removeClass("active"),
            $(".js__header__searchCover").hasClass("js__width") && ($(".header__search").css("width", "auto"),
            $(".js__header__searchCover").addClass("js__width").animate({
                left: 0,
                width: "100%"
            }, 200, function() {}))
        })
    }),
    $(".js__fastSearchResultsCover").on("mousedown", "a", function() {
        document.location.href = $(this).attr("href")
    }),
    $(".js__header__searchCover form").on("submit", function() {
        var e, t = $(this);
        "" == $(".js__header__search__inputText").val() && (e = (e = $(".js__header__search__inputText").attr("placeholder")).slice(0, -1),
        $(".js__header__search__inputText").val(e),
        t.submit())
    }),
    $(".js__fastSearch__query").length && (j = new Object,
    k = new Object,
    D = !(I = 1),
    $(".js__fastSearch__query").on("keydown keyup change", function() {
        var e = $(this);
        if (w = e.attr("data-fastsearchitemsid"),
        j[w] || (j[w] = new Object,
        $("#" + w + " [data-fastsearchvalue]").each(function() {
            j[w][$(this).attr("id")] = $(this).attr("data-fastsearchvalue")
        })),
        C = e.val().toLowerCase(),
        x = C.split(" "),
        (C = e.val().trim()) && "" != C) {
            if (y != C) {
                for (y = C,
                e.closest(".js__fastSearch").find(".js__fastSearch__close").addClass("active"),
                i = 0,
                D = !(I = 1),
                k[w] = new Object; i < x.length; ) {
                    for (var t in j[w])
                        j[w][t].toLowerCase().indexOf(x[i]) + 1 && (k[w][t] ? (I = k[w][t] + 1,
                        k[w][t] = I) : k[w][t] = 1);
                    i++
                }
                for (var t in j[w])
                    k[w][t] == I ? (e.closest(".js__fastSearch").find(".js__fastSearch__emptyResult").removeClass("active"),
                    D = !0,
                    $("#" + t).show()) : $("#" + t).hide();
                D || (e.closest(".js__fastSearch").find(".js__fastSearch__emptyResult").addClass("active"),
                $("#" + w + " [data-fastsearchvalue]").hide())
            }
        } else
            "" == y && e.closest(".js__fastSearch").find(".js__fastSearch__close").removeClass("active"),
            y = "",
            $("#" + w + " [data-fastsearchvalue]").show(),
            e.closest(".js__fastSearch").find(".js__fastSearch__emptyResult").removeClass("active")
    }),
    $(".js__fastSearch__close").on("click", function() {
        var e = $(this);
        e.closest(".js__fastSearch").find(".js__fastSearch__query").val("").change(),
        $(".js__fastSearch__emptyResult").removeClass("active"),
        e.removeClass("active")
    })),
    $("body").on("click", ".js__linkForceItemsSearch", function() {
        window.yaCounter234640 && window.yaCounter234640.reachGoal("search__linkForceItems")
    }),
    $(".js__statusline__close").on("click", function(e) {
        var t = $(this);
        return t.closest("#main_area").find(".statusline__messages").slideUp(400),
        $(".js__statuslineMark").removeClass("active"),
        P(t.attr("data-statusdomain"), t.attr("data-statuscode")),
        !1
    }),
    $(".js__statuslineMark").on("click", function(e) {
        var t = $(this);
        return P(t.attr("data-statusdomain"), t.attr("data-statuscode")),
        t.hasClass("active") ? (t.closest("#main_area").find(".statusline__messages").slideUp(400),
        t.removeClass("active")) : (t.closest("#main_area").find(".statusline__messages").slideDown(400),
        t.addClass("active")),
        !1
    }),
    $(".js__warmline__close").on("click", function(e) {
        var t, a = $(this);
        return a.closest("#main_area").find(".js__warmline").slideUp(400),
        t = a.attr("data-statusdomain"),
        a = a.attr("data-statuscode"),
        $.cookie("top_message_close_time", a, {
            expires: 7,
            path: "/",
            domain: t
        }),
        !1
    }),
    $("body").on("click", ".js__age_restriction__close", function(e) {
        var t, a = $(this);
        return $(".filterBlur").removeClass("filterBlur"),
        t = a.attr("data-statusdomain"),
        a = a.attr("data-statuscode"),
        $.cookie("age_restriction", a, {
            expires: 30,
            path: "/",
            domain: t
        }),
        !1
    }),
    $("body").on("click", ".js__bubbleOpenLink", function(e) {
        var t = $(this);
        return t.hasClass("active") ? hideAllBubbles() : showBubble(t, t.attr("data-bubblecontent"), t.closest(".js__bubbleCoverArea").attr("data-bubbleposition")),
        !1
    }),
    $("body").on("click", ".bubble", function(e) {
        hideAllBubbles()
    }),
    $("body").on("click", ".js__bnr__mark", function(e) {
        var t = $(this);
        t.addClass("active");
        var a = t.attr("data-bnrmarkcontent");
        return t.attr("data-bnrmarkcontent", t.html()),
        t.html(a),
        !1
    }),
    $(".js__bnr__mark").mouseleave(function() {
        var e, t = $(this);
        return t.hasClass("active") && (t.removeClass("active"),
        e = t.attr("data-bnrmarkcontent"),
        t.attr("data-bnrmarkcontent", t.html()),
        t.html(e)),
        !1
    }),
    $(".js__usualMinHeightItem").each(function() {
        var e = $(this)
          , t = e.attr("data-minheight") || 100;
        e.height() - 36 > t ? (e.closest(".js__usualMinHeightBlock").find(".js__usualMinHeightLink").css("display", "inline-block"),
        e.attr("data-fullheight", e.height()).height(t).addClass("isWork")) : e.closest(".js__usualMinHeightBlock").find(".js__usualMinHeightLink").css("display", "none")
    }),
    $("body").on("click", ".js__usualMinHeightLink", function(e) {
        var t = $(this);
        t.hasClass("js__toggleElemStation") || t.toggleClass("active");
        var a = t.closest(".js__usualMinHeightBlock").find(".js__usualMinHeightItem").attr("data-fullheight")
          , s = t.closest(".js__usualMinHeightBlock").find(".js__usualMinHeightItem").attr("data-minheight") || 100;
        t.hasClass("active") ? t.closest(".js__usualMinHeightBlock").find(".js__usualMinHeightItem").animate({
            height: s
        }, 300, function() {
            $(this).removeClass("active")
        }) : t.closest(".js__usualMinHeightBlock").find(".js__usualMinHeightItem").animate({
            height: a
        }, 300, function() {
            $(this).addClass("active"),
            $(this).css("height", "auto"),
            $(this).attr("data-fullheight", $(this).height())
        })
    }),
    $("body").on("click", ".js__toggleElemStation", function(e) {
        return toggleElemStation($(this)),
        !1
    }),
    $("body").on("click", ".js__usualSpoilerLink", function(e) {
        var t = $(this);
        return t.hasClass("js__toggleElemStation") || t.toggleClass("active"),
        t.closest(".js__usualSpoilerBlock").find(".js__usualSpoilerItem:eq(0)").slideToggle(300, function() {
            $(this).closest(".popup").hasClass("active") && popup_checkSizeAndPosition($(".popup.active").height(), $(".popup.active").attr("id"))
        }),
        !1
    }),
    $(".goods__items.detaillisting").on("click", "a.js_characteristList__hiddenItems", function(e) {
        var t = $(this);
        return t.closest(".featureList").find(".noDisplay").fadeToggle(300, function() {}),
        t.hasClass("active") ? t.attr("title", t.attr("data-captiontrue")).text(t.attr("data-captiontrue")).removeClass("active") : t.attr("title", t.attr("data-captionfalse")).text(t.attr("data-captionfalse")).addClass("active"),
        !1
    }),
    $(".js__modificationsList__link").click(function(e) {
        $(this).closest(".whitebox").find(".modificationsList li.noDisplay").slideToggle(300, function() {})
    });
    var B, E, R = 0;
    $(".js__hiddenBy5Steps__openLink").on("click", function(e) {
        var t = $(this)
          , a = t.attr("data-stepnum") || 5;
        if (R = 0,
        5 < t.closest(".js__hiddenBy5Steps__cover").find(".js__hiddenBy5Steps__item.noDisplay").length)
            for (; R < a; )
                t.closest(".js__hiddenBy5Steps__cover").find(".js__hiddenBy5Steps__item.noDisplay").eq(R).fadeToggle(300, function() {
                    $(this).removeClass("noDisplay")
                }),
                R++;
        else
            t.closest(".js__hiddenBy5Steps__cover").find(".js__hiddenBy5Steps__item.noDisplay").fadeToggle(300, function() {
                $(this).removeClass("noDisplay")
            }),
            t.hide(1);
        return !1
    }),
    $("body").on("click", ".js__animateGoTo", function(e) {
        js__animateGoTo($(this))
    }),
    $("body").on("click", ".js__tabs_externalLink", function(e) {
        var t = $(this);
        $("a.ui-tabs-anchor[href=" + t.attr("href") + "]").click(),
        $(".js__tabs_externalLink.active").removeClass("active");
        var a = t.attr("data-togglestationgroup");
        return a ? $("a[data-togglestationgroup=" + a + "]").each(function() {
            $(this).addClass("active")
        }) : t.addClass("active"),
        t.attr("data-aniscroll") || $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 56 + "px"
        }, 600),
        !1
    }),
    $(".js__alphabetsLine__list").length && $(".js__alphabetsLine__list").on("click", ".js__alphabetsItem", function() {
        var e = $(this);
        $("#" + e.attr("data-itemid") + "_content__ID .js__ajaxSingleExchange").click()
    }),
    $(".js__productPage__displayedItem__images__thumbs").length && ($(".js__productPage__displayedItem__images__thumbs .js__displayedItem__images__thumbLink:eq(0)").addClass("active"),
    $(".js__productPage__displayedItem__images__thumbs").removeClass("productPage__displayedItem__images__thumbsPreInit"),
    $(".js__displayedItem__thumbsSlider").length && (B = 5,
    e = $(window).width(),
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
    })));
    var O, M, A, U, q;
    $("body").on("click", ".js__displayedItem__images__thumbLink", function() {
        var e = $(this);
        return $("#js__popupCatalogItem_bigImage__ID").attr("src", $(this).attr("href")).attr("title", $(this).attr("title")),
        $("#js__displayedItem__images__bigLink__ID").attr("href", $(this).attr("data-fullimageurl")).attr("data-initnum", $(this).parent().index()),
        $(".js__displayedItem__images__thumbLink.active").removeClass("active"),
        e.addClass("active"),
        !1
    }),
    $("body").on("click", ".js__numsToBuy__plus", function() {
        var e = $(this);
        if (A = e.closest(".catalog__displayedItem__numsToBuy").find(".js__itemIDCount"),
        q = A.attr("data-maxitems") || 999,
        O = +A.val(),
        M = 1,
        O < q && (hideAllBubbles(),
        A.removeClass("error"),
        A.val(+O + +M).change()),
        "#" == e.attr("href"))
            return !1
    }),
    $("body").on("click", ".js__numsToBuy__minus", function() {
        var e = $(this);
        if (A = e.closest(".catalog__displayedItem__numsToBuy").find(".js__itemIDCount"),
        U = A.attr("data-minitems") || 1,
        O = +A.val(),
        M = 1,
        U < O)
            hideAllBubbles(),
            A.removeClass("error"),
            A.val(+O - +M).change();
        else if (A.addClass("error"),
        1 != U)
            return showBubble(e, e.attr("data-bubblecontent"), "bottom"),
            !1;
        if ("#" == e.attr("href"))
            return !1
    });
    var H, G, F, V = throttle(incdecQuery, 1e3);
    $("body").on("mouseout keydown keyup change focus", ".js__itemIDCount", function() {
        var e = $(this);
        U = +e.attr("data-minitems") || 1,
        q = +e.attr("data-maxitems") || 999,
        O = +e.val(),
        U <= O ? (hideAllBubbles(),
        e.removeClass("error"),
        O && "" != O && H != O && (H = O,
        requestid = (new Date).getTime(),
        V(e, requestid)),
        $('.js__ajaxExchange[data-handler="buy"][data-itemid=' + e.attr("data-itemid") + "][data-itemid=" + e.attr("data-itemid") + "]").attr("data-itemcount", O)) : (e.addClass("error"),
        1 != U && showBubble(e = e.parent().find(".js__numsToBuy__minus"), e.attr("data-bubblecontent"), "bottom"))
    }),
    $("body").on("click", ".js__setCouplePrice", function() {
        var e = $(this);
        return e.closest(".js__priceCountCover").find(".js__itemIDCount").val(+e.attr("data-itemcouplecount")).change(),
        !1
    }),
    $(".js__modificationsList__cover").on("click", ".js__modificationsList__paramsSet", function() {
        var e = $(this)
          , t = e.attr("data-paramid")
          , a = e.text();
        return $(".js__modificationsList .highlight_set").removeClass("highlight_set"),
        e.closest(".js__modificationsList").find("li").each(function() {
            $(this).find(".js__modificationsList__paramsSet[data-paramid=" + t + "]").text() == a && $(this).find(".js__modificationsList__paramsSet[data-paramid=" + t + "]").addClass("highlight_set")
        }),
        !1
    }),
    $("body").on("change", ".js__setRebuild", function() {
        var e = $(this)
          , t = "";
        e.closest("form").find(".js__setRebuild:checked").each(function() {
            t = t + $(this).val() + ","
        }),
        e.closest("form").find(".button__orange.js__ajaxExchange").attr("data-itemid", t)
    }),
    $("#actionsSelectType_ID").on("change", function(e, t) {
        $(this)
    }),
    $(".js__actionsFilterSelect").on("change", function(e, t) {
        reload_action_page_with_params($(this).attr("data-selecttype"), 0)
    }),
    $("#js__actionsChkbx_archive_ID").on("change", function() {
        reload_action_page_with_params("archive", 1)
    }),
    $(".js__formBox").on("click", ".js__formBoxMainButton", function() {
        if ($(this).hasClass("disabled"))
            return !1
    }),
    $("body").on("click", ".js__formBox__isManCheck__reload", function() {
        var e, t = $(this);
        return t.hasClass("disabled") || (e = t.attr("data-mode") || "",
        t.closest(".js__formLine__capthaLine").find(".js__captcha_img").attr("src", "/captcha.php?mode=" + e + "&rand=" + Math.random()),
        t.closest(".js__formLine__capthaLine").find(".input__text").focus(),
        t.fadeOut(100, function() {
            $(this).fadeIn(100)
        })),
        !1
    }),
    $("body").on("click", ".js__linkAsLabel", function() {
        return $("#" + $(this).attr("data-for")).click(),
        !1
    }),
    $("body").on("mouseout keydown keyup change focus", ".js__checkLength", function() {
        var e = $(this);
        G = e.attr("data-filledlength") || 130,
        (F = e.val().length) < G ? e.closest(".importantmarkCover").removeClass("filledNorma").removeClass("filledOk") : G <= F && F < 1.5 * G ? e.closest(".importantmarkCover").removeClass("filledOk").addClass("filledNorma") : e.closest(".importantmarkCover").removeClass("filledNorma").addClass("filledOk")
    }),
    $("body").on("selectmenuchange", ".js__reloadPageByValue", function(e, t) {
        document.location.href = $(this).val()
    }),
    $("body").on("change", ".js__reloadPageByValue", function(e, t) {
        document.location.href = $(this).val()
    }),
    $(".js__backlightingClick li").on("click", function(e) {
        return $(this).toggleClass("state_click"),
        !1
    }),
    $("body").on("click", ".js__copy2ClipBuffer", function() {
        var e = $(this);
        "true" == e.attr("data-copyanimate") && e.fadeOut(200, function() {
            $(this).fadeIn(200)
        }),
        e.attr("data-copypopuptext") && (popup_setMessage("Скопировано!", "<p>" + e.attr("data-copypopuptext") + "</p><a href='#' class='js__popup__close button button__orange' title='Закрыть'>Закрыть</a>"),
        popup_open("popup_message", 0, !0))
    }),
    $("body").on("click", ".js__copy2SomeField", function() {
        var e = $(this)
          , t = e.attr("data-sometext")
          , a = e.attr("data-somedestination")
          , e = e.attr("data-somefocus");
        return $("." + a).val(t),
        1 == e && $("." + a).focus(),
        !1
    }),
    $(".starsSet__item").hover(function() {
        $(this).parent().addClass("stars" + (1 + $(this).index()))
    }, function() {
        $(this).parent().removeClass("stars" + (1 + $(this).index()))
    }),
    $(".starsSet__item").click(function() {
        var e = $(this)
          , t = e.closest(".starsSet").attr("data-starsize")
          , a = e.closest(".starsSet").find("input[type=radio]").attr("name");
        e.parent().attr("class", t).addClass("starsClick" + (1 + $(this).index())),
        e.closest(".starsSet").find("input[type=radio][name=" + a + "]").prop("value", 1 + $(this).index())
    }),
    $(".js__starsSetClear").click(function() {
        var e = $(this)
          , t = e.closest(".starsSet").attr("data-starsize")
          , a = e.closest(".starsSet").find("input[type=radio]").attr("name");
        return e.parent().find("." + t).attr("class", t),
        e.closest(".starsSet").find("input[type=radio][name=" + a + "]").prop("value", 0),
        !1
    });
    var h = 30
      , d = 6
      , c = 8
      , p = 2
      , z = 4
      , m = 3
      , N = 0
      , Q = 0
      , J = 0;
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
        d != N && (o && (o.params.slidesPerView = c,
        o.params.spaceBetween = h),
        t && (t.params.slidesPerView = c,
        t.params.spaceBetween = h),
        n && (n.params.slidesPerView = d,
        n.params.spaceBetween = h),
        _ && (_.params.slidesPerView = d,
        _.params.spaceBetween = h),
        r && (r.params.slidesPerView = d,
        r.params.spaceBetween = h),
        l && (l.params.slidesPerView = d,
        l.params.spaceBetween = h),
        s && (s.params.slidesPerView = m,
        s.params.spaceBetween = h),
        N = d),
        p != Q && (a && (a.params.slidesPerView = p),
        Q = p),
        $(".js__displayedItem__thumbsSlider").length && z != J && (z = 1240 < e ? 4 : 3,
        E.params.slidesPerView = z,
        J = z),
        $(".popup.active").length && popup_checkSizeAndPosition($(".popup.active").height(), $(".popup.active").attr("id"))
    }
    ,
    isMobile && ($(".js__mainCategoryMenu").on("click", ".mCM__item__link", function() {
        var e = $(this);
        if (!e.closest(".mCM__item").hasClass("js__hoverEmulate"))
            return $(".js__hoverEmulate").removeClass("js__hoverEmulate"),
            e.closest(".mCM__item").addClass("js__hoverEmulate"),
            !1;
        $(".js__hoverEmulate").removeClass("js__hoverEmulate")
    }),
    $(".js__catalogLineMenu").on("click", ".js__cLM__item__linkArrow", function() {
        var e = $(this);
        return $(".js__catalogLine__mainLink.active").click(),
        e.closest(".cLM__item").hasClass("js__hoverEmulate") ? $(".js__hoverEmulate").removeClass("js__hoverEmulate") : ($(".js__hoverEmulate").removeClass("js__hoverEmulate"),
        e.closest(".cLM__item").addClass("js__hoverEmulate")),
        !1
    }),
    $(".memberEntered").on("click", ".huab__cell__member .huab__cell__link", function() {
        var e = $(this);
        return $(".js__catalogLine__mainLink.active").click(),
        e.closest(".huab__cell__member").hasClass("js__hoverEmulate") ? $(".js__hoverEmulate").removeClass("js__hoverEmulate") : ($(".js__hoverEmulate").removeClass("js__hoverEmulate"),
        e.closest(".huab__cell__member").addClass("js__hoverEmulate")),
        !1
    }),
    $(".header").on("click", ".multicartExist .huab__cell__link", function() {
        var e = $(this);
        return $(".js__catalogLine__mainLink.active").click(),
        e.closest(".huab__cell__multicart").hasClass("js__hoverEmulate") ? $(".js__hoverEmulate").removeClass("js__hoverEmulate") : ($(".js__hoverEmulate").removeClass("js__hoverEmulate"),
        e.closest(".huab__cell__multicart").addClass("js__hoverEmulate")),
        !1
    })),
    $(".js__debugInfo").on("click", ".js__resizeDebugInfo", function(e) {
        return $(".js__debugInfo").toggleClass("fullHeigth"),
        !1
    }),
    stickableButton(),
    otUIInit()
});


// Vue.createApp(miniApp).mount('#main-aria')