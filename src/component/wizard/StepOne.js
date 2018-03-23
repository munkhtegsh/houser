import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getInfo } from '../../ducks/reducer';

class StepOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        // if (prevProps.price !== this.props.price) {
            this.setState({ 
                name: this.props.name,
                address: this.props.address,
                city: this.props.city,
                state: this.props.state,
                zipcode: this.props.zipcode
            })
        // }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render() {
        console.log(this.props.info)
        return (
            <div>
                
                Name
                <input placeholder="name" type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                Address
                <input placeholder="address"  type="text" name="address" value={this.state.address} onChange={this.handleChange}/>
                City
                <input placeholder="city"  type="text" name="city" value={this.state.city} onChange={this.handleChange}/>
                State            
                <input placeholder="state"  type="text" name="state" value={this.state.state} onChange={this.handleChange}/>
                Zipcode
                <input placeholder="zipcode"  type="text" name="zipcode" value={this.state.zipcode} onChange={this.handleChange}/>
                <Link to="/wizard/step2" onClick={() => this.props.getInfo(this.state)}><button>Next Step</button></Link>
            </div>
        )
    }
}

const mapPropsToState = (state) => {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zipcode: state.zipcode
    }
}

const actionsCreator = {
    getInfo
}

export default connect(mapPropsToState, actionsCreator)(StepOne);