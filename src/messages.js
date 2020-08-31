import React from 'react';
import { Divider } from 'material-ui';
import Nav from './Nav';

function messages(){
    return(
        <div className="messages">
            <Nav />
            <div className="avatarbar">
            <img style={{width: 80, marginLeft: 5, marginTop: 0}} src={require('./user.png')} alt=""/>
            </div>
        </div>
    );
}

export default messages;