// Caching Dom
const playerAmount = document.getElementById("playerAmount").firstChild;
const playerFirstCardNumber = document.getElementById("playerFirstCardNumber").firstChild;
const playerFirstCardSymbol = document.getElementById("playerFirstCardSymbol").firstChild;
const playerSecondCardNumber = document.getElementById("playerSecondCardNumber").firstChild;
const playerSecondCardSymbol = document.getElementById("playerSecondCardSymbolr").firstChild;
const tableFirstCardNumber = document.getElementById("tableFirstCardNumber").firstChild;
const tableFirstCardSymbol = document.getElementById("tableFirstCardSymbol").firstChild;
const tableSecondCardNumber = document.getElementById("tableSecondCardNumber").firstChild;
const tableSecondCardSymbol = document.getElementById("tableSecondCardSymbol").firstChild;
const tableThirdCardNumber = document.getElementById("tableThirdCardNumber").firstChild;
const tableThirdCardSymbol = document.getElementById("tableThirdCardSymbol").firstChild;
const tableFourthCardNumber = document.getElementById("tableFourthCardNumber").firstChild;
const tableFourthCardSymbol = document.getElementById("tableFourthCardSymbol").firstChild;
const tableFifthCardNumber = document.getElementById("tableFifthCardNumber").firstChild;
const tableFifthCardSymbol = document.getElementById("tableFifthCardSymbol").firstChild;

const Call = document.getElementById("Call");
const Raise = document.getElementById("Raise");
const pot = document.getElementById("pot").firstChild;

const cardsMap = [
				[ "♣", ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"] ],
				[ "♥", ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"] ],
				[ "♦", ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"] ],
				[ "♠", ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"] ]
				];
const playerCards = [];

// Methods
const getRandomCard = () => {
	let symbolCollection = cardsMap[Math.floor((Math.random() * cardsMap.length))];
	let number = symbolCollection[1][Math.floor((Math.random() * symbolCollection[1].length))]
	return new Array(number, symbolCollection[0]);
}

const generateTableCards = () => {
	let firstTableCard = getRandomCard();
	let secondTableCard = getRandomCard();
	let thirdTableCard = getRandomCard();

	do {
		if(JSON.stringify(firstTableCard)!=JSON.stringify(secondTableCard) &&
			JSON.stringify(firstTableCard)!=JSON.stringify(thirdTableCard) &&
			JSON.stringify(secondTableCard)!=JSON.stringify(thirdTableCard)) {
			tableFirstCardNumber.data = firstTableCard[0];
			tableFirstCardSymbol.data = firstTableCard[1];
			tableSecondCardNumber.data = secondTableCard[0];
			tableSecondCardSymbol.data = secondTableCard[1];
			tableThirdCardNumber.data = thirdTableCard[0];
			tableThirdCardSymbol.data = thirdTableCard[1];
		} else {firstPlayerCard = getRandomCard();secondPlayerCard = getRandomCard();}

	} while (JSON.stringify(firstTableCard)==JSON.stringify(secondTableCard) &&
			JSON.stringify(firstTableCard)==JSON.stringify(thirdTableCard) &&
			JSON.stringify(secondTableCard)==JSON.stringify(thirdTableCard))
}

const playerGetCards = () => {
	let firstPlayerCard = getRandomCard();
	let secondPlayerCard = getRandomCard();
	do {
		if(JSON.stringify(firstPlayerCard)!=JSON.stringify(secondPlayerCard)) {
			playerFirstCardNumber.data = firstPlayerCard[0];
			playerFirstCardSymbol.data = firstPlayerCard[1];
			playerSecondCardNumber.data = secondPlayerCard[0];
			playerSecondCardSymbol.data = secondPlayerCard[1];
		} else {firstPlayerCard = getRandomCard();secondPlayerCard = getRandomCard();}

	} while (JSON.stringify(firstPlayerCard)==JSON.stringify(secondPlayerCard))
}

/*const appearNextCard = () => {
	let fourthTableCard = getRandomCard();


}
*/
const game = () => {
	playerAmount.data = prompt("\t\t\t     New game : \n\n Enter an amount number of money to start : \n\n");
	playerGetCards();
	generateTableCards();
}

// Main
game();

// Events
Call.addEventListener("click", (event)=>{
	pot.data = parseInt(pot.data) + parseInt(playerAmount.data) * 1/20 ;
	playerAmount.data = parseInt(playerAmount.data) - parseInt(playerAmount.data) * 1/20 ;
	// appearNextCard();
})