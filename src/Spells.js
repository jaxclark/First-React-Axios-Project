import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withProvider} from './MyProvider'

class Spells extends Component {
    render(){
        return(
            <div className='spells'>
                <br/>
                <Link to={'/spells/' + this.props.id}>{this.props.spell}</Link>
                <br/>
            </div>
        )
    }
}

export default withProvider(Spells)

// onClick={() => this.clickSpell(this.props.id)}