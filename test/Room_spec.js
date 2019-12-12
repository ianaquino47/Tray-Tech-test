const Room = require('../src/Room.js');
let assert = require('chai').assert;

describe('Room', function () {
    describe('#cleanPatch', function (){
        let room = new Room();
        let dirtyPatch = {x: 2, y:5}

        it('it should add coordinates to cleanedPatches array', function () {
            room.cleanPatch(dirtyPatch);
            assert.isNotEmpty(room.cleanedPatches);
        });
    })
});