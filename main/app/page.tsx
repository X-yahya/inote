import {
  ClerkProvider
} from '@clerk/nextjs'
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <ClerkProvider>
    <Button> click me </Button>
    </ClerkProvider>
  )
}
