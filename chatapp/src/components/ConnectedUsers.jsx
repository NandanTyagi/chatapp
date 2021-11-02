import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const ConnectedUsers = () => {
  const [users, setUsers] = useContext(UserContext);
  return (
    <div className={'connected-users'}>
      <h4>Connected Users</h4>
      <br />
      <hr />
      <br />
      {users.map((u, idx) => (
        <h6 key={idx}>{u}</h6>
      ))}
    </div>
  );
};

export default ConnectedUsers;
