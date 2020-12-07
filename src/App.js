import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';
import { login, logout } from "./features/userSlice";
import { selectChannelName } from './features/appSlice';
import Servers from './components/Servers';
import Topbar from './components/Topbar';
import ChatMessage from './components/ChatMessage';
import Members from './components/Members';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const channelName = useSelector(selectChannelName);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      }else{
        dispatch(logout());
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      {user ? (
          <>
            <div class="flex">
              <Servers/>
              <div class="flex-1 flex flex-col min-h-screen h-screen">
                <Topbar channelName={channelName}/>
                <div class="flex-1 flex overflow-y-hidden">
                  <Sidebar/>
                  <div class="flex-1 flex justify-between">
                    <ChatMessage/>
                    <Members/>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <Login/>
      )}
    </div>
  );
}

export default App;
