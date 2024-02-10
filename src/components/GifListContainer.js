import React, { useState } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

//apikey = by78nMH16sRBoHArmY5BcmIjBPR8DO0p

/*To pass the first three elements of the data received as the promise's response to the GifList component, declare a state variable firstThreeGifs using the useState hook, and set its value in the then block of the promise chain. */

function GifListContainer() {
    const [firstThreeGifs, setFirstThreeGifs] = useState([])
    const[searchQuery, setSearchQuery] = useState('')

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
        console.log(e.target.value)    
    } 
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submitted!')
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=by78nMH16sRBoHArmY5BcmIjBPR8DO0p&rating=g`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setFirstThreeGifs(data.data.slice(0, 3))
        })
    }
  return (
    <>
        <GifSearch 
            handleSubmit={handleSubmit}
            searchQuery={searchQuery}
            handleChange={handleChange}
        />
        <GifList data={firstThreeGifs}/>
    </>
  )
}

export default GifListContainer
