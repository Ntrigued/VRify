class Panel {
	cards;
	coordinates;
	ID;


	constructor(cards = [], coordinates = [0, 0, 0]) {
		this.cards = cards;
		this.coordinates = coordinates;
		this.ID = "panel_" + Date.now();
	}

	getID() {
		return this.ID;
	}

	getCards() {
		return this.cards;
	}

	setCards(cards){
		this.cards = cards;
	}

	setCoordinates(x, y, z) {
		this.coordinates[0] = x;
		this.coordinates[1] = y;
		this.coordinates[2] = z;
	}
};


/*
	Create and add a panel to #VRify-a-scene
	returns: id of the panel
*/
export function addPanel(cards, coordinates) {
	var panel = new VRify.Panel(cards, coordinates);

	var ascene = document.getElementById("VRify-a-scene");
//	var panel_elem = document.createElement("");
}
