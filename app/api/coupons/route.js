import { NextResponse } from "next/server"

export async function POST(request){
    try {
        const {title,expireDate,couponCode}=await request.json()
        const newCoupon = {title,expireDate,couponCode}
        console.log(newCoupon)
        return NextResponse.json(newCoupon)
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "Creating Coupon Failed !",
            error
        },{status:500})
  }
}