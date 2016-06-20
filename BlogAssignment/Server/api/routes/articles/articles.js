var express = require('express');
var router = express.Router();
var body=require('body-parser');
var multiparty = require('multiparty');
var Article = require('../../../models/article/article');
const fs = require('fs');

//save article
router.route('/saveArticle')
.post(function(req, res) {
console.log(req.body.image);

});

router.route('/getAllArticles')
.get(function(req, res){
      Article.find(function(err, articles) {
            if (err)
                res.send(err);
            res.json(articles);
        });
    })



module.exports= router;
