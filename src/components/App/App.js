import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/InfoContainer';
import Faq from '../Faq/FaqContainer';
import {BrowserRouter, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import {AnimatedSwitch} from 'react-router-transition';
import styles from './App';
import List from '../List/ListContainer';
import SearchResult from '../SearchResult/SearchResultContainer';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path='/faq' component={Faq} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;