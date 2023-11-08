import React, {useState} from 'react';
import {UserInterface} from '../../types';

interface Props {
  onSubmit: (user: UserInterface) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {

  const [user, setUser] = useState<UserInterface> ({
    name: '',
    email: '',
    role: '',
    status: false,
    id:  Math.random().toString(),
  });

  const addUser = (e: React.ChangeEvent<HTMLInputElement> |  React.ChangeEvent<HTMLSelectElement> ): void => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckboxChange = () => {
    setUser(prevState => {
      return {...prevState, status: !prevState.status};
    });
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(user);

    onSubmit({
      ...user,
    });

    setUser({
      name: '',
      email: '',
      role: '',
      status: false,
      id:  Math.random().toString(),
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add user</h4>
      <div className="form-group my-3">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={user.name}
          onChange={addUser}
        />
      </div>

      <div className="form-group my-3">
        <label htmlFor="description">Email</label>
        <input
          name="email"
          id="email"
          className="form-control"
          value={user.email}
          onChange={addUser}></input>
      </div>

      <div className="form-group text-start my-3">
        <label htmlFor="role">Role</label>
        <select className="ms-3" name="role" id="role"  onChange={addUser}>
          <option value="user">user</option>
          <option value="editor">editor</option>
          <option value="admin">admin</option>
        </select>
      </div>

      <div className="form-group form-group text-start my-3">
        <label htmlFor="description">Status</label>
        <input className="ms-3" name="status" type="checkbox" checked={user.status}  onChange={handleCheckboxChange}/>
      </div>

      <button type="submit" className="btn btn-primary mt-2">Create</button>
    </form>
  );
};

export default UserForm;