import * as React from 'react';
import {Route, Switch} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Showcase from "./pages/Showcase";
import Demo from "./pages/Demo";
import Pricing from "./pages/Pricing";
import Layout from "./layouts/Layout";
import "."
// import Dashboard from "./pages/dashboard/dashboard";
//
// import AdminLayout from "./layouts/AdminLayout";
// import Login from "./pages/login/login";
// import LoginLayout from "./layouts/LoginLayout";

class App extends React.Component {

    render() {
        return (
            <Switch>
                <Layout>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/showcase" component={Showcase}/>
                    <Route exact path="/demo" component={Demo}/>
                    <Route exact path="/pricing" component={Pricing}/>
                    {/*<Route exact path="/login" component={Homepage}/>*/}
                    {/*<Route exact path="/register" component={Homepage}/>*/}
                    {/*<Route exact path="/cart" component={Homepage}/>*/}
                    {/*<Route exact path="/profile" component={Homepage}/>*/}
                </Layout>
            </Switch>
        );
    }
}

export default App;
