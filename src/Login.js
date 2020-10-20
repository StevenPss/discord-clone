import { Button } from '@material-ui/core'
import { auth, provider } from './firebase';
import React from 'react'
import "./Login.css"

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider)
        .catch( err => alert(err.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png " alt=""/>
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
