import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import StepOne from './StepOne';
import StepThwo from './StepTwo';
import StepThree from './StepThree';
import { connect } from 'react-redux';
import { getCancel } from '../../ducks/reducer';

class Wizard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wizard">
                <div className='wizar__sub-nav'>
                    <h3 className='wizard__p'>Add New Listing</h3>
                    <Link to='/'><button onClick={() => this.props.getCancel()}>Cancel</button></Link>
                </div>
                <div className='wizard__input_container'>
                    <Route path='/wizard/step1' component={StepOne} />
                    <Route path='/wizard/step2' component={StepThwo} />
                    <Route path='/wizard/step3' component={StepThree} />
                </div>
            </div>
        )
    }
}

export default connect(null, {getCancel})(Wizard);