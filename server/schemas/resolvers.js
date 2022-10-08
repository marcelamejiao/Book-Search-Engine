const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async () => {
      return User.find({});
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
        const user = await User.findOne( { email });
  
        if (!user) {
          throw new AuthenticationError("Can't find this user");
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Wrong password!');
        }
  
        const token = signToken(user);
  
        return { token, user };
    },
  },
};

module.exports = resolvers;
