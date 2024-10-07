import React, { useState } from 'react';
import {useParams, Link, useNavigate, useActionData } from 'react-router-dom';
import axios from 'axios';
import Notification from './Notification';


import '../styles/PersonDetail.css'

const API_URL= process.env.REACT_APP_API_URL

const PersonDetail = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [ person, setPerson ] = useState(null);
    const [ showNotification, setShowNotification ] = useState(null);

    return (
        <div>
            <h2>not found a person</h2>
        </div>
    )
}

export default PersonDetail;