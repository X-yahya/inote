import React from 'react';
import Link from "next/link"; 
import { Button } from "@/components/ui/button"; 
import { ArrowLeft } from 'lucide-react';
import { UserButton } from "@clerk/nextjs";
import { Separator } from '@/components/ui/separator';
import NoteDialog from "@/components/noteDialog"; 
type Props = {}

const DashboardPage = (props: Props) => {
  return (
    <div className="bg-neutral-950 min-h-screen">
      <div className="max-w-7xl mx-auto p-10">
        <div className="flex justify-between items-center md:flex-row flex-col">
          <div className="flex items-center">
            <Link href="/">
              <Button size="sm" className="bg-transparent transition ease-in-out  delay-150 hover:-translate-y-1 hover:scale-110  duration-300 rounded-full">
                <ArrowLeft className="mt-14 w-4 h-5 " />    
              </Button>
            </Link>
            <div className="mt-4 ml-4">
              <h1 className="font-bold text-3xl text-white">Notes</h1>
            </div>
            <div className="w-4"></div>
            <UserButton />
          </div>
        </div>
        <div className="h-8"></div>
        <Separator />
        <div className="h-8"></div>
        <div className='text-center'>
          <h2 className='text-xl font-semibold text-gray-500'>You have No Notes yet</h2>
        </div>
        <div className="grid  sm:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-3">
        
        <NoteDialog  />

        </div>
      </div>
    </div>
  );
}; 

export default DashboardPage;
