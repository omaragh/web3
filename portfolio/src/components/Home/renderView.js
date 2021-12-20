import React from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./model";
import Style from "./landingPage.module.css";

class RenderView extends React.Component { 
  render() {
    return (
      <div>
        <Canvas style={{height:600,width:600, alpha: true}} className={Style.rendered}>
          <Suspense fallback={null}>
            <Center position={[5, 5, 10]} > 
              <ambientLight intensity={1} />  
              <Model/>
            </Center>
            <OrbitControls/>  
          </Suspense>
        </Canvas>
      </div>
    );
  }    
}

export default RenderView;