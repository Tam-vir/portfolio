import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faRobot} from "@fortawesome/free-solid-svg-icons"
export default function TotalCard() {
  return (
    <div className="card transition-all duration-300 ease-in-out rounded-lg relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-green-300 top-2 left-2 hover:top-0 hover:left-0 botcard">
       <div className="absolute z-20 bg-gray-800 bg-opacity-50 -top-2 -left-2 vanilla-blur p-4 flex flex-col items-center justify-center border border-green-300 rounded-lg  w-16 h-16 sm:w-20 sm:h-20 cardIn transition-all duration-300 ease-in-out">
         <div className="flex flex-col items-center">          
           <p className="text-green-300 text-xl"><FontAwesomeIcon className="cardIcon transition-all duration-300 ease-in-out" icon={faRobot}/></p>
           <span className="text-green-300 text-xs transition-all duration-300 ease-in-out">Bots</span>         
         </div>
         <h1 className="text-sm">34</h1>
       </div>
     </div>
  );
}