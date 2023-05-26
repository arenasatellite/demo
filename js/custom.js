$( document ).ready(function() {

	//To add class in menu on scroll
    $(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 100) {
	        $(".navbar").addClass("sticky-navbar");
	    } else {
	        $(".navbar").removeClass("sticky-navbar");
	    }
	});


    //Componenr animation on scroll
	$(window).scroll(function() {
		var theta = $(window).scrollTop() / 300 % Math.PI;
		$('#component1').css({ transform: 'rotate(' + theta + 'rad)' });
		$('#component2').css({ transform: 'rotate(-' + theta + 'rad)' });
		$('#component3').css({ transform: 'rotate(' + theta + 'rad)' });
		$('#component4').css({ transform: 'rotate(-' + theta + 'rad)' });
		$('#component5').css({ transform: 'rotate(' + theta + 'rad)' });
		$('#component6').css({ transform: 'rotate(-' + theta + 'rad)' });
		$('#componentinp1').css({ transform: 'rotate(' + theta + 'rad)' });
		$('#componentinp2').css({ transform: 'rotate(-' + theta + 'rad)' });
	});
		$(window).scroll(function() {
		var theta = $(window).scrollTop() / 300 % Math.PI;
		$('#component1').css({ transform: 'rotate(' + theta + 'rad)' });
		$('#component2').css({ transform: 'rotate(-' + theta + 'rad)' });
		$('#component3').css({ transform: 'rotate(' + theta + 'rad)' });
		$('#component4').css({ transform: 'rotate(-' + theta + 'rad)' });
		$('#component5').css({ transform: 'rotate(' + theta + 'rad)' });
		$('#component6').css({ transform: 'rotate(-' + theta + 'rad)' });
		$('#componentinp1').css({ transform: 'rotate(' + theta + 'rad)' });
		$('#componentinp2').css({ transform: 'rotate(-' + theta + 'rad)' });
	});

	//Home Upcoming matches Carousel
	$('.owl-carousel').owlCarousel({
	    loop:false,
	    margin:30,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});

	//Home Latest News Carousel
	$('.latest-news-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});

	//Matche Highlights Carousel
	$('.matches-highlight-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});

	//sicial Carousel
	$('.social-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	});


	//tickets page
	// $( "#select-match" ).click(function(e) {
	// 	console.log("Hello world!");
	//   $(e.target).toggleClass( "selected" );
	// });

});
