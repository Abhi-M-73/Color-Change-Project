import React from 'react'
import { useState } from 'react'

export default function App() {
 const [color, setColor] = useState('')
  return (
    <div style={{backgroundColor: color}} className='h-screen w-full flex flex-col justify-between p-5'>
      <h1 className='text-4xl font-semibold text-center '>Choose any color</h1>
      <div className='max-w-screen-2xl mx-auto bg-gray-300 rounded-2xl flex items-center gap-10 px-10 py-10'>
        <button onClick={()=> setColor('red')} className='bg-red-500 px-8 py-3 rounded-xl'>Red</button>
        <button onClick={()=> setColor('black')} className='bg-black text-white px-8 py-3 rounded-xl'>Black</button>
        <button onClick={()=> setColor('blue')} className='bg-blue-500 px-8 py-3 rounded-xl'>Blue</button>
        <button onClick={()=> setColor('gray')} className='bg-gray-500 px-8 py-3 rounded-xl'>Gray</button>
        <button onClick={()=> setColor('yellow')} className='bg-yellow-500 px-8 py-3 rounded-xl'>Yellow</button>
        <button onClick={()=> setColor('purple')} className='bg-purple-500 px-8 py-3 rounded-xl'>Purple</button>
        <button onClick={()=> setColor('green')} className='bg-green-500 px-8 py-3 rounded-xl'>Green</button>
        <button onClick={()=> setColor('orange')} className='bg-orange-500 px-8 py-3 rounded-xl'>Orange</button>
      </div>
    </div>
  )
}
