import React from "react";
import { projects } from "./data";
import './work.css'
import Child from "./cardInfo";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default class DetailsPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false,
            titel: null,
            description: null,
            icon: null,
            showCards: true,
            software: null,
            demo: null,
        }
    }
    callbackFunction = (childData, mainInfo) =>{
        this.setState({visible: childData,
        showCards: mainInfo})
    }

    doClick = (event)=>{
        let id=event.target.getAttribute("data-id");
        for (let i = 0; i < projects.length; i++){
            if(projects[i].id == id){   
             console.log("clicked on div " + projects[id-1].title);
             this.setState(()=>({
                 titel: projects[id-1].title,
                 description: projects[id-1].description,
                 software: projects[id-1].software,
                 demo: projects[id-1].demo,
             }));
            }   
        }
        this.setState({visible: true, icon: faArrowLeft, showCards: false})
    }
    
    showCards = () =>{
        return(
            <div>
                
                <div className="container">
                <h1>My Works</h1>
                    <p>Interested in my work? Down below all the projects I have worked on.</p>
                
                    {projects.map((project) => (
                    <div id="works"className="card" onClick={this.doClick}>
                        <img id="img"alt={project.alt} src={project.image} data-id={project.id}/> 
                    </div>
                    ))}
                </div>
            </div>
        )
    }
    showChild = () => {
        return <div>
                 <Child titel={this.state.titel} desc={this.state.description} icon={this.state.icon} software={this.state.software} demo={this.state.demo}status={this.state.visible} parentCallBack={this.callbackFunction}/>
               </div>
    }
    render(){
        return(
            <div>
                {this.state.showCards? this.showCards(): this.showChild()}
             </div>
        )
    }
    
}