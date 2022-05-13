const { GraphQLString } = require("graphql");

const {} = require("./types");
const { User } = require("../models");
const { createJwtToken } = require("../util/auth");

const register = {
  type: GraphQLString,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const { email, password } = args;
    const user = new User({ email, password });

    await user.save();
    const token = createJwtToken(user);
    return token;
  },
};

const login = {
  type: GraphQLString,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const user = await User.findOne({ email: args.email }).select("+password");
    if (!user || args.password !== user.password) {
      throw new Error("Invalid credentials");
    }
    const token = createJwtToken(user);
    return token;
  },
};

module.exports = { register, login };
