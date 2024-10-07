import React from 'react';
import {useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Notification from './Notification';


import '../styles/PersonDetail.css'

const API_URL= process.env.REACT_APP_API_URL

const PersonDetail = () => {

    const { id } = useParams();
    

    return (
        <div>
            <h2>not found a person</h2>
        </div>
    )
}

export default PersonDetail;