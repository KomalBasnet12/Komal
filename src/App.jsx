import { useState } from 'react'

import UserLayout from './User/layout'
import Home from './User/Home/Home'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './User/About/About'
import SingleBlog from './User/Blog/SingleBlog'
import AdminLayout from './Admin/AdminLayout'
import AdminBlogs from './Admin/Home/AdminBlogs'
import AddBlog from './Admin/Blog/AddBlog'
import EditBlog from './Admin/Blog/EditBlog'

function App() {
  const[count, setcount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<UserLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>} />
        <Route path="blog/:id" element={<SingleBlog/>} />
      </Route>
    
     <Route path="/admin/" element={<AdminLayout/>}>
     <Route path="home" element={<AdminBlogs />} />
     <Route path="add" element={<AddBlog />} />
     <Route path="edit/:id" element={<EditBlog />} />

     </Route>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App
