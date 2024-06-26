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

/* =========== Gallery zoom effect3 start =================== */

$(function () {
    $('.bimg3').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

/* =========== Gallery zoom effect3 end =================== */

/* =========== Active class switch in menu start =================== */

$(document).ready(function(){
    $(".aside .nav li a").click(function(){
        $(".aside .nav li a.active").removeClass("active");
        $(this).addClass("active");
    })
});


/* =========== Active class switch in menu end =================== */

/* =========== Active class Auto switch menu start =================== */

$(document).ready(function() {
    var sections = $('section');
    var navLinks = $('.nav li a');

    $(window).on('scroll', function() {
        var currentScroll = $(this).scrollTop();
        var currentSection;

        sections.each(function() {
            var sectionTop = $(this).offset().top - 60; // Adjust this value based on your nav height
            if (currentScroll >= sectionTop) {
                currentSection = $(this);
            }
        });

        var id = currentSection && currentSection.length ? currentSection[0].id : '';
        navLinks.removeClass('active');
        if (id) {
            $('.nav li a[href="#' + id + '"]').addClass('active');
        }
    });
});

/* =========== Active class Auto switch menu end =================== */

/* ===========  Prevents scroll to top when clicking on <a href="#"> start =================== */

// Enable Smooth Scrolling ...
	$('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
	

/* ===========  Prevents scroll to top when clicking on <a href="#"> end =================== */