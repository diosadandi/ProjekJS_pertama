import React from 'react'
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import eye from './assets/images/eye.png';
import DownloadPage from './pages/DownloadPage';
import { Link } from "react-router-dom";






function LoginPage( data ){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    const handleLogin = () => {
        username && password? data({username,password}) : alert("username atau password kosong")
    };
    

    return(
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value) }/>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div className='input-group'>
                    <Form.Control type={showPassword? 'text' : 'password'} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button 
                className='btn btn-sm btn-secondary p-3 m-5'
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                ><img src={eye} alt="Show Password" className='w-25 '/>
                </button>

            </Form.Group>

        </Form>

        

    );
}


export default LoginPage
