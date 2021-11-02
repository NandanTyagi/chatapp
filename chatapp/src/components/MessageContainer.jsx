import React, { useEffect, useRef, useContext } from 'react';
import { MessageContext } from '../contexts/MessageContext';

export const MessageContainer = () => {
  const [messages /*, setMessages*/] = useContext(MessageContext);
  const messageRef = useRef();

  useEffect(() => {
    if (messageRef && messageRef.current) {
      const { scrollHeight, clientHeight } = messageRef.current;
      messageRef.current.scrollTo({
        left: 0,
        top: scrollHeight - clientHeight + 100,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  return (
    <div ref={messageRef} className={'message-container'}>
      {messages.map((m, i) => {
        return (
          <div key={i} className={'message-holder'}>
            <div className={'message'}>{m.message}</div>
            <div className={'sender'}>{m.user}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageContainer;
