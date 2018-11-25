console.log("Up and running")

var cards = [
	{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png"
	},
	{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	rank: 'king',
	suit: 'hearts',
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank: 'king',
	suit: 'diamonds',
	cardImage: "images/king-of-diamonds.png"
	}
];

var myAddEventListener = function (eventType, func) {

}

var createBoard = function (){
	for (var i=0; i<cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		var eventType = 'click';
		var superDuperFlipCard = flipCard;
		cardElement.addEventListener(eventType, flipCard);
		document.getElementById("game-board").appendChild(cardElement);
	}
	delete flipCard;
}


var cardsInPlay=[];
var checkForMatch = function(cardElement){
	var cardID = cardElement.getAttribute("data-id");
	cardElement.setAttribute('src', cards[cardID].cardImage);
	
	if (cardsInPlay.length===1){
		;
	}
	else if(cardsInPlay.length===2 && cardsInPlay[0]===cardsInPlay[1]){
		alert("You found a match!");
	}
	else{
		alert("Sorry, try again.");
	}	
}


var flipCard = function(){
	// var this = <<<the element in question >>>
	var cardElement = this;
	var cardID = cardElement.getAttribute("data-id"); //The value of this is only not equal to the window when it is being called by the browser upon the click event. 
	cardsInPlay.push(cards[cardID].rank);
	console.log("User flipped " + cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
	checkForMatch(cardElement);
}

createBoard();