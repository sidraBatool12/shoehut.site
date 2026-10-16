import Link from "next/link";
import { ReactNode } from "react";
export function Button({children,href,onClick,variant="dark",type="button",disabled=false}:{children:ReactNode;href?:string;onClick?:()=>void;variant?:"dark"|"light"|"outline";type?:"button"|"submit";disabled?:boolean}){
 const cls=`btn btn-${variant} ${disabled?"opacity-50":""}`;
 return href?<Link className={cls} href={href}>{children}</Link>:<button className={cls} type={type} onClick={onClick} disabled={disabled}>{children}</button>
}
export function Eyebrow({children}:{children:ReactNode}){return <p className="eyebrow">{children}</p>}
export function SectionTitle({eyebrow,title,description}:{eyebrow?:string;title:string;description?:string}){return <div className="section-title">{eyebrow&&<Eyebrow>{eyebrow}</Eyebrow>}<h2>{title}</h2>{description&&<p>{description}</p>}</div>}
export function EmptyState({title,body,action}:{title:string;body:string;action?:ReactNode}){return <div className="empty-state"><div className="empty-mark">SC.</div><h2>{title}</h2><p>{body}</p>{action}</div>}
