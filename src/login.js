import React, { Component, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { AuthService } from './services/auth_service';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        const service = new AuthService();
        service.loginWithEmailPassword(email, password);
    }

    return (
        <div>
            <form>
                <label>
                    Email:
            <input type="text" onChange={email => setEmail(email)} />
                </label>
                <label>
                    Contraseña:
            <input type="text" onChange={password => setPassword(password)} />
                </label>
                <button onClick={handleLogin()}>Login</button>
            </form>
            <p>Todavia no tienes cuenta?</p><Link to='/register'>Regsitrate</Link>
        </div>
    );
}

export default Login;