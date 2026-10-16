"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, Search, UserRound, Heart, ShoppingBag, X } from "lucide-react";
import { useStore } from "./store-provider";
export default function Header(){
 const [open,setOpen]=useState(false);const [search,setSearch]=useState(false);const [q,setQ]=useState("");
 const {cartCount,wishlist}=useStore();
 const nav=[["Home","/"],["Shop","/shop"],["About","/about"],["Contact","/contact"]];
 return <header className="site-header"><div className="header-inner">
 <button className="icon-button mobile-toggle" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 <Link href="/" className="wordmark">Shoehut<span>®</span></Link>
 <nav className={`main-nav ${open?"nav-open":""}`}>{nav.map(([label,url])=><Link key={label} href={url} onClick={()=>setOpen(false)}>{label}</Link>)}</nav>
 <div className="header-actions">
 <button className="icon-button" aria-label="Search" onClick={()=>setSearch(!search)}><Search/></button>
 <Link className="icon-button desktop-icon" href="/account" aria-label="Account"><UserRound/></Link>
 <Link className="icon-button desktop-icon" href="/wishlist" aria-label="Wishlist"><Heart/><span className="count">{wishlist.length}</span></Link>
 <Link className="icon-button" href="/cart" aria-label="Cart"><ShoppingBag/><span className="count">{cartCount}</span></Link>
 </div></div>
 {search&&<form className="search-strip" action="/shop"><input autoFocus name="q" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search the collection…" aria-label="Search products"/><button type="submit">Search <span>↗</span></button></form>}
 </header>
}
