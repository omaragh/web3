import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import cube from '../images/cube.gltf'

export default function Model() {
  const gltf = useLoader(GLTFLoader, cube);
    return (
      <>
        <primitive object={gltf.scene} scale={0.3} />
      </>
    );
};
