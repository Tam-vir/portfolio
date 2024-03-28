import Image from "next/image";
import Welcome from "./Welcome";
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
      <Welcome />
    </main>
  );
}
