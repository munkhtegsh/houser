import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getImage } from '../../ducks/reducer';

class StepTwo extends Component {
    constructor() {
        super();
        this.state = {
            img: '',
        };
    
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate(prevProps) {
      
            this.setState = {
                img: this.props.img
            }
        
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }



    render() {
        console.log(this.props.price)

        console.log(this.props.img)
        return (
            <div>
                Image URL
                <input placeholder="img" type="text" name="img" value={this.state.img} onChange={this.handleChange}/>
                <Link to="/wizard/step1"><button>Previous Step</button></Link>
                <Link to="/wizard/step3"><button onClick={() => this.props.getImage(this.state.img)}>Next Step</button></Link>
            </div>
        )
    }
}

const mapPropsToState = (state) => {
    return {
        img: state.img
    }
}

export default connect(mapPropsToState, { getImage })(StepTwo);