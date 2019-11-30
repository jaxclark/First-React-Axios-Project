import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withProvider} from './MyProvider'
import song from './Harry_Potter_Theme_Song_Hedwigs_Theme.mp3'


class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            toggle: true
        }
    }

    componentDidMount(){
        const hpTheme = new Audio(song)
        hpTheme.play()
    }

    handleToggle = () => {
        this.setState(prev => {
            return {toggle: !prev.toggle}
        })
    }

    render(){
        return(
            <div className='nav'>
                { this.state.toggle ?
                    <div className='menuOn'>
                        <img onClick={this.handleToggle} src="http://cdn.onlinewebfonts.com/svg/img_146644.png" alt='menu button' />
                        <Link to='/'>Home</Link>
                        <Link to='/sorted'>House</Link>
                        <Link to='/characters'>Characters</Link>
                        <Link to='/spells'>Spells</Link>
                        <Link to='/search'>Search</Link>
                        <Link to='/practice'>Practice</Link>
                        <br/>
                    </div>
                    :
                    <div className='menuOff'>
                        <img onClick={this.handleToggle} src="http://cdn.onlinewebfonts.com/svg/img_146644.png" alt='menu button' />
                    </div>
                }
            </div>
        )
    }
}

export default withProvider(Navbar)