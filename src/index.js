import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import ErrorPage from './ErrorPage';
import Spinner from './Spinner';


class App extends React.Component {
    state = {
         lat: null, errorMessage: '',
    }

    componentDidMount() {
        //Good place to put loaded data after the first render
        console.log('My component was rendere4d to the screen');
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
            );
    }

    componentDidUpdate() {
        console.log('My component was just updated - it rerendered')
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <ErrorPage errorMessage={this.state.errorMessage} />
            //return <div>Error: { this.state.errorMessage }</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please accept location request" />;
        
    }
    

    //We have to define render
    render() {        
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
        }
};

ReactDOM.render(<App />, document.querySelector('#root'));