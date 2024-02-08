import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom"
import { Context } from '../helpers/AuthContext';

// HOME PAGE WHERE ALL POST WILL BE LISTED
const Home = () => {

  const [posts, setPosts] = useState([]); // post storing state
  const location = useLocation();
  const { currentUser } = useContext(Context); // TAKING USER OBJECT FROM CONTEXT
  const cat = location.search   // taking category type from params

  const getAllPost = async () => {
    const category = cat === "?cat=MyPosts" ? "" : cat

    const datasss = await axios.get(`http://localhost:2304/api/post/${category}`);

    if (cat === "?cat=MyPosts" && datasss.data) {
      const data = datasss?.data?.filter((i) => i.user_id === currentUser.id);
      setPosts(data);
    } else {
      setPosts(datasss.data) // SETTING POST DATA IN STATE 
    }
  }

  useEffect(() => {
    getAllPost();
  }, [cat])

  return (
    <div className='home'>

      {posts.length > 0 ?
        <div div className="posts">
          {
            posts.map((i) => {
              return <div key={i.postId} className="post">
                <div className="img">
                  <img src={`./upload/${i.post_img}`} alt="" />
                </div>

                <div className="content">
                  <Link className='link' to={`/post/${i.postId}`}>
                    <h1> {i.title}</h1>
                  </Link>

                  <div dangerouslySetInnerHTML={{ __html: i.desc }} />
                  <button className="btn"> Read More</button>
                </div>
              </div>
            })
          }
        </div> :
        <div className="row">
          <h1 className='text-center py-2'> No posts to show .....</h1>
        </div>}
    </div >
  )
}

export default Home