import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"

const Home = () => {

  const location = useLocation();

  const [posts, setPosts] = useState([]);
  const cat = location.search

  console.log(location.search, "pathname")

  const getAllPost = async () => {
    const posts = await axios.get(`http://localhost:2304/api/post/${cat}`);
    console.log(posts, "posts");
    setPosts(posts.data)

  }
  useEffect(() => {
    getAllPost()
  }, [cat])


  return (
    <div className='home'>

      <div className="posts">
        {
          posts.map((i) => {
            return <div key={i.id} className="post">
              <div className="img">
                <img src={i.img} alt="" />
              </div>
              <div className="content">
                <Link className='link' to={"/post/" + i.id}> <h1> {i.title}</h1> </Link>
                <p>{i.desc}</p>
                <button className="btn"> Read More</button>
              </div>

            </div>
          })
        }
      </div>
    </div>
  )
}

export default Home