// import { useContext, useState } from "react";
// //  import UserContext from "./context";
// import { Button } from "react-bootstrap";
// import axios from 'axios';
// import './App.css'

// export default function Register(){
//     // let users=useContext(useContext);
//     let[name,setName]=useState('');
//     let[email,setEmail]=useState('');
//     let[pass,setPass]=useState('');
//     function handleSubmit(e){
//         e.preventDefault();
//         console.log(name,email,pass);
//         // users.users.push({name:name,email:email,password:pass,amount:1000})
//         let item=({name:name,email:email,password:pass,amount:1000})
//        axios.post('http://localhost:8080/create',item);
//     }
//     return(<>
//     <h1> Register</h1>  
//     <from onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input type="text" onChange={(e)=>{setName(e.target.value)}} ></input><br></br>
//         <label>Email:</label>
//         <input type="email" onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
//         <label>Password:</label>
//         <input type="email" onChange={(e)=>{setPass(e.target.value)}}></input>
//         <Button type="submit">Submit</Button>
        
//     </from>
//     </>)
// }

// // import UserContext from "./context";
// // // import { useContext, useState } from "react";
// // import { Button } from "react-bootstrap";
// // import './App.css'
// // import axios from 'axios';

// // export default function Register(){
// //     let users=useContext(UserContext)

// //     let [name,setName]=useState('');
// //     let [email,setEmail]=useState('');
// //     let [pass,setPass]=useState('');

// //     function handleSubmit(e){
// //         e.preventDefault()
// //         console.log(name,email,pass)
// //         users.users.push({name,email,password:pass,amount:1000})
// //     }
// //     return(<>
// // <h1>Register</h1>
// // <form onSubmit={handleSubmit}>
// // <div class="mb-3">
// //     <label for="exampleInputEmail1" class="form-label">Full Name</label>
// //     <input type="text" onChange={(e)=>{setName(e.target.value)}}></input>
// //   </div>
// //   <div class="mb-3">
// //     <label for="exampleInputEmail1" class="form-label">Email address</label>
// //     <input type="text" onChange={(e)=>{setEmail(e.target.value)}}></input>
// //   </div>
// //   <div class="mb-3">
// //     <label for="exampleInputPassword1" class="form-label">Password</label>
// //     <input type="text" onChange={(e)=>{setPass(e.target.value)}}></input>
// //   </div>
// //   <Button type="submit" class="btn btn-primary">Register</Button>
// // </form>
// //         </>)
// // }


// import UserContext from "./context";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import axios from 'axios';
import './App.css'

export default function Register(){
    // let users=useContext(UserContext)

    let [name,setName]=useState('');
    let [email,setEmail]=useState('');
    let [pass,setPass]=useState('');

    function handleSubmit(e){
        e.preventDefault()
        console.log(name,email,pass)
        // users.users.push({name,email,password:pass,amount:1000})
        let item=({name:name,email:email,password:pass,amount:1000})
        axios.post('https://bank-server-xsn2.onrender.com/create',item)
    }
    return(<>
<h1>Register</h1>
<form onSubmit={handleSubmit}>
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Full Name</label>
    <input type="text" onChange={(e)=>{setName(e.target.value)}}></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="text" onChange={(e)=>{setEmail(e.target.value)}}></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="text" onChange={(e)=>{setPass(e.target.value)}}></input>
  </div>
  <Button type="submit" class="btn btn-primary">Register</Button>
</form>
        </>)
}