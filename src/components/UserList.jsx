import React from 'react';

const UserList = () => {

    const users = [
        {id: 1, name: "Itadori", age: 17},
        {id: 2, name: "Edward", age: 19},
        {id: 3, name: "Yukihira", age: 15},
    ];

    return(
        <div>
            {users.map(({id, name, age}) => (
                <ul key={id}>
                    <li>Name: {name}</li>
                    <li>Age: {age}</li>
                </ul>
            ))}
        </div>
    )
}

export default UserList;