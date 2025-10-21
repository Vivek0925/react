
// import { useState, useEffect } from "react";
import fs from 'fs/promises'
import { to } from './../../../vid121/first/.next/static/chunks/50986_next_dist_client_6fa53630._';
export default function Home() {
  // const [count, setcount] = useState(0)
  console.log("rendered 2")
  let a  = fs.readFile(".gitignore")
  a.then(e=> {console.log(e.toString())})
  return (
   <div>
    i am component based app
    {/* <button className="bg-amber-300" onClick={()=> setcount(count + 1)}>hello</button> */}
   </div>
  );
}
