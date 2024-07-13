import "../App.css"
import React, { useState,useEffect } from 'react';
import { nanoid } from 'nanoid';
import { db, firestore } from '../services/firebaseInit'; 





export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');


  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      db.ref(`ContactUs_Page`).on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const userList = Object.values(data);
          setUsers(userList);
        }
      });
    };
    fetchData();
    return () => {
      db.ref(`ContactUs_Page`).off();
    };
  }, []);



    const handleSubmit = (e) => {
      e.preventDefault();

      const userId = nanoid();

      const user = {
        id: userId,
        name: name,
        email: email,
        subject: subject,
        phone: phone,
        message: message,

      };
      db.ref(`ContactUs_Page`).child(userId).set(user);

      db.ref(`ContactUs_Page`).push(user)
        .then(() => {
          alert('Your details saved successfully');
          setName('');
          setEmail('');
          setSubject('');
          setPhone('');
          setMessage('');
        })
        .catch((error) => {
          console.error('Error saving employee details: ', error);
          alert('Error saving employee details');
        });
    };



    return (
      <>
        <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="row">
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
              <h1 id="aboutus" className="mt-16 text-4xl font-bold tracking-tight text-gray-900 text-center border-b-4 border-black ">CONTACT US</h1>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <h4 id='ourAddress' className="mt-16 text-2xl  tracking-tight text-gray-900 text-left">OUR ADDRESS</h4>
              <h5 className="mt-5 text-base  tracking-tight text-gray-700 text-left">If you have any questions about the services we provide simply use the form
                below. We try and respond to all queries
                and comments within 24 hours.</h5>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-7">
                <h6 id='address' className="mb-2 text-2xl  tracking-tight text-gray-900 text-justify">Address &amp; Direction:</h6>
                <p className='mt-0 text-gray-700 text-justify'>Please see the below map</p>
              </div>


              <p className='text-base flex tracking-tight text-gray-400 text-left mt-7'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#C20000" className="w-5 h-5">
                <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
              </svg>
                <a href="#" className='hover:text-red-500 ...  ml-2'>Shop No. 05, Zia Apartment, 264 Bellasis
                  Road, Nagpada, Mumbai-400 008</a></p>


              <p className='text-base flex tracking-tight text-gray-400 text-left mt-7'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#1EE547" className="w-5 h-5">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
              </svg>
                <a href="tel:9820496834" className="hover:text-green-500 ... ml-2">+91-9820496834</a>
              </p>

              <p className='text-base flex tracking-tight text-gray-400 text-left mt-7'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#1E88E5" className="w-5 h-5">
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>
                <a href="mailto:ignitebcatalyst@gmail.com" className="hover:text-blue-500 ... ml-2">ignitebcatalyst@gmail.com </a>
              </p>
            </div>


            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <h4 id='getIn' className="mt-16 text-2xl  tracking-tight text-gray-900 text-left">GET IN TOUCH</h4>

              <div className="mt-5 sm:mx-auto sm:w-full">
                <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                  <div>
                    <div className="name">
                      <input id="name" type="text" placeholder='  Name' value={name} onChange={(e) => setName(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div>
                    <div className="email">
                      <input id="email" type="email" placeholder='  Email' value={email} onChange={(e) => setEmail(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div>
                    <div className="subject">
                      <input id="subject" type="text" placeholder='  Subject' value={subject} onChange={(e) => setSubject(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div>
                    <div className="phone">
                      <input id="phone" type="phone" placeholder='  Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div>
                    <div className="message">
                      <textarea id="message" type="text" placeholder='  Message' value={message} onChange={(e) => setMessage(e.target.value)} cols="100" rows="4" required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div><div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

{/* 
        fatch
        <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <p>Email: {user.email}</p>
          <hr />
        </div>
      ))}
    </div> */}



        <div>
          <div className="map mt-20" >
            <iframe
              className=" w-full "
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
          
        </div>

      </>


    );
  };

