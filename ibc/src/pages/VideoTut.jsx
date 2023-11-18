import React, { useState, useEffect } from "react";
import VideoModal from "./VideoModal";
import { db } from "../services/firebaseInit";


const VideoTut = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      db.ref("Video_Tutorials").on("value", (snapshot) => {
        const data = snapshot.val();
        if (data) {
          console.log(data);
          const userList = Object.values(data);
          setUsers(userList);
        }
      });
    };

    fetchData();

    return () => {
      db.ref("Video_Tutorials").off();
    };
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n  body {background-color: rgb(209 213 219); !important;}\n",
        }}
      />

      <div className="heading text-center  m-5  ms-30 my-10 text-5xl font-extrabold underline decoration-green-700 hover:decoration-pink-700">
        <span className="animate-pulse bg-gradient-to-r from-pink-700 via-green-700 to-violet-900 bg-clip-text text-transparent">
          {" "}
          Video Tutorials{" "}
        </span>
      </div>

      <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {users.map((user, i) => (
          <div key={user.id}>
            <div className="each mb-10 m-2 shadow-2xl border-gray-800 bg-gray-100 relative transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-100 duration-300 ">
              <img className="w-full" src={user.thumbnailUrl} alt="" />
              <div className="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                Live
              </div>
              <div className="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
                <span className="mr-1 p-1 px-2 font-bold">105 Watching</span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Likes
                </span>
                <span className="mr-1 p-1 px-2 font-bold border-l border-gray-400">
                  105 Dislikes
                </span>
              </div>
              <div className="desc p-4 text-gray-800">
                <a
                  href={user.videoUrl}
                  target="_new"
                  className="title font-bold block cursor-pointer hover:underline"
                >
                  {user.title}
                </a>
                <a
                  href={user.videoUrl}
                  target="_new"
                  className="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
                >
                  {user.id}
                </a>
                <span className="description text-sm block py-2 border-gray-400 mb-2">
                  {user.description}
                </span>
              </div>
            </div>
            <div className="mb-5">
              <VideoModal videoUrl={user.videoUrl} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoTut;
