import React, {Component} from 'react'
import Characters from './Characters'
import Particles from 'react-particles-js'
import all from './characters-particles.json'
import {withProvider} from './MyProvider'

const particlesVar = all

class CharacterContainer extends Component {
    componentDidMount(){
        this.props.getAllCharacters()
    }

    render(){
        const mappedInfo = this.props.characters.map((data) => <Characters name={data.name} id={data._id} key={data._id} />)
        return(
            <div className='charContainer'>
                {mappedInfo}
                <div id='particles'>
                <Particles params={particlesVar} />
                </div>
            </div>
        )
    }
}

export default withProvider(CharacterContainer)