import { useState } from "react";

const Blog=()=>{
    // let history = useNavigate();
    const[data, setData]=useState({
        pseudo:"",
        title:"",
        article:"",
    })
    const [result, setResult] = useState([]);
    let content = [];

    const handleChange=(e)=>{
        setData({ ...data, [e.target.name]: e.target.value})
        // console.log(data)
    }
      
    const submitForm=(e)=>{
            e.preventDefault();
            const formData = new FormData(this) ;
            formData.append('pseudo',data.pseudo) ;
            formData.append('title',data.title)
            formData.append('article',data.article)
    
           fetch('http://localhost:2345',
           {
               method : 'POST' ,
               body : formData ,
           })
            .then((response)=>{
                return response.json() ;
            }) 
            .then((resp)=>{
                console.log(resp) ;
                for ( let val of resp){
                    content.push(val)
                    setResult(content)
                    console.log(content)
                }
            })
            .catch(error =>{
                alert('Invalid');
            })
    }
    const articles = result.map((data) =>
        <div key={data.id}>
            <div>
                <p>Pseudo : {data.pseudo}</p>
                <p>Titre: {data.title}</p>
                <p>Article: {data.article}</p>
            </div>
        </div>
    );
 
    return(
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <h1>Ajouter un article</h1>
                </div>

                <div>
                    <p>Pseudo</p>
                    <input type="text" name="pseudo" 
                    onChange={handleChange} value={data.pseudo}
                    />
                </div>
                
                <div>
                    <p>Title</p>
                    <input type="text" name="title" 
                    onChange={handleChange} value={data.title}
                    />
                </div>

                <div>
                    <p>Article</p>
                    <input type="text" name="article" 
                    onChange={handleChange} value={data.article}
                    />
                </div>

                <div>
                    <input type="submit" name="submit" value="Ajouter"/>
                </div>
            </form>
            <div>
                <h2>Liste des articles:</h2>
                {articles} 
            </div>
        </div>

    )
}

export default Blog;