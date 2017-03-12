////////////////////////////////////////////////////////////////
//this js file requires "wtgm.render.js" to be already loaded.//
////////////////////////////////////////////////////////////////

var sl = document.getElementById("stacklayer");
var ml = document.getElementById("motionlayer");
var hl = document.getElementById("hudlayer");
var al = document.getElementById("anilayer");
var blockstack = [];
for(var i = 0; i < 21; i++)
{
	blockstack[i] = [];
	for(var j = 0; j < 10; j++) blockstack[i][j] = 0;
}

function renderstack(layer)
{
	for(var i = 0; i < 21; i++)
		for(var j = 0; j < 10; j ++)
		{
			renderblock(240-(24*j), 552-(24*i), 2, blockstack[i][j], layer);
		}
}

var blkgen = 
{
	blockbag : [],
	history : ['s','z','s','z'],
	dorder : ['j','i','z','l','o','t','s'],

	generate : function()
	{
		console.error("Block generator not initialized");
	},

	init : function()
	{
		for(var i = 0; i < 4; i++)
			for(var j = 0; j < 7; j++);
				this.blockbag.push(this.dorder[j]);
		for(var i = 34; i >= 0; i--)
		{
			var j = Math.floor(Math.random() * 35);
			var temp = this.blockbag[i];
			this.blockbag[i] = this.blockbag[j];
			this.blockbag[j] = temp;
		}
		this.generate = function()
		{
			this.generate = function()
			{
				for(var i = 0; i < 6; i++)
				{
					var a = Math.floor(Math.random() * 35);
					var piece = this.blockbag[a];
					if(piece != history[0] || piece != history[1] || piece != history[2] 
						|| piece != history[3])
						break
					this.blockbag[a] = this.dorder[0];
				}
				this.dorder.splice(this.dorder.lastIndexOf(piece), 1);
				this.dorder.push(piece);
				this.history.shift();
				this.history.push(piece);
				return piece;
			};
			return ['j', 'i', 'l', 't'][Math.floor(Math.random()*5)];
		};
	}
}

/*
function blkgen()
{
	if(init)
	{
		for(var i = 0; i < 6; i++)
		{
			var a = Math.floor(Math.random() * 35);
			var piece = this.blockbag[a];
			if(piece != history[0] || piece != history[1] || piece != history[2] 
				|| piece != history[3])
				break
			bag[a] = dorder[0];
		}
		this.dorder.splice(this.dorder.lastIndexOf(piece), 1);
		this.dorder.push(piece);
		this.history.shift();
		this.history.push(piece);
		return piece;
	}
	else
	{
		this.blockbag = [];
		this.history = ['s','z','s','z'];
		this.dorder = ['j','i','z','l','o','t','s'];
		this.count = [0, 0, 0, 0, 0, 0, 0]
		for(var i = 0; i < 4; i++)
			for(var j = 0; j < 7; j++);
				this.blockbag.push(gen.dorder[j]);
		for(var i = 35; i > 0; i++)
		{
			var j = Math.floor(Math.random() * 35);
			var temp = gen.blockbag[i];
			this.blockbag[i] = gen.blockbag[j];
			this.blockbag[j] = temp;
		}
		init = true;
		return ['j', 'i', 'l', 't'][Math.floor(Math.random()*5)];
	}
}
blkgen.init = false;
*/

drawborder(hl);
/*renderblock(24, 96, 2, 2, ml);
renderblock(24, 552, 2, 2, ml);
renderblock(240, 96, 2, 2, ml);
renderblock(240, 552, 2, 2, ml);
*/
