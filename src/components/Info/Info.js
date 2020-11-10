import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
//import PropTypes from 'prop-types';
import { infoContents } from '../../data/dataStore';
import styles from './Info.scss';

const Info = () => (
  <div className={styles.component}>
    <Container>
      <Hero titleText={infoContents.title} imgSrc={infoContents.image} />
      <p>{infoContents.text}</p>
    </Container>
  </div>
);

export default Info;