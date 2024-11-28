/*
  DOM ATTRIBUTES
  Thêm sửa xóa attribute
*/
// var headingElement = document.querySelector('h1');

// setter //getter
// headingElement.setAttribute('title', 'heading') ;
// console.log(headingElement.getAttribute('title'));

// var headingElement2 = document.querySelector('h2');
// console.log(headingElement2.getAttribute('class'));


// innerText: thuộc tính element node -> Trả lại những gì bạn thấy ở trên giao diện web
// textContent: cả thuộc tính element node, text node -> Trả lại full text node
var headingElement = document.querySelector('.heading');

headingElement.textContent = `

New Heading

`;

// console.log(headingElement.innerText);
// console.log(headingElement.textContent);