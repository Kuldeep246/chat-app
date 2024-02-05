import { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");



     const {loading,login}=useLogin();

    const handelSubmit = async (e) => {
        e.preventDefault();
        await login(username, password)
    }

    return (
        <div className="flex flex-col items-center justify-center min-w -96 max-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
                <h1 className="text-3xl font-semibold text-center text-gray-300 ">
                    Login
                    <span className="text-blue-500"> chat-app</span>
                </h1>
                <form onSubmit={handelSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className=" text-base label-text text-gray-950">Username</span>
                        </label>
                        <input type="text" placeholder="Enter username" id="username" className="w-full input bg-gray-900 text-white input-bordered h-10"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div>
                        <label className="label">
                            <span className=" text-base label-text  text-gray-950">Password</span>

                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full input bg-gray-900 text-white input-bordered h-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to={"/signup"} className=" text-gray-950 text-sm hover:underline hover:text-blue-600 mt-2 inline-block" >
                        {"Don't"} have an account ?"
                    </Link>
                    <div>
                        <button className="btn btn-block bg-gray-900 hover:bg-black text-white btn-sm mt-2 "
                        disabled={loading}
                        >{loading ? <span className='loading loading-spinner'></span>:"Login"}</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login
