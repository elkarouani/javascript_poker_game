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
let playerCards = [];
let tableCards = [];

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

			tableCards = {
							'first_card': {'number': firstTableCard[0], 'symbol': firstTableCard[1]},
							'second_card': {'number': secondTableCard[0], 'symbol': secondTableCard[1]},
							'third_card': {'number': thirdTableCard[0], 'symbol': thirdTableCard[1]}
						}

			let {first_card, second_card, third_card} = tableCards;

			tableFirstCardNumber.data = first_card.number;
			tableFirstCardSymbol.data = first_card.symbol;
			tableSecondCardNumber.data = second_card.number;
			tableSecondCardSymbol.data = second_card.symbol;
			tableThirdCardNumber.data = third_card.number;
			tableThirdCardSymbol.data = third_card.symbol;
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
			playerCards = {'first_card': {'number': firstPlayerCard[0],'symbol': firstPlayerCard[1]},'second_card': {'number': secondPlayerCard[0],'symbol': secondPlayerCard[1]}};
			
			let {first_card, second_card} = playerCards;
			playerFirstCardNumber.data = first_card.number;
			playerFirstCardSymbol.data = first_card.symbol;
			playerSecondCardNumber.data = second_card.number;
			playerSecondCardSymbol.data = second_card.symbol;

		} else {firstPlayerCard = getRandomCard();secondPlayerCard = getRandomCard();}

	} while (JSON.stringify(firstPlayerCard)==JSON.stringify(secondPlayerCard))
}

const appearNextCard = () => {
	let card_doesnt_exist_on_table = true;
	let fourthTableCard = [];
	do {
		fourthTableCard = getRandomCard();
		Object.keys(tableCards).forEach(function(rank) {
			let {number, symbol} = tableCards[rank];
			if(fourthTableCard[0] == number && fourthTableCard[1] == symbol){
				card_doesnt_exist_on_table = false;
			}
		});
	} while (!card_doesnt_exist_on_table)

	if(card_doesnt_exist_on_table){
		tableCards = {...tableCards, 'fourth_card':{'number': fourthTableCard[0],'symbol': fourthTableCard[1]}}
		tableFourthCardNumber.data = fourthTableCard[0];
		tableFourthCardSymbol.data = fourthTableCard[1];
	}
}

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
	appearNextCard();
})