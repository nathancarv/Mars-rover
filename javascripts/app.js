// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "E";
    case "E":
    rover.direction = "N";
    break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N":
    rover.direction = "E";
    break;
    case "E": 
    rover.direction = "S";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "W":
    rover.direction = "N"
  }
}
function moveForward(rover){
  console.log("moveForward was called")
  if(rover.direction === "N" && rover.y > 0){
    rover.y += -1;
  }
  else if(rover.direction === "E" && rover.x < 10){
    rover.x +=1;
  }
  else if(rover.direction === "S" && rover.y < 10){
    rover.y +=1;
  }
  else if(rover.direction === "W" && rover.x > 0){
    rover.x += -1;
  }
  else{
    console.log ("out of bounds")
  }
}
function command(str){
  for(var i = 0; i < str.length; i++){
    switch (str[i]){
      case "f": 
      moveForward();
      break;
      case "r":
      turnRight();
      break;
      case "l":
      turnLeft();
      break;
    }
  }
}
