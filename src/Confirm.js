import React, { Component } from 'react';
import { AuthService } from './services/auth_service'
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

export class Confirm extends Component {

  handleRegister = (user, age, email, password, repeatpass, description, lang, games, rol, rank, nat) => {
    var registro;
    const service = new AuthService();
    registro = service.register(user, age, email, password, repeatpass, description, lang, games, rol, rank, nat);
    if (registro) {
      return <Redirect push to='/'/>
    }
    else {
      console.log('no se pudo registrar')
    }
  }

  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { user, age, email, password, repeatpass, description, lang, games,rol, rank, nat }
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <List>
              <ListItem>
                <ListItemText primary="Nombre de Usuario" secondary={user} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Edad" secondary={age} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Correo Electronico" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Descripción" secondary={description} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Idiomas" secondary={lang} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Juegos" secondary={games} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Juegos" secondary={rol} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Juegos" secondary={rank} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Nacionalidad/es" secondary={nat} />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Atrás</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={() => this.handleRegister(user, age, email, password, repeatpass, description, lang, games, rol, rank, nat)}
            >Confirmar y Continuar</Button>
          </Dialog>
        </>
      </MuiThemeProvider >
    );
  }
}

export default Confirm;