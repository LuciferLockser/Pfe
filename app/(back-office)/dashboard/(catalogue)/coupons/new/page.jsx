'use client'
import FormHeader from "@/components/backoffice/FormHeader";
import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateCouponCode } from "@/lib/generateCouponCode";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewCoupon() {
  const [loading,setLoading] = useState(false)
    const {register,reset,handleSubmit,formState:{errors}} = useForm()
    async function onSubmit(data){
      {/* 
        id => auto generated
        title
        code => auto generated
        expire date 
      */}
      const couponCode = generateCouponCode(data.title,data.expireDate)
        data.couponCode = couponCode
      console.log(data)
      makePostRequest(
              setLoading,
              'api/coupons',
              data,
              'Coupon',
              reset
            )
    }
  return (
    <div>
      <FormHeader title="Adding New Coupon"/>
      {/* Form Fields */}

        <form onSubmit={handleSubmit(onSubmit)}  className="w-full max-w-4xl p-4 bg-slate-50 border  border-slate-200 rounded-lg shadow-lg sm:p-6 md:p-8 dark:bg-slate-700 dark:border-slate-700 mx-auto my-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 ">
            <TextInput
                label="Coupon Title"
                name="title"
                register={register}
                errors={errors}
                className="w-full"
            />
            <TextInput
                label="Coupon Expire Date"
                name="expireDate"
                type="date"
                register={register}
                errors={errors}
                className="w-full"
            />
            <SubmitButton
            isLoading={loading}
            buttonTitle="Creating New Coupon"
            loadingButtonTitle="Creating Coupon , please wait ..."
            />
            </div>
        </form>
      
    </div>
  );
}

