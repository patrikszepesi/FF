import React from 'react';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from '../../../components/organisms';
import { Contact, Form, Hero } from './components';


const ContactPage = ({item}) => (
  <div>
    <Contact item={item} />
    <SectionAlternate>
      <Form item={item} />
    </SectionAlternate>
    <Divider />
  </div>
);

export default ContactPage;
