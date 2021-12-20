import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
import './contact.css';

export default class ContactMe extends React.Component{
    render(){
        return(
            <div className="form_container">
                
                <form className="form">
                    <h3>Contact me</h3>
                    <p>If you liked my work and are interested in my profile, do not hesitate to contact me below or by using my socials!</p>
                    <label>Name</label>
                    <input type="text" placeholder="name"/>
                    <label>Mail</label>
                    <input type="mail" placeholder="email@gmail.com"/>
                    <label>Message</label>
                    <textarea type="text"rows="5"></textarea>
                    <button >Contact me</button>
                 </form>
                 <div className="contacts">
                    <a href="https://github.com/omaragh/web3"><FontAwesomeIcon id="ig" icon={faGithub}/></a>
                    <a href="https://www.instagram.com/omar.agh/"><FontAwesomeIcon id="ig" icon={faInstagram}/></a>
                    <a href="https://www.linkedin.com/in/omar-aghallaj/"><FontAwesomeIcon id="ig" icon={faLinkedinIn}/></a>
                </div>
            </div>
        )
    }
}