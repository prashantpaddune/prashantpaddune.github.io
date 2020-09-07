import React from 'react';
import "../App.css";

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
                <h1>hi</h1>
            );
        }
        return (
            <div>Welcome to Prashant World</div>
        );
    }
}

function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

export default HomeComponent;
