let arrayCardSuit = ["clubs", "spades", "diamonds", "hearts"];
let arrayCardSuitPict = ["J", "D", "K"];
let arrayFigure = ["jack", "queen", "king"];
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
		let second = (`<img src="./img/Suits/${arrayCardSuit[j]}.svg"  height="15"/>`);
		writeCard(first, second, '');
	}
}

for (let i = 0; i < arrayCardSuitPict.length; i++) {
	for (j = 0; j < arrayCardSuit.length; j++) {
		let first = (`<span style="font-size:25px">${arrayCardSuitPict[i]}</span>`);
		let second = (`<img src="./img/Suits/${arrayCardSuit[j]}.svg"  height="15"/>`);
		let middle = (`<img class="picture_card" src="./img/Figure/${arrayFigure[i]}.svg"/>`)
		writeCard(first, second, middle);
	}
}

for (let i = 0; i < arrayCardSuit.length; i++) {
	let first = (`<span style="font-size:25px">T</span>`);
	let second = (`<img src="./img/Suits/${arrayCardSuit[i]}.svg"  height="15"/>`)
	let middle = (`<img class="picture_card" src="./img/Suits/${arrayCardSuit[i]}.svg"/>`);
	writeCard(first, second, middle);
}

arrayCardDeck.splice(48, 0, `<div></div>`, `<div></div>`);

document.write(`<div class="cards">${arrayCardDeck.join('')}</div>`);





