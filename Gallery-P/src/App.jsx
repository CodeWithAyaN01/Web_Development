// USED CONCEPTS

// Rest APis
// useSatate ,useEffect
// Lazy Loading
// axios.get()
// Mapping of Data

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from './Components/Image'
// axios has .get() .post() .patch() .detele()  ...
const App = () => {

  // Random function
  const random = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Variables & URLs
  const [index, setindex] = useState(random(2,30)) // randomly starts from a page
  const [userData, setuserData] = useState([]) // Array of Object
  const URL = `https://picsum.photos/v2/list?page=${index}&limit=12` // lorem picsum API

  // Fetching Data from API
  const getData = async () => {
    const response = await axios.get(URL)
    setuserData(response.data)
  }

  // UseEffect Function
  useEffect(function() {
    getData();
  },[index]) // runs whenever index changes

  // Maping of Data
let printUserData = <h1 className='font-bold text-4xl text-gray-600'>Loading...</h1>
if(userData.length > 0) {
  printUserData = userData.map((elem,idx) => {
    return <Image imageUrl={elem.download_url} index={idx+1} author={elem.author} link={elem.url} />
  })
}
  return (
    <div>
      <div className='bg-black min-h-screen w-full text-white text overflow-auto'>


        <h1 className='font-bold m-2 text-3xl text-center md:mb-2'>Welcome to Gallery Page</h1>

        {/* button to get data
        <button
        onClick={getData}
        className='bg-green-600 px-3 py-2 ml-5 rounded active:scale-95'
        >Get data
        </button> */}

        <div className='p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {printUserData}
        </div>

        <div className='flex justify-between p-4'>

          {/* prevv button */}
          <button
          style={{opacity : index == 1 ?0.5 : 1}}
          disabled={index == 1}
          className='bg-red-700 m-3 font-bold p-3 rounded-xl text-sm'
          onClick={() => {
            if(index > 1)
              setindex(prev => prev - 1)
              setuserData([])
          }}
          >...Prev</button>
          <h1 className='text-3xl font-bold'>Page.{index}</h1>

          {/* next button */}
          <button
          className='bg-green-700 m-3 font-bold p-3 rounded-xl text-sm'
          onClick={() => {
            setuserData([])
            setindex(prev => prev + 1)
          }}
          >Next...</button>
        </div>

      </div>
    </div>
  )
}

export default App