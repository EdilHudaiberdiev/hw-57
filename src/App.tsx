import './App.css';
import  {useState} from 'react';
import UserForm from './Components/UserForm/UserForm';
import {UserInterface} from './types' ;
import User from './Components/User/User';



const App = () => {

  const [users, setUsers] = useState<UserInterface[]> ([
    {id: Math.random().toString(), name: 'Mike', email: 'mikebrown@gmail.com', status: false, role: 'client'},
    {id: Math.random().toString(), name: 'John', email: 'johnjohn32@gmail.com', status: false, role: 'client'},
    {id: Math.random().toString(),name: 'Mary', email: 'maryli@gmail.com', status: true, role: 'editor'},
    {id: Math.random().toString(), name: 'Philip', email: 'philip1992@gmail.com', status: false, role: 'admin'},
  ]);

  const onSubmitForm = (user: UserInterface) => {
    setUsers(prevState => [...prevState, user]);
  };

  return (
    <>
      <header>
        hw-55
      </header>

      <main> Content
        <UserForm onSubmit={user => onSubmitForm(user)}/>

        <div>
          {users.map(user => (
            <User key={user.id} user={user}/>
          ))}
        </div>
      </main>


    </>
  );
};

export default App;
