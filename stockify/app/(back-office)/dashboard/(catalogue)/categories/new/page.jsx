"use client";
import FormHeader from "@/components/backoffice/FormHeader";
import SubmitButton from "@/components/Forminputs/SubmitButton";
import TextareaInput from "@/components/Forminputs/TextAreaInput";
import TextInput from "@/components/Forminputs/Textinput";
import { generateSlug } from "@/lib/generateSlug";
import { useForm } from "react-hook-form";

export default function NewCategory() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const slug=generateSlug(data.title)
    data.slug=slug
    console.log("Form Data:", data);
    // Ajoute ici la logique d’enregistrement (ex: API call)
  };

  return (
    <div>
      <FormHeader title="New Category" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />
            <TextareaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
        </div>



        {/* Bouton de soumission */}
       
       <SubmitButton isLoading={false} buttonTitle="Create Category" LoadingButtonTitle="Creating Category please wait..."/>
      </form>
    </div>
  );
}
