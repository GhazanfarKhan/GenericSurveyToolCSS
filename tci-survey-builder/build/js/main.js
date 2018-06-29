(function($){
    $(window).on("load",function(){
        $(".language-switcher .dropdown-menu.inner, .mcustomscrollbar").mCustomScrollbar();
    });
    $(window).on("load",function(){
        $(".mCustomScrollbarHorizontal").mCustomScrollbar({
            axis:"x", // horizontal scrollbar
            scrollbarPosition: "inside",


        });
    });
})(jQuery);
$('.selectpicker').selectpicker('boolean,true');
$(function () {
    $('.category-options h4').click(function () {
        $(this).parent().next().slideToggle();
        $(this).parent().next().toggleClass('active');
        $(this).parent().toggleClass('active');
    });
    $('.logic-header').click(function () {
        $(this).next().slideToggle();
        $(this).next().toggleClass('active');
        $(this).toggleClass('active');
    });
    $('.contact-list-header .toggle').click(function () {
        $(this).parent().next('.contact-list-expandable').slideToggle();
        $(this).parent().next().toggleClass('active');
        $(this).parent().toggleClass('active');
    });
    $('.question .category').click(function () {
        $(this).next('.category-collapsible').slideToggle();
        $(this).next('.category-collapsible').toggleClass('active');
        $(this).toggleClass('active');
    });
});