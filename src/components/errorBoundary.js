import React, {Component} from 'react'

export default class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorMessage: ''
        }
    }
    static getDerivedStateFromError(error) {
        return {hasError: true, errorMessage: error.message}
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        if (this.state.hasError) {

        console.log(this.state.errorMessage);
            return <h1>An error occurred : {this.state.errorMessage} </h1>
        }
        return this.props.children;
    }
}
