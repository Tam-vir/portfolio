import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFaceLaughSquint} from "@fortawesome/free-regular-svg-icons"
export default function Welcome() {
  return (
      <div className=" w-full h-full p-4 flex items-center justify-center">
        <div>          
          <span className="text-yellow-500"><FontAwesomeIcon icon={faFaceLaughSquint} size="2x"/> Members</span>
          <span className="text-yellow-500">212</span>
        </div>
      </div>
  );
}