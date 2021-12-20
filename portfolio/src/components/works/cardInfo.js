import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default class Child extends React.Component{ 
    sendData = ()=>{
        this.props.parentCallBack(false, true);
    }
    
    showData = ()=>{
        let arraySoftware = this.props.software

        return (
            <div className="wrappedEen">
                <FontAwesomeIcon id="backW" icon={this.props.icon} onClick={this.sendData}/>
                <div id="een">
                    <article>
                        <h1>{this.props.titel}</h1>
                        <p className="desc">{this.props.desc}</p>
                    </article>
                        {this.props.demo != null? <video id="vid" src={this.props.demo} controls/>: null}
                        <div id="softwareImgs">
                        <h4>Software used</h4>
                        {arraySoftware.map((data) => (   
                            <img id="importedImg"src={data} style={{width: "50px", paddingLeft: "0.2em"}}/>
                        ))}
                        </div>
                </div>
            </div>
        )
    }
    
    render(){
        return <div >
            {this.props.status? this.showData(): null}
        </div>
    }

}