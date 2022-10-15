import React from 'react'
import {Link} from 'react-router-dom'

const Nav = ({search, setSearch}) => {
    return (
        <nav className='Nav'>
            <form action="#" className='searchForm'>
                <label htmlFor="earch">Search</label>
                <input 
                  placeholder='Search Post'
                  id='search'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text" />
            </form>
            <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/post'>Post</Link></li>
                  <li><Link to='/about'>About</Link></li>
             </ul>
        </nav>
    )
}

export default Nav
