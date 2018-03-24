import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPrice, getCancel } from '../../ducks/reducer';

class StepThree extends Component {
    constructor() {
        super();
        this.state = {
            mortgage: 0,
            rent: 0
        };
    
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            mortgage: this.props.mortgage,
            rent: this.props.rent
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // Original .post()
    // addHouse() {
    //     axios.post('/api/house', this.state)
    // }

    addHouse() {
        let house = {
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zipcode: this.props.zipcode,
            img: this.props.img,
            mortgage: this.state.mortgage,
            rent: this.state.rent
        }
        axios.post('/api/house', this.props);
        this.props.getCancel();
    }

    render() {        
        return (
            <div>
                Monthly Mortgage Amount
                <input placeholder="mortgage" type="text" name="mortgage" value={this.state.mortgage} onChange={this.handleChange}/>
                Desired Monthly Rent
                <input placeholder="rent" type="text" name="rent" value={this.state.rent} onChange={this.handleChange}/>
                <Link to="/wizard/step2"><button onClick={() => this.props.getPrice(this.state)}>Previous Step</button></Link>
                <Link to='/'><button onClick={this.addHouse.bind(this)}>Complete</button></Link>
            </div>
        )
    }
}

const mapPropsToState = (state) => {
    return {
        name: state.info.name,
        address: state.info.address,
        city: state.info.city,
        state: state.info.state,
        zipcode: state.info.zipcode,
        img: state.img,
        mortgage: state.price.mortgage,
        rent: state.price.rent
    }
}

// const createActions = {
//     getPrice
// }

export default connect(mapPropsToState, {getPrice, getCancel})(StepThree);