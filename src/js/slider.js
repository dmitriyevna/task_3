$(document).ready(function(){
	$('.hero').slick({
		prevArrow: '<span class="slick-arrow slick-prev"><svg class="icon icon-angle-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-angle-left"></use></svg></span>',
  		nextArrow: '<span class="slick-arrow slick-next"><svg class="icon icon-angle-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-angle-right"></use></svg></span>',
		slide: '.slider__item',
		appendArrows: '.slider__nav'
	});
});