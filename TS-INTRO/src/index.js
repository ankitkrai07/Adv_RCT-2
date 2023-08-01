console.log("hello");
// Number
var a = 10;
// a = "str";
a = 12;
// String
var str = "abc";
// str = 10;
// Boolean
var flag = false;
// flag = "str";
// Array
var array = [1, 2, 3, 4, 5];
// let array: number[] = [1, 2, 3, "c", "b","a"]
var array1 = [1, 2, 3, 4];
var person = {
    //   id: "1" if miss id then it will throw error.
    id: 1,
    name: "ankit",
};
var task1 = {
    id: 1,
    title: "abc",
    status: false,
    user: "123", // we can skip it also.
    // user: 123,
};
// Create an array of products
var products = [
    {
        image: "product1.jpg",
        price: 25.99,
        id: 1,
        status: true,
        colour: "red",
    },
    {
        image: "product2.jpg",
        price: 19.99,
        id: 2,
        status: true,
    },
    {
        image: "product3.jpg",
        price: 39.99,
        id: 3,
        status: false,
        colour: "blue",
    },
    // Add more products here...
];
// Example of accessing a product
var firstProduct = products[0];
console.log(firstProduct.image); // Output: "product1.jpg"
console.log(firstProduct.price); // Output: 25.99
console.log(firstProduct.status); // Output: true
console.log(firstProduct.colour); // Output: "red"
var arrayOfProducts = [
    {
        image: "https://images.meesho.com/images/products/197070815/dkszs_512.webp",
        price: 500,
        id: 1,
        status: true,
        colour: "red",
    },
];
var arrayOfProduct = [
    {
        id: 1,
        image: "abc.com/jpeg",
        price: 2999,
        status: false,
        colour: "Red",
    },
    {
        id: 2,
        image: "abcd.com/jpeg",
        price: 1999,
        status: false,
        colour: "Blue",
    },
];
// Union and Intersection
var b = 10;
b = "str";
b = true;
// type Employee = {
//     f_name: string;
//     l_name: string;
//     age: number;
// }
// interface Employee extends Company = {
//     f_name: string;
//     l_name: string;
//     age: number;
// }
var companyEmployee = {
    name: "Ankit",
    address: "1st street",
    open: false,
    f_name: "Ankit",
    l_name: "Kumar",
    age: 22,
};
function sum(a, b) {
    return a + b; //`${a}+${b}`;--->wrong
}
