"use client"

import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'

// Componente para un pétalo individual
function Petal({ position, rotation, scale, delay = 0 }: { 
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
  delay?: number 
}) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, delay * 1000)
    
    return () => clearTimeout(timer)
  }, [delay])

  useFrame((state) => {
    if (meshRef.current && visible) {
      // Animación suave de crecimiento
      const targetScale = scale
      const currentScale = meshRef.current.scale.x
      if (currentScale < targetScale) {
        meshRef.current.scale.setScalar(Math.min(currentScale + 0.02, targetScale))
      }
      
      // Animación sutil de balanceo
      meshRef.current.rotation.z = rotation[2] + Math.sin(state.clock.elapsedTime + delay) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={0}>
      <sphereGeometry args={[0.3, 8, 6]} />
      <meshStandardMaterial 
        color="#FFD700"
        roughness={0.3}
        metalness={0.1}
      />
    </mesh>
  )
}

// Componente para el centro de la flor
function FlowerCenter({ delay = 0 }: { delay?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, delay * 1000)
    
    return () => clearTimeout(timer)
  }, [delay])

  useFrame((state) => {
    if (meshRef.current && visible) {
      const targetScale = 1
      const currentScale = meshRef.current.scale.x
      if (currentScale < targetScale) {
        meshRef.current.scale.setScalar(Math.min(currentScale + 0.03, targetScale))
      }
      
      // Pulso sutil
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      if (currentScale >= targetScale) {
        meshRef.current.scale.setScalar(pulse)
      }
    }
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]} scale={0}>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial 
        color="#8B4513"
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  )
}

// Componente para el tallo
function Stem({ delay = 0 }: { delay?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, delay * 1000)
    
    return () => clearTimeout(timer)
  }, [delay])

  useFrame(() => {
    if (meshRef.current && visible) {
      const targetScaleY = 1
      const currentScaleY = meshRef.current.scale.y
      if (currentScaleY < targetScaleY) {
        meshRef.current.scale.y = Math.min(currentScaleY + 0.02, targetScaleY)
      }
    }
  })

  return (
    <mesh ref={meshRef} position={[0, -1, 0]} scale={[1, 0, 1]}>
      <cylinderGeometry args={[0.05, 0.08, 2, 8]} />
      <meshStandardMaterial 
        color="#228B22"
        roughness={0.6}
        metalness={0.1}
      />
    </mesh>
  )
}

// Componente principal de la flor
function Flower3D() {
  const groupRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (groupRef.current) {
      // Rotación muy sutil de toda la flor
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  // Posiciones y rotaciones para 8 pétalos
  const petals = [
    { position: [0, 0.3, 0] as [number, number, number], rotation: [0, 0, 0] as [number, number, number] },
    { position: [0.2, 0.2, 0] as [number, number, number], rotation: [0, 0, Math.PI / 4] as [number, number, number] },
    { position: [0.3, 0, 0] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number] },
    { position: [0.2, -0.2, 0] as [number, number, number], rotation: [0, 0, 3 * Math.PI / 4] as [number, number, number] },
    { position: [0, -0.3, 0] as [number, number, number], rotation: [0, 0, Math.PI] as [number, number, number] },
    { position: [-0.2, -0.2, 0] as [number, number, number], rotation: [0, 0, 5 * Math.PI / 4] as [number, number, number] },
    { position: [-0.3, 0, 0] as [number, number, number], rotation: [0, 0, 3 * Math.PI / 2] as [number, number, number] },
    { position: [-0.2, 0.2, 0] as [number, number, number], rotation: [0, 0, 7 * Math.PI / 4] as [number, number, number] },
  ]

  return (
    <group ref={groupRef}>
      {/* Tallo */}
      <Stem delay={0.5} />
      
      {/* Pétalos */}
      {petals.map((petal, index) => (
        <Petal 
          key={index}
          position={petal.position}
          rotation={petal.rotation}
          scale={1}
          delay={2 + index * 0.2}
        />
      ))}
      
      {/* Centro de la flor */}
      <FlowerCenter delay={4} />
    </group>
  )
}

// Componente para el suelo/césped
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial 
        color="#32CD32"
        roughness={0.8}
        metalness={0.1}
      />
    </mesh>
  )
}

// Componente principal exportado
export function Flower3DAnimation() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* Iluminación */}
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[0, 2, 2]} intensity={0.5} color="#FFD700" />
        
        {/* Entorno */}
        <Environment preset="park" />
        
        {/* Suelo */}
        <Ground />
        
        {/* Flor 3D */}
        <Flower3D />
        
        {/* Controles de cámara opcionales (puedes comentar esta línea) */}
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  )
}