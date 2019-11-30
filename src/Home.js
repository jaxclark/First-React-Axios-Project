import React, {Component} from 'react'
import song from './Harry_Potter_Theme_Song_Hedwigs_Theme.mp3'
import {withProvider} from './MyProvider'
import {Link} from 'react-router-dom'

class Home extends Component {
    componentDidMount(){
        // const hpTheme = new Audio(song)
        // hpTheme.play()
        !this.props.houseName ? this.props.getSortingHat() : console.log('already sorted')
        this.props.getHouses()
    }

    handleClick = () => {
        this.props.setHouse()
    }
    
    render() {
        return(
            <div className='home'>
                <div className='homeImageOne'></div>
                <div className='welcome'>
                    <h1>Welcome to Hogwarts, First Year! Proceed to the Great Hall.</h1>
                    <img src="https://www.systemes-attum.com/wp-content/uploads/2017/06/flechebas.gif" alt="https://www.systemes-attum.com/wp-content/uploads/2017/06/flechebas.gif"/>
                </div>
                <div className='homeImageTwo'></div>
                <div className='approachHat'>
                    <h1>Approach the sorting hat to discover which house you'll be in.</h1>
                    <img src="https://www.systemes-attum.com/wp-content/uploads/2017/06/flechebas.gif" alt="https://www.systemes-attum.com/wp-content/uploads/2017/06/flechebas.gif"/>
                </div>
                <div className='homeImageThree'></div>
                <div className='sortMe'>
                    <Link onClick={this.handleClick} to='/sorted'>Get sorted!</Link>
                </div>
                {/* <div className='audio'>
                    <audio ref='audio_tag' src={song} controls autoPlay/>
                </div> */}
            </div>
        )
    }
}

export default withProvider(Home)