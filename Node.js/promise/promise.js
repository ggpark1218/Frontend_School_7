// pending 대기 상태
// pullfilled 이행 상태
// rejected 실패 상태
function sayHello(){
    return new Promise((resolve, reject)=>{
        // 성공했을 때 resolve 호출
        // 실패했을 때 reject 호출
        const hello = "Hello Hello";
        resolve(hello);
        // reject(new Error());
    });
}

sayHello()
    .then((resolvedData)=>{
        console.log(resolvedData);
        return resolvedData;
})
    .then((resolvedData)=>{
        console.log(resolvedData);
        return resolvedData;
})
    .then((resolvedData)=>{
        console.log(resolvedData);
})
    .catch((error)=> {
        console.log(error);
});


//then이 너무 많아 복잡한 걸 방지하기 위해 async await
function sayHello1(){
    return new Promise((resolve, reject)=>{
        resolve("hello!!!");
    });
}

async function test(){
    //await 이 실행이 끝난 후에 밑에 있는 코드를 실행시키겠다는 뜻
    const hello1 = await sayHello1();
    console.log(hello1);
}

test();