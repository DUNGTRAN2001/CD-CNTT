"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerServiceFail = exports.registerServiceSuccess = exports.registerService = exports.processLogout = exports.userLoginFail = exports.userLoginSucces = exports.addUserSuccess = void 0;

var _actionTypes = _interopRequireDefault(require("./actionTypes"));

var _reactToastify = require("react-toastify");

var _userService = require("../../services/userService");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addUserSuccess = function addUserSuccess() {
  return {
    type: _actionTypes["default"].ADD_USER_SUCCESS
  };
};

exports.addUserSuccess = addUserSuccess;

var userLoginSucces = function userLoginSucces(userInfo) {
  return {
    type: _actionTypes["default"].USER_LOGIN_SUCCESS,
    userInfo: userInfo
  };
};

exports.userLoginSucces = userLoginSucces;

var userLoginFail = function userLoginFail() {
  return {
    type: _actionTypes["default"].USER_LOGIN_FAIL
  };
};

exports.userLoginFail = userLoginFail;

var processLogout = function processLogout() {
  return {
    type: _actionTypes["default"].PROCESS_LOGOUT
  };
};

exports.processLogout = processLogout;

var registerService = function registerService(data) {
  return function _callee(dispatch, getState) {
    var res;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap((0, _userService.handleRegisterApi)(data));

          case 3:
            res = _context.sent;

            if (res && res.result && res.result.results && res.result.results.Success === true) {
              _reactToastify.toast.success("Đănhg kí tài khoản thành công!");

              dispatch(registerServiceSuccess());
            } else {
              dispatch(registerServiceFail());
            }

            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            dispatch(registerServiceFail());
            console.log("registerServiceFail:", _context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.registerService = registerService;

var registerServiceSuccess = function registerServiceSuccess() {
  return {
    type: _actionTypes["default"].REGISTER_SUCCESS
  };
};

exports.registerServiceSuccess = registerServiceSuccess;

var registerServiceFail = function registerServiceFail() {
  return {
    type: _actionTypes["default"].REGISTER_FAILED
  };
};

exports.registerServiceFail = registerServiceFail;