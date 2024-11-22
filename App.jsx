import { useState } from "react";
import Comp1 from "./Comp1";
const App=()=>{
  const [name,setName]=useState("welcome");
  return(
    <>
    <h1>prop drilling : {name}</h1>
    <Comp1 user={name}/>
    </>
  )
}
export default App;

