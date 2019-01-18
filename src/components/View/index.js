import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles';
import { classNames, withStyles } from '../../styles';

const View = ({
  adjust,
  alignItems,
  background,
  children,
  classes,
  className,
  id,
  justifyContent,
  scrollable,
  style,
  orientation
}) => {
  const viewClassNames = classNames(classes.View, {
    [classes.OrientationCentered]: orientation === 'centered',
    [classes.OrientationHorizontal]: orientation === 'horizontal',
    [classes.OrientationVertical]: orientation === 'vertical',
    [classes.AdjustFlex]: adjust === 'flex',
    [classes.AdjustAuto]: adjust === 'auto',
    [classes.AlignItemsCenter]: alignItems === 'center',
    [classes.BackgroundDark]: background === 'dark',
    [classes.BackgroundLight]: background === 'light',
    [classes.JustifyContentCenter]: justifyContent === 'center',
    [classes.ScrollableAuto]: scrollable === 'auto'
  }, className);

  return (
    <div id={ id } className={ viewClassNames } style={ style }>
      { children }
    </div>
  );
};

View.propTypes = {
  adjust: PropTypes.oneOf([ 'auto', 'flex' ]),
  alignItems: PropTypes.oneOf([ 'center' ]),
  background: PropTypes.oneOf([ 'dark', 'light' ]),
  justifyContent: PropTypes.oneOf([ 'center' ]),
  orientation: PropTypes.oneOf([ 'horizontal', 'vertical', 'centered' ]),
  scrollable: PropTypes.oneOf([ false, 'auto' ])
};

export default withStyles(styles)(View);
