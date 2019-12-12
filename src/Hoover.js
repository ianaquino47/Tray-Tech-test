const Room = require('./Room.js');

class Hoover {
    constructor(position, instructions){
        this.hooverPosition = {x: position[0], y: position[1]};
        this.hooverInstructions = instructions;
        
    }

    clean(room){
        this.maxX = room.dimension[0];
        this.maxY = room.dimension[1];

        this.startTask(room);
    }

    //updates current hoover position
    move(direction) {
        if (direction == "N" && this.hooverPosition.y < this.maxY ){
            this.hooverPosition.y += 1;
        } else if (direction == "S" && this.hooverPosition.y > 0) {
            this.hooverPosition.y -= 1;
        } else if (direction == "E" && this.hooverPosition.x < this.maxX) {
            this.hooverPosition.x += 1;
        } else if (direction == "W" && this.hooverPosition.x > 0) {
            this.hooverPosition.x -= 1;
        } else {
            console.log("Invalid direction");
        }
    }

    //starts following instructions given
    startTask(room) {
        (this.hooverInstructions).forEach((direction) => {
            this.move(direction);
            let position = {x: this.hooverPosition.x, y: this.hooverPosition.y};
            
            //checks if hoover is in a patch of dirt and records it
            if(JSON.stringify(room.dirtPatches).includes(JSON.stringify(position))) {
                if(!JSON.stringify(room.cleanedPatches).includes(JSON.stringify(position))) {
                  room.cleanPatch(position)
                };
            };
        });
    };
}

module.exports = Hoover;




