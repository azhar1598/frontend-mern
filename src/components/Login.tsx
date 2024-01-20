import { useEffect, useState } from "react"
import { loginApi } from "../apis/auth"
import { useDispatch, useSelector } from "react-redux";
import { loggedinUser } from "../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { errMsg } from "../redux/slice/errorSlice";

const schema = yup.object().shape({
    email: yup
        .string()
        .required("*Email is required")
        .email("*Invalid email format")
        .matches(/^[^\s].*$/, "*First character cannot be a space")
        .test("domain", "*Invalid Email", (value) => {
            if (value) {
                const domain = value.split("@")[1];
                return domain?.endsWith(".com");
            }
            return true;
        }),
    password: yup
        .string()
        .required("*Password is required")
        .min(8, "*Password must be at least 8 characters"),
});

type input = {
    email: string;
    password: string;
}

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const isAuthenticated = useSelector((state: any) => state.usersReducer.isAuthenticated);
    const err = useSelector((state: { errorReducer: { errMsg: string } }) => state.errorReducer.errMsg)

    useEffect(() => {
        if (isAuthenticated)
            navigate('/dashboard')
        else
            navigate('/')
    }, [isAuthenticated])

    useEffect(() => {
        if (err)
            setTimeout(() => {
                dispatch(errMsg(''))
            }, 7000)
    }, [err])

    const onSubmit = async (values: input) => {
        const res = await loginApi(values)
        if (res.status == 200) {
            dispatch(loggedinUser(res.data));
            if (err)
                dispatch(errMsg(''))
        }
        else {
            dispatch(errMsg(res.data.message))
        }
    }

    // ** Hooks
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitted },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const formErrors: any = errors;
    const formSubmitted = isSubmitted;
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-[#102c55] text-2xl font-bold mb-4'>Login to Dashboard</h1>
            {err && <p className="text-red-500">{err}</p>}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col bg-[#8376ef]" >
                <input type="text" placeholder="Email" className="lg:w-72 mx-4 mt-4 p-2"              {...register("email")} />
                {errors.email && (
                    <span className="text-red-500 px-4 text-sm">
                        {formErrors.email.message}
                    </span>
                )}
                <input type="password" placeholder="Password" className="lg:w-72 mx-4 mt-4 p-2"     {...register("password")} />
                {errors.password && (
                    <span className="relative text-red-500 px-4 text-sm w-72">
                        {formErrors.password.message}
                    </span>
                )}
                <button type="submit" className="bg-[#102c55] text-white lg:w-72 m-4 p-2">Login</button>
            </form>
        </div>
    )
}

export default Login