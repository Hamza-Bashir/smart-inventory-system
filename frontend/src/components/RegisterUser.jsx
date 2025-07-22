import { useState } from "react";
import axios from "axios"
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"

const RegisterUser = () => {

    const navigate = useNavigate()

    const [data,setData] = useState({
        name: "",
        email : "",
        password : ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setData(prev => ({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await axios.post("http://localhost:3000/api/v1/register-user", data)

        toast.success(res.data.message)

        navigate("/login")
    }


    return (
        <div className="max-w-md mx-auto bg-blue-100 mt-10 shadow-md rounded-lg">
            <div className="font-bold text-2xl px-4 text-center pt-5">
                Register User
            </div>

            <form className="px-6 py-4 space-y-4">
                <div>
                    <label className="block font-semibold mb-1">Enter Your Name:</label>
                    <input
                        className="border border-gray-500 rounded-md px-3 py-2 w-full"
                        type="text"
                        placeholder="Enter Your Name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Enter Your Email:</label>
                    <input
                        className="border border-gray-500 rounded-md px-3 py-2 w-full"
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Enter Your Pasword:</label>
                    <input
                        className="border border-gray-500 rounded-md px-3 py-2 w-full"
                        type="password"
                        placeholder="Enter Your Password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="text-center">
                    <button onClick={handleSubmit} className="cursor-pointer font-medium border border-blue-400 w-32 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition">
                        Register
                    </button>
                </div>

                <div className="text-center text-sm">
                    <p>
                        Already have an account?{" "}
                        <a className="text-blue-500 hover:underline" href="/login">
                            Click here
                        </a>{" "}
                        to login.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default RegisterUser;
