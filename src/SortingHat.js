import React, {Component} from 'react'
import {withProvider} from './MyProvider'
import {Link} from 'react-router-dom'

class SortingHat extends Component {
    render(){
        return(
            <div className='sortingHat'>
                  <Link to='/sorted'>Sort Me!</Link>
            </div>
        )
    }
}

export default withProvider(SortingHat)