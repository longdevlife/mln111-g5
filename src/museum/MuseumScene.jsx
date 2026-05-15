import { ContactShadows, Environment, Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { MuseumArtwork } from "./MuseumArtwork";
import { MuseumPlayer } from "./MuseumPlayer";
import { MuseumRoom } from "./MuseumRoom";
import { museumArtworks } from "./museumData";

function MuseumWorld({ selectedArtwork, onSelectArtwork }) {
  return (
    <>
      <color attach="background" args={["#090604"]} />
      <fog attach="fog" args={["#090604", 8, 20]} />

      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 7, 5]} intensity={0.75} />
      <spotLight position={[0, 5.8, -2]} angle={0.55} penumbra={0.8} intensity={2.8} color="#f4d49a" castShadow />
      <spotLight position={[-4, 5, -5.5]} angle={0.45} penumbra={0.7} intensity={1.3} color="#c5272d" />
      <spotLight position={[4, 5, -5.5]} angle={0.45} penumbra={0.7} intensity={1.1} color="#c5a028" />

      <Sparkles count={120} scale={14} size={3.5} speed={0.3} opacity={0.15} color="#f4d49a" />

      <MuseumPlayer />
      <MuseumRoom />

      {museumArtworks.map((artwork) => (
        <MuseumArtwork
          key={artwork.id}
          artwork={artwork}
          selected={selectedArtwork?.id === artwork.id}
          onSelect={onSelectArtwork}
        />
      ))}

      <ContactShadows position={[0, 0.02, 0]} opacity={0.38} scale={13} blur={2.8} far={4} frames={1} color="#000000" />
      <Environment preset="warehouse" />
    </>
  );
}

export function MuseumScene({ selectedArtwork, onSelectArtwork }) {
  return (
    <Canvas
      camera={{ position: [0, 2.65, 5.8], rotation: [0, 0, 0], fov: 55 }}
      dpr={[1, 1.5]}
      shadows={false}
      performance={{ min: 0.5 }}
    >
      <MuseumWorld selectedArtwork={selectedArtwork} onSelectArtwork={onSelectArtwork} />
    </Canvas>
  );
}
