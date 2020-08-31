import React, {Component} from 'react'
import { Button, Form, FormGroup, /*Input*/} from "reactstrap";
import {Row, Col} from 'antd';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
//import {connect} from 'react-redux'
//import {login} from '../../store/actions/authActions'
import {Helmet} from 'react-helmet'
//import {notification, } from 'antd';
import LoadingPage from '../loadingPage'
import './login.css'
import GoogleLogin from 'react-google-login'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 


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

  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  }

class LoginForm extends Component{

    constructor(props){
        super(props)

        this.state ={
            email: '',
            password:'',
            loading: false
        }

        this.submit = this.submit.bind(this)
    }
    mystyle = {
        width: '100%',
        height: 'auto',
        textAlign: 'center', 
        color: 'black',
        fontWeight: '600',
        display: 'none',
        alignItems:'center',
        verticalAlign:'middle',
    }

    submit = (e) =>{
        e.preventDefault() 
        this.setState({ loading: true }, () => {    
            axios.post('http://35.229.106.56:3000/auth/owner/login',{
                email: this.state.email, password: this.state.password
            }).then(res => {localStorage.setItem('jwt', res.data)
             localStorage.setItem('email', this.state.email);
            console.log(res)
                var x = document.getElementById("hidden");
                x.style.display = ('flex')
                this.setState({loading: false})
                //openNotificationWithIcon('Bienvenido', this.state.email)
                this.props.history.push('/app/home')
            }).catch((error) => {        
                console.log(error.response, 'ERROR TRATANDO DE INICIAR SESION');
                this.setState({loading: false})
                var x = document.getElementById("hidden");
                x.style.display = ('block')          
            })
        })          
    }

    UNSAFE_componentWillMount(){
        if(localStorage.getItem('jwt'))
        {         
            this.props.history.push('/app/home')
        }     
    }
    
    render() { 
        
        return (               
                <div className='login-container login-component'>  
                <div className='background'></div>                              
                <Helmet>
                 <title>Codify | Login</title>
                 </Helmet>    
                 <div className='login-container'>            
                    <Form className="login-form"  onSubmit = {e => this.submit(e)}>     
                        <div className='row d-flex justify-content-center logo-login'>
                            <img className='login-img' alt={'logo'} src={require('../../img/login-logo.svg')}/>
                        </div>                  
                        <div className='row align-self-center' >
                            <Col xs={{ span: 0}} md={{ span: 12}} lg={{ span: 14}}>
                                <div className='row d-flex justify-content-center align-items-center' style={{height:'80%'}}>
                                    <img className='login-img-form' alt={'img'} src={require('../../img/login.svg')}/>
                                </div>
                            </Col>
                            <Col xs={{ span: 23}} md={{ span: 10}} lg={{ span: 8}} style={{marginLeft:10}}>
                                <h2 className='bold-text'>Bienvenido de nuevo!</h2>
                                <label className='sub-title'>Inicia sesión para continuar</label>
                                <FormGroup>
                                    <div className="input-group">
                                        <input className='input-login' type='email' placeholder='Email' required={true} name='email'  onChange={e => this.setState({email: e.target.value})}></input>
                                        <img id='email-img' className='input-img' alt={'img'} src={require('../../img/email.svg')}/>
                                    </div>
                                </FormGroup>
                                <FormGroup>
                                    <div className="input-group">                                        
                                        <input className='input-login' type='password' placeholder='Contraseña' name='password' required={true} onChange={e => this.setState({password: e.target.value})}></input>
                                        <img className='input-img' alt={'img'} src={require('../../img/password.svg')}/>
                                    </div>
                                </FormGroup>
                                <div className='text-center load'>
                                </div>
                                {this.state.loading === false?  null : <LoadingPage/> } 
                                <div id='hidden' className="alert alert-danger" role="alert" style={this.mystyle}>
                                Usuario o contraseña incorrectos
                                </div>  
                                <br/>
                                <Row justify="center buttons-login">
                                <Col xs={{ span: 10}} md={{ span: 10}} lg={{ span: 10}} style={{marginBottom:20}}>              
                                <Button className='btn-lg colorbtn-lg color btn-block ' id='login-btn' type='submit'> Entrar </Button>
                                </Col> 
                                <Col xs={{ span: 2}} md={{ span: 2}} lg={{ span: 1}}></Col> 
                                <Col xs={{ span: 12}} md={{ span: 12}} lg={{ span: 13}} style={{marginBottom:20}}>    
                                        <GoogleLogin className='googlebtn'
                                            clientId="629156785472-ve7888sfmie93hmo5nrh94pq96oajn1a.apps.googleusercontent.com"
                                            buttonText="Iniciar sesión"
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            cookiePolicy={'single_host_origin'}
                                        />
                                           {/* <Button className='btn-lg colorbtn-lg  btn-block google-btn' type='button'><i className="fa fa-spinner fa-google" ></i> Iniciar sesión</Button>*/}
                                        </Col> 
                                        <br/><br/><br/><br/>
                                        <div className='text-center'>
                                            <a href='/registrarse' className='log-reg-links'>Registrarse</a>
                                            <span className='p-2'>|</span>
                                            <a href='/recuperar-cuenta' className='log-reg-links'>Olvide la contraseña</a>
                                            <br/><br/>
                                    </div>
                                    </Row> 
                            </Col>
                        </div>
                    </Form>
                </div>
                </div>
          )
    }
}



export default LoginForm