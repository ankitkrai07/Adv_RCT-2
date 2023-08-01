var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Enums (read about it explore it)
// Tuple
var user = {
    f_name: "Ankit",
    l_name: "Kumar",
    address: "1st Street",
    open: true,
    age: 25,
};
console.log(user.address);
var newUser = ["Ankit", "Kumar", "1st Street", true, 25];
console.log(newUser[2]);
var anotherUser = ["Ankit", "Kumar", "1st Street", false, 30];
// Generic function
function sum1(a, b) {
    return a + b;
}
function sum2(a, b) {
    return a + b;
}
sum1(10, 20);
sum2("a", "b"); // "ab"
function sum3(a) {
    return a;
}
sum3(10);
sum3("abc");
sum3(20);
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    return Car;
}());
var Safari = /** @class */ (function (_super) {
    __extends(Safari, _super);
    function Safari(name, type, sunRoof) {
        var _this = _super.call(this, name) || this;
        _this.sunRoof = sunRoof;
        _this.type = type;
        return _this;
    }
    return Safari;
}(Car));
var c1 = new Safari("safari", "DIESEL", false); // DIESEL / PETROL / ELECTRIC
function sum4(a, func) {
    return func(a);
}
