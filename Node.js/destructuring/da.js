//비구조화 할당: 객체 혹은 배열 안에 있는 값들은 쉽게 변수 혹은 상수에 선언할 수 있게 하는 문법
//객체
const object = { a: 1, b: 2 };

// const a = object.a;
// const b = object.b;
// console.log(a);
// console.log(b);

const { a, b } = object ;
console.log(a);
console.log(b);

//배열
const array = [1, 2];
const [one, two] = array;
console.log(one);
console.log(two);