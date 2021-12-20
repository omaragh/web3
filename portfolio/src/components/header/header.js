import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import './header.css';
import ItemsWork from "../works/work";
import StartingPage from "../Home/landingPage";
import AboutMe from "../About/about";
import ContactMe from "../contact/contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
export default class Nav extends React.Component{
    
    render(){
        
        return(
            <div>
                <nav id='menu' className="menu">
                    <ul>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about" >About</Link></li>
                        <li><Link to="/work">Work</Link></li>
                        <li><Link to="/">Home</Link></li>    
                    </ul>
                 </nav>
                 
                
                 
                 
                <Routes>
                        <Route path="/" element={<StartingPage/>}/>
                        <Route path="/work" element={<ItemsWork />}/>
                        <Route path="/about" element={<AboutMe />}/>
                        <Route path="/contact" element={<ContactMe />}/>
                </Routes>
            </div>
        )
    }
}