import React, { useState, useEffect } from 'react'
import Login from "./components/Login";
/* スタイルシート */
import './styles/main.css';
import { auth, storeUserInfo } from "./lib/firebase";
/* コンポーネント */
import Todo from './components/Todo';
import Header from './components/Header';
function App() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      let newUser = null;
      if (user) {
        newUser = await storeUserInfo(user);
      }
      setUser(newUser);
    });
  }, []);

  return (
    <div className="container is-fluid">
      <header>
        <Header user={user}/>
      </header >
      <div>
         {user && <Todo />}
      </div>
    </div>
  );
}

export default App;
