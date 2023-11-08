import React from 'react';
import {UserInterface} from '../../types';

interface UserProps {
  user: UserInterface,
  deleteUser: (id: string) => void,
}

const User: React.FC<UserProps> = ({user, deleteUser}) => {
  return (
    <div className="text-start ms-5 border border-secondary rounded p-5 mb-3">
      <div className="text-end">
        <button type="button" onClick={() => deleteUser(user.id)}>X</button>
      </div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <p>Status: {user.status ? 'active' : 'inactive'}</p>
    </div>
  );
};

export default User;