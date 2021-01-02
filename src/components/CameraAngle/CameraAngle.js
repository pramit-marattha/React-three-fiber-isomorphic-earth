import React, { useRef } from "react";
import { extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const CameraAngle = () => {
    const { camera, gl: { domElement }} = useThree();
    const controls  = useRef();
    camera.position.z = 90;
    useFrame(() => controls.current.update());


    return (
        <orbitControls ref={controls} args={[camera, domElement]} autoRotate={false} enableZoom={false} />
    );
    };

export default CameraAngle;
