import React from 'react';
import PropTypes from 'prop-types';
import AddContactButton from './AddContactButton';
import SearchContactInputField from './SearchContactInputField';

function ListContactsTop(props) {
    return (
        <div className="list-contacts-top">
            <SearchContactInputField 
                query = {props.query}
                onQueryChange = {props.onQueryChange}
            />
            <AddContactButton />
        </div>
    )
}

ListContactsTop.propTypes = {
    query: PropTypes.string.isRequired,
    onQueryChange: PropTypes.func.isRequired
}

export default ListContactsTop;