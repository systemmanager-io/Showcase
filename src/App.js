import * as React from 'react';
import {Route, Switch} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Layout from "./layouts/Layout";
import "./sass/showcase.scss"
import "./sass/tailwind.scss"
import NotFound from "./pages/NotFound";

class App extends React.Component {


    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        );
    }
}

export default App;
// <Route path="/demo" component={Demo}/>
