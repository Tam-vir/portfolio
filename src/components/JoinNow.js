export default function JoinNow() {
  return (
      <div className="w-full h-full p-4 flex md:flex-row flex-col-reverse">
        <div className="flex flex-col md:justify-center md:w-1/2 w-full h-1/2 md:h-full p-2">
          <h1 className="md:text-4xl text-2xl font-extrabold">Ready to have some fun?</h1>
          <br/> 
           
          <p className="md:text-2xl text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod dictum varius. Nulla ultrices, ligula quis vestibulum laoreet, elit dui volutpat tellus, a sodales lorem ex vel augue. Aliquam et lectus in ipsum dictum rhoncus ut ut libero. Aliquam bibendum pretium justo. hehe</p>
          <br/>
          <a href="https://discord.gg/6hkKNjfnm5" type="button" className="md:w-2/6 w-9/12 transition duration-500 ease-in-out border border-green-400 hover:scale-110 bg-gradient-to-r from-green-400 via-gray-900 to-gray-900 p-2 md:text-2xl text-xl text-center rounded-md"> Join Now!</a>
        </div>
        <br />
        <div className="bg-banner2 bg-contain bg-center bg-no-repeat md:w-1/2 w-full h-1/2 md:h-full">
         
        </div>
      </div>
  );
}