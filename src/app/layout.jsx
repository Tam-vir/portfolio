import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { Inter } from "next/font/google";
import "./globals.css";
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
          
          {children}
        
      </body>
    </html>
  );
}
