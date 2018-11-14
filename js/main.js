//Enabling slider
$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		menu: false,
		lockAnchors: true,
		anchors:['firstPage', 'secondPage'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['firstSlide', 'secondSlide'],
		showActiveTooltip: true,
		slidesNavigation: true,
        slidesNavPosition: 'bottom',
        scrollBar: false,

		//Scrolling
		css3: true,
		scrollingSpeed: 500,
		autoScrolling: true,
        fitToSection: true,
		
		//Colors
		sectionsColor: ['#3a369d'],
    });

});