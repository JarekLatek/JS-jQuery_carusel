$(function() {
	var carousel = $("#carousel");
	var carouselList = carousel.find("ul.slider-list");
	var carouselMenu = carousel.find("ul.indicators");
	// dots adding by <li> elements witch are as many as the number of slides
	carouselList.find("li").each(function() {
		carouselMenu.append("<li></li>");
	});
console.log(carouselList);
	var dotsOption = carouselMenu.find("li");
	// adding class active
	dotsOption.first().addClass("active");
	// dots click function
	dotsOption.click(function() {
		if ( !$(this).hasClass("active") ) {
			target = $(this).index();
			slideChange(target);
		}
	});
	// automatic slide change function
	function autoChangeSlide() {
		target = dotsOption.siblings(".active").index();
		target == dotsOption.length -1 ? target = 0 : target += 1;
		slideChange(target);	
	}
	// slide moving
	function slideChange(target) {
		carouselList.stop().animate({'marginLeft': -800 * target});
		dotsOption.removeClass("active").eq(target).addClass("active");
		resetInterval();
	}
	// interval set and reset
	var autoMove = setInterval(function(){autoChangeSlide();}, 5000);
	function resetInterval() {
		clearInterval(autoMove);
		autoMove = setInterval(function(){autoChangeSlide();}, 5000);
	}
	// left and right button slide change
	carousel.find(".prev").click(function() {
		target = dotsOption.siblings(".active").index();
		target == 0 ? target = dotsOption.length - 1 : target -= 1;
		slideChange(target);
	});
	carousel.find(".next").click(function() {
		target = dotsOption.siblings(".active").index();
		target == dotsOption.length - 1 ? target = 0 : target += 1;
		slideChange(target);
	});
});