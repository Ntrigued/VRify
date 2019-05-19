VRify.setCanvasContent = function(cards){
	var canvas = document.getElementById("VRify-canvas");
};

VRify.setupCanvas = function() {
        var canvas = document.createElement("canvas");
	VRify.canvas = canvas;
      	canvas.id = "VRify-canvas";
        canvas.style.display = "None";
	document.body.append(canvas);

	canvas.innerHTML = " \
<a-scene id="VRify-a-scene">

</a-scene>"
}

