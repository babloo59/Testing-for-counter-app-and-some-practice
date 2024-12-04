import { useState } from "react";
import "./App.css";
import User from "./User";

function App() {

  const [count,setCount] = useState(0);
  const [login, setLogin] = useState(false);

  function decHandler() {
    setCount(count-1);
  }

  function incHandler() {
    setCount(count+1);
  }

  function resetHandler() {
    setCount(0);
  }

  function clickHandler() {
    setLogin((prevState) => !prevState);
  }

  return (
      <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
        <div className="text-[#0398d4] font-medium text-2xl">Increment && Decrement</div>
        <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
          <button onClick={decHandler} className="border-r-2 text-center w-20 border-[#bfbfbf text-5xl">
            -
          </button>
          <div className="font-bold gap-12 text-5xl">
            {count}
          </div>
          <button onClick={incHandler} className="border-l-2 text-center w-20 border-[#bfbfbf text-5xl">
            +
          </button>
        </div>
        <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">
          Reset
        </button>
        <div className="text-white flex flex-col gap-2">
          <h1>RTL query : getAllByLabelText</h1>
          <label htmlFor="user-name1">Username</label>
          <input type="text" id="user-name1" className="text-black"/>

          <label htmlFor="user-name2">Username</label>
          <input type="text" id="user-name2" className="text-black"/>

          <label htmlFor="user-name3">Username</label>
          <input type="text" id="user-name3" className="text-black"/>

          <h1>RTL query : getAllByLabelText</h1>
          <label htmlFor="Skill1">Skills</label>
          <input type="checkbox" id="Skill1" className="text-black"/>

          <label htmlFor="Skill2">Skills</label>
          <input type="checkbox" id="Skill2" className="text-black"/>

          <label htmlFor="Skill3">Skills</label>
          <input type="checkbox" id="Skill3" className="text-black"/>

          {
            login ? <button onClick={clickHandler}>Login</button> : <button onClick={clickHandler}>Logout</button>
          }
        </div>
        <User/>
      </div>

  );
}

export default App;
