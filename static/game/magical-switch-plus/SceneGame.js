phina.define('SceneGame', {
    superClass: 'DisplayElement',
    init: function(li) {
	this.li = li;
	this.superInit({
	    x: 0,
	    y: 0,
	});
	Background().addChildTo(this);
	this.clearFlag = false;

	// メニューパネル
	BtChangeScene("Menu", xcenter, 50, SCREEN_WIDTH, 100, "MENU", 40).addChildTo(this);

	//
	var qnum = questions.indexOf(this.li);
	Lb(xcenter, 170, "- Question " + (qnum + 1) + " -", 40).addChildTo(this);
	
	// map
	this.map = Map(this.li).addChildTo(this);
	
	// restart button
	var btRestart = Bt(xcenter, SCREEN_HEIGHT - 100, 400, 100, "RESTART", 40).addChildTo(this);
	btRestart.cornerRadius = 10;
	btRestart.onpointend = function(){
	    this.parent.init(this.parent.li);
	};
    },
    update: function(){
	if(this.clearFlag == false){
	    if(this.map.isClear()){
		this.clearFlag = true;
		PopClear(xcenter, ycenter).addChildTo(this);
	    }
	}
    }
});


phina.define('Map', {
    superClass: 'DisplayElement',
    init: function(li) {
	this.li = li;
	var size = 60;
	var margin = 10
	this.nrow = this.li.length;
	this.ncol = this.li[0].length;

	this.superInit({
	    x: xcenter - this.nrow * size / 2 + 10,
	    y: ycenter - this.ncol * size / 2,
	});
	
	// btSwitchの作成
	for(var idx_row=0; idx_row<this.nrow; idx_row++){
	    var row = this.li[idx_row]
	    for(var idx_col=0; idx_col<this.ncol; idx_col++){
		var cell = row[idx_col];
		if(cell != 0){
		    var btSwitch = BtSwitch(idx_col * (size + margin), idx_row * (size + margin), size, idx_row, idx_col, cell).addChildTo(this);
		}
	    }
	}
	
	// 枠の作成
	for(var idx_row=0; idx_row<this.nrow; idx_row++){
	    for(var idx_col=0; idx_col<this.ncol; idx_col++){
		if(idx_row == 0)
		    Border(idx_row, idx_col, size + margin, 'right').addChildTo(this);
		if(idx_row == this.nrow - 1)
		    Border(idx_row + 1, idx_col, size + margin, 'right').addChildTo(this);
		if(idx_col == 0)
		    Border(idx_row, idx_col, size + margin, 'down').addChildTo(this);
		if(idx_col == this.ncol - 1)
		    Border(idx_row, idx_col + 1, size + margin, 'down').addChildTo(this);
	    }
	}


	// 仕切りの作成
	// 1:なし, 2:左, 3:上, 4:左+上
	for(var idx_row=0; idx_row<this.nrow; idx_row++){
	    var row = this.li[idx_row];
	    for(var idx_col=0; idx_col<this.ncol; idx_col++){
		var cell = row[idx_col];
		if(cell == 2 || cell == 4){
		    Border(idx_row, idx_col, size + margin, 'down').addChildTo(this);
		}		
		if(cell == 3 || cell == 4){
		    Border(idx_row, idx_col, size + margin, 'right').addChildTo(this);
		}
	    }
	}

    },
    isClear: function(){
	for(var i=0; i<this.children.length; i++){
	    if(this.children[i].mode == 'on'){
		return false;
	    }
	}
	return true;
    }
});

phina.define('Border', {
    superClass: 'RectangleShape',
    init: function(row, col, size, dir) {
	this.superInit({
	    x: col * size,
	    y: row * size,
	    width: 0,
	    height: 0,
	    stroke: COLOR_GREY,
	    strokeWidth: 1,
	});

	if(dir == 'down'){
	    this.height = size;
	    this.x -= 35;
	}
	if(dir == 'right'){
	    this.width = size;
	    this.y -= 35;
	}
    }
});
phina.define('BtSwitch', {
    superClass: 'Button',
    init: function(x, y, size, row, col, num) {
	this.superInit({
	    x: x,
	    y: y,
	    width: size,
	    height: size,
	    fill: '',
	    cornerRadius: 0,
	    stroke: '',
	    strokeWidth: 0,
	});
	this.num = num;
	this.row = row;
	this.col = col;
	this.size = size;
	this.crOuter = Cr(size).addChildTo(this);
	this.crInner = Cr(size - 10).addChildTo(this);
	this.onchange(this);
	Lb(0, 0, "!").addChildTo(this);
    },
    onpointend: function(){
	if(this.mode == 'on'){
	    var map = this.parent;
	    
	    // me
	    this.offchange(this);

	    // 1:なし, 2:左, 3:上, 4:左+上
	    // top
	    if(this.row > 0){
		if(this.num != 3 && this.num != 4){
		    var bttop = this.getTargetBt(map, this.row - 1, this.col);
		    if(bttop != null){
			this.changeState(bttop);
		    }
		}
	    }
	    // right
	    if(this.col < map.ncol - 1){
		var btright = this.getTargetBt(map, this.row, this.col + 1);
		if(btright != null){
		    if(btright.num != 2 && btright.num != 4){
			this.changeState(btright);
		    }
		}
	    }	    
	    // bottom
	    if(this.row < map.nrow - 1){
		var btbottom = this.getTargetBt(map, this.row + 1, this.col);
		if(btbottom != null){
		    if(btbottom.num != 3 && btbottom.num != 4){
			this.changeState(btbottom);
		    }
		}
	    }
	    // left
	    if(this.col > 0){
		if(this.num != 2 && this.num != 4){
		    var btleft = this.getTargetBt(map, this.row, this.col - 1);
		    if(btleft != null){
			this.changeState(btleft);
		    }
		}
	    }	    
	}
    },
    getTargetBt: function(map, row, col){
	for(var i=0; i<map.children.length; i++){
	    var child = map.children[i];
	    if(child.row == row && child.col == col){
		return child;
	    }
	}
	return null;
    },
    changeState: function(bt){
	if(bt.mode == 'on')
	    this.offchange(bt);
	else
	    this.onchange(bt);
    },
    onchange: function(bt){
	bt.mode = 'on';
	bt.crOuter.fill = COLOR_LIGHTGREY;
	bt.crInner.fill = COLOR_LIGHTGREEN;
    },

    offchange: function(bt){
	bt.mode = 'off';
	bt.crOuter.fill = COLOR_GREY;
	bt.crInner.fill = COLOR_DARKGREEN;
    }
});

phina.define('Cr', {
    superClass: 'CircleShape',
    init: function(radius, fill) {
	this.superInit({
	    x: 0,
	    y: 0,
	    fill: fill,
	    radius: radius / 2,
	    stroke: COLOR_GREY,
	    strokeWidth: 0,
	});
    }
});

//clear
phina.define('PopClear',{
    superClass: 'DisplayElement',
    init: function(x, y){
	this.superInit({
	    x: x,
	    y: y,
	});
	Lb(8, 8, "CLEAR!!", 120, 'black').addChildTo(this);
	Lb(4, 4, "CLEAR!!", 120, 'white').addChildTo(this);
	Lb(0, 0, "CLEAR!!", 120, COLOR_ORANGE).addChildTo(this);
    },
});
