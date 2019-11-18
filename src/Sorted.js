import React from 'react'
import Particles from 'react-particles-js'
import ravenclaw from './ravenclaw-particles.json'
import slytherin from './slytherin-particles.json'
import gryffindor from './gryffindor-particles.json'
import hufflepuff from './hufflepuff-particles.json'

const particlesR = ravenclaw
const particlesS = slytherin
const particlesG = gryffindor
const particlesH = hufflepuff

function Sorted(props) {
    const {name, mascot, head, ghost, founder, values} = props
    return(
        <div className={name}>
            <div className='houseImage'>
                <img src={name === 'Ravenclaw' ? 'https://cdn.discordapp.com/attachments/632280517013930044/645029109013020672/ravenBanner1.png'
                            : name === 'Gryffindor' ? 'https://cdn.discordapp.com/attachments/632280517013930044/645026618586431503/gryffBanner1.png'
                            : name === 'Slytherin' ? 'https://cdn.discordapp.com/attachments/632280517013930044/645030085782536193/slythBanner1.png' 
                            : name === 'Hufflepuff' ? 'https://cdn.discordapp.com/attachments/632280517013930044/645027966585405441/huffBanner1.png' 
                            : null
                } alt="house images"/>
            </div>
            <div className='houseInfo'>
                <p>Mascot: {mascot}</p>
                <p>Head of House: {head}</p>
                <p>House Ghost: {ghost}</p>
                <p>Founder: {founder}</p>
                <p>Qualities: {`${values[0]}, ${values[1]}, ${values[2]}, ${values[3]}`} </p>
            </div>
            <div id='particles'>
                <Particles params={name === 'Ravenclaw' ? particlesR
                                                    : name === 'Gryffindor' ? particlesG
                                                    : name === 'Hufflepuff' ? particlesH
                                                    : particlesS
                                                    } />
            </div>
        </div>
    )
}

export default Sorted