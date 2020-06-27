import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div style={{marginLeft: 685}}><input name="name" placeholder="Ingresar Nombre"/></div>
      <div style={{marginLeft: 685}}><input name="email" placeholder="Ingresar E-mail"/></div>
      <div style={{marginLeft: 685}}><input name="password" placeholder="Ingresar Contraseña"/></div>

      <button style={{marginLeft: 685}}>Registrarse</button>
    </div>
    
  );
}

export default App;
