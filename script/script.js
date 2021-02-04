let arrayImg = ["./img/clubs.svg", "./img/spades.svg", "./img/diamonds.svg", "./img/hearts.svg"];
let arrayNumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "T"];
let arrayCentreFigure = ["./img/jack.svg", "./img/queen.svg", "./img/king.svg", "./img/clubs.svg", "./img/spades.svg", "./img/diamonds.svg", "./img/hearts.svg"];

arrayShirtCard = [];
for (let i = 0; i < arrayNumbers.length; i++) {
	for (let j = 0; j < arrayImg.length; j++) {
		let first = (`<span style="font-size:25px">${arrayNumbers[i]}</span>`);
		let second = (`<img src="${arrayImg[j]}"  height="15"/>`);
		arrayShirtCard.push([first, second].join(''));
	}
}

let arrayCreateCads = [];

for (i = 0; i < arrayShirtCard.length; i++) {
	if (i >= 0 && i < 36) {
		card = (`<div class="card"><div>${arrayShirtCard[i]}</div><div></div><div>${arrayShirtCard[i]}</div></div>`);
	}
	else if (i >= 36 && i < 40) {
		card = (`<div class="card"><div>${arrayShirtCard[i]}</div><div><img  class="picture_card" src="${arrayCentreFigure[0]}"></div><div>${arrayShirtCard[i]}</div></div>`);
	}
	else if (i >= 40 && i < 44) {
		card = (`<div class="card"><div>${arrayShirtCard[i]}</div><div><img class="picture_card" src="${arrayCentreFigure[1]}"></div><div>${arrayShirtCard[i]}</div></div>`);
	}
	else if (i >= 44 && i < 48) {
		card = (`<div class="card"><div>${arrayShirtCard[i]}</div><div><img class="picture_card" src="${arrayCentreFigure[2]}"></div><div>${arrayShirtCard[i]}</div></div>`);
	}
	else if (i == 48) {
		card = (`<div class="card"><div>${arrayShirtCard[i]}</div><div><img class="picture_card" src="${arrayCentreFigure[3]}"></div><div>${arrayShirtCard[i]}</div></div>`);
	}
	else if (i == 49) {
		card = (`<div class="card"><div>${arrayShirtCard[i]}</div><div><img class="picture_card" src="${arrayCentreFigure[4]}"></div><div>${arrayShirtCard[i]}</div></div>`);
	}
	else if (i == 50) {
		card = (`<div class="card"><div>${arrayShirtCard[i]}</div><div><img class="picture_card" src="${arrayCentreFigure[5]}"></div><div>${arrayShirtCard[i]}</div></div>`);
	}
	else if (i == 51) {
		card = (`<div class="card"><div>${arrayShirtCard[i]}</div><div><img class="picture_card" src="${arrayCentreFigure[6]}"></div><div>${arrayShirtCard[i]}</div></div>`);
	}
	arrayCreateCads.push(card);
}

arrayCreateCads.splice(48,0,`<div></div>`,`<div></div>`);

document.write(`<div class="cards">${arrayCreateCads.join('')}</div>`);





