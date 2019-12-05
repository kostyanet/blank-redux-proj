import React from 'react';

import './HomePage.scss';
import HomePageFooter from './HomePageFooter/HomePageFooter';
import HomePageHeader from './HomePageHeader/HomePageHeader';
import TreeWrapper from './Tree/TreeWrapper';


class HomePage extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div className="HomePage">
        <HomePageHeader />
        <TreeWrapper />
        <HomePageFooter />
      </div>
    );
  }
}


export default HomePage;
