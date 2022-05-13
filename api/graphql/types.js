const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");

const UserType = new GraphQLObjectType({
  name: "User",
  description: "User Type",
  fields: () => ({
    id: { types: GraphQLID },
    name: { types: GraphQLString },
    email: { types: GraphQLString },
    avatar: { types: GraphQLString },
    bio: { types: GraphQLString },
    phone: { types: GraphQLString },
  }),
});

module.exports = { UserType };
