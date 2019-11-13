import React, {Component} from 'react'
import song from './Harry_Potter_Theme_Song_Hedwigs_Theme.mp3'
import { withProvider } from './MyProvider'

class Home extends Component {
    // componentDidMount(){
    //     const hpTheme = new Audio(song)
    //     hpTheme.play()
    // }
    render() {
        return(
            <div className='home'>Home
                <audio ref='audio_tag' src={song} controls autoPlay/>
            </div>
        )
    }
}

export default withProvider(Home)