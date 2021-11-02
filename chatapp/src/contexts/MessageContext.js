import React, { useState, createContext } from 'react';

export const MessageContext = createContext();

export const MessageProvider = (props) => {
  const [messages, setMessages] = useState([]);
  return (
    <MessageContext.Provider value={[messages, setMessages]}>
      {props.children}
    </MessageContext.Provider>
  );
};
