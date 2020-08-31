import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { DialogContent } from '@material-ui/core';
import { Link } from 'react-router-dom';

export class Success extends Component {
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
    return (
      <div>
        <h1 style={{textAlign: 50}}>Ya estas registrado!</h1>
        <p>Clickea en el Boton para comenzar a Matchear.</p>
        <Link className="btnreg2" to="/">Match</Link>
      </div>

    );
  }
}

export default Success;