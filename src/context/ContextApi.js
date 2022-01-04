import React, { createContext } from "react";
import CompC from "./CompC";


const FirstName = createContext();
const LastName = createContext();

export default function ContextApi({info}) {
  // const [email, setEmail] = useState([]);
  // const [password, setPassword] = useState([]);
  // const [info, setInfo] = useState([]);

  // const handleClick = (e) => {
  //   setInfo(e=>{
  //     return [...e, email, password];
  //   })
  //   console.log(e);
  //   e.preventDefault();
    
  // };
  // const HandleTextChange = (e) => {
  //   setEmail(e.target.value);
  // };
  // const HandlepasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const {email, password} = props

  return (
    <div className="container my-5">
      {/* <form action="">
        <input type="text" onChange={HandleTextChange} />
        <input type="password" onChange={HandlepasswordChange} />
        <button className="btn btn-primary" onClick={handleClick}>
          Button
        </button>
      </form> */}

      <FirstName.Provider value={"Here is your password : "}>
        <LastName.Provider value={info}>
          <CompC />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}
export { FirstName, LastName };
