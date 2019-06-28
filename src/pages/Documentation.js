import * as React from "react";
import {Fragment} from "react";
import {Link, Route, Switch} from "react-router-dom";
import Daemon from "./Documentation/Daemon";
import Panel from "./Documentation/Panel";
import Project from "./Documentation/Project";
import Start from "./Documentation/panel/Start";

export default class Documentation extends React.Component {

    makeUrl(url) {
        return this.props.match.path + url;
    }

    render() {
        return (
            <Fragment>

                <p>

                    <Link title="Home" to="/documentation/">Home</Link><br />
                    <Link title="Project" to="/documentation/project">Project</Link><br />
                    <Link title="Panel" to="/documentation/panel">Panel</Link><br />
                    <Link title="Daemon" to="/documentation/daemon">Daemon</Link>

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
