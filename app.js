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
  for(var i=0; i<30; i++) {
    var row = 'row' + i;
    $('.board').append('<div class="row"></div>');
    $('div').last().addClass(row).css('display', 'block').css('height', '1.5rem').css('text-align', 'center');

    var $row = $('.'+row);
    var rowChild = '.' + row + ' div';

    for(var j=0; j<15; j++) {
      if (i % 2 === 0) {
        $row.css('margin-left', '0').append('<div></div>');
        $(rowChild).last().css('width', '2rem').css('height', '2rem').css('display', 'inline-block').css('margin', '1.5rem').append('<img id="tile" src="grass.png"/>');
        $('img').last().addClass((j*2)+','+i);

      } else {
        $row.css('margin-left', '5rem').append('<div></div>');
        $(rowChild).last().css('width', '2rem').css('height', '2rem').css('display', 'inline-block').css('margin', '1.5rem').append('<img id="tile" src="grass.png"/>');
        $('img').last().addClass( (j*2)+1+','+i);
      }
    }
  }
  $('img').css('width', '3rem').css('text-align', 'center').css('margin', '-.5rem 0 0 -.5rem');
  chooseFirstPlayer();
}

//randomly selects a starting player
function chooseFirstPlayer() {
  var randomNum = Math.floor(Math.random()*10)+1;
  if (randomNum <= 5) {
    turn = player1;
    movement = 10;
  } else if (randomNum >= 6) {
    turn = player2;
    movement = 8;
  }
  console.log(turn);
}

//used for ending a players turn
$('.endTurn').click(function() {
  if(turn === player1) {
    turn = player2;
    movement = 10;
  } else if(turn === player2) {
    turn = player1;
    movement = 8;
  }
});

//check for a valid first move
function firstMove(x, y) {
  if (turn === player1) {
    if (event.target.id === 'tile') {
      player1Start = 'true';

      if ($('#position1').length === 0) {
        if(x === 0 || x === 29 || y === 0 || y === 1 || y === 28 || y === 29) {
          console.log('valid starting move');
          coordinatesPlayer1 = $(event.target).attr('class').split(',');
          $(event.target).attr('src', turn + '_grass.png').attr('id', 'position1');
          turn = player2;
        } else {
          console.log('invalid starting move');
        }
      }
    }
  } else if (turn === player2) {
    if (event.target.id === 'tile') {
      player2Start = 'true';

      if ($('#position2').length === 0) {
        if(x === 0 || x === 29 || y === 0 || y === 1 || y === 28 || y === 29) {
          console.log('valid starting move');
          coordinatesPlayer2 = $(event.target).attr('class').split(',');
          $(event.target).attr('src', turn + '_grass.png').attr('id', 'position2');
          turn = player1;
        } else {
          console.log('invalid starting move');
        }
      }
    }
  }
}

var currentCoordinates;
var previousCoordinates;

function checkValidMove(x, y, coordinates, player) {

  //checks if move is upper left
  if (x === Number(coordinates[0]-1) && y === Number(coordinates[1]-1)) {
    $('#'+position).attr('src', 'grass.png').attr('id', 'tile');
    $(event.target).attr('src', turn + '_grass.png').attr('id', position);
    movement = movement - 1;
    console.log(movement + ' moves left');
    if (turn === player1) {
      coordinatesPlayer1 = $(event.target).attr('class').split(',');
    } else if(turn === player2) {
      coordinatesPlayer2 = $(event.target).attr('class').split(',');
    }

  //checks if move is lower right
  } else if(x === Number(coordinates[0])+1 && y === Number(coordinates[1])+1) {
    console.log('lower right');
    $('#' + position).attr('src', 'grass.png').attr('id', 'tile');
    $(event.target).attr('src', turn + '_grass.png').attr('id', position);
    movement = movement - 1;
    console.log(movement + ' moves left');
    if (turn === player1) {
      coordinatesPlayer1 = $(event.target).attr('class').split(',');
    } else if(turn === player2) {
      coordinatesPlayer2 = $(event.target).attr('class').split(',');
    }

  //checks if move is down
  } else if(x === Number(coordinates[0]) && y === Number(coordinates[1])+2) {
    console.log('down');
    $('#' + position).attr('src', 'grass.png').attr('id', 'tile');
    $(event.target).attr('src', turn + '_grass.png').attr('id', position);
    movement = movement - 1;
    console.log(movement + ' moves left');
    if (turn === player1) {
      coordinatesPlayer1 = $(event.target).attr('class').split(',');
    } else if(turn === player2) {
      coordinatesPlayer2 = $(event.target).attr('class').split(',');
    }

  //checks if move is up
  } else if(x === Number(coordinates[0]) && y === Number(coordinates[1]-2)) {
    console.log(x, Number(coordinates[0]), y, Number(coordinates[1]-2));
    console.log('up');
    $('#' + position).attr('src', 'grass.png').attr('id', 'tile');
    $(event.target).attr('src', turn + '_grass.png').attr('id', position);
    movement = movement - 1;
    console.log(movement + ' moves left');
    if (turn === player1) {
      coordinatesPlayer1 = $(event.target).attr('class').split(',');
    } else if(turn === player2) {
      coordinatesPlayer2 = $(event.target).attr('class').split(',');
    }

  //checks if move is upper right
  } else if(x === Number(coordinates[0])+1 && y === Number(coordinates[1]-1)) {
    console.log('upper right');
    $('#' + position).attr('src', 'grass.png').attr('id', 'tile');
    $(event.target).attr('src', turn + '_grass.png').attr('id', position);
    movement = movement - 1;
    console.log(movement + ' moves left');
    if (turn === player1) {
      coordinatesPlayer1 = $(event.target).attr('class').split(',');
    } else if(turn === player2) {
      coordinatesPlayer2 = $(event.target).attr('class').split(',');
    }

  //checks if move is lower left
  } else if(x === Number(coordinates[0]-1) && y === Number(coordinates[1])+1) {
    console.log('lower left');
    $('#' + position).attr('src', 'grass.png').attr('id', 'tile');
    $(event.target).attr('src', turn + '_grass.png').attr('id', position);
    movement = movement - 1;
    console.log(movement + ' moves left');
    if (turn === player1) {
      coordinatesPlayer1 = $(event.target).attr('class').split(',');
    } else if(turn === player2) {
      coordinatesPlayer2 = $(event.target).attr('class').split(',');
    }

  } else {
    console.log('invalid move');
  }
}


$(document).click(function(event)  {
  if (movement) {
    if (event.target.id === 'tile') {
      console.log($(event.target).attr('class'));

      var x = Number($(event.target).attr('class').split(',')[0]);
      var y = Number($(event.target).attr('class').split(',')[1]);
      var coordinates;
      var player;

      if (turn === player1) {
        coordinates = coordinatesPlayer1;
        player = coordinatesPlayer1;
        position = 'position1';

        if ($('#position1').length === 0 || $('#position2').length === 0) {
          console.log('player1 first move');
          firstMove(x, y);
        } else {
          checkValidMove(x, y, coordinates);
        }
      } else if (turn === player2) {
        coordinates = coordinatesPlayer2;
        player = coordinatesPlayer1;
        position = 'position2';

        if ($('#position2').length === 0) {
          console.log('player2 first move');
          firstMove(x, y);
        } else {
          checkValidMove(x, y, coordinates);
        }
      }
    }
  } else {
    console.log('no moves left');
  }
});



function attack() {
  if (turn === player1) {
    if (Number(coordinatesPlayer1[0]) === Number(coordinatesPlayer2[0]) && Number(coordinatesPlayer1[1]) === Number(coordinatesPlayer2[1])+2) {
      console.log('up attack');
    } else if (Number(coordinatesPlayer1[0]) === Number(coordinatesPlayer2[0]) && Number(coordinatesPlayer1[1]) === Number(coordinatesPlayer2[1])-2) {
      console.log('down attack');
    } else if (Number(coordinatesPlayer1[0]) === Number(coordinatesPlayer2[0])-1 && Number(coordinatesPlayer1[1]) === Number(coordinatesPlayer2[1])-1) {
      console.log('lower right attack');
    } else if (Number(coordinatesPlayer1[0]) === Number(coordinatesPlayer2[0])+1 && Number(coordinatesPlayer1[1]) === Number(coordinatesPlayer2[1])-1) {
      console.log('lower left attack');
    } else if (Number(coordinatesPlayer1[0]) === Number(coordinatesPlayer2[0])-1 && Number(coordinatesPlayer1[1]) === Number(coordinatesPlayer2[1])+1) {
      console.log('upper right attack');
    } else if (Number(coordinatesPlayer1[0]) === Number(coordinatesPlayer2[0])+1 && Number(coordinatesPlayer1[1]) === Number(coordinatesPlayer2[1])+1) {
      console.log('lower right attack');
    } else {
      console.log('no valid attack');
    }
  } else if (turn === player2) {
    
  }
}
