import {Component} from 'react'
import Welcome from '../Welcome/welcome'
import {Link} from 'react-router-dom'

import './register.css'

class Register extends Component {

    state = {
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        isPasswordVisible : false,
        userCity : '',
        phoneNo : '',
        isRegistered : false,
    }

    onChangeFirstName = event => this.setState({firstName: event.target.value})

    onChangeLastName = event => this.setState({lastName: event.target.value})

    onChangeEmail = event => this.setState({email: event.target.value})

    onChangePassword = event => this.setState({password: event.target.value})

    onClickCheckbox = () => {
      this.setState(prev => ({isPasswordVisible: !prev.isPasswordVisible}))
    }

    onChangeCity = event => this.setState({userCity: event.target.value})

    onChangePhoneNo = event => this.setState({phoneNo: event.target.value})

    renderFirstNameField = () => {
        const {firstName} = this.state
        return(
            <div className='reg-details'>
            <label htmlFor='firstName' className='label' >First Name*</label>
            <input 
                type='text'
                id='firstName'
                value={firstName}
                className='input'
                placeholder='Enter First Name'
                onChange={this.onChangeFirstName}
            />
            </div>
        )
    }

    renderLastNameField = () => {
        const {lastName} = this.state
        return(
            <div className='reg-details'>
            <label htmlFor='lastName' className='label' >Last Name*</label>
            <input 
                type='text'
                id='lastName'
                value={lastName}
                className='input'
                placeholder='Enter Last Name'
                onChange={this.onChangeLastName}
            />
            </div>
        )
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

    renderCityField = () => {
        const {userCity} = this.state
        return(
            <div className='reg-details'>
            <label htmlFor='userCity' className='label' >City*</label>
            <input 
                type='text'
                id='userCity'
                value={userCity}
                className='input'
                placeholder='Enter City'
                onChange={this.onChangeCity}
            />
            </div>
        )
    }

    renderPhoneNoField = () => {
        const {phoneNo} = this.state
        return(
            <div className='reg-details'>
            <label htmlFor='phoneNo' className='label' >Phone Number*</label>
            <input 
                type='text'
                id='phoneNo'
                value={phoneNo}
                className='input'
                placeholder='Enter Phone Number'
                onChange={this.onChangePhoneNo}
            />
            </div>
        )
    }

    renderTermsAndPrivacy = () => {
        return(
            <div className='reg-term-priv'>
                <input
                    type='checkbox'
                    id='termsAndPrivacy'
                    className='inputBox'
                />
                <label htmlFor='termsAndPrivacy' className='label'>I agree to the 
                    <span> Terms and Service</span> and 
                    <span> Privacy Policy</span>
                </label>
            </div>
        )
    }

    onSubmitRegisterForm = async event => {
        event.preventDefault()
        const {fullName, email, password, phoneNo} = this.state
        const userRegisterDetails = {user_fullname: fullName, user_email: email, user_password: password, user_phone: phoneNo}
        const loginApiUrl = 'https://snapkaro.com/eazyrooms_staging/api/user_registeration'
        const options = {
            method: 'POST',
            body: JSON.stringify(userRegisterDetails),
          }
          const response = await fetch(loginApiUrl, options)
          const data = await response.json()
          console.log(data)
          this.setState({isRegistered: true, fullName: '', email: "", password:'', phoneNo: ''})
          
    }

    renderRegistrationField = () => {
        return(
            <div className='ui-page'>
                <Welcome/>
                <div className='reg-page'>
                    <img 
                    src='https://res.cloudinary.com/dpnobkqmw/image/upload/v1639302062/logo-color_bbebox.png' 
                    className='logo'
                    alt='img'/>
                    <h1 className='signUpHead'>Sign Up</h1>
                    <p className='signUpPara'>Already have an account ?
                        <Link to='/login'> Sign In</Link>
                    </p>
                
                <form onSubmit={this.onSubmitRegisterForm}>
                    <div>
                        {this.renderFirstNameField()}
                        <br/>
                        {this.renderLastNameField()}
                        <br/>
                        {this.renderEmailField()}
                        <br/>
                        {this.renderPasswordField()}
                        <br/>
                        {this.renderPhoneNoField()}
                        <br/>
                        {this.renderCityField()}
                        <br/>
                    </div>
                    <div className='reg-details'>
                        {this.renderTermsAndPrivacy()}
                        <button className='button'>Create your free account</button>
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
                    <Link to='/register'>Register Again</Link>
                </div>
            </div>
        )
    }


    render() {
        const {isRegistered} = this.state
        return(
            <>
           {isRegistered ? 
           <div> {this.renderSuccessView()} </div> 
           : <div> {this.renderRegistrationField()} </div>
           }
           </>

        )
    }
}

export default Register