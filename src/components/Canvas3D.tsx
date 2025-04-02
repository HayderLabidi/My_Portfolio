
import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Float,
  PerspectiveCamera,
  useGLTF,
  useCursor,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import { useIsMobile } from "@/hooks/use-mobile";

// Background component for stars
function Stars() {
  const starsCount = 500;
  const starsRef = useRef<THREE.Points>(null);
  
  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });
  
  useEffect(() => {
    if (!starsRef.current) return;
    
    const positions = new Float32Array(starsCount * 3);
    const sizes = new Float32Array(starsCount);
    
    for (let i = 0; i < starsCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15; 
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
      sizes[i] = Math.random() * 0.2 + 0.05;
    }
    
    const geometry = starsRef.current.geometry;
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
  }, []);
  
  return (
    <points ref={starsRef}>
      <bufferGeometry />
      <pointsMaterial
        color="#ffffff"
        size={0.1}
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

// Floating object
function FloatingObject({ position, scale, rotation, color, shape = "sphere" }: {
  position: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
  color: string;
  shape?: "sphere" | "cube" | "torus" | "cone";
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  useCursor(hovered);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.004;
      meshRef.current.rotation.y += 0.002;
      
      if (clicked) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.05);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.05);
      }
    }
  });
  
  let geometry;
  
  switch (shape) {
    case "cube":
      geometry = <boxGeometry args={[1, 1, 1]} />;
      break;
    case "torus":
      geometry = <torusGeometry args={[0.6, 0.2, 16, 32]} />;
      break;
    case "cone":
      geometry = <coneGeometry args={[0.6, 1.2, 16]} />;
      break;
    default:
      geometry = <sphereGeometry args={[0.6, 32, 32]} />;
  }
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh
        ref={meshRef}
        position={position}
        scale={scale || 1}
        rotation={rotation || [0, 0, 0]}
        onClick={() => setClicked(!clicked)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {geometry}
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.5}
          emissive={color}
          emissiveIntensity={hovered ? 0.3 : 0.1}
        />
      </mesh>
    </Float>
  );
}

function MovingCamera() {
  const { mouse } = useThree();
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  
  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.position.x += (mouse.x * 1.5 - cameraRef.current.position.x) * 0.05;
      cameraRef.current.position.y += (mouse.y * 1.5 - cameraRef.current.position.y) * 0.05;
      cameraRef.current.lookAt(0, 0, 0);
    }
  });
  
  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[0, 0, 5]}
      fov={50}
    />
  );
}

export default function Canvas3D() {
  const isMobile = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);
  
  if (!isLoaded) return null;
  
  return (
    <div id="canvas-container">
      <Canvas>
        <MovingCamera />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />
        <Environment preset="city" />
        
        <Stars />
        
        <FloatingObject 
          position={[-2, 1, -2]} 
          color="#bd4be5" 
          shape="sphere" 
        />
        <FloatingObject 
          position={[2, -1, -3]} 
          color="#4b7be5" 
          shape="cube" 
          rotation={[0.5, 0.5, 0]}
        />
        <FloatingObject 
          position={[0, 2, -4]} 
          color="#e54b9d" 
          shape="torus" 
        />
        <FloatingObject 
          position={[3, 2, -5]} 
          color="#4be5a3" 
          shape="cone" 
        />
      </Canvas>
    </div>
  );
}

import { useState } from "react";
