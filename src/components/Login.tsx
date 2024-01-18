import { useState } from "react"
import { loginApi } from "../apis/auth"

function Login() {
    const [input, setInput] = useState({ userName: '', password: '' })

    const handleChange = (e: any) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e: any) => {
        e.preventDefault()
        const res = await loginApi(input)
        console.log('input=============>', input,import.meta.env.VITE_API_URL)
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-[#102c55] text-2xl font-bold mb-4'>Login to Dashboard</h1>
            <form onSubmit={onSubmit} className="flex flex-col bg-[#8376ef]" >
                <input type="text" placeholder="Email" name="userName" className="lg:w-72 m-4 p-2" onChange={handleChange} value={input.userName} />
                <input type="password" placeholder="Password" name="password" className="lg:w-72 m-4 p-2" onChange={handleChange} value={input.password} />
                <button type="submit" className="bg-[#102c55] text-white lg:w-72 m-4 p-2">Login</button>
            </form>
        </div>
    )
}

export default Login