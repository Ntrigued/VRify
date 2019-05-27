/*
Depends on:
	DOMReader.js
*/


VRify.setup = function() {
	VRify.setupScene();
	VRify.setupButtons();
};

VRify.ready = function(f){
	if(document.readyState == "complete") f();
	else {
		document.addEventListener("readystatechange", function(){
			if(document.readyState == "complete") f();
		})
	}
}
