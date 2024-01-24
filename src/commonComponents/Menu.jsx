import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);


  const getAllPost = async () => {
    const posts = await axios.get(`http://localhost:2304/api/post?cat=${cat}`);
    setPosts(posts.data)
  }
  useEffect(() => {
    getAllPost()
  }, [cat])
  return (
    <div className='menu'>
      {
        posts.map((i) => {
          return <div key={i.id} className="post">
            <img src={i.img} alt="" />
            <h2>{i.title}</h2>
            <button className="btn">Read More</button>
          </div>
        })
      }

    </div>
  )
}

export default Menu