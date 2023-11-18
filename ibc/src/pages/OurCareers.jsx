import React, { useState } from "react";

import { firestore } from '../services/firebaseInit';
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../services/firebaseInit";




const handleCreateNewListing = async (name, email, resume) => {
  const resumeRef = ref(storage, `uploads/resumes/${Date.now()}-${resume.name}`);
  const uploadResume = await uploadBytes(resumeRef, resume);
  return await addDoc(collection(firestore, `Career`), {
    name,
    email,
    resumeURL: uploadResume.ref.fullPath,
  });
};

export default function OurCareers() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");

  const handleSubmit = async (e) => {
    alert("Your details saved successfully")
    e.preventDefault();
    await handleCreateNewListing(name, email, resume);
  };


  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 py-8">
        <div className="container mx-auto text-white">
          <h1 className="text-4xl font-bold">Join Our Team</h1>
          <p className="text-lg">
            Explore exciting career opportunities with us.
          </p>
        </div>
      </header>
      <main className="container mx-auto py-12">
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8     transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95   ">
          <h2 className="text-2xl font-bold mb-4">Job Openings</h2>
          <p>
            There are many job vacancies available in Mumbai for all freshers,
            10th pass, 12th pass candidates. You can get full-time, part-time,
            work from home, night-shift jobs in Mumbai according to your
            preference, skill sets and qualification.
          </p>
        </section>
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8     transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-95  ">
          <h2 className="text-2xl font-bold mb-4">Why Join Us?</h2>
          <p>
            We equip our associates to deliver innovative solutions, by
            providing them with opportunities to access and learn from the vast
            collective experience that exists within IBC. We ensure they remain
            at the cutting edge of change. We see our people as long-term
            relationships that we build together and from which we all grow. We
            invest in them across the duration of their career and encourage
            them to strive for perpetual progress
          </p>
        </section>
        <section className="bg-white rounded-lg shadow-lg p-8 mb-1">
          <h2 className="text-2xl font-bold mb-4 underline decoration-blue-500">
            APPLY NOW
          </h2>
          <form onSubmit={handleSubmit} className="mt-12">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded-md py-2 px-4 w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded-md py-2 px-4 w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="resume"
                className="block text-gray-700 font-bold mb-2"
              >
                Resume:
              </label>
              <input type="file" onChange={(e) => setResume(e.target.files[0])}
                required />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2
              px-4 rounded"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
