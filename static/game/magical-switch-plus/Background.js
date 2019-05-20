phina.define('Background',{
    superClass: 'RectangleShape',
    init: function(){
	this.superInit({
	    x: xcenter,
	    y: ycenter,
	    fill: COLOR_CREAM,
	    strokeWidth: 0,
	    width: SCREEN_WIDTH,
	    height: SCREEN_HEIGHT,
	});
    },
});
