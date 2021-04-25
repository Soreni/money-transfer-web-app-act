import React, {useState, useEffect}from 'react';
import {TextField, Button} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';
import {API_URL} from './Config';


const CreateAccount = ()=>{

    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [phoneNumber,setPhoneName]=useState("");
    const [email,setEmail]=useState("");
    const [pin,setPin]=useState("");
    const [confirmPin, setConfirmPin] = useState("");

    const [isSubmitButtonClicked, setIsSubmitButtonClicked] = useState(false);

    useEffect(()=>{
       
    if(isSubmitButtonClicked===true){
     
        axios.post(`${API_URL}/account/create`,
                   {
                       "firstName": firstName,
                       "lastName": lastName,
                       "phoneNumber": phoneNumber,
                       "email": email,
                       "pin":pin
            
                   })
               .then((response)=> alert("Accounted Created with Id" + response.data.id))
               .catch((error)=>console.log(error));
               

    }

    },[isSubmitButtonClicked, firstName, lastName, email, phoneNumber, pin]);

return (
<form noValidate autoComplete="off">
    <div>
    <TextField 
     id="firstName"
     label="First Name"
     value = {firstName}
     onChange={(event)=>setFirstName(event.target.value)}
    />
    </div>
    <div>
    <TextField 
     id="lastName" 
     label="Last Name" 
     value = {lastName}
     onChange={(event)=>setLastName(event.target.value)}
    />
    </div>
   <div>
   <TextField 
     id="phoneNumber" 
     label="Phone Number" 
     required
     value = {phoneNumber}
     onChange={(event)=>setPhoneName(event.target.value)}/> 
   </div>
    <div>
    <TextField 
     id="email" 
     label="Email" 
     required 
     value = {email}
     onChange={(event)=>setEmail(event.target.value)}/>
    </div>
   <div>
   <TextField 
     id="pin" 
     label="Pin" 
     required 
     type="password"
     value = {pin}
     onChange={(event)=>setPin(event.target.value)}/>

   </div>
   <div>
   <TextField
                id="confirmPin"
                label="Confirm Pin"
                type="password"
                required 
                value={confirmPin}
                onChange={(event) => {
                    setConfirmPin(event.target.value)
                }}
            />
   </div>

<div>
    <br></br>
    
<Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<SaveIcon />}
                onClick={() => setIsSubmitButtonClicked(true)}
            >
                Save
      </Button>
</div>

    
</form> );

}

export default CreateAccount ;