var scores, roundScore, activePlayer, dice, gamePlaying;
init();
function nextPlayer() {
	//next player
    if(gamePlaying) {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;	

		$('.player-0-panel').toggleClass('active');
		$('.player-1-panel').toggleClass('active');
    }
//		$('.dice-white').css('display', 'none');
//        $('.dice-black').css('display', 'none');
}

$('.btn-new').click(init);

function init() {
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	$('.dice-white').css("display", "none");
    $('.dice-black').css("display", "none");
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

		var dicewhiteDOM = $('.active .dice-white');
		dicewhiteDOM.css('display', 'block');
		dicewhiteDOM.attr('src', "img/dice-"+dicewhite+".png");
        
        var diceblackDOM = $('.active .dice-black');
		diceblackDOM.css('display', 'block');
		diceblackDOM.attr('src', "img/diceblack-"+diceblack+".png");
        
        
        if(dicewhite === 6 && diceblack===6) {
			roundScore = roundScore+25;
            scores[activePlayer] += roundScore;
			$('#score-' + activePlayer).text(scores[activePlayer]);
            isWinner();
            nextPlayer(); 
		}
        else if (dicewhite === 3 && diceblack===3) {
            roundScore = 0;
			scores[activePlayer] = 0;
			$('#score-' + activePlayer).text(scores[activePlayer]);
            isWinner();
            nextPlayer(); 
            
        }
        else if(dicewhite === 1 && diceblack===1 || dicewhite === 2 && diceblack===2 || dicewhite === 4 && diceblack===4 || dicewhite === 5 && diceblack===5) {
            roundScore = roundScore+5;
            scores[activePlayer] += roundScore;
			$('#score-' + activePlayer).text(scores[activePlayer]);
            isWinner();
            nextPlayer(); 
            
        }
		else if (dicewhite!==diceblack){
            
            roundScore = roundScore+0;
            scores[activePlayer] += roundScore;
            isWinner();
			nextPlayer(); 
           
		}  
             
	}

});
function isWinner() {
    if (scores[activePlayer] >=50) {
			$('#name-' + activePlayer).text('Winner!');
			$('.dice').css('display', 'none');
            $('.player-' + activePlayer + '-panel').addClass('winner');
			//$('.player-' + activePlayer + '-panel').addClass('active');
			gamePlaying = false;
		}
}
//$('.btn-hold').click(function() {
//	if (gamePlaying) {
//		scores[activePlayer] += roundScore;
//		$('#score-' + activePlayer).text(scores[activePlayer]);
//		//check if player won the game
//		if (scores[activePlayer] >=50) {
//			$('#name-' + activePlayer).text('Winner!');
//			$('.dice').css('display', 'none');
//            $('.player-' + activePlayer + '-panel').addClass('winner');
//			$('.player-' + activePlayer + '-panel').addClass('active');
//			gamePlaying = false;
//		}
//		else {
//			nextPlayer();
//		}
//	}
//
//});