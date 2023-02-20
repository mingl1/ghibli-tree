import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Scene } from "./Scene";
import "./App.css";
export default function FiberContainer() {
  return (
    <Canvas camera={{ position: [14.4666, 2.0365, 5.556165], fov: 40 }} shadows>
      <Scene />
      <OrbitControls minDistance={1} maxDistance={4} />
    </Canvas>
  );
}
