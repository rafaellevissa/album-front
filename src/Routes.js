import react from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";

import register from './pages/register';
import login from './pages/login'

function Routes(){
    return(
        <BrowserRouter>
        <Switch>
        <Route path='/' exact component={login} />    
        <Route path='/cadastro' component={register} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;