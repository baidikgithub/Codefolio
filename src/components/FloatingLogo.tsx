import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// 3D Logo Component
function Logo3D() {
  const logoRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (logoRef.current) {
      logoRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      logoRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <group ref={logoRef}>
        {/* Main logo text */}
        <Text
          fontSize={1.2}
          color="#1890ff"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
          position={[0, 0.5, 0]}
        >
          BM
        </Text>
        
        {/* Decorative elements */}
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[1.5, 0.02, 16, 100]} />
          <meshStandardMaterial color="#1890ff" transparent opacity={0.6} />
        </mesh>
        
        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.3, 0.015, 16, 100]} />
          <meshStandardMaterial color="#52c41a" transparent opacity={0.4} />
        </mesh>
        
        {/* Sparkles around logo */}
        <Sparkles
          count={50}
          scale={3}
          size={2}
          speed={0.4}
          color="#1890ff"
        />
      </group>
    </Float>
  );
}

// Main Floating Logo Component
const FloatingLogo: React.FC<{ 
  position?: [number, number, number];
  scale?: number;
}> = ({ 
  position = [0, 0, 0], 
  scale = 1 
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        right: '10%',
        width: '200px',
        height: '200px',
        transform: 'translateY(-50%)',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.6} />
        <pointLight position={[-5, -5, -5]} intensity={0.3} color="#1890ff" />
        
        <group scale={scale} position={position}>
          <Logo3D />
        </group>
      </Canvas>
    </div>
  );
};

export default FloatingLogo; 