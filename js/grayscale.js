/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $("#navLogo").attr("src","img/logo_v.png");
        $("#navLogo").attr("height","30");
        $(".navbar-nav a").css("color","#000");
        $(".fone-bottom").hide();
        $(".fone-top").show();
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $("#navLogo").attr("src","img/logo_amarelo.png");
        $("#navLogo").attr("height","74");
        $(".fone-bottom").show();
        $(".fone-top").hide();

        if (window.innerWidth > 768){
            $(".navbar-nav a").css("color","#f8f012");    
            $(".fone-top").hide();
        }else{
            $(".fone-top").show();
        }

        
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});

