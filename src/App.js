import Signin from "./component/auth/Signin"
import SignUp from "./component/auth/SignUp"

import React, { useState, useEffect } from "react";
import { auth } from "./firebase";
import Home from "./component/Home";
import { Box } from "@chakra-ui/react";



const App = ()=> {
  const [presentUser, setPresentUser] = useState(null)

    useEffect(() => {
      auth.onAuthStateChanged( user => {
        if (user) {
          setPresentUser({
            uid:user?.uid,
        email:user?.email
          })
        } else {
          setPresentUser(null)
        }
      })
    },[]);

  return(
  <Box p='10px' w='100%' h='100vh' bgGradient='linear(to-r, green.200, pink.500)' >
    <center>
      {presentUser ? <><Home presentUser={presentUser}/></> : <><Signin /> <br /><SignUp /></>}
    </center>
  </Box>
  )
}
export default App