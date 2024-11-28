/*
  HTML DOM(Document Object Model)
  Là quy chuẩn mô tả mô hình của các thành phần trong tài liệu HTML được đưa ra bởi W3C.
  DOM có 3 thành phần
  1. Element: ID, class, tag, css selector, HTML collection
  2. Attribute
  3. Text
  Node -> điểm giao nhau, điểm gồ lên
  ---------------------
  Javascript: Browser, Server
  Browser: HTML -> DOM -> DOM API(WEB API)

  DOM API
  Là bộ API nằm trong Web API có mặt trên những môi trường hỗ trợ duyệt web - như trên trình duyệt. 
  DOM API cung cấp các đối tượng và phương thức hỗ trợ truy xuất, chỉnh sửa các đối tượng / thành phần trong DOM.
*/
// var headingNodes = document.querySelectorAll('.box .heading-2'); 
// console.log(headingNodes[1]);

var boxNode = document.querySelector('.box-1');
// console.log(boxNode)
// Công việc 1: Sử dụng tới `boxNode`
// Công việc 2: Sử dụng tới các li elements là con của `.box-1`
// console.log(boxNode.querySelectorAll('li'));
// console.log(boxNode.querySelector ('p'));

/*
1. getElementById   -> trả về trực tiếp element
2. getElementsByClassName -> HTML Collection
3. getElementsByTagName   -> HTML Collection
4. querySelector  -> trả về trực tiếp element
5. querySelectorAll -> NodeList
6. HTML Collection
  thẻ img, form, a
7. document.write
  
*/

console.log(document.forms[1]);
