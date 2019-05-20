// phina.js をグローバル領域に展開
phina.globalize();

// MainScene クラスを定義
phina.define('MainScene', {
    superClass: 'DisplayScene',
    init: function() {
	this.superInit();
	// 最初のシーン
	// nextScene = "Game";
	nextScene = "Menu";
	Lb().addChildTo(this);
	this.nowScene = "";
	this.n = 0;
	this.changeScene();
    },
    update: function(){
    	this.changeScene();
    },
    changeScene: function(){
    	if(nextScene != ""){
    	    if(this.children.length > 0)
    		this.children.first.remove();
	    
    	    if(nextScene == "Game")
    		var next = SceneGame(questions[this.n]);
    	    else if(nextScene == "Menu")
    		var next = SceneMenu();
    	    else if(nextScene == "Hex2BinPrev")
    		var next = SceneHex2BinPrev();
	    
    	    next.addChildTo(this);
    	    this.nowScene = next;
    	    nextScene = "";
    	}
    },
});

// メイン処理
phina.main(function() {
  var app = GameApp({
    startLabel: 'main',
  });
  app.run();
});
