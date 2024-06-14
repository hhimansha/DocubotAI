import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './assets/DocubotAI2.png'

export default function Dashboard() {
   const [file, setFile] = useState(null);
   const [text, setText] = useState('');
 
   const handleFileChange = (e) => {
     setFile(e.target.files[0]);
   };
 
   const handleSubmit = async (e) => {
     e.preventDefault();
     if (!file) {
       alert('Please select a file first!');
       return;
     }
 
     const formData = new FormData();
     formData.append('file', file);
 
     try {
       const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
         headers: {
           'Content-Type': 'multipart/form-data',
         },
       });
       setText(response.data.text);
     } catch (error) {
       console.error('Error uploading the file:', error);
     }
   };

   return (
      <>
         <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>

         <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-96 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div class="h-full px-3 py-4 overflow-y-auto bg-surface">
               <a href="/" class="flex items-center ps-2.5 mb-5 mx-auto p-4">
                  <img src={logo} class="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
               </a>
               <ul class="space-y-2 font-medium">
                  
                  
                  <div class="flex items-center justify-center w-full p-3">
                     <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-40 border-2 border-light-base border-dashed rounded-2xl cursor-pointer hover:bg-light-base">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                              <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                              </svg>
                              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                              <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                     </label>
                  </div> 

                  <form onSubmit={handleSubmit}>
        <input type="file" accept="application/pdf" onChange={handleFileChange} />
        <button type="submit" className='text-white bg-slate-600'>Upload</button>
      </form>
      <h2 className='text-white'>Extracted Text</h2>
      <pre className='text-white'></pre>

                  
                  
               </ul>
            </div>
         </aside>

         <div class="p-0 md:ml-56 sm:ml-56 lg:ml-56 bg-black h-full ">
<div class="flex h-screen antialiased text-gray-800">
    <div class="flex flex-row h-full w-full overflow-x-hidden ml-40">
      
      <div class="flex flex-col flex-auto  p-6">
        <div
          class="flex flex-col justify-between flex-auto flex-shrink-0 rounded-2xl bg-surface h-full p-4"
        >
          <div class="flex flex-col overflow-x-auto mb-4">
            <div class="flex flex-col ">
              <div class="grid grid-cols-12 gap-y-2">
                <div class="col-start-1 col-end-8 p-3 rounded-lg">
                  <div class="flex flex-row items-center">
                    <div
                      class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      A
                    </div>
                    <div
                      class="relative ml-3 text-sm text-white bg-[#44494c] py-2 px-4 shadow rounded-xl"
                    >
                      <div>Hey How are you today?</div>
                    </div>
                  </div>
                </div>
                <div class="col-start-1 col-end-8 p-3 rounded-lg">
                  <div class="flex flex-row items-center">
                    <div
                      class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      A
                    </div>
                    <div
                      class="relative ml-3 text-sm text-white bg-[#44494c] py-2 px-4 shadow rounded-xl"
                    >
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vel ipsa commodi illum saepe numquam maxime
                        asperiores voluptate sit, minima perspiciatis.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-start-6 col-end-13 p-3 rounded-lg">
                  <div class="flex items-center justify-start flex-row-reverse">
                    <div
                      class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      A
                    </div>
                    <div
                      class="relative mr-3 text-sm text-white bg-light-basepy-2 px-4 shadow rounded-xl"
                    >
                      <div>I'm ok what about you?</div>
                    </div>
                  </div>
                </div>
                <div class="col-start-6 col-end-13 p-3 rounded-lg">
                  <div class="flex items-center justify-start flex-row-reverse">
                    <div
                      class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      A
                    </div>
                    <div
                      class="relative mr-3 text-sm text-white bg-light-base py-2 px-4 shadow rounded-xl"
                    >
                      <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-start-1 col-end-8 p-3 rounded-lg">
                  <div class="flex flex-row items-center">
                    <div
                      class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      A
                    </div>
                    <div
                      class="relative ml-3 text-white bg-[#44494c] text-sm py-2 px-4 shadow rounded-xl"
                    >
                      <div>Lorem ipsum dolor sit amet !</div>
                    </div>
                  </div>
                </div>
                <div class="col-start-6 col-end-13 p-3 rounded-lg">
                  <div class="flex items-center justify-start flex-row-reverse">
                    <div
                      class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      A
                    </div>
                    <div
                      class="relative mr-3 text-sm text-white bg-light-base py-2 px-4 shadow rounded-xl"
                    >
                      <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                      </div>
                      <div
                        class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500"
                      >
                        Seen
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-start-1 col-end-8 p-3 rounded-lg">
                  <div class="flex flex-row items-center">
                    <div
                      class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      A
                    </div>
                    <div
                      class="relative ml-3 text-sm text-white bg-[#44494c] py-2 px-4 shadow rounded-xl"
                    >
                      <div>
                        <p>{text}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div
            class="flex flex-row items-center h-16 rounded-xl bg-black w-full p-4 justify-center"
          >
           
            <div class="flex-grow ml-4">
              <div class="relative w-full">
                <input
                  type="text"
                  class="flex w-full  rounded-xl text-white bg-light-base   pl-4 h-10"
                />
                
              </div>
            </div>
            <div class="ml-4">
              <button
                class="flex items-center justify-center bg-primary hover:bg-indigo-600 rounded-xl text-black font-semibold px-4 py-2 flex-shrink-0"
              >
                <span>Send</span>
                <span class="ml-2">
                  <svg
                    class="w-4 h-4 transform rotate-45 -mt-px"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    ></path>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
         </div>
      </>

   )
};