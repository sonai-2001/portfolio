import React from 'react'

const Marquee = ({skills}) => {
  return (
    <div className='w-full flex flex-nowrap mt-10 overflow-hidden '>
       {skills.map((skill,index)=><div key={index} className='w-[20vw] border-r border-r-zinc-600 text-center flex-shrink-0'>{skill}</div>)
       }
       
       {skills.map((skill,index)=><div key={index} className='w-[20vw] border-r border-r-zinc-600 text-center flex-shrink-0'>{skill}</div>)
       }

    </div>
  )
}

export default Marquee