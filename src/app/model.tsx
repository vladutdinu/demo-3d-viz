"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Color, Mesh } from "three";
import React from "react";

function MeshComponent() {
  const fileUrl = "/assets/floor/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);
  
  useFrame(() => {
    mesh.current.rotation.y += 0.00000;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

function Room1() {
    const [cameraColor,setColor] = React.useState("#6be092");
    const handleColorChange = () => {
        let newAmount = Math.random()*50000;
        console.log("called", newAmount);
        if(newAmount < 25000)
            setColor("green")
        else
            setColor("red")
    }
    useEffect(() => {
        console.log()
        setInterval(() => handleColorChange(), 5000);
    }, []); 
    return (
      <mesh position={[-1, 2, -3]} rotation={[0, 0, 0]}>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={cameraColor} />
      </mesh>
    );
}

function Room2() {
    const [cameraColor,setColor] = React.useState("#6be092");
    const handleColorChange = () => {
        let newAmount = Math.random()*50000;
        console.log("called", newAmount);
        if(newAmount < 25000)
            setColor("green")
        else
            setColor("red")
    }
    useEffect(() => {
        console.log()
        setInterval(() => handleColorChange(), 5000);
    }, []); 
    return (
      <mesh position={[2, 2,  0]} rotation={[0, 0, 0]}>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        
        <meshStandardMaterial attach="material" color={cameraColor} />
      </mesh>
    );
}

function Room3() {
    const [cameraColor,setColor] = React.useState("#6be092");
    const handleColorChange = () => {
        let newAmount = Math.random()*50000;
        console.log("called", newAmount);
        if(newAmount < 25000)
            setColor("green")
        else
            setColor("red")
    }
    useEffect(() => {
        console.log()
        setInterval(() => handleColorChange(), 5000);
    }, []); 
    

    return (
      <mesh position={[1, 2,  3]} rotation={[0, 0, 0]}>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color={new Color(cameraColor)} />
      </mesh>
    );
}

export function Building() {
    
  return (
    <div className='flex justify-center items-center h-screen' >
      <Canvas className='h-5xl w-5xl' style={{width:"800px", height: "800px"}}>
        <OrbitControls />
        <ambientLight />
        <Room1></Room1>
        <Room2></Room2>
        <Room3></Room3>
        <MeshComponent />
      </Canvas>
    </div>
  );
}