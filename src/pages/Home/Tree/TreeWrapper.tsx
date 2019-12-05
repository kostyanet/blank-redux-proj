import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './TreeWrapper.scss';
import LoaderOverlay from '../../../components/common/LoaderOverlay/LoaderOverlay';
import MarketsTree from './MarketsTree';
import { setRequestParams } from '../../../store/actions/marketsListActions';

import { TStore } from '../../../types/store/store';
import { TTreeItem } from '../../../types/treeItem';

type Props = {
  isLoading: boolean;
  items: TTreeItem[];
  onToggle: Function;
};

const TreeWrapper: React.FC<Props> = ({ isLoading, items, onToggle }): ReactElement => (
  <div className="TreeWrapper">
    <LoaderOverlay className="TreeWrapper__content" isLoading={isLoading}>
      {items && items.length > 0 ? (
        <MarketsTree items={items} onToggle={onToggle} />
      ) : (
        <b>&nbsp;No items to display</b>
      )}
    </LoaderOverlay>
  </div>
);


TreeWrapper.propTypes = {
  items: PropTypes.array,
  isLoading: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
};

const mapStateToProps = (state: TStore) => {
  const { marketsList: { isPending, list } } = state;
  return {
    isPending,
    items: list
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  onToggle: setRequestParams,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TreeWrapper);
