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

console.log(course);

