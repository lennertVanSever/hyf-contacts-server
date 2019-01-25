'use strict';

var _apolloServer = require('apollo-server');

var _resolvers = require('./data/resolvers');

var _Schema = require('./data/Schema');

var _apolloBoost = require('apollo-boost');

var _apolloBoost2 = _interopRequireDefault(_apolloBoost);

var _nodeFetch = require('node-fetch');

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.fetch = _nodeFetch2.default;

var server = new _apolloServer.ApolloServer({
  typeDefs: _Schema.typeDefs,
  resolvers: _resolvers.resolvers,
  introspection: true,
  playground: {
    settings: {
      'editor.theme': 'light',
      'editor.cursorShape': 'line'
    }
  }
});

var port = process.env.PORT || 5001;
server.listen({ port: port }).then(function (_ref) {
  var url = _ref.url;

  console.log('\uD83D\uDE80  ' + url);
  global.client = new _apolloBoost2.default({
    uri: 'http://localhost:4000/graphql'
  });
});
//# sourceMappingURL=index.js.map