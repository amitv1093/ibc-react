import { useState } from "react";
import { imgDB } from "./pages/firebaseUpload";
import { txtDB } from "./pages/firebaseUpload";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

export default function StoreImageTextFirebase(){
  const [txt,setTxt] = useState('')
  const [img,setImg] = useState('')



  const handleUpload = (e) =>{
    console.log(e.target.files[0])
    const imgs = ref(imgDB,`Imgs/${v4()}`)
    uploadBytes(imgs,e.target.files[0]).then(data=>{
      console.log(data,"imgs")
      getDownloadURL(data.ref).then(val=>{
        setImg(val)
      })
    }) 
  }


  const handleClick = async () => {
    const valRef = collection(txtDB,`txtData`)
    await addDoc(valRef,{txtVal:txt,imgUrl:img})
    alert("Data added Successfully")
  }

  return(
    <div>
      <input type="text" onChange={(e)=>setTxt(e.target.value)} /><br/>
      <input type="file" onChange={(e)=>handleUpload(e)} /><br/>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}


























// useful //

// import "./App.css";
// import Header from "./components/Header";

// // ROUTER
// // import { BrowserRouter } from "react-router-dom";
// // import { RouterConfig } from "./navigation/RouteConfig";


// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from "./pages/Home";
// import NotFound from "./pages/NotFound"
// import AboutUs from "./pages/AboutUs"
// import Services from "./pages/Services"
// import ContactUs from "./pages/ContactUs"
// import VideoTut from "./pages/VideoTut";
// import OurCareers from "./pages/OurCareers";





// export default function App() {
//   return (
//     <div className="App">
      
//       <Router>
//       <Header className="App-header"></Header>
//        <Routes>
//           <Route exact path="/" element={<Home/>}></Route>
//           <Route path="/AboutUs" element={<AboutUs/>}></Route>
//           <Route path="/NotFound" element={<NotFound/>}></Route>
//           <Route path="/Services" element={<Services/>}></Route>
//           <Route path="/ContactUs" element={<ContactUs/>}></Route>
//           <Route path="/VideoTut" element={<VideoTut/>}></Route>
//           <Route path="/OurCareers" element={<OurCareers/>}></Route>
//         </Routes>
//       </Router>



//     </div>
//   );
// }


















//  useless ,dont use//

// import "./App.css";
// import Home from "./pages/Home";
// import Header from "./components/Header";

// // ROUTER
// import { BrowserRouter } from "react-router-dom";
// import { RouterConfig } from "./navigation/RouteConfig";

// function App() {
//   return (
//     <div className="App">
//       <Header className="App-header"></Header>
//       <BrowserRouter>
//         <RouterConfig />
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

