import React from "react";
import ShowSkills from "./skills";
export default class AboutMe extends React.Component{
    render(){
        return(
            <div>
                <div id="uitleg" className="container uitleg">
                    <h2>Skills</h2>
                    <p>Eager to learn new skills &amp; software</p>
                    <p>Over the course of the last 5 years, I have not only been interested in different 
                        type of fields but also managed to gain a handfull of experience. Mainly
                        3D design, videography and web development.
                    </p>
                </div>
                <ShowSkills/>
            </div>
        )
    }
}