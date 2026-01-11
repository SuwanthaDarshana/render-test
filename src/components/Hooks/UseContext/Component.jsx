import React, { createContext, useContext, useState } from "react";
import Color from "../UseState/Color";

const UserContext = createContext();

const Component = () => {
  const [user, setUser] = useState("Kamla");

  return (
    <div>
      <h3 style={{color:"red"}}>3. UseContext Hook</h3>
      <UserContext.Provider value={user}>
        <h3>Hello : {user}</h3>
        <Component4 />
      </UserContext.Provider>
    </div>
  );
};

const Component4 = () => {
  return (
    <div>
      <h2>Component 2</h2>
      <Component5 />
    </div>
  );
};

const Component5 = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Component 3</h2>
      <h3>Hello : {user}</h3>
    </div>
  );
};

export default Component;
