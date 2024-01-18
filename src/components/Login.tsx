import { useState } from "react"

function Login() {
    const [input, setInput] = useState({ email: '', password: '' })

    const handleChange = (e: any) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const onSubmit = (e: any) => {
        e.preventDefault()
        console.log('input=============>', input)
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-[#102c55] text-2xl font-bold mb-4'>Login to Dashboard</h1>
            <form onSubmit={onSubmit} className="flex flex-col bg-[#8376ef]" >
                <input type="email" placeholder="Email" name="email" className="lg:w-72 m-4 p-2" onChange={handleChange} value={input.email} />
                <input type="password" placeholder="Password" name="password" className="lg:w-72 m-4 p-2" onChange={handleChange} value={input.password} />
                <button type="submit" className="bg-[#102c55] text-white lg:w-72 m-4 p-2">Login</button>
            </form>
        </div>
    )
}

export default Login