// function max(num1,num2){
//     if(num1>num2){
//         return num1;
//     }
//     else if(num2>num1){
//         return num2;
//     }
//     else{
//         return num1;
//     }
//     // return (num1>num2) ? num1: num2  easy method
// }

// let firstNum = 20;
// let secondNum = 20;
// console.log(max(firstNum,secondNum));


// // portrait

// function isLandscape(width,height){
//     return (width>height);
// }

// // FizzBzz
// function fizzBuzz(input){
//     if(typeof input!== 'number'){
//         return NaN;
//     }
//     if((input % 3 === 0) && (input % 5 === 0)){
//         return 'FizzBuzz';
//     }
//     if(input%5===0){
//         return 'Buzz';
//     }
//     if(input %3 === 0 ){
//        return 'Fizz'
//     }
//     return input;
    
// }

// const output = fizzBuzz(30);
// console.log(output);


// Speed Limit
// checkSpeed(100);

// function checkSpeed(speed){
//     const speedLimit = 70;
//     const kmPerPoint = 5;
//     if(speed < speedLimit + kmPerPoint){
//         console.log('Ok');
//         return;
//     }
//         let crossed = speed - speedLimit;
//         let points = Math.floor(crossed/5);
//         if ( points > 12){
//             console.log('License Suspended');
//         }
//         else{
//             console.log('Point:' + points);
//         }

// }

// odd even number

// function showNumbers(limit){
//     for(let i = 0; i<=limit ; i++){
//         if(i%2 === 0){
//             console.log(i + " EVEN");
//         }
//         else{
//             console.log(i + " ODD");
//         }
//     }
// }
// showNumbers(10);

// truthy
// const array = [0,null,undefined, '',2,3];
// function countTruthy(array){
//     let count = 0;
//     for(let value of array){
//         if(value){
//             count++;
//         }

//     }
//     return count;
// }
// console.log(countTruthy(array));

// Object

// const movie={
//     title:'a',
//     releaseYear: 2020,
//     rating: 4.5,
//     director: 'b'
// };

// function showProperties(obj){
//     for(let key in obj){

//         if(typeof obj[key] === 'string'){
//             console.log(key, obj[key]);
//         }
//     }

// }
// showProperties(movie)

// // sum 
// function sum(limit){
//     let total = 0
//     for (let i = 0; i<=limit; i++){
//         if(i % 3 === 0  || i % 5 === 0){
//             total = total + i;
//         }
        
//     }
//     return total;
// }
// console.log(sum(10));

// Average Marks
// const marks =[ 80,80,50];

// console.log(calculateGrade(marks));

// function calculateGrade(marks){
//     let total = 0;
//     for(let value of marks){
//         total = total + value;
       
//     }
//     let avgmark = total/marks.length
    
//     if(avgmark>=90 && avgmark<=100){
//         return 'A';
//     }
//     else if(avgmark>=80 && avgmark<=89){
//         return 'B';
//     }
//     else if(avgmark>=70 && avgmark<=79){
//         return 'C';
//     }
//     else if(avgmark>=60 && avgmark<=69){
//         return 'D';
//     }
//     return 'F';

// }

// Stars

// showStars(10);
// function showStars(rows){
//     for( let i =1; i<=10; i++){
//         let pattern = '';
//         for(let j=0; j<i; j++){
//             pattern += '*';
//         }
//         console.log(pattern);
//     }
    
// }

// prime numbers

// function showPrimes(limit){
//     for(let num=2; num<=limit;num++){
//         if(isPrime(num)) console.log(num);
//     }
// }

// function isPrime(number){
//     for(let factor=2; factor<number;factor++){
//         if(number %factor === 0){
//             return false;
//         }
//     }
//     return true;
// }

// showPrimes(10);