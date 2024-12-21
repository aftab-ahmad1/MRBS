import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const[addUser,setAddUser]=useState(false);
  const[addVehicle,setAddVehicle]=useState(false);

  return (<>
    <GlobalContext.Provider value={{ addUser, setAddUser, addVehicle, setAddVehicle }}>
      {children}
    </GlobalContext.Provider>
    </>
  );
};

export default GlobalProvider;