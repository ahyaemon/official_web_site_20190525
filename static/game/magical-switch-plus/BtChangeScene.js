phina.define('BtChangeScene', {
    superClass: 'Button',
    init: function(next, x, y, width, height, text, fontSize, scene, fontColor='white', fill=COLOR_CHA){
	this.next = next;
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
    onpointend: function(e){
	nextScene = this.next;
    },
});
