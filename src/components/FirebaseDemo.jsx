import React from 'react'
import { useState } from 'react'
import Button from "./Button";


function FirebaseDemo() {

  const [details, setDetails] = useState({
      fName: '',
      phone: '',
      email: '',
      CompanyName: '',
      SmallInfo: '',
   
  })



  const PostData =async(e)=>{
      e.preventDefault()

      const{fName,phone,email,CompanyName,SmallInfo}=details;

     const res=await fetch("https://brainwave-1b71d-default-rtdb.firebaseio.com/harshform.json",
     {
         method:'POST',
         headers:{
             'Content-Type':'application/json'
         },
         body:JSON.stringify({
          fName,
          phone,
          email,
          CompanyName,
          SmallInfo,
         })
      })

  }

return (
  <div className='form'  id="FirebaseDemo">
    <div className='myboxaya'>
    <h1 className='myhead'>Leave Us a Message</h1>
    <div className='forshifingtextinput font-sans'>
    Your FullName*:<input type='text' className='input-box' placeholder='' onChange={(e)=>
          setDetails({...details,fName:e.target.value})} /> <br></br><br></br>
      PhoneNumber*: <input type='text' className='input-box' placeholder='' onChange={(e)=>
          setDetails({...details,phone:e.target.value})}  /><br></br><br></br>
      Email-Address*: <input type='email' className='input-box' placeholder='' onChange={(e)=>
          setDetails({...details,email:e.target.value})} /><br></br><br></br>
      Company-Name*: <input type='text' className='input-box' placeholder='' onChange={(e)=>
          setDetails({...details,CompanyName:e.target.value})} /><br></br><br></br>
      Enquiries About: <input type='text' className='input-box' placeholder='' onChange={(e)=>
          setDetails({...details,SmallInfo:e.target.value})} /><br></br><br></br>
          <Button onClick={PostData} className={'button-click'}>Submit</Button>
         </div> 
      {/* <button onClick={PostData}>Submit</button> */}
      
      {/* <button><a href='Home'>Home Page</a> </button> */}
      
  </div>
  </div>
)
}

export default FirebaseDemo

