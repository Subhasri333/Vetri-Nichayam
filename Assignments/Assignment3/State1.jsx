// import { useState } from "react"
// function usestate(){
//     const[count, setCount]=useState(0)
//     return(
//         <div>
//             <h1>count: {count}</h1>
//             <button onClick={()=>setCount(count - 1)}>Decrease</button>
//             <button onClick={()=>setCount(count + 1)}>Increase</button>
//             <button onClick={()=>setCount(0)}>Reset</button>
//         </div>
//     )
// }
// export default usestate

// import {useState} from 'react'
// function  usestate(){
//     const[Email, setemail] = useState("");
//     const[Name, setname] = useState("");
//     const[password, setpassword] = useState("");
//     return(
//         <div>
//             <h1>Login Form</h1>
//             <h3>E-mail : {Email}</h3>
//             <input type="email" placeholder='Type Your Mail Id'      
//             value = {Email} onChange = {(e)=>setemail(e.target.value)} />
//             <h3>Name : {Name}</h3>
//             <input type="text" placeholder='Type Your Name'      
//             value = {Name} onChange = {(e)=>setname(e.target.value)} 
//             />
//             </div>
//     )
// }
// export default  usestate

import {useState} from 'react'
function  usestate(){
    const[num1,setnum1] = useState("");
    const[num2,setnum2] = useState("");
    const[result,setresult] = useState("");
    const add=()=>(setresult(Number(num1)+ Number(num2)));
    const sub=()=>(setresult(Number(num1)- Number(num2)));
     const multiply=()=>(setresult(Number(num1) * Number(num2)));
      const divide=()=>(setresult(Number(num1)/ Number(num2)));
    return(
        <div>
            <h3>Simple Calculator</h3>
            <input type = "number" placeholder='enter the first number' value={num1} onChange={(e)=>{setnum1(e.target.value)}}
            />
            <br></br>

            <input type = "number" placeholder='enter the Second number' value={num2} onChange={(e)=>{setnum2(e.target.value)}}
            />
            <br></br>

            <button onClick={add}>+</button>
            <button onClick={sub}>-</button>
            <button onClick={multiply}>*</button>
            <button onClick={divide}>/</button>

            <br></br>
             <h3>Result is: {result}</h3>
        </div>
    )
}

export default  usestate