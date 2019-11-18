import React, {Component} from 'react'
import Particles from 'react-particles-js'
import all from './dementor-particlesjs.json'

const particleVar = all

class Practice extends Component {
    render(){
        return(
            <div className='practice'>
                <div className='practiceHeader'>
                    <h2>Repel the dementors with Expecto Patronum!</h2>
                </div>
                <div id='practiceParticles'>
                    <Particles params={particleVar} />
                </div>
            </div>
        )
    }
}

export default Practice