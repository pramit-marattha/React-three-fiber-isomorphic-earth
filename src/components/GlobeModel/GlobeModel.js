import React, { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "react-three-fiber";
import earth_ball from "./exported/earth_ball.glb";

const GlobeModel = () => {
  const planet = useRef();
  const { nodes } = useLoader(GLTFLoader, `${earth_ball}`);
  useFrame(() => (planet.current.rotation.y += 0.0222));

  return (
    <mesh ref={planet} visible position={[0, 0, 0]} geometry={nodes.earth69420.geometry} material={nodes.earth69420.material} />
  );
};

export default GlobeModel;
