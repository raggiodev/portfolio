import {Canvas} from "@react-three/fiber";
import Experience from "../components/Experience";

const Model3D = () => {
  return (
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach='background' args={['transparent']} />
      <Experience />
    </Canvas>
  )
}

export default Model3D;