import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, OrbitControls } from "@react-three/drei";
import type { Mesh, Group } from "three";
import * as THREE from "three";
import { notes, categoryMeta, type Note } from "@/data/notes";

function NoteSphere({
  note,
  position,
  onClick,
  isHovered,
  onHover,
  onUnhover,
}: {
  note: Note;
  position: [number, number, number];
  onClick: () => void;
  isHovered: boolean;
  onHover: () => void;
  onUnhover: () => void;
}) {
  const meshRef = useRef<Mesh>(null);
  const meta = categoryMeta[note.category];
  const color = new THREE.Color(meta.color);

  useFrame((_, delta) => {
    if (meshRef.current) {
      const target = isHovered ? 1.3 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(target, target, target), delta * 8);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group position={position}>
        <mesh
          ref={meshRef}
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            onHover();
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            onUnhover();
            document.body.style.cursor = "default";
          }}
        >
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={isHovered ? 0.6 : 0.15}
            roughness={0.2}
            metalness={0.1}
            transparent
            opacity={isHovered ? 1 : 0.85}
          />
        </mesh>
        {isHovered && (
          <Text
            position={[0, 0.55, 0]}
            fontSize={0.18}
            color="white"
            anchorX="center"
            anchorY="bottom"
            maxWidth={2}
          >
            {note.title}
          </Text>
        )}
      </group>
    </Float>
  );
}

function ConnectionLines({ hoveredId }: { hoveredId: string | null }) {
  const lines = useMemo(() => {
    if (!hoveredId) return [];
    const note = notes.find((n) => n.id === hoveredId);
    if (!note) return [];

    const idx = notes.findIndex((n) => n.id === hoveredId);
    const fromPos = getSpherePosition(idx, notes.length);

    return note.connections
      .map((connId) => {
        const connIdx = notes.findIndex((n) => n.id === connId);
        if (connIdx === -1) return null;
        const toPos = getSpherePosition(connIdx, notes.length);
        return { from: fromPos, to: toPos };
      })
      .filter(Boolean) as { from: [number, number, number]; to: [number, number, number] }[];
  }, [hoveredId]);

  return (
    <>
      {lines.map((line, i) => (
        <Line key={i} from={line.from} to={line.to} />
      ))}
    </>
  );
}

function Line({ from, to }: { from: [number, number, number]; to: [number, number, number] }) {
  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute(
      "position",
      new THREE.Float32BufferAttribute([...from, ...to], 3)
    );
    return g;
  }, [from, to]);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color="#8b5cf6" transparent opacity={0.4} />
    </lineSegments>
  );
}

function getSpherePosition(index: number, total: number): [number, number, number] {
  // Fibonacci sphere distribution
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  const y = 1 - (index / (total - 1)) * 2;
  const radius = Math.sqrt(1 - y * y);
  const theta = goldenAngle * index;

  const scale = 5.5;
  return [Math.cos(theta) * radius * scale, y * scale, Math.sin(theta) * radius * scale];
}

function ClusterGroup({ onNoteClick }: { onNoteClick: (id: string) => void }) {
  const groupRef = useRef<Group>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useFrame((_, delta) => {
    if (groupRef.current && !hoveredId) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  const positions = useMemo(
    () => notes.map((_, i) => getSpherePosition(i, notes.length)),
    []
  );

  return (
    <group ref={groupRef}>
      <ConnectionLines hoveredId={hoveredId} />
      {notes.map((note, i) => (
        <NoteSphere
          key={note.id}
          note={note}
          position={positions[i]}
          onClick={() => onNoteClick(note.id)}
          isHovered={hoveredId === note.id}
          onHover={() => setHoveredId(note.id)}
          onUnhover={() => setHoveredId(null)}
        />
      ))}
    </group>
  );
}

export default function SphereCluster({ onNoteClick }: { onNoteClick: (id: string) => void }) {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 14], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
        <ClusterGroup onNoteClick={onNoteClick} />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={6}
          maxDistance={25}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
