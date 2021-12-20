import React, {} from 'react';
import Style from './landingPage.module.css';
import RenderView from './renderView';

export default class StartingPage extends React.Component{
    
    render(){
        return(
            <div>
                <RenderView />
                
                <div className={Style.intro}>
                    <h1 className="test">Omar Aghallaj</h1>
                    <h2>Full Stack developer &amp; Videographer</h2>
                </div>
                
            </div>
        )
    }
}