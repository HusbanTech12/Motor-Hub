'use client'
import React from 'react'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import CustomFilter from './components/CustomFilter'


// import React from 'react'

export default function page() {
  return (
    <>
      <Hero />

    <div className='mt-12 padding-x padding-y max-width' id='discover'>
      <div className='home__text-container'>
        <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
       <p>Explore the cars you might like</p>
      </div>

      <div className='home__filters'>
         <SearchBar />
         
         <div className='home__filter-container'>
          <CustomFilter />
          {/* <CustomFilter/> */}

         </div>

      </div>  
    </div>
    </>
  )
}




// import Hero from './components/Hero'
// const page = () => {
//   return (

//          <main className='overflow-hidden'>

//            <Hero/>
//          </main>

//   )
// }

// export default page
