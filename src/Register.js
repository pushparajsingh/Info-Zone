 import React, { useState } from 'react'
 
 export default function Register() {
   const [name,setName]=useState("");
   const [passward,setPassward]=useState("");
   const [email,setEmail]=useState("");

   function signUp()
   {
     const item= {name,passward,email}
     console.warn(item);
   }
   return (
     <div className='background-Register'>
     <div className='col-6 offset-3 box1' >
      
       <h1>Register Page</h1><br></br>
       <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='form-control'/>
       <br></br>
       <input type="text" value={passward} onChange={(e)=>setPassward(e.target.value)} className='form-control'/>
       <br></br>
       <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control'/>
       <br></br>
       <button className='btn btn-primary' onClick={signUp}>Click Me</button>
     </div>
     </div>
   )
 }
 