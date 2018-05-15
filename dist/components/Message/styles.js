'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var styles = function styles(theme) {
  return {
    Message: {
      'flex-grow': 1,
      'flex-shrink': 1,
      padding: '10px 15px',
      'margin-bottom': theme.grid.stepSize,
      'font-family': theme.font.family.default
    },

    TypeError: {
      background: theme.color.state.error,
      color: theme.color.brand.white
    },

    TypeInfo: {
      background: theme.color.brand.lightGrey
    },

    WithIcon: {
      display: 'flex',

      '& $Icon': {
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'flex-grow': 0,
        'flex-basis': 'auto',
        'margin-right': theme.grid.stepSize
      },

      '&. $Content': {
        'flex-grow': 1,
        'flex-basis': '100%'
      }
    },

    Icon: {},
    Content: {}
  };
};

exports.default = styles;