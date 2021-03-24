import { Button } from '@material-ui/core'
import { auth, provider } from '../../services/firebase';
import React from 'react'
import "./LoginScreen.css"


function LoginScreen() {
    const signInWithGoogleProvider = () => {
        auth.signInWithPopup(provider)
        .catch( err => alert(err.message));
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <Button
                onClick={signInWithGoogleProvider}
                variant="contained"
                color="primary"
                style={{
                    backgroundColor: "#1F2225",
                }}
                className="customForm__btnGoogle font-weight-bold mt-3 mb-3">
                Sign in with Google
            </Button>
        </div>
    )
}

export default LoginScreen
