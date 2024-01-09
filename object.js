// const address={
//     street : 'Katalgonj',
//     city : 'Chattogram',
//     zipCode: '2345'
// }

// function showAddress(address){
//     for(let key in address){
//         console.log(key, address[key])
//     }
// }
// showAddress(address)

// factory Function

// function createAddress(street,city,zipCode){
//     return{
//         street,
//         city,
//         zipCode
//     };
// }

// let address = createAddress('a','b','x');
// console.log(address);


// constructor fucntion
// function Address(street,city,zipCode){
//     this.street = street;
//     this.city=city;
//     this.zipCode = zipCode;
// }
// let address1 = new Address('a','b','c');
// let address2 = new Address('a','b','c');
// function areEqual( address1,address2){
//     return address1.street === address2.street &&
//     address1.city === address2.city &&
//     address1.zipCode === address2.zipCode
// }
// function areSame( address1,address2){
//     return address1 === address2;
// }
// console.log(areEqual(address1,address2));
// console.log(areSame(address1,address2));

// let post = {
//     title: 'a',
//     body: 'b',
//     author: 'c',
//     views :10,
//     comments : [
//         {author:'a' , body:'b'},
//         {author:'c' , body:'d'},
//     ],
//     isLive:false
// };
// constructor function
// function Post(title, body,author){
//     this.title = title;
//     this.body = body;
//     this.author =author;
//     this.views=0;
//     this.comments =[

//     ];
//     this.isLive = false;
// }

// let post2 = new Post('a','b','c');
// console.log(post2);

// Price Range

let priceRanges = [
    {label: '$', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson:10},
    {label: '$$', tooltip: 'Moderate', minPerPerson: 0, maxPerPerson:10},
    {label: '$$$', tooltip: 'Expensive', minPerPerson: 0, maxPerPerson:10}
];
let restaurants = [
    {averagePerPerson: 5}
]