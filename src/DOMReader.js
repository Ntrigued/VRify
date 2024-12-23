
export default {
	// Return list of elements, to be passed to getCardContent
	getElemsToDisplay: function(head_id, elems_list = []) {
		var head_elem = document.getElementById(head_id);

		// Traverse tree, creating pre-ordered list of references to relevant elements
		var content_tags = ['IMG', 'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'A'];
		if(content_tags.includes(head_elem.tagName)) {
			elems_list.push(head_elem);
		}
		for(var i = 0; i < head_elem.children.length; i++) {
			Array.prototype.push.apply(elems_list, this.getElemsToDisplay(head_elem.children[i].id));
		}
		return elems_list;
	},

	getVRContent: function(base_elem_id){
		var content_list = this.getCardContent(base_elem_id);
		return content_list;
	},

	getCards: function(content_list_or_base_elem, size = 2) {
		if(typeof(content_list_or_base_elem) == typeof("")){
				content_list_or_base_elem = getVRContent(base_elem_id);
		}
		return this.partitionToCards(content_list_or_base_elem, size);
	},

	// Meant to be called with the output of getCardContent
	partitionToCards: function(content_list, size=2) {
		var chars_per_card = 0;
		if(size == 0) chars_per_card = 125;
		else if(size == 1) chars_per_card = 250;
		else if(size == 2) chars_per_card = 500;
		else if(size == 3) chars_per_card = 750;
		else if(size == 4) chars_per_card = 1000;
		else if(typeof(size) == "number") chars_per_card = size;
		console.log(typeof(content_list));

		var leftover_chars = chars_per_card;
		var cards = [];
		content_list.forEach(function(content_item) {
			if(content_item["tag"] == "IMG") {
				cards.push(content_item);
				leftover_chars = chars_per_card;
			}
			else if(["A", "P"].includes(content_item["tag"])){
				var current_card = cards.pop();
				if(current_card == null) current_card = {"tag": "P", "text": ""};
				if(current_card["tag"] == "IMG"){
					cards.push(current_card);
					cards.push(content_item);
				} else if(content_item['text'].length <= leftover_chars){
					current_card['text'] += content_item['text'];
					cards.push(current_card);
					leftover_chars -= content_item['text'].length;
				} else {
					while(content_item['text'].length > leftover_chars){
						current_card['text'] += content_item['text'].substring(0, leftover_chars);
						cards.push(current_card);
						current_card = {"tag": "P", "text": ""};
						content_item = {"tag": "P", "text": content_item['text'].substring(leftover_chars)};
						leftover_chars = chars_per_card;
					}
					current_card["text"] += content_item["text"];
					leftover_chars -= content_item["text"].length;
					cards.push(current_card);
				}
			}
		});
		return cards;
	},

	getCardContent: function(base_elem_id) {
		var elems_list = this.getElemsToDisplay(base_elem_id);
		var content_list = []; // Content to be partitioned across panels
		elems_list.forEach(function(elem) {
				if(elem.tagName == "IMG")
						content_list.push({"tag": "IMG", "element": elem})
				else {
						var text_list = this.parseText(elem);
						Array.prototype.push.apply(content_list, text_list);
				}
		});
		return content_list;
	},

	parseText: function(text_elem) {
		var link_elems = []
		var children = text_elem.children;
		for(var i = 0; i < children.length; i++) {
				if(children[i].tagName == "A")
						link_elems.push({"tag": "A", "link": children[i]})
		}

		var text = text_elem.innerText;
		var text_list = [];
		link_elems.forEach(function(link_elem){
				var link_text = link_elem.innerText
				var ind = text.indexOf(link_text);
				var first_part = text.substring(0, ind);
				text_list.push({"tag": 'P', "text": first_part});
				text_list.push({"tag": 'A', "text": link_elem.innerText, "link": link_elem.href});
				text = text.substring(ind+link_elem.innerText.length, text.length);
		});
		if(text.length > 0) text_list.push({"tag": "P", "text": text});
		return text_list;
	}
};