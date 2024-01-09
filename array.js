// array range

// const numbers = arrayFromRange(-10,-4);

// console.log(numbers);
// function arrayFromRange(min,max){
//     const output = [];
//     for(let i = min; i<=max; i++){
//         output.push(i);
       
//     }
//     return output;
// }
// includes


// const numbers = [1,2,3,4];
// console.log(includes(numbers,10));

// function includes(array,searchElement){
//     for(let element of array){
//         if (element === searchElement){
//             return true;
//         }
//     }
//     return false;
// }

// except
// const numbers = [1,2,3,4,1,2,1];
// const output = except(numbers,[1,2]);
// console.log(output);

// function except(array, excluded){
//     const output = [];
//     for(let element of array){
//         if(!excluded.includes(element)){
//             output.push(element);
//         }

//     }
//     return output;
// }


// Moving element

// const numbers = [1,2,3,4]
// const output = move(numbers, 0,1);
// console.log(output);
// function move(array,index,offset){
//     const position = index + offset;
//     if(position >=array.length || position<0){
//         console.error('Invalud Offset');
//         return;
//     }

//     const output = [...array];
//     const element = output.splice(index,1)[0];
//     output.splice(index+offset,0,element);
//     return output;
    
// }   

// count occurences
// const numbers = [1,2,3,4]
// const count = countOccurences(numbers, -1);
// console.log(count);
// function countOccurences(array,searchElement){
//     return array.reduce((accumulator, current)=>{
//         const occurences = (current === searchElement) ? 1:0
//         return accumulator + occurences;
//     },0);
// }

// get Max
// const numbers = [1,2,3,4]
// const max = getMax(numbers);
// console.log(max);
// function getMax(array){
//     if(array.length === 0) return undefined;
//     // reduce
//     return array.reduce((a,b)=> (a>b) ? a :b);


    // let max = array[0];
    // for(let i =0; i<array.length ;i++){
    //     if(array[i]>max){
    //         max = array[i];
    //     }
    // }
    // return max;
// }

// Movies

const movies = [
    {title: 'a', year:2018, rating:4.2},
    {title: 'b', year:2018, rating:4.5},
    {title: 'c', year:2022, rating:4.7}
];

const title = movies
.filter(m => m.year === 2018 && m.rating>=4)
.sort((a,b)=> a.rating-b.rating)
.reverse()
.map(m=>m.title)
console.log(title);