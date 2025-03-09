'use client'
import FormHeader from "@/components/backoffice/FormHeader";
import ImageInput from "@/components/FormInputs/ImageInput";
import TextAreaInput from "@/components/FormInputs/TextAreaInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import { makePostRequest } from "@/lib/apiRequest";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { generateSlug } from "@/lib/generateSlug";
import toast from "react-hot-toast";

export default function NewStore() {
  const [logoUrl,setLogoUrl] = useState("")
  const [loading,setLoading] = useState(false)
    const {register,reset,handleSubmit,formState:{errors}} = useForm()
    async function onSubmit(data){
      if (!logoUrl) {
              toast.error("Please upload a logo before submitting!");
              return;  // Stop the function if no image is uploaded
            }
      {/* 
        id => auto generated
        name
        location
        description
        image  
      */}
      const slug = generateSlug(data.name)
        data.slug = slug
        data.logoUrl=logoUrl
      console.log(data)
      makePostRequest(
        setLoading,
        'api/stores',
        data,
        'Store',
        reset
      )
      setLogoUrl("")
    }
  return (
    <div>
      <FormHeader title="Adding New Store"/>
      {/* Form Fields */}

        <form onSubmit={handleSubmit(onSubmit)}  className="w-full max-w-4xl p-4 bg-slate-50 border  border-slate-200 rounded-lg shadow-lg sm:p-6 md:p-8 dark:bg-slate-700 dark:border-slate-700 mx-auto my-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 ">
            <TextInput
                label="Store Name"
                name="name"
                register={register}
                errors={errors}
                className="w-full"
            />
            <TextInput
                label="Store Location"
                name="location"
                register={register}
                errors={errors}
                className="w-full"
            />
            <TextAreaInput
                label="Store Description"
                name="description"
                register={register}
                errors={errors}
            />
            <ImageInput
            label="Store Logo"
            imageUrl={logoUrl}
            setImageUrl={setLogoUrl}
            endpoint="storeLogoUploader"
            />
            <SubmitButton
            isLoading={loading}
            buttonTitle="Creating New Store"
            loadingButtonTitle="Creating Store , please wait ..."
            />
            </div>
        </form>
      
    </div>
  );
}
