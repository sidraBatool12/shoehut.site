"use client";
import Link from "next/link";
import { Heart, ArrowUpRight } from "lucide-react";
import { Product } from "@/lib/products";
import { useStore } from "./store-provider";
export default function ProductCard({product}:{product:Product}){
 const {wishlist,toggleWishlist}=useStore();const saved=wishlist.includes(product.id);
 return <article className="product-card"><div className="product-image-wrap"><Link href={`/product/${product.id}`} className="product-image-link"><img src={product.images[0]} alt={product.name} className="product-image"/>{product.badge&&<span className="product-badge">{product.badge}</span>}</Link><button className={`wishlist-btn ${saved?"is-saved":""}`} onClick={()=>toggleWishlist(product.id)} aria-label={saved?"Remove from wishlist":"Add to wishlist"}><Heart size={18} fill={saved?"currentColor":"none"}/></button><Link className="quick-view" href={`/product/${product.id}`}>View product <ArrowUpRight size={15}/></Link></div><div className="product-info"><div><p className="product-category">{product.category}</p><Link href={`/product/${product.id}`} className="product-name">{product.name}</Link></div><span className="product-price">${product.price}</span></div><div className="product-rating"><span>★★★★★</span> <small>{product.rating} ({product.reviews})</small></div></article>
}
