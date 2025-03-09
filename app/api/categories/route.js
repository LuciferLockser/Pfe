import { NextResponse } from "next/server"

export async function POST(request){
    try {
        const {title,slug,parentcategory,description,imageUrl}=await request.json()
        const newCategory = {title,slug,parentcategory,description,imageUrl}
        console.log(newCategory)
        return NextResponse.json(newCategory)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Creating Category Failed !",
            error
        },{status:500})
  }
}