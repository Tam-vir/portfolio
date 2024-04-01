export default function BoostCard() {
  return (
    <div className="boostCard transition-all duration-300 ease-in-out rounded-lg relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-pink-500 top-2 left-2 hover:top-0 hover:left-0">
       <div className="absolute z-20 bg-gray-800 bg-opacity-50 -top-2 -left-2 vanilla-blur p-4 flex flex-col items-center justify-center border border-pink-500 rounded-lg w-16 h-16 sm:w-20 sm:h-20 boostCardIn transition-all duration-300 ease-in-out">
         <div className="flex flex-col items-center">          
           <p className="text-pink-500 text-xl"><svg className="boostIcon" xmlns="http://www.w3.org/2000/svg" width="32" height="26" fill="none" viewBox="0 0 24 24" id="level-discord-boost"><path className="boostPathOne duration-300 ease-in-out" fill="#FF4DA5" d="M12.4801 1.42383C12.202 1.19206 11.798 1.19206 11.5199 1.42383L5.51986 6.42383C5.34887 6.56633 5.25 6.77742 5.25 7V17C5.25 17.2226 5.34887 17.4337 5.51986 17.5762L11.5199 22.5762C11.798 22.8079 12.202 22.8079 12.4801 22.5762L18.4801 17.5762C18.6511 17.4337 18.75 17.2226 18.75 17V7C18.75 6.77742 18.6511 6.56633 18.4801 6.42383L12.4801 1.42383Z"></path><path fill="#ECEFF1" className="boostPathTwo duration-300 ease-in-out" fillRule="evenodd" d="M11.4932 5.44713C11.7799 5.18429 12.2201 5.18429 12.5068 5.44713L15.5068 8.19713C15.6618 8.33919 15.75 8.53977 15.75 8.75V15.25C15.75 15.4602 15.6618 15.6608 15.5068 15.8029L12.5068 18.5529C12.2201 18.8157 11.7799 18.8157 11.4932 18.5529L8.49321 15.8029C8.33823 15.6608 8.25 15.4602 8.25 15.25V8.75C8.25 8.53977 8.33823 8.33919 8.49321 8.19713L11.4932 5.44713ZM9.75 9.07993V14.9201L12 16.9826L14.25 14.9201V9.07993L12 7.01743L9.75 9.07993Z" clipRule="evenodd"></path></svg></p>
           <span className="text-pink-400 text-xs transition-all duration-300 ease-in-out">Boosts</span>         
         </div>
         <h1 className="text-sm">0</h1>
       </div>
     </div>
  );
}