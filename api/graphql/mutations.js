const { GraphQLString, GraphQLID } = require("graphql");

const { UserType } = require("./types");
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
    let userPresent = await User.findOne({ email });
    if(userPresent) {
      throw new Error("User already exists");
    }
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

const updateUser = {
  type: UserType,
  description: "Update a single user",
  args: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    avatar: { type: GraphQLString },
    bio: { type: GraphQLString },
    phone: { type: GraphQLString },
  },
  async resolve(parent, args) {
    const userUpdated = await User.findOneAndUpdate(
      {
        _id: args.id,
      },
      {
        name: args.name,
        email: args.email,
        avatar: args.avatar,
        bio: args.bio,
        phone: args.phone,
      },
      { new: true, runValidators: true }
    );

    if (!userUpdated) {
      throw new Error("User not found");
    }

    return userUpdated;
  },
};

module.exports = { register, login, updateUser };
