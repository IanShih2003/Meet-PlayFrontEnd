import React from 'react';

function Register() {

    return (

        <div className="register">
            <form className="formreg" action="">
                <div className="input"><input name="name" placeholder="Ingresar Nombre" /></div>
                <div style={{ marginLeft: 685, }}><input name="email" placeholder="Ingresar E-mail" /></div>
                <div style={{ marginLeft: 685, }}><input name="password" placeholder="Ingresar Contraseña" /></div>
                <button style={{ marginLeft: 685 }}>Registrarse</button>
            </form>
        </div>
    );
}

export default Register;