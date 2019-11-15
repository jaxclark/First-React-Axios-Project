import React from 'react'

function Sorted(props) {
    const {name, mascot, head, ghost, founder, values} = props
    return(
        <div className={name}>
            <h1>{name}!</h1>
            <img src={name === 'Ravenclaw' ? 'https://vignette.wikia.nocookie.net/harrypotter/images/4/4e/RavenclawCrest.png'
                        : name === 'Gryffindor' ? 'https://vignette.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png'
                        : name === 'Slytherin' ? 'https://vignette.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png' 
                        : name === 'Hufflepuff' ? 'https://vignette.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png' 
                        : 'no image' 
            } alt=""/>
            <p>Mascot: {mascot}</p>
            <p>Head of House: {head}</p>
            <p>House Ghost: {ghost}</p>
            <p>Founder: {founder}</p>
            <p>Qualities: {values} </p>
        </div>
    )
}

export default Sorted