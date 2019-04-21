// Caching Dom
const playerAmount = document.getElementById("playerAmount").firstChild;
const cardsMap = [
				[ "♣", ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"] ],
				[ "♥", ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"] ],
				[ "♦", ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"] ],
				[ "♠", ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"] ]
				];


// Methods
const getRandomCard = () => {
	let symbolCollection = cardsMap[Math.floor((Math.random() * cardsMap.length) + 1)];
	let number = symbolCollection[1][Math.floor((Math.random() * symbolCollection.length) + 1)]
	console.log(symbolCollection[0]);
	console.log(number);
}

// Main
// console.log(playerAmount.data);
playerAmount.data = prompt("\t\t\t     New game : \n\n Enter an amount number of money to start : \n\n");
getRandomCard();
// Events
