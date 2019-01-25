'use strict';

var _templateObject = _taggedTemplateLiteral(['\n  type contact {\n    first_name: String\n    last_name: String\n    mobile_number: String\n    telephone_number: String\n    email: String\n    address: String\n    image_url: String\n    notes: [note]\n  }\n\n  type note {\n    text: String\n    date: String\n    contact: contact\n  }\n\n  type Query {\n    contacts: [contact]\n    notes: [note]\n  }\n\n  input contactInput {\n    first_name: String\n    last_name: String\n    mobile_number: String\n    telephone_number: String\n    email: String\n    address: String\n    image_url: String\n  }\n\n  input noteInput {\n    contact_id: Int!\n    text: String\n  }\n\n  type response {\n    inserted_id: Int\n  }\n\n  type Mutation {\n    createContact(contactInput: contactInput!): response\n    createNote(noteInput: noteInput!): response\n  }\n'], ['\n  type contact {\n    first_name: String\n    last_name: String\n    mobile_number: String\n    telephone_number: String\n    email: String\n    address: String\n    image_url: String\n    notes: [note]\n  }\n\n  type note {\n    text: String\n    date: String\n    contact: contact\n  }\n\n  type Query {\n    contacts: [contact]\n    notes: [note]\n  }\n\n  input contactInput {\n    first_name: String\n    last_name: String\n    mobile_number: String\n    telephone_number: String\n    email: String\n    address: String\n    image_url: String\n  }\n\n  input noteInput {\n    contact_id: Int!\n    text: String\n  }\n\n  type response {\n    inserted_id: Int\n  }\n\n  type Mutation {\n    createContact(contactInput: contactInput!): response\n    createNote(noteInput: noteInput!): response\n  }\n']);

var _apolloServerExpress = require('apollo-server-express');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var typeDefs = (0, _apolloServerExpress.gql)(_templateObject);

module.exports = {
  typeDefs: typeDefs
};
//# sourceMappingURL=schema.js.map