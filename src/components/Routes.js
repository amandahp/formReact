import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'

import pageForm from '../pages/pageForm'


const Routes = () => (
    <BrowserRouter>
        <Route exact path="/" component={pageForm} />
    </BrowserRouter>
);

export default Routes