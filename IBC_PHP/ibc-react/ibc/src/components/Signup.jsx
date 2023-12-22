import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';





const SignUp = () => {
    const [formvalue, setFormvalue] = useState({name:'', email:'', password:''});


    const handleInput = (e) => {
        setFormvalue({...formvalue, [e.target.name]: e.target.value});
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formvalue);
        const formData = {name:formvalue.name, email:formvalue.email, password:formvalue.password};
        const res = await axios.post("https://localhost/api/signup.php",formData);
        alert("Regestration Success")
    };





    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div id='box' className="bg-white p-12 rounded-3xl shadow-2xl">
                <h2 className="text-2xl font-bold mb-10">User Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Name</label>
                        <input onChange={handleInput} value={formvalue.name} name='name' type="text" id="name" className="w-full px-20 py-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                        <input onChange={handleInput} value={formvalue.email} name='email' type="email" id="email" className="w-full px-20 py-2 border border-gray-300 rounded" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                        <input onChange={handleInput} value={formvalue.password} name='password' type="password" id="password" className="w-full px-20 py-2 border border-gray-300 rounded" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Sign Up</button>
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













// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { useFirebase } from '../services/firebaseInit';
// import Validation from './Signupvalidation';





// const SignUp = () => {
//     const firebase = useFirebase();

//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const [errors, setErrors] = useState({})

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const err = Validation(email, password);
//         setErrors(err);

//         console.log("Signin up a user.....");
//         const result = await firebase.signupUserWithEmailAndPassword(email, password);
//         console.log("Successfull", result);
//         alert("Successfull Regester")
//     };





//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div id='box' className="bg-white p-12 rounded-3xl shadow-2xl">
//                 <h2 className="text-2xl font-bold mb-10">User Registration</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
//                         <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" className="w-full px-20 py-2 border border-gray-300 rounded"/>
//                         {errors.email && <span className='text-red-500'> {errors.email}</span>}
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
//                         <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" id="password" className="w-full px-20 py-2 border border-gray-300 rounded"/>
//                         {errors.password && <span className='text-red-500'> {errors.password}</span>}
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


