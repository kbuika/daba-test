// import required dependencies
const { GraphQLSchema, GraphQLObjectType } = require("graphql");

// import queries
const { users, user } = require("./queries");

// immport mutations
const { register, login, updateUser } = require("./mutations");

// define query types
const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "Queries",
  fields: { users, user },
});

// define mutation types
const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "Mutations",
  fields: { register, login, updateUser },
});

// export the graphql schema
module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
