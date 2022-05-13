// import required dependencies
const { GraphQLSchema, GraphQLObjectType } = require("graphql");

// import queries
const { users } = require("./queries");

// immport mutations
const { register, login } = require("./mutations");

// define query types
const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "Queries",
  fields: { users },
});

// define mutation types
const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "Mutations",
  fields: { register, login },
});

// export the graphql schema
module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
