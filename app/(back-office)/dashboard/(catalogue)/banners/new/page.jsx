'use client'
import FormHeader from "@/components/backoffice/FormHeader";
import ImageInput from "@/components/FormInputs/ImageInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import { makePostRequest } from "@/lib/apiRequest";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewBanner() {
  const [imageUrl,setImageUrl] = useState("")
  const [loading,setLoading] = useState(false)
    const {register,reset,handleSubmit,formState:{errors}} = useForm()
    async function onSubmit(data){
      if (!logoUrl) {
        toast.error("Please upload a banner before submitting!");
        return;
      }
      {/* 
        id => auto generated
        title
        link
        image  
      */}
      data.imageUrl=imageUrl
      console.log(data)
      makePostRequest(
        setLoading,
        'api/banners',
        data,
        'Banner',
        reset
      )
      setImageUrl("")
    }
  return (
    <div>
      <FormHeader title="Adding New Banner"/>
      {/* Form Fields */}

        <form onSubmit={handleSubmit(onSubmit)}  className="w-full max-w-4xl p-4 bg-slate-50 border  border-slate-200 rounded-lg shadow-lg sm:p-6 md:p-8 dark:bg-slate-700 dark:border-slate-700 mx-auto my-3">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 ">
            <TextInput
                label="Banner Title"
                name="title"
                register={register}
                errors={errors}
            />
            <TextInput
                label="Banner Link"
                name="link"
                type="url"
                register={register}
                errors={errors}
            />
            <ImageInput
            label="Banner Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="bannerImageUploader"
            />
            <SubmitButton
            isLoading={loading}
            buttonTitle="Creating New Banner"
            loadingButtonTitle="Creating Banner , please wait ..."
            />
            </div>
        </form>
      
    </div>
  );
}
