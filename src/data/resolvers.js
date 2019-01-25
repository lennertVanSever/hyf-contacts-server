import { connection } from './connection';
import Mutation from './mutations';

const resolvers = {
  contact: {
    notes: ({ id }) => {
      return new Promise((resolve, reject) => {
        const query = `SELECT * from note where contact_id = ?`;
        connection.query(query, [id], (error, results) => {
          if (error) return reject(error);
          resolve(results);
        });
      })
    }
  },
  note: {
    contact: ({ contact_id }) => {
      return new Promise((resolve, reject) => {
        const query = `SELECT * from contact where id = ?`;
        connection.query(query, [contact_id], (error, results) => {
          if (error) return reject(error);
          resolve(results[0]);
        });
      })
    }
  },
  Query: {
    contacts:() => {
      return new Promise((resolve, reject) => {
        const query = `SELECT * from contact`;
        connection.query(query, (error, results) => {
          if (error) return reject(error);
          resolve(results);
        });
      })
    },
    notes:() => {
      return new Promise((resolve, reject) => {
        const query = `SELECT * from note`;
        connection.query(query, (error, results) => {
          if (error) return reject(error);
          resolve(results);
        });
      })
    }
  },
  Mutation: Mutation.Mutation,
}

module.exports = {
  resolvers
}
