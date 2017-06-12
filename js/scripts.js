$(function() {
	var carouselList = $("#carousel .slider-list");
	function changeSlide() {
		carouselList.animate({'marginLeft':-800}, 500, moveFirstSlide);	
	}
	function changeSlidePrev() {
		carouselList.animate({'marginRight':-800}, 500, moveFirstSlide);
	}
	setInterval(changeSlide, 5000);
	function moveFirstSlide() {
		var firstSlide = carouselList.find("li:first");
		var lastSlide = carouselList.find("li:last");
		lastSlide.after(firstSlide);
		carouselList.css({marginLeft:0});
		// indicators change with slide
		$('.indicators li.active').removeClass('active').next().add('.indicators li:first').last().addClass('active');
	}
	// left and right button slide change
	$("#prev-slide").click(function() {				// nie działa lewy przycisk i nie mogę wymyślić jak go ożywić!!!
		$(changeSlidePrev).carouselList('prev');
	});
	$("#next-slide").click(function() {
		$(changeSlide).carouselList('next');
	});
});