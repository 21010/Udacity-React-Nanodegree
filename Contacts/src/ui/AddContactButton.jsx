import React from 'react';
import { Link } from 'react-router-dom';

function AddContactButton(props) {
    return (
        <Link to='/create' className="add-contact">
                Add Contact
        </Link>
    )
}

export default AddContactButton;