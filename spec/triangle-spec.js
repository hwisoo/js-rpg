import { Triangle } from './../src/triangle.js';
describe('Triangle', function() {

  var reusableTriangle;

  beforeEach(function() {
    reusableTriangle = new Triangle(5, 5, 3);
  });

  it('should show how beforeEach() works', function() {
    console.log(reusableTriangle);
  });

  it('should test whether a Triangle has three sides', function() {

    expect(reusableTriangle.side1).toEqual(5);
    expect(reusableTriangle.side2).toEqual(5);
    expect(reusableTriangle.side3).toEqual(3);
  });

  it('should correctly determine whether three lengths can be made into a triangle', function() {
    var notTriangle = new Triangle(3,9,22);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });

  it('should return isoceles', function() {
    expect(reusableTriangle.isIsosceles()).toEqual("this is isosceles");
  })

  it('should test whether a triangle is a scalene triangle', function() {
    var scaleneTriangle = new Triangle(9, 13, 14);
    expect(scaleneTriangle.isScalene()).toEqual("this is a scalene triangle");
  })

});

