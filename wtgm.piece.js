//////////////////////////////////////////////////////////////
//this js file requires wtgm.render.js to be alreaded loaded//
//////////////////////////////////////////////////////////////
var currentpiece = 
{
	type : 0,// i, t, l, j, s, z, o for 1 to 7
	dir : 0, // how many a presses to get to the direction
	x : 0,
	y : 0
};

//call it as pieceshape[type][dir]
var pieceshape = 
[,[[[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]],[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]]],
[[[0,0,0],[2,2,2],[0,2,0]],[[0,2,0],[0,2,2],[0,2,0]],[[0,0,0],[0,2,0],[2,2,2]],
[[0,2,0],[2,2,0],[0,2,0]]],[[[0,0,0],[3,3,3],[3,0,0]],[[0,3,0],[0,3,0],[0,3,3]],
[[0,0,0],[0,0,3],[3,3,3]],[[3,3,0],[0,3,0],[0,3,0]]],[[[0,0,0],[4,4,4],[0,0,4]],
[[0,4,4],[0,4,0],[0,4,0]],[[0,0,0],[4,0,0],[4,4,4]],[[0,4,0],[0,4,0],[4,4,0]]],
[[[0,0,0],[0,5,5],[5,5,0]],[[5,0,0],[5,5,0],[0,5,0]]],
[[[0,0,0],[6,6,0],[0,6,6]],[[0,0,6],[0,6,6],[0,6,0]]],[[[7,7],[7,7]]]];

function renderpiece(size, type, dir, x, y, layer)
{
	var arraysize;
	switch(type)
	{
		case 1:
			arraysize = 4; break;
		case 2: case 3: case 4: case 5: case 6:
			arraysize = 3; break;
		case 7:
			arraysize = 2; break;
	}
	var sm = size*12;
	for(var i = 0; i < arraysize; i++)
		for(var j = 0; j < arraysize; j++)
			renderblock(x+(j*sm),y+(i*sm),size,type,layer);
}
