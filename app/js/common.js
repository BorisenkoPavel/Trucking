$(function() {

	var owl = $('.owl-carousel');
	owl.owlCarousel({
			center: true,
			responsiveClass: true,
			items: 1,
			nav: false,
			navText: ['<i class="fa fa-angle-left fa-2x" aria-hidden="true"><img src="img/arrow.png"></i>',
									'<i class="fa fa-angle-right fa-2x" aria-hidden="true"><img src="img/arrow_r.png"></i>'
							],
			loop: true,
			responsive: {
					0: {
							nav: false
					},
					600: {
							nav: false
					},
					1000: {
							nav: true
					},
			}
	})

	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$("#modal2").css('top', '30vh');
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	var audio = $("#myaudio")[0];
	$(".button").mouseenter(function() {
	  audio.play();
	});

	
	var elemPos = $('#map').offset().top - 320;
	var elPos = $('#num-an').offset().top - 150;
	$(window).scroll(sectionScroll);
	function sectionScroll() {
		var winScrollTop = $(this).scrollTop();
		if (winScrollTop >= elemPos) {
			$('.map_loc').addClass('map-star');
		}		
		if (winScrollTop >= elPos) {
			$('.num-wrap').addClass('trans');
		}		
	}
});

$('.play').click(function(){
	$(this).fadeOut(50);
	});

$(document).on('click','video',function(e){
	e.preventDefault();
	
var video = $(this).attr('id');
	stopVideo(video);
$('.play').fadeIn(500);
	});


function playVideo(id){
	var video = document.getElementById(id);
	video.play();
	$('#'+id).parent('.video').find('.play').fadeOut(50);
	$('.banner-left').addClass('small');
	$('.video-wrap').addClass('small');
	$('.phone-video').addClass('small');
	}

function stopVideo(id){
	var video = document.getElementById(id);
	video.pause(); 
	$('#'+id).parent('.video').find('.play').fadeIn(50);
	$('.banner-left').removeClass('small');
	$('.video-wrap').removeClass('small');
	$('.phone-video').removeClass('small');
	

	}
	