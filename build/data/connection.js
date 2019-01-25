'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connection = undefined;

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connection = _mysql2.default.createConnection({
  host: 'remotemysql.com',
  user: 'V7nz74RlH4',
  password: process.env.PASSWORD,
  database: 'V7nz74RlH4',
  multipleStatements: true
});

connection.connect();

exports.connection = connection;
//# sourceMappingURL=connection.js.map