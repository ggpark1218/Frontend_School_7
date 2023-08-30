let hello = "first hello";
// hello = "second hello";
// let hello = "second hello"; 증복으로 선언하면 안 됨

if(true){
    let hello = "second hello";
    console.log(hello); //second hello
}

console.log(hello); //first hello