'use strict';

var _connection = require('./connection');

var _mutations = require('./mutations');

var _mutations2 = _interopRequireDefault(_mutations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resolvers = {
  contact: {
    notes: function notes(_ref) {
      var id = _ref.id;

      return new Promise(function (resolve, reject) {
        var query = 'SELECT * from note where contact_id = ?';
        _connection.connection.query(query, [id], function (error, results) {
          if (error) return reject(error);
          resolve(results);
        });
      });
    }
  },
  note: {
    contact: function contact(_ref2) {
      var contact_id = _ref2.contact_id;

      return new Promise(function (resolve, reject) {
        var query = 'SELECT * from contact where id = ?';
        _connection.connection.query(query, [contact_id], function (error, results) {
          if (error) return reject(error);
          resolve(results[0]);
        });
      });
    }
  },
  Query: {
    contacts: function contacts() {
      return new Promise(function (resolve, reject) {
        var query = 'SELECT * from contact';
        _connection.connection.query(query, function (error, results) {
          if (error) return reject(error);
          resolve(results);
        });
      });
    },
    notes: function notes() {
      return new Promise(function (resolve, reject) {
        var query = 'SELECT * from note';
        _connection.connection.query(query, function (error, results) {
          if (error) return reject(error);
          resolve(results);
        });
      });
    }
  },
  Mutation: _mutations2.default.Mutation
};

module.exports = {
  resolvers: resolvers
};
//# sourceMappingURL=resolvers.js.map