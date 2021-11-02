import Lobby from './components/Lobby';
import Chat from './components/Chat';
import SendMessageForm from './components/SendMessageForm';
import { useContext } from 'react';
import './App.css';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { ConnectionContext } from './contexts/ConnectionContext';
import { MessageContext } from './contexts/MessageContext';
import { UserContext } from './contexts/UserContext';

const App = () => {
  const [connection, setConnection] = useContext(ConnectionContext);
  const [messages, setMessages] = useContext(MessageContext);
  const [users, setUsers] = useContext(UserContext);

  const joinRoom = async (user, room) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl('https://chatappsignalrserver.azurewebsites.net/message')
        .configureLogging(LogLevel.Information)
        .build();

      connection.on('UsersInRoom', (users) => {
        setUsers(users);
      });

      connection.on('ReceiveMessage', (user, message) => {
        setMessages((messages) => [...messages, { user, message }]);
      });

      connection.onclose(() => {
        setConnection();
        setMessages([]);
        setUsers([]);
      });

      await connection.start();
      await connection.invoke('JoinRoom', { user, room });
      setConnection(connection);
      console.log('messages:', messages);
      console.log('users:', users);
    } catch (e) {
      throw e;
    }
  };

  return (
    <>
      <header>ChatApp</header>
      <div className="App">
        {!connection ? <Lobby joinRoom={joinRoom} /> : <Chat />}
      </div>
      {connection ? (
        <div className={'sending-comp'}>
          <SendMessageForm />
        </div>
      ) : null}
    </>
  );
};

export default App;
