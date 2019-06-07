import React from "react";
import { Container } from 'semantic-ui-react';

import Counter from './views/Counter';
import Contacts from './views/Contacts';

export default function App() {
  return (
    <Container>
      <h1>React Parcel Starter Kit</h1>
      {/* <Counter /> */}
      <Contacts />
    </Container>
  );
}
