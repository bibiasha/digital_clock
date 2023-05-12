import './App.css';
import {useState} from "react";
function App() {
  
  const [currentTime, setCurrentTime]=useState()
  let updateTime = ()=>{
    let time= new Date().toLocaleTimeString()
    setCurrentTime(time)
  }
  setInterval(updateTime,1000)
  return (
    <div className="App">
     <h1 className="headLine">{currentTime}</h1>
    </div>
  );
}

export default App;
