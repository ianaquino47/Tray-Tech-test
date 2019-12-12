class Room { 
    constructor(room_dimension, dirt_position) {
        this.dimension = room_dimension;
        this.dirtPatches = dirt_position;
        this.cleanedPatches = [];
    }

    //records locations of patches cleaned up by hoover
    cleanPatch(patch) {
        this.cleanedPatches.push(patch);
    }
}

module.exports = Room;

