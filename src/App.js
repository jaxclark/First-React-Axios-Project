import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import HousesContainer from './HousesContainer'
import Search from './Search'
import CharacterContainer from './CharacterContainer'
import Character from './Character'
import SpellsList from './SpellsList'
import SingleSpell from './SingleSpell'
import Practice from './Practice'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch> 
        <Route exact path='/' component={Home} />
        <Route path='/search' component={Search} />
        <Route path='/characters' component={CharacterContainer} />
        <Route path='/character/:id' component={Character} />
        <Route exact path='/spells' component={SpellsList} />
        <Route path='/spells/:id' component={SingleSpell} />
        <Route path='/sorted' component={HousesContainer} />
        <Route path='/practice' component={Practice} />
      </Switch>
    </div>
  )
}

export default App