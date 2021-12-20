import React, {useEffect} from "react";
import './skillset.css';
import { skillsData } from "./skillData";
import anime from 'animejs';

export default function ShowSkills() {
  let toon = [];
  skillsData.map((info)=>{
  toon.push(info.progress);
  });

console.log(toon)
  useEffect(()=>{
    for (let i = 0; i < toon.length; i++){
      console.log(toon[i]);
      anime({
        targets: `.a${i+1}`,
        width: `${toon[i]}`, // -> from '28px' to '100%',
        easing: 'easeInOutQuad',
        direction: 'normal',
        loop: false
      });
    }
  })
      return(
        <div>
          <div className="skills">
              {skillsData.map((data) => (
              <div className="skillSet">
                <h3>{data.name}</h3><img id="imgs"alt={data.alt} src={data.image} data-ids={data.id}/> 
                  <div id="loader" className={"a"+data.id} style={{width: "0%"}}></div>{data.progress}
                
              </div>
                ))}    
            </div>
        </div>
      )
    }
