import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const ROOM_LIMIT = {
  minX: -7,
  maxX: 7,
  minZ: -7,
  maxZ: 6.5,
};

export function MuseumPlayer() {
  const { camera } = useThree();
  const keys = useRef({});
  const velocity = useRef(new THREE.Vector3());

  useEffect(() => {
    const handleKeyDown = (event) => {
      keys.current[event.code] = true;
    };
    const handleKeyUp = (event) => {
      keys.current[event.code] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame((_, delta) => {
    const speed = 4.2;
    const rotateSpeed = 1.5;

    velocity.current.set(0, 0, 0);

    if (keys.current.KeyW || keys.current.ArrowUp) velocity.current.z -= speed;
    if (keys.current.KeyS || keys.current.ArrowDown) velocity.current.z += speed;
    if (keys.current.KeyA) velocity.current.x -= speed;
    if (keys.current.KeyD) velocity.current.x += speed;

    if (keys.current.ArrowLeft) camera.rotation.y += rotateSpeed * delta;
    if (keys.current.ArrowRight) camera.rotation.y -= rotateSpeed * delta;

    camera.rotation.x = 0;
    camera.rotation.z = 0;

    const angle = camera.rotation.y;
    const forward = new THREE.Vector3(Math.sin(angle), 0, Math.cos(angle));
    const right = new THREE.Vector3(Math.cos(angle), 0, -Math.sin(angle));

    camera.position.addScaledVector(forward, velocity.current.z * delta);
    camera.position.addScaledVector(right, velocity.current.x * delta);

    camera.position.x = THREE.MathUtils.clamp(camera.position.x, ROOM_LIMIT.minX, ROOM_LIMIT.maxX);
    camera.position.y = 2.65;
    camera.position.z = THREE.MathUtils.clamp(camera.position.z, ROOM_LIMIT.minZ, ROOM_LIMIT.maxZ);
  });

  return null;
}
