import { useState } from "react";
import axios from 'axios';
//import{useNavigate} from 'react-router-dom'

const Register=(props)=>{
    const[data, setData]=useState({
        name:"",
        title:"",
        article:""
    })

    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value})

        console.log(data)
    }

    const submitForm=(e)=>{
        e.preventDefault();
        const sendData = {
            username:data.name,
            title:data.title,
            article:data.article
        }

        console.log(sendData);

        axios.post('http://localhost/8080', sendData)
         .then((result)=>{
             if (result.data.Status === 'Invalid')
                alert('Invalid');
            else{
                console.log ('Connexion réussite');
            }
        })
    }
    return(
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <h1>Register</h1>
                </div>
                <div>
                    <p>Username : </p>
                    <input type="text" name="name" 
                    onChange={handleChange} value={data.name}
                    />
                </div>

                <div>
                    <p>Title : </p>
                    <input type="text" name="title" 
                    onChange={handleChange} value={data.title}
                    />
                </div>
                
                <div>
                    <p>Article : </p>
                    <input type="password" name="article" 
                    onChange={handleChange} value={data.article}
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