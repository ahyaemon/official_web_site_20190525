phina.define('Lb',{
    superClass: 'Label',
    init: function(x, y, text, fontSize, fill, align="center"){
	this.superInit({
	    x: x,
	    y: y,
	    text: text,
	    fontSize: fontSize,
	    fill: fill,
	    align: align,
	});
    },
});
