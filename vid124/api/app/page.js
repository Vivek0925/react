
export default function Home() {

  
  const handleClick = async()=>{
    let data = {
      name: "iv",
      age:18
    }
    let a = await fetch('/api/add' , {method:"POST", headers:{
      "Content-Type ": "application/json",
    },
  body:JSON.stringify(data),
})
let res = await a.json()
console.log(res)
  }


  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Welcome to Next.js 13 App Router!
      </h1>
      <button onClick={handleClick}>click</button>
    </div>
  );
}
