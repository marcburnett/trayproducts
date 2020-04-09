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
              
              
       
                <div className="container mb-1" >

<div className='mb-1'>
<h2 className='pb-5 text-primary text-center'>{this.state.title}</h2>
</div>


           <div className="row">
        {/* Bootstrap bg used to update/highlight background */}
             <div className="borderRadius col-sm border border-dark py-2 text-center bg-success text-white">
               User Information
             </div>
             <div className="borderRadius col-sm border border-dark py-2 text-center">
               Communication Preferences
             </div>
             <div className="borderRadius col-sm border border-dark py-2 text-center">
               Verify and Submit
             </div>
           </div>
             </div>
         
                 
               );
        }
        else if (this.state.item === 'privacy'){
      return (         
       
        <div className="container mb-1" >

<div className='mb-1'>
<h2 className='pb-5 text-primary text-center'>{this.state.title}</h2>
</div>

<div className="row">
        {/* Bootstrap bg used to update/highlight background */}
             <div className="borderRadius col-sm border border-dark py-2 text-center">
               User Information
             </div>
             <div className="borderRadius col-sm border border-dark py-2 text-center bg-success text-white">
               Communication Preferences
             </div>
             <div className="borderRadius col-sm border border-dark py-2 text-center">
               Verify and Submit
             </div>
           </div>
    </div>

        
      );

    }

    else if (this.state.item === 'done'){return (         
       
      <div className="container mb-1" >

      <div className='mb-1'>
      <h2 className='pb-5 text-primary text-center'>{this.state.title}</h2>
      </div>
      
<div className="row">
        {/* Bootstrap bg used to update/highlight background */}
             <div className="borderRadius col-sm border border-dark py-2 text-center">
               User Information
             </div>
             <div className="borderRadius col-sm border border-dark py-2 text-center">
               Communication Preferences
             </div>
             <div className="borderRadius col-sm border border-dark py-2 text-center bg-success text-white">
               Verify and Submit
             </div>
           </div>
     </div>
 
         
       );
    }

    else return (         
       
      <div className="container mb-1" >

      <div className='mb-1'>
      <h2 className='pb-5 text-primary text-center'>{this.state.title}</h2>
      </div>

       </div>
     );
  }


    
}