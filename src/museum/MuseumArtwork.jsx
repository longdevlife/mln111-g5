import { Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";

export function MuseumArtwork({ panel, selected, onSelect }) {
  const groupRef = useRef();
  const nearRef = useRef(false);
  const { camera } = useThree();
  const [near, setNear] = useState(false);

  const glowColor = selected ? panel.roomAccent : "#000000";

  useFrame(() => {
    if (!groupRef.current) return;

    const distance = groupRef.current.position.distanceTo(camera.position);
    const isNear = distance < 7.5;
    if (nearRef.current !== isNear) {
      nearRef.current = isNear;
      setNear(isNear);
    }
  });

  return (
    <group ref={groupRef} position={panel.position} rotation={panel.rotation}>
      <pointLight color={panel.roomAccent} intensity={selected ? 1.15 : 0.25} distance={4.5} position={[0, 0.35, 0.5]} />

      {/* Frame (Portrait 3:4) */}
      <mesh position={[0, 0, -0.045]} castShadow>
        <boxGeometry args={[2.2, 2.9, 0.12]} />
        <meshStandardMaterial color="#3c2617" roughness={0.48} metalness={0.18} />
      </mesh>

      {/* Canvas */}
      <mesh position={[0, 0, 0]} onClick={() => onSelect(panel)} onPointerOver={() => setNear(true)}>
        <planeGeometry args={[1.8, 2.4]} />
        <meshStandardMaterial
          color={panel.roomAccent}
          emissive={glowColor}
          emissiveIntensity={selected ? 0.28 : 0.06}
          opacity={0.34}
          roughness={0.72}
          transparent
        />
      </mesh>

      {/* Frame details */}
      <mesh position={[0, 1.35, 0.035]}>
        <boxGeometry args={[2.0, 0.08, 0.1]} />
        <meshStandardMaterial color={panel.roomAccent} roughness={0.35} metalness={0.35} />
      </mesh>
      <mesh position={[0, -1.35, 0.035]}>
        <boxGeometry args={[2.0, 0.08, 0.1]} />
        <meshStandardMaterial color={panel.roomAccent} roughness={0.35} metalness={0.35} />
      </mesh>
      <mesh position={[-0.96, 0, 0.035]}>
        <boxGeometry args={[0.08, 2.62, 0.1]} />
        <meshStandardMaterial color={panel.roomAccent} roughness={0.35} metalness={0.35} />
      </mesh>
      <mesh position={[0.96, 0, 0.035]}>
        <boxGeometry args={[0.08, 2.62, 0.1]} />
        <meshStandardMaterial color={panel.roomAccent} roughness={0.35} metalness={0.35} />
      </mesh>

      {/* Floor marker */}
      <mesh position={[0, -2.99, 1.2]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.6, 0.65, 32]} />
        <meshBasicMaterial color={panel.roomAccent} transparent opacity={selected ? 0.8 : 0.2} />
      </mesh>
      {(near || selected) && (
        <mesh position={[0, -2.99, 1.2]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.6, 32]} />
          <meshBasicMaterial color={panel.roomAccent} transparent opacity={selected ? 0.15 : 0.05} />
        </mesh>
      )}

      {/* Panel Labels */}
      <Html position={[0, -0.18, 0.06]} transform center scale={0.45} occlude>
        <div style={{ width: 260, textAlign: "center", color: "#f8efe4", pointerEvents: "none" }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, lineHeight: 1.1 }}>{panel.title}</div>
          <div style={{ marginTop: 8, fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#c8bda9" }}>
            {panel.heading}
          </div>
        </div>
      </Html>

      {(near || selected) && (
        <Html position={[0, 1.65, 0.12]} transform center scale={0.42} occlude>
          <button
            type="button"
            onClick={() => onSelect(panel)}
            style={{
              border: `1px solid ${panel.roomAccent}`,
              borderRadius: 999,
              background: "rgba(10, 7, 5, 0.82)",
              color: "#fff8ed",
              cursor: "pointer",
              fontSize: 11,
              letterSpacing: "0.14em",
              padding: "8px 14px",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Xem nội dung
          </button>
        </Html>
      )}
    </group>
  );
}
