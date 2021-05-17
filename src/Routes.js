import react from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";

import register from './pages/register';
import login from './pages/login'
import album from './pages/album'

function Routes(){
    return(
        <BrowserRouter>
        <Switch>
        <Route path='/' exact component={login} />    
        <Route path='/cadastro' component={register} />
        <Route path='/albuns' component={album} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;