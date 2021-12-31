import React, { useState } from "react";

const Todos = () => {
  // const [input, setInput] = useState("");
  // const [todos, setTodos] = useState([]);

  // const onChange = (e) => {
  //   setInput(e.target.value);
  //   // console.log(e.target.value)
  // };

  // const onClick = (e) => {
  //   setTodos((todo) => {
  //     return [...todo, input];
  //   });

  //   e.preventDefault();
  //   setInput("");
  //   console.log("click");
  // };
  // const handleDelete = (e)=>{
  //   // setInput((todo) => {
  //   //   return e.target.key;
  //   // });
  //   console.log(e.target.key)
  //   e.preventDefault();
  // }
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const onChanged = (e) => {
    setInput(e.target.value);
  };

  const onClick = () => {
    if(input!==""){
       setTodos((item) => {
      return [...item, input];
    });
    }
    setInput("");
    // e.preventDefault();
    // console.log("click");
  };

  const handleDelete = (e) => {
    // console.log("Delete");
    setTodos((oldItems) => {
      return oldItems.filter((arr, index) => {
        return index !== e;
      });
    });
  };
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container">
      <div className="card my-5" style={{ width: "30rem" }}>
        <h3 className="card-header">What's your plan for today!</h3>
        <div className="card-body">
          <form onSubmit={submit}>
            <input
              type="text"
              style={{ borderRadius: "5px", border: "1px solid blue" }}
              value={input}
              onChange={onChanged}
            />
            <button
              type="submit"
              className="btn btn-sm btn-primary mx-2"
              onClick={onClick}
            >
              Submit
            </button>
          </form>

          <div>
            <ol>
              {/* {input} */}
              {/* <li>{todos}</li> */}

              {todos.map((item, index) => {
                let id = Math.floor(Math.random() * 1000000);
                return (
                  <li
                    key={id}
                    style={{ listStyleType: "none", border: "1px solid black", margin: "5px 0" }}
                  >
                    <button
                      className="mx-3 btn-sm btn btn-danger my-1"
                      onClick={(e) => handleDelete(index)}
                    >
                      X
                    </button>
                    {item}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
