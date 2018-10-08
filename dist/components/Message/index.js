"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _reactJss = _interopRequireDefault(require("react-jss"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styles = _interopRequireDefault(require("./styles"));

var Message = function Message(_ref) {
  var _classNames;

  var children = _ref.children,
      classes = _ref.classes,
      isVisible = _ref.isVisible,
      type = _ref.type;
  var icon = type === 'default' ? null : type;
  var componentClasses = (0, _classnames.default)(classes.Message, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.TypeInfo, type === 'info'), (0, _defineProperty2.default)(_classNames, classes.TypeError, type === 'error'), (0, _defineProperty2.default)(_classNames, classes.WithIcon, icon !== undefined), _classNames));

  if (isVisible === false) {
    return null;
  }

  return _react.default.createElement("div", {
    className: componentClasses
  }, icon !== undefined ? _react.default.createElement("div", {
    className: classes.IconContainer
  }, _react.default.createElement(_Icon.default, {
    className: classes.Icon,
    name: icon
  })) : null, _react.default.createElement("div", {
    className: classes.Content
  }, children));
};

Message.propTypes = {
  isVisible: _propTypes.default.bool,
  type: _propTypes.default.oneOf(['default', 'info', 'error'])
};
Message.defaultProps = {
  isVisible: true,
  type: 'default'
};

var _default = (0, _reactJss.default)(_styles.default)(Message);

exports.default = _default;