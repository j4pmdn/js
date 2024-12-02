/*
ES6
1. let, const, var
scope: let, const ko truy cập được qua code block(bên ngoài), bên trong thì được 
-> var thì được
hoisting -> let, const ko hỗ trợ
assignment: const ko hỗ trợ gán đến lần thứ 2 của nó -> let, var thì được


*/

{
  const course = 'Javascript basic';
}

// console.log(course);


// Arrow function 
// const logger= log => console.log(log);

// logger('Message...');

const sum = (a, b) => a + b;

// console.log(sum(2, 2));


// const course = {
//   name: 'JS basic',
//   getName: () => {
//     return this; // context
//   }
// }
// console.log(course.getName());

const courseName = 'Javascript';
// Template Literals (template string)
const description = `Course name: ${courseName}`;
// console.log(description);


// Default parameter values
// function logger(log = 'Gia tri mac dinh'){
//   console.log(log);
// }

// logger(undefined);


// Destructuring

// var array = ['Javascript', 'PHP', 'Ruby'];

// // // var a = array[0];
// // // var b = array[1];
// // // var c = array[2];

// Rest parameter values -> destructuring
// var [a, b, ...rest] = array;

// console.log(a, b);
// console.log(rest);

var course = {
  name: 'Javascript',
  price: 1000
};

var {name, ...rest} = course;
// console.log(name);
// console.log(rest);

// spread (...) -> đối số

var array1 = ['JS', 'Ruby', 'PHP'];
var array2 = ['ReactJS', 'Java'];

var array3 = [...array2, ...array1];
// console.log(array3);

var defaultConfig = {
  api: 'http://domain-trang-khoa-hoc',
  apiVersion: 'v1',
  other: 'other',	
  //
  //
}  

var excerciseConfig = {
  ...defaultConfig,
  api: 'http://domain-trang-bai-tap',
}  

// console.log(excerciseConfig);

var array =  ['JS', 'Ruby', 'PHP'];

function logger1(...rest){
  for(var i = 0; i < rest.length; i++){
    console.log(rest[i]);
  }
}

// console.log(...array);


// Module trong JS ES6
// Modules: import / export
import logger from './logger/index.js';
// import  {
//   TYPE_LOG, 
//   TYPE_WARN,
//   TYPE_ERROR
// } from './constants.js';
import * as constants from './constants.js';

// logger('Test message...', TYPE_LOG);
// console.log(constants);

// Optional chaining (?.)

const obj = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
    cat2: {
      name: 'Dinah2',
      cat3: {
        name: 'Dinah3',
      }
    },
  },
};

if(
  // obj.cat &&
  // obj.cat.cat2 &&
  // obj.cat.cat2.cat3 
  obj?.cat?.cat2?.cat3
){
  console.log(obj.cat.cat2.cat3.name);
}

const obj1 = {
  getName(value){
    console.log(value);
  }
}

obj1.getName?.(123);







