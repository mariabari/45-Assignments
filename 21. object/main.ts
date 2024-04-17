/* Q21: think of something you could store in a typescript object. write a program that creates
objects containg these items ? */
// person biodata stored in an object 
interface person {
    name : string,
    age : number,
    nationality : string,
    student : boolean
}
let person : person = {
    name : 'Maria',
    age : 17,
    nationality : 'Pakistan',
    student : true
}
console.log(person)

// mobile example
interface mobile {
    manufacturer : string,
    color : string,
    android : boolean
}
let mobile = {
    manufacturer : 'Samsung',
    color : 'Black',
    android : true
}
console.log(mobile)