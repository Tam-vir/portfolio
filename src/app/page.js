import Image from "next/image";
/**
 const myHeaders = new Headers();
 myHeaders.append("Authorization", "8o3EaqEdep-EZzerEFTZcMnq2Q5tPdqt3");

 const requestOptions = {
   method: "GET",
   headers: myHeaders,
   redirect: "follow"
 };

 fetch("https://api.tatsu.gg/v1/guilds/939120593956126730/rankings/all", requestOptions)
   .then((response) => response.text())
   .then((result) => console.log(result))
   .catch((error) => console.error(error));
 */
export default function Home() {
  return (
    <main className="bg-banner bg-cover bg-center w-full h-full">
      <div className="w-full h-full p-4 flex items-center justify-end">
        <div className="mr-8">
          <Image src="/logo.jpg" alt="logo" width={300} height={300}/>
        </div>
      </div>
    </main>
  );
}
