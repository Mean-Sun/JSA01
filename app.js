//array

myArray = [
  1, //0
  [1, 2, 3], //1
  "con so 3", //2
  true, //3
  5, //4
];

//cách gọi 1 phần tử cửa mảng bằng số thứ tự
console.log(myArray[0]);

//DẤU PHẨY RẤT QUAN TRỌNG
//object ko đánh số thứ tự mà dán nhãn tên cho các ô chứa
myObject = {
  hovaten: "Minh Son", // dán nhãn cho ngăn tủ, dấu hai chấm không được quên
  job: "dev",
};

//lấy 1 phần tử của object là dùng dấu chấm
console.log(myObject.hovaten);

// duyệt hết mảng dùng vòng lặp forEach
// mỗi lần lặp một phần tử được truyền vào item
myArray.forEach((item) => {
  console.log(item);
  console.log(item);
  console.log(item);
});
