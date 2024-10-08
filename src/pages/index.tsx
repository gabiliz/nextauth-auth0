import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  return (
    <main
    >
      <h1 className="text-2xl font-bold ">Login</h1>
      <button className="bg-slate-400 p-3 w-24 border-slate-600 border" onClick={() => signIn('auth0', {
        callbackUrl: '/perfil',
      })}>Login</button>
    </main>
  );
}
