$(function () {

    $(document).ready(function(){
        $("#preload-bg").css({"top": "-10000px"})
        $("body").css({"overflow": "auto"})
        $("#charities-container").css({"max-width": $(this).width() - 20});

        initMobileMainMenu("charities");

        //Menu
        var cur_category = $("#cur_cat").val();
        if (cur_category != ""){

            if (cur_category == "index"){
                $("ul.dropdown").addClass("index");
            }else{
                $("ul.dropdown #" + cur_category).addClass("current");
            }
        }

        $("ul.dropdown>li>a").mouseover(function(){

            $("ul.dropdown").addClass("dim");
            $(this).addClass("active");
            $("ul.dropdown").removeClass("first");
            $("ul.dropdown.dim ul li a").removeClass("active");
        })

        $("ul.dropdown>li").mouseleave(function(){

            $("ul.dropdown").removeClass("first");
            $("ul.dropdown").removeClass("dim");
            $("ul.dropdown li a").removeClass("active");

        })

        $(".mm-listview a#strategic-themes").click(function() {
            window.location.reload();
            console.log("asdf");
        });

        $(".mm-listview .first-nav#racing").parent().find(".mm-next").css({"display": "none"});
        $(".mm-listview .first-nav#football").parent().find(".mm-next").css({"display": "none"});
        $(".mm-listview a#racing").parent().find(".mm-next").css({ "display": "none" });
        $(".mm-listview a#football").parent().find(".mm-next").css({ "display": "none" });

        mobileMenuAbsolute();

        setTimeout(function(){
            activateLeftNavMobileMenu();
        },500);

        if (location.href.indexOf('english') > -1) {

            $('nav#mainNav-en-mobile').data('mmenu').bind('opened', function () {
                $('html').css("position", "fixed");
                $('body').css("position", "fixed");
                $('body').css("overflow", "hidden");
                $('body').css("height", "100%");

                $("#body").css({"max-width": $(window).width()});
                $("#charities-container").css({"max-width": $(window).width() - 20});
            });

            $('nav#mainNav-en-mobile').data('mmenu').bind('closed', function () {
                $('html').css("position", "static");
                $('body').css("position", "static");
                $('body').css("overflow", "auto");
                $('body').css("height", "auto");

                $("#body").css({"max-width": $(window).width()});
                $("#charities-container").css({"max-width": $(window).width() - 20});
            });/**/

        }

        if (location.href.indexOf('chinese') > -1) {

            $('nav#mainNav-zh-mobile').data('mmenu').bind('opened', function () {
                $('html').css("position", "fixed");
                $('body').css("position", "fixed");
                $('body').css("overflow", "hidden");
                $('body').css("height", "100%");

                $("#body").css({"max-width": $(window).width()});
                $("#charities-container").css({"max-width": $(window).width() - 20});
            });

            $('nav#mainNav-zh-mobile').data('mmenu').bind('closed', function () {
                $('html').css("position", "static");
                $('body').css("position", "static");
                $('body').css("overflow", "auto");
                $('body').css("height", "auto");

                $("#body").css({"max-width": $(window).width()});
                $("#charities-container").css({"max-width": $(window).width() - 20});

                console.log("body: " + $('body').width());
            });/**/

        }

        if (location.href.indexOf('localhost') > -1) {

            //changeIAByDomain('localhost');
            changeIAByDomain('http://charities.hkjc.com');
            //changeIAByDomain('uv-');
        }

        if (location.href.indexOf('jcwebdev') > -1) {

            changeIAByDomain('jcwebdev');
        }

        if (location.href.indexOf('uv-') > -1) {

            changeIAByDomain('uv-');
        }

        if (location.href.indexOf('http://charities.hkjc.com') > -1) {

            changeIAByDomain('http://charities.hkjc.com');
        }

    })

    if($(".mascot-video-container").length > 0 && $(window).width() > 768) {
        //it doesn't exist
        var tmp_height = $(".mascot-video-container").parent().parent().find(".col-md-7").height();
        $(".mascot-video-container").parent().css({"display": "table"});
        $(".mascot-video-container").parent().css({"padding-left": "0px"});
        $(".mascot-video-container").css({"height": tmp_height});

    }else{
        $(".mascot-video-container").parent().css({"display": "inherit"});
        $(".mascot-video-container").parent().css({"padding-left": "15px"});
        $(".mascot-video-container").css({"height": "auto"});
    }

    $(window).resize(function(){
        if($(".mascot-video-container").length > 0 && $(window).width() > 768) {
            //it doesn't exist
            var tmp_height = $(".mascot-video-container").parent().parent().find(".col-md-7").height();
            $(".mascot-video-container").parent().css({"display": "table"});
            $(".mascot-video-container").parent().css({"padding-left": 0});
            $(".mascot-video-container").css({"height": tmp_height});
        }else{
            $(".mascot-video-container").parent().css({"display": "inherit"});
            $(".mascot-video-container").css({"height": "auto"});
        }

        $("#body").css({"max-width": $(window).width()});
        $("#charities-container").css({"max-width": $(window).width() - 20});

    })


    $("nav#mainNav-en-mobile").mmenu({
        extensions: ['effect-menu-slide', 'pageshadow'],
        autoHeight: true,
        navbar: {
            title: 'HKJC'
        },
        navbars: [{
            position: "top",
            content: [
                "<span class=\"mobile-top-login\"><span class=\"beforelogin\"><a class=\"login\" href=\"javascript:nonResponsiveOverlay('redirectPage(strlogin)','function')\">Login</a> / <a href=\"javascript:nonResponsiveOverlay('redirectPage(strregister)','function')\">Register</a> / <a href=\"javascript:redirectPage(strhelp)\" class=\"faq\">FAQ</a>&nbsp;&nbsp;<a href=\"http://search.hkjc.com/search/english/search.aspx\" target=\"_blank\" class=\"fa fa-search\" style=\"font-size: 15px\"></a></span><span class=\"afterlogin\" style=\"display:none;\"><div class=\"mobile_login_message\"><span class=\"hkjc_greeting_name\"></span><a class=\"logout\" href=\"javascript:nonResponsiveOverlay('redirectPage(strlogout)','function')\">Logout</a> / </div><a href=\"javascript:redirectPage(strpreference)\">Preference</a>&nbsp;&nbsp;&nbsp;<a href=\"javascript:redirectPage(strhelp)\" class=\"faq\">FAQ</a>&nbsp;&nbsp;<a href=\"http://search.hkjc.com/search/english/search.aspx\" target=\"_blank\" class=\"fa fa-search\" style=\"font-size: 15px\"></a></span></span><span class=\"mobile-top-lang\"><a class=\"lang\" href=\"javascript:changeLanguage();\">中文</a></span>"
                //"<li class=\"mm-search\" ><input maxlength=\"166\" title=\"\" placeholder=\"Search\" value=\"\" type=\"text\" name=\"\" id=\"searchtxt-mobile-en\" style=\"width: 70%; padding: 0px; float:left; color: #fff\"><input class=\"iconToggle\" type=\"image\" name=\"\" id=\"searchimg-mobile-en\" src=\"/charities/common/images/icon-search-white.png\" alt=\"Submit Search\" style=\"width: 28px; height: 28px; margin: 12px 0px; padding: 0px;  float:left\"><span style=\"clear:both\"></span></li>"
            ],
        }],
        offCanvas: {
            position: "right",
            //zposition: "side"
        }
    });

    $("nav#mainNav-zh-mobile").mmenu({
        extensions: ['effect-menu-slide', 'pageshadow'],
        autoHeight: true,
        navbar: {
            title: '香港賽馬會'
        },
        navbars: [{
            position: "top",
            content: [
                "<span class=\"mobile-top-login\"><span class=\"beforelogin\"><a class=\"login\" href=\"javascript:nonResponsiveOverlay('redirectPage(strlogin)','function')\">登入</a> / <a href=\"javascript:nonResponsiveOverlay('redirectPage(strregister)','function')\">登記</a> / <a href=\"javascript:redirectPage(strhelp)\" class=\"faq\">常見問題</a>&nbsp;&nbsp;<a href=\"http://search.hkjc.com/search/chinese/search.aspx\" target=\"_blank\" class=\"fa fa-search\" style=\"font-size: 15px\"></a></span><span class=\"afterlogin\" style=\"display:none;\"><div class=\"mobile_login_message\"><span class=\"hkjc_greeting_name\"></span><a class=\"logout\" href=\"javascript:nonResponsiveOverlay('redirectPage(strlogout)','function')\">登出</a> /</div> <a href=\"javascript:redirectPage(strpreference)\">偏好設定</a>&nbsp;&nbsp;&nbsp;<a href=\"javascript:redirectPage(strhelp)\" class=\"faq\">常見問題</a>&nbsp;&nbsp;<a href=\"http://search.hkjc.com/search/chinese/search.aspx\" target=\"_blank\" class=\"fa fa-search\" style=\"font-size: 15px\"></a></span></span><span class=\"mobile-top-lang\"><a class=\"lang\" href=\"javascript:changeLanguage();\">English</a></span>"
                //"<li class=\"mm-search\" ><input maxlength=\"166\" title=\"\" placeholder=\"搜尋\" value=\"\" type=\"text\" name=\"\" id=\"searchtxt-mobile-zh\" style=\"width: 70%; padding: 0px; float:left; color: #fff\"><input class=\"iconToggle\" type=\"image\" name=\"\" id=\"searchimg-mobile-zh\" src=\"/charities/common/images/icon-search-white.png\" alt=\"Submit Search\" style=\"width: 28px; height: 28px; margin: 12px 0px; padding: 0px;  float:left\"><span style=\"clear:both\"></span></li>"
            ],
        }],
        offCanvas: {
            position: "right"/*,
             zposition: "side"*/
        }
    });

    $('.mobile-title-en').click(function () {
        window.location.href = "/charities/english/index.aspx";
    });

    $('.mobile-title-zh').click(function () {
        window.location.href = "/charities/chinese/index.aspx";
    });

    $('#searchimg-zh').click(function() {
        var searchKey =  $('#searchtxt-zh').val();
        //alert(searchKey);

        if (searchKey == '' || searchKey == '搜尋'){

            $('#searchimg-zh').blur();
            $('#searchtxt-zh').focus();

            alert("請輸入搜尋字串");

        }else{
            goSearch(searchKey);
        }

    });

    $('#searchtxt-zh').blur(function() {
        if ($(this).val() == ''){
            $(this).val('搜尋');
        }
    });

    $('#searchtxt-zh').focus(function() {
        if ($(this).val() == '搜尋'){
            $(this).val('');
        }
    });

    $('#searchimg-mobile-zh').click(function() {
        var searchKey =  $('#searchtxt-mobile-zh').val();
        //alert(searchKey);

        if (searchKey == '' || searchKey == '搜尋'){

            $('#searchimg-mobile-zh').blur();
            $('#searchtxt-mobile-zh').focus();

            alert("請輸入搜尋字串");

        }else{
            goSearch(searchKey);
        }

    });

    $('#searchtxt-mobile-zh').blur(function() {
        if ($(this).val() == ''){
            $(this).val('搜尋');
        }
    });

    $('#searchtxt-mobile-zh').focus(function() {
        if ($(this).val() == '搜尋'){
            $(this).val('');
        }
    });

    $('#searchimg-en').click(function() {
        var searchKey =  $('#searchtxt-en').val();
        //alert(searchKey);

        if (searchKey == '' || searchKey == 'Search'){

            $('#searchimg-en').blur();
            $('#searchtxt-en').focus();

            alert("Please input the search keywords.");

        }else{
            goSearch(searchKey);
        }

    });

    $('#searchtxt-en').blur(function() {
        if ($(this).val() == ''){
            $(this).val('Search');
        }
    });

    $('#searchtxt-en').focus(function() {
        if ($(this).val() == 'Search'){
            $(this).val('');
        }
    });


    $('#searchimg-mobile-en').click(function() {
        var searchKey =  $('#searchtxt-mobile-en').val();
        //alert(searchKey);

        if (searchKey == '' || searchKey == 'Search'){

            $('#searchimg-mobile-en').blur();
            $('#searchtxt-mobile-en').focus();

            alert("Please input the search keywords.");

        }else{
            goSearch(searchKey);
        }

    });

    $('#searchtxt-mobile-en').blur(function() {
        if ($(this).val() == ''){
            $(this).val('Search');
        }
    });

    $('#searchtxt-mobile-en').focus(function() {
        if ($(this).val() == 'Search'){
            $(this).val('');
        }
    });

    //GotoTop
    $('#gotoTop').css("display", "none");

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#gotoTop').fadeIn();
        } else {
            $('#gotoTop').fadeOut();
        }
    });

    $(window).resize(function(){
        $("#charities-container").css({"max-width": $(this).width() - 20});
        mobileMenuAbsolute();
    });



    $('#gotoTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    getFontSizeRe();

    refreshGlobalLoginControl();

    //change domain for cross cookie
    try {if (document.domain.indexOf('.com'))	document.domain = document.domain.substring(document.domain.indexOf('.') + 1);}catch(e) {}

    $('body').on('click','.reminderMsg',function(){
        nonResponsiveSetCookie();
        var target = $(this).attr("data-target");
        if (target == "function") {
            // eval($(this).attr("data-link"));
            var linkFunction = $(this).attr("data-link");
            setTimeout(function () { eval(linkFunction) }, 500);
        } else {
            //window.open($(this).attr("data-link"),$(this).attr("data-target"));
            var target = $(this).attr("data-target");
            var link = $(this).attr("data-link");
            setTimeout(function () { window.open(link, target) }, 500);
        }
    })

    $('body').on('click','.reminderClose',function(){
        nonResponsiveSetCookie();
        $(".nonResponsiveReminder").remove();
    })
});

var nonResponsiveOverlay = function(link,target) {

    if($( window ).width() < 768 && $.cookie("responsiveReminder") != "false" && false){

        var reminderMsg,nonReminderMsg;

        if (window.location.href.indexOf("/english/") != -1 || $.cookie('language') == "english") {
            reminderMsg = "Continue to Desktop Version";
            nonReminderMsg = "Don’t remind me again";
        } else {
            reminderMsg = "前往桌面版";
            nonReminderMsg = "不用再提醒我了";
        }

        if(target == undefined || target == ""){
            target = "_self";
        }

        var overlayTemplate = '<div class="nonResponsiveReminder">\
   <div class="reminderClose"></div>\
    <div class="overlayContent">\
        <div class="reminderMsg" data-link="{{link}}" data-target="{{target}}"><p>{{reminderMsg}}</p></div>\
        <div class="reminderMsg" data-link="{{link}}" data-target="{{target}}"><span class="fa fa-arrow-circle-o-right"></span></div>\
        <label class="nonReminderMsg "><input type="checkbox" id="nonReminder" value="nonReminder">{{nonReminderMsg}}</label>\
    </div>\
	</div>';

        var overlay = overlayTemplate.replace(/{{link}}/g,link)
            .replace(/{{target}}/g,target)
            .replace(/{{reminderMsg}}/g,reminderMsg)
            .replace(/{{nonReminderMsg}}/g,nonReminderMsg);

        $("body").append(overlay);

    } else if (target == "function") {
        eval(link);
    }
}

var nonResponsiveSetCookie = function () {
    var charitiesLink = corporateLink = entertainmentLink = memberLink = faqLink = homeLink = "";
    if (location.href.indexOf('uv-') > -1) {
        charitiesLink = "//uv-charities.hkjc.com";
        corporateLink = "//uv-corporate.hkjc.com";
        entertainmentLink = "//uv-entertainment.hkjc.com";
        memberLink = "//uv-member.hkjc.com";
        faqLink = "//uv-common.hkjc.com";
        homeLink = "//uv-www.hkjc.com";
    } else if (location.href.indexOf('qcew') > -1) {
        charitiesLink = "//charities.qcew.com";
        corporateLink = "//corporate.qcew.com";
        entertainmentLink = "//entertainment.qcew.com";
        memberLink = "//member.qcew.com";
        faqLink = "//common.qcew.com";
        homeLink = "//www.qcew.com";
    } else if (location.href.indexOf('hkjc.com') > -1) {
        charitiesLink = "//charities.hkjc.com";
        corporateLink = "//corporate.hkjc.com";
        entertainmentLink = "//entertainment.hkjc.com";
        memberLink = "//member.hkjc.com";
        faqLink = "//common.hkjc.com";
        homeLink = "//www.hkjc.com";
    }

    if ($('.nonReminderMsg input[type="checkbox"]').is(':checked')) {
        $.cookie('responsiveReminder', 'false', { path: '/' });
        var charitiesImage = corporateImage = entertainmentImage = memberImage = faqImage = homeImage = "";
        var templateImage = "<img src='{{src}}' style='display:none' />";
        charitiesImage = templateImage.replace("{{src}}", charitiesLink + "/charities/english/cookie.aspx");
        corporateImage = templateImage.replace("{{src}}", corporateLink + "/corporate/english/cookie.aspx");
        entertainmentImage = templateImage.replace("{{src}}", entertainmentLink + "/entertainment/english/cookie.aspx");
        memberImage = templateImage.replace("{{src}}", memberLink + "/member/english/cookie.aspx");
        faqImage = templateImage.replace("{{src}}", faqLink + "/utility/faq/english/cookie.aspx");
        homeImage = templateImage.replace("{{src}}", homeLink + "/home/english/cookie.aspx");
        $("body").append(charitiesImage + corporateImage + entertainmentImage + memberImage + faqImage + homeImage);
    }else{
        $.cookie('responsiveReminder', 'true', {path: '/' });
    }
}

var refreshGlobalLoginControl = function() {
    try {
        if (!WCIPCookie.isLoggedIn() ) {
            $(".beforelogin").show();
            $(".afterlogin").hide();
        } else {
            $(".hkjc_greeting_name").html(showDisplayName(WCIPCookie.getDisplayName(),WCIPCookie.getSalutation(),WCIPCookie.getLastName(),WCIPCookie.getLastNameChinese()));
            $(".beforelogin").hide();
            $(".afterlogin").show();
        }
    }catch (e) {}
}

// Relocate from global.js - Start
var isIE = (navigator.appName.indexOf("Microsoft") > -1);
var d = document;

var sectionArray = new Array('football', 'entertainment', 'racing', 'member', 'charities', 'corporate');
if (!levelArray)	var levelArray = new Array();
if (!level4thArray)	var level4thArray = new Array();
if (!sectionHome)	var sectionHome = false;
var isMac = (navigator.appVersion.indexOf("Macintosh") > -1);

//Specify spectrum of different font sizes:
var szs = new Array('90%', '100%', '120%');
var startSz = sz = szs.length;

var nd= new Date();
nd.setTime(nd.getTime()+(365*24*60*60*1000));
//cdomain = (location.domain) ? location.domain : null;
var cdomain = (location.domain) ? location.domain : null;
var cpath = "/";

// Relocate from global.js - End


function changeFontSizeRe(inc, start) {

    if (!d.getElementById('fontSizeContainer')) return;



    var cEl = null,sz = eval(startSz),i,j,cTags;

    var fontSizeLink = d.getElementById('fontSizeContainer').getElementsByTagName('a');
    if (fontSizeLink[inc].className.indexOf('active') >= 0) return;

    sz = inc;


    $(".charities-content-container").css("font-size", szs[ sz ]);

    //Highlight Btn
    var fontSizeLink = d.getElementById('fontSizeContainer').getElementsByTagName('a');
    for (var i=0; i<fontSizeLink.length; i++)
    {
        fontSizeLink[i].className = fontSizeLink[i].className.replace(/active/, '');
        fontSizeLink[i].clicked = false;
    }
    fontSizeLink[sz].className = fontSizeLink[sz].className += ' active';
    fontSizeLink[sz].clicked = true;

    setCookie("fontSize", sz, nd, cpath, cdomain);
}

function getFontSizeRe() {
    if (getCookie('fontSize') == null)
    {
        startSz = 1;
    }
    else
    {
        startSz = getCookie('fontSize');
        if (startSz == "NaN")	startSz = 1;
    }
    changeFontSizeRe(startSz, true);
}

//Nav Mobile Menu
function initMobileMainMenu(section) {

    $(".mobileMainMenu").slick({
        centerMode: true,
        variableWidth:true,
        arrows: false,
        infinite: false,
        slidesToShow: 1,
        speed: 0,
        slidesToScroll: 1,
        dots: false,
        autoplay: false,
        autoplaySpeed: 5000,
        initialSlide: 1,
        swipe: true,
        draggable: true,
        touchMove: true,
        swipeToSlide: true
    });

    $(".mobileMain-nav").css("visibility", "visible");

    switch (section) {
        case 'entertainment':
            $('.mobileMainMenu').slick('slickGoTo', 0);
            $('li.slick-slide.slick-current').addClass('active');

            break;
        case 'racing':
            $('.mobileMainMenu').slick('slickGoTo', 1);
            $('li.slick-slide.slick-current').addClass('active');

            break;
        case 'football':
            $('.mobileMainMenu').slick('slickGoTo', 2);
            $('li.slick-slide.slick-current').addClass('active');

            break;
        case 'member':
            $('.mobileMainMenu').slick('slickGoTo', 3);
            $('li.slick-slide.slick-current').addClass('active');

            break;
        case 'charities':
            $('.mobileMainMenu').slick('slickGoTo', 4);
            $('li.slick-slide.slick-current').addClass('active');

            break;
        case 'corporate':
            $('.mobileMainMenu').slick('slickGoTo', 5);
            $('li.slick-slide.slick-current').addClass('active');

            break;
    }
}

function activateLeftNavMobileMenu() {

    var leftNavTitle = $('.main-nav .nav li a.active').text();

    $('#nav-left li a').each(function () {
        if (location.href.indexOf($(this).attr('href').trim()) > -1) {

            if ($(this).parent().parent().hasClass('nav-level-2')) {

                $(this).parent().parent().parent().find('a').first().addClass('active');
                leftNavTitle = $(this).parent().parent().parent().find('a').first().text();
                $(this).parent().parent().css("display", "block");
                $(this).addClass('active');
            } else {

                leftNavTitle = $(".nav-left-header").text();
                $(this).addClass('active');
                if ($(this).parent().find('ul').hasClass('nav-level-2')) {
                    $(this).parent().find('ul').css("display", "block");
                }
            }
        }else {

            $('#nav-left #' + $('#page_index').val()).parent().parent().css("display", "block");
            $('#nav-left #' + $('#page_index').val()).addClass("active");

            if ($('#nav-left #' + $('#page_index').val()).parent().find('ul').hasClass('nav-level-2')) {
                $('#nav-left #' + $('#page_index').val()).parent().find('ul').css("display", "block");
            }

        }
    });

    $('.mm-listview li a').each(function () {

        if ((location.href.indexOf($(this).attr('href').trim()) > -1) && ($('#page_index').val() == $(this).attr('id'))){

            var sectionTitle = $(this).parent().parent().parent().find('.mm-navbar .mm-title').text();


            if (sectionTitle && leftNavTitle) {

                if (sectionTitle == leftNavTitle) {

                    if ($(this).parent().find('a').first().hasClass('mm-next')) {
                        //Submenu Section
                        var mTarget = $(this).parent().find('a').first().attr('data-target');
                        if (mTarget) {
                            $(mTarget).removeClass("mm-hidden");
                            $(mTarget).addClass("mm-opened");
                            $(mTarget).addClass("mm-current");
                        }
                    } else {
                        //Page Section
                        $(this).parent().parent().parent().removeClass("mm-hidden");
                        $(this).parent().parent().parent().addClass("mm-opened");
                        $(this).parent().parent().parent().addClass("mm-current");
                    }
                }else{
                    if ($(this).parent().find('a').first().hasClass('mm-next')) {
                        //Submenu Section
                        var mTarget = $(this).parent().find('a').first().attr('data-target');
                        if (mTarget) {
                            $(mTarget).removeClass("mm-hidden");
                            $(mTarget).addClass("mm-opened");
                            $(mTarget).addClass("mm-current");
                        }
                    } else {
                        //Page Section
                        $(this).parent().parent().parent().removeClass("mm-hidden");
                        $(this).parent().parent().parent().addClass("mm-opened");
                        $(this).parent().parent().parent().addClass("mm-current");
                    }

                }
            }

        }else if ($('#page_index').val() == $(this).attr('id')){

            if ($(this).parent().find('a').first().hasClass('mm-next')) {
                //Submenu Section
                var mTarget = $(this).parent().find('a').first().attr('data-target');
                if (mTarget) {
                    $(mTarget).removeClass("mm-hidden");
                    $(mTarget).addClass("mm-opened");
                    $(mTarget).addClass("mm-current");
                }
            } else {
                //Page Section
                $(this).parent().parent().parent().removeClass("mm-hidden");
                $(this).parent().parent().parent().addClass("mm-opened");
                $(this).parent().parent().parent().addClass("mm-current");
            }
        }


    });

    if ($('#page_index').val() == 'index'){

        var mTarget = $('.mm-listview li a#charities').parent().find('a').first().attr('data-target');
        if (mTarget) {

            $('#mm-1').addClass("mm-opened");
            $('#mm-1').addClass("mm-subopened");
            $('#mm-1').removeClass("mm-current");

            $(mTarget).removeClass("mm-hidden");
            $(mTarget).addClass("mm-opened");
            $(mTarget).addClass("mm-current");
        }

    }
}

// ------------------------------------------------------------------
// Mobile Menu Icon Position Absolute functions
// ------------------------------------------------------------------
function mobileMenuAbsolute(){

    if ($(window).width() >= 480 && $(window).width() <=767 ){
        $(".header-menu-mobile").css({"position": "absolute"});
        $("#gotoTop").css({"position": "absolute"});
    }else{
        $(".header-menu-mobile").css({"position": "fixed"});
        $("#gotoTop").css({"position": "fixed"});
    }

}


// ------------------------------------------------------------------
// Change IA Path
// ------------------------------------------------------------------
function changeIAByDomain(domain){

    var home_link;
    var entertainment_link;
    var racing_link;
    var football_link;
    var member_link;
    var charities_link;
    var corporate_link;

    switch (domain){
        case 'http://charities.hkjc.com':
            home_link 			= "http://www.hkjc.com";
            entertainment_link 	= "http://entertainment.hkjc.com";
            racing_link 		= "http://racing.hkjc.com";
            football_link		= "http://football.hkjc.com";
            member_link			= "http://member.hkjc.com";
            charities_link		= "http://charities.hkjc.com";
            corporate_link		= "http://corporate.hkjc.com";

            break;
        case 'jcwebdev':
            home_link 			= "http://jcwebdev";
            entertainment_link 	= "http://jcwebdev";
            racing_link 		= "http://racing.hkjc.com";
            football_link		= "http://football.hkjc.com";
            member_link			= "http://jcwebdev";
            charities_link		= "http://jcwebdev";
            corporate_link		= "http://jcwebdev";

            break;
        case 'uv-':
            home_link 			= "http://uv-www.hkjc.com";
            entertainment_link 	= "http://uv-entertainment.hkjc.com";
            racing_link 		= "http://racing.hkjc.com";
            football_link		= "http://football.hkjc.com";
            member_link			= "http://uv-member.hkjc.com";
            charities_link		= "http://uv-charities.hkjc.com";
            corporate_link		= "http://uv-corporate.hkjc.com";

            break;
        case 'localhost':
            home_link 			= "";
            entertainment_link 	= "";
            racing_link 		= "";
            football_link		= "";
            member_link			= "";
            charities_link		= "";
            corporate_link		= "";

            break;

    }




    //HOME
    $('#header .logo_en').attr("href", home_link + "/home/english/index.aspx");
    $('#header .logo_tc').attr("href", home_link + "/home/chinese/index.aspx");

    $('#mainNav-en-mobile #home').attr("href", home_link + "/home/english/index.aspx");
    $('#mainNav-zh-mobile #home').attr("href", home_link + "/home/chinese/index.aspx");


    //ENTERTAINMENT
    $('.nav-en #entertainment a').attr("href", entertainment_link + "/entertainment/english/index.aspx");
    $('.nav-zh #entertainment a').attr("href", entertainment_link + "/entertainment/chinese/index.aspx");

    $('.mobileMainMenu').find('a').each(function() {
        var checkDomain = $(this).attr('href').split('/');
        var value = $(this).attr('href');

        if (checkDomain[1] == "entertainment"){
            $(this).attr('href', value.replace('/entertainment/', entertainment_link + '/entertainment/'));
        }

    })
    $('.mm-menu li').find('a').each(function() {
        var checkDomain = $(this).attr('href').split('/');
        var value = $(this).attr('href');

        if (checkDomain[1] == "entertainment"){
            $(this).attr('href', value.replace('/entertainment/', entertainment_link + '/entertainment/'));
        }
    })
    $('#nav-left li').find('a').each(function() {
        var checkDomain = $(this).attr('href').split('/');
        var value = $(this).attr('href');

        if (checkDomain[1] == "entertainment"){
            $(this).attr('href', value.replace('/entertainment/', entertainment_link + '/entertainment/'));
        }
    })
    $('.dropdown li').find('a').each(function() {
        var checkDomain = $(this).attr('href').split('/');
        var value = $(this).attr('href');

        if (checkDomain[1] == "entertainment"){
            $(this).attr('href', value.replace('/entertainment/', entertainment_link + '/entertainment/'));
        }
    })


    //MEMBER
    $('.nav-en #member a').attr("href", member_link + "/member/english/index.aspx");
    $('.nav-zh #member a').attr("href", member_link + "/member/chinese/index.aspx");

    $('.mobileMainMenu').find('a').each(function() {
        var checkDomain = $(this).attr('href').split('/');
        var value = $(this).attr('href');

        if (checkDomain[1] == "member"){
            $(this).attr('href', value.replace('/member/', member_link + '/member/'));
        }
    })
    $('.mm-menu li').find('a').each(function() {
        var checkDomain = $(this).attr('href').split('/');
        var value = $(this).attr('href');

        if (checkDomain[1] == "member"){
            $(this).attr('href', value.replace('/member/', member_link + '/member/'));
        }
    })
    $('#nav-left li').find('a').each(function() {
        var checkDomain = $(this).attr('href').split('/');
        var value = $(this).attr('href');

        if (checkDomain[1] == "member"){
            $(this).attr('href', value.replace('/member/', member_link + '/member/'));
        }
    })
    $('.dropdown li').find('a').each(function() {
        var checkDomain = $(this).attr('href').split('/');
        var value = $(this).attr('href');

        if (checkDomain[1] == "member"){
            $(this).attr('href', value.replace('/member/', member_link + '/member/'));
        }
    })



    //Charities
    $('.nav-en #charities a').attr("href", charities_link + "/charities/english/index.aspx");
    $('.nav-zh #charities a').attr("href", charities_link + "/charities/chinese/index.aspx");

    $('.mobileMainMenu').find('a').each(function() {
        var checkDomain = $(this).attr('href').split('/');
        var value = $(this).attr('href');

        if (checkDomain[1] == "charities"){
            $(this).attr('href', value.replace('/charities/', charities_link + '/charities/'));
        }
    })
    $('.mm-menu li').find('a').each(function() {
        var checkDomain = $(this).attr('href').split('/');
        var value = $(this).attr('href');

        if (checkDomain[1] == "charities"){
            $(this).attr('href', value.replace('/charities/', charities_link + '/charities/'));
        }
    })
    $('#nav-left li').find('a').each(function() {
        var checkDomain = $(this).attr('href').split('/');
        var value = $(this).attr('href');

        if (checkDomain[1] == "charities"){
            $(this).attr('href', value.replace('/charities/', charities_link + '/charities/'));
        }
    })
    $('.dropdown li').find('a').each(function() {
        var checkDomain = $(this).attr('href').split('/');
        var value = $(this).attr('href');

        if (checkDomain[1] == "charities"){
            $(this).attr('href', value.replace('/charities/', charities_link + '/charities/'));
        }
    })

    //Corporate
    $('.nav-en #corporate a').attr("href", corporate_link + "/corporate/english/index.aspx");
    $('.nav-zh #corporate a').attr("href", corporate_link + "/corporate/chinese/index.aspx");

    $('.mobileMainMenu').find('a').each(function() {
        var checkDomain = $(this).attr('href').split('/');
        var value = $(this).attr('href');

        if (checkDomain[1] == "corporate"){
            $(this).attr('href', value.replace('/corporate/', corporate_link + '/corporate/'));
        }
    })
    $('.mm-menu li').find('a').each(function() {
        var checkDomain = $(this).attr('href').split('/');
        var value = $(this).attr('href');

        if (checkDomain[1] == "corporate"){
            $(this).attr('href', value.replace('/corporate/', corporate_link + '/corporate/'));
        }
    })
    $('#nav-left li').find('a').each(function() {
        var checkDomain = $(this).attr('href').split('/');
        var value = $(this).attr('href');

        if (checkDomain[1] == "corporate"){
            $(this).attr('href', value.replace('/corporate/', corporate_link + '/corporate/'));
        }
    })
    $('.dropdown li').find('a').each(function() {
        var checkDomain = $(this).attr('href').split('/');
        var value = $(this).attr('href');

        if (checkDomain[1] == "corporate"){
            $(this).attr('href', value.replace('/corporate/', corporate_link + '/corporate/'));
        }
    })

}


function setNewsBoxWA(obj) {
    var container = d.getElementById(obj);
    var photos = getElementsByClassName(container, 'photos')[0];
    var nav = getElementsByClassName(container, 'nav')[0];
    var details = getElementsByClassName(container, 'details')[0];
    var more = getElementsByClassName(container, 'more')[0];
    var obj = mainHighlightObj_charities;
    var highlightImg;
    var highlightP;
    var highlightA;
    var total;
    var navList = new Array();
    var hit = false;
    var index = 1;
    var curIndex = 1;
    var timeout;
    var time = 5000;
    var newsNum = 0;
    var auto = true;
    var flvIsPlaying = false;
    var self = this;

    //Get Server Time
    var serverTime = getServerTime();
    var today = new Date();
    var todayTime = (serverTime) ? serverTime : today.getTime();

    document.getElementById("newsBox").style.display = "none";

    this.init = function () {
        this.genNews();
        if (newsNum == 0) return;
        if (newsNum == 1) container.className += ' single';

        var imgs = photos.getElementsByTagName('img');
        var a = nav.getElementsByTagName('a');
        var pAll = details.getElementsByTagName('div');
        total = imgs.length;

        for (var i = 0; i < a.length; i++) {
            a[i].img = imgs[i];
            a[i].p = pAll[i];
            a[i].num = i;

            a[i].onmouseover = function () {
                if (this.className.indexOf('active') >= 0) return;
                self.changeImg(this);
                hit = true;
                clearInterval(timeout);
            };

            a[i].onmouseout = function () {
                setTimeout(function () { if (auto) self.autoChange(); }, 50);
                hit = false;
            };

            navList.push(a[i]);
        }

        this.changeImg(navList[0]);
        if (auto) this.autoChange();
    };

    this.genNews = function () {
        var array = obj;

        photos.innerHTML = '';
        nav.innerHTML = '';
        details.innerHTML = '';

        if (more) {
            more.href = obj.moreLink;
            more.target = obj.moreTarget;

            if (obj.moreLink == '') more.style.display = 'none';
        }

        for (var i = 0; i < array.length; i++) {
            var startTime = this.checkTime(array[i].DATE + "  00:00");
            var endTime = this.checkTime('31/12/2019  00:00');

            if (filter_category != "") {
                if (array[i].CATEGORY != filter_category || filter_category == "") continue;
            }
            if (filter_beneficiary != "") {
                if (array[i].BENEFICIARY != filter_beneficiary || filter_beneficiary == "") continue;
            }
            if (filter_ngo != "") {
                if (array[i].NGO != filter_ngo || filter_ngo == "") continue;
            }
            if (!(array[i].SHOWONMAINPAGE == 't')) continue;

            document.getElementById("newsBox").style.display = "block";
            //Gen Photos
            var link = (array[i].flv) ? 'javascript:;' : array[i].PATH;
            var target = (array[i].flv) ? '' : '_self';
            var imgA = createA(link, target);
            if (array[i].ALT_TEXT.length <= 1) {
                array[i].ALT_TEXT = "";
            }
            var img = createImg(array[i].IMAGE, array[i].ALT_TEXT);
            imgA.appendChild(img);
            photos.appendChild(imgA);

            //Gen Details
            var div = d.createElement('div');
            var h3 = d.createElement('h3');
            h3.innerHTML = array[i].HEADING;
            var p = d.createElement('span');
            p.innerHTML = array[i].DESCRIPTION;
            div.appendChild(h3);
            div.appendChild(p);
            details.appendChild(div);

            //Gen Nav
            var a = createA(link, target, '', '', 'clearfix');
            var span = d.createElement('span');
            span.className = 'imgContainer';
            if (array[i].ALT_TEXT.length <= 1) {
                array[i].ALT_TEXT = "";
            }
            var img = createImg(array[i].THUMBNAIL, array[i].ALT_TEXT);
            span.appendChild(img);
            a.appendChild(span);
            var span = d.createElement('span');
            span.className = 'txt';
            span.innerHTML = array[i].HEADING;
            a.appendChild(span);
            var span = d.createElement('span');
            span.className = 'arrow';
            a.appendChild(span);
            nav.appendChild(a);

            if (array[i].flv) {
                a.flv = imgA.flv = array[i].flv;
                /*a.onclick = */imgA.onclick = function () {
                    self.playFLV(this);
                }
            }

            newsNum++;

            if (newsNum >= 4) return;
        }
    };

    this.checkTime = function (str) {
        var array = str.split('/');
        var date = Number(array[0]);
        var month = Number(array[1]) - 1;
        var year = Number(array[2].substring(0, 4));
        var timeStr = array[2].substring(5, 10);
        var timeArray = timeStr.split(':');
        var hour = Number(timeArray[0]);
        var min = Number(timeArray[1]);
        var thisDate = new Date(year, month, date, hour, min);

        return thisDate.getTime();
    };

    this.playFLV = function (btn) {
        clearInterval(timeout);
        this.removeFLV();

        var container = createDiv('homeNewsFLVContainer');
        var homeNewsFLV = createDiv('homeNewsFLV');
        homeNewsFLV.innerHTML = 'This site requires JavaScript and ADOBE FLASH PLAYER VERSION 10 or ABOVE.<br />Please visit <a href="https://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" target="_blank">Adobe website</a> for the latest version.<br /><a href="https://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" target="_blank"><img src="/football/common/chinese/images/get_adobe_flash_player.png" alt="Get Adobe Flash Player" /></a>'
        container.appendChild(homeNewsFLV);
        photos.insertBefore(container, photos.getElementsByTagName('a')[0]);

        setTimeout(function () {
            var flashvars = {};
            flashvars.swfPath = '/football/common/chinese/images/swf/SkinOverAllNoFullNoCaption.swf';
            flashvars.flv = btn.flv;

            var params = {};
            params.allowscriptaccess = 'always';
            params.wmode = 'opaque';

            var attributes = {};

            swfobject.embedSWF('/football/common/chinese/images/swf/video.swf', 'homeNewsFLV', '100%', '100%', '10.0.0', '', flashvars, params, attributes);

            d.getElementById('homeNewsFLV').style.display = 'block';
        }, 500);

        flvIsPlaying = true;
    };

    this.removeFLV = function () {
        if (!d.getElementById('homeNewsFLVContainer')) return;

        var flvContainer = d.getElementById('homeNewsFLVContainer');
        photos.removeChild(flvContainer);

        flvIsPlaying = false;
    };

    this.changeImg = function (btn) {
        if (hit) return;
        this.removeFLV();

        btn.img.style.display = 'block';
        if (highlightImg) highlightImg.style.zIndex = index;
        index++;
        btn.img.style.zIndex = index;
        startFading(btn.img);
        highlightImg = btn.img;

        if (highlightP) highlightP.style.display = '';
        btn.p.style.display = 'block';
        startFading(btn.p);
        highlightP = btn.p;

        btn.className += ' active';
        if (highlightA) highlightA.className = highlightA.className.replace(/active/, '');
        highlightA = btn;

        curIndex = btn.num;
    };

    this.autoChange = function () {
        clearInterval(timeout);

        timeout = setInterval(function () {
            curIndex++;
            if (curIndex >= total) curIndex = 0;

            self.changeImg(navList[curIndex]);
        }, time);
    };

    this.init();
}


function setHomeNewsBoxWA(obj) {
    var container = d.getElementById(obj);
    var photos = getElementsByClassName(container, 'photos')[0];
    var nav = getElementsByClassName(container, 'nav')[0];
    var details = getElementsByClassName(container, 'details')[0];
    var more = getElementsByClassName(container, 'more')[0];
    var obj = mainHighlightObj;
    var highlightImg;
    var highlightP;
    var highlightA;
    var total;
    var navList = new Array();
    var hit = false;
    var index = 1;
    var curIndex = 1;
    var timeout;
    var time = 5000;
    var newsNum = 0;
    var auto = false;
    var flvIsPlaying = false;
    var self = this;

    //Get Server Time
    var serverTime = getServerTime();
    var today = new Date();
    var todayTime = (serverTime) ? serverTime : today.getTime();
    //alert(today)

    this.init = function () {
        this.genNews();
        if (newsNum == 0) return;
        if (newsNum == 1) container.className += ' single';

        var imgs = photos.getElementsByTagName('img');
        var a = nav.getElementsByTagName('a');
        var pAll = details.getElementsByTagName('div');
        total = imgs.length;

        for (var i = 0; i < a.length; i++) {
            a[i].img = imgs[i];
            a[i].p = pAll[i];
            a[i].num = i;

            a[i].onmouseover = function () {
                if (this.className.indexOf('active') >= 0) return;
                self.changeImg(this);
                hit = true;
                clearInterval(timeout);
            };

            a[i].onmouseout = function () {
                setTimeout(function () { if (auto && newsNum > 1) self.autoChange(); }, 50);
                hit = false;
            };

            navList.push(a[i]);
        }

        this.changeImg(navList[0]);
        if (a.length > 1) if (auto && newsNum > 1) this.autoChange();
    };

    this.genNews = function () {
        var array = obj.content;

        photos.innerHTML = '';
        nav.innerHTML = '';
        details.innerHTML = '';

        auto = (obj.rotate == 'true');

        if (more) {
            more.href = obj.moreLink;
            more.target = obj.moreTarget;
            //added on 20100727 hide arrow
            if (obj.moreLink == '') more.style.display = 'none';
        }

        if (obj.titleImg != '') {
            var img = createImg(obj.titleImg, obj.titleImgAlt);
            nav.parentNode.insertBefore(img, nav);
        }

        for (var i = 0; i < array.length; i++) {
            var startTime = this.checkTime(array[i].startDate);
            var endTime = this.checkTime(array[i].endDate);
            if (!(todayTime >= startTime && todayTime < endTime)) continue;

            /* Initial Banner Code Variable */
            var location_code = "";
            var campaign_code = "";
            var sub_campaign_code = "";
            var b_cid_arr = [];
            var b_cid_str = "";
            var b_cid_rexp = /^[0-9a-zA-Z\-\_]+/;

            //Gen Photos
            var link = (array[i].flv) ? 'javascript:;' : array[i].link;
            var target = (array[i].flv) ? '' : array[i].target;

            /* Merge Location Code, Campaign Code and Sub Campaign Code */
            location_code = (array[i].locCode) ? array[i].locCode : '';
            campaign_code = (array[i].camCode) ? array[i].camCode : '';
            sub_campaign_code = (array[i].subCamCode) ? array[i].subCamCode : '';
            b_cid_arr.push(location_code);
            b_cid_arr.push(campaign_code);
            b_cid_arr.push(sub_campaign_code);
            b_cid_str = b_cid_arr.join('_');
            if (location_code != '' && b_cid_str != '' && b_cid_rexp.test(b_cid_str)) {
                /* b_cid merge with page link */
                if (link.indexOf("javascript") >= 0) {
                    ;
                }
                else if (link.indexOf("?") >= 0) {
                    link += '&b_cid=' + b_cid_str;
                }
                else {
                    link += '?b_cid=' + b_cid_str;
                }
            }

            var imgA = createA(link, target);
            var img = createImg(array[i].img, array[i].imgAlt);
            imgA.appendChild(img);
            photos.appendChild(imgA);

            //Gen Details
            var div = d.createElement('div');
            var h3 = d.createElement('h3');
            h3.innerHTML = array[i].title;
            var p = d.createElement('p');
            p.innerHTML = array[i].description;
            div.appendChild(h3);
            div.appendChild(p);
            details.appendChild(div);

            //Gen Nav
            var a = createA(link, target, '', '', 'clearfix');
            var span = d.createElement('span');
            span.className = 'imgContainer';
            var img = createImg(array[i].thumbnail, "");
            span.appendChild(img);
            a.appendChild(span);
            var span = d.createElement('span');
            span.className = 'txt';
            span.innerHTML = array[i].shortTitle ? array[i].shortTitle : array[i].title;
            a.appendChild(span);
            var span = d.createElement('span');
            span.className = 'arrow';
            a.appendChild(span);
            nav.appendChild(a);

            if (array[i].flv) {
                a.flv = imgA.flv = array[i].flv;
                imgA.onclick = function () {
                    self.playFLV(this);
                }
            }

            newsNum++;
            if (newsNum >= Number(obj.total)) return;
        }
    };

    this.checkTime = function (str) {
        var array = str.split('/');
        var date = Number(array[0]);
        var month = Number(array[1]) - 1;
        var year = Number(array[2].substring(0, 4));
        var timeStr = array[2].substring(5, 10);
        var timeArray = timeStr.split(':');
        var hour = Number(timeArray[0]);
        var min = Number(timeArray[1]);
        var thisDate = new Date(year, month, date, hour, min);
        return thisDate.getTime();
    };

    this.playFLV = function (btn) {
        clearInterval(timeout);
        this.removeFLV();

        var container = createDiv('homeNewsFLVContainer');
        var homeNewsFLV = createDiv('homeNewsFLV');
        homeNewsFLV.innerHTML = 'This site requires JavaScript and ADOBE FLASH PLAYER VERSION 10 or ABOVE.<br />Please visit <a href="https://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" target="_blank">Adobe website</a> for the latest version.<br /><a href="https://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" target="_blank"><img src="/football/common/chinese/images/get_adobe_flash_player.png" alt="Get Adobe Flash Player" /></a>'
        container.appendChild(homeNewsFLV);
        photos.insertBefore(container, photos.getElementsByTagName('a')[0]);

        setTimeout(function () {
            var flashvars = {};
            flashvars.swfPath = '/football/common/chinese/images/swf/SkinOverAllNoFullNoCaption.swf';
            flashvars.flv = btn.flv;

            var params = {};
            params.allowscriptaccess = 'always';
            params.wmode = 'opaque';

            var attributes = {};

            swfobject.embedSWF('/football/common/chinese/images/swf/video.swf', 'homeNewsFLV', '100%', '100%', '10.0.0', '', flashvars, params, attributes);

            d.getElementById('homeNewsFLV').style.display = 'block';
        }, 500);

        flvIsPlaying = true;
    };

    this.removeFLV = function () {
        if (!d.getElementById('homeNewsFLVContainer')) return;

        var flvContainer = d.getElementById('homeNewsFLVContainer');
        photos.removeChild(flvContainer);

        flvIsPlaying = false;
    };

    this.changeImg = function (btn) {
        if (hit) return;
        this.removeFLV();

        btn.img.style.display = 'block';
        if (highlightImg) highlightImg.style.zIndex = index;
        index++;
        btn.img.style.zIndex = index;
        startFading(btn.img);
        highlightImg = btn.img;

        if (highlightP) highlightP.style.display = '';
        btn.p.style.display = 'block';
        startFading(btn.p);
        highlightP = btn.p;

        btn.className += ' active';
        if (highlightA) highlightA.className = highlightA.className.replace(/active/, '');
        highlightA = btn;

        curIndex = btn.num;
    };

    this.autoChange = function () {
        clearInterval(timeout);

        timeout = setInterval(function () {
            curIndex++;
            if (curIndex >= total) curIndex = 0;

            self.changeImg(navList[curIndex]);
        }, time);
    };

    this.init();
}


function setNewsDetailsWA(id, pageIndex) {
    var div = document.getElementById(id);
    if (!div) return;
    div.innerHTML = "";
    var array = mainHighlightObj_charities;
    var filter_array = new Array();

    for (var i = 0; i < array.length; i++) {
        if ((filter_beneficiary == array[i].BENEFICIARY || filter_beneficiary == "") && (filter_ngo == array[i].NGO || filter_ngo == "") && (filter_project == "" || filter_project == array[i].PROJECT) && (filter_category == array[i].CATEGORY || filter_category == "")) {
            filter_array.push(array[i]);
        }
    }

    var table = document.createElement('table');
    table.cellSpacing = '0';
    table.cellPadding = '0';
    table.width = "100%";
    var itemShowPerPage = 5;
    var startIndex = 0;
    var endIndex = startIndex + itemShowPerPage;

    var countTotal = 0;//displayed Item
    if (!pageIndex) {
        pageIndex = 1;
    }
    if (pageIndex != null) {
        startIndex = (pageIndex - 1) * itemShowPerPage;
        endIndex = startIndex + itemShowPerPage - 1;
    }
    if (filter_array.length - 1 < endIndex) {
        endIndex = filter_array.length - 1;
    }


    for (var i = startIndex; i <= endIndex; i++) {
        var tr = table.insertRow(-1);
        var td1 = tr.insertCell(-1);
        td1.className = "img";
        if (filter_array[i].ALT_TEXT.length <= 1) {
            filter_array[i].ALT_TEXT = "";
        }
        var img = createImg(filter_array[i].THUMBNAIL, filter_array[i].ALT_TEXT);
        if (filter_array[i].THUMBNAIL != "") {
            td1.appendChild(img);
        }
        var td2 = tr.insertCell(-1);
        td2.innerHTML = "<a href=\"" + filter_array[i].PATH + "\" ><span>" + filter_array[i].HEADING + "</span>" + filter_array[i].DESCRIPTION + "</a>";
        var td3 = tr.insertCell(-1);
        td3.innerHTML = filter_array[i].DATE;
        td3.className = "date";
        countTotal++;
    }
    if (countTotal == 0) {
        var newBoxDetails = document.getElementById("newsTable");
        newBoxDetails.innerHTML = "<div style=\"text-align:center\">There is no related information.</div>";
    }
    div.appendChild(table);
    if (pageIndex != null) {
        setNewsPagenationWA(pageIndex, filter_array.length, itemShowPerPage);
    }
}

function setNewsPagenationWA(pageIndex, totalResult, itemShowPerPage) {
    var div = document.getElementById("pagenator");
    if (!div) return;
    div.innerHTML = "";
    var totalPage = Math.ceil(totalResult / itemShowPerPage);
    if (pageIndex != 1 && totalPage > 1) {
        div.innerHTML += "<a href=\"javascript:;\" onclick=\"new setNewsDetailsWA('newsTable'," + (pageIndex - 1) + ");\">&lt;</a>";
    }
    for (var i = 1; i <= totalPage; i++) {
        var className = "";
        if (i != 1) {
            div.innerHTML += "|";
        }
        if (i == pageIndex) {
            className += " active";
        }
        div.innerHTML += "<a href=\"javascript:;\" class=\"" + className + "\" onclick=\"new setNewsDetailsWA('newsTable'," + i + ");\">" + i + "</a>"
    }
    if (pageIndex != totalPage && totalPage > 1) {
        div.innerHTML += "<a href=\"javascript:;\" onclick=\"new setNewsDetailsWA('newsTable'," + (pageIndex + 1) + ");\">&gt;</a>";
    }
}

function NewWindow(mypage, myname, w, h, scroll,resizable) {
    var winl = (screen.width - w) / 2;
    var wint = (screen.height - h) / 2;
    winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars='+scroll+',resizable='+resizable+','
    win = window.open(mypage, myname, winprops)
    win.self.focus()
    if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
}

