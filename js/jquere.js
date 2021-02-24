(function($) {

	"use strict";
 
	


  
      /* --------------------------------------------------- */
	/*  Vegas Slideshow
	------------------------------------------------------ */
	 $("#hero").vegas({
		transitionDuration: 2000,
		delay: 15000,
    	slides: [
        { src: "images/ro1.gif" },
       	{ src: "images/ro2.png" },
		
         { src: "images/simu1.gif" },
         { src: "images/simu2.gif" }
    	],
        transition: 'slideLeft2',
	});

  $('#previous').on('click', function () {
    // $elmt
    $("#hero").vegas('options', 'transition', 'slideRight2').vegas('previous');
});

$('#next').on('click', function () {
  // $elmt.vegas('options', 'transition', 'slideLeft2').vegas('next');
  //$elmt
  $("#hero").vegas('options', 'transition','slideLeft2').vegas('next');
});

 /* --------------------------------------------------- */
	/*  Vegas Slideshow
	------------------------------------------------------ */
    $("#heroes").vegas({
		
		transitionDuration: 2000,
	    
		delay: 4000,
    	slides: [
        { src: "images/ekip45.jpeg" },
       	{ src: "images/ekip56.jpeg" },
		
         { src: "images/ekipyari.jpeg" }
    	],
        transition: 'slideLeft2',
	});

  $('#previous').on('click', function () {
    // $elmt
    $("#heroes").vegas('options', 'transition', 'slideRight2').vegas('previous');
});

$('#next').on('click', function () {
  // $elmt.vegas('options', 'transition', 'slideLeft2').vegas('next');
  //$elmt
  $("#heroes").vegas('options', 'transition','slideLeft2').vegas('next');
});

})(jQuery);
