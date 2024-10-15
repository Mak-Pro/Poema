

(function( $ ) {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, DrawSVGPlugin, MotionPathPlugin, GSDevTools);
	gsap.defaults({ease: 'none'});


	/*document ready*/
	$(document).ready(function(){
		

		// ScrollTrigger.normalizeScroll(true);

		// create the smooth scroller FIRST!
		// let smoother = ScrollSmoother.create({
		//   smooth: 2,
		//   effects: true,
		//   normalizeScroll: true
		// });



		// svg line

		const line = gsap.timeline();
						// .from(".theLine", {drawSVG:0, duration:4}, 0)
						// .to('.ball01', {
						// 	motionPath: {
						// 		path: 'theLine',
						// 	}
						// });



		// GSDevTools.create({
		// 	animation: line
		// });


	}); // end ready











	/*window load*/
	$(window).on('load', function() {

	});




	






	/*window resize*/
	$(window).resize(function() {
		
	});




})(jQuery);	


	