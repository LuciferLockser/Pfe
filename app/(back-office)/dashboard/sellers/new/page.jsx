'use client'
import FormHeader from "@/components/backoffice/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateUserCode } from "@/lib/generateUserCode";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewSeller() {
  const [loading,setLoading] = useState(false)
    const {register,reset,handleSubmit,formState:{errors}} = useForm()
    async function onSubmit(data){
      {/* 
        id => auto generated
        title
        code => auto generated
        expire date 
      */}
      const sellerCode = generateUserCode('PNVNTRY',data.name)
        data.sellerCode =sellerCode
      console.log(data)
      makePostRequest(
                    setLoading,
                    'api/sellers',
                    data,
                    'Seller',
                    reset
                  )
    }
  return (
    <div>
      <FormHeader title="Adding New Seller"/>
      {/* Form Fields */}

        <form onSubmit={handleSubmit(onSubmit)}  className="w-full max-w-4xl p-4 bg-slate-50 border  border-slate-200 rounded-lg shadow-lg sm:p-6 md:p-8 dark:bg-slate-700 dark:border-slate-700 mx-auto my-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 ">
            <TextInput
                label="Seller's Full Name"
                name="name"
                register={register}
                errors={errors}
                className="w-full"
            />
            <TextInput
                label="Seller's Phone"
                name="phone"
                type="tel"
                register={register}
                errors={errors}
                className="w-full"
            />
            <TextInput
                label="Seller's Email Address"
                name="email"
                register={register}
                errors={errors}
                className="w-full"
            />
            <TextInput
                label="Seller's Physical Address"
                name="physicalAddress"
                register={register}
                errors={errors}
                className="w-full"
            />
            <TextInput
                label="Contact Person"
                name="contactPerson"
                register={register}
                errors={errors}
                className="w-full"
            />
            <TextInput
                label="Contact Person Phone"
                name="contactPersonPhone"
                type="tel"
                register={register}
                errors={errors}
                className="w-full"
            />
            <TextAreaInput
                label="Payement Terms"
                name="terms"
                register={register}
                errors={errors}
            />
            <TextAreaInput
                label="Notes"
                name="notes"
                register={register}
                errors={errors}
                isRequired={false}
            />
            <SubmitButton
            isLoading={loading}
            buttonTitle="Adding New Seller"
            loadingButtonTitle="Adding Seller , please wait ..."
            />
            </div>
        </form>
      
    </div>
  );
}

