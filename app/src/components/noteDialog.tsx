"use client";
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { Button } from './ui/button';

type Props = {};

const NoteDialog = (props: Props) => {
  return (
    const 
    <Dialog>
      <DialogTrigger >
        <div className="border-dashed border-2 border-blue-600 h-full flex rounded-lg items-center justify-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4 cursor-pointer">
          <Plus className="w-6 h-6 text-blue-600" strokeWidth={3} />
          <h2 className='font-semibold text-gray-600'>New notebook</h2>
        </div>
      </DialogTrigger>
      <DialogContent className=" flex items-center justify-between		 ">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full h-full max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle>
              i<span className='text-blue-600 tracking-light'>note</span>
            </DialogTitle>
            <DialogDescription>
              Create a new notebook
            </DialogDescription>
          </DialogHeader>
          <form>
          <div className="h-4"></div>

            <Input placeholder='name'  />
            <div className="h-4"></div>
            <div className="flex justify-center gap-2	">
              <Button type="reset" variant={'secondary'}>Cancel</Button>
              <Button type="submit" className='bg-blue-600'>Create</Button>
            </div>
            
            
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NoteDialog;
