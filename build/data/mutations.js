'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _connection = require('./connection');

exports.default = {
    Mutation: {
        createContact: function createContact(root, _ref) {
            var contactInput = _ref.contactInput;

            return new Promise(function (resolve, reject) {
                var query = 'INSERT INTO contact SET ?';
                _connection.connection.query(query, contactInput, function (error, result) {
                    if (error) return reject(error);
                    resolve({ inserted_id: result.insertId });
                });
            });
        },
        createNote: function createNote(root, _ref2) {
            var noteInput = _ref2.noteInput;

            return new Promise(function (resolve, reject) {
                var query = 'INSERT INTO note SET ?';
                _connection.connection.query(query, noteInput, function (error, result, fields) {
                    if (error) return reject(error);
                    console.log(error, result, fields);
                    resolve({ inserted_id: result.insertId });
                });
            });
        }
    }
};
//# sourceMappingURL=mutations.js.map