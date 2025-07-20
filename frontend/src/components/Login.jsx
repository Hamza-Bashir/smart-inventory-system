const Login = () => {
    return (
        <div className="max-w-md mx-auto bg-blue-100 mt-10 shadow-md rounded-lg">
            <div className="font-bold text-2xl px-4 text-center pt-5">
                Register User
            </div>

            <form className="px-6 py-4 space-y-4">
                <div>
                    <label className="block font-semibold mb-1">Enter Your Email:</label>
                    <input
                        className="border border-gray-500 rounded-md px-3 py-2 w-full"
                        type="email"
                        placeholder="Enter Your Password"
                    />
                </div>

                <div>
                    <label className="block font-semibold mb-1">Enter Your Pasword:</label>
                    <input
                        className="border border-gray-500 rounded-md px-3 py-2 w-full"
                        type="text"
                        placeholder="Enter Your Password"
                    />
                </div>

                <div className="text-center">
                    <button className="cursor-pointer font-medium border border-blue-400 w-32 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition">
                        Login
                    </button>
                </div>

                <div className="text-center text-sm">
                    <p>
                        New Here?{" "}
                        <a className="text-blue-500 hover:underline" href="/register-user">
                            Click here
                        </a>{" "}
                        to register.
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
