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

drawborder(hl);
/*renderblock(24, 96, 2, 2, ml);
renderblock(24, 552, 2, 2, ml);
renderblock(240, 96, 2, 2, ml);
renderblock(240, 552, 2, 2, ml);
*/
