import React from 'react';
import PropTypes from 'prop-types';

function FilteredContactsProps(props) {
    return (
        <div className="showing-contacts">
            <span>Now showing: {props.showingContactsLength} of {props.contactsLength}. </span>
            <button onClick={props.clearQuery}>Show All</button>
        </div>
    )
}

FilteredContactsProps.propTypes = {
    showingContactsLength: PropTypes.number.isRequired,
    contactsLength: PropTypes.number.isRequired,
    clearQuery: PropTypes.func.isRequired
}

export default FilteredContactsProps;