import React, {Component} from 'react'
import {withProvider} from './MyProvider'

class Name extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleName(this.state.name)
        this.props.history.push('/home')
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} className='name'>
                <input onChange={this.handleChange} name='name' type="text" placeholder='What is your name?' />
                <button>Submit</button>
            </form>
        )
    }
}

export default withProvider(Name)