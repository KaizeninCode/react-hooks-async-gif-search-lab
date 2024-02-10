import React from 'react'

function GifSearch({handleSubmit, searchQuery, handleChange}) {
    

    const inputStyles = {
        margin: "10px",
    }

    const formStyles = {
        margin: '0 auto',
        textAlign: 'center',
    }

       
  return (
    <form onSubmit={handleSubmit} style={formStyles}>
        <input 
            type="text" 
            name="search" 
            placeholder="Search for gifs..." 
            value={searchQuery}
            style={inputStyles} 
            onChange={handleChange}    
        />
        <button type="submit">Search</button>
    </form>
  )
}

export default GifSearch
