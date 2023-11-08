import './App.css';
import React, {useState} from 'react';
import UserForm from './Components/UserForm/UserForm';

interface Props {

}

function App() {

  const [users, setUsers] = useState<Props[]> ([
    {name: 'Mike', email: 'mikebrown@gmail.com', activity: false, role: 'client'},
    {name: 'John', email: 'johnjohn32@gmail.com', activity: false, role: 'client'},
    {name: 'Mary', email: 'maryli@gmail.com', activity: true, role: 'editor'},
    {name: 'Philip', email: 'philip1992@gmail.com', activity: false, role: 'admin'},
  ]);

  return (
    <>
      <header>
        hw-55
      </header>

      <main> Content
        <UserForm onSubmit={user => console.log(user)}/>
        {/*<Users>*/}
        {/*</Users>*/}
      </main>
    </>
  );
}

export default App;
