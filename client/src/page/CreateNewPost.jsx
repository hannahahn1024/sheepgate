import React from 'react'
import Sidebar, { SidebarItem } from '../components/Sidebar'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";

const CreateNewPost = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
    ]
  };
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];
  
  return (
    <div className="flex">
      <div className="w-40">
        <Sidebar>
          <SidebarItem text="예배안내" path="/introduction"/>
        </Sidebar>
      </div>
      <div className='mx-auto w-screen'>
        <div className='px-2'>
        <div className='text-center'>Create New Post</div>
        <form className="w-full mb-2 p-2 border border-gray-300 rounded">
          <input type='title' placeholder='Title' className="w-full mb-2 p-2 border border-gray-300 rounded" />
          <input type='summary' placeholder='Summary' className="w-full mb-2 p-2 border border-gray-300 rounded" />
          <input type='file' className="w-full mb-2 p-2 border border-gray-300 rounded" />
          <ReactQuill value={content} modules={modules} formats={formats}/>
          <button className='mt-3 border-2 border-yellow-600 rounded bg-yellow-500 pl-3 pr-3 text-white font-bold pt-2 pb-2 w-1/6 mb-2 hover:bg-yellow-600'>Create Post</button>
        </form>
    </div>

        
      </div>
    </div>
  )
}

export default CreateNewPost