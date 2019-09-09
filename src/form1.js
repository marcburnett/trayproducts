import React from 'react';

//Importing Bootstorap for styling
import 'bootstrap/dist/css/bootstrap.css';

//Header is a sub component of Form1
import Header from './header'

//Enabling React Router
import { Redirect } from 'react-router-dom';

export default class Form1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '',
                    role: '',
                    email: '',
                    password: '',
                    nameError:'',
                    emailError: '',
    //Errors are called from state
                    passwordNumberError: '',
                    passwordUppercaseError: '',
                    passwordLowercaseError: '',
                    passwordLengthError: '',
                    passwordCount: 0,
                    isValid: false }

    //Binding methods  
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeRole = this.handleChangeRole.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    //Passing form data to state
    handleChangeName(event) {
      this.setState({name: event.target.value});
    }
    handleChangeRole(event) {
        this.setState({role: event.target.value});
      }
    handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }
    handleChangePassword(event) {
        this.setState({password: event.target.value});
      }
  
      //Submitting form data
      handleSubmit(event) {

        //Using props to access callback function to lift state to App component
         this.props.collectData(this.state.name, this.state.role, this.state.email, this.state.password);
        
         //Function to validate form data
         // this.validate calls the 3 functions below it; it all passing form is submitted
         this.validate();

         //Functions below return errors and prevent form from submitting
         this.validateName();
         this.validateEmail();
         this.validatePassword();
         
        
        event.preventDefault();

        }

      //Name field in form cannot be empty; function returns a boolean to update state
          validateName(){
            let nameError = 'Name is required';
  
            if (this.state.name < 1){
              this.setState({nameError});
            return false;

            }

          else return true;
      }

      //Email string must contain symbol '@'; function returns a boolean to iupdate state
      validateEmail(){
        let emailError = 'Please provide a valid email address';

        if (!this.state.email.includes('@')){
          this.setState({emailError});
          return false;
        } 

        else return true;

      }

      //4 conditions must be met for Password to be accepted; function returns a boolean to update state
      validatePassword(){

        //Error strings displayed to user
        let passwordNumberError = 'Please include a number in the password';
        let passwordUppercaseError = 'Please include an uppercase letter in the password';
        let passwordLowercaseError = 'Please include a lowercase letter in the password';
        let passwordLengthError = 'Please provide a password with more than 9 characters';

        //Variable tracks errors in Password
        // If count=0; Password has no error and is accepted
        let count = 0;

        //Check for Password containing a number
        if (!this.state.password.match(/[0-9]/g)){
          //State is updated; error displayed
            this.setState({passwordNumberError});
          //Augment count variable if error exists
            count ++;
      }

      //Check for Password containing an uppercase letter
      if (!this.state.password.match(/[A-Z]/g)){
        this.setState({passwordUppercaseError});
        count ++;
  }
  //Check for Password containing a lowercase number
  if (!this.state.password.match(/[a-z]/g)){
    this.setState({passwordLowercaseError});
    count ++;
}

//Check for Password having > 9 characters
if (this.state.password.length <= 9 ){
    this.setState({passwordLengthError});
    count ++;
}

//Function returns a boolean to update state
if (count === 0){
    return true;
}

    else return false;

    }

      validate(){
        //If all fields are validated; set isValid (full form validation) in state to true
        
          if(this.validateName() && this.validateEmail() && this.validatePassword()){
              this.setState({isValid : true});
          }
        
      }
    
  
    render() {
      //When isValid in state is true, redirect user to next page in form
        if (this.state.isValid) {

           return <Redirect to="/form2" />
        }
      return (
          <div>

      {/* Props passed to Header component determines type of Header rendered/highlighted     */}
              <Header item = 'user' />
          
          <div className='container border border-dark'>
        <form onSubmit={this.handleSubmit}>
  <div className="form-group mt-3">
    {/* Name Field with Label */}
    <label htmlFor="formGroupExampleInput">Name <span style={{color:'red'}}>*</span></label>
    <input type="text" className="form-control"  placeholder="Name" name={this.state.name} onChange={this.handleChangeName}/>
    {/* Name error validation to be displayed from state */}
    <div style={{color:'red'}}>{this.state.nameError}</div>
  </div>
  

  <div className="form-group">
    {/* Role Field with Label */}
    <label htmlFor="formGroupExampleInput2">Role</label>
    <input type="text" className="form-control"  placeholder="Role" role={this.state.role} onChange={this.handleChangeRole}/>
  </div>
  
  <div className="form-group">
    {/* Email Field with Label */}
    <label htmlFor="formGroupExampleInput">Email <span style={{color:'red'}}>*</span></label>
    <input type="text" className="form-control"  placeholder="Email" email={this.state.email} onChange={this.handleChangeEmail}/>
    {/* Email error validation to be displayed from state */}
    <div style={{color:'red'}}>{this.state.emailError}</div>
  </div>
  
  <div className="form-group">
    {/* Password Field with Label */}
    <label htmlFor="formGroupExampleInput2">Password <span style={{color:'red'}}>*</span></label>
    <input type="password" className="form-control"  placeholder="Password" password={this.state.password} onChange={this.handleChangePassword} />
    {/* Password error(s) validation to be displayed from state */}
    <div style={{color:'red'}}>{this.state.passwordNumberError}</div>
    <div style={{color:'red'}}>{this.state.passwordUppercaseError}</div>
    <div style={{color:'red'}}>{this.state.passwordLowercaseError}</div>
    <div style={{color:'red'}}>{this.state.passwordLengthError}</div>
  </div>
         
    {/* Button to submit form */}
    <div className='text-right'>
  <button type="submit" className='btn btn-success border border-dark mb-3'>Next</button> 
    </div>

         
        </form>
        </div>
        </div>
      );
    }
  }

  
  