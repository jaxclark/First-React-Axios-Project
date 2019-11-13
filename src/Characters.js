import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Characters extends Component {
    render(){
        return(
            <div className='info'>
                <br/>
                <Link to={'/character/' + this.props.id}>{this.props.name}</Link>
                <br/>
            </div>
        )
    }
}

export default Characters