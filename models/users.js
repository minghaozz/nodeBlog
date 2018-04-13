/*
* @Author: Marte
* @Date:   2018-04-07 21:57:48
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-10 09:21:43
*/

'use strict';
const User = require('../lib/mongo').User

module.exports = {
  // 注册一个用户
  create: function create (user) {
    return User.create(user).exec()
  },

  getUserByName: function getUserByName (name) {
    return User
        .findOne({ name: name })
        .addCreatedAt()
        .exec()
  }
}