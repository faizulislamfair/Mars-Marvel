import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const MarsModel = () => {

    const gltf = useLoader(GLTFLoader, '/mars.glb');

    return <primitive object={gltf.scene} />;
};

export default MarsModel;