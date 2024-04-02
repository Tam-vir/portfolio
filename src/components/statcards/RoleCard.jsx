import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCheck} from "@fortawesome/free-solid-svg-icons"
export default function RoleCard({num}) {
  return (
    <div className="card transition-all duration-300 ease-in-out rounded-lg relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-purple-500 top-2 left-2 hover:top-0 hover:left-0 rolecard">
       <div className="absolute z-20 bg-gray-800 bg-opacity-50 -top-2 -left-2 vanilla-blur p-4 flex flex-col items-center justify-center border border-purple-500 rounded-lg w-16 h-16 sm:w-20 sm:h-20 cardIn transition-all duration-300 ease-in-out">
         <div className="flex flex-col items-center">          
           <p className="text-purple-500 text-xl"><FontAwesomeIcon className="cardIcon transition-all duration-300 ease-in-out" icon={faCheck}/></p>
           <span className="text-purple-400 text-xs transition-all duration-300 ease-in-out">Roles</span>         
         </div>
         <h1 className="text-sm">{num}</h1>
       </div>
     </div>
  );
}