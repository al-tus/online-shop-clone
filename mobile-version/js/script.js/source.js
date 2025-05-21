/**
 * @copyright 2023 M.ONLINETRADE.RU (https://m.onlinetrade.ru/). All Rights Reserved.
 * @author C00Lib1N aka Romanov Artem (think.mayhap@gmail.com)
 * @version 4.1.15
 */
var isMobile = !1, sitedevmode, userid, workerid, itemcode;
(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (isMobile = !0),
void 0 === sitedevmode && (sitedevmode = !1),
void 0 === userid && (userid = !1),
void 0 === workerid && (workerid = !1),
void 0 === itemcode && (itemcode = !1);
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
    var a = $(window).width()
      , s = $("body").width()
      , i = $(window).height();
    $("body").height();
    a < s && (i = i * s / a),
    a = s,
    $("#" + t).hasClass("popup__width_js") && (s = $("#" + t).find(".popup__caption").height(),
    isMobile ? ($("#" + t).width(.94 * a),
    $("#" + t).css("margin-left", -.47 * a + "px")) : ($("#" + t).width(.8 * a),
    $("#" + t).css("margin-left", -.4 * a + "px")),
    $("#" + t).find(".slider_itemPhotos").length && ($("#" + t).find(".slider_itemPhotos__image").css("max-height", i - 210 - s),
    $("#" + t + " .slider_itemPhotos .swiperManage__link").css("top", $(".popup.active .swiper-container").height() / -2))),
    $("#" + t).hasClass("popup__width_content") && ($("#" + t).width(.8 * a),
    $("#" + t).css("margin-left", -.4 * a + "px")),
    (e = t ? $("#" + t).height() : e) + 20 < i ? ($("body").addClass("js__overlayShadow"),
    $(".popup__shadow").css({
        position: "fixed",
        height: $(document).height()
    }),
    $("#" + t).css("position", "fixed"),
    $("#" + t).css("top", i / 2 - e / 2 - 10)) : ($("body").removeClass("js__overlayShadow"),
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
        zoom: !0,
        initialSlide: e,
        keyboard: {
            enabled: !0
        },
        updateOnImagesReady: !0,
        grabCursor: !0,
        calculateHeight: !0,
        pagination: {
            el: "#" + t + " .swiper-pagination",
            clickable: !0
        }
    });
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
        slidesPerView: 4,
        spaceBetween: 20,
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
        var r = ""
          , _ = "";
        a.attr("data-archive") && (r = 'data-archive="' + a.attr("data-archive") + '"',
        _ = a.attr("data-archive"));
        var l = 'data-itemid="' + a.val() + '"'
          , c = a.val()
          , d = ""
          , p = "";
        a.attr("data-catid") && (d = 'data-catid="' + a.attr("data-catid") + '"',
        p = a.attr("data-catid")),
        "variety" == i && "category" == n ? (a.closest(".indexGoods__item").wrapInner('<div class="indexGoods__item__temporaryRemove"></div>').find(".indexGoods__item__temporaryRemove").animate({
            opacity: .5
        }, 600),
        $("#" + a.attr("id") + "_emulateLink").length ? a.closest(".modelModeSelector_cover").find("a.noVisible.js__ajaxExchange").attr("data-handler", i).attr("data-handlermode", n).attr("data-itemid", c).attr("data-catid", p) : a.after('<a href="" class="noVisible js__ajaxExchange" id="' + $(this).attr("id") + '_emulateLink" ' + s + o + l + d + "  ></a>"),
        a.closest(".modelModeSelector_cover").find("a.noVisible.js__ajaxExchange").click()) : "variety" == i && "itempopup" == n ? ($("#popup_preview.active .js__animateCover").animate({
            opacity: 0
        }, 1e3),
        $("#" + a.attr("id") + "_emulateLink").length ? a.closest(".modelModeSelector_cover").find("a.noVisible.js__ajaxExchange").attr("data-handler", "popup").attr("data-handlermode", "preview").attr("data-itemid", c) : (s = 'data-handler="popup"',
        o = 'data-handlermode="preview"',
        a.after('<a href="" class="noVisible js__ajaxExchange" id="' + $(this).attr("id") + '_emulateLink" ' + s + o + l + "  ></a>")),
        a.closest(".modelModeSelector_cover").find("a.noVisible.js__ajaxExchange").click()) : "actionsselect" == i && 0 != c ? ($("#" + a.attr("id") + "_emulateLink").length ? a.closest(".line__filter").find("a.noVisible.js__ajaxExchange").attr("data-handler", "actionsselect").attr("data-itemid", c).attr("data-archive", _).attr("data-handlermode", n) : a.after('<a href="" class="noVisible js__ajaxExchange" id="' + $(this).attr("id") + '_emulateLink" ' + s + l + o + r + "  ></a>"),
        a.closest(".line__filter").find("a.noVisible.js__ajaxExchange").click()) : "actionsselect" == i && 0 == c && ($("#js__actionsSelect_categories_cover").fadeOut(300),
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
function ajaxExchange(g) {
    var v, j, e = {}, b = g.attr("href"), k = (g = g).attr("data-handler"), y = g.attr("data-initnum"), w = g.attr("data-ajaxstatic"), C = g.attr("data-ajaxstaticsalt"), x = g.attr("data-closeactivepopup"), t = g.attr("data-popupcaption"), a = g.attr("data-popuptext"), e = {
        handler: k
    };
    g.is("[data-handlermode]") && (v = g.attr("data-handlermode"),
    e.handlermode = g.attr("data-handlermode")),
    g.is("[data-itemid]") && (i = g.attr("data-itemid"),
    e.itemid = g.attr("data-itemid")),
    g.is("[data-contentid]") && (j = g.attr("data-contentid"),
    e.contentid = g.attr("data-contentid")),
    g.is("[data-setid]") && (e.setid = g.attr("data-setid")),
    g.is("[data-catid]") && (e.catid = g.attr("data-catid")),
    g.is("[data-cat_id]") && (e.cat_id = g.attr("data-cat_id")),
    g.is("[data-basketid]") && (e.basketid = g.attr("data-basketid")),
    g.is("[data-frombasketid]") && (e.frombasketid = g.attr("data-frombasketid")),
    g.is("[data-itemcount]") && (e.itemcount = g.attr("data-itemcount")),
    g.is("[data-shipmenttype]") && (e.shipmenttype = g.attr("data-shipmenttype")),
    g.is("[data-groupkey]") && (e.groupkey = g.attr("data-groupkey")),
    g.is("[data-cityid]") && (e.cityid = g.attr("data-cityid")),
    g.is("[data-url]") && (e.url = g.attr("data-url")),
    g.is("[data-exclude]") && (e.exclude = g.attr("data-exclude")),
    g.is("[data-presets]") && (e.presets = g.attr("data-presets")),
    g.is("[data-preset_id]") && (e.preset_id = g.attr("data-preset_id")),
    g.is("[data-pagetype]") && (e.pagetype = g.attr("data-pagetype")),
    g.is("[data-pagecount]") && (e.pagecount = g.attr("data-pagecount")),
    g.is("[data-pagenext]") && (e.pagenext = g.attr("data-pagenext")),
    g.is("[data-page]") && (e.page = g.attr("data-page")),
    g.is("[data-pagesort]") && (e.pagesort = g.attr("data-pagesort")),
    g.is("[data-sort]") && (e.sort = g.attr("data-sort")),
    g.is("[data-action]") && (e.action = g.attr("data-action")),
    g.is("[data-query]") && (e.query = g.attr("data-query")),
    g.is("[data-archive]") && (e.archive = g.attr("data-archive")),
    g.is("[data-brand]") && (e.brand = g.attr("data-brand")),
    g.is("[data-forceitems]") && (e.forceitems = g.attr("data-forceitems")),
    "form" != k && "formextended" != k || (e = g.closest("form").serialize()),
    "popup" == k && "basketshift" == v && (e = g.is("[data-itemhash]") ? "handler=popup&handlermode=basketshift&itemid=" + i + "&hashes[]=" + g.attr("data-itemhash") : "handler=popup&handlermode=basketshift&itemid=" + i + "&" + g.closest("form").serialize()),
    "buy" == k && "basketfavorites" == v && (e = "handler=buy&handlermode=basketfavorites&" + g.closest("form").serialize()),
    "ordercomment" == k && "edit" == v && (e = "handler=ordercomment&handlermode=edit&itemid=" + i + "&" + g.closest("form").serialize()),
    "moregoods" == k && "listing" == v && (e = (0 == g.attr("data-preset_id") && (g.attr("data-presets", 0),
    e.presets = 0),
    decodeURIComponent($.param(e)) + "&" + $("#search_form_id").serialize()));
    var s = "/ajax.php";
    "buy" == k ? s = "/ajax_basket.php" : "variety" == k || "listing" == v ? s = "/goods.php" : "preview" == v ? s = "/item.php" : "moregoods" == k && "brand" == v ? s = "/brands.php" : "moregoods" == k && "line" == v ? s = "/brands_lines.php" : "moregoods" == k && "action" == v ? s = "/actions.php" : "moregoods" == k && "news" == v ? s = "/news.php" : "moregoods" == k && "search" == v ? s = "/search2.php" : "moregoods" == k && "promo" == v ? s = "/promo.php" : "moregoods" == k && "discount" == v ? s = "/discount.php" : "moregoods" == k && "bought_items" == v ? s = "/new_client.php" : "ratereviews" != k && "ratecomments" != k && "ratevideoreviews" != k && "rategalleries" != k || (s = "/ajax_rate.php");
    var i = "form" != k && "formextended" != k && "variety" != k && "basketshift" != v && "ordercomment" != k ? "GET" : "POST";
    return "popup" == k && "print" == v ? (window.print(),
    popupShadow_close(),
    !1) : "popup" == k && "message" == v ? (t || a ? (popup_setMessage(t, a),
    popup_open("popup_message")) : (popup_setMessage("", "", "error"),
    popup_open("popup_message", 0, !0)),
    !1) : "popup" == k && "image" == v ? (setSingleImagePopup(g.attr("href")),
    popup_open("popup_singleimage"),
    !1) : "popup" == k && "video" == v ? (setVideoPopup(g.attr("data-popuptext")),
    popup_open("popup_video"),
    !1) : "popup" == k && "cityselectnew" == v ? ($(".js__headerGeoLink").click(),
    !1) : void ("compare" == k && "add" == v && g.hasClass("active") ? window.location.href = b : (ajaxIsProcessing = !0,
    setTimeout(function() {
        aniLoad(g, "run")
    }, 1e3),
    $.ajax({
        type: i,
        url: s,
        data: e
    }).done(function(e) {
        if (e) {
            switch (aniLoad(g, "stop"),
            k) {
            case "popup":
                var t = ""
                  , a = k + "_" + v;
                j && (a = a + "_" + j),
                w ? C ? (t = C,
                $("#" + a + t).addClass("popupIsStatic")) : (t = getRandomInt(200, 1e5),
                e = e.replace('id="' + a + '"', 'id="' + a + t + '"').replace(/\YMapsID/g, "YMapsID_" + a + t),
                $("body").append(e),
                $(".js__ajaxExchange[data-ajaxstatic=" + w + "][data-handlermode=" + v + "][data-contentid=" + j + "]").each(function() {
                    $(this).attr("data-ajaxstaticsalt", t)
                })) : (t = "",
                $("#" + a).length ? !w && $("#" + a).length && ($("#" + a + " *[id]").each(function() {
                    $(this).attr("id", $(this).attr("id") + "_tempPOstfix")
                }),
                $("#" + a).attr("id", a + "_tempPOstfix").find(".js__animateCover").fadeOut(10, function() {
                    $(this).closest(".popup").remove()
                }),
                $("body").append(e)) : $("body").append(e)),
                popup_open(a + t, y, x),
                ajaxIsProcessing = !1;
                break;
            case "buy":
                a = e.split("&#SPLIT&#");
                otUIInit(),
                $(".js__header__basketSticker").hide(1),
                $(".js__header__basketNotify").html(a[0]).show(1, function() {
                    $(".js__header__basketCover").click()
                });
                var s = $(".js__header__basketCover").attr("title")
                  , i = $(".js__header__basketLink").attr("title")
                  , o = $(".js__header__basketLink").attr("href");
                if (g.removeClass("button__orange js__ajaxExchange").addClass("button__clearGray active").html(s).attr("title", i).attr("href", o),
                $("#goods_content").length)
                    for (var n = 0, r = g.attr("href"), _ = g.attr("data-itemid"); n <= $(".button__orange.js__ajaxExchange").length; )
                        $(".button__orange.js__ajaxExchange").eq(n).attr("href") == r || $(".button__orange.js__ajaxExchange").eq(n).attr("data-itemid") == _ ? $(".button__orange.js__ajaxExchange").eq(n).removeClass("button__orange js__ajaxExchange").addClass("button__clearGray active").html(s).attr("title", i).attr("href", o) : n++;
                return !window.yaCounter234640 || void 0 !== (h = g.attr("data-shipmenttype")) && "" != h && window.yaCounter234640.reachGoal("item__addToCart__changedPickup"),
                ajaxIsProcessing = !1;
            case "bookmarks":
                switch (v) {
                case "add":
                    $(".js__bookmarksCount").html(e),
                    g.attr("title", g.attr("data-titletrue")).text(g.attr("data-captiontrue")).addClass("active"),
                    g.attr("data-handlermode", "remove"),
                    g.parent().hasClass("removedBookmark__restore") && g.parent().fadeOut(300, function() {
                        $("#bookmarkItem_" + g.attr("data-itemid") + "__ID").fadeIn(300).removeClass("js__removedBookmark"),
                        g.parent().remove()
                    });
                    break;
                case "remove":
                    var l, c, d;
                    $(".js__bookmarksCount").html(e),
                    g.attr("data-dynamicremove") ? (g.closest(".multicart__item").addClass("js__removedBookmark"),
                    l = g.closest(".js__multicart__itemGroup").find(".multicart__item").length - 1,
                    c = g.attr("data-itemcode") + ", ",
                    $("#js__bookmarksShare__ID").length && (d = (d = $("#js__bookmarksShare__ID").attr("data-popuptext")).replace(c, ""),
                    $("#js__bookmarksShare__ID").attr("data-popuptext", d)),
                    $("#bookmarksToFriends").length && (d = (d = $("#bookmarksToFriends").val()).replace(c, ""),
                    $("#bookmarksToFriends").val(d)),
                    l == g.closest(".js__multicart__itemGroup").find(".js__removedBookmark").length ? g.closest(".js__removedBookmark").fadeOut(300, function() {
                        g.closest(".js__removedBookmark").after('<div class=removedBookmark__restore><a href="#" class="js__ajaxExchange" data-handler="bookmarks" data-handlermode="add" data-itemid="' + g.attr("data-itemid") + '">Отменить удаление «' + g.closest(".js__removedBookmark").find(".multicart__item__name").text() + "» из Закладок</a></div>")
                    }) : g.closest(".js__removedBookmark").fadeOut(300, function() {
                        g.closest(".js__removedBookmark").after('<div class=removedBookmark__restore><a href="#" class="js__ajaxExchange" data-handler="bookmarks" data-handlermode="add" data-itemid="' + g.attr("data-itemid") + '">Отменить удаление «' + g.closest(".js__removedBookmark").find(".multicart__item__name").text() + "»</div>")
                    }),
                    0 == e && ($("#bookmarkTable__ID").hide(0),
                    $("#js__bookmarksShare__ID").hide(0),
                    $("#bookmarkPage__dummyMessage__ID").show(1))) : (g.attr("title", g.attr("data-titlefalse")).text(g.attr("data-captionfalse")).removeClass("active"),
                    g.attr("data-handlermode", "add"))
                }
                ajaxIsProcessing = !1;
                break;
            case "favoriteorder":
                switch (v) {
                case "add":
                    g.attr("title", g.attr("data-titletrue")).text(g.attr("data-captiontrue")).addClass("active"),
                    g.attr("data-handlermode", "remove");
                    break;
                case "remove":
                    g.attr("data-dynamicremove") ? g.closest("tr").fadeOut(300) : (g.attr("title", g.attr("data-titlefalse")).text(g.attr("data-captionfalse")).removeClass("active"),
                    g.attr("data-handlermode", "add"))
                }
                ajaxIsProcessing = !1;
                break;
            case "notifyitemlist":
                "remove" === v && (g.closest("tr").addClass("js__removedBookmark"),
                (g.closest("tbody").find(".last").length == g.closest("tbody").find(".js__removedBookmark").length ? g.closest("tbody") : g.closest("tr")).fadeOut(300),
                0 == e && ($("#notifyitemlistTable_ID").hide(0),
                $(".js__notifyitemlistText").hide(0),
                $("#notifyitemlistPage_dummyMessage").show(1))),
                ajaxIsProcessing = !1;
                break;
            case "compare":
                switch (v) {
                case "add":
                    g.attr("title", g.attr("data-titletrue")).text(g.attr("data-captiontrue")).addClass("active"),
                    g.parent().find("a[data-handler=compare][data-handlermode=remove]").removeClass("noDisplay"),
                    "SUCCESS" != e && $("#preview_compareList").html(e);
                    break;
                case "remove":
                    var p = g.closest("body").find("a[data-handler=compare][data-handlermode=add][data-itemid=" + g.attr("data-itemid") + "]");
                    p.attr("title", p.attr("data-titlefalse")).text(p.attr("data-captionfalse")).removeClass("active"),
                    p.parent().find("a[data-handler=compare][data-handlermode=remove]").addClass("noDisplay"),
                    "SUCCESS" != e && $("#preview_compareList").html(e)
                }
                ajaxIsProcessing = !1;
                break;
            case "clubprice":
                switch (v) {
                case "category":
                    g.closest(".indexGoods__item__price").animate({
                        opacity: 0
                    }, 300, function() {
                        $(this).html(e),
                        $(this).animate({
                            opacity: 1
                        }, 300)
                    });
                    break;
                case "item":
                    g.closest(".catalog__displayedItem__priceCover").animate({
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
                $("#basket_paymenttypes__ID .js__animateCover").animate({
                    opacity: 0
                }, 200, function() {
                    $(this).html(e.paymenttypes).animate({
                        opacity: 1
                    }, 200),
                    otUIInit(),
                    ajaxIsProcessing = !1
                });
                var u, h = g.closest(".multicart__orderoption__itemLine").find(".js__rowDate").text();
                h ? g.closest("form").find(".js__formBoxMainButton").html("Оформить заказ на " + h) : g.closest("form").find(".js__formBoxMainButton").html("Оформить заказ"),
                window.myBasketPickPointsMap && (u = "shipmentradio" + g.attr("data-itemid"),
                window.myBasketPickPointsMap.geoObjects.each(function(e) {
                    1 == e.properties.get("otPickupPointActivity") ? e.options.set("iconImageHref", "/templates/images/icons/ic__yaicon.png") : e.options.set("iconImageHref", "/templates/images/icons/ic__yaicon_gray.png"),
                    e.properties.get("otPickupPointID") == u && (e.options.set("iconImageHref", "/templates/images/icons/ic__yaicon_green.png"),
                    e.balloon.open())
                }));
                break;
            case "basketpaymenttype":
                ajaxIsProcessing = !1;
                break;
            case "variety":
                "category" === v && (g.addClass("focus"),
                g.closest(".multicart__item__temporaryRemove").length || g.closest(".multicart__item").wrapInner('<div class="multicart__item__temporaryRemove"></div>').find(".multicart__item__temporaryRemove").animate({
                    opacity: .5
                }, 600),
                g.closest(".multicart__item__temporaryRemove").animate({
                    opacity: 0
                }, 400, function() {
                    $(this).html(e),
                    $(this).find(".multicart__item__image img").load(function() {
                        otUIInit(),
                        $(".multicart__item__temporaryRemove").animate({
                            opacity: 1
                        }, 400, function() {
                            $(this).closest(".multicart__item").hasClass("multicart__itemShorty") || $(this).find(".multicart__item__image").unwrap()
                        })
                    })
                }),
                window.yaCounter234640 && window.yaCounter234640.reachGoal("listing_varietychange")),
                ajaxIsProcessing = !1;
                break;
            case "form":
                if ("SUCCESS" == e)
                    $("#popup_message .js__popup_message__caption").html(g.closest("form").find("#form_headSuccess").val()).closest("#popup_message").addClass("popup__success").find(".js__popup_message__message").html("<p>" + g.closest("form").find("#form_textSuccess").val() + "</p>"),
                    popup_open("popup_message", 0, !0),
                    "tabs_feedbacks__form__ID" == g.closest(".js__formBox").attr("id") && ($("#tabs_feedbacks__form__ID").fadeOut(400),
                    $("html, body").animate({
                        scrollTop: $("#tabs_feedbacks__write").offset().top + "px"
                    }, 600));
                else {
                    var n = 0
                      , m = [];
                    for (m = e.split(", "),
                    g.closest(".js__formBox").find(".formLine.error").removeClass("error"); n < m.length; )
                        g.closest(".js__formBox").find("#" + m[n]).closest(".formLine").addClass("error"),
                        n++;
                    $(".popup.active").length && popup_checkSizeAndPosition(g.closest(".popup").height(), g.closest(".popup").attr("id")),
                    $(".js__formBox__isManCheck__reload").length && $(".js__formBox__isManCheck__reload").click()
                }
                ajaxIsProcessing = !1;
                break;
            case "formextended":
                if ("SUCCESS" == (e = $.parseJSON(e)).status)
                    "POPUP" == e.value ? ($("#popup_message .js__popup_message__caption").html(g.closest(".js__formBox").find("#form_headSuccess").val()).closest("#popup_message").addClass("popup__success").find(".js__popup_message__message").html("<p>" + g.closest(".js__formBox").find("#form_textSuccess").val() + "</p>"),
                    popup_open("popup_message", 0, !0)) : "tabs_feedbacks__form__ID" == g.closest(".js__formBox").attr("id") ? ($(".js__reviewlist").append(e.value).show(300),
                    $("#tabs_feedbacks__form__ID").fadeOut(400),
                    $("#tabs_feedbacks__write").fadeOut(400),
                    $("html, body").animate({
                        scrollTop: $("#tabs_feedbacks__newAdded").offset().top + "px"
                    }, 600)) : "shopfeedbacks__formID" == g.closest(".js__formBox").attr("id") && ($("#shopfeedbacks__formID").slideUp(400),
                    $("#shopfeedbacks__success__ID").slideDown(400));
                else if ("ERROR" == e.status) {
                    n = 0,
                    m = [];
                    for (m = e.value.split(","),
                    g.closest(".js__formBox").find(".formLine.error").removeClass("error"); n < m.length; )
                        g.closest(".js__formBox").find("#" + m[n].trim()).closest(".formLine").addClass("error"),
                        n++;
                    $(".popup.active").length && popup_checkSizeAndPosition(g.closest(".popup").height(), g.closest(".popup").attr("id")),
                    $(".js__formBox__isManCheck__reload").length && $(".js__formBox__isManCheck__reload").click()
                }
                ajaxIsProcessing = !1;
                break;
            case "bubble":
                g.attr("data-bubbleposition") ? showBubble(g, e, "bottom") : showBubble(g, e),
                ajaxIsProcessing = !1;
                break;
            case "rategalleries":
            case "ratevideoreviews":
            case "ratecomments":
            case "ratereviews":
                switch (e.result_code) {
                case 1:
                    _ = g.attr("data-itemid"),
                    $("#item_rating_" + _ + "__ID .item_rating__plus").html(e.helpful),
                    $("#item_rating_" + _ + "__ID .item_rating__minus").html(e.unhelpful),
                    g.addClass("active");
                    break;
                case 2:
                    showBubble(g, e.result_text, "bottom");
                    break;
                case 3:
                    g.html(+g.html() + 1)
                }
                ajaxIsProcessing = !1;
                break;
            case "claimcomments":
                showBubble(g, e.result_text, "bottom"),
                ajaxIsProcessing = !1;
                break;
            case "brand":
                $("#" + g.attr("data-itemid") + "_content__ID .js__pageBrands__item__listCover").append(e).slideDown(300),
                toggleElemStation(g),
                g.attr("ajaxsingleexchangedone", !0),
                g.addClass("noDisplay"),
                ajaxIsProcessing = !1;
                break;
            case "modification":
                g.closest(".js__modificationsList__cover").find(".js__modificationsList").html(e),
                g.closest(".js__modificationsList__cover").find(".js__modificationsList .noDisplay").slideDown(400),
                toggleElemStation(g),
                g.attr("ajaxsingleexchangedone", !0),
                ajaxIsProcessing = !1;
                break;
            case "lastreceipts":
                $("#" + g.attr("data-itemid") + "_content__ID").html(e).slideDown(400),
                toggleElemStation(g),
                g.attr("ajaxsingleexchangedone", !0),
                ajaxIsProcessing = !1;
                break;
            case "itemmoredelivery":
                $(g.attr("href") + "_after").slideUp(0).html(e).slideDown(400),
                toggleElemStation(g),
                g.attr("ajaxsingleexchangedone", !0),
                ajaxIsProcessing = !1;
                break;
            case "itemmorepickup":
                switch (v) {
                case "grouppickup":
                    $("#js__productpage_pickupPoint_CoverID").append(e),
                    js__animateSlideGoTo(g);
                    break;
                case "pickup":
                    $(g.attr("href")).slideUp(0).html(e).slideDown(400),
                    toggleElemStation(g)
                }
                g.attr("ajaxsingleexchangedone", !0),
                ajaxIsProcessing = !1;
                break;
            case "basketmoredelivery":
                $(".ot_customRadioGroup").checkboxradio("destroy"),
                $(g.attr("href") + "_after").slideUp(0).html(e).slideDown(400),
                g.attr("ajaxsingleexchangedone", !0),
                otUIInit(),
                ajaxIsProcessing = !1,
                toggleElemStation(g);
                break;
            case "basketmorepickup":
                switch ($(".ot_customRadioGroup").checkboxradio("destroy"),
                $(".js__ajaxSingleExchange[data-handler=basketmorepickup]").attr("ajaxsingleexchangedone", !0),
                v) {
                case "list":
                    $(g.attr("href")).slideUp(0).append(e).slideDown(400),
                    toggleElemStation(g),
                    window.yaCounter234640 && (userid ? window.yaCounter234640.reachGoal("basketOpenPickupList__client") : window.yaCounter234640.reachGoal("basketOpenPickupList"));
                    break;
                case "map":
                    $(g.attr("data-hrefblock")).append(e),
                    toggleElemStation(g),
                    $("#basketpickupPointsMapCover__ID .js__usualMinHeightLink").click(),
                    window.yaCounter234640 && (userid ? window.yaCounter234640.reachGoal("basketOpenPickupMaps__client") : window.yaCounter234640.reachGoal("basketOpenPickupMaps"))
                }
                basketMapSetPickpoints(),
                otUIInit(),
                ajaxIsProcessing = !1;
                break;
            case "basketshift":
                if ("SUCCESS" == e)
                    switch (v) {
                    case "exist":
                        popup_setMessage("Успешно!", '<p style="text-align:center">Товар успешно перемещён в вашу корзину &laquo;<b>' + g.find("span").text() + '</b>&raquo;.</p><div style="text-align:center; padding-top: 10px"><a href="/basket.html" class="button button__clearGray active" title="Оформить заказ">Оформить заказ</a><a href="#" class=" js__popup__close" title="Продолжить покупки">Продолжить покупки</a></div>', "success"),
                        popup_open("popup_message", 0, !0);
                        break;
                    case "new":
                        popup_setMessage("Успешно!", '<p style="text-align:center">Товар успешно перемещён в вашу новую корзину &laquo;<b>' + g.attr("data-basketid") + '</b>&raquo;.</p><div style="text-align:center; padding-top: 10px"><a href="/basket.html" class="button button__clearGray active" title="Оформить заказ">Оформить заказ</a><a href="#" class=" js__popup__close" title="Продолжить покупки"Продолжить покупки</a></div>', "success"),
                        popup_open("popup_message", 0, !0)
                    }
                ajaxIsProcessing = !1;
                break;
            case "ordercomment":
                if ("SUCCESS" == e)
                    switch (popup_setMessage("Успешно!", '<p style="text-align:center">Данные по заказу изменены.</p><div style="text-align:center"><a href="#" class="button button__blue js__popup__close" title="Закрыть">Закрыть</a></div>', "success"),
                    popup_open("popup_message", 0, !0),
                    v) {
                    case "edit":
                        $(".js__ordercomment__text").html(g.closest(".popup").find(".input__textarea").val()).parent().slideDown(300);
                        break;
                    case "remove":
                        $(".js__ordercomment__text").html("").parent().slideUp(300)
                    }
                ajaxIsProcessing = !1;
                break;
            case "actionsselect":
                2 == (_ = g.attr("data-itemid")) ? $("#js__actionsSelect_categories_cover").fadeOut(300, function() {
                    $("#js__actionsSelect_brands_cover select").html(e),
                    $("#js__actionsSelect_brands_cover").fadeIn(300)
                }) : 1 == _ ? $("#js__actionsSelect_brands_cover").fadeOut(300, function() {
                    $("#js__actionsSelect_categories_cover select").html(e),
                    $("#js__actionsSelect_categories_cover").fadeIn(300)
                }) : 0 == _ && ($("#js__actionsSelect_categories_cover").fadeOut(300),
                $("#js__actionsSelect_brands_cover").fadeOut(300)),
                ajaxIsProcessing = !1;
                break;
            case "moregoods":
                switch (v) {
                case "bought_items":
                case "discount":
                case "promo":
                case "search":
                case "listing":
                case "action":
                case "news":
                case "brand":
                case "line":
                    var f;
                    (e = checkingParseJSON(e)) && (g.hasClass("js__ajaxListingSelectPageLink") ? ($(".js__goods__items").html(e.items),
                    $(".js__itemsLoadingCover .js__goods__items").animate({
                        opacity: 1
                    }, 300)) : $(".js__goods__items").append(e.items),
                    $(".paginator").replaceWith(e.pagination),
                    initDynamicPaginator(),
                    e.more ? ($(".js__ajaxListingMore").show(1),
                    $(".js__ajaxListingMore").attr("data-pagenext", $(".js__paginator__linkActive").text()),
                    $(".js__ajaxListingMore").attr("data-page", $(".js__paginator__linkActive").text())) : $(".js__ajaxListingMore").hide(1),
                    f = $(".js__paginator__linkActive").attr("data-activeurl"),
                    $(".js__ajaxListingMore").attr("href", f),
                    history.pushState(null, null, f))
                }
                ajaxIsProcessing = !1;
                break;
            default:
                b && "#" != b ? window.location.href = b : (popup_setMessage("", "", "error"),
                popup_open("popup_message", 0, !0)),
                ajaxIsProcessing = !1
            }
            return !1
        }
        aniLoad(g, "stop"),
        b && "#" != b ? window.location.href = b : (popup_setMessage("", "", "error"),
        popup_open("popup_message", 0, !0)),
        ajaxIsProcessing = !1
    }).fail(function() {
        aniLoad(g, "stop"),
        b && "#" != b ? window.location.href = b : (popup_setMessage("", "", "error"),
        popup_open("popup_message", 0, !0)),
        ajaxIsProcessing = !1
    })))
}
function initDynamicPaginator() {
    var t, a, s, i, o, n, r, _, l, c, d, p, u, h, m, f;
    $(".js__goods__itemsDynamicNavigations").length && (thisObj = $(".js__goods__itemsDynamicNavigations"),
    t = thisObj.attr("data-handler"),
    a = thisObj.attr("data-handlermode"),
    s = thisObj.attr("data-pagetype"),
    i = thisObj.attr("data-pagecount"),
    o = thisObj.attr("data-pagesort"),
    n = thisObj.attr("data-sort"),
    r = thisObj.attr("data-itemid"),
    _ = thisObj.attr("data-catid"),
    l = thisObj.attr("data-cat_id"),
    c = thisObj.attr("data-presets"),
    d = thisObj.attr("data-preset_id"),
    p = thisObj.attr("data-query"),
    u = thisObj.attr("data-archive"),
    h = thisObj.attr("data-brand"),
    m = thisObj.attr("data-forceitems"),
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
        e.attr("data-itemid", r),
        e.attr("data-catid", _),
        e.attr("data-cat_id", l),
        e.attr("data-presets", c),
        e.attr("data-preset_id", d),
        e.attr("data-query", p),
        e.attr("data-archive", u),
        e.attr("data-brand", h),
        e.attr("data-forceitems", m),
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
    thisObj.attr("data-itemid", r),
    thisObj.attr("data-catid", _),
    thisObj.attr("data-cat_id", l),
    thisObj.attr("data-presets", c),
    thisObj.attr("data-preset_id", d),
    thisObj.attr("data-query", p),
    thisObj.attr("data-archive", u),
    thisObj.attr("data-brand", h),
    thisObj.attr("data-forceitems", m),
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
    thisObj.attr("data-itemid", r),
    thisObj.attr("data-catid", _),
    thisObj.attr("data-cat_id", l),
    thisObj.attr("data-presets", c),
    thisObj.attr("data-preset_id", d),
    thisObj.attr("data-query", p),
    thisObj.attr("data-archive", u),
    thisObj.attr("data-brand", h),
    thisObj.attr("data-forceitems", m),
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
function compareTable__resize() {
    var e, t;
    $("#js__sliderCompare_ID .compareTable__item:eq(0) .compareTable__itemProperties").each(function() {
        e = $(this).height(),
        t = $(this).attr("class").replace("compareTable__itemProperties ", ""),
        $("." + t).each(function() {
            e < $(this).height() && (e = $(this).height())
        }),
        $("." + t).height(e)
    })
}
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
        $("#filterResult__sticker_ID").attr("data-stickedat", $(this).closest(".columnBlock__spoiledContent").find(".js__columnBlock__spoiledContent__name").attr("data-spoiledcontent")),
        filterResult__sticker_Offset = e.closest(".columnBlock__spoiledContent").attr("data-bublealwaystop") ? e.offset().top - $("#filterResult__sticker_ID").parent().offset().top - 46 : e.offset().top - $("#filterResult__sticker_ID").parent().offset().top - 10,
        $("#filterResult__sticker_ID").hasClass("afterReset") ? $("#filterResult__sticker_ID").removeClass("afterReset") : $("#filterResult__sticker_ID").hasClass("active") ? e.closest(".columnBlock__spoiledContent").attr("data-nameclick") || e.closest(".columnBlock__spoiledContent").attr("data-bublealwaystop") ? (e.closest(".columnBlock__spoiledContent").hasClass("active") ? filterResult__sticker_Offset -= 37 : filterResult__sticker_Offset -= 32,
        $("#filterResult__sticker_ID").animate({
            top: filterResult__sticker_Offset
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
                      , r = $("#l" + element_data[0]);
                    if (null != n && null != r) {
                        switch (element_data[1]) {
                        case "0":
                            n.attr("disabled", "disabled");
                            break;
                        case "1":
                        case "2":
                            n.attr("disabled", !1)
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
        t.closest(".columnBlock__spoiledContent").find(".ot_customSelector"),
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
    var s = new Swiper("#js__sliderCompare_head_ID.swiper-container",{
        initialSlide: 0,
        slidesPerView: 2,
        speed: 150,
        freeModeMomentumVelocityRatio: 5,
        spaceBetween: 0,
        freeModeMinimumVelocity: .5,
        freeMode: !0,
        freeModeSticky: !0
    })
      , i = new Swiper("#js__sliderCompare_ID.swiper-container",{
        initialSlide: 0,
        slidesPerView: 2,
        speed: 150,
        freeModeMomentumVelocityRatio: 5,
        spaceBetween: 0,
        freeModeMinimumVelocity: .5,
        freeMode: !0,
        freeModeSticky: !0,
        pagination: {
            el: "#js__sliderCompare_ID .swiper-pagination"
        },
        paginationType: "fraction",
        navigation: {
            nextEl: "#js__sliderCompare_ID .js__compareSliderNext",
            prevEl: "#js__sliderCompare_ID .js__compareSliderPrew"
        },
        on: {
            init: function() {
                $("#js__sliderCompare_head_ID").removeClass("sticked").hide(1),
                compareTable__resize(),
                window.onscroll = function() {
                    411 < $(window).scrollTop() ? $("#js__sliderCompare_head_ID").addClass("sticked").css("display", "block") : $("#js__sliderCompare_head_ID").removeClass("sticked").css("display", "none")
                }
            }
        }
    });
    (i.params.control = s).params.control = i,
    $("body").on("click", ".js__moveCompareLeft", function() {
        var e = $(this).closest(".swiper-slide")
          , t = e.html()
          , a = e.index()
          , a = $("#js__sliderCompare_head_ID").find(".swiper-slide:eq(" + a + ")");
        return e.hasClass("swiper-slide-active") && (i.slidePrev(!1, 300),
        s.slidePrev(!1, 300)),
        $("#js__sliderCompare_ID .highlight").removeClass("highlight"),
        e.html(e.prev().html()),
        e.prev().addClass("highlight").html(t),
        t = a.html(),
        a.html(a.prev().html()),
        a.prev().html(t),
        !1
    }),
    $("body").on("click", ".js__moveCompareRight", function() {
        var e = $(this).closest(".swiper-slide")
          , t = e.html()
          , a = e.index()
          , a = $("#js__sliderCompare_head_ID").find(".swiper-slide:eq(" + a + ")");
        return e.hasClass("swiper-slide-next") && (i.slideNext(!1, 300),
        s.slideNext(!1, 300)),
        $("#js__sliderCompare_ID .highlight").removeClass("highlight"),
        e.html(e.next().html()),
        e.next().addClass("highlight").html(t),
        t = a.html(),
        a.html(a.next().html()),
        a.next().html(t),
        !1
    }),
    $(".js__compareDifference").click(function() {
        var e = $(this);
        return e.hasClass("active") || ($(".js__compareFull").removeClass("active"),
        e.addClass("active"),
        $(".js__isEqual").closest(".compareTable__itemProperties").slideUp(300)),
        !1
    }),
    $(".js__compareFull").click(function() {
        var e = $(this);
        return e.hasClass("active") || ($(".js__compareDifference").removeClass("active"),
        e.addClass("active"),
        $(".js__isEqual").closest(".compareTable__itemProperties").slideDown(300)),
        !1
    })
});
var ua = window.navigator.userAgent, msie = ua.indexOf("MSIE "), donotcall_init;
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
    var r, _, l = {
        ajax: 1,
        mode: o,
        cat_id: s
    }, c = document.forms.consumables_select.elements;
    for (r in c)
        "select-one" == c[r].type && (l[c[r].name] = c[r].value);
    return "" != o && $.post("/consumables.php", l, function(e, t, a) {
        0 < msie ? $("#consumables_" + o).html(e) : n.innerHTML = e
    }, "html"),
    "form" == a ? (_ = document.getElementById("selectConsumables_gotoID"),
    "" == o && 1 == t ? (a = document.getElementById("consumables_item_code"),
    _.href = "/consumables/" + a.value) : _.href = "/consumables/",
    _.href += "?cat_id=" + s) : ((_ = document.getElementById("consumables_select")).action = "" == o && 1 == t ? "/consumables/" + e.value : "/consumables/",
    _.action += "?cat_id=" + s),
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
    var r, _, l = {
        ajax: 1,
        mode: o,
        cat_id: s
    }, c = document.forms.consumables_select.elements;
    for (r in c)
        "select-one" == c[r].type && (l[c[r].name] = c[r].value);
    return "" != o && $.post("/consumables_cars.php", l, function(e, t, a) {
        0 < msie ? $("#consumables_" + o).html(e) : n.innerHTML = e
    }, "html"),
    "form" == a ? (_ = document.getElementById("selectConsumablesAuto_gotoID"),
    "" == o && 1 == t ? (a = document.getElementById("consumables_car_id"),
    _.href = "/consumables_cars/" + a.value) : _.href = "/consumables_cars/",
    _.href += "?cat_id=" + s) : ((_ = document.getElementById("consumables_select")).action = "" == o && 1 == t ? "/consumables_cars/" + e.value : "/consumables_cars/",
    _.action += "?cat_id=" + s),
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
function toggle_fileTickets_action(s, e, i, o, n, r) {
    var _ = (s = s).closest(".js__fileUpload")
      , e = e
      , i = i
      , o = o || 0
      , n = n || 0
      , r = r || 0;
    switch (jQuery_ajax_set_encoding(),
    e) {
    case "reload_tmp":
        $.get("/feedback_upload.php", {
            action: e,
            ticket_id: i,
            message_id: r
        }, function(e, t, a) {
            _.find(".js__fileUpload__listContainer").html(e)
        }, "html");
        break;
    case "delete_tmp":
        $.get("/feedback_upload.php", {
            action: e,
            ticket_id: i,
            message_id: r,
            doc_id: o,
            doc_key: n
        }, function(e, t, a) {
            "0" == e.error ? (toggle_fileTickets_action(s, "reload_tmp", i, o, n, r),
            setTimeout(void _.find(".js__fileUpload__message").removeClass("noDisplay").html("Документ был успешно удалён"), 4e3)) : (_.find(".js__fileUpload__message").html(e.error_text),
            _.find(".js__fileUpload__message").addClass("error"),
            _.find(".js__fileUpload__message").removeClass("noDisplay"),
            setTimeout(void _.find(".js__fileUpload__message").addClass("noDisplay"), 1e4))
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
    if ($("#basket_pickup__ID .multicart__orderoption__itemLine").each(function() {
        var e = 0
          , t = $(this).find(".js__pickupPoint").attr("id")
          , a = "<div style='width: 250px;'>" + $(this).find(".js__multicart__orderoption__itemLineData_1").html()
          , e = $(this).find(".js__pickupPoint").attr("disabled") ? (a += "</div>",
        0) : (a = a + " <br>" + $(this).find(".js__multicart__orderoption__itemLineData_2").html() + "<br>" + $(this).find(".js__multicart__orderoption__itemLineData_3").html() + "<br><a href='" + t + "' class='button button__orange js__linkAtMap js__linkAsLabel ' title='Заберу заказ здесь' data-for='" + t + "' style='margin: 10px 0 0'>Выбрать этот пункт выдачи</a> </div>",
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
$("body").on("click", ".js__galery_uploadItem__image", function() {
    return $(this).closest(".galery_uploadItem").find(".galery_uploadItem__manage").slideToggle(300),
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
$("body").on("click", ".js__captcha_img", function() {
    $(this).closest(".js__formBox ").find("#captcha").focus()
}),
$(document).ready(function() {
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
        $("#account__birthday_year_ID").val()
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
    $(this).closest("form").find(".js__formBoxMainButton").html("Заказать на " + $(this).find("option:selected").text())
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
}),
$("body").on("change", ".js__multicartChange", function(e, t) {
    "new" == $(this).val() ? $(".js__multicartCreatePopup").click() : document.location.href = $(this).val()
}),
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
        var e = a.closest(".multicart__orderoption__itemLine").detach()
          , t = $(".js__productpage_pickupPoint_static .multicart__orderoption__itemLine").detach();
        $(".js__productpage_pickupPoint_dynamic").prepend(t),
        $(".js__productpage_pickupPoint_static").prepend(e),
        $(".js__pickupPoints").animate({
            opacity: 1
        }, 300)
    }),
    1 < $(".js__pickupPoint").length && $(".js__ajaxSingleExchange[data-handler=basketmorepickup]").removeClass("noDisplay")
}),
$(document).ready(function() {
    $("#basketpickupPointsMap__ID").on("click", ".js__linkAtMap", function() {
        $(".js__preloadAllPickpoinst.active").click()
    }),
    $("#popup_message").on("click", ".js__linkDeleteBasketItem", function() {
        window.yaCounter234640 && window.yaCounter234640.reachGoal("BASKETREMOVE")
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
        e && 2 <= $(".js__header__search__inputText").val().length && $(".js__header__search__inputText").is(":focus") ? a.getResponseHeader("X-Id") == requestid ? $(".js__fastSearchResultsCover").fadeIn(100, function() {
            $(this).html(e)
        }) : $(".js__fastSearchResultsCover").fadeIn(100) : $(".js__fastSearchResultsCover").fadeOut(100, function() {
            $(this).html("")
        })
    }).fail(function() {
        return $(".js__fastSearchResultsCover").fadeOut(100, function() {
            $(this).html("")
        }),
        !1
    })
};
function catmenuAJAX_Upload(e) {}
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
function js__animateSlideGoTo(e) {
    var t;
    return $(e.attr("href")).length && !e.hasClass("active") && (t = e.closest(".js__catalogList_animateSlidingGroup").find(".js__ajaxSingleExchange.active"),
    $(t.attr("href")).slideUp(400).removeClass("active"),
    t.removeClass("active"),
    e.addClass("active"),
    $(e.attr("href")).slideUp(0).slideDown(400).addClass("active"),
    "true" == e.attr("data-backlighting") && ($(e.attr("href")).removeClass("backlightReverse"),
    $(e.attr("href")).addClass("backlight"),
    setTimeout(function() {
        $(e.attr("href")).addClass("backlightReverse")
    }, 600))),
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
    (e = e.closest(".js__bubbleCoverArea")).attr("data-bubbled") || e.attr("data-bubbled", "bubble" + getRandomInt(1, 1e4)),
    $("#" + e.attr("data-bubbled") + "__ID").length || (hideAllBubbles(),
    $('<div class="bubble" id="' + e.attr("data-bubbled") + '__ID"title="' + langRu.close + '">' + t + '<span class="filterResult__stickerClose js__bubbleCloseLink" title="' + langRu.close + '"></span></div>').appendTo(e),
    ("bottom" === a ? e.find(".bubble").addClass("bubbleBottom").css({
        top: "100%",
        left: 0
    }) : e.find(".bubble").css("top", e.find(".bubble").height() / 2 * -1 - 14)).fadeIn(300))
}
function hideAllBubbles() {
    $(".bubble").length && $(".bubble").fadeOut(300, function() {
        $(this).remove()
    })
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
        }).draggable()
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
        $(".js__header__basketSticker").html(e.sticker))
    }).fail(function() {})),
    $(".catalogList__spoiledItem").not(".isOpened").each(function() {
        $(this).find(".catalogList__spoiledItem__content").css("display", "none")
    }),
    $(".js__spoiledBox").not(".isOpened").each(function() {
        $(this).find(".js__spoiledBox__content").css("display", "none").removeClass("js__spoiledBox__content__initialHeight")
    })
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
    var e;
    $(window.location.hash).length && 3 < window.location.hash.length && ($("a.ui-tabs-anchor[href=" + window.location.hash + "]").click(function() {}),
    $("a.js__tabsManage[href=" + window.location.hash + "]").closest(".catalogList__spoiledItem ").addClass("isOpened"),
    $(window.location.hash).find(".js__spoiledItemName").length && $(window.location.hash).find(".js__spoiledItemName a").click(),
    $(window.location.hash).hasClass("js__ajaxSingleExchange") && (ajaxExchange(e = $(window.location.hash)),
    $("#" + e.attr("data-itemid") + "_content__ID").slideToggle(400))),
    $(".js__indexHat__main").length && (bannersCounter($(".js__indexHat__main .swiper-slide:eq(0)").attr("data-bnrid")),
    new Swiper(".js__indexHat__main .swiper-container",{
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
            init: function() {
                $(".js__indexHat__main").addClass("swiperActive")
            },
            slideChange: function() {
                bannersCounter_eventer(this)
            }
        }
    })),
    $(".js__indexStories").length && (bannersCounter($(".js__indexStories .swiper-slide:eq(0)").attr("data-bnrid")),
    new Swiper(".js__indexStories .swiper-container",{
        initialSlide: 0,
        slidesPerView: 2.5,
        spaceBetween: 15,
        speed: 600,
        autoplay: {
            delay: 4e5
        },
        pagination: {
            el: ".js__indexStories .swiper-pagination",
            clickable: !0
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
    new Swiper(".js__indexActions__main .swiper-container",{
        initialSlide: 0,
        slidesPerView: 1,
        spaceBetween: 15,
        speed: 600,
        autoplay: {
            delay: 4e5
        },
        pagination: {
            el: ".js__indexActions__main .swiper-pagination",
            clickable: !0
        },
        on: {
            slideChange: function() {
                var e = this;
                e.slides[e.activeIndex].attributes["data-bnrid"].value && 0 != e.slides[e.activeIndex].attributes["data-bnrid"].value && (bannersCounter(e.slides[e.activeIndex].attributes["data-bnrid"].value),
                e.slides[e.activeIndex].attributes["data-bnrid"].value = 0)
            },
            init: function() {
                $(".js__indexActions__main").addClass("swiperActive")
            }
        }
    })),
    $(".js__indexActions__offerOfTheDay").length && (new Swiper(".js__indexActions__offerOfTheDay .swiper-container",{
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
            init: function() {
                $(".js__indexActions__offerOfTheDay").addClass("swiperActive")
            }
        }
    }),
    $(".js__indexActions__offerOfTheDay .swiper-slide").length < 3 && $(".js__indexActions__offerOfTheDay .swiper-pagination").hide()),
    $(".js__drawCats").length && new Swiper(".js__drawCats .swiper-container",{
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
            init: function() {
                $(".js__drawCats").addClass("swiperActive")
            }
        }
    }),
    $(".js__drawPopularCats").length && new Swiper(".js__drawPopularCats .swiper-container",{
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
            init: function() {
                $(".js__drawPopularCats").addClass("swiperActive")
            }
        }
    }),
    $(".js__tileBrands").length && new Swiper(".js__tileBrands .swiper-container",{
        initialSlide: 0,
        slidesPerView: 2.5,
        spaceBetween: 15,
        speed: 400,
        pagination: {
            el: ".js__tileBrands .swiper-pagination",
            clickable: !0
        },
        on: {
            init: function() {
                $(".js__tileBrands").addClass("swiperActive")
            }
        }
    }),
    $(".js__indexActions").length && new Swiper(".js__indexActions .swiper-container",{
        slidesPerView: 1,
        spaceBetween: 1,
        loop: !0,
        speed: 400,
        pagination: {
            el: ".js__indexActions .swiper-pagination",
            clickable: !0
        },
        on: {
            init: function() {
                $(".js__indexActions").addClass("swiperActive")
            }
        }
    }),
    $(".js__sliderNews").length && new Swiper(".js__sliderNews .swiper-container",{
        slidesPerView: 1.5,
        spaceBetween: 15,
        loop: !0,
        speed: 400,
        pagination: {
            el: ".js__sliderNews .swiper-pagination",
            clickable: !0
        },
        on: {
            init: function() {
                $(".js__sliderNews").addClass("swiperActive")
            }
        }
    }),
    $(".js__tabs_hits").length && new Swiper(".js__tabs_hits .swiper-container",{
        initialSlide: 0,
        slidesPerView: 2,
        spaceBetween: 0,
        speed: 400,
        pagination: {
            el: ".js__tabs_hits .swiper-pagination",
            clickable: !0
        },
        on: {
            init: function() {
                $(".js__tabs_hits").addClass("swiperActive")
            }
        }
    }),
    $(".js__tabs_best_prices").length && new Swiper(".js__tabs_best_prices .swiper-container",{
        initialSlide: 0,
        slidesPerView: 2,
        spaceBetween: 0,
        speed: 400,
        pagination: {
            el: ".js__tabs_best_prices .swiper-pagination",
            clickable: !0
        },
        on: {
            init: function() {
                $(".js__tabs_best_prices").addClass("swiperActive")
            }
        }
    }),
    $(".js__tabs_new").length && new Swiper(".js__tabs_new .swiper-container",{
        initialSlide: 0,
        slidesPerView: 2,
        spaceBetween: 0,
        speed: 400,
        pagination: {
            el: ".js__tabs_new .swiper-pagination",
            clickable: !0
        },
        on: {
            init: function() {
                $(".js__tabs_new").addClass("swiperActive")
            }
        }
    }),
    $(".js__tabs_recommend").length && new Swiper(".js__tabs_recommend .swiper-container",{
        initialSlide: 0,
        slidesPerView: 2,
        spaceBetween: 0,
        speed: 400,
        autoplay: {
            delay: 3e5
        },
        pagination: {
            el: ".js__tabs_recommend .swiper-pagination",
            clickable: !0
        },
        on: {
            init: function() {
                $(".js__tabs_recommend").addClass("swiperActive")
            }
        }
    }),
    $(".js__tileVideoReviews").length && new Swiper(".js__tileVideoReviews .swiper-container",{
        slidesPerView: 1.5,
        spaceBetween: 15,
        loop: !0,
        speed: 400,
        pagination: {
            el: ".js__tileVideoReviews .swiper-pagination",
            clickable: !0
        },
        on: {
            init: function() {
                $(".js__tileVideoReviews").addClass("swiperActive")
            }
        }
    }),
    $(".js__tileReviews").length && new Swiper(".js__tileReviews .swiper-container",{
        slidesPerView: 1,
        spaceBetween: 15,
        loop: !0,
        speed: 400,
        pagination: {
            el: ".js__tileReviews .swiper-pagination",
            clickable: !0
        },
        on: {
            init: function() {
                $(".js__tileReviews").addClass("swiperActive")
            }
        }
    }),
    $(".js__displayedItem__imagesSlider").length && new Swiper(".js__displayedItem__imagesSlider .swiper-container",{
        slidesPerView: 1,
        spaceBetween: 15,
        loop: !0,
        speed: 400,
        zoom: !0,
        pagination: {
            el: ".js__displayedItem__imagesSlider .swiper-pagination",
            clickable: !0
        },
        on: {
            init: function() {
                3 < $(".js__displayedItem__imagesSlider .productPage__displayedItem__imagesSlider__item").length && $(".js__displayedItem__imagesSlider").addClass("swiperActive")
            }
        }
    }),
    2 < $(".js__tilePopularItems .swiper-slide").length && new Swiper(".js__tilePopularItems .swiper-container",{
        initialSlide: 0,
        slidesPerView: 2,
        spaceBetween: 0,
        speed: 400,
        pagination: {
            el: ".js__tilePopularItems .swiper-pagination",
            clickable: !0
        }
    }),
    2 < $(".js__tileRecentViews .swiper-slide").length && new Swiper(".js__tileRecentViews .swiper-container",{
        initialSlide: 0,
        slidesPerView: 2,
        spaceBetween: 0,
        speed: 400,
        pagination: {
            el: ".js__tileRecentViews .swiper-pagination",
            clickable: !0
        }
    }),
    $(".js__tileOriginalAccessoriesList").length && ($(".js__tileOriginalAccessoriesList").width($(".js__tileOriginalAccessoriesList").width() + 30).css("margin-left", "-15px").css("position", "relative"),
    $(".js__tileOriginalAccessories__item .swiper-container").each(function() {
        var e;
        2 < $(this).find(".swiper-slide").length && (e = $(this).closest(".js__tileOriginalAccessories__item").attr("id"),
        new Swiper($(this),{
            initialSlide: 0,
            slidesPerView: 2,
            spaceBetween: 0,
            speed: 400,
            pagination: {
                el: "#" + e + " .swiper-pagination",
                clickable: !0
            },
            on: {
                init: function() {
                    $("#" + e).addClass("swiperActive")
                }
            }
        }))
    })),
    $(".js__tileAccessoriesList").length && ($(".js__tileAccessoriesList").width($(".js__tileAccessoriesList").width() + 30).css("margin-left", "-15px").css("position", "relative"),
    $(".js__tileAccessories__item .swiper-container").each(function() {
        var e;
        2 < $(this).find(".swiper-slide").length && (e = $(this).closest(".js__tileAccessories__item").attr("id"),
        new Swiper($(this),{
            initialSlide: 0,
            slidesPerView: 2,
            spaceBetween: 0,
            speed: 400,
            pagination: {
                el: "#" + e + " .swiper-pagination",
                clickable: !0
            },
            on: {
                init: function() {
                    $("#" + e).addClass("swiperActive")
                }
            }
        }))
    })),
    $(".js__tileUserGalerys").length && $(".js__tileUserGalerys .js__galeryPreviews__item:not(.noDisplay) .swiper-container").each(function() {
        var e = $(this).closest(".js__galeryPreviews__item").attr("id");
        new Swiper($(this),{
            initialSlide: 0,
            slidesPerView: "auto",
            spaceBetween: 15,
            speed: 400,
            pagination: {
                el: "#" + e + " .swiper-pagination",
                clickable: !0
            },
            on: {
                init: function() {
                    $("#" + e).addClass("swiperActive")
                }
            }
        })
    });
    var t, a = !0, s = $("#headline").height();
    $(".js__headline__menuLink").click(function() {
        return $(this).hasClass("active") ? ($(".js__headline__bar.active").slideUp(400, function() {
            $(".js__header__basketNotify").hide(1),
            $(".js__header__basketSticker").show(1),
            $("#scrollcontent__ID").css("top", 0),
            $("#scrollcontent_cover__ID").height("auto").removeClass("scrollLock"),
            window.scrollTo(0, t)
        }).removeClass("active"),
        $(".js__headline__menuLink.active").removeClass("active")) : ($(".js__headline__menuLink.active").length || (t = $(window).scrollTop()),
        $("#bars_cover__ID").css("top", s),
        $("#scrollcontent__ID").css("top", -1 * t),
        $("#scrollcontent_cover__ID").height($(window).height()).addClass("scrollLock"),
        $(".js__headline__menuLink.active").length && ($(".js__headline__menuLink.active").removeClass("active"),
        $(".js__headline__bar.active").slideUp(400, function() {
            $(".js__header__basketNotify").hide(1),
            $(".js__header__basketSticker").show(1)
        }).removeClass("active")),
        $("#" + $(this).attr("data-barid")).slideDown(400, function() {
            $(this).find("input:text").length && $(this).find("input:text").focus(),
            $(this).addClass("active")
        }),
        $(this).addClass("active"),
        a && $("#scrollcontent_cover__ID").click(function() {
            a = !1,
            $(".js__headline__menuLink.active").length && ($("#scrollcontent__ID").css("top", 0),
            $("#scrollcontent_cover__ID").height("auto").removeClass("scrollLock"),
            window.scrollTo(0, t),
            $(".js__headline__menuLink.active").removeClass("active"),
            $(".js__headline__bar.active").slideUp(400, function() {
                $(".js__header__basketNotify").hide(1),
                $(".js__header__basketSticker").show(1)
            }).removeClass("active"))
        })),
        !1
    }),
    $(".js__openLoginPanel").click(function() {
        return $(".js__headerLoginPanel").click(),
        !1
    }),
    $("body").on("click", ".js__closeHeadPanel", function() {
        return $(".js__headline__menuLink.active").click(),
        !1
    }),
    $(".js__openMenuPanel").click(function() {
        return $(".js__headerMenuPanelLink").click(),
        !1
    }),
    $(".js__openGEOLinkPanel").click(function() {
        return $(".js__cityselectpopupopenmob").click(),
        !1
    }),
    $(".js__headerGEOLink").click(function() {
        $(".js__cityselectpopupopenmob").click()
    }),
    $(".js__catalogLine__mainLink").click(function() {
        return $(this).toggleClass("active"),
        $(".js__catalogLine__actionLink").hasClass("active") && ($(".js__catalogLine__actionLink").removeClass("active"),
        $(".js__catalogLine__actionPanel").slideUp(300)),
        $(".js__catalogLine__panel").slideToggle(300, function() {}),
        !1
    }),
    $(".js__catalogLine__actionLink").click(function() {
        return $(this).toggleClass("active"),
        $(".js__catalogLine__mainLink").hasClass("active") && ($(".js__catalogLine__mainLink").removeClass("active"),
        $(".js__catalogLine__panel").slideUp(300)),
        $(".js__catalogLine__actionPanel").slideToggle(300),
        !1
    }),
    $(".js_mCM_toggler").on("click", function(e) {
        var t = $(this);
        return t.closest(".mCM__item").hasClass("active") ? t.parent().find(".subCategoryMenu").slideUp(300, function() {
            $(this).closest(".mCM__item").removeClass("active")
        }) : ($(".mainMenu .mCM__item.active").length && $(".mainMenu .mCM__item.active .mCM__item__link").parent().find(".subCategoryMenu").slideUp(300, function() {
            $(this).closest(".mCM__item").removeClass("active")
        }),
        t.closest(".mCM__item").addClass("active"),
        t.parent().find(".subCategoryMenu").slideDown(300)),
        !1
    }),
    $(".js__mCM_link").on("click", function(e) {
        if (!$(this).hasClass("js__mayGo")) {
            var t = $(this);
            return t.addClass("js__mayGo").parent().find(".subCategoryMenu").slideDown(300, function() {
                $(this).closest(".mCM__item").addClass("active")
            }),
            $(this).closest(".mCM__item").hasClass("menuUpdated") || catmenuAJAX_Upload(t),
            !1
        }
    }),
    $(".js__mCM_linkClose").on("click", function(e) {
        var t = $(this);
        return t.parent().hasClass("js__mayGo") ? t.attr("title", "Развернуть").parent().removeClass("js__mayGo").parent().find(".subCategoryMenu").slideUp(300, function() {
            $(this).closest(".mCM__item").removeClass("active")
        }) : (t.attr("title", "Свернуть").parent().addClass("js__mayGo").parent().find(".subCategoryMenu").slideDown(300, function() {
            $(this).closest(".mCM__item").addClass("active")
        }),
        t.closest(".mCM__item").hasClass("menuUpdated") || catmenuAJAX_Upload($(this).parent())),
        !1
    }),
    $(".js_sCM_link").on("click", function(e) {
        var t = $(this);
        if (!t.hasClass("js__mayGo"))
            return t.addClass("js__mayGo").parent().addClass("active").find(".subsubCategoryMenu").slideDown(300),
            !1
    });
    var o, n, r, _, l, c, d, p, u, h, m = throttle(searchQuery, 800);
    $(".js__header__search__inputText").on("keydown keyup change", function() {
        var e = $(this);
        (o = e.val()) && "" != o && 2 <= o.length ? n != o && (n = o,
        requestid = (new Date).getTime(),
        m(n, requestid)) : $(".js__fastSearchResultsCover").fadeOut(200, function() {
            e.html("")
        })
    }),
    $(".js__header__search__inputText").on("focus", function() {
        $(this);
        "" != $(".js__fastSearchResultsCover").html() && $(".js__fastSearchResultsCover").fadeIn(100)
    }),
    $(".js__header__search__inputText").on("focusout", function() {
        var e = $(this);
        $(".js__fastSearchResultsCover").fadeOut(200, function() {
            e.html("")
        })
    }),
    $(".js__header__searchCover form").on("submit", function() {
        var e, t = $(this);
        "" == $(".js__header__search__inputText").val() && (e = (e = $(".js__header__search__inputText").attr("placeholder")).slice(0, -1),
        $(".js__header__search__inputText").val(e),
        t.submit())
    }),
    $(".js__fastSearch__query").length && (r = new Object,
    _ = new Object,
    h = !(u = 1),
    $(".js__fastSearch__query").on("keydown keyup change", function() {
        var e = $(this);
        if (l = e.attr("data-fastsearchitemsid"),
        r[l] || (r[l] = new Object,
        $("#" + l + " [data-fastsearchvalue]").each(function() {
            r[l][$(this).attr("id")] = $(this).attr("data-fastsearchvalue")
        })),
        d = e.val().toLowerCase(),
        p = d.split(" "),
        (d = e.val().trim()) && "" != d) {
            if (c != d) {
                for (c = d,
                e.closest(".js__fastSearch").find(".js__fastSearch__close").addClass("active"),
                i = 0,
                h = !(u = 1),
                _[l] = new Object; i < p.length; ) {
                    for (var t in r[l])
                        r[l][t].toLowerCase().indexOf(p[i]) + 1 && (_[l][t] ? (u = _[l][t] + 1,
                        _[l][t] = u) : _[l][t] = 1);
                    i++
                }
                for (var t in r[l])
                    _[l][t] == u ? (e.closest(".js__fastSearch").find(".js__fastSearch__emptyResult").removeClass("active"),
                    h = !0,
                    $("#" + t).show()) : $("#" + t).hide();
                h || (e.closest(".js__fastSearch").find(".js__fastSearch__emptyResult").addClass("active"),
                $("#" + l + " [data-fastsearchvalue]").hide())
            }
        } else
            "" == c && e.closest(".js__fastSearch").find(".js__fastSearch__close").removeClass("active"),
            c = "",
            $("#" + l + " [data-fastsearchvalue]").show(),
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
        var t, a = $(this);
        return a.closest(".statusline__messages").slideUp(400),
        $(".js__statuslineMark").removeClass("active"),
        t = a.attr("data-statusdomain"),
        a = a.attr("data-statuscode"),
        $.cookie("top_orders_close_time", a, {
            expires: 7,
            path: "/",
            domain: t
        }),
        !1
    }),
    $(".js__warmline__text").on("click", function(e) {
        $(this).closest(".js__warmline").addClass("active")
    }),
    $(".js__warmline__close").on("click", function(e) {
        var t, a = $(this);
        return a.closest(".js__warmline").slideUp(300),
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
        var e, t = $(this), a = t.attr("data-minheight") || 100;
        "basketpickupPointsMapCover__ID" == t.closest(".js__usualMinHeightBlock").attr("id") && (e = $(window).height(),
        t.height(parseInt(.6 * e)),
        $("#basketpickupPointsMap__ID").height(parseInt(.6 * e))),
        t.height() - 36 > a ? (t.closest(".js__usualMinHeightBlock").find(".js__usualMinHeightLink").css("display", "inline-block"),
        t.attr("data-fullheight", t.height()).height(a).addClass("isWork")) : t.closest(".js__usualMinHeightBlock").find(".js__usualMinHeightLink").css("display", "none")
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
    $(".js__hiddenRow").length && $(".js__hiddenRow").css("display", "none"),
    $(".js__hiddenRow__eventer").on("click", function(e) {
        $(this).closest(".js__hiddenRow__cover").find(".js__hiddenRow").fadeToggle(300)
    });
    var f = 0;
    $(".js__hiddenBy5Steps__openLink").on("click", function(e) {
        var t = $(this)
          , a = t.attr("data-stepnum") || 5;
        if (f = 0,
        5 < t.closest(".js__hiddenBy5Steps__cover").find(".js__hiddenBy5Steps__item.noDisplay").length)
            for (; f < a; )
                t.closest(".js__hiddenBy5Steps__cover").find(".js__hiddenBy5Steps__item.noDisplay").eq(f).fadeToggle(300, function() {
                    $(this).find(".swiper-container").length && new Swiper($(this).find(".swiper-container"),{
                        initialSlide: 0,
                        slidesPerView: "auto",
                        spaceBetween: 15,
                        speed: 600,
                        pagination: {
                            el: ".js__tileUserGalerys .swiper-pagination",
                            clickable: !0
                        }
                    }),
                    $(this).removeClass("noDisplay")
                }),
                f++;
        else
            t.closest(".js__hiddenBy5Steps__cover").find(".js__hiddenBy5Steps__item.noDisplay").fadeToggle(300, function() {
                $(".js__hiddenBy5Steps__item.noDisplay .swiper-container").length && $(".js__hiddenBy5Steps__item.noDisplay .swiper-container").each(function() {
                    new Swiper($(this),{
                        initialSlide: 0,
                        slidesPerView: "auto",
                        spaceBetween: 15,
                        speed: 600,
                        pagination: {
                            el: ".js__tileUserGalerys .swiper-pagination",
                            clickable: !0
                        }
                    })
                }),
                $(this).removeClass("noDisplay")
            }),
            t.hide(1);
        return !1
    });
    var g, v, j, b, k, y = !1;
    $(".js__spoiledItemName a").on("click", function(e) {
        var t = $(this).closest(".catalogList__spoiledItem");
        return $(this).hasClass("js__mayGo") || (y = !1,
        t.hasClass("isOpened") ? y = !0 : t.addClass("isOpened"),
        t.find(".catalogList__spoiledItem__content").slideToggle(300, function() {
            var e;
            if (y && t.closest(".catalogList__spoiledItem").removeClass("isOpened"),
            t.find(".js__spoiledItemName").attr("data-spoiledcontent") && ((e = t.closest("#search_form_id").find("input[name=" + t.find(".js__spoiledItemName").attr("data-spoiledcontent") + "]")).val(),
            t.hasClass("isOpened") ? e.val(1) : e.val(0),
            t.find(".filterTrackEvent:eq(0)").change()),
            "#" != t.find("a").attr("href"))
                return history.pushState(null, null, t.find("a").attr("href")),
                !1
        })),
        !1
    }),
    $(".js__spoiledBoxName").on("click", function(e) {
        return $(this).closest(".js__spoiledBox").find(".js__spoiledBox__content").slideToggle(300, function() {
            $(this).closest(".js__spoiledBox").toggleClass("isOpened")
        }),
        !1
    }),
    $("body").on("click", ".js__animateToggleLink", function(e) {
        var t;
        return $($(this).attr("href")).length && !$(this).hasClass("active") && ((t = $(this)).closest(".js__animateToggleCover").find(".js__animateToggle.active").removeClass("active").slideUp(300),
        t.closest(".js__animateToggleCover").find(".js__animateToggleLink.active").removeClass("active"),
        t.closest(".js__animateToggleCover").find(".js__animateToggleLink[href=" + t.attr("href") + "]").addClass("active"),
        t.closest(".js__animateToggleCover").find(".js__animateToggleHeader").slideDown(300),
        t.closest(".js__animateToggleCover").find(".js__animateToggle" + t.attr("href")).slideDown(300).addClass("active"),
        t.closest(".js__animateToggleCover").find(".js__animateToggle" + t.attr("href") + " input[name=delivery_type]:eq(0)").click(),
        t.attr("data-bottomnav") && $("html, body").animate({
            scrollTop: +$("#basket_pickupID").offset().top + "px"
        }, 300)),
        !1
    }),
    $("body").on("click", ".js__animateGoTo", function(e) {
        js__animateGoTo($(this))
    }),
    $("body").on("click", ".js__tabs_externalLink", function(e) {
        var t = $(this);
        $("a.js__tabsManage[href=" + t.attr("href") + "]").closest(".catalogList__spoiledItem ").find(".js__spoiledItemName a").click(),
        $(".js__tabs_externalLink.active").removeClass("active");
        var a = t.attr("data-togglestationgroup");
        return a ? $("a[data-togglestationgroup=" + a + "]").each(function() {
            $(this).addClass("active")
        }) : t.addClass("active"),
        t.attr("data-aniscroll") || $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 114 + "px"
        }, 600),
        !1
    }),
    $(".js__shareEvent").click(function() {
        return navigator.share({
            title: $("body h1").text() + " — Compass",
            url: window.location
        }),
        window.yaCounter234640 && window.yaCounter234640.reachGoal("mobile_shareButtonEvent"),
        !1
    }),
    $("body").on("click", ".js__numsToBuy__plus", function() {
        var e = $(this);
        if (j = e.closest(".catalog__displayedItem__numsToBuy").find(".js__itemIDCount"),
        k = j.attr("data-maxitems") || 999,
        g = +j.val(),
        v = 1,
        g < k && (hideAllBubbles(),
        j.removeClass("error"),
        j.val(+g + +v).change()),
        "#" == e.attr("href"))
            return !1
    }),
    $("body").on("click", ".js__numsToBuy__minus", function() {
        var e = $(this);
        if (j = e.closest(".catalog__displayedItem__numsToBuy").find(".js__itemIDCount"),
        b = j.attr("data-minitems") || 1,
        g = +j.val(),
        v = 1,
        b < g)
            hideAllBubbles(),
            j.removeClass("error"),
            j.val(+g - +v).change();
        else if (j.addClass("error"),
        1 != b)
            return showBubble(e, e.attr("data-bubblecontent"), "bottom"),
            !1;
        if ("#" == e.attr("href"))
            return !1
    });
    var w, C, x, I = throttle(incdecQuery, 1e3);
    $("body").on("mouseout keydown keyup change focus", ".js__itemIDCount", function() {
        var e = $(this);
        b = +e.attr("data-minitems") || 1,
        k = +e.attr("data-maxitems") || 999,
        g = +e.val(),
        b <= g ? (hideAllBubbles(),
        e.removeClass("error"),
        g && "" != g && w != g && (w = g,
        requestid = (new Date).getTime(),
        I(e, requestid)),
        $('.js__ajaxExchange[data-handler="buy"][data-itemid=' + e.attr("data-itemid") + "][data-itemid=" + e.attr("data-itemid") + "]").attr("data-itemcount", g)) : (e.addClass("error"),
        1 != b && showBubble(e = e.parent().find(".js__numsToBuy__minus"), e.attr("data-bubblecontent"), "bottom"))
    }),
    $("body").on("click", ".js__setCouplePrice", function() {
        var e = $(this);
        return e.closest(".js__priceCountCover").find(".js__itemIDCount").val(+e.attr("data-itemcouplecount")).change(),
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
        C = $(this).attr("data-filledlength") || 130,
        (x = $(this).val().length) < C ? e.closest(".importantmarkCover").removeClass("filledNorma").removeClass("filledOk") : C <= x && x < 1.5 * C ? e.closest(".importantmarkCover").removeClass("filledOk").addClass("filledNorma") : e.closest(".importantmarkCover").removeClass("filledNorma").addClass("filledOk")
    }),
    $("body").on("selectmenuchange", ".js__reloadPageByValue", function(e, t) {
        var a = $(this);
        a.attr("data-selecttype") ? parseSetParameters(a.attr("data-selecttype"), this.value) : document.location.href = a.val()
    }),
    $("body").on("change", ".js__reloadPageByValue", function(e, t) {
        var a = $(this);
        a.attr("data-selecttype") ? parseSetParameters(a.attr("data-selecttype"), this.value) : document.location.href = a.val()
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
    }),
    window.onresize = function() {
        $(".popup.active").length && popup_checkSizeAndPosition($(".popup.active").height(), $(".popup.active").attr("id"))
    }
    ,
    $(".js__debugInfo").on("click", ".js__resizeDebugInfo", function(e) {
        return $(".js__debugInfo").toggleClass("fullHeigth"),
        !1
    }),
    $(".js__cityselectpopupopenmob").click(function() {
        window.yaCounter234640 && window.yaCounter234640.reachGoal("cityselectpopupopenmob")
    }),
    $(".js__cityselectclickmob").click(function() {
        window.yaCounter234640 && window.yaCounter234640.reachGoal("cityselectclickmob")
    }),
    otUIInit()
});
