import React from 'react'
function Usecase() {
  return (
    <div className='font-bold  text-start flex flex-col justify-center col-start sm:px-6 dark:bg-[#34495E] ' id='usecase'>
      <h1 className='mb-2 mt'>
        วิธีการใช้งานเว็บไซต์
      </h1>
      <div className='inline-flex  rounded-lg py-3 px-4 bg-white ring-1 ring-slate-900/10 dark:bg-[#34495E]  '>
      <iframe className='rounded-lg' width="500px" height="300px" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      
    </div>
  )
}

export default Usecase