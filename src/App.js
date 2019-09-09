import React from 'react';

//Enabling React Router
import { BrowserRouter as Router, Route } from 'react-router-dom'

//Loading components to be rendered
import Form1 from './form1';
import Form2 from './form2';
import Form3 from './form3';

//Importing Bootstrap for styling
import 'bootstrap/dist/css/bootstrap.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    //Lifting up state from individual pages
    this.state = {newName: '',
                  newRole: '',
                  newEmail: '',
                  newPassword: '',
                  selectOne: false,
                  selectTwo: false
                  };
  }

  //Callback functions to be used to lift state fron form pages
  collectData(formName, formRole, formEmail, formPassword){
    this.setState({newName: formName, newRole: formRole, newEmail: formEmail, newPassword: formPassword});
  }

  collectDataPageTwo(firstSelect, secondSelect){
    this.setState({selectOne: firstSelect, selectTwo: secondSelect});
  }

  render(){

  return (
    <div >
      
      
      <div>
       
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
          collectDataPageTwo={this.collectDataPageTwo.bind(this)} />} />
        
        <Route path="/form3" 
        render= {(props) => 
          <Form3 {...props} 

          //Passing props to Form 3 (from lifted state) to be console.logged
          data={{newName:this.state.newName, newRole: this.state.newRole,
            newEmail: this.state.newEmail, newPassword: this.state.newPassword}}

            selectData ={{selectOne:this.state.selectOne, selectTwo: this.state.selectTwo}} 
           />} />
           
           
        
           </Router>



           

           
        
      </div>
   

    </div>
  );
}
  }


