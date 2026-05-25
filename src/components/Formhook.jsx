import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
const Formhook = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))} action="">
        <input {...register("name")} type="text" placeholder="name" />
        <input {...register("email")} type="text" placeholder="email" />
      </form>
    </div>
  );
};

export default Formhook;
