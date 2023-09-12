import React, { useState } from 'react'

function UserItem({ user }) {

    const [showInfo, setShowInfo] = useState(false);

    // function handler(){
    //     return setShowInfo(!showInfo);
    // }

    return (
        <li onClick={(() => setShowInfo(!showInfo))}>
            {user.name}
            {showInfo ?<div>
                <span>email: {user.email}</span>
                <span>job: {user.job}</span>
            </div> : null}
        </li>
    )
}

function UserList({ users }){
    return (
        <ul>
            {users.map((item)=>{
                return <UserItem key={item.id} user={item}/>
            })}
        </ul>
    )
}

export default function App3() {
    const users = [
        { id: 1, name: 'Alice', email: 'alice@example.com', job: 'Engineer' },
        { id: 2, name: 'Bob', email: 'bob@example.com', job: 'Designer' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', job: 'Manager' }
    ];

    return (
        <div>
            <h1>User List</h1>
            <UserList users={users}/>
        </div>
    )
}
