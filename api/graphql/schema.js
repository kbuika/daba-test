// import required dependencies
const { GraphQLSchema, GraphQLObjectType } = require("graphql");

// import queries
const {} = require("./queries");

// immport mutations
const {} = require("./mutations");

// define query types
const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "Queries",
  fields: {},
});

// define mutation types
const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "Mutations",
  fields: {},
});

// export the graphql schema
module.exports = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});
