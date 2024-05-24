import Image from "next/image";
import { Button } from "@/components/ui/button";
import curveImg from "../assests/curve.png";
import TypingEffect from "../components/ui/TypingEffect";
import Link from "next/link";
import astroImg from "../assests/astro.png";
import Pencil from "../assests/pencil.png";
import {ArrowRight} from "lucide-react"

export default function Home() {
  return (
    <div className="bg-neutral-950 min-h-screen ">
      <div className="absolute top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-semibold text-7xl text-center tracking-light">
          i<span className="text-blue-600 font-bold">note</span>
        </h1>
        <div className="mt-4">
          <Image src={curveImg} alt="Curve" />
        </div>
        <div className="mt-8 flex justify-center font-bold ">
          <TypingEffect></TypingEffect>
        </div>
       <div className="mt-20"></div>
       <div className="flex justify-center">
        <Link href ="/dashboard">
          <Button className="bg-blue-600 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 hover:bg-zinc-950 duration-300">Get Started
          <ArrowRight className="ml-2 w-5 h-5" strokeWidth={3}/>
          </Button>
        </Link>
        </div>
      
      </div>
        
      
      
      
      
  
      
    </div>
  );
}
