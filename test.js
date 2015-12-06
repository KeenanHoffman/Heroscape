//the coordinates for player 1
var coordinatesPlayer1 = [];
//the coordinates for player 2
var coordinatesPlayer2 = [];
//tracks if player 1 has started
var player1Start;
//tracks if player 2 has started
var player2Start;
//used for setting the position ids for player 1 and 2
var position;
//tracks which players turn it is
var turn;
//how far a player can move
var movement;

//strings
var player1 = 'player1';
var player2 = 'player2';

//sets up the game board
$(document).ready(createGrid);
function createGrid() {
  for(var r=0; r<30; r++) {
    var row = 'row' + r;
    $('.board').append('<div class="row"></div>');
    $('div').last().addClass(row).css('display', 'block').css('height', '1.5rem').css('text-align', 'center');
    var $row = $('.'+row);
    var rowChild = '.' + row + ' div';
    //console.log(rowChild);
    for(var i=0; i<15; i++) {
      //if i is even
      if (r%2 === 0) {
        $row.css('margin-left', '0').append('<div></div>');
        $(rowChild).last().css('width', '2rem').css('height', '2rem').css('display', 'inline-block').css('margin', '1.5rem').append('<img id="tile" src="grass.png"/>');
        y = r/2;
        x = i*2;
        xyz = cubeGrid(x, y);
        $('img').last().attr('data', xyz);
        console.log(xyz);
      //if i is odd
      } else {
        $row.css('margin-left', '5rem').append('<div></div>');
        $(rowChild).last().css('width', '2rem').css('height', '2rem').css('display', 'inline-block').css('margin', '1.5rem').append('<img id="tile" src="grass.png"/>');
        y = (r-1)/2;
        x = i*2+1;
        xyz = cubeGrid(x, y);
        $('img').last().attr('data', xyz);
        console.log(xyz);
      }
    }
  }
  $('img').css('width', '3rem').css('text-align', 'center').css('margin', '-.5rem 0 0 -.5rem');
  chooseFirstPlayer();
}
function cubeGrid(col, row) {
  var x = col;
  var z = row - (col - (col&1)) / 2;
  var y = -x-z;
  return [x,y,z];
}
