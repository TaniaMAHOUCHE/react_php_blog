import { useState } from "react";

export default  function Blog () {
    const [pseudo, setPseudo] = useState("");
    const [title, setTitle] = useState("");
    const [article, setArticle] = useState("");
    const [result, setResult] = useState([]);

    let content = [] ;

    const handleChangePseudo = (e) => {
        setPseudo(e.target.value);
    };

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleChangeArticle = (e) => {
        setArticle(e.target.value);
    };
    const handleSumbit = (e) => {
        e.preventDefault();
        const formData = new FormData(this) ;
        formData.append('pseudo',pseudo) ;
        formData.append('title',title)
        formData.append('article',article)

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
            }
        })
        .catch((err)=>{
            alert('Invalid');
        })
    }
    const info = result.map((data) =>
        <div key={data.id}>
            <div>
                <p>Pseudo : {data.pseudo}</p>
                <p>Titre: {data.title}</p>
                <p>Article: {data.article}</p>
            </div>
        </div>
    );
    const submitForm=(event)=>{
        handleSumbit(event)
    };
    return (
        <div >
            <form onSubmit={submitForm}>
                <div>
                    <p>Pseudo:</p>
                    <input
                        type="text" name="pseudo"
                        onChange={(event) => handleChangePseudo(event)}
                    />
                </div>
                <div>
                    <p>Titre : </p>
                    <input type="text" name="title"
                        onChange={(event) => handleChangeTitle(event)}
                    />
                </div>
                <div>
                    <p>Article : </p>
                    <input type="text" name="article" 
                    onChange={(event) => handleChangeArticle(event)}
                    />
                </div>
                <button type="submit">Insert</button>
            </form>
            <div>
                <h2>Liste des articles:</h2>
                {info} 
            </div>
        </div>
    );
}