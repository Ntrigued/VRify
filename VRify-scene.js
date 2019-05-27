VRify.setSceneContent = function(cards){
	var scene = document.getElementById("VRify-Scene");
};

VRify.setupScene = function() {
	VRify.scene = document.createElement("a-scene");
	VRify.scene.id = "VRify-Scene";
	VRify.scene.style.display = "none";
	document.body.appendChild(VRify.scene);
	console.log(document.getElementById("VRify-Scene"));
	VRify.scene.setAttribute("environment", "preset: tron");
};
