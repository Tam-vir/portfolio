import Image from "next/image";

export default function Welcome() {
  return (
      <div className="w-full h-full p-4 flex items-center justify-end">
        <div className="mr-8">
          <Image src="/logo.jpg" alt="logo" width={300} height={300}/>
        </div>
      </div>
  );
}