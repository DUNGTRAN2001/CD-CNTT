"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleRegisterApi = exports.handleLoginApi = void 0;

var _axios = _interopRequireDefault(require("../axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var handleLoginApi = function handleLoginApi(username, password) {
  return _axios["default"].post("/api/Identity/login", {
    username: username,
    password: password
  });
};

exports.handleLoginApi = handleLoginApi;

var handleRegisterApi = function handleRegisterApi(data) {
  return _axios["default"].post("/api/Identity/register", data);
};

exports.handleRegisterApi = handleRegisterApi;