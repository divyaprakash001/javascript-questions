"use strict"

var grade = '0';  //initializing grade  

// calling function
findTheGrade(99);

// creating a function
// check condition using if else ladder
// check grade using switch statement
// assuming the marks not more than 100

function findTheGrade(marks) {

    if (marks > 90 && marks <= 100) {
        grade = 'S';
    }
    else if (marks > 80 && marks <= 90) {
        grade = 'A';
    }
    else if (marks > 70 && marks <= 80) {
        grade = 'B';
    }
    else if (marks > 60 && marks <= 70) {
        grade = 'C';
    }
    else if (marks > 50 && marks <= 60) {
        grade = 'D';
    }
    else if (marks > 40 && marks <= 50) {
        grade = 'E';
    }
    else if (marks >= 0 && marks <= 40) {
        grade = 'F';
    }
    else {
        grade = '0';
    }


    switch (grade) {
        case 'S':
            console.log("S grade");
            break;
        case 'A':
            console.log("A grade");
            break;
        case 'B':
            console.log("B grade");
            break;
        case 'C':
            console.log("C grade");
            break;
        case 'D':
            console.log("D grade");
            break;
        case 'E':
            console.log("E grade");
            break;
        case 'F':
            console.log("Failed!!!");
            break;
        case '0':
            console.log("Invalid marks");
            break;

    }
}