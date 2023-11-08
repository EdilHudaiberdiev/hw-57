import React from 'react';
import User from '../User/User';
import {UserInterface} from '../../types';

interface UserProps {
  users: UserInterface[],
  deleteUser: (id: string) => void,
}

const Users: React.FC<UserProps> = ({users, deleteUser}) => {
  return (
    <div>
      {users.map(user => (
        <User key={user.id} user={user} deleteUser={deleteUser}/>
      ))}
    </div>
  );
};

export default Users;