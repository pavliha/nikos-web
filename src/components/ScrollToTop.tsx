import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ScrollToTop: FC<RouteComponentProps> = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location?.pathname]);
  return children;
};

export default ScrollToTop;
