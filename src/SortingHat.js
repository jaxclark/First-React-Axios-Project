import React, {Component} from 'react'
import {withProvider} from './MyProvider'
import {Link} from 'react-router-dom'

class SortingHat extends Component {
    handleClick = () => {
        this.props.setHouse()
    }

    render(){
        return(
            <div className='sortingHat'>
                  <Link onClick={this.handleClick} to='/sorted'>Sort Me!</Link>
            </div>
        )
    }
}

export default withProvider(SortingHat)