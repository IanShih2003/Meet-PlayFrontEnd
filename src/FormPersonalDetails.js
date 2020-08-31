import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (

          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <TextField
              placeholder="Ingresa tu Descripción"
              label="Descripcion"
              onChange={handleChange('description')}
              defaultValue={values.description}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Ingresa tus Idiomas"
              label="Idiomas"
              onChange={handleChange('lang')}
              defaultValue={values.lang}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Agrega tus Juegos"
              label="Juegos"
              onChange={handleChange('games')}
              defaultValue={values.games}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Indica tu Nacionalidad"
              label="Nacionalidad"
              onChange={handleChange('nat')}
              defaultValue={values.nat}
              margin="normal"
              fullWidth
            />
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Atrás</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Siguiente</Button>
          </Dialog>

    );
  }
}

export default FormPersonalDetails;