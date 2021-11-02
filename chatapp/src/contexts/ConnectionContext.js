import React, { useState, createContext } from 'react';

export const ConnectionContext = createContext();

export const ConnectionProvider = (props) => {
  const [connection, setConnection] = useState();
  return (
    <ConnectionContext.Provider value={[connection, setConnection]}>
      {props.children}
    </ConnectionContext.Provider>
  );
};
