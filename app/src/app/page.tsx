import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    
<div className="bg-gradient-to-b min-h-screen from-neutral-900 to-neutral-900">
  <div className="absolute top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2">
    <h1 className="font-semibold text-7x1 text-center tracking-wider	">
      i<span className="text-blue-500 font-bold">note</span></h1>
  <div className="mt-4">
    <img src="./src/assets/curve.png" alt="" />
  </div>
  <h2 className="font-semibold text-3x1 text-center text-white">
    Ai Powered
  </h2>
  </div>

</div>
);
}
