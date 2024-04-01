import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faVolumeHigh} from "@fortawesome/free-solid-svg-icons"
export default function VoiceCard() {
  return (
    <div className="card transition-all duration-300 ease-in-out rounded-lg relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-indigo-300 top-2 left-2 hover:top-0 hover:left-0 totalcard">
       <div className="absolute z-20 bg-gray-800 bg-opacity-50 -top-2 -left-2 vanilla-blur p-4 flex flex-col items-center justify-center border border-indigo-300 rounded-lg w-16 h-16 sm:w-20 sm:h-20 cardIn transition-all duration-300 ease-in-out">
         <div className="flex flex-col items-center">          
           <p className="text-indigo-300 text-xl"><FontAwesomeIcon className="cardIcon transition-all duration-300 ease-in-out" icon={faVolumeHigh}/></p>
           <span className="text-indigo-300 text-xs transition-all duration-300 ease-in-out">Voice</span>         
         </div>
         <h1 className="text-sm">21</h1>
       </div>
     </div>
  );
}