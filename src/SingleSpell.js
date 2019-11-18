import React, {Component} from 'react'
import Particles from 'react-particles-js'
import all from './spells-particles.json'
import {withProvider} from './MyProvider'

const particlesVar = all
class SingleSpell extends Component {
    componentDidMount(){
        this.props.getSingleSpell(this.props.match.params.id)
    }
    
    render(){
        let {spell, type, effect} = this.props.spell
        return(
            <div className='singleSpell'>
                <div className='singleSpellDiv'>
                    <h2>{spell}</h2>
                    <h4>{type}</h4>
                    <h5>{effect}</h5>
                </div>
                <div id='particles'>
                    <Particles params={particlesVar} />
                </div>
            </div>
        )
    }
}

export default withProvider(SingleSpell)