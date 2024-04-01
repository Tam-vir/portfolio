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
        <h1 className="text-4xl font-thin text-purple-400 tracking-widest">SERVER STATS</h1>
        <br/>
        <hr className="w-1/2 statLine"/>
        <br/>
        <br/>
        <br/>
        <div className="w-full grid grid-cols-3 gap-6">
         
          <div className="flex justify-center items-center"><TotalCard /></div>
          <div className="flex justify-center items-center"><MemberCard /></div>
          <div className="flex justify-center items-center"><BotCard /></div>
          <div className="flex justify-center items-center"><TextCard /></div>
          <div className="flex justify-center items-center"><VoiceCard /></div>
          <div className="flex justify-center items-center"><RoleCard /></div>
          <div className="flex justify-center items-center"><CategoryCard /></div>
          <div className="flex justify-center items-center"><BoostCard /></div>
          <div className="flex justify-center items-center"><OwnerCard /></div>
          
          
        </div>
      </div>
  );
}