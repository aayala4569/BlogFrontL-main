import React,{useState} from 'react'
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import { createAccount } from '../Services/DataService';


const CreateAccount = () => {

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const handleUser = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleSubmit = () => {
        let userData = {
            username: Username,
            password: Password
        }
        createAccount(userData);
        console.log(userData)
    };
  return (
    <div>
       <Form style={{width: '40', marginLeft: "33%", marginTop: "10%", backgroundColor: "lightseagreen", padding:80, borderRadius: 5}}>
        <h1 className='text-center'>Create Accout</h1>
      <Form.Group className="mb-3" controlId="Username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" onChange={handleUser}/>
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePassword} />
      </Form.Group>
      
      <Button variant="outline-primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default CreateAccount
