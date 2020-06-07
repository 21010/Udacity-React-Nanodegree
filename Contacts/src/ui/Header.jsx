import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
    return (
        <header className="app-header">
            <h1>{props.title}</h1>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;