

var mySVG = $('#insides').drawsvg({
      duration: 2000,
	  stagger: 10
    });
	

setTimeout(function() {
	mySVG.drawsvg('animate');
}, 500);

setTimeout(function() {
	 $("#colors").fadeTo(1000, 1);
}, 1500);
