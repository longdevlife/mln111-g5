import { Html, useTexture } from "@react-three/drei";

export function MuseumArtwork({ panel, selected, focused, onSelect }) {
  const texture = useTexture(panel.imageSrc || "/textures/Coverpage_open.png");
  const active = selected || focused;
  const glowColor = selected ? panel.roomAccent : "#000000";

  return (
    <group position={panel.position} rotation={panel.rotation} scale={active ? 0.78 : 0.75}>
      {active && (
        <pointLight
          color={panel.roomAccent}
          intensity={selected ? 0.2 : 0.1}
          distance={4.0}
          position={[0, 0, 0.6]}
        />
      )}

      {/* 1. Outer wood/dark base */}
      <mesh position={[0, 0, -0.06]} castShadow>
        <boxGeometry args={[2.3, 2.9, 0.1]} />
        <meshStandardMaterial color="#24170e" roughness={0.8} metalness={0.1} />
      </mesh>

      {/* 2. Outer golden rim */}
      <mesh position={[0, 0, -0.03]}>
        <boxGeometry args={[2.2, 2.8, 0.08]} />
        <meshStandardMaterial color="#c29b44" roughness={0.4} metalness={0.8} />
      </mesh>

      {/* 3. Mid dark groove (creates depth/shadow in the profile) */}
      <mesh position={[0, 0, 0.0]}>
        <boxGeometry args={[1.96, 2.56, 0.06]} />
        <meshStandardMaterial color="#1a1109" roughness={0.9} metalness={0.1} />
      </mesh>

      {/* 4. Inner golden bevel touching the canvas */}
      <mesh position={[0, 0, 0.02]}>
        <boxGeometry args={[1.86, 2.46, 0.04]} />
        <meshStandardMaterial color="#e6be65" roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Canvas - With Image Texture */}
      <mesh
        position={[0, 0, 0.042]} // Moved forward to ensure it sits in front of the golden bevel
        onClick={(event) => {
          event.stopPropagation();
          onSelect(panel);
        }}
        onPointerOver={(event) => {
          event.stopPropagation();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
        }}
      >
        <planeGeometry args={[1.8, 2.4]} />
        <meshStandardMaterial
          map={texture}
          color="#ffffff"
          emissive="#000000"
          emissiveIntensity={0}
          roughness={0.6}
        />
      </mesh>

      <Html position={[0, -1.82, 0.08]} transform center scale={0.32} occlude>
        <div
          style={{
            width: 280,
            textAlign: "center",
            color: "#e8e4d9",
            background: "linear-gradient(135deg, #2a241e 0%, #171310 100%)",
            padding: "14px 20px",
            borderRadius: 2,
            boxShadow: `0 8px 16px rgba(0,0,0,0.8), inset 0 0 0 1px #4a3c2c, 0 0 18px ${panel.roomAccent}24`,
            pointerEvents: "none",
            border: `2px solid ${selected ? panel.roomAccent : "#111"}`,
          }}
        >
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 20,
              lineHeight: 1.2,
              fontWeight: 500,
              color: "#d4af37",
              textShadow: "0 1px 2px rgba(0,0,0,0.8)",
            }}
          >
            {panel.title}
          </div>
          <div style={{ marginTop: 8, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a89f91" }}>
            {panel.heading}
          </div>
        </div>
      </Html>
    </group>
  );
}
