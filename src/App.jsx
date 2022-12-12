import { useState, Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./components/Model3";
import "./app.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Canvas
        camera={{ position: [3, 0, 10.25], fov: 10 }}
        dpr={[1.5,2]}
        style={{
          backgroundColor: "#111a21",
          width: "100vw",
          height: "100vh",
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          // your model here
          <Model position={[0.125, -0.9, 0]} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
