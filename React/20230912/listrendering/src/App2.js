import React, { useState } from 'react'
import Counter from './Counter';

export default function App2() {
    const [data, setData] = useState([
        {
            title: "개발자 무릎 담요",
            price: 17500,
            id: 101,
            },
            {
            title: "Hack Your Life 개발자 노트북 파우치",
            price: 29000,
            id: 102,
            },
            {
            title: "우당탕탕 라이켓의 실험실 스티커북",
            price: 29000,
            id: 103,
            },
            {
            title: "버그를 Java라 버그잡는 개리씨 키링",
            price: 29000,
            id: 104,
            },
        ]);

    // const productList = [
    //     {
    //         title: "개발자 무릎 담요",
    //         price: 17500,
    //         id: 101,
    //         },
    //         {
    //         title: "Hack Your Life 개발자 노트북 파우치",
    //         price: 29000,
    //         id: 102,
    //         },
    //         {
    //         title: "우당탕탕 라이켓의 실험실 스티커북",
    //         price: 29000,
    //         id: 103,
    //         },
    //         {
    //         title: "버그를 Java라 버그잡는 개리씨 키링",
    //         price: 29000,
    //         id: 104,
    //         },
    //     ];

    // function deleteFunc(id) {
    //     setData(
    //         data.filter((item) => {
    //             return item.id !== id;
    //         })
    //     );
    // }
    
    // setState 함수의 인자로 콜백함수를 넣음 => 함수형 업데이트
    // 함수형 업데이트의 장점은 콜백함수의 인자에 이전의 상태가 들어가는 것을 리액트가 보장합니다.
    function deleteFunc(id) {
        setData((prevData)=>{
            return prevData.filter((item) => {
                return item.id !== id;
            })
        }

        );
    }

    return (
        <>
        <ul>
            {data.map((item)=>{
                return(
                    <li key={item.id}>
                        <h2>{item.title}</h2>
                        <strong>{item.price}</strong>
                        {/* 리액트에서 권장하는 방법 */}
                        <button onClick={() => deleteFunc(item.id)} >삭제</button>

                        {/* 직접 DOM에 접근해서 삭제하는 방법, 리액트에서 쓰는 건 권장 X */}
                        {/* cloest 자기 자신에게서 가장 가까운 요소를 선택해줌 (부모요소) */}
                        {/* <button onClick={(event) => event.target.cloest('li').remove()} >삭제</button> */}
                    </li>
                )
            })

            }
        </ul>

        <Counter />
        </>
    )
}
