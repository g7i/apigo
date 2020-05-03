import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar/Navbar";
import {Route, Switch, BrowserRouter, Redirect} from "react-router-dom";
import DataBases from "./components/Pages/Databases";
import Items from "./components/Pages/Items";
import Tables from "./components/Pages/Tables";
import Endpoints from "./components/Pages/Endpoints";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Route exact path="/" render={() => (<Redirect to={"/databases"}/>)} />
            <Switch>
                <Route exact path="/databases" component={DataBases}/>
                <Route exact path="/endpoints" component={Endpoints}/>
                <Route exact path="/:db/tables" component={Tables}/>
                <Route exact path="/:db/:table/items" component={Items}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
