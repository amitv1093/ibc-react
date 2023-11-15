// mysql and validation used
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Validation from "./Signupvalidation";




const SignUp = () => {

    const [inpval, setINP] = useState({
        name: '',
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const addinpdata = async (e) => {
        e.preventDefault();
        const err = Validation(inpval);
        setErrors(err);


        const { name, email, password } = inpval;


        const res = await fetch("/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password
            })
        });


        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
        } else {
            console.log("data added")
        }
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div id='box' className="bg-white p-12 rounded-3xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-10">User Registration</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Name</label>
                        <input
                            value={inpval.name}
                            onChange={setdata}
                            type="text" id="name" name='name' className="w-full px-20 py-2 border border-gray-300 rounded"
                        />
                        {errors.name && <span className='text-red-500'> {errors.name}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                        <input
                            value={inpval.email}
                            onChange={setdata}
                            type="email" id="email" name='email' className="w-full px-20 py-2 border border-gray-300 rounded"
                        />
                        {errors.email && <span className='text-red-500'> {errors.email}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                        <input
                            value={inpval.password}
                            onChange={setdata}
                            type="password" id="password" name='password' className="w-full px-20 py-2 border border-gray-300 rounded"
                        />
                        {errors.password && <span className='text-red-500'> {errors.password}</span>}
                    </div>
                    <button onClick={addinpdata} type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Sign Up</button>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Already have an account{' '}
                    <Link to="/Login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">

                        Click to Login

                    </Link>
                </p>
            </div>
        </div>
    );
};


export default SignUp;













// OLD CODE...FIREBASE USED

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { useFirebase } from '../services/firebaseInit';





// const SignUp = () => {
//     const firebase = useFirebase();

//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log("Signin up a user.....");
//         const result = await firebase.signupUserWithEmailAndPassword(email, password);
//         console.log("Successfull", result);
//         alert("Successfull Regester")
//     };





//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-20 rounded shadow-2xl">
//                 <h2 className="text-2xl font-bold mb-10">User Registration</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
//                         <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" className="w-full px-20 py-2 border border-gray-300 rounded" required />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
//                         <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" id="password" className="w-full px-20 py-2 border border-gray-300 rounded" required />
//                     </div>
//                     <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Sign Up</button>
//                 </form>
//                 <p className="mt-10 text-center text-sm text-gray-500">
//                     Already have an account{' '}
//                     <Link to="/Login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">

//                         Click to Login

//                     </Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default SignUp;


