import { useState } from "react"

function Login() {
    const [input, setInput] = useState({ email: '', password: '' })

    const onChange = (e: any) => {
        setInput({ ...e.target.value, input })
    }

    return (
        <div className='flex flex-col align-items-center justify-center bg-red-400 w-full'>
            <h1 className='text-yellow-400'>Login</h1>
            <div className="flex flex-col ">
                <input type="text" placeholder="Email" name="email" onChange={onChange} value={input.email} />
                <input type="password" placeholder="Password" name="password" onChange={onChange} value={input.password} />
                <button>Login</button>
            </div>
        </div>
    )
}

export default Login