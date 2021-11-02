import React, { useState, useContext } from 'react';
import { ConnectionContext } from '../contexts/ConnectionContext';
import sendMessage from '../signalR/sendMessage';

export const SendMessageForm = () => {
  const [message, setMessage] = useState('');
  const [connection /*, setConnection*/] = useContext(ConnectionContext);
  return (
    <div className={'message-form'}>
      <form
        className={'message-form-form'}
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(message, connection);
          console.log(message);
          setMessage('');
        }}
      >
        <input
          className={'send-message-input'}
          type="text"
          placeholder="message..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button
          type="submit"
          disabled={!message}
          className={'send-message-btn'}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessageForm;
