////////////////////////////////////////////////////////////////
//this js file requires "wtgm.render.js" to be already loaded.//
////////////////////////////////////////////////////////////////

const pieceshape = //pieceshape[type][dir]
	[,[[[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]],[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]]],
	[[[0,0,0],[2,2,2],[0,2,0]],[[0,2,0],[0,2,2],[0,2,0]],[[0,0,0],[0,2,0],[2,2,2]],
	[[0,2,0],[2,2,0],[0,2,0]]],[[[0,0,0],[3,3,3],[3,0,0]],[[0,3,0],[0,3,0],[0,3,3]],
	[[0,0,0],[0,0,3],[3,3,3]],[[3,3,0],[0,3,0],[0,3,0]]],[[[0,0,0],[4,4,4],[0,0,4]],
	[[0,4,4],[0,4,0],[0,4,0]],[[0,0,0],[4,0,0],[4,4,4]],[[0,4,0],[0,4,0],[4,4,0]]],
	[[[0,0,0],[0,5,5],[5,5,0]],[[5,0,0],[5,5,0],[0,5,0]]],
	[[[0,0,0],[6,6,0],[0,6,6]],[[0,0,6],[0,6,6],[0,6,0]]],[[[7,7],[7,7]]]];

let data = 
{
	blockstack : 
		[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],

	currentpiece : //type, dir, xpos, height
	{
		type : 0,// i, t, l, j, s, z, o for 1 to 7
		dir : 0, // how many a presses to get to the direction
		xpos : 0,
		height : 0 //this value is not pixel value, but array index.
	},

	init()
	{
		for(var i = 0; i < 21; i++)
			for(var j = 0; j < 10; j++) this.blockstack[i][j] = 0;
	}
}
