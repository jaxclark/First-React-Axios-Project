import React, {Component} from 'react'
import Axios from 'axios'
const {Provider, Consumer} = React.createContext()

export default class MyProvider extends Component {
    constructor(){
        super()
        this.state = {
            characters: [],
            char: {name: '', alias: '', house: ''},
            spells: [],
            spell: {spell: '', type: '', effect: ''},
            house: '',
            key: '',
            allInfo: [],
        }
    }

    getAllCharacters = () => {
        Axios.get('https://www.potterapi.com/v1/characters?key=$2a$10$c2vTQHg6Tk4fJU1DC95pkOsu2ilb4Vh9bunviNOxiFLEAp1zI/35K').then(res => {
            this.setState({characters: res.data})
        })
    }

    getSingleCharacter = (id) => {
        Axios.get(`https://www.potterapi.com/v1/characters/${id}?key=$2a$10$c2vTQHg6Tk4fJU1DC95pkOsu2ilb4Vh9bunviNOxiFLEAp1zI/35K`).then(res => {
            this.setState({char: res.data})
        })
    }

    getAllSpells = () => {
        Axios.get('https://www.potterapi.com/v1/spells?key=$2a$10$c2vTQHg6Tk4fJU1DC95pkOsu2ilb4Vh9bunviNOxiFLEAp1zI/35K').then(res => {
            this.setState({spells: res.data})
        })
    }

    getSingleSpell = (id) => {
        Axios.get(`https://www.potterapi.com/v1/spells/${id}?key=$2a$10$c2vTQHg6Tk4fJU1DC95pkOsu2ilb4Vh9bunviNOxiFLEAp1zI/35K`).then(res => {
            this.setState({spell: res.data[0]})
        })
    }

    getSortingHat = () => {
        Axios.get('https://www.potterapi.com/v1/sortingHat?key=$2a$10$c2vTQHg6Tk4fJU1DC95pkOsu2ilb4Vh9bunviNOxiFLEAp1zI/35K').then(res => {
            this.setState({house: res.data})
        })
    }

    getAllInfo = () => {
        Axios.get('https://www.potterapi.com/v1/spells?key=$2a$10$c2vTQHg6Tk4fJU1DC95pkOsu2ilb4Vh9bunviNOxiFLEAp1zI/35K').then(res => {
            this.setState(prev => {
                return {allInfo: [...prev.allInfo, ...res.data]}
            })
        })
        Axios.get('https://www.potterapi.com/v1/characters?key=$2a$10$c2vTQHg6Tk4fJU1DC95pkOsu2ilb4Vh9bunviNOxiFLEAp1zI/35K').then(res => {
            this.setState(prev => {
                return {allInfo: [...prev.allInfo, ...res.data]}
            })
        })
        Axios.get('https://www.potterapi.com/v1/houses?key=$2a$10$c2vTQHg6Tk4fJU1DC95pkOsu2ilb4Vh9bunviNOxiFLEAp1zI/35K').then(res => {
            this.setState(prev => {
                return {allInfo: [...prev.allInfo, ...res.data]}
            })
        })
    }

    filterSearch = () => {
        
    }


    render(){
        return(
            <Provider value={{...this.state, getAllCharacters: this.getAllCharacters, getSingleCharacter: this.getSingleCharacter, getAllSpells: this.getAllSpells, getSingleSpell: this.getSingleSpell, getSortingHat: this.getSortingHat, testing: this.testing, getAllInfo: this.getAllInfo}}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withProvider = (Comp) => props => <Consumer>{value => <Comp {...value}{...props} />}</Consumer>
