import * as React from "react";
import {Fragment} from "react";
import {Link, Route, Switch} from "react-router-dom";

export default class Documentation extends React.Component {

    makeUrl(url) {
        return this.props.match.path + url;
    }

    render() {
        return (
            <Fragment>

                <div className="flex flex-wrap">
                    <div className="lg:w-2/12">
                        <p>
                            <Link className="px-5 py-5" title="Home" to="/documentation/">Home</Link><br/>
                            <Link className="px-5 py-5" title="Project" to="/documentation/project">Project</Link><br/>
                            <Link className="px-5 py-5" title="Core" to="/documentation/project">Core</Link><br/>
                            <Link className="px-5 py-5" title="Panel" to="/documentation/panel">Panel</Link><br/>
                            <Link className="px-5 py-5" title="Daemon" to="/documentation/daemon">Daemon</Link>
                        </p>
                    </div>

                    <div className="lg:w-10/12">
                        <Switch>
                            <Route exact path={this.makeUrl('/')} component={Start}/>
                            <Route path={this.makeUrl('/project')} component={Project}/>
                            <Route path={this.makeUrl('/core')} component={Core}/>
                            <Route path={this.makeUrl('/panel')} component={Panel}/>
                            <Route path={this.makeUrl('/daemon')} component={Daemon}/>
                        </Switch>
                    </div>
                </div>

            </Fragment>
        )
    }
}
