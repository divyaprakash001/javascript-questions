"use strict";
// creating a function to check the type of given triangle.
function checkTheTriangle(side1, side2, side3) {

    if (side1 == side2 && side2 == side3) {
        console.log("Equilater Triangle!!!.");
    }
    else if (side1 == side2 && side1 != side3 || side1 == side3 && side1 != side2 || side2 == side3 && side2 != side1) {
        console.log("Isosceles triangle!!!");
    } else {
        console.log("Scalane triangle!!!");
    }
} 
// calling the function
checkTheTriangle(10,20,30);