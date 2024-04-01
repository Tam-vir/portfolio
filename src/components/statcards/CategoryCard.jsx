import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFolder} from "@fortawesome/free-regular-svg-icons"
export default function CategoryCard() {
  return (
    <div className="card transition-all duration-300 ease-in-out rounded-lg relative z-10 w-20 h-20 bg-indigo-500 top-2 left-2 hover:top-0 hover:left-0 categorycard">
       <div className="absolute z-20 bg-gray-800 bg-opacity-50 -top-2 -left-2 vanilla-blur p-4 flex flex-col items-center justify-center border border-indigo-500 rounded-lg w-20 h-20 w-20 h-20 cardIn transition-all duration-300 ease-in-out">
         <div className="flex flex-col items-center">          
           <p className="text-indigo-500 text-xl"><FontAwesomeIcon className="cardIcon transition-all duration-300 ease-in-out" icon={faFolder}/></p>
           <span className="text-indigo-400 text-xs transition-all duration-300 ease-in-out">Category</span>         
         </div>
         <h1>13</h1>
       </div>
     </div>
  );
}