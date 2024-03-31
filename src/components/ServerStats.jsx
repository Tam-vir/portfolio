import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFaceLaughSquint} from "@fortawesome/free-regular-svg-icons"
export default function Welcome() {
  return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-3/4 grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 grid-flow-row border border-white p-4">
          <div className="p-4 flex flex-col items-center justify-center border border-yellow-500 rounded-lg">
            <div>          
              <p className="text-yellow-500 text-xs"><FontAwesomeIcon icon={faFaceLaughSquint} size="xs" fixedWidth /></p>
              <span className="text-yellow-500 text-xs"> </span>         
            </div>
            <h1>212</h1>
          </div>
          <div className="p-4 flex flex-col items-center justify-center border border-yellow-500 rounded-lg">
            <div>          
              <p className="text-yellow-500 text-xs"><FontAwesomeIcon icon={faFaceLaughSquint} size="xs" fixedWidth /></p>
              <span className="text-yellow-500 text-xs">Members</span>         
            </div>
            <h1>213</h1>
          </div>
          <div className="p-4 flex flex-col items-center justify-center border border-yellow-500 rounded-lg">
            <div>          
              <p className="text-yellow-500 text-xs"><FontAwesomeIcon icon={faFaceLaughSquint} size="xs" fixedWidth /></p>
              <span className="text-yellow-500 text-xs">Members</span>         
            </div>
            <h1>213</h1>
          </div>
          <div className="p-4 flex flex-col items-center justify-center border border-yellow-500 rounded-lg">
            <div>          
              <p className="text-yellow-500 text-xs"><FontAwesomeIcon icon={faFaceLaughSquint} size="xs" fixedWidth /></p>
              <span className="text-yellow-500 text-xs">Members</span>         
            </div>
            <h1>213</h1>
          </div>
          <div className="p-4 flex flex-col items-center justify-center border border-yellow-500 rounded-lg">
            <div>          
              <p className="text-yellow-500 text-xs"><FontAwesomeIcon icon={faFaceLaughSquint} size="xs" fixedWidth /></p>
              <span className="text-yellow-500 text-xs">Members</span>         
            </div>
            <h1>213</h1>
          </div>
        </div>
      </div>
  );
}