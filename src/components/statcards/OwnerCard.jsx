import Image from "next/image";
export default function CategoryCard() {
  return (
    <div className="card transition-all duration-300 ease-in-out rounded-lg relative z-10 w-20 h-20 bg-red-700 top-2 left-2 hover:top-0 hover:left-0 ownercard">
       <div className="absolute z-20 bg-gray-800 bg-opacity-50 -top-2 -left-2 vanilla-blur p-4 flex flex-col items-center justify-center border border-red-700 rounded-lg w-20 h-20 w-20 h-20 cardIn transition-all duration-300 ease-in-out">
         <div className="flex flex-col items-center">          
           <Image src="https://cdn.discordapp.com/avatars/925281412154818560/c40c9d876174cac09b19776bb57c637f.png?format=webp&quality=lossless" width={40} height={40} className="rounded-full"/>
           <span className="text-red-500 text-xs transition-all duration-300 ease-in-out">Owner</span>         
         </div>
         <h1 className="text-sm">tamvir.</h1>
       </div>
     </div>
  );
}