import React, {Component} from 'react'
import Particles from 'react-particles-js'
import all from './characters-particles.json'
import {withProvider} from './MyProvider'

const particlesVar = all

class Character extends Component {
    componentDidMount(){
        this.props.getSingleCharacter(this.props.match.params.id)
    }

    render(){
        let {name, alias, house, role, species, orderOfThePhoenix, dumbledoresArmy, deathEater, bloodStatus, ministryOfMagic} = this.props.char
        return(
            <div className='character'>
                <div className='characterDiv'>
                    <h2>{name}</h2>
                    <h4>{alias}</h4>
                    <p>{house}</p>
                    <p>{ministryOfMagic ? 'Works at the Ministry of Magic' : null}</p>
                    <p>{orderOfThePhoenix ? 'Order of the Phoenix Member' : null }</p>
                    <p>{dumbledoresArmy ? `Dumbledore's Army Member` : null}</p>
                    <p>{deathEater ? 'Death Eater' : null}</p>
                    <p>{role ? role : null}</p>
                    <p>Species: {species}</p>
                    <p>Blood status: {bloodStatus}</p>
                </div>
                <div id='particles'>
                    <Particles params={particlesVar} />
                </div>
            </div>
        )
    }
}

export default withProvider(Character)