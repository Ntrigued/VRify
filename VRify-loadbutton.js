/*
	Load enter #VRify-canvas when a VRify-button class element is clicked
*/

VRify.setupButtons = function(){
	VRify.buttons = document.getElementsByClassName("VRify-Button");
	for(var i = 0; i < VRify.buttons.length; i++) {
		var button = VRify.buttons[i];
		button.onclick = function() {
			console.log("clicked");
			document.getElementsByClassName("a-enter-vr-button")[0].click();
		};
	}
}
