"use client";

import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type { Mesh } from "three";

/** Inner form — slow, readable */
function CoreForm() {
  const mesh = useRef<Mesh>(null);
  useFrame((_, delta) => {
    const m = mesh.current;
    if (!m) return;
    m.rotation.x += delta * 0.045;
    m.rotation.y += delta * 0.07;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.08} floatIntensity={0.22}>
      <mesh ref={mesh} scale={2.15}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#050a10"
          emissive="#00a8d4"
          emissiveIntensity={0.48}
          metalness={0.92}
          roughness={0.24}
        />
      </mesh>
    </Float>
  );
}

/** Outer wireframe — atmosphere only */
function WireShell() {
  const mesh = useRef<Mesh>(null);
  useFrame((_, delta) => {
    const m = mesh.current;
    if (!m) return;
    m.rotation.y -= delta * 0.035;
    m.rotation.x -= delta * 0.018;
  });
  return (
    <mesh ref={mesh} scale={3.35}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial
        color="#00c8ff"
        wireframe
        transparent
        opacity={0.095}
        depthWrite={false}
      />
    </mesh>
  );
}

/** Faceted orbit — reads as “instrument” at a glance */
function OrbitRing() {
  const mesh = useRef<Mesh>(null);
  useFrame((_, delta) => {
    const m = mesh.current;
    if (!m) return;
    m.rotation.z += delta * 0.022;
    m.rotation.y += delta * 0.011;
  });
  return (
    <mesh ref={mesh} rotation={[1.12, 0.35, 0]}>
      <torusGeometry args={[2.72, 0.035, 5, 56]} />
      <meshBasicMaterial
        color="#7ee7ff"
        wireframe
        transparent
        opacity={0.14}
        depthWrite={false}
      />
    </mesh>
  );
}

export function HeroScene() {
  const [off, setOff] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setOff(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (off) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] [&_canvas]:h-full [&_canvas]:w-full"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_72%_58%_at_50%_42%,transparent_26%,var(--color-bg-base)_82%)] opacity-[0.88]"
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-[1] opacity-[0.38] md:opacity-[0.48]">
        <Canvas
          camera={{ position: [0, 0.15, 6.4], fov: 40 }}
          dpr={[1, 1.2]}
          gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        >
          <ambientLight intensity={0.28} />
          <directionalLight position={[6, 10, 8]} intensity={0.75} color="#c5ecfb" />
          <Suspense fallback={null}>
            <WireShell />
            <OrbitRing />
            <CoreForm />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
