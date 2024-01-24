import React, { useContext, useEffect, useState } from 'react'
import { BiPencil } from "react-icons/bi";
import { BiSolidTrash } from "react-icons/bi";
import { Link, useLocation, useParams } from 'react-router-dom';
import { Context } from '../helpers/AuthContext';
import { toast } from 'react-toastify';
import Menu from "../commonComponents/Menu"
import axios from 'axios';

const Single = () => {
  const { id } = useParams();

  const { currentUser } = useContext(Context);
  const [isDeleted, setIsDeleted] = useState(false);
  const [post, setPost] = useState();

  const getOnePost = async () => {
    try {
      const data = await axios.get(`http://localhost:2304/api/post/${id}`);
      setPost(data.data.post[0]);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getOnePost()
  }, [])

  const deletePost = async (id) => {
    const body = {
      postId: id,
      token: currentUser.token
    }
    try {
      const data = await axios.post("http://localhost:2304/api/post/delete", body);
      if (data.data?.status) {
        setIsDeleted(true)
        toast.success(data.data?.message);
        getOnePost();
      } else {
        toast.error(data.data?.message)
      }

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='single'>
      {!isDeleted ?
        <div className="content">
          <img src={`../upload/${post?.post_img}`} alt="" />
          <div className="user">
            <img src={`../upload/${post?.post_img}`} alt="" />
            <div className="info">
              <span>{post?.username}</span>
              <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
              {post?.user_id === currentUser?.id && <Link to={`/write?edit=${post?.postId}`}>
                <BiPencil color='green' />
              </Link>}
              {post?.user_id === currentUser?.id && <BiSolidTrash onClick={() => { deletePost(post?.postId) }} color='red' />}
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: post?.desc }} />


        </div> : <h3 className='text-center py-2'> No post</h3>}
      <div className="menu">
        <Menu cat={post?.cat} />
      </div>
    </div >
  )
}

export default Single