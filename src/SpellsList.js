import React, {Component} from 'react'
import Spells from './Spells'
import Particles from 'react-particles-js'
import all from './spells-particles.json'
import {withProvider} from './MyProvider'

const particlesVar = all

class SpellsList extends Component {
    componentDidMount(){
        this.props.getAllSpells()
    }

    render(){
        const mappedSpells = this.props.spells.map((data) => <Spells spell={data.spell} type={data.type} effect={data.effect} id={data._id} key={data._id} />)
        return(
            <div className='spellsList'>
                {mappedSpells}
                <div id='particles'>
                    <Particles params={particlesVar} />
                </div>
            </div>
        )
    }
}

export default withProvider(SpellsList)