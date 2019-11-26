import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from './Home';
import { retrieveTestData } from '../../store/actions/testActions';

import { TStore } from '../../types/store/store';


const mapStateToProps = (state: TStore) => {
  const { testModel } = state;
debugger
  return {
    data: testModel.data
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  retrieveData: retrieveTestData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
