import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-[87vh] items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>i am component</h1>
      //image tag
      <Image src="https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg" alt="Description of image" width={500} height={500} />
      
    </div>
  );
}
