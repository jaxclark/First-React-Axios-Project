import React, {Component} from 'react'
import {withProvider} from './MyProvider'
import {Link} from 'react-router-dom'
// import AllInfoContainer from './AllInfoContainer'

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
    }

    handleSubmit = (e, thing) => {
        e.preventDefault()
        this.props.filterSearch(thing, this.state.searchType)
    }

    render() {
        console.log(this.props.results)
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
                <div>results go here: 
                    {this.state.searchType === 'character' ?
                        this.props.results.map(result => <Link to={'/character/' + result._id}>{result.name}</Link>)
                    :
                        this.props.results.map(result => <Link to={'/spells/' + result._id}>{result.spell}</Link>)
                    }
                </div>
                {/* <div>
                    <AllInfoContainer />
                </div> */}
            </div>
        )
    }
}

export default withProvider(Search)