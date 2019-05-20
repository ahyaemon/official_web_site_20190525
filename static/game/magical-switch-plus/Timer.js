phina.define('Timer',{
    superClass: 'Label',
    init: function(x, y, fontSize, fill){
	this.superInit({
	    x: x,
	    y: y,
	    fontSize: fontSize,
	    fill: fill,
	});
	this.time = 0;
	this.text = "0";
    },
    count: function(app){
	this.time += app.ticker.deltaTime;
	var sec = this.time/1000; // 秒数に変換
	this.text = sec.toFixed(2);
    },
});
