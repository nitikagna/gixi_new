import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import './App.css';
// import Carousel from './Components/Pages/Carousel';
// import Apitest from './Components/Pages/Apitest';
// import Slider from "react-slick";
import Dashboard from "./Components/Pages/Dashboard";

function App() {
  return (
    <div className="App">
     {/* <Carousel />  */}
     {/* <Apitest /> */}
     <Dashboard />
    </div>
  );
}

export default App;


// import "./App.css";
// import React,{ useState,useEffect } from "react";
// import axios from "axios";

// function App() {
//     const url = "https://jsonplaceholder.typicode.com/users";
//     const [data,setData ] = useState([]);

//     const fetchInfo = () =>{
//       return axios.get(url) .then((res) => setData(res.data));
//     };

//     useEffect(() => {
//       fetchInfo();
//     }, []);


//     return (
//         <div className="App">
//             <h1 style= {{ color: "green"}}>using Axios library to Fetch Data</h1>
//             <center>
//               {data.map ((dataObj,index) => {
//                 return(
//                   <div style = {{ width: "15em",
//                                   backgroundColor: "#CD8FFD",
//                                   padding: 2,
//                                   borderRadius: 10,
//                                   marginBlock: 10,
//                   }}>
//                     <p style={{ fontSize: 20,color: 'white'}}>{dataObj.name}</p>
//                   </div>
//                 )
//               })}
//             </center>
//         </div>
//     );
// }

// export default App