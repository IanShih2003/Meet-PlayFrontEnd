import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {

    const colorBar = {
        color: 'white'
    }

    return(        
        <div className="SideBar">
            <img style={{width: 300, marginLeft: -10, marginTop: 10,}} src={require('./MeetPlayLogo.png')} alt=""/>
            <hr className="HR" style={{marginTop: 10,}}/>
            <div className="circlemessage">1</div>
            
            <ul>
                <Link className="ListEdit" style={colorBar} to="/">                   
                    <li>Match</li>
                </Link>
                <Link className="ListEdit" style={colorBar} to="/messages">
                    <li>Mensajes</li>                    
                </Link>
                <Link className="ListEdit" style={colorBar} to="/editprofile">
                    <li>Edit Profile</li>
                </Link>
                <Link className="ListEdit" style={colorBar} to="/preferences">
                    <li>Preferencias</li>
                </Link>
                <Link className="ListEdit" style={colorBar} to="/linkaccounts">
                    <li>Vincular Cuentas</li>
                </Link>
                <Link className="ListEdit" style={colorBar} to="/about">
                    <li>¿Quienes somos?</li>
                </Link>
            </ul>
        </div>
    );
}

export default Nav;