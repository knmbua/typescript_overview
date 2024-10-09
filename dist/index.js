"use strict";
// const jd = {
//     name: 'JD',
//     age: 44
// };
// function Person(userName, userAge, address, phone){
//     this.name = userName;
//     this.age = userAge;
//     this.address = address;
//     this.phone = phone;
//     this.printBirthday = function (){
//         console.log(`${this.name} is ${this.age} years old`);
//     }
// }
class Animal {
    constructor(name, color, location) {
        this.name = name;
        this.color = color;
        this.location = location;
        this.name = name;
        this.color = color;
        this.location = location;
    }
    printLocation() {
        console.log(`${this.name} live at the ${this.location}!`);
    }
}
const zebra = new Animal('Zebras', 'black and white', 'Zoo');
const dolphin = new Animal('Dolphins', 'gray', 'quarium');
const pig = new Animal('Pigs', 'pink', 'farm');
zebra.printLocation();
// class Person {
//     constructor(public name:string, public age: number, public address: string,public phone:string){
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.phone = phone;
// }
// printBirthday (){
//     console.log(`${this.name} is ${this.age} years old`);
// }
// }
// const jd = new Person ('JD', 44, '555 coding drive', '7777777777');
// const bob = new Person ('Bob', 99, '777 old st', '88888888');
// const jane = new Person ('Jane', 35, '1999 young st', '888888888');
// const Frank = new Person ('Frank', 55, '1111 old st', '999999999')
// jane.printBirthday();
// // jd.printBirthday();
// console.log(jd);
// console.log(bob);
