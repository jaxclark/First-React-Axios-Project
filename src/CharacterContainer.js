import React, {Component} from 'react'
import Characters from './Characters'
import {withProvider} from './MyProvider'

class CharacterContainer extends Component {
    componentDidMount(){
        this.props.getAllCharacters()
    }

    render(){
        const mappedInfo = this.props.characters.map((data) => <Characters name={data.name} id={data._id} key={data._id} />)
        return(
            <div className='infoContainer'>
                {mappedInfo}
            </div>
        )
    }
}

export default withProvider(CharacterContainer)