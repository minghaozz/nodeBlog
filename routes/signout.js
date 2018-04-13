/*
* @Author: Marte
* @Date:   2018-04-07 15:50:40
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-09 16:59:36
*/

'use strict';
const express = require('express')
const router = express.Router()

const checkLogin = require('../middlewares/check').checkLogin

// GET /signout 登出
router.get('/', checkLogin, function (req, res, next) {
  req.session.user = null
  req.flash('success', '登出成功')
  res.redirect('/posts')
})

module.exports = router