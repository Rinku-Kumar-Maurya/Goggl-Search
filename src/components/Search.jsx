import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'

import { useResultContext } from '../Contexts/ResultContextProvider'

import Links from './Links'

const Search = () => {
    const [text, setText] = useState('');
    const { setSearchTerm } = useResultContext();
    const [debouncedValue] = useDebounce(text, 500);

    useEffect(() => {
        if (debouncedValue) setSearchTerm(debouncedValue);
    }, [debouncedValue])

    return (
        <div className='relative sm:ml-48 md:ml-72 sm:-mt-10 mt-2'>
            <input
                className='sm:w-96 w-80 h-10 p-5 bg-white border rounded-full shadow-sm  text-black hover:shadow-lg outline-none'
                value={text}
                type='text'
                placeholder='Search Goggle or type URL'
                onChange={(e) => setText(e.target.value)}
            />
            {text && (
                <button type='button' className='absoute top-1.5 right-4 text-sm text-gray-100 rounded-full' onClick={() => setText('')} >
                    ✖️
                </button>
            )}
            <Links />
        </div>
    )
}

export default Search
