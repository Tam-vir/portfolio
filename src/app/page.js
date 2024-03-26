import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-banner bg-cover bg-center w-full h-full p-4 flex align-center float-right">
      <div className="mr-2">
      <Image src="/logo.jpg" alt="logo" width={300} height={300} />
      </div>
    </main>
  );
}
