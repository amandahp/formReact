import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Cadastro from '../pages/Cadastro'


const Routes = () => (
    <BrowserRouter>       
        <Route exact path="/cadastro" component={Cadastro} />
    </BrowserRouter>
);

export default Routes