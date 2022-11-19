
import React, { useState, useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import {Routes, Route,useNavigate} from 'react-router-dom'
import { gapi } from 'gapi-script';

const Logout=()=>{

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
    const logOut = () => {
        console.log("logout successful")
    };

    return(
        <div>
<GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
        </div>
    )
}

export default Logout;