phina.define('Bt', {
    superClass: 'Button',
    init: function(x, y, width, height, text, fontSize, fontColor='white', fill=COLOR_CHA){
	this.superInit({
	    x: x,
	    y: y,
	    width: width,
	    height: height,
	    text: text,
	    fontSize: fontSize,
	    fontColor: fontColor,
	    fill: fill,
	    cornerRadius: 0,
	    stroke: 'black',
	    strokeWidth: 0,
	});
    },
});
