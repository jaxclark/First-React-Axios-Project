import React, {Component} from 'react'
import {withProvider} from './MyProvider'

class Character extends Component {
    componentDidMount(){
        this.props.getSingleCharacter(this.props.match.params.id)
    }

    render(){
        let {name, alias, house} = this.props.char
        return(
            <div className='character'>
                <div>
                    Character
                    <h2>{name}</h2>
                    <h4>{alias}</h4>
                    <p>{house}</p>
                </div>
            </div>
        )
    }
}

export default withProvider(Character)