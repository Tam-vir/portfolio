import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFaceLaughSquint} from "@fortawesome/free-regular-svg-icons"
import BoostCard from "./statcards/BoostCard";
import MemberCard from "./statcards/MemberCard"
import TotalCard from "./statcards/TotalCard"
import BotCard from "./statcards/BotCard"
import TextCard from "./statcards/TextCard"
import VoiceCard from "./statcards/VoiceCard"
import RoleCard from "./statcards/RoleCard"
import CategoryCard from "./statcards/CategoryCard"
import OwnerCard from "./statcards/OwnerCard"
export default function Welcome() {
  return (
      <div className="w-full h-full flex flex-col justify-center items-center p-6">
        <div className="w-full grid grid-cols-3">
         
          <div className="flex justify-center items-center p-6"><TotalCard /></div>
          <div className="flex justify-center items-center p-6"><MemberCard /></div>
          <div className="flex justify-center items-center p-6"><BotCard /></div>
          <div className="flex justify-center items-center p-6"><TextCard /></div>
          <div className="flex justify-center items-center p-6"><VoiceCard /></div>
          <div className="flex justify-center items-center p-6"><RoleCard /></div>
          <div className="flex justify-center items-center p-6"><CategoryCard /></div>
          <div className="flex justify-center items-center p-6"><BoostCard /></div>
          <div className="flex justify-center items-center p-6"><OwnerCard /></div>
          
          
        </div>
      </div>
  );
}