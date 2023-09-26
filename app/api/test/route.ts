import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://ik.imagekit.io/adrisantos11/image-1/cine1.jpeg";

export async function GET() {
    const res = await fetch(DATA_SOURCE_URL)
    const blob = await res.blob();
     
    console.log()
    return new NextResponse(blob)
}