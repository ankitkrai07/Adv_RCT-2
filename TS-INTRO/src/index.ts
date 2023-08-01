console.log("hello");

// Number

let a: number = 10;
// a = "str";
a = 12;

// String

let str: string = "abc";
// str = 10;

// Boolean

let flag: boolean = false;
// flag = "str";

// Array

let array: number[] = [1, 2, 3, 4, 5];
// let array: number[] = [1, 2, 3, "c", "b","a"]

let array1: Array<number> = [1, 2, 3, 4];

// array1.push("str")

// Object *****

type Data = {
  id: number;
  name: string;
};

let person: Data = {
  //   id: "1" if miss id then it will throw error.
  id: 1,
  name: "ankit",
};

// person.address = "abc Street"

type Todo = {
  id: number;
  title: string;
  status: boolean;
  user?: string; // optional
};

const task1: Todo = {
  id: 1,
  title: "abc",
  status: false,
  user: "123", // we can skip it also.
  // user: 123,
};

// Array of Objects

// Problem
// Create an array of products with following properties
// image, price, id ,status, colour(optional)

// Define the Product interface
type Product = {
  image: string;
  price: number;
  id: number;
  status: boolean;
  colour?: string; // Optional property
};

// Create an array of products
const products: Product[] = [
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
const firstProduct: Product = products[0];
console.log(firstProduct.image); // Output: "product1.jpg"
console.log(firstProduct.price); // Output: 25.99
console.log(firstProduct.status); // Output: true
console.log(firstProduct.colour); // Output: "red"

type product = {
  image: string;
  price: number;
  id: number;
  status: boolean;
  colour?: string;
};

const arrayOfProducts: Array<product> = [
  {
    image: "https://images.meesho.com/images/products/197070815/dkszs_512.webp",
    price: 500,
    id: 1,
    status: true,
    colour: "red",
  },
];

type Products = {
  id: number;
  image: string;
  price: number;
  status: boolean;
  colour?: string;
};

let arrayOfProduct: Products[] = [
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

let b: number | string | boolean = 10;
b = "str";
b = true;

// any

type Company = {
  name: string;
  address: string;
  open: boolean;
};

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

let companyEmployee = {
  name: "Ankit",
  address: "1st street",
  open: false,
  f_name: "Ankit",
  l_name: "Kumar",
  age: 22,
};

function sum(a: number, b: number): number {
  return a + b; //`${a}+${b}`;--->wrong
}

// Enums (read about it explore it)

// Tuple

let user = {
  f_name: "Ankit",
  l_name: "Kumar",
  address: "1st Street",
  open: true,
  age: 25,
};

console.log(user.address);

type Tuple = [string, string, string, boolean, number];

let newUser: Tuple = ["Ankit", "Kumar", "1st Street", true, 25];

console.log(newUser[2]);

let anotherUser: Tuple = ["Ankit", "Kumar", "1st Street", false, 30];

// Generic function

function sum1(a: number, b: number): number {
  return a + b;
}

function sum2(a: string, b: string): string {
  return a + b;
}

sum1(10, 20);
sum2("a", "b"); // "ab"

function sum3<T>(a: T) {
  return a;
}

sum3(10);
sum3<string>("abc");
sum3<number>(20);
// sum<boolean>(false); // here problem

// const [count, setCount] = useState<number>(0);

// Classes

type Fuel = "DIESEL" | "PETROL" | "ELECTRIC";

class Car {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Safari extends Car {
  type: Fuel;
  sunRoof: boolean;
  constructor(name: string, type: Fuel, sunRoof: boolean) {
    super(name);
    this.sunRoof = sunRoof;
    this.type = type;
  }
}

const c1 = new Safari("safari", "DIESEL", false); // DIESEL / PETROL / ELECTRIC

function sum4(a: number, func: (x: number) => void) {
  return func(a);
}
