export function MuseumRoom() {
  return (
    <group position={[0, 0, -20]}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, 0, 0]}>
        <planeGeometry args={[18, 60]} />
        <meshStandardMaterial color="#211912" roughness={0.88} metalness={0.05} />
      </mesh>

      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 6, 0]}>
        <planeGeometry args={[18, 60]} />
        <meshStandardMaterial color="#17110d" roughness={0.95} />
      </mesh>

      {/* Back Wall */}
      <mesh position={[0, 3, -30]}>
        <planeGeometry args={[18, 6]} />
        <meshStandardMaterial color="#3b2b20" roughness={0.9} />
      </mesh>

      {/* Front Wall */}
      <mesh rotation={[0, Math.PI, 0]} position={[0, 3, 30]}>
        <planeGeometry args={[18, 6]} />
        <meshStandardMaterial color="#221812" roughness={0.95} />
      </mesh>

      {/* Left Wall */}
      <mesh rotation={[0, Math.PI / 2, 0]} position={[-8, 3, 0]}>
        <planeGeometry args={[60, 6]} />
        <meshStandardMaterial color="#30231b" roughness={0.92} />
      </mesh>

      {/* Right Wall */}
      <mesh rotation={[0, -Math.PI / 2, 0]} position={[8, 3, 0]}>
        <planeGeometry args={[60, 6]} />
        <meshStandardMaterial color="#30231b" roughness={0.92} />
      </mesh>

      {/* Archway 1 (Between Room 1 and 2, global z = -10) */}
      <Archway position={[0, 0, 10]} />
      {/* Archway 2 (Between Room 2 and 3, global z = -30) */}
      <Archway position={[0, 0, -10]} />

      {/* Baseboards */}
      <mesh position={[-7.92, 0.08, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[60, 0.16, 0.16]} />
        <meshStandardMaterial color="#5a3f28" roughness={0.58} />
      </mesh>
      <mesh position={[7.92, 0.08, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[60, 0.16, 0.16]} />
        <meshStandardMaterial color="#5a3f28" roughness={0.58} />
      </mesh>
    </group>
  );
}

function Archway({ position }) {
  return (
    <group position={position}>
      <mesh position={[-6, 3, 0]}>
        <boxGeometry args={[4, 6, 1]} />
        <meshStandardMaterial color="#221812" roughness={0.95} />
      </mesh>
      <mesh position={[6, 3, 0]}>
        <boxGeometry args={[4, 6, 1]} />
        <meshStandardMaterial color="#221812" roughness={0.95} />
      </mesh>
      <mesh position={[0, 5, 0]}>
        <boxGeometry args={[8, 2, 1]} />
        <meshStandardMaterial color="#221812" roughness={0.95} />
      </mesh>
    </group>
  );
}
