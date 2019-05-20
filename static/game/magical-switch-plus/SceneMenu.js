phina.define('SceneMenu', {
    superClass: 'DisplayElement',
    init: function() {
	this.superInit({
	    width: SCREEN_WIDTH,
	    height: SCREEN_HEIGHT,
	});
	Background().addChildTo(this);

	var top = 80;
	Lb(xcenter, top, "MAGICAL SWITCH", 60, COLOR_GREY).addChildTo(this);
	Lb(xcenter + 180, top + 50, "PLUS", 40, COLOR_ORANGE).addChildTo(this);
	Lb(140, top + 120, "<HOW TO PLAY>", 26, COLOR_GREY).addChildTo(this);
	Lb(200, top + 155, "ボタンを全部押してね。", 26, COLOR_GREY).addChildTo(this);
	Lb(300, top + 190, "マリオRPGにあったミニゲームの発展版。", 26, COLOR_GREY).addChildTo(this);
	Lb(140, top + 250, "<SELECT STAGE>", 26, COLOR_GREY).addChildTo(this);
	Bts().addChildTo(this);

	Lb(xcenter, SCREEN_HEIGHT - 40, "MADE BY AHYAEMON.", 40, COLOR_GREY).addChildTo(this);

    },
});

phina.define('Bts', {
    superClass: 'DisplayElement',
    init: function() {
	var qnum = questions.length;
	this.superInit({
	    x: 82,
	    y: ycenter - 70,
	});

	for(var i=0; i<qnum; i++){
	    var x = (i % 5) * 120;
	    var y = Math.floor(i / 5) * 120;
	    var bt = Bt(x, y, 100, 100, "" + (i + 1), 60).addChildTo(this);
	    bt.cornerRadius = 10;
	    bt.n = i;
	    bt.onpointend = function(){
		this.parent.parent.parent.n = this.n
		nextScene = 'Game';
	    }
	}
    },
});
