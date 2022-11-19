
import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { gapi } from 'gapi-script';

const Login = () => {
    const navigate = useNavigate();
    const clientId = '784551715082-og8e5jqikgcgok2h58gu4ioar2u5vlgh.apps.googleusercontent.com';
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
         navigate('/upload');
        
        console.log("login successful");
    };

    const onFailure = (err) => {
        console.log('failed', err);
    };

    return (
        <div>
            <h2>React Google Login</h2>
            <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>


    )
}

export default Login;