var express = require('express')
var router = express.Router()

const {createNewPost} = require('./controller/PostController')
router.get('/about/:postID',createNewPost)

module.exports =router