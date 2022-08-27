"use strict"
var sum = 0;
var limit = 1000;

for(let i=0; i<limit; i++)
{
    if(i%(3*5) == 0)
    {
        sum += i ;
    }
}

console.log(`The sum of multiple of 3 and 5 under 1000 is ${sum}`);