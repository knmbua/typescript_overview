"use strict";
let userInfo = 'Kandyce';
let num = 10;
let isCool = true;
let fruits = ['orange', 'apple', 'grape'];
let strictArray = ['JD', 44];
function add(a, b) {
    return a + b;
}
const kandyce = {
    name: 'Kandyce',
    age: 35
};
const kDetails = {
    phone: '777-888-9999',
    address: '123 Main St',
    hobbies: ['fishing', 'pickleball']
};
function printUserInfo(userObj, detailsObj) {
    console.log(`${userObj.name} is ${userObj.age} years old.They live at ${detailsObj.address} and you can reach them at ${detailsObj.phone}`);
    if (detailsObj.hobbies) {
        console.log(`${userObj.name} likes ${detailsObj.hobbies[0]}`);
    }
}
printUserInfo(kandyce, kDetails);
// if (typeof userInfo === 'string') {
//     console.log (userInfo.toLowerCase())
// }
//     if (typeof userInfo === 'number'){
//         console.log(Math.round(userInfo))
//     }
// if (typeof UserName === 'string'){
// }
