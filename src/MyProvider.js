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
            houseName: '',
            house: [],
            houses: [],
            key: '',
            results: [],
            name: '',
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
            this.setState({houseName: res.data})
        })
    }

    getHouses = () => {
        Axios.get('https://www.potterapi.com/v1/houses?key=$2a$10$c2vTQHg6Tk4fJU1DC95pkOsu2ilb4Vh9bunviNOxiFLEAp1zI/35K').then(res => {
            this.setState({houses: res.data})
        })
    }

    setHouse = () => {
        const newArr = this.state.houses.filter(array => array.name === this.state.houseName)
        this.setState({house: newArr})
    }

    filterSearch = (searchVal, searchType) => {
        const pattern = new RegExp(searchVal, "i")
        if(searchType === 'character'){
            const newArr = this.state.characters.filter(array => array.name.match(pattern))
            this.setState(() => {
                return {results: newArr}
            })
        } else if (searchType === 'spells') {
            const newArr = this.state.spells.filter(array => array.spell.match(pattern))
            this.setState(() => {
                return {results: newArr}
            })
        }     
    }

    handleName = (name) => {
        this.setState({name})
    }

    render(){
        return(
            <Provider value={{...this.state, 
                            getAllCharacters: this.getAllCharacters, 
                            getSingleCharacter: this.getSingleCharacter, 
                            getAllSpells: this.getAllSpells, 
                            getSingleSpell: this.getSingleSpell, 
                            getSortingHat: this.getSortingHat, 
                            testing: this.testing, 
                            getAllInfo: this.getAllInfo, 
                            filterSearch: this.filterSearch, 
                            handleName: this.handleName, 
                            getHouses: this.getHouses, 
                            setHouse: this.setHouse}}>
                {this.props.children}
            </Provider>
        )
    }
}

export const withProvider = (Comp) => props => <Consumer>{value => <Comp {...value}{...props} />}</Consumer>
