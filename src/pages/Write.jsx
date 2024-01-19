import React, { useState } from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"

const Write = () => {
  const [value, setValue] = useState();
  console.log(value)
  return (
    <div className='add'>
      <div className="content">
        <input type="text" className='form-control border my-3' placeholder='Title' />
        <div className="editcontainer h_300 border-0">
          <ReactQuill className='h-100 w-100' value={value} onChange={setValue} theme='snow' />
        </div>

      </div>
      <div className="menu">
        <div className="item border p-3">
          <h1>Publish</h1>
          <div className="d-flex flex-column justify-content-around">
            <span className='m-2'><b>Status:</b> Draft</span>
            <span className='m-2'>  <b>Visibility</b>Public</span>
          </div>
          <input className='d-none' type="file" id='file' />
          <label htmlFor="file" className='cursor_pointer link'  >Upload File</label>
          <div className="buttons d-flex justify-content-between">
            <button className='btn btn-sm  my-1 btn-primary'>Save as Draft</button>
            <button className='btn btn-sm  my-1 btn-success'>Update</button>
          </div>
        </div>
        <div className="item border p-3">
          <h1>Category</h1>
          <div className="d-flex justify-content-start ">
            <input type="radio" className='mx-1' id='art' value="art" />
            <label htmlFor="art"> Art</label>
          </div>
          <div className="d-flex justify-content-start ">
            <input type="radio" className='mx-1' id='science' value="science" />
            <label htmlFor="science"> Science</label>
          </div>
          <div className="d-flex justify-content-start ">
            <input type="radio" className='mx-1' id='design' value="design" />
            <label htmlFor="design"> Design</label>
          </div>
          <div className="d-flex justify-content-start ">
            <input type="radio" className='mx-1' id='technology' value="technology" />
            <label htmlFor="technology"> Technology</label>
          </div>
          <div className="d-flex justify-content-start ">
            <input type="radio" className='mx-1' id='cinema' value="cinema" />
            <label htmlFor="cinema"> Cinema</label>
          </div>
          <div className="d-flex justify-content-start ">
            <input type="radio" className='mx-1' id='food' value="food" />
            <label htmlFor="food"> Food</label>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Write