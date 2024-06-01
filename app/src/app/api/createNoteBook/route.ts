import { generateImage, generateImagePrompt } from "@/lib/openai";
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        console.log("User ID:", userId); 

        if (!userId) {
            console.error("Unauthorized: No user ID found");
            return new NextResponse("unauthorized", { status: 401 });
        }

        const body = await req.json();
        const { name } = body;

       const image_description = await generateImagePrompt(name);
        console.log({image_description}) ; 
       return new NextResponse("MRIGLL") ; 


    } catch (error) {
        console.error("An error occurred:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
