import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPrice } from '../../ducks/reducer';

class StepThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mortgage: 0,
            rent: 0
        };
    
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addHouse() {
        axios.post('/api/house', this.state)
    }


    render() {
        return (
            <div>
                Monthly Mortgage Amount
                <input placeholder="mortgage" type="text" name="mortgage" value={this.state.mortgage} onChange={this.handleChange}/>
                Desired Monthly Rent
                <input placeholder="rent" type="text" name="rent" value={this.state.rent} onChange={this.handleChange}/>
                <Link to="/wizard/step2"><button onClick={() => this.props.getPrice(this.state)}>Previous Step</button></Link>
                <button onClick={this.addHouse.bind(this)}>Complete</button>
            </div>
        )
    }
}

const mapPropsToState = (state) => {
    return {
        img: state.img,
        mortgage: state.mortgage,
        rent: state.rent
    }
}

const createActions = {
    getPrice
}

export default connect(mapPropsToState, createActions)(StepThree);