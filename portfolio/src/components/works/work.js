import React from "react";
import './work.css';
import DetailsPage from "./details";

export default class ItemsWork extends React.Component{
    

    render(){
        return(
            <section>
            <div>
                
                <div>
                    <DetailsPage/>
                </div>
            </div>
            </section>
        )
    }
}