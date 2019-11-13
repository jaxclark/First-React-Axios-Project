import React, {Component} from 'react'
import {withProvider} from './MyProvider'
// import AllInfoContainer from './AllInfoContainer'

class Search extends Component {
    constructor(){
        super()
        this.state = {
            search: ''
        }
    }

    // componentDidMount(){
    //     this.props.getAllInfo()
    //     console.log(this.props.allInfo)
    // }
    
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e, value) => {
        e.preventDefault()
        this.props.filterSearch(value)
    }

    render() {
        return(
            <div className='search'>
                <form onSubmit={(e) => this.handleSubmit(e, this.state.search)}>
                    <input onChange={this.handleChange} name='search' type="text"/>
                    <button>Search</button>
                </form>
                <div>results go here: {this.props.results}</div>
                {/* <div>
                    <AllInfoContainer />
                </div> */}
            </div>
        )
    }
}

export default withProvider(Search)