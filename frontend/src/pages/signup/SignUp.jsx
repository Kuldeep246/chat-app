import { Link } from 'react-router-dom'
import GenderCheckbox from './GenderCheckbox'
import { useState } from 'react'
import useSignup from '../../hooks/useSignup'


const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs)
    }



    return (
        <div className='flex flex-col item-center justify-center min-w-96 mx-auto '>
            <div className='w-full p-6 founded-lg shdow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up <span className='text-blue-500'> chatApp</span></h1>
                <form onSubmit={handleSubmit}>

                    <div>
                        <label className="label p-2">
                            <span className=" text-base label-text text-gray-950">FullName</span>
                        </label>
                        <input type="text" placeholder="Enter fullName" id="fullName" className="w-full input bg-gray-900 text-white input-bordered h-10"
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className=" text-base label-text text-gray-950">Username</span>
                        </label>
                        <input type="text" placeholder="Enter username" id="username" className="w-full input bg-gray-900 text-white input-bordered h-10"
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className=" text-base label-text  text-gray-950">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full input bg-gray-900 text-white input-bordered h-10"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="label">
                            <span className=" text-base label-text  text-gray-950">Confirm Password</span>

                        </label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full input bg-gray-900 text-white input-bordered h-10"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}

                        />
                    </div>
                    <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link to={"/login"} className=" text-gray-950 text-sm hover:underline hover:text-blue-600 mt-2 inline-block" >
                        Alerady have an account ?
                    </Link>
                    <div>
                        <button className="btn btn-block bg-gray-900 hover:bg-black text-white btn-sm mt-2 "
                         disabled={loading}>
                         {loading ? <span> className="loading loading-spinner"</span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp