import React from 'react';



//Enabling React Router
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Loading components to be rendered
import Form1 from './form1';
import Form2 from './form2';
import Form3 from './form3';
import Form4 from './form4';


//Importing Bootstrap for styling
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    //Lifting up state from individual pages
    this.state = {newName: '',
                  newRole: '',
                  newEmail: '',
                  newPassword: '',
                  selectOne: false,
                  selectTwo: false,
                  newSelectOne:'',
                  newSelectTwo: ''
                  };
  }

  //Callback functions to be used to lift state fron form pages
  collectData(formName, formRole, formEmail, formPassword){
    this.setState({newName: formName, newRole: formRole, newEmail: formEmail, newPassword: formPassword});
  }

  collectDataPageTwo(firstSelect, secondSelect){
    this.setState({selectOne: firstSelect, selectTwo: secondSelect});
    
  }
   
  updatePreference(){
    

    if(this.state.selectOne){
      this.setState({newSelectOne:'Receive updates about TrayProducts by email'})
      
    }

    if(this.state.selectTwo){
      
      this.setState({newSelectTwo:'Receive communication by email for other products created by TrayProducts'})
    }
   }
  

  render(){

    
  return (
    <div >
      
      
      <div className = 'container'>
       
       <Router>

        <Route exact path="/" 
        render= {(props) => 
        <Form1 {...props} data={{newName:this.state.newName, newRole: this.state.newRole,
        newEmail: this.state.newEmail, newPassword: this.state.newPassword}} 
        
          //Passing callback function collect data from Form 1
          collectData={this.collectData.bind(this)} />} />
        
        <Route path="/form2" 
        render= {(props) => 
          <Form2 {...props} selectData ={{selectOne:this.state.selectOne, selectTwo: this.state.selectTwo}} 

          //Passing callback function collect data from Form 2
          collectDataPageTwo={this.collectDataPageTwo.bind(this)} 

          updatePreference={this.updatePreference.bind(this)}

           />} />
        
        <Route path="/form3" 
        render= {(props) => 
          <Form3 {...props} 

          //Passing props to Form 3 (from lifted state) to be console.logged
          data={{newName:this.state.newName, newRole: this.state.newRole,
            newEmail: this.state.newEmail, newPassword: this.state.newPassword}}

            selectData ={{selectOne:this.state.selectOne, selectTwo: this.state.selectTwo,
            newSelectOne: this.state.newSelectOne, newSelectTwo: this.state.newSelectTwo}} 

            updatePreference={this.updatePreference.bind(this)}
           />} />

            <Route path="/form4" 
        render= {(props) => 
          <Form4 {...props} 

          
           />} />
           
           
        
           </Router>



           

           
        
      </div>
   

    </div>
  );
}
  }


