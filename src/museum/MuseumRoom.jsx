import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import {
  LOBBY_SIZE,
  ROOM_SIZE,
  ROOM_LEFT_POS,
  ROOM_CENTER_POS,
  ROOM_RIGHT_POS,
} from "./museumData";

// ── Shared texture loader ──
function useMuseumTextures() {
  const damask = useTexture("/textures/damask-pattern.png");
  const marble = useTexture("/textures/marble-floor.png");

  // Configure tiling
  damask.wrapS = damask.wrapT = THREE.RepeatWrapping;
  marble.wrapS = marble.wrapT = THREE.RepeatWrapping;

  return { damask, marble };
}

// ── Constants ──
const WALL_COLOR = "#30231b";
const CEILING_COLOR = "#17110d";
const BASEBOARD_COLOR = "#5a3f28";

// ── Individual Room Component ──
function Room({ position, size, accent, label, textures, openings = [] }) {
  const { w, d, h } = size;
  const { damask, marble } = textures;

  // Clone textures for this room to avoid sharing repeat state
  const wallTex = damask.clone();
  wallTex.wrapS = wallTex.wrapT = THREE.RepeatWrapping;
  wallTex.repeat.set(w / 3, h / 3);

  const wallTexSide = damask.clone();
  wallTexSide.wrapS = wallTexSide.wrapT = THREE.RepeatWrapping;
  wallTexSide.repeat.set(d / 3, h / 3);

  const floorTex = marble.clone();
  floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(w / 4, d / 4);

  // Determine which walls have openings
  const hasOpening = (wall) => openings.includes(wall);

  return (
    <group position={position}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, 0.01, 0]}>
        <planeGeometry args={[w, d]} />
        <meshStandardMaterial
          map={floorTex}
          color="#f5e6c8"
          roughness={0.35}
          metalness={0.08}
        />
      </mesh>

      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, h, 0]}>
        <planeGeometry args={[w, d]} />
        <meshStandardMaterial color={CEILING_COLOR} roughness={0.95} />
      </mesh>

      {/* Back Wall (z = -d/2) — may have opening */}
      {!hasOpening("back") ? (
        <mesh position={[0, h / 2, -d / 2]}>
          <planeGeometry args={[w, h]} />
          <meshStandardMaterial
            map={wallTex}
            color={WALL_COLOR}
            roughness={0.85}
          />
        </mesh>
      ) : (
        <WallWithOpening
          position={[0, 0, -d / 2]}
          wallW={w}
          wallH={h}
          openW={4}
          openH={4.5}
          tex={wallTex}
          accent={accent}
          label={label}
        />
      )}

      {/* Front Wall (z = +d/2) — may have opening */}
      {!hasOpening("front") ? (
        <mesh rotation={[0, Math.PI, 0]} position={[0, h / 2, d / 2]}>
          <planeGeometry args={[w, h]} />
          <meshStandardMaterial
            map={wallTex}
            color={WALL_COLOR}
            roughness={0.85}
          />
        </mesh>
      ) : (
        <WallWithOpening
          position={[0, 0, d / 2]}
          wallW={w}
          wallH={h}
          openW={4}
          openH={4.5}
          tex={wallTex}
          flipZ
          accent={accent}
          label={label}
        />
      )}

      {/* Left Wall (x = -w/2) — may have opening */}
      {!hasOpening("left") ? (
        <mesh rotation={[0, Math.PI / 2, 0]} position={[-w / 2, h / 2, 0]}>
          <planeGeometry args={[d, h]} />
          <meshStandardMaterial
            map={wallTexSide}
            color={WALL_COLOR}
            roughness={0.85}
          />
        </mesh>
      ) : (
        <WallWithOpening
          position={[-w / 2, 0, 0]}
          wallW={d}
          wallH={h}
          openW={4}
          openH={4.5}
          tex={wallTexSide}
          rotateY={Math.PI / 2}
          accent={accent}
          label={label}
        />
      )}

      {/* Right Wall (x = +w/2) — may have opening */}
      {!hasOpening("right") ? (
        <mesh rotation={[0, -Math.PI / 2, 0]} position={[w / 2, h / 2, 0]}>
          <planeGeometry args={[d, h]} />
          <meshStandardMaterial
            map={wallTexSide}
            color={WALL_COLOR}
            roughness={0.85}
          />
        </mesh>
      ) : (
        <WallWithOpening
          position={[w / 2, 0, 0]}
          wallW={d}
          wallH={h}
          openW={4}
          openH={4.5}
          tex={wallTexSide}
          rotateY={-Math.PI / 2}
          accent={accent}
          label={label}
        />
      )}

      {/* Baseboards */}
      <mesh position={[-w / 2 + 0.08, 0.08, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[d, 0.16, 0.16]} />
        <meshStandardMaterial color={BASEBOARD_COLOR} roughness={0.58} />
      </mesh>
      <mesh position={[w / 2 - 0.08, 0.08, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[d, 0.16, 0.16]} />
        <meshStandardMaterial color={BASEBOARD_COLOR} roughness={0.58} />
      </mesh>
    </group>
  );
}

// ── Wall with archway opening ──
function WallWithOpening({
  position,
  wallW,
  wallH,
  openW,
  openH,
  tex,
  flipZ = false,
  rotateY = 0,
  accent = "#C5A028",
  label = "",
}) {
  const sideW = (wallW - openW) / 2;
  const topH = wallH - openH;
  const ry = rotateY || (flipZ ? Math.PI : 0);

  return (
    <group position={position} rotation={[0, ry, 0]}>
      {/* Left pillar */}
      <mesh position={[-(openW / 2 + sideW / 2), wallH / 2, 0]}>
        <boxGeometry args={[sideW, wallH, 0.5]} />
        <meshStandardMaterial map={tex} color={WALL_COLOR} roughness={0.85} />
      </mesh>

      {/* Right pillar */}
      <mesh position={[(openW / 2 + sideW / 2), wallH / 2, 0]}>
        <boxGeometry args={[sideW, wallH, 0.5]} />
        <meshStandardMaterial map={tex} color={WALL_COLOR} roughness={0.85} />
      </mesh>

      {/* Top beam */}
      <mesh position={[0, openH + topH / 2, 0]}>
        <boxGeometry args={[openW + 0.6, topH, 0.5]} />
        <meshStandardMaterial map={tex} color={WALL_COLOR} roughness={0.85} />
      </mesh>

      {/* Archway frame accents */}
      <mesh position={[-(openW / 2), openH / 2, 0.26]}>
        <boxGeometry args={[0.15, openH, 0.15]} />
        <meshStandardMaterial color={accent} roughness={0.4} metalness={0.3} />
      </mesh>
      <mesh position={[(openW / 2), openH / 2, 0.26]}>
        <boxGeometry args={[0.15, openH, 0.15]} />
        <meshStandardMaterial color={accent} roughness={0.4} metalness={0.3} />
      </mesh>
      <mesh position={[0, openH, 0.26]}>
        <boxGeometry args={[openW + 0.3, 0.15, 0.15]} />
        <meshStandardMaterial color={accent} roughness={0.4} metalness={0.3} />
      </mesh>
    </group>
  );
}

// ── Hallway connecting lobby to a room ──
function Hallway({ from, to, axis, textures }) {
  const { damask, marble } = textures;
  const hw = 4; // hallway width
  const h = 6;

  let cx, cz, length;

  if (axis === "x") {
    // Horizontal hallway
    cx = (from[0] + to[0]) / 2;
    cz = (from[2] + to[2]) / 2;
    length = Math.abs(from[0] - to[0]) - 10 - 6; // subtract half-widths of lobby and room
    if (length < 1) length = 2;
  } else {
    // Vertical hallway (z-axis)
    cx = (from[0] + to[0]) / 2;
    cz = (from[2] + to[2]) / 2;
    length = Math.abs(from[2] - to[2]) - 7 - 5; // subtract half-depths
    if (length < 1) length = 2;
  }

  const floorTex = marble.clone();
  floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping;
  floorTex.repeat.set(1, length / 4);

  const wallTex = damask.clone();
  wallTex.wrapS = wallTex.wrapT = THREE.RepeatWrapping;
  wallTex.repeat.set(length / 3, h / 3);

  const isHorizontal = axis === "x";
  const fW = isHorizontal ? length : hw;
  const fD = isHorizontal ? hw : length;

  return (
    <group position={[cx, 0, cz]}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[fW, fD]} />
        <meshStandardMaterial map={floorTex} color="#f5e6c8" roughness={0.35} metalness={0.08} />
      </mesh>

      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, h, 0]}>
        <planeGeometry args={[fW, fD]} />
        <meshStandardMaterial color={CEILING_COLOR} roughness={0.95} />
      </mesh>

      {/* Side walls */}
      {isHorizontal ? (
        <>
          <mesh position={[0, h / 2, -hw / 2]} rotation={[0, 0, 0]}>
            <planeGeometry args={[length, h]} />
            <meshStandardMaterial map={wallTex} color={WALL_COLOR} roughness={0.85} />
          </mesh>
          <mesh position={[0, h / 2, hw / 2]} rotation={[0, Math.PI, 0]}>
            <planeGeometry args={[length, h]} />
            <meshStandardMaterial map={wallTex} color={WALL_COLOR} roughness={0.85} />
          </mesh>
        </>
      ) : (
        <>
          <mesh position={[-hw / 2, h / 2, 0]} rotation={[0, Math.PI / 2, 0]}>
            <planeGeometry args={[length, h]} />
            <meshStandardMaterial map={wallTex} color={WALL_COLOR} roughness={0.85} />
          </mesh>
          <mesh position={[hw / 2, h / 2, 0]} rotation={[0, -Math.PI / 2, 0]}>
            <planeGeometry args={[length, h]} />
            <meshStandardMaterial map={wallTex} color={WALL_COLOR} roughness={0.85} />
          </mesh>
        </>
      )}
    </group>
  );
}

// ── Main Museum Room Export ──
export function MuseumRoom() {
  const textures = useMuseumTextures();

  return (
    <group>
      {/* ── LOBBY (Sảnh trung tâm) ── */}
      <Room
        position={[0, 0, 0]}
        size={LOBBY_SIZE}
        textures={textures}
        openings={["left", "right", "back"]}
        accent="#C5A028"
        label="Sảnh chính"
      />

      {/* ── Hallway: Lobby → Left Room ── */}
      <Hallway
        from={[0, 0, 0]}
        to={ROOM_LEFT_POS}
        axis="x"
        textures={textures}
      />

      {/* ── Hallway: Lobby → Center Room ── */}
      <Hallway
        from={[0, 0, 0]}
        to={ROOM_CENTER_POS}
        axis="z"
        textures={textures}
      />

      {/* ── Hallway: Lobby → Right Room ── */}
      <Hallway
        from={[0, 0, 0]}
        to={ROOM_RIGHT_POS}
        axis="x"
        textures={textures}
      />

      {/* ── LEFT ROOM: Nhà nước hợp hiến, hợp pháp ── */}
      <Room
        position={ROOM_LEFT_POS}
        size={ROOM_SIZE}
        textures={textures}
        openings={["right"]}
        accent="#C5272D"
        label="Nhà nước hợp hiến, hợp pháp"
      />

      {/* ── CENTER ROOM: Nhà nước thượng tôn pháp luật ── */}
      <Room
        position={ROOM_CENTER_POS}
        size={ROOM_SIZE}
        textures={textures}
        openings={["front"]}
        accent="#C5A028"
        label="Nhà nước thượng tôn pháp luật"
      />

      {/* ── RIGHT ROOM: Pháp quyền nhân nghĩa ── */}
      <Room
        position={ROOM_RIGHT_POS}
        size={ROOM_SIZE}
        textures={textures}
        openings={["left"]}
        accent="#6F8F4E"
        label="Pháp quyền nhân nghĩa"
      />
    </group>
  );
}
