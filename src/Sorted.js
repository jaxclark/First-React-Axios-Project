import React, {Component} from 'react'
import {withProvider} from './MyProvider'

class Sorted extends Component {
    componentDidMount(){
        !this.props.house ? this.props.getSortingHat() : console.log('already sorted')
    }
    render(){
        return(
            <div className={this.props.house}>
                {this.props.house}!
            </div>
        )
    }
}

export default withProvider(Sorted)