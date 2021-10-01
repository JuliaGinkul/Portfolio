$(window).load(function() {
    $(".before-after").twentytwenty({
        before_label: 'Без скинали', // Set a custom before label
        after_label: 'С скинали' // Set a custom after label
    });
    $(".before-slider").slick({
        draggable: false,
        dots: true,
        dotsClass: "before-slider_dots",
        prevArrow: $(".arrow-left"),
        nextArrow: $(".arrow-right")
    });
    $(".menu-button").on("click", function(){
        $(".menu").toggleClass("menu_active");
    });
    /* Настройка select */
    $(".select_checked").on("click", function () {
        $(".select_dropdown").toggleClass("select_dropdown-open");
    });
    $(".select_option").on("click", function () {
        var value = $(this).attr("data-value");
        $("#select-type").val(value);
        $(".select_checked").text(value);
        $(".select_dropdown").toggleClass("select_dropdown-open");
    });
    $("a[href^='#']").click(function () {
        var _href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(_href).offset().top -100 + "px" });
        return false;
    });
    $("input[type='tel']").mask("+7 (999) 999-99-99");
});