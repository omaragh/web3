import React from "react";
import ManageApp from "./editSave";

export default class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            naam: "omar",
        }
    }
    
    handleClick = () => {
        const waarde = document.getElementById('name');
        this.setState({naam: waarde.value});
        console.log(this.setState({naam: waarde.value}));
     }
    render() {
        const {naam} = this.state;
        
        return (
           <div>
               {
                    <div>
                    <h2>Naam</h2>
                    <p>{naam}</p>
                    </div>
               }
               
                <ManageApp parentCallback={this.handleClick} profiel ={naam}/>
            </div>
         )    
    }   
}


