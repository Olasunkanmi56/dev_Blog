import React from 'react'
import { useParams } from 'react-router-dom'
import {FaEdit, FaTrashAlt, FaRegThumbsUp, FaRegThumbsDown} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const PostPage = ({posts, handleDelete}) => {
    const{ id }= useParams()
    const post = posts.find(post => (post.id).toString() === id)
    return (
        <main className='PostPage'>
        <article className='post'>
              {post && 
                <>
                  <div className="head">
                    <div className='head-1'>
                    <img className='postImg' src={post.img} alt="" />
                    <div className="head-2">
                        <h2 className='postName'>{post.devName}</h2>
                        <p className='postPostion'>{post.position}</p>
                    </div>
                </div>
                <div className="icons">
                <Link to={`/edit/${post.id}`}><FaEdit  className='icon-1'/></Link>
                    <FaTrashAlt className='icon-2' onClick={() => handleDelete(post.id)} />
                </div>
            </div>
                <div className="head-3">
                    <p className='postTitle'>{post.title}</p>
                    <p className='postBody'>{post.body}</p>
                </div>
                <div className="head-4">
                    <p className='postDate'>last since {post.datetime}</p>
                     <div className="icons-2">
                       <FaRegThumbsUp className='icons-5'/> <span>10</span>
                       <FaRegThumbsDown /><span>10</span>
                     </div>
                </div>
                </>
              }
              {!post &&
                 <>
                    <h1>Post Not Found</h1>
                    <p>Well, that's dasappointing</p>
                    <Link to={'/'}><p>Vist our Hompage</p></Link>
                 </>
                 }
        </article>
        </main>
    )
}

export default PostPage
