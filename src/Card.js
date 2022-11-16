import React, { useState } from "react";

function Card({ pet, addLike, addComment }){

    const [isHide, setIsHide] = useState(true)
    const [isComment, setIsComment] = useState(true)
    const [comment, setComment] = useState("")
 
    function handleClick(){
        let currentLike = pet.likes;
        const id = pet.id;
        currentLike++;
        const newData = {
            likes:currentLike
        } 
        addLike(id, newData, currentLike)
    }

    function handleSubmit(){
        const id = pet.id;
        const newData = {
            comments:[...pet.comments, comment]
        }
        addComment(id, newData, comment)
    }

    const comments = pet.comments.map(comment => {
        return <p className={isComment ? "comments-hide" : "comments-show"}>{comment}</p>
    })

    
    return(
        <div className="card">
            <img onClick={() => setIsHide(!isHide)} src={pet.image} className="image" />
            <h2 className="pet-name">{pet.name}</h2>
            <p className="pet-age">Age:{pet.age}</p>
            <p className={isHide ? 'hide' : "show"} >Description:{pet.description}</p>
            <button className="like-btn" onClick={handleClick}>👍{pet.likes}</button>
            <button onClick={()=> setIsComment(!isComment)} className="comment-btn">💬{pet.comments.lenght} </button>
            <input onChange={(e)=>setComment(e.target.value)} className={isComment ? "comments-hide" : "comments-show"} type="text" placeholder="comment"/>
            <button onClick={handleSubmit} className={isComment ? "comments-hide" : "comments-show"}>Submit</button>
            {comments}
        </div>
    )
}

export default Card;