import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://ik.imagekit.io/adrisantos11/image-2";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('image-id')
    const res = await fetch(`${DATA_SOURCE_URL}/${id}.jpg`)
    const blob = await res.blob();
     
    console.log()
    return new NextResponse(blob)
}