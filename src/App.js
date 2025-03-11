import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NewPost from './NewPost';
import Missing from './Missing';
import PostPage from './PostPage';
import Post from './Post'

const App = () => {
  return (
    <div>
       <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/newpost">Newpost</Link></li>
            <li><Link to="/postpage">PostPage</Link></li>
          </ul>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />  {/* ✅ No exact needed in React Router v6 */}
        <Route path="/about" element={<About />} />
        <Route path="/newpost" element={<NewPost />} />
        <Route path="*" element={<Missing />} /> {/* ✅ 404 Page */}
        <Route path="/postpage" element={<PostPage/>} /> 
        <Route path="/postpage/:id" element={<Post/>} /> 
        {/*
      <Header/>
      <Nav/>
      <Home/>
      <NewPost/>
      <PostPage/>
      <About/>
      <Missing/>
      <Footer/>
      */}
      
      </Routes>
    </div>
  );
}

export default App;
