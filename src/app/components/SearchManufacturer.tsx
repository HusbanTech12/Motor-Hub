'use client'

import { useState, Fragment } from 'react'
import Image from 'next/image'
import { SearchManufacturerProps } from '../types'
import { Combobox , ComboboxButton, ComboboxInput, ComboboxOptions, Transition} from '@headlessui/react'
import { manufacturers } from '../constants'

const SearchManufacturer = ({manufacturer, setManufacturer} : SearchManufacturerProps   ) => {

  const [query, setQuery] = useState('')

  const filteredManuFacturers = 
      query === ''
      ? manufacturers
      : manufacturers.filter((item) =>(
        item.toLowerCase()
        .replace(/\s+/g, '')
        .includes(query.toLowerCase().replace(/\s+/g,'')))


      )
  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className='relative w-full'>
             <ComboboxButton className='absolute top-[14px]'>
                <Image 
                src='/car-logo.svg'
                width={20}
                height={20}
                className='ml-4'
                alt='car logo'

                />
               </ComboboxButton>

               <ComboboxInput
                className='search-manufacturer__imput'
                placeholder='Search Cars'
                displayValue={(manufacturer : string) => manufacturer} 
                onChange={(e) => setQuery(e.target.value)}     
               />
             

               {/* <Transition
               as={Fragment}
               leave='transition ease-in duration-100'
               leaveFrom= 'opacity-100'
               leaveTo = 'opacity-0'
               afterLeave = {() => setQuery('') }
               >

                <ComboboxOptions>
                   {filteredManuFacturers.length === 0 && query !== '' && (
                    
                    <ComboboxOptions
                     value={query}
                      className='search-manufacturer__option'
                      >
                     Create "{query}"

                    </ComboboxOptions>  

                   ):(
                    filteredManuFacturers.map((item) => (
                      <ComboboxOptions
                      key={item}
                      value={item}   
                      className={({active}) => `
                         relative search-manufacturer__option 
                         ${active ? 'bg-primary-blue text-white' :' text-gray-900'}
                      
                         `}
                         >
                      {item}
                      </ComboboxOptions>
                   )) }

                </ComboboxOptions>
                </Transition>              */}
            </div>
        </Combobox>

       
    </div>
  )
}

export default SearchManufacturer
