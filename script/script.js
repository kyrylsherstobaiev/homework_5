let arrayCardSuit = ["./img/clubs.svg", "./img/spades.svg", "./img/diamonds.svg", "./img/hearts.svg"];
let arrayCardSuitPict = ["J", "D", "K"];
let arrayFigure = ["./img/jack.svg", "./img/queen.svg", "./img/king.svg"];
let arrayCardDeck = [];

function writeCard(elem1, elem2, elem3) {
	let card = (`<div class="card">
		<div>${elem1}${elem2}</div>
		<div>${elem3}</div>
		<div>${elem1}${elem2}</div>
		</div>`);
	arrayCardDeck.push(card);
}

for (let i = 2; i <= 10; i++) {
	for (let j = 0; j < arrayCardSuit.length; j++) {
		let first = (`<span style="font-size:25px">${i}</span>`);
		let second = (`<img src="${arrayCardSuit[j]}"  height="15"/>`);
		let middle = ('');
		writeCard(first, second, middle);
	}
}

for (let i = 0; i < arrayCardSuitPict.length; i++) {
	for (j = 0; j < arrayCardSuit.length; j++) {
		let first = (`<span style="font-size:25px">${arrayCardSuitPict[i]}</span>`);
		let second = (`<img src="${arrayCardSuit[j]}"  height="15"/>`);
		let middle = (`<img class="picture_card" src="${arrayFigure[i]}"/>`)
		writeCard(first, second, middle);
	}
}

for (let i = 0; i < arrayCardSuit.length; i++) {
	let first = (`<span style="font-size:25px">T</span>`);
	let second = (`<img src="${arrayCardSuit[i]}"  height="15"/>`)
	let middle = (`<img class="picture_card" src="${arrayCardSuit[i]}"/>`);
	writeCard(first, second, middle);
}

arrayCardDeck.splice(48, 0, `<div></div>`, `<div></div>`);

document.write(`<div class="cards">${arrayCardDeck.join('')}</div>`);





