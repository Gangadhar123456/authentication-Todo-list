import { Button, Heading, Input } from "@chakra-ui/react";
import {  createUserWithEmailAndPassword,  } from "firebase/auth";
import React , { useState } from "react";
import { auth } from "../../firebase";

const SignUp = () => {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignUp = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email,password)
            .then((UserCredentialImpl) =>{
                console.log(UserCredentialImpl)
                

            }).catch((err) => {
                    console.log(err);
            })
        }


    return(
    <div>
        <center>
            <form onSubmit={SignUp}>
                <Heading>Create Account</Heading><br/>
                <Input w="200px" variant='filled' placeholder='Enter Your Email'
                type="email" 
               
                value={email}
                onChange={(e) => setEmail(e.target.value)} /> <br/>
                <br/>
                <Input w="200px" variant='filled' placeholder='Enter Your Password'
                type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                 value={password} />
                 <br/>
                 <br/>
                 <Button type="submit" colorScheme='blue'>Sign Up</Button>
            </form>
        </center>
    </div>
    )
}
export default SignUp