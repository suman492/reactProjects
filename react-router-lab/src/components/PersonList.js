import React from 'react';
import axios from 'axios';

const PersonList = () => {
    const output = axios.get("https://5000-suman492-reactprojects-aml9r2kzmrb.ws-us116.gitpod.io/persons")

    console.log(output);

    const API_URL= process.env.REACT_APP_API_URL
    console.log(API_URL)
    return (
        <div>
            <h2>personlist</h2>
        </div>
    )
}

export default PersonList