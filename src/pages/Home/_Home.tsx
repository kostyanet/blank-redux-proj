import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  data: any[];
  retrieveData: Function;
}

class Home extends React.Component<Props> {
  static propTypes: Record<string, {}>;

  componentDidMount() {
    this.props.retrieveData();
  }

  render() {
    const { data } = this.props;

    return (
      <div className="Home">
        The Home Component:
        {JSON.stringify(data, null, 2)}
      </div>
    );
  }

}

Home.propTypes = {
  data: PropTypes.array,
  retrieveData: PropTypes.func.isRequired,
};


export default Home;
