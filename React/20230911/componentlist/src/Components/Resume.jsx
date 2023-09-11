import React, { useState } from 'react';

function Resume (props) {

    // let like = 0;
    // let [like, setLike] = useState(0);

    const [like, setLike] = useState("");
    function clickLike() {
    if (like === "") {
            setLike("Like");
        } else {
            setLike("");
        }
    }

    // function clickLike() {
    //     // like +=1;
    //     setLike(like + 1);
    //     console.log(like);
    // }

    return (
        <>
            <div style={{border:"solid 1px", width:"500px"}}>
                <h1>{props.name} 자기소개서</h1>
                <h1>{props.hello}</h1>
                <h2>취미: {props.hobby}</h2>
                <h2>좋아하는 음식: {props.food}</h2>
                <h2>좋아하는 색깔: <span style={{color:props.color}}>{props.color}</span></h2>
                <button onClick={clickLike}>like</button><span>{like}</span>
            </div>
        </>
    )
}

export default Resume;