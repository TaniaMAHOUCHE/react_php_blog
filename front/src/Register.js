import { useState } from "react";
import axios from 'axios';

const Register=(props)=>{
    // let history = useNavigate();
    const[data, setData]=useState({
        username:"",
        password:""
    })

    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value})

        //console.log(data)
    }

    const submitForm=(e)=>{
        e.preventDefault();
        const sendData = {
            username:data.username,
            password:data.password
        }

        console.log(sendData);

        axios.post('http://localhost:2345', sendData)
         .then((result)=>{
             if (result.data.Status === 'Invalid')
                alert('Invalid');
            else{
                // history(`/dashboard`)
                console.log('C est bon');
            }
        })
    }
    return(
        <div>
            <form onSubmit={submitForm} >
                <div>
                    <h1>Register</h1>
                </div>

                <div>
                    <p>Username</p>
                    <input type="text" name="username" 
                    onChange={handleChange} value={data.username}
                    />
                </div>
                
                <div>
                    <p>Password</p>
                    <input type="password" name="password" 
                    onChange={handleChange} value={data.password}
                    />
                </div>

                <div>
                    <input type="submit" name="submit" value="Register"/>
                </div>
            </form>
        </div>

    )
}

export default Register;