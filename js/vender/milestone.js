$(window).load(function () {
    // light
    $('.timelineLight').timeline({
        openTriggerClass: '.read_more',
        startItem: '1846/13/2015', // First Node
        yearsOn: false,
        itemMargin: -60,
        categories: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
        nuberOfSegments: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 6, 6, 6, 6, 6, 6, 6, 6],
        hideTimeline: false
    });

    /*$(function () {
        $("img.lazy").lazyload({
            event: "foobar",
            effect: "fadeIn"
        });
    });*/


    $('.left-fade-in').click(function (e) {
        $('.left-fade-in').hide();
        $(document.elementFromPoint(e.clientX, e.clientY)).trigger("click");
        $('.left-fade-in').show();
    });

    $('.right-fade-in').click(function (e) {
        $('.right-fade-in').hide();
        $(document.elementFromPoint(e.clientX, e.clientY)).trigger("click");
        $('.right-fade-in').show();
    });

    $('.t_line_node').last().click(function () {
    });

    $('.timelineLight').scroll(function () {
        if ($(this).scrollLeft() > 0) {
            $(this).scrollLeft(0);
        }
    });

});
$(window).bind("load", function () {
    $("img.lazy").trigger("foobar");
});
