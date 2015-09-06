$(function () {
	
	$('.smbutton').on('mouseenter', function(){
		//$('.sub-menu').addClass('visible');
		// $('.sub-menu').animate(
			// { width: '400px', height: '495px', opacity: 1, zIndex: 1 },
			// {
				// duration : 200,
				// specialEasing: {},
				// complete: function () {
					// // execute when finished
					// // this = element before .animate
				// }
			// }
		// );
		
		if (!$('.sub-menu').is(':animated')) {
			$('.sub-menu').css({zIndex: 1})
			.slideDown({duration: 200});
		}
		
		
		
	});
	$('.sub-menu, .menu').on('mouseleave', function(){
		//$('.sub-menu').removeClass('visible');
		
		// $('.sub-menu').animate(
			// { width: '0px', height: '0px', opacity: 0, zIndex: 0 },
			// {
				// duration : 200,
				// specialEasing: {},
				// complete: function () {
					// // execute when finished
					// // this = element before .animate
				// }
			// }
		// );
		
		if (!$('.sub-menu').is(':animated')) {
			$('.sub-menu').slideUp(200);
		}
		
		
	});
	
});