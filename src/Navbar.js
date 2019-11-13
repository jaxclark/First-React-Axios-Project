import React from 'react'
import {Link} from 'react-router-dom'
import {withProvider} from './MyProvider'


function Navbar() {
    return(
        <div className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/sortinghat'>Sorting Hat</Link>
            <Link to='/search'>Search</Link>
            <Link to='/characters'>Character List</Link>
            <Link to='/spells'>Spell List</Link>
        </div>
    )
}

export default withProvider(Navbar)