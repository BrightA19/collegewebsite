$(document).ready(function () {
    $(document).scroll(function () {
        if (screen.width > 768) {
            if ($(document).scrollTop() > 450) {
                $(".navbar-custom").css("background-color", "#CCF");
                $(".navbar-custom").css("border-color", "#00A");
                $(".navbar a").css("color", "#00A");
                $(".nav .active a").css("color", "#00A");
                $(".dropdown-menu").css("background-color", "#DDF");
                $(".icon-bar").css("background-color", "#00A");
            }
            else if ($(document).scrollTop() > 10) {
                $(".navbar-custom").css("background-color", "rgba(221,221,255,0.5)");
                $(".navbar-custom").css("border-color", "#FFF");
                $(".navbar a").css("color", "#FFF");
                $(".nav .active a").css("color", "#00A");
                $(".dropdown-menu").css("background-color", "rgba(221,221,255,0.5)");
                $(".icon-bar").css("background-color", "#FFF");
            }
            else {
                $(".navbar-custom").css("background-color", "rgba(0,0,0,0)");
                $(".navbar-custom").css("border-color", "#FFF");
                $(".navbar a").css("color", "#FFF");
                $(".nav .active a").css("color", "#00A");
                $(".dropdown-menu").css("background-color", "rgba(221,221,255,0.5)");
                $(".icon-bar").css("background-color", "#FFF");
            }
        }
    });
    
});