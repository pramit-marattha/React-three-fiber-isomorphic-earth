import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import BackgroundSky from "./components/BackgroundSky";
import CameraAngle from "./components/CameraAngle";
import GlobeModel from "./components/GlobeModel";
import "./styles/App.css";

const App = () => {
  return (
    <>
      <Canvas className="canvas">
      <spotLight intensity={0.5} position={[-45, 15, 10]} penumbra={0.5} castShadow />
        <CameraAngle />
        <directionalLight intensity={1} />
        <ambientLight intensity={0.6} />
        <Suspense fallback="loading">
          <GlobeModel />
        </Suspense>
        <BackgroundSky />
      </Canvas>
    </>
  );
};

export default App;
