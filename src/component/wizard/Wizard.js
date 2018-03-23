import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import StepOne from './StepOne';
import StepThwo from './StepTwo';
import StepThree from './StepThree';

class Wizard extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <Route path='/wizard/step1' component={StepOne} />
                <Route path='/wizard/step2' component={StepThwo} />
                <Route path='/wizard/step3' component={StepThree} />

                <button>Cancel</button>
            </div>
        )
    }
}

export default Wizard;