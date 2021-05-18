var restart = document.querySelector('#b');
var squares = document.querySelectorAll('td');

function clearBoard() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = '';
  }
}

restart.addEventListener('click',clearBoard);

for (var i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click',function() {


    if (this.textContent === '') {
      i++;
      if (i % 2 === 0) {
        this.textContent = 'X';
      }
      else {
        this.textContent = 'O';
      }
    }
  })
}
