import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userID, setUserID] = useState(null);

  const setUserAsSupervisor = (ID) => {
    setUserID(ID);
  };

  return (
    <UserContext.Provider value={{ userID, setUserAsSupervisor }}>
      {children}
    </UserContext.Provider>
  );
};