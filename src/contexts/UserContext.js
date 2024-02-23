import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [supervisorID, setSupervisorID] = useState(null);
  const [memberID, setMemberID] = useState(null);

  const setUserAsSupervisor = (ID) => {
    setSupervisorID(ID);
  };
  
  const setUserAsMember = (ID) => {
    setMemberID(ID);
  };

  return (
    <UserContext.Provider value={{ supervisorID, setUserAsSupervisor, memberID, setUserAsMember }}>
      {children}
    </UserContext.Provider>
  );
};