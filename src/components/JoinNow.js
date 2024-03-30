import Image from "next/image";

export default function JoinNow() {
  return (
      <div className="w-full h-full p-4 flex flex-row ">
        <div className="flex flex-col justify-center w-1/2 p-2">
          <h1 className="text-4xl font-extrabold">Ready to have some fun?</h1>
          <br/> 
           
          <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod dictum varius. Nulla ultrices, ligula quis vestibulum laoreet, elit dui volutpat tellus, a sodales lorem ex vel augue. Aliquam et lectus in ipsum dictum rhoncus ut ut libero. Aliquam bibendum pretium justo.</p>
          <br/>
          <a href="https://discord.gg/6hkKNjfnm5" type="button" className="w-2/6 transition duration-500 ease-in-out border border-green-400 hover:scale-110 bg-gradient-to-r from-green-400 via-gray-900 to-gray-900 p-2 text-2xl text-center rounded-md"> Join Now!</a>
        </div>
        <div className="bg-banner2 bg-contain bg-center bg-no-repeat w-1/2">
         
        </div>
      </div>
  );
}