const Hoover = require('../src/Hoover.js');
const expect = require('chai').expect;


describe('Hoover', function () {
    describe('#move', function (){
        
        it('it increases y position by 1 when direction == N', function () {
            let hoover = new Hoover([0,0]);
            hoover.maxY = 5;
            hoover.move("N");
            expect(hoover.hooverPosition.y).to.equal(1);
        });

        it('y position should remain the same when direction == N by the boundary', function () {
            let hoover = new Hoover([0,5]);
            hoover.maxY = 5;
            hoover.move("N");
            expect(hoover.hooverPosition.y).to.equal(5);
        });

        it('it decreases y position by 1 when direction == S', function () {
            let hoover = new Hoover([5,5]);
            hoover.move("S");
            expect(hoover.hooverPosition.y).to.equal(4);
        });

        it('y position should remain the same when direction == S by the boundary', function () {
            let hoover = new Hoover([0,0]);
            hoover.move("S");
            expect(hoover.hooverPosition.y).to.equal(0);
        });

        it('it increases x position by 1 when direction == E', function () {
            let hoover = new Hoover([0,0]);
            hoover.maxX = 5;
            hoover.move("E");
            expect(hoover.hooverPosition.x).to.equal(1);
        });

        it('x position should remain the same when direction == E by the boundary', function () {
            let hoover = new Hoover([5,5]);
            hoover.maxY = 5;
            hoover.move("E");
            expect(hoover.hooverPosition.y).to.equal(5);
        });

        it('it decreases x position by 1 when direction == W', function () {
            let hoover = new Hoover([5,5]);
            hoover.move("W");
            expect(hoover.hooverPosition.x).to.equal(4);
        });

        it('x position should remain the same when direction == W by the boundary', function () {
            let hoover = new Hoover([0,0]);
            hoover.move("W");
            expect(hoover.hooverPosition.y).to.equal(0);
        });
    })
});