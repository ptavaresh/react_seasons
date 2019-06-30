import './css/ErrorPage.css';
import React from 'react';


const ErrorPage = (props) => {
    return (
        <div className="error-page">
            <i className="red massive x icon" />
            <h1>{props.errorMessage}</h1> 
        </div>
    );
};

export default ErrorPage;