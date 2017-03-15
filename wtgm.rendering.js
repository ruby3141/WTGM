function drawborder(layer)
{
	var ctx = layer.getContext("2d");
	var grd = ctx.createLinearGradient(12, 84, 276, 588);
		grd.addColorStop(0, "#8888bb");
		grd.addColorStop(0.5, "#225588");
		grd.addColorStop(1, "#8888bb");
	ctx.beginPath();
	ctx.fillStyle = grd;
	ctx.rect(0,72, 288, 528);
	ctx.fill();
	ctx.closePath();
	ctx.clearRect(24,96,240, 480);
	ctx.lineWidth = "4";
	ctx.strokeStyle = "rgba(68,68,68,0.5)";
	ctx.beginPath();
	ctx.rect(2, 74, 284, 524);
	ctx.stroke();
	ctx.closePath();
	ctx.beginPath();
	ctx.rect(22, 94, 244, 484);
	ctx.stroke();
	ctx.lineWidth = "2";
	ctx.rect
	ctx.closePath();
}

//color : i = 1, t = 2, l = 3 ,j = 4, s = 5, z = 6, o = 7, none = 0
//size : 1 for mini size, 2 for normal size, 4 for big size.(for staff role of sirase)
function renderblock(x, y, size, color, layer)
{
	var ctx = layer.getContext("2d");
	var grd = ctx.createLinearGradient(x,y,x,y+(size*12));
	switch(color)
	{
		case 0:
			return;
		case 1:
			var cs = "#ff0000"; var ce = "#bb0000"; break;
		case 2:
			var cs = "#00ffff"; var ce = "#00bbbb"; break;
		case 3:
			var cs = "#ff7f00"; var ce = "#bb4000"; break;
		case 4:
			var cs = "#0000ff"; var ce = "#0000bb"; break;
		case 5:
			var cs = "#ff00ff"; var ce = "#bb00bb"; break;
		case 6:
			var cs = "#00ff00"; var ce = "#00bb00"; break;
		case 7:
			var cs = "#ffff00"; var ce = "#bbbb00"; break;
		case 8:
			var cs = "#7f7f7f"; var ce = "#404040"; break;
	}
	grd.addColorStop(0, cs);
	grd.addColorStop(1, ce);
	var sm = (size*12);
	var pm = (size/2);
	ctx.beginPath();
	ctx.fillStyle = grd;
	ctx.rect(x, y, sm, sm);
	ctx.fill();
	ctx.closePath();
	grd = ctx.createLinearGradient(x,y,x+sm,y+sm);
	grd.addColorStop(0.49, "rgba(255,255,255,0.5)");
	grd.addColorStop(0.51, "rgba(0,0,0,0.5)");
	ctx.lineWidth = size;
	ctx.beginPath();
	ctx.strokeStyle = grd;
	ctx.rect(x + pm, y + pm, (size * 11), (size * 11));
	ctx.stroke();
	ctx.closePath();
}
