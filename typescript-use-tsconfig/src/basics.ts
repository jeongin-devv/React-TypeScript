// primitives : number, string, boolean
// More complex types : arrays, objects
// Function types, parameters

let age: number = 24;

age = 12;

let userName : string | string[];

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

//More complex types

let hobbies : string[];

hobbies = ['Sports','Cooking', ' Basketball'];

type Person = {
  name: string;
  age: number;
}

let person: Person;

person = {
  name: 'Jeongin',
  age: 32
}

let people:{
  name:string;
  age:number;
}[];

//Type Inference

//생성 후, 초기화 시 타입 지정
let course: string | number = 'React - The Complete Guide';
// let course:string = 'React - The Complete Guide';


course = 12341;

//Function & types

function add(a: number,b: number) {
  return a + b;
}

function printOutput(value: any){
  console.log(value);
}

//Generics

function insertAtBeginning<T>(array: T[], value: T){
  const newArray = [value,...array];
  return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray,-1);
const stringArray = insertAtBeginning(['a','b','c'],'d');