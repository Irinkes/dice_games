/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScore, activePlayer, dice, gamePlaying;
init();
function nextPlayer() {
	//next player
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		$('#current-0').text('0');
		$('#current-1').text('0');

		$('.player-0-panel').toggleClass('active');
		$('.player-1-panel').toggleClass('active');

		$('.dice').css('display', 'none');
}

$('.btn-new').click(init);

function init() {
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	$('.dice').css("display", "none");
	$('#score-0').text('0');
	$('#score-1').text('0');
	$('#current-0').text('0');
	$('#current-1').text ('0');
	$('#name-0').text('Player 1');
	$('#name-1').text('Player 2');
	$('.player-0-panel').removeClass('winner');
	$('.player-1-panel').removeClass('winner');
	$('.player-0-panel').removeClass('active');
	$('.player-1-panel').removeClass('active');
	$('.player-0-panel').addClass('active');
}

$('.btn-roll').click(function(){
	if (gamePlaying) {
		dicewhite = Math.floor(Math.random()*6) + 1;
        diceblack = Math.floor(Math.random()*6) + 1;

		var dicewhiteDOM = $('.dice-white');
		dicewhiteDOM.css('display', 'block');
		dicewhiteDOM.attr('src', "img/dice-"+dicewhite+".png");
        
        var diceblackDOM = $('.dice-black');
		diceblackDOM.css('display', 'block');
		diceblackDOM.attr('src', "img/diceblack-"+diceblack+".png");

		if(dicewhite !== 1 && diceblack !==1) {
			roundScore = roundScore+dicewhite-diceblack;
			$('#current-' + activePlayer).text(roundScore);
		}
		else {
			nextPlayer(); 
		}
	}

});
$('.btn-hold').click(function() {
	if (gamePlaying) {
		scores[activePlayer] += roundScore;
		$('#score-' + activePlayer).text(scores[activePlayer]);
		//check if player won the game
		if (scores[activePlayer] >=20) {
			$('#name-' + activePlayer).text('Winner!');
			$('.dice').css('display', 'none');
            $('.player-' + activePlayer + '-panel').addClass('winner');
			$('.player-' + activePlayer + '-panel').addClass('active');
			gamePlaying = false;
		}
		else {
			nextPlayer();
		}
	}

});