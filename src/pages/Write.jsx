import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from "formik"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"
import axios from 'axios';
import { Context } from '../helpers/AuthContext';
import { addPost } from '../helpers/Helper';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';

const Write = () => {
  const [value, setValue] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const { currentUser } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const editValue = queryParams.get('edit');

  const { handleChange, handleBlur, handleSubmit, setFieldValue, errors, values } = useFormik({
    initialValues: {
      title: "",
      cat: "",
      desc: "",
      post_img: ""
    },

    validationSchema: addPost,
    onSubmit: val => {
      if (!editValue) { submit(val) } else {
        updatePost(val)
      }
    }
  });
  const updatePost = async (val) => {
    const formdata = new FormData();
    formdata.append("file", imageFile)
    formdata.append("title", val.title)
    formdata.append("cat", val.cat)
    formdata.append("user_id", currentUser.id)
    formdata.append("desc", value)
    formdata.append("postId", editValue)

    const response = await axios.put("http://localhost:2304/api/post/updatePost", formdata, {
      headers: {
        "Authorization": currentUser.token,
        "Content-Type": 'form-data'
      }
    })
    if (response.data.status) { toast.success(response.data.message) }
  }

  const getPostForEdit = async () => {
    try {
      const data = await axios.get(`http://localhost:2304/api/post/${editValue}`);
      console.log(data.data.post[0].title, "response")
      values.title = data.data.post[0].title
      setFieldValue('post_img', data.data.post[0].post_img)
      setFieldValue('cat', data.data.post[0].cat)
      setFieldValue('desc', data.data.post[0].desc)
      setValue(data.data.post[0].desc)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (editValue) {
      getPostForEdit()
    }


  }, [editValue])
  const submit = async (val) => {

    if (imageFile) {
      console.log(imageFile)
      const formdata = new FormData();
      formdata.append("file", imageFile);
      formdata.append("title", val.title);
      formdata.append("cat", val.cat);
      formdata.append("user_id", currentUser.id);
      formdata.append("desc", value);
      try {
        const response = await axios.post("http://localhost:2304/api/post/addPost", formdata, {
          headers: {
            "Authorization": currentUser.token,
            "Content-Type": 'form-data'
          }
        });

        if (response.data.status) {
          toast.success(response.data.message);
          setTimeout(() => {
            navigate("/")
          }, 500);
        }

        if (!response.data.status) return toast.error(response.data.message)

      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };


  const getDescription = (e) => {
    setValue(e)
    setFieldValue('desc', e)
  }

  const handleFileChange = (event) => {
    setImageFile(event.target.files[0]);
    setFieldValue('post_img', event.target.files[0]);
  };

  return (
    <div className='add'>
      <div className="content">
        <input name='title' value={values.title} placeholder="Write title"
          onChange={handleChange} onBlur={handleBlur}
          type="text" className='  form-control border my-3' />
        <small className='text-danger' > {errors.title}</small>
        <div className="editcontainer h_300 border-0">
          <ReactQuill placeholder='Write post description' className='h-100 w-100' name="desc"
            value={value} onChange={getDescription} theme='snow' />
        </div>
        <small className='text-danger'>{errors.desc}</small>
      </div>

      <div className="menu">
        <div className="item border p-3">
          <h1>Publish</h1>
          <div className="d-flex flex-column justify-content-around">
            <span className='m-2'><b>Status:</b> Draft</span>
            <span className='m-2'>
              <b>Visibility</b>Public
            </span>
          </div>
          <input onChange={handleFileChange} accept='image/*' className='d-none' type="file" id='file' name='post_img' />
          <label htmlFor="file" className={!errors.post_img ? "cursor_pointer link" : "text-danger cursor_pointer link"}   >Upload File {!errors.post_img ? "" : <small>Select picture please.</small>}</label>
          <br />
          <div className="buttons d-flex justify-content-between">
            <button className='btn btn-sm  my-1 btn-primary' onClick={handleSubmit} type='submit'>
              Upload Blog
            </button>
            <button className='btn btn-sm  my-1 btn-success'>Update</button>
          </div>
        </div>

        <div className="item border p-3">
          <h1>Category</h1>
          <div className="d-flex justify-content-start ">
            <input onChange={handleChange} onBlur={handleBlur}
              type="radio" name='cat' className='mx-1'
              id='art' checked={values.cat === "art"} value="art" />
            <label htmlFor="art"> Art</label>
          </div>

          <div className="d-flex justify-content-start ">
            <input onChange={handleChange} onBlur={handleBlur}
              type="radio" name='cat' className='mx-1'
              id='science' checked={values.cat === "science"} value="science" />
            <label htmlFor="science"> Science</label>
          </div>

          <div className="d-flex justify-content-start ">
            <input onChange={handleChange} onBlur={handleBlur}
              type="radio" name='cat' className='mx-1'
              id='design' checked={values.cat === "design"} value="design" />
            <label htmlFor="design"> Design</label>
          </div>

          <div className="d-flex justify-content-start ">
            <input onChange={handleChange} onBlur={handleBlur}
              type="radio" name='cat' className='mx-1'
              id='technology ' checked={values.cat === "technology"} value="technology" />
            <label htmlFor="technology"> Technology</label>
          </div>

          <div className="d-flex justify-content-start ">
            <input onChange={handleChange} onBlur={handleBlur}
              type="radio" name='cat' className='mx-1'
              id='cinema' checked={values.cat === "cinema"} value="cinema" />
            <label htmlFor="cinema"> Cinema</label>
          </div>
          <div className="d-flex justify-content-start ">
            <input onChange={handleChange} onBlur={handleBlur}
              type="radio" checked={values.cat === "food"} name='cat' className='mx-1'
              id='food' value="food" />
            <label htmlFor="food"> Food</label>
          </div>

        </div>
      </div>
    </div >
  );
}

export default Write;
