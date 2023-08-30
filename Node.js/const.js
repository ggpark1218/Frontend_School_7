const hello = "first hello";
// hello = "second hello"; //한 번 정의한 후에 바꿀 수 없음

if(true){
    const hello = "second hello";
    console.log(hello); //second hello
}

console.log(hello);
