import classNames from 'classnames';
import Icon from '../Icon';
import React from 'react';
import styles from './_Item.css';

const Item = ({ className, icon, isNested = false, children, onClick }) => {
  const componentClasses = classNames(styles.Item, {
    [styles.IsNested]: isNested,
    [styles.IsTopLevel]: !isNested,
    [styles.IsClickable]: onClick !== undefined
  }, className);

  if (isNested) {
    return (
      <div className={ componentClasses } onClick={ onClick }>
        <div className={ styles.Content } >
          { children }
        </div>
      </div>
    );
  }

  return (
    <div className={ componentClasses }>
      <div className={ styles.Icon } onClick={ onClick }>
        <Icon name={ icon } size='l' color='white' />
      </div>
      <div className={ styles.Items }>
        {
          React.Children.map(children, child => {
            if (child.type === Item) {
              return React.cloneElement(child, {
                isNested: true
              });
            }

            return child;
          })
        }
      </div>
    </div>
  );
};

export default Item;
