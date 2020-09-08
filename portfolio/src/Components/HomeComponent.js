import React from 'react';
import "../App.css";
import Navbar from "./Navbar";

class HomeComponent extends React.Component {

    state = {
        loading: true
    };

    componentDidMount() {
        // this simulates an async action, after which the component will render the content
        demoAsyncCall().then(() => this.setState({ loading: false }));
    }

    render() {
        const { loading } = this.state;

        if (loading) { // if your component doesn't have to wait for an async action, remove this block
            return (
                <div className="animate__animated animate__fadeIn animate__bounce">
                    <img src="https://prashantworld.me/images/logo_new.png"
                         className="img-responsive img-fluid loaderLogo animate__animated animate__fadeOut animate__delay-2s"
                         height="150" width="150" alt="loader"
                    />
                </div>

            );
        }
        return (
            <header>
                <Navbar/>
            </header>
        );
    }
}

function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

export default HomeComponent;
