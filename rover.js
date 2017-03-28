/*var myRover = {
  position: [0,0],
  direction: 'N'
};

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

goForward(myRover);*/

//object(rover) with 2 properties: position and direction.
var myRover = {
  position: [0,0],
  direction: 'N'
};

//variables to store 10x10 grid
var initial_X = 0;
var initial_Y = 0;
var maximum_X = 9;
var maximum_Y = 9;

//variable with obstacles.
var obstacleLocations = [[3,5],[5,2],[7,8]];

//function to check if position has obstacle.
function isPositionValid(position0, position1){
  for(var i = 0; i < obstacleLocations.length; i++){
    if((obstacleLocations[i][0] === position0) && (obstacleLocations[i][1] === position1)){
      console.log("Warning! Obstacle on path when trying to move to position " + obstacleLocations[i]);
      return false;
    }
  }
}

//functions to move rover forward and back. Axis has been flipped so Rover starts from top. Globe perspective and obstacle check included.
function goForward(rover) {
  switch (rover.direction) {
    case 'N':
      if(isPositionValid(rover.position[0]--,rover.position[1])){
      rover.position[0]--;
        if(rover.position[0] < initial_Y) {
          rover.position[0] = maximum_Y;
        }
      }
      break;
    case 'E':
      if(isPositionValid(rover.position[1]++, rover.position[0])){
        rover.position[1]++;
          if(rover.position[1] > maximum_X) {
            rover.position[1] = initial_X;
          }
        }
      break;
    case 'S':
      if(isPositionValid(rover.position[0]++, rover.position[1])){
        rover.position[0]++;
          if(rover.position[0] > maximum_Y) {
            rover.position[0] = initial_Y;
            }
          }
          break;
    case 'W':
      if(isPositionValid(rover.position[1]--, rover.position[0])) {
      rover.position[1]--;
        if(rover.position[1] < initial_X) {
          rover.position[1] = maximum_X;
            }
          }
          break;
  }
}

function goBack(rover) {
  switch (rover.direction) {
  case 'N':
    if(isPositionValid(rover.position[0]++, rover.position[1])) {
      rover.position[0]++;
        if(rover.position[0] > maximum_Y) {
          rover.position[0] = initial_Y;
          }
      }
      break;
    case 'E':
      if(isPositionValid(rover.position[1]--, rover.position[0])) {
        rover.position[1]--;
          if(rover.position[1] < initial_X) {
            rover.position[1] = maximum_X;
          }
        }
      break;
    case 'S':
      if(isPositionValid(rover.position[0]--, rover.position[1])) {
        rover.position[0]--;
          if(rover.position[0] < initial_Y) {
            rover.position[0] = maximum_Y;
            }
          }
      break;
    case 'W':
    if(isPositionValid(rover.position[1]++, rover.position[0])) {
      rover.position[1]++;
        if(rover.position[1] > maximum_X) {
          rover.position[1] = initial_X;
        }
      }
      break;
  }
}

//functions to change direction of rover left or right
function turnRight(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction= 'E';
      break;
    case 'E':
      rover.direction= 'S';
      break;
    case 'S':
      rover.direction= 'W';
      break;
    case 'W':
    rover.direction= 'N';
    break;
  }
}

function turnLeft(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction= 'W';
      break;
    case 'E':
      rover.direction= 'N';
      break;
    case 'S':
      rover.direction= 'E';
      break;
    case 'W':
    rover.direction= 'S';
    break;
  }
}


//Iteration 1 - call functions. Same sequence used in string of commands
turnRight(myRover);
goForward(myRover);
goForward(myRover);
turnRight(myRover);
goForward(myRover);

console.log(myRover.position);
console.log(myRover.direction);

goForward(myRover);
goForward(myRover);
goForward(myRover);
turnLeft(myRover);

console.log(myRover.position);
console.log(myRover.direction);

goBack(myRover);
turnLeft(myRover);
goBack(myRover);
turnLeft(myRover);

console.log(myRover.position);
console.log(myRover.direction);

goBack(myRover);
goBack(myRover);
goBack(myRover);
turnRight(myRover);

console.log(myRover.position);
console.log(myRover.direction);


goForward(myRover);
goForward(myRover);
turnRight(myRover);
goForward(myRover);

console.log(myRover.position);
console.log(myRover.direction);

//Iteration 2: function to allow stringOfCommands
function controlRoverMovement(rover, stringOfCommands) {
  for(var i = 0; i < stringOfCommands.length; i++) {
    switch (stringOfCommands[i]) {
      case 'f':
        goForward(rover);
        break;
      case 'b':
        goBack(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
    }
  }
}

controlRoverMovement(myRover, 'rffrffffflblblbbbrffrf');

console.log(myRover.position);
console.log(myRover.direction);


//Iteration 2: function to allow stringOfCommands
function controlRoverMovement(rover, stringOfCommands) {
  for(var i = 0; i < stringOfCommands.length; i++) {
    switch (stringOfCommands[i]) {
      case 'f':
        goForward(rover);
        break;
      case 'b':
        goBack(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      case 'l':
        turnLeft(rover);
        break;
    }
  }
}

controlRoverMovement(myRover, 'rffrffffflblblbbbrffrf');
