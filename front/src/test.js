// const handleSumbit = (e) => {
    //         e.preventDefault();
    //         const formData = new FormData(this) ;
    //         formData.append('pseudo',pseudo) ;
    //         formData.append('title',title)
    //         formData.append('article',article)
    
    //        fetch('http://localhost:2345',
    //        {
    //            method : 'POST' ,
    //            body : formData ,
    //        })
    //         .then((response)=>{
    //             return response.json() ;
    //         }) 
    //         .then((resp)=>{
    //             console.log(resp) ;
    //             for ( let val of resp){
    //                 content.push(val)
    //                 setResult(content)
    //             }
    //         })
    //         .catch((err)=>{
    //             alert('Invalid');
    //         })
    //     }
    //     const info = result.map((data) =>
    //         <div key={data.id}>
    //             <div>
    //                 <p>Pseudo : {data.pseudo}</p>
    //                 <p>Titre: {data.title}</p>
    //                 <p>Article: {data.article}</p>
    //             </div>
    //         </div>
    //     );
    //     const submitForm=(event)=>{
    //         handleSumbit(event)
    //     };
    //     return (