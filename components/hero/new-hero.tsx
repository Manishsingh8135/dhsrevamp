"use client"
import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Text, useTexture, Environment, Box } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing'
import * as THREE from 'three'

interface HouseProps {
  initialRotation: [number, number, number];
  onRotationChange: (rotation: THREE.Euler) => void;
}

function House({ initialRotation = [0, Math.PI / 4, 0], onRotationChange }: HouseProps) {
  const modelPath = useMemo(() => '/house_model/scene.gltf', [])
  const houseRef = useRef<THREE.Group>(null)

  const gltf = useLoader(GLTFLoader, modelPath)

  useFrame((state) => {
    if (houseRef.current) {
      const t = state.clock.getElapsedTime()
      houseRef.current.rotation.y = initialRotation[1] + Math.sin(t / 4) / 8
      onRotationChange(houseRef.current.rotation)
    }
  })

  return gltf ? (
    <primitive 
      object={gltf.scene} 
      ref={houseRef} 
      scale={[1, 1, 1]} 
      position={[0, 0, 0]} 
      rotation={initialRotation}
    />
  ) : null
}

interface LogoProps {
  logoPath: string | null;
}

function Logo({ logoPath }: LogoProps) {
  const texture = useTexture(logoPath ?? '/assets/hero/hero1.jpg');
  
  return logoPath ? (
    <mesh position={[0, 5, 0]}>
      <planeGeometry args={[3, 1]} />
      <meshBasicMaterial map={texture} transparent={true} />
    </mesh>
  ) : null;
}

interface AnimatedTextProps {
  position: [number, number, number];
  fontSize?: number;
}

function AnimatedText({ position = [0, 2, 0], fontSize = 0.5 }: AnimatedTextProps) {
  const textRef = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (textRef.current) {
      const t = state.clock.getElapsedTime()
      textRef.current.position.y = position[1] + Math.sin(t) * 0.2
    }
  })
  return (
    <Text
      ref={textRef}
      color="white"
      fontSize={fontSize}
      maxWidth={200}
      lineHeight={1}
      letterSpacing={0.02}
      textAlign="center"
      font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      anchorX="center"
      anchorY="middle"
      position={position}
    >
      Building Dreams, Revamping Futures
    </Text>
  )
}

function LoadingAnimation() {
  const boxRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (boxRef.current) {
      boxRef.current.rotation.x = Math.sin(state.clock.getElapsedTime())
      boxRef.current.rotation.y = Math.cos(state.clock.getElapsedTime() * 0.5)
    }
  })

  return (
    <group>
      <Box ref={boxRef} args={[1, 1, 1]}>
        <meshNormalMaterial />
      </Box>
      <Text
        position={[0, -2, 0]}
        color="white"
        fontSize={0.5}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
      >
        Loading...
      </Text>
    </group>
  )
}

interface CameraControllerProps {
  target: [number, number, number];
  onTargetChange: (target: THREE.Vector3) => void;
}

function CameraController({ target, onTargetChange }: CameraControllerProps) {
  const { camera } = useThree();
  const controlsRef = useRef<any>(null); // Use `any` to bypass type issues

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update();
      onTargetChange(controlsRef.current.target);
    }
  });

  return <OrbitControls ref={controlsRef} camera={camera} target={new THREE.Vector3(...target)} />;
}

interface SceneProps {
  logoPath: string | null;
  initialCameraPosition: [number, number, number];
  initialRotation: [number, number, number];
  orbitControlsTarget: [number, number, number];
  textPosition: [number, number, number];
  textSize: number;
}

function Scene({ logoPath, initialCameraPosition, initialRotation, orbitControlsTarget, textPosition, textSize }: SceneProps) {
  const setCurrentTarget = (target: THREE.Vector3) => {}
  const setCurrentRotation = (rotation: THREE.Euler) => {}

  return (
    <>
      <PerspectiveCamera makeDefault position={initialCameraPosition} fov={60} />
      <CameraController 
        target={orbitControlsTarget} 
        onTargetChange={setCurrentTarget}
      />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={<LoadingAnimation />}>
        <House 
          initialRotation={initialRotation} 
          onRotationChange={setCurrentRotation}
        />
        {logoPath && <Logo logoPath={logoPath} />}
        <AnimatedText position={textPosition} fontSize={textSize} />
        <Environment preset="sunset" />
      </Suspense>
    </>
  )
}

interface AdvancedHero3DProps {
  logoPath: string | null;
  initialCameraPosition?: [number, number, number];
  initialRotation?: [number, number, number];
  orbitControlsTarget?: [number, number, number];
  textPosition?: [number, number, number];
  textSize?: number;
}

export default function AdvancedHero3D({ 
  logoPath, 
  initialCameraPosition = [0.9717728919512081, 0.41480069283742743, 3.2363700475392227],
  initialRotation = [-0.12747352166309883, 0.28946480301000693, 0.03656802270161679],
  orbitControlsTarget = [0, 0, 0],
  textPosition = [0, 2, 0],
  textSize = 0.3
}: AdvancedHero3DProps) {
  return (
    <div className="h-screen relative">
      <Canvas>
        <Scene 
          logoPath={logoPath} 
          initialCameraPosition={initialCameraPosition}
          initialRotation={initialRotation}
          orbitControlsTarget={orbitControlsTarget}
          textPosition={textPosition}
          textSize={textSize}
        />
        <EffectComposer>
          <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} />
          <ChromaticAberration offset={[0.0005, 0.0005]} />
        </EffectComposer>
      </Canvas>
      <div className="absolute inset-x-0 bottom-10 text-center text-white">
        <h1 className="text-6xl font-extrabold mb-4">DHS CONSTRUCTION GROUP INC</h1>
        <p className="text-2xl font-bold mb-6">Your Vision, Our Expertise</p>
        <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold rounded-full hover:bg-yellow-400 transition-colors transform hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  )
}
