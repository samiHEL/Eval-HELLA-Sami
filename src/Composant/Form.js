import React from 'react';
import { useEffect, useState } from "react"
const Form = () => {
    const [form, setForm] = useState({email:"", commentaire:""})
    function handleChange(e){
        console.log(e.target);
        console.log(e.target.value);
        const { name , value } = e.target;
        //
        setForm({...form, [name]: value});

        //récuperer la valeur saisie en fonction du champ dans le fomulaire
        // executer un setForm => mise à jour du state => relancer un renderconsole
        
    }
    function handleSubmit(e){
        e.preventDefault();// bloquer le rechargement de page
        
        if(form.email.length > 0 && form.commentaire.length>0){
            console.log(form);
            setForm({email:"", commentaire:""}) // vider le formulaire
        }else{
            alert("veuillez completer le champ")
        }
    }
    function action1(){
        alert("je viens de cliquer sur le bouton 1")
    }
        
    return <div className='col-3'>
        <button onClick="">Masquer le formulaire</button>
       
        <form onSubmit={handleSubmit} >
            <input type="text" className="form-control" name="email" value={form.email} onChange={handleChange}placeholder="title de l'article "/>
            <textarea name="commentaire" id="" cols="30" rows="10" className="form-control" onChange={handleChange} value={form.commentaire}  placeholder="body de l'article "></textarea>
            <button onClick="">Créer un nouvel article</button>
        </form>
           
    
    </div>
    
};

export default Form;

// recuperer valeur de saisies dans le form
// 1 state qui permet de stocker les valeurs  dans le form
// modifier ke html input / textarea
// -name
// -onChange
// -value
// value={state.nom}
// onChange={fonction}
// submit