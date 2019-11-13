import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import { withProvider } from './MyProvider'

class AllInfoContainer extends Component {
    componentDidMount(){
        this.props.getAllInfo()
    }
    
    render(){
        const mappedInfo = this.props.allInfo.map(info => <Link to={info.spell ? '/spells/' + info._id : '/character/' + info._id} >{info.spell ? info.spell : info.name}</Link>)
    return(
            <div>
                {mappedInfo}
            </div>
        )
    }
}

export default withProvider(AllInfoContainer)