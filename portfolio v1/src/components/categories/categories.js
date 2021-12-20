import React from 'react';
import {Routes, Route, Link} from "react-router-dom";
import styles from './categories.module.css';
import LoadProject from '../project/project';
import About from '../about/about';
import Contact from '../contact/contact';

function Home(){
    return (
        <div className={styles.body}>
            <p><Link to="/portfolio" style={{ textDecoration: 'none', color: "white" }}>Portfolio</Link></p>
            <p><Link to="/about" style={{ textDecoration: 'none', color: "#30bf04" }}>About me</Link></p>
            <p><Link to="/contact" style={{ textDecoration: 'none', color: "white" }}>contact</Link></p>
        </div>
    )
}

class Categories extends React.Component{
    render(){
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/portfolio" element={<LoadProject />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
            </div>
        )
    }
}
export default Categories;