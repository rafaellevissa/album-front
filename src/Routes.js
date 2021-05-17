import {BrowserRouter,Switch,Route} from "react-router-dom";

import register from './pages/register';
import login from './pages/login'
import album from './pages/album'
import photo from './pages/photo'

function Routes(){
    return(
        <BrowserRouter>
        <Switch>
        <Route path='/' exact component={login} />    
        <Route path='/cadastro' component={register} />
        <Route path='/albuns' component={album} />
        <Route path='/album/photo' component={photo} />
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;