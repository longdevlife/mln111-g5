import { ContactShadows, Environment, Sparkles } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

import { MuseumArtwork } from "./MuseumArtwork";
import { MuseumPlayer } from "./MuseumPlayer";
import { MuseumRoom } from "./MuseumRoom";
import { museumPanels } from "./museumData";

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
      <fog attach="fog" args={["#090604", 8, 35]} />

      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 7, 5]} intensity={0.75} />
      
      {/* Lights for Room 1 */}
      <spotLight position={[0, 5.8, -2]} angle={0.55} penumbra={0.8} intensity={2.8} color="#f4d49a" castShadow />
      
      {/* Lights for Room 2 */}
      <spotLight position={[0, 5.8, -22]} angle={0.55} penumbra={0.8} intensity={2.8} color="#f4d49a" castShadow />

      {/* Lights for Room 3 */}
      <spotLight position={[0, 5.8, -42]} angle={0.55} penumbra={0.8} intensity={2.8} color="#f4d49a" castShadow />

      <Sparkles count={300} scale={[20, 10, 60]} position={[0, 3, -20]} size={3.5} speed={0.3} opacity={0.15} color="#f4d49a" />

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

      <ContactShadows position={[0, 0.02, 0]} opacity={0.38} scale={13} blur={2.8} far={4} frames={1} color="#000000" />
      <ContactShadows position={[0, 0.02, -20]} opacity={0.38} scale={13} blur={2.8} far={4} frames={1} color="#000000" />
      <ContactShadows position={[0, 0.02, -40]} opacity={0.38} scale={13} blur={2.8} far={4} frames={1} color="#000000" />
      <Environment preset="warehouse" />
    </>
  );
}

export function MuseumScene({ selectedPanel, onSelectPanel, onFocusPanel }) {
  return (
    <Canvas
      camera={{ position: [0, 2.65, 5.8], rotation: [0, 0, 0], fov: 55 }}
      dpr={[1, 1.5]}
      shadows={false}
      performance={{ min: 0.5 }}
    >
      <MuseumWorld selectedPanel={selectedPanel} onSelectPanel={onSelectPanel} onFocusPanel={onFocusPanel} />
    </Canvas>
  );
}
