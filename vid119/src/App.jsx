import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form"

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors , isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      let r = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      let res = await r.text();
      console.log(data, res);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  }
  
  return (
    <>
    <div className="container">

       <form onSubmit={handleSubmit(onSubmit)}>

          <input placeholder='username' {...register("username", { required: true , minLength: {value: 3, message: "this should be min 3 letters"},maxLength :{value : 8 , message: "min 8 letters"} })} type='text' />
          {errors.username && <span>{errors.username.message}</span>}
<br />
          <input placeholder='password'{...register("password", { required: true, minLength: { value: 3, message: "this should be min 3 letters" }, maxLength: { value: 8, message: "min 8 letters"} })} type='text' />
          {errors.password && <span>{errors.password.message}</span>}
<br />
          <input disabled={isSubmitting} type="submit" value="submit" />
      </form>
    </div>
      
    </>
  )
}

export default App
