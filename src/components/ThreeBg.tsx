import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, Sparkles, Environment, ContactShadows } from '@react-three/drei';
import { ArkLogo } from './ArkLogo';

export const ThreeBg: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none w-full h-full bg-slate-900 overflow-hidden">
            <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
                <spotLight position={[-10, 10, -10]} intensity={0.5} color="blue" />
                {/* Particle/Rain like system */}
                <Sparkles count={500} scale={20} size={2} speed={0.4} color="#60a5fa" opacity={0.5} />
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />

                <ArkLogo />

                {/* Nice ground reflection */}
                <ContactShadows resolution={512} scale={20} blur={2} opacity={0.4} far={10} color="#000000" />
                <Environment preset="night" />
            </Canvas>
        </div>
    );
};
