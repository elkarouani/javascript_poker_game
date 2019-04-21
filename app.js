// Caching Dom
const playerAmount = document.getElementById("playerAmount").firstChild;
const playerFirstCardNumber = document.getElementById("playerFirstCardNumber").firstChild;
const playerFirstCardSymbol = document.getElementById("playerFirstCardSymbol").firstChild;
const playerSecondCardNumber = document.getElementById("playerSecondCardNumber").firstChild;
const playerSecondCardSymbol = document.getElementById("playerSecondCardSymbolr").firstChild;
const cardsMap = [
				[ "♣", ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"] ],
				[ "♥", ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"] ],
				[ "♦", ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"] ],
				[ "♠", ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"] ]
				];

// Methods
const getRandomCard = () => {
	let symbolCollection = cardsMap[Math.floor((Math.random() * cardsMap.length))];
	let number = symbolCollection[1][Math.floor((Math.random() * symbolCollection[1].length))]
	return new Array(number, symbolCollection[0]);
}

const game = () => {
	playerAmount.data = prompt("\t\t\t     New game : \n\n Enter an amount number of money to start : \n\n");
	let firstPlayerCard = getRandomCard();
	let secondPlayerCard = getRandomCard();
	playerFirstCardNumber.data = firstPlayerCard[0];
	playerFirstCardSymbol.data = firstPlayerCard[1];
	playerSecondCardNumber.data = secondPlayerCard[0];
	playerSecondCardSymbol.data = secondPlayerCard[1];
}

// Main
game();

// Events
