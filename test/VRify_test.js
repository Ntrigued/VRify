VRify.ready(function(){
	var content_list = VRify.getVRContent("top");
	var cards = VRify.getCards(content_list, 4);
	console.log(cards);
	cards.forEach(function(card){
		console.log(card['text'].length);
	});

	VRify.setup();
});
