phina.define('Rct',{
    superClass: 'RectangleShape',
    init: function(x, y, width, height, fill){
	this.superInit({
	    x: x,
	    y: y,
	    fill: fill,
	    strokeWidth: 0,
	    width: width,
	    height: height,
	});
    },
});
