import * as React from 'react'
import SystemManagerShowcaseNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import SystemManagerShowcaseTopBar from "../components/TopBar";
import {withRouter} from "react-router-dom";

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {path: window.location.pathname};
    }
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged();
        }
    }

    onRouteChanged() {
        this.setState({path: window.location.pathname});
    }

    render() {
        console.log(this.state);
        return (
            <div>
                {this.state.path === "/" ? <SystemManagerShowcaseTopBar/> : null}
                <SystemManagerShowcaseNavbar/>
                {this.props.children}
                <Footer/>

            </div>
        )
    }
}

export default withRouter(props => <Layout {...props} />);
