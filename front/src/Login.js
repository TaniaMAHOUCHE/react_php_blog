import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login=()=>{
    let post = useNavigate();
    const [user,setUser]=useState({username:'',password:''})
    
    const handleChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    const submitForm=(e)=>{
        e.preventDefault();
        const sendData = {
            username:user.username,
            password:user.password
        }

        console.log(sendData);

        axios.post('http://localhost:2345', sendData)
         .then((result)=>{
             if (result.data.Status === '200'){
                
                window.localStorage.setItem('username', result.data.username);
                window.localStorage.setItem('username', result.data.username);

                post(`/post`);
            }else{
                alert('Invalid User');
            }
        })
    }

    return(
        <form onSubmit={submitForm}>
        <div>
            <div>
                <h1>Please Log In</h1>
            </div>

            <div>
            <p>Username:</p>
            <input type="text" name="username"
            onChange={handleChange} value={user.username} />
            </div>

            <div>
            <p>Password</p>
            <input type="password" name="password" 
            onChange={handleChange} value={user.password} />
            </div>   

            <div>
            <input type="submit" name="submit" value="Login"/>
            </div>
        </div>
        </form>
    )
}

export default Login;