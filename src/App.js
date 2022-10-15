import React, {useState, useEffect} from "react";
import Header from './components/Header'
import Nav from './components/Nav'
import Home from './components/Home/Home'
import Missing from './components/Missing'
import PostPage from './components/PostPage'
import NewPost from './components/NewPost'
import EditPost from './components/EditPost'
import About from './components/About'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {format} from  'date-fns'
import api from './api/posts'


function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [postName, setPostName] = useState('')
  const [postPostion, setPostPostion] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const [editName, setEditName] = useState('')
  const [editPostion, setEditPostion] = useState('')
  const [editTitle, setEditTitle] = useState('')
  const [editBody, setEditBody] = useState('')
  const [counts, setCounts] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
       const fetchPost = async () => {
        try{
          const response = await api.get('/posts')
          setPosts(response.data)
          console.log(response);
        }catch (err) {
           console.log(err.message);
        }   
       }

       fetchPost()
  }, [])

  useEffect(() => {
     const filteredResults = posts?.filter((post) => (post.devName).toLowerCase().includes(search?.toLowerCase()) || 
     (post.position).toLowerCase().includes(search?.toLowerCase()) || (post.title).toLowerCase().includes(search?.toLowerCase()) || 
     (post.body).toLowerCase().includes(search?.toLowerCase()))

     setSearchResults(filteredResults.reverse())
  }, [posts, search])

  const handleClicks = () => {
        setCounts(prevCount => prevCount + 1)
  }

  const handleDelete = async (id) => {
    try{
      await api.delete(`/posts/${id}`)
      const postLists = posts.filter(post => post.id !== id)
      setPosts(postLists)
      navigate('/')
    } catch (err) {
       console.log(err.message)
    }
  }

  const handleSubmit = async (e) => {
     e.preventDefault()
     const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
     const datetime = format(new Date(), 'MMMM dd, yyyy pp');
     const myNewPost = {id, img: '',  devName: postName, datetime, position: postPostion, title: postTitle, body: postBody}
     try {
      const allposts = await api.post('/posts', myNewPost)
      const newPosts = [...posts, allposts]
      setPosts(newPosts)
      setPostName('')
      setPostPostion('')
      setPostTitle('')
      setPostBody('')
      navigate('/')
     } catch (err) {
         console.log(err.message);
     }
    
  }

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const myNewPost = {id, img: '',  devName: editName, datetime, position: editPostion, title: editTitle, body: editBody}
    try {
      const Posts = await api.put(`/posts/${id}`, myNewPost)
      console.log(Posts)
      setPosts(posts.map(post => post.id === id ? {...Posts.data} : post))
      setEditName('')
      setEditPostion('')
      setEditTitle('')
      navigate('/')

    } catch (err) {
          console.log(err.message);
    }
  }


 return (
    <div className="App">
      <Header title='Dev-Blog'/>
      <Nav search={search} setSearch={setSearch}/>
     <Routes>
      <Route path="/" element={<Home posts={searchResults} counts={counts} handleDelete={handleDelete} handleClicks={handleClicks}/>}/>
      <Route path="/post" element={<NewPost    postName={postName} setPostName={setPostName} postPostion={postPostion} setPostPostion={setPostPostion} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody} handleSubmit={handleSubmit}/>}/>
      <Route path="/post/:id" element={<PostPage  posts={posts} handleDelete={handleDelete}  />}/>
      <Route path="/edit/:id" element={<EditPost     posts={posts} editName={editName} editPostion={editPostion} editTitle={editTitle} editBody={editBody}  setEditName={setEditName} setEditPostion={setEditPostion} setEditTitle={setEditTitle} setEditBody={setEditBody} handleEdit={handleEdit} />}/>
      <Route path="/about" element={<About />}/>
      <Route path="*" element={<Missing />}/>
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
