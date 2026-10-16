import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/components/store-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
const playfair=Playfair_Display({subsets:["latin"],variable:"--font-playfair"});
const dm=DM_Sans({subsets:["latin"],variable:"--font-dm-sans"});
export const metadata:Metadata={title:"Shoehut — Move with intention",description:"Considered footwear for every step. Discover the Shoehut collection."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${playfair.variable} ${dm.variable}`}><StoreProvider><Header/><main>{children}</main><Footer/></StoreProvider></body></html>}
