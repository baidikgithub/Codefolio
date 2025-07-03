import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Floating geometric shapes component
function FloatingShapes() {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Floating cubes */}
      <mesh position={[-4, 2, -2]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#1890ff" transparent opacity={0.3} />
      </mesh>
      
      <mesh position={[3, -1, -3]}>
        <octahedronGeometry args={[0.4]} />
        <meshStandardMaterial color="#52c41a" transparent opacity={0.4} />
      </mesh>
      
      <mesh position={[0, 3, -1]}>
        <tetrahedronGeometry args={[0.6]} />
        <meshStandardMaterial color="#f759ab" transparent opacity={0.3} />
      </mesh>
      
      <mesh position={[-2, -2, -4]}>
        <icosahedronGeometry args={[0.3]} />
        <meshStandardMaterial color="#fadb14" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

// Animated particles component
function AnimatedParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Points ref={pointsRef} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#1890ff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

// Rotating ring component
function RotatingRings() {
  const ringRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.x += 0.01;
      ringRef.current.rotation.z += 0.005;
    }
  });

  return (
    <group ref={ringRef}>
      <mesh>
        <torusGeometry args={[3, 0.05, 16, 100]} />
        <meshStandardMaterial color="#1890ff" transparent opacity={0.2} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.03, 16, 100]} />
        <meshStandardMaterial color="#52c41a" transparent opacity={0.3} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[2, 0.04, 16, 100]} />
        <meshStandardMaterial color="#f759ab" transparent opacity={0.25} />
      </mesh>
    </group>
  );
}

// Main 3D scene component
function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#1890ff" />
      
      <AnimatedParticles />
      <FloatingShapes />
      <RotatingRings />
    </>
  );
}

// Main component
const ThreeBackground: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        background: '#0c0c1d',
        opacity: 0.4,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeBackground; 