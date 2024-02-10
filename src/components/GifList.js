import React from 'react'

function GifList({data}) {
    const gifs = data
    console.log(gifs)

    const listStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    }

    const imgStyles ={
        width: '350px',
        height: '350px',
        marginRight: '20px',
    }

    

  return (
    <>
        <ul style={listStyles}>
            {gifs.map(gif => (
                <li key={gif.id}>
                    <img src={gif.images.original.url} alt='' style={imgStyles}/>
                </li>
            ))}
        </ul>
    </>
  )
}

export default GifList
