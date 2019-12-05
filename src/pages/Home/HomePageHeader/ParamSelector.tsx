import React from 'react';
import PropTypes from 'prop-types';
import { Button, DatePicker } from 'antd';

import './ParamSelector.scss';
import { DATE_TIME_FORMAT, TIME_FORMAT_SHORT } from '../../../other/constants';
import { isoDateToMoment, momentToIso } from '../../../other/utils';
import { withCatch } from '../../../components/common/withCatch';

import { TMarketsListRequestParams } from '../../../types/store/marketsList';


const RangePicker = DatePicker.RangePicker as any;
const pickerProps = {
  allowClear: false,
  format: DATE_TIME_FORMAT,
  placeholder: ['Start Time', 'End Time'],
  showTime: { format: TIME_FORMAT_SHORT },
};

type Props = {
  isPending: boolean;
  onParamsChange: Function;
  onRefresh: Function;
  requestParams: TMarketsListRequestParams;
};


const ParamSelector: React.FC<Props> = ({ isPending, onParamsChange, onRefresh, requestParams }) => {
  const { fromDateTime, toDateTime } = requestParams;
  const pickerValue = [isoDateToMoment(fromDateTime), isoDateToMoment(toDateTime)];

  const handleChange = ([from, to]) => onParamsChange({
    ...requestParams,
    fromDateTime: momentToIso(from),
    toDateTime: momentToIso(to)
  });

  const handleRefresh = () => onRefresh(true);

  return (
    <form className="ParamSelector" noValidate>
      <RangePicker {...pickerProps} disabled={isPending} onChange={handleChange} value={pickerValue} />

      <Button
        className="ParamSelector__button"
        disabled={isPending}
        onClick={handleRefresh}
        type="primary"
      >Refresh</Button>
    </form>
  );
};


ParamSelector.propTypes = {
  isPending: PropTypes.bool,
  onParamsChange: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
  // @ts-ignore
  requestParams: PropTypes.shape({
    fromDateTime: PropTypes.string.isRequired,
    toDateTime: PropTypes.string.isRequired,
  }).isRequired,
};

export default withCatch(React.memo(ParamSelector));
