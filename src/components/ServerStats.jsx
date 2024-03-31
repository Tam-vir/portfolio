import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFaceLaughSquint} from "@fortawesome/free-regular-svg-icons"
export default function Welcome() {
  return (
      <div className="w-full h-full flex flex-col justify-center items-center p-6">
        <div className="w-3/4 gap-6 flex flex-row justify-around items-center flex-wrap">
          <div className="p-2 flex flex-col items-center justify-center border border-yellow-500 rounded-lg w-20 h-20">
            <div className="flex flex-col items-center">          
              <p className="text-yellow-500 text-xs"><FontAwesomeIcon className="staticon" icon={faFaceLaughSquint} size="xs" fixedWidth /></p>
              <span className="text-yellow-500 text-xs">Members</span>         
            </div>
            <h1>212</h1>
          </div>

          <div className="p-4 flex flex-col items-center justify-center border border-yellow-500 rounded-lg w-20 h-20 w-20 h-20">
            <div className="flex flex-col items-center">          
              <p className="text-yellow-500 text-xs"><FontAwesomeIcon className="staticon" icon={faFaceLaughSquint} size="xs" fixedWidth /></p>
              <span className="text-yellow-500 text-xs">Members</span>         
            </div>
            <h1>212</h1>
          </div>

          <div className="p-4 flex flex-col items-center justify-center border border-yellow-500 rounded-lg w-20 h-20">
            <div className="flex flex-col items-center">          
              <p className="text-yellow-500 text-xs"><FontAwesomeIcon className="staticon" icon={faFaceLaughSquint} size="xs" fixedWidth /></p>
              <span className="text-yellow-500 text-xs">Members</span>         
            </div>
            <h1>212</h1>
          </div>

          <div className="p-4 flex flex-col items-center justify-center border border-yellow-500 rounded-lg w-20 h-20">
            <div className="flex flex-col items-center">          
              <p className="text-yellow-500 text-xs"><FontAwesomeIcon className="staticon" icon={faFaceLaughSquint} size="xs" fixedWidth /></p>
              <span className="text-yellow-500 text-xs">Members</span>         
            </div>
            <h1>212</h1>
          </div>

          <div className="p-4 flex flex-col items-center justify-center border border-yellow-500 rounded-lg w-20 h-20">
            <div className="flex flex-col items-center">          
              <p className="text-yellow-500 text-xs"><FontAwesomeIcon className="staticon" icon={faFaceLaughSquint} size="xs" fixedWidth /></p>
              <span className="text-yellow-500 text-xs">Members</span>         
            </div>
            <h1>212</h1>
          </div>
          
        </div>
      </div>
  );
}