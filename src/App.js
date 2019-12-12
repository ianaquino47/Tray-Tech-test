const fs = require("fs");
const Room = require('./Room.js');
const Hoover = require('./Hoover.js');


//reads input.txt file
const data = fs.readFileSync('src/input.txt', 'utf8').split('\n');

//parses file data into required format
var i;
for (i = 0; i < data.length -1; i++) {
data[i] = data[i].split(" ").map(x => parseInt(x));
}

//initialize and assigns variables 
dimension = data[0];
position = data[1];
dirtData = data.slice(2,data.length-1)
dirtPosition = [];

//converts into coordinates for uniformity
dirtData.forEach(function(location){
    dirtPosition.push({x: location[0], y: location[1]});
});

instructions = data[data.length - 1]
                .split("");

//initialize instances of room and hoover
let room = new Room(dimension, dirtPosition)
let hoover = new Hoover(position, instructions)

//cleans the room
hoover.clean(room);

//outputs coordinates of hoover and number of patches cleaned up on STDOUT
console.log(`${hoover.hooverPosition.x} ${hoover.hooverPosition.y}`)
console.log(room.cleanedPatches.length);