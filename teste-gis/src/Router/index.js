import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../Pages/Home/index";
import CreateUser from "../Pages/CreateUser/index";
import Header from "../Components/Header/index";
import Footer from "../Components/Footer/index";
import {MainContainer} from "./styles";

function Router(){
    return(
        <MainContainer>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Header/>
                        <Home/>
                        <Footer/>
                    </Route>
                </Switch>
                <Switch>
                    <Route exact path="/CriarUsuario">
                        <Header/>
                        <CreateUser/>
                        <Footer/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </MainContainer>
    )
}
export default Router;