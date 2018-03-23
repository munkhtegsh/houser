import React from 'react';
import DashBoard from './component/dashboard/Dashboard';
import Wizard from './component/wizard/Wizard';
import { Switch, Route } from 'react-router-dom';

export default (
    <Switch>
        <Route exact path='/' component={DashBoard} />
        <Route path='/wizard' component={Wizard} />
    </Switch>
)