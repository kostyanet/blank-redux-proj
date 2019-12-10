import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Button } from 'antd';
import { connect } from 'react-redux';

import './HomePageFooter.scss';
import { TMouseHandler } from '../../../types/handlers';
import { TStore } from '../../../types/store/store';

type Props = {
  isDisabled: boolean;
  onCleanUp: TMouseHandler;
};


const HomePageFooter: React.FC<Props> = ({ isDisabled, onCleanUp }): ReactElement => (
  <footer className="HomePageFooter">
    <div className="HomePageFooter__content">
      <Button disabled={isDisabled} onClick={onCleanUp} type="primary">Run Clean-Up</Button>
    </div>
  </footer>
);


HomePageFooter.propTypes = {
  isDisabled: PropTypes.bool,
  onCleanUp: PropTypes.func.isRequired,
};

const mapStateToProps = (state: TStore) => {
  const { marketsList: { isPending } } = state;
  return { isDisabled: isPending };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  // onCleanUp: retrieveMarketsList.request,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePageFooter);
