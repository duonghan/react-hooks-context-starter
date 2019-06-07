import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import ContactForm from '../components/ContactForm';
import ContactTable from '../components/ContactTable';
import { useContactsContext } from '../context/ContactContext';

export default function Contacts() {
  return (
    // Wrap the components that you want to share your custom hook state
    <useContactsContext.Provider>
      <Segment basic>
        <Header as="h3">Contacts</Header>
        <ContactForm />
        <ContactTable />
      </Segment>
    </useContactsContext.Provider>
  );
}