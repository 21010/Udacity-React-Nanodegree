import React from 'react';
import { Route } from 'react-router-dom';
import Header from './ui/Header';
import Main from './ui/Main';
import Footer from './ui/Footer';
import Contacts from './ui/Contacts';
import CreateContact from './ui/CreateContact';

import contacts from './utils/ContactsAPI';

class App extends React.Component {
  
  state = {
    contacts: [],
    query: ''
  }

  methods = {
    addContact: (contact) => {
      contacts.add(contact)
        .then(data => {
          this.setState(currentState => ({
            contacts: currentState.contacts.concat([data.contact])
          }))
        })
    },
    removeContact: (id) => {
      this.setState(currentState => ({ 
          contacts: currentState.contacts.filter(contact => contact.id !== id) 
      }));
      contacts.delete(id);
    },
    updateQuery: (query) => {
      this.setState(() => ( { query } ))
    },
    clearQuery: () => {
      this.setState(() => ( { query: '' } ))
    }
  }

  componentDidMount() {
    contacts.getAll()
      .then( contacts => this.setState(() => ( { contacts } )) )
      .catch(erros => {
        console.log('cannot communicate with db API, loading demo data....');
        this.setState(() => (
          {contacts: [
            {
              id: '1',
              name: 'Alex Roff',
              handle: '@alexroff',
              avatarURL: '/demo/1.jpg'
            },
            {
              id: '2',
              name: 'Kirk Bray',
              handle: '@kirkbray',
              avatarURL: '/demo/2.jpg'
            },
            {
              id: '3',
              name: 'Allys White',
              handle: '@allyswhite',
              avatarURL: '/demo/3.jpg'
            },
            {
              id: '4',
              name: 'Yo Cupper',
              handle: '@yocupper',
              avatarURL: '/demo/4.jpg'
            }
          ]}
        ))
      })
  }

  render() {
    return (
      <div>
        <Header title="Contacts" />
        <Main>
          <Route 
            exact path='/' 
            render={() => (
              <Contacts
                contacts = {this.state.contacts}
                query = {this.state.query}
                methods = {this.methods}
              />
            )}
          />
          <Route
            path='/create'
            render={({ history }) => (
              <CreateContact 
                addContact = {(contact) => {
                  this.methods.addContact(contact);
                  history.push('/');
                }}
              />
            )}
          />
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
