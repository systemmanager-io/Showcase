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

                <p>
                    <Link to="/documentation/">welcome</Link><br />
                    <Link to="/documentation/1">1</Link><br />
                    <Link to="/documentation/2">2</Link><br />
                    <Link to="/documentation/3">3</Link>


                </p>

                <Switch>
                    <Route exact path={this.makeUrl('/')} component={welcome}/>
                    <Route path={this.makeUrl('/1')} component={page1}/>
                    <Route path={this.makeUrl('/2')} component={page2}/>
                    <Route path={this.makeUrl('/3')} component={page3}/>
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
