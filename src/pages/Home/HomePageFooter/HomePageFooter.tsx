import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Button } from 'antd';
import { connect } from 'react-redux';

import './HomePageFooter.scss';
import { TMouseHandler } from '../../../types/handlers';

type Props = {
  onCleanUp: TMouseHandler;
};


const HomePageFooter: React.FC<Props> = ({ onCleanUp }): ReactElement => (
  <footer className="HomePageFooter">
    <div className="HomePageFooter__content">
      <Button onClick={onCleanUp} type="primary">Run Clean-Up</Button>
    </div>
  </footer>
);


HomePageFooter.propTypes = {
  onCleanUp: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  // onCleanUp: retrieveMarketsList.request,
}, dispatch);

export default connect(null, mapDispatchToProps)(HomePageFooter);
