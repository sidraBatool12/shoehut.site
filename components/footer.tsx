"use client";
import Link from "next/link";
import { ArrowUpRight, Instagram, ArrowRight } from "lucide-react";
import { useState } from "react";
export default function Footer(){
 const [email,setEmail]=useState("");const [done,setDone]=useState(false);
 return <footer className="footer"><div className="footer-top"><div><Link href="/" className="wordmark footer-logo">Shoehut<span>®</span></Link><p className="footer-manifesto">Move with intention.<br/>Made for the miles that matter.</p></div>
 <div className="footer-links"><div><h4>Explore</h4><Link href="/shop">Shop all</Link><Link href="/shop?category=Sneakers">Sneakers</Link><Link href="/about">Our story</Link><Link href="/contact">Contact</Link></div><div><h4>Client care</h4><Link href="/contact">FAQs & support</Link><Link href="/account">Your account</Link><Link href="/wishlist">Wishlist</Link><Link href="/cart">Shopping bag</Link></div></div>
 <div className="footer-news"><h4>Notes from Shoehut</h4><p>New releases, considered stories, and 10% off your first order.</p><form onSubmit={e=>{e.preventDefault();setDone(true)}}><input type="email" required placeholder="Your email address" value={email} onChange={e=>setEmail(e.target.value)} aria-label="Email address"/><button aria-label="Subscribe"><ArrowRight size={18}/></button></form>{done&&<small>Demo signup complete — thank you.</small>}</div></div>
 <div className="footer-bottom"><span>© 2026 Shoehut. Demo storefront.</span><span>Designed with intention <span className="footer-dot">●</span></span><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13}/></a></div>
 </footer>
}
