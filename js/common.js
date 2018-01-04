$(function() {
	$('.topSlider').slick({
		prevArrow: '<img src="img/prevArrow.png">',
		nextArrow: '<img src="img/nextArrow.png">',
		arrows: true,
		useCss: true
	});
	$('.parthnersSlider').slick({
		slidesToShow: 5,
		prevArrow: '<img src="img/leftArrow2.png">',
		nextArrow: '<img src="img/rightArrow2.png">',
		arrows: true,
		useCss: true,
		infinite: true,
		
		responsive: [
            {
                breakpoint: 1200,
                settings: {
                slidesToShow: 4,
                }
              },
               {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                }
              }
                
                   

       
           
                    ]
	});
	var $showMnu = $(".showMnu");
	var $nav = $(".mainNav")
	$showMnu.click(function(e){
		e.preventDefault();
		$nav.slideToggle();


	});
	var $mnuLink = $(".mainNav a")
	 $mnuLink.on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

	var $closeButton = $('.close');
	var $modal = $('.modal');
	$closeButton.click(function(){
	$modal.hide();
	});
var $showModal = $('.showModal');
var $modalImg = $('.modal img');
var $modalImgSrc = $modalImg.attr('src');

 
 $showModal.click(function(e){
 	e.preventDefault();
 	var $thsh = $(this);
 	var $thImg=$thsh.next();
 	var $ourSrc = $thImg.attr('src');
 	$modalImg.attr("src" ,$ourSrc);
 	var $showModPar = $(this).parent();
 	var $descr = $showModPar.next();
 	var $modalTitle = $descr.children('p').text();
 	$modal.children("p").text($modalTitle);
 	$modal.show();

 	

 });
});

