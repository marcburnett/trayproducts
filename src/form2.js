import React from 'react';

//Importing Bootstrap
import 'bootstrap/dist/css/bootstrap.css';

//Header is a sub component of Form2
import Header from './header'

//Enabling React Router
import { Redirect } from 'react-router-dom';

export default class Form2 extends React.Component {
    constructor(props) {
      super(props);
      //Using boolean to track checkbox as checkec or not
      this.state = {first: false,
                    second: false,
      //Redirect state variable enables user to choose navigate forwards or backwards in form
                    redirect: ''};
  
      //Binding methods
      this.handleChangeFirst = this.handleChangeFirst.bind(this);
      this.handleChangeSecond = this.handleChangeSecond.bind(this);
      this.goBack = this.goBack.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    //Updating state from user selection(s) on form
    handleChangeFirst(event) {
      this.setState({first: event.target.checked});
    }
    
    handleChangeSecond(event) {
        this.setState({second: event.target.checked});
      }
  
      //Method to update state, navigating away from current page in form
      handleSubmit(event) {
                       
        event.preventDefault();
        this.setState({redirect: 'forward'});

        //Using props to access callback function to lift state to App component
        this.props.collectDataPageTwo(this.state.first, this.state.second);   
        
      }

      //Method to update state, navigating away from current page in form
      goBack(){

        this.setState({redirect: 'back'});

      };
  
    render() {

      //If statements to enable navigation forward or backwards in form
      
        if (this.state.redirect === 'forward') {
            return <Redirect to="/form3" />
        }
        
        if (this.state.redirect === 'back') {
          return <Redirect to="/" />
      }

      return (
          <div>  
        
        {/* Props in Header component determines Header type to be rendered/highlighted */}
              <Header item = 'privacy' />
          
        <div className='container border border-dark'>
        
        <form class='ml-5 mt-3'>
  
  
    <div >
      
      <div >
        {/* First checkbox to be displayed with label */}
        <div class="row text-left">
        <input class="form-check-input" type="checkbox" id="gridCheck1" first={this.state.first} onChange={this.handleChangeFirst}/>
        <label class="form-check-label" for="gridCheck1">
        Receive updates about Tray.io products by email
        </label>
      </div>

        {/* Second checkbox to be displayed with label*/}
      <div class="row mt-3">
        <input class="form-check-input" type="checkbox" id="gridCheck2" second={this.state.first} onChange={this.handleChangeSecond}/>
        <label class="form-check-label" for="gridCheck1">
        Receive communication by email for other products created by the Tray.io team
        </label>
      </div>
        
      </div>
    </div>
  
</form>

<div class='text-right mb-3'>
<div class="btn-group">
  
  {/* Buttons with event handlers to call methods to enable navigation */}
  <button type="button" class="btn btn-primary border border-dark" onClick={this.goBack}>Back</button>
  
  <button type="button" className='btn btn-success border border-dark' onClick={this.handleSubmit}>Finish</button>
  </div>
</div>
  
        </div>
        </div>
      );
    }
  }

  
  