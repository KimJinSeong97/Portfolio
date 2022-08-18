$("nav .menu").click(function () {
    $('nav .circle a').css("background", "rgba(50,50,50,.5)");
    $('nav .circle').stop().toggleClass('hidenav');
});
$("a").click(function () {
    $(this).css("background", "rgba(255,200,0,1)");
    setTimeout(function () {
        $('nav .circle').stop().addClass('hidenav');
    }, 1000);
});