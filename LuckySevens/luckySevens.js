/*function to roll the dice with random result from 1 to 6*/
function rollDice() 
{
	var sides = 6;
	return Math.floor(Math.random() * sides) + 1;
}
/*function called to be played when either play or play again is selected*/
function play()
{
	/*create variables in order to count and roll dice*/
	var firstBet = Number(document.forms["luckySevens"]["bet"].value);
	var money = firstBet;
	var diceOne;
 	var diceTwo;
	var sum;
	var winnings = 0;
	var rolls = 0;
	var Maxrolls = 0;
	
	/*if the money is 0 send an alert bet needs to be >0*/
	if(money<=0)
	{
		alert("Your bet must be greater than 0 to play the game");
	}
	
	/*otherwise play the game*/
	else
	{
		while(money > 0)
		{
			/*when play is selected and money is more than 0, roll two dice*/
			diceOne = rollDice();
			diceTwo = rollDice();
			
			/*sum the values of the two dice to see if a winner*/
			sum = diceOne + diceTwo;
			
			/*add to the rolls count*/
			rolls++;
			
			/*if the sum is a winner/loser add/subtract to the current money*/
			if(sum==7)
			{
				money+=4;
				
				/*keep track of the number of rolls to the highest winnings*/
				if(money > winnings)
				{
					winnings = winnings+(money-winnings);
					
					/*count rolls at highest*/
					Maxrolls = rolls;
				}
			}
			else
			{
				/*subtract 1 from the money */
				money --;
			}
		}
	}
	
	/*return the values we want to display*/
	document.getElementById("results").style.display = "block";
	document.getElementById("startingBet").innerText  = "$"+firstBet.toFixed(2);
	document.getElementById("totalrollsResult").innerText  = rolls;
	document.getElementById("highestamountResult").innerText  = "$"+winnings.toFixed(2);
	document.getElementById("countathighestamountResult").innerText  = Maxrolls;
	document.getElementById("playButton").innerText = "Play Again?";
	
	return false;
}
