import React, { useEffect, useState } from 'react'
import { BiPencil } from "react-icons/bi";
import { BiSolidTrash } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';
import Menu from "../commonComponents/Menu"
import axios from 'axios';

const Single = () => {
  const location = useLocation();
  const id = location.pathname.slice(-1)

  const [post, setPost] = useState()

  const getOnePost = async () => {
    const data = await axios.get(`http://localhost:2304/api/post/${id}`);
    console.log(data, 'data')
    setPost(data.data[0])
  }
  useEffect(() => {
    getOnePost()
  }, [])

  return (
    <div className='single'>
      <div className="content">
        <img src={post?.post_img} alt='post image' />
        <div className="user">
          <img src={post?.image} alt='user image' />
          <div className="info">
            <span>{post?.username}</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <BiPencil color='green' />
            </Link>

            <BiSolidTrash color='red' />
          </div>
        </div>
        {post?.desc}

      </div>
      <div className="menu">
        <Menu />
      </div>
    </div>
  )
}

export default Single