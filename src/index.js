// // // // function func1(str) {
// // // //   return str;
// // // // }

// // // // console.log(func1("func1です。"));

// // // // const func2 = (str) => {
// // // //   return str;
// // // // };

// // // // console.log(func2("func2"));

// // // // const func3 = (num1, num2) => {
// // // //   return num1 + num2;
// // // // };

// // // // // console.log(func3(10, 7));

// // // // const myProfile = {
// // // //   name: "jake",
// // // //   age: 28
// // // // };

// // // // // const message1 = `名前は${myProfile.name}で年齢は${myProfile.age}です`;
// // // // // console.log(message1);

// // // // const { name, age } = myProfile;
// // // // const message2 = `名前は${name}で年齢は${age}です`;
// // // // console.log(message2);

// // // const myProfile = ["jake", 28];
// // // // const message3 = `名前は${myProfile[0]}で年齢は${myProfile[1]}です`;
// // // // console.log(message3);

// // // const [name, age] = myProfile;
// // // const message4 = `名前は${name}で年齢は${age}です`;
// // // console.log(message4);

// // const sayHello = (name = "デフォルト") => {
// //   return console.log(`こんにちは、${name}さん`);
// // };
// // sayHello("なまえ");

// // const arr1 = [1, 2];
// // // console.log(arr1);
// // // console.log(...arr1);

// // const sumFunc = (num1, num2) => {
// //   return console.log(num1 + num2);
// // };

// // sumFunc(arr1[0], arr1[1]);
// // sumFunc(...arr1);

// // const arr2 = [1, 2, 3, 4, 5];
// // const [num1, num2, ...arr3] = arr2;
// // console.log(num1);
// // console.log(num2);
// // console.log(arr3);

// // const arr4 = [10, 20];
// // const arr5 = [30, 40];

// // const arr6 = [...arr4];
// // console.log(arr6);

// // const arr7 = [...arr4, ...arr5];
// // console.log(arr7);

// const nameArr = ["name1", "name2", "name3"];
// // for (let index = 0; index < nameArr.length; index++) {
// //   console.log(nameArr[index]);
// // }

// // const nameArr2 = nameArr.map((name) => {
// //   return name;
// // });
// // console.log(nameArr2);

// // nameArr.map((name, index) =>   console.log(`${index + 1}番目は${name}`));

// // const numArr = [1, 2, 3, 4, 5];
// // const newNumArr = numArr.filter((num) => {
// //   return num % 2 === 1;
// // });
// // console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "name3") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

// const val1 = 1 < 0 ? "true" : "false";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力して';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "超えた" : "超えてない";
// };
// console.log(checkSum(50, 70));
