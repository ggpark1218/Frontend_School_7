const foo = () => {
    console.log("arrow function");
};

// 같은 함수
// function foo(){
//     console.log("arrow function");
// }

foo();


const foo2 = (x) => {
    return x;
};
console.log(foo2("arrow"));


const foo3 = (x,y) => x+y;
console.log(foo3(1,5));


const foo4 = (x,y) => {
    console.log("2줄 이상");
    return x+y;
};
console.log(foo4(1,5));
