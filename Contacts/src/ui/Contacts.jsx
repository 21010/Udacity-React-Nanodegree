import React from 'react';
import PropTypes from 'prop-types';
import ListContactsTop from './ListContactsTop';
import FilteredContactsProps from './FilteredContactsProps';
import ListContacts from './ListContacts';

function Contacts(props) {
    const showingContacts = props.query === '' 
        ? props.contacts 
        : props.contacts.filter(contact => {
            return contact.name.toLowerCase().includes(props.query.toLowerCase())
        })
    return (
        <section className="list-contacts">
            <ListContactsTop 
                query={props.query}
                onQueryChange={props.methods.updateQuery}
            />
            
            {showingContacts.length !== props.contacts.length && (
                <FilteredContactsProps 
                    showingContactsLength={showingContacts.length}
                    contactsLength={props.contacts.length}
                    clearQuery={props.methods.clearQuery}
                />
            )}
            <ListContacts 
                contacts={props.contacts}
                showingContacts={showingContacts}
                onDeleteContact={props.methods.removeContact} 
            />
        </section>
    )
}

Contacts.propTypes = {
    query: PropTypes.string,
    contacts: PropTypes.array.isRequired,
    methods: PropTypes.object.isRequired
}

export default Contacts;