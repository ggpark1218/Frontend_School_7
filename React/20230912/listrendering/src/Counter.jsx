import React, {useState} from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);

    function increment() {
        // 강제로 state 함수 계속 호출하게 하는 방법
        // 인자로 이전 값을 줌
        // 함수형 업데이트라고 부름
        setCount((prev)=>{
            return prev + 1
        });
        setCount((prev)=>{
            return prev + 1
        });
        setCount((prev)=>{
            return prev + 1
        });
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // state 함수가 실행되면 결국 state가 변경됩니다. state가 변경되면 컴포넌트가 다시 랜더링 됩니다.
        // 언제 상태가 바뀔지 모른다. 여러번 동시에 실행된다고 해서 바로 state가 바뀌는 게 아니고 기다렸다가 가장 마지막에 호출된 state함수만 실행 시킨다.
        // 이런 현상이 발생하는 이유는 업데이트는 비용이 큰 작업이고, state 함수는 비동기적으로 동작하기 때문이다.
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <h2>Count 의 값은: {count}</h2>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    )
}
