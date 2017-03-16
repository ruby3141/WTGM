//////////////////////////////////////////////////////////////
//this js file requires wtgm.render.js to be alreaded loaded//
//////////////////////////////////////////////////////////////
var currentpiece = 
{
	type : 0,// i, t, l, j, s, z, o for 1 to 7
	dir : 0, // how many a presses to get to the direction
	x : 0,
	y : 0 //this value is not for 
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

function getarrsize(type)
{
	switch(type)
	{
		case 1:
			return 4;
		case 2: case 3: case 4: case 5: case 6:
			return 3;
		case 7:
			return 2;
	}
}

function renderpiece(size, type, dir, x, y, layer)
{
	var arraysize = getarrsize(size);
	var sm = size*12;
	for(var i = 0; i < arraysize; i++)
		for(var j = 0; j < arraysize; j++)
			renderblock(x+(j*sm),y+(i*sm),size,type,layer);
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
	
}
