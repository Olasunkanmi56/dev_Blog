import React from 'react'


const NewPost = ({handleFile, postName, setPostName, postPostion, setPostPostion, postTitle, setPostTitle, postBody, setPostBody, handleSubmit}) => {
    return (
         <main className="NewPost">
            <h1>New Post</h1>
            <form className='newPostForm' onSubmit={handleSubmit}>
             <label htmlFor="Image">Image: </label>
               <input type="file"   accept='image/png image/jpeg /jpg'  onChange={handleFile} id='Image' name="picture" />
               <label htmlFor="name">Your Name:</label>
              <input placeholder='name' value={postName} onChange={(e) => setPostName(e.target.value)} type="text" id='name' />
              <label htmlFor="postion">Your Postion:</label>
              <input placeholder='postion' value={postPostion} onChange={(e) => setPostPostion(e.target.value)} type="text" id='postion' />
              <label htmlFor="title">Title:</label>
              <input placeholder='post title' value={postTitle} onChange={(e) => setPostTitle(e.target.value)} type="text" id='title' />
              <label htmlFor="message">Your message:</label>
              <textarea 
              id='message'
              placeholder='message'
              value={postBody}
              onChange={(e) => setPostBody(e.target.value)}
              ></textarea>
              <button type='submit'>submit</button>
            </form>
        </main>
    )
       
}

export default NewPost
