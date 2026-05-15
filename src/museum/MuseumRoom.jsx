export function MuseumRoom() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[18, 18]} />
        <meshStandardMaterial color="#211912" roughness={0.88} metalness={0.05} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 6, 0]}>
        <planeGeometry args={[18, 18]} />
        <meshStandardMaterial color="#17110d" roughness={0.95} />
      </mesh>

      <mesh position={[0, 3, -8]}>
        <planeGeometry args={[18, 6]} />
        <meshStandardMaterial color="#3b2b20" roughness={0.9} />
      </mesh>

      <mesh rotation={[0, Math.PI, 0]} position={[0, 3, 8]}>
        <planeGeometry args={[18, 6]} />
        <meshStandardMaterial color="#221812" roughness={0.95} />
      </mesh>

      <mesh rotation={[0, Math.PI / 2, 0]} position={[-8, 3, 0]}>
        <planeGeometry args={[16, 6]} />
        <meshStandardMaterial color="#30231b" roughness={0.92} />
      </mesh>

      <mesh rotation={[0, -Math.PI / 2, 0]} position={[8, 3, 0]}>
        <planeGeometry args={[16, 6]} />
        <meshStandardMaterial color="#30231b" roughness={0.92} />
      </mesh>

      <mesh position={[0, 0.08, -7.92]}>
        <boxGeometry args={[17.6, 0.16, 0.16]} />
        <meshStandardMaterial color="#6a4a2d" roughness={0.55} />
      </mesh>
      <mesh position={[0, 5.92, -7.92]}>
        <boxGeometry args={[17.6, 0.16, 0.16]} />
        <meshStandardMaterial color="#5a3f28" roughness={0.58} />
      </mesh>
      <mesh position={[-7.92, 0.08, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[16, 0.16, 0.16]} />
        <meshStandardMaterial color="#5a3f28" roughness={0.58} />
      </mesh>
      <mesh position={[7.92, 0.08, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[16, 0.16, 0.16]} />
        <meshStandardMaterial color="#5a3f28" roughness={0.58} />
      </mesh>
    </group>
  );
}
