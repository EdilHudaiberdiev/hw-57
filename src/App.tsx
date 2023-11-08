import './App.css';
import {useState} from 'react';
import UserForm from './Components/UserForm/UserForm';
import {UserInterface} from './types' ;
import Users from './Components/Users/Users';


const App = () => {

  const [users, setUsers] = useState<UserInterface[]>([
    {id: Math.random().toString(), name: 'Mike', email: 'mikebrown@gmail.com', status: false, role: 'client'},
    {id: Math.random().toString(), name: 'John', email: 'johnjohn32@gmail.com', status: false, role: 'client'},
    {id: Math.random().toString(), name: 'Mary', email: 'maryli@gmail.com', status: true, role: 'editor'},
    {id: Math.random().toString(), name: 'Philip', email: 'philip1992@gmail.com', status: false, role: 'admin'},
  ]);

  const onSubmitForm = (user: UserInterface) => {
    setUsers(prevState => [user, ...prevState]);
  };

  const deleteUser = (id: string) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="d-flex">
      <div className="w-50">
        <UserForm onSubmit={user => onSubmitForm(user)}/>
      </div>

      <div className="w-50 users overflow-auto">
        {users.length > 0 ?
          <Users users={users} deleteUser={deleteUser}/>
          :
          <p>No users</p>
        }

      </div>

    </div>
  );
};

export default App;