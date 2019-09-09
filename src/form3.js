import React from 'react';

//Enabling React Router
import { Redirect } from 'react-router-dom';

//Importing Bootstrap for styling
import 'bootstrap/dist/css/bootstrap.css';

//Header is a sub-component of Form3
import Header from './header';

//Importing image to be displayed
import tick from './greentick.png';

export default class Form3 extends React.Component {
    constructor(props) {
      super(props);

      //Redirect state variable enables user to navigate to the beginning of form
      this.state = {redirect: ''};

      //Binding methods
      this.restart = this.restart.bind(this);
            
    }

    //Method to update state to enable redirect
    restart(){
        this.setState({redirect: 'restart'})
    }

    render(props){
  //Console.log form data in JSON form
            console.log(`
    Name: ${JSON.stringify(this.props.data.newName)}
    Role: ${JSON.stringify(this.props.data.newRole)}
    Email: ${JSON.stringify(this.props.data.newEmail)}
    Password: ${JSON.stringify(this.props.data.newPassword)}

    Selected checkbox(es)    `);
    
    if(this.props.selectData.selectOne){console.log('Receive updates about Tray.io products by email')};
    if(this.props.selectData.selectTwo){console.log('Receive communication by email for other products created by the Tray.io team')};
    
//If statement to enable navigation to first page in form
    if (this.state.redirect === 'restart') {
        return <Redirect to="/" />
    }

    
    return(
        <div>

{/* Props in Header component determines Header type to be rendered/highlighted */}
            <Header item='done' />
        
        <div className='container border border-dark' >

            <div className='text-center mt-2' >

        {/* Displayed image */}
            <img src={tick} alt='Successful Form Submission' style={{height:'150px'}} />
            <h5>All Done.</h5>
            <p style={{color: 'green', fontSize: '15px'}}>Please verify your email address, you should have received an email from us already!</p>

            </div>
            <div class='text-right'>
           
            <button type="button" class="btn btn-primary mb-3" onClick={this.restart} >Restart</button>
            </div>
                    </div>

 
        </div>

        
    )
}

}