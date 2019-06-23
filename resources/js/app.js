import * as React from 'react';
import {Route, Switch} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Demo from "./pages/Demo";
import Pricing from "./pages/Pricing";
import Layout from "./layouts/Layout";
import "."
import NotFound from "./pages/NotFound";
import Documentation from "./pages/Documentation";

class App extends React.Component {


    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/demo" component={Demo}/>
                    <Route path="/pricing" component={Pricing}/>
                    <Route path="/documentation" component={Documentation}/>
                    {/*<Route exact path="/register" component={Homepage}/>*/}
                    {/*<Route exact path="/cart" component={Homepage}/>*/}
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        );
    }
}

export default App;
