"use client";
import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { Product } from "@/lib/products";
type CartItem = { productId: string; size: number; color: string; quantity: number };
type StoreContextType = { cart: CartItem[]; wishlist: string[]; addToCart: (item: CartItem) => void; updateQty: (key: string, delta: number) => void; removeFromCart: (key: string) => void; toggleWishlist: (id: string) => void; clearCart: () => void; cartCount: number; cartTotal: number };
const StoreContext = createContext<StoreContextType | null>(null);
const itemKey = (i: CartItem) => `${i.productId}-${i.size}-${i.color}`;
export function StoreProvider({children}:{children:ReactNode}) {
 const [cart,setCart] = useState<CartItem[]>([]);
 const [wishlist,setWishlist] = useState<string[]>([]);
 const [ready,setReady] = useState(false);
 useEffect(()=>{try{setCart(JSON.parse(localStorage.getItem("solecraft-cart")||"[]"));setWishlist(JSON.parse(localStorage.getItem("solecraft-wishlist")||"[]"));}catch{}setReady(true)},[]);
 useEffect(()=>{if(ready)localStorage.setItem("solecraft-cart",JSON.stringify(cart))},[cart,ready]);
 useEffect(()=>{if(ready)localStorage.setItem("solecraft-wishlist",JSON.stringify(wishlist))},[wishlist,ready]);
 const value = useMemo(()=>({
 cart,wishlist,
 addToCart:(item:CartItem)=>setCart(prev=>{const key=itemKey(item);const found=prev.find(i=>itemKey(i)===key);return found?prev.map(i=>itemKey(i)===key?{...i,quantity:i.quantity+item.quantity}:i):[...prev,item]}),
 updateQty:(key:string,delta:number)=>setCart(prev=>prev.map(i=>itemKey(i)===key?{...i,quantity:i.quantity+delta}:i).filter(i=>i.quantity>0)),
 removeFromCart:(key:string)=>setCart(prev=>prev.filter(i=>itemKey(i)!==key)),
 toggleWishlist:(id:string)=>setWishlist(prev=>prev.includes(id)?prev.filter(x=>x!==id):[...prev,id]),
 clearCart:()=>setCart([]),cartCount:cart.reduce((s,i)=>s+i.quantity,0),
 cartTotal:cart.reduce((s,i)=>s+i.quantity* (requirePrice(i.productId)),0)
 }),[cart,wishlist,ready]);
 return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
function requirePrice(id:string){return ({ "sc-001":145,"sc-002":180,"sc-003":220,"sc-004":245,"sc-005":125,"sc-006":195,"sc-007":210,"sc-008":135,"sc-009":235,"sc-010":155,"sc-011":110,"sc-012":260 } as Record<string,number>)[id]||0}
export function useStore(){const v=useContext(StoreContext);if(!v)throw new Error("useStore must be used inside StoreProvider");return v}
