import { useState } from "react";

const Login=()=>{
    const [user,setUser]=useState({username:'',password:''})
    
    const handleChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    const submitForm=(e)=>{
        e.preventDefault();
        const formData = new FormData(this) ;
        formData.append('pseudo',user.pseudo) ;
        formData.append('password',user.password)

       fetch('http://localhost:2345',
       {
           method : 'POST' ,
           body : formData ,
       })
        .then((response)=>{
            return response.json() ;
        }) 
        .then((resp)=>{
            //window.localStorage.setItem('pseudo', result.data.pseudo);
        })
        .catch(error =>{
            alert('Invalid user');
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
                    <input type="text" name="pseudo"
                    onChange={handleChange} value={user.pseudo} />
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