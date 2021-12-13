import {Component} from 'react'
import {Link} from 'react-router-dom'

import Welcome from '../Welcome/welcome'

import {
  FiFacebook, FiTwitter, BsGithub
} from 'react-icons/all'

import './login.css'

const fb = 'https://www.facebook.com/login'
const tw = 'https://www.twitter.com/login'
const git = 'https://www.github.com/login'

class Login extends Component {

    state = {
        email : '',
        password : '',
        isPasswordVisible : false,
        isLoggedIn: false,
    }

    onChangeEmail = event => this.setState({email: event.target.value})

    onChangePassword = event => this.setState({password: event.target.value})
 
    onClickCheckbox = () => {
      this.setState(prev => ({isPasswordVisible: !prev.isPasswordVisible}))
    }

    renderEmailField = () => {
        const {email} = this.state
        return(
            <div className='reg-details'>
            <label htmlFor='email' className='label' >Email Address*</label>
            <input 
                type='text'
                id='email'
                value={email}
                className='input'
                placeholder='Enter Email Address'
                onChange={this.onChangeEmail}
            />
            </div>
        )
    }

    renderPasswordField = () => {
        const {isPasswordVisible, password} = this.state
        return(
            <div className='reg-details'>
              <label htmlFor='password' className='label' >Password*</label>
              <input 
                  type={isPasswordVisible ? 'text' : 'password'}
                  id='password'
                  value={password}
                  className='input'
                  placeholder='Enter password'
                  onChange={this.onChangePassword}
              />
              <div className='eye'>
                  <input
                      type="checkbox"
                      id="show-password"
                      checked={isPasswordVisible}
                      onChange={this.onClickCheckbox}
                      className="inputBox"
                  />
                  <label htmlFor="show-password" className="input-label">Show Password</label>
              </div>
            </div>
        )
    }

    onSubmitLoginForm = async event => {
        event.preventDefault()
        const {email, password} = this.state
        const userLoginDetails = {user_email: email, user_password: password}
        const loginApiUrl = 'https://snapkaro.com/eazyrooms_staging/api/userlogin'
        const options = {
            method: 'POST',
            body: JSON.stringify(userLoginDetails),
          }
          const response = await fetch(loginApiUrl, options)
          const data = await response.json()
          console.log(data)
          if (data.status === true){
            this.setState({isLoggedIn: true})
        }
    }

    renderLoginPage = () => {
        return(
            <div className='ui-page'>
            <Welcome/>
            <div className='signIn-page'>
                <img 
                src='https://res.cloudinary.com/dpnobkqmw/image/upload/v1639302062/logo-color_bbebox.png' 
                className='logo'
                alt='img'/>
                <h1 className='signInHead'>Sign In</h1>
                <p className='signInPara'>Dont have an account ?
                    <Link to='/register'> Sign Up</Link>
                </p>
            <form onSubmit={this.onSubmitLoginForm}>
                <div>
                    {this.renderEmailField()}
                    <br/>
                    {this.renderPasswordField()}
                    <br/>
                </div>
                <div className='signIn-details'>  
                    <button className='button'>Sign In</button>
                    <hr className='sep'/>
                    <p className='signInPara'>---Or continue with---</p>
                    <div className='social-buttons'>
                      <a href={fb} className='social' >
                        <FiFacebook className='social-button'/>
                      </a>
                      <a href={tw} className='social'>
                        <FiTwitter className='social-button'/>
                      </a>
                      <a href={git} className='social'>
                        <BsGithub className='social-button'/>
                      </a>
                    </div>
                </div>
            </form>
            </div>
        </div>
        )
    }

    renderSuccessView = () => {
        return(
            <div className='ui-page'>
                <Welcome/>
                <div className='success-page'>
                    <img 
                    src='https://res.cloudinary.com/dpnobkqmw/image/upload/v1639302062/logo-color_bbebox.png' 
                    className='logo'
                    alt='img'/>
                    <h1 className='signInHead'>Successfully Logged In</h1>
                </div>
            </div>
        )
    }

    render() {
        const{isLoggedIn} = this.state
        return(
            <>
           {isLoggedIn ? 
           <div> {this.renderSuccessView()} </div> 
           : <div> {this.renderLoginPage()} </div>
           }
           </>
        )
    }
}

export default Login