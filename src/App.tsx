import './App.css';
import React, {useState} from 'react';
import UserForm from './Components/UserForm/UserForm';

interface User {
  name: string;
  email: string;
  role: string;
  status: boolean;
  id: string;
}

const App = () => {

  const [users, setUsers] = useState<User[]> ([
    {id: Math.random().toString(), name: 'Mike', email: 'mikebrown@gmail.com', status: false, role: 'client'},
    {id: Math.random().toString(), name: 'John', email: 'johnjohn32@gmail.com', status: false, role: 'client'},
    {id: Math.random().toString(),name: 'Mary', email: 'maryli@gmail.com', status: true, role: 'editor'},
    {id: Math.random().toString(), name: 'Philip', email: 'philip1992@gmail.com', status: false, role: 'admin'},
  ]);

  const onSubmitForm = (user: User) => {
    setUsers(prevState => [...prevState, user]);
  };

  return (
    <>
      <header>
        hw-55
      </header>

      <main> Content
        <UserForm onSubmit={user => onSubmitForm(user)}/>
      </main>
    </>
  );
};

export default App;
