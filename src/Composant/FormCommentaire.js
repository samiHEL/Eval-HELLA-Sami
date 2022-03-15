import {useState} from "react"
export const FormCommentaire = (props) => {
    const [commentaire, setCommentaire] = useState("")
    const [commentaire2, setCommentaire2] = useState("")
    function handleKeyUp(e){
        if(e.key === "Enter"){
            props.setData((prevData) => {
                prevData.commentaires.push({text : e.target.value})
                return { ...prevData , commentaires : prevData.commentaires  }
            })
            setCommentaire("")
            setCommentaire2("");
            
        }
    }
    return <><input type="text" 
        
        onKeyUp={handleKeyUp} 
        onChange={(e) => setCommentaire(e.target.value)} 
        value={commentaire}
        className="form-control my-3" 
        placeholder="Titre de l'article"/>
        <input type="text" 
        
        onKeyUp={handleKeyUp} 
        onChange={(e) => setCommentaire2(e.target.value)} 
        value={commentaire2}
        className="form-control my-3" 
        placeholder="body de l'article"/></>
        
        
        
        
}
