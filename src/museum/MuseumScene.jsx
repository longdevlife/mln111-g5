import { ContactShadows, Environment, Sparkles } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

import { MuseumArtwork } from "./MuseumArtwork";
import { MuseumPlayer } from "./MuseumPlayer";
import { MuseumRoom } from "./MuseumRoom";
import { museumPanels, ROOM_LEFT_POS, ROOM_CENTER_POS, ROOM_RIGHT_POS } from "./museumData";

function CameraDirectionTracker({ onFocusPanel }) {
  const { camera } = useThree();
  
  useFrame(() => {
    let closestPanel = null;
    let minDistance = 12;
    
    const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
    
    museumPanels.forEach(panel => {
      const panelPos = new THREE.Vector3(...panel.position);
      const toPanel = panelPos.clone().sub(camera.position);
      const distance = toPanel.length();
      
      if (distance < 12) {
        toPanel.normalize();
        const dot = forward.dot(toPanel);
        if (dot > 0.8 && distance < minDistance) {
          minDistance = distance;
          closestPanel = panel;
        }
      }
    });
    
    if (closestPanel) {
      onFocusPanel(closestPanel);
    }
  });
  
  return null;
}

function MuseumWorld({ selectedPanel, onSelectPanel, onFocusPanel }) {
  return (
    <>
      <color attach="background" args={["#090604"]} />
      <fog attach="fog" args={["#090604", 8, 40]} />

      <ambientLight intensity={0.3} />
      <directionalLight position={[4, 7, 5]} intensity={0.6} />
      
      {/* ── Lobby Lights ── */}
      <spotLight position={[0, 5.8, 0]} angle={0.7} penumbra={0.8} intensity={3.2} color="#f4d49a" castShadow />
      <pointLight position={[0, 4, 0]} intensity={0.6} color="#f4d49a" distance={18} />
      
      {/* ── Left Room Lights (Red accent) ── */}
      <spotLight 
        position={[ROOM_LEFT_POS[0], 5.8, ROOM_LEFT_POS[2]]} 
        angle={0.6} penumbra={0.8} intensity={2.5} color="#f4c8a0" castShadow 
      />
      <pointLight 
        position={[ROOM_LEFT_POS[0], 3, ROOM_LEFT_POS[2]]} 
        intensity={0.3} color="#C5272D" distance={12} 
      />

      {/* ── Center Room Lights (Gold accent) ── */}
      <spotLight 
        position={[ROOM_CENTER_POS[0], 5.8, ROOM_CENTER_POS[2]]} 
        angle={0.6} penumbra={0.8} intensity={2.5} color="#f4d49a" castShadow 
      />
      <pointLight 
        position={[ROOM_CENTER_POS[0], 3, ROOM_CENTER_POS[2]]} 
        intensity={0.3} color="#C5A028" distance={12} 
      />

      {/* ── Right Room Lights (Green accent) ── */}
      <spotLight 
        position={[ROOM_RIGHT_POS[0], 5.8, ROOM_RIGHT_POS[2]]} 
        angle={0.6} penumbra={0.8} intensity={2.5} color="#d4e4c0" castShadow 
      />
      <pointLight 
        position={[ROOM_RIGHT_POS[0], 3, ROOM_RIGHT_POS[2]]} 
        intensity={0.3} color="#6F8F4E" distance={12} 
      />

      {/* Sparkles in lobby area */}
      <Sparkles count={200} scale={[22, 8, 22]} position={[0, 3, 0]} size={3} speed={0.25} opacity={0.12} color="#f4d49a" />

      <MuseumPlayer />
      <CameraDirectionTracker onFocusPanel={onFocusPanel} />
      <MuseumRoom />

      {museumPanels.map((panel) => (
        <MuseumArtwork
          key={panel.id}
          panel={panel}
          selected={selectedPanel?.id === panel.id}
          onSelect={onSelectPanel}
        />
      ))}

      {/* Contact shadows for each area */}
      <ContactShadows position={[0, 0.02, 0]} opacity={0.35} scale={22} blur={2.8} far={4} frames={1} color="#000000" />
      <ContactShadows position={[ROOM_LEFT_POS[0], 0.02, ROOM_LEFT_POS[2]]} opacity={0.3} scale={14} blur={2.8} far={4} frames={1} color="#000000" />
      <ContactShadows position={[ROOM_CENTER_POS[0], 0.02, ROOM_CENTER_POS[2]]} opacity={0.3} scale={14} blur={2.8} far={4} frames={1} color="#000000" />
      <ContactShadows position={[ROOM_RIGHT_POS[0], 0.02, ROOM_RIGHT_POS[2]]} opacity={0.3} scale={14} blur={2.8} far={4} frames={1} color="#000000" />
      <Environment preset="warehouse" />
    </>
  );
}

export function MuseumScene({ selectedPanel, onSelectPanel, onFocusPanel }) {
  return (
    <Canvas
      camera={{ position: [0, 2.65, 5], rotation: [0, 0, 0], fov: 55 }}
      dpr={[1, 1.5]}
      shadows={false}
      performance={{ min: 0.5 }}
    >
      <MuseumWorld selectedPanel={selectedPanel} onSelectPanel={onSelectPanel} onFocusPanel={onFocusPanel} />
    </Canvas>
  );
}
