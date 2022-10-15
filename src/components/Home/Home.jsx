import React from 'react'
import Feed from './Feed'

const Home = ({posts, counts, handleClicks, handleDelete}) => {
    return (
        <main className='Home'>
            {posts.length ? (<Feed posts={posts} counts={counts} handleClicks={handleClicks}  handleDelete={handleDelete}/>) :
             (<p style={{marginTop: '2rem'}}> No post to display</p>) }
        </main>
    )
}

export default Home
