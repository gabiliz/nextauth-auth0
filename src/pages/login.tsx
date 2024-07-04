import { signIn } from "next-auth/react"

export const Login = () => {

  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-2xl font-bold ">Login</h1>
      <button className="bg-slate-400 p-3 w-24 border-slate-600 border" onClick={() => signIn('auth0')}>Login</button>
    </div>
  )
}

export default Login