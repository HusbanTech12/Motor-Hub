'use client'
import React from 'react'
import {Hero,SearchBar,CustomFilter,CarCard} from './components'
import { fetchCars } from './utils'


// import React from 'react'

export default async function page() {
  const allCars = await fetchCars()
  console.log(allCars);
  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars;
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

      {!isDataEmpty ? (

        <section>
         <div className='home__cars-wrapper'>
         {allCars?.map((car)=>(
          <CarCard key={car} />
         ))}

         </div>
        </section>
      ):(
      
        <div className='home__error-container'>
          <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
          <p>{allCars?.message}</p>
        </div>


      )}
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
