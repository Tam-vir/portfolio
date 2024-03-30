import Image from "next/image";

export default function JoinNow() {
  return (
      <div className="w-full h-full p-4 flex flex-row ">
        <div className="flex flex-col justify-center w-1/2 p-2">
          <h1 className="text-4xl font-extrabold">Ready to have some fun?</h1>
          <br/> 
           
          <p className="text-2xl">Otaku Realm is a place full of amazing people with lots of fun activities! Be a member now for an amazing experience! This server has all the amazing game and music bots to spice up your stay!</p>
          <br/>
          <a href="https://discord.gg/6hkKNjfnm5" type="button" className="w-2/6 transition duration-500 ease-in-out border border-green-400 hover:scale-110 bg-gradient-to-r from-green-400 via-gray-900 to-gray-900 p-2 text-2xl text-center rounded-md"> Join Now!</a>
        </div>
        <div className="bg-banner2 bg-contain bg-center bg-no-repeat w-1/2">
         
        </div>
      </div>
  );
}