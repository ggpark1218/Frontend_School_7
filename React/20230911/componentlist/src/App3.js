import React from 'react'
import { useState } from 'react';
import Login from './Components/Login';
import Hompage from './Components/Hompage';

export default function App3() {
    const user = {
        idUser: 'jaehyun@weniv.com',
        pwUser: 1234
    }

    // 로그인 상태를 판단하는 state
    const [login, setLogin] = useState(false);

    return(
        login ? <Hompage /> : <Login infoUser={user} setLogin = {setLogin}/>
    )
}