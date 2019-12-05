import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './HomePageHeader.scss';
import ParamSelector from './ParamSelector';
import { retrieveMarketsList, setRequestParams } from '../../../store/actions/marketsListActions';

import { TStore } from '../../../types/store/store';

type Props = {
  onRefresh: Function;
};


class HomePageHeader extends React.Component<Props> {
  static propTypes;

  componentDidMount() {
    this.props.onRefresh()
  }

  render() {
    return (
      <div className="HomePageHeader">
        <ParamSelector {...this.props} />
      </div>
    );
  }
}

HomePageHeader.propTypes = {
  onRefresh: PropTypes.func.isRequired,
};

const mapStateToProps = (state: TStore) => {
  const { marketsList: { isPending, requestParams } } = state;
  return {
    isPending,
    requestParams
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  onParamsChange: setRequestParams,
  onRefresh: retrieveMarketsList.request,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePageHeader);
