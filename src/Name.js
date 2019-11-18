// import React, {Component} from 'react'
// import song from './Harry_Potter_Theme_Song_Hedwigs_Theme.mp3'
// import {withProvider} from './MyProvider'

// class Name extends Component {
//     constructor(){
//         super()
//         this.state = {
//             name: '',
//         }
//     }

//     componentDidMount(){
//         const hpTheme = new Audio(song)
//         hpTheme.play()
//     }

//     handleSubmit = (e) => {
//         e.preventDefault()
//         this.props.handleName(this.state.name)
//         this.props.history.push('/home')
//     }

//     handleChange = (e) => {
//         this.setState({[e.target.name]: e.target.value})
//     }

//     render() {
//         return(
//             <form onSubmit={this.handleSubmit} className='name'>
//                 <input onChange={this.handleChange} name='name' type="text" placeholder='What is your name?' />
//                 <button>Submit</button>
//             </form>
//         )
//     }
// }

// export default withProvider(Name)