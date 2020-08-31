import React, { Component } from "react";
import { Button, Form, FormGroup } from "reactstrap";
import { Row, Col } from "antd";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
//import {connect} from 'react-redux'
//import {login} from '../../store/actions/authActions'
import { Helmet } from "react-helmet";
//import {notification, } from 'antd';
import LoadingPage from "../loadingPage";
import "./register.css";
import GoogleLogin from "react-google-login";

/*const openNotificationWithIcon = (title, data) => {
    notification['success']({
      message: title,
      description:
        data,
      onClick: () => {
        console.log('notification clicked')
      },
    });
  };*/

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      NombreLocal: "",
      loading: false,
      disabled: false,
    };

    this.submit = this.submit.bind(this);
  }
  responseGoogle = (response) => {
    //console.log(response);
    //console.log(response.profileObj.email, response.profileObj.name);
    this.setState({ email: response.profileObj.email });
    this.setState({ NombreLocal: response.profileObj.name });
    var alert = document.getElementById("google-alert");
    alert.style.display = "flex";
    //var btn = document.getElementsByClassName("googlebtn")
    this.setState({ disabled: true });
  };
  mystyle = {
    width: "99%",
    height: "auto",
    textAlign: "center",
    color: "black",
    fontWeight: "600",
    display: "none",
  };

  submit = (e) => {
    e.preventDefault();
    this.setState({ loading: true }, () => {
      axios
        .post("http://35.229.106.56:3000/auth/owner/register", {
          NombreLocal: this.state.NombreLocal,
          email: this.state.email,
          password: this.state.password,
        })
        .then((res) => {
          var x = document.getElementById("hidden");
          x.style.display = "none";
          this.setState({ loading: false });
          //openNotificationWithIcon('Usuario registrado', 'Por favor inicie sesion')
          //this.props.history.push('/')
          axios
            .post("http:///35.229.106.56:3000/auth/owner/login", {
              email: this.state.email,
              password: this.state.password,
            })
            .then((res) => {
              localStorage.setItem("jwt", res.data);
              localStorage.setItem("email", this.state.email);
              console.log(res);
              var x = document.getElementById("hidden");
              x.style.display = "flex";
              this.setState({ loading: false });
              this.props.history.push("/app/home");
            })
            .catch((error) => {
              console.log(error.response, "ERROR TRATANDO DE INICIAR SESION");
              this.setState({ loading: false });
              var x = document.getElementById("hidden");
              x.style.display = "block";
            });
        })
        .catch((error) => {
          console.log(
            error.message,
            error.response,
            "ERROR TRATANDO DE REGISTRARSE"
          );
          this.setState({ loading: false });
          var x = document.getElementById("hidden");
          x.style.display = "block";
        });
    });
  };

  render() {
    return (
      <div className="login-container">
        <Helmet>
          <title>Codify | Registrarse</title>
        </Helmet>
        <Form
          className="login-form shadow-sm p-3 mb-5 bg-white rounded"
          onSubmit={(e) => this.submit(e)}
        >
          <div className="row reg-row">
            <Col xs={{ span: 0 }} md={{ span: 12 }} lg={{ span: 14 }}>
              <div
                className="row d-flex justify-content-center align-items-center"
                style={{ height: "80%" }}
              >
                <img
                  className="register-img-form"
                  alt={"img"}
                  src={require("../../img/register.svg")}
                />
              </div>
            </Col>
            <Col
              xs={{ span: 23 }}
              md={{ span: 10 }}
              lg={{ span: 8 }}
              style={{ marginLeft: 10 }}
            >
              <h2 className="bold-text">Bienvenido!</h2>
              <label className="sub-title">Registrate para continuar</label>
              <div
                id="google-alert"
                className="alert alert-success"
                role="alert"
                style={this.mystyle}
              >
                Ingresa una contraseña para registrarte!
              </div>
              <FormGroup>
                <div className="input-group">
                  <input
                    className="input-login"
                    type="text"
                    placeholder="Nombre del local"
                    required={true}
                    name="NombreLocal"
                    value={this.state.NombreLocal}
                    onChange={(e) =>
                      this.setState({ NombreLocal: e.target.value })
                    }
                  ></input>
                  <img
                    id="email-img"
                    className="input-img"
                    alt={"img"}
                    src={require("../../img/user.svg")}
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <div className="input-group">
                  <input
                    className="input-login"
                    type="email"
                    placeholder="Email"
                    required={true}
                    name="email"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  ></input>
                  <img
                    id="email-img"
                    className="input-img"
                    alt={"img"}
                    src={require("../../img/email.svg")}
                  />
                </div>
              </FormGroup>
              <FormGroup>
                <div className="input-group">
                  <input
                    className="input-login"
                    type="password"
                    required={true}
                    minLength={6}
                    placeholder="Password"
                    name="password"
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  ></input>
                  <img
                    className="input-img"
                    alt={"img"}
                    src={require("../../img/password.svg")}
                  />
                </div>
              </FormGroup>

              <div className="text-center load"></div>
              {this.state.loading === false ? null : <LoadingPage />}
              <div
                id="hidden"
                className="alert alert-danger"
                role="alert"
                style={this.mystyle}
              >
                No se pudo Registrar
              </div>
              <br />
              <Row justify="center buttons-login">
                <Col
                  xs={{ span: 11 }}
                  md={{ span: 11 }}
                  lg={{ span: 10 }}
                  style={{ marginBottom: 20 }}
                >
                  <Button
                    className="btn-lg colorbtn-lg color btn-block "
                    id="login-btn"
                    type="submit"
                  >
                    {" "}
                    Ingresar{" "}
                  </Button>
                </Col>
                <Col xs={{ span: 2 }} md={{ span: 2 }} lg={{ span: 1 }}></Col>
                <Col
                  xs={{ span: 11 }}
                  md={{ span: 11 }}
                  lg={{ span: 13 }}
                  style={{ marginBottom: 20 }}
                  id="googlebtn"
                >
                  <GoogleLogin
                    className="googlebtn"
                    disabled={this.state.disabled}
                    clientId="629156785472-ve7888sfmie93hmo5nrh94pq96oajn1a.apps.googleusercontent.com"
                    buttonText="Registrarme"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                  {/*<Button className='btn-lg colorbtn-lg  btn-block google-btn' type='button'><i className="fa fa-spinner fa-google" ></i> Registrarme</Button>*/}
                </Col>

                <div className="reg-links text-center">
                  <a href="/" className="log-reg-links">
                    Volver
                  </a>
                </div>
              </Row>
            </Col>
          </div>
        </Form>
      </div>
    );
  }
}

/*
const mapDispatchToProps = (dispatch) =>{    
    return{
        login: (state) => dispatch(login(state))        
    }
}*/

export default RegisterForm;
