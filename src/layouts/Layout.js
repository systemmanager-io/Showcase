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
        return (
            <div>

                <div className="z-20 text-white">
                    <SystemManagerShowcaseNavbar/>
                    <div className="z-0">
                    {this.state.path === "/" ? <SystemManagerShowcaseTopBar/> : null}
                </div>
                    {this.props.children}
                </div>
                <Footer/>

            </div>
        )
    }
}

export default withRouter(props => <Layout {...props} />);
