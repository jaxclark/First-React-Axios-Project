import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withProvider} from './MyProvider'


class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            toggle: false
        }
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
                        <Link to='/home'>Home</Link>
                        <Link to='/sortinghat'>Sorting Hat</Link>
                        <Link to='/search'>Search</Link>
                        <Link to='/characters'>Characters</Link>
                        <Link to='/spells'>Spells</Link>
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