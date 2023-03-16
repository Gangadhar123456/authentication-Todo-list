import { Box, Button,  Heading, Input } from "@chakra-ui/react"
import { auth } from "../firebase"
import React, { useState } from 'react';



const Home = ({presentUser}) => {

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
  
    function handleAddTodo() {
      if (!newTodo) return;
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  
    function handleDelete(index) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  
    function handleUpdate(index, newTodoText) {
      const newTodos = [...todos];
      newTodos[index] = { ...newTodos[index], text: newTodoText };
      setTodos(newTodos);
    }
  
    return(
        <Box p='10px' w='100%' h='100vh' bgGradient='linear(to-r, green.200, pink.500)' >
            <Heading as='h1' size='xl' noOfLines={1}>Welcome {presentUser.email}</Heading>
            <Button  m='2' size="md" onClick={() => auth.signOut()} colorScheme='red'>Sign out</Button>
        <br />
        <Heading as='h1' size='md' noOfLines={1}>Create your Todo-List</Heading>
        <br />
        
        <Input p='5' w="200px" variant='filled' placeholder='write here'
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
        /> &nbsp;
        &nbsp;
        <Button colorScheme='blue' size='md' p='5' onClick={handleAddTodo}>Add Todo</Button>
        <br/>
        <br/>
        {todos.map((todo, index) => (
        <div key={index}>
            <Input p='5' w="200px" variant='filled' 
                type="text"
                value={todo.text}
                onChange={(e) => handleUpdate(index, e.target.value)}
            /> 
            &nbsp;&nbsp;
            <Button p='5' m="2" colorScheme='red' size='sm' onClick={() => handleDelete(index)}>Delete</Button>
        </div>
        ))}
        </Box>
    )
}
export default Home