import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../Pages/Home/index";
import CreateUser from "../Pages/CreateUser/index";

function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
            <Switch>
                <Route exact path="/CriarUsuario">
                    <CreateUser/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;