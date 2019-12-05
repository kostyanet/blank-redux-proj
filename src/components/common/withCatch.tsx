import React, { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';

type Props = {
  error: Error;
};

const FallbackComponent: React.FC<Props> = ({ error }): ReactElement => (
  <div>
    <strong>Error:</strong> {error.toString()}
  </div>
);
FallbackComponent.propTypes = {
  error: PropTypes.instanceOf(Error)
};

export function withCatch(Component) {
  return withErrorBoundary(Component, FallbackComponent);
}
