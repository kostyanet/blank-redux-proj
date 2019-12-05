import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './LoaderOverlay.scss';
import { Loading } from '../Loading/Loading';

type Props = {
  className?: string;
  children: ReactElement | ReactElement[];
  isLoading?: boolean;
  isTransparent?: boolean;
  layoutProps?: {};
};

const LoaderOverlay: React.FC<Props> = ({
                                          className,
                                          children,
                                          isLoading,
                                          isTransparent,
                                          layoutProps
}): ReactElement => {

  const cls = classnames('LoaderOverlay', className);
  const isContentShown = isLoading ? isTransparent : true;

  return (
    <div className={cls} {...layoutProps}>
      {isLoading && <Loading className="LoaderOverlay__spinner" />}
      {isContentShown && children}
    </div>
  );
};


LoaderOverlay.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.element
    )
  ]).isRequired,
  isLoading: PropTypes.bool,
  isTransparent: PropTypes.bool,
  layoutProps: PropTypes.object
};

export default React.memo(LoaderOverlay);
