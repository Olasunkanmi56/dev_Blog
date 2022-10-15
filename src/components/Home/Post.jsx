import React from 'react'
import {FaEdit, FaTrashAlt, FaRegThumbsUp, FaRegThumbsDown} from 'react-icons/fa'
import {Link} from 'react-router-dom'



const Post = ({post, counts, handleClicks, handleDelete}) => {
  return (
      <article className='post'>
            <div className="head">
            <Link to={`/post/${post.id}`}>
                <div className='head-1'>
                    <img className='postImg' src={post.img} alt="" />
                    <div className="head-2">
                        <h2 className='postName'>{post.devName}</h2>
                        <p className='postPostion'>{post.position}</p>
                    </div>
                </div>
             </Link>  
                <div className="icons">
                    <Link to={`/edit/${post.id}`}><FaEdit  className='icon-1'/></Link>
                    <FaTrashAlt className='icon-2'  onClick={() => handleDelete(post.id)}/>
                </div>
            </div>
                <div className="head-3">
                    <p className='postTitle'>{post.title}</p>
                    <p className='postBody'>{(post.body).length <= 30 ? post.body : `${(post.body).slice(0, 200)}...`}</p>
                </div>
                
                <div className="head-4">
                    <p className='postDate'>last since {post.datetime}</p>
                     <div className="icons-2">
                       <FaRegThumbsUp className='icons-5' onClick={() => handleClicks(counts + 1)}  /> <span>{counts}</span>
                       <FaRegThumbsDown onClick={() => handleClicks(counts + 1)} /><span>{counts}</span>
                     </div>
                </div>
        </article>
  )
}

export default Post