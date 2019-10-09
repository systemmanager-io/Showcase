import * as React from 'react';
import {Route, Switch} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Demo from "./pages/Demo";
import Layout from "./layouts/Layout";
// import "./sass/app.scss"
import "./sass/showcase.scss"
import "./sass/tailwind.scss"
import NotFound from "./pages/NotFound";
import Documentation from "./pages/Documentation";
import Plugins from "./pages/Plugins";

class App extends React.Component {


    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/demo" component={Demo}/>
                    <Route path="/documentation" component={Documentation}/>
                    <Route exact path="/plugins" component={Plugins}/>
                    <Route component={NotFound}/>
                </Switch>
            </Layout>
        );
    }
}

export default App;
