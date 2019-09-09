import React from 'react';

//Importing Bootstrap for styling
import 'bootstrap/dist/css/bootstrap.css';

export default class Header extends React.Component {
    constructor(props) {
      super(props);

      //Passed props update state; state determines highlighted section on Header
      this.state = {item: this.props.item,
                    title: 'Subscribe to TrayProducts Catalogue'};
  
         
    }
  

   render() {
      
    // Correct type of Header rendered based on props passed

        if (this.state.item === 'user'){
            return (   
              
              
       
                <div className="container mb-1 mt-5" >

          <h1>{this.state.title}</h1>

           <div className="row">
        {/* Bootstrap bg used to update/highlight background */}
             <div className="col-sm border border-dark py-2 text-center bg-info">
               User
             </div>
             <div className="col-sm border border-dark py-2 text-center">
               Privacy
             </div>
             <div className="col-sm border border-dark py-2 text-center">
               Done
             </div>
           </div>
             </div>
         
                 
               );
        }
        else if (this.state.item === 'privacy'){
      return (         
       
       <div className="container mb-1 mt-5">

<h1>{this.state.title}</h1>

  <div className="row">
    <div className="col-sm border border-dark text-center py-2">
      User
    </div>
    <div className="col-sm border border-dark text-center py-2 bg-info">
      Privacy
    </div>
    <div className="col-sm border border-dark py-2 text-center">
      Done
    </div>
  </div>
    </div>

        
      );

    }

    else if (this.state.item === 'done'){return (         
       
        <div className="container mb-1 mt-5">

<h1>{this.state.title}</h1>
   <div className="row">
     <div className="col-sm border border-dark  py-2 text-center">
       User
     </div>
     <div className="col-sm border border-dark py-2 text-center">
       Privacy
     </div>
     <div className="col-sm border border-dark py-2 text-center bg-info">
       Done
     </div>
   </div>
     </div>
 
         
       );
    }
    }
}