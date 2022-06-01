// Materialize - Initialization
// Auto Init allows you to initialize all of the Materialize Components with a single function call. It is important to note that you cannot pass in options using this method.
M.AutoInit();

//Parallax - Initialization
$(document).ready(function () {
    $(".parallax").parallax();
});

//Media - Material Box - Initialization
$(document).ready(function () {
    $(".materialboxed").materialbox();
});

//Media - Slider - Initialization
$(document).ready(function () {
    $(".slider").slider();
});

//Carousel - Initialization
$(document).ready(function () {
    $(".carousel").carousel();
});

//Tabs - Initialization
$(document).ready(function () {
    $(".tabs").tabs();
    this.swipeable = true;
});

//Dropdown - Initialization
$(".dropdown-trigger").dropdown();

//Navbar - Initialization
$(document).ready(function () {
    $(".sidenav").sidenav();
});

//Floating Action Button - Initialization
$(document).ready(function () {
    $(".fixed-action-btn").floatingActionButton();
});

//Tooltips - Initialization
$(document).ready(function () {
    $(".tooltipped").tooltip();
});

//Pushpin
$(document).ready(function () {
    $(".pushpin").pushpin();
});

//Pushpin - Initialization
$(".pushpin-demo-nav").each(function () {
    const $this = $(this);
    const $target = $("#" + $(this).attr("data-target"));
    $this.pushpin({
        top: $target.offset().top,
        bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
});

//Modals - Initialization
$(document).ready(function () {
    $(".modal").modal();
});


// highlight js
hljs.highlightAll();


// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.navbar-custom').height(),
            bannerHeight  = $('.intro-header .container').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop(),
                    $catalog = $('.side-catalog');

                //check if user is scrolling up by mouse or keyboard
                // if (currentTop < this.previousTop) {
                //     //if scrolling up...
                //     if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                //         $('.navbar-custom').addClass('is-visible');
                //     } else {
                //         $('.navbar-custom').removeClass('is-visible is-fixed');
                //     }
                // } else {
                //     //if scrolling down...
                //     $('.navbar-custom').removeClass('is-visible');
                //     if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
                // }
                this.previousTop = currentTop;


                //adjust the appearance of side-catalog
                $catalog.show()
                if (currentTop > (bannerHeight + 41)) {
                    $catalog.addClass('fixed')
                } else {
                    $catalog.removeClass('fixed')
                }
            });
    }
});