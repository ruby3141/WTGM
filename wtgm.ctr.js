//////////////////////////////////////////////////////////////
//this js file requires "wtgm.data.js" to be already loaded.//
//////////////////////////////////////////////////////////////

var blkgen = 
{
	//block order is i, t, l, j, s, z, o for 1 to 7.
	blockbag : [1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7],
	history : [5, 6, 5, 6],
	dorder : [4, 1, 6, 3, 7, 2, 5],

	generate : function()
	{
		console.error("Block generator not initialized");
	},

	init : function()
	{
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
				var piece;
				var a;
				for(var i = 0; i < 6; i++)
				{
					a = Math.floor(Math.random() * 35);
					piece = this.blockbag[a];
					this.blockbag[a] = this.dorder[0];
					if(piece != this.history[0] && piece != this.history[1] &&
						piece != this.history[2] && piece != this.history[3])
						break;
				}
				this.dorder.splice(this.dorder.lastIndexOf(piece), 1);
				this.dorder.push(piece);
				this.history.shift();
				this.history.push(piece);
				return piece;
			};
			this.history.shift();
			var piece =  [1, 2, 3, 4][Math.floor(Math.random()*4)];
			this.history.push(piece);
			return piece;
		};
	}
}

function movetest(type, dir, x, y)
{
	var arraysize = getarrsize(size);
	for(var i = 0; i < arraysize; i++)
		for(var j = 0; j < arraysize; j++)
			if(pieceshape[j][i] != 0 && blockstack[x-j][y-i] != 0) return false;
	return true;
}

function rotate(rot) //a button = 1, b button = -1;
{
	//notimplemented
}
