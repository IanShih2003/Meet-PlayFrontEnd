import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Dialog style={{backgroundColor: 'gray'}}
      open
      fullWidth
      maxWidth='sm'>
          
            <TextField
              style={{backgroundColor: 'white'}}
              placeholder="Ingresa tu Nombre de Usuario"
              label="Usuario"
              onChange={handleChange('user')}
              defaultValue={values.user}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Ingresa tu Edad"
              label="Edad"
              onChange={handleChange('age')}
              defaultValue={values.age}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Ingresa tu Correo Electronico"
              label="Correo Electronico"
              onChange={handleChange('email')}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Ingresa tu Contraseña"
              label="Contraseña"
              onChange={handleChange('password')}
              defaultValue={values.password}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Ingresa de nuevo tu Contraseña"
              label="Repetir Contraseña"
              onChange={handleChange('repeatpass')}
              defaultValue={values.repeatpass}
              margin="normal"
              fullWidth
            />
            <br />
            <Button
              color="yellow"
              variant="contained"
              onClick={this.continue}
            >Registrate</Button>
      </Dialog>
    );
  }
}

export default FormUserDetails;