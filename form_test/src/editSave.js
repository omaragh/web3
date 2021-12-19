import React from 'react';

class ManageApp extends React.Component{

state= {
    showForm: false,

}
    onTrigger = (event) =>{
        this.props.parentCallback(event.target.value);
        this.state.showForm = false;
        event.preventDefault();
    }

showForm = () => {
    console.log(this.props.profiel)
   return (
     <div> 
         
            <form id= "add-app" >

            <label>Name</label>
            <input id="name" type="text" defaultValue={this.props.profiel}/> 
   
            <label>Birthdate </label>
            <input type="text"/>
   
            <label>Bio : </label>
            
            <input type="submit" value="Save" onClick={this.onTrigger}/> 
            
            </form>
         
    
      </div>
     );
 }

render(){
    return (
        <div className='manage-app'>
        <button onClick={() => this.setState({showForm: true}) }>Edit</button>
        {this.state.showForm ? this.showForm() : null}
        </div>
    );
}

}

export default ManageApp