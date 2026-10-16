import { Product } from "@/lib/products";
import ProductCard from "./product-card";
export default function ProductGrid({items}:{items:Product[]}){return <div className="product-grid">{items.map(p=><ProductCard key={p.id} product={p}/>)}</div>}
