import React, {Component} from 'react'
import Spells from './Spells'
import {withProvider} from './MyProvider'

class SpellsList extends Component {
    componentDidMount(){
        this.props.getAllSpells()
    }

    render(){
        const mappedSpells = this.props.spells.map((data) => <Spells spell={data.spell} type={data.type} effect={data.effect} id={data._id} key={data._id} />)
        return(
            <div className='spellsList'>
                {mappedSpells}
            </div>
        )
    }
}

export default withProvider(SpellsList)