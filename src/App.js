import React from "react";
import { useState } from "react";

function App() {

  const [input1,setInput1] = useState("");
  const [input2,setInput2] = useState("");
  const [hour,setHour] = useState("");
  const [minute,setMinute] = useState("");
  const [animate,setAnimate] = useState(false);

  function handleChange1(event){
    const {value} = event.target;
    setInput1(value);
    setAnimate(false);
  }

  function handleChange2(event){
    const {value} = event.target;
    setInput2(value);
    setAnimate(false);
  }

  function handleClick(){
    let x = input1*60;
    let y = x+Number(input2);
    let day = new Date().getDay();
    var z = 0;
    if (day == 6){
      z = 425-y;
    } else {
      z = 500-y;
    }
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let t = ((hours*60)+minutes) + z;
    let a = Math.floor(t / 60);
    let b = t % 60;
    let str = b.toString();
    var c = 0;
    if (a>12){
      c = a-12;
    } else {
      c = a;
    }
    var minu = 0;
    if (str.length == 1){
      minu = "0"+str;
    } else {
      minu = str;
    }
    setHour(c);
    setMinute(minu);
    if (input1 !== "" && input2 !== ""){
      setAnimate(true);
    } else{
      setAnimate(false);
    }
  }

  return (
    <div className="App">
      <div className="blue">
        <div className="input-area-1">
          <input className="input1" onChange={handleChange1} value={input1} placeholder="Hours"></input>
        </div>
        <div className="input-area-2">
          <input className="input2" onChange={handleChange2} value={input2} placeholder="Minutes"></input>
        </div>
        <div className="click-button" onClick={handleClick}>CLICK</div>
      </div>
      <div className={animate ? "white" : "white-prev"}>{hour}:{minute} PM</div>
    </div>
  );
}

export default App;
