import Image from "next/image";
import { Button } from "@/components/ui/button";
import curveImg from "../assests/curve.png";
import TypingEffect from "../components/ui/TypingEffect";

import astroImg from "../assests/astro.png";
import Pencil from "../assests/pencil.png";

export default function Home() {
  return (
    <div className="bg-gradient-to-b min-h-screen from-neutral-900 to-neutral-900">
      <div className="absolute top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-semibold text-7xl text-center tracking-light">
          i<span className="text-blue-500 font-bold">note</span>
        </h1>
        <div className="mt-4">
          <Image src={curveImg} alt="Curve" />
        </div>
        <h2 className="font-semibold text-3xl text-center text-white">
          AI Powered
        <div className="mt-20"></div>
        <TypingEffect/>

        </h2>
      </div>
        
      
      
      
      
  
      
    </div>
  );
}
