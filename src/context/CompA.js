// import React, { createContext } from 'react';
import React, { useState } from "react";
import ContextApi from "./ContextApi";

// const Text = createContext();
// const TextArea = createContext();
export default function CompA() {
   const [email, setEmail] = useState([]);
   const [password, setPassword] = useState([]);
   const [info, setInfo] = useState([]);

   const handleClick = (e) => {
     setInfo((e) => {
       return [email, password];
     });
     e.preventDefault();
   };
   const HandleTextChange = (e) => {
     setEmail(() => e.target.value);
   };
   const HandlepasswordChange = (e) => {
     setPassword(() => e.target.value);
   };
   return (
     <div className="container my-5">
       <form action="">
         <input type="text" value={email} onChange={HandleTextChange} />
         <input type="password" value={password} onChange={HandlepasswordChange} />
         <button className="btn btn-primary" onClick={handleClick}>
           Button
         </button>
       </form>
       <ContextApi info={info}/>
     </div>
   );
}
