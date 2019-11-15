import React from 'react'
import Navbar from './Navbar'
import Name from './Name'
import Home from './Home'
import SortingHat from './SortingHat'
import HousesContainer from './HousesContainer'
import Search from './Search'
import CharacterContainer from './CharacterContainer'
import Character from './Character'
import SpellsList from './SpellsList'
import SingleSpell from './SingleSpell'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch> 
        <Route exact path='/' component={Name} />
        <Route path='/home' component={Home} />
        <Route path='/sortinghat' component={SortingHat} />
        <Route path='/search' component={Search} />
        <Route path='/characters' component={CharacterContainer} />
        <Route path='/character/:id' component={Character} />
        <Route exact path='/spells' component={SpellsList} />
        <Route path='/spells/:id' component={SingleSpell} />
        <Route path='/sorted' component={HousesContainer} />
      </Switch>
    </div>
  )
}

export default App