import React from "react";
import fs from "fs/promises"; 
export default function Home() {

  const submitAction = async (e)=>{
    'use server'
    console.log(e.get("name") ,e.get("email"))
    fs.writeFile('data.txt', `name: ${e.get('name')}, email: ${e.get('email')}\n`, {flag: 'a+'})
    console.log('form submitted')
  }


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <form action={submitAction} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name">name</label>
      <input className="text-black border" class type="text" name="name" />
      </div>
      
      <div>
        <label htmlFor="email">email</label>
      <input className="text-black border" class type="email" name="email" />
      </div>

      <button >click me</button>
    </form>
    </div>
  );
}
