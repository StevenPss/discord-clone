import React, { useEffect } from 'react';
import './App.css';
import { selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from 'react-redux';
import LoginScreen from './components/screens/LoginScreen';
import { auth } from './services/firebase';
import { login, logout } from "./features/userSlice";
import HomeScreen from './components/screens/HomeScreen';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  console.log('====================================');
  console.log(user);
  console.log('====================================');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      authUser ? dispatch(login({uid: authUser.uid, photo: authUser.photoURL, email: authUser.email, displayName: authUser.displayName})) : dispatch(logout())
    })
    return unsubscribe
  }, [dispatch])

  return (
    <div className="app">
      {user ? (
        <HomeScreen/>
      ) : (
        <LoginScreen/>
      )}
    </div>
  );
}

export default App;
