import React, {useState} from 'react';

interface User {
  name: string;
  email: string;
  role: string;
  status: boolean;
  id?: string;
}

interface Props {
  onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({onSubmit}) => {

  const [user, setUser] = useState<User> ({
    name: '',
    email: '',
    role: '',
    status: false
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
      id: Math.random().toString(),
      ...user,
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add user</h4>
      <div className="form-group">
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

      <div className="form-group">
        <label htmlFor="description">Email</label>
        <input
          name="email"
          id="email"
          className="form-control"
          value={user.email}
          onChange={addUser}></input>
      </div>

      <div className="form-group">
        <label htmlFor="role">Role</label>
        <select name="role" id="role"  onChange={addUser}>
          <option value="user">user</option>
          <option value="editor">editor</option>
          <option value="admin">admin</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="description">Status</label>
        <input name="status" type="checkbox" checked={user.status}  onChange={handleCheckboxChange}/>
      </div>

      <button type="submit" className="btn btn-primary mt-2">Create</button>
    </form>
  );
};

export default UserForm;