import * as React from "react";
import {Fragment} from "react";
import {Link, Route, Switch} from "react-router-dom";
import Daemon from "./documentation/Daemon";
import Panel from "./documentation/Panel";
import Project from "./documentation/Project";
import Start from "./documentation/panel/Start";

export default class Documentation extends React.Component {

    makeUrl(url) {
        return this.props.match.path + url;
    }

    render() {
        return (
            <Fragment>

                <p>
                    <Link to="/documentation/">Home</Link><br />
                    <Link to="/documentation/project">Project</Link><br />
                    <Link to="/documentation/panel">Panel</Link><br />
                    <Link to="/documentation/daemon">Daemon</Link>


                </p>

                <Switch>
                    <Route exact path={this.makeUrl('/')} component={Start}/>
                    <Route path={this.makeUrl('/project')} component={Project}/>
                    <Route path={this.makeUrl('/panel')} component={Panel}/>
                    <Route path={this.makeUrl('/daemon')} component={Daemon}/>
                </Switch>

            </Fragment>
        )
    }

}

class welcome extends React.Component {

    render() {
        return (
            <Fragment><h1>Welcome</h1></Fragment>
        )
    }
}

class page1 extends React.Component {

    render() {
        return (
            <Fragment><h1>Page1</h1></Fragment>
        )
    }
}

class page2 extends React.Component {

    render() {
        return (
            <Fragment><h1>Page2</h1></Fragment>
        )
    }
}

class page3 extends React.Component {

    render() {
        return (
            <Fragment><h1>Page3</h1></Fragment>
        )
    }
}
