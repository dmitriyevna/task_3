// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js
//=include slider.js

$('.scroll-down').on('click', function(e){

    e.preventDefault();

    var target = this.hash;

    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});

sayHello();
