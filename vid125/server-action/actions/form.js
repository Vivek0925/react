'use server'
import fs from "fs/promises"; 

 export const submitAction = async (e)=>{
    console.log(e.get("name") ,e.get("email"))
    fs.writeFile('data.txt', `name: ${e.get('name')}, email: ${e.get('email')}\n`, {flag: 'a+'})
    console.log('form submitted')
  }