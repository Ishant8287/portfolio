import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={2} />
      <directionalLight position={[2, 2, 2]} />

      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Sphere args={[1.5, 64, 64]}>
          <MeshDistortMaterial color="#0ea5e9" distort={0.4} speed={2} />
        </Sphere>
      </Float>
    </Canvas>
  );
}
