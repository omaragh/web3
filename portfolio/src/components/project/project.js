import './project.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ghost from '../images/ghostDeken.png';
import portfolioVideo from '../images/Showreel Omar Aghallaj 2021.mp4';
import spookVideo from '../images/Final.mp4';
import chefsPost from '../images/chefspost.png';

function LoadProject(){
    return(
        <>
            <Carousel className="main-slide">
                <div className="container">
                    <div className="overlay">
                        <h1>3D texture modeling - Marvelous Designer</h1>
                    </div>
                    <img className="img1" src={ghost}/>
                    
                </div>
                <div className="container">
                    <div className="overlay">
                        <h1>3D texture modeling - Marvelous Designer</h1>
                    </div>
                    <video src={portfolioVideo} controls ></video>
                </div>
                <div className="container">
                    <div className="overlay">
                        <h1>3D texture modeling - Marvelous Designer</h1>
                    </div>
                    <video src={spookVideo}  controls></video>    
                </div>
                <div className="container">
                    <div className="overlay">
                        <h1>Mobile app UI/UX design - chef'sPost</h1>
                    </div>
                    <img className="img2"src={chefsPost}/>
                    
                </div>
            </Carousel>
        </>
    )
}

export default LoadProject;