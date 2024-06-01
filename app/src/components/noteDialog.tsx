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
import { useMutation } from '@tanstack/react-query';
import axios from "axios"

type Props = {};

const NoteDialog = (props: Props) => {
  const [input, setInput] = React.useState("");

  const createNotebook = useMutation({
    mutationFn: async () => {
      const response = await axios.post("/api/createNoteBook", {
        name: input,
      });
      return response.data;
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "") {
      window.alert("Please enter a name for your notebook");
      return;
    }
    createNotebook.mutate(undefined, {
      onSuccess: ({ note_id }) => {
        console.log("created new note:", { note_id });
      },
      onError: (error) => {
        console.error(error);
        window.alert("Failed to create new notebook");
      },
    });
  };
  return (
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
          <form onSubmit={handleSubmit}>
          <div className="h-4"></div>

            <Input value={input} onChange={(e)=>setInput(e.target.value)} placeholder='name'  />
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
