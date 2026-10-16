"use client";
import Link from "next/link";
import { useState } from "react";
import { Button, Eyebrow } from "@/components/ui";
export default function ForgotPassword(){const [sent,setSent]=useState(false);return <div className="auth-shell"><Eyebrow>Account assistance</Eyebrow><h1>Forgot your password?</h1><p>Enter your email to preview the password reset flow. No reset email will be sent.</p>{sent?<div className="success-message">Demo feedback: if this were a live store, the next step would be a secure reset email. No email was sent.</div>:<form onSubmit={e=>{e.preventDefault();setSent(true)}}><div className="field"><label htmlFor="email">Email address</label><input id="email" type="email" required placeholder="you@example.com"/></div><Button type="submit">Preview reset flow</Button></form>}<div className="auth-links"><Link href="/login">← Back to sign in</Link></div></div>}
