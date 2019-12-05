import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from './_Home';
import { retrieveTestDataAsync } from '../../store/actions/testActions';

import { TStore } from '../../types/store/store';


const mapStateToProps = (state: TStore) => {
  const { testModel } = state;

  return {
    data: testModel.data
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  retrieveData: retrieveTestDataAsync.request,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
