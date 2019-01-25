import { connection } from './connection';

export default {
    Mutation: {
        createContact: (root, { contactInput }) => {
            return new Promise((resolve, reject) => {
                const query = `INSERT INTO contact SET ?`;
                connection.query(query, contactInput, (error, result) => {
                  if (error) return reject(error);
                  resolve({ inserted_id: result.insertId });
                });
            })
        },
        createNote: (root, { noteInput }) => {
            return new Promise((resolve, reject) => {
                const query = `INSERT INTO note SET ?`;
                connection.query(query, noteInput, (error, result, fields) => {
                  if (error) return reject(error);
                  console.log(error, result, fields);
                  resolve({ inserted_id: result.insertId });
                });
            })
        },
    }
}
