import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import House from '../house/House';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houseList: []
        };
    }

    componentDidMount() {
        axios.get('/api/houses')
            .then((res) => {
                this.setState({houseList: res.data});
            });
    }

    deleteHouse(id) {
        axios.delete(`/api/house/${id}`)
    }

    render() {
        console.log(this.state.houseList)
        let list = this.state.houseList.map((item, i) => {
            return (
                <House key={i} 
                    id={item.id}
                    name={item.name}
                    address={item.address}
                    city={item.city}
                    state={item.state}
                    zip={item.zip}
                    deleteHouse={(id) => this.deleteHouse(id)}
                />
            )
        })
        return (
            <div>
                <Link to='/wizard/step1'><button>Add new Property</button></Link>
                { list }
            </div>
        )
    }
}

export default Dashboard;