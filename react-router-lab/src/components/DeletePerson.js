import React from 'react';

const DeletePerson = ({ id, onDelete }) => {
    const handleDlete = () => {
        if(window.confirm('Are you sure you want delete this person?')){
            onDelete(id);
        }
    };


    return (
        <button className='btn btn-delete' onClick={handleDlete}>
            Delete
        </button>
    );
};

export default DeletePerson