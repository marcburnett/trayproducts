import React from 'react';

//Enabling React Router
import { Redirect } from 'react-router-dom';

//Importing Bootstrap for styling
import 'bootstrap/dist/css/bootstrap.css';

//Header is a sub-component of Form3
import Header from './header';


export default class Form3 extends React.Component {
    constructor(props) {
      super(props);

      //Redirect state variable enables user to navigate to the beginning of form
      this.state = {
          redirect: '',
          
    
    
    };

      //Binding methods
      this.restart = this.restart.bind(this);
      this.handleEnd = this.handleEnd.bind(this);
            
    }

    componentWillMount(props){
        this.props.updatePreference();
    }

    handleEnd(){
        //this.restart();
        this.setState({redirect: 'forward'})
    }

    //Method to update state to enable redirect
    restart(){
        this.setState({redirect: 'restart'})
    }

    render(props){

        
//   //Console.log form data in JSON form
//             console.log(`
//     Name: ${JSON.stringify(this.props.data.newName)}
//     Role: ${JSON.stringify(this.props.data.newRole)}
//     Email: ${JSON.stringify(this.props.data.newEmail)}
//     Password: ${JSON.stringify(this.props.data.newPassword)}

//     Selected checkbox(es)    `);
    
//     if(this.props.selectData.selectOne){
       
//         console.log('Receive updates about Tray.io products by email')};
    
//         if(this.props.selectData.selectTwo){
           
//             console.log('Receive communication by email for other products created by the Tray.io team')};
    
//If statement to enable navigation to first page in form
    if (this.state.redirect === 'restart') {
        return <Redirect to="/" />
    }

    if (this.state.redirect === 'forward') {
        return <Redirect to="/form4" />
    }

    
    return(
        <div>

    

{/* Props in Header component determines Header type to be rendered/highlighted */}
            <Header item='done' />
        
        <div className='container border border-dark' >

            <div className='mt-4' >

        {/* Displayed image */}
            <h5>You have submitted the information below...</h5>
            <br></br>
            <p><span className='bold'>Name:</span> {this.props.data.newName}  </p>
            <p><span className='bold'>Role:</span> {this.props.data.newRole}</p>
            <p><span className='bold'>Email:</span> {this.props.data.newEmail}</p>
            <p><span className='bold'>Preferences:</span> </p>
            <ul style={{listStyle:'none'}}>
                <li className='mb-2'> <p>{this.props.selectData.newSelectOne}</p> </li>
                <li> <p>{this.props.selectData.newSelectTwo}</p> </li>
            </ul> 
          
                   
            

          
            </div>
            



            <div className='text-right mb-3'>
            <div className="btn-group">
  
             {/* Buttons with event handlers to call methods to enable navigation */}
             <button type="button" className="btn btn-primary " onClick={this.restart} >Restart</button>
  
            <button type="button" className='btn btn-success border border-dark' onClick={this.handleEnd} >Submit</button>
            </div>
            </div>


                    </div>

 
        </div>

        
    )
}

}