let board = ['', '', '', '', '','', '', '', ''];

const winState = [
  [0,1,2], [3,4,5], [6,7,8], // rows
  [0,3,6], [1,4,7], [2,5,8], // cols
  [0,4,8], [2,4,6]           // diagonals
];


let turn = 'X';
let option;
let gameOver = false;
let winner;
const boardEl = document.querySelector('.board');
const cells = document.querySelectorAll('.cell');
const texts = document.querySelectorAll('.text');
const statusEl = document.querySelector('.status');
const restartbtn = document.querySelector('.restart');
//GAME LOOP IG
boardEl.addEventListener('click', (e)=> {
  if (!e.target.classList.contains('cell') || gameOver === true) {return};
  if (board[e.target.id] === '') {
    board[e.target.id] = turn;
  }
  else{
    return
  }
  
  
  console.log(board)
  checkWinner(board);
  turn = turn === 'X' ? 'O' : 'X';
  render();
});

restartbtn.addEventListener('click', ()=>{
  restart();
})

  
function checkWinner(board){
  for (let i=0; i<8; i++){
    const [a, b, c] = winState[i];
    //WINNNNNN
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        winner = board[a];
        console.log(`WINNER: ${winner}`);
        gameOver = true;
        restartbtn.classList.remove('hidden');
      }
    }
}

function render() {
  let num = 0;
  
  texts.forEach(text => {
    text.textContent = board[num];
    num += 1;
  });
  if (gameOver){
    statusEl.textContent = `WINNER: ${winner}`;
  }
  else {
    statusEl.textContent = `Turn: ${turn}`;
  }
  
  
}

function restart(){
  board = ['', '', '', '', '','', '', '', ''];
  turn='X';
  option=null;
  winner=null;
  gameOver=false;
  restartbtn.classList.add('hidden');
  render();
}