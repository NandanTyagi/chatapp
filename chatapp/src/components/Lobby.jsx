import React, { useState } from 'react';

const Lobby = ({ joinRoom }) => {
  const [user, setUser] = useState('');
  const [room, setRoom] = useState('');

  const handelSelect = (e) => {
    if (e.target.value !== '--Pick a room--') setRoom(e.target.value);
  };

  const roomOptions = [
    { value: '--Pick a room--', label: '--Pick a room--' },
    { value: 'general', label: 'General' },
    { value: 'skiftbyte', label: 'Skiftbyte' },
    { value: 'akut', label: 'Akut' },
  ];
  return (
    <div className="lobby">
      <form
        className={'lobby-form'}
        onSubmit={(e) => {
          e.preventDefault();
          joinRoom(user, room);
        }}
      >
        <input
          placeholder="Enter username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <br />
        <select className={'select'} value={room} onChange={handelSelect}>
          {roomOptions.map((option, i) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <br />
        <button disabled={!user || !room}>Join</button>
      </form>
    </div>
  );
};

export default Lobby;
