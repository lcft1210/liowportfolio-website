let score=JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    losses:0,
    ties:0
};
            
updateScoreElement(); // Initial call to display score
            
function displayPlayerMove(playerMove){
    const computerMove=displayComputerMove();

    let result='';

    if(playerMove==='Rock'){
        if(computerMove==='rock'){
             result='Tie.';
        }
        else if(computerMove==='paper'){
            result='You lose.';
        }
        else if(computerMove==='scissors'){
            result='You win.';
        }
    }
                
    if(playerMove==='Paper'){
        if(computerMove==='rock'){
            result='You win.';
        }
        else if(computerMove==='paper'){
            result='Tie.';
        }
        else if(computerMove==='scissors'){
            result='You lose.';
         }
    }

    if(playerMove==='Scissors'){
        if(computerMove==='rock'){
            result='You lose.';
        }
        else if(computerMove==='paper'){
            result='You win.';
        }
        else if(computerMove==='scissors'){
            result='Tie.';
        }
    }

    if(result==='You win.'){
        score.wins+=1;
    }
    else if(result==='You lose.'){
        score.losses+=1;
    }
    else if(result==='Tie.'){
        score.ties+=1;
    }

    localStorage.setItem('score', JSON.stringify(score)); //Turn object to string

    updateScoreElement(); // Update score display after each game

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You <img src= "${playerMove}-emoji.png" class="move-icon"> - 
    <img src="${computerMove}-emoji.png" class="move-icon"> Computer`;
}

function updateScoreElement(){
    document.querySelector('.js-button').innerHTML = `Wins:${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}


function displayComputerMove(){
    const randomNum=Math.random();

    let computerMove='';

    if(randomNum>0&&randomNum<1/3){
        computerMove='rock';
    }
    else if(randomNum>1/3&&randomNum<2/3){
        computerMove='paper';
    }
    else if(randomNum>2/3&&randomNum<1){
        computerMove='scissors';
    }
    return computerMove;
}