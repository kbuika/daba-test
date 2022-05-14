const { GraphQLList, GraphQLID, GraphQLString } = require("graphql");
const { User } = require("../models");
const { UserType } = require("./types");

const users = {
  type: new GraphQLList(UserType),
  description: "List of all users",
  resolve(parent, args) {
    return User.find();
  },
};

const user = {
  type: UserType,
  description: "Get a single user",
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return User.findById(args.id);
  },
};

module.exports = { users, user };
