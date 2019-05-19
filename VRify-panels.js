VRify.Panel = function(cards = [], coordinates = [0, 0, 0]){
	this.cards = cards;
	this.coordinates = coordinates;
	this.ID = "panel_" + Date.now();

	this.getCards = function(){ return this.cards; }

	this.getCoordinates = function(){ return this.coordinates; }

	this.getID = function(){ return this.ID; }

	this.setCards = function(cards){
		this.cards = cards;
	}

	this.setCoordinates = function(x, y, z){
		this.coordinates[0] = x;
		this.coordinates[1] = y;
		this.coordinates[2] = z;
	}
}

/*
	Create and add a panel to #VRify-a-scene
	returns: id of the panel
*/
VRify.addPanel = function(cards, coordinates) {
	var panel = new VRify.Panel(cards, coordinates);

	var ascene = document.getElementById("VRify-a-scene");
//	var panel_elem = document.createElement("");
}
