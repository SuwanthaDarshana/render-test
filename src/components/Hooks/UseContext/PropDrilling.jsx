import React, { useState } from 'react';



const PropDrilling = () => {

    const [user,setUser] = useState("Jhon Cena");


    return (
        <div>
            <h3>Hello : {user}</h3>
            <Componet2  user={user} />
        </div>
    );
}

const Componet2 = ({user}) => {
    return (
        <div>
            <h2>Component 2</h2>
            <Componet3 user={user} />
        </div>
    );
}

const Componet3 = ({user}) => {
    return (
        <div>
            <h2>Component 3</h2>
            <h3>Hello : {user}</h3>
        </div>
    );
}



export default PropDrilling;
