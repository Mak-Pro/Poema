

(function( $ ) {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
	


	/*document ready*/
	$(document).ready(function(){
		

		// ScrollTrigger.normalizeScroll(true);

	// create the smooth scroller FIRST!
	let smoother = ScrollSmoother.create({
	  smooth: 2,
	  effects: true,
	  normalizeScroll: true
	});

		/*$(function(){
			$.pixlayout({
				src: "img/template.jpg",
				opacity: 0.5,
				top: 0,
				left: 0,
				center: true,
				clip: true,
				show: true,
				previous: false
			});
		});*/

	});











	/*window load*/
	$(window).on('load', function() {

	});




	






	/*window resize*/
	$(window).resize(function() {
		
	});




})(jQuery);	


	