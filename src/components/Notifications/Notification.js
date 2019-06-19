import React from 'react';
import { classNames, withStyles } from '../../styles';

const styles = theme => ({
  Notification: {
    padding: '10px 15px',
    background: theme.color.brand.dark,
    boxShadow: theme.shadow.overlay,
    marginBottom: `${theme.space(1.5)}px`,
    fontFamily: theme.font.family.default
  },

  TypeError: {
    color: theme.color.brand.white,
    background: theme.color.state.error
  },

  TypeSuccess: {
    color: theme.color.brand.white,
    background: theme.color.state.success
  }
});

const Notification = ({ classes, type, text }) => {
  const componentClasses = classNames(classes.Notification, {
    [classes.TypeError]: type === 'error',
    [classes.TypeSuccess]: type === 'success'
  });

  return (
    <div className={ componentClasses }>
      { text }
    </div>
  );
};

export default withStyles(styles)(Notification);
