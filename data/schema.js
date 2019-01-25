import { gql } from 'apollo-server-express';


const typeDefs = gql`
  type contact {
    first_name: String
    last_name: String
    mobile_number: String
    telephone_number: String
    email: String
    address: String
    image_url: String
    notes: [note]
  }

  type note {
    text: String
    date: String
    contact: contact
  }

  type Query {
    contacts: [contact]
    notes: [note]
  }

  input contactInput {
    first_name: String
    last_name: String
    mobile_number: String
    telephone_number: String
    email: String
    address: String
    image_url: String
  }

  input noteInput {
    contact_id: Int!
    text: String
  }

  type response {
    inserted_id: Int
  }

  type Mutation {
    createContact(contactInput: contactInput!): response
    createNote(noteInput: noteInput!): response
  }
`;

module.exports = {
  typeDefs
}
