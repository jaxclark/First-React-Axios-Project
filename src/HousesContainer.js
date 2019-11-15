import React, {Component} from 'react'
import Sorted from './Sorted'
import {withProvider} from './MyProvider'

class HousesContainer extends Component {
    componentDidMount(){
        this.props.getHouses()
        !this.props.houseName ? this.props.getSortingHat() : console.log('already sorted')
    }

    render(){
        const mappedHouses = this.props.house.map(data => <Sorted 
            name={data.name} 
            mascot={data.mascot} 
            head={data.headOfHouse} 
            ghost={data.houseGhost} 
            founder={data.founder} 
            members={data.members} 
            values={data.values} 
            colors={data.colors} 
            id={data._id} 
            key={data._id}            
            />)
        return(
            <div className='houseContainer'>
                {mappedHouses}
            </div>
        )
    }
}

export default withProvider(HousesContainer)