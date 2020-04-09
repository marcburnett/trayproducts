import React from 'react';

//Enabling React Router
import { Redirect } from 'react-router-dom';

//Importing Bootstrap for styling
import 'bootstrap/dist/css/bootstrap.css';

//Header is a sub-component of Form3
import Header from './header';

//Importing image to be displayed


export default class Form4 extends React.Component {
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
  
    
//If statement to enable navigation to first page in form
    if (this.state.redirect === 'restart') {
        return <Redirect to="/" />
    }

    
    return(
        <div>

    

{/* Props in Header component determines Header type to be rendered/highlighted */}
            <Header/>
        
        <div className='container border border-dark' >

            <div className='text-center mt-5 mb-5' >

            <h5>Completed.</h5>
            <p>Thank you for signing up.</p>
            
            </div>

            
            



            <div className='text-right mb-3'>
            <div className="btn-group">
  
             {/* Buttons with event handlers to call methods to enable navigation */}
             <button type="button" class="btn btn-primary " onClick={this.restart} >Restart</button>
  
            </div>
            </div>


                    </div>

 
        </div>

        
    )
}

}