import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Particles from 'react-particles-js'
import all from './search-particles.json'
import {withProvider} from './MyProvider'

const particlesVar = all

class Search extends Component {
    constructor(){
        super()
        this.state = {
            search: '',
            searchType: '',
        }
    }

    componentDidMount(){
        this.props.getAllCharacters()
        this.props.getAllSpells()
        console.log(this.props.allInfo)
    }
    
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        if(e.target.name === 'searchType'){
            this.props.clearResults()
        }
    }

    handleSubmit = (e, thing) => {
        e.preventDefault()
        this.props.filterSearch(thing, this.state.searchType)
    }

    render() {
        return(
            <div className='search'>
                <form onSubmit={(e) => this.handleSubmit(e, this.state.search)}>
                    <select onChange={this.handleChange} name="searchType" >
                        <option>Select Option</option>
                        <option value='character' >Characters</option>
                        <option value="spells">Spells</option>
                        </select>
                    <input onChange={this.handleChange} name='search' type="text"/>
                    <button>Search</button>
                </form>
                <div className='results'>
                    {this.state.searchType === 'character' ?
                        this.props.results.map(result => <Link to={'/character/' + result._id}>{result.name}</Link>)
                    :
                        this.props.results.map(result => <Link to={'/spells/' + result._id}>{result.spell}</Link>)
                    }
                </div>
                <div id='particles'>
                    <Particles params={particlesVar} />
                </div>
            </div>
        )
    }
}

export default withProvider(Search)