import React from 'react'
import Post from './Post'

function Feed({posts, counts, handleClicks, handleDelete}) {
    return (
     <main>
      {posts.map(post => (
          <Post key={post.id}  post={post} counts={counts} handleClicks={handleClicks}  handleDelete={handleDelete}/>
      ))}
     </main>
    )
  }
  
  export default Feed
