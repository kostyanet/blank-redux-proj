import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Spin } from 'antd';
import './Loading.scss';

type Props = {
  className?: string;
};

export const Loading: React.FC<Props> = ({ className }): ReactElement => {
	const cssClass = classnames('Loading', className);
	return (
		<div className={cssClass}>
			<Spin size="large" />
		</div>
	);
};

Loading.propTypes = {
	className: PropTypes.string
};
