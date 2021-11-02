import React, { useContext } from 'react';
import { MessageContainer } from './MessageContainer';
import ConnectedUsers from './ConnectedUsers';
import { ConnectionContext } from '../contexts/ConnectionContext';
import closeConnection from '../signalR/closeConnection';

export const Chat = () => {
  const [connection /*, setConnection*/] = useContext(ConnectionContext);
  return (
    <>
      <div>
        <ConnectedUsers />
        <button
          className={'leave-btn'}
          onClick={() => closeConnection(connection)}
        >
          Leave Room
        </button>
      </div>
      <div>
        <MessageContainer />
      </div>
    </>
  );
};

export default Chat;
