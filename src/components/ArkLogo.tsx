import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export const ArkLogo: React.FC = () => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <group ref={groupRef} scale={1.5}>
                {/* Hull */}
                <mesh position={[0, -0.5, 0]}>
                    <boxGeometry args={[4, 1, 2]} />
                    <meshStandardMaterial color="#8b5a2b" roughness={0.8} />
                </mesh>
                {/* Bow and Stern (Triangular Prisms roughly) */}
                <mesh position={[2.5, -0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
                    <boxGeometry args={[1.4, 1.4, 2]} />
                    <meshStandardMaterial color="#8b5a2b" roughness={0.8} />
                </mesh>
                <mesh position={[-2.5, -0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
                    <boxGeometry args={[1.4, 1.4, 2]} />
                    <meshStandardMaterial color="#8b5a2b" roughness={0.8} />
                </mesh>
                {/* Cabin */}
                <mesh position={[0, 0.5, 0]}>
                    <boxGeometry args={[2.5, 1, 1.5]} />
                    <meshStandardMaterial color="#a0522d" roughness={0.9} />
                </mesh>
                {/* Roof */}
                <mesh position={[0, 1.25, 0]} rotation={[0, 0, 0]}>
                    <boxGeometry args={[3, 0.5, 2]} />
                    <meshStandardMaterial color="#654321" roughness={1} />
                </mesh>
            </group>
        </Float>
    );
};
