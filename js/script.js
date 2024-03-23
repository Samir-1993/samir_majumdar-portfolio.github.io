/* =========== Typing animation =================== */

var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "Graphic Designer", "UI Designer", "UX Designer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

/* =========== Active Class switcher =================== */

/* =========== Gallery zoom effect start =================== */

$(function () {
    $('.bimg').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

/* =========== Gallery zoom effect end =================== */

/* =========== Gallery zoom effect2 start =================== */

$(function () {
    $('.bimg2').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

/* =========== Gallery zoom effect2 end =================== */

/* =========== Active class switch in menu start =================== */

$(document).ready(function(){
    $(".aside .nav li a").click(function(){
        $(".aside .nav li a.active").removeClass("active");
        $(this).addClass("active");
    })
})


/* =========== Active class switch in menu end =================== */