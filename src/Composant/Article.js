import {useState} from "react"
import { Commentaire } from "./Commentaire"
import { FormCommentaire } from "./FormCommentaire"

export const Article = () => {
    const [data , setData] = useState({
        id : 1 ,
        titre : "Article 1",
        commentaires : [
            
        ]
    })
    
    return <article className="col-4">
       <button onClick="">Masquer le formulaire</button>
        
        <FormCommentaire setData={setData} />
        
        <button onClick="">Envoyer l'article</button>
        <ul>
            {data.commentaires.map( (commentaire, index) => {
                return <Commentaire key={index} data={commentaire} />
                {/** props data={commentaire}
                Commentaire({id : 1, text : "premier commentaire"})
            */}
            } )}
        </ul>
        <ul>
            {data.commentaires.map( (commentaire2, index) => {
                return <Commentaire key={index} data={commentaire2} />
                {/** props data={commentaire}
                Commentaire({id : 1, text : "premier commentaire"})
            */}
            } )}
        </ul>
        
    </article>
}