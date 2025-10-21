"use client"  
import { useState, useEffect } from "react";
export default function Home() {
  const [count, setcount] = useState(0)
  return (
   <div>
    i am component based app{count}
    <button className="bg-amber-300" onClick={()=> setcount(count + 1)}>hello</button>
   </div>
  );
}
