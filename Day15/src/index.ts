//Basic Types
//@ts-ignore
let id: number = 9
let company: string = "Telstra";
let isPublished: boolean = true;
let x: any = "Hello";

//console.log("ID:", id)

let empIds: number[] = [1,2,3,4,5,6];
let arr: any[] = [1, true, "hello"];

//Tuple
let person: [number, string, boolean] = [1, "venkat", true];

//Tuple Array
let employee: [number, string][];

employee = [
    [1, "venkat"],
    [2, "neha"],
    [3, "anubha"]
]

// Union
let eid: string | number = "99";

/// ENUM allow developer to define a set of names constants
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

//console.log(Direction.Up)

enum Direction1 {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}

/// Objects 
// const user: {
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: "venkat"
// }

// Objects and type

type User = {
    id: number,
    name: string
}

const user: User = {
    id: 1,
    name: "venkat"
}

// Type Assertions
let cid: any = 1;
//let customerId = <number>cid
let customerId =  cid as number;

customerId = 1

// Functions 
function addCalc(x: number, y: number): number {
    return x + y;
}

//console.log(addCalc(1, 3))

// void
function log(message: string | number): void{
    console.log(message)
}

//log("Welcome")

// Inteface

interface UserInterface {
    readonly id: number,
    name: string,
    age?: number
}

const userOne: UserInterface = {
    id: 1,
    name: "venkat"
}

// userOne.id = 10; read only error

// type Point = number | string;

// const p1: Point = 1;

// Interface for function

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes 

interface PersonInterface {
    id: number
    name: string
    register(): string
}


class Person implements PersonInterface{
//    private id: number
    //protected id: number
    id: number
    name: string

    constructor(id: number, name: string){
        this.id = id 
        this.name = name
    }

    register(){
        return `${this.name} is now registered`
    }
}

// Subclasses
class Employee extends Person{
    role: string

    constructor(id: number, name: string, role: string){
        super(id, name)
        this.role = role
    }
}

const emp = new Employee(3, "Abhijit", "Developer")

//console.log(emp.)

// function Person(){
// }

// Person.prototype.register = function(){}


const venkat = new Person(1, "Venkat")
const neha = new Person(2, "Neha")

//neha.id = 3;

console.log(venkat.register())

console.log(venkat, neha)

// Generics 
// function getArray(items: any[]): any[] {

//     return new Array().concat(items);
// }
function getArray<T>(items: T[]): T[] {

    return new Array().concat(items);
}

let numArr = getArray<number>([1,2,3,4]);
let strArr = getArray<string>(["venkat", "neha", "abhijit"]);

//numArr.push("")