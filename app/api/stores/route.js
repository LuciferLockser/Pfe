import { NextResponse } from "next/server"

export async function POST(request){
    try {
        const {name,slug,location,description,logoUrl}=await request.json()
        const newStore = {name,slug,location,description,logoUrl}
        console.log(newStore)
        return NextResponse.json(newStore)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Creating Store Failed !",
            error
        },{status:500})
  }
}