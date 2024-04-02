import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Otaku Realm",
  description: "Otaku Realm is a server for anime fans to gather! do you love anime or music? This server is full of fun people with exciting bots for great experience! Join Otaku Realm now!",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en" >     
      <body className={inter.className + "w-screen h-screen flex flex-col items-center bg-gray-900 text-white"}>      
          <nav className="w-full h-16 fixed top-0 left-0 bg-gray-900 bg-opacity-60 backdrop-blur flex justify-between border-b border-white">
            <div className="flex items-center justify-between h-full">
              <Image src="/logo.jpg" width={40} height={40} alt="logo" className="serverLogo rounded-full mr-2 ml-4"/>
              <h1 className='text-xl font-extrabold'>Otaku Realm</h1>
            </div>
            <div className="flex items-center justify-between h-full">
              <Link href="/activities" className="px-4 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300 ease-in-out text-xs">Activities</Link>
            </div>
          </nav>
          {children}
        
      </body>
    </html>
  );
}
