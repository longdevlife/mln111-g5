import { Environment, Float, OrbitControls, ContactShadows } from "@react-three/drei";
import { Book } from "./Book";
import { PageParticles } from "./PageParticles";

export const Experience = () => {
  return (
    <>
      {/* Book */}
      <Float
        rotation-x={-Math.PI / 4}
        floatIntensity={1}
        speed={1}
        rotationIntensity={0.1}
      >
        <Book />
        <PageParticles />
      </Float>

      {/* OrbitControls — xoay, zoom, kéo tự do */}
      <OrbitControls
        minDistance={2}
        maxDistance={10}
      />

      {/* Ambient environment */}
      <Environment preset="apartment" />

      {/* Key Light */}
      <directionalLight
        position={[2, 5, 2]}
        intensity={2}
      />

      {/* Fill Light */}
      <directionalLight
        position={[-3, 2, -1]}
        intensity={0.5}
        color="#ffeedd"
      />

      {/* ContactShadows */}
      <ContactShadows
        position={[0, -1.48, 0]}
        opacity={0.2}
        scale={10}
        blur={2.5}
        far={4}
        color="#1a1008"
        frames={1}
      />
    </>
  );
};

