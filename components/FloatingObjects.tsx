'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// Glass Sphere - large, behind text
function GlassSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3}>
      <mesh ref={meshRef} position={[-3.5, 0.5, -3]}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <MeshTransmissionMaterial
          background={new THREE.Color('#0a0a0a')}
          samples={6}
          resolution={512}
          transmission={0.98}
          roughness={0.1}
          thickness={1}
          ior={1.4}
          chromaticAberration={0.3}
          anisotropy={0.5}
          distortion={0.1}
          distortionScale={0.1}
          clearcoat={0.8}
          attenuationDistance={2}
          attenuationColor="#00d4ff"
          color="#00e0ff"
          opacity={0.2}
        />
      </mesh>
    </Float>
  );
}

// Metallic Torus - small, top right
function MetallicTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[3, 2, -2]}>
        <torusGeometry args={[0.6, 0.25, 32, 64]} />
        <meshStandardMaterial
          color="#00f0ff"
          metalness={0.9}
          roughness={0.2}
          envMapIntensity={1}
          emissive="#00a8cc"
          emissiveIntensity={0.2}
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

// Frosted Capsule - bottom left
function FrostedCapsule() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
    meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.2;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh ref={meshRef} position={[-2.5, -2, -1.5]} rotation={[0, 0, 0.3]}>
        <capsuleGeometry args={[0.4, 1.2, 32, 64]} />
        <MeshTransmissionMaterial
          background={new THREE.Color('#0a0a0a')}
          samples={4}
          resolution={256}
          transmission={0.9}
          roughness={0.3}
          thickness={0.8}
          ior={1.3}
          chromaticAberration={0.2}
          clearcoat={0.5}
          attenuationDistance={1.5}
          attenuationColor="#00ff88"
          color="#00ffaa"
          opacity={0.2}
        />
      </mesh>
    </Float>
  );
}

// Crystal Octahedron - right side
function CrystalOctahedron() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={1.3} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={[3.5, -0.5, -2.5]}>
        <octahedronGeometry args={[0.8, 0]} />
        <meshStandardMaterial
          color="#00ffdd"
          metalness={0.7}
          roughness={0.15}
          envMapIntensity={1.2}
          emissive="#00ccaa"
          emissiveIntensity={0.3}
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

// Tiny floating particles
function FloatingParticles() {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!particlesRef.current) return;
    particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  const particleCount = 50;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={particleCount}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#00f0ff" transparent opacity={0.15} sizeAttenuation />
    </points>
  );
}

export default function FloatingObjects({ scrollOffset = 0 }: { scrollOffset?: number }) {
  // Convert scroll offset to parallax values
  const parallaxFactor = scrollOffset * 0.001;

  return (
    <group position={[0, parallaxFactor * 2, parallaxFactor * 0.5]}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} />
      <pointLight position={[0, 0, 3]} intensity={0.5} color="#00f0ff" />

      {/* Mixed premium materials with individual parallax */}
      <group position={[0, -parallaxFactor * 1.5, 0]}>
        <GlassSphere />
      </group>
      <group position={[0, -parallaxFactor * 2, 0]}>
        <MetallicTorus />
      </group>
      <group position={[0, -parallaxFactor * 1.2, 0]}>
        <FrostedCapsule />
      </group>
      <group position={[0, -parallaxFactor * 1.8, 0]}>
        <CrystalOctahedron />
      </group>
      <FloatingParticles />
    </group>
  );
}
