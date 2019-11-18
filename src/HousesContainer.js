import React, {Component} from 'react'
import Sorted from './Sorted'
import {withProvider} from './MyProvider'

class HousesContainer extends Component {

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
            <div className={this.props.houseName === 'Ravenclaw' ? 'houseContainerR' : this.props.houseName === 'Gryffindor' ? 'houseContainerG' : this.props.houseName === 'Slytherin' ? 'houseContainerS' : 'houseContainerH'}>
                <h1 style={{display: 'flex', justifyContent: 'center', padding: '100px 0px 0px 0px'}}>{!this.props.houseName ? 'You must get sorted first! Return to the sorting hat on Home.' : null}</h1>
                {mappedHouses}
            </div>
        )
    }
}

export default withProvider(HousesContainer)