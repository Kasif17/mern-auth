import { Link } from "react-router-dom"

export default function SingUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
     <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
    <form className='flex flex-col gap-3'>
      <input type="text" placeholder='username' id='username' className='bg-slate-100 p-3 rounded-lg' />
      <input type="email" placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg' />
      <input type="password" placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg' />
      <button className='bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80'>Sign Up</button>
      <button className='bg-red-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80'>CONTINUE WITH GOOGLE</button>
   
    </form>
     <div className="flex my-7 gap-3">
     <p>Have an account? </p>
    <Link to='/sign-in'>
      <span className="text-blue-500">Sign-in</span>
    </Link>
     </div>
    </div>
  )
}
