import React from 'react';
import {UserInterface} from '../../types';

interface UserProps {
  user: UserInterface
}

const User: React.FC<UserProps> = ({user}) => {
  return (
    <div>
      <p>Name {user.name}</p>
      <p>Email {user.email}</p>
      <p>Role {user.role}</p>
      <p>Status {user.status ? 'active': 'inactive'}</p>
    </div>
  );
};

export default User;