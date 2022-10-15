import React, { useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'


const EditPost = ({ setEditFile, posts, editName, editPostion, editTitle, editBody, setEditName, setEditPostion, setEditTitle, setEditBody, handleEdit}) => {
    const { id } = useParams();
    const post = posts.find(post => (post.id).toString() === id);

    useEffect(() => {
        if(post){
            setEditName(post.devName)
            setEditPostion(post.position)
            setEditTitle(post.title)
            setEditBody(post.body)

        }
    }, [post, setEditName, setEditPostion, setEditTitle, setEditBody])
    return (
        <main className="NewPost">
            {editName && 
              <>
            <h1>Edit Post</h1>
            <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
               <label htmlFor="Profile">Your image</label>
               <input type="file"  accept='image/png image/jpeg /jpg' onChange={(e) => setEditFile(e.target.files[0].name)} id='Image' name="picture" />
               <label htmlFor="name">Your Name:</label>
              <input placeholder='name' value={editName} onChange={(e) => setEditName(e.target.value)} type="text" id='name' />
              <label htmlFor="postion">Your Postion:</label>
              <input placeholder='postion' value={editPostion} onChange={(e) => setEditPostion(e.target.value)} type="text" id='postion' />
              <label htmlFor="title">Title:</label>
              <input placeholder='post title' value={editTitle} onChange={(e) => setEditTitle(e.target.value)} type="text" id='title' />
              <label htmlFor="message">Your message:</label>
              <textarea 
              id='message'
              placeholder='message'
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              ></textarea>
              <button type='submit' onClick={() => handleEdit(post.id)}>submit</button>
            </form>
              </>
            }

            {!editName &&
                <>
                   <h1>Post Not Found</h1>
                   <p>Well, that's dasappointing</p>
                   <Link><p>Vist our Hompage</p></Link>
                </>

}
</main>   
    )
}

export default EditPost
