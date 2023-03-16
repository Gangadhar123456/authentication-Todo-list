import { Button, Heading, Input } from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
      <Heading>Create Account</Heading><br/>
        <br/>
        <Input w="200px" variant='filled' placeholder='Enter Your Email'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <br/>
        <br/>
        <Input w="200px" variant='filled' placeholder='Enter your password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <br/>
        <br/>
        <Button size="md" type="submit" colorScheme='orange'>Log In</Button>
      </form>
    </div>
  );
};

export default SignIn;